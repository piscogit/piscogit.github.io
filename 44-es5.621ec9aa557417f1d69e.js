!function(){function i(i,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{wHD8:function(t,n,o){"use strict";o.r(n),o.d(n,"ion_img",(function(){return s}));var e=o("A36C"),r=o("Zgba"),s=function(){function t(i){var n=this;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Object(e.o)(this,i),this.ionImgWillLoad=Object(e.g)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.g)(this,"ionImgDidLoad",7),this.ionError=Object(e.g)(this,"ionError",7),this.onLoad=function(){n.ionImgDidLoad.emit()},this.onError=function(){n.ionError.emit()}}var n,o,s;return n=t,s=[{key:"watchers",get:function(){return{src:["srcChanged"]}}}],(o=[{key:"srcChanged",value:function(){this.addIO()}},{key:"componentDidLoad",value:function(){this.addIO()}},{key:"addIO",value:function(){var i=this;void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(t){t[0].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))}},{key:"load",value:function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}},{key:"removeIO",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"render",value:function(){return Object(e.j)(e.c,{class:Object(r.b)(this)},Object(e.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}},{key:"el",get:function(){return Object(e.k)(this)}}])&&i(n.prototype,o),s&&i(n,s),t}();s.style=":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}"}}])}();