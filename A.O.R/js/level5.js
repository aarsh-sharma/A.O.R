  // Get to the final lane and jump to win. Avoid ghost and stay alert.//
	var lb1,lb2;
	var ramlal,surprise,monster1, monster2,knife1,knife2,end=0;
	var speed = 5, gravity = .3, bounce_speed = -8.5 ,knife_flag,flag=0;

	function setup() {
		createCanvas(1500,800);
		ramlal=createSprite(350,10);
		lb1=createSprite(375,100);
		lb1.addImage(loadImage("newPNG/lb.png"));
		lb2=createSprite(1120,250);
		lb2.addImage(loadImage("newPNG/lb.png"));
		lb3=createSprite(375,400);
		lb3.addImage(loadImage("newPNG/lb.png"));
		lb4=createSprite(1120,550);
		lb4.addImage(loadImage("newPNG/lb.png"));
		lb5=createSprite(375,700);
		lb5.addImage(loadImage("newPNG/lb.png"));
		ramlal.addAnimation("stop","chart/frame-1.png");
  	    ramlal.addAnimation("walk","chart/walk001.png","chart/walk006.png");
	  monster1=createSprite(10,0);
	  monster1.addAnimation("stop","chart/monster.png");	  
      monster2=createSprite(1300,160);
	  monster2.addAnimation("stop","chart/monster.png");
	  knife1= createSprite(1700,340,50,10);
     knife1.addImage(loadImage("chart/chaku.png"));
     knife2= createSprite(-200 ,490, 50, 10);
     knife2.addImage(loadImage("chart/chaku.png"));
  
		  }
	function draw() {

		background(150);
		if(ramlal.position.x<20)
		{
			ramlal.position.x=25;
		}
		
		
  	if(ramlal.collide(lb1))
		{
			ramlal.velocity.y=0;
			flag=0;
		}
  	if(ramlal.collide(lb2))
		{
			ramlal.velocity.y=0;
			flag=0;
		}
		if(ramlal.collide(lb3))
		{
			ramlal.velocity.y=0;
			flag=0;
		}
		if(ramlal.collide(lb4))
		{
			ramlal.velocity.y=0;
			flag=0;
		}
		if(ramlal.collide(lb5))
		{
			ramlal.velocity.y=0;
			flag=0;
		}
		if(keyDown(RIGHT_ARROW)) {
     ramlal.changeAnimation("walk");
     ramlal.mirrorX(1);
     ramlal.velocity.x = speed;
 }

	  else if(keyDown(LEFT_ARROW)) {
	     ramlal.changeAnimation("walk");
	     ramlal.mirrorX(-1);
	     ramlal.velocity.x = -1*speed;
  	}

	  else {
	    ramlal.changeAnimation("stop");
	    ramlal.velocity.x = 0;
	  }

	  if(keyWentDown(UP_ARROW) && flag < 1) {
	        ramlal.velocity.y = bounce_speed;
	        flag += 1;
	  }
	  ramlal.velocity.y+=gravity;

      if(knife1.collide(ramlal))
      {
      	ramlal.remove();
      	knife1.remove();
      	end=1;
      }
     if (knife2.collide(ramlal))
     {
     	ramlal.remove();
     	knife2.remove();
      end=1;
  }
      monster1.attractionPoint(0.07,ramlal.position.x,ramlal.position.y);
      maxSpeed=3;
      monster2.attractionPoint(0.07,ramlal.position.x,ramlal.position.y);
      maxSpeed=2;
    if(ramlal.position.y >=250 && flag == 0){

  knife1.velocity.x -= 5;

}
if(ramlal.position.y>=400&&flag==0){
 
 	knife2.velocity.x+=5;
 } 
 if(ramlal.collide(monster1)||ramlal.collide(monster2))
  {
	 	ramlal.remove();
	 		end=1;
	 	}

 if(end==1)
 {  textSize(50);
 	text("LOSER",width/2,height/2);
 } 
if (ramlal.position.x<350&& ramlal.position.y>height/2)
{   textSize(50);
	text("WINNER",width/2,height/2);
	ramlal.remove();
}

drawSprites();
}
