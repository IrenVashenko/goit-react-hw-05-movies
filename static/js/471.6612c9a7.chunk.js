"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[471],{8471:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,u,c,s=e(885),i=e(9340),o=e(2791),p=e(168),f=e(6444),d=e(501),l=f.ZP.main(r||(r=(0,p.Z)(["\n    //max-width: 1145px;\n    margin: 0 auto;\n    padding: 0 16px;\n"]))),v=f.ZP.h2(a||(a=(0,p.Z)([""]))),h=f.ZP.ul(u||(u=(0,p.Z)(["\n    padding-left: 5px;\n"]))),m=(0,f.ZP)(d.OL)(c||(c=(0,p.Z)(["\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    border-radius: 4px;\n    text-decoration: none;\n"]))),x=e(7692),g=e(184),w=function(n){var t=n.results;return(0,g.jsxs)(l,{children:[(0,g.jsx)(v,{children:"Trending today"}),(0,g.jsx)(h,{children:t.map((function(n){var t=n.id,e=n.title;return(0,g.jsxs)(m,{to:"/movies/".concat(t),children:[(0,g.jsx)(x.mfX,{}),e]},t)}))})]})},b=function(){var n=(0,o.useState)(),t=(0,s.Z)(n,2),e=t[0],r=t[1];if((0,o.useEffect)((function(){(0,i.e7)().then(r)}),[]),e){var a=e.results;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(w,{results:a})})}}},9340:function(n,t,e){e.d(t,{Xi:function(){return p},bL:function(){return o},e7:function(){return i},y9:function(){return f},yJ:function(){return d}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";s().defaults.params={api_key:"2755fba3e929303148b2d926b9a7bf84"};var i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("/trending/movie/day");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("/movie/".concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=471.6612c9a7.chunk.js.map