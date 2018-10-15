
function getRand(startRange,endRange) {
    if (endRange < startRange) {
        throw new Error('can not get rand of negative range');
    }
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
      Math.pow(this.end.y-this.start.y,2) +
      Math.pow(this.end.x-this.start.x,2));

   this.isHorizontal = this.end.y === this.start.y;
}

function Point(x,y) {
   if (!_.isNumber(x) || !_.isNumber(y)) {
      throw new Error("point must have x and y coords", x, y);
   }
   this.x = x;
   this.y = y;
}

var defaultOpts = {
   minHLines: 3,
   maxHLines: 6,
   minVLines: 3,
   maxVLines: 5,
   minShortLines: 3,
   maxShortLines: 7,
   minSquares: 4,
   maxSquares: 6,
   numUsableSquares: 6,
};

var narrowOpts = {
   minHLines: 7,
   maxHLines: 9,
   minVLines: 5,
   maxVLines: 7,
   minShortLines: 2,
}