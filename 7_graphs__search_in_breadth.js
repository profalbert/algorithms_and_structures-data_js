// Поиск в ширину в графе

// Граф
const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

let count = 0

// Поиск в ширину решает такие задачи как:
// 1. находит путь в графе (существует он или нет - true/false)
// 2. находит путь за минимальное кол-во шагов
const breadtsSearch = (graph, start, end) => {
  count = 0
  let queue = [] // очередь
  queue.push(start)

  while (queue.length > 0) {
    count += 1
    const current = queue.shift()
    if (!graph[current]) graph[current] = []
    if (graph[current].includes(end)) {
      return true
    } else {
      queue = [...queue, ...graph[current]]
    }
  }

  return false
}

console.log(breadtsSearch(graph, 'a', 'g'))
console.log('count of operations = ', count)
