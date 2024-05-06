const searchCityForm = document.getElementById('searchCityForm')
let searchHistoryEl = $('#search-history');

function handleSearchCitySubmit(event) {
    event.preventDefault();

    const searchCityVal = document.querySelector('#searchCity').value;
    const apiKey = "425a1e6fae9ebc735167fa20a12202a3"

    if (!searchCityVal) {
        console.error('you need to input a city!');
        return;
    }

    // Check if the word already exists
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    if (!searchHistory.includes(searchCityVal)) {
        // Create a new search item
        let newSearch = $(`<li class="search">${searchCityVal}</li>`);
    
        // Add click event to the new search item
        newSearch.on('click', function() {
            let queryString = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCityVal}&appid=${apiKey}&units=imperial`;
    
            // Fetch weather data and handle it
            fetchWeatherData(queryString)
                .then(function(data) {
                    handleUsingData(data);
                })
                .catch(function(error) {
                    console.error('Error fetching data:', error);
                });
        });
    
        // Append the new search item to the search history element
        searchHistoryEl.append(newSearch);
    
        // Update the search history in local storage
        searchHistory.push(searchCityVal);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } else {
        console.log('Word already exists in search history');
    }
    
    const queryString = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCityVal}&appid=${apiKey}&units=imperial`
    console.log(queryString)

    fetchWeatherData(queryString)
        .then(function(data) {
            handleUsingData(data);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
}

function fetchWeatherData(queryString) {
    return fetch(queryString)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }
            return response.json();
    })
}


function handleUsingData(data) {
    console.log(data);

    const cityTempEl = document.getElementById('cityTempEl');
    const cityNameEl = document.getElementById('cityNameEl');
    const weatherIconEl = document.getElementById('weatherIconEl');
    const oneicon = document.getElementById('one-icon');
    const onedate = document.getElementById('one-date');
    const onetemp = document.getElementById('one-temp');
    const onewind = document.getElementById('one-wind');
    const onehumidity = document.getElementById('one-humidity');
    const twoicon = document.getElementById('two-icon');
    const twodate = document.getElementById('two-date');
    const twotemp = document.getElementById('two-temp');
    const twowind = document.getElementById('two-wind');
    const twohumidity = document.getElementById('two-humidity');
    const threeicon = document.getElementById('three-icon');
    const threedate = document.getElementById('three-date');
    const threetemp = document.getElementById('three-temp');
    const threewind = document.getElementById('three-wind');
    const threehumidity = document.getElementById('three-humidity');
    const fouricon = document.getElementById('four-icon');
    const fourdate = document.getElementById('four-date');
    const fourtemp = document.getElementById('four-temp');
    const fourwind = document.getElementById('four-wind');
    const fourhumidity = document.getElementById('four-humidity');
    const fiveicon = document.getElementById('five-icon');
    const fivedate = document.getElementById('five-date');
    const fivetemp = document.getElementById('five-temp');
    const fivewind = document.getElementById('five-wind');
    const fivehumidity = document.getElementById('five-humidity');
    const bottomCityName = document.getElementById('bottomCityName');
    const bottomDate = document.getElementById('bottomDate');
    const windSpeed = document.getElementById('windSpeed');
    const humidity = document.getElementById('humidity');
    const parcipitation = document.getElementById('parcipitation')
    const feelsLike = document.getElementById('feelsLike')
    const description = document.getElementById('desc')
    const visibility = document.getElementById('visibility')


    let cityTempVal = data.list[0].main.temp;
    let cityTemp = Math.round(cityTempVal);
    cityTempEl.textContent = `${cityTemp}°F`

    let cityNameVal = data.city.name;
    cityNameEl.textContent = cityNameVal
    bottomCityName.textContent = cityNameVal

    let weatherIcon = data.list[0].weather[0].icon;
    weatherIconEl.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    oneicon.src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;
    onedate.textContent = dayjs(data.list[4].dt_txt).format('MM/DD/YY');
    onetemp.textContent = `${Math.round(data.list[4].main.temp)}°F`;
    onewind.textContent = `Wind: ${Math.round(data.list[0].wind.speed)} Mph`;
    onehumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`

    twoicon.src = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`;
    twodate.textContent = dayjs(data.list[12].dt_txt).format('MM/DD/YY');
    twotemp.textContent = `${Math.round(data.list[12].main.temp)}°F`;
    twowind.textContent = `Wind: ${Math.round(data.list[0].wind.speed)} Mph`;
    twohumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`

    threeicon.src = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`;
    threedate.textContent = dayjs(data.list[20].dt_txt).format('MM/DD/YY');
    threetemp.textContent = `${Math.round(data.list[20].main.temp)}°F`;
    threewind.textContent = `Wind: ${Math.round(data.list[0].wind.speed)} Mph`;
    threehumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`

    fouricon.src = `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`;
    fourdate.textContent = dayjs(data.list[28].dt_txt).format('MM/DD/YY');
    fourtemp.textContent = `${Math.round(data.list[28].main.temp)}°F`;
    fourwind.textContent = `Wind: ${Math.round(data.list[0].wind.speed)} Mph`;
    fourhumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`

    fiveicon.src = `https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`;
    fivedate.textContent = dayjs(data.list[36].dt_txt).format('MM/DD/YY');
    fivetemp.textContent = `${Math.round(data.list[36].main.temp)}°F`;
    fivewind.textContent = `Wind: ${Math.round(data.list[0].wind.speed)} Mph`;
    fivehumidity.textContent = `Humidity: ${data.list[0].main.humidity}%`

    bottomDate.textContent = dayjs(data.list[0].dt_txt).format('MM/DD/YY');
    windSpeed.textContent = `${Math.round(data.list[0].wind.speed)} Mph`;
    humidity.textContent = `${data.list[0].main.humidity}%`

    parcipitation.textContent = `Parcipitation: ${data.list[0].pop * 100}% Chance`
    feelsLike.textContent = `Feels Like: ${Math.round(data.list[0].main.feels_like)}°F`;
    description.textContent = `Weather: ${data.list[0].weather[0].description}`
    visibility.textContent = `Visibility: ${data.list[0].visibility} Meters`
}
searchCityForm.addEventListener('submit', handleSearchCitySubmit);

function onload() {

    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (searchHistory) {
        searchHistory.forEach(city => {
            let newSearchListItem = $(`<li class="search">${city}</li>`)
            searchHistoryEl.append(newSearchListItem);
        });
    }

const apiKey = "425a1e6fae9ebc735167fa20a12202a3"
const queryString = `https://api.openweathermap.org/data/2.5/forecast?q=New York&appid=${apiKey}&units=imperial`

fetchWeatherData(queryString)
    .then(function(data) {
        handleUsingData(data);
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);
    });

function fetchWeatherData(queryString) {
    return fetch(queryString)
    .then(function (response) {
    if (!response.ok) {
        throw response.json();
    }
        return response.json();
    })
}
}

onload()