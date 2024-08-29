import{r as ct,R as T,e as yt,_ as Te,b as Ie,c as _e,P as v,f as Me}from"./index-BT5q1uEO.js";function Re(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ct.useMemo(function(){return t.every(function(e){return e==null})?null:function(e){t.forEach(function(a){Le(a,e)})}},t)}function Le(t,n){if(t!=null)if(je(t))t(n);else try{t.current=n}catch{throw new Error('Cannot assign value "'.concat(n,'" to ref "').concat(t,'"'))}}function je(t){return!!(t&&{}.toString.call(t)=="[object Function]")}function De(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Gt(t,n){return Gt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,r){return a.__proto__=r,a},Gt(t,n)}function Fe(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,Gt(t,n)}var xn={disabled:!1},qn=T.createContext(null),ze=function(n){return n.scrollTop},ot="unmounted",X="exited",B="entering",Z="entered",Xt="exiting",D=function(t){Fe(n,t);function n(a,r){var i;i=t.call(this,a,r)||this;var o=r,s=o&&!o.isMounting?a.enter:a.appear,f;return i.appearStatus=null,a.in?s?(f=X,i.appearStatus=B):f=Z:a.unmountOnExit||a.mountOnEnter?f=ot:f=X,i.state={status:f},i.nextCallback=null,i}n.getDerivedStateFromProps=function(r,i){var o=r.in;return o&&i.status===ot?{status:X}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(r){var i=null;if(r!==this.props){var o=this.state.status;this.props.in?o!==B&&o!==Z&&(i=B):(o===B||o===Z)&&(i=Xt)}this.updateStatus(!1,i)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var r=this.props.timeout,i,o,s;return i=o=s=r,r!=null&&typeof r!="number"&&(i=r.exit,o=r.enter,s=r.appear!==void 0?r.appear:o),{exit:i,enter:o,appear:s}},e.updateStatus=function(r,i){if(r===void 0&&(r=!1),i!==null)if(this.cancelNextCallback(),i===B){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:yt.findDOMNode(this);o&&ze(o)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===X&&this.setState({status:ot})},e.performEnter=function(r){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:r,f=this.props.nodeRef?[s]:[yt.findDOMNode(this),s],c=f[0],l=f[1],m=this.getTimeouts(),p=s?m.appear:m.enter;if(!r&&!o||xn.disabled){this.safeSetState({status:Z},function(){i.props.onEntered(c)});return}this.props.onEnter(c,l),this.safeSetState({status:B},function(){i.props.onEntering(c,l),i.onTransitionEnd(p,function(){i.safeSetState({status:Z},function(){i.props.onEntered(c,l)})})})},e.performExit=function(){var r=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:yt.findDOMNode(this);if(!i||xn.disabled){this.safeSetState({status:X},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Xt},function(){r.props.onExiting(s),r.onTransitionEnd(o.exit,function(){r.safeSetState({status:X},function(){r.props.onExited(s)})})})},e.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(r,i){i=this.setNextCallback(i),this.setState(r,i)},e.setNextCallback=function(r){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,r(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},e.onTransitionEnd=function(r,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:yt.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=f[0],l=f[1];this.props.addEndListener(c,l)}r!=null&&setTimeout(this.nextCallback,r)},e.render=function(){var r=this.state.status;if(r===ot)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=De(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return T.createElement(qn.Provider,{value:null},typeof o=="function"?o(r,s):T.cloneElement(T.Children.only(o),s))},n}(T.Component);D.contextType=qn;D.propTypes={};function J(){}D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:J,onEntering:J,onEntered:J,onExit:J,onExiting:J,onExited:J};D.UNMOUNTED=ot;D.EXITED=X;D.ENTERING=B;D.ENTERED=Z;D.EXITING=Xt;var Kn=ct.forwardRef(function(t,n){var e=t.className,a=e===void 0?"modal-backdrop":e,r=t.visible,i=Te(t,["className","visible"]),o=ct.useRef(null),s=Re(n,o);return T.createElement(D,{in:r,mountOnEnter:!0,nodeRef:o,timeout:150,unmountOnExit:!0},function(f){return T.createElement("div",Ie({className:_e(a,"fade",{show:f==="entered"})},i,{ref:s}))})});Kn.propTypes={className:v.string,visible:v.bool};Kn.displayName="CBackdrop";var Ye=function(t){return t?typeof t=="function"?t():t:document.body},Qn=function(t){var n=t.children,e=t.container,a=t.portal,r=ct.useState(null),i=r[0],o=r[1];return ct.useEffect(function(){a&&o(Ye(e)||document.body)},[e,a]),typeof window<"u"&&a&&i?Me.createPortal(n,i):T.createElement(T.Fragment,null,n)};Qn.propTypes={children:v.node,container:v.any,portal:v.bool.isRequired};Qn.displayName="CConditionalPortal";function wn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?wn(Object(e),!0).forEach(function(a){A(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):wn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},It(t)}function $e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Ue(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function We(t,n,e){return n&&Ue(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function A(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function fn(t,n){return Ge(t)||Be(t,n)||Jn(t,n)||qe()}function bt(t){return He(t)||Xe(t)||Jn(t)||Ve()}function He(t){if(Array.isArray(t))return Bt(t)}function Ge(t){if(Array.isArray(t))return t}function Xe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Be(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Jn(t,n){if(t){if(typeof t=="string")return Bt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Bt(t,n)}}function Bt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var En=function(){},ln={},Zn={},te=null,ne={mark:En,measure:En};try{typeof window<"u"&&(ln=window),typeof document<"u"&&(Zn=document),typeof MutationObserver<"u"&&(te=MutationObserver),typeof performance<"u"&&(ne=performance)}catch{}var Ke=ln.navigator||{},An=Ke.userAgent,On=An===void 0?"":An,$=ln,h=Zn,Sn=te,kt=ne;$.document;var F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",ee=~On.indexOf("MSIE")||~On.indexOf("Trident/"),xt,wt,Et,At,Ot,R="___FONT_AWESOME___",Vt=16,ae="fa",re="svg-inline--fa",K="data-fa-i2svg",qt="data-fa-pseudo-element",Qe="data-fa-pseudo-element-pending",cn="data-prefix",un="data-icon",Pn="fontawesome-i2svg",Je="async",Ze=["HTML","HEAD","STYLE","SCRIPT"],ie=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",mn=[g,y];function gt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[g]}})}var ut=gt((xt={},A(xt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),A(xt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),xt)),mt=gt((wt={},A(wt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),A(wt,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wt)),dt=gt((Et={},A(Et,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),A(Et,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Et)),ta=gt((At={},A(At,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),A(At,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),At)),na=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,oe="fa-layers-text",ea=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,aa=gt((Ot={},A(Ot,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),A(Ot,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ot)),se=[1,2,3,4,5,6,7,8,9,10],ra=se.concat([11,12,13,14,15,16,17,18,19,20]),ia=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vt=new Set;Object.keys(mt[g]).map(vt.add.bind(vt));Object.keys(mt[y]).map(vt.add.bind(vt));var oa=[].concat(mn,bt(vt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(se.map(function(t){return"".concat(t,"x")})).concat(ra.map(function(t){return"w-".concat(t)})),ft=$.FontAwesomeConfig||{};function sa(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function fa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var la=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];la.forEach(function(t){var n=fn(t,2),e=n[0],a=n[1],r=fa(sa(e));r!=null&&(ft[a]=r)})}var fe={styleDefault:"solid",familyDefault:"classic",cssPrefix:ae,replacementClass:re,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ft.familyPrefix&&(ft.cssPrefix=ft.familyPrefix);var rt=u(u({},fe),ft);rt.autoReplaceSvg||(rt.observeMutations=!1);var d={};Object.keys(fe).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){rt[t]=e,lt.forEach(function(a){return a(d)})},get:function(){return rt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){rt.cssPrefix=n,lt.forEach(function(e){return e(d)})},get:function(){return rt.cssPrefix}});$.FontAwesomeConfig=d;var lt=[];function ca(t){return lt.push(t),function(){lt.splice(lt.indexOf(t),1)}}var Y=Vt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ua(t){if(!(!t||!F)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=h.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}}var ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pt(){for(var t=12,n="";t-- >0;)n+=ma[Math.random()*62|0];return n}function it(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function dn(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function le(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(le(t[e]),'" ')},"").trim()}function Lt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function vn(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function va(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function pa(t){var n=t.transform,e=t.width,a=e===void 0?Vt:e,r=t.height,i=r===void 0?Vt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&ee?f+="translate(".concat(n.x/Y-a/2,"em, ").concat(n.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/Y,"em), calc(-50% + ").concat(n.y/Y,"em)) "):f+="translate(".concat(n.x/Y,"em, ").concat(n.y/Y,"em) "),f+="scale(".concat(n.size/Y*(n.flipX?-1:1),", ").concat(n.size/Y*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ba=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ce(){var t=ae,n=re,e=d.cssPrefix,a=d.replacementClass,r=ba;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Cn=!1;function Yt(){d.autoAddCss&&!Cn&&(ua(ce()),Cn=!0)}var ga={mixout:function(){return{dom:{css:ce,insertCss:Yt}}},hooks:function(){return{beforeDOMElementCreation:function(){Yt()},beforeI2svg:function(){Yt()}}}},L=$||{};L[R]||(L[R]={});L[R].styles||(L[R].styles={});L[R].hooks||(L[R].hooks={});L[R].shims||(L[R].shims=[]);var I=L[R],ue=[],ha=function t(){h.removeEventListener("DOMContentLoaded",t),_t=1,ue.map(function(n){return n()})},_t=!1;F&&(_t=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),_t||h.addEventListener("DOMContentLoaded",ha));function ya(t){F&&(_t?setTimeout(t,0):ue.push(t))}function ht(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?le(t):"<".concat(n," ").concat(da(a),">").concat(i.map(ht).join(""),"</").concat(n,">")}function Nn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var $t=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=e,f,c,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function ka(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Kt(t){var n=ka(t);return n.length===1?n[0].toString(16):null}function xa(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Tn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Qt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Tn(n);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(t,Tn(n)):I.styles[t]=u(u({},I.styles[t]||{}),i),t==="fas"&&Qt("fa",n)}var St,Pt,Ct,tt=I.styles,wa=I.shims,Ea=(St={},A(St,g,Object.values(dt[g])),A(St,y,Object.values(dt[y])),St),pn=null,me={},de={},ve={},pe={},be={},Aa=(Pt={},A(Pt,g,Object.keys(ut[g])),A(Pt,y,Object.keys(ut[y])),Pt);function Oa(t){return~oa.indexOf(t)}function Sa(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Oa(r)?r:null}var ge=function(){var n=function(i){return $t(tt,function(o,s,f){return o[f]=$t(s,i,{}),o},{})};me=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),de=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),be=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in tt||d.autoFetchSvg,a=$t(wa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ve=a.names,pe=a.unicodes,pn=jt(d.styleDefault,{family:d.familyDefault})};ca(function(t){pn=jt(t.styleDefault,{family:d.familyDefault})});ge();function bn(t,n){return(me[t]||{})[n]}function Pa(t,n){return(de[t]||{})[n]}function q(t,n){return(be[t]||{})[n]}function he(t){return ve[t]||{prefix:null,iconName:null}}function Ca(t){var n=pe[t],e=bn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U(){return pn}var gn=function(){return{prefix:null,iconName:null,rest:[]}};function jt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?g:e,r=ut[a][t],i=mt[a][t]||mt[a][r],o=t in I.styles?t:null;return i||o||null}var In=(Ct={},A(Ct,g,Object.keys(dt[g])),A(Ct,y,Object.keys(dt[y])),Ct);function Dt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},A(n,g,"".concat(d.cssPrefix,"-").concat(g)),A(n,y,"".concat(d.cssPrefix,"-").concat(y)),n),o=null,s=g;(t.includes(i[g])||t.some(function(c){return In[g].includes(c)}))&&(s=g),(t.includes(i[y])||t.some(function(c){return In[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,l){var m=Sa(d.cssPrefix,l);if(tt[l]?(l=Ea[s].includes(l)?ta[s][l]:l,o=l,c.prefix=l):Aa[s].indexOf(l)>-1?(o=l,c.prefix=jt(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==i[g]&&l!==i[y]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var p=o==="fa"?he(c.iconName):{},b=q(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||b||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!tt.far&&tt.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},gn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(tt.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var Na=function(){function t(){$e(this,t),this.definitions={}}return We(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Qt(s,o[s]);var f=dt[g][s];f&&Qt(f,o[s]),ge()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[s][m]=c)}),e[s][f]=c}),e}}]),t}(),_n=[],nt={},at={},Ta=Object.keys(at);function Ia(t,n){var e=n.mixoutsTo;return _n=t,nt={},Object.keys(at).forEach(function(a){Ta.indexOf(a)===-1&&delete at[a]}),_n.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),It(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){nt[o]||(nt[o]=[]),nt[o].push(i[o])})}a.provides&&a.provides(at)}),e}function Jt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=nt[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function Q(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=nt[t]||[];r.forEach(function(i){i.apply(null,e)})}function j(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return at[t]?at[t].apply(null,n):void 0}function Zt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||U();if(n)return n=q(e,n)||n,Nn(ye.definitions,e,n)||Nn(I.styles,e,n)}var ye=new Na,_a=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Q("noAuto")},Ma={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(Q("beforeI2svg",n),j("pseudoElements2svg",n),j("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ya(function(){La({autoReplaceSvgRoot:e}),Q("watch",n)})}},Ra={icon:function(n){if(n===null)return null;if(It(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:q(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=jt(n[0]);return{prefix:a,iconName:q(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(na))){var r=Dt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=U();return{prefix:i,iconName:q(i,n)||n}}}},N={noAuto:_a,config:d,dom:Ma,parse:Ra,library:ye,findIconDefinition:Zt,toHtml:ht},La=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?h:e;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&N.dom.i2svg({node:a})};function Ft(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return ht(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ja(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(vn(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Lt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Da(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function hn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,p=t.watchable,b=p===void 0?!1:p,x=a.found?a:e,P=x.width,w=x.height,O=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(z){return m.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(m.classes).join(" "),E={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(w)})},C=O&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/w*16*.0625,"em")}:{};b&&(E.attributes[K]=""),f&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(l||pt())},children:[f]}),delete E.attributes.title);var S=u(u({},E),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},C),m.styles)}),H=a.found&&e.found?j("generateAbstractMask",S)||{children:[],attributes:{}}:j("generateAbstractIcon",S)||{children:[],attributes:{}},G=H.children,zt=H.attributes;return S.children=G,S.attributes=zt,s?Da(S):ja(S)}function Mn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[K]="");var l=u({},o.styles);vn(r)&&(l.transform=pa({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var m=Lt(l);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Fa(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Lt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Ut=I.styles;function tn(t){var n=t[0],e=t[1],a=t.slice(4),r=fn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var za={found:!1,width:512,height:512};function Ya(t,n){!ie&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function nn(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=U()),new Promise(function(a,r){if(j("missingIconAbstract"),e==="fa"){var i=he(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Ut[n]&&Ut[n][t]){var o=Ut[n][t];return a(tn(o))}Ya(t,n),a(u(u({},za),{},{icon:d.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}var Rn=function(){},en=d.measurePerformance&&kt&&kt.mark&&kt.measure?kt:{mark:Rn,measure:Rn},st='FA "6.5.2"',$a=function(n){return en.mark("".concat(st," ").concat(n," begins")),function(){return ke(n)}},ke=function(n){en.mark("".concat(st," ").concat(n," ends")),en.measure("".concat(st," ").concat(n),"".concat(st," ").concat(n," begins"),"".concat(st," ").concat(n," ends"))},yn={begin:$a,end:ke},Nt=function(){};function Ln(t){var n=t.getAttribute?t.getAttribute(K):null;return typeof n=="string"}function Ua(t){var n=t.getAttribute?t.getAttribute(cn):null,e=t.getAttribute?t.getAttribute(un):null;return n&&e}function Wa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ha(){if(d.autoReplaceSvg===!0)return Tt.replace;var t=Tt[d.autoReplaceSvg];return t||Tt.replace}function Ga(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Xa(t){return h.createElement(t)}function xe(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ga:Xa:e;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(xe(o,{ceFn:a}))}),r}function Ba(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Tt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(xe(r),e)}),e.getAttribute(K)===null&&d.keepOriginalSource){var a=h.createComment(Ba(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~dn(e).indexOf(d.replacementClass))return Tt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ht(s)}).join(`
`);e.setAttribute(K,""),e.innerHTML=o}};function jn(t){t()}function we(t,n){var e=typeof n=="function"?n:Nt;if(t.length===0)e();else{var a=jn;d.mutateApproach===Je&&(a=$.requestAnimationFrame||jn),a(function(){var r=Ha(),i=yn.begin("mutate");t.map(r),i(),e()})}}var kn=!1;function Ee(){kn=!0}function an(){kn=!1}var Mt=null;function Dn(t){if(Sn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?Nt:n,a=t.nodeCallback,r=a===void 0?Nt:a,i=t.pseudoElementsCallback,o=i===void 0?Nt:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Mt=new Sn(function(c){if(!kn){var l=U();it(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ln(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ln(m.target)&&~ia.indexOf(m.attributeName))if(m.attributeName==="class"&&Ua(m.target)){var p=Dt(dn(m.target)),b=p.prefix,x=p.iconName;m.target.setAttribute(cn,b||l),x&&m.target.setAttribute(un,x)}else Wa(m.target)&&r(m.target)})}}),F&&Mt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Va(){Mt&&Mt.disconnect()}function qa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ka(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Dt(dn(t));return r.prefix||(r.prefix=U()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Pa(r.prefix,t.innerText)||bn(r.prefix,Kt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Qa(t){var n=it(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||pt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ja(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ka(t),a=e.iconName,r=e.prefix,i=e.rest,o=Qa(t),s=Jt("parseNodeAttributes",{},t),f=n.styleParser?qa(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Za=I.styles;function Ae(t){var n=d.autoReplaceSvg==="nest"?Fn(t,{styleParser:!1}):Fn(t);return~n.extra.classes.indexOf(oe)?j("generateLayersText",t,n):j("generateSvgReplacementMutation",t,n)}var W=new Set;mn.map(function(t){W.add("fa-".concat(t))});Object.keys(ut[g]).map(W.add.bind(W));Object.keys(ut[y]).map(W.add.bind(W));W=bt(W);function zn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var e=h.documentElement.classList,a=function(m){return e.add("".concat(Pn,"-").concat(m))},r=function(m){return e.remove("".concat(Pn,"-").concat(m))},i=d.autoFetchSvg?W:mn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Za));i.includes("fa")||i.push("fa");var o=[".".concat(oe,":not([").concat(K,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=it(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=yn.begin("onTree"),c=s.reduce(function(l,m){try{var p=Ae(m);p&&l.push(p)}catch(b){ie||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(p){we(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(p){f(),m(p)})})}function tr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ae(t).then(function(e){e&&we([e],n)})}function nr(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Zt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Zt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var er=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?M:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,m=e.title,p=m===void 0?null:m,b=e.titleId,x=b===void 0?null:b,P=e.classes,w=P===void 0?[]:P,O=e.attributes,k=O===void 0?{}:O,E=e.styles,C=E===void 0?{}:E;if(n){var S=n.prefix,H=n.iconName,G=n.icon;return Ft(u({type:"icon"},n),function(){return Q("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(p?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||pt()):(k["aria-hidden"]="true",k.focusable="false")),hn({icons:{main:tn(G),mask:f?tn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:H,transform:u(u({},M),r),symbol:o,title:p,maskId:l,titleId:x,extra:{attributes:k,styles:C,classes:w}})})}},ar={mixout:function(){return{icon:nr(er)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=zn,e.nodeCallback=tr,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?h:a,i=e.callback,o=i===void 0?function(){}:i;return zn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,m=a.maskId,p=a.extra;return new Promise(function(b,x){Promise.all([nn(r,s),l.iconName?nn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var w=fn(P,2),O=w[0],k=w[1];b([e,hn({icons:{main:O,mask:k},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Lt(s);f.length>0&&(r.style=f);var c;return vn(o)&&(c=j("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},rr={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ft({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(bt(i)).join(" ")},children:o}]})}}}},ir={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,m=l===void 0?{}:l;return Ft({type:"counter",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),Fa({content:e.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(bt(s))}})})}}}},or={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,m=l===void 0?{}:l,p=a.styles,b=p===void 0?{}:p;return Ft({type:"text",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),Mn({content:e,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(bt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(ee){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Mn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},sr=new RegExp('"',"ug"),Yn=[1105920,1112319];function fr(t){var n=t.replace(sr,""),e=xa(n,0),a=e>=Yn[0]&&e<=Yn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Kt(r?n[0]:n),isSecondary:a||r}}function $n(t,n){var e="".concat(Qe).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=it(t.children),o=i.filter(function(G){return G.getAttribute(qt)===n})[0],s=$.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(ea),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?y:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?mt[p][f[2].toLowerCase()]:aa[p][c],x=fr(m),P=x.value,w=x.isSecondary,O=f[0].startsWith("FontAwesome"),k=bn(b,P),E=k;if(O){var C=Ca(P);C.iconName&&C.prefix&&(k=C.iconName,b=C.prefix)}if(k&&!w&&(!o||o.getAttribute(cn)!==b||o.getAttribute(un)!==E)){t.setAttribute(e,E),o&&t.removeChild(o);var S=Ja(),H=S.extra;H.attributes[qt]=n,nn(k,b).then(function(G){var zt=hn(u(u({},S),{},{icons:{main:G,mask:gn()},prefix:b,iconName:E,extra:H,watchable:!0})),z=h.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=zt.map(function(Ne){return ht(Ne)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function lr(t){return Promise.all([$n(t,"::before"),$n(t,"::after")])}function cr(t){return t.parentNode!==document.head&&!~Ze.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(qt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Un(t){if(F)return new Promise(function(n,e){var a=it(t.querySelectorAll("*")).filter(cr).map(lr),r=yn.begin("searchPseudoElements");Ee(),Promise.all(a).then(function(){r(),an(),n()}).catch(function(){r(),an(),e()})})}var ur={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Un,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?h:a;d.searchPseudoElements&&Un(r)}}},Wn=!1,mr={mixout:function(){return{dom:{unwatch:function(){Ee(),Wn=!0}}}},hooks:function(){return{bootstrap:function(){Dn(Jt("mutationObserverCallbacks",{}))},noAuto:function(){Va()},watch:function(e){var a=e.observeMutationsRoot;Wn?an():Dn(Jt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Hn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},dr={mixout:function(){return{parse:{transform:function(e){return Hn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Hn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Wt={x:0,y:0,width:"100%",height:"100%"};function Gn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function vr(t){return t.tag==="g"?t.children:[t]}var pr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Dt(r.split(" ").map(function(o){return o.trim()})):gn();return i.prefix||(i.prefix=U()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,l=i.icon,m=o.width,p=o.icon,b=va({transform:f,containerWidth:m,iconWidth:c}),x={tag:"rect",attributes:u(u({},Wt),{},{fill:"white"})},P=l.children?{children:l.children.map(Gn)}:{},w={tag:"g",attributes:u({},b.inner),children:[Gn(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},P))]},O={tag:"g",attributes:u({},b.outer),children:[w]},k="mask-".concat(s||pt()),E="clip-".concat(s||pt()),C={tag:"mask",attributes:u(u({},Wt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,O]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:vr(p)},C]};return a.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(k,")")},Wt)}),{children:a,attributes:r}}}},br={provides:function(n){var e=!1;$.matchMedia&&(e=$.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},gr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},hr=[ga,ar,rr,ir,or,ur,mr,dr,pr,br,gr];Ia(hr,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var rn=N.parse;N.findIconDefinition;N.toHtml;var yr=N.icon;N.layer;N.text;N.counter;function Xn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function _(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Xn(Object(e),!0).forEach(function(a){et(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Xn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Rt(t){"@babel/helpers - typeof";return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rt(t)}function et(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function kr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function xr(t,n){if(t==null)return{};var e=kr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function on(t){return wr(t)||Er(t)||Ar(t)||Or()}function wr(t){if(Array.isArray(t))return sn(t)}function Er(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ar(t,n){if(t){if(typeof t=="string")return sn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return sn(t,n)}}function sn(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sr(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,m=t.pulse,p=t.fixedWidth,b=t.inverse,x=t.border,P=t.listItem,w=t.flip,O=t.size,k=t.rotation,E=t.pull,C=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":p,"fa-inverse":b,"fa-border":x,"fa-li":P,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},et(n,"fa-".concat(O),typeof O<"u"&&O!==null),et(n,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),et(n,"fa-pull-".concat(E),typeof E<"u"&&E!==null),et(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(C).map(function(S){return C[S]?S:null}).filter(function(S){return S})}function Pr(t){return t=t-0,t===t}function Oe(t){return Pr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Cr=["style"];function Nr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Tr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Oe(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[Nr(r)]=i:n[r]=i,n},{})}function Se(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return Se(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,c){var l=n.attributes[c];switch(c){case"class":f.attrs.className=l,delete n.attributes.class;break;case"style":f.attrs.style=Tr(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[Oe(c)]=l}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=xr(e,Cr);return r.attrs.style=_(_({},r.attrs.style),o),t.apply(void 0,[n.tag,_(_({},r.attrs),s)].concat(on(a)))}var Pe=!1;try{Pe=!0}catch{}function Ir(){if(!Pe&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Bn(t){if(t&&Rt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(rn.icon)return rn.icon(t);if(t===null)return null;if(t&&Rt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ht(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?et({},t,n):{}}var Vn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ce=T.forwardRef(function(t,n){var e=_(_({},Vn),t),a=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,f=e.titleId,c=e.maskId,l=Bn(a),m=Ht("classes",[].concat(on(Sr(e)),on((o||"").split(" ")))),p=Ht("transform",typeof e.transform=="string"?rn.transform(e.transform):e.transform),b=Ht("mask",Bn(r)),x=yr(l,_(_(_(_({},m),p),b),{},{symbol:i,title:s,titleId:f,maskId:c}));if(!x)return Ir("Could not find icon",l),null;var P=x.abstract,w={ref:n};return Object.keys(e).forEach(function(O){Vn.hasOwnProperty(O)||(w[O]=e[O])}),_r(P[0],w)});Ce.displayName="FontAwesomeIcon";Ce.propTypes={beat:v.bool,border:v.bool,beatFade:v.bool,bounce:v.bool,className:v.string,fade:v.bool,flash:v.bool,mask:v.oneOfType([v.object,v.array,v.string]),maskId:v.string,fixedWidth:v.bool,inverse:v.bool,flip:v.oneOf([!0,!1,"horizontal","vertical","both"]),icon:v.oneOfType([v.object,v.array,v.string]),listItem:v.bool,pull:v.oneOf(["right","left"]),pulse:v.bool,rotation:v.oneOf([0,90,180,270]),shake:v.bool,size:v.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:v.bool,spinPulse:v.bool,spinReverse:v.bool,symbol:v.oneOfType([v.bool,v.string]),title:v.string,titleId:v.string,transform:v.oneOfType([v.string,v.object]),swapOpacity:v.bool};var _r=Se.bind(null,T.createElement);export{Qn as C,Ce as F,D as T,Kn as a,Re as u};
