function squareDigitsSequence(a0) {
  let count = 1;

  const uniqueNums = [a0];

  while (true) {
    count++;
    a0 = digitPower(a0);

    if (uniqueNums.includes(a0)) {
      return count;
    }
    uniqueNums.push(a0);
  }
}

function digitPower(num) {
  const digits = num
    .toString()
    .split('')
    .map(element => parseInt(element) ** 2);
  const sum = digits.reduce((a, b) => a + b, 0);

  return sum;
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
