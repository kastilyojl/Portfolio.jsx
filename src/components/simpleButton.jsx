import React from "react";

export default function simpleButton({ children, className }) {
  return (
    <button
      className={`w-full h-10 cursor-pointer rounded-md ${className} font-medium`}
    >
      {children}
    </button>
  );
}
