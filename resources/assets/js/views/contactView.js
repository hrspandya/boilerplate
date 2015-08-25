define(function(require){

	var BaseView = require("BaseView");

	var contactView = BaseView.extend({

		initialize : function(){


		},

		render : function(){

			$(this.el).html("Loading contact View");

			return this;

		}	

	});	

	return contactView;

});