window.addEventListener('load', assignData);

function assignData() {
    addEvents(); /*swipeEventLeft(); swipeEventRight();*/
    document.getElementById("maincontainer").style.display = "block";
	document.getElementById("logo").src = "netflix-logo.png";
	document.getElementsByTagName("video")[0].src = "video.mp4";
	
    setTimeout(function() {
        document.getElementById("maincontainer").style.opacity = "1";
        document.getElementById("maincontainer").style.transition = "0.5s linear 0s";
    }, 500);

    var titles = ["Pandemic", "Handsome Sibilings", "Sex Education", "Horse Girl", "Miss Americana", "Marriage Story", "Locke & Key", "My Holo Love", "The Two Popes", "Money Heist","Pandemic", "Handsome Sibilings"];

    document.getElementById("maincontainer").style.backgroundColor = "#000";
	document.getElementById("cardcontainer").style.transform = "translateX(0px)";
	
    for (var i = 0; i < 12; i++) {
		document.getElementsByClassName("playparents")[i].style.display = "none";
        document.getElementById("cardimg" + (i + 1)).src = "card" + (i + 1) + ".png";
        document.getElementById("titlecopy" + (i + 1)).innerHTML = titles[i];
        document.getElementById("seasoncopy" + (i + 1)).innerHTML = "98% Match <span>NC16</span> ih 25m";
        document.getElementById("typecopy" + (i + 1)).innerHTML = "Summer Intimate Inspiring";
    }
    document.getElementById("leftarrow").innerHTML = "&#8249;";
    document.getElementById("rightarrow").innerHTML = "&#8250;";
}

function addEvents() {
    for (var j = 0; j < 12; j++) {
        document.getElementsByClassName("cards")[j].addEventListener('mouseenter', cardhover);
        document.getElementsByClassName("cards")[j].addEventListener('mouseleave', cardleave);
    }
    document.getElementById("rightarrowbar").addEventListener('click', rightarrowclick);
    document.getElementById("leftarrowbar").addEventListener('click', leftarrowclick);
	document.getElementById("adcontainer").addEventListener('click', adclick);
}

function cardhover(e) {
    var getid = e.target.id;

    var getnum = getid.replace(/[a-zA-Z]/g, '');
	//console.log("Mouse enter " + getnum);
	document.getElementById("card" + getnum).style.zIndex = "3";
    document.getElementById("elementsholder" + getnum).style.opacity = "1";
    document.getElementById("card" + getnum).style.transform = "scale(1.13)";
    document.getElementById("gradient" + getnum).style.opacity = "1";
    document.getElementById("gradient" + getnum).style.transition = "0.5s linear 0s";
    document.getElementById("playicon" + getnum).style.color = "#ff0000";
    document.getElementById("playicon" + getnum).style.transition = "0.5s linear 0.5s";
    if (getnum == 1 || getnum == 3 || getnum == 5 || getnum == 8 || getnum == 7 || getnum == 9 || getnum == 11) {
        document.getElementById("card" + getnum).style.margin = "0px 23px 5px 0px";
    }
	document.getElementById("card" + getnum).style.transition = "0.5s ease-out 0s";
    document.getElementById("elementsholder" + getnum).style.transition = "0.5s ease-out 0s";
}

function cardleave(e) {
    var getid = e.target.id;
    var getnum = getid.replace(/[a-zA-Z]/g, '');

    //console.log("Mouse leave " + getnum);
	document.getElementById("card" + getnum).style.zIndex = "2";
    document.getElementById("elementsholder" + getnum).style.opacity = "0";
    document.getElementById("card" + getnum).style.transform = "scale(1)";
    document.getElementById("gradient" + getnum).style.opacity = "0";
    document.getElementById("gradient" + getnum).style.transition = "0.5s linear 0s";
    document.getElementById("playicon" + getnum).style.color = "#fff";
    document.getElementById("playicon" + getnum).style.transition = "0.5s linear 0.5s";
    if (getnum == 1 || getnum == 3 || getnum == 5 || getnum == 8 || getnum == 7 || getnum == 9 || getnum == 11) {
        document.getElementById("card" + getnum).style.margin = "0px 5px 5px 0px";
			if(getnum == 1 || getnum == 7){document.getElementById("card" + getnum).style.margin = "0px 5px 5px 10px";}
    }
    document.getElementById("card" + getnum).style.transition = "0.5s ease-out 0s";
    document.getElementById("elementsholder" + getnum).style.transition = "0.5s ease-out 0s";
}

function rightarrowclick() { var ce = document.getElementById("cardcontainer");
    if (ce.style.transform == "translateX(0px)"){ce.style.transform = "translateX(-262px)";}
	else if (ce.style.transform == "translateX(-262px)"){ce.style.transform = "translateX(-522px)";}
    ce.style.transition = "1s ease-out 0s";
}
function leftarrowclick() { var ce = document.getElementById("cardcontainer");
	if (ce.style.transform == "translateX(-262px)"){ce.style.transform = "translateX(0px)";}
	else if (ce.style.transform == "translateX(-522px)"){ce.style.transform = "translateX(-262px)";}
	ce.style.transition = "1s ease-out 0s";
}

/*function swipeEventLeft(e){
	$("#cardcontainer").on("swipeleft",function(){ var ce = document.getElementById("cardcontainer");
    if (ce.style.transform == "translateX(0px)"){ce.style.transform = "translateX(-262px)";}
	else if (ce.style.transform == "translateX(-262px)"){ce.style.transform = "translateX(-522px)";}
	ce.style.transition = "1s ease-out 0s";
  });
}
function swipeEventRight(e){
	$("#cardcontainer").on("swiperight",function(){ var ce = document.getElementById("cardcontainer");
	if (ce.style.transform == "translateX(-262px)"){ce.style.transform = "translateX(0px)";}
	else if (ce.style.transform == "translateX(-522px)"){ce.style.transform = "translateX(-262px)";}
	ce.style.transition = "1s ease-out 0s";
  });
}*/

var clickurls = [];
clickurls.push("https://www.google.com");
clickurls.push("https://www.google.com/card1");
clickurls.push("https://www.google.com/card2");
clickurls.push("https://www.google.com/card3");
clickurls.push("https://www.google.com/card4");
clickurls.push("https://www.google.com/card5");
clickurls.push("https://www.google.com/card6");
clickurls.push("https://www.google.com/card7");
clickurls.push("https://www.google.com/card8");
clickurls.push("https://www.google.com/card9");
clickurls.push("https://www.google.com/card10");
clickurls.push("https://www.google.com/card11");
clickurls.push("https://www.google.com/card12");

function adclick(e){
    var cardid = e.target.id;
	cardid = cardid.replace(/[a-zA-Z]/g, '');
	if(cardid==""){window.open(clickurls[0]);}
	else{window.open(clickurls[cardid]);}
}