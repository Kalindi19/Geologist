
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var hammer;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,700,800,30);
	hammer=new Hammer(400,350);
	stone=new Stone(300,200);
	rubber=new Rubber(500,200);
	sand1=new Sand(400,200);
	sand2=new Sand(400,200);
	sand3=new Sand(400,200);
	sand4=new Sand(400,200);
	sand5=new Sand(400,200);
	iron= new Iron(350,200);

	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  background("green");
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
 iron.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
}



