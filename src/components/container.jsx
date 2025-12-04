import React from "react";

function container({ children, className }) {
  return (
    <div
      className={`rounded-lg p-4 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default container;
