require.config({
    baseUrl: "./",
    paths: {

      //Libs -------------------------------------
      
      "requirejs": "resources/assets/js/libs/require",
      "jquery": "resources/assets/js/libs/jquery",      

      //-------------------------------------------



      //ROUTES ------------------------------------

      "appRoute" : "resources/assets/js/routes/appRoute",

      //-------------------------------------------



      //COMPONENTS --------------------------------

      //-------------------------------------------



      //VIEWS

      "sample": "resources/assets/js/sample"

      //-------------------------------------------


    },
    shim : {
    	"bootstrap": {
            "deps": ["jquery"],
            "exports": "$.fn.popover"
        }
    }
});