(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(5),a=c.n(s),i=(c(11),c(3)),o=c.n(i),j=c(6),u=c(4),d=c(0);function l(e){var t=e.movie,c=t.Poster,n=t.Title,r=t.Year;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{className:"movie-img",style:{backgroundImage:"url(".concat(c,")")},alt:""}),Object(d.jsxs)("div",{className:"movie-detail",children:[Object(d.jsx)("h4",{children:n}),Object(d.jsxs)("p",{children:["Year: ",r]})]})]})})}function b(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(u.a)(s,2),i=a[0],b=a[1],h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.omdbapi.com/?apikey=".concat("b6795cfd","&s=").concat(i),c={headers:{Accept:"application/json"}},e.next=4,fetch(t,c);case 4:return n=e.sent,e.next=7,n.json();case 7:if(s=e.sent,!s.Response){e.next=12;break}return e.next=12,r(s.Search);case 12:case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"input-fields",children:[Object(d.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)},placeholder:"Search for movies"}),Object(d.jsx)("button",{onClick:h,children:"Search"})]}),Object(d.jsx)("div",{className:"main",children:c.map((function(e){return Object(d.jsx)(l,{movie:e})}))})]})}var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.550204d3.chunk.js.map