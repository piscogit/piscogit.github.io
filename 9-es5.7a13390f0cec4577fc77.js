!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{x5Jj:function(n,r,i){"use strict";i.r(r),i.d(r,"PouchbPlayPageModule",(function(){return N}));var o,c,a,s=i("ofXK"),u=i("3Pt+"),l=i("TEn/"),b=i("tyNb"),d=i("mrSG"),h=i("fXoL"),v=i("h7jJ"),f=i("4UqN"),p=i("Lrti"),m=i("o6Vy"),g=i("6nr9"),y=i("nbnm"),w=i("zrcv"),k=i("VYsW"),S=["video"],x=[{path:"",component:(o=function(){function n(t,r,i,o,c,a,s,u,l){e(this,n),this.dataProvider=t,this.setupService=r,this.validationService=i,this.syncService=o,this.settingsService=c,this.entityNamer=a,this.msgService=s,this.appContext=u,this.actionCtrl=l}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){}},{key:"sync",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataProvider.syncToCouch();case 2:return e.next=4,this.msgService.showToast("DB Synced",500);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"dropDb",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setupService.clearSetup();case 2:return e.next=4,this.dataProvider.dropDb();case 4:return location.reload(),e.next=7,this.msgService.showToast("DB Dropped",500);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"compactDb",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataProvider.compactDb();case 2:return e.next=4,this.msgService.showToast("DB Compacted",500);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"getAllTasks",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataProvider.getAllTasks();case 2:t=e.sent,this.msgService.showModal(JSON.stringify(t));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"googleSheet",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.validationService.validate();case 3:t=e.sent,this.msgService.showModal(""+t,null,"ltr"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.msgService.showMessage(null==e.t0?void 0:e.t0.message);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})))}},{key:"playVideo",value:function(){this.videoSrc="./assets/videos/VID-20200320-WA0027.mp4",this.videoPlayer.nativeElement.load(),this.videoPlayer.nativeElement.play()}},{key:"sendMail",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURI(this.entityNamer.userPrefix()),n=this.settingsService.getSettingsItem("targetDataMail"),e.next=4,this.dataProvider.getAllDocs();case 4:r=e.sent,i=JSON.stringify(r),window.location.href="mailto:".concat(n,"?subject=").concat(t,"&body=").concat(i);case 7:case"end":return e.stop()}}),e,this)})))}}])&&t(r.prototype,i),o&&t(r,o),n}(),o.\u0275fac=function(e){return new(e||o)(h.Ib(v.a),h.Ib(f.a),h.Ib(p.a),h.Ib(m.a),h.Ib(g.a),h.Ib(y.a),h.Ib(w.a),h.Ib(k.a),h.Ib(l.a))},o.\u0275cmp=h.Cb({type:o,selectors:[["app-pouchb-play"]],viewQuery:function(e,t){var n;1&e&&h.wc(S,!0),2&e&&h.gc(n=h.Wb())&&(t.videoPlayer=n.first)},decls:21,vars:0,consts:[["slot","end"],["defaultHref","/"],["expand","full","color","secondary",3,"click"]],template:function(e,t){1&e&&(h.Nb(0,"ion-header"),h.Nb(1,"ion-toolbar"),h.Nb(2,"ion-buttons",0),h.Jb(3,"ion-back-button",1),h.Mb(),h.Nb(4,"ion-title"),h.qc(5,"pouchbPlay"),h.Mb(),h.Mb(),h.Mb(),h.Nb(6,"ion-content"),h.Nb(7,"ion-button",2),h.Vb("click",(function(){return t.dropDb()})),h.qc(8,"Drop DB"),h.Mb(),h.Nb(9,"ion-button",2),h.Vb("click",(function(){return t.sync()})),h.qc(10,"Sync"),h.Mb(),h.Nb(11,"ion-button",2),h.Vb("click",(function(){return t.compactDb()})),h.qc(12,"Compact DB"),h.Mb(),h.Nb(13,"ion-button",2),h.Vb("click",(function(){return t.getAllTasks()})),h.qc(14,"Get All Tasks"),h.Mb(),h.Nb(15,"ion-button",2),h.Vb("click",(function(){return t.googleSheet()})),h.qc(16,"Google Sheet"),h.Mb(),h.Nb(17,"ion-button",2),h.Vb("click",(function(){return t.playVideo()})),h.qc(18,"Video"),h.Mb(),h.Nb(19,"ion-button",2),h.Vb("click",(function(){return t.sendMail()})),h.qc(20,"Mail"),h.Mb(),h.Mb())},directives:[l.B,l.zb,l.l,l.g,l.h,l.xb,l.u,l.k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.video[_ngcontent-%COMP%]{height:auto;width:100%}"]}),o)}],M=((a=function t(){e(this,t)}).\u0275mod=h.Gb({type:a}),a.\u0275inj=h.Fb({factory:function(e){return new(e||a)},imports:[[b.j.forChild(x)],b.j]}),a),N=((c=function t(){e(this,t)}).\u0275mod=h.Gb({type:c}),c.\u0275inj=h.Fb({factory:function(e){return new(e||c)},imports:[[s.c,u.e,l.Bb,M]]}),c)}}])}();