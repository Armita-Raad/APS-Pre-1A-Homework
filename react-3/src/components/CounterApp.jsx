import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <h2>{count}</h2>
    </>
  );
}
