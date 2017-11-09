var breakNum = 5;
var sessionNum = 25;

var secondsTime,minutesTime,time,myVar,minutesBreakTime,secondsBreakTime;

var timerMiliseconds = sessionNum * 60000;
var breakMiliseconds = breakNum * 60000;

var breakDisplay = document.getElementsByClassName('break-display');
var breakPlus = document.getElementById('break-plus');
var breakMinus = document.getElementById('break-minus');

var sessionLength = document.getElementsByClassName('session-display');
var sessionPlus = document.getElementById('session-plus');
var sessionMinus = document.getElementById('session-minus');

var mainTime = document.getElementById('main-time');

var start = document.getElementsByClassName('start');

var reset = document.getElementById('reset');

var audio = new Audio('http://newt.phys.unsw.edu.au/music/bellplates/sounds/equilateral_plate+second_partial.mp3');

//number manipulation functions
function addBreakNumber(){
	breakNum++;
    breakDisplay[0].innerHTML = breakNum;
    stopTimer();
}

function subtractBreakNumber(){
	if(breakNum > 1){
		breakNum--;
	    breakDisplay[0].innerHTML = breakNum;
	    stopTimer();
	}
}

function addSessionNumber(){
	sessionNum++;
    sessionLength[0].innerHTML = sessionNum;
    mainTime.innerHTML = sessionNum;
    stopTimer();
}

function subtractSessionNumber(){
	if(sessionNum > 1){
		sessionNum--;
	    sessionLength[0].innerHTML = sessionNum;
	    mainTime.innerHTML = sessionNum;
	    stopTimer();
	}
}

function resetfun(){
	stopTimer();
	mainTime.innerHTML = '00:00';
}

//timer functions
function timer(){
	
	if(timerMiliseconds >= 0){
		minutesTime = Math.floor(timerMiliseconds / 60000);
		secondsTime = Math.floor((timerMiliseconds % 60000) / 1000);
			
		if(secondsTime < 10){
			time = minutesTime + ':0' + secondsTime;
		}else{
			time = minutesTime + ':' + secondsTime;
		}

		timerMiliseconds = timerMiliseconds - 1000;
		mainTime.innerHTML = time;
		
		//audio
		if(timerMiliseconds == 0){
			audio.play();
		}
	} else if(breakMiliseconds >= 0) {
		minutesBreakTime = Math.floor(breakMiliseconds / 60000);
		secondsBreakTime = Math.floor((breakMiliseconds % 60000) / 1000);
		
		if(secondsBreakTime < 10){
			time = minutesBreakTime + ':0' + secondsBreakTime;
		}else{
			time = minutesBreakTime + ':' + secondsBreakTime;
		}
		
		breakMiliseconds = breakMiliseconds - 1000;
		mainTime.innerHTML = time;
		
		//audio
		if(breakMiliseconds == 0){
			audio.play();
		}
	} else {
		timerMiliseconds = sessionNum * 60000;
		breakMiliseconds = breakNum * 60000;
	}
}

function startTimer() {
	mainTime.innerHTML = sessionNum + ':00';  
	timerMiliseconds = sessionNum * 60000;
	breakMiliseconds = breakNum * 60000;
    myVar = window.setInterval(function(){timer();}, 1000);
	$('.start').attr('disabled','disabled');
}

function stopTimer() {
    window.clearInterval(myVar);
    myVar = sessionNum;
    $('.start').removeAttr('disabled');
}

//event listiners
breakPlus.addEventListener("click", addBreakNumber);
breakMinus.addEventListener("click", subtractBreakNumber);
sessionPlus.addEventListener("click", addSessionNumber);
sessionMinus.addEventListener("click", subtractSessionNumber);
start[0].addEventListener("click", startTimer);
reset.addEventListener("click", resetfun);