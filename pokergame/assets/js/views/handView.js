var handView = Backbone.View.extend({

  tagName:'ul',

  initialize: function(){
    this.render();
  },

  render: function(){

    // filter through all items in a collection
    this.collection.forEach(function(Card){
      // for each, create a new CardView
      var cardview = new Cardview({model:Card});
      // append to root element
      this.$el.append(cardview.render().el);
    }, this);

    return this;
  }


});