import { useEffect, useRef } from 'react'

export const SingleRefComponent = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    console.log('SingleRefComponent', ref)
  }, [])
  return <div ref={ref}>hello my singleRef</div>
}

interface IRefs {
  h1?: HTMLHeadingElement | null
  h2?: HTMLHeadingElement | null
  h3?: HTMLHeadingElement | null
}
export const ComplexRefComponent = () => {
  const refs = useRef<IRefs>({})

  useEffect(() => {
    console.log(refs)
  }, [])
  return (
    <div>
      <h2 ref={(node) => (refs.current.h1 = node)}>1</h2>
      <h2 ref={(node) => (refs.current.h2 = node)}>2</h2>
      <h2 ref={(node) => (refs.current.h3 = node)}>3</h2>
    </div>
  )
}
