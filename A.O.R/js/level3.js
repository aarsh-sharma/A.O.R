var ramlal, speed=10, platform, gravity=0.3, jumpCount=0, end=0;
var sun, sun1, n, knife, bulletImage, score = 0;
var b;
var bullet;
var angel, demon, speedD = 2.5;

function preload(){

}

function setup(){
  createCanvas(1500,600);
  ramlal=createSprite(20,450);
  platform=createSprite(600,580);
  bulletImage=loadImage("newPNG/bullet.png");
  platform.addAnimation("ground","newPNG/04.png");
  ramlal.addAnimation("stop","chart/frame-1.png");
  ramlal.addAnimation("walk","chart/walk001.png","chart/walk006.png");
  platform.setCollider("rectangle",0,0,15000,60);
  ramlal.setCollider("rectangle",0,0,50,50);
  bullets=new Group();

  angel = createSprite(random(0,width),0, 50,50);
  angel.addImage(loadImage("newPNG/angel.png"));
  demon = createSprite(random(0,width),0,25,25);
  demon.addImage(loadImage("newPNG/demon.png"));
}

function draw() {
  if(end==0) {
    ramlal.velocity.y+=gravity;
    background(200);
    //ramlal movements
  if(ramlal.collide(platform)) {
    jumpCount=0;
    ramlal.velocity.y=0;
  }
  //if(keyWentDown("UP_ARROW")) {
    //if(jumpCount<2)
    //{
      //ramlal.changeAnimation("stop");
      //ramlal.velocity.y=-10;
      //jumpCount+=1;
    //}
 //}

 else if(keyDown("RIGHT_ARROW")) {
   ramlal.mirrorX(1);
   ramlal.changeAnimation("walk");
   ramlal.velocity.x=speed;
   b=1;
 }

  else if(keyDown("LEFT_ARROW")) {
    ramlal.mirrorX(-1);
    ramlal.changeAnimation("walk");
    ramlal.velocity.x=-speed;
    b=0;
  }

  else {
    ramlal.changeAnimation("stop");
    ramlal.velocity.x=0;
  }
  if(keyWentDown("x")) {
    bullet = createSprite(ramlal.position.x,ramlal.position.y);
    bullet.addImage(bulletImage);

    bullet.life=500;
    if(b==1) {
      bullet.velocity.y=-50;
    }
      bullet.velocity.y=-50;
    }
    // bullets.add(bullet);
  if (demon.position.y >= height - 20 || angel.position.y >= height - 20) {
    end = 2;
  }
  if(angel.collide(ramlal)) {
    angel.position.y = 0;
    angel.position.x = random(0, width);
    score++;
  }
  if((Math.abs(demon.position.x - ramlal.position.x) <=30)&& keyWentDown("x")){
    demon.position.y = 0;
    demon.position.x = random(0, width);
    score++;
  }
  if(ramlal.position.x < 0) {
    ramlal.position.x = width;
  }
  if(ramlal.position.x > width) {
    ramlal.position.x = 0;
  }
  textAlign(CENTER);
  text("Score : " + score, 30,10);
  angel.velocity.y = speedD;
  demon.velocity.y = speedD;
  drawSprites();
}
else {
  textSize(50);
  textAlign(CENTER);
  console.log("aarsh is the greatest of all");
  text("YOU LOST\nIT'S NOT THAT EASY!!!!\n You did well though\nYour Score was " + score, width/2, height/2);
  }

  // ramlal.velocity.y+=gravity;

}
