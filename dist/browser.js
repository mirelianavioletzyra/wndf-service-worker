(()=>{var At=Object.create,z=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var Tt=Object.getOwnPropertyNames,Ne=Object.getOwnPropertySymbols,St=Object.getPrototypeOf,De=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var me=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))De.call(t,r)&&me(e,r,t[r]);if(Ne)for(var r of Ne(t))Ot.call(t,r)&&me(e,r,t[r]);return e};var Rt=e=>z(e,"__esModule",{value:!0});var Ct=(e,t)=>()=>(e&&(t=e(e=0)),t),v=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Nt=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Tt(t))!De.call(e,i)&&i!=="default"&&z(e,i,{get:()=>t[i],enumerable:!(r=gt(t,i))||r.enumerable});return e},Dt=e=>Nt(Rt(z(e!=null?At(St(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var c=Ct(()=>{});var ae=v(ne=>{c();"use strict";Object.defineProperty(ne,"__esModule",{value:!0});async function mt(){if(!navigator.serviceWorker||!navigator.serviceWorker.ready)throw new Error("service worker not supported");return await navigator.serviceWorker.ready,navigator.serviceWorker.controller?navigator.serviceWorker.controller:new Promise((e,t)=>{navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller?e(navigator.serviceWorker.controller):t(new Error("service worker not supported"))})})}ne.default=mt});var J=v(a=>{c();"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.FAR_FUTURE_TTL=a.DEFLATE_ENCODING=a.GZIP_ENCODING=a.BROTLI_ENCODING=a.IS_BROWSER=a.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT=a.EDGIO_PREFETCH_CDN_SW_PATH=a.EDGIO_PREFETCH_CDN_PATH=a.EDGIO_PREFETCH_CDN_BASE_PATH=a.EDGIO_CACHE_MANIFEST_JS_VAR_NAME=a.EDGIO_CACHE_MANIFEST_PATH=a.HOSTS_NOINDEX_PERMALINK_REGEX=a.ROUTES_NOINDEX_GROUP=a.ROUTES_CATCH_GROUP=a.ROUTES_FALLBACK=a.METHOD_QUERY_PARAM=a.POST_BODY_QUERY_PARAM=a.HEAD_QUERY_PARAM=a.DEVTOOLS_PREFETCH_QUERY_PARAM=a.PREFETCH_TTL_PARAM=a.PREFETCH_QUERY_PARAM=a.THROTTLED_QUERY_PARAM=a.CACHING_DEBUG_CACHEABLE=a.CACHING_DEBUG_STATUS=a.CACHING_DEBUG_HEADERS=a.CACHEABLE_METHODS=a.CACHING_STATUS=a.HTTP_HEADERS=a.HTTP_METHODS=a.JS_BACKEND_HOSTNAME=a.BACKENDS=a.ACTIONS=a.EDGIO_UNCACHED_PREFETCH_STATUS=a.EDGIO_TOO_MANY_HEADERS_STATUS_CODE=a.EDGIO_MAX_USER_HEADERS_ALLOWED=a.EDGIO_CLOUD_FUNCTIONS_HINTS=a.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER=a.EDGIO_HEADERS_PREFIX=a.EDGIO_DEPLOYMENT_TYPE_AWS=a.EDGIO_EDGE_FUNCTION_ENV_VARIABLES=a.EDGIO_ENV_VARIABLES=a.EDGIO_ASSET_ALIASES_FILE=a.EDGIO_CONFIG_FILE=void 0;a.EDGIO_CONFIG_FILE="edgio.config.js";a.EDGIO_ASSET_ALIASES_FILE="asset-aliases.json";a.EDGIO_ENV_VARIABLES={config:"EDGIO_CONFIG",internalConfig:"EDGIO_INTERNAL_CONFIG",deploymentType:"EDGIO_DEPLOYMENT_TYPE",versionOverride:"EDGIO_VERSION_OVERRIDE",productionBuild:"EDGIO_PRODUCTION_BUILD",local:"EDGIO_LOCAL",cache:"EDGIO_CACHE",permalinkHost:"EDGIO_PERMALINK_HOST",imageOptimizerHost:"EDGIO_IMAGE_OPTIMIZER_HOST"};a.EDGIO_EDGE_FUNCTION_ENV_VARIABLES={path:"__EDGE_FUNCTION_PATH__",quickjsBytecodeBase64:"__EDGE_FUNCTION_QUICKJS_BYTECODE_BASE64__"};a.EDGIO_DEPLOYMENT_TYPE_AWS="AWS";a.EDGIO_HEADERS_PREFIX="x-edg-";a.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER="x-cloud-functions-hint";a.EDGIO_CLOUD_FUNCTIONS_HINTS={app:"app",compute:"compute",redirect:"redirect",proxy:"proxy"};a.EDGIO_MAX_USER_HEADERS_ALLOWED=70;a.EDGIO_TOO_MANY_HEADERS_STATUS_CODE=542;a.EDGIO_UNCACHED_PREFETCH_STATUS=412;a.ACTIONS={setHeader:"set-header",updateHeader:"update-header",removeHeader:"remove-header",syntheticRes:"synthetic-response",updatePath:"update-path",proxy:"proxy",addCookie:"add-cookie",updateCookie:"update-cookie",removeCookie:"remove-cookie"};a.BACKENDS={js:"__js__",static:"__static__",permanentStatic:"__permanent_static__",imageOptimizer:"__image_optimizer__"};a.JS_BACKEND_HOSTNAME="127.0.0.1";a.HTTP_METHODS={head:"head",get:"get",post:"post",delete:"delete",put:"put",patch:"patch",options:"options"};a.HTTP_HEADERS={accept:"accept",acceptCh:"accept-CH",acceptEncoding:"accept-encoding",authorization:"authorization",cacheControl:"cache-control",contentEncoding:"content-encoding",contentLength:"content-length",contentType:"content-type",cookie:"cookie",expires:"expires",host:"host",location:"location",range:"range",serverTiming:"server-timing",setCookie:"set-cookie",userAgent:"user-agent",vary:"vary",via:"via",transferEncoding:"transfer-encoding",strictTransportSecurity:"strict-transport-security",referrerPolicy:"referrer-policy",featurePolicy:"feature-policy",xEcDebug:"x-ec-debug",xForwardedFor:"x-forwarded-for",xFrameOptions:"x-frame-options",xXssProtection:"x-xss-protection",xContentTypeOptions:"x-content-type-options",xRequestId:"x-request-id",xEcUuid:"x-ec-uuid",xSwCacheControl:"x-sw-cache-control",xEdgeBrowser:"x-edg-browser",xEdgeCacheControl:"x-edg-cache-control",xEdgeCachingStatus:"x-edg-caching-status",xEdgeClientIp:"x-edg-client-ip",xEdgeComponents:"x-edg-components",xEdgeDestination:"x-edg-destination",xEdgeDevice:"x-edg-device",xEdgeDeviceIsBot:"x-edg-device-is-bot",xEdgeGeoCity:"x-edg-geo-city",xEdgeGeoCountryCode:"x-edg-geo-country-code",xEdgeGeoLatitude:"x-edg-geo-latitude",xEdgeGeoLongitude:"x-edg-geo-longitude",xEdgeGeoPostalCode:"x-edg-geo-postal-code",xEdgeMatchedRoutes:"x-edg-matched-routes",xEdgeProtocol:"x-edg-protocol",xEdgeRoute:"x-edg-route",xEdgeStatus:"x-edg-status",xEdgeSurrogateKey:"x-edg-surrogate-key",xEdgeT:"x-edg-t",xEdgeUserT:"x-edg-user-t",xEdgeVendor:"x-edg-vendor",xEdgeVersion:"x-edg-version",xEdgServerlessError:"x-edg-serverless-error",x0ClientIp:"x-0-client-ip",x0Protocol:"x-0-protocol",x0Version:"x-0-version",xEcEdgeIoDebug:"x-ec-edgeio-debug",xEcEdgeIoDisable:"x-ec-edgeio-disable",xEdgeIoInfo:"x-edgeio-info",xEdgeIoStatus:"x-edgeio-status",xEdgeIoError:"x-edgeio-error"};a.CACHING_STATUS={cached:"cached",hit:"hit",bypassed:"bypassed",private:"private",method:"method",bodyTooBig:"body-too-big",code:"code",setCookie:"set-cookie",noMaxAge:"no-max-age"};a.CACHEABLE_METHODS=new Set(["get","head"]);a.CACHING_DEBUG_HEADERS={cache:"x-ec-cache",checkCacheable:"x-ec-check-cacheable",cacheState:"x-ec-cache-state",cacheKey:"x-ec-cache-key"};a.CACHING_DEBUG_STATUS={configNoCache:"CONFIG_NOCACHE",none:"NONE",tcpClientRefreshMiss:"TCP_CLIENT_REFRESH_MISS",tcpExpiredHit:"TCP_EXPIRED_HIT",tcpExpiredMiss:"TCP_EXPIRED_MISS",tcpHit:"TCP_HIT",tcpMiss:"TCP_MISS",tcpPartialHit:"TCP_PARTIAL_HIT",uncacheable:"UNCACHEABLE"};a.CACHING_DEBUG_CACHEABLE={yes:"YES",no:"NO"};a.THROTTLED_QUERY_PARAM="edgio_prefetch";a.PREFETCH_QUERY_PARAM=a.THROTTLED_QUERY_PARAM;a.PREFETCH_TTL_PARAM="edgio_prefetch_ttl";a.DEVTOOLS_PREFETCH_QUERY_PARAM="edgio_dt_pf";a.HEAD_QUERY_PARAM="edgio_head";a.POST_BODY_QUERY_PARAM="pref_edgio_body";a.METHOD_QUERY_PARAM="pref_edgio_method";a.ROUTES_FALLBACK="fallback";a.ROUTES_CATCH_GROUP="catch";a.ROUTES_NOINDEX_GROUP="noindex";a.HOSTS_NOINDEX_PERMALINK_REGEX=/\.edgio\.link|\.edgio-perma\.link/;a.EDGIO_CACHE_MANIFEST_PATH="/__edgio__/cache-manifest.js";a.EDGIO_CACHE_MANIFEST_JS_VAR_NAME="__EDGIO_CACHE_MANIFEST__";a.EDGIO_PREFETCH_CDN_BASE_PATH="/__edgio__/prefetch";a.EDGIO_PREFETCH_CDN_PATH=`${a.EDGIO_PREFETCH_CDN_BASE_PATH}/:path*`;a.EDGIO_PREFETCH_CDN_SW_PATH="/__edgio__service_worker_:version.js";a.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT="cache-manifest-ignore";a.IS_BROWSER=typeof window!="undefined";a.BROTLI_ENCODING="br";a.GZIP_ENCODING="gzip";a.DEFLATE_ENCODING="deflate";a.FAR_FUTURE_TTL="1y"});var be=v(se=>{c();"use strict";Object.defineProperty(se,"__esModule",{value:!0});function bt(){return window.location.hostname}se.default=bt});var ue=v(ce=>{c();"use strict";Object.defineProperty(ce,"__esModule",{value:!0});var yt=W();function Mt(){let{serviceWorker:e}=navigator;typeof e=="undefined"||window.swEventListenerAdded||(e.addEventListener("message",t=>{t.data.action==="prefetch"&&(0,yt.prefetch)(t.data.url,t.data.as,t.data.options)}),window.swEventListenerAdded=!0)}ce.default=Mt});var W=v(N=>{c();"use strict";var Pt=N&&N.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,o)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),It=N&&N.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Ht=N&&N.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&Pt(t,e,r);return It(t,e),t},ye=N&&N.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(N,"__esModule",{value:!0});N.prefetch=N.configure=void 0;var wt=ye(ae()),k=J(),xt=ye(be()),Lt=2**13,Me=new Set,Pe={includeCacheMisses:!1,cacheHost:void 0,forcePrefetchRatio:0},L=Pe;function Ut(e){L=m(m({},Pe),e)}N.configure=Ut;async function Gt(e,t="fetch",r={cors:"anonymous",includeCacheMisses:L.includeCacheMisses,forcePrefetchRatio:L.forcePrefetchRatio}){var i,o,n,s,d;if(window.swEventListenerAdded||(await Promise.resolve().then(()=>Ht(ue()))).default(),typeof e=="undefined"){console.error("prefetch() called with an undefined url");return}r.cors=(i=r.cors)!==null&&i!==void 0?i:"anonymous",r.includeCacheMisses=(n=(o=r.includeCacheMisses)!==null&&o!==void 0?o:L.includeCacheMisses)!==null&&n!==void 0?n:!1,r.forcePrefetchRatio=(d=(s=r.forcePrefetchRatio)!==null&&s!==void 0?s:L.forcePrefetchRatio)!==null&&d!==void 0?d:0,r.headers&&console.warn("The prefetch `headers` configuration option has been removed as it is not compatible with the service-worker prefetch mechanism. Please set headers in your routes.js file with `setRequestHeader` if required.");let u=Ft(e,r);if(typeof TextEncoder!="undefined"&&new TextEncoder().encode(u).length>Lt){console.warn(`URL is too many characters to prefetch and cache: ${u}`);return}if(Me.has(u)){let l=document.querySelector(`link[href='${u}']`);l==null||l.remove()}Me.add(u),await(0,wt.default)();let _=document.createElement("link"),{relList:f}=_;_.setAttribute("href",u),r.cors&&_.setAttribute("crossorigin",r.cors),_.setAttribute("rel",f.supports("preload")&&!f.supports("prefetch")?"preload":"prefetch"),_.setAttribute("as",t),document.head.append(_)}N.prefetch=Gt;function Ft(e,t){let{body:r,method:i,maxAgeSeconds:o}=t,n=new URL(e,window.origin);if(n.hostname===(0,xt.default)()){if(L.cacheHost){let s=new URL(`https://${L.cacheHost}`);n.hostname=s.hostname,n.protocol=s.protocol,n.port=s.port}q(n,k.DEVTOOLS_PREFETCH_QUERY_PARAM,"1"),Bt(n,t)}return r&&q(n,k.POST_BODY_QUERY_PARAM,r),i&&q(n,k.METHOD_QUERY_PARAM,i),o&&o>0&&q(n,k.PREFETCH_TTL_PARAM,o.toString()),n.toString()}function q(e,t,r){let i=e.search.length?"&":"?";e.search+=`${i}${encodeURIComponent(t)}=${encodeURIComponent(r)}`}function Bt(e,t){!t.includeCacheMisses&&Vt(t)&&q(e,k.THROTTLED_QUERY_PARAM,"1")}function Vt(e){return!e.forcePrefetchRatio||Math.random()>e.forcePrefetchRatio}});var Ie=v(le=>{c();"use strict";Object.defineProperty(le,"__esModule",{value:!0});function Wt(){return navigator.userAgent}le.default=Wt});var we=v(I=>{c();"use strict";var kt=I&&I.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(I,"__esModule",{value:!0});I.isSafariPrivateWindow=I.isSafari=void 0;var qt=kt(Ie()),de=null;function He(){return de==null&&(de=/^((?!chrome|android).)*safari/i.test((0,qt.default)())),de}I.isSafari=He;function jt(){if(!He())return!1;try{return window.openDatabase(null,null,null,null),!1}catch(e){return!0}}I.isSafariPrivateWindow=jt});var Ue=v(U=>{c();"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.unregisterServiceWorker=U.registerServiceWorker=void 0;var Qt=we();function Yt(e){if((0,Qt.isSafariPrivateWindow)()){console.log("skipping service worker in Safari private window"),Le();return}"serviceWorker"in navigator&&(document.readyState==="complete"?xe(e):window.addEventListener("load",()=>{xe(e)}))}U.registerServiceWorker=Yt;function xe(e,t="./"){navigator.serviceWorker.register(e,{scope:t}).then(r=>{r.onupdatefound=()=>{let i=r.installing;!i||(i.onstatechange=()=>{console.log("[edgio service worker] state:",i.state),i.state==="installed"&&(navigator.serviceWorker.controller?document.dispatchEvent(new CustomEvent("sw-update-available")):console.log("Content is cached for offline use."))})}}).catch(r=>{console.error("Error during service worker registration:",r)})}function Le(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}U.unregisterServiceWorker=Le});var fe=v(_e=>{c();"use strict";Object.defineProperty(_e,"__esModule",{value:!0});function Xt(e,t){if(typeof IntersectionObserver=="undefined")return;let r=new IntersectionObserver(i=>{i[0].intersectionRatio>0&&(r.disconnect(),t(e))},{threshold:.01});r.observe(e)}_e.default=Xt});var Be=v(j=>{c();"use strict";var $t=j&&j.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(j,"__esModule",{value:!0});var Ge=$t(fe()),Ee,Fe=new Set;function Kt(e){typeof MutationObserver!="undefined"&&(!e||!e.length||(e.forEach(t=>Fe.add(t)),Ee||(Ee=new MutationObserver(t=>{for(let r of t)[...Fe].forEach(i=>{zt(r.addedNodes,i.selector).forEach(o=>(0,Ge.default)(o,i.callback))})})),Ee.observe(document.body,{subtree:!0,childList:!0}),e.forEach(t=>{document.querySelectorAll(t.selector).forEach(r=>{let i=r;(0,Ge.default)(i,t.callback)})})))}j.default=Kt;function zt(e,t){let r=new Set;return Array.from(e).forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){let o=i;o.matches(t)?r.add(o):o.querySelectorAll(t).forEach(s=>r.add(s))}}),r}});var We=v(ve=>{c();"use strict";Object.defineProperty(ve,"__esModule",{value:!0});var Ve=J();async function Jt(e){return new Promise(t=>{let r=document.createElement("script");r.type="text/javascript",r.async=!0,r.onload=t,(e==null?void 0:e.cacheHost)?r.src=new URL(`https://${e.cacheHost}${Ve.EDGIO_CACHE_MANIFEST_PATH}`).toString():r.src=Ve.EDGIO_CACHE_MANIFEST_PATH,document.getElementsByTagName("head")[0].appendChild(r)})}ve.default=Jt});var ke=v(Z=>{c();"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.fromTimeUnitAbbrev=void 0;var Zt=e=>{var t;let[r,i,o]=(t=e.match(/(\d+)([a-z]+)/i))!==null&&t!==void 0?t:[],n={s:1,h:60*60,d:60*60*24,m:60*60*24*30.437,y:60*60*24*30.437*12};return Number(i)*n[o]};Z.fromTimeUnitAbbrev=Zt});var he=v(E=>{c();"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.NOT_IN=E.IN=E.LESS_THAN_OR_EQUALS=E.LESS_THAN=E.GREATER_THAN_OR_EQUALS=E.GREATER_THAN=E.NOT_MATCHES=E.MATCHES=E.NOT_EQUALS=E.NOT_EQUALS_EXPRESS=E.OR=E.AND=E.EQUALS=E.EQUALS_EXPRESS=void 0;E.EQUALS_EXPRESS="==";E.EQUALS="===";E.AND="and";E.OR="or";E.NOT_EQUALS_EXPRESS="!=";E.NOT_EQUALS="!==";E.MATCHES="=~";E.NOT_MATCHES="!~";E.GREATER_THAN=">";E.GREATER_THAN_OR_EQUALS=">=";E.LESS_THAN="<";E.LESS_THAN_OR_EQUALS="<=";E.IN="in";E.NOT_IN="not_in"});var je=v(Q=>{c();"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.RulesVisitorStop=void 0;var O=he(),ee=class extends Error{};Q.RulesVisitorStop=ee;var qe=class{constructor(t={}){this.callbacks=t}onRuleVisit(t){this.callbacks.onRuleVisit=t}onMatchesVisit(t){this.callbacks.onMatchesVisit=t}onFeaturesVisit(t){this.callbacks.onFeaturesVisit=t}onConditionalsVisit(t){this.callbacks.onConditionalsVisit=t}onBooleanVisit(t){this.callbacks.onBooleanVisit=t}visit(t,r){try{t.forEach((i,o)=>this.visitRule(i,r??o))}catch(i){if(i instanceof ee)return;throw i}}visitRule(t,r){var i,o;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onRuleVisit)===null||o===void 0||o.call(i,t,r),this.isMatches(t)?this.visitMatches(t,r):this.visitFeaturesOrRules(t,r)}visitMatches(t,r){var i,o;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onMatchesVisit)===null||o===void 0||o.call(i,t,r);let n=t==null?void 0:t.if;!n||n.forEach(s=>{this.isConditionals(s)?this.visitConditionals(s,r):this.isBoolean(s)?this.visitBoolean(s,r):this.visitFeaturesOrRules(s,r)})}visitFeaturesOrRules(t,r){this.isRules(t)?this.visit(t,r):this.visitFeatures(t,r)}visitFeatures(t,r){var i,o;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onFeaturesVisit)===null||o===void 0||o.call(i,t,r)}visitConditionals(t,r){var i,o;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onConditionalsVisit)===null||o===void 0||o.call(i,t,r),Object.keys(t).forEach(n=>{let s=t[n];this.visitCondition(s,n,r)})}visitCondition(t,r,i){var o,n;(n=(o=this.callbacks)===null||o===void 0?void 0:o.onConditionVisit)===null||n===void 0||n.call(o,t,r,i)}visitBoolean(t,r){var i,o,n,s;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onBooleanVisit)===null||o===void 0||o.call(i,t,r);let d=u=>{if(this.isBoolean(u))return this.visitBoolean(u,r);this.visitConditionals(u,r)};(n=t[O.AND])===null||n===void 0||n.forEach(d),(s=t[O.OR])===null||s===void 0||s.forEach(d)}isMatches(t){return Object.keys(t).includes("if")}isRules(t){return Array.isArray(t)}isBoolean(t){return[O.AND,O.OR].some(r=>Object.keys(t).includes(r))}isConditionals(t){return[O.EQUALS_EXPRESS,O.EQUALS,O.NOT_EQUALS_EXPRESS,O.NOT_EQUALS,O.MATCHES,O.NOT_MATCHES,O.GREATER_THAN,O.GREATER_THAN_OR_EQUALS,O.LESS_THAN,O.LESS_THAN_OR_EQUALS,O.IN,O.NOT_IN].some(r=>Object.keys(t).includes(r))}stop(){throw new ee}};Q.default=qe});var Qe=v(pe=>{c();"use strict";Object.defineProperty(pe,"__esModule",{value:!0});function er(e,t="g"){return e.startsWith("(?i)")&&(e=e.substring(4),t+="i"),new RegExp(e,t)}pe.default=er});var Ke=v(R=>{c();"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.pathToRegexp=R.tokensToRegexp=R.regexpToFunction=R.match=R.tokensToFunction=R.compile=R.parse=void 0;function tr(e){for(var t=[],r=0;r<e.length;){var i=e[r];if(i==="*"||i==="+"||i==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(i==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(i==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(i==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(i===":"){for(var o="",n=r+1;n<e.length;){var s=e.charCodeAt(n);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){o+=e[n++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:o}),r=n;continue}if(i==="("){var d=1,u="",n=r+1;if(e[n]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(n));for(;n<e.length;){if(e[n]==="\\"){u+=e[n++]+e[n++];continue}if(e[n]===")"){if(d--,d===0){n++;break}}else if(e[n]==="("&&(d++,e[n+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(n));u+=e[n++]}if(d)throw new TypeError("Unbalanced pattern at ".concat(r));if(!u)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:u}),r=n;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function Ae(e,t){t===void 0&&(t={});for(var r=tr(e),i=t.prefixes,o=i===void 0?"./":i,n="[^".concat(G(t.delimiter||"/#?"),"]+?"),s=[],d=0,u=0,_="",f=function(D){if(u<r.length&&r[u].type===D)return r[u++].value},l=function(D){var w=f(D);if(w!==void 0)return w;var x=r[u],ie=x.type,oe=x.index;throw new TypeError("Unexpected ".concat(ie," at ").concat(oe,", expected ").concat(D))},A=function(){for(var D="",w;w=f("CHAR")||f("ESCAPED_CHAR");)D+=w;return D};u<r.length;){var T=f("CHAR"),P=f("NAME"),y=f("PATTERN");if(P||y){var g=T||"";o.indexOf(g)===-1&&(_+=g,g=""),_&&(s.push(_),_=""),s.push({name:P||d++,prefix:g,suffix:"",pattern:y||n,modifier:f("MODIFIER")||""});continue}var S=T||f("ESCAPED_CHAR");if(S){_+=S;continue}_&&(s.push(_),_="");var B=f("OPEN");if(B){var g=A(),V=f("NAME")||"",p=f("PATTERN")||"",H=A();l("CLOSE"),s.push({name:V||(p?d++:""),pattern:V&&!p?n:p,prefix:g,suffix:H,modifier:f("MODIFIER")||""});continue}l("END")}return s}R.parse=Ae;function rr(e,t){return Ye(Ae(e,t),t)}R.compile=rr;function Ye(e,t){t===void 0&&(t={});var r=ge(t),i=t.encode,o=i===void 0?function(u){return u}:i,n=t.validate,s=n===void 0?!0:n,d=e.map(function(u){if(typeof u=="object")return new RegExp("^(?:".concat(u.pattern,")$"),r)});return function(u){for(var _="",f=0;f<e.length;f++){var l=e[f];if(typeof l=="string"){_+=l;continue}var A=u?u[l.name]:void 0,T=l.modifier==="?"||l.modifier==="*",P=l.modifier==="*"||l.modifier==="+";if(Array.isArray(A)){if(!P)throw new TypeError('Expected "'.concat(l.name,'" to not repeat, but got an array'));if(A.length===0){if(T)continue;throw new TypeError('Expected "'.concat(l.name,'" to not be empty'))}for(var y=0;y<A.length;y++){var g=o(A[y],l);if(s&&!d[f].test(g))throw new TypeError('Expected all "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat(g,'"'));_+=l.prefix+g+l.suffix}continue}if(typeof A=="string"||typeof A=="number"){var g=o(String(A),l);if(s&&!d[f].test(g))throw new TypeError('Expected "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat(g,'"'));_+=l.prefix+g+l.suffix;continue}if(!T){var S=P?"an array":"a string";throw new TypeError('Expected "'.concat(l.name,'" to be ').concat(S))}}return _}}R.tokensToFunction=Ye;function ir(e,t){var r=[],i=Te(e,r,t);return Xe(i,r,t)}R.match=ir;function Xe(e,t,r){r===void 0&&(r={});var i=r.decode,o=i===void 0?function(n){return n}:i;return function(n){var s=e.exec(n);if(!s)return!1;for(var d=s[0],u=s.index,_=Object.create(null),f=function(A){if(s[A]===void 0)return"continue";var T=t[A-1];T.modifier==="*"||T.modifier==="+"?_[T.name]=s[A].split(T.prefix+T.suffix).map(function(P){return o(P,T)}):_[T.name]=o(s[A],T)},l=1;l<s.length;l++)f(l);return{path:d,index:u,params:_}}}R.regexpToFunction=Xe;function G(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ge(e){return e&&e.sensitive?"":"i"}function or(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,o=r.exec(e.source);o;)t.push({name:o[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),o=r.exec(e.source);return e}function nr(e,t,r){var i=e.map(function(o){return Te(o,t,r).source});return new RegExp("(?:".concat(i.join("|"),")"),ge(r))}function ar(e,t,r){return $e(Ae(e,r),t,r)}function $e(e,t,r){r===void 0&&(r={});for(var i=r.strict,o=i===void 0?!1:i,n=r.start,s=n===void 0?!0:n,d=r.end,u=d===void 0?!0:d,_=r.encode,f=_===void 0?function(oe){return oe}:_,l=r.delimiter,A=l===void 0?"/#?":l,T=r.endsWith,P=T===void 0?"":T,y="[".concat(G(P),"]|$"),g="[".concat(G(A),"]"),S=s?"^":"",B=0,V=e;B<V.length;B++){var p=V[B];if(typeof p=="string")S+=G(f(p));else{var H=G(f(p.prefix)),D=G(f(p.suffix));if(p.pattern)if(t&&t.push(p),H||D)if(p.modifier==="+"||p.modifier==="*"){var w=p.modifier==="*"?"?":"";S+="(?:".concat(H,"((?:").concat(p.pattern,")(?:").concat(D).concat(H,"(?:").concat(p.pattern,"))*)").concat(D,")").concat(w)}else S+="(?:".concat(H,"(").concat(p.pattern,")").concat(D,")").concat(p.modifier);else p.modifier==="+"||p.modifier==="*"?S+="((?:".concat(p.pattern,")").concat(p.modifier,")"):S+="(".concat(p.pattern,")").concat(p.modifier);else S+="(?:".concat(H).concat(D,")").concat(p.modifier)}}if(u)o||(S+="".concat(g,"?")),S+=r.endsWith?"(?=".concat(y,")"):"$";else{var x=e[e.length-1],ie=typeof x=="string"?g.indexOf(x[x.length-1])>-1:x===void 0;o||(S+="(?:".concat(g,"(?=").concat(y,"))?")),ie||(S+="(?=".concat(g,"|").concat(y,")"))}return new RegExp(S,ge(r))}R.tokensToRegexp=$e;function Te(e,t,r){return e instanceof RegExp?or(e,t):Array.isArray(e)?nr(e,t,r):ar(e,t,r)}R.pathToRegexp=Te});var Je=v(Se=>{c();"use strict";Object.defineProperty(Se,"__esModule",{value:!0});var ze=class extends Error{constructor(t){super(`Route pattern "${t}" contains invalid syntax. To force exact matching, wrap the path in the 'exact' function.
See https://docs.edg.io/guides/performance/cdn_as_code/common_routing_patterns for more information.`);this.isUserError=!0}};Se.default=ze});var Ze=v(Y=>{c();"use strict";var sr=Y&&Y.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Y,"__esModule",{value:!0});var cr=Ke(),ur=sr(Je());function lr(e){if(e)try{return(0,cr.pathToRegexp)(e)}catch(t){throw new ur.default(e)}else return/^.*$/}Y.default=lr});var it=v(b=>{c();"use strict";var Oe=b&&b.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(b,"__esModule",{value:!0});b.operatorsMap=void 0;var dr=Oe(je()),C=he(),et=Oe(Qe()),tt=Oe(Ze());b.operatorsMap={[C.EQUALS]:(e,t)=>e===t,[C.NOT_EQUALS]:(e,t)=>e!==t,[C.EQUALS_EXPRESS]:(e,t)=>{var r;return(0,tt.default)(t).test((r=e==null?void 0:e.toString())!==null&&r!==void 0?r:"")},[C.NOT_EQUALS_EXPRESS]:(e,t)=>{var r;return!(0,tt.default)(t).test((r=e==null?void 0:e.toString())!==null&&r!==void 0?r:"")},[C.LESS_THAN]:(e,t)=>Number(e)<Number(t),[C.LESS_THAN_OR_EQUALS]:(e,t)=>Number(e)<=Number(t),[C.GREATER_THAN]:(e,t)=>Number(e)>Number(t),[C.GREATER_THAN_OR_EQUALS]:(e,t)=>Number(e)>=Number(t),[C.MATCHES]:(e,t)=>{var r;return(0,et.default)(t).test((r=e==null?void 0:e.toString())!==null&&r!==void 0?r:"")},[C.NOT_MATCHES]:(e,t)=>{var r;return!(0,et.default)(t).test((r=e==null?void 0:e.toString())!==null&&r!==void 0?r:"")},[C.IN]:(e,t)=>t==null?void 0:t.some(r=>(e==null?void 0:e.toString())===(r==null?void 0:r.toString())),[C.NOT_IN]:(e,t)=>!(t==null?void 0:t.some(r=>(e==null?void 0:e.toString())===(r==null?void 0:r.toString())))};var rt=class extends dr.default{constructor(t,r={}){super(r);this.evalVariableCallback=t}visitMatches(t,r){var i,o;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onMatchesVisit)===null||o===void 0||o.call(i,t,r);let n=t==null?void 0:t.if;if(!n)return;let s=0;for(;s<t.if.length;){let d=s,u=s+1,_=s+2,f=_===t.if.length-1,l=n[d],A=!1;if(this.isConditionals(l))A=this.evalConditionals(l,r);else if(this.isBoolean(l))A=this.evalBoolean(l,r);else throw new Error(`Unsupported operator "${Object.keys(l).pop()}".`);if(A?this.visitFeaturesOrRules(n[u],r):f&&this.visitFeaturesOrRules(n[_],r),f)break;s+=2}}evalBoolean(t,r){var i,o;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onBooleanVisit)===null||o===void 0||o.call(i,t,r);let n=s=>this.isBoolean(s)?this.evalBoolean(s,r):this.evalConditionals(s,r);return t[C.AND]?t[C.AND].every(n):t[C.OR]?t[C.OR].some(n):!1}evalConditionals(t,r){var i,o;(o=(i=this.callbacks)===null||i===void 0?void 0:i.onConditionalsVisit)===null||o===void 0||o.call(i,t,r);let n=Object.keys(t);if(n.length!==1)throw new Error(`Conditional statements must contain a single operator. The following operators were found: ${n.join(", ")}`);let[s,d]=Object.entries(t)[0];return this.evalCondition(d,s,r)}evalCondition(t,r,i){var o,n,s;(n=(o=this.callbacks)===null||o===void 0?void 0:o.onConditionVisit)===null||n===void 0||n.call(o,t,r,i);let[d,u]=t.map(_=>this.evalOperand(_));return(s=b.operatorsMap===null||b.operatorsMap===void 0?void 0:b.operatorsMap[r])===null||s===void 0?void 0:s.call(b.operatorsMap,d,u)}evalOperand(t){return t==null||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)?t:this.evalVariableCallback(t)}};b.default=rt});var nt=v(Re=>{c();"use strict";Object.defineProperty(Re,"__esModule",{value:!0});function ot(e,t,r=0){let i=m(m({},e&&typeof e=="object"?e:{}),t&&typeof t=="object"?t:{});return r===0||Object.keys(i).forEach(o=>{let n=e&&e[o],s=t&&t[o];typeof n=="object"&&typeof s=="object"&&(i[o]=ot(n,s,r-1))}),i}Re.default=ot});var ct=v(F=>{c();"use strict";var at=F&&F.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(F,"__esModule",{value:!0});F.CacheManifest=void 0;var st=J(),_r=ke(),fr=at(it()),Er=at(nt()),te=class{constructor(){this.rules=[]}static from(t){return Object.assign(new te,t)}shouldPrefetch(t){let r={};return new fr.default(this.getEvalVariableCallback(t),{onFeaturesVisit:i=>{var o;((o=i==null?void 0:i.comment)===null||o===void 0?void 0:o.includes(st.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT))||(r=(0,Er.default)(r,i,3))}}).visit(this.rules),this.isCacheable(r)}getEvalVariableCallback(t){return r=>{var i;if(r.request){let o=r.request;if(o==="method")return"GET";if(o==="origin_path"||o==="path")return t.pathname;if(o==="origin_query_string"||o==="query"||o==="querystring")return t.search.split("?")[1];if(o==="scheme")return t.protocol.replace(":","").toUpperCase()}if(r["request.origin_query"])return t.searchParams.get(r["request.origin_query"])||void 0;if(r["request.path"]){let o=r["request.path"];if(o==="filename")return t.pathname.split("/").pop();if(o==="directory")return(i=t.pathname.match(/(.*)[/\\]/))===null||i===void 0?void 0:i[1];if(o==="extension"){let n=t.pathname.split(".").pop();return n?`.${n}`:void 0}}}}isCacheable(t){let{caching:r}=t;return Boolean((r==null?void 0:r.max_age)!==void 0&&(r==null?void 0:r.service_worker_max_age)&&(0,_r.fromTimeUnitAbbrev)(r.service_worker_max_age)>0&&!(r==null?void 0:r.bypass_cache))}serialize(){return`self.${st.EDGIO_CACHE_MANIFEST_JS_VAR_NAME}=${JSON.stringify(this)}`}};F.CacheManifest=te});var ut=v(X=>{c();"use strict";var vr=X&&X.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(X,"__esModule",{value:!0});var hr=W(),pr=vr(fe());function Ar(e){(0,pr.default)(e,t=>{let r=t.getAttribute("href");r&&(0,hr.prefetch)(r)})}X.default=Ar});var _t=v($=>{c();"use strict";var gr=$&&$.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty($,"__esModule",{value:!0});var lt=gr(ut()),Tr={disabled:!1,attributes:!1},Ce;function Sr(e,t,r){typeof MutationObserver!="undefined"&&(r=m(m({},Tr),r),Ce||(Ce=new MutationObserver(i=>{for(let o of i)dt(o.addedNodes,e,t).forEach(lt.default)}),r.disabled||Ce.observe(document.body,{attributes:r.attributes,childList:!0,subtree:!0})),dt(document.querySelectorAll("a"),e,t).forEach(lt.default))}$.default=Sr;function dt(e,t,r){let i=new Set,o=n=>{let s=n.getAttribute("href");if(!s||n.tagName.toLowerCase()!=="a")return!1;let d=new URL(s,window.location.href);return d.hostname!==window.location.hostname?!1:r.some(u=>u.test(d.pathname))?!0:t.shouldPrefetch(d)};return Array.from(e).forEach(n=>{if(n.nodeType===Node.ELEMENT_NODE){let s=n;[s,...Array.from(s.querySelectorAll("a"))].filter(o).forEach(u=>i.add(u))}}),i}});var Et=v(K=>{c();"use strict";var re=K&&K.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(K,"__esModule",{value:!0});var ft=W(),Or=Ue(),Rr=re(Be()),Cr=re(ue()),Nr=re(We()),Dr=ct(),mr=re(_t()),br={includeCacheMisses:!1,cacheHost:void 0,forcePrefetchRatio:0};async function yr(e){e=m(m({},br),e);let{serviceWorker:t}=navigator;if(typeof t=="undefined")return;let{prefetchURLs:r,watch:i,serviceWorkerPath:o="/service-worker.js",observe:n,prefetchPatterns:s=[]}=e;await(0,Nr.default)({cacheHost:e.cacheHost});let d=Dr.CacheManifest.from(window.__EDGIO_CACHE_MANIFEST__||{});(0,ft.configure)(m({},e)),(0,Or.registerServiceWorker)(o),r==null||r.forEach(u=>(0,ft.prefetch)(u)),(0,mr.default)(d,s,n),(0,Rr.default)(i),(0,Cr.default)()}K.default=yr});var ht=v(M=>{c();"use strict";var vt=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(M,"__esModule",{value:!0});M.install=M.waitForServiceWorker=M.prefetch=void 0;var Mr=W();Object.defineProperty(M,"prefetch",{enumerable:!0,get:function(){return Mr.prefetch}});var Pr=ae();Object.defineProperty(M,"waitForServiceWorker",{enumerable:!0,get:function(){return vt(Pr).default}});var Ir=Et();Object.defineProperty(M,"install",{enumerable:!0,get:function(){return vt(Ir).default}})});c();var pt=Dt(ht());document.addEventListener("DOMContentLoaded",()=>{(0,pt.install)({serviceWorkerPath:"https://wholesale-nuts-wn-service-worker-default.glb.edgio.link/service-worker.js",includeCacheMisses:!0})});})();
