import React from "react";

export default function buttonAnimation({ title, icon }) {
  return (
    // <!-- From Uiverse.io by EcheverriaJesus -->
    <div class="group relative">
      <button>
        <svg class="w-7 h-7 fill-[#10B981]" viewBox="0 0 576 512">
          {icon}
        </svg>
      </button>
      <span
        class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
      >
        {title}
        <span></span>
      </span>
    </div>
  );
}
