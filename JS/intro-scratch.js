const cursorTag = document.querySelector("div.cursor");
const canvasIn = document.querySelector("canvas.in");
const canvasOut = document.querySelector("canvas.out");

//move the cursor
const moveCursor = function(x, y) {
  cursorTag.style.left = x + "px";
  cursorTag.style.top = y + "px";
};

//canvas
const setupCanvas = function(canvas) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dpi = window.devicePixelRatio;

  canvas.width = w * dpi;
  canvas.height = h * dpi;
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";

  const context = canvas.getContext("2d");
  context.scale(dpi, dpi);

  context.strokeStyle = "#ffffff";
  context.fillStyle = "#ffffff";

  context.lineWidth = 0.5;
  context.lineCap = "round";
  context.lineJoin = "round";

  context.shadowBlur = 5;
  context.shadowColor = context.strokeStyle;

  context.fill();
};

//draw
const startDraw = function(canvas, x, y) {
  const context = canvas.getContext("2d");

  context.moveTo(x, y);
  context.beginPath();
};

const moveDraw = function(canvas, x, y) {
  const context = canvas.getContext("2d");
  context.lineTo(x, y);
  context.stroke();
};

setupCanvas(canvasIn);
setupCanvas(canvasOut);

//events
document.addEventListener("mousemove", function(event) {
  //console.log(event);
  moveCursor(event.pageX, event.pageY);
  moveDraw(canvasIn, event.pageX, event.pageY);
});

window.addEventListener("resize", function() {
  setupCanvas(canvasIn);
  setupCanvas(canvasOut);
});

document.addEventListener("touchstart", function(event) {
  startDraw(canvasIn, event.pageX, event.pageY);
  startDraw(canvasOut, event.pageX, event.pageY);
});

document.addEventListener("touchmove", function(event) {
  moveDraw(canvasIn, event.pageX, event.pageY);
  moveDraw(canvasOut, event.pageX, event.pageY);
});
