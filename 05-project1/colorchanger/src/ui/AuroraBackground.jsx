import React from "react";

export const AuroraBackground = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
