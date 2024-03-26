"use client";
import React, { FC, useContext } from "react";
import { TransactionContext } from "../../../../Context/TransactionContext";
import "./Transactions.css";
import Loader from "../Loader/Loader";
import useFetch from "../hooks/useFetch";
import transactionsData from "../Utils/Transaction.json";
import dummyData from "../Utils/dummyData";
import Image from "next/image";

interface AbiInput {
  internalType: string;
  name: string;
  type: string;
}

interface Abi {
  inputs: AbiInput[];
  stateMutability: string;
  type: string;
  anonymous?: undefined;
  name?: undefined;
  outputs?: undefined;
}

interface Transaction {
  _format?: string;
  contractName?: string;
  sourceName?: string;
  abi?: Abi[];
  bytecode?: string;
  deployedBytecode?: string;
}

interface TransactionsCardProps extends Transaction {
  key: number;
  id?: number;
  url?: string;
  message?: string;
  timestamp?: string;
  addressFrom?: string;
  amount?: string;
  addressTo?: string;
}

const TransactionsCard: FC<TransactionsCardProps> = ({
  _format,
  contractName,
  sourceName,
  abi,
  bytecode,
  deployedBytecode,
  key,
  id,
  url,
  message,
  timestamp,
  addressFrom,
  amount,
  addressTo,
}) => {
  const gifUrl = useFetch({ keyword: _format || "" });

  const shortenAddress = (address: string) => {
    return address.substring(0, 8) + "...";
  };

  return (
    <div className="bg-customDarkGreen m-4 flex flex-1 2xl:min-w-customWidth2xl 2xl:max-w-customWidth2xl sm:min-w-customWidthSm sm:max-w-customWidthSm min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          {sourceName && (
            <a
              href={`https://ropsten.etherscan.io/address/${sourceName}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white text-base">
                Source Name: {shortenAddress(sourceName)}
              </p>
            </a>
          )}
          {contractName && (
            <p className="text-white text-base">
              Contract Name: {contractName}
            </p>
          )}
          {abi && (
            <p className="text-white text-base">Abi: {JSON.stringify(abi)}</p>
          )}
        </div>
        <Image
          src={gifUrl || deployedBytecode}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-customBlue font-bold">Bytecode: {bytecode}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions: FC = () => {
  const context = useContext(TransactionContext);
  const transactions: Transaction[] = Array.isArray(transactionsData)
    ? transactionsData
    : [];
  const currentAccount = context?.currentAccount;

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
