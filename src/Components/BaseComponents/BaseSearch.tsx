import { useState } from "react";
import BaseButton from "./BaseButton";

interface BaseSearchProps {
  title?: string;
  returnLabel?: string;
  onewayLabel?: string;
  label1?: string;
  placeholder1?: string;
  label2?: string;
  placeholder2?: string;
  label3?: string;
  placeholder3?: string;
  buttonTitle?: string;
}

export default function BaseSearch({
  title,
  returnLabel,
  onewayLabel,
  label1,
  label2,
  label3,
  placeholder1,
  placeholder2,
  placeholder3,
  buttonTitle
}: BaseSearchProps) {
  const [tripType, setTripType] = useState<"return" | "oneway">("oneway");

  return (
    <div className="w-full flex justify-center mt-10 font-robotto">
      <div className="bg-white rounded-md shadow-lg p-6 max-w-5xl border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold tracking-wide uppercase">
            {title ?? ""}
          </h2>

          <div className="flex gap-6 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="trip"
                checked={tripType === "return"}
                onChange={() => setTripType("return")}
              />
              {returnLabel ?? ""}
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="trip"
                checked={tripType === "oneway"}
                onChange={() => setTripType("oneway")}
              />
              {onewayLabel ?? ""}
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative w-full max-w-md">
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-600 text-sm">
              {label1 ?? ""}
            </label>
            <input
              type="text"
              defaultValue={placeholder1 ?? ""}
              className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="relative w-full max-w-md">
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-600 text-sm">
              {label2 ?? ""}
            </label>
            <input
              type="text"
              defaultValue={placeholder2 ?? ""}
              className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="relative w-full max-w-md">
            <label className="absolute -top-3 left-4 bg-white px-1 text-gray-600 text-sm flex items-center gap-2">
              {label3 ?? ""}
            </label>
            <input
              type="date"
              defaultValue={placeholder3 ?? ""}
              className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="flex items-end">
            <BaseButton
              text={buttonTitle ?? "Search"}
              textColor="text-white"
              bgColor="bg-[#F99A0E]"
              width="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
