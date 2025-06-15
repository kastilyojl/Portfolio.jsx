import React from "react";

function container({ children, className }) {
  return (
    <div
      className={`border-2 border-gray-300/5 rounded-lg p-4 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default container;
