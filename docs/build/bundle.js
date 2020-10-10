var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let l=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const a=new Set;function d(t){a.forEach((e=>{e.c(t)||(a.delete(e),e.f())})),0!==a.size&&u(d)}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e){t.value=null==e?"":e}const w=new Set;let x,k=0;function S(t,e,n,o,r,s,i,c=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*s(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,f=t.ownerDocument;w.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(h("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${d} ${o}ms linear ${r}ms 1 both`,k+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),k-=r,k||u((()=>{k||(w.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),w.clear())})))}function R(t){x=t}function E(t){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(t)}const A=[],M=[],O=[],I=[],N=Promise.resolve();let U=!1;function j(t){O.push(t)}let J=!1;const V=new Set;function L(){if(!J){J=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];R(e),W(e.$$)}for(R(null),A.length=0;M.length;)M.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];V.has(e)||(V.add(e),e())}O.length=0}while(A.length);for(;I.length;)I.pop()();U=!1,J=!1,V.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let z;function D(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const P=new Set;let T;function q(){T={r:0,c:[],p:T}}function F(){T.r||r(T.c),T=T.p}function B(t,e){t&&t.i&&(P.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),T.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const H={duration:0};function K(n,o,i,c){let f=o(n,i),p=c?0:1,m=null,h=null,g=null;function y(){g&&C(n,g)}function $(t,e){const n=t.b-p;return e*=Math.abs(n),{a:p,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(o){const{delay:s=0,duration:i=300,easing:c=e,tick:b=t,css:v}=f||H,_={start:l()+s,b:o};o||(_.group=T,T.r+=1),m?h=_:(v&&(y(),g=S(n,p,o,i,s,c,v)),o&&b(0,1),m=$(_,i),j((()=>D(n,o,"start"))),function(t){let e;0===a.size&&u(d),new Promise((n=>{a.add(e={c:t,f:n})}))}((t=>{if(h&&t>h.start&&(m=$(h,i),h=null,D(n,m.b,"start"),v&&(y(),g=S(n,p,m.b,m.duration,0,c,f.css))),m)if(t>=m.end)b(p=m.b,1-p),D(n,m.b,"end"),h||(m.b?y():--m.group.r||r(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;p=m.a+m.d*c(e/m.duration),b(p,1-p)}return!(!m&&!h)})))}return{run(t){s(f)?(z||(z=Promise.resolve(),z.then((()=>{z=null}))),z).then((()=>{f=f(),b(t)})):b(t)},end(){y(),m=h=null}}}function Q(t,e){G(t,1,1,(()=>{e.delete(t.key)}))}function X(t){t&&t.c()}function Y(t,e,o){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,o),j((()=>{const e=c.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(j)}function Z(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(A.push(t),U||(U=!0,N.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,i,c,l,u=[-1]){const a=x;R(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=s?s(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&tt(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();n.intro&&B(e.$$.fragment),Y(e,n.target,n.anchor),L()}R(a)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ot="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),rt=new Uint8Array(16);function st(){if(!ot)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ot(rt)}var it=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ct(t){return"string"==typeof t&&it.test(t)}for(var lt=[],ut=0;ut<256;++ut)lt.push((ut+256).toString(16).substr(1));function at(t,e,n){var o=(t=t||{}).random||(t.rng||st)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=o[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(lt[t[e+0]]+lt[t[e+1]]+lt[t[e+2]]+lt[t[e+3]]+"-"+lt[t[e+4]]+lt[t[e+5]]+"-"+lt[t[e+6]]+lt[t[e+7]]+"-"+lt[t[e+8]]+lt[t[e+9]]+"-"+lt[t[e+10]]+lt[t[e+11]]+lt[t[e+12]]+lt[t[e+13]]+lt[t[e+14]]+lt[t[e+15]]).toLowerCase();if(!ct(n))throw TypeError("Stringified UUID is invalid");return n}(o)}function dt(t,{delay:n=0,duration:o=400,easing:r=e}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function ft(t){let e,n,o;return{c(){e=h("button"),e.textContent="up",b(e,"type","button"),b(e,"class","btn btn-secondary btn-sm ml-1")},m(r,i){p(r,e,i),n||(o=$(e,"click",(function(){s(t[4](t[0].id))&&t[4](t[0].id).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&m(e),n=!1,o()}}}function pt(t){let e,n,o;return{c(){e=h("button"),e.textContent="x",b(e,"type","button"),b(e,"class","btn btn-danger btn-sm ml-1 right")},m(r,i){p(r,e,i),n||(o=$(e,"click",(function(){s(t[2](t[0].id))&&t[2](t[0].id).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&m(e),n=!1,o()}}}function mt(t){let e,n,o,r,s,i,c,l,u=t[0].description+"",a=t[1]&&ft(t),d=t[1]&&pt(t);return{c(){e=h("div"),n=h("div"),a&&a.c(),o=y(),r=g(u),s=y(),d&&d.c(),b(n,"class","p-2"),b(e,"class",i="mb-1 "+t[3])},m(t,i){p(t,e,i),f(e,n),a&&a.m(n,null),f(n,o),f(n,r),f(n,s),d&&d.m(n,null),l=!0},p(t,[s]){t[1]?a?a.p(t,s):(a=ft(t),a.c(),a.m(n,o)):a&&(a.d(1),a=null),(!l||1&s)&&u!==(u=t[0].description+"")&&v(r,u),t[1]?d?d.p(t,s):(d=pt(t),d.c(),d.m(n,null)):d&&(d.d(1),d=null),(!l||8&s&&i!==(i="mb-1 "+t[3]))&&b(e,"class",i)},i(t){l||(j((()=>{c||(c=K(e,dt,{},!0)),c.run(1)})),l=!0)},o(t){c||(c=K(e,dt,{},!1)),c.run(0),l=!1},d(t){t&&m(e),a&&a.d(),d&&d.d(),t&&c&&c.end()}}}function ht(t,e,n){let{routine:o}=e,{editMode:r}=e,{onRemove:s}=e,{cardClass:i}=e,{onUp:c}=e;return t.$$set=t=>{"routine"in t&&n(0,o=t.routine),"editMode"in t&&n(1,r=t.editMode),"onRemove"in t&&n(2,s=t.onRemove),"cardClass"in t&&n(3,i=t.cardClass),"onUp"in t&&n(4,c=t.onUp)},[o,r,s,i,c]}class gt extends nt{constructor(t){super(),et(this,t,ht,mt,i,{routine:0,editMode:1,onRemove:2,cardClass:3,onUp:4})}}function yt(e){let n,o,i,c,l,u,a,d;return{c(){n=h("div"),o=h("div"),i=h("input"),c=y(),l=h("div"),u=h("button"),u.textContent="add",b(i,"class","form-control"),b(i,"type","text"),b(i,"placeholder","New"),b(o,"class","col-8 col-sm-10 col-md-10 col-lg-10 col-xl-11"),b(u,"type","button"),b(u,"class","btn btn-success"),b(l,"class","col"),b(n,"class","row my-1")},m(t,r){p(t,n,r),f(n,o),f(o,i),_(i,e[0]),f(n,c),f(n,l),f(l,u),a||(d=[$(i,"keypress",e[2]),$(i,"input",e[3]),$(u,"click",(function(){s(e[1])&&e[1].apply(this,arguments)}))],a=!0)},p(t,[n]){e=t,1&n&&i.value!==e[0]&&_(i,e[0])},i:t,o:t,d(t){t&&m(n),a=!1,r(d)}}}function $t(t,e,n){let{onAdd:o}=e,{editedRoutine:r}=e;return t.$$set=t=>{"onAdd"in t&&n(1,o=t.onAdd),"editedRoutine"in t&&n(0,r=t.editedRoutine)},[r,o,t=>{"Enter"===t.key&&o()},function(){r=this.value,n(0,r)}]}class bt extends nt{constructor(t){super(),et(this,t,$t,yt,i,{onAdd:1,editedRoutine:0})}}var vt={pastel:["card-pastel-1","card-pastel-2","card-pastel-3","card-pastel-4","card-pastel-5","card-pastel-6"],neon:["card-neon-1","card-neon-2","card-neon-3","card-neon-4","card-neon-5"],whiteboard:["text-1","text-2","text-3","text-4","text-5","text-6","text-7"]};const _t="routines",wt="theme",xt=()=>{const t=[{description:"eat",id:at()},{description:"sleep",id:at()}];null===localStorage.getItem(_t)&&localStorage.setItem(_t,JSON.stringify(t,null,2));const e=JSON.parse(localStorage.getItem(_t));null===localStorage.getItem(wt)&&localStorage.setItem(wt,JSON.stringify(0,null,2));return{routines:e,theme:JSON.parse(localStorage.getItem(wt))}},kt=(t,e)=>{t.length>0?localStorage.setItem(_t,JSON.stringify(t,null,2)):localStorage.removeItem(_t),localStorage.setItem(wt,JSON.stringify(e,null,2))};function St(t,e,n){const o=t.slice();return o[13]=e[n],o[15]=n,o}function Ct(t){let e,n,o;function r(e){t[11].call(null,e)}let s={onAdd:t[7]};return void 0!==t[1]&&(s.editedRoutine=t[1]),e=new bt({props:s}),M.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,"editedRoutine",r))),{c(){X(e.$$.fragment)},m(t,n){Y(e,t,n),o=!0},p(t,o){const r={};var s;!n&&2&o&&(n=!0,r.editedRoutine=t[1],s=()=>n=!1,I.push(s)),e.$set(r)},i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){G(e.$$.fragment,t),o=!1},d(t){Z(e,t)}}}function Rt(t,e){let n,o,r;return o=new gt({props:{editMode:e[0],routine:e[13],onRemove:e[9],onUp:e[10],cardClass:e[4][e[15]%e[4].length]}}),{key:t,first:null,c(){n=g(""),X(o.$$.fragment),this.first=n},m(t,e){p(t,n,e),Y(o,t,e),r=!0},p(t,e){const n={};1&e&&(n.editMode=t[0]),8&e&&(n.routine=t[13]),24&e&&(n.cardClass=t[4][t[15]%t[4].length]),o.$set(n)},i(t){r||(B(o.$$.fragment,t),r=!0)},o(t){G(o.$$.fragment,t),r=!1},d(t){t&&m(n),Z(o,t)}}}function Et(t){let e,n,o,r,s,i,c,l,u=t[5][t[2]]+"";return{c(){e=h("div"),n=h("div"),o=h("button"),o.textContent="theme",s=y(),i=g(u),b(o,"type","button"),b(o,"class",r="btn btn-primary"),b(n,"class","col textwhite"),b(e,"class","row")},m(r,u){p(r,e,u),f(e,n),f(n,o),f(n,s),f(n,i),c||(l=$(o,"click",t[6]),c=!0)},p(t,e){4&e&&u!==(u=t[5][t[2]]+"")&&v(i,u)},d(t){t&&m(e),c=!1,l()}}}function At(t){let e,n,o,r,s,i,c,l,u,a,d,v,_,w,x,k,S,C,R=[],E=new Map,A=t[0]&&Ct(t),M=t[3];const O=t=>t[13].id;for(let e=0;e<M.length;e+=1){let n=St(t,M,e),o=O(n);E.set(o,R[e]=Rt(o,n))}let I=t[0]&&Et(t);return{c(){e=h("link"),n=y(),o=h("div"),r=h("div"),s=h("div"),i=h("h1"),c=g("routines\r\n        "),l=h("button"),u=g("edit"),d=y(),A&&A.c(),v=y(),_=h("div"),w=h("div");for(let t=0;t<R.length;t+=1)R[t].c();x=y(),I&&I.c(),b(e,"rel","stylesheet"),b(e,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),b(l,"type","button"),b(l,"class",a=t[0]?"bton edit edit_active":"bton edit"),b(i,"class","textwhite"),b(s,"class","col"),b(r,"class","row"),b(w,"class","col"),b(_,"class","row"),b(o,"class","container")},m(a,m){f(document.head,e),p(a,n,m),p(a,o,m),f(o,r),f(r,s),f(s,i),f(i,c),f(i,l),f(l,u),f(o,d),A&&A.m(o,null),f(o,v),f(o,_),f(_,w);for(let t=0;t<R.length;t+=1)R[t].m(w,null);f(o,x),I&&I.m(o,null),k=!0,S||(C=$(l,"click",t[8]),S=!0)},p(t,[e]){if((!k||1&e&&a!==(a=t[0]?"bton edit edit_active":"bton edit"))&&b(l,"class",a),t[0]?A?(A.p(t,e),1&e&&B(A,1)):(A=Ct(t),A.c(),B(A,1),A.m(o,v)):A&&(q(),G(A,1,1,(()=>{A=null})),F()),1561&e){const n=t[3];q(),R=function(t,e,n,o,r,s,i,c,l,u,a,d){let f=t.length,p=s.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const g=[],y=new Map,$=new Map;for(m=p;m--;){const t=d(r,s,m),c=n(t);let l=i.get(c);l?o&&l.p(t,e):(l=u(c,t),l.c()),y.set(c,g[m]=l),c in h&&$.set(c,Math.abs(m-h[c]))}const b=new Set,v=new Set;function _(t){B(t,1),t.m(c,a),i.set(t.key,t),a=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],o=e.key,r=n.key;e===n?(a=e.first,f--,p--):y.has(r)?!i.has(o)||b.has(o)?_(e):v.has(r)?f--:$.get(o)>$.get(r)?(v.add(o),_(e)):(b.add(r),f--):(l(n,i),f--)}for(;f--;){const e=t[f];y.has(e.key)||l(e,i)}for(;p;)_(g[p-1]);return g}(R,e,O,1,t,n,E,w,Q,Rt,null,St),F()}t[0]?I?I.p(t,e):(I=Et(t),I.c(),I.m(o,null)):I&&(I.d(1),I=null)},i(t){if(!k){B(A);for(let t=0;t<M.length;t+=1)B(R[t]);k=!0}},o(t){G(A);for(let t=0;t<R.length;t+=1)G(R[t]);k=!1},d(t){m(e),t&&m(n),t&&m(o),A&&A.d();for(let t=0;t<R.length;t+=1)R[t].d();I&&I.d(),S=!1,C()}}}function Mt(t,e,n){let o=!1,r="",s=0,i=[],c=[];const l=Object.keys(vt),u=()=>{kt(i,s)};return E((()=>{"serviceWorker"in navigator&&window.addEventListener("load",(()=>navigator.serviceWorker.register("sw_cached_site.js").then((t=>console.log("Service Worker: Registered"))).catch((t=>console.log("Service Worker: Error: "+t)))));const t=xt();n(3,i=t.routines),n(2,s=t.theme%l.length),n(4,c=vt[l[s]])})),[o,r,s,i,c,l,()=>{n(2,s=(s+1)%l.length),n(4,c=vt[l[s]]),u()},()=>{r.length>0&&(n(3,i=[{description:r,id:at()}].concat(i)),n(1,r=""),n(0,o=!1)),u()},()=>{n(1,r=""),n(0,o=!o)},t=>{n(3,i=i.filter((e=>e.id!==t))),u()},t=>{const e=i.findIndex((e=>e.id===t));if(e>0){const o=i[e];n(3,i=i.filter((e=>e.id!==t))),i.splice(e-1,0,o),u()}},function(t){r=t,n(1,r)}]}return new class extends nt{constructor(t){super(),et(this,t,Mt,At,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
