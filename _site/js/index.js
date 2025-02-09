/* Function that maps each PNG icon
to the relevant weather code 
*/

  function getWeatherIcon(code) {
    const codeToIcon = {
      0: '/images/icons/sun.png',
      1: '/images/icons/mainly-clear.png',
      2: '/images/icons/partly-cloudy.png',
      3: '/images/icons/cloudy.png',
      45: '/images/icons/fog.png',
      48: '/images/icons/fog-rime.png',
      51: '/images/icons/drizzle-light.png',
      53: '/images/icons/drizzle-moderate.png',
      55: '/images/icons/drizzle-heavy.png',
      56: '/images/icons/freezing-drizzle-light.png',
      57: '/images/icons/freezing-drizzle-heavy.png',
      61: '/images/icons/rain-light.png',
      63: '/images/icons/rain-moderate.png',
      65: '/images/icons/rain-heavy.png',
      66: '/images/icons/freezing-rain-light.png',
      67: '/images/icons/freezing-rain-heavy.png',
      71: '/images/icons/snow-light.png',
      80: '/images/icons/rain-light.png',
      81: '/images/icons/rain-moderate.png',
    };
    return codeToIcon[code];
  }

  document.addEventListener('DOMContentLoaded', () => {

    const cardContainer = document.getElementById('cardContainer');

    // Array used to assign correct name/parameters to each city's card & URL'
    const cities = [
        { name: "Amsterdam", key: "amsterdam" },
        { name: "Berlin", key: "berlin" },
        { name: "Copenhagen", key: "copenhagen"},
        { name: "Cork", key: "cork" },
        { name: "New York", key: "new_york" },
        { name: "Paris", key: "paris" },
        { name: "San Francisco", key: "san_francisco" },
        { name: "Tromso", key: "tromso" },
        { name: "Waterford", key: "waterford" },
    ];

    const container = document.getElementById('cardContainer');
    container.innerHTML = '';

    // Function which traverses through const cities, creates 9 city cards and assigns the relevant data to each
    cities.forEach((city, index) => {

        const currentCityDaily = weatherData[city.key + "_daily"].daily;
        const dailyUnits = weatherData[city.key + "_daily"].daily_units;
        const maxTemp = currentCityDaily.temperature_2m_max[0];
        const minTemp = currentCityDaily.temperature_2m_min[0];
        const weatherCode = currentCityDaily.weather_code[0];
        const weatherIcon = getWeatherIcon(weatherCode);

        const cardsHTML = `
            <div class="column is-3">
                <section class="card">
                    <header class="card-header">
                        <p id="city-${index + 1}-heading" class="card-header-title is-size-4 is-centered">${city.name}</p>
                    </header>

                    <div class="card-image">
                        <figure>
                            <img id="city-${index + 1}-icon" alt="Weather icon" src="${weatherIcon}">
                        </figure>
                    </div>

                    <div class="card-content columns is-multiline is-size-2">
                        <p id="city-${index + 1}-min-temp" class="column has-text-left">${minTemp}${dailyUnits.temperature_2m_min}</p>
                        <p id="city-${index + 1}-max-temp" class="column has-text-right">${maxTemp}${dailyUnits.temperature_2m_max}</p>
                    </div>

                    <footer class="card-footer">
                        <a href="/pages/${city.key}?city=${city.key}" class="card-footer-item button">Focus</a>
                    </footer>
                </section>
            </div>
        `;
        container.innerHTML += cardsHTML;
    });
});