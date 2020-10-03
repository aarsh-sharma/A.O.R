var ramlal,Jump=11;
var speed=7;
var light=10;
var platform;
var gravity=0.5;
var blade;
var wall;
var bg;
var flag=0;
var deathflag=0;
var wonflag=0;

function setup() {

  createCanvas(1500,600);
  
  bg=loadImage("newPNG/background.png")
   button=createSprite(1050,630,90,20);
  button.addAnimation("danger","newPNG/buttonx.png");

  blade=createSprite(400,610,200,100);
    blade.addAnimation("razor","newPNG/saw1.png","newPNG/saw6.png");
  

  wall=createSprite(1510,590,50,300);
  wall.addAnimation("obstacle2","newPNG/hot.png");
  
    zex=createSprite(1600,590,30,690);
  
  
  ramlal=createSprite(20,450);
   ramlal.addAnimation("stop","chart/frame-1.png","chart/frame-2.png");                                                                         
     ramlal.addAnimation("walk","chart/walk001.png","chart/walk006.png");

     platform=createSprite(0,690,4000,10);
       platform.addAnimation("shambhu","newPNG/1234.png");
  
 
  

  ramlal.velocity.x=0;
   ramlal.velocity.y=0;

}
function draw(){

  clear();
background(bg);

 
 

 if (keyDown("LEFT_ARROW")) {
 	ramlal.mirrorX(-1);
 	ramlal.changeAnimation("walk");
 	ramlal.velocity.x=-speed;
 }

else if(keyDown("RIGHT_ARROW"))
{
	ramlal.mirrorX(1);
  ramlal.changeAnimation("walk");
   
  ramlal.velocity.x=speed;

} else{
  ramlal.velocity.x=0;
  ramlal.changeAnimation("stop");
}

 if (keyDown("down_arrow")) {
	ramlal.changeAnimation("stop");
	ramlal.velocity.x=0;
}

ramlal.velocity.y +=gravity;


if (keyWentDown("up_arrow")&&flag < 2) {
  ramlal.velocity.y= -Jump;
  flag +=1;

}
  if (ramlal.collide(platform)) {
    ramlal.velocity.y=0;
    flag=0;
  }
  if (blade.position.x>width) {
  blade.velocity.x=-light;
}else if (blade.position.x<0) {
  blade.velocity.x=light;
}



  if (ramlal.overlap(button)) {
blade.addSpeed(0.1,0);
wall.addSpeed(0.1/2,180);
} 
 if (ramlal.overlap(blade)) {

  removeSprite(ramlal);
  deathflag=1;

  
}  if (ramlal.overlap(wall)) {

  removeSprite(ramlal);
  deathflag=1;

 
}

    if (ramlal.overlap(zex)) {

  removeSprite(ramlal);
  wonflag=1;
}
  if (wonflag==1) {
     textSize(30);
    // textAlign("CENTER");
    text("You WON!...:),:),:)",650,300); 
    //deathflag=0;
  }

 


if (deathflag==1) {
   textSize(30);
    // textAlign("CENTER");
    text("GAME OVER!\nHA HA HA HA HA......",650,300); 
    //deathflag=0;
}



drawSprites();


}
