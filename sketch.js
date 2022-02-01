function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255, 228, 156);
    beginShape();
      fill(230, 56, 44);
        vertex(40, 30);
        vertex(100, 75);
        vertex(100, 50);
        vertex(150, 105);
        vertex(150, 80);
        quadraticVertex(190, 125, 200, 160);
        quadraticVertex(200, 175, 160, 175);
        quadraticVertex(110, 170, 100, 140);
        //quadraticVertex(40, 50, 40, 30)
    endShape(CLOSE);
}

//unable to combine vertex() and curveVertex()