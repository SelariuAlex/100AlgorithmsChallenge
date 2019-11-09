function extractMatrixColumn(matrix, column) {
  let matrixColumnArr = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixColumnArr.push(matrix[i][column]);
  }

  return matrixColumnArr;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 1));
