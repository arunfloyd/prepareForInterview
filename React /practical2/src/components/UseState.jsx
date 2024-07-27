import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Up</button>{" "}
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setToggle(!toggle)}>
        Switch {toggle ? "ON" : "OFF"}{" "}
      </button>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Anything"
      />
      {value && <h1> {value}</h1>}
    </div>
  );
};

export default UseState;
