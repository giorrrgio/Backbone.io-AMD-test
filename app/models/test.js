define([
  'order!underscore',
  'order!backbone',
  'order!socketio',
  'order!backboneio' 
  ], function (_, Backbone, sio, bio) {
  var TestModel = Backbone.Model.extend({

    backend: "mybackend",

    // Default attributes for the todo.
    defaults: {
      firstName: "Jack",
      lastName: "Parker"
    },
    initialize: function() {
      this.save();
    }
  });
  return TestModel;
});