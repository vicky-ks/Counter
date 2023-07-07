import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const IncCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1 className="heading_style">{count}</h1>
      <button onClick={IncCount}>Increment</button>
    </>
  );
};

export default App;
