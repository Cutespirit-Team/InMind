(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function A6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}function P6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=m1(s)?co(s):P6(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(m1(c))return c;if(i1(c))return c}}const Xl=/;(?![^(]*\))/g,Ql=/:([^]+)/,Jl=/\/\*.*?\*\//gs;function co(c){const a={};return c.replace(Jl,"").split(Xl).forEach(e=>{if(e){const s=e.split(Ql);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function T6(c){let a="";if(m1(c))a=c;else if(O(c))for(let e=0;e<c.length;e++){const s=T6(c[e]);s&&(a+=s+" ")}else if(i1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const ao="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eo=A6(ao);function F0(c){return!!c||c===""}const OJ=c=>m1(c)?c:c==null?"":O(c)||i1(c)&&(c.toString===D0||!U(c.toString))?JSON.stringify(c,B0,2):String(c),B0=(c,a)=>a&&a.__v_isRef?B0(c,a.value):D2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:R0(a)?{[`Set(${a.size})`]:[...a.values()]}:i1(a)&&!O(a)&&!q0(a)?String(a):a,s1={},E2=[],F1=()=>{},so=()=>!1,ro=/^on[^a-z]/,m4=c=>ro.test(c),F6=c=>c.startsWith("onUpdate:"),V1=Object.assign,B6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},io=Object.prototype.hasOwnProperty,Z=(c,a)=>io.call(c,a),O=Array.isArray,D2=c=>z4(c)==="[object Map]",R0=c=>z4(c)==="[object Set]",U=c=>typeof c=="function",m1=c=>typeof c=="string",R6=c=>typeof c=="symbol",i1=c=>c!==null&&typeof c=="object",E0=c=>i1(c)&&U(c.then)&&U(c.catch),D0=Object.prototype.toString,z4=c=>D0.call(c),fo=c=>z4(c).slice(8,-1),q0=c=>z4(c)==="[object Object]",E6=c=>m1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,j3=A6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),C4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},no=/-(\w)/g,G1=C4(c=>c.replace(no,(a,e)=>e?e.toUpperCase():"")),lo=/\B([A-Z])/g,K2=C4(c=>c.replace(lo,"-$1").toLowerCase()),v4=C4(c=>c.charAt(0).toUpperCase()+c.slice(1)),I4=C4(c=>c?`on${v4(c)}`:""),m3=(c,a)=>!Object.is(c,a),G4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},e4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},_0=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let H5;const oo=()=>H5||(H5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _1;class to{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_1,!a&&_1&&(this.index=(_1.scopes||(_1.scopes=[])).push(this)-1)}run(a){if(this.active){const e=_1;try{return _1=this,a()}finally{_1=e}}}on(){_1=this}off(){_1=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function mo(c,a=_1){a&&a.active&&a.effects.push(c)}const D6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},O0=c=>(c.w&m2)>0,U0=c=>(c.n&m2)>0,zo=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=m2},Co=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];O0(r)&&!U0(r)?r.delete(c):a[e++]=r,r.w&=~m2,r.n&=~m2}a.length=e}},r6=new WeakMap;let s3=0,m2=1;const i6=30;let y1;const x2=Symbol(""),f6=Symbol("");class q6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,mo(this,s)}run(){if(!this.active)return this.fn();let a=y1,e=o2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=y1,y1=this,o2=!0,m2=1<<++s3,s3<=i6?zo(this):u5(this),this.fn()}finally{s3<=i6&&Co(this),m2=1<<--s3,y1=this.parent,o2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y1===this?this.deferStop=!0:this.active&&(u5(this),this.onStop&&this.onStop(),this.active=!1)}}function u5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let o2=!0;const $0=[];function Y2(){$0.push(o2),o2=!1}function X2(){const c=$0.pop();o2=c===void 0?!0:c}function g1(c,a,e){if(o2&&y1){let s=r6.get(c);s||r6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=D6()),I0(r)}}function I0(c,a){let e=!1;s3<=i6?U0(c)||(c.n|=m2,e=!O0(c)):e=!c.has(y1),e&&(c.add(y1),y1.deps.push(c))}function X1(c,a,e,s,r,i){const f=r6.get(c);if(!f)return;let n=[];if(a==="clear")n=[...f.values()];else if(e==="length"&&O(c)){const l=_0(s);f.forEach((t,o)=>{(o==="length"||o>=l)&&n.push(t)})}else switch(e!==void 0&&n.push(f.get(e)),a){case"add":O(c)?E6(e)&&n.push(f.get("length")):(n.push(f.get(x2)),D2(c)&&n.push(f.get(f6)));break;case"delete":O(c)||(n.push(f.get(x2)),D2(c)&&n.push(f.get(f6)));break;case"set":D2(c)&&n.push(f.get(x2));break}if(n.length===1)n[0]&&n6(n[0]);else{const l=[];for(const t of n)t&&l.push(...t);n6(D6(l))}}function n6(c,a){const e=O(c)?c:[...c];for(const s of e)s.computed&&V5(s);for(const s of e)s.computed||V5(s)}function V5(c,a){(c!==y1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const vo=A6("__proto__,__v_isRef,__isVue"),G0=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(R6)),ho=_6(),Ho=_6(!1,!0),uo=_6(!0),M5=Vo();function Vo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=j(this);for(let i=0,f=this.length;i<f;i++)g1(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){Y2();const s=j(this)[a].apply(this,e);return X2(),s}}),c}function _6(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?Bo:Y0:a?K0:j0).get(s))return s;const f=O(s);if(!c&&f&&Z(M5,r))return Reflect.get(M5,r,i);const n=Reflect.get(s,r,i);return(R6(r)?G0.has(r):vo(r))||(c||g1(s,"get",r),a)?n:v1(n)?f&&E6(r)?n:n.value:i1(n)?c?X0(n):g3(n):n}}const Mo=W0(),po=W0(!0);function W0(c=!1){return function(e,s,r,i){let f=e[s];if($2(f)&&v1(f)&&!v1(r))return!1;if(!c&&(!s4(r)&&!$2(r)&&(f=j(f),r=j(r)),!O(e)&&v1(f)&&!v1(r)))return f.value=r,!0;const n=O(e)&&E6(s)?Number(s)<e.length:Z(e,s),l=Reflect.set(e,s,r,i);return e===j(i)&&(n?m3(r,f)&&X1(e,"set",s,r):X1(e,"add",s,r)),l}}function Lo(c,a){const e=Z(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&X1(c,"delete",a,void 0),s}function go(c,a){const e=Reflect.has(c,a);return(!R6(a)||!G0.has(a))&&g1(c,"has",a),e}function xo(c){return g1(c,"iterate",O(c)?"length":x2),Reflect.ownKeys(c)}const Z0={get:ho,set:Mo,deleteProperty:Lo,has:go,ownKeys:xo},bo={get:uo,set(c,a){return!0},deleteProperty(c,a){return!0}},So=V1({},Z0,{get:Ho,set:po}),O6=c=>c,h4=c=>Reflect.getPrototypeOf(c);function T3(c,a,e=!1,s=!1){c=c.__v_raw;const r=j(c),i=j(a);e||(a!==i&&g1(r,"get",a),g1(r,"get",i));const{has:f}=h4(r),n=s?O6:e?I6:z3;if(f.call(r,a))return n(c.get(a));if(f.call(r,i))return n(c.get(i));c!==r&&c.get(a)}function F3(c,a=!1){const e=this.__v_raw,s=j(e),r=j(c);return a||(c!==r&&g1(s,"has",c),g1(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function B3(c,a=!1){return c=c.__v_raw,!a&&g1(j(c),"iterate",x2),Reflect.get(c,"size",c)}function p5(c){c=j(c);const a=j(this);return h4(a).has.call(a,c)||(a.add(c),X1(a,"add",c,c)),this}function d5(c,a){a=j(a);const e=j(this),{has:s,get:r}=h4(e);let i=s.call(e,c);i||(c=j(c),i=s.call(e,c));const f=r.call(e,c);return e.set(c,a),i?m3(a,f)&&X1(e,"set",c,a):X1(e,"add",c,a),this}function L5(c){const a=j(this),{has:e,get:s}=h4(a);let r=e.call(a,c);r||(c=j(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&X1(a,"delete",c,void 0),i}function g5(){const c=j(this),a=c.size!==0,e=c.clear();return a&&X1(c,"clear",void 0,void 0),e}function R3(c,a){return function(s,r){const i=this,f=i.__v_raw,n=j(f),l=a?O6:c?I6:z3;return!c&&g1(n,"iterate",x2),f.forEach((t,o)=>s.call(r,l(t),l(o),i))}}function E3(c,a,e){return function(...s){const r=this.__v_raw,i=j(r),f=D2(i),n=c==="entries"||c===Symbol.iterator&&f,l=c==="keys"&&f,t=r[c](...s),o=e?O6:a?I6:z3;return!a&&g1(i,"iterate",l?f6:x2),{next(){const{value:z,done:v}=t.next();return v?{value:z,done:v}:{value:n?[o(z[0]),o(z[1])]:o(z),done:v}},[Symbol.iterator](){return this}}}}function r2(c){return function(...a){return c==="delete"?!1:this}}function No(){const c={get(i){return T3(this,i)},get size(){return B3(this)},has:F3,add:p5,set:d5,delete:L5,clear:g5,forEach:R3(!1,!1)},a={get(i){return T3(this,i,!1,!0)},get size(){return B3(this)},has:F3,add:p5,set:d5,delete:L5,clear:g5,forEach:R3(!1,!0)},e={get(i){return T3(this,i,!0)},get size(){return B3(this,!0)},has(i){return F3.call(this,i,!0)},add:r2("add"),set:r2("set"),delete:r2("delete"),clear:r2("clear"),forEach:R3(!0,!1)},s={get(i){return T3(this,i,!0,!0)},get size(){return B3(this,!0)},has(i){return F3.call(this,i,!0)},add:r2("add"),set:r2("set"),delete:r2("delete"),clear:r2("clear"),forEach:R3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=E3(i,!1,!1),e[i]=E3(i,!0,!1),a[i]=E3(i,!1,!0),s[i]=E3(i,!0,!0)}),[c,e,a,s]}const[wo,ko,yo,Ao]=No();function U6(c,a){const e=a?c?Ao:yo:c?ko:wo;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(Z(e,r)&&r in s?e:s,r,i)}const Po={get:U6(!1,!1)},To={get:U6(!1,!0)},Fo={get:U6(!0,!1)},j0=new WeakMap,K0=new WeakMap,Y0=new WeakMap,Bo=new WeakMap;function Ro(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eo(c){return c.__v_skip||!Object.isExtensible(c)?0:Ro(fo(c))}function g3(c){return $2(c)?c:$6(c,!1,Z0,Po,j0)}function Do(c){return $6(c,!1,So,To,K0)}function X0(c){return $6(c,!0,bo,Fo,Y0)}function $6(c,a,e,s,r){if(!i1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const f=Eo(c);if(f===0)return c;const n=new Proxy(c,f===2?s:e);return r.set(c,n),n}function q2(c){return $2(c)?q2(c.__v_raw):!!(c&&c.__v_isReactive)}function $2(c){return!!(c&&c.__v_isReadonly)}function s4(c){return!!(c&&c.__v_isShallow)}function Q0(c){return q2(c)||$2(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function J0(c){return e4(c,"__v_skip",!0),c}const z3=c=>i1(c)?g3(c):c,I6=c=>i1(c)?X0(c):c;function c7(c){o2&&y1&&(c=j(c),I0(c.dep||(c.dep=D6())))}function a7(c,a){c=j(c),c.dep&&n6(c.dep)}function v1(c){return!!(c&&c.__v_isRef===!0)}function qo(c){return e7(c,!1)}function _o(c){return e7(c,!0)}function e7(c,a){return v1(c)?c:new Oo(c,a)}class Oo{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:z3(a)}get value(){return c7(this),this._value}set value(a){const e=this.__v_isShallow||s4(a)||$2(a);a=e?a:j(a),m3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:z3(a),a7(this))}}function _2(c){return v1(c)?c.value:c}const Uo={get:(c,a,e)=>_2(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return v1(r)&&!v1(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function s7(c){return q2(c)?c:new Proxy(c,Uo)}var r7;class $o{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[r7]=!1,this._dirty=!0,this.effect=new q6(a,()=>{this._dirty||(this._dirty=!0,a7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=j(this);return c7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}r7="__v_isReadonly";function Io(c,a,e=!1){let s,r;const i=U(c);return i?(s=c,r=F1):(s=c.get,r=c.set),new $o(s,r,i||!r,e)}function t2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){H4(i,a,e)}return r}function B1(c,a,e,s){if(U(c)){const i=t2(c,a,e,s);return i&&E0(i)&&i.catch(f=>{H4(f,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(B1(c[i],a,e,s));return r}function H4(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const f=a.proxy,n=e;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,f,n)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){t2(l,null,10,[c,f,n]);return}}Go(c,e,r,s)}function Go(c,a,e,s=!0){console.error(c)}let C3=!1,l6=!1;const C1=[];let $1=0;const O2=[];let Z1=null,p2=0;const i7=Promise.resolve();let G6=null;function W6(c){const a=G6||i7;return c?a.then(this?c.bind(this):c):a}function Wo(c){let a=$1+1,e=C1.length;for(;a<e;){const s=a+e>>>1;v3(C1[s])<c?a=s+1:e=s}return a}function Z6(c){(!C1.length||!C1.includes(c,C3&&c.allowRecurse?$1+1:$1))&&(c.id==null?C1.push(c):C1.splice(Wo(c.id),0,c),f7())}function f7(){!C3&&!l6&&(l6=!0,G6=i7.then(l7))}function Zo(c){const a=C1.indexOf(c);a>$1&&C1.splice(a,1)}function jo(c){O(c)?O2.push(...c):(!Z1||!Z1.includes(c,c.allowRecurse?p2+1:p2))&&O2.push(c),f7()}function x5(c,a=C3?$1+1:0){for(;a<C1.length;a++){const e=C1[a];e&&e.pre&&(C1.splice(a,1),a--,e())}}function n7(c){if(O2.length){const a=[...new Set(O2)];if(O2.length=0,Z1){Z1.push(...a);return}for(Z1=a,Z1.sort((e,s)=>v3(e)-v3(s)),p2=0;p2<Z1.length;p2++)Z1[p2]();Z1=null,p2=0}}const v3=c=>c.id==null?1/0:c.id,Ko=(c,a)=>{const e=v3(c)-v3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function l7(c){l6=!1,C3=!0,C1.sort(Ko);const a=F1;try{for($1=0;$1<C1.length;$1++){const e=C1[$1];e&&e.active!==!1&&t2(e,null,14)}}finally{$1=0,C1.length=0,n7(),C3=!1,G6=null,(C1.length||O2.length)&&l7()}}function Yo(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||s1;let r=e;const i=a.startsWith("update:"),f=i&&a.slice(7);if(f&&f in s){const o=`${f==="modelValue"?"model":f}Modifiers`,{number:z,trim:v}=s[o]||s1;v&&(r=e.map(h=>m1(h)?h.trim():h)),z&&(r=e.map(_0))}let n,l=s[n=I4(a)]||s[n=I4(G1(a))];!l&&i&&(l=s[n=I4(K2(a))]),l&&B1(l,c,6,r);const t=s[n+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[n])return;c.emitted[n]=!0,B1(t,c,6,r)}}function o7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let f={},n=!1;if(!U(c)){const l=t=>{const o=o7(t,a,!0);o&&(n=!0,V1(f,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!n?(i1(c)&&s.set(c,null),null):(O(i)?i.forEach(l=>f[l]=null):V1(f,i),i1(c)&&s.set(c,f),f)}function u4(c,a){return!c||!m4(a)?!1:(a=a.slice(2).replace(/Once$/,""),Z(c,a[0].toLowerCase()+a.slice(1))||Z(c,K2(a))||Z(c,a))}let A1=null,t7=null;function r4(c){const a=A1;return A1=c,t7=c&&c.type.__scopeId||null,a}function Xo(c,a=A1,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&T5(-1);const i=r4(a);let f;try{f=c(...r)}finally{r4(i),s._d&&T5(1)}return f};return s._n=!0,s._c=!0,s._d=!0,s}function W4(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[f],slots:n,attrs:l,emit:t,render:o,renderCache:z,data:v,setupState:h,ctx:g,inheritAttrs:w}=c;let B,V;const d=r4(c);try{if(e.shapeFlag&4){const q=r||s;B=O1(o.call(q,q,z,i,h,v,g)),V=l}else{const q=a;B=O1(q.length>1?q(i,{attrs:l,slots:n,emit:t}):q(i,null)),V=a.props?l:Qo(l)}}catch(q){f3.length=0,H4(q,c,1),B=u1(S2)}let S=B;if(V&&w!==!1){const q=Object.keys(V),{shapeFlag:I}=S;q.length&&I&7&&(f&&q.some(F6)&&(V=Jo(V,f)),S=I2(S,V))}return e.dirs&&(S=I2(S),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&(S.transition=e.transition),B=S,r4(d),B}const Qo=c=>{let a;for(const e in c)(e==="class"||e==="style"||m4(e))&&((a||(a={}))[e]=c[e]);return a},Jo=(c,a)=>{const e={};for(const s in c)(!F6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function ct(c,a,e){const{props:s,children:r,component:i}=c,{props:f,children:n,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?b5(s,f,t):!!f;if(l&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const v=o[z];if(f[v]!==s[v]&&!u4(t,v))return!0}}}else return(r||n)&&(!n||!n.$stable)?!0:s===f?!1:s?f?b5(s,f,t):!0:!!f;return!1}function b5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!u4(e,i))return!0}return!1}function at({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const et=c=>c.__isSuspense;function st(c,a){a&&a.pendingBranch?O(c)?a.effects.push(...c):a.effects.push(c):jo(c)}function K3(c,a){if(z1){let e=z1.provides;const s=z1.parent&&z1.parent.provides;s===e&&(e=z1.provides=Object.create(s)),e[c]=a}}function Y1(c,a,e=!1){const s=z1||A1;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&U(a)?a.call(s.proxy):a}}const D3={};function Y3(c,a,e){return m7(c,a,e)}function m7(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:f}=s1){const n=z1;let l,t=!1,o=!1;if(v1(c)?(l=()=>c.value,t=s4(c)):q2(c)?(l=()=>c,s=!0):O(c)?(o=!0,t=c.some(S=>q2(S)||s4(S)),l=()=>c.map(S=>{if(v1(S))return S.value;if(q2(S))return F2(S);if(U(S))return t2(S,n,2)})):U(c)?a?l=()=>t2(c,n,2):l=()=>{if(!(n&&n.isUnmounted))return z&&z(),B1(c,n,3,[v])}:l=F1,a&&s){const S=l;l=()=>F2(S())}let z,v=S=>{z=V.onStop=()=>{t2(S,n,4)}},h;if(H3)if(v=F1,a?e&&B1(a,n,3,[l(),o?[]:void 0,v]):l(),r==="sync"){const S=cm();h=S.__watcherHandles||(S.__watcherHandles=[])}else return F1;let g=o?new Array(c.length).fill(D3):D3;const w=()=>{if(V.active)if(a){const S=V.run();(s||t||(o?S.some((q,I)=>m3(q,g[I])):m3(S,g)))&&(z&&z(),B1(a,n,3,[S,g===D3?void 0:o&&g[0]===D3?[]:g,v]),g=S)}else V.run()};w.allowRecurse=!!a;let B;r==="sync"?B=w:r==="post"?B=()=>p1(w,n&&n.suspense):(w.pre=!0,n&&(w.id=n.uid),B=()=>Z6(w));const V=new q6(l,B);a?e?w():g=V.run():r==="post"?p1(V.run.bind(V),n&&n.suspense):V.run();const d=()=>{V.stop(),n&&n.scope&&B6(n.scope.effects,V)};return h&&h.push(d),d}function rt(c,a,e){const s=this.proxy,r=m1(c)?c.includes(".")?z7(s,c):()=>s[c]:c.bind(s,s);let i;U(a)?i=a:(i=a.handler,e=a);const f=z1;G2(this);const n=m7(r,i.bind(s),e);return f?G2(f):b2(),n}function z7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function F2(c,a){if(!i1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),v1(c))F2(c.value,a);else if(O(c))for(let e=0;e<c.length;e++)F2(c[e],a);else if(R0(c)||D2(c))c.forEach(e=>{F2(e,a)});else if(q0(c))for(const e in c)F2(c[e],a);return c}function C7(c){return U(c)?{setup:c,name:c.name}:c}const X3=c=>!!c.type.__asyncLoader,v7=c=>c.type.__isKeepAlive;function it(c,a){h7(c,"a",a)}function ft(c,a){h7(c,"da",a)}function h7(c,a,e=z1){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(V4(a,s,e),e){let r=e.parent;for(;r&&r.parent;)v7(r.parent.vnode)&&nt(s,a,e,r),r=r.parent}}function nt(c,a,e,s){const r=V4(a,c,s,!0);H7(()=>{B6(s[a],r)},e)}function V4(c,a,e=z1,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...f)=>{if(e.isUnmounted)return;Y2(),G2(e);const n=B1(a,e,c,f);return b2(),X2(),n});return s?r.unshift(i):r.push(i),i}}const a2=c=>(a,e=z1)=>(!H3||c==="sp")&&V4(c,(...s)=>a(...s),e),lt=a2("bm"),ot=a2("m"),tt=a2("bu"),mt=a2("u"),zt=a2("bum"),H7=a2("um"),Ct=a2("sp"),vt=a2("rtg"),ht=a2("rtc");function Ht(c,a=z1){V4("ec",c,a)}function u2(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let f=0;f<r.length;f++){const n=r[f];i&&(n.oldValue=i[f].value);let l=n.dir[s];l&&(Y2(),B1(l,e,8,[c.el,n,c,a]),X2())}}const u7="components";function ut(c,a){return Mt(u7,c,!0,a)||c}const Vt=Symbol();function Mt(c,a,e=!0,s=!1){const r=A1||z1;if(r){const i=r.type;if(c===u7){const n=Xt(i,!1);if(n&&(n===a||n===G1(a)||n===v4(G1(a))))return i}const f=S5(r[c]||i[c],a)||S5(r.appContext[c],a);return!f&&s?i:f}}function S5(c,a){return c&&(c[a]||c[G1(a)]||c[v4(G1(a))])}const o6=c=>c?y7(c)?X6(c)||c.proxy:o6(c.parent):null,i3=V1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>o6(c.parent),$root:c=>o6(c.root),$emit:c=>c.emit,$options:c=>j6(c),$forceUpdate:c=>c.f||(c.f=()=>Z6(c.update)),$nextTick:c=>c.n||(c.n=W6.bind(c.proxy)),$watch:c=>rt.bind(c)}),Z4=(c,a)=>c!==s1&&!c.__isScriptSetup&&Z(c,a),pt={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:f,type:n,appContext:l}=c;let t;if(a[0]!=="$"){const h=f[a];if(h!==void 0)switch(h){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(Z4(s,a))return f[a]=1,s[a];if(r!==s1&&Z(r,a))return f[a]=2,r[a];if((t=c.propsOptions[0])&&Z(t,a))return f[a]=3,i[a];if(e!==s1&&Z(e,a))return f[a]=4,e[a];t6&&(f[a]=0)}}const o=i3[a];let z,v;if(o)return a==="$attrs"&&g1(c,"get",a),o(c);if((z=n.__cssModules)&&(z=z[a]))return z;if(e!==s1&&Z(e,a))return f[a]=4,e[a];if(v=l.config.globalProperties,Z(v,a))return v[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return Z4(r,a)?(r[a]=e,!0):s!==s1&&Z(s,a)?(s[a]=e,!0):Z(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},f){let n;return!!e[f]||c!==s1&&Z(c,f)||Z4(a,f)||(n=i[0])&&Z(n,f)||Z(s,f)||Z(i3,f)||Z(r.config.globalProperties,f)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:Z(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let t6=!0;function dt(c){const a=j6(c),e=c.proxy,s=c.ctx;t6=!1,a.beforeCreate&&N5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:f,watch:n,provide:l,inject:t,created:o,beforeMount:z,mounted:v,beforeUpdate:h,updated:g,activated:w,deactivated:B,beforeDestroy:V,beforeUnmount:d,destroyed:S,unmounted:q,render:I,renderTracked:e1,renderTriggered:f1,errorCaptured:d1,serverPrefetch:h1,expose:b1,inheritAttrs:s2,components:E1,directives:k2,filters:h2}=a;if(t&&Lt(t,s,null,c.appContext.config.unwrapInjectedRef),f)for(const Q in f){const Y=f[Q];U(Y)&&(s[Q]=Y.bind(e))}if(r){const Q=r.call(e,e);i1(Q)&&(c.data=g3(Q))}if(t6=!0,i)for(const Q in i){const Y=i[Q],N1=U(Y)?Y.bind(e,e):U(Y.get)?Y.get.bind(e,e):F1,H2=!U(Y)&&U(Y.set)?Y.set.bind(e):F1,w1=S1({get:N1,set:H2});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>w1.value,set:M1=>w1.value=M1})}if(n)for(const Q in n)V7(n[Q],s,e,Q);if(l){const Q=U(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(Y=>{K3(Y,Q[Y])})}o&&N5(o,c,"c");function l1(Q,Y){O(Y)?Y.forEach(N1=>Q(N1.bind(e))):Y&&Q(Y.bind(e))}if(l1(lt,z),l1(ot,v),l1(tt,h),l1(mt,g),l1(it,w),l1(ft,B),l1(Ht,d1),l1(ht,e1),l1(vt,f1),l1(zt,d),l1(H7,q),l1(Ct,h1),O(b1))if(b1.length){const Q=c.exposed||(c.exposed={});b1.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>e[Y],set:N1=>e[Y]=N1})})}else c.exposed||(c.exposed={});I&&c.render===F1&&(c.render=I),s2!=null&&(c.inheritAttrs=s2),E1&&(c.components=E1),k2&&(c.directives=k2)}function Lt(c,a,e=F1,s=!1){O(c)&&(c=m6(c));for(const r in c){const i=c[r];let f;i1(i)?"default"in i?f=Y1(i.from||r,i.default,!0):f=Y1(i.from||r):f=Y1(i),v1(f)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>f.value,set:n=>f.value=n}):a[r]=f}}function N5(c,a,e){B1(O(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function V7(c,a,e,s){const r=s.includes(".")?z7(e,s):()=>e[s];if(m1(c)){const i=a[c];U(i)&&Y3(r,i)}else if(U(c))Y3(r,c.bind(e));else if(i1(c))if(O(c))c.forEach(i=>V7(i,a,e,s));else{const i=U(c.handler)?c.handler.bind(e):a[c.handler];U(i)&&Y3(r,i,c)}}function j6(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:f}}=c.appContext,n=i.get(a);let l;return n?l=n:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(t=>i4(l,t,f,!0)),i4(l,a,f)),i1(a)&&i.set(a,l),l}function i4(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&i4(c,i,e,!0),r&&r.forEach(f=>i4(c,f,e,!0));for(const f in a)if(!(s&&f==="expose")){const n=gt[f]||e&&e[f];c[f]=n?n(c[f],a[f]):a[f]}return c}const gt={data:w5,props:M2,emits:M2,methods:M2,computed:M2,beforeCreate:H1,created:H1,beforeMount:H1,mounted:H1,beforeUpdate:H1,updated:H1,beforeDestroy:H1,beforeUnmount:H1,destroyed:H1,unmounted:H1,activated:H1,deactivated:H1,errorCaptured:H1,serverPrefetch:H1,components:M2,directives:M2,watch:bt,provide:w5,inject:xt};function w5(c,a){return a?c?function(){return V1(U(c)?c.call(this,this):c,U(a)?a.call(this,this):a)}:a:c}function xt(c,a){return M2(m6(c),m6(a))}function m6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function H1(c,a){return c?[...new Set([].concat(c,a))]:a}function M2(c,a){return c?V1(V1(Object.create(null),c),a):a}function bt(c,a){if(!c)return a;if(!a)return c;const e=V1(Object.create(null),c);for(const s in a)e[s]=H1(c[s],a[s]);return e}function St(c,a,e,s=!1){const r={},i={};e4(i,p4,1),c.propsDefaults=Object.create(null),M7(c,a,r,i);for(const f in c.propsOptions[0])f in r||(r[f]=void 0);e?c.props=s?r:Do(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function Nt(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:f}}=c,n=j(r),[l]=c.propsOptions;let t=!1;if((s||f>0)&&!(f&16)){if(f&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let v=o[z];if(u4(c.emitsOptions,v))continue;const h=a[v];if(l)if(Z(i,v))h!==i[v]&&(i[v]=h,t=!0);else{const g=G1(v);r[g]=z6(l,n,g,h,c,!1)}else h!==i[v]&&(i[v]=h,t=!0)}}}else{M7(c,a,r,i)&&(t=!0);let o;for(const z in n)(!a||!Z(a,z)&&((o=K2(z))===z||!Z(a,o)))&&(l?e&&(e[z]!==void 0||e[o]!==void 0)&&(r[z]=z6(l,n,z,void 0,c,!0)):delete r[z]);if(i!==n)for(const z in i)(!a||!Z(a,z))&&(delete i[z],t=!0)}t&&X1(c,"set","$attrs")}function M7(c,a,e,s){const[r,i]=c.propsOptions;let f=!1,n;if(a)for(let l in a){if(j3(l))continue;const t=a[l];let o;r&&Z(r,o=G1(l))?!i||!i.includes(o)?e[o]=t:(n||(n={}))[o]=t:u4(c.emitsOptions,l)||(!(l in s)||t!==s[l])&&(s[l]=t,f=!0)}if(i){const l=j(e),t=n||s1;for(let o=0;o<i.length;o++){const z=i[o];e[z]=z6(r,l,z,t[z],c,!Z(t,z))}}return f}function z6(c,a,e,s,r,i){const f=c[e];if(f!=null){const n=Z(f,"default");if(n&&s===void 0){const l=f.default;if(f.type!==Function&&U(l)){const{propsDefaults:t}=r;e in t?s=t[e]:(G2(r),s=t[e]=l.call(null,a),b2())}else s=l}f[0]&&(i&&!n?s=!1:f[1]&&(s===""||s===K2(e))&&(s=!0))}return s}function p7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,f={},n=[];let l=!1;if(!U(c)){const o=z=>{l=!0;const[v,h]=p7(z,a,!0);V1(f,v),h&&n.push(...h)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!l)return i1(c)&&s.set(c,E2),E2;if(O(i))for(let o=0;o<i.length;o++){const z=G1(i[o]);k5(z)&&(f[z]=s1)}else if(i)for(const o in i){const z=G1(o);if(k5(z)){const v=i[o],h=f[z]=O(v)||U(v)?{type:v}:Object.assign({},v);if(h){const g=P5(Boolean,h.type),w=P5(String,h.type);h[0]=g>-1,h[1]=w<0||g<w,(g>-1||Z(h,"default"))&&n.push(z)}}}const t=[f,n];return i1(c)&&s.set(c,t),t}function k5(c){return c[0]!=="$"}function y5(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function A5(c,a){return y5(c)===y5(a)}function P5(c,a){return O(a)?a.findIndex(e=>A5(e,c)):U(a)&&A5(a,c)?0:-1}const d7=c=>c[0]==="_"||c==="$stable",K6=c=>O(c)?c.map(O1):[O1(c)],wt=(c,a,e)=>{if(a._n)return a;const s=Xo((...r)=>K6(a(...r)),e);return s._c=!1,s},L7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(d7(r))continue;const i=c[r];if(U(i))a[r]=wt(r,i,s);else if(i!=null){const f=K6(i);a[r]=()=>f}}},g7=(c,a)=>{const e=K6(a);c.slots.default=()=>e},kt=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),e4(a,"_",e)):L7(a,c.slots={})}else c.slots={},a&&g7(c,a);e4(c.slots,p4,1)},yt=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,f=s1;if(s.shapeFlag&32){const n=a._;n?e&&n===1?i=!1:(V1(r,a),!e&&n===1&&delete r._):(i=!a.$stable,L7(a,r)),f=a}else a&&(g7(c,a),f={default:1});if(i)for(const n in r)!d7(n)&&!(n in f)&&delete r[n]};function x7(){return{app:null,config:{isNativeTag:so,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let At=0;function Pt(c,a){return function(s,r=null){U(s)||(s=Object.assign({},s)),r!=null&&!i1(r)&&(r=null);const i=x7(),f=new Set;let n=!1;const l=i.app={_uid:At++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:am,get config(){return i.config},set config(t){},use(t,...o){return f.has(t)||(t&&U(t.install)?(f.add(t),t.install(l,...o)):U(t)&&(f.add(t),t(l,...o))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,o){return o?(i.components[t]=o,l):i.components[t]},directive(t,o){return o?(i.directives[t]=o,l):i.directives[t]},mount(t,o,z){if(!n){const v=u1(s,r);return v.appContext=i,o&&a?a(v,t):c(v,t,z),n=!0,l._container=t,t.__vue_app__=l,X6(v.component)||v.component.proxy}},unmount(){n&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return i.provides[t]=o,l}};return l}}function C6(c,a,e,s,r=!1){if(O(c)){c.forEach((v,h)=>C6(v,a&&(O(a)?a[h]:a),e,s,r));return}if(X3(s)&&!r)return;const i=s.shapeFlag&4?X6(s.component)||s.component.proxy:s.el,f=r?null:i,{i:n,r:l}=c,t=a&&a.r,o=n.refs===s1?n.refs={}:n.refs,z=n.setupState;if(t!=null&&t!==l&&(m1(t)?(o[t]=null,Z(z,t)&&(z[t]=null)):v1(t)&&(t.value=null)),U(l))t2(l,n,12,[f,o]);else{const v=m1(l),h=v1(l);if(v||h){const g=()=>{if(c.f){const w=v?Z(z,l)?z[l]:o[l]:l.value;r?O(w)&&B6(w,i):O(w)?w.includes(i)||w.push(i):v?(o[l]=[i],Z(z,l)&&(z[l]=o[l])):(l.value=[i],c.k&&(o[c.k]=l.value))}else v?(o[l]=f,Z(z,l)&&(z[l]=f)):h&&(l.value=f,c.k&&(o[c.k]=f))};f?(g.id=-1,p1(g,e)):g()}}}const p1=st;function Tt(c){return Ft(c)}function Ft(c,a){const e=oo();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:f,createText:n,createComment:l,setText:t,setElementText:o,parentNode:z,nextSibling:v,setScopeId:h=F1,insertStaticContent:g}=c,w=(m,C,H,u=null,p=null,b=null,y=!1,x=null,N=!!C.dynamicChildren)=>{if(m===C)return;m&&!a3(m,C)&&(u=k(m),M1(m,p,b,!0),m=null),C.patchFlag===-2&&(N=!1,C.dynamicChildren=null);const{type:L,ref:E,shapeFlag:T}=C;switch(L){case M4:B(m,C,H,u);break;case S2:V(m,C,H,u);break;case Q3:m==null&&d(C,H,u,y);break;case K1:E1(m,C,H,u,p,b,y,x,N);break;default:T&1?I(m,C,H,u,p,b,y,x,N):T&6?k2(m,C,H,u,p,b,y,x,N):(T&64||T&128)&&L.process(m,C,H,u,p,b,y,x,N,W)}E!=null&&p&&C6(E,m&&m.ref,b,C||m,!C)},B=(m,C,H,u)=>{if(m==null)s(C.el=n(C.children),H,u);else{const p=C.el=m.el;C.children!==m.children&&t(p,C.children)}},V=(m,C,H,u)=>{m==null?s(C.el=l(C.children||""),H,u):C.el=m.el},d=(m,C,H,u)=>{[m.el,m.anchor]=g(m.children,C,H,u,m.el,m.anchor)},S=({el:m,anchor:C},H,u)=>{let p;for(;m&&m!==C;)p=v(m),s(m,H,u),m=p;s(C,H,u)},q=({el:m,anchor:C})=>{let H;for(;m&&m!==C;)H=v(m),r(m),m=H;r(C)},I=(m,C,H,u,p,b,y,x,N)=>{y=y||C.type==="svg",m==null?e1(C,H,u,p,b,y,x,N):h1(m,C,p,b,y,x,N)},e1=(m,C,H,u,p,b,y,x)=>{let N,L;const{type:E,props:T,shapeFlag:D,transition:_,dirs:G}=m;if(N=m.el=f(m.type,b,T&&T.is,T),D&8?o(N,m.children):D&16&&d1(m.children,N,null,u,p,b&&E!=="foreignObject",y,x),G&&u2(m,null,u,"created"),T){for(const X in T)X!=="value"&&!j3(X)&&i(N,X,null,T[X],b,m.children,u,p,A);"value"in T&&i(N,"value",null,T.value),(L=T.onVnodeBeforeMount)&&q1(L,u,m)}f1(N,m,m.scopeId,y,u),G&&u2(m,null,u,"beforeMount");const J=(!p||p&&!p.pendingBranch)&&_&&!_.persisted;J&&_.beforeEnter(N),s(N,C,H),((L=T&&T.onVnodeMounted)||J||G)&&p1(()=>{L&&q1(L,u,m),J&&_.enter(N),G&&u2(m,null,u,"mounted")},p)},f1=(m,C,H,u,p)=>{if(H&&h(m,H),u)for(let b=0;b<u.length;b++)h(m,u[b]);if(p){let b=p.subTree;if(C===b){const y=p.vnode;f1(m,y,y.scopeId,y.slotScopeIds,p.parent)}}},d1=(m,C,H,u,p,b,y,x,N=0)=>{for(let L=N;L<m.length;L++){const E=m[L]=x?n2(m[L]):O1(m[L]);w(null,E,C,H,u,p,b,y,x)}},h1=(m,C,H,u,p,b,y)=>{const x=C.el=m.el;let{patchFlag:N,dynamicChildren:L,dirs:E}=C;N|=m.patchFlag&16;const T=m.props||s1,D=C.props||s1;let _;H&&V2(H,!1),(_=D.onVnodeBeforeUpdate)&&q1(_,H,C,m),E&&u2(C,m,H,"beforeUpdate"),H&&V2(H,!0);const G=p&&C.type!=="foreignObject";if(L?b1(m.dynamicChildren,L,x,H,u,G,b):y||Y(m,C,x,null,H,u,G,b,!1),N>0){if(N&16)s2(x,C,T,D,H,u,p);else if(N&2&&T.class!==D.class&&i(x,"class",null,D.class,p),N&4&&i(x,"style",T.style,D.style,p),N&8){const J=C.dynamicProps;for(let X=0;X<J.length;X++){const o1=J[X],k1=T[o1],A2=D[o1];(A2!==k1||o1==="value")&&i(x,o1,k1,A2,p,m.children,H,u,A)}}N&1&&m.children!==C.children&&o(x,C.children)}else!y&&L==null&&s2(x,C,T,D,H,u,p);((_=D.onVnodeUpdated)||E)&&p1(()=>{_&&q1(_,H,C,m),E&&u2(C,m,H,"updated")},u)},b1=(m,C,H,u,p,b,y)=>{for(let x=0;x<C.length;x++){const N=m[x],L=C[x],E=N.el&&(N.type===K1||!a3(N,L)||N.shapeFlag&70)?z(N.el):H;w(N,L,E,null,u,p,b,y,!0)}},s2=(m,C,H,u,p,b,y)=>{if(H!==u){if(H!==s1)for(const x in H)!j3(x)&&!(x in u)&&i(m,x,H[x],null,y,C.children,p,b,A);for(const x in u){if(j3(x))continue;const N=u[x],L=H[x];N!==L&&x!=="value"&&i(m,x,L,N,y,C.children,p,b,A)}"value"in u&&i(m,"value",H.value,u.value)}},E1=(m,C,H,u,p,b,y,x,N)=>{const L=C.el=m?m.el:n(""),E=C.anchor=m?m.anchor:n("");let{patchFlag:T,dynamicChildren:D,slotScopeIds:_}=C;_&&(x=x?x.concat(_):_),m==null?(s(L,H,u),s(E,H,u),d1(C.children,H,E,p,b,y,x,N)):T>0&&T&64&&D&&m.dynamicChildren?(b1(m.dynamicChildren,D,H,p,b,y,x),(C.key!=null||p&&C===p.subTree)&&b7(m,C,!0)):Y(m,C,H,E,p,b,y,x,N)},k2=(m,C,H,u,p,b,y,x,N)=>{C.slotScopeIds=x,m==null?C.shapeFlag&512?p.ctx.activate(C,H,u,y,N):h2(C,H,u,p,b,y,N):J2(m,C,N)},h2=(m,C,H,u,p,b,y)=>{const x=m.component=Wt(m,u,p);if(v7(m)&&(x.ctx.renderer=W),Zt(x),x.asyncDep){if(p&&p.registerDep(x,l1),!m.el){const N=x.subTree=u1(S2);V(null,N,C,H)}return}l1(x,m,C,H,p,b,y)},J2=(m,C,H)=>{const u=C.component=m.component;if(ct(m,C,H))if(u.asyncDep&&!u.asyncResolved){Q(u,C,H);return}else u.next=C,Zo(u.update),u.update();else C.el=m.el,u.vnode=C},l1=(m,C,H,u,p,b,y)=>{const x=()=>{if(m.isMounted){let{next:E,bu:T,u:D,parent:_,vnode:G}=m,J=E,X;V2(m,!1),E?(E.el=G.el,Q(m,E,y)):E=G,T&&G4(T),(X=E.props&&E.props.onVnodeBeforeUpdate)&&q1(X,_,E,G),V2(m,!0);const o1=W4(m),k1=m.subTree;m.subTree=o1,w(k1,o1,z(k1.el),k(k1),m,p,b),E.el=o1.el,J===null&&at(m,o1.el),D&&p1(D,p),(X=E.props&&E.props.onVnodeUpdated)&&p1(()=>q1(X,_,E,G),p)}else{let E;const{el:T,props:D}=C,{bm:_,m:G,parent:J}=m,X=X3(C);if(V2(m,!1),_&&G4(_),!X&&(E=D&&D.onVnodeBeforeMount)&&q1(E,J,C),V2(m,!0),T&&$){const o1=()=>{m.subTree=W4(m),$(T,m.subTree,m,p,null)};X?C.type.__asyncLoader().then(()=>!m.isUnmounted&&o1()):o1()}else{const o1=m.subTree=W4(m);w(null,o1,H,u,m,p,b),C.el=o1.el}if(G&&p1(G,p),!X&&(E=D&&D.onVnodeMounted)){const o1=C;p1(()=>q1(E,J,o1),p)}(C.shapeFlag&256||J&&X3(J.vnode)&&J.vnode.shapeFlag&256)&&m.a&&p1(m.a,p),m.isMounted=!0,C=H=u=null}},N=m.effect=new q6(x,()=>Z6(L),m.scope),L=m.update=()=>N.run();L.id=m.uid,V2(m,!0),L()},Q=(m,C,H)=>{C.component=m;const u=m.vnode.props;m.vnode=C,m.next=null,Nt(m,C.props,u,H),yt(m,C.children,H),Y2(),x5(),X2()},Y=(m,C,H,u,p,b,y,x,N=!1)=>{const L=m&&m.children,E=m?m.shapeFlag:0,T=C.children,{patchFlag:D,shapeFlag:_}=C;if(D>0){if(D&128){H2(L,T,H,u,p,b,y,x,N);return}else if(D&256){N1(L,T,H,u,p,b,y,x,N);return}}_&8?(E&16&&A(L,p,b),T!==L&&o(H,T)):E&16?_&16?H2(L,T,H,u,p,b,y,x,N):A(L,p,b,!0):(E&8&&o(H,""),_&16&&d1(T,H,u,p,b,y,x,N))},N1=(m,C,H,u,p,b,y,x,N)=>{m=m||E2,C=C||E2;const L=m.length,E=C.length,T=Math.min(L,E);let D;for(D=0;D<T;D++){const _=C[D]=N?n2(C[D]):O1(C[D]);w(m[D],_,H,null,p,b,y,x,N)}L>E?A(m,p,b,!0,!1,T):d1(C,H,u,p,b,y,x,N,T)},H2=(m,C,H,u,p,b,y,x,N)=>{let L=0;const E=C.length;let T=m.length-1,D=E-1;for(;L<=T&&L<=D;){const _=m[L],G=C[L]=N?n2(C[L]):O1(C[L]);if(a3(_,G))w(_,G,H,null,p,b,y,x,N);else break;L++}for(;L<=T&&L<=D;){const _=m[T],G=C[D]=N?n2(C[D]):O1(C[D]);if(a3(_,G))w(_,G,H,null,p,b,y,x,N);else break;T--,D--}if(L>T){if(L<=D){const _=D+1,G=_<E?C[_].el:u;for(;L<=D;)w(null,C[L]=N?n2(C[L]):O1(C[L]),H,G,p,b,y,x,N),L++}}else if(L>D)for(;L<=T;)M1(m[L],p,b,!0),L++;else{const _=L,G=L,J=new Map;for(L=G;L<=D;L++){const L1=C[L]=N?n2(C[L]):O1(C[L]);L1.key!=null&&J.set(L1.key,L)}let X,o1=0;const k1=D-G+1;let A2=!1,C5=0;const c3=new Array(k1);for(L=0;L<k1;L++)c3[L]=0;for(L=_;L<=T;L++){const L1=m[L];if(o1>=k1){M1(L1,p,b,!0);continue}let D1;if(L1.key!=null)D1=J.get(L1.key);else for(X=G;X<=D;X++)if(c3[X-G]===0&&a3(L1,C[X])){D1=X;break}D1===void 0?M1(L1,p,b,!0):(c3[D1-G]=L+1,D1>=C5?C5=D1:A2=!0,w(L1,C[D1],H,null,p,b,y,x,N),o1++)}const v5=A2?Bt(c3):E2;for(X=v5.length-1,L=k1-1;L>=0;L--){const L1=G+L,D1=C[L1],h5=L1+1<E?C[L1+1].el:u;c3[L]===0?w(null,D1,H,h5,p,b,y,x,N):A2&&(X<0||L!==v5[X]?w1(D1,H,h5,2):X--)}}},w1=(m,C,H,u,p=null)=>{const{el:b,type:y,transition:x,children:N,shapeFlag:L}=m;if(L&6){w1(m.component.subTree,C,H,u);return}if(L&128){m.suspense.move(C,H,u);return}if(L&64){y.move(m,C,H,W);return}if(y===K1){s(b,C,H);for(let T=0;T<N.length;T++)w1(N[T],C,H,u);s(m.anchor,C,H);return}if(y===Q3){S(m,C,H);return}if(u!==2&&L&1&&x)if(u===0)x.beforeEnter(b),s(b,C,H),p1(()=>x.enter(b),p);else{const{leave:T,delayLeave:D,afterLeave:_}=x,G=()=>s(b,C,H),J=()=>{T(b,()=>{G(),_&&_()})};D?D(b,G,J):J()}else s(b,C,H)},M1=(m,C,H,u=!1,p=!1)=>{const{type:b,props:y,ref:x,children:N,dynamicChildren:L,shapeFlag:E,patchFlag:T,dirs:D}=m;if(x!=null&&C6(x,null,H,m,!0),E&256){C.ctx.deactivate(m);return}const _=E&1&&D,G=!X3(m);let J;if(G&&(J=y&&y.onVnodeBeforeUnmount)&&q1(J,C,m),E&6)M(m.component,H,u);else{if(E&128){m.suspense.unmount(H,u);return}_&&u2(m,null,C,"beforeUnmount"),E&64?m.type.remove(m,C,H,p,W,u):L&&(b!==K1||T>0&&T&64)?A(L,C,H,!1,!0):(b===K1&&T&384||!p&&E&16)&&A(N,C,H),u&&y2(m)}(G&&(J=y&&y.onVnodeUnmounted)||_)&&p1(()=>{J&&q1(J,C,m),_&&u2(m,null,C,"unmounted")},H)},y2=m=>{const{type:C,el:H,anchor:u,transition:p}=m;if(C===K1){P3(H,u);return}if(C===Q3){q(m);return}const b=()=>{r(H),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:y,delayLeave:x}=p,N=()=>y(H,b);x?x(m.el,b,N):N()}else b()},P3=(m,C)=>{let H;for(;m!==C;)H=v(m),r(m),m=H;r(C)},M=(m,C,H)=>{const{bum:u,scope:p,update:b,subTree:y,um:x}=m;u&&G4(u),p.stop(),b&&(b.active=!1,M1(y,m,C,H)),x&&p1(x,C),p1(()=>{m.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},A=(m,C,H,u=!1,p=!1,b=0)=>{for(let y=b;y<m.length;y++)M1(m[y],C,H,u,p)},k=m=>m.shapeFlag&6?k(m.component.subTree):m.shapeFlag&128?m.suspense.next():v(m.anchor||m.el),R=(m,C,H)=>{m==null?C._vnode&&M1(C._vnode,null,null,!0):w(C._vnode||null,m,C,null,null,null,H),x5(),n7(),C._vnode=m},W={p:w,um:M1,m:w1,r:y2,mt:h2,mc:d1,pc:Y,pbc:b1,n:k,o:c};let r1,$;return a&&([r1,$]=a(W)),{render:R,hydrate:r1,createApp:Pt(R,r1)}}function V2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function b7(c,a,e=!1){const s=c.children,r=a.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const f=s[i];let n=r[i];n.shapeFlag&1&&!n.dynamicChildren&&((n.patchFlag<=0||n.patchFlag===32)&&(n=r[i]=n2(r[i]),n.el=f.el),e||b7(f,n)),n.type===M4&&(n.el=f.el)}}function Bt(c){const a=c.slice(),e=[0];let s,r,i,f,n;const l=c.length;for(s=0;s<l;s++){const t=c[s];if(t!==0){if(r=e[e.length-1],c[r]<t){a[s]=r,e.push(s);continue}for(i=0,f=e.length-1;i<f;)n=i+f>>1,c[e[n]]<t?i=n+1:f=n;t<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,f=e[i-1];i-- >0;)e[i]=f,f=a[f];return e}const Rt=c=>c.__isTeleport,K1=Symbol(void 0),M4=Symbol(void 0),S2=Symbol(void 0),Q3=Symbol(void 0),f3=[];let P1=null;function S7(c=!1){f3.push(P1=c?null:[])}function Et(){f3.pop(),P1=f3[f3.length-1]||null}let h3=1;function T5(c){h3+=c}function N7(c){return c.dynamicChildren=h3>0?P1||E2:null,Et(),h3>0&&P1&&P1.push(c),c}function Dt(c,a,e,s,r,i){return N7(k7(c,a,e,s,r,i,!0))}function qt(c,a,e,s,r){return N7(u1(c,a,e,s,r,!0))}function v6(c){return c?c.__v_isVNode===!0:!1}function a3(c,a){return c.type===a.type&&c.key===a.key}const p4="__vInternal",w7=({key:c})=>c??null,J3=({ref:c,ref_key:a,ref_for:e})=>c!=null?m1(c)||v1(c)||U(c)?{i:A1,r:c,k:a,f:!!e}:c:null;function k7(c,a=null,e=null,s=0,r=null,i=c===K1?0:1,f=!1,n=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&w7(a),ref:a&&J3(a),scopeId:t7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:A1};return n?(Y6(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=m1(e)?8:16),h3>0&&!f&&P1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&P1.push(l),l}const u1=_t;function _t(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===Vt)&&(c=S2),v6(c)){const n=I2(c,a,!0);return e&&Y6(n,e),h3>0&&!i&&P1&&(n.shapeFlag&6?P1[P1.indexOf(c)]=n:P1.push(n)),n.patchFlag|=-2,n}if(Qt(c)&&(c=c.__vccOpts),a){a=Ot(a);let{class:n,style:l}=a;n&&!m1(n)&&(a.class=T6(n)),i1(l)&&(Q0(l)&&!O(l)&&(l=V1({},l)),a.style=P6(l))}const f=m1(c)?1:et(c)?128:Rt(c)?64:i1(c)?4:U(c)?2:0;return k7(c,a,e,s,r,f,i,!0)}function Ot(c){return c?Q0(c)||p4 in c?V1({},c):c:null}function I2(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:f}=c,n=a?$t(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:n,key:n&&w7(n),ref:a&&a.ref?e&&r?O(r)?r.concat(J3(a)):[r,J3(a)]:J3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:f,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==K1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&I2(c.ssContent),ssFallback:c.ssFallback&&I2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx}}function Ut(c=" ",a=0){return u1(M4,null,c,a)}function UJ(c,a){const e=u1(Q3,null,c);return e.staticCount=a,e}function $J(c="",a=!1){return a?(S7(),qt(S2,null,c)):u1(S2,null,c)}function O1(c){return c==null||typeof c=="boolean"?u1(S2):O(c)?u1(K1,null,c.slice()):typeof c=="object"?n2(c):u1(M4,null,String(c))}function n2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:I2(c)}function Y6(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(O(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),Y6(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(p4 in a)?a._ctx=A1:r===3&&A1&&(A1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else U(a)?(a={default:a,_ctx:A1},e=32):(a=String(a),s&64?(e=16,a=[Ut(a)]):e=8);c.children=a,c.shapeFlag|=e}function $t(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=T6([a.class,s.class]));else if(r==="style")a.style=P6([a.style,s.style]);else if(m4(r)){const i=a[r],f=s[r];f&&i!==f&&!(O(i)&&i.includes(f))&&(a[r]=i?[].concat(i,f):f)}else r!==""&&(a[r]=s[r])}return a}function q1(c,a,e,s=null){B1(c,a,7,[e,s])}const It=x7();let Gt=0;function Wt(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||It,i={uid:Gt++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new to(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:p7(s,r),emitsOptions:o7(s,r),emit:null,emitted:null,propsDefaults:s1,inheritAttrs:s.inheritAttrs,ctx:s1,data:s1,props:s1,attrs:s1,slots:s1,refs:s1,setupState:s1,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Yo.bind(null,i),c.ce&&c.ce(i),i}let z1=null;const G2=c=>{z1=c,c.scope.on()},b2=()=>{z1&&z1.scope.off(),z1=null};function y7(c){return c.vnode.shapeFlag&4}let H3=!1;function Zt(c,a=!1){H3=a;const{props:e,children:s}=c.vnode,r=y7(c);St(c,e,r,a),kt(c,s);const i=r?jt(c,a):void 0;return H3=!1,i}function jt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=J0(new Proxy(c.ctx,pt));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Yt(c):null;G2(c),Y2();const i=t2(s,c,0,[c.props,r]);if(X2(),b2(),E0(i)){if(i.then(b2,b2),a)return i.then(f=>{F5(c,f,a)}).catch(f=>{H4(f,c,0)});c.asyncDep=i}else F5(c,i,a)}else A7(c,a)}function F5(c,a,e){U(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:i1(a)&&(c.setupState=s7(a)),A7(c,e)}let B5;function A7(c,a,e){const s=c.type;if(!c.render){if(!a&&B5&&!s.render){const r=s.template||j6(c).template;if(r){const{isCustomElement:i,compilerOptions:f}=c.appContext.config,{delimiters:n,compilerOptions:l}=s,t=V1(V1({isCustomElement:i,delimiters:n},f),l);s.render=B5(r,t)}}c.render=s.render||F1}G2(c),Y2(),dt(c),X2(),b2()}function Kt(c){return new Proxy(c.attrs,{get(a,e){return g1(c,"get","$attrs"),a[e]}})}function Yt(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=Kt(c))},slots:c.slots,emit:c.emit,expose:a}}function X6(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(s7(J0(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in i3)return i3[e](c)},has(a,e){return e in a||e in i3}}))}function Xt(c,a=!0){return U(c)?c.displayName||c.name:c.name||a&&c.__name}function Qt(c){return U(c)&&"__vccOpts"in c}const S1=(c,a)=>Io(c,a,H3);function P7(c,a,e){const s=arguments.length;return s===2?i1(a)&&!O(a)?v6(a)?u1(c,null,[a]):u1(c,a):u1(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&v6(e)&&(e=[e]),u1(c,a,e))}const Jt=Symbol(""),cm=()=>Y1(Jt),am="3.2.45",em="http://www.w3.org/2000/svg",d2=typeof document<"u"?document:null,R5=d2&&d2.createElement("template"),sm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?d2.createElementNS(em,c):d2.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>d2.createTextNode(c),createComment:c=>d2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>d2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const f=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{R5.innerHTML=s?`<svg>${c}</svg>`:c;const n=R5.content;if(s){const l=n.firstChild;for(;l.firstChild;)n.appendChild(l.firstChild);n.removeChild(l)}a.insertBefore(n,e)}return[f?f.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function rm(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function im(c,a,e){const s=c.style,r=m1(e);if(e&&!r){for(const i in e)h6(s,i,e[i]);if(a&&!m1(a))for(const i in a)e[i]==null&&h6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const E5=/\s*!important$/;function h6(c,a,e){if(O(e))e.forEach(s=>h6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=fm(c,a);E5.test(e)?c.setProperty(K2(s),e.replace(E5,""),"important"):c[s]=e}}const D5=["Webkit","Moz","ms"],j4={};function fm(c,a){const e=j4[a];if(e)return e;let s=G1(a);if(s!=="filter"&&s in c)return j4[a]=s;s=v4(s);for(let r=0;r<D5.length;r++){const i=D5[r]+s;if(i in c)return j4[a]=i}return a}const q5="http://www.w3.org/1999/xlink";function nm(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(q5,a.slice(6,a.length)):c.setAttributeNS(q5,a,e);else{const i=eo(a);e==null||i&&!F0(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function lm(c,a,e,s,r,i,f){if(a==="innerHTML"||a==="textContent"){s&&f(s,r,i),c[a]=e??"";return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e??"";(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let n=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=F0(e):e==null&&l==="string"?(e="",n=!0):l==="number"&&(e=0,n=!0)}try{c[a]=e}catch{}n&&c.removeAttribute(a)}function om(c,a,e,s){c.addEventListener(a,e,s)}function tm(c,a,e,s){c.removeEventListener(a,e,s)}function mm(c,a,e,s,r=null){const i=c._vei||(c._vei={}),f=i[a];if(s&&f)f.value=s;else{const[n,l]=zm(a);if(s){const t=i[a]=hm(s,r);om(c,n,t,l)}else f&&(tm(c,n,f,l),i[a]=void 0)}}const _5=/(?:Once|Passive|Capture)$/;function zm(c){let a;if(_5.test(c)){a={};let s;for(;s=c.match(_5);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):K2(c.slice(2)),a]}let K4=0;const Cm=Promise.resolve(),vm=()=>K4||(Cm.then(()=>K4=0),K4=Date.now());function hm(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;B1(Hm(s,e.value),a,5,[s])};return e.value=c,e.attached=vm(),e}function Hm(c,a){if(O(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const O5=/^on[a-z]/,um=(c,a,e,s,r=!1,i,f,n,l)=>{a==="class"?rm(c,s,r):a==="style"?im(c,e,s):m4(a)?F6(a)||mm(c,a,e,s,f):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Vm(c,a,s,r))?lm(c,a,s,i,f,n,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),nm(c,a,s,r))};function Vm(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&O5.test(a)&&U(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||O5.test(a)&&m1(e)?!1:a in c}const Mm=V1({patchProp:um},sm);let U5;function pm(){return U5||(U5=Tt(Mm))}const dm=(...c)=>{const a=pm().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=Lm(s);if(!r)return;const i=a._component;!U(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const f=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),f},a};function Lm(c){return m1(c)?document.querySelector(c):c}const gm=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},xm={};function bm(c,a){const e=ut("router-view");return S7(),Dt("div",null,[u1(e)])}const Sm=gm(xm,[["render",bm]]),Nm="modulepreload",wm=function(c){return"/"+c},$5={},I5=function(a,e,s){if(!e||e.length===0)return a();const r=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=wm(i),i in $5)return;$5[i]=!0;const f=i.endsWith(".css"),n=f?'[rel="stylesheet"]':"";if(!!s)for(let o=r.length-1;o>=0;o--){const z=r[o];if(z.href===i&&(!f||z.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${n}`))return;const t=document.createElement("link");if(t.rel=f?"stylesheet":Nm,f||(t.as="script",t.crossOrigin=""),t.href=i,document.head.appendChild(t),f)return new Promise((o,z)=>{t.addEventListener("load",o),t.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>a())};const T2=typeof window<"u";function km(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const K=Object.assign;function Y4(c,a){const e={};for(const s in a){const r=a[s];e[s]=R1(r)?r.map(c):c(r)}return e}const n3=()=>{},R1=Array.isArray,ym=/\/$/,Am=c=>c.replace(ym,"");function X4(c,a,e="/"){let s,r={},i="",f="";const n=a.indexOf("#");let l=a.indexOf("?");return n<l&&n>=0&&(l=-1),l>-1&&(s=a.slice(0,l),i=a.slice(l+1,n>-1?n:a.length),r=c(i)),n>-1&&(s=s||a.slice(0,n),f=a.slice(n,a.length)),s=Bm(s??a,e),{fullPath:s+(i&&"?")+i+f,path:s,query:r,hash:f}}function Pm(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function G5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Tm(c,a,e){const s=a.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&W2(a.matched[s],e.matched[r])&&T7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function W2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function T7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Fm(c[e],a[e]))return!1;return!0}function Fm(c,a){return R1(c)?W5(c,a):R1(a)?W5(a,c):c===a}function W5(c,a){return R1(a)?c.length===a.length&&c.every((e,s)=>e===a[s]):c.length===1&&c[0]===a}function Bm(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),s=c.split("/");let r=e.length-1,i,f;for(i=0;i<s.length;i++)if(f=s[i],f!==".")if(f==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var u3;(function(c){c.pop="pop",c.push="push"})(u3||(u3={}));var l3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(l3||(l3={}));function Rm(c){if(!c)if(T2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Am(c)}const Em=/^[^#]+#/;function Dm(c,a){return c.replace(Em,"#")+a}function qm(c,a){const e=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:a.behavior,left:s.left-e.left-(a.left||0),top:s.top-e.top-(a.top||0)}}const d4=()=>({left:window.pageXOffset,top:window.pageYOffset});function _m(c){let a;if("el"in c){const e=c.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;a=qm(r,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Z5(c,a){return(history.state?history.state.position-a:-1)+c}const H6=new Map;function Om(c,a){H6.set(c,a)}function Um(c){const a=H6.get(c);return H6.delete(c),a}let $m=()=>location.protocol+"//"+location.host;function F7(c,a){const{pathname:e,search:s,hash:r}=a,i=c.indexOf("#");if(i>-1){let n=r.includes(c.slice(i))?c.slice(i).length:1,l=r.slice(n);return l[0]!=="/"&&(l="/"+l),G5(l,"")}return G5(e,c)+s+r}function Im(c,a,e,s){let r=[],i=[],f=null;const n=({state:v})=>{const h=F7(c,location),g=e.value,w=a.value;let B=0;if(v){if(e.value=h,a.value=v,f&&f===g){f=null;return}B=w?v.position-w.position:0}else s(h);r.forEach(V=>{V(e.value,g,{delta:B,type:u3.pop,direction:B?B>0?l3.forward:l3.back:l3.unknown})})};function l(){f=e.value}function t(v){r.push(v);const h=()=>{const g=r.indexOf(v);g>-1&&r.splice(g,1)};return i.push(h),h}function o(){const{history:v}=window;v.state&&v.replaceState(K({},v.state,{scroll:d4()}),"")}function z(){for(const v of i)v();i=[],window.removeEventListener("popstate",n),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",n),window.addEventListener("beforeunload",o),{pauseListeners:l,listen:t,destroy:z}}function j5(c,a,e,s=!1,r=!1){return{back:c,current:a,forward:e,replaced:s,position:window.history.length,scroll:r?d4():null}}function Gm(c){const{history:a,location:e}=window,s={value:F7(c,e)},r={value:a.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(l,t,o){const z=c.indexOf("#"),v=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+l:$m()+c+l;try{a[o?"replaceState":"pushState"](t,"",v),r.value=t}catch(h){console.error(h),e[o?"replace":"assign"](v)}}function f(l,t){const o=K({},a.state,j5(r.value.back,l,r.value.forward,!0),t,{position:r.value.position});i(l,o,!0),s.value=l}function n(l,t){const o=K({},r.value,a.state,{forward:l,scroll:d4()});i(o.current,o,!0);const z=K({},j5(s.value,l,null),{position:o.position+1},t);i(l,z,!1),s.value=l}return{location:s,state:r,push:n,replace:f}}function Wm(c){c=Rm(c);const a=Gm(c),e=Im(c,a.state,a.location,a.replace);function s(i,f=!0){f||e.pauseListeners(),history.go(i)}const r=K({location:"",base:c,go:s,createHref:Dm.bind(null,c)},a,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Zm(c){return typeof c=="string"||c&&typeof c=="object"}function B7(c){return typeof c=="string"||typeof c=="symbol"}const i2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},R7=Symbol("");var K5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(K5||(K5={}));function Z2(c,a){return K(new Error,{type:c,[R7]:!0},a)}function W1(c,a){return c instanceof Error&&R7 in c&&(a==null||!!(c.type&a))}const Y5="[^/]+?",jm={sensitive:!1,strict:!1,start:!0,end:!0},Km=/[.+*?^${}()[\]/\\]/g;function Ym(c,a){const e=K({},jm,a),s=[];let r=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(r+="/");for(let z=0;z<t.length;z++){const v=t[z];let h=40+(e.sensitive?.25:0);if(v.type===0)z||(r+="/"),r+=v.value.replace(Km,"\\$&"),h+=40;else if(v.type===1){const{value:g,repeatable:w,optional:B,regexp:V}=v;i.push({name:g,repeatable:w,optional:B});const d=V||Y5;if(d!==Y5){h+=10;try{new RegExp(`(${d})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${g}" (${d}): `+q.message)}}let S=w?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(S=B&&t.length<2?`(?:/${S})`:"/"+S),B&&(S+="?"),r+=S,h+=20,B&&(h+=-8),w&&(h+=-20),d===".*"&&(h+=-50)}o.push(h)}s.push(o)}if(e.strict&&e.end){const t=s.length-1;s[t][s[t].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const f=new RegExp(r,e.sensitive?"":"i");function n(t){const o=t.match(f),z={};if(!o)return null;for(let v=1;v<o.length;v++){const h=o[v]||"",g=i[v-1];z[g.name]=h&&g.repeatable?h.split("/"):h}return z}function l(t){let o="",z=!1;for(const v of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const h of v)if(h.type===0)o+=h.value;else if(h.type===1){const{value:g,repeatable:w,optional:B}=h,V=g in t?t[g]:"";if(R1(V)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const d=R1(V)?V.join("/"):V;if(!d)if(B)v.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${g}"`);o+=d}}return o||"/"}return{re:f,score:s,keys:i,parse:n,stringify:l}}function Xm(c,a){let e=0;for(;e<c.length&&e<a.length;){const s=a[e]-c[e];if(s)return s;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Qm(c,a){let e=0;const s=c.score,r=a.score;for(;e<s.length&&e<r.length;){const i=Xm(s[e],r[e]);if(i)return i;e++}if(Math.abs(r.length-s.length)===1){if(X5(s))return 1;if(X5(r))return-1}return r.length-s.length}function X5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Jm={type:0,value:""},cz=/[a-zA-Z0-9_]/;function az(c){if(!c)return[[]];if(c==="/")return[[Jm]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(h){throw new Error(`ERR (${e})/"${t}": ${h}`)}let e=0,s=e;const r=[];let i;function f(){i&&r.push(i),i=[]}let n=0,l,t="",o="";function z(){t&&(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function v(){t+=l}for(;n<c.length;){if(l=c[n++],l==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:l==="/"?(t&&z(),f()):l===":"?(z(),e=1):v();break;case 4:v(),e=s;break;case 1:l==="("?e=2:cz.test(l)?v():(z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&n--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&n--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),f(),r}function ez(c,a,e){const s=Ym(az(c.path),e),r=K(s,{record:c,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function sz(c,a){const e=[],s=new Map;a=c0({strict:!1,end:!0,sensitive:!1},a);function r(o){return s.get(o)}function i(o,z,v){const h=!v,g=rz(o);g.aliasOf=v&&v.record;const w=c0(a,o),B=[g];if("alias"in o){const S=typeof o.alias=="string"?[o.alias]:o.alias;for(const q of S)B.push(K({},g,{components:v?v.record.components:g.components,path:q,aliasOf:v?v.record:g}))}let V,d;for(const S of B){const{path:q}=S;if(z&&q[0]!=="/"){const I=z.record.path,e1=I[I.length-1]==="/"?"":"/";S.path=z.record.path+(q&&e1+q)}if(V=ez(S,z,w),v?v.alias.push(V):(d=d||V,d!==V&&d.alias.push(V),h&&o.name&&!J5(V)&&f(o.name)),g.children){const I=g.children;for(let e1=0;e1<I.length;e1++)i(I[e1],V,v&&v.children[e1])}v=v||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&l(V)}return d?()=>{f(d)}:n3}function f(o){if(B7(o)){const z=s.get(o);z&&(s.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(f),z.alias.forEach(f))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&s.delete(o.record.name),o.children.forEach(f),o.alias.forEach(f))}}function n(){return e}function l(o){let z=0;for(;z<e.length&&Qm(o,e[z])>=0&&(o.record.path!==e[z].record.path||!E7(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!J5(o)&&s.set(o.record.name,o)}function t(o,z){let v,h={},g,w;if("name"in o&&o.name){if(v=s.get(o.name),!v)throw Z2(1,{location:o});w=v.record.name,h=K(Q5(z.params,v.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&Q5(o.params,v.keys.map(d=>d.name))),g=v.stringify(h)}else if("path"in o)g=o.path,v=e.find(d=>d.re.test(g)),v&&(h=v.parse(g),w=v.record.name);else{if(v=z.name?s.get(z.name):e.find(d=>d.re.test(z.path)),!v)throw Z2(1,{location:o,currentLocation:z});w=v.record.name,h=K({},z.params,o.params),g=v.stringify(h)}const B=[];let V=v;for(;V;)B.unshift(V.record),V=V.parent;return{name:w,path:g,params:h,matched:B,meta:fz(B)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:f,getRoutes:n,getRecordMatcher:r}}function Q5(c,a){const e={};for(const s of a)s in c&&(e[s]=c[s]);return e}function rz(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:iz(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function iz(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const s in c.components)a[s]=typeof e=="boolean"?e:e[s];return a}function J5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function fz(c){return c.reduce((a,e)=>K(a,e.meta),{})}function c0(c,a){const e={};for(const s in c)e[s]=s in a?a[s]:c[s];return e}function E7(c,a){return a.children.some(e=>e===c||E7(c,e))}const D7=/#/g,nz=/&/g,lz=/\//g,oz=/=/g,tz=/\?/g,q7=/\+/g,mz=/%5B/g,zz=/%5D/g,_7=/%5E/g,Cz=/%60/g,O7=/%7B/g,vz=/%7C/g,U7=/%7D/g,hz=/%20/g;function Q6(c){return encodeURI(""+c).replace(vz,"|").replace(mz,"[").replace(zz,"]")}function Hz(c){return Q6(c).replace(O7,"{").replace(U7,"}").replace(_7,"^")}function u6(c){return Q6(c).replace(q7,"%2B").replace(hz,"+").replace(D7,"%23").replace(nz,"%26").replace(Cz,"`").replace(O7,"{").replace(U7,"}").replace(_7,"^")}function uz(c){return u6(c).replace(oz,"%3D")}function Vz(c){return Q6(c).replace(D7,"%23").replace(tz,"%3F")}function Mz(c){return c==null?"":Vz(c).replace(lz,"%2F")}function f4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function pz(c){const a={};if(c===""||c==="?")return a;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(q7," "),f=i.indexOf("="),n=f4(f<0?i:i.slice(0,f)),l=f<0?null:f4(i.slice(f+1));if(n in a){let t=a[n];R1(t)||(t=a[n]=[t]),t.push(l)}else a[n]=l}return a}function a0(c){let a="";for(let e in c){const s=c[e];if(e=uz(e),s==null){s!==void 0&&(a+=(a.length?"&":"")+e);continue}(R1(s)?s.map(i=>i&&u6(i)):[s&&u6(s)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function dz(c){const a={};for(const e in c){const s=c[e];s!==void 0&&(a[e]=R1(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}const Lz=Symbol(""),e0=Symbol(""),J6=Symbol(""),$7=Symbol(""),V6=Symbol("");function e3(){let c=[];function a(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function l2(c,a,e,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((f,n)=>{const l=z=>{z===!1?n(Z2(4,{from:e,to:a})):z instanceof Error?n(z):Zm(z)?n(Z2(2,{from:a,to:z})):(i&&s.enterCallbacks[r]===i&&typeof z=="function"&&i.push(z),f())},t=c.call(s&&s.instances[r],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(z=>n(z))})}function Q4(c,a,e,s){const r=[];for(const i of c)for(const f in i.components){let n=i.components[f];if(!(a!=="beforeRouteEnter"&&!i.instances[f]))if(gz(n)){const t=(n.__vccOpts||n)[a];t&&r.push(l2(t,e,s,i,f))}else{let l=n();r.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${i.path}"`));const o=km(t)?t.default:t;i.components[f]=o;const v=(o.__vccOpts||o)[a];return v&&l2(v,e,s,i,f)()}))}}return r}function gz(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function s0(c){const a=Y1(J6),e=Y1($7),s=S1(()=>a.resolve(_2(c.to))),r=S1(()=>{const{matched:l}=s.value,{length:t}=l,o=l[t-1],z=e.matched;if(!o||!z.length)return-1;const v=z.findIndex(W2.bind(null,o));if(v>-1)return v;const h=r0(l[t-2]);return t>1&&r0(o)===h&&z[z.length-1].path!==h?z.findIndex(W2.bind(null,l[t-2])):v}),i=S1(()=>r.value>-1&&Nz(e.params,s.value.params)),f=S1(()=>r.value>-1&&r.value===e.matched.length-1&&T7(e.params,s.value.params));function n(l={}){return Sz(l)?a[_2(c.replace)?"replace":"push"](_2(c.to)).catch(n3):Promise.resolve()}return{route:s,href:S1(()=>s.value.href),isActive:i,isExactActive:f,navigate:n}}const xz=C7({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:s0,setup(c,{slots:a}){const e=g3(s0(c)),{options:s}=Y1(J6),r=S1(()=>({[i0(c.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[i0(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:P7("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},i)}}}),bz=xz;function Sz(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Nz(c,a){for(const e in a){const s=a[e],r=c[e];if(typeof s=="string"){if(s!==r)return!1}else if(!R1(r)||r.length!==s.length||s.some((i,f)=>i!==r[f]))return!1}return!0}function r0(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const i0=(c,a,e)=>c??a??e,wz=C7({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const s=Y1(V6),r=S1(()=>c.route||s.value),i=Y1(e0,0),f=S1(()=>{let t=_2(i);const{matched:o}=r.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),n=S1(()=>r.value.matched[f.value]);K3(e0,S1(()=>f.value+1)),K3(Lz,n),K3(V6,r);const l=qo();return Y3(()=>[l.value,n.value,c.name],([t,o,z],[v,h,g])=>{o&&(o.instances[z]=t,h&&h!==o&&t&&t===v&&(o.leaveGuards.size||(o.leaveGuards=h.leaveGuards),o.updateGuards.size||(o.updateGuards=h.updateGuards))),t&&o&&(!h||!W2(o,h)||!v)&&(o.enterCallbacks[z]||[]).forEach(w=>w(t))},{flush:"post"}),()=>{const t=r.value,o=c.name,z=n.value,v=z&&z.components[o];if(!v)return f0(e.default,{Component:v,route:t});const h=z.props[o],g=h?h===!0?t.params:typeof h=="function"?h(t):h:null,B=P7(v,K({},g,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(z.instances[o]=null)},ref:l}));return f0(e.default,{Component:B,route:t})||B}}});function f0(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const kz=wz;function yz(c){const a=sz(c.routes,c),e=c.parseQuery||pz,s=c.stringifyQuery||a0,r=c.history,i=e3(),f=e3(),n=e3(),l=_o(i2);let t=i2;T2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=Y4.bind(null,M=>""+M),z=Y4.bind(null,Mz),v=Y4.bind(null,f4);function h(M,A){let k,R;return B7(M)?(k=a.getRecordMatcher(M),R=A):R=M,a.addRoute(R,k)}function g(M){const A=a.getRecordMatcher(M);A&&a.removeRoute(A)}function w(){return a.getRoutes().map(M=>M.record)}function B(M){return!!a.getRecordMatcher(M)}function V(M,A){if(A=K({},A||l.value),typeof M=="string"){const m=X4(e,M,A.path),C=a.resolve({path:m.path},A),H=r.createHref(m.fullPath);return K(m,C,{params:v(C.params),hash:f4(m.hash),redirectedFrom:void 0,href:H})}let k;if("path"in M)k=K({},M,{path:X4(e,M.path,A.path).path});else{const m=K({},M.params);for(const C in m)m[C]==null&&delete m[C];k=K({},M,{params:z(M.params)}),A.params=z(A.params)}const R=a.resolve(k,A),W=M.hash||"";R.params=o(v(R.params));const r1=Pm(s,K({},M,{hash:Hz(W),path:R.path})),$=r.createHref(r1);return K({fullPath:r1,hash:W,query:s===a0?dz(M.query):M.query||{}},R,{redirectedFrom:void 0,href:$})}function d(M){return typeof M=="string"?X4(e,M,l.value.path):K({},M)}function S(M,A){if(t!==M)return Z2(8,{from:A,to:M})}function q(M){return f1(M)}function I(M){return q(K(d(M),{replace:!0}))}function e1(M){const A=M.matched[M.matched.length-1];if(A&&A.redirect){const{redirect:k}=A;let R=typeof k=="function"?k(M):k;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=d(R):{path:R},R.params={}),K({query:M.query,hash:M.hash,params:"path"in R?{}:M.params},R)}}function f1(M,A){const k=t=V(M),R=l.value,W=M.state,r1=M.force,$=M.replace===!0,m=e1(k);if(m)return f1(K(d(m),{state:typeof m=="object"?K({},W,m.state):W,force:r1,replace:$}),A||k);const C=k;C.redirectedFrom=A;let H;return!r1&&Tm(s,R,k)&&(H=Z2(16,{to:C,from:R}),H2(R,R,!0,!1)),(H?Promise.resolve(H):h1(C,R)).catch(u=>W1(u)?W1(u,2)?u:N1(u):Q(u,C,R)).then(u=>{if(u){if(W1(u,2))return f1(K({replace:$},d(u.to),{state:typeof u.to=="object"?K({},W,u.to.state):W,force:r1}),A||C)}else u=s2(C,R,!0,$,W);return b1(C,R,u),u})}function d1(M,A){const k=S(M,A);return k?Promise.reject(k):Promise.resolve()}function h1(M,A){let k;const[R,W,r1]=Az(M,A);k=Q4(R.reverse(),"beforeRouteLeave",M,A);for(const m of R)m.leaveGuards.forEach(C=>{k.push(l2(C,M,A))});const $=d1.bind(null,M,A);return k.push($),P2(k).then(()=>{k=[];for(const m of i.list())k.push(l2(m,M,A));return k.push($),P2(k)}).then(()=>{k=Q4(W,"beforeRouteUpdate",M,A);for(const m of W)m.updateGuards.forEach(C=>{k.push(l2(C,M,A))});return k.push($),P2(k)}).then(()=>{k=[];for(const m of M.matched)if(m.beforeEnter&&!A.matched.includes(m))if(R1(m.beforeEnter))for(const C of m.beforeEnter)k.push(l2(C,M,A));else k.push(l2(m.beforeEnter,M,A));return k.push($),P2(k)}).then(()=>(M.matched.forEach(m=>m.enterCallbacks={}),k=Q4(r1,"beforeRouteEnter",M,A),k.push($),P2(k))).then(()=>{k=[];for(const m of f.list())k.push(l2(m,M,A));return k.push($),P2(k)}).catch(m=>W1(m,8)?m:Promise.reject(m))}function b1(M,A,k){for(const R of n.list())R(M,A,k)}function s2(M,A,k,R,W){const r1=S(M,A);if(r1)return r1;const $=A===i2,m=T2?history.state:{};k&&(R||$?r.replace(M.fullPath,K({scroll:$&&m&&m.scroll},W)):r.push(M.fullPath,W)),l.value=M,H2(M,A,k,$),N1()}let E1;function k2(){E1||(E1=r.listen((M,A,k)=>{if(!P3.listening)return;const R=V(M),W=e1(R);if(W){f1(K(W,{replace:!0}),R).catch(n3);return}t=R;const r1=l.value;T2&&Om(Z5(r1.fullPath,k.delta),d4()),h1(R,r1).catch($=>W1($,12)?$:W1($,2)?(f1($.to,R).then(m=>{W1(m,20)&&!k.delta&&k.type===u3.pop&&r.go(-1,!1)}).catch(n3),Promise.reject()):(k.delta&&r.go(-k.delta,!1),Q($,R,r1))).then($=>{$=$||s2(R,r1,!1),$&&(k.delta&&!W1($,8)?r.go(-k.delta,!1):k.type===u3.pop&&W1($,20)&&r.go(-1,!1)),b1(R,r1,$)}).catch(n3)}))}let h2=e3(),J2=e3(),l1;function Q(M,A,k){N1(M);const R=J2.list();return R.length?R.forEach(W=>W(M,A,k)):console.error(M),Promise.reject(M)}function Y(){return l1&&l.value!==i2?Promise.resolve():new Promise((M,A)=>{h2.add([M,A])})}function N1(M){return l1||(l1=!M,k2(),h2.list().forEach(([A,k])=>M?k(M):A()),h2.reset()),M}function H2(M,A,k,R){const{scrollBehavior:W}=c;if(!T2||!W)return Promise.resolve();const r1=!k&&Um(Z5(M.fullPath,0))||(R||!k)&&history.state&&history.state.scroll||null;return W6().then(()=>W(M,A,r1)).then($=>$&&_m($)).catch($=>Q($,M,A))}const w1=M=>r.go(M);let M1;const y2=new Set,P3={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,hasRoute:B,getRoutes:w,resolve:V,options:c,push:q,replace:I,go:w1,back:()=>w1(-1),forward:()=>w1(1),beforeEach:i.add,beforeResolve:f.add,afterEach:n.add,onError:J2.add,isReady:Y,install(M){const A=this;M.component("RouterLink",bz),M.component("RouterView",kz),M.config.globalProperties.$router=A,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>_2(l)}),T2&&!M1&&l.value===i2&&(M1=!0,q(r.location).catch(W=>{}));const k={};for(const W in i2)k[W]=S1(()=>l.value[W]);M.provide(J6,A),M.provide($7,g3(k)),M.provide(V6,l);const R=M.unmount;y2.add(M),M.unmount=function(){y2.delete(M),y2.size<1&&(t=i2,E1&&E1(),E1=null,l.value=i2,M1=!1,l1=!1),R()}}};return P3}function P2(c){return c.reduce((a,e)=>a.then(()=>e()),Promise.resolve())}function Az(c,a){const e=[],s=[],r=[],i=Math.max(a.matched.length,c.matched.length);for(let f=0;f<i;f++){const n=a.matched[f];n&&(c.matched.find(t=>W2(t,n))?s.push(n):e.push(n));const l=c.matched[f];l&&(a.matched.find(t=>W2(t,l))||r.push(l))}return[e,s,r]}const Pz=[{path:"/",name:"Inmind",component:()=>I5(()=>import("./HomePage-82e4a35d.js"),[])},{path:"/login",name:"登入 InMind",component:()=>I5(()=>import("./LoginPage-0730dd6c.js"),[]),children:[{path:":type",name:"登入 InMind"}]}],c8=yz({history:Wm(),scrollBehavior(c,a,e){return{left:0,top:0}},routes:Pz});c8.beforeEach((c,a,e)=>{document.title=c.name,e()});function n0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?n0(Object(e),!0).forEach(function(s){t1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):n0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function n4(c){return n4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n4(c)}function Tz(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function l0(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Fz(c,a,e){return a&&l0(c.prototype,a),e&&l0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function t1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function a8(c,a){return Rz(c)||Dz(c,a)||I7(c,a)||_z()}function x3(c){return Bz(c)||Ez(c)||I7(c)||qz()}function Bz(c){if(Array.isArray(c))return M6(c)}function Rz(c){if(Array.isArray(c))return c}function Ez(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Dz(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,f,n;try{for(e=e.call(c);!(r=(f=e.next()).done)&&(s.push(f.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,n=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw n}}return s}}function I7(c,a){if(c){if(typeof c=="string")return M6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M6(c,a)}}function M6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function qz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o0=function(){},e8={},G7={},W7=null,Z7={mark:o0,measure:o0};try{typeof window<"u"&&(e8=window),typeof document<"u"&&(G7=document),typeof MutationObserver<"u"&&(W7=MutationObserver),typeof performance<"u"&&(Z7=performance)}catch{}var Oz=e8.navigator||{},t0=Oz.userAgent,m0=t0===void 0?"":t0,z2=e8,a1=G7,z0=W7,q3=Z7;z2.document;var e2=!!a1.documentElement&&!!a1.head&&typeof a1.addEventListener=="function"&&typeof a1.createElement=="function",j7=~m0.indexOf("MSIE")||~m0.indexOf("Trident/"),_3,O3,U3,$3,I3,Q1="___FONT_AWESOME___",p6=16,K7="fa",Y7="svg-inline--fa",N2="data-fa-i2svg",d6="data-fa-pseudo-element",Uz="data-fa-pseudo-element-pending",s8="data-prefix",r8="data-icon",C0="fontawesome-i2svg",$z="async",Iz=["HTML","HEAD","STYLE","SCRIPT"],X7=function(){try{return!0}catch{return!1}}(),c1="classic",n1="sharp",i8=[c1,n1];function b3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[c1]}})}var V3=b3((_3={},t1(_3,c1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),t1(_3,n1,{fa:"solid",fass:"solid","fa-solid":"solid"}),_3)),M3=b3((O3={},t1(O3,c1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),t1(O3,n1,{solid:"fass"}),O3)),p3=b3((U3={},t1(U3,c1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),t1(U3,n1,{fass:"fa-solid"}),U3)),Gz=b3(($3={},t1($3,c1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),t1($3,n1,{"fa-solid":"fass"}),$3)),Wz=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Q7="fa-layers-text",Zz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jz=b3((I3={},t1(I3,c1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),t1(I3,n1,{900:"fass"}),I3)),J7=[1,2,3,4,5,6,7,8,9,10],Kz=J7.concat([11,12,13,14,15,16,17,18,19,20]),Yz=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d3=new Set;Object.keys(M3[c1]).map(d3.add.bind(d3));Object.keys(M3[n1]).map(d3.add.bind(d3));var Xz=[].concat(i8,x3(d3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L2.GROUP,L2.SWAP_OPACITY,L2.PRIMARY,L2.SECONDARY]).concat(J7.map(function(c){return"".concat(c,"x")})).concat(Kz.map(function(c){return"w-".concat(c)})),o3=z2.FontAwesomeConfig||{};function Qz(c){var a=a1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Jz(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(a1&&typeof a1.querySelector=="function"){var cC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cC.forEach(function(c){var a=a8(c,2),e=a[0],s=a[1],r=Jz(Qz(e));r!=null&&(o3[s]=r)})}var c9={styleDefault:"solid",familyDefault:"classic",cssPrefix:K7,replacementClass:Y7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};o3.familyPrefix&&(o3.cssPrefix=o3.familyPrefix);var j2=P(P({},c9),o3);j2.autoReplaceSvg||(j2.observeMutations=!1);var F={};Object.keys(c9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){j2[c]=e,t3.forEach(function(s){return s(F)})},get:function(){return j2[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){j2.cssPrefix=a,t3.forEach(function(e){return e(F)})},get:function(){return j2.cssPrefix}});z2.FontAwesomeConfig=F;var t3=[];function aC(c){return t3.push(c),function(){t3.splice(t3.indexOf(c),1)}}var f2=p6,I1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eC(c){if(!(!c||!e2)){var a=a1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=a1.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=i)}return a1.head.insertBefore(a,s),c}}var sC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function L3(){for(var c=12,a="";c-- >0;)a+=sC[Math.random()*62|0];return a}function Q2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function f8(c){return c.classList?Q2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function a9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rC(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(a9(c[e]),'" ')},"").trim()}function L4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function n8(c){return c.size!==I1.size||c.x!==I1.x||c.y!==I1.y||c.rotate!==I1.rotate||c.flipX||c.flipY}function iC(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(f," ").concat(n)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function fC(c){var a=c.transform,e=c.width,s=e===void 0?p6:e,r=c.height,i=r===void 0?p6:r,f=c.startCentered,n=f===void 0?!1:f,l="";return n&&j7?l+="translate(".concat(a.x/f2-s/2,"em, ").concat(a.y/f2-i/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/f2,"em), calc(-50% + ").concat(a.y/f2,"em)) "):l+="translate(".concat(a.x/f2,"em, ").concat(a.y/f2,"em) "),l+="scale(".concat(a.size/f2*(a.flipX?-1:1),", ").concat(a.size/f2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var nC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
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
    transition-delay: 0s;
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
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}`;function e9(){var c=K7,a=Y7,e=F.cssPrefix,s=F.replacementClass,r=nC;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(n,".".concat(s))}return r}var v0=!1;function J4(){F.autoAddCss&&!v0&&(eC(e9()),v0=!0)}var lC={mixout:function(){return{dom:{css:e9,insertCss:J4}}},hooks:function(){return{beforeDOMElementCreation:function(){J4()},beforeI2svg:function(){J4()}}}},J1=z2||{};J1[Q1]||(J1[Q1]={});J1[Q1].styles||(J1[Q1].styles={});J1[Q1].hooks||(J1[Q1].hooks={});J1[Q1].shims||(J1[Q1].shims=[]);var T1=J1[Q1],s9=[],oC=function c(){a1.removeEventListener("DOMContentLoaded",c),l4=1,s9.map(function(a){return a()})},l4=!1;e2&&(l4=(a1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a1.readyState),l4||a1.addEventListener("DOMContentLoaded",oC));function tC(c){e2&&(l4?setTimeout(c,0):s9.push(c))}function S3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?a9(c):"<".concat(a," ").concat(rC(s),">").concat(i.map(S3).join(""),"</").concat(a,">")}function h0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var mC=function(a,e){return function(s,r,i,f){return a.call(e,s,r,i,f)}},c6=function(a,e,s,r){var i=Object.keys(a),f=i.length,n=r!==void 0?mC(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<f;l++)t=i[l],o=n(o,a[t],t,a);return o};function zC(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function L6(c){var a=zC(c);return a.length===1?a[0].toString(16):null}function CC(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function H0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function g6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=H0(a);typeof T1.hooks.addPack=="function"&&!r?T1.hooks.addPack(c,H0(a)):T1.styles[c]=P(P({},T1.styles[c]||{}),i),c==="fas"&&g6("fa",a)}var G3,W3,Z3,B2=T1.styles,vC=T1.shims,hC=(G3={},t1(G3,c1,Object.values(p3[c1])),t1(G3,n1,Object.values(p3[n1])),G3),l8=null,r9={},i9={},f9={},n9={},l9={},HC=(W3={},t1(W3,c1,Object.keys(V3[c1])),t1(W3,n1,Object.keys(V3[n1])),W3);function uC(c){return~Xz.indexOf(c)}function VC(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!uC(r)?r:null}var o9=function(){var a=function(i){return c6(B2,function(f,n,l){return f[l]=c6(n,i,{}),f},{})};r9=a(function(r,i,f){if(i[3]&&(r[i[3]]=f),i[2]){var n=i[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){r[l.toString(16)]=f})}return r}),i9=a(function(r,i,f){if(r[f]=f,i[2]){var n=i[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){r[l]=f})}return r}),l9=a(function(r,i,f){var n=i[2];return r[f]=f,n.forEach(function(l){r[l]=f}),r});var e="far"in B2||F.autoFetchSvg,s=c6(vC,function(r,i){var f=i[0],n=i[1],l=i[2];return n==="far"&&!e&&(n="fas"),typeof f=="string"&&(r.names[f]={prefix:n,iconName:l}),typeof f=="number"&&(r.unicodes[f.toString(16)]={prefix:n,iconName:l}),r},{names:{},unicodes:{}});f9=s.names,n9=s.unicodes,l8=g4(F.styleDefault,{family:F.familyDefault})};aC(function(c){l8=g4(c.styleDefault,{family:F.familyDefault})});o9();function o8(c,a){return(r9[c]||{})[a]}function MC(c,a){return(i9[c]||{})[a]}function g2(c,a){return(l9[c]||{})[a]}function t9(c){return f9[c]||{prefix:null,iconName:null}}function pC(c){var a=n9[c],e=o8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C2(){return l8}var t8=function(){return{prefix:null,iconName:null,rest:[]}};function g4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?c1:e,r=V3[s][c],i=M3[s][c]||M3[s][r],f=c in T1.styles?c:null;return i||f||null}var u0=(Z3={},t1(Z3,c1,Object.keys(p3[c1])),t1(Z3,n1,Object.keys(p3[n1])),Z3);function x4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},t1(a,c1,"".concat(F.cssPrefix,"-").concat(c1)),t1(a,n1,"".concat(F.cssPrefix,"-").concat(n1)),a),f=null,n=c1;(c.includes(i[c1])||c.some(function(t){return u0[c1].includes(t)}))&&(n=c1),(c.includes(i[n1])||c.some(function(t){return u0[n1].includes(t)}))&&(n=n1);var l=c.reduce(function(t,o){var z=VC(F.cssPrefix,o);if(B2[o]?(o=hC[n].includes(o)?Gz[n][o]:o,f=o,t.prefix=o):HC[n].indexOf(o)>-1?(f=o,t.prefix=g4(o,{family:n})):z?t.iconName=z:o!==F.replacementClass&&o!==i[c1]&&o!==i[n1]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var v=f==="fa"?t9(t.iconName):{},h=g2(t.prefix,t.iconName);v.prefix&&(f=null),t.iconName=v.iconName||h||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!B2.far&&B2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},t8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===n1&&(B2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=g2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||f==="fa")&&(l.prefix=C2()||"fas"),l}var dC=function(){function c(){Tz(this,c),this.definitions={}}return Fz(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var f=r.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(n){e.definitions[n]=P(P({},e.definitions[n]||{}),f[n]),g6(n,f[n]);var l=p3[c1][n];l&&g6(l,f[n]),o9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var f=r[i],n=f.prefix,l=f.iconName,t=f.icon,o=t[2];e[n]||(e[n]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[n][z]=t)}),e[n][l]=t}),e}}]),c}(),V0=[],R2={},U2={},LC=Object.keys(U2);function gC(c,a){var e=a.mixoutsTo;return V0=c,R2={},Object.keys(U2).forEach(function(s){LC.indexOf(s)===-1&&delete U2[s]}),V0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(f){typeof r[f]=="function"&&(e[f]=r[f]),n4(r[f])==="object"&&Object.keys(r[f]).forEach(function(n){e[f]||(e[f]={}),e[f][n]=r[f][n]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(f){R2[f]||(R2[f]=[]),R2[f].push(i[f])})}s.provides&&s.provides(U2)}),e}function x6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=R2[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(s))}),a}function w2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=R2[c]||[];r.forEach(function(i){i.apply(null,e)})}function c2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return U2[c]?U2[c].apply(null,a):void 0}function b6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||C2();if(a)return a=g2(e,a)||a,h0(m9.definitions,e,a)||h0(T1.styles,e,a)}var m9=new dC,xC=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,w2("noAuto")},bC={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e2?(w2("beforeI2svg",a),c2("pseudoElements2svg",a),c2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,tC(function(){NC({autoReplaceSvgRoot:e}),w2("watch",a)})}},SC={icon:function(a){if(a===null)return null;if(n4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:g2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=g4(a[0]);return{prefix:s,iconName:g2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(Wz))){var r=x4(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||C2(),iconName:g2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=C2();return{prefix:i,iconName:g2(i,a)||a}}}},x1={noAuto:xC,config:F,dom:bC,parse:SC,library:m9,findIconDefinition:b6,toHtml:S3},NC=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?a1:e;(Object.keys(T1.styles).length>0||F.autoFetchSvg)&&e2&&F.autoReplaceSvg&&x1.dom.i2svg({node:s})};function b4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return S3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(e2){var s=a1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function wC(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,f=c.transform;if(n8(f)&&e.found&&!s.found){var n=e.width,l=e.height,t={x:n/l/2,y:.5};r.style=L4(P(P({},i),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function kC(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},r),{},{id:f}),children:s}]}]}function m8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,f=c.transform,n=c.symbol,l=c.title,t=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,h=v===void 0?!1:v,g=s.found?s:e,w=g.width,B=g.height,V=r==="fak",d=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(h1){return z.classes.indexOf(h1)===-1}).filter(function(h1){return h1!==""||!!h1}).concat(z.classes).join(" "),S={children:[],attributes:P(P({},z.attributes),{},{"data-prefix":r,"data-icon":i,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(B)})},q=V&&!~z.classes.indexOf("fa-fw")?{width:"".concat(w/B*16*.0625,"em")}:{};h&&(S.attributes[N2]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(o||L3())},children:[l]}),delete S.attributes.title);var I=P(P({},S),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:f,symbol:n,styles:P(P({},q),z.styles)}),e1=s.found&&e.found?c2("generateAbstractMask",I)||{children:[],attributes:{}}:c2("generateAbstractIcon",I)||{children:[],attributes:{}},f1=e1.children,d1=e1.attributes;return I.children=f1,I.attributes=d1,n?kC(I):wC(I)}function M0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,f=c.extra,n=c.watchable,l=n===void 0?!1:n,t=P(P(P({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});l&&(t[N2]="");var o=P({},f.styles);n8(r)&&(o.transform=fC({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var z=L4(o);z.length>0&&(t.style=z);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function yC(c){var a=c.content,e=c.title,s=c.extra,r=P(P(P({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=L4(s.styles);i.length>0&&(r.style=i);var f=[];return f.push({tag:"span",attributes:r,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var a6=T1.styles;function S6(c){var a=c[0],e=c[1],s=c.slice(4),r=a8(s,1),i=r[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(L2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(L2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(L2.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:f}}var AC={found:!1,width:512,height:512};function PC(c,a){!X7&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function N6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=C2()),new Promise(function(s,r){if(c2("missingIconAbstract"),e==="fa"){var i=t9(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&a6[a]&&a6[a][c]){var f=a6[a][c];return s(S6(f))}PC(c,a),s(P(P({},AC),{},{icon:F.showMissingIcons&&c?c2("missingIconAbstract")||{}:{}}))})}var p0=function(){},w6=F.measurePerformance&&q3&&q3.mark&&q3.measure?q3:{mark:p0,measure:p0},r3='FA "6.2.1"',TC=function(a){return w6.mark("".concat(r3," ").concat(a," begins")),function(){return z9(a)}},z9=function(a){w6.mark("".concat(r3," ").concat(a," ends")),w6.measure("".concat(r3," ").concat(a),"".concat(r3," ").concat(a," begins"),"".concat(r3," ").concat(a," ends"))},z8={begin:TC,end:z9},c4=function(){};function d0(c){var a=c.getAttribute?c.getAttribute(N2):null;return typeof a=="string"}function FC(c){var a=c.getAttribute?c.getAttribute(s8):null,e=c.getAttribute?c.getAttribute(r8):null;return a&&e}function BC(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function RC(){if(F.autoReplaceSvg===!0)return a4.replace;var c=a4[F.autoReplaceSvg];return c||a4.replace}function EC(c){return a1.createElementNS("http://www.w3.org/2000/svg",c)}function DC(c){return a1.createElement(c)}function C9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?EC:DC:e;if(typeof c=="string")return a1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(f){r.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){r.appendChild(C9(f,{ceFn:s}))}),r}function qC(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var a4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(C9(r),e)}),e.getAttribute(N2)===null&&F.keepOriginalSource){var s=a1.createComment(qC(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~f8(e).indexOf(F.replacementClass))return a4.replace(a);var r=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(n,l){return l===F.replacementClass||l.match(r)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var f=s.map(function(n){return S3(n)}).join(`
`);e.setAttribute(N2,""),e.innerHTML=f}};function L0(c){c()}function v9(c,a){var e=typeof a=="function"?a:c4;if(c.length===0)e();else{var s=L0;F.mutateApproach===$z&&(s=z2.requestAnimationFrame||L0),s(function(){var r=RC(),i=z8.begin("mutate");c.map(r),i(),e()})}}var C8=!1;function h9(){C8=!0}function k6(){C8=!1}var o4=null;function g0(c){if(z0&&F.observeMutations){var a=c.treeCallback,e=a===void 0?c4:a,s=c.nodeCallback,r=s===void 0?c4:s,i=c.pseudoElementsCallback,f=i===void 0?c4:i,n=c.observeMutationsRoot,l=n===void 0?a1:n;o4=new z0(function(t){if(!C8){var o=C2();Q2(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!d0(z.addedNodes[0])&&(F.searchPseudoElements&&f(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&F.searchPseudoElements&&f(z.target.parentNode),z.type==="attributes"&&d0(z.target)&&~Yz.indexOf(z.attributeName))if(z.attributeName==="class"&&FC(z.target)){var v=x4(f8(z.target)),h=v.prefix,g=v.iconName;z.target.setAttribute(s8,h||o),g&&z.target.setAttribute(r8,g)}else BC(z.target)&&r(z.target)})}}),e2&&o4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _C(){o4&&o4.disconnect()}function OC(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),f=i[0],n=i.slice(1);return f&&n.length>0&&(s[f]=n.join(":").trim()),s},{})),e}function UC(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=x4(f8(c));return r.prefix||(r.prefix=C2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=MC(r.prefix,c.innerText)||o8(r.prefix,L6(c.innerText))),!r.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function $C(c){var a=Q2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(s||L3()):(a["aria-hidden"]="true",a.focusable="false")),a}function IC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=UC(c),s=e.iconName,r=e.prefix,i=e.rest,f=$C(c),n=x6("parseNodeAttributes",{},c),l=a.styleParser?OC(c):[];return P({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:I1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:f}},n)}var GC=T1.styles;function H9(c){var a=F.autoReplaceSvg==="nest"?x0(c,{styleParser:!1}):x0(c);return~a.extra.classes.indexOf(Q7)?c2("generateLayersText",c,a):c2("generateSvgReplacementMutation",c,a)}var v2=new Set;i8.map(function(c){v2.add("fa-".concat(c))});Object.keys(V3[c1]).map(v2.add.bind(v2));Object.keys(V3[n1]).map(v2.add.bind(v2));v2=x3(v2);function b0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e2)return Promise.resolve();var e=a1.documentElement.classList,s=function(z){return e.add("".concat(C0,"-").concat(z))},r=function(z){return e.remove("".concat(C0,"-").concat(z))},i=F.autoFetchSvg?v2:i8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(GC));i.includes("fa")||i.push("fa");var f=[".".concat(Q7,":not([").concat(N2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(N2,"])")})).join(", ");if(f.length===0)return Promise.resolve();var n=[];try{n=Q2(c.querySelectorAll(f))}catch{}if(n.length>0)s("pending"),r("complete");else return Promise.resolve();var l=z8.begin("onTree"),t=n.reduce(function(o,z){try{var v=H9(z);v&&o.push(v)}catch(h){X7||h.name==="MissingIcon"&&console.error(h)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(v){v9(v,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function WC(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;H9(c).then(function(e){e&&v9([e],a)})}function ZC(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:b6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:b6(r||{})),c(s,P(P({},e),{},{mask:r}))}}var jC=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?I1:s,i=e.symbol,f=i===void 0?!1:i,n=e.mask,l=n===void 0?null:n,t=e.maskId,o=t===void 0?null:t,z=e.title,v=z===void 0?null:z,h=e.titleId,g=h===void 0?null:h,w=e.classes,B=w===void 0?[]:w,V=e.attributes,d=V===void 0?{}:V,S=e.styles,q=S===void 0?{}:S;if(a){var I=a.prefix,e1=a.iconName,f1=a.icon;return b4(P({type:"icon"},a),function(){return w2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(v?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(g||L3()):(d["aria-hidden"]="true",d.focusable="false")),m8({icons:{main:S6(f1),mask:l?S6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:e1,transform:P(P({},I1),r),symbol:f,title:v,maskId:o,titleId:g,extra:{attributes:d,styles:q,classes:B}})})}},KC={mixout:function(){return{icon:ZC(jC)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=b0,e.nodeCallback=WC,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?a1:s,i=e.callback,f=i===void 0?function(){}:i;return b0(r,f)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,f=s.titleId,n=s.prefix,l=s.transform,t=s.symbol,o=s.mask,z=s.maskId,v=s.extra;return new Promise(function(h,g){Promise.all([N6(r,n),o.iconName?N6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var B=a8(w,2),V=B[0],d=B[1];h([e,m8({icons:{main:V,mask:d},prefix:n,iconName:r,transform:l,symbol:t,maskId:z,title:i,titleId:f,extra:v,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,f=e.transform,n=e.styles,l=L4(n);l.length>0&&(r.style=l);var t;return n8(f)&&(t=c2("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},YC={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return b4({type:"layer"},function(){w2("beforeDOMElementCreation",{assembler:e,params:s});var f=[];return e(function(n){Array.isArray(n)?n.map(function(l){f=f.concat(l.abstract)}):f=f.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(x3(i)).join(" ")},children:f}]})}}}},XC={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,f=s.classes,n=f===void 0?[]:f,l=s.attributes,t=l===void 0?{}:l,o=s.styles,z=o===void 0?{}:o;return b4({type:"counter",content:e},function(){return w2("beforeDOMElementCreation",{content:e,params:s}),yC({content:e.toString(),title:i,extra:{attributes:t,styles:z,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(x3(n))}})})}}}},QC={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?I1:r,f=s.title,n=f===void 0?null:f,l=s.classes,t=l===void 0?[]:l,o=s.attributes,z=o===void 0?{}:o,v=s.styles,h=v===void 0?{}:v;return b4({type:"text",content:e},function(){return w2("beforeDOMElementCreation",{content:e,params:s}),M0({content:e,transform:P(P({},I1),i),title:n,extra:{attributes:z,styles:h,classes:["".concat(F.cssPrefix,"-layers-text")].concat(x3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,f=s.extra,n=null,l=null;if(j7){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();n=o.width/t,l=o.height/t}return F.autoA11y&&!r&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,M0({content:e.innerHTML,width:n,height:l,transform:i,title:r,extra:f,watchable:!0})])}}},JC=new RegExp('"',"ug"),S0=[1105920,1112319];function cv(c){var a=c.replace(JC,""),e=CC(a,0),s=e>=S0[0]&&e<=S0[1],r=a.length===2?a[0]===a[1]:!1;return{value:L6(r?a[0]:a),isSecondary:s||r}}function N0(c,a){var e="".concat(Uz).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=Q2(c.children),f=i.filter(function(f1){return f1.getAttribute(d6)===a})[0],n=z2.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(Zz),t=n.getPropertyValue("font-weight"),o=n.getPropertyValue("content");if(f&&!l)return c.removeChild(f),s();if(l&&o!=="none"&&o!==""){var z=n.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?n1:c1,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?M3[v][l[2].toLowerCase()]:jz[v][t],g=cv(z),w=g.value,B=g.isSecondary,V=l[0].startsWith("FontAwesome"),d=o8(h,w),S=d;if(V){var q=pC(w);q.iconName&&q.prefix&&(d=q.iconName,h=q.prefix)}if(d&&!B&&(!f||f.getAttribute(s8)!==h||f.getAttribute(r8)!==S)){c.setAttribute(e,S),f&&c.removeChild(f);var I=IC(),e1=I.extra;e1.attributes[d6]=a,N6(d,h).then(function(f1){var d1=m8(P(P({},I),{},{icons:{main:f1,mask:t8()},prefix:h,iconName:S,extra:e1,watchable:!0})),h1=a1.createElement("svg");a==="::before"?c.insertBefore(h1,c.firstChild):c.appendChild(h1),h1.outerHTML=d1.map(function(b1){return S3(b1)}).join(`