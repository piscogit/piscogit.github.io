!function(){function e(e,n){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(s)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Gwuq:function(t,a,r){"use strict";r.d(a,"a",(function(){return _}));var o,c=r("mrSG"),s=r("fXoL"),d=((o=function(){function e(){n(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s.Cb({type:o,selectors:[["app-forms-candidate-history-agg"]],decls:2,vars:0,template:function(e,t){1&e&&(s.Nb(0,"p"),s.pc(1," forms-candidate-history-agg works!\n"),s.Mb())},styles:[""]}),o),l=r("NrBX"),u=r("L5fO"),f=r("ofXK"),v=r("TEn/");function m(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(2).$implicit,a=s.Xb(2);s.yb(1),s.rc(" ",a.candidateForm.formItem[n.key].templateDesc," ")}}function b(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",7),s.Nb(2,"span"),s.pc(3),s.Mb(),s.nc(4,m,2,1,"span",8),s.Mb(),s.Mb()),2&e){var n=s.Xb().$implicit,a=s.hc(7),i=s.Xb(2);s.yb(3),s.qc(n.value.question),s.yb(1),s.dc("ngIf",i.candidateForm.formItem[n.key].templateDesc)("ngIfElse",a)}}function p(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(2).$implicit,a=s.Xb(2);s.yb(1),s.rc(" ",a.candidateForm.formItem[n.key].templateDesc," ")}}function h(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",7),s.Nb(2,"span"),s.pc(3),s.Mb(),s.nc(4,p,2,1,"span",8),s.Mb(),s.Mb()),2&e){var n=s.Xb().$implicit,a=s.hc(7),i=s.Xb(2);s.yb(3),s.qc(n.value.question),s.yb(1),s.dc("ngIf",i.candidateForm.formItem[n.key].templateDesc)("ngIfElse",a)}}function g(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(2).$implicit,a=s.Xb(2);s.yb(1),s.rc(" ",a.candidateForm.formItem[n.key].value," ")}}function y(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div"),s.pc(2),s.Mb(),s.nc(3,g,2,1,"span",8),s.Mb()),2&e){var n=s.Xb().$implicit,a=s.hc(7),i=s.Xb(2);s.yb(2),s.rc("",n.value.question,":"),s.yb(1),s.dc("ngIf",i.candidateForm.formItem[n.key].value)("ngIfElse",a)}}function k(e,t){1&e&&s.Jb(0,"div")}function C(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(3);s.yb(1),s.qc(n.langProvider.NoData)}}function I(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",4),s.nc(2,b,5,3,"div",5),s.nc(3,h,5,3,"div",5),s.nc(4,y,4,3,"div",5),s.nc(5,k,1,0,"div",5),s.nc(6,C,2,1,"ng-template",null,6,s.oc),s.Mb(),s.Mb()),2&e){var n=t.$implicit;s.yb(1),s.dc("ngSwitch",n.value.type),s.yb(1),s.dc("ngSwitchCase","FormItemSingleSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemMultiSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemText"),s.yb(1),s.dc("ngSwitchCase","FormItemSeperator")}}function S(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.pc(5),s.Mb(),s.Nb(6,"span",2),s.pc(7),s.Yb(8,"date"),s.Mb(),s.Mb(),s.nc(9,I,8,5,"div",3),s.Yb(10,"keyvalue"),s.Mb(),s.Mb(),s.Kb()),2&e){var n=s.Xb();s.yb(1),s.mc("direction",n.langProvider.LangDirection),s.yb(4),s.qc(n.task.name),s.yb(2),s.qc(s.ac(8,5,n.task.date,"dd/MM/yy HH:mm:ss")),s.yb(2),s.dc("ngForOf",s.Zb(10,8,n.taskConfig.formItems))}}var w,M=((w=function(){function t(e,a,i){n(this,t),this.formsDelegator=e,this.tasksDelegator=a,this.langProvider=i}return i(t,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.calcHistory();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"calcHistory",value:function(){var t,n,a,i,r,o,s,d;return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function c(){var l,u,f,v,m,b,p,h,g=this;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.tasksDelegator.getTasksConfig(this.task.taskId);case 2:return this.taskConfig=c.sent,c.next=5,this.formsDelegator.loadCandidateTaskFormItem(this.task._id,this.candidate._id);case 5:for(this.candidateForm=c.sent,l=0,u=Object.keys(this.candidateForm.formItem);l<u.length;l++)if(f=u[l],this.candidateForm.formItem[f])if("FormItemSingleSelect"===(v=this.candidateForm.formItem[f]).type)!function(){var e=null===(t=v)||void 0===t?void 0:t.selection;e&&(v.templateDesc=null===(i=null===(a=null===(n=g.taskConfig.formItems[f])||void 0===n?void 0:n.options)||void 0===a?void 0:a.find((function(t){return t.value===e})))||void 0===i?void 0:i.desc)}();else if("FormItemMultiSelect"===v.type&&(null===(r=v)||void 0===r?void 0:r.selection)){m=[],b=e(v.selection);try{for(h=function(){var e=p.value,t=null===(d=null===(s=null===(o=g.taskConfig.formItems[f])||void 0===o?void 0:o.options)||void 0===s?void 0:s.find((function(t){return t.value===e})))||void 0===d?void 0:d.desc;m.push(t)},b.s();!(p=b.n()).done;)h()}catch(y){b.e(y)}finally{b.f()}v.templateDesc=m.join(",")}this.isInit=!0;case 8:case"end":return c.stop()}}),c,this)})))}}]),t}()).\u0275fac=function(e){return new(e||w)(s.Ib(_),s.Ib(l.a),s.Ib(u.b))},w.\u0275cmp=s.Cb({type:w,selectors:[["app-forms-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["noData",""],[1,"formItem"],[4,"ngIf","ngIfElse"]],template:function(e,t){1&e&&s.nc(0,S,11,10,"ng-container",0),2&e&&s.dc("ngIf",t.isInit)},directives:[f.m,v.v,v.B,f.l,f.n,f.o],pipes:[f.e,f.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.formItem[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}"]}),w);function D(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"span",2),s.pc(2),s.Mb(),s.Nb(3,"span"),s.pc(4),s.Mb(),s.Kb()),2&e){var n=s.Xb();s.yb(2),s.qc(n.langProvider.FormCoverageCompleted),s.yb(2),s.sc("",n.langProvider.Full," - ",null==n.task.coverage?null:n.task.coverage.full.length,"")}}function x(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"span",3),s.pc(2),s.Mb(),s.Nb(3,"span"),s.pc(4),s.Mb(),s.Nb(5,"span"),s.pc(6),s.Mb(),s.Kb()),2&e){var n=s.Xb();s.yb(2),s.qc(n.langProvider.FormCoverageNotCompleted),s.yb(2),s.sc("",n.langProvider.Full," - ",null==n.task.coverage?null:n.task.coverage.full.length,""),s.yb(2),s.sc("",n.langProvider.Partial," - ",null==n.task.coverage?null:n.task.coverage.partial.length,"")}}var N,O,F=((N=function(){function e(t){n(this,e),this.langProvider=t}return i(e,[{key:"ngOnInit",value:function(){this.calcHistory()}},{key:"calcHistory",value:function(){var e=new Set(this.task.coverage.full);this.isFormFullfil=this.candidates.filter((function(e){return"NotActive"!==e.status})).every((function(t){return e.has(t._id)}))}}]),e}()).\u0275fac=function(e){return new(e||N)(s.Ib(u.b))},N.\u0275cmp=s.Cb({type:N,selectors:[["app-forms-history"]],inputs:{task:"task",candidates:"candidates"},decls:3,vars:4,consts:[[1,"container"],[4,"ngIf"],[1,"completed"],[1,"notCompleted"]],template:function(e,t){1&e&&(s.Nb(0,"div",0),s.nc(1,D,5,3,"ng-container",1),s.nc(2,x,7,5,"ng-container",1),s.Mb()),2&e&&(s.mc("direction",t.langProvider.LangDirection),s.yb(1),s.dc("ngIf",t.isFormFullfil),s.yb(1),s.dc("ngIf",!t.isFormFullfil))},directives:[f.m],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),N),P=r("sHy1"),T=r("h7jJ"),X=r("nbnm"),_=((O=function(){function t(e,a,i){n(this,t),this.dataProvider=e,this.entityNamer=a,this.langProvider=i}return i(t,[{key:"getComponent",value:function(){return P.a}},{key:"getHistoryComponent",value:function(){return F}},{key:"getCandidateHistoryComponent",value:function(){return M}},{key:"getCandidateAggregateComponent",value:function(){return d}},{key:"getTaskConfig",value:function(e){throw new Error("Method not implemented.")}},{key:"getTaskName",value:function(){throw new Error("Method not implemented.")}},{key:"saveTask",value:function(e,t){var n,a,i,r;return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var c,s,d,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(d in c=[],e.main._id=null!==(n=e.main._id)&&void 0!==n?n:this.entityNamer.taskPrefixWithUniqueIdAnd(e.main.type,e.main.taskId),e.main._rev=e.main._rev,e.main.date=null!==(a=e.main.date)&&void 0!==a?a:new Date,e.main.updateDate=new Date,s=this.calcCoverage(e,t),e.main.coverage=s,c.push(e.main),e.items)Object.prototype.hasOwnProperty.call(e.items,d)&&((l=e.items[d])._id=null!==(i=l._id)&&void 0!==i?i:"".concat(e.main._id.replace("main","item"),"@").concat(d),l._rev=l._rev,l.date=null!==(r=l.date)&&void 0!==r?r:new Date,l.updateDate=new Date,l.candidateId=d,c.push(l));return o.next=7,this.dataProvider.saveEntities(c);case 7:return o.abrupt("return",e);case 8:case"end":return o.stop()}}),o,this)})))}},{key:"loadTask",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a,i,r,o,c,s,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.dataProvider.loadTask(t);case 2:return a=n.sent,i=a._id.replace("main","item"),n.next=6,this.dataProvider.loadEntitiesByPrefix(i);case 6:r=n.sent,o={main:a,items:{}},c=e(r);try{for(c.s();!(s=c.n()).done;)d=s.value,o.items[d.candidateId]=d}catch(l){c.e(l)}finally{c.f()}return n.abrupt("return",o);case 11:case"end":return n.stop()}}),n,this)})))}},{key:"loadCandidateTaskFormItem",value:function(e,t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a,i,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat(e.replace("main","item"),"@").concat(t),n.next=3,this.dataProvider.loadEntitiesByPrefix(a);case 3:return i=n.sent,n.abrupt("return",((null==i?void 0:i.length)>0&&(r=i[0]),r));case 5:case"end":return n.stop()}}),n,this)})))}},{key:"deleteTask",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[e],a=e._id.replace("main","item"),t.next=3,this.dataProvider.loadEntitiesByPrefix(a,{includeDocs:!1});case 3:return t.sent.forEach((function(e){return n.push(e)})),t.next=6,this.dataProvider.deleteEntities(n);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"getTaskHistory",value:function(){throw new Error("Method not implemented.")}},{key:"getTasksForCandidates",value:function(e){throw new Error("Method not implemented.")}},{key:"calcCoverage",value:function(e,t){return Object.keys(e.items).reduce((function(n,a,i){for(var r=e.items[a],o=0,c=Object.keys(r.formItem),s=Object.keys(t.formItems).filter((function(e){return t.formItems[e].isMandatory})),d=0,l=c;d<l.length;d++){var u=l[d];if(t.formItems[u].isMandatory&&r.formItem[u]){var f=r.formItem[u];(f.value||f.selection)&&o++}}return o===s.length?n.full.push(a):o>0&&n.partial.push(a),n}),{full:[],partial:[]})}},{key:"checkTaskEmpty",value:function(e,t){var n,a,i=this.calcCoverage(e,t);return!(e.main._id||(null===(n=i.full)||void 0===n?void 0:n.length)>0||(null===(a=i.partial)||void 0===a?void 0:a.length)>0)}}]),t}()).\u0275fac=function(e){return new(e||O)(s.Rb(T.a),s.Rb(X.a),s.Rb(u.b))},O.\u0275prov=s.Eb({token:O,factory:O.\u0275fac,providedIn:"root"}),O)},sHy1:function(t,a,r){"use strict";r.d(a,"a",(function(){return E}));var o=r("mrSG"),c=r("kLqA"),s=r("fXoL"),d=r("TEn/"),l=r("ofXK"),u=r("g1yl");function f(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-item",1),s.Vb("click",(function(){s.ic(n);var e=t.$implicit;return s.Xb().onSelectCandidate(e)})),s.Jb(1,"app-candidate-avatar",2),s.Nb(2,"span",3),s.pc(3),s.Mb(),s.Mb()}if(2&e){var a=t.$implicit;s.yb(1),s.dc("candidate",a),s.yb(2),s.qc(a.name)}}var v,m=((v=function(){function e(t){n(this,e),this.popupCtrl=t,this.candidateSelected=new s.n}return i(e,[{key:"ngOnInit",value:function(){}},{key:"onSelectCandidate",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popupCtrl.dismiss(e);case 2:case"end":return t.stop()}}),t,this)})))}},{key:"trackByFn",value:function(e,t){return t?t._id:e}}]),e}()).\u0275fac=function(e){return new(e||v)(s.Ib(d.gb))},v.\u0275cmp=s.Cb({type:v,selectors:[["app-candidates-list"]],inputs:{candidates:"candidates"},outputs:{candidateSelected:"candidateSelected"},decls:2,vars:2,consts:[["button","",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],["button","",3,"click"],["slot","start",1,"avatar",3,"candidate"],["slot","end",1,"candidateName"]],template:function(e,t){1&e&&(s.Nb(0,"ion-list"),s.nc(1,f,4,2,"ion-item",0),s.Mb()),2&e&&(s.yb(1),s.dc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn))},directives:[d.C,l.l,d.v,u.a],styles:[".avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:var(--avatar-margin)}"]}),v),b=r("Mxx3"),p=r("AytR"),h=r("tyNb"),g=r("3LWr"),y=r("zrcv"),k=r("L5fO"),C=r("ufmx"),I=r("NrBX"),S=r("Gwuq");function w(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-button",10),s.Vb("click",(function(){return s.ic(n),s.Xb(2).onSelectCandidate()})),s.Nb(1,"div",11),s.Jb(2,"app-candidate-avatar",12),s.Nb(3,"span"),s.pc(4),s.Mb(),s.Mb(),s.Mb()}if(2&e){var a=s.Xb(2);s.yb(2),s.dc("candidate",a.selectedCandidate),s.yb(2),s.qc(a.selectedCandidate.name)}}function M(e,t){if(1&e&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",6),s.Jb(3,"ion-menu-button"),s.Mb(),s.Nb(4,"ion-buttons",7),s.Jb(5,"ion-back-button",8),s.Mb(),s.Nb(6,"ion-title"),s.Nb(7,"span"),s.pc(8),s.Mb(),s.Mb(),s.Mb(),s.nc(9,w,5,2,"ion-button",9),s.Mb()),2&e){var n=s.Xb();s.yb(8),s.qc(n.taskDesc.description),s.yb(1),s.dc("ngIf",n.selectedCandidate)}}function D(e,t){if(1&e&&(s.Nb(0,"ion-select-option",20),s.pc(1),s.Mb()),2&e){var n=t.$implicit;s.dc("value",n.value),s.yb(1),s.rc(" ",n.desc," ")}}function x(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-input",21),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb(2).$implicit;return s.Xb(2).formSelectDescChanged(e,t)})),s.Mb()}if(2&e){var a=s.Xb(2).$implicit,i=s.Xb(2);s.dc("value",i.selectedCandidateSaveData.formItem[a.key].desc)("placeholder",i.langProvider.Explain)}}function N(e,t){if(1&e){var n=s.Ob();s.Nb(0,"div"),s.Nb(1,"span"),s.pc(2),s.Mb(),s.Nb(3,"ion-select",17),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb().$implicit;return s.Xb(2).formSingleSelectChanged(e,t)})),s.nc(4,D,2,2,"ion-select-option",18),s.Mb(),s.nc(5,x,1,2,"ion-input",19),s.Mb()}if(2&e){var a=s.Xb().$implicit,i=s.Xb(2);s.yb(2),s.qc(a.value.question),s.yb(1),s.dc("placeholder",i.langProvider.Select)("value",i.selectedCandidateSaveData.formItem[a.key].selection),s.yb(1),s.dc("ngForOf",a.value.options),s.yb(1),s.dc("ngIf",a.value.isDescOption)}}function O(e,t){if(1&e&&(s.Nb(0,"ion-select-option",20),s.pc(1),s.Mb()),2&e){var n=t.$implicit;s.dc("value",n.value),s.yb(1),s.rc(" ",n.desc," ")}}function F(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-input",21),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb(2).$implicit;return s.Xb(2).formSelectDescChanged(e,t)})),s.Mb()}if(2&e){var a=s.Xb(2).$implicit,i=s.Xb(2);s.dc("value",i.selectedCandidateSaveData.formItem[a.key].desc)("placeholder",i.langProvider.Explain)}}function P(e,t){if(1&e){var n=s.Ob();s.Nb(0,"div"),s.Nb(1,"span"),s.pc(2),s.Mb(),s.Nb(3,"ion-select",22),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb().$implicit;return s.Xb(2).formMultiSelectChanged(e,t)})),s.nc(4,O,2,2,"ion-select-option",18),s.Mb(),s.nc(5,F,1,2,"ion-input",19),s.Mb()}if(2&e){var a=s.Xb().$implicit,i=s.Xb(2);s.yb(2),s.qc(a.value.question),s.yb(1),s.dc("placeholder",i.langProvider.Select)("value",i.selectedCandidateSaveData.formItem[a.key].selection),s.yb(1),s.dc("ngForOf",a.value.options),s.yb(1),s.dc("ngIf",a.value.isDescOption)}}function T(e,t){if(1&e){var n=s.Ob();s.Nb(0,"div"),s.Nb(1,"ion-item"),s.Nb(2,"ion-label",23),s.pc(3),s.Mb(),s.Nb(4,"ion-input",24),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb().$implicit;return s.Xb(2).formTextChanged(e,t)})),s.Mb(),s.Mb(),s.Mb()}if(2&e){var a=s.Xb().$implicit,i=s.Xb(2);s.yb(3),s.qc(a.value.question),s.yb(1),s.dc("value",i.selectedCandidateSaveData.formItem[a.key].value)}}function X(e,t){1&e&&(s.Nb(0,"div"),s.Jb(1,"hr"),s.Mb())}function _(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",15),s.nc(2,N,6,5,"div",16),s.nc(3,P,6,5,"div",16),s.nc(4,T,5,2,"div",16),s.nc(5,X,2,0,"div",16),s.Mb(),s.Mb()),2&e){var n=t.$implicit;s.yb(1),s.dc("ngSwitch",n.value.type),s.yb(1),s.dc("ngSwitchCase","FormItemSingleSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemMultiSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemText"),s.yb(1),s.dc("ngSwitchCase","FormItemSeperator")}}function R(e,t){if(1&e&&(s.Nb(0,"div",13),s.nc(1,_,6,5,"div",14),s.Yb(2,"keyvalue"),s.Mb()),2&e){var n=s.Xb();s.mc("direction",n.langProvider.LangDirection),s.yb(1),s.dc("ngForOf",s.Zb(2,3,n.taskConfig.formItems))}}var j,E=((j=function(){function t(e,a,i,r,o,c,s,d,l,u){n(this,t),this.router=e,this.route=a,this.store=i,this.msgService=r,this.langProvider=o,this.popoverController=c,this.candidatesDelegator=s,this.taskDelegator=d,this.popupCtrl=l,this.formsDelegator=u}return i(t,[{key:"ngOnInit",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initTask();case 2:return this.taskSavedData=e.sent,e.next=5,this.loadTask();case 5:this.taskSavedData=e.sent,this.setSelectedCandidateFormSaveData(this.candidates[0]),this.isTaskInit=!0;case 8:case"end":return e.stop()}}),e,this)})))}},{key:"initTask",value:function(){var t;return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a,i,r,o,c,s,d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=null!==(t=this.route.snapshot.paramMap.get(b.a.TaskDescId))&&void 0!==t?t:"t13",n.next=3,this.candidatesDelegator.getCandidatesCopy();case 3:return this.candidates=n.sent,n.next=6,this.taskDelegator.getTaskDesk(a);case 6:return this.taskDesc=n.sent,n.next=9,this.taskDelegator.getTasksConfig(a);case 9:this.taskConfig=n.sent,i={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description},items:{}},r={},n.t0=regeneratorRuntime.keys(this.taskConfig.formItems);case 12:if((n.t1=n.t0()).done){n.next=26;break}if(o=n.t1.value,!(c=this.taskConfig.formItems[o])){n.next=24;break}n.t2=c.type,n.next="FormItemSingleSelect"===n.t2?19:"FormItemMultiSelect"===n.t2?21:"FormItemText"===n.t2?23:24;break;case 19:return r[o]={type:"FormItemSingleSelect"},n.abrupt("break",24);case 21:return r[o]={type:"FormItemMultiSelect"},n.abrupt("break",24);case 23:r[o]={type:"FormItemText"};case 24:n.next=12;break;case 26:s=e(this.candidates);try{for(s.s();!(d=s.n()).done;)l=d.value,i.items[l._id]={taskId:this.taskDesc.id,type:this.taskDesc.type,candidateId:l._id,formItem:JSON.parse(JSON.stringify(r))}}catch(u){s.e(u)}finally{s.f()}return n.abrupt("return",i);case 29:case"end":return n.stop()}}),n,this)})))}},{key:"ionViewWillLeave",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.formsDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)){e.next=4;break}this.msgService.showToast(this.langProvider.TaskEmptyDismissed,p.a.taskSavedToastInterval),e.next=9;break;case 4:return e.next=6,this.saveTask();case 6:this.taskSavedData=e.sent,this.msgService.showToast(this.langProvider.TaskSaved,p.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date);case 9:case"end":return e.stop()}}),e,this)})))}},{key:"saveTask",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.formsDelegator.saveTask(this.taskSavedData,this.taskConfig);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"loadTask",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.route.snapshot.paramMap.get(b.a.SavedTaskId),n=this.taskSavedData,e.t0=t,!e.t0){e.next=7;break}return e.next=6,this.formsDelegator.loadTask(t);case 6:n=e.sent;case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})))}},{key:"onSelectCandidate",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:m,componentProps:{candidates:this.candidates}});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:(n=e.sent).data&&this.setSelectedCandidateFormSaveData(n.data);case 9:case"end":return e.stop()}}),e,this)})))}},{key:"setSelectedCandidateFormSaveData",value:function(e){this.selectedCandidate=e,this.selectedCandidateSaveData=this.taskSavedData.items[this.selectedCandidate._id]}},{key:"formSingleSelectChanged",value:function(e,t){var n;(null===(n=this.selectedCandidateSaveData)||void 0===n?void 0:n.formItem[t.key])||(this.selectedCandidateSaveData.formItem[t.key]={type:"FormItemSingleSelect"}),this.selectedCandidateSaveData.formItem[t.key].selection=e.detail.value,console.log()}},{key:"formMultiSelectChanged",value:function(e,t){var n;(null===(n=this.selectedCandidateSaveData)||void 0===n?void 0:n.formItem[t.key])||(this.selectedCandidateSaveData.formItem[t.key]={type:"FormItemMultiSelect"}),this.selectedCandidateSaveData.formItem[t.key].selection=e.detail.value,console.log()}},{key:"formSelectDescChanged",value:function(e,t){this.selectedCandidateSaveData.formItem[t.key].desc=e.detail.value,console.log()}},{key:"formTextChanged",value:function(e,t){var n;(null===(n=this.selectedCandidateSaveData)||void 0===n?void 0:n.formItem[t.key])||(this.selectedCandidateSaveData.formItem[t.key]={type:"FormItemText"}),this.selectedCandidateSaveData.formItem[t.key].value=e.detail.value,console.log()}},{key:"onTempClick",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.msgService.showModal(JSON.stringify(this.selectedCandidateSaveData));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"createComment",value:function(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:c.Guid.raw()}],{skipLocationChange:!0})}}]),t}()).\u0275fac=function(e){return new(e||j)(s.Ib(h.f),s.Ib(h.a),s.Ib(g.a),s.Ib(y.a),s.Ib(k.b),s.Ib(d.gb),s.Ib(C.a),s.Ib(I.a),s.Ib(d.gb),s.Ib(S.a))},j.\u0275cmp=s.Cb({type:j,selectors:[["app-forms"]],inputs:{isIntegrated:"isIntegrated"},decls:6,vars:2,consts:[[4,"ngIf"],[1,"content"],["class","form",3,"direction",4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],["color","primary",3,"click"],["name","chatbox-ellipses"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],["color","dark","class","selectBtn",3,"click",4,"ngIf"],["color","dark",1,"selectBtn",3,"click"],[1,"selectCandi"],[1,"avatar2",3,"candidate"],[1,"form"],[4,"ngFor","ngForOf"],[1,"formItem",3,"ngSwitch"],[4,"ngSwitchCase"],["interface","popover",3,"placeholder","value","ionChange"],[3,"value",4,"ngFor","ngForOf"],["class","selectDesc",3,"value","placeholder","ionChange",4,"ngIf"],[3,"value"],[1,"selectDesc",3,"value","placeholder","ionChange"],["multiple","","interface","popover",3,"placeholder","value","ionChange"],["position","floating"],[3,"value","ionChange"]],template:function(e,t){1&e&&(s.nc(0,M,10,2,"ion-header",0),s.Nb(1,"ion-content",1),s.nc(2,R,3,5,"div",2),s.Nb(3,"ion-fab",3),s.Nb(4,"ion-fab-button",4),s.Vb("click",(function(){return t.createComment()})),s.Jb(5,"ion-icon",5),s.Mb(),s.Mb(),s.Mb()),2&e&&(s.dc("ngIf",!t.isIntegrated),s.yb(2),s.dc("ngIf",t.isTaskInit))},directives:[l.m,d.n,d.o,d.p,d.s,d.r,d.Y,d.k,d.E,d.g,d.h,d.W,d.j,u.a,l.l,l.n,l.o,d.P,d.ib,d.Q,d.u,d.jb,d.v,d.B],pipes:[l.g],styles:[".candidates[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{height:100%;overflow:scroll}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:flex-start;width:100%;margin-top:1rem}.formItem[_ngcontent-%COMP%]{margin-bottom:1rem}.avatar[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.avatar[_ngcontent-%COMP%], .avatar2[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.selectedCandidate[_ngcontent-%COMP%]{background:#f08080}.selectBtn[_ngcontent-%COMP%]{height:auto;width:100%}.selectCandi[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;justify-content:space-between;align-items:center}hr[_ngcontent-%COMP%]{display:block;position:relative;padding:0;margin:8px auto;height:0;width:100%;max-height:0;font-size:1px;line-height:0;clear:both;border:none;border-top:.1rem solid var(--ion-color-dark);border-bottom:.1rem solid var(--ion-color-dark);height:1rem}"]}),j)}}])}();