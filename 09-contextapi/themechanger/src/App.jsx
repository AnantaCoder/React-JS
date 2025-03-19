import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/Theme";
import Card from "./components/Card";

function App() {
  const [themeMode , setThemeMode] = useState("dark")

  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  // actual theme change in thee 
  useEffect(()=>{

    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme , lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*  theme btn*/}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">{/* cards  */}<Card/></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
