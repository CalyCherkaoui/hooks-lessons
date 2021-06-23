import React, {useState} from 'react'

function HookCounter() {
  const [count, setCount] = useState(0) 
  return (
    <div>
      <hr></hr>
      <h1><em>Simple Functional Component Counter with useState</em></h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}> +2 incrementation</button>
    </div>
  )
}

export default HookCounter
