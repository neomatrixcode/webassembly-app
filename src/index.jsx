import React, { useState } from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/Gines");

wasm.then(m => {
  const App = () => {
    const [name, setName] = useState("");
    const [sum, setSum] = useState(0);
    const [fib, setFib] = useState(0);

    const handleChange = (e) => {
      setName(e.target.value);
    }
    const handleClick = () => {
      m.welcome(name);
    }
    const handleSum = () => {
      const sumResult = m.add_two_ints(10, 20);
      setSum(sumResult);
    }
    const handleFib = () => {
      const fibResult = m.fib(10);
      setFib(fibResult);
    }

    return (
      <>
        <div>
          <h1>Hi there</h1>
          <button onClick={m.big_computation}>Run Computation</button>
        </div>
        <div>
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>Say hello!</button>
        </div>
        <div>
        <button onClick={handleSum}>Suma!</button>
        <div>Sum Results: {sum}</div>
        </div>
        <div>
        <button onClick={handleFib}>Fibonacci de 10!</button>
        <div>Fib Results: {fib}</div>
        </div>
      </>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
