import React, { useContext } from 'react'
const UserContext = React.createContext({ name: 'Jasmine' })
export const UseContextFunction = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: 'ShownWang' }}>
        <Child />
      </UserContext.Provider>
    </div>
  )
}

// 老版本的写法
// const Child = () => {
//   return <UserContext.Consumer>{(value) => <div>{value.name}</div>}</UserContext.Consumer>
// }

// 新版本写法
const Child = () => {
  const users = useContext(UserContext)
  return <div>{users.name}</div>
}
