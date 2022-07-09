
class Shape {
  constructor(fillColor, outlineColor, fill) {
    this.x = randomHelper.random_num(-300, 300);
    this.y = randomHelper.random_num(-300, 300);
    // this.width = randomHelper.random_num(-400, 400);
    // this.height = randomHelper.random_num(-400, 400);
    this.size = randomHelper.random_num(-250, 250);
    this.rotation = randomHelper.random_num(-180, 180);
    this.strokeWeight = randomHelper.random_int(1, 3);
    this.fillColor = fillColor;
    this.outlineColor = outlineColor;
    this.fillFage = fill;
  }

  draw() {
    push();
    translate(width / 2, height / 2);
    rotate(this.rotation);
    stroke(this.outlineColor);
    strokeWeight(this.strokeWeight);
    if (this.fillFage) {
        fill(this.fillColor);    
    } else {
        noFill();
    }
    
    beginShape();
    for (let i = 0; i < closedVertexes.length; i++) {
      var vertex = this.converPoint(closedVertexes[i], this.size, this.size);
      curveVertex(vertex[0], vertex[1]);
    }
    endShape();
    pop();
  }

  converPoint(point, width, height) {
    return [(point[0] * width) / 1280 + this.x, (point[1] * height) / 1280 + this.y];
  }
}
