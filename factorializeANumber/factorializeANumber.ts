function factorializeANumber(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factorializeANumber(num - 1);
  }
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
console.log(factorializeANumber(2));
console.log(factorializeANumber(1));
