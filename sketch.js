function setup() {
  createCanvas(1200,800);
mrect =  createSprite(400, 200, 80, 30);
mrect.shapeColor = "red"
 frect =  createSprite(400, 600, 50, 80);
 frect.shapeColor = "red"


 gameobject1 =  createSprite(100, 100, 50, 50);
gameobject1.shapeColor = "red"
 gameobject2=  createSprite(100, 300, 50, 50);
 gameobject2.shapeColor = "red"

 gameobject3 =  createSprite(600, 100, 50, 50);
gameobject3.shapeColor = "red"
 gameobject4=  createSprite(600, 700, 50, 50);
 gameobject4.shapeColor = "red"

 gameobject3.velocityY = 5
 gameobject4.velocityY = -5
}

function draw() {
  background(0); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 

 if(isTouching(mrect,gameobject1)){
  mrect.shapeColor = "white"
  gameobject1.shapeColor = "white"
 }

 else{
  mrect.shapeColor = "red"
  gameobject1.shapeColor = "red"
 }
 bounceOff(gameobject3,gameobject4);
  drawSprites();
}

