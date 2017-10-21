 
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

}

function displayDate() {
	var time = getDate();
	
}


/*
 function clock ()
 {
 	var today = new Date();
 	var hour = today.getHours();
 	var minutes = today.getMinutes();
 	var seconds = today.getSeconds();
 	minutes = checktime (minutes);
 	seconds = checktime (seconds);
 	//document.getElementById('clock').innerHTML =
  //  h + ":" + m + ":" + s;

  var pClock = document.getElementById("clock");
  pClock.textContent = h + ":" + m + ":" + s;
 }

 function checktime ()
 {
 	if (i < 10) {
 		i = "0" + i;
 	}
 	return i;
 }

 function updateDateTime()
 {
 	var t= setInterval (clock , 500);

 }

 updateDateTime();

*/