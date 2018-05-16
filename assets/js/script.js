$(document).ready(function(){

$("#one").click(function(){
	$("#onecenter").toggle();

});

$("#two").click(function(){
	$("#twocenter").toggle();

});

$("#three").click(function(){
	$("#threecenter").toggle();

});

$("#four").click(function(){
	$("#fourcenter").toggle();

});

//third

$("#groundsel").click(function(){
	$("#onecenter").fadeToggle("fast", "swing");

});

$("#crab").click(function(){
	$("#twocenter").fadeToggle("fast", "swing");

});

$("#turtle").click(function(){
	$("#threecenter").fadeToggle("fast", "swing");

});

$("#monkey").click(function(){
	$("#fourcenter").fadeToggle("fast", "swing");

});

//self toggle?
$("#onecenter").click(function(){
	$("#onecenter").fadeToggle("fast", "swing");

});

$("#twocenter").click(function(){
	$("#twocenter").fadeToggle("fast", "swing");

});

$("#threecenter").click(function(){
	$("#threecenter").fadeToggle("fast", "swing");

});

$("#fourcenter").click(function(){
	$("#fourcenter").fadeToggle("fast", "swing");

});



});
