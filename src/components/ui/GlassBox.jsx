import React from "react";

const GlassBox = ({ children, className, ...rest }) => {
  return (
    <div className={`backdrop-blur-sm ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default GlassBox;
