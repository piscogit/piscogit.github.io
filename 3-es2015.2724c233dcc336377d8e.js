(window.webpackJsonp=window.webpackJsonp||[]).push([[3,26],{"2lKs":function(t,e,a){"use strict";a.d(e,"a",function(){return M});var i=a("mrSG"),n=a("fXoL"),s=a("5+WD"),o=a("Mxx3"),d=a("pQKU"),r=a("AytR"),c=a("kLqA"),l=a("CIRo"),b=a("tyNb"),h=a("3LWr"),g=a("zrcv"),k=a("L5fO"),p=a("TEn/"),f=a("ufmx"),v=a("NrBX"),m=a("TtBN"),u=a("3Pt+"),O=a("ofXK"),P=a("OZ4V"),y=a("g1yl");const C=["candidatesOrder"];function D(t,e){if(1&t&&n.Lb(0,"app-candidate-avatar",30),2&t){const t=n.Zb().$implicit;n.fc("candidate",t)}}function I(t,e){if(1&t&&n.Lb(0,"app-candidate-avatar",30),2&t){const t=n.Zb().$implicit;n.fc("candidate",t)}}function S(t,e){1&t&&n.Lb(0,"span",31)}function w(t,e){if(1&t&&(n.Pb(0,"div",22),n.Pb(1,"ion-item",23),n.Pb(2,"div",24),n.Pb(3,"span",25),n.rc(4),n.Ob(),n.Lb(5,"app-candidate-avatar",26),n.Ob(),n.pc(6,D,1,1,"app-candidate-avatar",27),n.pc(7,I,1,1,"app-candidate-avatar",28),n.Ob(),n.pc(8,S,1,0,"span",29),n.Ob()),2&t){const t=e.$implicit,a=e.index,i=n.Zb(2);n.Ab(1),n.gc("id","order_",t._id,""),n.fc("cdkDragStartDelay",i.dragDelay),n.Ab(3),n.tc("",a+1,"."),n.Ab(1),n.fc("candidate",t),n.Ab(3),n.fc("ngIf",i.store.isIos)}}function T(t,e){if(1&t){const t=n.Qb();n.Pb(0,"div",16),n.Pb(1,"app-candidate-selection",17),n.Xb("candidateSelected",function(e){return n.kc(t),n.Zb().selectCandidate(e)})("cdkDropListDropped",function(e){return n.kc(t),n.Zb().dropCandidates(e)}),n.Ob(),n.Pb(2,"ion-chip",18),n.Pb(3,"ion-list",19,20),n.Xb("cdkDropListDropped",function(e){return n.kc(t),n.Zb().dropCandidatesOrder(e)}),n.pc(5,w,9,5,"div",21),n.Ob(),n.Ob(),n.Ob()}if(2&t){const t=n.Zb();n.fc("hidden","ordered"!==t.segment),n.Ab(1),n.fc("candidates",t.candidates)("selectedCandidates",t.selectedCandidates)("cdkDropListData",t.candidates),n.Ab(2),n.fc("cdkDropListData",t.orderedCandidates),n.Ab(2),n.fc("ngForOf",t.orderedCandidates)("ngForTrackBy",t.trackByFn)}}function A(t,e){if(1&t){const t=n.Qb();n.Pb(0,"ion-fab-button",32),n.Xb("click",function(){return n.kc(t),n.Zb().saveAndNew()}),n.Lb(1,"ion-icon",33),n.Ob()}}let M=(()=>{class t{constructor(t,e,a,i,n,s,d,r,c,l){this.router=t,this.route=e,this.store=a,this.msgService=i,this.langProvider=n,this.popoverController=s,this.candidatesDelegator=d,this.taskDelegator=r,this.basketDelegator=c,this.orderedDelegator=l,this.orderedCandidates=[],this.selectedCandidates={},this.dragDelay=o.a.DragDelay,this.segment="ordered",this.integratedBaskets={parentId:null,parentTaskId:null,parentTaskType:null}}ngOnInit(){return Object(i.a)(this,void 0,void 0,function*(){this.taskSavedData=yield this.initTask(),this.taskSavedData=yield this.loadTask(),this.isTaskInit=!0})}initTask(){var t;return Object(i.a)(this,void 0,void 0,function*(){const e=null!==(t=this.route.snapshot.paramMap.get(o.a.TaskDescId))&&void 0!==t?t:"t13";this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.taskDesc=yield this.taskDelegator.getTaskDesk(e),this.taskConfig=yield this.taskDelegator.getTasksConfig(e);const a={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,orderedCandidates:[],candidates:this.candidates.map(t=>t._id),childIds:{}},basketsSaveData:null};return this.integratedBaskets={parentId:null,parentTaskId:this.taskDesc.id,parentTaskType:this.taskDesc.type},this.isSaveAndNew=!this.taskConfig.maxItems||this.taskConfig.maxItems>1,a})}ionViewWillLeave(){var t;return Object(i.a)(this,void 0,void 0,function*(){this.taskSavedData.main.orderedCandidates=this.orderedCandidates.map(t=>t._id),this.taskSavedData.basketsSaveData=null===(t=this.basketPage)||void 0===t?void 0:t.taskSavedData,this.orderedDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,r.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),yield this.basketPage.ionViewWillLeave(),this.msgService.showToast(this.langProvider.TaskSaved,r.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))})}saveTask(){return Object(i.a)(this,void 0,void 0,function*(){return yield this.orderedDelegator.saveTask(this.taskSavedData,this.taskConfig)})}loadTask(){return Object(i.a)(this,void 0,void 0,function*(){const t=this.route.snapshot.paramMap.get(o.a.SavedTaskId);let e=this.taskSavedData;if(t){this.isTaskUpdate=!0,e=yield this.orderedDelegator.loadTask(t),this.candidates=yield this.candidatesDelegator.getCandidatesByIds(e.main.candidates);for(const t of e.main.orderedCandidates){const e=this.candidates.find(e=>e._id===t);e&&this.selectCandidate(e)}this.basketPage.loadTaskIntegrated(e.basketsSaveData)}return e})}saveAndNew(){return Object(i.a)(this,void 0,void 0,function*(){if(yield this.msgService.showAreYouSure(this.langProvider.TaskSaveAndNew)){const t={};t[o.a.TaskDescId]=this.taskDesc.id,this.router.navigate(["tabs/task-catalog",t],{replaceUrl:!0,skipLocationChange:!0})}})}dropCandidates(t){if(t.previousContainer===t.container);else{const e=this.orderedCandidates.splice(t.previousIndex,1);this.candidates=this.candidates.sort((t,e)=>t.number-e.number),this.selectedCandidates[e[0]._id]=!1}}dropCandidatesOrder(t){t.previousContainer===t.container?Object(s.g)(t.container.data,t.previousIndex,t.currentIndex):(Object(s.h)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),this.selectedCandidates[t.previousContainer.data[t.previousIndex]._id]=!0)}selectCandidate(t){var e;this.selectedCandidates[t._id]||(this.selectedCandidates[t._id]=!0,this.orderedCandidates.push(t),(null===(e=this.candidatesOrder)||void 0===e?void 0:e.nativeElement)&&setTimeout(()=>{const t=this.candidatesOrder.nativeElement.children;t[t.length-1].scrollIntoView({behaviour:"smooth",block:"end"})},50))}changeOrder(){return Object(i.a)(this,void 0,void 0,function*(){(yield this.msgService.showAreYouSure(this.langProvider.OrderedReversedAreYouSure))&&(this.orderedCandidates.reverse(),this.msgService.showToast(this.langProvider.OrderedReversed,2e3))})}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:c.Guid.raw()}],{skipLocationChange:!0})}trackByFn(t,e){return e?e._id:t}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(b.f),n.Kb(b.a),n.Kb(h.a),n.Kb(g.a),n.Kb(k.b),n.Kb(p.ib),n.Kb(f.a),n.Kb(v.a),n.Kb(d.a),n.Kb(m.a))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-ordered2"]],viewQuery:function(t,e){if(1&t&&(n.xc(l.a,3),n.xc(C,1,n.m)),2&t){let t;n.ic(t=n.Yb())&&(e.basketPage=t.first),n.ic(t=n.Yb())&&(e.candidatesOrder=t.first)}},features:[n.zb([d.a])],decls:24,vars:8,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[3,"ngModel","ngModelChange"],["value","ordered"],["value","baskets"],[1,"content"],[1,"container",3,"hidden","integrated"],["class","container","cdkDropListGroup","",3,"hidden",4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],[2,"display","flex"],["color","primary",3,"click"],["name","chatbox-ellipses"],["color","secondary",2,"margin-left","0.2rem",3,"click"],["name","repeat"],["style","margin-left: 0.2rem;","color","tertiary",3,"click",4,"ngIf"],["cdkDropListGroup","",1,"container",3,"hidden"],["id","candidates","cdkDropList","",1,"candidatesSelection",3,"candidates","selectedCandidates","cdkDropListData","candidateSelected","cdkDropListDropped"],[1,"candidatesOrder"],["lines","none","id","candidatesOrder","cdkDropList","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["candidatesOrder",""],["class","iosDndFixItem",4,"ngFor","ngForOf","ngForTrackBy"],[1,"iosDndFixItem"],["cdkDrag","",1,"orderItem",3,"cdkDragStartDelay","id"],[1,"avatarOrderContainer"],[1,"avatarOrder"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],["class","iosDndFixGap",4,"ngIf"],[1,"avatar",3,"candidate"],[1,"iosDndFixGap"],["color","tertiary",2,"margin-left","0.2rem",3,"click"],["name","bag-check"]],template:function(t,e){1&t&&(n.Pb(0,"ion-header"),n.Pb(1,"ion-toolbar"),n.Pb(2,"ion-buttons",0),n.Lb(3,"ion-menu-button"),n.Ob(),n.Pb(4,"ion-title"),n.rc(5),n.Ob(),n.Pb(6,"ion-buttons",1),n.Lb(7,"ion-back-button",2),n.Ob(),n.Ob(),n.Pb(8,"ion-toolbar"),n.Pb(9,"ion-segment",3),n.Xb("ngModelChange",function(t){return e.segment=t}),n.Pb(10,"ion-segment-button",4),n.rc(11),n.Ob(),n.Pb(12,"ion-segment-button",5),n.rc(13),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(14,"ion-content",6),n.Lb(15,"app-baskets2",7),n.pc(16,T,6,7,"div",8),n.Pb(17,"ion-fab",9),n.Pb(18,"div",10),n.Pb(19,"ion-fab-button",11),n.Xb("click",function(){return e.createComment()}),n.Lb(20,"ion-icon",12),n.Ob(),n.Pb(21,"ion-fab-button",13),n.Xb("click",function(){return e.changeOrder()}),n.Lb(22,"ion-icon",14),n.Ob(),n.pc(23,A,2,0,"ion-fab-button",15),n.Ob(),n.Ob(),n.Ob()),2&t&&(n.Ab(5),n.sc(null==e.taskDesc?null:e.taskDesc.description),n.Ab(4),n.fc("ngModel",e.segment),n.Ab(2),n.tc(" ",e.langProvider.Ordered," "),n.Ab(2),n.tc(" ",e.langProvider.Baskets," "),n.Ab(2),n.fc("hidden","baskets"!==e.segment)("integrated",e.integratedBaskets),n.Ab(1),n.fc("ngIf",e.isTaskInit),n.Ab(7),n.fc("ngIf",e.isSaveAndNew&&e.orderedCandidates.length>0))},directives:[p.s,p.Z,p.k,p.F,p.X,p.g,p.h,p.O,p.kb,u.e,u.h,p.P,p.n,l.a,O.m,p.o,s.a,p.p,p.t,s.e,P.a,s.d,p.l,p.D,O.l,p.w,y.a,s.c,s.b],styles:[".content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}ion-chip[_ngcontent-%COMP%]{padding:0}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;justify-content:space-between;width:100%}.candidates[_ngcontent-%COMP%]{background:transparent;height:100%;min-width:var(--avatar-empty-width);overflow:scroll;width:100%}.avatarContainer[_ngcontent-%COMP%]{--background:transparent}.candidatesSelection[_ngcontent-%COMP%]{--background:rgba(160,165,177,0.541);height:80%}.candidatesOrder[_ngcontent-%COMP%]{--background:rgba(157,186,250,0.541);height:100%;min-width:30%}.avatarOrderContainer[_ngcontent-%COMP%]{align-items:center;display:flex}.avatarOrder[_ngcontent-%COMP%]{margin-right:.2rem}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.reverseOrder[_ngcontent-%COMP%]{margin-top:20%}.orderItem[_ngcontent-%COMP%]{--background:transparent;--padding-start:0.2rem}"]}),t})()},CIRo:function(t,e,a){"use strict";a.d(e,"a",function(){return w});var i=a("mrSG"),n=a("kLqA"),s=a("Mxx3"),o=a("AytR"),d=a("fXoL"),r=a("TEn/"),c=a("L5fO"),l=a("ufmx"),b=a("zrcv"),h=a("ofXK"),g=a("g1yl");function k(t,e){if(1&t){const t=d.Qb();d.Pb(0,"app-candidate-avatar",13),d.Xb("click",function(){d.kc(t);const a=e.$implicit,i=d.Zb();return i.selectRemoveAction(i.basketItemsEdit[a._id])}),d.Ob()}if(2&t){const t=e.$implicit,a=d.Zb();d.fc("candidate",t)("total",a.basketItemsEdit[t._id].total)("isSelected",a.dirtyItems[t._id])("isShowTotal",!0)("selectedStyle","redBlue")}}let p=(()=>{class t{constructor(t,e,a,i,n){this.modalCtrl=t,this.langProvider=e,this.candidatesDelegator=a,this.msgService=i,this.navCtrl=n,this.dirtyItems={},this.mode="add"}ngOnInit(){this.basketItemsOriginal=this.basketItems.reduce((t,e)=>(t[e.candidate]=e,t),{}),this.candidates=this.candidatesDelegator.getCandidatesByIds(Object.keys(this.basketItemsOriginal)),this.candidates.sort((t,e)=>t.number-e.number),this.basketItemsEdit=JSON.parse(JSON.stringify(this.basketItemsOriginal)),this.selectRemoveAction=this.selectItem}trackByFn(t,e){return e?e._id:t}selectItem(t){!this.taskConfig.isCandidateMultiBasket&&t.total>0?this.msgService.showToast(this.langProvider.CandidateAlreadyExistInBasket,2e3,"toastWarn"):this.taskConfig.maxTotalPerSingleEdit&&t.total-this.basketItemsOriginal[t.candidate].total>=this.taskConfig.maxTotalPerSingleEdit?this.msgService.showToast(this.langProvider.MaxTotalsPerSingleEditBasket,2e3,"toastWarn"):this.basket.maxCandidatesAllowed&&this.basketItems.filter(t=>t.total>0).length>this.basket.maxCandidatesAllowed?this.msgService.showToast(this.langProvider.MaxCandidatesForBasket,2e3,"toastWarn"):(t.total++,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total)}removeItem(t){t.total>0&&t.total--,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total}changeAddMode(){this.mode="add",this.selectRemoveAction=this.selectItem}changeRemoveMode(){this.mode="remove",this.selectRemoveAction=this.removeItem}activate(){const t=Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).map(t=>this.basketItemsEdit[t]);this.modalCtrl.dismiss(t)}back(t){return Object(i.a)(this,void 0,void 0,function*(){Object.keys(this.dirtyItems).filter(t=>this.dirtyItems[t]).length>0?(yield this.msgService.showAreYouSure(this.langProvider.DataNotSaved))&&this.modalCtrl.dismiss():this.modalCtrl.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(r.eb),d.Kb(c.b),d.Kb(l.a),d.Kb(b.a),d.Kb(r.fb))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-basketkeyboard"]],inputs:{basketItems:"basketItems",taskConfig:"taskConfig",basket:"basket"},decls:19,vars:5,consts:[["translucent","true"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"options"],[3,"color","click"],["name","add"],["name","remove"],[1,"container"],[1,"candiContainer"],["slot","start","class","candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click",4,"ngFor","ngForOf","ngForTrackBy"],["color","secondary",1,"activate",3,"click"],["name","checkmark"],["slot","start",1,"candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click"]],template:function(t,e){1&t&&(d.Pb(0,"ion-header",0),d.Pb(1,"ion-toolbar"),d.Pb(2,"ion-title"),d.rc(3),d.Ob(),d.Pb(4,"ion-buttons",1),d.Pb(5,"ion-button",2),d.Xb("click",function(t){return e.back(t)}),d.Lb(6,"ion-icon",3),d.Ob(),d.Ob(),d.Ob(),d.Pb(7,"ion-toolbar"),d.Pb(8,"div",4),d.Pb(9,"ion-fab-button",5),d.Xb("click",function(){return e.changeAddMode()}),d.Lb(10,"ion-icon",6),d.Ob(),d.Pb(11,"ion-fab-button",5),d.Xb("click",function(){return e.changeRemoveMode()}),d.Lb(12,"ion-icon",7),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Pb(13,"ion-content"),d.Pb(14,"div",8),d.Pb(15,"div",9),d.pc(16,k,1,5,"app-candidate-avatar",10),d.Ob(),d.Pb(17,"ion-fab-button",11),d.Xb("click",function(){return e.activate()}),d.Lb(18,"ion-icon",12),d.Ob(),d.Ob(),d.Ob()),2&t&&(d.Ab(3),d.tc(" ",e.basket.name," "),d.Ab(6),d.fc("color","add"===e.mode?"primary":"light"),d.Ab(2),d.fc("color","remove"===e.mode?"danger":"light"),d.Ab(5),d.fc("ngForOf",e.candidates)("ngForTrackBy",e.trackByFn))},directives:[r.s,r.Z,r.X,r.k,r.j,r.t,r.p,r.n,h.l,g.a],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.candiContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;overflow:scroll}.options[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);margin:.5rem;width:var(--avatar-width)}.activate[_ngcontent-%COMP%]{margin:.5rem auto}"],changeDetection:0}),t})();var f=a("tyNb"),v=a("3LWr"),m=a("NrBX"),u=a("pQKU");function O(t,e){if(1&t&&(d.Pb(0,"ion-header"),d.Pb(1,"ion-toolbar"),d.Pb(2,"ion-buttons",1),d.Lb(3,"ion-menu-button"),d.Ob(),d.Pb(4,"ion-buttons",2),d.Lb(5,"ion-back-button",3),d.Ob(),d.Pb(6,"ion-title"),d.rc(7),d.Ob(),d.Ob(),d.Ob()),2&t){const t=d.Zb();d.Ab(7),d.sc(null==t.taskDesc?null:t.taskDesc.description)}}function P(t,e){if(1&t&&d.Lb(0,"app-candidate-avatar",12),2&t){const t=d.Zb().$implicit,e=d.Zb(3);d.fc("candidateId",t.candidate)("total",t.total)("isShowTotal",e.taskConfig.isCandidateMultiBasket)}}function y(t,e){if(1&t&&(d.Pb(0,"div"),d.pc(1,P,1,3,"app-candidate-avatar",11),d.Ob()),2&t){const t=e.$implicit;d.Ab(1),d.fc("ngIf",t.total>0)}}function C(t,e){if(1&t){const t=d.Qb();d.Pb(0,"ion-chip",7),d.Xb("click",function(){d.kc(t);const a=e.$implicit;return d.Zb(2).selectBasket(a)}),d.Pb(1,"ion-label",8),d.rc(2),d.Ob(),d.Pb(3,"div",9),d.pc(4,y,2,1,"div",10),d.Ob(),d.Ob()}if(2&t){const t=e.$implicit,a=d.Zb(2);d.oc("direction",a.taskDesc.langDir),d.Cb("selectedBasket",t.name===a.selectedBasket),d.Ab(2),d.sc(t.name),d.Ab(2),d.fc("ngForOf",a.taskSavedData.main.baskets[t.name].all)}}function D(t,e){if(1&t){const t=d.Qb();d.Pb(0,"ion-fab-button",18),d.Xb("click",function(){return d.kc(t),d.Zb(3).saveAndNew()}),d.Lb(1,"ion-icon",19),d.Ob()}}function I(t,e){if(1&t){const t=d.Qb();d.Pb(0,"ion-fab",13),d.Pb(1,"div",14),d.Pb(2,"ion-fab-button",15),d.Xb("click",function(){return d.kc(t),d.Zb(2).createComment()}),d.Lb(3,"ion-icon",16),d.Ob(),d.pc(4,D,2,0,"ion-fab-button",17),d.Ob(),d.Ob()}if(2&t){const t=d.Zb(2);d.Ab(4),d.fc("ngIf",t.isSaveAndNew&&t.checkIfBasketsEmpty())}}function S(t,e){if(1&t&&(d.Pb(0,"ion-content"),d.Pb(1,"div",4),d.pc(2,C,5,6,"ion-chip",5),d.Ob(),d.pc(3,I,5,1,"ion-fab",6),d.Ob()),2&t){const t=d.Zb();d.Ab(2),d.fc("ngForOf",t.taskConfig.baskets),d.Ab(1),d.fc("ngIf",!t.integrated)}}let w=(()=>{class t{constructor(t,e,a,i,n,s,d,r,c,l){this.router=t,this.route=e,this.store=a,this.modalCtrl=i,this.msgService=n,this.langProvider=s,this.popoverController=d,this.candidatesDelegator=r,this.taskDelegator=c,this.basketDelegator=l,this.previewSize=o.a.basketPreviewSize}ngOnInit(){return Object(i.a)(this,void 0,void 0,function*(){this.taskSavedData=yield this.initTask(),this.integrated||(this.taskSavedData=yield this.loadTask()),this.isTaskInit=!0})}ionViewWillLeave(){return Object(i.a)(this,void 0,void 0,function*(){this.basketDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,o.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),this.msgService.showToast(this.langProvider.TaskSaved,o.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))})}initTask(){var t,e,a;return Object(i.a)(this,void 0,void 0,function*(){let i;i=null!==(a=null!==(e=null===(t=this.integrated)||void 0===t?void 0:t.parentTaskId)&&void 0!==e?e:this.route.snapshot.paramMap.get(s.a.TaskDescId))&&void 0!==a?a:"t13",this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.taskDesc=yield this.taskDelegator.getTaskDesk(i),this.taskConfig=yield this.taskDelegator.getTasksConfig(i);const n={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,candidates:this.candidates.map(t=>t._id),baskets:{}}};for(const t of this.taskConfig.baskets)n.main.baskets[t.name]={name:t.name,size:0,maxCandidatesAllowed:t.maxCandidatesAllowed,preview:[],all:this.candidates.map(t=>({candidate:t._id,total:0}))};return this.isSaveAndNew=!this.taskConfig.maxItems||this.taskConfig.maxItems>1,n})}saveTask(){return Object(i.a)(this,void 0,void 0,function*(){return yield this.basketDelegator.saveTask(this.taskSavedData,this.taskConfig)})}saveTaskIntegrated(){return Object(i.a)(this,void 0,void 0,function*(){throw new Error("Method not implemented.")})}loadTask(){return Object(i.a)(this,void 0,void 0,function*(){const t=this.route.snapshot.paramMap.get(s.a.SavedTaskId);if(t){this.isTaskUpdate=!0;const e=yield this.basketDelegator.loadTask(t);this.candidates=yield this.candidatesDelegator.getCandidatesByIds(e.main.candidates),this.setLoadedData(e),this.taskSavedData=e}return this.taskSavedData})}saveAndNew(){return Object(i.a)(this,void 0,void 0,function*(){if(yield this.msgService.showAreYouSure(this.langProvider.TaskSaveAndNew)){const t={};t[s.a.TaskDescId]=this.taskDesc.id,this.router.navigate(["tabs/task-catalog",t],{replaceUrl:!0,skipLocationChange:!0})}})}setLoadedData(t){for(const e in t.main.baskets)if(Object.prototype.hasOwnProperty.call(t.main.baskets,e)){const a=t.main.baskets[e],i=[];for(const t of a.preview){const e=a.all.find(e=>e.candidate===t.candidate);i.push(e)}a.preview=i}if(!this.taskConfig.isCandidatesStatic){const e=new Set;for(const a in t.main.baskets)Object.prototype.hasOwnProperty.call(t.main.baskets,a)&&t.main.baskets[a].all.forEach(t=>e.add(t.candidate));for(const t of e)this.candidates=this.candidates.filter(e=>e._id!==t)}}loadTaskIntegrated(t){return Object(i.a)(this,void 0,void 0,function*(){this.taskSavedData=t,yield this.setLoadedData(t)})}selectBasket(t){return Object(i.a)(this,void 0,void 0,function*(){this.selectedBasket=this.selectedBasket!==t.name?t.name:null,yield this.showCanidatesSelection(t)})}showCanidatesSelection(t){return Object(i.a)(this,void 0,void 0,function*(){const e=this.taskSavedData.main.baskets[t.name],a=yield this.modalCtrl.create({component:p,componentProps:{basketItems:e.all,taskConfig:this.taskConfig,basket:t}});yield a.present();const i=yield a.onWillDismiss();if(i.data){e.preview=i.data;for(const t of i.data){const a=e.all.find(e=>e.candidate===t.candidate);a&&(a.total=t.total)}}})}checkIfBasketsEmpty(){return Object.keys(this.taskSavedData.main.baskets).some(t=>{var e;return(null===(e=this.taskSavedData.main.baskets[t].preview)||void 0===e?void 0:e.length)>0})}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:n.Guid.raw()}],{skipLocationChange:!0})}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(f.f),d.Kb(f.a),d.Kb(v.a),d.Kb(r.eb),d.Kb(b.a),d.Kb(c.b),d.Kb(r.ib),d.Kb(l.a),d.Kb(m.a),d.Kb(u.a))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-baskets2"]],inputs:{integrated:"integrated"},decls:2,vars:2,consts:[[4,"ngIf"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[1,"baskets"],["id","baskets","class","basket","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",3,"selectedBasket","direction","click",4,"ngFor","ngForOf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content",4,"ngIf"],["id","baskets","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",1,"basket",3,"click"],["color","secondary",1,"basketHeader"],[1,"basketItems",2,"direction","ltr"],[4,"ngFor","ngForOf"],["class","avatarBasket",3,"candidateId","total","isShowTotal",4,"ngIf"],[1,"avatarBasket",3,"candidateId","total","isShowTotal"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],[2,"display","flex"],["color","primary",3,"click"],["name","chatbox-ellipses"],["style","margin-left: 0.2rem;","color","tertiary",3,"click",4,"ngIf"],["color","tertiary",2,"margin-left","0.2rem",3,"click"],["name","bag-check"]],template:function(t,e){1&t&&(d.pc(0,O,8,1,"ion-header",0),d.pc(1,S,4,2,"ion-content",0)),2&t&&(d.fc("ngIf",!e.integrated),d.Ab(1),d.fc("ngIf",e.isTaskInit))},directives:[h.m,r.s,r.Z,r.k,r.F,r.g,r.h,r.X,r.n,h.l,r.l,r.C,g.a,r.o,r.p,r.t],styles:[".container[_ngcontent-%COMP%]{width:100%}.baskets[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.baskets[_ngcontent-%COMP%]{align-content:flex-start;flex:1;overflow:scroll}.basket[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;min-height:8rem}.basketItems[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;overflow:scroll;width:100%}.avatarBasket[_ngcontent-%COMP%]{height:2rem;margin:.5rem;width:2rem}"]}),t})()},OZ4V:function(t,e,a){"use strict";a.d(e,"a",function(){return f});var i=a("mrSG"),n=a("fXoL"),s=a("TEn/"),o=a("zrcv"),d=a("L5fO"),r=a("ofXK"),c=a("g1yl");function l(t,e){if(1&t){const t=n.Qb();n.Pb(0,"ion-header",3),n.Pb(1,"ion-toolbar"),n.Pb(2,"ion-title"),n.rc(3),n.Ob(),n.Pb(4,"ion-buttons",4),n.Pb(5,"ion-button",5),n.Xb("click",function(e){return n.kc(t),n.Zb().back(e)}),n.Lb(6,"ion-icon",6),n.Ob(),n.Ob(),n.Ob(),n.Ob()}if(2&t){const t=n.Zb();n.Ab(3),n.tc(" ",t.langProvider.Select," ")}}function b(t,e){if(1&t){const t=n.Qb();n.Pb(0,"app-candidate-avatar",11),n.Xb("click",function(){n.kc(t);const a=e.$implicit;return n.Zb(2).select(a)}),n.Ob()}if(2&t){const t=e.$implicit,a=n.Zb(2);n.fc("candidate",t)("isSelected",a.selectedCandidatesCopy[t._id])}}function h(t,e){if(1&t){const t=n.Qb();n.Pb(0,"ion-fab-button",12),n.Xb("click",function(){return n.kc(t),n.Zb(2).activate()}),n.Lb(1,"ion-icon",13),n.Ob()}}function g(t,e){if(1&t&&(n.Nb(0),n.Pb(1,"ion-content"),n.Pb(2,"div",7),n.Pb(3,"div",8),n.pc(4,b,1,2,"app-candidate-avatar",9),n.Ob(),n.pc(5,h,2,0,"ion-fab-button",10),n.Ob(),n.Ob(),n.Mb()),2&t){const t=n.Zb();n.Ab(4),n.fc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn),n.Ab(1),n.fc("ngIf",t.isModal)}}function k(t,e){if(1&t){const t=n.Qb();n.Pb(0,"app-candidate-avatar",11),n.Xb("click",function(){n.kc(t);const a=e.$implicit;return n.Zb(2).select(a)}),n.Ob()}if(2&t){const t=e.$implicit,a=n.Zb(2);n.fc("candidate",t)("isSelected",a.selectedCandidatesCopy[t._id])}}function p(t,e){if(1&t&&(n.Pb(0,"div",14),n.pc(1,k,1,2,"app-candidate-avatar",9),n.Ob()),2&t){const t=n.Zb();n.Ab(1),n.fc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn)}}let f=(()=>{class t{constructor(t,e,a){this.modalCtrl=t,this.msgService=e,this.langProvider=a,this.candidateSelected=new n.o}ngOnInit(){this.isModal?(this.select=this.selectModal,this.selectedCandidates?this.selectedCandidatesCopy=JSON.parse(JSON.stringify(this.selectedCandidates)):this.selectedCandidates={}):(this.select=this.selectNoneModal,this.selectedCandidatesCopy=this.selectedCandidates)}selectNoneModal(t){this.candidateSelected.emit(t)}selectModal(t){this.selectedCandidatesCopy[t._id]=!this.selectedCandidatesCopy[t._id]}activate(){this.modalCtrl.dismiss(this.selectedCandidatesCopy)}trackByFn(t,e){return e?e._id:t}back(t){return Object(i.a)(this,void 0,void 0,function*(){this.candidates.filter(t=>this.selectedCandidates[t._id]!=this.selectedCandidatesCopy[t._id]).length>0?(yield this.msgService.showAreYouSure(this.langProvider.DataNotSaved))&&this.modalCtrl.dismiss():this.modalCtrl.dismiss()})}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(s.eb),n.Kb(o.a),n.Kb(d.b))},t.\u0275cmp=n.Eb({type:t,selectors:[["app-candidate-selection"]],inputs:{candidates:"candidates",selectedCandidates:"selectedCandidates",isModal:"isModal"},outputs:{candidateSelected:"candidateSelected"},decls:4,vars:3,consts:[["translucent","true",4,"ngIf"],[4,"ngIf","ngIfElse"],["noModal",""],["translucent","true"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"container"],[1,"candidates"],["class","candi",3,"candidate","isSelected","click",4,"ngFor","ngForOf","ngForTrackBy"],["class","activate","color","secondary",3,"click",4,"ngIf"],[1,"candi",3,"candidate","isSelected","click"],["color","secondary",1,"activate",3,"click"],["name","checkmark"],[1,"candidates","candidatesNonModal"]],template:function(t,e){if(1&t&&(n.pc(0,l,7,1,"ion-header",0),n.pc(1,g,6,3,"ng-container",1),n.pc(2,p,2,2,"ng-template",null,2,n.qc)),2&t){const t=n.jc(3);n.fc("ngIf",e.isModal),n.Ab(1),n.fc("ngIf",e.isModal)("ngIfElse",t)}},directives:[r.m,s.s,s.Z,s.X,s.k,s.j,s.t,s.n,r.l,c.a,s.p],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{align-content:flex-start;display:flex;flex-wrap:wrap;overflow:scroll}.candidatesNonModal[_ngcontent-%COMP%]{height:100%}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);margin:.5rem;width:var(--avatar-width)}.activate[_ngcontent-%COMP%]{margin:.5rem auto}"]}),t})()},TtBN:function(t,e,a){"use strict";a.d(e,"a",function(){return w});var i=a("mrSG"),n=a("kMc0"),s=a("fXoL"),o=a("L5fO"),d=a("pQKU"),r=a("ofXK"),c=a("TEn/");function l(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"span",3),s.rc(2),s.Ob(),s.Pb(3,"span",5),s.rc(4),s.Ob(),s.Mb()),2&t){const t=s.Zb(2);s.Ab(2),s.sc(t.langProvider.TotalTasksNotParticipate),s.Ab(2),s.sc(t.orderedAggData.totalNotParticipated)}}function b(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"span",3),s.rc(2),s.Ob(),s.Pb(3,"span",5),s.rc(4),s.Ob(),s.Pb(5,"span",8),s.rc(6),s.Ob(),s.Pb(7,"span",9),s.rc(8),s.Ob(),s.Mb()),2&t){const t=s.Zb().$implicit;s.Ab(2),s.sc(t.key),s.Ab(2),s.sc(t.value.value),s.Ab(2),s.sc(t.value.avg),s.Ab(2),s.sc(t.value.max)}}function h(t,e){if(1&t&&(s.Nb(0),s.pc(1,b,9,4,"ng-container",0),s.Mb()),2&t){const t=e.$implicit;s.Ab(1),s.fc("ngIf",t.value.avg>0)}}function g(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"ion-item"),s.Pb(2,"ion-label"),s.Pb(3,"div",1),s.Pb(4,"span"),s.rc(5),s.Ob(),s.Ob(),s.Pb(6,"div",2),s.Nb(7),s.Pb(8,"span",3),s.rc(9),s.Ob(),s.Pb(10,"span",4),s.rc(11),s.ac(12,"date"),s.Ob(),s.Mb(),s.Nb(13),s.Pb(14,"span",3),s.rc(15),s.Ob(),s.Pb(16,"span",4),s.rc(17),s.ac(18,"date"),s.Ob(),s.Mb(),s.Nb(19),s.Pb(20,"span",3),s.rc(21),s.Ob(),s.Pb(22,"span",5),s.rc(23),s.Ob(),s.Mb(),s.pc(24,l,5,2,"ng-container",0),s.Nb(25),s.Pb(26,"span",3),s.rc(27),s.Ob(),s.Pb(28,"span",5),s.rc(29),s.Ob(),s.Mb(),s.Ob(),s.Pb(30,"div",6),s.Pb(31,"span",7),s.rc(32),s.Ob(),s.Pb(33,"span",5),s.rc(34),s.Ob(),s.Pb(35,"span",8),s.rc(36),s.Ob(),s.Pb(37,"span",9),s.rc(38),s.Ob(),s.pc(39,h,2,1,"ng-container",10),s.ac(40,"keyvalue"),s.Ob(),s.Ob(),s.Ob(),s.Mb()),2&t){const t=s.Zb();s.Ab(1),s.oc("direction",t.langProvider.LangDirection),s.Ab(4),s.sc(t.taskName),s.Ab(4),s.sc(t.langProvider.TaskFirstDate),s.Ab(2),s.sc(s.cc(12,17,t.orderedAggData.firstTaskDate,"dd/MM/yy HH:mm:ss")),s.Ab(4),s.sc(t.langProvider.TaskLastDate),s.Ab(2),s.sc(s.cc(18,20,t.orderedAggData.lastTaskDate,"dd/MM/yy HH:mm:ss")),s.Ab(4),s.sc(t.langProvider.TotalTasks),s.Ab(2),s.sc(t.totalTasks),s.Ab(1),s.fc("ngIf",t.orderedAggData.totalNotParticipated>0),s.Ab(3),s.sc(t.langProvider.OrderedAvgPosition),s.Ab(2),s.sc(t.orderedAggData.avgPosition),s.Ab(3),s.tc("",t.langProvider.Tags,":"),s.Ab(2),s.sc(t.langProvider.BasketValue),s.Ab(2),s.sc(t.langProvider.BasketAvg),s.Ab(2),s.sc(t.langProvider.BasketMax),s.Ab(1),s.fc("ngForOf",s.bc(40,23,t.basketsAggData.basketsTotals))}}let k=(()=>{class t{constructor(t,e,a){this.langProvider=t,this.orderedDelegtor=e,this.basketDelegator=a}ngOnInit(){this.calcHistory()}calcHistory(){return Object(i.a)(this,void 0,void 0,function*(){this.taskName=this.tasks[0].name,this.totalTasks=this.tasks.length;const t=new n.a;t.start(),this.orderedAggData=this.orderedDelegtor.calcCandidateAggDataForTask(this.candidate,this.tasks);const e=yield this.orderedDelegtor.loadTasksBaskets(this.tasks);this.basketsAggData=this.basketDelegator.calcCandidateAggData(this.candidate,this.candidates,e);const a=t.stop();console.log(`OrderedCandidateHistoryAgg ${this.candidate._id} time: ${a}`),this.isInit=!0})}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(o.b),s.Kb(w),s.Kb(d.a))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-ordered-candidate-history-agg"]],inputs:{tasks:"tasks",candidate:"candidate",candidates:"candidates"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[1,"orderStats"],[1,"col1"],[1,"col2","ltr","ml-auto"],[1,"col2"],[1,"orderBaskets"],[1,"col1","basketsHeader"],[1,"col3"],[1,"col4"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&s.pc(0,g,41,25,"ng-container",0),2&t&&s.fc("ngIf",e.isInit)},directives:[r.m,c.w,c.C,r.l],pipes:[r.e,r.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.orderStats[_ngcontent-%COMP%]{display:grid}.orderBaskets[_ngcontent-%COMP%]{display:grid;margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),t})();function p(t,e){if(1&t&&(s.Pb(0,"span"),s.rc(1),s.Ob()),2&t){const t=s.Zb(2);s.Ab(1),s.uc("",t.langProvider.Position," : ",t.item.position,"")}}function f(t,e){if(1&t&&(s.Pb(0,"span"),s.rc(1),s.Ob()),2&t){const t=s.Zb(2);s.Ab(1),s.sc(t.langProvider.NotParticipate)}}function v(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"span",7),s.rc(2),s.Ob(),s.Pb(3,"span",8),s.rc(4),s.Ob(),s.Mb()),2&t){const t=s.Zb().$implicit;s.Ab(2),s.sc(t.key),s.Ab(2),s.sc(t.value.total)}}function m(t,e){if(1&t&&(s.Nb(0),s.pc(1,v,5,2,"ng-container",0),s.Mb()),2&t){const t=e.$implicit;s.Ab(1),s.fc("ngIf",t.value.total>0)}}function u(t,e){if(1&t&&(s.Pb(0,"div",5),s.Pb(1,"div",6),s.Pb(2,"span",7),s.rc(3),s.Ob(),s.Pb(4,"span",8),s.rc(5),s.Ob(),s.pc(6,m,2,1,"ng-container",9),s.ac(7,"keyvalue"),s.Ob(),s.Ob()),2&t){const t=s.Zb(2);s.Ab(3),s.sc(t.langProvider.Tags),s.Ab(2),s.sc(t.langProvider.Total),s.Ab(1),s.fc("ngForOf",s.bc(7,3,t.item.basketItems))}}function O(t,e){if(1&t&&(s.Nb(0),s.Pb(1,"ion-item"),s.Pb(2,"ion-label"),s.Pb(3,"div",1),s.Pb(4,"span"),s.rc(5),s.Ob(),s.Pb(6,"span",2),s.rc(7),s.ac(8,"date"),s.Ob(),s.Ob(),s.Pb(9,"div",3),s.Pb(10,"span"),s.rc(11),s.Ob(),s.pc(12,p,2,2,"span",0),s.pc(13,f,2,1,"span",0),s.Ob(),s.pc(14,u,8,5,"div",4),s.Ob(),s.Ob(),s.Mb()),2&t){const t=s.Zb();s.Ab(1),s.oc("direction",t.langProvider.LangDirection),s.Ab(4),s.sc(t.task.name),s.Ab(2),s.sc(s.cc(8,11,t.task.date,"dd/MM/yy HH:mm:ss")),s.Ab(2),s.oc("direction",t.langProvider.LangDirection),s.Ab(2),s.uc("",t.langProvider.TotalParticipants," : ",t.item.total,""),s.Ab(1),s.fc("ngIf",t.item.position>0),s.Ab(1),s.fc("ngIf",0===t.item.position),s.Ab(1),s.fc("ngIf",t.item.basketItems)}}let P=(()=>{class t{constructor(t,e,a){this.taskDelegator=t,this.basketsDelegator=e,this.langProvider=a}ngOnInit(){return Object(i.a)(this,void 0,void 0,function*(){this.calcHistory()})}calcHistory(){return Object(i.a)(this,void 0,void 0,function*(){this.taskSaveData=yield this.taskDelegator.loadTask(this.task._id),this.item={total:this.task.orderedCandidates.length,position:this.task.orderedCandidates.findIndex(t=>t===this.candidate._id)+1,date:new Date(this.task.date)};const t=this.basketsDelegator.GetBasketsForCandidate(this.candidate._id,this.taskSaveData.basketsSaveData.main);Object.keys(t).length>0&&(this.item.basketItems=t),this.isInit=!0})}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(w),s.Kb(d.a),s.Kb(o.b))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-ordered-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],[1,"order"],["class","orderBaskets",4,"ngIf"],[1,"orderBaskets"],[1,"baskets"],[1,"col1"],[1,"col2"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&s.pc(0,O,15,14,"ng-container",0),2&t&&s.fc("ngIf",e.isInit)},directives:[r.m,c.w,c.C,r.l],pipes:[r.e,r.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .order[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.order[_ngcontent-%COMP%], .orderBaskets[_ngcontent-%COMP%]{margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}.baskets[_ngcontent-%COMP%]{display:grid}"]}),t})(),y=(()=>{class t{constructor(t){this.langProvider=t}ngOnInit(){this.calcHistory()}calcHistory(){this.totalParticipated=this.task.orderedCandidates.length,this.totalCandidates=this.task.candidates.length;const t=this.totalParticipated/this.totalCandidates;this.completedStatus=1===t?"full":t>=.5?"half":"none"}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(o.b))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-ordered-history"]],inputs:{task:"task",candidates:"candidates"},decls:5,vars:11,consts:[[1,"container"]],template:function(t,e){1&t&&(s.Pb(0,"div",0),s.Pb(1,"span"),s.rc(2),s.Ob(),s.Pb(3,"span"),s.rc(4),s.Ob(),s.Ob()),2&t&&(s.oc("direction",e.langProvider.LangDirection),s.Cb("completed","full"===e.completedStatus)("halfCompleted","half"===e.completedStatus)("notCompleted","none"===e.completedStatus),s.Ab(2),s.sc(e.langProvider.TotalParticipants),s.Ab(2),s.uc("",e.totalCandidates," / ",e.totalParticipated,""))},styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.halfCompleted[_ngcontent-%COMP%]{color:orange}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),t})();var C=a("2lKs"),D=a("nbnm"),I=a("ufmx"),S=a("h7jJ");let w=(()=>{class t{constructor(t,e,a){this.entityNamer=t,this.candidatesDelegator=e,this.dataProvider=a}getTaskConfig(t){throw new Error("Method not implemented.")}getTaskName(){throw new Error("Method not implemented.")}exportCopy(t,e){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.loadTask(t),a=this.candidatesDelegator.getCandidatesByIdsMap(e.basketsSaveData.main.candidates);e.main.exportOrder=[];let i=1;for(const t of e.main.orderedCandidates){const n=a[t],s={candidateNum:n.number,candidateGroup:n.group,order:i++};e.main.exportOrder.push(s)}delete e.main.orderedCandidates,delete e.main.childIds;const n=this.candidatesDelegator.getCandidatesByIdsMap(e.basketsSaveData.main.candidates);for(const t in e.basketsSaveData.main.baskets)if(Object.prototype.hasOwnProperty.call(e.basketsSaveData.main.baskets,t)){const a=e.basketsSaveData.main.baskets[t];delete a.preview;for(const t of a.all){const e=n[t.candidate];t.exportData={candidateNum:e.number,candidateGroup:e.group}}}return e})}saveTask(t,e){var a,n,s,o;return Object(i.a)(this,void 0,void 0,function*(){const e=[];return t.main._id=null!==(a=t.main._id)&&void 0!==a?a:this.entityNamer.taskPrefixWithUniqueIdAnd(t.main.type,t.main.taskId),t.main._rev=t.main._rev,t.main.date=null!==(n=t.main.date)&&void 0!==n?n:new Date,t.main.updateDate=new Date,e.push(t.main),t.basketsSaveData.main._id=null!==(s=t.basketsSaveData.main._id)&&void 0!==s?s:`${t.main._id.replace("main","baskets")}`,t.basketsSaveData.main._rev=t.basketsSaveData.main._rev,t.basketsSaveData.main.date=null!==(o=t.basketsSaveData.main.date)&&void 0!==o?o:new Date,t.basketsSaveData.main.updateDate=new Date,t.main.childIds.baskets=[t.basketsSaveData.main._id],e.push(t.basketsSaveData.main),yield this.dataProvider.saveEntities(e),t})}loadTask(t){return Object(i.a)(this,void 0,void 0,function*(){const e=yield this.dataProvider.loadTask(t),a=e._id.replace("main","baskets");return{main:e,basketsSaveData:{main:(yield this.dataProvider.loadEntitiesByPrefix(a))[0]}}})}deleteTask(t){return Object(i.a)(this,void 0,void 0,function*(){const e=[t],a=t._id.replace("main","baskets");(yield this.dataProvider.loadEntitiesByPrefix(a,{includeDocs:!1})).forEach(t=>e.push(t)),yield this.dataProvider.deleteEntities(e)})}getTaskHistory(){throw new Error("Method not implemented.")}getComponentRoute(){return"ordered"}getComponent(){return C.a}getHistoryComponent(){return y}getCandidateHistoryComponent(){return P}getCandidateAggregateComponent(){return k}getTasksForCandidates(t){throw new Error("Method not implemented.")}checkTaskEmpty(t,e){var a;const i=(null===(a=t.main.orderedCandidates)||void 0===a?void 0:a.length)>0,n=Object.keys(t.basketsSaveData.main.baskets).some(e=>{var a,i;return null===(i=null===(a=t.basketsSaveData.main.baskets[e])||void 0===a?void 0:a.all)||void 0===i?void 0:i.some(t=>t.total>0)});return!(t.main._id||i||n)}loadTasksBaskets(t){return Object(i.a)(this,void 0,void 0,function*(){const e=t.reduce((t,e,a)=>(t.push(...e.childIds.baskets),t),[]);return yield this.dataProvider.loadEntitiesByIds(e)})}calcCandidateAggDataForAll(t,e){const a=e.reduce((t,e)=>(t[e.taskId]||(t[e.taskId]=[]),t[e.taskId].push(e),t),{}),i=[];for(const n in a)if(Object.prototype.hasOwnProperty.call(a,n)){const a=this.calcCandidateAggDataForTask(t,e);i.push(a)}return i}calcCandidateAggDataForTask(t,e){const a=[],i=e.sort((t,e)=>new Date(t.date).getTime()-new Date(e.date).getTime()),n=i[0].date,s=i[e.length-1].date;for(const d of e){const e={total:d.orderedCandidates.length,position:d.orderedCandidates.findIndex(e=>e===t._id)+1,date:d.date};a.push(e)}const o=a.filter(t=>0===t.position).length;return{firstTaskDate:n,lastTaskDate:s,totalParticipated:a.length-o,totalNotParticipated:o,avgPosition:(a.filter(t=>t.position>-1).map(t=>t.position).reduce((t,e)=>t+e)/e.length).toPrecision(1)}}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(D.a),s.Tb(I.a),s.Tb(S.a))},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);