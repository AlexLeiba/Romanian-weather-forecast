let localStorageCity = localStorage.getItem("city");

// locul unde se va afisa toate datele pe pagina.
const currentCity = document.querySelector(".orasul");



if(localStorageCity === null){
  localStorage.setItem("city", "București");
  // București by default

  displayCurrentWeather("București");
  currentCity.innerHTML = "București";
} else{
   
    displayCurrentWeather(localStorageCity);
    currentCity.innerHTML = localStorageCity;
};


displayCurrentWeather(localStorageCity);
displayWeatherForecast(localStorageCity);
