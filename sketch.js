var bg,bgImage;
var spacecraft,spacecraftImage;
var capsule,capsuleImage;


function preload (){
    bgImage = loadImage("spacebg.jpg")
    spacecraftImage=loadImage("iss.png");
    capsuleImage=loadImage("spacecraft1.png");
}



function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  bg=createSprite(400,200,50,50);
  bg.addImage(bgImage);

  spacecraft=createSprite(300,200,50,50);
  spacecraft.addImage(spacecraftImage);
  spacecraft.scale=0.5;

  capsule=createSprite(260,276,50,50);
  capsule.addImage(capsuleImage);
  capsule.scale=0.1;
}

function draw() {
  background(255,255,255);  
   console.log(capsule.x);
  if(keyDown("up")){
    capsule.y=capsule.y-2;
}
  if(keyDown("down")){
    capsule.y=capsule.y+2;

  }
  if(keyDown("right")){
    capsule.x=capsule.x+2
  }
  if(keyDown("left")){
    capsule.x=capsule.x-2
  }
  
  drawSprites();
  if(capsule.isTouching(spacecraft)){
    fill("white")
    text("*Docking is sucessful",400,100);
  }
  
}