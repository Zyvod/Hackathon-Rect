const Application = PIXI.Application

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 'black'

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute'

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const player1 = new Graphics();
player1.beginFill('red')
.lineStyle(4,'darkred',1)
.drawRect(600,600,50,150)
.endFill();

const player2 = new Graphics();
player2.beginFill('blue')
.lineStyle(4,'darkblue',1)
.drawRect(800,600,50,150)
.endFill();

const grass = new Graphics();
grass.beginFill('darkgreen')
.lineStyle(2,'green',0.3)
.drawRect(0,750,window.innerWidth,window.innerHeight)
.endFill();

const circle = new Graphics();
circle.beginFill('orange')
.lineStyle(3,'yellow',0.5)
.drawCircle(920,400,90)
.endFill();

app.stage.addChild(grass)
app.stage.addChild(circle)
app.stage.addChild(player1)
app.stage.addChild(player2)
