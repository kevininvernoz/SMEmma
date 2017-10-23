
//alert ('entro');



const key = "08bbff2cfd816457";
const units = "metric";

const url = "http://api.wunderground.com/api";

const lang = "SP"; //lang: SP = español
const conditions = "conditions/q";


const city = "la_plata";

const extension = ".json";

const forecast = "forecast/q";

const refresh = 100000;

const iconsDay = {'clear':'wi-day-sunny',
			'sunny':'wi-day-sunny',
			'mostlycloudy':'wi-day-cloudy',
			'mostlysunny':'wi-day-cloudy',
			'partlycloudy':'wi-day-cloudy',
			'partlysunny':'wi-day-cloudy',
			'cloudy':'wi-cloudy',
			'hazy':'wi-day-haze',
			'chancesleet':'wi-day-sleet',
			'sleet':'wi-day-sleet',
			'flurries':'wi-cloudy-gusts',
			'chanceflurries':'wi-cloudy-gusts',
			'chancerain':'wi-rain',
			'rain':'wi-rain',
			'chancetstorms':'wi-thunderstorm',
			'tstorms':'wi-thunderstorm',
			'unknown':'wi-thunderstorm',
			'snow':'wi-day-snow',
			'chancesnow':'wi-day-snow',
			'fog':'wi-fog'
		};

const iconsNight = {'chanceflurries':'wi-cloudy-gusts',
			'chancerain':'wi-rain',
			'chancesleet':'wi-night-alt-sleet',
			'chancesnow':'wi-night-alt-snow',
			'chancetstorms':'wi-thunderstorm',
			'clear':'wi-night-clear',
			'cloudy':'wi-night-alt-cloudy',
			'flurries':'wi-cloudy-gusts',
			'fog':'wi-fog',
			'hazy':'wi-night-fog',
			'mostlycloudy':'wi-night-alt-cloudy',
			'mostlysunny':'wi-night-alt-cloudy',
			'partlycloudy':'wi-night-alt-cloudy',
			'partlysunny':'wi-night-alt-cloudy',
			'rain':'wi-night-alt-rain',
			'sleet':'wi-night-alt-sleet',
			'snow':'wi-night-alt-sleet',
			'sunny':'wi-night-alt-snow',
			'tstorms':'wi-thunderstorm',

			'02n':'wi-night-alt-cloudy',
			'01n':'wi-night-clear'};


var prevCodIcon = '';

var day1IconCache = '';
var day2IconCache = '';
var day3IconCache = '';

function getWeather() {



	$.getJSON ((url + '/' + key + '/lang:' + lang + '/' + conditions + '/AR/' + city + '/' + extension),function(weather){


		//alert (weather.current_observation.weather);
		$('#temp').text(weather.current_observation.temp_c + 'º');
		$('#humidity').text(weather.current_observation.relative_humidity);
		$('#description').text (weather.current_observation.weather);

		var clock = new Date();

		if (prevCodIcon == '' ){
			if (20 <= clock.getHours() || clock.getHours() <= 7)  {
				$('#weatherIcon').addClass(iconsNight[weather.current_observation.icon]);
				prevCodIcon = iconsNight[weather.current_observation.icon];
			}else {
				prevCodIcon = weather.current_observation.icon;
				$('#weatherIcon').addClass(iconsDay[weather.current_observation.icon]);
				prevCodIcon = iconsDay[weather.current_observation.icon];
			};

		}else if (20 <= clock.getHours() || clock.getHours() <= 7) {
				$('#weatherIcon').removeClass(prevCodIcon).addClass (iconsNight[weather.current_observation.icon]);
				prevCodIcon = iconsNight[weather.current_observation.icon];
			}else {
				$('#weatherIcon').removeClass(prevCodIcon).addClass (iconsDay[weather.current_observation.icon] );
				prevCodIcon = iconsDay[weather.current_observation.icon] ;
			}




	});



}


function getForecast() {



	$.getJSON ((url + '/' + key + '/lang:' + lang + '/' + forecast + '/AR/' + city + '/' + extension), function (forecast){

		//alert ("entro forecast");

		$('#tempMax').text(forecast.forecast.simpleforecast.forecastday[0].high.celsius + 'º');
		$('#tempMin').text(forecast.forecast.simpleforecast.forecastday[0].low.celsius + 'º');


		//dia 1
		$('#day1Name').text(forecast.forecast.simpleforecast.forecastday[1].date.weekday_short);
		$('#day1Max').text(forecast.forecast.simpleforecast.forecastday[1].high.celsius);

		$('#day1Min').text(forecast.forecast.simpleforecast.forecastday[1].low.celsius);

		if (day1IconCache == '' ) {
			$('#day1Icon').addClass (iconsDay[forecast.forecast.simpleforecast.forecastday[1].icon]);
			day1IconCache = iconsDay[forecast.forecast.simpleforecast.forecastday[1].icon];
		}else {
			$('#day1Icon').removeClass(day1IconCache).addClass (iconsDay[forecast.forecast.simpleforecast.forecastday[1].icon]);
			day1IconCache = iconsDay[forecast.forecast.simpleforecast.forecastday[1].icon];
		}



		//dia 2
		$('#day2Name').text(forecast.forecast.simpleforecast.forecastday[2].date.weekday_short);
		$('#day2Max').text(forecast.forecast.simpleforecast.forecastday[2].high.celsius);
		$('#day2Min').text(forecast.forecast.simpleforecast.forecastday[2].low.celsius);

		if (day2IconCache == '' ) {
			$('#day2Icon').addClass (iconsDay[forecast.forecast.simpleforecast.forecastday[2].icon]);
			day1IconCache = iconsDay[forecast.forecast.simpleforecast.forecastday[2].icon];
		}else {
			$('#day2Icon').removeClass(day2IconCache).addClass (iconsDay[forecast.forecast.simpleforecast.forecastday[2].icon]);
			day2IconCache = iconsDay[forecast.forecast.simpleforecast.forecastday[2].icon];
		}

		//dia 3
		$('#day3Name').text(forecast.forecast.simpleforecast.forecastday[3].date.weekday_short);
		$('#day3Max').text(forecast.forecast.simpleforecast.forecastday[3].high.celsius);
		$('#day3Min').text(forecast.forecast.simpleforecast.forecastday[3].low.celsius);

		if (day3IconCache == '' ) {
			$('#day3Icon').addClass (iconsDay[forecast.forecast.simpleforecast.forecastday[3].icon]);
			day3IconCache = iconsDay[forecast.forecast.simpleforecast.forecastday[3].icon];
		}else {
			$('#day3Icon').removeClass(day3IconCache).addClass (iconsDay[forecast.forecast.simpleforecast.forecastday[3].icon]);
			day3IconCache = iconsDay[forecast.forecast.simpleforecast.forecastday[3].icon];
		}

	});
}


function displayWeather ()
{

	var weather = getWeather();
	var forecast = getForecast();


}


displayWeather();
