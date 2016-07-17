var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

canvas.addEventListener('mousemove', function (e) {
  var mouse = getMouse(e, canvas);
  redraw(mouse);
}, false);

function redraw (mouse) {
  canvas.width = windowWidth;
  canvas.height = windowHeight;
  context.drawImage(image, 0, 0);
  context.beginPath();
  context.rect(0, 0, windowWidth, windowHeight);
  context.arc(mouse.x, mouse.y, 150, 0, Math.PI*2, true);
  context.clip();
  context.fillRect(0, 0, windowWidth, windowHeight);
}

var image = new Image();
image.onload = function () {
  redraw({ x: -windowWidth, y: -windowHeight });
};
image.src = "https://drscdn.500px.org/photo/124520439/m%3D2048/a29da29e13f8a843330b091736854840";

function getMouse(e, canvas) {
  var element = canvas;
  var offsetX = 0;
  var offsetY = 0;
  var mx, my;

  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;

  return {
    x: mx,
    y: my
  };
}
