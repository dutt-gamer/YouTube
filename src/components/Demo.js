import React, { useState, useMemo, useCallback } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Memoize the nth prime calculation
  const prime = useMemo(() => findNthPrime(text), [text]);

  // Memoize the setText function to prevent unnecessary re-creations
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div
      className={`m-2 p-2 w-96 h-96 border border-black ${
        isDarkTheme ? "bg-gray-800 text-white" : ""
      }`}
    >
      <button
        className="m-10 p-2 bg-green-200"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Toggle
      </button>
      <div>
        <input
          className="border border-black w-72 p-2 text-black"
          type="number"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;