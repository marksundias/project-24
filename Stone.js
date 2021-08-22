class Stone {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();//new setting
      translate(pos.x,pos.y) 
      rectMode(CENTER);
      rotate(angle);
      strokeWeight(3);
      stroke("red");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();// return back to old setting
    }
  };