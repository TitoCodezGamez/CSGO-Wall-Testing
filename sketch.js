
var wall, car;
var weight, speed

function setup() {
  createCanvas(800,400);

  speed = random(60,90);
  weight = random(500,1500);

  car = createSprite(50, 380, weight/12, weight/25);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(700,300,60,height/2);

}

function draw() {
  background(0);  

  if(car.isTouching(wall)){
    if(0.5*weight*speed*speed/22500 < 100){
      car.velocityX = 0;
      car.shapeColor = "green";
    }

    else if(0.5*weight*speed*speed/22500 > 100 && 0.5*weight*speed*speed/22500 < 180 ){
      car.velocityX = 0;
      car.shapeColor = "yellow";
    }

    else if(0.5*weight*speed*speed/22500 > 180){
      car.velocityX = 0;
      car.shapeColor = "red";
    }

  }

  drawSprites();
}