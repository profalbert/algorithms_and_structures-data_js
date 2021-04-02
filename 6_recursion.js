// Рекурсия

// вычисляем факториал с помощью рекурсии
const factorial = (n) => {
  if (n < 0) return null
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
console.log(factorial(10))

// вычисляем числа фибоначчи с помощью рекурсии - 1,1,2,3,5,8,13,21
const fibonachi = (n) => {
  if (n === 1 || n === 2) return 1
  return fibonachi(n - 1) + fibonachi(n - 2)
}
console.log('--------------------------')
console.log(fibonachi(7))

// вычисляем факториал без рекурсии
const factorial2 = (n) => {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}
console.log('--------------------------')
console.log(factorial2(10))
