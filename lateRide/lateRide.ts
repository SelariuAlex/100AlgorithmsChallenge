function lateRide(n) {
  let ore = Math.floor(n / 60);
  let min = n % 60;

  let oreString = ore.toString();
  let minString = min.toString();

  let allDigits = oreString.concat(minString);

  let sumOfDigits = allDigits
    .split('')
    .map(e => parseInt(e))
    .reduce((a, b) => a + b);

  return sumOfDigits;
}

console.log(lateRide(240));
console.log(lateRide(808));
