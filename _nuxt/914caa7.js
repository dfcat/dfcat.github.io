(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{473:function(e,t,r){"use strict";r(5),r(8),r(13),r(14);var n=r(2),o=(r(18),r(9),r(30),r(63),r(454),r(19),r(33),r(455),r(456),r(457),r(458),r(459),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(40),r(32),r(7),r(66),r(275),r(1)),c=r(70),l=r(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=["sm","md","lg","xl"],h=d.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=d.reduce((function(e,t){return e["offset"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),_=d.reduce((function(e,t){return e["order"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(_)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var v=O.get(l);return v||function(){var e,t;for(t in v=[],m)m[t].forEach((function(e){var n=r[e],o=j(t,e,n);o&&v.push(o)}));var o=v.some((function(e){return e.startsWith("col-")}));v.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),O.set(l,v)}(),e(r.tag,Object(c.a)(data,{class:v}),o)}})},517:function(e,t,r){"use strict";r.r(t);var n=r(72),o=r(107),c=r.n(o),l=r(207),f=r(187),v=r(106),d=r(473),h=r(506),y=r(434),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-card",{staticClass:"logo py-4 d-flex justify-center"}),e._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("\n        Welcome to the Vuetify + Nuxt.js template\n      ")]),e._v(" "),r("v-card-text",[r("p",[e._v("Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.")]),e._v(" "),r("p",[e._v("\n          For more information on Vuetify, check out the "),r("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n            documentation\n          ")]),e._v(".\n        ")]),e._v(" "),r("p",[e._v("\n          If you have questions, please join the official "),r("a",{attrs:{href:"https://chat.vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer",title:"chat"}},[e._v("\n            discord\n          ")]),e._v(".\n        ")]),e._v(" "),r("p",[e._v("\n          Find a bug? Report it on the github "),r("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",rel:"noopener noreferrer",title:"contribute"}},[e._v("\n            issue board\n          ")]),e._v(".\n        ")]),e._v(" "),r("p",[e._v("Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.")]),e._v(" "),r("div",{staticClass:"text-xs-right"},[r("em",[r("small",[e._v("— John Leider")])])]),e._v(" "),r("hr",{staticClass:"my-3"}),e._v(" "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          Nuxt Documentation\n        ")]),e._v(" "),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          Nuxt GitHub\n        ")])]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/inspire"}},[e._v("\n          Continue\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:l.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:d.a,VRow:h.a,VSpacer:y.a})}}]);