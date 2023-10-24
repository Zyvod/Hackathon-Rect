const Application = PIXI.Application

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.background.color = 'slategrey'

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute'

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const gravity = .9
const sunSet = .1
const playerMove = .15
let hail = []

const grass = new Graphics();
grass.beginFill('snow')
.lineStyle(2,'green',0.3)
.drawRect(0,750,window.innerWidth,window.innerHeight)
.endFill();

const circle = new Graphics();
circle.beginFill('orange')
.lineStyle(3,'yellow',0.5)
.drawCircle(920,100,90)
.endFill();

const player1 = new Graphics();
player1.beginFill('red')
.lineStyle(5,'darkred',1)
.drawRect(250,600,50,150)
.endFill();
app.stage.addChild(player1)

const player2 = new Graphics();
player2.beginFill('blue')
.lineStyle(5,'darkblue',1)
.drawRect(1550,600,50,150)
.endFill();
app.stage.addChild(player2)

app.stage.addChild(circle)
app.stage.addChild(grass)

app.ticker.add(delta => animationLoop(delta));

function animationLoop(delta) {

const hailFall = new Graphics();
hailFall.beginFill('ivory')
.drawCircle(Math.random() * app.screen.width, 0, 5,5)
hailFall.lineStyle(2,'white',0.5)
hail.push(hailFall)
app.stage.addChild(hailFall)
falling(hail)
circle.y += sunSet
player1.x += playerMove
player2.x -= playerMove
}

function falling(array) {
  for ( let i = 0; i < array.length; i++) {
    array[i].y += gravity
    array[i].rotation += 0.001
  }
}


