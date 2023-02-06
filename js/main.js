const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

// FINE DEL MONDO
titleEl.innerHTML = "TIMER";

// recupera la data di fine countdown in ms
PrintTimeLeft;
const TimerCountdown = setInterval(PrintTimeLeft, 1000);

/**
 * Prende data e ora al momento dell' esecuzione e data ed ora di fine,
 * fa un countdown diviso in secondi, minuti, ore, giorni.
 */
function PrintTimeLeft() {
  // recupera la data di oggi in ms
  const nowMS = new Date().getTime();
  const endDateMS = new Date("2023-02-06 09:30").getTime();

  // sottrai i millisecondi della data odierna a quella della fine del countdown
  const timer = endDateMS - nowMS;
  console.log(timer);
  const MStoSeconds = timer / 1000;

  const seconds = Math.floor(MStoSeconds % 60);
  const minutes = Math.floor(MStoSeconds / 60) % 60;
  const hours = Math.floor(MStoSeconds / 60 / 60) % 24;
  const days = Math.floor(MStoSeconds / 60 / 60 / 24);
  if (timer < 0) {
    stopCounter();
  }

  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  daysEl.innerHTML = days < 10 ? "0" + days : days;
}

function stopCounter() {
  clearInterval(TimerCountdown);
}
