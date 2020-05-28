for (var i = 0; i < 3; i++) {
  console.log(i);
}
// console.log(i);

for (let j = 0; j < 3; j++) {
  console.log(j);
  return j;
}
//this below wont work, just the one in the function, cause LET
console.log(j);
//not about variable but the place in memory that is being reassigned

// for (const N = 0; N < 3; N++) {
//   console.log(N);
// }

// console.log(N);
