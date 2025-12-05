import React from "react";

function Container({ children, className }) {
  return (
    <div
      className={`rounded-lg p-4 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
