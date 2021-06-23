import React, {useState, useEffect} from 'react'

function HookIntervalCounter() {
  const [count, setCount] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <div>
        <hr></hr>
        <h3><em>Class Component Interval timer that runs evey second with LifeCycle methods</em></h3>
        <h2>{count}</h2>
    </div>
  )
}

export default HookIntervalCounter
