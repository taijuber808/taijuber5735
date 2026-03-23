const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {
  const city = document.getElementById("city").value;

  const url = `https://fakestoreapi.com/products`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("weatherResult").innerHTML = `
          <h2>${data.name}</h2>
          <p>🌡 Temp: ${data.main.temp} °C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌬 Wind: ${data.wind.speed} km/h</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = "City not found 😢";
      }
    })
    .catch(error => {
      console.log(error);
    });
}