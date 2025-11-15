// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



// define the URLs for the weather API
// URL for Current Weather Data API with lat and lon for Trier, Germany
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499146187491&lon=6.631513026713897&units=metric&appid=9413a2c5bf89718799396cb548b18ec9';
// URL for Forecast Data API with lat and lon for Trier, Germany
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.7499146187491&lon=6.631513026713897&units=metric&appid=9413a2c5bf89718799396cb548b18ec9';



// function to fetch weather data and display it
async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
// function to display weather data on the webpage
function displayResults(data) {
    // display current temperature
    currentTemp.textContent = `${data.main.temp.toFixed(0)}°C`;
    // get weather icon 
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // set weather icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    // get weather description
    let desc = data.weather[0].description;
    // set caption description. Character at index 0 to uppercase then concatenate the rest of the string
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}



// call the function to fetch and display weather data
apiFetch(url);
