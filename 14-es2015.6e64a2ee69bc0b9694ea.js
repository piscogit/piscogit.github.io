(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{x5Jj:function(t,o,n){"use strict";n.r(o),n.d(o,"PouchbPlayPageModule",(function(){return p}));var i=n("ofXK"),c=n("3Pt+"),e=n("TEn/"),r=n("tyNb"),s=n("mrSG"),b=n("fXoL"),a=n("h7jJ"),d=n("zrcv");const u=[{path:"",component:(()=>{class t{constructor(t,o){this.dataProvider=t,this.msgService=o}ngOnInit(){}sync(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.dataProvider.syncToCouch(),yield this.msgService.showToast("DB Synced",500)}))}dropDb(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.dataProvider.dropDb(),yield this.msgService.showToast("DB Dropped",500)}))}compactDb(){return Object(s.a)(this,void 0,void 0,(function*(){yield this.dataProvider.compactDb(),yield this.msgService.showToast("DB Compacted",500)}))}getAllTasks(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.dataProvider.getAllTasks();this.msgService.showModal(JSON.stringify(t))}))}}return t.\u0275fac=function(o){return new(o||t)(b.Ib(a.a),b.Ib(d.a))},t.\u0275cmp=b.Cb({type:t,selectors:[["app-pouchb-play"]],decls:15,vars:0,consts:[["slot","end"],["defaultHref","/"],["expand","full","color","secondary",3,"click"]],template:function(t,o){1&t&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",0),b.Jb(3,"ion-back-button",1),b.Mb(),b.Nb(4,"ion-title"),b.pc(5,"pouchbPlay"),b.Mb(),b.Mb(),b.Mb(),b.Nb(6,"ion-content"),b.Nb(7,"ion-button",2),b.Vb("click",(function(){return o.dropDb()})),b.pc(8,"Drop DB"),b.Mb(),b.Nb(9,"ion-button",2),b.Vb("click",(function(){return o.sync()})),b.pc(10,"Sync"),b.Mb(),b.Nb(11,"ion-button",2),b.Vb("click",(function(){return o.compactDb()})),b.pc(12,"Compact DB"),b.Mb(),b.Nb(13,"ion-button",2),b.Vb("click",(function(){return o.getAllTasks()})),b.pc(14,"Get All Tasks"),b.Mb(),b.Mb())},directives:[e.r,e.W,e.k,e.g,e.h,e.U,e.n,e.j],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(o){return new(o||t)},imports:[[r.i.forChild(u)],r.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(o){return new(o||t)},imports:[[i.b,c.a,e.Y,l]]}),t})()}}]);