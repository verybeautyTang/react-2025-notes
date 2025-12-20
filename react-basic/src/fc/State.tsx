import { useState } from 'react'

export const StateFunction = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>hello I am BasicFunction {count}</div>
      <button onClick={() => setCount(count + 1)}>clickMeCount++</button>
    </div>
  )
}
