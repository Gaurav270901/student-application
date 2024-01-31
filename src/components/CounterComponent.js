import React from 'react'
import { useState } from 'react'

const CounterComponent = () => {
    const [count , setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

  return (
    <div>CounterComponent
        <h2>Counter : {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>

  )
}

export default CounterComponent