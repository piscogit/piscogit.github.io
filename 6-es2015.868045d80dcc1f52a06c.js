(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LTzM:function(t,e,a){"use strict";a.r(e),a.d(e,"CreateCommentPageModule",(function(){return w}));var n=a("ofXK"),i=a("3Pt+"),o=a("TEn/"),s=a("tyNb"),c=a("mrSG"),d=a("Mxx3"),r=a("+Ff3"),l=a("fXoL"),m=a("NrBX"),b=a("nTzd"),h=a("ufmx"),g=a("zrcv"),v=a("L5fO"),u=a("3LWr"),C=a("5+WD"),f=a("g1yl");function p(t,e){if(1&t&&l.Jb(0,"app-candidate-avatar",18),2&t){const t=l.Xb().$implicit;l.dc("candidate",t)}}function k(t,e){if(1&t&&l.Jb(0,"app-candidate-avatar",18),2&t){const t=l.Xb().$implicit;l.dc("candidate",t)}}function D(t,e){if(1&t){const t=l.Ob();l.Nb(0,"ion-item",14),l.Vb("click",(function(){l.ic(t);const a=e.$implicit;return l.Xb().selectCandidate(a)})),l.Jb(1,"app-candidate-avatar",15),l.nc(2,p,1,1,"app-candidate-avatar",16),l.nc(3,k,1,1,"app-candidate-avatar",17),l.Mb()}if(2&t){const t=e.$implicit,a=l.Xb();l.dc("cdkDragStartDelay",a.dragDelay),l.yb(1),l.Ab("candidateSelected",a.selectedCandidates[t._id]),l.dc("candidate",t)}}function y(t,e){if(1&t){const t=l.Ob();l.Nb(0,"ion-item",19),l.Vb("click",(function(){l.ic(t);const a=e.$implicit;return l.Xb().savedCommentSelected(a)})),l.Nb(1,"ion-label"),l.Nb(2,"span"),l.pc(3),l.Mb(),l.Mb(),l.Mb()}if(2&t){const t=e.$implicit;l.yb(3),l.qc(t)}}const M=[{path:"",component:(()=>{class t{constructor(t,e,a,n,i,o,s,c,r){this.navCtrl=t,this.route=e,this.router=a,this.tasksDelegator=n,this.tasksCommentsDelegator=i,this.candidatesDelegator=o,this.msgService=s,this.langProvider=c,this.store=r,this.selectedCandidates={},this.dragDelay=d.a.DragDelay,this.title=this.langProvider.GeneralComment,this.isInit=!1}ngOnInit(){var t;return Object(c.a)(this,void 0,void 0,(function*(){this.candidates=yield this.candidatesDelegator.getCandidatesCopy(),this.savedComments=r.c;const e=this.route.snapshot.paramMap.get(d.a.TaskDescId);e&&(this.taskDescRef=yield this.tasksDelegator.getTaskDesk(e),this.title=this.taskDescRef.description);const a=this.route.snapshot.paramMap.get(d.a.Navigate);a&&this.store.editComment.value.id===a&&(this.editedComment=this.store.editComment.value.data,this.editedComment&&(this.comment=this.editedComment.comment,this.editedComment.candidates.forEach(t=>this.selectedCandidates[t._id]=t),this.taskDescRef=this.editedComment.TaskDescRef,this.title=null===(t=this.editedComment.TaskDescRef)||void 0===t?void 0:t.description)),this.isInit=!0}))}ngOnDestroy(){}selectCandidate(t){this.selectedCandidates[t._id]=this.selectedCandidates[t._id]?null:t}dropCandidates(t){}createComment(){var t,e;return Object(c.a)(this,void 0,void 0,(function*(){this.editedComment&&(yield this.tasksCommentsDelegator.deleteComments(this.editedComment.SavedComments));const a=Object.keys(this.selectedCandidates).filter(t=>this.selectedCandidates[t]).map(t=>this.selectedCandidates[t]);if(0===a.length)this.msgService.showToast(this.langProvider.NoneSelectedCandidates,1e3,"toastWarn");else if(null===(t=this.comment)||void 0===t?void 0:t.trim()){const t={candidates:a,comment:this.comment,TaskDescRef:this.taskDescRef,date:null===(e=this.editedComment)||void 0===e?void 0:e.date},n=yield this.tasksCommentsDelegator.createComment(t);if(this.store.lastCommentsChangeDateTime.next(n[0].date),this.msgService.showToast(this.langProvider.CommentSaved+"..."),this.taskDescRef){const t=this.store.lastTaskNavData;yield this.router.navigate([t.value.Path,t.value.Params],t.value.NavigationExtras)}else yield this.router.navigate(["tabs/comments"],{skipLocationChange:!0})}else this.msgService.showToast(this.langProvider.EmptyComment,1e3,"toastWarn")}))}savedCommentSelected(t){this.comment=`${this.comment?this.comment+"\n":""}${t}`}addSavedComment(){return Object(c.a)(this,void 0,void 0,(function*(){}))}}return t.\u0275fac=function(e){return new(e||t)(l.Ib(o.eb),l.Ib(s.a),l.Ib(s.f),l.Ib(m.a),l.Ib(b.a),l.Ib(h.a),l.Ib(g.a),l.Ib(v.b),l.Ib(u.a))},t.\u0275cmp=l.Cb({type:t,selectors:[["app-create-comment"]],decls:22,vars:15,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/comments"],[3,"fullscreen"],["cdkDropListGroup","",1,"container"],["lines","none","id","candidates","cdkDropList","","cdkDropListSortingDisabled","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["cdkDrag","",3,"cdkDragStartDelay","click",4,"ngFor","ngForOf"],[1,"commentArea"],["autocomplete","on","rows","5",1,"commentText",3,"ngModel","placeholder","ngModelChange"],[1,"commentBtns"],["color","success",3,"click"],[3,"click"],[1,"savedComments"],["button","",3,"click",4,"ngFor","ngForOf"],["cdkDrag","",3,"cdkDragStartDelay","click"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],[1,"avatar",3,"candidate"],["button","",3,"click"]],template:function(t,e){1&t&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-buttons",0),l.Jb(3,"ion-menu-button"),l.Mb(),l.Nb(4,"ion-buttons",1),l.Jb(5,"ion-back-button",2),l.Mb(),l.Nb(6,"ion-title"),l.pc(7),l.Mb(),l.Mb(),l.Mb(),l.Nb(8,"ion-content",3),l.Nb(9,"div",4),l.Nb(10,"ion-list",5),l.Vb("cdkDropListDropped",(function(t){return e.dropCandidates(t)})),l.nc(11,D,4,4,"ion-item",6),l.Mb(),l.Nb(12,"div",7),l.Nb(13,"ion-textarea",8),l.Vb("ngModelChange",(function(t){return e.comment=t})),l.Mb(),l.Nb(14,"div",9),l.Nb(15,"ion-button",10),l.Vb("click",(function(){return e.addSavedComment()})),l.pc(16),l.Mb(),l.Nb(17,"ion-button",11),l.Vb("click",(function(){return e.createComment()})),l.pc(18),l.Mb(),l.Mb(),l.Nb(19,"div",12),l.Nb(20,"ion-list"),l.nc(21,y,4,1,"ion-item",13),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.yb(6),l.mc("direction",e.langProvider.LangDirection),l.yb(1),l.qc(e.title),l.yb(1),l.dc("fullscreen",!0),l.yb(2),l.dc("cdkDropListData",e.candidates),l.yb(1),l.dc("ngForOf",e.candidates),l.yb(2),l.mc("direction",e.langProvider.LangDirection),l.dc("ngModel",e.comment)("placeholder",e.langProvider.CreateComment),l.yb(3),l.qc(e.langProvider.CreateSavedComment),l.yb(2),l.qc(e.langProvider.CreateComment),l.yb(2),l.mc("direction",e.langProvider.LangDirection),l.yb(1),l.dc("ngForOf",e.savedComments))},directives:[o.r,o.Y,o.k,o.E,o.g,o.h,o.W,o.n,C.e,o.C,C.d,n.l,o.V,o.jb,i.d,i.g,o.j,o.v,C.a,f.a,C.c,C.b,o.B],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{height:100%;width:auto;overflow:scroll;min-width:var(--avatar-empty-width)}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.avatarComment[_ngcontent-%COMP%]{height:2rem;width:2rem}.commentArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;justify-content:flex-end;flex:1}.commentText[_ngcontent-%COMP%]{color:var(--ion-color-dark);max-height:20%}.candidateSelected[_ngcontent-%COMP%]{background:#f08080}.commentBtns[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.closeBtn[_ngcontent-%COMP%]{margin-left:auto;--background:transparent;--color:var(--ion-color-dark)}.savedComments[_ngcontent-%COMP%]{overflow:scroll}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(M)],s.h]}),t})();var N=a("ajeZ");let w=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},imports:[[n.c,i.a,o.ab,P,N.a,C.f]]}),t})()}}]);