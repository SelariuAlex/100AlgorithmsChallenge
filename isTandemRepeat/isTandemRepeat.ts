function isTandemRepeat(inputString) {
  const wordLength = inputString.length;

  if (wordLength % 2 === 0) {
    let fistHalf = inputString.slice(0, wordLength / 2);
    let secondHalf = inputString.slice(wordLength / 2, wordLength);

    return fistHalf === secondHalf;
  }

  return false;
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));
console.log(isTandemRepeat('2we2ww'));
