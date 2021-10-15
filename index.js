let localStorageCity = localStorage.getItem("city");

// locul unde se va afisa toate datele pe pagina
const currentCity = document.querySelector(".orasul");


// daca caut o cheie care nu egzista in localStorage va da valoarea "null"
// in aceasta functie daca nu avem nimic in localStorage , se va adauga in localStorage cheia "city " cu valoarea "bucuresti"

if(localStorageCity === null){
localStorage.setItem("city", "București");
// Setam datele "by default" in local Storage, atunci cand se va da click pentru prima oara pe acest site!

displayCurrentWeather("București");
currentCity.innerHTML = "București";
} else{
    // Daca deja ceva este in localStorage se va afisa pe ecran ce este acolo!
    displayCurrentWeather(localStorageCity);
    currentCity.innerHTML = localStorageCity;
};



displayCurrentWeather(localStorageCity);
displayWeatherForecast(localStorageCity);
