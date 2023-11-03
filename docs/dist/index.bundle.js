/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={99:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(81),s=i.n(n),o=i(645),r=i.n(o)()(s());r.push([t.id,"body{--font-size-title: calc(14px + 2.3vw);--font-size-largest: calc(12px + 1.8vw);--font-size-larger: calc(12px + 1.5vw);--font-size-large: calc(12px + 1vw);--font-size-medium: calc(12px + 0.5vw);--font-size-small: calc(10px + 0.45vw);--font-size-smaller: calc(8px + 0.4vw);background-color:#282828;color:#3f3;font-family:monospace;margin:0px;padding:0px}body.mobile{--font-size-title: calc(18px + 3vw);--font-size-largest: calc(17px + 2.5vw);--font-size-larger: calc(16px + 2vw);--font-size-large: calc(16px + 1.5vw);--font-size-medium: calc(14px + 1vw);--font-size-small: calc(12px + 0.75vw);--font-size-smaller: calc(10px + 0.5vw)}",""]);const a=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);n&&r[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),i&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=i):h[2]=i),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var o={},r=[],a=0;a<t.length;a++){var c=t[a],l=n.base?c[0]+n.base:c[0],h=o[l]||0,p="".concat(l," ").concat(h);o[l]=h+1;var d=i(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var f=s(u,n);n.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function s(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,s){var o=n(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var a=i(o[r]);e[a].references--}for(var c=n(t,s),l=0;l<o.length;l++){var h=i(o[l]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=c}}},569:t=>{var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var s=void 0!==i.layer;s&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,s&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0,(()=>{const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(i,t,n)},a=(i,n)=>{if(e)i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of n){const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,m=globalThis,g=m.trustedTypes,y=g?g.emptyScript:"",v=m.reactiveElementPolyfillSupport,_=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&h(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const o=n?.call(this);s.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=n,this[n]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(n?s:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,v?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.0.1");const A=globalThis,E=A.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,P="?"+C,N=`<${P}>`,O=document,T=()=>O.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,j="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,H=/>/g,I=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),W=q(1),F=(q(2),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),V=new WeakMap,Z=O.createTreeWalker(O,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===R?"!--"===c[1]?r=M:void 0!==c[1]?r=H:void 0!==c[2]?(B.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=I):void 0!==c[3]&&(r=I):r===I?">"===c[0]?(r=s??R,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?I:'"'===c[3]?L:D):r===L||r===D?r=I:r===M||r===H?r=R:(r=I,s=void 0);const p=r===I&&t[e+1].startsWith("/>")?" ":"";o+=r===R?i+N:l>=0?(n.push(a),i.slice(0,l)+S+i.slice(l)+C+p):i+C+(-2===l?e:p)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class J{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[c,l]=Y(t,e);if(this.el=J.createElement(c,i),Z.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=Z.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=l[o++],i=n.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?nt:"@"===r[1]?st:et}),n.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:s}),n.removeAttribute(t));if(B.test(n.tagName)){const t=n.textContent.split(C),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),Z.nextNode(),a.push({type:2,index:++s});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===P)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(C,t+1));)a.push({type:7,index:s}),t+=C.length-1}s++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,n){if(e===F)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=z(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=Q(t,s._$AS(t,e.values),s,n)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??O).importNode(e,!0);Z.currentNode=n;let s=Z.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new ot(s,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(s=Z.nextNode(),o++)}return Z.currentNode=O,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),z(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new X(n,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new tt(this.k(T()),this.k(T()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=Q(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=Q(this,n[i+r],e,r),a===F&&(a=this._$AH[r]),o||=!z(a)||a!==this._$AH[r],a===K?t=K:t!==K&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class nt extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class st extends et{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??K)===F)return;const i=this._$AH,n=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==K&&(i===K||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=A.litHtmlPolyfillSupport;rt?.(J,tt),(A.litHtmlVersions??=[]).push("3.0.1");class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new tt(e.insertBefore(T(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.1");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},pt=(t=ht,e,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t)},init(e){return void 0!==e&&this.C(n,void 0,t),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t)}}throw Error("Unsupported decorator location: "+n)};function dt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return dt({...t,state:!0,attribute:!1})}function ft(t,e=300){const i=n=>{t()?n():setTimeout((()=>i(n)),e)};return new Promise(i)}function mt(t){return new Promise((e=>setTimeout(e,t)))}var gt,yt=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r},vt=function(t,e,i,n){return new(i||(i=Promise))((function(s,o){function r(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}c((n=n.apply(t,e||[])).next())}))};!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.TYPING=1]="TYPING",t[t.FADE_IN=2]="FADE_IN"}(gt||(gt={}));let _t=class extends at{constructor(){super(...arguments),this.text="",this.animation_delay=0,this.animation_speed=50,this.animation_type=gt.TYPING,this.blink=!1,this.justify=!1,this.current_text="",this.wrapper=void 0}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});var e;return vt(this,void 0,void 0,(function*(){switch(t.connectedCallback.call(this),yield mt(this.animation_delay),this.animation_type=null!==(e=parseInt(this.animation_type.toString()))&&void 0!==e?e:gt.UNKNOWN,yield ft((()=>(this.wrapper=this.shadowRoot.querySelector("#wrapper"),!!this.wrapper))),this.justify&&this.wrapper.classList.add("justified"),this.animation_type){case gt.TYPING:setTimeout((()=>vt(this,void 0,void 0,(function*(){for(let t=0;t<=this.text.length;t++)yield mt(this.animation_speed),this.current_text=this.text.substring(0,t)+"_";this.blink?setInterval((()=>{this.current_text=this.blink?this.text:this.text+"_",this.blink=!this.blink}),600):setTimeout((()=>{this.current_text=this.text}),600)}))),1);break;case gt.FADE_IN:this.wrapper.classList.add("fade-in"),this.wrapper.style.transitionDuration=`${this.animation_speed.toString()}ms`,this.current_text=this.text,setTimeout((()=>{this.wrapper.classList.add("start")}),1);break;default:this.current_text=this.text}}))}render(){return W`
    <div id="wrapper">${this.current_text}</div>
    `}};_t.styles=r`
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
  `,yt([dt({type:String})],_t.prototype,"text",void 0),yt([dt({type:Number})],_t.prototype,"animation_delay",void 0),yt([dt({type:Number})],_t.prototype,"animation_speed",void 0),yt([dt({type:gt})],_t.prototype,"animation_type",void 0),yt([dt({type:Boolean})],_t.prototype,"blink",void 0),yt([dt({type:Boolean})],_t.prototype,"justify",void 0),yt([ut({hasChanged:(t,e)=>t!==e})],_t.prototype,"current_text",void 0),yt([ut()],_t.prototype,"wrapper",void 0),_t=yt([lt("dwg-text-animation")],_t);var bt=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let $t=class extends at{constructor(){super(...arguments),this.href="",this.text="",this.src=50}render(){return W`
    <a href="${this.href}" target="_blank">
      <img draggable="false" alt="" src="/images/${this.src}.png">
      <span>${this.text}</span>
    </a>
    `}};$t.styles=r`
  a {
    align-items: center;
    color: rgb(51, 255, 255);
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5em;
    height: 2em;

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

    img {
      height: 1.6em;
    }

    span {
      line-height: 2em;
    }
  }
  `,bt([dt({type:String})],$t.prototype,"href",void 0),bt([dt({type:String})],$t.prototype,"text",void 0),bt([dt({type:String})],$t.prototype,"src",void 0),$t=bt([lt("dwg-link")],$t);var wt=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let xt=class extends at{constructor(){super(...arguments),this.name="Daniel Gray"}render(){return W`
    <div id="wrapper">
      <dwg-text-animation id="name" blink text="${this.name}"></dwg-text-animation>
      <div id="link-wrapper">
        <dwg-link text="LinkedIn" src="linkedin" href="https://www.linkedin.com/in/daniel-gray-8a6ba2108/"></dwg-link>
        <dwg-link text="GitHub" src="github" href="https://github.com/dgray001?tab=repositories"></dwg-link>
      </div>
    </div>
    `}};xt.styles=r`
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
      display: flex;
      flex-flow: column nowrap;
      font-size: calc(0.4 * var(--font-size-largest));
      gap: 0.3em;
      justify-content: center;
      margin-left: auto;
      margin-right: 2em;
    }
  }
  `,wt([ut()],xt.prototype,"name",void 0),xt=wt([lt("dwg-header")],xt);var At=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Et=class extends at{constructor(){super(...arguments),this.title_text="I'm not a great programmer; I'm a good programmer with great habits. ~ Kent Beck",this.body_text1="\n  I'm a full-stack engineer passionate about writing efficient, scalable code\n  and cultivating instantiations of best practices. I believe that collaboration\n  and individual contribution has more value than rigid processes or tools. I\n  find more value in working software than I do in comprehensive documentation.\n  I will typically advocate for user feedback before guessing how software will\n  be used. Lastly, I embrace challenges as opportunities for growth and\n  continuous learning rather than following a short-sighted plan.\n  ",this.body_text2="\n  In other words, I'm an agile developer who takes pride in my work.\n  ",this.agile_manifesto=void 0}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return function(t,e,i,n){return new(i||(i=Promise))((function(s,o){function r(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}c((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){t.connectedCallback.call(this),yield mt(1200),yield ft((()=>(this.agile_manifesto=this.shadowRoot.querySelector("#hero-section dwg-link.body"),!!this.agile_manifesto))),this.agile_manifesto.classList.add("show")}))}render(){return W`
    <div id="hero-section">
      <dwg-text-animation
        id="title"
        animation_delay="400"
        animation_speed="1000"
        justify animation_type="${gt.FADE_IN}"
        text="${this.title_text}"
      ></dwg-text-animation>
      <dwg-text-animation
        class="body"
        animation_delay="700"
        animation_speed="1000"
        justify animation_type="${gt.FADE_IN}"
        text="${this.body_text1}"
      ></dwg-text-animation>
      <dwg-text-animation
        class="body"
        animation_delay="1000"
        animation_speed="1000"
        justify animation_type="${gt.FADE_IN}"
        text="${this.body_text2}"
      ></dwg-text-animation>
      <dwg-link
        class="body"
        href="https://agilemanifesto.org/"
        text="Agile Manifesto"
      ></dwg-link>
    </div>
    `}};Et.styles=r`
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
      top: 3em;
      transition-duration: 1s;
      transition-property: none;

      &.show {
        opacity: 100%;
        top: 0;
        transition-property: opacity, top;
      }
    }
  }
  `,At([ut()],Et.prototype,"title_text",void 0),At([ut()],Et.prototype,"body_text1",void 0),At([ut()],Et.prototype,"body_text2",void 0),At([ut()],Et.prototype,"agile_manifesto",void 0),Et=At([lt("dwg-home")],Et);var kt,St=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.HOME=1]="HOME"}(kt||(kt={}));let Ct=class extends at{constructor(){super(...arguments),this.page=kt.HOME,this.client_on_mobile=!1}connectedCallback(){super.connectedCallback(),this.client_on_mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substring(0,4)),this.client_on_mobile&&document.body.classList.add("mobile")}pageComponent(){return this.page===kt.HOME?W`<dwg-home></dwg-home>`:W`<p>404</p>`}render(){return W`
    <dwg-header></dwg-header>
    <div id="content">
      ${this.pageComponent()}
    </div>
    `}};Ct.styles=r`
  dwg-header {
    box-shadow: 0px 2px 2px 2px rgb(200, 200, 200);
    display: block;
    margin-bottom: 6px;
  }

  #content {
    margin-top: var(--font-size-larger);
    padding: var(--font-size-large);
  }
  `,St([dt({type:kt})],Ct.prototype,"page",void 0),St([dt({type:Boolean})],Ct.prototype,"client_on_mobile",void 0),Ct=St([lt("dwg-index-page")],Ct);var Pt=i(379),Nt=i.n(Pt),Ot=i(795),Tt=i.n(Ot),zt=i(569),Ut=i.n(zt),jt=i(565),Rt=i.n(jt),Mt=i(216),Ht=i.n(Mt),It=i(589),Dt=i.n(It),Lt=i(99),Bt={};Bt.styleTagTransform=Dt(),Bt.setAttributes=Rt(),Bt.insert=Ut().bind(null,"head"),Bt.domAPI=Tt(),Bt.insertStyleElement=Ht(),Nt()(Lt.Z,Bt),Lt.Z&&Lt.Z.locals&&Lt.Z.locals})()})();