(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("A36C"),o=n("iWo5"),i=n("qULd");const s=(t,e)=>{let n,s;const a=(t,r,o)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,r);i&&e(i)?i!==n&&(d(),c(i,o)):d()},c=(t,e)=>{n=t,s||(s=n);const o=n;Object(r.f)(()=>o.classList.add("ion-activated")),e()},d=(t=!1)=>{if(!n)return;const e=n;Object(r.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,i.a),onMove:t=>a(t.currentX,t.currentY,i.b),onEnd:()=>{d(!0),Object(i.e)(),s=void 0}})}},"74mu":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));const r=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,r)}return!1}},RybT:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("fXoL"),o=n("pQKU"),i=n("Gwuq"),s=n("TtBN"),a=n("nTzd");let c=(()=>{class t{constructor(t,e,n,r){this.basketDelegator=t,this.formsDelegator=e,this.orderedDelegator=n,this.tasksDelegator=r}getTaskDelegator(t){let e;switch(t.toLowerCase()){case"baskets":e=this.basketDelegator;break;case"forms":e=this.formsDelegator;break;case"ordered":e=this.orderedDelegator;break;case"comment":e=this.tasksDelegator;break;default:throw new Error(`Task delegator for type: ${t} does not exist !!!`)}return e}}return t.\u0275fac=function(e){return new(e||t)(r.Rb(o.a),r.Rb(i.a),r.Rb(s.a),r.Rb(a.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},VVJX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL");let o=(()=>{class t{constructor(t){this.viewContainerRef=t}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(r.O))},t.\u0275dir=r.Db({type:t,selectors:[["","appTaskHost",""]]}),t})()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r=async(t,e,n,r,o)=>{if(t)return t.attachViewToDom(e,n,o,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>i.classList.add(t)),o&&Object.assign(i,o),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,o=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},nTzd:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("mrSG"),o=n("kLqA"),i=n("fXoL"),s=n("L5fO"),a=n("TEn/"),c=n("ofXK");function d(t,e){if(1&t&&(i.Nb(0,"span"),i.pc(1),i.Mb()),2&t){const t=i.Xb();i.yb(1),i.sc("",t.langProvider.Comment,": ",t.comment.TaskDescRef.description,"")}}function l(t,e){if(1&t&&(i.Nb(0,"span"),i.pc(1),i.Mb()),2&t){const t=i.Xb();i.yb(1),i.qc(t.langProvider.GeneralComment)}}let m=(()=>{class t{constructor(t){this.langProvider=t}ngOnInit(){this.calcHistory()}calcHistory(){this.comment=this.task}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(s.b))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-comment-candidate-history"]],decls:12,vars:9,consts:[[1,"header"],[4,"ngIf","ngIfElse"],["elseNoTaskDesk",""],[2,"direction","ltr"],[1,"commentTxt"]],template:function(t,e){if(1&t&&(i.Lb(0),i.Nb(1,"ion-item"),i.Nb(2,"ion-label"),i.Nb(3,"div",0),i.nc(4,d,2,2,"span",1),i.nc(5,l,2,1,"ng-template",null,2,i.oc),i.Nb(7,"span",3),i.pc(8),i.Yb(9,"date"),i.Mb(),i.Mb(),i.Nb(10,"span",4),i.pc(11),i.Mb(),i.Mb(),i.Mb(),i.Kb()),2&t){const t=i.hc(6);i.yb(1),i.mc("direction",e.langProvider.LangDirection),i.yb(3),i.dc("ngIf",e.comment.TaskDescRef)("ngIfElse",t),i.yb(4),i.qc(i.ac(9,6,e.task.date,"dd/MM/yy HH:mm:ss")),i.yb(3),i.qc(null==e.comment?null:e.comment.comment)}},directives:[a.v,a.B,c.m],pipes:[c.e],styles:[".commentDate[_ngcontent-%COMP%]{font-size:.7rem;margin-bottom:.2rem;display:flex;justify-content:flex-end;color:var(--ion-color-medium)}.commentTxt[_ngcontent-%COMP%]{white-space:normal}.commentTask[_ngcontent-%COMP%]{margin-bottom:.2rem;color:var(--ion-color-tertiary)}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;color:var(--ion-color-medium)}"]}),t})();var u=n("h7jJ"),f=n("ufmx"),h=n("nbnm");let p=(()=>{class t{constructor(t,e,n){this.dataProvider=t,this.candidatesDelegator=e,this.entityNamer=n,this.commentsPrefix="comments"}mergeTasksAndCandidateComments(t,e){return Object(r.a)(this,void 0,void 0,(function*(){return[...t,...e].sort((t,e)=>new Date(e.date).getTime()-new Date(t.date).getTime())}))}loadCandidateComments(t){return Object(r.a)(this,void 0,void 0,(function*(){const e=`${this.entityNamer.userPrefix()}@${this.commentsPrefix}@${t}`;return yield this.dataProvider.loadEntitiesByPrefix(e)}))}loadComments(){return Object(r.a)(this,void 0,void 0,(function*(){const t=`${this.entityNamer.userPrefix()}@${this.commentsPrefix}`;return(yield this.dataProvider.loadEntitiesByPrefix(t)).sort((t,e)=>new Date(e.date).getTime()-new Date(t.date).getTime()).reduce((t,e,n)=>{const r=t.length>0?t[t.length-1]:null,o=this.candidatesDelegator.getCandidatesByIds([e.candidateId]);if(r&&e.comment===r.comment&&new Date(e.date).getTime()===r.date.getTime())t[t.length-1].candidates.push(...o),t[t.length-1].SavedComments.push(e);else{const n={comment:e.comment,candidates:o,date:new Date(e.date),SavedComments:[e],TaskDescRef:e.TaskDescRef};t.push(n)}return t},[])}))}deleteComments(t){return Object(r.a)(this,void 0,void 0,(function*(){yield this.dataProvider.deleteEntities(t)}))}createComment(t){var e;return Object(r.a)(this,void 0,void 0,(function*(){const n=[],r=null!==(e=t.date)&&void 0!==e?e:new Date,i=`${this.entityNamer.userPrefix()}@${this.commentsPrefix}`;let s;s=t.TaskDescRef?t.TaskDescRef.type:"general";for(const e of t.candidates){const a={type:"comment",_id:`${i}@${e._id}@${s}@${o.Guid.raw()}`,date:r,candidateId:e._id,comment:t.comment,tags:t.tags,TaskDescRef:t.TaskDescRef};n.push(a)}return yield this.dataProvider.saveEntities(n)}))}getTaskConfig(t){throw new Error("Method not implemented.")}getTaskName(){throw new Error("Method not implemented.")}saveTask(t,e){throw new Error("Method not implemented.")}loadTask(t){throw new Error("Method not implemented.")}getTaskHistory(){throw new Error("Method not implemented.")}getComponent(){throw new Error("Method not implemented.")}getHistoryComponent(){throw new Error("Method not implemented.")}getCandidateHistoryComponent(){return m}getCandidateAggregateComponent(){throw new Error("Method not implemented.")}deleteTask(t){throw new Error("Method not implemented.")}getTasksForCandidates(t){throw new Error("Method not implemented.")}checkTaskEmpty(t,e){throw new Error("Method not implemented.")}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(u.a),i.Rb(f.a),i.Rb(h.a))},t.\u0275prov=i.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},qULd:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{r.selection()},i=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=t=>{r.impact(t)}},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),s=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(e){return new(e||t)},imports:[[r.c,o.a,i.ab]]}),t})()}}]);