function setup() {
  createCanvas(innerWidth, innerHeight);
  // random distribution
  // only execute draw once
  noLoop();
  // draw rectangle form centre
  rectMode(CENTER);
}

function draw() {
  background(220);
  //////////
  // mapping
  //////////
/*  noFill()
  let c = map(mouseY, 0, height, 0, 255)
  rect(200, 200, 600, 200)
  fill(254, 111, 3)
  //  width is only available after createCanvas has been called
  let w = map(mouseX, 0, width, 0, 500)
  fill(165, c, 2)
  rect(200, 200, w, 200)
  */
   //////////
  // random distribution
  //////////
  //noStroke();
  //rgb
//   fill(165, 1, 2, 80);
//   const size = 33;
//   for(let i = 0; i < 1000; i++) {
//     let x = random(size/2, width - size/2);
//     let y = random(size/2, height - size/2)
//     square(x, y, size)
//   }

     //////////
  // random distribution
  //////////
  noStroke();
  //rgb
  const size = 33;
  let x,y;
  for(let i = 0; i < 1000; i++) {
    // layer 1
    x = randomGaussian(width/2, 150)
    y = randomGaussian(height/2, 150)
    fill(165, 1, 2, 80)
    square(x, y, size)
// layer 2
    x = randomGaussian(width/2, 100)
    y = randomGaussian(height/2, 100)
    fill(1, 39, 123, 80)
    square(x, y, size)
      // layer 3
    x = randomGaussian(width/2, 50)
    y = randomGaussian(height/2, 50)
    fill(0, 51, 2, 169)
    square(x, y, size)
  }
}
