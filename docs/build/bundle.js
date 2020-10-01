var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){t.value=null==n?"":n}let g;function h(t){g=t}function b(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const y=[],$=[],v=[],w=[],x=Promise.resolve();let k=!1;function _(t){v.push(t)}let C=!1;const S=new Set;function M(){if(!C){C=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];h(n),R(n.$$)}for(h(null),y.length=0;$.length;)$.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];S.has(n)||(S.add(n),n())}v.length=0}while(y.length);for(;w.length;)w.pop()();k=!1,C=!1,S.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const E=new Set;let U;function I(t,n){t&&t.i&&(E.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),U.c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function O(t,n){N(t,1,1,(()=>{n.delete(t.key)}))}function A(t,e,c){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=t.$$;s&&s.m(e,c),_((()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(_)}function V(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,x.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,r,c,s,i,u,a=[-1]){const d=g;h(n);const f=r.props||{},p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let m=!1;if(p.ctx=c?c(n,f,((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&j(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&I(n.$$.fragment),A(n,r.target,r.anchor),M()}h(d)}class L{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var T="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),z=new Uint8Array(16);function P(){if(!T)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(z)}var q=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function B(t){return"string"==typeof t&&q.test(t)}for(var D=[],F=0;F<256;++F)D.push((F+256).toString(16).substr(1));function G(t,n,e){var o=(t=t||{}).random||(t.rng||P)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){e=e||0;for(var r=0;r<16;++r)n[e+r]=o[r];return n}return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(D[t[n+0]]+D[t[n+1]]+D[t[n+2]]+D[t[n+3]]+"-"+D[t[n+4]]+D[t[n+5]]+"-"+D[t[n+6]]+D[t[n+7]]+"-"+D[t[n+8]]+D[t[n+9]]+"-"+D[t[n+10]]+D[t[n+11]]+D[t[n+12]]+D[t[n+13]]+D[t[n+14]]+D[t[n+15]]).toLowerCase();if(!B(e))throw TypeError("Stringified UUID is invalid");return e}(o)}function H(t){let n,e,o;return{c(){n=u("button"),n.textContent="up",p(n,"type","button"),p(n,"class","btn btn-success btn-sm ml-1")},m(c,s){i(c,n,s),e||(o=f(n,"click",(function(){r(t[4](t[0].id))&&t[4](t[0].id).apply(this,arguments)})),e=!0)},p(n,e){t=n},d(t){t&&l(n),e=!1,o()}}}function K(t){let n,e,o;return{c(){n=u("button"),n.textContent="-",p(n,"type","button"),p(n,"class","btn btn-danger btn-sm ml-1")},m(c,s){i(c,n,s),e||(o=f(n,"click",(function(){r(t[2](t[0].id))&&t[2](t[0].id).apply(this,arguments)})),e=!0)},p(n,e){t=n},d(t){t&&l(n),e=!1,o()}}}function Q(n){let e,o,r,c,f,m,g=n[0].description+"",h=n[1]&&H(n),b=n[1]&&K(n);return{c(){var t,s,i;e=u("div"),o=u("div"),h&&h.c(),r=d(),c=a(g),f=d(),b&&b.c(),p(o,"class","card-body "),t="font-size",s="20px",o.style.setProperty(t,s,i?"important":""),p(e,"class",m="card mb-1 "+n[3])},m(t,n){i(t,e,n),s(e,o),h&&h.m(o,null),s(o,r),s(o,c),s(o,f),b&&b.m(o,null)},p(t,[n]){t[1]?h?h.p(t,n):(h=H(t),h.c(),h.m(o,r)):h&&(h.d(1),h=null),1&n&&g!==(g=t[0].description+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(c,g),t[1]?b?b.p(t,n):(b=K(t),b.c(),b.m(o,null)):b&&(b.d(1),b=null),8&n&&m!==(m="card mb-1 "+t[3])&&p(e,"class",m)},i:t,o:t,d(t){t&&l(e),h&&h.d(),b&&b.d()}}}function W(t,n,e){let{routine:o}=n,{editMode:r}=n,{onRemove:c}=n,{bgClass:s}=n,{onUp:i}=n;return t.$$set=t=>{"routine"in t&&e(0,o=t.routine),"editMode"in t&&e(1,r=t.editMode),"onRemove"in t&&e(2,c=t.onRemove),"bgClass"in t&&e(3,s=t.bgClass),"onUp"in t&&e(4,i=t.onUp)},[o,r,c,s,i]}class X extends L{constructor(t){super(),J(this,t,W,Q,c,{routine:0,editMode:1,onRemove:2,bgClass:3,onUp:4})}}function Y(t,n,e){const o=t.slice();return o[10]=n[e],o[12]=e,o}function Z(t){let n,e,r,c,a,g,h,b;return{c(){n=u("div"),e=u("div"),r=u("input"),c=d(),a=u("div"),g=u("button"),g.textContent="add",p(r,"class","form-control"),p(r,"type","text"),p(r,"placeholder","Routine description"),p(e,"class","col-8 col-sm-10 col-md-10 col-lg-10 col-xl-11"),p(g,"type","button"),p(g,"class","btn btn-success"),p(a,"class","col"),p(n,"class","row my-1")},m(o,l){i(o,n,l),s(n,e),s(e,r),m(r,t[1]),s(n,c),s(n,a),s(a,g),h||(b=[f(r,"input",t[8]),f(g,"click",t[4])],h=!0)},p(t,n){2&n&&r.value!==t[1]&&m(r,t[1])},d(t){t&&l(n),h=!1,o(b)}}}function tt(t,n){let e,o,r;return o=new X({props:{editMode:n[0],routine:n[10],onRemove:n[6],onUp:n[7],bgClass:n[3][n[12]%n[3].length]}}),{key:t,first:null,c(){var t;e=a(""),(t=o.$$.fragment)&&t.c(),this.first=e},m(t,n){i(t,e,n),A(o,t,n),r=!0},p(t,n){const e={};1&n&&(e.editMode=t[0]),4&n&&(e.routine=t[10]),4&n&&(e.bgClass=t[3][t[12]%t[3].length]),o.$set(e)},i(t){r||(I(o.$$.fragment,t),r=!0)},o(t){N(o.$$.fragment,t),r=!1},d(t){t&&l(e),V(o,t)}}}function nt(t){let n,e,r,c,m,g,h,b,y,$,v,w,x,k,_,C=[],S=new Map,M=t[0]&&Z(t),R=t[2];const E=t=>t[10].id;for(let n=0;n<R.length;n+=1){let e=Y(t,R,n),o=E(e);S.set(o,C[n]=tt(o,e))}return{c(){n=u("link"),e=d(),r=u("div"),c=u("div"),m=u("div"),g=u("h1"),h=a("routines\n        "),b=u("button"),b.textContent="edit",y=d(),M&&M.c(),$=d(),v=u("div"),w=u("div");for(let t=0;t<C.length;t+=1)C[t].c();p(n,"rel","stylesheet"),p(n,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),p(b,"type","button"),p(b,"class","btn btn-warning"),p(g,"class","text-white"),p(m,"class","col"),p(c,"class","row"),p(w,"class","col"),p(v,"class","row"),p(r,"class","container")},m(o,l){s(document.head,n),i(o,e,l),i(o,r,l),s(r,c),s(c,m),s(m,g),s(g,h),s(g,b),s(r,y),M&&M.m(r,null),s(r,$),s(r,v),s(v,w);for(let t=0;t<C.length;t+=1)C[t].m(w,null);x=!0,k||(_=f(b,"click",t[5]),k=!0)},p(t,[n]){if(t[0]?M?M.p(t,n):(M=Z(t),M.c(),M.m(r,$)):M&&(M.d(1),M=null),205&n){const e=t[2];U={r:0,c:[],p:U},C=function(t,n,e,o,r,c,s,i,l,u,a,d){let f=t.length,p=c.length,m=f;const g={};for(;m--;)g[t[m].key]=m;const h=[],b=new Map,y=new Map;for(m=p;m--;){const t=d(r,c,m),i=e(t);let l=s.get(i);l?o&&l.p(t,n):(l=u(i,t),l.c()),b.set(i,h[m]=l),i in g&&y.set(i,Math.abs(m-g[i]))}const $=new Set,v=new Set;function w(t){I(t,1),t.m(i,a),s.set(t.key,t),a=t.first,p--}for(;f&&p;){const n=h[p-1],e=t[f-1],o=n.key,r=e.key;n===e?(a=n.first,f--,p--):b.has(r)?!s.has(o)||$.has(o)?w(n):v.has(r)?f--:y.get(o)>y.get(r)?(v.add(o),w(n)):($.add(r),f--):(l(e,s),f--)}for(;f--;){const n=t[f];b.has(n.key)||l(n,s)}for(;p;)w(h[p-1]);return h}(C,n,E,1,t,e,S,w,O,tt,null,Y),U.r||o(U.c),U=U.p}},i(t){if(!x){for(let t=0;t<R.length;t+=1)I(C[t]);x=!0}},o(t){for(let t=0;t<C.length;t+=1)N(C[t]);x=!1},d(t){l(n),t&&l(e),t&&l(r),M&&M.d();for(let t=0;t<C.length;t+=1)C[t].d();k=!1,_()}}}const et="routines";function ot(t,n,e){let o=!1,r="",c=[];const s=()=>{localStorage.setItem(et,JSON.stringify(c,null,2))};return b((()=>{const t=[{description:"eat",id:G()},{description:"sleep",id:G()}];null===localStorage.getItem(et)&&localStorage.setItem(et,JSON.stringify(t,null,2)),e(2,c=JSON.parse(localStorage.getItem(et)))})),[o,r,c,["color-1","color-6","color-3","color-4","color-2","color-5"],()=>{r.length>0&&(e(2,c=[{description:r,id:G()}].concat(c)),e(1,r=""),e(0,o=!1)),s()},()=>{e(0,o=!o)},t=>{e(2,c=c.filter((n=>n.id!==t))),s()},t=>{const n=c.findIndex((n=>n.id===t));if(n>0){const o=c[n];e(2,c=c.filter((n=>n.id!==t))),c.splice(n-1,0,o),s()}},function(){r=this.value,e(1,r)}]}return new class extends L{constructor(t){super(),J(this,t,ot,nt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
