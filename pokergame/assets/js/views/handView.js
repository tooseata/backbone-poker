window.handView = Backbone.View.extend({

  tagName:'ul',

  initialize: function(){
    // var self = this;
    //debugger;
    this.render();
    // console.log(this.collection);
    // this.collection.on('add', function(){
    //   // self.render();
    // });
    // return this.render();
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

    // this.$el.append(this.collection.map(function(card){
    //   return new CardView({
    //     model:card
    //   }).$el;
    // }));
  }


});