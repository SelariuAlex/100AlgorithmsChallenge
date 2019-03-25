function allLongestStrings(inputArray: string[]): string[] {
  let arrLeng = inputArray.map(e => e.length);
  let maxLeng = Math.max(...arrLeng);
  let longest = inputArray.filter(e => e.length === maxLeng);
  return longest;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
