/*!
   JW Player version 8.27.1
   Copyright (c) 2023, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.27.1/notice.txt
*/
"use strict";(self.webpackChunkjwplayer=self.webpackChunkjwplayer||[]).push([[347],{2776:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var n=s(1776),r=s(7477);const i=/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/,a=/^-?\d+$/,o=/\r\n|\n/,c=/^NOTE($|[ \t])/,l=/^[^\sa-zA-Z-]+/,u=/:/,f=/\s/,h=/^\s+/,g=/-->/,d=/^WEBVTT([ \t].*)?$/,p=function(){return{decode(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}},b=function(e,t,s){this.window=e,this.state="INITIAL",this.buffer="",this.decoder=t||new p,this.syncCueParsing=s,this.regionList=[],this.maxCueBatch=1e3},E=function(){this.values=Object.create(null)};E.prototype={set(e,t){this.get(e)||""===t||(this.values[e]=t)},get(e,t,s){return s?this.has(e)?this.values[e]:t[s]:this.has(e)?this.values[e]:t},has(e){return e in this.values},alt(e,t,s){for(let n=0;n<s.length;++n)if(t===s[n]){this.set(e,t);break}},integer(e,t){a.test(t)&&this.set(e,parseInt(t,10))},percent(e,t){return(t=parseFloat(t))>=0&&t<=100&&(this.set(e,t),!0)}};const T=new r.Z(0,0,0),m="middle"===T.align?"middle":"center",w=function(e,t,s){const n=e,r=()=>{const t=(e=>{const t=(e,t,s,n)=>3600*(0|e)+60*(0|t)+(0|s)+(0|n)/1e3,s=e.match(i);return s?s[3]?t(s[1],s[2],s[3].replace(":",""),s[4]):s[1]>59?t(s[1],s[2],0,s[4]):t(0,s[1],s[2],s[4]):null})(e);if(null===t)throw new Error(`Malformed timestamp: ${n}`);return e=e.replace(l,""),t},a=()=>{e=e.replace(h,"")};if(a(),t.startTime=r(),a(),"--\x3e"!==e.substr(0,3))throw new Error(`Malformed time stamp (time stamps must be separated by '--\x3e'): ${n}`);e=e.substr(3),a(),t.endTime=r(),a(),function(e,t){const n=new E;((e,t,s,n)=>{const r=n?e.split(n):[e];for(let e=0;e<=r.length;e+=1){if("string"!=typeof r[e])continue;const n=r[e].split(s);2===n.length&&t(n[0],n[1])}})(e,(function(e,t){switch(e){case"region":for(let r=s.length-1;r>=0;r--)if(s[r].id===t){n.set(e,s[r].region);break}break;case"vertical":n.alt(e,t,["rl","lr"]);break;case"line":{const s=t.split(","),r=s[0];n.integer(e,r),n.percent(e,r)&&n.set("snapToLines",!1),n.alt(e,r,["auto"]),2===s.length&&n.alt("lineAlign",s[1],["start",m,"end"]);break}case"position":{const s=t.split(",");n.percent(e,s[0]),2===s.length&&n.alt("positionAlign",s[1],["start",m,"end","line-left","line-right","auto"]);break}case"size":n.percent(e,t);break;case"align":n.alt(e,t,["start",m,"end","left","right"])}}),u,f),t.region=n.get("region",null),t.vertical=n.get("vertical","");let r=n.get("line","auto");"auto"===r&&-1===T.line&&(r=-1),t.line=r,t.lineAlign=n.get("lineAlign","start"),t.snapToLines=n.get("snapToLines",!0),t.size=n.get("size",100),t.align=n.get("align",m);let i=n.get("position","auto");"auto"===i&&50===T.position&&(i="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=i}(e,t)};b.prototype={parse(e,t){const s=this;e&&(s.buffer+=s.decoder.decode(e,{stream:!0}));const i=function(){const e=s.buffer;let t=0;for(;t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;const n=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,s.buffer=e.substr(t),n},a=function(){"CUETEXT"===s.state&&s.cue&&s.oncue&&s.oncue(s.cue),s.cue=null,s.state="INITIAL"===s.state?"BADWEBVTT":"BADCUE"};let l;try{if("INITIAL"===s.state){if(!o.test(s.buffer))return this;l=i();const e=l.match(d);if(!e||!e[0])throw new Error("Malformed WebVTT signature.");s.state="HEADER"}}catch(e){return a(),this}let f=!1,h=0;const p=function(){try{for(;s.buffer&&(h<=s.maxCueBatch||s.syncCueParsing);){if(!o.test(s.buffer))return s.flush(),this;switch(f?f=!1:l=i(),s.state){case"HEADER":u.test(l)||l||(s.state="ID");break;case"NOTE":l||(s.state="ID");break;case"ID":if(c.test(l)){s.state="NOTE";break}if(!l)break;if(s.cue=new r.Z(0,0,""),s.state="CUE",!g.test(l)){s.cue.id=l;break}case"CUE":try{w(l,s.cue,s.regionList)}catch(e){s.cue=null,s.state="BADCUE";break}s.state="CUETEXT";break;case"CUETEXT":{const e=g.test(l);if((!l||e)&&(f=!0)){s.oncue&&(h+=1,s.oncue(s.cue)),s.cue=null,s.state="ID";break}s.cue.text&&(s.cue.text+="\n"),s.cue.text+=l;break}case"BADCUE":l||(s.state="ID")}}if(h=0,s.buffer)(0,n.U)(p);else if(!t)return s.flush(),this}catch(e){return a(),this}};p()},flush(){const e=this;if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse(void 0,!0)),"INITIAL"===e.state)throw new Error("Malformed WebVTT signature.");return e.onflush&&e.onflush(),this}};const k=b}}]);