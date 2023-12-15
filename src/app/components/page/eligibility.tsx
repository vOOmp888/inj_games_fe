"use client";
import React, { useState } from "react";
import { isCosmosWallet, Wallet } from "@injectivelabs/wallet-ts";
import Confetti from "react-dom-confetti";
import { FaTwitter } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

import { checkEligibility } from "@/app/handlers/checkEligibility";

import { Input } from "../ui/input";
import Button from "../ui/button";
import { toast } from "react-toastify";

const config = {
  angle: 107,
  spread: 231,
  startVelocity: 62,
  elementCount: 200,
  dragFriction: 0.12,
  duration: 4590,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "1000px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export const Eligibility = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleWalletAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWalletAddress(event.target.value);
  };

  const handleCheckEligibility = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      if (!walletAddress.startsWith("inj") || walletAddress.length !== 42) {
        toast.error("string provided is not an injective wallet", {
          progress: undefined,
        });
        setIsFetching(false);
        return;
      }
      const data = await checkEligibility(walletAddress);
      setIsEligible(data.data.isEligible);
      setIsFetching(false);
    } catch (err) {
      toast.error("Something went wrong", { progress: undefined });
    } finally {
      setIsFetching(false);
    }
  };

  const handleReset = () => {
    setIsEligible(null);
    setWalletAddress("");
  };

  return (
    <div className="w-full flex flex-col max-w-[45rem] items-center justify-center gap-6">
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-4xl font-bold text-accent_fff font-sans text-center">
            Welcome to{" "}
            <span className="text-secondary font-joti_one text-5xl">vOOmp</span>
          </h1>
          <p className="text-sm text-accent_fff text-center font-joti_one">
            Check whitelist status eligibility
          </p>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleCheckEligibility}
        >
          <Input
            onChange={handleWalletAddressChange}
            type="text"
            autoCorrect="false"
            autoComplete="false"
            className="border-secondary placeholder:secondary font-joti_one placeholder:text-secondary placeholder:opacity-75 text-secondary placeholder:font-joti_one p-6 text-lg"
            placeholder="input wallet address"
            value={walletAddress}
          />
          <div className="w-full flex gap-6 items-center flex-wrap md-flex-nowrap">
            <Button
              variant="accent"
              className="w-full gap-8 text-base text-accent_fff p-6 font-joti_one"
            >
              {isFetching ? (
                <LuLoader2 className="text-base" />
              ) : (
                "Check Eligibility"
              )}
            </Button>
            {isEligible && (
              <Button
                onClick={handleReset}
                className="text-base p-6 text-accent_fff font-joti_one w-full"
              >
                Reset & check another wallet
              </Button>
            )}
          </div>
        </form>
      </div>
      <div className="w-full">
        <div className="w-full">
          {isEligible === null ? (
            ""
          ) : isEligible ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-accent_fff text-lg font-joti_one">
                🎉 Your address is whitelisted
              </p>
              <a
                href="https://twitter.com/intent/tweet?text=Excited%20that%20I%20am%20Whitelisted%20%F0%9F%A5%B3%0A%0ANew%20era%20on%20%23Injective%20by%20%40v00mp%20%F0%9F%8D%BB%0A%0ACheck%20if%20you're%20Whitelisted%20%F0%9F%91%87%F0%9F%8F%BC%0A%0Ahttps%3A%2F%2Fwhitelist.voomp.xyz%2F&media=https://drive.google.com/uc?id=1ji8Eh3u-bLtYqNf6ItkUb1Pp1s1yKl_6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Button
                  variant="accent"
                  className="gap-2 text-base p-6 font-joti_one"
                >
                  <FaTwitter className="text-xl text-secondary" />
                  <p>Tweet about it</p>
                </Button>
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-accent_fff text-lg font-joti_one">
                😪 You are not eligible for whitelist
              </p>
            </div>
          )}
        </div>
      </div>
      <Confetti
        active={isEligible === null ? false : isEligible}
        config={config}
      />
    </div>
  );
};
