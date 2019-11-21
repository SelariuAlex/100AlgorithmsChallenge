function seatsInTheater(nCols, nRows, col, row) {
  const colDiff = nCols - col + 1;
  const rowDiff = nRows - row;

  return colDiff * rowDiff;
}

console.log(seatsInTheater(16, 11, 5, 3));
