function sortByHeight(a) {
  let sortedArr = a.filter(num => num !== -1).sort((num1, num2) => num1 - num2);
  let indexVal = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sortedArr[indexVal];
      indexVal++;
    }
  }

  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
