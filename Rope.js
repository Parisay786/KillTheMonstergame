class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 450,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  display() {
    if (this.rope.bodyA) {
      var bodyA = this.rope.pointA.position;
      var pointB = this.pointB;
      push();

      //set the value of stroke to hide the rope
      stroke(48, 22, 8);
      strokeWeight(4);
     rope=null;
      line(pointA.x, pointA.y, pointB.x, pointB.y);

      pop();
    }
  }
}
