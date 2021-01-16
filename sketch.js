const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particle
//var particles = [];
var plinkos = [];
var divisions = [];
var line


var divisionHeight=300;
var gamestate= "PLAY"

var count = 0
var score = 0;
var particle;

var world,engine;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for(var k = 0;k<=width;k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,5,divisionHeight));
  }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  textSize(15);
  fill("white");
  text("Score :"+score,50,50);

  textSize(30);
  fill("yellow");
  text("200",95,550);
  

  textSize(30);
  fill("yellow");
  text("100",15,550);

  textSize(30);
  fill("yellow");
  text("100",175,550);

  textSize(30);
  fill("yellow");
  text("500",255,550);

  textSize(30);
  fill("yellow");
  text("500",335,550);

  textSize(30);
  fill("yellow");
  text("500",415,550);

  textSize(30);
  fill("yellow");
  text("500",495,550);

  textSize(30);
  fill("yellow");
  text("100",575,550);

  textSize(30);
  fill("yellow");
  text("200",655,550);

  textSize(30);
  fill("yellow");
  text("100",735,550);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){

      particle.display();
    
    if(particle.body.position.y>760){

      if(particle.body.position.x<70&&particle.body.position.x>0){

        score= score+100
        particle=null
        if(count>=5)gamestate="END"
      }
    
    }
  }

  if(particle!=null){

    particle.display();
  
  if(particle.body.position.y>760){

    if(particle.body.position.x<140&&particle.body.position.x>70){

      score= score+200
      particle=null
      if(count>=5)gamestate="END"
    }
  
  }
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<210&&particle.body.position.x>140){

    score= score+100
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<400&&particle.body.position.x>210){

    score= score+500
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<350&&particle.body.position.x>280){

    score= score+500
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<420&&particle.body.position.x>350){

    score= score+500
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<560&&particle.body.position.x>420){

    score= score+500
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<650&&particle.body.position.x>560){

    score= score+100
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<730&&particle.body.position.x>620){

    score= score+200
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
if(particle!=null){

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<800&&particle.body.position.x>630){

    score= score+100
    particle=null
    if(count>=5)gamestate="END"
  }

}
}
}
   
   


function mousePressed(){
  if(gamestate==="PLAY"){

     count++
     particle= new Particle(mouseX,10,10);
      
    

  }
}