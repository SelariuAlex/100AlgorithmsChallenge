function digitDegree(n) {
  let nrOfReplaces = 0;

  function sumOfNumbers(nr) {
    nr = nr.toString().split('');
    n = nr.reduce((a, v) => parseInt(a) + parseInt(v));
  }

  while (n > 9) {
    sumOfNumbers(n);
    nrOfReplaces++;
  }

  return nrOfReplaces;
}

console.log(digitDegree(5));
console.log(digitDegree(9));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(digitDegree(81));
