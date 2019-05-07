function firstDuplicate(a) {
  const obj = {};

  for (let i = 0; i < a.length; i++) {
    if (!obj[a[i]]) {
      obj[a[i]] = 'no duplicate';
    } else {
      return a[i];
    }
  }

  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
console.log(firstDuplicate([2, 4, 3, 5, 1, 5, 4]));
