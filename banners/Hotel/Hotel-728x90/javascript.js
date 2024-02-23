$(document).ready(function(){
	console.log("Creative started to load...");
	$("#container").css({"display": "block"});
	$("#intro").css({"background": "#ffffff"});
	
	$("#logoimg")[0].src="logo.svg";
	$("#bgimg")[00].src="bgimg.png";
	$("#bgimg1")[00].src="bgimg1.jpg";
	$("#bgimg2")[0].src="bgimg2.jpg";
	$("#bgimg3")[0].src="bgimg3.jpg";
	
	$("#copytxt1").text("FIND YOUR BEST HOTELS IN");
	$("#copytxt2").text("UK!");
	$("#copytxt3").text("Liverpool");
	$("#copytxt4").text("Edinburgh");
	$("#copytxt5").text("Brighton");
	$("#copytxt6").text("FEEL THE BEST LUXURY STAY!"); 
	$("#promocopy").html("GET<br><b>30%</b><br>OFF"); 
	
	$("#copytxt1").css({"color": "#2B3B9E"});
	$("#copytxt2").css({"color": "#ffffff"});
	$("#copytxt3").css({"color": "#ffffff"});
	$("#copytxt4").css({"color": "#ffffff"});
	$("#copytxt5").css({"color": "#ffffff"});
	$("#promocopy").css({"color": "#ffffff"});
	
	$("#ctaparent").css({"background": "#2B3B9E"});
	$("#ctatxt").html("BOOK NOW &#9655;");
	$("#ctatxt").css({"color": "#ffffff"});
	animation();
});

function animation(){
	console.log("Animation started...");
	TweenMax.to("#container", 0.5, {opacity:1, delay:0.5});
	TweenMax.to(".frames", 0.5, {opacity:0});
	TweenMax.to(".end", 0.5, {opacity:0});
	TweenMax.from("#logoparent", 0.5, {y:-100, opacity:1,delay:1});
	TweenMax.from("#copyparent1", 0.5, {x:-450,delay:1});
	TweenMax.from("#copyparent2", 0.5, {x:500,delay:1});
	TweenMax.from("#promoparent", 0.5, {scale:0, opacity:1,delay:2});
	
	TweenMax.to("#copyparent1", 0.5, {x:-450,delay:5});
	TweenMax.to("#copyparent2", 0.5, {scale:0, y:20,delay:5});
	TweenMax.to("#promoparent", 0.5, {scale:0, opacity:1,delay:5});
	
	TweenMax.from("#frame1", 0.5, {opacity:1, x:100, delay:6});
	TweenMax.to("#imgparent1", 3, {y:-200, delay:7});
	TweenMax.to("#frame1", 0.5, {x:750, delay:11});
	
	TweenMax.from("#frame2", 0.5, {opacity:1, x:100, delay:11});
	TweenMax.to("#imgparent2", 3, {y:-200, delay:12});
	TweenMax.to("#frame2", 0.5, {x:750, delay:15});
	
	TweenMax.from("#frame3", 0.5, {opacity:1, x:100, delay:15});
	TweenMax.to("#imgparent3", 3, {y:-200, delay:16});
	TweenMax.to("#frame3", 0.5, {x:750, delay:19});
	
	TweenMax.to(".end", 0.5, {opacity:1, delay:19});
	TweenMax.to("#promoparent", 0.5, {bottom:0, scale:1,delay:20});
	TweenMax.from("#ctaparent", 0.5, {x:-750, ease:Bounce.easeOut, delay:21});
	eventshandler();
}
function eventshandler(){
	$("#container").mouseover(function(){
		$("#ctaparent").css({"transform": "scale(1.1)","transition": "0.1s linear 0s"});
	});
	$("#container").mouseout(function(){
		$("#ctaparent").css({"transform": "scale(1)","transition": "0.1s linear 0s"});
	});
	$("#container").click(function(){
		window.open("https://www.google.com/");
	});
	$("#ctaparent").click(function(){
		window.open("https://in.yahoo.com/?p=us");
	});
}