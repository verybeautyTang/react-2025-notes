import { useImperativeHandle, useRef } from 'react'

export const MyInput = ({ ref }) => {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )
  return <input ref={inputRef} />
}
