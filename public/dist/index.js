// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4RBmQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "31cc20e644ee11f1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7SwCM":[function(require,module,exports) {
var _styleScss = require("./assets/css/style.scss");
var _components = require("./components");
var _selectors = require("./config/selectors");
console.log("savdyasgd");
function runApp() {
    (0, _components.createParallax)();
    (0, _components.animateMenu)((0, _selectors.selectors).btnMobile);
    (0, _components.collapseFaq)();
    (0, _components.createCarousel)();
}
document.addEventListener("DOMContentLoaded", runApp);
console.log("App running...");

},{"./components":"jZZss","./config/selectors":"hRRMd","./assets/css/style.scss":"73UNA"}],"jZZss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postcss = require("postcss");
var _animateMenu = require("./animate-menu");
parcelHelpers.exportAll(_animateMenu, exports);
var _parallax = require("./parallax");
parcelHelpers.exportAll(_parallax, exports);
// export * from "./carousel-depoimentos.js";
var _collapseFaq = require("./collapseFaq");
parcelHelpers.exportAll(_collapseFaq, exports);
var _carousel = require("./carousel");
parcelHelpers.exportAll(_carousel, exports);
var _smoothScroll = require("./smooth-scroll");
parcelHelpers.exportAll(_smoothScroll, exports);

},{"postcss":"gauyy","./animate-menu":"gCFeb","./parallax":"8OEwZ","./collapseFaq":"8geFx","./carousel":"acPBC","./smooth-scroll":"3LPJw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gauyy":[function(require,module,exports) {
"use strict";
let CssSyntaxError = require("b10ff74be92effe5");
let Declaration = require("e1b3f4a81ad263d7");
let LazyResult = require("98beac8268c26c77");
let Container = require("5a6c26e91a6f7548");
let Processor = require("ffc915d6024b3e92");
let stringify = require("af7e865f9160336b");
let fromJSON = require("402bb88f91778ec7");
let Document = require("20f279f65c021d78");
let Warning = require("441346cd2e7d2289");
let Comment = require("ec9807b7166c6953");
let AtRule = require("c8744746388d2c5a");
let Result = require("8ede7bc063987fcd");
let Input = require("23bd67353a8ebe60");
let parse = require("fef64e7b91bf4f48");
let list = require("c995edec95e97e3");
let Rule = require("2ad60c7e7fcaf771");
let Root = require("ffb3b13c4b9f15e9");
let Node = require("701d1d99ab0f2544");
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) plugins = plugins[0];
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        // eslint-disable-next-line no-console
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            // eslint-disable-next-line no-console
            console.warn(name + ": postcss.plugin was deprecated. Migration guide:\n" + "https://evilmartians.com/chronicles/postcss-8-plugin-migration");
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, "postcss", {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults);
postcss.atRule = (defaults)=>new AtRule(defaults);
postcss.decl = (defaults)=>new Declaration(defaults);
postcss.rule = (defaults)=>new Rule(defaults);
postcss.root = (defaults)=>new Root(defaults);
postcss.document = (defaults)=>new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;

},{"b10ff74be92effe5":"5TKyW","e1b3f4a81ad263d7":"2mU8a","98beac8268c26c77":"580Su","5a6c26e91a6f7548":"1gj6C","ffc915d6024b3e92":"lU6wZ","af7e865f9160336b":"a0MwE","402bb88f91778ec7":"iiNZS","20f279f65c021d78":"dK3sP","441346cd2e7d2289":"lw5j2","ec9807b7166c6953":"5CBjv","c8744746388d2c5a":"kbVAt","8ede7bc063987fcd":"dmoqr","23bd67353a8ebe60":"fb1UO","fef64e7b91bf4f48":"ioa1B","c995edec95e97e3":"hZo3l","2ad60c7e7fcaf771":"4SFJx","ffb3b13c4b9f15e9":"hsDFv","701d1d99ab0f2544":"5azBO"}],"5TKyW":[function(require,module,exports) {
"use strict";
let pico = require("8f3ba2bb41d04147");
let terminalHighlight = require("a97ea3d69d15b951");
class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin){
        super(message);
        this.name = "CssSyntaxError";
        this.reason = message;
        if (file) this.file = file;
        if (source) this.source = source;
        if (plugin) this.plugin = plugin;
        if (typeof line !== "undefined" && typeof column !== "undefined") {
            if (typeof line === "number") {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) Error.captureStackTrace(this, CssSyntaxError);
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        if (typeof this.line !== "undefined") this.message += ":" + this.line + ":" + this.column;
        this.message += ": " + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return "";
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        if (terminalHighlight) {
            if (color) css = terminalHighlight(css);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        let mark, aside;
        if (color) {
            let { bold , red , gray  } = pico.createColors(true);
            mark = (text)=>bold(red(text));
            aside = (text)=>gray(text);
        } else mark = aside = (str)=>str;
        return lines.slice(start, end).map((line, index)=>{
            let number = start + 1 + index;
            let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
            if (number === this.line) {
                let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
            }
            return " " + aside(gutter) + line;
        }).join("\n");
    }
    toString() {
        let code = this.showSourceCode();
        if (code) code = "\n\n" + code + "\n";
        return this.name + ": " + this.message + code;
    }
}
module.exports = CssSyntaxError;
CssSyntaxError.default = CssSyntaxError;

},{"8f3ba2bb41d04147":"1298x","a97ea3d69d15b951":"jhUEF"}],"1298x":[function(require,module,exports) {
var x = String;
var create = function() {
    return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x
    };
};
module.exports = create();
module.exports.createColors = create;

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"2mU8a":[function(require,module,exports) {
"use strict";
let Node = require("f3a8c60c6a10604a");
class Declaration extends Node {
    constructor(defaults){
        if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") defaults = {
            ...defaults,
            value: String(defaults.value)
        };
        super(defaults);
        this.type = "decl";
    }
    get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
    }
}
module.exports = Declaration;
Declaration.default = Declaration;

},{"f3a8c60c6a10604a":"5azBO"}],"5azBO":[function(require,module,exports) {
"use strict";
let { isClean , my  } = require("f5b73c752971b753");
let CssSyntaxError = require("1c318f1b9cf2f460");
let Stringifier = require("b48b08fd4bce988b");
let stringify = require("8f5e68c62294b4f3");
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        if (i === "proxyCache") continue;
        let value = obj[i];
        let type = typeof value;
        if (i === "parent" && type === "object") {
            if (parent) cloned[i] = parent;
        } else if (i === "source") cloned[i] = value;
        else if (Array.isArray(value)) cloned[i] = value.map((j)=>cloneNode(j, cloned));
        else {
            if (type === "object" && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }
    return cloned;
}
class Node {
    constructor(defaults = {}){
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for(let name in defaults)if (name === "nodes") {
            this.nodes = [];
            for (let node of defaults[name])if (typeof node.clone === "function") this.append(node.clone());
            else this.append(node);
        } else this[name] = defaults[name];
    }
    error(message, opts = {}) {
        if (this.source) {
            let { start , end  } = this.rangeBy(opts);
            return this.source.input.error(message, {
                line: start.line,
                column: start.column
            }, {
                line: end.line,
                column: end.column
            }, opts);
        }
        return new CssSyntaxError(message);
    }
    warn(result, text, opts) {
        let data = {
            node: this
        };
        for(let i in opts)data[i] = opts[i];
        return result.warn(text, data);
    }
    remove() {
        if (this.parent) this.parent.removeChild(this);
        this.parent = undefined;
        return this;
    }
    toString(stringifier = stringify) {
        if (stringifier.stringify) stringifier = stringifier.stringify;
        let result = "";
        stringifier(this, (i)=>{
            result += i;
        });
        return result;
    }
    assign(overrides = {}) {
        for(let name in overrides)this[name] = overrides[name];
        return this;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides)cloned[name] = overrides[name];
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes){
                if (node === this) foundSelf = true;
                else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node);
                    bookmark = node;
                } else this.parent.insertBefore(bookmark, node);
            }
            if (!foundSelf) this.remove();
        }
        return this;
    }
    next() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
    }
    prev() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    root() {
        let result = this;
        while(result.parent && result.parent.type !== "document")result = result.parent;
        return result;
    }
    raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) continue;
            if (name === "parent" || name === "proxyCache") continue;
            let value = this[name];
            if (Array.isArray(value)) fixed[name] = value.map((i)=>{
                if (typeof i === "object" && i.toJSON) return i.toJSON(null, inputs);
                else return i;
            });
            else if (typeof value === "object" && value.toJSON) fixed[name] = value.toJSON(null, inputs);
            else if (name === "source") {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    inputId,
                    start: value.start,
                    end: value.end
                };
            } else fixed[name] = value;
        }
        if (emitInputs) fixed.inputs = [
            ...inputs.keys()
        ].map((input)=>input.toJSON());
        return fixed;
    }
    positionInside(index) {
        let string = this.toString();
        let column = this.source.start.column;
        let line = this.source.start.line;
        for(let i = 0; i < index; i++)if (string[i] === "\n") {
            column = 1;
            line += 1;
        } else column += 1;
        return {
            line,
            column
        };
    }
    positionBy(opts) {
        let pos = this.source.start;
        if (opts.index) pos = this.positionInside(opts.index);
        else if (opts.word) {
            let index = this.toString().indexOf(opts.word);
            if (index !== -1) pos = this.positionInside(index);
        }
        return pos;
    }
    rangeBy(opts) {
        let start = {
            line: this.source.start.line,
            column: this.source.start.column
        };
        let end = this.source.end ? {
            line: this.source.end.line,
            column: this.source.end.column + 1
        } : {
            line: start.line,
            column: start.column + 1
        };
        if (opts.word) {
            let index = this.toString().indexOf(opts.word);
            if (index !== -1) {
                start = this.positionInside(index);
                end = this.positionInside(index + opts.word.length);
            }
        } else {
            if (opts.start) start = {
                line: opts.start.line,
                column: opts.start.column
            };
            else if (opts.index) start = this.positionInside(opts.index);
            if (opts.end) end = {
                line: opts.end.line,
                column: opts.end.column
            };
            else if (opts.endIndex) end = this.positionInside(opts.endIndex);
            else if (opts.index) end = this.positionInside(opts.index + 1);
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) end = {
            line: start.line,
            column: start.column + 1
        };
        return {
            start,
            end
        };
    }
    getProxyProcessor() {
        return {
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */ prop === "text") node.markDirty();
                return true;
            },
            get (node, prop) {
                if (prop === "proxyOf") return node;
                else if (prop === "root") return ()=>node.root().toProxy();
                else return node[prop];
            }
        };
    }
    toProxy() {
        if (!this.proxyCache) this.proxyCache = new Proxy(this, this.getProxyProcessor());
        return this.proxyCache;
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
    }
    markDirty() {
        if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while(next = next.parent)next[isClean] = false;
        }
    }
    get proxyOf() {
        return this;
    }
}
module.exports = Node;
Node.default = Node;

},{"f5b73c752971b753":"9Ej2B","1c318f1b9cf2f460":"5TKyW","b48b08fd4bce988b":"ebmGP","8f5e68c62294b4f3":"a0MwE"}],"9Ej2B":[function(require,module,exports) {
"use strict";
module.exports.isClean = Symbol("isClean");
module.exports.my = Symbol("my");

},{}],"ebmGP":[function(require,module,exports) {
"use strict";
const DEFAULT_RAW = {
    colon: ": ",
    indent: "    ",
    beforeDecl: "\n",
    beforeRule: "\n",
    beforeOpen: " ",
    beforeClose: "\n",
    beforeComment: "\n",
    after: "\n",
    emptyBody: "",
    commentLeft: " ",
    commentRight: " ",
    semicolon: false
};
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
class Stringifier {
    constructor(builder){
        this.builder = builder;
    }
    stringify(node, semicolon) {
        /* c8 ignore start */ if (!this[node.type]) throw new Error("Unknown AST node type " + node.type + ". " + "Maybe you need to change PostCSS stringifier.");
        /* c8 ignore stop */ this[node.type](node, semicolon);
    }
    document(node) {
        this.body(node);
    }
    root(node) {
        this.body(node);
        if (node.raws.after) this.builder(node.raws.after);
    }
    comment(node) {
        let left = this.raw(node, "left", "commentLeft");
        let right = this.raw(node, "right", "commentRight");
        this.builder("/*" + left + node.text + right + "*/", node);
    }
    decl(node, semicolon) {
        let between = this.raw(node, "between", "colon");
        let string = node.prop + between + this.rawValue(node, "value");
        if (node.important) string += node.raws.important || " !important";
        if (semicolon) string += ";";
        this.builder(string, node);
    }
    rule(node) {
        this.block(node, this.rawValue(node, "selector"));
        if (node.raws.ownSemicolon) this.builder(node.raws.ownSemicolon, node, "end");
    }
    atrule(node, semicolon) {
        let name = "@" + node.name;
        let params = node.params ? this.rawValue(node, "params") : "";
        if (typeof node.raws.afterName !== "undefined") name += node.raws.afterName;
        else if (params) name += " ";
        if (node.nodes) this.block(node, name + params);
        else {
            let end = (node.raws.between || "") + (semicolon ? ";" : "");
            this.builder(name + params + end, node);
        }
    }
    body(node) {
        let last = node.nodes.length - 1;
        while(last > 0){
            if (node.nodes[last].type !== "comment") break;
            last -= 1;
        }
        let semicolon = this.raw(node, "semicolon");
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            let before = this.raw(child, "before");
            if (before) this.builder(before);
            this.stringify(child, last !== i || semicolon);
        }
    }
    block(node, start) {
        let between = this.raw(node, "between", "beforeOpen");
        this.builder(start + between + "{", node, "start");
        let after;
        if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, "after");
        } else after = this.raw(node, "after", "emptyBody");
        if (after) this.builder(after);
        this.builder("}", node, "end");
    }
    raw(node, own, detect) {
        let value;
        if (!detect) detect = own;
        // Already had
        if (own) {
            value = node.raws[own];
            if (typeof value !== "undefined") return value;
        }
        let parent = node.parent;
        if (detect === "before") {
            // Hack for first rule in CSS
            if (!parent || parent.type === "root" && parent.first === node) return "";
            // `root` nodes in `document` should use only their own raws
            if (parent && parent.type === "document") return "";
        }
        // Floating child without parent
        if (!parent) return DEFAULT_RAW[detect];
        // Detect style by other nodes
        let root = node.root();
        if (!root.rawCache) root.rawCache = {};
        if (typeof root.rawCache[detect] !== "undefined") return root.rawCache[detect];
        if (detect === "before" || detect === "after") return this.beforeAfter(node, detect);
        else {
            let method = "raw" + capitalize(detect);
            if (this[method]) value = this[method](root, node);
            else root.walk((i)=>{
                value = i.raws[own];
                if (typeof value !== "undefined") return false;
            });
        }
        if (typeof value === "undefined") value = DEFAULT_RAW[detect];
        root.rawCache[detect] = value;
        return value;
    }
    rawSemicolon(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length && i.last.type === "decl") {
                value = i.raws.semicolon;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawEmptyBody(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length === 0) {
                value = i.raws.after;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawIndent(root) {
        if (root.raws.indent) return root.raws.indent;
        let value;
        root.walk((i)=>{
            let p = i.parent;
            if (p && p !== root && p.parent && p.parent === root) {
                if (typeof i.raws.before !== "undefined") {
                    let parts = i.raws.before.split("\n");
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, "");
                    return false;
                }
            }
        });
        return value;
    }
    rawBeforeComment(root, node) {
        let value;
        root.walkComments((i)=>{
            if (typeof i.raws.before !== "undefined") {
                value = i.raws.before;
                if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                return false;
            }
        });
        if (typeof value === "undefined") value = this.raw(node, null, "beforeDecl");
        else if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeDecl(root, node) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.before !== "undefined") {
                value = i.raws.before;
                if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                return false;
            }
        });
        if (typeof value === "undefined") value = this.raw(node, null, "beforeRule");
        else if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeRule(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && (i.parent !== root || root.first !== i)) {
                if (typeof i.raws.before !== "undefined") {
                    value = i.raws.before;
                    if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeClose(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length > 0) {
                if (typeof i.raws.after !== "undefined") {
                    value = i.raws.after;
                    if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeOpen(root) {
        let value;
        root.walk((i)=>{
            if (i.type !== "decl") {
                value = i.raws.between;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawColon(root) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.between !== "undefined") {
                value = i.raws.between.replace(/[^\s:]/g, "");
                return false;
            }
        });
        return value;
    }
    beforeAfter(node, detect) {
        let value;
        if (node.type === "decl") value = this.raw(node, null, "beforeDecl");
        else if (node.type === "comment") value = this.raw(node, null, "beforeComment");
        else if (detect === "before") value = this.raw(node, null, "beforeRule");
        else value = this.raw(node, null, "beforeClose");
        let buf = node.parent;
        let depth = 0;
        while(buf && buf.type !== "root"){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes("\n")) {
            let indent = this.raw(node, null, "indent");
            if (indent.length) for(let step = 0; step < depth; step++)value += indent;
        }
        return value;
    }
    rawValue(node, prop) {
        let value = node[prop];
        let raw = node.raws[prop];
        if (raw && raw.value === value) return raw.raw;
        return value;
    }
}
module.exports = Stringifier;
Stringifier.default = Stringifier;

},{}],"a0MwE":[function(require,module,exports) {
"use strict";
let Stringifier = require("3c6c57ed0b61ac53");
function stringify(node, builder) {
    let str = new Stringifier(builder);
    str.stringify(node);
}
module.exports = stringify;
stringify.default = stringify;

},{"3c6c57ed0b61ac53":"ebmGP"}],"580Su":[function(require,module,exports) {
"use strict";
let { isClean , my  } = require("d6dd0be9a73dd09c");
let MapGenerator = require("d885ad499942c0a3");
let stringify = require("c60f5fdd1742ac5e");
let Container = require("e2e3407af2e44645");
let Document = require("2cd27716397344fc");
let warnOnce = require("763734f410f1d237");
let Result = require("74a2ec20d53969f4");
let parse = require("d47ad25035d5d8e1");
let Root = require("f13dbfbc0e7916d8");
const TYPE_TO_CLASS_NAME = {
    document: "Document",
    root: "Root",
    atrule: "AtRule",
    rule: "Rule",
    decl: "Declaration",
    comment: "Comment"
};
const PLUGIN_PROPS = {
    postcssPlugin: true,
    prepare: true,
    Once: true,
    Document: true,
    Root: true,
    Declaration: true,
    Rule: true,
    AtRule: true,
    Comment: true,
    DeclarationExit: true,
    RuleExit: true,
    AtRuleExit: true,
    CommentExit: true,
    RootExit: true,
    DocumentExit: true,
    OnceExit: true
};
const NOT_VISITORS = {
    postcssPlugin: true,
    prepare: true,
    Once: true
};
const CHILDREN = 0;
function isPromise(obj) {
    return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node.type];
    if (node.type === "decl") key = node.prop.toLowerCase();
    else if (node.type === "atrule") key = node.name.toLowerCase();
    if (key && node.append) return [
        type,
        type + "-" + key,
        CHILDREN,
        type + "Exit",
        type + "Exit-" + key
    ];
    else if (key) return [
        type,
        type + "-" + key,
        type + "Exit",
        type + "Exit-" + key
    ];
    else if (node.append) return [
        type,
        CHILDREN,
        type + "Exit"
    ];
    else return [
        type,
        type + "Exit"
    ];
}
function toStack(node) {
    let events;
    if (node.type === "document") events = [
        "Document",
        CHILDREN,
        "DocumentExit"
    ];
    else if (node.type === "root") events = [
        "Root",
        CHILDREN,
        "RootExit"
    ];
    else events = getEvents(node);
    return {
        node,
        events,
        eventIndex: 0,
        visitors: [],
        visitorIndex: 0,
        iterator: 0
    };
}
function cleanMarks(node) {
    node[isClean] = false;
    if (node.nodes) node.nodes.forEach((i)=>cleanMarks(i));
    return node;
}
let postcss = {};
class LazyResult {
    constructor(processor, css, opts){
        this.stringified = false;
        this.processed = false;
        let root;
        if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) root = cleanMarks(css);
        else if (css instanceof LazyResult || css instanceof Result) {
            root = cleanMarks(css.root);
            if (css.map) {
                if (typeof opts.map === "undefined") opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser = parse;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;
            try {
                root = parser(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root && !root[my]) /* c8 ignore next 2 */ Container.rebuild(root);
        }
        this.result = new Result(processor, root, opts);
        this.helpers = {
            ...postcss,
            result: this.result,
            postcss
        };
        this.plugins = this.processor.plugins.map((plugin)=>{
            if (typeof plugin === "object" && plugin.prepare) return {
                ...plugin,
                ...plugin.prepare(this.result)
            };
            else return plugin;
        });
    }
    get [Symbol.toStringTag]() {
        return "LazyResult";
    }
    get processor() {
        return this.result.processor;
    }
    get opts() {
        return this.result.opts;
    }
    get css() {
        return this.stringify().css;
    }
    get content() {
        return this.stringify().content;
    }
    get map() {
        return this.stringify().map;
    }
    get root() {
        return this.sync().root;
    }
    get messages() {
        return this.sync().messages;
    }
    warnings() {
        return this.sync().warnings();
    }
    toString() {
        return this.css;
    }
    then(onFulfilled, onRejected) {
        if (!("from" in this.opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) this.processing = this.runAsync();
        return this.processing;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) throw this.getAsyncError();
        for (let plugin of this.plugins){
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) throw this.getAsyncError();
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                this.walkSync(root);
            }
            if (this.listeners.OnceExit) {
                if (root.type === "document") for (let subRoot of root.nodes)this.visitSync(this.listeners.OnceExit, subRoot);
                else this.visitSync(this.listeners.OnceExit, root);
            }
        }
        return this.result;
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    walkSync(node) {
        node[isClean] = true;
        let events = getEvents(node);
        for (let event of events){
            if (event === CHILDREN) {
                if (node.nodes) node.each((child)=>{
                    if (!child[isClean]) this.walkSync(child);
                });
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node.toProxy())) return;
                }
            }
        }
    }
    visitSync(visitors, node) {
        for (let [plugin, visitor] of visitors){
            this.result.lastPlugin = plugin;
            let promise;
            try {
                promise = visitor(node, this.helpers);
            } catch (e) {
                throw this.handleError(e, node.proxyOf);
            }
            if (node.type !== "root" && node.type !== "document" && !node.parent) return true;
            if (isPromise(promise)) throw this.getAsyncError();
        }
    }
    runOnRoot(plugin) {
        this.result.lastPlugin = plugin;
        try {
            if (typeof plugin === "object" && plugin.Once) {
                if (this.result.root.type === "document") {
                    let roots = this.result.root.nodes.map((root)=>plugin.Once(root, this.helpers));
                    if (isPromise(roots[0])) return Promise.all(roots);
                    return roots;
                }
                return plugin.Once(this.result.root, this.helpers);
            } else if (typeof plugin === "function") return plugin(this.result.root, this.result);
        } catch (error) {
            throw this.handleError(error);
        }
    }
    getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(error, node) {
        let plugin = this.result.lastPlugin;
        try {
            if (node) node.addToError(error);
            this.error = error;
            if (error.name === "CssSyntaxError" && !error.plugin) {
                error.plugin = plugin.postcssPlugin;
                error.setMessage();
            } else if (plugin.postcssVersion) {
                let pluginName = plugin.postcssPlugin;
                let pluginVer = plugin.postcssVersion;
                let runtimeVer = this.result.processor.version;
                let a = pluginVer.split(".");
                let b = runtimeVer.split(".");
                if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) // eslint-disable-next-line no-console
                console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
            }
        } catch (err) {
            /* c8 ignore next 3 */ // eslint-disable-next-line no-console
            if (console && console.error) console.error(err);
        }
        return error;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i = 0; i < this.plugins.length; i++){
            let plugin = this.plugins[i];
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) try {
                await promise;
            } catch (error) {
                throw this.handleError(error);
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                let stack = [
                    toStack(root)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise(promise)) try {
                        await promise;
                    } catch (e) {
                        let node = stack[stack.length - 1].node;
                        throw this.handleError(e, node);
                    }
                }
            }
            if (this.listeners.OnceExit) for (let [plugin, visitor] of this.listeners.OnceExit){
                this.result.lastPlugin = plugin;
                try {
                    if (root.type === "document") {
                        let roots = root.nodes.map((subRoot)=>visitor(subRoot, this.helpers));
                        await Promise.all(roots);
                    } else await visitor(root, this.helpers);
                } catch (e) {
                    throw this.handleError(e);
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin,
                cb
            ]);
        };
        for (let plugin of this.plugins){
            if (typeof plugin === "object") for(let event in plugin){
                if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. ` + `Try to update PostCSS (${this.processor.version} now).`);
                if (!NOT_VISITORS[event]) {
                    if (typeof plugin[event] === "object") {
                        for(let filter in plugin[event])if (filter === "*") add(plugin, event, plugin[event][filter]);
                        else add(plugin, event + "-" + filter.toLowerCase(), plugin[event][filter]);
                    } else if (typeof plugin[event] === "function") add(plugin, event, plugin[event]);
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node , visitors  } = visit;
        if (node.type !== "root" && node.type !== "document" && !node.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
                visit.visitors = [];
                visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin;
            try {
                return visitor(node.toProxy(), this.helpers);
            } catch (e) {
                throw this.handleError(e, node);
            }
        }
        if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while(child = node.nodes[node.indexes[iterator]]){
                node.indexes[iterator] += 1;
                if (!child[isClean]) {
                    child[isClean] = true;
                    stack.push(toStack(child));
                    return;
                }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
        }
        let events = visit.events;
        while(visit.eventIndex < events.length){
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
                if (node.nodes && node.nodes.length) {
                    node[isClean] = true;
                    visit.iterator = node.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
}
LazyResult.registerPostcss = (dependant)=>{
    postcss = dependant;
};
module.exports = LazyResult;
LazyResult.default = LazyResult;
Root.registerLazyResult(LazyResult);
Document.registerLazyResult(LazyResult);

},{"d6dd0be9a73dd09c":"9Ej2B","d885ad499942c0a3":"ghfT0","c60f5fdd1742ac5e":"a0MwE","e2e3407af2e44645":"1gj6C","2cd27716397344fc":"dK3sP","763734f410f1d237":"dpzGz","74a2ec20d53969f4":"dmoqr","d47ad25035d5d8e1":"ioa1B","f13dbfbc0e7916d8":"hsDFv"}],"ghfT0":[function(require,module,exports) {
var Buffer = require("abc51fc29fac15b3").Buffer;
"use strict";
let { SourceMapConsumer , SourceMapGenerator  } = require("968821e93a17816d");
let { dirname , resolve , relative , sep  } = require("d4bacf81a7c5190f");
let { pathToFileURL  } = require("575da199427ae7bd");
let Input = require("fbe284f460cf9ea6");
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator {
    constructor(stringify, root, opts, cssString){
        this.stringify = stringify;
        this.mapOpts = opts.map || {};
        this.root = root;
        this.opts = opts;
        this.css = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
    }
    isMap() {
        if (typeof this.opts.map !== "undefined") return !!this.opts.map;
        return this.previous().length > 0;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) this.root.walk((node)=>{
                if (node.source && node.source.input.map) {
                    let map = node.source.input.map;
                    if (!this.previousMaps.includes(map)) this.previousMaps.push(map);
                }
            });
            else {
                let input = new Input(this.css, this.opts);
                if (input.map) this.previousMaps.push(input.map);
            }
        }
        return this.previousMaps;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== "undefined") return this.mapOpts.inline;
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== "undefined" && annotation !== true) return false;
        if (this.previous().length) return this.previous().some((i)=>i.inline);
        return true;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== "undefined") return this.mapOpts.sourcesContent;
        if (this.previous().length) return this.previous().some((i)=>i.withContent());
        return true;
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node;
            for(let i = this.root.nodes.length - 1; i >= 0; i--){
                node = this.root.nodes[i];
                if (node.type !== "comment") continue;
                if (node.text.indexOf("# sourceMappingURL=") === 0) this.root.removeChild(i);
            }
        } else if (this.css) this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, "");
    }
    setSourcesContent() {
        let already = {};
        if (this.root) this.root.walk((node)=>{
            if (node.source) {
                let from = node.source.input.from;
                if (from && !already[from]) {
                    already[from] = true;
                    let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                    this.map.setSourceContent(fromUrl, node.source.input.css);
                }
            }
        });
        else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(from, this.css);
        }
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer(prev.text);
                if (map.sourcesContent) map.sourcesContent = map.sourcesContent.map(()=>null);
            } else map = prev.consumer();
            this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
        }
    }
    isAnnotation() {
        if (this.isInline()) return true;
        if (typeof this.mapOpts.annotation !== "undefined") return this.mapOpts.annotation;
        if (this.previous().length) return this.previous().some((i)=>i.annotation);
        return true;
    }
    toBase64(str) {
        if (Buffer) return Buffer.from(str).toString("base64");
        else return window.btoa(unescape(encodeURIComponent(str)));
    }
    addAnnotation() {
        let content;
        if (this.isInline()) content = "data:application/json;base64," + this.toBase64(this.map.toString());
        else if (typeof this.mapOpts.annotation === "string") content = this.mapOpts.annotation;
        else if (typeof this.mapOpts.annotation === "function") content = this.mapOpts.annotation(this.opts.to, this.root);
        else content = this.outputFile() + ".map";
        let eol = "\n";
        if (this.css.includes("\r\n")) eol = "\r\n";
        this.css += eol + "/*# sourceMappingURL=" + content + " */";
    }
    outputFile() {
        if (this.opts.to) return this.path(this.opts.to);
        else if (this.opts.from) return this.path(this.opts.from);
        else return "to.css";
    }
    generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev);
        } else {
            this.map = new SourceMapGenerator({
                file: this.outputFile()
            });
            this.map.addMapping({
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>",
                generated: {
                    line: 1,
                    column: 0
                },
                original: {
                    line: 1,
                    column: 0
                }
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) return [
            this.css
        ];
        else return [
            this.css,
            this.map
        ];
    }
    path(file) {
        if (file.indexOf("<") === 0) return file;
        if (/^\w+:\/\//.test(file)) return file;
        if (this.mapOpts.absolute) return file;
        let from = this.opts.to ? dirname(this.opts.to) : ".";
        if (typeof this.mapOpts.annotation === "string") from = dirname(resolve(from, this.mapOpts.annotation));
        file = relative(from, file);
        return file;
    }
    toUrl(path) {
        if (sep === "\\") path = path.replace(/\\/g, "/");
        return encodeURI(path).replace(/[#?]/g, encodeURIComponent);
    }
    toFileUrl(path) {
        if (pathToFileURL) return pathToFileURL(path).toString();
        else throw new Error("`map.absolute` option is not available in this PostCSS build");
    }
    sourcePath(node) {
        if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
        else if (this.usesFileUrls) return this.toFileUrl(node.source.input.from);
        else return this.toUrl(this.path(node.source.input.from));
    }
    generateString() {
        this.css = "";
        this.map = new SourceMapGenerator({
            file: this.outputFile()
        });
        let line = 1;
        let column = 1;
        let noSource = "<no source>";
        let mapping = {
            source: "",
            generated: {
                line: 0,
                column: 0
            },
            original: {
                line: 0,
                column: 0
            }
        };
        let lines, last;
        this.stringify(this.root, (str, node, type)=>{
            this.css += str;
            if (node && type !== "end") {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node.source && node.source.start) {
                    mapping.source = this.sourcePath(node);
                    mapping.original.line = node.source.start.line;
                    mapping.original.column = node.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf("\n");
                column = str.length - last;
            } else column += str.length;
            if (node && type !== "start") {
                let p = node.parent || {
                    raws: {}
                };
                let childless = node.type === "decl" || node.type === "atrule" && !node.nodes;
                if (!childless || node !== p.last || p.raws.semicolon) {
                    if (node.source && node.source.end) {
                        mapping.source = this.sourcePath(node);
                        mapping.original.line = node.source.end.line;
                        mapping.original.column = node.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) return this.generateMap();
        else {
            let result = "";
            this.stringify(this.root, (i)=>{
                result += i;
            });
            return [
                result
            ];
        }
    }
}
module.exports = MapGenerator;

},{"abc51fc29fac15b3":"fCgem","968821e93a17816d":"jhUEF","d4bacf81a7c5190f":"jhUEF","575da199427ae7bd":"jhUEF","fbe284f460cf9ea6":"fb1UO"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
var base64 = require("5a25a1393516be9d");
var ieee754 = require("95575133f5cbaace");
var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = "";
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    var loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = "";
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = "";
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = "0123456789abcdef";
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"5a25a1393516be9d":"eIiSV","95575133f5cbaace":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"fb1UO":[function(require,module,exports) {
"use strict";
let { SourceMapConsumer , SourceMapGenerator  } = require("fdeeb81faa83fc73");
let { fileURLToPath , pathToFileURL  } = require("b88133e61696774e");
let { resolve , isAbsolute  } = require("82210d7a69bfda26");
let { nanoid  } = require("c5c87106be86a207");
let terminalHighlight = require("f59d6d518086cc48");
let CssSyntaxError = require("ea5bdd9835c632c1");
let PreviousMap = require("4f845f8a9e901560");
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(resolve && isAbsolute);
class Input {
    constructor(css, opts = {}){
        if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) throw new Error(`PostCSS received ${css} instead of CSS string`);
        this.css = css.toString();
        if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else this.hasBOM = false;
        if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) this.file = opts.from;
            else this.file = resolve(opts.from);
        }
        if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) this.id = "<input css " + nanoid(6) + ">";
        if (this.map) this.map.file = this.from;
    }
    fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
            let lines = this.css.split("\n");
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for(let i = 0, l = lines.length; i < l; i++){
                lineToIndex[i] = prevIndex;
                prevIndex += lines[i].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
        } else lineToIndex = this[fromOffsetCache];
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) min = lineToIndex.length - 1;
        else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) max = mid - 1;
                else if (offset >= lineToIndex[mid + 1]) min = mid + 1;
                else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            line: min + 1,
            col: offset - lineToIndex[min] + 1
        };
    }
    error(message, line, column, opts = {}) {
        let result, endLine, endColumn;
        if (line && typeof line === "object") {
            let start = line;
            let end = column;
            if (typeof start.offset === "number") {
                let pos = this.fromOffset(start.offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
            }
            if (typeof end.offset === "number") {
                let pos = this.fromOffset(end.offset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
            }
        } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) result = new CssSyntaxError(message, origin.endLine === undefined ? origin.line : {
            line: origin.line,
            column: origin.column
        }, origin.endLine === undefined ? origin.column : {
            line: origin.endLine,
            column: origin.endColumn
        }, origin.source, origin.file, opts.plugin);
        else result = new CssSyntaxError(message, endLine === undefined ? line : {
            line,
            column
        }, endLine === undefined ? column : {
            line: endLine,
            column: endColumn
        }, this.css, this.file, opts.plugin);
        result.input = {
            line,
            column,
            endLine,
            endColumn,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL) result.input.url = pathToFileURL(this.file).toString();
            result.input.file = this.file;
        }
        return result;
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            line,
            column
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === "number") to = consumer.originalPositionFor({
            line: endLine,
            column: endColumn
        });
        let fromUrl;
        if (isAbsolute(from.source)) fromUrl = pathToFileURL(from.source);
        else fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        let result = {
            url: fromUrl.toString(),
            line: from.line,
            column: from.column,
            endLine: to && to.line,
            endColumn: to && to.column
        };
        if (fromUrl.protocol === "file:") {
            if (fileURLToPath) result.file = fileURLToPath(fromUrl);
            else /* c8 ignore next 2 */ throw new Error(`file: protocol is not available in this PostCSS build`);
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result.source = source;
        return result;
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) return file;
        return resolve(this.map.consumer().sourceRoot || this.map.root || ".", file);
    }
    get from() {
        return this.file || this.id;
    }
    toJSON() {
        let json = {};
        for (let name of [
            "hasBOM",
            "css",
            "file",
            "id"
        ])if (this[name] != null) json[name] = this[name];
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) json.map.consumerCache = undefined;
        }
        return json;
    }
}
module.exports = Input;
Input.default = Input;
if (terminalHighlight && terminalHighlight.registerInput) terminalHighlight.registerInput(Input);

},{"fdeeb81faa83fc73":"jhUEF","b88133e61696774e":"jhUEF","82210d7a69bfda26":"jhUEF","c5c87106be86a207":"fO50M","f59d6d518086cc48":"jhUEF","ea5bdd9835c632c1":"5TKyW","4f845f8a9e901560":"cmiCo"}],"fO50M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = "";
        let i = size;
        while(i--)id += alphabet[Math.random() * alphabet.length | 0];
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = "";
    let i = size;
    while(i--)id += urlAlphabet[Math.random() * 64 | 0];
    return id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cmiCo":[function(require,module,exports) {
var Buffer = require("47d7f86ff7f945a6").Buffer;
"use strict";
let { SourceMapConsumer , SourceMapGenerator  } = require("ef4938f81b609511");
let { existsSync , readFileSync  } = require("224f3a4a20bc00f2");
let { dirname , join  } = require("8f77cfcb1247a6ac");
function fromBase64(str) {
    if (Buffer) return Buffer.from(str, "base64").toString();
    else /* c8 ignore next 2 */ return window.atob(str);
}
class PreviousMap {
    constructor(css, opts){
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, "data:");
        let prev = opts.map ? opts.map.prev : undefined;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) this.mapFile = opts.from;
        if (this.mapFile) this.root = dirname(this.mapFile);
        if (text) this.text = text;
    }
    consumer() {
        if (!this.consumerCache) this.consumerCache = new SourceMapConsumer(this.text);
        return this.consumerCache;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
    startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
    }
    getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!comments) return;
        // sourceMappingURLs from comments, strings, etc.
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf("*/", start);
        if (start > -1 && end > -1) // Locate the last sourceMappingURL to avoid pickin
        this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
    decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        if (charsetUri.test(text) || uri.test(text)) return decodeURIComponent(text.substr(RegExp.lastMatch.length));
        if (baseCharsetUri.test(text) || baseUri.test(text)) return fromBase64(text.substr(RegExp.lastMatch.length));
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + encoding);
    }
    loadFile(path) {
        this.root = dirname(path);
        if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, "utf-8").toString().trim();
        }
    }
    loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
            if (typeof prev === "string") return prev;
            else if (typeof prev === "function") {
                let prevPath = prev(file);
                if (prevPath) {
                    let map = this.loadFile(prevPath);
                    if (!map) throw new Error("Unable to load previous source map: " + prevPath.toString());
                    return map;
                }
            } else if (prev instanceof SourceMapConsumer) return SourceMapGenerator.fromSourceMap(prev).toString();
            else if (prev instanceof SourceMapGenerator) return prev.toString();
            else if (this.isMap(prev)) return JSON.stringify(prev);
            else throw new Error("Unsupported previous source map format: " + prev.toString());
        } else if (this.inline) return this.decodeInline(this.annotation);
        else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join(dirname(file), map);
            return this.loadFile(map);
        }
    }
    isMap(map) {
        if (typeof map !== "object") return false;
        return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
    }
}
module.exports = PreviousMap;
PreviousMap.default = PreviousMap;

},{"47d7f86ff7f945a6":"fCgem","ef4938f81b609511":"jhUEF","224f3a4a20bc00f2":"jhUEF","8f77cfcb1247a6ac":"jhUEF"}],"1gj6C":[function(require,module,exports) {
"use strict";
let { isClean , my  } = require("814d3a1339db13cb");
let Declaration = require("c13080844960f7ae");
let Comment = require("f86982d4b357947f");
let Node = require("5aafef2e9209b6c1");
let parse, Rule, AtRule, Root;
function cleanSource(nodes) {
    return nodes.map((i)=>{
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}
function markDirtyUp(node) {
    node[isClean] = false;
    if (node.proxyOf.nodes) for (let i of node.proxyOf.nodes)markDirtyUp(i);
}
class Container extends Node {
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    each(callback) {
        if (!this.proxyOf.nodes) return undefined;
        let iterator = this.getIterator();
        let index, result;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index], index);
            if (result === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result;
    }
    walk(callback) {
        return this.each((child, i)=>{
            let result;
            try {
                result = callback(child, i);
            } catch (e) {
                throw child.addToError(e);
            }
            if (result !== false && child.walk) result = child.walk(callback);
            return result;
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i)=>{
                if (child.type === "decl") return callback(child, i);
            });
        }
        if (prop instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === "decl" && prop.test(child.prop)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === "decl" && child.prop === prop) return callback(child, i);
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i)=>{
                if (child.type === "rule") return callback(child, i);
            });
        }
        if (selector instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === "rule" && selector.test(child.selector)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === "rule" && child.selector === selector) return callback(child, i);
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i)=>{
                if (child.type === "atrule") return callback(child, i);
            });
        }
        if (name instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === "atrule" && name.test(child.name)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === "atrule" && child.name === name) return callback(child, i);
        });
    }
    walkComments(callback) {
        return this.walk((child, i)=>{
            if (child.type === "comment") return callback(child, i);
        });
    }
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node of nodes)this.proxyOf.nodes.push(node);
        }
        this.markDirty();
        return this;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, "prepend").reverse();
            for (let node of nodes)this.proxyOf.nodes.unshift(node);
            for(let id in this.indexes)this.indexes[id] = this.indexes[id] + nodes.length;
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) for (let node of this.nodes)node.cleanRaws(keepBetween);
    }
    insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type = existIndex === 0 ? "prepend" : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex <= index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex + 1, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex < index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = undefined;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (index >= child) this.indexes[id] = index - 1;
        }
        this.markDirty();
        return this;
    }
    removeAll() {
        for (let node of this.proxyOf.nodes)node.parent = undefined;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    index(child) {
        if (typeof child === "number") return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    get first() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    normalize(nodes, sample) {
        if (typeof nodes === "string") nodes = cleanSource(parse(nodes).nodes);
        else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, "ignore");
        } else if (nodes.type === "root" && this.type !== "document") {
            nodes = nodes.nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, "ignore");
        } else if (nodes.type) nodes = [
            nodes
        ];
        else if (nodes.prop) {
            if (typeof nodes.value === "undefined") throw new Error("Value field is missed in node creation");
            else if (typeof nodes.value !== "string") nodes.value = String(nodes.value);
            nodes = [
                new Declaration(nodes)
            ];
        } else if (nodes.selector) nodes = [
            new Rule(nodes)
        ];
        else if (nodes.name) nodes = [
            new AtRule(nodes)
        ];
        else if (nodes.text) nodes = [
            new Comment(nodes)
        ];
        else throw new Error("Unknown node type in node creation");
        let processed = nodes.map((i)=>{
            /* c8 ignore next */ if (!i[my]) Container.rebuild(i);
            i = i.proxyOf;
            if (i.parent) i.parent.removeChild(i);
            if (i[isClean]) markDirtyUp(i);
            if (typeof i.raws.before === "undefined") {
                if (sample && typeof sample.raws.before !== "undefined") i.raws.before = sample.raws.before.replace(/\S/g, "");
            }
            i.parent = this.proxyOf;
            return i;
        });
        return processed;
    }
    getProxyProcessor() {
        return {
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === "name" || prop === "params" || prop === "selector") node.markDirty();
                return true;
            },
            get (node, prop) {
                if (prop === "proxyOf") return node;
                else if (!node[prop]) return node[prop];
                else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) return (...args)=>{
                    return node[prop](...args.map((i)=>{
                        if (typeof i === "function") return (child, index)=>i(child.toProxy(), index);
                        else return i;
                    }));
                };
                else if (prop === "every" || prop === "some") return (cb)=>{
                    return node[prop]((child, ...other)=>cb(child.toProxy(), ...other));
                };
                else if (prop === "root") return ()=>node.root().toProxy();
                else if (prop === "nodes") return node.nodes.map((i)=>i.toProxy());
                else if (prop === "first" || prop === "last") return node[prop].toProxy();
                else return node[prop];
            }
        };
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
}
Container.registerParse = (dependant)=>{
    parse = dependant;
};
Container.registerRule = (dependant)=>{
    Rule = dependant;
};
Container.registerAtRule = (dependant)=>{
    AtRule = dependant;
};
Container.registerRoot = (dependant)=>{
    Root = dependant;
};
module.exports = Container;
Container.default = Container;
/* c8 ignore start */ Container.rebuild = (node)=>{
    if (node.type === "atrule") Object.setPrototypeOf(node, AtRule.prototype);
    else if (node.type === "rule") Object.setPrototypeOf(node, Rule.prototype);
    else if (node.type === "decl") Object.setPrototypeOf(node, Declaration.prototype);
    else if (node.type === "comment") Object.setPrototypeOf(node, Comment.prototype);
    else if (node.type === "root") Object.setPrototypeOf(node, Root.prototype);
    node[my] = true;
    if (node.nodes) node.nodes.forEach((child)=>{
        Container.rebuild(child);
    });
} /* c8 ignore stop */ ;

},{"814d3a1339db13cb":"9Ej2B","c13080844960f7ae":"2mU8a","f86982d4b357947f":"5CBjv","5aafef2e9209b6c1":"5azBO"}],"5CBjv":[function(require,module,exports) {
"use strict";
let Node = require("c068e069202e7da0");
class Comment extends Node {
    constructor(defaults){
        super(defaults);
        this.type = "comment";
    }
}
module.exports = Comment;
Comment.default = Comment;

},{"c068e069202e7da0":"5azBO"}],"dK3sP":[function(require,module,exports) {
"use strict";
let Container = require("2e7d399574ad9eb7");
let LazyResult, Processor;
class Document extends Container {
    constructor(defaults){
        // type needs to be passed to super, otherwise child roots won't be normalized correctly
        super({
            type: "document",
            ...defaults
        });
        if (!this.nodes) this.nodes = [];
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Document.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Document.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Document;
Document.default = Document;

},{"2e7d399574ad9eb7":"1gj6C"}],"dpzGz":[function(require,module,exports) {
/* eslint-disable no-console */ "use strict";
let printed = {};
module.exports = function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== "undefined" && console.warn) console.warn(message);
};

},{}],"dmoqr":[function(require,module,exports) {
"use strict";
let Warning = require("557388a4d66cd114");
class Result {
    constructor(processor, root, opts){
        this.processor = processor;
        this.messages = [];
        this.root = root;
        this.opts = opts;
        this.css = undefined;
        this.map = undefined;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) opts.plugin = this.lastPlugin.postcssPlugin;
        }
        let warning = new Warning(text, opts);
        this.messages.push(warning);
        return warning;
    }
    warnings() {
        return this.messages.filter((i)=>i.type === "warning");
    }
    get content() {
        return this.css;
    }
}
module.exports = Result;
Result.default = Result;

},{"557388a4d66cd114":"lw5j2"}],"lw5j2":[function(require,module,exports) {
"use strict";
class Warning {
    constructor(text, opts = {}){
        this.type = "warning";
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) return this.node.error(this.text, {
            plugin: this.plugin,
            index: this.index,
            word: this.word
        }).message;
        if (this.plugin) return this.plugin + ": " + this.text;
        return this.text;
    }
}
module.exports = Warning;
Warning.default = Warning;

},{}],"ioa1B":[function(require,module,exports) {
"use strict";
let Container = require("b70ae4b236cac059");
let Parser = require("21ef38ad8daccdc9");
let Input = require("92151fdfef26dd7e");
function parse(css, opts) {
    let input = new Input(css, opts);
    let parser = new Parser(input);
    try {
        parser.parse();
    } catch (e) {
        if (e.name === "CssSyntaxError" && opts && opts.from) {
            if (/\.scss$/i.test(opts.from)) e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
            else if (/\.sass/i.test(opts.from)) e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
            else if (/\.less$/i.test(opts.from)) e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
        throw e;
    }
    return parser.root;
}
module.exports = parse;
parse.default = parse;
Container.registerParse(parse);

},{"b70ae4b236cac059":"1gj6C","21ef38ad8daccdc9":"flcRV","92151fdfef26dd7e":"fb1UO"}],"flcRV":[function(require,module,exports) {
"use strict";
let Declaration = require("20271ff86e727a07");
let tokenizer = require("f3e907a94a5c6395");
let Comment = require("17ee1aada8128aac");
let AtRule = require("18ed92a51afca65f");
let Root = require("2f5d664ea809c082");
let Rule = require("74503791f3d8c71e");
const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
};
function findLastWithPosition(tokens) {
    for(let i = tokens.length - 1; i >= 0; i--){
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
class Parser {
    constructor(input){
        this.input = input;
        this.root = new Root();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = false;
        this.customProperty = false;
        this.createTokenizer();
        this.root.source = {
            input,
            start: {
                offset: 0,
                line: 1,
                column: 1
            }
        };
    }
    createTokenizer() {
        this.tokenizer = tokenizer(this.input);
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case "space":
                    this.spaces += token[1];
                    break;
                case ";":
                    this.freeSemicolon(token);
                    break;
                case "}":
                    this.end(token);
                    break;
                case "comment":
                    this.comment(token);
                    break;
                case "at-word":
                    this.atrule(token);
                    break;
                case "{":
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    comment(token) {
        let node = new Comment();
        this.init(node, token[2]);
        node.source.end = this.getPosition(token[3] || token[2]);
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node.text = "";
            node.raws.left = text;
            node.raws.right = "";
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
        }
    }
    emptyRule(token) {
        let node = new Rule();
        this.init(node, token[2]);
        node.selector = "";
        node.raws.between = "";
        this.current = node;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith("--");
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === "(" || type === "[") {
                if (!bracket) bracket = token;
                brackets.push(type === "(" ? ")" : "]");
            } else if (customProperty && colon && type === "{") {
                if (!bracket) bracket = token;
                brackets.push("}");
            } else if (brackets.length === 0) {
                if (type === ";") {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else break;
                } else if (type === "{") {
                    this.rule(tokens);
                    return;
                } else if (type === "}") {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ":") colon = true;
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) while(tokens.length){
                token = tokens[tokens.length - 1][0];
                if (token !== "space" && token !== "comment") break;
                this.tokenizer.back(tokens.pop());
            }
            this.decl(tokens, customProperty);
        } else this.unknownWord(tokens);
    }
    rule(tokens) {
        tokens.pop();
        let node = new Rule();
        this.init(node, tokens[0][2]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, "selector", tokens);
        this.current = node;
    }
    decl(tokens, customProperty) {
        let node = new Declaration();
        this.init(node, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ";") {
            this.semicolon = true;
            tokens.pop();
        }
        node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        while(tokens[0][0] !== "word"){
            if (tokens.length === 1) this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
        }
        node.source.start = this.getPosition(tokens[0][2]);
        node.prop = "";
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ":" || type === "space" || type === "comment") break;
            node.prop += tokens.shift()[1];
        }
        node.raws.between = "";
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ":") {
                node.raws.between += token[1];
                break;
            } else {
                if (token[0] === "word" && /\w/.test(token[1])) this.unknownWord([
                    token
                ]);
                node.raws.between += token[1];
            }
        }
        if (node.prop[0] === "_" || node.prop[0] === "*") {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i = tokens.length - 1; i >= 0; i--){
            token = tokens[i];
            if (token[1].toLowerCase() === "!important") {
                node.important = true;
                let string = this.stringFrom(tokens, i);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== " !important") node.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === "important") {
                let cache = tokens.slice(0);
                let str = "";
                for(let j = i; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().indexOf("!") === 0 && type !== "space") break;
                    str = cache.pop()[1] + str;
                }
                if (str.trim().indexOf("!") === 0) {
                    node.important = true;
                    node.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== "space" && token[0] !== "comment") break;
        }
        let hasWord = tokens.some((i)=>i[0] !== "space" && i[0] !== "comment");
        if (hasWord) {
            node.raws.between += firstSpaces.map((i)=>i[1]).join("");
            firstSpaces = [];
        }
        this.raw(node, "value", firstSpaces.concat(tokens), customProperty);
        if (node.value.includes(":") && !customProperty) this.checkMissedSemicolon(tokens);
    }
    atrule(token) {
        let node = new AtRule();
        node.name = token[1].slice(1);
        if (node.name === "") this.unnamedAtrule(node, token);
        this.init(node, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === "(" || type === "[") brackets.push(type === "(" ? ")" : "]");
            else if (type === "{" && brackets.length > 0) brackets.push("}");
            else if (type === brackets[brackets.length - 1]) brackets.pop();
            if (brackets.length === 0) {
                if (type === ";") {
                    node.source.end = this.getPosition(token[2]);
                    this.semicolon = true;
                    break;
                } else if (type === "{") {
                    open = true;
                    break;
                } else if (type === "}") {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === "space")prev = params[--shift];
                        if (prev) node.source.end = this.getPosition(prev[3] || prev[2]);
                    }
                    this.end(token);
                    break;
                } else params.push(token);
            } else params.push(token);
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, "params", params);
            if (last) {
                token = params[params.length - 1];
                node.source.end = this.getPosition(token[3] || token[2]);
                this.spaces = node.raws.between;
                node.raws.between = "";
            }
        } else {
            node.raws.afterName = "";
            node.params = "";
        }
        if (open) {
            node.nodes = [];
            this.current = node;
        }
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current = this.current.parent;
        } else this.unexpectedClose(token);
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = "";
            }
        }
    }
    // Helpers
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            offset,
            line: pos.line,
            column: pos.col
        };
    }
    init(node, offset) {
        this.current.push(node);
        node.source = {
            start: this.getPosition(offset),
            input: this.input
        };
        node.raws.before = this.spaces;
        this.spaces = "";
        if (node.type !== "comment") this.semicolon = false;
    }
    raw(node, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = "";
        let clean = true;
        let next, prev;
        for(let i = 0; i < length; i += 1){
            token = tokens[i];
            type = token[0];
            if (type === "space" && i === length - 1 && !customProperty) clean = false;
            else if (type === "comment") {
                prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
                next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
                if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                    if (value.slice(-1) === ",") clean = false;
                    else value += token[1];
                } else clean = false;
            } else value += token[1];
        }
        if (!clean) {
            let raw = tokens.reduce((all, i)=>all + i[1], "");
            node.raws[prop] = {
                value,
                raw
            };
        }
        node[prop] = value;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space" && lastTokenType !== "comment") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = "";
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result = "";
        for(let i = from; i < tokens.length; i++)result += tokens[i][1];
        tokens.splice(from, tokens.length - from);
        return result;
    }
    colon(tokens) {
        let brackets = 0;
        let token, type, prev;
        for (let [i, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === "(") brackets += 1;
            if (type === ")") brackets -= 1;
            if (brackets === 0 && type === ":") {
                if (!prev) this.doubleColon(token);
                else if (prev[0] === "word" && prev[1] === "progid") continue;
                else return i;
            }
            prev = token;
        }
        return false;
    }
    // Errors
    unclosedBracket(bracket) {
        throw this.input.error("Unclosed bracket", {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error("Unknown word", {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unexpectedClose(token) {
        throw this.input.error("Unexpected }", {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error("Unclosed block", pos.line, pos.column);
    }
    doubleColon(token) {
        throw this.input.error("Double colon", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    unnamedAtrule(node, token) {
        throw this.input.error("At-rule without name", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    precheckMissedSemicolon() {
    // Hook for Safe Parser
    }
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== "space") {
                founded += 1;
                if (founded === 2) break;
            }
        }
        // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
        // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
        // And because we need it after that one we do +1 to get the next one.
        throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
    }
}
module.exports = Parser;

},{"20271ff86e727a07":"2mU8a","f3e907a94a5c6395":"bLUE2","17ee1aada8128aac":"5CBjv","18ed92a51afca65f":"kbVAt","2f5d664ea809c082":"hsDFv","74503791f3d8c71e":"4SFJx"}],"bLUE2":[function(require,module,exports) {
"use strict";
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
module.exports = function tokenizer(input, options = {}) {
    let css = input.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input.error("Unclosed " + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                }while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
                currentToken = [
                    "space",
                    css.slice(pos, next)
                ];
                pos = next - 1;
                break;
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES:
                prev = buffer.length ? buffer.pop()[1] : "";
                n = css.charCodeAt(pos + 1);
                if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(")", next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos;
                                break;
                            } else unclosed("bracket");
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped);
                    currentToken = [
                        "brackets",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    next = css.indexOf(")", pos + 1);
                    content = css.slice(pos, next + 1);
                    if (next === -1 || RE_BAD_BRACKET.test(content)) currentToken = [
                        "(",
                        "(",
                        pos
                    ];
                    else {
                        currentToken = [
                            "brackets",
                            content,
                            pos,
                            next
                        ];
                        pos = next;
                    }
                }
                break;
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                quote = code === SINGLE_QUOTE ? "'" : '"';
                next = pos;
                do {
                    escaped = false;
                    next = css.indexOf(quote, next + 1);
                    if (next === -1) {
                        if (ignore || ignoreUnclosed) {
                            next = pos + 1;
                            break;
                        } else unclosed("string");
                    }
                    escapePos = next;
                    while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                        escapePos -= 1;
                        escaped = !escaped;
                    }
                }while (escaped);
                currentToken = [
                    "string",
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case AT:
                RE_AT_END.lastIndex = pos + 1;
                RE_AT_END.test(css);
                if (RE_AT_END.lastIndex === 0) next = css.length - 1;
                else next = RE_AT_END.lastIndex - 2;
                currentToken = [
                    "at-word",
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case BACKSLASH:
                next = pos;
                escape = true;
                while(css.charCodeAt(next + 1) === BACKSLASH){
                    next += 1;
                    escape = !escape;
                }
                code = css.charCodeAt(next + 1);
                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                    next += 1;
                    if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                        while(RE_HEX_ESCAPE.test(css.charAt(next + 1)))next += 1;
                        if (css.charCodeAt(next + 1) === SPACE) next += 1;
                    }
                }
                currentToken = [
                    "word",
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            default:
                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                    next = css.indexOf("*/", pos + 2) + 1;
                    if (next === 0) {
                        if (ignore || ignoreUnclosed) next = css.length;
                        else unclosed("comment");
                    }
                    currentToken = [
                        "comment",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    RE_WORD_END.lastIndex = pos + 1;
                    RE_WORD_END.test(css);
                    if (RE_WORD_END.lastIndex === 0) next = css.length - 1;
                    else next = RE_WORD_END.lastIndex - 2;
                    currentToken = [
                        "word",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    buffer.push(currentToken);
                    pos = next;
                }
                break;
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        nextToken,
        endOfFile,
        position
    };
};

},{}],"kbVAt":[function(require,module,exports) {
"use strict";
let Container = require("e6c3a0e8f5afd42f");
class AtRule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = "atrule";
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
}
module.exports = AtRule;
AtRule.default = AtRule;
Container.registerAtRule(AtRule);

},{"e6c3a0e8f5afd42f":"1gj6C"}],"hsDFv":[function(require,module,exports) {
"use strict";
let Container = require("6cb5792d017ee5cc");
let LazyResult, Processor;
class Root extends Container {
    constructor(defaults){
        super(defaults);
        this.type = "root";
        if (!this.nodes) this.nodes = [];
    }
    removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) this.nodes[1].raws.before = this.nodes[index].raws.before;
        return super.removeChild(child);
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === "prepend") {
                if (this.nodes.length > 1) sample.raws.before = this.nodes[1].raws.before;
                else delete sample.raws.before;
            } else if (this.first !== sample) for (let node of nodes)node.raws.before = sample.raws.before;
        }
        return nodes;
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Root.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Root.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Root;
Root.default = Root;
Container.registerRoot(Root);

},{"6cb5792d017ee5cc":"1gj6C"}],"4SFJx":[function(require,module,exports) {
"use strict";
let Container = require("9779b36b593e7297");
let list = require("cb12a9458d4a15dd");
class Rule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = "rule";
        if (!this.nodes) this.nodes = [];
    }
    get selectors() {
        return list.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : "," + this.raw("between", "beforeOpen");
        this.selector = values.join(sep);
    }
}
module.exports = Rule;
Rule.default = Rule;
Container.registerRule(Rule);

},{"9779b36b593e7297":"1gj6C","cb12a9458d4a15dd":"hZo3l"}],"hZo3l":[function(require,module,exports) {
"use strict";
let list = {
    split (string, separators, last) {
        let array = [];
        let current = "";
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = "";
        let escape = false;
        for (let letter of string){
            if (escape) escape = false;
            else if (letter === "\\") escape = true;
            else if (inQuote) {
                if (letter === prevQuote) inQuote = false;
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === "(") func += 1;
            else if (letter === ")") {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== "") array.push(current.trim());
                current = "";
                split = false;
            } else current += letter;
        }
        if (last || current !== "") array.push(current.trim());
        return array;
    },
    space (string) {
        let spaces = [
            " ",
            "\n",
            "	"
        ];
        return list.split(string, spaces);
    },
    comma (string) {
        return list.split(string, [
            ","
        ], true);
    }
};
module.exports = list;
list.default = list;

},{}],"lU6wZ":[function(require,module,exports) {
"use strict";
let NoWorkResult = require("b3b94b0bca5ab14c");
let LazyResult = require("c235ba70061ed2eb");
let Document = require("3d38466d0ab6c63b");
let Root = require("bccf8ed6c6626c5b");
class Processor {
    constructor(plugins = []){
        this.version = "8.4.23";
        this.plugins = this.normalize(plugins);
    }
    use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin
        ]));
        return this;
    }
    process(css, opts = {}) {
        if (this.plugins.length === 0 && typeof opts.parser === "undefined" && typeof opts.stringifier === "undefined" && typeof opts.syntax === "undefined") return new NoWorkResult(this, css, opts);
        else return new LazyResult(this, css, opts);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i of plugins){
            if (i.postcss === true) i = i();
            else if (i.postcss) i = i.postcss;
            if (typeof i === "object" && Array.isArray(i.plugins)) normalized = normalized.concat(i.plugins);
            else if (typeof i === "object" && i.postcssPlugin) normalized.push(i);
            else if (typeof i === "function") normalized.push(i);
            else if (typeof i === "object" && (i.parse || i.stringify)) throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
            else throw new Error(i + " is not a PostCSS plugin");
        }
        return normalized;
    }
}
module.exports = Processor;
Processor.default = Processor;
Root.registerProcessor(Processor);
Document.registerProcessor(Processor);

},{"b3b94b0bca5ab14c":"4PfYq","c235ba70061ed2eb":"580Su","3d38466d0ab6c63b":"dK3sP","bccf8ed6c6626c5b":"hsDFv"}],"4PfYq":[function(require,module,exports) {
"use strict";
let MapGenerator = require("f11e35f53b820aad");
let stringify = require("6ed6e202b4a21776");
let warnOnce = require("b306bb479e305b81");
let parse = require("434bc69b411a16c7");
const Result = require("3faf8e2427c0a1df");
class NoWorkResult {
    constructor(processor, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor;
        this._css = css;
        this._opts = opts;
        this._map = undefined;
        let root;
        let str = stringify;
        this.result = new Result(this._processor, root, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, "root", {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator(str, root, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) this.result.css = generatedCSS;
            if (generatedMap) this.result.map = generatedMap;
        }
    }
    get [Symbol.toStringTag]() {
        return "NoWorkResult";
    }
    get processor() {
        return this.result.processor;
    }
    get opts() {
        return this.result.opts;
    }
    get css() {
        return this.result.css;
    }
    get content() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get root() {
        if (this._root) return this._root;
        let root;
        let parser = parse;
        try {
            root = parser(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) throw this.error;
        else {
            this._root = root;
            return root;
        }
    }
    get messages() {
        return [];
    }
    warnings() {
        return [];
    }
    toString() {
        return this._css;
    }
    then(onFulfilled, onRejected) {
        if (!("from" in this._opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
}
module.exports = NoWorkResult;
NoWorkResult.default = NoWorkResult;

},{"f11e35f53b820aad":"ghfT0","6ed6e202b4a21776":"a0MwE","b306bb479e305b81":"dpzGz","434bc69b411a16c7":"ioa1B","3faf8e2427c0a1df":"dmoqr"}],"iiNZS":[function(require,module,exports) {
"use strict";
let Declaration = require("361e3c2bb584a134");
let PreviousMap = require("80af0950f607d256");
let Comment = require("de1e4f4fe964ada8");
let AtRule = require("7e9c415aaf66baa3");
let Input = require("1635a53f9d0643c4");
let Root = require("c2f146cbc73a0bf");
let Rule = require("2e7678961b2844c2");
function fromJSON(json, inputs) {
    if (Array.isArray(json)) return json.map((n)=>fromJSON(n));
    let { inputs: ownInputs , ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input of ownInputs){
            let inputHydrated = {
                ...input,
                __proto__: Input.prototype
            };
            if (inputHydrated.map) inputHydrated.map = {
                ...inputHydrated.map,
                __proto__: PreviousMap.prototype
            };
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) defaults.nodes = json.nodes.map((n)=>fromJSON(n, inputs));
    if (defaults.source) {
        let { inputId , ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) defaults.source.input = inputs[inputId];
    }
    if (defaults.type === "root") return new Root(defaults);
    else if (defaults.type === "decl") return new Declaration(defaults);
    else if (defaults.type === "rule") return new Rule(defaults);
    else if (defaults.type === "comment") return new Comment(defaults);
    else if (defaults.type === "atrule") return new AtRule(defaults);
    else throw new Error("Unknown node type: " + json.type);
}
module.exports = fromJSON;
fromJSON.default = fromJSON;

},{"361e3c2bb584a134":"2mU8a","80af0950f607d256":"cmiCo","de1e4f4fe964ada8":"5CBjv","7e9c415aaf66baa3":"kbVAt","1635a53f9d0643c4":"fb1UO","c2f146cbc73a0bf":"hsDFv","2e7678961b2844c2":"4SFJx"}],"gCFeb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateMenu", ()=>animateMenu);
function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const toggleActiveBtn = document.getElementById("menu-center");
    const toggleActiveBtn1 = document.getElementById("menu-toggle-btn");
    toggleActiveBtn.classList.toggle("active");
    toggleActiveBtn1.classList.toggle("active");
    const active = toggleActiveBtn1.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    else event.currentTarget.setAttribute("aria-label", "Abrir Menu");
}
function animateMenu(btnMobile) {
    if (btnMobile) {
        btnMobile.addEventListener("click", toggleMenu);
        btnMobile.addEventListener("touchstart", toggleMenu);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OEwZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createParallax", ()=>createParallax);
var _rellax = require("rellax");
var _rellaxDefault = parcelHelpers.interopDefault(_rellax);
function createParallax() {
    return new (0, _rellaxDefault.default)();
}

},{"rellax":"64yfe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64yfe":[function(require,module,exports) {
var global = arguments[3];
// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------
(function(root, factory) {
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define([], factory);
    else if (0, module.exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
    else // Browser globals (root is window)
    root.Rellax = factory();
})(typeof window !== "undefined" ? window : global, function() {
    var Rellax = function(el, options) {
        "use strict";
        var self = Object.create(Rellax.prototype);
        var posY = 0;
        var screenY = 0;
        var posX = 0;
        var screenX = 0;
        var blocks = [];
        var pause = true;
        // check what requestAnimationFrame to use, and if
        // it's not supported, use the onscroll event
        var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
            return setTimeout(callback, 1000 / 60);
        };
        // store the id for later use
        var loopId = null;
        // Test via a getter in the options object to see if the passive property is accessed
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts);
        } catch (e) {}
        // check what cancelAnimation method to use
        var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
        // check which transform property to use
        var transformProp = window.transformProp || function() {
            var testEl = document.createElement("div");
            if (testEl.style.transform === null) {
                var vendors = [
                    "Webkit",
                    "Moz",
                    "ms"
                ];
                for(var vendor in vendors){
                    if (testEl.style[vendors[vendor] + "Transform"] !== undefined) return vendors[vendor] + "Transform";
                }
            }
            return "transform";
        }();
        // Default Settings
        self.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [
                576,
                768,
                1201
            ],
            center: false,
            wrapper: null,
            relativeToWrapper: false,
            round: true,
            vertical: true,
            horizontal: false,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function() {}
        };
        // User defined options (might have more in the future)
        if (options) Object.keys(options).forEach(function(key) {
            self.options[key] = options[key];
        });
        function validateCustomBreakpoints() {
            if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
                var isAscending = true;
                var isNumerical = true;
                var lastVal;
                self.options.breakpoints.forEach(function(i) {
                    if (typeof i !== "number") isNumerical = false;
                    if (lastVal !== null) {
                        if (i < lastVal) isAscending = false;
                    }
                    lastVal = i;
                });
                if (isAscending && isNumerical) return;
            }
            // revert defaults if set incorrectly
            self.options.breakpoints = [
                576,
                768,
                1201
            ];
            console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
        }
        if (options && options.breakpoints) validateCustomBreakpoints();
        // By default, rellax class
        if (!el) el = ".rellax";
        // check if el is a className or a node
        var elements = typeof el === "string" ? document.querySelectorAll(el) : [
            el
        ];
        // Now query selector
        if (elements.length > 0) self.elems = elements;
        else {
            console.warn("Rellax: The elements you're trying to select don't exist.");
            return;
        }
        // Has a wrapper and it exists
        if (self.options.wrapper) {
            if (!self.options.wrapper.nodeType) {
                var wrapper = document.querySelector(self.options.wrapper);
                if (wrapper) self.options.wrapper = wrapper;
                else {
                    console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                    return;
                }
            }
        }
        // set a placeholder for the current breakpoint
        var currentBreakpoint;
        // helper to determine current breakpoint
        var getCurrentBreakpoint = function(w) {
            var bp = self.options.breakpoints;
            if (w < bp[0]) return "xs";
            if (w >= bp[0] && w < bp[1]) return "sm";
            if (w >= bp[1] && w < bp[2]) return "md";
            return "lg";
        };
        // Get and cache initial position of all elements
        var cacheBlocks = function() {
            for(var i = 0; i < self.elems.length; i++){
                var block = createBlock(self.elems[i]);
                blocks.push(block);
            }
        };
        // Let's kick this script off
        // Build array for cached element values
        var init = function() {
            for(var i = 0; i < blocks.length; i++)self.elems[i].style.cssText = blocks[i].style;
            blocks = [];
            screenY = window.innerHeight;
            screenX = window.innerWidth;
            currentBreakpoint = getCurrentBreakpoint(screenX);
            setPosition();
            cacheBlocks();
            animate();
            // If paused, unpause and set listener for window resizing events
            if (pause) {
                window.addEventListener("resize", init);
                pause = false;
                // Start the loop
                update();
            }
        };
        // We want to cache the parallax blocks'
        // values: base, top, height, speed
        // el: is dom object, return: el cache values
        var createBlock = function(el) {
            var dataPercentage = el.getAttribute("data-rellax-percentage");
            var dataSpeed = el.getAttribute("data-rellax-speed");
            var dataXsSpeed = el.getAttribute("data-rellax-xs-speed");
            var dataMobileSpeed = el.getAttribute("data-rellax-mobile-speed");
            var dataTabletSpeed = el.getAttribute("data-rellax-tablet-speed");
            var dataDesktopSpeed = el.getAttribute("data-rellax-desktop-speed");
            var dataVerticalSpeed = el.getAttribute("data-rellax-vertical-speed");
            var dataHorizontalSpeed = el.getAttribute("data-rellax-horizontal-speed");
            var dataVericalScrollAxis = el.getAttribute("data-rellax-vertical-scroll-axis");
            var dataHorizontalScrollAxis = el.getAttribute("data-rellax-horizontal-scroll-axis");
            var dataZindex = el.getAttribute("data-rellax-zindex") || 0;
            var dataMin = el.getAttribute("data-rellax-min");
            var dataMax = el.getAttribute("data-rellax-max");
            var dataMinX = el.getAttribute("data-rellax-min-x");
            var dataMaxX = el.getAttribute("data-rellax-max-x");
            var dataMinY = el.getAttribute("data-rellax-min-y");
            var dataMaxY = el.getAttribute("data-rellax-max-y");
            var mapBreakpoints;
            var breakpoints = true;
            if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) breakpoints = false;
            else mapBreakpoints = {
                "xs": dataXsSpeed,
                "sm": dataMobileSpeed,
                "md": dataTabletSpeed,
                "lg": dataDesktopSpeed
            };
            // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
            // ensures elements are positioned based on HTML layout.
            //
            // If the element has the percentage attribute, the posY and posX needs to be
            // the current scroll position's value, so that the elements are still positioned based on HTML layout
            var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
            if (self.options.relativeToWrapper) {
                var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
            }
            var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
            var posX = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
            var blockTop = posY + el.getBoundingClientRect().top;
            var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
            var blockLeft = posX + el.getBoundingClientRect().left;
            var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;
            // apparently parallax equation everyone uses
            var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
            var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
            if (self.options.center) {
                percentageX = 0.5;
                percentageY = 0.5;
            }
            // Optional individual block speed as data attr, otherwise global speed
            var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;
            var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
            var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;
            // Optional individual block movement axis direction as data attr, otherwise gobal movement direction
            var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
            var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;
            var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);
            // ~~Store non-translate3d transforms~~
            // Store inline styles and extract transforms
            var style = el.style.cssText;
            var transform = "";
            // Check if there's an inline styled transform
            var searchResult = /transform\s*:/i.exec(style);
            if (searchResult) {
                // Get the index of the transform
                var index = searchResult.index;
                // Trim the style to the transform point and get the following semi-colon index
                var trimmedStyle = style.slice(index);
                var delimiter = trimmedStyle.indexOf(";");
                // Remove "transform" string and save the attribute
                if (delimiter) transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
                else transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
            }
            return {
                baseX: bases.x,
                baseY: bases.y,
                top: blockTop,
                left: blockLeft,
                height: blockHeight,
                width: blockWidth,
                speed: speed,
                verticalSpeed: verticalSpeed,
                horizontalSpeed: horizontalSpeed,
                verticalScrollAxis: verticalScrollAxis,
                horizontalScrollAxis: horizontalScrollAxis,
                style: style,
                transform: transform,
                zindex: dataZindex,
                min: dataMin,
                max: dataMax,
                minX: dataMinX,
                maxX: dataMaxX,
                minY: dataMinY,
                maxY: dataMaxY
            };
        };
        // set scroll position (posY, posX)
        // side effect method is not ideal, but okay for now
        // returns true if the scroll changed, false if nothing happened
        var setPosition = function() {
            var oldY = posY;
            var oldX = posX;
            posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
            posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
            // If option relativeToWrapper is true, use relative wrapper value instead.
            if (self.options.relativeToWrapper) {
                var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                posY = scrollPosY - self.options.wrapper.offsetTop;
            }
            if (oldY != posY && self.options.vertical) // scroll changed, return true
            return true;
            if (oldX != posX && self.options.horizontal) // scroll changed, return true
            return true;
            // scroll did not change
            return false;
        };
        // Ahh a pure function, gets new transform value
        // based on scrollPosition and speed
        // Allow for decimal pixel values
        var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
            var result = {};
            var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
            var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
            result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
            result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
            return result;
        };
        // Remove event listeners and loop again
        var deferredUpdate = function() {
            window.removeEventListener("resize", deferredUpdate);
            window.removeEventListener("orientationchange", deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : window).removeEventListener("scroll", deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : document).removeEventListener("touchmove", deferredUpdate);
            // loop again
            loopId = loop(update);
        };
        // Loop
        var update = function() {
            if (setPosition() && pause === false) {
                animate();
                // loop again
                loopId = loop(update);
            } else {
                loopId = null;
                // Don't animate until we get a position updating event
                window.addEventListener("resize", deferredUpdate);
                window.addEventListener("orientationchange", deferredUpdate);
                (self.options.wrapper ? self.options.wrapper : window).addEventListener("scroll", deferredUpdate, supportsPassive ? {
                    passive: true
                } : false);
                (self.options.wrapper ? self.options.wrapper : document).addEventListener("touchmove", deferredUpdate, supportsPassive ? {
                    passive: true
                } : false);
            }
        };
        // Transform3d on parallax element
        var animate = function() {
            var positions;
            for(var i = 0; i < self.elems.length; i++){
                // Determine relevant movement directions
                var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
                var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
                var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
                var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
                var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
                var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
                var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
                var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);
                // Subtracting initialize value, so element stays in same spot as HTML
                positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
                var positionY = positions.y - blocks[i].baseY;
                var positionX = positions.x - blocks[i].baseX;
                // The next two "if" blocks go like this:
                // Check if a limit is defined (first "min", then "max");
                // Check if we need to change the Y or the X
                // (Currently working only if just one of the axes is enabled)
                // Then, check if the new position is inside the allowed limit
                // If so, use new position. If not, set position to limit.
                // Check if a min limit is defined
                if (blocks[i].min !== null) {
                    if (self.options.vertical && !self.options.horizontal) positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
                    if (self.options.horizontal && !self.options.vertical) positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
                }
                // Check if directional min limits are defined
                if (blocks[i].minY != null) positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
                if (blocks[i].minX != null) positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
                // Check if a max limit is defined
                if (blocks[i].max !== null) {
                    if (self.options.vertical && !self.options.horizontal) positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
                    if (self.options.horizontal && !self.options.vertical) positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
                }
                // Check if directional max limits are defined
                if (blocks[i].maxY != null) positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
                if (blocks[i].maxX != null) positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
                var zindex = blocks[i].zindex;
                // Move that element
                // (Set the new translation and append initial inline transforms.)
                var translate = "translate3d(" + (self.options.horizontal ? positionX : "0") + "px," + (self.options.vertical ? positionY : "0") + "px," + zindex + "px) " + blocks[i].transform;
                self.elems[i].style[transformProp] = translate;
            }
            self.options.callback(positions);
        };
        self.destroy = function() {
            for(var i = 0; i < self.elems.length; i++)self.elems[i].style.cssText = blocks[i].style;
            // Remove resize event listener if not pause, and pause
            if (!pause) {
                window.removeEventListener("resize", init);
                pause = true;
            }
            // Clear the animation loop to prevent possible memory leak
            clearLoop(loopId);
            loopId = null;
        };
        // Init
        init();
        // Allow to recalculate the initial values whenever we want
        self.refresh = init;
        return self;
    };
    return Rellax;
});

},{}],"8geFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "collapseFaq", ()=>collapseFaq);
function collapseFaq(collapseFaq) {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for(i = 0; i < coll.length; i++)coll[i].addEventListener("click", function() {
        this.classList.toggle("collapseActive");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) content.style.maxHeight = null;
        else content.style.maxHeight = content.scrollHeight + "px";
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acPBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCarousel", ()=>createCarousel);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _swiperScss = require("swiper/swiper.scss");
var _swiperBundleMinCss = require("swiper/swiper-bundle.min.css");
var _swiperMinCss = require("swiper/swiper.min.css");
(0, _swiperDefault.default).use([
    (0, _swiper.Navigation),
    (0, _swiper.Pagination)
]);
function createCarousel() {
    return new (0, _swiperDefault.default)(".swiperCarousel", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        grabCursor: true,
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
}

},{"swiper":"cCbRx","swiper/swiper.scss":"iXKG4","swiper/swiper-bundle.min.css":"girFM","swiper/swiper.min.css":"eFTGe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCbRx":[function(require,module,exports) {
/**
 * Swiper 9.3.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 15, 2023
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "Virtual", ()=>(0, _virtualJsDefault.default));
parcelHelpers.export(exports, "Keyboard", ()=>(0, _keyboardJsDefault.default));
parcelHelpers.export(exports, "Mousewheel", ()=>(0, _mousewheelJsDefault.default));
parcelHelpers.export(exports, "Navigation", ()=>(0, _navigationJsDefault.default));
parcelHelpers.export(exports, "Pagination", ()=>(0, _paginationJsDefault.default));
parcelHelpers.export(exports, "Scrollbar", ()=>(0, _scrollbarJsDefault.default));
parcelHelpers.export(exports, "Parallax", ()=>(0, _parallaxJsDefault.default));
parcelHelpers.export(exports, "Zoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "Controller", ()=>(0, _controllerJsDefault.default));
parcelHelpers.export(exports, "A11y", ()=>(0, _a11YJsDefault.default));
parcelHelpers.export(exports, "History", ()=>(0, _historyJsDefault.default));
parcelHelpers.export(exports, "HashNavigation", ()=>(0, _hashNavigationJsDefault.default));
parcelHelpers.export(exports, "Autoplay", ()=>(0, _autoplayJsDefault.default));
parcelHelpers.export(exports, "Thumbs", ()=>(0, _thumbsJsDefault.default));
parcelHelpers.export(exports, "FreeMode", ()=>(0, _freeModeJsDefault.default));
parcelHelpers.export(exports, "Grid", ()=>(0, _gridJsDefault.default));
parcelHelpers.export(exports, "Manipulation", ()=>(0, _manipulationJsDefault.default));
parcelHelpers.export(exports, "EffectFade", ()=>(0, _effectFadeJsDefault.default));
parcelHelpers.export(exports, "EffectCube", ()=>(0, _effectCubeJsDefault.default));
parcelHelpers.export(exports, "EffectFlip", ()=>(0, _effectFlipJsDefault.default));
parcelHelpers.export(exports, "EffectCoverflow", ()=>(0, _effectCoverflowJsDefault.default));
parcelHelpers.export(exports, "EffectCreative", ()=>(0, _effectCreativeJsDefault.default));
parcelHelpers.export(exports, "EffectCards", ()=>(0, _effectCardsJsDefault.default));
var _coreJs = require("./core/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _virtualJs = require("./modules/virtual/virtual.js");
var _virtualJsDefault = parcelHelpers.interopDefault(_virtualJs);
var _keyboardJs = require("./modules/keyboard/keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
var _mousewheelJs = require("./modules/mousewheel/mousewheel.js");
var _mousewheelJsDefault = parcelHelpers.interopDefault(_mousewheelJs);
var _navigationJs = require("./modules/navigation/navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _paginationJs = require("./modules/pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _scrollbarJs = require("./modules/scrollbar/scrollbar.js");
var _scrollbarJsDefault = parcelHelpers.interopDefault(_scrollbarJs);
var _parallaxJs = require("./modules/parallax/parallax.js");
var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
var _zoomJs = require("./modules/zoom/zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _controllerJs = require("./modules/controller/controller.js");
var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
var _a11YJs = require("./modules/a11y/a11y.js");
var _a11YJsDefault = parcelHelpers.interopDefault(_a11YJs);
var _historyJs = require("./modules/history/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _hashNavigationJs = require("./modules/hash-navigation/hash-navigation.js");
var _hashNavigationJsDefault = parcelHelpers.interopDefault(_hashNavigationJs);
var _autoplayJs = require("./modules/autoplay/autoplay.js");
var _autoplayJsDefault = parcelHelpers.interopDefault(_autoplayJs);
var _thumbsJs = require("./modules/thumbs/thumbs.js");
var _thumbsJsDefault = parcelHelpers.interopDefault(_thumbsJs);
var _freeModeJs = require("./modules/free-mode/free-mode.js");
var _freeModeJsDefault = parcelHelpers.interopDefault(_freeModeJs);
var _gridJs = require("./modules/grid/grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _manipulationJs = require("./modules/manipulation/manipulation.js");
var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
var _effectFadeJs = require("./modules/effect-fade/effect-fade.js");
var _effectFadeJsDefault = parcelHelpers.interopDefault(_effectFadeJs);
var _effectCubeJs = require("./modules/effect-cube/effect-cube.js");
var _effectCubeJsDefault = parcelHelpers.interopDefault(_effectCubeJs);
var _effectFlipJs = require("./modules/effect-flip/effect-flip.js");
var _effectFlipJsDefault = parcelHelpers.interopDefault(_effectFlipJs);
var _effectCoverflowJs = require("./modules/effect-coverflow/effect-coverflow.js");
var _effectCoverflowJsDefault = parcelHelpers.interopDefault(_effectCoverflowJs);
var _effectCreativeJs = require("./modules/effect-creative/effect-creative.js");
var _effectCreativeJsDefault = parcelHelpers.interopDefault(_effectCreativeJs);
var _effectCardsJs = require("./modules/effect-cards/effect-cards.js");
var _effectCardsJsDefault = parcelHelpers.interopDefault(_effectCardsJs);

},{"./core/core.js":"jvZQa","./modules/virtual/virtual.js":"13JV9","./modules/keyboard/keyboard.js":"82wTs","./modules/mousewheel/mousewheel.js":"dP6Ui","./modules/navigation/navigation.js":"lGdRo","./modules/pagination/pagination.js":"40Lys","./modules/scrollbar/scrollbar.js":"bfOsF","./modules/parallax/parallax.js":"aEM3Y","./modules/zoom/zoom.js":"5YHxH","./modules/controller/controller.js":"hcdrq","./modules/a11y/a11y.js":"lDTl7","./modules/history/history.js":"7pifE","./modules/hash-navigation/hash-navigation.js":"6TTnC","./modules/autoplay/autoplay.js":"1YoHq","./modules/thumbs/thumbs.js":"e0dJV","./modules/free-mode/free-mode.js":"4NFQW","./modules/grid/grid.js":"gE5KG","./modules/manipulation/manipulation.js":"ga5Sr","./modules/effect-fade/effect-fade.js":"fBGpM","./modules/effect-cube/effect-cube.js":"hV6iY","./modules/effect-flip/effect-flip.js":"dI6Dz","./modules/effect-coverflow/effect-coverflow.js":"9UFNU","./modules/effect-creative/effect-creative.js":"6uSvC","./modules/effect-cards/effect-cards.js":"9saRD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvZQa":[function(require,module,exports) {
/* eslint no-param-reassign: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../shared/utils.js");
var _getSupportJs = require("../shared/get-support.js");
var _getDeviceJs = require("../shared/get-device.js");
var _getBrowserJs = require("../shared/get-browser.js");
var _resizeJs = require("./modules/resize/resize.js");
var _resizeJsDefault = parcelHelpers.interopDefault(_resizeJs);
var _observerJs = require("./modules/observer/observer.js");
var _observerJsDefault = parcelHelpers.interopDefault(_observerJs);
var _eventsEmitterJs = require("./events-emitter.js");
var _eventsEmitterJsDefault = parcelHelpers.interopDefault(_eventsEmitterJs);
var _indexJs = require("./update/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./translate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./transition/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./slide/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./loop/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./grab-cursor/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./events/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./breakpoints/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./classes/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./check-overflow/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
var _moduleExtendParamsJs = require("./moduleExtendParams.js");
var _moduleExtendParamsJsDefault = parcelHelpers.interopDefault(_moduleExtendParamsJs);
var _processLazyPreloaderJs = require("../shared/process-lazy-preloader.js");
const prototypes = {
    eventsEmitter: (0, _eventsEmitterJsDefault.default),
    update: (0, _indexJsDefault.default),
    translate: (0, _indexJsDefault1.default),
    transition: (0, _indexJsDefault2.default),
    slide: (0, _indexJsDefault3.default),
    loop: (0, _indexJsDefault4.default),
    grabCursor: (0, _indexJsDefault5.default),
    events: (0, _indexJsDefault6.default),
    breakpoints: (0, _indexJsDefault7.default),
    checkOverflow: (0, _indexJsDefault9.default),
    classes: (0, _indexJsDefault8.default)
};
const extendedDefaults = {};
class Swiper {
    constructor(...args){
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, _utilsJs.extend)({}, params);
        if (el && !params.el) params.el = el;
        const document1 = (0, _ssrWindow.getDocument)();
        if (params.el && typeof params.el === "string" && document1.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document1.querySelectorAll(params.el).forEach((containerEl)=>{
                const newParams = (0, _utilsJs.extend)({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            // eslint-disable-next-line no-constructor-return
            return swipers;
        }
        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = (0, _getSupportJs.getSupport)();
        swiper.device = (0, _getDeviceJs.getDevice)({
            userAgent: params.userAgent
        });
        swiper.browser = (0, _getBrowserJs.getBrowser)();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                params,
                swiper,
                extendParams: (0, _moduleExtendParamsJsDefault.default)(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        });
        // Extend defaults with modules params
        const swiperParams = (0, _utilsJs.extend)({}, (0, _defaultsJsDefault.default), allModulesParams);
        // Extend defaults with passed params
        swiper.params = (0, _utilsJs.extend)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, _utilsJs.extend)({}, swiper.params);
        swiper.passedParams = (0, _utilsJs.extend)({}, params);
        // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
        // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === "horizontal";
            },
            isVertical () {
                return swiper.params.direction === "vertical";
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment () {
                // Returns 0 unless `translate` is > 2**23
                // Should be subtracted from css values to prevent overflow
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                startMoving: undefined,
                evCache: []
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit("_swiper");
        // Init
        if (swiper.params.init) swiper.init();
        // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    getSlideIndex(slideEl) {
        const { slidesEl , params  } = this;
        const slides = (0, _utilsJs.elementChildren)(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = (0, _utilsJs.elementIndex)(slides[0]);
        return (0, _utilsJs.elementIndex)(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
        const swiper = this;
        const { slidesEl , params  } = swiper;
        swiper.slides = (0, _utilsJs.elementChildren)(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit("enable");
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit("disable");
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(" ").filter((className)=>{
            return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return "";
        return slideEl.className.split(" ").filter((className)=>{
            return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(" ");
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit("_slideClass", slideEl, classNames);
        });
        swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view = "current", exact = false) {
        const swiper = this;
        const { params , slides , slidesGrid , slidesSizesGrid , size: swiperSize , activeIndex  } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === "current") for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid , params  } = swiper;
        // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ].forEach((imageEl)=>{
            if (imageEl.complete) (0, _processLazyPreloaderJs.processLazyPreloader)(swiper, imageEl);
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                const slides = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                translated = swiper.slideTo(slides.length - 1, 0, false, true);
            } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach((slideEl)=>{
            if (newDirection === "vertical") slideEl.style.width = "";
            else slideEl.style.height = "";
        });
        swiper.emit("changeDirection");
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
        swiper.rtl = direction === "rtl";
        swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
        if (swiper.rtl) {
            swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "rtl";
        } else {
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = "ltr";
        }
        swiper.update();
    }
    mount(element) {
        const swiper = this;
        if (swiper.mounted) return true;
        // Find el
        let el = element || swiper.params.el;
        if (typeof el === "string") el = document.querySelector(el);
        if (!el) return false;
        el.swiper = swiper;
        if (el.shadowEl) swiper.isElement = true;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = el.shadowRoot.querySelector(getWrapperSelector());
                // Children needs to return slot items
                return res;
            }
            return (0, _utilsJs.elementChildren)(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
            wrapperEl = (0, _utilsJs.createElement)("div", swiper.params.wrapperClass);
            el.append(wrapperEl);
            (0, _utilsJs.elementChildren)(el, `.${swiper.params.slideClass}`).forEach((slideEl)=>{
                wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            el,
            wrapperEl,
            slidesEl: swiper.isElement ? el : wrapperEl,
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === "rtl" || (0, _utilsJs.elementStyle)(el, "direction") === "rtl",
            rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || (0, _utilsJs.elementStyle)(el, "direction") === "rtl"),
            wrongRTL: (0, _utilsJs.elementStyle)(wrapperEl, "display") === "-webkit-box"
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit("beforeInit");
        // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
        // Add Classes
        swiper.addClasses();
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        // Create loop
        if (swiper.params.loop) swiper.loopCreate();
        // Attach events
        swiper.attachEvents();
        [
            ...swiper.el.querySelectorAll('[loading="lazy"]')
        ].forEach((imageEl)=>{
            if (imageEl.complete) (0, _processLazyPreloaderJs.processLazyPreloader)(swiper, imageEl);
            else imageEl.addEventListener("load", (e)=>{
                (0, _processLazyPreloaderJs.processLazyPreloader)(swiper, e.target);
            });
        });
        (0, _processLazyPreloaderJs.preload)(swiper);
        // Init Flag
        swiper.initialized = true;
        (0, _processLazyPreloaderJs.preload)(swiper);
        // Emit
        swiper.emit("init");
        swiper.emit("afterInit");
        return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const { params , el , wrapperEl , slides  } = swiper;
        if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
        swiper.emit("beforeDestroy");
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) swiper.loopDestroy();
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            el.removeAttribute("style");
            wrapperEl.removeAttribute("style");
            if (slides && slides.length) slides.forEach((slideEl)=>{
                slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                slideEl.removeAttribute("style");
                slideEl.removeAttribute("data-swiper-slide-index");
            });
        }
        swiper.emit("destroy");
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.el.swiper = null;
            (0, _utilsJs.deleteProps)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, _utilsJs.extend)(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return 0, _defaultsJsDefault.default;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    (0, _resizeJsDefault.default),
    (0, _observerJsDefault.default)
]);
exports.default = Swiper;

},{"ssr-window":"3lyfI","../shared/utils.js":"dbikn","../shared/get-support.js":"dU80s","../shared/get-device.js":"fHzNz","../shared/get-browser.js":"2AwWY","./modules/resize/resize.js":"awiu0","./modules/observer/observer.js":"Fvg8a","./events-emitter.js":"970nW","./update/index.js":"5pXU1","./translate/index.js":"82UFa","./transition/index.js":"8Knou","./slide/index.js":"5VZY1","./loop/index.js":"6S1wN","./grab-cursor/index.js":"6y5ez","./events/index.js":"jPWSg","./breakpoints/index.js":"6sZHb","./classes/index.js":"dJ7YF","./check-overflow/index.js":"cCZBR","./defaults.js":"jwKb5","./moduleExtendParams.js":"2G6E7","../shared/process-lazy-preloader.js":"ftL3r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lyfI":[function(require,module,exports) {
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getDocument", ()=>getDocument);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "ssrDocument", ()=>ssrDocument);
parcelHelpers.export(exports, "ssrWindow", ()=>ssrWindow);
function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === "undefined") target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return "";
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === "undefined") {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === "undefined") return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbikn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateCSSModeScroll", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "deleteProps", ()=>deleteProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
parcelHelpers.export(exports, "setCSSProperty", ()=>setCSSProperty);
parcelHelpers.export(exports, "getSlideTransformEl", ()=>getSlideTransformEl);
parcelHelpers.export(exports, "findElementsInElements", ()=>// dom
    findElementsInElements);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "elementChildren", ()=>elementChildren);
parcelHelpers.export(exports, "elementOffset", ()=>elementOffset);
parcelHelpers.export(exports, "elementPrevAll", ()=>elementPrevAll);
parcelHelpers.export(exports, "elementNextAll", ()=>elementNextAll);
parcelHelpers.export(exports, "elementStyle", ()=>elementStyle);
parcelHelpers.export(exports, "elementIndex", ()=>elementIndex);
parcelHelpers.export(exports, "elementParents", ()=>elementParents);
parcelHelpers.export(exports, "elementTransitionEnd", ()=>elementTransitionEnd);
parcelHelpers.export(exports, "elementOuterSize", ()=>elementOuterSize);
var _ssrWindow = require("ssr-window");
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        // no getter for object
        }
        try {
            delete object[key];
        } catch (e) {
        // something got wrong
        }
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window1 = (0, _ssrWindow.getWindow)();
    let style;
    if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis = "x") {
    const window1 = (0, _ssrWindow.getWindow)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el, null);
    if (window1.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window1.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
    const to = Object(args[0]);
    const noExtend = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let i = 1; i < args.length; i += 1){
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper , targetPosition , side  }) {
    const window1 = (0, _ssrWindow.getWindow)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window1.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target)=>{
        return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.scrollSnapType = "";
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
    };
    animate();
}
function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowEl && slideEl.shadowEl.querySelector(".swiper-slide-transform") || slideEl;
}
function findElementsInElements(elements = [], selector = "") {
    const found = [];
    elements.forEach((el)=>{
        found.push(...el.querySelectorAll(selector));
    });
    return found;
}
function elementChildren(element, selector = "") {
    return [
        ...element.children
    ].filter((el)=>el.matches(selector));
}
function createElement(tag, classes = []) {
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes) ? classes : [
        classes
    ]);
    return el;
}
function elementOffset(el) {
    const window1 = (0, _ssrWindow.getWindow)();
    const document1 = (0, _ssrWindow.getDocument)();
    const box = el.getBoundingClientRect();
    const body = document1.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window1 ? window1.scrollY : el.scrollTop;
    const scrollLeft = el === window1 ? window1.scrollX : el.scrollLeft;
    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    };
}
function elementPrevAll(el, selector) {
    const prevEls = [];
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return prevEls;
}
function elementNextAll(el, selector) {
    const nextEls = [];
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return nextEls;
}
function elementStyle(el, prop) {
    const window1 = (0, _ssrWindow.getWindow)();
    return window1.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
        i = 0;
        // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function elementParents(el, selector) {
    const parents = []; // eslint-disable-line
    let parent = el.parentElement; // eslint-disable-line
    while(parent){
        if (selector) {
            if (parent.matches(selector)) parents.push(parent);
        } else parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}
function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) el.addEventListener("transitionend", fireCallBack);
}
function elementOuterSize(el, size, includeMargins) {
    const window1 = (0, _ssrWindow.getWindow)();
    if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window1.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    return el.offsetWidth;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dU80s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSupport", ()=>getSupport);
var _ssrWindow = require("ssr-window");
let support;
function calcSupport() {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    return {
        smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
        touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHzNz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevice", ()=>getDevice);
var _ssrWindow = require("ssr-window");
var _getSupportJs = require("./get-support.js");
let deviceCached;
function calcDevice({ userAgent  } = {}) {
    const support = (0, _getSupportJs.getSupport)();
    const window = (0, _ssrWindow.getWindow)();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    // iPadOs 13 fix
    const iPadScreens = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            "13_0_0"
        ];
        macos = false;
    }
    // Android
    if (android && !windows) {
        device.os = "android";
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
    }
    // Export object
    return device;
}
function getDevice(overrides = {}) {
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}

},{"ssr-window":"3lyfI","./get-support.js":"dU80s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2AwWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBrowser", ()=>getBrowser);
var _ssrWindow = require("ssr-window");
let browser;
function calcBrowser() {
    const window = (0, _ssrWindow.getWindow)();
    let needPerspectiveFix = false;
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
        const ua = String(window.navigator.userAgent);
        if (ua.includes("Version/")) {
            const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num)=>Number(num));
            needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
    }
    return {
        isSafari: needPerspectiveFix || isSafari(),
        needPerspectiveFix,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awiu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function Resize({ swiper , on , emit  }) {
    const window = (0, _ssrWindow.getWindow)();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("beforeResize");
        emit("resize");
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window.requestAnimationFrame(()=>{
                const { width , height  } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach(({ contentBoxSize , contentRect , target  })=>{
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("orientationchange");
    };
    on("init", ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
            createObserver();
            return;
        }
        window.addEventListener("resize", resizeHandler);
        window.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", ()=>{
        removeObserver();
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("orientationchange", orientationChangeHandler);
    });
}
exports.default = Resize;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Fvg8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../../shared/utils.js");
function Observer({ swiper , extendParams , on , emit  }) {
    const observers = [];
    const window = (0, _ssrWindow.getWindow)();
    const attach = (target, options = {})=>{
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit("observerUpdate", mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit("observerUpdate", mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === "undefined" ? true : options.attributes,
            childList: typeof options.childList === "undefined" ? true : options.childList,
            characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = (0, _utilsJs.elementParents)(swiper.el);
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        }
        // Observe container
        attach(swiper.el, {
            childList: swiper.params.observeSlideChildren
        });
        // Observe wrapper
        attach(swiper.wrapperEl, {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
}
exports.default = Observer;

},{"ssr-window":"3lyfI","../../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"970nW":[function(require,module,exports) {
/* eslint-disable no-underscore-dangle */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        events.split(" ").forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        function onceHandler(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(" ").forEach((event)=>{
            if (typeof handler === "undefined") self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit (...args) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(" ");
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5pXU1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _updateSizeJs = require("./updateSize.js");
var _updateSizeJsDefault = parcelHelpers.interopDefault(_updateSizeJs);
var _updateSlidesJs = require("./updateSlides.js");
var _updateSlidesJsDefault = parcelHelpers.interopDefault(_updateSlidesJs);
var _updateAutoHeightJs = require("./updateAutoHeight.js");
var _updateAutoHeightJsDefault = parcelHelpers.interopDefault(_updateAutoHeightJs);
var _updateSlidesOffsetJs = require("./updateSlidesOffset.js");
var _updateSlidesOffsetJsDefault = parcelHelpers.interopDefault(_updateSlidesOffsetJs);
var _updateSlidesProgressJs = require("./updateSlidesProgress.js");
var _updateSlidesProgressJsDefault = parcelHelpers.interopDefault(_updateSlidesProgressJs);
var _updateProgressJs = require("./updateProgress.js");
var _updateProgressJsDefault = parcelHelpers.interopDefault(_updateProgressJs);
var _updateSlidesClassesJs = require("./updateSlidesClasses.js");
var _updateSlidesClassesJsDefault = parcelHelpers.interopDefault(_updateSlidesClassesJs);
var _updateActiveIndexJs = require("./updateActiveIndex.js");
var _updateActiveIndexJsDefault = parcelHelpers.interopDefault(_updateActiveIndexJs);
var _updateClickedSlideJs = require("./updateClickedSlide.js");
var _updateClickedSlideJsDefault = parcelHelpers.interopDefault(_updateClickedSlideJs);
exports.default = {
    updateSize: (0, _updateSizeJsDefault.default),
    updateSlides: (0, _updateSlidesJsDefault.default),
    updateAutoHeight: (0, _updateAutoHeightJsDefault.default),
    updateSlidesOffset: (0, _updateSlidesOffsetJsDefault.default),
    updateSlidesProgress: (0, _updateSlidesProgressJsDefault.default),
    updateProgress: (0, _updateProgressJsDefault.default),
    updateSlidesClasses: (0, _updateSlidesClassesJsDefault.default),
    updateActiveIndex: (0, _updateActiveIndexJsDefault.default),
    updateClickedSlide: (0, _updateClickedSlideJsDefault.default)
};

},{"./updateSize.js":"bsa2K","./updateSlides.js":"eZm9z","./updateAutoHeight.js":"7KfeT","./updateSlidesOffset.js":"6FBIR","./updateSlidesProgress.js":"f3Dkt","./updateProgress.js":"2zH9x","./updateSlidesClasses.js":"28hyn","./updateActiveIndex.js":"8xZJ6","./updateClickedSlide.js":"e8k92","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsa2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
    else width = el.clientWidth;
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
    else height = el.clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
    // Subtract paddings
    width = width - parseInt((0, _utilsJs.elementStyle)(el, "padding-left") || 0, 10) - parseInt((0, _utilsJs.elementStyle)(el, "padding-right") || 0, 10);
    height = height - parseInt((0, _utilsJs.elementStyle)(el, "padding-top") || 0, 10) - parseInt((0, _utilsJs.elementStyle)(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
exports.default = updateSize;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZm9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
        // prettier-ignore
        return ({
            "width": "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            "marginRight": "marginBottom"
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { wrapperEl , slidesEl , size: swiperSize , rtlTranslate: rtl , wrongRTL  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = (0, _utilsJs.elementChildren)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") return;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    swiper.virtualSize = -spaceBetween;
    // reset margins
    slides.forEach((slideEl)=>{
        if (rtl) slideEl.style.marginLeft = "";
        else slideEl.style.marginRight = "";
        slideEl.style.marginBottom = "";
        slideEl.style.marginTop = "";
    });
    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, _utilsJs.setCSSProperty)(wrapperEl, "--swiper-centered-offset-before", "");
        (0, _utilsJs.setCSSProperty)(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
    // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        let slide;
        if (slides[i]) slide = slides[i];
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slides[i] && (0, _utilsJs.elementStyle)(slide, "display") === "none") continue; // eslint-disable-line
        if (params.slidesPerView === "auto") {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
            const slideStyles = getComputedStyle(slide);
            const currentTransform = slide.style.transform;
            const currentWebKitTransform = slide.style.webkitTransform;
            if (currentTransform) slide.style.transform = "none";
            if (currentWebKitTransform) slide.style.webkitTransform = "none";
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? (0, _utilsJs.elementOuterSize)(slide, "width", true) : (0, _utilsJs.elementOuterSize)(slide, "height", true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                const boxSizing = slideStyles.getPropertyValue("box-sizing");
                if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth , offsetWidth  } = slide;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide.style.transform = currentTransform;
            if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for(let i = 0; i < groups; i += 1)snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
        for(let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1){
            if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).forEach((slideEl)=>{
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, _utilsJs.setCSSProperty)(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        (0, _utilsJs.setCSSProperty)(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
    }
}
exports.default = updateSlides;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KfeT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
        return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
    // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
    // Update Height
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
exports.default = updateAutoHeight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FBIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    // eslint-disable-next-line
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
exports.default = updateSlidesOffset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3Dkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides , rtlTranslate: rtl , snapGrid  } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
    // Visible Slides
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides[i].classList.add(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}
exports.default = updateSlidesProgress;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zH9x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress , isBeginning , isEnd , progressLoop  } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
    }
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
    if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
    swiper.emit("progress", progress);
}
exports.default = updateProgress;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28hyn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function updateSlidesClasses() {
    const swiper = this;
    const { slides , params , slidesEl , activeIndex  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const getFilteredSlide = (selector)=>{
        return (0, _utilsJs.elementChildren)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    slides.forEach((slideEl)=>{
        slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    if (isVirtual) {
        if (params.loop) {
            let slideIndex = activeIndex - swiper.virtual.slidesBefore;
            if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
            if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    } else activeSlide = slides[activeIndex];
    if (activeSlide) {
        // Active classes
        activeSlide.classList.add(params.slideActiveClass);
        // Next Slide
        let nextSlide = (0, _utilsJs.elementNextAll)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) nextSlide = slides[0];
        if (nextSlide) nextSlide.classList.add(params.slideNextClass);
        // Prev Slide
        let prevSlide = (0, _utilsJs.elementPrevAll)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        params.loop;
        if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
    }
    swiper.emitSlidesClasses();
}
exports.default = updateSlidesClasses;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xZJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getActiveIndexByTranslate", ()=>getActiveIndexByTranslate);
var _processLazyPreloaderJs = require("../../shared/process-lazy-preloader.js");
function getActiveIndexByTranslate(swiper) {
    const { slidesGrid , params  } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for(let i = 0; i < slidesGrid.length; i += 1){
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
            else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
        } else if (translate >= slidesGrid[i]) activeIndex = i;
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid , params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex)=>{
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
        if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
        return realIndex;
    };
    if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit("snapIndexChange");
        }
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }
    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex);
    else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
    else realIndex = activeIndex;
    Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    if (swiper.initialized) (0, _processLazyPreloaderJs.preload)(swiper);
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
}
exports.default = updateActiveIndex;

},{"../../shared/process-lazy-preloader.js":"ftL3r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftL3r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "processLazyPreloader", ()=>processLazyPreloader);
parcelHelpers.export(exports, "preload", ()=>preload);
const processLazyPreloader = (swiper, imageEl)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = ()=>swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (lazyEl) lazyEl.remove();
    }
};
const unlazy = (swiper, index)=>{
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
};
const preload = (swiper)=>{
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind) for(let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1){
        const realIndex = (i % len + len) % len;
        if (realIndex !== activeIndex && realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
    else {
        for(let i = Math.max(slideIndexLastInView - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1)if (i !== activeIndex && i > slideIndexLastInView) unlazy(swiper, i);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8k92":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = e.closest(`.${params.slideClass}, swiper-slide`);
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
exports.default = updateClickedSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82UFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTranslateJs = require("./getTranslate.js");
var _getTranslateJsDefault = parcelHelpers.interopDefault(_getTranslateJs);
var _setTranslateJs = require("./setTranslate.js");
var _setTranslateJsDefault = parcelHelpers.interopDefault(_setTranslateJs);
var _minTranslateJs = require("./minTranslate.js");
var _minTranslateJsDefault = parcelHelpers.interopDefault(_minTranslateJs);
var _maxTranslateJs = require("./maxTranslate.js");
var _maxTranslateJsDefault = parcelHelpers.interopDefault(_maxTranslateJs);
var _translateToJs = require("./translateTo.js");
var _translateToJsDefault = parcelHelpers.interopDefault(_translateToJs);
exports.default = {
    getTranslate: (0, _getTranslateJsDefault.default),
    setTranslate: (0, _setTranslateJsDefault.default),
    minTranslate: (0, _minTranslateJsDefault.default),
    maxTranslate: (0, _maxTranslateJsDefault.default),
    translateTo: (0, _translateToJsDefault.default)
};

},{"./getTranslate.js":"l7sfz","./setTranslate.js":"g0P3q","./minTranslate.js":"hopBm","./maxTranslate.js":"izojh","./translateTo.js":"9fo5P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7sfz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
    const swiper = this;
    const { params , rtlTranslate: rtl , translate , wrapperEl  } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = (0, _utilsJs.getTranslate)(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
exports.default = getSwiperTranslate;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0P3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl , params , wrapperEl , progress  } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment();
        else y -= swiper.cssOverflowAdjustment();
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit("setTranslate", swiper.translate, byController);
}
exports.default = setTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hopBm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function minTranslate() {
    return -this.snapGrid[0];
}
exports.default = minTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izojh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
exports.default = maxTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fo5P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params , wrapperEl  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate;
    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: -newTranslate,
                behavior: "smooth"
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionEnd");
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionStart");
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit("transitionEnd");
            };
            swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
exports.default = translateTo;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Knou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTransitionJs = require("./setTransition.js");
var _setTransitionJsDefault = parcelHelpers.interopDefault(_setTransitionJs);
var _transitionStartJs = require("./transitionStart.js");
var _transitionStartJsDefault = parcelHelpers.interopDefault(_transitionStartJs);
var _transitionEndJs = require("./transitionEnd.js");
var _transitionEndJsDefault = parcelHelpers.interopDefault(_transitionEndJs);
exports.default = {
    setTransition: (0, _setTransitionJsDefault.default),
    transitionStart: (0, _transitionStartJsDefault.default),
    transitionEnd: (0, _transitionEndJsDefault.default)
};

},{"./setTransition.js":"g4hnj","./transitionStart.js":"ZupG2","./transitionEnd.js":"6fcJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4hnj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.emit("setTransition", duration, byController);
}
exports.default = setTransition;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ZupG2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params  } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: "Start"
    });
}
exports.default = transitionStart;

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6fZ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function transitionEmit({ swiper , runCallbacks , direction , step  }) {
    const { activeIndex , previousIndex  } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = "next";
        else if (activeIndex < previousIndex) dir = "prev";
        else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === "reset") {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === "next") swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
exports.default = transitionEmit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fcJ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params  } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: "End"
    });
}
exports.default = transitionEnd;

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VZY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideToJs = require("./slideTo.js");
var _slideToJsDefault = parcelHelpers.interopDefault(_slideToJs);
var _slideToLoopJs = require("./slideToLoop.js");
var _slideToLoopJsDefault = parcelHelpers.interopDefault(_slideToLoopJs);
var _slideNextJs = require("./slideNext.js");
var _slideNextJsDefault = parcelHelpers.interopDefault(_slideNextJs);
var _slidePrevJs = require("./slidePrev.js");
var _slidePrevJsDefault = parcelHelpers.interopDefault(_slidePrevJs);
var _slideResetJs = require("./slideReset.js");
var _slideResetJsDefault = parcelHelpers.interopDefault(_slideResetJs);
var _slideToClosestJs = require("./slideToClosest.js");
var _slideToClosestJsDefault = parcelHelpers.interopDefault(_slideToClosestJs);
var _slideToClickedSlideJs = require("./slideToClickedSlide.js");
var _slideToClickedSlideJsDefault = parcelHelpers.interopDefault(_slideToClickedSlideJs);
exports.default = {
    slideTo: (0, _slideToJsDefault.default),
    slideToLoop: (0, _slideToLoopJsDefault.default),
    slideNext: (0, _slideNextJsDefault.default),
    slidePrev: (0, _slidePrevJsDefault.default),
    slideReset: (0, _slideResetJsDefault.default),
    slideToClosest: (0, _slideToClosestJsDefault.default),
    slideToClickedSlide: (0, _slideToClickedSlideJsDefault.default)
};

},{"./slideTo.js":"iYsU0","./slideToLoop.js":"c0zrc","./slideNext.js":"6QRzM","./slidePrev.js":"2gloi","./slideReset.js":"2Jl3v","./slideToClosest.js":"c03V7","./slideToClickedSlide.js":"kCvnh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYsU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index === "string") index = parseInt(index, 10);
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params , snapGrid , slidesGrid , previousIndex , activeIndex , rtlTranslate: rtl , wrapperEl , enabled  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== "slide") swiper.setTranslate(translate);
        if (direction !== "reset") {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = "none";
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame(()=>{
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                });
            } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = "";
                swiper._immediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: t,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: t,
                behavior: "smooth"
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}
exports.default = slideTo;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0zrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
    if (typeof index === "string") {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) // eslint-disable-next-line
        newIndex = newIndex + swiper.virtual.slidesBefore;
        else newIndex = swiper.getSlideIndexByData(newIndex);
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
exports.default = slideToLoop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QRzM":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { enabled , params , animating  } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "next"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
exports.default = slideNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gloi":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params , snapGrid , slidesGrid , rtlTranslate , enabled , animating  } = swiper;
    if (!enabled) return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "prev"
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
exports.default = slidePrev;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Jl3v":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
exports.default = slideReset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c03V7":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
exports.default = slideToClosest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCvnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function slideToClickedSlide() {
    const swiper = this;
    const { params , slidesEl  } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex((0, _utilsJs.elementChildren)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                (0, _utilsJs.nextTick)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex((0, _utilsJs.elementChildren)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            (0, _utilsJs.nextTick)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
exports.default = slideToClickedSlide;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6S1wN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loopCreateJs = require("./loopCreate.js");
var _loopCreateJsDefault = parcelHelpers.interopDefault(_loopCreateJs);
var _loopFixJs = require("./loopFix.js");
var _loopFixJsDefault = parcelHelpers.interopDefault(_loopFixJs);
var _loopDestroyJs = require("./loopDestroy.js");
var _loopDestroyJsDefault = parcelHelpers.interopDefault(_loopDestroyJs);
exports.default = {
    loopCreate: (0, _loopCreateJsDefault.default),
    loopFix: (0, _loopFixJsDefault.default),
    loopDestroy: (0, _loopDestroyJsDefault.default)
};

},{"./loopCreate.js":"2lRpX","./loopFix.js":"iCLJj","./loopDestroy.js":"in4TF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lRpX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function loopCreate(slideRealIndex) {
    const swiper = this;
    const { params , slidesEl  } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const slides = (0, _utilsJs.elementChildren)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index)=>{
        el.setAttribute("data-swiper-slide-index", index);
    });
    swiper.loopFix({
        slideRealIndex,
        direction: params.centeredSlides ? undefined : "next"
    });
}
exports.default = loopCreate;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCLJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopFix({ slideRealIndex , slideTo =true , direction , setTranslate , activeSlideIndex , byController , byMousewheel  } = {}) {
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const { slides , allowSlidePrev , allowSlideNext , slidesEl , params  } = swiper;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
        if (slideTo) {
            if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
            else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
            else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit("loopFix");
        return;
    }
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
    let loopedSlides = params.loopedSlides || slidesPerView;
    if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
    swiper.loopedSlides = loopedSlides;
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el)=>el.classList.contains(params.slideActiveClass))[0]);
    else activeIndex = activeSlideIndex;
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    // prepend last slides before start
    if (activeSlideIndex < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
        for(let i = 0; i < loopedSlides - activeSlideIndex; i += 1){
            const index = i - Math.floor(i / slides.length) * slides.length;
            prependSlidesIndexes.push(slides.length - index - 1);
        }
    } else if (activeSlideIndex /* + slidesPerView */  > swiper.slides.length - loopedSlides * 2) {
        slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
        for(let i = 0; i < slidesAppended; i += 1){
            const index = i - Math.floor(i / slides.length) * slides.length;
            appendSlidesIndexes.push(index);
        }
    }
    if (isPrev) prependSlidesIndexes.forEach((index)=>{
        swiper.slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(swiper.slides[index]);
        swiper.slides[index].swiperLoopMoveDOM = false;
    });
    if (isNext) appendSlidesIndexes.forEach((index)=>{
        swiper.slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(swiper.slides[index]);
        swiper.slides[index].swiperLoopMoveDOM = false;
    });
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") swiper.updateSlides();
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (slideTo) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
        } else if (appendSlidesIndexes.length > 0 && isNext) {
            if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
                else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
        const loopParams = {
            slideRealIndex,
            slideTo: false,
            direction,
            setTranslate,
            activeSlideIndex,
            byController: true
        };
        if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c)=>{
            if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
        });
        else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
    }
    swiper.emit("loopFix");
}
exports.default = loopFix;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"in4TF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopDestroy() {
    const swiper = this;
    const { params , slidesEl  } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl)=>{
        const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl)=>{
        slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl)=>{
        slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
}
exports.default = loopDestroy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6y5ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setGrabCursorJs = require("./setGrabCursor.js");
var _setGrabCursorJsDefault = parcelHelpers.interopDefault(_setGrabCursorJs);
var _unsetGrabCursorJs = require("./unsetGrabCursor.js");
var _unsetGrabCursorJsDefault = parcelHelpers.interopDefault(_unsetGrabCursorJs);
exports.default = {
    setGrabCursor: (0, _setGrabCursorJsDefault.default),
    unsetGrabCursor: (0, _unsetGrabCursorJsDefault.default)
};

},{"./setGrabCursor.js":"6iLu0","./unsetGrabCursor.js":"fKd0x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iLu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
exports.default = setGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKd0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    if (swiper.isElement) swiper.__preventObserver__ = true;
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) requestAnimationFrame(()=>{
        swiper.__preventObserver__ = false;
    });
}
exports.default = unsetGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPWSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _onTouchStartJs = require("./onTouchStart.js");
var _onTouchStartJsDefault = parcelHelpers.interopDefault(_onTouchStartJs);
var _onTouchMoveJs = require("./onTouchMove.js");
var _onTouchMoveJsDefault = parcelHelpers.interopDefault(_onTouchMoveJs);
var _onTouchEndJs = require("./onTouchEnd.js");
var _onTouchEndJsDefault = parcelHelpers.interopDefault(_onTouchEndJs);
var _onResizeJs = require("./onResize.js");
var _onResizeJsDefault = parcelHelpers.interopDefault(_onResizeJs);
var _onClickJs = require("./onClick.js");
var _onClickJsDefault = parcelHelpers.interopDefault(_onClickJs);
var _onScrollJs = require("./onScroll.js");
var _onScrollJsDefault = parcelHelpers.interopDefault(_onScrollJs);
var _onLoadJs = require("./onLoad.js");
var _onLoadJsDefault = parcelHelpers.interopDefault(_onLoadJs);
let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method)=>{
    const document = (0, _ssrWindow.getDocument)();
    const { params , el , wrapperEl , device  } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    // Touch Events
    el[domMethod]("pointerdown", swiper.onTouchStart, {
        passive: false
    });
    document[domMethod]("pointermove", swiper.onTouchMove, {
        passive: false,
        capture
    });
    document[domMethod]("pointerup", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("pointercancel", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("pointerout", swiper.onTouchEnd, {
        passive: true
    });
    document[domMethod]("pointerleave", swiper.onTouchEnd, {
        passive: true
    });
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
    // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", (0, _onResizeJsDefault.default), true);
    else swiper[swiperMethod]("observerUpdate", (0, _onResizeJsDefault.default), true);
    // Images loader
    el[domMethod]("load", swiper.onLoad, {
        capture: true
    });
};
function attachEvents() {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const { params  } = swiper;
    swiper.onTouchStart = (0, _onTouchStartJsDefault.default).bind(swiper);
    swiper.onTouchMove = (0, _onTouchMoveJsDefault.default).bind(swiper);
    swiper.onTouchEnd = (0, _onTouchEndJsDefault.default).bind(swiper);
    if (params.cssMode) swiper.onScroll = (0, _onScrollJsDefault.default).bind(swiper);
    swiper.onClick = (0, _onClickJsDefault.default).bind(swiper);
    swiper.onLoad = (0, _onLoadJsDefault.default).bind(swiper);
    if (!dummyEventAttached) {
        document.addEventListener("touchstart", dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, "on");
}
function detachEvents() {
    const swiper = this;
    events(swiper, "off");
}
exports.default = {
    attachEvents,
    detachEvents
};

},{"ssr-window":"3lyfI","./onTouchStart.js":"kkzrg","./onTouchMove.js":"cSIvX","./onTouchEnd.js":"db2nG","./onResize.js":"4q7ER","./onClick.js":"leO2O","./onScroll.js":"ik2Ty","./onLoad.js":"6mZNq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkzrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
    function __closestFrom(el) {
        if (!el || el === (0, _ssrWindow.getDocument)() || el === (0, _ssrWindow.getWindow)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    const data = swiper.touchEventsData;
    data.evCache.push(event);
    const { params , touches , enabled  } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
        if (!swiper.wrapperEl.contains(targetEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    // eslint-disable-next-line
    const eventPath = event.composedPath ? event.composedPath() : event.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === "prevent") event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, _utilsJs.now)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === "SELECT") data.isTouched = false;
    }
    if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit("touchStart", e);
}
exports.default = onTouchStart;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSIvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function onTouchMove(event) {
    const document = (0, _ssrWindow.getDocument)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , enabled  } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
        return;
    }
    const pointerIndex = data.evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
    const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                prevX: swiper.touches.currentX,
                prevY: swiper.touches.currentY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, _utilsJs.now)();
        }
        return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (document.activeElement) {
        if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
    if (typeof data.startMoving === "undefined") {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    if (!data.isMoved) {
        if (isLoop) swiper.loopFix({
            direction: swiper.swipeDirection
        });
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            const evt = new window.CustomEvent("transitionend", {
                bubbles: true,
                cancelable: true
            });
            swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
        // need another loop fix
        swiper.loopFix({
            direction: swiper.swipeDirection,
            setTranslate: true
        });
        loopFixed = true;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0) {
        if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
            direction: "prev",
            setTranslate: true,
            activeSlideIndex: 0
        });
        if (data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
    } else if (diff < 0) {
        if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
            direction: "next",
            setTranslate: true,
            activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
        if (data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return;
    // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
}
exports.default = onTouchMove;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"db2nG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const pointerIndex = data.evCache.findIndex((cachedEv)=>cachedEv.pointerId === event.pointerId);
    if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
    if ([
        "pointercancel",
        "pointerout",
        "pointerleave"
    ].includes(event.type)) {
        const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) return;
    }
    const { params , touches , rtlTranslate: rtl , slidesGrid , enabled  } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event.pointerType === "mouse") return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
    // Time diff
    const touchEndTime = (0, _utilsJs.now)();
    const timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit("tap click", e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
    }
    data.lastClickTime = (0, _utilsJs.now)();
    (0, _utilsJs.nextTick)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    }
    // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== "undefined") {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === "next") {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === "prev") {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
exports.default = onTouchEnd;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q7ER":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onResize() {
    const swiper = this;
    const { params , el  } = swiper;
    if (el && el.offsetWidth === 0) return;
    // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
    // Save locks
    const { allowSlideNext , allowSlidePrev , snapGrid  } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(()=>{
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
        }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
exports.default = onResize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leO2O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
exports.default = onClick;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ik2Ty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onScroll() {
    const swiper = this;
    const { wrapperEl , rtlTranslate , enabled  } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
    // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit("setTranslate", swiper.translate, false);
}
exports.default = onScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mZNq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _processLazyPreloaderJs = require("../../shared/process-lazy-preloader.js");
function onLoad(e) {
    const swiper = this;
    (0, _processLazyPreloaderJs.processLazyPreloader)(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
    swiper.update();
}
exports.default = onLoad;

},{"../../shared/process-lazy-preloader.js":"ftL3r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sZHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setBreakpointJs = require("./setBreakpoint.js");
var _setBreakpointJsDefault = parcelHelpers.interopDefault(_setBreakpointJs);
var _getBreakpointJs = require("./getBreakpoint.js");
var _getBreakpointJsDefault = parcelHelpers.interopDefault(_getBreakpointJs);
exports.default = {
    setBreakpoint: (0, _setBreakpointJsDefault.default),
    getBreakpoint: (0, _getBreakpointJsDefault.default)
};

},{"./setBreakpoint.js":"9am8j","./getBreakpoint.js":"dePRa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9am8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { realIndex , initialized , params , el  } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
    // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    // Toggle navigation, pagination, scrollbar
    [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((prop)=>{
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    (0, _utilsJs.extend)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
    }
    swiper.emit("breakpoint", breakpointParams);
}
exports.default = setBreakpoint;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dePRa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function getBreakpoint(breakpoints, base = "window", containerEl) {
    if (!breakpoints || base === "container" && !containerEl) return undefined;
    let breakpoint = false;
    const window = (0, _ssrWindow.getWindow)();
    const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === "string" && point.indexOf("@") === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point , value  } = points[i];
        if (base === "window") {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || "max";
}
exports.default = getBreakpoint;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJ7YF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addClassesJs = require("./addClasses.js");
var _addClassesJsDefault = parcelHelpers.interopDefault(_addClassesJs);
var _removeClassesJs = require("./removeClasses.js");
var _removeClassesJsDefault = parcelHelpers.interopDefault(_removeClassesJs);
exports.default = {
    addClasses: (0, _addClassesJsDefault.default),
    removeClasses: (0, _removeClassesJsDefault.default)
};

},{"./addClasses.js":"2wJnK","./removeClasses.js":"bfksE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wJnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === "string") resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames , params , rtl , el , device  } = swiper;
    // prettier-ignore
    const suffixes = prepareClasses([
        "initialized",
        params.direction,
        {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        },
        {
            "autoheight": params.autoHeight
        },
        {
            "rtl": rtl
        },
        {
            "grid": params.grid && params.grid.rows > 1
        },
        {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        },
        {
            "android": device.android
        },
        {
            "ios": device.ios
        },
        {
            "css-mode": params.cssMode
        },
        {
            "centered": params.cssMode && params.centeredSlides
        },
        {
            "watch-progress": params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
}
exports.default = addClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfksE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeClasses() {
    const swiper = this;
    const { el , classNames  } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
}
exports.default = removeClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCZBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked , params  } = swiper;
    const { slidesOffsetBefore  } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
exports.default = {
    checkOverflow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwKb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopedSlides: null,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2G6E7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../shared/utils.js");
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if ([
            "navigation",
            "pagination",
            "scrollbar"
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && "enabled" in moduleParams)) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, _utilsJs.extend)(allModulesParams, obj);
    };
}
exports.default = moduleExtendParams;

},{"../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13JV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Virtual({ swiper , extendParams , on , emit  }) {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    const document = (0, _ssrWindow.getDocument)();
    swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const tempDOM = document.createElement("div");
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        // eslint-disable-next-line
        let slideEl;
        if (params.renderSlide) {
            slideEl = params.renderSlide.call(swiper, slide, index);
            if (typeof slideEl === "string") {
                tempDOM.innerHTML = slideEl;
                slideEl = tempDOM.children[0];
            }
        } else if (swiper.isElement) slideEl = (0, _utilsJs.createElement)("swiper-slide");
        else slideEl = (0, _utilsJs.createElement)("div", swiper.params.slideClass);
        slideEl.setAttribute("data-swiper-slide-index", index);
        if (!params.renderSlide) slideEl.innerHTML = slide;
        if (params.cache) swiper.virtual.cache[index] = slideEl;
        return slideEl;
    }
    function update(force) {
        const { slidesPerView , slidesPerGroup , centeredSlides , loop: isLoop  } = swiper.params;
        const { addSlidesBefore , addSlidesAfter  } = swiper.params.virtual;
        const { from: previousFrom , to: previousTo , slides , slidesGrid: previousSlidesGrid , offset: previousOffset  } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = "right";
        else offsetProp = swiper.isHorizontal() ? "left" : "top";
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
        }
        let from = activeIndex - slidesBefore;
        let to = activeIndex + slidesAfter;
        if (!isLoop) {
            from = Math.max(from, 0);
            to = Math.min(to, slides.length - 1);
        }
        let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        if (isLoop && activeIndex >= slidesBefore) {
            from -= slidesBefore;
            if (!centeredSlides) offset += swiper.slidesGrid[0];
        } else if (isLoop && activeIndex < slidesBefore) {
            from = -slidesBefore;
            if (centeredSlides) offset += swiper.slidesGrid[0];
        }
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid,
            slidesBefore,
            slidesAfter
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            emit("virtualUpdate");
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.forEach((slideEl)=>{
                slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
            });
            swiper.updateProgress();
            emit("virtualUpdate");
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            else emit("virtualUpdate");
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        const getSlideIndex = (index)=>{
            let slideIndex = index;
            if (index < 0) slideIndex = slides.length + index;
            else if (slideIndex >= slides.length) // eslint-disable-next-line
            slideIndex = slideIndex - slides.length;
            return slideIndex;
        };
        if (force) swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}, swiper-slide`).forEach((slideEl)=>{
            slideEl.remove();
        });
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) {
                const slideIndex = getSlideIndex(i);
                swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`).forEach((slideEl)=>{
                    slideEl.remove();
                });
            }
        }
        const loopFrom = isLoop ? -slides.length : 0;
        const loopTo = isLoop ? slides.length * 2 : slides.length;
        for(let i = loopFrom; i < loopTo; i += 1)if (i >= from && i <= to) {
            const slideIndex = getSlideIndex(i);
            if (typeof previousTo === "undefined" || force) appendIndexes.push(slideIndex);
            else {
                if (i > previousTo) appendIndexes.push(slideIndex);
                if (i < previousFrom) prependIndexes.push(slideIndex);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.slidesEl.append(renderSlide(slides[index], index));
        });
        if (isLoop) for(let i = prependIndexes.length - 1; i >= 0; i -= 1){
            const index = prependIndexes[i];
            swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
        else {
            prependIndexes.sort((a, b)=>b - a);
            prependIndexes.forEach((index)=>{
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            });
        }
        (0, _utilsJs.elementChildren)(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl)=>{
            slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === "object" && "length" in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex)=>{
                const cachedEl = cache[cachedIndex];
                const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
                if (cachedElIndex) cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {};
        update(true);
        swiper.slideTo(0, 0);
    }
    on("beforeInit", ()=>{
        if (!swiper.params.virtual.enabled) return;
        let domSlidesAssigned;
        if (typeof swiper.passedParams.virtual.slides === "undefined") {
            const slides = [
                ...swiper.slidesEl.children
            ].filter((el)=>el.matches(`.${swiper.params.slideClass}, swiper-slide`));
            if (slides && slides.length) {
                swiper.virtual.slides = [
                    ...slides
                ];
                domSlidesAssigned = true;
                slides.forEach((slideEl, slideIndex)=>{
                    slideEl.setAttribute("data-swiper-slide-index", slideIndex);
                    swiper.virtual.cache[slideIndex] = slideEl;
                    slideEl.remove();
                });
            }
        }
        if (!domSlidesAssigned) swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on("init update resize", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}
exports.default = Virtual;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82wTs":[function(require,module,exports) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Keyboard({ swiper , extendParams , on , emit  }) {
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl  } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40;
        // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false;
            // Check that swiper should be inside of visible area of window
            if ((0, _utilsJs.elementParents)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0, _utilsJs.elementParents)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const el = swiper.el;
            const swiperWidth = el.clientWidth;
            const swiperHeight = el.clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = (0, _utilsJs.elementOffset)(el);
            if (rtl) swiperOffset.left -= el.scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit("keyPress", kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        document.addEventListener("keydown", handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        document.removeEventListener("keydown", handle);
        swiper.keyboard.enabled = false;
    }
    on("init", ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}
exports.default = Keyboard;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dP6Ui":[function(require,module,exports) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Mousewheel({ swiper , extendParams , on , emit  }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = (0, _utilsJs.now)();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ("detail" in e) sY = e.detail;
        if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
        if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
        if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
        // side scrolling on FF with DOMMouseScroll
        if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ("deltaY" in e) pY = e.deltaY;
        if ("deltaX" in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        }
        // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && (0, _utilsJs.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
        // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0, _utilsJs.now)() - lastScrollTime < 60) // Return false as a default
        return true;
        // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit("scroll", newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit("scroll", newEvent.raw);
        }
        // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime();
        // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event1) {
        let e = event1;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        // Ignore event if the target or its parents have the swiper-no-mousewheel class
        if (event1.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        const targetElContainsTarget = targetEl && targetEl.contains(e.target);
        if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta;
        // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
        // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            };
            // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent);
            // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
            // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.loop) swiper.loopFix({
                    direction: newEvent.direction < 0 ? "next" : "prev",
                    byMousewheel: true
                });
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0, _utilsJs.nextTick)(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = (0, _utilsJs.nextTick)(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                }
                // Emit event
                if (!ignoreWheelEvents) emit("scroll", e);
                // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
                // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        targetEl[method]("mouseenter", handleMouseEnter);
        targetEl[method]("mouseleave", handleMouseLeave);
        targetEl[method]("wheel", handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener("wheel", handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events("addEventListener");
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events("removeEventListener");
        swiper.mousewheel.enabled = false;
        return true;
    }
    on("init", ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}
exports.default = Mousewheel;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGdRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Navigation({ swiper , extendParams , on , emit  }) {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    });
    swiper.navigation = {
        nextEl: null,
        prevEl: null
    };
    const makeElementsArray = (el)=>{
        if (!Array.isArray(el)) el = [
            el
        ].filter((e)=>!!e);
        return el;
    };
    function getEl(el) {
        let res;
        if (el && typeof el === "string" && swiper.isElement) {
            res = swiper.el.shadowRoot.querySelector(el);
            if (res) return res;
        }
        if (el) {
            if (typeof el === "string") res = [
                ...document.querySelectorAll(el)
            ];
            if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
        }
        if (el && !res) return el;
        // if (Array.isArray(res) && res.length === 1) res = res[0];
        return res;
    }
    function toggleEl(el, disabled) {
        const params = swiper.params.navigation;
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            if (subEl) {
                subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
            }
        });
    }
    function update() {
        // Update Navigation Buttons
        const { nextEl , prevEl  } = swiper.navigation;
        if (swiper.params.loop) {
            toggleEl(prevEl, false);
            toggleEl(nextEl, false);
            return;
        }
        toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit("navigationPrev");
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit("navigationNext");
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        });
        if (!(params.nextEl || params.prevEl)) return;
        let nextEl = getEl(params.nextEl);
        let prevEl = getEl(params.prevEl);
        Object.assign(swiper.navigation, {
            nextEl,
            prevEl
        });
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const initButton = (el, dir)=>{
            if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
            if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
        };
        nextEl.forEach((el)=>initButton(el, "next"));
        prevEl.forEach((el)=>initButton(el, "prev"));
    }
    function destroy() {
        let { nextEl , prevEl  } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const destroyButton = (el, dir)=>{
            el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
            el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
        };
        nextEl.forEach((el)=>destroyButton(el, "next"));
        prevEl.forEach((el)=>destroyButton(el, "prev"));
    }
    on("init", ()=>{
        if (swiper.params.navigation.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            update();
        }
    });
    on("toEdge fromEdge lock unlock", ()=>{
        update();
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        let { nextEl , prevEl  } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        [
            ...nextEl,
            ...prevEl
        ].filter((el)=>!!el).forEach((el)=>el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass));
    });
    on("click", (_s, e)=>{
        let { nextEl , prevEl  } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit("navigationShow");
            else emit("navigationHide");
            [
                ...nextEl,
                ...prevEl
            ].filter((el)=>!!el).forEach((el)=>el.classList.toggle(swiper.params.navigation.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
        init();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
    });
}
exports.default = Navigation;

},{"../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uqq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = (0, _utilsJs.elementChildren)(swiper.el, `.${checkProps[key]}`)[0];
            if (!element) {
                element = (0, _utilsJs.createElement)("div", checkProps[key]);
                element.className = checkProps[key];
                swiper.el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}
exports.default = createElementIfNotDefined;

},{"./utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40Lys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
var _utilsJs = require("../../shared/utils.js");
function Pagination({ swiper , extendParams , on , emit  }) {
    const pfx = "swiper-pagination";
    extendParams({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number,
            formatFractionTotal: (number)=>number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
        }
    });
    swiper.pagination = {
        el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    const makeElementsArray = (el)=>{
        if (!Array.isArray(el)) el = [
            el
        ].filter((e)=>!!e);
        return el;
    };
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
        const { bulletActiveClass  } = swiper.params.pagination;
        if (!bulletEl) return;
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
            bulletEl.classList.add(`${bulletActiveClass}-${position}`);
            bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
            if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
    }
    function onBulletClick(e) {
        const bulletEl = e.target.closest((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass));
        if (!bulletEl) return;
        e.preventDefault();
        const index = (0, _utilsJs.elementIndex)(bulletEl) * swiper.params.slidesPerGroup;
        if (swiper.params.loop) {
            if (swiper.realIndex === index) return;
            const newSlideIndex = swiper.getSlideIndexByData(index);
            const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
            if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) swiper.loopFix({
                direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
                activeSlideIndex: newSlideIndex,
                slideTo: false
            });
            swiper.slideToLoop(index);
        } else swiper.slideTo(index);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        // Current/Total
        let current;
        let previousIndex;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            previousIndex = swiper.previousRealIndex || 0;
            current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
        } else if (typeof swiper.snapIndex !== "undefined") {
            current = swiper.snapIndex;
            previousIndex = swiper.previousSnapIndex;
        } else {
            previousIndex = swiper.previousIndex || 0;
            current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = (0, _utilsJs.elementOuterSize)(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                el.forEach((subEl)=>{
                    subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                });
                if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                    dynamicBulletIndex += current - (previousIndex || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.forEach((bulletEl)=>{
                const classesToRemove = [
                    ...[
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((suffix)=>`${params.bulletActiveClass}${suffix}`)
                ].map((s)=>typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
                bulletEl.classList.remove(...classesToRemove);
            });
            if (el.length > 1) bullets.forEach((bullet)=>{
                const bulletIndex = (0, _utilsJs.elementIndex)(bullet);
                if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" "));
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                    if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                    if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                }
            });
            else {
                const bullet = bullets[current];
                if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                if (params.dynamicBullets) {
                    const firstDisplayedBullet = bullets[firstIndex];
                    const lastDisplayedBullet = bullets[lastIndex];
                    for(let i = firstIndex; i <= lastIndex; i += 1)if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                    setSideBullets(firstDisplayedBullet, "prev");
                    setSideBullets(lastDisplayedBullet, "next");
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? "right" : "left";
                bullets.forEach((bullet)=>{
                    bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                });
            }
        }
        el.forEach((subEl, subElIndex)=>{
            if (params.type === "fraction") {
                subEl.querySelectorAll((0, _classesToSelectorJsDefault.default)(params.currentClass)).forEach((fractionEl)=>{
                    fractionEl.textContent = params.formatFractionCurrent(current + 1);
                });
                subEl.querySelectorAll((0, _classesToSelectorJsDefault.default)(params.totalClass)).forEach((totalEl)=>{
                    totalEl.textContent = params.formatFractionTotal(total);
                });
            }
            if (params.type === "progressbar") {
                let progressbarDirection;
                if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
                else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === "horizontal") scaleX = scale;
                else scaleY = scale;
                subEl.querySelectorAll((0, _classesToSelectorJsDefault.default)(params.progressbarFillClass)).forEach((progressEl)=>{
                    progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                    progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                });
            }
            if (params.type === "custom" && params.renderCustom) {
                subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                if (subElIndex === 0) emit("paginationRender", subEl);
            } else {
                if (subElIndex === 0) emit("paginationRender", subEl);
                emit("paginationUpdate", subEl);
            }
            if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        });
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        let paginationHTML = "";
        if (params.type === "bullets") {
            let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
        if (params.type === "fraction") {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
        }
        if (params.type === "progressbar") {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
        swiper.pagination.bullets = [];
        el.forEach((subEl)=>{
            if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
            if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll((0, _classesToSelectorJsDefault.default)(params.bulletClass)));
        });
        if (params.type !== "custom") emit("paginationRender", el[0]);
    }
    function init() {
        swiper.params.pagination = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: "swiper-pagination"
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let el;
        if (typeof params.el === "string" && swiper.isElement) el = swiper.el.shadowRoot.querySelector(params.el);
        if (!el && typeof params.el === "string") el = [
            ...document.querySelectorAll(params.el)
        ];
        if (!el) el = params.el;
        if (!el || el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
            el = [
                ...swiper.el.querySelectorAll(params.el)
            ];
            // check if it belongs to another nested Swiper
            if (el.length > 1) el = el.filter((subEl)=>{
                if ((0, _utilsJs.elementParents)(subEl, ".swiper")[0] !== swiper.el) return false;
                return true;
            })[0];
        }
        if (Array.isArray(el) && el.length === 1) el = el[0];
        Object.assign(swiper.pagination, {
            el
        });
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            if (params.type === "bullets" && params.clickable) subEl.classList.add(params.clickableClass);
            subEl.classList.add(params.modifierClass + params.type);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.type === "bullets" && params.dynamicBullets) {
                subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
            }
            if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
            if (params.clickable) subEl.addEventListener("click", onBulletClick);
            if (!swiper.enabled) subEl.classList.add(params.lockClass);
        });
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>{
                subEl.classList.remove(params.hiddenClass);
                subEl.classList.remove(params.modifierClass + params.type);
                subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.clickable) subEl.removeEventListener("click", onBulletClick);
            });
        }
        if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl)=>subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", ()=>{
        if (!swiper.pagination || !swiper.pagination.el) return;
        const params = swiper.params.pagination;
        let { el  } = swiper.pagination;
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on("init", ()=>{
        if (swiper.params.pagination.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            render();
            update();
        }
    });
    on("activeIndexChange", ()=>{
        if (typeof swiper.snapIndex === "undefined") update();
    });
    on("snapIndexChange", ()=>{
        update();
    });
    on("snapGridLengthChange", ()=>{
        render();
        update();
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        let { el  } = swiper.pagination;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
        }
    });
    on("lock unlock", ()=>{
        update();
    });
    on("click", (_s, e)=>{
        const targetEl = e.target;
        let { el  } = swiper.pagination;
        if (!Array.isArray(el)) el = [
            el
        ].filter((element)=>!!element);
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit("paginationShow");
            else emit("paginationHide");
            el.forEach((subEl)=>subEl.classList.toggle(swiper.params.pagination.hiddenClass));
        }
    });
    const enable = ()=>{
        swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
        let { el  } = swiper.pagination;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
        }
        init();
        render();
        update();
    };
    const disable = ()=>{
        swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
        let { el  } = swiper.pagination;
        if (el) {
            el = makeElementsArray(el);
            el.forEach((subEl)=>subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
        }
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
    });
}
exports.default = Pagination;

},{"../../shared/classes-to-selector.js":"227R4","../../shared/create-element-if-not-defined.js":"4uqq0","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"227R4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function classesToSelector(classes = "") {
    return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1") // eslint-disable-line
    .replace(/ /g, ".")}`;
}
exports.default = classesToSelector;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfOsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Scrollbar({ swiper , extendParams , on , emit  }) {
    const document = (0, _ssrWindow.getDocument)();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: `swiper-scrollbar-horizontal`,
            verticalClass: `swiper-scrollbar-vertical`
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar , rtlTranslate: rtl  } = swiper;
        const { dragEl , el  } = scrollbar;
        const params = swiper.params.scrollbar;
        const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
            dragEl.style.width = `${newSize}px`;
        } else {
            dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
            dragEl.style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            el.style.opacity = 1;
            timeout = setTimeout(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = "400ms";
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar  } = swiper;
        const { dragEl , el  } = scrollbar;
        dragEl.style.width = "";
        dragEl.style.height = "";
        trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) dragEl.style.width = `${dragSize}px`;
        else dragEl.style.height = `${dragSize}px`;
        if (divider >= 1) el.style.display = "none";
        else el.style.display = "";
        if (swiper.params.scrollbar.hide) el.style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar , rtlTranslate: rtl  } = swiper;
        const { el  } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - (0, _utilsJs.elementOffset)(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar , wrapperEl  } = swiper;
        const { el , dragEl  } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
        e.preventDefault();
        e.stopPropagation();
        wrapperEl.style.transitionDuration = "100ms";
        dragEl.style.transitionDuration = "100ms";
        setDragPosition(e);
        clearTimeout(dragTimeout);
        el.style.transitionDuration = "0ms";
        if (params.hide) el.style.opacity = 1;
        if (swiper.params.cssMode) swiper.wrapperEl.style["scroll-snap-type"] = "none";
        emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
        const { scrollbar , wrapperEl  } = swiper;
        const { el , dragEl  } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        wrapperEl.style.transitionDuration = "0ms";
        el.style.transitionDuration = "0ms";
        dragEl.style.transitionDuration = "0ms";
        emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar , wrapperEl  } = swiper;
        const { el  } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style["scroll-snap-type"] = "";
            wrapperEl.style.transitionDuration = "";
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = (0, _utilsJs.nextTick)(()=>{
                el.style.opacity = 0;
                el.style.transitionDuration = "400ms";
            }, 1000);
        }
        emit("scrollbarDragEnd", e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar , params  } = swiper;
        const el = scrollbar.el;
        if (!el) return;
        const target = el;
        const activeListener = params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
        target[eventMethod]("pointerdown", onDragStart, activeListener);
        document[eventMethod]("pointermove", onDragMove, activeListener);
        document[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events("on");
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events("off");
    }
    function init() {
        const { scrollbar , el: swiperEl  } = swiper;
        swiper.params.scrollbar = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let el;
        if (typeof params.el === "string" && swiper.isElement) el = swiper.el.shadowRoot.querySelector(params.el);
        if (!el && typeof params.el === "string") el = document.querySelectorAll(params.el);
        else if (!el) el = params.el;
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) el = swiperEl.querySelector(params.el);
        if (el.length > 0) el = el[0];
        el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let dragEl;
        if (el) {
            dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
            if (!dragEl) {
                dragEl = (0, _utilsJs.createElement)("div", swiper.params.scrollbar.dragClass);
                el.append(dragEl);
            }
        }
        Object.assign(scrollbar, {
            el,
            dragEl
        });
        if (params.draggable) enableDraggable();
        if (el) el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        const params = swiper.params.scrollbar;
        const el = swiper.scrollbar.el;
        if (el) el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        disableDraggable();
    }
    on("init", ()=>{
        if (swiper.params.scrollbar.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on("update resize observerUpdate lock unlock", ()=>{
        updateSize();
    });
    on("setTranslate", ()=>{
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        setTransition(duration);
    });
    on("enable disable", ()=>{
        const { el  } = swiper.scrollbar;
        if (el) el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    });
    on("destroy", ()=>{
        destroy();
    });
    const enable = ()=>{
        swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.el) swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
        init();
        updateSize();
        setTranslate();
    };
    const disable = ()=>{
        swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.el) swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
    });
}
exports.default = Scrollbar;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEM3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function Parallax({ swiper , extendParams , on  }) {
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el, progress)=>{
        const { rtl  } = swiper;
        const rtlFactor = rtl ? -1 : 1;
        const p = el.getAttribute("data-swiper-parallax") || "0";
        let x = el.getAttribute("data-swiper-parallax-x");
        let y = el.getAttribute("data-swiper-parallax-y");
        const scale = el.getAttribute("data-swiper-parallax-scale");
        const opacity = el.getAttribute("data-swiper-parallax-opacity");
        const rotate = el.getAttribute("data-swiper-parallax-rotate");
        if (x || y) {
            x = x || "0";
            y = y || "0";
        } else if (swiper.isHorizontal()) {
            x = p;
            y = "0";
        } else {
            y = p;
            x = "0";
        }
        if (x.indexOf("%") >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf("%") >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== "undefined" && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            el.style.opacity = currentOpacity;
        }
        let transform = `translate3d(${x}, ${y}, 0px)`;
        if (typeof scale !== "undefined" && scale !== null) {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            transform += ` scale(${currentScale})`;
        }
        if (rotate && typeof rotate !== "undefined" && rotate !== null) {
            const currentRotate = rotate * progress * -1;
            transform += ` rotate(${currentRotate}deg)`;
        }
        el.style.transform = transform;
    };
    const setTranslate = ()=>{
        const { el , slides , progress , snapGrid  } = swiper;
        (0, _utilsJs.elementChildren)(el, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((subEl)=>{
            setTransform(subEl, progress);
        });
        slides.forEach((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            slideEl.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((subEl)=>{
                setTransform(subEl, slideProgress);
            });
        });
    };
    const setTransition = (duration = swiper.params.speed)=>{
        const { el  } = swiper;
        el.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((parallaxEl)=>{
            let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
        });
    };
    on("beforeInit", ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on("init", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTransition", (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}
exports.default = Parallax;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YHxH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Zoom({ swiper , extendParams , on , emit  }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
        originX: 0,
        originY: 0,
        slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        imageEl: undefined,
        imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.imageEl;
                const slideEl = gesture.slideEl;
                emit("zoomChange", value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches() {
        if (evCache.length < 2) return 1;
        const x1 = evCache[0].pageX;
        const y1 = evCache[0].pageY;
        const x2 = evCache[1].pageX;
        const y2 = evCache[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
    function getScaleOrigin() {
        if (evCache.length < 2) return {
            x: null,
            y: null
        };
        const box = gesture.imageEl.getBoundingClientRect();
        return [
            (evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x) / currentScale,
            (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y) / currentScale
        ];
    }
    function getSlideSelector() {
        return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e) {
        const slideSelector = getSlideSelector();
        if (e.target.matches(slideSelector)) return true;
        if (swiper.slides.filter((slideEl)=>slideEl.contains(e.target)).length > 0) return true;
        return false;
    }
    function eventWithinZoomContainer(e) {
        const selector = `.${swiper.params.zoom.containerClass}`;
        if (e.target.matches(selector)) return true;
        if ([
            ...swiper.el.querySelectorAll(selector)
        ].filter((containerEl)=>containerEl.contains(e.target)).length > 0) return true;
        return false;
    }
    // Events
    function onGestureStart(e) {
        if (e.pointerType === "mouse") evCache.splice(0, evCache.length);
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        evCache.push(e);
        if (evCache.length < 2) return;
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches();
        if (!gesture.slideEl) {
            gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, _utilsJs.elementParents)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
            if (!gesture.imageWrapEl) {
                gesture.imageEl = undefined;
                return;
            }
            gesture.maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
        }
        if (gesture.imageEl) {
            const [originX, originY] = getScaleOrigin();
            gesture.originX = originX;
            gesture.originY = originY;
            gesture.imageEl.style.transitionDuration = "0ms";
        }
        isScaling = true;
    }
    function onGestureChange(e) {
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache[pointerIndex] = e;
        if (evCache.length < 2) return;
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches();
        if (!gesture.imageEl) return;
        zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e) {
        if (!eventWithinSlide(e)) return;
        if (e.pointerType === "mouse" && e.type === "pointerout") return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv)=>cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
        if (!fakeGestureTouched || !fakeGestureMoved) return;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!gesture.imageEl) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale > 1 && gesture.slideEl) gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        else if (zoom.scale <= 1 && gesture.slideEl) gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        if (zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
            gesture.slideEl = undefined;
        }
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.imageEl) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        const event = evCache.length > 0 ? evCache[0] : e;
        image.touchesStart.x = event.pageX;
        image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
        const zoom = swiper.zoom;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !gesture.slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.imageEl.offsetWidth;
            image.height = gesture.imageEl.offsetHeight;
            image.startX = (0, _utilsJs.getTranslate)(gesture.imageWrapEl, "x") || 0;
            image.startY = (0, _utilsJs.getTranslate)(gesture.imageWrapEl, "y") || 0;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            gesture.imageWrapEl.style.transitionDuration = "0ms";
        }
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
        image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
        const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
        if (touchesDiff > 5) swiper.allowClick = false;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
        const { originX , originY  } = gesture;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY;
        // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY;
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
            if (gesture.imageEl) gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
            if (gesture.imageWrapEl) gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
            gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
            zoom.scale = 1;
            currentScale = 1;
            gesture.slideEl = undefined;
            gesture.imageEl = undefined;
            gesture.imageWrapEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (e && e.target) gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = (0, _utilsJs.elementChildren)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                else gesture.slideEl = swiper.slides[swiper.activeIndex];
            }
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, _utilsJs.elementParents)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.touchAction = "none";
        }
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === "undefined" && e) {
            touchX = e.pageX;
            touchY = e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        const forceZoomRatio = typeof e === "number" ? e : null;
        if (currentScale === 1 && forceZoomRatio) {
            touchX = undefined;
            touchY = undefined;
        }
        zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
        currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
        if (e && !(currentScale === 1 && forceZoomRatio)) {
            slideWidth = gesture.slideEl.offsetWidth;
            slideHeight = gesture.slideEl.offsetHeight;
            offsetX = (0, _utilsJs.elementOffset)(gesture.slideEl).left + window.scrollX;
            offsetY = (0, _utilsJs.elementOffset)(gesture.slideEl).top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.imageEl.offsetWidth;
            imageHeight = gesture.imageEl.offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        if (forceZoomRatio && zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
        }
        gesture.imageWrapEl.style.transitionDuration = "300ms";
        gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
        gesture.imageEl.style.transitionDuration = "300ms";
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.slideEl = (0, _utilsJs.elementChildren)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
            else gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
            if (imageEl) imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
            gesture.imageEl = imageEl;
            if (imageEl) gesture.imageWrapEl = (0, _utilsJs.elementParents)(gesture.imageEl, `.${params.containerClass}`)[0];
            else gesture.imageWrapEl = undefined;
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "";
            swiper.wrapperEl.style.touchAction = "";
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.imageWrapEl.style.transitionDuration = "300ms";
        gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
        gesture.imageEl.style.transitionDuration = "300ms";
        gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        gesture.slideEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
    }
    // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const passiveListener = swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = swiper.params.passiveListeners ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        // Scale image
        swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
        swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
        [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((eventName)=>{
            swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.addEventListener("pointermove", onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        zoom.enabled = false;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        // Scale image
        swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
        swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
        [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((eventName)=>{
            swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.removeEventListener("pointermove", onTouchMove, activeListenerWithCapture);
    }
    on("init", ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on("destroy", ()=>{
        disable();
    });
    on("touchStart", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on("touchEnd", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd(e);
    });
    on("doubleTap", (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on("transitionEnd", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on("slideChange", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}
exports.default = Zoom;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcdrq":[function(require,module,exports) {
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function Controller({ swiper , extendParams , on  }) {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: "slide" // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
        // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0;
            // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1;
            // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    }
    function getInterpolateFunction(c) {
        swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            if (c.destroyed) return;
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === "slide") {
                getInterpolateFunction(c);
                // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === "container") {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) multiplier = 1;
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            if (c.destroyed) return;
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) (0, _utilsJs.nextTick)(()=>{
                    c.updateAutoHeight();
                });
                (0, _utilsJs.elementTransitionEnd)(c.wrapperEl, ()=>{
                    if (!controlled) return;
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on("beforeInit", ()=>{
        if (typeof window !== "undefined" && // eslint-disable-line
        (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
            const controlElement = document.querySelector(swiper.params.controller.control);
            if (controlElement && controlElement.swiper) swiper.controller.control = controlElement.swiper;
            else if (controlElement) {
                const onControllerSwiper = (e)=>{
                    swiper.controller.control = e.detail[0];
                    swiper.update();
                    controlElement.removeEventListener("init", onControllerSwiper);
                };
                controlElement.addEventListener("init", onControllerSwiper);
            }
            return;
        }
        swiper.controller.control = swiper.params.controller.control;
    });
    on("update", ()=>{
        removeSpline();
    });
    on("resize", ()=>{
        removeSpline();
    });
    on("observerUpdate", ()=>{
        removeSpline();
    });
    on("setTranslate", (_s, translate, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on("setTransition", (_s, duration, byController)=>{
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}
exports.default = Controller;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDTl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _utilsJs = require("../../shared/utils.js");
function A11y({ swiper , extendParams , on  }) {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    });
    swiper.a11y = {
        clicked: false
    };
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.innerHTML = "";
        notification.innerHTML = message;
    }
    const makeElementsArray = (el)=>{
        if (!Array.isArray(el)) el = [
            el
        ].filter((e)=>!!e);
        return el;
    };
    function getRandomNumber(size = 16) {
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
        return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("tabIndex", "0");
        });
    }
    function makeElNotFocusable(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("tabIndex", "-1");
        });
    }
    function addElRole(el, role) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("role", role);
        });
    }
    function addElRoleDescription(el, description) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-roledescription", description);
        });
    }
    function addElControls(el, controls) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-controls", controls);
        });
    }
    function addElLabel(el, label) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-label", label);
        });
    }
    function addElId(el, id) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("id", id);
        });
    }
    function addElLive(el, live) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-live", live);
        });
    }
    function disableEl(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-disabled", true);
        });
    }
    function enableEl(el) {
        el = makeElementsArray(el);
        el.forEach((subEl)=>{
            subEl.setAttribute("aria-disabled", false);
        });
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const targetEl = e.target;
        if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
            if (!e.target.matches((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass))) return;
        }
        if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && targetEl.matches((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass))) targetEl.click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { nextEl , prevEl  } = swiper.navigation;
        if (prevEl) {
            if (swiper.isBeginning) {
                disableEl(prevEl);
                makeElNotFocusable(prevEl);
            } else {
                enableEl(prevEl);
                makeElFocusable(prevEl);
            }
        }
        if (nextEl) {
            if (swiper.isEnd) {
                disableEl(nextEl);
                makeElNotFocusable(nextEl);
            } else {
                enableEl(nextEl);
                makeElFocusable(nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.forEach((bulletEl)=>{
            if (swiper.params.pagination.clickable) {
                makeElFocusable(bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole(bulletEl, "button");
                    addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0, _utilsJs.elementIndex)(bulletEl) + 1));
                }
            }
            if (bulletEl.matches((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute("aria-current", "true");
            else bulletEl.removeAttribute("aria-current");
        });
    }
    const initNavEl = (el, wrapperId, message)=>{
        makeElFocusable(el);
        if (el.tagName !== "BUTTON") {
            addElRole(el, "button");
            el.addEventListener("keydown", onEnterOrSpaceKey);
        }
        addElLabel(el, message);
        addElControls(el, wrapperId);
    };
    const handlePointerDown = ()=>{
        swiper.a11y.clicked = true;
    };
    const handlePointerUp = ()=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                if (!swiper.destroyed) swiper.a11y.clicked = false;
            });
        });
    };
    const handleFocus = (e)=>{
        if (swiper.a11y.clicked) return;
        const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
        if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
        else swiper.el.scrollTop = 0;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = ()=>{
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
        if (params.slideRole) addElRole(swiper.slides, params.slideRole);
        const slidesLength = swiper.slides.length;
        if (params.slideLabelMessage) swiper.slides.forEach((slideEl, index)=>{
            const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel(slideEl, ariaLabelMessage);
        });
    };
    const init = ()=>{
        const params = swiper.params.a11y;
        if (swiper.isElement) swiper.el.shadowEl.append(liveRegion);
        else swiper.el.append(liveRegion);
        // Container
        const containerEl = swiper.el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
        // Wrapper
        const wrapperEl = swiper.wrapperEl;
        const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
        addElId(wrapperEl, wrapperId);
        addElLive(wrapperEl, live);
        // Slide
        initSlides();
        // Navigation
        let { nextEl , prevEl  } = swiper.navigation ? swiper.navigation : {};
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        if (nextEl) nextEl.forEach((el)=>initNavEl(el, wrapperId, params.nextSlideMessage));
        if (prevEl) prevEl.forEach((el)=>initNavEl(el, wrapperId, params.prevSlideMessage));
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [
                swiper.pagination.el
            ];
            paginationEl.forEach((el)=>{
                el.addEventListener("keydown", onEnterOrSpaceKey);
            });
        }
        // Tab focus
        swiper.el.addEventListener("focus", handleFocus, true);
        swiper.el.addEventListener("pointerdown", handlePointerDown, true);
        swiper.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy() {
        if (liveRegion) liveRegion.remove();
        let { nextEl , prevEl  } = swiper.navigation ? swiper.navigation : {};
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        if (nextEl) nextEl.forEach((el)=>el.removeEventListener("keydown", onEnterOrSpaceKey));
        if (prevEl) prevEl.forEach((el)=>el.removeEventListener("keydown", onEnterOrSpaceKey));
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [
                swiper.pagination.el
            ];
            paginationEl.forEach((el)=>{
                el.removeEventListener("keydown", onEnterOrSpaceKey);
            });
        }
        // Tab focus
        swiper.el.removeEventListener("focus", handleFocus, true);
        swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
        swiper.el.removeEventListener("pointerup", handlePointerUp, true);
    }
    on("beforeInit", ()=>{
        liveRegion = (0, _utilsJs.createElement)("span", swiper.params.a11y.notificationClass);
        liveRegion.setAttribute("aria-live", "assertive");
        liveRegion.setAttribute("aria-atomic", "true");
    });
    on("afterInit", ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
        if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
    on("fromEdge toEdge afterInit lock unlock", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on("paginationUpdate", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on("destroy", ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}
exports.default = A11y;

},{"../../shared/classes-to-selector.js":"227R4","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pifE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function History({ swiper , extendParams , on  }) {
    extendParams({
        history: {
            enabled: false,
            root: "",
            replaceState: false,
            key: "slides",
            keepQuery: false
        }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride)=>{
        const window = (0, _ssrWindow.getWindow)();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split("/").filter((part)=>part !== "");
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides[index];
        let value = slugify(slide.getAttribute("data-history"));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
            value = `${root}/${key ? `${key}/` : ""}${value}`;
        } else if (!location.pathname.includes(key)) value = `${key ? `${key}/` : ""}${value}`;
        if (swiper.params.history.keepQuery) value += location.search;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides[i];
            const slideHistory = slugify(slide.getAttribute("data-history"));
            if (slideHistory === value) {
                const index = swiper.getSlideIndex(slide);
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) {
            if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
            return;
        }
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
    };
    const destroy = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history.replaceState) window.removeEventListener("popstate", setHistoryPopState);
    };
    on("init", ()=>{
        if (swiper.params.history.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}
exports.default = History;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TTnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function HashNavigation({ swiper , extendParams , emit , on  }) {
    let initialized = false;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false,
            getSlideIndex (_s, hash) {
                if (swiper.virtual && swiper.params.virtual.enabled) {
                    const slideWithHash = swiper.slides.filter((slideEl)=>slideEl.getAttribute("data-hash") === hash)[0];
                    if (!slideWithHash) return 0;
                    const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
                    return index;
                }
                return swiper.getSlideIndex((0, _utilsJs.elementChildren)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
            }
        }
    });
    const onHashChange = ()=>{
        emit("hashChange");
        const newHash = document.location.hash.replace("#", "");
        const activeSlideEl = swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`);
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
            if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        const activeSlideEl = swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`);
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${activeSlideHash}` || "");
            emit("hashSet");
        } else {
            document.location.hash = activeSlideHash || "";
            emit("hashSet");
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace("#", "");
        if (hash) {
            const speed = 0;
            const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
            swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
        }
        if (swiper.params.hashNavigation.watchState) window.addEventListener("hashchange", onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) window.removeEventListener("hashchange", onHashChange);
    };
    on("init", ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHash();
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}
exports.default = HashNavigation;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YoHq":[function(require,module,exports) {
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function Autoplay({ swiper , extendParams , on , emit , params  }) {
    swiper.autoplay = {
        running: false,
        paused: false,
        timeLeft: 0
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
    let autoplayTimeLeft;
    let autoplayStartTime = new Date().getTime;
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
        if (e.target !== swiper.wrapperEl) return;
        swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
        resume();
    }
    const calcTimeLeft = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.autoplay.paused) wasPaused = true;
        else if (wasPaused) {
            autoplayDelayCurrent = autoplayTimeLeft;
            wasPaused = false;
        }
        const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
        swiper.autoplay.timeLeft = timeLeft;
        emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
        raf = requestAnimationFrame(()=>{
            calcTimeLeft();
        });
    };
    const getSlideDelay = ()=>{
        let activeSlideEl;
        if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl)=>slideEl.classList.contains("swiper-slide-active"))[0];
        else activeSlideEl = swiper.slides[swiper.activeIndex];
        if (!activeSlideEl) return undefined;
        const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
        return currentSlideDelay;
    };
    const run = (delayForce)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        cancelAnimationFrame(raf);
        calcTimeLeft();
        let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
        autoplayDelayTotal = swiper.params.autoplay.delay;
        autoplayDelayCurrent = swiper.params.autoplay.delay;
        const currentSlideDelay = getSlideDelay();
        if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
            delay = currentSlideDelay;
            autoplayDelayTotal = currentSlideDelay;
            autoplayDelayCurrent = currentSlideDelay;
        }
        autoplayTimeLeft = delay;
        const speed = swiper.params.speed;
        const proceed = ()=>{
            if (!swiper || swiper.destroyed) return;
            if (swiper.params.autoplay.reverseDirection) {
                if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                    swiper.slidePrev(speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                    emit("autoplay");
                }
            } else {
                if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                    swiper.slideNext(speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, speed, true, true);
                    emit("autoplay");
                }
            }
            if (swiper.params.cssMode) {
                autoplayStartTime = new Date().getTime();
                requestAnimationFrame(()=>{
                    run();
                });
            }
        };
        if (delay > 0) {
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                proceed();
            }, delay);
        } else requestAnimationFrame(()=>{
            proceed();
        });
        // eslint-disable-next-line
        return delay;
    };
    const start = ()=>{
        swiper.autoplay.running = true;
        run();
        emit("autoplayStart");
    };
    const stop = ()=>{
        swiper.autoplay.running = false;
        clearTimeout(timeout);
        cancelAnimationFrame(raf);
        emit("autoplayStop");
    };
    const pause = (internal, reset)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        clearTimeout(timeout);
        if (!internal) pausedByInteraction = true;
        const proceed = ()=>{
            emit("autoplayPause");
            if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
            else resume();
        };
        swiper.autoplay.paused = true;
        if (reset) {
            if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
            slideChanged = false;
            proceed();
            return;
        }
        const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
        autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
        if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
        proceed();
    };
    const resume = ()=>{
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
        autoplayStartTime = new Date().getTime();
        if (pausedByInteraction) {
            pausedByInteraction = false;
            run(autoplayTimeLeft);
        } else run();
        swiper.autoplay.paused = false;
        emit("autoplayResume");
    };
    const onVisibilityChange = ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        const document = (0, _ssrWindow.getDocument)();
        if (document.visibilityState === "hidden") {
            pausedByInteraction = true;
            pause(true);
        }
        if (document.visibilityState === "visible") resume();
    };
    const onPointerEnter = (e)=>{
        if (e.pointerType !== "mouse") return;
        pausedByInteraction = true;
        pause(true);
    };
    const onPointerLeave = (e)=>{
        if (e.pointerType !== "mouse") return;
        if (swiper.autoplay.paused) resume();
    };
    const attachMouseEvents = ()=>{
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.el.addEventListener("pointerenter", onPointerEnter);
            swiper.el.addEventListener("pointerleave", onPointerLeave);
        }
    };
    const detachMouseEvents = ()=>{
        swiper.el.removeEventListener("pointerenter", onPointerEnter);
        swiper.el.removeEventListener("pointerleave", onPointerLeave);
    };
    const attachDocumentEvents = ()=>{
        const document = (0, _ssrWindow.getDocument)();
        document.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = ()=>{
        const document = (0, _ssrWindow.getDocument)();
        document.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", ()=>{
        if (swiper.params.autoplay.enabled) {
            attachMouseEvents();
            attachDocumentEvents();
            autoplayStartTime = new Date().getTime();
            start();
        }
    });
    on("destroy", ()=>{
        detachMouseEvents();
        detachDocumentEvents();
        if (swiper.autoplay.running) stop();
    });
    on("beforeTransitionStart", (_s, speed, internal)=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true);
        else stop();
    });
    on("sliderFirstMove", ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.params.autoplay.disableOnInteraction) {
            stop();
            return;
        }
        isTouched = true;
        pausedByTouch = false;
        pausedByInteraction = false;
        touchStartTimeout = setTimeout(()=>{
            pausedByInteraction = true;
            pausedByTouch = true;
            pause(true);
        }, 200);
    });
    on("touchEnd", ()=>{
        if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
        clearTimeout(touchStartTimeout);
        clearTimeout(timeout);
        if (swiper.params.autoplay.disableOnInteraction) {
            pausedByTouch = false;
            isTouched = false;
            return;
        }
        if (pausedByTouch && swiper.params.cssMode) resume();
        pausedByTouch = false;
        isTouched = false;
    });
    on("slideChange", ()=>{
        if (swiper.destroyed || !swiper.autoplay.running) return;
        slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
        start,
        stop,
        pause,
        resume
    });
}
exports.default = Autoplay;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0dJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Thumb({ swiper , extendParams , on  }) {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) swiper.slideToLoop(slideToIndex);
        else swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams  } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper.update();
        } else if ((0, _utilsJs.isObject)(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on("tap", onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.forEach((slideEl)=>slideEl.classList.remove(thumbActiveClass));
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)(0, _utilsJs.elementChildren)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl)=>{
            slideEl.classList.add(thumbActiveClass);
        });
        else {
            for(let i = 0; i < thumbsToActivate; i += 1)if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            const currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                const newThumbsSlide = thumbsSwiper.slides.filter((slideEl)=>slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`)[0];
                newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
            }
            if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        }
    }
    on("beforeInit", ()=>{
        const { thumbs  } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
            const document = (0, _ssrWindow.getDocument)();
            const getThumbsElementAndInit = ()=>{
                const thumbsElement = typeof thumbs.swiper === "string" ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                if (thumbsElement && thumbsElement.swiper) {
                    thumbs.swiper = thumbsElement.swiper;
                    init();
                    update(true);
                } else if (thumbsElement) {
                    const onThumbsSwiper = (e)=>{
                        thumbs.swiper = e.detail[0];
                        thumbsElement.removeEventListener("init", onThumbsSwiper);
                        init();
                        update(true);
                        thumbs.swiper.update();
                        swiper.update();
                    };
                    thumbsElement.addEventListener("init", onThumbsSwiper);
                }
                return thumbsElement;
            };
            const watchForThumbsToAppear = ()=>{
                if (swiper.destroyed) return;
                const thumbsElement = getThumbsElementAndInit();
                if (!thumbsElement) requestAnimationFrame(watchForThumbsToAppear);
            };
            requestAnimationFrame(watchForThumbsToAppear);
        } else {
            init();
            update(true);
        }
    });
    on("slideChange update resize observerUpdate", ()=>{
        update();
    });
    on("setTransition", (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
    on("beforeDestroy", ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}
exports.default = Thumb;

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4NFQW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../../shared/utils.js");
function freeMode({ swiper , extendParams , emit , once  }) {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        const { touchEventsData: data , touches  } = swiper;
        // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? "startX" : "startY"],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
            time: (0, _utilsJs.now)()
        });
    }
    function onTouchEnd({ currentPos  }) {
        const { params , wrapperEl , rtlTranslate: rtl , snapGrid , touchEventsData: data  } = swiper;
        // Time diff
        const touchEndTime = (0, _utilsJs.now)();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0, _utilsJs.now)() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once("transitionEnd", ()=>{
                swiper.loopFix();
            });
            // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                (0, _utilsJs.elementTransitionEnd)(wrapperEl, ()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit("momentumBounce");
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        (0, _utilsJs.elementTransitionEnd)(wrapperEl, ()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit("_freeModeNoMomentumRelease");
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    (0, _utilsJs.elementTransitionEnd)(wrapperEl, ()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit("_freeModeNoMomentumRelease");
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    });
}
exports.default = freeMode;

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gE5KG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Grid({ swiper , extendParams  }) {
    extendParams({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const getSpaceBetween = ()=>{
        let spaceBetween = swiper.params.spaceBetween;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
        else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
        return spaceBetween;
    };
    const initSlides = (slidesLength)=>{
        const { slidesPerView  } = swiper.params;
        const { rows , fill  } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== "auto" && fill === "row") slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup  } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows , fill  } = swiper.params.grid;
        // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === "row" && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.style.order = newSlideOrderIndex;
        } else if (fill === "column") {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.style[getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { centeredSlides , roundLengths  } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows  } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
        if (centeredSlides) {
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.splice(0, snapGrid.length);
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}
exports.default = Grid;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ga5Sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appendSlideJs = require("./methods/appendSlide.js");
var _appendSlideJsDefault = parcelHelpers.interopDefault(_appendSlideJs);
var _prependSlideJs = require("./methods/prependSlide.js");
var _prependSlideJsDefault = parcelHelpers.interopDefault(_prependSlideJs);
var _addSlideJs = require("./methods/addSlide.js");
var _addSlideJsDefault = parcelHelpers.interopDefault(_addSlideJs);
var _removeSlideJs = require("./methods/removeSlide.js");
var _removeSlideJsDefault = parcelHelpers.interopDefault(_removeSlideJs);
var _removeAllSlidesJs = require("./methods/removeAllSlides.js");
var _removeAllSlidesJsDefault = parcelHelpers.interopDefault(_removeAllSlidesJs);
function Manipulation({ swiper  }) {
    Object.assign(swiper, {
        appendSlide: (0, _appendSlideJsDefault.default).bind(swiper),
        prependSlide: (0, _prependSlideJsDefault.default).bind(swiper),
        addSlide: (0, _addSlideJsDefault.default).bind(swiper),
        removeSlide: (0, _removeSlideJsDefault.default).bind(swiper),
        removeAllSlides: (0, _removeAllSlidesJsDefault.default).bind(swiper)
    });
}
exports.default = Manipulation;

},{"./methods/appendSlide.js":"69bun","./methods/prependSlide.js":"djuuM","./methods/addSlide.js":"4opfk","./methods/removeSlide.js":"8WI06","./methods/removeAllSlides.js":"7pufd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69bun":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function appendSlide(slides) {
    const swiper = this;
    const { params , slidesEl  } = swiper;
    if (params.loop) swiper.loopDestroy();
    const appendElement = (slideEl)=>{
        if (typeof slideEl === "string") {
            const tempDOM = document.createElement("div");
            tempDOM.innerHTML = slideEl;
            slidesEl.append(tempDOM.children[0]);
            tempDOM.innerHTML = "";
        } else slidesEl.append(slideEl);
    };
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) appendElement(slides[i]);
    } else appendElement(slides);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
}
exports.default = appendSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djuuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prependSlide(slides) {
    const swiper = this;
    const { params , activeIndex , slidesEl  } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl)=>{
        if (typeof slideEl === "string") {
            const tempDOM = document.createElement("div");
            tempDOM.innerHTML = slideEl;
            slidesEl.prepend(tempDOM.children[0]);
            tempDOM.innerHTML = "";
        } else slidesEl.prepend(slideEl);
    };
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) prependElement(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else prependElement(slides);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = prependSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4opfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addSlide(index, slides) {
    const swiper = this;
    const { params , activeIndex , slidesEl  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides[i];
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) slidesEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else slidesEl.append(slides);
    for(let i = 0; i < slidesBuffer.length; i += 1)slidesEl.append(slidesBuffer[i]);
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = addSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WI06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params , activeIndex  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) swiper.loopCreate();
    if (!params.observer || swiper.isElement) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = removeSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pufd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}
