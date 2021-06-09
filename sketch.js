var bat,ball,batImage,ballImage;
var bound1,bound2,bound3,bound4;
var score;
var score=0;
var BallGroup;
var up,down,space,upimg,downimg,spaceimg;

function preload(){
  batImage=loadImage("bat2.png");
  ballImage=loadImage("ball2.png");
  upimg=loadImage("up.png");
  downimg=loadImage("down.png");
  spaceimg=loadImage("space.png")
}

function setup(){
  createCanvas(1300,500);
  bat=createSprite(70,209,10,10);
  bat.addImage(batImage);
  bat.scale=0.3;
  //bounds
  bound1=createSprite(400,97,750,5)
  bound1.shapeColor="white"
  bound2=createSprite(772,198,5,200);
  bound2.shapeColor="white";
  bound3=createSprite(400,300,750,5);
  bound3.shapeColor="white";
  bound4=createSprite(28,198,5,200);
  bound4.shapeColor="Yellow";
  ball=createSprite(760,200,20,10);
  ball.addImage(ballImage);
  ball.scale=0.2;
  score = 0;
 
}

function draw(){
  background("green")
 /// bat.x=mouseX;
 // bat.y=mouseY;

if(keyDown("UP_ARROW")){
  bat.velocityY=-2;
  
  
}
if(keyDown("DOWN_ARROW")){
  bat.velocityY=2;
}
if(keyDown("space")){
  serveball();
}
if(bat.isTouching(ball)){
  ball.x=760;
  ball.y=200;
  ball.velocityY=0;
  ball.velocityX=0;
  bat.velocityX=0;
  bat.velocityY=0;
  score=score+1;
}
if(score===10){
 // fill("blue")
 // textSize(30);
 // text("Hurray! You have Won the match. To play again reload the game to play again",20,450);
win();
}

fill("Yellow");
//stroke(20);
textSize(41)
text("The Yellow line is the wicket",100,90)
if(ball.isTouching(bound4)){
  score=score-1;
  ball.x=760;
  ball.y=200
  ball.velocityY=0;
  ball.velocityX=0; 
}
if(score <0){
  end();
}


fill("pink");
textSize(40);
text("Press Space  bar to serve the ball",150,50);
 bat.collide(bound1);
 bat.collide(bound2);
 bat.collide(bound3);
 bat.collide(bound4);
 ball.bounceOff(bound1);
 ball.bounceOff(bound2);
 ball.bounceOff(bound3);
 ball.bounceOff(bound4);
 fill("white");
 textSize(30);
 fill("white");
 text("Score: "+ score, 5,40);        
 //spawnBall();
 fill("white");
 textSize(15)
 text("Game version: 1.3",1150,490);
  drawSprites();
}

function serveball(){
  ball.velocityY=Math.round(random(-2,3)) 
  ball.velocityX=-5
};

function end(){
  fill("red");
  textSize(35);
  text("Sad News, You have lost the match,reload the game to play again",1-0.8,450);
  bat.x=70;
  bat.y=209;
  bat.velocityY=0;
  bat.velocityX=0;
  ball.x=760;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0;

}

function win(){
  fill("blue");
  textSize(35);
  text("HURRAY! YOU HAVE WON THE MATCH RELOAD TO PLAY AGAIN",1-0.8,450);
  bat.x=70;
  bat.y=209;
  bat.velocityY=0;
  bat.velocityX=0;
  ball.x=760;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0;
}
