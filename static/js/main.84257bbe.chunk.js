(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{22:function(t,e,a){},23:function(t,e,a){"use strict";a.r(e);a(0);var c=a(4),n=a.n(c),o=a(9),r=a(2),s=a(8),i=a(10),l=a(1),u="CREATE",b="UPDATE",O="DELETE",d="FETCH_ALL",j="FETCH_POST",p="AUTH",h="LOGOUT",g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"START_LOADING":return Object(l.a)(Object(l.a)({},t),{},{isLoading:!0});case"END_LOADING":return Object(l.a)(Object(l.a)({},t),{},{isLoading:!1});case d:return Object(l.a)(Object(l.a)({},t),{},{posts:e.payload.data});case j:return Object(l.a)(Object(l.a)({},t),{},{post:e.payload.post});case u:return Object(l.a)(Object(l.a)({},t),{},{posts:[].concat(Object(i.a)(t.posts),[e.payload])});case b:return Object(l.a)(Object(l.a)({},t),{},{posts:t.posts.map((function(t){return t._id===e.payload._id?e.payload:t}))});case O:return Object(l.a)(Object(l.a)({},t),{},{posts:t.posts.filter((function(t){return t._id!==e.payload}))});default:return t}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return localStorage.setItem("profile",JSON.stringify(Object(l.a)({},null===e||void 0===e?void 0:e.data))),Object(l.a)(Object(l.a)({},t),{},{authData:e.data,loading:!1,errors:null});case h:return localStorage.clear(),Object(l.a)(Object(l.a)({},t),{},{authData:null,loading:!1,errors:null});default:return t}},v=Object(r.b)({posts:g,auth:f}),y=a(3),E=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("h2",{children:"About"})})},T=(a(22),Object(r.d)(v,{},Object(r.c)(Object(r.a)(s.a))));n.a.render(Object(y.jsx)(o.a,{store:T,children:Object(y.jsx)(E,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.84257bbe.chunk.js.map