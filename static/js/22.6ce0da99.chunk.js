(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[22],{496:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},f=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,s=e.tag,o=e.form,i=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.m)(m()(a,n?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(s,Object(l.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},497:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),g={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,s=e.tag,o=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(a,l){var r=e[a];if(delete o[a],r||""===r){var n=!l;if(Object(u.k)(r)){var c,s=n?"-":"-"+a+"-",d=p(n,a,r.size);i.push(Object(u.m)(m()(((c={})[d]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c)),t))}else{var f=p(n,a,r);i.push(f)}}})),i.length||i.push("col");var d=Object(u.m)(m()(a,i),t);return c.a.createElement(s,Object(l.a)({},o,{className:d}))};E.propTypes=g,E.defaultProps=b,a.a=E},498:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(148),c=t(36),s=t(2),o=t.n(s),i=t(61),m=t.n(i),u=t(492),d=t.n(u),f=t(493),g={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:f.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(n.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,m=e.color,u=e.outline,g=e.size,b=e.tag,p=e.innerRef,E=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var N="btn"+(u?"-outline":"")+"-"+m,h=Object(f.m)(d()(c,{close:s},s||"btn",s||N,!!g&&"btn-"+g,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===b&&(b="a");var y=s?"Close":null;return o.a.createElement(b,Object(l.a)({type:"button"===b&&E.onClick?"button":void 0},E,{className:h,ref:p,onClick:this.onClick,"aria-label":t||y}))},a}(o.a.Component);b.propTypes=g,b.defaultProps={color:"secondary",tag:"button"},a.a=b},500:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.body,o=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,g=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.m)(m()(a,"card",!!o&&"text-white",!!s&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return c.a.createElement(d,Object(l.a)({},g,{className:b,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},501:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(m()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},o,{className:i,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},502:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(u.m)(m()(a,"card-header"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},512:function(e,a,t){"use strict";var l=t(18),r=t(48),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(u.m)(m()(a,"card-footer"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},766:function(e,a,t){"use strict";t.r(a);var l=t(149),r=t(150),n=t(152),c=t(151),s=t(153),o=t(2),i=t.n(o),m=t(496),u=t(497),d=t(500),f=t(502),g=t(501),b=t(732),p=t(512),E=t(498),N=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(m.a,null,i.a.createElement(u.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/badge/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(g.a,null,i.a.createElement("h1",null,"Heading ",i.a.createElement(b.a,{color:"secondary"},"New")),i.a.createElement("h2",null,"Heading ",i.a.createElement(b.a,{color:"secondary"},"New")),i.a.createElement("h3",null,"Heading ",i.a.createElement(b.a,{color:"secondary"},"New")),i.a.createElement("h4",null,"Heading ",i.a.createElement(b.a,{color:"secondary"},"New")),i.a.createElement("h5",null,"Heading ",i.a.createElement(b.a,{color:"secondary"},"New")),i.a.createElement("h6",null,"Heading ",i.a.createElement(b.a,{color:"secondary"},"New"))),i.a.createElement(p.a,null,i.a.createElement(E.a,{color:"primary",outline:!0},"Notifications ",i.a.createElement(b.a,{color:"secondary",pill:!0,style:{position:"static"}},"9"))))),i.a.createElement(u.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"contextual variations")),i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"mr-1",color:"primary"},"Primary"),i.a.createElement(b.a,{className:"mr-1",color:"secondary"},"Secondary"),i.a.createElement(b.a,{className:"mr-1",color:"success"},"Success"),i.a.createElement(b.a,{className:"mr-1",color:"danger"},"Danger"),i.a.createElement(b.a,{className:"mr-1",color:"warning"},"Warning"),i.a.createElement(b.a,{className:"mr-1",color:"info"},"Info"),i.a.createElement(b.a,{className:"mr-1",color:"light"},"Light"),i.a.createElement(b.a,{className:"mr-1",color:"dark"},"Dark"))),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"pill badges")),i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"mr-1",color:"primary",pill:!0},"Primary"),i.a.createElement(b.a,{className:"mr-1",color:"secondary",pill:!0},"Secondary"),i.a.createElement(b.a,{className:"mr-1",color:"success",pill:!0},"Success"),i.a.createElement(b.a,{className:"mr-1",color:"danger",pill:!0},"Danger"),i.a.createElement(b.a,{className:"mr-1",color:"warning",pill:!0},"Warning"),i.a.createElement(b.a,{className:"mr-1",color:"info",pill:!0},"Info"),i.a.createElement(b.a,{className:"mr-1",color:"light",pill:!0},"Light"),i.a.createElement(b.a,{className:"mr-1",color:"dark",pill:!0},"Dark"))),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"links")),i.a.createElement(g.a,null,i.a.createElement(b.a,{className:"mr-1",href:"#",color:"primary"},"Primary"),i.a.createElement(b.a,{className:"mr-1",href:"#",color:"secondary"},"Secondary"),i.a.createElement(b.a,{className:"mr-1",href:"#",color:"success"},"Success"),i.a.createElement(b.a,{className:"mr-1",href:"#",color:"danger"},"Danger"),i.a.createElement(b.a,{className:"mr-1",href:"#",color:"warning"},"Warning"),i.a.createElement(b.a,{className:"mr-1",href:"#",color:"info"},"Info"),i.a.createElement(b.a,{className:"mr-1",href:"#",color:"light"},"Light"),i.a.createElement(b.a,{className:"mr-1",href:"#",color:"dark",pill:!0},"Dark"))))))}}]),a}(o.Component);a.default=N}}]);
//# sourceMappingURL=22.6ce0da99.chunk.js.map