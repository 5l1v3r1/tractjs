(function(e){function t(t){for(var r,l,u=t[0],o=t[1],c=t[2],i=0,m=[];i<u.length;i++)l=u[i],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},l={app:0},a={app:0},s=[];function u(e){return o.p+"js/"+({"custom_model~squeezenet":"custom_model~squeezenet",custom_model:"custom_model",squeezenet:"squeezenet"}[e]||e)+"."+{"custom_model~squeezenet":"ff26ab6c",custom_model:"c35c17c0",squeezenet:"fc18db69"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"custom_model~squeezenet":1,custom_model:1,squeezenet:1};l[e]?t.push(l[e]):0!==l[e]&&n[e]&&t.push(l[e]=new Promise((function(t,n){for(var r="css/"+({"custom_model~squeezenet":"custom_model~squeezenet",custom_model:"custom_model",squeezenet:"squeezenet"}[e]||e)+"."+{"custom_model~squeezenet":"6dcc78ba",custom_model:"7e4d91fc",squeezenet:"aed74564"}[e]+".css",a=o.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],i=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(i===r||i===a))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){c=m[u],i=c.getAttribute("data-href");if(i===r||i===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete l[e],d.parentNode.removeChild(d),n(s)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){l[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=u(e);var m=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",m.name="ChunkLoadError",m.type=r,m.request=l,n[1](m)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tractjs/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a8c":function(e){e.exports=JSON.parse('{"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0","date":"Wed Jun 17 2020 20:22:00 GMT+0100 (British Summer Time)","results":[{"title":"Sentence boundary detection LSTM<br>(bidirectional) (batch size 1)","results":{"tractjs":[46,45,42,43,47,46,45,45,43,46],"Tensorflow.js (CPU)":[296,303,294,300,307,297,299,304,293,305],"Tensorflow.js (WebGL)":[455,451,452,452,445,444,427,422,422,419],"O̶N̶N̶X̶.̶j̶s̶ ̶(̶C̶P̶U̶)̶":[null,null,null,null,null,null,null,null,null,null],"O̶N̶N̶X̶.̶j̶s̶ ̶(̶W̶A̶S̶M̶)̶":[null,null,null,null,null,null,null,null,null,null],"O̶N̶N̶X̶.̶j̶s̶ ̶(̶W̶e̶b̶G̶L̶)̶":[null,null,null,null,null,null,null,null,null,null]}},{"title":"Sentence boundary detection LSTM<br>(bidirectional) (batch size 16)","results":{"tractjs":[400,394,385,388,407,399,389,385,395,396],"Tensorflow.js (CPU)":[4604,4549,4552,4595,4662,4635,4604,4580,4644,4671],"Tensorflow.js (WebGL)":[531,526,562,511,542,511,502,523,491,518],"O̶N̶N̶X̶.̶j̶s̶ ̶(̶C̶P̶U̶)̶":[null,null,null,null,null,null,null,null,null,null],"O̶N̶N̶X̶.̶j̶s̶ ̶(̶W̶A̶S̶M̶)̶":[null,null,null,null,null,null,null,null,null,null],"O̶N̶N̶X̶.̶j̶s̶ ̶(̶W̶e̶b̶G̶L̶)̶":[null,null,null,null,null,null,null,null,null,null]}},{"title":"Squeezenet v1.1<br>(batch size 1)","results":{"tractjs":[253,246,255,254,234,242,246,244,246,247],"Tensorflow.js (CPU)":[1243,1190,1249,1231,1218,1232,1261,1219,1230,1218],"Tensorflow.js (WebGL)":[25,23,23,24,23,21,21,21,33,15],"ONNX.js (CPU)":[5328,5411,5353,5367,5326,5299,5335,5361,5255,5386],"ONNX.js (WASM)":[142,191,190,284,228,235,187,175,262,202],"ONNX.js (WebGL)":[47,49,42,44,46,40,41,37,36,38]}}]}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("router-link",{attrs:{to:"/"}},[r("h1",{staticClass:"white--text font-weight-regular"},[e._v("tractjs")])])],1),r("v-spacer"),r("a",{attrs:{href:"https://github.com/bminixhofer/tractjs"}},[r("v-img",{attrs:{alt:"bminixhofer/tractjs on Github","max-height":"2.4rem","max-width":"2.4rem",src:n("9418")}})],1)],1),r("v-content",{staticClass:"ma-4"},[r("router-view")],1)],1)},a=[],s=n("2877"),u=n("6544"),o=n.n(u),c=n("7496"),i=n("40dc"),m=n("a75b"),d=n("adda"),f=n("2fa4"),p={},h=Object(s["a"])(p,l,a,!1,null,null,null),b=h.exports;o()(h,{VApp:c["a"],VAppBar:i["a"],VContent:m["a"],VImg:d["a"],VSpacer:f["a"]});var v=n("f309"),y=n("fcf4");r["a"].use(v["a"]);var g=new v["a"]({theme:{themes:{light:{primary:y["a"].green.lighten1}}}}),_=(n("7db0"),n("d81d"),n("d3b7"),n("8c4f")),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("h2",{staticClass:"display-1"},[e._v("Demos")]),n("div",{staticClass:"d-flex flex-wrap mt-2 mb-6 pl-1"},e._l(e.demos,(function(t,r){return n("v-hover",{key:r,scopedSlots:e._u([{key:"default",fn:function(r){var l=r.hover;return[n("v-card",{staticClass:"ma-2 ml-0",attrs:{href:t.href,"min-height":"110",width:"300",elevation:l?4:2}},[n("v-card-title",[e._v(e._s(t.title))]),n("v-card-subtitle",[e._v(e._s(t.text))])],1)]}}],null,!0)})})),1),n("h2",{staticClass:"display-1"},[e._v("Benchmarks")]),n("Benches"),n("h2",{staticClass:"display-1"},[e._v("Resources")]),n("v-list",e._l(e.resources,(function(t,r){return n("v-list-item",{key:r,staticClass:"pa-0"},[n("v-btn",{staticClass:"pl-1",attrs:{text:"",href:t.href}},[n("span",{staticClass:"body-1 custom-transform-class text-none mr-2"},[e._v(e._s(t.title))]),n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-open-in-new")])],1)],1)})),1)],1)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"body-1"},[e._v(" Run ONNX and TensorFlow inference in the browser. A thin wrapper on top of "),n("a",{attrs:{href:"https://github.com/snipsco/tract"}},[e._v("tract")]),e._v(". ")])}],C=n("5f35"),w=n.n(C),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"ma-0 mt-2"},[e._v(" Notes: ONNX.js does not support LSTMs. tractjs only utilizes CPU. ")]),n("div",{staticClass:"d-flex flex-wrap mb-6 justify-center"},e._l(e.benches,(function(e,t){return n("Plotly",{key:t,attrs:{data:e.data,layout:e.layout,"display-mode-bar":!1}})})),1),n("p",{staticClass:"ma-0 caption text-right"},[e._v("Benchmark user agent: "+e._s(e.userAgent))]),n("p",{staticClass:"ma-0 caption text-right"},[e._v("Benchmark date: "+e._s(e.benchDate))])])},O=[],z=(n("13d5"),n("b64b"),n("07ac"),n("04d1")),S=n("1a8c"),k={components:{Plotly:z["Plotly"]},data:function(){return{userAgent:S.userAgent,benchDate:S.date,benches:S.results.map((function(e){var t=Object.keys(e.results),n=Object.values(e.results).map((function(e){return e.reduce((function(e,t){return e+t}),0)/e.length})),r=Object.values(e.results).map((function(e){var t=e.reduce((function(e,t){return e+t}),0)/e.length,n=e.reduce((function(e,n){return e+Math.pow(n-t,2)}),0)/e.length,r=n/Math.sqrt(e.length);return r}));return{data:[{x:t,y:n,error_y:{type:"data",symmetric:!1,array:r,arrayminus:r.map((function(e,t){return Math.min(e,n[t])})),visible:!0},marker:{color:["#66BB6A","#4372C1","#4372C1","#F44336","#F44336","#F44336"]},type:"bar"}],layout:{titlefont:{size:12},margin:{l:50,r:50},width:400,height:400,title:e.title,yaxis:{ticksuffix:"ms"},xaxis:{tickfont:{size:10}}}}}))}}},q=k,P=(n("e896"),Object(s["a"])(q,N,O,!1,null,null,null)),T=P.exports,M={name:"App",components:{Benches:T},data:function(){return{demos:[{title:"SqueezeNet inference",text:"Run SqueezeNet, trained on ImageNet, in the browser.",href:"squeezenet"},{title:"Custom model inference",text:"Upload a .onnx file and run data through it.",href:"custom-model"}],resources:[{title:"tractjs API documentation",href:w.a.publicPath+"docs"},{title:"tractjs on Github",href:"https://github.com/bminixhofer/tract-js"},{title:"tract on Github",href:"https://github.com/snipsco/tract"},{title:"tract on docs.rs",href:"https://docs.rs/tract-core/0.6.3/tract_core/"}]}}},A=M,L=n("8336"),E=n("b0af"),B=n("99d9"),V=n("ce87"),G=n("132d"),X=n("8860"),W=n("da13"),U=Object(s["a"])(A,j,x,!1,null,null,null),F=U.exports;o()(U,{VBtn:L["a"],VCard:E["a"],VCardSubtitle:B["a"],VCardTitle:B["b"],VHover:V["a"],VIcon:G["a"],VList:X["a"],VListItem:W["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"display-1"},[e._v("404 Not Found")])},I=[],$={},J=Object(s["a"])($,D,I,!1,null,null,null),H=J.exports,R=n("6607");r["a"].use(_["a"]);var K=R.map((function(e){var t;switch(e.path){case"/":t=F;break;case"/squeezenet":t=function(){return Promise.all([n.e("custom_model~squeezenet"),n.e("squeezenet")]).then(n.bind(null,"3b1b"))};break;case"/custom-model":t=function(){return Promise.all([n.e("custom_model~squeezenet"),n.e("custom_model")]).then(n.bind(null,"33ba"))};break;case"*":t=H}return e.component=t,e})),Q=new _["a"]({mode:"history",base:"/tractjs/",routes:K});Q.beforeEach((function(e,t,n){var r=e.matched.reverse().find((function(e){return e.meta&&e.meta.title}));r&&(document.title=r.meta.title),n()}));var Y=Q;r["a"].config.productionTip=!1,new r["a"]({vuetify:g,router:Y,render:function(e){return e(b)}}).$mount("#app")},"5f35":function(e,t,n){e.exports={transpileDependencies:["vuetify"],publicPath:"/tractjs/",chainWebpack:function(e){return e.resolve.symlinks(!1)}}},6607:function(e){e.exports=JSON.parse('[{"path":"/","name":"Home","meta":{"title":"tractjs"}},{"path":"/squeezenet","name":"Squeezenet","meta":{"title":"Squeezenet Demo - tractjs"}},{"path":"/custom-model","name":"CustomModel","meta":{"title":"Custom Model - tractjs"}},{"path":"*","name":"404","meta":{"title":"404 Page Not Found - tractjs"}}]')},7343:function(e,t,n){},9418:function(e,t,n){e.exports=n.p+"img/GitHub-Mark.07883e93.svg"},e896:function(e,t,n){"use strict";var r=n("7343"),l=n.n(r);l.a}});
//# sourceMappingURL=app.ebdda962.js.map