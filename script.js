// Weather for Searched Location

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e85e23ff31msheea27c9a56132e0p1ff090jsn7a6de76248ee',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{

	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

//------------------------------------------------------------------------------------------------------------------


//Getting and displaying the text for the upcoming five days of the week

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array

function CheckDay(day) {
	if (day + d.getDay() > 6) {
		return day + d.getDay() - 7;
	}
	else {
		return day + d.getDay();
	}
}

for (i = 0; i < 5; i++) {
	document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

//---------------------------------------------------------------------------------------------------------------

// 5 Day forecast for Searched Location

function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName2 = document.getElementById("cityName2");
    cityName2.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=b038f0952ecb8181105b2b85eccbc1a6')
.then(response => response.json())
.then(data => {

//Getting the min and max values for each day

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
})

.catch(err => console.error(err));
}


//Function to set default location as Delhi

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Delhi";
    GetInfo();
}

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
