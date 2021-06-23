import React, { useState } from 'react'

function HookCounterObject() {
  const [name, setName] =useState({firstName:'', familyName: ''})
  return (
    <div>
      <hr></hr>
      <h1><em>Functional Component Counter with useState Hooks using Object state</em></h1>
      <form>
        <input 
          type="text"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value})}
        />
        <input
          type="text"
          value={name.familyName}
          onChange={ e => setName({ ...name, familyName: e.target.value})}
        />
      </form>
      <h2>Your name is -&gt; {name.firstName}</h2>
      <h2>Your name is -&gt; {name.familyName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounterObject
