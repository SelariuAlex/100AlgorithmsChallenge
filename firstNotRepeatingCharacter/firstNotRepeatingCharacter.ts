function firstNotRepeatingCharacter(s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }

  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
console.log(firstNotRepeatingCharacter('bcbadef'));
