(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{299:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(25),n(8),{head:function(){return{title:"About - GrahamSH"}},methods:{send:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"",console.log("Sending"),body={version:"",userAgent:navigator.userAgent,language:navigator.language,content:document.querySelector("#message").value,username:document.querySelector("#grid-first-name").value},t.next=5,fetch("https://grahamsh-contact.glitch.me/send",{method:"POST",body:JSON.stringify(body)});case 5:t.sent;case 7:case"end":return t.stop()}}),t)})))()}}}),l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"container mx-auto px-4 mt-28 md:mt-20 h-screen"},[n("h1",{staticClass:"text-4xl mb-6 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},[t._v("\n    Contact\n  ")]),t._v(" "),n("form",{staticClass:"w-full max-w-lg"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"md:flex md:items-center"},[n("div",{staticClass:"md:w-1/3"},[n("button",{staticClass:"shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"button"},on:{click:function(e){return t.send()}}},[t._v("\n          Send\n        ")])]),t._v(" "),n("div",{staticClass:"md:w-2/3"})])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[n("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[n("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[t._v("\n          Username\n        ")]),t._v(" "),n("input",{staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"grid-first-name",type:"text",placeholder:"GrahamSH"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[n("div",{staticClass:"w-full px-3"},[n("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-password"}},[t._v("\n          Message\n        ")]),t._v(" "),n("textarea",{staticClass:"no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",attrs:{id:"message"}}),t._v(" "),n("p",{staticClass:"text-gray-600 text-xs italic"},[t._v("\n          What do you want to tell me? Write above.\n        ")])])])}],!1,null,null,null);e.default=component.exports}}]);