
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
//var r;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1366, 621);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,460,30); 

	mango1=new mango(1100,140,30);
  mango2=new mango(1170,170,30);
	mango3=new mango(1010,180,30);
	mango4=new mango(1000,110,30);
	mango5=new mango(1100,110,30);
	mango6=new mango(1000,270,30);
	mango7=new mango(900,270,40);
	mango8=new mango(1140,190,40);
	mango9=new mango(1100,270,40);
	mango10=new mango(1200,240,40);
	mango11=new mango(1120,90,40);
	mango12=new mango(900,200,40);

	treeObj=new tree(1050,620);
	groundObject=new ground(width/2,620,width,20);
	launcherObject=new launcher(stoneObj.body,{x:240,y:460})
  
	Engine.run(engine);
 
}

function draw() {

  background("skyblue");
  textSize(40);
  text("Press Space For Next Chance",50,50);
  image(boy, 200, 380, 200, 300);
  
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  groundObject.display();
  launcherObject.display();
  
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased() {
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32 ) {
    Matter.Body.setPosition(stoneObj.body, {x:240,y:460}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

function detectollision(lstone,lmango) {
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  
  if (distance <= lmango.r+lstone.r) {
   Matter.Body.setStatic(lmango.body , false);
 } 
}