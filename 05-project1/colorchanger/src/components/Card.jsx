import React, { useState } from "react";

export default function Card() {
  const [bgColor, setBGcolor] = useState("bg-green-400");

  const colors = [
    { name: "Blue", class: "bg-blue-400" },
    { name: "Red", class: "bg-red-400" },
    { name: "Grey", class: "bg-gray-400" },
    { name: "Orange", class: "bg-orange-400" },
    { name: "Green", class: "bg-green-400" },
    { name: "Purple", class: "bg-purple-400" },
    { name: "Cyan", class: "bg-cyan-400" },
    { name: "Yellow", class: "bg-yellow-400" },
    { name: "Teal", class: "bg-teal-400" },
    { name: "Pink", class: "bg-pink-400" },
    { name: "Indigo", class: "bg-indigo-400" },
    { name: "Lime", class: "bg-lime-400" },
    { name: "Amber", class: "bg-amber-400" },
    { name: "Rose", class: "bg-rose-400" },
    { name: "Emerald", class: "bg-emerald-400" },
    { name: "Sky", class: "bg-sky-400" },
    { name: "Fuchsia", class: "bg-fuchsia-400" },
    { name: "Violet", class: "bg-violet-400" },
    { name: "Slate", class: "bg-slate-400" },
  ];

  return (
    <div>
      <div
        className={`${bgColor} items-center grid h-screen font-mono font-bold justify-center`}
      >
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl text-center mb-6 border-b pb-3 border-amber-300">
            This is a Background Changer Mania
          </h1>

          {colors.map((color, i) => (
            <button
              key={i}
              className={`px-4 py-2 cursor-pointer m-2 rounded-2xl text-white ${color.class}`}
              onClick={() => setBGcolor(color.class)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
