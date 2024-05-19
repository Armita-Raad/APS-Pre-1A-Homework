import { useState } from "react";

export default function RandomAdviceRendering() {
  const [advice, setAdvice] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  };

  return (
    <>
      <button onClick={fetchData}>click for random advice </button>
      {<p>{advice}</p>}
    </>
  );
}
