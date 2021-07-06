const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;




function setup(){
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);



  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 20, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 30, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 40, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 50, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 60, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 70, divisionHeight));
  }
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 80, divisionHeight));
  }


  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
}
}
function draw(){
  background(255,255,255);  
 
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }


  ground.display();
 
  drawSprites();
};