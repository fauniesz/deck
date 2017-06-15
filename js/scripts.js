//back-end
var suits = [" of Hearts"," of Clubs"," of Spades"," of Diamonds"];
var ranks = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]

var cards = [];

suits.forEach(function(suit) {
  ranks.forEach(function(rank) {
    cards.push(rank + suit);
  });
});


//front-end
$(document).ready(function() {
  cards.forEach(function(card) {
    $("ul").prepend("<li>" + card + "</li>");
  });
});
