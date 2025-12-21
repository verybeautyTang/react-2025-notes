import { useState, useTransition } from 'react'

export const UseTransitionDemo = () => {
  const [isPending, startTransition] = useTransition()
  const HandleEvent = () => {
    startTransition(() => {
      setCount(count + 1)
    })
  }

  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={HandleEvent}>
        <div>{isPending ? 'loading' : count}</div>
      </button>
    </div>
  )
}
