(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{nHoA:function(n,t,e){"use strict";e.r(t),e.d(t,"CommentsPageModule",(function(){return X}));var i=e("ofXK"),o=e("3Pt+"),c=e("TEn/"),a=e("tyNb"),s=e("mrSG"),r=e("kLqA"),b=e("fXoL"),m=e("ufmx"),l=e("nbnm"),d=e("nTzd"),u=e("zrcv"),h=e("L5fO"),f=e("3LWr"),g=e("5+WD"),p=e("g1yl");function y(n,t){if(1&n){const n=b.Ob();b.Nb(0,"ion-button",11),b.Vb("click",(function(){return b.ic(n),b.Xb(2).showSearchbar(!0)})),b.Jb(1,"ion-icon",13),b.Mb()}}function C(n,t){if(1&n){const n=b.Ob();b.Lb(0),b.Nb(1,"ion-buttons",8),b.Jb(2,"ion-menu-button"),b.Mb(),b.Nb(3,"ion-buttons",9),b.nc(4,y,2,0,"ion-button",10),b.Nb(5,"ion-button",11),b.Vb("click",(function(){return b.ic(n),b.Xb().showCommentsFilters()})),b.Jb(6,"ion-icon",12),b.Mb(),b.Mb(),b.Nb(7,"ion-title"),b.pc(8),b.Mb(),b.Kb()}if(2&n){const n=b.Xb();b.yb(4),b.dc("ngIf",!n.isShowSearchbar),b.yb(3),b.mc("direction",n.langProvider.LangDirection),b.yb(1),b.rc(" ",n.langProvider.Comments," ")}}function v(n,t){if(1&n){const n=b.Ob();b.Nb(0,"ion-searchbar",14),b.Vb("ngModelChange",(function(t){return b.ic(n),b.Xb().searchCommentsStr=t}))("ionChange",(function(){return b.ic(n),b.Xb().updateComments()}))("ionCancel",(function(){return b.ic(n),b.Xb().showSearchbar(!1)})),b.Mb()}if(2&n){const n=b.Xb();b.dc("ngModel",n.searchCommentsStr)}}function M(n,t){if(1&n&&(b.Nb(0,"span"),b.pc(1),b.Mb()),2&n){const n=b.Xb().$implicit;b.yb(1),b.qc(n.TaskDescRef.description)}}function w(n,t){if(1&n&&(b.Nb(0,"span"),b.pc(1),b.Mb()),2&n){const n=b.Xb(2);b.yb(1),b.qc(n.langProvider.GeneralComment)}}function k(n,t){1&n&&b.Jb(0,"app-candidate-avatar",24),2&n&&b.dc("candidate",t.$implicit)}function I(n,t){if(1&n&&(b.Nb(0,"div",22),b.nc(1,k,1,1,"app-candidate-avatar",23),b.Mb()),2&n){const n=b.Xb().$implicit,t=b.Xb();b.yb(1),b.dc("ngForOf",n.candidates)("ngForTrackBy",t.trackByFn)}}function N(n,t){if(1&n){const n=b.Ob();b.Nb(0,"div"),b.Nb(1,"ion-item",15),b.Vb("click",(function(){b.ic(n);const e=t.$implicit;return b.Xb().editComment(e)})),b.Nb(2,"ion-label"),b.Nb(3,"div",16),b.pc(4),b.Yb(5,"date"),b.Mb(),b.Nb(6,"div",17),b.nc(7,M,2,1,"span",18),b.nc(8,w,2,1,"ng-template",null,19,b.oc),b.Mb(),b.Nb(10,"span",20),b.pc(11),b.Mb(),b.nc(12,I,2,2,"div",21),b.Mb(),b.Mb(),b.Mb()}if(2&n){const n=t.$implicit,e=b.hc(9),i=b.Xb();b.yb(2),b.mc("direction",i.langProvider.LangDirection),b.yb(2),b.rc(" ",b.ac(5,7,n.date,"dd/MM/yy HH:mm:ss")," "),b.yb(3),b.dc("ngIf",n.TaskDescRef)("ngIfElse",e),b.yb(4),b.qc(null==n?null:n.comment),b.yb(1),b.dc("ngIf",null==n?null:n.candidates)}}const O=[{path:"",component:(()=>{class n{constructor(n,t,e,i,o,c,a){this.router=n,this.candidatesDelegator=t,this.entityNamer=e,this.tasksDelegator=i,this.msgService=o,this.langProvider=c,this.store=a,this.comments=[],this.subscription={},this.isInit=!1}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){this.subscription.lastCommentsChangeDateTime=this.store.lastCommentsChangeDateTime.subscribe(n=>Object(s.a)(this,void 0,void 0,(function*(){let n;try{n=yield this.msgService.showLoader(),this.candidates=yield this.candidatesDelegator.getCandidatesCopy(),this.comments=yield this.tasksDelegator.loadComments()}finally{n.dismiss()}}))),this.candidates=yield this.candidatesDelegator.getCandidatesCopy(),this.isInit=!0}))}ngOnDestroy(){for(const n in this.subscription)Object.prototype.hasOwnProperty.call(this.subscription,n)&&this.subscription[n].unsubscribe()}ngAfterViewInit(){return Object(s.a)(this,void 0,void 0,(function*(){}))}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,(function*(){}))}ionViewWillLeave(){return Object(s.a)(this,void 0,void 0,(function*(){}))}createComment(){this.router.navigate(["tabs/comments/create-comment"],{skipLocationChange:!0})}showSearchbar(n){this.isShowSearchbar=n}editComment(n){const t={id:r.Guid.raw(),data:n};this.store.editComment.next(t),this.router.navigate(["tabs/comments/create-comment",{Navigate:t.id}],{skipLocationChange:!0})}showCommentsFilters(){}updateComments(){}trackByFn(n,t){return t?t._id:n}}return n.\u0275fac=function(t){return new(t||n)(b.Ib(a.f),b.Ib(m.a),b.Ib(l.a),b.Ib(d.a),b.Ib(u.a),b.Ib(h.b),b.Ib(f.a))},n.\u0275cmp=b.Cb({type:n,selectors:[["app-comments"]],decls:10,vars:4,consts:[[4,"ngIf"],["class","searchbar","showCancelButton","always",3,"ngModel","ngModelChange","ionChange","ionCancel",4,"ngIf"],[1,"container"],["approxItemHeight","135px",3,"items","trackBy"],[4,"virtualItem"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".container"],["color","primary",3,"click"],["name","chatbox-ellipses"],["slot","start"],["slot","end"],[3,"click",4,"ngIf"],[3,"click"],["slot","icon-only","name","options"],["slot","icon-only","name","search"],["showCancelButton","always",1,"searchbar",3,"ngModel","ngModelChange","ionChange","ionCancel"],["button","",3,"click"],[1,"commentDate"],[1,"commentTask"],[4,"ngIf","ngIfElse"],["elseNoTaskDesk",""],[1,"commentTxt"],["class","commentCandidates",4,"ngIf"],[1,"commentCandidates"],["class","avatarComment",3,"candidate",4,"ngFor","ngForOf","ngForTrackBy"],[1,"avatarComment",3,"candidate"]],template:function(n,t){1&n&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.nc(2,C,9,4,"ng-container",0),b.nc(3,v,1,1,"ion-searchbar",1),b.Mb(),b.Mb(),b.Nb(4,"ion-content",2),b.Nb(5,"ion-virtual-scroll",3),b.nc(6,N,13,10,"div",4),b.Mb(),b.Nb(7,"ion-fab",5),b.Nb(8,"ion-fab-button",6),b.Vb("click",(function(){return t.createComment()})),b.Jb(9,"ion-icon",7),b.Mb(),b.Mb(),b.Mb()),2&n&&(b.yb(2),b.dc("ngIf",!t.isShowSearchbar),b.yb(1),b.dc("ngIf",t.isShowSearchbar),b.yb(2),b.dc("items",t.comments)("trackBy",t.trackByFn))},directives:[c.r,c.Y,i.m,c.n,c.Z,c.lb,c.o,g.a,c.p,c.s,c.k,c.E,c.j,c.W,c.M,c.jb,o.d,o.g,c.v,c.B,i.l,p.a],pipes:[i.e],styles:[".avatarComment[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:.5rem .2rem 0}.commentCandidates[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.commentDate[_ngcontent-%COMP%]{font-size:.7rem;margin-bottom:.2rem;display:flex;justify-content:flex-end;color:var(--ion-color-medium)}.commentTxt[_ngcontent-%COMP%]{white-space:normal}.commentTask[_ngcontent-%COMP%]{margin-bottom:.2rem;color:var(--ion-color-tertiary)}"]}),n})()}];let D=(()=>{class n{}return n.\u0275mod=b.Gb({type:n}),n.\u0275inj=b.Fb({factory:function(t){return new(t||n)},imports:[[a.h.forChild(O)],a.h]}),n})();var S=e("ajeZ");let X=(()=>{class n{}return n.\u0275mod=b.Gb({type:n}),n.\u0275inj=b.Fb({factory:function(t){return new(t||n)},imports:[[i.c,o.a,c.ab,D,g.f,S.a]]}),n})()}}]);