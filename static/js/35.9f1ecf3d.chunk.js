(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[35],{496:function(e,a,t){"use strict";var i=t(18),n=t(48),l=t(2),o=t.n(l),s=t(61),r=t.n(s),m=t(492),c=t.n(m),u=t(493),d={tag:u.q,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool},p=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,s=e.tag,r=e.form,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.m)(c()(a,l?"no-gutters":null,r?"form-row":"row"),t);return o.a.createElement(s,Object(i.a)({},m,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},497:function(e,a,t){"use strict";var i=t(18),n=t(48),l=t(2),o=t.n(l),s=t(61),r=t.n(s),m=t(492),c=t.n(m),u=t(493),d=r.a.oneOfType([r.a.number,r.a.string]),p=r.a.oneOfType([r.a.bool,r.a.number,r.a.string,r.a.shape({size:r.a.oneOfType([r.a.bool,r.a.number,r.a.string]),order:d,offset:d})]),E={tag:u.q,xs:p,sm:p,md:p,lg:p,xl:p,className:r.a.string,cssModule:r.a.object,widths:r.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,l=e.widths,s=e.tag,r=Object(n.a)(e,["className","cssModule","widths","tag"]),m=[];l.forEach((function(a,i){var n=e[a];if(delete r[a],n||""===n){var l=!i;if(Object(u.k)(n)){var o,s=l?"-":"-"+a+"-",d=b(l,a,n.size);m.push(Object(u.m)(c()(((o={})[d]=n.size||""===n.size,o["order"+s+n.order]=n.order||0===n.order,o["offset"+s+n.offset]=n.offset||0===n.offset,o)),t))}else{var p=b(l,a,n);m.push(p)}}})),m.length||m.push("col");var d=Object(u.m)(c()(a,m),t);return o.a.createElement(s,Object(i.a)({},r,{className:d}))};h.propTypes=E,h.defaultProps=g,a.a=h},508:function(e,a,t){"use strict";var i=t(18),n=t(48),l=t(495),o=t(2),s=t.n(o),r=t(61),m=t.n(r),c=t(492),u=t.n(c),d=t(505),p=t(493),E=Object(l.a)({},d.Transition.propTypes,{children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:p.q,baseClass:m.a.string,baseClassActive:m.a.string,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])}),g=Object(l.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var a=e.tag,t=e.baseClass,l=e.baseClassActive,o=e.className,r=e.cssModule,m=e.children,c=e.innerRef,E=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),g=Object(p.o)(E,p.c),b=Object(p.n)(E,p.c);return s.a.createElement(d.Transition,g,(function(e){var n="entered"===e,d=Object(p.m)(u()(o,t,n&&l),r);return s.a.createElement(a,Object(i.a)({className:d},b,{ref:c}),m)}))}b.propTypes=E,b.defaultProps=g,a.a=b},512:function(e,a,t){"use strict";var i=t(18),n=t(48),l=t(2),o=t.n(l),s=t(61),r=t.n(s),m=t(492),c=t.n(m),u=t(493),d={tag:u.q,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),r=Object(u.m)(c()(a,"card-footer"),t);return o.a.createElement(l,Object(i.a)({},s,{className:r}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},542:function(e,a,t){"use strict";var i,n=t(18),l=t(48),o=t(148),s=t(36),r=t(495),m=t(2),c=t.n(m),u=t(61),d=t.n(u),p=t(492),E=t.n(p),g=t(505),b=t(493),h=Object(r.a)({},g.Transition.propTypes,{isOpen:d.a.bool,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.q,className:d.a.node,navbar:d.a.bool,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object])}),x=Object(r.a)({},g.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:b.e.Collapse}),f=((i={})[b.d.ENTERING]="collapsing",i[b.d.ENTERED]="collapse show",i[b.d.EXITING]="collapsing",i[b.d.EXITED]="collapse",i);function q(e){return e.scrollHeight}var v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(o.a)(t))})),t}Object(s.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:q(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:q(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,i=a.isOpen,o=a.className,s=a.navbar,m=a.cssModule,u=a.children,d=(a.innerRef,Object(l.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,h=Object(b.o)(d,b.c),x=Object(b.n)(d,b.c);return c.a.createElement(g.Transition,Object(n.a)({},h,{in:i,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var l=function(e){return f[e]||"collapse"}(a),d=Object(b.m)(E()(o,l,s&&"navbar-collapse"),m),g=null===p?null:{height:p};return c.a.createElement(t,Object(n.a)({},x,{style:Object(r.a)({},x.style,{},g),className:d,ref:e.props.innerRef,"aria-expanded":i?"true":"false"}),u)}))},a}(m.Component);v.propTypes=h,v.defaultProps=x,a.a=v},742:function(e,a,t){"use strict";t.r(a);var i=t(149),n=t(150),l=t(152),o=t(151),s=t(148),r=t(153),m=t(2),c=t.n(m),u=t(496),d=t(497),p=t(500),E=t(502),g=t(501),b=t(512),h=t(732),x=t(508),f=t(542),q=t(528),v=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(o.a)(a).call(this,e))).toggle=t.toggle.bind(Object(s.a)(t)),t.toggleFade=t.toggleFade.bind(Object(s.a)(t)),t.state={collapse:!0,fadeIn:!0,timeout:300},t}return Object(r.a)(a,e),Object(n.a)(a,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState((function(e){return{fadeIn:!e}}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(u.a,null,c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Card title"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,null,c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),c.a.createElement(b.a,null,"Card footer"))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Card with icon",c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("i",{className:"fa fa-check float-right"}))),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Card with switch",c.a.createElement("div",{className:"card-header-actions"},c.a.createElement(q.m,{className:"float-right mb-0",label:!0,color:"info",defaultChecked:!0,size:"sm"}))),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Card with label",c.a.createElement("div",{className:"card-header-actions"},c.a.createElement(h.a,{color:"success",className:"float-right"},"Success"))),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Card with label",c.a.createElement("div",{className:"card-header-actions"},c.a.createElement(h.a,{pill:!0,color:"danger",className:"float-right"},"42"))),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),c.a.createElement(u.a,null,c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"border-primary"},c.a.createElement(E.a,null,"Card outline primary"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"border-secondary"},c.a.createElement(E.a,null,"Card outline secondary"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"border-success"},c.a.createElement(E.a,null,"Card outline success"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"border-info"},c.a.createElement(E.a,null,"Card outline info"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"border-warning"},c.a.createElement(E.a,null,"Card outline warning"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"border-danger"},c.a.createElement(E.a,null,"Card outline danger"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),c.a.createElement(u.a,null,c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"card-accent-primary"},c.a.createElement(E.a,null,"Card with accent"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"card-accent-secondary"},c.a.createElement(E.a,null,"Card with accent"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"card-accent-success"},c.a.createElement(E.a,null,"Card with accent"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"card-accent-info"},c.a.createElement(E.a,null,"Card with accent"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"card-accent-warning"},c.a.createElement(E.a,null,"Card with accent"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"card-accent-danger"},c.a.createElement(E.a,null,"Card with accent"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),c.a.createElement(u.a,null,c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-primary text-center"},c.a.createElement(g.a,null,c.a.createElement("blockquote",{className:"card-bodyquote"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),c.a.createElement("footer",null,"Someone famous in ",c.a.createElement("cite",{title:"Source Title"},"Source Title")))))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-success text-center"},c.a.createElement(g.a,null,c.a.createElement("blockquote",{className:"card-bodyquote"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),c.a.createElement("footer",null,"Someone famous in ",c.a.createElement("cite",{title:"Source Title"},"Source Title")))))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-info text-center"},c.a.createElement(g.a,null,c.a.createElement("blockquote",{className:"card-bodyquote"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),c.a.createElement("footer",null,"Someone famous in ",c.a.createElement("cite",{title:"Source Title"},"Source Title")))))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-warning text-center"},c.a.createElement(g.a,null,c.a.createElement("blockquote",{className:"card-bodyquote"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),c.a.createElement("footer",null,"Someone famous in ",c.a.createElement("cite",{title:"Source Title"},"Source Title")))))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-danger text-center"},c.a.createElement(g.a,null,c.a.createElement("blockquote",{className:"card-bodyquote"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),c.a.createElement("footer",null,"Someone famous in ",c.a.createElement("cite",{title:"Source Title"},"Source Title")))))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-primary text-center"},c.a.createElement(g.a,null,c.a.createElement("blockquote",{className:"card-bodyquote"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),c.a.createElement("footer",null,"Someone famous in ",c.a.createElement("cite",{title:"Source Title"},"Source Title"))))))),c.a.createElement(u.a,null,c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-primary"},c.a.createElement(E.a,null,"Card title"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-success"},c.a.createElement(E.a,null,"Card title"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-info"},c.a.createElement(E.a,null,"Card title"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-warning"},c.a.createElement(E.a,null,"Card title"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(p.a,{className:"text-white bg-danger"},c.a.createElement(E.a,null,"Card title"),c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."))),c.a.createElement(d.a,{xs:"12",sm:"6",md:"4"},c.a.createElement(x.a,{timeout:this.state.timeout,in:this.state.fadeIn},c.a.createElement(p.a,null,c.a.createElement(E.a,null,"Card actions",c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"#",className:"card-header-action btn btn-setting"},c.a.createElement("i",{className:"icon-settings"})),c.a.createElement("a",{className:"card-header-action btn btn-minimize","data-target":"#collapseExample",onClick:this.toggle},c.a.createElement("i",{className:"icon-arrow-up"})),c.a.createElement("a",{className:"card-header-action btn btn-close",onClick:this.toggleFade},c.a.createElement("i",{className:"icon-close"})))),c.a.createElement(f.a,{isOpen:this.state.collapse,id:"collapseExample"},c.a.createElement(g.a,null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))))))}}]),a}(m.Component);a.default=v}}]);
//# sourceMappingURL=35.9f1ecf3d.chunk.js.map