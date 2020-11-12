!function(){function e(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}}function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27,26],{tEcr:function(n,r,a){"use strict";a.d(r,"a",(function(){return w}));var c=a("mrSG"),s=a("kLqA"),u=a("fXoL"),m=a("L5fO"),d=a("TEn/"),f=a("ofXK");function l(e,t){if(1&e&&(u.Nb(0,"span"),u.pc(1),u.Mb()),2&e){var n=u.Xb();u.yb(1),u.sc("",n.langProvider.Comment,": ",n.comment.TaskDescRef.description,"")}}function p(e,t){if(1&e&&(u.Nb(0,"span"),u.pc(1),u.Mb()),2&e){var n=u.Xb();u.yb(1),u.qc(n.langProvider.GeneralComment)}}var h,v,y=((h=function(){function e(t){o(this,e),this.langProvider=t}return i(e,[{key:"ngOnInit",value:function(){this.calcHistory()}},{key:"calcHistory",value:function(){this.comment=this.task}}]),e}()).\u0275fac=function(e){return new(e||h)(u.Ib(m.b))},h.\u0275cmp=u.Cb({type:h,selectors:[["app-comment-candidate-history"]],decls:12,vars:9,consts:[[1,"header"],[4,"ngIf","ngIfElse"],["elseNoTaskDesk",""],[2,"direction","ltr"],[1,"commentTxt"]],template:function(e,t){if(1&e&&(u.Lb(0),u.Nb(1,"ion-item"),u.Nb(2,"ion-label"),u.Nb(3,"div",0),u.nc(4,l,2,2,"span",1),u.nc(5,p,2,1,"ng-template",null,2,u.oc),u.Nb(7,"span",3),u.pc(8),u.Yb(9,"date"),u.Mb(),u.Mb(),u.Nb(10,"span",4),u.pc(11),u.Mb(),u.Mb(),u.Mb(),u.Kb()),2&e){var n=u.hc(6);u.yb(1),u.mc("direction",t.langProvider.LangDirection),u.yb(3),u.dc("ngIf",t.comment.TaskDescRef)("ngIfElse",n),u.yb(4),u.qc(u.ac(9,6,t.task.date,"dd/MM/yy HH:mm:ss")),u.yb(3),u.qc(null==t.comment?null:t.comment.comment)}},directives:[d.v,d.B,f.l],pipes:[f.d],styles:[".commentDate[_ngcontent-%COMP%]{font-size:.7rem;margin-bottom:.2rem;display:flex;justify-content:flex-end;color:var(--ion-color-medium)}.commentTxt[_ngcontent-%COMP%]{white-space:normal}.commentTask[_ngcontent-%COMP%]{margin-bottom:.2rem;color:var(--ion-color-tertiary)}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;color:var(--ion-color-medium)}"]}),h),b=a("h7jJ"),g=a("nbnm"),w=((v=function(){function n(e,t){o(this,n),this.dataProvider=e,this.entityNamer=t,this.commentsPrefix="comments"}return i(n,[{key:"getAllTasks",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.dataProvider.getAllTasks();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"mergeTasksAndCandidateComments",value:function(e,n){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",[].concat(t(e),t(n)).sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()})));case 1:case"end":return r.stop()}}),r)})))}},{key:"buildTasksGroupsByType",value:function(e){return e.reduce((function(e,t,n){return e[t.type]||(e[t.type]=[]),e[t.type].push(t),e}),{})}},{key:"loadCandidateComments",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(this.entityNamer.userPrefix(),"@").concat(this.commentsPrefix,"@").concat(e),t.next=3,this.dataProvider.loadEntities(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"loadComments",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this.entityNamer.userPrefix(),"@").concat(this.commentsPrefix),e.next=3,this.dataProvider.loadEntities(n);case 3:return e.abrupt("return",e.sent.sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()})).reduce((function(e,n,o){var a,i=e.length>0?e[e.length-1]:null,c=r.dataProvider.getCandidatesByIds([n.candidateId]);if(i&&n.comment===i.comment&&new Date(n.date).getTime()===i.date.getTime())(a=e[e.length-1].candidates).push.apply(a,t(c)),e[e.length-1].SavedComments.push(n);else{var s={comment:n.comment,candidates:c,date:new Date(n.date),SavedComments:[n],TaskDescRef:n.TaskDescRef};e.push(s)}return e}),[]));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"deleteComments",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.dataProvider.deleteEntities(e);case 2:case"end":return t.stop()}}),t,this)})))}},{key:"createComment",value:function(t){var n;return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var o,a,i,c,u,m,d,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=[],a=null!==(n=t.date)&&void 0!==n?n:new Date,i="".concat(this.entityNamer.userPrefix(),"@").concat(this.commentsPrefix),c=t.TaskDescRef?t.TaskDescRef.type:"general",u=e(t.candidates);try{for(u.s();!(m=u.n()).done;)d=m.value,f={type:"comment",_id:"".concat(i,"@").concat(d._id,"@").concat(c,"@").concat(s.Guid.raw()),date:a,candidateId:d._id,comment:t.comment,tags:t.tags,TaskDescRef:t.TaskDescRef},o.push(f)}catch(l){u.e(l)}finally{u.f()}return r.next=6,this.dataProvider.saveEntities(o);case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r,this)})))}},{key:"getTaskConfig",value:function(e){throw new Error("Method not implemented.")}},{key:"getTaskName",value:function(){throw new Error("Method not implemented.")}},{key:"saveTask",value:function(e,t){throw new Error("Method not implemented.")}},{key:"loadTask",value:function(e){throw new Error("Method not implemented.")}},{key:"getTaskHistory",value:function(){throw new Error("Method not implemented.")}},{key:"getComponent",value:function(){throw new Error("Method not implemented.")}},{key:"getHistoryComponent",value:function(){throw new Error("Method not implemented.")}},{key:"getCandidateHistoryComponent",value:function(){return y}},{key:"getCandidateAggregateComponent",value:function(){throw new Error("Method not implemented.")}},{key:"deleteTask",value:function(e){throw new Error("Method not implemented.")}},{key:"getTasksForCandidates",value:function(e){throw new Error("Method not implemented.")}},{key:"checkTaskEmpty",value:function(e,t){throw new Error("Method not implemented.")}}]),n}()).\u0275fac=function(e){return new(e||v)(u.Rb(b.a),u.Rb(g.a))},v.\u0275prov=u.Eb({token:v,factory:v.\u0275fac,providedIn:"root"}),v)}}])}();