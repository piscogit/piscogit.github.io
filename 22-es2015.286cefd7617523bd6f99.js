(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"Nog+":function(t,a,n){"use strict";n.r(a),n.d(a,"FormsPageModule",(function(){return f}));var e=n("ofXK"),c=n("3Pt+"),i=n("TEn/"),s=n("tyNb"),r=n("ajeZ"),o=n("sHy1"),d=n("fXoL");const g=[{path:"",component:o.a}];let l=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(a){return new(a||t)},imports:[[s.h.forChild(g),r.a],s.h]}),t})(),f=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(a){return new(a||t)},imports:[[e.c,c.a,i.bb,l,r.a]]}),t})()},ajeZ:function(t,a,n){"use strict";n.d(a,"a",(function(){return r}));var e=n("ofXK"),c=n("3Pt+"),i=n("TEn/"),s=n("fXoL");let r=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(a){return new(a||t)},imports:[[e.c,c.a,i.bb]]}),t})()},g1yl:function(t,a,n){"use strict";n.d(a,"a",(function(){return I}));var e=n("fXoL"),c=n("3LWr"),i=n("ufmx"),s=n("TEn/"),r=n("ofXK");function o(t,a){if(1&t&&e.Jb(0,"img",7),2&t){const t=e.Xb(2);e.dc("src",t.candidate.ImgUrl,e.jc)}}function d(t,a){1&t&&e.Jb(0,"img",8)}function g(t,a){if(1&t&&(e.Nb(0,"span",9),e.pc(1),e.Mb()),2&t){const t=e.Xb(2);e.Ab("candidateNotActive",!1===t.candidate.isActive),e.yb(1),e.rc(" ",t.candidate.number," ")}}function l(t,a){if(1&t&&(e.Lb(0),e.nc(1,o,1,1,"img",4),e.nc(2,d,1,0,"img",5),e.nc(3,g,2,3,"span",6),e.Kb()),2&t){const t=e.Xb();e.yb(1),e.dc("ngIf",t.candidate.ImgUrl),e.yb(1),e.dc("ngIf",!t.candidate.ImgUrl),e.yb(1),e.dc("ngIf",!t.candidate.ImgUrl)}}function f(t,a){1&t&&e.Jb(0,"img",8)}function b(t,a){if(1&t&&e.Jb(0,"img",7),2&t){const t=e.Xb(2);e.dc("src",t.selectedSrc,e.jc)}}function m(t,a){if(1&t&&(e.Nb(0,"span",9),e.pc(1),e.Mb()),2&t){const t=e.Xb(2);e.Ab("candidateNotActive",!1===t.candidate.isActive),e.yb(1),e.rc(" ",t.candidate.number," ")}}function u(t,a){if(1&t&&(e.nc(0,f,1,0,"img",10),e.nc(1,b,1,1,"ng-template",null,11,e.oc),e.nc(3,m,2,3,"span",6)),2&t){const t=e.hc(2),a=e.Xb();e.dc("ngIf",!a.isSelected)("ngIfElse",t),e.yb(3),e.dc("ngIf",a.candidate)}}function v(t,a){if(1&t&&(e.Nb(0,"ion-badge",12),e.pc(1),e.Mb()),2&t){const t=e.Xb();e.yb(1),e.qc(t.total)}}let I=(()=>{class t{constructor(t,a){this.store=t,this.candidatesDelegator=a}ngOnInit(){switch(this.candidateId&&(this.candidate=this.candidatesDelegator.getCandidatesByIds([this.candidateId])[0]),this.selectedStyle){case"gray":this.selectedSrc="./assets/images/avatar3.svg";break;case"redBlue":this.selectedSrc="./assets/images/avatar2.svg";break;default:this.selectedSrc="./assets/images/avatar3.svg"}}}return t.\u0275fac=function(a){return new(a||t)(e.Ib(c.a),e.Ib(i.a))},t.\u0275cmp=e.Cb({type:t,selectors:[["app-candidate-avatar"]],inputs:{candidate:"candidate",candidateId:"candidateId",total:"total",isShowTotal:"isShowTotal",isSelected:"isSelected",selectedStyle:"selectedStyle"},decls:5,vars:3,consts:[[1,"avatar"],[4,"ngIf","ngIfElse"],["noImg",""],["class","cbadge","color","warning",4,"ngIf"],["class","avatarItem",3,"src",4,"ngIf"],["src","./assets/images/avatar.svg","class","avatarItem",4,"ngIf"],["class","avatarItem avatarTxtItem",3,"candidateNotActive",4,"ngIf"],[1,"avatarItem",3,"src"],["src","./assets/images/avatar.svg",1,"avatarItem"],[1,"avatarItem","avatarTxtItem"],["src","./assets/images/avatar.svg","class","avatarItem",4,"ngIf","ngIfElse"],["selected",""],["color","warning",1,"cbadge"]],template:function(t,a){if(1&t&&(e.Nb(0,"ion-avatar",0),e.nc(1,l,4,3,"ng-container",1),e.nc(2,u,4,3,"ng-template",null,2,e.oc),e.Mb(),e.nc(4,v,2,1,"ion-badge",3)),2&t){const t=e.hc(3);e.yb(1),e.dc("ngIf",a.candidate&&a.store.enviroment.isAvatarImages)("ngIfElse",t),e.yb(3),e.dc("ngIf",a.isShowTotal&&a.total>0)}},directives:[s.f,r.m,s.i],styles:["[_nghost-%COMP%]{display:block;min-width:0;min-height:0}.avatar[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.avatar[_ngcontent-%COMP%]{display:grid;align-items:center;text-align:center;background:none}.avatar[_ngcontent-%COMP%]:active{opacity:.5;height:110%;width:110%}.avatarItem[_ngcontent-%COMP%]{grid-row:1;grid-column:1}.avatarTxtItem[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#000;opacity:.6}.cbadge[_ngcontent-%COMP%]{position:relative;top:-1rem;left:-.4rem;border-radius:100%;margin:0}.candidateNotActive[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-weight:700;opacity:1}"]}),t})()}}]);