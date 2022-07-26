var box;


function setup() {
  createCanvas(400,400);
  box = createSprite (200, 200, 50, 50);
}

function draw() 
{
  background("skyblue");

if (keyDown(RIGHT_ARROW)) {
box.position.x = box.position.x+3
}

if (keyDown(LEFT_ARROW))  {
box.position.x = box.position.x-3
}

if (keyDown(DOWN_ARROW))  {
  box.position.y = box.position.y+3
  }

if(keyDown(UP_ARROW)) {
box.position.y = box.position.y-3
}


drawSprites();
}




