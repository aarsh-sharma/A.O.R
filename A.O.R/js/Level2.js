var ramlal, speed=5, platform, f=0.3, jumpCount=0, end=0;
var sun, sun1, n, knife1, knife2, speed_knife = 0.7;
var a, b, g, knife_flag, flag = 0;

function preload(){

}

function setup(){
  createCanvas(1500,600);
  // falling fire balls
  sun =new Group();
  knife1= createSprite(1600, height - 60, 50, 10);
  knife1.addImage(loadImage("newPNG/chaku.png"));
  knife2= createSprite(-100, height - 60, 50, 10);
  knife2.addImage(loadImage("newPNG/chaku.png"));
  var x=2,y=5;
  for(var i=0;i<3;i++)
  {
    sun1 = createSprite(x*100,x,-100,-200);
    sun1.addAnimation("falling","newPNG/sun1.png","newPNG/sun2.png");
    sun1.velocity.y=y;
    sun1.setCollider("circle",0,0,45);
    sun.add(sun1);
    x=x+1;
    y=y+4;
  }
  // plateform
  platform=createSprite(600,580);
  platform.addImage(loadImage("newPNG/04.png"));
  ramlal = createSprite(20,450);
  ramlal.addAnimation("stop","chart/frame-1.png");
  ramlal.addAnimation("walk","chart/walk001.png","chart/walk006.png");
  ramlal.velocity.x = 0;
  ramlal.velocity.y = 0;
  platform.setCollider("rectangle",0,0,15000,60);
  ramlal.setCollider("rectangle",0,0,50,50);
}

function draw()
 {
  if(end == 0)
  {
  ramlal.velocity.y+=f;
  background(200);
  //ramlal movements
for(var i=0;i<3;i++)
 {
      g=sun[i];
 if(ramlal.collide(g))
  {
    ramlal.remove();
    end=1;
  }
if(g.position.y>=height-70)
{
  g.velocity.y =g.velocity.y* -1;
}
else if (g.position.y<=0) {
  g.velocity.y = g.velocity.y* -1;
 }
}
 if(ramlal.collide(platform))
 {
     jumpCount=0;
     ramlal.velocity.y=0;
   }
 if(keyWentDown("UP_ARROW"))
{
  if(jumpCount<1)
  {
    ramlal.changeAnimation("stop");
    ramlal.velocity.y=-10;
    jumpCount+=1;
  }
}

else if(keyDown("RIGHT_ARROW"))
{
  ramlal.mirrorX(1);
  ramlal.changeAnimation("walk");
  ramlal.velocity.x=speed;
}
else if(keyDown("LEFT_ARROW"))
{
  ramlal.mirrorX(-1);
  ramlal.changeAnimation("walk");
  ramlal.velocity.x=-speed;
}
else
{
  ramlal.changeAnimation("stop");
  ramlal.velocity.x=0;
}
if(ramlal.position.x >= 400 && flag == 0){
  knife_flag = 1;
  flag++;
}
if(knife_flag == 1)
{
  knife2.velocity.x = 0;
  knife1.velocity.x -= speed_knife;
  knife2.position.x = -100;
}

if(knife1.position.x < 0) {
  knife1.velocity.x = 0;
  knife_flag = 2;
  knife2.position.x = -100;
}

if(knife_flag == 2)
{
  knife2.mirrorX(-1);
  knife2.velocity.x += speed_knife;
  knife1.position.x = 1600;
}

if(knife2.position.x > width) {
  knife_flag = 1;
}

if(ramlal.collide(knife1) || ramlal.collide(knife2)) {
  ramlal.remove();
  knife1.remove();
  end = 1;
}

if(ramlal.position.x < 5) {
  ramlal.position.x = 5;
}

if(ramlal.position.x > width - 10) {
  end = 2;
}
drawSprites();
drawSprites(sun);
ramlal.velocity.y+=f;
}
else {
  if(end == 2){
    ramlal.remove();
    console.log("AARSH IS GREAT");
    textSize(50);
    text("YOU WON!\nYOU GOT SOME SKILLS!!!!\nGO See The Next Mini Game",450,300);
  }
  else {
    textSize(50);
    text("GAME OVER\nYOU'RE SUCH A LOSER\nHA HA HA HA.....",width/2-200, height/2);
  }
}
}
