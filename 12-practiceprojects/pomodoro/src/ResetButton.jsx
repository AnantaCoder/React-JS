import React from "react";

const ResetButton = ({ onClick }) => {
  return (
    <button
      className="absolute top-4 right-4 flex items-center justify-center 
                 w-16 h-16 bg-gray-900 rounded-full border-4 border-pink-500 
                 text-4xl text-pink-400 shadow-lg shadow-pink-500/50 
                 hover:bg-pink-500 hover:text-white transition-all duration-300"
      onClick={onClick}
    >
      ♻️
    </button>
  );
};

export default ResetButton;
