import React, { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import countryData from "./assets/countries.json";
const BackgroundImage =
  "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";



export default function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const { conversionRates } = useCurrencyInfo(fromCurrency);
  const conversionData = useCurrencyInfo(fromCurrency);
  const [countries, setCountries] = useState({});
  const handleConvert = () => {
    if (isNaN(amount) || amount === "" || amount == 0) {
      setConvertedAmount("Invalid Amount");
      return;
    }

    const rate = conversionRates?.[toCurrency];
    if (rate) {
      const result = parseFloat(amount) * rate;
      setConvertedAmount(result);
    } else {
      setConvertedAmount("Rate not Found");
    }
  };

  // Swap feature
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount("");
  };
  //get country
  useEffect(() => {
    setCountries(countryData);
  }, []);
  return (
    <div
      className="flex flex-wrap justify-center items-center p-6 w-full min-h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500 opacity-90">
        <h2 className="text-center text-2xl font-bold text-pink-500 mb-4">
          <a
            href="https://instagram.com/bong_ani_007"
            target="_blank"
            rel="noopener noreferrer"
            title="Support Me 💖🥺"
          >
            💰 Currency Converter 💰
          </a>
        </h2>

        <div className="flex flex-wrap bg-gray-700 p-4 rounded-lg justify-center border border-blue-500">
          <input
            className="w-full bg-black border-2 border-green-400 p-3 rounded-md text-xl focus:ring-2 focus:ring-green-400 placeholder-gray-400 text-amber-400"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="flex justify-center items-center flex-wrap bg-gray-800 p-4 rounded-lg border border-blue-500 shadow-lg">
            <select
              className="bg-black text-green-400 text-xl font-semibold px-4 border border-green-400 p-2 rounded-md"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {conversionData?.allCurrencies?.map((currency) => (
                <option key={currency} value={currency}>
                  {countries[currency] || "Unknown Country"} - {`[${currency}]`}
                </option>
              ))}
            </select>

            <button
              className="text-pink-500 text-4xl font-bold mx-6 p-2 bg-black border-2 border-pink-500 rounded-full hover:scale-125 active:scale-110 transition-transform shadow-lg shadow-pink-500"
              onClick={swap}
            >
              🔄
            </button>

            <select
              className="bg-black text-green-400 text-xl font-semibold px-4 border border-green-400 p-2 rounded-md"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {conversionData?.allCurrencies?.map((currency) => (
                <option key={currency} value={currency}>
                  {countries[currency] || "Unknown Country"} - {`${currency}`}
                </option>
              ))}
            </select>
          </div>

          <input
            className="w-full bg-black text-green-600 border-2 border-green-400 p-3 rounded-md text-xl mt-4"
            type="text"
            readOnly
            placeholder="Converted Amount"
            value={convertedAmount}
          />
        </div>

        <button
          className="w-full cursor-pointer shadow-pink-700 shadow-2xl bg-blue-500 text-white text-lg font-bold py-3 mt-4 hover:scale-104 active:scale-99 ease-in-out transition-transform rounded-lg hover:bg-purple-500"
          onClick={handleConvert}
        >
          Convert Currency 💵
        </button>
      </div>
    </div>
  );
}
