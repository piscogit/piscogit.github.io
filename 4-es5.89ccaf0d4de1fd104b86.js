!function(){function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw s}}}}function a(t,e){if(t){if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2lKs":function(t,a,n){"use strict";n.d(a,"a",(function(){return L}));var i=n("mrSG"),o=n("fXoL"),c=n("5+WD"),d=n("Mxx3"),u=n("pQKU"),l=n("43kj"),b=n("AytR"),p=n("kLqA"),v=n("tyNb"),g=n("3LWr"),f=n("zrcv"),h=n("L5fO"),k=n("TEn/"),m=n("ufmx"),y=n("NrBX"),D=n("TtBN"),M=n("3Pt+"),C=n("ofXK"),P=n("g1yl"),w=["candidatesOrder"];function O(t,e){if(1&t&&o.Jb(0,"app-candidate-avatar",26),2&t){var a=o.Xb().$implicit;o.dc("candidate",a)}}function I(t,e){if(1&t&&o.Jb(0,"app-candidate-avatar",26),2&t){var a=o.Xb().$implicit;o.dc("candidate",a)}}function N(t,e){if(1&t){var a=o.Ob();o.Nb(0,"ion-item",22),o.Vb("click",(function(){o.ic(a);var t=e.$implicit;return o.Xb(2).selectCandidate(t)})),o.Jb(1,"app-candidate-avatar",23),o.nc(2,O,1,1,"app-candidate-avatar",24),o.nc(3,I,1,1,"app-candidate-avatar",25),o.Mb()}if(2&t){var n=e.$implicit,r=o.Xb(2);o.dc("cdkDragStartDelay",r.dragDelay),o.yb(1),o.dc("candidate",n)}}function T(t,e){if(1&t&&o.Jb(0,"app-candidate-avatar",26),2&t){var a=o.Xb().$implicit;o.dc("candidate",a)}}function x(t,e){if(1&t&&o.Jb(0,"app-candidate-avatar",26),2&t){var a=o.Xb().$implicit;o.dc("candidate",a)}}function S(t,e){if(1&t&&(o.Nb(0,"ion-item",27),o.Nb(1,"div",28),o.Nb(2,"span",29),o.pc(3),o.Mb(),o.Jb(4,"app-candidate-avatar",23),o.Mb(),o.nc(5,T,1,1,"app-candidate-avatar",24),o.nc(6,x,1,1,"app-candidate-avatar",25),o.Mb()),2&t){var a=e.$implicit,n=e.index,r=o.Xb(2);o.ec("id","order_",a._id,""),o.dc("cdkDragStartDelay",r.dragDelay),o.yb(3),o.rc("",n+1,"."),o.yb(1),o.dc("candidate",a)}}function _(t,e){if(1&t){var a=o.Ob();o.Nb(0,"div",12),o.Nb(1,"ion-chip",13),o.Nb(2,"ion-list",14),o.Vb("cdkDropListDropped",(function(t){return o.ic(a),o.Xb().dropCandidates(t)})),o.nc(3,N,4,2,"ion-item",15),o.Mb(),o.Mb(),o.Nb(4,"ion-button",16),o.Vb("click",(function(){return o.ic(a),o.Xb().changeOrder()})),o.Jb(5,"ion-icon",17),o.Mb(),o.Nb(6,"ion-chip",18),o.Nb(7,"ion-list",19,20),o.Vb("cdkDropListDropped",(function(t){return o.ic(a),o.Xb().dropCandidatesOrder(t)})),o.nc(9,S,7,4,"ion-item",21),o.Mb(),o.Mb(),o.Mb()}if(2&t){var n=o.Xb();o.dc("hidden","ordered"!==n.segment),o.yb(2),o.dc("cdkDropListData",n.candidates),o.yb(1),o.dc("ngForOf",n.candidates)("ngForTrackBy",n.trackByFn),o.yb(4),o.dc("cdkDropListData",n.orderedCandidates),o.yb(2),o.dc("ngForOf",n.orderedCandidates)("ngForTrackBy",n.trackByFn)}}var L=function(){var t=function(){function t(e,a,n,i,s,o,c,u,l,b){r(this,t),this.router=e,this.route=a,this.store=n,this.msgService=i,this.langProvider=s,this.popoverController=o,this.candidatesDelegator=c,this.taskDelegator=u,this.basketDelegator=l,this.orderedDelegator=b,this.orderedCandidates=[],this.dragDelay=d.a.DragDelay,this.segment="ordered",this.createCommentFabLocations="center",this.integratedBaskets={parentId:null,parentTaskId:null,parentTaskType:null}}return s(t,[{key:"ngOnInit",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.initTask();case 2:return this.taskSavedData=t.sent,t.next=5,this.loadTask();case 5:this.taskSavedData=t.sent,this.isTaskInit=!0;case 7:case"end":return t.stop()}}),t,this)})))}},{key:"initTask",value:function(){var t;return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null!==(t=this.route.snapshot.paramMap.get(d.a.TaskDescId))&&void 0!==t?t:"t13",e.next=3,this.candidatesDelegator.getCandidatesCopy(!0);case 3:return this.candidates=e.sent,e.next=6,this.taskDelegator.getTaskDesk(a);case 6:return this.taskDesc=e.sent,e.next=9,this.taskDelegator.getTasksConfig(a);case 9:return this.taskConfig=e.sent,n={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,orderedCandidates:[],candidates:this.candidates.map((function(t){return t._id})),childIds:{}},basketsSaveData:null},e.abrupt("return",(this.integratedBaskets={parentId:null,parentTaskId:this.taskDesc.id,parentTaskType:this.taskDesc.type},n));case 12:case"end":return e.stop()}}),e,this)})))}},{key:"ionViewWillLeave",value:function(){var t;return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.taskSavedData.main.orderedCandidates=this.orderedCandidates.map((function(t){return t._id})),this.taskSavedData.basketsSaveData=null===(t=this.basketPage)||void 0===t?void 0:t.taskSavedData,!this.orderedDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)){e.next=6;break}this.msgService.showToast(this.langProvider.TaskEmptyDismissed,b.a.taskSavedToastInterval),e.next=13;break;case 6:return e.next=8,this.saveTask();case 8:return this.taskSavedData=e.sent,e.next=11,this.basketPage.ionViewWillLeave();case 11:this.msgService.showToast(this.langProvider.TaskSaved,b.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date);case 13:case"end":return e.stop()}}),e,this)})))}},{key:"saveTask",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.orderedDelegator.saveTask(this.taskSavedData,this.taskConfig);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})))}},{key:"loadTask",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var a,n,r,i,s,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=this.route.snapshot.paramMap.get(d.a.SavedTaskId),n=this.taskSavedData,!a){t.next=13;break}return this.isTaskUpdate=!0,t.next=6,this.orderedDelegator.loadTask(a);case 6:return n=t.sent,t.next=9,this.candidatesDelegator.getCandidatesByIds(n.main.candidates);case 9:this.candidates=t.sent,r=e(n.main.orderedCandidates);try{for(s=function(){var t=i.value,e=o.candidates.find((function(e){return e._id===t}));o.selectCandidate(e)},r.s();!(i=r.n()).done;)s()}catch(c){r.e(c)}finally{r.f()}this.basketPage.loadTaskIntegrated(n.basketsSaveData);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,this)})))}},{key:"dropCandidates",value:function(t){t.previousContainer===t.container||(Object(c.h)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),this.candidates=this.candidates.sort((function(t,e){return t.number-e.number})))}},{key:"dropCandidatesOrder",value:function(t){t.previousContainer===t.container?Object(c.g)(t.container.data,t.previousIndex,t.currentIndex):Object(c.h)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex)}},{key:"selectCandidate",value:function(t){var e,a=this,n=this.candidates.findIndex((function(e){return e._id===t._id}));Object(c.h)(this.candidates,this.orderedCandidates,n,this.orderedCandidates.length+1),(null===(e=this.candidatesOrder)||void 0===e?void 0:e.nativeElement)&&setTimeout((function(){var t=a.candidatesOrder.nativeElement.children;t[t.length-1].scrollIntoView({behaviour:"smooth",block:"end"})}),50)}},{key:"changeOrder",value:function(){this.orderedCandidates.reverse()}},{key:"createComment",value:function(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:p.Guid.raw()}],{skipLocationChange:!0})}},{key:"trackByFn",value:function(t,e){return e?e._id:t}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Ib(v.f),o.Ib(v.a),o.Ib(g.a),o.Ib(f.a),o.Ib(h.b),o.Ib(k.ib),o.Ib(m.a),o.Ib(y.a),o.Ib(u.a),o.Ib(D.a))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-ordered2"]],viewQuery:function(t,e){var a;1&t&&(o.lc(l.a,!0),o.vc(w,!0,o.l)),2&t&&(o.gc(a=o.Wb())&&(e.basketPage=a.first),o.gc(a=o.Wb())&&(e.candidatesOrder=a.first))},features:[o.xb([u.a])],decls:20,vars:9,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[3,"ngModel","ngModelChange"],["value","ordered",3,"click"],["value","baskets",3,"click"],[1,"content",3,"fullscreen"],[1,"container",3,"hidden","integrated"],["class","container","cdkDropListGroup","",3,"hidden",4,"ngIf"],["vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content",3,"horizontal"],["color","primary",3,"click"],["name","chatbox-ellipses"],["cdkDropListGroup","",1,"container",3,"hidden"],[1,"candidatesSelection"],["lines","none","id","candidates","cdkDropList","","cdkDropListSortingDisabled","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["class","avatarContainer","cdkDrag","",3,"cdkDragStartDelay","click",4,"ngFor","ngForOf","ngForTrackBy"],["color","light",1,"reverseOrder",3,"click"],["name","repeat"],[1,"candidatesOrder"],["lines","none","id","candidatesOrder","cdkDropList","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["candidatesOrder",""],["class","avatarContainer","cdkDrag","",3,"cdkDragStartDelay","id",4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"avatarContainer",3,"cdkDragStartDelay","click"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],[1,"avatar",3,"candidate"],["cdkDrag","",1,"avatarContainer",3,"cdkDragStartDelay","id"],[1,"avatarOrderContainer"],[1,"avatarOrder"]],template:function(t,e){1&t&&(o.Nb(0,"ion-header"),o.Nb(1,"ion-toolbar"),o.Nb(2,"ion-buttons",0),o.Jb(3,"ion-menu-button"),o.Mb(),o.Nb(4,"ion-title"),o.pc(5),o.Mb(),o.Nb(6,"ion-buttons",1),o.Jb(7,"ion-back-button",2),o.Mb(),o.Mb(),o.Nb(8,"ion-toolbar"),o.Nb(9,"ion-segment",3),o.Vb("ngModelChange",(function(t){return e.segment=t})),o.Nb(10,"ion-segment-button",4),o.Vb("click",(function(){return e.createCommentFabLocations="center"})),o.pc(11),o.Mb(),o.Nb(12,"ion-segment-button",5),o.Vb("click",(function(){return e.createCommentFabLocations="end"})),o.pc(13),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Nb(14,"ion-content",6),o.Jb(15,"app-baskets",7),o.nc(16,_,10,7,"div",8),o.Nb(17,"ion-fab",9),o.Nb(18,"ion-fab-button",10),o.Vb("click",(function(){return e.createComment()})),o.Jb(19,"ion-icon",11),o.Mb(),o.Mb(),o.Mb()),2&t&&(o.yb(5),o.qc(null==e.taskDesc?null:e.taskDesc.description),o.yb(4),o.dc("ngModel",e.segment),o.yb(2),o.rc(" ",e.langProvider.Ordered," "),o.yb(2),o.rc(" ",e.langProvider.Baskets," "),o.yb(1),o.dc("fullscreen",!0),o.yb(1),o.dc("hidden","baskets"!==e.segment)("integrated",e.integratedBaskets),o.yb(1),o.dc("ngIf",e.isTaskInit),o.yb(1),o.dc("horizontal",e.createCommentFabLocations))},directives:[k.s,k.Z,k.k,k.F,k.X,k.g,k.h,k.O,k.kb,M.d,M.g,k.P,k.n,l.a,C.m,k.o,c.a,k.p,k.t,c.e,k.l,k.D,c.d,C.l,k.j,k.w,P.a,c.c,c.b],styles:["ion-content[_ngcontent-%COMP%]{--overflow:hidden}.container[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]{height:100%;width:100%;display:flex}.container[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}.candidates[_ngcontent-%COMP%]{height:100%;overflow:scroll;min-width:var(--avatar-empty-width);background:transparent}.avatarContainer[_ngcontent-%COMP%]{--background:transparent}.candidatesSelection[_ngcontent-%COMP%]{height:100%;--background:rgba(160,165,177,0.541)}.candidatesOrder[_ngcontent-%COMP%]{height:100%;--background:rgba(157,186,250,0.541)}.avatarOrderContainer[_ngcontent-%COMP%]{display:flex;align-items:center}.avatarOrder[_ngcontent-%COMP%]{margin-right:1rem}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.reverseOrder[_ngcontent-%COMP%]{margin-top:20%}"]}),t}()},TtBN:function(a,n,i){"use strict";i.d(n,"a",(function(){return j}));var o=i("mrSG"),c=i("kMc0"),d=i("fXoL"),u=i("L5fO"),l=i("pQKU"),b=i("ofXK"),p=i("TEn/");function v(t,e){if(1&t&&(d.Lb(0),d.Nb(1,"span",3),d.pc(2),d.Mb(),d.Nb(3,"span",5),d.pc(4),d.Mb(),d.Kb()),2&t){var a=d.Xb(2);d.yb(2),d.qc(a.langProvider.TotalTasksNotParticipate),d.yb(2),d.qc(a.orderedAggData.totalNotParticipated)}}function g(t,e){if(1&t&&(d.Lb(0),d.Nb(1,"span",3),d.pc(2),d.Mb(),d.Nb(3,"span",5),d.pc(4),d.Mb(),d.Nb(5,"span",8),d.pc(6),d.Mb(),d.Nb(7,"span",9),d.pc(8),d.Mb(),d.Kb()),2&t){var a=d.Xb().$implicit;d.yb(2),d.qc(a.key),d.yb(2),d.qc(a.value.value),d.yb(2),d.qc(a.value.avg),d.yb(2),d.qc(a.value.max)}}function f(t,e){if(1&t&&(d.Lb(0),d.nc(1,g,9,4,"ng-container",0),d.Kb()),2&t){var a=e.$implicit;d.yb(1),d.dc("ngIf",a.value.avg>0)}}function h(t,e){if(1&t&&(d.Lb(0),d.Nb(1,"ion-item"),d.Nb(2,"ion-label"),d.Nb(3,"div",1),d.Nb(4,"span"),d.pc(5),d.Mb(),d.Mb(),d.Nb(6,"div",2),d.Lb(7),d.Nb(8,"span",3),d.pc(9),d.Mb(),d.Nb(10,"span",4),d.pc(11),d.Yb(12,"date"),d.Mb(),d.Kb(),d.Lb(13),d.Nb(14,"span",3),d.pc(15),d.Mb(),d.Nb(16,"span",4),d.pc(17),d.Yb(18,"date"),d.Mb(),d.Kb(),d.Lb(19),d.Nb(20,"span",3),d.pc(21),d.Mb(),d.Nb(22,"span",5),d.pc(23),d.Mb(),d.Kb(),d.nc(24,v,5,2,"ng-container",0),d.Lb(25),d.Nb(26,"span",3),d.pc(27),d.Mb(),d.Nb(28,"span",5),d.pc(29),d.Mb(),d.Kb(),d.Mb(),d.Nb(30,"div",6),d.Nb(31,"span",7),d.pc(32),d.Mb(),d.Nb(33,"span",5),d.pc(34),d.Mb(),d.Nb(35,"span",8),d.pc(36),d.Mb(),d.Nb(37,"span",9),d.pc(38),d.Mb(),d.nc(39,f,2,1,"ng-container",10),d.Yb(40,"keyvalue"),d.Mb(),d.Mb(),d.Mb(),d.Kb()),2&t){var a=d.Xb();d.yb(1),d.mc("direction",a.langProvider.LangDirection),d.yb(4),d.qc(a.taskName),d.yb(4),d.qc(a.langProvider.TaskFirstDate),d.yb(2),d.qc(d.ac(12,17,a.orderedAggData.firstTaskDate,"dd/MM/yy HH:mm:ss")),d.yb(4),d.qc(a.langProvider.TaskLastDate),d.yb(2),d.qc(d.ac(18,20,a.orderedAggData.lastTaskDate,"dd/MM/yy HH:mm:ss")),d.yb(4),d.qc(a.langProvider.TotalTasks),d.yb(2),d.qc(a.totalTasks),d.yb(1),d.dc("ngIf",a.orderedAggData.totalNotParticipated>0),d.yb(3),d.qc(a.langProvider.OrderedAvgPosition),d.yb(2),d.qc(a.orderedAggData.avgPosition),d.yb(3),d.rc("",a.langProvider.Tags,":"),d.yb(2),d.qc(a.langProvider.BasketValue),d.yb(2),d.qc(a.langProvider.BasketAvg),d.yb(2),d.qc(a.langProvider.BasketMax),d.yb(1),d.dc("ngForOf",d.Zb(40,23,a.basketsAggData.basketsTotals))}}var k,m=((k=function(){function t(e,a,n){r(this,t),this.langProvider=e,this.orderedDelegtor=a,this.basketDelegator=n}return s(t,[{key:"ngOnInit",value:function(){this.calcHistory()}},{key:"calcHistory",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.taskName=this.tasks[0].name,this.totalTasks=this.tasks.length,(e=new c.a).start(),this.orderedAggData=this.orderedDelegtor.calcCandidateAggData(this.candidate,this.tasks),t.next=5,this.orderedDelegtor.loadTasksBaskets(this.tasks);case 5:a=t.sent,this.basketsAggData=this.basketDelegator.calcCandidateAggData(this.candidate,this.candidates,a),n=e.stop(),console.log("OrderedCandidateHistoryAgg ".concat(this.candidate._id," time: ").concat(n)),this.isInit=!0;case 9:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||k)(d.Ib(u.b),d.Ib(j),d.Ib(l.a))},k.\u0275cmp=d.Cb({type:k,selectors:[["app-ordered-candidate-history-agg"]],inputs:{tasks:"tasks",candidate:"candidate",candidates:"candidates"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[1,"orderStats"],[1,"col1"],[1,"col2","ltr","ml-auto"],[1,"col2"],[1,"orderBaskets"],[1,"col1","basketsHeader"],[1,"col3"],[1,"col4"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&d.nc(0,h,41,25,"ng-container",0),2&t&&d.dc("ngIf",e.isInit)},directives:[b.m,p.w,p.C,b.l],pipes:[b.e,b.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.orderStats[_ngcontent-%COMP%]{display:grid}.orderBaskets[_ngcontent-%COMP%]{display:grid;margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),k);function y(t,e){if(1&t&&(d.Nb(0,"span"),d.pc(1),d.Mb()),2&t){var a=d.Xb(2);d.yb(1),d.sc("",a.langProvider.Position," : ",a.item.position,"")}}function D(t,e){if(1&t&&(d.Nb(0,"span"),d.pc(1),d.Mb()),2&t){var a=d.Xb(2);d.yb(1),d.qc(a.langProvider.NotParticipate)}}function M(t,e){if(1&t&&(d.Nb(0,"span"),d.pc(1),d.Mb()),2&t){var a=d.Xb().$implicit,n=d.Xb(3);d.yb(1),d.sc(" ",n.langProvider.Total," : ",a.value.total," ")}}function C(t,e){if(1&t&&(d.Nb(0,"div"),d.Nb(1,"span"),d.pc(2),d.Mb(),d.nc(3,M,2,2,"span",0),d.Mb()),2&t){var a=e.$implicit;d.yb(2),d.qc(a.key),d.yb(1),d.dc("ngIf",a.value.total>1)}}function P(t,e){if(1&t&&(d.Nb(0,"div",5),d.Nb(1,"span",6),d.pc(2),d.Mb(),d.nc(3,C,4,2,"div",7),d.Yb(4,"keyvalue"),d.Mb()),2&t){var a=d.Xb(2);d.yb(2),d.rc("",a.langProvider.Tags,":"),d.yb(1),d.dc("ngForOf",d.Zb(4,2,a.item.basketItems))}}function w(t,e){if(1&t&&(d.Lb(0),d.Nb(1,"ion-item"),d.Nb(2,"ion-label"),d.Nb(3,"div",1),d.Nb(4,"span"),d.pc(5),d.Mb(),d.Nb(6,"span",2),d.pc(7),d.Yb(8,"date"),d.Mb(),d.Mb(),d.Nb(9,"div",3),d.Nb(10,"span"),d.pc(11),d.Mb(),d.nc(12,y,2,2,"span",0),d.nc(13,D,2,1,"span",0),d.Mb(),d.nc(14,P,5,4,"div",4),d.Mb(),d.Mb(),d.Kb()),2&t){var a=d.Xb();d.yb(1),d.mc("direction",a.langProvider.LangDirection),d.yb(4),d.qc(a.task.name),d.yb(2),d.qc(d.ac(8,11,a.task.date,"dd/MM/yy HH:mm:ss")),d.yb(2),d.mc("direction",a.langProvider.LangDirection),d.yb(2),d.sc("",a.langProvider.TotalParticipants," : ",a.item.total,""),d.yb(1),d.dc("ngIf",a.item.position>0),d.yb(1),d.dc("ngIf",0===a.item.position),d.yb(1),d.dc("ngIf",a.item.basketItems)}}var O,I,N,T=((I=function(){function t(e,a,n){r(this,t),this.taskDelegator=e,this.basketsDelegator=a,this.langProvider=n}return s(t,[{key:"ngOnInit",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.calcHistory();case 1:case"end":return t.stop()}}),t,this)})))}},{key:"calcHistory",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.taskDelegator.loadTask(this.task._id);case 2:this.taskSaveData=t.sent,this.item={total:this.task.orderedCandidates.length,position:this.task.orderedCandidates.findIndex((function(t){return t===a.candidate._id}))+1,date:new Date(this.task.date)},e=this.basketsDelegator.GetBasketsForCandidate(this.candidate._id,this.taskSaveData.basketsSaveData.main),Object.keys(e).length>0&&(this.item.basketItems=e),this.isInit=!0;case 6:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||I)(d.Ib(j),d.Ib(l.a),d.Ib(u.b))},I.\u0275cmp=d.Cb({type:I,selectors:[["app-ordered-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],[1,"order"],["class","orderBaskets",4,"ngIf"],[1,"orderBaskets"],[1,"basketsHeader"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&d.nc(0,w,15,14,"ng-container",0),2&t&&d.dc("ngIf",e.isInit)},directives:[b.m,p.w,p.C,b.l],pipes:[b.e,b.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .order[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.orderBaskets[_ngcontent-%COMP%]{margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),I),x=((O=function(){function t(e){r(this,t),this.langProvider=e}return s(t,[{key:"ngOnInit",value:function(){this.calcHistory()}},{key:"calcHistory",value:function(){this.totalParticipated=this.task.orderedCandidates.length,this.totalCandidates=this.task.candidates.length;var t=this.totalParticipated/this.totalCandidates;this.completedStatus=1===t?"full":t>=.5?"half":"none"}}]),t}()).\u0275fac=function(t){return new(t||O)(d.Ib(u.b))},O.\u0275cmp=d.Cb({type:O,selectors:[["app-ordered-history"]],inputs:{task:"task",candidates:"candidates"},decls:5,vars:11,consts:[[1,"container"]],template:function(t,e){1&t&&(d.Nb(0,"div",0),d.Nb(1,"span"),d.pc(2),d.Mb(),d.Nb(3,"span"),d.pc(4),d.Mb(),d.Mb()),2&t&&(d.mc("direction",e.langProvider.LangDirection),d.Ab("completed","full"===e.completedStatus)("halfCompleted","half"===e.completedStatus)("notCompleted","none"===e.completedStatus),d.yb(2),d.qc(e.langProvider.TotalParticipants),d.yb(2),d.sc("",e.totalCandidates," / ",e.totalParticipated,""))},styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.halfCompleted[_ngcontent-%COMP%]{color:orange}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),O),S=i("2lKs"),_=i("nbnm"),L=i("h7jJ"),j=((N=function(){function a(t,e){r(this,a),this.entityNamer=t,this.dataProvider=e}return s(a,[{key:"getTaskConfig",value:function(t){throw new Error("Method not implemented.")}},{key:"getTaskName",value:function(){throw new Error("Method not implemented.")}},{key:"saveTask",value:function(t,e){var a,n,r,i;return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],t.main._id=null!==(a=t.main._id)&&void 0!==a?a:this.entityNamer.taskPrefixWithUniqueIdAnd(t.main.type,t.main.taskId),t.main._rev=t.main._rev,t.main.date=null!==(n=t.main.date)&&void 0!==n?n:new Date,t.main.updateDate=new Date,s.push(t.main),t.basketsSaveData.main._id=null!==(r=t.basketsSaveData.main._id)&&void 0!==r?r:""+t.main._id.replace("main","baskets"),t.basketsSaveData.main._rev=t.basketsSaveData.main._rev,t.basketsSaveData.main.date=null!==(i=t.basketsSaveData.main.date)&&void 0!==i?i:new Date,t.basketsSaveData.main.updateDate=new Date,t.main.childIds.baskets=[t.basketsSaveData.main._id],s.push(t.basketsSaveData.main),e.next=14,this.dataProvider.saveEntities(s);case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e,this)})))}},{key:"loadTask",value:function(t){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataProvider.loadTask(t);case 2:return a=e.sent,n=a._id.replace("main","baskets"),e.t0=a,e.next=7,this.dataProvider.loadEntitiesByPrefix(n);case 7:return e.t1=e.sent[0],e.t2={main:e.t1},e.abrupt("return",{main:e.t0,basketsSaveData:e.t2});case 10:case"end":return e.stop()}}),e,this)})))}},{key:"deleteTask",value:function(t){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[t],n=t._id.replace("main","baskets"),e.next=3,this.dataProvider.loadEntitiesByPrefix(n,{includeDocs:!1});case 3:return e.sent.forEach((function(t){return a.push(t)})),e.next=6,this.dataProvider.deleteEntities(a);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"getTaskHistory",value:function(){throw new Error("Method not implemented.")}},{key:"getComponent",value:function(){return S.a}},{key:"getHistoryComponent",value:function(){return x}},{key:"getCandidateHistoryComponent",value:function(){return T}},{key:"getCandidateAggregateComponent",value:function(){return m}},{key:"getTasksForCandidates",value:function(t){throw new Error("Method not implemented.")}},{key:"checkTaskEmpty",value:function(t,e){var a,n=(null===(a=t.main.orderedCandidates)||void 0===a?void 0:a.length)>0,r=Object.keys(t.basketsSaveData.main.baskets).some((function(e){var a,n;return(null===(n=null===(a=t.basketsSaveData.main.baskets[e])||void 0===a?void 0:a.all)||void 0===n?void 0:n.length)>0}));return!(t.main._id||n||r)}},{key:"loadTasksBaskets",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.reduce((function(e,a,n){return e.push.apply(e,t(a.childIds.baskets)),e}),[]),a.next=3,this.dataProvider.loadEntitiesByIds(n);case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}),a,this)})))}},{key:"calcCandidateAggData",value:function(t,a){var n,r=[],i=a.sort((function(t,e){return new Date(t.date).getTime()-new Date(e.date).getTime()})),s=i[0].date,o=i[a.length-1].date,c=e(a);try{for(c.s();!(n=c.n()).done;){var d=n.value,u={total:d.orderedCandidates.length,position:d.orderedCandidates.findIndex((function(e){return e===t._id}))+1,date:d.date};r.push(u)}}catch(b){c.e(b)}finally{c.f()}var l=r.filter((function(t){return 0===t.position})).length;return{firstTaskDate:s,lastTaskDate:o,totalParticipated:r.length-l,totalNotParticipated:l,avgPosition:(r.filter((function(t){return t.position>-1})).map((function(t){return t.position})).reduce((function(t,e){return t+e}))/a.length).toPrecision(1)}}}]),a}()).\u0275fac=function(t){return new(t||N)(d.Rb(_.a),d.Rb(L.a))},N.\u0275prov=d.Eb({token:N,factory:N.\u0275fac,providedIn:"root"}),N)}}])}();