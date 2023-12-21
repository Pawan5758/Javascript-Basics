// program for a simple calculator
let result;

// take the operand input
const number1 = Number(prompt("Enter first number: "));
const number2 = Number(prompt("Enter second number: "));

// take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

switch (operator) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;

  case "*":
    result = number1 * number2;
    break;

  case "/":
    result = number1 / number2;
    break;

  default:
    console.log("Invalid operator");
    break;
}
console.log(result);
