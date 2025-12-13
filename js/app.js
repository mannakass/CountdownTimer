const getNewYear = () => {
  const currentYear = new Date().getFullYear();
  return new Date(`January 01 ${currentYear + 1} 00:00:00`);
};

// update the year element
const year = document.querySelector(".year");
year.innerHTML = getNewYear().getFullYear();

// select elements
const app = document.querySelector(".countdown-timer");
const message = document.querySelector(".message");
const heading = document.querySelector("h1");

const format = (t) => {
  return t < 10 ? "0" + t : t;
};

const render = (time) => {
  app.innerHTML = `
    <div class="count-down flex flex-row min-h-screen justify-center items-center">
            <div class="timer px-6 border border-amber-50">
                <h2 class="days text-7xl font-bold ">${format(time.days)}</h2>
                <small class= "flex justify-center text-xl ">Days</small>
            </div>
            <div class="timer px-6 border border-amber-50">
                <h2 class="hours text-7xl font-bold ">${format(time.hours)}</h2>
                <small class="flex justify-center  text-xl">Hours</small>
            </div>
            <div class="timer px-6 border border-amber-50">
                <h2 class="minutes text-7xl font-bold ">${format(
                  time.minutes
                )}</h2>
                <small class="flex justify-center  text-xl">Minutes</small>
            </div>
            <div class="timer px-6 border border-amber-50">
                <h2 class="seconds text-7xl font-bold ">${format(
                  time.seconds
                )}</h2>
                <small class="flex justify-center  text-xl">Seconds</small>
            </div>
        </div>
        `;
};

const showMessage = () => {
  message.innerHTML = `Happy New Year ${newYear}!`;
  app.innerHTML = "";
  heading.style.display = "none";
};

const hideMessage = () => {
  message.innerHTML = "";
  heading.style.display = "block";
};

const complete = () => {
  showMessage();

  // restart the countdown after showing the
  // greeting message for a day ()
  setTimeout(() => {
    hideMessage();
    countdownTimer.setExpiredDate(getNewYear());
  }, 1000 * 60 * 60 * 24);
};

const countdownTimer = new CountDown(getNewYear(), render, complete);
