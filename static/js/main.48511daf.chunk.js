(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__3AB_q",modal:"ErrorModal_modal__1MCYs",header:"ErrorModal_header__MAFZr",content:"ErrorModal_content__3MsCR",actions:"ErrorModal_actions__30SzZ"}},,,,,,function(e,t,n){e.exports={card:"Card_card__2AvqM"}},function(e,t,n){e.exports={button:"Button_button__S7pO5"}},function(e,t,n){e.exports={input:"AddUser_input__206MP"}},function(e,t,n){e.exports={users:"UsersList_users__3bVM3"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(3),s=n.n(a),o=(n(17),n(12)),i=n(6),l=function(e){return e.children},u=n(8),d=n.n(u),j=n(0),m=function(e){return Object(j.jsx)("div",{className:"".concat(d.a.card," ").concat(e.className),children:e.children})},b=n(9),h=n.n(b),O=function(e){return Object(j.jsx)("button",{className:h.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},f=n(10),x=n.n(f),p=n(2),_=n.n(p),g=function(e){return Object(j.jsx)("div",{className:_.a.backdrop,onClick:e.onConfirm})},v=function(e){return Object(j.jsxs)(m,{className:_.a.modal,children:[Object(j.jsx)("header",{className:_.a.header,children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsx)("div",{className:_.a.content,children:Object(j.jsx)("p",{children:e.message})}),Object(j.jsx)("footer",{className:_.a.actions,children:Object(j.jsx)(O,{onClick:e.onConfirm,children:"Okay"})})]})},C=function(e){return Object(j.jsxs)(c.a.Fragment,{children:[s.a.createPortal(Object(j.jsx)(g,{onConfirm:e.onConfirm}),document.getElementById("backdrop-root")),s.a.createPortal(Object(j.jsx)(v,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root"))]})},y=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(),a=Object(i.a)(c,2),s=a[0],o=a[1];return Object(j.jsxs)(l,{children:[s&&Object(j.jsx)(C,{title:s.title,message:s.message,onConfirm:function(){o(null)}}),Object(j.jsx)(m,{className:x.a.input,children:Object(j.jsxs)("form",{onSubmit:function(r){r.preventDefault();var c=t.current.value,a=n.current.value;0!==c.trim().length&&0!==a.trim().length?+a<1?o({title:"Invalid age",message:"Please enter a valid age (> 0)."}):(e.onAddUser(c,a),t.current.value="",n.current.value=""):o({title:"Invalid input",message:"Please enter a valid name and age (non-empty values)."})},children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{id:"username",type:"text",ref:t}),Object(j.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(j.jsx)("input",{id:"age",type:"number",ref:n}),Object(j.jsx)(O,{type:"submit",children:"Add User"})]})})]})},M=n(11),k=n.n(M),N=function(e){return Object(j.jsx)(m,{className:k.a.users,children:Object(j.jsx)("ul",{children:e.users.map((function(e){return Object(j.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var A=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(y,{onAddUser:function(e,t){c((function(n){return[].concat(Object(o.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(j.jsx)(N,{users:n})]})};s.a.render(Object(j.jsx)(A,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.48511daf.chunk.js.map