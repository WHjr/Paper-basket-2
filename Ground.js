class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width = width
        this.height = height
    }

    display(){
        rectMode(CENTER);
        fill(0,220,0)
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
        //console.log(this.height)
    }
}