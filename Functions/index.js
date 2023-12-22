// write a function to add numbers
const a = Number(prompt("enter any number"));
const b = Number(prompt("enter any number"));

function add(a, b) {
  return a + b;
}

function checkEven(a) {
  return a % 2 === 0;
}
// const c = add(a, b);
// console.log(prompt("the sum of" + a + "+" + b + "=" + c));
const c = checkEven(a);
console.log(alert(c));
