"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{4514:function(e,n,t){t.d(n,{Hx:function(){return h},Mc:function(){return l},Tg:function(){return f},qF:function(){return d},uV:function(){return g}});var r=t(5861),a=t(7757),u=t.n(a),s=t(2007),c=t.n(s),i=t(4569).default,p="https://api.themoviedb.org/3/",o="9c009c00402fb866baf05bd346a2d01d",f=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,i.get(p+"trending/all/day?"+new URLSearchParams({api_key:o,page:n}));case 3:return t=e.sent,r=t.data,e.abrupt("return",{results:r.results,page:r.page,totalPages:r.total_pages});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,i.get(p+"search/movie?"+new URLSearchParams({api_key:o,query:n,language:"en-US",page:t,include_adult:!1}));case 3:return r=e.sent,a=r.data,e.abrupt("return",{results:a.results,page:a.page,totalPages:a.total_pages});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(p+"movie/".concat(n,"?")+new URLSearchParams({api_key:o,language:"en-US"}));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(p+"movie/".concat(n,"/credits?")+new URLSearchParams({api_key:o,language:"en-US"}));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(p+"movie/".concat(n,"/reviews?")+new URLSearchParams({api_key:o,language:"en-US",page:1}));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();d.propTypes={query:c().string.isRequired},l.propTypes={id:c().string.isRequired},g.propTypes={id:c().string.isRequired},h.propTypes={id:c().string.isRequired}},9736:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a=t(5861),u=t(885),s=t(7757),c=t.n(s),i=t(2791),p=t(6871),o=t(5667),f=t(7596),d=t(4514),l=t(7577),g=t(168),h=(0,t(6031).ZP)("ul")(r||(r=(0,g.Z)(["\n  list-style: none;\n  padding: 0px 20px 20px;\n  font-size: ","px;\n  & li {\n    padding: ","px;\n  }\n  & li:nth-child(odd) {\n    background: rgb(222, 208, 172);\n  }\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.space[2]})),v=t(184);function m(){var e=(0,p.bx)(),n=(0,i.useState)(null),t=(0,u.Z)(n,2),r=t[0],s=t[1];return(0,i.useEffect)((function(){(0,a.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.uV)(e);case 3:t=n.sent,r=t.cast,s(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,f.Am)(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[e]),r&&o.NY.scrollMore(250),(0,v.jsx)(v.Fragment,{children:r&&(0,v.jsx)(h,{children:r.map((function(e){var n=e.cast_id,t=e.name,r=e.profile_path,a=e.character,u=r?"https://image.tmdb.org/t/p/w500"+r:l;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:u,alt:t,width:"55",height:"75"}),(0,v.jsx)("p",{children:t}),(0,v.jsxs)("p",{children:["Character: ",a]})]},n)}))})})}},7577:function(e,n,t){e.exports=t.p+"static/media/default.2e01288c0c1a3f24d743.jpeg"}}]);
//# sourceMappingURL=736.6260bef0.chunk.js.map