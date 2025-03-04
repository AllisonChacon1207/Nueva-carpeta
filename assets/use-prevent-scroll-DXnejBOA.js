import{c as A,k as m,h as P,j as C,r as z,M as oe,i as Q,a8 as le,q as ne,u as U,a3 as R,o as X,x as ie,B as Y,d as h,S as v,a9 as re}from"./index-CLVhkrbX.js";import{a as K,c as se}from"./render-PkGwQSy4.js";import{i as ae,j as ue,k as $,l as ce,v as de,h as fe}from"./QBtn-BjOogBf2.js";const Te=A({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>P("div",{class:o.value},K(t.default))}}),N={dark:{type:Boolean,default:null}};function G(e,t){return m(()=>e.dark===null?t.dark.isActive:e.dark)}const Se=A({name:"QItem",props:{...N,...ae,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=C(),n=G(e,l),{hasLink:u,linkAttrs:s,linkClass:a,linkTag:d,navigateOnClick:T}=ue(),c=z(null),p=z(null),g=m(()=>e.clickable===!0||u.value===!0||e.tag==="label"),f=m(()=>e.disable!==!0&&g.value===!0),b=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=m(()=>e.insetLevel===void 0?null:{["padding"+(l.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function L(r){f.value===!0&&(p.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===c.value?p.value.focus():document.activeElement===p.value&&c.value.focus()),T(r))}function k(r){if(f.value===!0&&oe(r,[13,32])===!0){Q(r),r.qKeyEvent=!0;const W=new MouseEvent("click",r);W.qKeyEvent=!0,c.value.dispatchEvent(W)}o("keyup",r)}function i(){const r=se(t.default,[]);return f.value===!0&&r.unshift(P("div",{class:"q-focus-helper",tabindex:-1,ref:p})),r}return()=>{const r={ref:c,class:b.value,style:S.value,role:"listitem",onClick:L,onKeyup:k};return f.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,s.value)):g.value===!0&&(r["aria-disabled"]="true"),P(d.value,r,i())}}}),me=["ul","ol"],Le=A({name:"QList",props:{...N,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=C(),l=G(e,o.proxy.$q),n=m(()=>me.includes(e.tag)?null:"list"),u=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>P(e.tag,{class:u.value,role:n.value},K(t.default))}}),ke=[Element,String],ve=[null,document,document.body,document.scrollingElement,document.documentElement];function Ee(e,t){let o=ce(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ve.includes(o)?window:o}function J(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Z(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function ee(e,t,o=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=J(e);if(o<=0){n!==t&&M(e,t);return}requestAnimationFrame(u=>{const s=u-l,a=n+(t-n)/Math.max(s,o)*s;M(e,a),a!==t&&ee(e,t,o-s,u)})}function te(e,t,o=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=Z(e);if(o<=0){n!==t&&_(e,t);return}requestAnimationFrame(u=>{const s=u-l,a=n+(t-n)/Math.max(s,o)*s;_(e,a),a!==t&&te(e,t,o-s,u)})}function M(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function _(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function xe(e,t,o){if(o){ee(e,t,o);return}M(e,t)}function Pe(e,t,o){if(o){te(e,t,o);return}_(e,t)}let E;function Ce(){if(E!==void 0)return E;const e=document.createElement("p"),t=document.createElement("div");$(e,{width:"100%",height:"200px"}),$(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),E=o-l,E}function we(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function Ve(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),le.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function He(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Be(e,t,o){if(o<=t)return t;const l=o-t+1;let n=t+(e-t)%l;return n<t&&(n=l+n),n===0?0:n}function Me(){let e=null;const t=C();function o(){e!==null&&(clearTimeout(e),e=null)}return ne(o),U(o),{removeTimeout:o,registerTimeout(l,n){o(),de(t)===!1&&(e=setTimeout(()=>{e=null,l()},n))}}}function _e(e,t,o){let l;function n(){l!==void 0&&(R.remove(l),l=void 0)}return U(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){l={condition:()=>o.value===!0,handler:t},R.add(l)}}}const Ae={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},We=["beforeShow","show","beforeHide","hide"];function ze({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:n,processOnMount:u}){const s=C(),{props:a,emit:d,proxy:T}=s;let c;function p(i){e.value===!0?b(i):g(i)}function g(i){if(a.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!0),c=i,Y(()=>{c===i&&(c=void 0)})),(a.modelValue===null||r===!1)&&f(i)}function f(i){e.value!==!0&&(e.value=!0,d("beforeShow",i),l!==void 0?l(i):d("show",i))}function b(i){if(a.disable===!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!1),c=i,Y(()=>{c===i&&(c=void 0)})),(a.modelValue===null||r===!1)&&S(i)}function S(i){e.value!==!1&&(e.value=!1,d("beforeHide",i),n!==void 0?n(i):d("hide",i))}function L(i){a.disable===!0&&i===!0?a["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):i===!0!==e.value&&(i===!0?f:S)(c)}X(()=>a.modelValue,L),o!==void 0&&fe(s)===!0&&X(()=>T.$route.fullPath,()=>{o.value===!0&&e.value===!0&&b()}),u===!0&&ie(()=>{L(a.modelValue)});const k={show:g,hide:b,toggle:p};return Object.assign(T,k),k}let y=0,V,H,q,B=!1,O,j,D,w=null;function pe(e){he(e)&&Q(e)}function he(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=re(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=o||l?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const s=t[u];if(we(s,l))return l?n<0&&s.scrollTop===0?!0:n>0&&s.scrollTop+s.clientHeight===s.scrollHeight:n<0&&s.scrollLeft===0?!0:n>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function F(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function x(e){B!==!0&&(B=!0,requestAnimationFrame(()=>{B=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function I(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:n}=window.getComputedStyle(t);V=Z(window),H=J(window),O=t.style.left,j=t.style.top,D=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${H}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,h.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",x,v.passiveCapture),window.visualViewport.addEventListener("scroll",x,v.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",F,v.passiveCapture))}h.is.desktop===!0&&h.is.mac===!0&&window[`${e}EventListener`]("wheel",pe,v.notPassive),e==="remove"&&(h.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",x,v.passiveCapture),window.visualViewport.removeEventListener("scroll",x,v.passiveCapture)):window.removeEventListener("scroll",F,v.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=O,t.style.top=j,window.location.href===D&&window.scrollTo(V,H),q=void 0)}function ge(e){let t="add";if(e===!0){if(y++,w!==null){clearTimeout(w),w=null;return}if(y>1)return}else{if(y===0||(y--,y>0))return;if(t="remove",h.is.ios===!0&&h.is.nativeMobile===!0){w!==null&&clearTimeout(w),w=setTimeout(()=>{I(t),w=null},100);return}}I(t)}function Re(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ge(t))}}}export{Le as Q,G as a,He as b,Ve as c,Pe as d,Me as e,We as f,Ae as g,ze as h,_e as i,Re as j,Se as k,Te as l,ke as m,Ee as n,J as o,Z as p,Ce as q,Be as r,xe as s,N as u};
