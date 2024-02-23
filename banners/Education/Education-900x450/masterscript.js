$(document).ready(function(){
	
	$("#container").css({"display": "block"});
	
	$("#logoimg")[0].src="logo.png";
	$("#bgimg")[0].src="bgimg.jpg";
	$("#bgimg1")[0].src="bgimg1.png";
	$("#bgimg2")[0].src="bgimg2.jpg";
	$("#bgimg3")[0].src="bgimg3.jpg";
	$("#bgimg4")[0].src="bgimg4.jpg";
	$("#bgimg5")[0].src="bgimg5.jpg";
	$("#lionimg")[0].src="lion.gif";
	
	$("#alphaimg1")[0].src="Alphabets/A.png";
	$("#alphaimg2")[0].src="Alphabets/B.png";
	$("#alphaimg3")[0].src="Alphabets/C.png";
	$("#alphaimg4")[0].src="Alphabets/D.png";
	$("#alphaimg5")[0].src="Alphabets/E.png";
	$("#alphaimg6")[0].src="Alphabets/F.png";
	$("#alphaimg7")[0].src="Alphabets/G.png";
	$("#alphaimg8")[0].src="Alphabets/H.png";
	$("#alphaimg9")[0].src="Alphabets/I.png";
	$("#alphaimg10")[0].src="Alphabets/J.png";
	$("#alphaimg11")[0].src="Alphabets/K.png";
	$("#alphaimg12")[0].src="Alphabets/L.png";
	$("#alphaimg13")[0].src="Alphabets/M.png";
	$("#alphaimg14")[0].src="Alphabets/N.png";
	$("#alphaimg15")[0].src="Alphabets/O.png";
	$("#alphaimg16")[0].src="Alphabets/P.png";
	$("#alphaimg17")[0].src="Alphabets/Q.png";
	$("#alphaimg18")[0].src="Alphabets/R.png";
	$("#alphaimg19")[0].src="Alphabets/S.png";
	$("#alphaimg20")[0].src="Alphabets/T.png";
	$("#alphaimg21")[0].src="Alphabets/U.png";
	$("#alphaimg22")[0].src="Alphabets/V.png";
	$("#alphaimg23")[0].src="Alphabets/W.png";
	$("#alphaimg24")[0].src="Alphabets/X.png";
	$("#alphaimg25")[0].src="Alphabets/Y.png";
	$("#alphaimg26")[0].src="Alphabets/Z.png";
	
	$("#copytxt1").html("MAKE YOUR KIDS");
	$("#copytxt21").text("AWESOME!");
	$("#copytxt22").text("GENIUS!");
	$("#copytxt23").text("SHARP!");
	$("#copytxt24").text("BRILLIANT!");
	$("#copytxt3").text("Check out our Flash cards to educate your kids in a great way that they love it!");
	$("#sitenamecopy").text("MyFlashCards.co.uk");
	
	$(".copytxts").css({"color": "#ffffff"});
	
	$("#ctaparent").css({"background-color":"#00B0D6", "border": "2px solid #00B0D6"});
	$("#ctatxt").html("START LEARNING");
	$("#ctatxt").css({"color": "#ffffff"});
	
	animation();
		
	});

