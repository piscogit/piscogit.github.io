!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"9O2a":function(e,o,a){"use strict";a.r(o),a.d(o,"TaskHostPageModule",(function(){return w}));var r=a("ofXK"),i=a("3Pt+"),s=a("TEn/"),c=a("tyNb"),u=a("VVJX"),f=a("Mxx3"),p=a("fXoL"),l=a("RybT");function y(t,n){}var h,b,v,m=[{path:"",component:(h=function(){function e(n,o,a,r){t(this,e),this.router=n,this.route=o,this.componentFactoryResolver=a,this.taskDelegatorFactory=r}var o,a,r;return o=e,(a=[{key:"ngOnInit",value:function(){this.load()}},{key:"ngAfterViewInit",value:function(){}},{key:"load",value:function(){var t=this.route.snapshot.paramMap.get(f.a.TaskType),n=this.taskDelegatorFactory.getTaskDelegator(t).getComponent(),e=this.componentFactoryResolver.resolveComponentFactory(n),o=this.taskHost.viewContainerRef;o.clear(),o.createComponent(e)}}])&&n(o.prototype,a),r&&n(o,r),e}(),h.\u0275fac=function(t){return new(t||h)(p.Ib(c.f),p.Ib(c.a),p.Ib(p.j),p.Ib(l.a))},h.\u0275cmp=p.Cb({type:h,selectors:[["app-task-host"]],viewQuery:function(t,n){var e;1&t&&p.lc(u.a,!0),2&t&&p.gc(e=p.Wb())&&(n.taskHost=e.first)},decls:1,vars:0,consts:[["appTaskHost",""]],template:function(t,n){1&t&&p.nc(0,y,0,0,"ng-template",0)},styles:[""]}),h)}],k=((v=function n(){t(this,n)}).\u0275mod=p.Gb({type:v}),v.\u0275inj=p.Fb({factory:function(t){return new(t||v)},imports:[[c.h.forChild(m)],c.h]}),v),w=((b=function n(){t(this,n)}).\u0275mod=p.Gb({type:b}),b.\u0275inj=p.Fb({factory:function(t){return new(t||b)},imports:[[r.c,i.a,s.ab,k]]}),b)}}])}();