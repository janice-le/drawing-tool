function setup() {
  createCanvas(1000, 1000);
  background(500);
  
}


function draw() {
noStroke();
fill(mouseX, mouseY, 200, 75);
  
stroke(250);
 quad(mouseX, mouseY, 0, 0, mouseX, mouseY, 500, 500);  
  circle(mouseX, mouseY, 100);
 
noStroke();
  circle(mouseX, mouseY, 350);
  circle(1000, 1000, mouseX, mouseY);

}
