import './App.css'
// 基础页面
// import { BasicClass as CCBasic } from './cc/Basic.tsx'
// import { BasicFunction } from './fc/Basic.tsx'
// import { StateFunction } from './fc/State.tsx'
// import { PropsFunction } from './fc/Props.tsx'
// import { ConditionFunction } from './fc/Condition.tsx'
// import { CustomEventFunction } from './fc/CustomEvent.tsx'
// import { UseState } from './hooks/useState.tsx'
// import { UseReducerFunction } from './hooks/useReducer.tsx'
// import { UseContextFunction } from './hooks/useContext.tsx'

// 进阶页面
import { SingleRefComponent, ComplexRefComponent } from './component/RefDemo'
import { ForwardedRefDemo } from './component/ForwardRef'
function App() {
  return (
    <>
      {/* <div>
        基础页面
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
      </div> */}

      <div>进阶页面</div>
      <SingleRefComponent />
      <ComplexRefComponent />
      <ForwardedRefDemo /> 
    </>
  )
}
export default App
