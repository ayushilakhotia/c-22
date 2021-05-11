const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;


function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic : true
  }

  object = Bodies.rectangle(200,380,50,50,options);
  World.add(world,object);

 
}

function draw() {  
  background(0);  
  Engine.update(engine)
  console.log(object.position.y);

  rectMode (CENTER)
  rect(object.position.x,object.position.y,400,20);
  
}