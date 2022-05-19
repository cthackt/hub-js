/*! For license information please see main.2fe94f4a.js.LICENSE.txt */
"use strict";(self.webpackChunkhub=self.webpackChunkhub||[]).push([[179],{742:()=>{var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)},t=function(){return t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};function r(e){return"string"!=typeof e||"/"===(e=e.trim())[e.length-1]&&(e=e.slice(0,-1)),e}function n(e){return Object.keys(e).some((function(t){var r=e[t];if(!r)return!1;switch(r&&r.toParam&&(r=r.toParam()),r.constructor.name){case"Array":case"Object":case"Date":case"Function":case"Boolean":case"String":case"Number":return!1;default:return!0}}))}function o(e){var t={};return Object.keys(e).forEach((function(r){var n,o,s=e[r];if(s&&s.toParam&&(s=s.toParam()),s||0===s||"boolean"==typeof s||"string"==typeof s){var i;switch(s.constructor.name){case"Array":var a=null===(o=null===(n=s[0])||void 0===n?void 0:n.constructor)||void 0===o?void 0:o.name;i="Array"===a?s:"Object"===a?JSON.stringify(s):s.join(",");break;case"Object":i=JSON.stringify(s);break;case"Date":i=s.valueOf();break;case"Function":i=null;break;case"Boolean":i=s+"";break;default:i=s}(i||0===i||"string"==typeof i||Array.isArray(i))&&(t[r]=i)}})),t}function s(e,t){return Array.isArray(t)&&t[0]&&Array.isArray(t[0])?t.map((function(t){return s(e,t)})).join("&"):encodeURIComponent(e)+"="+encodeURIComponent(t)}function i(e){var t=o(e);return Object.keys(t).map((function(e){return s(e,t[e])})).join("&")}var a=function(e,t,r,n,o){e=e||"UNKNOWN_ERROR",t=t||"UNKNOWN_ERROR_CODE",this.name="ArcGISRequestError",this.message="UNKNOWN_ERROR_CODE"===t?e:t+": "+e,this.originalMessage=e,this.code=t,this.response=r,this.url=n,this.options=o};(a.prototype=Object.create(Error.prototype)).constructor=a;var u="@esri/arcgis-rest-js",h={httpMethod:"POST",params:{f:"json"}},p=function(r){function n(e,t,n,o,s){void 0===e&&(e="AUTHENTICATION_ERROR"),void 0===t&&(t="AUTHENTICATION_ERROR_CODE");var i=r.call(this,e,t,n,o,s)||this;return i.name="ArcGISAuthError",i.message="AUTHENTICATION_ERROR_CODE"===t?e:t+": "+e,i}return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}(n,r),n.prototype.retry=function(e,r){var n=this;void 0===r&&(r=3);var o=0,s=function(i,a){e(n.url,n.options).then((function(e){var r=t(t({},n.options),{authentication:e});return o+=1,c(n.url,r)})).then((function(e){i(e)})).catch((function(e){"ArcGISAuthError"===e.name&&o<r?s(i,a):"ArcGISAuthError"===e.name&&o>=r?a(n):a(e)}))};return new Promise((function(e,t){s(e,t)}))},n}(a);function c(e,r){void 0===r&&(r={params:{f:"json"}});var s=t(t(t({httpMethod:"POST"},h),r),{params:t(t({},h.params),r.params),headers:t(t({},h.headers),r.headers)}),c=[],d=[];if(s.fetch||"undefined"==typeof fetch?(c.push("`fetch`"),d.push("`node-fetch`")):s.fetch=fetch.bind(Function("return this")()),"undefined"==typeof Promise&&(c.push("`Promise`"),d.push("`es6-promise`")),"undefined"==typeof FormData&&(c.push("`FormData`"),d.push("`isomorphic-form-data`")),!s.fetch||"undefined"==typeof Promise||"undefined"==typeof FormData)throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing "+c.join(", ")+". We recommend installing the "+d.join(", ")+" modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");var f=s.httpMethod,l=s.authentication,m=s.rawResponse,k=t({f:"json"},s.params),g=null,w={method:f,credentials:s.credentials||"same-origin"};return s.headers&&s.headers["X-Esri-Auth-Client-Id"]&&e.indexOf("/oauth2/platformSelf")>-1&&(w.credentials="include"),(l?l.getToken(e,{fetch:s.fetch}).catch((function(t){return t.url=e,t.options=s,g=t,Promise.resolve("")})):Promise.resolve("")).then((function(r){r.length&&(k.token=r),l&&l.getDomainCredentials&&(w.credentials=l.getDomainCredentials(e));var a={};if("GET"===w.method){k.token&&s.hideToken&&"undefined"==typeof window&&(a["X-Esri-Authorization"]="Bearer "+k.token,delete k.token);var h=""===i(k)?e:e+"?"+i(k);s.maxUrlLength&&h.length>s.maxUrlLength||k.token&&s.hideToken?(w.method="POST",r.length&&s.hideToken&&(k.token=r,delete a["X-Esri-Authorization"])):e=h}var p=new RegExp("/items/.+/updateResources").test(e);return"POST"===w.method&&(w.body=function(e,t){var r=n(e)||t,s=o(e);if(r){var a=new FormData;return Object.keys(s).forEach((function(e){if("undefined"!=typeof Blob&&s[e]instanceof Blob){var t=s.fileName||s[e].name||e;a.append(e,s[e],t)}else a.append(e,s[e])})),a}return i(e)}(k,p)),w.headers=t(t({},a),s.headers),"undefined"!=typeof window||w.headers.referer||(w.headers.referer=u),n(k)||p||(w.headers["Content-Type"]="application/x-www-form-urlencoded"),s.fetch(e,w)})).then((function(t){if(!t.ok){var r=t.status,n=t.statusText;throw new a(n,"HTTP "+r,t,e,s)}if(m)return t;switch(k.f){case"json":case"geojson":return t.json();case"html":case"text":return t.text();default:return t.blob()}})).then((function(t){if("json"!==k.f&&"geojson"!==k.f||m)return t;var r=function(e,t,r,n,o){if(e.code>=400){var s=e.message,i=e.code;throw new a(s,i,e,t,n)}if(e.error){var u=e.error,h=(s=u.message,i=u.code,u.messageCode),c=h||i||"UNKNOWN_ERROR_CODE";if(498===i||499===i||"GWM_0003"===h||400===i&&"Unable to generate token."===s)throw o||new p(s,c,e,t,n);throw new a(s,c,e,t,n)}if("failed"===e.status||"failure"===e.status){s=void 0,i="UNKNOWN_ERROR_CODE";try{s=JSON.parse(e.statusMessage).message,i=JSON.parse(e.statusMessage).code}catch(t){s=e.statusMessage||e.message}throw new a(s,i,e,t,n)}return e}(t,e,0,s,g);if(g){var n=e.toLowerCase().split(/\/rest(\/admin)?\/services\//)[0];s.authentication.federatedServers[n]={token:[],expires:new Date(Date.now()+864e5)},g=null}return r}))}function d(e,t){var r=t;return"undefined"!=typeof window&&window.location&&window.location.host?r.params.referer=window.location.host:r.params.referer=u,c(e,r)}function f(e,t){var r=t;return r.rawResponse=!1,c(e,r).then((function(e){var t={token:e.access_token,username:e.username,expires:new Date(Date.now()+(1e3*e.expires_in-1e3)),ssl:!0===e.ssl};return e.refresh_token&&(t.refreshToken=e.refresh_token),t}))}var l=/^https?:\/\/(\S+)\.arcgis\.com.+/;function m(e){return l.test(e)}function k(e){if(!l.test(e))return null;var t=e.match(l)[1].split(".").pop();return t.includes("dev")?"dev":t.includes("qa")?"qa":"production"}var g=function(){function e(e){if(this.clientId=e.clientId,this._refreshToken=e.refreshToken,this._refreshTokenExpires=e.refreshTokenExpires,this.username=e.username,this.password=e.password,this._token=e.token,this._tokenExpires=e.tokenExpires,this.portal=e.portal?r(e.portal):"https://www.arcgis.com/sharing/rest",this.ssl=e.ssl,this.provider=e.provider||"arcgis",this.tokenDuration=e.tokenDuration||20160,this.redirectUri=e.redirectUri,this.refreshTokenTTL=e.refreshTokenTTL||20160,this.server=e.server,this.federatedServers={},this.trustedDomains=[],e.server){var t=this.getServerRootUrl(e.server);this.federatedServers[t]={token:e.token,expires:e.tokenExpires}}this._pendingTokenRequests={}}return Object.defineProperty(e.prototype,"token",{get:function(){return this._token},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tokenExpires",{get:function(){return this._tokenExpires},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"refreshToken",{get:function(){return this._refreshToken},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"refreshTokenExpires",{get:function(){return this._refreshTokenExpires},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trustedServers",{get:function(){return console.log("DEPRECATED: use federatedServers instead"),this.federatedServers},enumerable:!1,configurable:!0}),e.beginOAuth2=function(r,n){void 0===n&&(n=window),r.duration&&console.log("DEPRECATED: 'duration' is deprecated - use 'expiration' instead");var o,s=t({portal:"https://www.arcgis.com/sharing/rest",provider:"arcgis",expiration:20160,popup:!0,popupWindowFeatures:"height=400,width=600,menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes",state:r.clientId,locale:""},r),a=s.portal,u=s.provider,h=s.clientId,c=s.expiration,d=s.redirectUri,f=s.popup,l=s.popupWindowFeatures,m=s.state,k=s.locale,g=s.params;if(o="arcgis"===u?a+"/oauth2/authorize?client_id="+h+"&response_type=token&expiration="+(r.duration||c)+"&redirect_uri="+encodeURIComponent(d)+"&state="+m+"&locale="+k:a+"/oauth2/social/authorize?client_id="+h+"&socialLoginProviderName="+u+"&autoAccountCreateForSocial=true&response_type=token&expiration="+(r.duration||c)+"&redirect_uri="+encodeURIComponent(d)+"&state="+m+"&locale="+k,g&&(o=o+"&"+i(g)),f){var w,v=((w={promise:null,resolve:null,reject:null}).promise=new Promise((function(e,t){w.resolve=e,w.reject=t})),w);return n["__ESRI_REST_AUTH_HANDLER_"+h]=function(t,r){if(t){var n=JSON.parse(t);v.reject(new p(n.errorMessage,n.error))}else if(r){var o=JSON.parse(r);v.resolve(new e({clientId:h,portal:a,ssl:o.ssl,token:o.token,tokenExpires:new Date(o.expires),username:o.username}))}},n.open(o,"oauth-window",l),v.promise}n.location.href=o},e.completeOAuth2=function(r,n){void 0===n&&(n=window);var o=t({portal:"https://www.arcgis.com/sharing/rest",popup:!0},r),s=o.portal,i=o.clientId,a=o.popup;function u(t,r){try{var o=void 0,u="__ESRI_REST_AUTH_HANDLER_"+i;if(a&&(n.opener?n.opener.parent&&n.opener.parent[u]?o=n.opener.parent[u]:n.opener&&n.opener[u]&&(o=n.opener[u]):n!==n.parent&&n.parent&&n.parent[u]&&(o=n.parent[u]),o))return o(t?JSON.stringify(t):void 0,JSON.stringify(r)),void n.close()}catch(e){throw new p('Unable to complete authentication. It\'s possible you specified popup based oAuth2 but no handler from "beginOAuth2()" present. This generally happens because the "popup" option differs between "beginOAuth2()" and "completeOAuth2()".')}if(t)throw new p(t.errorMessage,t.error);return new e({clientId:i,portal:s,ssl:r.ssl,token:r.token,tokenExpires:r.expires,username:r.username})}var h=n.location.hash.replace(/^#/,"").split("&").reduce((function(e,t){var r=function(e){var t=e.split("="),r=t[0],n=t[1];return{key:decodeURIComponent(r),value:decodeURIComponent(n)}}(t),n=r.key,o=r.value;return e[n]=o,e}),{});if(!h.access_token){var c=void 0,d="Unknown error";return h.error&&(c=h.error,d=h.error_description),u({error:c,errorMessage:d})}var f=h.access_token,l=new Date(Date.now()+1e3*parseInt(h.expires_in,10)-6e4),m=h.username;return u(void 0,{token:f,expires:l,ssl:"true"===h.ssl,username:m})},e.fromParent=function(t,r){var n;return!r&&window&&(r=window),new Promise((function(o,s){n=function(t){if(t.source===r.parent&&t.data)try{return o(e.parentMessageHandler(t))}catch(e){return s(e)}},r.addEventListener("message",n,!1),r.parent.postMessage({type:"arcgis:auth:requestCredential"},t)})).then((function(e){return r.removeEventListener("message",n,!1),e}))},e.authorize=function(e,r){e.duration&&console.log("DEPRECATED: 'duration' is deprecated - use 'expiration' instead");var n=t({portal:"https://arcgis.com/sharing/rest",expiration:20160},e),o=n.portal,s=n.clientId,i=n.expiration,a=n.redirectUri;r.writeHead(301,{Location:o+"/oauth2/authorize?client_id="+s+"&expiration="+(e.duration||i)+"&response_type=code&redirect_uri="+encodeURIComponent(a)}),r.end()},e.exchangeAuthorizationCode=function(r,n){var o=t({portal:"https://www.arcgis.com/sharing/rest",refreshTokenTTL:20160},r),s=o.portal,i=o.clientId,a=o.redirectUri,u=o.refreshTokenTTL;return f(s+"/oauth2/token",{params:{grant_type:"authorization_code",client_id:i,redirect_uri:a,code:n}}).then((function(t){return new e({clientId:i,portal:s,ssl:t.ssl,redirectUri:a,refreshToken:t.refreshToken,refreshTokenTTL:u,refreshTokenExpires:new Date(Date.now()+60*(u-1)*1e3),token:t.token,tokenExpires:t.expires,username:t.username})}))},e.deserialize=function(t){var r=JSON.parse(t);return new e({clientId:r.clientId,refreshToken:r.refreshToken,refreshTokenExpires:new Date(r.refreshTokenExpires),username:r.username,password:r.password,token:r.token,tokenExpires:new Date(r.tokenExpires),portal:r.portal,ssl:r.ssl,tokenDuration:r.tokenDuration,redirectUri:r.redirectUri,refreshTokenTTL:r.refreshTokenTTL})},e.fromCredential=function(t){var r=void 0===t.ssl||t.ssl,n=t.expires||Date.now()+72e5;return new e({portal:t.server.includes("sharing/rest")?t.server:t.server+"/sharing/rest",ssl:r,token:t.token,username:t.userId,tokenExpires:new Date(n)})},e.parentMessageHandler=function(t){if("arcgis:auth:credential"===t.data.type)return e.fromCredential(t.data.credential);if("arcgis:auth:error"===t.data.type){var r=new Error(t.data.error.message);throw r.name=t.data.error.name,r}throw new Error("Unknown message type.")},e.prototype.toCredential=function(){return{expires:this.tokenExpires.getTime(),server:this.portal,ssl:this.ssl,token:this.token,userId:this.username}},e.prototype.getUser=function(e){var r=this;if(this._pendingUserRequest)return this._pendingUserRequest;if(this._user)return Promise.resolve(this._user);var n=this.portal+"/community/self",o=t(t({httpMethod:"GET",authentication:this},e),{rawResponse:!1});return this._pendingUserRequest=c(n,o).then((function(e){return r._user=e,r._pendingUserRequest=null,e})),this._pendingUserRequest},e.prototype.getPortal=function(e){var r=this;if(this._pendingPortalRequest)return this._pendingPortalRequest;if(this._portalInfo)return Promise.resolve(this._portalInfo);var n=this.portal+"/portals/self",o=t(t({httpMethod:"GET",authentication:this},e),{rawResponse:!1});return this._pendingPortalRequest=c(n,o).then((function(e){return r._portalInfo=e,r._pendingPortalRequest=null,e})),this._pendingPortalRequest},e.prototype.getUsername=function(){return this.username?Promise.resolve(this.username):this._user?Promise.resolve(this._user.username):this.getUser().then((function(e){return e.username}))},e.prototype.getToken=function(e,t){return n=e,o=m(r=this.portal),s=m(n),i=k(r),a=k(n),o&&s&&i===a||new RegExp(this.portal,"i").test(e)?this.getFreshToken(t):this.getTokenForServer(e,t);var r,n,o,s,i,a},e.prototype.validateAppAccess=function(e){return this.getToken(this.portal).then((function(t){return function(e,t,r){return void 0===r&&(r="https://www.arcgis.com/sharing/rest"),c(r+"/oauth2/validateAppAccess",{method:"POST",params:{f:"json",client_id:t,token:e}})}(t,e)}))},e.prototype.toJSON=function(){return{clientId:this.clientId,refreshToken:this.refreshToken,refreshTokenExpires:this.refreshTokenExpires,username:this.username,password:this.password,token:this.token,tokenExpires:this.tokenExpires,portal:this.portal,ssl:this.ssl,tokenDuration:this.tokenDuration,redirectUri:this.redirectUri,refreshTokenTTL:this.refreshTokenTTL}},e.prototype.serialize=function(){return JSON.stringify(this)},e.prototype.enablePostMessageAuth=function(e,t){!t&&window&&(t=window),this._hostHandler=this.createPostMessageHandler(e),t.addEventListener("message",this._hostHandler,!1)},e.prototype.disablePostMessageAuth=function(e){!e&&window&&(e=window),e.removeEventListener("message",this._hostHandler,!1)},e.prototype.refreshSession=function(e){return this._user=null,this.username&&this.password?this.refreshWithUsernameAndPassword(e):this.clientId&&this.refreshToken?this.refreshWithRefreshToken():Promise.reject(new p("Unable to refresh token."))},e.prototype.getServerRootUrl=function(e){var t=r(e).split(/\/rest(\/admin)?\/services(?:\/|#|\?|$)/)[0].match(/(https?:\/\/)(.+)/),n=(t[0],t[1]),o=t[2].split("/"),s=o[0],i=o.slice(1);return""+n+s.toLowerCase()+"/"+i.join("/")},e.prototype.getDomainCredentials=function(e){return this.trustedDomains&&this.trustedDomains.length&&this.trustedDomains.some((function(t){return e.startsWith(t)}))?"include":"same-origin"},e.prototype.createPostMessageHandler=function(e){var t=this;return function(r){var n=e.indexOf(r.origin)>-1,o="arcgis:auth:requestCredential"===r.data.type,s=t.tokenExpires.getTime()>Date.now();if(n&&o){var i={};if(s){var a=t.toCredential();a.server=a.server.replace("/sharing/rest",""),i={type:"arcgis:auth:credential",credential:a}}else i={type:"arcgis:auth:error",error:{name:"tokenExpiredError",message:"Session token was expired, and not returned to the child application"}};r.source.postMessage(i,r.origin)}}},e.prototype.getTokenForServer=function(e,t){var n=this,o=this.getServerRootUrl(e),s=this.federatedServers[o];return s&&s.expires&&s.expires.getTime()>Date.now()?Promise.resolve(s.token):(this._pendingTokenRequests[o]||(this._pendingTokenRequests[o]=this.fetchAuthorizedDomains().then((function(){return c(o+"/rest/info",{credentials:n.getDomainCredentials(e)}).then((function(s){if(s.owningSystemUrl){if(i=s.owningSystemUrl,a=n.portal,u=r(function(e){if(!l.test(e))return e;switch(k(e)){case"dev":return"https://devext.arcgis.com/sharing/rest";case"qa":return"https://qaext.arcgis.com/sharing/rest";default:return"https://www.arcgis.com/sharing/rest"}}(a)).replace(/https?:\/\//,""),h=r(i).replace(/https?:\/\//,""),new RegExp(h,"i").test(u))return c(s.owningSystemUrl+"/sharing/rest/info",t);throw new p(e+" is not federated with "+n.portal+".","NOT_FEDERATED")}var i,a,u,h;if(s.authInfo&&void 0!==n.federatedServers[o])return Promise.resolve({authInfo:s.authInfo});throw new p(e+" is not federated with any portal and is not explicitly trusted.","NOT_FEDERATED")})).then((function(e){return e.authInfo.tokenServicesUrl})).then((function(t){return n.token&&n.tokenExpires.getTime()>Date.now()?d(t,{params:{token:n.token,serverUrl:e,expiration:n.tokenDuration,client:"referer"}}):d(t,{params:{username:n.username,password:n.password,expiration:n.tokenDuration,client:"referer"}}).then((function(e){return n._token=e.token,n._tokenExpires=new Date(e.expires),e}))})).then((function(e){return n.federatedServers[o]={expires:new Date(e.expires),token:e.token},delete n._pendingTokenRequests[o],e.token}))}))),this._pendingTokenRequests[o])},e.prototype.getFreshToken=function(e){var t=this;return this.token&&!this.tokenExpires||this.token&&this.tokenExpires&&this.tokenExpires.getTime()>Date.now()?Promise.resolve(this.token):(this._pendingTokenRequests[this.portal]||(this._pendingTokenRequests[this.portal]=this.refreshSession(e).then((function(e){return t._pendingTokenRequests[t.portal]=null,e.token}))),this._pendingTokenRequests[this.portal])},e.prototype.refreshWithUsernameAndPassword=function(e){var r=this,n=t({params:{username:this.username,password:this.password,expiration:this.tokenDuration}},e);return d(this.portal+"/generateToken",n).then((function(e){return r._token=e.token,r._tokenExpires=new Date(e.expires),r}))},e.prototype.refreshWithRefreshToken=function(e){var r=this;if(this.refreshToken&&this.refreshTokenExpires&&this.refreshTokenExpires.getTime()<Date.now())return this.refreshRefreshToken(e);var n=t({params:{client_id:this.clientId,refresh_token:this.refreshToken,grant_type:"refresh_token"}},e);return f(this.portal+"/oauth2/token",n).then((function(e){return r._token=e.token,r._tokenExpires=e.expires,r}))},e.prototype.refreshRefreshToken=function(e){var r=this,n=t({params:{client_id:this.clientId,refresh_token:this.refreshToken,redirect_uri:this.redirectUri,grant_type:"exchange_refresh_token"}},e);return f(this.portal+"/oauth2/token",n).then((function(e){return r._token=e.token,r._tokenExpires=e.expires,r._refreshToken=e.refreshToken,r._refreshTokenExpires=new Date(Date.now()+60*(r.refreshTokenTTL-1)*1e3),r}))},e.prototype.fetchAuthorizedDomains=function(){var e=this;return this.server||!this.portal?Promise.resolve(this):this.getPortal().then((function(t){return t.authorizedCrossOriginDomains&&t.authorizedCrossOriginDomains.length&&(e.trustedDomains=t.authorizedCrossOriginDomains.filter((function(e){return!e.startsWith("http://")})).map((function(e){return e.startsWith("https://")?e:"https://"+e}))),e}))},e}(),w=new g({username:"sccwrp",password:"L[k9B47P&H5Y"});console.log(w),console.log("hello")}},e=>{e(e.s=742)}]);