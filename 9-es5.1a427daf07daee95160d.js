!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,r=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(i=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(s){r=!0,a=s}finally{try{i||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=n(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==i.return||i.return()}finally{if(s)throw o}}}}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5Ma4":function(n,i,a){"use strict";a.r(i),a.d(i,"CandidtesPageModule",(function(){return R}));var c,s=a("ofXK"),d=a("3Pt+"),u=a("TEn/"),l=a("tyNb"),b=a("mrSG"),f=a("fXoL"),v=a("L5fO"),g=((c=function(){function e(t,n){r(this,e),this.modalCtrl=t,this.langProvider=n}return o(e,[{key:"ngOnInit",value:function(){}},{key:"applyFilters",value:function(e){this.modalCtrl.dismiss(e)}}]),e}()).\u0275fac=function(e){return new(e||c)(f.Ib(u.eb),f.Ib(v.b))},c.\u0275cmp=f.Cb({type:c,selectors:[["app-candidates-filter"]],inputs:{status:"status"},decls:19,vars:9,consts:[["translucent","true"],[3,"value"],["button","",3,"click"],["slot","start","value","active"],["slot","start","value","notActive"],["slot","start","value","all"]],template:function(e,t){1&e&&(f.Nb(0,"ion-header",0),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-title"),f.Nb(3,"span"),f.pc(4),f.Mb(),f.Mb(),f.Mb(),f.Nb(5,"ion-list"),f.Nb(6,"ion-radio-group",1),f.Nb(7,"ion-item",2),f.Vb("click",(function(){return t.applyFilters("active")})),f.Nb(8,"ion-label"),f.pc(9),f.Mb(),f.Jb(10,"ion-radio",3),f.Mb(),f.Nb(11,"ion-item",2),f.Vb("click",(function(){return t.applyFilters("notActive")})),f.Nb(12,"ion-label"),f.pc(13),f.Mb(),f.Jb(14,"ion-radio",4),f.Mb(),f.Nb(15,"ion-item",2),f.Vb("click",(function(){return t.applyFilters("all")})),f.Nb(16,"ion-label"),f.pc(17),f.Mb(),f.Jb(18,"ion-radio",5),f.Mb(),f.Mb(),f.Mb(),f.Mb()),2&e&&(f.yb(2),f.mc("direction",t.langProvider.LangDirection),f.yb(2),f.qc(t.langProvider.Select),f.yb(1),f.mc("direction",t.langProvider.LangDirection),f.yb(1),f.dc("value",t.status),f.yb(3),f.qc(t.langProvider.CandidatesFilterActive),f.yb(4),f.qc(t.langProvider.CandidatesFilterNotActive),f.yb(4),f.qc(t.langProvider.CandidatesFilterAll))},directives:[u.s,u.Z,u.X,u.D,u.I,u.kb,u.w,u.C,u.H,u.jb],styles:[""]}),c);function m(e,t){if(1&e&&(f.Nb(0,"ion-item"),f.Nb(1,"ion-label"),f.Nb(2,"span"),f.pc(3),f.Mb(),f.Mb(),f.Mb()),2&e){var n=f.Xb();f.yb(3),f.qc(n.langProvider.CreateCandidateNewGroup)}}function p(e,t){if(1&e){var n=f.Ob();f.Nb(0,"ion-item"),f.Nb(1,"ion-input",12),f.Vb("ngModelChange",(function(e){return f.ic(n),f.Xb().candidateNewGroup=e})),f.Mb(),f.Mb()}if(2&e){var i=f.Xb();f.yb(1),f.dc("ngModel",i.candidateNewGroup)}}var h,y=((h=function(){function e(t,n){r(this,e),this.modalCtrl=t,this.langProvider=n}return o(e,[{key:"ngOnInit",value:function(){}},{key:"back",value:function(){this.modalCtrl.dismiss()}},{key:"activate",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],this.candidateLastNumber>0)for(n=this.candidateFirstNumber;n<=this.candidateLastNumber;n++)t.push(n);else t.push(this.candidateFirstNumber);this.modalCtrl.dismiss({numbers:t,group:this.candidateGroup,newGroup:this.candidateNewGroup});case 3:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||h)(f.Ib(u.eb),f.Ib(v.b))},h.\u0275cmp=f.Cb({type:h,selectors:[["app-create-candidates"]],inputs:{title:"title",action:"action",actionColor:"actionColor",isNewGroup:"isNewGroup"},decls:38,vars:16,consts:[["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"container"],[3,"ngSubmit"],["form","ngForm"],["justify-content-center",""],["align-self-center","","size-md","6","size-lg","5","size-xs","12"],["text-center",""],["padding",""],["name","candidateNumber","type","number","autofocus","true","required","",3,"placeholder","ngModel","ngModelChange"],["name","totalCandidates","type","number",3,"placeholder","ngModel","ngModelChange"],["name","candidateGroup","type","number","required","",3,"placeholder","ngModel","ngModelChange"],[4,"ngIf"],["size","large","type","submit","expand","block",3,"color","disabled"]],template:function(e,t){if(1&e&&(f.Nb(0,"ion-header"),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-title"),f.pc(3),f.Mb(),f.Nb(4,"ion-buttons",0),f.Nb(5,"ion-button",1),f.Vb("click",(function(){return t.back()})),f.Jb(6,"ion-icon",2),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(7,"div",3),f.Nb(8,"form",4,5),f.Vb("ngSubmit",(function(){return t.activate()})),f.Nb(10,"ion-grid"),f.Nb(11,"ion-row",6),f.Nb(12,"ion-col",7),f.Jb(13,"div",8),f.Nb(14,"div",9),f.Nb(15,"ion-item"),f.Nb(16,"ion-label"),f.Nb(17,"span"),f.pc(18),f.Mb(),f.Mb(),f.Mb(),f.Nb(19,"ion-item"),f.Nb(20,"ion-input",10),f.Vb("ngModelChange",(function(e){return t.candidateFirstNumber=e})),f.Mb(),f.Mb(),f.Nb(21,"ion-item"),f.Nb(22,"ion-label"),f.Nb(23,"span"),f.pc(24),f.Mb(),f.Mb(),f.Mb(),f.Nb(25,"ion-item"),f.Nb(26,"ion-input",11),f.Vb("ngModelChange",(function(e){return t.candidateLastNumber=e})),f.Mb(),f.Mb(),f.Nb(27,"ion-item"),f.Nb(28,"ion-label"),f.Nb(29,"span"),f.pc(30),f.Mb(),f.Mb(),f.Mb(),f.Nb(31,"ion-item"),f.Nb(32,"ion-input",12),f.Vb("ngModelChange",(function(e){return t.candidateGroup=e})),f.Mb(),f.Mb(),f.nc(33,m,4,1,"ion-item",13),f.nc(34,p,2,1,"ion-item",13),f.Mb(),f.Nb(35,"div",9),f.Nb(36,"ion-button",14),f.pc(37),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb()),2&e){var n=f.hc(9);f.yb(2),f.mc("direction",t.langProvider.LangDirection),f.yb(1),f.qc(t.title),f.yb(4),f.mc("direction",t.langProvider.LangDirection),f.yb(11),f.qc(t.langProvider.CreateCandidateFirsrNumber),f.yb(2),f.dc("ngModel",t.candidateFirstNumber),f.yb(4),f.qc(t.langProvider.CreateCandidateLastNumber),f.yb(2),f.dc("ngModel",t.candidateLastNumber),f.yb(4),f.qc(t.langProvider.CreateCandidateGroup),f.yb(2),f.dc("ngModel",t.candidateGroup),f.yb(1),f.dc("ngIf",t.isNewGroup),f.yb(1),f.dc("ngIf",t.isNewGroup),f.yb(2),f.dc("color",t.actionColor)("disabled",n.invalid),f.yb(1),f.rc(" ",t.action," ")}},directives:[u.s,u.Z,u.X,u.k,u.j,u.t,d.i,d.e,d.f,u.r,u.M,u.m,u.w,u.C,u.v,u.gb,d.h,d.d,d.g,s.m],styles:[".container[_ngcontent-%COMP%]{height:100%;margin-top:20%}"]}),h),C=a("3LWr"),N=a("zrcv"),M=a("ufmx"),w=a("5+WD"),k=a("g1yl");function P(e,t){if(1&e){var n=f.Ob();f.Nb(0,"ion-item-option",27),f.Vb("click",(function(){f.ic(n);var e=f.Xb().$implicit;return f.Xb().changeActiveStatus(e,!0)})),f.Nb(1,"span"),f.pc(2),f.Mb(),f.Mb()}if(2&e){var i=f.Xb(2);f.yb(2),f.qc(i.langProvider.CandidateActive)}}function x(e,t){if(1&e){var n=f.Ob();f.Nb(0,"ion-item-option",16),f.Vb("click",(function(){f.ic(n);var e=f.Xb().$implicit;return f.Xb().changeActiveStatus(e,!1)})),f.Nb(1,"span"),f.pc(2),f.Mb(),f.Mb()}if(2&e){var i=f.Xb(2);f.yb(2),f.qc(i.langProvider.CandidateNotActive)}}function S(e,t){if(1&e&&(f.Nb(0,"span",28),f.pc(1),f.Mb()),2&e){var n=f.Xb().$implicit;f.yb(1),f.rc(" ",n.name," ")}}function I(e,t){if(1&e&&(f.Nb(0,"span",28),f.pc(1),f.Mb()),2&e){var n=f.Xb().$implicit,i=f.Xb();f.yb(1),f.sc(" ",i.langProvider.Candidate," ",n.number," ")}}function O(e,t){if(1&e){var n=f.Ob();f.Nb(0,"ion-item-sliding"),f.Nb(1,"ion-item-options",18),f.nc(2,P,3,1,"ion-item-option",19),f.nc(3,x,3,1,"ng-template",null,20,f.oc),f.Mb(),f.Nb(5,"ion-item",21),f.Vb("click",(function(){f.ic(n);var e=t.$implicit;return f.Xb().onCadidateSelected(e)})),f.Jb(6,"app-candidate-avatar",22),f.Nb(7,"ion-label"),f.Nb(8,"div",23),f.nc(9,S,2,1,"span",24),f.nc(10,I,2,2,"ng-template",null,25,f.oc),f.Jb(12,"ion-progress-bar",26),f.Mb(),f.Mb(),f.Jb(13,"ion-reorder",1),f.Mb(),f.Mb()}if(2&e){var i=t.$implicit,r=f.hc(4),a=f.hc(11),o=f.Xb();f.yb(2),f.dc("ngIf",!1===i.isActive)("ngIfElse",r),f.yb(3),f.dc("hidden",o.checkVisibiltyStatus(i)),f.yb(1),f.dc("candidate",i),f.yb(2),f.Ab("candidateNotActive",!1===i.isActive),f.yb(1),f.dc("ngIf",i.name)("ngIfElse",a),f.yb(3),f.dc("color",i.coveragePctColor)("value",i.coveragePct)}}var A,D,F,G=[{path:"",component:(A=function(){function n(e,t,i,a,o,c){r(this,n),this.router=e,this.store=t,this.msgService=i,this.modalCtrl=a,this.candidatesDelegator=o,this.langProvider=c,this.filterStatus="active",this.isInit=!1}return o(n,[{key:"ngOnInit",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.store.candidates.subscribe((function(e){if(null!=e){n.candidates=null==e?void 0:e.sort((function(e,t){var n,i;return(null!==(n=e.listOrder)&&void 0!==n?n:e.number)-(null!==(i=t.listOrder)&&void 0!==i?i:t.number)}));var i,r=t(n.candidates);try{for(r.s();!(i=r.n()).done;){var a=i.value;a.coveragePct=Math.random(),a.coveragePctColor=a.coveragePct>.66?"secondary":a.coveragePct>.33?"warning":"danger"}}catch(o){r.e(o)}finally{r.f()}}}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"onCadidateSelected",value:function(e){this.router.navigate(["tabs/candidates/candidate-details/dummy",{candidateId:e._id}],{skipLocationChange:!0})}},{key:"doReorder",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Dragged from index",e.detail.from,"to",e.detail.to),this.candidates=e.detail.complete(this.candidates),this.reorderCandidates(),t.next=5,this.candidatesDelegator.updateCandidates(this.candidates);case 5:case"end":return t.stop()}}),t,this)})))}},{key:"reorderCandidates",value:function(){var n,i=t(this.candidates.entries());try{for(i.s();!(n=i.n()).done;){var r=e(n.value,2),a=r[0];r[1].listOrder=a}}catch(o){i.e(o)}finally{i.f()}}},{key:"trackByFn",value:function(e,t){return t?t._id:e}},{key:"showCandidatesFilters",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:g,swipeToClose:!0,componentProps:{status:this.filterStatus}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:n=e.sent,this.applyCandidatesFilters(n.data);case 9:case"end":return e.stop()}}),e,this)})))}},{key:"applyCandidatesFilters",value:function(e){this.filterStatus=e}},{key:"checkVisibiltyStatus",value:function(e){var t,n=!0;return"active"===this.filterStatus?n=null===(t=e.isActive)||void 0===t||t:"notActive"===this.filterStatus&&(n=!1===e.isActive),!n}},{key:"changeActiveStatus",value:function(e,t){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isActive=t,e.statusChangeDate=new Date,n.next=4,this.candidatesDelegator.updateCandidates([e]);case 4:if(!t){n.next=9;break}return n.next=7,this.msgService.showToast(this.langProvider.CandidateStatusChangedActive(e),500,"toastSuccess");case 7:n.next=11;break;case 9:return n.next=11,this.msgService.showToast(this.langProvider.CandidateStatusChangedNotActive(e),500,"toastWarn");case 11:this.candidatesList.closeSlidingItems();case 12:case"end":return n.stop()}}),n,this)})))}},{key:"showCreateCandidates",value:function(){var e,t,n;return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var r,a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.modalCtrl.create({component:y,swipeToClose:!0,componentProps:{title:this.langProvider.CreateCandidateTitle,action:this.langProvider.Activate,actionColor:"primary"}});case 2:return r=i.sent,i.next=5,r.present();case 5:return i.next=7,r.onWillDismiss();case 7:if(a=i.sent,i.t0=(null===(t=null===(e=a.data)||void 0===e?void 0:e.numbers)||void 0===t?void 0:t.length)>0,!i.t0){i.next=17;break}if(!(null===(n=this.candidates)||void 0===n?void 0:n.some((function(e){return a.data.numbers.find((function(t){return t===e.number&&a.data.group.toString()===e.group}))})))){i.next=14;break}this.msgService.showToast(this.langProvider.CreateCandidateDuplicateNumber,1e3,"toastWarn"),i.next=17;break;case 14:return i.next=16,this.candidatesDelegator.createNewCandidates(a.data);case 16:this.msgService.showToast(this.langProvider.CandidatesCreatedSuccessfully(a.data.numbers.length),1e3,"toastSuccess");case 17:case"end":return i.stop()}}),i,this)})))}},{key:"showEditCandidatesGroup",value:function(){var e,t;return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,r,a,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:y,swipeToClose:!0,componentProps:{title:this.langProvider.ChangeCandidateGroupTitle,action:this.langProvider.Activate,actionColor:"primary",isNewGroup:!0}});case 2:return i=n.sent,n.next=5,i.present();case 5:return n.next=7,i.onWillDismiss();case 7:if(r=n.sent,!((null===(t=null===(e=r.data)||void 0===e?void 0:e.numbers)||void 0===t?void 0:t.length)>0)){n.next=18;break}if(!((a=r.data.numbers.map((function(e){return o.candidates.find((function(t){return t.number===e&&t.group===r.data.group.toString()}))}))).filter((function(e){return!e})).length>0)){n.next=14;break}this.msgService.showToast(this.langProvider.ChangeGroupCandidateNotExistNumber,1e3,"toastWarn"),n.next=18;break;case 14:return a.forEach((function(e){return e.group=r.data.newGroup.toString()})),n.next=17,this.candidatesDelegator.updateCandidates(a);case 17:this.msgService.showToast(this.langProvider.CandidatesChangedSuccessfully(r.data.numbers.length),1e3,"toastSuccess");case 18:case"end":return n.stop()}}),n,this)})))}},{key:"showDeleteCandidates",value:function(){var e,t;return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,r,a,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalCtrl.create({component:y,swipeToClose:!0,componentProps:{title:this.langProvider.DeleteCandidateTitle,action:this.langProvider.Activate,actionColor:"danger"}});case 2:return i=n.sent,n.next=5,i.present();case 5:return n.next=7,i.onWillDismiss();case 7:if(r=n.sent,!((null===(t=null===(e=r.data)||void 0===e?void 0:e.numbers)||void 0===t?void 0:t.length)>0)){n.next=17;break}if(!((a=r.data.numbers.map((function(e){return o.candidates.find((function(t){return t.number===e&&t.group===r.data.group.toString()}))}))).filter((function(e){return!e})).length>0)){n.next=14;break}this.msgService.showToast(this.langProvider.DeleteCandidateNotExistNumber,1e3,"toastWarn"),n.next=17;break;case 14:return n.next=16,this.candidatesDelegator.deleteCandidates(a);case 16:this.msgService.showToast(this.langProvider.CandidatesDeletedSuccessfully(r.data.numbers.length),1e3,"toastSuccess");case 17:case"end":return n.stop()}}),n,this)})))}}]),n}(),A.\u0275fac=function(e){return new(e||A)(f.Ib(l.f),f.Ib(C.a),f.Ib(N.a),f.Ib(u.eb),f.Ib(M.a),f.Ib(v.b))},A.\u0275cmp=f.Cb({type:A,selectors:[["app-candidtes"]],viewQuery:function(e,t){var n;1&e&&f.vc(u.D,!0),2&e&&f.gc(n=f.Wb())&&(t.candidatesList=n.first)},inputs:{candidates:"candidates"},decls:25,vars:6,consts:[["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","options"],[1,"candidatesContainer",3,"fullscreen"],["disabled","false",3,"ionItemReorder"],[4,"ngFor","ngForOf","ngForTrackBy"],["horizontal","end","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".candidatesContainer"],["color","dark",2,"opacity","0.6"],["md","caret-up","ios","chevron-up-circle-outline"],["side","top"],["color","secondary",3,"click"],["name","build"],["color","primary",3,"click"],["name","people"],["side","start"],["color","danger",3,"click"],["name","trash"],["side","end"],["color","success",3,"click",4,"ngIf","ngIfElse"],["notActive",""],["button","",3,"hidden","click"],["slot","start",1,"candi",3,"candidate"],[1,"candidateLabel"],["class","candidateName",4,"ngIf","ngIfElse"],["noName",""],[1,"candidateProgress",3,"color","value"],["color","success",3,"click"],[1,"candidateName"]],template:function(e,t){1&e&&(f.Nb(0,"ion-header"),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-buttons",0),f.Jb(3,"ion-menu-button"),f.Mb(),f.Nb(4,"ion-title"),f.pc(5),f.Mb(),f.Nb(6,"ion-buttons",1),f.Nb(7,"ion-button",2),f.Vb("click",(function(){return t.showCandidatesFilters()})),f.Jb(8,"ion-icon",3),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(9,"ion-content",4),f.Nb(10,"ion-list"),f.Nb(11,"ion-reorder-group",5),f.Vb("ionItemReorder",(function(e){return t.doReorder(e)})),f.nc(12,O,14,10,"ion-item-sliding",6),f.Mb(),f.Mb(),f.Nb(13,"ion-fab",7),f.Nb(14,"ion-fab-button",8),f.Jb(15,"ion-icon",9),f.Mb(),f.Nb(16,"ion-fab-list",10),f.Nb(17,"ion-fab-button",11),f.Vb("click",(function(){return t.showEditCandidatesGroup()})),f.Jb(18,"ion-icon",12),f.Mb(),f.Nb(19,"ion-fab-button",13),f.Vb("click",(function(){return t.showCreateCandidates()})),f.Jb(20,"ion-icon",14),f.Mb(),f.Mb(),f.Nb(21,"ion-fab-list",15),f.Nb(22,"ion-fab-button",16),f.Vb("click",(function(){return t.showDeleteCandidates()})),f.Jb(23,"ion-icon",14),f.Jb(24,"ion-icon",17),f.Mb(),f.Mb(),f.Mb(),f.Mb()),2&e&&(f.yb(4),f.mc("direction",t.langProvider.LangDirection),f.yb(1),f.qc(t.langProvider.Candidates),f.yb(4),f.dc("fullscreen",!0),f.yb(3),f.dc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn))},directives:[u.s,u.Z,u.k,u.F,u.X,u.j,u.t,u.n,u.D,u.K,s.l,u.o,w.a,u.p,u.q,u.B,u.A,s.m,u.w,k.a,u.C,u.G,u.J,u.z],styles:[".circle[_ngcontent-%COMP%]{justify-content:center;align-items:center;border-radius:50px;min-height:40px;min-width:40px;text-align:center;display:flex;margin-top:.2rem;margin-bottom:.2rem}.candi[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:var(--avatar-margin)}.avatar[_ngcontent-%COMP%]{display:grid;align-items:center;text-align:center}.avatarItem[_ngcontent-%COMP%]{grid-row:1;grid-column:1}.avatarTxtItem[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#000;opacity:.4}.img[_ngcontent-%COMP%]{background:none}.noImg[_ngcontent-%COMP%]{background:#d3d3d3}.candidateLabel[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.candidateName[_ngcontent-%COMP%]{margin-left:1rem;text-overflow:ellipsis;white-space:normal;width:70%}.candidateNotActive[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.candidateProgress[_ngcontent-%COMP%]{width:30%}"]}),A)}],j=((D=function e(){r(this,e)}).\u0275mod=f.Gb({type:D}),D.\u0275inj=f.Fb({factory:function(e){return new(e||D)},imports:[[l.h.forChild(G)],l.h]}),D),T=a("ajeZ"),R=((F=function e(){r(this,e)}).\u0275mod=f.Gb({type:F}),F.\u0275inj=f.Fb({factory:function(e){return new(e||F)},imports:[[s.c,d.a,u.bb,j,w.f,T.a]]}),F)}}])}();