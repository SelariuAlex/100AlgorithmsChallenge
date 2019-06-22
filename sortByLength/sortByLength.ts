function sortByLength(inputArray) {
  return inputArray.sort((str1, str2) => str1.length - str2.length);
}

console.log(sortByLength(['abc', '', 'aaa', 'a', 'zz']));
