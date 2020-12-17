
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 160, 300, 20);

	bob1 = new Bob(300, 360);
	rope1 = new Rope(bob1.body, roof.body, -100, 0);

	bob2 = new Bob(350, 360);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);

	bob3 = new Bob(400, 360);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);

	bob4 = new Bob(450, 360);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);

	bob5 = new Bob(500, 360);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  roof.display();

  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: - 500, y: 0})
	}
}

