var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){t.value=null==e?"":e}let m;function h(t){m=t}function b(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const y=[],$=[],v=[],w=[],k=Promise.resolve();let x=!1;function _(t){v.push(t)}let S=!1;const C=new Set;function E(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];h(e),M(e.$$)}for(h(null),y.length=0;$.length;)$.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];C.has(e)||(C.add(e),e())}v.length=0}while(y.length);for(;w.length;)w.pop()();x=!1,S=!1,C.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const R=new Set;let U;function I(t,e){t&&t.i&&(R.delete(t),t.i(e))}function N(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),U.c.push((()=>{R.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function O(t,e){N(t,1,1,(()=>{e.delete(t.key)}))}function j(t,n,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,i),_((()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(_)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(y.push(t),x||(x=!0,k.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,i,c,s,u,a=[-1]){const d=m;h(e);const f=r.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let g=!1;if(p.ctx=i?i(e,f,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&V(e,t)),n})):[],p.update(),g=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&I(e.$$.fragment),j(e,r.target,r.anchor),E()}h(d)}class W{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var J="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),T=new Uint8Array(16);function q(){if(!J)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return J(T)}var z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function B(t){return"string"==typeof t&&z.test(t)}for(var D=[],F=0;F<256;++F)D.push((F+256).toString(16).substr(1));function P(t,e,n){var o=(t=t||{}).random||(t.rng||q)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=o[r];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(D[t[e+0]]+D[t[e+1]]+D[t[e+2]]+D[t[e+3]]+"-"+D[t[e+4]]+D[t[e+5]]+"-"+D[t[e+6]]+D[t[e+7]]+"-"+D[t[e+8]]+D[t[e+9]]+"-"+D[t[e+10]]+D[t[e+11]]+D[t[e+12]]+D[t[e+13]]+D[t[e+14]]+D[t[e+15]]).toLowerCase();if(!B(n))throw TypeError("Stringified UUID is invalid");return n}(o)}function G(t){let e,n,o;return{c(){e=u("button"),e.textContent="up",p(e,"type","button"),p(e,"class","btn btn-secondary btn-sm ml-1")},m(i,c){s(i,e,c),n||(o=f(e,"click",(function(){r(t[4](t[0].id))&&t[4](t[0].id).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&l(e),n=!1,o()}}}function H(t){let e,n,o;return{c(){e=u("button"),e.textContent="x",p(e,"type","button"),p(e,"class","btn btn-danger btn-sm ml-1 right")},m(i,c){s(i,e,c),n||(o=f(e,"click",(function(){r(t[2](t[0].id))&&t[2](t[0].id).apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&l(e),n=!1,o()}}}function K(e){let n,o,r,i,f,g,m=e[0].description+"",h=e[1]&&G(e),b=e[1]&&H(e);return{c(){n=u("div"),o=u("div"),h&&h.c(),r=d(),i=a(m),f=d(),b&&b.c(),p(o,"class","p-2"),p(n,"class",g="card mb-1 "+e[3])},m(t,e){s(t,n,e),c(n,o),h&&h.m(o,null),c(o,r),c(o,i),c(o,f),b&&b.m(o,null)},p(t,[e]){t[1]?h?h.p(t,e):(h=G(t),h.c(),h.m(o,r)):h&&(h.d(1),h=null),1&e&&m!==(m=t[0].description+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,m),t[1]?b?b.p(t,e):(b=H(t),b.c(),b.m(o,null)):b&&(b.d(1),b=null),8&e&&g!==(g="card mb-1 "+t[3])&&p(n,"class",g)},i:t,o:t,d(t){t&&l(n),h&&h.d(),b&&b.d()}}}function Q(t,e,n){let{routine:o}=e,{editMode:r}=e,{onRemove:i}=e,{bgClass:c}=e,{onUp:s}=e;return t.$$set=t=>{"routine"in t&&n(0,o=t.routine),"editMode"in t&&n(1,r=t.editMode),"onRemove"in t&&n(2,i=t.onRemove),"bgClass"in t&&n(3,c=t.bgClass),"onUp"in t&&n(4,s=t.onUp)},[o,r,i,c,s]}class X extends W{constructor(t){super(),L(this,t,Q,K,i,{routine:0,editMode:1,onRemove:2,bgClass:3,onUp:4})}}function Y(t,e,n){const o=t.slice();return o[10]=e[n],o[12]=n,o}function Z(t){let e,n,r,i,a,m,h,b;return{c(){e=u("div"),n=u("div"),r=u("input"),i=d(),a=u("div"),m=u("button"),m.textContent="add",p(r,"class","form-control"),p(r,"type","text"),p(r,"placeholder","New"),p(n,"class","col-8 col-sm-10 col-md-10 col-lg-10 col-xl-11"),p(m,"type","button"),p(m,"class","btn btn-success"),p(a,"class","col"),p(e,"class","row my-1")},m(o,l){s(o,e,l),c(e,n),c(n,r),g(r,t[1]),c(e,i),c(e,a),c(a,m),h||(b=[f(r,"input",t[8]),f(m,"click",t[4])],h=!0)},p(t,e){2&e&&r.value!==t[1]&&g(r,t[1])},d(t){t&&l(e),h=!1,o(b)}}}function tt(t,e){let n,o,r;return o=new X({props:{editMode:e[0],routine:e[10],onRemove:e[6],onUp:e[7],bgClass:e[3][e[12]%e[3].length]}}),{key:t,first:null,c(){var t;n=a(""),(t=o.$$.fragment)&&t.c(),this.first=n},m(t,e){s(t,n,e),j(o,t,e),r=!0},p(t,e){const n={};1&e&&(n.editMode=t[0]),4&e&&(n.routine=t[10]),4&e&&(n.bgClass=t[3][t[12]%t[3].length]),o.$set(n)},i(t){r||(I(o.$$.fragment,t),r=!0)},o(t){N(o.$$.fragment,t),r=!1},d(t){t&&l(n),A(o,t)}}}function et(t){let e,n,r,i,g,m,h,b,y,$,v,w,k,x,_,S,C,E=[],M=new Map,R=t[0]&&Z(t),j=t[2];const A=t=>t[10].id;for(let e=0;e<j.length;e+=1){let n=Y(t,j,e),o=A(n);M.set(o,E[e]=tt(o,n))}return{c(){e=u("link"),n=d(),r=u("div"),i=u("div"),g=u("div"),m=u("h1"),h=a("routines\r\n        "),b=u("button"),y=a("edit"),v=d(),R&&R.c(),w=d(),k=u("div"),x=u("div");for(let t=0;t<E.length;t+=1)E[t].c();p(e,"rel","stylesheet"),p(e,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),p(b,"type","button"),p(b,"class",$=t[0]?"bton edit edit_active":"bton edit"),p(m,"class","text-white"),p(g,"class","col"),p(i,"class","row"),p(x,"class","col"),p(k,"class","row"),p(r,"class","container")},m(o,l){c(document.head,e),s(o,n,l),s(o,r,l),c(r,i),c(i,g),c(g,m),c(m,h),c(m,b),c(b,y),c(r,v),R&&R.m(r,null),c(r,w),c(r,k),c(k,x);for(let t=0;t<E.length;t+=1)E[t].m(x,null);_=!0,S||(C=f(b,"click",t[5]),S=!0)},p(t,[e]){if((!_||1&e&&$!==($=t[0]?"bton edit edit_active":"bton edit"))&&p(b,"class",$),t[0]?R?R.p(t,e):(R=Z(t),R.c(),R.m(r,w)):R&&(R.d(1),R=null),205&e){const n=t[2];U={r:0,c:[],p:U},E=function(t,e,n,o,r,i,c,s,l,u,a,d){let f=t.length,p=i.length,g=f;const m={};for(;g--;)m[t[g].key]=g;const h=[],b=new Map,y=new Map;for(g=p;g--;){const t=d(r,i,g),s=n(t);let l=c.get(s);l?o&&l.p(t,e):(l=u(s,t),l.c()),b.set(s,h[g]=l),s in m&&y.set(s,Math.abs(g-m[s]))}const $=new Set,v=new Set;function w(t){I(t,1),t.m(s,a),c.set(t.key,t),a=t.first,p--}for(;f&&p;){const e=h[p-1],n=t[f-1],o=e.key,r=n.key;e===n?(a=e.first,f--,p--):b.has(r)?!c.has(o)||$.has(o)?w(e):v.has(r)?f--:y.get(o)>y.get(r)?(v.add(o),w(e)):($.add(r),f--):(l(n,c),f--)}for(;f--;){const e=t[f];b.has(e.key)||l(e,c)}for(;p;)w(h[p-1]);return h}(E,e,A,1,t,n,M,x,O,tt,null,Y),U.r||o(U.c),U=U.p}},i(t){if(!_){for(let t=0;t<j.length;t+=1)I(E[t]);_=!0}},o(t){for(let t=0;t<E.length;t+=1)N(E[t]);_=!1},d(t){l(e),t&&l(n),t&&l(r),R&&R.d();for(let t=0;t<E.length;t+=1)E[t].d();S=!1,C()}}}const nt="routines";function ot(t,e,n){let o=!1,r="",i=[];const c=()=>{i.length>0?localStorage.setItem(nt,JSON.stringify(i,null,2)):localStorage.removeItem(nt)};return b((()=>{"serviceWorker"in navigator&&window.addEventListener("load",(()=>navigator.serviceWorker.register("sw_cached_site.js").then((t=>console.log("Service Worker: Registered"))).catch((t=>console.log("Service Worker: Error: "+t)))));const t=[{description:"eat",id:P()},{description:"sleep",id:P()}];null===localStorage.getItem(nt)&&localStorage.setItem(nt,JSON.stringify(t,null,2)),n(2,i=JSON.parse(localStorage.getItem(nt)))})),[o,r,i,["bg-1","bg-2","bg-3","bg-4","bg-5","bg-6"],()=>{r.length>0&&(n(2,i=[{description:r,id:P()}].concat(i)),n(1,r=""),n(0,o=!1)),c()},()=>{n(1,r=""),n(0,o=!o)},t=>{n(2,i=i.filter((e=>e.id!==t))),c()},t=>{const e=i.findIndex((e=>e.id===t));if(e>0){const o=i[e];n(2,i=i.filter((e=>e.id!==t))),i.splice(e-1,0,o),c()}},function(){r=this.value,n(1,r)}]}return new class extends W{constructor(t){super(),L(this,t,ot,et,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
