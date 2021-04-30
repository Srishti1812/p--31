const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
    var canvas = createCanvas(360, 400);
    engine = Engine.create();
    world = engine.world;
    
   for(var i = 0; i<maxDrops; i++){
       drops.push(new Drops (random(0, 400), random(0, 400)));
   }
}

function draw(){
    background(0);
    Engine.update(engine);

    drops.display();
}   

