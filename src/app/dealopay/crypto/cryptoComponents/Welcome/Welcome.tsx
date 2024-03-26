"use client";
// Importing React and necessary components/icons
import React, { useContext, useState, useEffect } from "react";
import "./Welcome.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "../Loader/Loader";
import { TransactionContext } from "../../../../Context/TransactionContext";
import { shortenAddress } from "../Utils/shortenAddress";
import { MdDangerous } from "react-icons/md";
import { LuChevronRightCircle, LuChevronRightSquare } from "react-icons/lu";
import { FaWallet } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

// Interface for Input component props
interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

// Input component
const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  type,
  value,
  handleChange,
}) => (
  <input
    placeholder={placeholder}
    type={type}
    value={value}
    name={name}
    onChange={(e) => handleChange(e, name)}
    step="0.0001"
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism font-sans"
    required
  />
);

// Extending the global Window interface to include the ethereum object
declare global {
  interface Window {
    ethereum?: any;
  }
}

// Welcome component
const Welcome: React.FC = () => {
  // Destructuring values from the context;
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  // State for form completion and invalid address warning
  const [formIncomplete, setFormIncomplete] = useState(false);
  const [invalidAddressWarning, setInvalidAddressWarning] = useState(false);

  // Function to check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return (
      typeof window !== "undefined" &&
      Boolean(window.ethereum && window.ethereum.isMetaMask)
    );
  };

  // Function to handle address change and validate address
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    handleChange(e, name);

    const isValidAddress = /^0x[a-fA-F0-9]{40}$/.test(e.target.value);
    setInvalidAddressWarning(!isValidAddress);
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !/^0x[a-fA-F0-9]{40}$/.test(addressTo)) {
      setInvalidAddressWarning(true);
      return;
    }

    setInvalidAddressWarning(false);
    await sendTransaction();
  };

  // useEffect to add/remove event listener
  useEffect(() => {
    let confirmationListener:
      | ((confirmationNumber: number) => void)
      | undefined;

    if (window.ethereum) {
      confirmationListener = (confirmationNumber: number) => {
        if (confirmationNumber < 1) {
          alert(
            "Transaction is incomplete. Please confirm the transaction in MetaMask."
          );
        }
      };

      window.ethereum.on("confirmation", confirmationListener);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (window.ethereum && confirmationListener) {
        window.ethereum.removeListener("confirmation", confirmationListener);
      }
    };
  }, []);

  // JSX structure for the Welcome component
  return (
    <div>
      <div className="mother-ethereum-wrapper">
        <div className="crypto-section_left-part">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 font-sans">
            Send <span className="freelance text-4xl">Crypto</span> <br />{" "}
            across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base font-sans">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Dealo Pay.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#4c8d55] p-3 rounded-full cursor-pointer hover:bg-[#6ab053] font-sans"
              disabled={!isMetaMaskInstalled()}
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="crypto-menu-advert-wrapper font-sans">
            <div className="first-crypto-menu-wrapper general-style">
              Reliability
            </div>
            <div className="second-crypto-menu-wrapper general-style">
              Security
            </div>
            <div className="third-crypto-menu-wrapper general-style">
              Ethereum
            </div>
            <div className="fourth-crypto-menu-wrapper general-style">
              Web 3.0
            </div>
            <div className="second-crypto-menu-wrapper general-style">
              Low Fees
            </div>
            <div className="fifth-crypto-menu-wrapper general-style">
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl my-5">
            <div className="p-4 bg-gradient-to-r from-green-400 to-grey rounded-xlflex flex-col justify-between card mx-auto">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={28} color="#fff" />
                </div>
                <BsInfoCircle fontSize={22} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-xs font-sans">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-grey font-semibold text-base mt-1 font-sans">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-[#222222] rounded-3xl crypto_input">
            <div className="p-5 sm:w-96 w-full flex justify-start items-center">
              <FaWallet style={{ fontSize: "24px" }} />
              <Input
                placeholder="Address To"
                name="addressTo"
                type="text"
                handleChange={handleAddressChange}
              />
            </div>
            <div className="p-5 sm:w-96 w-full flex justify-start items-center">
              {/* <GiPriceTag /> */}
              <RiMoneyDollarCircleFill style={{ fontSize: "28px" }} />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
            </div>
            <div className="p-5 sm:w-96 w-full flex justify-start items-center">
              <FaKey style={{ fontSize: "24px" }} />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
            </div>
            <div className="p-5 sm:w-96 w-full flex justify-start items-center">
              <MdMarkEmailUnread style={{ fontSize: "24px" }} />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />
            </div>
            {invalidAddressWarning && (
              <p className="text-red-500 mt-2 flex items-center gap-1 font-sans">
                <MdDangerous style={{ fontSize: "24px" }} /> Information
                Required, Incomplete.
              </p>
            )}

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 bg-lightgreen font-sans border-[1px] p-2 border-[#ffffff] hover:bg-[#29552d] rounded-full cursor-pointer flex items-center justify-center"
              >
                Send now <LuChevronRightCircle className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Welcome component
export default Welcome;
