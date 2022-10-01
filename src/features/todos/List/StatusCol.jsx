import React from "react";

const StatusCol = ({ status }) => {
  const statusBackground = () => {
    return status === "pending"
      ? "bg-[#5a5a5a]"
      : status === "progress"
      ? "bg-[#0043fc]"
      : "bg-[#0be600]";
  };
  return (
    <span
      className={`${statusBackground()} cursor-pointer p-2 hover:opacity-90 px-4 rounded-md text-[#fff] font-medium capitalize flex `}
    >
      {status}
    </span>
  );
};

export default StatusCol;
