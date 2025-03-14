"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(1);
  const [error, setError] = useState("");

  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return;
    if (count === quantity) {
      if (value === -1) {
        setError("");
        setCount(count + value);
        return;
      }
      setError(`Máxima cantidad permitida: ${quantity}`);
      return;
    }
    setError("");
    setCount(count + value);
  };

  return (
    <div>
      <div className="flex">
        <button onClick={() => onQuantityChanged(-1)}>
          <IoRemoveCircleOutline size={30} />
        </button>

        <span className="w-15 mx-3 px-5 bg-gray-100 text-center rounded">
          {count}
        </span>

        <button onClick={() => onQuantityChanged(+1)}>
          <IoAddCircleOutline size={30} />
        </button>
      </div>

      <span className="text-red-400 text-sm">{error}</span>
    </div>
  );
};
