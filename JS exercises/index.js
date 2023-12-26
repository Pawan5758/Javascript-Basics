// // Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// get the current date and time
var today = new Date();

// get the day of the week(0-6, where o is sundya and 6 is saturday)
var day = today.getDay();

// array of day names
var dayList = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// display the current day
console.log(`Today is : ${dayList[day]}.`);
// get the current hour, minute and second
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

// Determine if it's am or pm
let prepand = hour >= 12 ? "pm" : "am";

// convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;

// check for special cases when hour is 0 and it's pm
if (hour === 0 && prepand === "pm") {
  if (minute === 0 && second == 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "pm";
  }
}

// check for special cases when hour is 0 and it's am
if (hour === 0 && prepand === "am") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "am";
  }
}

//display the current time
console.log(`current time :${hour}${prepand}:${minute}:${second}`);