exports.default = removeAllSlides;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBGpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
var _utilsJs = require("../../shared/utils.js");
function EffectFade({ swiper , extendParams , on  }) {
    extendParams({
        fadeEffect: {
            crossFade: false
        }
    });
    const setTranslate = ()=>{
        const { slides  } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = swiper.slides[i];
            const offset = slideEl.swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
            const targetEl = (0, _effectTargetJsDefault.default)(params, slideEl);
            targetEl.style.opacity = slideOpacity;
            targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsJs.getSlideTransformEl)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
        });
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformElements,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "fade",
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectFade;

},{"../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DnvG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function effectInit(params) {
    const { effect , swiper , on , setTranslate , setTransition , overwriteParams , perspective , recreateShadows , getEffectParams  } = params;
    on("beforeInit", ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    on("transitionEnd", ()=>{
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return;
            // remove shadows
            swiper.slides.forEach((slideEl)=>{
                slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl)=>shadowEl.remove());
            });
            // create new one
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", ()=>{
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) requireUpdateOnVirtual = true;
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}
exports.default = effectInit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKqS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
function effectTarget(effectParams, slideEl) {
    const transformEl = (0, _utilsJs.getSlideTransformEl)(slideEl);
    if (transformEl !== slideEl) {
        transformEl.style.backfaceVisibility = "hidden";
        transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
}
exports.default = effectTarget;

},{"./utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VhYFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
function effectVirtualTransitionEnd({ swiper , duration , transformElements , allSlides  }) {
    const { activeIndex  } = swiper;
    const getSlide = (el)=>{
        if (!el.parentElement) {
            // assume shadow root
            const slide = swiper.slides.filter((slideEl)=>slideEl.shadowEl && slideEl.shadowEl === el.parentNode)[0];
            return slide;
        }
        return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let transitionEndTarget;
        if (allSlides) transitionEndTarget = transformElements;
        else transitionEndTarget = transformElements.filter((transformEl)=>{
            const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
            return swiper.getSlideIndex(el) === activeIndex;
        });
        transitionEndTarget.forEach((el)=>{
            (0, _utilsJs.elementTransitionEnd)(el, ()=>{
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new window.CustomEvent("transitionend", {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            });
        });
    }
}
exports.default = effectVirtualTransitionEnd;

},{"./utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hV6iY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _utilsJs = require("../../shared/utils.js");
function EffectCube({ swiper , extendParams , on  }) {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal)=>{
        let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBefore) {
            shadowBefore = (0, _utilsJs.createElement)("div", `swiper-slide-shadow-${isHorizontal ? "left" : "top"}`);
            slideEl.append(shadowBefore);
        }
        if (!shadowAfter) {
            shadowAfter = (0, _utilsJs.createElement)("div", `swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`);
            slideEl.append(shadowAfter);
        }
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.forEach((slideEl)=>{
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress, isHorizontal);
        });
    };
    const setTranslate = ()=>{
        const { el , wrapperEl , slides , width: swiperWidth , height: swiperHeight , rtlTranslate: rtl , size: swiperSize , browser  } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                cubeShadowEl = swiper.slidesEl.querySelector(".swiper-cube-shadow");
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, _utilsJs.createElement)("div", "swiper-cube-shadow");
                    swiper.slidesEl.append(cubeShadowEl);
                }
                cubeShadowEl.style.height = `${swiperWidth}px`;
            } else {
                cubeShadowEl = el.querySelector(".swiper-cube-shadow");
                if (!cubeShadowEl) {
                    cubeShadowEl = (0, _utilsJs.createElement)("div", "swiper-cube-shadow");
                    el.append(cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            slideEl.style.transform = transform;
            if (params.slideShadows) createSlideShadows(slideEl, progress, isHorizontal);
        }
        wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
        wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
        if (params.shadow) {
            if (isHorizontal) cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
            }
        }
        const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
        wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
        wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
    };
    const setTransition = (duration)=>{
        const { el , slides  } = swiper;
        slides.forEach((slideEl)=>{
            slideEl.style.transitionDuration = `${duration}ms`;
            slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl)=>{
                subEl.style.transitionDuration = `${duration}ms`;
            });
        });
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
            const shadowEl = el.querySelector(".swiper-cube-shadow");
            if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
        }
    };
    (0, _effectInitJsDefault.default)({
        effect: "cube",
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.cubeEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}
exports.default = EffectCube;

},{"../../shared/effect-init.js":"5DnvG","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dI6Dz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
var _utilsJs = require("../../shared/utils.js");
function EffectFlip({ swiper , extendParams , on  }) {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true
        }
    });
    const createSlideShadows = (slideEl, progress, params)=>{
        let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBefore) shadowBefore = (0, _createShadowJsDefault.default)(params, slideEl, swiper.isHorizontal() ? "left" : "top");
        if (!shadowAfter) shadowAfter = (0, _createShadowJsDefault.default)(params, slideEl, swiper.isHorizontal() ? "right" : "bottom");
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // Set shadows
        const params = swiper.params.flipEffect;
        swiper.slides.forEach((slideEl)=>{
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows(slideEl, progress, params);
        });
    };
    const setTranslate = ()=>{
        const { slides , rtlTranslate: rtl  } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            let progress = slideEl.progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            const offset = slideEl.swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) createSlideShadows(slideEl, progress, params);
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const targetEl = (0, _effectTargetJsDefault.default)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsJs.getSlideTransformEl)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformElements
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "flip",
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.flipEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectFlip;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JYAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
function createShadow(params, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
    const shadowContainer = (0, _utilsJs.getSlideTransformEl)(slideEl);
    let shadowEl = shadowContainer.querySelector(`.${shadowClass}`);
    if (!shadowEl) {
        shadowEl = (0, _utilsJs.createElement)("div", `swiper-slide-shadow${side ? `-${side}` : ""}`);
        shadowContainer.append(shadowEl);
    }
    return shadowEl;
}
exports.default = createShadow;

},{"./utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UFNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _utilsJs = require("../../shared/utils.js");
function EffectCoverflow({ swiper , extendParams , on  }) {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth , height: swiperHeight , slides , slidesSizesGrid  } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const slideEl = slides[i];
            const slideSize = slidesSizesGrid[i];
            const slideOffset = slideEl.swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
            // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch;
            // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
            // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const targetEl = (0, _effectTargetJsDefault.default)(params, slideEl);
            targetEl.style.transform = slideTransform;
            slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
                let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
                if (!shadowBeforeEl) shadowBeforeEl = (0, _createShadowJsDefault.default)(params, slideEl, isHorizontal ? "left" : "top");
                if (!shadowAfterEl) shadowAfterEl = (0, _createShadowJsDefault.default)(params, slideEl, isHorizontal ? "right" : "bottom");
                if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsJs.getSlideTransformEl)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "coverflow",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}
