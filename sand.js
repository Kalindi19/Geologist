class Sand{
    constructor(x,y){
        var option={
            restitution : 0.5,
            friction : 2,
            density : 1,
        };
        this.body=Bodies.circle(x,y,10,option);
        World.add(world,this.body);
        this.radius=10;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("white")
        fill("brown");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}