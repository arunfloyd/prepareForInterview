import  { useContext } from 'react'
import { UserName } from '../App'

const UseContext = () => {
    const name = useContext(UserName)
  return (
    <div>
        <h1>UseContext UserName : {name}</h1>
    </div>
  )
}

export default UseContext
