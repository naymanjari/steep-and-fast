function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(140, 200, 13);
  beginShape();
    vertex(170, 60);
    vertex(180, 50);
    quadraticVertex(400, 8, 150, 200);
    bezierVertex(180, 81, 292, 198, 100, 10);
  endShape(CLOSE);
}