function alternatingSums(a) {
  let firstArrSum = 0;
  let secondArrSum = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      firstArrSum += a[i];
    } else {
      secondArrSum += a[i];
    }
  }

  return [firstArrSum, secondArrSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

console.log(alternatingSums([1, 60, 2, 40, 3, 30, 0, 10]));
