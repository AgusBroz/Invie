var width = window.matchMedia('(max-width: 770px)');

videoBtn = document.getElementById("video-btn");
videoContainer = document.getElementById("video-container");
burgerBtn=document.getElementById("burger");
menu=document.getElementById("menu");
body = document.body
swipeArea = document.getElementById("swipe-area");

width.addListener(mediaQuery);

function mediaQuery(){
    if(width.matches){
    burgerBtn.addEventListener("touchstart",toggleMenu);
    videoContainer.classList.add("video-active");
    videoBtn.removeEventListener("click", toggleVideo);
    }
    else{
    burgerBtn.removeEventListener("touchstart", toggleMenu);
    menu.classList.remove("menu-active");
    burgerBtn.classList.remove("icon-cancel-circle");
    videoBtn.addEventListener("click", toggleVideo);
    }
}   
function toggleMenu(event){
    menu.classList.toggle("menu-active");
    body.classList.toggle("body-scroll");
    burgerBtn.classList.toggle("icon-cancel-circle");
}
function showMenu(){
    menu.classList.add("menu-active");
    body.classList.add("body-scroll");
    burgerBtn.classList.add("icon-cancel-circle");
}
function hideMenu(){
    menu.classList.remove("menu-active");
    body.classList.remove("body-scroll");
    burgerBtn.classList.remove("icon-cancel-circle");
}
function toggleVideo(event){
    videoContainer.classList.toggle("video-active");
}

mediaQuery();
var blazy = new Blazy({
    selector:'img'
});

//console.log(window.devicePixelRatio);

/* Gestures */
var gestures = new Hammer(swipeArea);
var bodyGestures = new Hammer(body);
gestures.on("swiperight", showMenu);
bodyGestures.on("swipeleft", hideMenu);
