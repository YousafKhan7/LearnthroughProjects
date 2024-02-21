
        const apiKey = "b9e130a91909889709e8de3f3434a72f";
        const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        const searcBox = document.querySelector(".search input");
        const searcBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon")
        
        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
            if(data.weather[0].main =="Clouds")
            {
                weatherIcon.src= "images/clouds.png"

            }
            else if(data.weather[0].main =="Rain")
            {
                weatherIcon.src= "images/rain.png"

            }
            else if(data.weather[0].main =="Clear")
            {
                weatherIcon.src= "images/clear.png"

            }
            else if(data.weather[0].main =="Drizzle")
            {
                weatherIcon.src= "images/drizzzle.png"

            }
            else if(data.weather[0].main =="Mist")
            {
                weatherIcon.src= "images/mist.png"

            }
            else if(data.weather[0].main =="Snow")
            {
                weatherIcon.src= "images/snow.png"

            }
        
        };

        searcBtn.addEventListener('click',()=>
        {
            checkWeather(searcBox.value)
        });
        
        

