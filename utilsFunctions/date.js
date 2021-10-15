

function getHours(valoareaUtc){
let date = new Date(valoareaUtc * 1000);

let hours = date.getHours();
let minutes = date.getMinutes();

if(hours < 10){
    hours = "0" + hours ;
}
if(minutes < 10){
    minutes = "0" + minutes;
}

return `${hours}:${minutes}`
}


function getDay(valoareaUtc){
    let date = new Date(valoareaUtc * 1000);
    let dayIndex = date.getDay();

    let day;
    switch (dayIndex) {
      case 0:
        day = "Duminică";
        break;
      case 1:
        day = "Luni";
        break;
      case 2:
        day = "Marți";
        break;
      case 3:
        day = "Miercuri";
        break;
      case 4:
        day = "Joi";
        break;
      case 5:
        day = "Vineri";
        break;
      case 6:
        day = "Sâmbătă";
        break;

        
    }
    return day;
}

// button Scroll
const buttonScroll = document.querySelector(".button-scroll");

buttonScroll.addEventListener("click", function(){
  window.scrollTo({
    top: 10,
    behavior: "smooth"
  })
});

document.addEventListener("scroll", function(){
  if(window.scrollY > 1200){
    buttonScroll.style.visibility = "visible";
  } else {
    buttonScroll.style.visibility = "hidden";
  }
})


