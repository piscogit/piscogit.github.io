(window.webpackJsonp=window.webpackJsonp||[]).push([[1,23],{"2lKs":function(t,a,e){"use strict";e.d(a,"a",(function(){return w}));var i=e("mrSG"),n=e("fXoL"),s=e("5+WD"),o=e("Mxx3"),d=e("pQKU"),r=e("AytR"),c=e("kLqA"),l=e("CIRo"),b=e("tyNb"),h=e("3LWr"),g=e("zrcv"),k=e("L5fO"),p=e("TEn/"),m=e("ufmx"),v=e("NrBX"),u=e("TtBN"),f=e("3Pt+"),y=e("ofXK"),D=e("OZ4V"),C=e("g1yl");const M=["candidatesOrder"];function I(t,a){if(1&t&&n.Jb(0,"app-candidate-avatar",29),2&t){const t=n.Xb().$implicit;n.dc("candidate",t)}}function O(t,a){if(1&t&&n.Jb(0,"app-candidate-avatar",29),2&t){const t=n.Xb().$implicit;n.dc("candidate",t)}}function P(t,a){1&t&&n.Jb(0,"span",30)}function T(t,a){if(1&t&&(n.Nb(0,"div",21),n.Nb(1,"ion-item",22),n.Nb(2,"div",23),n.Nb(3,"span",24),n.qc(4),n.Mb(),n.Jb(5,"app-candidate-avatar",25),n.Mb(),n.oc(6,I,1,1,"app-candidate-avatar",26),n.oc(7,O,1,1,"app-candidate-avatar",27),n.Mb(),n.oc(8,P,1,0,"span",28),n.Mb()),2&t){const t=a.$implicit,e=a.index,i=n.Xb(2);n.yb(1),n.ec("id","order_",t._id,""),n.dc("cdkDragStartDelay",i.dragDelay),n.yb(3),n.sc("",e+1,"."),n.yb(1),n.dc("candidate",t),n.yb(3),n.dc("ngIf",i.store.isIos)}}function N(t,a){if(1&t){const t=n.Ob();n.Nb(0,"div",15),n.Nb(1,"app-candidate-selection",16),n.Vb("candidateSelected",(function(a){return n.ic(t),n.Xb().selectCandidate(a)}))("cdkDropListDropped",(function(a){return n.ic(t),n.Xb().dropCandidates(a)})),n.Mb(),n.Nb(2,"ion-chip",17),n.Nb(3,"ion-list",18,19),n.Vb("cdkDropListDropped",(function(a){return n.ic(t),n.Xb().dropCandidatesOrder(a)})),n.oc(5,T,9,5,"div",20),n.Mb(),n.Mb(),n.Mb()}if(2&t){const t=n.Xb();n.dc("hidden","ordered"!==t.segment),n.yb(1),n.dc("candidates",t.candidates)("selectedCandidates",t.selectedCandidates)("cdkDropListData",t.candidates),n.yb(2),n.dc("cdkDropListData",t.orderedCandidates),n.yb(2),n.dc("ngForOf",t.orderedCandidates)("ngForTrackBy",t.trackByFn)}}let w=(()=>{class t{constructor(t,a,e,i,n,s,d,r,c,l){this.router=t,this.route=a,this.store=e,this.msgService=i,this.langProvider=n,this.popoverController=s,this.candidatesDelegator=d,this.taskDelegator=r,this.basketDelegator=c,this.orderedDelegator=l,this.orderedCandidates=[],this.selectedCandidates={},this.dragDelay=o.a.DragDelay,this.segment="ordered",this.integratedBaskets={parentId:null,parentTaskId:null,parentTaskType:null}}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=yield this.initTask(),this.taskSavedData=yield this.loadTask(),this.isTaskInit=!0}))}initTask(){var t;return Object(i.a)(this,void 0,void 0,(function*(){const a=null!==(t=this.route.snapshot.paramMap.get(o.a.TaskDescId))&&void 0!==t?t:"t13";this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.taskDesc=yield this.taskDelegator.getTaskDesk(a),this.taskConfig=yield this.taskDelegator.getTasksConfig(a);const e={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,orderedCandidates:[],candidates:this.candidates.map(t=>t._id),childIds:{}},basketsSaveData:null};return this.integratedBaskets={parentId:null,parentTaskId:this.taskDesc.id,parentTaskType:this.taskDesc.type},e}))}ionViewWillLeave(){var t;return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData.main.orderedCandidates=this.orderedCandidates.map(t=>t._id),this.taskSavedData.basketsSaveData=null===(t=this.basketPage)||void 0===t?void 0:t.taskSavedData,this.orderedDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,r.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),yield this.basketPage.ionViewWillLeave(),this.msgService.showToast(this.langProvider.TaskSaved,r.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))}))}saveTask(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.orderedDelegator.saveTask(this.taskSavedData,this.taskConfig)}))}loadTask(){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.route.snapshot.paramMap.get(o.a.SavedTaskId);let a=this.taskSavedData;if(t){this.isTaskUpdate=!0,a=yield this.orderedDelegator.loadTask(t),this.candidates=yield this.candidatesDelegator.getCandidatesByIds(a.main.candidates);for(const t of a.main.orderedCandidates){const a=this.candidates.find(a=>a._id===t);a&&this.selectCandidate(a)}this.basketPage.loadTaskIntegrated(a.basketsSaveData)}return a}))}dropCandidates(t){if(t.previousContainer===t.container);else{const a=this.orderedCandidates.splice(t.previousIndex,1);this.candidates=this.candidates.sort((t,a)=>t.number-a.number),this.selectedCandidates[a[0]._id]=!1}}dropCandidatesOrder(t){t.previousContainer===t.container?Object(s.h)(t.container.data,t.previousIndex,t.currentIndex):(Object(s.i)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),this.selectedCandidates[t.previousContainer.data[t.previousIndex]._id]=!0)}selectCandidate(t){var a;this.selectedCandidates[t._id]||(this.selectedCandidates[t._id]=!0,this.orderedCandidates.push(t),(null===(a=this.candidatesOrder)||void 0===a?void 0:a.nativeElement)&&setTimeout(()=>{const t=this.candidatesOrder.nativeElement.children;t[t.length-1].scrollIntoView({behaviour:"smooth",block:"end"})},50))}changeOrder(){this.orderedCandidates.reverse()}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:c.Guid.raw()}],{skipLocationChange:!0})}trackByFn(t,a){return a?a._id:t}}return t.\u0275fac=function(a){return new(a||t)(n.Ib(b.f),n.Ib(b.a),n.Ib(h.a),n.Ib(g.a),n.Ib(k.b),n.Ib(p.Jb),n.Ib(m.a),n.Ib(v.a),n.Ib(d.a),n.Ib(u.a))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-ordered2"]],viewQuery:function(t,a){var e;1&t&&(n.mc(l.a,!0),n.wc(M,!0,n.l)),2&t&&(n.gc(e=n.Wb())&&(a.basketPage=e.first),n.gc(e=n.Wb())&&(a.candidatesOrder=e.first))},features:[n.xb([d.a])],decls:23,vars:7,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[3,"ngModel","ngModelChange"],["value","ordered"],["value","baskets"],[1,"content"],[1,"container",3,"hidden","integrated"],["class","container","cdkDropListGroup","",3,"hidden",4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],[2,"display","flex"],["color","primary",3,"click"],["name","chatbox-ellipses"],["color","light",2,"margin-left","0.2rem",3,"click"],["name","repeat"],["cdkDropListGroup","",1,"container",3,"hidden"],["id","candidates","cdkDropList","",1,"candidatesSelection",3,"candidates","selectedCandidates","cdkDropListData","candidateSelected","cdkDropListDropped"],[1,"candidatesOrder"],["lines","none","id","candidatesOrder","cdkDropList","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["candidatesOrder",""],["class","iosDndFixItem",4,"ngFor","ngForOf","ngForTrackBy"],[1,"iosDndFixItem"],["cdkDrag","",1,"orderItem",3,"cdkDragStartDelay","id"],[1,"avatarOrderContainer"],[1,"avatarOrder"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],["class","iosDndFixGap",4,"ngIf"],[1,"avatar",3,"candidate"],[1,"iosDndFixGap"]],template:function(t,a){1&t&&(n.Nb(0,"ion-header"),n.Nb(1,"ion-toolbar"),n.Nb(2,"ion-buttons",0),n.Jb(3,"ion-menu-button"),n.Mb(),n.Nb(4,"ion-title"),n.qc(5),n.Mb(),n.Nb(6,"ion-buttons",1),n.Jb(7,"ion-back-button",2),n.Mb(),n.Mb(),n.Nb(8,"ion-toolbar"),n.Nb(9,"ion-segment",3),n.Vb("ngModelChange",(function(t){return a.segment=t})),n.Nb(10,"ion-segment-button",4),n.qc(11),n.Mb(),n.Nb(12,"ion-segment-button",5),n.qc(13),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Nb(14,"ion-content",6),n.Jb(15,"app-baskets2",7),n.oc(16,N,6,7,"div",8),n.Nb(17,"ion-fab",9),n.Nb(18,"div",10),n.Nb(19,"ion-fab-button",11),n.Vb("click",(function(){return a.createComment()})),n.Jb(20,"ion-icon",12),n.Mb(),n.Nb(21,"ion-fab-button",13),n.Vb("click",(function(){return a.changeOrder()})),n.Jb(22,"ion-icon",14),n.Mb(),n.Mb(),n.Mb(),n.Mb()),2&t&&(n.yb(5),n.rc(null==a.taskDesc?null:a.taskDesc.description),n.yb(4),n.dc("ngModel",a.segment),n.yb(2),n.sc(" ",a.langProvider.Ordered," "),n.yb(2),n.sc(" ",a.langProvider.Baskets," "),n.yb(2),n.dc("hidden","baskets"!==a.segment)("integrated",a.integratedBaskets),n.yb(1),n.dc("ngIf",a.isTaskInit))},directives:[p.B,p.zb,p.l,p.R,p.xb,p.g,p.h,p.ib,p.Mb,f.j,f.m,p.jb,p.u,l.a,y.t,p.w,s.a,p.x,p.C,s.f,D.a,s.e,p.s,p.O,y.s,p.H,C.a,s.d,s.c],styles:[".content[_ngcontent-%COMP%]{height:100%;width:100%;display:flex}ion-chip[_ngcontent-%COMP%]{padding:0}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{height:100%;width:100%;overflow:scroll;min-width:var(--avatar-empty-width);background:transparent}.avatarContainer[_ngcontent-%COMP%]{--background:transparent}.candidatesSelection[_ngcontent-%COMP%]{height:80%;--background:rgba(160,165,177,0.541)}.candidatesOrder[_ngcontent-%COMP%]{height:100%;min-width:30%;--background:rgba(157,186,250,0.541)}.avatarOrderContainer[_ngcontent-%COMP%]{display:flex;align-items:center}.avatarOrder[_ngcontent-%COMP%]{margin-right:.2rem}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.reverseOrder[_ngcontent-%COMP%]{margin-top:20%}.orderItem[_ngcontent-%COMP%]{--background:transparent;--padding-start:0.2rem}"]}),t})()},CIRo:function(t,a,e){"use strict";e.d(a,"a",(function(){return P}));var i=e("mrSG"),n=e("kLqA"),s=e("Mxx3"),o=e("AytR"),d=e("fXoL"),r=e("TEn/"),c=e("L5fO"),l=e("ufmx"),b=e("zrcv"),h=e("ofXK"),g=e("g1yl");function k(t,a){if(1&t){const t=d.Ob();d.Nb(0,"app-candidate-avatar",13),d.Vb("click",(function(){d.ic(t);const e=a.$implicit,i=d.Xb();return i.selectRemoveAction(i.basketItemsEdit[e._id])})),d.Mb()}if(2&t){const t=a.$implicit,e=d.Xb();d.dc("candidate",t)("total",e.basketItemsEdit[t._id].total)("isSelected",e.dirtyItems[t._id])("isShowTotal",!0)("selectedStyle","redBlue")}}let p=(()=>{class t{constructor(t,a,e,i,n){this.modalCtrl=t,this.langProvider=a,this.candidatesDelegator=e,this.msgService=i,this.navCtrl=n,this.dirtyItems={},this.mode="add"}ngOnInit(){this.basketItemsOriginal=this.basketItems.reduce((t,a)=>(t[a.candidate]=a,t),{}),this.candidates=this.candidatesDelegator.getCandidatesByIds(Object.keys(this.basketItemsOriginal)),this.candidates.sort((t,a)=>t.number-a.number),this.basketItemsEdit=JSON.parse(JSON.stringify(this.basketItemsOriginal)),this.selectRemoveAction=this.selectItem}trackByFn(t,a){return a?a._id:t}selectItem(t){!this.taskConfig.isCandidateMultiBasket&&t.total>0?this.msgService.showToast(this.langProvider.CandidateAlreadyExistInBasket,2e3,"toastWarn"):this.taskConfig.maxTotalPerSingleEdit&&t.total-this.basketItemsOriginal[t.candidate].total>=this.taskConfig.maxTotalPerSingleEdit?this.msgService.showToast(this.langProvider.MaxTotalsPerSingleEditBasket,2e3,"toastWarn"):this.basket.maxCandidatesAllowed&&this.basketItems.filter(t=>t.total>0).length>this.basket.maxCandidatesAllowed?this.msgService.showToast(this.langProvider.MaxCandidatesForBasket,2e3,"toastWarn"):(t.total++,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total)}removeItem(t){t.total>0&&t.total--,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total}changeAddMode(){this.mode="add",this.selectRemoveAction=this.selectItem}changeRemoveMode(){this.mode="remove",this.selectRemoveAction=this.removeItem}activate(){const t=Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).map(t=>this.basketItemsEdit[t]);this.modalCtrl.dismiss(t)}back(t){return Object(i.a)(this,void 0,void 0,(function*(){Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).length>0?(yield this.msgService.showAreYouSure(this.langProvider.DataNotSaved))&&this.modalCtrl.dismiss():this.modalCtrl.dismiss()}))}}return t.\u0275fac=function(a){return new(a||t)(d.Ib(r.Eb),d.Ib(c.b),d.Ib(l.a),d.Ib(b.a),d.Ib(r.Fb))},t.\u0275cmp=d.Cb({type:t,selectors:[["app-basketkeyboard"]],inputs:{basketItems:"basketItems",taskConfig:"taskConfig",basket:"basket"},decls:19,vars:5,consts:[["translucent","true"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"options"],[3,"color","click"],["name","add"],["name","remove"],[1,"container"],[1,"candiContainer"],["slot","start","class","candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click",4,"ngFor","ngForOf","ngForTrackBy"],["color","secondary",1,"activate",3,"click"],["name","checkmark"],["slot","start",1,"candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click"]],template:function(t,a){1&t&&(d.Nb(0,"ion-header",0),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-title"),d.qc(3),d.Mb(),d.Nb(4,"ion-buttons",1),d.Nb(5,"ion-button",2),d.Vb("click",(function(t){return a.back(t)})),d.Jb(6,"ion-icon",3),d.Mb(),d.Mb(),d.Mb(),d.Nb(7,"ion-toolbar"),d.Nb(8,"div",4),d.Nb(9,"ion-fab-button",5),d.Vb("click",(function(){return a.changeAddMode()})),d.Jb(10,"ion-icon",6),d.Mb(),d.Nb(11,"ion-fab-button",5),d.Vb("click",(function(){return a.changeRemoveMode()})),d.Jb(12,"ion-icon",7),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(13,"ion-content"),d.Nb(14,"div",8),d.Nb(15,"div",9),d.oc(16,k,1,5,"app-candidate-avatar",10),d.Mb(),d.Nb(17,"ion-fab-button",11),d.Vb("click",(function(){return a.activate()})),d.Jb(18,"ion-icon",12),d.Mb(),d.Mb(),d.Mb()),2&t&&(d.yb(3),d.sc(" ",a.basket.name," "),d.yb(6),d.dc("color","add"===a.mode?"primary":"light"),d.yb(2),d.dc("color","remove"===a.mode?"danger":"light"),d.yb(5),d.dc("ngForOf",a.candidates)("ngForTrackBy",a.trackByFn))},directives:[r.B,r.zb,r.xb,r.l,r.k,r.C,r.x,r.u,h.s,g.a],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.candiContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;overflow:scroll}.options[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:.5rem}.activate[_ngcontent-%COMP%]{margin:.5rem auto}"],changeDetection:0}),t})();var m=e("tyNb"),v=e("3LWr"),u=e("NrBX"),f=e("pQKU");function y(t,a){if(1&t&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-buttons",1),d.Jb(3,"ion-menu-button"),d.Mb(),d.Nb(4,"ion-buttons",2),d.Jb(5,"ion-back-button",3),d.Mb(),d.Nb(6,"ion-title"),d.qc(7),d.Mb(),d.Mb(),d.Mb()),2&t){const t=d.Xb();d.yb(7),d.rc(null==t.taskDesc?null:t.taskDesc.description)}}function D(t,a){if(1&t&&d.Jb(0,"app-candidate-avatar",12),2&t){const t=d.Xb().$implicit,a=d.Xb(3);d.dc("candidateId",t.candidate)("total",t.total)("isShowTotal",a.taskConfig.isCandidateMultiBasket)}}function C(t,a){if(1&t&&(d.Nb(0,"div"),d.oc(1,D,1,3,"app-candidate-avatar",11),d.Mb()),2&t){const t=a.$implicit;d.yb(1),d.dc("ngIf",t.total>0)}}function M(t,a){if(1&t){const t=d.Ob();d.Nb(0,"ion-chip",7),d.Vb("click",(function(){d.ic(t);const e=a.$implicit;return d.Xb(2).selectBasket(e)})),d.Nb(1,"ion-label",8),d.qc(2),d.Mb(),d.Nb(3,"div",9),d.oc(4,C,2,1,"div",10),d.Mb(),d.Mb()}if(2&t){const t=a.$implicit,e=d.Xb(2);d.nc("direction",e.taskDesc.langDir),d.Ab("selectedBasket",t.name===e.selectedBasket),d.yb(2),d.rc(t.name),d.yb(2),d.dc("ngForOf",e.taskSavedData.main.baskets[t.name].all)}}function I(t,a){if(1&t){const t=d.Ob();d.Nb(0,"ion-fab",13),d.Nb(1,"ion-fab-button",14),d.Vb("click",(function(){return d.ic(t),d.Xb(2).createComment()})),d.Jb(2,"ion-icon",15),d.Mb(),d.Mb()}}function O(t,a){if(1&t&&(d.Nb(0,"ion-content"),d.Nb(1,"div",4),d.oc(2,M,5,6,"ion-chip",5),d.Mb(),d.oc(3,I,3,0,"ion-fab",6),d.Mb()),2&t){const t=d.Xb();d.yb(2),d.dc("ngForOf",t.taskConfig.baskets),d.yb(1),d.dc("ngIf",!t.integrated)}}let P=(()=>{class t{constructor(t,a,e,i,n,s,d,r,c,l){this.router=t,this.route=a,this.store=e,this.modalCtrl=i,this.msgService=n,this.langProvider=s,this.popoverController=d,this.candidatesDelegator=r,this.taskDelegator=c,this.basketDelegator=l,this.previewSize=o.a.basketPreviewSize}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=yield this.initTask(),this.integrated||(this.taskSavedData=yield this.loadTask()),this.isTaskInit=!0}))}ionViewWillLeave(){return Object(i.a)(this,void 0,void 0,(function*(){this.basketDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,o.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),this.msgService.showToast(this.langProvider.TaskSaved,o.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))}))}initTask(){var t,a,e;return Object(i.a)(this,void 0,void 0,(function*(){let i;i=null!==(e=null!==(a=null===(t=this.integrated)||void 0===t?void 0:t.parentTaskId)&&void 0!==a?a:this.route.snapshot.paramMap.get(s.a.TaskDescId))&&void 0!==e?e:"t13",this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.taskDesc=yield this.taskDelegator.getTaskDesk(i),this.taskConfig=yield this.taskDelegator.getTasksConfig(i);const n={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,candidates:this.candidates.map(t=>t._id),baskets:{}}};for(const t of this.taskConfig.baskets)n.main.baskets[t.name]={name:t.name,size:0,maxCandidatesAllowed:t.maxCandidatesAllowed,preview:[],all:this.candidates.map(t=>({candidate:t._id,total:0}))};return n}))}saveTask(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.basketDelegator.saveTask(this.taskSavedData,this.taskConfig)}))}saveTaskIntegrated(){return Object(i.a)(this,void 0,void 0,(function*(){throw new Error("Method not implemented.")}))}loadTask(){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.route.snapshot.paramMap.get(s.a.SavedTaskId);if(t){this.isTaskUpdate=!0;const a=yield this.basketDelegator.loadTask(t);this.candidates=yield this.candidatesDelegator.getCandidatesByIds(a.main.candidates),this.setLoadedData(a),this.taskSavedData=a}return this.taskSavedData}))}setLoadedData(t){for(const a in t.main.baskets)if(Object.prototype.hasOwnProperty.call(t.main.baskets,a)){const e=t.main.baskets[a],i=[];for(const t of e.preview){const a=e.all.find(a=>a.candidate===t.candidate);i.push(a)}e.preview=i}if(!this.taskConfig.isCandidatesStatic){const a=new Set;for(const e in t.main.baskets)Object.prototype.hasOwnProperty.call(t.main.baskets,e)&&t.main.baskets[e].all.forEach(t=>a.add(t.candidate));for(const t of a)this.candidates=this.candidates.filter(a=>a._id!==t)}}loadTaskIntegrated(t){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=t,yield this.setLoadedData(t)}))}selectBasket(t){return Object(i.a)(this,void 0,void 0,(function*(){this.selectedBasket=this.selectedBasket!==t.name?t.name:null,yield this.showCanidatesSelection(t)}))}showCanidatesSelection(t){return Object(i.a)(this,void 0,void 0,(function*(){const a=this.taskSavedData.main.baskets[t.name],e=yield this.modalCtrl.create({component:p,componentProps:{basketItems:a.all,taskConfig:this.taskConfig,basket:t}});yield e.present();const i=yield e.onWillDismiss();if(i.data){a.preview=i.data;for(const t of i.data){const e=a.all.find(a=>a.candidate===t.candidate);e&&(e.total=t.total)}}}))}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:n.Guid.raw()}],{skipLocationChange:!0})}}return t.\u0275fac=function(a){return new(a||t)(d.Ib(m.f),d.Ib(m.a),d.Ib(v.a),d.Ib(r.Eb),d.Ib(b.a),d.Ib(c.b),d.Ib(r.Jb),d.Ib(l.a),d.Ib(u.a),d.Ib(f.a))},t.\u0275cmp=d.Cb({type:t,selectors:[["app-baskets2"]],inputs:{integrated:"integrated"},decls:2,vars:2,consts:[[4,"ngIf"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[1,"baskets"],["id","baskets","class","basket","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",3,"selectedBasket","direction","click",4,"ngFor","ngForOf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content",4,"ngIf"],["id","baskets","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",1,"basket",3,"click"],["color","secondary",1,"basketHeader"],[1,"basketItems",2,"direction","ltr"],[4,"ngFor","ngForOf"],["class","avatarBasket",3,"candidateId","total","isShowTotal",4,"ngIf"],[1,"avatarBasket",3,"candidateId","total","isShowTotal"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],["color","primary",3,"click"],["name","chatbox-ellipses"]],template:function(t,a){1&t&&(d.oc(0,y,8,1,"ion-header",0),d.oc(1,O,4,2,"ion-content",0)),2&t&&(d.dc("ngIf",!a.integrated),d.yb(1),d.dc("ngIf",a.isTaskInit))},directives:[h.t,r.B,r.zb,r.l,r.R,r.g,r.h,r.xb,r.u,h.s,r.s,r.N,g.a,r.w,r.x,r.C],styles:[".container[_ngcontent-%COMP%]{flex-direction:column;width:100%}.baskets[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;height:100%}.baskets[_ngcontent-%COMP%]{align-content:flex-start;overflow:scroll}.basket[_ngcontent-%COMP%], .baskets[_ngcontent-%COMP%]{flex-direction:column;flex:1}.basket[_ngcontent-%COMP%]{min-height:8rem;display:flex}.basketItems[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:100%;flex-wrap:wrap;overflow:scroll}.avatarBasket[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:.5rem}"]}),t})()},TtBN:function(t,a,e){"use strict";e.d(a,"a",(function(){return T}));var i=e("mrSG"),n=e("kMc0"),s=e("fXoL"),o=e("L5fO"),d=e("pQKU"),r=e("ofXK"),c=e("TEn/");function l(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"span",3),s.qc(2),s.Mb(),s.Nb(3,"span",5),s.qc(4),s.Mb(),s.Kb()),2&t){const t=s.Xb(2);s.yb(2),s.rc(t.langProvider.TotalTasksNotParticipate),s.yb(2),s.rc(t.orderedAggData.totalNotParticipated)}}function b(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"span",3),s.qc(2),s.Mb(),s.Nb(3,"span",5),s.qc(4),s.Mb(),s.Nb(5,"span",8),s.qc(6),s.Mb(),s.Nb(7,"span",9),s.qc(8),s.Mb(),s.Kb()),2&t){const t=s.Xb().$implicit;s.yb(2),s.rc(t.key),s.yb(2),s.rc(t.value.value),s.yb(2),s.rc(t.value.avg),s.yb(2),s.rc(t.value.max)}}function h(t,a){if(1&t&&(s.Lb(0),s.oc(1,b,9,4,"ng-container",0),s.Kb()),2&t){const t=a.$implicit;s.yb(1),s.dc("ngIf",t.value.avg>0)}}function g(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.qc(5),s.Mb(),s.Mb(),s.Nb(6,"div",2),s.Lb(7),s.Nb(8,"span",3),s.qc(9),s.Mb(),s.Nb(10,"span",4),s.qc(11),s.Yb(12,"date"),s.Mb(),s.Kb(),s.Lb(13),s.Nb(14,"span",3),s.qc(15),s.Mb(),s.Nb(16,"span",4),s.qc(17),s.Yb(18,"date"),s.Mb(),s.Kb(),s.Lb(19),s.Nb(20,"span",3),s.qc(21),s.Mb(),s.Nb(22,"span",5),s.qc(23),s.Mb(),s.Kb(),s.oc(24,l,5,2,"ng-container",0),s.Lb(25),s.Nb(26,"span",3),s.qc(27),s.Mb(),s.Nb(28,"span",5),s.qc(29),s.Mb(),s.Kb(),s.Mb(),s.Nb(30,"div",6),s.Nb(31,"span",7),s.qc(32),s.Mb(),s.Nb(33,"span",5),s.qc(34),s.Mb(),s.Nb(35,"span",8),s.qc(36),s.Mb(),s.Nb(37,"span",9),s.qc(38),s.Mb(),s.oc(39,h,2,1,"ng-container",10),s.Yb(40,"keyvalue"),s.Mb(),s.Mb(),s.Mb(),s.Kb()),2&t){const t=s.Xb();s.yb(1),s.nc("direction",t.langProvider.LangDirection),s.yb(4),s.rc(t.taskName),s.yb(4),s.rc(t.langProvider.TaskFirstDate),s.yb(2),s.rc(s.ac(12,17,t.orderedAggData.firstTaskDate,"dd/MM/yy HH:mm:ss")),s.yb(4),s.rc(t.langProvider.TaskLastDate),s.yb(2),s.rc(s.ac(18,20,t.orderedAggData.lastTaskDate,"dd/MM/yy HH:mm:ss")),s.yb(4),s.rc(t.langProvider.TotalTasks),s.yb(2),s.rc(t.totalTasks),s.yb(1),s.dc("ngIf",t.orderedAggData.totalNotParticipated>0),s.yb(3),s.rc(t.langProvider.OrderedAvgPosition),s.yb(2),s.rc(t.orderedAggData.avgPosition),s.yb(3),s.sc("",t.langProvider.Tags,":"),s.yb(2),s.rc(t.langProvider.BasketValue),s.yb(2),s.rc(t.langProvider.BasketAvg),s.yb(2),s.rc(t.langProvider.BasketMax),s.yb(1),s.dc("ngForOf",s.Zb(40,23,t.basketsAggData.basketsTotals))}}let k=(()=>{class t{constructor(t,a,e){this.langProvider=t,this.orderedDelegtor=a,this.basketDelegator=e}ngOnInit(){this.calcHistory()}calcHistory(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskName=this.tasks[0].name,this.totalTasks=this.tasks.length;const t=new n.a;t.start(),this.orderedAggData=this.orderedDelegtor.calcCandidateAggDataForTask(this.candidate,this.tasks);const a=yield this.orderedDelegtor.loadTasksBaskets(this.tasks);this.basketsAggData=this.basketDelegator.calcCandidateAggData(this.candidate,this.candidates,a);const e=t.stop();console.log(`OrderedCandidateHistoryAgg ${this.candidate._id} time: ${e}`),this.isInit=!0}))}}return t.\u0275fac=function(a){return new(a||t)(s.Ib(o.b),s.Ib(T),s.Ib(d.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-candidate-history-agg"]],inputs:{tasks:"tasks",candidate:"candidate",candidates:"candidates"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[1,"orderStats"],[1,"col1"],[1,"col2","ltr","ml-auto"],[1,"col2"],[1,"orderBaskets"],[1,"col1","basketsHeader"],[1,"col3"],[1,"col4"],[4,"ngFor","ngForOf"]],template:function(t,a){1&t&&s.oc(0,g,41,25,"ng-container",0),2&t&&s.dc("ngIf",a.isInit)},directives:[r.t,c.H,c.N,r.s],pipes:[r.f,r.l],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.orderStats[_ngcontent-%COMP%]{display:grid}.orderBaskets[_ngcontent-%COMP%]{display:grid;margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),t})();function p(t,a){if(1&t&&(s.Nb(0,"span"),s.qc(1),s.Mb()),2&t){const t=s.Xb(2);s.yb(1),s.tc("",t.langProvider.Position," : ",t.item.position,"")}}function m(t,a){if(1&t&&(s.Nb(0,"span"),s.qc(1),s.Mb()),2&t){const t=s.Xb(2);s.yb(1),s.rc(t.langProvider.NotParticipate)}}function v(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"span",7),s.qc(2),s.Mb(),s.Nb(3,"span",8),s.qc(4),s.Mb(),s.Kb()),2&t){const t=s.Xb().$implicit;s.yb(2),s.rc(t.key),s.yb(2),s.rc(t.value.total)}}function u(t,a){if(1&t&&(s.Lb(0),s.oc(1,v,5,2,"ng-container",0),s.Kb()),2&t){const t=a.$implicit;s.yb(1),s.dc("ngIf",t.value.total>0)}}function f(t,a){if(1&t&&(s.Nb(0,"div",5),s.Nb(1,"div",6),s.Nb(2,"span",7),s.qc(3),s.Mb(),s.Nb(4,"span",8),s.qc(5),s.Mb(),s.oc(6,u,2,1,"ng-container",9),s.Yb(7,"keyvalue"),s.Mb(),s.Mb()),2&t){const t=s.Xb(2);s.yb(3),s.rc(t.langProvider.Tags),s.yb(2),s.rc(t.langProvider.Total),s.yb(1),s.dc("ngForOf",s.Zb(7,3,t.item.basketItems))}}function y(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.qc(5),s.Mb(),s.Nb(6,"span",2),s.qc(7),s.Yb(8,"date"),s.Mb(),s.Mb(),s.Nb(9,"div",3),s.Nb(10,"span"),s.qc(11),s.Mb(),s.oc(12,p,2,2,"span",0),s.oc(13,m,2,1,"span",0),s.Mb(),s.oc(14,f,8,5,"div",4),s.Mb(),s.Mb(),s.Kb()),2&t){const t=s.Xb();s.yb(1),s.nc("direction",t.langProvider.LangDirection),s.yb(4),s.rc(t.task.name),s.yb(2),s.rc(s.ac(8,11,t.task.date,"dd/MM/yy HH:mm:ss")),s.yb(2),s.nc("direction",t.langProvider.LangDirection),s.yb(2),s.tc("",t.langProvider.TotalParticipants," : ",t.item.total,""),s.yb(1),s.dc("ngIf",t.item.position>0),s.yb(1),s.dc("ngIf",0===t.item.position),s.yb(1),s.dc("ngIf",t.item.basketItems)}}let D=(()=>{class t{constructor(t,a,e){this.taskDelegator=t,this.basketsDelegator=a,this.langProvider=e}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.calcHistory()}))}calcHistory(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSaveData=yield this.taskDelegator.loadTask(this.task._id),this.item={total:this.task.orderedCandidates.length,position:this.task.orderedCandidates.findIndex(t=>t===this.candidate._id)+1,date:new Date(this.task.date)};const t=this.basketsDelegator.GetBasketsForCandidate(this.candidate._id,this.taskSaveData.basketsSaveData.main);Object.keys(t).length>0&&(this.item.basketItems=t),this.isInit=!0}))}}return t.\u0275fac=function(a){return new(a||t)(s.Ib(T),s.Ib(d.a),s.Ib(o.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],[1,"order"],["class","orderBaskets",4,"ngIf"],[1,"orderBaskets"],[1,"baskets"],[1,"col1"],[1,"col2"],[4,"ngFor","ngForOf"]],template:function(t,a){1&t&&s.oc(0,y,15,14,"ng-container",0),2&t&&s.dc("ngIf",a.isInit)},directives:[r.t,c.H,c.N,r.s],pipes:[r.f,r.l],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .order[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.order[_ngcontent-%COMP%], .orderBaskets[_ngcontent-%COMP%]{margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}.baskets[_ngcontent-%COMP%]{display:grid}"]}),t})(),C=(()=>{class t{constructor(t){this.langProvider=t}ngOnInit(){this.calcHistory()}calcHistory(){this.totalParticipated=this.task.orderedCandidates.length,this.totalCandidates=this.task.candidates.length;const t=this.totalParticipated/this.totalCandidates;this.completedStatus=1===t?"full":t>=.5?"half":"none"}}return t.\u0275fac=function(a){return new(a||t)(s.Ib(o.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-history"]],inputs:{task:"task",candidates:"candidates"},decls:5,vars:11,consts:[[1,"container"]],template:function(t,a){1&t&&(s.Nb(0,"div",0),s.Nb(1,"span"),s.qc(2),s.Mb(),s.Nb(3,"span"),s.qc(4),s.Mb(),s.Mb()),2&t&&(s.nc("direction",a.langProvider.LangDirection),s.Ab("completed","full"===a.completedStatus)("halfCompleted","half"===a.completedStatus)("notCompleted","none"===a.completedStatus),s.yb(2),s.rc(a.langProvider.TotalParticipants),s.yb(2),s.tc("",a.totalCandidates," / ",a.totalParticipated,""))},styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.halfCompleted[_ngcontent-%COMP%]{color:orange}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),t})();var M=e("2lKs"),I=e("nbnm"),O=e("ufmx"),P=e("h7jJ");let T=(()=>{class t{constructor(t,a,e){this.entityNamer=t,this.candidatesDelegator=a,this.dataProvider=e}getTaskConfig(t){throw new Error("Method not implemented.")}getTaskName(){throw new Error("Method not implemented.")}exportCopy(t,a){return Object(i.a)(this,void 0,void 0,(function*(){const a=yield this.loadTask(t),e=this.candidatesDelegator.getCandidatesByIdsMap(a.basketsSaveData.main.candidates);a.main.exportOrder=[];for(const t of a.main.orderedCandidates){const i=e[t];a.main.exportOrder.push({candidateNum:i.number,candidateGroup:i.group})}const i=this.candidatesDelegator.getCandidatesByIdsMap(a.basketsSaveData.main.candidates);for(const t in a.basketsSaveData.main.baskets)if(Object.prototype.hasOwnProperty.call(a.basketsSaveData.main.baskets,t)){const e=a.basketsSaveData.main.baskets[t];delete e.preview;for(const t of e.all){const a=i[t.candidate];t.exportData={candidateNum:a.number,candidateGroup:a.group}}}return a}))}saveTask(t,a){var e,n,s,o;return Object(i.a)(this,void 0,void 0,(function*(){const a=[];return t.main._id=null!==(e=t.main._id)&&void 0!==e?e:this.entityNamer.taskPrefixWithUniqueIdAnd(t.main.type,t.main.taskId),t.main._rev=t.main._rev,t.main.date=null!==(n=t.main.date)&&void 0!==n?n:new Date,t.main.updateDate=new Date,a.push(t.main),t.basketsSaveData.main._id=null!==(s=t.basketsSaveData.main._id)&&void 0!==s?s:""+t.main._id.replace("main","baskets"),t.basketsSaveData.main._rev=t.basketsSaveData.main._rev,t.basketsSaveData.main.date=null!==(o=t.basketsSaveData.main.date)&&void 0!==o?o:new Date,t.basketsSaveData.main.updateDate=new Date,t.main.childIds.baskets=[t.basketsSaveData.main._id],a.push(t.basketsSaveData.main),yield this.dataProvider.saveEntities(a),t}))}loadTask(t){return Object(i.a)(this,void 0,void 0,(function*(){const a=yield this.dataProvider.loadTask(t),e=a._id.replace("main","baskets");return{main:a,basketsSaveData:{main:(yield this.dataProvider.loadEntitiesByPrefix(e))[0]}}}))}deleteTask(t){return Object(i.a)(this,void 0,void 0,(function*(){const a=[t],e=t._id.replace("main","baskets");(yield this.dataProvider.loadEntitiesByPrefix(e,{includeDocs:!1})).forEach(t=>a.push(t)),yield this.dataProvider.deleteEntities(a)}))}getTaskHistory(){throw new Error("Method not implemented.")}getComponentRoute(){return"ordered"}getComponent(){return M.a}getHistoryComponent(){return C}getCandidateHistoryComponent(){return D}getCandidateAggregateComponent(){return k}getTasksForCandidates(t){throw new Error("Method not implemented.")}checkTaskEmpty(t,a){var e;const i=(null===(e=t.main.orderedCandidates)||void 0===e?void 0:e.length)>0,n=Object.keys(t.basketsSaveData.main.baskets).some(a=>{var e,i;return null===(i=null===(e=t.basketsSaveData.main.baskets[a])||void 0===e?void 0:e.all)||void 0===i?void 0:i.some(t=>t.total>0)});return!(t.main._id||i||n)}loadTasksBaskets(t){return Object(i.a)(this,void 0,void 0,(function*(){const a=t.reduce((t,a,e)=>(t.push(...a.childIds.baskets),t),[]);return yield this.dataProvider.loadEntitiesByIds(a)}))}calcCandidateAggDataForAll(t,a){const e=a.reduce((t,a)=>(t[a.taskId]||(t[a.taskId]=[]),t[a.taskId].push(a),t),{}),i=[];for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const e=this.calcCandidateAggDataForTask(t,a);i.push(e)}return i}calcCandidateAggDataForTask(t,a){const e=[],i=a.sort((t,a)=>new Date(t.date).getTime()-new Date(a.date).getTime()),n=i[0].date,s=i[a.length-1].date;for(const d of a){const a={total:d.orderedCandidates.length,position:d.orderedCandidates.findIndex(a=>a===t._id)+1,date:d.date};e.push(a)}const o=e.filter(t=>0===t.position).length;return{firstTaskDate:n,lastTaskDate:s,totalParticipated:e.length-o,totalNotParticipated:o,avgPosition:(e.filter(t=>t.position>-1).map(t=>t.position).reduce((t,a)=>t+a)/a.length).toPrecision(1)}}}return t.\u0275fac=function(a){return new(a||t)(s.Rb(I.a),s.Rb(O.a),s.Rb(P.a))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);