import type React from 'react'
interface CustomEventProps {
  HandelEvent: (ev: React.MouseEvent) => void
}
export const CustomEventFunction: React.FC<CustomEventProps> = ({ HandelEvent }) => {
  return <div onClick={HandelEvent}>hello I am CustomEventFunction </div>
}
