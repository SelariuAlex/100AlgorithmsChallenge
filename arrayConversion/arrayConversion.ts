function arrayConversion(inputArray) {
  let sumOfNum = true;

  while (inputArray.length !== 1) {
    inputArray = replacePair(inputArray, sumOfNum);
    sumOfNum = !sumOfNum;
  }
  return inputArray[0];
}

function replacePair(nums, sumOfNum) {
  let replacePairs = [];

  if (sumOfNum) {
    for (let i = 0; i < nums.length; i = i + 2) {
      replacePairs.push(nums[i] + (isNaN(nums[i + 1]) ? 0 : nums[i + 1]));
    }
  } else {
    for (let i = 0; i < nums.length; i = i + 2) {
      replacePairs.push(nums[i] * (isNaN(nums[i + 1]) ? 0 : nums[i + 1]));
    }
  }
  return replacePairs;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 9, 1, 2, 3, 4])); // [3,7,11,16,3,7] [21,111,21] [132,21] [132341]
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7]));
