var cityInput = document.querySelector('.city-input');
var searchButton = document.querySelector(".search-button");

var getCityCoordinates = () => {
    var cityName = cityInput.value.trim();
    if(!cityName) return;
    
    var geocoding_api_url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=bc0870e01e324bfce02175d5094bf53d"

    fetch(geocoding_api_url)
    .then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("An error occured while fetching the coordinates");
    });
}

searchButton.addEventListener("click", getCityCoordinates);