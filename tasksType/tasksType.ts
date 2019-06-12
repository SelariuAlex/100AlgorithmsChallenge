function tasksTypes(deadlines, day) {
  const today = [];
  const upcoming = [];
  const later = [];

  deadlines.forEach(num => {
    if (num <= day) {
      today.push(num);
    } else if (num > day + 7) {
      later.push(num);
    } else {
      upcoming.push(num);
    }
  });

  return [today.length, upcoming.length, later.length];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
