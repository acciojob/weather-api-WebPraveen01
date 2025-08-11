document.getElementById("getWeatherBtn").addEventListener("click", () => {
            const apiKey = "c48de2a4ec67cfbcf32bb4185c907df2"; // Replace with your OpenWeatherMap API key
            const city = "London";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.weather && data.weather.length > 0) {
                        const weatherDescription = data.weather[0].main; 
                        document.getElementById("weatherData").textContent = 
                            `Current weather in ${city}: ${weatherDescription}`;
                    } else {
                        document.getElementById("weatherData").textContent = 
                            "Weather data not found.";
                    }
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    document.getElementById("weatherData").textContent = 
                        "Error fetching weather data.";
                });
        });