# Weather App

This Weather App is a project developed as part of The Odin Project to demonstrate the understanding of fetching data from an API e.g [Weather API](https://api.weatherapi.com/)
using promises. It provides users with a 3-day weather forecast and a current/realtime weather report. The app is built using HTML, CSS, and JavaScript.

## Demo
[Weather API demo](/WeatherAppDemo.gif)

## Features

- **14-Day Weather Forecast:** The app provides a 14-day weather forecast, allowing users to plan ahead.

- **Current/Realtime Weather Report:** Users can also check the current weather conditions, including weather condition and temperature.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/tennjugu/Weather_App.git
   ```

2. Open the project folder in your favorite code editor.

3. Locate the `index.html` file and open it in your web browser to use the Weather App.

## Usage

1. Upon opening the app, you will be presented with a form to input your query.

2. After filling the form click the search button and your results will be generated and presented on the screen.

3. When no valid location is inputted, it resolves to an error of "No location found" or if no location has been entered, an error saying "No search input provided.

## API Key Disclaimer

Please be aware that the API key used in this project has been hidden. It will not be available for use or testing. In order to successfully use and interact with this Weather App, you must obtain your own API key from the respective service provider. I recommend following their official documentation to acquire the necessary credentials.

Please respect the terms of use and licensing agreements associated with the API key and use it responsibly. This project is intended for educational and informational purposes only.

Thank you for your understanding and cooperation in this matter.

To get an API key for a weather service provider, follow these steps:

1. Visit the website of a weather service provider (WeatherAPI).

2. Sign up for an account or log in if you already have one.

3. Generate an API key by following their API documentation.

4. Replace config.API_KEY in the JavaScript code with your own key.

```javascript
const myKey = config.API_KEY

```

5. Save the changes and retest the Weather App with your own API key.

## Contributing

This project is open for contributions. If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## Acknowledgments

- The Odin Project for providing a comprehensive curriculum for web development.
- Weather service providers for offering weather data APIs.

---

Happy coding! 🌦️🌧️🌞
