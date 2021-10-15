

function displayWeatherForecast(city) {
    const currentForecastSection = document.querySelector(".weather-forecast");

const currentForecastEndPoint = getForecastEndPoint(city);

    fetch(currentForecastEndPoint)
      .then((response) => response.json())
      .then((json) => {
          
      const { list }= json;
      console.log(json)

currentForecastSection.innerHTML = "";
// vreau sa adaug fiecare cheie din acest obiect sa fie (o zi din saptamina)
    const daysForecast ={};

    list.forEach(forecast => {
    const { dt } = forecast;
    const daysOfWeek = getDay(dt);
    // ziua saptaminii va fi in aceasta constanta
    

    // adaug o cheie noua intrun obiect:(daca cheia nui un string, si ii o variabila se pune intre paranteze patrate)

//Daca am deja ziua saptaminii pentru ziua respectiva (se va adauga in obiect cu push continutul lui (forecast))
    if(daysForecast[daysOfWeek] !== undefined){
   daysForecast[daysOfWeek].push(forecast);
    } else {
   daysForecast[daysOfWeek] = [forecast];
    }
    
    });
    
    // dupa ce am plecat de la un array cu 40 de elemente,am extras zilele saptaminii intrun obiect, si acum vreau sa il parcurc pentru a afisa pe ecran continutul lui..

    for ( const property in daysForecast){
      // cheia este proprietatea
      // valoarea obiectului este: obiectul[property]

      currentForecastSection.innerHTML += `
      <div  class="mt-5">
        <h2>${property}</h2>
        </div>
        `;

    

      const list = daysForecast[property] ;
      //   iteram prin (lista)40 predictii
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
