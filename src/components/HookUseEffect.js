import React, {useState, useEffect} from 'react'

function HookUseEffect() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `useEffect ${count}`
  }, [count])
  return (
    <div>
      <hr></hr>
      <h1><em>Functional Component Counter with useEffect Hook</em></h1>
      <input
        type="text"
        value={name}
        onChange={ e => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default HookUseEffect
