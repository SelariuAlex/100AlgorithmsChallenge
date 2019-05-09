function houseOfCats(legs) {
  let cat = Math.floor(legs / 4);
  let human = Math.floor(legs / 2);
  let legArr = [];

  if (!cat) {
    legArr = [human];
    return legArr;
  } else {
    legArr = [cat, human];
    return legArr;
  }
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(4));
