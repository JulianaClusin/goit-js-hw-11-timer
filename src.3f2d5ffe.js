parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"I7Ak":[function(require,module,exports) {

},{}],"yCUT":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function e(n){var a=n.selector,r=n.targetDate;t(this,e),this.selector=a,this.targetDate=r,this.days=document.querySelector("".concat(a,' [data-value="days"]')),this.hours=document.querySelector("".concat(a,' [data-value="hours"]')),this.minutes=document.querySelector("".concat(a,' [data-value="mins"]')),this.seconds=document.querySelector("".concat(a,' [data-value="secs"]')),this.startTimer()}return n(e,[{key:"startTimer",value:function(){var t=this;this.getTime(),setInterval(function(){t.getTime()},1e3)}},{key:"getTime",value:function(){var t=Date.now(),e=this.targetDate-t,n=this.getTimeComponents(e);this.timerInterface(n)}},{key:"getTimeComponents",value:function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"timerInterface",value:function(t){this.days.textContent=String(t.days),this.hours.textContent=String(t.hours),this.minutes.textContent=String(t.mins),this.seconds.textContent=String(t.secs)}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}}]),e}();exports.default=a;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./css/main.css");var e=r(require("./js/timer"));function r(e){return e&&e.__esModule?e:{default:e}}var t=new e.default({selector:"#timer-1",targetDate:new Date("Dec 31, 2020, 23:59:59")});
},{"./css/main.css":"I7Ak","./js/timer":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.3f2d5ffe.js.map