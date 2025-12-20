import { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        <div>{count}</div>
      </button>
    </div>
  )
}
