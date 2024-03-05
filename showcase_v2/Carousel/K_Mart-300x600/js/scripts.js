// DYNAMIC AD VARIALS SETUP
var container = myFT.$("ft-default");
/*var leftarrow = document.querySelector("#left");
var rightarrow = document.querySelector("#right");

leftarrow.addEventListener("click", function () {
    for (var i = 0; i < 4; i++) {
        if (document.querySelectorAll("ft-slide")[i].style.transform == "translate(0px, 0px)") {
            document.querySelector("prodPrice" + (i + 1)).style.opacity = "1";
        }
    }
}, false);*/

// Update the following if required
//create a timeline instance
var loop = 0;

var myTimeline = gsap.timeline({
    repeat: loop,
    repeatDelay: 2
});

//get Flashtalking dynamic Val 

myFT.on('instantads', function() {

    var headline_Hex = myFT.$("#headline_txt");
    var subHeadline_Hex = myFT.$("#subHeadline_txt");
    var ctaTxt_Hex = myFT.$("#cta");
    var prodPrice_Hex = myFT.$(".prodPrice");
    var prodName_Hex = myFT.$(".prodName");
    var prodDesc_Hex = myFT.$(".prodDesc");
    
    var priceBg_Hex = myFT.$(".priceBg");
    var prodBg_Hex = myFT.$(".prodImg");
    /* var prodExit = myFT.$("ft-slide"); */
    //var slideBg_Hex  = myFT.$("#frame2"); 
    /*require(['carousel'], function () {
        var carousel = new myFT.Carousel({autorotate:'left 5s', enabletouch: true});
        var slide1 = new myFT.Slide({displaytime:'1s'}); //override autorotate defaults on a per-slide basis
        var slide2 = new myFT.Slide({displaytime:'1s'});
        var slide3 = new myFT.Slide({displaytime:'1s'});
        var slide4 = new myFT.Slide({displaytime:'1s'});
        
        carousel.appendChild(slide1);
        carousel.appendChild(slide2);
        carousel.appendChild(slide3); 
        carousel.appendChild(slide4);

        document.body.appendChild(carousel);
    });*/

    // Add dynamic clickTag
    container.on('click', function() {
        myFT.clickTag(1, myFT.instantAds.clickTag1_url);
    });

    headline_Hex[0].style.color = myFT.instantAds.headline_Hex;
    subHeadline_Hex[0].style.color = myFT.instantAds.subHeadline_Hex;
    ctaTxt_Hex[0].style.color = myFT.instantAds.ctaTxt_Hex;

    prodPrice_Hex[0].style.color = myFT.instantAds.prodPrice_Hex;
    prodPrice_Hex[1].style.color = myFT.instantAds.prodPrice_Hex;
    prodPrice_Hex[2].style.color = myFT.instantAds.prodPrice_Hex;
    prodPrice_Hex[3].style.color = myFT.instantAds.prodPrice_Hex;

    prodName_Hex[0].style.color = myFT.instantAds.prodName_Hex;
    prodName_Hex[1].style.color = myFT.instantAds.prodName_Hex;
    prodName_Hex[2].style.color = myFT.instantAds.prodName_Hex;
    prodName_Hex[3].style.color = myFT.instantAds.prodName_Hex;

    prodDesc_Hex[0].style.color = myFT.instantAds.prodDesc_Hex;
    prodDesc_Hex[1].style.color = myFT.instantAds.prodDesc_Hex;
    prodDesc_Hex[2].style.color = myFT.instantAds.prodDesc_Hex;
    prodDesc_Hex[3].style.color = myFT.instantAds.prodDesc_Hex;

    priceBg_Hex[0].style.backgroundColor = myFT.instantAds.priceBg_Hex;
    prodBg_Hex[0].style.backgroundColor = myFT.instantAds.prodBg_Hex;
    //debugger;

    let bgImg = document.getElementById('bg');
    bgImg.src = myFT.instantAds.bg_img;

    // let bgImg1 = new Image();
    // bgImg.src = myFT.instantAds.bg_img;
    // secondImage.style.backgroundImage = "url(" + bgImg.src + ")";
    bgImg.onload = function() {
        setupAnimation();
    }
    //src="images/bg.png"

    //setTimeout(function() {
    //  setupAnimation();
    //}, 200);
});

function setupAnimation() {

    myTimeline = gsap.timeline({ loop: loop }); 
    myTimeline.set('#adwrapper', { opacity: 0 }); 
    myTimeline.set('#frame1', { opacity: 0 }); 
    //myTimeline.set("#headline_txt",{ fontSize: 44, lineHeight: 42, opacity: 0 }); 
   //myTimeline.set("#subHeadline_txt", {fontSize: 44, lineHeight: 42, opacity: 0 }); 
    myTimeline.set('#carouselSec', { y: -400 }); 
    myTimeline.set('#cta', { opacity: 0 });
    //animation goes here

    var dur = 0.5;
    var ease = "ease-in";

    myTimeline.addLabel("frame1", 0)
    myTimeline.to("#adwrapper", { duration: dur, opacity: 1, ease: ease }, "frame1");
    myTimeline.to("#frame1", { duration: dur, opacity: 1, ease: ease }, "frame1");
    //myTimeline.to("#headline_txt",{ duration: dur, fontSize: 44, lineHeight: 42, opacity: 1, ease: ease }, "frame1"); 
    //myTimeline.to("#subHeadline_txt", { duration: dur, fontSize: 44, lineHeight: 42, opacity: 1, ease: ease }, "frame1"); 
   
    myTimeline.addLabel("carouselSec", 2.2)
    myTimeline.to("#carouselSec", { duration: dur, y: 0, ease: ease }, "carouselSec"); 
    
    myTimeline.addLabel("Headline_Out", 2.7)
    myTimeline.to("#headline_txt", { duration: 0, fontSize: 28, top: 400, opacity: 0, ease: ease }, "Headline_Out");
    
    myTimeline.addLabel("Headline_Out", 2.7)
    myTimeline.to("#subHeadline_txt", { duration: 0, fontSize: 28, clip: "rect(0px,270px,0px,0)", top: 430, width: 270, ease: ease }, "Headline_Out"); 
    
    myTimeline.addLabel("Headline_In", 3)
    myTimeline.to("#headline_txt", { duration: dur, opacity: 1, ease: ease }, "Headline_In");
    
    myTimeline.addLabel("headline_txt_in", 3.5)
    myTimeline.to("#subHeadline_txt", { duration: dur+0.5, clip: "rect(0px,270px,40px,0)", ease: ease }, "headline_txt_in");
    

    myTimeline.addLabel("copyF2", 4.5)
    myTimeline.to("#cta",{ opacity: 1, ease: ease }, "copyF2");

    //CTAloop();
    
    function CTAloop() {
        let ctaAniAdd = setInterval(()=>{
            //console.log("Yes")
            myTimeline.to("#cta", { duration: 0.5, scale: 1.15, ease: "ease-in" });
            myTimeline.to("#cta", { duration: 0.5, scale: 1, ease: "ease-in" });            
        }
        , 3000); 
                        
    } 

    console.log(myTimeline.endTime());

    myFT.$("#cta")[0].classList.add('ctaScale');
    setTimeout(()=>{
        myFT.$("#cta")[0].classList.remove('ctaScale');
        
    }
    , 4000);

    
}
