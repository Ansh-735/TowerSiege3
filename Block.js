class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.3,
            density:0.0001
           
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 20;
        World.add(world, this.body);
      }
      score(){
          if(this.Visiblity<0 && this.Visiblity>-105)
          score++;
      }
      display(){
        
        //console.log(this.body.speed);
   if(this.body.speed < 8){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
     }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,0);
     pop();
   }
      }
}