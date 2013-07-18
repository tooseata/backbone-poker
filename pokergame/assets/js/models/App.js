var App = Backbone.Model.extend({
  initialize: function(){
    this.set('deck', new Deck());
    this.set('playerHand', this.get('deck').dealPlayer());
    this.set('dealerHand', this.get('deck').dealDealer());
  }
});