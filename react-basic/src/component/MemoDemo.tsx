import { memo, useEffect, useState } from 'react'

const Header = memo(() => {
  useEffect(() => {
    console.log('my name is header')
  })
  return <div>i am header</div>
})

const Footer = (props: { count: number }) => {
  return <div>i am footer, my count is {props.count}</div>
}

export const MemoDemo = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      hello, I am MemoDemo
      <Header />
      <Footer count={count} />
      <div onClick={() => setCount(count + 1)}>Add Count</div>
    </div>
  )
}
