// creaing small clock on
function displayTime() {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const sec = currentDate.getSeconds();
  function format(date) {
    return date < 10 ? `0${date}` : date;
  }

  console.clear();
  console.log(`Date: ${format(hours)}:${format(minute)}:${format(sec)}`);
}

let clock = displayTime;
setInterval(clock, 0);
