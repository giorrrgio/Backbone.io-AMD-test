/*====================================================
  Require.js Config
  ====================================================*/
require.config({
	paths: {
		"underscore": "./libs/underscore-amd-min",
		"backbone": "./libs/backbone-amd-min",
		"text": "./require-text",
		"order": "./require-order",
		"socketio": "/socket.io/socket.io",
		"backboneio": "./libs/backbone-io-amd",
	}
});

require(['views/app'], function (AppView){

	var appView = new AppView;
	window.app = appView;
	appView.render();
});