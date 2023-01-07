function formatDate(timestamp) {
  let year = timestamp.getFullYear();
  let date = timestamp.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[timestamp.getDay()];
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
  let month = months[timestamp.getMonth()];
  let hour = timestamp.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = timestamp.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `Last updated: ${day}, ${date} ${month} ${year}, at ${hour}:${minute}`;
}

function displayForecast() {
  let forecast = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Sun", "Mon", "Tue"];

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="forecast-date">${day}</div>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
          width="54px"
        />
        <div class="forecast-temperatures">
          <span class="forecast-temp-max"> 18° </span>
          <span class="forecast-temp-min"> 12° </span>
        </div>
        <div class="forecast-description" id="forecastDescription">
          Cloudy
        </div>
      </div>
    `;
  });

  forecastHTML = forecastHTML + `</div>`;

  forecast.innerHTML = forecastHTML;
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.city;

  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#current-description").innerHTML =
    response.data.condition.description;

  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  let icon = document.querySelector("#current-icon");
  icon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );

  celsiusTemp = response.data.temperature.current;
}

function search(city) {
  let apiKey = "6388f1440964o89a833d5fftb7d99ca1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  search(cityInput.value);
}

function changeToFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = Math.round((celsiusTemp * 9) / 5 + 32);
  document.querySelector("#temperature").innerHTML = fahrenheitTemp;

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function changeToCelsius(event) {
  event.preventDefault();
  document.querySelector("#temperature").innerHTML = Math.round(celsiusTemp);

  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
}

let form = document.querySelector("#search-button");
form.addEventListener("click", handleSubmit);

let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", changeToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", changeToCelsius);

document.querySelector("#current-date").innerHTML = formatDate(new Date());

search("Bristol");
displayForecast();
