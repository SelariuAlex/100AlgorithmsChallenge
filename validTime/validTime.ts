function validTime(time) {
  // const OreMinute = time.split(':');
  // if (OreMinute[0] > 23) {
  //   return false;
  // }
  // if (OreMinute[1] > 59) {
  //   return false;
  // }
  // return true;

  const [ore, minute] = time.split(':');

  if (parseInt(ore) > 23 || parseInt(ore) < 0) {
    return false;
  }
  if (parseInt(minute) > 59 || parseInt(minute) < 0) {
    return false;
  }

  return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
