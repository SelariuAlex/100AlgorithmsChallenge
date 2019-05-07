function flattenArray(arr) {
  let arrLeng = arr.length;
  let flatArr = arr.flat(arrLeng);
  return flatArr;
}

console.log(flattenArray([[['a']], [['b']]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
