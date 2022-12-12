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

let now = document.querySelector("#current-date");
now.innerHTML = formatDateTime(new Date());
