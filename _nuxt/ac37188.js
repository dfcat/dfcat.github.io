(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(t,e,n){},268:function(t,e,n){"use strict";n(32);var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Dashboard",to:"/"},{icon:"mdi-fingerprint",title:"Adventure",to:"/adventure",exact:!1},{icon:"mdi-account",title:"Character",to:"/character",exact:!1},{icon:"mdi-account-group",title:"Group",to:"/group",exact:!1},{icon:"mdi-chart-bubble",title:"Raid",to:"/raid"}],miniVariant:!1,right:!0,rightDrawer:!1,dialog:!1,settings:{notification:!1,dark:!1},footer:{visible:!0,hide:!1},title:"DNF Assemble",user:{id:"tpgus3277",name:"이쁘세현",avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/b9bdf595-dfe5-41c1-9e5e-e96f196ea644-profile_image-70x70.png"}}},mounted:function(){var t=this;this.settings.dark="true"===localStorage.getItem("settings.dark"),this.$vuetify.theme.dark=this.settings.dark,window.addEventListener("mousedown",(function(){!t.footer.hide&&t.footer.visible&&(t.footer.hide=!0,setTimeout((function(){t.footer.visible=!1}),1e3))}))},methods:{updateSettings:function(){this.$vuetify.theme.dark=this.settings.dark,localStorage.setItem("settings.dark",this.settings.dark)}}},o=n(70),c=n(105),l=n.n(c),v=n(387),d=n(397),m=n(388),f=n(184),_=n(205),h=n(185),x=n(104),k=n(396),V=n(398),w=n(389),y=n(390),C=n(183),D=n(188),S=n(118),A=n(189),I=n(190),N=n(57),L=n(391),E=n(392),F=n(393),P=n(394),T=n(395),$=n(47),j=n(193),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:"","expand-on-hover":t.miniVariant},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:!1!==e.exact}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"primary"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("mdi-minus")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1,"nudge-width":200},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("div",[t.user?n("v-avatar",t._g(t._b({},"v-avatar",o,!1),r),[n("img",{attrs:{src:t.user.avatar}})]):n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-account")])],1)],1)]}}])},[t._v(" "),t.user?n("v-card",{staticClass:"mt-5"},[n("v-list",[n("v-list-item",[n("v-list-item-avatar",[n("img",{attrs:{src:t.user.avatar}})]),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("strong",[t._v(t._s(t.user.name))])]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                @"+t._s(t.user.id)+"\n              ")])],1),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v("mdi-cog")])],1),t._v(" "),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{flat:"",color:"primary"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Settings")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-text",[n("v-list",{attrs:{"three-line":"",subheader:""}},[n("v-subheader",[t._v("General")]),t._v(" "),n("v-list-item",[n("v-list-item-action",[n("v-checkbox",{model:{value:t.settings.notifications,callback:function(e){t.$set(t.settings,"notifications",e)},expression:"settings.notifications"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Notifications")]),t._v(" "),n("v-list-item-subtitle",[t._v("Notify me about updates to apps or games that I downloaded")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-action",[n("v-checkbox",{on:{click:t.updateSettings},model:{value:t.settings.dark,callback:function(e){t.$set(t.settings,"dark",e)},expression:"settings.dark"}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Dark mode")]),t._v(" "),n("v-list-item-subtitle",[t._v("Enlong mobile device's battery time")])],1)],1)],1)],1),t._v(" "),n("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.user=null}}},[t._v("Logout")])],1)],1):n("v-card",{staticClass:"mt-5"},[n("v-card-text",{staticClass:"text-center"},[n("v-btn",{staticClass:"yellow accent-2 black--text"},[t._v("카카오톡으로 로그인")])],1)],1)],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{staticStyle:{"z-index":"10",transition:"all 1s"},style:{transform:"translateY("+(t.footer.hide?"36":"0")+"px)",display:t.footer.visible?"flex":"none"},attrs:{absolute:!t.fixed}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{Template:n(272).default}),l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VAvatar:f.a,VBtn:_.a,VCard:h.a,VCardActions:x.a,VCardText:x.c,VCheckbox:k.a,VContainer:V.a,VDialog:w.a,VFooter:y.a,VIcon:C.a,VList:D.a,VListItem:S.a,VListItemAction:A.a,VListItemAvatar:I.a,VListItemContent:N.a,VListItemSubtitle:N.b,VListItemTitle:N.c,VMain:L.a,VMenu:E.a,VNavigationDrawer:F.a,VSpacer:P.a,VSubheader:T.a,VToolbar:$.a,VToolbarTitle:j.a})},272:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({data:function(){return{}},methods:{}}),o=n(70),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"076b5096",null);e.default=component.exports},280:function(t,e,n){n(281),t.exports=n(282)},305:function(t,e,n){"use strict";n(240)},308:function(t,e,n){},309:function(t,e,n){},310:function(t,e,n){},77:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(305),n(70)),c=n(105),l=n.n(c),v=n(387),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[280,17,4,18]]]);