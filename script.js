// (Year, Month (0-11), Day, Hour, Minute, Second)
const startTime = new Date(2023, 9, 5, 1, 14, 45);

function updateTimer() {
  const currentTime = new Date();
  const timeDiff = currentTime - startTime;

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

   document.getElementById("days").innerHTML = `${days} days`;
   document.getElementById("hours").innerHTML = `${hours % 24} hours`;
   document.getElementById("minutes").innerHTML = `${minutes % 60} minutes`;
   document.getElementById("seconds").innerHTML = `${seconds % 60} seconds`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
