function fancyRide(leng, fares) {
  let rides = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
  let answer = '';

  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * leng <= 20) {
      answer = rides[i];
      break;
    } else {
      answer = `can't afford a ${leng} mile trip`;
    }
  }
  return answer;
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(100, [0.3, 0.5, 0.7, 1, 1.3]));
