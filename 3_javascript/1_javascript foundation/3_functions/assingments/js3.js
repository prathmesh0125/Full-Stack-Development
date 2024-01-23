function clock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  console.clear();
  console.log(`Time: ${TimeFormat(hours)}:${TimeFormat(minute)}:${TimeFormat(second)}`);

  function TimeFormat(time){
  return time<10 ? `0${time}`:time;

  }
}
setInterval(clock, 1000);

// function displayClock() {
//   const currentTime = new Date();

//   const hours = currentTime.getHours();
//   const minutes = currentTime.getMinutes();
//   const seconds = currentTime.getSeconds();

//   console.clear();
//   console.log(`Time: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`);
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// // Display the clock every second
// setInterval(displayClock, 1000);
