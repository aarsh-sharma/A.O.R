  var platform1, platform2, plate, flag = 0;
  var speed = 5, gravity = .3, bounce_speed = -8, speedp = 3;
  var ramlal, surprisebox;
  var surprise=false;
  function setup() {
    createCanvas(1500,600);
    platform1 = createSprite(200 ,height - 150, 450, 300);
    platform2 = createSprite(width - 200, height - 150, 400, 300);
    platform1.addImage(loadImage("newPNG/01.png"));
    platform2.addImage(loadImage("newPNG/01.png"));
    plate = createSprite(width/2, 250, 100, 20);
    plate.addImage(loadImage("newPNG/02.png"));
    ramlal = createSprite(30,20);
    ramlal.addAnimation("stop","chart/frame-1.png");
    ramlal.addAnimation("walk","chart/walk001.png","chart/walk006.png");
    surprisebox = createSprite(1250,-50);
    surprisebox.addImage(loadImage("newPNG/03.png"));
  }

  function draw() {
    background(200);
    // console.log(platform1.position.x, platform1.position.y);
    plate.position.x += speedp;
    if (plate.position.x > width - 400 - 50) {
      plate.position.x -= 3;
      speedp = speedp * -1;
    }
    else if(plate.position.x < 400 + 50) {
      plate.position.x += 3;
      speedp = speedp * -1;
    }
    if(ramlal.collide(platform1) && (platform1.position.y - 150) - (ramlal.position.y + 40) <= 10) {
      ramlal.velocity.y = 0;
      flag = 0;
    }
    else if(ramlal.collide(platform2) && (platform2.position.y - 150) - (ramlal.position.y + 40) <= 10) {
      ramlal.velocity.y = 0;
      flag = 0;
    }
    else if(ramlal.collide(plate) && (plate.position.y - 10) - (ramlal.position.y + 40) <= 10) {
      ramlal.velocity.y = 0;
      ramlal.position.x += speedp;
      // console.log(speedp);
      flag = 0;

    }

    if(keyDown(RIGHT_ARROW))
    {
       ramlal.changeAnimation("walk");
       ramlal.mirrorX(1);
       ramlal.velocity.x = speed;
    }
    else if(keyDown(LEFT_ARROW))
    {
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

    if(ramlal.position.y < 0)
        ramlal.position.y = 0;

    if(ramlal.position.x>=1100)
    {
      surprisebox.position.y += 3.5;
    }
    surprisebox.collide(platform2);
    if(ramlal.collide(surprisebox)) {
      console.log(surprisebox.position.x, surprisebox.position.y);
      surprise = true;
    }
    if(ramlal.position.y > height) {
      surprise = true;
    }
    if(surprise) {
      ramlal.remove();
      textSize(30);
      // textAlign("CENTER");
      text("GAME OVER!\nHA HA HA HA HA......",650,300);
    }

    if(ramlal.position.x < 10) {
      ramlal.position.x = 10;
    }

    if(ramlal.position.x > width) {
      textSize(30);
      text("YOU WON!\nYOU ARE SURELY A GOOD GAMER BRUH!!!!\nGO See The Next Mini Game",450,300);
      ramlal.remove();
    }

    ramlal.velocity.y += gravity;
    drawSprites();
  }
