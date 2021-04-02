// Кэширование вычислений

const cashFunction = (fn) => {
  // кэш не будет перезатиратся, так как мы используем замыкание,
  // и кэш будет хранится в данном контексте, потому что мы его сохранили
  // таким образом: const cashFactorial = cashFunction(factorial)
  // cashFactorial будет равна возвращаемой функции из cashFunction
  const cash = {}

  return function (n) {
    if (cash[n]) {
      console.log('Взято из кеша: ', cash[n])
      return cash[n]
    } else {
      let result = fn(n)
      console.log('Посчитала функция: ', result)
      cash[n] = result
      return result
    }
  }
}

const factorial = (n) => {
  if (n < 0) return null
  if (n === 0 || n === 1) return 1
  let result = 1

  while (n !== 1) {
    result *= n
    n -= 1
  }

  return result
}

const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(4) // выведется результат из кэша
cashFactorial(5) // выведется результат из кэша
cashFactorial(1)
cashFactorial(0)
cashFactorial(-10)
