const apiKey = "126b7322b852d5d8eac120ee6bb92395";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector (".weather-icon");



 async function checkWeather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
        else{
            var data = await response.json();
    


            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round (data.main.temp) + '°c';
            document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
            document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
        
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src =  "photos/clouds.jpg";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src =  "photos/clear.jpg";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src =  "photos/rain_processed.jpg";
            }
            else if(data.weather[0].main == "Drizzel"){
                weatherIcon.src =  "photos/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src =  "photos/foggy.png";
            }
        
            document.querySelector(".weather").style.display = "block";
        }


    var data = await response.json();
    


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round (data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src =  "photos/clouds.jpg";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src =  "photos/clear.jpg";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src =  "photos/rain_processed.jpg";
    }
    else if(data.weather[0].main == "Drizzel"){
        weatherIcon.src =  "photos/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src =  "photos/foggy.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    })





checkWeather();
// 126b7322b852d5d8eac120ee6bb92395
// 863242cfb2b1d357e6093d9a4df19a4b