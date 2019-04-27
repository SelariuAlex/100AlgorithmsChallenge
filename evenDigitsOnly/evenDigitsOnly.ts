function evenDigitsOnly(n) {
  let digitsArr = n.toString().split('');
  return digitsArr.every(digit => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
