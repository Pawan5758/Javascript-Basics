// // write a function to add numbers
// // const a = Number(prompt("enter any number"));
// // // const b = Number(prompt("enter any number"));

// // function add(a, b) {
// //   return a + b;
// // }
// // es6
// // const add = ()=>{};

// // function checkEven(a) {
// //   return a % 2 === 0;
// // }
// // // const c = add(a, b);
// // // console.log(prompt("the sum of" + a + "+" + b + "=" + c));
// // const c = checkEven(a);
// // console.log(alert(c));

// // convert fahrenheit to celsius
// const fahrenheit = Number(prompt("enter the temperature in fahrenheit"));
// function tocelius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }
// const value = tocelius(fahrenheit);
// console.log(alert(value));

// Types of function
// // // Nameless Function
/*const a = function () {
  console.log("hello from nameless");
};
a();*/

// // default function
/*const mul = (a = 2, b) => {
  return a * b;
};
const res = mul(undefined, 8);
console.log(res);*/
// pagination example by default function
/*const pagination = (page = 1, size = 5) => {
  for (let i = page; i <= size; i++) {
    console.log(i);
  }
};
pagination(undefined, undefined);*/
// // paramaterized function

// // inline function
/*const footer = function () {
  console.log("inline function");
};
footer();
*/

// // closure function
/*const secret = () => {
  const password = "random";
  return password;
};
console.log(secret());*/

// // implicit function
/*const addit = (a, b) => a + b;
const result = addit(2, 6);
console.log(result);*/

// // explicit function
/*const add = (a, b) => {
  return a + b;
};
result = add(2, 3);
console.log(result);*/
/
//  IIFE function
/*(function (a,b) {
  return a+b;
  console.log("I am trial");
})(3,6);*/
