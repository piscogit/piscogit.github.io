(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{hO9l:function(e,t,n){"use strict";n.r(t),n.d(t,"TabsPageModule",(function(){return f}));var a=n("TEn/"),l=n("ofXK"),o=n("3Pt+"),i=n("tyNb"),r=n("Mxx3"),c=n("fXoL"),s=n("EFyh");let b=(()=>{class e{constructor(e,t){this.router=e,this.loginService=t}canActivate(e,t){let n;return n=!!localStorage.getItem(r.a.KwakActivationCode)||this.router.createUrlTree(["activation-code"],{replaceUrl:!0,queryParams:{retUrl:t.url}}),n}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(i.f),c.Rb(s.a))},e.\u0275prov=c.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=n("3LWr");let h=(()=>{class e{constructor(e,t){this.router=e,this.store=t}navigate(e,t){const n=this.store.tabsChildRoutes.value[e];n&&(e=`${e}/${n}`),(t=null!=t?t:{}).replaceUrl=!0,this.router.navigate([e],t)}navigateChild(e,t,n){this.store.tabsChildRoutes.value[e]=t;const a=`${e}/${t}`;(n=null!=n?n:{}).replaceUrl=!0,this.router.navigate([a],n)}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(i.f),c.Rb(d.a))},e.\u0275prov=c.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=n("L5fO");function p(e,t){if(1&e){const e=c.Ob();c.Nb(0,"ion-tabs",1),c.Vb("ionTabsWillChange",(function(){return c.ic(e),c.Xb().tabsChange()})),c.Nb(1,"ion-tab-bar",2,3),c.Nb(3,"ion-tab-button",4,5),c.Vb("click",(function(t){c.ic(e);const n=c.hc(4);return c.Xb().tabSelected(t,n)})),c.Jb(5,"ion-icon",6),c.Nb(6,"ion-label"),c.pc(7),c.Mb(),c.Mb(),c.Nb(8,"ion-tab-button",7,8),c.Vb("click",(function(t){c.ic(e);const n=c.hc(9);return c.Xb().tabSelected(t,n)})),c.Jb(10,"ion-icon",9),c.Nb(11,"ion-label"),c.pc(12),c.Mb(),c.Mb(),c.Nb(13,"ion-tab-button",10,11),c.Vb("click",(function(t){c.ic(e);const n=c.hc(14);return c.Xb().tabSelected(t,n)})),c.Jb(15,"ion-icon",12),c.Nb(16,"ion-label"),c.pc(17),c.Mb(),c.Mb(),c.Nb(18,"ion-tab-button",13,14),c.Vb("click",(function(t){c.ic(e);const n=c.hc(19);return c.Xb().tabSelected(t,n)})),c.Jb(20,"ion-icon",15),c.Nb(21,"ion-label"),c.pc(22),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&e){const e=c.Xb();c.yb(7),c.qc(e.langProvider.Candidates),c.yb(5),c.qc(e.langProvider.Catalog),c.yb(5),c.qc(e.langProvider.Tasks),c.yb(5),c.qc(e.langProvider.Comments)}}const m=[{path:"tabs",component:(()=>{class e{constructor(e,t,n,a){this.navigateService=e,this.router=t,this.store=n,this.langProvider=a,this.subscription={}}ngOnInit(){this.subscription.selectTab=this.store.selectTab.subscribe(e=>{this.tabs.select(e)})}ngOnDestroy(){for(const e in this.subscription)Object.prototype.hasOwnProperty.call(this.subscription,e)&&this.subscription[e].unsubscribe()}ngAfterViewInit(){}tabsChange(){}tabSelected(e,t){console.log()}temp(){}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(h),c.Ib(i.f),c.Ib(d.a),c.Ib(u.b))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-tabs"]],viewQuery:function(e,t){var n;1&e&&(c.vc(a.V,!0),c.vc(a.U,!0)),2&e&&(c.gc(n=c.Wb())&&(t.tabs=n.first),c.gc(n=c.Wb())&&(t.tabBtns=n))},decls:2,vars:3,consts:[[3,"ionTabsWillChange",4,"ngIf"],[3,"ionTabsWillChange"],["slot","bottom"],["tabBar",""],["tab","candidates",3,"click"],["candidatesBtn",""],["name","people"],["tab","task-catalog",3,"click"],["catalogBtn",""],["name","briefcase"],["tab","tasks",3,"click"],["tasksBtn",""],["name","grid"],["tab","comments",3,"click"],["commentsBtn",""],["name","pencil"]],template:function(e,t){1&e&&(c.nc(0,p,23,4,"ion-tabs",0),c.Yb(1,"async")),2&e&&c.dc("ngIf",c.Zb(1,1,t.store.isAfterSetup))},directives:[l.m,a.V,a.T,a.U,a.t,a.C],pipes:[l.b],styles:[""]}),e})(),canActivate:[b],children:[{path:"candidates",children:[{path:"",loadChildren:()=>Promise.all([n.e(1),n.e(9)]).then(n.bind(null,"5Ma4")).then(e=>e.CandidtesPageModule)},{path:"candidate-details/:candidateId",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(0),n.e(8)]).then(n.bind(null,"elZC")).then(e=>e.CandidateDetailsPageModule)},{path:"create-comment",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,"LTzM")).then(e=>e.CreateCommentPageModule)}]},{path:"task-catalog",loadChildren:()=>n.e(7).then(n.bind(null,"m/R5")).then(e=>e.TaskCatalogPageModule)},{path:"tasks",children:[{path:"",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(0),n.e(13)]).then(n.bind(null,"OrUu")).then(e=>e.TasksHistoryPageModule)},{path:"task-host",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(0),n.e(26)]).then(n.bind(null,"9O2a")).then(e=>e.TaskHostPageModule)},{path:"baskets",loadChildren:()=>Promise.all([n.e(1),n.e(2)]).then(n.bind(null,"bFAM")).then(e=>e.BasketsPageModule)},{path:"forms",loadChildren:()=>Promise.all([n.e(3),n.e(22)]).then(n.bind(null,"Nog+")).then(e=>e.FormsPageModule)},{path:"ordered",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(4),n.e(27)]).then(n.bind(null,"X1aV")).then(e=>e.Ordered2PageModule)},{path:"create-comment",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,"LTzM")).then(e=>e.CreateCommentPageModule)}]},{path:"comments",children:[{path:"",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(10)]).then(n.bind(null,"nHoA")).then(e=>e.CommentsPageModule)},{path:"create-comment",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,"LTzM")).then(e=>e.CreateCommentPageModule)}]},{path:"tab2",loadChildren:()=>Promise.all([n.e(0),n.e(28)]).then(n.bind(null,"TUkU")).then(e=>e.Tab2PageModule)},{path:"tab3",loadChildren:()=>Promise.all([n.e(0),n.e(29)]).then(n.bind(null,"k+ul")).then(e=>e.Tab3PageModule)},{path:"orderedKeyboard",loadChildren:()=>n.e(11).then(n.bind(null,"/i5F")).then(e=>e.OrderedPageModule)},{path:"login",loadChildren:()=>n.e(25).then(n.bind(null,"F4UR")).then(e=>e.LoginPageModule)},{path:"pouchdb-play",loadChildren:()=>n.e(12).then(n.bind(null,"x5Jj")).then(e=>e.PouchbPlayPageModule)},{path:"",redirectTo:"/tabs/candidates",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/candidates",pathMatch:"full"}];let g=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[i.h.forChild(m)],i.h]}),e})(),f=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[a.bb,l.c,o.a,g]]}),e})()}}]);