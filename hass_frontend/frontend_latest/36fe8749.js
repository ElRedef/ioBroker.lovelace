"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[80985],{23682:(e,t,n)=>{function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:()=>r})},90394:(e,t,n)=>{function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:()=>r})},79021:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(34327),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,r.Z)(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}},59699:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(90394),a=n(39244),u=n(23682),o=36e5;function s(e,t){(0,u.Z)(2,arguments);var n=(0,r.Z)(t);return(0,a.Z)(e,n*o)}},39244:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(34327),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=(0,a.Z)(e).getTime(),o=(0,r.Z)(t);return new Date(n+o)}},32182:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(90394),a=n(34327),u=n(23682);function o(e,t){(0,u.Z)(2,arguments);var n=(0,a.Z)(e),o=(0,r.Z)(t);if(isNaN(o))return new Date(NaN);if(!o)return n;var s=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+o+1,0);var g=i.getDate();return s>=g?i:(n.setFullYear(i.getFullYear(),i.getMonth(),s),n)}},4535:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(34327);function a(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var u=n(59429),o=n(23682),s=864e5;function i(e,t){(0,o.Z)(2,arguments);var n=(0,u.Z)(e),r=(0,u.Z)(t),i=n.getTime()-a(n),g=r.getTime()-a(r);return Math.round((i-g)/s)}function g(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function l(e,t){(0,o.Z)(2,arguments);var n=(0,r.Z)(e),a=(0,r.Z)(t),u=g(n,a),s=Math.abs(i(n,a));n.setDate(n.getDate()-u*s);var l=Number(g(n,a)===-u),c=u*(s-l);return 0===c?0:c}},93752:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e){(0,a.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(23,59,59,999),t}},70390:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(93752);function a(){return(0,r.Z)(Date.now())}},47538:(e,t,n)=>{function r(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r-1),a.setHours(23,59,59,999),a}n.d(t,{Z:()=>r})},59429:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(34327),a=n(23682);function u(e){(0,a.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}},27088:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(59429);function a(){return(0,r.Z)(Date.now())}},83008:(e,t,n)=>{function r(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),a=new Date(0);return a.setFullYear(t,n,r-1),a.setHours(0,0,0,0),a}n.d(t,{Z:()=>r})},34327:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(23682);function a(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}}}]);