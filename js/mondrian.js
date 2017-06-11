
function getRand(startRange,endRange) {
   return Math.floor(Math.random()*(endRange-startRange+1))+startRange;
}

function Mondrian(width, height) {
   if (!width || !height) {
      throw new Error("Mondrian must have width & height", width, height);
   }
   this.width = width;
   this.height = height;

   this.lines = [];

   this.addLine = function(line) {
      this.lines.push(line);
   };

   this.squares = [];

   this.addSquare = function(square) {
      this.squares.push(square);
   }
}
function Square(startPoint, endPoint) {
   if (!startPoint || !endPoint) {
      throw new Error("square must have two points", startPoint, endPoint);
   }
   this.start = (startPoint.x <= endPoint.x && startPoint.y <= endPoint.y) ? startPoint : endPoint;
   this.end = (startPoint.x <= endPoint.x && startPoint.y <= endPoint.y) ? endPoint : startPoint;

   this.width = endPoint.x - startPoint.x;
   this.height = endPoint.y - startPoint.y;
   this.area = this.width * this.height;
   this.filled = false;
   this.color = undefined;
}

function Line(startPoint, endPoint) {
   if (!startPoint || !endPoint) {
      throw new Error("line must have two points", startPoint, endPoint);
   }
   this.start = (startPoint.x <= endPoint.x && startPoint.y <= endPoint.y) ? startPoint : endPoint;
   this.end = (startPoint.x <= endPoint.x && startPoint.y <= endPoint.y) ? endPoint : startPoint;

   this.length = Math.sqrt(
      Math.pow(Math.abs(this.end.y-this.start.y),2) +
      Math.pow(Math.abs(this.end.x-this.start.x),2));

   this.isHorizontal = (this.end.y-this.start.y === 0);
}

function Point(x,y) {
   if (!_.isNumber(x) && !_.isNumber(y)) {
      throw new ERror("point must have x and y coords", x, y);
   }
   this.x = x;
   this.y = y;
}

var defaultOpts = {
   minHLines: 5,
   maxHLines: 7,
   minVLines: 6,
   maxVLines: 9,
   minShortLines: 2,
   maxShortLines: 7,
   minSquares: 3,
   maxSquares: 9,
   numUsableSquares: 6,
};

var narrowOpts = {
   minHLines: 7,
   maxHLines: 9,
   minVLines: 5,
   maxVLines: 7,
}

function createMondrian(canvas, opts) {
   var mondrian = generateMondrian(canvas.width,canvas.height, opts);
   drawMondrian(mondrian, canvas);
   return mondrian;
}

function init() {
   var canvas = document.getElementsByClassName('canvas')[0];

   var opts = defaultOpts;
   var height = window.innerHeight;
   var width = window.innerWidth;

   // if very narrow, then change values
   if (width < 600) {
      console.log("narrow mode on");
      height = width * 2;
      opts = _.assign(opts, narrowOpts);
   }

   canvas.height = height;
   canvas.width = width;

   var mondrian = createMondrian(canvas, opts);
   insertContent(mondrian);

}

var resizeTimeout;
window.onresize = function(){
   if (resizeTimeout) {
      clearTimeout(resizeTimeout);
   }
   resizeTimeout = setTimeout(init,200);
};
init();
