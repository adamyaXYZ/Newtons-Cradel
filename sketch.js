
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(12000, 700);


	engine = Engine.create();
  world = engine.world;
  
  
	//Create the Bodies Here.
  bar = new Ground(400,150,600,30); 

  //bob1 = new bob (400,200)
  bob2 = new bob (470,200)
  bob3 = new bob (540,200)
  bob4 = new bob (610,200)
  bob5 = new bob (330,200)
  bob6 = new bob (260,200)

  //chain1 = new Chain(bob1.body,bar.body,400,100);
  chain2 = new Chain(bob2.body,bar.body,470,100);
  chain3 = new Chain(bob3.body,bar.body,540,100);
  chain4 = new Chain(bob4.body,bar.body,610,100);
  chain5 = new Chain(bob5.body,bar.body,330,100);
  chain6 = new Chain(bob6.body,bar.body,260,100);
  
}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);
  background(0);

  //bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  
  //chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();

  bar.display();
  drawSprites();

  
}



