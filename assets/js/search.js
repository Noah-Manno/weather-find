const searchCityForm = document.getElementById('searchCityForm')

function handleSearchCitySubmit(event) {
    event.preventDefault();

    const searchCityVal = document.querySelector('#searchCity').value;
    const apiKey = "425a1e6fae9ebc735167fa20a12202a3"

    if (!searchCityVal) {
        console.error('you need to input a city!');
        return;
    }

    let searchHistoryEl = $('#search-history');
    let newSearch = $(`<li class="search">${searchCityVal}</li>`)
    newSearch.on('click', function() {
        let queryString = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCityVal}&appid=${apiKey}&units=imperial`
        fetchWeatherData(queryString)
        .then(function(data) {
            handleUsingData(data);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
    })
    searchHistoryEl.append(newSearch);
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(searchCityVal);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

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
    const twoicon = document.getElementById('two-icon');
    const twodate = document.getElementById('two-date');
    const twotemp = document.getElementById('two-temp');
    const threeicon = document.getElementById('three-icon');
    const threedate = document.getElementById('three-date');
    const threetemp = document.getElementById('three-temp');
    const fouricon = document.getElementById('four-icon');
    const fourdate = document.getElementById('four-date');
    const fourtemp = document.getElementById('four-temp');
    const fiveicon = document.getElementById('five-icon');
    const fivedate = document.getElementById('five-date');
    const fivetemp = document.getElementById('five-temp');
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

    twoicon.src = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`;
    twodate.textContent = dayjs(data.list[12].dt_txt).format('MM/DD/YY');
    twotemp.textContent = `${Math.round(data.list[12].main.temp)}°F`;

    threeicon.src = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`;
    threedate.textContent = dayjs(data.list[20].dt_txt).format('MM/DD/YY');
    threetemp.textContent = `${Math.round(data.list[20].main.temp)}°F`;

    fouricon.src = `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`;
    fourdate.textContent = dayjs(data.list[28].dt_txt).format('MM/DD/YY');
    fourtemp.textContent = `${Math.round(data.list[28].main.temp)}°F`;

    fiveicon.src = `https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`;
    fivedate.textContent = dayjs(data.list[36].dt_txt).format('MM/DD/YY');
    fivetemp.textContent = `${Math.round(data.list[36].main.temp)}°F`;

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