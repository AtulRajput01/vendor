import{r as n,_ as m,R as i,b,c as u,P as s}from"./index-BT5q1uEO.js";import{b as f}from"./CModalBody-BJn2mG3C.js";var c=n.forwardRef(function(e,t){var r=e.className,o=e.dark,a=e.disabled,l=e.white,d=m(e,["className","dark","disabled","white"]);return i.createElement("button",b({type:"button",className:u("btn","btn-close",{"btn-close-white":l},a,r),"aria-label":"Close",disabled:a},o&&{"data-coreui-theme":"dark"},d,{ref:t}))});c.propTypes={className:s.string,dark:s.bool,disabled:s.bool,white:s.bool};c.displayName="CCloseButton";var p=n.forwardRef(function(e,t){var r=e.children,o=e.className,a=e.closeButton,l=a===void 0?!0:a,d=m(e,["children","className","closeButton"]),N=n.useContext(f).setVisible;return i.createElement("div",b({className:u("modal-header",o)},d,{ref:t}),r,l&&i.createElement(c,{onClick:function(){return N(!1)}}))});p.propTypes={children:s.node,className:s.string,closeButton:s.bool};p.displayName="CModalHeader";export{p as C};
