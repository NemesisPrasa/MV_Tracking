// Set the target date and time (replace with your specific date and time)
const targetDate = new Date("2023-07-31T14:30:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = now - targetDate;

  if (timeRemaining <= 0) {
    document.getElementById("countdown").innerHTML = "Countdown expired!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = ` ${days}d  ${hours}h  ${minutes}min  ${seconds}sec`;
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();