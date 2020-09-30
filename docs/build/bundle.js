var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function u(){return a(" ")}function f(){return a("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){t.value=null==e?"":e}let h;function y(t){h=t}function v(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const w=[],b=[],E=[],x=[],$=Promise.resolve();let D=!1;function O(t){E.push(t)}let T=!1;const _=new Set;function L(){if(!T){T=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];y(e),R(e.$$)}for(y(null),w.length=0;b.length;)b.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];_.has(e)||(_.add(e),e())}E.length=0}while(w.length);for(;x.length;)x.pop()();D=!1,T=!1,_.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const S=new Set;let P;function k(){P={r:0,c:[],p:P}}function A(){P.r||o(P.c),P=P.p}function M(t,e){t&&t.i&&(S.delete(t),t.i(e))}function C(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),P.c.push((()=>{S.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function N(t,e){C(t,1,1,(()=>{e.delete(t.key)}))}function I(t,e,n,o,r,i,s,d,l,c,a,u){let f=t.length,g=i.length,p=f;const m={};for(;p--;)m[t[p].key]=p;const h=[],y=new Map,v=new Map;for(p=g;p--;){const t=u(r,i,p),d=n(t);let l=s.get(d);l?o&&l.p(t,e):(l=c(d,t),l.c()),y.set(d,h[p]=l),d in m&&v.set(d,Math.abs(p-m[d]))}const w=new Set,b=new Set;function E(t){M(t,1),t.m(d,a),s.set(t.key,t),a=t.first,g--}for(;f&&g;){const e=h[g-1],n=t[f-1],o=e.key,r=n.key;e===n?(a=e.first,f--,g--):y.has(r)?!s.has(o)||w.has(o)?E(e):b.has(r)?f--:v.get(o)>v.get(r)?(b.add(o),E(e)):(w.add(r),f--):(l(n,s),f--)}for(;f--;){const e=t[f];y.has(e.key)||l(e,s)}for(;g;)E(h[g-1]);return h}function j(t){t&&t.c()}function F(t,n,i){const{fragment:s,on_mount:d,on_destroy:l,after_update:c}=t.$$;s&&s.m(n,i),O((()=>{const n=d.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(O)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(w.push(t),D||(D=!0,$.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,r,i,s,d,c,a=[-1]){const u=h;y(e);const f=r.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let p=!1;if(g.ctx=i?i(e,f,((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&d(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),p&&G(e,t)),n})):[],g.update(),p=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();r.intro&&M(e.$$.fragment),F(e,r.target,r.anchor),L()}y(u)}class B{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var V="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),X=new Uint8Array(16);function Y(){if(!V)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(X)}var U=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function H(t){return"string"==typeof t&&U.test(t)}for(var q=[],J=0;J<256;++J)q.push((J+256).toString(16).substr(1));function Z(t,e,n){var o=(t=t||{}).random||(t.rng||Y)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=o[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(q[t[e+0]]+q[t[e+1]]+q[t[e+2]]+q[t[e+3]]+"-"+q[t[e+4]]+q[t[e+5]]+"-"+q[t[e+6]]+q[t[e+7]]+"-"+q[t[e+8]]+q[t[e+9]]+"-"+q[t[e+10]]+q[t[e+11]]+q[t[e+12]]+q[t[e+13]]+q[t[e+14]]+q[t[e+15]]).toLowerCase();if(!H(n))throw TypeError("Stringified UUID is invalid");return n}(o)}function K(t){const e=t.getBoundingClientRect();return{top:e.top+window.scrollY,bottom:e.bottom+window.scrollY,left:e.left+window.scrollX,right:e.right+window.scrollX}}function Q(t,e){return t.y<=e.bottom&&t.y>=e.top&&t.x>=e.left&&t.x<=e.right}function tt(t){return{x:((e=K(t)).left+e.right)/2,y:(e.top+e.bottom)/2};var e}function et(t,e){return Q(tt(t),K(e))}function nt(t,e){const n=tt(t),o=tt(e);return r=n,i=o,Math.sqrt(Math.pow(r.x-i.x,2)+Math.pow(r.y-i.y,2));var r,i}function ot(t,e){if(!et(t,e))return null;const n=e.children;if(0===n.length)return{index:0,isProximityBased:!0};for(let e=0;e<n.length;e++)if(et(t,n[e]))return{index:e,isProximityBased:!1};let o=Number.MAX_VALUE,r=void 0;for(let e=0;e<n.length;e++){const i=nt(t,n[e]);i<o&&(o=i,r=e)}return{index:r,isProximityBased:!0}}function rt(t,e,n){t.dispatchEvent(new CustomEvent("finalize",{detail:{items:e,info:n}}))}function it(t,e,n){t.dispatchEvent(new CustomEvent("consider",{detail:{items:e,info:n}}))}const st="draggedEntered",dt="draggedLeft",lt="draggedOverIndex",ct="draggedLeftDocument";function at(t,e,n){t.dispatchEvent(new CustomEvent(st,{detail:{indexObj:e,draggedEl:n}}))}function ut(t,e){t.dispatchEvent(new CustomEvent(dt,{detail:{draggedEl:e}}))}function ft(t,e,n){t.dispatchEvent(new CustomEvent(lt,{detail:{indexObj:e,draggedEl:n}}))}function gt(){let t;function e(){t={directionObj:void 0,stepPx:0}}function n(e){const{directionObj:o,stepPx:r}=t;o&&(e.scrollBy(o.x*r,o.y*r),window.requestAnimationFrame((()=>n(e))))}function o(t){return 25-t}return e(),{scrollIfNeeded:function(r,i){if(!i)return!1;const s=function(t,e){const n=K(e);return Q(t,n)?{top:t.y-n.top,bottom:n.bottom-t.y,left:t.x-n.left,right:Math.min(n.right,document.documentElement.clientWidth)-t.x}:null}(r,i);if(null===s)return e(),!1;const d=!!t.directionObj;let[l,c]=[!1,!1];return i.scrollHeight>i.clientHeight&&(s.bottom<25?(l=!0,t.directionObj={x:0,y:1},t.stepPx=o(s.bottom)):s.top<25&&(l=!0,t.directionObj={x:0,y:-1},t.stepPx=o(s.top)),!d&&l)||i.scrollWidth>i.clientWidth&&(s.right<25?(c=!0,t.directionObj={x:1,y:0},t.stepPx=o(s.right)):s.left<25&&(c=!0,t.directionObj={x:-1,y:0},t.stepPx=o(s.left)),!d&&c)?(n(i),!0):(e(),!1)},resetScrolling:e}}function pt(t){return JSON.stringify(t,null,2)}function mt(t){if(!t)throw new Error("cannot get depth of a falsy node");return ht(t,0)}function ht(t,e=0){return t.parentElement?ht(t.parentElement,e+1):e-1}const{scrollIfNeeded:yt,resetScrolling:vt}=gt();let wt;function bt(t,e,n=200){let o,r,i,s=!1;const d=Array.from(e).sort(((t,e)=>mt(e)-mt(t)));!function e(){const l=tt(t);if(!yt(l,o)&&i&&Math.abs(i.x-l.x)<10&&Math.abs(i.y-l.y)<10)return void(wt=window.setTimeout(e,n));if(function(t){const e=K(t);return e.right<0||e.left>document.documentElement.scrollWidth||e.bottom<0||e.top>document.documentElement.scrollHeight}(t))return console.debug("off document"),void function(t){window.dispatchEvent(new CustomEvent(ct,{detail:{draggedEl:t}}))}(t);i=l;let c=!1;for(const e of d){const n=ot(t,e);if(null===n)continue;const{index:i}=n;c=!0,e!==o?(o&&ut(o,t),at(e,n,t),o=e,r=i):i!==r&&(ft(e,n,t),r=i);break}!c&&s&&o?(ut(o,t),o=void 0,r=void 0,s=!1):s=!0,wt=window.setTimeout(e,n)}()}let Et;function xt(t){const e=t.touches?t.touches[0]:t;Et={x:e.clientX,y:e.clientY}}const{scrollIfNeeded:$t,resetScrolling:Dt}=gt();let Ot;function Tt(){Et&&$t(Et,document.documentElement),Ot=window.setTimeout(Tt,300)}function _t(t){return t+" 0.2s ease"}function Lt(t,e,n,o,r){const i=e.getBoundingClientRect(),s=t.getBoundingClientRect(),d=i.width-s.width,l=i.height-s.height;if(d||l){const e={left:(n-s.left)/s.width,top:(o-s.top)/s.height};t.style.height=i.height+"px",t.style.width=i.width+"px",t.style.left=parseFloat(t.style.left)-e.left*d+"px",t.style.top=parseFloat(t.style.top)-e.top*l+"px"}Rt(e,t),r()}function Rt(t,e){const n=window.getComputedStyle(t);Array.from(n).filter((t=>t.startsWith("background")||t.startsWith("padding")||t.startsWith("font")||t.startsWith("text")||t.startsWith("align")||t.startsWith("justify")||t.startsWith("display")||t.startsWith("flex")||t.startsWith("border")||"opacity"===t||"color"===t)).forEach((t=>e.style.setProperty(t,n.getPropertyValue(t),n.getPropertyPriority(t))))}function St(t,e){t.draggable=!1,t.ondragstart=()=>!1,e?(t.style.userSelect="",t.style.cursor=""):(t.style.userSelect="none",t.style.cursor="grab")}function Pt(t,e=(()=>{})){t.forEach((t=>{const n=e(t);Object.keys(n).forEach((e=>{t.style[e]=n[e]}))}))}function kt(t,e=(()=>{})){t.forEach((t=>{const n=e(t);Object.keys(n).forEach((e=>{t.style[e]=""}))}))}const At="isDndShadowItem",Mt="--any--",Ct={outline:"rgba(255, 255, 102, 0.7) solid 2px"};let Nt,It,jt,Ft,zt,Gt,Wt,Bt,Vt,Xt,Yt,Ut=!1,Ht=!1;const qt=new Map,Jt=new Map,Zt=new WeakMap;let Kt="id";function Qt(t,e){qt.get(e).delete(t),0===qt.get(e).size&&qt.delete(e)}function te(){console.debug("watching dragged element"),console.debug("arming window scroller"),window.addEventListener("mousemove",xt),window.addEventListener("touchmove",xt),Tt();const t=qt.get(Ft);for(const e of t)e.addEventListener(st,ne),e.addEventListener(dt,oe),e.addEventListener(lt,re);window.addEventListener(ct,se);const e=Math.max(100,...Array.from(t.keys()).map((t=>Jt.get(t).dropAnimationDurationMs)));bt(It,t,1.07*e)}function ee(){console.debug("unwatching dragged element"),console.debug("disarming window scroller"),window.removeEventListener("mousemove",xt),window.removeEventListener("touchmove",xt),Et=void 0,window.clearTimeout(Ot),Dt();const t=qt.get(Ft);for(const e of t)e.removeEventListener(st,ne),e.removeEventListener(dt,oe),e.removeEventListener(lt,re);window.removeEventListener(ct,se),console.debug("unobserving"),clearTimeout(wt),vt()}function ne(t){console.debug("dragged entered",t.currentTarget,t.detail);let{items:e,dropFromOthersDisabled:n}=Jt.get(t.currentTarget);if(n&&t.currentTarget!==zt)return void console.debug("drop is currently disabled");e=e.filter((t=>t.id!==Bt.id)),console.debug("dragged entered items "+pt(e));const{index:o,isProximityBased:r}=t.detail.indexObj;Wt=r&&o===t.currentTarget.children.length-1?o+1:o,Vt=t.currentTarget,e.splice(Wt,0,Bt),it(t.currentTarget,e,{trigger:ce.DRAGGED_ENTERED,id:jt.id})}function oe(t){console.debug("dragged left",t.currentTarget,t.detail);const{items:e,dropFromOthersDisabled:n}=Jt.get(t.currentTarget);n&&t.currentTarget!==zt?console.debug("drop is currently disabled"):(e.splice(Wt,1),Wt=void 0,Vt=void 0,it(t.currentTarget,e,{trigger:ce.DRAGGED_LEFT,id:jt.id}))}function re(t){console.debug("dragged is over index",t.currentTarget,t.detail);const{items:e,dropFromOthersDisabled:n}=Jt.get(t.currentTarget);if(n&&t.currentTarget!==zt)return void console.debug("drop is currently disabled");const{index:o}=t.detail.indexObj;e.splice(Wt,1),e.splice(o,0,Bt),Wt=o,it(t.currentTarget,e,{trigger:ce.DRAGGED_OVER_INDEX,id:jt.id})}function ie(t){t.preventDefault();const e=t.touches?t.touches[0]:t;Yt={x:e.clientX,y:e.clientY},It.style.transform=`translate3d(${Yt.x-Xt.x}px, ${Yt.y-Xt.y}px, 0)`}function se(){if(console.debug("dropped"),Ht=!0,window.removeEventListener("mousemove",ie),window.removeEventListener("touchmove",ie),window.removeEventListener("mouseup",se),window.removeEventListener("touchend",se),ee(),function(t){t.style.cursor="grab"}(It),Vt){console.debug("dropped in dz",Vt);let{items:t,type:e}=Jt.get(Vt);kt(qt.get(e),(t=>Jt.get(t).dropTargetStyle)),t=t.map((t=>t.hasOwnProperty(At)?jt:t)),de((function(){rt(Vt,t,{trigger:ce.DROPPED_INTO_ZONE,id:jt.id}),Vt!==zt&&rt(zt,Jt.get(zt).items,{trigger:ce.DROPPED_INTO_ANOTHER,id:jt.id}),Vt.children[Wt].style.visibility="",le()}))}else{console.debug("no dz available");let{items:e,type:n}=Jt.get(zt);function t(){e.splice(Gt,1,jt),rt(zt,e,{trigger:ce.DROPPED_OUTSIDE_OF_ANY,id:jt.id}),Vt.children[Wt].style.visibility="",le()}kt(qt.get(n),(t=>Jt.get(t).dropTargetStyle)),e.splice(Gt,0,Bt),Vt=zt,Wt=Gt,it(zt,e,{trigger:ce.DROPPED_OUTSIDE_OF_ANY,id:jt.id}),window.setTimeout((()=>de(t)),0)}}function de(t){const e=Vt.children[Wt].getBoundingClientRect(),n=e.left-parseFloat(It.style.left),o=e.top-parseFloat(It.style.top),{dropAnimationDurationMs:r}=Jt.get(Vt),i=`transform ${r}ms ease`;It.style.transition=It.style.transition?It.style.transition+","+i:i,It.style.transform=`translate3d(${n}px, ${o}px, 0)`,window.setTimeout(t,r)}function le(){It.remove(),Nt.remove(),It=void 0,Nt=void 0,jt=void 0,Ft=void 0,zt=void 0,Gt=void 0,Bt=void 0,Wt=void 0,Vt=void 0,Xt=void 0,Yt=void 0,Ut=!1,Ht=!1}const ce={DRAG_STARTED:"dragStarted",DRAGGED_ENTERED:st,DRAGGED_OVER_INDEX:lt,DRAGGED_LEFT:dt,DROPPED_INTO_ZONE:"droppedIntoZone",DROPPED_INTO_ANOTHER:"droppedIntoAnother",DROPPED_OUTSIDE_OF_ANY:"droppedOutsideOfAny"};function ae(t,e){const n={items:void 0,type:Mt,flipDurationMs:0,dragDisabled:!1,dropFromOthersDisabled:!1,dropTargetStyle:Ct,transformDraggedElement:()=>{}};console.debug(`dndzone good to go options: ${pt(e)}, config: ${pt(n)}`,{node:t});let o=new Map;function r(){window.removeEventListener("mousemove",s),window.removeEventListener("touchmove",s),window.removeEventListener("mouseup",i),window.removeEventListener("touchend",i)}function i(){r(),Nt=void 0,Xt=void 0,Yt=void 0}function s(t){t.preventDefault();const e=t.touches?t.touches[0]:t;Yt={x:e.clientX,y:e.clientY},(Math.abs(Yt.x-Xt.x)>=3||Math.abs(Yt.y-Xt.y)>=3)&&(r(),function(){console.debug("drag start config: "+pt(n),Nt),Ut=!0;const t=o.get(Nt);Gt=t,zt=Nt.parentElement;const{items:e,type:r}=n;function i(){const{items:t}=n;var e;It.parentElement||t[Gt]&&jt.id===t[Gt].id?window.requestAnimationFrame(i):(document.body.appendChild(It),te(),(e=Nt).style.display="none",e.style.position="fixed",e.style.zIndex="-5",document.body.appendChild(Nt))}jt={...e[t]},Ft=r,Bt={...jt,[At]:!0},It=function(t){const e=t.getBoundingClientRect(),n=t.cloneNode(!0);return Rt(t,n),n.id="svelte-dnd-action-dragged-el",n.name="svelte-dnd-action-dragged-el",n.style.position="fixed",n.style.top=e.top+"px",n.style.left=e.left+"px",n.style.margin="0",n.style.boxSizing="border-box",n.style.height=e.height+"px",n.style.width=e.width+"px",n.style.transition=`${_t("width")}, ${_t("height")}, ${_t("background-color")}, ${_t("opacity")}, ${_t("color")} `,window.setTimeout((()=>n.style.transition+=`, ${_t("top")}, ${_t("left")}`),0),n.style.zIndex="9999",n.style.cursor="grabbing",n}(Nt),window.requestAnimationFrame(i),Pt(Array.from(qt.get(n.type)).filter((t=>t===zt||!Jt.get(t).dropFromOthersDisabled)),(t=>Jt.get(t).dropTargetStyle)),e.splice(t,1),it(zt,e,{trigger:ce.DRAG_STARTED,id:jt.id}),window.addEventListener("mousemove",ie,{passive:!1}),window.addEventListener("touchmove",ie,{passive:!1,capture:!1}),window.addEventListener("mouseup",se,{passive:!1}),window.addEventListener("touchend",se,{passive:!1})}())}function d(t){if(t.button)return void console.debug("ignoring none left click button: "+t.button);if(Ut)return void console.debug("cannot start a new drag before finalizing previous one");t.stopPropagation();const e=t.touches?t.touches[0]:t;Xt={x:e.clientX,y:e.clientY},Yt={...Xt},Nt=t.currentTarget,window.addEventListener("mousemove",s,{passive:!1}),window.addEventListener("touchmove",s,{passive:!1,capture:!1}),window.addEventListener("mouseup",i,{passive:!1}),window.addEventListener("touchend",i,{passive:!1})}function l({items:e,flipDurationMs:r=0,type:i="--any--",dragDisabled:s=!1,dropFromOthersDisabled:l=!1,dropTargetStyle:c=Ct,transformDraggedElement:a=(()=>{}),...u}){if(Object.keys(u).length>0&&console.warn("dndzone will ignore unknown options",u),!e)throw new Error("no 'items' key provided to dndzone");const f=e.find((t=>!t.hasOwnProperty(Kt)));if(f)throw new Error("missing 'id' property for item "+pt(f));var g,p;n.dropAnimationDurationMs=r,n.type&&i!==n.type&&Qt(t,n.type),n.type=i,g=t,p=i,console.debug("registering drop-zone if absent"),qt.has(p)||qt.set(p,new Set),qt.get(p).has(g)||qt.get(p).add(g),n.items=[...e],n.dragDisabled=s,n.transformDraggedElement=a,!Ut||Ht||function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!e.hasOwnProperty(n)||e[n]!==t[n])return!1;return!0}(c,n.dropTargetStyle)||(kt([t],(()=>n.dropTargetStyle)),Pt([t],(()=>c))),n.dropTargetStyle=c,Ut&&n.dropFromOthersDisabled!==l&&(l?kt([t],(t=>Jt.get(t).dropTargetStyle)):Pt([t],(t=>Jt.get(t).dropTargetStyle))),n.dropFromOthersDisabled=l,Jt.set(t,n);for(let e=0;e<t.children.length;e++){const r=t.children[e];St(r,s),n.items[e].hasOwnProperty(At)?(Lt(It,r,Yt.x,Yt.y,(()=>n.transformDraggedElement(It,jt,e))),r.style.visibility="hidden"):(r.removeEventListener("mousedown",Zt.get(r)),r.removeEventListener("touchstart",Zt.get(r)),s||(r.addEventListener("mousedown",d),r.addEventListener("touchstart",d),Zt.set(r,d)),o.set(r,e))}}return l(e),{update:t=>{console.debug("dndzone will update newOptions: "+pt(t)),l(t)},destroy:()=>{console.debug("dndzone will destroy"),Qt(t,n.type),Jt.delete(t)}}}function ue(t){let e,n,o;return{c(){e=c("button"),e.textContent="-",p(e,"type","button"),p(e,"class","btn btn-danger btn-sm ml-1")},m(i,s){d(i,e,s),n||(o=g(e,"click",(function(){r(t[2](t[0].id))&&t[2](t[0].id).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&l(e),n=!1,o()}}}function fe(e){let n,o,r,i,f,g=e[0].description+"",m=e[1]&&ue(e);return{c(){var t,s,d;n=c("div"),o=c("div"),r=a(g),i=u(),m&&m.c(),p(o,"class","card-body "),t="font-size",s="20px",o.style.setProperty(t,s,d?"important":""),p(n,"class",f="card mb-1 "+e[3])},m(t,e){d(t,n,e),s(n,o),s(o,r),s(o,i),m&&m.m(o,null)},p(t,[e]){1&e&&g!==(g=t[0].description+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,g),t[1]?m?m.p(t,e):(m=ue(t),m.c(),m.m(o,null)):m&&(m.d(1),m=null),8&e&&f!==(f="card mb-1 "+t[3])&&p(n,"class",f)},i:t,o:t,d(t){t&&l(n),m&&m.d()}}}function ge(t,e,n){let{routine:o}=e,{editMode:r}=e,{onRemove:i}=e,{bgClass:s}=e;return t.$$set=t=>{"routine"in t&&n(0,o=t.routine),"editMode"in t&&n(1,r=t.editMode),"onRemove"in t&&n(2,i=t.onRemove),"bgClass"in t&&n(3,s=t.bgClass)},[o,r,i,s]}class pe extends B{constructor(t){super(),W(this,t,ge,fe,i,{routine:0,editMode:1,onRemove:2,bgClass:3})}}function me(t,e,n){const o=t.slice();return o[10]=e[n],o[12]=n,o}function he(t,e,n){const o=t.slice();return o[10]=e[n],o[12]=n,o}function ye(t){let e,n,o=[],r=new Map,i=t[2];const s=t=>t[10].id;for(let e=0;e<i.length;e+=1){let n=me(t,i,e),d=s(n);r.set(d,o[e]=we(d,n))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=f()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);d(t,e,r),n=!0},p(t,n){if(141&n){const i=t[2];k(),o=I(o,n,s,1,t,i,r,e.parentNode,N,we,e,me),A()}},i(t){if(!n){for(let t=0;t<i.length;t+=1)M(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)C(o[t]);n=!1},d(t){for(let e=0;e<o.length;e+=1)o[e].d(t);t&&l(e)}}}function ve(e){let n,i,s,a,u,f=[],p=new Map,m=e[2];const h=t=>t[10].id;for(let t=0;t<m.length;t+=1){let n=he(e,m,t),o=h(n);p.set(o,f[t]=be(o,n))}return{c(){n=c("section");for(let t=0;t<f.length;t+=1)f[t].c()},m(o,l){d(o,n,l);for(let t=0;t<f.length;t+=1)f[t].m(n,null);var c;s=!0,a||(u=[(c=i=ae.call(null,n,{items:e[2]}),c&&r(c.destroy)?c.destroy:t),g(n,"consider",e[4]),g(n,"finalize",e[4])],a=!0)},p(t,e){if(141&e){const o=t[2];k(),f=I(f,e,h,1,t,o,p,n,N,be,null,he),A()}i&&r(i.update)&&4&e&&i.update.call(null,{items:t[2]})},i(t){if(!s){for(let t=0;t<m.length;t+=1)M(f[t]);s=!0}},o(t){for(let t=0;t<f.length;t+=1)C(f[t]);s=!1},d(t){t&&l(n);for(let t=0;t<f.length;t+=1)f[t].d();a=!1,o(u)}}}function we(t,e){let n,o,r;return o=new pe({props:{editMode:e[0],routine:e[10],onRemove:e[7],bgClass:e[3][e[12]%e[3].length]}}),{key:t,first:null,c(){n=f(),j(o.$$.fragment),this.first=n},m(t,e){d(t,n,e),F(o,t,e),r=!0},p(t,e){const n={};1&e&&(n.editMode=t[0]),4&e&&(n.routine=t[10]),4&e&&(n.bgClass=t[3][t[12]%t[3].length]),o.$set(n)},i(t){r||(M(o.$$.fragment,t),r=!0)},o(t){C(o.$$.fragment,t),r=!1},d(t){t&&l(n),z(o,t)}}}function be(t,e){let n,o,r;return o=new pe({props:{editMode:e[0],routine:e[10],onRemove:e[7],bgClass:e[3][e[12]%e[3].length]}}),{key:t,first:null,c(){n=f(),j(o.$$.fragment),this.first=n},m(t,e){d(t,n,e),F(o,t,e),r=!0},p(t,e){const n={};1&e&&(n.editMode=t[0]),4&e&&(n.routine=t[10]),4&e&&(n.bgClass=t[3][t[12]%t[3].length]),o.$set(n)},i(t){r||(M(o.$$.fragment,t),r=!0)},o(t){C(o.$$.fragment,t),r=!1},d(t){t&&l(n),z(o,t)}}}function Ee(t){let e,n,r,i,a,f,h,y;return{c(){e=c("div"),n=c("div"),r=c("input"),i=u(),a=c("div"),f=c("button"),f.textContent="add",p(r,"class","form-control"),p(r,"type","text"),p(r,"placeholder","Routine description"),p(n,"class","col-8 col-sm-10 col-md-10 col-lg-10 col-xl-11"),p(f,"type","button"),p(f,"class","btn btn-success"),p(a,"class","col"),p(e,"class","row my-1")},m(o,l){d(o,e,l),s(e,n),s(n,r),m(r,t[1]),s(e,i),s(e,a),s(a,f),h||(y=[g(r,"input",t[8]),g(f,"click",t[5])],h=!0)},p(t,e){2&e&&r.value!==t[1]&&m(r,t[1])},d(t){t&&l(e),h=!1,o(y)}}}function xe(t){let e,n,o,r,i,a,f,m,h,y,v,w,b,E,x,$,D;const O=[ve,ye],T=[];function _(t,e){return t[0]?0:1}m=_(t),h=T[m]=O[m](t);let L=t[0]&&Ee(t);return{c(){e=c("link"),n=u(),o=c("div"),r=c("div"),r.innerHTML='<div class="col"><h1 class="text-white">routines</h1></div>',i=u(),a=c("div"),f=c("div"),h.c(),y=u(),L&&L.c(),v=u(),w=c("div"),b=c("div"),E=c("button"),E.textContent="edit",p(e,"rel","stylesheet"),p(e,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),p(r,"class","row"),p(f,"class","col"),p(a,"class","row"),p(E,"type","button"),p(E,"class","btn btn-warning"),p(b,"class","col"),p(w,"class","row"),p(o,"class","container")},m(l,c){s(document.head,e),d(l,n,c),d(l,o,c),s(o,r),s(o,i),s(o,a),s(a,f),T[m].m(f,null),s(o,y),L&&L.m(o,null),s(o,v),s(o,w),s(w,b),s(b,E),x=!0,$||(D=g(E,"click",t[6]),$=!0)},p(t,[e]){let n=m;m=_(t),m===n?T[m].p(t,e):(k(),C(T[n],1,1,(()=>{T[n]=null})),A(),h=T[m],h||(h=T[m]=O[m](t),h.c()),M(h,1),h.m(f,null)),t[0]?L?L.p(t,e):(L=Ee(t),L.c(),L.m(o,v)):L&&(L.d(1),L=null)},i(t){x||(M(h),x=!0)},o(t){C(h),x=!1},d(t){l(e),t&&l(n),t&&l(o),T[m].d(),L&&L.d(),$=!1,D()}}}const $e="routines";function De(t,e,n){let o=!1,r="",i=[];const s=()=>{localStorage.setItem($e,JSON.stringify(i,null,2))};return v((()=>{const t=[{description:"eat",id:Z()},{description:"sleep",id:Z()}];null===localStorage.getItem($e)&&localStorage.setItem($e,JSON.stringify(t,null,2)),n(2,i=JSON.parse(localStorage.getItem($e)))})),[o,r,i,["color-1","color-6","color-3","color-4","color-2","color-5"],t=>{n(2,i=t.detail.items),s()},()=>{r.length>0&&(n(2,i=i.concat({description:r,id:Z()})),n(1,r=""),n(0,o=!1)),s()},()=>{n(0,o=!o)},t=>{n(2,i=i.filter((e=>e.id!==t))),s()},function(){r=this.value,n(1,r)}]}return new class extends B{constructor(t){super(),W(this,t,De,xe,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
