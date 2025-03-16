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
      className="flex justify-center items-center p-4 md:p-6 w-full min-h-screen bg-gradient-to-br from-gray-900 to-black"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-2xl bg-gray-800/95 p-4 rounded-xl shadow-2xl border-2 border-purple-500 backdrop-blur-sm">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
          <a
            href="https://instagram.com/bong_ani_007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-transparent transition-opacity flex items-center justify-center"
            title="Support Me 💖🥺"
          >
            <span className="mr-2">💰</span> Currency Converter{" "}
            <span className="ml-2">💰</span>
          </a>
        </h2>

        <div className="bg-gray-700/80 p-5 rounded-lg border border-blue-500/70 shadow-inner mb-6">
      
        <div className="relative mt-4">

          <input
            className="w-full bg-black/80 border-2 border-green-400 p-3 rounded-lg text-xl md:text-2xl focus:ring-2 focus:ring-green-400 outline-none placeholder-gray-400 text-amber-400 mb-4 transition-all duration-300"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-green-400">{fromCurrency}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-2 bg-gray-800/90 p-4 rounded-lg border border-blue-500/70 shadow-lg">
          
            <select
              className="w-full md:w-2/5 bg-black/90 text-green-400 text-lg font-medium px-2 py-3 border border-green-400 rounded-md appearance-none cursor-pointer hover:border-green-300 transition-colors"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {conversionData?.allCurrencies?.map((currency) => (
                <option key={currency} value={currency}>
                  {countries[currency] || "Unknown"} - {`[${currency}]`}
                </option>
              ))}
            </select>

            <button
              className="text-pink-500 text-3xl font-bold p-2 bg-black/80 border-2 border-pink-500 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform rotate-90 md:rotate-0"
              onClick={swap}
              aria-label="Swap currencies"
            >
              🔄
            </button>

            <select
              className="w-full md:w-2/5 bg-black/90 text-green-400 text-lg font-medium px-2 py-3 border border-green-400 rounded-md appearance-none cursor-pointer hover:border-green-300 transition-colors"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {conversionData?.allCurrencies?.map((currency) => (
                <option key={currency} value={currency}>
                  {countries[currency] || "Unknown"} - {`[${currency}]`}
                </option>
              ))}
            </select>
          </div>

          <div className="relative mt-4">
            <input
              className="w-full bg-black/80 text-green-600 border-2 border-green-400 p-3 rounded-lg text-xl md:text-2xl outline-none transition-all duration-300"
              type="text"
              readOnly
              placeholder="Converted Amount"
              value={convertedAmount}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-green-400">{toCurrency}</span>
            </div>
          </div>
        </div>

        <button
          className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold py-4 rounded-lg hover:from-blue-500 hover:to-purple-500 active:from-blue-700 active:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-purple-500/50"
          onClick={handleConvert}
        >
          Convert Currency 💵
        </button>

        <div className="mt-4 text-center text-xs text-gray-400">
          <p>Exchange rates updated daily</p>
        </div>
      </div>
    </div>
  );
}
