class Drops{
    constructor(x, y, radius){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,options);
        this.radius = radius
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS)
        fill("blue");
        ellipse(pos.x, pos.y, this.radius);
    }

    update(){
        if(this.rain.postion.y> height){
            Matter.Body.setPosition(this.rain, {x: random(0,400), y: random(0,400)})
        }
    }
}
