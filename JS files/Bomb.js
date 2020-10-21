class Bomb{
    constructor(){
        var options = {
            friction : 0.004
        }
        this.body = Bodies.circle(10, 10, 20, options);
        this.bomb = loadImage("Images/bomb.png");
        this.explosion = loadImage("Images/Buildings/Explosion.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        image(this.image, 0, 0, 20, 20);
        pop();
    }
}