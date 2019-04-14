function chunkyMonkey(arr, size) {
  let result = [];
  let chunks = Math.ceil(arr.length / size);

  for (let i = 0; i < chunks; i++) {
    result.push(arr.splice(0, size));
  }
  return result;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 1));
