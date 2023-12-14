"use client";
import { useWalletStore } from "@/context/counterContextProvider";
import React from "react";
import AdminSettings from "./admin";
import User from "./user";
import { DEVWALLET } from "@/app/services/constants";

const Details = () => {
  const { injectiveAddress } = useWalletStore();

  return (
    <div className="flex flex-col gap-6">
      {injectiveAddress === DEVWALLET ? <AdminSettings /> : <User />}
    </div>
  );
};

export default Details;
