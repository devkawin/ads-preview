$(document).ready(function(){
	$("#container").css({"display": "block"});
	$("#intro").css({"background": "#ffffff"});
	
	$("#logoimg")[0].src="logo.png";
	$("#proimg1")[0].src="proimg1.jpg";
	$("#proimg2")[0].src="proimg2.jpg";
	$("#proimg3")[0].src="proimg3.jpg";
	$("#proimg4")[0].src="proimg4.jpg";
	
	$("#productname1").html("Watches");
	$("#productname2").html("Coolers");
	$("#productname3").html("Mobiles");
	$("#productname4").html("Shoes");
	
	$("#productprice1").html("$45");
	$("#productprice2").html("$56");
	$("#productprice3").html("$54");
	$("#productprice4").html("$29");

	$(".productnames").css({"color": "#000000"});
	$(".productprices").css({"color": "#000000"});
	
	animation();
});

function animation(){
	TweenMax.to("#container", 0.5, {opacity:1, delay:0.5});
	TweenMax.to(".productparents", 0, {y:100, opacity:0});
	TweenMax.to("#leftsec", 0, {scale:0, opacity:0});
	TweenMax.to("#rightsec", 0, {scale:0, opacity:0});
	
	TweenMax.to("#rightsec", 0.5, {scale:1, opacity:1, delay:1});
	TweenMax.to("#leftsec", 0.5, {scale:1, opacity:1, delay:1});
	
	TweenMax.to("#productparent1", 0.5, {y:0, opacity:1, delay:2});
	TweenMax.to("#productparent2", 0.5, {y:0, opacity:1, delay:2.3});
	TweenMax.to("#productparent3", 0.5, {y:0, opacity:1, delay:2.6});
	TweenMax.to("#productparent4", 0.5, {y:0, opacity:1, delay:2.9});
	
	eventshandler();
}
function eventshandler(){
	$("#productparent1").mouseover(function(){$("#productparent1").css({"transform":"scale(1.05)", "transition":"0.2s linear 0s"})});
	$("#productparent2").mouseover(function(){$("#productparent2").css({"transform":"scale(1.05)", "transition":"0.2s linear 0s"})});
	$("#productparent3").mouseover(function(){$("#productparent3").css({"transform":"scale(1.05)", "transition":"0.2s linear 0s"})});
	$("#productparent4").mouseover(function(){$("#productparent4").css({"transform":"scale(1.05)", "transition":"0.2s linear 0s"})});
	
	$("#productparent1").mouseout(function(){$("#productparent1").css({"transform":"scale(1)", "transition":"0.2s linear 0s"})});
	$("#productparent2").mouseout(function(){$("#productparent2").css({"transform":"scale(1)", "transition":"0.2s linear 0s"})});
	$("#productparent3").mouseout(function(){$("#productparent3").css({"transform":"scale(1)", "transition":"0.2s linear 0s"})});
	$("#productparent4").mouseout(function(){$("#productparent4").css({"transform":"scale(1)", "transition":"0.2s linear 0s"})});
	
	$("#container").click(function(){
		window.open("https://www.google.com/");
	});
	$("#ctaparent").click(function(){
		window.open("https://in.yahoo.com/?p=us");
	});
}