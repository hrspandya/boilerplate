define(function(require){

	require("jquery");
	require("backbone");
	require("underscore");


	var ccRoute = Backbone.Router.extend({
		
		//Common methods accross all Routes

		initialize : function(){

			//initialize navbar menu 

		},
		
		loadView : function(element, viewElement){
			$(element).html(viewElement.render().el);
		}
		
	});

	return ccRoute;

});