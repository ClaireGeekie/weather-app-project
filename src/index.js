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

function getSearchedPosition(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  getWeather(city);
}

function getWeather(city) {
  let apiKey = "a7bd404387b79725fa33852fc451a93b";
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(weatherURL).then(displaySearchedWeather);
}

function displaySearchedWeather(response) {
  document.querySelector("#searched-city").innerHTML = response.data.name;

  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#current-humidity").innerHTML =
    response.data.main.humidity;

  document.querySelector("#current-humidity").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#current-description").innerHTML =
    response.data.weather[0].main;
}

function retrieveLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let apiKey = "a7bd404387b79725fa33852fc451a93b";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(displaySearchedWeather);
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

let localWeatherButton = document.querySelector("#current-location-button");
localWeatherButton.addEventListener("click", retrieveLocation);
