"use client";
import React from "react";
import { useState } from "react";

interface IProps {
  id: string;
  handleSelectChange: (e: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  selectedOption: string;
}
const Select = ({ id, handleSelectChange, selectedOption }: IProps) => {
  return (
    <div>
      <select
        id={id}
        className="bg-accent_light border border-gray-300 text-accent_000 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-2"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option defaultChecked value="1">
          Qty: 1
        </option>
        <option value="2">Qty: 2</option>
        <option value="3">Qty: 3</option>
        <option value="4">Qty: 4</option>
        <option value="5">Qty: 5</option>
      </select>
    </div>
  );
};

export default Select;
