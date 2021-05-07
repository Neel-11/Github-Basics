var monkey
var stone
var ground
var obstaclegroup
var bananagroup
var survivaltime
var monkeyAnimation
var bananaImage
var stoneImage

function preload(){
  bananaImage = loadImage("banana.png")
  stoneImage = loadImage ("stone.png")
  monkeyAnimation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
}

function setup() {
  createCanvas(400, 400);
   monkey = createSprite(50,370,20,20);
  monkey.addAnimation("monkey",monkeyAnimation);
 ground = createSprite(400,399,800,10);
 obstaclegroup = new Group();
 bananagroup = new Group();
score = 0



monkey.scale = 0.1;
ground.x = ground.width/2;

}

function draw() {
  background(220);
   ground.velocityX = -4;
   console.log(monkey.y)
   if(keyDown("space") && monkey.y >= 363){
      monkey.velocityY = -12 ;
        
      
    
   }
  monkey.velocityY = monkey.velocityY + 0.5
   textSize(20)
   text("Score"+score,205,85);
   monkey.collide(ground);
   
 spawnFood();
 spawnObstacle();
  if(monkey.isTouching(bananagroup)){
    bananagroup.destroyEach();
    score = score + 2
  }
  switch(score){
    case 2 : monkey.scale = 0.12
      break;
    case 4 : monkey.scale = 0.14
      break;
      case 6 : monkey.scale = 0.16
      break;
      case 8 : monkey.scale = 0.18
      break;
      case 10 : monkey.scale = 0.20
      break;
      default : break;
  }
  if(monkey.isTouching(obstaclegroup)){
    monkey.visible = false
    obstaclegroup.destroyEach();
    bananagroup.destroyEach();
    score = 0
    text("Game Over",200,200);
    obstaclegroup.setVelocityxEach(0)
  }

if(ground.x<0){
  ground.x = ground.width/2
}
     
  
    
  drawSprites();
}

function spawnFood(){
  if(frameCount % 80 === 0){
    var banana = createSprite(435,random(190,250),20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 100;
    bananagroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount % 120 === 0){
    var stone = createSprite(415,380,20,20);
    stone.addImage(stoneImage)
    stone.scale = 0.15;
    stone.velocityX = -5;
    stone.lifetime = 100;
    obstaclegroup.add(stone);
  }}