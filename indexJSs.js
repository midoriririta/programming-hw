function setup(){
	createCanvas(windowWidth, windowHeight);
	background(100);
	balls1 = new balls(50,0.25,0.5,0.05,65);
	balls1.balls_setup();
}

function draw(){
	balls1.balls_draw();
}