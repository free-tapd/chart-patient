(function(){function a(h,g,b,e,c){var f=h.documentElement,d="orientationchange" in window?"orientationchange":"resize";var i=function(){var j=f.clientWidth;if(j>=e&&j<=b){f.style.fontSize=c*(j/b)+"px"}else{if(j>=b){f.style.fontSize=c+"px"}else{if(j<=e){f.style.fontSize=c*(e/b)+"px"}}}};g.addEventListener(d,i,false);h.addEventListener("DOMContentLoaded",i,false)}a(document,window,640,320,34.13)})();
/** 
 * 
 * 淘宝适配方案
 * 
 * 
 * */ 