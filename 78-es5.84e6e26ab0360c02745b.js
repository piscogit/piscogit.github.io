(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{F6zI:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n("OMvp"),o=function(t){var e,n,o,v,f=10*-l,p=0,m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,w=function(t){f=Object(i.l)(t),b(t)},h=function(){clearTimeout(v),v=void 0,n&&(j(!1),n=void 0)},E=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},b=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var o=Object(i.m)(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||O(n,a,c),j(!0)}if(t){var u=L.get(t);u&&(clearTimeout(u),L.delete(t));var l=r(t)?0:d;t.classList.remove(s),v=setTimeout((function(){O(t,a,c),v=void 0}),l)}n=t}},O=function(t,e,n){p=Date.now(),t.classList.add(s);var i=m&&c(t);i&&i.addRipple&&(T(),o=i.addRipple(e,n))},T=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},j=function(t){T();var e=n;if(e){var i=u-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),L.delete(e)}),u);L.set(e,o)}else e.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",(function(t){e=t.target,h()})),S.addEventListener("ionScrollEnd",(function(){e=void 0})),S.addEventListener("ionGestureCaptured",h),S.addEventListener("touchstart",(function(t){f=Object(i.l)(t),E(t)}),!0),S.addEventListener("touchcancel",w,!0),S.addEventListener("touchend",w,!0),S.addEventListener("mousedown",(function(t){var e=Object(i.l)(t)-l;f<e&&E(t)}),!0),S.addEventListener("mouseup",(function(t){var e=Object(i.l)(t)-l;f<e&&b(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",d=200,u=200,l=2500}}]);