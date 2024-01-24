// In JavaScript, new Date() is a constructor function that creates an instance of the Date object. It is not a class in the classical sense (as JavaScript did not have classes prior to ES6), but it serves as a constructor for creating date objects.

// The Date object in JavaScript is a built-in object that represents a date and time. When you use the new Date() syntax, you are invoking the constructor function to create a new instance of the Date object, which represents the current date and time.

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minute = currentDate.getMinutes();
const sec = currentDate.getSeconds();
function format(date) {
  return date < 10 ? `0${date}` : date;
}

// console.log(`Date: ${format(date)}:${format(month + 1)}:${format(year)}`);

// console.log(currentDate);

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
// dateMethods();

// console.log(currentDate.getTime());
const current = new Date(1706108826954);
console.log(current);