

function displayCurrentWeather(city){

    const currentWeatherSection = document.querySelector(".current-weather");

   
    const currentWeatherEndPoint = getCurrentWeatherEndPoint(city)

    fetch(currentWeatherEndPoint)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        
        const { weather, main, wind, dt ,name} = json;


        const hours = getHours(dt);
        const day = getDay(dt);
        const temperature = Math.round(main.temp);
        const windkmPerHour = Math.round(getWindmeterInKm(wind.speed))

        const description = weather[0].description;
        const feelsLike = Math.round(main.feels_like)

      
        const iconUrl = getIconUrl(weather[0].icon);

        const humidity = main.humidity;
        
       
        currentWeatherSection.innerHTML = `
      <div class="d-flex justify-content-around " >
        <div>
          <h2>${name}</h2>
          <p><span class="fs-4"> ${day}</span>,<strong> ${hours}</strong> </p>
          <span><strong class="fs-3">${temperature}°C <img src="${iconUrl}" alt=""></strong></span>
          
        </div>

        <div>
          
          <p class="text-capitalize fs-5" >${description} </p>
          <p class="fs-5">Se simte ca:<strong> ${feelsLike}°C</strong></p>
        
          <p class="fs-5">Vântul: <strong> ${windkmPerHour}Km/h </strong> </p>
          <p class="fs-5">Umiditatea aerului: <strong>${humidity}%</strong> </p>

         
        </div>

      </div>
        
        
        `;
      });
     
}
