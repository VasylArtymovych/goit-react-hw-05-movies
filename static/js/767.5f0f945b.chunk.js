"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[767],{6368:function(n,e,r){r.d(e,{Z:function(){return s}});var t,a=r(168),i=r(6871),u=r(3504),c=r(6031),o=r(184);function s(n){var e=n.moviesArr,r=(0,i.TH)();return(0,o.jsx)(p,{children:e.map((function(n){var e=n.id,t=n.title,a=n.original_name;return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:r},children:t||a})},e)}))})}var p=(0,c.ZP)("ul")(t||(t=(0,a.Z)(["\n  list-style-position: inside;\n  padding: 10px 20px;\n  font-size: ","px;\n  & li {\n    padding: ","px;\n  }\n  & li:nth-child(odd) {\n    background: rgb(222, 208, 172);\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[2]}))},7603:function(n,e,r){r.d(e,{Hx:function(){return m},Mc:function(){return h},Tg:function(){return d},qF:function(){return f},xc:function(){return l}});var t=r(5861),a=r(7757),i=r.n(a),u=r(2007),c=r.n(u),o=r(4569).default,s="https://api.themoviedb.org/3/",p="9c009c00402fb866baf05bd346a2d01d",d=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get(s+"trending/all/day?"+new URLSearchParams({api_key:p}));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get(s+"search/movie?"+new URLSearchParams({api_key:p,query:e,language:"en-US",page:1,include_adult:!1}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get(s+"movie/".concat(e,"?")+new URLSearchParams({api_key:p,language:"en-US"}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get(s+"movie/".concat(e,"/credits?")+new URLSearchParams({api_key:p,language:"en-US"}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get(s+"movie/".concat(e,"/reviews?")+new URLSearchParams({api_key:p,language:"en-US",page:1}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();f.propTypes={query:c().string.isRequired},h.propTypes={id:c().string.isRequired},l.propTypes={id:c().string.isRequired},m.propTypes={id:c().string.isRequired}},6767:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,a,i,u=r(5861),c=r(885),o=r(7757),s=r.n(o),p=r(2791),d=r(168),f=r(5705),h=r(3284),l=r(6031),m=r(719),g=r(184),v=h.Ry().shape({search:h.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),x=function(n){var e=n.onSubmit;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(f.J9,{initialValues:{search:""},validationSchema:v,onSubmit:function(n,r){var t=r.resetForm,a=n.search;e(a),t()},children:(0,g.jsxs)(b,{children:[(0,g.jsx)(y,{type:"text",name:"search",placeholder:"search name"}),(0,g.jsx)(w,{type:"submit",children:(0,g.jsx)(m.Goc,{size:22,color:"white"})})]})})})},b=(0,l.ZP)(f.l0)(t||(t=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),y=(0,l.ZP)(f.gN)(a||(a=(0,d.Z)(["\n  width: 320px;\n  min-height: 25px;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: ","px;\n  background: rgb(216, 203, 149);\n"])),(function(n){return n.theme.space[3]})),w=(0,l.ZP)("button")(i||(i=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  border: 0;\n  background: ",";\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.accent})),k=r(7603),Z=r(6368),S=r(7596);function _(){var n=(0,p.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=function(){var n=(0,u.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.qF)(e);case 3:if(0!==(r=n.sent).length){n.next=7;break}return S.Am.info("Movie with name: ".concat(e," not found!")),n.abrupt("return");case 7:t(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsxs)("div",{children:[(0,g.jsx)(x,{onSubmit:a}),(0,g.jsx)(Z.Z,{moviesArr:r})]})}}}]);
//# sourceMappingURL=767.5f0f945b.chunk.js.map