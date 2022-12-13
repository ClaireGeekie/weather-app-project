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
  let minute = dateToFormat.getMinutes();
  let second = dateToFormat.getSeconds();

  return `It is currently ${day}, ${month} ${date} ${year}, at ${hour}:${minute}:${second}`;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let searchedCity = document.querySelector("#searched-city");
  let now = document.querySelector("#current-date");
  now.innerHTML = formatDateTime(new Date());

  if (cityInput.value !== "") {
    searchedCity.innerHTML = cityInput.value;
  } else {
    cityInput.placeholder = "Please enter a city first";
  }
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
form.addEventListener("click", searchCity);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeToCelsius);
