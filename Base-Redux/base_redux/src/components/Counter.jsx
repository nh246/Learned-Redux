import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/featurs/counter/counterSlice'
function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()


  const handleIncrement =()=>{
    dispatch(increment())
  }

  const handleDecrement=()=>{
    dispatch(decrement())
  }


  const handleIncrementBy5=(number)=>{
    console.log(number)
    dispatch(incrementByAmount(number))


  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Redux Counter App
      </h1>

      <div className="flex items-center gap-4" >
        <button onClick={handleIncrement} className="px-6 py-2 text-white bg-green-500 hover:bg-green-700 text-xl font-semibold" >+</button>
        <span>{count}</span>
        <button onClick={handleDecrement} className="px-6 py-2 text-white bg-green-500 hover:bg-green-700 text-xl font-semibold" >-</button>

        <button onClick={()=>handleIncrementBy5(5)}  className='px-6 py-2 text-white bg-blue-500 hover:bg-green-700 text-xl font-semibold' >Increment By 5</button>
      </div>
    </div>
  );
}

export default Counter;
