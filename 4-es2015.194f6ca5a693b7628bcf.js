(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2lKs":function(t,a,e){"use strict";e.d(a,"a",(function(){return S}));var n=e("mrSG"),i=e("fXoL"),s=e("5+WD"),d=e("Mxx3"),r=e("pQKU"),o=e("43kj"),c=e("AytR"),b=e("kLqA"),l=e("tyNb"),g=e("3LWr"),p=e("zrcv"),h=e("L5fO"),v=e("TEn/"),k=e("ufmx"),u=e("NrBX"),m=e("TtBN"),f=e("3Pt+"),y=e("ofXK"),D=e("g1yl");const M=["candidatesOrder"];function C(t,a){if(1&t&&i.Jb(0,"app-candidate-avatar",26),2&t){const t=i.Xb().$implicit;i.dc("candidate",t)}}function P(t,a){if(1&t&&i.Jb(0,"app-candidate-avatar",26),2&t){const t=i.Xb().$implicit;i.dc("candidate",t)}}function O(t,a){if(1&t){const t=i.Ob();i.Nb(0,"ion-item",22),i.Vb("click",(function(){i.ic(t);const e=a.$implicit;return i.Xb(2).selectCandidate(e)})),i.Jb(1,"app-candidate-avatar",23),i.nc(2,C,1,1,"app-candidate-avatar",24),i.nc(3,P,1,1,"app-candidate-avatar",25),i.Mb()}if(2&t){const t=a.$implicit,e=i.Xb(2);i.dc("cdkDragStartDelay",e.dragDelay),i.yb(1),i.dc("candidate",t)}}function N(t,a){if(1&t&&i.Jb(0,"app-candidate-avatar",26),2&t){const t=i.Xb().$implicit;i.dc("candidate",t)}}function I(t,a){if(1&t&&i.Jb(0,"app-candidate-avatar",26),2&t){const t=i.Xb().$implicit;i.dc("candidate",t)}}function T(t,a){if(1&t&&(i.Nb(0,"ion-item",27),i.Nb(1,"div",28),i.Nb(2,"span",29),i.pc(3),i.Mb(),i.Jb(4,"app-candidate-avatar",23),i.Mb(),i.nc(5,N,1,1,"app-candidate-avatar",24),i.nc(6,I,1,1,"app-candidate-avatar",25),i.Mb()),2&t){const t=a.$implicit,e=a.index,n=i.Xb(2);i.ec("id","order_",t._id,""),i.dc("cdkDragStartDelay",n.dragDelay),i.yb(3),i.rc("",e+1,"."),i.yb(1),i.dc("candidate",t)}}function _(t,a){if(1&t){const t=i.Ob();i.Nb(0,"div",12),i.Nb(1,"ion-chip",13),i.Nb(2,"ion-list",14),i.Vb("cdkDropListDropped",(function(a){return i.ic(t),i.Xb().dropCandidates(a)})),i.nc(3,O,4,2,"ion-item",15),i.Mb(),i.Mb(),i.Nb(4,"ion-button",16),i.Vb("click",(function(){return i.ic(t),i.Xb().changeOrder()})),i.Jb(5,"ion-icon",17),i.Mb(),i.Nb(6,"ion-chip",18),i.Nb(7,"ion-list",19,20),i.Vb("cdkDropListDropped",(function(a){return i.ic(t),i.Xb().dropCandidatesOrder(a)})),i.nc(9,T,7,4,"ion-item",21),i.Mb(),i.Mb(),i.Mb()}if(2&t){const t=i.Xb();i.dc("hidden","ordered"!==t.segment),i.yb(2),i.dc("cdkDropListData",t.candidates),i.yb(1),i.dc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn),i.yb(4),i.dc("cdkDropListData",t.taskSavedData.main.orderedCandidates),i.yb(2),i.dc("ngForOf",t.taskSavedData.main.orderedCandidates)("ngForTrackBy",t.trackByFn)}}let S=(()=>{class t{constructor(t,a,e,n,i,s,r,o,c,b){this.router=t,this.route=a,this.store=e,this.msgService=n,this.langProvider=i,this.popoverController=s,this.candidatesDelegator=r,this.taskDelegator=o,this.basketDelegator=c,this.orderedDelegator=b,this.dragDelay=d.a.DragDelay,this.segment="ordered",this.integratedBaskets={parentId:null,parentTaskId:null,parentTaskType:null}}ngOnInit(){return Object(n.a)(this,void 0,void 0,(function*(){this.taskSavedData=yield this.initTask(),this.taskSavedData=yield this.loadTask(),this.isTaskInit=!0}))}initTask(){var t;return Object(n.a)(this,void 0,void 0,(function*(){const a=null!==(t=this.route.snapshot.paramMap.get(d.a.TaskDescId))&&void 0!==t?t:"t13";this.candidates=yield this.candidatesDelegator.getCandidatesCopy(),this.taskDesc=yield this.taskDelegator.getTaskDesk(a),this.taskConfig=yield this.taskDelegator.getTasksConfig(a);const e={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,orderedCandidates:[],totalCandidates:this.candidates.length,childIds:{}},basketsSaveData:null};return this.integratedBaskets={parentId:null,parentTaskId:this.taskDesc.id,parentTaskType:this.taskDesc.type},e}))}ionViewWillLeave(){var t;return Object(n.a)(this,void 0,void 0,(function*(){this.taskSavedData.basketsSaveData=null===(t=this.basketPage)||void 0===t?void 0:t.taskSavedData,this.orderedDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,c.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),yield this.basketPage.ionViewWillLeave(),this.msgService.showToast(this.langProvider.TaskSaved,c.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))}))}saveTask(){return Object(n.a)(this,void 0,void 0,(function*(){return yield this.orderedDelegator.saveTask(this.taskSavedData,this.taskConfig)}))}loadTask(){return Object(n.a)(this,void 0,void 0,(function*(){const t=this.route.snapshot.paramMap.get(d.a.SavedTaskId);let a=this.taskSavedData;if(t){a=yield this.orderedDelegator.loadTask(t);for(const t of a.main.orderedCandidates){const a=this.candidates.find(a=>a._id===t._id);this.selectCandidate(a)}this.basketPage.loadTaskIntegrated(a.basketsSaveData)}return a}))}dropCandidates(t){t.previousContainer===t.container||(Object(s.h)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),this.candidates=this.candidates.sort((t,a)=>t.number-a.number))}dropCandidatesOrder(t){t.previousContainer===t.container?Object(s.g)(t.container.data,t.previousIndex,t.currentIndex):Object(s.h)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex)}selectCandidate(t){var a;const e=this.candidates.findIndex(a=>a._id===t._id);Object(s.h)(this.candidates,this.taskSavedData.main.orderedCandidates,e,this.taskSavedData.main.orderedCandidates.length+1),(null===(a=this.candidatesOrder)||void 0===a?void 0:a.nativeElement)&&setTimeout(()=>{const t=this.candidatesOrder.nativeElement.children;t[t.length-1].scrollIntoView({behaviour:"smooth",block:"end"})},50)}changeOrder(){this.taskSavedData.main.orderedCandidates.reverse()}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:b.Guid.raw()}],{skipLocationChange:!0})}trackByFn(t,a){return a?a._id:t}}return t.\u0275fac=function(a){return new(a||t)(i.Ib(l.f),i.Ib(l.a),i.Ib(g.a),i.Ib(p.a),i.Ib(h.b),i.Ib(v.gb),i.Ib(k.a),i.Ib(u.a),i.Ib(r.a),i.Ib(m.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-ordered2"]],viewQuery:function(t,a){var e;1&t&&(i.lc(o.a,!0),i.tc(M,!0,i.l)),2&t&&(i.gc(e=i.Wb())&&(a.basketPage=e.first),i.gc(e=i.Wb())&&(a.candidatesOrder=e.first))},features:[i.xb([r.a])],decls:20,vars:8,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[3,"ngModel","ngModelChange"],["value","ordered"],["value","baskets"],[1,"content",3,"fullscreen"],[1,"container",3,"hidden","integrated"],["class","container","cdkDropListGroup","",3,"hidden",4,"ngIf"],["horizontal","center","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],["color","primary",3,"click"],["name","chatbox-ellipses"],["cdkDropListGroup","",1,"container",3,"hidden"],[1,"candidatesSelection"],["lines","none","id","candidates","cdkDropList","","cdkDropListSortingDisabled","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["class","avatarContainer","cdkDrag","",3,"cdkDragStartDelay","click",4,"ngFor","ngForOf","ngForTrackBy"],["color","light",1,"reverseOrder",3,"click"],["name","repeat"],[1,"candidatesOrder"],["lines","none","id","candidatesOrder","cdkDropList","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["candidatesOrder",""],["class","avatarContainer","cdkDrag","",3,"cdkDragStartDelay","id",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"avatarContainer",3,"cdkDragStartDelay","click"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],[1,"avatar",3,"candidate"],["cdkDrag","",1,"avatarContainer",3,"cdkDragStartDelay","id"],[1,"avatarOrderContainer"],[1,"avatarOrder"]],template:function(t,a){1&t&&(i.Nb(0,"ion-header"),i.Nb(1,"ion-toolbar"),i.Nb(2,"ion-buttons",0),i.Jb(3,"ion-menu-button"),i.Mb(),i.Nb(4,"ion-title"),i.pc(5),i.Mb(),i.Nb(6,"ion-buttons",1),i.Jb(7,"ion-back-button",2),i.Mb(),i.Mb(),i.Nb(8,"ion-toolbar"),i.Nb(9,"ion-segment",3),i.Vb("ngModelChange",(function(t){return a.segment=t})),i.Nb(10,"ion-segment-button",4),i.pc(11),i.Mb(),i.Nb(12,"ion-segment-button",5),i.pc(13),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(14,"ion-content",6),i.Jb(15,"app-baskets",7),i.nc(16,_,10,7,"div",8),i.Nb(17,"ion-fab",9),i.Nb(18,"ion-fab-button",10),i.Vb("click",(function(){return a.createComment()})),i.Jb(19,"ion-icon",11),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.yb(5),i.qc(null==a.taskDesc?null:a.taskDesc.description),i.yb(4),i.dc("ngModel",a.segment),i.yb(2),i.rc(" ",a.langProvider.Ordered," "),i.yb(2),i.rc(" ",a.langProvider.Baskets," "),i.yb(1),i.dc("fullscreen",!0),i.yb(1),i.dc("hidden","baskets"!==a.segment)("integrated",a.integratedBaskets),i.yb(1),i.dc("ngIf",a.isTaskInit))},directives:[v.r,v.Y,v.k,v.E,v.W,v.g,v.h,v.N,v.ib,f.d,f.g,v.O,v.n,o.a,y.m,v.o,s.a,v.p,v.s,s.e,v.l,v.C,s.d,y.l,v.j,v.v,D.a,s.c,s.b],styles:[".container[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]{height:100%;width:100%;display:flex}.container[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}.candidates[_ngcontent-%COMP%]{height:100%;overflow:scroll;min-width:var(--avatar-empty-width);background:transparent}.avatarContainer[_ngcontent-%COMP%]{--background:transparent}.candidatesSelection[_ngcontent-%COMP%]{height:100%;--background:rgba(160,165,177,0.541)}.candidatesOrder[_ngcontent-%COMP%]{height:100%;--background:rgba(157,186,250,0.541)}.avatarOrderContainer[_ngcontent-%COMP%]{display:flex;align-items:center}.avatarOrder[_ngcontent-%COMP%]{margin-right:1rem}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.reverseOrder[_ngcontent-%COMP%]{margin-top:20%}"]}),t})()},TtBN:function(t,a,e){"use strict";e.d(a,"a",(function(){return N}));var n=e("mrSG"),i=e("kMc0"),s=e("fXoL"),d=e("L5fO"),r=e("pQKU"),o=e("ofXK"),c=e("TEn/");function b(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"span",3),s.pc(2),s.Mb(),s.Nb(3,"span",5),s.pc(4),s.Mb(),s.Kb()),2&t){const t=s.Xb(2);s.yb(2),s.qc(t.langProvider.TotalTasksNotParticipate),s.yb(2),s.qc(t.orderedAggData.totalNotParticipated)}}function l(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"span",3),s.pc(2),s.Mb(),s.Nb(3,"span",5),s.pc(4),s.Mb(),s.Nb(5,"span",8),s.pc(6),s.Mb(),s.Nb(7,"span",9),s.pc(8),s.Mb(),s.Kb()),2&t){const t=s.Xb().$implicit;s.yb(2),s.qc(t.key),s.yb(2),s.qc(t.value.value),s.yb(2),s.qc(t.value.avg),s.yb(2),s.qc(t.value.max)}}function g(t,a){if(1&t&&(s.Lb(0),s.nc(1,l,9,4,"ng-container",0),s.Kb()),2&t){const t=a.$implicit;s.yb(1),s.dc("ngIf",t.value.avg>0)}}function p(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.pc(5),s.Mb(),s.Mb(),s.Nb(6,"div",2),s.Lb(7),s.Nb(8,"span",3),s.pc(9),s.Mb(),s.Nb(10,"span",4),s.pc(11),s.Yb(12,"date"),s.Mb(),s.Kb(),s.Lb(13),s.Nb(14,"span",3),s.pc(15),s.Mb(),s.Nb(16,"span",4),s.pc(17),s.Yb(18,"date"),s.Mb(),s.Kb(),s.Lb(19),s.Nb(20,"span",3),s.pc(21),s.Mb(),s.Nb(22,"span",5),s.pc(23),s.Mb(),s.Kb(),s.nc(24,b,5,2,"ng-container",0),s.Lb(25),s.Nb(26,"span",3),s.pc(27),s.Mb(),s.Nb(28,"span",5),s.pc(29),s.Mb(),s.Kb(),s.Mb(),s.Nb(30,"div",6),s.Nb(31,"span",7),s.pc(32),s.Mb(),s.Nb(33,"span",5),s.pc(34),s.Mb(),s.Nb(35,"span",8),s.pc(36),s.Mb(),s.Nb(37,"span",9),s.pc(38),s.Mb(),s.nc(39,g,2,1,"ng-container",10),s.Yb(40,"keyvalue"),s.Mb(),s.Mb(),s.Mb(),s.Kb()),2&t){const t=s.Xb();s.yb(1),s.mc("direction",t.langProvider.LangDirection),s.yb(4),s.qc(t.taskName),s.yb(4),s.qc(t.langProvider.TaskFirstDate),s.yb(2),s.qc(s.ac(12,17,t.orderedAggData.firstTaskDate,"dd/MM/yy HH:mm:ss")),s.yb(4),s.qc(t.langProvider.TaskLastDate),s.yb(2),s.qc(s.ac(18,20,t.orderedAggData.lastTaskDate,"dd/MM/yy HH:mm:ss")),s.yb(4),s.qc(t.langProvider.TotalTasks),s.yb(2),s.qc(t.totalTasks),s.yb(1),s.dc("ngIf",t.orderedAggData.totalNotParticipated>0),s.yb(3),s.qc(t.langProvider.OrderedAvgPosition),s.yb(2),s.qc(t.orderedAggData.avgPosition),s.yb(3),s.rc("",t.langProvider.Tags,":"),s.yb(2),s.qc(t.langProvider.BasketValue),s.yb(2),s.qc(t.langProvider.BasketAvg),s.yb(2),s.qc(t.langProvider.BasketMax),s.yb(1),s.dc("ngForOf",s.Zb(40,23,t.basketsAggData.basketsTotals))}}let h=(()=>{class t{constructor(t,a,e){this.langProvider=t,this.orderedDelegtor=a,this.basketDelegator=e}ngOnInit(){this.calcHistory()}calcHistory(){return Object(n.a)(this,void 0,void 0,(function*(){this.taskName=this.tasks[0].name,this.totalTasks=this.tasks.length;const t=new i.a;t.start(),this.orderedAggData=this.orderedDelegtor.calcCandidateAggData(this.candidate,this.tasks);const a=yield this.orderedDelegtor.loadTasksBaskets(this.tasks);this.basketsAggData=this.basketDelegator.calcCandidateAggData(this.candidate,this.candidates,a);const e=t.stop();console.log(`OrderedCandidateHistoryAgg ${this.candidate._id} time: ${e}`),this.isInit=!0}))}}return t.\u0275fac=function(a){return new(a||t)(s.Ib(d.b),s.Ib(N),s.Ib(r.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-candidate-history-agg"]],inputs:{tasks:"tasks",candidate:"candidate",candidates:"candidates"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[1,"orderStats"],[1,"col1"],[1,"col2","ltr","ml-auto"],[1,"col2"],[1,"orderBaskets"],[1,"col1","basketsHeader"],[1,"col3"],[1,"col4"],[4,"ngFor","ngForOf"]],template:function(t,a){1&t&&s.nc(0,p,41,25,"ng-container",0),2&t&&s.dc("ngIf",a.isInit)},directives:[o.m,c.v,c.B,o.l],pipes:[o.e,o.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.orderStats[_ngcontent-%COMP%]{display:grid}.orderBaskets[_ngcontent-%COMP%]{display:grid;margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),t})();function v(t,a){if(1&t&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&t){const t=s.Xb(2);s.yb(1),s.sc("",t.langProvider.Position," : ",t.item.position,"")}}function k(t,a){if(1&t&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&t){const t=s.Xb(2);s.yb(1),s.qc(t.langProvider.NotParticipate)}}function u(t,a){if(1&t&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&t){const t=s.Xb().$implicit,a=s.Xb(3);s.yb(1),s.sc(" ",a.langProvider.Total," : ",t.value.total," ")}}function m(t,a){if(1&t&&(s.Nb(0,"div"),s.Nb(1,"span"),s.pc(2),s.Mb(),s.nc(3,u,2,2,"span",0),s.Mb()),2&t){const t=a.$implicit;s.yb(2),s.qc(t.key),s.yb(1),s.dc("ngIf",t.value.total>1)}}function f(t,a){if(1&t&&(s.Nb(0,"div",5),s.Nb(1,"span",6),s.pc(2),s.Mb(),s.nc(3,m,4,2,"div",7),s.Yb(4,"keyvalue"),s.Mb()),2&t){const t=s.Xb(2);s.yb(2),s.rc("",t.langProvider.Tags,":"),s.yb(1),s.dc("ngForOf",s.Zb(4,2,t.item.basketItems))}}function y(t,a){if(1&t&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.pc(5),s.Mb(),s.Nb(6,"span",2),s.pc(7),s.Yb(8,"date"),s.Mb(),s.Mb(),s.Nb(9,"div",3),s.Nb(10,"span"),s.pc(11),s.Mb(),s.nc(12,v,2,2,"span",0),s.nc(13,k,2,1,"span",0),s.Mb(),s.nc(14,f,5,4,"div",4),s.Mb(),s.Mb(),s.Kb()),2&t){const t=s.Xb();s.yb(1),s.mc("direction",t.langProvider.LangDirection),s.yb(4),s.qc(t.task.name),s.yb(2),s.qc(s.ac(8,11,t.task.date,"dd/MM/yy HH:mm:ss")),s.yb(2),s.mc("direction",t.langProvider.LangDirection),s.yb(2),s.sc("",t.langProvider.TotalParticipants," : ",t.item.total,""),s.yb(1),s.dc("ngIf",t.item.position>0),s.yb(1),s.dc("ngIf",0===t.item.position),s.yb(1),s.dc("ngIf",t.item.basketItems)}}let D=(()=>{class t{constructor(t,a,e){this.taskDelegator=t,this.basketsDelegator=a,this.langProvider=e}ngOnInit(){return Object(n.a)(this,void 0,void 0,(function*(){this.calcHistory()}))}calcHistory(){return Object(n.a)(this,void 0,void 0,(function*(){this.taskSaveData=yield this.taskDelegator.loadTask(this.task._id),this.item={total:this.task.orderedCandidates.length,position:this.task.orderedCandidates.findIndex(t=>t._id===this.candidate._id)+1,date:new Date(this.task.date)};const t=this.basketsDelegator.GetBasketsForCandidate(this.candidate._id,this.taskSaveData.basketsSaveData.main);Object.keys(t).length>0&&(this.item.basketItems=t),this.isInit=!0}))}}return t.\u0275fac=function(a){return new(a||t)(s.Ib(N),s.Ib(r.a),s.Ib(d.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],[1,"order"],["class","orderBaskets",4,"ngIf"],[1,"orderBaskets"],[1,"basketsHeader"],[4,"ngFor","ngForOf"]],template:function(t,a){1&t&&s.nc(0,y,15,14,"ng-container",0),2&t&&s.dc("ngIf",a.isInit)},directives:[o.m,c.v,c.B,o.l],pipes:[o.e,o.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .order[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.orderBaskets[_ngcontent-%COMP%]{margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),t})(),M=(()=>{class t{constructor(t){this.langProvider=t}ngOnInit(){this.calcHistory()}calcHistory(){this.totalParticipated=this.task.orderedCandidates.length,this.totalCandidates=this.task.totalCandidates;const t=this.totalParticipated/this.totalCandidates;this.completedStatus=1===t?"full":t>=.5?"half":"none"}}return t.\u0275fac=function(a){return new(a||t)(s.Ib(d.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-ordered-history"]],inputs:{task:"task",candidates:"candidates"},decls:5,vars:11,consts:[[1,"container"]],template:function(t,a){1&t&&(s.Nb(0,"div",0),s.Nb(1,"span"),s.pc(2),s.Mb(),s.Nb(3,"span"),s.pc(4),s.Mb(),s.Mb()),2&t&&(s.mc("direction",a.langProvider.LangDirection),s.Ab("completed","full"===a.completedStatus)("halfCompleted","half"===a.completedStatus)("notCompleted","none"===a.completedStatus),s.yb(2),s.qc(a.langProvider.TotalParticipants),s.yb(2),s.sc("",a.totalCandidates," / ",a.totalParticipated,""))},styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.halfCompleted[_ngcontent-%COMP%]{color:orange}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),t})();var C=e("2lKs"),P=e("nbnm"),O=e("h7jJ");let N=(()=>{class t{constructor(t,a){this.entityNamer=t,this.dataProvider=a}getTaskConfig(t){throw new Error("Method not implemented.")}getTaskName(){throw new Error("Method not implemented.")}saveTask(t,a){var e,i,s,d;return Object(n.a)(this,void 0,void 0,(function*(){const a=[];return t.main._id=null!==(e=t.main._id)&&void 0!==e?e:this.entityNamer.taskPrefixWithUniqueIdAnd(t.main.type,t.main.taskId),t.main._rev=t.main._rev,t.main.date=null!==(i=t.main.date)&&void 0!==i?i:new Date,t.main.updateDate=new Date,a.push(t.main),t.basketsSaveData.main._id=null!==(s=t.basketsSaveData.main._id)&&void 0!==s?s:""+t.main._id.replace("main","baskets"),t.basketsSaveData.main._rev=t.basketsSaveData.main._rev,t.basketsSaveData.main.date=null!==(d=t.basketsSaveData.main.date)&&void 0!==d?d:new Date,t.basketsSaveData.main.updateDate=new Date,t.main.childIds.baskets=[t.basketsSaveData.main._id],a.push(t.basketsSaveData.main),yield this.dataProvider.saveEntities(a),t}))}loadTask(t){return Object(n.a)(this,void 0,void 0,(function*(){const a=yield this.dataProvider.loadTask(t),e=a._id.replace("main","baskets");return{main:a,basketsSaveData:{main:(yield this.dataProvider.loadEntitiesByPrefix(e))[0]}}}))}deleteTask(t){return Object(n.a)(this,void 0,void 0,(function*(){const a=[t],e=t._id.replace("main","baskets");(yield this.dataProvider.loadEntitiesByPrefix(e,{includeDocs:!1})).forEach(t=>a.push(t)),yield this.dataProvider.deleteEntities(a)}))}getTaskHistory(){throw new Error("Method not implemented.")}getComponent(){return C.a}getHistoryComponent(){return M}getCandidateHistoryComponent(){return D}getCandidateAggregateComponent(){return h}getTasksForCandidates(t){throw new Error("Method not implemented.")}checkTaskEmpty(t,a){var e;const n=(null===(e=t.main.orderedCandidates)||void 0===e?void 0:e.length)>0,i=Object.keys(t.basketsSaveData.main.baskets).some(a=>{var e,n;return(null===(n=null===(e=t.basketsSaveData.main.baskets[a])||void 0===e?void 0:e.all)||void 0===n?void 0:n.length)>0});return!(t.main._id||n||i)}loadTasksBaskets(t){return Object(n.a)(this,void 0,void 0,(function*(){const a=t.reduce((t,a,e)=>(t.push(...a.childIds.baskets),t),[]);return yield this.dataProvider.loadEntitiesByIds(a)}))}calcCandidateAggData(t,a){const e=[],n=a.sort((t,a)=>new Date(t.date).getTime()-new Date(a.date).getTime()),i=n[0].date,s=n[a.length-1].date;for(const r of a){const a={total:r.orderedCandidates.length,position:r.orderedCandidates.findIndex(a=>a._id===t._id)+1,date:r.date};e.push(a)}const d=e.filter(t=>0===t.position).length;return{firstTaskDate:i,lastTaskDate:s,totalParticipated:e.length-d,totalNotParticipated:d,avgPosition:e.filter(t=>t.position>-1).map(t=>t.position).reduce((t,a)=>t+a)/a.length}}}return t.\u0275fac=function(a){return new(a||t)(s.Rb(P.a),s.Rb(O.a))},t.\u0275prov=s.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);