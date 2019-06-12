function uniqueDigitProducts(numArr) {
  const singleDigitNumbers = [];

  numArr.forEach(num => {
    const product = getSingleDigit(num);

    if (!singleDigitNumbers.includes(product)) {
      singleDigitNumbers.push(product);
    }
  });

  return singleDigitNumbers.length;
}

function getSingleDigit(num) {
  const digits = num.toString().split('');
  let result = 1;

  digits.forEach(digit => {
    result *= parseInt(digit);
  });

  return result;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
