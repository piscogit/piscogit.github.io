!function(){function t(t,i){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,i){if(!t)return;if("string"==typeof t)return e(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,i)}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function i(t,e,i,n,r,o,s){try{var a=t[o](s),l=a.value}catch(h){return void i(h)}a.done?e(l):Promise.resolve(l).then(n,r)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function a(t){i(s,r,o,a,l,"next",t)}function l(t){i(s,r,o,a,l,"throw",t)}a(void 0)}))}}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"8Mb5":function(e,i,o){"use strict";o.r(i),o.d(i,"ion_virtual_scroll",(function(){return u}));var s=o("A36C"),a=function(t,e){var i=l(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},l=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},h=function(t,e,i,n,r,o,s,a,l,h,u,c){for(var f=[],d=c+u,v=u;v<d;v++){var p=t[v];if(r){var g=r(p,v,t);null!=g&&f.push({i:h++,type:"header",value:g,index:v,height:i?i(g,v):s,reads:i?0:2,visible:!!i})}if(f.push({i:h++,type:"item",value:p,index:v,height:e?e(p,v):l,reads:e?0:2,visible:!!e}),o){var m=o(p,v,t);null!=m&&f.push({i:h++,type:"footer",value:m,index:v,height:n?n(m,v):a,reads:n?0:2,visible:!!n})}}return f},u=function(){function e(t){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Object(s.o)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){i.updateVirtualScroll()}}var i,o,l,u,f,d;return i=e,o=[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:(d=n(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.el.closest("ion-content"))){t.next=10;break}return t.next=4,e.getScrollElement();case 4:this.scrollEl=t.sent,this.contentEl=e,this.calcCells(),this.updateState(),t.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,i){var n=e.find((function(e){return"item"===e.type&&e.index===t}));return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(f=n(regeneratorRuntime.mark((function t(e){var i,n,r,o,s=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=s.length>1&&void 0!==s[1]?s[1]:-1,this.items){t.next=3;break}return t.abrupt("return");case 3:n=-1===i?this.items.length-e:i,r=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,e),o=h(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,e,n),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t}(this.cells,o,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(e-1,0),this.scheduleUpdate();case 5:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"checkEnd",value:(u=n(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(s.h)(this.readVS.bind(this)),Object(s.f)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.offsetParent;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var e,i,n=this.indexDirty,r=(e=this.currentScrollTop-this.viewportOffset,i=this.viewportHeight,{top:Math.max(e-100,0),bottom:e+i+100}),o=this.getHeightIndex(),l=function(t,e,i){for(var n=e.top,r=e.bottom,o=0;o<t.length&&!(t[o]>n);o++);for(var s=Math.max(o-2-1,0);o<t.length&&!(t[o]>=r);o++);return{offset:s,length:Math.min(o+2,t.length)-s}}(o,r);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(n,this.range,l)&&(this.range=l,function(e,i,n,r){var o,s=t(e);try{for(s.s();!(o=s.n()).done;){var a=o.value;a.change=0,a.d=!0}}catch(g){s.e(g)}finally{s.f()}for(var l=[],h=r.offset+r.length,u=function(t){var r=n[t],o=e.find((function(t){return t.d&&t.cell===r}));if(o){var s=i[t];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else l.push(r)},c=r.offset;c<h;c++)u(c);for(var f=e.filter((function(t){return t.d})),d=function(){var t=p[v],n=f.find((function(e){return e.d&&e.cell.type===t.type})),r=t.i;n?(n.d=!1,n.change=2,n.cell=t,n.top=i[r]):e.push({d:!1,cell:t,visible:!0,change:2,top:i[r]})},v=0,p=l;v<p.length;v++)d();e.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,o,this.cells,l),this.nodeRender?function(t,e,i,n){for(var r,o=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),s=o.length,l=0;l<i.length;l++){var h=i[l],u=h.cell;if(2===h.change){if(l<s)e(r=o[l],u,l);else{var c=a(t,u.type);(r=e(c,u,l)||c).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=u}else r=o[l];0!==h.change&&(r.style.transform="translate3d(0,".concat(h.top,"px,0)"));var f=u.visible;h.visible!==f&&(f?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),h.visible=f),u.reads>0&&(n(u,r),u.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(s.l)(this))}},{key:"updateCellHeight",value:function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(n):n()}},{key:"setCellHeight",value:function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=h(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,i=e.type,n=e.value,r=e.index;switch(i){case"item":return this.renderItem(n,r);case"header":return this.renderHeader(n,r);case"footer":return this.renderFooter(n,r)}}},{key:"render",value:function(){var t=this;return Object(s.j)(s.c,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(s.j)(c,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))}},{key:"el",get:function(){return Object(s.k)(this)}}],l=[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}],o&&r(i.prototype,o),l&&r(i,l),e}(),c=function(t,e,i){var n=t.dom;return i.map(e,(function(t,e){var i=n[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:o,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,".concat(i.top,"px,0)")})})})}))};u.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;transition-duration:0ms;will-change:transform}"}}])}();