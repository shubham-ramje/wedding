(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(u){if(u.ep)return;u.ep=!0;const h=o(u);fetch(u.href,h)}})();function nm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ul={exports:{}},ui={},dl={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function F1(){if(Tf)return ae;Tf=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=w&&b[w]||b["@@iterator"],typeof b=="function"?b:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,E={};function D(b,L,oe){this.props=b,this.context=L,this.refs=E,this.updater=oe||P}D.prototype.isReactComponent={},D.prototype.setState=function(b,L){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,L,"setState")},D.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function F(){}F.prototype=D.prototype;function O(b,L,oe){this.props=b,this.context=L,this.refs=E,this.updater=oe||P}var W=O.prototype=new F;W.constructor=O,z(W,D.prototype),W.isPureReactComponent=!0;var X=Array.isArray,B=Object.prototype.hasOwnProperty,te={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function q(b,L,oe){var le,de={},fe=null,ve=null;if(L!=null)for(le in L.ref!==void 0&&(ve=L.ref),L.key!==void 0&&(fe=""+L.key),L)B.call(L,le)&&!ce.hasOwnProperty(le)&&(de[le]=L[le]);var me=arguments.length-2;if(me===1)de.children=oe;else if(1<me){for(var ke=Array(me),ut=0;ut<me;ut++)ke[ut]=arguments[ut+2];de.children=ke}if(b&&b.defaultProps)for(le in me=b.defaultProps,me)de[le]===void 0&&(de[le]=me[le]);return{$$typeof:n,type:b,key:fe,ref:ve,props:de,_owner:te.current}}function xe(b,L){return{$$typeof:n,type:b.type,key:L,ref:b.ref,props:b.props,_owner:b._owner}}function Pe(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function tt(b){var L={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(oe){return L[oe]})}var ct=/\/+/g;function qe(b,L){return typeof b=="object"&&b!==null&&b.key!=null?tt(""+b.key):L.toString(36)}function nt(b,L,oe,le,de){var fe=typeof b;(fe==="undefined"||fe==="boolean")&&(b=null);var ve=!1;if(b===null)ve=!0;else switch(fe){case"string":case"number":ve=!0;break;case"object":switch(b.$$typeof){case n:case r:ve=!0}}if(ve)return ve=b,de=de(ve),b=le===""?"."+qe(ve,0):le,X(de)?(oe="",b!=null&&(oe=b.replace(ct,"$&/")+"/"),nt(de,L,oe,"",function(ut){return ut})):de!=null&&(Pe(de)&&(de=xe(de,oe+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(ct,"$&/")+"/")+b)),L.push(de)),1;if(ve=0,le=le===""?".":le+":",X(b))for(var me=0;me<b.length;me++){fe=b[me];var ke=le+qe(fe,me);ve+=nt(fe,L,oe,ke,de)}else if(ke=S(b),typeof ke=="function")for(b=ke.call(b),me=0;!(fe=b.next()).done;)fe=fe.value,ke=le+qe(fe,me++),ve+=nt(fe,L,oe,ke,de);else if(fe==="object")throw L=String(b),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ve}function Ct(b,L,oe){if(b==null)return b;var le=[],de=0;return nt(b,le,"","",function(fe){return L.call(oe,fe,de++)}),le}function Ze(b){if(b._status===-1){var L=b._result;L=L(),L.then(function(oe){(b._status===0||b._status===-1)&&(b._status=1,b._result=oe)},function(oe){(b._status===0||b._status===-1)&&(b._status=2,b._result=oe)}),b._status===-1&&(b._status=0,b._result=L)}if(b._status===1)return b._result.default;throw b._result}var se={current:null},I={transition:null},Z={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:I,ReactCurrentOwner:te};function H(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Ct,forEach:function(b,L,oe){Ct(b,function(){L.apply(this,arguments)},oe)},count:function(b){var L=0;return Ct(b,function(){L++}),L},toArray:function(b){return Ct(b,function(L){return L})||[]},only:function(b){if(!Pe(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ae.Component=D,ae.Fragment=o,ae.Profiler=u,ae.PureComponent=O,ae.StrictMode=a,ae.Suspense=g,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ae.act=H,ae.cloneElement=function(b,L,oe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var le=z({},b.props),de=b.key,fe=b.ref,ve=b._owner;if(L!=null){if(L.ref!==void 0&&(fe=L.ref,ve=te.current),L.key!==void 0&&(de=""+L.key),b.type&&b.type.defaultProps)var me=b.type.defaultProps;for(ke in L)B.call(L,ke)&&!ce.hasOwnProperty(ke)&&(le[ke]=L[ke]===void 0&&me!==void 0?me[ke]:L[ke])}var ke=arguments.length-2;if(ke===1)le.children=oe;else if(1<ke){me=Array(ke);for(var ut=0;ut<ke;ut++)me[ut]=arguments[ut+2];le.children=me}return{$$typeof:n,type:b.type,key:de,ref:fe,props:le,_owner:ve}},ae.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:h,_context:b},b.Consumer=b},ae.createElement=q,ae.createFactory=function(b){var L=q.bind(null,b);return L.type=b,L},ae.createRef=function(){return{current:null}},ae.forwardRef=function(b){return{$$typeof:m,render:b}},ae.isValidElement=Pe,ae.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:Ze}},ae.memo=function(b,L){return{$$typeof:v,type:b,compare:L===void 0?null:L}},ae.startTransition=function(b){var L=I.transition;I.transition={};try{b()}finally{I.transition=L}},ae.unstable_act=H,ae.useCallback=function(b,L){return se.current.useCallback(b,L)},ae.useContext=function(b){return se.current.useContext(b)},ae.useDebugValue=function(){},ae.useDeferredValue=function(b){return se.current.useDeferredValue(b)},ae.useEffect=function(b,L){return se.current.useEffect(b,L)},ae.useId=function(){return se.current.useId()},ae.useImperativeHandle=function(b,L,oe){return se.current.useImperativeHandle(b,L,oe)},ae.useInsertionEffect=function(b,L){return se.current.useInsertionEffect(b,L)},ae.useLayoutEffect=function(b,L){return se.current.useLayoutEffect(b,L)},ae.useMemo=function(b,L){return se.current.useMemo(b,L)},ae.useReducer=function(b,L,oe){return se.current.useReducer(b,L,oe)},ae.useRef=function(b){return se.current.useRef(b)},ae.useState=function(b){return se.current.useState(b)},ae.useSyncExternalStore=function(b,L,oe){return se.current.useSyncExternalStore(b,L,oe)},ae.useTransition=function(){return se.current.useTransition()},ae.version="18.3.1",ae}var Pf;function Xl(){return Pf||(Pf=1,dl.exports=F1()),dl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function _1(){if(Ef)return ui;Ef=1;var n=Xl(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function f(m,g,v){var y,w={},S=null,P=null;v!==void 0&&(S=""+v),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(P=g.ref);for(y in g)a.call(g,y)&&!h.hasOwnProperty(y)&&(w[y]=g[y]);if(m&&m.defaultProps)for(y in g=m.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:r,type:m,key:S,ref:P,props:w,_owner:u.current}}return ui.Fragment=o,ui.jsx=f,ui.jsxs=f,ui}var zf;function I1(){return zf||(zf=1,ul.exports=_1()),ul.exports}var c=I1(),R=Xl();const jn=nm(R);var Uo={},fl={exports:{}},lt={},hl={exports:{}},ml={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function O1(){return Mf||(Mf=1,(function(n){function r(I,Z){var H=I.length;I.push(Z);e:for(;0<H;){var b=H-1>>>1,L=I[b];if(0<u(L,Z))I[b]=Z,I[H]=L,H=b;else break e}}function o(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var Z=I[0],H=I.pop();if(H!==Z){I[0]=H;e:for(var b=0,L=I.length,oe=L>>>1;b<oe;){var le=2*(b+1)-1,de=I[le],fe=le+1,ve=I[fe];if(0>u(de,H))fe<L&&0>u(ve,de)?(I[b]=ve,I[fe]=H,b=fe):(I[b]=de,I[le]=H,b=le);else if(fe<L&&0>u(ve,H))I[b]=ve,I[fe]=H,b=fe;else break e}}return Z}function u(I,Z){var H=I.sortIndex-Z.sortIndex;return H!==0?H:I.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;n.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var g=[],v=[],y=1,w=null,S=3,P=!1,z=!1,E=!1,D=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(I){for(var Z=o(v);Z!==null;){if(Z.callback===null)a(v);else if(Z.startTime<=I)a(v),Z.sortIndex=Z.expirationTime,r(g,Z);else break;Z=o(v)}}function X(I){if(E=!1,W(I),!z)if(o(g)!==null)z=!0,Ze(B);else{var Z=o(v);Z!==null&&se(X,Z.startTime-I)}}function B(I,Z){z=!1,E&&(E=!1,F(q),q=-1),P=!0;var H=S;try{for(W(Z),w=o(g);w!==null&&(!(w.expirationTime>Z)||I&&!tt());){var b=w.callback;if(typeof b=="function"){w.callback=null,S=w.priorityLevel;var L=b(w.expirationTime<=Z);Z=n.unstable_now(),typeof L=="function"?w.callback=L:w===o(g)&&a(g),W(Z)}else a(g);w=o(g)}if(w!==null)var oe=!0;else{var le=o(v);le!==null&&se(X,le.startTime-Z),oe=!1}return oe}finally{w=null,S=H,P=!1}}var te=!1,ce=null,q=-1,xe=5,Pe=-1;function tt(){return!(n.unstable_now()-Pe<xe)}function ct(){if(ce!==null){var I=n.unstable_now();Pe=I;var Z=!0;try{Z=ce(!0,I)}finally{Z?qe():(te=!1,ce=null)}}else te=!1}var qe;if(typeof O=="function")qe=function(){O(ct)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Ct=nt.port2;nt.port1.onmessage=ct,qe=function(){Ct.postMessage(null)}}else qe=function(){D(ct,0)};function Ze(I){ce=I,te||(te=!0,qe())}function se(I,Z){q=D(function(){I(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){z||P||(z=!0,Ze(B))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return o(g)},n.unstable_next=function(I){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var H=S;S=Z;try{return I()}finally{S=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=S;S=I;try{return Z()}finally{S=H}},n.unstable_scheduleCallback=function(I,Z,H){var b=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?b+H:b):H=b,I){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=H+L,I={id:y++,callback:Z,priorityLevel:I,startTime:H,expirationTime:L,sortIndex:-1},H>b?(I.sortIndex=H,r(v,I),o(g)===null&&I===o(v)&&(E?(F(q),q=-1):E=!0,se(X,H-b))):(I.sortIndex=L,r(g,I),z||P||(z=!0,Ze(B))),I},n.unstable_shouldYield=tt,n.unstable_wrapCallback=function(I){var Z=S;return function(){var H=S;S=Z;try{return I.apply(this,arguments)}finally{S=H}}}})(ml)),ml}var Df;function B1(){return Df||(Df=1,hl.exports=O1()),hl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function U1(){if(Lf)return lt;Lf=1;var n=Xl(),r=B1();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,u={};function h(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(u[e]=t,e=0;e<t.length;e++)a.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function S(e){return g.call(w,e)?!0:g.call(y,e)?!1:v.test(e)?w[e]=!0:(y[e]=!0,!1)}function P(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,t,i,s){if(t===null||typeof t>"u"||P(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,i,s,l,d,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=p}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(F,O);D[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(F,O);D[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(F,O);D[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,i,s){var l=D.hasOwnProperty(t)?D[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z(t,i,l,s)&&(i=null),s||l===null?S(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):l.mustUseProperty?e[l.propertyName]=i===null?l.type===3?!1:"":i:(t=l.attributeName,s=l.attributeNamespace,i===null?e.removeAttribute(t):(l=l.type,i=l===3||l===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var X=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),te=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),tt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),I=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,b;function L(e){if(b===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var oe=!1;function le(e,t){if(!e||oe)return"";oe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var s=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){s=T}e.call(t.prototype)}else{try{throw Error()}catch(T){s=T}e()}}catch(T){if(T&&s&&typeof T.stack=="string"){for(var l=T.stack.split(`
`),d=s.stack.split(`
`),p=l.length-1,x=d.length-1;1<=p&&0<=x&&l[p]!==d[x];)x--;for(;1<=p&&0<=x;p--,x--)if(l[p]!==d[x]){if(p!==1||x!==1)do if(p--,x--,0>x||l[p]!==d[x]){var j=`
`+l[p].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=p&&0<=x);break}}}finally{oe=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?L(e):""}function de(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case te:return"Portal";case xe:return"Profiler";case q:return"StrictMode";case qe:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tt:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ct:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ut(e){var t=ke(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(p){s=""+p,d.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=ut(e))}function Dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=ke(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vs(e,t){var i=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Lc(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=me(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ac(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function ys(e,t){Ac(e,t);var i=me(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xs(e,t.type,i):t.hasOwnProperty("defaultValue")&&xs(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vc(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function xs(e,t,i){(t!=="number"||Di(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Nr=Array.isArray;function $n(e,t,i,s){if(e=e.options,t){t={};for(var l=0;l<i.length;l++)t["$"+i[l]]=!0;for(i=0;i<e.length;i++)l=t.hasOwnProperty("$"+e[i].value),e[i].selected!==l&&(e[i].selected=l),l&&s&&(e[i].defaultSelected=!0)}else{for(i=""+me(i),t=null,l=0;l<e.length;l++){if(e[l].value===i){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rc(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(Nr(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:me(i)}}function Fc(e,t){var i=me(t.value),s=me(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function _c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ic(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function js(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ic(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,Oc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bp=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){Bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function Bc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,l=Bc(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,l):e[i]=l}}var Up=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ss(e,t){if(t){if(Up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bs=null;function Ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,Wn=null,Gn=null;function Hc(e){if(e=Yr(e)){if(typeof Cs!="function")throw Error(o(280));var t=e.stateNode;t&&(t=no(t),Cs(e.stateNode,e.type,t))}}function $c(e){Wn?Gn?Gn.push(e):Gn=[e]:Wn=e}function Wc(){if(Wn){var e=Wn,t=Gn;if(Gn=Wn=null,Hc(e),t)for(e=0;e<t.length;e++)Hc(t[e])}}function Gc(e,t){return e(t)}function Kc(){}var Ts=!1;function Qc(e,t,i){if(Ts)return e(t,i);Ts=!0;try{return Gc(e,t,i)}finally{Ts=!1,(Wn!==null||Gn!==null)&&(Kc(),Wc())}}function Pr(e,t){var i=e.stateNode;if(i===null)return null;var s=no(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var Ps=!1;if(m)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Ps=!1}function Hp(e,t,i,s,l,d,p,x,j){var T=Array.prototype.slice.call(arguments,3);try{t.apply(i,T)}catch(A){this.onError(A)}}var zr=!1,Ai=null,Vi=!1,Es=null,$p={onError:function(e){zr=!0,Ai=e}};function Wp(e,t,i,s,l,d,p,x,j){zr=!1,Ai=null,Hp.apply($p,arguments)}function Gp(e,t,i,s,l,d,p,x,j){if(Wp.apply(this,arguments),zr){if(zr){var T=Ai;zr=!1,Ai=null}else throw Error(o(198));Vi||(Vi=!0,Es=T)}}function Nn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xc(e){if(Nn(e)!==e)throw Error(o(188))}function Kp(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,s=t;;){var l=i.return;if(l===null)break;var d=l.alternate;if(d===null){if(s=l.return,s!==null){i=s;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===i)return Xc(l),e;if(d===s)return Xc(l),t;d=d.sibling}throw Error(o(188))}if(i.return!==s.return)i=l,s=d;else{for(var p=!1,x=l.child;x;){if(x===i){p=!0,i=l,s=d;break}if(x===s){p=!0,s=l,i=d;break}x=x.sibling}if(!p){for(x=d.child;x;){if(x===i){p=!0,i=d,s=l;break}if(x===s){p=!0,s=d,i=l;break}x=x.sibling}if(!p)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function qc(e){return e=Kp(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zc(e);if(t!==null)return t;e=e.sibling}return null}var Jc=r.unstable_scheduleCallback,eu=r.unstable_cancelCallback,Qp=r.unstable_shouldYield,Yp=r.unstable_requestPaint,De=r.unstable_now,Xp=r.unstable_getCurrentPriorityLevel,zs=r.unstable_ImmediatePriority,tu=r.unstable_UserBlockingPriority,Ri=r.unstable_NormalPriority,qp=r.unstable_LowPriority,nu=r.unstable_IdlePriority,Fi=null,Vt=null;function Zp(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Fi,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:t0,Jp=Math.log,e0=Math.LN2;function t0(e){return e>>>=0,e===0?32:31-(Jp(e)/e0|0)|0}var _i=64,Ii=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,l=e.suspendedLanes,d=e.pingedLanes,p=i&268435455;if(p!==0){var x=p&~l;x!==0?s=Mr(x):(d&=p,d!==0&&(s=Mr(d)))}else p=i&~l,p!==0?s=Mr(p):d!==0&&(s=Mr(d));if(s===0)return 0;if(t!==0&&t!==s&&(t&l)===0&&(l=s&-s,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((s&4)!==0&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-Tt(t),l=1<<i,s|=e[i],t&=~l;return s}function n0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r0(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var p=31-Tt(d),x=1<<p,j=l[p];j===-1?((x&i)===0||(x&s)!==0)&&(l[p]=n0(x,t)):j<=t&&(e.expiredLanes|=x),d&=~x}}function Ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=_i;return _i<<=1,(_i&4194240)===0&&(_i=64),e}function Ds(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Dr(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=i}function i0(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var l=31-Tt(i),d=1<<l;t[l]=0,s[l]=-1,e[l]=-1,i&=~d}}function Ls(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-Tt(i),l=1<<s;l&t|e[s]&t&&(e[s]|=t),i&=~l}}var pe=0;function iu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ou,As,su,au,lu,Vs=!1,Bi=[],en=null,tn=null,nn=null,Lr=new Map,Ar=new Map,rn=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cu(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function Vr(e,t,i,s,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:d,targetContainers:[l]},t!==null&&(t=Yr(t),t!==null&&As(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function s0(e,t,i,s,l){switch(t){case"focusin":return en=Vr(en,e,t,i,s,l),!0;case"dragenter":return tn=Vr(tn,e,t,i,s,l),!0;case"mouseover":return nn=Vr(nn,e,t,i,s,l),!0;case"pointerover":var d=l.pointerId;return Lr.set(d,Vr(Lr.get(d)||null,e,t,i,s,l)),!0;case"gotpointercapture":return d=l.pointerId,Ar.set(d,Vr(Ar.get(d)||null,e,t,i,s,l)),!0}return!1}function uu(e){var t=Cn(e.target);if(t!==null){var i=Nn(t);if(i!==null){if(t=i.tag,t===13){if(t=Yc(i),t!==null){e.blockedOn=t,lu(e.priority,function(){su(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);bs=s,i.target.dispatchEvent(s),bs=null}else return t=Yr(i),t!==null&&As(t),e.blockedOn=i,!1;t.shift()}return!0}function du(e,t,i){Ui(e)&&i.delete(t)}function a0(){Vs=!1,en!==null&&Ui(en)&&(en=null),tn!==null&&Ui(tn)&&(tn=null),nn!==null&&Ui(nn)&&(nn=null),Lr.forEach(du),Ar.forEach(du)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Vs||(Vs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,a0)))}function Fr(e){function t(l){return Rr(l,e)}if(0<Bi.length){Rr(Bi[0],e);for(var i=1;i<Bi.length;i++){var s=Bi[i];s.blockedOn===e&&(s.blockedOn=null)}}for(en!==null&&Rr(en,e),tn!==null&&Rr(tn,e),nn!==null&&Rr(nn,e),Lr.forEach(t),Ar.forEach(t),i=0;i<rn.length;i++)s=rn[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<rn.length&&(i=rn[0],i.blockedOn===null);)uu(i),i.blockedOn===null&&rn.shift()}var Kn=X.ReactCurrentBatchConfig,Hi=!0;function l0(e,t,i,s){var l=pe,d=Kn.transition;Kn.transition=null;try{pe=1,Rs(e,t,i,s)}finally{pe=l,Kn.transition=d}}function c0(e,t,i,s){var l=pe,d=Kn.transition;Kn.transition=null;try{pe=4,Rs(e,t,i,s)}finally{pe=l,Kn.transition=d}}function Rs(e,t,i,s){if(Hi){var l=Fs(e,t,i,s);if(l===null)ea(e,t,s,$i,i),cu(e,s);else if(s0(l,e,t,i,s))s.stopPropagation();else if(cu(e,s),t&4&&-1<o0.indexOf(e)){for(;l!==null;){var d=Yr(l);if(d!==null&&ou(d),d=Fs(e,t,i,s),d===null&&ea(e,t,s,$i,i),d===l)break;l=d}l!==null&&s.stopPropagation()}else ea(e,t,s,null,i)}}var $i=null;function Fs(e,t,i,s){if($i=null,e=Ns(s),e=Cn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Yc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case zs:return 1;case tu:return 4;case Ri:case qp:return 16;case nu:return 536870912;default:return 16}default:return 16}}var on=null,_s=null,Wi=null;function hu(){if(Wi)return Wi;var e,t=_s,i=t.length,s,l="value"in on?on.value:on.textContent,d=l.length;for(e=0;e<i&&t[e]===l[e];e++);var p=i-e;for(s=1;s<=p&&t[i-s]===l[d-s];s++);return Wi=l.slice(e,1<s?1-s:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function mu(){return!1}function dt(e){function t(i,s,l,d,p){this._reactName=i,this._targetInst=l,this.type=s,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(i=e[x],this[x]=i?i(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ki:mu,this.isPropagationStopped=mu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=dt(Qn),_r=H({},Qn,{view:0,detail:0}),u0=dt(_r),Os,Bs,Ir,Qi=H({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Os=e.screenX-Ir.screenX,Bs=e.screenY-Ir.screenY):Bs=Os=0,Ir=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:Bs}}),pu=dt(Qi),d0=H({},Qi,{dataTransfer:0}),f0=dt(d0),h0=H({},_r,{relatedTarget:0}),Us=dt(h0),m0=H({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=dt(m0),g0=H({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=dt(g0),y0=H({},Qn,{data:0}),gu=dt(y0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j0[e])?!!t[e]:!1}function Hs(){return S0}var k0=H({},_r,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?w0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b0=dt(k0),N0=H({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=dt(N0),C0=H({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),T0=dt(C0),P0=H({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=dt(P0),z0=H({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=dt(z0),D0=[9,13,27,32],$s=m&&"CompositionEvent"in window,Or=null;m&&"documentMode"in document&&(Or=document.documentMode);var L0=m&&"TextEvent"in window&&!Or,yu=m&&(!$s||Or&&8<Or&&11>=Or),xu=" ",wu=!1;function ju(e,t){switch(e){case"keyup":return D0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function A0(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(wu=!0,xu);case"textInput":return e=t.data,e===xu&&wu?null:e;default:return null}}function V0(e,t){if(Yn)return e==="compositionend"||!$s&&ju(e,t)?(e=hu(),Wi=_s=on=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yu&&t.locale!=="ko"?null:t.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!R0[e.type]:t==="textarea"}function bu(e,t,i,s){$c(s),t=Ji(t,"onChange"),0<t.length&&(i=new Is("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var Br=null,Ur=null;function F0(e){Uu(e,0)}function Yi(e){var t=er(e);if(Dc(t))return e}function _0(e,t){if(e==="change")return t}var Nu=!1;if(m){var Ws;if(m){var Gs="oninput"in document;if(!Gs){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),Gs=typeof Cu.oninput=="function"}Ws=Gs}else Ws=!1;Nu=Ws&&(!document.documentMode||9<document.documentMode)}function Tu(){Br&&(Br.detachEvent("onpropertychange",Pu),Ur=Br=null)}function Pu(e){if(e.propertyName==="value"&&Yi(Ur)){var t=[];bu(t,Ur,e,Ns(e)),Qc(F0,t)}}function I0(e,t,i){e==="focusin"?(Tu(),Br=t,Ur=i,Br.attachEvent("onpropertychange",Pu)):e==="focusout"&&Tu()}function O0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Ur)}function B0(e,t){if(e==="click")return Yi(t)}function U0(e,t){if(e==="input"||e==="change")return Yi(t)}function H0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:H0;function Hr(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var l=i[s];if(!g.call(t,l)||!Pt(e[l],t[l]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var i=Eu(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Eu(i)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Du(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Di(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $0(e){var t=Du(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Mu(i.ownerDocument.documentElement,i)){if(s!==null&&Ks(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=i.textContent.length,d=Math.min(s.start,l);s=s.end===void 0?d:Math.min(s.end,l),!e.extend&&d>s&&(l=s,s=d,d=l),l=zu(i,d);var p=zu(i,s);l&&p&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var W0=m&&"documentMode"in document&&11>=document.documentMode,Xn=null,Qs=null,$r=null,Ys=!1;function Lu(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ys||Xn==null||Xn!==Di(s)||(s=Xn,"selectionStart"in s&&Ks(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),$r&&Hr($r,s)||($r=s,s=Ji(Qs,"onSelect"),0<s.length&&(t=new Is("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=Xn)))}function Xi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var qn={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},Xs={},Au={};m&&(Au=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function qi(e){if(Xs[e])return Xs[e];if(!qn[e])return e;var t=qn[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Au)return Xs[e]=t[i];return e}var Vu=qi("animationend"),Ru=qi("animationiteration"),Fu=qi("animationstart"),_u=qi("transitionend"),Iu=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Iu.set(e,t),h(t,[e])}for(var qs=0;qs<Ou.length;qs++){var Zs=Ou[qs],G0=Zs.toLowerCase(),K0=Zs[0].toUpperCase()+Zs.slice(1);sn(G0,"on"+K0)}sn(Vu,"onAnimationEnd"),sn(Ru,"onAnimationIteration"),sn(Fu,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(_u,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Bu(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,Gp(s,t,void 0,e),e.currentTarget=null}function Uu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],l=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var p=s.length-1;0<=p;p--){var x=s[p],j=x.instance,T=x.currentTarget;if(x=x.listener,j!==d&&l.isPropagationStopped())break e;Bu(l,x,T),d=j}else for(p=0;p<s.length;p++){if(x=s[p],j=x.instance,T=x.currentTarget,x=x.listener,j!==d&&l.isPropagationStopped())break e;Bu(l,x,T),d=j}}}if(Vi)throw e=Es,Vi=!1,Es=null,e}function we(e,t){var i=t[sa];i===void 0&&(i=t[sa]=new Set);var s=e+"__bubble";i.has(s)||(Hu(t,e,2,!1),i.add(s))}function Js(e,t,i){var s=0;t&&(s|=4),Hu(i,e,s,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Zi]){e[Zi]=!0,a.forEach(function(i){i!=="selectionchange"&&(Q0.has(i)||Js(i,!1,e),Js(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,Js("selectionchange",!1,t))}}function Hu(e,t,i,s){switch(fu(t)){case 1:var l=l0;break;case 4:l=c0;break;default:l=Rs}i=l.bind(null,t,i,e),l=void 0,!Ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,i,{capture:!0,passive:l}):e.addEventListener(t,i,!0):l!==void 0?e.addEventListener(t,i,{passive:l}):e.addEventListener(t,i,!1)}function ea(e,t,i,s,l){var d=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var x=s.stateNode.containerInfo;if(x===l||x.nodeType===8&&x.parentNode===l)break;if(p===4)for(p=s.return;p!==null;){var j=p.tag;if((j===3||j===4)&&(j=p.stateNode.containerInfo,j===l||j.nodeType===8&&j.parentNode===l))return;p=p.return}for(;x!==null;){if(p=Cn(x),p===null)return;if(j=p.tag,j===5||j===6){s=d=p;continue e}x=x.parentNode}}s=s.return}Qc(function(){var T=d,A=Ns(i),V=[];e:{var M=Iu.get(e);if(M!==void 0){var U=Is,G=e;switch(e){case"keypress":if(Gi(i)===0)break e;case"keydown":case"keyup":U=b0;break;case"focusin":G="focus",U=Us;break;case"focusout":G="blur",U=Us;break;case"beforeblur":case"afterblur":U=Us;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=T0;break;case Vu:case Ru:case Fu:U=p0;break;case _u:U=E0;break;case"scroll":U=u0;break;case"wheel":U=M0;break;case"copy":case"cut":case"paste":U=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=vu}var K=(t&4)!==0,Le=!K&&e==="scroll",N=K?M!==null?M+"Capture":null:M;K=[];for(var k=T,C;k!==null;){C=k;var _=C.stateNode;if(C.tag===5&&_!==null&&(C=_,N!==null&&(_=Pr(k,N),_!=null&&K.push(Kr(k,_,C)))),Le)break;k=k.return}0<K.length&&(M=new U(M,G,null,i,A),V.push({event:M,listeners:K}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",M&&i!==bs&&(G=i.relatedTarget||i.fromElement)&&(Cn(G)||G[Ut]))break e;if((U||M)&&(M=A.window===A?A:(M=A.ownerDocument)?M.defaultView||M.parentWindow:window,U?(G=i.relatedTarget||i.toElement,U=T,G=G?Cn(G):null,G!==null&&(Le=Nn(G),G!==Le||G.tag!==5&&G.tag!==6)&&(G=null)):(U=null,G=T),U!==G)){if(K=pu,_="onMouseLeave",N="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(K=vu,_="onPointerLeave",N="onPointerEnter",k="pointer"),Le=U==null?M:er(U),C=G==null?M:er(G),M=new K(_,k+"leave",U,i,A),M.target=Le,M.relatedTarget=C,_=null,Cn(A)===T&&(K=new K(N,k+"enter",G,i,A),K.target=C,K.relatedTarget=Le,_=K),Le=_,U&&G)t:{for(K=U,N=G,k=0,C=K;C;C=Zn(C))k++;for(C=0,_=N;_;_=Zn(_))C++;for(;0<k-C;)K=Zn(K),k--;for(;0<C-k;)N=Zn(N),C--;for(;k--;){if(K===N||N!==null&&K===N.alternate)break t;K=Zn(K),N=Zn(N)}K=null}else K=null;U!==null&&$u(V,M,U,K,!1),G!==null&&Le!==null&&$u(V,Le,G,K,!0)}}e:{if(M=T?er(T):window,U=M.nodeName&&M.nodeName.toLowerCase(),U==="select"||U==="input"&&M.type==="file")var Q=_0;else if(ku(M))if(Nu)Q=U0;else{Q=O0;var J=I0}else(U=M.nodeName)&&U.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(Q=B0);if(Q&&(Q=Q(e,T))){bu(V,Q,i,A);break e}J&&J(e,M,T),e==="focusout"&&(J=M._wrapperState)&&J.controlled&&M.type==="number"&&xs(M,"number",M.value)}switch(J=T?er(T):window,e){case"focusin":(ku(J)||J.contentEditable==="true")&&(Xn=J,Qs=T,$r=null);break;case"focusout":$r=Qs=Xn=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,Lu(V,i,A);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":Lu(V,i,A)}var ee;if($s)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Yn?ju(e,i)&&(re="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(re="onCompositionStart");re&&(yu&&i.locale!=="ko"&&(Yn||re!=="onCompositionStart"?re==="onCompositionEnd"&&Yn&&(ee=hu()):(on=A,_s="value"in on?on.value:on.textContent,Yn=!0)),J=Ji(T,re),0<J.length&&(re=new gu(re,e,null,i,A),V.push({event:re,listeners:J}),ee?re.data=ee:(ee=Su(i),ee!==null&&(re.data=ee)))),(ee=L0?A0(e,i):V0(e,i))&&(T=Ji(T,"onBeforeInput"),0<T.length&&(A=new gu("onBeforeInput","beforeinput",null,i,A),V.push({event:A,listeners:T}),A.data=ee))}Uu(V,t)})}function Kr(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ji(e,t){for(var i=t+"Capture",s=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=Pr(e,i),d!=null&&s.unshift(Kr(e,d,l)),d=Pr(e,t),d!=null&&s.push(Kr(e,d,l))),e=e.return}return s}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $u(e,t,i,s,l){for(var d=t._reactName,p=[];i!==null&&i!==s;){var x=i,j=x.alternate,T=x.stateNode;if(j!==null&&j===s)break;x.tag===5&&T!==null&&(x=T,l?(j=Pr(i,d),j!=null&&p.unshift(Kr(i,j,x))):l||(j=Pr(i,d),j!=null&&p.push(Kr(i,j,x)))),i=i.return}p.length!==0&&e.push({event:t,listeners:p})}var Y0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Y0,`
`).replace(X0,"")}function eo(e,t,i){if(t=Wu(t),Wu(e)!==t&&i)throw Error(o(425))}function to(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(J0)}:ia;function J0(e){setTimeout(function(){throw e})}function oa(e,t){var i=t,s=0;do{var l=i.nextSibling;if(e.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(s===0){e.removeChild(l),Fr(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=l}while(i);Fr(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Jn,Qr="__reactProps$"+Jn,Ut="__reactContainer$"+Jn,sa="__reactEvents$"+Jn,e1="__reactListeners$"+Jn,t1="__reactHandles$"+Jn;function Cn(e){var t=e[Rt];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ut]||i[Rt]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ku(e);e!==null;){if(i=e[Rt])return i;e=Ku(e)}return t}e=i,i=e.parentNode}return null}function Yr(e){return e=e[Rt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function no(e){return e[Qr]||null}var aa=[],tr=-1;function ln(e){return{current:e}}function je(e){0>tr||(e.current=aa[tr],aa[tr]=null,tr--)}function ye(e,t){tr++,aa[tr]=e.current,e.current=t}var cn={},We=ln(cn),rt=ln(!1),Tn=cn;function nr(e,t){var i=e.type.contextTypes;if(!i)return cn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in i)l[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function it(e){return e=e.childContextTypes,e!=null}function ro(){je(rt),je(We)}function Qu(e,t,i){if(We.current!==cn)throw Error(o(168));ye(We,t),ye(rt,i)}function Yu(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(o(108,ve(e)||"Unknown",l));return H({},i,s)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Tn=We.current,ye(We,e),ye(rt,rt.current),!0}function Xu(e,t,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=Yu(e,t,Tn),s.__reactInternalMemoizedMergedChildContext=e,je(rt),je(We),ye(We,e)):je(rt),ye(rt,i)}var Ht=null,oo=!1,la=!1;function qu(e){Ht===null?Ht=[e]:Ht.push(e)}function n1(e){oo=!0,qu(e)}function un(){if(!la&&Ht!==null){la=!0;var e=0,t=pe;try{var i=Ht;for(pe=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}Ht=null,oo=!1}catch(l){throw Ht!==null&&(Ht=Ht.slice(e+1)),Jc(zs,un),l}finally{pe=t,la=!1}}return null}var rr=[],ir=0,so=null,ao=0,vt=[],yt=0,Pn=null,$t=1,Wt="";function En(e,t){rr[ir++]=ao,rr[ir++]=so,so=e,ao=t}function Zu(e,t,i){vt[yt++]=$t,vt[yt++]=Wt,vt[yt++]=Pn,Pn=e;var s=$t;e=Wt;var l=32-Tt(s)-1;s&=~(1<<l),i+=1;var d=32-Tt(t)+l;if(30<d){var p=l-l%5;d=(s&(1<<p)-1).toString(32),s>>=p,l-=p,$t=1<<32-Tt(t)+l|i<<l|s,Wt=d+e}else $t=1<<d|i<<l|s,Wt=e}function ca(e){e.return!==null&&(En(e,1),Zu(e,1,0))}function ua(e){for(;e===so;)so=rr[--ir],rr[ir]=null,ao=rr[--ir],rr[ir]=null;for(;e===Pn;)Pn=vt[--yt],vt[yt]=null,Wt=vt[--yt],vt[yt]=null,$t=vt[--yt],vt[yt]=null}var ft=null,ht=null,be=!1,Et=null;function Ju(e,t){var i=St(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function ed(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,ht=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Pn!==null?{id:$t,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=St(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,ft=e,ht=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(be){var t=ht;if(t){var i=t;if(!ed(e,t)){if(da(e))throw Error(o(418));t=an(i.nextSibling);var s=ft;t&&ed(e,t)?Ju(s,i):(e.flags=e.flags&-4097|2,be=!1,ft=e)}}else{if(da(e))throw Error(o(418));e.flags=e.flags&-4097|2,be=!1,ft=e}}}function td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function lo(e){if(e!==ft)return!1;if(!be)return td(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=ht)){if(da(e))throw nd(),Error(o(418));for(;t;)Ju(e,t),t=an(t.nextSibling)}if(td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){ht=an(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=ft?an(e.stateNode.nextSibling):null;return!0}function nd(){for(var e=ht;e;)e=an(e.nextSibling)}function or(){ht=ft=null,be=!1}function ha(e){Et===null?Et=[e]:Et.push(e)}var r1=X.ReactCurrentBatchConfig;function Xr(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var l=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(p){var x=l.refs;p===null?delete x[d]:x[d]=p},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rd(e){var t=e._init;return t(e._payload)}function id(e){function t(N,k){if(e){var C=N.deletions;C===null?(N.deletions=[k],N.flags|=16):C.push(k)}}function i(N,k){if(!e)return null;for(;k!==null;)t(N,k),k=k.sibling;return null}function s(N,k){for(N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function l(N,k){return N=yn(N,k),N.index=0,N.sibling=null,N}function d(N,k,C){return N.index=C,e?(C=N.alternate,C!==null?(C=C.index,C<k?(N.flags|=2,k):C):(N.flags|=2,k)):(N.flags|=1048576,k)}function p(N){return e&&N.alternate===null&&(N.flags|=2),N}function x(N,k,C,_){return k===null||k.tag!==6?(k=il(C,N.mode,_),k.return=N,k):(k=l(k,C),k.return=N,k)}function j(N,k,C,_){var Q=C.type;return Q===ce?A(N,k,C.props.children,_,C.key):k!==null&&(k.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ze&&rd(Q)===k.type)?(_=l(k,C.props),_.ref=Xr(N,k,C),_.return=N,_):(_=Ao(C.type,C.key,C.props,null,N.mode,_),_.ref=Xr(N,k,C),_.return=N,_)}function T(N,k,C,_){return k===null||k.tag!==4||k.stateNode.containerInfo!==C.containerInfo||k.stateNode.implementation!==C.implementation?(k=ol(C,N.mode,_),k.return=N,k):(k=l(k,C.children||[]),k.return=N,k)}function A(N,k,C,_,Q){return k===null||k.tag!==7?(k=Fn(C,N.mode,_,Q),k.return=N,k):(k=l(k,C),k.return=N,k)}function V(N,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return k=il(""+k,N.mode,C),k.return=N,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case B:return C=Ao(k.type,k.key,k.props,null,N.mode,C),C.ref=Xr(N,null,k),C.return=N,C;case te:return k=ol(k,N.mode,C),k.return=N,k;case Ze:var _=k._init;return V(N,_(k._payload),C)}if(Nr(k)||Z(k))return k=Fn(k,N.mode,C,null),k.return=N,k;co(N,k)}return null}function M(N,k,C,_){var Q=k!==null?k.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return Q!==null?null:x(N,k,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case B:return C.key===Q?j(N,k,C,_):null;case te:return C.key===Q?T(N,k,C,_):null;case Ze:return Q=C._init,M(N,k,Q(C._payload),_)}if(Nr(C)||Z(C))return Q!==null?null:A(N,k,C,_,null);co(N,C)}return null}function U(N,k,C,_,Q){if(typeof _=="string"&&_!==""||typeof _=="number")return N=N.get(C)||null,x(k,N,""+_,Q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case B:return N=N.get(_.key===null?C:_.key)||null,j(k,N,_,Q);case te:return N=N.get(_.key===null?C:_.key)||null,T(k,N,_,Q);case Ze:var J=_._init;return U(N,k,C,J(_._payload),Q)}if(Nr(_)||Z(_))return N=N.get(C)||null,A(k,N,_,Q,null);co(k,_)}return null}function G(N,k,C,_){for(var Q=null,J=null,ee=k,re=k=0,Be=null;ee!==null&&re<C.length;re++){ee.index>re?(Be=ee,ee=null):Be=ee.sibling;var he=M(N,ee,C[re],_);if(he===null){ee===null&&(ee=Be);break}e&&ee&&he.alternate===null&&t(N,ee),k=d(he,k,re),J===null?Q=he:J.sibling=he,J=he,ee=Be}if(re===C.length)return i(N,ee),be&&En(N,re),Q;if(ee===null){for(;re<C.length;re++)ee=V(N,C[re],_),ee!==null&&(k=d(ee,k,re),J===null?Q=ee:J.sibling=ee,J=ee);return be&&En(N,re),Q}for(ee=s(N,ee);re<C.length;re++)Be=U(ee,N,re,C[re],_),Be!==null&&(e&&Be.alternate!==null&&ee.delete(Be.key===null?re:Be.key),k=d(Be,k,re),J===null?Q=Be:J.sibling=Be,J=Be);return e&&ee.forEach(function(xn){return t(N,xn)}),be&&En(N,re),Q}function K(N,k,C,_){var Q=Z(C);if(typeof Q!="function")throw Error(o(150));if(C=Q.call(C),C==null)throw Error(o(151));for(var J=Q=null,ee=k,re=k=0,Be=null,he=C.next();ee!==null&&!he.done;re++,he=C.next()){ee.index>re?(Be=ee,ee=null):Be=ee.sibling;var xn=M(N,ee,he.value,_);if(xn===null){ee===null&&(ee=Be);break}e&&ee&&xn.alternate===null&&t(N,ee),k=d(xn,k,re),J===null?Q=xn:J.sibling=xn,J=xn,ee=Be}if(he.done)return i(N,ee),be&&En(N,re),Q;if(ee===null){for(;!he.done;re++,he=C.next())he=V(N,he.value,_),he!==null&&(k=d(he,k,re),J===null?Q=he:J.sibling=he,J=he);return be&&En(N,re),Q}for(ee=s(N,ee);!he.done;re++,he=C.next())he=U(ee,N,re,he.value,_),he!==null&&(e&&he.alternate!==null&&ee.delete(he.key===null?re:he.key),k=d(he,k,re),J===null?Q=he:J.sibling=he,J=he);return e&&ee.forEach(function(R1){return t(N,R1)}),be&&En(N,re),Q}function Le(N,k,C,_){if(typeof C=="object"&&C!==null&&C.type===ce&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case B:e:{for(var Q=C.key,J=k;J!==null;){if(J.key===Q){if(Q=C.type,Q===ce){if(J.tag===7){i(N,J.sibling),k=l(J,C.props.children),k.return=N,N=k;break e}}else if(J.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ze&&rd(Q)===J.type){i(N,J.sibling),k=l(J,C.props),k.ref=Xr(N,J,C),k.return=N,N=k;break e}i(N,J);break}else t(N,J);J=J.sibling}C.type===ce?(k=Fn(C.props.children,N.mode,_,C.key),k.return=N,N=k):(_=Ao(C.type,C.key,C.props,null,N.mode,_),_.ref=Xr(N,k,C),_.return=N,N=_)}return p(N);case te:e:{for(J=C.key;k!==null;){if(k.key===J)if(k.tag===4&&k.stateNode.containerInfo===C.containerInfo&&k.stateNode.implementation===C.implementation){i(N,k.sibling),k=l(k,C.children||[]),k.return=N,N=k;break e}else{i(N,k);break}else t(N,k);k=k.sibling}k=ol(C,N.mode,_),k.return=N,N=k}return p(N);case Ze:return J=C._init,Le(N,k,J(C._payload),_)}if(Nr(C))return G(N,k,C,_);if(Z(C))return K(N,k,C,_);co(N,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,k!==null&&k.tag===6?(i(N,k.sibling),k=l(k,C),k.return=N,N=k):(i(N,k),k=il(C,N.mode,_),k.return=N,N=k),p(N)):i(N,k)}return Le}var sr=id(!0),od=id(!1),uo=ln(null),fo=null,ar=null,ma=null;function pa(){ma=ar=fo=null}function ga(e){var t=uo.current;je(uo),e._currentValue=t}function va(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function lr(e,t){fo=e,ma=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(ma!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(fo===null)throw Error(o(308));ar=e,fo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var zn=null;function ya(e){zn===null?zn=[e]:zn.push(e)}function sd(e,t,i,s){var l=t.interleaved;return l===null?(i.next=i,ya(t)):(i.next=l.next,l.next=i),t.interleaved=i,Gt(e,s)}function Gt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var dn=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ue&2)!==0){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,Gt(e,i)}return l=s.interleaved,l===null?(t.next=t,ya(s)):(t.next=l.next,l.next=t),s.interleaved=t,Gt(e,i)}function ho(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Ls(e,i)}}function ld(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var l=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var p={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};d===null?l=d=p:d=d.next=p,i=i.next}while(i!==null);d===null?l=d=t:d=d.next=t}else l=d=t;i={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function mo(e,t,i,s){var l=e.updateQueue;dn=!1;var d=l.firstBaseUpdate,p=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var j=x,T=j.next;j.next=null,p===null?d=T:p.next=T,p=j;var A=e.alternate;A!==null&&(A=A.updateQueue,x=A.lastBaseUpdate,x!==p&&(x===null?A.firstBaseUpdate=T:x.next=T,A.lastBaseUpdate=j))}if(d!==null){var V=l.baseState;p=0,A=T=j=null,x=d;do{var M=x.lane,U=x.eventTime;if((s&M)===M){A!==null&&(A=A.next={eventTime:U,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var G=e,K=x;switch(M=t,U=i,K.tag){case 1:if(G=K.payload,typeof G=="function"){V=G.call(U,V,M);break e}V=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,M=typeof G=="function"?G.call(U,V,M):G,M==null)break e;V=H({},V,M);break e;case 2:dn=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,M=l.effects,M===null?l.effects=[x]:M.push(x))}else U={eventTime:U,lane:M,tag:x.tag,payload:x.payload,callback:x.callback,next:null},A===null?(T=A=U,j=V):A=A.next=U,p|=M;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;M=x,x=M.next,M.next=null,l.lastBaseUpdate=M,l.shared.pending=null}}while(!0);if(A===null&&(j=V),l.baseState=j,l.firstBaseUpdate=T,l.lastBaseUpdate=A,t=l.shared.interleaved,t!==null){l=t;do p|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);Ln|=p,e.lanes=p,e.memoizedState=V}}function cd(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=i,typeof l!="function")throw Error(o(191,l));l.call(s)}}}var qr={},Ft=ln(qr),Zr=ln(qr),Jr=ln(qr);function Mn(e){if(e===qr)throw Error(o(174));return e}function wa(e,t){switch(ye(Jr,t),ye(Zr,e),ye(Ft,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:js(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=js(t,e)}je(Ft),ye(Ft,t)}function cr(){je(Ft),je(Zr),je(Jr)}function ud(e){Mn(Jr.current);var t=Mn(Ft.current),i=js(t,e.type);t!==i&&(ye(Zr,e),ye(Ft,i))}function ja(e){Zr.current===e&&(je(Ft),je(Zr))}var Ne=ln(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=[];function ka(){for(var e=0;e<Sa.length;e++)Sa[e]._workInProgressVersionPrimary=null;Sa.length=0}var go=X.ReactCurrentDispatcher,ba=X.ReactCurrentBatchConfig,Dn=0,Ce=null,Re=null,Ie=null,vo=!1,ei=!1,ti=0,i1=0;function Ge(){throw Error(o(321))}function Na(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Pt(e[i],t[i]))return!1;return!0}function Ca(e,t,i,s,l,d){if(Dn=d,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?l1:c1,e=i(s,l),ei){d=0;do{if(ei=!1,ti=0,25<=d)throw Error(o(301));d+=1,Ie=Re=null,t.updateQueue=null,go.current=u1,e=i(s,l)}while(ei)}if(go.current=wo,t=Re!==null&&Re.next!==null,Dn=0,Ie=Re=Ce=null,vo=!1,t)throw Error(o(300));return e}function Ta(){var e=ti!==0;return ti=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Ce.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function wt(){if(Re===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ie===null?Ce.memoizedState:Ie.next;if(t!==null)Ie=t,Re=e;else{if(e===null)throw Error(o(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ie===null?Ce.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function ni(e,t){return typeof t=="function"?t(e):t}function Pa(e){var t=wt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=Re,l=s.baseQueue,d=i.pending;if(d!==null){if(l!==null){var p=l.next;l.next=d.next,d.next=p}s.baseQueue=l=d,i.pending=null}if(l!==null){d=l.next,s=s.baseState;var x=p=null,j=null,T=d;do{var A=T.lane;if((Dn&A)===A)j!==null&&(j=j.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),s=T.hasEagerState?T.eagerState:e(s,T.action);else{var V={lane:A,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};j===null?(x=j=V,p=s):j=j.next=V,Ce.lanes|=A,Ln|=A}T=T.next}while(T!==null&&T!==d);j===null?p=s:j.next=x,Pt(s,t.memoizedState)||(ot=!0),t.memoizedState=s,t.baseState=p,t.baseQueue=j,i.lastRenderedState=s}if(e=i.interleaved,e!==null){l=e;do d=l.lane,Ce.lanes|=d,Ln|=d,l=l.next;while(l!==e)}else l===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Ea(e){var t=wt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,l=i.pending,d=t.memoizedState;if(l!==null){i.pending=null;var p=l=l.next;do d=e(d,p.action),p=p.next;while(p!==l);Pt(d,t.memoizedState)||(ot=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),i.lastRenderedState=d}return[d,s]}function dd(){}function fd(e,t){var i=Ce,s=wt(),l=t(),d=!Pt(s.memoizedState,l);if(d&&(s.memoizedState=l,ot=!0),s=s.queue,za(pd.bind(null,i,s,e),[e]),s.getSnapshot!==t||d||Ie!==null&&Ie.memoizedState.tag&1){if(i.flags|=2048,ri(9,md.bind(null,i,s,l,t),void 0,null),Oe===null)throw Error(o(349));(Dn&30)!==0||hd(i,t,l)}return l}function hd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function md(e,t,i,s){t.value=i,t.getSnapshot=s,gd(t)&&vd(e)}function pd(e,t,i){return i(function(){gd(t)&&vd(e)})}function gd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Pt(e,i)}catch{return!0}}function vd(e){var t=Gt(e,1);t!==null&&Lt(t,e,1,-1)}function yd(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=a1.bind(null,Ce,e),[t.memoizedState,e]}function ri(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function xd(){return wt().memoizedState}function yo(e,t,i,s){var l=_t();Ce.flags|=e,l.memoizedState=ri(1|t,i,void 0,s===void 0?null:s)}function xo(e,t,i,s){var l=wt();s=s===void 0?null:s;var d=void 0;if(Re!==null){var p=Re.memoizedState;if(d=p.destroy,s!==null&&Na(s,p.deps)){l.memoizedState=ri(t,i,d,s);return}}Ce.flags|=e,l.memoizedState=ri(1|t,i,d,s)}function wd(e,t){return yo(8390656,8,e,t)}function za(e,t){return xo(2048,8,e,t)}function jd(e,t){return xo(4,2,e,t)}function Sd(e,t){return xo(4,4,e,t)}function kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,i){return i=i!=null?i.concat([e]):null,xo(4,4,kd.bind(null,t,e),i)}function Ma(){}function Nd(e,t){var i=wt();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Na(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function Cd(e,t){var i=wt();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Na(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function Td(e,t,i){return(Dn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=i):(Pt(i,t)||(i=ru(),Ce.lanes|=i,Ln|=i,e.baseState=!0),t)}function o1(e,t){var i=pe;pe=i!==0&&4>i?i:4,e(!0);var s=ba.transition;ba.transition={};try{e(!1),t()}finally{pe=i,ba.transition=s}}function Pd(){return wt().memoizedState}function s1(e,t,i){var s=gn(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},Ed(e))zd(t,i);else if(i=sd(e,t,i,s),i!==null){var l=et();Lt(i,e,s,l),Md(i,t,s)}}function a1(e,t,i){var s=gn(e),l={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ed(e))zd(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var p=t.lastRenderedState,x=d(p,i);if(l.hasEagerState=!0,l.eagerState=x,Pt(x,p)){var j=t.interleaved;j===null?(l.next=l,ya(t)):(l.next=j.next,j.next=l),t.interleaved=l;return}}catch{}finally{}i=sd(e,t,l,s),i!==null&&(l=et(),Lt(i,e,s,l),Md(i,t,s))}}function Ed(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function zd(e,t){ei=vo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Md(e,t,i){if((i&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,Ls(e,i)}}var wo={readContext:xt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},l1={readContext:xt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:wd,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,yo(4194308,4,kd.bind(null,t,e),i)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var i=_t();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=_t();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=s1.bind(null,Ce,e),[s.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:yd,useDebugValue:Ma,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=yd(!1),t=e[0];return e=o1.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=Ce,l=_t();if(be){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Oe===null)throw Error(o(349));(Dn&30)!==0||hd(s,t,i)}l.memoizedState=i;var d={value:i,getSnapshot:t};return l.queue=d,wd(pd.bind(null,s,d,e),[e]),s.flags|=2048,ri(9,md.bind(null,s,d,i,t),void 0,null),i},useId:function(){var e=_t(),t=Oe.identifierPrefix;if(be){var i=Wt,s=$t;i=(s&~(1<<32-Tt(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=ti++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=i1++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},c1={readContext:xt,useCallback:Nd,useContext:xt,useEffect:za,useImperativeHandle:bd,useInsertionEffect:jd,useLayoutEffect:Sd,useMemo:Cd,useReducer:Pa,useRef:xd,useState:function(){return Pa(ni)},useDebugValue:Ma,useDeferredValue:function(e){var t=wt();return Td(t,Re.memoizedState,e)},useTransition:function(){var e=Pa(ni)[0],t=wt().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:fd,useId:Pd,unstable_isNewReconciler:!1},u1={readContext:xt,useCallback:Nd,useContext:xt,useEffect:za,useImperativeHandle:bd,useInsertionEffect:jd,useLayoutEffect:Sd,useMemo:Cd,useReducer:Ea,useRef:xd,useState:function(){return Ea(ni)},useDebugValue:Ma,useDeferredValue:function(e){var t=wt();return Re===null?t.memoizedState=e:Td(t,Re.memoizedState,e)},useTransition:function(){var e=Ea(ni)[0],t=wt().memoizedState;return[e,t]},useMutableSource:dd,useSyncExternalStore:fd,useId:Pd,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Da(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:H({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var jo={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=et(),l=gn(e),d=Kt(s,l);d.payload=t,i!=null&&(d.callback=i),t=fn(e,d,l),t!==null&&(Lt(t,e,l,s),ho(t,e,l))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=et(),l=gn(e),d=Kt(s,l);d.tag=1,d.payload=t,i!=null&&(d.callback=i),t=fn(e,d,l),t!==null&&(Lt(t,e,l,s),ho(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=et(),s=gn(e),l=Kt(i,s);l.tag=2,t!=null&&(l.callback=t),t=fn(e,l,s),t!==null&&(Lt(t,e,s,i),ho(t,e,s))}};function Dd(e,t,i,s,l,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,p):t.prototype&&t.prototype.isPureReactComponent?!Hr(i,s)||!Hr(l,d):!0}function Ld(e,t,i){var s=!1,l=cn,d=t.contextType;return typeof d=="object"&&d!==null?d=xt(d):(l=it(t)?Tn:We.current,s=t.contextTypes,d=(s=s!=null)?nr(e,l):cn),t=new t(i,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function Ad(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function La(e,t,i,s){var l=e.stateNode;l.props=i,l.state=e.memoizedState,l.refs={},xa(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=xt(d):(d=it(t)?Tn:We.current,l.context=nr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Da(e,t,d,i),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&jo.enqueueReplaceState(l,l.state,null),mo(e,i,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var i="",s=t;do i+=de(s),s=s.return;while(s);var l=i}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Aa(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Va(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function Vd(e,t,i){i=Kt(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){Po||(Po=!0,Xa=s),Va(e,t)},i}function Rd(e,t,i){i=Kt(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;i.payload=function(){return s(l)},i.callback=function(){Va(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(i.callback=function(){Va(e,t),typeof s!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),i}function Fd(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new d1;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(i)||(l.add(i),e=N1.bind(null,e,t,i),t.then(e,e))}function _d(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Id(e,t,i,s,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Kt(-1,1),t.tag=2,fn(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var f1=X.ReactCurrentOwner,ot=!1;function Je(e,t,i,s){t.child=e===null?od(t,null,i,s):sr(t,e.child,i,s)}function Od(e,t,i,s,l){i=i.render;var d=t.ref;return lr(t,l),s=Ca(e,t,i,s,d,l),i=Ta(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Qt(e,t,l)):(be&&i&&ca(t),t.flags|=1,Je(e,t,s,l),t.child)}function Bd(e,t,i,s,l){if(e===null){var d=i.type;return typeof d=="function"&&!rl(d)&&d.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=d,Ud(e,t,d,s,l)):(e=Ao(i.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var p=d.memoizedProps;if(i=i.compare,i=i!==null?i:Hr,i(p,s)&&e.ref===t.ref)return Qt(e,t,l)}return t.flags|=1,e=yn(d,s),e.ref=t.ref,e.return=t,t.child=e}function Ud(e,t,i,s,l){if(e!==null){var d=e.memoizedProps;if(Hr(d,s)&&e.ref===t.ref)if(ot=!1,t.pendingProps=s=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Qt(e,t,l)}return Ra(e,t,i,s,l)}function Hd(e,t,i){var s=t.pendingProps,l=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(fr,mt),mt|=i;else{if((i&1073741824)===0)return e=d!==null?d.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(fr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:i,ye(fr,mt),mt|=s}else d!==null?(s=d.baseLanes|i,t.memoizedState=null):s=i,ye(fr,mt),mt|=s;return Je(e,t,l,i),t.child}function $d(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,i,s,l){var d=it(i)?Tn:We.current;return d=nr(t,d),lr(t,l),i=Ca(e,t,i,s,d,l),s=Ta(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Qt(e,t,l)):(be&&s&&ca(t),t.flags|=1,Je(e,t,i,l),t.child)}function Wd(e,t,i,s,l){if(it(i)){var d=!0;io(t)}else d=!1;if(lr(t,l),t.stateNode===null)ko(e,t),Ld(t,i,s),La(t,i,s,l),s=!0;else if(e===null){var p=t.stateNode,x=t.memoizedProps;p.props=x;var j=p.context,T=i.contextType;typeof T=="object"&&T!==null?T=xt(T):(T=it(i)?Tn:We.current,T=nr(t,T));var A=i.getDerivedStateFromProps,V=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function";V||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==s||j!==T)&&Ad(t,p,s,T),dn=!1;var M=t.memoizedState;p.state=M,mo(t,s,p,l),j=t.memoizedState,x!==s||M!==j||rt.current||dn?(typeof A=="function"&&(Da(t,i,A,s),j=t.memoizedState),(x=dn||Dd(t,i,x,s,M,j,T))?(V||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=j),p.props=s,p.state=j,p.context=T,s=x):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{p=t.stateNode,ad(e,t),x=t.memoizedProps,T=t.type===t.elementType?x:zt(t.type,x),p.props=T,V=t.pendingProps,M=p.context,j=i.contextType,typeof j=="object"&&j!==null?j=xt(j):(j=it(i)?Tn:We.current,j=nr(t,j));var U=i.getDerivedStateFromProps;(A=typeof U=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(x!==V||M!==j)&&Ad(t,p,s,j),dn=!1,M=t.memoizedState,p.state=M,mo(t,s,p,l);var G=t.memoizedState;x!==V||M!==G||rt.current||dn?(typeof U=="function"&&(Da(t,i,U,s),G=t.memoizedState),(T=dn||Dd(t,i,T,s,M,G,j)||!1)?(A||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,G,j),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,G,j)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||x===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=G),p.props=s,p.state=G,p.context=j,s=T):(typeof p.componentDidUpdate!="function"||x===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),s=!1)}return Fa(e,t,i,s,d,l)}function Fa(e,t,i,s,l,d){$d(e,t);var p=(t.flags&128)!==0;if(!s&&!p)return l&&Xu(t,i,!1),Qt(e,t,d);s=t.stateNode,f1.current=t;var x=p&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&p?(t.child=sr(t,e.child,null,d),t.child=sr(t,null,x,d)):Je(e,t,x,d),t.memoizedState=s.state,l&&Xu(t,i,!0),t.child}function Gd(e){var t=e.stateNode;t.pendingContext?Qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qu(e,t.context,!1),wa(e,t.containerInfo)}function Kd(e,t,i,s,l){return or(),ha(l),t.flags|=256,Je(e,t,i,s),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qd(e,t,i){var s=t.pendingProps,l=Ne.current,d=!1,p=(t.flags&128)!==0,x;if((x=p)||(x=e!==null&&e.memoizedState===null?!1:(l&2)!==0),x?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ye(Ne,l&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=s.children,e=s.fallback,d?(s=t.mode,d=t.child,p={mode:"hidden",children:p},(s&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=p):d=Vo(p,s,0,null),e=Fn(e,s,i,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=Ia(i),t.memoizedState=_a,e):Oa(t,p));if(l=e.memoizedState,l!==null&&(x=l.dehydrated,x!==null))return h1(e,t,p,s,x,l,i);if(d){d=s.fallback,p=t.mode,l=e.child,x=l.sibling;var j={mode:"hidden",children:s.children};return(p&1)===0&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=j,t.deletions=null):(s=yn(l,j),s.subtreeFlags=l.subtreeFlags&14680064),x!==null?d=yn(x,d):(d=Fn(d,p,i,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,p=e.child.memoizedState,p=p===null?Ia(i):{baseLanes:p.baseLanes|i,cachePool:null,transitions:p.transitions},d.memoizedState=p,d.childLanes=e.childLanes&~i,t.memoizedState=_a,s}return d=e.child,e=d.sibling,s=yn(d,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function Oa(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,i,s){return s!==null&&ha(s),sr(t,e.child,null,i),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h1(e,t,i,s,l,d,p){if(i)return t.flags&256?(t.flags&=-257,s=Aa(Error(o(422))),So(e,t,p,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,l=t.mode,s=Vo({mode:"visible",children:s.children},l,0,null),d=Fn(d,l,p,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,(t.mode&1)!==0&&sr(t,e.child,null,p),t.child.memoizedState=Ia(p),t.memoizedState=_a,d);if((t.mode&1)===0)return So(e,t,p,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var x=s.dgst;return s=x,d=Error(o(419)),s=Aa(d,s,void 0),So(e,t,p,s)}if(x=(p&e.childLanes)!==0,ot||x){if(s=Oe,s!==null){switch(p&-p){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(s.suspendedLanes|p))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,Gt(e,l),Lt(s,e,l,-1))}return nl(),s=Aa(Error(o(421))),So(e,t,p,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=C1.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,ht=an(l.nextSibling),ft=t,be=!0,Et=null,e!==null&&(vt[yt++]=$t,vt[yt++]=Wt,vt[yt++]=Pn,$t=e.id,Wt=e.overflow,Pn=t),t=Oa(t,s.children),t.flags|=4096,t)}function Yd(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),va(e.return,t,i)}function Ba(e,t,i,s,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=i,d.tailMode=l)}function Xd(e,t,i){var s=t.pendingProps,l=s.revealOrder,d=s.tail;if(Je(e,t,s.children,i),s=Ne.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yd(e,i,t);else if(e.tag===19)Yd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ye(Ne,s),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(i=t.child,l=null;i!==null;)e=i.alternate,e!==null&&po(e)===null&&(l=i),i=i.sibling;i=l,i===null?(l=t.child,t.child=null):(l=i.sibling,i.sibling=null),Ba(t,!1,l,i,d);break;case"backwards":for(i=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&po(e)===null){t.child=l;break}e=l.sibling,l.sibling=i,i=l,l=e}Ba(t,!0,i,null,d);break;case"together":Ba(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=yn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=yn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function m1(e,t,i){switch(t.tag){case 3:Gd(t),or();break;case 5:ud(t);break;case 1:it(t.type)&&io(t);break;case 4:wa(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;ye(uo,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ye(Ne,Ne.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Qd(e,t,i):(ye(Ne,Ne.current&1),e=Qt(e,t,i),e!==null?e.sibling:null);ye(Ne,Ne.current&1);break;case 19:if(s=(i&t.childLanes)!==0,(e.flags&128)!==0){if(s)return Xd(e,t,i);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(Ne,Ne.current),s)break;return null;case 22:case 23:return t.lanes=0,Hd(e,t,i)}return Qt(e,t,i)}var qd,Ua,Zd,Jd;qd=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ua=function(){},Zd=function(e,t,i,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Mn(Ft.current);var d=null;switch(i){case"input":l=vs(e,l),s=vs(e,s),d=[];break;case"select":l=H({},l,{value:void 0}),s=H({},s,{value:void 0}),d=[];break;case"textarea":l=ws(e,l),s=ws(e,s),d=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=to)}Ss(i,s);var p;i=null;for(T in l)if(!s.hasOwnProperty(T)&&l.hasOwnProperty(T)&&l[T]!=null)if(T==="style"){var x=l[T];for(p in x)x.hasOwnProperty(p)&&(i||(i={}),i[p]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(u.hasOwnProperty(T)?d||(d=[]):(d=d||[]).push(T,null));for(T in s){var j=s[T];if(x=l!=null?l[T]:void 0,s.hasOwnProperty(T)&&j!==x&&(j!=null||x!=null))if(T==="style")if(x){for(p in x)!x.hasOwnProperty(p)||j&&j.hasOwnProperty(p)||(i||(i={}),i[p]="");for(p in j)j.hasOwnProperty(p)&&x[p]!==j[p]&&(i||(i={}),i[p]=j[p])}else i||(d||(d=[]),d.push(T,i)),i=j;else T==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,x=x?x.__html:void 0,j!=null&&x!==j&&(d=d||[]).push(T,j)):T==="children"?typeof j!="string"&&typeof j!="number"||(d=d||[]).push(T,""+j):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(u.hasOwnProperty(T)?(j!=null&&T==="onScroll"&&we("scroll",e),d||x===j||(d=[])):(d=d||[]).push(T,j))}i&&(d=d||[]).push("style",i);var T=d;(t.updateQueue=T)&&(t.flags|=4)}},Jd=function(e,t,i,s){i!==s&&(t.flags|=4)};function ii(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var l=e.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)i|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function p1(e,t,i){var s=t.pendingProps;switch(ua(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return it(t.type)&&ro(),Ke(t),null;case 3:return s=t.stateNode,cr(),je(rt),je(We),ka(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Ja(Et),Et=null))),Ua(e,t),Ke(t),null;case 5:ja(t);var l=Mn(Jr.current);if(i=t.type,e!==null&&t.stateNode!=null)Zd(e,t,i,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return Ke(t),null}if(e=Mn(Ft.current),lo(t)){s=t.stateNode,i=t.type;var d=t.memoizedProps;switch(s[Rt]=t,s[Qr]=d,e=(t.mode&1)!==0,i){case"dialog":we("cancel",s),we("close",s);break;case"iframe":case"object":case"embed":we("load",s);break;case"video":case"audio":for(l=0;l<Wr.length;l++)we(Wr[l],s);break;case"source":we("error",s);break;case"img":case"image":case"link":we("error",s),we("load",s);break;case"details":we("toggle",s);break;case"input":Lc(s,d),we("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},we("invalid",s);break;case"textarea":Rc(s,d),we("invalid",s)}Ss(i,d),l=null;for(var p in d)if(d.hasOwnProperty(p)){var x=d[p];p==="children"?typeof x=="string"?s.textContent!==x&&(d.suppressHydrationWarning!==!0&&eo(s.textContent,x,e),l=["children",x]):typeof x=="number"&&s.textContent!==""+x&&(d.suppressHydrationWarning!==!0&&eo(s.textContent,x,e),l=["children",""+x]):u.hasOwnProperty(p)&&x!=null&&p==="onScroll"&&we("scroll",s)}switch(i){case"input":Mi(s),Vc(s,d,!0);break;case"textarea":Mi(s),_c(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=to)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{p=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ic(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=p.createElement(i,{is:s.is}):(e=p.createElement(i),i==="select"&&(p=e,s.multiple?p.multiple=!0:s.size&&(p.size=s.size))):e=p.createElementNS(e,i),e[Rt]=t,e[Qr]=s,qd(e,t,!1,!1),t.stateNode=e;e:{switch(p=ks(i,s),i){case"dialog":we("cancel",e),we("close",e),l=s;break;case"iframe":case"object":case"embed":we("load",e),l=s;break;case"video":case"audio":for(l=0;l<Wr.length;l++)we(Wr[l],e);l=s;break;case"source":we("error",e),l=s;break;case"img":case"image":case"link":we("error",e),we("load",e),l=s;break;case"details":we("toggle",e),l=s;break;case"input":Lc(e,s),l=vs(e,s),we("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=H({},s,{value:void 0}),we("invalid",e);break;case"textarea":Rc(e,s),l=ws(e,s),we("invalid",e);break;default:l=s}Ss(i,l),x=l;for(d in x)if(x.hasOwnProperty(d)){var j=x[d];d==="style"?Uc(e,j):d==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Oc(e,j)):d==="children"?typeof j=="string"?(i!=="textarea"||j!=="")&&Cr(e,j):typeof j=="number"&&Cr(e,""+j):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(u.hasOwnProperty(d)?j!=null&&d==="onScroll"&&we("scroll",e):j!=null&&W(e,d,j,p))}switch(i){case"input":Mi(e),Vc(e,s,!1);break;case"textarea":Mi(e),_c(e);break;case"option":s.value!=null&&e.setAttribute("value",""+me(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?$n(e,!!s.multiple,d,!1):s.defaultValue!=null&&$n(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=to)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Jd(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(i=Mn(Jr.current),Mn(Ft.current),lo(t)){if(s=t.stateNode,i=t.memoizedProps,s[Rt]=t,(d=s.nodeValue!==i)&&(e=ft,e!==null))switch(e.tag){case 3:eo(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(s.nodeValue,i,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Rt]=t,t.stateNode=s}return Ke(t),null;case 13:if(je(Ne),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&ht!==null&&(t.mode&1)!==0&&(t.flags&128)===0)nd(),or(),t.flags|=98560,d=!1;else if(d=lo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Rt]=t}else or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),d=!1}else Et!==null&&(Ja(Et),Et=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Fe===0&&(Fe=3):nl())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return cr(),Ua(e,t),e===null&&Gr(t.stateNode.containerInfo),Ke(t),null;case 10:return ga(t.type._context),Ke(t),null;case 17:return it(t.type)&&ro(),Ke(t),null;case 19:if(je(Ne),d=t.memoizedState,d===null)return Ke(t),null;if(s=(t.flags&128)!==0,p=d.rendering,p===null)if(s)ii(d,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=po(e),p!==null){for(t.flags|=128,ii(d,!1),s=p.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)d=i,e=s,d.flags&=14680066,p=d.alternate,p===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=p.childLanes,d.lanes=p.lanes,d.child=p.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=p.memoizedProps,d.memoizedState=p.memoizedState,d.updateQueue=p.updateQueue,d.type=p.type,e=p.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return ye(Ne,Ne.current&1|2),t.child}e=e.sibling}d.tail!==null&&De()>hr&&(t.flags|=128,s=!0,ii(d,!1),t.lanes=4194304)}else{if(!s)if(e=po(p),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),ii(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!be)return Ke(t),null}else 2*De()-d.renderingStartTime>hr&&i!==1073741824&&(t.flags|=128,s=!0,ii(d,!1),t.lanes=4194304);d.isBackwards?(p.sibling=t.child,t.child=p):(i=d.last,i!==null?i.sibling=p:t.child=p,d.last=p)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=De(),t.sibling=null,i=Ne.current,ye(Ne,s?i&1|2:i&1),t):(Ke(t),null);case 22:case 23:return tl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(mt&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function g1(e,t){switch(ua(t),t.tag){case 1:return it(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),je(rt),je(We),ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ja(t),null;case 13:if(je(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ne),null;case 4:return cr(),null;case 10:return ga(t.type._context),null;case 22:case 23:return tl(),null;case 24:return null;default:return null}}var bo=!1,Qe=!1,v1=typeof WeakSet=="function"?WeakSet:Set,$=null;function dr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){Ee(e,t,s)}else i.current=null}function Ha(e,t,i){try{i()}catch(s){Ee(e,t,s)}}var ef=!1;function y1(e,t){if(ta=Hi,e=Du(),Ks(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var l=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var p=0,x=-1,j=-1,T=0,A=0,V=e,M=null;t:for(;;){for(var U;V!==i||l!==0&&V.nodeType!==3||(x=p+l),V!==d||s!==0&&V.nodeType!==3||(j=p+s),V.nodeType===3&&(p+=V.nodeValue.length),(U=V.firstChild)!==null;)M=V,V=U;for(;;){if(V===e)break t;if(M===i&&++T===l&&(x=p),M===d&&++A===s&&(j=p),(U=V.nextSibling)!==null)break;V=M,M=V.parentNode}V=U}i=x===-1||j===-1?null:{start:x,end:j}}else i=null}i=i||{start:0,end:0}}else i=null;for(na={focusedElem:e,selectionRange:i},Hi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var G=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var K=G.memoizedProps,Le=G.memoizedState,N=t.stateNode,k=N.getSnapshotBeforeUpdate(t.elementType===t.type?K:zt(t.type,K),Le);N.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(_){Ee(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return G=ef,ef=!1,G}function oi(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&Ha(t,i,d)}l=l.next}while(l!==s)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function $a(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function tf(e){var t=e.alternate;t!==null&&(e.alternate=null,tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Qr],delete t[sa],delete t[e1],delete t[t1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nf(e){return e.tag===5||e.tag===3||e.tag===4}function rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=to));else if(s!==4&&(e=e.child,e!==null))for(Wa(e,t,i),e=e.sibling;e!==null;)Wa(e,t,i),e=e.sibling}function Ga(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ga(e,t,i),e=e.sibling;e!==null;)Ga(e,t,i),e=e.sibling}var Ue=null,Mt=!1;function hn(e,t,i){for(i=i.child;i!==null;)of(e,t,i),i=i.sibling}function of(e,t,i){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Fi,i)}catch{}switch(i.tag){case 5:Qe||dr(i,t);case 6:var s=Ue,l=Mt;Ue=null,hn(e,t,i),Ue=s,Mt=l,Ue!==null&&(Mt?(e=Ue,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Ue.removeChild(i.stateNode));break;case 18:Ue!==null&&(Mt?(e=Ue,i=i.stateNode,e.nodeType===8?oa(e.parentNode,i):e.nodeType===1&&oa(e,i),Fr(e)):oa(Ue,i.stateNode));break;case 4:s=Ue,l=Mt,Ue=i.stateNode.containerInfo,Mt=!0,hn(e,t,i),Ue=s,Mt=l;break;case 0:case 11:case 14:case 15:if(!Qe&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var d=l,p=d.destroy;d=d.tag,p!==void 0&&((d&2)!==0||(d&4)!==0)&&Ha(i,t,p),l=l.next}while(l!==s)}hn(e,t,i);break;case 1:if(!Qe&&(dr(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(x){Ee(i,t,x)}hn(e,t,i);break;case 21:hn(e,t,i);break;case 22:i.mode&1?(Qe=(s=Qe)||i.memoizedState!==null,hn(e,t,i),Qe=s):hn(e,t,i);break;default:hn(e,t,i)}}function sf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new v1),t.forEach(function(s){var l=T1.bind(null,e,s);i.has(s)||(i.add(s),s.then(l,l))})}}function Dt(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];try{var d=e,p=t,x=p;e:for(;x!==null;){switch(x.tag){case 5:Ue=x.stateNode,Mt=!1;break e;case 3:Ue=x.stateNode.containerInfo,Mt=!0;break e;case 4:Ue=x.stateNode.containerInfo,Mt=!0;break e}x=x.return}if(Ue===null)throw Error(o(160));of(d,p,l),Ue=null,Mt=!1;var j=l.alternate;j!==null&&(j.return=null),l.return=null}catch(T){Ee(l,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)af(t,e),t=t.sibling}function af(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),It(e),s&4){try{oi(3,e,e.return),No(3,e)}catch(K){Ee(e,e.return,K)}try{oi(5,e,e.return)}catch(K){Ee(e,e.return,K)}}break;case 1:Dt(t,e),It(e),s&512&&i!==null&&dr(i,i.return);break;case 5:if(Dt(t,e),It(e),s&512&&i!==null&&dr(i,i.return),e.flags&32){var l=e.stateNode;try{Cr(l,"")}catch(K){Ee(e,e.return,K)}}if(s&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,p=i!==null?i.memoizedProps:d,x=e.type,j=e.updateQueue;if(e.updateQueue=null,j!==null)try{x==="input"&&d.type==="radio"&&d.name!=null&&Ac(l,d),ks(x,p);var T=ks(x,d);for(p=0;p<j.length;p+=2){var A=j[p],V=j[p+1];A==="style"?Uc(l,V):A==="dangerouslySetInnerHTML"?Oc(l,V):A==="children"?Cr(l,V):W(l,A,V,T)}switch(x){case"input":ys(l,d);break;case"textarea":Fc(l,d);break;case"select":var M=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var U=d.value;U!=null?$n(l,!!d.multiple,U,!1):M!==!!d.multiple&&(d.defaultValue!=null?$n(l,!!d.multiple,d.defaultValue,!0):$n(l,!!d.multiple,d.multiple?[]:"",!1))}l[Qr]=d}catch(K){Ee(e,e.return,K)}}break;case 6:if(Dt(t,e),It(e),s&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(K){Ee(e,e.return,K)}}break;case 3:if(Dt(t,e),It(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(K){Ee(e,e.return,K)}break;case 4:Dt(t,e),It(e);break;case 13:Dt(t,e),It(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(Ya=De())),s&4&&sf(e);break;case 22:if(A=i!==null&&i.memoizedState!==null,e.mode&1?(Qe=(T=Qe)||A,Dt(t,e),Qe=T):Dt(t,e),It(e),s&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!A&&(e.mode&1)!==0)for($=e,A=e.child;A!==null;){for(V=$=A;$!==null;){switch(M=$,U=M.child,M.tag){case 0:case 11:case 14:case 15:oi(4,M,M.return);break;case 1:dr(M,M.return);var G=M.stateNode;if(typeof G.componentWillUnmount=="function"){s=M,i=M.return;try{t=s,G.props=t.memoizedProps,G.state=t.memoizedState,G.componentWillUnmount()}catch(K){Ee(s,i,K)}}break;case 5:dr(M,M.return);break;case 22:if(M.memoizedState!==null){uf(V);continue}}U!==null?(U.return=M,$=U):uf(V)}A=A.sibling}e:for(A=null,V=e;;){if(V.tag===5){if(A===null){A=V;try{l=V.stateNode,T?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(x=V.stateNode,j=V.memoizedProps.style,p=j!=null&&j.hasOwnProperty("display")?j.display:null,x.style.display=Bc("display",p))}catch(K){Ee(e,e.return,K)}}}else if(V.tag===6){if(A===null)try{V.stateNode.nodeValue=T?"":V.memoizedProps}catch(K){Ee(e,e.return,K)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;A===V&&(A=null),V=V.return}A===V&&(A=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Dt(t,e),It(e),s&4&&sf(e);break;case 21:break;default:Dt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(nf(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(Cr(l,""),s.flags&=-33);var d=rf(e);Ga(e,d,l);break;case 3:case 4:var p=s.stateNode.containerInfo,x=rf(e);Wa(e,x,p);break;default:throw Error(o(161))}}catch(j){Ee(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x1(e,t,i){$=e,lf(e)}function lf(e,t,i){for(var s=(e.mode&1)!==0;$!==null;){var l=$,d=l.child;if(l.tag===22&&s){var p=l.memoizedState!==null||bo;if(!p){var x=l.alternate,j=x!==null&&x.memoizedState!==null||Qe;x=bo;var T=Qe;if(bo=p,(Qe=j)&&!T)for($=l;$!==null;)p=$,j=p.child,p.tag===22&&p.memoizedState!==null?df(l):j!==null?(j.return=p,$=j):df(l);for(;d!==null;)$=d,lf(d),d=d.sibling;$=l,bo=x,Qe=T}cf(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,$=d):cf(e)}}function cf(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||No(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Qe)if(i===null)s.componentDidMount();else{var l=t.elementType===t.type?i.memoizedProps:zt(t.type,i.memoizedProps);s.componentDidUpdate(l,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&cd(t,d,s);break;case 3:var p=t.updateQueue;if(p!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}cd(t,p,i)}break;case 5:var x=t.stateNode;if(i===null&&t.flags&4){i=x;var j=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&i.focus();break;case"img":j.src&&(i.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var A=T.memoizedState;if(A!==null){var V=A.dehydrated;V!==null&&Fr(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Qe||t.flags&512&&$a(t)}catch(M){Ee(t,t.return,M)}}if(t===e){$=null;break}if(i=t.sibling,i!==null){i.return=t.return,$=i;break}$=t.return}}function uf(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var i=t.sibling;if(i!==null){i.return=t.return,$=i;break}$=t.return}}function df(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{No(4,t)}catch(j){Ee(t,i,j)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(j){Ee(t,l,j)}}var d=t.return;try{$a(t)}catch(j){Ee(t,d,j)}break;case 5:var p=t.return;try{$a(t)}catch(j){Ee(t,p,j)}}}catch(j){Ee(t,t.return,j)}if(t===e){$=null;break}var x=t.sibling;if(x!==null){x.return=t.return,$=x;break}$=t.return}}var w1=Math.ceil,Co=X.ReactCurrentDispatcher,Ka=X.ReactCurrentOwner,jt=X.ReactCurrentBatchConfig,ue=0,Oe=null,Ve=null,He=0,mt=0,fr=ln(0),Fe=0,si=null,Ln=0,To=0,Qa=0,ai=null,st=null,Ya=0,hr=1/0,Yt=null,Po=!1,Xa=null,mn=null,Eo=!1,pn=null,zo=0,li=0,qa=null,Mo=-1,Do=0;function et(){return(ue&6)!==0?De():Mo!==-1?Mo:Mo=De()}function gn(e){return(e.mode&1)===0?1:(ue&2)!==0&&He!==0?He&-He:r1.transition!==null?(Do===0&&(Do=ru()),Do):(e=pe,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e)}function Lt(e,t,i,s){if(50<li)throw li=0,qa=null,Error(o(185));Dr(e,i,s),((ue&2)===0||e!==Oe)&&(e===Oe&&((ue&2)===0&&(To|=i),Fe===4&&vn(e,He)),at(e,s),i===1&&ue===0&&(t.mode&1)===0&&(hr=De()+500,oo&&un()))}function at(e,t){var i=e.callbackNode;r0(e,t);var s=Oi(e,e===Oe?He:0);if(s===0)i!==null&&eu(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&eu(i),t===1)e.tag===0?n1(hf.bind(null,e)):qu(hf.bind(null,e)),Z0(function(){(ue&6)===0&&un()}),i=null;else{switch(iu(s)){case 1:i=zs;break;case 4:i=tu;break;case 16:i=Ri;break;case 536870912:i=nu;break;default:i=Ri}i=jf(i,ff.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function ff(e,t){if(Mo=-1,Do=0,(ue&6)!==0)throw Error(o(327));var i=e.callbackNode;if(mr()&&e.callbackNode!==i)return null;var s=Oi(e,e===Oe?He:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Lo(e,s);else{t=s;var l=ue;ue|=2;var d=pf();(Oe!==e||He!==t)&&(Yt=null,hr=De()+500,Vn(e,t));do try{k1();break}catch(x){mf(e,x)}while(!0);pa(),Co.current=d,ue=l,Ve!==null?t=0:(Oe=null,He=0,t=Fe)}if(t!==0){if(t===2&&(l=Ms(e),l!==0&&(s=l,t=Za(e,l))),t===1)throw i=si,Vn(e,0),vn(e,s),at(e,De()),i;if(t===6)vn(e,s);else{if(l=e.current.alternate,(s&30)===0&&!j1(l)&&(t=Lo(e,s),t===2&&(d=Ms(e),d!==0&&(s=d,t=Za(e,d))),t===1))throw i=si,Vn(e,0),vn(e,s),at(e,De()),i;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:Rn(e,st,Yt);break;case 3:if(vn(e,s),(s&130023424)===s&&(t=Ya+500-De(),10<t)){if(Oi(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){et(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ia(Rn.bind(null,e,st,Yt),t);break}Rn(e,st,Yt);break;case 4:if(vn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var p=31-Tt(s);d=1<<p,p=t[p],p>l&&(l=p),s&=~d}if(s=l,s=De()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*w1(s/1960))-s,10<s){e.timeoutHandle=ia(Rn.bind(null,e,st,Yt),s);break}Rn(e,st,Yt);break;case 5:Rn(e,st,Yt);break;default:throw Error(o(329))}}}return at(e,De()),e.callbackNode===i?ff.bind(null,e):null}function Za(e,t){var i=ai;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Lo(e,t),e!==2&&(t=st,st=i,t!==null&&Ja(t)),e}function Ja(e){st===null?st=e:st.push.apply(st,e)}function j1(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var l=i[s],d=l.getSnapshot;l=l.value;try{if(!Pt(d(),l))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Qa,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Tt(t),s=1<<i;e[i]=-1,t&=~s}}function hf(e){if((ue&6)!==0)throw Error(o(327));mr();var t=Oi(e,0);if((t&1)===0)return at(e,De()),null;var i=Lo(e,t);if(e.tag!==0&&i===2){var s=Ms(e);s!==0&&(t=s,i=Za(e,s))}if(i===1)throw i=si,Vn(e,0),vn(e,t),at(e,De()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,st,Yt),at(e,De()),null}function el(e,t){var i=ue;ue|=1;try{return e(t)}finally{ue=i,ue===0&&(hr=De()+500,oo&&un())}}function An(e){pn!==null&&pn.tag===0&&(ue&6)===0&&mr();var t=ue;ue|=1;var i=jt.transition,s=pe;try{if(jt.transition=null,pe=1,e)return e()}finally{pe=s,jt.transition=i,ue=t,(ue&6)===0&&un()}}function tl(){mt=fr.current,je(fr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,q0(i)),Ve!==null)for(i=Ve.return;i!==null;){var s=i;switch(ua(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ro();break;case 3:cr(),je(rt),je(We),ka();break;case 5:ja(s);break;case 4:cr();break;case 13:je(Ne);break;case 19:je(Ne);break;case 10:ga(s.type._context);break;case 22:case 23:tl()}i=i.return}if(Oe=e,Ve=e=yn(e.current,null),He=mt=t,Fe=0,si=null,Qa=To=Ln=0,st=ai=null,zn!==null){for(t=0;t<zn.length;t++)if(i=zn[t],s=i.interleaved,s!==null){i.interleaved=null;var l=s.next,d=i.pending;if(d!==null){var p=d.next;d.next=l,s.next=p}i.pending=s}zn=null}return e}function mf(e,t){do{var i=Ve;try{if(pa(),go.current=wo,vo){for(var s=Ce.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}vo=!1}if(Dn=0,Ie=Re=Ce=null,ei=!1,ti=0,Ka.current=null,i===null||i.return===null){Fe=1,si=t,Ve=null;break}e:{var d=e,p=i.return,x=i,j=t;if(t=He,x.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var T=j,A=x,V=A.tag;if((A.mode&1)===0&&(V===0||V===11||V===15)){var M=A.alternate;M?(A.updateQueue=M.updateQueue,A.memoizedState=M.memoizedState,A.lanes=M.lanes):(A.updateQueue=null,A.memoizedState=null)}var U=_d(p);if(U!==null){U.flags&=-257,Id(U,p,x,d,t),U.mode&1&&Fd(d,T,t),t=U,j=T;var G=t.updateQueue;if(G===null){var K=new Set;K.add(j),t.updateQueue=K}else G.add(j);break e}else{if((t&1)===0){Fd(d,T,t),nl();break e}j=Error(o(426))}}else if(be&&x.mode&1){var Le=_d(p);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Id(Le,p,x,d,t),ha(ur(j,x));break e}}d=j=ur(j,x),Fe!==4&&(Fe=2),ai===null?ai=[d]:ai.push(d),d=p;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var N=Vd(d,j,t);ld(d,N);break e;case 1:x=j;var k=d.type,C=d.stateNode;if((d.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(mn===null||!mn.has(C)))){d.flags|=65536,t&=-t,d.lanes|=t;var _=Rd(d,x,t);ld(d,_);break e}}d=d.return}while(d!==null)}vf(i)}catch(Q){t=Q,Ve===i&&i!==null&&(Ve=i=i.return);continue}break}while(!0)}function pf(){var e=Co.current;return Co.current=wo,e===null?wo:e}function nl(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Oe===null||(Ln&268435455)===0&&(To&268435455)===0||vn(Oe,He)}function Lo(e,t){var i=ue;ue|=2;var s=pf();(Oe!==e||He!==t)&&(Yt=null,Vn(e,t));do try{S1();break}catch(l){mf(e,l)}while(!0);if(pa(),ue=i,Co.current=s,Ve!==null)throw Error(o(261));return Oe=null,He=0,Fe}function S1(){for(;Ve!==null;)gf(Ve)}function k1(){for(;Ve!==null&&!Qp();)gf(Ve)}function gf(e){var t=wf(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?vf(e):Ve=t,Ka.current=null}function vf(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=p1(i,t,mt),i!==null){Ve=i;return}}else{if(i=g1(i,t),i!==null){i.flags&=32767,Ve=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Ve=null;return}}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Fe===0&&(Fe=5)}function Rn(e,t,i){var s=pe,l=jt.transition;try{jt.transition=null,pe=1,b1(e,t,i,s)}finally{jt.transition=l,pe=s}return null}function b1(e,t,i,s){do mr();while(pn!==null);if((ue&6)!==0)throw Error(o(327));i=e.finishedWork;var l=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=i.lanes|i.childLanes;if(i0(e,d),e===Oe&&(Ve=Oe=null,He=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Eo||(Eo=!0,jf(Ri,function(){return mr(),null})),d=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||d){d=jt.transition,jt.transition=null;var p=pe;pe=1;var x=ue;ue|=4,Ka.current=null,y1(e,i),af(i,e),$0(na),Hi=!!ta,na=ta=null,e.current=i,x1(i),Yp(),ue=x,pe=p,jt.transition=d}else e.current=i;if(Eo&&(Eo=!1,pn=e,zo=l),d=e.pendingLanes,d===0&&(mn=null),Zp(i.stateNode),at(e,De()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)l=t[i],s(l.value,{componentStack:l.stack,digest:l.digest});if(Po)throw Po=!1,e=Xa,Xa=null,e;return(zo&1)!==0&&e.tag!==0&&mr(),d=e.pendingLanes,(d&1)!==0?e===qa?li++:(li=0,qa=e):li=0,un(),null}function mr(){if(pn!==null){var e=iu(zo),t=jt.transition,i=pe;try{if(jt.transition=null,pe=16>e?16:e,pn===null)var s=!1;else{if(e=pn,pn=null,zo=0,(ue&6)!==0)throw Error(o(331));var l=ue;for(ue|=4,$=e.current;$!==null;){var d=$,p=d.child;if(($.flags&16)!==0){var x=d.deletions;if(x!==null){for(var j=0;j<x.length;j++){var T=x[j];for($=T;$!==null;){var A=$;switch(A.tag){case 0:case 11:case 15:oi(8,A,d)}var V=A.child;if(V!==null)V.return=A,$=V;else for(;$!==null;){A=$;var M=A.sibling,U=A.return;if(tf(A),A===T){$=null;break}if(M!==null){M.return=U,$=M;break}$=U}}}var G=d.alternate;if(G!==null){var K=G.child;if(K!==null){G.child=null;do{var Le=K.sibling;K.sibling=null,K=Le}while(K!==null)}}$=d}}if((d.subtreeFlags&2064)!==0&&p!==null)p.return=d,$=p;else e:for(;$!==null;){if(d=$,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:oi(9,d,d.return)}var N=d.sibling;if(N!==null){N.return=d.return,$=N;break e}$=d.return}}var k=e.current;for($=k;$!==null;){p=$;var C=p.child;if((p.subtreeFlags&2064)!==0&&C!==null)C.return=p,$=C;else e:for(p=k;$!==null;){if(x=$,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:No(9,x)}}catch(Q){Ee(x,x.return,Q)}if(x===p){$=null;break e}var _=x.sibling;if(_!==null){_.return=x.return,$=_;break e}$=x.return}}if(ue=l,un(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Fi,e)}catch{}s=!0}return s}finally{pe=i,jt.transition=t}}return!1}function yf(e,t,i){t=ur(i,t),t=Vd(e,t,1),e=fn(e,t,1),t=et(),e!==null&&(Dr(e,1,t),at(e,t))}function Ee(e,t,i){if(e.tag===3)yf(e,e,i);else for(;t!==null;){if(t.tag===3){yf(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(mn===null||!mn.has(s))){e=ur(i,e),e=Rd(t,e,1),t=fn(t,e,1),e=et(),t!==null&&(Dr(t,1,e),at(t,e));break}}t=t.return}}function N1(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&i,Oe===e&&(He&i)===i&&(Fe===4||Fe===3&&(He&130023424)===He&&500>De()-Ya?Vn(e,0):Qa|=i),at(e,t)}function xf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ii,Ii<<=1,(Ii&130023424)===0&&(Ii=4194304)));var i=et();e=Gt(e,t),e!==null&&(Dr(e,t,i),at(e,i))}function C1(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),xf(e,i)}function T1(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(i=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),xf(e,i)}var wf;wf=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)ot=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return ot=!1,m1(e,t,i);ot=(e.flags&131072)!==0}else ot=!1,be&&(t.flags&1048576)!==0&&Zu(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ko(e,t),e=t.pendingProps;var l=nr(t,We.current);lr(t,i),l=Ca(null,t,s,e,l,i);var d=Ta();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(s)?(d=!0,io(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,xa(t),l.updater=jo,t.stateNode=l,l._reactInternals=t,La(t,s,e,i),t=Fa(null,t,s,!0,d,i)):(t.tag=0,be&&d&&ca(t),Je(null,t,l,i),t=t.child),t;case 16:s=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=E1(s),e=zt(s,e),l){case 0:t=Ra(null,t,s,e,i);break e;case 1:t=Wd(null,t,s,e,i);break e;case 11:t=Od(null,t,s,e,i);break e;case 14:t=Bd(null,t,s,zt(s.type,e),i);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:zt(s,l),Ra(e,t,s,l,i);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:zt(s,l),Wd(e,t,s,l,i);case 3:e:{if(Gd(t),e===null)throw Error(o(387));s=t.pendingProps,d=t.memoizedState,l=d.element,ad(e,t),mo(t,s,null,i);var p=t.memoizedState;if(s=p.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=ur(Error(o(423)),t),t=Kd(e,t,s,i,l);break e}else if(s!==l){l=ur(Error(o(424)),t),t=Kd(e,t,s,i,l);break e}else for(ht=an(t.stateNode.containerInfo.firstChild),ft=t,be=!0,Et=null,i=od(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(or(),s===l){t=Qt(e,t,i);break e}Je(e,t,s,i)}t=t.child}return t;case 5:return ud(t),e===null&&fa(t),s=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,p=l.children,ra(s,l)?p=null:d!==null&&ra(s,d)&&(t.flags|=32),$d(e,t),Je(e,t,p,i),t.child;case 6:return e===null&&fa(t),null;case 13:return Qd(e,t,i);case 4:return wa(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=sr(t,null,s,i):Je(e,t,s,i),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:zt(s,l),Od(e,t,s,l,i);case 7:return Je(e,t,t.pendingProps,i),t.child;case 8:return Je(e,t,t.pendingProps.children,i),t.child;case 12:return Je(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,d=t.memoizedProps,p=l.value,ye(uo,s._currentValue),s._currentValue=p,d!==null)if(Pt(d.value,p)){if(d.children===l.children&&!rt.current){t=Qt(e,t,i);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var x=d.dependencies;if(x!==null){p=d.child;for(var j=x.firstContext;j!==null;){if(j.context===s){if(d.tag===1){j=Kt(-1,i&-i),j.tag=2;var T=d.updateQueue;if(T!==null){T=T.shared;var A=T.pending;A===null?j.next=j:(j.next=A.next,A.next=j),T.pending=j}}d.lanes|=i,j=d.alternate,j!==null&&(j.lanes|=i),va(d.return,i,t),x.lanes|=i;break}j=j.next}}else if(d.tag===10)p=d.type===t.type?null:d.child;else if(d.tag===18){if(p=d.return,p===null)throw Error(o(341));p.lanes|=i,x=p.alternate,x!==null&&(x.lanes|=i),va(p,i,t),p=d.sibling}else p=d.child;if(p!==null)p.return=d;else for(p=d;p!==null;){if(p===t){p=null;break}if(d=p.sibling,d!==null){d.return=p.return,p=d;break}p=p.return}d=p}Je(e,t,l.children,i),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,lr(t,i),l=xt(l),s=s(l),t.flags|=1,Je(e,t,s,i),t.child;case 14:return s=t.type,l=zt(s,t.pendingProps),l=zt(s.type,l),Bd(e,t,s,l,i);case 15:return Ud(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:zt(s,l),ko(e,t),t.tag=1,it(s)?(e=!0,io(t)):e=!1,lr(t,i),Ld(t,s,l),La(t,s,l,i),Fa(null,t,s,!0,e,i);case 19:return Xd(e,t,i);case 22:return Hd(e,t,i)}throw Error(o(156,t.tag))};function jf(e,t){return Jc(e,t)}function P1(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,i,s){return new P1(e,t,i,s)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E1(e){if(typeof e=="function")return rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===Ct)return 14}return 2}function yn(e,t){var i=e.alternate;return i===null?(i=St(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ao(e,t,i,s,l,d){var p=2;if(s=e,typeof e=="function")rl(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case ce:return Fn(i.children,l,d,t);case q:p=8,l|=8;break;case xe:return e=St(12,i,t,l|2),e.elementType=xe,e.lanes=d,e;case qe:return e=St(13,i,t,l),e.elementType=qe,e.lanes=d,e;case nt:return e=St(19,i,t,l),e.elementType=nt,e.lanes=d,e;case se:return Vo(i,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:p=10;break e;case tt:p=9;break e;case ct:p=11;break e;case Ct:p=14;break e;case Ze:p=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=St(p,i,t,l),t.elementType=e,t.type=s,t.lanes=d,t}function Fn(e,t,i,s){return e=St(7,e,s,t),e.lanes=i,e}function Vo(e,t,i,s){return e=St(22,e,s,t),e.elementType=se,e.lanes=i,e.stateNode={isHidden:!1},e}function il(e,t,i){return e=St(6,e,null,t),e.lanes=i,e}function ol(e,t,i){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z1(e,t,i,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function sl(e,t,i,s,l,d,p,x,j){return e=new z1(e,t,i,x,j),t===1?(t=1,d===!0&&(t|=8)):t=0,d=St(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(d),e}function M1(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function Sf(e){if(!e)return cn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(it(i))return Yu(e,i,t)}return t}function kf(e,t,i,s,l,d,p,x,j){return e=sl(i,s,!0,e,l,d,p,x,j),e.context=Sf(null),i=e.current,s=et(),l=gn(i),d=Kt(s,l),d.callback=t??null,fn(i,d,l),e.current.lanes=l,Dr(e,l,s),at(e,s),e}function Ro(e,t,i,s){var l=t.current,d=et(),p=gn(l);return i=Sf(i),t.context===null?t.context=i:t.pendingContext=i,t=Kt(d,p),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=fn(l,t,p),e!==null&&(Lt(e,l,p,d),ho(e,l,p)),p}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function al(e,t){bf(e,t),(e=e.alternate)&&bf(e,t)}function D1(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}_o.prototype.render=ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ro(e,t,null,null)},_o.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ro(null,e,null,null)}),t[Ut]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var i=0;i<rn.length&&t!==0&&t<rn[i].priority;i++);rn.splice(i,0,e),i===0&&uu(e)}};function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cf(){}function L1(e,t,i,s,l){if(l){if(typeof s=="function"){var d=s;s=function(){var T=Fo(p);d.call(T)}}var p=kf(t,s,e,0,null,!1,!1,"",Cf);return e._reactRootContainer=p,e[Ut]=p.current,Gr(e.nodeType===8?e.parentNode:e),An(),p}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var x=s;s=function(){var T=Fo(j);x.call(T)}}var j=sl(e,0,!1,null,null,!1,!1,"",Cf);return e._reactRootContainer=j,e[Ut]=j.current,Gr(e.nodeType===8?e.parentNode:e),An(function(){Ro(t,j,i,s)}),j}function Oo(e,t,i,s,l){var d=i._reactRootContainer;if(d){var p=d;if(typeof l=="function"){var x=l;l=function(){var j=Fo(p);x.call(j)}}Ro(t,p,e,l)}else p=L1(i,t,e,l,s);return Fo(p)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Mr(t.pendingLanes);i!==0&&(Ls(t,i|1),at(t,De()),(ue&6)===0&&(hr=De()+500,un()))}break;case 13:An(function(){var s=Gt(e,1);if(s!==null){var l=et();Lt(s,e,1,l)}}),al(e,1)}},As=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var i=et();Lt(t,e,134217728,i)}al(e,134217728)}},su=function(e){if(e.tag===13){var t=gn(e),i=Gt(e,t);if(i!==null){var s=et();Lt(i,e,t,s)}al(e,t)}},au=function(){return pe},lu=function(e,t){var i=pe;try{return pe=e,t()}finally{pe=i}},Cs=function(e,t,i){switch(t){case"input":if(ys(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var l=no(s);if(!l)throw Error(o(90));Dc(s),ys(s,l)}}}break;case"textarea":Fc(e,i);break;case"select":t=i.value,t!=null&&$n(e,!!i.multiple,t,!1)}},Gc=el,Kc=An;var A1={usingClientEntryPoint:!1,Events:[Yr,er,no,$c,Wc,el]},ci={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V1={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||D1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Fi=Bo.inject(V1),Vt=Bo}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1,lt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cl(t))throw Error(o(200));return M1(e,t,null,i)},lt.createRoot=function(e,t){if(!cl(e))throw Error(o(299));var i=!1,s="",l=Nf;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=sl(e,1,!1,null,null,i,!1,s,l),e[Ut]=t.current,Gr(e.nodeType===8?e.parentNode:e),new ll(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return An(e)},lt.hydrate=function(e,t,i){if(!Io(t))throw Error(o(200));return Oo(null,e,t,!0,i)},lt.hydrateRoot=function(e,t,i){if(!cl(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,l=!1,d="",p=Nf;if(i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),t=kf(t,null,e,1,i??null,l,!1,d,p),e[Ut]=t.current,Gr(e),s)for(e=0;e<s.length;e++)i=s[e],l=i._getVersion,l=l(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,l]:t.mutableSourceEagerHydrationData.push(i,l);return new _o(t)},lt.render=function(e,t,i){if(!Io(t))throw Error(o(200));return Oo(null,e,t,!1,i)},lt.unmountComponentAtNode=function(e){if(!Io(e))throw Error(o(40));return e._reactRootContainer?(An(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1},lt.unstable_batchedUpdates=el,lt.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!Io(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Oo(e,t,i,!1,s)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Af;function H1(){if(Af)return fl.exports;Af=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),fl.exports=U1(),fl.exports}var Vf;function $1(){if(Vf)return Uo;Vf=1;var n=H1();return Uo.createRoot=n.createRoot,Uo.hydrateRoot=n.hydrateRoot,Uo}var W1=$1();const G1=nm(W1),ql=R.createContext({});function Zl(n){const r=R.useRef(null);return r.current===null&&(r.current=n()),r.current}const ds=R.createContext(null),Jl=R.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class K1 extends R.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=o.offsetHeight||0,a.width=o.offsetWidth||0,a.top=o.offsetTop,a.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Q1({children:n,isPresent:r}){const o=R.useId(),a=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0}),{nonce:h}=R.useContext(Jl);return R.useInsertionEffect(()=>{const{width:f,height:m,top:g,left:v}=u.current;if(r||!a.current||!f||!m)return;a.current.dataset.motionPopId=o;const y=document.createElement("style");return h&&(y.nonce=h),document.head.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            top: ${g}px !important;
            left: ${v}px !important;
          }
        `),()=>{document.head.removeChild(y)}},[r]),c.jsx(K1,{isPresent:r,childRef:a,sizeRef:u,children:R.cloneElement(n,{ref:a})})}const Y1=({children:n,initial:r,isPresent:o,onExitComplete:a,custom:u,presenceAffectsLayout:h,mode:f})=>{const m=Zl(X1),g=R.useId(),v=R.useCallback(w=>{m.set(w,!0);for(const S of m.values())if(!S)return;a&&a()},[m,a]),y=R.useMemo(()=>({id:g,initial:r,isPresent:o,custom:u,onExitComplete:v,register:w=>(m.set(w,!1),()=>m.delete(w))}),h?[Math.random(),v]:[o,v]);return R.useMemo(()=>{m.forEach((w,S)=>m.set(S,!1))},[o]),R.useEffect(()=>{!o&&!m.size&&a&&a()},[o]),f==="popLayout"&&(n=c.jsx(Q1,{isPresent:o,children:n})),c.jsx(ds.Provider,{value:y,children:n})};function X1(){return new Map}function rm(n=!0){const r=R.useContext(ds);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:a,register:u}=r,h=R.useId();R.useEffect(()=>{n&&u(h)},[n]);const f=R.useCallback(()=>n&&a&&a(h),[h,a,n]);return!o&&a?[!1,f]:[!0]}const Ho=n=>n.key||"";function Rf(n){const r=[];return R.Children.forEach(n,o=>{R.isValidElement(o)&&r.push(o)}),r}const ec=typeof window<"u",im=ec?R.useLayoutEffect:R.useEffect,om=({children:n,custom:r,initial:o=!0,onExitComplete:a,presenceAffectsLayout:u=!0,mode:h="sync",propagate:f=!1})=>{const[m,g]=rm(f),v=R.useMemo(()=>Rf(n),[n]),y=f&&!m?[]:v.map(Ho),w=R.useRef(!0),S=R.useRef(v),P=Zl(()=>new Map),[z,E]=R.useState(v),[D,F]=R.useState(v);im(()=>{w.current=!1,S.current=v;for(let X=0;X<D.length;X++){const B=Ho(D[X]);y.includes(B)?P.delete(B):P.get(B)!==!0&&P.set(B,!1)}},[D,y.length,y.join("-")]);const O=[];if(v!==z){let X=[...v];for(let B=0;B<D.length;B++){const te=D[B],ce=Ho(te);y.includes(ce)||(X.splice(B,0,te),O.push(te))}h==="wait"&&O.length&&(X=O),F(Rf(X)),E(v);return}const{forceRender:W}=R.useContext(ql);return c.jsx(c.Fragment,{children:D.map(X=>{const B=Ho(X),te=f&&!m?!1:v===D||y.includes(B),ce=()=>{if(P.has(B))P.set(B,!0);else return;let q=!0;P.forEach(xe=>{xe||(q=!1)}),q&&(W==null||W(),F(S.current),f&&(g==null||g()),a&&a())};return c.jsx(Y1,{isPresent:te,initial:!w.current||o?void 0:!1,custom:te?void 0:r,presenceAffectsLayout:u,mode:h,onExitComplete:te?void 0:ce,children:X},B)})})},pt=n=>n;let sm=pt;function tc(n){let r;return()=>(r===void 0&&(r=n()),r)}const wr=(n,r,o)=>{const a=r-n;return a===0?1:(o-n)/a},Xt=n=>n*1e3,qt=n=>n/1e3,q1={useManualTiming:!1};function Z1(n){let r=new Set,o=new Set,a=!1,u=!1;const h=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(v){h.has(v)&&(g.schedule(v),n()),v(f)}const g={schedule:(v,y=!1,w=!1)=>{const P=w&&a?r:o;return y&&h.add(v),P.has(v)||P.add(v),v},cancel:v=>{o.delete(v),h.delete(v)},process:v=>{if(f=v,a){u=!0;return}a=!0,[r,o]=[o,r],r.forEach(m),r.clear(),a=!1,u&&(u=!1,g.process(v))}};return g}const $o=["read","resolveKeyframes","update","preRender","render","postRender"],J1=40;function am(n,r){let o=!1,a=!0;const u={delta:0,timestamp:0,isProcessing:!1},h=()=>o=!0,f=$o.reduce((F,O)=>(F[O]=Z1(h),F),{}),{read:m,resolveKeyframes:g,update:v,preRender:y,render:w,postRender:S}=f,P=()=>{const F=performance.now();o=!1,u.delta=a?1e3/60:Math.max(Math.min(F-u.timestamp,J1),1),u.timestamp=F,u.isProcessing=!0,m.process(u),g.process(u),v.process(u),y.process(u),w.process(u),S.process(u),u.isProcessing=!1,o&&r&&(a=!1,n(P))},z=()=>{o=!0,a=!0,u.isProcessing||n(P)};return{schedule:$o.reduce((F,O)=>{const W=f[O];return F[O]=(X,B=!1,te=!1)=>(o||z(),W.schedule(X,B,te)),F},{}),cancel:F=>{for(let O=0;O<$o.length;O++)f[$o[O]].cancel(F)},state:u,steps:f}}const{schedule:Se,cancel:Sn,state:$e,steps:pl}=am(typeof requestAnimationFrame<"u"?requestAnimationFrame:pt,!0),lm=R.createContext({strict:!1}),Ff={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},jr={};for(const n in Ff)jr[n]={isEnabled:r=>Ff[n].some(o=>!!r[o])};function eg(n){for(const r in n)jr[r]={...jr[r],...n[r]}}const tg=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Jo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||tg.has(n)}let cm=n=>!Jo(n);function ng(n){n&&(cm=r=>r.startsWith("on")?!Jo(r):n(r))}try{ng(require("@emotion/is-prop-valid").default)}catch{}function rg(n,r,o){const a={};for(const u in n)u==="values"&&typeof n.values=="object"||(cm(u)||o===!0&&Jo(u)||!r&&!Jo(u)||n.draggable&&u.startsWith("onDrag"))&&(a[u]=n[u]);return a}function ig(n){if(typeof Proxy>"u")return n;const r=new Map,o=(...a)=>n(...a);return new Proxy(o,{get:(a,u)=>u==="create"?n:(r.has(u)||r.set(u,n(u)),r.get(u))})}const fs=R.createContext({});function ji(n){return typeof n=="string"||Array.isArray(n)}function hs(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const nc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rc=["initial",...nc];function ms(n){return hs(n.animate)||rc.some(r=>ji(n[r]))}function um(n){return!!(ms(n)||n.variants)}function og(n,r){if(ms(n)){const{initial:o,animate:a}=n;return{initial:o===!1||ji(o)?o:void 0,animate:ji(a)?a:void 0}}return n.inherit!==!1?r:{}}function sg(n){const{initial:r,animate:o}=og(n,R.useContext(fs));return R.useMemo(()=>({initial:r,animate:o}),[_f(r),_f(o)])}function _f(n){return Array.isArray(n)?n.join(" "):n}const ag=Symbol.for("motionComponentSymbol");function pr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function lg(n,r,o){return R.useCallback(a=>{a&&n.onMount&&n.onMount(a),r&&(a?r.mount(a):r.unmount()),o&&(typeof o=="function"?o(a):pr(o)&&(o.current=a))},[r])}const ic=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),cg="framerAppearId",dm="data-"+ic(cg),{schedule:oc}=am(queueMicrotask,!1),fm=R.createContext({});function ug(n,r,o,a,u){var h,f;const{visualElement:m}=R.useContext(fs),g=R.useContext(lm),v=R.useContext(ds),y=R.useContext(Jl).reducedMotion,w=R.useRef(null);a=a||g.renderer,!w.current&&a&&(w.current=a(n,{visualState:r,parent:m,props:o,presenceContext:v,blockInitialAnimation:v?v.initial===!1:!1,reducedMotionConfig:y}));const S=w.current,P=R.useContext(fm);S&&!S.projection&&u&&(S.type==="html"||S.type==="svg")&&dg(w.current,o,u,P);const z=R.useRef(!1);R.useInsertionEffect(()=>{S&&z.current&&S.update(o,v)});const E=o[dm],D=R.useRef(!!E&&!(!((h=window.MotionHandoffIsComplete)===null||h===void 0)&&h.call(window,E))&&((f=window.MotionHasOptimisedAnimation)===null||f===void 0?void 0:f.call(window,E)));return im(()=>{S&&(z.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),oc.render(S.render),D.current&&S.animationState&&S.animationState.animateChanges())}),R.useEffect(()=>{S&&(!D.current&&S.animationState&&S.animationState.animateChanges(),D.current&&(queueMicrotask(()=>{var F;(F=window.MotionHandoffMarkAsComplete)===null||F===void 0||F.call(window,E)}),D.current=!1))}),S}function dg(n,r,o,a){const{layoutId:u,layout:h,drag:f,dragConstraints:m,layoutScroll:g,layoutRoot:v}=r;n.projection=new o(n.latestValues,r["data-framer-portal-id"]?void 0:hm(n.parent)),n.projection.setOptions({layoutId:u,layout:h,alwaysMeasureLayout:!!f||m&&pr(m),visualElement:n,animationType:typeof h=="string"?h:"both",initialPromotionConfig:a,layoutScroll:g,layoutRoot:v})}function hm(n){if(n)return n.options.allowProjection!==!1?n.projection:hm(n.parent)}function fg({preloadedFeatures:n,createVisualElement:r,useRender:o,useVisualState:a,Component:u}){var h,f;n&&eg(n);function m(v,y){let w;const S={...R.useContext(Jl),...v,layoutId:hg(v)},{isStatic:P}=S,z=sg(v),E=a(v,P);if(!P&&ec){mg();const D=pg(S);w=D.MeasureLayout,z.visualElement=ug(u,E,S,r,D.ProjectionNode)}return c.jsxs(fs.Provider,{value:z,children:[w&&z.visualElement?c.jsx(w,{visualElement:z.visualElement,...S}):null,o(u,v,lg(E,z.visualElement,y),E,P,z.visualElement)]})}m.displayName=`motion.${typeof u=="string"?u:`create(${(f=(h=u.displayName)!==null&&h!==void 0?h:u.name)!==null&&f!==void 0?f:""})`}`;const g=R.forwardRef(m);return g[ag]=u,g}function hg({layoutId:n}){const r=R.useContext(ql).id;return r&&n!==void 0?r+"-"+n:n}function mg(n,r){R.useContext(lm).strict}function pg(n){const{drag:r,layout:o}=jr;if(!r&&!o)return{};const a={...r,...o};return{MeasureLayout:r!=null&&r.isEnabled(n)||o!=null&&o.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const gg=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sc(n){return typeof n!="string"||n.includes("-")?!1:!!(gg.indexOf(n)>-1||/[A-Z]/u.test(n))}function If(n){const r=[{},{}];return n==null||n.values.forEach((o,a)=>{r[0][a]=o.get(),r[1][a]=o.getVelocity()}),r}function ac(n,r,o,a){if(typeof r=="function"){const[u,h]=If(a);r=r(o!==void 0?o:n.custom,u,h)}if(typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"){const[u,h]=If(a);r=r(o!==void 0?o:n.custom,u,h)}return r}const El=n=>Array.isArray(n),vg=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),yg=n=>El(n)?n[n.length-1]||0:n,Xe=n=>!!(n&&n.getVelocity);function Qo(n){const r=Xe(n)?n.get():n;return vg(r)?r.toValue():r}function xg({scrapeMotionValuesFromProps:n,createRenderState:r,onUpdate:o},a,u,h){const f={latestValues:wg(a,u,h,n),renderState:r()};return o&&(f.onMount=m=>o({props:a,current:m,...f}),f.onUpdate=m=>o(m)),f}const mm=n=>(r,o)=>{const a=R.useContext(fs),u=R.useContext(ds),h=()=>xg(n,r,a,u);return o?h():Zl(h)};function wg(n,r,o,a){const u={},h=a(n,{});for(const S in h)u[S]=Qo(h[S]);let{initial:f,animate:m}=n;const g=ms(n),v=um(n);r&&v&&!g&&n.inherit!==!1&&(f===void 0&&(f=r.initial),m===void 0&&(m=r.animate));let y=o?o.initial===!1:!1;y=y||f===!1;const w=y?m:f;if(w&&typeof w!="boolean"&&!hs(w)){const S=Array.isArray(w)?w:[w];for(let P=0;P<S.length;P++){const z=ac(n,S[P]);if(z){const{transitionEnd:E,transition:D,...F}=z;for(const O in F){let W=F[O];if(Array.isArray(W)){const X=y?W.length-1:0;W=W[X]}W!==null&&(u[O]=W)}for(const O in E)u[O]=E[O]}}}return u}const kr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Hn=new Set(kr),pm=n=>r=>typeof r=="string"&&r.startsWith(n),gm=pm("--"),jg=pm("var(--"),lc=n=>jg(n)?Sg.test(n.split("/*")[0].trim()):!1,Sg=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,vm=(n,r)=>r&&typeof n=="number"?r.transform(n):n,Zt=(n,r,o)=>o>r?r:o<n?n:o,br={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Si={...br,transform:n=>Zt(0,1,n)},Wo={...br,default:1},Ci=n=>({test:r=>typeof r=="string"&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),wn=Ci("deg"),Ot=Ci("%"),ne=Ci("px"),kg=Ci("vh"),bg=Ci("vw"),Of={...Ot,parse:n=>Ot.parse(n)/100,transform:n=>Ot.transform(n*100)},Ng={borderWidth:ne,borderTopWidth:ne,borderRightWidth:ne,borderBottomWidth:ne,borderLeftWidth:ne,borderRadius:ne,radius:ne,borderTopLeftRadius:ne,borderTopRightRadius:ne,borderBottomRightRadius:ne,borderBottomLeftRadius:ne,width:ne,maxWidth:ne,height:ne,maxHeight:ne,top:ne,right:ne,bottom:ne,left:ne,padding:ne,paddingTop:ne,paddingRight:ne,paddingBottom:ne,paddingLeft:ne,margin:ne,marginTop:ne,marginRight:ne,marginBottom:ne,marginLeft:ne,backgroundPositionX:ne,backgroundPositionY:ne},Cg={rotate:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scale:Wo,scaleX:Wo,scaleY:Wo,scaleZ:Wo,skew:wn,skewX:wn,skewY:wn,distance:ne,translateX:ne,translateY:ne,translateZ:ne,x:ne,y:ne,z:ne,perspective:ne,transformPerspective:ne,opacity:Si,originX:Of,originY:Of,originZ:ne},Bf={...br,transform:Math.round},cc={...Ng,...Cg,zIndex:Bf,size:ne,fillOpacity:Si,strokeOpacity:Si,numOctaves:Bf},Tg={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Pg=kr.length;function Eg(n,r,o){let a="",u=!0;for(let h=0;h<Pg;h++){const f=kr[h],m=n[f];if(m===void 0)continue;let g=!0;if(typeof m=="number"?g=m===(f.startsWith("scale")?1:0):g=parseFloat(m)===0,!g||o){const v=vm(m,cc[f]);if(!g){u=!1;const y=Tg[f]||f;a+=`${y}(${v}) `}o&&(r[f]=v)}}return a=a.trim(),o?a=o(r,u?"":a):u&&(a="none"),a}function uc(n,r,o){const{style:a,vars:u,transformOrigin:h}=n;let f=!1,m=!1;for(const g in r){const v=r[g];if(Hn.has(g)){f=!0;continue}else if(gm(g)){u[g]=v;continue}else{const y=vm(v,cc[g]);g.startsWith("origin")?(m=!0,h[g]=y):a[g]=y}}if(r.transform||(f||o?a.transform=Eg(r,n.transform,o):a.transform&&(a.transform="none")),m){const{originX:g="50%",originY:v="50%",originZ:y=0}=h;a.transformOrigin=`${g} ${v} ${y}`}}const zg={offset:"stroke-dashoffset",array:"stroke-dasharray"},Mg={offset:"strokeDashoffset",array:"strokeDasharray"};function Dg(n,r,o=1,a=0,u=!0){n.pathLength=1;const h=u?zg:Mg;n[h.offset]=ne.transform(-a);const f=ne.transform(r),m=ne.transform(o);n[h.array]=`${f} ${m}`}function Uf(n,r,o){return typeof n=="string"?n:ne.transform(r+o*n)}function Lg(n,r,o){const a=Uf(r,n.x,n.width),u=Uf(o,n.y,n.height);return`${a} ${u}`}function dc(n,{attrX:r,attrY:o,attrScale:a,originX:u,originY:h,pathLength:f,pathSpacing:m=1,pathOffset:g=0,...v},y,w){if(uc(n,v,w),y){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:S,style:P,dimensions:z}=n;S.transform&&(z&&(P.transform=S.transform),delete S.transform),z&&(u!==void 0||h!==void 0||P.transform)&&(P.transformOrigin=Lg(z,u!==void 0?u:.5,h!==void 0?h:.5)),r!==void 0&&(S.x=r),o!==void 0&&(S.y=o),a!==void 0&&(S.scale=a),f!==void 0&&Dg(S,f,m,g,!1)}const fc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),ym=()=>({...fc(),attrs:{}}),hc=n=>typeof n=="string"&&n.toLowerCase()==="svg";function xm(n,{style:r,vars:o},a,u){Object.assign(n.style,r,u&&u.getProjectionStyles(a));for(const h in o)n.style.setProperty(h,o[h])}const wm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function jm(n,r,o,a){xm(n,r,void 0,a);for(const u in r.attrs)n.setAttribute(wm.has(u)?u:ic(u),r.attrs[u])}const es={};function Ag(n){Object.assign(es,n)}function Sm(n,{layout:r,layoutId:o}){return Hn.has(n)||n.startsWith("origin")||(r||o!==void 0)&&(!!es[n]||n==="opacity")}function mc(n,r,o){var a;const{style:u}=n,h={};for(const f in u)(Xe(u[f])||r.style&&Xe(r.style[f])||Sm(f,n)||((a=o==null?void 0:o.getValue(f))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(h[f]=u[f]);return h}function km(n,r,o){const a=mc(n,r,o);for(const u in n)if(Xe(n[u])||Xe(r[u])){const h=kr.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;a[h]=n[u]}return a}function Vg(n,r){try{r.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}const Hf=["x","y","width","height","cx","cy","r"],Rg={useVisualState:mm({scrapeMotionValuesFromProps:km,createRenderState:ym,onUpdate:({props:n,prevProps:r,current:o,renderState:a,latestValues:u})=>{if(!o)return;let h=!!n.drag;if(!h){for(const m in u)if(Hn.has(m)){h=!0;break}}if(!h)return;let f=!r;if(r)for(let m=0;m<Hf.length;m++){const g=Hf[m];n[g]!==r[g]&&(f=!0)}f&&Se.read(()=>{Vg(o,a),Se.render(()=>{dc(a,u,hc(o.tagName),n.transformTemplate),jm(o,a)})})}})},Fg={useVisualState:mm({scrapeMotionValuesFromProps:mc,createRenderState:fc})};function bm(n,r,o){for(const a in r)!Xe(r[a])&&!Sm(a,o)&&(n[a]=r[a])}function _g({transformTemplate:n},r){return R.useMemo(()=>{const o=fc();return uc(o,r,n),Object.assign({},o.vars,o.style)},[r])}function Ig(n,r){const o=n.style||{},a={};return bm(a,o,n),Object.assign(a,_g(n,r)),a}function Og(n,r){const o={},a=Ig(n,r);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=a,o}function Bg(n,r,o,a){const u=R.useMemo(()=>{const h=ym();return dc(h,r,hc(a),n.transformTemplate),{...h.attrs,style:{...h.style}}},[r]);if(n.style){const h={};bm(h,n.style,n),u.style={...h,...u.style}}return u}function Ug(n=!1){return(o,a,u,{latestValues:h},f)=>{const g=(sc(o)?Bg:Og)(a,h,f,o),v=rg(a,typeof o=="string",n),y=o!==R.Fragment?{...v,...g,ref:u}:{},{children:w}=a,S=R.useMemo(()=>Xe(w)?w.get():w,[w]);return R.createElement(o,{...y,children:S})}}function Hg(n,r){return function(a,{forwardMotionProps:u}={forwardMotionProps:!1}){const f={...sc(a)?Rg:Fg,preloadedFeatures:n,useRender:Ug(u),createVisualElement:r,Component:a};return fg(f)}}function Nm(n,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==n.length)return!1;for(let a=0;a<o;a++)if(r[a]!==n[a])return!1;return!0}function ps(n,r,o){const a=n.getProps();return ac(a,r,o!==void 0?o:a.custom,n)}const $g=tc(()=>window.ScrollTimeline!==void 0);class Wg{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>"finished"in r?r.finished:r))}getAll(r){return this.animations[0][r]}setAll(r,o){for(let a=0;a<this.animations.length;a++)this.animations[a][r]=o}attachTimeline(r,o){const a=this.animations.map(u=>{if($g()&&u.attachTimeline)return u.attachTimeline(r);if(typeof o=="function")return o(u)});return()=>{a.forEach((u,h)=>{u&&u(),this.animations[h].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get startTime(){return this.getAll("startTime")}get duration(){let r=0;for(let o=0;o<this.animations.length;o++)r=Math.max(r,this.animations[o].duration);return r}runAll(r){this.animations.forEach(o=>o[r]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Gg extends Wg{then(r,o){return Promise.all(this.animations).then(r).catch(o)}}function pc(n,r){return n?n[r]||n.default||n:void 0}const zl=2e4;function Cm(n){let r=0;const o=50;let a=n.next(r);for(;!a.done&&r<zl;)r+=o,a=n.next(r);return r>=zl?1/0:r}function gc(n){return typeof n=="function"}function $f(n,r){n.timeline=r,n.onfinish=null}const vc=n=>Array.isArray(n)&&typeof n[0]=="number",Kg={linearEasing:void 0};function Qg(n,r){const o=tc(n);return()=>{var a;return(a=Kg[r])!==null&&a!==void 0?a:o()}}const ts=Qg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tm=(n,r,o=10)=>{let a="";const u=Math.max(Math.round(r/o),2);for(let h=0;h<u;h++)a+=n(wr(0,u-1,h))+", ";return`linear(${a.substring(0,a.length-2)})`};function Pm(n){return!!(typeof n=="function"&&ts()||!n||typeof n=="string"&&(n in Ml||ts())||vc(n)||Array.isArray(n)&&n.every(Pm))}const fi=([n,r,o,a])=>`cubic-bezier(${n}, ${r}, ${o}, ${a})`,Ml={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fi([0,.65,.55,1]),circOut:fi([.55,0,1,.45]),backIn:fi([.31,.01,.66,-.59]),backOut:fi([.33,1.53,.69,.99])};function Em(n,r){if(n)return typeof n=="function"&&ts()?Tm(n,r):vc(n)?fi(n):Array.isArray(n)?n.map(o=>Em(o,r)||Ml.easeOut):Ml[n]}const At={x:!1,y:!1};function zm(){return At.x||At.y}function Yg(n,r,o){var a;if(n instanceof Element)return[n];if(typeof n=="string"){let u=document;const h=(a=void 0)!==null&&a!==void 0?a:u.querySelectorAll(n);return h?Array.from(h):[]}return Array.from(n)}function Mm(n,r){const o=Yg(n),a=new AbortController,u={passive:!0,...r,signal:a.signal};return[o,u,()=>a.abort()]}function Wf(n){return r=>{r.pointerType==="touch"||zm()||n(r)}}function Xg(n,r,o={}){const[a,u,h]=Mm(n,o),f=Wf(m=>{const{target:g}=m,v=r(m);if(typeof v!="function"||!g)return;const y=Wf(w=>{v(w),g.removeEventListener("pointerleave",y)});g.addEventListener("pointerleave",y,u)});return a.forEach(m=>{m.addEventListener("pointerenter",f,u)}),h}const Dm=(n,r)=>r?n===r?!0:Dm(n,r.parentElement):!1,yc=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,qg=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Zg(n){return qg.has(n.tagName)||n.tabIndex!==-1}const hi=new WeakSet;function Gf(n){return r=>{r.key==="Enter"&&n(r)}}function gl(n,r){n.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const Jg=(n,r)=>{const o=n.currentTarget;if(!o)return;const a=Gf(()=>{if(hi.has(o))return;gl(o,"down");const u=Gf(()=>{gl(o,"up")}),h=()=>gl(o,"cancel");o.addEventListener("keyup",u,r),o.addEventListener("blur",h,r)});o.addEventListener("keydown",a,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",a),r)};function Kf(n){return yc(n)&&!zm()}function e2(n,r,o={}){const[a,u,h]=Mm(n,o),f=m=>{const g=m.currentTarget;if(!Kf(m)||hi.has(g))return;hi.add(g);const v=r(m),y=(P,z)=>{window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",S),!(!Kf(P)||!hi.has(g))&&(hi.delete(g),typeof v=="function"&&v(P,{success:z}))},w=P=>{y(P,o.useGlobalTarget||Dm(g,P.target))},S=P=>{y(P,!1)};window.addEventListener("pointerup",w,u),window.addEventListener("pointercancel",S,u)};return a.forEach(m=>{!Zg(m)&&m.getAttribute("tabindex")===null&&(m.tabIndex=0),(o.useGlobalTarget?window:m).addEventListener("pointerdown",f,u),m.addEventListener("focus",v=>Jg(v,u),u)}),h}function t2(n){return n==="x"||n==="y"?At[n]?null:(At[n]=!0,()=>{At[n]=!1}):At.x||At.y?null:(At.x=At.y=!0,()=>{At.x=At.y=!1})}const Lm=new Set(["width","height","top","left","right","bottom",...kr]);let Yo;function n2(){Yo=void 0}const Bt={now:()=>(Yo===void 0&&Bt.set($e.isProcessing||q1.useManualTiming?$e.timestamp:performance.now()),Yo),set:n=>{Yo=n,queueMicrotask(n2)}};function xc(n,r){n.indexOf(r)===-1&&n.push(r)}function wc(n,r){const o=n.indexOf(r);o>-1&&n.splice(o,1)}class jc{constructor(){this.subscriptions=[]}add(r){return xc(this.subscriptions,r),()=>wc(this.subscriptions,r)}notify(r,o,a){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](r,o,a);else for(let h=0;h<u;h++){const f=this.subscriptions[h];f&&f(r,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Am(n,r){return r?n*(1e3/r):0}const Qf=30,r2=n=>!isNaN(parseFloat(n));class i2{constructor(r,o={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,u=!0)=>{const h=Bt.now();this.updatedAt!==h&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=Bt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=r2(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new jc);const a=this.events[r].add(o);return r==="change"?()=>{a(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r,o=!0){!o||!this.passiveEffect?this.updateAndNotify(r,o):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,o,a){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-a}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=Bt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Qf)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Qf);return Am(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ki(n,r){return new i2(n,r)}function o2(n,r,o){n.hasValue(r)?n.getValue(r).set(o):n.addValue(r,ki(o))}function s2(n,r){const o=ps(n,r);let{transitionEnd:a={},transition:u={},...h}=o||{};h={...h,...a};for(const f in h){const m=yg(h[f]);o2(n,f,m)}}function a2(n){return!!(Xe(n)&&n.add)}function Dl(n,r){const o=n.getValue("willChange");if(a2(o))return o.add(r)}function Vm(n){return n.props[dm]}const Rm=(n,r,o)=>(((1-3*o+3*r)*n+(3*o-6*r))*n+3*r)*n,l2=1e-7,c2=12;function u2(n,r,o,a,u){let h,f,m=0;do f=r+(o-r)/2,h=Rm(f,a,u)-n,h>0?o=f:r=f;while(Math.abs(h)>l2&&++m<c2);return f}function Ti(n,r,o,a){if(n===r&&o===a)return pt;const u=h=>u2(h,0,1,n,o);return h=>h===0||h===1?h:Rm(u(h),r,a)}const Fm=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,_m=n=>r=>1-n(1-r),Im=Ti(.33,1.53,.69,.99),Sc=_m(Im),Om=Fm(Sc),Bm=n=>(n*=2)<1?.5*Sc(n):.5*(2-Math.pow(2,-10*(n-1))),kc=n=>1-Math.sin(Math.acos(n)),Um=_m(kc),Hm=Fm(kc),$m=n=>/^0[^.\s]+$/u.test(n);function d2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||$m(n):!0}const pi=n=>Math.round(n*1e5)/1e5,bc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function f2(n){return n==null}const h2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Nc=(n,r)=>o=>!!(typeof o=="string"&&h2.test(o)&&o.startsWith(n)||r&&!f2(o)&&Object.prototype.hasOwnProperty.call(o,r)),Wm=(n,r,o)=>a=>{if(typeof a!="string")return a;const[u,h,f,m]=a.match(bc);return{[n]:parseFloat(u),[r]:parseFloat(h),[o]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},m2=n=>Zt(0,255,n),vl={...br,transform:n=>Math.round(m2(n))},Bn={test:Nc("rgb","red"),parse:Wm("red","green","blue"),transform:({red:n,green:r,blue:o,alpha:a=1})=>"rgba("+vl.transform(n)+", "+vl.transform(r)+", "+vl.transform(o)+", "+pi(Si.transform(a))+")"};function p2(n){let r="",o="",a="",u="";return n.length>5?(r=n.substring(1,3),o=n.substring(3,5),a=n.substring(5,7),u=n.substring(7,9)):(r=n.substring(1,2),o=n.substring(2,3),a=n.substring(3,4),u=n.substring(4,5),r+=r,o+=o,a+=a,u+=u),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:u?parseInt(u,16)/255:1}}const Ll={test:Nc("#"),parse:p2,transform:Bn.transform},gr={test:Nc("hsl","hue"),parse:Wm("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:o,alpha:a=1})=>"hsla("+Math.round(n)+", "+Ot.transform(pi(r))+", "+Ot.transform(pi(o))+", "+pi(Si.transform(a))+")"},Ye={test:n=>Bn.test(n)||Ll.test(n)||gr.test(n),parse:n=>Bn.test(n)?Bn.parse(n):gr.test(n)?gr.parse(n):Ll.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Bn.transform(n):gr.transform(n)},g2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function v2(n){var r,o;return isNaN(n)&&typeof n=="string"&&(((r=n.match(bc))===null||r===void 0?void 0:r.length)||0)+(((o=n.match(g2))===null||o===void 0?void 0:o.length)||0)>0}const Gm="number",Km="color",y2="var",x2="var(",Yf="${}",w2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bi(n){const r=n.toString(),o=[],a={color:[],number:[],var:[]},u=[];let h=0;const m=r.replace(w2,g=>(Ye.test(g)?(a.color.push(h),u.push(Km),o.push(Ye.parse(g))):g.startsWith(x2)?(a.var.push(h),u.push(y2),o.push(g)):(a.number.push(h),u.push(Gm),o.push(parseFloat(g))),++h,Yf)).split(Yf);return{values:o,split:m,indexes:a,types:u}}function Qm(n){return bi(n).values}function Ym(n){const{split:r,types:o}=bi(n),a=r.length;return u=>{let h="";for(let f=0;f<a;f++)if(h+=r[f],u[f]!==void 0){const m=o[f];m===Gm?h+=pi(u[f]):m===Km?h+=Ye.transform(u[f]):h+=u[f]}return h}}const j2=n=>typeof n=="number"?0:n;function S2(n){const r=Qm(n);return Ym(n)(r.map(j2))}const kn={test:v2,parse:Qm,createTransformer:Ym,getAnimatableNone:S2},k2=new Set(["brightness","contrast","saturate","opacity"]);function b2(n){const[r,o]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[a]=o.match(bc)||[];if(!a)return n;const u=o.replace(a,"");let h=k2.has(r)?1:0;return a!==o&&(h*=100),r+"("+h+u+")"}const N2=/\b([a-z-]*)\(.*?\)/gu,Al={...kn,getAnimatableNone:n=>{const r=n.match(N2);return r?r.map(b2).join(" "):n}},C2={...cc,color:Ye,backgroundColor:Ye,outlineColor:Ye,fill:Ye,stroke:Ye,borderColor:Ye,borderTopColor:Ye,borderRightColor:Ye,borderBottomColor:Ye,borderLeftColor:Ye,filter:Al,WebkitFilter:Al},Cc=n=>C2[n];function Xm(n,r){let o=Cc(n);return o!==Al&&(o=kn),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const T2=new Set(["auto","none","0"]);function P2(n,r,o){let a=0,u;for(;a<n.length&&!u;){const h=n[a];typeof h=="string"&&!T2.has(h)&&bi(h).values.length&&(u=n[a]),a++}if(u&&o)for(const h of r)n[h]=Xm(o,u)}const Xf=n=>n===br||n===ne,qf=(n,r)=>parseFloat(n.split(", ")[r]),Zf=(n,r)=>(o,{transform:a})=>{if(a==="none"||!a)return 0;const u=a.match(/^matrix3d\((.+)\)$/u);if(u)return qf(u[1],r);{const h=a.match(/^matrix\((.+)\)$/u);return h?qf(h[1],n):0}},E2=new Set(["x","y","z"]),z2=kr.filter(n=>!E2.has(n));function M2(n){const r=[];return z2.forEach(o=>{const a=n.getValue(o);a!==void 0&&(r.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),r}const Sr={width:({x:n},{paddingLeft:r="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),height:({y:n},{paddingTop:r="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:Zf(4,13),y:Zf(5,14)};Sr.translateX=Sr.x;Sr.translateY=Sr.y;const Un=new Set;let Vl=!1,Rl=!1;function qm(){if(Rl){const n=Array.from(Un).filter(a=>a.needsMeasurement),r=new Set(n.map(a=>a.element)),o=new Map;r.forEach(a=>{const u=M2(a);u.length&&(o.set(a,u),a.render())}),n.forEach(a=>a.measureInitialState()),r.forEach(a=>{a.render();const u=o.get(a);u&&u.forEach(([h,f])=>{var m;(m=a.getValue(h))===null||m===void 0||m.set(f)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Rl=!1,Vl=!1,Un.forEach(n=>n.complete()),Un.clear()}function Zm(){Un.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Rl=!0)})}function D2(){Zm(),qm()}class Tc{constructor(r,o,a,u,h,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=a,this.motionValue=u,this.element=h,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Un.add(this),Vl||(Vl=!0,Se.read(Zm),Se.resolveKeyframes(qm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:a,motionValue:u}=this;for(let h=0;h<r.length;h++)if(r[h]===null)if(h===0){const f=u==null?void 0:u.get(),m=r[r.length-1];if(f!==void 0)r[0]=f;else if(a&&o){const g=a.readValue(o,m);g!=null&&(r[0]=g)}r[0]===void 0&&(r[0]=m),u&&f===void 0&&u.set(r[0])}else r[h]=r[h-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Un.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Un.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Jm=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),L2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function A2(n){const r=L2.exec(n);if(!r)return[,];const[,o,a,u]=r;return[`--${o??a}`,u]}function ep(n,r,o=1){const[a,u]=A2(n);if(!a)return;const h=window.getComputedStyle(r).getPropertyValue(a);if(h){const f=h.trim();return Jm(f)?parseFloat(f):f}return lc(u)?ep(u,r,o+1):u}const tp=n=>r=>r.test(n),V2={test:n=>n==="auto",parse:n=>n},np=[br,ne,Ot,wn,bg,kg,V2],Jf=n=>np.find(tp(n));class rp extends Tc{constructor(r,o,a,u,h){super(r,o,a,u,h,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:a}=this;if(!o||!o.current)return;super.readKeyframes();for(let g=0;g<r.length;g++){let v=r[g];if(typeof v=="string"&&(v=v.trim(),lc(v))){const y=ep(v,o.current);y!==void 0&&(r[g]=y),g===r.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!Lm.has(a)||r.length!==2)return;const[u,h]=r,f=Jf(u),m=Jf(h);if(f!==m)if(Xf(f)&&Xf(m))for(let g=0;g<r.length;g++){const v=r[g];typeof v=="string"&&(r[g]=parseFloat(v))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,a=[];for(let u=0;u<r.length;u++)d2(r[u])&&a.push(u);a.length&&P2(r,a,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:a}=this;if(!r||!r.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Sr[a](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&r.getValue(a,u).jump(u,!1)}measureEndState(){var r;const{element:o,name:a,unresolvedKeyframes:u}=this;if(!o||!o.current)return;const h=o.getValue(a);h&&h.jump(this.measuredOrigin,!1);const f=u.length-1,m=u[f];u[f]=Sr[a](o.measureViewportBox(),window.getComputedStyle(o.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),!((r=this.removedTransforms)===null||r===void 0)&&r.length&&this.removedTransforms.forEach(([g,v])=>{o.getValue(g).set(v)}),this.resolveNoneKeyframes()}}const eh=(n,r)=>r==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(kn.test(n)||n==="0")&&!n.startsWith("url("));function R2(n){const r=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==r)return!0}function F2(n,r,o,a){const u=n[0];if(u===null)return!1;if(r==="display"||r==="visibility")return!0;const h=n[n.length-1],f=eh(u,r),m=eh(h,r);return!f||!m?!1:R2(n)||(o==="spring"||gc(o))&&a}const _2=n=>n!==null;function gs(n,{repeat:r,repeatType:o="loop"},a){const u=n.filter(_2),h=r&&o!=="loop"&&r%2===1?0:u.length-1;return!h||a===void 0?u[h]:a}const I2=40;class ip{constructor({autoplay:r=!0,delay:o=0,type:a="keyframes",repeat:u=0,repeatDelay:h=0,repeatType:f="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Bt.now(),this.options={autoplay:r,delay:o,type:a,repeat:u,repeatDelay:h,repeatType:f,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>I2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&D2(),this._resolved}onKeyframesResolved(r,o){this.resolvedAt=Bt.now(),this.hasAttemptedResolve=!0;const{name:a,type:u,velocity:h,delay:f,onComplete:m,onUpdate:g,isGenerator:v}=this.options;if(!v&&!F2(r,a,u,h))if(f)this.options.duration=0;else{g&&g(gs(r,this.options,o)),m&&m(),this.resolveFinishedPromise();return}const y=this.initPlayback(r,o);y!==!1&&(this._resolved={keyframes:r,finalKeyframe:o,...y},this.onPostResolved())}onPostResolved(){}then(r,o){return this.currentFinishedPromise.then(r,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(r=>{this.resolveFinishedPromise=r})}}const Te=(n,r,o)=>n+(r-n)*o;function yl(n,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(r-n)*6*o:o<1/2?r:o<2/3?n+(r-n)*(2/3-o)*6:n}function O2({hue:n,saturation:r,lightness:o,alpha:a}){n/=360,r/=100,o/=100;let u=0,h=0,f=0;if(!r)u=h=f=o;else{const m=o<.5?o*(1+r):o+r-o*r,g=2*o-m;u=yl(g,m,n+1/3),h=yl(g,m,n),f=yl(g,m,n-1/3)}return{red:Math.round(u*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:a}}function ns(n,r){return o=>o>0?r:n}const xl=(n,r,o)=>{const a=n*n,u=o*(r*r-a)+a;return u<0?0:Math.sqrt(u)},B2=[Ll,Bn,gr],U2=n=>B2.find(r=>r.test(n));function th(n){const r=U2(n);if(!r)return!1;let o=r.parse(n);return r===gr&&(o=O2(o)),o}const nh=(n,r)=>{const o=th(n),a=th(r);if(!o||!a)return ns(n,r);const u={...o};return h=>(u.red=xl(o.red,a.red,h),u.green=xl(o.green,a.green,h),u.blue=xl(o.blue,a.blue,h),u.alpha=Te(o.alpha,a.alpha,h),Bn.transform(u))},H2=(n,r)=>o=>r(n(o)),Pi=(...n)=>n.reduce(H2),Fl=new Set(["none","hidden"]);function $2(n,r){return Fl.has(n)?o=>o<=0?n:r:o=>o>=1?r:n}function W2(n,r){return o=>Te(n,r,o)}function Pc(n){return typeof n=="number"?W2:typeof n=="string"?lc(n)?ns:Ye.test(n)?nh:Q2:Array.isArray(n)?op:typeof n=="object"?Ye.test(n)?nh:G2:ns}function op(n,r){const o=[...n],a=o.length,u=n.map((h,f)=>Pc(h)(h,r[f]));return h=>{for(let f=0;f<a;f++)o[f]=u[f](h);return o}}function G2(n,r){const o={...n,...r},a={};for(const u in o)n[u]!==void 0&&r[u]!==void 0&&(a[u]=Pc(n[u])(n[u],r[u]));return u=>{for(const h in a)o[h]=a[h](u);return o}}function K2(n,r){var o;const a=[],u={color:0,var:0,number:0};for(let h=0;h<r.values.length;h++){const f=r.types[h],m=n.indexes[f][u[f]],g=(o=n.values[m])!==null&&o!==void 0?o:0;a[h]=g,u[f]++}return a}const Q2=(n,r)=>{const o=kn.createTransformer(r),a=bi(n),u=bi(r);return a.indexes.var.length===u.indexes.var.length&&a.indexes.color.length===u.indexes.color.length&&a.indexes.number.length>=u.indexes.number.length?Fl.has(n)&&!u.values.length||Fl.has(r)&&!a.values.length?$2(n,r):Pi(op(K2(a,u),u.values),o):ns(n,r)};function sp(n,r,o){return typeof n=="number"&&typeof r=="number"&&typeof o=="number"?Te(n,r,o):Pc(n)(n,r)}const Y2=5;function ap(n,r,o){const a=Math.max(r-Y2,0);return Am(o-n(a),r-a)}const Me={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wl=.001;function X2({duration:n=Me.duration,bounce:r=Me.bounce,velocity:o=Me.velocity,mass:a=Me.mass}){let u,h,f=1-r;f=Zt(Me.minDamping,Me.maxDamping,f),n=Zt(Me.minDuration,Me.maxDuration,qt(n)),f<1?(u=v=>{const y=v*f,w=y*n,S=y-o,P=_l(v,f),z=Math.exp(-w);return wl-S/P*z},h=v=>{const w=v*f*n,S=w*o+o,P=Math.pow(f,2)*Math.pow(v,2)*n,z=Math.exp(-w),E=_l(Math.pow(v,2),f);return(-u(v)+wl>0?-1:1)*((S-P)*z)/E}):(u=v=>{const y=Math.exp(-v*n),w=(v-o)*n+1;return-wl+y*w},h=v=>{const y=Math.exp(-v*n),w=(o-v)*(n*n);return y*w});const m=5/n,g=Z2(u,h,m);if(n=Xt(n),isNaN(g))return{stiffness:Me.stiffness,damping:Me.damping,duration:n};{const v=Math.pow(g,2)*a;return{stiffness:v,damping:f*2*Math.sqrt(a*v),duration:n}}}const q2=12;function Z2(n,r,o){let a=o;for(let u=1;u<q2;u++)a=a-n(a)/r(a);return a}function _l(n,r){return n*Math.sqrt(1-r*r)}const J2=["duration","bounce"],ev=["stiffness","damping","mass"];function rh(n,r){return r.some(o=>n[o]!==void 0)}function tv(n){let r={velocity:Me.velocity,stiffness:Me.stiffness,damping:Me.damping,mass:Me.mass,isResolvedFromDuration:!1,...n};if(!rh(n,ev)&&rh(n,J2))if(n.visualDuration){const o=n.visualDuration,a=2*Math.PI/(o*1.2),u=a*a,h=2*Zt(.05,1,1-(n.bounce||0))*Math.sqrt(u);r={...r,mass:Me.mass,stiffness:u,damping:h}}else{const o=X2(n);r={...r,...o,mass:Me.mass},r.isResolvedFromDuration=!0}return r}function lp(n=Me.visualDuration,r=Me.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:r}:n;let{restSpeed:a,restDelta:u}=o;const h=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],m={done:!1,value:h},{stiffness:g,damping:v,mass:y,duration:w,velocity:S,isResolvedFromDuration:P}=tv({...o,velocity:-qt(o.velocity||0)}),z=S||0,E=v/(2*Math.sqrt(g*y)),D=f-h,F=qt(Math.sqrt(g/y)),O=Math.abs(D)<5;a||(a=O?Me.restSpeed.granular:Me.restSpeed.default),u||(u=O?Me.restDelta.granular:Me.restDelta.default);let W;if(E<1){const B=_l(F,E);W=te=>{const ce=Math.exp(-E*F*te);return f-ce*((z+E*F*D)/B*Math.sin(B*te)+D*Math.cos(B*te))}}else if(E===1)W=B=>f-Math.exp(-F*B)*(D+(z+F*D)*B);else{const B=F*Math.sqrt(E*E-1);W=te=>{const ce=Math.exp(-E*F*te),q=Math.min(B*te,300);return f-ce*((z+E*F*D)*Math.sinh(q)+B*D*Math.cosh(q))/B}}const X={calculatedDuration:P&&w||null,next:B=>{const te=W(B);if(P)m.done=B>=w;else{let ce=0;E<1&&(ce=B===0?Xt(z):ap(W,B,te));const q=Math.abs(ce)<=a,xe=Math.abs(f-te)<=u;m.done=q&&xe}return m.value=m.done?f:te,m},toString:()=>{const B=Math.min(Cm(X),zl),te=Tm(ce=>X.next(B*ce).value,B,30);return B+"ms "+te}};return X}function ih({keyframes:n,velocity:r=0,power:o=.8,timeConstant:a=325,bounceDamping:u=10,bounceStiffness:h=500,modifyTarget:f,min:m,max:g,restDelta:v=.5,restSpeed:y}){const w=n[0],S={done:!1,value:w},P=q=>m!==void 0&&q<m||g!==void 0&&q>g,z=q=>m===void 0?g:g===void 0||Math.abs(m-q)<Math.abs(g-q)?m:g;let E=o*r;const D=w+E,F=f===void 0?D:f(D);F!==D&&(E=F-w);const O=q=>-E*Math.exp(-q/a),W=q=>F+O(q),X=q=>{const xe=O(q),Pe=W(q);S.done=Math.abs(xe)<=v,S.value=S.done?F:Pe};let B,te;const ce=q=>{P(S.value)&&(B=q,te=lp({keyframes:[S.value,z(S.value)],velocity:ap(W,q,S.value),damping:u,stiffness:h,restDelta:v,restSpeed:y}))};return ce(0),{calculatedDuration:null,next:q=>{let xe=!1;return!te&&B===void 0&&(xe=!0,X(q),ce(q)),B!==void 0&&q>=B?te.next(q-B):(!xe&&X(q),S)}}}const nv=Ti(.42,0,1,1),rv=Ti(0,0,.58,1),cp=Ti(.42,0,.58,1),iv=n=>Array.isArray(n)&&typeof n[0]!="number",ov={linear:pt,easeIn:nv,easeInOut:cp,easeOut:rv,circIn:kc,circInOut:Hm,circOut:Um,backIn:Sc,backInOut:Om,backOut:Im,anticipate:Bm},oh=n=>{if(vc(n)){sm(n.length===4);const[r,o,a,u]=n;return Ti(r,o,a,u)}else if(typeof n=="string")return ov[n];return n};function sv(n,r,o){const a=[],u=o||sp,h=n.length-1;for(let f=0;f<h;f++){let m=u(n[f],n[f+1]);if(r){const g=Array.isArray(r)?r[f]||pt:r;m=Pi(g,m)}a.push(m)}return a}function av(n,r,{clamp:o=!0,ease:a,mixer:u}={}){const h=n.length;if(sm(h===r.length),h===1)return()=>r[0];if(h===2&&r[0]===r[1])return()=>r[1];const f=n[0]===n[1];n[0]>n[h-1]&&(n=[...n].reverse(),r=[...r].reverse());const m=sv(r,a,u),g=m.length,v=y=>{if(f&&y<n[0])return r[0];let w=0;if(g>1)for(;w<n.length-2&&!(y<n[w+1]);w++);const S=wr(n[w],n[w+1],y);return m[w](S)};return o?y=>v(Zt(n[0],n[h-1],y)):v}function lv(n,r){const o=n[n.length-1];for(let a=1;a<=r;a++){const u=wr(0,r,a);n.push(Te(o,1,u))}}function cv(n){const r=[0];return lv(r,n.length-1),r}function uv(n,r){return n.map(o=>o*r)}function dv(n,r){return n.map(()=>r||cp).splice(0,n.length-1)}function rs({duration:n=300,keyframes:r,times:o,ease:a="easeInOut"}){const u=iv(a)?a.map(oh):oh(a),h={done:!1,value:r[0]},f=uv(o&&o.length===r.length?o:cv(r),n),m=av(f,r,{ease:Array.isArray(u)?u:dv(r,u)});return{calculatedDuration:n,next:g=>(h.value=m(g),h.done=g>=n,h)}}const fv=n=>{const r=({timestamp:o})=>n(o);return{start:()=>Se.update(r,!0),stop:()=>Sn(r),now:()=>$e.isProcessing?$e.timestamp:Bt.now()}},hv={decay:ih,inertia:ih,tween:rs,keyframes:rs,spring:lp},mv=n=>n/100;class Ec extends ip{constructor(r){super(r),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:g}=this.options;g&&g()};const{name:o,motionValue:a,element:u,keyframes:h}=this.options,f=(u==null?void 0:u.KeyframeResolver)||Tc,m=(g,v)=>this.onKeyframesResolved(g,v);this.resolver=new f(h,m,o,a,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(r){const{type:o="keyframes",repeat:a=0,repeatDelay:u=0,repeatType:h,velocity:f=0}=this.options,m=gc(o)?o:hv[o]||rs;let g,v;m!==rs&&typeof r[0]!="number"&&(g=Pi(mv,sp(r[0],r[1])),r=[0,100]);const y=m({...this.options,keyframes:r});h==="mirror"&&(v=m({...this.options,keyframes:[...r].reverse(),velocity:-f})),y.calculatedDuration===null&&(y.calculatedDuration=Cm(y));const{calculatedDuration:w}=y,S=w+u,P=S*(a+1)-u;return{generator:y,mirroredGenerator:v,mapPercentToKeyframes:g,calculatedDuration:w,resolvedDuration:S,totalDuration:P}}onPostResolved(){const{autoplay:r=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!r?this.pause():this.state=this.pendingPlayState}tick(r,o=!1){const{resolved:a}=this;if(!a){const{keyframes:q}=this.options;return{done:!0,value:q[q.length-1]}}const{finalKeyframe:u,generator:h,mirroredGenerator:f,mapPercentToKeyframes:m,keyframes:g,calculatedDuration:v,totalDuration:y,resolvedDuration:w}=a;if(this.startTime===null)return h.next(0);const{delay:S,repeat:P,repeatType:z,repeatDelay:E,onUpdate:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-y/this.speed,this.startTime)),o?this.currentTime=r:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(r-this.startTime)*this.speed;const F=this.currentTime-S*(this.speed>=0?1:-1),O=this.speed>=0?F<0:F>y;this.currentTime=Math.max(F,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=y);let W=this.currentTime,X=h;if(P){const q=Math.min(this.currentTime,y)/w;let xe=Math.floor(q),Pe=q%1;!Pe&&q>=1&&(Pe=1),Pe===1&&xe--,xe=Math.min(xe,P+1),!!(xe%2)&&(z==="reverse"?(Pe=1-Pe,E&&(Pe-=E/w)):z==="mirror"&&(X=f)),W=Zt(0,1,Pe)*w}const B=O?{done:!1,value:g[0]}:X.next(W);m&&(B.value=m(B.value));let{done:te}=B;!O&&v!==null&&(te=this.speed>=0?this.currentTime>=y:this.currentTime<=0);const ce=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&te);return ce&&u!==void 0&&(B.value=gs(g,this.options,u)),D&&D(B.value),ce&&this.finish(),B}get duration(){const{resolved:r}=this;return r?qt(r.calculatedDuration):0}get time(){return qt(this.currentTime)}set time(r){r=Xt(r),this.currentTime=r,this.holdTime!==null||this.speed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.speed)}get speed(){return this.playbackSpeed}set speed(r){const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=qt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:r=fv,onPlay:o,startTime:a}=this.options;this.driver||(this.driver=r(h=>this.tick(h))),o&&o();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var r;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(r=this.currentTime)!==null&&r!==void 0?r:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:r}=this.options;r&&r()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}}const pv=new Set(["opacity","clipPath","filter","transform"]);function gv(n,r,o,{delay:a=0,duration:u=300,repeat:h=0,repeatType:f="loop",ease:m="easeInOut",times:g}={}){const v={[r]:o};g&&(v.offset=g);const y=Em(m,u);return Array.isArray(y)&&(v.easing=y),n.animate(v,{delay:a,duration:u,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"})}const vv=tc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),is=10,yv=2e4;function xv(n){return gc(n.type)||n.type==="spring"||!Pm(n.ease)}function wv(n,r){const o=new Ec({...r,keyframes:n,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:n[0]};const u=[];let h=0;for(;!a.done&&h<yv;)a=o.sample(h),u.push(a.value),h+=is;return{times:void 0,keyframes:u,duration:h-is,ease:"linear"}}const up={anticipate:Bm,backInOut:Om,circInOut:Hm};function jv(n){return n in up}class sh extends ip{constructor(r){super(r);const{name:o,motionValue:a,element:u,keyframes:h}=this.options;this.resolver=new rp(h,(f,m)=>this.onKeyframesResolved(f,m),o,a,u),this.resolver.scheduleResolve()}initPlayback(r,o){let{duration:a=300,times:u,ease:h,type:f,motionValue:m,name:g,startTime:v}=this.options;if(!m.owner||!m.owner.current)return!1;if(typeof h=="string"&&ts()&&jv(h)&&(h=up[h]),xv(this.options)){const{onComplete:w,onUpdate:S,motionValue:P,element:z,...E}=this.options,D=wv(r,E);r=D.keyframes,r.length===1&&(r[1]=r[0]),a=D.duration,u=D.times,h=D.ease,f="keyframes"}const y=gv(m.owner.current,g,r,{...this.options,duration:a,times:u,ease:h});return y.startTime=v??this.calcStartTime(),this.pendingTimeline?($f(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:w}=this.options;m.set(gs(r,this.options,o)),w&&w(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:a,times:u,type:f,ease:h,keyframes:r}}get duration(){const{resolved:r}=this;if(!r)return 0;const{duration:o}=r;return qt(o)}get time(){const{resolved:r}=this;if(!r)return 0;const{animation:o}=r;return qt(o.currentTime||0)}set time(r){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.currentTime=Xt(r)}get speed(){const{resolved:r}=this;if(!r)return 1;const{animation:o}=r;return o.playbackRate}set speed(r){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.playbackRate=r}get state(){const{resolved:r}=this;if(!r)return"idle";const{animation:o}=r;return o.playState}get startTime(){const{resolved:r}=this;if(!r)return null;const{animation:o}=r;return o.startTime}attachTimeline(r){if(!this._resolved)this.pendingTimeline=r;else{const{resolved:o}=this;if(!o)return pt;const{animation:a}=o;$f(a,r)}return pt}play(){if(this.isStopped)return;const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:r}=this;if(!r)return;const{animation:o,keyframes:a,duration:u,type:h,ease:f,times:m}=r;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:v,onUpdate:y,onComplete:w,element:S,...P}=this.options,z=new Ec({...P,keyframes:a,duration:u,type:h,ease:f,times:m,isGenerator:!0}),E=Xt(this.time);v.setWithVelocity(z.sample(E-is).value,z.sample(E).value,is)}const{onStop:g}=this.options;g&&g(),this.cancel()}complete(){const{resolved:r}=this;r&&r.animation.finish()}cancel(){const{resolved:r}=this;r&&r.animation.cancel()}static supports(r){const{motionValue:o,name:a,repeatDelay:u,repeatType:h,damping:f,type:m}=r;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:v}=o.owner.getProps();return vv()&&a&&pv.has(a)&&!g&&!v&&!u&&h!=="mirror"&&f!==0&&m!=="inertia"}}const Sv={type:"spring",stiffness:500,damping:25,restSpeed:10},kv=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),bv={type:"keyframes",duration:.8},Nv={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Cv=(n,{keyframes:r})=>r.length>2?bv:Hn.has(n)?n.startsWith("scale")?kv(r[1]):Sv:Nv;function Tv({when:n,delay:r,delayChildren:o,staggerChildren:a,staggerDirection:u,repeat:h,repeatType:f,repeatDelay:m,from:g,elapsed:v,...y}){return!!Object.keys(y).length}const zc=(n,r,o,a={},u,h)=>f=>{const m=pc(a,n)||{},g=m.delay||a.delay||0;let{elapsed:v=0}=a;v=v-Xt(g);let y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...m,delay:-v,onUpdate:S=>{r.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:n,motionValue:r,element:h?void 0:u};Tv(m)||(y={...y,...Cv(n,y)}),y.duration&&(y.duration=Xt(y.duration)),y.repeatDelay&&(y.repeatDelay=Xt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let w=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(w=!0)),w&&!h&&r.get()!==void 0){const S=gs(y.keyframes,m);if(S!==void 0)return Se.update(()=>{y.onUpdate(S),y.onComplete()}),new Gg([])}return!h&&sh.supports(y)?new sh(y):new Ec(y)};function Pv({protectedKeys:n,needsAnimating:r},o){const a=n.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,a}function dp(n,r,{delay:o=0,transitionOverride:a,type:u}={}){var h;let{transition:f=n.getDefaultTransition(),transitionEnd:m,...g}=r;a&&(f=a);const v=[],y=u&&n.animationState&&n.animationState.getState()[u];for(const w in g){const S=n.getValue(w,(h=n.latestValues[w])!==null&&h!==void 0?h:null),P=g[w];if(P===void 0||y&&Pv(y,w))continue;const z={delay:o,...pc(f||{},w)};let E=!1;if(window.MotionHandoffAnimation){const F=Vm(n);if(F){const O=window.MotionHandoffAnimation(F,w,Se);O!==null&&(z.startTime=O,E=!0)}}Dl(n,w),S.start(zc(w,S,P,n.shouldReduceMotion&&Lm.has(w)?{type:!1}:z,n,E));const D=S.animation;D&&v.push(D)}return m&&Promise.all(v).then(()=>{Se.update(()=>{m&&s2(n,m)})}),v}function Il(n,r,o={}){var a;const u=ps(n,r,o.type==="exit"?(a=n.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:h=n.getDefaultTransition()||{}}=u||{};o.transitionOverride&&(h=o.transitionOverride);const f=u?()=>Promise.all(dp(n,u,o)):()=>Promise.resolve(),m=n.variantChildren&&n.variantChildren.size?(v=0)=>{const{delayChildren:y=0,staggerChildren:w,staggerDirection:S}=h;return Ev(n,r,y+v,w,S,o)}:()=>Promise.resolve(),{when:g}=h;if(g){const[v,y]=g==="beforeChildren"?[f,m]:[m,f];return v().then(()=>y())}else return Promise.all([f(),m(o.delay)])}function Ev(n,r,o=0,a=0,u=1,h){const f=[],m=(n.variantChildren.size-1)*a,g=u===1?(v=0)=>v*a:(v=0)=>m-v*a;return Array.from(n.variantChildren).sort(zv).forEach((v,y)=>{v.notify("AnimationStart",r),f.push(Il(v,r,{...h,delay:o+g(y)}).then(()=>v.notify("AnimationComplete",r)))}),Promise.all(f)}function zv(n,r){return n.sortNodePosition(r)}function Mv(n,r,o={}){n.notify("AnimationStart",r);let a;if(Array.isArray(r)){const u=r.map(h=>Il(n,h,o));a=Promise.all(u)}else if(typeof r=="string")a=Il(n,r,o);else{const u=typeof r=="function"?ps(n,r,o.custom):r;a=Promise.all(dp(n,u,o))}return a.then(()=>{n.notify("AnimationComplete",r)})}const Dv=rc.length;function fp(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?fp(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const r={};for(let o=0;o<Dv;o++){const a=rc[o],u=n.props[a];(ji(u)||u===!1)&&(r[a]=u)}return r}const Lv=[...nc].reverse(),Av=nc.length;function Vv(n){return r=>Promise.all(r.map(({animation:o,options:a})=>Mv(n,o,a)))}function Rv(n){let r=Vv(n),o=ah(),a=!0;const u=g=>(v,y)=>{var w;const S=ps(n,y,g==="exit"?(w=n.presenceContext)===null||w===void 0?void 0:w.custom:void 0);if(S){const{transition:P,transitionEnd:z,...E}=S;v={...v,...E,...z}}return v};function h(g){r=g(n)}function f(g){const{props:v}=n,y=fp(n.parent)||{},w=[],S=new Set;let P={},z=1/0;for(let D=0;D<Av;D++){const F=Lv[D],O=o[F],W=v[F]!==void 0?v[F]:y[F],X=ji(W),B=F===g?O.isActive:null;B===!1&&(z=D);let te=W===y[F]&&W!==v[F]&&X;if(te&&a&&n.manuallyAnimateOnMount&&(te=!1),O.protectedKeys={...P},!O.isActive&&B===null||!W&&!O.prevProp||hs(W)||typeof W=="boolean")continue;const ce=Fv(O.prevProp,W);let q=ce||F===g&&O.isActive&&!te&&X||D>z&&X,xe=!1;const Pe=Array.isArray(W)?W:[W];let tt=Pe.reduce(u(F),{});B===!1&&(tt={});const{prevResolvedValues:ct={}}=O,qe={...ct,...tt},nt=se=>{q=!0,S.has(se)&&(xe=!0,S.delete(se)),O.needsAnimating[se]=!0;const I=n.getValue(se);I&&(I.liveStyle=!1)};for(const se in qe){const I=tt[se],Z=ct[se];if(P.hasOwnProperty(se))continue;let H=!1;El(I)&&El(Z)?H=!Nm(I,Z):H=I!==Z,H?I!=null?nt(se):S.add(se):I!==void 0&&S.has(se)?nt(se):O.protectedKeys[se]=!0}O.prevProp=W,O.prevResolvedValues=tt,O.isActive&&(P={...P,...tt}),a&&n.blockInitialAnimation&&(q=!1),q&&(!(te&&ce)||xe)&&w.push(...Pe.map(se=>({animation:se,options:{type:F}})))}if(S.size){const D={};S.forEach(F=>{const O=n.getBaseTarget(F),W=n.getValue(F);W&&(W.liveStyle=!0),D[F]=O??null}),w.push({animation:D})}let E=!!w.length;return a&&(v.initial===!1||v.initial===v.animate)&&!n.manuallyAnimateOnMount&&(E=!1),a=!1,E?r(w):Promise.resolve()}function m(g,v){var y;if(o[g].isActive===v)return Promise.resolve();(y=n.variantChildren)===null||y===void 0||y.forEach(S=>{var P;return(P=S.animationState)===null||P===void 0?void 0:P.setActive(g,v)}),o[g].isActive=v;const w=f(g);for(const S in o)o[S].protectedKeys={};return w}return{animateChanges:f,setActive:m,setAnimateFunction:h,getState:()=>o,reset:()=>{o=ah(),a=!0}}}function Fv(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!Nm(r,n):!1}function _n(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ah(){return{animate:_n(!0),whileInView:_n(),whileHover:_n(),whileTap:_n(),whileDrag:_n(),whileFocus:_n(),exit:_n()}}class bn{constructor(r){this.isMounted=!1,this.node=r}update(){}}class _v extends bn{constructor(r){super(r),r.animationState||(r.animationState=Rv(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();hs(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)===null||r===void 0||r.call(this)}}let Iv=0;class Ov extends bn{constructor(){super(...arguments),this.id=Iv++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===a)return;const u=this.node.animationState.setActive("exit",!r);o&&!r&&u.then(()=>o(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const Bv={animation:{Feature:_v},exit:{Feature:Ov}};function Ni(n,r,o,a={passive:!0}){return n.addEventListener(r,o,a),()=>n.removeEventListener(r,o)}function Ei(n){return{point:{x:n.pageX,y:n.pageY}}}const Uv=n=>r=>yc(r)&&n(r,Ei(r));function gi(n,r,o,a){return Ni(n,r,Uv(o),a)}const lh=(n,r)=>Math.abs(n-r);function Hv(n,r){const o=lh(n.x,r.x),a=lh(n.y,r.y);return Math.sqrt(o**2+a**2)}class hp{constructor(r,o,{transformPagePoint:a,contextWindow:u,dragSnapToOrigin:h=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Sl(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,P=Hv(w.offset,{x:0,y:0})>=3;if(!S&&!P)return;const{point:z}=w,{timestamp:E}=$e;this.history.push({...z,timestamp:E});const{onStart:D,onMove:F}=this.handlers;S||(D&&D(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),F&&F(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=jl(S,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:P,onSessionEnd:z,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=Sl(w.type==="pointercancel"?this.lastMoveEventInfo:jl(S,this.transformPagePoint),this.history);this.startEvent&&P&&P(w,D),z&&z(w,D)},!yc(r))return;this.dragSnapToOrigin=h,this.handlers=o,this.transformPagePoint=a,this.contextWindow=u||window;const f=Ei(r),m=jl(f,this.transformPagePoint),{point:g}=m,{timestamp:v}=$e;this.history=[{...g,timestamp:v}];const{onSessionStart:y}=o;y&&y(r,Sl(m,this.history)),this.removeListeners=Pi(gi(this.contextWindow,"pointermove",this.handlePointerMove),gi(this.contextWindow,"pointerup",this.handlePointerUp),gi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Sn(this.updatePoint)}}function jl(n,r){return r?{point:r(n.point)}:n}function ch(n,r){return{x:n.x-r.x,y:n.y-r.y}}function Sl({point:n},r){return{point:n,delta:ch(n,mp(r)),offset:ch(n,$v(r)),velocity:Wv(r,.1)}}function $v(n){return n[0]}function mp(n){return n[n.length-1]}function Wv(n,r){if(n.length<2)return{x:0,y:0};let o=n.length-1,a=null;const u=mp(n);for(;o>=0&&(a=n[o],!(u.timestamp-a.timestamp>Xt(r)));)o--;if(!a)return{x:0,y:0};const h=qt(u.timestamp-a.timestamp);if(h===0)return{x:0,y:0};const f={x:(u.x-a.x)/h,y:(u.y-a.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}const pp=1e-4,Gv=1-pp,Kv=1+pp,gp=.01,Qv=0-gp,Yv=0+gp;function gt(n){return n.max-n.min}function Xv(n,r,o){return Math.abs(n-r)<=o}function uh(n,r,o,a=.5){n.origin=a,n.originPoint=Te(r.min,r.max,n.origin),n.scale=gt(o)/gt(r),n.translate=Te(o.min,o.max,n.origin)-n.originPoint,(n.scale>=Gv&&n.scale<=Kv||isNaN(n.scale))&&(n.scale=1),(n.translate>=Qv&&n.translate<=Yv||isNaN(n.translate))&&(n.translate=0)}function vi(n,r,o,a){uh(n.x,r.x,o.x,a?a.originX:void 0),uh(n.y,r.y,o.y,a?a.originY:void 0)}function dh(n,r,o){n.min=o.min+r.min,n.max=n.min+gt(r)}function qv(n,r,o){dh(n.x,r.x,o.x),dh(n.y,r.y,o.y)}function fh(n,r,o){n.min=r.min-o.min,n.max=n.min+gt(r)}function yi(n,r,o){fh(n.x,r.x,o.x),fh(n.y,r.y,o.y)}function Zv(n,{min:r,max:o},a){return r!==void 0&&n<r?n=a?Te(r,n,a.min):Math.max(n,r):o!==void 0&&n>o&&(n=a?Te(o,n,a.max):Math.min(n,o)),n}function hh(n,r,o){return{min:r!==void 0?n.min+r:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function Jv(n,{top:r,left:o,bottom:a,right:u}){return{x:hh(n.x,o,u),y:hh(n.y,r,a)}}function mh(n,r){let o=r.min-n.min,a=r.max-n.max;return r.max-r.min<n.max-n.min&&([o,a]=[a,o]),{min:o,max:a}}function ey(n,r){return{x:mh(n.x,r.x),y:mh(n.y,r.y)}}function ty(n,r){let o=.5;const a=gt(n),u=gt(r);return u>a?o=wr(r.min,r.max-a,n.min):a>u&&(o=wr(n.min,n.max-u,r.min)),Zt(0,1,o)}function ny(n,r){const o={};return r.min!==void 0&&(o.min=r.min-n.min),r.max!==void 0&&(o.max=r.max-n.min),o}const Ol=.35;function ry(n=Ol){return n===!1?n=0:n===!0&&(n=Ol),{x:ph(n,"left","right"),y:ph(n,"top","bottom")}}function ph(n,r,o){return{min:gh(n,r),max:gh(n,o)}}function gh(n,r){return typeof n=="number"?n:n[r]||0}const vh=()=>({translate:0,scale:1,origin:0,originPoint:0}),vr=()=>({x:vh(),y:vh()}),yh=()=>({min:0,max:0}),Ae=()=>({x:yh(),y:yh()});function bt(n){return[n("x"),n("y")]}function vp({top:n,left:r,right:o,bottom:a}){return{x:{min:r,max:o},y:{min:n,max:a}}}function iy({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function oy(n,r){if(!r)return n;const o=r({x:n.left,y:n.top}),a=r({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function kl(n){return n===void 0||n===1}function Bl({scale:n,scaleX:r,scaleY:o}){return!kl(n)||!kl(r)||!kl(o)}function In(n){return Bl(n)||yp(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function yp(n){return xh(n.x)||xh(n.y)}function xh(n){return n&&n!=="0%"}function os(n,r,o){const a=n-o,u=r*a;return o+u}function wh(n,r,o,a,u){return u!==void 0&&(n=os(n,u,a)),os(n,o,a)+r}function Ul(n,r=0,o=1,a,u){n.min=wh(n.min,r,o,a,u),n.max=wh(n.max,r,o,a,u)}function xp(n,{x:r,y:o}){Ul(n.x,r.translate,r.scale,r.originPoint),Ul(n.y,o.translate,o.scale,o.originPoint)}const jh=.999999999999,Sh=1.0000000000001;function sy(n,r,o,a=!1){const u=o.length;if(!u)return;r.x=r.y=1;let h,f;for(let m=0;m<u;m++){h=o[m],f=h.projectionDelta;const{visualElement:g}=h.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&xr(n,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),f&&(r.x*=f.x.scale,r.y*=f.y.scale,xp(n,f)),a&&In(h.latestValues)&&xr(n,h.latestValues))}r.x<Sh&&r.x>jh&&(r.x=1),r.y<Sh&&r.y>jh&&(r.y=1)}function yr(n,r){n.min=n.min+r,n.max=n.max+r}function kh(n,r,o,a,u=.5){const h=Te(n.min,n.max,u);Ul(n,r,o,h,a)}function xr(n,r){kh(n.x,r.x,r.scaleX,r.scale,r.originX),kh(n.y,r.y,r.scaleY,r.scale,r.originY)}function wp(n,r){return vp(oy(n.getBoundingClientRect(),r))}function ay(n,r,o){const a=wp(n,o),{scroll:u}=r;return u&&(yr(a.x,u.offset.x),yr(a.y,u.offset.y)),a}const jp=({current:n})=>n?n.ownerDocument.defaultView:null,ly=new WeakMap;class cy{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ae(),this.visualElement=r}start(r,{snapToCursor:o=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const u=y=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Ei(y).point)},h=(y,w)=>{const{drag:S,dragPropagation:P,onDragStart:z}=this.getProps();if(S&&!P&&(this.openDragLock&&this.openDragLock(),this.openDragLock=t2(S),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bt(D=>{let F=this.getAxisMotionValue(D).get()||0;if(Ot.test(F)){const{projection:O}=this.visualElement;if(O&&O.layout){const W=O.layout.layoutBox[D];W&&(F=gt(W)*(parseFloat(F)/100))}}this.originPoint[D]=F}),z&&Se.postRender(()=>z(y,w)),Dl(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},f=(y,w)=>{const{dragPropagation:S,dragDirectionLock:P,onDirectionLock:z,onDrag:E}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:D}=w;if(P&&this.currentDirection===null){this.currentDirection=uy(D),this.currentDirection!==null&&z&&z(this.currentDirection);return}this.updateAxis("x",w.point,D),this.updateAxis("y",w.point,D),this.visualElement.render(),E&&E(y,w)},m=(y,w)=>this.stop(y,w),g=()=>bt(y=>{var w;return this.getAnimationState(y)==="paused"&&((w=this.getAxisMotionValue(y).animation)===null||w===void 0?void 0:w.play())}),{dragSnapToOrigin:v}=this.getProps();this.panSession=new hp(r,{onSessionStart:u,onStart:h,onMove:f,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:v,contextWindow:jp(this.visualElement)})}stop(r,o){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:h}=this.getProps();h&&Se.postRender(()=>h(r,o))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(r,o,a){const{drag:u}=this.getProps();if(!a||!Go(r,u,this.currentDirection))return;const h=this.getAxisMotionValue(r);let f=this.originPoint[r]+a[r];this.constraints&&this.constraints[r]&&(f=Zv(f,this.constraints[r],this.elastic[r])),h.set(f)}resolveConstraints(){var r;const{dragConstraints:o,dragElastic:a}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,h=this.constraints;o&&pr(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&u?this.constraints=Jv(u.layoutBox,o):this.constraints=!1,this.elastic=ry(a),h!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&bt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=ny(u.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!pr(r))return!1;const a=r.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const h=ay(a,u.root,this.visualElement.getTransformPagePoint());let f=ey(u.layout.layoutBox,h);if(o){const m=o(iy(f));this.hasMutatedConstraints=!!m,m&&(f=vp(m))}return f}startAnimation(r){const{drag:o,dragMomentum:a,dragElastic:u,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),g=this.constraints||{},v=bt(y=>{if(!Go(y,o,this.currentDirection))return;let w=g&&g[y]||{};f&&(w={min:0,max:0});const S=u?200:1e6,P=u?40:1e7,z={type:"inertia",velocity:a?r[y]:0,bounceStiffness:S,bounceDamping:P,timeConstant:750,restDelta:1,restSpeed:10,...h,...w};return this.startAxisValueAnimation(y,z)});return Promise.all(v).then(m)}startAxisValueAnimation(r,o){const a=this.getAxisMotionValue(r);return Dl(this.visualElement,r),a.start(zc(r,a,0,o,this.visualElement,!1))}stopAnimation(){bt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){bt(r=>{var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(r){var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,a=this.visualElement.getProps(),u=a[o];return u||this.visualElement.getValue(r,(a.initial?a.initial[r]:void 0)||0)}snapToCursor(r){bt(o=>{const{drag:a}=this.getProps();if(!Go(o,a,this.currentDirection))return;const{projection:u}=this.visualElement,h=this.getAxisMotionValue(o);if(u&&u.layout){const{min:f,max:m}=u.layout.layoutBox[o];h.set(r[o]-Te(f,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!pr(o)||!a||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};bt(f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const g=m.get();u[f]=ty({min:g,max:g},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),bt(f=>{if(!Go(f,r,null))return;const m=this.getAxisMotionValue(f),{min:g,max:v}=this.constraints[f];m.set(Te(g,v,u[f]))})}addListeners(){if(!this.visualElement.current)return;ly.set(this.visualElement,this);const r=this.visualElement.current,o=gi(r,"pointerdown",g=>{const{drag:v,dragListener:y=!0}=this.getProps();v&&y&&this.start(g)}),a=()=>{const{dragConstraints:g}=this.getProps();pr(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,h=u.addEventListener("measure",a);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Se.read(a);const f=Ni(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:v})=>{this.isDragging&&v&&(bt(y=>{const w=this.getAxisMotionValue(y);w&&(this.originPoint[y]+=g[y].translate,w.set(w.get()+g[y].translate))}),this.visualElement.render())}));return()=>{f(),o(),h(),m&&m()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:u=!1,dragConstraints:h=!1,dragElastic:f=Ol,dragMomentum:m=!0}=r;return{...r,drag:o,dragDirectionLock:a,dragPropagation:u,dragConstraints:h,dragElastic:f,dragMomentum:m}}}function Go(n,r,o){return(r===!0||r===n)&&(o===null||o===n)}function uy(n,r=10){let o=null;return Math.abs(n.y)>r?o="y":Math.abs(n.x)>r&&(o="x"),o}class dy extends bn{constructor(r){super(r),this.removeGroupControls=pt,this.removeListeners=pt,this.controls=new cy(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const bh=n=>(r,o)=>{n&&Se.postRender(()=>n(r,o))};class fy extends bn{constructor(){super(...arguments),this.removePointerDownListener=pt}onPointerDown(r){this.session=new hp(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jp(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:a,onPanEnd:u}=this.node.getProps();return{onSessionStart:bh(r),onStart:bh(o),onMove:a,onEnd:(h,f)=>{delete this.session,u&&Se.postRender(()=>u(h,f))}}}mount(){this.removePointerDownListener=gi(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Xo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Nh(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const di={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(ne.test(n))n=parseFloat(n);else return n;const o=Nh(n,r.target.x),a=Nh(n,r.target.y);return`${o}% ${a}%`}},hy={correct:(n,{treeScale:r,projectionDelta:o})=>{const a=n,u=kn.parse(n);if(u.length>5)return a;const h=kn.createTransformer(n),f=typeof u[0]!="number"?1:0,m=o.x.scale*r.x,g=o.y.scale*r.y;u[0+f]/=m,u[1+f]/=g;const v=Te(m,g,.5);return typeof u[2+f]=="number"&&(u[2+f]/=v),typeof u[3+f]=="number"&&(u[3+f]/=v),h(u)}};class my extends R.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a,layoutId:u}=this.props,{projection:h}=r;Ag(py),h&&(o.group&&o.group.add(h),a&&a.register&&u&&a.register(h),h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),Xo.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:a,drag:u,isPresent:h}=this.props,f=a.projection;return f&&(f.isPresent=h,u||r.layoutDependency!==o||o===void 0?f.willUpdate():this.safeToRemove(),r.isPresent!==h&&(h?f.promote():f.relegate()||Se.postRender(()=>{const m=f.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),oc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:u}=r;u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),a&&a.deregister&&a.deregister(u))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Sp(n){const[r,o]=rm(),a=R.useContext(ql);return c.jsx(my,{...n,layoutGroup:a,switchLayoutGroup:R.useContext(fm),isPresent:r,safeToRemove:o})}const py={borderRadius:{...di,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:di,borderTopRightRadius:di,borderBottomLeftRadius:di,borderBottomRightRadius:di,boxShadow:hy};function gy(n,r,o){const a=Xe(n)?n:ki(n);return a.start(zc("",a,r,o)),a.animation}function vy(n){return n instanceof SVGElement&&n.tagName!=="svg"}const yy=(n,r)=>n.depth-r.depth;class xy{constructor(){this.children=[],this.isDirty=!1}add(r){xc(this.children,r),this.isDirty=!0}remove(r){wc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(yy),this.isDirty=!1,this.children.forEach(r)}}function wy(n,r){const o=Bt.now(),a=({timestamp:u})=>{const h=u-o;h>=r&&(Sn(a),n(h-r))};return Se.read(a,!0),()=>Sn(a)}const kp=["TopLeft","TopRight","BottomLeft","BottomRight"],jy=kp.length,Ch=n=>typeof n=="string"?parseFloat(n):n,Th=n=>typeof n=="number"||ne.test(n);function Sy(n,r,o,a,u,h){u?(n.opacity=Te(0,o.opacity!==void 0?o.opacity:1,ky(a)),n.opacityExit=Te(r.opacity!==void 0?r.opacity:1,0,by(a))):h&&(n.opacity=Te(r.opacity!==void 0?r.opacity:1,o.opacity!==void 0?o.opacity:1,a));for(let f=0;f<jy;f++){const m=`border${kp[f]}Radius`;let g=Ph(r,m),v=Ph(o,m);if(g===void 0&&v===void 0)continue;g||(g=0),v||(v=0),g===0||v===0||Th(g)===Th(v)?(n[m]=Math.max(Te(Ch(g),Ch(v),a),0),(Ot.test(v)||Ot.test(g))&&(n[m]+="%")):n[m]=v}(r.rotate||o.rotate)&&(n.rotate=Te(r.rotate||0,o.rotate||0,a))}function Ph(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const ky=bp(0,.5,Um),by=bp(.5,.95,pt);function bp(n,r,o){return a=>a<n?0:a>r?1:o(wr(n,r,a))}function Eh(n,r){n.min=r.min,n.max=r.max}function kt(n,r){Eh(n.x,r.x),Eh(n.y,r.y)}function zh(n,r){n.translate=r.translate,n.scale=r.scale,n.originPoint=r.originPoint,n.origin=r.origin}function Mh(n,r,o,a,u){return n-=r,n=os(n,1/o,a),u!==void 0&&(n=os(n,1/u,a)),n}function Ny(n,r=0,o=1,a=.5,u,h=n,f=n){if(Ot.test(r)&&(r=parseFloat(r),r=Te(f.min,f.max,r/100)-f.min),typeof r!="number")return;let m=Te(h.min,h.max,a);n===h&&(m-=r),n.min=Mh(n.min,r,o,m,u),n.max=Mh(n.max,r,o,m,u)}function Dh(n,r,[o,a,u],h,f){Ny(n,r[o],r[a],r[u],r.scale,h,f)}const Cy=["x","scaleX","originX"],Ty=["y","scaleY","originY"];function Lh(n,r,o,a){Dh(n.x,r,Cy,o?o.x:void 0,a?a.x:void 0),Dh(n.y,r,Ty,o?o.y:void 0,a?a.y:void 0)}function Ah(n){return n.translate===0&&n.scale===1}function Np(n){return Ah(n.x)&&Ah(n.y)}function Vh(n,r){return n.min===r.min&&n.max===r.max}function Py(n,r){return Vh(n.x,r.x)&&Vh(n.y,r.y)}function Rh(n,r){return Math.round(n.min)===Math.round(r.min)&&Math.round(n.max)===Math.round(r.max)}function Cp(n,r){return Rh(n.x,r.x)&&Rh(n.y,r.y)}function Fh(n){return gt(n.x)/gt(n.y)}function _h(n,r){return n.translate===r.translate&&n.scale===r.scale&&n.originPoint===r.originPoint}class Ey{constructor(){this.members=[]}add(r){xc(this.members,r),r.scheduleRender()}remove(r){if(wc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){const o=this.members.findIndex(u=>r===u);if(o===0)return!1;let a;for(let u=o;u>=0;u--){const h=this.members[u];if(h.isPresent!==!1){a=h;break}}return a?(this.promote(a),!0):!1}promote(r,o){const a=this.lead;if(r!==a&&(this.prevLead=a,this.lead=r,r.show(),a)){a.instance&&a.scheduleRender(),r.scheduleRender(),r.resumeFrom=a,o&&(r.resumeFrom.preserveOpacity=!0),a.snapshot&&(r.snapshot=a.snapshot,r.snapshot.latestValues=a.animationValues||a.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:u}=r.options;u===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:o,resumingFrom:a}=r;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function zy(n,r,o){let a="";const u=n.x.translate/r.x,h=n.y.translate/r.y,f=(o==null?void 0:o.z)||0;if((u||h||f)&&(a=`translate3d(${u}px, ${h}px, ${f}px) `),(r.x!==1||r.y!==1)&&(a+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:v,rotate:y,rotateX:w,rotateY:S,skewX:P,skewY:z}=o;v&&(a=`perspective(${v}px) ${a}`),y&&(a+=`rotate(${y}deg) `),w&&(a+=`rotateX(${w}deg) `),S&&(a+=`rotateY(${S}deg) `),P&&(a+=`skewX(${P}deg) `),z&&(a+=`skewY(${z}deg) `)}const m=n.x.scale*r.x,g=n.y.scale*r.y;return(m!==1||g!==1)&&(a+=`scale(${m}, ${g})`),a||"none"}const On={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},mi=typeof window<"u"&&window.MotionDebug!==void 0,bl=["","X","Y","Z"],My={visibility:"hidden"},Ih=1e3;let Dy=0;function Nl(n,r,o,a){const{latestValues:u}=r;u[n]&&(o[n]=u[n],r.setStaticValue(n,0),a&&(a[n]=0))}function Tp(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:r}=n.options;if(!r)return;const o=Vm(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:h}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Se,!(u||h))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&Tp(a)}function Pp({attachResizeListener:n,defaultParent:r,measureScroll:o,checkIsScrollRoot:a,resetTransform:u}){return class{constructor(f={},m=r==null?void 0:r()){this.id=Dy++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,mi&&(On.totalNodes=On.resolvedTargetDeltas=On.recalculatedProjection=0),this.nodes.forEach(Vy),this.nodes.forEach(Oy),this.nodes.forEach(By),this.nodes.forEach(Ry),mi&&window.MotionDebug.record(On)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new xy)}addEventListener(f,m){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new jc),this.eventHandlers.get(f).add(m)}notifyListeners(f,...m){const g=this.eventHandlers.get(f);g&&g.notify(...m)}hasListeners(f){return this.eventHandlers.has(f)}mount(f,m=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=vy(f),this.instance=f;const{layoutId:g,layout:v,visualElement:y}=this.options;if(y&&!y.current&&y.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),m&&(v||g)&&(this.isLayoutDirty=!0),n){let w;const S=()=>this.root.updateBlockedByResize=!1;n(f,()=>{this.root.updateBlockedByResize=!0,w&&w(),w=wy(S,250),Xo.hasAnimatedSinceResize&&(Xo.hasAnimatedSinceResize=!1,this.nodes.forEach(Bh))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&y&&(g||v)&&this.addEventListener("didUpdate",({delta:w,hasLayoutChanged:S,hasRelativeTargetChanged:P,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||y.getDefaultTransition()||Gy,{onLayoutAnimationStart:D,onLayoutAnimationComplete:F}=y.getProps(),O=!this.targetLayout||!Cp(this.targetLayout,z)||P,W=!S&&P;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||W||S&&(O||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(w,W);const X={...pc(E,"layout"),onPlay:D,onComplete:F};(y.shouldReduceMotion||this.options.layoutRoot)&&(X.delay=0,X.type=!1),this.startAnimation(X)}else S||Bh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Sn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Uy),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Tp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const w=this.path[y];w.shouldResetTransform=!0,w.updateScroll("snapshot"),w.options.layoutRoot&&w.willUpdate(!1)}const{layoutId:m,layout:g}=this.options;if(m===void 0&&!g)return;const v=this.getTransformTemplate();this.prevTransformTemplateValue=v?v(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Oh);return}this.isUpdating||this.nodes.forEach(_y),this.isUpdating=!1,this.nodes.forEach(Iy),this.nodes.forEach(Ly),this.nodes.forEach(Ay),this.clearAllSnapshots();const m=Bt.now();$e.delta=Zt(0,1e3/60,m-$e.timestamp),$e.timestamp=m,$e.isProcessing=!0,pl.update.process($e),pl.preRender.process($e),pl.render.process($e),$e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,oc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Fy),this.sharedNodes.forEach(Hy)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(m=!1),m){const g=a(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:g,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Np(this.projectionDelta),g=this.getTransformTemplate(),v=g?g(this.latestValues,""):void 0,y=v!==this.prevTransformTemplateValue;f&&(m||In(this.latestValues)||y)&&(u(this.instance,v),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const m=this.measurePageBox();let g=this.removeElementScroll(m);return f&&(g=this.removeTransform(g)),Ky(g),{animationId:this.root.animationId,measuredBox:m,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:m}=this.options;if(!m)return Ae();const g=m.measureViewportBox();if(!(((f=this.scroll)===null||f===void 0?void 0:f.wasRoot)||this.path.some(Qy))){const{scroll:y}=this.root;y&&(yr(g.x,y.offset.x),yr(g.y,y.offset.y))}return g}removeElementScroll(f){var m;const g=Ae();if(kt(g,f),!((m=this.scroll)===null||m===void 0)&&m.wasRoot)return g;for(let v=0;v<this.path.length;v++){const y=this.path[v],{scroll:w,options:S}=y;y!==this.root&&w&&S.layoutScroll&&(w.wasRoot&&kt(g,f),yr(g.x,w.offset.x),yr(g.y,w.offset.y))}return g}applyTransform(f,m=!1){const g=Ae();kt(g,f);for(let v=0;v<this.path.length;v++){const y=this.path[v];!m&&y.options.layoutScroll&&y.scroll&&y!==y.root&&xr(g,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),In(y.latestValues)&&xr(g,y.latestValues)}return In(this.latestValues)&&xr(g,this.latestValues),g}removeTransform(f){const m=Ae();kt(m,f);for(let g=0;g<this.path.length;g++){const v=this.path[g];if(!v.instance||!In(v.latestValues))continue;Bl(v.latestValues)&&v.updateSnapshot();const y=Ae(),w=v.measurePageBox();kt(y,w),Lh(m,v.latestValues,v.snapshot?v.snapshot.layoutBox:void 0,y)}return In(this.latestValues)&&Lh(m,this.latestValues),m}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var m;const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const v=!!this.resumingFrom||this!==g;if(!(f||v&&this.isSharedProjectionDirty||this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:w,layoutId:S}=this.options;if(!(!this.layout||!(w||S))){if(this.resolvedRelativeTargetAt=$e.timestamp,!this.targetDelta&&!this.relativeTarget){const P=this.getClosestProjectingParent();P&&P.layout&&this.animationProgress!==1?(this.relativeParent=P,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),yi(this.relativeTargetOrigin,this.layout.layoutBox,P.layout.layoutBox),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ae(),this.targetWithTransforms=Ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),qv(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):kt(this.target,this.layout.layoutBox),xp(this.target,this.targetDelta)):kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const P=this.getClosestProjectingParent();P&&!!P.resumingFrom==!!this.resumingFrom&&!P.options.layoutScroll&&P.target&&this.animationProgress!==1?(this.relativeParent=P,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),yi(this.relativeTargetOrigin,this.target,P.target),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}mi&&On.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bl(this.parent.latestValues)||yp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var f;const m=this.getLead(),g=!!this.resumingFrom||this!==m;let v=!0;if((this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty)&&(v=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(v=!1),this.resolvedRelativeTargetAt===$e.timestamp&&(v=!1),v)return;const{layout:y,layoutId:w}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||w))return;kt(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,P=this.treeScale.y;sy(this.layoutCorrected,this.treeScale,this.path,g),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=Ae());const{target:z}=m;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zh(this.prevProjectionDelta.x,this.projectionDelta.x),zh(this.prevProjectionDelta.y,this.projectionDelta.y)),vi(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==P||!_h(this.projectionDelta.x,this.prevProjectionDelta.x)||!_h(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z)),mi&&On.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var m;if((m=this.options.visualElement)===null||m===void 0||m.scheduleRender(),f){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vr(),this.projectionDelta=vr(),this.projectionDeltaWithTransform=vr()}setAnimationOrigin(f,m=!1){const g=this.snapshot,v=g?g.latestValues:{},y={...this.latestValues},w=vr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const S=Ae(),P=g?g.source:void 0,z=this.layout?this.layout.source:void 0,E=P!==z,D=this.getStack(),F=!D||D.members.length<=1,O=!!(E&&!F&&this.options.crossfade===!0&&!this.path.some(Wy));this.animationProgress=0;let W;this.mixTargetDelta=X=>{const B=X/1e3;Uh(w.x,f.x,B),Uh(w.y,f.y,B),this.setTargetDelta(w),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yi(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$y(this.relativeTarget,this.relativeTargetOrigin,S,B),W&&Py(this.relativeTarget,W)&&(this.isProjectionDirty=!1),W||(W=Ae()),kt(W,this.relativeTarget)),E&&(this.animationValues=y,Sy(y,v,this.latestValues,B,O,F)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Sn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Xo.hasAnimatedSinceResize=!0,this.currentAnimation=gy(0,Ih,{...f,onUpdate:m=>{this.mixTargetDelta(m),f.onUpdate&&f.onUpdate(m)},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ih),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:m,target:g,layout:v,latestValues:y}=f;if(!(!m||!g||!v)){if(this!==f&&this.layout&&v&&Ep(this.options.animationType,this.layout.layoutBox,v.layoutBox)){g=this.target||Ae();const w=gt(this.layout.layoutBox.x);g.x.min=f.target.x.min,g.x.max=g.x.min+w;const S=gt(this.layout.layoutBox.y);g.y.min=f.target.y.min,g.y.max=g.y.min+S}kt(m,g),xr(m,y),vi(this.projectionDeltaWithTransform,this.layoutCorrected,m,y)}}registerSharedNode(f,m){this.sharedNodes.has(f)||this.sharedNodes.set(f,new Ey),this.sharedNodes.get(f).add(m);const v=m.options.initialPromotionConfig;m.promote({transition:v?v.transition:void 0,preserveFollowOpacity:v&&v.shouldPreserveFollowOpacity?v.shouldPreserveFollowOpacity(m):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var f;const{layoutId:m}=this.options;return m?((f=this.getStack())===null||f===void 0?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:m}=this.options;return m?(f=this.getStack())===null||f===void 0?void 0:f.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:m,preserveFollowOpacity:g}={}){const v=this.getStack();v&&v.promote(this,g),f&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let m=!1;const{latestValues:g}=f;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(m=!0),!m)return;const v={};g.z&&Nl("z",f,v,this.animationValues);for(let y=0;y<bl.length;y++)Nl(`rotate${bl[y]}`,f,v,this.animationValues),Nl(`skew${bl[y]}`,f,v,this.animationValues);f.render();for(const y in v)f.setStaticValue(y,v[y]),this.animationValues&&(this.animationValues[y]=v[y]);f.scheduleRender()}getProjectionStyles(f){var m,g;if(!this.instance||this.isSVG)return;if(!this.isVisible)return My;const v={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,v.opacity="",v.pointerEvents=Qo(f==null?void 0:f.pointerEvents)||"",v.transform=y?y(this.latestValues,""):"none",v;const w=this.getLead();if(!this.projectionDelta||!this.layout||!w.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Qo(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!In(this.latestValues)&&(E.transform=y?y({},""):"none",this.hasProjected=!1),E}const S=w.animationValues||w.latestValues;this.applyTransformsToTarget(),v.transform=zy(this.projectionDeltaWithTransform,this.treeScale,S),y&&(v.transform=y(S,v.transform));const{x:P,y:z}=this.projectionDelta;v.transformOrigin=`${P.origin*100}% ${z.origin*100}% 0`,w.animationValues?v.opacity=w===this?(g=(m=S.opacity)!==null&&m!==void 0?m:this.latestValues.opacity)!==null&&g!==void 0?g:1:this.preserveOpacity?this.latestValues.opacity:S.opacityExit:v.opacity=w===this?S.opacity!==void 0?S.opacity:"":S.opacityExit!==void 0?S.opacityExit:0;for(const E in es){if(S[E]===void 0)continue;const{correct:D,applyTo:F}=es[E],O=v.transform==="none"?S[E]:D(S[E],w);if(F){const W=F.length;for(let X=0;X<W;X++)v[F[X]]=O}else v[E]=O}return this.options.layoutId&&(v.pointerEvents=w===this?Qo(f==null?void 0:f.pointerEvents)||"":"none"),v}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var m;return(m=f.currentAnimation)===null||m===void 0?void 0:m.stop()}),this.root.nodes.forEach(Oh),this.root.sharedNodes.clear()}}}function Ly(n){n.updateLayout()}function Ay(n){var r;const o=((r=n.resumeFrom)===null||r===void 0?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:u}=n.layout,{animationType:h}=n.options,f=o.source!==n.layout.source;h==="size"?bt(w=>{const S=f?o.measuredBox[w]:o.layoutBox[w],P=gt(S);S.min=a[w].min,S.max=S.min+P}):Ep(h,o.layoutBox,a)&&bt(w=>{const S=f?o.measuredBox[w]:o.layoutBox[w],P=gt(a[w]);S.max=S.min+P,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[w].max=n.relativeTarget[w].min+P)});const m=vr();vi(m,a,o.layoutBox);const g=vr();f?vi(g,n.applyTransform(u,!0),o.measuredBox):vi(g,a,o.layoutBox);const v=!Np(m);let y=!1;if(!n.resumeFrom){const w=n.getClosestProjectingParent();if(w&&!w.resumeFrom){const{snapshot:S,layout:P}=w;if(S&&P){const z=Ae();yi(z,o.layoutBox,S.layoutBox);const E=Ae();yi(E,a,P.layoutBox),Cp(z,E)||(y=!0),w.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=z,n.relativeParent=w)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:g,layoutDelta:m,hasLayoutChanged:v,hasRelativeTargetChanged:y})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function Vy(n){mi&&On.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Ry(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Fy(n){n.clearSnapshot()}function Oh(n){n.clearMeasurements()}function _y(n){n.isLayoutDirty=!1}function Iy(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function Bh(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Oy(n){n.resolveTargetDelta()}function By(n){n.calcProjection()}function Uy(n){n.resetSkewAndRotation()}function Hy(n){n.removeLeadSnapshot()}function Uh(n,r,o){n.translate=Te(r.translate,0,o),n.scale=Te(r.scale,1,o),n.origin=r.origin,n.originPoint=r.originPoint}function Hh(n,r,o,a){n.min=Te(r.min,o.min,a),n.max=Te(r.max,o.max,a)}function $y(n,r,o,a){Hh(n.x,r.x,o.x,a),Hh(n.y,r.y,o.y,a)}function Wy(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Gy={duration:.45,ease:[.4,0,.1,1]},$h=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Wh=$h("applewebkit/")&&!$h("chrome/")?Math.round:pt;function Gh(n){n.min=Wh(n.min),n.max=Wh(n.max)}function Ky(n){Gh(n.x),Gh(n.y)}function Ep(n,r,o){return n==="position"||n==="preserve-aspect"&&!Xv(Fh(r),Fh(o),.2)}function Qy(n){var r;return n!==n.root&&((r=n.scroll)===null||r===void 0?void 0:r.wasRoot)}const Yy=Pp({attachResizeListener:(n,r)=>Ni(n,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cl={current:void 0},zp=Pp({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Cl.current){const n=new Yy({});n.mount(window),n.setOptions({layoutScroll:!0}),Cl.current=n}return Cl.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Xy={pan:{Feature:fy},drag:{Feature:dy,ProjectionNode:zp,MeasureLayout:Sp}};function Kh(n,r,o){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,h=a[u];h&&Se.postRender(()=>h(r,Ei(r)))}class qy extends bn{mount(){const{current:r}=this.node;r&&(this.unmount=Xg(r,o=>(Kh(this.node,o,"Start"),a=>Kh(this.node,a,"End"))))}unmount(){}}class Zy extends bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Pi(Ni(this.node.current,"focus",()=>this.onFocus()),Ni(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qh(n,r,o){const{props:a}=n;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),h=a[u];h&&Se.postRender(()=>h(r,Ei(r)))}class Jy extends bn{mount(){const{current:r}=this.node;r&&(this.unmount=e2(r,o=>(Qh(this.node,o,"Start"),(a,{success:u})=>Qh(this.node,a,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Hl=new WeakMap,Tl=new WeakMap,e4=n=>{const r=Hl.get(n.target);r&&r(n)},t4=n=>{n.forEach(e4)};function n4({root:n,...r}){const o=n||document;Tl.has(o)||Tl.set(o,{});const a=Tl.get(o),u=JSON.stringify(r);return a[u]||(a[u]=new IntersectionObserver(t4,{root:n,...r})),a[u]}function r4(n,r,o){const a=n4(r);return Hl.set(n,o),a.observe(n),()=>{Hl.delete(n),a.unobserve(n)}}const i4={some:0,all:1};class o4 extends bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:a,amount:u="some",once:h}=r,f={root:o?o.current:void 0,rootMargin:a,threshold:typeof u=="number"?u:i4[u]},m=g=>{const{isIntersecting:v}=g;if(this.isInView===v||(this.isInView=v,h&&!v&&this.hasEnteredView))return;v&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",v);const{onViewportEnter:y,onViewportLeave:w}=this.node.getProps(),S=v?y:w;S&&S(g)};return r4(this.node.current,f,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(s4(r,o))&&this.startObserver()}unmount(){}}function s4({viewport:n={}},{viewport:r={}}={}){return o=>n[o]!==r[o]}const a4={inView:{Feature:o4},tap:{Feature:Jy},focus:{Feature:Zy},hover:{Feature:qy}},l4={layout:{ProjectionNode:zp,MeasureLayout:Sp}},$l={current:null},Mp={current:!1};function c4(){if(Mp.current=!0,!!ec)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>$l.current=n.matches;n.addListener(r),r()}else $l.current=!1}const u4=[...np,Ye,kn],d4=n=>u4.find(tp(n)),Yh=new WeakMap;function f4(n,r,o){for(const a in r){const u=r[a],h=o[a];if(Xe(u))n.addValue(a,u);else if(Xe(h))n.addValue(a,ki(u,{owner:n}));else if(h!==u)if(n.hasValue(a)){const f=n.getValue(a);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=n.getStaticValue(a);n.addValue(a,ki(f!==void 0?f:u,{owner:n}))}}for(const a in o)r[a]===void 0&&n.removeValue(a);return r}const Xh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class h4{scrapeMotionValuesFromProps(r,o,a){return{}}constructor({parent:r,props:o,presenceContext:a,reducedMotionConfig:u,blockInitialAnimation:h,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Tc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const P=Bt.now();this.renderScheduledAt<P&&(this.renderScheduledAt=P,Se.render(this.render,!1,!0))};const{latestValues:g,renderState:v,onUpdate:y}=f;this.onUpdate=y,this.latestValues=g,this.baseTarget={...g},this.initialValues=o.initial?{...g}:{},this.renderState=v,this.parent=r,this.props=o,this.presenceContext=a,this.depth=r?r.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!h,this.isControllingVariants=ms(o),this.isVariantNode=um(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:w,...S}=this.scrapeMotionValuesFromProps(o,{},this);for(const P in S){const z=S[P];g[P]!==void 0&&Xe(z)&&z.set(g[P],!1)}}mount(r){this.current=r,Yh.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),Mp.current||c4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$l.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Yh.delete(this.current),this.projection&&this.projection.unmount(),Sn(this.notifyUpdate),Sn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(r,o){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const a=Hn.has(r),u=o.on("change",m=>{this.latestValues[r]=m,this.props.onUpdate&&Se.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),h=o.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{u(),h(),f&&f(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in jr){const o=jr[r];if(!o)continue;const{isEnabled:a,Feature:u}=o;if(!this.features[r]&&u&&a(this.props)&&(this.features[r]=new u(this)),this.features[r]){const h=this.features[r];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ae()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<Xh.length;a++){const u=Xh[a];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const h="on"+u,f=r[h];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=f4(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const a=this.values.get(r);o!==a&&(a&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let a=this.values.get(r);return a===void 0&&o!==void 0&&(a=ki(o===null?void 0:o,{owner:this}),this.addValue(r,a)),a}readValue(r,o){var a;let u=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(a=this.getBaseTargetFromProps(this.props,r))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,r,this.options);return u!=null&&(typeof u=="string"&&(Jm(u)||$m(u))?u=parseFloat(u):!d4(u)&&kn.test(o)&&(u=Xm(r,o)),this.setBaseTarget(r,Xe(u)?u.get():u)),Xe(u)?u.get():u}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var o;const{initial:a}=this.props;let u;if(typeof a=="string"||typeof a=="object"){const f=ac(this.props,a,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);f&&(u=f[r])}if(a&&u!==void 0)return u;const h=this.getBaseTargetFromProps(this.props,r);return h!==void 0&&!Xe(h)?h:this.initialValues[r]!==void 0&&u===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new jc),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}}class Dp extends h4{constructor(){super(...arguments),this.KeyframeResolver=rp}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){return r.style?r.style[o]:void 0}removeValueFromRenderState(r,{vars:o,style:a}){delete o[r],delete a[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;Xe(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function m4(n){return window.getComputedStyle(n)}class p4 extends Dp{constructor(){super(...arguments),this.type="html",this.renderInstance=xm}readValueFromInstance(r,o){if(Hn.has(o)){const a=Cc(o);return a&&a.default||0}else{const a=m4(r),u=(gm(o)?a.getPropertyValue(o):a[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(r,{transformPagePoint:o}){return wp(r,o)}build(r,o,a){uc(r,o,a.transformTemplate)}scrapeMotionValuesFromProps(r,o,a){return mc(r,o,a)}}class g4 extends Dp{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ae}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(Hn.has(o)){const a=Cc(o);return a&&a.default||0}return o=wm.has(o)?o:ic(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,a){return km(r,o,a)}build(r,o,a){dc(r,o,this.isSVGTag,a.transformTemplate)}renderInstance(r,o,a,u){jm(r,o,a,u)}mount(r){this.isSVGTag=hc(r.tagName),super.mount(r)}}const v4=(n,r)=>sc(n)?new g4(r):new p4(r,{allowProjection:n!==R.Fragment}),y4=Hg({...Bv,...a4,...Xy,...l4},v4),ge=ig(y4),Mc=({size:n=64,className:r=""})=>c.jsxs("svg",{width:n,height:n,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`ganesh-svg ${r}`,"aria-label":"भगवान श्री गणेश",children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"ganeshGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"var(--color-gold-light)"}),c.jsx("stop",{offset:"50%",stopColor:"var(--color-gold)"}),c.jsx("stop",{offset:"100%",stopColor:"var(--color-gold-dark)"})]})}),c.jsx("circle",{cx:"50",cy:"50",r:"44",stroke:"url(#ganeshGold)",strokeWidth:"1.5",strokeDasharray:"3 3",opacity:"0.6"}),c.jsx("path",{d:"M50 20 C42 20 36 28 36 38 C36 48 42 54 48 58 C52 61 56 65 56 71 C56 78 50 82 44 82 C39 82 35 79 35 75",stroke:"url(#ganeshGold)",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M38 34 C30 32 23 37 23 45 C23 54 31 58 39 55",stroke:"url(#ganeshGold)",strokeWidth:"2.8",strokeLinecap:"round"}),c.jsx("path",{d:"M62 34 C70 32 77 37 77 45 C77 54 69 58 61 55",stroke:"url(#ganeshGold)",strokeWidth:"2.8",strokeLinecap:"round"}),c.jsx("path",{d:"M42 22 L50 12 L58 22 Z",stroke:"url(#ganeshGold)",strokeWidth:"2.5",fill:"rgba(201, 162, 75, 0.2)"}),c.jsx("circle",{cx:"50",cy:"10",r:"2.5",fill:"var(--color-marigold)"}),c.jsx("path",{d:"M47 30 Q50 36 53 30",stroke:"var(--color-vermilion)",strokeWidth:"2.5",strokeLinecap:"round"}),c.jsx("line",{x1:"50",y1:"26",x2:"50",y2:"35",stroke:"var(--color-vermilion)",strokeWidth:"2.5",strokeLinecap:"round"}),c.jsx("circle",{cx:"50",cy:"24",r:"1.5",fill:"var(--color-gold)"}),c.jsx("ellipse",{cx:"66",cy:"62",rx:"4",ry:"5",fill:"var(--color-marigold)",stroke:"url(#ganeshGold)",strokeWidth:"1.5"}),c.jsx("path",{d:"M42 50 L38 52",stroke:"url(#ganeshGold)",strokeWidth:"3",strokeLinecap:"round"})]}),_e=({size:n=28,className:r=""})=>c.jsxs("svg",{width:n,height:n,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r,"aria-label":"शुभ स्वास्तिक",children:[c.jsxs("g",{stroke:"var(--color-gold)",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"16",y1:"4",x2:"16",y2:"28"}),c.jsx("line",{x1:"4",y1:"16",x2:"28",y2:"16"}),c.jsx("line",{x1:"16",y1:"4",x2:"24",y2:"4"}),c.jsx("line",{x1:"28",y1:"16",x2:"28",y2:"24"}),c.jsx("line",{x1:"16",y1:"28",x2:"8",y2:"28"}),c.jsx("line",{x1:"4",y1:"16",x2:"4",y2:"8"})]}),c.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"var(--color-marigold)"}),c.jsx("circle",{cx:"22",cy:"10",r:"1.5",fill:"var(--color-marigold)"}),c.jsx("circle",{cx:"10",cy:"22",r:"1.5",fill:"var(--color-marigold)"}),c.jsx("circle",{cx:"22",cy:"22",r:"1.5",fill:"var(--color-marigold)"})]}),Nt=({size:n=38,className:r=""})=>c.jsxs("svg",{width:n,height:n,viewBox:"0 0 60 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`diya-glow ${r}`,"aria-label":"दीपक",children:[c.jsxs("defs",{children:[c.jsxs("radialGradient",{id:"flameGlow",cx:"50%",cy:"50%",r:"50%",children:[c.jsx("stop",{offset:"0%",stopColor:"#FFF275"}),c.jsx("stop",{offset:"60%",stopColor:"#FF9F1C"}),c.jsx("stop",{offset:"100%",stopColor:"#E71D36",stopOpacity:"0.2"})]}),c.jsxs("linearGradient",{id:"lampBowl",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"var(--color-gold-light)"}),c.jsx("stop",{offset:"50%",stopColor:"var(--color-gold)"}),c.jsx("stop",{offset:"100%",stopColor:"var(--color-maroon)"})]})]}),c.jsx("ellipse",{cx:"30",cy:"15",rx:"9",ry:"14",fill:"url(#flameGlow)",opacity:"0.8"}),c.jsx("path",{d:"M30 6 C32 11 35 15 35 19 C35 23 32.5 25 30 25 C27.5 25 25 23 25 19 C25 15 28 11 30 6 Z",fill:"#FFF9D2"}),c.jsx("path",{d:"M10 26 C12 38 22 43 30 43 C38 43 48 38 50 26 C45 28 35 29 30 29 C25 29 15 28 10 26 Z",fill:"url(#lampBowl)",stroke:"var(--color-gold)",strokeWidth:"1.5"}),c.jsx("ellipse",{cx:"30",cy:"44",rx:"10",ry:"2.5",fill:"var(--color-gold-dark)"})]}),x4=()=>c.jsxs("div",{className:"toran-container","aria-hidden":"true",children:[c.jsxs("svg",{className:"toran-svg",viewBox:"0 0 1200 70",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:"marigoldGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#FFAA00"}),c.jsx("stop",{offset:"50%",stopColor:"#FF7A00"}),c.jsx("stop",{offset:"100%",stopColor:"#D9480F"})]}),c.jsxs("linearGradient",{id:"marigoldGrad2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#FFD43B"}),c.jsx("stop",{offset:"100%",stopColor:"#F59F00"})]}),c.jsxs("linearGradient",{id:"leafGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[c.jsx("stop",{offset:"0%",stopColor:"#2B8A3E"}),c.jsx("stop",{offset:"100%",stopColor:"#1B4721"})]})]}),c.jsx("path",{d:"M0,8 Q150,30 300,8 Q450,30 600,8 Q750,30 900,8 Q1050,30 1200,8",fill:"none",stroke:"var(--color-gold)",strokeWidth:"2.5",opacity:"0.8"}),[0,150,300,450,600,750,900,1050,1200].map((n,r)=>c.jsxs("g",{transform:`translate(${n}, 0)`,children:[c.jsx("path",{d:"M0,8 C-12,25 -8,52 0,65 C8,52 12,25 0,8 Z",fill:"url(#leafGrad)",opacity:"0.9"}),c.jsx("line",{x1:"0",y1:"8",x2:"0",y2:"60",stroke:"#40C057",strokeWidth:"0.8"}),c.jsx("circle",{cx:"0",cy:"14",r:"9",fill:"url(#marigoldGrad1)"}),c.jsx("circle",{cx:"0",cy:"14",r:"6",fill:"url(#marigoldGrad2)"}),c.jsx("circle",{cx:"0",cy:"14",r:"2.5",fill:"#FFE066"})]},r)),[75,225,375,525,675,825,975,1125].map((n,r)=>c.jsxs("g",{transform:`translate(${n}, 22)`,children:[c.jsx("circle",{cx:"0",cy:"0",r:"7",fill:"url(#marigoldGrad2)"}),c.jsx("circle",{cx:"0",cy:"0",r:"4",fill:"url(#marigoldGrad1)"}),c.jsx("circle",{cx:"0",cy:"0",r:"1.5",fill:"#FFF9DB"})]},`sub-${r}`))]}),c.jsx("style",{children:`
        .toran-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 52px;
          overflow: hidden;
          z-index: 10;
          pointer-events: none;
        }
        .toran-svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      `})]}),Jt=({className:n=""})=>c.jsxs("div",{className:`mandala-divider-wrapper ${n}`,"aria-hidden":"true",children:[c.jsx("div",{className:"divider-line left-line"}),c.jsx("div",{className:"mandala-center-emblem",children:c.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("circle",{cx:"30",cy:"30",r:"24",stroke:"var(--color-gold)",strokeWidth:"1",strokeDasharray:"3 2"}),c.jsx("circle",{cx:"30",cy:"30",r:"16",stroke:"var(--color-gold)",strokeWidth:"1.5"}),c.jsx("circle",{cx:"30",cy:"30",r:"6",fill:"var(--color-gold)"}),[0,45,90,135,180,225,270,315].map((r,o)=>c.jsx("path",{d:"M30 30 Q36 20 30 14 Q24 20 30 30",fill:"rgba(201, 162, 75, 0.4)",stroke:"var(--color-gold)",strokeWidth:"0.8",transform:`rotate(${r} 30 30)`},o))]})}),c.jsx("div",{className:"divider-line right-line"}),c.jsx("style",{children:`
        .mandala-divider-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto;
          padding: 0 1rem;
          gap: 1rem;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--border-gold),
            var(--color-gold)
          );
        }
        .right-line {
          background: linear-gradient(
            90deg,
            var(--color-gold),
            var(--border-gold),
            transparent
          );
        }
        .mandala-center-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: slowSpin 35s linear infinite;
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mandala-center-emblem {
            animation: none;
          }
        }
      `})]}),Ko=({size:n=32,position:r="top-left"})=>{const o=()=>{switch(r){case"top-right":return"scale(-1, 1)";case"bottom-left":return"scale(1, -1)";case"bottom-right":return"scale(-1, -1)";default:return"none"}};return c.jsxs("svg",{width:n,height:n,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:o()},"aria-hidden":"true",children:[c.jsx("path",{d:"M6 6 Q25 4 35 15 Q45 27 34 38 Q25 46 16 38 Q8 30 18 20 Q24 15 28 22",stroke:"var(--color-gold)",strokeWidth:"1.8",strokeLinecap:"round",fill:"rgba(201, 162, 75, 0.08)"}),c.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"var(--color-marigold)"})]})},Y={meta:{title:"विवाह निमंत्रण | हृदयांश राहुल संग हृदयांशी शिल्पा | रामजे परिवार",coupleEnglish:"Rahul & Shilpa",groomNameEn:"Rahul",brideNameEn:"Shilpa",familyName:"रामजे परिवार, इन्दौर",websiteUrl:"https://rahul-shilpa-vivah.in",primaryPhone:"8109860849"},header:{topHeader:"॥ श्री गणेशाय नमः ॥",kuldeviBlessing:"॥ श्री कुलदेवी मातायै नमः ॥",pitraBlessing:"॥ श्री पितृदेवताभ्यो नमः ॥",shlok1:{sanskrit:`वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।
निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥`,meaning:"हे घुमावदार सूंड वाले, विशालकाय, करोड़ों सूर्यों के समान तेजस्वी प्रभु गणेश! मेरे सभी कार्यों को सदा बाधा-रहित पूर्ण करें।"},shlok2:{sanskrit:`मंगलम् भगवान विष्णुः, मंगलम् गरुडध्वजः ।
मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः ॥`,meaning:"भगवान विष्णु मंगलकारी हैं, गरुड़ की ध्वजा वाले मंगलकारी हैं, कमल नयन वाले मंगलकारी हैं और श्री हरि हम सभी का कल्याण करें।"}},hero:{eventBadge:"मांगलिक परिणयोत्सव",title:"स्नेहभोज",subTitle:"मांगलिक कार्यक्रम",tagline:"रामजे परिवार का स्नेहिल आमंत्रण",mainDateHighlight:"13 दिसम्बर 2026, रविवार",auspiciousQuote:"दो हृदयों का पावन संगम, सात फेरों का अमर बंधन"},couple:{groom:{title:"आयुष्मान",hindiName:"हृदयांश राहुल",englishName:"Rahul",grandfather:"स्व. श्री हल्कू प्रसाद रामजे",father:"श्री ओंकार प्रसाद रामजे",city:"इन्दौर (म.प्र.)"},bride:{title:"आयुष्मती",hindiName:"हृदयांशी शिल्पा",englishName:"Shilpa",grandfather:"स्व. श्री दामोदर जी गर्गसार",father:"श्री तारा जी गर्गसार",city:"इन्दौर (म.प्र.)"},invitationLetter:{salutation:"स्नेही स्वजन,",body:"कुलदेवी की असीम कृपा से एवं पूर्वजों के आशीर्वाद से हमारे परिवार में शुभ प्रसंग के मधुर पल आए हैं, प्रसंग है हमारे लाड़ले सुपुत्र हृदयांश राहुल (सुपौत्र: स्व. श्री हल्कू प्रसाद रामजे, सुपुत्र: ओंकार प्रसाद रामजे, इन्दौर) संग हृदयांशी शिल्पा (सुपौत्री: स्व. श्री दामोदर जी गर्गसार, सुपुत्री: श्री तारा जी गर्गसार, इन्दौर) के मंगल परिणयोत्सव का...",poetry:`जब होती है प्रभु की संयोग, स्वयं जुड़ जाते हैं,
अपनों के स्वागत के अवसर यूँ ही मिल जाते हैं,
हमारी खुशियों में आपका अभिनंदन है।`}},countdown:{targetISO:"2026-12-11T19:00:00+05:30",heading:"शुभ विवाह वेला की उल्टी गिनती",subtitle:"शुभ लग्न एवं बारात प्रस्थान",labels:{days:"दिन",hours:"घण्टे",minutes:"मिनट",seconds:"सेकण्ड"}},events:[{id:"event-1",number:"01",title:"खलमिट्टी एवं लगुन",englishTitle:"Khalmitti & Lagun",dateDevanagari:"06 दिसम्बर 2026, रविवार",timeDevanagari:"सायं 4:00 बजे",poeticLine:"अपनी मिट्टी, अपने संस्कार — खलमिट्टी पूजन के साथ शुरू हुआ खुशियों का त्यौहार",venueText:"निज निवास, इन्दौर",icon:"pot",startISO:"2026-12-06T16:00:00+05:30",endISO:"2026-12-06T19:00:00+05:30",isHighlight:!1},{id:"event-2",number:"02",title:"माता पूजन",englishTitle:"Mata Pujan",dateDevanagari:"09 दिसम्बर 2026, बुधवार",timeDevanagari:"सायं 4:00 बजे",poeticLine:"लाल लाल चुनरी चढ़ाएंगे, माता रानी का पूजन कर धन्य हो जाएंगे",venueText:"निज निवास, इन्दौर",icon:"temple",startISO:"2026-12-09T16:00:00+05:30",endISO:"2026-12-09T18:30:00+05:30",isHighlight:!1},{id:"event-3",number:"03",title:"मण्डप",englishTitle:"Mandap Ceremony",dateDevanagari:"10 दिसम्बर 2026, गुरुवार",timeDevanagari:"सायं 4:00 बजे",poeticLine:"हरे हरे पत्ते, पीले-पीले हाथ, मण्डप सजेगा जीजाजी के साथ",venueText:"निज निवास, इन्दौर",icon:"leaves",startISO:"2026-12-10T16:00:00+05:30",endISO:"2026-12-10T19:30:00+05:30",isHighlight:!1},{id:"event-4",number:"04",title:"बारात प्रस्थान",englishTitle:"Baraat Procession",dateDevanagari:"11 दिसम्बर 2026, शुक्रवार",timeDevanagari:"सायं 7:00 बजे",poeticLine:"नाचेंगे गाएंगे, खुशियां मनाएंगे, दुल्हनिया को आदर से लाएंगे",departure:"प्रस्थान: श्रीमान तारा जी गर्गसार, इन्दौर वालों के यहाँ सफेद मंदिर से",venueText:"गजानंद मंगल परिसर, भागीरथ पुरा, पुलिस चौकी के सामने, इन्दौर",icon:"horse",startISO:"2026-12-11T19:00:00+05:30",endISO:"2026-12-11T22:00:00+05:30",isHighlight:!0,hasSpecialCard:!0},{id:"event-5",number:"05",title:"शुभ लग्न (फेरे)",englishTitle:"Shubh Lagn (Saat Phere)",dateDevanagari:"11 दिसम्बर 2026, शुक्रवार",timeDevanagari:"मध्यरात्रि",poeticLine:"अग्नि को साक्षी मानकर सात वचन निभाएंगे, पवित्र फेरों के साथ जन्मों के साथी बन जाएंगे",venueText:"गजानंद मंगल परिसर, भागीरथ पुरा, पुलिस चौकी के सामने, इन्दौर",icon:"fire",startISO:"2026-12-11T23:30:00+05:30",endISO:"2026-12-12T03:00:00+05:30",isHighlight:!1},{id:"event-6",number:"06",title:"आशीर्वाद समारोह एवं स्वरुचिभोज",englishTitle:"Grand Reception & Snehbhoj",dateDevanagari:"13 दिसम्बर 2026, रविवार",timeDevanagari:"सायं 7:00 बजे से आपके आगमन तक",poeticLine:"स्नेह की यह शाम होगी, अपनों की महफिल सजेगी, आपके आशीर्वाद से यह बेला धन्य बनेगी",venueText:"निज निवास — जी-55, लाहिया कॉलोनी, खाटू श्याम मंदिर के पास, कबीटखेड़ी, इन्दौर",icon:"feast",startISO:"2026-12-13T19:00:00+05:30",endISO:"2026-12-13T23:59:00+05:30",isHighlight:!0,isGrandReception:!0}],venues:{primary:{name:"निज निवास",address:"जी-55, लाहिया कॉलोनी, खाटू श्याम मंदिर के पास, कबीटखेड़ी, इन्दौर (म.प्र.)",description:"खलमिट्टी, माता पूजन, मण्डप एवं 13 दिसम्बर का आशीर्वाद समारोह तथा स्वरुचिभोज",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=G-55+Lahiya+Colony+Near+Khatu+Shyam+Mandir+Kabitkhedi+Indore"},baraat:{name:"गजानंद मंगल परिसर",address:"गजानंद मंगल परिसर, भागीरथ पुरा, पुलिस चौकी के सामने, इन्दौर (म.प्र.)",departure:"बारात प्रस्थान: श्रीमान तारा जी गर्गसार, इन्दौर वालों के यहाँ सफेद मंदिर से",googleMapsUrl:"https://www.google.com/maps/search/?api=1&query=Gajanand+Mangal+Parisar+Bhagirathpura+Indore"}},family:{heading:"पारिवारिक स्नेह",subheading:"रामजे परिवार के सभी सदस्यों की ओर से आपका हार्दिक अभिनंदन",sections:[{id:"preshak",title:"प्रेषक",badge:"सादर आमंत्रण",items:[{name:"ओंकार प्रसाद रामजे",address:"जी-55, लाहिया कॉलोनी, कबीटखेड़ी, इन्दौर (म.प्र.)",phones:["8109860849","7566186719"]}]},{id:"darshanabhilashi",title:"दर्शनाभिलाषी",badge:"स्नेही जन",groups:[{role:"भैया - भाभीजी",members:["शैलेन्द्र - सौ. नेहा","कमलेश - सौ. कमला","रामू - सौ. भारती","श्यामू - सौ. मोनिका","शुभम","हिमांशु","मयंक"]},{role:"भतीजे",members:["अमन","ध्रुव","आरव","नमन","मीत","विवान"]}]},{id:"swagatatur",title:"स्वागतातुर",badge:"आतुर स्वागत हेतु",groups:[{role:"बुआ - फुफाजी",members:["राजकुमार जी - सौ. तुलसा"]},{role:"जीजी - जीजा जी",members:["सौ. हेमलता - संदीप जी","सौ. संध्या - खेमचन्द्र जी","सौ. खुशबू - अश्विन जी","सौ. कंचन - मनीष जी","शिवानी"]},{role:"मौसा - मौसीजी",members:["सुरेश जी - सौ. रंजना","वीरेन्द्र जी - सौ. पिंकी"]},{role:"मामा - मामीजी",members:["गुलाब जी - सौ. नीतू"]}]},{id:"vineet",title:"विनीत",badge:"कृपाभिलाषी",members:["लालचन्द्र - सौ. बेनी","शंकरलाल - सौ. ललता","भगवानदास - स्व. लक्ष्मी","ओंकारप्रसाद - सौ. लता","लीलाधर - सौ. शोभा","एवं समस्त रामजे परिवार"]},{id:"balmanuhar",title:"बाल मनुहार",badge:"नन्हें बालकों का स्नेह",quote:"हमारे मामा/चाचा की शादी का शुभ अवसर आया है, घर आँगन खुशियों से सजाया है, बजेगी शहनाई होगी खुशियों की बरसात, होगी नई जिंदगी की प्यारी शुरुआत",children:["वेदांत","लाभांशी (लाडो)","कनिष्का","रिद्धी","सिद्धी"]}]},rsvp:{heading:"आशीर्वाद एवं उपस्थिति",subtitle:"आपकी उपस्थिति हमारे लिए अनमोल है। कृपया अपनी उपस्थिति की सूचना देकर हमें अनुगृहीत करें।",whatsappNumber:"918109860849",contactPerson:"श्री ओंकार प्रसाद रामजे",alternatePhone:"7566186719",defaultMessageTemplate:(n,r,o)=>`सादर प्रणाम रामजे परिवार 🙏

मैं *${n||"अतिथि"}* (${r||"1"} सदस्य)
हृदयांश राहुल एवं हृदयांशी शिल्पा के मांगलिक विवाह एवं स्नेहभोज में *हम अवश्य पधारेंगे* और वर-वधू को अपना आशीर्वाद देंगे।
`+(o?`
संदेश: ${o}
`:"")+`
बहुत-बहुत बधाई एवं शुभकामनाएं! ✨`},music:{audioSrc:"/audio/shehnai.mp3"},footer:{blessing:"॥ वर-वधु को शुभाशीष प्रदान करें ॥",quote:"अतिथि देवो भवः — आपका आगमन ही हमारा सौभाग्य है।",copyright:"रामजे परिवार, इन्दौर (म.प्र.)",hashtag:"#RahulWedsShilpa2026"}};var Lp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qh=jn.createContext&&jn.createContext(Lp),w4=["attr","size","title"];function j4(n,r){if(n==null)return{};var o,a,u=S4(n,r);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(n);for(a=0;a<h.length;a++)o=h[a],r.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function S4(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)!==-1)continue;o[a]=n[a]}return o}function ss(){return ss=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)({}).hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},ss.apply(null,arguments)}function Zh(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);r&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,a)}return o}function as(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Zh(Object(o),!0).forEach(function(a){k4(n,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Zh(Object(o)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(o,a))})}return n}function k4(n,r,o){return(r=b4(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function b4(n){var r=N4(n,"string");return typeof r=="symbol"?r:r+""}function N4(n,r){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var a=o.call(n,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Ap(n){return n&&n.map((r,o)=>jn.createElement(r.tag,as({key:o},r.attr),Ap(r.child)))}function ie(n){return r=>jn.createElement(C4,ss({attr:as({},n.attr)},r),Ap(n.child))}function C4(n){var r=o=>{var a=n.attr,u=n.size,h=n.title,f=j4(n,w4),m=u||o.size||"1em",g;return o.className&&(g=o.className),n.className&&(g=(g?g+" ":"")+n.className),jn.createElement("svg",ss({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,a,f,{className:g,style:as(as({color:n.color||o.color},o.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),h&&jn.createElement("title",null,h),n.children)};return qh!==void 0?jn.createElement(qh.Consumer,null,o=>r(o)):r(Lp)}function Vp(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function T4(n){return ie({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(n)}function P4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function E4(n){return ie({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(n)}function Wl(n){return ie({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(n)}function z4(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function M4(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"},child:[]}]})(n)}function D4(n){return ie({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"},child:[]}]})(n)}function Rp(n){return ie({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function L4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(n)}function Jh(n){return ie({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(n)}function A4(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(n)}function V4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function Gl(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(n)}function R4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(n)}function Fp(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(n)}function F4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(n)}function xi(n){return ie({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function _4(n){return ie({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(n)}function zi(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function I4(n){return ie({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"},child:[]}]})(n)}function O4(n){return ie({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(n)}function B4(n){return ie({attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M128 0c35.346 0 64 28.654 64 64s-28.654 64-64 64c-35.346 0-64-28.654-64-64S92.654 0 128 0m119.283 354.179l-48-192A24 24 0 0 0 176 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H80a24 24 0 0 0-23.283 18.179l-48 192C4.935 369.305 16.383 384 32 384h56v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V384h56c15.591 0 27.071-14.671 23.283-29.821z"},child:[]}]})(n)}function U4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function H4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"},child:[]}]})(n)}function $4(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(n)}function ls(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.61 233.32L278.68 9.39c-12.52-12.52-32.83-12.52-45.36 0L9.39 233.32c-12.52 12.53-12.52 32.83 0 45.36l223.93 223.93c12.52 12.53 32.83 12.53 45.36 0l223.93-223.93c12.52-12.53 12.52-32.83 0-45.36zm-100.98 12.56l-84.21 77.73c-5.12 4.73-13.43 1.1-13.43-5.88V264h-96v64c0 4.42-3.58 8-8 8h-32c-4.42 0-8-3.58-8-8v-80c0-17.67 14.33-32 32-32h112v-53.73c0-6.97 8.3-10.61 13.43-5.88l84.21 77.73c3.43 3.17 3.43 8.59 0 11.76z"},child:[]}]})(n)}function Kl(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(n)}function cs(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function W4(n){return ie({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"},child:[]}]})(n)}function _p(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(n)}function Ql(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function G4(n){return ie({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"},child:[]}]})(n)}function K4(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z"},child:[]}]})(n)}function Q4(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"},child:[]}]})(n)}function Yl(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function Y4(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(n)}function X4(n){return ie({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(n)}const q4=({onOpen:n,isOpen:r})=>{const[o,a]=R.useState(!1),u=()=>{a(!0),setTimeout(()=>{n()},900)};return r?null:c.jsx(om,{children:!r&&c.jsxs(ge.div,{className:"intro-curtain-overlay",initial:{opacity:1},exit:{opacity:0},transition:{duration:.8,ease:"easeInOut"},role:"dialog","aria-modal":"true","aria-label":"विवाह निमंत्रण पत्रिका",children:[c.jsx(ge.div,{className:"curtain-door left-door",animate:o?{x:"-100%",rotateY:-35}:{x:0,rotateY:0},transition:{duration:.9,ease:[.77,0,.175,1]},children:c.jsx("div",{className:"door-inner-pattern"})}),c.jsx(ge.div,{className:"curtain-door right-door",animate:o?{x:"100%",rotateY:35}:{x:0,rotateY:0},transition:{duration:.9,ease:[.77,0,.175,1]},children:c.jsx("div",{className:"door-inner-pattern"})}),c.jsxs(ge.div,{className:"intro-center-card",animate:o?{scale:.7,opacity:0}:{scale:1,opacity:1},transition:{duration:.5,ease:"easeInOut"},children:[c.jsxs("div",{className:"intro-badge",children:[c.jsx(_e,{size:18}),c.jsx("span",{children:Y.header.topHeader}),c.jsx(_e,{size:18})]}),c.jsx("div",{className:"intro-ganesh",children:c.jsx(Mc,{size:80})}),c.jsx("p",{className:"intro-event-title",children:Y.hero.eventBadge}),c.jsxs("h1",{className:"intro-couple-names",children:[c.jsx("span",{className:"intro-name-hi",children:Y.couple.groom.hindiName}),c.jsx("span",{className:"intro-heart",children:"❤"}),c.jsx("span",{className:"intro-name-hi",children:Y.couple.bride.hindiName})]}),c.jsx("p",{className:"intro-english-names",children:Y.meta.coupleEnglish}),c.jsx("div",{className:"intro-gold-line"}),c.jsx("p",{className:"intro-family-tagline",children:Y.hero.tagline}),c.jsx("p",{className:"intro-date-highlight",children:Y.hero.mainDateHighlight}),c.jsxs(ge.button,{type:"button",className:"intro-open-btn",onClick:u,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"निमंत्रण खोलें",autoFocus:!0,children:[c.jsx(H4,{className:"btn-icon"}),c.jsx("span",{children:"निमंत्रण खोलें"}),c.jsx("span",{className:"btn-glow-ring"})]})]}),c.jsx("style",{children:`
            .intro-curtain-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              perspective: 1200px;
              background-color: #0F0507;
            }

            .curtain-door {
              position: absolute;
              top: 0;
              bottom: 0;
              width: 50.5%;
              height: 100%;
              background: linear-gradient(135deg, #7A1F2B 0%, #4D0E17 60%, #2A060C 100%);
              border: 3px solid var(--color-gold);
              box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.75);
              transform-origin: left center;
              overflow: hidden;
            }

            .left-door {
              left: 0;
              transform-origin: left center;
              border-right: 2px solid var(--color-gold-light);
            }

            .right-door {
              right: 0;
              transform-origin: right center;
              border-left: 2px solid var(--color-gold-light);
            }

            .door-inner-pattern {
              width: 100%;
              height: 100%;
              opacity: 0.15;
              background-image: radial-gradient(circle at 50% 50%, var(--color-gold) 1px, transparent 1px);
              background-size: 24px 24px;
            }

            .intro-center-card {
              position: relative;
              z-index: 10;
              max-width: 90%;
              width: 480px;
              padding: clamp(1.8rem, 4vw, 2.5rem);
              background: rgba(30, 10, 15, 0.94);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border: 2px solid var(--color-gold);
              border-radius: var(--radius-lg);
              text-align: center;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(201, 162, 75, 0.45);
            }

            .intro-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              color: var(--color-gold-light);
              font-size: 0.95rem;
              font-weight: 600;
              margin-bottom: 0.8rem;
              letter-spacing: 0.05em;
            }

            .intro-ganesh {
              display: flex;
              justify-content: center;
              margin-bottom: 0.8rem;
              filter: drop-shadow(0 0 16px rgba(245, 158, 11, 0.6));
            }

            .intro-event-title {
              color: var(--color-marigold);
              font-size: 1rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              font-weight: 600;
              margin-bottom: 0.4rem;
            }

            .intro-couple-names {
              font-size: clamp(1.6rem, 5vw, 2.3rem);
              color: #FFF3D6;
              line-height: 1.25;
              margin-bottom: 0.2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              gap: 0.5rem;
            }

            .intro-heart {
              color: #E63946;
              font-size: 1.4rem;
              animation: heartPulse 1.6s ease-in-out infinite;
            }

            @keyframes heartPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.25); }
            }

            .intro-english-names {
              font-family: var(--font-english-serif);
              font-size: 1.2rem;
              color: var(--color-gold-light);
              font-style: italic;
              letter-spacing: 0.05em;
              margin-bottom: 0.8rem;
            }

            .intro-gold-line {
              width: 120px;
              height: 2px;
              background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
              margin: 0.8rem auto;
            }

            .intro-family-tagline {
              color: #EBD6BC;
              font-size: 1.05rem;
              font-weight: 500;
              margin-bottom: 0.3rem;
            }

            .intro-date-highlight {
              color: var(--color-marigold);
              font-size: 1.15rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .intro-open-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.75rem;
              padding: 0.85rem 2.2rem;
              background: linear-gradient(135deg, #C9A24B 0%, #E8912D 50%, #996515 100%);
              color: #2D080E;
              border: 1.5px solid #FFF3D6;
              border-radius: var(--radius-full);
              font-size: 1.2rem;
              font-weight: 700;
              cursor: pointer;
              box-shadow: 0 10px 30px rgba(232, 145, 45, 0.45);
              position: relative;
            }

            .intro-open-btn .btn-icon {
              font-size: 1.3rem;
            }

            .btn-glow-ring {
              position: absolute;
              top: -4px;
              left: -4px;
              right: -4px;
              bottom: -4px;
              border-radius: var(--radius-full);
              border: 2px solid var(--color-gold);
              animation: ringPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              pointer-events: none;
            }

            @keyframes ringPulse {
              0% { transform: scale(1); opacity: 0.9; }
              100% { transform: scale(1.12); opacity: 0; }
            }

            @media (max-width: 480px) {
              .intro-center-card {
                padding: 1.5rem 1.2rem;
              }
              .intro-couple-names {
                font-size: 1.5rem;
              }
              .intro-open-btn {
                padding: 0.75rem 1.6rem;
                font-size: 1.05rem;
              }
            }
          `})]})})},Z4=()=>{const n=R.useRef(null),[r,o]=R.useState(!0);return R.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(!1);return}const u=n.current;if(!u)return;const h=u.getContext("2d");if(!h)return;let f,m=u.width=window.innerWidth,g=u.height=window.innerHeight;const v=()=>{u&&(m=u.width=window.innerWidth,g=u.height=window.innerHeight)};window.addEventListener("resize",v);const y=window.innerWidth<768?16:28,w=[{fill:"#FFA000",shadow:"rgba(230, 81, 0, 0.4)"},{fill:"#FFB300",shadow:"rgba(255, 111, 0, 0.4)"},{fill:"#F57C00",shadow:"rgba(216, 67, 21, 0.4)"},{fill:"#FF8F00",shadow:"rgba(230, 81, 0, 0.4)"},{fill:"#E65100",shadow:"rgba(191, 54, 12, 0.4)"}];class S{constructor(){this.reset(!0)}reset(O=!1){this.x=Math.random()*m,this.y=O?Math.random()*g:-30,this.size=Math.random()*9+8,this.speedY=Math.random()*1.2+.8,this.speedX=(Math.random()-.5)*.8,this.rotation=Math.random()*360,this.rotSpeed=(Math.random()-.5)*1.8,this.swing=Math.random()*Math.PI*2,this.swingSpeed=Math.random()*.02+.015,this.color=w[Math.floor(Math.random()*w.length)],this.opacity=Math.random()*.45+.45}update(){this.y+=this.speedY,this.swing+=this.swingSpeed,this.x+=Math.sin(this.swing)*.8+this.speedX,this.rotation+=this.rotSpeed,(this.y>g+20||this.x<-30||this.x>m+30)&&this.reset(!1)}draw(){h.save(),h.translate(this.x,this.y),h.rotate(this.rotation*Math.PI/180),h.globalAlpha=this.opacity,h.beginPath(),h.moveTo(0,-this.size),h.bezierCurveTo(this.size*.8,-this.size*.5,this.size*.8,this.size*.7,0,this.size),h.bezierCurveTo(-this.size*.8,this.size*.7,-this.size*.8,-this.size*.5,0,-this.size),h.closePath(),h.fillStyle=this.color.fill,h.shadowColor=this.color.shadow,h.shadowBlur=4,h.fill(),h.beginPath(),h.moveTo(0,-this.size*.6),h.lineTo(0,this.size*.6),h.strokeStyle="rgba(255, 236, 179, 0.45)",h.lineWidth=1,h.stroke(),h.restore()}}const P=Array.from({length:y},()=>new S);let z=!0;const E=()=>{z=!document.hidden};document.addEventListener("visibilitychange",E);const D=()=>{if(z){h.clearRect(0,0,m,g);for(let F=0;F<P.length;F++)P[F].update(),P[F].draw()}f=requestAnimationFrame(D)};return D(),()=>{cancelAnimationFrame(f),window.removeEventListener("resize",v),document.removeEventListener("visibilitychange",E)}},[r]),r?c.jsx("canvas",{ref:n,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:5}}):null},J4=()=>{const[n,r]=R.useState("light");R.useEffect(()=>{const u=localStorage.getItem("wedding-theme");if(u==="dark"||u==="light")r(u),document.documentElement.setAttribute("data-theme",u),o(u);else{const f=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";r(f),document.documentElement.setAttribute("data-theme",f),o(f)}},[]);const o=u=>{const h=document.querySelector('meta[name="theme-color"]');h&&h.setAttribute("content",u==="dark"?"#14090B":"#FFF8EC")},a=()=>{const u=n==="light"?"dark":"light";r(u),document.documentElement.setAttribute("data-theme",u),localStorage.setItem("wedding-theme",u),o(u)};return c.jsxs("button",{type:"button",className:"theme-toggle-btn",onClick:a,"aria-label":n==="dark"?"लाइट मोड चालू करें":"डार्क मोड चालू करें",title:n==="dark"?"दिन का स्वरूप (Light)":"रात्रि का स्वरूप (Dark)",children:[c.jsx("div",{className:`icon-container ${n}`,children:n==="dark"?c.jsx(L4,{className:"theme-icon sun"}):c.jsx(F4,{className:"theme-icon moon"})}),c.jsx("style",{children:`
        .theme-toggle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          color: var(--color-gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .theme-toggle-btn:hover {
          transform: scale(1.08);
          border-color: var(--color-gold);
          box-shadow: var(--shadow-gold);
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .icon-container.dark {
          color: var(--color-marigold);
          transform: rotate(180deg);
        }

        .icon-container.light {
          color: var(--color-maroon);
          transform: rotate(0deg);
        }

        .theme-icon {
          font-size: 1.15rem;
        }
      `})]})};let ze=null,qo=!1,Zo=null,us=[];const ex=[261.63,293.66,329.63,369.99,392,440,493.88,523.25,587.33],em=[{note:0,dur:1.2},{note:2,dur:.8},{note:3,dur:1},{note:4,dur:1.5},{note:4,dur:.6},{note:5,dur:.6},{note:6,dur:.8},{note:7,dur:2},{note:6,dur:.8},{note:5,dur:.8},{note:4,dur:1.2},{note:3,dur:1},{note:2,dur:1.2},{note:1,dur:.8},{note:0,dur:2.2}];function Pl(){if(!qo)try{const n=window.AudioContext||window.webkitAudioContext;ze||(ze=new n),ze.state==="suspended"&&ze.resume(),qo=!0,us=[];const r=ze.createGain();r.gain.setValueAtTime(.18,ze.currentTime),r.connect(ze.destination),[130.81,196,261.63].forEach(h=>{const f=ze.createOscillator(),m=ze.createGain();f.type="sawtooth",f.frequency.setValueAtTime(h,ze.currentTime);const g=ze.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(450,ze.currentTime),m.gain.setValueAtTime(.04,ze.currentTime),f.connect(g),g.connect(m),m.connect(r),f.start(),us.push({osc:f,gain:m})});let a=0;const u=()=>{if(!qo||!ze)return;const h=em[a%em.length],f=ex[h.note],m=ze.createOscillator(),g=ze.createGain(),v=ze.createBiquadFilter();m.type="sawtooth",m.frequency.setValueAtTime(f,ze.currentTime),m.frequency.exponentialRampToValueAtTime(f*1.008,ze.currentTime+h.dur*.4),v.type="bandpass",v.frequency.setValueAtTime(1400,ze.currentTime),v.Q.setValueAtTime(2.2,ze.currentTime);const y=ze.currentTime;g.gain.setValueAtTime(.001,y),g.gain.linearRampToValueAtTime(.12,y+.12),g.gain.exponentialRampToValueAtTime(.001,y+h.dur),m.connect(v),v.connect(g),g.connect(r),m.start(y),m.stop(y+h.dur),a++,Zo=setTimeout(u,h.dur*1e3)};u()}catch(n){console.warn("Web Audio synthesis error:",n)}}function tm(){qo=!1,Zo&&(clearTimeout(Zo),Zo=null),us.forEach(({osc:n,gain:r})=>{try{n.stop(),n.disconnect()}catch{}}),us=[]}const tx=()=>{const[n,r]=R.useState(!1),[o,a]=R.useState(!1),u=R.useRef(null);R.useEffect(()=>{const f=u.current;if(!f)return;const m=()=>{f.currentTime=0,f.play().catch(()=>{})},g=()=>{a(!0)};return f.addEventListener("ended",m),f.addEventListener("error",g),()=>{f.removeEventListener("ended",m),f.removeEventListener("error",g),tm()}},[]);const h=()=>{n?(u.current&&!o&&u.current.pause(),tm(),r(!1)):o?(Pl(),r(!0)):u.current?u.current.play().then(()=>{r(!0)}).catch(f=>{console.log("Audio file playback blocked or missing, using traditional synthesizer:",f),a(!0),Pl(),r(!0)}):(a(!0),Pl(),r(!0))};return c.jsxs("div",{className:"music-toggle-wrapper",children:[c.jsx("audio",{ref:u,src:Y.music.audioSrc,preload:"none","aria-hidden":"true"}),c.jsx("button",{type:"button",className:`music-btn ${n?"playing":""}`,onClick:h,"aria-label":n?"शहनाई संगीत बंद करें":"शहनाई संगीत शुरू करें",title:n?"संगीत बंद करें":"मांगलिक शहनाई बजाएं",children:n?c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"equalizer-bars","aria-hidden":"true",children:[c.jsx("span",{className:"bar bar-1"}),c.jsx("span",{className:"bar bar-2"}),c.jsx("span",{className:"bar bar-3"})]}),c.jsx(Fp,{className:"music-icon"})]}):c.jsx(c.Fragment,{children:c.jsx(P4,{className:"music-icon muted"})})}),c.jsx("style",{children:`
        .music-toggle-wrapper {
          display: inline-flex;
          align-items: center;
        }

        .music-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          position: relative;
          cursor: pointer;
        }

        .music-btn:hover {
          transform: scale(1.08);
          border-color: var(--color-gold);
          box-shadow: var(--shadow-gold);
          color: var(--color-marigold-deep);
        }

        .music-btn.playing {
          border-color: var(--color-gold);
          background: var(--card-bg);
          box-shadow: 0 0 16px rgba(201, 162, 75, 0.45);
        }

        .music-icon {
          font-size: 1.1rem;
        }

        .music-icon.muted {
          color: var(--text-muted);
        }

        /* Equalizer Wave Bars */
        .equalizer-bars {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 14px;
          position: absolute;
          top: 6px;
          right: 6px;
        }

        .bar {
          width: 2px;
          background: var(--color-marigold);
          border-radius: 1px;
          animation: wave 1.2s ease-in-out infinite alternate;
        }

        .bar-1 { height: 6px; animation-delay: 0.1s; }
        .bar-2 { height: 12px; animation-delay: 0.3s; }
        .bar-3 { height: 8px; animation-delay: 0.2s; }

        @keyframes wave {
          0% { height: 3px; }
          100% { height: 14px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bar { animation: none; height: 8px; }
        }
      `})]})},nx=()=>{const[n,r]=R.useState(!1),[o,a]=R.useState(!1),[u,h]=R.useState(""),f=typeof window<"u"?window.location.origin+window.location.pathname:Y.meta.websiteUrl,m=u.trim()?`${f}?guest=${encodeURIComponent(u.trim())}`:f,g=Y.meta.title,v=`॥ श्री गणेशाय नमः ॥

स्नेही स्वजन, हमारे लाड़ले सुपुत्र हृदयांश राहुल संग हृदयांशी शिल्पा के शुभ विवाह एवं स्नेहभोज में आप सपरिवार सादर आमंत्रित हैं।

दिनांक: 13 दिसम्बर 2026, इन्दौर
डिजिटल निमंत्रण पत्र देखें:
`,y=async()=>{if(navigator.share&&!u)try{await navigator.share({title:g,text:v,url:m});return}catch(P){P.name!=="AbortError"&&r(!0)}else r(!0)},w=async()=>{try{await navigator.clipboard.writeText(m),a(!0),setTimeout(()=>a(!1),2500)}catch{const z=document.createElement("input");z.value=m,document.body.appendChild(z),z.select(),document.execCommand("copy"),document.body.removeChild(z),a(!0),setTimeout(()=>a(!1),2500)}},S=()=>`https://api.whatsapp.com/send?text=${encodeURIComponent(`${v}${m}`)}`;return c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",className:"share-trigger-btn",onClick:y,"aria-label":"निमंत्रण साझा करें",title:"निमंत्रण पत्र साझा करें (Share)",children:c.jsx(A4,{className:"share-icon"})}),n&&c.jsxs("div",{className:"share-modal-overlay",onClick:()=>r(!1),children:[c.jsxs("div",{className:"share-modal-content royal-card",onClick:P=>P.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"share-title",children:[c.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>r(!1),"aria-label":"बंद करें",children:c.jsx(Rp,{})}),c.jsx("h3",{id:"share-title",className:"modal-title",children:"निमंत्रण पत्र साझा करें"}),c.jsx("p",{className:"modal-subtitle",children:"अपने स्नेहीजनों और मित्रों को व्हाट्सएप या लिंक द्वारा आमंत्रित करें।"}),c.jsxs("div",{className:"personalize-box",children:[c.jsxs("label",{htmlFor:"guest-input",className:"personalize-label",children:[c.jsx(D4,{}),c.jsx("span",{children:"अतिथि का नाम जोड़ें (Personalize Link):"})]}),c.jsx("input",{id:"guest-input",type:"text",placeholder:"उदा. शर्मा जी / वर्मा परिवार",value:u,onChange:P=>h(P.target.value),className:"guest-name-input"}),u.trim()&&c.jsxs("p",{className:"preview-note",children:['अतिथि को दिखेगा: "प्रिय ',c.jsx("strong",{children:u.trim()}),' जी, आपका हार्दिक स्वागत है"']})]}),c.jsxs("div",{className:"link-copy-container",children:[c.jsx("input",{type:"text",readOnly:!0,value:m,className:"link-input",onClick:P=>P.target.select()}),c.jsxs("button",{type:"button",className:`copy-btn ${o?"copied":""}`,onClick:w,children:[o?c.jsx(Ql,{}):c.jsx(Kl,{}),c.jsx("span",{children:o?"कॉपी हुआ!":"कॉपी"})]})]}),c.jsxs("a",{href:S(),target:"_blank",rel:"noopener noreferrer",className:"whatsapp-share-btn",children:[c.jsx(Vp,{className:"wa-icon"}),c.jsx("span",{children:"व्हाट्सएप पर भेजें"})]})]}),c.jsx("style",{children:`
            .share-trigger-btn {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: var(--card-bg-elevated);
              border: 1.5px solid var(--border-gold);
              color: var(--color-maroon);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: var(--shadow-sm);
              transition: var(--transition-smooth);
              cursor: pointer;
            }

            .share-trigger-btn:hover {
              transform: scale(1.08);
              border-color: var(--color-gold);
              box-shadow: var(--shadow-gold);
              color: var(--color-marigold-deep);
            }

            .share-icon {
              font-size: 1.05rem;
            }

            .share-modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(15, 5, 8, 0.75);
              backdrop-filter: blur(8px);
              z-index: 10000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1.2rem;
            }

            .share-modal-content {
              width: 100%;
              max-width: 460px;
              padding: 2rem 1.6rem;
              text-align: center;
              position: relative;
            }

            .modal-close-btn {
              position: absolute;
              top: 1rem;
              right: 1rem;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: var(--card-bg-elevated);
              border: 1px solid var(--border-gold);
              color: var(--text-muted);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: var(--transition-smooth);
            }

            .modal-close-btn:hover {
              color: var(--color-maroon);
              border-color: var(--color-gold);
            }

            .modal-title {
              font-size: 1.5rem;
              color: var(--color-maroon);
              margin-bottom: 0.4rem;
            }

            .modal-subtitle {
              font-size: 0.95rem;
              color: var(--text-muted);
              margin-bottom: 1.4rem;
            }

            .personalize-box {
              background: var(--bg-secondary);
              border: 1px dashed var(--border-gold);
              border-radius: var(--radius-md);
              padding: 1rem;
              margin-bottom: 1.2rem;
              text-align: left;
            }

            .personalize-label {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 0.88rem;
              font-weight: 600;
              color: var(--color-maroon);
              margin-bottom: 0.4rem;
            }

            .guest-name-input {
              width: 100%;
              padding: 0.6rem 0.9rem;
              border-radius: var(--radius-sm);
              border: 1px solid var(--border-gold);
              background: var(--card-bg-elevated);
              color: var(--text-primary);
              font-family: inherit;
              font-size: 0.95rem;
            }

            .preview-note {
              font-size: 0.82rem;
              color: var(--color-marigold-deep);
              margin-top: 0.4rem;
            }

            .link-copy-container {
              display: flex;
              gap: 0.5rem;
              margin-bottom: 1.2rem;
            }

            .link-input {
              flex: 1;
              padding: 0.6rem 0.8rem;
              border-radius: var(--radius-sm);
              border: 1px solid var(--border-gold);
              background: var(--bg-primary);
              color: var(--text-secondary);
              font-size: 0.85rem;
              text-overflow: ellipsis;
            }

            .copy-btn {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              padding: 0.6rem 1rem;
              background: var(--card-bg-elevated);
              border: 1.5px solid var(--color-gold);
              color: var(--color-maroon);
              border-radius: var(--radius-sm);
              font-weight: 600;
              font-size: 0.9rem;
              transition: var(--transition-smooth);
            }

            .copy-btn.copied {
              background: #25D366;
              border-color: #25D366;
              color: #FFF;
            }

            .whatsapp-share-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.6rem;
              width: 100%;
              padding: 0.8rem;
              background: #25D366;
              color: #FFF;
              border-radius: var(--radius-full);
              font-weight: 700;
              font-size: 1.05rem;
              box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
              transition: var(--transition-smooth);
            }

            .whatsapp-share-btn:hover {
              background: #1EBE5B;
              transform: translateY(-2px);
            }

            .wa-icon {
              font-size: 1.3rem;
            }
          `})]})]})},rx=()=>{const[n,r]=R.useState(!1),[o,a]=R.useState(!1);R.useEffect(()=>{const f=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const u=[{label:"शुभ श्लोक",href:"#shlok"},{label:"वर-वधू",href:"#couple"},{label:"कार्यक्रम",href:"#events"},{label:"स्थल",href:"#venue"},{label:"परिवार",href:"#family"},{label:"आशीर्वाद (RSVP)",href:"#rsvp"}],h=(f,m)=>{f.preventDefault(),a(!1);const g=document.querySelector(m);g&&g.scrollIntoView({behavior:"smooth"})};return c.jsxs("header",{className:`royal-navbar ${n?"scrolled":""}`,children:[c.jsxs("div",{className:"nav-container",children:[c.jsxs("a",{href:"#hero",className:"nav-brand",onClick:f=>h(f,"#hero"),children:[c.jsx(_e,{size:20}),c.jsx("span",{className:"brand-names",children:Y.meta.coupleEnglish})]}),c.jsx("nav",{className:"desktop-nav","aria-label":"मुख्य नेविगेशन",children:u.map(f=>c.jsx("a",{href:f.href,className:"nav-link",onClick:m=>h(m,f.href),children:f.label},f.href))}),c.jsxs("div",{className:"nav-actions",children:[c.jsx(tx,{}),c.jsx(J4,{}),c.jsx(nx,{}),c.jsx("button",{type:"button",className:"mobile-hamburger-btn",onClick:()=>a(!o),"aria-label":o?"मेन्यू बंद करें":"मेन्यू खोलें",children:o?c.jsx(Rp,{}):c.jsx(Y4,{})})]})]}),o&&c.jsx("div",{className:"mobile-drawer royal-card",role:"navigation","aria-label":"मोबाइल नेविगेशन",children:u.map(f=>c.jsx("a",{href:f.href,className:"mobile-drawer-link",onClick:m=>h(m,f.href),children:f.label},f.href))}),c.jsx("style",{children:`
        .royal-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
        }

        .royal-navbar.scrolled {
          background: var(--card-bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-gold);
          box-shadow: var(--shadow-sm);
          padding: 0.5rem 1rem;
        }

        .nav-container {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-english-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-maroon);
          letter-spacing: 0.04em;
        }

        .brand-names {
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-gold-dark) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          position: relative;
          padding: 0.3rem 0;
          transition: var(--transition-smooth);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--color-gold);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--color-maroon);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .mobile-hamburger-btn {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          color: var(--color-maroon);
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          cursor: pointer;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 1rem;
          right: 1rem;
          margin-top: 0.5rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-drawer-link {
          padding: 0.6rem 1rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          border-radius: var(--radius-sm);
          transition: var(--transition-smooth);
        }

        .mobile-drawer-link:hover {
          background: var(--border-gold);
          color: var(--color-maroon);
        }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none;
          }
          .mobile-hamburger-btn {
            display: flex;
          }
        }
      `})]})},ix=()=>{const[n,r]=R.useState("");return R.useEffect(()=>{if(typeof window<"u"){const a=new URLSearchParams(window.location.search).get("guest");a&&a.trim()&&r(a.trim())}},[]),n?c.jsxs(ge.div,{className:"personalized-guest-wrapper",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[c.jsxs("div",{className:"personalized-card royal-card",children:[c.jsxs("div",{className:"guest-badge",children:[c.jsx(_e,{size:16}),c.jsx("span",{children:"सादर आमंत्रण"}),c.jsx(_e,{size:16})]}),c.jsxs("h2",{className:"guest-greeting-text",children:["प्रिय ",c.jsx("span",{className:"guest-highlight-name",children:n})," जी,"]}),c.jsx("p",{className:"guest-welcome-message",children:"आपका एवं आपके परिवार का हमारे पारिवारिक मांगलिक प्रसंग में हार्दिक स्वागत एवं स्नेहिल अभिनंदन है।"})]}),c.jsx("style",{children:`
        .personalized-guest-wrapper {
          width: 100%;
          max-width: 680px;
          margin: 1.5rem auto 0 auto;
          padding: 0 1rem;
        }

        .personalized-card {
          padding: 1.2rem 1.6rem;
          text-align: center;
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--bg-secondary) 100%
          );
          border: 1.5px solid var(--color-gold);
          box-shadow: 0 8px 25px rgba(201, 162, 75, 0.25);
        }

        .guest-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.4rem;
        }

        .guest-greeting-text {
          font-size: clamp(1.3rem, 3.5vw, 1.8rem);
          color: var(--color-maroon);
          margin-bottom: 0.3rem;
          font-weight: 700;
        }

        .guest-highlight-name {
          color: var(--color-marigold-deep);
          text-decoration: underline;
          text-decoration-color: var(--color-gold);
          text-underline-offset: 4px;
        }

        .guest-welcome-message {
          font-size: clamp(0.92rem, 2vw, 1.05rem);
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }
      `})]}):null},ox=()=>{const n=r=>{const o=document.querySelector(r);o&&o.scrollIntoView({behavior:"smooth"})};return c.jsxs("section",{id:"hero",className:"hero-section",children:[c.jsx(x4,{}),c.jsx("div",{className:"ambient-diya diya-left","aria-hidden":"true",children:c.jsx(Nt,{size:52})}),c.jsx("div",{className:"ambient-diya diya-right","aria-hidden":"true",children:c.jsx(Nt,{size:52})}),c.jsxs("div",{className:"container hero-content",children:[c.jsx(ge.div,{className:"hero-manglik-top",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:c.jsxs("div",{className:"manglik-pill",children:[c.jsx(_e,{size:16}),c.jsx("span",{className:"shri-ganesh-text",children:Y.header.topHeader}),c.jsx(_e,{size:16})]})}),c.jsx(ge.div,{className:"hero-ganesh-wrapper",initial:{scale:.7,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.9,delay:.15,type:"spring"},children:c.jsx(Mc,{size:88})}),c.jsxs(ge.div,{className:"ancestor-blessings",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.3},children:[c.jsx("span",{children:Y.header.kuldeviBlessing}),c.jsx("span",{className:"bullet-dot",children:"•"}),c.jsx("span",{children:Y.header.pitraBlessing})]}),c.jsxs(ge.div,{className:"hero-titles-wrapper",initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[c.jsx("div",{className:"hero-ceremony-badge",children:c.jsx("span",{children:Y.hero.subTitle})}),c.jsx("h1",{className:"hero-main-title",children:Y.hero.title}),c.jsx("p",{className:"hero-tagline",children:Y.hero.tagline})]}),c.jsx(ix,{}),c.jsxs(ge.div,{className:"couple-names-royal-card royal-card",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.8,delay:.55},children:[c.jsxs("div",{className:"couple-names-english font-english",children:[c.jsx("span",{className:"groom-en",children:Y.meta.groomNameEn}),c.jsx("span",{className:"en-heart",children:c.jsx(zi,{})}),c.jsx("span",{className:"bride-en",children:Y.meta.brideNameEn})]}),c.jsx("div",{className:"names-ornament-line"}),c.jsxs("div",{className:"couple-names-hindi",children:[c.jsx("span",{className:"groom-hi",children:Y.couple.groom.hindiName}),c.jsx("span",{className:"sang-word",children:"संग"}),c.jsx("span",{className:"bride-hi",children:Y.couple.bride.hindiName})]}),c.jsx("p",{className:"auspicious-quote",children:Y.hero.auspiciousQuote})]}),c.jsx(ge.div,{className:"hero-date-banner",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.7},children:c.jsxs("div",{className:"date-badge-box",children:[c.jsx(Yl,{className:"date-icon"}),c.jsxs("div",{className:"date-text-content",children:[c.jsx("span",{className:"date-label",children:"मांगलिक स्नेहभोज एवं आशीर्वाद समारोह"}),c.jsx("strong",{className:"date-highlight-text",children:Y.hero.mainDateHighlight})]})]})}),c.jsxs(ge.div,{className:"hero-cta-group",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[c.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>n("#events"),children:[c.jsx("span",{children:"मांगलिक कार्यक्रम देखें"}),c.jsx(_p,{})]}),c.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>n("#rsvp"),children:c.jsx("span",{children:"आशीर्वाद दें (RSVP)"})})]}),c.jsx(Jt,{className:"hero-bottom-mandala"})]}),c.jsx("style",{children:`
        .hero-section {
          position: relative;
          padding-top: clamp(6.5rem, 14vw, 8.5rem);
          padding-bottom: clamp(3rem, 6vw, 4.5rem);
          text-align: center;
          overflow: hidden;
          background: radial-gradient(circle at 50% 15%, rgba(201, 162, 75, 0.12) 0%, transparent 60%);
        }

        .ambient-diya {
          position: absolute;
          top: 140px;
          pointer-events: none;
          z-index: 2;
        }

        .diya-left {
          left: clamp(10px, 5vw, 60px);
        }

        .diya-right {
          right: clamp(10px, 5vw, 60px);
        }

        @media (max-width: 640px) {
          .ambient-diya {
            display: none;
          }
        }

        .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-manglik-top {
          margin-bottom: 0.8rem;
        }

        .manglik-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.35rem 1.2rem;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
        }

        .shri-ganesh-text {
          font-family: var(--font-heading-hindi);
          color: var(--color-maroon);
          font-size: clamp(0.95rem, 2.5vw, 1.25rem);
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .hero-ganesh-wrapper {
          margin-bottom: 0.6rem;
          filter: drop-shadow(0 0 16px rgba(201, 162, 75, 0.45));
        }

        .ancestor-blessings {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          font-size: clamp(0.78rem, 2vw, 0.9rem);
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 1.2rem;
        }

        .bullet-dot {
          color: var(--color-gold);
        }

        .hero-titles-wrapper {
          margin-bottom: 1.2rem;
        }

        .hero-ceremony-badge {
          display: inline-block;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .hero-main-title {
          font-size: clamp(2.5rem, 8vw, 4.4rem);
          color: var(--color-maroon);
          line-height: 1.15;
          margin-bottom: 0.3rem;
          text-shadow: 0 2px 12px rgba(122, 31, 43, 0.12);
        }

        .hero-tagline {
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: var(--text-secondary);
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        /* Royal Couple Card */
        .couple-names-royal-card {
          width: 100%;
          max-width: 680px;
          padding: clamp(1.6rem, 5vw, 2.6rem);
          margin: 1.5rem 0;
          border-width: 2px;
          border-color: var(--color-gold);
        }

        .couple-names-english {
          font-size: clamp(2.2rem, 7vw, 3.8rem);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.6rem, 2vw, 1.2rem);
          line-height: 1.1;
          color: var(--color-maroon);
          font-weight: 700;
          font-style: italic;
        }

        .en-heart {
          color: #E63946;
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          animation: heartBeat 2s ease-in-out infinite;
          display: flex;
          align-items: center;
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .names-ornament-line {
          width: 140px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
          margin: 1rem auto;
        }

        .couple-names-hindi {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.3rem, 4.5vw, 2.2rem);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }

        .sang-word {
          font-family: var(--font-english-serif);
          color: var(--color-marigold-deep);
          font-size: 1.1rem;
          font-weight: 600;
          font-style: italic;
        }

        .auspicious-quote {
          font-size: clamp(0.95rem, 2.5vw, 1.12rem);
          color: var(--text-muted);
          margin: 0;
          font-style: italic;
        }

        /* Hero Date Banner */
        .hero-date-banner {
          margin-bottom: 2rem;
          width: 100%;
          max-width: 580px;
        }

        .date-badge-box {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          padding: 0.9rem 1.8rem;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-md);
        }

        .date-icon {
          font-size: 1.6rem;
          color: var(--color-marigold-deep);
          flex-shrink: 0;
        }

        .date-text-content {
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .date-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .date-highlight-text {
          font-size: clamp(1.1rem, 3.2vw, 1.4rem);
          color: var(--color-maroon);
          font-weight: 700;
        }

        /* Hero CTA Group */
        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-bottom-mandala {
          margin-top: 3rem;
        }
      `})]})},sx=()=>c.jsxs("section",{id:"shlok",className:"section-wrapper shlok-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(_e,{size:16}),c.jsx("span",{children:"पावन मंगलाचरण"}),c.jsx(_e,{size:16})]}),c.jsx("h2",{className:"section-title",children:"शुभ श्लोक"}),c.jsx("p",{className:"section-subtitle",children:"विघ्नहर्ता श्री गणेश एवं जगतपालक श्री हरि विष्णु की पावन स्तुति"})]}),c.jsxs("div",{className:"shlok-cards-grid",children:[c.jsxs(ge.div,{className:"shlok-card royal-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.7},children:[c.jsxs("div",{className:"shlok-card-header",children:[c.jsx(Nt,{size:34}),c.jsx("h3",{className:"shlok-deity-title",children:"श्री गणेश वंदना"}),c.jsx(Nt,{size:34})]}),c.jsx("div",{className:"shlok-sanskrit-box",children:c.jsx("p",{className:"sanskrit-text",children:Y.header.shlok1.sanskrit})}),c.jsx("div",{className:"shlok-divider"}),c.jsxs("div",{className:"shlok-meaning-box",children:[c.jsx("span",{className:"meaning-label",children:"भावार्थ:"}),c.jsx("p",{className:"meaning-text",children:Y.header.shlok1.meaning})]})]}),c.jsxs(ge.div,{className:"shlok-card royal-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.7,delay:.2},children:[c.jsxs("div",{className:"shlok-card-header",children:[c.jsx(Nt,{size:34}),c.jsx("h3",{className:"shlok-deity-title",children:"मंगलाष्टक स्तुति"}),c.jsx(Nt,{size:34})]}),c.jsx("div",{className:"shlok-sanskrit-box",children:c.jsx("p",{className:"sanskrit-text",children:Y.header.shlok2.sanskrit})}),c.jsx("div",{className:"shlok-divider"}),c.jsxs("div",{className:"shlok-meaning-box",children:[c.jsx("span",{className:"meaning-label",children:"भावार्थ:"}),c.jsx("p",{className:"meaning-text",children:Y.header.shlok2.meaning})]})]})]}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .shlok-section {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--bg-secondary) 50%,
            transparent 100%
          );
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .shlok-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: clamp(1.5rem, 4vw, 2.5rem);
          max-width: 980px;
          margin: 0 auto 2.5rem auto;
        }

        .shlok-card {
          padding: clamp(1.8rem, 4vw, 2.4rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-width: 1.5px;
        }

        .shlok-card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 1.2rem;
        }

        .shlok-deity-title {
          font-size: 1.35rem;
          color: var(--color-maroon);
          font-weight: 700;
        }

        .shlok-sanskrit-box {
          background: var(--bg-tertiary);
          border: 1px dashed var(--border-gold);
          border-radius: var(--radius-md);
          padding: 1.2rem 1.4rem;
          width: 100%;
          margin-bottom: 1.2rem;
        }

        .sanskrit-text {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          color: var(--color-maroon);
          font-weight: 700;
          line-height: 1.7;
          white-space: pre-line;
          margin: 0;
        }

        .shlok-divider {
          width: 60px;
          height: 2px;
          background: var(--color-gold);
          margin-bottom: 1.2rem;
        }

        .shlok-meaning-box {
          text-align: center;
        }

        .meaning-label {
          display: inline-block;
          font-weight: 700;
          color: var(--color-marigold-deep);
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .meaning-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
      `})]}),ax=()=>{const{groom:n,bride:r,invitationLetter:o}=Y.couple;return c.jsxs("section",{id:"couple",className:"section-wrapper couple-intro-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsx("div",{className:"section-badge",children:c.jsx("span",{children:"परिणय सूत्र"})}),c.jsx("h2",{className:"section-title",children:"वर एवं वधू परिचय"}),c.jsx("p",{className:"section-subtitle",children:"दो कुलों का पावन मिलन, दो हृदयों का एक अटूट बंधन"})]}),c.jsxs("div",{className:"couple-cards-container",children:[c.jsxs(ge.div,{className:"profile-royal-card royal-card groom-card",initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8},children:[c.jsx(Ko,{size:36,position:"top-left"}),c.jsx(Ko,{size:36,position:"bottom-right"}),c.jsx("div",{className:"avatar-royal-badge",children:c.jsx(M4,{className:"avatar-icon"})}),c.jsx("span",{className:"profile-honorific",children:n.title}),c.jsx("h3",{className:"profile-hindi-name",children:n.hindiName}),c.jsxs("span",{className:"profile-english-name font-english",children:["(",n.englishName,")"]}),c.jsx("div",{className:"profile-divider"}),c.jsxs("div",{className:"lineage-details",children:[c.jsxs("div",{className:"lineage-row",children:[c.jsx("span",{className:"lineage-label",children:"सुपौत्र:"}),c.jsx("span",{className:"lineage-val",children:n.grandfather})]}),c.jsxs("div",{className:"lineage-row",children:[c.jsx("span",{className:"lineage-label",children:"सुपुत्र:"}),c.jsx("span",{className:"lineage-val",children:n.father})]}),c.jsxs("div",{className:"lineage-row",children:[c.jsx("span",{className:"lineage-label",children:"निवास:"}),c.jsx("span",{className:"lineage-val",children:n.city})]})]})]}),c.jsxs("div",{className:"gathbandhan-connector","aria-hidden":"true",children:[c.jsx("div",{className:"connector-circle",children:c.jsx(zi,{className:"connector-heart"})}),c.jsx("span",{className:"connector-text",children:"संग"})]}),c.jsxs(ge.div,{className:"profile-royal-card royal-card bride-card",initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8},children:[c.jsx(Ko,{size:36,position:"top-right"}),c.jsx(Ko,{size:36,position:"bottom-left"}),c.jsx("div",{className:"avatar-royal-badge bride-badge",children:c.jsx(B4,{className:"avatar-icon"})}),c.jsx("span",{className:"profile-honorific",children:r.title}),c.jsx("h3",{className:"profile-hindi-name",children:r.hindiName}),c.jsxs("span",{className:"profile-english-name font-english",children:["(",r.englishName,")"]}),c.jsx("div",{className:"profile-divider"}),c.jsxs("div",{className:"lineage-details",children:[c.jsxs("div",{className:"lineage-row",children:[c.jsx("span",{className:"lineage-label",children:"सुपौत्री:"}),c.jsx("span",{className:"lineage-val",children:r.grandfather})]}),c.jsxs("div",{className:"lineage-row",children:[c.jsx("span",{className:"lineage-label",children:"सुपुत्री:"}),c.jsx("span",{className:"lineage-val",children:r.father})]}),c.jsxs("div",{className:"lineage-row",children:[c.jsx("span",{className:"lineage-label",children:"निवास:"}),c.jsx("span",{className:"lineage-val",children:r.city})]})]})]})]}),c.jsxs(ge.div,{className:"invitation-letter-card royal-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8,delay:.2},children:[c.jsxs("div",{className:"letter-header",children:[c.jsx(V4,{className:"quote-mark"}),c.jsx("h3",{className:"letter-salutation",children:o.salutation})]}),c.jsx("p",{className:"letter-body-text",children:o.body}),c.jsx("div",{className:"letter-poetry-box",children:c.jsx("p",{className:"letter-poetry",children:o.poetry})}),c.jsx("div",{className:"letter-signature",children:c.jsx("span",{className:"sign-family",children:Y.meta.familyName})})]}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .couple-intro-section {
          position: relative;
        }

        .text-center {
          text-align: center;
          margin-bottom: 3rem;
        }

        .couple-cards-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 3vw, 2.5rem);
          max-width: 960px;
          margin: 0 auto 3rem auto;
          position: relative;
        }

        .profile-royal-card {
          flex: 1;
          max-width: 440px;
          padding: clamp(2rem, 4vw, 2.8rem) clamp(1.4rem, 3vw, 2rem);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar-royal-badge {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border: 2px solid var(--color-gold);
          color: #FFE5A3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          box-shadow: 0 6px 18px rgba(122, 31, 43, 0.25);
        }

        .bride-badge {
          background: linear-gradient(135deg, var(--color-marigold-deep) 0%, var(--color-maroon) 100%);
        }

        .avatar-icon {
          font-size: 2.2rem;
        }

        .profile-honorific {
          font-size: 0.95rem;
          color: var(--color-marigold-deep);
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
        }

        .profile-hindi-name {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          color: var(--color-maroon);
          margin-bottom: 0.2rem;
        }

        .profile-english-name {
          font-size: 1.2rem;
          color: var(--text-muted);
          font-style: italic;
          margin-bottom: 0.8rem;
        }

        .profile-divider {
          width: 60px;
          height: 2px;
          background: var(--color-gold);
          margin-bottom: 1.2rem;
        }

        .lineage-details {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 1rem;
        }

        .lineage-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.35rem 0;
          border-bottom: 1px dashed var(--border-gold);
        }

        .lineage-label {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .lineage-val {
          color: var(--text-primary);
          font-weight: 600;
          text-align: right;
        }

        /* Gathbandhan Connector */
        .gathbandhan-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          z-index: 5;
        }

        .connector-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 2px solid var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-gold);
        }

        .connector-heart {
          font-size: 1.5rem;
          color: #E63946;
          animation: pulseHeart 1.8s ease-in-out infinite;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        .connector-text {
          font-family: var(--font-english-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          font-style: italic;
        }

        /* Grand Invitation Letter */
        .invitation-letter-card {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 3.2rem);
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            180deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 100%
          );
        }

        .letter-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .quote-mark {
          font-size: 2rem;
          color: var(--color-gold);
          opacity: 0.8;
        }

        .letter-salutation {
          font-size: 1.45rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .letter-body-text {
          font-size: clamp(1.05rem, 2.2vw, 1.22rem);
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .letter-poetry-box {
          background: var(--bg-tertiary);
          border-left: 4px solid var(--color-gold);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          padding: 1.2rem 1.6rem;
          margin-bottom: 1.5rem;
        }

        .letter-poetry {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: var(--color-maroon);
          font-style: italic;
          line-height: 1.8;
          white-space: pre-line;
          margin: 0;
        }

        .letter-signature {
          text-align: right;
        }

        .sign-family {
          display: inline-block;
          font-family: var(--font-heading-hindi);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-maroon);
          border-top: 1px solid var(--border-gold);
          padding-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .couple-cards-container {
            flex-direction: column;
          }
          .gathbandhan-connector {
            margin: -0.5rem 0;
          }
          .profile-royal-card {
            width: 100%;
          }
        }
      `})]})},lx=()=>{const n=new Date(Y.countdown.targetISO).getTime(),r=()=>{const h=n-Date.now();return h<=0?{days:0,hours:0,minutes:0,seconds:0,isPast:!0}:{days:Math.floor(h/(1e3*60*60*24)),hours:Math.floor(h/(1e3*60*60)%24),minutes:Math.floor(h/1e3/60%60),seconds:Math.floor(h/1e3%60),isPast:!1}},[o,a]=R.useState(r());R.useEffect(()=>{const h=setInterval(()=>{a(r())},1e3);return()=>clearInterval(h)},[n]);const u=[{value:o.days,label:Y.countdown.labels.days},{value:o.hours,label:Y.countdown.labels.hours},{value:o.minutes,label:Y.countdown.labels.minutes},{value:o.seconds,label:Y.countdown.labels.seconds}];return c.jsxs("section",{className:"countdown-section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"countdown-container royal-card",children:[c.jsxs("div",{className:"countdown-header",children:[c.jsx(Nt,{size:32}),c.jsxs("div",{className:"countdown-title-group",children:[c.jsx("h3",{className:"countdown-title",children:Y.countdown.heading}),c.jsx("p",{className:"countdown-subtitle",children:Y.countdown.subtitle})]}),c.jsx(Nt,{size:32})]}),c.jsx("div",{className:"countdown-digits-grid",children:u.map((h,f)=>c.jsxs(ge.div,{className:"countdown-unit-box",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:f*.1},children:[c.jsxs("div",{className:"digit-card",children:[c.jsx("span",{className:"digit-glow"}),c.jsx("span",{className:"digit-number",children:String(h.value).padStart(2,"0")})]}),c.jsx("span",{className:"unit-label",children:h.label})]},h.label))}),c.jsx("div",{className:"countdown-footer-note",children:c.jsx("span",{children:"शुभ लग्न एवं बारात: 11 दिसम्बर 2026, सायं 7:00 बजे, इन्दौर"})})]})}),c.jsx("style",{children:`
        .countdown-section {
          padding: 1.5rem 0 3rem 0;
        }

        .countdown-container {
          max-width: 820px;
          margin: 0 auto;
          padding: clamp(1.8rem, 4vw, 2.5rem);
          text-align: center;
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--bg-secondary) 100%
          );
        }

        .countdown-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .countdown-title-group {
          display: flex;
          flex-direction: column;
        }

        .countdown-title {
          font-size: clamp(1.3rem, 3.5vw, 1.8rem);
          color: var(--color-maroon);
          margin-bottom: 0.2rem;
        }

        .countdown-subtitle {
          font-size: 0.95rem;
          color: var(--color-marigold-deep);
          font-weight: 600;
          margin: 0;
        }

        .countdown-digits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(0.6rem, 2vw, 1.5rem);
          margin-bottom: 1.8rem;
        }

        .countdown-unit-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .digit-card {
          width: 100%;
          max-width: 130px;
          aspect-ratio: 1 / 1;
          background: linear-gradient(180deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border: 1.5px solid var(--color-gold);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(122, 31, 43, 0.3), inset 0 0 15px rgba(201, 162, 75, 0.25);
          position: relative;
          overflow: hidden;
        }

        .digit-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 48%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
          border-bottom: 1px solid rgba(201, 162, 75, 0.3);
        }

        .digit-number {
          font-family: var(--font-english-serif);
          font-size: clamp(2rem, 6vw, 3.8rem);
          font-weight: 700;
          color: #FFF3D6;
          text-shadow: 0 0 14px rgba(253, 230, 138, 0.6);
          line-height: 1;
          z-index: 2;
        }

        .unit-label {
          font-family: var(--font-heading-hindi);
          font-size: clamp(0.95rem, 2.2vw, 1.15rem);
          color: var(--text-primary);
          font-weight: 700;
          margin-top: 0.6rem;
        }

        .countdown-footer-note {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 600;
          padding-top: 1rem;
          border-top: 1px dashed var(--border-gold);
        }

        @media (max-width: 480px) {
          .countdown-digits-grid {
            gap: 0.5rem;
          }
          .digit-card {
            border-radius: var(--radius-sm);
          }
          .unit-label {
            font-size: 0.85rem;
          }
        }
      `})]})};function wi(n){const r=new Date(n),o=a=>String(a).padStart(2,"0");return r.getUTCFullYear()+o(r.getUTCMonth()+1)+o(r.getUTCDate())+"T"+o(r.getUTCHours())+o(r.getUTCMinutes())+o(r.getUTCSeconds())+"Z"}function Ip(n,r="हृदयांश राहुल संग हृदयांशी शिल्पा"){const o=wi(n.startISO),a=wi(n.endISO),u=encodeURIComponent(`${n.title} - ${r} विवाह`),h=encodeURIComponent(`${n.poeticLine}

तारीख: ${n.dateDevanagari}
समय: ${n.timeDevanagari}
स्थान: ${n.venueText}`),f=encodeURIComponent(n.venueText);return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${u}&dates=${o}/${a}&details=${h}&location=${f}`}function cx(n,r="हृदयांश राहुल संग हृदयांशी शिल्पा"){const o=wi(n.startISO),a=wi(n.endISO),u=`${n.title} - ${r} विवाह`,h=`${n.poeticLine} | तारीख: ${n.dateDevanagari} समय: ${n.timeDevanagari}`,f=n.venueText,m=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Rahul and Shilpa Vivah//Indore Wedding//IN","CALSCALE:GREGORIAN","METHOD:PUBLISH","BEGIN:VEVENT",`UID:${n.id}-${Date.now()}@rahulshilpa-vivah.in`,`DTSTAMP:${wi(new Date().toISOString())}`,`DTSTART:${o}`,`DTEND:${a}`,`SUMMARY:${u}`,`DESCRIPTION:${h}`,`LOCATION:${f}`,"STATUS:CONFIRMED","END:VEVENT","END:VCALENDAR"].join(`\r
`),g=new Blob([m],{type:"text/calendar;charset=utf-8"}),v=document.createElement("a");v.href=window.URL.createObjectURL(g),v.setAttribute("download",`${n.id}-rahul-shilpa-vivah.ics`),document.body.appendChild(v),v.click(),document.body.removeChild(v),window.URL.revokeObjectURL(v.href)}function ux(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 26.92L28.98 183H483L256 26.92zm0 26.29L427.9 167H84.1L256 53.21zm0 21.58L143.9 149h224.2L256 74.79zM73 201v286h30V201H73zm48 0v286h126V377H137v-54h110V201H121zm144 0v122h110v54H265v110h126V201H265zm144 0v286h30V201h-30zM155 341v18h202v-18H155zm37 50c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm128 0c13.7 0 25 11.3 25 25s-11.3 25-25 25-25-11.3-25-25 11.3-25 25-25zm-128 18c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm128 0c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"},child:[]}]})(n)}function dx(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216.4 18.66c-3 35.94 12.6 64.01 28.1 88.94 15.5 24.9 30.6 47 32.2 72.3 1.2 17.3-4.6 34.5-11.5 53-6.9 18.6-14.8 38.4-15.5 60.9l18 .6c.5-18.5 7.4-36.4 14.4-55.2 6.9-18.8 14-38.5 12.6-60.5-2-31.5-19.8-56.3-35-80.65-15.1-24.34-27.9-47.81-25.3-77.87l-18-1.52zm134.2 9.52c-18.7 10.56-39.1 23.47-52.1 37.64-7.9 8.63-12.8 17.38-13.9 25.86-1 7.53.8 15.42 7.3 24.72 20.2-.7 35.3-13.8 45.7-33.24 8.9-16.54 13.3-37.15 13-54.98zM141.7 97.64c-1.1.01-2.2.04-3.2.07-5.7.18-11 .73-15.9 1.49 10.5 16.8 30.5 35.8 52.2 46.8 13.1 6.6 26.6 10.4 38.8 10.1 10.8-.2 20.4-3.5 29-10.9-1.6-8.6-6.2-15.9-13.9-22.5-8.8-7.5-21.4-13.7-35.5-18-15.4-4.7-32.6-6.92-48.2-7.06-1.1-.01-2.2-.01-3.3 0zM347.5 208.2c-2.1.1-4.1.3-6.1.5-14.2 1.8-26.1 8-34.8 22.2 3.8 3.9 8.1 6 13.1 7 6.6 1.3 14.7.4 23.2-2.5 12.7-4.2 26.3-12.8 36.8-22-10-3.3-20.5-5.2-30.3-5.2h-1.9zM32 311v18h204.3c-1.1 7.3-2.8 17.7-5.5 28.8-5 21-14.4 44.1-24.2 51.7-12.5 9.6-29.8 10.2-49.6 7.9-3.8-2.4-14.6-9.6-25.1-18.9-6.4-5.6-12.4-12-16-17.6-3.6-5.7-4.3-9.8-3.5-12.4-.1.6-.1 0 2.2-.9 2.4-.9 6.2-1.7 10.1-2 7.8-.7 15.5 0 15.5 0l1.6-18s-2.2-.2-5.6-.3c-3.5-.1-8.1-.1-13 .3-4.9.5-10.1 1.3-15.1 3.2-4.9 1.9-10.55 5.4-12.74 12.1-3.25 9.8.24 19.5 5.34 27.6 4.9 7.9 11.9 15 19 21.2-13.6-1.9-27.53-3.1-40.68-1-3.49-6.9-7.94-14.2-15.19-20.1-8.92-7.3-21.63-11.8-39.25-12.2l-.38 18c14.84.3 22.78 3.7 28.25 8.2 3.71 3 6.49 6.9 9.04 11.4-3.48 1.7-6.87 3.7-10.13 6.1-10.6 7.9-14.53 20.9-17.66 32.2-3.13 11.2-4.44 21-4.44 21l17.84 2.4s1.18-8.7 3.94-18.6c2.74-9.8 8.09-20.4 11.06-22.6 16.99-12.6 42.6-9.1 71.1-4.4 28.4 4.7 60 10.4 84.4-8.4 8-6.2 13.9-14.9 18.6-24.6 4.8 10.5 11.7 19.6 20 27.5-10.7 2.7-20 7.5-28.1 13.3-13.4 9.7-24 21.7-34.8 31.5l12 13.4c8-7.3 15.3-14.8 22.6-21.4 4.1 7.3 9.9 13.1 16.4 17.3 10.4 6.8 22.2 10.3 33 12.9l4.2-17.4c-10-2.5-20-5.7-27.3-10.5-5.5-3.6-9.6-7.7-12-13.6 10.1-6.5 20.8-10.4 35.4-9.6 6.5 3.7 13.3 7 20.3 9.8 26.6 10.5 56.4 14.4 82.5 12 16.4-1.6 32.8-11 47.4-22 6.6 5.3 12 11.7 15.7 18 5.3 9 6.5 17.7 5.3 21.6l17 5.6c4-11.7.2-24.5-6.8-36.4-4.3-7.2-9.9-14.1-16.8-20.3.1 0 .1-.1.2-.1 18-15.1 31.3-29.8 31.3-29.8l-13.2-12.2s-12.8 13.9-29.7 28.2c-17 14.3-38.8 28.2-52 29.4-23 2.2-50.6-1.4-74.3-10.8-23.6-9.3-43-24.2-51.9-43.8-2.6-5.7.7-22 7.1-36 3-6.6 6.2-12.5 8.8-17 3.8 2 8.1 4.4 12.9 7.2 13 7.6 27.9 18 34.1 25.5 4.6 5.5 10.6 18.6 14.7 29.7 4.1 11.2 6.7 20.5 6.7 20.5l17.4-4.8s-2.8-10-7.2-21.9c-2.8-7.9-6.2-16.5-10.5-24.2 4.1-.6 9.5-.6 15.7.6 12.2 2.4 26.8 8.5 39 17.5l10.6-14.6c-14.5-10.5-31-17.6-46.2-20.5-5.7-1.1-11.3-1.8-16.7-1.6-5.1.1-9.9 1-14.2 2.8-9.5-9.3-22.6-17.6-34.2-24.5-.8-.5-1.6-.9-2.4-1.4H480v-18H32z"},child:[]}]})(n)}function fx(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M240 24c-16 0-48 16-64 32 0 13 0 26 8.582 39h142.836C336 82 336 69 336 56c-16-16-48-32-64-32zm-44.072 89c10.008 26.313 10.699 59.404 2.084 78h115.976c-8.615-18.596-7.924-51.687 2.084-78zm-16.471 96c-36.902 28.393-62.07 65.607-66.684 94h286.454c-4.614-28.393-29.782-65.607-66.684-94zm-66.908 112c5.395 44.88 49.453 88 79.451 103 8.465 8.465 12.43 16.904 14.307 23h99.386c1.878-6.096 5.842-14.535 14.307-23 29.998-15 74.056-58.12 79.451-103zm84.105 144c-11.436 6.993-20.654 7-20.654 7-16 0-16 16 0 16h160c16 0 16-16 0-16 0 0-9.218-.007-20.654-7z"},child:[]}]})(n)}function hx(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 27.88c-8.97 10.574-20.842 21.506-33.637 33.347-16.767 15.515-34.995 32.31-49.45 49.656-14.453 17.345-24.872 35.13-27.25 51.994-2.265 16.054 1.912 31.8 18.275 49.244h184.125c16.362-17.444 20.54-33.19 18.275-49.243-2.38-16.865-12.798-34.65-27.252-51.994-14.454-17.345-32.682-34.14-49.45-49.656C276.843 49.387 264.97 38.454 256 27.88zM32 68.12c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm448 0c-16 16-16 32-16 48h7v71h-7v18h7v279h18v-279h7v-18h-7v-71h7c0-16 0-32-16-48zm-368 137c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm288 0c-16 16-32 32-32 48v23h64v-23c0-16-16-32-32-48zm-231 25v14h174v-14zm0 32v222h39v-135c0-16 32-48 48-64 16 16 48 48 48 64v135h39v-222zm-96 32v190h78v-190zm288 0v190h78v-190zm-249 7s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 5.464s16 8.233 16 16v32h-32v-32c0-7.767 16-16 16-16zM112 365.12s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16zm-288 64s16 8.234 16 16v32H96v-32c0-7.766 16-16 16-16zm288 0s16 8.234 16 16v32h-32v-32c0-7.766 16-16 16-16z"},child:[]}]})(n)}function Op(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 16c-21.335 9.73-58.244 17.34-73.086 48.232-22.36 1.948-72.753 10.673-122.22 40.25-58.098 34.74-116.017 97.417-131.776 213.702l-.48 3.537-2.774 2.25c-30.87 25.002-40.657 38.937-44.416 61.153-3.536 20.9-.72 51.46-.363 101.877H328.36c3.455-16.892 10.44-29.245 12.472-41.568 2.337-14.176.19-29.938-20.812-58.547-43.078-58.683-46.853-129.458-12.916-171.28-8.654-2.765-15.09-6.887-19.458-12.546-6.115-7.924-7.4-17.006-8.57-25.884l17.848-2.352c1.112 8.446 2.38 13.88 4.97 17.237 2.59 3.356 7.31 6.472 19.55 8.46l-.022.128.172-.17 5.998 9.424c19.957 31.358 42.84 51.292 73.332 54.44l6.51.672 1.367 6.4c2.74 12.828 8.626 19.095 15.116 22.238 6.49 3.143 14.225 2.944 20.47.205 9.316-4.086 14.518-11.35 16.7-22.712 2.122-11.05.546-25.834-5.137-42.106-33.538-38.248-44.475-87.277-63.903-128.772-6.055-9.947-12.448-18.518-20.385-24.856C376.808 55.126 386.456 34.852 400 16zM214.068 34.97C179.55 35.06 146.075 43.06 96 58.58c31.146 9.92 70.397 18.9 86.037 39.01 4.463-3.017 8.94-5.88 13.418-8.56 40.51-24.22 80.387-35.286 108.23-40.04-35.854-9.477-63.047-14.094-89.617-14.023zM157.16 96.712c-1.13-.01-2.265-.01-3.402.004-30.353.37-63.1 9.745-96.647 31.283 27.186 3.672 54.67 3.724 72.58 15.398 15.9-17.92 33.144-32.634 50.677-44.668-7.548-1.244-15.292-1.938-23.207-2.017zM368 128a13.214 13.215 0 0 1 13.213 13.215A13.214 13.215 0 0 1 368 154.432a13.214 13.215 0 0 1-13.213-13.217A13.214 13.215 0 0 1 368 128zm-238.906 16.068c-36.395 1.495-68.903 6.53-104.76 24.766 33.236 7.095 50.913 13.507 65.025 33.83 11.522-22.53 25.045-41.93 39.734-58.596zM74.518 201.46C53.53 201.65 36.614 213.14 16 224c27.854 0 46.067 3.862 58.71 12.055 4.33-11.652 9.16-22.615 14.41-32.924-5.12-1.19-9.963-1.71-14.602-1.67zm-.623 36.82c-17.933 5.845-35.452 7.15-54.23 22.284 17.62 4.638 34.79 9.596 41.398 22.034 3.496-15.77 7.814-30.523 12.832-44.32zm370.142 8.57c1.617-.035 3.222.044 4.783.187l-1.64 17.926c-3.928-.36-5.513.416-5.57.465-.058.048-1.035.656-.635 5.886l-17.95 1.372c-.638-8.35 1.297-16.207 6.955-20.997 4.245-3.593 9.206-4.735 14.057-4.84zM52.215 290.723c-10.352.13-23.76 5.646-34.656 12.334 12.173 6.83 12.357 23.472 8.938 37.668 7.3-9.105 16.855-18.323 29.158-28.48 1.016-7.043 2.19-13.9 3.506-20.585-2.082-.67-4.42-.97-6.947-.937z"},child:[]}]})(n)}function mx(n){return ie({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M290.72 13.396c-79.94 38.87 9.013 152.854-74.402 191.567 21.946-43.348 30.93-118.453-39.69-169.342v.003c57.41 92.152-39.578 101.073 10.68 235.037.884 2.098 1.724 4.216 2.467 6.383-.86-2.16-1.682-4.286-2.468-6.383-17.056-40.42-58.356-69.442-47.875-146.558-92.397 139.136 61.726 179.234 39.968 296.226-20.22-52.322-96.068-38.077-65.88-94.582-81.617 64.483 68 99.77-25.282 168.19h349.006c-44.892-35.722-38.733-108.488-9.29-92.71-14.63-42.75-54.515-10.383-56.477 22.604-15.55-101.866 86.23-108.78 74.388-226.197-19.395 67.794-73.366 65.522-92.71 55.322 68.964-32.598 91.818-125.04 17.15-161.248 23.033 28.635 15.785 123.762-33.243 84.998-18.193-14.385-70.182-60.235-46.34-163.31zm-165.656 4.778c-6.35.16-12.967 2.232-19.62 6.578 38.005 7.337 57.7 61.682 52.892 122.08 34.38-59.225 5.54-129.638-33.272-128.658zm218.29 44.633c8.507 47.444-17.105 75.028-38.82 30.52 22.306 83.01 95.766 93.25 38.82-30.52zm103.84 93.88c35.616 36.454 25.294 104.74-14.133 160.057 81.137-36.52 81.26-153.81 14.133-160.057zm-379.22 78.917c19.553 54.61-90.043 56.077 5.62 157.767-38.953-68.595 67.41-69.424-5.62-157.766z"},child:[]}]})(n)}const px=()=>{const[n,r]=R.useState(null),o=u=>{switch(u){case"pot":return c.jsx(fx,{className:"timeline-event-icon"});case"temple":return c.jsx(ux,{className:"timeline-event-icon"});case"leaves":return c.jsx(dx,{className:"timeline-event-icon"});case"horse":return c.jsx(Op,{className:"timeline-event-icon"});case"fire":return c.jsx(mx,{className:"timeline-event-icon"});case"feast":return c.jsx(hx,{className:"timeline-event-icon"});default:return c.jsx(Yl,{className:"timeline-event-icon"})}},a=u=>{r(n===u?null:u)};return c.jsxs("section",{id:"events",className:"section-wrapper events-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(_e,{size:16}),c.jsx("span",{children:"मांगलिक उत्सव रूपरेखा"}),c.jsx(_e,{size:16})]}),c.jsx("h2",{className:"section-title",children:"मांगलिक कार्यक्रम"}),c.jsx("p",{className:"section-subtitle",children:"विवाह उत्सव के प्रत्येक पावन अनुष्ठान में आपकी गरिमामयी उपस्थिति प्रार्थनीय है"})]}),c.jsxs("div",{className:"timeline-container",children:[c.jsx("div",{className:"timeline-central-spine","aria-hidden":"true"}),Y.events.map((u,h)=>{const f=h%2===0,m=u.isGrandReception;return c.jsxs(ge.div,{className:`timeline-item ${f?"item-left":"item-right"} ${m?"item-grand-reception":""}`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.7,delay:h*.1},children:[c.jsx("div",{className:"timeline-node","aria-hidden":"true",children:c.jsx("div",{className:`node-inner ${m?"node-grand":""}`,children:o(u.icon)})}),c.jsxs("div",{className:`timeline-card royal-card ${m?"grand-reception-card":""}`,children:[m&&c.jsxs("div",{className:"grand-highlight-badge",children:[c.jsx(Jh,{className:"star-icon"}),c.jsx("span",{children:"मुख्य समारोह एवं स्नेहभोज"}),c.jsx(Jh,{className:"star-icon"})]}),c.jsxs("div",{className:"card-top-row",children:[c.jsx("span",{className:"event-num-pill",children:u.number}),c.jsx("span",{className:"event-en-title font-english",children:u.englishTitle})]}),c.jsx("h3",{className:"event-main-title",children:u.title}),c.jsxs("div",{className:"event-meta-block",children:[c.jsxs("div",{className:"meta-item",children:[c.jsx(Yl,{className:"meta-icon"}),c.jsx("span",{className:"meta-val",children:u.dateDevanagari})]}),c.jsxs("div",{className:"meta-item",children:[c.jsx(cs,{className:"meta-icon"}),c.jsx("span",{className:"meta-val",children:u.timeDevanagari})]})]}),c.jsx("div",{className:"event-poem-box",children:c.jsxs("p",{className:"poem-quote",children:['"',u.poeticLine,'"']})}),u.departure&&c.jsx("div",{className:"event-departure-box",children:c.jsx("strong",{children:u.departure})}),c.jsxs("div",{className:"event-venue-row",children:[c.jsx(xi,{className:"venue-pin-icon"}),c.jsx("span",{children:u.venueText})]}),c.jsxs("div",{className:"card-actions-row",children:[c.jsxs("button",{type:"button",className:"add-cal-btn",onClick:()=>a(u.id),"aria-expanded":n===u.id,"aria-label":"कैलेंडर में जोड़ें",children:[c.jsx(K4,{}),c.jsx("span",{children:"कैलेंडर में जोड़ें"})]}),n===u.id&&c.jsxs("div",{className:"calendar-dropdown-menu royal-card",children:[c.jsxs("a",{href:Ip(u),target:"_blank",rel:"noopener noreferrer",className:"cal-option-btn",onClick:()=>r(null),children:[c.jsx(T4,{}),c.jsx("span",{children:"Google Calendar"})]}),c.jsxs("button",{type:"button",className:"cal-option-btn",onClick:()=>{cx(u),r(null)},children:[c.jsx($4,{}),c.jsx("span",{children:"Apple / Outlook (.ics)"})]})]})]})]})]},u.id)})]}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .events-section {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--bg-secondary) 50%,
            transparent 100%
          );
        }

        .text-center {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .timeline-container {
          position: relative;
          max-width: 1040px;
          margin: 0 auto 3.5rem auto;
          padding: 1rem 0;
        }

        /* Central Spine on Desktop */
        .timeline-central-spine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          background: linear-gradient(
            180deg,
            transparent,
            var(--color-gold) 10%,
            var(--color-gold) 90%,
            transparent
          );
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          width: 100%;
        }

        .timeline-item.item-left {
          justify-content: flex-start;
          padding-right: 50%;
        }

        .timeline-item.item-right {
          justify-content: flex-end;
          padding-left: 50%;
        }

        /* Node in Center */
        .timeline-node {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 3;
        }

        .node-inner {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 2px solid var(--color-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(201, 162, 75, 0.4);
          transition: var(--transition-smooth);
        }

        .node-inner.node-grand {
          width: 58px;
          height: 58px;
          background: linear-gradient(135deg, var(--color-marigold) 0%, var(--color-maroon) 100%);
          color: #FFF8EC;
          border-color: #FFF3D6;
          box-shadow: 0 0 20px rgba(232, 145, 45, 0.6);
          animation: grandPulse 2s ease-in-out infinite;
        }

        @keyframes grandPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .timeline-event-icon {
          font-size: 1.45rem;
        }

        /* Event Card Styling */
        .timeline-card {
          width: calc(100% - 40px);
          margin: 0 20px;
          padding: 1.8rem;
          background: var(--card-bg);
          position: relative;
        }

        /* Grand Reception Highlight Card */
        .grand-reception-card {
          border-width: 2.5px;
          border-color: var(--color-gold);
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 60%,
            var(--bg-secondary) 100%
          );
          box-shadow: 0 16px 45px rgba(201, 162, 75, 0.28);
        }

        .grand-highlight-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gradient-maroon);
          color: #FFF8EC;
          border: 1px solid var(--color-gold);
          padding: 0.35rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 0.8rem;
          box-shadow: var(--shadow-sm);
        }

        .star-icon {
          color: #FFD700;
          font-size: 0.8rem;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .event-num-pill {
          font-family: var(--font-english-serif);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-maroon);
          background: var(--bg-tertiary);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-gold);
        }

        .event-en-title {
          font-size: 1.05rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .event-main-title {
          font-size: clamp(1.4rem, 3vw, 1.85rem);
          color: var(--color-maroon);
          margin-bottom: 0.8rem;
        }

        .event-meta-block {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.9rem;
          border: 1px solid var(--border-gold);
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-maroon);
        }

        .meta-icon {
          color: var(--color-marigold-deep);
        }

        .event-poem-box {
          margin-bottom: 0.8rem;
        }

        .poem-quote {
          font-family: var(--font-heading-hindi);
          font-size: 1rem;
          color: var(--text-secondary);
          font-style: italic;
          line-height: 1.55;
          margin: 0;
        }

        .event-departure-box {
          background: var(--card-bg-elevated);
          border-left: 3px solid var(--color-marigold);
          padding: 0.6rem 0.8rem;
          font-size: 0.9rem;
          color: var(--color-maroon);
          margin-bottom: 0.8rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .event-venue-row {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.2rem;
        }

        .venue-pin-icon {
          color: var(--color-maroon);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .card-actions-row {
          position: relative;
        }

        .add-cal-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-maroon);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .add-cal-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-marigold-deep);
          transform: translateY(-2px);
        }

        .calendar-dropdown-menu {
          position: absolute;
          bottom: 100%;
          left: 0;
          margin-bottom: 0.5rem;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-width: 220px;
          z-index: 10;
          box-shadow: var(--shadow-lg);
        }

        .cal-option-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 0.8rem;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: var(--transition-smooth);
        }

        .cal-option-btn:hover {
          background: var(--border-gold);
          color: var(--color-maroon);
        }

        /* Mobile Responsive View (Vertical Timeline) */
        @media (max-width: 768px) {
          .timeline-central-spine {
            left: 24px;
            transform: none;
          }

          .timeline-item {
            padding-left: 55px !important;
            padding-right: 0 !important;
            justify-content: flex-start !important;
          }

          .timeline-node {
            left: 24px;
            transform: translate(-50%, 0);
          }

          .timeline-card {
            width: 100%;
            margin: 0;
            padding: 1.4rem;
          }

          .card-top-row {
            flex-direction: row;
          }
        }
      `})]})},gx=()=>{const n=Y.venues.baraat;return c.jsxs("section",{id:"baraat",className:"section-wrapper baraat-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsx("div",{className:"section-badge",children:c.jsx("span",{children:"शाही बारात एवं पावन फेरे"})}),c.jsx("h2",{className:"section-title",children:"बारात एवं शुभ लग्न"}),c.jsx("p",{className:"section-subtitle",children:"ढोल-ताशों और शहनाई की मंगल ध्वनियों के साथ सजेगी बारात"})]}),c.jsxs(ge.div,{className:"baraat-royal-showcase royal-card",initial:{opacity:0,scale:.96},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-50px"},transition:{duration:.8},children:[c.jsxs("div",{className:"baraat-badge-row",children:[c.jsx("div",{className:"royal-icon-circle",children:c.jsx(Op,{className:"horse-icon"})}),c.jsxs("div",{className:"baraat-header-text",children:[c.jsx("span",{className:"ceremony-tag",children:"11 दिसम्बर 2026, शुक्रवार"}),c.jsx("h3",{className:"baraat-headline",children:"बारात प्रस्थान एवं शुभ लग्न (फेरे)"})]})]}),c.jsxs("div",{className:"baraat-content-grid",children:[c.jsxs("div",{className:"detail-box",children:[c.jsxs("div",{className:"box-title-row",children:[c.jsx(Fp,{className:"box-icon"}),c.jsx("h4",{children:"बारात प्रस्थान"})]}),c.jsxs("p",{className:"box-time",children:[c.jsx(cs,{})," सायं 7:00 बजे"]}),c.jsx("p",{className:"box-desc",children:n.departure})]}),c.jsxs("div",{className:"detail-box",children:[c.jsxs("div",{className:"box-title-row",children:[c.jsx(O4,{className:"box-icon fire"}),c.jsx("h4",{children:"शुभ लग्न (पावन फेरे)"})]}),c.jsxs("p",{className:"box-time",children:[c.jsx(cs,{})," मध्यरात्रि"]}),c.jsx("p",{className:"box-desc",children:"अग्नि को साक्षी मानकर सात वचन निभाएंगे, पवित्र फेरों के साथ जन्मों के साथी बन जाएंगे।"})]})]}),c.jsxs("div",{className:"baraat-venue-banner",children:[c.jsxs("div",{className:"venue-info",children:[c.jsx("span",{className:"venue-label",children:"विवाह स्थल:"}),c.jsx("strong",{className:"venue-name",children:n.name}),c.jsx("p",{className:"venue-address",children:n.address})]}),c.jsxs("a",{href:n.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-primary get-dir-btn",children:[c.jsx(ls,{}),c.jsx("span",{children:"दिशा निर्देश (Get Directions)"})]})]})]}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .baraat-section {
          position: relative;
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .baraat-royal-showcase {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(1.8rem, 5vw, 3rem);
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            135deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 60%,
            var(--bg-secondary) 100%
          );
        }

        .baraat-badge-row {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px dashed var(--border-gold);
        }

        .royal-icon-circle {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-maroon) 0%, var(--color-maroon-dark) 100%);
          border: 2px solid var(--color-gold);
          color: #FFE5A3;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(122, 31, 43, 0.3);
          flex-shrink: 0;
        }

        .horse-icon {
          font-size: 2.2rem;
        }

        .baraat-header-text {
          display: flex;
          flex-direction: column;
        }

        .ceremony-tag {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          letter-spacing: 0.05em;
        }

        .baraat-headline {
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: var(--color-maroon);
          margin: 0;
        }

        .baraat-content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .detail-box {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 1.4rem;
        }

        .box-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
        }

        .box-icon {
          font-size: 1.2rem;
          color: var(--color-maroon);
        }

        .box-icon.fire {
          color: var(--color-marigold-deep);
        }

        .detail-box h4 {
          font-size: 1.2rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .box-time {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          margin-bottom: 0.6rem;
        }

        .box-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .baraat-venue-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--color-gold);
          border-radius: var(--radius-md);
          padding: 1.4rem 1.8rem;
          flex-wrap: wrap;
        }

        .venue-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .venue-label {
          font-size: 0.85rem;
          color: var(--color-marigold-deep);
          font-weight: 700;
          text-transform: uppercase;
        }

        .venue-name {
          font-size: 1.3rem;
          color: var(--color-maroon);
        }

        .venue-address {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
        }

        .get-dir-btn {
          padding: 0.75rem 1.6rem;
          font-size: 0.95rem;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .baraat-badge-row {
            flex-direction: column;
            text-align: center;
          }
          .baraat-venue-banner {
            flex-direction: column;
            text-align: center;
          }
          .venue-info {
            align-items: center;
          }
        }
      `})]})},vx=()=>{const n=Y.events.find(o=>o.isGrandReception)||Y.events[5],r=Y.venues.primary;return c.jsxs("section",{id:"reception",className:"section-wrapper reception-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsxs("div",{className:"section-badge grand-badge",children:[c.jsx(_e,{size:16}),c.jsx("span",{children:"महाप्रीतिभोज एवं शुभाशीष"}),c.jsx(_e,{size:16})]}),c.jsx("h2",{className:"section-title",children:"स्नेहभोज एवं आशीर्वाद समारोह"}),c.jsx("p",{className:"section-subtitle",children:"आपके स्नेह, शुभाशीष एवं आत्मीय उपस्थिति की अभिलाषा में रामजे परिवार"})]}),c.jsxs(ge.div,{className:"grand-reception-showcase royal-card",initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8},children:[c.jsxs("div",{className:"grand-top-emblem",children:[c.jsx(Nt,{size:42}),c.jsx("div",{className:"emblem-center",children:c.jsx(E4,{className:"utensils-icon"})}),c.jsx(Nt,{size:42})]}),c.jsx("span",{className:"grand-date-sub",children:n.dateDevanagari}),c.jsx("h3",{className:"grand-main-headline",children:n.title}),c.jsxs("div",{className:"grand-time-pill",children:[c.jsx(cs,{className:"pill-icon"}),c.jsx("span",{children:n.timeDevanagari})]}),c.jsx("div",{className:"grand-poetry-wrapper",children:c.jsx("p",{className:"grand-poetry-text",children:'"स्नेह की यह शाम होगी, अपनों की महफिल सजेगी, आपके आशीर्वाद से यह पावन बेला धन्य बनेगी।"'})}),c.jsxs("div",{className:"reception-venue-card",children:[c.jsxs("div",{className:"r-venue-header",children:[c.jsx(xi,{className:"r-pin"}),c.jsxs("div",{children:[c.jsx("span",{className:"r-label",children:"कार्यक्रम स्थल:"}),c.jsx("h4",{className:"r-title",children:r.name})]})]}),c.jsx("p",{className:"r-address",children:r.address}),c.jsxs("div",{className:"r-btn-group",children:[c.jsxs("a",{href:r.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[c.jsx(ls,{}),c.jsx("span",{children:"गूगल मैप्स दिशा निर्देश"})]}),c.jsxs("a",{href:Ip(n),target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:[c.jsx(Q4,{}),c.jsx("span",{children:"कैलेंडर में सेव करें"})]})]})]})]}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .reception-section {
          position: relative;
          background: radial-gradient(circle at 50% 50%, rgba(201, 162, 75, 0.08) 0%, transparent 70%);
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .grand-badge {
          background: var(--gradient-maroon);
          color: #FFF8EC;
          border-color: var(--color-gold);
        }

        .grand-reception-showcase {
          max-width: 920px;
          margin: 0 auto;
          padding: clamp(2.2rem, 6vw, 3.8rem) clamp(1.4rem, 4vw, 3rem);
          text-align: center;
          border-width: 3px;
          border-color: var(--color-gold);
          background: linear-gradient(
            180deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 50%,
            var(--bg-secondary) 100%
          );
          box-shadow: 0 20px 60px rgba(122, 31, 43, 0.18), 0 0 35px rgba(201, 162, 75, 0.35);
        }

        .grand-top-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .emblem-center {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-marigold) 0%, var(--color-maroon) 100%);
          border: 2px solid var(--color-gold);
          color: #FFF8EC;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(232, 145, 45, 0.45);
        }

        .utensils-icon {
          font-size: 1.8rem;
        }

        .grand-date-sub {
          display: inline-block;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          margin-bottom: 0.4rem;
        }

        .grand-main-headline {
          font-size: clamp(1.8rem, 5vw, 3rem);
          color: var(--color-maroon);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .grand-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--bg-tertiary);
          border: 1.5px solid var(--border-gold);
          padding: 0.5rem 1.4rem;
          border-radius: var(--radius-full);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-maroon);
          margin-bottom: 1.8rem;
        }

        .pill-icon {
          color: var(--color-marigold-deep);
        }

        .grand-poetry-wrapper {
          max-width: 680px;
          margin: 0 auto 2.2rem auto;
          padding: 1.2rem 1.8rem;
          background: var(--card-bg-elevated);
          border-left: 3px solid var(--color-gold);
          border-right: 3px solid var(--color-gold);
          border-radius: var(--radius-md);
        }

        .grand-poetry-text {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          color: var(--text-primary);
          font-style: italic;
          line-height: 1.7;
          margin: 0;
        }

        .reception-venue-card {
          background: var(--bg-secondary);
          border: 1.5px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: clamp(1.4rem, 3vw, 2rem);
          text-align: left;
        }

        .r-venue-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.6rem;
        }

        .r-pin {
          font-size: 1.6rem;
          color: var(--color-maroon);
        }

        .r-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
        }

        .r-title {
          font-size: 1.35rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .r-address {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          padding-left: 2.4rem;
        }

        .r-btn-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          padding-left: 2.4rem;
        }

        @media (max-width: 640px) {
          .r-address, .r-btn-group {
            padding-left: 0;
          }
          .reception-venue-card {
            text-align: center;
          }
          .r-venue-header {
            justify-content: center;
          }
          .r-btn-group {
            justify-content: center;
          }
        }
      `})]})},yx=()=>{const{primary:n,baraat:r}=Y.venues,[o,a]=R.useState(null),u=async(h,f)=>{try{await navigator.clipboard.writeText(h),a(f),setTimeout(()=>a(null),2500)}catch{const g=document.createElement("input");g.value=h,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),a(f),setTimeout(()=>a(null),2500)}};return c.jsxs("section",{id:"venue",className:"section-wrapper venue-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(_e,{size:16}),c.jsx("span",{children:"कार्यक्रम स्थल एवं मार्ग दर्शन"}),c.jsx(_e,{size:16})]}),c.jsx("h2",{className:"section-title",children:"कार्यक्रम स्थल (Venue)"}),c.jsx("p",{className:"section-subtitle",children:"शुभ प्रसंगों के आयोजन स्थल एवं सुगम मार्ग हेतु दिशा-निर्देश"})]}),c.jsxs("div",{className:"venues-grid",children:[c.jsxs(ge.div,{className:"venue-card royal-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.7},children:[c.jsxs("div",{className:"venue-card-top",children:[c.jsx("div",{className:"venue-type-icon",children:c.jsx(_4,{})}),c.jsxs("div",{children:[c.jsx("span",{className:"venue-tag",children:"मुख्य समारोह स्थल"}),c.jsx("h3",{className:"venue-card-title",children:n.name})]})]}),c.jsx("p",{className:"venue-desc",children:n.description}),c.jsxs("div",{className:"address-box",children:[c.jsx(xi,{className:"addr-pin"}),c.jsx("p",{className:"address-text",children:n.address})]}),c.jsxs("div",{className:"venue-btn-group",children:[c.jsxs("a",{href:n.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[c.jsx(ls,{}),c.jsx("span",{children:"दिशा निर्देश (Get Directions)"})]}),c.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>u(n.address,"primary"),children:[o==="primary"?c.jsx(Ql,{}):c.jsx(Kl,{}),c.jsx("span",{children:o==="primary"?"पता कॉपी हुआ!":"पता कॉपी करें"})]})]})]}),c.jsxs(ge.div,{className:"venue-card royal-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.7,delay:.2},children:[c.jsxs("div",{className:"venue-card-top",children:[c.jsx("div",{className:"venue-type-icon baraat-icon",children:c.jsx(G4,{})}),c.jsxs("div",{children:[c.jsx("span",{className:"venue-tag",children:"विवाह स्थल (बारात एवं फेरे)"}),c.jsx("h3",{className:"venue-card-title",children:r.name})]})]}),c.jsx("p",{className:"venue-desc",children:r.departure}),c.jsxs("div",{className:"address-box",children:[c.jsx(xi,{className:"addr-pin"}),c.jsx("p",{className:"address-text",children:r.address})]}),c.jsxs("div",{className:"venue-btn-group",children:[c.jsxs("a",{href:r.googleMapsUrl,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[c.jsx(ls,{}),c.jsx("span",{children:"दिशा निर्देश (Get Directions)"})]}),c.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>u(r.address,"baraat"),children:[o==="baraat"?c.jsx(Ql,{}):c.jsx(Kl,{}),c.jsx("span",{children:o==="baraat"?"पता कॉपी हुआ!":"पता कॉपी करें"})]})]})]})]}),c.jsxs(ge.div,{className:"map-embed-wrapper royal-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8},children:[c.jsxs("div",{className:"map-card-header",children:[c.jsx(xi,{className:"map-header-icon"}),c.jsx("span",{className:"map-header-title",children:"इन्दौर नगर स्थिति मानचित्र (Indore City Location Map)"})]}),c.jsx("div",{className:"map-frame-box",children:c.jsx("iframe",{title:"Google Map Location Indore",width:"100%",height:"340",style:{border:0,borderRadius:"var(--radius-md)"},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:"https://maps.google.com/maps?q=Kabitkhedi,+Indore,+Madhya+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"})})]}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .venue-section {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--bg-secondary) 50%,
            transparent 100%
          );
        }

        .text-center {
          text-align: center;
          margin-bottom: 3rem;
        }

        .venues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: clamp(1.5rem, 4vw, 2.5rem);
          max-width: 1040px;
          margin: 0 auto 3rem auto;
        }

        .venue-card {
          padding: clamp(1.8rem, 4vw, 2.4rem);
          display: flex;
          flex-direction: column;
        }

        .venue-card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .venue-type-icon {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1.5px solid var(--color-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .venue-type-icon.baraat-icon {
          color: var(--color-marigold-deep);
        }

        .venue-tag {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .venue-card-title {
          font-size: 1.45rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .venue-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 1.2rem;
        }

        .address-box {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          background: var(--bg-secondary);
          border: 1px dashed var(--border-gold);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .addr-pin {
          font-size: 1.3rem;
          color: var(--color-maroon);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .address-text {
          font-size: 0.98rem;
          color: var(--text-primary);
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        .venue-btn-group {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .map-embed-wrapper {
          max-width: 1040px;
          margin: 0 auto;
          padding: 1.2rem;
          background: var(--card-bg-elevated);
        }

        .map-card-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.5rem 1rem 0.5rem;
        }

        .map-header-icon {
          color: var(--color-maroon);
          font-size: 1.2rem;
        }

        .map-header-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-maroon);
        }

        .map-frame-box {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
        }

        @media (max-width: 480px) {
          .venue-btn-group {
            flex-direction: column;
            width: 100%;
          }
          .venue-btn-group button, .venue-btn-group a {
            width: 100%;
          }
        }
      `})]})},xx=()=>{const{family:n}=Y,[r,o]=R.useState({preshak:!0,darshanabhilashi:!0,swagatatur:!1,vineet:!1,balmanuhar:!0}),a=m=>{o(g=>({...g,[m]:!g[m]}))},u=()=>{const m={};n.sections.forEach(g=>{m[g.id]=!0}),o(m)},h=()=>{o({})},f=m=>{switch(m){case"preshak":return c.jsx(U4,{});case"darshanabhilashi":return c.jsx(zi,{});case"swagatatur":return c.jsx(Wl,{});case"vineet":return c.jsx(I4,{});case"balmanuhar":return c.jsx(W4,{});default:return c.jsx(Wl,{})}};return c.jsxs("section",{id:"family",className:"section-wrapper family-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(_e,{size:16}),c.jsx("span",{children:"रामजे परिवार"}),c.jsx(_e,{size:16})]}),c.jsx("h2",{className:"section-title",children:n.heading}),c.jsx("p",{className:"section-subtitle",children:n.subheading}),c.jsxs("div",{className:"accordion-toggle-all",children:[c.jsx("button",{type:"button",className:"toggle-btn-small",onClick:u,children:"सभी खोलें (Expand All)"}),c.jsx("span",{className:"dot-divider",children:"•"}),c.jsx("button",{type:"button",className:"toggle-btn-small",onClick:h,children:"सभी बंद करें (Collapse All)"})]})]}),c.jsx("div",{className:"accordion-stack",children:n.sections.map((m,g)=>{const v=!!r[m.id];return c.jsxs(ge.div,{className:"accordion-card royal-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.5,delay:g*.08},children:[c.jsxs("button",{type:"button",className:`accordion-header ${v?"active":""}`,onClick:()=>a(m.id),"aria-expanded":v,"aria-controls":`family-sec-${m.id}`,children:[c.jsxs("div",{className:"header-left",children:[c.jsx("span",{className:"sec-icon-circle",children:f(m.id)}),c.jsxs("div",{className:"title-group",children:[c.jsx("span",{className:"sec-badge-text",children:m.badge}),c.jsx("h3",{className:"sec-main-title",children:m.title})]})]}),c.jsx(_p,{className:`chevron-icon ${v?"rotate":""}`})]}),c.jsx(om,{initial:!1,children:v&&c.jsx(ge.div,{id:`family-sec-${m.id}`,initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.35,ease:"easeInOut"},className:"accordion-body-collapse",children:c.jsxs("div",{className:"accordion-body-content",children:[m.id==="preshak"&&c.jsx("div",{className:"preshak-box",children:m.items.map((y,w)=>c.jsxs("div",{className:"preshak-item",children:[c.jsx("h4",{className:"preshak-name",children:y.name}),c.jsx("p",{className:"preshak-address",children:y.address}),c.jsx("div",{className:"preshak-phones",children:y.phones.map((S,P)=>c.jsxs("a",{href:`tel:${S}`,className:"phone-pill-btn","aria-label":`कॉल करें ${S}`,children:[c.jsx(Gl,{className:"phone-icon"}),c.jsxs("span",{children:["मो. ",S]})]},P))})]},w))}),m.groups&&c.jsx("div",{className:"groups-stack",children:m.groups.map((y,w)=>c.jsxs("div",{className:"family-subgroup",children:[c.jsxs("span",{className:"subgroup-title",children:[y.role,":"]}),c.jsx("div",{className:"members-chips-wrap",children:y.members.map((S,P)=>c.jsx("span",{className:"member-chip",children:S},P))})]},w))}),m.members&&c.jsx("div",{className:"vineet-wrap",children:c.jsx("div",{className:"members-chips-wrap",children:m.members.map((y,w)=>c.jsx("span",{className:"member-chip vineet-chip",children:y},w))})}),m.id==="balmanuhar"&&c.jsxs("div",{className:"balmanuhar-card",children:[c.jsxs("p",{className:"balmanuhar-quote",children:['"',m.quote,'"']}),c.jsx("div",{className:"children-chips-row",children:m.children.map((y,w)=>c.jsxs("span",{className:"child-name-badge",children:["❤ ",y]},w))})]})]})})})]},m.id)})}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .family-section {
          background: linear-gradient(
            180deg,
            transparent 0%,
            var(--bg-secondary) 50%,
            transparent 100%
          );
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .accordion-toggle-all {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .toggle-btn-small {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-marigold-deep);
          cursor: pointer;
          padding: 0.2rem 0.5rem;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .dot-divider {
          color: var(--border-gold);
        }

        .accordion-stack {
          max-width: 860px;
          margin: 0 auto 3rem auto;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .accordion-card {
          border-width: 1.5px;
          background: var(--card-bg-elevated);
          overflow: hidden;
        }

        .accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.6rem;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .accordion-header:hover {
          background: var(--bg-tertiary);
        }

        .accordion-header.active {
          border-bottom: 1px dashed var(--border-gold);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .sec-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--color-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .title-group {
          display: flex;
          flex-direction: column;
        }

        .sec-badge-text {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-marigold-deep);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .sec-main-title {
          font-size: 1.35rem;
          color: var(--color-maroon);
          margin: 0;
        }

        .chevron-icon {
          font-size: 1.1rem;
          color: var(--color-gold-dark);
          transition: transform 0.3s ease;
        }

        .chevron-icon.rotate {
          transform: rotate(180deg);
        }

        .accordion-body-collapse {
          overflow: hidden;
        }

        .accordion-body-content {
          padding: 1.4rem 1.6rem;
          background: var(--bg-primary);
        }

        /* Preshak styling */
        .preshak-name {
          font-size: 1.25rem;
          color: var(--color-maroon);
          margin-bottom: 0.3rem;
        }

        .preshak-address {
          font-size: 0.98rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .preshak-phones {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .phone-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-maroon);
          box-shadow: var(--shadow-sm);
          transition: var(--transition-smooth);
        }

        .phone-pill-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-marigold-deep);
          transform: translateY(-2px);
        }

        .phone-icon {
          color: #25D366;
        }

        /* Groups & Chips */
        .groups-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .family-subgroup {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .subgroup-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-maroon);
        }

        .members-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .member-chip {
          display: inline-block;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .vineet-chip {
          background: var(--bg-tertiary);
          font-weight: 600;
        }

        /* Bal Manuhar */
        .balmanuhar-card {
          text-align: center;
          padding: 0.5rem;
        }

        .balmanuhar-quote {
          font-family: var(--font-heading-hindi);
          font-size: 1.05rem;
          color: var(--color-maroon);
          font-style: italic;
          line-height: 1.7;
          margin-bottom: 1.2rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          padding: 1rem 1.4rem;
          border-left: 3px solid var(--color-gold);
        }

        .children-chips-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .child-name-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: linear-gradient(135deg, var(--card-bg-elevated) 0%, var(--bg-secondary) 100%);
          border: 1.5px solid var(--color-gold);
          padding: 0.45rem 1.1rem;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-maroon);
          box-shadow: var(--shadow-sm);
        }
      `})]})},wx=()=>{const[n,r]=R.useState(""),[o,a]=R.useState("2"),[u,h]=R.useState(""),[f,m]=R.useState(!1);R.useEffect(()=>{if(typeof window<"u"){const y=new URLSearchParams(window.location.search).get("guest");y&&y.trim()&&r(y.trim())}},[]);const g=v=>{v.preventDefault();const y=Y.rsvp.defaultMessageTemplate(n.trim(),o,u.trim()),w=`https://wa.me/${Y.rsvp.whatsappNumber}?text=${encodeURIComponent(y)}`;m(!0),window.open(w,"_blank","noopener,noreferrer")};return c.jsxs("section",{id:"rsvp",className:"section-wrapper rsvp-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header text-center",children:[c.jsxs("div",{className:"section-badge",children:[c.jsx(_e,{size:16}),c.jsx("span",{children:"उपस्थिति एवं शुभाशीष"}),c.jsx(_e,{size:16})]}),c.jsx("h2",{className:"section-title",children:Y.rsvp.heading}),c.jsx("p",{className:"section-subtitle",children:Y.rsvp.subtitle})]}),c.jsx("div",{className:"rsvp-card-wrapper",children:c.jsxs(ge.div,{className:"rsvp-form-card royal-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.8},children:[c.jsxs("form",{onSubmit:g,className:"rsvp-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"rsvp-name",className:"form-label",children:[c.jsx(z4,{className:"form-icon"}),c.jsx("span",{children:"आपका शुभ नाम (Full Name) *"})]}),c.jsx("input",{id:"rsvp-name",type:"text",required:!0,placeholder:"उदा. श्री राजेश शर्मा",value:n,onChange:v=>r(v.target.value),className:"form-input"})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"rsvp-count",className:"form-label",children:[c.jsx(Wl,{className:"form-icon"}),c.jsx("span",{children:"पधारने वाले सदस्यों की संख्या (Number of Guests) *"})]}),c.jsx("div",{className:"count-selector-row",children:["1","2","3","4","5+"].map(v=>c.jsx("button",{type:"button",className:`count-chip ${o===v?"selected":""}`,onClick:()=>a(v),children:v},v))})]}),c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{htmlFor:"rsvp-note",className:"form-label",children:[c.jsx(zi,{className:"form-icon heart"}),c.jsx("span",{children:"शुभकामना संदेश / शुभाशीष (Optional Wishes)"})]}),c.jsx("textarea",{id:"rsvp-note",rows:3,placeholder:"वर-वधू के लिए अपने मंगल वचन लिखें...",value:u,onChange:v=>h(v.target.value),className:"form-textarea"})]}),c.jsxs("button",{type:"submit",className:"rsvp-submit-btn",children:[c.jsx(Vp,{className:"wa-btn-icon"}),c.jsx("span",{children:"व्हाट्सएप पर उपस्थिति दर्ज करें (हम अवश्य पधारेंगे)"}),c.jsx(R4,{className:"send-icon"})]}),f&&c.jsx("p",{className:"rsvp-success-hint",children:"व्हाट्सएप खुल रहा है... यदि नहीं खुला, तो कृपया ऊपर दिए गए नंबर पर सीधा संपर्क करें।"})]}),c.jsx("div",{className:"rsvp-divider"}),c.jsxs("div",{className:"rsvp-contact-footer",children:[c.jsx("span",{className:"contact-head",children:"सीधा संपर्क सूत्र (Contact Person):"}),c.jsx("p",{className:"contact-name",children:Y.rsvp.contactPerson}),c.jsxs("div",{className:"contact-links-row",children:[c.jsxs("a",{href:`tel:${Y.meta.primaryPhone}`,className:"contact-phone-btn",children:[c.jsx(Gl,{}),c.jsx("span",{children:Y.meta.primaryPhone})]}),c.jsxs("a",{href:`tel:${Y.rsvp.alternatePhone}`,className:"contact-phone-btn",children:[c.jsx(Gl,{}),c.jsx("span",{children:Y.rsvp.alternatePhone})]})]})]})]})}),c.jsx(Jt,{})]}),c.jsx("style",{children:`
        .rsvp-section {
          position: relative;
        }

        .text-center {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .rsvp-card-wrapper {
          max-width: 660px;
          margin: 0 auto 3rem auto;
        }

        .rsvp-form-card {
          padding: clamp(1.8rem, 5vw, 2.8rem);
          border-width: 2px;
          border-color: var(--color-gold);
          background: linear-gradient(
            180deg,
            var(--card-bg-elevated) 0%,
            var(--card-bg) 100%
          );
        }

        .rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-maroon);
        }

        .form-icon {
          color: var(--color-marigold-deep);
        }

        .form-icon.heart {
          color: #E63946;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--border-gold);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition-smooth);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--color-gold);
          outline: none;
          box-shadow: 0 0 10px rgba(201, 162, 75, 0.35);
        }

        .count-selector-row {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .count-chip {
          flex: 1;
          min-width: 50px;
          padding: 0.65rem 0.5rem;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-gold);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .count-chip:hover {
          border-color: var(--color-gold);
          color: var(--color-maroon);
        }

        .count-chip.selected {
          background: var(--gradient-maroon);
          border-color: var(--color-gold);
          color: #FFF8EC;
          box-shadow: var(--shadow-sm);
        }

        .rsvp-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 0.9rem 1.4rem;
          background: #25D366;
          color: #FFF;
          border-radius: var(--radius-full);
          font-size: clamp(0.95rem, 2.5vw, 1.12rem);
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
          transition: var(--transition-smooth);
          margin-top: 0.5rem;
        }

        .rsvp-submit-btn:hover {
          background: #1EBE5B;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45);
        }

        .wa-btn-icon {
          font-size: 1.45rem;
        }

        .send-icon {
          font-size: 0.95rem;
        }

        .rsvp-success-hint {
          font-size: 0.88rem;
          color: #25D366;
          text-align: center;
          margin-top: 0.4rem;
        }

        .rsvp-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-gold), transparent);
          margin: 1.8rem 0 1.4rem 0;
        }

        .rsvp-contact-footer {
          text-align: center;
        }

        .contact-head {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .contact-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-maroon);
          margin: 0.2rem 0 0.8rem 0;
        }

        .contact-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .contact-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-maroon);
          transition: var(--transition-smooth);
        }

        .contact-phone-btn:hover {
          background: var(--card-bg-elevated);
          border-color: var(--color-gold);
          transform: translateY(-2px);
        }
      `})]})},jx=()=>{const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsxs("footer",{className:"royal-footer",children:[c.jsxs("div",{className:"container footer-content",children:[c.jsxs("div",{className:"footer-top-decor",children:[c.jsx(Nt,{size:36}),c.jsx(Mc,{size:56}),c.jsx(Nt,{size:36})]}),c.jsx("h3",{className:"footer-blessing-title",children:Y.footer.blessing}),c.jsx("p",{className:"footer-guest-quote",children:Y.footer.quote}),c.jsx("div",{className:"footer-hashtag-badge",children:c.jsx("span",{children:Y.footer.hashtag})}),c.jsx("div",{className:"footer-names-row font-english",children:c.jsx("span",{children:Y.meta.coupleEnglish})}),c.jsx("p",{className:"footer-family-credit",children:Y.footer.copyright}),c.jsx("div",{className:"footer-divider-line"}),c.jsxs("div",{className:"footer-bottom-row",children:[c.jsxs("p",{className:"made-with-love",children:["प्रेम एवं श्रद्धा से निर्मित ",c.jsx(zi,{className:"heart-tiny"})," वर-वधू के पावन परिणयोत्सव हेतु"]}),c.jsx("button",{type:"button",className:"back-to-top-btn",onClick:n,"aria-label":"शीर्ष पर वापस जाएं",title:"ऊपर जाएं",children:c.jsx(X4,{})})]})]}),c.jsx("style",{children:`
        .royal-footer {
          position: relative;
          background: linear-gradient(
            180deg,
            var(--bg-secondary) 0%,
            var(--bg-tertiary) 40%,
            var(--card-bg-elevated) 100%
          );
          border-top: 2px solid var(--border-gold);
          padding: 4rem 0 2.5rem 0;
          text-align: center;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-top-decor {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 1.4rem;
        }

        .footer-blessing-title {
          font-family: var(--font-heading-hindi);
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          color: var(--color-maroon);
          margin-bottom: 0.6rem;
        }

        .footer-guest-quote {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: var(--text-secondary);
          margin-bottom: 1.4rem;
          font-style: italic;
        }

        .footer-hashtag-badge {
          display: inline-block;
          background: var(--card-bg-elevated);
          border: 1px solid var(--border-gold);
          color: var(--color-marigold-deep);
          font-family: var(--font-english-serif);
          font-size: 1.15rem;
          font-weight: 700;
          padding: 0.35rem 1.4rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-sm);
        }

        .footer-names-row {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-maroon);
          margin-bottom: 0.4rem;
          letter-spacing: 0.05em;
        }

        .footer-family-credit {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .footer-divider-line {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-gold), transparent);
          margin-bottom: 1.5rem;
        }

        .footer-bottom-row {
          width: 100%;
          max-width: 800px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .made-with-love {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
        }

        .heart-tiny {
          color: #E63946;
          font-size: 0.8rem;
        }

        .back-to-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--card-bg-elevated);
          border: 1.5px solid var(--border-gold);
          color: var(--color-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .back-to-top-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-marigold-deep);
          transform: translateY(-3px);
          box-shadow: var(--shadow-gold);
        }

        @media (max-width: 540px) {
          .footer-bottom-row {
            flex-direction: column;
            justify-content: center;
          }
        }
      `})]})};function Sx(){const[n,r]=R.useState(!1),o=()=>{r(!0),window.scrollTo({top:0,behavior:"smooth"})};return c.jsxs("div",{className:"wedding-app-root",children:[c.jsx(q4,{onOpen:o,isOpen:n}),c.jsx(Z4,{}),c.jsx(rx,{}),c.jsxs("main",{id:"main-content",children:[c.jsx(ox,{}),c.jsx(sx,{}),c.jsx(ax,{}),c.jsx(lx,{}),c.jsx(px,{}),c.jsx(gx,{}),c.jsx(vx,{}),c.jsx(yx,{}),c.jsx(xx,{}),c.jsx(wx,{})]}),c.jsx(jx,{}),c.jsx("style",{children:`
        .wedding-app-root {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        #main-content {
          position: relative;
          z-index: 2;
        }
      `})]})}G1.createRoot(document.getElementById("root")).render(c.jsx(jn.StrictMode,{children:c.jsx(Sx,{})}));
