navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
const API_KEY ="1384007cf3eba2d092057f352b7d3232";
const weatherIcon = document.querySelector("#weather");
const temp = document.querySelector("#weather span:first-child");
const  city= document.querySelector("#weather span:last-child");


function onGeoSuccess(event){
   // console.log(event);
   
    const lat =event.coords.latitude;
    const lon =event.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   
    //console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            temp.innerText = `${data.main.temp}°`;
            city.innerText = data.name;
            const icon = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            const iconImg = document.createElement("img");
            iconImg.src = iconUrl;
            iconImg.innerText = `${data.main.temp}°`;
           // console.log(weatherIcon);
           weatherIcon.insertBefore(iconImg, temp);
           // console.log(data.main.temp);
        }
            );
}

function onGeoError(){
    console.log("NO WEATHER");
}