function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
    stroke("#1C8020");
    fill("green");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed){
    rect(mouseX,mouseY,20,35);
    }
  }