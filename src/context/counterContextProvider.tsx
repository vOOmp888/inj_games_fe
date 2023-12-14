"use client";
import { getInjectiveAddress } from "@injectivelabs/sdk-ts";
import React, { createContext, useContext, useEffect, useState } from "react";

import { getEthereumAddresses, getKeplrAddresses } from "@/app/services/wallet";

type StoreState = {
  injectiveAddress: string;
  ethereumAddress: string;
  connectEthereumWallet: () => void;
  connectKeplrWallet: () => void;
};

const WalletContext = createContext<StoreState>({
  ethereumAddress: "",
  injectiveAddress: "",
  connectEthereumWallet: () => {},
  connectKeplrWallet: () => {},
});

export const useWalletStore = () => useContext(WalletContext);

type Props = {
  children?: React.ReactNode;
};

const WalletContextProvider = (props: Props) => {
  const [ethereumAddress, setEthereumAddress] = useState("");
  const [injectiveAddress, setInjectiveAddress] = useState("");

  async function connectEthereumWallet() {
    const [address] = await getEthereumAddresses();
    setEthereumAddress(address);
    console.log(address);
    setInjectiveAddress(getInjectiveAddress(address));
  }

  async function connectKeplrWallet() {
    const [address] = await getKeplrAddresses();
    setInjectiveAddress(address);
  }

  return (
    <WalletContext.Provider
      value={{
        ethereumAddress,
        injectiveAddress,
        connectEthereumWallet,
        connectKeplrWallet,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
