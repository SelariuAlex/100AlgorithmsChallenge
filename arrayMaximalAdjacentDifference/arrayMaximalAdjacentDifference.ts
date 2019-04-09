function arrayMaximalAdjacentDifference(inputArray) {
  let maxDif = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    let absoluteDif = Math.abs(inputArray[i - 1] - inputArray[i]);

    maxDif = absoluteDif > maxDif ? absoluteDif : maxDif;
  }

  return maxDif;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
