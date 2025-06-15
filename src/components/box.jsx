import React from "react";

export default function Box({ image, title }) {
  return (
    <div className="p-2 w-18 h-18 rounded-md bg-white/5 flex items-center justify-center">
      <img
        alt={title}
        src={image}
        className="w-8 h-8 rounded object-contain"
        title={title}
      />
    </div>
  );
}
