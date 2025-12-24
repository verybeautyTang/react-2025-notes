// 数据
let count = 0
// 监听点击事件
window.addEventListener(
  'click',
  () => {
    count++
    // 每次点击后重新渲染
    // renderer()
  },
  false
)
// 渲染函数
const renderer = () => {
  document.body.innerHTML = `<h1>点击了${count}次</h1>`
}
// 初始渲染
// renderer()

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
let needsRender = false

// 修改点击事件监听器，设置标志位为true
// 这个变的过程，就是 diff 的过程

const workFlow = () => {
  renderer()
  requestIdleCallback(() => {
    // console.log(2687326)
    workFlow()
  })
}
workFlow()
