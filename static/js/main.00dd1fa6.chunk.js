(this.webpackJsonpsimpleinfo_todolist=this.webpackJsonpsimpleinfo_todolist||[]).push([[0],{64:function(n,t,e){"use strict";e.r(t);var o={};e.r(o),e.d(o,"get_todos",(function(){return J})),e.d(o,"add_todo",(function(){return X})),e.d(o,"update_todo",(function(){return Y})),e.d(o,"delete_todo",(function(){return H})),e.d(o,"set_loading",(function(){return K}));var i,r,a,c,s,d,l,u,p,b,h,f=e(0),x=e(15),m=e.n(x),g=e(5),j=e(7),O=e(31),y=e(35),k=e(20),v="get_todo",w="add_todo",_="delete_todo",B="update_todo",N="set_loading",z=[],P=function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return n=Object(k.a)(Object(k.a)({},t),{},{todos:e.payload}),e.payload;case w:var o=e.payload,i=o.id,r=o.content,a=o.is_done;return[].concat(Object(y.a)(t),[{id:i,content:r,is_done:a}]);case B:return(n=JSON.parse(JSON.stringify(t))).forEach((function(n){n.id===e.payload.id&&(n.content=e.payload.content,n.is_done=e.payload.is_done)})),n;case _:return n=t.filter((function(n){return n.id!==e.payload}));default:return t}},F=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===N?t.payload:n},C=Object(j.c)({todos:P,loading:F}),E=Object(j.d)(C,{},Object(j.a)(O.a)),q=e(6),S=e.n(q),R=e(11),L=e(12),T=e.n(L),D="https://todos.d.simpleinfo.tw/api",A={headers:{"api-key":"78bba90a-c22a-405e-a617-9abc07a9c3db"}},J=function(){return function(){var n=Object(R.a)(S.a.mark((function n(t){var e;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:N,payload:!0}),n.next=3,T.a.get("".concat(D,"/todos"),A);case 3:e=n.sent,t({type:v,payload:e.data}),t({type:N,payload:!1});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},X=function(n){var t={content:n,is_done:!1};return function(){var n=Object(R.a)(S.a.mark((function n(e){var o;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:N,payload:!0}),n.next=3,T.a.post("".concat(D,"/todos"),t,A);case 3:o=n.sent,e({type:w,payload:{id:o.data.id,content:o.data.content,is_done:!1}}),e({type:N,payload:!1});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Y=function(n){return function(){var t=Object(R.a)(S.a.mark((function t(e){var o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:N,payload:!0}),t.next=3,T.a.post("".concat(D,"/todos/").concat(n.id),n,A);case 3:o=t.sent,e({type:B,payload:{id:o.data.id,content:o.data.content,is_done:o.data.is_done}}),e({type:N,payload:!1});case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},H=function(n){return function(){var t=Object(R.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:N,payload:!0}),t.next=3,T.a.delete("".concat(D,"/todos/").concat(n),A);case 3:e({type:_,payload:n}),e({type:N,payload:!1});case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},K=function(n){return{type:N,payload:n}},M=function(){var n=Object(g.b)();return Object(j.b)(o,n)},G=e(2),I=e(3),Q=Object(G.b)(i||(i=Object(I.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap');\n    /* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Noto Sans TC', sans-serif;\n    background-color: ",";\n    margin: 0;\n    font-size: 20px;\n    overflow-x: hidden;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.bg})),U=G.c.div(r||(r=Object(I.a)(["\n  width: 1024px;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 40px;\n  padding-bottom: 200px;\n\n  @media(max-width: ",") {\n    width: 100vw;\n    padding: 40px 40px 208px 40px;\n  }\n\n  @media(max-width: ",") {\n    padding: 40px 24px 196px 24px;\n  }\n  \n"])),(function(n){return n.theme.breakPoints.tablet}),(function(n){return n.theme.breakPoints.tablet})),V=G.c.h1(a||(a=Object(I.a)(["\n  color: ",";\n  font-size: 64px;\n  line-height: 87px;\n  font-weight: bold;\n  margin-bottom: 40px;\n\n  @media(max-width: ",") {\n    font-size: 48px;\n    line-height: 64px;\n    margin-bottom: 24px;\n  }\n"])),(function(n){return n.theme.colors.title}),(function(n){return n.theme.breakPoints.mobile})),W=e(1),Z=function(){return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(V,{children:"Todos"})})},$=G.c.p(c||(c=Object(I.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  margin-bottom: 24px;\n\n  @media(max-width: ",") {\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.theme.colors.sectionLabel}),(function(n){return n.theme.breakPoints.mobile})),nn=function(n){var t=n.text,e=n.number;return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)($,{children:[t," (",e,")"]})})},tn=e(9),en=G.c.li(s||(s=Object(I.a)(["\n  display: flex;\n  max-width: 1024px;\n  min-height: 88px;\n  width: 100%;\n  position: relative;\n  border-radius: ",";\n  overflow: hidden;\n  box-shadow: 0px 4px 12px #00000026;\n  @media(max-width: ",") {\n    min-height: 70px;\n  }\n\n\n  .content,\n  .base {\n    min-height: 88px;\n    display: flex;\n    width: 100%;\n    min-height: 100%;\n    padding: 24px 40px 24px 24px;\n    border-radius: ",";\n\n    @media(max-width: ",") {\n      padding: 24px 24px 24px 16px;\n    }\n  }\n\n  .content {\n    position: relative;\n    width: 100%;\n    z-index: 3;\n    background: ",";\n    align-items: center;\n    transition: all 0.2s ease-in;\n\n    p {\n      width: 95%;\n      word-break: break-all;\n      line-height: 22px;\n    }\n  }\n\n  textarea {\n    display: none;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid #eee;\n    width: 100%;\n    background: transparent;\n    font-size: 20px;\n    line-height: 27px;\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  &.is--done {\n    box-shadow: none;\n\n    .mark {\n      opacity: 0.33;\n      &:after {\n        opacity: 1;\n      }\n    }\n\n    .content {\n      background: #DBDBDB;\n      color: #626262;\n    }\n  }\n\n  .text {\n    display: block;\n  }\n  textarea {\n    display: none;\n  }\n\n  &.is--editing {\n    .content {\n      width: calc(100% - 88px);\n\n      @media(max-width: ",") {\n        width: calc(100% - 64px);\n      }\n    }\n    .text {\n      display: none;\n    }\n    textarea {\n      display: block;\n    }\n  }\n\n  .mark {\n    flex-shrink: 0;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    border: 4px solid ",";\n    background: transparent;\n    margin-right: 24px;\n    position: relative;\n\n    @media(max-width: ",') {\n      margin-right: 16px;\n    }\n\n    &:hover {\n      &:after {\n        opacity: 0.33;\n      }\n    }\n\n    &:after {\n      content: "";\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      background: ',";\n      opacity: 0;\n      height: 24px;\n      width: 24px;\n      border-radius: 50%;\n    }\n  }\n\n  .base {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background-color: ",";\n  }\n  .deleteBtn {\n    font-size: 32px;\n    padding: 0;\n    margin-left: auto;\n    background-color: transparent;\n    color: ",";\n    border: none;\n  }\n"])),(function(n){return n.theme.itemRadius}),(function(n){return n.theme.breakPoints.mobile}),(function(n){return n.theme.itemRadius}),(function(n){return n.theme.breakPoints.mobile}),(function(n){return n.theme.colors.itemBg}),(function(n){return n.theme.breakPoints.mobile}),(function(n){return n.theme.colors.mark}),(function(n){return n.theme.breakPoints.mobile}),(function(n){return n.theme.colors.mark}),(function(n){return n.theme.colors.delete}),(function(n){return n.theme.colors.white})),on=function(n){var t=n.item,e=t.id,o=t.is_done,i=t.content,r=Object(f.useState)(!1),a=Object(tn.a)(r,2),c=a[0],s=a[1],d=Object(f.useState)(i),l=Object(tn.a)(d,2),u=l[0],p=l[1],b=M(),h=b.update_todo,x=b.delete_todo,m=Object(f.useRef)(),g=Object(f.useRef)(),j=Object(f.useRef)();Object(f.useEffect)((function(){var n=function(n){if(!m.current.contains(n.target)){s(!1);var t=g.current.value;t!==i&&h({id:e,content:t,is_done:o})}};return c&&document.body.addEventListener("click",n),function(){document.body.removeEventListener("click",n)}}),[c]);return Object(W.jsxs)(en,{ref:m,className:"todo-item ".concat(o?"is--done":""," ").concat(c?"is--editing":""),children:[Object(W.jsxs)("div",{className:"content",onClick:function(n){return function(n){j.current.contains(n.target)||(s(!0),window.setTimeout((function(){g.current.focus(),g.current.setSelectionRange(u.length,u.length)}),0))}(n)},children:[Object(W.jsx)("button",{ref:j,className:"mark",onClick:function(n){h({id:e,content:u,is_done:!o})}}),Object(W.jsx)("p",{className:"text",children:u}),Object(W.jsx)("textarea",{ref:g,onKeyPress:function(n){!function(n){13===n.charCode&&c&&(u!==i&&h({id:e,content:u,is_done:o}),s(!1))}(n)},value:u,onChange:function(n){return p(n.target.value)}})]}),Object(W.jsx)("div",{className:"base",children:Object(W.jsx)("button",{className:"deleteBtn",onClick:function(n){x(e)},children:Object(W.jsx)("i",{className:"fas fa-times"})})})]})},rn=G.c.ul(d||(d=Object(I.a)(["\n  min-height: 200px;\n  padding-bottom: 40px;\n  li {\n    margin-bottom: 24px;\n  }\n  li:last-of-type {\n    margin-bottom: 0;\n  }\n\n  @media(max-width: ",") {\n    li {\n      margin-bottom: 12px;\n    }\n  }\n"])),(function(n){return n.theme.breakPoints.mobile})),an=function(){var n=Object(g.c)((function(n){return n.todos.filter((function(n){return!1===n.is_done}))}));return Object(W.jsxs)("div",{children:[Object(W.jsx)(nn,{text:"\u672a\u5b8c\u6210\u5f85\u8fa6",number:n.length}),Object(W.jsx)(rn,{children:n.length?n.map((function(n){return Object(W.jsx)(on,{item:n},n.id)})):""})]})},cn=function(){var n=Object(g.c)((function(n){return n.todos.filter((function(n){return!0===n.is_done}))}));return Object(W.jsxs)("div",{children:[Object(W.jsx)(nn,{text:"\u5df2\u5b8c\u6210\u5f85\u8fa6",number:n.length}),Object(W.jsx)(rn,{children:n.length?n.map((function(n){return Object(W.jsx)(on,{item:n},n.id)})):""})]})},sn=G.c.div(l||(l=Object(I.a)(["\n  position: absolute;\n  bottom: 80px;\n  right: 0;\n  width: 100%;\n\n  @media(max-width: ",") {\n    width: calc(100% - 48px);\n    right: 24px;\n  }\n\n  .btn-group {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    right: 0;\n  }\n\n  .cancel,\n  .submit {\n    border-radius: 50%;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .cancel {\n    width: 64px;\n    height: 64px;\n    border: 4px solid #B1B1B1;\n    color: #B1B1B1;\n    font-size: 32px;\n    margin-right: 17px;\n  }\n\n  .submit {\n    height: 80px;\n    width: 80px;\n    color: #fff;\n    background: #80E894;\n    font-size: 40px;\n    box-shadow: 0px 4px 12px #0000004D;\n\n    @media(max-width: ",") {\n      height: 64px;\n      width: 64px;\n      font-size: 36px;\n    }\n  }\n"])),(function(n){return n.theme.breakPoints.tablet}),(function(n){return n.theme.breakPoints.mobile})),dn=G.c.button(u||(u=Object(I.a)(["\n  height: 80px;\n  width: 80px;\n  border: none;\n  background: ",";\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  right: 0;\n  box-shadow: 0px 4px 12px #0000004D;\n\n  @media(max-width: ",") {\n    height: 64px;\n    width: 64px;\n  }\n"])),(function(n){return n.theme.colors.mark}),(function(n){return n.theme.breakPoints.mobile})),ln=function(n){var t=n.onClick;return Object(W.jsx)(dn,{onClick:function(n){return t(n)},children:Object(W.jsx)("i",{className:"fas fa-plus"})})},un=G.c.div(p||(p=Object(I.a)(["\n  background: #fff;\n  width: 100%;\n  height: 88px;\n  display: flex;\n  align-items: center;\n  border-radius: ",";\n  padding: 24px;\n  margin-bottom: 40px;\n  box-shadow: 0px 4px 12px #00000026;\n  @media(max-width: ",") {\n      height: 72px;\n  }\n\n  .mark {\n    flex-shrink: 0;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    border: 4px solid ",";\n    background: transparent;\n    margin-right: 24px;\n    position: relative;\n\n    @media(max-width: ",') {\n      margin-right: 16px;\n    }\n\n    &:hover {\n      &:after {\n        opacity: 0.33;\n      }\n    }\n\n    &:after {\n      content: "";\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      background: ',";\n      opacity: 0;\n      height: 24px;\n      width: 24px;\n      border-radius: 50%;\n    }\n  }\n\n  textarea {\n    display: block;\n    resize: none;\n    border: none;\n    border-bottom: 2px solid #eee;\n    width: 100%;\n    background: transparent;\n    font-size: 20px;\n    line-height: 27px;\n    height: 28px;\n\n\n    @media(max-width: ",") {\n      height: 22px;\n    }\n\n    &:focus {\n      outline: none;\n    }\n  }\n"])),(function(n){return n.theme.itemRadius}),(function(n){return n.theme.breakPoints.tablet}),(function(n){return n.theme.colors.mark}),(function(n){return n.theme.breakPoints.tablet}),(function(n){return n.theme.colors.mark}),(function(n){return n.theme.breakPoints.mobile})),pn=function(n){var t=n.onChange,e=n.val;return Object(W.jsxs)(un,{children:[Object(W.jsx)("div",{className:"mark"}),Object(W.jsx)("textarea",{value:e,onChange:function(n){return t(n.target.value)}})]})},bn=function(){var n=Object(f.useState)(!1),t=Object(tn.a)(n,2),e=t[0],o=t[1],i=Object(f.useState)(""),r=Object(tn.a)(i,2),a=r[0],c=r[1],s=M().add_todo,d=function(){c(""),o(!1)},l=function(){s(a),d()};return Object(W.jsxs)(sn,{className:"add-todo",children:[e&&Object(W.jsx)("div",{children:Object(W.jsx)(pn,{onChange:c,val:a})}),e?Object(W.jsxs)("div",{className:"btn-group",children:[Object(W.jsx)("button",{className:"cancel",onClick:d,children:Object(W.jsx)("i",{className:"fas fa-times"})}),Object(W.jsx)("button",{className:"submit",onClick:l,children:Object(W.jsx)("i",{className:"fas fa-check"})})]}):Object(W.jsx)(ln,{onClick:function(){return o(!0)}})]})},hn=Object(G.d)(b||(b=Object(I.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n\n"]))),fn=G.c.div(h||(h=Object(I.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #eee;\n    height: 100vh;\n    width: 100vw;\n    z-index: 5;\n    opacity: 0;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &.is--loading {\n      opacity: 0.6;\n    }\n\n    #loading-spinner {\n      height: 80px;\n      width: 80px;\n      border: 8px solid ",";\n      border-right-color: transparent;\n      border-radius: 50%;\n      animation: "," 0.5s ease-in infinite;\n\n    }\n\n"])),(function(n){return n.theme.colors.delete}),hn),xn=function(){var n=Object(g.c)((function(n){return n.loading}));return Object(W.jsx)(fn,{className:n?"is--loading":"",children:Object(W.jsx)("div",{id:"loading-spinner"})})},mn={colors:{bg:"#EFEFEF",itemBg:"#FAFAFA",itemText:"#626262",sectionLabel:"#767676",closeBtn:"#B1B1B1",completeAddingBtn:"#80E894",mark:"#6969FF",delete:"#E36377",white:"#FFFFFF",title:"#4B4B4B"},itemRadius:"32px",breakPoints:{tablet:"1024px",mobile:"640px"}},gn=function(){var n=M().get_todos;return Object(f.useEffect)((function(){n()}),[n]),Object(W.jsxs)(G.a,{theme:mn,children:[Object(W.jsx)(Q,{}),Object(W.jsx)(xn,{}),Object(W.jsxs)(U,{children:[Object(W.jsx)(Z,{}),Object(W.jsx)(an,{}),Object(W.jsx)(cn,{}),Object(W.jsx)(bn,{})]})]})};m.a.render(Object(W.jsx)(g.a,{store:E,children:Object(W.jsx)(gn,{})}),document.querySelector("#root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.00dd1fa6.chunk.js.map