"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{4514:function(e,n,r){r.d(n,{Hx:function(){return g},Mc:function(){return l},Tg:function(){return f},qF:function(){return d},uV:function(){return h}});var t=r(5861),a=r(7757),u=r.n(a),c=r(2007),s=r.n(c),i=r(4569).default,o="https://api.themoviedb.org/3/",p="9c009c00402fb866baf05bd346a2d01d",f=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(o+"trending/all/day?"+new URLSearchParams({api_key:p}));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(o+"search/movie?"+new URLSearchParams({api_key:p,query:n,language:"en-US",page:1,include_adult:!1}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(o+"movie/".concat(n,"?")+new URLSearchParams({api_key:p,language:"en-US"}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(o+"movie/".concat(n,"/credits?")+new URLSearchParams({api_key:p,language:"en-US"}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(o+"movie/".concat(n,"/reviews?")+new URLSearchParams({api_key:p,language:"en-US",page:1}));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();d.propTypes={query:s().string.isRequired},l.propTypes={id:s().string.isRequired},h.propTypes={id:s().string.isRequired},g.propTypes={id:s().string.isRequired}},4387:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t,a,u=r(5861),c=r(885),s=r(7757),i=r.n(s),o=r(2791),p=r(6871),f=r(5667),d=r(7596),l=r(4514),h=r(168),g=r(6031),v=(0,g.ZP)("ul")(t||(t=(0,h.Z)(["\n  list-style: none;\n  padding: 0px 20px 20px;\n  font-size: ","px;\n  & li {\n    padding: ","px;\n  }\n  & li:nth-child(odd) {\n    background: rgb(222, 208, 172);\n  }\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.space[2]})),x=(0,g.ZP)("p")(a||(a=(0,h.Z)(["\n  font-size: 34px;\n  text-align: center;\n  padding-bottom: 20px;\n  color: ",";\n"])),(function(e){return e.theme.colors.accent})),m=r(184);function w(){var e=(0,p.bx)(),n=(0,o.useState)(null),r=(0,c.Z)(n,2),t=r[0],a=r[1];return(0,o.useEffect)((function(){(0,u.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.Hx)(e);case 3:r=n.sent,a(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[e]),t&&f.NY.scrollMore(250),(0,m.jsx)(m.Fragment,{children:t&&(t.results.length>0?(0,m.jsx)(v,{children:t.results.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,m.jsxs)("li",{children:[(0,m.jsxs)("h2",{children:["Author: ",r]}),(0,m.jsxs)("p",{children:[" ",t]})]},n)}))}):(0,m.jsx)(x,{children:"No rewiews"}))})}}}]);
//# sourceMappingURL=387.a4e784bb.chunk.js.map