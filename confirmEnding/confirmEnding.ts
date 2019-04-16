function confirmEnding(str, target) {
  let endOfString = str.slice(-target.length);

  return endOfString === target;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
