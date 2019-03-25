function adjacentElementsProduct(inputArray) {
  let bigNr = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    let currentNr = inputArray[i] * inputArray[i + 1];
    bigNr = bigNr < currentNr ? currentNr : bigNr;
  }
  return bigNr;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
