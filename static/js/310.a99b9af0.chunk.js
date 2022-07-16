"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{4514:function(n,e,r){r.d(e,{Hx:function(){return m},Mc:function(){return l},Tg:function(){return d},qF:function(){return f},uV:function(){return h}});var t=r(5861),a=r(7757),i=r.n(a),u=r(2007),c=r.n(u),s=r(4569).default,o="https://api.themoviedb.org/3/",p="9c009c00402fb866baf05bd346a2d01d",d=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get(o+"trending/all/day?"+new URLSearchParams({api_key:p}));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get(o+"search/movie?"+new URLSearchParams({api_key:p,query:e,language:"en-US",page:1,include_adult:!1}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get(o+"movie/".concat(e,"?")+new URLSearchParams({api_key:p,language:"en-US"}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get(o+"movie/".concat(e,"/credits?")+new URLSearchParams({api_key:p,language:"en-US"}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get(o+"movie/".concat(e,"/reviews?")+new URLSearchParams({api_key:p,language:"en-US",page:1}));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();f.propTypes={query:c().string.isRequired},l.propTypes={id:c().string.isRequired},h.propTypes={id:c().string.isRequired},m.propTypes={id:c().string.isRequired}},4672:function(n,e,r){r.d(e,{Z:function(){return h}});var t,a,i=r(3504),u=r(6871),c=r(8259),s=r(168),o=r(6031),p=r(1578),d=(0,o.ZP)("ul")(t||(t=(0,s.Z)(["\n  list-style: none;\n  list-style-position: inside;\n  padding: 10px 20px;\n  font-size: ","px;\n  & li {\n    display: flex;\n    align-items: center;\n    padding: ","px;\n  }\n  & li:nth-child(odd) {\n    background: rgb(222, 208, 172);\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[2]})),f=(0,o.ZP)(p.hlg)(a||(a=(0,s.Z)(["\n  margin-right: 5px;\n"]))),l=r(184);function h(n){var e=n.moviesArr,r=(0,u.TH)();return(0,l.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.title,a=n.original_name,s=(0,u.Gn)(c.Z.movie,{movieId:e});return(0,l.jsxs)("li",{children:[(0,l.jsx)(f,{}),(0,l.jsx)(i.rU,{to:s,state:{from:r},children:t||a})]},e)}))})}},3310:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,a,i,u=r(5861),c=r(885),s=r(7757),o=r.n(s),p=r(2791),d=r(5705),f=r(3284),l=r(7692),h=r(168),m=r(6031),g=(0,m.ZP)(d.l0)(t||(t=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),v=(0,m.ZP)(d.gN)(a||(a=(0,h.Z)(["\n  width: 320px;\n  min-height: 25px;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: ","px;\n  background: rgb(216, 203, 149);\n"])),(function(n){return n.theme.space[3]})),x=(0,m.ZP)("button")(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  border: 0;\n  background: ",";\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.accent})),y=r(184),b=f.Ry().shape({search:f.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),w=function(n){var e=n.onSubmit;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(d.J9,{initialValues:{search:""},validationSchema:b,onSubmit:function(n,r){var t=r.resetForm,a=n.search;e(a),t()},children:(0,y.jsxs)(g,{children:[(0,y.jsx)(v,{type:"text",name:"search",placeholder:"search name"}),(0,y.jsx)(x,{type:"submit",children:(0,y.jsx)(l.Goc,{size:22,color:"white"})})]})})})},k=r(4514),Z=r(4672),S=r(7596);function _(){var n=(0,p.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],a=function(){var n=(0,u.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.qF)(e);case 3:if(0!==(r=n.sent).length){n.next=7;break}return S.Am.info("Movie with name: ".concat(e," not found!")),n.abrupt("return");case 7:t(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),S.Am.error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsx)(w,{onSubmit:a}),(0,y.jsx)(Z.Z,{moviesArr:r})]})}}}]);
//# sourceMappingURL=310.a99b9af0.chunk.js.map