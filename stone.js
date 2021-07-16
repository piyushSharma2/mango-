class Stone{

    constructor(x,y){
        var Options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body=Bodies.circle(x,y,40,Options)
        this.radius=20;
        this.image=loadImage("images/stone.png")
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,40,40)
        pop()
    }

}