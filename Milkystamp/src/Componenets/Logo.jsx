import React from "react";

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white flex items-center justify-center"
        style={{
          animation: "spin 6s linear infinite",
        }}
      >
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-1 bg-white rounded-full transform rotate-0 origin-center" />
          <div className="absolute w-full h-1 bg-white rounded-full transform rotate-45 origin-center" />
          <div className="absolute w-full h-1 bg-white rounded-full transform rotate-90 origin-center" />
          <div className="absolute w-full h-1 bg-white rounded-full transform rotate-135 origin-center" />
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Logo;
