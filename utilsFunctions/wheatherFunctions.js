
function getIconUrl(code){

    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}



function getWindmeterInKm(meterSec){
return (meterSec * 18) / 5;
}