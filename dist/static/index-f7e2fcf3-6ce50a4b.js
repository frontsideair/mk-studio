import{s as h,B as x,r as c,g as d,W as j,j as o,c7 as v,aC as B,co as H,f as I,b1 as k,aD as C,bf as E}from"./sanity-9c537f26.js";import{useDeskTool as g}from"./index-b167003e-43feb701.js";import"./json-inspector-5edf6500.js";var u;function y(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function O(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=g();return!(n!=null&&n.length)&&!i?null:o(B,{actions:o(H,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(I,{as:k,"data-as":"a",icon:C,mode:"bleed"}),title:i})}const L=h(x)(u||(u=y([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=E();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function D(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[l,b]=c.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(O,{actionHandlers:l==null?void 0:l.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[v.isValidElementType(a)&&c.createElement(a,{...r,...P,ref:b,child:i,paneKey:n}),c.isValidElement(a)&&a]})]})}export{D as default};