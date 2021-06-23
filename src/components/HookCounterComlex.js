import React, {useState} from 'react'

function HookCounterComlex() {
  const  initialCount = 0
  const [count, setCount] = useState(initialCount)
  const IncrementFive = () => {
    for(let i=0; i<5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  }
  return (
    <div>
      <hr></hr>
      <h1><em>Complex Functional Component Counter with useState using previous state</em></h1>
      <h1>--&gt;{count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+ 1 Incrementation</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>- 1 Decrementation</button>
      <button onClick={IncrementFive}>+ 5 Incrementation</button>
    </div>
  )
}

export default HookCounterComlex

