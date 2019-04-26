function electionsWinners(votes, k) {
  let first = Math.max(...votes);
  let winners = votes.filter(e => {
    return e + k > first;
  });
  return winners.length;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([2, 3, 5, 6], 4));
console.log(electionsWinners([2, 3, 5, 2], 1));
