const searchBtn = document.querySelector('.search-button')
const clearBtn = document.querySelector('.clear-button')

searchBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    errorDisplay()
    resetDisplay()
    getWeatherInfo()
    .then(displayWeatherInfo)
    .catch(onError)
})

clearBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    clearSearch()
})

form = document.querySelector('form')
const daysInput = document.querySelector('.num-days')
form.addEventListener('change',() =>{
    const searchInput = document.getElementById('weather-type').value
    if(searchInput === 'forecast'){
        daysInput.style.display = 'block'
    }
    else{
        daysInput.style.display = 'none'
    }
})

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
            return updateddata
        } 
    } catch (error) {
        console.log(error)
        throw error
    }
}

function getFetchedData(response) {
    if (!response.ok) {
        const errorData = response.json()
        throw new Error(errorData.error.message)
    }
    return response.json()
}

function displayWeatherInfo(weatherInfo) {
    const weatherResults = document.querySelector('.weather-result')
    weatherResults.style.display = 'grid'
    weatherResults.innerHTML = ''
    
    if (weatherInfo.current) {
        const currentWeather = weatherInfo.current
        locationDetails = weatherInfo?.location
        const weatherDisplay = document.createElement('div')
        const cTempRound = Math.round(currentWeather.temp_c)
        const fTempRound = Math.round(currentWeather.temp_f)
        weatherDisplay.className = 'weatherDisplay'
        weatherDisplay.innerHTML = `
            <h5>${locationDetails?.name || ''},  ${locationDetails?.country || ''}</h5>
            <h3 class= 'current-temp-c'>${cTempRound}°c</h3>
            <h3 class= 'current-temp-f'>${fTempRound}°f</h3>
            <img src='${currentWeather.condition.icon}'>
            <h4>${currentWeather.condition.text}</h4>
            <h4>${locationDetails?.localtime || ''}</h4>`
        weatherResults.appendChild(weatherDisplay)
    }  
    if (weatherInfo.forecast) {
        forecastdays = weatherInfo.forecast.forecastday
        locationDetails = weatherInfo?.location;
                forecastdays.forEach((dayReport) => {
            dayTemp = dayReport.day
            const weatherDisplay = document.createElement('div')
            weatherDisplay.className = 'weatherDisplay'
            const cTempHRound = Math.round(dayTemp.maxtemp_c)
            const cTempLRound = Math.round(dayTemp.mintemp_c)
            const fTempHRound = Math.round(dayTemp.maxtemp_f)
            const fTempLRound = Math.round(dayTemp.mintemp_f)
            weatherDisplay.innerHTML = `
                <h5>${locationDetails?.name || ''},  ${locationDetails?.country || ''}</h5>
                <img src='${dayReport.day.condition.icon}'>
                <h4>${dayReport.day.condition.text}</h4>
                <h4>${dayReport.date}</h4>
                <div class='c-temp'>
                    <h3 class='temp-c'>H: ${cTempHRound}°c</h3>
                    <h3 class='temp-c'>L: ${cTempLRound}°c</h3>
                    </div>
                    <div class='f-temp'>
                    <h3 class='temp-f'>H: ${fTempHRound}°f</h3>
                    <h3 class='temp-f'>L: ${fTempLRound}°f</h3>
                </div>`
            weatherResults.appendChild(weatherDisplay)
        })     
    }
    toggleTemp()
}

function onError(error){
    const container = document.querySelector('.container')
    const errorDisplay = document.createElement('h3')
    errorDisplay.className = 'error'
    errorDisplay.innerText = error
    errorDisplay.style.color = 'red'
    container.appendChild(errorDisplay)
}

function errorDisplay(){
    const errorDisplay = document.querySelector('.error')
    if (errorDisplay){
        errorDisplay.remove()
    }
}

function clearSearch(){
    form = document.querySelector('form')
    const days = document.querySelector('.num-days')
    form.reset()
    days.style.display = 'none'
}

function resetDisplay(){
    const weatherDisplayDiv = document.querySelector('.weatherDisplay')
    if(weatherDisplayDiv){
        weatherDisplayDiv.remove()
    }
}

function toggleTemp(){
    const cTemp = document.querySelectorAll('.c-temp')
    const fTemp = document.querySelectorAll('.f-temp')
    const currentTempC = document.querySelector('.current-temp-c')
    const currentTempF = document.querySelector('.current-temp-f')
    
    cTemp.forEach((element) => {
        element.addEventListener('click', () => {
            element.style.display = 'none'
            const correspondingFTemp = element.nextElementSibling
            correspondingFTemp.style.display = 'flex'
        })
    })
    
    fTemp.forEach((element) => {
        element.addEventListener('click', () => {
            element.style.display = 'none'
            const correspondingCTemp = element.previousElementSibling
            correspondingCTemp.style.display = 'flex'
        })
    })

    currentTempC.addEventListener('click', () =>{
        currentTempC.style.display = 'none'
        const correspondingTempF = currentTempC.nextElementSibling
        correspondingTempF.style.display = 'flex'
    })

    currentTempF.addEventListener('click', () =>{
        currentTempF.style.display = 'none'
        const correspondingTempF = currentTempF.previousElementSibling
        correspondingTempF.style.display = 'flex'
    })
}
