function isCaseInsensitivePalindrome(inputString) {
  inputString = inputString.toLowerCase();
  let inputArr = inputString
    .split('')
    .reverse()
    .join('');
  let reversStr = inputArr;

  if (inputString === reversStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('racecar'));
