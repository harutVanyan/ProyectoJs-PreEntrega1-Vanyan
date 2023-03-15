let weather;

async function getFullWeather() {

  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e97678cebcmshd6a30c3fb7b1149p131170jsn69ee1643b908",
        "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
      },
    };

    fetch(`https://dark-sky.p.rapidapi.com/${lat},${long}?units=auto&lang=es`, options)
      .then((response) => response.json())
      .then((response) => {
          weather = response;
          //console.log(weather)


        const weatherInfo = document.getElementById("weather-info");

        // Generar URL de la imagen correspondiente al icono
        const iconUrl = `https://darksky.net/images/weather-icons/${weather.currently.icon}.png`;

        // Asignar la URL a una variable
        const iconBackgroundUrl = `url(${iconUrl})`;

        // Plantilla de cadena de texto para la card
        const cardHtml = `
        <div class="card clima-card" style="background-image: ${iconBackgroundUrl}">
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
