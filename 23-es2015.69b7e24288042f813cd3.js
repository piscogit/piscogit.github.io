(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"8wUK":function(t,i,e){"use strict";e.r(i),e.d(i,"ActivationCodePageModule",(function(){return f}));var n=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),c=e("mrSG"),s=e("fXoL"),b=e("L5fO"),d=e("3LWr"),l=e("4UqN"),u=e("VYsW"),g=e("zrcv");function v(t,i){if(1&t){const t=s.Ob();s.Nb(0,"ion-buttons",12),s.Nb(1,"ion-button",13),s.Vb("click",(function(){return s.ic(t),s.Xb().back()})),s.Jb(2,"ion-icon",14),s.Mb(),s.Mb()}}const p=[{path:"",component:(()=>{class t{constructor(t,i,e,n,o,r,a){this.langProvider=t,this.store=i,this.route=e,this.router=n,this.setupService=o,this.appContext=r,this.msgService=a}ngOnInit(){this.isBack=this.route.snapshot.paramMap.has("change"),this.store.user.subscribe(t=>{var i;t&&!this.user&&(this.user=null!==(i=t.nickname)&&void 0!==i?i:t.email,this.user&&(this.isUserDisabled=!0))})}activate(){var t;return Object(c.a)(this,void 0,void 0,(function*(){const i=null===(t=this.activationCode)||void 0===t?void 0:t.trim();this.setupService.getActivationCodeConfig(i)?(this.appContext.setAppContext({user:this.user,activationCode:i}),this.router.navigate([""],{replaceUrl:!0})):this.msgService.showToast(this.langProvider.LoginActivationCodeNotExist,2e3,"toastWarn")}))}back(){}}return t.\u0275fac=function(i){return new(i||t)(s.Ib(b.b),s.Ib(d.a),s.Ib(a.a),s.Ib(a.f),s.Ib(l.a),s.Ib(u.a),s.Ib(g.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-activation-code"]],viewQuery:function(t,i){var e;1&t&&s.lc(r.L,!0),2&t&&s.gc(e=s.Wb())&&(i.routerOutlet=e.first)},decls:26,vars:13,consts:[["slot","end",4,"ngIf"],[1,"container"],[3,"ngSubmit"],["form","ngForm"],["justify-content-center",""],["align-self-center","","size-md","6","size-lg","5","size-xs","12"],["text-center",""],["padding",""],["position","floating"],["name","user","type","text","value","","autofocus","true","required","",3,"placeholder","disabled","ngModel","ngModelChange"],["name","activationCode","type","text","required","",3,"placeholder","ngModel","ngModelChange"],["size","large","type","submit","color","primary","expand","block",3,"disabled"],["slot","end"],[3,"click"],["slot","icon-only","name","arrow-back"]],template:function(t,i){if(1&t&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-title"),s.pc(3),s.Mb(),s.nc(4,v,3,0,"ion-buttons",0),s.Mb(),s.Mb(),s.Nb(5,"div",1),s.Nb(6,"form",2,3),s.Vb("ngSubmit",(function(){return i.activate()})),s.Nb(8,"ion-grid"),s.Nb(9,"ion-row",4),s.Nb(10,"ion-col",5),s.Jb(11,"div",6),s.Nb(12,"div",7),s.Nb(13,"ion-item"),s.Nb(14,"ion-label",8),s.Nb(15,"span"),s.pc(16),s.Mb(),s.Mb(),s.Nb(17,"ion-input",9),s.Vb("ngModelChange",(function(t){return i.user=t})),s.Mb(),s.Mb(),s.Nb(18,"ion-item"),s.Nb(19,"ion-label",8),s.Nb(20,"span"),s.pc(21),s.Mb(),s.Mb(),s.Nb(22,"ion-input",10),s.Vb("ngModelChange",(function(t){return i.activationCode=t})),s.Mb(),s.Mb(),s.Mb(),s.Nb(23,"div",7),s.Nb(24,"ion-button",11),s.pc(25),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&t){const t=s.hc(7);s.yb(2),s.mc("direction",i.langProvider.LangDirection),s.yb(1),s.qc(i.langProvider.LoginActivationCode),s.yb(1),s.dc("ngIf",i.isBack),s.yb(1),s.mc("direction",i.langProvider.LangDirection),s.yb(11),s.qc(i.langProvider.LoginUser),s.yb(1),s.dc("disabled",i.isUserDisabled)("ngModel",i.user),s.yb(4),s.qc(i.langProvider.LoginActivationCode),s.yb(1),s.dc("ngModel",i.activationCode),s.yb(2),s.dc("disabled",t.invalid),s.yb(1),s.rc(" ",i.langProvider.Activate," ")}},directives:[r.s,r.Z,r.X,n.m,o.i,o.e,o.f,r.r,r.M,r.m,r.w,r.C,r.v,r.lb,o.h,o.d,o.g,r.j,r.k,r.t],styles:[".container[_ngcontent-%COMP%]{height:100%;width:100%;margin-top:20%}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(i){return new(i||t)},imports:[[a.h.forChild(p)],a.h]}),t})(),f=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(i){return new(i||t)},imports:[[n.c,o.a,r.bb,h]]}),t})()}}]);