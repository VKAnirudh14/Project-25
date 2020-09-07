const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var infinity,biohazard,yinyang;
var engine,world;

infinity=[];
biohazard=[];
yinyang=[];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    


  
}

function draw() {
  background(255);  

  Engine.update(engine);
  if (frameCount%20===0){
    infinity.push( new Infinite(random(0,800),random(0,400),20,20));
    biohazard.push( new Biohazard(random(0,800),random(0,400),20,20));
    yinyang .push( new Yin_yang(random(0,800),random(0,400),20,20));
  }
  for(var i=0;i<infinity.length;i++){
  infinity[i].display();
  }
  for(var i=0;i<biohazard.length;i++){
  biohazard[i].display();
}
for(var i=0;i<yinyang.length;i++)
  yinyang[i].display();

  drawSprites();
}