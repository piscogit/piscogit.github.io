(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LTzM:function(t,e,n){"use strict";n.r(e),n.d(e,"CreateCommentPageModule",(function(){return N}));var i=n("ofXK"),a=n("3Pt+"),o=n("TEn/"),s=n("tyNb"),c=n("mrSG"),d=n("Mxx3"),r=n("+Ff3"),m=n("fXoL"),l=n("NrBX"),h=n("nTzd"),b=n("ufmx"),g=n("zrcv"),v=n("L5fO"),C=n("3LWr"),u=n("5+WD"),f=n("g1yl");function p(t,e){if(1&t&&m.Jb(0,"app-candidate-avatar",17),2&t){const t=m.Xb().$implicit;m.dc("candidate",t)}}function k(t,e){if(1&t&&m.Jb(0,"app-candidate-avatar",17),2&t){const t=m.Xb().$implicit;m.dc("candidate",t)}}function D(t,e){if(1&t){const t=m.Ob();m.Nb(0,"ion-item",13),m.Vb("click",(function(){m.ic(t);const n=e.$implicit;return m.Xb().selectCandidate(n)})),m.Jb(1,"app-candidate-avatar",14),m.nc(2,p,1,1,"app-candidate-avatar",15),m.nc(3,k,1,1,"app-candidate-avatar",16),m.Mb()}if(2&t){const t=e.$implicit,n=m.Xb();m.yb(1),m.Ab("candidateSelected",n.selectedCandidates[t._id]),m.dc("candidate",t)}}function M(t,e){if(1&t){const t=m.Ob();m.Nb(0,"ion-item",18),m.Vb("click",(function(){m.ic(t);const n=e.$implicit;return m.Xb().savedCommentSelected(n)})),m.Nb(1,"ion-label"),m.Nb(2,"span"),m.pc(3),m.Mb(),m.Mb(),m.Mb()}if(2&t){const t=e.$implicit;m.yb(3),m.qc(t.comment)}}const y=[{path:"",component:(()=>{class t{constructor(t,e,n,i,a,o,s,c,r){this.navCtrl=t,this.route=e,this.router=n,this.tasksDelegator=i,this.tasksCommentsDelegator=a,this.candidatesDelegator=o,this.msgService=s,this.langProvider=c,this.store=r,this.selectedCandidates={},this.dragDelay=d.a.DragDelay,this.title=this.langProvider.GeneralComment,this.isInit=!1}ngOnInit(){var t,e,n;return Object(c.a)(this,void 0,void 0,(function*(){this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.savedComments=r.c;const i=this.route.snapshot.paramMap.get(d.a.TaskDescId);i&&(this.taskDescRef=yield this.tasksDelegator.getTaskDesk(i),this.taskConfigRef=yield this.tasksDelegator.getTasksConfig(i),this.title=this.taskDescRef.description,this.savedComments=[...null!==(t=this.taskConfigRef.comments)&&void 0!==t?t:[],...null!==(e=this.savedComments)&&void 0!==e?e:[]]);const a=this.route.snapshot.paramMap.get(d.a.Navigate);a&&this.store.editComment.value.id===a&&(this.editedComment=this.store.editComment.value.data,this.editedComment&&(this.comment=this.editedComment.comment,this.editedComment.candidates.forEach(t=>this.selectedCandidates[t._id]=t),this.taskDescRef=this.editedComment.TaskDescRef,this.title=null===(n=this.editedComment.TaskDescRef)||void 0===n?void 0:n.description)),this.isInit=!0}))}ngOnDestroy(){}selectCandidate(t){this.selectedCandidates[t._id]=this.selectedCandidates[t._id]?null:t}dropCandidates(t){}createComment(){var t,e;return Object(c.a)(this,void 0,void 0,(function*(){this.editedComment&&(yield this.tasksCommentsDelegator.deleteComments(this.editedComment.SavedComments));const n=Object.keys(this.selectedCandidates).filter(t=>this.selectedCandidates[t]).map(t=>this.selectedCandidates[t]);if(0===n.length)this.msgService.showToast(this.langProvider.NoneSelectedCandidates,1e3,"toastWarn");else if(null===(t=this.comment)||void 0===t?void 0:t.trim()){const t={candidates:n,comment:this.comment,TaskDescRef:this.taskDescRef,date:null===(e=this.editedComment)||void 0===e?void 0:e.date},i=yield this.tasksCommentsDelegator.createComment(t);if(this.store.lastCommentsChangeDateTime.next(i[0].date),this.msgService.showToast(this.langProvider.CommentSaved+"..."),this.taskDescRef){const t=this.store.lastTaskNavData;yield this.router.navigate([t.value.Path,t.value.Params],t.value.NavigationExtras)}else yield this.router.navigate(["tabs/comments"],{skipLocationChange:!0})}else this.msgService.showToast(this.langProvider.EmptyComment,1e3,"toastWarn")}))}savedCommentSelected(t){this.comment=`${this.comment?this.comment+"\n":""}${t.comment}`}addSavedComment(){return Object(c.a)(this,void 0,void 0,(function*(){}))}}return t.\u0275fac=function(e){return new(e||t)(m.Ib(o.fb),m.Ib(s.a),m.Ib(s.f),m.Ib(l.a),m.Ib(h.a),m.Ib(b.a),m.Ib(g.a),m.Ib(v.b),m.Ib(C.a))},t.\u0275cmp=m.Cb({type:t,selectors:[["app-create-comment"]],decls:22,vars:14,consts:[["slot","start"],["slot","end"],["defaultHref","tabs/comments"],["cdkDropListGroup","",1,"container"],["lines","none","id","candidates","cdkDropList","","cdkDropListSortingDisabled","",1,"candidates",3,"cdkDropListData","cdkDropListDropped"],["cdkDrag","",3,"click",4,"ngFor","ngForOf"],[1,"commentArea"],["autocomplete","on","rows","5",1,"commentText",3,"ngModel","placeholder","ngModelChange"],[1,"commentBtns"],["disabled","","color","success",3,"click"],[3,"click"],[1,"savedComments"],["button","",3,"click",4,"ngFor","ngForOf"],["cdkDrag","",3,"click"],[1,"avatar","avatarMargin",3,"candidate"],["class","avatar",3,"candidate",4,"cdkDragPreview"],["class","avatar",3,"candidate",4,"cdkDragPlaceholder"],[1,"avatar",3,"candidate"],["button","",3,"click"]],template:function(t,e){1&t&&(m.Nb(0,"ion-header"),m.Nb(1,"ion-toolbar"),m.Nb(2,"ion-buttons",0),m.Jb(3,"ion-menu-button"),m.Mb(),m.Nb(4,"ion-buttons",1),m.Jb(5,"ion-back-button",2),m.Mb(),m.Nb(6,"ion-title"),m.pc(7),m.Mb(),m.Mb(),m.Mb(),m.Nb(8,"ion-content"),m.Nb(9,"div",3),m.Nb(10,"ion-list",4),m.Vb("cdkDropListDropped",(function(t){return e.dropCandidates(t)})),m.nc(11,D,4,3,"ion-item",5),m.Mb(),m.Nb(12,"div",6),m.Nb(13,"ion-textarea",7),m.Vb("ngModelChange",(function(t){return e.comment=t})),m.Mb(),m.Nb(14,"div",8),m.Nb(15,"ion-button",9),m.Vb("click",(function(){return e.addSavedComment()})),m.pc(16),m.Mb(),m.Nb(17,"ion-button",10),m.Vb("click",(function(){return e.createComment()})),m.pc(18),m.Mb(),m.Mb(),m.Nb(19,"div",11),m.Nb(20,"ion-list"),m.nc(21,M,4,1,"ion-item",12),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb()),2&t&&(m.yb(6),m.mc("direction",e.langProvider.LangDirection),m.yb(1),m.qc(e.title),m.yb(3),m.dc("cdkDropListData",e.candidates),m.yb(1),m.dc("ngForOf",e.candidates),m.yb(2),m.mc("direction",e.langProvider.LangDirection),m.dc("ngModel",e.comment)("placeholder",e.langProvider.CreateComment),m.yb(3),m.qc(e.langProvider.CreateSavedComment),m.yb(2),m.qc(e.langProvider.CreateComment),m.yb(2),m.mc("direction",e.langProvider.LangDirection),m.yb(1),m.dc("ngForOf",e.savedComments))},directives:[o.s,o.Z,o.k,o.F,o.g,o.h,o.X,o.n,u.e,o.D,u.d,i.l,o.W,o.lb,a.d,a.g,o.j,o.w,u.a,f.a,u.c,u.b,o.C],styles:["ion-content[_ngcontent-%COMP%]{--overflow:hidden}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{height:100%;width:auto;overflow:scroll;min-width:var(--avatar-empty-width)}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.avatarComment[_ngcontent-%COMP%]{height:2rem;width:2rem}.commentArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;justify-content:flex-start;flex:1}.commentText[_ngcontent-%COMP%]{color:var(--ion-color-dark);max-height:20%}.candidateSelected[_ngcontent-%COMP%]{background:#f08080}.commentBtns[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.closeBtn[_ngcontent-%COMP%]{margin-left:auto;--background:transparent;--color:var(--ion-color-dark)}.savedComments[_ngcontent-%COMP%]{overflow:scroll}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=m.Gb({type:t}),t.\u0275inj=m.Fb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(y)],s.h]}),t})();var w=n("ajeZ");let N=(()=>{class t{}return t.\u0275mod=m.Gb({type:t}),t.\u0275inj=m.Fb({factory:function(e){return new(e||t)},imports:[[i.c,a.a,o.bb,P,w.a,u.f]]}),t})()}}]);