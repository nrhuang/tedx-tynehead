//mostly just animations and maybe a form if we can figure out how to make that, otherwise we'll use google forms or smth
//what kind of animations?
//dropdowns and maybe something that happens when the user scrolls down

var secret = "3838404037393739666513"; //Konami Codeeeeee
var input = "";
var timer;
var mode = false;
var showkonami =false;

$(document).ready(function() {
	$('#flash').hide();
});

$(document).keyup(function(e) {
	//alert(e.which);
	input += e.which;

	clearTimeout(timer);
	timer = setTimeout(function() { input = ""; }, 500);
	check_input();
});

function check_input() {
	if(input == secret) {
	//the secret code
	showkonami= true;
}};

$(document).ready(function() {
	setInterval(function() { $('#info').html('Keystroke: ' + input); }, 100);
});

$(function() {
var konami = $('.konami');

konami.css("left", walking+"%");

var horizontal = konami.css('background-position-x');

var flag = 0; var scroll = 23;
console.log(walking);

$(document).on("scroll", function() {

if(showkonami == true){

var scroll = $(document).scrollTop();
walking = walking - 1;
konami.css("left", walking+"%");

if (walking == -10){
walking = 110; }

if ((scroll % 3) == 0){

if(horizontal == "0px"){
konami.css("background-position-x", "-65px");

horizontal=konami.css('background-position-x');

}
else if ((horizontal == "-65px") && (flag == 0)){
konami.css("background-position-x", "-130px");

horizontal=konami.css('background-position-x');

flag = 1;
}
else if ((horizontal == "-65px") && (flag == 1)){
konami.css("background-position-x", "0px");

horizontal=konami.css('background-position-x');

flag = 0;
}
else if(horizontal == "-130px"){
konami.css("background-position-x", "-65px");

horizontal=konami.css('background-position-x');

} } } }); });