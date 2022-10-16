import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(1)
    function incrementcounter(){
      setCounter(counter+1)
    }
    function decrementcounter(){
        setCounter(counter-1)
    }
    function resetcounter(){
        setCounter(0)
    }
  return (
    <div className='border mt-5 p-3 text-center'>
    <h1 className='text-danger'>Counter - {counter}</h1>
    <button onClick={incrementcounter} className='btn btn-primary'>Increment</button>&nbsp;&nbsp;
    <button onClick={decrementcounter} className='btn btn-primary'>Decrement</button>&nbsp;&nbsp;
    <button onClick={resetcounter} className='btn btn-primary'>Reset</button>
    </div>
  )
}

export default Counter