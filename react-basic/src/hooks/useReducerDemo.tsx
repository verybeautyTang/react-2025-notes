import { useReducer } from 'react'

// 说明：这个组件展示了如何使用 useReducer Hook 来管理复杂状态。点击按钮时，计数器会递增或递减。
// useReducer 适用于状态逻辑较复杂或依赖于前一个状态的场景。
// 这个组件可以作为学习 useReducer 的基础示例。
// export const UseReducerDemo = () => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return { count: state.count + 1 }
//       case 'decrement':
//         return { count: state.count - 1 }
//       default:
//         throw new Error()
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, { count: 0 })
//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//     </div>
//   )
// }

const NameComponent = ({ name }: { name: string }) => {
  return <div>Name: {name}</div>
}

const AgeComponent = ({ age }: { age: number }) => {
  return <div>Age: {age}</div>
}

type State = {
  name: string
  age: number
}

type Action = { type: 'setName'; payload: string } | { type: 'setAge'; payload: number }

export const UseReducerDemo = () => {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'setName':
        return { ...state, name: action.payload }
      case 'setAge':
        return { ...state, age: action.payload }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, { name: 'jasmine', age: 18 })

  return (
    <div>
      <NameComponent name={state.name} />
      <AgeComponent age={state.age} />
      <button onClick={() => dispatch({ type: 'setName', payload: 'doe' })}>Set Name to Doe</button>
      <button onClick={() => dispatch({ type: 'setAge', payload: 25 })}>Set Age to 25</button>
    </div>
  )
}
