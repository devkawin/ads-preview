$(document).ready(function(){
	
	$("#container").css({"display": "block"});
	
	$("#logoimg")[0].src="logo.png";
	$("#bgimg")[00].src="hospital.jpg";
	$("#bgimg1")[00].src="bgimg1.jpg";
	$("#bgimg2")[0].src="bgimg2.jpg";
	$("#bgimg3")[0].src="bgimg3.jpg";
	
	$("#copytxt1").html("Heart Health<br>Super Hospitals!");
	$("#copytxt2").text("We serve patients a best treatment that can change their life in a different way");
	$("#copytxt3").text("Heart surgery experts");
	$("#copytxt4").text("Experience over 10 yrs");
	$("#copytxt5").text("Complete recovery");
	$("#copytxt6").text("HHSH is a Multi-Specialty Heart Health Hospital with Seven Branches in London"); 
	
	$("#copytxt1").css({"color": "#ffffff"});
	$("#copytxt2").css({"color": "#9BCC17"});
	$("#copytxt3").css({"color": "#ffffff"});
	$("#copytxt4").css({"color": "#ffffff"});
	$("#copytxt5").css({"color": "#ffffff"});
	$("#copytxt6").css({"color": "#148BCB"});
	
	$("#ctaparent").css({"background": "#148BCB"});
	$("#ctatxt").text("MAKE AN APPOINTMENT");
	$("#ctatxt").css({"color": "#fff"});
	animation();
});


function animation(){

	setTimeout(function(){
		$(".frames").css({"opacity": "0"});
		$("#end").css({"opacity": "0", "transform": "translate(400px, 0px)"});
		$("#copyparent1").css({"opacity": "0", "transform": "translate(0px, 0px)"});
		$("#copyparent2").css({"opacity": "0", "transform": "translate(0px, 20px)"});
	},0);
	
	setTimeout(function(){
		$("#container").css({"opacity": "1", "transition":"0.5s linear"});
		$("#logoparent").css({"transform": "translate(124px, 0px) scale(0.8)", "transition":"0.5s linear 1s"});
		$("#copyparent1").css({"opacity": "1", "transform": "translate(0px, -5px)", "transition":"0.5s linear 2s"});
		$("#copyparent2").css({"opacity": "1", "transform": "translate(0px, 0px)", "transition":"0.5s linear 3s"});
	},500);
	
	setTimeout(function(){
	$("#copyparent1").css({"transform": "translate(-300px, -12px)", "transition":"0.5s linear 3s"});
	$("#copyparent2").css({"transform": "translate(-300px, -1px)", "transition":"0.5s linear 3.5s"});
	},4500);
	
	setTimeout(function(){
	$("#bgimgparent").css({"opacity":"0", "transform": "translate(0px, 0px)", "transition":"0.5s linear 1s"});
	$("#frame1").css({"opacity":"1", "transform": "translate(0px, 0px)", "transition":"0.5s linear 1s"});
	$("#frame2").css({"opacity":"1", "transform": "translate(0px, 0px)", "transition":"0.5s linear 3s"});
	$("#frame3").css({"opacity":"1", "transform": "translate(0px, 0px)", "transition":"0.5s linear 5s"});
	},7500);
	
	setTimeout(function(){
	$("#frame1").css({"opacity":"0", "transform": "translate(0px, 0px)", "transition":"0.5s linear 0s"});
	$("#frame2").css({"opacity":"0", "transform": "translate(0px, 0px)", "transition":"0.5s linear 0s"});
	$("#frame3").css({"transform": "translate(-300px, 0px)", "transition":"0.5s linear 1s"});
	$("#bgimgparent").css({"opacity":"1", "transform": "translate(0px, 0px)", "transition":"0.5s linear 1s"});
	$("#end").css({"opacity":"1", "transform": "translate(0px, 0px)", "transition":"0.5s linear 1s"});
	$("#logoparent").css({"transform": "translate(120px, 0px) scale(0.7)", "transition":"0.5s linear 1s"});
	},13500);
	
	eventshandler();
}

function eventshandler(){
	$("#container").mouseover(function(){
		$("#ctaparent").css({"background-color": "#fff","transition": "0.1s linear 0s", "border":"2px solid #148BCB"});
		$("#ctatxt").css({"color": "#148BCB","transition": "0.1s linear 0s"});
	});
	$("#container").mouseout(function(){
		$("#ctaparent").css({"background-color": "#148BCB","transition": "0.1s linear 0s"});
		$("#ctatxt").css({"color": "#fff","transition": "0.1s linear 0s"});
	});
	$("#container").click(function(){
		window.open("https://www.google.com/");
	});
	$("#ctaparent").click(function(){
		window.open("https://in.yahoo.com/?p=us");
	});
}