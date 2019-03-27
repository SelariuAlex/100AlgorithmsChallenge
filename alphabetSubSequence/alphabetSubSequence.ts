function alphabetSubsequence(s) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let stringArr = s.split('');
  let result = null;
  let curent = -1;

  for (let i = 0; i < stringArr.length; i++) {
    if (curent < alphabet.indexOf(stringArr[i])) {
      curent = alphabet.indexOf(stringArr[i]);
      result = true;
    } else {
      result = false;
      return result;
    }
  }

  return result;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
