import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Card() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*(){}[]<>?/|~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);
  // useRef
  const passwordRef = useRef(null)
  const copyToClipboard = () => {

    passwordRef.current?.select()
    // passwordRef.current.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charactersAllowed,passwordGenerator])
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Password Generator Pro</h1>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg">
        <input
          className="p-3 w-64 bg-indigo-100 border border-indigo-300 rounded-lg focus:outline-none"
          type="text"
          value={password}
          readOnly
        />
        <button
          onClick={passwordGenerator}
          className="p-3 cursor-pointer bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition"
        >
          Generate
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <label className="text-gray-700 font-medium">Password Length: {length}</label>
        <input
          type="range"
          min="8"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-64 mt-2"
        />
      </div>

      <div className="mt-4 flex space-x-4">
        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            checked={charactersAllowed}
            onChange={() => setCharactersAllowed(!charactersAllowed)}
            className="w-5 h-5 text-indigo-500 rounded"
          />
          <span>Include Symbols</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
            className="w-5 h-5 text-indigo-500 rounded"
          />
          <span>Include Numbers</span>
        </label>
      </div>

      <button
        onClick={copyToClipboard}
        className="p-2 border-2 rounded bg-lime-300 mt-4 hover:bg-emerald-600 transition ease-in-out cursor-pointer"
      >
        Copy
      </button>
    </div>
  );
}
