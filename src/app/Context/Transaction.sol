// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transactions {
    uint256 transactionCount;
    address payable taxAccount;
    uint256 taxPercentage; // Percentage of the transaction amount to be sent to the tax account

    event Transfer(address indexed from, address indexed receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    constructor(address payable _taxAccount, uint256 _taxPercentage) {
        taxAccount = _taxAccount;
        taxPercentage = _taxPercentage;
    }

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        require(amount > 0, "Amount must be greater than zero");

        uint taxAmount = (amount * taxPercentage) / 100;
        uint netAmount = amount - taxAmount;

        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, netAmount, message, block.timestamp, keyword));
        
        // Send tax to tax account
        taxAccount.transfer(taxAmount);

        emit Transfer(msg.sender, receiver, netAmount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256){
         return transactionCount;
    }
}


