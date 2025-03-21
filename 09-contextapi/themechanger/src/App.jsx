
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);
  //Provides theme context to all child components
//provider
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-amber-600">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App

// Why We Can't Move App.jsx Logic to ThemeBtn
// Fundamental Limitation:

// Providers must exist higher in the component tree than consumers

// ThemeBtn is a child component - its context wouldn't be available to parent/sibling components