import { useState } from "react";

export default function WishlistItem({ item }) {
  const [count, setCount] = useState(1);

  return (
    <li className="flex justify-between bg-purple-50 px-4 py-3 rounded-lg shadow-sm">
      
      
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <p className="font-semibold text-gray-700">{item.name}</p>
          <p className="text-sm text-gray-500">₹{item.price} each</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-purple-100 px-2 py-1 rounded-md">
          <button
            className="bg-red-400 hover:bg-red-600 text-white px-2 rounded"
            onClick={() => setCount(Math.max(1, count - 1))}
          >
            −
          </button>

          <span className="mx-3 font-medium">{count}</span>

          <button
            className="bg-green-400 hover:bg-green-600 text-white px-2 rounded"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>

        <span className="font-semibold text-gray-800">
          ₹{item.price * count}
        </span>
      </div>
    </li>
  );
}
