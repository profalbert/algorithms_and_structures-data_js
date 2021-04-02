// Алгоритм Дейкстры для поиска кратчайшего пути

const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}

// вычисляем наикратчайший путь в графе с учетом длины отрезка
const shortPath = (graph, start, end) => {
  const costs = {} // будут хранится кратчайшие пути
  const processed = [] // будем добавлять те узлы, которые му уже проверили
  let neighbors = {} // будем хранить соседние вершины, рассматриваемого узла

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node]
      costs[node] = value || 100_000_000
    }
  })

  // на данном этапе costs = { b: 2, c: 1, d: 100000000, e: 100000000,
  // f: 100000000, g: 100000000 }

  let node = findNodeLowerCost(graph, costs, processed)

  while (node) {
    const cost = costs[node]
    neighbors = graph[node]

    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor]
      if (newCost < costs[neighbor]) costs[neighbor] = newCost
    })

    processed.push(node)
    node = findNodeLowerCost(graph, costs, processed)
  }

  return costs[end]
}

// находим узел с самой короткой длиной
const findNodeLowerCost = (graph, costs, processed) => {
  let lowestCost = 100_000_000
  let lowestNode

  Object.keys(graph).forEach((node) => {
    let cost = costs[node]
    if (cost && cost < lowestCost && !processed.includes(node)) {
      lowestNode = node
    }
  })

  return lowestNode
}

console.log(shortPath(graph, 'a', 'g'))
