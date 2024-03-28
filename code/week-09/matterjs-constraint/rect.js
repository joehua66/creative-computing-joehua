class Rect extends Shape {
  constructor(world, pos, size, options) {
    super(world, pos, size, options);
  }

  createBody() {
    return Matter.Bodies.rectangle(
      this.pos.x, this.pos.y, this.size.w, this.size.h, this.options);
  }

  drawShape() {
    rect(0, 0, this.size.w, this.size.h);
  }


  animAngle(tragetAngle){
    let angle = lerp (this.body.angle,tragetAngle,0.3);
    Matter.Body.setAngle(this.body,angle);
  }
}