//  手写一个 redux
export function createStore(reducer, initialState) {
  //这是一颗状态树
  let state = initialState

  // 注册事件（发布订阅一定要有的东西
  let listeners = []

  // 新状态的生成一定要借助动作
  function dispatch(action) {
    state = reducer(state, action)
    // 通知订阅者
    listeners.forEach((i) => i())
  }

  // 订阅与取消订阅
  function subscribe(listener) {
    // 订阅
    listeners.push(listener)
    // 取消订阅
    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }


  // 获取所有的 state
  function getState() {
    return state
  }
  return {
    getState,
    dispatch,
    subscribe,
  }
}
