
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,500,80);
	bob2 = new Bob(250,500,80);
	bob3 = new Bob(300,500,80);
	bob4 = new Bob(350,500,80);
	bob5 = new Bob(400,500,80);

	roof = new Roof(320,200,420,30)
	bobDiameter=40;
	
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*3,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1.7,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0.5,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*0.65,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Body.applyForce(bob1.body,bob1.body.position,{x:-95,y:-50});

	}
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  

  drawSprites();
 
}


