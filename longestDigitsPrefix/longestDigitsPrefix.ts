function longestDigitsPrefix(inputString) {
  let stringArr = inputString.split('');
  let prefix = '';

  for (let e of stringArr) {
    let num = parseInt(e);

    if (isNaN(num)) {
      break;
    }

    prefix += e;
  }
  return prefix;
}

console.log(longestDigitsPrefix('123aa1'));
