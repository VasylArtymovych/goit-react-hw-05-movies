"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t,a=r(168),u=r(5861),c=r(885),i=r(7757),s=r.n(i),p=r(2791),o=r(6871),f=r(6031),d=r(5667),h=r(7596),l=r(7603),g=r(7577),v=r(184);function m(){var e=(0,o.bx)(),n=(0,p.useState)(null),r=(0,c.Z)(n,2),t=r[0],a=r[1];return(0,p.useEffect)((function(){(0,u.Z)(s().mark((function n(){var r,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.uV)(e);case 3:r=n.sent,t=r.cast,a(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,h.Am)(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[e]),t&&d.NY.scrollMore(250),(0,v.jsx)(v.Fragment,{children:t&&(0,v.jsx)(x,{children:t.map((function(e){var n=e.cast_id,r=e.name,t=e.profile_path,a=e.character,u=t?"https://image.tmdb.org/t/p/w500"+t:g;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:u,alt:r,width:"55",height:"75"}),(0,v.jsx)("p",{children:r}),(0,v.jsxs)("p",{children:["Character: ",a]})]},n)}))})})}var x=(0,f.ZP)("ul")(t||(t=(0,a.Z)(["\n  list-style: none;\n  padding: 0px 20px 20px;\n  font-size: ","px;\n  & li {\n    padding: ","px;\n  }\n  & li:nth-child(odd) {\n    background: rgb(222, 208, 172);\n  }\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.space[2]}))},7603:function(e,n,r){r.d(n,{Hx:function(){return g},Mc:function(){return h},Tg:function(){return f},qF:function(){return d},uV:function(){return l}});var t=r(5861),a=r(7757),u=r.n(a),c=r(2007),i=r.n(c),s=r(4569).default,p="https://api.themoviedb.org/3/",o="9c009c00402fb866baf05bd346a2d01d",f=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(p+"trending/all/day?"+new URLSearchParams({api_key:o}));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(p+"search/movie?"+new URLSearchParams({api_key:o,query:n,language:"en-US",page:1,include_adult:!1}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(p+"movie/".concat(n,"?")+new URLSearchParams({api_key:o,language:"en-US"}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(p+"movie/".concat(n,"/credits?")+new URLSearchParams({api_key:o,language:"en-US"}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(p+"movie/".concat(n,"/reviews?")+new URLSearchParams({api_key:o,language:"en-US",page:1}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();d.propTypes={query:i().string.isRequired},h.propTypes={id:i().string.isRequired},l.propTypes={id:i().string.isRequired},g.propTypes={id:i().string.isRequired}},7577:function(e,n,r){e.exports=r.p+"static/media/default.2e01288c0c1a3f24d743.jpeg"}}]);
//# sourceMappingURL=247.45c5ebaf.chunk.js.map