document.addEventListener("DOMContentLoaded", () => {

    const urlParams = window.location.pathname.split('/'); // URL is split into an array after '/' [ref1], [ref4]
    const currentCity = urlParams[2]; // Array[2] which contains the city name is called and set to currentCity

    const dailyData = weatherData[currentCity + "_daily"].daily; 
    const dailyUnits = weatherData[currentCity + "_daily"].daily_units; 

    const hourlyData = weatherData[currentCity + "_hourly"].hourly;
    const hourlyUnits = weatherData[currentCity + "_hourly"].hourly_units;

    // Daily Data

    const today = document.getElementById("today"); 
    const maxTemp = document.getElementById("maxTemp");
    const maxWindStrength = document.getElementById("maxWindStrength");
    const weatherIcon = document.getElementById("weatherIcon");

    // Hourly Data

    const now = new Date(); // [ref5]
    const currentHour = now.getHours(); // Fetches current hour

    let currentTemp = document.getElementById("currentTemp"); 
    let currentWind = document.getElementById("currentWind");
      
    // Weekly Summary

    const container = document.getElementById('weeklyForecast');
    container.innerHTML = '';

    const dayOfWeek = ["Today", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    dayOfWeek.forEach((day, index) => {

    if (dailyData.time[index] !== undefined) { // Traverses through dailyData.time and checks if there is data available for each day [ref2], [ref3]

        // Assigns relevant weatherData to each variable
        const minTemp = dailyData.temperature_2m_min[index];
        const maxTemp = dailyData.temperature_2m_max[index];
        const weatherCode = dailyData.weather_code[index];
        const weatherIcon = getWeatherIcon(weatherCode); 

        const daySummaryHTML = `
            <div class="column is-one-seventh">
                <div id="summary-box" class="box has-text-centered">
                    <p class="has-text-weight-semibold">${day}</p>
                    <figure class="image is-128x128 is-inline-block">
                        <img src="${weatherIcon}" alt="Weather icon">
                    </figure>
                    <div class="columns">
                        <div class="column has-text-left">
                            <p>${minTemp + dailyUnits.temperature_2m_min}</p>
                        </div>
                        <div class="column has-text-right">
                            <p>${maxTemp + dailyUnits.temperature_2m_max}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += daySummaryHTML; // container udated and fills with daySummary/7 day summary
    }
});

    today.innerHTML = dailyData.time[0];
    maxTemp.innerHTML = dailyData.temperature_2m_max[0] + dailyUnits.temperature_2m_max;
    maxWindStrength.innerHTML = dailyData.wind_speed_10m_max[0] + dailyUnits.wind_speed_10m_max;
    weatherIcon.src = getWeatherIcon(dailyData.weather_code[0])

    currentTemp.innerHTML = hourlyData.temperature_2m[currentHour] + hourlyUnits.temperature_2m;
    currentWind.innerHTML = hourlyData.wind_speed_10m[currentHour] + hourlyUnits.wind_speed_10m;

});
