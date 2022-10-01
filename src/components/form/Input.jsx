import React from "react";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className="grow rounded-md px-5"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
