class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.8,
            friction : 0.5,
            density : 0.2
        }
        this.size = radius*2
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
    }

    display(){
        fill(255)
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.size,this.size+15)
    }
}

