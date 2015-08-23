define(function(require){

	require("jquery");


	var sampleObj = function(){
		console.log("sample Obj constructor called");
	}

	sampleObj.prototype.callMe = function(){
		console.log("called me");
	}


	return sampleObj;

});