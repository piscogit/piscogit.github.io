(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{CIRo:function(t,e,a){"use strict";a.d(e,"a",(function(){return M}));var i=a("mrSG"),s=a("fXoL"),n=a("TEn/"),o=a("L5fO"),d=a("ufmx"),c=a("zrcv"),r=a("ofXK"),l=a("g1yl");function b(t,e){if(1&t){const t=s.Ob();s.Nb(0,"app-candidate-avatar",13),s.Vb("click",(function(){s.ic(t);const a=e.$implicit,i=s.Xb();return i.selectRemoveAction(i.basketItemsEdit[a._id])})),s.Mb()}if(2&t){const t=e.$implicit,a=s.Xb();s.dc("candidate",t)("total",a.basketItemsEdit[t._id].total)("isSelected",a.dirtyItems[t._id])("isShowTotal",!0)}}let h=(()=>{class t{constructor(t,e,a,i,s){this.modalCtrl=t,this.langProvider=e,this.candidatesDelegator=a,this.msgService=i,this.navCtrl=s,this.dirtyItems={},this.mode="add"}ngOnInit(){this.basketItemsOriginal=this.basketItems.reduce((t,e)=>(t[e.candidate]=e,t),{}),this.candidates=this.candidatesDelegator.getCandidatesByIds(Object.keys(this.basketItemsOriginal)),this.candidates.sort((t,e)=>t.number-e.number),this.basketItemsEdit=JSON.parse(JSON.stringify(this.basketItemsOriginal)),this.selectRemoveAction=this.selectItem}trackByFn(t,e){return e?e._id:t}selectItem(t){!this.isCandidateMultiBasket&&t.total>0?this.msgService.showToast("TODO, Can add more than once !!!"):(t.total++,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total)}removeItem(t){t.total>0&&t.total--,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total}changeAddMode(){this.mode="add",this.selectRemoveAction=this.selectItem}changeRemoveMode(){this.mode="remove",this.selectRemoveAction=this.removeItem}activate(){const t=Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).map(t=>this.basketItemsEdit[t]);this.modalCtrl.dismiss(t)}back(t){return Object(i.a)(this,void 0,void 0,(function*(){Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).length>0?(yield this.msgService.showAreYouSure(this.langProvider.CommentNotSaved))&&this.modalCtrl.dismiss():this.modalCtrl.dismiss()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(n.eb),s.Ib(o.b),s.Ib(d.a),s.Ib(c.a),s.Ib(n.fb))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-candikeyboard"]],inputs:{basketItems:"basketItems",isCandidateMultiBasket:"isCandidateMultiBasket"},decls:17,vars:4,consts:[["translucent","true"],[1,"options"],[3,"color","click"],["name","add"],["name","remove"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"container"],[1,"candiContainer"],["slot","start","class","candi",3,"candidate","total","isSelected","isShowTotal","click",4,"ngFor","ngForOf","ngForTrackBy"],["color","secondary",1,"activate",3,"click"],["name","send"],["slot","start",1,"candi",3,"candidate","total","isSelected","isShowTotal","click"]],template:function(t,e){1&t&&(s.Nb(0,"ion-header",0),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-title"),s.Nb(3,"div",1),s.Nb(4,"ion-fab-button",2),s.Vb("click",(function(){return e.changeAddMode()})),s.Jb(5,"ion-icon",3),s.Mb(),s.Nb(6,"ion-fab-button",2),s.Vb("click",(function(){return e.changeRemoveMode()})),s.Jb(7,"ion-icon",4),s.Mb(),s.Mb(),s.Mb(),s.Nb(8,"ion-buttons",5),s.Nb(9,"ion-button",6),s.Vb("click",(function(t){return e.back(t)})),s.Jb(10,"ion-icon",7),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(11,"ion-content"),s.Nb(12,"div",8),s.Nb(13,"div",9),s.nc(14,b,1,4,"app-candidate-avatar",10),s.Mb(),s.Nb(15,"ion-fab-button",11),s.Vb("click",(function(){return e.activate()})),s.Jb(16,"ion-icon",12),s.Mb(),s.Mb(),s.Mb()),2&t&&(s.yb(4),s.dc("color","add"===e.mode?"primary":"light"),s.yb(2),s.dc("color","remove"===e.mode?"danger":"light"),s.yb(8),s.dc("ngForOf",e.candidates)("ngForTrackBy",e.trackByFn))},directives:[n.s,n.Z,n.X,n.p,n.t,n.k,n.j,n.n,r.l,l.a],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.candiContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;overflow:scroll}.options[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:.5rem}.activate[_ngcontent-%COMP%]{transform:rotate(180deg);margin:auto 0 .5rem .5rem}"],changeDetection:0}),t})();var k=a("Mxx3"),m=a("AytR"),v=a("tyNb"),f=a("3LWr"),g=a("NrBX"),u=a("pQKU");function p(t,e){if(1&t&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",1),s.Jb(3,"ion-menu-button"),s.Mb(),s.Nb(4,"ion-buttons",2),s.Jb(5,"ion-back-button",3),s.Mb(),s.Nb(6,"ion-title"),s.pc(7),s.Mb(),s.Mb(),s.Mb()),2&t){const t=s.Xb();s.yb(7),s.qc(null==t.taskDesc?null:t.taskDesc.description)}}function y(t,e){if(1&t&&s.Jb(0,"app-candidate-avatar",12),2&t){const t=s.Xb().$implicit,e=s.Xb(3);s.dc("candidateId",t.candidate)("total",t.total)("isShowTotal",e.taskConfig.isCandidateMultiBasket)}}function I(t,e){if(1&t&&(s.Nb(0,"div",10),s.nc(1,y,1,3,"app-candidate-avatar",11),s.Mb()),2&t){const t=e.$implicit;s.yb(1),s.dc("ngIf",t.total>0)}}function C(t,e){if(1&t){const t=s.Ob();s.Nb(0,"ion-chip",6),s.Vb("click",(function(){s.ic(t);const a=e.$implicit;return s.Xb(2).selectBasket(a.name)})),s.Nb(1,"ion-label",7),s.pc(2),s.Mb(),s.Nb(3,"div",8),s.nc(4,I,2,1,"div",9),s.Mb(),s.Mb()}if(2&t){const t=e.$implicit,a=s.Xb(2);s.mc("direction",a.taskDesc.langDir),s.Ab("selectedBasket",t.name===a.selectedBasket),s.yb(2),s.qc(t.name),s.yb(2),s.dc("ngForOf",a.taskSavedData.main.baskets[t.name].all)}}function O(t,e){if(1&t&&(s.Nb(0,"ion-content"),s.Nb(1,"div",4),s.nc(2,C,5,6,"ion-chip",5),s.Mb(),s.Mb()),2&t){const t=s.Xb();s.yb(2),s.dc("ngForOf",t.taskConfig.baskets)}}let M=(()=>{class t{constructor(t,e,a,i,s,n,o,d,c,r){this.router=t,this.route=e,this.store=a,this.modalCtrl=i,this.msgService=s,this.langProvider=n,this.popoverController=o,this.candidatesDelegator=d,this.taskDelegator=c,this.basketDelegator=r,this.previewSize=m.a.basketPreviewSize}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=yield this.initTask(),this.integrated||(this.taskSavedData=yield this.loadTask()),this.isTaskInit=!0}))}ionViewWillLeave(){return Object(i.a)(this,void 0,void 0,(function*(){this.basketDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,m.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),this.msgService.showToast(this.langProvider.TaskSaved,m.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))}))}initTask(){var t,e,a;return Object(i.a)(this,void 0,void 0,(function*(){let i;i=null!==(a=null!==(e=null===(t=this.integrated)||void 0===t?void 0:t.parentTaskId)&&void 0!==e?e:this.route.snapshot.paramMap.get(k.a.TaskDescId))&&void 0!==a?a:"t13",this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.taskDesc=yield this.taskDelegator.getTaskDesk(i),this.taskConfig=yield this.taskDelegator.getTasksConfig(i);const s={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,candidates:this.candidates.map(t=>t._id),baskets:{}}};for(const t of this.taskConfig.baskets)s.main.baskets[t.name]={name:t.name,size:0,preview:[],all:this.candidates.map(t=>({candidate:t._id,total:0}))};return s}))}saveTask(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.basketDelegator.saveTask(this.taskSavedData,this.taskConfig)}))}saveTaskIntegrated(){return Object(i.a)(this,void 0,void 0,(function*(){throw new Error("Method not implemented.")}))}loadTask(){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.route.snapshot.paramMap.get(k.a.SavedTaskId);if(t){this.isTaskUpdate=!0;const e=yield this.basketDelegator.loadTask(t);this.candidates=yield this.candidatesDelegator.getCandidatesByIds(e.main.candidates),this.setLoadedData(e),this.taskSavedData=e}return this.taskSavedData}))}setLoadedData(t){for(const e in t.main.baskets)if(Object.prototype.hasOwnProperty.call(t.main.baskets,e)){const a=t.main.baskets[e],i=[];for(const t of a.preview){const e=a.all.find(e=>e.candidate===t.candidate);i.push(e)}a.preview=i}if(!this.taskConfig.isCandidatesStatic){const e=new Set;for(const a in t.main.baskets)Object.prototype.hasOwnProperty.call(t.main.baskets,a)&&t.main.baskets[a].all.forEach(t=>e.add(t.candidate));for(const t of e)this.candidates=this.candidates.filter(e=>e._id!==t)}}loadTaskIntegrated(t){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=t,yield this.setLoadedData(t)}))}selectBasket(t){return Object(i.a)(this,void 0,void 0,(function*(){this.selectedBasket=this.selectedBasket!==t?t:null,yield this.showCanidatesSelection(t)}))}showCanidatesSelection(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=this.taskSavedData.main.baskets[t],a=yield this.modalCtrl.create({component:h,componentProps:{basketItems:e.all,isCandidateMultiBasket:this.taskConfig.isCandidateMultiBasket}});yield a.present();const i=yield a.onWillDismiss();if(i.data){e.preview=i.data;for(const t of i.data){const a=e.all.find(e=>e.candidate===t.candidate);a&&(a.total=t.total)}}}))}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(v.f),s.Ib(v.a),s.Ib(f.a),s.Ib(n.eb),s.Ib(c.a),s.Ib(o.b),s.Ib(n.ib),s.Ib(d.a),s.Ib(g.a),s.Ib(u.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-baskets2"]],inputs:{integrated:"integrated"},decls:2,vars:2,consts:[[4,"ngIf"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[1,"baskets"],["id","baskets","class","basket","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",3,"selectedBasket","direction","click",4,"ngFor","ngForOf"],["id","baskets","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",1,"basket",3,"click"],["color","secondary",1,"basketHeader"],[1,"basketItems",2,"direction","ltr"],["class","avatarBasketContainer",4,"ngFor","ngForOf"],[1,"avatarBasketContainer"],["class","avatarBasket",3,"candidateId","total","isShowTotal",4,"ngIf"],[1,"avatarBasket",3,"candidateId","total","isShowTotal"]],template:function(t,e){1&t&&(s.nc(0,p,8,1,"ion-header",0),s.nc(1,O,3,1,"ion-content",0)),2&t&&(s.dc("ngIf",!e.integrated),s.yb(1),s.dc("ngIf",e.isTaskInit))},directives:[r.m,n.s,n.Z,n.k,n.F,n.g,n.h,n.X,n.n,r.l,n.l,n.C,l.a],styles:[".container[_ngcontent-%COMP%]{flex-direction:column;width:100%}.baskets[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;height:100%}.baskets[_ngcontent-%COMP%]{align-content:flex-start;overflow:scroll}.basket[_ngcontent-%COMP%], .baskets[_ngcontent-%COMP%]{flex-direction:column;flex:1}.basket[_ngcontent-%COMP%]{min-height:6rem;display:flex}.basketItems[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:100%;flex-wrap:wrap;overflow:scroll}.avatarBasket[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:.5rem}"]}),t})()}}]);