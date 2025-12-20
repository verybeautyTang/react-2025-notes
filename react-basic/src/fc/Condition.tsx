import { useState } from 'react'

export const ConditionFunction = () => {
  const [count, setCount] = useState(0)

  const showText = count % 2 === 0 ? '我是偶数' : '我是奇数'
  return (
    <div>
      <div>
        hello I am ConditionFunction {count}
        {showText}
      </div>
      <button onClick={() => setCount(count + 1)}>clickMeCount++</button>
    </div>
  )
}
