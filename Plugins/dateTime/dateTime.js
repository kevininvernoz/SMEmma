


const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre',
				'Noviembre','Diciembre'];

const days =['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

/*milli seconds*/
const fadeValue = 600;
const separatorFadeValue = 3000;

/* seconds */
const updateInterval = 10;

const interval = 1000;

function format(i) {

    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



function getTime() {

	var now = new Date(),
		h = now.getHours();
		m = now.getMinutes();
		s = now.getSeconds ();

	h = format(h);
	m = format (m);
	s = format (s);

	return {
		hour : h,
		minutes : m,
		seconds : s
	};
}

function getDate(){

    var date = new Date(),
        year = date.getFullYear();
        month = date.getMonth(),
        dayNb = date.getDate(),
        dayWeek = date.getDay();

    return {
            day : days[dayWeek],
            date : dayNb,
            month : months[month],
            year : year
        };
}

function displayClock(){

    var time = getTime();

    var hourcache = $('#hour').text();
    var minutescache = $('#minutes').text();

    if (hourcache !== time.hour)
    {
    	$('#hour').text(time.hour);
    	displayDate();
    }

    if (minutescache !== time.minutes)
    {
    	$('#minutes').text(time.minutes);
    }


    $('#seconds').text(time.seconds);





}

function displayDate(){
    var date = getDate();
    var cacheDate = $('#day').text();



    /* date changed */
    if(cacheDate !== date.day){
      $('#day').fadeOut(fadeValue, function () {
          $(this).text(date.day);
          $(this).fadeIn(fadeValue);
        });

      $('#date').fadeOut(fadeValue, function () {
          $(this).text(date.date + " de " + date.month + " de " + date.year);
          $(this).fadeIn(fadeValue);
        });
    }
}

displayDate();
setInterval (function() {displayClock()},interval);



/*
function pulseClockSeparator(){

     $('#separator').fadeOut(separatorFadeValue, function () {
          $(this).text(":");
          $(this).fadeIn(separatorFadeValue);
        });
}


displayClock();
displayDate();
pulseClockSeparator();

/* update
setInterval(function(){
   pulseClockSeparator();
}, separatorFadeValue * 2);


setInterval(function(){
   displayClock();
   displayDate();
}, updateInterval * 1000);



/*

const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre',
				'Noviembre','Diciembre'];

const days =['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];



function getDate(){
	var now = new Date():
	var year = now.getFullYear();
	var month = now.getMonth();
	var dayN = now.getDate();
	var dayWeek = now.getDay();

	return {
		day : days[dayWeek],
		date : dayN,
		month : months[month],
		year : year
	};

}

function format (i){

	if (i < 10){
		i = '0' + 1;
	}
	return i;
}


function getTime(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	h = format(h);
	m = format(m);
	s = format(s);

	return{
		hour : h,
		minutes : m,
		seconds : s
	};

}


function displayClock() {
	var time = getTime();
	alert("Hello! I am an alert box!!");
	//$('#clock').text(time.hour)


}

function displayDate() {
	var time = getDate();

}


displayClock();
*/
