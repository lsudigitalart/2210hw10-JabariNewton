var fire1 = [];
var fireX = 0;
var loadTime;
var actualTime
var timer;
var bob;


function preload(){
  music = loadSound("assets/music.wav")
}



function setup(){

  createCanvas(3000,1000);
  noStroke();
  frameRate(60);

    music.play();



  for(var i =0;i<1000;i++){
    fire1[i] = new Fireworks(fireX,1000);
  }


}

function draw(){
  background(0,0,0,25);


  println("time: ", timer);






  var timer = millis();


for(var i =0; i < fire1.length ;i++){

  fire1[i].move();
  fire1[i].display();

bob = 90;
    if(timer > 9500){
      rotate(bob);
    }
    if(timer > 12500){
      rotate(-bob)
    }

}
}


  function Fireworks(fireX,tempY){
    this.x = random(0,3000);
    this.y = tempY;
    this.radius = 20;
    this.timing = random(0,300);
    this.dAngle = random(50,255);
    var spread = 50;

    this.move = function(){

    this.y = (this.y - .3) * .9973;
  }

  this.display = function(){
    ellipse(this.x,this.y,this.radius);

    if(this.y < this.timing){
      fill(random(0,300),this.dAngle,this.dAngle);
      this.radius = 50;
      var direction = random(-5,5);

      push();
      this.x = this.x + direction;
      this.y =  this.y + direction;
      pop();

    }

  }

}
