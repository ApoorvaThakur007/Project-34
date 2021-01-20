class Fly {
    constructor(bodyA,pointB){
      var option = {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.5,
          length : 200,
      }
      this.pointB = pointB
      this.sling = Constraint.create(option)
      World.add(world,this.sling)
    }

    attach(body) {
      this.sling.bodyA = body;
    }

    fly(){
      this.sling.bodyA = null;
    }

    

  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke(48, 22, 8);
      strokeWeight(3);

      line (pointA.x,pointA.y,pointB.x,pointB.y)

      pop();
    }
  }

}