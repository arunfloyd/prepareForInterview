import  { useReducer } from 'react'

const valueReducer =(prevState,action)=>{
    return prevState+action
}
const UseReducer = () => {
    const [value,dispatch]= useReducer(valueReducer,0)
    const handleAdd =()=>{
        dispatch(1)
    }
    const handleDrop =()=>{
        dispatch(-1)
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDrop}>Drop</button>

    </div>
  )
}

export default UseReducer