import { useState } from "react";

const SouravContent = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <p>Welcome to Web Components in React, {props.name}!!!</p>
      <button onClick={handleClick}>Click me to increase the count</button>
      <p>Count: {count}</p>
    </>
  );
};

export default SouravContent;
