$(document).ready(function() {
	getData();
});

function getData() {
    $("#container").css({
        "display": "block"
    });
    $("#logoimg")[0].src = "logo.png";
    $("#bgimg1")[0].src = "bgimg1.png";
    $("#bgimg2")[0].src = "bgimg2.png";
    $("#flightimg1")[0].src = "flight1.png";
    $("#flightimg2")[0].src = "flight2.png";
    $("#flightimg3")[0].src = "flight3.png";
    $("#hotelimg1")[0].src = "hotel1.png";
    $("#hotelimg2")[0].src = "hotel2.png";
    $("#hotelimg3")[0].src = "hotel3.png";

    $copytxt1 = "Book flights on best service providers";
    $copytxt2 = "Book best hotels for the luxurious stay";

    $("#ctatxt1").html("Book Flights");
    $("#ctatxt2").html("Book Hotels");

    $(".ctatxts").css({
        "color": "#fff"
    });
    $(".ctaparents").css({
        "background": "#4E853D",
        "border": "1px solid #4E853D"
    });

    textAni();
    animation();
}

function textAni() {
    $txtSplit1 = $copytxt1.split(" ");
    console.log($txtSplit1);
    for (var a = 0; a < $txtSplit1.length; a++) {
        $("#copyparent1").append('<div id="copytxt1' + (a + 1) + '" class="copytxts newcopytxts">' + $txtSplit1[a] + '</div>');
    }

    $txtSplit2 = $copytxt2.split(" ");
    console.log($txtSplit2);
    for (var i = 0; i < $txtSplit2.length; i++) {
        $("#copyparent2").append('<div id="copytxt2' + (i + 1) + '" class="copytxts newcopytxts">' + $txtSplit2[i] + '</div>');
    }
    $(".copytxts").css({
        "color": "#fff"
    });
}

function animation() {
    setTimeout(initialSetup, 0);
    setTimeout(showCreative, 500);
    setTimeout(frameStarts, 500);
    setTimeout(copyChange, 7000);
    setTimeout(frameChange, 10000);

    function initialSetup() {
        $("#frame1").css({
            "opacity": "0"
        });
        $("#frame2").css({
            "transform": "translatex(300px)"
        });
        $(".copyparents").css({
            "opacity": "0"
        });
        $(".bgimgparents").css({
            "transform": "scale(1.3)"
        });
        $("#logoparent").css({
            "transform": "scale(0)"
        });
        $(".partnerimgparents").css({
            "opacity": "0",
            "transform": "scale(2)"
        });

        $(".newcopytxts").css({
            "opacity": "0",
            "transform": "translateY(20px)"
        });
        $(".ctaparents").css({
            "opacity": "0",
            "transform": "translateX(-20px)"
        });
    }

    function showCreative() {
        $("#container").css({
            "opacity": "1",
            "transition": "0.5s linear 0s"
        });
    }

    function frameStarts() {
        $("#frame1").css({
            "opacity": "1",
            "transition": "1s linear 0s"
        });
        $("#logoparent").css({
            "transform": "scale(1)",
            "transition": "0.5s linear 0s"
        });
        $("#flightimgparent1").css({
            "opacity": "1",
            "transform": "scale(1)",
            "transition": "0.2s linear 3s"
        });
        $("#flightimgparent2").css({
            "opacity": "1",
            "transform": "scale(1)",
            "transition": "0.2s linear 3.2s"
        });
        $("#flightimgparent3").css({
            "opacity": "1",
            "transform": "scale(1)",
            "transition": "0.2s linear 3.4s"
        });
        $("#bgimgparent1").css({
            "transform": "scale(1)",
            "transition": "5s linear 0s"
        });
        $k = 0;
        $("#copyparent1").css({
            "opacity": "1"
        });
        for (var j = 0; j < $txtSplit1.length; j++) {
            $k = $k + 0.3;
            console.log(j, $k);
            $("#copytxt1" + (j + 1)).css({
                "opacity": "1",
                "transform": "translateY(0px)",
                "transition": "0.5s linear " + $k + "s"
            });
        }

        $("#ctaparent1").css({
            "opacity": "1",
            "transform": "translateX(0px)",
            "transition": "1s linear 1s"
        });
    }

    function copyChange() {
        $("#copyparent1").css({
            "opacity": "0",
            "transform": "translateY(20px)",
            "transition": "1s linear 0s"
        });
        $("#ctaparent1").css({
            "opacity": "0",
            "transform": "translateX(-20px)",
            "transition": "1s linear 0s"
        });
        $(".flightimgparents").css({
            "opacity": "0",
            "transform": "scale(2)",
            "transition": "1s linear 0s"
        });
        $("#frame1").css({
            "transform": "translatex(-300px)",
            "transition": "1s linear 1.5s"
        });
        $("#frame2").css({
            "transform": "translatex(0px)",
            "transition": "1s linear 1.5s"
        });
    }

    function frameChange() {
        $l = 0;
        $("#frame1").css({
            "transform": "translatex(0px)",
            "transition": "0s linear 0s"
        });
        $("#copyparent2").css({
            "opacity": "1"
        });
        $("#hotelimgparent1").css({
            "opacity": "1",
            "transform": "scale(1)",
            "transition": "0.2s linear 3s"
        });
        $("#hotelimgparent2").css({
            "opacity": "1",
            "transform": "scale(1)",
            "transition": "0.2s linear 3.2s"
        });
        $("#hotelimgparent3").css({
            "opacity": "1",
            "transform": "scale(1)",
            "transition": "0.2s linear 3.4s"
        });
        $("#bgimgparent2").css({
            "transform": "scale(1)",
            "transition": "5s linear 0s"
        });
        for (var m = 0; m < $txtSplit2.length; m++) {
            $l = $l + 0.2;
            console.log(m, $l);
            $("#copytxt2" + (m + 1)).css({
                "opacity": "1",
                "transform": "translateY(0px)",
                "transition": "0.5s linear " + $l + "s"
            });
        }
        $("#ctaparent2").css({
            "opacity": "1",
            "transform": "translateX(0px)",
            "transition": "1s linear 0s"
        });
    }
    eventshandler();
}

function eventshandler() {
    $("#container").mouseover(function() {
        $(".ctaparents").css({
            "background-color": "#fff",
            "transition": "0.2s linear 0s",
            "border": "1px solid #4E853D"
        });
        $(".ctatxts").css({
            "color": "#4E853D",
            "transition": "0.2s linear 0s"
        });
    });
    $("#container").mouseout(function() {
        $(".ctaparents").css({
            "background-color": "#4E853D",
            "transition": "0.2s linear 0s"
        });
        $(".ctatxts").css({
            "color": "#fff",
            "transition": "0.2s linear 0s"
        });
    });
    $("#container").click(function() {
        window.open("https://www.google.co.in/");
    });
}