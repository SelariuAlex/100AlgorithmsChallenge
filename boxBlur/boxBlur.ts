function boxBlur(image) {
  let allNumbersfromGrid = [];

  image.forEach(array => {
    array.forEach(number => {
      allNumbersfromGrid.push(number);
    });
  });

  const sumAllNumbers = allNumbersfromGrid.reduce((acc, num) => acc + num, 0);
  const value = Math.floor(sumAllNumbers / allNumbersfromGrid.length);

  return [value];
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
