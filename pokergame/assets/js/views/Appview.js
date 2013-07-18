window.AppView = Backbone.View.extend({
  template: _.template($('#mainScreen').html() ),

  initialize: function(){
    this.render();
  },

  render: function(){
    //debugger;
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.player-hand-container').html(new handView ({collection: this.model.get('playerHand')}).el);
    this.$('.dealer-hand-container').html(new handView ({collection: this.model.get('dealerHand')}).el);
  }
});