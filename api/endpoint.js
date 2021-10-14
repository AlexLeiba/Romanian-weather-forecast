// acest script ar trebui sa fie primul, la citirea programului mai intii se va egzecuta API

const API_KEY = "e0bf950a19e2f5800bf00b9d91316fc2";
const city = "București";


// PENTRU A INTRODUCE VARIABILE IN SIR DE CARACTERE FOLOSIM Template string ${} intre bacticuri ``
function getCurrentWeatherEndPoint(city){
    return` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`; 
}
//  cand apelam acest link browserul imi raspunde cu un JSON, un obiect cu tot ce contine acest server.
// Datorita la aceasta functie vom putea apela mai multe orase (city)


function getForecastEndPoint(city){
   
    return `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
}









