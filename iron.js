class Iron{
    constructor(x,y){
        var option={
            restitution : 0.5,
            friction : 1.0,
            density : 5,
            mass: 15000,
        };
        this.body=Bodies.rectangle(x,y,100,70,option);
        World.add(world,this.body);
        this.width=100;
        this.height=70;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("white")
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}