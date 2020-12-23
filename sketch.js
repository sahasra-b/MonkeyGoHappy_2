var bananaImage, obstacleImage, obstaclegroup, background, score;
var ground

function preload (){
  
  backImage=loadImage ("jungle.jpg");
  
  bananaImage= loadImage ("banana.png");
  obstacle_img= loadImage ("stone.png");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  
  
  backgr=createSprite(0,0,800,400); backgr.addImage(backImage); backgr.scale=1.5; backgr.x=backgr.width/2; backgr.velocityX=-4;
  
  
  
  
  player=createSprite (100, 340, 20, 50);
  player.addAnimation ("running", player_running);
  player.scale=0.1;
  
  ground = createSprite(400,350,800,10); ground.velocityX=-4; ground.x=ground.width/2; ground.visible=false;
  
  
}



function draw() {
  background(220);
  
  
  
  if(ground.x<0) { ground.x=ground.width/2; } if(backgr.x<100){ backgr.x=backgr.width/2; }
  
  drawSprites();
}