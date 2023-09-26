const apiKey = 'd2a4e5c254b64b56617896c53b36ef25';
const apiUrl= 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' MPH';
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°F';
}


searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value);
})

checkWeather();