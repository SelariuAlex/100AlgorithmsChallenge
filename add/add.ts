function add(...num) {
  let output = num.reduce((acc, elem) => acc + elem);
  return output;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add(1, 2, 3, 4, 5));
console.log(add(2, 3, 5));
