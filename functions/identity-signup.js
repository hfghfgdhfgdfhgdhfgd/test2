!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=19)}({11:function(e,n,t){const r=t(6),o=t(7);function c(e){console.log("[dotenv][DEBUG] "+e)}const i=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,l=/\\n/g,u=/\n|\r|\r\n/;function s(e,n){const t=Boolean(n&&n.debug),r={};return e.toString().split(u).forEach((function(e,n){const o=e.match(i);if(null!=o){const e=o[1];let n=o[2]||"";const t=n.length-1,c='"'===n[0]&&'"'===n[t];"'"===n[0]&&"'"===n[t]||c?(n=n.substring(1,t),c&&(n=n.replace(l,"\n"))):n=n.trim(),r[e]=n}else t&&c(`did not match key and value when parsing line ${n+1}: ${e}`)})),r}e.exports.config=function(e){let n=o.resolve(process.cwd(),".env"),t="utf8",i=!1;e&&(null!=e.path&&(n=e.path),null!=e.encoding&&(t=e.encoding),null!=e.debug&&(i=!0));try{const e=s(r.readFileSync(n,{encoding:t}),{debug:i});return Object.keys(e).forEach((function(n){Object.prototype.hasOwnProperty.call(process.env,n)?i&&c(`"${n}" is already defined in \`process.env\` and will not be overwritten`):process.env[n]=e[n]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=s},19:function(e,n,t){(function(e){t(11).config(),e.handler=async(e,n,t)=>{const{identity:r,user:o}=n.clientContext;try{const e=new Telegraf(process.env.telegramKey);await e.telegram.sendMessage(process.env.notificationChatId,"функция включилась "+JSON.stringify(o)+" "+JSON.stringify(r)),console.log("SUCSESS")}catch(e){console.log("ERROR",JSON.stringify(e)),console.log(JSON.stringify(process.env))}return{statusCode:200}}}).call(this,t(20)(e))},20:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},6:function(e,n){e.exports=require("fs")},7:function(e,n){e.exports=require("path")}}));