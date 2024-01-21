// // write a javascript function that reverses a number 32243.
/*
steps
1. write a function called reverser
2. call the reverser with paramater
3. invoke that function with data
4. typecast the number to string
5.get the length of the string
6.loop in oposite way
7. return the value
*/
const reverser = (num) => {
  const data = String(num);
  const lengthOfData = data.length;
  let temp = "";
  for (let i = lengthOfData - 1; i >= 0; i--) {
    temp += data[i];
  }
  return temp;
};
console.log(reverser(32243));
