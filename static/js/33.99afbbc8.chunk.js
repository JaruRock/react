(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[33],{525:function(e,a,t){"use strict";var r=t(149),s=t(150),n=t(543),l=t.n(n),i="http://172.17.83.1:8901/api/v1/users",c=function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,[{key:"fetchUsers",value:function(){return console.log("fetchUsers"),l.a.get(i)}},{key:"fetchUserByFirstName",value:function(e){return console.log("fetchUserByFirstName = "+e),l.a.get(i+"/search/"+e)}},{key:"fetchUserById",value:function(e){return console.log("fetchUserById = "+e),l.a.get(i+"/"+e)}},{key:"deleteUser",value:function(e){return console.log("deleteUser = "+e),l.a.delete(i+"/"+e)}},{key:"addUser",value:function(e){return console.log("addUser = "+e),l.a.post(""+i,e)}},{key:"editUser",value:function(e){return console.log("editUser = "+e),l.a.put(i+"/"+e.id,e)}}]),e}();a.a=new c},530:function(e,a,t){"use strict";var r=t(18),s=t(48),n=t(2),l=t.n(n),i=t(61),c=t.n(i),o=t(492),u=t.n(o),d=t(493),m={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.q,responsiveTag:d.q,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},g=function(e){var a=e.className,t=e.cssModule,n=e.size,i=e.bordered,c=e.borderless,o=e.striped,m=e.dark,g=e.hover,b=e.responsive,f=e.tag,p=e.responsiveTag,h=e.innerRef,v=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(d.m)(u()(a,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!c&&"table-borderless",!!o&&"table-striped",!!m&&"table-dark",!!g&&"table-hover"),t),y=l.a.createElement(f,Object(r.a)({},v,{ref:h,className:E}));if(b){var N=Object(d.m)(!0===b?"table-responsive":"table-responsive-"+b,t);return l.a.createElement(p,{className:N},y)}return y};g.propTypes=m,g.defaultProps={tag:"table",responsiveTag:"div"},a.a=g},613:function(e,a,t){"use strict";var r=t(18),s=t(48),n=t(2),l=t.n(n),i=t(61),c=t.n(i),o=t(492),u=t.n(o),d=t(493),m={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:d.q,listTag:d.q,"aria-label":c.a.string},g=function(e){var a,t=e.className,n=e.listClassName,i=e.cssModule,c=e.size,o=e.tag,m=e.listTag,g=e["aria-label"],b=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(d.m)(u()(t),i),p=Object(d.m)(u()(n,"pagination",((a={})["pagination-"+c]=!!c,a)),i);return l.a.createElement(o,{className:f,"aria-label":g},l.a.createElement(m,Object(r.a)({},b,{className:p})))};g.propTypes=m,g.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=g},614:function(e,a,t){"use strict";var r=t(18),s=t(48),n=t(2),l=t.n(n),i=t(61),c=t.n(i),o=t(492),u=t.n(o),d=t(493),m={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:d.q},g=function(e){var a=e.active,t=e.className,n=e.cssModule,i=e.disabled,c=e.tag,o=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(d.m)(u()(t,"page-item",{active:a,disabled:i}),n);return l.a.createElement(c,Object(r.a)({},o,{className:m}))};g.propTypes=m,g.defaultProps={tag:"li"},a.a=g},615:function(e,a,t){"use strict";var r=t(18),s=t(48),n=t(2),l=t.n(n),i=t(61),c=t.n(i),o=t(492),u=t.n(o),d=t(493),m={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,first:c.a.bool,last:c.a.bool,tag:d.q},g=function(e){var a,t=e.className,n=e.cssModule,i=e.next,c=e.previous,o=e.first,m=e.last,g=e.tag,b=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=Object(d.m)(u()(t,"page-link"),n);c?a="Previous":i?a="Next":o?a="First":m&&(a="Last");var p,h=e["aria-label"]||a;c?p="\u2039":i?p="\u203a":o?p="\xab":m&&(p="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),b.href||"a"!==g||(g="button"),(c||i||o||m)&&(v=[l.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||p),l.a.createElement("span",{className:"sr-only",key:"sr"},h)]),l.a.createElement(g,Object(r.a)({},b,{className:f,"aria-label":h}),v)};g.propTypes=m,g.defaultProps={tag:"a"},a.a=g},772:function(e,a,t){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.r(a);var s=t(504),n=t(149),l=t(150),i=t(152),c=t(151),o=t(148),u=t(153),d=t(2),m=t.n(d),g=t(496),b=t(497),f=t(500),p=t(502),h=t(498),v=t(501),E=t(540),y=t(611),N=t(612),j=t(520),k=t(530),U=t(613),O=t(614),C=t(615),S=t(525),z=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(c.a)(a).call(this,e))).state={firstName:"",users:[],message:null,currentPage:0},t.deleteUser=t.deleteUser.bind(Object(o.a)(t)),t.editUser=t.editUser.bind(Object(o.a)(t)),t.addUser=t.addUser.bind(Object(o.a)(t)),t.reloadUserList=t.reloadUserList.bind(Object(o.a)(t)),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"handleClick",value:function(e,a){e.preventDefault(),this.setState({currentPage:a})}},{key:"componentDidMount",value:function(){this.reloadUserList()}},{key:"reloadUserList",value:function(){var e=this;S.a.fetchUsers().then((function(a){e.pageSize=10,e.pagesCount=Math.ceil(a.data.length/e.pageSize),console.log("res.data.result = "+a.data.length),e.setState({users:a.data})}))}},{key:"deleteUser",value:function(e){var a=this;S.a.deleteUser(e).then((function(t){a.setState({message:"User deleted successfully."}),a.setState({users:a.state.users.filter((function(a){return a.id!==e}))})}))}},{key:"editUser",value:function(e){window.localStorage.setItem("id",e),this.props.history.push("/base/edit-user")}},{key:"addUser",value:function(){window.localStorage.removeItem("id"),this.props.history.push("/base/add-user")}},{key:"handleChange",value:function(e){var a=this;this.setState(Object(s.a)({},e.target.name,e.target.value)),console.log("e.target.name = "+e.target.name),console.log("e.target.value = "+e.target.value),console.log("this.state.firstName = "+this.state.firstName),S.a.fetchUserByFirstName(e.target.value).then((function(e){a.pageSize=10,a.pagesCount=Math.ceil(e.data.length/a.pageSize),console.log("res.data.result = "+e.data.length),a.setState({users:e.data})}))}},{key:"render",value:function(){var e=this,a=this.state.currentPage;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(g.a,null,m.a.createElement(b.a,null,m.a.createElement(f.a,null,m.a.createElement(p.a,null,m.a.createElement(h.a,{color:"success",onClick:function(){return e.addUser()}},m.a.createElement("i",{className:"fa fa-align-justify"}),"\xa0Add User")),m.a.createElement(b.a,{xs:"12",sm:"9"},m.a.createElement(v.a,null,m.a.createElement(E.a,{action:"",method:"post",className:"form-horizontal"},m.a.createElement(y.a,{row:!0},m.a.createElement(N.a,{sm:"2",size:"sm",htmlFor:"input-small"},"User name"),m.a.createElement(b.a,{sm:"3"},m.a.createElement(j.a,{bsSize:"sm",type:"text",id:"firstName",name:"firstName",className:"input-sm",placeholder:"Search by first name",value:this.state.firstName,onChange:function(a){e.handleChange(a)}})))))),m.a.createElement(v.a,null,m.a.createElement(k.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"No."),m.a.createElement("th",null,"First Name"),m.a.createElement("th",null,"Last Name"),m.a.createElement("th",null,"User name"),m.a.createElement("th",null,"Age"),m.a.createElement("th",null,"Salary"),m.a.createElement("th",null))),m.a.createElement("tbody",null,this.state.users.slice(a*this.pageSize,(a+1)*this.pageSize).map((function(a){return m.a.createElement("tr",{key:a.id},m.a.createElement("td",null,a.id),m.a.createElement("td",null,a.firstName),m.a.createElement("td",null,a.lastName),m.a.createElement("td",null,a.userName),m.a.createElement("td",null,a.age),m.a.createElement("td",null,a.salary),m.a.createElement("td",null,m.a.createElement(h.a,{type:"submit",size:"sm",color:"primary",onClick:function(){return e.editUser(a.id)}},m.a.createElement("i",{className:"fa fa-ban"})," Edit"),m.a.createElement(h.a,{type:"reset",size:"sm",color:"danger",onClick:function(){return e.deleteUser(a.id)}},m.a.createElement("i",{className:"fa fa-dot-circle-o"})," Delete")))})))),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"pagination-wrapper"},m.a.createElement(U.a,{"aria-label":"Page navigation"},m.a.createElement(O.a,{disabled:a<=0},m.a.createElement(C.a,{onClick:function(t){return e.handleClick(t,a-1)},previous:!0,tag:"button",href:"#"},"Prev")),r(Array(this.pagesCount)).map((function(t,r){return m.a.createElement(O.a,{active:r===a,key:r},m.a.createElement(C.a,{onClick:function(a){return e.handleClick(a,r)},href:"#"},r+1))})),m.a.createElement(O.a,{disabled:a>=this.pagesCount-1},m.a.createElement(C.a,{onClick:function(t){return e.handleClick(t,a+1)},next:!0,tag:"button",href:"#"},"Next"))))))))))}}]),a}(d.Component);a.default=z}}]);
//# sourceMappingURL=33.99afbbc8.chunk.js.map