(this.webpackJsonptestapps=this.webpackJsonptestapps||[]).push([[0],{17:function(e,t,n){},2:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),i=(n(17),n(8)),j=n(9),u=n(12),o=n(11),b=(n(2),n(0)),h=function(){return Object(b.jsx)("div",{className:"header_Div",children:Object(b.jsx)("h1",{className:"h1",children:"MyTestApp"})})},l=function(){return Object(b.jsx)("div",{className:"banner",children:Object(b.jsxs)("h2",{className:"h2",children:["watch",Object(b.jsx)("br",{})," something",Object(b.jsx)("br",{})," incredible."]})})},O=n(3),d=n(5),p=n.n(d),f=n(10),m=n(6),v=function(e){var t=e.Title,n=(e.Year,e.Poster);return Object(b.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"movie",children:Object(b.jsx)("span",{children:t})})},x=function(e){var t=e.catName,n=e.movies;return Object(b.jsxs)("div",{className:"movies-container",children:[Object(b.jsx)("div",{children:t}),Object(b.jsx)("div",{className:"movies",children:n.map((function(e){return Object(b.jsx)(v,Object(O.a)({},e))}))})]})},y=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("bat"),r=Object(m.a)(a,2),i=r[0],j=r[1],u=function(){fetch("http://www.omdbapi.com/?s=".concat(i,"&apikey=bf39529")).then(function(){var e=Object(f.a)(p.a.mark((function e(t){var n,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,t.json();case 3:c=e.sent,(a=c.Search).length>0&&a.forEach((function(e){e.Type in n?n[e.Type].movies.push(e):n[e.Type]={catName:e.Type,movies:[e]}})),s(Object.values(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(c.useEffect)((function(){u()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("p",{className:"searchText",children:"Search"}),Object(b.jsx)("input",{type:"text",className:"input",onChange:function(e){j(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&u()}(e)}}),Object(b.jsx)("div",{children:n.map((function(e){return Object(b.jsx)(x,Object(O.a)({},e))}))})]})})},g=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(l,{}),Object(b.jsx)(y,{})]})}}]),n}(c.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),N()}},[[20,1,2]]]);
//# sourceMappingURL=main.bb183c2e.chunk.js.map