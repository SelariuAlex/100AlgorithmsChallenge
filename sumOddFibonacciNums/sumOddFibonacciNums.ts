function sumOddFibonacciNums(num) {
  let result = 0;
  let prevoius = 0;
  let current = 1;

  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }

    let nextCurrent = current + prevoius;
    prevoius = current;
    current = nextCurrent;
  }

  return result;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
