"use client";
import { useState } from "react";
import { useAppStore } from "../../store/StoreProvider";

const CounterTestComponent: React.FC = () => {
  const counterState = useAppStore((state) => state);
  const { count, increment, decrement, incrementBy, decrementBy, reset } =
    counterState;

  const [customValue, setCustomValue] = useState<number>(2);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Counter: <span className="text-blue-600">{count}</span>
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -1
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +1
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Custom Value:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={customValue}
            onChange={(e) => setCustomValue(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => decrementBy(customValue)}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -
          </button>
          <button
            onClick={() => incrementBy(customValue)}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Counter State Log:</h3>
        <pre className="bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
          {JSON.stringify({ count }, null, 2)}
        </pre>
      </div>
      <p className="text-colorScBlue bg-[#5a8cf7]">Trae Zeeofor</p>
      <p className="text-colorScBlue bg-[#8bb8fd]">Trae Zeeofor</p>

      <p className="text-colorScPurple bg-[#b18fd7]">Trae Zeeofor</p>
      <p className="text-colorScPurple bg-[#bc9bd4]">Trae Zeeofor</p>

      <p className="text-colorScRed bg-[#e38d8d]">Trae Zeeofor</p>
      <p className="text-colorScRed bg-[#ae5f5f]">Trae Zeeofor</p>

      <p className="text-colorScPink bg-[#c7c5f7]">Trae Zeeofor</p>
      <p className="text-colorScPink bg-[#a9a6eb]">Trae Zeeofor</p>
    </div>
  );
};

export default CounterTestComponent;
