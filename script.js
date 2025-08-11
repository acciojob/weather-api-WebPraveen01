document.getElementById("getWeatherBtn").addEventListener("click", () => {
            const apiKey = "6a2bd0f30453712ab508c91481412b46"; // Your API key
            const city = "London";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200 && data.weather && data.weather.length > 0) {
                        const weatherDescription = data.weather[0].main; 
                        document.getElementById("weatherData").textContent = 
                            `Current weather in ${city}: ${weatherDescription}`;
                    } else {
                        document.getElementById("weatherData").textContent = 
                            `Error: ${data.message}`;
                    }
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    document.getElementById("weatherData").textContent = 
                        "Error fetching weather data.";
                });
        });