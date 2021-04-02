// Быстрая сортировка (Сортировка Хоара)

const arr = [0, 3, 2, 5, 6, 2, 9, 13, 56, 79, 76, -1, 0, -5, -6, -3, 5, 7]
let count = 0

const quickSort = (array) => {
  if (array.length <= 1) return array

  let pivotIndex = Math.floor(array.length / 2)
  let pivot = array[pivotIndex]
  let less = []
  let more = []

  for (let i = 0; i < array.length; i++) {
    count += 1
    if (i === pivotIndex) continue
    if (array[i] < pivot) {
      less.push(array[i])
    } else if (array[i] >= pivot) {
      more.push(array[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(more)]
}

console.log(quickSort(arr))
console.log('length of array = ', arr.length) // одна из самых быстрых сортировок
console.log('count of operations = ', count)
