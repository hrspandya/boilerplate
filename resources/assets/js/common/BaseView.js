define(function(require){

	require("jquery");
	require("backbone");
	require("underscore");
	require("backbone");


	var ccView = Backbone.View.extend({
		
		//Common methods accross all Views

		loadView : function(element, viewElement){
			$(element).html(viewElement);
		}

	});

	return ccView;

});