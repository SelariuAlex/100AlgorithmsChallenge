function candies(children, candys) {
  let nrOfcandys = Math.floor(candys / children);
  return nrOfcandys;
}

console.log(candies(3, 10));
console.log(candies(2, 10));
console.log(candies(4, 10));
