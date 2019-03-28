function areSimilar(a, b) {
  let firstArr = [];
  let secondArr = [];

  if (a.toString() === b.toString()) {
    return true;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      firstArr.push(a[i]);
      secondArr.push(b[i]);
    }
  }

  secondArr = secondArr.reverse();
  if (firstArr.length === 2 && firstArr.toString() === secondArr.toString()) {
    return true;
  }

  return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [3, 1, 2]));
console.log(areSimilar([1, 2, 3, 4], [2, 1, 3, 4]));
