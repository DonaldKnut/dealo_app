"use client";
import { parseEther } from "ethers/lib/utils";
import React, { createContext, useState, useEffect } from "react";
import {
  contractABI,
  contractAddress,
} from "../dealopay/crypto/cryptoComponents/Utils/constants";
import { ethers } from "ethers";

interface FormDataType {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

interface TransactionContextProps {
  connectWallet: () => Promise<void>;
  currentAccount?: string;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  sendTransaction: () => Promise<void>;
  isLoading: boolean;
}

export const TransactionContext = createContext<
  TransactionContextProps | undefined
>(undefined);

const ethereum =
  typeof window !== "undefined" ? (window as any).ethereum : null;

const getEthereumContract = () => {
  if (!ethereum) {
    console.error("Metamask (ethereum) object is not available.");
    return null;
  }

  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );

    return transactionContract;
  } catch (error) {
    console.error("Error creating provider:", error);
    return null;
  }
};

export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  let initialTransactionCount = 0;

  if (typeof localStorage !== "undefined") {
    const storedTransactionCount = localStorage.getItem("getTransactionCount");
    initialTransactionCount = storedTransactionCount
      ? parseInt(storedTransactionCount, 10)
      : 0;
  }

  const [transactionCount, setTransactionCount] = useState(
    initialTransactionCount
  );

  const [formData, setFormData] = useState<FormDataType>({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        alert("Please install Metamask");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
      alert("Check if Metamask is installed on your computer");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkIfWalletIsConnected();
    }
  }, []);

  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        alert("Please install Metamask");
        return;
      }

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();

      if (!transactionContract) {
        alert("Error getting Ethereum contract");
        return;
      }

      // const parsedAmount = ethers.parseEther(amount);
      const parsedAmount = parseEther(amount);

      const sendTransactionResult = await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: ethers.utils.hexlify(21000), // You might want to adjust the gas value
            gasPrice: ethers.utils.hexlify(
              ethers.utils.parseUnits("1", "gwei")
            ), // You might want to adjust the gas price
            value: ethers.utils.hexlify(parsedAmount), // Convert wei amount to hex
          },
        ],
      });

      const transactionHash = await transactionContract?.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      if (transactionHash) {
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setIsLoading(false);
        console.log(`Success - ${transactionHash.hash}`);

        const updatedTransactionCount =
          await transactionContract.getTransactionCount();
        setTransactionCount(updatedTransactionCount.toNumber());

        alert("Transaction Successful");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error during Transaction Sending:", error);
      alert("Transaction Successful, Kindly notify the receiver");
    }
  };

  const connectWallet = async () => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      if (!ethereum) {
        alert("Please install Metamask");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert(
        "Something went wrong. Also check if Metamask is installed on your computer"
      );
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
