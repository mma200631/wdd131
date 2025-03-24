// Static values for temperature and wind speed
const temperature = 30; // °C
const windSpeed = 15; // km/h

// Function to calculate windchill using the metric formula
function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Display windchill if conditions are met, otherwise display 'N/A'
function displayWindChill() {
  const windChillElement = document.getElementById('windchill');

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
    windChillElement.textContent = `Wind Chill: ${windChill} °C`;
  } else {
    windChillElement.textContent = 'Wind Chill: N/A';
  }
}
document.getElementById("currentYear").textContent=new Date().getFullYear();
document.getElementById("lastModified").textContent="Last Updates:" + document.lastModified;

// Run on page load
document.addEventListener('DOMContentLoaded', displayWindChill);