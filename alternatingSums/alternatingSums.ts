function alternatingSums(a) {
  let firstArr = [];
  let secondArr = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      firstArr.push(a[i]);
    } else {
      secondArr.push(a[i]);
    }
  }

  let firstArrSum = firstArr.reduce((acc, elem) => acc + elem);
  let secondArrSum = secondArr.reduce((acc, elem) => acc + elem);

  return [firstArrSum, secondArrSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

console.log(alternatingSums([1, 60, 2, 40, 3, 30, 0, 10]));
