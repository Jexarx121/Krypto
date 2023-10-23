import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({provider, signer, transactionContract});
}

// able to transfer this data to any component in react
export const TransactionProvider = ({ children }) => {

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install Metamask");

    // getting our connected accounts
    const account = await ethereum.request({ method: 'eth_accounts'});
    console.log(account);
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ value: 'test'}}>
      {children}
    </TransactionContext.Provider>
  )
}