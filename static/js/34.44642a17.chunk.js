(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[34],{496:function(e,a,t){"use strict";var r=t(18),n=t(48),s=t(2),c=t.n(s),l=t(61),o=t.n(l),u=t(492),m=t.n(u),i=t(493),f={tag:i.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},d=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,l=e.tag,o=e.form,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(i.m)(m()(a,s?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(l,Object(r.a)({},u,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},497:function(e,a,t){"use strict";var r=t(18),n=t(48),s=t(2),c=t.n(s),l=t(61),o=t.n(l),u=t(492),m=t.n(u),i=t(493),f=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:f,offset:f})]),b={tag:i.q,xs:d,sm:d,md:d,lg:d,xl:d,className:o.a.string,cssModule:o.a.object,widths:o.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,s=e.widths,l=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach((function(a,r){var n=e[a];if(delete o[a],n||""===n){var s=!r;if(Object(i.k)(n)){var c,l=s?"-":"-"+a+"-",f=p(s,a,n.size);u.push(Object(i.m)(m()(((c={})[f]=n.size||""===n.size,c["order"+l+n.order]=n.order||0===n.order,c["offset"+l+n.offset]=n.offset||0===n.offset,c)),t))}else{var d=p(s,a,n);u.push(d)}}})),u.length||u.push("col");var f=Object(i.m)(m()(a,u),t);return c.a.createElement(l,Object(r.a)({},o,{className:f}))};E.propTypes=b,E.defaultProps=g,a.a=E},500:function(e,a,t){"use strict";var r=t(18),n=t(48),s=t(2),c=t.n(s),l=t(61),o=t.n(l),u=t(492),m=t.n(u),i=t(493),f={tag:i.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.color,l=e.body,o=e.inverse,u=e.outline,f=e.tag,d=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(i.m)(m()(a,"card",!!o&&"text-white",!!l&&"card-body",!!s&&(u?"border":"bg")+"-"+s),t);return c.a.createElement(f,Object(r.a)({},b,{className:g,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},501:function(e,a,t){"use strict";var r=t(18),n=t(48),s=t(2),c=t.n(s),l=t(61),o=t.n(l),u=t(492),m=t.n(u),i=t(493),f={tag:i.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,l=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(i.m)(m()(a,"card-body"),t);return c.a.createElement(l,Object(r.a)({},o,{className:u,ref:s}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},502:function(e,a,t){"use strict";var r=t(18),n=t(48),s=t(2),c=t.n(s),l=t(61),o=t.n(l),u=t(492),m=t.n(u),i=t(493),f={tag:i.q,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),o=Object(i.m)(m()(a,"card-header"),t);return c.a.createElement(s,Object(r.a)({},l,{className:o}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},741:function(e,a,t){"use strict";t.r(a);var r=t(149),n=t(150),s=t(152),c=t(151),l=t(153),o=t(2),u=t.n(o),m=t(496),i=t(497),f=t(500),d=t(502),b=t(501),g=t(729),p=t(728),E=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,u.a.createElement(i.a,{xs:"12"},u.a.createElement(f.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Breadcrumbs"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(b.a,null,u.a.createElement(g.a,null,u.a.createElement(p.a,{active:!0},"Home")),u.a.createElement(g.a,null,u.a.createElement(p.a,null,u.a.createElement("a",{href:"#"},"Home")),u.a.createElement(p.a,{active:!0},"Library")),u.a.createElement(g.a,null,u.a.createElement(p.a,null,u.a.createElement("a",{href:"#"},"Home")),u.a.createElement(p.a,null,u.a.createElement("a",{href:"#"},"Library")),u.a.createElement(p.a,{active:!0},"Data")),u.a.createElement(g.a,{tag:"nav"},u.a.createElement(p.a,{tag:"a",href:"#"},"Home"),u.a.createElement(p.a,{tag:"a",href:"#"},"Library"),u.a.createElement(p.a,{tag:"a",href:"#"},"Data"),u.a.createElement(p.a,{active:!0,tag:"span"},"Bootstrap")))))))}}]),a}(o.Component);a.default=E}}]);
//# sourceMappingURL=34.44642a17.chunk.js.map