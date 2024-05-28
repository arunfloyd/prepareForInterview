import  { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
const counter = { firstCounter: 0, secondCounter: 0 };

const countFun = (state, action) => {
  switch (action.type) {
    case "Add1":
      dispa()
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
  }
};
const UseReducerObj = () => {
  const [count, dispatch] = useReducer(countFun, counter);
  const userName = useSelector((store)=>store.user)
const dispa = useDispatch()

  return (
    <div>
      <h1>1:{count.firstCounter}</h1>
      <button onClick={()=>dispatch({ type: "Add1", value: 1 })}>Add 1</button>
      <h1>2:{count.secondCounter}</h1>
      <button onClick={()=>dispatch({ type: "Add2", value: 1 })}>Add 2</button>
    </div>
  );
};

export default UseReducerObj;
