import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={
            <div className="grid items-center justify-center min-h-[calc(100vh-4rem)]">
              {/* Your existing content */}
              <div className="p-6 bg-blue-500 text-white text-xl font-semibold text-center rounded-2xl shadow-2xl animate-float transition-transform hover:scale-105">
                🌟 Vite + React + Tailwind 🌟
                🔥Is connected Successfully🔥
              </div>
              <div className="p-4 mt-4 text-2xl font-bold text-center bg-amber-200 border-8 rounded-2xl animate-bounce">
                This is a new concept
              </div>
            </div>
          } />
          {/* Add other routes for About, Services, Contact */}
        </Routes>
      </div>
    </>
  );
}

export default App;