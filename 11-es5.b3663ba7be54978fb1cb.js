!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/i5F":function(t,i,r){"use strict";r.r(i),r.d(i,"OrderedPageModule",(function(){return M}));var o=r("ofXK"),a=r("3Pt+"),c=r("TEn/"),s=r("tyNb"),d=r("mrSG"),l=r("+EIm"),u=r("gVRd"),b=r("fXoL"),f=r("ufmx"),p=r("L5fO"),m=["upper"];function h(e,n){if(1&e&&(b.Nb(0,"div"),b.Nb(1,"div",8),b.Nb(2,"span",9),b.qc(3),b.Mb(),b.Nb(4,"ion-avatar",10),b.qc(5),b.Mb(),b.Mb(),b.Mb()),2&e){var t=n.$implicit,i=n.index;b.yb(3),b.sc("",i+1,"."),b.yb(2),b.rc(t.number)}}var g,y,v,w=[{path:"",component:(g=function(){function t(n,i){e(this,t),this.candidatesDelegator=n,this.langProvider=i,this.temp=Array.from(Array(40).keys()),this.orderedCandidates=[],this.keysActions=[]}var i,r,o;return i=t,(r=[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.candidatesDelegator.getCandidates();case 2:this.candidates=e.sent,n=new u.a("Delete",this.langProvider.CatalogTaskDelete,"red"),this.keysActions.push(n);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnDestroy",value:function(){}},{key:"onKeysAction",value:function(e){switch(e.type){case u.b.ItemClick:var n=this.candidates.find((function(n){return n._id===e.item}));if(!n)throw Error("TODO ERROR HANDLING");null==this.orderedCandidates.find((function(n){return n.number.toString()===e.item}))&&this.orderedCandidates.push(n),e.callback(new u.c(e.item,!0));break;case"Delete":if(this.orderedCandidates.length>0){var t=this.orderedCandidates.pop();e.callback(new u.c(t.number.toString(),!1))}}this.orderedContainer.nativeElement.scrollTop=this.orderedContainer.nativeElement.scrollHeight}}])&&n(i.prototype,r),o&&n(i,o),t}(),g.\u0275fac=function(e){return new(e||g)(b.Ib(f.a),b.Ib(p.b))},g.\u0275cmp=b.Cb({type:g,selectors:[["app-ordered"]],viewQuery:function(e,n){var t;1&e&&(b.wc(l.a,!0),b.wc(m,!0)),2&e&&(b.gc(t=b.Wb())&&(n.keyboard=t.first),b.gc(t=b.Wb())&&(n.orderedContainer=t.first))},decls:13,vars:4,consts:[["slot","start"],[3,"fullscreen"],[1,"main"],["cscroller","",1,"upper"],["upper",""],[4,"ngFor","ngForOf"],[1,"ckeys"],[3,"items","keysActions","keysAction"],[1,"order-container"],[1,"order-item-position"],["color","primary",1,"order-item-circle"]],template:function(e,n){1&e&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",0),b.Jb(3,"ion-menu-button"),b.Mb(),b.Nb(4,"ion-title"),b.qc(5,"Ordered"),b.Mb(),b.Mb(),b.Mb(),b.Nb(6,"ion-content",1),b.Nb(7,"div",2),b.Nb(8,"div",3,4),b.oc(10,h,6,2,"div",5),b.Mb(),b.Nb(11,"div",6),b.Nb(12,"app-ckeyboard",7),b.Vb("keysAction",(function(e){return n.onKeysAction(e)})),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&e&&(b.yb(6),b.dc("fullscreen",!0),b.yb(4),b.dc("ngForOf",n.orderedCandidates),b.yb(2),b.dc("items",n.candidates)("keysActions",n.keysActions))},directives:[c.B,c.zb,c.l,c.R,c.xb,c.u,o.s,l.a,c.f],styles:[".main[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-between;height:100%;min-height:0;min-width:0}.main[_ngcontent-%COMP%], .upper[_ngcontent-%COMP%]{display:flex;width:100%}.upper[_ngcontent-%COMP%]{height:40%;flex-wrap:wrap;overflow:scroll}.ckeys[_ngcontent-%COMP%]{height:60%}.order-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin:10px 5px 5px 10px}.order-item-icon[_ngcontent-%COMP%]{font-size:2em;margin:0}.order-item-circle[_ngcontent-%COMP%]{align-self:flex-start;justify-content:center;align-items:center;height:1.5em;width:1.5em;background:var(--ion-color-medium);text-align:center;display:flex;font-size:1em}"],changeDetection:0}),g)}],k=((y=function n(){e(this,n)}).\u0275mod=b.Gb({type:y}),y.\u0275inj=b.Fb({factory:function(e){return new(e||y)},imports:[[s.j.forChild(w)],s.j]}),y),C=r("ajeZ"),M=((v=function n(){e(this,n)}).\u0275mod=b.Gb({type:v}),v.\u0275inj=b.Fb({factory:function(e){return new(e||v)},imports:[[o.c,a.e,c.Bb,k,C.a]]}),v)}}])}();