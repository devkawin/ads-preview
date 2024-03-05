function init(){
	var background_img = myFT.$("#background_img")[0];
	var logo           = myFT.$("#logo")[0];
	var cta 		   = myFT.$("#cta")[0];
	var headline  	   = myFT.$("#headline")[0];
	var sub_headline   = myFT.$("#sub_headline")[0];

	container[0].style.opacity = 1;

	//START ANIMATION
	//-----------------------------------------------------
	var animation = new TimelineLite();
	animation.from(background_img, 0.6, {scale:1.3})
		     .from(logo, 0.5, {top:-30})
			 .from(cta, 0.5, {bottom:-40}, "-=.5")
			 .from(headline, 0.5, {left:-251})
			 .from(sub_headline, 0.5, {left:-251}, "-=.5");
	//-----------------------------------------------------
	//END ANIMATION
}