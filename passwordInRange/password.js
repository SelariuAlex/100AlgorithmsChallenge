// part 1
//function range(start, end) {
//   return Array(end - start + 1)
//     .fill()
//     .map((_, idx) => start + idx);
// }

// const input = range(264793, 803935);

// let count = 0;

// input.map(pass => {
//   const result = { inc: true, dbl: false };

//   const array = pass.toString().split("");
//   array.map((x, idx, arr) => {
//     if (parseInt(x) > parseInt(arr[idx + 1])) result.inc = false;
//     if (parseInt(x) <= parseInt(arr[idx + 1]) && result.inc) result.inc = true;
//     if (parseInt(x) === parseInt(arr[idx + 1])) result.dbl = true;
//   });

//   if (result.inc && result.dbl) count++;
// });

// console.log("Passwords matching specification: ", count);
// console.log("Passwords failed specification: ", input.length - count);
// console.log("Total passwords checked: ", input.length, "\n\n");

//Part 2
function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

const input = range(264793, 803935);

let count = 0;

input.map(pass => {
  const result = { inc: true, dbl: false };
  const array = pass.toString().split("");
  let duplicate = {};

  array.map((x, idx, arr) => {
    if (parseInt(x) > parseInt(arr[idx + 1])) result.inc = false;
    if (parseInt(x) <= parseInt(arr[idx + 1]) && result.inc) result.inc = true;
    if (parseInt(x) === parseInt(arr[idx + 1])) {
      duplicate[x] = duplicate[x] ? duplicate[x] + 1 : 1;
    }
  });

  Object.keys(duplicate).map(dup => {
    if (duplicate[dup] === 1) result.dbl = true;
  });
  if (result.inc && result.dbl) count++;
});

console.log("Passwords matching specification: ", count);
console.log("Passwords failed specification: ", input.length - count);
console.log("Total passwords checked: ", input.length);
