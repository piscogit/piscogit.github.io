(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QiNc:function(t,e,i){"use strict";i.r(e),i.d(e,"TaskCatalogFilterPageModule",(function(){return h}));var s=i("ofXK"),n=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),a=i("hvzS"),c=i("fXoL");const l=[{path:"",component:a.a}];let b=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[r.h.forChild(l)],r.h]}),t})(),h=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[s.c,n.a,o.bb,b]]}),t})()},hvzS:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var s=i("fXoL"),n=i("TEn/"),o=i("L5fO"),r=i("ofXK"),a=i("3Pt+");function c(t,e){if(1&t){const t=s.Ob();s.Nb(0,"ion-item"),s.Nb(1,"ion-label"),s.pc(2),s.Mb(),s.Nb(3,"ion-toggle",9),s.Vb("ngModelChange",(function(i){s.ic(t);const n=e.$implicit;return s.Xb().taskGroups[n].isFiltered=!i})),s.Mb(),s.Mb()}if(2&t){const t=e.$implicit,i=s.Xb();s.yb(2),s.qc(t),s.yb(1),s.dc("ngModel",!i.taskGroups[t].isFiltered)}}let l=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.langProvider=e}ngOnInit(){this.taskGroupsKeys=Object.keys(this.taskGroups)}resetFilters(){Object.keys(this.taskGroups).forEach(t=>this.taskGroups[t].isFiltered=!1)}shutdownFilters(){Object.keys(this.taskGroups).forEach(t=>this.taskGroups[t].isFiltered=!0)}applyFilters(){this.modalCtrl.dismiss("koko")}dismissFilters(){this.modalCtrl.dismiss("koko")}changeFilterStatus(t){this.taskGroups[t].isFiltered=!this.taskGroups[t].isFiltered}}return t.\u0275fac=function(e){return new(e||t)(s.Ib(n.eb),s.Ib(o.b))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-task-catalog-filter"]],inputs:{taskGroups:"taskGroups"},decls:15,vars:5,consts:[["translucent","true"],["slot","end"],["strong","",3,"click"],[1,"mainFilters",3,"fullscreen"],[1,"resetFilters"],["slot","start","color","danger","fill","clear",3,"click"],["slot","end","color","success","fill","clear",3,"click"],[1,"filtersList"],[4,"ngFor","ngForOf"],[3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(s.Nb(0,"ion-header",0),s.Nb(1,"ion-toolbar"),s.Jb(2,"ion-title"),s.Nb(3,"ion-buttons",1),s.Nb(4,"ion-button",2),s.Vb("click",(function(){return e.applyFilters()})),s.pc(5),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(6,"ion-content",3),s.Nb(7,"ion-toolbar",4),s.Nb(8,"ion-button",5),s.Vb("click",(function(){return e.shutdownFilters()})),s.pc(9),s.Mb(),s.Nb(10,"ion-button",6),s.Vb("click",(function(){return e.resetFilters()})),s.pc(11),s.Mb(),s.Mb(),s.Nb(12,"div",7),s.Nb(13,"ion-list"),s.nc(14,c,4,2,"ion-item",8),s.Mb(),s.Mb(),s.Mb()),2&t&&(s.yb(5),s.qc(e.langProvider.Done),s.yb(1),s.dc("fullscreen",!0),s.yb(3),s.rc(" ",e.langProvider.ShutdownAll," "),s.yb(2),s.rc(" ",e.langProvider.ShowAll," "),s.yb(3),s.dc("ngForOf",e.taskGroupsKeys))},directives:[n.s,n.Z,n.X,n.k,n.j,n.n,n.D,r.l,n.w,n.C,n.Y,n.c,a.d,a.g],styles:[".mainFilters[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.resetFilters[_ngcontent-%COMP%]{flex:1;width:100%;display:flex;justify-content:space-between}.filtersList[_ngcontent-%COMP%]{overflow:scroll}"]}),t})()},"m/R5":function(t,e,i){"use strict";i.r(e),i.d(e,"TaskCatalogPageModule",(function(){return G}));var s=i("ofXK"),n=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),a=i("mrSG"),c=i("kLqA"),l=i("Mxx3"),b=i("hvzS"),h=i("fXoL"),d=i("3LWr"),u=i("zrcv"),g=i("NrBX"),k=i("RybT"),f=i("L5fO");const p=["slide"];function y(t,e){if(1&t){const t=h.Ob();h.Nb(0,"ion-button",10),h.Vb("click",(function(){return h.ic(t),h.Xb(3).showSearchbar()})),h.Jb(1,"ion-icon",12),h.Mb()}}function m(t,e){if(1&t){const t=h.Ob();h.Lb(0),h.Nb(1,"ion-buttons",4),h.Jb(2,"ion-menu-button"),h.Mb(),h.Nb(3,"ion-segment",5),h.Vb("ngModelChange",(function(e){return h.ic(t),h.Xb(2).segment=e}))("ionChange",(function(){return h.ic(t),h.Xb(2).updateSegment()})),h.Nb(4,"ion-segment-button",6),h.pc(5),h.Mb(),h.Nb(6,"ion-segment-button",7),h.pc(7),h.Mb(),h.Mb(),h.Nb(8,"ion-buttons",8),h.nc(9,y,2,0,"ion-button",9),h.Nb(10,"ion-button",10),h.Vb("click",(function(){return h.ic(t),h.Xb(2).showTaskFilters()})),h.Jb(11,"ion-icon",11),h.Mb(),h.Mb(),h.Kb()}if(2&t){const t=h.Xb(2);h.yb(3),h.dc("ngModel",t.segment),h.yb(2),h.rc(" ",t.langProvider.FavoriteCatalogTasks," "),h.yb(2),h.rc(" ",t.langProvider.AllCatalogTasks," "),h.yb(2),h.dc("ngIf",!t.isShowSearchbar)}}function v(t,e){if(1&t){const t=h.Ob();h.Nb(0,"ion-searchbar",13),h.Vb("ngModelChange",(function(e){return h.ic(t),h.Xb(2).searchTaskStr=e}))("ionChange",(function(){return h.ic(t),h.Xb(2).updateSearchTask()}))("ionCancel",(function(){return h.ic(t),h.Xb(2).hideSearchbar()})),h.Mb()}if(2&t){const t=h.Xb(2);h.dc("ngModel",t.searchTaskStr)}}function F(t,e){if(1&t){const t=h.Ob();h.Nb(0,"ion-icon",20),h.Vb("click",(function(e){h.ic(t);const i=h.Xb().$implicit;return h.Xb(3).changeFavorite(i,e)})),h.Mb()}}function M(t,e){if(1&t){const t=h.Ob();h.Nb(0,"ion-icon",21),h.Vb("click",(function(e){h.ic(t);const i=h.Xb().$implicit;return h.Xb(3).changeFavorite(i,e)})),h.Mb()}}function T(t,e){if(1&t){const t=h.Ob();h.Nb(0,"ion-item-sliding",null,16),h.Yb(2,"lowercase"),h.Nb(3,"ion-item",17),h.Vb("click",(function(){h.ic(t);const i=e.$implicit;return h.Xb(3).createNewTask(i)})),h.Nb(4,"ion-label"),h.Nb(5,"p"),h.pc(6),h.Mb(),h.Mb(),h.nc(7,F,1,0,"ion-icon",18),h.nc(8,M,1,0,"ion-icon",19),h.Mb(),h.Mb()}if(2&t){const t=e.$implicit;h.zb("track",h.Zb(2,5,t.type)),h.yb(3),h.dc("hidden",t.isFiltered),h.yb(3),h.qc(t.description),h.yb(1),h.dc("ngIf",!t.isFavorite),h.yb(1),h.dc("ngIf",t.isFavorite)}}function C(t,e){if(1&t&&(h.Nb(0,"ion-item-group"),h.Nb(1,"ion-item-divider",14),h.Nb(2,"ion-label"),h.pc(3),h.Mb(),h.Mb(),h.nc(4,T,9,7,"ion-item-sliding",15),h.Mb()),2&t){const t=e.$implicit,i=h.Xb(2);h.yb(3),h.rc(" ",t," "),h.yb(1),h.dc("ngForOf",i.taskGroups[t].tasks)("ngForTrackBy",i.trackByFn)}}function w(t,e){if(1&t&&(h.Lb(0),h.Nb(1,"ion-header"),h.Nb(2,"ion-toolbar"),h.nc(3,m,12,4,"ng-container",0),h.nc(4,v,1,1,"ion-searchbar",1),h.Mb(),h.Mb(),h.Nb(5,"ion-content",2),h.Nb(6,"ion-list"),h.nc(7,C,5,3,"ion-item-group",3),h.Mb(),h.Mb(),h.Kb()),2&t){const t=h.Xb();h.yb(3),h.dc("ngIf",!t.isShowSearchbar),h.yb(1),h.dc("ngIf",t.isShowSearchbar),h.yb(1),h.dc("fullscreen",!0),h.yb(2),h.dc("ngForOf",t.taskGroupsKeys)}}const N=[{path:"",component:(()=>{class t{constructor(t,e,i,s,n,o,r,a){this.router=t,this.actionCtrl=e,this.store=i,this.msgService=s,this.modalCtrl=n,this.tasksDelegator=o,this.taskDelegatorFactory=r,this.langProvider=a,this.searchTaskStr="",this.segment="favorites",this.isInit=!1}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){this.taskCatalog=yield this.tasksDelegator.getTaskCatalog(),this.taskGroups=this.taskCatalog.reduce((t,e)=>(t[e.group]=t[e.group]||{isFiltered:!1,tasks:[]},t[e.group].tasks.push(e),t),Object.create(null)),this.filterTasks(),this.isInit=!0}))}ionViewWillEnter(){}updateSearchTask(){this.filterTasks()}updateSegment(){var t;null===(t=this.slide)||void 0===t||t.closeOpened(),this.filterTasks()}showSearchbar(){this.isShowSearchbar=!0}hideSearchbar(){this.isShowSearchbar=!1,this.searchTaskStr="",this.filterTasks()}tokenizeSearchText(t){let e=null;if(""!==t.trim()){const i=t.toLowerCase().replace(/,|\.|-/g," ");""!==i&&(e=i.split(" ").filter(t=>!!t.trim().length))}return e}checkSearchDesc(t,e,i=!0){let s=!0;return e&&(s=i?e.every(e=>t.description.indexOf(e)>-1):e.some(e=>t.description.indexOf(e)>-1)),s}filterTasks(){const t=this.tokenizeSearchText(this.searchTaskStr);switch(this.segment){case"all":Object.keys(this.taskGroups).forEach(e=>{this.taskGroups[e].tasks.forEach(i=>{i.isFiltered=this.taskGroups[e].isFiltered||!this.checkSearchDesc(i,t)})});break;case"favorites":Object.keys(this.taskGroups).forEach(e=>{this.taskGroups[e].tasks.forEach(i=>{i.isFiltered=!i.isFavorite||this.taskGroups[e].isFiltered||!this.checkSearchDesc(i,t)})})}this.taskGroupsKeys=[],Object.keys(this.taskGroups).forEach(t=>{this.taskGroups[t].tasks.filter(t=>!t.isFiltered).length>0&&this.taskGroupsKeys.push(t)})}changeFavorite(t,e){e.stopImmediatePropagation(),t.isFavorite=!t.isFavorite,t.isFavorite?this.msgService.showToast(this.langProvider.FavoriteAddMsg(t.description),500,l.b.ToastSuccess):this.msgService.showToast(this.langProvider.FavoriteRemoveMsg(t.description),500,l.b.ToastWarn),this.filterTasks()}showTaskFilters(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:b.a,swipeToClose:!0,componentProps:{taskGroups:this.taskGroups}});yield t.present(),yield t.onWillDismiss(),this.filterTasks()}))}taskSwiped(t,e){return Object(a.a)(this,void 0,void 0,(function*(){yield this.msgService.showToast("Fully Swiped: "+t.description,500)}))}createNewTask(t){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.tasksDelegator.getTasksConfig(t.id);if(e.isAlertForMultiple||e.maxItems>=1){const i=yield this.tasksDelegator.getAllTasksByTypeImpl(t.type,t.id);let s;if(i.length>0)if(i.length>=e.maxItems){const t=yield this.actionCtrl.create({header:this.langProvider.CatalogTaskEditMaxTasksMsg,cssClass:["actionSheetGeneral",this.langProvider.LangDirection],buttons:[{text:this.langProvider.CatalogTaskEditLast,role:"selected",handler:()=>{s="Edit"}},{text:this.langProvider.Cancel,role:"cancel",handler:()=>{s="Cancel"}}]});yield t.present(),yield t.onWillDismiss()}else if(e.isAlertForMultiple){const t=yield this.actionCtrl.create({header:this.langProvider.CatalogTaskEditOrNewMsg,cssClass:["actionSheetGeneral",this.langProvider.LangDirection],buttons:[{text:this.langProvider.CatalogTaskEditLast,role:"selected",handler:()=>{s="Edit"}},{text:this.langProvider.CatalogTaskNew,role:"destructive",handler:()=>{s="New"}},{text:this.langProvider.Cancel,role:"cancel",handler:()=>{s="Cancel"}}]});yield t.present(),yield t.onWillDismiss()}else s="New";else s="New";switch(s){case"New":this.navigatoToTask(t.type,t.id);break;case"Edit":{const e=i.sort((t,e)=>new Date(t.date).getTime()-new Date(e.date).getTime()).reverse()[0];this.navigatoToTask(t.type,e.taskId,e._id);break}}}else this.navigatoToTask(t.type,t.id)}))}navigatoToTask(t,e,i){var s;null===(s=this.slide)||void 0===s||s.closeOpened();const n={};n[l.a.TaskType]=t,n[l.a.TaskDescId]=e,i&&(n[l.a.SavedTaskId]=i),n[l.a.Unique]=c.Guid.raw();const o={Path:"tabs/tasks/"+this.taskDelegatorFactory.getTaskDelegator(t).getComponentRoute(),Params:n,NavigationExtras:{skipLocationChange:!0,replaceUrl:!0}};this.store.lastTaskNavData.next(o),this.router.navigate([o.Path,o.Params],o.NavigationExtras)}trackByFn(t,e){return e?e.id:t}}return t.\u0275fac=function(e){return new(e||t)(h.Ib(r.f),h.Ib(o.a),h.Ib(d.a),h.Ib(u.a),h.Ib(o.eb),h.Ib(g.a),h.Ib(k.a),h.Ib(f.b))},t.\u0275cmp=h.Cb({type:t,selectors:[["app-task-catalog"]],viewQuery:function(t,e){var i;1&t&&h.vc(p,!0),2&t&&h.gc(i=h.Wb())&&(e.slide=i.first)},decls:1,vars:1,consts:[[4,"ngIf"],["class","searchbar","showCancelButton","always",3,"ngModel","ngModelChange","ionChange","ionCancel",4,"ngIf"],[3,"fullscreen"],[4,"ngFor","ngForOf"],["slot","start"],[3,"ngModel","ngModelChange","ionChange"],["value","favorites"],["value","all"],["slot","end"],[3,"click",4,"ngIf"],[3,"click"],["slot","icon-only","name","options"],["slot","icon-only","name","search"],["showCancelButton","always",1,"searchbar",3,"ngModel","ngModelChange","ionChange","ionCancel"],["sticky","",1,"itemGroup"],[4,"ngFor","ngForOf","ngForTrackBy"],["slide",""],["button","",3,"hidden","click"],["slot","end","name","star-outline",3,"click",4,"ngIf"],["slot","end","name","star","color","primary",3,"click",4,"ngIf"],["slot","end","name","star-outline",3,"click"],["slot","end","name","star","color","primary",3,"click"]],template:function(t,e){1&t&&h.nc(0,w,8,4,"ng-container",0),2&t&&h.dc("ngIf",e.isInit)},directives:[s.m,o.s,o.Z,o.n,o.D,s.l,o.k,o.F,o.O,o.kb,n.d,n.g,o.P,o.j,o.t,o.N,o.lb,o.y,o.x,o.C,o.B,o.w],pipes:[s.k],styles:[".itemGroup[_ngcontent-%COMP%]{font-weight:700;--color:var(--ion-color-favorite)}.searchbar[_ngcontent-%COMP%]{background:var(--ion-color-light)}"]}),t})()},{path:"task-catalog-filter",loadChildren:()=>Promise.resolve().then(i.bind(null,"QiNc")).then(t=>t.TaskCatalogFilterPageModule)}];let S=(()=>{class t{}return t.\u0275mod=h.Gb({type:t}),t.\u0275inj=h.Fb({factory:function(e){return new(e||t)},imports:[[r.h.forChild(N)],r.h]}),t})();var O=i("QiNc");let G=(()=>{class t{}return t.\u0275mod=h.Gb({type:t}),t.\u0275inj=h.Fb({factory:function(e){return new(e||t)},imports:[[s.c,n.a,o.bb,S,O.TaskCatalogFilterPageModule]]}),t})()}}]);