# (Whether)Weather App

## Project Instructions

The weather app allows users to toggle between nine different cities to view both hourly and daily weather data, providing the following information and uses:

- Select between 9 different cities on the Dashboard to enter a city's City Focus.
- View the daily weather code/forecast, max temperature, and max wind speed.
- View the hourly weather code/forecast, including temperature, and wind speed.
- View a 7-day forecast, including daily high and low temperatures, and the daily weather code/forecast.

### Installation Procedure

- Running the program via Netlify

	- The website is available to view via the following link [whetherWeather Website](https://whetherweather-weatherapp.netlify.app)

- Running the program via Moodle

	- Download the zip file from Moodle.
	- Extract files from zip folder to a specified location.
	- Ung the command prompt, locate the folder and open its directory.
	- Serve the project using Eleventy by using *eleventy --serve*
	- The command prompt will return a URL link that can be used to access the website.

### Project Usage

- Running the project opens index.njk where a Dashboard is availble to view.
- The Dashboard contains the minimum and maximum temperatures of 9 cities as well as their daily weather code/forecast.
- Selecting the *Focus* button will open each city's City Focus page which contains futher details.
- In City Focus, a further breakdown of both the daily and hourly weather data is available as well as a 7 day summary of the city's forecast.
- The navigation bar allows you to choose between the Dashboard, the nominated City Focus (Amsterdam), as well as a basic user settings.
- Selecting *Settings* will allow you to select a city to nominate as the website's City Focus. This function is incomplete and not stored to the browser.

#### Examples

- The project stores the hourly time and returns ourly weather data based on the time of day. The browser refreshes every 2 minutes to ensure that the hourly data is up to date.

## Documentation

[Open-Meteo Documentation](https://open-meteo.com/en/docs)


## About/References

[ref1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
[ref2](https://www.shecodes.io/athena/81408-what-does-undefined-mean-in-javascript)
[ref3](https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript)
[ref4](https://stackoverflow.com/questions/39334400/how-to-split-url-to-get-url-path-in-javascript)
[ref5](https://www.w3schools.com/jsref/jsref_gethours.asp)

## Contact

Rhiannah Maher - 20085527@mail.wit.ie
Project: [whetherWeather Website](https://whetherweather-weatherapp.netlify.app)
