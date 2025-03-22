import { useState, useEffect } from "react";
import ResetButton from "./ResetButton";

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          } else {
            setIsRunning(false);
            setStreak((temp) => temp + 1);
            console.log(streak);
            // setStreak(newStreak);
            if (streak === 4) {
              setStreak(0);
              console.log(streak);
              alert("You need to take a short break");
            }
            setMinutes(25);
            setSeconds(0);
          }
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, minutes, seconds, streak]);

  const toggleBtn = () => {
    setIsRunning(!isRunning);
  };
  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };
  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1e2030] to-[#111320] text-white">
      <h1 className="mb-8 text-4xl font-bold tracking-widest uppercase">
        pomodoro
      </h1>
      <ResetButton onClick={resetTimer}/>

      <div className="flex gap-6 mb-12">
        <button
          className="px-5 py-2 rounded-full bg-pink-600 hover:bg-pink-700 transition-colors"
          onClick={() => {
            setMinutes(25);
            setSeconds(0);
            isRunning(false);
          }}
        >
          pomodoro
        </button>
        <button
          className="px-5 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          onClick={() => {
            setMinutes(5);
            setSeconds(0);
            isRunning(false);
          }}
        >
          short break
        </button>
        <button
          className="px-5 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          onClick={() => {
            setMinutes(15);
            setSeconds(0);
            isRunning(false);
          }}
        >
          long break
        </button>
      </div>

      <div className="relative flex items-center justify-center w-64 h-64 rounded-full bg-[#22253a] shadow-2xl mb-8">
        <div
          className={`absolute inset-0 rounded-full border-8 border-pink-600 `}
        ></div>

        <div className="z-10  flex flex-col items-center justify-center">
          <span className="text-6xl select-none font-bold">
            {formatTime(minutes)}:{formatTime(seconds)}
          </span>
          <span
            className="mt-2 text-lg tracking-wider cursor-pointer uppercase"
            onClick={toggleBtn}
          >
            {isRunning ? "pause" : "play"}
          </span>
        </div>
      </div>

      <button className="select-none text-3xl hover:text-pink-600 transition-colors">
        {"♨️".repeat(streak)}
        {streak === 4 && (
          <div
            className="mt-2 text-center text-black text-lg font-bold 
                bg-amber-500 rounded-full px-4 py-2 
                shadow-lg shadow-amber-400/50 neon-glow"
          >
            WELL Done!
          </div>
        )}
      </button>
    </div>
  );
}

export default App;
