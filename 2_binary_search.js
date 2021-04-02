// Бинарный поиск

// бинарный поиск работает только для отсортированного массива
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let count = 0

// arr.sort((a, b) => a - b) // сортировка + бинарный поиск
// менее эффективны, чем линейный поиск, если мы ищем
// лишь один раз. Но, если массив неотсортированный и
// не меняет свои данные (например 10 статичных элементов),
// и нам надо делать поиск  многократно (1_000_000 раз к примеру),
// то в данном случае будет эффективнее сделать одну сортировку
// и 1_000_000 бинарных поисков, чем 1_000_000 линейных поисков

const binarySearchIndex = (array, item) => {
  count = 0
  let left = -1
  let right = array.length
  let mid

  while (right - left > 1) {
    count += 1
    mid = Math.floor((left + right) / 2)
    if (array[mid] === item) {
      return mid
    } else if (array[mid] < item) {
      left = mid
    } else if (array[mid] > item) {
      right = mid
    }
  }

  return -1
}

console.log(binarySearchIndex(arr, 12))
console.log('count of operations = ', count)
console.log('length of array = ', arr.length)

// бинарный поиск с использованием рекурсии
const recursiveBinarySearchIndex = (array, item, start, end) => {
  count += 1
  let left = start ?? -1
  let right = end ?? array.length
  let mid = Math.floor((left + right) / 2)

  if (array[mid] === item) {
    return mid
  } else if (array[mid] < item) {
    return recursiveBinarySearchIndex(array, item, mid, right)
  } else if (array[mid] > item) {
    return recursiveBinarySearchIndex(array, item, left, mid)
  }

  return -1
}

count = 0
console.log('--------------------------')
console.log(recursiveBinarySearchIndex(arr, 12))
console.log('count of operations = ', count)
console.log('length of array = ', arr.length)

// ищем кол-во одинаковых чисел в отсортированном массиве
const countFreq = (arr, el) => {
  const posEl = binarySearchIndex(arr, el)

  if (posEl === -1) return 0

  let i = posEl
  while (arr[i] === el) i -= 1

  let j = posEl
  while (arr[j] === el) j += 1

  return j - i - 1
}

console.log('--------------------------')
console.log(countFreq(arr, 3))
