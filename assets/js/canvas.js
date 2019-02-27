/* Variable lave et timer de propagation */
let lavaExplosion = [];
let explosionTimer = 0;

/* setup des canvas */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  createLava(200, 100);
  createLava(width/2, height/2);
}

/* canvas */
function draw() {
  background('#222');
  explosionTimer++;

  for(let i = 0; i < lavaExplosion.length; i++) {
    lavaExplosion[i].pos.add(lavaExplosion[i].vel);
    lavaExplosion[i].size--;
    if(lavaExplosion[i].size > 0) {
      stroke(lavaExplosion[i].color);
      strokeWeight(lavaExplosion[i].size);
      point(lavaExplosion[i].pos.x, lavaExplosion[i].pos.y);
    } 
    else {
      lavaExplosion.splice(i, 1);
    }
  }
}

/* fonction click*/
function mousePressed() {
  createLava(mouseX, mouseY);
}

/* canvas lors du click*/
function createLava(x, y) {
  let i = 100;

  while(i--) {
    lavaExplosion.push({
      color: color(color('hsl(' + floor(random(50)) + ', 100%, 50%)')),
      pos: createVector(x, y),
      vel: p5.Vector.fromAngle(random(2*PI)).mult(random(10)),
      size: random(50)
    });
  }
}