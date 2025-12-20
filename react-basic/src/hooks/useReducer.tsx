import { useReducer } from 'react'

type State = {
  count: number
}

type Increment = 'increment'
type Decrement = 'decrement'
type Action = {
  type: Increment | Decrement
}

export const UseReducerFunction = () => {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 }
      case 'decrement':
        return { ...state, count: state.count - 1 }
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return <div onClick={() => dispatch({ type: 'decrement' })}>UseReducer{state.count}</div>
}
