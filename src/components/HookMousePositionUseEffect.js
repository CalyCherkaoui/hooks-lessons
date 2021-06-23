import React, {useState, useEffect} from 'react'

function HookMousePositionUseEffect() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect call')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('component unMounted Mouse move listner')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
        <hr></hr>
        <h2><em>Functinal Component Mouse Position with useEffect that runs effects only once</em></h2>
        <p>mouse pos: X: {x}, Y: {y}</p>
    </div>
  )
}

export default HookMousePositionUseEffect
