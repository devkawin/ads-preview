//var text1 = dynamicContent.TAR0181_dynamic_Prospecting_300x250[0].Copy_1;

var boilerplate = {};

boilerplate.loadFunction = function () {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
	}
}

function init() {
	if (Enabler.isPageLoaded()) {
		boilerplate.processAd();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, boilerplate.processAd);
	}
}

boilerplate.processAd = function() {
	Enabler.setProfileId(10501800);
    var devDynamicContent = {};

    devDynamicContent.TarongaZooDCOPhase2_160x600 = [{}];
    devDynamicContent.TarongaZooDCOPhase2_160x600[0]._id = 0;
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].unique_id = 1;
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].reporting_label = "Default";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].logo = {};
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].logo.Type = "file";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20191201221142871_logo_m_dubbo.png";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].logo_end = {};
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].logo_end.Type = "file";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].logo_end.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20191201221136858_logo_end_dubbo.png";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].bg_image = {};
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].bg_image.Type = "file";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].bg_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20210317165643276_Hippo_Encounter_autumn_a.jpg";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].bg_transition = "Slide in from left";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].end_bg_image = {};
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].end_bg_image.Type = "file";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].end_bg_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006638/60006638_20191201221130741_bg_end_dubbo.png";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].end_bg_transition = "Slide in from bottom";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].bg_color = "background: #e37700;";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].text1 = "Discover the wild";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].text1_styles = "40px\/#ffffff\/taronga_headlineregular";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].text2 = "On zoofari in dubbo";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].text2_styles = "40px\/#ffffff\/taronga_headlineregular";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].text3 = "Book your visit  online now*";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].text3_styles = "30px\/#ffffff\/taronga_headlineregular";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].tnc = "*Conditions apply";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].tnc_styles = "12px\/#ffffff";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].cta_text = "BOOK NOW";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].cta_styles = "font-size:18px; color:#ffffff;\/background:#6d253e;";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].leaf_color = "orange";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].exitUrl = {};
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].exitUrl.Url = "https://ticketsales.zoo.nsw.gov.au/Tickets/dubbo?utm_source=display&utm_medium=display_ad&utm_campaign=twpz_autumn_2021";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].start_date = {};
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].start_date.RawValue = "01/20/2020";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].start_date.UtcValue = 1579478400000;
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].end_date = {};
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].end_date.RawValue = "01/20/2022";
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].end_date.UtcValue = 1642636800000;
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].isDefault = true;
    devDynamicContent.TarongaZooDCOPhase2_160x600[0].isActive = true;
    Enabler.setDevDynamicContent(devDynamicContent);

	politeLoadImages();
	dyeElementsToTemplate();
}


function dyeElementsToTemplate() {
	var dyGlobal = dynamicContent.TarongaZooDCOPhase2_160x600[0];

	var assetPath = "https://s0.2mdn.net/creatives/assets/3518460/"; //Doubleclick asset library folder
	var leaf = [];
	if (dyGlobal.leaf_color == "green") {
		leaf = ['green1.png','green2.png'];
	} else if (dyGlobal.leaf_color == "blue") {
		leaf = ['blue1.png','blue2.png'];
	} else if (dyGlobal.leaf_color == "red") {
		leaf = ['red1.png','red2.png'];
	} else if (dyGlobal.leaf_color == "orange") {
		leaf = ['orange1.png','orange2.png'];
	} else {
		leaf = ['_blank.png','_blank.png'];
	}

	bgTransition = dyGlobal.bg_transition
	endBgTransition = dyGlobal.end_bg_transition
	t1.innerHTML = dyGlobal.text1;
	t2.innerHTML = dyGlobal.text2;
	t3.innerHTML = dyGlobal.text3;
	cta_copy.innerHTML = dyGlobal.cta_text;
	tnc.innerHTML = dyGlobal.tnc;

	bg_leaf1.src = assetPath+leaf[0];
	bg_leaf2.src = assetPath+leaf[1];
	bg_img.src = dyGlobal.bg_image.Url;
	bg_end_img.src = dyGlobal.end_bg_image.Url;
	logo_m.src = dyGlobal.logo.Url;
	logo_end.src = dyGlobal.logo_end.Url;

	bg_end.style.cssText = dyGlobal.bg_color;
	t1.style.cssText = dyGlobal.text1_styles;
	t2.style.cssText = dyGlobal.text2_styles;
	t3.style.cssText = dyGlobal.text3_styles;
	tnc.style.cssText = dyGlobal.tnc_styles;

	cta_style = dyGlobal.cta_styles.split("/");

	cta_copy.style.cssText = cta_style[0];
	cta.style.cssText = cta_style[1];

	exitUrl = dyGlobal.exitUrl.Url;
	boilerplate.clickTag();
}

//Clicktag
boilerplate.clickTag = function () {
	clickthrough.onclick = function () {
		Enabler.exitOverride('Background Exit', exitUrl);
	};
};

//Polite load images
function politeLoadImages(){ politeLoadAllImages(function(){
	startAnim();
});}
function politeLoadAllImages(onComplete) {
	images = {
	"logo_m": logo_m,
	"logo_end": logo_end,
	"bg_img": bg_img,
	"bg_end_img": bg_end_img,
	};

  var loadCount = 0;
  var imagesToLoad = 0;
  function finish(){
    loadCount++;
    if (loadCount === imagesToLoad) { onComplete(); }
  }
  for (var id in images) { imagesToLoad++; }
  for (var id in images) {
    var preloadImg = document.getElementById(id);
    preloadImg.onload = function(){ finish(); }
    preloadImg.setAttribute("src", images[id]);
  }
}

