import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // change ui variables or scenarios
  //we need only 1 use hook , change the counter variable on every place 
  const [counter, setCounter] = useState(15);

  // Function to increment counter
  const addValue = () => {
    setCounter((counter)=>(
      counter >= 20 ? 20:counter +1
    ));
  };

  // Function to decrement counter
  const decreaseValue = () => {
    setCounter((counter)=>(
      counter<=0 ? 0 : counter -1
    ));
  };
  return (
    <>
      <h1>chai our react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Remove Value</button>
    </>
  );
}

export default App;
