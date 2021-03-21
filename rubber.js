class Rubber{
    constructor(x,y){
        var option={
            restitution : 0.5,
            friction : 2,
            density : 1,
        };
        this.body=Bodies.circle(x,y,50,option);
        World.add(world,this.body);
        this.radius=50;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("white")
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}