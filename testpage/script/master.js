window.onload = function() {
    var ifmurl = window.location.href;
    ifmurl = ifmurl.split("?")[1];
    document.querySelector(".ifrm").src = ifmurl;
    var width = ifmurl.split("/");
    width = width[width.length - 2].split("-")[1];
    var mob = width;
    //console.log(width);
    var height = width.split("x")[1];
    width = width.split("x")[0];
    document.querySelector(".ifrm").style.width = width + "px";
    document.querySelector(".ifrm").style.height = height + "px";
    if (mob == "300x50" || mob == "320x50") {
        document.querySelector("#topcontainer").style.display = "none";
        document.querySelector("#bottomcontainer").style.display = "none";
        document.querySelector("#sidebarcontainer").style.display = "none";
        document.querySelector("#mobilecontainer").style.display = "block";
        document.querySelector(".ifrm").setAttribute("class", "ifrm position hcenter");
        document.querySelector(".ifrm").style.top = "56px";
        document.querySelector(".ifrm").style.position = "fixed";
        document.querySelector("#mobilecontainer").style.position = "fixed";
    } else if (parseInt(width) <= 400) {
        document.querySelector(".ifrm").style.right = "150px";
        document.querySelector(".ifrm").style.top = "220px";
        document.querySelector("#sidebarcontainer").style.display = "none";
        document.querySelector("#bottomcontainer").style.top = "40px";
    } else if (parseInt(height) <= 100) {
        document.querySelector(".ifrm").setAttribute("class", "ifrm position hcenter");
        document.querySelector(".ifrm").style.top = "220px";
        document.querySelector("#bottomcontainer").style.top = "148px";
        document.querySelector("#sidebarcontainer").style.top = "350px";
    } else if (parseInt(height) > 100) {
        document.querySelector(".ifrm").setAttribute("class", "ifrm position hcenter");
        document.querySelector(".ifrm").style.top = "220px";
        document.querySelector("#bottomcontainer").style.top = "295px";
        document.querySelector("#sidebarcontainer").style.top = "500px";
    }
}
