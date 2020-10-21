class EnemyPlane{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Images/Fighter Planes/Enemy.png");
    }
    display(){
        var enemy = createSprite(this.x, this.y, this.width, this.height);
        enemy.addImage(this.image);
        enemy.scale = 0.6;
        enemy.shapeColor = "lightGrey";
        enemy.velocityX = -6;
        enemy.lifetime = 200;
    }
}

function spawnEnemies(){
    if(World.frameCount%120 === 0){
      enemy1 = new EnemyPlane(1350, random(20,120));
      enemy1.display();
    }
  }