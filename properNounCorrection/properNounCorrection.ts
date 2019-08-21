function properNounCorrection(noun) {
  const firstLetter = noun[0].toUpperCase();
  const rest = noun.toLowerCase().slice(1, noun.lenght);
  return `${firstLetter}${rest}`;
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
