(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{smMY:function(t,e,s){"use strict";s.r(e),s.d(e,"ion_reorder",(function(){return n})),s.d(e,"ion_reorder_group",(function(){return l}));var o=s("A36C"),r=s("Zgba"),i=s("qULd");const n=class{constructor(t){Object(o.o)(this,t)}onClick(t){const e=this.el.closest("ion-reorder-group");t.preventDefault(),e&&e.disabled||t.stopImmediatePropagation()}render(){const t=Object(r.b)(this),e="ios"===t?"reorder-three-outline":"reorder-two-sharp";return Object(o.j)(o.c,{class:t},Object(o.j)("slot",null,Object(o.j)("ion-icon",{name:e,lazy:!1,class:"reorder-icon",part:"icon"})))}get el(){return Object(o.k)(this)}};n.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};const l=class{constructor(t){Object(o.o)(this,t),this.ionItemReorder=Object(o.g)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const t=this.el.closest("ion-content");t&&(this.scrollEl=await t.getScrollElement()),this.gesture=(await Promise.resolve().then(s.bind(null,"iWo5"))).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const e=t.event.target.closest("ion-reorder");if(!e)return!1;const s=a(e,this.el);return!!s&&(t.data=s,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const o=this.el,r=o.children;if(!r||0===r.length)return;let n=0;for(let i=0;i<r.length;i++){const t=r[i];n+=t.offsetHeight,s.push(n),t.$ionIndex=i}const l=o.getBoundingClientRect();if(this.containerTop=l.top,this.containerBottom=l.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+h,this.scrollElBottom=t.bottom-h}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=c(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(p),Object(i.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),o=this.containerTop-s,r=Math.max(o,Math.min(t.currentY,this.containerBottom-s)),n=s+r-t.startY,l=this.itemIndexForTop(r-o);if(l!==this.lastToIndex){const t=c(e);this.lastToIndex=l,Object(i.b)(),this.reorderMove(t,l)}e.style.transform=`translateY(${n}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,s=c(t);e===s?this.completeSync():this.ionItemReorder.emit({from:s,to:e,complete:this.completeSync.bind(this)}),Object(i.e)()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,o=s.length,r=this.lastToIndex,i=c(e);r===i||void 0!==t&&!0!==t||this.el.insertBefore(e,i<r?s[r+1]:s[r]),Array.isArray(t)&&(t=u(t,i,r));for(let t=0;t<o;t++)s[t].style.transform="";e.style.transition="",e.classList.remove(p),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;let s=0;for(s=0;s<e.length&&!(e[s]>t);s++);return s}reorderMove(t,e){const s=this.selectedItemHeight,o=this.el.children;for(let r=0;r<o.length;r++){let i="";r>t&&r<=e?i=`translateY(${-s}px)`:r<t&&r>=e&&(i=`translateY(${s}px)`),o[r].style.transform=i}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-d:t>this.scrollElBottom&&(e=d),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=Object(r.b)(this);return Object(o.j)(o.c,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return Object(o.k)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},c=t=>t.$ionIndex,a=(t,e)=>{let s;for(;t;){if(s=t.parentElement,s===e)return t;t=s}},h=60,d=10,p="reorder-selected",u=(t,e,s)=>{const o=t[e];return t.splice(e,1),t.splice(s,0,o),t.slice()};l.style=".reorder-list-active>*{transition:transform 300ms;will-change:transform}.reorder-enabled{user-select:none}.reorder-enabled ion-reorder{display:block;cursor:grab;pointer-events:all;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:grabbing}.reorder-selected{position:relative;transition:none !important;box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{transform:translate3d(0,  0,  0)}"}}]);