// Main

var MyApp = {

    onlyNumbers : function() {
        $('.only-numbers').on('keypress', function(event) {
            var numbers = /[0-9]/g;
            var key = String.fromCharCode(event.which);
            if ($.inArray(event.keyCode) >= 0 || numbers.test(key)) {
                return true;
            }
            return false;
        });
    },
    onlyLetters : function () {
        $('.only-letters').on('keypress', function(event) {
            var englishAlphabetAndWhiteSpace = /[A-Za-z- ]/g;
            var arr_latin_character = [8,37,39,193,225,200,232,205,237,211,243,218,250,209,241];
            var key = String.fromCharCode(event.which);
            if ($.inArray(event.keyCode, arr_latin_character) >= 0 || englishAlphabetAndWhiteSpace.test(key)) {
                return true;
            }
            return false;
        });
    },
}

$(function () {

    if ($('.only-numbers').length) {
        MyApp.onlyNumbers();
    }

    if ($('.only-letters').length) {
        MyApp.onlyLetters();
    }

});




//new

"use strict";function Dialog(e,t,s,n){this.dialogEl=e,this.overlayEl=t,this.focusedElBeforeOpen;var o=this.dialogEl.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');this.focusableEls=Array.prototype.slice.call(o),this.firstFocusableEl=this.focusableEls[0],this.lastFocusableEl=this.focusableEls[this.focusableEls.length-1],this.addEventListeners(s,n),this.close()}for(var changeAnchorToButton=function(e){var t=document.createElement("button");t.setAttribute("type","button"),t.innerHTML=e.innerHTML,e.id&&(t.id=e.id);for(var s=0;s<e.classList.length;s++)t.classList.add(e.classList[s]);var n=e.parentNode;n.replaceChild(t,e)},anchorButtons=document.getElementsByClassName("anchorButton"),i=0;i<anchorButtons.length;i++)changeAnchorToButton(anchorButtons[i]);Dialog.prototype.open=function(){var e=this;this.dialogEl.removeAttribute("aria-hidden"),this.overlayEl.removeAttribute("aria-hidden"),this.focusedElBeforeOpen=document.activeElement,this.dialogEl.addEventListener("keydown",function(t){e.handleKeyDown(t)}),this.overlayEl.addEventListener("click",function(){e.close()}),this.firstFocusableEl.focus()},Dialog.prototype.close=function(){this.dialogEl.setAttribute("aria-hidden",!0),this.overlayEl.setAttribute("aria-hidden",!0),this.focusedElBeforeOpen&&this.focusedElBeforeOpen.focus()},Dialog.prototype.handleKeyDown=function(e){function t(){document.activeElement===n.firstFocusableEl&&(e.preventDefault(),n.lastFocusableEl.focus())}function s(){document.activeElement===n.lastFocusableEl&&(e.preventDefault(),n.firstFocusableEl.focus())}var n=this,o=9,r=27;switch(e.keyCode){case o:if(1===n.focusableEls.length)return void e.preventDefault();e.shiftKey?t():s();break;case r:n.close()}},Dialog.prototype.addEventListeners=function(e,t){for(var s=this,n=document.querySelectorAll(e),o=0;o<n.length;o++)n[o].addEventListener("click",function(){s.open()});for(var r=document.querySelectorAll(t),o=0;o<r.length;o++)r[o].addEventListener("click",function(){s.close()})};var dialogOverlay=document.querySelector(".dialog-overlay"),navDialogEl=document.querySelector(".dialog--nav");new Dialog(navDialogEl,dialogOverlay,".site__nav__open",".site__nav__close");var consoleMessages=["Hi there :)","👀 I 👀 see 👀 you 👀","Hope you're having a great day 😊","How do you comfort a JavaScript bug? You console it 😎"],consoleMessage=consoleMessages[Math.floor(Math.random()*consoleMessages.length)];console.log(consoleMessage),"serviceWorker"in navigator&&navigator.serviceWorker.register("/assets/js/serviceWorker.js");var searchFormEl=document.getElementById("search-form");if(searchFormEl){var get=function(e){return new Promise(function(t,s){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){200==n.status?t(JSON.parse(n.response)):s(Error(n.statusText))},n.onerror=function(){s(Error("Network Error"))},n.send()})},createExcerptEl=function(e){function t(e){var t=e;return t=t.replace(/<(?:.|\n)*?>/gm,""),t=t.substring(0,300)}function s(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=e.split("T")[0],n=s.split("-")[0],o=t[parseInt(s.split("-")[1])-1],r=s.split("-")[2];return o+" "+r+", "+n}var n='<article class="excerpt m-b-md p-b-md">\n            <header class="excerpt__header m-b-sm">\n                <h2 class="excerpt__title h2 no-ul">\n                    <a href="'+e.url+'">'+e.title+'</a>\n                </h2>\n                <div class="post__meta">\n                    <em>'+s(e.published_at)+'</em>\n                </div>\n            </header>\n            <div class="excerpt__body">'+t(e.html)+"...</div>\n        </article>\n        ";return n},getPosts=function(e){function t(t){var s=[];return t.forEach(function(t){t.title.toLowerCase().indexOf(e.toLowerCase())>-1&&s.push(t)}),s}function s(e){var s=[],n=t(e.posts);n.forEach(function(e){return s.push(createExcerptEl(e))});var o='<span class="message--count"><span>'+s.length+" posts</span> were found.</span>";searchResultsEl.innerHTML=o+s.join("")}function n(e){console.log("error"),searchResultsEl.innerHTML='<span class="message--error">Oops! There was an error...</span>'}var o={limit:"all",include:"tags"};get(ghost.url.api("posts",o)).then(function(e){return s(e)}).catch(function(e){return n(e)})},searchResultsEl=document.getElementById("search-results");searchFormEl.addEventListener("submit",function(e){e.preventDefault(),searchResultsEl.innerHTML='<span class="message--default">Searching...</span>';var t=document.getElementById("search-form__input").value;getPosts(t)})}
