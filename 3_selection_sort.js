// Сортировка выбором

const arr = [0, 3, 2, 5, 6, 2, 9, 13, 56, 79, 76, -1, 0, -5, -6, -3, 5, 7]
let count = 0

const selectionSort = (array) => {
  count = 0
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      count += 1
      if (array[j] < array[indexMin]) indexMin = j
    }
    if (indexMin === i) continue
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
  }
  return array
}

console.log(selectionSort(arr))
console.log('length of array = ', arr.length) // O(n*n) (но есть
// коэффициент (его обычно не указывают просто) он примерно
// равен 1/2, вот как должно выглядеть истинное уравнение
// данной сортировки: O((~1/2)*n*n))
console.log('count of operations = ', count)
