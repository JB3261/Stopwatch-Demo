//global variables go here:
var timer = 0;
var interval;
var running = false;

//execute functions here:
init();

//function definitions go here:
function init() {
	document.getElementById("start").addEventListener("click", function(){
		//Code to start/stop the stopwatch
		if(!running){
			interval = setInterval(function(){
				timer++;
				document.getElementById("timer").innerHTML = timer;
				running = true;
			}, 100);
		} else {
			clearInterval(interval);
			running = false;
		}		
	});
	
	document.getElementById("reset").addEventListener("click", function(){
		//Code to revert to initial state
		
	});
	
	document.getElementById("record").addEventListener("click", function(){
		//Code to log current time to history
	});
	
	
}

