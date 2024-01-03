const API_KEY = `eacde46e235d7714823747216b82730e`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async(city) => {
    console.log('Fetching weather for city')
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
    if(data.cod=="404"){
        weather.innerHTML = `<h2>CITY NOT FOUND </h2>`;  
        return;
    }


    weather. innerHTML = `
         <div>
             <h>${data.main.temp}</h2>
             <h4> ${data.weather[0].main} </h4>
         </div>
 `;
};
form. addEventListener(
"submit",
function(event) {
getWeather(search.value)
event.preventDefault();

}
)