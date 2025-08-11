document.getElementById('getWeatherBtn').addEventListener('click', function() {
    // Your API Key here
    const apiKey = 'YOUR_API_KEY';
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            document.getElementById('weatherData').innerText = `Current weather in London: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});