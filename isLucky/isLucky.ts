function isLucky(n) {
  let stringNr = n.toString();
  let half = stringNr.length / 2;

  let firstHalf = sumNumString(stringNr.substring(0, half));
  let secondHalf = sumNumString(stringNr.substring(half));

  function sumNumString(nr) {
    return nr
      .split('')
      .map(char => parseInt(char))
      .reduce((num1, num2) => num1 + num2);
  }

  return firstHalf === secondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
