function missingLetters(str) {
  const alphabet = [
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

  if (str[0] !== 'a') {
    return undefined;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }
}
console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));
