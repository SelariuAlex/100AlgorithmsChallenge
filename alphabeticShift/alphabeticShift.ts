function alphabeticShift(inputString) {
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
  let nextLetterArr = [];
  let strArr = inputString.split('');

  for (let i = 0; i < strArr.length; i++) {
    let nextIndex = alphabet.indexOf(strArr[i]) + 1;
    if (nextIndex >= alphabet.length) {
      nextIndex = 0;
    }
    nextLetterArr.push(alphabet[nextIndex]);
  }

  return nextLetterArr.join('');
}

console.log(alphabeticShift('crazy'));
