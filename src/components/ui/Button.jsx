import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button
      className="p-5 px-10 bg-[#df984a] hover:bg-[#e8841a] duration-300 font-semibold text-white rounded-md"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
