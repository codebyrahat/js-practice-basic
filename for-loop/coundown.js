// Count down timer that count down from  81 to 65
let count = 81;
const timer = setInterval(() => {
  console.log(count);
  count--;
  if (count < 65) {
    clearInterval(timer);
    console.log("Countdown Finished");
  }
}, 1000);
