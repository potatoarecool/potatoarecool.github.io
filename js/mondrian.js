/**
 * This File is for setting up the mondrian generator & showing it
 */

/**
 * create a mondrian and draw it
 * @param {HTMLCanvas} canvas
 * @param {object} opts
 */
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

var debouncedInit = _.debounce(init,300, {maxWait: 2000});

window.addEventListener("load", function() {
    debouncedInit();
});

window.addEventListener("resize", function() {
    debouncedInit();
});