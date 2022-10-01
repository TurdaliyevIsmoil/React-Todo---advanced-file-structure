import React from "react";
import GlassBox from "../components/ui/GlassBox";

const Navbar = () => {
  return (
    <GlassBox className="w-full h-20 flex items-center justify-between bg-[#fff5] text-gray-800 px-10">
      <img
        src="https://img.icons8.com/material-outlined/48/000000/menu--v1.png"
        className="w-7"
      />
      <img
        src="https://img.icons8.com/ios/100/000000/todo-list--v1.png"
        className="w-7"
      />
    </GlassBox>
  );
};

export default Navbar;
