(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{F4UR:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginPageModule",(function(){return h}));var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),a=t("tyNb"),s=t("mrSG"),l=t("Mxx3"),d=t("fXoL"),c=t("EFyh"),b=t("VYsW"),g=t("L5fO");const u=[{path:"",component:(()=>{class e{constructor(e,n,t,o,i,r){this.router=e,this.activatedRoute=n,this.loadingController=t,this.loginService=o,this.appContext=i,this.langProvider=r}ngOnInit(){this.user=localStorage.getItem(l.a.KwakUser),this.pass=localStorage.getItem(l.a.KwakPass)}ionViewWillEnter(){console.log(this.activatedRoute.snapshot.queryParams.retUrl)}login(){return Object(s.a)(this,void 0,void 0,(function*(){this.loginService.checkLogin({})&&(this.appContext.setAppContext({user:this.user,pass:this.pass,activationCode:this.activationCode}),yield this.LoadCatalog(),this.router.navigate([""],{replaceUrl:!0}))}))}LoadCatalog(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.loadingController.create({message:this.langProvider.LoadingCatalog,duration:1e3});yield e.present(),yield e.onDidDismiss(),console.log("Loading dismissed!")}))}}return e.\u0275fac=function(n){return new(n||e)(d.Ib(a.f),d.Ib(a.a),d.Ib(r.Cb),d.Ib(c.a),d.Ib(b.a),d.Ib(g.b))},e.\u0275cmp=d.Cb({type:e,selectors:[["app-login"]],decls:17,vars:7,consts:[["padding",""],[1,"lform",3,"ngSubmit"],["form","ngForm"],["justify-content-center",""],["align-self-center","","size-md","6","size-lg","5","size-xs","12"],["text-center",""],["name","email","type","email","required","",3,"placeholder","ngModel","ngModelChange"],["name","password","type","password","required","",3,"placeholder","ngModel","ngModelChange"],["name","code","type","text","required","",3,"placeholder","ngModel","ngModelChange"],["size","large","type","submit","expand","block",3,"disabled"]],template:function(e,n){if(1&e&&(d.Nb(0,"ion-content",0),d.Nb(1,"form",1,2),d.Vb("ngSubmit",(function(){return n.login()})),d.Nb(3,"ion-grid"),d.Nb(4,"ion-row",3),d.Nb(5,"ion-col",4),d.Jb(6,"div",5),d.Nb(7,"div",0),d.Nb(8,"ion-item"),d.Nb(9,"ion-input",6),d.Vb("ngModelChange",(function(e){return n.user=e})),d.Mb(),d.Mb(),d.Nb(10,"ion-item"),d.Nb(11,"ion-input",7),d.Vb("ngModelChange",(function(e){return n.pass=e})),d.Mb(),d.Mb(),d.Nb(12,"ion-item"),d.Nb(13,"ion-input",8),d.Vb("ngModelChange",(function(e){return n.activationCode=e})),d.Mb(),d.Mb(),d.Mb(),d.Nb(14,"div",0),d.Nb(15,"ion-button",9),d.qc(16,"Login"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e){const e=d.hc(2);d.yb(9),d.dc("placeholder",n.langProvider.LoginUser)("ngModel",n.user),d.yb(2),d.dc("placeholder",n.langProvider.LoginPass)("ngModel",n.pass),d.yb(2),d.dc("placeholder",n.langProvider.LoginActivationCode)("ngModel",n.activationCode),d.yb(2),d.dc("disabled",e.invalid)}},directives:[r.u,i.x,i.k,i.l,r.A,r.gb,r.t,r.H,r.G,r.Nb,i.t,i.j,i.m,r.k],styles:[".lform[_ngcontent-%COMP%]{margin-top:20%}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(n){return new(n||e)},imports:[[a.j.forChild(u)],a.j]}),e})(),h=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(n){return new(n||e)},imports:[[o.c,i.e,r.Bb,p]]}),e})()}}]);