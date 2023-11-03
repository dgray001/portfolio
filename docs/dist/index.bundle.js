/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={99:(t,e,i)=>{i.d(e,{Z:()=>a});var o=i(81),n=i.n(o),r=i(645),s=i.n(r)()(n());s.push([t.id,"body{--text-color: rgb(51, 255, 51);--font-size-title: calc(14px + 2.3vw);--font-size-largest: calc(12px + 1.8vw);--font-size-larger: calc(12px + 1.5vw);--font-size-large: calc(12px + 1vw);--font-size-medium: calc(12px + 0.5vw);--font-size-small: calc(10px + 0.45vw);--font-size-smaller: calc(8px + 0.4vw);background-color:#282828;color:var(--text-color);font-family:monospace;margin:0px;padding:0px}body.mobile{--font-size-title: calc(18px + 3vw);--font-size-largest: calc(17px + 2.5vw);--font-size-larger: calc(16px + 2vw);--font-size-large: calc(16px + 1.5vw);--font-size-medium: calc(14px + 1vw);--font-size-small: calc(12px + 0.75vw);--font-size-smaller: calc(10px + 0.5vw)}body ::-webkit-scrollbar{width:7px}body ::-webkit-scrollbar-track{background:rgba(0,0,0,0)}body ::-webkit-scrollbar-thumb{background:#7a5959;border:2px solid rgba(0,0,0,0);background-clip:padding-box;border-radius:7px}body ::-webkit-scrollbar-thumb:hover{background:#5c4646;border:none}body ::-webkit-scrollbar-thumb:active{background:#463535}",""]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",o=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),o&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),o&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,o,n,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function i(t){for(var i=-1,o=0;o<e.length;o++)if(e[o].identifier===t){i=o;break}return i}function o(t,o){for(var r={},s=[],a=0;a<t.length;a++){var c=t[a],l=o.base?c[0]+o.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var h=i(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var g=n(u,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function n(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,n){var r=o(t=t||[],n=n||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var a=i(r[s]);e[a].references--}for(var c=o(t,n),l=0;l<r.length;l++){var d=i(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:t=>{var e={};t.exports=function(t,i){var o=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,n&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0,(()=>{const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}}const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new r(i,t,o)},a=(i,o)=>{if(e)i.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,m=globalThis,f=m.trustedTypes,y=f?f.emptyScript:"",b=m.reactiveElementPolyfillSupport,v=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const r=o?.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,n){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(o?n:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,b?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.0.1");const k=globalThis,A=k.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,j="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,P="?"+E,C=`<${P}>`,z=document,N=()=>z.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,H=/>/g,I=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,q=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),G=B(1),W=(B(2),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),J=new WeakMap,K=z.createTreeWalker(z,129);function Z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":"",s=U;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(s.lastIndex=d,c=s.exec(i),null!==c);)d=s.lastIndex,s===U?"!--"===c[1]?s=M:void 0!==c[1]?s=H:void 0!==c[2]?(q.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=I):void 0!==c[3]&&(s=I):s===I?">"===c[0]?(s=n??U,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?I:'"'===c[3]?D:L):s===D||s===L?s=I:s===M||s===H?s=U:(s=I,n=void 0);const p=s===I&&t[e+1].startsWith("/>")?" ":"";r+=s===U?i+C:l>=0?(o.push(a),i.slice(0,l)+j+i.slice(l)+E+p):i+E+(-2===l?e:p)}return[Z(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class Y{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const s=t.length-1,a=this.parts,[c,l]=V(t,e);if(this.el=Y.createElement(c,i),K.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(j)){const e=l[r++],i=o.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?it:"?"===s[1]?ot:"@"===s[1]?nt:et}),o.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(q.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],N()),K.nextNode(),a.push({type:2,index:++n});o.append(t[e],N())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){if(e===W)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=O(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??z).importNode(e,!0);K.currentNode=o;let n=K.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new rt(n,this,t)),this._$AV.push(e),a=i[++s]}r!==a?.index&&(n=K.nextNode(),r++)}return K.currentNode=z,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),O(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Y(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new tt(this.k(N()),this.k(N()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=Q(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const o=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=Q(this,o[i+s],e,s),a===W&&(a=this._$AH[s]),r||=!O(a)||a!==this._$AH[s],a===F?t=F:t!==F&&(t+=(a??"")+n[s+1]),this._$AH[s]=a}r&&!o&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class nt extends et{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??F)===W)return;const i=this._$AH,o=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==F&&(i===F||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const st=k.litHtmlPolyfillSupport;st?.(Y,tt),(k.litHtmlVersions??=[]).push("3.0.1");class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new tt(e.insertBefore(N(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.1");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},dt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:w},pt=(t=dt,e,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];e.call(this,i),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return ht({...t,state:!0,attribute:!1})}function gt(t,e=300){const i=o=>{t()?o():setTimeout((()=>i(o)),e)};return new Promise(i)}function mt(t){return new Promise((e=>setTimeout(e,t)))}var ft,yt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},bt=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{c(o.next(t))}catch(t){r(t)}}function a(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))};!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.TYPING=1]="TYPING",t[t.FADE_IN=2]="FADE_IN"}(ft||(ft={}));let vt=class extends at{constructor(){super(...arguments),this.text="",this.animation_delay=0,this.animation_speed=50,this.animation_type=ft.TYPING,this.blink=!1,this.justify=!1,this.current_text="",this.wrapper=void 0}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});var e;return bt(this,void 0,void 0,(function*(){switch(t.connectedCallback.call(this),yield mt(this.animation_delay),this.animation_type=null!==(e=parseInt(this.animation_type.toString()))&&void 0!==e?e:ft.UNKNOWN,yield gt((()=>(this.wrapper=this.shadowRoot.querySelector("#wrapper"),!!this.wrapper))),this.justify&&this.wrapper.classList.add("justified"),this.animation_type){case ft.TYPING:setTimeout((()=>bt(this,void 0,void 0,(function*(){for(let t=0;t<=this.text.length;t++)yield mt(this.animation_speed),this.current_text=this.text.substring(0,t)+"_";this.blink?setInterval((()=>{this.current_text=this.blink?this.text:this.text+"_",this.blink=!this.blink}),600):setTimeout((()=>{this.current_text=this.text}),600)}))),1);break;case ft.FADE_IN:this.wrapper.classList.add("fade-in"),this.wrapper.style.transitionDuration=`${this.animation_speed.toString()}ms`,this.current_text=this.text,setTimeout((()=>{this.wrapper.classList.add("start")}),1);break;default:this.current_text=this.text}}))}render(){return G`
    <div id="wrapper">${this.current_text}</div>
    `}};vt.styles=s`
  #wrapper {
    &.justified {
      text-align: justify;
    }

    &.fade-in {
      opacity: 0%;
      position: relative;
      top: 3em;
      transition-property: none;

      &.start {
        opacity: 100%;
        top: 0;
        transition-property: opacity, top;
      }
    }
  }
  `,yt([ht({type:String})],vt.prototype,"text",void 0),yt([ht({type:Number})],vt.prototype,"animation_delay",void 0),yt([ht({type:Number})],vt.prototype,"animation_speed",void 0),yt([ht({type:ft})],vt.prototype,"animation_type",void 0),yt([ht({type:Boolean})],vt.prototype,"blink",void 0),yt([ht({type:Boolean})],vt.prototype,"justify",void 0),yt([ut({hasChanged:(t,e)=>t!==e})],vt.prototype,"current_text",void 0),yt([ut()],vt.prototype,"wrapper",void 0),vt=yt([lt("dwg-text-animation")],vt);var _t=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let wt=class extends at{constructor(){super(...arguments),this.href="",this.text="",this.src=50}render(){return G`
    <a href="${this.href}" target="_blank">
      <img id="img" draggable="false" alt="" src="/images/${this.src}.png">
      <span>${this.text}</span>
    </a>
    `}};wt.styles=s`
  a {
    align-items: center;
    color: rgb(51, 255, 255);
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5em;
    height: 2em;
    width: fit-content;

    &:link, :link {
      color: rgb(51, 255, 255);

      &:hover, :hover {
        color: rgb(120, 255, 255);
      }
    }

    &:visited, :visited {
      color: rgb(51, 180, 255);

      &:hover, :hover {
        color: rgb(100, 240, 255);
      }
    }

    &:active, :active {
      color: rgb(50, 140, 140) !important;
    }

    > #img {
      height: 1.6em;
      max-height: 1.6em;
      min-height: 1.6em;
    }

    span {
      line-height: 2em;
    }
  }
  `,_t([ht({type:String})],wt.prototype,"href",void 0),_t([ht({type:String})],wt.prototype,"text",void 0),_t([ht({type:String})],wt.prototype,"src",void 0),wt=_t([lt("dwg-link")],wt);var $t=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let xt=class extends at{constructor(){super(...arguments),this.name="Daniel Gray"}render(){return G`
    <div id="wrapper">
      <dwg-text-animation id="name" blink text="${this.name}"></dwg-text-animation>
      <div id="link-wrapper">
        <dwg-link text="Resume" src="resume" href="/files/resume.pdf"></dwg-link>
        <dwg-link text="LinkedIn" src="linkedin" href="https://www.linkedin.com/in/daniel-gray-8a6ba2108/"></dwg-link>
        <dwg-link text="GitHub" src="github" href="https://github.com/dgray001?tab=repositories"></dwg-link>
      </div>
    </div>
    `}};xt.styles=s`
  #wrapper {
    display: flex;
    flex-flow: row nowrap;
    height: calc(2 * var(--font-size-largest));
    margin: 0 auto;
    max-width: 1500px;

    > #name {
      display: block;
      font-size: var(--font-size-largest);
      line-height: calc(1.9 * var(--font-size-largest));
      margin-left: 1em;
    }

    > #link-wrapper {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      font-size: calc(0.4 * var(--font-size-largest));
      gap: 2em;
      margin-left: auto;
      margin-right: 2em;
    }
  }
  `,$t([ut()],xt.prototype,"name",void 0),xt=$t([lt("dwg-header")],xt);var kt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let At=class extends at{constructor(){super(...arguments),this.project="",this.project_data={title:"",description:"",link:"",technologies:[]}}connectedCallback(){switch(super.connectedCallback(),this.project){case"fiddlesticks":this.project_data={title:"Game Lobby",description:"\n          A web-based game lobby where users can chat, join rooms, and play\n          esoteric games. Can reconnect you to your room or game if the your\n          connection is lost.\n          ",link:"https://fiddlesticks.live",technologies:[{name:"Golang",type:"language"},{name:"Typescript",type:"language"},{name:"Gin",type:"framework"},{name:"PostgresQL",type:"database"},{name:"GCP",type:"tool"},{name:"Webpack",type:"tool"},{name:"Sass",type:"tool"}]};break;case"missio":this.project_data={title:"Missio Homepage",description:"\n          Helped make website (specifically I made the homepage) of a startup\n          given a design and animation descriptions.\n          ",link:"https://missio.ai",technologies:[{name:"Typescript",type:"language"},{name:"Next.JS",type:"framework"},{name:"Tailwind",type:"framework"},{name:"React",type:"tool"},{name:"Framer Motion",type:"tool"}]};break;case"lnz":this.project_data={title:"LNZ",description:"\n          Desktop RPG\n          ",link:"https://github.com/dgray001/lnz",technologies:[{name:"Java",type:"language"},{name:"JUnit",type:"framework"},{name:"Processing",type:"framework"},{name:"Maven",type:"tool"}]};break;case"cuf_site":this.project_data={title:"CUF Site",description:"\n          Made website for small non-profit run by a family friend using their\n          design. Work included working with the authorize.net and reCaptcha\n          APIs, user login and profile pages, an admin dashboard, a custom\n          testing library, and data caching all in vanilla JS without external\n          dependencies.\n          ",link:"https://dgray001.github.io/",technologies:[{name:"Javascript",type:"language"},{name:"PHP",type:"language"},{name:"MySQL",type:"database"},{name:"MS SQL Server",type:"database"},{name:"Apache Server",type:"tool"}]};break;case"calculator":this.project_data={title:"Exact Calculator",description:"\n          Command-line calculator returning exact results. Demonstrates\n          interpreter skills of (tokenize => parse => evaluate). Utilizes a\n          versatile AST so extending to further math functionality is\n          programmatically trivial.\n          ",link:"https://github.com/dgray001/calculator",technologies:[{name:"Golang",type:"language"},{name:"Interpreter",type:"tool"}]};break;case"thesis":this.project_data={title:'"Mercedes-Benz" Water',description:"\n          Undergraduate thesis project implementing a simple, 2D model of water\n          that mimics the unique thermodynamic characteristics of real water.\n          This model was characterized further than any published research had\n          gone and subsequently used to qualitatively simulate the thermodynamic\n          effects of macromolecular crowding.\n          ",link:"https://github.com/dgray001/MB/blob/master/thesis.pdf",technologies:[{name:"Java",type:"language"},{name:"Python",type:"language"},{name:"MatPlotLib",type:"tool"},{name:"Molecular Modeling",type:"tool"}]};break;case"tetris":this.project_data={title:"Tetris",description:"Simple implementation of a Tetris-like game in\n          Processing, with support for LAN multiplayer (2 players) and a\n          chatbox, using the Processing library and standard Java libraries.\n          ",link:"https://github.com/dgray001/Tetris",technologies:[{name:"Java",type:"language"},{name:"Processing",type:"framework"},{name:"JUnit",type:"framework"}]};break;case"rise_of_the_frogs":this.project_data={title:"Rise of the Frogs",description:"\n          Command-line RPG utilizing only the standard libraries of C++,\n          featuring 3D physics, several maps, and complex turn-based\n          combat. Gain sentience, escape the aquarium, and conquer the world!\n          ",link:"https://github.com/dgray001/RiseOfTheFrogs",technologies:[{name:"C++",type:"language"}]};break;case"rust_rise_of_the_frogs":this.project_data={title:"Rise of the Frogs (rust ed.)",description:"\n          Command-line RPG similar to the previous C++ version utilizing only\n          the standard library of Rust and select low-level crates. Rise from\n          the bottom of the food chain to develop your frog empire and conquer\n          the universe!\n          ",link:"https://github.com/dgray001/rise_of_the_frogs_rust",technologies:[{name:"Rust",type:"language"}]}}}render(){return G`
    <a id="wrapper" href="${this.project_data.link}" target="_blank">
      <div id="header">
        <span id="title">${this.project_data.title}</span>
        ${function*(t,e){if(void 0!==t){let e=0;for(const o of t)yield(i=o,e++,G`
        <span class="tech ${i.type}">${i.name}</span>
        `)}var i}(this.project_data.technologies)}
      </div>
      <div id="description">${this.project_data.description}</div>
    </a>
    `}};At.styles=s`
  #wrapper {
    background-color: rgba(50, 50, 70, 0.3);
    border: 1px solid rgba(120, 120, 120, 0.5);
    border-radius: 1em;
    box-sizing: border-box;
    color: var(--text-color);
    display: block;
    font-size: var(--font-size-medium);
    min-height: 8em;
    padding: 1.5em;
    text-decoration: none;
    user-select: none;
    width: 100%;

    &:hover {
      background-color: rgba(50, 50, 90, 0.4);
      cursor: pointer;
    }

    &:active {
      background-color: rgba(50, 50, 110, 0.5);
      cursor: pointer;
    }

    > #header {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5em;

      > #title {
        font-size: var(--font-size-medium);
        font-weight: bold;
        margin-right: 2em;
      }

      > .tech {
        background-color: rgb(70, 70, 70);
        border-radius: 0.6em;
        box-sizing: border-box;
        color: white;
        font-size: var(--font-size-small);
        padding: 0.3em 0.7em;

        &.language {
          background-color: rgb(90, 20, 20);
        }

        &.framework {
          background-color: rgb(90, 90, 20);
        }

        &.database {
          background-color: rgb(20, 20, 90);
        }

        &.tool {
          background-color: rgb(90, 20, 90);
        }
      }
    }

    > #description {
      font-size: var(--font-size-small);
      margin-top: 0.8em;
    }
  }
  `,kt([ht({type:String})],At.prototype,"project",void 0),kt([ut({hasChanged:(t,e)=>(null==t?void 0:t.title)!==(null==e?void 0:e.title)})],At.prototype,"project_data",void 0),At=kt([lt("dwg-project")],At);var St=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let jt=class extends at{constructor(){super(...arguments),this.title_text="“I'm not a great programmer; I'm a good programmer with great habits.” ~Kent Beck",this.body_text1="\n  I'm a full-stack engineer with a background in molecular modeling. I am\n  passionate about writing efficient, scalable code and cultivating\n  instantiations of best practices. I believe in collaboration more than rigid\n  processes. I find more value in working software than I do in documentation.\n  I will advocate for user feedback before guessing how software should be used.\n  Lastly, I embrace challenges as opportunities for growth and continuous\n  learning rather than lamenting the loss of a short-sighted plan.\n  ",this.body_text2="\n  In other words, I'm an agile developer who takes pride in my work.\n  ",this.agile_manifesto=void 0,this.content_section=void 0,this.project_data_fiddlesticks={title:"Game Lobby",description:"",link:"https://fiddlesticks.live",technologies:[{name:"Golang",type:"lang"}]}}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{c(o.next(t))}catch(t){r(t)}}function a(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){t.connectedCallback.call(this),yield mt(1200),yield gt((()=>(this.agile_manifesto=this.shadowRoot.querySelector("#hero-section dwg-link.body"),this.content_section=this.shadowRoot.querySelector("#content-section"),!!this.agile_manifesto&&!!this.content_section))),this.agile_manifesto.classList.add("show"),yield mt(900),this.content_section.classList.add("show")}))}render(){return G`
    <div id="hero-section">
      <dwg-text-animation
        id="title"
        animation_delay="400"
        animation_speed="1000"
        justify animation_type="${ft.FADE_IN}"
        text="${this.title_text}"
      ></dwg-text-animation>
      <dwg-text-animation
        class="body"
        animation_delay="700"
        animation_speed="1000"
        justify animation_type="${ft.FADE_IN}"
        text="${this.body_text1}"
      ></dwg-text-animation>
      <dwg-text-animation
        class="body"
        animation_delay="1000"
        animation_speed="1000"
        justify animation_type="${ft.FADE_IN}"
        text="${this.body_text2}"
      ></dwg-text-animation>
      <dwg-link
        class="body"
        href="https://agilemanifesto.org/"
        text="Agile Manifesto"
      ></dwg-link>
    </div>
    <div id="content-section">
      <div class="content-header">Project Highlights</div>
      <dwg-project project="fiddlesticks"></dwg-project>
      <dwg-project project="missio"></dwg-project>
      <dwg-project project="lnz"></dwg-project>
      <dwg-project project="cuf_site"></dwg-project>
      <div class="content-header">Additional Projects</div>
      <dwg-project project="calculator"></dwg-project>
      <dwg-project project="thesis"></dwg-project>
      <dwg-project project="tetris"></dwg-project>
      <dwg-project project="rise_of_the_frogs"></dwg-project>
      <dwg-project project="rust_rise_of_the_frogs"></dwg-project>
    </div>
    `}};jt.styles=s`
  #hero-section {
    max-width: 1000px;
    margin: 0 auto;

    > #title {
      display: block;
      font-size: var(--font-size-large);
    }
  
    > .body {
      display: block;
      font-size: var(--font-size-small);
      margin-top: 2.5rem;
    }

    > dwg-link {
      opacity: 0%;
      position: relative;
      top: 1.5em;
      transition-duration: 1s;
      transition-property: none;

      &.show {
        opacity: 100%;
        top: 0;
        transition-property: opacity, top;
      }
    }
  }

  #content-section {
    display: flex;
    flex-flow: column nowrap;
    font-size: var(--font-size-large);
    gap: 1em;
    margin: 3em auto;
    max-width: 1000px;
    opacity: 0%;
    position: relative;
    top: 3em;
    transition-duration: 1s;
    transition-property: none;

    &.show {
      opacity: 100%;
      top: 0;
      transition-property: opacity, top;
    }

    .content-header {
      margin-top: 3em;
    }
  }
  `,St([ut()],jt.prototype,"title_text",void 0),St([ut()],jt.prototype,"body_text1",void 0),St([ut()],jt.prototype,"body_text2",void 0),St([ut()],jt.prototype,"agile_manifesto",void 0),St([ut()],jt.prototype,"content_section",void 0),St([ut()],jt.prototype,"project_data_fiddlesticks",void 0),jt=St([lt("dwg-home")],jt);var Et,Pt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.HOME=1]="HOME"}(Et||(Et={}));let Ct=class extends at{constructor(){super(...arguments),this.page=Et.HOME,this.client_on_mobile=!1}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{c(o.next(t))}catch(t){r(t)}}function a(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){t.connectedCallback.call(this),this.client_on_mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substring(0,4)),this.client_on_mobile&&document.body.classList.add("mobile")}))}pageComponent(){return this.page===Et.HOME?G`<dwg-home></dwg-home>`:G`<p>404</p>`}render(){return G`
    <dwg-header></dwg-header>
    <div id="content">
      <div id="min-height-container">
        ${this.pageComponent()}
      </div>
    </div>
    `}};Ct.styles=s`
  dwg-header {
    box-shadow: 0px 2px 2px 2px rgb(200, 200, 200);
    display: block;
    margin-bottom: 6px;
  }

  #content {
    box-sizing: border-box;
    --height: calc(100vh - 3 * var(--font-size-largest));
    height: var(--height);
    max-height: var(--height);
    min-height: var(--height);
    overflow: auto;
    padding: calc(2 * var(--font-size-largest)) var(--font-size-largest) var(--font-size-largest);

    #min-height-container {
      min-height: calc(100vh - 1.9 * var(--font-size-largest));
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgb(122, 89, 89);
    border: 2px solid transparent;
    background-clip: padding-box;
    border-radius: 7px;
  
    &:hover {
      background: rgb(92, 70, 70);
      border: none;
    }
  
    &:active {
      background: rgb(70, 53, 53);
    }
  }
  `,Pt([ht({type:Et})],Ct.prototype,"page",void 0),Pt([ht({type:Boolean})],Ct.prototype,"client_on_mobile",void 0),Ct=Pt([lt("dwg-index-page")],Ct);var zt=i(379),Nt=i.n(zt),Ot=i(795),Tt=i.n(Ot),Rt=i(569),Ut=i.n(Rt),Mt=i(565),Ht=i.n(Mt),It=i(216),Lt=i.n(It),Dt=i(589),qt=i.n(Dt),Bt=i(99),Gt={};Gt.styleTagTransform=qt(),Gt.setAttributes=Ht(),Gt.insert=Ut().bind(null,"head"),Gt.domAPI=Tt(),Gt.insertStyleElement=Lt(),Nt()(Bt.Z,Gt),Bt.Z&&Bt.Z.locals&&Bt.Z.locals})()})();