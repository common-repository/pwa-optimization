var q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,k){if(k.get||k.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[e]=k.value)},x="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function y(){y=function(){};x.Symbol||(x.Symbol=F)}var G=0;function F(a){return"jscomp_symbol_"+(a||"")+G++}
function H(){y();var a=x.Symbol.iterator;a||(a=x.Symbol.iterator=x.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&q(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return I(this)}});H=function(){}}function I(a){var e=0;return S(function(){return e<a.length?{done:!1,value:a[e++]}:{done:!0}})}function S(a){H();a={next:a};a[x.Symbol.iterator]=function(){return this};return a}function T(a){H();var e=a[Symbol.iterator];return e?e.call(a):I(a)}
function U(a,e){if(e){for(var k=x,f=a.split("."),m=0;m<f.length-1;m++){var b=f[m];b in k||(k[b]={});k=k[b]}f=f[f.length-1];m=k[f];b=e(m);b!=m&&null!=b&&q(k,f,{configurable:!0,writable:!0,value:b})}}
U("Promise",function(a){function e(b){this.c=0;this.u=void 0;this.b=[];var d=this.o();try{b(d.resolve,d.reject)}catch(l){d.reject(l)}}function k(){this.a=null}if(a)return a;k.prototype.v=function(b){null==this.a&&(this.a=[],this.D());this.a.push(b)};k.prototype.D=function(){var b=this;this.w(function(){b.G()})};var f=x.setTimeout;k.prototype.w=function(b){f(b,0)};k.prototype.G=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=[];for(var d=0;d<b.length;++d){var a=b[d];delete b[d];try{a()}catch(r){this.F(r)}}}this.a=
null};k.prototype.F=function(b){this.w(function(){throw b;})};e.prototype.o=function(){function b(b){return function(d){l||(l=!0,b.call(a,d))}}var a=this,l=!1;return{resolve:b(this.K),reject:b(this.s)}};e.prototype.K=function(b){if(b===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof e)this.L(b);else{var a;a:switch(typeof b){case "object":a=null!=b;break a;case "function":a=!0;break a;default:a=!1}a?this.J(b):this.A(b)}};e.prototype.J=function(b){var a=void 0;
try{a=b.then}catch(l){this.s(l);return}"function"==typeof a?this.M(a,b):this.A(b)};e.prototype.s=function(a){this.C(2,a)};e.prototype.A=function(a){this.C(1,a)};e.prototype.C=function(a,d){if(0!=this.c)throw Error("Cannot settle("+a+", "+d|"): Promise already settled in state"+this.c);this.c=a;this.u=d;this.H()};e.prototype.H=function(){if(null!=this.b){for(var a=this.b,d=0;d<a.length;++d)a[d].call(),a[d]=null;this.b=null}};var m=new k;e.prototype.L=function(a){var b=this.o();a.h(b.resolve,b.reject)};
e.prototype.M=function(a,d){var b=this.o();try{a.call(d,b.resolve,b.reject)}catch(r){b.reject(r)}};e.prototype.then=function(a,d){function b(a,b){return"function"==typeof a?function(b){try{k(a(b))}catch(w){f(w)}}:b}var k,f,m=new e(function(a,b){k=a;f=b});this.h(b(a,k),b(d,f));return m};e.prototype["catch"]=function(a){return this.then(void 0,a)};e.prototype.h=function(a,d){function b(){switch(e.c){case 1:a(e.u);break;case 2:d(e.u);break;default:throw Error("Unexpected state: "+e.c);}}var e=this;null==
this.b?m.v(b):this.b.push(function(){m.v(b)})};e.resolve=function(a){return a instanceof e?a:new e(function(b){b(a)})};e.reject=function(a){return new e(function(b,e){e(a)})};e.race=function(a){return new e(function(b,l){for(var d=T(a),k=d.next();!k.done;k=d.next())e.resolve(k.value).h(b,l)})};e.all=function(a){var b=T(a),l=b.next();return l.done?e.resolve([]):new e(function(a,d){function k(b){return function(e){f[b]=e;m--;0==m&&a(f)}}var f=[],m=0;do f.push(void 0),m++,e.resolve(l.value).h(k(f.length-
1),d),l=b.next();while(!l.done)})};e.$jscomp$new$AsyncExecutor=function(){return new k};return e});function V(a,e){H();a instanceof String&&(a+="");var k=0,f={next:function(){if(k<a.length){var m=k++;return{value:e(m,a[m]),done:!1}}f.next=function(){return{done:!0,value:void 0}};return f.next()}};f[Symbol.iterator]=function(){return f};return f}U("Array.prototype.keys",function(a){return a?a:function(){return V(this,function(a){return a})}});
U("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});U("String.prototype.includes",function(a){return a?a:function(a,k){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,k||0)}});(function(a,e,k,f,m){function b(){return Math.round(Date.now()/1E3)}function d(g,h){(h?a.clients.get(h):a.clients.matchAll({includeUncontrolled:!0,type:"window"})).then(function(a){if(h)var c=a;else{var b;a.forEach(function(a){a.focused?c=a:c||"visible"!==a.visibilityState||(c=a);b=a})}c||(c=b);g(c)})}function l(g){return a.g().then(function(a){return a.match(g)}).then(function(a){if(a){var c=a.headers.get("x-o10n-exp");if(c)var g=a.headers.get("x-o10n-sw");if(c&&g<b()-c)a=!1;else{if(c=a.headers.get("expire"))c?
isNaN(parseInt(c))&&(c=Date.parse(c),c=isNaN(c)?void 0:Math.round(c/1E3)):c=void 0;c&&c<b()&&(a=!1)}a&&a.headers.has("x-o10n-sw-preload")&&L(a.headers.get("x-o10n-sw-preload"))}return a})}function r(g,h,c){a.g().then(function(a){var n={};h.headers.forEach(function(a,g){n[g]=a});n["x-o10n-sw"]=b();if(c&&c[14])n["x-o10n-sw-exp"]=c[14];else{var d=h.headers.get("cache-control");d&&(d=W.exec(d))&&d[1]&&(n["x-o10n-sw-exp"]=parseInt(d[1]))}return h.blob().then(function(c){c=new Response(c,{status:h.status,
statusText:h.statusText,headers:n});return a.put(g,c)})})}function u(){if(!B||B<b()-60)B=b(),t([3,3])}function K(a,b,c,n){b instanceof Array||(b=[b]);for(var g,h,d,e,l=0,k=b.length;l<k;l++){h=b[l];if("object"===typeof h){if(h[16]&&(d=parseFloat(a),e=parseFloat(h[17]),!isNaN(d)&&!isNaN(e)))switch(h[16]){case "<":g=d<e;break;case ">":g=d>e;break;case "=":g=d===e}}else if(c){if(h=h.match(X)){try{var f=new RegExp(h[1],h[2])}catch(ea){}h=f||!1}else h=void 0;h&&(g=h.test(a))}else g=-1!==a.indexOf(h);if("boolean"===
typeof g)return n?!g:g}return g}function z(a,b,c,d){var g=!1,h=[],n,e,l=(33).toString(),k=(32).toString();c instanceof Array||(c=[]);for(var f=0,m=c.length;f<m;f++)if(n=c[f],!h.length||n[20]){e=null;switch(n[21].toString()){case l:e=K(b,n[22],n[25],n[20]);break;case k:switch(n[18].toLowerCase()){case "referer":case "referrer":if(!d){value=a.referrer;break}default:value=a.headers.get(n[18].toLowerCase())}if(value)e=K(value,n[22],n[25],n[20]);else if(n[23])return!1}if("boolean"===typeof e)if(e)h.push(n),
g=!0;else return!1}return g}function J(g,b,c){var h=[].slice.call(arguments,1);return new Promise(function(c){var b,n=new Promise(function(a){b=a});a.j.forEach(function(a){a[g]&&(n=n.then(a[g]))});n.then(function(a){c(a)});b(h)})}function A(a,b,c,n){a=new Request(a);var g=a.url;return J(0,a,b).then(function(a){var b=a[0],h=a[1];if((a=a[2])||!n&&M&&(a=M(g)))return a;b.headers.has("Accept")&&-1!==b.headers.get("Accept").toLowerCase().indexOf("text/html")&&b.headers.set("x-o10n-sw",1);return e(b).then(function(a){return J(1,
a).then(function(a){a=a[0];if(a.ok&&400>a.status){var c=a.clone();h&&new Promise(function(){h[15]&&!z(c,g,h[15],!0)||r(b,c,h)});c.headers.has("x-o10n-sw-preload")&&L(c.headers.get("x-o10n-sw-preload"),h&&h.B)}return a})})["catch"](function(a){return c?c(b,null,a):null})})}function w(a,h){if(!a)return Promise.reject();"string"===typeof a&&(a=new Request(a,{mode:"no-cors"}));return l(a).then(function(c){if(!c){var g=a.url;c={15:null};h&&(c.B=!0);c=A(a,c,!1,!0).then(function(a){C(g);return a})["catch"](function(a){C(g);
throw a;});p[g]=[b(),c,setTimeout(function(){C(g)},N)]}return c})}function L(a,b){new Promise(function(c){var g=[],h=/<?([^>]*)>(.*)/;a.split(/,\s*</).forEach(function(a){a=a.match(h);a[1]&&g.push(w(a[1],b))});Promise.all(g).then(c)})}function M(a){if(a in p&&p[a]&&p[a][0]>b()-N)return p[a][1]}function O(a){var b=[],c=[];f[9]&&b.push(f[9]);v&&v.forEach(function(a){a[31]&&(f[12]?b.push(a[31]):c.push(a[31]))});f[11]&&f[11].forEach(function(a){var g=f[12];"string"!==typeof a&&("boolean"==typeof a[12]&&
(g=a[12]),a=a.url);a&&(g?b.push(a):c.push(a))});return a?b.concat(c):[b,c]}function C(a){a in p&&(p[a]&&p[a][2]&&clearTimeout(p[a][2]),p[a]=!1,delete p[a])}function P(a,b){return l(a).then(function(a){return a?a.blob().then(function(b){return new Response(b,{status:503,statusText:"Offline",headers:a.headers})}):e(b)["catch"](function(a){setTimeout(function(){throw a;})})})}function Q(a){var b={headers:[]};a.headers.forEach(function(a,g){b.headers.push([g,a])});["credentials","mode","cache","referrer",
"integrity"].forEach(function(c){c in a&&(b[c]=a[c])});return b}function Y(a,h){if(v){var c=!1;if(-1!==h.indexOf("o10n-sw-worker"))c={26:35,35:{}},c[35][28]=1,c[35][29]=1;else for(var g,d=0,e=v.length;d<e;d++)if(g=z(a,h,v[d][24])){c=v[d];break}if(c)switch(c[26].toString()){case Z:break;case aa:case ba:return l(a).then(function(g){if(g){var d=!0,e=c[35][28]?isNaN(parseInt(c[35][28]))?!1:parseInt(c[35][28]):!1;if(e){var l=g.headers.get("x-o10n-sw");l&&parseInt(l)>b()-e&&(d=!1)}d&&t([3,2,h,Q(a),[g.headers.get("etag"),
g.headers.get("last-modified")],c[35]]);return g}return A(a,"event"==c[26]?null:c[35],function(a){return P(c[31],a.clone())})});default:return A(a,c[35],function(a){return l(a).then(function(b){return b?b:P(c[31],a.clone())})})}}}function t(a,b,c,e){if(!e)e=D;else if(e!==D)return Promise.resolve(void 0);return new Promise(function(g){d(function(b){if(b){var d=new MessageChannel;a.unshift(d.port2);a.unshift("o10n");var h=!0,l=function(a){var d=new MessageChannel;a.unshift(d.port2);a.unshift("o10n");
d.port1.onmessage=function(a){c&&c(a.data);g(a.data)};b.postMessage(a,[d.port2])};d.port1.onmessage=function(b){h&&(f&&(clearTimeout(f),f=!1),h=!1,b.data&&1===b.data&&(a.shift(),a.shift(),l(a)))};b.postMessage(["o10n",d.port2,5],[d.port2]);var f=setTimeout(function(){h&&(h=!1,d.port1.onmessage=function(){},a.shift(),a.shift(),t(a,null,c,e))},10)}else setTimeout(t,50,a,null,c,e)},b)})}var v=f[13];a.j=[];var X=/^\/(.*)\/([gimuy]+)?$/;CacheStorage.prototype.match||(CacheStorage.prototype.match=function(a,
b){var c=this;return this.keys().then(function(d){var g;return d.reduce(function(d,h){return d.then(function(){return g||c.open(h).then(function(c){return c.match(a,b)}).then(function(a){return g=a})})},Promise.resolve())})});var ca="o10n"+(f[7]?":"+f[7]:""),W=RegExp("max-ages*=s*([0-9]+)","gi");a.g=function(a){return caches.open(ca+(a?a:""))};var B;if(f[39]instanceof Array){var E=f[39];a.j.push([function(a){var b=a[0],c=a[1],d;if(!c.B&&"navigate"!==b.mode)for(var e,g=0,f=E.length;g<f;g++)if(e=z(b,
b.url,E[g][24])){d=E[g];break}return d?new Promise(function(e){var g=!1,h,f;t([4,5,b.url,Q(b),c,d[40]],null,function(c){g||(c instanceof Array?(f&&(clearTimeout(f),f=!1),1!==c[0]&&2===c[0]&&(g=!0,h&&(clearTimeout(h),h=!1),l(b).then(function(c){c&&(a[2]=l(b));e(a)}))):e(a))});f=setTimeout(function(){g||(g=!0,e(a),h&&(clearTimeout(h),h=!1))},d[42]||1E3);d[40]||(h=setTimeout(function(){g||(g=!0,e(a))},d[41]||1E3))}):Promise.resolve(a)}])}var p={},N=5E3,D;a.addEventListener("install",function(b){b.waitUntil((new Promise(function(a,
b){var c=O(),d=[];c[0].length&&c[0].forEach(function(a){d.push(w(a,!0))});Promise.all(d).then(a)["catch"](b)})).then(function(){a.skipWaiting()})["catch"](function(){a.skipWaiting()}))});a.addEventListener("activate",function(){a.clients.claim();var b=O(!0);if(b.length){var d=[];b.forEach(function(a){d.push(l(a))});Promise.all(d).then(function(a){var c=[];a.forEach(function(a,d){a||c.push(b[d])});c.length&&t([3,1,c])})}u()});var Z=(34).toString(),aa=(35).toString(),ba=(37).toString();a.addEventListener("fetch",
function(a){var b=a.request,c=a.request.url;"navigate"===b.mode&&(D=b.url);if("GET"===b.method&&!b.headers.has("x-o10n-sw-worker")&&!z(b,c,f[38]||[])&&(u(),b=Y(b,c)))return a.respondWith(b)});var R={1:function(a){a(!1,m)},2:function(a,b){if(a){var c;"string"===typeof a||a instanceof Request?c=[a]:a instanceof Array&&(c=a);if(c){var d=[];c.forEach(function(a){d.push(w(a,!0))});Promise.all(d).then(function(a){var c=[];a.forEach(function(a){var b={url:a.url,status:a.status,statusText:a.statusText};a=
a.headers.get("content-length");b.size=isNaN(parseInt(a))?-1:parseInt(a);c.push(b)});b(!1,c)})["catch"](function(){})}else b("data")}else b("urls")},3:function(){},4:function(b,d,c){a.registration.showNotification(event.data[1],event.data[2]);c(!1,"sent")}};a.addEventListener("message",function(a){var b=a?a.data:!1;if(b instanceof Array&&"o10n"==b[0]){var c=b[1],d=b[2].toString(),b=b.slice(3)||[];b.push(function(b,d){t([1,c,b,d],a.N)});d in R&&R[d].apply(this,b)}})})(self,self.fetch,self.Cache,O10N_CONFIG,
O10N_SW_FILE_HASH);
