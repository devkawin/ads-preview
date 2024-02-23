$(document).ready(function(){
	console.log("Creative started to load...");
	$("#container").css({"display": "block"});
	$("#intro").css({"background": "#ffffff"});
	
	$("#logoimg")[0].src="logo.svg";
	$("#bgimg")[0].src="bgimg.jpg";
	$("#bgimg1")[0].src="bgimg1.png";
	$("#bgimg2")[0].src="bgimg2.png";
	$("#bgimg3")[0].src="bgimg3.png";
	$("#bgimg4")[0].src="bgimg4.png";
	
	$("#copytxt1").html("YOU WILL BE");
	$("#copytxt11").text("AWESOME");
	$("#copytxt12").text("STYLISH");
	$("#copytxt13").text("ROCKSTAR");
	$("#copytxt14").text("ULTIMATE");
	$("#copytxt2").text("Visit our site for more exclusive offers!");
	
	$(".copytxts").css({"color": "#ffffff"});
	
	$("#ctaparent").css({"border": "1px solid #ffffff"});
	$("#ctatxt").html("SHOP NOW");
	$("#ctatxt").css({"color": "#ffffff"});
	animation();
});

function animation(){
	console.log("Animation started...");
	TweenMax.to("#container", 0.5, {opacity:1, delay:0.5});
	TweenMax.to("#logoparent", 0, {x: -100, opacity:0});
	TweenMax.to(".bgimgparents", 0, {x:150, opacity:0});
	TweenMax.to("#copyparent1", 0, {opacity:0});
	TweenMax.to("#copytxt11", 0, {opacity:0, scale:0});
	TweenMax.to("#copytxt12", 0, {opacity:0, scale:0});
	TweenMax.to("#copytxt13", 0, {opacity:0, scale:0});
	TweenMax.to("#copytxt14", 0, {opacity:0, scale:0});
	TweenMax.to(".copytxtparent", 0, {opacity:0});
	TweenMax.to("#copyparent2", 0, {opacity:0, y:20});
	TweenMax.to("#line", 0, {opacity:0, width:0});
	TweenMax.to("#ctaparent", 0, {x: 100, opacity:0});
	
	TweenMax.to("#logoparent", 0.5, {opacity:1, x:0, delay:1});
	TweenMax.to("#ctaparent", 0.5, {opacity:1, x:0, delay:1});
	TweenMax.to("#copyparent1", 0.5, {opacity:1, delay:2});
	TweenMax.to("#copytxtparent", 0.5, {opacity:1, delay:2});
	
	TweenMax.to("#copytxt11", 0.5, {opacity:1, scale:1, delay:3});
	TweenMax.to("#bgimgparent1", 0.5, {opacity:1,x: 0, delay:3});
	TweenMax.to("#bgimgparent", 0.5, {opacity:0, delay:3});
	TweenMax.to("#copytxt11", 0.5, {scale:0, delay:4});
	
	TweenMax.to("#copytxt12", 0.5, {opacity:1, scale:1, delay:5});
	TweenMax.to("#copytxt12", 0.5, {scale:0, delay:6});
	TweenMax.to("#bgimgparent1", 0.5, {opacity:0,x: 0, delay:5});
	TweenMax.to("#bgimgparent2", 0.5, {opacity:1,x: 0, delay:5});
	
	TweenMax.to("#copytxt13", 0.5, {opacity:1, scale:1, delay:7});
	TweenMax.to("#copytxt13", 0.5, {scale:0, delay:8});
	TweenMax.to("#bgimgparent2", 0.5, {opacity:0,x: 0, delay:7});
	TweenMax.to("#bgimgparent3", 0.5, {opacity:1,x: 0, delay:7});
	
	TweenMax.to("#copytxt14", 0.5, {opacity:1, scale:1, delay:9});
	TweenMax.to("#line", 0.5, {opacity:1, width:100, delay:9});
	TweenMax.to("#bgimgparent3", 0.5, {opacity:0,x: 0, delay:9});
	TweenMax.to("#bgimgparent4", 0.5, {opacity:1,x: 0, delay:9});
	
	TweenMax.to("#copyparent2", 0.5, {opacity:1, y:0, delay:10});
	
	TweenMax.to("#ctaparent", 0.5, {scale:1.2, delay:11});
	TweenMax.to("#ctaparent", 0.5, {scale:1, delay:11.2});
	
	eventshandler();
}
function eventshandler(){
	$("#container").click(function(){
		window.open("https://www.google.com/");
	});
	$("#ctaparent").click(function(){
		window.open("https://in.yahoo.com/?p=us");
	});
}