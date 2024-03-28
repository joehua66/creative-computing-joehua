class Shape {
  constructor(world, pos, size, options) {
    this.world = world;
    this.pos = pos;
    this.size = size;
    this.options = options;
    this.body = this.createBody()
    Matter.Composite.add(world, this.body);
  }

  createBody(pos,options) {
  }

  display() {
  
  }

  isDead(){
    if(this.body.position.y>height){
      Matter.Composite.remove(this.world,this.body);
      return true;
    }
    return false;
  }


  animeAngle(targetAngle){
    let angle = lerp (this.body.angle,targetAngle,0.3);
    Matter.Body.setAngle(this.body,angle);
  }
}