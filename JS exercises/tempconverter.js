/*
1.write an empty function
2.Name it tempconverter
3.write down the parameters used in the function
4.create default function parametere with second parameter as "c"
5.Invoke the function using 60 degrees
6.add switch case in the mix/if else statement
7.use the formula to return the result
8.console log the function call
*/

const tempconverter = (temp, measurement = "c") => {
  if ((measurement = "c")) {
    return (9 * temp) / 5 + 32 + "fahrenheit";
  }
  return ((remp - 32) / 9) * 5 + "celsius";
};
console.log(tempconverter(45, "f"));
