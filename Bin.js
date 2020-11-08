class Bin{
    constructor(x,y,width,height){
        this.height = height
        this.width = width
        var options = {
            isStatic : true,
        }
        this.image = loadImage("dustbingreen.png")
        this.leftBody = Bodies.rectangle(x-width/2+10,y-height/2,20,height,options)
        this.rightBody = Bodies.rectangle(x+width/2-10,y-height/2,20,height,options)
        this.baseBody = Bodies.rectangle(x,y,width,1,options)
        World.add(world,[this.leftBody,this.rightBody,this.baseBody])
    }

    display(){
        var leftPos = this.leftBody.position
        var rightPos = this.rightBody.position
        var basePos = this.baseBody.position
        imageMode(CENTER);
        rectMode(CENTER);
        fill(200,0,0)
        noStroke();
        rect(leftPos.x,leftPos.y,20,this.height)
        rect(rightPos.x,rightPos.y,20,this.height)
        rect(basePos.x,basePos.y,this.width,20)
        image(this.image,basePos.x,rightPos.y+5,this.width+10,this.height+10);
    }
}