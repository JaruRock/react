(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[38],{496:function(e,a,c){"use strict";var t=c(18),n=c(48),o=c(2),l=c.n(o),s=c(61),m=c.n(s),i=c(492),r=c.n(i),d=c(493),E={tag:d.q,noGutters:m.a.bool,className:m.a.string,cssModule:m.a.object,form:m.a.bool},x=function(e){var a=e.className,c=e.cssModule,o=e.noGutters,s=e.tag,m=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),E=Object(d.m)(r()(a,o?"no-gutters":null,m?"form-row":"row"),c);return l.a.createElement(s,Object(t.a)({},i,{className:E}))};x.propTypes=E,x.defaultProps={tag:"div"},a.a=x},497:function(e,a,c){"use strict";var t=c(18),n=c(48),o=c(2),l=c.n(o),s=c(61),m=c.n(s),i=c(492),r=c.n(i),d=c(493),E=m.a.oneOfType([m.a.number,m.a.string]),x=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:E,offset:E})]),b={tag:d.q,xs:x,sm:x,md:x,lg:x,xl:x,className:m.a.string,cssModule:m.a.object,widths:m.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},k=function(e,a,c){return!0===c||""===c?e?"col":"col-"+a:"auto"===c?e?"col-auto":"col-"+a+"-auto":e?"col-"+c:"col-"+a+"-"+c},N=function(e){var a=e.className,c=e.cssModule,o=e.widths,s=e.tag,m=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,t){var n=e[a];if(delete m[a],n||""===n){var o=!t;if(Object(d.k)(n)){var l,s=o?"-":"-"+a+"-",E=k(o,a,n.size);i.push(Object(d.m)(r()(((l={})[E]=n.size||""===n.size,l["order"+s+n.order]=n.order||0===n.order,l["offset"+s+n.offset]=n.offset||0===n.offset,l)),c))}else{var x=k(o,a,n);i.push(x)}}})),i.length||i.push("col");var E=Object(d.m)(r()(a,i),c);return l.a.createElement(s,Object(t.a)({},m,{className:E}))};N.propTypes=b,N.defaultProps=f,a.a=N},500:function(e,a,c){"use strict";var t=c(18),n=c(48),o=c(2),l=c.n(o),s=c(61),m=c.n(s),i=c(492),r=c.n(i),d=c(493),E={tag:d.q,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},x=function(e){var a=e.className,c=e.cssModule,o=e.color,s=e.body,m=e.inverse,i=e.outline,E=e.tag,x=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.m)(r()(a,"card",!!m&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),c);return l.a.createElement(E,Object(t.a)({},b,{className:f,ref:x}))};x.propTypes=E,x.defaultProps={tag:"div"},a.a=x},501:function(e,a,c){"use strict";var t=c(18),n=c(48),o=c(2),l=c.n(o),s=c(61),m=c.n(s),i=c(492),r=c.n(i),d=c(493),E={tag:d.q,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},x=function(e){var a=e.className,c=e.cssModule,o=e.innerRef,s=e.tag,m=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.m)(r()(a,"card-body"),c);return l.a.createElement(s,Object(t.a)({},m,{className:i,ref:o}))};x.propTypes=E,x.defaultProps={tag:"div"},a.a=x},502:function(e,a,c){"use strict";var t=c(18),n=c(48),o=c(2),l=c.n(o),s=c(61),m=c.n(s),i=c(492),r=c.n(i),d=c(493),E={tag:d.q,className:m.a.string,cssModule:m.a.object},x=function(e){var a=e.className,c=e.cssModule,o=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),m=Object(d.m)(r()(a,"card-header"),c);return l.a.createElement(o,Object(t.a)({},s,{className:m}))};x.propTypes=E,x.defaultProps={tag:"div"},a.a=x},764:function(e,a,c){"use strict";c.r(a);var t=c(149),n=c(150),o=c(152),l=c(151),s=c(153),m=c(2),i=c.n(m),r=c(500),d=c(502),E=c(501),x=c(496),b=c(497),f=function(e){function a(){return Object(t.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(r.a,null,i.a.createElement(d.a,null,i.a.createElement("i",{className:"fa fa-picture-o"})," Simple Line Icons"),i.a.createElement(E.a,null,i.a.createElement(x.a,{className:"text-center"},i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-user icons font-2xl d-block mt-4"}),"icon-user"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-people icons font-2xl d-block mt-4"}),"icon-people"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-user-female icons font-2xl d-block mt-4"}),"icon-user-female"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-user-follow icons font-2xl d-block mt-4"}),"icon-user-follow"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-user-following icons font-2xl d-block mt-4"}),"icon-user-following"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-user-unfollow icons font-2xl d-block mt-4"}),"icon-user-unfollow"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-login icons font-2xl d-block mt-4"}),"icon-login"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-logout icons font-2xl d-block mt-4"}),"icon-logout"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-emotsmile icons font-2xl d-block mt-4"}),"icon-emotsmile"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-phone icons font-2xl d-block mt-4"}),"icon-phone"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-call-end icons font-2xl d-block mt-4"}),"icon-call-end"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-call-in icons font-2xl d-block mt-4"}),"icon-call-in"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-call-out icons font-2xl d-block mt-4"}),"icon-call-out"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-map icons font-2xl d-block mt-4"}),"icon-map"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-location-pin icons font-2xl d-block mt-4"}),"icon-location-pin"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-direction icons font-2xl d-block mt-4"}),"icon-direction"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-directions icons font-2xl d-block mt-4"}),"icon-directions"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-compass icons font-2xl d-block mt-4"}),"icon-compass"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-layers icons font-2xl d-block mt-4"}),"icon-layers"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-menu icons font-2xl d-block mt-4"}),"icon-menu"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-list icons font-2xl d-block mt-4"}),"icon-list"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-options-vertical icons font-2xl d-block mt-4"}),"icon-options-vertical"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-options icons font-2xl d-block mt-4"}),"icon-options"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-down icons font-2xl d-block mt-4"}),"icon-arrow-down"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-left icons font-2xl d-block mt-4"}),"icon-arrow-left"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-right icons font-2xl d-block mt-4"}),"icon-arrow-right"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-up icons font-2xl d-block mt-4"}),"icon-arrow-up"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-up-circle icons font-2xl d-block mt-4"}),"icon-arrow-up-circle"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-left-circle icons font-2xl d-block mt-4"}),"icon-arrow-left-circle"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-right-circle icons font-2xl d-block mt-4"}),"icon-arrow-right-circle"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-arrow-down-circle icons font-2xl d-block mt-4"}),"icon-arrow-down-circle"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-check icons font-2xl d-block mt-4"}),"icon-check"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-clock icons font-2xl d-block mt-4"}),"icon-clock"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-plus icons font-2xl d-block mt-4"}),"icon-plus"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-close icons font-2xl d-block mt-4"}),"icon-close"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-trophy icons font-2xl d-block mt-4"}),"icon-trophy"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-screen-smartphone icons font-2xl d-block mt-4"}),"icon-screen-smartphone"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-screen-desktop icons font-2xl d-block mt-4"}),"icon-screen-desktop"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-plane icons font-2xl d-block mt-4"}),"icon-plane"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-notebook icons font-2xl d-block mt-4"}),"icon-notebook"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-mustache icons font-2xl d-block mt-4"}),"icon-mustache"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-mouse icons font-2xl d-block mt-4"}),"icon-mouse"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-magnet icons font-2xl d-block mt-4"}),"icon-magnet"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-energy icons font-2xl d-block mt-4"}),"icon-energy"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-disc icons font-2xl d-block mt-4"}),"icon-disc"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-cursor icons font-2xl d-block mt-4"}),"icon-cursor"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-cursor-move icons font-2xl d-block mt-4"}),"icon-cursor-move"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-crop icons font-2xl d-block mt-4"}),"icon-crop"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-chemistry icons font-2xl d-block mt-4"}),"icon-chemistry"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-speedometer icons font-2xl d-block mt-4"}),"icon-speedometer"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-shield icons font-2xl d-block mt-4"}),"icon-shield"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-screen-tablet icons font-2xl d-block mt-4"}),"icon-screen-tablet"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-magic-wand icons font-2xl d-block mt-4"}),"icon-magic-wand"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-hourglass icons font-2xl d-block mt-4"}),"icon-hourglass"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-graduation icons font-2xl d-block mt-4"}),"icon-graduation"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-ghost icons font-2xl d-block mt-4"}),"icon-ghost"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-game-controller icons font-2xl d-block mt-4"}),"icon-game-controller"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-fire icons font-2xl d-block mt-4"}),"icon-fire"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-eyeglass icons font-2xl d-block mt-4"}),"icon-eyeglass"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-envelope-open icons font-2xl d-block mt-4"}),"icon-envelope-open"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-envelope-letter icons font-2xl d-block mt-4"}),"icon-envelope-letter"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-bell icons font-2xl d-block mt-4"}),"icon-bell"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-badge icons font-2xl d-block mt-4"}),"icon-badge"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-anchor icons font-2xl d-block mt-4"}),"icon-anchor"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-wallet icons font-2xl d-block mt-4"}),"icon-wallet"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-vector icons font-2xl d-block mt-4"}),"icon-vector"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-speech icons font-2xl d-block mt-4"}),"icon-speech"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-puzzle icons font-2xl d-block mt-4"}),"icon-puzzle"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-printer icons font-2xl d-block mt-4"}),"icon-printer"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-present icons font-2xl d-block mt-4"}),"icon-present"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-playlist icons font-2xl d-block mt-4"}),"icon-playlist"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-pin icons font-2xl d-block mt-4"}),"icon-pin"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-picture icons font-2xl d-block mt-4"}),"icon-picture"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-handbag icons font-2xl d-block mt-4"}),"icon-handbag"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-globe-alt icons font-2xl d-block mt-4"}),"icon-globe-alt"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-globe icons font-2xl d-block mt-4"}),"icon-globe"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-folder-alt icons font-2xl d-block mt-4"}),"icon-folder-alt"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-folder icons font-2xl d-block mt-4"}),"icon-folder"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-film icons font-2xl d-block mt-4"}),"icon-film"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-feed icons font-2xl d-block mt-4"}),"icon-feed"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-drop icons font-2xl d-block mt-4"}),"icon-drop"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-drawer icons font-2xl d-block mt-4"}),"icon-drawer"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-docs icons font-2xl d-block mt-4"}),"icon-docs"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-doc icons font-2xl d-block mt-4"}),"icon-doc"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-diamond icons font-2xl d-block mt-4"}),"icon-diamond"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-cup icons font-2xl d-block mt-4"}),"icon-cup"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-calculator icons font-2xl d-block mt-4"}),"icon-calculator"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-bubbles icons font-2xl d-block mt-4"}),"icon-bubbles"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-briefcase icons font-2xl d-block mt-4"}),"icon-briefcase"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-book-open icons font-2xl d-block mt-4"}),"icon-book-open"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-basket-loaded icons font-2xl d-block mt-4"}),"icon-basket-loaded"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-basket icons font-2xl d-block mt-4"}),"icon-basket"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-bag icons font-2xl d-block mt-4"}),"icon-bag"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-action-undo icons font-2xl d-block mt-4"}),"icon-action-undo"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-action-redo icons font-2xl d-block mt-4"}),"icon-action-redo"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-wrench icons font-2xl d-block mt-4"}),"icon-wrench"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-umbrella icons font-2xl d-block mt-4"}),"icon-umbrella"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-trash icons font-2xl d-block mt-4"}),"icon-trash"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-tag icons font-2xl d-block mt-4"}),"icon-tag"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-support icons font-2xl d-block mt-4"}),"icon-support"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-frame icons font-2xl d-block mt-4"}),"icon-frame"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-size-fullscreen icons font-2xl d-block mt-4"}),"icon-size-fullscreen"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-size-actual icons font-2xl d-block mt-4"}),"icon-size-actual"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-shuffle icons font-2xl d-block mt-4"}),"icon-shuffle"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-share-alt icons font-2xl d-block mt-4"}),"icon-share-alt"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-share icons font-2xl d-block mt-4"}),"icon-share"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-rocket icons font-2xl d-block mt-4"}),"icon-rocket"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-question icons font-2xl d-block mt-4"}),"icon-question"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-pie-chart icons font-2xl d-block mt-4"}),"icon-pie-chart"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-pencil icons font-2xl d-block mt-4"}),"icon-pencil"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-note icons font-2xl d-block mt-4"}),"icon-note"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-loop icons font-2xl d-block mt-4"}),"icon-loop"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-home icons font-2xl d-block mt-4"}),"icon-home"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-grid icons font-2xl d-block mt-4"}),"icon-grid"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-graph icons font-2xl d-block mt-4"}),"icon-graph"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-microphone icons font-2xl d-block mt-4"}),"icon-microphone"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-music-tone-alt icons font-2xl d-block mt-4"}),"icon-music-tone-alt"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-music-tone icons font-2xl d-block mt-4"}),"icon-music-tone"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-earphones-alt icons font-2xl d-block mt-4"}),"icon-earphones-alt"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-earphones icons font-2xl d-block mt-4"}),"icon-earphones"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-equalizer icons font-2xl d-block mt-4"}),"icon-equalizer"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-like icons font-2xl d-block mt-4"}),"icon-like"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-dislike icons font-2xl d-block mt-4"}),"icon-dislike"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-control-start icons font-2xl d-block mt-4"}),"icon-control-start"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-control-rewind icons font-2xl d-block mt-4"}),"icon-control-rewind"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-control-play icons font-2xl d-block mt-4"}),"icon-control-play"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-control-pause icons font-2xl d-block mt-4"}),"icon-control-pause"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-control-forward icons font-2xl d-block mt-4"}),"icon-control-forward"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-control-end icons font-2xl d-block mt-4"}),"icon-control-end"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-volume-1 icons font-2xl d-block mt-4"}),"icon-volume-1"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-volume-2 icons font-2xl d-block mt-4"}),"icon-volume-2"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-volume-off icons font-2xl d-block mt-4"}),"icon-volume-off"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-calendar icons font-2xl d-block mt-4"}),"icon-calendar"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-bulb icons font-2xl d-block mt-4"}),"icon-bulb"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-chart icons font-2xl d-block mt-4"}),"icon-chart"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-ban icons font-2xl d-block mt-4"}),"icon-ban"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-bubble icons font-2xl d-block mt-4"}),"icon-bubble"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-camrecorder icons font-2xl d-block mt-4"}),"icon-camrecorder"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-camera icons font-2xl d-block mt-4"}),"icon-camera"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-cloud-download icons font-2xl d-block mt-4"}),"icon-cloud-download"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-cloud-upload icons font-2xl d-block mt-4"}),"icon-cloud-upload"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-envelope icons font-2xl d-block mt-4"}),"icon-envelope"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-eye icons font-2xl d-block mt-4"}),"icon-eye"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-flag icons font-2xl d-block mt-4"}),"icon-flag"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-heart icons font-2xl d-block mt-4"}),"icon-heart"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-info icons font-2xl d-block mt-4"}),"icon-info"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-key icons font-2xl d-block mt-4"}),"icon-key"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-link icons font-2xl d-block mt-4"}),"icon-link"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-lock icons font-2xl d-block mt-4"}),"icon-lock"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-lock-open icons font-2xl d-block mt-4"}),"icon-lock-open"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-magnifier icons font-2xl d-block mt-4"}),"icon-magnifier"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-magnifier-add icons font-2xl d-block mt-4"}),"icon-magnifier-add"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-magnifier-remove icons font-2xl d-block mt-4"}),"icon-magnifier-remove"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-paper-clip icons font-2xl d-block mt-4"}),"icon-paper-clip"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-paper-plane icons font-2xl d-block mt-4"}),"icon-paper-plane"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-power icons font-2xl d-block mt-4"}),"icon-power"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-refresh icons font-2xl d-block mt-4"}),"icon-refresh"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-reload icons font-2xl d-block mt-4"}),"icon-reload"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-settings icons font-2xl d-block mt-4"}),"icon-settings"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-star icons font-2xl d-block mt-4"}),"icon-star"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-symbol-female icons font-2xl d-block mt-4"}),"icon-symbol-female"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-symbol-male icons font-2xl d-block mt-4"}),"icon-symbol-male"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-target icons font-2xl d-block mt-4"}),"icon-target"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-credit-card icons font-2xl d-block mt-4"}),"icon-credit-card"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-paypal icons font-2xl d-block mt-4"}),"icon-paypal"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-tumblr icons font-2xl d-block mt-4"}),"icon-social-tumblr"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-twitter icons font-2xl d-block mt-4"}),"icon-social-twitter"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-facebook icons font-2xl d-block mt-4"}),"icon-social-facebook"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-instagram icons font-2xl d-block mt-4"}),"icon-social-instagram"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-linkedin icons font-2xl d-block mt-4"}),"icon-social-linkedin"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-pinterest icons font-2xl d-block mt-4"}),"icon-social-pinterest"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-github icons font-2xl d-block mt-4"}),"icon-social-github"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-gplus icons font-2xl d-block mt-4"}),"icon-social-gplus"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-reddit icons font-2xl d-block mt-4"}),"icon-social-reddit"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-skype icons font-2xl d-block mt-4"}),"icon-social-skype"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-dribbble icons font-2xl d-block mt-4"}),"icon-social-dribbble"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-behance icons font-2xl d-block mt-4"}),"icon-social-behance"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-foursqare icons font-2xl d-block mt-4"}),"icon-social-foursqare"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-soundcloud icons font-2xl d-block mt-4"}),"icon-social-soundcloud"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-spotify icons font-2xl d-block mt-4"}),"icon-social-spotify"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-stumbleupon icons font-2xl d-block mt-4"}),"icon-social-stumbleupon"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-youtube icons font-2xl d-block mt-4"}),"icon-social-youtube"),i.a.createElement(b.a,{xs:"6",sm:"4",md:"3"},i.a.createElement("i",{className:"icon-social-dropbox icons font-2xl d-block mt-4"}),"icon-social-dropbox")))))}}]),a}(m.Component);a.default=f}}]);
//# sourceMappingURL=38.f7d81524.chunk.js.map