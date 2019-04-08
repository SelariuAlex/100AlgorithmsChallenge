function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  let newArr = inputArray.map(e => {
    if (elemToReplace === e) {
      e = substitutionElem;
    }
    return e;
  });
  return newArr;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace([1, 2, 3, 4, 2, 2], 2, 9));
