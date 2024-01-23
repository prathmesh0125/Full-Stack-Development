function delayedFunction() {
  // Record the start time
  const startTime = new Date();

  // Perform some operation (e.g., log a message)
  console.log("Delayed function executed!");

  // Record the end time
  const endTime = new Date();

  // Calculate the time difference
  const timeDifference = endTime - startTime;

  console.log(`Time taken: ${timeDifference} milliseconds`);
}

// Call the delayed function after 2000 milliseconds (2 seconds)
setTimeout(delayedFunction, 2000);
