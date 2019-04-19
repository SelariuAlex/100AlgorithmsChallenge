function differentSymbolsNaive(s) {
  let stringArr = s.split('');
  let setArr = new Set(stringArr);
  return setArr.size;
}

console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive('cabcafadsfgeaffa'));
