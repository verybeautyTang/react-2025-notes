import { useState } from 'react'

// 说明：这个组件展示了如何使用 useState Hook 来管理状态。点击按钮时，计数器会递增。
// 推荐使用函数式更新形式的 setState，以避免闭包陷阱。
// 例如，如果在异步操作中多次调用 setCount(count + 1)，可能会因为闭包捕获了旧的 count 值而导致更新不正确。
// 使用 setCount(c => c + 1) 可以确保每次更新都基于最新的状态值。
// 这个组件可以作为学习 useState 的基础示例。

export const UseStateDemo = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // setCount(count + 1)
    setCount((c) => c + 1) // 推荐使用函数式更新，避免闭包陷阱
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}
