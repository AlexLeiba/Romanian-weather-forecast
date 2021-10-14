// aceasta functie cand va fi apelata va afisa vremea curenta a unui oras setat(inner.HTML)

function displayCurrentWeather(city){

    const currentWeatherSection = document.querySelector(".current-weather");

    // in aceasta variabila introducem functia care returneaza Api-ul de pe server si din care obtinem toate datele despre Vreme
    const currentWeatherEndPoint = getCurrentWeatherEndPoint(city)

// in fetch adaugam lincul din variabila cu API
    fetch(currentWeatherEndPoint)
      .then((response) => response.json())
      .then((json) => {
        // extragerea tuturor valorilor din json  (adica din obiect)(cu obiect destructuring)
        const { weather, main, wind, dt ,name} = json;


        const hours = getHours(dt);
        const day = getDay(dt);
        const temperature = Math.round(main.temp);
        const windkmPerHour = Math.round(getWindmeterInKm(wind.speed))

        const description = weather[0].description;
        const feelsLike = Math.round(main.feels_like)

        // apelez codul iconitei cu [] deoarece Weather este un array
        const iconUrl = getIconUrl(weather[0].icon);
        
        // afisam pe pagina web/ in interiorul fatch, deoarece valoarea lui .then doar aici este vizibila
        currentWeatherSection.innerHTML = `
        <h2>${name}</h2>
        <p><span class="fs-4"> ${day}</span>,<strong> ${hours}</strong> </p>
        <h4><strong>${temperature}°C</strong> </h4>
        <strong><p>Se simte ca:${feelsLike}°C</p></strong>
        <img src="${iconUrl}" alt="">
        <p><strong>Vantul: ${windkmPerHour}Km/h </strong> </p>

        <p>${description} </p>
        
        
        
        `;
      });
     
}
