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
