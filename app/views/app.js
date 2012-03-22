define([
  'jquery',
  'underscore',
  'backbone',
  'models/test'
  ], function ($, _, Backbone, Test){
  var AppView = Backbone.View.extend({

    el: $("#test"),
    model: new Test,

    initialize: function() {

    },

    render: function() {
      $(this.el).html('<h1>It worked</h1>');
    }
  });

  return AppView;
});