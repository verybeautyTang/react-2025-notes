const regions = [
  {
    name: '北京市',
    children: [{ name: '朝阳区' }, { name: '海淀区' }],
  },
  {
    name: '广东省',
    children: [
      {
        name: '深圳市',
        children: [{ name: '南山区' }, { name: '福田区' }],
      },
      {
        name: '广州市',
        children: [{ name: '天河区' }, { name: '越秀区' }],
      },
    ],
  },
]
// 使用示例
// console.log(searchRegions(regions, '田')) // ['广东省深圳市福田区']
// console.log(searchRegions(regions, '京')) // ['北京市朝阳区', '北京市海淀区']
// console.log(searchRegions(regions, '广东')) // ['广东省深圳市南山区', '广东省深圳市福田区', '广东省广州市天河区', '广东省广州市越秀区']
// console.log(searchRegions(regions, '区')) // ['北京市朝阳区', '北京市海淀区', '广东省深圳市南山区', '广东省深圳市福田区', '广东省广州市天河区', '广东省广州市越秀区']

const searchRegions = (regions, keyword) => {
  const result = []

  const dfs = (node, path) => {
    const cPath = [...path, node.name]
    if (node.name.includes(keyword)) {
      if (!node.children || node.children.length === 0) {
        result.push(cPath.join(''))
      } else {
        // 如果是非叶子节点，找到所有叶子节点路径
        getAllLeafPaths(node, cPath)
      }
    }
    if (node.children) {
      for (const child of node.children) {
        dfs(child, cPath)
      }
    }
  }

  const getAllLeafPaths = (node, path) => {
    if (!node.children || node.children.length === 0) {
      result.push(path.join(''))
      return
    }
    for (const child of node.children) {
      getAllLeafPaths(child, [...path, child.name])
    }
  }

  for (const region of regions) {
    dfs(region, [])
  }

  return result
}

// console.log(searchRegions(regions, '田')) // ['广东省深圳市福田区']
// console.log(searchRegions(regions, '京')) // ['北京市朝阳区', '北京市海淀区']
console.log(searchRegions(regions, '广东')) // ['广东省深圳市南山区', '广东省深圳市福田区', '广东省广州市天河区', '广东省广州市越秀区']
