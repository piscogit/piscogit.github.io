!function(){function t(t,a){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,a){if(!t)return;if("string"==typeof t)return e(t,a);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,a)}(t))||a&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw s}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CIRo:function(e,n,r){"use strict";r.d(n,"a",(function(){return R}));var s=r("mrSG"),o=r("kLqA"),c=r("Mxx3"),d=r("AytR"),l=r("fXoL"),u=r("TEn/"),b=r("L5fO"),f=r("ufmx"),h=r("zrcv"),k=r("ofXK"),v=r("g1yl");function m(t,e){if(1&t){var a=l.Ob();l.Nb(0,"app-candidate-avatar",13),l.Vb("click",(function(){l.ic(a);var t=e.$implicit,n=l.Xb();return n.selectRemoveAction(n.basketItemsEdit[t._id])})),l.Mb()}if(2&t){var n=e.$implicit,i=l.Xb();l.dc("candidate",n)("total",i.basketItemsEdit[n._id].total)("isSelected",i.dirtyItems[n._id])("isShowTotal",!0)("selectedStyle","redBlue")}}var g,p=((g=function(){function t(e,n,i,r,s){a(this,t),this.modalCtrl=e,this.langProvider=n,this.candidatesDelegator=i,this.msgService=r,this.navCtrl=s,this.dirtyItems={},this.mode="add"}return i(t,[{key:"ngOnInit",value:function(){this.basketItemsOriginal=this.basketItems.reduce((function(t,e){return t[e.candidate]=e,t}),{}),this.candidates=this.candidatesDelegator.getCandidatesByIds(Object.keys(this.basketItemsOriginal)),this.candidates.sort((function(t,e){return t.number-e.number})),this.basketItemsEdit=JSON.parse(JSON.stringify(this.basketItemsOriginal)),this.selectRemoveAction=this.selectItem}},{key:"trackByFn",value:function(t,e){return e?e._id:t}},{key:"selectItem",value:function(t){!this.taskConfig.isCandidateMultiBasket&&t.total>0?this.msgService.showToast(this.langProvider.CandidateAlreadyExistInBasket,2e3,"toastWarn"):this.taskConfig.maxTotalPerSingleEdit&&t.total-this.basketItemsOriginal[t.candidate].total>=this.taskConfig.maxTotalPerSingleEdit?this.msgService.showToast(this.langProvider.MaxTotalsPerSingleEditBasket,2e3,"toastWarn"):this.basket.maxCandidatesAllowed&&this.basketItems.filter((function(t){return t.total>0})).length>this.basket.maxCandidatesAllowed?this.msgService.showToast(this.langProvider.MaxCandidatesForBasket,2e3,"toastWarn"):(t.total++,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total)}},{key:"removeItem",value:function(t){t.total>0&&t.total--,this.dirtyItems[t.candidate]=t.total!==this.basketItemsOriginal[t.candidate].total}},{key:"changeAddMode",value:function(){this.mode="add",this.selectRemoveAction=this.selectItem}},{key:"changeRemoveMode",value:function(){this.mode="remove",this.selectRemoveAction=this.removeItem}},{key:"activate",value:function(){var t=this,e=Object.keys(this.dirtyItems).filter((function(e){return t.dirtyItems[e]})).map((function(e){return t.basketItemsEdit[e]}));this.modalCtrl.dismiss(e)}},{key:"back",value:function(t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Object.keys(this.dirtyItems).filter((function(t){return e.dirtyItems[t]})).length>0)){t.next=8;break}return t.next=3,this.msgService.showAreYouSure(this.langProvider.DataNotSaved);case 3:if(t.t0=t.sent,!t.t0){t.next=6;break}this.modalCtrl.dismiss();case 6:t.next=9;break;case 8:this.modalCtrl.dismiss();case 9:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||g)(l.Ib(u.Eb),l.Ib(b.b),l.Ib(f.a),l.Ib(h.a),l.Ib(u.Fb))},g.\u0275cmp=l.Cb({type:g,selectors:[["app-basketkeyboard"]],inputs:{basketItems:"basketItems",taskConfig:"taskConfig",basket:"basket"},decls:19,vars:5,consts:[["translucent","true"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"options"],[3,"color","click"],["name","add"],["name","remove"],[1,"container"],[1,"candiContainer"],["slot","start","class","candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click",4,"ngFor","ngForOf","ngForTrackBy"],["color","secondary",1,"activate",3,"click"],["name","checkmark"],["slot","start",1,"candi",3,"candidate","total","isSelected","isShowTotal","selectedStyle","click"]],template:function(t,e){1&t&&(l.Nb(0,"ion-header",0),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-title"),l.qc(3),l.Mb(),l.Nb(4,"ion-buttons",1),l.Nb(5,"ion-button",2),l.Vb("click",(function(t){return e.back(t)})),l.Jb(6,"ion-icon",3),l.Mb(),l.Mb(),l.Mb(),l.Nb(7,"ion-toolbar"),l.Nb(8,"div",4),l.Nb(9,"ion-fab-button",5),l.Vb("click",(function(){return e.changeAddMode()})),l.Jb(10,"ion-icon",6),l.Mb(),l.Nb(11,"ion-fab-button",5),l.Vb("click",(function(){return e.changeRemoveMode()})),l.Jb(12,"ion-icon",7),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(13,"ion-content"),l.Nb(14,"div",8),l.Nb(15,"div",9),l.oc(16,m,1,5,"app-candidate-avatar",10),l.Mb(),l.Nb(17,"ion-fab-button",11),l.Vb("click",(function(){return e.activate()})),l.Jb(18,"ion-icon",12),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.yb(3),l.sc(" ",e.basket.name," "),l.yb(6),l.dc("color","add"===e.mode?"primary":"light"),l.yb(2),l.dc("color","remove"===e.mode?"danger":"light"),l.yb(5),l.dc("ngForOf",e.candidates)("ngForTrackBy",e.trackByFn))},directives:[u.B,u.zb,u.xb,u.l,u.k,u.C,u.x,u.u,k.s,v.a],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.candiContainer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;overflow:scroll}.options[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:.5rem}.activate[_ngcontent-%COMP%]{margin:.5rem auto}"],changeDetection:0}),g),y=r("tyNb"),w=r("3LWr"),I=r("NrBX"),x=r("pQKU");function C(t,e){if(1&t&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-buttons",1),l.Jb(3,"ion-menu-button"),l.Mb(),l.Nb(4,"ion-buttons",2),l.Jb(5,"ion-back-button",3),l.Mb(),l.Nb(6,"ion-title"),l.qc(7),l.Mb(),l.Mb(),l.Mb()),2&t){var a=l.Xb();l.yb(7),l.rc(null==a.taskDesc?null:a.taskDesc.description)}}function S(t,e){if(1&t&&l.Jb(0,"app-candidate-avatar",12),2&t){var a=l.Xb().$implicit,n=l.Xb(3);l.dc("candidateId",a.candidate)("total",a.total)("isShowTotal",n.taskConfig.isCandidateMultiBasket)}}function O(t,e){if(1&t&&(l.Nb(0,"div"),l.oc(1,S,1,3,"app-candidate-avatar",11),l.Mb()),2&t){var a=e.$implicit;l.yb(1),l.dc("ngIf",a.total>0)}}function D(t,e){if(1&t){var a=l.Ob();l.Nb(0,"ion-chip",7),l.Vb("click",(function(){l.ic(a);var t=e.$implicit;return l.Xb(2).selectBasket(t)})),l.Nb(1,"ion-label",8),l.qc(2),l.Mb(),l.Nb(3,"div",9),l.oc(4,O,2,1,"div",10),l.Mb(),l.Mb()}if(2&t){var n=e.$implicit,i=l.Xb(2);l.nc("direction",i.taskDesc.langDir),l.Ab("selectedBasket",n.name===i.selectedBasket),l.yb(2),l.rc(n.name),l.yb(2),l.dc("ngForOf",i.taskSavedData.main.baskets[n.name].all)}}function M(t,e){if(1&t){var a=l.Ob();l.Nb(0,"ion-fab-button",18),l.Vb("click",(function(){return l.ic(a),l.Xb(3).saveAndNew()})),l.Jb(1,"ion-icon",19),l.Mb()}}function T(t,e){if(1&t){var a=l.Ob();l.Nb(0,"ion-fab",13),l.Nb(1,"div",14),l.Nb(2,"ion-fab-button",15),l.Vb("click",(function(){return l.ic(a),l.Xb(2).createComment()})),l.Jb(3,"ion-icon",16),l.Mb(),l.oc(4,M,2,0,"ion-fab-button",17),l.Mb(),l.Mb()}if(2&t){var n=l.Xb(2);l.yb(4),l.dc("ngIf",n.isSaveAndNew&&n.checkIfBasketsEmpty())}}function N(t,e){if(1&t&&(l.Nb(0,"ion-content"),l.Nb(1,"div",4),l.oc(2,D,5,6,"ion-chip",5),l.Mb(),l.oc(3,T,5,1,"ion-fab",6),l.Mb()),2&t){var a=l.Xb();l.yb(2),l.dc("ngForOf",a.taskConfig.baskets),l.yb(1),l.dc("ngIf",!a.integrated)}}var P,R=((P=function(){function e(t,n,i,r,s,o,c,l,u,b){a(this,e),this.router=t,this.route=n,this.store=i,this.modalCtrl=r,this.msgService=s,this.langProvider=o,this.popoverController=c,this.candidatesDelegator=l,this.taskDelegator=u,this.basketDelegator=b,this.previewSize=d.a.basketPreviewSize}return i(e,[{key:"ngOnInit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.initTask();case 2:if(this.taskSavedData=t.sent,t.t0=this.integrated,t.t0){t.next=8;break}return t.next=7,this.loadTask();case 7:this.taskSavedData=t.sent;case 8:this.isTaskInit=!0;case 9:case"end":return t.stop()}}),t,this)})))}},{key:"ionViewWillLeave",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.basketDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)){t.next=4;break}this.msgService.showToast(this.langProvider.TaskEmptyDismissed,d.a.taskSavedToastInterval),t.next=9;break;case 4:return t.next=6,this.saveTask();case 6:this.taskSavedData=t.sent,this.msgService.showToast(this.langProvider.TaskSaved,d.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date);case 9:case"end":return t.stop()}}),t,this)})))}},{key:"initTask",value:function(){var e,a,n;return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var r,s,o,d,l;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return r=null!==(n=null!==(a=null===(e=this.integrated)||void 0===e?void 0:e.parentTaskId)&&void 0!==a?a:this.route.snapshot.paramMap.get(c.a.TaskDescId))&&void 0!==n?n:"t13",i.next=3,this.candidatesDelegator.getCandidatesCopy(!0);case 3:return this.candidates=i.sent,i.next=6,this.taskDelegator.getTaskDesk(r);case 6:return this.taskDesc=i.sent,i.next=9,this.taskDelegator.getTasksConfig(r);case 9:this.taskConfig=i.sent,s={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,candidates:this.candidates.map((function(t){return t._id})),baskets:{}}},o=t(this.taskConfig.baskets);try{for(o.s();!(d=o.n()).done;)l=d.value,s.main.baskets[l.name]={name:l.name,size:0,maxCandidatesAllowed:l.maxCandidatesAllowed,preview:[],all:this.candidates.map((function(t){return{candidate:t._id,total:0}}))}}catch(u){o.e(u)}finally{o.f()}return i.abrupt("return",(this.isSaveAndNew=!this.taskConfig.maxItems||this.taskConfig.maxItems>1,s));case 14:case"end":return i.stop()}}),i,this)})))}},{key:"saveTask",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.basketDelegator.saveTask(this.taskSavedData,this.taskConfig);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})))}},{key:"saveTaskIntegrated",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return t.stop()}}),t)})))}},{key:"loadTask",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.route.snapshot.paramMap.get(c.a.SavedTaskId))){t.next=11;break}return this.isTaskUpdate=!0,t.next=5,this.basketDelegator.loadTask(e);case 5:return a=t.sent,t.next=8,this.candidatesDelegator.getCandidatesByIds(a.main.candidates);case 8:this.candidates=t.sent,this.setLoadedData(a),this.taskSavedData=a;case 11:return t.abrupt("return",this.taskSavedData);case 12:case"end":return t.stop()}}),t,this)})))}},{key:"saveAndNew",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.msgService.showAreYouSure(this.langProvider.TaskSaveAndNew);case 2:if(!t.sent){t.next=5;break}(e={})[c.a.TaskDescId]=this.taskDesc.id,this.router.navigate(["tabs/task-catalog",e],{replaceUrl:!0,skipLocationChange:!0});case 5:case"end":return t.stop()}}),t,this)})))}},{key:"setLoadedData",value:function(e){var a=this;for(var n in e.main.baskets)if(Object.prototype.hasOwnProperty.call(e.main.baskets,n)){var i,r=e.main.baskets[n],s=[],o=t(r.preview);try{var c=function(){var t=i.value,e=r.all.find((function(e){return e.candidate===t.candidate}));s.push(e)};for(o.s();!(i=o.n()).done;)c()}catch(d){o.e(d)}finally{o.f()}r.preview=s}this.taskConfig.isCandidatesStatic||function(){var n=new Set;for(var i in e.main.baskets)Object.prototype.hasOwnProperty.call(e.main.baskets,i)&&e.main.baskets[i].all.forEach((function(t){return n.add(t.candidate)}));var r,s=t(n);try{var o=function(){var t=r.value;a.candidates=a.candidates.filter((function(e){return e._id!==t}))};for(s.s();!(r=s.n()).done;)o()}catch(d){s.e(d)}finally{s.f()}}()}},{key:"loadTaskIntegrated",value:function(t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.taskSavedData=t,e.next=3,this.setLoadedData(t);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"selectBasket",value:function(t){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.selectedBasket=this.selectedBasket!==t.name?t.name:null,e.next=3,this.showCanidatesSelection(t);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"showCanidatesSelection",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var n,i,r,s,o,c;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=this.taskSavedData.main.baskets[e.name],a.next=3,this.modalCtrl.create({component:p,componentProps:{basketItems:n.all,taskConfig:this.taskConfig,basket:e}});case 3:return i=a.sent,a.next=6,i.present();case 6:return a.next=8,i.onWillDismiss();case 8:if((r=a.sent).data){n.preview=r.data,s=t(r.data);try{for(c=function(){var t=o.value,e=n.all.find((function(e){return e.candidate===t.candidate}));e&&(e.total=t.total)},s.s();!(o=s.n()).done;)c()}catch(d){s.e(d)}finally{s.f()}}case 10:case"end":return a.stop()}}),a,this)})))}},{key:"checkIfBasketsEmpty",value:function(){var t=this;return Object.keys(this.taskSavedData.main.baskets).some((function(e){var a;return(null===(a=t.taskSavedData.main.baskets[e].preview)||void 0===a?void 0:a.length)>0}))}},{key:"createComment",value:function(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:o.Guid.raw()}],{skipLocationChange:!0})}}]),e}()).\u0275fac=function(t){return new(t||P)(l.Ib(y.f),l.Ib(y.a),l.Ib(w.a),l.Ib(u.Eb),l.Ib(h.a),l.Ib(b.b),l.Ib(u.Jb),l.Ib(f.a),l.Ib(I.a),l.Ib(x.a))},P.\u0275cmp=l.Cb({type:P,selectors:[["app-baskets2"]],inputs:{integrated:"integrated"},decls:2,vars:2,consts:[[4,"ngIf"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],[1,"baskets"],["id","baskets","class","basket","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",3,"selectedBasket","direction","click",4,"ngFor","ngForOf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content",4,"ngIf"],["id","baskets","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",1,"basket",3,"click"],["color","secondary",1,"basketHeader"],[1,"basketItems",2,"direction","ltr"],[4,"ngFor","ngForOf"],["class","avatarBasket",3,"candidateId","total","isShowTotal",4,"ngIf"],[1,"avatarBasket",3,"candidateId","total","isShowTotal"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],[2,"display","flex"],["color","primary",3,"click"],["name","chatbox-ellipses"],["style","margin-left: 0.2rem;","color","tertiary",3,"click",4,"ngIf"],["color","tertiary",2,"margin-left","0.2rem",3,"click"],["name","bag-check"]],template:function(t,e){1&t&&(l.oc(0,C,8,1,"ion-header",0),l.oc(1,N,4,2,"ion-content",0)),2&t&&(l.dc("ngIf",!e.integrated),l.yb(1),l.dc("ngIf",e.isTaskInit))},directives:[k.t,u.B,u.zb,u.l,u.R,u.g,u.h,u.xb,u.u,k.s,u.s,u.N,v.a,u.w,u.x,u.C],styles:[".container[_ngcontent-%COMP%]{flex-direction:column;width:100%}.baskets[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;height:100%}.baskets[_ngcontent-%COMP%]{align-content:flex-start;overflow:scroll}.basket[_ngcontent-%COMP%], .baskets[_ngcontent-%COMP%]{flex-direction:column;flex:1}.basket[_ngcontent-%COMP%]{min-height:8rem;display:flex}.basketItems[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:100%;flex-wrap:wrap;overflow:scroll}.avatarBasket[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:.5rem}"]}),P)}}])}();