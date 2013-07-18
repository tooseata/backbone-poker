var Card = Backbone.Model.extend({
  
  // Do I need a validate myself?
  // Only validate when you set to a method
  // This returns a boolen if fails validation, will we need to listen for error to display
  // Property will not be set if fails validation 
  // validate: function(attrs){
  //   if (attrs.number > 2 || attrs.number < 14){
  //     return "this is not a valid card in poker";
  //   }
  // },
  // What do cards do??
  cardValue: function(){
    return this.get('number') + "is my value!";
  }
  // Do there evaulate themselves? 

});

