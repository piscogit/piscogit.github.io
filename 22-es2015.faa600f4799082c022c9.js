(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"Nog+":function(t,a,e){"use strict";e.r(a),e.d(a,"FormsPageModule",(function(){return f}));var n=e("ofXK"),c=e("3Pt+"),i=e("TEn/"),s=e("tyNb"),r=e("ajeZ"),o=e("sHy1"),d=e("fXoL");const g=[{path:"",component:o.a}];let l=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(a){return new(a||t)},imports:[[s.h.forChild(g),r.a],s.h]}),t})(),f=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(a){return new(a||t)},imports:[[n.c,c.a,i.bb,l,r.a]]}),t})()},ajeZ:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var n=e("ofXK"),c=e("3Pt+"),i=e("TEn/"),s=e("fXoL");let r=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(a){return new(a||t)},imports:[[n.c,c.a,i.bb]]}),t})()},g1yl:function(t,a,e){"use strict";e.d(a,"a",(function(){return v}));var n=e("fXoL"),c=e("3LWr"),i=e("ufmx"),s=e("TEn/"),r=e("ofXK");function o(t,a){if(1&t&&n.Jb(0,"img",7),2&t){const t=n.Xb(2);n.dc("src",t.candidate.ImgUrl,n.jc)}}function d(t,a){1&t&&n.Jb(0,"img",8)}function g(t,a){if(1&t&&(n.Nb(0,"span",9),n.pc(1),n.Mb()),2&t){const t=n.Xb(2);n.Ab("candidateNotActive",!1===t.candidate.isActive),n.yb(1),n.rc(" ",t.candidate.number," ")}}function l(t,a){if(1&t&&(n.Lb(0),n.nc(1,o,1,1,"img",4),n.nc(2,d,1,0,"img",5),n.nc(3,g,2,3,"span",6),n.Kb()),2&t){const t=n.Xb();n.yb(1),n.dc("ngIf",t.candidate.ImgUrl),n.yb(1),n.dc("ngIf",!t.candidate.ImgUrl),n.yb(1),n.dc("ngIf",!t.candidate.ImgUrl)}}function f(t,a){1&t&&n.Jb(0,"img",8)}function b(t,a){if(1&t&&n.Jb(0,"img",7),2&t){const t=n.Xb(2);n.dc("src",t.selectedSrc,n.jc)}}function m(t,a){if(1&t&&(n.nc(0,f,1,0,"img",10),n.nc(1,b,1,1,"ng-template",null,11,n.oc),n.Nb(3,"span",9),n.pc(4),n.Mb()),2&t){const t=n.hc(2),a=n.Xb();n.dc("ngIf",!a.isSelected)("ngIfElse",t),n.yb(3),n.Ab("candidateNotActive",!1===a.candidate.isActive),n.yb(1),n.rc(" ",a.candidate.number," ")}}function u(t,a){if(1&t&&(n.Nb(0,"ion-badge",12),n.pc(1),n.Mb()),2&t){const t=n.Xb();n.yb(1),n.qc(t.total)}}let v=(()=>{class t{constructor(t,a){this.store=t,this.candidatesDelegator=a}ngOnInit(){switch(this.candidateId&&(this.candidate=this.candidatesDelegator.getCandidatesByIds([this.candidateId])[0]),this.selectedStyle){case"gray":this.selectedSrc="./assets/images/avatar3.svg";break;case"redBlue":this.selectedSrc="./assets/images/avatar2.svg";break;default:this.selectedSrc="./assets/images/avatar3.svg"}}}return t.\u0275fac=function(a){return new(a||t)(n.Ib(c.a),n.Ib(i.a))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-candidate-avatar"]],inputs:{candidate:"candidate",candidateId:"candidateId",total:"total",isShowTotal:"isShowTotal",isSelected:"isSelected",selectedStyle:"selectedStyle"},decls:5,vars:3,consts:[[1,"avatar"],[4,"ngIf","ngIfElse"],["noImg",""],["class","cbadge","color","warning",4,"ngIf"],["class","avatarItem",3,"src",4,"ngIf"],["src","./assets/images/avatar.svg","class","avatarItem",4,"ngIf"],["class","avatarItem avatarTxtItem",3,"candidateNotActive",4,"ngIf"],[1,"avatarItem",3,"src"],["src","./assets/images/avatar.svg",1,"avatarItem"],[1,"avatarItem","avatarTxtItem"],["src","./assets/images/avatar.svg","class","avatarItem",4,"ngIf","ngIfElse"],["selected",""],["color","warning",1,"cbadge"]],template:function(t,a){if(1&t&&(n.Nb(0,"ion-avatar",0),n.nc(1,l,4,3,"ng-container",1),n.nc(2,m,5,5,"ng-template",null,2,n.oc),n.Mb(),n.nc(4,u,2,1,"ion-badge",3)),2&t){const t=n.hc(3);n.yb(1),n.dc("ngIf",a.store.enviroment.isAvatarImages)("ngIfElse",t),n.yb(3),n.dc("ngIf",a.isShowTotal&&a.total>0)}},directives:[s.f,r.m,s.i],styles:["[_nghost-%COMP%]{display:block;min-width:0;min-height:0}.avatar[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;width:100%}.avatar[_ngcontent-%COMP%]{display:grid;align-items:center;text-align:center;background:none}.avatar[_ngcontent-%COMP%]:active{opacity:.5;height:110%;width:110%}.avatarItem[_ngcontent-%COMP%]{grid-row:1;grid-column:1}.avatarTxtItem[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#000;opacity:.6}.cbadge[_ngcontent-%COMP%]{position:relative;top:-1rem;left:-.4rem;border-radius:100%;margin:0}.candidateNotActive[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-weight:700;opacity:1}"]}),t})()}}]);