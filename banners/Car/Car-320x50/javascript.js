$(document).ready(function(){
	
	$("#container").css({"display": "block"});
	$("#logoimg")[0].src="logo.svg";
	$("#bgimg")[00].src="bgimg.jpg";
	$("#copytxt1").text("TOYOTA YARIS");
	$("#copytxt2").text("STARTING FROM");
	$("#pricecopy").text("$14990");
	$("#copytxt31").text("+ 5 YEAR");
	$("#copytxt32").text("+ FREE EXTRAS");
	$("#copytxt33").text("+ LOW COSTS");
	$("#copytxt1").css({"color": "#ffffff"});
	$("#copytxt2").css({"color": "#858B97"});
	$("#pricecopy").css({"color": "#000000"});
	$(".copytxt3").css({"color": "#A0A3AD"});
	$("#ctaparent").css({"background": "#EE3936"});
	$("#ctatxt").text("TEST DRIVE");
	$("#ctatxt").css({"color": "#fff"});
	animation();
});


function animation(){
	
	TweenMax.to("#container", 0.5, {opacity:1, delay:0.5});
	TweenMax.from("#bgimgparent", 1, {y:-100, delay:0.5});
	TweenMax.from("#copyparent1", 1, {x:-150, delay:0.5});
	TweenMax.from("#logoparent", 1, {x:100, delay:0.5});
	TweenMax.from("#copyparent2", 1, {y:-100, delay:1.5});
	TweenMax.from("#pricecopyparent", 0.5, {rotation:360, scale:0, delay:2.5});
	TweenMax.from("#copytxt31", 0.5, {y:100, delay:3.5});
	TweenMax.from("#copytxt32", 0.5, {y:100, delay:3.7});
	TweenMax.from("#copytxt33", 0.5, {y:100, delay:3.9});
	TweenMax.from("#ctaparent", 0.5, {height:0, delay:5});
	eventshandler();
}

function eventshandler(){
	$("#container").mouseover(function(){
		$("#ctaparent").css({"background-color": "#fff","transition": "0.1s linear 0s", "border":"1px solid #EE3936"});
		$("#ctatxt").css({"color": "#EE3936","transition": "0.1s linear 0s"});
	});
	$("#container").mouseout(function(){
		$("#ctaparent").css({"background-color": "#EE3936","transition": "0.1s linear 0s"});
		$("#ctatxt").css({"color": "#fff","transition": "0.1s linear 0s"});
	});
	$("#container").click(function(){
		window.open("https://www.google.com/");
	});
	$("#ctaparent").click(function(){
		window.open("https://in.yahoo.com/?p=us");
	});
}