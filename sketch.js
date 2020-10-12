const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(320, 285, 30, 40);
  box2 = new Box(360, 285, 30, 40);
  box3 = new Box(400, 285, 30, 40);
  box4 = new Box(440, 285, 30, 40);
  box5 = new Box(480, 285, 30, 40);
  box6 = new Box(400, 285, 30, 40);
  box7 = new Box(420, 246, 30, 40);
  box8 = new Box(460, 246, 30, 40);
  box9 = new Box(380, 246, 30, 40);
  box10 = new Box(340, 246, 30, 40);
  box11 = new Box(360, 200, 30, 40);
  box12 = new Box(400, 200, 30, 40);
  box13 = new Box(440, 200, 30, 40);
  box14 = new Box(400, 150, 30, 40);
  box15 = new Box(100, 480, 800, 10);
 box16 = new Box(750, 250, 30, 40);
 box17 = new Box(710, 250, 30, 40);
 box18 = new Box(670, 250, 30, 40);
 box19 = new Box(730, 200, 30, 40);
 box20 = new Box(690, 200, 30, 40);
 box21 = new Box(710, 150, 30, 40);
 box22 = new Box(130, 340, 30, 30);
 ground = new Ground(400, 310, 200, 10);
 ground1 = new Ground(700, 280, 135, 10);
 var options = {
  bodyA:box22.body,
          pointB:{x:110,y:100} ,
          stiffness: 0.5,
          length: 2
}
chain = Matter.Constraint.create(options)
World.add(world,chain)
}



function draw() {
  Engine.update(engine);
  background(255,255,255);
  if(chain.bodyA){
		line(chain.bodyA.position.x,chain.bodyA.position.y,110,100);
	}
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  ground.display();
  ground1.display();


  drawSprites();
  if (keyWentDown("space")) {
		chain.bodyA = box22.body;
	}
  text("press space to have the next chance to play", 20,20)
}


function mouseReleased(){
	console.log("Inside mouseReleased")
chain.bodyA=null
}

function mouseDragged(){
	if (chain.bodyA) {
		chain.bodyA.position.x=mouseX;
	chain.bodyA.position.y=mouseY;
	}
	

}
