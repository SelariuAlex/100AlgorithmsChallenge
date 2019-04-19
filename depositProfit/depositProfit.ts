function depositProfit(deposit, rate, threshold) {
  let yearRate = 0;
  let years = 0;
  while (deposit < threshold) {
    yearRate = deposit * (rate / 100);
    deposit = deposit + yearRate;
    years++;
  }

  return years;
}

console.log(depositProfit(100, 20, 170));
