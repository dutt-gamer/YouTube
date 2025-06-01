import React from "react";

const Button = ({name}) => {
  return (
    <div className="m-2 px-3 py-1 rounded-lg bg-slate-100 text-center">
      <button>{name}</button>
    </div>
  );
};

export default Button;
