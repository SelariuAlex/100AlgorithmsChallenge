function minimalNumberOfCoins(coins, price) {
  let totalCoins = 0;

  while (coins[coins.length - 1] <= price) {
    let numCoins = Math.floor(price / coins[coins.length - 1]);
    totalCoins += numCoins;
    price = price - numCoins * coins[coins.length - 1];
    coins.pop();
  }

  return totalCoins;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
console.log(minimalNumberOfCoins([1, 2, 10], 29));
console.log(minimalNumberOfCoins([1, 2, 10], 39));
