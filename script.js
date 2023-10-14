async function getWeatherInfo() {
    try {
        const searchInput = document.getElementById('location').value
        const weatherChoice = document.getElementById('weather-type').value
        const days = document.getElementById('num-days').value
        const weatherResults = document.querySelector('.weather-result')
        const url = 'https://api.weatherapi.com/v1/'
        const myKey = config.API_KEY
    
        if (!searchInput) {
            weatherResults.style.display = 'none'
            throw new Error('No search input provided.')
        }
    
        if (weatherChoice) {
            const response =  await fetch( url + `${weatherChoice}.json?` + `key=${myKey}` + `&q=${searchInput}` + `&days=${days}`)
            const updateddata = getFetchedData(response)
            return updateddata;
        } 
    } catch (error) {
        console.log(error)
        throw error
    }
}

function getFetchedData(response) {
    if (!response.ok) {
        const errorData = response.json();
        throw new Error(errorData.error.message);
    }
    return response.json();
}