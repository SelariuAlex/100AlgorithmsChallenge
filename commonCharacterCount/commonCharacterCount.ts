function commonCharacterCount(s1, s2) {
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  const s1Object = getCharObject(s1Array);
  const s2Object = getCharObject(s2Array);
  let total = 0;

  for (let prop in s1Object) {
    if (s2Object.hasOwnProperty(prop)) {
      if (s2Object[prop] < s1Object[prop]) {
        total += s2Object[prop];
      } else {
        total += s1Object[prop];
      }
    }
  }

  return total;
}

function getCharObject(chars) {
  const wordCount = {};

  for (let i = 0; i < chars.length; i++) {
    if (wordCount.hasOwnProperty(chars[i])) {
      wordCount[chars[i]]++;
    } else {
      wordCount[chars[i]] = 1;
    }
  }
  return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('aabcca', 'abbdcaa'));
