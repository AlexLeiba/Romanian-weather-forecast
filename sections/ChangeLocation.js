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
const pitesti = document.querySelector(".pitesti");
const sibiu = document.querySelector(".sibiu");
const bacau = document.querySelector(".bacau");
const targuMures = document.querySelector(".targuMures");
const baiaMare = document.querySelector(".baiaMare");
const buzau = document.querySelector(".buzau");
const botosani = document.querySelector(".botosani");
const satuMare = document.querySelector(".satuMare");


function updateCity(city){
  

  const currentCity = document.querySelector(".orasul");

  currentCity.innerHTML = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);

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

pitesti.addEventListener("click", function () {
  updateCity("Pitești");
});

sibiu.addEventListener("click", function () {
  updateCity("Sibiu");
});

bacau.addEventListener("click", function () {
  updateCity("Bacău");
});

targuMures.addEventListener("click", function () {
  updateCity("Târgu Mureș");
});

baiaMare.addEventListener("click", function () {
  updateCity("Baia Mare");
});

buzau.addEventListener("click", function () {
  updateCity("Buzău");
});

botosani.addEventListener("click", function () {
  updateCity("Botoșani");
});

satuMare.addEventListener("click", function () {
  updateCity("Satu Mare");
});