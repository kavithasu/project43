function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  hr=hour()
  mm=minute()
  se=second() 
  translate(390,300)
  angleMode(DEGREES)
  seangle=map(se,0,60,0,360)
  mmangle=map(mm,0,60,0,360)
  hrangle=map(hr%12,0,60,0,360)
  push()
  rotate(seangle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(mmangle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,5,-100)
  pop()
  push()
  rotate(hrangle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,-60,70)
  pop()
  drawSprites();
}