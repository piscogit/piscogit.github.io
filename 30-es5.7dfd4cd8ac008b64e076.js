!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{hO9l:function(n,a,i){"use strict";i.r(a),i.d(a,"TabsPageModule",(function(){return T}));var r,o,l=i("TEn/"),c=i("ofXK"),u=i("3Pt+"),b=i("tyNb"),s=i("Mxx3"),d=i("fXoL"),h=i("EFyh"),f=((r=function(){function n(t,a){e(this,n),this.router=t,this.loginService=a}return t(n,[{key:"canActivate",value:function(e,n){return this.loginService.setAppContext({user:"kwak",activationCode:"cfrogs"}),!!localStorage.getItem(s.a.KwakActivationCode)||this.router.createUrlTree(["activation-code"],{replaceUrl:!0,queryParams:{retUrl:n.url}})}}]),n}()).\u0275fac=function(e){return new(e||r)(d.Rb(b.f),d.Rb(h.a))},r.\u0275prov=d.Eb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),p=i("3LWr"),g=((o=function(){function n(t,a){e(this,n),this.router=t,this.store=a}return t(n,[{key:"navigate",value:function(e,n){var t=this.store.tabsChildRoutes.value[e];t&&(e="".concat(e,"/").concat(t)),(n=null!=n?n:{}).replaceUrl=!0,this.router.navigate([e],n)}},{key:"navigateChild",value:function(e,n,t){this.store.tabsChildRoutes.value[e]=n;var a="".concat(e,"/").concat(n);(t=null!=t?t:{}).replaceUrl=!0,this.router.navigate([a],t)}}]),n}()).\u0275fac=function(e){return new(e||o)(d.Rb(b.f),d.Rb(p.a))},o.\u0275prov=d.Eb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),m=i("L5fO");function v(e,n){if(1&e){var t=d.Ob();d.Nb(0,"ion-tabs",1),d.Vb("ionTabsWillChange",(function(){return d.ic(t),d.Xb().tabsChange()})),d.Nb(1,"ion-tab-bar",2,3),d.Nb(3,"ion-tab-button",4,5),d.Vb("click",(function(e){d.ic(t);var n=d.hc(4);return d.Xb().tabSelected(e,n)})),d.Jb(5,"ion-icon",6),d.Nb(6,"ion-label"),d.pc(7),d.Mb(),d.Mb(),d.Nb(8,"ion-tab-button",7,8),d.Vb("click",(function(e){d.ic(t);var n=d.hc(9);return d.Xb().tabSelected(e,n)})),d.Jb(10,"ion-icon",9),d.Nb(11,"ion-label"),d.pc(12),d.Mb(),d.Mb(),d.Nb(13,"ion-tab-button",10,11),d.Vb("click",(function(e){d.ic(t);var n=d.hc(14);return d.Xb().tabSelected(e,n)})),d.Jb(15,"ion-icon",12),d.Nb(16,"ion-label"),d.pc(17),d.Mb(),d.Mb(),d.Nb(18,"ion-tab-button",13,14),d.Vb("click",(function(e){d.ic(t);var n=d.hc(19);return d.Xb().tabSelected(e,n)})),d.Jb(20,"ion-icon",15),d.Nb(21,"ion-label"),d.pc(22),d.Mb(),d.Mb(),d.Mb(),d.Mb()}if(2&e){var a=d.Xb();d.yb(7),d.qc(a.langProvider.Candidates),d.yb(5),d.qc(a.langProvider.Catalog),d.yb(5),d.qc(a.langProvider.Tasks),d.yb(5),d.qc(a.langProvider.Comments)}}var C,P,k,y=[{path:"tabs",component:(C=function(){function n(t,a,i,r){e(this,n),this.navigateService=t,this.router=a,this.store=i,this.langProvider=r,this.subscription={}}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.subscription.selectTab=this.store.selectTab.subscribe((function(n){e.tabs.select(n)}))}},{key:"ngOnDestroy",value:function(){for(var e in this.subscription)Object.prototype.hasOwnProperty.call(this.subscription,e)&&this.subscription[e].unsubscribe()}},{key:"ngAfterViewInit",value:function(){}},{key:"tabsChange",value:function(){}},{key:"tabSelected",value:function(e,n){console.log()}},{key:"temp",value:function(){}}]),n}(),C.\u0275fac=function(e){return new(e||C)(d.Ib(g),d.Ib(b.f),d.Ib(p.a),d.Ib(m.b))},C.\u0275cmp=d.Cb({type:C,selectors:[["app-tabs"]],viewQuery:function(e,n){var t;1&e&&(d.vc(l.V,!0),d.vc(l.U,!0)),2&e&&(d.gc(t=d.Wb())&&(n.tabs=t.first),d.gc(t=d.Wb())&&(n.tabBtns=t))},decls:2,vars:3,consts:[[3,"ionTabsWillChange",4,"ngIf"],[3,"ionTabsWillChange"],["slot","bottom"],["tabBar",""],["tab","candidates",3,"click"],["candidatesBtn",""],["name","people"],["tab","task-catalog",3,"click"],["catalogBtn",""],["name","briefcase"],["tab","tasks",3,"click"],["tasksBtn",""],["name","grid"],["tab","comments",3,"click"],["commentsBtn",""],["name","pencil"]],template:function(e,n){1&e&&(d.nc(0,v,23,4,"ion-tabs",0),d.Yb(1,"async")),2&e&&d.dc("ngIf",d.Zb(1,1,n.store.isAfterSetup))},directives:[c.m,l.V,l.T,l.U,l.t,l.C],pipes:[c.b],styles:[""]}),C),canActivate:[f],children:[{path:"candidates",children:[{path:"",loadChildren:function(){return Promise.all([i.e(1),i.e(9)]).then(i.bind(null,"5Ma4")).then((function(e){return e.CandidtesPageModule}))}},{path:"candidate-details/:candidateId",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(0),i.e(8)]).then(i.bind(null,"elZC")).then((function(e){return e.CandidateDetailsPageModule}))}},{path:"create-comment",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(6)]).then(i.bind(null,"LTzM")).then((function(e){return e.CreateCommentPageModule}))}}]},{path:"task-catalog",loadChildren:function(){return i.e(7).then(i.bind(null,"m/R5")).then((function(e){return e.TaskCatalogPageModule}))}},{path:"tasks",children:[{path:"",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(0),i.e(13)]).then(i.bind(null,"OrUu")).then((function(e){return e.TasksHistoryPageModule}))}},{path:"task-host",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(3),i.e(4),i.e(0),i.e(26)]).then(i.bind(null,"9O2a")).then((function(e){return e.TaskHostPageModule}))}},{path:"baskets",loadChildren:function(){return Promise.all([i.e(1),i.e(2)]).then(i.bind(null,"bFAM")).then((function(e){return e.BasketsPageModule}))}},{path:"forms",loadChildren:function(){return Promise.all([i.e(3),i.e(22)]).then(i.bind(null,"Nog+")).then((function(e){return e.FormsPageModule}))}},{path:"ordered",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(4),i.e(27)]).then(i.bind(null,"X1aV")).then((function(e){return e.Ordered2PageModule}))}},{path:"create-comment",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(6)]).then(i.bind(null,"LTzM")).then((function(e){return e.CreateCommentPageModule}))}}]},{path:"comments",children:[{path:"",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(10)]).then(i.bind(null,"nHoA")).then((function(e){return e.CommentsPageModule}))}},{path:"create-comment",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(6)]).then(i.bind(null,"LTzM")).then((function(e){return e.CreateCommentPageModule}))}}]},{path:"tab2",loadChildren:function(){return Promise.all([i.e(0),i.e(28)]).then(i.bind(null,"TUkU")).then((function(e){return e.Tab2PageModule}))}},{path:"tab3",loadChildren:function(){return Promise.all([i.e(0),i.e(29)]).then(i.bind(null,"k+ul")).then((function(e){return e.Tab3PageModule}))}},{path:"orderedKeyboard",loadChildren:function(){return i.e(11).then(i.bind(null,"/i5F")).then((function(e){return e.OrderedPageModule}))}},{path:"login",loadChildren:function(){return i.e(25).then(i.bind(null,"F4UR")).then((function(e){return e.LoginPageModule}))}},{path:"pouchdb-play",loadChildren:function(){return i.e(12).then(i.bind(null,"x5Jj")).then((function(e){return e.PouchbPlayPageModule}))}},{path:"",redirectTo:"/tabs/candidates",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/candidates",pathMatch:"full"}],M=((k=function n(){e(this,n)}).\u0275mod=d.Gb({type:k}),k.\u0275inj=d.Fb({factory:function(e){return new(e||k)},imports:[[b.h.forChild(y)],b.h]}),k),T=((P=function n(){e(this,n)}).\u0275mod=d.Gb({type:P}),P.\u0275inj=d.Fb({factory:function(e){return new(e||P)},imports:[[l.bb,c.c,u.a,M]]}),P)}}])}();