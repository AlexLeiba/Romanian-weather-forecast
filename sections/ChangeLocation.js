const bucuresti = document.querySelector(".bucuresti");
const iasi = document.querySelector(".iasi");
const timisoara = document.querySelector(".timisoara");
const clujNapoca = document.querySelector(".cluj-napoca");
const constanta = document.querySelector(".constanta");
const craiova = document.querySelector(".craiova");
const brasov = document.querySelector(".brasov");
const galati = document.querySelector(".galati");
const ploiesti = document.querySelector(".ploiesti");
const oradea = document.querySelector(".oradea");
const braila = document.querySelector(".braila");
const arad = document.querySelector(".arad");






// o functie care micsoreaza codul repetitiv, si la apelarea caruia se vor modifica orasul de pe pagina web
function updateCity(city){
  
  // variabila la textul de pe web, care se va schimba la "click"
  const currentCity = document.querySelector(".orasul");

  currentCity.innerHTML = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);
//   la fiecare click pe un anumit orash, datele cu orasul respectiv se va salva in localStorage, si pagina va ramane aceiasi la "refresh"
  localStorage.setItem("city", city);
}

bucuresti.addEventListener("click",function() {
    updateCity("București");
   
});

iasi.addEventListener("click", function () {
updateCity("Iași");

});

timisoara.addEventListener("click", function () {
updateCity("Timișoara");
});

clujNapoca.addEventListener("click", function () {
updateCity("Cluj-Napoca");
});

constanta.addEventListener("click", function () {
  updateCity("Constanța");
});

craiova.addEventListener("click", function () {
  updateCity("Craiova");
});

brasov.addEventListener("click", function () {
  updateCity("Brașov");
});

galati.addEventListener("click", function () {
  updateCity("Galați");
});

ploiesti.addEventListener("click", function () {
  updateCity("Ploiești");
});

oradea.addEventListener("click", function () {
  updateCity("Oradea");
});

braila.addEventListener("click", function () {
  updateCity("Brăila");
});

arad.addEventListener("click", function () {
  updateCity("Arad");
});