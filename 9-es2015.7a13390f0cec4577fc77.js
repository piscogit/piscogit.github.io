(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{x5Jj:function(t,e,i){"use strict";i.r(e),i.d(e,"PouchbPlayPageModule",(function(){return S}));var o=i("ofXK"),n=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),r=i("mrSG"),a=i("fXoL"),l=i("h7jJ"),d=i("4UqN"),b=i("Lrti"),u=i("o6Vy"),h=i("6nr9"),v=i("nbnm"),y=i("zrcv"),p=i("VYsW");const f=["video"],g=[{path:"",component:(()=>{class t{constructor(t,e,i,o,n,c,s,r,a){this.dataProvider=t,this.setupService=e,this.validationService=i,this.syncService=o,this.settingsService=n,this.entityNamer=c,this.msgService=s,this.appContext=r,this.actionCtrl=a}ngOnInit(){}sync(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.dataProvider.syncToCouch(),yield this.msgService.showToast("DB Synced",500)}))}dropDb(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.setupService.clearSetup(),yield this.dataProvider.dropDb(),location.reload(),yield this.msgService.showToast("DB Dropped",500)}))}compactDb(){return Object(r.a)(this,void 0,void 0,(function*(){yield this.dataProvider.compactDb(),yield this.msgService.showToast("DB Compacted",500)}))}getAllTasks(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.dataProvider.getAllTasks();this.msgService.showModal(JSON.stringify(t))}))}googleSheet(){return Object(r.a)(this,void 0,void 0,(function*(){try{const t=yield this.validationService.validate();this.msgService.showModal(""+t,null,"ltr")}catch(t){this.msgService.showMessage(null==t?void 0:t.message)}}))}playVideo(){this.videoSrc="./assets/videos/VID-20200320-WA0027.mp4",this.videoPlayer.nativeElement.load(),this.videoPlayer.nativeElement.play()}sendMail(){return Object(r.a)(this,void 0,void 0,(function*(){const t=encodeURI(this.entityNamer.userPrefix()),e=this.settingsService.getSettingsItem("targetDataMail"),i=yield this.dataProvider.getAllDocs(),o=JSON.stringify(i);window.location.href=`mailto:${e}?subject=${t}&body=${o}`}))}}return t.\u0275fac=function(e){return new(e||t)(a.Ib(l.a),a.Ib(d.a),a.Ib(b.a),a.Ib(u.a),a.Ib(h.a),a.Ib(v.a),a.Ib(y.a),a.Ib(p.a),a.Ib(c.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-pouchb-play"]],viewQuery:function(t,e){var i;1&t&&a.wc(f,!0),2&t&&a.gc(i=a.Wb())&&(e.videoPlayer=i.first)},decls:21,vars:0,consts:[["slot","end"],["defaultHref","/"],["expand","full","color","secondary",3,"click"]],template:function(t,e){1&t&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar"),a.Nb(2,"ion-buttons",0),a.Jb(3,"ion-back-button",1),a.Mb(),a.Nb(4,"ion-title"),a.qc(5,"pouchbPlay"),a.Mb(),a.Mb(),a.Mb(),a.Nb(6,"ion-content"),a.Nb(7,"ion-button",2),a.Vb("click",(function(){return e.dropDb()})),a.qc(8,"Drop DB"),a.Mb(),a.Nb(9,"ion-button",2),a.Vb("click",(function(){return e.sync()})),a.qc(10,"Sync"),a.Mb(),a.Nb(11,"ion-button",2),a.Vb("click",(function(){return e.compactDb()})),a.qc(12,"Compact DB"),a.Mb(),a.Nb(13,"ion-button",2),a.Vb("click",(function(){return e.getAllTasks()})),a.qc(14,"Get All Tasks"),a.Mb(),a.Nb(15,"ion-button",2),a.Vb("click",(function(){return e.googleSheet()})),a.qc(16,"Google Sheet"),a.Mb(),a.Nb(17,"ion-button",2),a.Vb("click",(function(){return e.playVideo()})),a.qc(18,"Video"),a.Mb(),a.Nb(19,"ion-button",2),a.Vb("click",(function(){return e.sendMail()})),a.qc(20,"Mail"),a.Mb(),a.Mb())},directives:[c.B,c.zb,c.l,c.g,c.h,c.xb,c.u,c.k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.video[_ngcontent-%COMP%]{height:auto;width:100%}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(g)],s.j]}),t})(),S=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(e){return new(e||t)},imports:[[o.c,n.e,c.Bb,m]]}),t})()}}]);