function startAnim(){

  mainTl = new TimelineMax();

  var animTime = 1,
      linear = linear,
      animTypeOut = Power2.easeOut,
      animTypeIn = Power2.easeIn,
      offsetDist = 10,
      bannerLength = bannerContainer.clientWidth,
	  bannerHeight = bannerContainer.clientHeight,
      bgImageLength = bannerLength - bg_img.width,
	  bgImageHeight = bannerHeight - bg_img.height,
	  endImageLength = bannerLength - bg_end_img.width,
	  endImageHeight = bannerHeight - bg_end_img.height,
      startPosX,
      endPosX,
	  startPosY,
      endPosY;

  var st1 = new SplitText(t1, {type:"lines"}),
      st2 = new SplitText(t2, {type:"lines"}),
      st3 = new SplitText(t3, {type:"lines"});

	var bgImg = {};
	var endImg = {};
	bgImg.pan = bgTransition;
	endImg.pan = endBgTransition;

	  if(bgImg.pan == "Slide in from bottom" ){
		bgImg.startPosY = bgImageHeight/2;
		bgImg.endPosY = bgImageHeight;
	  } else if( bgImg.pan == "Slide in from top" ){
		bgImg.startPosY = bgImageHeight/2;
		bgImg.endPosY = 0;
	  } else if( bgImg.pan == "Slide in from left" ){
		bgImg.startPosX = bgImageLength/2;
		bgImg.endPosX = 0;
	   } else if( bgImg.pan == "Slide in from right" ){
		bgImg.startPosX = bgImageLength/2;
		bgImg.endPosX = bgImageLength;
	  } else{
		bgImg.startPosX = 0; bgImg.startPosY = 0; bgImg.endPosX = 0; bgImg.endPosY = 0;
	  }

	 if(endImg.pan == "Slide in from bottom" ){
		endImg.startPosY = endImageHeight+40;
		endImg.endPosY = 0;
	  } else if( endImg.pan == "Slide in from top" ){
		endImg.startPosY = -40;
		endImg.endPosY = endImageHeight;
	  } else if( endImg.pan == "Slide in from left" ){
		endImg.startPosX = -40;
		endImg.endPosX = endImageLength;
	   } else if( endImg.pan == "Slide in from right" ){
		endImg.startPosX = endImageLength+40;
		endImg.endPosX = 0;
	  } else{
		endImg.startPosX = 0; endImg.startPosY = 0; endImg.endPosX = 0; endImg.endPosY = 0;
	  }

	mainTl
    .add( 'setup', 0 )
    .set( bg_img, { x:bgImg.endPosX, y:bgImg.endPosY })
    .set( [bg_img, bg_end_img, bg_leaf1, bg_leaf2, t1, t2, t3], { alpha: 1  })
    .set( [st1.lines,st2.lines], { y: 10 })
    .set( [logo_end, st3.lines, cta ], { y: 20 })
    .set( [bg_end_img], { x:endImg.startPosX, y: endImg.startPosY })
    .set( cta , { x:'-50%' })
    .set( [bg_img, bg_end_img, bg_leaf1, bg_leaf2, t1, t2, t3, st1.lines, st2.lines, logo_end, st3.lines, cta, bg_end_img ], { force3D:true , z: 0.01, rotationZ:0.01 })


    .add('start', 0 )
  	.from( bg_img, 8, { x:bgImg.startPosX, y:bgImg.startPosY }, "start")
  	.from( bg_leaf1, 2, { y:50, x:-150, rotation:60, ease:Power2.easeOut, transformOrigin:'0% 100%' }, "start+=0.5")
  	.from( bg_leaf2, 2, { y:50, x:150, rotation:-60, ease:Power2.easeOut, transformOrigin:'100% 100%' }, "start+=0.5")
  	.to( logo_m, 0.5, { alpha: 1 }, "start")

  	.add( "t1", "start+=1.5" )
  	.staggerTo( st1.lines, 1, { alpha: 1, y:0, ease:animTypeOut }, 0.2, "t1")

  	.add( "t2", "t1+=3" )
  	.staggerTo( st1.lines, 0.5, { alpha: 0, y:-offsetDist, ease:animTypeIn }, 0.1, "t2-=0.5")
  	.staggerTo( st2.lines, 1, { alpha: 1, y:0, ease:animTypeOut }, 0.2, "t2")

  	.add( "endFade", "t2+=2.5" )
  	.staggerTo( st2.lines, 0.5, { alpha: 0, y:-offsetDist, ease:animTypeIn }, 0.1, "endFade")

  	.add( "endframe", "endFade+=0.5" )
  	.to( bg_end, 1, { alpha: 1 }, "endframe")
  	.to( bg_end_img, 3, { x:endImg.endPosX, y:endImg.endPosY, ease: animTypeOut }, "endframe")
  	.to( logo_end, 1, { alpha: 1 , y:0, ease: animTypeOut }, "endframe+=0.5")
    .staggerTo( st3.lines, 1, { alpha: 1 , y:0, ease: animTypeOut }, 0.25,  "endframe+=0.75")
  	.to( cta, 1, { alpha: 1 , y:0, ease: animTypeOut }, "endframe+=1.25")
  	.to( tnc, 1, { alpha: 1 }, "endframe+=1.5")
	;

  clickthrough.onmouseover = function(){
    cta.classList.add("hover");
  }
	clickthrough.onmouseout = function(){
    cta.classList.remove("hover");
  }
}

//for different styling
/*function checkAlternative(){
//  copy.leaf = "capybara_design";
  if( copy.leaf == "capybara_design"){
    capybara_design();
  }
}

function capybara_design(){
  images.bg_end_img = "images/bg_end_capybara.png";
  document.getElementById("bannerContainer").classList.add("capybara");
  copy.leaf = "none";
}*/

window.onload = function () {
	boilerplate.loadFunction();
}
