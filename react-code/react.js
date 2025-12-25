// 简单模拟 React 的时间切片机制
let queue = []
let index = 0

const useState = (initialState) => {
  queue[index] = initialState
  function update(state) {
    index++
    queue.push(state)
  }
  return [queue[index], update]
}

const [count, setCount] = useState(0)
// 数据
// let count = 0
// 监听点击事件
window.addEventListener(
  'click',
  () => {
    setCount(queue[index] + 1)
    // count++
    // 每次点击后重新渲染
    // renderer()
  },
  false
)
// 渲染函数
const renderer = () => {
  document.body.innerHTML = `<h1>点击了${queue[index]}次</h1>`
}
// 初始渲染
renderer()

// 使用requestIdleCallback实现空闲时间渲染（模拟时间切片）
// 工作循环
// requestIdleCallback会在浏览器空闲时间执行回调函数
// workFlow函数会不断调用自身，形成一个循环
// 在每次浏览器空闲时间时执行renderer函数进行渲染
// 这样可以避免阻塞主线程，提高页面响应速度
// 注意：requestIdleCallback在某些浏览器中可能不支持，可以使用setTimeout作为替代
// 但是这里有一个问题，这里在不停的渲染，太损耗性能了

// 我们需要知道什么时候数据发生变化了，只有数据发生变化了才要去做渲染
// 这里我们可以引入一个标志位来控制是否需要渲染
let preCount = count

// 修改点击事件监听器，设置标志位为true
// 这个变的过程，就是 diff 的过程

const reconcile = () => {
  // diff 算法
  //  尽可能少的更新
  // 尽可能大的复用
  // 面试题： 为什么我们要使用 key？
  if (preCount !== queue[index]) {
    renderer()
    preCount = queue[index]
  }
}

// 调和的过程
// 在浏览器空闲的时候去做这个操作，在 vue3 里面不需要调度器
// vue3 是通过 proxy 去监听数据变化的，可以更加精准的知道数据什么时候变化了
// 两个阶段 tracking 和 trigger
const workFlow = () => {
  reconcile()
  requestIdleCallback(() => {
    // console.log(2687326)
    workFlow()
  })
}
reconcile()
