// const nums = [1, 2, 3];

// for (const value of nums) {
//   console.log(value);
// }
//using map, set and get by key

const movies = new Map([
  ["Bridesmaid", 5],
  ["Mean Girls", 4],
  ["Evil Dead", 3],
  ["Dumber and Dumber", 5],
]);

// console.log(movies);
movies.set("Avatar", 5);

for (const [key, value] of movies) {
  if (value > 4) {
    console.log(key);
  }
}
console.log(movies.get("Bridesmaid"));

// console.log(movies);
