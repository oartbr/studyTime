// ==UserScript==
// @name         Study Time
// @namespace    solucinator.com
// @homepageURL  http://solucinator.com
// @version      0.02
// @description  Block a list of site
// @author       alex
// @match        *://*.youtube.com/*
// @match        *://*.discordapp.com/*
// @match        *://*.roblox.com/*
// @icon         https://www.google.com/s2/favicons?domain=instagram.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @require      https://momentjs.com/downloads/moment.js
// @grant        GM_download
// ==/UserScript==
console.log(document.domain);
var sTime = moment().format('HH');
if(sTime >= 14 && sTime <= 18){
  document.location = "https://google.com";
  console.log(">>>>>>>>>>>>> current hour", sTime);
}


(function($){



})(jQuery);
