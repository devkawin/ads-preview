window.addEventListener('load', loadcreative);

var bgimg = [];
var video = [];
var exiturl = [];

function loadcreative() {
    if (Enabler.isInitialized()) {
        getData();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, getData);
    }
}

function getData() {
    /*bgimg.push("bgimg1.png");
    video.push("video.mp4");
    exiturl.push("https://www.pbs.org/wgbh/masterpiece/shows/all-creatures-great-and-small/#");*/
	
	Enabler.setProfileId(10596712);
    var devDynamicContent = {};

    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250 = [{}];
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0]._id = 0;
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].image_url = {};
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].image_url.Type = "file";
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].image_url.Url = "https://s0.2mdn.net/ads/richmedia/studio/37845449/37845449_20210124243201661_bgimg1.png";
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].video_url = {};
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].video_url.Type = "video";
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].video_url.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/ca5cdc8c771e5474/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3755954919/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/858DE741FB50A1CC81C45DD86E20433BB580B02C.2E5366679AC6459A8BA2CD3888EC7C0C432E2A11/key/ck2/file/file.mp4";
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].default = false;
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].exit_url = {};
    devDynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].exit_url.Url = "https://www.pbs.org/wgbh/masterpiece/shows/all-creatures-great-and-small/#";
    Enabler.setDevDynamicContent(devDynamicContent);
	
	bgimg.push(dynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].image_url.Url);
	video.push(dynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].video_url.Progressive_Url);
	exiturl.push(dynamicContent.SJIA_Test_970x250_SJIA_Test_970x250[0].exit_url.Url);

    setupDom();
}

function setupDom() {
    document.getElementById('bgimg').addEventListener('click', adclick);

    document.getElementById('bgimg').src = bgimg[0];
    document.getElementsByTagName("video")[0].src = video[0];

    startAnimation();
}

function adclick() {
    Enabler.exitOverride("creativeblock", exiturl[0]);
}

function startAnimation() {
    document.getElementById('maincontainer').style.transition = "0.5s ease 0s";
    document.getElementById('maincontainer').style.opacity = "1";
}