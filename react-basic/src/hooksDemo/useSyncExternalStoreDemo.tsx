import { useSyncExternalStore } from 'react'

const useWindowWidthDemo = () => {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('resize', callback)
      return () => window.removeEventListener('resize', callback)
    },
    () => window.innerWidth,
    () => window.innerWidth
  )
}

export const WindowWidthDemo = () => {
  const width = useWindowWidthDemo()
  return <div>my window innerWidth is {width}</div>
}
