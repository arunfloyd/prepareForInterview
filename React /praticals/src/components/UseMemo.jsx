import  { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 10000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const increment = ()=>{
    setCount(count+1)
  }
  const decrement =()=>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Add</button>

      <h3>Expensive Calculation : {calculation}</h3>{" "}
    </div>
  );
};

export default UseMemo;
