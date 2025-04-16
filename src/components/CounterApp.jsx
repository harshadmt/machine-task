import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment } from './CounterSlice'
import Multipleofthree from './multipleofthree'



const CounterApp = () => {
  const {value} = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>{value}</h1>
       <button onClick={()=>dispatch(increment())}>click</button>
      
      {value%3==0&&value!=0&&<Multipleofthree/>}
 
    </div>
  ) 
}

export default CounterApp
