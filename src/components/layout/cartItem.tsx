import { useState } from "react";

export interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  onRemove?: (id: number) => void;
}

export default function CartItem({
  id,
  name,
  image,
  price,
  onRemove,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  return (
    <div className="flex items-center mb-4 px-4 py-2 bg-white rounded-md shadow-sm">
      <button
        onClick={() => onRemove?.(id)}
        className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-red-200 text-gray-600 hover:text-red-600 transition text-lg leading-none"
      >
        ×
      </button>

      <img
        src={image}
        alt={name}
        className="w-28 h-28 object-cover rounded-md ml-4"
      />

      <div className="flex-1 flex justify-center">
        <div className="inline-flex items-center border border-[#E4E7E9] rounded-md overflow-hidden">
          <button
            onClick={decrement}
            className="px-3 py-1 hover:bg-gray-100 transition"
          >
            −
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={increment}
            className="px-3 py-1 hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      </div>

      <span className="text-lg font-semibold text-[#151B3F] ml-4">
        R$ {(price * quantity).toFixed(2)}
      </span>
    </div>
  );
}