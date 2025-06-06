import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;

  const ref = useRef(0);
  //not lik ref=0
  //ref:{current:0}

  console.log("Rendering...");

  const [y, setY] = useState(0);
  return (
    <div className="mt-2 ml-4 p-2 border bg-slate-50 border-black h-96 w-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x =", x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current++;
            console.log("Ref = ",ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
