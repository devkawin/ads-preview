window.addEventListener('load', function () {
    document.getElementById("outercontainer").style.display = "block";
    document.getElementById("logoimg").src = "logo.png";
    document.getElementById("bgimg1").src = "bgimg1.png";
    document.getElementById("bgimg2").src = "bgimg2.png";
    document.getElementById("copytxt1").innerHTML = "Looking to buy or sell your house?";
    document.getElementById("copytxt2").innerHTML = "Knowledge & Experience on your side.";
    document.getElementById("copytxt3").innerHTML = "You deserve the best, choose the right realtor.";
    document.getElementById("ctatxt").innerHTML = "View Properties ❯";
    ctaEvent();
    startAnimation();
});
function startAnimation() {
    setTimeout(setup, 0);
    setTimeout(adStarts, 500);
    setTimeout(copy2Switch, 2500);
    setTimeout(copy3Switch, 5500);

    function setup() {
        document.getElementById("copyparent2").style.opacity = "0";
        document.getElementById("copyparent3").style.opacity = "0";
        document.getElementById("ctaparent").style.transform = "scale(0)";
    }
    function adStarts() {
        document.getElementById("outercontainer").style.opacity = "1";
        document.getElementById("outercontainer").style.transition = "0.5s linear 0s";
    }
    function copy2Switch() {
        document.getElementById("copyparent1").style.opacity = "0";
        document.getElementById("copyparent1").style.transition = "0.5s linear 0s";
        document.getElementById("copyparent2").style.opacity = "1";
        document.getElementById("copyparent2").style.transition = "0.5s linear 0.5s";
    }
    function copy3Switch() {
        document.getElementById("copyparent2").style.opacity = "0";
        document.getElementById("copyparent2").style.transition = "0.5s linear 0s";
        document.getElementById("copyparent3").style.opacity = "1";
        document.getElementById("copyparent3").style.transition = "0.5s linear 0.5s";
        document.getElementById("ctaparent").style.transform = "scale(1)";
        document.getElementById("ctaparent").style.transition = "0.3s linear 1.5s";
    }
}
function ctaEvent() {
    document.getElementById("outercontainer").addEventListener("mouseover", ctaHover);
    document.getElementById("outercontainer").addEventListener("mouseleave", ctaLeave);
}
function ctaHover() {
    document.getElementById("ctaparent").style.backgroundColor = "#000000";
    document.getElementById("ctaparent").style.transition = "0.2s linear 0s";
    document.getElementById("ctatxt").style.color = "#ffffff";
    document.getElementById("ctatxt").style.transition = "0.2s linear 0s";
}
function ctaLeave() {
    document.getElementById("ctaparent").style.backgroundColor = "#ffffff";
    document.getElementById("ctaparent").style.transition = "0.2s linear 0s";
    document.getElementById("ctatxt").style.color = "#000000";
    document.getElementById("ctatxt").style.transition = "0.2s linear 0s";
}