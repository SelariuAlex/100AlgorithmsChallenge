function isCaseInsensitivePalindrome(inputString) {
  inputString = inputString.toLowerCase();
  let reversStr = inputString
    .split('')
    .reverse()
    .join('');

  return inputString === reversStr;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('racecar'));
