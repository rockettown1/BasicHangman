(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{21:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var i,r,a,c,s,o,d,l,x,j,b,p,u,h=e(1),f=e.n(h),O=e(13),g=e.n(O),y=(e(21),e(2)),w=e(11),m=e(5),v=e(3),k=e(0),L=function(){return Object(k.jsxs)(E,{children:[Object(k.jsx)("h1",{children:"Let's play Hangman"}),Object(k.jsx)("p",{children:"Enter a letter..."})]})},E=v.a.div(i||(i=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    margin-bottom: 0;\n    color: white;\n  }\n"]))),S=function(t){var n=t.wrongLetters.length;return Object(k.jsx)(W,{"data-testid":"stickman",children:Object(k.jsxs)("svg",{children:[Object(k.jsx)("line",{x1:"60",y1:"20",x2:"140",y2:"20","data-testid":"stick"}),Object(k.jsx)("line",{x1:"140",y1:"20",x2:"140",y2:"50","data-testid":"stick"}),Object(k.jsx)("line",{x1:"60",y1:"20",x2:"60",y2:"230","data-testid":"stick"}),Object(k.jsx)("line",{x1:"20",y1:"230",x2:"100",y2:"230","data-testid":"stick"}),n>0&&Object(k.jsx)(C,{"data-testid":"head",cx:"140",cy:"70",r:"20"}),n>1&&Object(k.jsx)(z,{x1:"140",y1:"90",x2:"140",y2:"150","data-testid":"stick"}),n>2&&Object(k.jsx)(A,{x1:"140",y1:"120",x2:"120",y2:"100",side:"left","data-testid":"stick"}),n>3&&Object(k.jsx)(A,{x1:"140",y1:"120",x2:"160",y2:"100",side:"right","data-testid":"stick"}),n>4&&Object(k.jsx)(P,{"data-testid":"left-leg",x1:"140",y1:"150",x2:"120",y2:"180",side:"left"}),n>5&&Object(k.jsx)(P,{x1:"140",y1:"150",x2:"160",y2:"180",side:"right","data-testid":"stick"})]})})},W=v.a.div(r||(r=Object(y.a)(["\n  svg {\n    height: 250px;\n    width: 200px;\n    fill: transparent;\n    stroke: #fff;\n    stroke-width: 4px;\n    stroke-linecap: round;\n  }\n  @media screen and (max-width: 750px) {\n    display: flex;\n    justify-content: center;\n  }\n"]))),C=v.a.circle(a||(a=Object(y.a)([""]))),z=v.a.line(c||(c=Object(y.a)([""]))),A=v.a.line(s||(s=Object(y.a)([""]))),P=v.a.line(o||(o=Object(y.a)([""]))),Y=function(t){var n=t.wrongLetters;return Object(k.jsx)(J,{"data-testid":"wrongbox",children:Object(k.jsxs)(N,{children:[Object(k.jsx)("p",{children:"Wrong Letters"}),n.map((function(t,n){return Object(k.jsx)("span",{"data-testid":"wrong",children:t},n)})).reduce((function(t,n){return null===t?[n]:[t,", ",n]}),null)]})})},J=v.a.div(d||(d=Object(y.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: flex;\n  padding: 30px;\n  box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  flex-direction: column;\n  text-align: right;\n  p {\n    margin: 0 0 5px;\n  }\n  span {\n    font-size: 24px;\n  }\n  @media screen and (max-width: 750px) {\n    position: relative;\n    top: 0;\n    right: 0;\n  }\n"]))),N=v.a.div(l||(l=Object(y.a)([""]))),T=function(t){var n=t.selectedWord,e=t.correctLetters;return Object(k.jsx)(B,{"data-testid":"word",children:n.split("").map((function(t,n){return Object(k.jsx)("span",{"data-testid":"letter",children:e.includes(t)?t:""},n)}))})},B=v.a.div(x||(x=Object(y.a)(["\n  display: flex;\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  span {\n    border-bottom: 3px solid #2980b9;\n    display: inline-flex;\n    font-size: 30px;\n    align-items: center;\n    justify-content: center;\n    margin: 0 3px;\n    height: 50px;\n    width: 20px;\n  }\n  @media screen and (max-width: 750px) {\n    position: relative;\n    justify-content: center;\n    margin-bottom: 30px;\n  }\n"]))),H=function(t){var n=t.showNotification;return Object(k.jsx)(I,{"data-testid":"notif",show:n,children:Object(k.jsx)("p",{children:"You have already entered this letter"})})},I=v.a.div(j||(j=Object(y.a)(["\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10px 10px 0 0;\n  padding: 15px 20px;\n  position: absolute;\n  bottom: -50px;\n  transition: transform 0.3s ease-in-out;\n  transform: ",";\n  p {\n    margin: 0;\n  }\n"])),(function(t){return t.show?"translateY(-50px)":"translateY(0px)"})),M=function(t){t(!0),setTimeout((function(){t(!1)}),2e3)},U=function(t){var n=t.correctLetters,e=t.wrongLetters,i=t.selectedWord,r=t.setPlayable,a=t.playAgain,c="",s=!0;switch(function(t,n,e){var i="win";return e.split("").forEach((function(n){t.includes(n)||(i="")})),6===n.length&&(i="lose"),i}(n,e,i)){case"win":c="Congrats",s=!1;break;case"lose":c="Unfortunately, you lost!",s=!1}return Object(h.useEffect)((function(){return r(s)})),Object(k.jsx)(X,{show:""!==c,children:Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:c}),!s&&Object(k.jsxs)("h3",{children:["The word was"," ",Object(k.jsx)("span",{style:{color:"#272838"},children:i})]}),Object(k.jsx)("button",{onClick:a,children:"Play Again"})]})})},X=v.a.div(b||(b=Object(y.a)(["\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: ",";\n  align-items: center;\n  justify-content: center;\n\n  div {\n    background: #7d6b91;\n    color: white;\n    border-radius: 5px;\n    box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);\n    padding: 40px;\n    text-align: center;\n\n    button {\n      cursor: pointer;\n      background-color: #fff;\n      color: #272838;\n      border: 0;\n      margin-top: 20px;\n      padding: 12px 20px;\n      font-size: 16px;\n      &:active {\n        transform: scale(0.98);\n      }\n      &::focus {\n        outline: 0;\n      }\n    }\n  }\n"])),(function(t){return t.show?"flex":"none"})),q=e(10),D=e.n(q),F=D()();var G=function(){var t=Object(h.useState)(!0),n=Object(m.a)(t,2),e=n[0],i=n[1],r=Object(h.useState)([]),a=Object(m.a)(r,2),c=a[0],s=a[1],o=Object(h.useState)([]),d=Object(m.a)(o,2),l=d[0],x=d[1],j=Object(h.useState)(!1),b=Object(m.a)(j,2),p=b[0],u=b[1];return Object(h.useEffect)((function(){var t=function(t){var n=t.key,i=t.keyCode;if(e&&i>=65&&i<=90){var r=n.toLowerCase();F.includes(r)?c.includes(r)?M(u):s((function(t){return[].concat(Object(w.a)(t),[r])})):l.includes(r)?M(u):x((function(t){return[].concat(Object(w.a)(t),[r])}))}};return window.addEventListener("keyup",t),function(){return window.removeEventListener("keyup",t)}}),[c,l,e]),Object(k.jsxs)(K,{children:[Object(k.jsx)(L,{}),Object(k.jsxs)(Q,{children:[Object(k.jsx)(S,{wrongLetters:l}),Object(k.jsx)(T,{selectedWord:F,correctLetters:c}),Object(k.jsx)(Y,{wrongLetters:l})]}),Object(k.jsx)(U,{correctLetters:c,wrongLetters:l,selectedWord:F,setPlayable:i,playAgain:function(){i(!0),s([]),x([]),F=D()()}}),Object(k.jsx)(H,{showNotification:p})]})},K=v.a.div(p||(p=Object(y.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #272838;\n"]))),Q=v.a.div(u||(u=Object(y.a)(["\n  padding: 20px 30px;\n  position: relative;\n  height: 450px;\n  width: 650px;\n  @media screen and (max-width: 750px) {\n    width: 100vw;\n    height: auto;\n  }\n"])));g.a.render(Object(k.jsx)(f.a.StrictMode,{children:Object(k.jsx)(G,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.8a1f9d64.chunk.js.map