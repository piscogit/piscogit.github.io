(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{k5eQ:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_route",function(){return a}),o.d(e,"ion_route_redirect",function(){return h}),o.d(e,"ion_router",function(){return S}),o.d(e,"ion_router_link",function(){return E});var n=o("wEJo"),r=o("1vRN"),i=o("E/Mt"),s=o("74mu");const a=class{constructor(t){Object(n.o)(this,t),this.ionRouteDataChanged=Object(n.g)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const o=t?Object.keys(t):[],n=e?Object.keys(e):[];if(o.length===n.length){for(const n of o)if(t[n]!==e[n])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},h=class{constructor(t){Object(n.o)(this,t),this.ionRouteRedirectChanged=Object(n.g)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},c=t=>"/"+t.filter(t=>t.length>0).join("/"),l=t=>{let e,o=[""];if(null!=t){const n=t.indexOf("?");n>-1&&(e=t.substr(n+1),t=t.substr(0,n)),o=t.split("/").map(t=>t.trim()).filter(t=>t.length>0),0===o.length&&(o=[""])}return{segments:o,queryString:e}},u=async(t,e,o,n,i=!1,s)=>{try{const a=f(t);if(n>=e.length||!a)return i;await new Promise(t=>Object(r.c)(a,t));const h=e[n],c=await a.setRouteId(h.id,h.params,o,s);return c.changed&&(o="root",i=!0),i=await u(c.element,e,o,n+1,i,s),c.markVisible&&await c.markVisible(),i}catch(a){return console.error(a),!1}},d=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",f=t=>{if(!t)return;if(t.matches(d))return t;const e=t.querySelector(d);return null!=e?e:void 0},g=(t,e)=>e.find(e=>((t,e)=>{const{from:o,to:n}=e;if(void 0===n)return!1;if(o.length>t.length)return!1;for(let r=0;r<o.length;r++){const e=o[r];if("*"===e)return!0;if(e!==t[r])return!1}return o.length===t.length})(t,e)),p=(t,e)=>{const o=Math.min(t.length,e.length);let n=0;for(let r=0;r<o;r++){const o=t[r],i=e[r];if(o.id.toLowerCase()!==i.id)break;if(o.params){const t=Object.keys(o.params);if(t.length===i.path.length){const e=t.map(t=>`:${t}`);for(let t=0;t<e.length&&e[t].toLowerCase()===i.path[t];t++)n++}}n++}return n},m=(t,e)=>{const o=new y(t);let n,r=!1;for(let i=0;i<e.length;i++){const t=e[i].path;if(""===t[0])r=!0;else{for(const e of t){const t=o.next();if(":"===e[0]){if(""===t)return null;n=n||[],(n[i]||(n[i]={}))[e.slice(1)]=t}else if(t!==e)return null}r=!1}}return r&&r!==(""===o.next())?null:n?e.map((t,e)=>({id:t.id,path:t.path,params:b(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave})):e},b=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,w=(t,e)=>{let o=null,n=0;for(const r of e){const e=m(t,r);if(null!==e){const t=v(e);t>n&&(n=t,o=e)}}return o},v=t=>{let e=1,o=1;for(const n of t)for(const t of n.path)":"===t[0]?e+=Math.pow(1,o):""!==t&&(e+=Math.pow(2,o)),o++;return e};class y{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const R=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,C=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=R(t,"to");return{from:l(R(t,"from")).segments,to:null==e?void 0:l(e)}}),j=t=>P(O(t)),O=t=>Array.from(t.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(t=>{const e=R(t,"component");return{path:l(R(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:O(t)}}),P=t=>{const e=[];for(const o of t)k([],e,o);return e},k=(t,e,o)=>{if((t=t.slice()).push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length)for(const n of o.children)k(t,e,n);else e.push(t)},S=class{constructor(t){Object(n.o)(this,t),this.ionRouteWillChange=Object(n.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(f(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})}));const t=await this.runGuards(this.getPath());if(!0!==t){if("object"==typeof t){const{redirect:e}=t,o=l(e);this.setPath(o.segments,"root",o.queryString),await this.writeNavStateRoot(o.segments,"root")}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(r.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(r.n)(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getPath();const o=await this.runGuards(e);if(!0!==o){if("object"!=typeof o)return!1;e=l(o.redirect).segments}return this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,e="forward",o){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);let n=l(t);const r=await this.runGuards(n.segments);if(!0!==r){if("object"!=typeof r)return!1;n=l(r.redirect)}return this.setPath(n.segments,e,n.queryString),this.writeNavStateRoot(n.segments,e,o)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const o=e.map(t=>t.id);console.debug(`%c ${c(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${o.join(", ")})`)}console.groupEnd()})(j(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${c(e.from)}`,"font-weight: bold"," TO: ",`$c ${c(e.to.segments)}`,"font-weight: bold");console.groupEnd()})(C(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:o}=await(async t=>{const e=[];let o,n=window.document.body;for(;o=f(n),o;){const t=await o.getRouteId();if(!t)break;n=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:o}})(),n=((t,e)=>{let o=null,n=0;for(const r of e){const e=p(t,r);e>n&&(o=r,n=e)}return o?o.map((e,o)=>({id:e.id,path:e.path,params:b(e.params,t[o]&&t[o].params)})):null})(e,j(this.el));if(!n)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const r=(t=>{const e=[];for(const o of t)for(const t of o.path)if(":"===t[0]){const n=o.params&&o.params[t.slice(1)];if(!n)return null;e.push(n)}else""!==t&&e.push(t);return e})(n);return r?(this.setPath(r,t),await this.safeWriteNavState(o,n,"root",r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&g(t,C(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){var t;const e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));const o=e.history.state,n=this.lastState;return this.lastState=o,o>n||o>=n&&n>0?"forward":o<n?"back":"root"}async writeNavStateRoot(t,e,o){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=C(this.el),r=g(t,n);let i=null;if(r){const{segments:o,queryString:n}=r.to;this.setPath(o,e,n),i=r.from,t=o}const s=j(this.el),a=w(t,s);return a?this.safeWriteNavState(document.body,a,e,t,i,0,o):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,o,n,r,i=0,s){const a=await this.lock();let h=!1;try{h=await this.writeNavState(t,e,o,n,r,i,s)}catch(c){console.error(c)}return a(),h}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async runGuards(t=this.getPath(),e){if(void 0===e&&(e=l(this.previousPath).segments),!t||!e)return!0;const o=j(this.el),n=w(e,o),r=n&&n[n.length-1].beforeLeave,i=!r||await r();if(!1===i||"object"==typeof i)return i;const s=w(t,o),a=s&&s[s.length-1].beforeEnter;return!a||a()}async writeNavState(t,e,o,n,r,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(n,r);a&&this.ionRouteWillChange.emit(a);const h=await u(t,e,o,i,!1,s);return this.busy=!1,a&&this.ionRouteDidChange.emit(a),h}setPath(t,e,o){this.state++,((t,e,o,n,r,i,s)=>{const a=((t,e,o)=>{let n=c(t);return e&&(n="#"+n),void 0!==o&&(n+="?"+o),n})([...l(this.root).segments,...n],o,s);"forward"===r?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,0,this.useHash,t,e,this.state,o)}getPath(){return((t,e,o)=>{const n=l(this.root).segments,r=o?t.hash.slice(1):t.pathname;return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let o=0;o<t.length;o++)if(t[o]!==e[o])return null;return e.length===t.length?[""]:e.slice(t.length)})(n,l(r).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,e){const o=this.previousPath,n=c(t);return this.previousPath=n,n===o?null:{from:o,redirectedFrom:e?c(e):null,to:n}}get el(){return Object(n.k)(this)}},E=class{constructor(t){Object(n.o)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(s.d)(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=Object(i.b)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(n.j)(n.c,{onClick:this.onClick,class:Object(s.a)(this.color,{[t]:!0,"ion-activatable":!0})},Object(n.j)("a",Object.assign({},e),Object(n.j)("slot",null)))}};E.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);