// Сортировка пузырьком

const arr = [0, 3, 2, 5, 6, 2, 9, 13, 56, 79, 76, -1, 0, -5, -6, -3, 5, 7]
let count = 0

const bubbleSort = (array) => {
  count = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count += 1
      if (array[j + 1] < array[j]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}

console.log(bubbleSort(arr))
console.log('length of array = ', arr.length) // O(n*n) (но нет
// коффициента как у selection sort, поэтому эта сортировка
// менее эффективна, чем selection sort)
console.log('count of operations = ', count)
