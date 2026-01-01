import { useSyncExternalStore } from 'react'
import { createStore } from '../lib/redux.js'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}
const { getState, dispatch, subscribe } = createStore(reducer, { count: 111 })
export const UseCustomRedux = () => {
  const state = useSyncExternalStore(subscribe, getState, getState)
  return (
    <div>
      <div>my count is. {state.count}45670</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>增加</button>
    </div>
  )
}
