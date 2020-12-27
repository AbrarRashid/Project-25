class Paper{
    constructor(x, y){
        var options ={
            'restitution': 0.3,
            'density': 1.2,
            'friction': 0.5   
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        this.image = loadImage("sprites/paper.png")


        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}