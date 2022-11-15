let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let font, fontsize = 20;
let bg;
let y = 0;

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.ttf');
}

function setup() {
  bg = loadImage('assets/bg.png');
  
  createCanvas(1080, 720);
  stroke(255);

  let radius = min(width, height) / 6;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  cx = width / 8;
  cy = height / 6;
  
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(bg);

  stroke(226, 204, 0);

  noStroke();
  fill(222, 122, 34);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(222, 145, 122);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * secondsRadius;
    let y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  
  textAlign(LEFT);
  drawWordss(width * 0.03);
  
  textAlign(RIGHT);
  drawWords(width * 0.98);
  
  endShape();
}

function drawWordss(x) {
  fill(0);
  text('Phone notifications:', x, 260);
  text('Missed Call (3)', x, 280);
  text('Text from Mother', x, 300);
  text('Discord (7)', x, 320);
  text('Schedule for the day:', x, 420);
  text('5PM - Meeting', x, 440);
  text('7PM - Raid', x, 460);
  text('2AM - Sleep', x, 480);
  
  

}

function drawWords(x) {
  fill(0);
  text('112 lbs', x, 80);
  text('Slept 6.3hrs', x, 100);
  text('Mirror activity 12m', x, 120);

  fill(255);
  text('89 F', width/2, 650);
}

