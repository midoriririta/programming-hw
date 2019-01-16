function setup(){
	createCanvas(windowWidth, windowHeight);
	background(100);
	balls1 = new balls();
	balls1.balls_setup();
}

function draw(){
	balls1.balls_draw();
}
document.addEventListener("DOMContentLoaded", function(){
	var changeNum = document.getElementById("numberOfBalls");
	function changeNumber(event){
		let number = document.getElementById("numberOfBalls").value;
		balls1.setNum(number);
		console.log(number);
	}
	changeNum.addEventListener("input",changeNumber);

	var Fchange = document.getElementById("Fchange");

	Fchange.addEventListener("submit", function(event){event.preventDafult()});
});
