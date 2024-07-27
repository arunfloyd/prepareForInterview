import { useReducer } from "react";

const intial = 0;
const changeFun = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "down":
      return state - 1;
    case "reset":
      return intial;
    default:
      return state;
  }
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(changeFun, intial);
  return (
    <div>
      <h1>Use Reducer Counter : {count} </h1>
      <button onClick={() => dispatch("add")}>Add</button>
      <button onClick={() => dispatch("down")}>Down</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducer;
