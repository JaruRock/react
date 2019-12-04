(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[27],{498:function(e,t,a){"use strict";var n=a(18),o=a(48),r=a(148),s=a(36),i=a(2),l=a.n(i),c=a(61),p=a.n(c),d=a(492),u=a.n(d),b=a(493),h={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:b.q,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,s=e.className,i=e.close,c=e.cssModule,p=e.color,d=e.outline,h=e.size,g=e.tag,m=e.innerRef,f=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof f.children&&(f.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+p,E=Object(b.m)(u()(s,{close:i},i||"btn",i||v,!!h&&"btn-"+h,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),c);f.href&&"button"===g&&(g="a");var O=i?"Close":null;return l.a.createElement(g,Object(n.a)({type:"button"===g&&f.onClick?"button":void 0},f,{className:E,ref:m,onClick:this.onClick,"aria-label":a||O}))},t}(l.a.Component);g.propTypes=h,g.defaultProps={color:"secondary",tag:"button"},t.a=g},516:function(e,t,a){"use strict";var n=a(18),o=a(48),r=a(148),s=a(36),i=a(2),l=a.n(i),c=a(61),p=a.n(c),d=a(492),u=a.n(d),b=a(503),h=a(499),g=a(493),m=a(498),f={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:g.q,nav:p.a.bool},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,r=a.className,s=a.color,i=a.cssModule,c=a.caret,p=a.split,d=a.nav,h=a.tag,f=Object(o.a)(a,["className","color","cssModule","caret","split","nav","tag"]),v=f["aria-label"]||"Toggle Dropdown",E=Object(g.m)(u()(r,{"dropdown-toggle":c||p,"dropdown-toggle-split":p,"nav-link":d}),i),O=f.children||l.a.createElement("span",{className:"sr-only"},v);return d&&!h?(e="a",f.href="#"):h?e=h:(e=m.a,f.color=s,f.cssModule=i),this.context.inNavbar?l.a.createElement(e,Object(n.a)({},f,{className:E,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:O})):l.a.createElement(b.c,null,(function(a){var o,r=a.ref;return l.a.createElement(e,Object(n.a)({},f,((o={})["string"===typeof e?"ref":"innerRef"]=r,o),{className:E,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:O}))}))},t}(l.a.Component);v.propTypes=f,v.defaultProps={"aria-haspopup":!0,color:"secondary"},v.contextType=h.a,t.a=v},517:function(e,t,a){"use strict";var n=a(18),o=a(495),r=a(48),s=a(36),i=a(2),l=a.n(i),c=a(61),p=a.n(c),d=a(492),u=a.n(d),b=a(503),h=a(499),g=a(493),m={tag:g.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},f={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},E=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,s=t.cssModule,i=t.right,c=t.tag,p=t.flip,d=t.modifiers,h=t.persist,m=t.positionFixed,E=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),O=Object(g.m)(u()(a,"dropdown-menu",{"dropdown-menu-right":i,show:this.context.isOpen}),s),j=c;if(h||this.context.isOpen&&!this.context.inNavbar){var x=(v[this.context.direction]||"bottom")+"-"+(i?"end":"start"),N=p?d:Object(o.a)({},d,{},f),k=!!m;return l.a.createElement(b.b,{placement:x,modifiers:N,positionFixed:k},(function(t){var a=t.ref,o=t.style,r=t.placement;return l.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:o},E,{"aria-hidden":!e.context.isOpen,className:O,"x-placement":r}))}))}return l.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu"},E,{"aria-hidden":!this.context.isOpen,className:O,"x-placement":E.placement}))},t}(l.a.Component);E.propTypes=m,E.defaultProps={tag:"div",flip:!0},E.contextType=h.a,t.a=E},518:function(e,t,a){"use strict";var n=a(18),o=a(48),r=a(148),s=a(36),i=a(2),l=a.n(i),c=a(61),p=a.n(c),d=a(492),u=a.n(d),b=a(499),h=a(493),g={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:h.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(h.n)(this.props,["toggle"]),r=a.className,s=a.cssModule,i=a.divider,c=a.tag,p=a.header,d=a.active,b=Object(o.a)(a,["className","cssModule","divider","tag","header","active"]),g=Object(h.m)(u()(r,{disabled:b.disabled,"dropdown-item":!i&&!p,active:d,"dropdown-header":p,"dropdown-divider":i}),s);return"button"===c&&(p?c="h6":i?c="div":b.href&&(c="a")),l.a.createElement(c,Object(n.a)({type:"button"===c&&(b.onClick||this.props.toggle)?"button":void 0},b,{tabIndex:e,role:t,className:g,onClick:this.onClick}))},t}(l.a.Component);m.propTypes=g,m.defaultProps={tag:"button",toggle:!0},m.contextType=b.a,t.a=m},542:function(e,t,a){"use strict";var n,o=a(18),r=a(48),s=a(148),i=a(36),l=a(495),c=a(2),p=a.n(c),d=a(61),u=a.n(d),b=a(492),h=a.n(b),g=a(505),m=a(493),f=Object(l.a)({},g.Transition.propTypes,{isOpen:u.a.bool,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),tag:m.q,className:u.a.node,navbar:u.a.bool,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.func,u.a.string,u.a.object])}),v=Object(l.a)({},g.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:m.e.Collapse}),E=((n={})[m.d.ENTERING]="collapsing",n[m.d.ENTERED]="collapse show",n[m.d.EXITING]="collapsing",n[m.d.EXITED]="collapse",n);function O(e){return e.scrollHeight}var j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(s.a)(a))})),a}Object(i.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:O(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:O(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,s=t.className,i=t.navbar,c=t.cssModule,d=t.children,u=(t.innerRef,Object(r.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),b=this.state.height,f=Object(m.o)(u,m.c),v=Object(m.n)(u,m.c);return p.a.createElement(g.Transition,Object(o.a)({},f,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var r=function(e){return E[e]||"collapse"}(t),u=Object(m.m)(h()(s,r,i&&"navbar-collapse"),c),g=null===b?null:{height:b};return p.a.createElement(a,Object(o.a)({},v,{style:Object(l.a)({},v.style,{},g),className:u,ref:e.props.innerRef,"aria-expanded":n?"true":"false"}),d)}))},t}(c.Component);j.propTypes=f,j.defaultProps=v,t.a=j},563:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(495),o=a(18),r=a(148),s=a(36),i=a(2),l=a.n(i),c=a(61),p=a.n(c),d=a(515),u=a(493),b=["defaultOpen"],h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return l.a.createElement(d.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.n)(this.props,b)))},t}(i.Component);h.propTypes=Object(n.a)({defaultOpen:p.a.bool},d.a.propTypes)},774:function(e,t,a){"use strict";a.r(t);var n=a(149),o=a(150),r=a(152),s=a(151),i=a(148),l=a(153),c=a(2),p=a.n(c),d=a(500),u=a(502),b=a(501),h=a(18),g=a(48),m=a(61),f=a.n(m),v=a(492),E=a.n(v),O=a(493),j={light:f.a.bool,dark:f.a.bool,full:f.a.bool,fixed:f.a.string,sticky:f.a.string,color:f.a.string,role:f.a.string,tag:O.q,className:f.a.string,cssModule:f.a.object,expand:f.a.oneOfType([f.a.bool,f.a.string])},x=function(e){var t,a=e.expand,n=e.className,o=e.cssModule,r=e.light,s=e.dark,i=e.fixed,l=e.sticky,c=e.color,d=e.tag,u=Object(g.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),b=Object(O.m)(E()(n,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(a),((t={"navbar-light":r,"navbar-dark":s})["bg-"+c]=c,t["fixed-"+i]=i,t["sticky-"+l]=l,t)),o);return p.a.createElement(d,Object(h.a)({},u,{className:b}))};x.propTypes=j,x.defaultProps={tag:"nav",expand:!1};var N=x,k={tag:O.q,className:f.a.string,cssModule:f.a.object},y=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(g.a)(e,["className","cssModule","tag"]),r=Object(O.m)(E()(t,"navbar-brand"),a);return p.a.createElement(n,Object(h.a)({},o,{className:r}))};y.propTypes=k,y.defaultProps={tag:"a"};var C=y,T={tag:O.q,type:f.a.string,className:f.a.string,cssModule:f.a.object,children:f.a.node},M=function(e){var t=e.className,a=e.cssModule,n=e.children,o=e.tag,r=Object(g.a)(e,["className","cssModule","children","tag"]),s=Object(O.m)(E()(t,"navbar-toggler"),a);return p.a.createElement(o,Object(h.a)({"aria-label":"Toggle navigation"},r,{className:s}),n||p.a.createElement("span",{className:Object(O.m)("navbar-toggler-icon",a)}))};M.propTypes=T,M.defaultProps={tag:"button",type:"button"};var w=M,I=a(542),R=a(733),q=a(730),P=a(731),S=a(563),D=a(516),F=a(517),G=a(518),z=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).toggle=a.toggle.bind(Object(i.a)(a)),a.toggleNavbar=a.toggleNavbar.bind(Object(i.a)(a)),a.state={isOpen:!1,collapsed:!0},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(d.a,null,p.a.createElement(u.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Navbar"),p.a.createElement("div",{className:"card-header-actions"},p.a.createElement("a",{href:"https://reactstrap.github.io/components/navbar/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},p.a.createElement("small",{className:"text-muted"},"docs")))),p.a.createElement(b.a,null,p.a.createElement(N,{color:"info",light:!0,expand:"md"},p.a.createElement(C,{href:"/"},"Bootstrap"),p.a.createElement(w,{onClick:this.toggle}),p.a.createElement(I.a,{isOpen:this.state.isOpen,navbar:!0},p.a.createElement(R.a,{className:"ml-auto",navbar:!0},p.a.createElement(q.a,null,p.a.createElement(P.a,{href:"#/components/navbars"},"Components")),p.a.createElement(q.a,null,p.a.createElement(P.a,{href:"https://github.com/reactstrap/reactstrap",target:"_blank"},"Github")),p.a.createElement(S.a,{nav:!0,inNavbar:!0},p.a.createElement(D.a,{nav:!0,caret:!0},"Options"),p.a.createElement(F.a,null,p.a.createElement(G.a,null,"Option 1"),p.a.createElement(G.a,null,"Option 2"),p.a.createElement(G.a,{divider:!0}),p.a.createElement(G.a,null,"Reset")))))))),p.a.createElement(d.a,null,p.a.createElement(u.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Navbar Toggler")),p.a.createElement(b.a,null,p.a.createElement(N,{color:"success",light:!0},p.a.createElement(C,{href:"/",className:"mr-auto"},"Bootstrap"),p.a.createElement(w,{onClick:this.toggleNavbar,className:"mr-2"}),p.a.createElement(I.a,{isOpen:!this.state.collapsed,navbar:!0},p.a.createElement(R.a,{navbar:!0},p.a.createElement(q.a,null,p.a.createElement(P.a,{href:"#/components/navbars"},"Components")),p.a.createElement(q.a,null,p.a.createElement(P.a,{href:"https://github.com/reactstrap/reactstrap"},"Github"))))))))}}]),t}(c.Component);t.default=z}}]);
//# sourceMappingURL=27.b85b1929.chunk.js.map