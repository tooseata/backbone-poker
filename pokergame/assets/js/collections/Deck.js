window.Deck = Backbone.Collection.extend({
  model: Card,

  initialize: function(){
    //this.add({test: 'val'});
    // var cardAmounts = _.range(2,15);
    this.add(this.defaults());
  },

  defaults: function(){
    var availableSuites = ['Diamonds', 'Hearts', 'Clubs','Spades'];
    var cards = [];

    for (var suiteIndex = 0; suiteIndex < 4; suiteIndex++){
      for(var i = 2; i < 15; i++){
        var card = new Card({
          suit: availableSuites[suiteIndex],
          number: i
        });
        cards.push(card);
      }
    }
    return _.shuffle(cards);
  },

  dealPlayer: function() {
    return [this.pop(), this.pop(), this.pop(), this.pop(), this.pop()];
  },

  dealDealer: function() {
    return [this.pop(), this.pop(), this.pop(), this.pop(), this.pop()];
  }
});