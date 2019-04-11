function characterParity(symbol) {
  let convert = parseInt(symbol);
  if (isNaN(convert)) {
    return 'not a digit';
  } else if (convert % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
console.log(characterParity('25'));
console.log(characterParity(null));
