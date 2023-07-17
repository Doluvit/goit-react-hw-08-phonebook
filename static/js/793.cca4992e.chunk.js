"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[793],{6793:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t=r(9434),o=r(8174),i=r(3634),a="NOT_FOUND";var c=function(n,e){return n===e};function u(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?c:t,i=r.maxSize,u=void 0===i?1:i,l=r.resultEqualityCheck,s=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),d=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:a},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return a}return{get:t,put:function(e,o){t(e)===a&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,s);function f(){var e=d.get(arguments);if(e===a){if(e=n.apply(null,arguments),l){var r=d.getEntries().find((function(n){return l(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return f.clearCache=function(){return d.clear()},f}function l(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];return function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},u=t.pop();if("object"===typeof u&&(c=u,u=t.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c.memoizeOptions,s=void 0===l?r:l,d=Array.isArray(s)?s:[s],f=function(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}(t),p=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(d)),x=n((function(){for(var n=[],e=f.length,r=0;r<e;r++)n.push(f[r].apply(null,arguments));return i=p.apply(null,n)}));return Object.assign(x,{resultFunc:u,memoizedResultFunc:p,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x}}var s,d,f,p,x,m,h,v,g,b,y,w,j,Z,k,C,P,S,z=l(u),B=function(n){return n.contacts.contacts.items},F=function(n){return n.contacts.isLoading},E=function(n){return n.contacts.error},A=z([B,function(n){return n.contacts.filters}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),_=r(168),I=r(1087),L=r(5867),N=L.ZP.div(s||(s=(0,_.Z)(["\npadding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border: 2px solid var(--textColor);\n"]))),O=L.ZP.h2(d||(d=(0,_.Z)(["\n  font-size: 30px;\n  color: var(--textColor);\n"]))),q=(L.ZP.nav(f||(f=(0,_.Z)(["\ndisplay: flex;\njustify-content: space-around;\n"]))),(0,L.ZP)(I.OL)(p||(p=(0,_.Z)(["\ntext-decoration: none;\nfont-size: 20px;\nfont-weight: 500;\n\n"]))),r(5705)),T=r(6727),R=(0,L.ZP)(q.l0)(x||(x=(0,_.Z)(["\n  margin-bottom: 20px;\n  padding: 20px;\n  width: 360px;\n  border: solid 2px transparent;\n  border-radius: 5px;\n  box-shadow: var(--mainBoxShadow);\n  background-color: #daecf0;\n"]))),D=L.ZP.div(m||(m=(0,_.Z)(["\n  margin-bottom: 30px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n"]))),J=L.ZP.label(h||(h=(0,_.Z)(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 24px;\n  color: var(--textColor);\n"]))),U=(0,L.ZP)(q.gN)(v||(v=(0,_.Z)(["\n  padding: 5px 10px;\n\n  font-size: 24px;\n  color: var(--textColor);\n\n  background-color: transparent;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  box-shadow: var(--insetBoxShadow);\n"]))),V=(0,L.ZP)(q.Bc)(g||(g=(0,_.Z)(["\n  margin-top: 7px;\n  color: red;\n"]))),$=L.ZP.button(b||(b=(0,_.Z)(["\n  display: flex;\n  padding: 10px 25px;\n  margin-left: auto;\n  margin-right: auto;\n\n  font-size: 18px;\n  font-weight: 600;\n  color: #e84a5f;\n\n  background-color: var(--itemBackgroundColor);\n  border-radius: 5px;\n  border: 2px solid #448585;\n  box-shadow: var(--mainBoxShadow);\n\n  cursor: pointer;\n\n  transition: all 250ms ease-in-out;\n\n  &:hover {\n    color: var(--accentTextColor);\n    background-color: var(--mainBackgroundColor);\n  }\n"]))),G=r(184),H=T.Ry().shape({name:T.Z_().required(),number:T.Z_().min(7).required()}),K={id:"",name:"",number:""},M=function(){var n=(0,t.I0)(),e=(0,t.v9)(B);return(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(q.J9,{initialValues:K,onSubmit:function(r,t){var a=t.resetForm;!function(r){e.find((function(n){return n.name===r.name}))?o.Am.error("".concat(r.name," is already in contacts.")):n((0,i.el)(r))}({name:r.name,number:r.number}),a()},validationSchema:H,children:(0,G.jsxs)(R,{autoComplete:"off",children:[(0,G.jsxs)(D,{children:[(0,G.jsx)(J,{htmlFor:"name",children:"Name:"}),(0,G.jsx)(U,{name:"name",type:"text",id:"name",maxLength:14,placeholder:"Example: John Snow"}),(0,G.jsx)(V,{name:"name",component:"div"})]}),(0,G.jsxs)(D,{children:[(0,G.jsx)(J,{htmlFor:"number",children:"Number:"}),(0,G.jsx)(U,{name:"number",type:"tel",id:"number",pattern:"^\\d{3}-\\d{3}-\\d{4}$",placeholder:"Example: 777-777-7777"}),(0,G.jsx)(V,{name:"number",component:"div"})]}),(0,G.jsx)($,{type:"submit",children:"Add contact"})]})})})},Q=r(9439),W=L.ZP.div(y||(y=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n"]))),X=L.ZP.label(w||(w=(0,_.Z)(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 24px;\n  color: var(--textColor);\n  text-shadow: var(--insetBoxShadow);\n"]))),Y=L.ZP.input(j||(j=(0,_.Z)(["\n  padding: 5px 10px;\n  background-color: #daecf0;\n  font-size: 24px;\n  color: var(--textColor);\n\n  border: 2px solid transparent;\n  border-radius: 5px;\n  box-shadow: var(--insetBoxShadow);\n"]))),nn=r(6563),en=r(2791),rn=function(){var n=(0,t.I0)(),e=(0,en.useState)(""),r=(0,Q.Z)(e,2),o=r[0],i=r[1];return(0,G.jsxs)(W,{children:[(0,G.jsx)(X,{htmlFor:"filter",children:"Find contacts by name"}),(0,G.jsx)(Y,{type:"text",id:"filter",name:"filter",value:o,onChange:function(e){var r=e.currentTarget.value;i(r),n((0,nn.T)(r))}})]})},tn=L.ZP.div(Z||(Z=(0,_.Z)(["\n  margin-top: 20px;\n"]))),on=L.ZP.ul(k||(k=(0,_.Z)(["\n  padding: 20px 20px 10px 20px;\n  margin: 0;\n  width: 380px;\n  border: solid 2px transparent;\n  border-radius: 5px;\n  box-shadow: var(--mainBoxShadow);\n  list-style: inside;\n  background-color: #daecf0;\n"]))),an=L.ZP.li(C||(C=(0,_.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),cn=L.ZP.p(P||(P=(0,_.Z)(["\n  margin: 0;\n  font-size: large;\n  font-weight: 500;\n  color: var(--textColor);\n"]))),un=L.ZP.button(S||(S=(0,_.Z)(["\n  display: flex;\n  font-size: 14px;\n  font-weight: 600;\n  color: #e84a5f;\n\n  background-color: var(--itemBackgroundColor);\n  border-radius: 5px;\n  border: 2px solid #448585;\n  box-shadow: var(--mainBoxShadow);\n\n  cursor: pointer;\n\n  transition: all 250ms ease-in-out;\n\n  &:hover {\n    color: var(--accentTextColor);\n    background-color: var(--mainBackgroundColor);\n  }\n"]))),ln=function(){var n=(0,t.I0)(),e=(0,t.v9)(F),r=(0,t.v9)(A);return(0,G.jsx)(tn,{children:!e&&(0,G.jsx)(on,{children:r.length>0?r.map((function(e){var r=e.id,t=e.name,o=e.number;return(0,G.jsxs)(an,{children:[(0,G.jsxs)(cn,{children:[t,": "]}),(0,G.jsx)(cn,{children:o}),(0,G.jsx)(un,{type:"button",id:r,onClick:function(){return function(e){n((0,i._f)(e))}(r)},children:"Delete"})]},r)})):(0,G.jsx)(cn,{children:"No contacts found."})})})},sn=function(){var n=(0,t.v9)(B),e=(0,t.v9)(F),r=(0,t.v9)(E),a=(0,t.I0)();return(0,en.useEffect)((function(){a((0,i.yF)())}),[a]),(0,G.jsxs)(N,{children:[(0,G.jsx)(o.Ix,{autoClose:2e3}),(0,G.jsx)(O,{children:"Phonebook"}),(0,G.jsx)(M,{}),(0,G.jsx)(O,{children:"Contacts"}),(0,G.jsx)(rn,{}),e&&(0,G.jsx)(cn,{children:"Loading contacts..."}),r&&(0,G.jsx)("p",{children:r}),n&&(0,G.jsx)(ln,{})]})}}}]);
//# sourceMappingURL=793.cca4992e.chunk.js.map