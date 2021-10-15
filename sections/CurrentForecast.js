

function displayWeatherForecast(city) {
    const currentForecastSection = document.querySelector(".weather-forecast");

const currentForecastEndPoint = getForecastEndPoint(city);

    fetch(currentForecastEndPoint)
      .then((response) => response.json())
      .then((json) => {
          
      const { list }= json;
      console.log(json)

    currentForecastSection.innerHTML = "";

    const daysForecast ={};

    list.forEach(forecast => {
    const { dt } = forecast;
    const daysOfWeek = getDay(dt);
   
    


    if(daysForecast[daysOfWeek] !== undefined){
   daysForecast[daysOfWeek].push(forecast);
    } else {
   daysForecast[daysOfWeek] = [forecast];
    }
    
    });
    
   

    for ( const property in daysForecast){
     

      currentForecastSection.innerHTML += `
      <div  class="mt-5">
        <h2>${property}</h2>
        </div>
        `;

    

      const list = daysForecast[property] ;
      
      list.forEach((forecast) => {
        //  object destructuring
        const { dt, main, weather } = forecast;

        const day = getDay(dt);
        const time = getHours(dt);
        const temperature = Math.round(main.temp);
        const feels = Math.round(main.feels_like);
        const iconUrl = getIconUrl(weather[0].icon);
        const description = weather[0].description;

        currentForecastSection.innerHTML += `
         <div class="d-flex justify-content-around align-items-center align-middle border border-2 mt-4">
        
         <span class="fs-5"><strong> ${time}</strong></span>
         <img src="${iconUrl}" alt="icon">

        <p class="fs-5"><strong>${temperature}°C</strong> </p>
        <p>Se simte ca: <strong>${feels} °C</strong></p>
        <p class="text-capitalize">${description} </p>
       

        </div>

      `;
      });
    }
     
    
      });
    }
