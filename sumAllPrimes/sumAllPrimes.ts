function sumAllPrimes(num) {
  let store = [];
  let primes = [];

  for (let i = 2; i <= num; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (let j = i << 1; j <= num; j += i) {
        store[j] = true;
      }
    }
  }

  return primes.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
