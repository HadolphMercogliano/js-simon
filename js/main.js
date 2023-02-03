const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

// // FINE DEL MONDO
titleEl.innerHTML = "TIMER";
// // recupera la data di fine countdown in ms
const tomorrowMS = new Date("2023-02-06 09:30").getTime();

const TimerCountdown = setInterval(PrintTimeLeft, 1000);

PrintTimeLeft();

function PrintTimeLeft() {
  // recupera la data di oggi in ms
  const nowMS = new Date().getTime();

  // sottrai i millisecondi della data odierna a quella della fine del countdown
  let timer = tomorrowMS - nowMS;

  let seconds = Math.floor((timer % (1000 * 60)) / 1000);
  let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let days = Math.floor(timer / (1000 * 60 * 60 * 24));

  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  daysEl.innerHTML = days < 10 ? "0" + days : days;
}
