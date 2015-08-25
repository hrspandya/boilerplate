require.config({
    baseUrl: "./",
    paths: {

      //Libs -------------------------------------
      
      "requirejs": "resources/assets/js/libs/require",
      "jquery": "resources/assets/js/libs/jquery",      
      "backbone": "resources/assets/js/libs/backbone-min",      
      "underscore": "resources/assets/js/libs/underscore-min",      
      "jasmine-jquery" : "resources/assets/js/libs/jasmine-jquery",
      //-------------------------------------------


      //COMMON --------------------------------

      "BaseRoute": "resources/assets/js/common/BaseRoute",
      "BaseView": "resources/assets/js/common/BaseView",
      "BaseModel": "resources/assets/js/common/BaseModel",

      //-------------------------------------------



      //ROUTES ------------------------------------

      "appRoute" : "resources/assets/js/routes/appRoute",

      //-------------------------------------------



      //COMPONENTS --------------------------------

      //-------------------------------------------



      //VIEWS

      "homeView": "resources/assets/js/views/homeView",
      "contactView": "resources/assets/js/views/contactView",
      "sample": "resources/assets/js/sample"

      //-------------------------------------------


    },

    shim : {
    	"jasmine-jquery": {
        "deps": ["jquery"],
        "exports": "jasmine.jQuery"
      }
    }
});