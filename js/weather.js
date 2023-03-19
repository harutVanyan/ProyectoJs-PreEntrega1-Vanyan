let weather;


async function getFullWeather() {

  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7a636e54d7msh66fb8aa85e5d614p1f2ed3jsn922fd303ff74",
        "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
      },
    };

    fetch(`https://dark-sky.p.rapidapi.com/${lat},${long}?units=auto&lang=es`, options)
      .then((response) => response.json())
      .then((response) => {
          weather = response;
          console.log(weather)


        const weatherInfo = document.getElementById("weather-info");

        const iconUrl = `https://darksky.net/images/weather-icons/${weather.currently.icon}.png`;

        const iconBackgroundUrl = `url(${iconUrl})`;
        
        const cardHtml = `
          <div class="card clima-card">
            <div class="icon" style="background-image: ${iconBackgroundUrl}"></div>
            <div class="card-body">
              <p class="card-text">Latitud: ${weather.latitude}</p>
              <p class="card-text">Longitud: ${weather.longitude}</p>
              <p class="card-text">Zona horaria: ${weather.timezone}</p>
              <p class="card-text">Resumen actual: ${weather.currently.summary}</p>
              <p class="card-text">Temperatura actual: ${weather.currently.temperature}</p>
              <p class="card-text">Probabilidad de precipitaciones: ${weather.currently.precipProbability} %</p>
            </div>
          </div>
        `;
       
        weatherInfo.innerHTML = cardHtml;
      })
      .catch((err) => console.error(err));
  });
}

const showWeatherBtn = document.getElementById("show-weather-btn");
const card = document.querySelector(".card");

showWeatherBtn.addEventListener("click", function () {
  if (card.style.display === "none") {
    card.style.display = "block";
    getFullWeather();
  }
});
