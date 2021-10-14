// functia pentru iconite, primeste ca parametru codul iconitei, si osa returneze stringul corespunzator.
// voi primi codul dela iconita de pe server, si functia automat va introduce acel cod actual de vreme, in lincul returnat
function getIconUrl(code){

    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

// transformarea metri pe sec In Km pe ora/ se inmulteste (18) cu MetriPeSec , si se imparte la 5//

function getWindmeterInKm(meterSec){
return (meterSec * 18)/ 5;
}