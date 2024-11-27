
        //Fetch weather data from the API
        // let endpoint = "http://api.weatherapi.com/v1/current.json?key=d988f2ab259f45c7889143302241809&q=kabba&aqi=no";
        // let temp = document.getElementById("temp");
        // let feelsLike = document.getElementById("deg-2");
        // let temp1 = document.getElementById("temp1");
        // let currentDate = document.getElementById("temp1");
        // let precip = document.getElementById("precip");
        // let humid = document.getElementById("humid");
        // let wSpeed = document.getElementById("w-speed");
        // let loc = document.getElementById("location");

        // fetch(endpoint).then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         temp.textContent = data.current.temp_c;
        //         feelsLike.innerHTML = data.current.feelslike_c;
        //         temp1.innerHTML = data.current.condition.text;
        //         temp1.style.fontSize = "25px";
        //         temp1.style.color = "white";
        //         precip.innerHTML = data.current.precip_mm;
        //         humid.innerHTML = data.current.humidity;
        //         wSpeed.innerHTML = data.current.wind_kph;
        //         loc.innerHTML = data.location.name;
        //     })


        // Function to fetch weather data for different locations
        function currentWeather() {
            let city = document.getElementById("weatherCheck").value;
            let endpoint = `http://api.weatherapi.com/v1/current.json?key=d988f2ab259f45c7889143302241809&q=${city}&aqi=no`;
            let temp = document.getElementById("temp");
            let feelsLike = document.getElementById("deg-2");
            let temp1 = document.getElementById("temp1");
            let currentDate = document.getElementById("temp1");
            let precip = document.getElementById("precip");
            let humid = document.getElementById("humid");
            let wSpeed = document.getElementById("w-speed");
            let loc = document.getElementById("location");
            fetch(endpoint).then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    temp.textContent = data.current.temp_c;
                    feelsLike.innerHTML = data.current.feelslike_c;
                    temp1.innerHTML = data.current.condition.text;
                    temp1.style.fontSize = "25px";
                    temp1.style.color = "white";
                    precip.innerHTML = data.current.precip_mm;
                    // precip.innerHtml = data.current.cloud_pct;
                    humid.innerHTML = data.current.humidity;
                    wSpeed.innerHTML = data.current.wind_kph;
                    loc.innerHTML = data.location.name;
                })
        }

        // Function to handle weather check
        // function currentWeather() {
        //     const locationInput = document.getElementById("weatherCheck").value.trim();
        //     if (locationInput) {
        //         fetchWeather(locationInput);
        //     } else {
        //         alert("Please enter a valid location.");
        //     }
        // }