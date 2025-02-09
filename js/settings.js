document.addEventListener('DOMContentLoaded', () => {
    const cities = [
        "Amsterdam", 
        "Berlin", 
        "Copenhagen", 
        "Cork", 
        "New York", 
        "Paris", 
        "San Francisco", 
        "Tromso", 
        "Waterford"
    ];

    /* Function that loops city name & checkbox inside a table */
    let tableHTML = '';

    cities.forEach(city => {
        tableHTML += `
            <tr>
                <td>${city}</td>
                <td><input type="checkbox" id="fave-${city}" /></td>
            </tr>
        `;
    });

    document.querySelector('#cityTable tbody').innerHTML = tableHTML;
});