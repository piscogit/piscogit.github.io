(window.webpackJsonp=window.webpackJsonp||[]).push([[3,27],{"2lKs":function(t,e,a){"use strict";a.d(e,"a",(function(){return T}));var i=a("mrSG"),n=a("fXoL"),s=a("5+WD"),d=a("Mxx3"),o=a("pQKU"),c=a("AytR"),r=a("kLqA"),l=a("CIRo"),b=a("tyNb"),h=a("3LWr"),g=a("zrcv"),k=a("L5fO"),p=a("TEn/"),m=a("ufmx"),v=a("NrBX"),u=a("TtBN"),f=a("3Pt+"),y=a("ofXK"),C=a("OZ4V"),M=a("g1yl");const D=["candidatesOrder"];function I(t,e){if(1&t&&n.Jb(0,"app-candidate-avatar",29),2&t){const t=n.Xb().$implicit;n.dc("candidate",t)}}function O(t,e){if(1&t&&n.Jb(0,"app-candidate-avatar",29),2&t){const t=n.Xb().$implicit;n.dc("candidate",t)}}function P(t,e){1&t&&n.Jb(0,"span",30)}function N(t,e){if(1&t&&(n.Nb(0,"div",21),n.Nb(1,"ion-item",22),n.Nb(2,"div",23),n.Nb(3,"span",24),n.pc(4),n.Mb(),n.Jb(5,"app-candidate-avatar",25),n.Mb(),n.nc(6,I,1,1,"app-candidate-avatar",26),n.nc(7,O,1,1,"app-candidate-avatar",27),n.Mb(),n.nc(8,P,1,0,"span",28),n.Mb()),2&t){const t=e.$implicit,a=e.index,i=n.Xb(2);n.yb(1),n.ec("id","order_",t._id,""),n.dc("cdkDragStartDelay",i.dragDelay),n.yb(3),n.rc("",a+1,"."),n.yb(1),n.dc("candidate",t),n.yb(3),n.dc("ngIf",i.store.isIos)}}function w(t,e){if(1&t){const t=n.Ob();n.Nb(0,"div",15),n.Nb(1,"app-candidate-selection",16),n.Vb("candidateSelected",(function(e){return n.ic(t),n.Xb().selectCandidate(e)}))("cdkDropListDropped",(function(e){return n.ic(t),n.Xb().dropCandidates(e)})),n.Mb(),n.Nb(2,"ion-chip",17),n.Nb(3,"ion-list",18,19),n.Vb("cdkDropListDropped",(function(e){return n.ic(t),n.Xb().dropCandidatesOrder(e)})),n.nc(5,N,9,5,"div",20),n.Mb(),n.Mb(),n.Mb()}if(2&t){const t=n.Xb();n.dc("hidden","ordered"!==t.segment),n.yb(1),n.dc("candidates",t.candidates)("selectedCandidates",t.selectedCandidates)("cdkDropListData",t.candidates),n.yb(2),n.dc("cdkDropListData",t.orderedCandidates),n.yb(2),n.dc("ngForOf",t.orderedCandidates)("ngForTrackBy",t.trackByFn)}}let T=(()=>{class t{constructor(t,e,a,i,n,s,o,c,r,l){this.router=t,this.route=e,this.store=a,this.msgService=i,this.langProvider=n,this.popoverController=s,this.candidatesDelegator=o,this.taskDelegator=c,this.basketDelegator=r,this.orderedDelegator=l,this.orderedCandidates=[],this.selectedCandidates={},this.dragDelay=d.a.DragDelay,this.segment="ordered",this.integratedBaskets={parentId:null,parentTaskId:null,parentTaskType:null}}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=yield this.initTask(),this.taskSavedData=yield this.loadTask(),this.isTaskInit=!0}))}initTask(){var t;return Object(i.a)(this,void 0,void 0,(function*(){const e=null!==(t=this.route.snapshot.paramMap.get(d.a.TaskDescId))&&void 0!==t?t:"t13";this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.taskDesc=yield this.taskDelegator.getTaskDesk(e),this.taskConfig=yield this.taskDelegator.getTasksConfig(e);const a={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,orderedCandidates:[],candidates:this.candidates.map(t=>t._id),childIds:{}},basketsSaveData:null};return this.integratedBaskets={parentId:null,parentTaskId:this.taskDesc.id,parentTaskType:this.taskDesc.type},a}))}ionViewWillLeave(){var t;return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData.main.orderedCandidates=this.orderedCandidates.map(t=>t._id),this.taskSavedData.basketsSaveData=null===(t=this.basketPage)||void 0===t?void 0:t.taskSavedData,this.orderedDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,c.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),yield this.basketPage.ionViewWillLeave(),this.msgService.showToast(this.langProvider.TaskSaved,c.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))}))}saveTask(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.orderedDelegator.saveTask(this.taskSavedData,this.taskConfig)}))}loadTask(){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.route.snapshot.paramMap.get(d.a.SavedTaskId);let e=this.taskSavedData;if(t){this.isTaskUpdate=!0,e=yield this.orderedDelegator.loadTask(t),this.candidates=yield this.candidatesDelegator.getCandidatesByIds(e.main.candidates);for(const t of e.main.orderedCandidates){const e=this.candidates.find(e=>e._id===t);this.selectCandidate(e)}this.basketPage.loadTaskIntegrated(e.basketsSaveData)}return e}))}dropCandidates(t){if(t.previousContainer===t.container);else{const e=this.orderedCandidates.splice(t.previousIndex,1);this.candidates=this.candidates.sort((t,e)=>t.number-e.number),this.selectedCandidates[e[0]._id]=!1}}dropCandidatesOrder(t){t.previousContainer===t.container?Object(s.g)(t.container.data,t.previousIndex,t.currentIndex):(Object(s.h)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),this.selectedCandidates[t.previousContainer.data[t.previousIndex]._id]=!0)}selectCandidate(t){var e;this.selectedCandidates[t._id]||(this.selectedCandidates[t._id]=!0,this.orderedCandidates.push(t),(null===(e=this.candidatesOrder)||void 0===e?void 0:e.nativeElement)&&setTimeout(()=>{const t=this.candidatesOrder.nativeElement.children;t[t.length-1].scrollIntoView({behaviour:"smooth",block:"end"})},50))}changeOrder(){this.orderedCandidates.reverse()}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:r.Guid.raw()}],{skipLocationChange:!0})}trackByFn(t,e){return e?e._id:t}}return t.\u0275fac=function(e){return new(e||t)(n.Ib(b.f),n.Ib(b.a),n.Ib(h.a),n.Ib(g.a),n.Ib(k.b),n.Ib(p.ib),n.Ib(m.a),n.Ib(v.a),n.Ib(o.a),n.Ib(u.a))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-ordered2"]],viewQuery:function(t,e){var a;1&t&&(n.lc(l.a,!0),n.vc(D,!0,n.l)),2&t&&(n.gc(a=n.Wb())&&(e.basketPage=a.first),n.gc(a=n.Wb())&&(e.candidatesOrder=a.first))},features:[n.xb([o.a])],decls:23,vars:7,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[3,"ngModel","ngModelChange"],["value","ordered"],["value","baskets"],[1,"content"],[1,"container",3,"hidden","integrated"],["class","container","cdkDropListGroup","",3,"hidden",4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],[2,"display","flex"],["color","primary",3,"click"],["name","chatbox-ellipses"],["color","light",2,"margin-left","0.2rem",3,"click"],["name","repeat"],["cdkDropListGroup","",1,"container",3,"hidden"],["id","candidates","cdkDropList","",1,"candidatesSelection",3,"candidates","selectedCandidates","cdkDropListData","candidateSelected","cdkDropListDropped"],[1,"candidatesOrder"],["lines","none","id","candidatesOrder","cdkDropList","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["candidatesOrder",""],["class","iosDndFixItem",4,"ngFor","ngForOf","ngForTrackBy"],[1,"iosDndFixItem"],["cdkDrag","",1,"orderItem",3,"cdkDragStartDelay","id"],[1,"avatarOrderContainer"],[1,"avatarOrder"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],["class","iosDndFixGap",4,"ngIf"],[1,"avatar",3,"candidate"],[1,"iosDndFixGap"]],template:function(t,e){1&t&&(n.Nb(0,"ion-header"),n.Nb(1,"ion-toolbar"),n.Nb(2,"ion-buttons",0),n.Jb(3,"ion-menu-button"),n.Mb(),n.Nb(4,"ion-title"),n.pc(5),n.Mb(),n.Nb(6,"ion-buttons",1),n.Jb(7,"ion-back-button",2),n.Mb(),n.Mb(),n.Nb(8,"ion-toolbar"),n.Nb(9,"ion-segment",3),n.Vb("ngModelChange",(function(t){return e.segment=t})),n.Nb(10,"ion-segment-button",4),n.pc(11),n.Mb(),n.Nb(12,"ion-segment-button",5),n.pc(13),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Nb(14,"ion-content",6),n.Jb(15,"app-baskets2",7),n.nc(16,w,6,7,"div",8),n.Nb(17,"ion-fab",9),n.Nb(18,"div",10),n.Nb(19,"ion-fab-button",11),n.Vb("click",(function(){return e.createComment()})),n.Jb(20,"ion-icon",12),n.Mb(),n.Nb(21,"ion-fab-button",13),n.Vb("click",(function(){return e.changeOrder()})),n.Jb(22,"ion-icon",14),n.Mb(),n.Mb(),n.Mb(),n.Mb()),2&t&&(n.yb(5),n.qc(null==e.taskDesc?null:e.taskDesc.description),n.yb(4),n.dc("ngModel",e.segment),n.yb(2),n.rc(" ",e.langProvider.Ordered," "),n.yb(2),n.rc(" ",e.langProvider.Baskets," "),n.yb(2),n.dc("hidden","baskets"!==e.segment)("integrated",e.integratedBaskets),n.yb(1),n.dc("ngIf",e.isTaskInit))},directives:[p.s,p.Z,p.k,p.F,p.X,p.g,p.h,p.O,p.kb,f.d,f.g,p.P,p.n,l.a,y.m,p.o,s.a,p.p,p.t,s.e,C.a,s.d,p.l,p.D,y.l,p.w,M.a,s.c,s.b],styles:[".content[_ngcontent-%COMP%]{height:100%;width:100%;display:flex}ion-chip[_ngcontent-%COMP%]{padding:0}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{height:100%;width:100%;overflow:scroll;min-width:var(--avatar-empty-width);background:transparent}.avatarContainer[_ngcontent-%COMP%]{--background:transparent}.candidatesSelection[_ngcontent-%COMP%]{height:80%;--background:rgba(160,165,177,0.541)}.candidatesOrder[_ngcontent-%COMP%]{height:100%;min-width:30%;--background:rgba(157,186,250,0.541)}.avatarOrderContainer[_ngcontent-%COMP%]{display:flex;align-items:center}.avatarOrder[_ngcontent-%COMP%]{margin-right:.2rem}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.reverseOrder[_ngcontent-%COMP%]{margin-top:20%}.orderItem[_ngcontent-%COMP%]{--background:transparent;--padding-start:0.2rem}"]}),t})()},CIRo:function(t,e,a){"use strict";a.d(e,"a",(function(){return P}));var i=a("mrSG"),n=a("kLqA"),s=a("Mxx3"),d=a("AytR"),o=a("fXoL"),c=a("TEn/"),r=a("L5fO"),l=a("ufmx"),b=a("zrcv"),h=a("ofXK"),g=a("g1yl");function k(t,e){if(1&t){const t=o.Ob();o.Nb(0,"app-candidate-avatar",13),o.Vb("click",(function(){o.ic(t);const a=e.$implicit,i=o.Xb();return i.selectRemoveAction(i.basketItemsEdit[a._id])})),o.Mb()}if(2&t){const t=e.$implicit,a=o.Xb();o.dc("candidate",t)("total",a.basketItemsEdit[t._id].total)("isSelected",a.dirtyItems[t._id])("isShowTotal",!0)("selectedStyle","redBlue")}}let p=(()=>{class t{constructor(t,e,a,i,n){this.modalCtrl=t,this.langProvider=e,this.candidatesDelegator=a,this.msgService=i,this.navCtrl=n,this.dirtyItems={},this.mode="add"}ngOnInit(){this.basketItemsOriginal=this.basketItems.reduce((t,e)=>(t[e.candidate]=e,t),{}),this.candidates=this.candidatesDelegator.getCandidatesByIds(Object.keys(this.basketItemsOriginal)),this.candidates.sort((t,e)=>t.number-e.number),this.basketItemsEdit=JSON.parse(JSON.stringify(this.basketItemsOriginal)),this.selectRemoveAction=this.selectItem}trackByFn(t,e){return e?e._id:t}selectItem(t){!this.taskConfig.isCandidateMultiBasket&&t.total>0?this.msgService.showToast(this.langProvider.CandidateAlreadyExistInBasket,2e3,"toastWarn"):this.taskConfig.maxTotalPerSingleEdit&&t.total-this.basketItemsOriginal[t.candidate].total>=this.taskConfig.maxTotalPerSingleEdit?this.msgService.showToast(this.langProvider.MaxTotalsPerSingleEditBasket,2e3,"toastWarn"):this.basket.maxCandidatesAllowed&&this.basketItems.filter(t=>t.total>0).length>this.basket.maxCandidatesAllowed?this.msgService.showToast(this.langProvider.MaxCandidatesForBasket,2e3,"toastWarn"):(t.total++,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total)}removeItem(t){t.total>0&&t.total--,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total}changeAddMode(){this.mode="add",this.selectRemoveAction=this.selectItem}changeRemoveMode(){this.mode="remove",this.selectRemoveAction=this.removeItem}activate(){const t=Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).map(t=>this.basketItemsEdit[t]);this.modalCtrl.dismiss(t)}back(t){return Object(i.a)(this,void 0,void 0,(function*(){Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).length>0?(yield this.msgService.showAreYouSure(this.langProvider.DataNotSaved))&&this.modalCtrl.dismiss():this.modalCtrl.dismiss()}))}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(c.eb),o.Ib(r.b),o.Ib(l.a),o.Ib(b.a),o.Ib(c.fb))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-basketkeyboard"]],inputs:{basketItems:"basketItems",taskConfig:"taskConfig",basket:"basket"},decls:19,vars:5,consts:[["translucent","true"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"options"],[3,"color","click"],["name","add"],["name","remove"],[1,"container"],[1,"candiContainer"],["slot","start","class","candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click",4,"ngFor","ngForOf","ngForTrackBy"],["color","secondary",1,"activate",3,"click"],["name","checkmark"],["slot","start",1,"candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click"]],template:function(t,e){1&t&&(o.Nb(0,"ion-header",0),o.Nb(1,"ion-toolbar"),o.Nb(2,"ion-title"),o.pc(3),o.Mb(),o.Nb(4,"ion-buttons",1),o.Nb(5,"ion-button",2),o.Vb("click",(function(t){return e.back(t)})),o.Jb(6,"ion-icon",3),o.Mb(),o.Mb(),o.Mb(),o.Nb(7,"ion-toolbar"),o.Nb(8,"div",4),o.Nb(9,"ion-fab-button",5),o.Vb("click",(function(){return e.changeAddMode()})),o.Jb(10,"ion-icon",6),o.Mb(),o.Nb(11,"ion-fab-button",5),o.Vb("click",(function(){return e.changeRemoveMode()})),o.Jb(12,"ion-icon",7),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Nb(13,"ion-content"),o.Nb(14,"div",8),o.Nb(15,"div",9),o.nc(16,k,1,5,"app-candidate-avatar",10),o.Mb(),o.Nb(17,"ion-fab-button",11),o.Vb("click",(function(){return e.activate()})),o.Jb(18,"ion-icon",12),o.Mb(),o.Mb(),o.Mb()),2&t&&(o.yb(3),o.rc(" ",e.basket.name," "),o.yb(6),o.dc("color","add"===e.mode?"primary":"light"),o.yb(2),o.dc("color","remove"===e.mode?"danger":"light"),o.yb(5),o.dc("ngForOf",e.candidates)("ngForTrackBy",e.trackByFn))},directives:[c.s,c.Z,c.X,c.k,c.j,c.t,c.p,c.n,h.l,g.a],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.candiContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;overflow:scroll}.options[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:.5rem}.activate[_ngcontent-%COMP%]{margin:.5rem auto}"],changeDetection:0}),t})();var m=a("tyNb"),v=a("3LWr"),u=a("NrBX"),f=a("pQKU");function y(t,e){if(1&t&&(o.Nb(0,"ion-header"),o.Nb(1,"ion-toolbar"),o.Nb(2,"ion-buttons",1),o.Jb(3,"ion-menu-button"),o.Mb(),o.Nb(4,"ion-buttons",2),o.Jb(5,"ion-back-button",3),o.Mb(),o.Nb(6,"ion-title"),o.pc(7),o.Mb(),o.Mb(),o.Mb()),2&t){const t=o.Xb();o.yb(7),o.qc(null==t.taskDesc?null:t.taskDesc.description)}}function C(t,e){if(1&t&&o.Jb(0,"app-candidate-avatar",12),2&t){const t=o.Xb().$implicit,e=o.Xb(3);o.dc("candidateId",t.candidate)("total",t.total)("isShowTotal",e.taskConfig.isCandidateMultiBasket)}}function M(t,e){if(1&t&&(o.Nb(0,"div"),o.nc(1,C,1,3,"app-candidate-avatar",11),o.Mb()),2&t){const t=e.$implicit;o.yb(1),o.dc("ngIf",t.total>0)}}function D(t,e){if(1&t){const t=o.Ob();o.Nb(0,"ion-chip",7),o.Vb("click",(function(){o.ic(t);const a=e.$implicit;return o.Xb(2).selectBasket(a)})),o.Nb(1,"ion-label",8),o.pc(2),o.Mb(),o.Nb(3,"div",9),o.nc(4,M,2,1,"div",10),o.Mb(),o.Mb()}if(2&t){const t=e.$implicit,a=o.Xb(2);o.mc("direction",a.taskDesc.langDir),o.Ab("selectedBasket",t.name===a.selectedBasket),o.yb(2),o.qc(t.name),o.yb(2),o.dc("ngForOf",a.taskSavedData.main.baskets[t.name].all)}}function I(t,e){if(1&t){const t=o.Ob();o.Nb(0,"ion-fab",13),o.Nb(1,"ion-fab-button",14),o.Vb("click",(function(){return o.ic(t),o.Xb(2).createComment()})),o.Jb(2,"ion-icon",15),o.Mb(),o.Mb()}}function O(t,e){if(1&t&&(o.Nb(0,"ion-content"),o.Nb(1,"div",4),o.nc(2,D,5,6,"ion-chip",5),o.Mb(),o.nc(3,I,3,0,"ion-fab",6),o.Mb()),2&t){const t=o.Xb();o.yb(2),o.dc("ngForOf",t.taskConfig.baskets),o.yb(1),o.dc("ngIf",!t.integrated)}}let P=(()=>{class t{constructor(t,e,a,i,n,s,o,c,r,l){this.router=t,this.route=e,this.store=a,this.modalCtrl=i,this.msgService=n,this.langProvider=s,this.popoverController=o,this.candidatesDelegator=c,this.taskDelegator=r,this.basketDelegator=l,this.previewSize=d.a.basketPreviewSize}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=yield this.initTask(),this.integrated||(this.taskSavedData=yield this.loadTask()),this.isTaskInit=!0}))}ionViewWillLeave(){return Object(i.a)(this,void 0,void 0,(function*(){this.basketDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,d.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),this.msgService.showToast(this.langProvider.TaskSaved,d.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))}))}initTask(){var t,e,a;return Object(i.a)(this,void 0,void 0,(function*(){let i;i=null!==(a=null!==(e=null===(t=this.integrated)||void 0===t?void 0:t.parentTaskId)&&void 0!==e?e:this.route.snapshot.paramMap.get(s.a.TaskDescId))&&void 0!==a?a:"t13",this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.taskDesc=yield this.taskDelegator.getTaskDesk(i),this.taskConfig=yield this.taskDelegator.getTasksConfig(i);const n={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,candidates:this.candidates.map(t=>t._id),baskets:{}}};for(const t of this.taskConfig.baskets)n.main.baskets[t.name]={name:t.name,size:0,maxCandidatesAllowed:t.maxCandidatesAllowed,preview:[],all:this.candidates.map(t=>({candidate:t._id,total:0}))};return n}))}saveTask(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.basketDelegator.saveTask(this.taskSavedData,this.taskConfig)}))}saveTaskIntegrated(){return Object(i.a)(this,void 0,void 0,(function*(){throw new Error("Method not implemented.")}))}loadTask(){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.route.snapshot.paramMap.get(s.a.SavedTaskId);if(t){this.isTaskUpdate=!0;const e=yield this.basketDelegator.loadTask(t);this.candidates=yield this.candidatesDelegator.getCandidatesByIds(e.main.candidates),this.setLoadedData(e),this.taskSavedData=e}return this.taskSavedData}))}setLoadedData(t){for(const e in t.main.baskets)if(Object.prototype.hasOwnProperty.call(t.main.baskets,e)){const a=t.main.baskets[e],i=[];for(const t of a.preview){const e=a.all.find(e=>e.candidate===t.candidate);i.push(e)}a.preview=i}if(!this.taskConfig.isCandidatesStatic){const e=new Set;for(const a in t.main.baskets)Object.prototype.hasOwnProperty.call(t.main.baskets,a)&&t.main.baskets[a].all.forEach(t=>e.add(t.candidate));for(const t of e)this.candidates=this.candidates.filter(e=>e._id!==t)}}loadTaskIntegrated(t){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=t,yield this.setLoadedData(t)}))}selectBasket(t){return Object(i.a)(this,void 0,void 0,(function*(){this.selectedBasket=this.selectedBasket!==t.name?t.name:null,yield this.showCanidatesSelection(t)}))}showCanidatesSelection(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=this.taskSavedData.main.baskets[t.name],a=yield this.modalCtrl.create({component:p,componentProps:{basketItems:e.all,taskConfig:this.taskConfig,basket:t}});yield a.present();const i=yield a.onWillDismiss();if(i.data){e.preview=i.data;for(const t of i.data){const a=e.all.find(e=>e.candidate===t.candidate);a&&(a.total=t.total)}}}))}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:n.Guid.raw()}],{skipLocationChange:!0})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(m.f),o.Ib(m.a),o.Ib(v.a),o.Ib(c.eb),o.Ib(b.a),o.Ib(r.b),o.Ib(c.ib),o.Ib(l.a),o.Ib(u.a),o.Ib(f.a))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-baskets2"]],inputs:{integrated:"integrated"},decls:2,vars:2,consts:[[4,"ngIf"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[1,"baskets"],["id","baskets","class","basket","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",3,"selectedBasket","direction","click",4,"ngFor","ngForOf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content",4,"ngIf"],["id","baskets","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",1,"basket",3,"click"],["color","secondary",1,"basketHeader"],[1,"basketItems",2,"direction","ltr"],[4,"ngFor","ngForOf"],["class","avatarBasket",3,"candidateId","total","isShowTotal",4,"ngIf"],[1,"avatarBasket",3,"candidateId","total","isShowTotal"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],["color","primary",3,"click"],["name","chatbox-ellipses"]],template:function(t,e){1&t&&(o.nc(0,y,8,1,"ion-header",0),o.nc(1,O,4,2,"ion-content",0)),2&t&&(o.dc("ngIf",!e.integrated),o.yb(1),o.dc("ngIf",e.isTaskInit))},directives:[h.m,c.s,c.Z,c.k,c.F,c.g,c.h,c.X,c.n,h.l,c.l,c.C,g.a,c.o,c.p,c.t],styles:[".container[_ngcontent-%COMP%]{flex-direction:column;width:100%}.baskets[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;height:100%}.baskets[_ngcontent-%COMP%]{align-content:flex-start;overflow:scroll}.basket[_ngcontent-%COMP%], .baskets[_ngcontent-%COMP%]{flex-direction:column;flex:1}.basket[_ngcontent-%COMP%]{min-height:8rem;display:flex}.basketItems[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:100%;flex-wrap:wrap;overflow:scroll}.avatarBasket[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:.5rem}"]}),t})()},OZ4V:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var i=a("mrSG"),n=a("fXoL"),s=a("TEn/"),d=a("zrcv"),o=a("L5fO"),c=a("ofXK"),r=a("g1yl");function l(t,e){if(1&t){const t=n.Ob();n.Nb(0,"ion-header",3),n.Nb(1,"ion-toolbar"),n.Nb(2,"ion-title"),n.pc(3),n.Mb(),n.Nb(4,"ion-buttons",4),n.Nb(5,"ion-button",5),n.Vb("click",(function(e){return n.ic(t),n.Xb().back(e)})),n.Jb(6,"ion-icon",6),n.Mb(),n.Mb(),n.Mb(),n.Mb()}if(2&t){const t=n.Xb();n.yb(3),n.rc(" ",t.langProvider.Select," ")}}function b(t,e){if(1&t){const t=n.Ob();n.Nb(0,"app-candidate-avatar",11),n.Vb("click",(function(){n.ic(t);const a=e.$implicit;return n.Xb(2).select(a)})),n.Mb()}if(2&t){const t=e.$implicit,a=n.Xb(2);n.dc("candidate",t)("isSelected",a.selectedCandidatesCopy[t._id])}}function h(t,e){if(1&t){const t=n.Ob();n.Nb(0,"ion-fab-button",12),n.Vb("click",(function(){return n.ic(t),n.Xb(2).activate()})),n.Jb(1,"ion-icon",13),n.Mb()}}function g(t,e){if(1&t&&(n.Lb(0),n.Nb(1,"ion-content"),n.Nb(2,"div",7),n.Nb(3,"div",8),n.nc(4,b,1,2,"app-candidate-avatar",9),n.Mb(),n.nc(5,h,2,0,"ion-fab-button",10),n.Mb(),n.Mb(),n.Kb()),2&t){const t=n.Xb();n.yb(4),n.dc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn),n.yb(1),n.dc("ngIf",t.isModal)}}function k(t,e){if(1&t){const t=n.Ob();n.Nb(0,"app-candidate-avatar",11),n.Vb("click",(function(){n.ic(t);const a=e.$implicit;return n.Xb(2).select(a)})),n.Mb()}if(2&t){const t=e.$implicit,a=n.Xb(2);n.dc("candidate",t)("isSelected",a.selectedCandidatesCopy[t._id])}}function p(t,e){if(1&t&&(n.Nb(0,"div",8),n.nc(1,k,1,2,"app-candidate-avatar",9),n.Mb()),2&t){const t=n.Xb();n.yb(1),n.dc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn)}}let m=(()=>{class t{constructor(t,e,a){this.modalCtrl=t,this.msgService=e,this.langProvider=a,this.candidateSelected=new n.n}ngOnInit(){this.isModal?(this.select=this.selectModal,this.selectedCandidates?this.selectedCandidatesCopy=JSON.parse(JSON.stringify(this.selectedCandidates)):this.selectedCandidates={}):(this.select=this.selectNoneModal,this.selectedCandidatesCopy=this.selectedCandidates)}selectNoneModal(t){this.candidateSelected.emit(t)}selectModal(t){this.selectedCandidatesCopy[t._id]=!this.selectedCandidatesCopy[t._id]}activate(){this.modalCtrl.dismiss(this.selectedCandidatesCopy)}trackByFn(t,e){return e?e._id:t}back(t){return Object(i.a)(this,void 0,void 0,(function*(){this.candidates.filter(t=>this.selectedCandidates[t._id]!=this.selectedCandidatesCopy[t._id]).length>0?(yield this.msgService.showAreYouSure(this.langProvider.DataNotSaved))&&this.modalCtrl.dismiss():this.modalCtrl.dismiss()}))}}return t.\u0275fac=function(e){return new(e||t)(n.Ib(s.eb),n.Ib(d.a),n.Ib(o.b))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-candidate-selection"]],inputs:{candidates:"candidates",selectedCandidates:"selectedCandidates",isModal:"isModal"},outputs:{candidateSelected:"candidateSelected"},decls:4,vars:3,consts:[["translucent","true",4,"ngIf"],[4,"ngIf","ngIfElse"],["noModal",""],["translucent","true"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"container"],[1,"candidates"],["class","candi",3,"candidate","isSelected","click",4,"ngFor","ngForOf","ngForTrackBy"],["class","activate","color","secondary",3,"click",4,"ngIf"],[1,"candi",3,"candidate","isSelected","click"],["color","secondary",1,"activate",3,"click"],["name","checkmark"]],template:function(t,e){if(1&t&&(n.nc(0,l,7,1,"ion-header",0),n.nc(1,g,6,3,"ng-container",1),n.nc(2,p,2,2,"ng-template",null,2,n.oc)),2&t){const t=n.hc(3);n.dc("ngIf",e.isModal),n.yb(1),n.dc("ngIf",e.isModal)("ngIfElse",t)}},directives:[c.m,s.s,s.Z,s.X,s.k,s.j,s.t,s.n,c.l,r.a,s.p],styles:[".container[_ngcontent-%COMP%]{flex-direction:column;width:100%}.candidates[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;height:100%}.candidates[_ngcontent-%COMP%]{flex-wrap:wrap;align-content:flex-start;overflow:scroll}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:.5rem}.activate[_ngcontent-%COMP%]{margin:.5rem auto}"]}),t})()},TtBN:function(t,e,a){"use strict";a.d(e,"a",(function(){return P}));var i=a("mrSG"),n=a("kMc0"),s=a("fXoL"),d=a("L5fO"),o=a("pQKU"),c=a("ofXK"),r=a("TEn/");function l(t,e){if(1&t&&(s.Lb(0),s.Nb(1,"span",3),s.pc(2),s.Mb(),s.Nb(3,"span",5),s.pc(4),s.Mb(),s.Kb()),2&t){const t=s.Xb(2);s.yb(2),s.qc(t.langProvider.TotalTasksNotParticipate),s.yb(2),s.qc(t.orderedAggData.totalNotParticipated)}}function b(t,e){if(1&t&&(s.Lb(0),s.Nb(1,"span",3),s.pc(2),s.Mb(),s.Nb(3,"span",5),s.pc(4),s.Mb(),s.Nb(5,"span",8),s.pc(6),s.Mb(),s.Nb(7,"span",9),s.pc(8),s.Mb(),s.Kb()),2&t){const t=s.Xb().$implicit;s.yb(2),s.qc(t.key),s.yb(2),s.qc(t.value.value),s.yb(2),s.qc(t.value.avg),s.yb(2),s.qc(t.value.max)}}function h(t,e){if(1&t&&(s.Lb(0),s.nc(1,b,9,4,"ng-container",0),s.Kb()),2&t){const t=e.$implicit;s.yb(1),s.dc("ngIf",t.value.avg>0)}}function g(t,e){if(1&t&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.pc(5),s.Mb(),s.Mb(),s.Nb(6,"div",2),s.Lb(7),s.Nb(8,"span",3),s.pc(9),s.Mb(),s.Nb(10,"span",4),s.pc(11),s.Yb(12,"date"),s.Mb(),s.Kb(),s.Lb(13),s.Nb(14,"span",3),s.pc(15),s.Mb(),s.Nb(16,"span",4),s.pc(17),s.Yb(18,"date"),s.Mb(),s.Kb(),s.Lb(19),s.Nb(20,"span",3),s.pc(21),s.Mb(),s.Nb(22,"span",5),s.pc(23),s.Mb(),s.Kb(),s.nc(24,l,5,2,"ng-container",0),s.Lb(25),s.Nb(26,"span",3),s.pc(27),s.Mb(),s.Nb(28,"span",5),s.pc(29),s.Mb(),s.Kb(),s.Mb(),s.Nb(30,"div",6),s.Nb(31,"span",7),s.pc(32),s.Mb(),s.Nb(33,"span",5),s.pc(34),s.Mb(),s.Nb(35,"span",8),s.pc(36),s.Mb(),s.Nb(37,"span",9),s.pc(38),s.Mb(),s.nc(39,h,2,1,"ng-container",10),s.Yb(40,"keyvalue"),s.Mb(),s.Mb(),s.Mb(),s.Kb()),2&t){const t=s.Xb();s.yb(1),s.mc("direction",t.langProvider.LangDirection),s.yb(4),s.qc(t.taskName),s.yb(4),s.qc(t.langProvider.TaskFirstDate),s.yb(2),s.qc(s.ac(12,17,t.orderedAggData.firstTaskDate,"dd/MM/yy HH:mm:ss")),s.yb(4),s.qc(t.langProvider.TaskLastDate),s.yb(2),s.qc(s.ac(18,20,t.orderedAggData.lastTaskDate,"dd/MM/yy HH:mm:ss")),s.yb(4),s.qc(t.langProvider.TotalTasks),s.yb(2),s.qc(t.totalTasks),s.yb(1),s.dc("ngIf",t.orderedAggData.totalNotParticipated>0),s.yb(3),s.qc(t.langProvider.OrderedAvgPosition),s.yb(2),s.qc(t.orderedAggData.avgPosition),s.yb(3),s.rc("",t.langProvider.Tags,":"),s.yb(2),s.qc(t.langProvider.BasketValue),s.yb(2),s.qc(t.langProvider.BasketAvg),s.yb(2),s.qc(t.langProvider.BasketMax),s.yb(1),s.dc("ngForOf",s.Zb(40,23,t.basketsAggData.basketsTotals))}}let k=(()=>{class t{constructor(t,e,a){this.langProvider=t,this.orderedDelegtor=e,this.basketDelegator=a}ngOnInit(){this.calcHistory()}calcHistory(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskName=this.tasks[0].name,this.totalTasks=this.tasks.length;const t=new n.a;t.start(),this.orderedAggData=this.orderedDelegtor.calcCandidateAggDataForTask(this.candidate,this.tasks);const e=yield this.orderedDelegtor.loadTasksBaskets(this.tasks);this.basketsAggData=this.basketDelegator.calcCandidateAggData(this.candidate,this.candidates,e);const a=t.stop();console.log(`OrderedCandidateHistoryAgg ${this.candidate._id} time: ${a}`),this.isInit=!0}))}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(d.b),s.Ib(P),s.Ib(o.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-candidate-history-agg"]],inputs:{tasks:"tasks",candidate:"candidate",candidates:"candidates"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[1,"orderStats"],[1,"col1"],[1,"col2","ltr","ml-auto"],[1,"col2"],[1,"orderBaskets"],[1,"col1","basketsHeader"],[1,"col3"],[1,"col4"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&s.nc(0,g,41,25,"ng-container",0),2&t&&s.dc("ngIf",e.isInit)},directives:[c.m,r.w,r.C,c.l],pipes:[c.e,c.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.orderStats[_ngcontent-%COMP%]{display:grid}.orderBaskets[_ngcontent-%COMP%]{display:grid;margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),t})();function p(t,e){if(1&t&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&t){const t=s.Xb(2);s.yb(1),s.sc("",t.langProvider.Position," : ",t.item.position,"")}}function m(t,e){if(1&t&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&t){const t=s.Xb(2);s.yb(1),s.qc(t.langProvider.NotParticipate)}}function v(t,e){if(1&t&&(s.Lb(0),s.Nb(1,"span",7),s.pc(2),s.Mb(),s.Nb(3,"span",8),s.pc(4),s.Mb(),s.Kb()),2&t){const t=s.Xb().$implicit;s.yb(2),s.qc(t.key),s.yb(2),s.qc(t.value.total)}}function u(t,e){if(1&t&&(s.Lb(0),s.nc(1,v,5,2,"ng-container",0),s.Kb()),2&t){const t=e.$implicit;s.yb(1),s.dc("ngIf",t.value.total>0)}}function f(t,e){if(1&t&&(s.Nb(0,"div",5),s.Nb(1,"div",6),s.Nb(2,"span",7),s.pc(3),s.Mb(),s.Nb(4,"span",8),s.pc(5),s.Mb(),s.nc(6,u,2,1,"ng-container",9),s.Yb(7,"keyvalue"),s.Mb(),s.Mb()),2&t){const t=s.Xb(2);s.yb(3),s.qc(t.langProvider.Tags),s.yb(2),s.qc(t.langProvider.Total),s.yb(1),s.dc("ngForOf",s.Zb(7,3,t.item.basketItems))}}function y(t,e){if(1&t&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.pc(5),s.Mb(),s.Nb(6,"span",2),s.pc(7),s.Yb(8,"date"),s.Mb(),s.Mb(),s.Nb(9,"div",3),s.Nb(10,"span"),s.pc(11),s.Mb(),s.nc(12,p,2,2,"span",0),s.nc(13,m,2,1,"span",0),s.Mb(),s.nc(14,f,8,5,"div",4),s.Mb(),s.Mb(),s.Kb()),2&t){const t=s.Xb();s.yb(1),s.mc("direction",t.langProvider.LangDirection),s.yb(4),s.qc(t.task.name),s.yb(2),s.qc(s.ac(8,11,t.task.date,"dd/MM/yy HH:mm:ss")),s.yb(2),s.mc("direction",t.langProvider.LangDirection),s.yb(2),s.sc("",t.langProvider.TotalParticipants," : ",t.item.total,""),s.yb(1),s.dc("ngIf",t.item.position>0),s.yb(1),s.dc("ngIf",0===t.item.position),s.yb(1),s.dc("ngIf",t.item.basketItems)}}let C=(()=>{class t{constructor(t,e,a){this.taskDelegator=t,this.basketsDelegator=e,this.langProvider=a}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.calcHistory()}))}calcHistory(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSaveData=yield this.taskDelegator.loadTask(this.task._id),this.item={total:this.task.orderedCandidates.length,position:this.task.orderedCandidates.findIndex(t=>t===this.candidate._id)+1,date:new Date(this.task.date)};const t=this.basketsDelegator.GetBasketsForCandidate(this.candidate._id,this.taskSaveData.basketsSaveData.main);Object.keys(t).length>0&&(this.item.basketItems=t),this.isInit=!0}))}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(P),s.Ib(o.a),s.Ib(d.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],[1,"order"],["class","orderBaskets",4,"ngIf"],[1,"orderBaskets"],[1,"baskets"],[1,"col1"],[1,"col2"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&s.nc(0,y,15,14,"ng-container",0),2&t&&s.dc("ngIf",e.isInit)},directives:[c.m,r.w,r.C,c.l],pipes:[c.e,c.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .order[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.order[_ngcontent-%COMP%], .orderBaskets[_ngcontent-%COMP%]{margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}.baskets[_ngcontent-%COMP%]{display:grid}"]}),t})(),M=(()=>{class t{constructor(t){this.langProvider=t}ngOnInit(){this.calcHistory()}calcHistory(){this.totalParticipated=this.task.orderedCandidates.length,this.totalCandidates=this.task.candidates.length;const t=this.totalParticipated/this.totalCandidates;this.completedStatus=1===t?"full":t>=.5?"half":"none"}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(d.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-history"]],inputs:{task:"task",candidates:"candidates"},decls:5,vars:11,consts:[[1,"container"]],template:function(t,e){1&t&&(s.Nb(0,"div",0),s.Nb(1,"span"),s.pc(2),s.Mb(),s.Nb(3,"span"),s.pc(4),s.Mb(),s.Mb()),2&t&&(s.mc("direction",e.langProvider.LangDirection),s.Ab("completed","full"===e.completedStatus)("halfCompleted","half"===e.completedStatus)("notCompleted","none"===e.completedStatus),s.yb(2),s.qc(e.langProvider.TotalParticipants),s.yb(2),s.sc("",e.totalCandidates," / ",e.totalParticipated,""))},styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.halfCompleted[_ngcontent-%COMP%]{color:orange}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),t})();var D=a("2lKs"),I=a("nbnm"),O=a("h7jJ");let P=(()=>{class t{constructor(t,e){this.entityNamer=t,this.dataProvider=e}getTaskConfig(t){throw new Error("Method not implemented.")}getTaskName(){throw new Error("Method not implemented.")}exportCopy(t,e){throw new Error("Method not implemented.")}saveTask(t,e){var a,n,s,d;return Object(i.a)(this,void 0,void 0,(function*(){const e=[];return t.main._id=null!==(a=t.main._id)&&void 0!==a?a:this.entityNamer.taskPrefixWithUniqueIdAnd(t.main.type,t.main.taskId),t.main._rev=t.main._rev,t.main.date=null!==(n=t.main.date)&&void 0!==n?n:new Date,t.main.updateDate=new Date,e.push(t.main),t.basketsSaveData.main._id=null!==(s=t.basketsSaveData.main._id)&&void 0!==s?s:""+t.main._id.replace("main","baskets"),t.basketsSaveData.main._rev=t.basketsSaveData.main._rev,t.basketsSaveData.main.date=null!==(d=t.basketsSaveData.main.date)&&void 0!==d?d:new Date,t.basketsSaveData.main.updateDate=new Date,t.main.childIds.baskets=[t.basketsSaveData.main._id],e.push(t.basketsSaveData.main),yield this.dataProvider.saveEntities(e),t}))}loadTask(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield this.dataProvider.loadTask(t),a=e._id.replace("main","baskets");return{main:e,basketsSaveData:{main:(yield this.dataProvider.loadEntitiesByPrefix(a))[0]}}}))}deleteTask(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=[t],a=t._id.replace("main","baskets");(yield this.dataProvider.loadEntitiesByPrefix(a,{includeDocs:!1})).forEach(t=>e.push(t)),yield this.dataProvider.deleteEntities(e)}))}getTaskHistory(){throw new Error("Method not implemented.")}getComponentRoute(){return"ordered"}getComponent(){return D.a}getHistoryComponent(){return M}getCandidateHistoryComponent(){return C}getCandidateAggregateComponent(){return k}getTasksForCandidates(t){throw new Error("Method not implemented.")}checkTaskEmpty(t,e){var a;const i=(null===(a=t.main.orderedCandidates)||void 0===a?void 0:a.length)>0,n=Object.keys(t.basketsSaveData.main.baskets).some(e=>{var a,i;return null===(i=null===(a=t.basketsSaveData.main.baskets[e])||void 0===a?void 0:a.all)||void 0===i?void 0:i.some(t=>t.total>0)});return!(t.main._id||i||n)}loadTasksBaskets(t){return Object(i.a)(this,void 0,void 0,(function*(){const e=t.reduce((t,e,a)=>(t.push(...e.childIds.baskets),t),[]);return yield this.dataProvider.loadEntitiesByIds(e)}))}calcCandidateAggDataForAll(t,e){const a=e.reduce((t,e)=>(t[e.taskId]||(t[e.taskId]=[]),t[e.taskId].push(e),t),{}),i=[];for(const n in a)if(Object.prototype.hasOwnProperty.call(a,n)){const a=this.calcCandidateAggDataForTask(t,e);i.push(a)}return i}calcCandidateAggDataForTask(t,e){const a=[],i=e.sort((t,e)=>new Date(t.date).getTime()-new Date(e.date).getTime()),n=i[0].date,s=i[e.length-1].date;for(const o of e){const e={total:o.orderedCandidates.length,position:o.orderedCandidates.findIndex(e=>e===t._id)+1,date:o.date};a.push(e)}const d=a.filter(t=>0===t.position).length;return{firstTaskDate:n,lastTaskDate:s,totalParticipated:a.length-d,totalNotParticipated:d,avgPosition:(a.filter(t=>t.position>-1).map(t=>t.position).reduce((t,e)=>t+e)/e.length).toPrecision(1)}}}return t.\u0275fac=function(e){return new(e||t)(s.Rb(I.a),s.Rb(O.a))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);