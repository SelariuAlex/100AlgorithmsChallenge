function addBorder(picture) {
  let margin = '*****';
  let border = [...picture].map(e => `*${e}*`);
  border.unshift(margin);
  border.push(margin);
  return border;
}

console.log(addBorder(['abc', 'ded']));

console.log(addBorder(['abc', 'ded', 'fdg']));
console.log(addBorder(['abc', 'ded', 'zcz', 'sadasfgafda']));
