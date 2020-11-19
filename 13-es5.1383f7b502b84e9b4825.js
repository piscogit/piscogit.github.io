!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{OrUu:function(e,a,i){"use strict";i.r(a),i.d(a,"TasksHistoryPageModule",(function(){return X}));var r=i("ofXK"),s=i("3Pt+"),o=i("TEn/"),c=i("tyNb"),u=i("mrSG"),b=i("Mxx3"),l=i("fXoL"),d=i("3LWr"),h=i("ufmx"),f=i("NrBX"),p=i("L5fO"),v=i("zrcv"),g=i("RybT"),k=i("VVJX");function y(t,e){}var m,w=((m=function(){function e(n,a){t(this,e),this.componentFactoryResolver=n,this.taskDelegatorFactory=a}return n(e,[{key:"ngOnInit",value:function(){var t=this.taskDelegatorFactory.getTaskDelegator(this.task.type).getHistoryComponent();if(t){var e=this.componentFactoryResolver.resolveComponentFactory(t),n=this.taskHost.viewContainerRef;n.clear();var a=n.createComponent(e);a.instance.task=this.task,a.instance.candidates=this.candidates,this.componentRef=a}}},{key:"ngOnChanges",value:function(t){this.componentRef&&(this.componentRef.instance.task=this.task,this.componentRef.instance.candidates=this.candidates,this.componentRef.instance.calcHistory())}}]),e}()).\u0275fac=function(t){return new(t||m)(l.Ib(l.j),l.Ib(g.a))},m.\u0275cmp=l.Cb({type:m,selectors:[["app-task-history-host"]],viewQuery:function(t,e){var n;1&t&&l.lc(k.a,!0),2&t&&l.gc(n=l.Wb())&&(e.taskHost=n.first)},inputs:{task:"task",candidates:"candidates"},features:[l.wb],decls:1,vars:0,consts:[["appTaskHost",""]],template:function(t,e){1&t&&l.nc(0,y,0,0,"ng-template",0)},directives:[k.a],styles:[""]}),m);function C(t,e){if(1&t){var n=l.Ob();l.Nb(0,"ion-button",7),l.Vb("click",(function(){return l.ic(n),l.Xb(3).showSearchbar(!0)})),l.Jb(1,"ion-icon",9),l.Mb()}}function M(t,e){if(1&t){var n=l.Ob();l.Lb(0),l.Nb(1,"ion-buttons",4),l.Jb(2,"ion-menu-button"),l.Mb(),l.Nb(3,"ion-title"),l.pc(4),l.Mb(),l.Nb(5,"ion-buttons",5),l.nc(6,C,2,0,"ion-button",6),l.Nb(7,"ion-button",7),l.Vb("click",(function(){return l.ic(n),l.Xb(2).showTaskFilters()})),l.Jb(8,"ion-icon",8),l.Mb(),l.Mb(),l.Kb()}if(2&t){var a=l.Xb(2);l.yb(3),l.mc("direction",a.langProvider.LangDirection),l.yb(1),l.qc(a.langProvider.TasksHistory),l.yb(2),l.dc("ngIf",!a.isShowSearchbar)}}function T(t,e){if(1&t){var n=l.Ob();l.Nb(0,"ion-searchbar",10),l.Vb("ngModelChange",(function(t){return l.ic(n),l.Xb(2).searchTaskStr=t}))("ionChange",(function(){return l.ic(n),l.Xb(2).updateSearchTask()}))("ionCancel",(function(){return l.ic(n),l.Xb(2).showSearchbar(!1)})),l.Mb()}if(2&t){var a=l.Xb(2);l.dc("ngModel",a.searchTaskStr)}}function x(t,e){if(1&t){var n=l.Ob();l.Nb(0,"div"),l.Nb(1,"ion-item-sliding",null,11),l.Yb(3,"lowercase"),l.Nb(4,"ion-item-options",12),l.Nb(5,"ion-item-option",13),l.Vb("click",(function(){l.ic(n);var t=e.$implicit,a=l.hc(2);return l.Xb(2).onDeleted(t,a)})),l.Jb(6,"ion-icon",14),l.Mb(),l.Mb(),l.Nb(7,"ion-item",15),l.Vb("click",(function(){l.ic(n);var t=e.$implicit;return l.Xb(2).onEdit(t)})),l.Nb(8,"ion-label"),l.Nb(9,"h3",16),l.Nb(10,"span"),l.pc(11),l.Mb(),l.Nb(12,"span",17),l.pc(13),l.Yb(14,"date"),l.Mb(),l.Mb(),l.Jb(15,"app-task-history-host",18),l.Mb(),l.Mb(),l.Mb(),l.Mb()}if(2&t){var a=e.$implicit,i=l.Xb(2);l.yb(1),l.zb("track",l.Zb(3,7,a.type)),l.yb(7),l.mc("direction",i.langProvider.LangDirection),l.yb(3),l.qc(a.name),l.yb(2),l.qc(l.ac(14,9,a.date,"dd/MM/yy HH:mm:ss")),l.yb(2),l.dc("task",a)("candidates",i.candidates)}}function I(t,e){if(1&t&&(l.Lb(0),l.Nb(1,"ion-header"),l.Nb(2,"ion-toolbar"),l.nc(3,M,9,4,"ng-container",0),l.nc(4,T,1,1,"ion-searchbar",1),l.Mb(),l.Mb(),l.Nb(5,"ion-content"),l.Nb(6,"ion-virtual-scroll",2),l.nc(7,x,16,12,"div",3),l.Mb(),l.Mb(),l.Kb()),2&t){var n=l.Xb();l.yb(3),l.dc("ngIf",!n.isShowSearchbar),l.yb(1),l.dc("ngIf",n.isShowSearchbar),l.yb(2),l.dc("items",n.tasksHistory)("trackBy",n.trackByFn)}}var D,N,O,P=[{path:"",component:(D=function(){function e(n,a,i,r,s,o,c,u,b){t(this,e),this.router=n,this.store=a,this.candidatesDelegator=i,this.tasksDelegator=r,this.langProvider=s,this.msgService=o,this.loadingCtrl=c,this.alertController=u,this.taskDelegatorFactory=b,this.subscription={},this.isInit=!1}return n(e,[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.candidatesDelegator.getCandidatesCopy();case 2:this.candidates=t.sent,this.subscription.lastTasksChangeTime=this.store.lastTasksChangeTime.subscribe((function(t){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadTasks();case 1:case"end":return t.stop()}}),t,this)})))})),this.isInit=!0;case 5:case"end":return t.stop()}}),t,this)})))}},{key:"ngOnDestroy",value:function(){for(var t in this.subscription)Object.prototype.hasOwnProperty.call(this.subscription,t)&&this.subscription[t].unsubscribe()}},{key:"ionViewWillEnter",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))}},{key:"loadTasks",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.msgService.showLoader();case 3:return e=t.sent,t.next=6,this.tasksDelegator.getAllTasks();case 6:n=t.sent.sort((function(t,e){var n=new Date(t.date).getTime();return new Date(e.date).getTime()-n})),this.tasksHistory=n;case 8:return t.prev=8,e.dismiss(),t.finish(8);case 11:case"end":return t.stop()}}),t,this,[[0,,8,11]])})))}},{key:"onEdit",value:function(t){var e={};e[b.a.TaskDescId]=t.taskId,e[b.a.SavedTaskId]=t._id;var n={Path:"tabs/tasks/"+t.type.toLowerCase(),Params:e,NavigationExtras:{skipLocationChange:!0,replaceUrl:!0}};this.store.lastTaskNavData.next(n),this.router.navigate([n.Path,n.Params],n.NavigationExtras)}},{key:"onDeleted",value:function(t,e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a,i,r,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.closeOpened(),a=!1,n.next=4,this.alertController.create({cssClass:[this.langProvider.LangDirection],header:this.langProvider.AreYouSure,subHeader:this.langProvider.TaskDeleteWarnMsg,buttons:[{text:this.langProvider.Cancel,role:"cancel",cssClass:"secondary"},{text:this.langProvider.Activate,role:"destructive",cssClass:"danger",handler:function(){return a=!0}}]});case 4:return i=n.sent,n.next=7,i.present();case 7:return n.next=9,i.onWillDismiss();case 9:if(!a){n.next=24;break}return r=this.taskDelegatorFactory.getTaskDelegator(t.type),n.next=13,this.loadingCtrl.create({message:"temp delete task"});case 13:return s=n.sent,n.next=16,s.present();case 16:return n.next=18,r.deleteTask(t);case 18:return n.next=20,this.loadTasks();case 20:return n.next=22,s.dismiss();case 22:return n.next=24,s.onDidDismiss();case 24:case"end":return n.stop()}}),n,this)})))}},{key:"showSearchbar",value:function(t){}},{key:"showTaskFilters",value:function(){}},{key:"updateSearchTask",value:function(){}},{key:"trackByFn",value:function(t,e){return e?e._id:t}},{key:"temp",value:function(t){console.log(t._id)}}]),e}(),D.\u0275fac=function(t){return new(t||D)(l.Ib(c.f),l.Ib(d.a),l.Ib(h.a),l.Ib(f.a),l.Ib(p.b),l.Ib(v.a),l.Ib(o.bb),l.Ib(o.b),l.Ib(g.a))},D.\u0275cmp=l.Cb({type:D,selectors:[["app-tasks-history"]],viewQuery:function(t,e){var n;1&t&&l.tc(o.Z,!0),2&t&&l.gc(n=l.Wb())&&(e.virtualScroll=n.first)},decls:1,vars:1,consts:[[4,"ngIf"],["class","searchbar","showCancelButton","always",3,"ngModel","ngModelChange","ionChange","ionCancel",4,"ngIf"],[3,"items","trackBy"],[4,"virtualItem"],["slot","start"],["slot","end"],[3,"click",4,"ngIf"],[3,"click"],["slot","icon-only","name","options"],["slot","icon-only","name","search"],["showCancelButton","always",1,"searchbar",3,"ngModel","ngModelChange","ionChange","ionCancel"],["slide",""],["side","end"],["color","danger",3,"click"],["name","trash",1,"deletedBtn"],["button","",3,"click"],[1,"taskHistory"],[2,"direction","ltr"],[3,"task","candidates"]],template:function(t,e){1&t&&l.nc(0,I,8,4,"ng-container",0),2&t&&l.dc("ngIf",e.isInit)},directives:[r.m,o.r,o.Y,o.n,o.Z,o.lb,o.k,o.E,o.W,o.j,o.s,o.M,o.jb,s.d,s.g,o.A,o.z,o.y,o.v,o.B,w],pipes:[r.k,r.e],styles:[".taskHistory[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.deletedBtn[_ngcontent-%COMP%]{font-size:large}"]}),D)}],R=((N=function e(){t(this,e)}).\u0275mod=l.Gb({type:N}),N.\u0275inj=l.Fb({factory:function(t){return new(t||N)},imports:[[c.h.forChild(P)],c.h]}),N),S=i("ajeZ"),X=((O=function e(){t(this,e)}).\u0275mod=l.Gb({type:O}),O.\u0275inj=l.Fb({factory:function(t){return new(t||O)},imports:[[r.c,s.a,o.ab,S.a,R]]}),O)}}])}();