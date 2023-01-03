function formatDateTime(dateToFormat) {
  let year = dateToFormat.getFullYear();
  let date = dateToFormat.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dateToFormat.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[dateToFormat.getMonth()];
  let hour = dateToFormat.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = dateToFormat.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `It is currently ${day}, ${month} ${date} ${year}, at ${hour}:${minute}`;
}

function getSearchedPosition(position) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let searchedCity = document.querySelector("#searched-city");
  searchedCity.innerHTML = cityInput.value;

  let apiKey = "a7bd404387b79725fa33852fc451a93b";
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  axios.get(weatherURL).then(displaySearchedWeather);
}

function displaySearchedWeather(position) {
  let temp = document.querySelector("#current-temperature");
  temp.innerHTML = Math.round(position.data.main.temp);
}

function changeToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");

  temperature.innerHTML = 52;
}

function changeToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");

  temperature.innerHTML = 11;
}

let form = document.querySelector("#search-button");
form.addEventListener("click", getSearchedPosition);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeToCelsius);

let now = document.querySelector("#current-date");
now.innerHTML = formatDateTime(new Date());
