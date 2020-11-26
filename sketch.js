const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, Slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    player=Bodies.circle(50, 200, 20);
    World.add(world,player);

    //Platforms
    ground1 = new Ground(500, 390, 200, 20)
    ground2 = new Ground(1000, 190, 200, 20)
    hexagon = new Hexagon(100, 200, 50, 50)
    Slingshot = new SlingShot(hexagon.body, {x:150, y:200})

    //Boxes on first stand
    box1 = new Box1(575, 360, 10, 10)
    box2 = new Box1(525, 360, 10, 10)
    box3 = new Box1(475, 360, 10, 10)
    box4 = new Box1(425, 360, 10, 10)

    box5 = new Box2(550, 310, 10, 10)
    box6 = new Box2(500, 310, 10, 10)
    box7 = new Box2(450, 310, 10, 10)

    box8 = new Box3(525, 260, 10, 10)
    box9 = new Box3(475, 260, 10, 10)

    box10 = new Box4(500, 210, 10, 10)

    //Boxes on second stand
    box11 = new Box4(1050, 160, 10, 10)
    box12 = new Box4(1000, 160, 10, 10)
    box13 = new Box4(950, 160, 10, 10)

    box14 = new Box3(1025, 110, 10, 10)
    box15 = new Box3(975, 110, 10, 10)

    box16 = new Box2(1000, 60, 10, 10)
}

function draw(){
    background(150);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    hexagon.display();
    Slingshot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display(); 
    
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();

    box10.display();

    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();

    box16.display();
      
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Slingshot.attach(hexagon.body)
    }
}