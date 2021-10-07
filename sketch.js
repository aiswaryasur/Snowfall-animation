const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bgImg;
var engine,world;
var snow = [];
var rand;

function preload(){
bgImg = loadImage("snow1.jpg");
}

function setup() {
  engine = Engine.create();
    world = engine.world;
    createCanvas(1200,600);
}
  

function draw() {
  background(bgImg);
  Engine.update(engine);
  if(frameCount % 5 === 0){
    snow.push(new Snow(random(0,1000),30,30));
    
  }
   for(var i=0; i<snow.length;i++){
    snow[i].display();  
   } 
   
  
  drawSprites();
}