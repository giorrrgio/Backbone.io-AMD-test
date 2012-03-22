define([
  'jquery',
  'underscore',
  'backbone',
  'backboneio'
  ], function ($, _, Backbone, bio){
  var AppView = Backbone.View.extend({

    el: $("#test"),

    initialize: function() {

    },

    render: function() {
      $(this.el).html('<h1>It worked</h1>');
    }
  });

  return AppView;
});