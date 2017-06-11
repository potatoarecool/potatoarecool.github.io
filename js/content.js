
function insertContent(mondrian) {

   // document.getElementsByClassName('content')[0].style.display = 'block';
   var cards = document.getElementsByClassName('card');

   _.forEach(cards, function(card) {
      _(mondrian.squares).filter({filled: false, color: undefined}).forEach(function(square) {
         if (!_.isNaN(square.area)) {
            square.filled = true;
            card.style.top = square.start.y + 'px';
            card.style.left = square.start.x + 'px';
            card.style.width = square.width + 'px';
            card.style.height = square.height + 'px';
            return false;
         }
      }).run();
   })
}
