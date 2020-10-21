const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var fighterPlane, fighterPlaneIMG;
var enemy1;
var bgImg, BackGround;
var building1, building2, building3, building4, building5, building;
var rand;
var bomb;

function preload(){
  fighterPlaneIMG = loadImage("Images/Fighter Planes/Fighter.png");
  bgImg = loadImage("Images/bg.jpg");
  building1 = loadImage("Images/Buildings/Storage.png");
  building2 = loadImage("Images/Buildings/School.png");
  building3 = loadImage("Images/Buildings/House.png");
  building4 = loadImage("Images/Buildings/Construct.png");
}

function setup() {
  createCanvas(1350,670);
  engine = Engine.create();
  world = engine.world;

  BackGround = createSprite(675,335,20,20);
  BackGround.addImage(bgImg);
  BackGround.x =  BackGround.width/2;
  BackGround.velocityX = -10;
  BackGround.scale = 5;

  fighterPlane = createSprite(100, 60, 50, 50);
  fighterPlane.shapeColor = "#267c21";
  fighterPlane.addImage(fighterPlaneIMG);
  fighterPlane.scale = 0.5;
}

function draw() {
  background("white"); 

  if(BackGround.x < 0){
    BackGround.x = BackGround.width;
  }

  if(keyDown("DOWN_ARROW")){
    fighterPlane.y = fighterPlane.y + 15;
  }
  if(keyDown("UP_ARROW")){
    fighterPlane.y = fighterPlane.y - 10;
  }

if(keyDown("space")){
  bomb = new Bomb();
}

  spawnEnemies();
  spawnBuildings();

  bomb.display();

  drawSprites();

  Engine.update(engine);
}

function spawnBuildings(){
  if(World.frameCount%60 === 0){
    var building = createSprite(1350, 600, 40, 40);
    building.velocityX = -10;
    var rand = Math.round(random(1, 4));
    console.log(rand);
    switch(rand){
      case 1: building.addImage(building1);
      break;
      case 2: building.addImage(building2);
      break;
      case 3: building.addImage(building3);
      break;
      case 4: building.addImage(building4);
      break;
      default : break;
    }
    building.lifetime = 150;
  }
}