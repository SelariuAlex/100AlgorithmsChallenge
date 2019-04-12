function checkPalindrome(string) {
  string = string.toLowerCase();
  let characterArr = string.split('');
  let validCharacters = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  let letterArr = [];
  characterArr.forEach(element => {
    if (validCharacters.indexOf(element) > -1) letterArr.push(element);
  });

  if (letterArr.join('') === letterArr.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
console.log(checkPalindrome("Madam I'm Adam"));
