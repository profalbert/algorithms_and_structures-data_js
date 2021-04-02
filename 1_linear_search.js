// Линейный поиск

const arr = [0, 3, 2, 5, 6, 2, 9, 13, 56, 79, 76, -1, 0, -5, -6, -3, 5, 7]
let count = 0

const linearSearch = (array, item) => {
  count = 0
  for (let i = 0; i < array.length; i++) {
    count += 1
    if (array[i] === item) return array[i]
  }
  return undefined
}

console.log(linearSearch(arr, 7))
console.log('count of operations = ', count)
console.log('length of array = ', arr.length)

// аналог готового линейного поиска из js
count = 0
console.log('--------------------------')
console.log(
  arr.find((el) => {
    count += 1
    if (el === 7) return el
  }),
)
console.log('count of operations = ', count)
console.log('length of array = ', arr.length)
