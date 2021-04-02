// Алгоритмы для обхода дерева

// Дерево
const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
]
let count = 0

// Рекурсивный обход дерева n-размерности
const recursive = (tree) => {
  if (!tree.length) return 0
  let sum = 0

  tree.forEach((node) => {
    count += 1
    sum += node.v
    if (node.c) sum += recursive(node.c)
  })

  return sum
}

count = 0
console.log(recursive(tree))
console.log('count of operations = ', count)

// Итеративный обход дерева n-размерности
const iteration = (tree) => {
  count = 0
  if (!tree.length) return 0
  let sum = 0
  const stack = tree

  while (stack.length > 0) {
    count += 1
    const node = stack.pop()
    sum += node.v
    if (node.c) node.c.forEach((child) => stack.push(child))
  }

  return sum
}

console.log('--------------------------')
console.log(iteration(tree))
console.log('count of operations = ', count)
