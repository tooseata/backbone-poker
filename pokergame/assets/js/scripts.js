$(function () {

window.Main = {
  Models:{},
  Collections:{},
  Views:{}
};

// Collections

Main.Collections.Deck = Backbone.Collection.extend({
  model: Main.Models.Card,

  initialize: function(){
    this.add(this.defaults());
  },

  defaults: function(){
    var availableSuites = ['Diamonds', 'Hearts', 'Clubs','Spades'];
    var cards = [];

    for (var suiteIndex = 0; suiteIndex < 4; suiteIndex++){
      for(var i = 2; i < 15; i++){
        var card = new Main.Models.Card({
          suit: availableSuites[suiteIndex],
          number: i
        });
        cards.push(card);
      }
    }
    return _.shuffle(cards);
  },

  dealPlayer: function() {
    return [this.pop().toJSON(), this.pop().toJSON(), this.pop().toJSON(),this.pop().toJSON(), this.pop().toJSON()];
  },

  dealDealer: function() {
    return [this.pop().toJSON(), this.pop().toJSON(), this.pop().toJSON(), this.pop().toJSON(), this.pop().toJSON()];
  }
});

// Models

Main.Models.App = Backbone.Model.extend({
  initialize: function(){
    this.set('deck', new Main.Collections.Deck());
    this.set('playerHand', this.get('deck').dealPlayer());
    this.set('dealerHand', this.get('deck').dealDealer());
  }
});

Main.Models.Card = Backbone.Model.extend({

  cardValue: function(){
    return this.get('number') + "is my value!";
  }
});

// Views

Main.Views.AppView = Backbone.View.extend({
  template: _.template($('#mainScreen').html() ),

  initialize: function(){
    this.render();
  },

  render: function(){
    //debugger;
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.player-hand-container').html(new Main.Views.handView ({collection: this.model.get('playerHand')}).el);
    this.$('.dealer-hand-container').html(new Main.Views.handView ({collection: this.model.get('dealerHand')}).el);
  }
});


Main.Views.handView = Backbone.View.extend({

  tagName:'ul',

  initialize: function(){
    this.render();
  },

  render: function(){
debugger;
    // filter through all items in a collection
    this.collection.forEach(function(Card){
      // for each, create a new CardView
      var cardview = new Main.Views.Cardview({model:Card});
      // append to root element
      this.$el.append(cardview.render().el);
    }, this);

    return this;
  }


});

Main.Views.Cardview = Backbone.View.extend({
  tagName:'li',
  className: 'cardclass',
  id: 'foo',
  template: _.template($('#cardTemplate').html()),

  render: function(){
    this.$el.html(this.template(this.model) );
    return this;
  }

});

window.app = new Main.Views.AppView({model: new Main.Models.App()}).$el.appendTo('body');

}); // END IFFIE

