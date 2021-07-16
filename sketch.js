
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;
var bgImg;
var mango1,mango2,mango3;
var mango4,mango5,mango6;
var mango7,mango8;
var rope;


function preload(){
	boy=loadImage("images/boy.png");
	bgImg=loadImage("images/ground.jpg")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;
  
  treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stone=new Stone(240,415)
  rope = new SlingShot(stone.body,{x:240, y:415});


  mango1=new mango(1000,200,30);
  mango2=new mango(1130,170,30)
  mango3=new mango(970,130,30)
  mango4=new mango(1195,130,30)
  mango5=new mango(1090,30,30)
  mango6=new mango(1050,120,30)
  mango7=new mango(1220,230,30)
  mango8=new mango(915,215,30)
  
	
	Engine.run(engine);

}

function draw() {

  background(bgImg);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  
  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)
  detectollision(stone,mango7)
  detectollision(stone,mango8)


  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  groundObject.display();
  stone.display();
  rope.display();


}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode===32){
    rope.attach(stone.body)
  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}