var Cardview = Backbone.View.extend({
  tagName:'li',
  className: 'cardclass',
  id: 'foo',
  template: _.template($('#cardTemplate').html()),

  // Constructor method has access to the model when created

  // initialize: function(){
  //   //console.log('I am a new card created on Int');
  //   //console.log(this.model);
  //   // Render the view right after it is invoked
  //   this.render();
  // },

  render: function(){
    //console.log('I take your template and group it with your associated data');
    // this.$el.html(this.model.get('number'));
    this.$el.html(this.template(this.model) );
    return this;
  }

});

