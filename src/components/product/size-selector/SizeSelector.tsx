import { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: Size;
  availabelSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availabelSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas Disponibles</h3>
      <div className="felx">
        {availabelSizes.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline text-lg", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
