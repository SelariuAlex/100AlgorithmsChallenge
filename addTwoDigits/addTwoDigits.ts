function addTwoDigits(n) {
  let splitNr = n.toString().split('');
  if (splitNr.length > 1) {
    let result = splitNr.reduce((add, e) => Number(e) + add, 0);

    console.log(result);
  } else {
    console.log(n);
  }
}

addTwoDigits(29);
addTwoDigits(3);
addTwoDigits(295);