function animation(){
	
	TweenMax.to("#container", 0.5, {opacity:1, delay:0.5});
	TweenMax.to(".alphaparents", 0, {opacity:0});
	TweenMax.to(".bgimgparents", 0, {opacity:0, x:600});
	TweenMax.to("#bgimgparent1", 4, {opacity:1, x:600});
	TweenMax.to("#lion", 0, {x:200});
	TweenMax.to("#copytxt21", 0, {scale:0});
	TweenMax.to("#copytxt22", 0, {scale:0});
	TweenMax.to("#copytxt23", 0, {scale:0});
	TweenMax.to("#copytxt24", 0, {scale:0});
	TweenMax.to("#copytxt25", 0, {scale:0});
	TweenMax.to("#copyparent1", 0, {y:100});
	TweenMax.to("#copyparent3", 0, {y:100});
	TweenMax.to("#midoverlay", 0, {opacity:0, y:50});
	TweenMax.to("#rightsec", 0, {opacity:0});
	TweenMax.to("#ctaparent", 0, {scale:0});
	TweenMax.to("#logoparent", 0, {opacity:0, scale:0});
	TweenMax.to("#overlay", 0, {opacity:0});
	
	TweenMax.to("#overlay", 0.5, {opacity:1, delay:1.5});
	TweenMax.to("#rightsec", 0.5, {opacity:1, delay:1.5});
	TweenMax.to("#ctaparent", 0.5, {opacity:1, delay:1.5});
	TweenMax.to("#ctaparent", 0.5, {scale:1.2, delay:1.5});
	TweenMax.to("#ctaparent", 0.5, {scale:1, delay:2});
	TweenMax.to("#logoparent", 0.5, {opacity:1, scale:1,delay:1.5});
	TweenMax.to("#bgimgparent1", 4, {x:-600, delay:2.5});
	
	TweenMax.to("#bgimgparent2", 0.5, {opacity:1,x:0, delay:5});
	TweenMax.to("#midoverlay", 0.5, {opacity:1,y:0, delay:6});
	TweenMax.to("#copyparent1", 0.5, {y:0, ease:Bounce.easeOut, delay:6.2});
	
	TweenMax.to("#copytxt21", 0.5, {rotation:360, scale:1, delay:7});
	TweenMax.to("#copytxt21", 0.5, {scale:0, delay:9});
	TweenMax.to("#bgimgparent2", 0.5, {opacity:1, x:-650, delay:9});
	
	TweenMax.to("#bgimgparent3", 0.5, {opacity:1, x:0, delay:9.5});
	TweenMax.to("#copytxt22", 0.5, {rotation:360, scale:1, delay:9.5});
	
	TweenMax.to("#bgimgparent3", 0.5, {opacity:1, x:-650, delay:12});
	TweenMax.to("#copytxt22", 0.5, {scale:0, delay:12});
	
	TweenMax.to("#bgimgparent4", 0.5, {opacity:1, x:0, delay:12.5});
	TweenMax.to("#copytxt23", 0.5, {rotation:360, scale:1, delay:12.5});
	
	TweenMax.to("#bgimgparent4", 0.5, {opacity:1, opacity:1, x:-650, delay:15});
	TweenMax.to("#copytxt23", 0.5, {scale:0, delay:15});
	
	TweenMax.to("#bgimgparent5", 0.5, {opacity:1, x:0, delay:15.5});
	TweenMax.to("#copytxt24", 0.5, {rotation:360, scale:1, delay:15.5});
	
	TweenMax.to("#copyparent3", 0.5, {y:0, delay:17.5});
	
	TweenMax.to("#ctaparent", 0.5, {scale:1.2, delay:18.5});
	TweenMax.to("#ctaparent", 0.5, {scale:1, delay:19});
	
	TweenMax.to("#alphaparent1", 0.5, {opacity:1, delay:2});
	TweenMax.to("#alphaparent1", 0.5, {opacity:0, delay:2.5});
	TweenMax.to("#alphaparent2", 0.5, {opacity:1, delay:2.5});
	TweenMax.to("#alphaparent2", 0.5, {opacity:0, delay:3});
	TweenMax.to("#alphaparent3", 0.5, {opacity:1, delay:3});
	TweenMax.to("#alphaparent3", 0.5, {opacity:0, delay:3.5});
	TweenMax.to("#alphaparent4", 0.5, {opacity:1, delay:3.5});
	TweenMax.to("#alphaparent4", 0.5, {opacity:0, delay:4});
	TweenMax.to("#alphaparent5", 0.5, {opacity:1, delay:4});
	TweenMax.to("#alphaparent5", 0.5, {opacity:0, delay:4.5});
	TweenMax.to("#alphaparent6", 0.5, {opacity:1, delay:4.5});
	TweenMax.to("#alphaparent6", 0.5, {opacity:0, delay:5});
	TweenMax.to("#alphaparent7", 0.5, {opacity:1, delay:5});
	TweenMax.to("#alphaparent7", 0.5, {opacity:0, delay:5.5});
	TweenMax.to("#alphaparent8", 0.5, {opacity:1, delay:5.5});
	TweenMax.to("#alphaparent8", 0.5, {opacity:0, delay:6});
	TweenMax.to("#alphaparent9", 0.5, {opacity:1, delay:6});
	TweenMax.to("#alphaparent9", 0.5, {opacity:0, delay:6.5});
	TweenMax.to("#alphaparent10", 0.5, {opacity:1, delay:6.5});
	TweenMax.to("#alphaparent10", 0.5, {opacity:0, delay:7});
	TweenMax.to("#alphaparent11", 0.5, {opacity:1, delay:7});
	TweenMax.to("#alphaparent11", 0.5, {opacity:0, delay:7.5});
	TweenMax.to("#alphaparent12", 0.5, {opacity:1, delay:7.5});
	TweenMax.to("#alphaparent12", 0.5, {opacity:0, delay:8});
	TweenMax.to("#alphaparent13", 0.5, {opacity:1, delay:8});
	TweenMax.to("#alphaparent13", 0.5, {opacity:0, delay:8.5});
	TweenMax.to("#alphaparent14", 0.5, {opacity:1, delay:8.5});
	TweenMax.to("#alphaparent14", 0.5, {opacity:0, delay:9});
	TweenMax.to("#alphaparent15", 0.5, {opacity:1, delay:9});
	TweenMax.to("#alphaparent15", 0.5, {opacity:0, delay:9.5});
	TweenMax.to("#alphaparent16", 0.5, {opacity:1, delay:9.5});
	TweenMax.to("#alphaparent16", 0.5, {opacity:0, delay:10});
	TweenMax.to("#alphaparent17", 0.5, {opacity:1, delay:10});
	TweenMax.to("#alphaparent17", 0.5, {opacity:0, delay:10.5});
	TweenMax.to("#alphaparent18", 0.5, {opacity:1, delay:10.5});
	TweenMax.to("#alphaparent18", 0.5, {opacity:0, delay:11});
	TweenMax.to("#alphaparent19", 0.5, {opacity:1, delay:11});
	TweenMax.to("#alphaparent19", 0.5, {opacity:0, delay:11.5});
	TweenMax.to("#alphaparent20", 0.5, {opacity:1, delay:11.5});
	TweenMax.to("#alphaparent20", 0.5, {opacity:0, delay:12});
	TweenMax.to("#alphaparent21", 0.5, {opacity:1, delay:12});
	TweenMax.to("#alphaparent21", 0.5, {opacity:0, delay:12.5});
	TweenMax.to("#alphaparent22", 0.5, {opacity:1, delay:12.5});
	TweenMax.to("#alphaparent22", 0.5, {opacity:0, delay:13});
	TweenMax.to("#alphaparent23", 0.5, {opacity:1, delay:13});
	TweenMax.to("#alphaparent23", 0.5, {opacity:0, delay:13.5});
	TweenMax.to("#alphaparent24", 0.5, {opacity:1, delay:13.5});
	TweenMax.to("#alphaparent24", 0.5, {opacity:0, delay:14});
	TweenMax.to("#alphaparent25", 0.5, {opacity:1, delay:14});
	TweenMax.to("#alphaparent25", 0.5, {opacity:0, delay:14.5});
	TweenMax.to("#alphaparent26", 0.5, {opacity:1, delay:14.5});
	TweenMax.to("#alphaparent26", 0.5, {opacity:0, delay:16});
	TweenMax.to("#lion", 1, {opacity:1, x:0, delay:17});
	
	eventshandler();
}
function eventshandler(){
	$("#container").mouseover(function(){
		$("#ctaparent").css({"background-color": "#fff","transition": "0.2s linear 0s", "border":"2px solid #00B0D6", "transform":"scale(1.05)"});
		$("#ctatxt").css({"color": "#00B0D6","transition": "0.1s linear 0s"});
	});

	$("#container").mouseout(function(){
		$("#ctaparent").css({"background-color": "#00B0D6","transition": "0.2s linear 0s", "transform":"scale(1)"});
		$("#ctatxt").css({"color": "#fff","transition": "0.1s linear 0s"});
	});
	
	$("#container").click(function(){
		window.open("https://myflashcards.co.uk/welcome/flashcards");
	});
}