"use client";
import React, { useEffect, useState, useCallback } from "react";
import { WalletStrategy } from "@injectivelabs/wallet-ts";
import { IoCopyOutline, IoExitOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { EthereumChainId, ChainId } from "@injectivelabs/ts-types";
import Modal from "./modal";
import Button from "./ui/button";
import ConnectWallet from "./connectWallet";
import { shortenAddress } from "../../lib/helper";
import { useWalletStore } from "../../context/counterContextProvider";

const Connector = () => {
  const { connectEthereumWallet, connectKeplrWallet, injectiveAddress } =
    useWalletStore();
  const [width, setWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, []);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(injectiveAddress)
      .then(() => {
        toast.info("Text copied to clipboard", {
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Unable to copy to clipboard.", { progress: undefined });
      });
  }, [injectiveAddress]);

  return (
    <>
      {!injectiveAddress ? (
        <Button onClick={() => setIsOpen(true)} variant="accent">
          Connect {width > 360 ? "Wallet" : ""}
        </Button>
      ) : (
        <div
          className="flex flex-none cursor-pointer flex-row 
        items-center justify-between transition duration-150 ease-in-out 
         lg:rounded-lg border-zinc-800 hover:border-zinc-400 border px-4 py-3"
        >
          <div className="rounded-sm">
            <p className="w-32 truncate text-xs font-medium text-accent_fff">
              {shortenAddress(injectiveAddress) || "inj1qjfsdr...kdewav3a"}
            </p>
            <p className="text-xs font-light text-accent_fff">{5} INJ</p>
          </div>
          <div className="flex flex-row space-x-2">
            <div
              data-tooltip-id=":r26:"
              data-tooltip-content="Copy&nbsp;Name&nbsp;(hold&nbsp;Alt&nbsp;for&nbsp;address)"
              data-tooltip-place="top"
            >
              <button className="block h-7 w-7 cursor-pointer rounded p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 text-black hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-900">
                <IoCopyOutline onClick={copyToClipboard} className="font-lg" />
              </button>
            </div>
            <div
              data-tooltip-id=":r27:"
              data-tooltip-content="Disconnect"
              data-tooltip-place="top"
            >
              <button className="block h-7 w-7 cursor-pointer rounded p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 text-black hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-900">
                <IoExitOutline className="font-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <ConnectWallet
            handleKeplr={connectKeplrWallet}
            handleMetamask={connectEthereumWallet}
            setIsOpen={setIsOpen}
          />
        </Modal>
      )}
    </>
  );
};

export default Connector;
