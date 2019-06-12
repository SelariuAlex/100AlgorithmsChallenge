function sumOfTwo(a, b, v) {
  const numbersNeeded = {};

  for (let num of a) {
    const difference = v - num;
    numbersNeeded[difference] = difference;
  }

  for (let num of b) {
    if (numbersNeeded.hasOwnProperty(num)) {
      return true;
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 44));
