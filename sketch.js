//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
 var jumpingImg;
 var runnerImg;
 var runner;
 var bg, bgImg;
 var enemy, enemyImg;
 function preload(){
   runnerImg= loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png");
   bgImg = loadImage("bg.jpg");
   enemyImg = loadImage("enemy.png");
 }

function setup() {
  createCanvas(1200,1200);
   bg=createSprite(100,300,1000,700);
   bg.addImage(bgImg);
   bg.scale=4;

   runner = createSprite(100,700,30,50);
   runner.addAnimation("runner",runnerImg);
   runner.scale=2;
  //engine = Engine.create();
  //world = engine.world;
  invisibleGround=createSprite(100,790,2200,20);
  invisibleGround.visible=false;

  enemy = createSprite(900,670,50,50);
  enemy.addImage(enemyImg);
}


function draw() 
{
  background(0);
  //Engine.update(engine);
  bg.velocityX=-3;
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  runner.collide(invisibleGround);
  drawSprites();
}

