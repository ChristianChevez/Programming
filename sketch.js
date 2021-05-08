var diam = 125;
var pilgrim =75
var pilot = 50
var jump = 140
var star = 200
var speed = 2
function setup() {
	createCanvas(500,500);
  // put setup code here
}

function draw() {
	background("turquoise");
	fill("pink");
	strokeWeight(15);
	stroke("red");
	rect(0,0,diam,diam);
	diam = diam + 8
	fill("orange");
	strokeWeight(20);
	stroke("yellow");
	ellipse(300,400,pilgrim,pilgrim);
	pilgrim = pilgrim + 4
	fill("lightgreen");
	strokeWeight(17);
	stroke("darkgreen")
	ellipse(150,300,pilot,pilot);
	pilot = pilot + 3
	ellipse(250,200,jump,jump);
	jump = jump + 2
	fill("orange");
	strokeWeight(75);
	stroke("yellow");
	ellipse (68,40,star,star);
	star = star + 1
	fill("lightgreen");
	strokeWeight(17);
	stroke("darkgreen");
	textSize(40);
	textStyle("Georgia");
	textStyle(ITALIC);
	text("What did you do D:",100,100);
	fill("blue");
	strokeWeight(5);
	textSize(speed);
	speed = speed + 0.5
	textStyle("geprgia");
	textStyle(ITALIC);
	text("You blew up the canvas :/",0,250);
  // put drawing code here
}
