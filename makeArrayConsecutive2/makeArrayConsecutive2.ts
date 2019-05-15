function makeArrayConsecutive2(statues) {
  let neededStatues = 0;
  statues = statues.sort((a, b) => a - b);
  const min = statues[0];
  const max = statues[statues.length - 1];

  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      neededStatues++;
    }
  }

  return neededStatues;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([1, 2, 3, 14]));
