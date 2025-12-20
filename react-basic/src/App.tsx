import './App.css'
import { BasicClass as CCBasic } from './cc/Basic.tsx'
import { BasicFunction } from './fc/Basic.tsx'
import { StateFunction } from './fc/State.tsx'
import { PropsFunction } from './fc/Props.tsx'
import { ConditionFunction } from './fc/Condition.tsx'
import { CustomEventFunction } from './fc/CustomEvent.tsx'
import { UseState } from './hooks/useState.tsx'
import { UseReducerFunction } from './hooks/useReducer.tsx'
import { UseContextFunction } from './hooks/useContext.tsx'
function App() {
  return (
    <>
      <div>hello World</div>
      <CCBasic name="jasmine" />
      <BasicFunction />
      <StateFunction />
      <PropsFunction name="jasmine" />
      <ConditionFunction />
      <UseState />
      <UseReducerFunction />
      <UseContextFunction />
      <CustomEventFunction HandelEvent={(ev) => console.log('i am HandleEvent', ev)} />
    </>
  )
}
export default App
