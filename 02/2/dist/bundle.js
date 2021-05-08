!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);function n(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function c(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}const f={history:[]};var s=function t(e,r,i){var f;if("function"==typeof r&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error(n(0));if("function"==typeof r&&void 0===i&&(i=r,r=void 0),void 0!==i){if("function"!=typeof i)throw new Error(n(1));return i(t)(e,r)}if("function"!=typeof e)throw new Error(n(2));var s=e,a=r,l=[],d=l,y=!1;function p(){d===l&&(d=l.slice())}function E(){if(y)throw new Error(n(3));return a}function b(t){if("function"!=typeof t)throw new Error(n(4));if(y)throw new Error(n(5));var e=!0;return p(),d.push(t),function(){if(e){if(y)throw new Error(n(6));e=!1,p();var r=d.indexOf(t);d.splice(r,1),l=null}}}function h(t){if(!c(t))throw new Error(n(7));if(void 0===t.type)throw new Error(n(8));if(y)throw new Error(n(9));try{y=!0,a=s(a,t)}finally{y=!1}for(var e=l=d,r=0;r<e.length;r++){(0,e[r])()}return t}function v(t){if("function"!=typeof t)throw new Error(n(10));s=t,h({type:u.REPLACE})}function w(){var t,e=b;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(n(11));function r(){t.next&&t.next(E())}return r(),{unsubscribe:e(r)}}})[o]=function(){return this},t}return h({type:u.INIT}),(f={dispatch:h,subscribe:b,getState:E,replaceReducer:v})[o]=w,f}((t=f,e)=>{switch(e.type){case"COUNTER/INCREMENT":return{history:t.history.concat("+1")};case"COUNTER/DECREMENT":return{history:t.history.concat(-1)};case"COUNTER/RESET":return{history:[]};default:return t}});const a=document.querySelector(".counter__result"),l=document.querySelector("[data-action='decrement']"),d=document.querySelector("[data-action='reset']");document.querySelector("[data-action='increment']").addEventListener("click",()=>{s.dispatch({type:"COUNTER/INCREMENT"})}),l.addEventListener("click",()=>{s.dispatch({type:"COUNTER/DECREMENT"})}),d.addEventListener("click",()=>{s.dispatch({type:"COUNTER/RESET"})}),s.subscribe(()=>{const t=s.getState(),e=t.history.reduce((t,e)=>t+parseInt(e),0),r=t.history.join("");a.textContent=0===e?"":`${r} = ${e}`})}]);