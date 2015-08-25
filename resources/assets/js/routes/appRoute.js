define(function(require){

	var $ = require("jquery"),
    	_ = require("underscore"),
    	BaseRoute = require("BaseRoute"),
		homeView = require("homeView"),
		contactView = require("contactView");


	var appRouter = BaseRoute.extend({
		routes:{

			"" : "home",
			"home" : "home",
			"contact" : "contact",

			home : function(){				
				this.loadView(".container", new homeView());				
			},

			contact : function(){
				this.loadView(".container", new contactView());
			}

		}
	});
	

	new appRouter();

	// Start Backbone history a necessary step for bookmarkable URL's
	Backbone.history.start();

	console.log("routes loaded");

});