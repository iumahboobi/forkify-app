// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
    }
  }
})({"5DuvQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8ad96e854a59a05f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7dWZ8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _modelJs = require("./model.js");
var _iconsSvg = require("url:../img/icons.svg"); // not programming files in parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io
///////////////////////////////////////
//1. Show loader
//2. Show Recipe
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        //update the results view the (left search recipee)
        // update results view to mark seletected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResult());
        (0, _bookmarkViewJsDefault.default).update(_modelJs.state.bookMarks);
        if (!id) return;
        // Render spinner
        (0, _recipeViewJsDefault.default).renderSpinner();
        // Fake delay
        await _modelJs.recipeModel(id);
        //2. Render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (error) {
        (0, _addRecipeViewJsDefault.default).handleError(error.message);
    }
};
//2. Search Controller
const controlSearchResults = async ()=>{
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        //2. Load search Results"
        (0, _resultsViewJsDefault.default).renderSpinner();
        await _modelJs.loadSearchResult(query);
        // 3. Render Results
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResult());
        //4. Render initial Pagination buttons
        //pass the entire search objec
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (error) {
        console.log(error);
    }
};
//3. controller for pagination if any button is clicked
const controlPagination = function(gotoPage) {
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResult(gotoPage));
    //4. Render initial Pagination buttons
    //pass the entire search objec
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
// 4.controller for updating servings
const controlServings = function(newServings) {
    // update the recipe servings (in state)
    _modelJs.updateServings(newServings);
    // update the view
    // recipeView.render(model.state.recipe)
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
//5. Controller for Bookmared Recipe
const controlBookMark = function() {
    // 1. Add/remove bookmark
    if (!_modelJs.state.recipe.bookMarked) _modelJs.addBookMark(_modelJs.state.recipe);
    else _modelJs.deleteBookMark(_modelJs.state.recipe.id);
    // 2. Update recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookMarks);
};
const controlBookmarks = function() {
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookMarks);
};
// Control Add Recipe
const controlAddRecipe = async function(newRecipe) {
    try {
        // Show loading spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        //1. Uploaded recipe
        await _modelJs.uploadRecipe(newRecipe);
        // 2. update bookmark view
        (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookMarks);
        //3. Render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        //4.Display success message
        (0, _addRecipeViewJsDefault.default).handleSuccessMessage();
        //5. close form windo because we cant see the recipeView after sometime
        setTimeout(()=>{
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (error) {
        (0, _addRecipeViewJsDefault.default).handleError(error.message);
    }
};
// 
// publisher subscriber patterns
const init = ()=>{
    (0, _recipeViewJsDefault.default).addHandleRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addBookmarkHandler(controlBookMark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _bookmarkViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
};
init();

},{"./views/recipeView.js":"3wx5k","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./model.js":"3QBkH","url:../img/icons.svg":"fd0vu","./views/searchView.js":"kbE4Z","./views/resultsView.js":"kBQ4r","./views/paginationView.js":"7NIiB","./views/bookmarkView.js":"jPLC7","./views/addRecipeView.js":"8AWnP","./config.js":"2hPh4"}],"3wx5k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // not programming files in parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fracty = require("fracty");
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
var _views = require("./Views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class RecipeView extends (0, _viewsDefault.default) {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'Id not found or not correct id please try again';
    _successMessage = 'Id  found or not correct id please try again';
    addBookmarkHandler(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--increase-servings');
            if (!btn) return;
            const updateTo = btn.dataset.updateTo;
            if (updateTo < 1 || updateTo > 20) return;
            handler(Number(updateTo));
        });
    }
    _formatQuantity(quantity) {
        if (!quantity) return '';
        const formatted = (0, _fractyDefault.default)(quantity).toString();
        // Check if the result is an excessively long fraction (likely a precision error)
        if (formatted.length > 10 && formatted.includes('/')) // Fallback to rounded decimal if fraction is messy
        return Number(quantity).toFixed(2).replace(/\.00$/, '');
        return formatted;
    }
    _generateMarkup() {
        return `
       <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings - 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings + 1}">
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookMarked ? '-fill' : ''} "></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
           ${this._data.ingredients.map((ing)=>`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${this._formatQuantity(ing.quantity)}</div>
            <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `).join('')}
    </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This this #was carefully designed and tested by
            <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
    }
    addHandleRender(handleRecipe) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handleRecipe));
    }
}
exports.default = new RecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","url:../../img/icons.svg":"fd0vu","./Views":"agRZU","fracty":"gsPKI"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"fd0vu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.0809ef97.svg") + "?" + Date.now();

},{}],"agRZU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // not programming files in parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.handleError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // Fix: If the new element has no corresponding current element, we can't update it. 
            // This happens if the node lists are different lengths.
            if (!curEl) return;
            //Update changed Text
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue?.trim() !== '') curEl.textContent = newEl.textContent;
            //Update changed Attributes
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `<div class="spinner">
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
          </svg>
        </div>`;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    // default message
    handleError(message = this._errorMessage) {
        const markup = `<div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    handleSuccessMessage(message = this._successMessage) {
        const markup = `<div class="message">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gsPKI":[function(require,module,exports,__globalThis) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = '-';
    } else type = '';
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 9999999999999999) return `${type}9999999999999999`;
    if (number > 9999999999999999) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < .000001) return '0';
    const numberString = number.toString();
    const entry = numberString.split('.');
    let integer = entry[0];
    let decimal;
    if (decimal == '0' && integer !== '0') return integer;
    else if (decimal == '0' && integer == '0') return '0';
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == '99' && integer !== '0') return `${integer} 99/100`;
    else if (decimal == '99' && integer == '0') return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < .0011) decimal = '999';
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split('').reverse().join(''); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split('').reverse().join('');
        let endPattern = pattern[1].split('').reverse().join('');
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split('');
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == '0') return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"3QBkH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "recipeModel", ()=>recipeModel);
parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult);
parcelHelpers.export(exports, "getSearchResult", ()=>getSearchResult);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookMark", ()=>addBookMark);
parcelHelpers.export(exports, "deleteBookMark", ()=>deleteBookMark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
parcelHelpers.export(exports, "persistCustomRecipe", ()=>persistCustomRecipe);
var _dataJson = require("../data.json");
var _dataJsonDefault = parcelHelpers.interopDefault(_dataJson);
var _configJs = require("./config.js");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: (0, _configJs.PAGE),
        resultsPerPage: (0, _configJs.RESULTS_PER_PAGE)
    },
    bookMarks: [],
    customRecipes: []
};
const createRecipeObject = function(data) {
    return {
        id: data.id,
        title: data.title,
        publisher: data.publisher,
        sourceUrl: data.source_url,
        image: data.image_url,
        ingredients: data.ingredients,
        cookingTime: data.cooking_time,
        servings: data.servings,
        //conditionaly add property in object
        ...data.key && {
            key: data.key
        }
    };
};
const recipeModel = async (id)=>{
    try {
        const res = await fetch(`${(0, _configJs.API_URL)}?id=${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        if (data.status === 'fail') throw new Error(data.message);
        const { recipe } = data.data;
        state.recipe = createRecipeObject(recipe);
        //1. we check if the recipe with sane ud us there so we use some method for this
        if (state.bookMarks.some((bookMark)=>bookMark.id === id)) state.recipe.bookMarked = true;
        else state.recipe.bookMarked = false;
    } catch (error) {
        throw error;
    }
};
const loadSearchResult = async (query)=>{
    try {
        const q = typeof query === 'string' ? query.trim() : '';
        state.search.query = q;
        if (!q) {
            state.search.results = [];
            return state.search.results;
        }
        const res = await fetch(`${(0, _configJs.API_URL)}?search=${q}`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        const { recipes } = data.data;
        state.search.results = recipes.map((rec)=>({
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            }));
        state.search.page = 1;
        return state.search.results;
    } catch (error) {
        throw error;
    }
};
const getSearchResult = (page = state.search.page)=>{
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    });
    state.recipe.servings = newServings;
};
const addBookMark = function(recipe) {
    //1. Add bookmark
    state.bookMarks.push(recipe);
    //2. Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookMarked = true;
    storeBookMarks();
};
const deleteBookMark = function(id) {
    //1. Delete bookmark
    const index = state.bookMarks.findIndex((el)=>el.id === id);
    state.bookMarks.splice(index, 1);
    //2. Mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookMarked = false;
    storeBookMarks();
};
// Stroing bookmark in local storage
const storeBookMarks = function() {
    localStorage.setItem('bookMarks', JSON.stringify(state.bookMarks));
};
// Loading bookmarks from the loacal storage
const init = function() {
    const storage = localStorage.getItem('bookMarks') // might have nothing
    ;
    if (storage) state.bookMarks = JSON.parse(storage);
    // Read custom recipes from the local storage
    const customStorage = localStorage.getItem('customRecipes');
    if (customStorage) state.customRecipes = JSON.parse(customStorage);
    state.customRecipes.forEach((recipe)=>{
        (0, _dataJsonDefault.default).data.recipes.push(recipe);
    });
};
init();
const uploadRecipe = async function(newRecipe) {
    try {
        const ingArr = Object.entries(newRecipe);
        const ingredients = ingArr.filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== '');
        const ingredientsObjArr = ingredients.map((ing)=>{
            const spliting = ing[1].replaceAll(' ', '').split(',');
            if (spliting.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format :)');
            const [quantity, unit, description] = spliting;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            publisher: newRecipe.publisher,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            servings: +newRecipe.servings,
            cooking_time: +newRecipe.cookingTime,
            ingredients: ingredientsObjArr
        };
        const res = await fetch(`${(0, _configJs.API_URL)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        if (data.status === 'fail') throw new Error(data.message);
        // Update state with the new recipe returned from API (which includes the new ID)
        state.recipe = createRecipeObject(data.data.recipe);
        addBookMark(state.recipe);
    // We don't need customRecipes local storage anymore if we are saving to DB!
    // But if you want to keep them separated in UI, we can. 
    // For now, let's treat it as a regular recipe from the DB.
    } catch (error) {
        throw error;
    }
};
const persistCustomRecipe = function() {
    localStorage.setItem('customRecipes', JSON.stringify(state.customRecipes));
};

},{"../data.json":"c8qZ6","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./config.js":"2hPh4"}],"c8qZ6":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("{\"status\":\"success\",\"data\":{\"recipes\":[{\"id\":\"pizza-1\",\"title\":\"Pizza Margherita\",\"publisher\":\"The Pioneer Woman\",\"source_url\":\"http://thepioneerwoman.com/cooking/margherita-pizza/\",\"image_url\":\"https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":5,\"unit\":\"leaves\",\"description\":\"fresh basil\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"olive oil\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"salt & pepper\"}]},{\"id\":\"pizza-2\",\"title\":\"Pepperoni Pizza\",\"publisher\":\"Italian Home Kitchen\",\"source_url\":\"https://example.com/pepperoni-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":25,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"pepperoni\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"olive oil\"}]},{\"id\":\"pizza-3\",\"title\":\"BBQ Chicken Pizza\",\"publisher\":\"BBQ Master\",\"source_url\":\"https://example.com/bbq-chicken-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":2,\"cooking_time\":35,\"ingredients\":[{\"quantity\":1,\"unit\":\"piece\",\"description\":\"pizza crust\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"BBQ sauce\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"grilled chicken\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"red onion\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"cheddar cheese\"}]},{\"id\":\"pizza-4\",\"title\":\"Vegetarian Pizza\",\"publisher\":\"Green Kitchen\",\"source_url\":\"https://example.com/veggie-pizza\",\"image_url\":\"https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":3,\"cooking_time\":28,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.4,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"bell peppers\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"mushrooms\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"olives\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"mozzarella cheese\"}]},{\"id\":\"pasta-1\",\"title\":\"Spaghetti Bolognese\",\"publisher\":\"Italian Classics\",\"source_url\":\"https://example.com/spaghetti-bolognese\",\"image_url\":\"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":40,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"spaghetti pasta\"},{\"quantity\":300,\"unit\":\"g\",\"description\":\"minced beef\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":1,\"unit\":\"\",\"description\":\"onion\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"olive oil\"}]},{\"id\":\"pasta-2\",\"title\":\"Creamy Alfredo Pasta\",\"publisher\":\"Home Kitchen\",\"source_url\":\"https://example.com/alfredo-pasta\",\"image_url\":\"https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":3,\"cooking_time\":25,\"ingredients\":[{\"quantity\":300,\"unit\":\"g\",\"description\":\"fettuccine pasta\"},{\"quantity\":200,\"unit\":\"ml\",\"description\":\"cream\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"parmesan cheese\"},{\"quantity\":2,\"unit\":\"cloves\",\"description\":\"garlic\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"black pepper\"}]},{\"id\":\"pasta-3\",\"title\":\"Vegetarian Pasta Primavera\",\"publisher\":\"Green Kitchen\",\"source_url\":\"https://example.com/pasta-primavera\",\"image_url\":\"https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":2,\"cooking_time\":30,\"ingredients\":[{\"quantity\":250,\"unit\":\"g\",\"description\":\"penne pasta\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"broccoli\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"bell peppers\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"parmesan cheese\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"olive oil\"}]},{\"id\":\"pizza-5\",\"title\":\"Hawaiian Pizza\",\"publisher\":\"Island Eats\",\"source_url\":\"https://example.com/hawaiian-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"ham\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"pineapple\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mozzarella cheese\"}]},{\"id\":\"pizza-6\",\"title\":\"Meat Lovers Pizza\",\"publisher\":\"Carnivore Kitchen\",\"source_url\":\"https://example.com/meat-lovers-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":35,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"pepperoni\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"sausage\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"bacon\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mozzarella cheese\"}]},{\"id\":\"pizza-7\",\"title\":\"Four Cheese Pizza\",\"publisher\":\"Cheesy Delights\",\"source_url\":\"https://example.com/four-cheese-pizza\",\"image_url\":\"https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":25,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"mozzarella\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"parmesan\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"gorgonzola\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"provolone\"}]},{\"id\":\"pizza-8\",\"title\":\"Mushroom Pizza\",\"publisher\":\"Fungi Fun\",\"source_url\":\"https://example.com/mushroom-pizza\",\"image_url\":\"https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":2,\"cooking_time\":20,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"white sauce\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mushrooms\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":1,\"unit\":\"tsp\",\"description\":\"truffle oil\"}]},{\"id\":\"pizza-9\",\"title\":\"Spinach and Feta Pizza\",\"publisher\":\"Greek Kitchen\",\"source_url\":\"https://example.com/spinach-feta-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":3,\"cooking_time\":25,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"fresh spinach\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"feta cheese\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"olives\"}]},{\"id\":\"pizza-11\",\"title\":\"Margherita Pizza with Cherry Tomatoes\",\"publisher\":\"The Pioneer Woman\",\"source_url\":\"http://thepioneerwoman.com/cooking/margherita-pizza/\",\"image_url\":\"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":10,\"unit\":\"leaves\",\"description\":\"fresh basil\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"cherry tomatoes\"}]},{\"id\":\"pizza-12\",\"title\":\"Chicken Alfredo Pizza\",\"publisher\":\"Italian Home Kitchen\",\"source_url\":\"https://example.com/chicken-alfredo-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":35,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"alfredo sauce\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"cooked chicken\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"spinach\"}]},{\"id\":\"pizza-13\",\"title\":\"Prosciutto and Arugula Pizza\",\"publisher\":\"Gourmet Eats\",\"source_url\":\"https://example.com/prosciutto-arugula-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":2,\"cooking_time\":20,\"ingredients\":[{\"quantity\":1,\"unit\":\"piece\",\"description\":\"pizza crust\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"prosciutto\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"arugula\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"parmesan cheese\"}]},{\"id\":\"pizza-14\",\"title\":\"Vegan Pizza\",\"publisher\":\"Vegan Life\",\"source_url\":\"https://example.com/vegan-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fHww\",\"servings\":3,\"cooking_time\":25,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"vegan cheese\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"vegetables\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"oregano\"}]},{\"id\":\"pizza-15\",\"title\":\"Breakfast Pizza\",\"publisher\":\"Morning Delights\",\"source_url\":\"https://example.com/breakfast-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":20,\"ingredients\":[{\"quantity\":1,\"unit\":\"piece\",\"description\":\"pizza crust\"},{\"quantity\":4,\"unit\":\"large\",\"description\":\"eggs\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"bacon\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"cheddar cheese\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"scallions\"}]},{\"id\":\"pizza-16\",\"title\":\"Taco Pizza\",\"publisher\":\"TexMex Kitchen\",\"source_url\":\"https://example.com/taco-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1593560708920-638928155e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"salsa\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"ground beef\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"cheddar cheese\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"lettuce and tomatoes\"}]},{\"id\":\"pizza-17\",\"title\":\"White Pizza\",\"publisher\":\"Italian Classics\",\"source_url\":\"https://example.com/white-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":3,\"cooking_time\":25,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"ricotta cheese\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":2,\"unit\":\"cloves\",\"description\":\"garlic\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"olive oil\"}]},{\"id\":\"pizza-18\",\"title\":\"Pesto Chicken Pizza\",\"publisher\":\"Genovese Cooks\",\"source_url\":\"https://example.com/pesto-chicken-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"basil pesto\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"chicken\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"sun-dried tomatoes\"}]},{\"id\":\"pizza-19\",\"title\":\"Supreme Pizza\",\"publisher\":\"Pizza Hut Style\",\"source_url\":\"https://example.com/supreme-pizza\",\"image_url\":\"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D\",\"servings\":5,\"cooking_time\":40,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"tomato sauce\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"pepperoni\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"sausage\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"peppers\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"onions\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mozzarella cheese\"}]},{\"id\":\"pizza-20\",\"title\":\"Calzone\",\"publisher\":\"Italian Tradition\",\"source_url\":\"https://example.com/calzone\",\"image_url\":\"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fHww\",\"servings\":2,\"cooking_time\":30,\"ingredients\":[{\"quantity\":1,\"unit\":\"kg\",\"description\":\"pizza dough\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"ham\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"ricotta cheese\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"mozzarella cheese\"},{\"quantity\":0.5,\"unit\":\"cup\",\"description\":\"marinara sauce\"}]},{\"id\":\"pasta-10\",\"title\":\"Pasta Alla Norma\",\"publisher\":\"Sicilian Kitchen\",\"source_url\":\"https://example.com/pasta-alla-norma\",\"image_url\":\"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":3,\"cooking_time\":35,\"ingredients\":[{\"quantity\":300,\"unit\":\"g\",\"description\":\"penne\"},{\"quantity\":1,\"unit\":\"large\",\"description\":\"eggplant\"},{\"quantity\":400,\"unit\":\"g\",\"description\":\"tomatoes\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"ricotta salata\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"basil\"}]},{\"id\":\"pasta-11\",\"title\":\"Cacio e Pepe\",\"publisher\":\"Roman Classics\",\"source_url\":\"https://example.com/cacio-e-pepe\",\"image_url\":\"https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":2,\"cooking_time\":20,\"ingredients\":[{\"quantity\":250,\"unit\":\"g\",\"description\":\"spaghetti\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"pecorino romano\"},{\"quantity\":1,\"unit\":\"tsp\",\"description\":\"black pepper\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"pasta water\"}]},{\"id\":\"pasta-12\",\"title\":\"Rigatoni Bolognese\",\"publisher\":\"Bologna Eats\",\"source_url\":\"https://example.com/rigatoni-bolognese\",\"image_url\":\"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":45,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"rigatoni\"},{\"quantity\":300,\"unit\":\"g\",\"description\":\"ground beef\"},{\"quantity\":300,\"unit\":\"g\",\"description\":\"tomato sauce\"},{\"quantity\":1,\"unit\":\"\",\"description\":\"onion\"},{\"quantity\":1,\"unit\":\"\",\"description\":\"carrot\"}]},{\"id\":\"pasta-13\",\"title\":\"Pasta Salad\",\"publisher\":\"Summer Kitchen\",\"source_url\":\"https://example.com/pasta-salad\",\"image_url\":\"https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":6,\"cooking_time\":20,\"ingredients\":[{\"quantity\":500,\"unit\":\"g\",\"description\":\"rotini\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"Italian dressing\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"cherry tomatoes\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"cucumber\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"feta cheese\"}]},{\"id\":\"pasta-14\",\"title\":\"Fettuccine Alfredo with Chicken\",\"publisher\":\"Comfort Classics\",\"source_url\":\"https://example.com/chicken-alfredo\",\"image_url\":\"https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"fettuccine\"},{\"quantity\":300,\"unit\":\"g\",\"description\":\"chicken breast\"},{\"quantity\":200,\"unit\":\"ml\",\"description\":\"heavy cream\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"parmesan cheese\"},{\"quantity\":2,\"unit\":\"cloves\",\"description\":\"garlic\"}]},{\"id\":\"pasta-15\",\"title\":\"Spaghetti Carbonara with Peas\",\"publisher\":\"Modern Italian\",\"source_url\":\"https://example.com/carbonara-peas\",\"image_url\":\"https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":3,\"cooking_time\":25,\"ingredients\":[{\"quantity\":300,\"unit\":\"g\",\"description\":\"spaghetti\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"pancetta\"},{\"quantity\":2,\"unit\":\"large\",\"description\":\"eggs\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"peas\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"parmesan cheese\"}]},{\"id\":\"pasta-16\",\"title\":\"Lemon Garlic Pasta\",\"publisher\":\"Zesty Eats\",\"source_url\":\"https://example.com/lemon-garlic-pasta\",\"image_url\":\"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":2,\"cooking_time\":15,\"ingredients\":[{\"quantity\":250,\"unit\":\"g\",\"description\":\"angel hair pasta\"},{\"quantity\":1,\"unit\":\"large\",\"description\":\"lemon\"},{\"quantity\":3,\"unit\":\"cloves\",\"description\":\"garlic\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"butter\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"parsley\"}]},{\"id\":\"pasta-17\",\"title\":\"Pumpkin Pasta\",\"publisher\":\"Autumn Kitchen\",\"source_url\":\"https://example.com/pumpkin-pasta\",\"image_url\":\"https://images.unsplash.com/photo-1574868309219-ce68df298cad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"penne\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"pumpkin puree\"},{\"quantity\":100,\"unit\":\"ml\",\"description\":\"cream\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"parmesan cheese\"},{\"quantity\":1,\"unit\":\"tsp\",\"description\":\"sage\"}]},{\"id\":\"pasta-18\",\"title\":\"Tuna Pasta Bake\",\"publisher\":\"Family Favorites\",\"source_url\":\"https://example.com/tuna-pasta-bake\",\"image_url\":\"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":5,\"cooking_time\":40,\"ingredients\":[{\"quantity\":500,\"unit\":\"g\",\"description\":\"fusilli\"},{\"quantity\":2,\"unit\":\"cans\",\"description\":\"tuna\"},{\"quantity\":400,\"unit\":\"g\",\"description\":\"tomato sauce\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"sweetcorn\"},{\"quantity\":150,\"unit\":\"g\",\"description\":\"cheddar cheese\"}]},{\"id\":\"pasta-19\",\"title\":\"Mushroom Stroganoff\",\"publisher\":\"Vegetarian Delights\",\"source_url\":\"https://example.com/mushroom-stroganoff\",\"image_url\":\"https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":3,\"cooking_time\":30,\"ingredients\":[{\"quantity\":300,\"unit\":\"g\",\"description\":\"egg noodles\"},{\"quantity\":250,\"unit\":\"g\",\"description\":\"mushrooms\"},{\"quantity\":100,\"unit\":\"ml\",\"description\":\"sour cream\"},{\"quantity\":1,\"unit\":\"\",\"description\":\"onion\"},{\"quantity\":1,\"unit\":\"tsp\",\"description\":\"paprika\"}]},{\"id\":\"pasta-20\",\"title\":\"Chili Mac\",\"publisher\":\"American Classics\",\"source_url\":\"https://example.com/chili-mac\",\"image_url\":\"https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8fHww\",\"servings\":6,\"cooking_time\":35,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"macaroni\"},{\"quantity\":500,\"unit\":\"g\",\"description\":\"ground beef\"},{\"quantity\":400,\"unit\":\"g\",\"description\":\"kidney beans\"},{\"quantity\":400,\"unit\":\"g\",\"description\":\"tomato sauce\"},{\"quantity\":1,\"unit\":\"tbsp\",\"description\":\"chili powder\"}]},{\"id\":\"pasta-21\",\"title\":\"Penne Arrabbiata\",\"publisher\":\"Spicy Italian\",\"source_url\":\"https://example.com/penne-arrabbiata\",\"image_url\":\"https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":25,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"penne pasta\"},{\"quantity\":400,\"unit\":\"g\",\"description\":\"crushed tomatoes\"},{\"quantity\":3,\"unit\":\"cloves\",\"description\":\"garlic\"},{\"quantity\":1,\"unit\":\"tsp\",\"description\":\"red chili flakes\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"parsley\"}]},{\"id\":\"pasta-22\",\"title\":\"Spinach and Ricotta Stuffed Shells\",\"publisher\":\"Comfort Foodie\",\"source_url\":\"https://example.com/stuffed-shells\",\"image_url\":\"https://images.unsplash.com/photo-1627207644006-277564b2c974?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxwYXN0YXxlbnwwfHwwfHx8MA%3D%3D\",\"servings\":4,\"cooking_time\":45,\"ingredients\":[{\"quantity\":12,\"unit\":\"large\",\"description\":\"jumbo pasta shells\"},{\"quantity\":250,\"unit\":\"g\",\"description\":\"ricotta cheese\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"frozen spinach\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"marinara sauce\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"mozzarella cheese\"}]},{\"id\":\"pasta-23\",\"title\":\"Lobster Mac and Cheese\",\"publisher\":\"Gourmet Seafood\",\"source_url\":\"https://example.com/lobster-mac\",\"image_url\":\"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":40,\"ingredients\":[{\"quantity\":300,\"unit\":\"g\",\"description\":\"macaroni\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"lobster meat\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"gruyere cheese\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"cheddar cheese\"},{\"quantity\":200,\"unit\":\"ml\",\"description\":\"cream\"}]},{\"id\":\"pasta-24\",\"title\":\"Orzo Salad\",\"publisher\":\"Mediterranean Kitchen\",\"source_url\":\"https://example.com/orzo-salad\",\"image_url\":\"https://images.unsplash.com/photo-1516685018646-549198525c1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":20,\"ingredients\":[{\"quantity\":250,\"unit\":\"g\",\"description\":\"orzo pasta\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"feta cheese\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"kalamata olives\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"cucumber\"},{\"quantity\":1,\"unit\":\"tbsp\",\"description\":\"lemon juice\"}]},{\"id\":\"pasta-25\",\"title\":\"Spaghetti Aglio e Olio\",\"publisher\":\"Simply Italian\",\"source_url\":\"https://example.com/aglio-e-olio\",\"image_url\":\"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":2,\"cooking_time\":15,\"ingredients\":[{\"quantity\":200,\"unit\":\"g\",\"description\":\"spaghetti\"},{\"quantity\":4,\"unit\":\"cloves\",\"description\":\"garlic\"},{\"quantity\":0.25,\"unit\":\"cup\",\"description\":\"olive oil\"},{\"quantity\":1,\"unit\":\"tsp\",\"description\":\"red pepper flakes\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"parsley\"}]},{\"id\":\"pasta-26\",\"title\":\"Butternut Squash Ravioli\",\"publisher\":\"Autumn Eats\",\"source_url\":\"https://example.com/squash-ravioli\",\"image_url\":\"https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":3,\"cooking_time\":35,\"ingredients\":[{\"quantity\":300,\"unit\":\"g\",\"description\":\"ravioli dough\"},{\"quantity\":300,\"unit\":\"g\",\"description\":\"butternut squash\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"butter\"},{\"quantity\":1,\"unit\":\"tsp\",\"description\":\"sage\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"parmesan cheese\"}]},{\"id\":\"pasta-27\",\"title\":\"Chicken Tetrazzini\",\"publisher\":\"Retro Kitchen\",\"source_url\":\"https://example.com/chicken-tetrazzini\",\"image_url\":\"https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D\",\"servings\":6,\"cooking_time\":50,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"spaghetti\"},{\"quantity\":300,\"unit\":\"g\",\"description\":\"cooked chicken\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mushrooms\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"cream soup\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"cheese\"}]},{\"id\":\"pasta-28\",\"title\":\"Pasta e Fagioli\",\"publisher\":\"Rustic Italian\",\"source_url\":\"https://example.com/pasta-e-fagioli\",\"image_url\":\"https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8fHww\",\"servings\":6,\"cooking_time\":45,\"ingredients\":[{\"quantity\":200,\"unit\":\"g\",\"description\":\"ditalini pasta\"},{\"quantity\":2,\"unit\":\"cans\",\"description\":\"cannellini beans\"},{\"quantity\":1,\"unit\":\"can\",\"description\":\"diced tomatoes\"},{\"quantity\":2,\"unit\":\"stalks\",\"description\":\"celery\"},{\"quantity\":1,\"unit\":\"\",\"description\":\"carrot\"}]},{\"id\":\"pasta-29\",\"title\":\"Gnocchi with Sage Butter\",\"publisher\":\"Simple & Delicious\",\"source_url\":\"https://example.com/gnocchi-sage\",\"image_url\":\"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":2,\"cooking_time\":20,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"gnocchi\"},{\"quantity\":100,\"unit\":\"g\",\"description\":\"butter\"},{\"quantity\":10,\"unit\":\"leaves\",\"description\":\"fresh sage\"},{\"quantity\":50,\"unit\":\"g\",\"description\":\"parmesan cheese\"},{\"quantity\":null,\"unit\":\"\",\"description\":\"black pepper\"}]},{\"id\":\"pasta-30\",\"title\":\"Seafood Linguine\",\"publisher\":\"Ocean Catch\",\"source_url\":\"https://example.com/seafood-linguine\",\"image_url\":\"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3RhfGVufDB8fDB8fHww\",\"servings\":4,\"cooking_time\":30,\"ingredients\":[{\"quantity\":400,\"unit\":\"g\",\"description\":\"linguine\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"shrimp\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"clams\"},{\"quantity\":200,\"unit\":\"g\",\"description\":\"mussels\"},{\"quantity\":1,\"unit\":\"cup\",\"description\":\"white wine\"}]}]}}");

},{}],"2hPh4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE);
parcelHelpers.export(exports, "PAGE", ()=>PAGE);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = 'http://localhost:9090/forkify-api/api.php';
const RESULTS_PER_PAGE = 6;
const PAGE = 1;
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kbE4Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentElement = document.querySelector('.search');
    getQuery() {
        const query = this.#parentElement.querySelector('.search__field').value;
        this.#clearInput();
        if (!query) return;
        return query.trim();
    }
    #clearInput() {
        this.#parentElement.querySelector('.search__field').value = "";
    }
    addHandlerSearch(handler) {
        this.#parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kBQ4r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class ResultsView extends (0, _viewsJsDefault.default) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again ;)';
    _successMessage = '';
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join('');
    }
}
exports.default = new ResultsView();

},{"./Views.js":"agRZU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./previewView.js":"6tKHS"}],"6tKHS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class PreviewView extends (0, _viewsJsDefault.default) {
    _parentElement = '';
    _generateMarkup() {
        //active class of search recipe when mouse out
        const id = window.location.hash.slice(1);
        return `
      <li class="preview">
        <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new PreviewView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./Views.js":"agRZU"}],"7NIiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // not programming files in parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _views = require("./Views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
var _helperJs = require("../helper.js");
class PaginationView extends (0, _viewsDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        //common parent element of buttons
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            handler(+btn.dataset.goto);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        //1. Page 1 and there are other pages
        if (curPage === 1 && numPages > 1) return (0, _helperJs.nextPageBtn)(curPage, numPages);
        //3. Last page
        if (curPage === numPages) return (0, _helperJs.prePageBtn)(curPage);
        //4. Other page eg everything between page 1 and last page
        //4. Other page
        if (curPage < numPages) return `${(0, _helperJs.prePageBtn)(curPage)}${(0, _helperJs.nextPageBtn)(curPage, numPages)}`;
        //2. Page 1 and there are no other pages.
        return '';
    }
}
exports.default = new PaginationView();

},{"url:../../img/icons.svg":"fd0vu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./Views":"agRZU","../helper.js":"b1fwP"}],"b1fwP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextPageBtn", ()=>nextPageBtn);
parcelHelpers.export(exports, "prePageBtn", ()=>prePageBtn);
var _iconsSvg = require("url:../img/icons.svg"); // not programming files in parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const nextPageBtn = function(curPage, numPages) {
    if (curPage === numPages) return '';
    return `<button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>`;
};
const prePageBtn = function(curPage) {
    if (curPage === 1) return '';
    return `<button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>${curPage - 1}</span>
          </button>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","url:../img/icons.svg":"fd0vu"}],"jPLC7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class BookmarkView extends (0, _viewsJsDefault.default) {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
    _successMessage = '';
    _generateMarkup() {
        return this._data.map((bookMark)=>(0, _previewViewJsDefault.default).render(bookMark, false)).join('');
    }
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
}
exports.default = new BookmarkView();

},{"./Views.js":"agRZU","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./previewView.js":"6tKHS"}],"8AWnP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class addRecipeView extends (0, _viewsJsDefault.default) {
    _parentElement = document.querySelector('.upload');
    _successMessage = 'Recipe was successfully uploaded';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    //Since opening/closing the modal is purely UI logic and doesn't need data from the controller, you can just run it immediately when the class is created.
    constructor(){
        super();
        this._initialMarkup = this._parentElement.innerHTML;
        this.addHandlerShowWindow();
        this.addHandlerHideWindow();
    }
    toggleWindow() {
        const isHidden = this._window.classList.contains('hidden');
        // If opening (currently hidden), restore the form
        if (isHidden) this._parentElement.innerHTML = this._initialMarkup;
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }
    addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }
    // form handling method
    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
}
exports.default = new addRecipeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./Views.js":"agRZU"}]},["5DuvQ","7dWZ8"], "7dWZ8", "parcelRequire3a11", {}, "./", "/")

//# sourceMappingURL=18-Forkify_Final_Projekt.4a59a05f.js.map
