(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6,7],{253:function(t,e,r){"use strict";var n=r(9),l=r(4),o=r(86),c=r(14),d=r(11),m=r(46),v=r(184),f=r(63),h=r(6),x=r(65),_=r(64).f,y=r(31).f,w=r(13).f,C=r(186).trim,k="Number",S=l.Number,I=S.prototype,N=m(x(I))==k,E=function(t){var e,r,n,l,o,c,d,code,m=f(t,!1);if("string"==typeof m&&m.length>2)if(43===(e=(m=C(m)).charCodeAt(0))||45===e){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+m}for(c=(o=m.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>l)return NaN;return parseInt(o,n)}return+m};if(o(k,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var z,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(N?h((function(){I.valueOf.call(r)})):m(r)!=k)?v(new S(E(e)),r,A):E(e)},L=n?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;L.length>M;M++)d(S,z=L[M])&&!d(A,z)&&w(A,z,y(S,z));A.prototype=I,I.constructor=A,c(l,k,A)}},254:function(t,e,r){"use strict";var n=r(2),l=r(47),o=r(255),c=r(185),d=r(6),m=1..toFixed,v=Math.floor,f=function(t,e,r){return 0===e?r:e%2==1?f(t,e-1,r*t):f(t*t,e/2,r)},h=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},x=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},_=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+c.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:m&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){m.call({})}))},{toFixed:function(t){var e,r,n,d,m=o(this),v=l(t),data=[0,0,0,0,0,0],y="",w="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(m!=m)return"NaN";if(m<=-1e21||m>=1e21)return String(m);if(m<0&&(y="-",m=-m),m>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(m*f(2,69,1))-69)<0?m*f(2,-e,1):m/f(2,e,1),r*=4503599627370496,(e=52-e)>0){for(h(data,0,r),n=v;n>=7;)h(data,1e7,0),n-=7;for(h(data,f(10,n,1),0),n=e-1;n>=23;)x(data,1<<23),n-=23;x(data,1<<n),h(data,1,1),x(data,2),w=_(data)}else h(data,0,r),h(data,1<<-e,0),w=_(data)+c.call("0",v);return w=v>0?y+((d=w.length)<=v?"0."+c.call("0",v-d)+w:w.slice(0,d-v)+"."+w.slice(d-v)):y+w}})},255:function(t,e,r){var n=r(46);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},260:function(t,e,r){"use strict";r.r(e);var n={props:{type:{type:String,required:!0},imageUrl:{type:String,required:!1,default:null},backgroundSize:{type:String,required:!1,default:"cover"},iframeUrl:{type:String,required:!1,default:null}},data:function(){return{itemLoaded:!1}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"repository"===t.type?r("div",{staticClass:"p-4 space-y-1 bg-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-opacity-80 dark:bg-gray-800 dark:hover:bg-gray-800"},[r("div",{staticClass:"w-7/12 h-4 bg-gray-300 rounded-md dark:bg-gray-700 animate-pulse"}),t._v(" "),t._m(0)]):"image"===t.type&&t.imageUrl?r("div",{class:{"bg-gray-100 dark:bg-gray-700 animate-pulse":!1===t.itemLoaded},style:{background:!0===t.itemLoaded?"url('"+t.imageUrl+"') no-repeat center":"",backgroundSize:!0===t.itemLoaded?t.backgroundSize:""}},[r("img",{staticClass:"invisible",attrs:{src:t.imageUrl,draggable:"false",alt:"image",width:"100%",height:"100%"},on:{load:function(e){t.itemLoaded=!0}}})]):"iframe"===t.type&&t.iframeUrl?r("div",{class:{"h-56 w-full":!0,"bg-gray-100 dark:bg-gray-800 rounded animate-pulse":!1===t.itemLoaded}},[r("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===t.itemLoaded},attrs:{src:t.iframeUrl},on:{load:function(e){t.itemLoaded=!0}}})]):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-px animate-pulse"},[r("div",{staticClass:"w-full h-3 bg-gray-300 rounded-md dark:bg-gray-700"}),t._v(" "),r("div",{staticClass:"w-11/12 h-3 bg-gray-300 rounded-md dark:bg-gray-700"}),t._v(" "),r("div",{staticClass:"w-4/12 h-3 bg-gray-300 rounded-md dark:bg-gray-700"})])}],!1,null,null,null);e.default=component.exports},261:function(t,e,r){"use strict";r.r(e);r(253),r(37),r(52),r(254);var n={props:{name:{type:String,required:!0},language:{type:String,required:!1,default:function(){return null}},stars:{type:[String,Number],required:!0},forks:{type:[String,Number],required:!0},description:{type:String,required:!0}},computed:{getLanguageIcon:function(){return{Vue:"vuejs",TypeScript:"typescript",JavaScript:"javascript"}[this.language]||!1}},methods:{nFormatter:function(t,e){var i,r=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(i=r.length-1;i>0&&!(t>=r[i].value);i--);return(t/r[i].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+r[i].symbol}}},l=r(12),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mx-4 border px-4 py-4 mb-4 -mr-2 rounded text-sm"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"mr-2"},[r("svg",{staticClass:"octicon octicon-repo mr-2 text-gray flex-shrink-0",attrs:{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"}})])]),t._v(" "),r("div",[r("a",{staticClass:"no-underline text-blue-500",attrs:{href:"#"}},[t._v("\n          "+t._s(t.name)+"\n        ")]),t._v(" "),r("span",{staticClass:"table text-gray-500"},[t._v(t._s(t.description))])]),t._v(" "),r("br")]),t._v(" "),r("div",{staticClass:"flex text-sm mt-6"},[r("div",{staticClass:"mr-4 font-thin text-xs"},[t._v("\n        "+t._s(t.language)+"\n      ")]),t._v(" "),r("div",{staticClass:"mr-4 font-thin text-xs"},[r("svg",{staticClass:"octicon octicon-star inline",attrs:{"aria-label":"stars",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"}})]),t._v("\n        "+t._s(t.nFormatter(t.stars))+"\n      ")]),t._v(" "),r("div",{staticClass:"mr-4 font-thin text-xs"},[t._v("\n        "+t._s(t.nFormatter(t.forks))+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(25),r(8),r(88),r(39),r(53),r(26),r(66),{data:function(){return{repos:[]}},head:function(){return{title:"Home - GrahamSH"}},fetchOnServer:!1,fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,filter;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/GrahamsH-LLK/repos");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,console.log(n),filter=[],t.repos=null==n||null===(r=n.filter((function(t){return!1===t.fork&&!filter.includes(t.name)})))||void 0===r?void 0:r.sort((function(a,b){return(null==b?void 0:b.stargazers_count)-(null==a?void 0:a.stargazers_count)}));case 8:case"end":return e.stop()}}),e)})))()}))}),o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"container mx-auto px-4 sm:mt-28 mt-28 md:mt-20 min-h-screen"},[t._m(0),t._v(" "),r("div",{staticClass:"py-12 bg-white"},[r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[t._m(1),t._v(" "),r("div",{staticClass:"mt-10"},[r("dl",{staticClass:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{href:"https://scratchaddons.com"}},[r("div",{staticClass:"flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[r("svg",{staticClass:"h-6 w-6",staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18A3.86 3.86 0 0 1 14 6h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1zM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 .42-.82a1 1 0 0 1 .91-.13a1.77 1.77 0 0 0 1.74-.23a2 2 0 0 0 .93-1.37a2 2 0 0 0-.48-1.59a1.89 1.89 0 0 0-2.17-.55a1 1 0 0 1-.91-.13a1 1 0 0 1-.42-.82V8h-3.2a1 1 0 0 1-1-1.33a1.77 1.77 0 0 0-.23-1.74a1.94 1.94 0 0 0-3-.43A2 2 0 0 0 8 6a1.89 1.89 0 0 0 .13.67A1 1 0 0 1 7.18 8z",fill:"#fff"}})])])])]),t._v(" "),t._m(2)]),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{href:"https://bijou.js.org"}},[r("div",{staticClass:"flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[r("svg",{staticClass:"h-6 w-6",staticStyle:{"-ms-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)",transform:"rotate(360deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M7.5 10h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2zm4 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm0-4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm6.92-2.62a1 1 0 0 0-.21-1.09l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0l-.28-.1H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h4a1 1 0 0 0 .92-.62zM13.5 8a1 1 0 0 1-1-1V5.41L15.09 8zm7 4h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 .53.88a1 1 0 0 0 1-.05l1.97-1.3l2 1.3a1 1 0 0 0 1.5-.83v-8a1 1 0 0 0-1-1zm-1 7.12l-.94-.63a1 1 0 0 0-1.12 0l-.94.63V14h3z",fill:"#fff"}})])])])]),t._v(" "),t._m(3)]),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"flex-shrink-0"},[r("div",{staticClass:"flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 10V3L4 14h7v7l9-11h-7z"}})])])]),t._v(" "),t._m(4)]),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{href:"https://wasteof.money"}},[r("div",{staticClass:"flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"},[r("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}})])])])]),t._v(" "),t._m(5)])])])])]),t._v(" "),r("section",[r("h2",{staticClass:"mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100"},[t._v("\n      My GitHub repositories\n    ")]),t._v(" "),r("div",{staticClass:"mt-3"},[t.$fetchState.pending?r("div",{staticClass:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t._l(6,(function(t){return r("Skeleton",{key:"repo-skeleton-"+t,attrs:{type:"repository"}})})),1):t._e(),t._v(" "),t.$fetchState.error?r("div",[t._v("Error loading GitHub repositories")]):t._e(),t._v(" "),r("div",{staticClass:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t._l(t.repos,(function(t,e){return r("a",{key:"repo-"+e,attrs:{href:t.html_url,target:"_blank",rel:"noreferrer",title:"Click here to visit this repository"}},[r("Repo",{staticClass:"h-full",attrs:{name:t.name,language:t.language,stars:t.stargazers_count,description:t.description||"",forks:t.forks}})],1)})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero py-16"},[r("div",{staticClass:"container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto"},[r("div",{staticClass:"grid grid-cols-1 md:grid-cols-12 gap-8 items-center"},[r("div",{staticClass:"col-span-6"},[r("h1",{staticClass:"font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight"},[t._v("\n            Hi, I'm @GrahamSH\n          ")]),t._v(" "),r("hr",{staticClass:"w-12 h-1 bg-indigo-600 rounded-full mt-8"}),t._v(" "),r("p",{staticClass:"text-gray-800 text-2xl leading-relaxed mt-8 font-semibold"},[t._v("\n            Coder and Scratcher\n          ")])]),t._v(" "),r("div",{staticClass:"col-span-6"},[r("img",{attrs:{src:"/logo.svg",height:"300px",width:"300px"}})])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:text-center"},[r("h2",{staticClass:"text-base text-indigo-600 font-semibold tracking-wide uppercase"},[t._v("\n          My portfolio\n        ")]),t._v(" "),r("p",{staticClass:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n          GrahamSH\n        ")]),t._v(" "),r("p",{staticClass:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"},[t._v("\n          Some projects I've worked on\n        ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                ScratchAddons\n              ")]),t._v(" "),r("dd",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n                I've made many contributions to ScratchAddons, the all in one\n                extension for new Scratch features and improvements.\n              ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                Bijou.js\n              ")]),t._v(" "),r("dd",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n                I'm a contributor to Bijou.js, the JS library for quick\n                snippets.\n              ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                GrahamSH.com\n              ")]),t._v(" "),r("dd",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n                I rewrote GrahamSH.com (my site) in Nuxt.js.\n              ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                wasteof.money\n              ")]),t._v(" "),r("dd",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n                I've contributed a lot to wasteof.money, the next generation\n                social media.\n              ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Skeleton:r(260).default,Repo:r(261).default})}}]);