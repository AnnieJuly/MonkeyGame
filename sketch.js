var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
score=0;
  bananasGroup = createGroup();
  obstaclesGroup = createGroup();
  ground = createSprite(80,350,1100,20)
}


function draw() {
 background (220)    
text ("Score:  "+score,300,50)
      if(keyDown("space")&& monkey.y >=300) {
        monkey.velocityY = -14;
    }
   if (bananasGroup.isTouching(monkey)){
  score=score+1
}
   if (obstaclesGroup.isTouching(monkey)){
     monkey.velocityX = -20
}
  console.log(monkey.y)
  console.log(monkey.y)
  
monkey.velocityY = monkey.velocityY + 0.8
    //spawn the bananas
    spawnBananas();
  //spawn obstacles on the ground
    spawnObstacles();
    monkey.collide(ground);

    drawSprites();
}

function spawnObstacles(){
 if (frameCount % 90 === 0){
   obstacle = createSprite(600,327,10,40);
  
   obstacle.velocityX = -6;
   obstacle.addImage("obstacle.png", obstacleImage)

   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle)
   //add each obstacle to the group
 }
}

function spawnBananas() {
  //write code here to spawn the clouds
 if (frameCount % 60 === 0){
  banana = createSprite(600,200,10,40);
  banana.y = Math.round(random(200,260));
   banana.velocityX = -6;
   banana.addImage("obstacle.png", bananaImage)

   
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 300;
   bananasGroup.add(banana)
   //add each obstacle to the group
 }
  
}