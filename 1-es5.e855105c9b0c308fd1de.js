!function(){function t(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+EIm":function(t,a,i){"use strict";i.d(a,"a",(function(){return f}));var c=i("fXoL"),o=i("gVRd"),s=i("ofXK");function r(t,n){if(1&t){var e=c.Ob();c.Nb(0,"button",5),c.Vb("click",(function(){c.ic(e);var t=n.$implicit;return c.Xb(2).onActionBtnClick(t)})),c.qc(1),c.Mb()}if(2&t){var a=n.$implicit;c.nc("background",a.color),c.yb(1),c.sc(" ",a.desc," ")}}function d(t,n){if(1&t&&(c.Nb(0,"div",3),c.oc(1,r,2,3,"button",4),c.Mb()),2&t){var e=c.Xb();c.yb(1),c.dc("ngForOf",e.keysActions)}}function b(t,n){if(1&t){var e=c.Ob();c.Nb(0,"div",7),c.Nb(1,"button",8),c.Vb("click",(function(t){c.ic(e);var a=n.index,i=c.Xb().index,o=c.Xb();return o.onBtnItemClick(o.keysItems[i*o.columns.length+a],t)})),c.Nb(2,"span"),c.qc(3),c.Mb(),c.Mb(),c.Mb()}if(2&t){var a=n.index,i=c.Xb().index,o=c.Xb();c.yb(1),c.dc("id",i+a)("disabled",i*o.columns.length+a>o.keysItems.length-1),c.yb(1),c.Ab("handled",null==o.keysItems[i*o.columns.length+a]?null:o.keysItems[i*o.columns.length+a].isHandled),c.yb(1),c.rc(null==o.keysItems[i*o.columns.length+a]?null:o.keysItems[i*o.columns.length+a].item)}}function l(t,n){if(1&t&&(c.Nb(0,"div",3),c.oc(1,b,4,5,"div",6),c.Mb()),2&t){var e=c.Xb();c.yb(1),c.dc("ngForOf",e.columns)}}var u=function t(n,a){e(this,t),this.item=n,this.isHandled=a},f=function(){var t=function(){function t(){e(this,t),this.keysAction=new c.n,this._curIndex=0,this.text="kokoriko",this.keysItems=[]}return n(t,[{key:"ngOnInit",value:function(){var t,n,e=Math.sqrt(this.items.length);e%1==0?t=n=e:t=(n=Math.round(e)+1)*(n-1)>=this.items.length?n-1:n,this.rows=new Array(t),this.columns=new Array(n),this.keysItems=this.items.map((function(t){return new u(t._id,!1)}))}},{key:"getBtnItem",value:function(t,n){return(t+n).toString()}},{key:"onBtnItemClick",value:function(t,n){this.keysAction.emit({item:t.item,type:o.b.ItemClick,callback:function(n){t.isHandled=n.isHandled}})}},{key:"onActionBtnClick",value:function(t){var n=this,e={type:t.type,callback:function(t){var e=n.keysItems.find((function(n){return n.item===t.item}));e&&(e.isHandled=t.isHandled)}};this.keysAction.emit(e)}},{key:"curIndex",get:function(){var t=this._curIndex++;return console.log("CurrIndex: "+t),t}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-ckeyboard"]],inputs:{items:"items",keysActions:"keysActions"},outputs:{keysAction:"keysAction"},decls:3,vars:2,consts:[[1,"ck"],["class","ckrow",4,"ngIf"],["class","ckrow",4,"ngFor","ngForOf"],[1,"ckrow"],[3,"background","click",4,"ngFor","ngForOf"],[3,"click"],["class","ckcol",4,"ngFor","ngForOf"],[1,"ckcol"],[1,"ckcoltext","facebook",3,"id","disabled","click"]],template:function(t,n){1&t&&(c.Nb(0,"div",0),c.oc(1,d,2,1,"div",1),c.oc(2,l,2,1,"div",2),c.Mb()),2&t&&(c.yb(1),c.dc("ngIf",n.keysActions),c.yb(1),c.dc("ngForOf",n.rows))},directives:[s.t,s.s],styles:['.ckeyboard[_ngcontent-%COMP%]{height:100%}.ck[_ngcontent-%COMP%], .ckeyboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.ck[_ngcontent-%COMP%]{height:100%;flex-direction:column;justify-content:left;padding:0}.ck[_ngcontent-%COMP%], .ckrow[_ngcontent-%COMP%]{display:flex}.ckrow[_ngcontent-%COMP%]{width:100%;flex-direction:row;flex-grow:1}.ckcol[_ngcontent-%COMP%]{flex-grow:1;margin:0;padding:0;flex-basis:100%}.ckcoltext[_ngcontent-%COMP%]{background:grey;height:100%;width:100%;display:flex;justify-content:center;align-items:center}.handled[_ngcontent-%COMP%]{color:red}button.btn[_ngcontent-%COMP%]:before{-webkit-border-radius:3px;-moz-border-radius:3px;-webkit-box-shadow:#959595 0 2px 5px;-moz-box-shadow:#959595 0 2px 5px;border-radius:3px;box-shadow:0 2px 5px #959595;content:"";display:block;height:100%;left:0;padding:2px 0 0;position:absolute;top:0}button.btn[_ngcontent-%COMP%]:active:before{padding:1px 0 0}button.btn.yahoo[_ngcontent-%COMP%]{background:#be95b7;background:linear-gradient(#be95b7,#5f396a);color:#fff;text-shadow:0 1px 0 #4d2955}button.btn.yahoo[_ngcontent-%COMP%], button.btn.yahoo[_ngcontent-%COMP%]:hover{border:1px solid #4b2a55;border-bottom:3px solid #4d2955;box-shadow:inset 0 0 0 1px #9c83a1}button.btn.yahoo[_ngcontent-%COMP%]:active, button.btn.yahoo[_ngcontent-%COMP%]:hover{background:#5f396a;background:linear-gradient(#5f396a,#be95b7)}button.btn.yahoo[_ngcontent-%COMP%]:active{border:1px solid #4b2a55;box-shadow:inset 0 10px 15px 0 #4d2955}button.dsgnmoo[_ngcontent-%COMP%]{background:#f97779;background:linear-gradient(#f97779,#ce2424);color:#fff;text-shadow:0 1px 0 #bd2524}button.dsgnmoo[_ngcontent-%COMP%], button.dsgnmoo[_ngcontent-%COMP%]:hover{border:1px solid #be2424;border-bottom:3px solid #bd2524;box-shadow:inset 0 0 0 1px #e67e7b}button.dsgnmoo[_ngcontent-%COMP%]:active, button.dsgnmoo[_ngcontent-%COMP%]:hover{background:#ce2424;background:linear-gradient(#ce2424,#f97779)}button.dsgnmoo[_ngcontent-%COMP%]:active{border:1px solid #be2424;box-shadow:inset 0 10px 15px 0 #bd2524}button.facebook[_ngcontent-%COMP%]{background:#99b6df;background:linear-gradient(#99b6df,#638ec8);color:#fff;text-shadow:0 1px 0 #3c61ab}button.facebook[_ngcontent-%COMP%], button.facebook[_ngcontent-%COMP%]:hover{border:1px solid #6d94ce;border-bottom:3px solid #3867ac;box-shadow:inset 0 0 0 1px #bbcfeb}button.facebook[_ngcontent-%COMP%]:active, button.facebook[_ngcontent-%COMP%]:hover{background:#638ec8;background:linear-gradient(#638ec8,#99b6df)}button.facebook[_ngcontent-%COMP%]:active{border:1px solid #6d94ce;box-shadow:inset 0 10px 15px 0 #4176c4}'],changeDetection:0}),t}()},OZ4V:function(t,a,i){"use strict";i.d(a,"a",(function(){return p}));var c=i("mrSG"),o=i("fXoL"),s=i("TEn/"),r=i("zrcv"),d=i("L5fO"),b=i("ofXK"),l=i("g1yl");function u(t,n){if(1&t){var e=o.Ob();o.Nb(0,"ion-header",3),o.Nb(1,"ion-toolbar"),o.Nb(2,"ion-title"),o.qc(3),o.Mb(),o.Nb(4,"ion-buttons",4),o.Nb(5,"ion-button",5),o.Vb("click",(function(t){return o.ic(e),o.Xb().back(t)})),o.Jb(6,"ion-icon",6),o.Mb(),o.Mb(),o.Mb(),o.Mb()}if(2&t){var a=o.Xb();o.yb(3),o.sc(" ",a.langProvider.Select," ")}}function f(t,n){if(1&t){var e=o.Ob();o.Nb(0,"app-candidate-avatar",11),o.Vb("click",(function(){o.ic(e);var t=n.$implicit;return o.Xb(2).select(t)})),o.Mb()}if(2&t){var a=n.$implicit,i=o.Xb(2);o.dc("candidate",a)("isSelected",i.selectedCandidatesCopy[a._id])}}function g(t,n){if(1&t){var e=o.Ob();o.Nb(0,"ion-fab-button",12),o.Vb("click",(function(){return o.ic(e),o.Xb(2).activate()})),o.Jb(1,"ion-icon",13),o.Mb()}}function v(t,n){if(1&t&&(o.Lb(0),o.Nb(1,"ion-content"),o.Nb(2,"div",7),o.Nb(3,"div",8),o.oc(4,f,1,2,"app-candidate-avatar",9),o.Mb(),o.oc(5,g,2,0,"ion-fab-button",10),o.Mb(),o.Mb(),o.Kb()),2&t){var e=o.Xb();o.yb(4),o.dc("ngForOf",e.candidates)("ngForTrackBy",e.trackByFn),o.yb(1),o.dc("ngIf",e.isModal)}}function h(t,n){if(1&t){var e=o.Ob();o.Nb(0,"app-candidate-avatar",11),o.Vb("click",(function(){o.ic(e);var t=n.$implicit;return o.Xb(2).select(t)})),o.Mb()}if(2&t){var a=n.$implicit,i=o.Xb(2);o.dc("candidate",a)("isSelected",i.selectedCandidatesCopy[a._id])}}function m(t,n){if(1&t&&(o.Nb(0,"div",14),o.oc(1,h,1,2,"app-candidate-avatar",9),o.Mb()),2&t){var e=o.Xb();o.yb(1),o.dc("ngForOf",e.candidates)("ngForTrackBy",e.trackByFn)}}var p=function(){var t=function(){function t(n,a,i){e(this,t),this.modalCtrl=n,this.msgService=a,this.langProvider=i,this.candidateSelected=new o.n}return n(t,[{key:"ngOnInit",value:function(){this.isModal?(this.select=this.selectModal,this.selectedCandidates?this.selectedCandidatesCopy=JSON.parse(JSON.stringify(this.selectedCandidates)):this.selectedCandidates={}):(this.select=this.selectNoneModal,this.selectedCandidatesCopy=this.selectedCandidates)}},{key:"selectNoneModal",value:function(t){this.candidateSelected.emit(t)}},{key:"selectModal",value:function(t){this.selectedCandidatesCopy[t._id]=!this.selectedCandidatesCopy[t._id]}},{key:"activate",value:function(){this.modalCtrl.dismiss(this.selectedCandidatesCopy)}},{key:"trackByFn",value:function(t,n){return n?n._id:t}},{key:"back",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.candidates.filter((function(t){return n.selectedCandidates[t._id]!=n.selectedCandidatesCopy[t._id]})).length>0)){t.next=8;break}return t.next=3,this.msgService.showAreYouSure(this.langProvider.DataNotSaved);case 3:if(t.t0=t.sent,!t.t0){t.next=6;break}this.modalCtrl.dismiss();case 6:t.next=9;break;case 8:this.modalCtrl.dismiss();case 9:case"end":return t.stop()}}),t,this)})))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Ib(s.Eb),o.Ib(r.a),o.Ib(d.b))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-candidate-selection"]],inputs:{candidates:"candidates",selectedCandidates:"selectedCandidates",isModal:"isModal"},outputs:{candidateSelected:"candidateSelected"},decls:4,vars:3,consts:[["translucent","true",4,"ngIf"],[4,"ngIf","ngIfElse"],["noModal",""],["translucent","true"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"container"],[1,"candidates"],["class","candi",3,"candidate","isSelected","click",4,"ngFor","ngForOf","ngForTrackBy"],["class","activate","color","secondary",3,"click",4,"ngIf"],[1,"candi",3,"candidate","isSelected","click"],["color","secondary",1,"activate",3,"click"],["name","checkmark"],[1,"candidates","candidatesNonModal"]],template:function(t,n){if(1&t&&(o.oc(0,u,7,1,"ion-header",0),o.oc(1,v,6,3,"ng-container",1),o.oc(2,m,2,2,"ng-template",null,2,o.pc)),2&t){var e=o.hc(3);o.dc("ngIf",n.isModal),o.yb(1),o.dc("ngIf",n.isModal)("ngIfElse",e)}},directives:[b.t,s.B,s.zb,s.xb,s.l,s.k,s.C,s.u,b.s,l.a,s.x],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:flex-start;overflow:scroll}.candidatesNonModal[_ngcontent-%COMP%]{height:100%}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:.5rem}.activate[_ngcontent-%COMP%]{margin:.5rem auto}"]}),t}()},VVJX:function(t,n,a){"use strict";a.d(n,"a",(function(){return c}));var i=a("fXoL"),c=function(){var t=function t(n){e(this,t),this.viewContainerRef=n};return t.\u0275fac=function(n){return new(n||t)(i.Ib(i.O))},t.\u0275dir=i.Db({type:t,selectors:[["","appTaskHost",""]]}),t}()},ajeZ:function(t,n,a){"use strict";a.d(n,"a",(function(){return g}));var i=a("ofXK"),c=a("3Pt+"),o=a("TEn/"),s=a("g1yl"),r=a("pAvx"),d=a("VVJX"),b=a("+EIm"),l=a("OZ4V"),u=a("1U8w"),f=a("fXoL"),g=function(){var t=function t(){e(this,t)};return t.\u0275mod=f.Gb({type:t}),t.\u0275inj=f.Fb({factory:function(n){return new(n||t)},imports:[[i.c,c.e,o.Bb]]}),t}();f.kc(r.a,[i.q,i.r,i.s,i.t,i.A,i.w,i.x,i.y,i.z,i.u,i.v,c.x,c.o,c.w,c.c,c.p,c.s,c.a,c.u,c.v,c.r,c.j,c.k,c.t,c.g,c.f,c.q,c.b,c.d,c.m,c.n,c.l,o.e,o.f,o.g,o.i,o.j,o.k,o.l,o.m,o.n,o.o,o.p,o.q,o.r,o.s,o.t,o.u,o.v,o.w,o.x,o.y,o.z,o.A,o.B,o.C,o.D,o.E,o.F,o.G,o.H,o.I,o.J,o.K,o.L,o.M,o.N,o.O,o.P,o.Q,o.R,o.S,o.T,o.U,o.V,o.W,o.X,o.Y,o.Z,o.ab,o.bb,o.cb,o.db,o.eb,o.gb,o.hb,o.ib,o.jb,o.kb,o.lb,o.mb,o.nb,o.ob,o.pb,o.qb,o.rb,o.sb,o.ub,o.vb,o.wb,o.yb,o.zb,o.xb,o.tb,o.c,o.Hb,o.Kb,o.Mb,o.Nb,o.fb,o.h,o.Gb,o.Lb,o.Pb,o.Qb,o.Rb,o.Ab,s.a,r.a,d.a,b.a,l.a,u.a],[i.b,i.G,i.p,i.k,i.E,i.g,i.C,i.F,i.d,i.f,i.i,i.j,i.l])},g1yl:function(t,a,i){"use strict";i.d(a,"a",(function(){return k}));var c=i("fXoL"),o=i("3LWr"),s=i("ufmx"),r=i("TEn/"),d=i("ofXK");function b(t,n){if(1&t&&c.Jb(0,"img",7),2&t){var e=c.Xb(2);c.dc("src",e.candidate.ImgUrl,c.jc)}}function l(t,n){1&t&&c.Jb(0,"img",8)}function u(t,n){if(1&t&&(c.Nb(0,"span",9),c.qc(1),c.Mb()),2&t){var e=c.Xb(2);c.Ab("candidateNotActive",!1===e.candidate.isActive),c.yb(1),c.sc(" ",e.candidate.number," ")}}function f(t,n){if(1&t&&(c.Lb(0),c.oc(1,b,1,1,"img",4),c.oc(2,l,1,0,"img",5),c.oc(3,u,2,3,"span",6),c.Kb()),2&t){var e=c.Xb();c.yb(1),c.dc("ngIf",e.candidate.ImgUrl),c.yb(1),c.dc("ngIf",!e.candidate.ImgUrl),c.yb(1),c.dc("ngIf",!e.candidate.ImgUrl)}}function g(t,n){1&t&&c.Jb(0,"img",8)}function v(t,n){if(1&t&&c.Jb(0,"img",7),2&t){var e=c.Xb(2);c.dc("src",e.selectedSrc,c.jc)}}function h(t,n){if(1&t&&(c.Nb(0,"span",9),c.qc(1),c.Mb()),2&t){var e=c.Xb(2);c.Ab("candidateNotActive",!1===e.candidate.isActive),c.yb(1),c.sc(" ",e.candidate.number," ")}}function m(t,n){if(1&t&&(c.oc(0,g,1,0,"img",10),c.oc(1,v,1,1,"ng-template",null,11,c.pc),c.oc(3,h,2,3,"span",6)),2&t){var e=c.hc(2),a=c.Xb();c.dc("ngIf",!a.isSelected)("ngIfElse",e),c.yb(3),c.dc("ngIf",a.candidate)}}function p(t,n){if(1&t&&(c.Nb(0,"ion-badge",12),c.qc(1),c.Mb()),2&t){var e=c.Xb();c.yb(1),c.rc(e.total)}}var k=function(){var t=function(){function t(n,a){e(this,t),this.store=n,this.candidatesDelegator=a}return n(t,[{key:"ngOnInit",value:function(){switch(this.candidateId&&(this.candidate=this.candidatesDelegator.getCandidatesByIds([this.candidateId])[0]),this.selectedStyle){case"gray":this.selectedSrc="./assets/images/avatar3.svg";break;case"redBlue":this.selectedSrc="./assets/images/avatar2.svg";break;default:this.selectedSrc="./assets/images/avatar3.svg"}}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Ib(o.a),c.Ib(s.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-candidate-avatar"]],inputs:{candidate:"candidate",candidateId:"candidateId",total:"total",isShowTotal:"isShowTotal",isSelected:"isSelected",selectedStyle:"selectedStyle"},decls:5,vars:3,consts:[[1,"avatar"],[4,"ngIf","ngIfElse"],["noImg",""],["class","cbadge","color","warning",4,"ngIf"],["class","avatarItem",3,"src",4,"ngIf"],["src","./assets/images/avatar.svg","class","avatarItem",4,"ngIf"],["class","avatarItem avatarTxtItem",3,"candidateNotActive",4,"ngIf"],[1,"avatarItem",3,"src"],["src","./assets/images/avatar.svg",1,"avatarItem"],[1,"avatarItem","avatarTxtItem"],["src","./assets/images/avatar.svg","class","avatarItem",4,"ngIf","ngIfElse"],["selected",""],["color","warning",1,"cbadge"]],template:function(t,n){if(1&t&&(c.Nb(0,"ion-avatar",0),c.oc(1,f,4,3,"ng-container",1),c.oc(2,m,4,3,"ng-template",null,2,c.pc),c.Mb(),c.oc(4,p,2,1,"ion-badge",3)),2&t){var e=c.hc(3);c.yb(1),c.dc("ngIf",n.candidate&&n.store.enviroment.isAvatarImages)("ngIfElse",e),c.yb(3),c.dc("ngIf",n.isShowTotal&&n.total>0)}},directives:[r.f,d.t,r.j],styles:["[_nghost-%COMP%]{display:block;min-width:0;min-height:0}.avatar[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.avatar[_ngcontent-%COMP%]{display:grid;align-items:center;text-align:center;background:none}.avatar[_ngcontent-%COMP%]:active{opacity:.5;height:110%;width:110%}.avatarItem[_ngcontent-%COMP%]{grid-row:1;grid-column:1}.avatarTxtItem[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#000;opacity:.6}.cbadge[_ngcontent-%COMP%]{position:relative;top:-1rem;left:-.4rem;border-radius:100%;margin:0}.candidateNotActive[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-weight:700;opacity:1}"]}),t}()},gVRd:function(t,n,a){"use strict";a.d(n,"c",(function(){return i})),a.d(n,"b",(function(){return c})),a.d(n,"a",(function(){return o}));var i=function t(n,a){e(this,t),this.item=n,this.isHandled=a},c=function(){var t=function t(){e(this,t)};return t.ItemClick="ItemClick",t}(),o=function t(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(this,t),this.type=n,this.desc=a,this.color=i}}}])}();