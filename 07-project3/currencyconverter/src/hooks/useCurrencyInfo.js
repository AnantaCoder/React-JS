import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [conversionRates, setConversionRates] = useState({});
  const [allCurrencies, setAllCurrenciesNames] = useState([]);

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setConversionRates(res[currency] || {})); 

    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
      .then((response) => response.json())
      .then((response) => setAllCurrenciesNames(Object.keys(response)));
    //   console.log(currency)
  }, [currency]);
  
  return { conversionRates, allCurrencies }; 
}

export default useCurrencyInfo;
