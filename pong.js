// create a vector class
class Vec {
  // constructor
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

// create a rec class
class Rect {
  // constructor
  constructor(w, h) {
    this.pos = new Vec;
    this.size = new Vec(w, h);
  }

  // get the left position of the ball
  get left () {
    return this.pos.x - this.size.x / 2
  }

  // get the right position of the ball
  get right() {
    return this.pos.x + this.size.x / 2
  }

  // get the top position of the ball
  get top() {
    return this.pos.y - this.size.y / 2
  }

  // get the bottom position of the ball
  get bottom() {
    return this.pos.y - this.size.y / 2
  }

}

// class ball 
class Ball extends Rect {
  // contstructor
  constructor () {
    super(10, 10);
    this.vel = new Vec;
  }
}

// get the canvas element
const canvas = document.getElementById('pong');

// get the context type of the canvas
const context = canvas.getContext('2d');

// define the ball
const ball = new Ball;
ball.pos.x = 100;
ball.pos.y = 50;

ball.vel.x = 100;
ball.vel.y = 100;

let lastTime;

const callback = (millis) => {
  if (lastTime) {
    Update((millis - lastTime) / 1000);
  }
  lastTime = millis;
  requestAnimationFrame(callback);
}

// update ball position function
const Update = (dt) => {
  ball.pos.x += ball.vel.x * dt;
  ball.pos.y += ball.vel.y * dt;

  if (ball.left < 0 || ball.right > canvas.width) {
    ball.vel.x = - ball.vel.x;
  }

  if (ball.top < 0 || ball.bottom > canvas.height) {
    ball.vel.y = - ball.vel.y;
  }

  // define the the context attribute of the canvas
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // define the the context attribute of the canvas
  context.fillStyle = '#fff';
  context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
} 

callback();