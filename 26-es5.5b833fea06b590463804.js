!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{TUkU:function(t,o,r){"use strict";r.r(o),r.d(o,"Tab2PageModule",(function(){return w}));var i,c,a,s=r("TEn/"),u=r("ofXK"),l=r("3Pt+"),b=r("qtYk"),f=r("tyNb"),p=r("mrSG"),g=r("fXoL"),m=["fileInput"],d=["canvas1"],h=[{path:"",component:(i=function(){function t(n){e(this,t),this.config=n}var o,r,i;return o=t,(r=[{key:"selectImg",value:function(){this.fileInput.nativeElement.click()}},{key:"compress",value:function(e){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,t){var o=new FileReader;o.readAsDataURL(e.target.files[0]),o.onerror=function(e){return t(e)},o.onload=function(e){var t=new Image;console.log("Img without compression: "+e.target.result.toString().length),t.src=e.target.result.toString(),t.onload=function(){var e=document.createElement("canvas");e.width=250,e.height=150;var o=e.getContext("2d");o.drawImage(t,0,0,250,150);var r=o.canvas.toDataURL("image/png",1);console.log("Img with compression: "+r.length),n(r)}}})));case 1:case"end":return n.stop()}}),n)})))}},{key:"fileChange",value:function(e){return Object(p.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.compress(e);case 2:t=n.sent,this.selectedImage=t;case 4:case"end":return n.stop()}}),n,this)})))}}])&&n(o.prototype,r),i&&n(o,i),t}(),i.\u0275fac=function(e){return new(e||i)(g.Ib(s.d))},i.\u0275cmp=g.Cb({type:i,selectors:[["app-tab2"]],viewQuery:function(e,n){var t;1&e&&(g.wc(m,!0),g.wc(d,!0)),2&e&&(g.gc(t=g.Wb())&&(n.fileInput=t.first),g.gc(t=g.Wb())&&(n.canvas1=t.first))},decls:15,vars:3,consts:[["slot","start"],["slot","end"],["slot","icon-only","name","options"],[3,"fullscreen"],[3,"click"],["type","file","accept","image/*",3,"hidden","change"],["fileInput",""],[2,"height","50%","width","50%",3,"src"]],template:function(e,n){1&e&&(g.Nb(0,"ion-header"),g.Nb(1,"ion-toolbar"),g.Nb(2,"ion-buttons",0),g.Jb(3,"ion-menu-button"),g.Mb(),g.Nb(4,"ion-buttons",1),g.Nb(5,"ion-button"),g.Jb(6,"ion-icon",2),g.Mb(),g.Mb(),g.Nb(7,"ion-title"),g.qc(8,"Tab 2"),g.Mb(),g.Mb(),g.Mb(),g.Nb(9,"ion-content",3),g.Nb(10,"ion-button",4),g.Vb("click",(function(){return n.selectImg()})),g.qc(11,"Select Image"),g.Mb(),g.Nb(12,"input",5,6),g.Vb("change",(function(e){return n.fileChange(e)})),g.Mb(),g.Jb(14,"ion-img",7),g.Mb()),2&e&&(g.yb(9),g.dc("fullscreen",!0),g.yb(3),g.dc("hidden",!0),g.yb(2),g.dc("src",n.selectedImage))},directives:[s.B,s.zb,s.l,s.R,s.k,s.C,s.xb,s.u,s.D],styles:[""]}),i)}],v=((a=function n(){e(this,n)}).\u0275mod=g.Gb({type:a}),a.\u0275inj=g.Fb({factory:function(e){return new(e||a)},imports:[[f.j.forChild(h)],f.j]}),a),w=((c=function n(){e(this,n)}).\u0275mod=g.Gb({type:c}),c.\u0275inj=g.Fb({factory:function(e){return new(e||c)},imports:[[s.Bb,u.c,l.e,b.a,v]]}),c)}}])}();