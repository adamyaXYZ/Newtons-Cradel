
class bob {
    constructor (x,y){
        var Opt ={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,70,Opt);
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position;
        push();
            translate(pos.x,pos.y);
            fill(150,54,167)
            ellipseMode(CENTER);
            ellipse(0,0,70,70)
        pop();
    }
}