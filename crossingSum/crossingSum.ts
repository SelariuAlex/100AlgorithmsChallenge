function crossingSum(matrix, a, b) {
  let columTotal = matrix[a].reduce((acc, curr) => acc + curr);
  let rowTotal = 0;

  for (let i = 0; i < matrix.length; i++) {
    rowTotal += i !== a ? matrix[i][b] : 0;
  }
  return columTotal + rowTotal;
}

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 1, 3));

console.log(crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], 2, 3));

console.log(
  crossingSum([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]], 3, 1)
);