exports.default = EffectCoverflow;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uSvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
var _utilsJs = require("../../shared/utils.js");
function EffectCreative({ swiper , extendParams , on  }) {
    extendParams({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === "string") return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides , wrapperEl , slidesSizesGrid  } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier  } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
            const offset = slideEl.swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            }
            // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            });
            // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(", ");
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
            // Set shadows
            if (custom && data.shadow || !custom) {
                let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
                if (!shadowEl && data.shadow) shadowEl = (0, _createShadowJsDefault.default)(params, slideEl);
                if (shadowEl) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const targetEl = (0, _effectTargetJsDefault.default)(params, slideEl);
            targetEl.style.transform = transform;
            targetEl.style.opacity = opacityString;
            if (data.origin) targetEl.style.transformOrigin = data.origin;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsJs.getSlideTransformEl)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformElements,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "creative",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectCreative;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9saRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
var _utilsJs = require("../../shared/utils.js");
function EffectCards({ swiper , extendParams , on  }) {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    const setTranslate = ()=>{
        const { slides , activeIndex  } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate , isTouched  } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const slideProgress = slideEl.progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = slideEl.swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -params.perSlideRotate * progress;
            let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
                if (!shadowEl) shadowEl = (0, _createShadowJsDefault.default)(params, slideEl);
                if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const targetEl = (0, _effectTargetJsDefault.default)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration)=>{
        const transformElements = swiper.slides.map((slideEl)=>(0, _utilsJs.getSlideTransformEl)(slideEl));
        transformElements.forEach((el)=>{
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl)=>{
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformElements
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "cards",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}
exports.default = EffectCards;

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXKG4":[function() {},{}],"girFM":[function() {},{}],"eFTGe":[function() {},{}],"3LPJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "smoothScrollJS", ()=>smoothScrollJS);
function smoothScrollJS(smoothScroll) {
    const menuItems = document.querySelectorAll('.menu-center a[href^="#"]');
    function getScrollTopByHref(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }
    function scrollToPosition(to) {
        // Caso queira o nativo apenas
        window.scroll({
            top: to,
            behavior: "smooth"
        });
        smoothScrollTo(0, to);
    }
    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.currentTarget) - 80;
        scrollToPosition(to);
    }
    menuItems.forEach((item)=>{
        item.addEventListener("click", scrollToIdOnClick);
    });
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
        duration = typeof duration !== "undefined" ? duration : 400;
        // Easing function
        const easeInOutQuart = (time, from, distance, duration)=>{
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
        const timer = setInterval(()=>{
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) clearInterval(timer);
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRRMd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectors", ()=>selectors);
const selectors = {
    btnMobile: document.getElementById("btn-mobile")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73UNA":[function() {},{}]},["4RBmQ","7SwCM"], "7SwCM", "parcelRequire5738")

//# sourceMappingURL=index.js.map
