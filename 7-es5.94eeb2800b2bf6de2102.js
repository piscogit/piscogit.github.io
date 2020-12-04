!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QiNc:function(t,e,i){"use strict";i.r(e),i.d(e,"TaskCatalogFilterPageModule",(function(){return d}));var r,a,s=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),l=i("tyNb"),u=i("hvzS"),b=i("fXoL"),h=[{path:"",component:u.a}],f=((a=function t(){n(this,t)}).\u0275mod=b.Gb({type:a}),a.\u0275inj=b.Fb({factory:function(t){return new(t||a)},imports:[[l.h.forChild(h)],l.h]}),a),d=((r=function t(){n(this,t)}).\u0275mod=b.Gb({type:r}),r.\u0275inj=b.Fb({factory:function(t){return new(t||r)},imports:[[s.c,o.a,c.bb,f]]}),r)},hvzS:function(t,i,r){"use strict";r.d(i,"a",(function(){return b}));var a=r("fXoL"),s=r("TEn/"),o=r("L5fO"),c=r("ofXK"),l=r("3Pt+");function u(t,e){if(1&t){var n=a.Ob();a.Nb(0,"ion-item"),a.Nb(1,"ion-label"),a.pc(2),a.Mb(),a.Nb(3,"ion-toggle",9),a.Vb("ngModelChange",(function(t){a.ic(n);var i=e.$implicit;return a.Xb().taskGroups[i].isFiltered=!t})),a.Mb(),a.Mb()}if(2&t){var i=e.$implicit,r=a.Xb();a.yb(2),a.qc(i),a.yb(1),a.dc("ngModel",!r.taskGroups[i].isFiltered)}}var b=function(){var t=function(){function t(e,i){n(this,t),this.modalCtrl=e,this.langProvider=i}return e(t,[{key:"ngOnInit",value:function(){this.taskGroupsKeys=Object.keys(this.taskGroups)}},{key:"resetFilters",value:function(){var t=this;Object.keys(this.taskGroups).forEach((function(e){return t.taskGroups[e].isFiltered=!1}))}},{key:"shutdownFilters",value:function(){var t=this;Object.keys(this.taskGroups).forEach((function(e){return t.taskGroups[e].isFiltered=!0}))}},{key:"applyFilters",value:function(){this.modalCtrl.dismiss("koko")}},{key:"dismissFilters",value:function(){this.modalCtrl.dismiss("koko")}},{key:"changeFilterStatus",value:function(t){this.taskGroups[t].isFiltered=!this.taskGroups[t].isFiltered}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Ib(s.eb),a.Ib(o.b))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-task-catalog-filter"]],inputs:{taskGroups:"taskGroups"},decls:15,vars:5,consts:[["translucent","true"],["slot","end"],["strong","",3,"click"],[1,"mainFilters",3,"fullscreen"],[1,"resetFilters"],["slot","start","color","danger","fill","clear",3,"click"],["slot","end","color","success","fill","clear",3,"click"],[1,"filtersList"],[4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(a.Nb(0,"ion-header",0),a.Nb(1,"ion-toolbar"),a.Jb(2,"ion-title"),a.Nb(3,"ion-buttons",1),a.Nb(4,"ion-button",2),a.Vb("click",(function(){return e.applyFilters()})),a.pc(5),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(6,"ion-content",3),a.Nb(7,"ion-toolbar",4),a.Nb(8,"ion-button",5),a.Vb("click",(function(){return e.shutdownFilters()})),a.pc(9),a.Mb(),a.Nb(10,"ion-button",6),a.Vb("click",(function(){return e.resetFilters()})),a.pc(11),a.Mb(),a.Mb(),a.Nb(12,"div",7),a.Nb(13,"ion-list"),a.nc(14,u,4,2,"ion-item",8),a.Mb(),a.Mb(),a.Mb()),2&t&&(a.yb(5),a.qc(e.langProvider.Done),a.yb(1),a.dc("fullscreen",!0),a.yb(3),a.rc(" ",e.langProvider.ShutdownAll," "),a.yb(2),a.rc(" ",e.langProvider.ShowAll," "),a.yb(3),a.dc("ngForOf",e.taskGroupsKeys))},directives:[s.s,s.Z,s.X,s.k,s.j,s.n,s.D,c.l,s.w,s.C,s.Y,s.c,l.d,l.g],styles:[".mainFilters[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.resetFilters[_ngcontent-%COMP%]{flex:1;width:100%;display:flex;justify-content:space-between}.filtersList[_ngcontent-%COMP%]{overflow:scroll}"]}),t}()},"m/R5":function(t,i,r){"use strict";r.r(i),r.d(i,"TaskCatalogPageModule",(function(){return D}));var a=r("ofXK"),s=r("3Pt+"),o=r("TEn/"),c=r("tyNb"),l=r("mrSG"),u=r("kLqA"),b=r("Mxx3"),h=r("hvzS"),f=r("fXoL"),d=r("3LWr"),g=r("zrcv"),k=r("NrBX"),p=r("RybT"),v=r("L5fO"),m=["slide"];function y(t,e){if(1&t){var n=f.Ob();f.Nb(0,"ion-button",10),f.Vb("click",(function(){return f.ic(n),f.Xb(3).showSearchbar()})),f.Jb(1,"ion-icon",12),f.Mb()}}function w(t,e){if(1&t){var n=f.Ob();f.Lb(0),f.Nb(1,"ion-buttons",4),f.Jb(2,"ion-menu-button"),f.Mb(),f.Nb(3,"ion-segment",5),f.Vb("ngModelChange",(function(t){return f.ic(n),f.Xb(2).segment=t}))("ionChange",(function(){return f.ic(n),f.Xb(2).updateSegment()})),f.Nb(4,"ion-segment-button",6),f.pc(5),f.Mb(),f.Nb(6,"ion-segment-button",7),f.pc(7),f.Mb(),f.Mb(),f.Nb(8,"ion-buttons",8),f.nc(9,y,2,0,"ion-button",9),f.Nb(10,"ion-button",10),f.Vb("click",(function(){return f.ic(n),f.Xb(2).showTaskFilters()})),f.Jb(11,"ion-icon",11),f.Mb(),f.Mb(),f.Kb()}if(2&t){var i=f.Xb(2);f.yb(3),f.dc("ngModel",i.segment),f.yb(2),f.rc(" ",i.langProvider.FavoriteCatalogTasks," "),f.yb(2),f.rc(" ",i.langProvider.AllCatalogTasks," "),f.yb(2),f.dc("ngIf",!i.isShowSearchbar)}}function C(t,e){if(1&t){var n=f.Ob();f.Nb(0,"ion-searchbar",13),f.Vb("ngModelChange",(function(t){return f.ic(n),f.Xb(2).searchTaskStr=t}))("ionChange",(function(){return f.ic(n),f.Xb(2).updateSearchTask()}))("ionCancel",(function(){return f.ic(n),f.Xb(2).hideSearchbar()})),f.Mb()}if(2&t){var i=f.Xb(2);f.dc("ngModel",i.searchTaskStr)}}function F(t,e){if(1&t){var n=f.Ob();f.Nb(0,"ion-icon",20),f.Vb("click",(function(t){f.ic(n);var e=f.Xb().$implicit;return f.Xb(3).changeFavorite(e,t)})),f.Mb()}}function M(t,e){if(1&t){var n=f.Ob();f.Nb(0,"ion-icon",21),f.Vb("click",(function(t){f.ic(n);var e=f.Xb().$implicit;return f.Xb(3).changeFavorite(e,t)})),f.Mb()}}function T(t,e){if(1&t){var n=f.Ob();f.Nb(0,"ion-item-sliding",null,16),f.Yb(2,"lowercase"),f.Nb(3,"ion-item",17),f.Vb("click",(function(){f.ic(n);var t=e.$implicit;return f.Xb(3).createNewTask(t)})),f.Nb(4,"ion-label"),f.Nb(5,"p"),f.pc(6),f.Mb(),f.Mb(),f.nc(7,F,1,0,"ion-icon",18),f.nc(8,M,1,0,"ion-icon",19),f.Mb(),f.Mb()}if(2&t){var i=e.$implicit;f.zb("track",f.Zb(2,5,i.type)),f.yb(3),f.dc("hidden",i.isFiltered),f.yb(3),f.qc(i.description),f.yb(1),f.dc("ngIf",!i.isFavorite),f.yb(1),f.dc("ngIf",i.isFavorite)}}function N(t,e){if(1&t&&(f.Nb(0,"ion-item-group"),f.Nb(1,"ion-item-divider",14),f.Nb(2,"ion-label"),f.pc(3),f.Mb(),f.Mb(),f.nc(4,T,9,7,"ion-item-sliding",15),f.Mb()),2&t){var n=e.$implicit,i=f.Xb(2);f.yb(3),f.rc(" ",n," "),f.yb(1),f.dc("ngForOf",i.taskGroups[n].tasks)("ngForTrackBy",i.trackByFn)}}function x(t,e){if(1&t&&(f.Lb(0),f.Nb(1,"ion-header"),f.Nb(2,"ion-toolbar"),f.nc(3,w,12,4,"ng-container",0),f.nc(4,C,1,1,"ion-searchbar",1),f.Mb(),f.Mb(),f.Nb(5,"ion-content",2),f.Nb(6,"ion-list"),f.nc(7,N,5,3,"ion-item-group",3),f.Mb(),f.Mb(),f.Kb()),2&t){var n=f.Xb();f.yb(3),f.dc("ngIf",!n.isShowSearchbar),f.yb(1),f.dc("ngIf",n.isShowSearchbar),f.yb(1),f.dc("fullscreen",!0),f.yb(2),f.dc("ngForOf",n.taskGroupsKeys)}}var S,O,P,G=[{path:"",component:(S=function(){function t(e,i,r,a,s,o,c,l){n(this,t),this.router=e,this.actionCtrl=i,this.store=r,this.msgService=a,this.modalCtrl=s,this.tasksDelegator=o,this.taskDelegatorFactory=c,this.langProvider=l,this.searchTaskStr="",this.segment="favorites",this.isInit=!1}return e(t,[{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tasksDelegator.getCategoryConfig();case 2:return t.next=4,t.sent.TasksCatalog;case 4:this.taskCatalog=t.sent,this.taskGroups=this.taskCatalog.reduce((function(t,e){return t[e.group]=t[e.group]||{isFiltered:!1,tasks:[]},t[e.group].tasks.push(e),t}),Object.create(null)),this.filterTasks(),this.isInit=!0;case 8:case"end":return t.stop()}}),t,this)})))}},{key:"ionViewWillEnter",value:function(){}},{key:"updateSearchTask",value:function(){this.filterTasks()}},{key:"updateSegment",value:function(){var t;null===(t=this.slide)||void 0===t||t.closeOpened(),this.filterTasks()}},{key:"showSearchbar",value:function(){this.isShowSearchbar=!0}},{key:"hideSearchbar",value:function(){this.isShowSearchbar=!1,this.searchTaskStr="",this.filterTasks()}},{key:"tokenizeSearchText",value:function(t){var e=null;if(""!==t.trim()){var n=t.toLowerCase().replace(/,|\.|-/g," ");""!==n&&(e=n.split(" ").filter((function(t){return!!t.trim().length})))}return e}},{key:"checkSearchDesc",value:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=!0;return e&&(i=n?e.every((function(e){return t.description.indexOf(e)>-1})):e.some((function(e){return t.description.indexOf(e)>-1}))),i}},{key:"filterTasks",value:function(){var t=this,e=this.tokenizeSearchText(this.searchTaskStr);switch(this.segment){case"all":Object.keys(this.taskGroups).forEach((function(n){t.taskGroups[n].tasks.forEach((function(i){i.isFiltered=t.taskGroups[n].isFiltered||!t.checkSearchDesc(i,e)}))}));break;case"favorites":Object.keys(this.taskGroups).forEach((function(n){t.taskGroups[n].tasks.forEach((function(i){i.isFiltered=!i.isFavorite||t.taskGroups[n].isFiltered||!t.checkSearchDesc(i,e)}))}))}this.taskGroupsKeys=[],Object.keys(this.taskGroups).forEach((function(e){t.taskGroups[e].tasks.filter((function(t){return!t.isFiltered})).length>0&&t.taskGroupsKeys.push(e)}))}},{key:"changeFavorite",value:function(t,e){e.stopImmediatePropagation(),t.isFavorite=!t.isFavorite,t.isFavorite?this.msgService.showToast(this.langProvider.FavoriteAddMsg(t.description),500,b.b.ToastSuccess):this.msgService.showToast(this.langProvider.FavoriteRemoveMsg(t.description),500,b.b.ToastWarn),this.filterTasks()}},{key:"showTaskFilters",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:h.a,swipeToClose:!0,componentProps:{taskGroups:this.taskGroups}});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.next=7,e.onWillDismiss();case 7:this.filterTasks();case 8:case"end":return t.stop()}}),t,this)})))}},{key:"taskSwiped",value:function(t,e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.msgService.showToast("Fully Swiped: "+t.description,500);case 2:case"end":return e.stop()}}),e,this)})))}},{key:"createNewTask",value:function(t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i,r,a,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tasksDelegator.getTasksConfig(t.id);case 2:if(!((n=e.sent).isAlertForMultiple||n.maxItems>=1)){e.next=42;break}return e.next=6,this.tasksDelegator.getAllTasksByTypeImpl(t.type,t.id);case 6:if(!((i=e.sent).length>0)){e.next=31;break}if(!(i.length>=n.maxItems)){e.next=18;break}return e.next=11,this.actionCtrl.create({header:this.langProvider.CatalogTaskEditMaxTasksMsg,cssClass:["actionSheetGeneral",this.langProvider.LangDirection],buttons:[{text:this.langProvider.CatalogTaskEditLast,role:"selected",handler:function(){r="Edit"}},{text:this.langProvider.Cancel,role:"cancel",handler:function(){r="Cancel"}}]});case 11:return a=e.sent,e.next=14,a.present();case 14:return e.next=16,a.onWillDismiss();case 16:e.next=29;break;case 18:if(!n.isAlertForMultiple){e.next=28;break}return e.next=21,this.actionCtrl.create({header:this.langProvider.CatalogTaskEditOrNewMsg,cssClass:["actionSheetGeneral",this.langProvider.LangDirection],buttons:[{text:this.langProvider.CatalogTaskEditLast,role:"selected",handler:function(){r="Edit"}},{text:this.langProvider.CatalogTaskNew,role:"destructive",handler:function(){r="New"}},{text:this.langProvider.Cancel,role:"cancel",handler:function(){r="Cancel"}}]});case 21:return s=e.sent,e.next=24,s.present();case 24:return e.next=26,s.onWillDismiss();case 26:e.next=29;break;case 28:r="New";case 29:e.next=32;break;case 31:r="New";case 32:e.t0=r,e.next="New"===e.t0?35:"Edit"===e.t0?37:40;break;case 35:return this.navigatoToTask(t.type,t.id),e.abrupt("break",40);case 37:return o=i.sort((function(t,e){return new Date(t.date).getTime()-new Date(e.date).getTime()})).reverse()[0],this.navigatoToTask(t.type,o.taskId,o._id),e.abrupt("break",40);case 40:e.next=43;break;case 42:this.navigatoToTask(t.type,t.id);case 43:case"end":return e.stop()}}),e,this)})))}},{key:"navigatoToTask",value:function(t,e,n){var i;null===(i=this.slide)||void 0===i||i.closeOpened();var r={};r[b.a.TaskType]=t,r[b.a.TaskDescId]=e,n&&(r[b.a.SavedTaskId]=n),r[b.a.Unique]=u.Guid.raw();var a={Path:"tabs/tasks/"+this.taskDelegatorFactory.getTaskDelegator(t).getComponentRoute(),Params:r,NavigationExtras:{skipLocationChange:!0,replaceUrl:!0}};this.store.lastTaskNavData.next(a),this.router.navigate([a.Path,a.Params],a.NavigationExtras)}},{key:"trackByFn",value:function(t,e){return e?e.id:t}}]),t}(),S.\u0275fac=function(t){return new(t||S)(f.Ib(c.f),f.Ib(o.a),f.Ib(d.a),f.Ib(g.a),f.Ib(o.eb),f.Ib(k.a),f.Ib(p.a),f.Ib(v.b))},S.\u0275cmp=f.Cb({type:S,selectors:[["app-task-catalog"]],viewQuery:function(t,e){var n;1&t&&f.vc(m,!0),2&t&&f.gc(n=f.Wb())&&(e.slide=n.first)},decls:1,vars:1,consts:[[4,"ngIf"],["class","searchbar","showCancelButton","always",3,"ngModel","ngModelChange","ionChange","ionCancel",4,"ngIf"],[3,"fullscreen"],[4,"ngFor","ngForOf"],["slot","start"],[3,"ngModel","ngModelChange","ionChange"],["value","favorites"],["value","all"],["slot","end"],[3,"click",4,"ngIf"],[3,"click"],["slot","icon-only","name","options"],["slot","icon-only","name","search"],["showCancelButton","always",1,"searchbar",3,"ngModel","ngModelChange","ionChange","ionCancel"],["sticky","",1,"itemGroup"],[4,"ngFor","ngForOf","ngForTrackBy"],["slide",""],["button","",3,"hidden","click"],["slot","end","name","star-outline",3,"click",4,"ngIf"],["slot","end","name","star","color","primary",3,"click",4,"ngIf"],["slot","end","name","star-outline",3,"click"],["slot","end","name","star","color","primary",3,"click"]],template:function(t,e){1&t&&f.nc(0,x,8,4,"ng-container",0),2&t&&f.dc("ngIf",e.isInit)},directives:[a.m,o.s,o.Z,o.n,o.D,a.l,o.k,o.F,o.O,o.kb,s.d,s.g,o.P,o.j,o.t,o.N,o.lb,o.y,o.x,o.C,o.B,o.w],pipes:[a.k],styles:[".itemGroup[_ngcontent-%COMP%]{font-weight:700;--color:var(--ion-color-favorite)}.searchbar[_ngcontent-%COMP%]{background:var(--ion-color-light)}"]}),S)},{path:"task-catalog-filter",loadChildren:function(){return Promise.resolve().then(r.bind(null,"QiNc")).then((function(t){return t.TaskCatalogFilterPageModule}))}}],I=((O=function t(){n(this,t)}).\u0275mod=f.Gb({type:O}),O.\u0275inj=f.Fb({factory:function(t){return new(t||O)},imports:[[c.h.forChild(G)],c.h]}),O),X=r("QiNc"),D=((P=function t(){n(this,t)}).\u0275mod=f.Gb({type:P}),P.\u0275inj=f.Fb({factory:function(t){return new(t||P)},imports:[[a.c,s.a,o.bb,I,X.TaskCatalogFilterPageModule]]}),P)}}])}();