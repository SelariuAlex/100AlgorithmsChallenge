function integerToStringOfFixedWidth(number, width) {
  let stringNr = number.toString();
  let nrWidth = stringNr.length;
  let cutString = '';

  if (width > nrWidth) {
    return stringNr.padStart(width, '0');
  }

  if (nrWidth === width) {
    return stringNr;
  }

  if (width < nrWidth) {
    cutString = stringNr.substring(width, nrWidth);
    return cutString;
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
