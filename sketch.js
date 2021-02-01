
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,130,30);
	mango3=new mango(1170,130,30);
	mango4=new mango(1200,190,30);
	mango5=new mango(900,200,30);
  mango6=new mango(1050,230,30);
  mango7=new mango(1150,160,30);
	mango8=new mango(1080,200,30);
	mango9=new mango(995,220,30);
	mango10=new mango(1000,80,30);
	mango11=new mango(1100,180,30);
	mango12=new mango(1050,230,30)

  stone=new Stone(100,460,35);
  
  attach=new Throw(stone.body,{x:200,y:460});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();


  stone.display();

  groundObject.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  attach.fly();
}
 function detectollision(lmango,lstone){
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
      if(distance<=lmango.r +lstone.r) {
          Matter.Body.setStatic(lmango.body,false);
      }
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    launcherObject.attach(stone.body);
  }
}
