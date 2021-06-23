import React, {useState} from 'react'

function HookCounterArray() {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random()* 10) + 1
    }])
  }
  return (
    <div>
      <hr></hr>
      <h1><em>Functional Component Counter with useState Hooks using Array state</em></h1>
      <button onClick={addItem}>Append Array List</button>
      <ul>
        {items.map( item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterArray
