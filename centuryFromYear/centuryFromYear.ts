function centuryFromYear(year) {
  let century = Math.ceil(year / 100);
  return century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2005));
console.log(centuryFromYear(20));
