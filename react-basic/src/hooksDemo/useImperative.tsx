import { useRef } from 'react'
import { MyInput } from './demo'

class Store {
  listeners = []
  count = 0

  subscribe(listener) {
    this.listeners.push(listener)
    console.log(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }
  getValue() {
    return this.count
  }
  // 模拟数据变化
  setValue() {
    this.count += 1
    this.listeners.forEach((listener) => listener())
  }
}

export const UseImperativeHandleDemo = () => {
  const ref = useRef(null)
  const store = useRef(new Store())
  function handleClick() {
    ref.current.focus()
  }

  return (
    <div>
      hello my name is useImperativeHandleDemo
      <MyInput ref={ref} />
      <div>{store.current.count}</div>
      <button onClick={() => store.current.setValue()}>增加 todo</button>
      <button onClick={handleClick}> focus me</button>
    </div>
  )
}
