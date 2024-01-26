// write a function to sort the array by age in ascending order
const ex = [
  { name: "pawan", age: 22 },
  { name: "arun", age: 12 },
  { name: "sawan", age: 25 },
  { name: "sdawan", age: 28 },
];
ex.sort((a, b) => a.name.localeCompare(b.name));
console.log(ex);
