(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LTzM:function(t,e,n){"use strict";n.r(e),n.d(e,"CreateCommentPageModule",(function(){return N}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),d=n("mrSG"),c=n("OZ4V"),r=n("Mxx3"),m=n("fXoL"),l=n("NrBX"),h=n("nTzd"),b=n("ufmx"),v=n("zrcv"),g=n("L5fO"),C=n("3LWr"),u=n("5+WD"),f=n("g1yl");function p(t,e){1&t&&m.Jb(0,"app-candidate-avatar",17),2&t&&m.dc("candidate",e.$implicit.value)}function y(t,e){if(1&t){const t=m.Ob();m.Nb(0,"ion-item-options",25),m.Nb(1,"ion-item-option",26),m.Vb("click",(function(){m.ic(t);const e=m.Xb().$implicit;return m.Xb(2).onDeleteSavedComment(e)})),m.Jb(2,"ion-icon",27),m.Mb(),m.Mb()}}function k(t,e){1&t&&(m.Nb(0,"span"),m.qc(1,"*"),m.Mb())}function M(t,e){if(1&t){const t=m.Ob();m.Nb(0,"ion-item-sliding",null,20),m.oc(2,y,3,0,"ion-item-options",21),m.Nb(3,"ion-item",22),m.Vb("click",(function(){m.ic(t);const n=e.$implicit;return m.Xb(2).savedCommentSelected(n)})),m.Nb(4,"ion-label"),m.oc(5,k,2,0,"span",23),m.Nb(6,"span",24),m.qc(7),m.Mb(),m.Mb(),m.Mb(),m.Mb()}if(2&t){const t=e.$implicit,n=m.Xb(2);m.yb(2),m.dc("ngIf",t._id),m.yb(1),m.nc("direction",n.langProvider.LangDirection),m.yb(2),m.dc("ngIf",!t._id),m.yb(2),m.rc(t.comment)}}function O(t,e){if(1&t&&(m.Nb(0,"div",18),m.Nb(1,"ion-list"),m.oc(2,M,8,5,"ion-item-sliding",19),m.Mb(),m.Mb()),2&t){const t=m.Xb();m.yb(2),m.dc("ngForOf",t.savedComments)}}const P=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,a,s,d,c,m){this.navCtrl=t,this.modalCtrl=e,this.route=n,this.router=i,this.tasksDelegator=o,this.tasksCommentsDelegator=a,this.candidatesDelegator=s,this.msgService=d,this.langProvider=c,this.store=m,this.selectedCandidates={},this.dragDelay=r.a.DragDelay,this.title=this.langProvider.GeneralComment,this.isInit=!1}ngOnInit(){var t,e,n;return Object(d.a)(this,void 0,void 0,(function*(){this.candidates=yield this.candidatesDelegator.getCandidatesCopy(!0),this.savedComments=yield this.tasksCommentsDelegator.loadSavedComments();const i=this.route.snapshot.paramMap.get(r.a.TaskDescId);i&&(this.taskDescRef=yield this.tasksDelegator.getTaskDesk(i),this.taskConfigRef=yield this.tasksDelegator.getTasksConfig(i),this.title=this.taskDescRef.description,this.savedComments=[...null!==(t=this.taskConfigRef.comments)&&void 0!==t?t:[],...null!==(e=this.savedComments)&&void 0!==e?e:[]]);const o=this.route.snapshot.paramMap.get(r.a.Navigate);o&&this.store.editComment.value.id===o&&(this.editedComment=this.store.editComment.value.data,this.editedComment&&(this.comment=this.editedComment.comment,this.editedComment.candidates.forEach(t=>this.selectedCandidates[t._id]=t),this.taskDescRef=this.editedComment.TaskDescRef,this.title=null===(n=this.editedComment.TaskDescRef)||void 0===n?void 0:n.description)),this.isInit=!0}))}ngOnDestroy(){}selectCandidate(t){this.selectedCandidates[t._id]=this.selectedCandidates[t._id]?null:t}createComment(){var t,e;return Object(d.a)(this,void 0,void 0,(function*(){this.editedComment&&(yield this.tasksCommentsDelegator.deleteComments(this.editedComment.SavedComments));const n=Object.keys(this.selectedCandidates).filter(t=>this.selectedCandidates[t]).map(t=>this.selectedCandidates[t]);if(0===n.length)this.msgService.showToast(this.langProvider.NoneSelectedCandidates,1e3,"toastWarn");else if(null===(t=this.comment)||void 0===t?void 0:t.trim()){const t={candidates:n,comment:this.comment,TaskDescRef:this.taskDescRef,date:null===(e=this.editedComment)||void 0===e?void 0:e.date},i=yield this.tasksCommentsDelegator.createComment(t);if(this.store.lastCommentsChangeDateTime.next(i[0].date),this.msgService.showToast(this.langProvider.CommentSaved+"..."),this.taskDescRef){const t=this.store.lastTaskNavData;yield this.router.navigate([t.value.Path,t.value.Params],t.value.NavigationExtras)}else yield this.router.navigate(["tabs/comments"],{skipLocationChange:!0})}else this.msgService.showToast(this.langProvider.EmptyComment,1e3,"toastWarn")}))}addSavedComment(){var t;return Object(d.a)(this,void 0,void 0,(function*(){if(null===(t=this.comment)||void 0===t?void 0:t.trim()){const t={comment:this.comment.trim()},e=yield this.tasksCommentsDelegator.createSavedComment(t);this.savedComments.push(e),this.msgService.showToast(this.langProvider.SavedCommentAdded),this.comment=""}else this.msgService.showToast(this.langProvider.EmptyComment,1e3,"toastWarn")}))}onDeleteSavedComment(t){return Object(d.a)(this,void 0,void 0,(function*(){yield this.tasksCommentsDelegator.deleteSavedComment(t),this.savedComments=this.savedComments.filter(e=>{var n;return(null===(n=e)||void 0===n?void 0:n._id)!==t._id})}))}savedCommentSelected(t){this.comment=`${this.comment?this.comment+"\n":""}${t.comment}`}selectCandidates(){return Object(d.a)(this,void 0,void 0,(function*(){const t={};Object.keys(this.selectedCandidates).forEach(e=>t[this.selectedCandidates[e]._id]=!0);const e=yield this.modalCtrl.create({component:c.a,componentProps:{candidates:this.candidates,selectedCandidates:t,isModal:!0}});yield e.present();const n=yield e.onWillDismiss();if(n.data){const t=Object.keys(n.data).filter(t=>n.data[t]);this.selectedCandidates=yield this.candidatesDelegator.getCandidatesByIdsMap(t)}}))}trackByFn(t,e){return(null==e?void 0:e.value)?e.value._id:t}back(t){var e;return Object(d.a)(this,void 0,void 0,(function*(){(null===(e=this.comment)||void 0===e?void 0:e.trim())?(yield this.msgService.showAreYouSure(this.langProvider.CommentNotSaved))&&this.navCtrl.back():this.navCtrl.back()}))}}return t.\u0275fac=function(e){return new(e||t)(m.Ib(a.Fb),m.Ib(a.Eb),m.Ib(s.a),m.Ib(s.f),m.Ib(l.a),m.Ib(h.a),m.Ib(b.a),m.Ib(v.a),m.Ib(g.b),m.Ib(C.a))},t.\u0275cmp=m.Cb({type:t,selectors:[["app-create-comment"]],decls:26,vars:17,consts:[["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"],["cdkDropListGroup","",1,"container"],[1,"commentArea"],["autocomplete","on","rows","5",1,"commentText",3,"ngModel","placeholder","ngModelChange"],[1,"selectedCandidates"],["class","candi",3,"candidate",4,"ngFor","ngForOf","ngForTrackBy"],[1,"commentBtns"],["color","secondary",1,"sendBtn",3,"click"],["name","send"],["color","secondary",1,"saveCommentBtn",3,"click"],["name","save"],["color","primary",1,"selectCandidatesBtn",3,"click"],["name","people"],["class","savedComments",4,"ngIf"],[1,"candi",3,"candidate"],[1,"savedComments"],[4,"ngFor","ngForOf"],["slide",""],["side","end",4,"ngIf"],["button","",3,"click"],[4,"ngIf"],[1,"savedComment"],["side","end"],["color","light",3,"click"],["name","trash","color","danger",1,"htBtn"]],template:function(t,e){1&t&&(m.Nb(0,"ion-header"),m.Nb(1,"ion-toolbar"),m.Nb(2,"ion-buttons",0),m.Jb(3,"ion-menu-button"),m.Mb(),m.Nb(4,"ion-buttons",1),m.Nb(5,"ion-button",2),m.Vb("click",(function(t){return e.back(t)})),m.Jb(6,"ion-icon",3),m.Mb(),m.Mb(),m.Nb(7,"ion-title"),m.qc(8),m.Mb(),m.Mb(),m.Mb(),m.Nb(9,"ion-content"),m.Nb(10,"div",4),m.Nb(11,"div",5),m.Nb(12,"ion-textarea",6),m.Vb("ngModelChange",(function(t){return e.comment=t})),m.Mb(),m.Nb(13,"div",7),m.oc(14,p,1,1,"app-candidate-avatar",8),m.Yb(15,"keyvalue"),m.Mb(),m.Nb(16,"div",9),m.Nb(17,"ion-fab-button",10),m.Vb("click",(function(){return e.createComment()})),m.Jb(18,"ion-icon",11),m.Mb(),m.Nb(19,"ion-fab-button",12),m.Vb("click",(function(){return e.addSavedComment()})),m.Jb(20,"ion-icon",13),m.Mb(),m.Nb(21,"ion-fab-button",14),m.Vb("click",(function(){return e.selectCandidates()})),m.Jb(22,"ion-icon",15),m.Mb(),m.Mb(),m.Nb(23,"h3"),m.qc(24),m.Mb(),m.oc(25,O,3,1,"div",16),m.Mb(),m.Mb(),m.Mb()),2&t&&(m.yb(7),m.nc("direction",e.langProvider.LangDirection),m.yb(1),m.rc(e.title),m.yb(4),m.nc("direction",e.langProvider.LangDirection),m.dc("ngModel",e.comment)("placeholder",e.langProvider.CreateComment),m.yb(1),m.nc("direction",e.langProvider.LangDirection),m.yb(1),m.dc("ngForOf",m.Zb(15,15,e.selectedCandidates))("ngForTrackBy",e.trackByFn),m.yb(9),m.nc("direction",e.langProvider.LangDirection),m.yb(1),m.rc(e.langProvider.SavedComments),m.yb(1),m.dc("ngIf",(null==e.savedComments?null:e.savedComments.length)>0))},directives:[a.B,a.zb,a.l,a.R,a.k,a.C,a.xb,a.u,u.f,a.vb,a.Nb,o.j,o.m,i.s,a.x,i.t,f.a,a.O,a.M,a.H,a.N,a.L,a.K],pipes:[i.l],styles:["ion-content[_ngcontent-%COMP%]{--overflow:hidden}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;width:100%}.candidates[_ngcontent-%COMP%]{height:100%;width:auto;overflow:scroll;min-width:var(--avatar-empty-width)}.avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.avatarMargin[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.avatarComment[_ngcontent-%COMP%]{height:2rem;width:2rem}.commentArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;justify-content:flex-start;flex:1}.commentText[_ngcontent-%COMP%]{color:var(--ion-color-dark);max-height:20%}.commentBtns[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:.3rem;min-height:auto}.closeBtn[_ngcontent-%COMP%]{margin-left:auto;--background:transparent;--color:var(--ion-color-dark)}.savedComments[_ngcontent-%COMP%]{overflow:scroll;width:100%}.savedComment[_ngcontent-%COMP%]{white-space:normal}.selectedCandidates[_ngcontent-%COMP%]{display:flex;width:100%;flex-wrap:wrap;overflow:scroll;max-height:5rem}.selectCandidatesBtn[_ngcontent-%COMP%]{margin:.5rem .5rem .5rem auto}.sendBtn[_ngcontent-%COMP%]{transform:rotate(180deg)}.saveCommentBtn[_ngcontent-%COMP%], .sendBtn[_ngcontent-%COMP%]{margin:.5rem}.candi[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:.2rem}.htBtn[_ngcontent-%COMP%]{font-size:x-large}"]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=m.Gb({type:t}),t.\u0275inj=m.Fb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(P)],s.j]}),t})();var w=n("ajeZ");let N=(()=>{class t{}return t.\u0275mod=m.Gb({type:t}),t.\u0275inj=m.Fb({factory:function(e){return new(e||t)},imports:[[i.c,o.e,a.Bb,D,w.a,u.g]]}),t})()}}]);