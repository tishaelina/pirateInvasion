class CanonBall{
    constructor(x,y){
    var options = {
    restitution: 0.8,
    friction: 1,
    density: 1,
    isStatic: true
    };
    this.body = Bodies.circle(x,y,30,options);
    
    World.add(world,this.body);
    }
    display(){
    imageMode(CENTER)
    }
}