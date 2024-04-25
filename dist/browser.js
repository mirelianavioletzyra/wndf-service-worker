(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // <define:process>
  var init_define_process = __esm({
    "<define:process>"() {
    }
  });

  // node_modules/@edgio/prefetch/window/waitForServiceWorker.js
  var require_waitForServiceWorker = __commonJS({
    "node_modules/@edgio/prefetch/window/waitForServiceWorker.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      async function waitForServiceWorker() {
        if (!navigator.serviceWorker || !navigator.serviceWorker.ready) {
          throw new Error("service worker not supported");
        }
        await navigator.serviceWorker.ready;
        if (navigator.serviceWorker.controller) {
          return navigator.serviceWorker.controller;
        } else {
          return new Promise((resolve, reject) => {
            navigator.serviceWorker.addEventListener("controllerchange", () => {
              if (navigator.serviceWorker.controller) {
                resolve(navigator.serviceWorker.controller);
              } else {
                reject(new Error("service worker not supported"));
              }
            });
          });
        }
      }
      exports.default = waitForServiceWorker;
    }
  });

  // node_modules/@edgio/core/constants.js
  var require_constants = __commonJS({
    "node_modules/@edgio/core/constants.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.FAR_FUTURE_TTL = exports.DEFLATE_ENCODING = exports.GZIP_ENCODING = exports.BROTLI_ENCODING = exports.IS_BROWSER = exports.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT = exports.EDGIO_PREFETCH_CDN_SW_PATH = exports.EDGIO_PREFETCH_CDN_PATH = exports.EDGIO_PREFETCH_CDN_BASE_PATH = exports.EDGIO_CACHE_MANIFEST_JS_VAR_NAME = exports.EDGIO_CACHE_MANIFEST_PATH = exports.HOSTS_NOINDEX_PERMALINK_REGEX = exports.ROUTES_NOINDEX_GROUP = exports.ROUTES_CATCH_GROUP = exports.ROUTES_FALLBACK = exports.METHOD_QUERY_PARAM = exports.POST_BODY_QUERY_PARAM = exports.HEAD_QUERY_PARAM = exports.DEVTOOLS_PREFETCH_QUERY_PARAM = exports.PREFETCH_TTL_PARAM = exports.PREFETCH_QUERY_PARAM = exports.THROTTLED_QUERY_PARAM = exports.CACHING_DEBUG_CACHEABLE = exports.CACHING_DEBUG_STATUS = exports.CACHING_DEBUG_HEADERS = exports.CACHEABLE_METHODS = exports.CACHING_STATUS = exports.HTTP_HEADERS = exports.HTTP_METHODS = exports.JS_BACKEND_HOSTNAME = exports.BACKENDS = exports.ACTIONS = exports.EDGIO_UNCACHED_PREFETCH_STATUS = exports.EDGIO_TOO_MANY_HEADERS_STATUS_CODE = exports.EDGIO_MAX_USER_HEADERS_ALLOWED = exports.EDGIO_CLOUD_FUNCTIONS_HINTS = exports.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER = exports.EDGIO_HEADERS_PREFIX = exports.EDGIO_DEPLOYMENT_TYPE_AWS = exports.EDGIO_EDGE_FUNCTION_ENV_VARIABLES = exports.EDGIO_ENV_VARIABLES = exports.EDGIO_ASSET_ALIASES_FILE = exports.EDGIO_CONFIG_FILE = void 0;
      exports.EDGIO_CONFIG_FILE = "edgio.config.js";
      exports.EDGIO_ASSET_ALIASES_FILE = "asset-aliases.json";
      exports.EDGIO_ENV_VARIABLES = {
        config: "EDGIO_CONFIG",
        internalConfig: "EDGIO_INTERNAL_CONFIG",
        deploymentType: "EDGIO_DEPLOYMENT_TYPE",
        versionOverride: "EDGIO_VERSION_OVERRIDE",
        productionBuild: "EDGIO_PRODUCTION_BUILD",
        local: "EDGIO_LOCAL",
        cache: "EDGIO_CACHE",
        permalinkHost: "EDGIO_PERMALINK_HOST",
        imageOptimizerHost: "EDGIO_IMAGE_OPTIMIZER_HOST"
      };
      exports.EDGIO_EDGE_FUNCTION_ENV_VARIABLES = {
        path: "__EDGE_FUNCTION_PATH__",
        quickjsBytecodeBase64: "__EDGE_FUNCTION_QUICKJS_BYTECODE_BASE64__"
      };
      exports.EDGIO_DEPLOYMENT_TYPE_AWS = "AWS";
      exports.EDGIO_HEADERS_PREFIX = "x-edg-";
      exports.EDGIO_CLOUD_FUNCTIONS_HINT_HEADER = "x-cloud-functions-hint";
      exports.EDGIO_CLOUD_FUNCTIONS_HINTS = {
        app: "app",
        compute: "compute",
        redirect: "redirect",
        proxy: "proxy"
      };
      exports.EDGIO_MAX_USER_HEADERS_ALLOWED = 70;
      exports.EDGIO_TOO_MANY_HEADERS_STATUS_CODE = 542;
      exports.EDGIO_UNCACHED_PREFETCH_STATUS = 412;
      exports.ACTIONS = {
        setHeader: "set-header",
        updateHeader: "update-header",
        removeHeader: "remove-header",
        syntheticRes: "synthetic-response",
        updatePath: "update-path",
        proxy: "proxy",
        addCookie: "add-cookie",
        updateCookie: "update-cookie",
        removeCookie: "remove-cookie"
      };
      exports.BACKENDS = {
        js: "__js__",
        static: "__static__",
        permanentStatic: "__permanent_static__",
        imageOptimizer: "__image_optimizer__"
      };
      exports.JS_BACKEND_HOSTNAME = "127.0.0.1";
      exports.HTTP_METHODS = {
        head: "head",
        get: "get",
        post: "post",
        delete: "delete",
        put: "put",
        patch: "patch",
        options: "options"
      };
      exports.HTTP_HEADERS = {
        accept: "accept",
        acceptCh: "accept-CH",
        acceptEncoding: "accept-encoding",
        authorization: "authorization",
        cacheControl: "cache-control",
        contentEncoding: "content-encoding",
        contentLength: "content-length",
        contentType: "content-type",
        cookie: "cookie",
        expires: "expires",
        host: "host",
        location: "location",
        range: "range",
        serverTiming: "server-timing",
        setCookie: "set-cookie",
        userAgent: "user-agent",
        vary: "vary",
        via: "via",
        transferEncoding: "transfer-encoding",
        strictTransportSecurity: "strict-transport-security",
        referrerPolicy: "referrer-policy",
        featurePolicy: "feature-policy",
        xEcDebug: "x-ec-debug",
        xForwardedFor: "x-forwarded-for",
        xFrameOptions: "x-frame-options",
        xXssProtection: "x-xss-protection",
        xContentTypeOptions: "x-content-type-options",
        xRequestId: "x-request-id",
        xEcUuid: "x-ec-uuid",
        xSwCacheControl: "x-sw-cache-control",
        xEdgeBrowser: "x-edg-browser",
        xEdgeCacheControl: "x-edg-cache-control",
        xEdgeCachingStatus: "x-edg-caching-status",
        xEdgeClientIp: "x-edg-client-ip",
        xEdgeComponents: "x-edg-components",
        xEdgeDestination: "x-edg-destination",
        xEdgeDevice: "x-edg-device",
        xEdgeDeviceIsBot: "x-edg-device-is-bot",
        xEdgeGeoCity: "x-edg-geo-city",
        xEdgeGeoCountryCode: "x-edg-geo-country-code",
        xEdgeGeoLatitude: "x-edg-geo-latitude",
        xEdgeGeoLongitude: "x-edg-geo-longitude",
        xEdgeGeoPostalCode: "x-edg-geo-postal-code",
        xEdgeMatchedRoutes: "x-edg-matched-routes",
        xEdgeProtocol: "x-edg-protocol",
        xEdgeRoute: "x-edg-route",
        xEdgeStatus: "x-edg-status",
        xEdgeSurrogateKey: "x-edg-surrogate-key",
        xEdgeT: "x-edg-t",
        xEdgeUserT: "x-edg-user-t",
        xEdgeVendor: "x-edg-vendor",
        xEdgeVersion: "x-edg-version",
        xEdgServerlessError: "x-edg-serverless-error",
        x0ClientIp: "x-0-client-ip",
        x0Protocol: "x-0-protocol",
        x0Version: "x-0-version",
        xEcEdgeIoDebug: "x-ec-edgeio-debug",
        xEcEdgeIoDisable: "x-ec-edgeio-disable",
        xEdgeIoInfo: "x-edgeio-info",
        xEdgeIoStatus: "x-edgeio-status",
        xEdgeIoError: "x-edgeio-error"
      };
      exports.CACHING_STATUS = {
        cached: "cached",
        hit: "hit",
        bypassed: "bypassed",
        private: "private",
        method: "method",
        bodyTooBig: "body-too-big",
        code: "code",
        setCookie: "set-cookie",
        noMaxAge: "no-max-age"
      };
      exports.CACHEABLE_METHODS = new Set(["get", "head"]);
      exports.CACHING_DEBUG_HEADERS = {
        cache: "x-ec-cache",
        checkCacheable: "x-ec-check-cacheable",
        cacheState: "x-ec-cache-state",
        cacheKey: "x-ec-cache-key"
      };
      exports.CACHING_DEBUG_STATUS = {
        configNoCache: "CONFIG_NOCACHE",
        none: "NONE",
        tcpClientRefreshMiss: "TCP_CLIENT_REFRESH_MISS",
        tcpExpiredHit: "TCP_EXPIRED_HIT",
        tcpExpiredMiss: "TCP_EXPIRED_MISS",
        tcpHit: "TCP_HIT",
        tcpMiss: "TCP_MISS",
        tcpPartialHit: "TCP_PARTIAL_HIT",
        uncacheable: "UNCACHEABLE"
      };
      exports.CACHING_DEBUG_CACHEABLE = {
        yes: "YES",
        no: "NO"
      };
      exports.THROTTLED_QUERY_PARAM = "edgio_prefetch";
      exports.PREFETCH_QUERY_PARAM = exports.THROTTLED_QUERY_PARAM;
      exports.PREFETCH_TTL_PARAM = "edgio_prefetch_ttl";
      exports.DEVTOOLS_PREFETCH_QUERY_PARAM = "edgio_dt_pf";
      exports.HEAD_QUERY_PARAM = "edgio_head";
      exports.POST_BODY_QUERY_PARAM = "pref_edgio_body";
      exports.METHOD_QUERY_PARAM = "pref_edgio_method";
      exports.ROUTES_FALLBACK = "fallback";
      exports.ROUTES_CATCH_GROUP = "catch";
      exports.ROUTES_NOINDEX_GROUP = "noindex";
      exports.HOSTS_NOINDEX_PERMALINK_REGEX = /\.edgio\.link|\.edgio-perma\.link/;
      exports.EDGIO_CACHE_MANIFEST_PATH = "/__edgio__/cache-manifest.js";
      exports.EDGIO_CACHE_MANIFEST_JS_VAR_NAME = "__EDGIO_CACHE_MANIFEST__";
      exports.EDGIO_PREFETCH_CDN_BASE_PATH = "/__edgio__/prefetch";
      exports.EDGIO_PREFETCH_CDN_PATH = `${exports.EDGIO_PREFETCH_CDN_BASE_PATH}/:path*`;
      exports.EDGIO_PREFETCH_CDN_SW_PATH = "/__edgio__service_worker_:version.js";
      exports.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT = "cache-manifest-ignore";
      exports.IS_BROWSER = typeof window !== "undefined";
      exports.BROTLI_ENCODING = "br";
      exports.GZIP_ENCODING = "gzip";
      exports.DEFLATE_ENCODING = "deflate";
      exports.FAR_FUTURE_TTL = "1y";
    }
  });

  // node_modules/@edgio/prefetch/window/getHostName.js
  var require_getHostName = __commonJS({
    "node_modules/@edgio/prefetch/window/getHostName.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function getHostName() {
        return window.location.hostname;
      }
      exports.default = getHostName;
    }
  });

  // node_modules/@edgio/prefetch/window/listenForSwMessages.js
  var require_listenForSwMessages = __commonJS({
    "node_modules/@edgio/prefetch/window/listenForSwMessages.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var prefetch_1 = require_prefetch();
      function listenForSwMessages() {
        const {serviceWorker} = navigator;
        if (typeof serviceWorker === "undefined" || window.swEventListenerAdded) {
          return;
        }
        serviceWorker.addEventListener("message", (event) => {
          if (event.data.action === "prefetch") {
            (0, prefetch_1.prefetch)(event.data.url, event.data.as, event.data.options);
          }
        });
        window.swEventListenerAdded = true;
      }
      exports.default = listenForSwMessages;
    }
  });

  // node_modules/@edgio/prefetch/window/prefetch.js
  var require_prefetch = __commonJS({
    "node_modules/@edgio/prefetch/window/prefetch.js"(exports) {
      init_define_process();
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {enumerable: true, get: function() {
            return m[k];
          }};
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {enumerable: true, value: v});
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.prefetch = exports.configure = void 0;
      var waitForServiceWorker_1 = __importDefault(require_waitForServiceWorker());
      var constants_1 = require_constants();
      var getHostName_1 = __importDefault(require_getHostName());
      var MAX_URL_BYTES = 2 ** 13;
      var prefetched = new Set();
      var defaults = {
        includeCacheMisses: false,
        cacheHost: void 0,
        forcePrefetchRatio: 0
      };
      var options = defaults;
      function configure(opts) {
        options = __spreadValues(__spreadValues({}, defaults), opts);
      }
      exports.configure = configure;
      async function prefetch(url, as = "fetch", config = {
        cors: "anonymous",
        includeCacheMisses: options.includeCacheMisses,
        forcePrefetchRatio: options.forcePrefetchRatio
      }) {
        var _a, _b, _c, _d, _e;
        if (!window.swEventListenerAdded) {
          ;
          (await Promise.resolve().then(() => __importStar(require_listenForSwMessages()))).default();
        }
        if (typeof url === "undefined") {
          console.error(`prefetch() called with an undefined url`);
          return;
        }
        config.cors = (_a = config.cors) !== null && _a !== void 0 ? _a : "anonymous";
        config.includeCacheMisses = (_c = (_b = config.includeCacheMisses) !== null && _b !== void 0 ? _b : options.includeCacheMisses) !== null && _c !== void 0 ? _c : false;
        config.forcePrefetchRatio = (_e = (_d = config.forcePrefetchRatio) !== null && _d !== void 0 ? _d : options.forcePrefetchRatio) !== null && _e !== void 0 ? _e : 0;
        if (config.headers) {
          console.warn("The prefetch `headers` configuration option has been removed as it is not compatible with the service-worker prefetch mechanism. Please set headers in your routes.js file with `setRequestHeader` if required.");
        }
        const cacheUrl = modifyUrl(url, config);
        if (typeof TextEncoder !== "undefined" && new TextEncoder().encode(cacheUrl).length > MAX_URL_BYTES) {
          console.warn(`URL is too many characters to prefetch and cache: ${cacheUrl}`);
          return;
        }
        if (prefetched.has(cacheUrl)) {
          let prefetchLink = document.querySelector(`link[href='${cacheUrl}']`);
          prefetchLink === null || prefetchLink === void 0 ? void 0 : prefetchLink.remove();
        }
        prefetched.add(cacheUrl);
        await (0, waitForServiceWorker_1.default)();
        const link = document.createElement("link");
        const {relList} = link;
        link.setAttribute("href", cacheUrl);
        if (config.cors) {
          link.setAttribute("crossorigin", config.cors);
        }
        link.setAttribute("rel", relList.supports("preload") && !relList.supports("prefetch") ? "preload" : "prefetch");
        link.setAttribute("as", as);
        document.head.append(link);
      }
      exports.prefetch = prefetch;
      function modifyUrl(url, config) {
        const {body, method, maxAgeSeconds} = config;
        const parsed = new URL(url, window.origin);
        if (parsed.hostname === (0, getHostName_1.default)()) {
          if (options.cacheHost) {
            const cacheHostUrl = new URL(`https://${options.cacheHost}`);
            parsed.hostname = cacheHostUrl.hostname;
            parsed.protocol = cacheHostUrl.protocol;
            parsed.port = cacheHostUrl.port;
          }
          appendSearchParam(parsed, constants_1.DEVTOOLS_PREFETCH_QUERY_PARAM, "1");
          maybeAddThrottleParam(parsed, config);
        }
        if (body) {
          appendSearchParam(parsed, constants_1.POST_BODY_QUERY_PARAM, body);
        }
        if (method) {
          appendSearchParam(parsed, constants_1.METHOD_QUERY_PARAM, method);
        }
        if (maxAgeSeconds && maxAgeSeconds > 0) {
          appendSearchParam(parsed, constants_1.PREFETCH_TTL_PARAM, maxAgeSeconds.toString());
        }
        return parsed.toString();
      }
      function appendSearchParam(url, name, value) {
        const separator = url.search.length ? "&" : "?";
        url.search += `${separator}${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      }
      function maybeAddThrottleParam(url, config) {
        if (!config.includeCacheMisses && shouldAcceptThrottling(config)) {
          appendSearchParam(url, constants_1.THROTTLED_QUERY_PARAM, "1");
        }
      }
      function shouldAcceptThrottling(config) {
        return !config.forcePrefetchRatio || Math.random() > config.forcePrefetchRatio;
      }
    }
  });

  // node_modules/@edgio/prefetch/window/getUserAgent.js
  var require_getUserAgent = __commonJS({
    "node_modules/@edgio/prefetch/window/getUserAgent.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function getUserAgent() {
        return navigator.userAgent;
      }
      exports.default = getUserAgent;
    }
  });

  // node_modules/@edgio/prefetch/window/isSafari.js
  var require_isSafari = __commonJS({
    "node_modules/@edgio/prefetch/window/isSafari.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.isSafariPrivateWindow = exports.isSafari = void 0;
      var getUserAgent_1 = __importDefault(require_getUserAgent());
      var _isSafari = null;
      function isSafari() {
        if (_isSafari == null) {
          _isSafari = /^((?!chrome|android).)*safari/i.test((0, getUserAgent_1.default)());
        }
        return _isSafari;
      }
      exports.isSafari = isSafari;
      function isSafariPrivateWindow() {
        if (!isSafari())
          return false;
        try {
          window.openDatabase(null, null, null, null);
          return false;
        } catch (_) {
          return true;
        }
      }
      exports.isSafariPrivateWindow = isSafariPrivateWindow;
    }
  });

  // node_modules/@edgio/prefetch/window/registerServiceWorker.js
  var require_registerServiceWorker = __commonJS({
    "node_modules/@edgio/prefetch/window/registerServiceWorker.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.unregisterServiceWorker = exports.registerServiceWorker = void 0;
      var isSafari_1 = require_isSafari();
      function registerServiceWorker(serviceWorkerPath) {
        if ((0, isSafari_1.isSafariPrivateWindow)()) {
          console.log("skipping service worker in Safari private window");
          unregisterServiceWorker();
          return;
        }
        if ("serviceWorker" in navigator) {
          if (document.readyState === "complete") {
            registerValidSW(serviceWorkerPath);
          } else {
            window.addEventListener("load", () => {
              registerValidSW(serviceWorkerPath);
            });
          }
        }
      }
      exports.registerServiceWorker = registerServiceWorker;
      function registerValidSW(swUrl, swScope = "./") {
        navigator.serviceWorker.register(swUrl, {scope: swScope}).then((registration) => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (!installingWorker)
              return;
            installingWorker.onstatechange = () => {
              console.log("[edgio service worker] state:", installingWorker.state);
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  document.dispatchEvent(new CustomEvent("sw-update-available"));
                } else {
                  console.log("Content is cached for offline use.");
                }
              }
            };
          };
        }).catch((error) => {
          console.error("Error during service worker registration:", error);
        });
      }
      function unregisterServiceWorker() {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
          });
        }
      }
      exports.unregisterServiceWorker = unregisterServiceWorker;
    }
  });

  // node_modules/@edgio/prefetch/window/runWhenVisible.js
  var require_runWhenVisible = __commonJS({
    "node_modules/@edgio/prefetch/window/runWhenVisible.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function runWhenVisible(el, callback) {
        if (typeof IntersectionObserver === "undefined")
          return;
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].intersectionRatio > 0) {
            observer.disconnect();
            callback(el);
          }
        }, {
          threshold: 0.01
        });
        observer.observe(el);
      }
      exports.default = runWhenVisible;
    }
  });

  // node_modules/@edgio/prefetch/window/watchElements.js
  var require_watchElements = __commonJS({
    "node_modules/@edgio/prefetch/window/watchElements.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var runWhenVisible_1 = __importDefault(require_runWhenVisible());
      var observer;
      var watchConfigs = new Set();
      function watchElements(configArr) {
        if (typeof MutationObserver === "undefined")
          return;
        if (!configArr || !configArr.length)
          return;
        configArr.forEach((watch) => watchConfigs.add(watch));
        if (!observer) {
          observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
              ;
              [...watchConfigs].forEach((watch) => {
                filterBySelector(mutation.addedNodes, watch.selector).forEach((match) => (0, runWhenVisible_1.default)(match, watch.callback));
              });
            }
          });
        }
        observer.observe(document.body, {
          subtree: true,
          childList: true
        });
        configArr.forEach((watch) => {
          document.querySelectorAll(watch.selector).forEach((match) => {
            const el = match;
            (0, runWhenVisible_1.default)(el, watch.callback);
          });
        });
      }
      exports.default = watchElements;
      function filterBySelector(nodes, selector) {
        const results = new Set();
        Array.from(nodes).forEach((n) => {
          if (n.nodeType === Node.ELEMENT_NODE) {
            const el = n;
            if (el.matches(selector)) {
              results.add(el);
            } else {
              const matches = el.querySelectorAll(selector);
              matches.forEach((match) => results.add(match));
            }
          }
        });
        return results;
      }
    }
  });

  // node_modules/@edgio/prefetch/window/loadManifest.js
  var require_loadManifest = __commonJS({
    "node_modules/@edgio/prefetch/window/loadManifest.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var constants_1 = require_constants();
      async function loadManifest(options) {
        return new Promise((resolve) => {
          let script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.onload = resolve;
          if (options === null || options === void 0 ? void 0 : options.cacheHost) {
            script.src = new URL(`https://${options.cacheHost}${constants_1.EDGIO_CACHE_MANIFEST_PATH}`).toString();
          } else {
            script.src = constants_1.EDGIO_CACHE_MANIFEST_PATH;
          }
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
      exports.default = loadManifest;
    }
  });

  // node_modules/@edgio/core/router/converters/fromTimeUnitAbbrev.js
  var require_fromTimeUnitAbbrev = __commonJS({
    "node_modules/@edgio/core/router/converters/fromTimeUnitAbbrev.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.fromTimeUnitAbbrev = void 0;
      var fromTimeUnitAbbrev = (timeInterval) => {
        var _a;
        const [_, value, unit] = (_a = timeInterval.match(/(\d+)([a-z]+)/i)) !== null && _a !== void 0 ? _a : [];
        const unitsInSec = {
          s: 1,
          h: 60 * 60,
          d: 60 * 60 * 24,
          m: 60 * 60 * 24 * 30.437,
          y: 60 * 60 * 24 * 30.437 * 12
        };
        return Number(value) * unitsInSec[unit];
      };
      exports.fromTimeUnitAbbrev = fromTimeUnitAbbrev;
    }
  });

  // node_modules/@edgio/core/runtime/rules/constants.js
  var require_constants2 = __commonJS({
    "node_modules/@edgio/core/runtime/rules/constants.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.NOT_IN = exports.IN = exports.LESS_THAN_OR_EQUALS = exports.LESS_THAN = exports.GREATER_THAN_OR_EQUALS = exports.GREATER_THAN = exports.NOT_MATCHES = exports.MATCHES = exports.NOT_EQUALS = exports.NOT_EQUALS_EXPRESS = exports.OR = exports.AND = exports.EQUALS = exports.EQUALS_EXPRESS = void 0;
      exports.EQUALS_EXPRESS = "==";
      exports.EQUALS = "===";
      exports.AND = "and";
      exports.OR = "or";
      exports.NOT_EQUALS_EXPRESS = "!=";
      exports.NOT_EQUALS = "!==";
      exports.MATCHES = "=~";
      exports.NOT_MATCHES = "!~";
      exports.GREATER_THAN = ">";
      exports.GREATER_THAN_OR_EQUALS = ">=";
      exports.LESS_THAN = "<";
      exports.LESS_THAN_OR_EQUALS = "<=";
      exports.IN = "in";
      exports.NOT_IN = "not_in";
    }
  });

  // node_modules/@edgio/core/runtime/rules/RulesVisitor.js
  var require_RulesVisitor = __commonJS({
    "node_modules/@edgio/core/runtime/rules/RulesVisitor.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.RulesVisitorStop = void 0;
      var constants_1 = require_constants2();
      var RulesVisitorStop = class extends Error {
      };
      exports.RulesVisitorStop = RulesVisitorStop;
      var RulesVisitor = class {
        constructor(callbacks = {}) {
          this.callbacks = callbacks;
        }
        onRuleVisit(callback) {
          this.callbacks.onRuleVisit = callback;
        }
        onMatchesVisit(callback) {
          this.callbacks.onMatchesVisit = callback;
        }
        onFeaturesVisit(callback) {
          this.callbacks.onFeaturesVisit = callback;
        }
        onConditionalsVisit(callback) {
          this.callbacks.onConditionalsVisit = callback;
        }
        onBooleanVisit(callback) {
          this.callbacks.onBooleanVisit = callback;
        }
        visit(rules, parentRuleIndex) {
          try {
            rules.forEach((rule, ruleIndex) => this.visitRule(rule, parentRuleIndex !== null && parentRuleIndex !== void 0 ? parentRuleIndex : ruleIndex));
          } catch (e) {
            if (e instanceof RulesVisitorStop)
              return;
            throw e;
          }
        }
        visitRule(rule, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onRuleVisit) === null || _b === void 0 ? void 0 : _b.call(_a, rule, ruleIndex);
          if (this.isMatches(rule)) {
            this.visitMatches(rule, ruleIndex);
          } else {
            this.visitFeaturesOrRules(rule, ruleIndex);
          }
        }
        visitMatches(matches, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onMatchesVisit) === null || _b === void 0 ? void 0 : _b.call(_a, matches, ruleIndex);
          const ifStatements = matches === null || matches === void 0 ? void 0 : matches.if;
          if (!ifStatements)
            return;
          ifStatements.forEach((ifStatement) => {
            if (this.isConditionals(ifStatement)) {
              this.visitConditionals(ifStatement, ruleIndex);
            } else if (this.isBoolean(ifStatement)) {
              this.visitBoolean(ifStatement, ruleIndex);
            } else {
              this.visitFeaturesOrRules(ifStatement, ruleIndex);
            }
          });
        }
        visitFeaturesOrRules(featuresOrRules, ruleIndex) {
          this.isRules(featuresOrRules) ? this.visit(featuresOrRules, ruleIndex) : this.visitFeatures(featuresOrRules, ruleIndex);
        }
        visitFeatures(features, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onFeaturesVisit) === null || _b === void 0 ? void 0 : _b.call(_a, features, ruleIndex);
        }
        visitConditionals(conditionals, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionalsVisit) === null || _b === void 0 ? void 0 : _b.call(_a, conditionals, ruleIndex);
          Object.keys(conditionals).forEach((operator) => {
            const condition = conditionals[operator];
            this.visitCondition(condition, operator, ruleIndex);
          });
        }
        visitCondition(condition, operator, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionVisit) === null || _b === void 0 ? void 0 : _b.call(_a, condition, operator, ruleIndex);
        }
        visitBoolean(boolean, ruleIndex) {
          var _a, _b, _c, _d;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onBooleanVisit) === null || _b === void 0 ? void 0 : _b.call(_a, boolean, ruleIndex);
          const booleanItemHandler = (item) => {
            if (this.isBoolean(item))
              return this.visitBoolean(item, ruleIndex);
            this.visitConditionals(item, ruleIndex);
          };
          (_c = boolean[constants_1.AND]) === null || _c === void 0 ? void 0 : _c.forEach(booleanItemHandler);
          (_d = boolean[constants_1.OR]) === null || _d === void 0 ? void 0 : _d.forEach(booleanItemHandler);
        }
        isMatches(rule) {
          return Object.keys(rule).includes("if");
        }
        isRules(rule) {
          return Array.isArray(rule);
        }
        isBoolean(condition) {
          return [constants_1.AND, constants_1.OR].some((key) => Object.keys(condition).includes(key));
        }
        isConditionals(condition) {
          return [
            constants_1.EQUALS_EXPRESS,
            constants_1.EQUALS,
            constants_1.NOT_EQUALS_EXPRESS,
            constants_1.NOT_EQUALS,
            constants_1.MATCHES,
            constants_1.NOT_MATCHES,
            constants_1.GREATER_THAN,
            constants_1.GREATER_THAN_OR_EQUALS,
            constants_1.LESS_THAN,
            constants_1.LESS_THAN_OR_EQUALS,
            constants_1.IN,
            constants_1.NOT_IN
          ].some((key) => Object.keys(condition).includes(key));
        }
        stop() {
          throw new RulesVisitorStop();
        }
      };
      exports.default = RulesVisitor;
    }
  });

  // node_modules/@edgio/core/runtime/toRegExp.js
  var require_toRegExp = __commonJS({
    "node_modules/@edgio/core/runtime/toRegExp.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function toRegExp(pattern, flags = "g") {
        if (pattern.startsWith("(?i)")) {
          pattern = pattern.substring(4);
          flags += "i";
        }
        return new RegExp(pattern, flags);
      }
      exports.default = toRegExp;
    }
  });

  // node_modules/path-to-regexp/dist/index.js
  var require_dist = __commonJS({
    "node_modules/path-to-regexp/dist/index.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.pathToRegexp = exports.tokensToRegexp = exports.regexpToFunction = exports.match = exports.tokensToFunction = exports.compile = exports.parse = void 0;
      function lexer(str) {
        var tokens = [];
        var i = 0;
        while (i < str.length) {
          var char = str[i];
          if (char === "*" || char === "+" || char === "?") {
            tokens.push({type: "MODIFIER", index: i, value: str[i++]});
            continue;
          }
          if (char === "\\") {
            tokens.push({type: "ESCAPED_CHAR", index: i++, value: str[i++]});
            continue;
          }
          if (char === "{") {
            tokens.push({type: "OPEN", index: i, value: str[i++]});
            continue;
          }
          if (char === "}") {
            tokens.push({type: "CLOSE", index: i, value: str[i++]});
            continue;
          }
          if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
              var code = str.charCodeAt(j);
              if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
                name += str[j++];
                continue;
              }
              break;
            }
            if (!name)
              throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({type: "NAME", index: i, value: name});
            i = j;
            continue;
          }
          if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
              throw new TypeError('Pattern cannot start with "?" at '.concat(j));
            }
            while (j < str.length) {
              if (str[j] === "\\") {
                pattern += str[j++] + str[j++];
                continue;
              }
              if (str[j] === ")") {
                count--;
                if (count === 0) {
                  j++;
                  break;
                }
              } else if (str[j] === "(") {
                count++;
                if (str[j + 1] !== "?") {
                  throw new TypeError("Capturing groups are not allowed at ".concat(j));
                }
              }
              pattern += str[j++];
            }
            if (count)
              throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
              throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({type: "PATTERN", index: i, value: pattern});
            i = j;
            continue;
          }
          tokens.push({type: "CHAR", index: i, value: str[i++]});
        }
        tokens.push({type: "END", index: i, value: ""});
        return tokens;
      }
      function parse(str, options) {
        if (options === void 0) {
          options = {};
        }
        var tokens = lexer(str);
        var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
        var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
        var result = [];
        var key = 0;
        var i = 0;
        var path = "";
        var tryConsume = function(type) {
          if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
        };
        var mustConsume = function(type) {
          var value2 = tryConsume(type);
          if (value2 !== void 0)
            return value2;
          var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
          throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
        };
        var consumeText = function() {
          var result2 = "";
          var value2;
          while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
            result2 += value2;
          }
          return result2;
        };
        while (i < tokens.length) {
          var char = tryConsume("CHAR");
          var name = tryConsume("NAME");
          var pattern = tryConsume("PATTERN");
          if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
              path += prefix;
              prefix = "";
            }
            if (path) {
              result.push(path);
              path = "";
            }
            result.push({
              name: name || key++,
              prefix,
              suffix: "",
              pattern: pattern || defaultPattern,
              modifier: tryConsume("MODIFIER") || ""
            });
            continue;
          }
          var value = char || tryConsume("ESCAPED_CHAR");
          if (value) {
            path += value;
            continue;
          }
          if (path) {
            result.push(path);
            path = "";
          }
          var open = tryConsume("OPEN");
          if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
              name: name_1 || (pattern_1 ? key++ : ""),
              pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
              prefix,
              suffix,
              modifier: tryConsume("MODIFIER") || ""
            });
            continue;
          }
          mustConsume("END");
        }
        return result;
      }
      exports.parse = parse;
      function compile(str, options) {
        return tokensToFunction(parse(str, options), options);
      }
      exports.compile = compile;
      function tokensToFunction(tokens, options) {
        if (options === void 0) {
          options = {};
        }
        var reFlags = flags(options);
        var _a = options.encode, encode = _a === void 0 ? function(x) {
          return x;
        } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
        var matches = tokens.map(function(token) {
          if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
          }
        });
        return function(data) {
          var path = "";
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
              path += token;
              continue;
            }
            var value = data ? data[token.name] : void 0;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
              if (!repeat) {
                throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
              }
              if (value.length === 0) {
                if (optional)
                  continue;
                throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
              }
              for (var j = 0; j < value.length; j++) {
                var segment = encode(value[j], token);
                if (validate && !matches[i].test(segment)) {
                  throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
                }
                path += token.prefix + segment + token.suffix;
              }
              continue;
            }
            if (typeof value === "string" || typeof value === "number") {
              var segment = encode(String(value), token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
              }
              path += token.prefix + segment + token.suffix;
              continue;
            }
            if (optional)
              continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
          }
          return path;
        };
      }
      exports.tokensToFunction = tokensToFunction;
      function match(str, options) {
        var keys = [];
        var re = pathToRegexp(str, keys, options);
        return regexpToFunction(re, keys, options);
      }
      exports.match = match;
      function regexpToFunction(re, keys, options) {
        if (options === void 0) {
          options = {};
        }
        var _a = options.decode, decode = _a === void 0 ? function(x) {
          return x;
        } : _a;
        return function(pathname) {
          var m = re.exec(pathname);
          if (!m)
            return false;
          var path = m[0], index = m.index;
          var params = Object.create(null);
          var _loop_1 = function(i2) {
            if (m[i2] === void 0)
              return "continue";
            var key = keys[i2 - 1];
            if (key.modifier === "*" || key.modifier === "+") {
              params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
                return decode(value, key);
              });
            } else {
              params[key.name] = decode(m[i2], key);
            }
          };
          for (var i = 1; i < m.length; i++) {
            _loop_1(i);
          }
          return {path, index, params};
        };
      }
      exports.regexpToFunction = regexpToFunction;
      function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function flags(options) {
        return options && options.sensitive ? "" : "i";
      }
      function regexpToRegexp(path, keys) {
        if (!keys)
          return path;
        var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
        var index = 0;
        var execResult = groupsRegex.exec(path.source);
        while (execResult) {
          keys.push({
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
          });
          execResult = groupsRegex.exec(path.source);
        }
        return path;
      }
      function arrayToRegexp(paths, keys, options) {
        var parts = paths.map(function(path) {
          return pathToRegexp(path, keys, options).source;
        });
        return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
      }
      function stringToRegexp(path, keys, options) {
        return tokensToRegexp(parse(path, options), keys, options);
      }
      function tokensToRegexp(tokens, keys, options) {
        if (options === void 0) {
          options = {};
        }
        var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
          return x;
        } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
        var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
        var delimiterRe = "[".concat(escapeString(delimiter), "]");
        var route = start ? "^" : "";
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
          var token = tokens_1[_i];
          if (typeof token === "string") {
            route += escapeString(encode(token));
          } else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
              if (keys)
                keys.push(token);
              if (prefix || suffix) {
                if (token.modifier === "+" || token.modifier === "*") {
                  var mod = token.modifier === "*" ? "?" : "";
                  route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                } else {
                  route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                }
              } else {
                if (token.modifier === "+" || token.modifier === "*") {
                  route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                } else {
                  route += "(".concat(token.pattern, ")").concat(token.modifier);
                }
              }
            } else {
              route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
          }
        }
        if (end) {
          if (!strict)
            route += "".concat(delimiterRe, "?");
          route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
        } else {
          var endToken = tokens[tokens.length - 1];
          var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
          if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
          }
          if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
          }
        }
        return new RegExp(route, flags(options));
      }
      exports.tokensToRegexp = tokensToRegexp;
      function pathToRegexp(path, keys, options) {
        if (path instanceof RegExp)
          return regexpToRegexp(path, keys);
        if (Array.isArray(path))
          return arrayToRegexp(path, keys, options);
        return stringToRegexp(path, keys, options);
      }
      exports.pathToRegexp = pathToRegexp;
    }
  });

  // node_modules/@edgio/core/errors/InvalidRoutePatternError.js
  var require_InvalidRoutePatternError = __commonJS({
    "node_modules/@edgio/core/errors/InvalidRoutePatternError.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var InvalidRoutePatternError = class extends Error {
        constructor(pattern) {
          super(`Route pattern "${pattern}" contains invalid syntax. To force exact matching, wrap the path in the 'exact' function.
See https://docs.edg.io/guides/performance/cdn_as_code/common_routing_patterns for more information.`);
          this.isUserError = true;
        }
      };
      exports.default = InvalidRoutePatternError;
    }
  });

  // node_modules/@edgio/core/utils/toPathRegexp.js
  var require_toPathRegexp = __commonJS({
    "node_modules/@edgio/core/utils/toPathRegexp.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var path_to_regexp_1 = require_dist();
      var InvalidRoutePatternError_1 = __importDefault(require_InvalidRoutePatternError());
      function toPathRegexp(path) {
        if (path) {
          try {
            return (0, path_to_regexp_1.pathToRegexp)(path);
          } catch (e) {
            throw new InvalidRoutePatternError_1.default(path);
          }
        } else {
          return /^.*$/;
        }
      }
      exports.default = toPathRegexp;
    }
  });

  // node_modules/@edgio/core/runtime/rules/RulesConditionalVisitor.js
  var require_RulesConditionalVisitor = __commonJS({
    "node_modules/@edgio/core/runtime/rules/RulesConditionalVisitor.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.operatorsMap = void 0;
      var RulesVisitor_1 = __importDefault(require_RulesVisitor());
      var constants_1 = require_constants2();
      var toRegExp_1 = __importDefault(require_toRegExp());
      var toPathRegexp_1 = __importDefault(require_toPathRegexp());
      exports.operatorsMap = {
        [constants_1.EQUALS]: (l, r) => l === r,
        [constants_1.NOT_EQUALS]: (l, r) => l !== r,
        [constants_1.EQUALS_EXPRESS]: (l, r) => {
          var _a;
          return (0, toPathRegexp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
        },
        [constants_1.NOT_EQUALS_EXPRESS]: (l, r) => {
          var _a;
          return !(0, toPathRegexp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
        },
        [constants_1.LESS_THAN]: (l, r) => Number(l) < Number(r),
        [constants_1.LESS_THAN_OR_EQUALS]: (l, r) => Number(l) <= Number(r),
        [constants_1.GREATER_THAN]: (l, r) => Number(l) > Number(r),
        [constants_1.GREATER_THAN_OR_EQUALS]: (l, r) => Number(l) >= Number(r),
        [constants_1.MATCHES]: (l, r) => {
          var _a;
          return (0, toRegExp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
        },
        [constants_1.NOT_MATCHES]: (l, r) => {
          var _a;
          return !(0, toRegExp_1.default)(r).test((_a = l === null || l === void 0 ? void 0 : l.toString()) !== null && _a !== void 0 ? _a : "");
        },
        [constants_1.IN]: (l, r) => r === null || r === void 0 ? void 0 : r.some((item) => (l === null || l === void 0 ? void 0 : l.toString()) === (item === null || item === void 0 ? void 0 : item.toString())),
        [constants_1.NOT_IN]: (l, r) => !(r === null || r === void 0 ? void 0 : r.some((item) => (l === null || l === void 0 ? void 0 : l.toString()) === (item === null || item === void 0 ? void 0 : item.toString())))
      };
      var RulesConditionalVisitor = class extends RulesVisitor_1.default {
        constructor(evalVariableCallback, callbacks = {}) {
          super(callbacks);
          this.evalVariableCallback = evalVariableCallback;
        }
        visitMatches(matches, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onMatchesVisit) === null || _b === void 0 ? void 0 : _b.call(_a, matches, ruleIndex);
          const ifStatement = matches === null || matches === void 0 ? void 0 : matches.if;
          if (!ifStatement)
            return;
          let conditionIndex = 0;
          while (conditionIndex < matches.if.length) {
            const ifIndex = conditionIndex;
            const thenIndex = conditionIndex + 1;
            const elseIndex = conditionIndex + 2;
            const isLastCondition = elseIndex === matches.if.length - 1;
            const condition = ifStatement[ifIndex];
            let conditionResult = false;
            if (this.isConditionals(condition)) {
              conditionResult = this.evalConditionals(condition, ruleIndex);
            } else if (this.isBoolean(condition)) {
              conditionResult = this.evalBoolean(condition, ruleIndex);
            } else {
              throw new Error(`Unsupported operator "${Object.keys(condition).pop()}".`);
            }
            if (conditionResult) {
              this.visitFeaturesOrRules(ifStatement[thenIndex], ruleIndex);
            } else if (isLastCondition) {
              this.visitFeaturesOrRules(ifStatement[elseIndex], ruleIndex);
            }
            if (isLastCondition) {
              break;
            }
            conditionIndex += 2;
          }
        }
        evalBoolean(boolean, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onBooleanVisit) === null || _b === void 0 ? void 0 : _b.call(_a, boolean, ruleIndex);
          const booleanItemHandler = (item) => {
            if (this.isBoolean(item))
              return this.evalBoolean(item, ruleIndex);
            return this.evalConditionals(item, ruleIndex);
          };
          if (boolean[constants_1.AND]) {
            return boolean[constants_1.AND].every(booleanItemHandler);
          }
          if (boolean[constants_1.OR]) {
            return boolean[constants_1.OR].some(booleanItemHandler);
          }
          return false;
        }
        evalConditionals(conditionals, ruleIndex) {
          var _a, _b;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionalsVisit) === null || _b === void 0 ? void 0 : _b.call(_a, conditionals, ruleIndex);
          const operators = Object.keys(conditionals);
          if (operators.length !== 1) {
            throw new Error(`Conditional statements must contain a single operator. The following operators were found: ${operators.join(", ")}`);
          }
          const [operator, condition] = Object.entries(conditionals)[0];
          return this.evalCondition(condition, operator, ruleIndex);
        }
        evalCondition(condition, operator, ruleIndex) {
          var _a, _b, _c;
          (_b = (_a = this.callbacks) === null || _a === void 0 ? void 0 : _a.onConditionVisit) === null || _b === void 0 ? void 0 : _b.call(_a, condition, operator, ruleIndex);
          const [left, right] = condition.map((operand) => this.evalOperand(operand));
          return (_c = exports.operatorsMap === null || exports.operatorsMap === void 0 ? void 0 : exports.operatorsMap[operator]) === null || _c === void 0 ? void 0 : _c.call(exports.operatorsMap, left, right);
        }
        evalOperand(operand) {
          if (operand == null || typeof operand === "string" || typeof operand === "boolean" || typeof operand === "number" || Array.isArray(operand)) {
            return operand;
          }
          return this.evalVariableCallback(operand);
        }
      };
      exports.default = RulesConditionalVisitor;
    }
  });

  // node_modules/@edgio/core/utils/deepMerge.js
  var require_deepMerge = __commonJS({
    "node_modules/@edgio/core/utils/deepMerge.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function deepMerge(obj1, obj2, depth = 0) {
        let merged = __spreadValues(__spreadValues({}, obj1 && typeof obj1 === "object" ? obj1 : {}), obj2 && typeof obj2 === "object" ? obj2 : {});
        if (depth === 0)
          return merged;
        Object.keys(merged).forEach((key) => {
          const obj1DeepValue = obj1 && obj1[key];
          const obj2DeepValue = obj2 && obj2[key];
          if (typeof obj1DeepValue === "object" && typeof obj2DeepValue === "object") {
            merged[key] = deepMerge(obj1DeepValue, obj2DeepValue, depth - 1);
          }
        });
        return merged;
      }
      exports.default = deepMerge;
    }
  });

  // node_modules/@edgio/core/router/CacheManifest.js
  var require_CacheManifest = __commonJS({
    "node_modules/@edgio/core/router/CacheManifest.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.CacheManifest = void 0;
      var constants_1 = require_constants();
      var fromTimeUnitAbbrev_1 = require_fromTimeUnitAbbrev();
      var RulesConditionalVisitor_1 = __importDefault(require_RulesConditionalVisitor());
      var deepMerge_1 = __importDefault(require_deepMerge());
      var CacheManifest = class {
        constructor() {
          this.rules = [];
        }
        static from(obj) {
          return Object.assign(new CacheManifest(), obj);
        }
        shouldPrefetch(url) {
          let matchedFeatures = {};
          new RulesConditionalVisitor_1.default(this.getEvalVariableCallback(url), {
            onFeaturesVisit: (features) => {
              var _a;
              if ((_a = features === null || features === void 0 ? void 0 : features.comment) === null || _a === void 0 ? void 0 : _a.includes(constants_1.EDGIO_CACHE_MANIFEST_RULE_IGNORE_COMMENT)) {
                return;
              }
              matchedFeatures = (0, deepMerge_1.default)(matchedFeatures, features, 3);
            }
          }).visit(this.rules);
          return this.isCacheable(matchedFeatures);
        }
        getEvalVariableCallback(url) {
          return (variable) => {
            var _a;
            if (variable["request"]) {
              const param = variable["request"];
              if (param === "method")
                return "GET";
              if (param === "origin_path")
                return url.pathname;
              if (param === "path")
                return url.pathname;
              if (param === "origin_query_string")
                return url.search.split("?")[1];
              if (param === "query")
                return url.search.split("?")[1];
              if (param === "querystring")
                return url.search.split("?")[1];
              if (param === "scheme")
                return url.protocol.replace(":", "").toUpperCase();
            }
            if (variable["request.origin_query"]) {
              return url.searchParams.get(variable["request.origin_query"]) || void 0;
            }
            if (variable["request.path"]) {
              const param = variable["request.path"];
              if (param === "filename")
                return url.pathname.split("/").pop();
              if (param === "directory")
                return (_a = url.pathname.match(/(.*)[/\\]/)) === null || _a === void 0 ? void 0 : _a[1];
              if (param === "extension") {
                const extension = url.pathname.split(".").pop();
                return extension ? `.${extension}` : void 0;
              }
            }
            return void 0;
          };
        }
        isCacheable(features) {
          const {caching} = features;
          return Boolean((caching === null || caching === void 0 ? void 0 : caching.max_age) !== void 0 && (caching === null || caching === void 0 ? void 0 : caching.service_worker_max_age) && (0, fromTimeUnitAbbrev_1.fromTimeUnitAbbrev)(caching.service_worker_max_age) > 0 && !(caching === null || caching === void 0 ? void 0 : caching.bypass_cache));
        }
        serialize() {
          return `self.${constants_1.EDGIO_CACHE_MANIFEST_JS_VAR_NAME}=${JSON.stringify(this)}`;
        }
      };
      exports.CacheManifest = CacheManifest;
    }
  });

  // node_modules/@edgio/prefetch/window/prefetchWhenVisible.js
  var require_prefetchWhenVisible = __commonJS({
    "node_modules/@edgio/prefetch/window/prefetchWhenVisible.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var prefetch_1 = require_prefetch();
      var runWhenVisible_1 = __importDefault(require_runWhenVisible());
      function prefetchWhenVisible(el) {
        (0, runWhenVisible_1.default)(el, (innerEl) => {
          const url = innerEl.getAttribute("href");
          if (url) {
            (0, prefetch_1.prefetch)(url);
          }
        });
      }
      exports.default = prefetchWhenVisible;
    }
  });

  // node_modules/@edgio/prefetch/window/watchLinks.js
  var require_watchLinks = __commonJS({
    "node_modules/@edgio/prefetch/window/watchLinks.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var prefetchWhenVisible_1 = __importDefault(require_prefetchWhenVisible());
      var observerDefaults = {
        disabled: false,
        attributes: false
      };
      var observer;
      function watchLinks(cacheManifest, prefetchPatterns, observerOpts) {
        if (typeof MutationObserver === "undefined")
          return;
        observerOpts = __spreadValues(__spreadValues({}, observerDefaults), observerOpts);
        if (!observer) {
          observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
              filterByHref(mutation.addedNodes, cacheManifest, prefetchPatterns).forEach(prefetchWhenVisible_1.default);
            }
          });
          if (!observerOpts.disabled) {
            observer.observe(document.body, {
              attributes: observerOpts.attributes,
              childList: true,
              subtree: true
            });
          }
        }
        filterByHref(document.querySelectorAll("a"), cacheManifest, prefetchPatterns).forEach(prefetchWhenVisible_1.default);
      }
      exports.default = watchLinks;
      function filterByHref(nodes, cacheManifest, prefetchPatterns) {
        const results = new Set();
        const isMatchingLink = (el) => {
          const href = el.getAttribute("href");
          if (!href || el.tagName.toLowerCase() !== "a") {
            return false;
          }
          const hrefUrl = new URL(href, window.location.href);
          if (hrefUrl.hostname !== window.location.hostname) {
            return false;
          }
          if (prefetchPatterns.some((pattern) => pattern.test(hrefUrl.pathname))) {
            return true;
          }
          return cacheManifest.shouldPrefetch(hrefUrl);
        };
        Array.from(nodes).forEach((n) => {
          if (n.nodeType === Node.ELEMENT_NODE) {
            const el = n;
            const links = [el, ...Array.from(el.querySelectorAll("a"))];
            links.filter(isMatchingLink).forEach((link) => results.add(link));
          }
        });
        return results;
      }
    }
  });

  // node_modules/@edgio/prefetch/window/install.js
  var require_install = __commonJS({
    "node_modules/@edgio/prefetch/window/install.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var prefetch_1 = require_prefetch();
      var registerServiceWorker_1 = require_registerServiceWorker();
      var watchElements_1 = __importDefault(require_watchElements());
      var listenForSwMessages_1 = __importDefault(require_listenForSwMessages());
      var loadManifest_1 = __importDefault(require_loadManifest());
      var CacheManifest_1 = require_CacheManifest();
      var watchLinks_1 = __importDefault(require_watchLinks());
      var defaults = {
        includeCacheMisses: false,
        cacheHost: void 0,
        forcePrefetchRatio: 0
      };
      async function install2(options) {
        options = __spreadValues(__spreadValues({}, defaults), options);
        const {serviceWorker} = navigator;
        if (typeof serviceWorker === "undefined") {
          return;
        }
        const {prefetchURLs, watch, serviceWorkerPath = "/service-worker.js", observe, prefetchPatterns = []} = options;
        await (0, loadManifest_1.default)({cacheHost: options.cacheHost});
        const cacheManifest = CacheManifest_1.CacheManifest.from(window.__EDGIO_CACHE_MANIFEST__ || {});
        (0, prefetch_1.configure)(__spreadValues({}, options));
        (0, registerServiceWorker_1.registerServiceWorker)(serviceWorkerPath);
        prefetchURLs === null || prefetchURLs === void 0 ? void 0 : prefetchURLs.forEach((url) => (0, prefetch_1.prefetch)(url));
        (0, watchLinks_1.default)(cacheManifest, prefetchPatterns, observe);
        (0, watchElements_1.default)(watch);
        (0, listenForSwMessages_1.default)();
      }
      exports.default = install2;
    }
  });

  // node_modules/@edgio/prefetch/window/index.js
  var require_window = __commonJS({
    "node_modules/@edgio/prefetch/window/index.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.install = exports.waitForServiceWorker = exports.prefetch = void 0;
      var prefetch_1 = require_prefetch();
      Object.defineProperty(exports, "prefetch", {enumerable: true, get: function() {
        return prefetch_1.prefetch;
      }});
      var waitForServiceWorker_1 = require_waitForServiceWorker();
      Object.defineProperty(exports, "waitForServiceWorker", {enumerable: true, get: function() {
        return __importDefault(waitForServiceWorker_1).default;
      }});
      var install_1 = require_install();
      Object.defineProperty(exports, "install", {enumerable: true, get: function() {
        return __importDefault(install_1).default;
      }});
    }
  });

  // src/browser.ts
  init_define_process();
  var import_window = __toModule(require_window());
  document.addEventListener("DOMContentLoaded", () => {
    (0, import_window.install)({
      serviceWorkerPath: "/proxied-service-worker.js",
      includeCacheMisses: true
    });
  });
})();
