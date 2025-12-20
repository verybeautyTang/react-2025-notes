import { forwardRef, useEffect, useId, useRef } from 'react'

interface InputProps {
  name?: string
}
const InputComponent = forwardRef<HTMLInputElement | null, InputProps>((props, ref) => {
  const id = useId()
  return (
    <div>
      <label htmlFor={id}>输入你的号码</label>
      <input id={id} type="number" ref={ref} />
    </div>
  )
})

export const ForwardedRefDemo = () => {
  const ref = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    console.log(ref)
  }, [])

  return <InputComponent ref={ref} />
}
