// (Year, Month (0-11), Day, Hour, Minute, Second)
const startTime = new Date(2023, 7, 23, 0, 0, 0);

function updateTimer() {
  const currentTime = new Date();
  const timeDiff = currentTime - startTime;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const formattedTime = `${days} days, ${hours % 24} hours, ${
    minutes % 60
  } min, ${seconds % 60} sec`;

  document.getElementById(
    "timer"
  ).innerHTML = `${formattedTime}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
