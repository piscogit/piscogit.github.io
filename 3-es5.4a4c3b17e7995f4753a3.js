!function(){function e(e,n){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(s)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Gwuq:function(t,a,r){"use strict";r.d(a,"a",(function(){return _}));var o,c=r("mrSG"),s=r("fXoL"),d=((o=function(){function e(){n(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s.Cb({type:o,selectors:[["app-forms-candidate-history-agg"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),o),l=r("NrBX"),u=r("L5fO"),m=r("ofXK"),f=r("TEn/");function v(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(2).$implicit,a=s.Xb(2);s.yb(1),s.rc(" ",a.candidateForm.formItem[n.key].templateDesc," ")}}function b(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",7),s.Nb(2,"span"),s.pc(3),s.Mb(),s.nc(4,v,2,1,"span",8),s.Mb(),s.Mb()),2&e){var n=s.Xb().$implicit,a=s.hc(7),i=s.Xb(2);s.yb(3),s.qc(n.value.question),s.yb(1),s.dc("ngIf",i.candidateForm.formItem[n.key].templateDesc)("ngIfElse",a)}}function p(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(2).$implicit,a=s.Xb(2);s.yb(1),s.rc(" ",a.candidateForm.formItem[n.key].templateDesc," ")}}function h(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",7),s.Nb(2,"span"),s.pc(3),s.Mb(),s.nc(4,p,2,1,"span",8),s.Mb(),s.Mb()),2&e){var n=s.Xb().$implicit,a=s.hc(7),i=s.Xb(2);s.yb(3),s.qc(n.value.question),s.yb(1),s.dc("ngIf",i.candidateForm.formItem[n.key].templateDesc)("ngIfElse",a)}}function g(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(2).$implicit,a=s.Xb(2);s.yb(1),s.rc(" ",a.candidateForm.formItem[n.key].value," ")}}function y(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div"),s.pc(2),s.Mb(),s.nc(3,g,2,1,"span",8),s.Mb()),2&e){var n=s.Xb().$implicit,a=s.hc(7),i=s.Xb(2);s.yb(2),s.rc("",n.value.question,":"),s.yb(1),s.dc("ngIf",i.candidateForm.formItem[n.key].value)("ngIfElse",a)}}function k(e,t){1&e&&s.Jb(0,"div")}function I(e,t){if(1&e&&(s.Nb(0,"span"),s.pc(1),s.Mb()),2&e){var n=s.Xb(3);s.yb(1),s.qc(n.langProvider.NoData)}}function C(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",4),s.nc(2,b,5,3,"div",5),s.nc(3,h,5,3,"div",5),s.nc(4,y,4,3,"div",5),s.nc(5,k,1,0,"div",5),s.nc(6,I,2,1,"ng-template",null,6,s.oc),s.Mb(),s.Mb()),2&e){var n=t.$implicit;s.yb(1),s.dc("ngSwitch",n.value.type),s.yb(1),s.dc("ngSwitchCase","FormItemSingleSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemMultiSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemText"),s.yb(1),s.dc("ngSwitchCase","FormItemSeperator")}}function S(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"ion-item"),s.Nb(2,"ion-label"),s.Nb(3,"div",1),s.Nb(4,"span"),s.pc(5),s.Mb(),s.Nb(6,"span",2),s.pc(7),s.Yb(8,"date"),s.Mb(),s.Mb(),s.nc(9,C,8,5,"div",3),s.Yb(10,"keyvalue"),s.Mb(),s.Mb(),s.Kb()),2&e){var n=s.Xb();s.yb(1),s.mc("direction",n.langProvider.LangDirection),s.yb(4),s.qc(n.task.name),s.yb(2),s.qc(s.ac(8,5,n.task.date,"dd/MM/yy HH:mm:ss")),s.yb(2),s.dc("ngForOf",s.Zb(10,8,n.taskConfig.formItems))}}var w,D=((w=function(){function e(t,a,i){n(this,e),this.formsDelegator=t,this.tasksDelegator=a,this.langProvider=i}return i(e,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.calcHistory();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"calcHistory",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tasksDelegator.getTasksConfig(this.task.taskId);case 2:return this.taskConfig=e.sent,e.next=5,this.formsDelegator.loadCandidateTaskFormItem(this.task._id,this.candidate._id,this.taskConfig);case 5:this.candidateForm=e.sent,this.isInit=!0;case 7:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||w)(s.Ib(_),s.Ib(l.a),s.Ib(u.b))},w.\u0275cmp=s.Cb({type:w,selectors:[["app-forms-candidate-history"]],inputs:{task:"task",candidate:"candidate"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"header"],[2,"direction","ltr"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["noData",""],[1,"formItem"],[4,"ngIf","ngIfElse"]],template:function(e,t){1&e&&s.nc(0,S,11,10,"ng-container",0),2&e&&s.dc("ngIf",t.isInit)},directives:[m.m,f.w,f.C,m.l,m.n,m.o],pipes:[m.e,m.g],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.formItem[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}"]}),w);function M(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"span",2),s.pc(2),s.Mb(),s.Nb(3,"span"),s.pc(4),s.Mb(),s.Kb()),2&e){var n=s.Xb();s.yb(2),s.qc(n.langProvider.FormCoverageCompleted),s.yb(2),s.sc("",n.langProvider.Full," - ",null==n.task.coverage?null:n.task.coverage.full.length,"")}}function x(e,t){if(1&e&&(s.Lb(0),s.Nb(1,"span",3),s.pc(2),s.Mb(),s.Nb(3,"span"),s.pc(4),s.Mb(),s.Nb(5,"span"),s.pc(6),s.Mb(),s.Kb()),2&e){var n=s.Xb();s.yb(2),s.qc(n.langProvider.FormCoverageNotCompleted),s.yb(2),s.sc("",n.langProvider.Full," - ",null==n.task.coverage?null:n.task.coverage.full.length,""),s.yb(2),s.sc("",n.langProvider.Partial," - ",null==n.task.coverage?null:n.task.coverage.partial.length,"")}}var O,N,F=((O=function(){function e(t){n(this,e),this.langProvider=t}return i(e,[{key:"ngOnInit",value:function(){this.calcHistory()}},{key:"calcHistory",value:function(){var e=new Set(this.task.coverage.full);this.isFormFullfil=this.candidates.filter((function(e){return"NotActive"!==e.status})).every((function(t){return e.has(t._id)}))}}]),e}()).\u0275fac=function(e){return new(e||O)(s.Ib(u.b))},O.\u0275cmp=s.Cb({type:O,selectors:[["app-forms-history"]],inputs:{task:"task",candidates:"candidates"},decls:3,vars:4,consts:[[1,"container"],[4,"ngIf"],[1,"completed"],[1,"notCompleted"]],template:function(e,t){1&e&&(s.Nb(0,"div",0),s.nc(1,M,5,3,"ng-container",1),s.nc(2,x,7,5,"ng-container",1),s.Mb()),2&e&&(s.mc("direction",t.langProvider.LangDirection),s.yb(1),s.dc("ngIf",t.isFormFullfil),s.yb(1),s.dc("ngIf",!t.isFormFullfil))},directives:[m.m],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.completed[_ngcontent-%COMP%]{color:green}.notCompleted[_ngcontent-%COMP%]{color:red}"]}),O),P=r("sHy1"),T=r("h7jJ"),X=r("nbnm"),R=r("ufmx"),_=((N=function(){function t(e,a,i,r,o){n(this,t),this.dataProvider=e,this.entityNamer=a,this.taskDelegator=i,this.candidatesDelegator=r,this.langProvider=o}return i(t,[{key:"getComponentRoute",value:function(){return"forms"}},{key:"getComponent",value:function(){return P.a}},{key:"getHistoryComponent",value:function(){return F}},{key:"getCandidateHistoryComponent",value:function(){return D}},{key:"getCandidateAggregateComponent",value:function(){return d}},{key:"getTaskConfig",value:function(e){throw new Error("Method not implemented.")}},{key:"getTaskName",value:function(){throw new Error("Method not implemented.")}},{key:"saveTask",value:function(e,t){var n,a,i,r;return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var c,s,d,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(d in c=[],e.main._id=null!==(n=e.main._id)&&void 0!==n?n:this.entityNamer.taskPrefixWithUniqueIdAnd(e.main.type,e.main.taskId),e.main._rev=e.main._rev,e.main.date=null!==(a=e.main.date)&&void 0!==a?a:new Date,e.main.updateDate=new Date,s=this.calcCoverage(e,t),e.main.coverage=s,c.push(e.main),e.items)Object.prototype.hasOwnProperty.call(e.items,d)&&((l=e.items[d])._id=null!==(i=l._id)&&void 0!==i?i:"".concat(e.main._id.replace("main","item"),"@").concat(d),l._rev=l._rev,l.date=null!==(r=l.date)&&void 0!==r?r:new Date,l.updateDate=new Date,l.candidateId=d,c.push(l));return o.next=7,this.dataProvider.saveEntities(c);case 7:return o.abrupt("return",e);case 8:case"end":return o.stop()}}),o,this)})))}},{key:"loadTask",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a,i,r,o,c,s,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.dataProvider.loadTask(t);case 2:return a=n.sent,i=a._id.replace("main","item"),n.next=6,this.dataProvider.loadEntitiesByPrefix(i);case 6:r=n.sent,o={main:a,items:{}},c=e(r);try{for(c.s();!(s=c.n()).done;)d=s.value,o.items[d.candidateId]=d}catch(l){c.e(l)}finally{c.f()}return n.abrupt("return",o);case 11:case"end":return n.stop()}}),n,this)})))}},{key:"deleteTask",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[e],a=e._id.replace("main","item"),t.next=3,this.dataProvider.loadEntitiesByPrefix(a,{includeDocs:!1});case 3:return t.sent.forEach((function(e){return n.push(e)})),t.next=6,this.dataProvider.deleteEntities(n);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"getTaskHistory",value:function(){throw new Error("Method not implemented.")}},{key:"getTasksForCandidates",value:function(e){throw new Error("Method not implemented.")}},{key:"getFormTaskMain",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(this.entityNamer.allTasksPrefix(),"@forms@").concat(e),t.next=3,this.dataProvider.loadEntitiesByPrefix(n);case 3:return a=t.sent,t.abrupt("return",(a.length>0&&(i=a[0]),i));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"calcCoverage",value:function(e,t){return Object.keys(e.items).reduce((function(n,a,i){for(var r,o,c=e.items[a],s=0,d=Object.keys(c.formItem),l=Object.keys(t.formItems).filter((function(e){return t.formItems[e].isMandatory})),u=0,m=d;u<m.length;u++){var f=m[u];if(t.formItems[f].isMandatory&&c.formItem[f]){var v=c.formItem[f];((null===(r=v.value)||void 0===r?void 0:r.trim())||(null===(o=v.selection)||void 0===o?void 0:o.length)>0)&&s++}}return s===l.length?(c.formStatus="Full",n.full.push(a)):s>0?(c.formStatus="Partial",n.partial.push(a)):c.formStatus="Empty",n}),{full:[],partial:[]})}},{key:"checkTaskEmpty",value:function(e,t){var n,a,i=this.calcCoverage(e,t);return!(e.main._id||(null===(n=i.full)||void 0===n?void 0:n.length)>0||(null===(a=i.partial)||void 0===a?void 0:a.length)>0)}},{key:"exportCopy",value:function(e,t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.taskDelegator.getTasksConfig(t);case 2:return a=n.sent,n.next=5,this.exportTask(e,a);case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"exportTask",value:function(t,n){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var i,r,o,c,s,d,l,u;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=""+t.replace("main","item"),a.next=3,this.dataProvider.loadEntitiesByPrefix(i);case 3:r=a.sent,o=this.candidatesDelegator.getCandidatesByIdsMap(r.map((function(e){return e.candidateId}))),r.sort((function(e,t){return o[e.candidateId].number-o[t.candidateId].number})),c="",s=e(r),a.prev=8,s.s();case 10:if((d=s.n()).done){a.next=18;break}return l=d.value,a.next=14,this.loadCandidateTaskFormItem(t,l.candidateId,n);case 14:u=a.sent,c="".concat(c,"\n").concat(this.buildCandidateFormExport(o[u.candidateId],u,n));case 16:a.next=10;break;case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(8),s.e(a.t0);case 23:return a.prev=23,s.f(),a.finish(23);case 26:return a.abrupt("return",c);case 27:case"end":return a.stop()}}),a,this,[[8,20,23,26]])})))}},{key:"buildCandidateFormExport",value:function(e,t,n){var a,i="\n".concat(this.langProvider.Candidate,": ").concat(null!==(a=e.name)&&void 0!==a?a:e.number,", ").concat(this.langProvider.Group,": ").concat(e.group,"\n----------------------------");for(var r in n.formItems)if(Object.prototype.hasOwnProperty.call(n.formItems,r)){var o=n.formItems[r],c=void 0;switch(o.type){case"FormItemText":var s=o;t.formItem[r].templateDesc&&(c="".concat(s.question,": ").concat(t.formItem[r].templateDesc));break;case"FormItemSingleSelect":var d=o;t.formItem[r].templateDesc&&(c="".concat(d.question,": ").concat(t.formItem[r].templateDesc));break;case"FormItemMultiSelect":var l=o;t.formItem[r].templateDesc&&(c="".concat(l.question,": ").concat(t.formItem[r].templateDesc))}i="".concat(i,"\n").concat(null!=c?c:"")}return i}},{key:"loadCandidateTaskFormItem",value:function(e,t,n){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function a(){var i,r,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i="".concat(e.replace("main","item"),"@").concat(t),a.next=3,this.dataProvider.loadEntitiesByPrefix(i);case 3:return r=a.sent,a.abrupt("return",((null==r?void 0:r.length)>0&&(o=r[0]),this.buildCandidateFormTemplateDesc(o,n),o));case 5:case"end":return a.stop()}}),a,this)})))}},{key:"buildCandidateFormTemplateDesc",value:function(t,n){for(var a,i,r,o,c,s,d,l,u=0,m=Object.keys(t.formItem);u<m.length;u++){var f=m[u];if(t.formItem[f]){var v=t.formItem[f];if("FormItemText"===v.type)v.templateDesc=v.value;else if("FormItemSingleSelect"===v.type)!function(){var e=null===(a=v)||void 0===a?void 0:a.selection;e&&(v.templateDesc=null===(o=null===(r=null===(i=n.formItems[f])||void 0===i?void 0:i.options)||void 0===r?void 0:r.find((function(t){return t.value===e})))||void 0===o?void 0:o.desc)}();else if("FormItemMultiSelect"===v.type&&(null===(c=v)||void 0===c?void 0:c.selection)){var b,p=[],h=e(v.selection);try{var g=function(){var e=b.value,t=null===(l=null===(d=null===(s=n.formItems[f])||void 0===s?void 0:s.options)||void 0===d?void 0:d.find((function(t){return t.value===e})))||void 0===l?void 0:l.desc;p.push(t)};for(h.s();!(b=h.n()).done;)g()}catch(y){h.e(y)}finally{h.f()}v.templateDesc=p.join(",")}}}}}]),t}()).\u0275fac=function(e){return new(e||N)(s.Rb(T.a),s.Rb(X.a),s.Rb(l.a),s.Rb(R.a),s.Rb(u.b))},N.\u0275prov=s.Eb({token:N,factory:N.\u0275fac,providedIn:"root"}),N)},sHy1:function(t,a,r){"use strict";r.d(a,"a",(function(){return B}));var o=r("mrSG"),c=r("kLqA"),s=r("fXoL"),d=r("TEn/"),l=r("ofXK"),u=r("g1yl");function m(e,t){1&e&&s.Jb(0,"ion-icon",5)}function f(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-item",1),s.Vb("click",(function(){s.ic(n);var e=t.$implicit;return s.Xb().onSelectCandidate(e)})),s.Jb(1,"app-candidate-avatar",2),s.Nb(2,"span",3),s.pc(3),s.Mb(),s.nc(4,m,1,0,"ion-icon",4),s.Mb()}if(2&e){var a=t.$implicit,i=s.Xb();s.yb(1),s.dc("candidate",a),s.yb(2),s.qc(a.name),s.yb(1),s.dc("ngIf",i.candidatesDone[a._id])}}var v,b=((v=function(){function e(t){n(this,e),this.popupCtrl=t,this.candidateSelected=new s.n}return i(e,[{key:"ngOnInit",value:function(){}},{key:"onSelectCandidate",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.popupCtrl.dismiss(e);case 2:case"end":return t.stop()}}),t,this)})))}},{key:"trackByFn",value:function(e,t){return t?t._id:e}}]),e}()).\u0275fac=function(e){return new(e||v)(s.Ib(d.ib))},v.\u0275cmp=s.Cb({type:v,selectors:[["app-candidates-list"]],inputs:{candidates:"candidates",candidatesDone:"candidatesDone"},outputs:{candidateSelected:"candidateSelected"},decls:2,vars:2,consts:[["button","",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],["button","",3,"click"],["slot","start",1,"avatar",3,"candidate"],["slot","end",1,"candidateName"],["slot","end","name","checkmark-done","color","primary",4,"ngIf"],["slot","end","name","checkmark-done","color","primary"]],template:function(e,t){1&e&&(s.Nb(0,"ion-list"),s.nc(1,f,5,3,"ion-item",0),s.Mb()),2&e&&(s.yb(1),s.dc("ngForOf",t.candidates)("ngForTrackBy",t.trackByFn))},directives:[d.D,l.l,d.w,u.a,l.m,d.t],styles:[".avatar[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width);margin:var(--avatar-margin)}"]}),v),p=r("Mxx3"),h=r("AytR"),g=r("tyNb"),y=r("3LWr"),k=r("zrcv"),I=r("L5fO"),C=r("ufmx"),S=r("NrBX"),w=r("Gwuq");function D(e,t){if(1&e&&(s.Lb(0),s.Jb(1,"app-candidate-avatar",9),s.Nb(2,"span"),s.pc(3),s.Mb(),s.Kb()),2&e){var n=s.Xb(2);s.yb(1),s.dc("candidate",n.selectedCandidate),s.yb(2),s.qc(n.selectedCandidate.name)}}function M(e,t){if(1&e&&(s.Jb(0,"app-candidate-avatar",10),s.Nb(1,"span"),s.pc(2),s.Mb()),2&e){var n=s.Xb(2);s.yb(2),s.qc(n.langProvider.Select)}}function x(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",2),s.Jb(3,"ion-menu-button"),s.Mb(),s.Nb(4,"ion-buttons",3),s.Jb(5,"ion-back-button",4),s.Mb(),s.Nb(6,"ion-title"),s.Nb(7,"span"),s.pc(8),s.Mb(),s.Mb(),s.Mb(),s.Nb(9,"ion-button",5),s.Vb("click",(function(){return s.ic(n),s.Xb().onSelectCandidate()})),s.Nb(10,"div",6),s.nc(11,D,4,2,"ng-container",7),s.nc(12,M,3,1,"ng-template",null,8,s.oc),s.Mb(),s.Mb(),s.Mb()}if(2&e){var a=s.hc(13),i=s.Xb();s.yb(8),s.qc(null==i.taskDesc?null:i.taskDesc.description),s.yb(3),s.dc("ngIf",i.selectedCandidate)("ngIfElse",a)}}function O(e,t){if(1&e&&(s.Nb(0,"ion-select-option",23),s.pc(1),s.Mb()),2&e){var n=t.$implicit;s.dc("value",n.value),s.yb(1),s.rc(" ",n.desc," ")}}function N(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-input",24),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb(2).$implicit;return s.Xb(3).formSelectDescChanged(e,t)})),s.Mb()}if(2&e){var a=s.Xb(2).$implicit,i=s.Xb(3);s.dc("value",i.selectedCandidateSaveData.formItem[a.key].desc)("placeholder",i.langProvider.Explain)}}function F(e,t){if(1&e){var n=s.Ob();s.Nb(0,"div"),s.Nb(1,"span"),s.pc(2),s.Mb(),s.Nb(3,"ion-select",20),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb().$implicit;return s.Xb(3).formSingleSelectChanged(e,t)})),s.nc(4,O,2,2,"ion-select-option",21),s.Mb(),s.nc(5,N,1,2,"ion-input",22),s.Mb()}if(2&e){var a=s.Xb().$implicit,i=s.Xb(3);s.yb(2),s.qc(a.value.question),s.yb(1),s.dc("placeholder",i.langProvider.Select)("interface",i.selectInterface)("value",i.selectedCandidateSaveData.formItem[a.key].selection),s.yb(1),s.dc("ngForOf",a.value.options),s.yb(1),s.dc("ngIf",a.value.isDescOption)}}function P(e,t){if(1&e&&(s.Nb(0,"ion-select-option",23),s.pc(1),s.Mb()),2&e){var n=t.$implicit;s.dc("value",n.value),s.yb(1),s.rc(" ",n.desc," ")}}function T(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-input",24),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb(2).$implicit;return s.Xb(3).formSelectDescChanged(e,t)})),s.Mb()}if(2&e){var a=s.Xb(2).$implicit,i=s.Xb(3);s.dc("value",i.selectedCandidateSaveData.formItem[a.key].desc)("placeholder",i.langProvider.Explain)}}function X(e,t){if(1&e){var n=s.Ob();s.Nb(0,"div"),s.Nb(1,"span"),s.pc(2),s.Mb(),s.Nb(3,"ion-select",25),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb().$implicit;return s.Xb(3).formMultiSelectChanged(e,t)})),s.nc(4,P,2,2,"ion-select-option",21),s.Mb(),s.nc(5,T,1,2,"ion-input",22),s.Mb()}if(2&e){var a=s.Xb().$implicit,i=s.Xb(3);s.yb(2),s.qc(a.value.question),s.yb(1),s.dc("placeholder",i.langProvider.Select)("interface",i.selectInterface)("value",i.selectedCandidateSaveData.formItem[a.key].selection),s.yb(1),s.dc("ngForOf",a.value.options),s.yb(1),s.dc("ngIf",a.value.isDescOption)}}function R(e,t){if(1&e){var n=s.Ob();s.Nb(0,"div"),s.Nb(1,"ion-item"),s.Nb(2,"ion-label",26),s.pc(3),s.Mb(),s.Nb(4,"ion-input",27),s.Vb("ionChange",(function(e){s.ic(n);var t=s.Xb().$implicit;return s.Xb(3).formTextChanged(e,t)})),s.Mb(),s.Mb(),s.Mb()}if(2&e){var a=s.Xb().$implicit,i=s.Xb(3);s.yb(3),s.qc(a.value.question),s.yb(1),s.dc("type",a.value.isNumber?"number":"text")("value",i.selectedCandidateSaveData.formItem[a.key].value)}}function _(e,t){1&e&&(s.Nb(0,"div"),s.Jb(1,"hr"),s.Mb())}function j(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"div",18),s.nc(2,F,6,6,"div",19),s.nc(3,X,6,6,"div",19),s.nc(4,R,5,3,"div",19),s.nc(5,_,2,0,"div",19),s.Mb(),s.Mb()),2&e){var n=t.$implicit;s.yb(1),s.dc("ngSwitch",n.value.type),s.yb(1),s.dc("ngSwitchCase","FormItemSingleSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemMultiSelect"),s.yb(1),s.dc("ngSwitchCase","FormItemText"),s.yb(1),s.dc("ngSwitchCase","FormItemSeperator")}}function E(e,t){if(1&e&&(s.Nb(0,"div",16),s.nc(1,j,6,5,"div",17),s.Yb(2,"keyvalue"),s.Mb()),2&e){var n=s.Xb(2);s.mc("direction",n.langProvider.LangDirection),s.yb(1),s.dc("ngForOf",s.Zb(2,3,n.taskConfig.formItems))}}function q(e,t){if(1&e){var n=s.Ob();s.Nb(0,"ion-content",11),s.nc(1,E,3,5,"div",12),s.Nb(2,"ion-fab",13),s.Nb(3,"ion-fab-button",14),s.Vb("click",(function(){return s.ic(n),s.Xb().createComment()})),s.Jb(4,"ion-icon",15),s.Mb(),s.Mb(),s.Mb()}if(2&e){var a=s.Xb();s.yb(1),s.dc("ngIf",a.selectedCandidate)}}var $,B=(($=function(){function t(e,a,i,r,o,c,s,d,l,u){n(this,t),this.router=e,this.route=a,this.store=i,this.msgService=r,this.langProvider=o,this.popoverController=c,this.candidatesDelegator=s,this.taskDelegator=d,this.popupCtrl=l,this.formsDelegator=u,this.selectInterface="popover"}return i(t,[{key:"ngOnInit",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initTask();case 2:return this.taskSavedData=e.sent,e.next=5,this.loadTask();case 5:this.taskSavedData=e.sent,this.isTaskInit=!0;case 7:case"end":return e.stop()}}),e,this)})))}},{key:"initTask",value:function(){var t;return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var a,i,r,o,c,s,d,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=null!==(t=this.route.snapshot.paramMap.get(p.a.TaskDescId))&&void 0!==t?t:"t13",n.next=3,this.candidatesDelegator.getCandidatesCopy(!0);case 3:return this.candidates=n.sent,n.next=6,this.taskDelegator.getTaskDesk(a);case 6:return this.taskDesc=n.sent,n.next=9,this.taskDelegator.getTasksConfig(a);case 9:this.taskConfig=n.sent,i={main:{taskId:this.taskDesc.id,type:this.taskDesc.type,name:this.taskDesc.description},items:{}},r={},n.t0=regeneratorRuntime.keys(this.taskConfig.formItems);case 12:if((n.t1=n.t0()).done){n.next=26;break}if(o=n.t1.value,!(c=this.taskConfig.formItems[o])){n.next=24;break}n.t2=c.type,n.next="FormItemSingleSelect"===n.t2?19:"FormItemMultiSelect"===n.t2?21:"FormItemText"===n.t2?23:24;break;case 19:return r[o]={type:"FormItemSingleSelect"},n.abrupt("break",24);case 21:return r[o]={type:"FormItemMultiSelect"},n.abrupt("break",24);case 23:r[o]={type:"FormItemText"};case 24:n.next=12;break;case 26:s=e(this.candidates);try{for(s.s();!(d=s.n()).done;)l=d.value,i.items[l._id]={taskId:this.taskDesc.id,type:this.taskDesc.type,candidateId:l._id,formItem:JSON.parse(JSON.stringify(r)),formStatus:"Empty"}}catch(u){s.e(u)}finally{s.f()}return n.abrupt("return",i);case 29:case"end":return n.stop()}}),n,this)})))}},{key:"ionViewWillLeave",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.formsDelegator.checkTaskEmpty(this.taskSavedData,this.taskConfig)){e.next=4;break}this.msgService.showToast(this.langProvider.TaskEmptyDismissed,h.a.taskSavedToastInterval),e.next=9;break;case 4:return e.next=6,this.saveTask();case 6:this.taskSavedData=e.sent,this.msgService.showToast(this.langProvider.TaskSaved,h.a.taskSavedToastInterval),this.store.lastTasksChangeTime.next(new Date);case 9:case"end":return e.stop()}}),e,this)})))}},{key:"saveTask",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.formsDelegator.saveTask(this.taskSavedData,this.taskConfig);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"loadTask",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.route.snapshot.paramMap.get(p.a.SavedTaskId),n=this.taskSavedData,!t){e.next=7;break}return e.next=5,this.formsDelegator.loadTask(t);case 5:for(a in n=e.sent,this.taskSavedData.items)Object.prototype.hasOwnProperty.call(this.taskSavedData.items,a)&&(i=this.taskSavedData.items[a],n.items[a]||(n.items[a]=i));case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})))}},{key:"onSelectCandidate",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,a,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.formsDelegator.calcCoverage(this.taskSavedData,this.taskConfig),t=Object.keys(this.taskSavedData.items).reduce((function(e,t,n){return e[t]="Full"===i.taskSavedData.items[t].formStatus,e}),{}),e.next=4,this.popoverController.create({component:b,componentProps:{candidates:this.candidates,candidatesDone:t}});case 4:return n=e.sent,e.next=7,n.present();case 7:return e.next=9,n.onWillDismiss();case 9:(a=e.sent).data&&this.setSelectedCandidateFormSaveData(a.data);case 11:case"end":return e.stop()}}),e,this)})))}},{key:"setSelectedCandidateFormSaveData",value:function(e){this.selectedCandidate=e,this.selectedCandidateSaveData=this.taskSavedData.items[this.selectedCandidate._id]}},{key:"formSingleSelectChanged",value:function(e,t){var n;(null===(n=this.selectedCandidateSaveData)||void 0===n?void 0:n.formItem[t.key])||(this.selectedCandidateSaveData.formItem[t.key]={type:"FormItemSingleSelect"}),this.selectedCandidateSaveData.formItem[t.key].selection=e.detail.value,console.log()}},{key:"formMultiSelectChanged",value:function(e,t){var n;(null===(n=this.selectedCandidateSaveData)||void 0===n?void 0:n.formItem[t.key])||(this.selectedCandidateSaveData.formItem[t.key]={type:"FormItemMultiSelect"}),this.selectedCandidateSaveData.formItem[t.key].selection=e.detail.value,console.log()}},{key:"formSelectDescChanged",value:function(e,t){this.selectedCandidateSaveData.formItem[t.key].desc=e.detail.value,console.log()}},{key:"formTextChanged",value:function(e,t){var n;(null===(n=this.selectedCandidateSaveData)||void 0===n?void 0:n.formItem[t.key])||(this.selectedCandidateSaveData.formItem[t.key]={type:"FormItemText"}),this.selectedCandidateSaveData.formItem[t.key].value=e.detail.value,console.log()}},{key:"onTempClick",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.msgService.showModal(JSON.stringify(this.selectedCandidateSaveData));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"createComment",value:function(){this.router.navigate(["tabs/comments/create-comment",{taskDescId:this.taskDesc.id,unique:c.Guid.raw()}],{skipLocationChange:!0})}}]),t}()).\u0275fac=function(e){return new(e||$)(s.Ib(g.f),s.Ib(g.a),s.Ib(y.a),s.Ib(k.a),s.Ib(I.b),s.Ib(d.ib),s.Ib(C.a),s.Ib(S.a),s.Ib(d.ib),s.Ib(w.a))},$.\u0275cmp=s.Cb({type:$,selectors:[["app-forms"]],inputs:{isIntegrated:"isIntegrated"},decls:2,vars:2,consts:[[4,"ngIf"],["class","content",4,"ngIf"],["slot","start"],["slot","end"],["defaultHref","tabs/tasks"],["color","dark",1,"selectBtn",3,"click"],[1,"selectCandi"],[4,"ngIf","ngIfElse"],["noSelectedCandidate",""],[1,"avatar2",3,"candidate"],[1,"avatar2"],[1,"content"],["class","form",3,"direction",4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","cdkDrag","","cdkDragBoundary",".content"],["color","primary",3,"click"],["name","chatbox-ellipses"],[1,"form"],[4,"ngFor","ngForOf"],[1,"formItem",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"placeholder","interface","value","ionChange"],[3,"value",4,"ngFor","ngForOf"],["class","selectDesc",3,"value","placeholder","ionChange",4,"ngIf"],[3,"value"],[1,"selectDesc",3,"value","placeholder","ionChange"],["multiple","",3,"placeholder","interface","value","ionChange"],["position","floating"],[3,"type","value","ionChange"]],template:function(e,t){1&e&&(s.nc(0,x,14,3,"ion-header",0),s.nc(1,q,5,1,"ion-content",1)),2&e&&(s.dc("ngIf",!t.isIntegrated),s.yb(1),s.dc("ngIf",t.isTaskInit))},directives:[l.m,d.s,d.Z,d.k,d.F,d.g,d.h,d.X,d.j,u.a,d.n,d.o,d.p,d.t,l.l,l.n,l.o,d.Q,d.kb,d.R,d.v,d.lb,d.w,d.C],pipes:[l.g],styles:[".candidates[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{height:100%;overflow:scroll}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:flex-start;width:100%;margin-top:1rem}.formItem[_ngcontent-%COMP%]{margin-bottom:1rem}.avatar[_ngcontent-%COMP%]{margin:var(--avatar-margin)}.avatar[_ngcontent-%COMP%], .avatar2[_ngcontent-%COMP%]{height:var(--avatar-height);width:var(--avatar-width)}.selectedCandidate[_ngcontent-%COMP%]{background:#f08080}.selectBtn[_ngcontent-%COMP%]{height:auto;width:100%}.selectCandi[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;justify-content:space-between;align-items:center}hr[_ngcontent-%COMP%]{display:block;position:relative;padding:0;margin:8px auto;height:0;width:100%;max-height:0;font-size:1px;line-height:0;clear:both;border:none;border-top:.1rem solid var(--ion-color-dark);border-bottom:.1rem solid var(--ion-color-dark);height:1rem}"]}),$)}}])}();