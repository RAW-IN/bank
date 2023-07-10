!function(){"use strict";const t="dai",e="-1",s="adBreakEnd",i="adError",a="time",r="meta",n="jw-flag-ads jw-flag-ads-dai",o="playing";var l=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(t),e)};const d={adTagParameters:{},apiKey:"",assetKey:"",cmsID:"",locale:"",debug:!1,liveAdMessage:"Playing Ad",requestTimeout:3e3,videoID:""},h=t=>{if("true"===t)return!0;if("false"===t)return!1;const e=parseFloat(t);return isNaN(e)?t:e};class _{constructor(t,e){for(const e in d)if(l(d,e)){let s=t[e];const i=d[e],a=typeof i;if(void 0!==s){if("boolean"!==a&&"number"!==a||(s=h(s)),typeof s!==a)throw new Error(`invalid parameter: ${e} should be a ${a}`);this[e]=s}else this[e]=i}this.setLocalizationOptions(e)}setLocalizationOptions({loadingAd:t,admessage:e,podmessage:s,cuetext:i}){this.loadingMessage=t,this.admessage=e,this.adcounterdynamic=s,this.cuetext=i}}let c=null;function u(t){if(c)return c;if(window.google&&google.ima&&google.ima.dai)return c=Promise.resolve(),c;const e=["//","imasdk.googleapis.com/js/sdkloader/ima3_dai.js"];"file:"===document.location.protocol&&e.unshift("https:");const s=new(0,t.scriptloader)(e.join(""));return c=s.load().then((()=>{})),c}const m={},p={},g=(t,e,s)=>{const i=p[e];return i||(p[e]=((t,e)=>{const s=m[e];return s||(m[e]=new Promise(((s,i)=>{const a=new t.key(e);if("unlimited"===a.edition())return i();const r=["//","entitlements.jwplayer.com","/",a.token(),".json"];"file:"===window.location.protocol&&r.unshift("https:"),t.ajax(r.join(""),(function(t){const e=null==t?void 0:t.response;e?s(e):i()}),(function(){i()}),{timeout:1e4,responseType:"json"})})))})(t,e).catch((()=>({}))).then((t=>{let e,i;if(!0===s.outstream?(e=!1!==t.canPlayOutstreamAds,i="Outstream Ad Limit Reached"):(e=!1!==t.canPlayAds,i="Ad Limit Reached"),!1===e)throw new Error(i);return{message:"Can Play Ads"}})))},y=(t,s)=>{if(t){let e=s[t];return e||(s[t]=(i=12,e=new Array(i+1).join(`${Math.random().toString(36)}00000000000000000`.slice(2,18)).slice(0,i))),e}var i;return e},f=t=>{const e=t.getAdPodInfo();return e?`${e.getTimeOffset()}`.replace(/[-.]/g,"N"):null};class A{constructor(t){this.player_=t,this.adBreakIds_={},this.adIds_={},this.currentAd_=null}_getAdBreakId(t){return y(`b${f(t)||t.getAdId()}`,this.adBreakIds_)}_getAdPlayId(t){return y(`b${f(t)}a${t.getAdId()}`,this.adIds_)}adEventObject(e){const s=e||this.currentAd_,i={client:t,viewable:this.player_.getViewable()};if(!s)return i;this.currentAd_=s,i.id=this._getAdBreakId(s),i.adPlayId=this._getAdPlayId(s),i.adtitle=s.getTitle(),i.adsystem=s.getAdSystem(),i.creativetype="application/x-mpegURL",i.linear="linear";const a=s.getAdPodInfo();if(a){const t=a.getTotalAds();t>1&&(i.sequence=a.getAdPosition(),i.podcount=t),i.adposition=(t=>{const e=t.getTimeOffset();return 0===e?"pre":-1===e?"post":"mid"})(a)}return i}clearAd(){this.currentAd_=null}}let E=null,w=!1;const D=function(t,e){t.getContainer().querySelectorAll(".jw-icon-fullscreen").forEach((s=>{t.utils.style(s,{display:e})}))};class v{constructor(t,e,s,i){this.item_=t,this.options_=e,this.player_=s,this.daiUtils_=new A(s),this.adCues_=[],this.utils_=s.utils,this.playerContainer_=s.getContainer(),this.playerPositionBeforeMidroll_=null,this.instream_=null,this._inAdPeriod=!1,this._adsMode=!1,this._adBreakStarted=!1,this.timeoutAdStart_=-1,this.isVOD_=e.cmsID&&e.videoID,this.liveMode_=!this.isVOD_&&e.assetKey,this.video_=null,this.streamManager_=null,this.streamManagerEvents_=null,this.streamEventHandler_=t=>{this._onStreamEvent(t)},this.adUiElement_=i,this.utils_.addClass(i,"jw-plugin-dai")}beforePlay(){this.instream_||this._destroyed()||(clearTimeout(this.timeoutAdStart_),this.timeoutAdStart_=setTimeout((()=>{this._destroyed()||this.destroy()}),this.options_.requestTimeout),this.video_=this.player_.getConfig().mediaElement,this.instream_=this.player_.createInstream().init().setText(this.options_.loadingMessage),this._init().catch((()=>{this._stopBlocking()})))}pause(){this.video_&&this.video_.pause()}resume(){this.video_&&this.video_.play()}_stopBlocking(){this._destroyed()||(clearTimeout(this.timeoutAdStart_),this._destroyBlockingInstreamPlayer())}_init(){return u().then((()=>{if(this._destroyed())return null;const t=google.ima.dai.api.StreamEvent.Type,e=new google.ima.dai.api.UiSettings;let s;if(e.setLocale(this.options_.locale||this.player_.getConfig().language),this.streamManager_=new google.ima.dai.api.StreamManager(this.video_,this.adUiElement_,e),this.streamManagerEvents_=[t.CUEPOINTS_CHANGED,t.LOADED,t.AD_BREAK_STARTED,t.AD_BREAK_ENDED,t.AD_PERIOD_STARTED,t.AD_PERIOD_ENDED,t.STARTED,t.AD_PROGRESS,t.CLICK,t.COMPLETE,t.ERROR,t.PAUSED],this.streamManager_.addEventListener(this.streamManagerEvents_,this.streamEventHandler_,!1),this.isVOD_)s=new google.ima.dai.api.VODStreamRequest,s.contentSourceId=this.options_.cmsID,s.videoId=this.options_.videoID;else{if(!this.liveMode_)throw new Error("Invalid options");s=new google.ima.dai.api.LiveStreamRequest,s.assetKey=this.options_.assetKey,this.player_.off(r,this._handleMeta,this),this.player_.on(r,this._handleMeta,this)}s.apiKey=this.options_.apiKey,s.adTagParameters=this.options_.adTagParameters,this.streamManager_.requestStream(s)}))}_loadStream(t){const e=this.player_.getPlaylistItem(this.player_.getPlaylistIndex()),s=t.url;e.sources=[Object.assign(e.sources[0],{file:s})],this.instream_&&(this.instream_.replacePlaylistItem(e),this._stopBlocking())}_onStreamEvent(t){const r=google.ima.dai.api.StreamEvent.Type,n=this.daiUtils_.adEventObject(t.getAd());switch(t.type){case r.CUEPOINTS_CHANGED:{const e=this.adCues_=t.getStreamData().cuepoints;if(null!=e&&e.length){const t=e.filter((t=>t.start>0)).map((t=>({begin:t.start,text:this.options_.cuetext})));this.player_.setCues(t),this.player_.on(a,this._checkMidrolls,this)}break}case r.LOADED:clearTimeout(this.timeoutAdStart_),this._loadStream(t.getStreamData());break;case r.AD_PERIOD_STARTED:this._inAdPeriod=!0;break;case r.AD_BREAK_STARTED:if(this._adBreakStarted)return;this._adBreakStarted=!0,this.player_.getState()!==o&&this.player_.play(),this.player_.trigger("adBreakStart",n),this._setAdsMode(!0),function(t){if(E=t.getEnvironment(),!E.OS.iOS||E.Browser.version.major<10)return;const e=t.getContainer();e.requestFullscreen||e.webkitRequestFullscreen||(t.getFullscreen()&&(t.setFullscreen(!1),w=!0),D(t,"none"))}(this.player_),this.instream_.once("destroyed",(()=>{this.instream_=null,this.player_.trigger(s,n),this.daiUtils_.clearAd()}));break;case r.PAUSED:d=this.player_.play,E&&E.OS.iOS&&w&&(d(),w=!1);break;case r.AD_PERIOD_ENDED:case r.AD_BREAK_ENDED:if(this._inAdPeriod&&t.type!==r.AD_PERIOD_ENDED)return;this._adBreakStarted=!1,this._inAdPeriod=!1,this.instream_.off().once("destroyed",(()=>{this.instream_=null,this.player_.trigger(s,n),this.daiUtils_.clearAd()})),this._setAdsMode(!1),l=this.player_,D(l,"");break;case r.STARTED:{this.player_.trigger("adImpression",n);const t=this.daiUtils_.adEventObject(null);t.newstate=o,this.instream_.setState(t);break}case r.AD_PROGRESS:{const e=t.getStreamData().adProgressData;this._adBreakStarted||(e.adPeriodDuration&&this._onStreamEvent({type:"adPeriodStarted"}),this._onStreamEvent({type:"adBreakStarted"})),this._handleTime(e,n);break}case r.CLICK:this.player_.trigger("adClick",n),this.player_.pause();break;case r.COMPLETE:this.player_.trigger("adComplete",n),this.daiUtils_.clearAd();break;case r.ERROR:{const s=t.getStreamData().errorMessage,a=Object.assign({id:e,message:`Ad Error: ${s}`},n);this.player_.trigger(i,a),this.daiUtils_.clearAd();break}}var l,d}_checkMidrolls(t){if(!this.adCues_.length)return;const e=t.position;let s=-1;for(let t=0;t<this.adCues_.length&&!(this.adCues_[t].start>e);t++)s=t;s>-1&&!this.adCues_[s].played&&e!==this.adCues_[s].start&&(this.playerPositionBeforeMidroll_=e,this.player_.seek(this.adCues_[s].start))}_handleMeta(t){const{metadata:e}=t;this.streamManager_&&e&&t.metadataType&&("id3"===t.metadataType?this.streamManager_.onTimedMetadata(e):"dai-dash"!==t.metadataType&&"dai-hls"!==t.metadataType||this.streamManager_.processMetadata(e.type,e.messageData,e.start))}_setAdsMode(t){this._adsMode!==t&&(this._adsMode=t,this.player_.off(a,this._checkMidrolls,this),t?(this.utils_.addClass(this.playerContainer_,n),this.instream_||(this.instream_=this.player_.createInstream()),this.instream_.enableAdsMode(),this.liveMode_&&this.instream_.setText(this.options_.liveAdMessage),this.instream_.off(null,null,this).on("state",(t=>{this.instream_.setState(t)}),this),this.liveMode_&&(this.instream_.on(r,this._handleMeta,this),this._handleMeta({metadata:this.player_.getItemMeta()}))):(this.utils_.removeClass(this.playerContainer_,n),this.isVOD_&&this.player_.on(a,this._checkMidrolls,this),this._destroyBlockingInstreamPlayer(),this.playerPositionBeforeMidroll_&&(this.video_.currentTime=this.playerPositionBeforeMidroll_,this.playerPositionBeforeMidroll_=null)))}_handleTime(t,e){const{currentTime:s,duration:i}=t;if(e.position=s,e.duration=i,this.instream_.setTime(e),this.isVOD_){const e=t.adPosition,a=t.totalAds;let r=this.options_.admessage||"",n=this.options_.adcounterdynamic||"";r=r.replace(/xx/gi,`${Math.ceil(i-s)}`),a>1&&(n=n.replace(/__AD_POD_CURRENT__/g,`${e}`),n=n.replace(/__AD_POD_LENGTH__/g,`${a}`),r=`${n} ${r}`),this.instream_.setText(r)}}_destroyBlockingInstreamPlayer(){this.instream_&&(this.instream_.destroy(),this.instream_=null)}destroy(){clearTimeout(this.timeoutAdStart_),this._destroyed()||(this.player_.off(null,null,this),this.streamManager_&&(this.streamManager_.removeEventListener(this.streamManagerEvents_,this.streamEventHandler_,!1),this.streamManager_.reset()),this._stopBlocking(),this.options_=null,this.video_=null,this.player_=null,this.item_=null,this.streamManager_=null)}_destroyed(){return!this.item_}}var S="0.5.4";!function(t){if(t&&"undefined"!=typeof window){var e=document.createElement("style");e.setAttribute("media","screen"),e.innerHTML=t,document.head.appendChild(e)}}(".jw-plugin-dai{top:0;left:0;bottom:0}.jwplayer.jw-flag-ads-dai .jw-plugin-dai{width:100%;height:100%}.jwplayer.jw-flag-ads-dai .jw-controlbar{background:0 0!important;pointer-events:none}.jwplayer.jw-flag-ads-dai .jw-controlbar .jw-horizontal-volume-container{pointer-events:auto}.jwplayer.jw-flag-ads-dai .jw-controlbar .jw-icon{pointer-events:all}.jwplayer.jw-flag-ads-dai .jw-controlbar .jw-icon-fullscreen:not(.jw-fullscreen-ima){display:none}.jwplayer.jw-flag-ads-dai .jw-controlbar .jw-fullscreen-ima{display:flex}");(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)(t,"8.0",class{constructor(s,a,r){const n=s.utils,o=s.getConfig(),l=new _(a||{},o.localization.advertising);let d;u(n).catch(n.noop);const h=o.key;this.version=S,Object.assign(this,s.Events);const c=()=>{d&&(d.destroy(),d=null)};s.pauseAd=t=>{t="boolean"!=typeof t||t,d&&(t?d.pause():d.resume())};const m=(a,r)=>{c(),s.off(null,null,this),s.trigger(i,{id:e,client:t,message:a,code:900,adErrorCode:r,tag:""})},p=g(n,h,a);s.on("ready",(function(){o.localization=s.getConfig().localization,l.setLocalizationOptions(o.localization.advertising),u(n).catch((()=>{s.getAdBlock()&&m("Ad playback blocked by an ad blocker",2e4)})),p.catch((t=>{m(`Ad Error: ${t.message}`,60002)}))}),this).on("playlistItem",(t=>{c();const e=t.item,i=Object.assign({},l,e.daiSetting);(i.cmsID&&i.videoID||i.assetKey)&&(e.preload="none",d=new v(e,i,s,r),s.once("beforePlay",d.beforePlay,d))}),this).on("destroyPlugin",c,this),p.catch(n.noop),this.destroy=c}})}();
