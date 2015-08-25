define(function(require){

	var BaseView = require("BaseView");		


	var homeView = BaseView.extend({

		initialize : function(){

		},

		render: function(){
			$(this.el).html("Loading Home View");

			return this;
		}

	});

	return homeView;


});