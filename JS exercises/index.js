// 1.Write a JavaScript program that prints "Hello, JavaScript!" to the console.
// console.log("hello world");
// 2.Write a function that takes an integer as a parameter and returns whether it's even or odd.
const checkOddOrEven = () => {
  const a = prompt("enter the number");
  if (a % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
console.log(checkOddOrEven);
