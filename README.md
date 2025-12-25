# react-2025-notes

## 核心概念

- 声明式
- jsx
- 单项数据流
- 组件式
- 虚拟 dom

### 声明式

```jsx
// 函数组件
const Welcome = () => {
  return <div>welcome</div>
}
// class组件
class Welcome extends React.Component {
  render() {
    return <div>welcome</div>
  }
}
```

### 状态式

```jsx
// 函数组件
const Welcome = () => {
  const [count, setCount] = useState(0)
  return <div>welcome{count}</div>
}
// class组件
class Welcome extends React.Component {
  constructor() {
    this.state = {
      count: 0,
    }
  }
  render() {
    return <div>welcome{this.state.count}</div>
  }
}
```

### 属性

```jsx
const Welcome = (props) => {
  return <div>welcome{props.name}</div>
}

const newWelcome = <Welcome name="jasmine" />
```

## React18 源码

## 核心概念

### `react-reconcile`

```js
const useState = (initialState) => {
  queue[index] = initialState
  function update(state) {
    index++
    queue.push(state)
  }
  return [queue[index], update]
}

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
```

### `react-dom`

用来处理浏览器事件，浏览器相关 api 用`react-dom`， 跨端开发用`react-native`, 3d 开发用`react-three-fiber`

```js
// 渲染函数
const renderer = () => {
  document.body.innerHTML = `<h1>点击了${queue[index]}次</h1>`
}
// 初始渲染
renderer()
```

### `scheduler`

优先级调度：因为 requestIdleCallback、scheduler.postTask 都没办法满足，
一旦有了优先级，你就需要知道当下什么任务最紧急

```js
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
```

## React 源码阅读顺序

react 包是为了统一接口协议

1. react-dom
   1. createRoot(React.createRoot 创建了一个容器)【createContainer】
   2. render 方法（执行整体的 updateContainer）
2. react
   1. useState 基础状态
3. react-reconcile
   1. createFiberRoot（创建 fiber）
   2. initialUpdateQueue(初始化更新队列)
   3. createUpdate（创建更新对象）
   4.
4. scheduler 为了统一优先级的调度

## 延伸

### react-noop-renderer

可以通过这个包自己去实现一个 react 渲染器

```js
hostConfig
// 1. 定义宿主配置
const hostConfig = {
  commitMount() {},
  commitUpdate() {},
}
```


