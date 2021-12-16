import React, { useState } from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/Gines");

wasm.then(m => {
  const App = () => {
    const [sum, setSum] = useState(0);
    const [fib, setFib] = useState(0);

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
