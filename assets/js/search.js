const searchCityForm = document.getElementById('searchCityForm')

function handleSearchCitySubmit(event) {
    event.preventDefault();

    const searchCityVal = document.querySelector('#searchCity').value;
    const apiKey = "425a1e6fae9ebc735167fa20a12202a3"

    if (!searchCityVal) {
        console.error('you need to input a city!');
        return;
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
    const weatherIconEl = document.getElementById('weatherIconEl')


    let cityTempVal = data.list[0].main.temp;
    let cityTemp = Math.round(cityTempVal);
    cityTempEl.textContent = `${cityTemp}°F`

    let cityNameVal = data.city.name;
    cityNameEl.textContent = cityNameVal

    let weatherIcon = data.list[0].weather[0].icon;
    weatherIconEl.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
}
searchCityForm.addEventListener('submit', handleSearchCitySubmit);