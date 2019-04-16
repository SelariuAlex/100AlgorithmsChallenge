function containsDuplicates(a) {
  for (let i = 0; i < a.length; i++) {
    if (a.lastIndexOf(a[i]) !== i) {
      return false;
    }
  }
  return true;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
console.log(containsDuplicates('abadc'));
console.log(containsDuplicates('abdc'));
