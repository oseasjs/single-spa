/*! For license information please see poc-react-lazy.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var n={},r={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){r.default=e.default}],execute:function(){e((()=>{var e,o,a={682:(e,t,n)=>{"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{aU:()=>o,lX:()=>u,Ep:()=>c,cP:()=>s});var o,a=o||(o={});a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE";function i(e){e.preventDefault(),e.returnValue=""}function l(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function c(e){var t=e.pathname,n=e.search;return(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}function s(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function u(e){function t(){var e=f.location,t=m.state||{};return[t.idx,{pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"}]}function n(e){return"string"==typeof e?e:c(e)}function a(e,t){return void 0===t&&(t=null),r({pathname:v.pathname,hash:"",search:""},"string"==typeof e?s(e):e,{state:t,key:Math.random().toString(36).substr(2,8)})}function u(e){d=e,e=t(),y=e[0],v=e[1],g.call({action:d,location:v})}function p(e){m.go(e)}void 0===e&&(e={});var f=void 0===(e=e.window)?document.defaultView:e,m=f.history,h=null;f.addEventListener("popstate",(function(){if(h)b.call(h),h=null;else{var e=o.Pop,n=t(),r=n[0];if(n=n[1],b.length){if(null!=r){var a=y-r;a&&(h={action:e,location:n,retry:function(){p(-1*a)}},p(a))}}else u(e)}}));var d=o.Pop,y=(e=t())[0],v=e[1],g=l(),b=l();return null==y&&(y=0,m.replaceState(r({},m.state,{idx:y}),"")),{get action(){return d},get location(){return v},createHref:n,push:function e(t,r){var i=o.Push,l=a(t,r);if(!b.length||(b.call({action:i,location:l,retry:function(){e(t,r)}}),0)){var c=[{usr:l.state,key:l.key,idx:y+1},n(l)];l=c[0],c=c[1];try{m.pushState(l,"",c)}catch(e){f.location.assign(c)}u(i)}},replace:function e(t,r){var i=o.Replace,l=a(t,r);b.length&&(b.call({action:i,location:l,retry:function(){e(t,r)}}),1)||(l=[{usr:l.state,key:l.key,idx:y},n(l)],m.replaceState(l[0],"",l[1]),u(i))},go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(e){return g.push(e)},block:function(e){var t=b.push(e);return 1===b.length&&f.addEventListener("beforeunload",i),function(){t(),b.length||f.removeEventListener("beforeunload",i)}}}}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,l,c=o(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))n.call(i,u)&&(c[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(c[l[p]]=i[l[p]])}}return c}},711:(e,t,n)=>{"use strict";n.d(t,{VK:()=>c,rU:()=>s});var r=n(954),o=n(682),a=n(974);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const l=["onClick","reloadDocument","replace","state","target","to"];function c(e){let{basename:t,children:n,window:i}=e,l=(0,r.useRef)();null==l.current&&(l.current=(0,o.lX)({window:i}));let c=l.current,[s,u]=(0,r.useState)({action:c.action,location:c.location});return(0,r.useLayoutEffect)((()=>c.listen(u)),[c]),(0,r.createElement)(a.F0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:c})}const s=(0,r.forwardRef)((function(e,t){let{onClick:n,reloadDocument:c,replace:s=!1,state:u,target:p,to:f}=e,m=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,l),h=(0,a.oQ)(f),d=function(e,t){let{target:n,replace:i,state:l}=void 0===t?{}:t,c=(0,a.s0)(),s=(0,a.TH)(),u=(0,a.WU)(e);return(0,r.useCallback)((t=>{if(!(0!==t.button||n&&"_self"!==n||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let n=!!i||(0,o.Ep)(s)===(0,o.Ep)(u);c(e,{replace:n,state:l})}}),[s,c,u,i,l,n,e])}(f,{replace:s,state:u,target:p});return(0,r.createElement)("a",i({},m,{href:h,onClick:function(e){n&&n(e),e.defaultPrevented||c||d(e)},ref:t,target:p}))}))},974:(e,t,n)=>{"use strict";n.d(t,{AW:()=>u,F0:()=>p,Z5:()=>f,oQ:()=>m,TH:()=>d,s0:()=>y,WU:()=>v});var r=n(954),o=n(682);function a(e,t){if(!e)throw new Error(t)}const i=(0,r.createContext)(null),l=(0,r.createContext)(null),c=(0,r.createContext)({outlet:null,matches:[]});function s(e){return(0,r.useContext)(c).outlet}function u(e){a(!1)}function p(e){let{basename:t="/",children:n=null,location:c,navigationType:s=o.aU.Pop,navigator:u,static:p=!1}=e;h()&&a(!1);let f=S(t),m=(0,r.useMemo)((()=>({basename:f,navigator:u,static:p})),[f,u,p]);"string"==typeof c&&(c=(0,o.cP)(c));let{pathname:d="/",search:y="",hash:v="",state:g=null,key:b="default"}=c,E=(0,r.useMemo)((()=>{let e=x(d,f);return null==e?null:{pathname:e,search:y,hash:v,state:g,key:b}}),[f,d,y,v,g,b]);return null==E?null:(0,r.createElement)(i.Provider,{value:m},(0,r.createElement)(l.Provider,{children:n,value:{location:E,navigationType:s}}))}function f(e){let{children:t,location:n}=e;return function(e,t){h()||a(!1);let{matches:n}=(0,r.useContext)(c),i=n[n.length-1],l=i?i.params:{},u=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let p,f=d();if(t){var m;let e="string"==typeof t?(0,o.cP)(t):t;"/"===u||(null==(m=e.pathname)?void 0:m.startsWith(u))||a(!1),p=e}else p=f;let y=p.pathname||"/",v=function(e,t,n){void 0===n&&(n="/");let r=x(("string"==typeof t?(0,o.cP)(t):t).pathname||"/",n);if(null==r)return null;let a=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let i=null;for(let t=0;null==i&&t<a.length;++t)i=j(a[t],e,r);return i}(e,{pathname:"/"===u?y:y.slice(u.length)||"/"});return function(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,o,a)=>(0,r.createElement)(c.Provider,{children:void 0!==o.route.element?o.route.element:(0,r.createElement)(s,null),value:{outlet:n,matches:t.concat(e.slice(0,a+1))}})),null)}(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:P([u,e.pathname]),pathnameBase:"/"===e.pathnameBase?u:P([u,e.pathnameBase])}))),n)}(g(t),n)}function m(e){h()||a(!1);let{basename:t,navigator:n}=(0,r.useContext)(i),{hash:l,pathname:c,search:s}=v(e),u=c;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?(0,o.cP)(e).pathname:e.pathname}(e),r=null!=n&&n.endsWith("/");u="/"===c?t+(r?"/":""):P([t,c])}return n.createHref({pathname:u,search:s,hash:l})}function h(){return null!=(0,r.useContext)(l)}function d(){return h()||a(!1),(0,r.useContext)(l).location}function y(){h()||a(!1);let{basename:e,navigator:t}=(0,r.useContext)(i),{matches:n}=(0,r.useContext)(c),{pathname:o}=d(),l=JSON.stringify(n.map((e=>e.pathnameBase))),s=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{s.current=!0})),(0,r.useCallback)((function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"==typeof n)return void t.go(n);let a=R(n,JSON.parse(l),o);"/"!==e&&(a.pathname=P([e,a.pathname])),(r.replace?t.replace:t.push)(a,r.state)}),[e,t,l,o])}function v(e){let{matches:t}=(0,r.useContext)(c),{pathname:n}=d(),o=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,r.useMemo)((()=>R(e,JSON.parse(o),n)),[e,o,n])}function g(e){let t=[];return r.Children.forEach(e,(e=>{if(!(0,r.isValidElement)(e))return;if(e.type===r.Fragment)return void t.push.apply(t,g(e.props.children));e.type!==u&&a(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=g(e.props.children)),t.push(n)})),t}function b(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,o)=>{let i={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:o};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(r)||a(!1),i.relativePath=i.relativePath.slice(r.length));let l=P([r,i.relativePath]),c=n.concat(i);e.children&&e.children.length>0&&(!0===e.index&&a(!1),b(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:w(l,e.index),routesMeta:c})})),t}const E=/^:\w+$/,O=e=>"*"===e;function w(e,t){let n=e.split("/"),r=n.length;return n.some(O)&&(r+=-2),t&&(r+=2),n.filter((e=>!O(e))).reduce(((e,t)=>e+(E.test(t)?3:""===t?1:10)),r)}function j(e,t,n){let r=t,{routesMeta:o}=e,a={},i="/",l=[];for(let e=0;e<o.length;++e){let t=o[e],c=e===o.length-1,s="/"===i?n:n.slice(i.length)||"/",u=C({path:t.relativePath,caseSensitive:t.caseSensitive,end:c},s);if(!u)return null;Object.assign(a,u.params);let p=r[t.childrenIndex];l.push({params:a,pathname:P([i,u.pathname]),pathnameBase:P([i,u.pathnameBase]),route:p}),"/"!==u.pathnameBase&&(i=P([i,u.pathnameBase])),r=p.children}return l}function C(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(r.push(t),"([^\\/]+)")));return e.endsWith("*")?(r.push("*"),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=n?"\\/*$":"(?:\\b|$)",[new RegExp(o,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=l[n]||"";i=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(l[n]||""),e}),{}),pathname:a,pathnameBase:i,pattern:e}}function R(e,t,n){let r,a="string"==typeof e?(0,o.cP)(e):e,i=""===e||""===a.pathname?"/":a.pathname;if(null==i)r=n;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}r=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?(0,o.cP)(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:k(r),hash:B(a)}}(a,r);return i&&"/"!==i&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function x(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const P=e=>e.join("/").replace(/\/\/+/g,"/"),S=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),k=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},251:(e,t,n)=>{"use strict";n(418);var r=n(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:i.current}}t.jsx=s,t.jsxs=s},893:(e,t,n)=>{"use strict";e.exports=n(251)},722:(e,t,n)=>{const r=n(905).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},905:(e,t,n)=>{function r(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i}t.m=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||isNaN(t)||!o(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");var a;try{if(!(a=window.System.resolve(e)))throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=r(a,t)},t.R=r;var o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},954:e=>{"use strict";e.exports=n},493:e=>{"use strict";e.exports=r}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e](n,n.exports,l),n.exports}l.m=a,l.y=t,l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+".poc-react-lazy.js",l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},o="react-lazy:",l.l=(t,n,r,a)=>{if(e[t])e[t].push(n);else{var i,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var p=s[u];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==o+r){i=p;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+r),i.src=t),e[t]=[n];var f=(n,r)=>{i.onerror=i.onload=null,clearTimeout(m);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),n)return n(r)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="",(()=>{var e={179:0};l.f.j=(t,n)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var a=l.p+l.u(t),i=new Error;l.l(a,(n=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[a,i,c]=n,s=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);c&&c(l)}for(t&&t(n);s<a.length;s++)o=a[s],l.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0},n=self.webpackChunkreact_lazy=self.webpackChunkreact_lazy||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c={};return(0,l(722).s)(1),(()=>{"use strict";l.r(c),l.d(c,{bootstrap:()=>R,mount:()=>x,unmount:()=>P}),(0,l(905).m)("@poc/react-lazy");var e=l(954),t=l(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(i(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(i(e)));return e}}var u=null;try{u=require("react").createContext()}catch(n){}var p={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function f(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function m(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=y(e,t,(function(){n(this)})),a=s(e,t)(),i=function(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](r);return a.render(n),a}return"hydrate"===o?t.ReactDOM.hydrate(n,r):t.ReactDOM.render(n,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function h(e,t){return new Promise((function(n){e.unmountFinished=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function d(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=y(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=s(e,t)();e.ReactDOM.render(r,a)}}))}function y(e,t,n){var o=e.React.createElement(e.rootComponent,t),a=u?e.React.createElement(u.Provider,{value:t},o):o;function i(e){i.displayName="SingleSpaRoot(".concat(e.name,")")}return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),a=e.React.createElement(i,r(r({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a),i.prototype=Object.create(e.React.Component.prototype),i.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},i.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},i.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},a}var v=l(711),g=l(974),b=l(893),E=e.default.lazy((function(){return l.e(202).then(l.bind(l,202))})),O=e.default.lazy((function(){return l.e(97).then(l.bind(l,97))})),w=e.default.lazy((function(){return l.e(568).then(l.bind(l,568))}));const j=function(){return(0,b.jsx)(e.Suspense,{fallback:(0,b.jsx)("h1",{children:"Loading..."}),children:(0,b.jsx)(v.VK,{basename:"react-lazy",children:(0,b.jsxs)(g.Z5,{children:[(0,b.jsx)(g.AW,{exact:!0,path:"/",element:(0,b.jsx)(w,{})}),(0,b.jsx)(g.AW,{exact:!0,path:"/about",element:(0,b.jsx)(E,{})}),(0,b.jsx)(g.AW,{exact:!0,path:"/contact",element:(0,b.jsx)(O,{})})]})})})};var C=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=r(r({},p),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&t.React.createContext&&(u=t.React.createContext());var n={bootstrap:f.bind(null,t),mount:m.bind(null,t),unmount:h.bind(null,t)};return t.parcelCanUpdate&&(n.update=d.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(){return(0,b.jsx)(j,{})},errorBoundary:function(e,t,n){return null}}),R=C.bootstrap,x=C.mount,P=C.unmount})(),c})())}}}));
//# sourceMappingURL=poc-react-lazy.js.map