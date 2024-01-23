let counter = 0;

function count() {
  console.clear();
  console.log(counter++);
  if (counter == 10) {
    clearInterval(counterinterval);
    console.log("Counter reached 30. Exiting.");
  }
  
}
const counterinterval = setInterval(count, 1000);
