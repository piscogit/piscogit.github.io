(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"43kj":function(t,a,e){"use strict";e.d(a,"a",(function(){return X}));var i=e("mrSG"),s=e("Mxx3"),n=e("AytR"),d=e("kLqA"),o=e("fXoL"),r=e("tyNb"),c=e("3LWr"),l=e("zrcv"),k=e("L5fO"),b=e("TEn/"),h=e("ufmx"),p=e("NrBX"),v=e("pQKU"),m=e("ofXK"),u=e("5+WD"),g=e("g1yl");function f(t,a){if(1&t&&(o.Nb(0,"ion-header"),o.Nb(1,"ion-toolbar"),o.Nb(2,"ion-buttons",6),o.Jb(3,"ion-menu-button"),o.Mb(),o.Nb(4,"ion-buttons",7),o.Jb(5,"ion-back-button",8),o.Mb(),o.Nb(6,"ion-title"),o.pc(7),o.Mb(),o.Mb(),o.Mb()),2&t){const t=o.Xb();o.yb(7),o.qc(null==t.taskDesc?null:t.taskDesc.description)}}function D(t,a){if(1&t&&o.Jb(0,"app-candidate-avatar",13),2&t){const t=o.Xb().$implicit;o.dc("candidate",t)}}function C(t,a){if(1&t&&o.Jb(0,"app-candidate-avatar",13),2&t){const t=o.Xb().$implicit;o.dc("candidate",t)}}function y(t,a){if(1&t){const t=o.Ob();o.Nb(0,"ion-item",9),o.Vb("click",(function(){o.ic(t);const e=a.$implicit;return o.Xb().selectCandidate(e)})),o.Jb(1,"app-candidate-avatar",10),o.nc(2,D,1,1,"app-candidate-avatar",11),o.nc(3,C,1,1,"app-candidate-avatar",12),o.Mb()}if(2&t){const t=a.$implicit,e=o.Xb();o.dc("cdkDragStartDelay",e.dragDelay),o.yb(1),o.dc("candidate",t)}}function M(t,a){if(1&t&&o.Jb(0,"app-candidate-avatar",27),2&t){const t=o.Xb().$implicit;o.dc("candidate",t.candidate)}}function B(t,a){if(1&t&&o.Jb(0,"app-candidate-avatar",27),2&t){const t=o.Xb().$implicit;o.dc("candidate",t.candidate)}}function w(t,a){if(1&t&&(o.Nb(0,"div",23),o.Jb(1,"app-candidate-avatar",24),o.nc(2,M,1,1,"app-candidate-avatar",25),o.nc(3,B,1,1,"app-candidate-avatar",26),o.Mb()),2&t){const t=a.$implicit,e=o.Xb(4);o.dc("cdkDragStartDelay",e.dragDelay),o.yb(1),o.dc("candidate",t.candidate)("total",t.total)("isShowTotal",e.taskConfig.isCandidateMultiBasket)}}function S(t,a){if(1&t){const t=o.Ob();o.Nb(0,"div",28),o.Vb("click",(function(){o.ic(t);const a=o.Xb().$implicit;return o.Xb(3).showBasketDetails(a)})),o.Jb(1,"ion-icon",29),o.Nb(2,"ion-badge",30),o.pc(3),o.Mb(),o.Mb()}if(2&t){const t=o.Xb().$implicit,a=o.Xb(3);o.yb(3),o.rc("+",a.taskSavedData.main.baskets[t.name].size-a.previewSize,"")}}function O(t,a){if(1&t){const t=o.Ob();o.Nb(0,"ion-chip",18),o.Vb("click",(function(){o.ic(t);const e=a.$implicit;return o.Xb(3).selectBasket(e.name)}))("cdkDropListDropped",(function(e){o.ic(t);const i=a.$implicit;return o.Xb(3).dropBasket(e,i)})),o.Nb(1,"ion-label",19),o.pc(2),o.Mb(),o.Nb(3,"div",20),o.nc(4,w,4,4,"div",21),o.nc(5,S,4,1,"div",22),o.Mb(),o.Mb()}if(2&t){const t=a.$implicit,e=o.Xb(3);o.mc("direction",e.taskDesc.langDir),o.Ab("selectedBasket",t.name===e.selectedBasket),o.dc("cdkDropListData",e.taskSavedData.main.baskets[t.name].preview),o.yb(2),o.qc(t.name),o.yb(2),o.dc("ngForOf",e.taskSavedData.main.baskets[t.name].preview),o.yb(1),o.dc("ngIf",e.taskSavedData.main.baskets[t.name].size>e.previewSize)}}function I(t,a){if(1&t&&(o.Lb(0),o.nc(1,O,6,8,"ion-chip",17),o.Kb()),2&t){const t=o.Xb(2);o.yb(1),o.dc("ngForOf",t.taskConfig.baskets)}}function N(t,a){if(1&t&&o.Jb(0,"app-candidate-avatar",27),2&t){const t=o.Xb().$implicit;o.dc("candidate",t.candidate)}}function P(t,a){if(1&t&&o.Jb(0,"app-candidate-avatar",27),2&t){const t=o.Xb().$implicit;o.dc("candidate",t.candidate)}}const T=function(t){return[t]};function _(t,a){if(1&t){const t=o.Ob();o.Nb(0,"div",38),o.Vb("cdkDropListDropped",(function(a){return o.ic(t),o.Xb(3).dropBasketDetails(a)})),o.Nb(1,"div",39),o.Jb(2,"app-candidate-avatar",24),o.nc(3,N,1,1,"app-candidate-avatar",26),o.nc(4,P,1,1,"app-candidate-avatar",25),o.Mb(),o.Mb()}if(2&t){const t=a.$implicit,e=o.Xb(3);o.dc("id",e.basketDetails.name)("cdkDropListData",o.fc(6,T,t)),o.yb(1),o.dc("cdkDragStartDelay",e.dragDelay),o.yb(1),o.dc("candidate",t.candidate)("total",t.total)("isShowTotal",e.taskConfig.isCandidateMultiBasket)}}function x(t,a){if(1&t){const t=o.Ob();o.Lb(0),o.Nb(1,"ion-chip",31),o.Vb("click",(function(){o.ic(t);const a=o.Xb(2);return a.selectBasket(a.basketDetails.name)})),o.Nb(2,"div",32),o.Nb(3,"ion-button",33),o.Vb("click",(function(){return o.ic(t),o.Xb(2).changeToBasketMode()})),o.Jb(4,"ion-icon",34),o.Mb(),o.Nb(5,"ion-label",35),o.pc(6),o.Mb(),o.Mb(),o.Nb(7,"div",36),o.nc(8,_,5,8,"div",37),o.Mb(),o.Mb(),o.Kb()}if(2&t){const t=o.Xb(2);o.yb(1),o.mc("direction",t.taskDesc.langDir),o.Ab("selectedBasket",t.basketDetails.name===t.selectedBasket),o.yb(5),o.qc(t.basketDetails.name),o.yb(2),o.dc("ngForOf",t.taskSavedData.main.baskets[t.basketDetails.name].all)}}function L(t,a){if(1&t&&(o.Nb(0,"div",14),o.Lb(1,15),o.nc(2,I,2,1,"ng-container",16),o.nc(3,x,9,6,"ng-container",16),o.Kb(),o.Mb()),2&t){const t=o.Xb();o.yb(1),o.dc("ngSwitch",t.basketsMode),o.yb(1),o.dc("ngSwitchCase","AllBaskets"),o.yb(1),o.dc("ngSwitchCase","DetailedBasket")}}function F(t,a){if(1&t){const t=o.Ob();o.Nb(0,"ion-fab",40),o.Nb(1,"ion-fab-button",41),o.Vb("click",(function(){return o.ic(t),o.Xb().createComment()})),o.Jb(2,"ion-icon",42),o.Mb(),o.Mb()}}let X=(()=>{class t{constructor(t,a,e,i,n,d,o,r,c){this.router=t,this.route=a,this.store=e,this.msgService=i,this.langProvider=n,this.popoverController=d,this.candidatesDelegator=o,this.taskDelegator=r,this.basketDelegator=c,this.dragDelay=s.a.DragDelay,this.previewSize=4,this.basketsMode="AllBaskets"}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=yield this.initTask(),this.integrated||(this.taskSavedData=yield this.loadTask()),this.isTaskInit=!0}))}ionViewWillLeave(){return Object(i.a)(this,void 0,void 0,(function*(){this.basketDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)?this.msgService.showToast(this.langProvider.TaskEmptyDismissed,n.a.taskSavedToastInterval):(this.taskSavedData=yield this.saveTask(),this.msgService.showToast(this.langProvider.TaskSaved,n.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date))}))}initTask(){var t,a,e;return Object(i.a)(this,void 0,void 0,(function*(){let i;i=null!==(e=null!==(a=null===(t=this.integrated)||void 0===t?void 0:t.parentTaskId)&&void 0!==a?a:this.route.snapshot.paramMap.get(s.a.TaskDescId))&&void 0!==e?e:"t13",this.candidates=yield this.candidatesDelegator.getCandidatesCopy(),this.taskDesc=yield this.taskDelegator.getTaskDesk(i),this.taskConfig=yield this.taskDelegator.getTasksConfig(i);const n={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description,baskets:{}}};for(const t of this.taskConfig.baskets)n.main.baskets[t.name]={name:t.name,size:0,preview:[],all:[]};return this.taskConfig.isCandidatesStatic?(this.dropCandidates=this.dropCandidatesStatic,this.handleCandidateAfterBasketDrop=this.handleCandidateStaticAfterBasketDrop):(this.taskConfig.isCandidateMultiBasket=!1,this.dropCandidates=this.dropCandidatesNoneStatic,this.handleCandidateAfterBasketDrop=this.handleCandidateNoneStaticAfterBasketDrop),this.taskConfig.isCandidateMultiBasket?(this.dropBasket=this.dropBasketMulti,this.dropBasketDetails=this.dropBasketDetailsMulti,this.removeCandidateFromBasket=this.removeCandidateFromBasketMulti,this.removeCandidateFromBasketDetails=this.removeCandidateFromBasketDetailsMulti,this.pushCandidateToBasket=this.pushCandidateToBasketMulti):(this.dropBasket=this.dropBasketNoneMulti,this.dropBasketDetails=this.dropBasketDetailsNoneMulti,this.removeCandidateFromBasket=this.removeCandidateFromBasketNoneMulti,this.removeCandidateFromBasketDetails=this.removeCandidateFromBasketDetailsNoneMulti,this.pushCandidateToBasket=this.pushCandidateToBasketNoneMulti),n}))}saveTask(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.basketDelegator.saveTask(this.taskSavedData,this.taskConfig)}))}saveTaskIntegrated(){return Object(i.a)(this,void 0,void 0,(function*(){throw new Error("Method not implemented.")}))}loadTask(){return Object(i.a)(this,void 0,void 0,(function*(){const t=this.route.snapshot.paramMap.get(s.a.SavedTaskId);if(t){const a=yield this.basketDelegator.loadTask(t);this.setLoadedData(a),this.taskSavedData=a}return this.taskSavedData}))}setLoadedData(t){for(const a in t.main.baskets)if(Object.prototype.hasOwnProperty.call(t.main.baskets,a)){const e=t.main.baskets[a],i=[];for(const t of e.preview){const a=e.all.find(a=>a.candidate._id===t.candidate._id);i.push(a)}e.preview=i}if(!this.taskConfig.isCandidatesStatic){const a=new Set;for(const e in t.main.baskets)Object.prototype.hasOwnProperty.call(t.main.baskets,e)&&t.main.baskets[e].all.forEach(t=>a.add(t.candidate._id));for(const t of a)this.candidates=this.candidates.filter(a=>a._id!==t)}}loadTaskIntegrated(t){return Object(i.a)(this,void 0,void 0,(function*(){this.taskSavedData=t,yield this.setLoadedData(t)}))}handleCandidateStaticAfterBasketDrop(t){}handleCandidateNoneStaticAfterBasketDrop(t){this.candidates=this.candidates.filter(a=>a._id!==t._id)}dropCandidatesStatic(t){if("candidates"!==t.previousContainer.id)if("baskets"===t.previousContainer.id)this.removeCandidateFromBasket(t.previousContainer.data,t.previousIndex);else{const a=this.taskSavedData.main.baskets[t.previousContainer.id].all,e=t.previousContainer.data[t.previousIndex],i=a.findIndex(t=>t.candidate===e.candidate);this.removeCandidateFromBasketDetails(a,i,t.previousContainer.id)}}dropCandidatesNoneStatic(t){if("candidates"!==t.previousContainer.id){if("baskets"===t.previousContainer.id)this.candidates.push(t.previousContainer.data[0].candidate),this.candidates.sort((t,a)=>t.number-a.number),this.removeCandidateFromBasket(t.previousContainer.data,t.previousIndex);else{this.candidates.push(t.previousContainer.data[0].candidate),this.candidates.sort((t,a)=>t.number-a.number);const a=this.taskSavedData.main.baskets[t.previousContainer.id].all,e=t.previousContainer.data[t.previousIndex],i=a.findIndex(t=>t.candidate===e.candidate);this.removeCandidateFromBasketDetails(a,i,t.previousContainer.id)}console.log()}}dropBasketNoneMulti(t,a){if(this.selectedBasket=this.selectedBasket===a.name?a.name:null,t.previousContainer===t.container);else{const e=t.previousContainer.data[t.previousIndex];if("candidates"===t.previousContainer.id){const t=e;this.checkIfCandidateExistInOtherBaskets(a,t)?this.msgService.showToast(this.langProvider.CandidateAlreadyExistInBasket,null,s.b.ToastWarn):(this.pushCandidateToBasketNoneMulti(a.name,t),this.handleCandidateAfterBasketDrop(t))}else this.removeCandidateFromBasketNoneMulti(t.previousContainer.data,t.previousIndex),this.pushCandidateToBasketNoneMulti(a.name,e.candidate)}}dropBasketMulti(t,a){if(this.selectedBasket=this.selectedBasket===a.name?a.name:null,t.previousContainer===t.container);else{const e=t.previousContainer.data[t.previousIndex];"candidates"===t.previousContainer.id?(this.pushCandidateToBasketMulti(a.name,e),this.handleCandidateAfterBasketDrop(e)):(this.removeCandidateFromBasketMulti(t.previousContainer.data,t.previousIndex),this.pushCandidateToBasketMulti(a.name,e.candidate))}}dropBasketDetailsNoneMulti(t){if(t.previousContainer===t.container);else{const a=this.candidates[t.previousIndex],e=this.taskSavedData.main.baskets[t.container.id],i=this.checkIfCandidateExistInOtherBaskets(e,a);i?this.msgService.showToast("already exist in "+i):(this.pushCandidateToBasketNoneMulti(e.name,a),this.handleCandidateAfterBasketDrop(a))}}dropBasketDetailsMulti(t){t.previousContainer===t.container||this.pushCandidateToBasketMulti(this.taskSavedData.main.baskets[t.container.id].name,this.candidates[t.previousIndex])}pushCandidateToBasketNoneMulti(t,a){let e=this.taskSavedData.main.baskets[t].all.find(t=>t.candidate._id===a._id);e?this.msgService.showToast(this.langProvider.CandidateAlreadyExistInBasket,null,s.b.ToastWarn):(e={candidate:a,total:1},this.taskSavedData.main.baskets[t].all.push(e),this.taskSavedData.main.baskets[t].preview.push(e),this.calcBasketPreview(t),this.handleCandidateAfterBasketDrop(a))}pushCandidateToBasketMulti(t,a){let e=this.taskSavedData.main.baskets[t].all.find(t=>t.candidate._id===a._id);if(e){e.total++;const i=this.taskSavedData.main.baskets[t].all.findIndex(t=>t.candidate._id===a._id);i!==this.taskSavedData.main.baskets[t].all.length-1&&(this.taskSavedData.main.baskets[t].all.splice(i,1),this.taskSavedData.main.baskets[t].all.push(e),this.taskSavedData.main.baskets[t].preview.push(e),this.calcBasketPreview(t))}else e={candidate:a,total:1},this.taskSavedData.main.baskets[t].all.push(e),this.taskSavedData.main.baskets[t].preview.push(e),this.calcBasketPreview(t)}calcBasketPreview(t){this.taskSavedData.main.baskets[t].preview=this.taskSavedData.main.baskets[t].all.slice(Math.max(0,this.taskSavedData.main.baskets[t].all.length-this.previewSize),this.taskSavedData.main.baskets[t].all.length),this.taskSavedData.main.baskets[t].size=this.taskSavedData.main.baskets[t].all.length}findBasket(t){return Object.keys(this.taskSavedData.main.baskets).find(a=>this.taskSavedData.main.baskets[a].preview===t)}checkIfCandidateExistInOtherBaskets(t,a){let e=null;for(const i in this.taskSavedData.main.baskets)if(Object.prototype.hasOwnProperty.call(this.taskSavedData.main.baskets,i)){const s=this.taskSavedData.main.baskets[i];if(s.name!==t.name&&s.all.find(t=>t.candidate._id===a._id)){e=s.name;break}}return e}removeCandidateFromBasketNoneMulti(t,a,e){e=null!=e?e:this.findBasket(t);const i=this.taskSavedData.main.baskets[e].preview[a];this.taskSavedData.main.baskets[e].preview.splice(a,1);const s=this.taskSavedData.main.baskets[e].all.indexOf(i);this.taskSavedData.main.baskets[e].all.splice(s,1),this.calcBasketPreview(e)}removeCandidateFromBasketMulti(t,a,e){e=null!=e?e:this.findBasket(t);const i=this.taskSavedData.main.baskets[e].preview[a];if(i.total>1)i.total--;else{this.taskSavedData.main.baskets[e].preview.splice(a,1);const t=this.taskSavedData.main.baskets[e].all.indexOf(i);this.taskSavedData.main.baskets[e].all.splice(t,1),this.calcBasketPreview(e)}}removeCandidateFromBasketDetailsNoneMulti(t,a,e){e=null!=e?e:this.findBasket(t);const i=this.taskSavedData.main.baskets[e].all[a];this.taskSavedData.main.baskets[e].all.splice(a,1);const s=this.taskSavedData.main.baskets[e].preview.indexOf(i);this.taskSavedData.main.baskets[e].preview.splice(s,1),this.calcBasketPreview(e)}removeCandidateFromBasketDetailsMulti(t,a,e){e=null!=e?e:this.findBasket(t);const i=this.taskSavedData.main.baskets[e].all[a];if(i.total>1)i.total--;else{this.taskSavedData.main.baskets[e].all.splice(a,1);const t=this.taskSavedData.main.baskets[e].preview.indexOf(i);this.taskSavedData.main.baskets[e].preview.splice(t,1),this.calcBasketPreview(e)}}changeToBasketMode(){this.basketsMode="AllBaskets"}showBasketDetails(t){this.basketsMode="DetailedBasket",this.basketDetails=t}selectBasket(t){this.selectedBasket=this.selectedBasket!==t?t:null}selectCandidate(t){this.selectedBasket&&this.pushCandidateToBasket(this.selectedBasket,t)}openBasketPopup(t){return Object(i.a)(this,void 0,void 0,(function*(){}))}createComment(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:d.Guid.raw()}],{skipLocationChange:!0})}}return t.\u0275fac=function(a){return new(a||t)(o.Ib(r.f),o.Ib(r.a),o.Ib(c.a),o.Ib(l.a),o.Ib(k.b),o.Ib(b.gb),o.Ib(h.a),o.Ib(p.a),o.Ib(v.a))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-baskets"]],inputs:{integrated:"integrated"},decls:7,vars:5,consts:[[4,"ngIf"],["cdkDropListGroup","",1,"container"],["lines","none","id","candidates","cdkDropList","","cdkDropListSortingDisabled","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["cdkDrag","",3,"cdkDragStartDelay","click",4,"ngFor","ngForOf"],["class","baskets",4,"ngIf"],["horizontal","end","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content",4,"ngIf"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],["cdkDrag","",3,"cdkDragStartDelay","click"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],[1,"avatar",3,"candidate"],[1,"baskets"],[3,"ngSwitch"],[4,"ngSwitchCase"],["id","baskets","class","basket","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",3,"selectedBasket","cdkDropListData","direction","click","cdkDropListDropped",4,"ngFor","ngForOf"],["id","baskets","cdkDropList","","cdkDropListOrientation","horizontal","cdkDropListSortingDisabled","",1,"basket",3,"cdkDropListData","click","cdkDropListDropped"],["color","secondary",1,"basketHeader"],[1,"basketItems",2,"direction","ltr"],["class","avatarBasketContainer","cdkDrag","",3,"cdkDragStartDelay",4,"ngFor","ngForOf"],["class","allBasketContainer",3,"click",4,"ngIf"],["cdkDrag","",1,"avatarBasketContainer",3,"cdkDragStartDelay"],[1,"avatarBasket",3,"candidate","total","isShowTotal"],["class","avatarBasket",3,"candidate",4,"cdkDragPlaceholder"],["class","avatarBasket",3,"candidate",4,"cdkDragPreview"],[1,"avatarBasket",3,"candidate"],[1,"allBasketContainer",3,"click"],["name","people",1,"avatarBasket"],["slot","end","color","primary",1,"allBadge"],[1,"basketDetails",3,"click"],[1,"basketHeader"],["color","light",1,"basketHeaderBtn",3,"click"],["slot","start","name","arrow-back"],["color","secondary"],[1,"basketDetailItems",2,"direction","ltr"],["class","avatarBasketDetailsContainer","cdkDropList","","cdkDropListSortingDisabled","",3,"id","cdkDropListData","cdkDropListDropped",4,"ngFor","ngForOf"],["cdkDropList","","cdkDropListSortingDisabled","",1,"avatarBasketDetailsContainer",3,"id","cdkDropListData","cdkDropListDropped"],["cdkDrag","",3,"cdkDragStartDelay"],["horizontal","end","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],["color","primary",3,"click"],["name","chatbox-ellipses"]],template:function(t,a){1&t&&(o.nc(0,f,8,1,"ion-header",0),o.Nb(1,"ion-content"),o.Nb(2,"div",1),o.Nb(3,"ion-list",2),o.Vb("cdkDropListDropped",(function(t){return a.dropCandidates(t)})),o.nc(4,y,4,2,"ion-item",3),o.Mb(),o.nc(5,L,4,3,"div",4),o.Mb(),o.nc(6,F,3,0,"ion-fab",5),o.Mb()),2&t&&(o.dc("ngIf",!a.integrated),o.yb(3),o.dc("cdkDropListData",a.candidates),o.yb(1),o.dc("ngForOf",a.candidates),o.yb(1),o.dc("ngIf",a.isTaskInit),o.yb(1),o.dc("ngIf",!a.integrated))},directives:[m.m,b.n,u.e,b.C,u.d,m.l,b.r,b.Y,b.k,b.E,b.g,b.h,b.W,b.v,u.a,g.a,u.c,u.b,m.n,m.o,b.l,b.B,b.s,b.i,b.j,b.o,b.p],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%}.candi[_ngcontent-%COMP%]{height:2rem;width:2rem}.candidates[_ngcontent-%COMP%]{height:100%;overflow:scroll;min-width:var(--avatar-empty-width)}.baskets[_ngcontent-%COMP%]{align-content:flex-start;height:100%;overflow:scroll}.basket[_ngcontent-%COMP%], .baskets[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1}.basket[_ngcontent-%COMP%]{min-height:6rem}.selectedBasket[_ngcontent-%COMP%]{background-color:rgba(157,186,250,.541)}.basketHeader[_ngcontent-%COMP%]{display:flex;width:100%;margin-bottom:1rem;align-self:flex-start;align-items:center;font-size:1.2rem}.basketHeaderBtn[_ngcontent-%COMP%]{margin-right:auto}.basketItems[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:100%;flex-wrap:nowrap}.basketDetails[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.basketDetailItems[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;height:100%}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.avatarBasket[_ngcontent-%COMP%]{height:2rem;width:2rem}.avatarBasketContainer[_ngcontent-%COMP%]{margin-right:.7rem}.avatarBasketDetailsContainer[_ngcontent-%COMP%]{margin-right:1.2rem;margin-bottom:1.2rem}.item-native[_ngcontent-%COMP%]{background:none}.allBasketContainer[_ngcontent-%COMP%]{margin-left:1rem;margin-top:.5rem}.allBadge[_ngcontent-%COMP%]{position:relative;top:-1rem;left:-.4rem;border-radius:100%;margin:0}"]}),t})()},bFAM:function(t,a,e){"use strict";e.r(a),e.d(a,"BasketsPageModule",(function(){return h}));var i=e("ofXK"),s=e("3Pt+"),n=e("TEn/"),d=e("tyNb"),o=e("43kj"),r=e("fXoL");const c=[{path:"",component:o.a}];let l=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(a){return new(a||t)},imports:[[d.h.forChild(c)],d.h]}),t})();var k=e("5+WD"),b=e("ajeZ");let h=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(a){return new(a||t)},imports:[[i.c,s.a,n.ab,l,k.f,b.a]]}),t})()},pQKU:function(t,a,e){"use strict";e.d(a,"a",(function(){return M}));var i=e("mrSG"),s=e("kMc0"),n=e("fXoL"),d=e("L5fO"),o=e("ofXK"),r=e("TEn/");function c(t,a){if(1&t&&(n.Lb(0),n.Nb(1,"span",8),n.pc(2),n.Mb(),n.Nb(3,"span",4),n.pc(4),n.Mb(),n.Nb(5,"span",5),n.pc(6),n.Mb(),n.Nb(7,"span",6),n.pc(8),n.Mb(),n.Kb()),2&t){const t=n.Xb().$implicit;n.yb(2),n.qc(t.key),n.yb(2),n.qc(t.value.value),n.yb(2),n.qc(t.value.avg),n.yb(2),n.qc(t.value.max)}}function l(t,a){if(1&t&&(n.Lb(0),n.nc(1,c,9,4,"ng-container",0),n.Kb()),2&t){const t=a.$implicit;n.yb(1),n.dc("ngIf",t.value.avg>0)}}function k(t,a){if(1&t&&(n.Lb(0),n.Nb(1,"ion-item"),n.Nb(2,"ion-label"),n.Nb(3,"div",1),n.Nb(4,"span"),n.pc(5),n.Mb(),n.Mb(),n.Nb(6,"div",2),n.Nb(7,"span",3),n.pc(8),n.Mb(),n.Nb(9,"span",4),n.pc(10),n.Mb(),n.Nb(11,"span",5),n.pc(12),n.Mb(),n.Nb(13,"span",6),n.pc(14),n.Mb(),n.nc(15,l,2,1,"ng-container",7),n.Yb(16,"keyvalue"),n.Mb(),n.Mb(),n.Mb(),n.Kb()),2&t){const t=n.Xb();n.yb(1),n.mc("direction",t.langProvider.LangDirection),n.yb(4),n.qc(t.taskName),n.yb(3),n.rc("",t.langProvider.Tags,":"),n.yb(2),n.qc(t.langProvider.BasketValue),n.yb(2),n.qc(t.langProvider.BasketAvg),n.yb(2),n.qc(t.langProvider.BasketMax),n.yb(1),n.dc("ngForOf",n.Zb(16,8,t.basketsAggData.basketsTotals))}}let b=(()=>{class t{constructor(t,a){this.langProvider=t,this.basketDelegator=a}ngOnInit(){this.calcHistory()}calcHistory(){return Object(i.a)(this,void 0,void 0,(function*(){const t=new s.a;t.start(),this.taskName=this.tasks[0].name,this.basketsAggData=this.basketDelegator.calcCandidateAggData(this.candidate,this.candidates,this.tasks);const a=t.stop();console.log(`BasketsCandidateHistoryAgg ${this.candidate._id} time: ${a}`),this.isInit=!0}))}}return t.\u0275fac=function(a){return new(a||t)(n.Ib(d.b),n.Ib(M))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-baskets-candidate-history-agg"]],inputs:{tasks:"tasks",candidate:"candidate",candidates:"candidates"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[1,"baskets"],[1,"col1","basketsHeader"],[1,"col2"],[1,"col3"],[1,"col4"],[4,"ngFor","ngForOf"],[1,"col1"]],template:function(t,a){1&t&&n.nc(0,k,17,10,"ng-container",0),2&t&&n.dc("ngIf",a.isInit)},directives:[o.m,r.v,r.B,o.l],pipes:[o.g],styles:[".header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;color:var(--ion-color-medium)}.baskets[_ngcontent-%COMP%]{display:grid;margin-top:.2rem}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),t})();function h(t,a){if(1&t&&(n.Nb(0,"span"),n.pc(1),n.Mb()),2&t){const t=n.Xb().$implicit,a=n.Xb(3);n.yb(1),n.sc(" ",a.langProvider.Total," : ",t.value.total," ")}}function p(t,a){if(1&t&&(n.Nb(0,"div"),n.Nb(1,"span"),n.pc(2),n.Mb(),n.nc(3,h,2,2,"span",0),n.Mb()),2&t){const t=a.$implicit;n.yb(2),n.qc(t.key),n.yb(1),n.dc("ngIf",t.value.total>1)}}function v(t,a){if(1&t&&(n.Lb(0,4),n.Nb(1,"span",5),n.pc(2),n.Mb(),n.nc(3,p,4,2,"div",6),n.Yb(4,"keyvalue"),n.Kb()),2&t){const t=n.Xb(2);n.yb(2),n.rc("",t.langProvider.Tags,":"),n.yb(1),n.dc("ngForOf",n.Zb(4,2,t.item.basketItems))}}function m(t,a){if(1&t&&(n.Lb(0),n.Nb(1,"span"),n.pc(2),n.Mb(),n.Kb()),2&t){const t=n.Xb(2);n.yb(2),n.qc(t.langProvider.NoActivity)}}function u(t,a){if(1&t&&(n.Lb(0),n.Nb(1,"ion-item"),n.Nb(2,"ion-label"),n.Nb(3,"div",1),n.Nb(4,"span"),n.pc(5),n.Mb(),n.Nb(6,"span",2),n.pc(7),n.Yb(8,"date"),n.Mb(),n.Mb(),n.nc(9,v,5,4,"ng-container",3),n.nc(10,m,3,1,"ng-container",0),n.Mb(),n.Mb(),n.Kb()),2&t){const t=n.Xb();n.yb(1),n.mc("direction",t.langProvider.LangDirection),n.yb(4),n.qc(t.task.name),n.yb(2),n.qc(n.ac(8,6,t.item.date,"dd/MM/yy HH:mm:ss")),n.yb(2),n.dc("ngIf",t.item.basketItems),n.yb(1),n.dc("ngIf",!t.item.basketItems)}}let g=(()=>{class t{constructor(t,a){this.taskDelegator=t,this.langProvider=a}ngOnInit(){this.calcHistory()}calcHistory(){const t=this.taskDelegator.GetBasketsForCandidate(this.candidate._id,this.task),a=Object.keys(t).length>0;this.item={date:new Date(this.task.date),basketItems:a?t:null},this.isInit=!0}}return t.\u0275fac=function(a){return new(a||t)(n.Ib(M),n.Ib(d.b))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-baskets-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],["style","white-space: normal;",4,"ngIf"],[2,"white-space","normal"],[1,"basketsHeader"],[4,"ngFor","ngForOf"]],template:function(t,a){1&t&&n.nc(0,u,11,9,"ng-container",0),2&t&&n.dc("ngIf",a.isInit)},directives:[o.m,r.v,r.B,o.l],pipes:[o.e,o.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.header[_ngcontent-%COMP%], .order[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.basketsHeader[_ngcontent-%COMP%]{font-style:italic;font-weight:700}"]}),t})(),f=(()=>{class t{constructor(t){this.langProvider=t}ngOnInit(){this.calcHistory()}calcHistory(){const t=new Set(this.task.coverage);this.totalCandidates=this.candidates.length,this.candidatesInBaskets=this.candidates.filter(t=>"NotActive"!==t.status).filter(a=>t.has(a._id)).length;const a=this.candidatesInBaskets/this.totalCandidates;this.completedStatus=1===a?"full":a>=.5?"half":"none"}}return t.\u0275fac=function(a){return new(a||t)(n.Ib(d.b))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-baskets-history"]],inputs:{task:"task",candidates:"candidates"},decls:5,vars:11,consts:[[1,"container"]],template:function(t,a){1&t&&(n.Nb(0,"div",0),n.Nb(1,"span"),n.pc(2),n.Mb(),n.Nb(3,"span"),n.pc(4),n.Mb(),n.Mb()),2&t&&(n.mc("direction",a.langProvider.LangDirection),n.Ab("completed","full"===a.completedStatus)("halfCompleted","half"===a.completedStatus)("notCompleted","none"===a.completedStatus),n.yb(2),n.qc(a.langProvider.TotalCanidatesInBaskets),n.yb(2),n.sc("",a.totalCandidates," / ",a.candidatesInBaskets,""))},styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.halfCompleted[_ngcontent-%COMP%]{color:orange}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),t})();var D=e("bFAM"),C=e("h7jJ"),y=e("nbnm");let M=(()=>{class t{constructor(t,a,e){this.dataProvider=t,this.entityNamer=a,this.langProvider=e}getComponent(){return D.BasketsPageModule}getHistoryComponent(){return f}getCandidateHistoryComponent(){return g}getCandidateAggregateComponent(){return b}getTaskName(){throw new Error("Method not implemented.")}getTaskConfig(t){throw new Error("Method not implemented.")}saveTask(t,a){var e,s;return Object(i.a)(this,void 0,void 0,(function*(){const a=[];return t.main._id=null!==(e=t.main._id)&&void 0!==e?e:this.entityNamer.taskPrefixWithUniqueIdAnd(t.main.type,t.main.taskId),t.main._rev=t.main._rev,t.main.date=null!==(s=t.main.date)&&void 0!==s?s:new Date,t.main.updateDate=new Date,t.main.coverage=this.CalcCoverage(t),a.push(t.main),yield this.dataProvider.saveEntities(a),t}))}loadTask(t){return Object(i.a)(this,void 0,void 0,(function*(){return{main:yield this.dataProvider.loadTask(t)}}))}deleteTask(t){return Object(i.a)(this,void 0,void 0,(function*(){const a=[t];yield this.dataProvider.deleteEntities(a)}))}getTaskHistory(){throw new Error("Method not implemented.")}getTasksForCandidates(t){throw new Error("Method not implemented.")}CalcCoverage(t){const a=new Set;for(const e in t.main.baskets)Object.prototype.hasOwnProperty.call(t.main.baskets,e)&&t.main.baskets[e].all.forEach(t=>a.add(t.candidate._id));return Array.from(a)}GetBasketsForCandidate(t,a){const e={};for(const i in a.baskets)if(a.baskets[i]){const s=a.baskets[i].all.find(a=>a.candidate._id===t);s&&(e[i]=s)}return e}checkTaskEmpty(t,a){return!(t.main._id||Object.keys(t.main.baskets).some(a=>{var e,i;return(null===(i=null===(e=t.main.baskets[a])||void 0===e?void 0:e.all)||void 0===i?void 0:i.length)>0}))}calcCandidateAggData(t,a,e){var i,s;const n={},d={},o=new Set;for(const r of e)for(const t in r.baskets)if(Object.prototype.hasOwnProperty.call(r.baskets,t)){const e=r.baskets[t];o.add(t);for(const n of a){d[n._id]=null!==(i=d[n._id])&&void 0!==i?i:{},d[n._id][t]=null!==(s=d[n._id][t])&&void 0!==s?s:0;const a=e.all.find(t=>t.candidate._id===n._id);a&&(d[n._id][t]+=a.total)}}for(const r of o){const e=Object.keys(d).map(t=>d[t][r]),i=e.reduce((t,a)=>Math.max(t,a)),s=e.reduce((t,a)=>t+a)/a.length;n[r]={max:i,avg:s,value:d[t._id][r]}}return{basketsTotals:n}}}return t.\u0275fac=function(a){return new(a||t)(n.Rb(C.a),n.Rb(y.a),n.Rb(d.b))},t.\u0275prov=n.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);