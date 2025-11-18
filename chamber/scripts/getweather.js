// *** Current Weather ************************************************

// Select DOM elements for weather display
const weatherIconBox = document.querySelector('#weather-icon');
const todayWeatherInfoBox = document.querySelector('#weather-today');

// OpenWeatherMap API URL for current weather in Mesa, AZ
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.41467838414674&lon=-111.83429718634753&units=imperial&appid=9413a2c5bf89718799396cb548b18ec9';

// Function to fetch weather data
async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display weather data on the webpage
function displayWeather(data) {

    // Create img element and get weather icon URL
    const icon = document.createElement('img'); 
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // Set weather icon
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].description);
    // Append icon to weather icon box
    weatherIconBox.appendChild(icon);


    // Create info variables for temperature
    const tempPara = document.createElement('p'); // Temp
    tempPara.innerHTML = `<strong>Temperature:</strong> ${data.main.temp.toFixed(0)}°F`;

    const descPara = document.createElement('p'); // Description
    let desc = data.weather[0].description;
    descPara.innerHTML = `<strong>Description:</strong> ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

    const highTempPara = document.createElement('p'); // High Temp
    highTempPara.innerHTML = `<strong>High:</strong> ${data.main.temp_max.toFixed(0)}°F`;

    const lowTempPara = document.createElement('p'); // Low Temp
    lowTempPara.innerHTML = `<strong>Low:</strong> ${data.main.temp_min.toFixed(0)}°F`;

    const humidityPara = document.createElement('p'); // Humidity
    humidityPara.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`;

    const sunrisePara = document.createElement('p'); // Sunrise
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    sunrisePara.innerHTML = `<strong>Sunrise:</strong> ${sunriseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    
    const sunsetPara = document.createElement('p'); // Sunset
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunsetPara.innerHTML = `<strong>Sunset:</strong> ${sunsetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    // Append Info to current weather info box
    todayWeatherInfoBox.appendChild(tempPara);
    todayWeatherInfoBox.appendChild(descPara);
    todayWeatherInfoBox.appendChild(highTempPara);
    todayWeatherInfoBox.appendChild(lowTempPara);
    todayWeatherInfoBox.appendChild(humidityPara);
    todayWeatherInfoBox.appendChild(sunrisePara);
    todayWeatherInfoBox.appendChild(sunsetPara);
}

fetchWeather(url);



// *** 3 - Day Forecast ************************************************

