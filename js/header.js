var wrapperOfLogo = document.getElementsByClassName('wrapper-of-logo')[0];
var wrapperOfLogoWidth = wrapperOfLogo.offsetWidth;
var bodyWidth = document.body.offsetWidth;
var notification = document.getElementsByClassName('wrapper-of-notification')[0];
var wrapperOfUser = document.getElementsByClassName('wrapper-of-user')[0];

wrapperOfLogo.style.left = bodyWidth/2 - wrapperOfLogoWidth/2 + 'px';
notification.style.left = parseInt(getComputedStyle(wrapperOfLogo).left) -
parseInt(getComputedStyle(notification).width) + 47 + 'px';

window.addEventListener("resize", function () {
	wrapperOfLogoWidth = wrapperOfLogo.offsetWidth;
	bodyWidth = document.body.offsetWidth;
	wrapperOfLogo.style.left = bodyWidth/2 - wrapperOfLogoWidth/2 + 'px';
	notification.style.left = parseInt(getComputedStyle(wrapperOfLogo).left) -
	parseInt(getComputedStyle(notification).width) + 47 + 'px';
})
