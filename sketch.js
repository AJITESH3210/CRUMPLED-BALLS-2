const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper1;
var box1, box2, box3;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
   
	box1 = new Box1(850,305,5,89);
    box2 = new Box(920,305,0,0);
    box3 = new Box1(990,305,5,89);
   // paper1 = new Paper(325,300,30,30)
    paper = new Paper(120,345,70);
}

function draw(){
    background(255,92,48);// white 255,255,255

    Engine.update(engine);

    ground.display();
    
    paper.display();

    box1.display();
    box2.display();
    box3.display();
	//paper1.display
	
}

function keyPressed(){
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body, paper.body.position,{x : 85 ,y : -85 });
    }
}