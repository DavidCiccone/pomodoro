var breakNum = 5;
var sessionNum = 25;
var timerMiliseconds;
var secondsTime;
var minutesTime;

var breakDisplay = document.getElementsByClassName('break-display');
var breakPlus = document.getElementById('break-plus');
var breakMinus = document.getElementById('break-minus');

var sessionLength = document.getElementsByClassName('session-display');
var sessionPlus = document.getElementById('session-plus');
var sessionMinus = document.getElementById('session-minus');

var mainTime = document.getElementById('main-time');

var start = document.getElementsByClassName('start');

//event listiners
breakPlus.addEventListener("click", addBreakNumber);
breakMinus.addEventListener("click", subtractBreakNumber);
sessionPlus.addEventListener("click", addSessionNumber);
sessionMinus.addEventListener("click", subtractSessionNumber);
start[0].addEventListener("click", startTimer);



//number manipulation functions
function addBreakNumber(){
	breakNum++;
    breakDisplay[0].innerHTML = breakNum;
}

function subtractBreakNumber(){
	if(breakNum > 0){
		breakNum--;
	    breakDisplay[0].innerHTML = breakNum;
	}
}

function addSessionNumber(){
	sessionNum++;
    sessionLength[0].innerHTML = sessionNum;
    mainTime.innerHTML = sessionNum;
}

function subtractSessionNumber(){
	if(sessionNum > 0){
		sessionNum--;
	    sessionLength[0].innerHTML = sessionNum;
	    mainTime.innerHTML = sessionNum;
	}
}

function startTimer(){
	timerMiliseconds = sessionNum * 60000;
	minutesTime = Math.floor();
	secondsTime = Math.floor();

	setInterval(myTimer, 1000);
}





