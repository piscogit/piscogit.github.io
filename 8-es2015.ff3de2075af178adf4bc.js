(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/i5F":function(t,n,e){"use strict";e.r(n),e.d(n,"OrderedPageModule",(function(){return v}));var o=e("ofXK"),c=e("3Pt+"),i=e("TEn/"),r=e("tyNb"),s=e("mrSG"),d=e("fXoL");class a{constructor(t,n){this.item=t,this.isHandled=n}}let b=(()=>{class t{}return t.ItemClick="ItemClick",t})();class l{constructor(t,n=null,e=null){this.type=t,this.desc=n,this.color=e}}function u(t,n){if(1&t){const t=d.Ob();d.Nb(0,"button",5),d.Vb("click",(function(){d.ic(t);const e=n.$implicit;return d.Xb(2).onActionBtnClick(e)})),d.pc(1),d.Mb()}if(2&t){const t=n.$implicit;d.mc("background",t.color),d.yb(1),d.rc(" ",t.desc," ")}}function g(t,n){if(1&t&&(d.Nb(0,"div",3),d.nc(1,u,2,3,"button",4),d.Mb()),2&t){const t=d.Xb();d.yb(1),d.dc("ngForOf",t.keysActions)}}function f(t,n){if(1&t){const t=d.Ob();d.Nb(0,"div",7),d.Nb(1,"button",8),d.Vb("click",(function(e){d.ic(t);const o=n.index,c=d.Xb().index,i=d.Xb();return i.onBtnItemClick(i.keysItems[c*i.columns.length+o],e)})),d.Nb(2,"span"),d.pc(3),d.Mb(),d.Mb(),d.Mb()}if(2&t){const t=n.index,e=d.Xb().index,o=d.Xb();d.yb(1),d.dc("id",e+t)("disabled",e*o.columns.length+t>o.keysItems.length-1),d.yb(1),d.Ab("handled",null==o.keysItems[e*o.columns.length+t]?null:o.keysItems[e*o.columns.length+t].isHandled),d.yb(1),d.qc(null==o.keysItems[e*o.columns.length+t]?null:o.keysItems[e*o.columns.length+t].item)}}function h(t,n){if(1&t&&(d.Nb(0,"div",3),d.nc(1,f,4,5,"div",6),d.Mb()),2&t){const t=d.Xb();d.yb(1),d.dc("ngForOf",t.columns)}}class p{constructor(t,n){this.item=t,this.isHandled=n}}let m=(()=>{class t{constructor(){this.keysAction=new d.n,this._curIndex=0,this.text="kokoriko",this.keysItems=[]}get curIndex(){const t=this._curIndex++;return console.log("CurrIndex: "+t),t}ngOnInit(){const t=Math.sqrt(this.items.length);let n,e;t%1==0?n=e=t:(e=Math.round(t)+1,n=e*(e-1)>=this.items.length?e-1:e),this.rows=new Array(n),this.columns=new Array(e),this.keysItems=this.items.map(t=>new p(t._id,!1))}getBtnItem(t,n){return(t+n).toString()}onBtnItemClick(t,n){this.keysAction.emit({item:t.item,type:b.ItemClick,callback:n=>{t.isHandled=n.isHandled}})}onActionBtnClick(t){const n={type:t.type};n.callback=t=>{const n=this.keysItems.find(n=>n.item===t.item);n&&(n.isHandled=t.isHandled)},this.keysAction.emit(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Cb({type:t,selectors:[["app-ckeyboard"]],inputs:{items:"items",keysActions:"keysActions"},outputs:{keysAction:"keysAction"},decls:3,vars:2,consts:[[1,"ck"],["class","ckrow",4,"ngIf"],["class","ckrow",4,"ngFor","ngForOf"],[1,"ckrow"],[3,"background","click",4,"ngFor","ngForOf"],[3,"click"],["class","ckcol",4,"ngFor","ngForOf"],[1,"ckcol"],[1,"ckcoltext","facebook",3,"id","disabled","click"]],template:function(t,n){1&t&&(d.Nb(0,"div",0),d.nc(1,g,2,1,"div",1),d.nc(2,h,2,1,"div",2),d.Mb()),2&t&&(d.yb(1),d.dc("ngIf",n.keysActions),d.yb(1),d.dc("ngForOf",n.rows))},directives:[o.m,o.l],styles:['.ckeyboard[_ngcontent-%COMP%]{height:100%}.ck[_ngcontent-%COMP%], .ckeyboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.ck[_ngcontent-%COMP%]{height:100%;flex-direction:column;justify-content:left;padding:0}.ck[_ngcontent-%COMP%], .ckrow[_ngcontent-%COMP%]{display:flex}.ckrow[_ngcontent-%COMP%]{width:100%;flex-direction:row;flex-grow:1}.ckcol[_ngcontent-%COMP%]{flex-grow:1;margin:0;padding:0;flex-basis:100%}.ckcoltext[_ngcontent-%COMP%]{background:grey;height:100%;width:100%;display:flex;justify-content:center;align-items:center}.handled[_ngcontent-%COMP%]{color:red}button.btn[_ngcontent-%COMP%]:before{-webkit-border-radius:3px;-moz-border-radius:3px;-webkit-box-shadow:#959595 0 2px 5px;-moz-box-shadow:#959595 0 2px 5px;border-radius:3px;box-shadow:0 2px 5px #959595;content:"";display:block;height:100%;left:0;padding:2px 0 0;position:absolute;top:0}button.btn[_ngcontent-%COMP%]:active:before{padding:1px 0 0}button.btn.yahoo[_ngcontent-%COMP%]{background:#be95b7;background:linear-gradient(#be95b7,#5f396a);color:#fff;text-shadow:0 1px 0 #4d2955}button.btn.yahoo[_ngcontent-%COMP%], button.btn.yahoo[_ngcontent-%COMP%]:hover{border:1px solid #4b2a55;border-bottom:3px solid #4d2955;box-shadow:inset 0 0 0 1px #9c83a1}button.btn.yahoo[_ngcontent-%COMP%]:active, button.btn.yahoo[_ngcontent-%COMP%]:hover{background:#5f396a;background:linear-gradient(#5f396a,#be95b7)}button.btn.yahoo[_ngcontent-%COMP%]:active{border:1px solid #4b2a55;box-shadow:inset 0 10px 15px 0 #4d2955}button.dsgnmoo[_ngcontent-%COMP%]{background:#f97779;background:linear-gradient(#f97779,#ce2424);color:#fff;text-shadow:0 1px 0 #bd2524}button.dsgnmoo[_ngcontent-%COMP%], button.dsgnmoo[_ngcontent-%COMP%]:hover{border:1px solid #be2424;border-bottom:3px solid #bd2524;box-shadow:inset 0 0 0 1px #e67e7b}button.dsgnmoo[_ngcontent-%COMP%]:active, button.dsgnmoo[_ngcontent-%COMP%]:hover{background:#ce2424;background:linear-gradient(#ce2424,#f97779)}button.dsgnmoo[_ngcontent-%COMP%]:active{border:1px solid #be2424;box-shadow:inset 0 10px 15px 0 #bd2524}button.facebook[_ngcontent-%COMP%]{background:#99b6df;background:linear-gradient(#99b6df,#638ec8);color:#fff;text-shadow:0 1px 0 #3c61ab}button.facebook[_ngcontent-%COMP%], button.facebook[_ngcontent-%COMP%]:hover{border:1px solid #6d94ce;border-bottom:3px solid #3867ac;box-shadow:inset 0 0 0 1px #bbcfeb}button.facebook[_ngcontent-%COMP%]:active, button.facebook[_ngcontent-%COMP%]:hover{background:#638ec8;background:linear-gradient(#638ec8,#99b6df)}button.facebook[_ngcontent-%COMP%]:active{border:1px solid #6d94ce;box-shadow:inset 0 10px 15px 0 #4176c4}'],changeDetection:0}),t})();var k=e("ufmx"),y=e("L5fO");const x=["upper"];function C(t,n){if(1&t&&(d.Nb(0,"div"),d.Nb(1,"div",8),d.Nb(2,"span",9),d.pc(3),d.Mb(),d.Nb(4,"ion-avatar",10),d.pc(5),d.Mb(),d.Mb(),d.Mb()),2&t){const t=n.$implicit,e=n.index;d.yb(3),d.rc("",e+1,"."),d.yb(2),d.qc(t.number)}}const M=[{path:"",component:(()=>{class t{constructor(t,n){this.candidatesDelegator=t,this.langProvider=n,this.temp=Array.from(Array(40).keys()),this.orderedCandidates=[],this.keysActions=[]}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){this.candidates=yield this.candidatesDelegator.getCandidates();const t=new l("Delete",this.langProvider.CatalogTaskDelete,"red");this.keysActions.push(t)}))}ngOnDestroy(){}onKeysAction(t){switch(t.type){case b.ItemClick:{const n=this.candidates.find(n=>n._id===t.item);if(!n)throw Error("TODO ERROR HANDLING");null==this.orderedCandidates.find(n=>n.number.toString()===t.item)&&this.orderedCandidates.push(n),t.callback(new a(t.item,!0))}break;case"Delete":if(this.orderedCandidates.length>0){const n=this.orderedCandidates.pop();t.callback(new a(n.number.toString(),!1))}}this.orderedContainer.nativeElement.scrollTop=this.orderedContainer.nativeElement.scrollHeight}}return t.\u0275fac=function(n){return new(n||t)(d.Ib(k.a),d.Ib(y.b))},t.\u0275cmp=d.Cb({type:t,selectors:[["app-ordered"]],viewQuery:function(t,n){var e;1&t&&(d.vc(m,!0),d.vc(x,!0)),2&t&&(d.gc(e=d.Wb())&&(n.keyboard=e.first),d.gc(e=d.Wb())&&(n.orderedContainer=e.first))},decls:13,vars:4,consts:[["slot","start"],[3,"fullscreen"],[1,"main"],["cscroller","",1,"upper"],["upper",""],[4,"ngFor","ngForOf"],[1,"ckeys"],[3,"items","keysActions","keysAction"],[1,"order-container"],[1,"order-item-position"],["color","primary",1,"order-item-circle"]],template:function(t,n){1&t&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-buttons",0),d.Jb(3,"ion-menu-button"),d.Mb(),d.Nb(4,"ion-title"),d.pc(5,"Ordered"),d.Mb(),d.Mb(),d.Mb(),d.Nb(6,"ion-content",1),d.Nb(7,"div",2),d.Nb(8,"div",3,4),d.nc(10,C,6,2,"div",5),d.Mb(),d.Nb(11,"div",6),d.Nb(12,"app-ckeyboard",7),d.Vb("keysAction",(function(t){return n.onKeysAction(t)})),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&t&&(d.yb(6),d.dc("fullscreen",!0),d.yb(4),d.dc("ngForOf",n.orderedCandidates),d.yb(2),d.dc("items",n.candidates)("keysActions",n.keysActions))},directives:[i.s,i.Z,i.k,i.F,i.X,i.n,o.l,m,i.f],styles:[".main[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-between;height:100%;min-height:0;min-width:0}.main[_ngcontent-%COMP%], .upper[_ngcontent-%COMP%]{display:flex;width:100%}.upper[_ngcontent-%COMP%]{height:40%;flex-wrap:wrap;overflow:scroll}.ckeys[_ngcontent-%COMP%]{height:60%}.order-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin:10px 5px 5px 10px}.order-item-icon[_ngcontent-%COMP%]{font-size:2em;margin:0}.order-item-circle[_ngcontent-%COMP%]{align-self:flex-start;justify-content:center;align-items:center;height:1.5em;width:1.5em;background:var(--ion-color-medium);text-align:center;display:flex;font-size:1em}"],changeDetection:0}),t})()}];let O=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(n){return new(n||t)},imports:[[r.h.forChild(M)],r.h]}),t})();var w=e("ajeZ");let v=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(n){return new(n||t)},imports:[[o.c,c.a,i.bb,O,w.a]]}),t})()},ajeZ:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var o=e("ofXK"),c=e("3Pt+"),i=e("TEn/"),r=e("fXoL");let s=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[o.c,c.a,i.bb]]}),t})()}}]);