## 防抖和节流

```ts
// 防抖函数
// 防抖
export let debounce = (fn: Function, delay: number = 200) => {
  let timer: any
  // 闭包
  return (...args: any[]) => {
    // 如果不是剪头函数可以使用arguments获取参数，这样就不用写形参了考虑形参个数了
    // let args = arguments;
    // 判断还在定时，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      return fn(...args)
    }, delay)
  }
}

// 节流函数
export let throttle = (func: any, delay: number = 200) => {
  // 第一次触发时间戳
  let startTime = Date.now()
  return (...args: any[]) => {
    // 如果不是剪头函数可以使用arguments获取参数，这样就不用写形参了考虑形参个数了
    // let args = arguments;
    // 再次触发时间
    let curTime = Date.now()
    // 间隔时间 = 延迟的时间 - （再次触发时间戳 - 第一次触发时间戳）
    let interval = delay - (curTime - startTime)
    if (interval <= 0) {
      // 重新计算开始时间
      startTime = Date.now()
      return func(...args)
    }
  }
}
```

## 介绍一下什么是 webpack，有什么特色优势

Webpack 是一个现代化的前端模块化打包工具，它将项目中的 JS、CSS、图片等各种资源视为模块，通过分析依赖关系，将它们转换、处理并打包成浏览器可用的静态资源文件，实现模块化开发、代码优化和部署，webpack 模块化支持、代码分割、热更新（HMR）和生产环境优化能力，极大提升了大型前端项目的开发效率与性能。

### 特点

1. 强大的模块化支持：支持 CommonJS, AMD, ES Modules 等多种模块规范，让不同模块化方案的代码可以共存和管理。
2. 灵活的资源处理 (Loaders)：通过 Loader，可以对各种非 JS 文件（如 Sass, TypeScript, 图片）进行预处理和转换，将其转化为可用的模块，例如将 SCSS 编译成 CSS。
3. 丰富的插件系统 (Plugins)：插件系统（如 UglifyJsPlugin、HtmlWebpackPlugin）能对打包过程进行各种增强和操作，实现代码压缩、优化、生成 HTML、提取 CSS 等复杂任务。
4. 代码分割与按需加载 (Code Splitting)：自动或手动将大文件拆分成小块 (chunks)，实现资源的异步加载，优化首屏加载速度。
5. 热模块替换 (HMR)：开发时只更新改动的模块，无需刷新整个页面，即时看到效果。
6. 开发服务器 (Dev Server)：提供本地开发服务器，支持 live reloading。
7. 性能优化：支持代码压缩、Tree Shaking（消除未引用代码）、资源指纹（文件名哈希）等，确保生产环境的包大小和加载性能。
8. 稳定的构建流程：统一了开发到生产的构建方式，通过配置文件（webpack.config.ts）管理所有构建逻辑，提供可重复和稳定的部署流程。

## CSS 选择符有哪些?优先级算法如何计算?(40 分)

### CSS 选择器分类

1. 基本选择器：
   - 元素选择器
   - 类选择器
   - ID 选择器
   - 通配选择器
2. 组合选择器：
   - 后代选择器
   - 子选择器
   - 相邻兄弟选择器
   - 通用兄弟选择器
3. 伪类/伪元素选择器
   - 伪类（）：:hover, :first-child，
   - 伪元素（::）：::before, ::after
4. 属性选择器
5. !important：最高优先级，可覆盖其他所有规则 (A:1, B:0, C:0, D:0)。
6. 内联样式：style="..." 属性，权重最高 (0, 1, 0, 0)。

### 优先级算法（权重计算）

- 优先级由四组权重数字（A, B, C, D）组成，从左到右，A 最高（例如：内联样式）。
  - A (最高)：!important 声明（1）。
  - B (次高)：ID 选择器 (1)。
  - C (中间)：类选择器、属性选择器、伪类 (1)。
  - D (最低)：元素选择器、通用选择器、伪元素 (1)。

计算规则：计算每个选择器对应 ABCD 的权重值。从左到右依次比较 A、B、C、D。权重值大的选择器胜出。若权重完全相同，则最后（靠后）定义的规则（或选择器）生效,拥有 !important 声明的样式优先级最高。
