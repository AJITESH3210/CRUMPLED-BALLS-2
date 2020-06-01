
class Paper {
constructor(x, y,) {
    var options = { 
      'isStatic' : false,
      'restitution':0.3,
      'friction':0.5,
      'density':0.105
    }
    this.body = Bodies.circle(x, y, 70, options);
    this.width = 70;
    this.height = 70;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
   // pos.x = mouseX;
    //pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 10, 10, this.width, this.height);
    pop();
  }
};
