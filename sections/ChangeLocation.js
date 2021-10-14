const bucuresti = document.querySelector(".bucuresti");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const ungheni = document.querySelector(".ungheni");




// o functie care micsoreaza codul repetitiv, si la apelarea caruia se vor modifica orasul de pe pagina web
function updateCity(city){
  
  // variabila la textul de pe web, care se va schimba la "click"
  const currentCity = document.querySelector(".orasul");

  currentCity.innerHTML = city;
  displayCurrentWeather(city);
//   la fiecare click pe un anumit orash, datele cu orasul respectiv se va salva in localStorage, si pagina va ramane aceiasi la "refresh"
  localStorage.setItem("city", city);
}

bucuresti.addEventListener("click",function() {
    updateCity("București");
   
});

timisoara.addEventListener("click", function () {
updateCity("Timișoara");

});

oradea.addEventListener("click", function () {
updateCity("Oradea")
});

ungheni.addEventListener("click", function () {
updateCity("Ungheni")
});