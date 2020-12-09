(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PWTB:function(e,t,n){"use strict";var o=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==o)return o;throw new Error("unable to locate global object")}();e.exports=t=o.fetch,o.fetch&&(t.default=o.fetch.bind(o)),t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response},TaIo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n("PWTB"))&&o.__esModule?o:{default:o};t.default=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{t=window.fetch}catch(i){t=r.default}try{var o="https://spreadsheets.google.com/feeds/cells/".concat(e,"/").concat(n,"/public/values?alt=json-in-script");return t(o).then((function(e){if(!e.ok)throw console.log("there is an error in the gsheets response"),new Error("Error fetching GSheet");return e.text()})).then((function(e){var t=e.replace("gdata.io.handleScriptLoaded(","").slice(0,-2);return JSON.parse(t)})).catch((function(e){throw new Error("Failed to fetch from GSheets API. Check your Sheet Id and the public availability of your GSheet.")}))}catch(i){throw new Error("General error when fetching GSheet: ".concat(i))}}},Z6ku:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n("TaIo"))&&o.__esModule?o:{default:o};function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}t.default=function(e,t,n){return(0,r.default)(e.sheetId,e.sheetNumber?e.sheetNumber:1).then((function(n){var o=function(e,t,n,o){var r,c=[{}],a={},s=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,void 0):void 0}}(e))){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw c}}}}(e.feed.entry);try{for(s.s();!(r=s.n()).done;){var u=r.value.gs$cell,l=u.$t,d=u.col,f=u.row,h=a[d];f<2?a[d]=l.toLowerCase():(void 0===c[f]&&(c[f]={}),void 0!==h&&h.length>0&&(c[f][h]=l))}}catch(b){s.e(b)}finally{s.f()}return c=c.filter((function(e){return Object.keys(e).length})),t||!n?c:function(e,t,n){return e.filter((function(e){var o=null,r=[];return!(void 0===e||e.length<=0||Object.keys(e).length<=0)&&(Object.keys(t).forEach((function(o){r.push(function(e,t,n){try{if(void 0!==e){if(e=e.toLowerCase().trim(),t=t.toLowerCase().trim(),"strict"===n)return e===t;if("loose"===n)return e.includes(t)||e==t}}catch(o){return console.log("error in matchValues: ".concat(o.message)),!1}return!1}(e[o],t[o],n.matching||"loose"))})),"or"===n.operator&&(o=r.some((function(e){return!0===e}))),"and"===n.operator&&(o=r.every((function(e){return!0===e}))),o)}))}(c,n,o)}(n,e.returnAllResults||!1,e.filter||!1,e.filterOptions||{operator:"or",matching:"loose"});t(o)})).catch((function(e){return n(e.message)}))}},sMI2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n("Z6ku"))&&o.__esModule?o:{default:o},i=function(e,t,n){return(0,r.default)(e,(function(e){t(e)}),(function(e){if(!n)throw new Error("g-sheets-api error: ".concat(e));n(e)}))};e.exports=i,t.default=i},x5Jj:function(e,t,n){"use strict";n.r(t),n.d(t,"PouchbPlayPageModule",(function(){return m}));var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),c=n("tyNb"),a=n("mrSG"),s=n("sMI2"),u=n("AytR"),l=n("fXoL"),d=n("h7jJ"),f=n("4UqN"),h=n("6nr9"),b=n("nbnm"),v=n("zrcv");const p=["video"],y=[{path:"",component:(()=>{class e{constructor(e,t,n,o,r){this.dataProvider=e,this.setupService=t,this.settingsService=n,this.entityNamer=o,this.msgService=r}ngOnInit(){}sync(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.dataProvider.syncToCouch(),yield this.msgService.showToast("DB Synced",500)}))}dropDb(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.setupService.clearSetup(),yield this.dataProvider.dropDb(),location.reload(),yield this.msgService.showToast("DB Dropped",500)}))}compactDb(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.dataProvider.compactDb(),yield this.msgService.showToast("DB Compacted",500)}))}getAllTasks(){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.dataProvider.getAllTasks();this.msgService.showModal(JSON.stringify(e))}))}googleSheet(){return Object(a.a)(this,void 0,void 0,(function*(){const e=new RegExp("https://docs.google.com/spreadsheets/d/(.*)/").exec(u.a.settings.validationSheetUri);s({sheetId:e[1],returnAllResults:!0},e=>{console.log()})}))}playVideo(){this.videoSrc="./assets/videos/VID-20200320-WA0027.mp4",this.videoPlayer.nativeElement.load(),this.videoPlayer.nativeElement.play()}sendMail(){return Object(a.a)(this,void 0,void 0,(function*(){const e=encodeURI(this.entityNamer.userPrefix()),t=this.settingsService.getSettingsItem("targetDataMail"),n=yield this.dataProvider.getAllDocs(),o=JSON.stringify(n);window.location.href=`mailto:${t}?subject=${e}&body=${o}`}))}}return e.\u0275fac=function(t){return new(t||e)(l.Ib(d.a),l.Ib(f.a),l.Ib(h.a),l.Ib(b.a),l.Ib(v.a))},e.\u0275cmp=l.Cb({type:e,selectors:[["app-pouchb-play"]],viewQuery:function(e,t){var n;1&e&&l.vc(p,!0),2&e&&l.gc(n=l.Wb())&&(t.videoPlayer=n.first)},decls:21,vars:0,consts:[["slot","end"],["defaultHref","/"],["expand","full","color","secondary",3,"click"]],template:function(e,t){1&e&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-buttons",0),l.Jb(3,"ion-back-button",1),l.Mb(),l.Nb(4,"ion-title"),l.pc(5,"pouchbPlay"),l.Mb(),l.Mb(),l.Mb(),l.Nb(6,"ion-content"),l.Nb(7,"ion-button",2),l.Vb("click",(function(){return t.dropDb()})),l.pc(8,"Drop DB"),l.Mb(),l.Nb(9,"ion-button",2),l.Vb("click",(function(){return t.sync()})),l.pc(10,"Sync"),l.Mb(),l.Nb(11,"ion-button",2),l.Vb("click",(function(){return t.compactDb()})),l.pc(12,"Compact DB"),l.Mb(),l.Nb(13,"ion-button",2),l.Vb("click",(function(){return t.getAllTasks()})),l.pc(14,"Get All Tasks"),l.Mb(),l.Nb(15,"ion-button",2),l.Vb("click",(function(){return t.googleSheet()})),l.pc(16,"Google Sheet"),l.Mb(),l.Nb(17,"ion-button",2),l.Vb("click",(function(){return t.playVideo()})),l.pc(18,"Video"),l.Mb(),l.Nb(19,"ion-button",2),l.Vb("click",(function(){return t.sendMail()})),l.pc(20,"Mail"),l.Mb(),l.Mb())},directives:[i.s,i.Z,i.k,i.g,i.h,i.X,i.n,i.j],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.video[_ngcontent-%COMP%]{height:auto;width:100%}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=l.Gb({type:e}),e.\u0275inj=l.Fb({factory:function(t){return new(t||e)},imports:[[c.h.forChild(y)],c.h]}),e})(),m=(()=>{class e{}return e.\u0275mod=l.Gb({type:e}),e.\u0275inj=l.Fb({factory:function(t){return new(t||e)},imports:[[o.c,r.a,i.bb,g]]}),e})()}}]);