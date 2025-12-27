import { useReducer } from 'react'

// 说明：这个组件展示了如何使用 useReducer Hook 来管理复杂状态。点击按钮时，计数器会递增或递减。
// useReducer 适用于状态逻辑较复杂或依赖于前一个状态的场景。
// 这个组件可以作为学习 useReducer 的基础示例。
export const UseReducerDemo = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  )
}
