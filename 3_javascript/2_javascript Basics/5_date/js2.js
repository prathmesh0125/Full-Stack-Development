// creaing small clock on
function displayTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const sec = currentDate.getSeconds();
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  console.clear();
  console.log(
    `Date: ${formatTime(hours)}:${formatTime(minute)}:${formatTime(sec)}`
  );
}

let clock = displayTime;
setInterval(clock, 0);
