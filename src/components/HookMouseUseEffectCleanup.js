import React, {useState} from 'react'
import HookMousePositionUseEffect from './HookMousePositionUseEffect'

function HookMouseUseEffectCleanup() {
  const [display, setDisplay] = useState(true)
  // to prenenvt LogMousePosion from update , chage is made in useEffect of HookMousePositionEffect component
  return (
    <div>
        <hr></hr>
        <h2><em>Functinal Component Mouse Position Toggle effect with useEffect mimick of didUnmount </em></h2>
        <button onClick={() => setDisplay(!display)}>
          Toggle Display
        </button>
        <em>{display && <HookMousePositionUseEffect />}</em>
    </div>
  )
}

export default HookMouseUseEffectCleanup
