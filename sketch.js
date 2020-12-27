
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var ground;
var dustbinBase;
var dustbinL, dustbinR;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100, 100);

	ground = new Ground(800, 680, 1600, 20);

	dustbinBase = new DustbinBase(1200, 550, 200, 10);

	dustbinL = new DustbinSides(1100, 550, 10, 200);

	dustbinR = new DustbinSides(1300, 550, 10, 200);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);	
  rectMode(CENTER);
  background(100);

  paper.display();

  ground.display();

  dustbinBase.display();
  dustbinL.display();
  dustbinR.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 90, y: -100});
		
	}
}



