!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LTzM:function(e,i,r){"use strict";r.r(i),r.d(i,"CreateCommentPageModule",(function(){return R}));var o=r("ofXK"),s=r("3Pt+"),c=r("TEn/"),d=r("tyNb"),m=r("mrSG"),l=r("Mxx3"),u=r("+Ff3"),b=r("fXoL"),h=r("NrBX"),f=r("nTzd"),v=r("ufmx"),g=r("zrcv"),p=r("L5fO"),C=r("3LWr"),k=r("5+WD"),y=r("g1yl");function D(t,e){if(1&t&&b.Jb(0,"app-candidate-avatar",19),2&t){var n=b.Xb().$implicit,a=b.Xb();b.dc("candidate",n)("isSelected",a.selectedCandidates[n._id])}}function M(t,e){if(1&t&&b.Jb(0,"app-candidate-avatar",19),2&t){var n=b.Xb().$implicit,a=b.Xb();b.dc("candidate",n)("isSelected",a.selectedCandidates[n._id])}}function w(t,e){1&t&&b.Jb(0,"span",20)}function x(t,e){if(1&t){var n=b.Ob();b.Nb(0,"div",13),b.Nb(1,"ion-item",14),b.Vb("click",(function(){b.ic(n);var t=e.$implicit;return b.Xb().selectCandidate(t)})),b.Jb(2,"app-candidate-avatar",15),b.nc(3,D,1,2,"app-candidate-avatar",16),b.nc(4,M,1,2,"app-candidate-avatar",17),b.Mb(),b.nc(5,w,1,0,"span",18),b.Mb()}if(2&t){var a=e.$implicit,i=b.Xb();b.yb(1),b.dc("cdkDragStartDelay",i.dragDelay),b.yb(1),b.dc("candidate",a)("isSelected",i.selectedCandidates[a._id]),b.yb(3),b.dc("ngIf",i.store.isIos)}}function P(t,e){if(1&t){var n=b.Ob();b.Nb(0,"ion-item",21),b.Vb("click",(function(){b.ic(n);var t=e.$implicit;return b.Xb().savedCommentSelected(t)})),b.Nb(1,"ion-label"),b.Nb(2,"span"),b.pc(3),b.Mb(),b.Mb(),b.Mb()}if(2&t){var a=e.$implicit;b.yb(3),b.qc(a.comment)}}var O,S,N,I=[{path:"",component:(O=function(){function e(t,a,i,r,o,s,c,d,m){n(this,e),this.navCtrl=t,this.route=a,this.router=i,this.tasksDelegator=r,this.tasksCommentsDelegator=o,this.candidatesDelegator=s,this.msgService=c,this.langProvider=d,this.store=m,this.selectedCandidates={},this.dragDelay=l.a.DragDelay,this.title=this.langProvider.GeneralComment,this.isInit=!1}var i,r,o;return i=e,(r=[{key:"ngOnInit",value:function(){var e,n,a;return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var r,o,s=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.candidatesDelegator.getCandidatesCopy(!0);case 2:if(this.candidates=i.sent,this.savedComments=u.c,r=this.route.snapshot.paramMap.get(l.a.TaskDescId),i.t0=r,!i.t0){i.next=15;break}return i.next=9,this.tasksDelegator.getTaskDesk(r);case 9:return this.taskDescRef=i.sent,i.next=12,this.tasksDelegator.getTasksConfig(r);case 12:this.taskConfigRef=i.sent,this.title=this.taskDescRef.description,this.savedComments=[].concat(t(null!==(e=this.taskConfigRef.comments)&&void 0!==e?e:[]),t(null!==(n=this.savedComments)&&void 0!==n?n:[]));case 15:(o=this.route.snapshot.paramMap.get(l.a.Navigate))&&this.store.editComment.value.id===o&&(this.editedComment=this.store.editComment.value.data,this.editedComment&&(this.comment=this.editedComment.comment,this.editedComment.candidates.forEach((function(t){return s.selectedCandidates[t._id]=t})),this.taskDescRef=this.editedComment.TaskDescRef,this.title=null===(a=this.editedComment.TaskDescRef)||void 0===a?void 0:a.description)),this.isInit=!0;case 17:case"end":return i.stop()}}),i,this)})))}},{key:"ngOnDestroy",value:function(){}},{key:"selectCandidate",value:function(t){this.selectedCandidates[t._id]=this.selectedCandidates[t._id]?null:t}},{key:"dropCandidates",value:function(t){}},{key:"createComment",value:function(){var t,e;return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a,i,r,o,s=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=this.editedComment,!n.t0){n.next=4;break}return n.next=4,this.tasksCommentsDelegator.deleteComments(this.editedComment.SavedComments);case 4:if(0!==(a=Object.keys(this.selectedCandidates).filter((function(t){return s.selectedCandidates[t]})).map((function(t){return s.selectedCandidates[t]}))).length){n.next=9;break}this.msgService.showToast(this.langProvider.NoneSelectedCandidates,1e3,"toastWarn"),n.next=25;break;case 9:if(!(null===(t=this.comment)||void 0===t?void 0:t.trim())){n.next=24;break}return i={candidates:a,comment:this.comment,TaskDescRef:this.taskDescRef,date:null===(e=this.editedComment)||void 0===e?void 0:e.date},n.next=13,this.tasksCommentsDelegator.createComment(i);case 13:if(r=n.sent,this.store.lastCommentsChangeDateTime.next(r[0].date),this.msgService.showToast(this.langProvider.CommentSaved+"..."),!this.taskDescRef){n.next=20;break}return o=this.store.lastTaskNavData,n.next=18,this.router.navigate([o.value.Path,o.value.Params],o.value.NavigationExtras);case 18:n.next=22;break;case 20:return n.next=22,this.router.navigate(["tabs/comments"],{skipLocationChange:!0});case 22:n.next=25;break;case 24:this.msgService.showToast(this.langProvider.EmptyComment,1e3,"toastWarn");case 25:case"end":return n.stop()}}),n,this)})))}},{key:"savedCommentSelected",value:function(t){this.comment="".concat(this.comment?this.comment+"\n":"").concat(t.comment)}},{key:"addSavedComment",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))}}])&&a(i.prototype,r),o&&a(i,o),e}(),O.\u0275fac=function(t){return new(t||O)(b.Ib(c.fb),b.Ib(d.a),b.Ib(d.f),b.Ib(h.a),b.Ib(f.a),b.Ib(v.a),b.Ib(g.a),b.Ib(p.b),b.Ib(C.a))},O.\u0275cmp=b.Cb({type:O,selectors:[["app-create-comment"]],decls:22,vars:14,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/comments"],["cdkDropListGroup","",1,"container"],["lines","none","id","candidates","cdkDropList","","cdkDropListSortingDisabled","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["class","iosDndFixItem",4,"ngFor","ngForOf"],[1,"commentArea"],["autocomplete","on","rows","5",1,"commentText",3,"ngModel","placeholder","ngModelChange"],[1,"commentBtns"],["disabled","","color","success",3,"click"],[3,"click"],[1,"savedComments"],["button","",3,"click",4,"ngFor","ngForOf"],[1,"iosDndFixItem"],["cdkDrag","",3,"cdkDragStartDelay","click"],[1,"avatar","avatarMargin",3,"candidate","isSelected"],["class","avatar",3,"candidate","isSelected",4,"cdkDragPreview"],["class","avatar",3,"candidate","isSelected",4,"cdkDragPlaceholder"],["class","iosDndFixGap",4,"ngIf"],[1,"avatar",3,"candidate","isSelected"],[1,"iosDndFixGap"],["button","",3,"click"]],template:function(t,e){1&t&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-buttons",0),b.Jb(3,"ion-menu-button"),b.Mb(),b.Nb(4,"ion-buttons",1),b.Jb(5,"ion-back-button",2),b.Mb(),b.Nb(6,"ion-title"),b.pc(7),b.Mb(),b.Mb(),b.Mb(),b.Nb(8,"ion-content"),b.Nb(9,"div",3),b.Nb(10,"ion-list",4),b.Vb("cdkDropListDropped",(function(t){return e.dropCandidates(t)})),b.nc(11,x,6,4,"div",5),b.Mb(),b.Nb(12,"div",6),b.Nb(13,"ion-textarea",7),b.Vb("ngModelChange",(function(t){return e.comment=t})),b.Mb(),b.Nb(14,"div",8),b.Nb(15,"ion-button",9),b.Vb("click",(function(){return e.addSavedComment()})),b.pc(16),b.Mb(),b.Nb(17,"ion-button",10),b.Vb("click",(function(){return e.createComment()})),b.pc(18),b.Mb(),b.Mb(),b.Nb(19,"div",11),b.Nb(20,"ion-list"),b.nc(21,P,4,1,"ion-item",12),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&t&&(b.yb(6),b.mc("direction",e.langProvider.LangDirection),b.yb(1),b.qc(e.title),b.yb(3),b.dc("cdkDropListData",e.candidates),b.yb(1),b.dc("ngForOf",e.candidates),b.yb(2),b.mc("direction",e.langProvider.LangDirection),b.dc("ngModel",e.comment)("placeholder",e.langProvider.CreateComment),b.yb(3),b.qc(e.langProvider.CreateSavedComment),b.yb(2),b.qc(e.langProvider.CreateComment),b.yb(2),b.mc("direction",e.langProvider.LangDirection),b.yb(1),b.dc("ngForOf",e.savedComments))},directives:[c.s,c.Z,c.k,c.F,c.g,c.h,c.X,c.n,k.e,c.D,k.d,o.l,c.W,c.lb,s.d,s.g,c.j,c.w,k.a,y.a,k.c,k.b,o.m,c.C],styles:["ion-content[_ngcontent-%COMP%]{--overflow:hidden}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{height:100%;width:auto;overflow:scroll;min-width:var(--avatar-empty-width)}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.avatarComment[_ngcontent-%COMP%]{height:2rem;width:2rem}.commentArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;justify-content:flex-start;flex:1}.commentText[_ngcontent-%COMP%]{color:var(--ion-color-dark);max-height:20%}.candidateSelected[_ngcontent-%COMP%]{background:#d6b8b8;border:#b43434;border-radius:90rem;border-style:solid;border-width:.1rem}.commentBtns[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.closeBtn[_ngcontent-%COMP%]{margin-left:auto;--background:transparent;--color:var(--ion-color-dark)}.savedComments[_ngcontent-%COMP%]{overflow:scroll}"]}),O)}],T=((S=function t(){n(this,t)}).\u0275mod=b.Gb({type:S}),S.\u0275inj=b.Fb({factory:function(t){return new(t||S)},imports:[[d.h.forChild(I)],d.h]}),S),_=r("ajeZ"),R=((N=function t(){n(this,t)}).\u0275mod=b.Gb({type:N}),N.\u0275inj=b.Fb({factory:function(t){return new(t||N)},imports:[[o.c,s.a,c.bb,T,_.a,k.f]]}),N)}}])}();