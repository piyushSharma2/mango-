class SlingShot{
    constructor(bodyA,pointB){
        var Options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10

        }
        this.pointB=pointB
        this.sling=Constraint.create(Options);
        World.add(world,this.sling);

        
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    display(){

            if(this.sling.bodyA){
    
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                
                if(pointA.x<200){
                    strokeWeight(10);
                    stroke(48,22,8)
                    line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                }
                 else {
                strokeWeight(10);
                stroke(48,22,8)
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
                }
               }   
              }
             }