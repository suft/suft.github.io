(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1645:function(t,e,n){t.exports=n(7244)},7244:function(t,e,n){const r=n(4098),o="https://api.countapi.xyz",i=/^[A-Za-z0-9_\-.]{3,64}$/,s=new RegExp(i),a=t.exports.validatePath=function(t,e){if("undefined"===typeof e){if("undefined"===typeof t)return Promise.reject("Missing key");e=t,t=void 0}function n(t){return s.test(t)||":HOST:"===t||":PATHNAME:"===t}return new Promise((function(r,o){if(n(e))if(n(t)||"undefined"===typeof t||null===t){var s="";"undefined"!==typeof t&&(s+=t+"/"),r({path:s+=e})}else o(`Namespace must match ${i} or be empty. Got '${t}'`);else o(`Key must match ${i}. Got '${t}'`)}))},c=t.exports.validateTuple=function(t,e,n){if("undefined"===typeof n){if("undefined"===typeof e)return Promise.reject("Missing key or value");n=e,e=void 0}return"number"!==typeof n?Promise.reject("Value is NaN"):a(t,e).then((function(t){return Object.assign({},{value:n},t)}))};function u(t){return[200,400,403,404].includes(t.status)?t.json().then((function(e){return 400==t.status?Promise.reject(e.error):Object.assign({},{status:t.status,path:t.headers.get("X-Path")},e)})):Promise.reject("Response from server: "+t.status)}t.exports.get=function(t,e){return a(t,e).then((function(t){return r(`${o}/get/${t.path}`).then(u)}))},t.exports.set=function(t,e,n){return c(t,e,n).then((function(t){return r(`${o}/set/${t.path}?value=${t.value}`).then(u)}))},t.exports.update=function(t,e,n){return c(t,e,n).then((function(t){return r(`${o}/update/${t.path}?amount=${t.value}`).then(u)}))},t.exports.hit=function(t,e){return a(t,e).then((function(t){return r(`${o}/hit/${t.path}`).then(u)}))},t.exports.info=function(t,e){return a(t,e).then((function(t){return r(`${o}/info/${t.path}`).then(u)}))},t.exports.create=function(t){var e=function(t){return Object.keys(t||{}).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&")}(t);return r(`${o}/create${e.length>0?"?"+e:""}`).then(u)},t.exports.stats=function(){return r(`${o}/stats`).then(u)},t.exports.visits=function(t){return this.hit(":HOST:",t||":PATHNAME:")},t.exports.event=function(t){return this.hit(":HOST:",t)}},4098:function(t,e){var n="undefined"!==typeof self?self:this,r=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();!function(t){!function(e){var n="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!==typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function y(t){var e=new FileReader,n=p(e);return e.readAsArrayBuffer(t),n}function x(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&o&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=x(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=x(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=p(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=u(t),e=f(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[u(t)]},l.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},l.prototype.set=function(t,e){this.map[u(t)]=f(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),h(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),h(t)},r&&(l.prototype[Symbol.iterator]=l.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function j(t,e){var n=(e=e||{}).body;if(t instanceof j){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=function(t){var e=t.toUpperCase();return b.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function v(t){var e=new l;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}j.prototype.clone=function(){return new j(this,{body:this._bodyInit})},m.call(j.prototype),m.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var O=[301,302,303,307,308];w.redirect=function(t,e){if(-1===O.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(_){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function E(t,n){return new Promise((function(r,i){var s=new j(t,n);if(s.signal&&s.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:v(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;r(new w(e,t))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",c)}),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))}E.polyfill=!0,t.fetch||(t.fetch=E,t.Headers=l,t.Request=j,t.Response=w),e.Headers=l,e.Request=j,e.Response=w,e.fetch=E,Object.defineProperty(e,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var o=r;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},6594:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(5893),o=n(7294),i=n(425),s=n(9936),a=n(2819),c="dark",u=function(){var t=(0,i.F)(),e=t.theme,n=t.setTheme,u=e===c,f=(0,o.useState)(u),h=f[0],l=f[1],d=(0,o.useState)(!1),p=d[0],y=d[1],x=(0,o.useCallback)((function(t){l(t)}),[]);return(0,o.useEffect)((function(){return y(!0)}),[]),(0,o.useEffect)((function(){n(h?c:"light")}),[h,n]),p?(0,r.jsx)(s.default,{onChange:x,checked:h,"aria-label":"switch between day and night themes",offColor:"#555",onColor:"#ffd4d5",offHandleColor:"#555",onHandleColor:"#ffd4d5",activeBoxShadow:"0px 0px 1px 4px rgba(0, 0, 0, 0.2)",uncheckedIcon:!1,checkedIcon:!1,uncheckedHandleIcon:(0,r.jsx)("div",{className:"flex justify-center items-center h-full bg-transparent",children:(0,r.jsx)(a.E,{children:"\u2600\ufe0f"})}),checkedHandleIcon:(0,r.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,r.jsx)(a.E,{children:"\ud83c\udf11"})}),handleDiameter:28,height:40,width:70}):null},f=function(){return(0,r.jsx)("header",{className:"mb-2 flex justify-center font-display",children:(0,r.jsx)(u,{})})},h=n(381),l=n.n(h),d=function(){return(0,r.jsx)("footer",{className:"flex justify-center pt-12 text-center",children:(0,r.jsxs)("p",{children:[(0,r.jsxs)("small",{children:["Made with ",(0,r.jsx)(a.E,{children:"\u2764\ufe0f"})," in ",(0,r.jsx)("strong",{children:"Barrie"})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("small",{children:["Copyright \xa9 ",l()().year()," Sufien Tout"]})]})})},p=n(9008),y=n(2624),x=function(){return(0,r.jsxs)(p.default,{children:[(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"og:site_name",content:y.jG}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"})]})},m=function(t){var e=t.children;return(0,r.jsxs)("div",{className:"flex flex-col items-center max-w-xl min-h-screen px-4 pt-8 pb-16 mx-auto text-gray-900 dark:text-gray-50",children:[(0,r.jsx)(x,{}),(0,r.jsx)(f,{}),(0,r.jsx)("main",{className:"flex-grow mb-auto",children:e}),(0,r.jsx)(d,{})]})}},2819:function(t,e,n){"use strict";n.d(e,{A:function(){return m},E:function(){return b},H3:function(){return p},LI:function(){return x},UL:function(){return y}});var r=n(6265),o=n(5893),i=(n(7294),n(5872)),s=n(8347),a=n(1664);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function(t){return(0,o.jsx)("a",u({target:"_blank",rel:"noopener noreferrer"},t))},h=function(t){var e=t.href,n=t.old,r=(0,s.Z)(t,["href","old"]);return n?(0,o.jsx)("a",u({href:e},r)):e&&e.startsWith("/")?(0,o.jsx)(a.default,{href:e,children:(0,o.jsx)("a",u({},r))}):(0,o.jsx)(f,u({href:e},r))};function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=function(t){return(0,o.jsx)("h3",d({className:"mt-10 mb-4 text-xl font-bold leading-snug tracking-tight font-body"},t))},y=function(t){return(0,o.jsx)("ul",d({className:"my-4 ml-5 list-disc font-body"},t))},x=function(t){return(0,o.jsx)("li",d({className:"my-2 font-body"},t))},m=function(t){return(0,o.jsx)(h,d({className:"underline font-body hv:hover:bg-yellow-400 dark:hover:bg-pink-400"},t))},b=function(t){var e=t.children;return(0,o.jsx)(i.Gl,{className:"inline-flex h-auto align-middle",svg:!0,text:e})}},2624:function(t,e,n){"use strict";n.d(e,{jG:function(){return r},_O:function(){return o},vk:function(){return i},c7:function(){return s},EF:function(){return a},_:function(){return c},YA:function(){return u}});var r="Sufien Tout",o="https://suft.github.io",i="@suft",s="https://api.github.com/repos",a="suft",c="suft.github.io",u="visitors"},3501:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(5893),o=n(7294),i=n(9008),s=n(381),a=n.n(s),c=n(1645),u=n(6594),f=n(2819),h=n(4184),l=n.n(h),d=function(t){var e=t.children;return(0,r.jsx)("span",{className:l()("text-4xl leading-tight tracking-tighter font-display font-bold"),children:e})},p=n(2624),y=function(t){if("number"!==typeof t||isNaN(t)||t===1/0||t===-1/0)return"";if(t<0)return"";if(t%1!==0)return"";var e=t%10,n=t%100,r=function(t,e){return"".concat(t).concat(e)};return r(t,11===n||12===n||13===n?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},x=function(){var t=(0,o.useState)(""),e=t[0],n=t[1],s=(0,o.useState)(""),h=s[0],l=s[1],x=(0,o.useState)(0),m=x[0],b=x[1],j=(0,o.useState)(!1),g=j[0],v=j[1];return(0,o.useEffect)((function(){fetch("".concat(p.c7,"/").concat(p.EF,"/").concat(p._)).then((function(t){return t.json()})).then((function(t){return n(t.updated_at)})),c.hit(p._,p.YA).then((function(t){return b(t.value)}));var t="".concat(Math.floor(9*Math.random()+1)).padStart(2,"0");l("/images/".concat(t,".png")),v(!0)}),[]),g?(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:p.jG},"title"),(0,r.jsx)("meta",{property:"og:title",content:p.jG}),(0,r.jsx)("meta",{property:"og:url",content:p._O}),(0,r.jsx)("link",{rel:"canonical",href:p._O}),(0,r.jsx)("meta",{property:"og:description",content:p.vk}),(0,r.jsx)("meta",{name:"description",content:p.vk}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(p._O,"/images/og.png")})]}),(0,r.jsxs)("section",{className:"leading-relaxed",children:[(0,r.jsx)("div",{className:"my-8",children:(0,r.jsx)("img",{src:h,alt:"Sufien Tout",className:"block mx-auto rounded-full w-80 h-80 shadow-soft"})}),(0,r.jsxs)("h1",{children:[(0,r.jsxs)(d,{children:["Sufien Tout ",(0,r.jsx)(f.E,{children:"\ud83c\uddf1\ud83c\udde7\ud83c\udde8\ud83c\udde6"})]})," ",(0,r.jsxs)("p",{children:["(arabic: ",(0,r.jsx)("strong",{children:"\u0633\u0641\u064a\u0627\u0646 \u0637\u0648\u0637\u200e"}),", pronounced: ",(0,r.jsx)("strong",{children:"Soof\xb7Yan T\xb7Out"}),")"]})]}),(0,r.jsxs)(f.UL,{children:[(0,r.jsxs)(f.LI,{children:["BA in Information Technology from ",(0,r.jsx)(f.A,{href:"https://www.yorku.ca/",children:"York University"}),"."]}),(0,r.jsxs)(f.LI,{children:["Previously, a Software Dev Intern at ",(0,r.jsx)(f.A,{href:"https://www.getencircle.com/",children:"Encircle"})]}),(0,r.jsxs)(f.LI,{children:["Resume: ",(0,r.jsx)(f.A,{href:"/pdfs/Sufien Tout Resume 2021.pdf",target:"_blank",children:"Download PDF"}),"."]}),(0,r.jsxs)(f.LI,{children:["Love to ",(0,r.jsx)(f.E,{children:"\ud83c\udfcb"})," workout and drink ",(0,r.jsx)(f.E,{children:"\ud83c\udf75"})," steeped tea"]}),(0,r.jsx)(f.LI,{children:"Time zone: Eastern Daylight Time."})]}),(0,r.jsx)(f.H3,{children:"Links"}),(0,r.jsxs)(f.UL,{children:[(0,r.jsxs)(f.LI,{children:[(0,r.jsx)("strong",{children:"Email:"})," ",(0,r.jsx)(f.A,{href:"mailto:sufientout@gmail.com",children:"sufientout@gmail.com"})]}),(0,r.jsxs)(f.LI,{children:[(0,r.jsx)("strong",{children:"GitHub:"})," ",(0,r.jsx)(f.A,{href:"https://github.com/suft",children:"@suft"})]}),(0,r.jsxs)(f.LI,{children:[(0,r.jsx)("strong",{children:"CodePen:"})," ",(0,r.jsx)(f.A,{href:"https://codepen.com/suft",children:"@suft"})]}),(0,r.jsxs)(f.LI,{children:[(0,r.jsx)("strong",{children:"LinkedIn:"})," ",(0,r.jsx)(f.A,{href:"https://linkedin.com/in/sufientout",children:"@sufientout"})]})]}),(0,r.jsx)(f.H3,{children:"Postscript"}),(0,r.jsxs)(f.UL,{children:[(0,r.jsxs)(f.LI,{children:["This website was built with ",(0,r.jsx)(f.A,{href:"https://nextjs.org",children:"Next.js"})," and ",(0,r.jsx)(f.A,{href:"https://tailwindcss.com",children:"Tailwind CSS"}),"."]}),(0,r.jsxs)(f.LI,{children:["This page was last edited ",(0,r.jsx)("strong",{children:a()(e).fromNow()}),"."]}),(0,r.jsxs)(f.LI,{children:["You are the ",(0,r.jsx)("strong",{children:y(m)})," visitor."]})]})]})]}):null}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3501)}])}},function(t){t.O(0,[774,885,14,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);