class Hammer{
    constructor(x,y){
        var option={
            restitution : 0.5,
            friction : 1.0,
            density : 2,
            mass:20000,
        };
        this.body=Bodies.rectangle(x,y,150,20,option);
        World.add(world,this.body);
        this.width=150;
        this.height=20;

    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("white")
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}