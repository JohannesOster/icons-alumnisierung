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
})({"gp8pR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8ZNvh":[function(require,module,exports) {
var _styleCss = require("./style.css");
var _lottiePlayer = require("@lottiefiles/lottie-player");
var _lottieInteractivity = require("@lottiefiles/lottie-interactivity");
window.onload = function() {
    console.log("Dokument geladen");
    console.log(document.querySelector("#preicons"));
    _lottieInteractivity.create({
        mode: "scroll",
        player: "#preicons",
        actions: [
            {
                visibility: [
                    0,
                    0.8
                ],
                type: "loop",
                frames: [
                    0,
                    120
                ]
            }
        ]
    });
    _lottieInteractivity.create({
        mode: "scroll",
        player: "#oskarball",
        actions: [
            {
                visibility: [
                    0,
                    1
                ],
                type: "seek",
                frames: [
                    0,
                    250
                ]
            }
        ]
    });
    _lottieInteractivity.create({
        mode: "scroll",
        player: "#samuelball",
        actions: [
            {
                visibility: [
                    0,
                    1
                ],
                type: "seek",
                frames: [
                    0,
                    200
                ]
            }
        ]
    });
    _lottieInteractivity.create({
        mode: "scroll",
        player: "#questionmark",
        actions: [
            {
                visibility: [
                    0,
                    0.3
                ],
                type: "stop",
                frames: [
                    0
                ]
            },
            {
                visibility: [
                    0.3,
                    0.5
                ],
                type: "seek",
                frames: [
                    0,
                    75
                ]
            }, 
        ]
    });
};

},{"./style.css":"bhJkM","@lottiefiles/lottie-player":"g95UG","@lottiefiles/lottie-interactivity":"l9f7Z"}],"bhJkM":[function() {},{}],"g95UG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LottiePlayer", ()=>LottiePlayer
);
parcelHelpers.export(exports, "PlayMode", ()=>PlayMode
);
parcelHelpers.export(exports, "PlayerEvents", ()=>PlayerEvents
);
parcelHelpers.export(exports, "PlayerState", ()=>PlayerState
);
parcelHelpers.export(exports, "parseSrc", ()=>parseSrc
);
var global = arguments[3];
function _typeof(t1) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t1);
}
var REACT_ELEMENT_TYPE;
function _jsx(t, e, r, i) {
    REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
    var a = t && t.defaultProps, s = arguments.length - 3;
    if (e || 0 === s || (e = {
        children: void 0
    }), 1 === s) e.children = i;
    else if (s > 1) {
        for(var n = new Array(s), o = 0; o < s; o++)n[o] = arguments[o + 3];
        e.children = n;
    }
    if (e && a) for(var h in a)void 0 === e[h] && (e[h] = a[h]);
    else e || (e = a || {
    });
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: t,
        key: void 0 === r ? null : "" + r,
        ref: null,
        props: e,
        _owner: null
    };
}
function _asyncIterator(t) {
    var e;
    if ("undefined" != typeof Symbol) {
        if (Symbol.asyncIterator && null != (e = t[Symbol.asyncIterator])) return e.call(t);
        if (Symbol.iterator && null != (e = t[Symbol.iterator])) return e.call(t);
    }
    throw new TypeError("Object is not async iterable");
}
function _AwaitValue(t) {
    this.wrapped = t;
}
function _AsyncGenerator(t2) {
    var e1, r1;
    function i(e, r) {
        try {
            var s = t2[e](r), n = s.value, o = n instanceof _AwaitValue;
            Promise.resolve(o ? n.wrapped : n).then(function(t) {
                o ? i("return" === e ? "return" : "next", t) : a1(s.done ? "return" : "normal", t);
            }, function(t) {
                i("throw", t);
            });
        } catch (t) {
            a1("throw", t);
        }
    }
    function a1(t, a) {
        switch(t){
            case "return":
                e1.resolve({
                    value: a,
                    done: !0
                });
                break;
            case "throw":
                e1.reject(a);
                break;
            default:
                e1.resolve({
                    value: a,
                    done: !1
                });
        }
        (e1 = e1.next) ? i(e1.key, e1.arg) : r1 = null;
    }
    this._invoke = function(t, a) {
        return new Promise(function(s, n) {
            var o = {
                key: t,
                arg: a,
                resolve: s,
                reject: n,
                next: null
            };
            r1 ? r1 = r1.next = o : (e1 = r1 = o, i(t, a));
        });
    }, "function" != typeof t2.return && (this.return = void 0);
}
function _wrapAsyncGenerator(t) {
    return function() {
        return new _AsyncGenerator(t.apply(this, arguments));
    };
}
function _awaitAsyncGenerator(t) {
    return new _AwaitValue(t);
}
function _asyncGeneratorDelegate(t3, e2) {
    var r = {
    }, i = !1;
    function a2(r, a) {
        return i = !0, a = new Promise(function(e) {
            e(t3[r](a));
        }), {
            done: !1,
            value: e2(a)
        };
    }
    return "function" == typeof Symbol && Symbol.iterator && (r[Symbol.iterator] = function() {
        return this;
    }), r.next = function(t) {
        return i ? (i = !1, t) : a2("next", t);
    }, "function" == typeof t3.throw && (r.throw = function(t) {
        if (i) throw i = !1, t;
        return a2("throw", t);
    }), "function" == typeof t3.return && (r.return = function(t) {
        return i ? (i = !1, t) : a2("return", t);
    }), r;
}
function asyncGeneratorStep(t, e, r, i, a, s, n) {
    try {
        var o = t[s](n), h = o.value;
    } catch (t4) {
        return void r(t4);
    }
    o.done ? e(h) : Promise.resolve(h).then(i, a);
}
function _asyncToGenerator(t5) {
    return function() {
        var e = this, r = arguments;
        return new Promise(function(i, a) {
            var s = t5.apply(e, r);
            function n(t) {
                asyncGeneratorStep(s, i, a, n, o, "next", t);
            }
            function o(t) {
                asyncGeneratorStep(s, i, a, n, o, "throw", t);
            }
            n(void 0);
        });
    };
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
    for(var r = 0; r < e.length; r++){
        var i = e[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
}
function _createClass(t, e, r) {
    return e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), t;
}
function _defineEnumerableProperties(t, e) {
    for(var r in e)(s = e[r]).configurable = s.enumerable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, r, s);
    if (Object.getOwnPropertySymbols) for(var i = Object.getOwnPropertySymbols(e), a = 0; a < i.length; a++){
        var s, n = i[a];
        (s = e[n]).configurable = s.enumerable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, n, s);
    }
    return t;
}
function _defaults(t, e) {
    for(var r = Object.getOwnPropertyNames(e), i = 0; i < r.length; i++){
        var a = r[i], s = Object.getOwnPropertyDescriptor(e, a);
        s && s.configurable && void 0 === t[a] && Object.defineProperty(t, a, s);
    }
    return t;
}
function _defineProperty(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
function _extends() {
    return (_extends = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var r = arguments[e];
            for(var i in r)Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
    }).apply(this, arguments);
}
function _objectSpread(t6) {
    for(var e3 = 1; e3 < arguments.length; e3++){
        var r = null != arguments[e3] ? Object(arguments[e3]) : {
        }, i = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
        }))), i.forEach(function(e) {
            _defineProperty(t6, e, r[e]);
        });
    }
    return t6;
}
function ownKeys(t, e4) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e4 && (i = i.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), r.push.apply(r, i);
    }
    return r;
}
function _objectSpread2(t) {
    for(var e5 = 1; e5 < arguments.length; e5++){
        var r = null != arguments[e5] ? arguments[e5] : {
        };
        e5 % 2 ? ownKeys(Object(r), !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), e && _setPrototypeOf(t, e);
}
function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, _setPrototypeOf(t, e);
}
function _getPrototypeOf(t7) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    })(t7);
}
function _setPrototypeOf(t8, e6) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t;
    })(t8, e6);
}
function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
    } catch (t) {
        return !1;
    }
}
function _construct(t9, e7, r2) {
    return (_construct = _isNativeReflectConstruct() ? Reflect.construct : function(t, e, r) {
        var i = [
            null
        ];
        i.push.apply(i, e);
        var a = new (Function.bind.apply(t, i));
        return r && _setPrototypeOf(a, r.prototype), a;
    }).apply(null, arguments);
}
function _isNativeFunction(t) {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
}
function _wrapNativeSuper(t10) {
    var e = "function" == typeof Map ? new Map : void 0;
    return (_wrapNativeSuper = function(t) {
        if (null === t || !_isNativeFunction(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
        }
        function r() {
            return _construct(t, arguments, _getPrototypeOf(this).constructor);
        }
        return r.prototype = Object.create(t.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _setPrototypeOf(r, t);
    })(t10);
}
function _instanceof(t, e) {
    return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e;
}
function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}
function _getRequireWildcardCache() {
    if ("function" != typeof WeakMap) return null;
    var t = new WeakMap;
    return _getRequireWildcardCache = function() {
        return t;
    }, t;
}
function _interopRequireWildcard(t) {
    if (t && t.__esModule) return t;
    if (null === t || "object" != typeof t && "function" != typeof t) return {
        default: t
    };
    var e = _getRequireWildcardCache();
    if (e && e.has(t)) return e.get(t);
    var r = {
    }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var a in t)if (Object.prototype.hasOwnProperty.call(t, a)) {
        var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
        s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a];
    }
    return r.default = t, e && e.set(t, r), r;
}
function _newArrowCheck(t, e) {
    if (t !== e) throw new TypeError("Cannot instantiate an arrow function");
}
function _objectDestructuringEmpty(t) {
    if (null == t) throw new TypeError("Cannot destructure undefined");
}
function _objectWithoutPropertiesLoose(t, e) {
    if (null == t) return {
    };
    var r, i, a = {
    }, s = Object.keys(t);
    for(i = 0; i < s.length; i++)r = s[i], e.indexOf(r) >= 0 || (a[r] = t[r]);
    return a;
}
function _objectWithoutProperties(t, e) {
    if (null == t) return {
    };
    var r, i, a = _objectWithoutPropertiesLoose(t, e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        for(i = 0; i < s.length; i++)r = s[i], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
    }
    return a;
}
function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function _possibleConstructorReturn(t, e) {
    return !e || "object" != typeof e && "function" != typeof e ? _assertThisInitialized(t) : e;
}
function _createSuper(t) {
    var e = _isNativeReflectConstruct();
    return function() {
        var r, i = _getPrototypeOf(t);
        if (e) {
            var a = _getPrototypeOf(this).constructor;
            r = Reflect.construct(i, arguments, a);
        } else r = i.apply(this, arguments);
        return _possibleConstructorReturn(this, r);
    };
}
function _superPropBase(t, e) {
    for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)););
    return t;
}
function _get(t11, e8, r3) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r) {
        var i = _superPropBase(t, e);
        if (i) {
            var a = Object.getOwnPropertyDescriptor(i, e);
            return a.get ? a.get.call(r) : a.value;
        }
    })(t11, e8, r3 || t11);
}
function set(t12, e9, r4, i1) {
    return (set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(t, e, r, i) {
        var a, s = _superPropBase(t, e);
        if (s) {
            if ((a = Object.getOwnPropertyDescriptor(s, e)).set) return a.set.call(i, r), !0;
            if (!a.writable) return !1;
        }
        if (a = Object.getOwnPropertyDescriptor(i, e)) {
            if (!a.writable) return !1;
            a.value = r, Object.defineProperty(i, e, a);
        } else _defineProperty(i, e, r);
        return !0;
    })(t12, e9, r4, i1);
}
function _set(t, e, r, i, a) {
    if (!set(t, e, r, i || t) && a) throw new Error("failed to set property");
    return r;
}
function _taggedTemplateLiteral(t, e) {
    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
        raw: {
            value: Object.freeze(e)
        }
    }));
}
function _taggedTemplateLiteralLoose(t, e) {
    return e || (e = t.slice(0)), t.raw = e, t;
}
function _readOnlyError(t) {
    throw new TypeError('"' + t + '" is read-only');
}
function _writeOnlyError(t) {
    throw new TypeError('"' + t + '" is write-only');
}
function _classNameTDZError(t) {
    throw new Error('Class "' + t + '" cannot be referenced in computed property keys.');
}
function _temporalUndefined() {
}
function _tdz(t) {
    throw new ReferenceError(t + " is not defined - temporal dead zone");
}
function _temporalRef(t, e) {
    return t === _temporalUndefined ? _tdz(e) : t;
}
function _slicedToArray(t, e) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest();
}
function _slicedToArrayLoose(t, e) {
    return _arrayWithHoles(t) || _iterableToArrayLimitLoose(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest();
}
function _toArray(t) {
    return _arrayWithHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableRest();
}
function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread();
}
function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) return _arrayLikeToArray(t);
}
function _arrayWithHoles(t) {
    if (Array.isArray(t)) return t;
}
function _maybeArrayLike(t, e, r) {
    if (e && !Array.isArray(e) && "number" == typeof e.length) {
        var i = e.length;
        return _arrayLikeToArray(e, void 0 !== r && r < i ? r : i);
    }
    return t(e, r);
}
function _iterableToArray(t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
}
function _iterableToArrayLimit(t, e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var r = [], i = !0, a = !1, s = void 0;
        try {
            for(var n, o = t[Symbol.iterator](); !(i = (n = o.next()).done) && (r.push(n.value), !e || r.length !== e); i = !0);
        } catch (t) {
            a = !0, s = t;
        } finally{
            try {
                i || null == o.return || o.return();
            } finally{
                if (a) throw s;
            }
        }
        return r;
    }
}
function _iterableToArrayLimitLoose(t, e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        for(var r, i = [], a = t[Symbol.iterator](); !(r = a.next()).done && (i.push(r.value), !e || i.length !== e););
        return i;
    }
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(t, e) : void 0;
    }
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for(var r = 0, i = new Array(e); r < e; r++)i[r] = t[r];
    return i;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(t13, e) {
    var r;
    if ("undefined" == typeof Symbol || null == t13[Symbol.iterator]) {
        if (Array.isArray(t13) || (r = _unsupportedIterableToArray(t13)) || e && t13 && "number" == typeof t13.length) {
            r && (t13 = r);
            var i = 0, a = function() {
            };
            return {
                s: a,
                n: function() {
                    return i >= t13.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t13[i++]
                    };
                },
                e: function(t) {
                    throw t;
                },
                f: a
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s, n = !0, o = !1;
    return {
        s: function() {
            r = t13[Symbol.iterator]();
        },
        n: function() {
            var t = r.next();
            return n = t.done, t;
        },
        e: function(t) {
            o = !0, s = t;
        },
        f: function() {
            try {
                n || null == r.return || r.return();
            } finally{
                if (o) throw s;
            }
        }
    };
}
function _createForOfIteratorHelperLoose(t, e) {
    var r;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (r = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
            r && (t = r);
            var i = 0;
            return function() {
                return i >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    return (r = t[Symbol.iterator]()).next.bind(r);
}
function _skipFirstGeneratorNext(t) {
    return function() {
        var e = t.apply(this, arguments);
        return e.next(), e;
    };
}
function _toPrimitive(t, e) {
    if ("object" != typeof t || null === t) return t;
    var r = t[Symbol.toPrimitive];
    if (void 0 !== r) {
        var i = r.call(t, e || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
}
function _toPropertyKey(t) {
    var e = _toPrimitive(t, "string");
    return "symbol" == typeof e ? e : String(e);
}
function _initializerWarningHelper(t, e) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
}
function _initializerDefineProperty(t, e, r, i) {
    r && Object.defineProperty(t, e, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(i) : void 0
    });
}
function _applyDecoratedDescriptor(t, e, r5, i2, a) {
    var s = {
    };
    return Object.keys(i2).forEach(function(t) {
        s[t] = i2[t];
    }), s.enumerable = !!s.enumerable, s.configurable = !!s.configurable, ("value" in s || s.initializer) && (s.writable = !0), s = r5.slice().reverse().reduce(function(r, i) {
        return i(t, e, r) || r;
    }, s), a && void 0 !== s.initializer && (s.value = s.initializer ? s.initializer.call(a) : void 0, s.initializer = void 0), void 0 === s.initializer && (Object.defineProperty(t, e, s), s = null), s;
}
"function" == typeof Symbol && Symbol.asyncIterator && (_AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
}), _AsyncGenerator.prototype.next = function(t) {
    return this._invoke("next", t);
}, _AsyncGenerator.prototype.throw = function(t) {
    return this._invoke("throw", t);
}, _AsyncGenerator.prototype.return = function(t) {
    return this._invoke("return", t);
};
var id = 0;
function _classPrivateFieldLooseKey(t) {
    return "__private_" + id++ + "_" + t;
}
function _classPrivateFieldLooseBase(t, e) {
    if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
    return t;
}
function _classPrivateFieldGet(t, e) {
    return _classApplyDescriptorGet(t, _classExtractFieldDescriptor(t, e, "get"));
}
function _classPrivateFieldSet(t, e, r) {
    return _classApplyDescriptorSet(t, _classExtractFieldDescriptor(t, e, "set"), r), r;
}
function _classPrivateFieldDestructureSet(t, e) {
    return _classApplyDescriptorDestructureSet(t, _classExtractFieldDescriptor(t, e, "set"));
}
function _classExtractFieldDescriptor(t, e, r) {
    if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance");
    return e.get(t);
}
function _classStaticPrivateFieldSpecGet(t, e, r) {
    return _classCheckPrivateStaticAccess(t, e), _classCheckPrivateStaticFieldDescriptor(r, "get"), _classApplyDescriptorGet(t, r);
}
function _classStaticPrivateFieldSpecSet(t, e, r, i) {
    return _classCheckPrivateStaticAccess(t, e), _classCheckPrivateStaticFieldDescriptor(r, "set"), _classApplyDescriptorSet(t, r, i), i;
}
function _classStaticPrivateMethodGet(t, e, r) {
    return _classCheckPrivateStaticAccess(t, e), r;
}
function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
}
function _classApplyDescriptorGet(t, e) {
    return e.get ? e.get.call(t) : e.value;
}
function _classApplyDescriptorSet(t, e, r) {
    if (e.set) e.set.call(t, r);
    else {
        if (!e.writable) throw new TypeError("attempted to set read only private field");
        e.value = r;
    }
}
function _classApplyDescriptorDestructureSet(t, e) {
    if (e.set) return "__destrObj" in e || (e.__destrObj = {
        set value (r){
            e.set.call(t, r);
        }
    }), e.__destrObj;
    if (!e.writable) throw new TypeError("attempted to set read only private field");
    return e;
}
function _classStaticPrivateFieldDestructureSet(t, e, r) {
    return _classCheckPrivateStaticAccess(t, e), _classCheckPrivateStaticFieldDescriptor(r, "set"), _classApplyDescriptorDestructureSet(t, r);
}
function _classCheckPrivateStaticAccess(t, e) {
    if (t !== e) throw new TypeError("Private static access of wrong provenance");
}
function _classCheckPrivateStaticFieldDescriptor(t, e) {
    if (void 0 === t) throw new TypeError("attempted to " + e + " private static field before its declaration");
}
function _decorate(t14, e, r, i) {
    var a = _getDecoratorsApi();
    if (i) for(var s = 0; s < i.length; s++)a = i[s](a);
    var n = e(function(t) {
        a.initializeInstanceElements(t, o.elements);
    }, r), o = a.decorateClass(_coalesceClassElements(n.d.map(_createElementDescriptor)), t14);
    return a.initializeClassElements(n.F, o.elements), a.runClassFinishers(n.F, o.finishers);
}
function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
        return t15;
    };
    var t15 = {
        elementsDefinitionOrder: [
            [
                "method"
            ],
            [
                "field"
            ]
        ],
        initializeInstanceElements: function(t, e10) {
            [
                "method",
                "field"
            ].forEach(function(r) {
                e10.forEach(function(e) {
                    e.kind === r && "own" === e.placement && this.defineClassElement(t, e);
                }, this);
            }, this);
        },
        initializeClassElements: function(t, e11) {
            var r = t.prototype;
            [
                "method",
                "field"
            ].forEach(function(i) {
                e11.forEach(function(e) {
                    var a = e.placement;
                    if (e.kind === i && ("static" === a || "prototype" === a)) {
                        var s = "static" === a ? t : r;
                        this.defineClassElement(s, e);
                    }
                }, this);
            }, this);
        },
        defineClassElement: function(t, e) {
            var r = e.descriptor;
            if ("field" === e.kind) {
                var i = e.initializer;
                r = {
                    enumerable: r.enumerable,
                    writable: r.writable,
                    configurable: r.configurable,
                    value: void 0 === i ? void 0 : i.call(t)
                };
            }
            Object.defineProperty(t, e.key, r);
        },
        decorateClass: function(t16, e12) {
            var r = [], i = [], a = {
                static: [],
                prototype: [],
                own: []
            };
            if (t16.forEach(function(t) {
                this.addElementPlacement(t, a);
            }, this), t16.forEach(function(t) {
                if (!_hasDecorators(t)) return r.push(t);
                var e = this.decorateElement(t, a);
                r.push(e.element), r.push.apply(r, e.extras), i.push.apply(i, e.finishers);
            }, this), !e12) return {
                elements: r,
                finishers: i
            };
            var s = this.decorateConstructor(r, e12);
            return i.push.apply(i, s.finishers), s.finishers = i, s;
        },
        addElementPlacement: function(t, e, r) {
            var i = e[t.placement];
            if (!r && -1 !== i.indexOf(t.key)) throw new TypeError("Duplicated element (" + t.key + ")");
            i.push(t.key);
        },
        decorateElement: function(t, e) {
            for(var r = [], i = [], a = t.decorators, s = a.length - 1; s >= 0; s--){
                var n = e[t.placement];
                n.splice(n.indexOf(t.key), 1);
                var o = this.fromElementDescriptor(t), h = this.toElementFinisherExtras((0, a[s])(o) || o);
                t = h.element, this.addElementPlacement(t, e), h.finisher && i.push(h.finisher);
                var l = h.extras;
                if (l) {
                    for(var p = 0; p < l.length; p++)this.addElementPlacement(l[p], e);
                    r.push.apply(r, l);
                }
            }
            return {
                element: t,
                finishers: i,
                extras: r
            };
        },
        decorateConstructor: function(t, e) {
            for(var r = [], i = e.length - 1; i >= 0; i--){
                var a = this.fromClassDescriptor(t), s = this.toClassDescriptor((0, e[i])(a) || a);
                if (void 0 !== s.finisher && r.push(s.finisher), void 0 !== s.elements) {
                    t = s.elements;
                    for(var n = 0; n < t.length - 1; n++)for(var o = n + 1; o < t.length; o++)if (t[n].key === t[o].key && t[n].placement === t[o].placement) throw new TypeError("Duplicated element (" + t[n].key + ")");
                }
            }
            return {
                elements: t,
                finishers: r
            };
        },
        fromElementDescriptor: function(t) {
            var e = {
                kind: t.kind,
                key: t.key,
                placement: t.placement,
                descriptor: t.descriptor
            };
            return Object.defineProperty(e, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0
            }), "field" === t.kind && (e.initializer = t.initializer), e;
        },
        toElementDescriptors: function(t17) {
            if (void 0 !== t17) return _toArray(t17).map(function(t) {
                var e = this.toElementDescriptor(t);
                return this.disallowProperty(t, "finisher", "An element descriptor"), this.disallowProperty(t, "extras", "An element descriptor"), e;
            }, this);
        },
        toElementDescriptor: function(t) {
            var e = String(t.kind);
            if ("method" !== e && "field" !== e) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + e + '"');
            var r = _toPropertyKey(t.key), i = String(t.placement);
            if ("static" !== i && "prototype" !== i && "own" !== i) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + i + '"');
            var a = t.descriptor;
            this.disallowProperty(t, "elements", "An element descriptor");
            var s = {
                kind: e,
                key: r,
                placement: i,
                descriptor: Object.assign({
                }, a)
            };
            return "field" !== e ? this.disallowProperty(t, "initializer", "A method descriptor") : (this.disallowProperty(a, "get", "The property descriptor of a field descriptor"), this.disallowProperty(a, "set", "The property descriptor of a field descriptor"), this.disallowProperty(a, "value", "The property descriptor of a field descriptor"), s.initializer = t.initializer), s;
        },
        toElementFinisherExtras: function(t) {
            return {
                element: this.toElementDescriptor(t),
                finisher: _optionalCallableProperty(t, "finisher"),
                extras: this.toElementDescriptors(t.extras)
            };
        },
        fromClassDescriptor: function(t) {
            var e = {
                kind: "class",
                elements: t.map(this.fromElementDescriptor, this)
            };
            return Object.defineProperty(e, Symbol.toStringTag, {
                value: "Descriptor",
                configurable: !0
            }), e;
        },
        toClassDescriptor: function(t) {
            var e = String(t.kind);
            if ("class" !== e) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + e + '"');
            this.disallowProperty(t, "key", "A class descriptor"), this.disallowProperty(t, "placement", "A class descriptor"), this.disallowProperty(t, "descriptor", "A class descriptor"), this.disallowProperty(t, "initializer", "A class descriptor"), this.disallowProperty(t, "extras", "A class descriptor");
            var r = _optionalCallableProperty(t, "finisher");
            return {
                elements: this.toElementDescriptors(t.elements),
                finisher: r
            };
        },
        runClassFinishers: function(t, e) {
            for(var r = 0; r < e.length; r++){
                var i = (0, e[r])(t);
                if (void 0 !== i) {
                    if ("function" != typeof i) throw new TypeError("Finishers must return a constructor.");
                    t = i;
                }
            }
            return t;
        },
        disallowProperty: function(t, e, r) {
            if (void 0 !== t[e]) throw new TypeError(r + " can't have a ." + e + " property.");
        }
    };
    return t15;
}
function _createElementDescriptor(t) {
    var e, r = _toPropertyKey(t.key);
    "method" === t.kind ? e = {
        value: t.value,
        writable: !0,
        configurable: !0,
        enumerable: !1
    } : "get" === t.kind ? e = {
        get: t.value,
        configurable: !0,
        enumerable: !1
    } : "set" === t.kind ? e = {
        set: t.value,
        configurable: !0,
        enumerable: !1
    } : "field" === t.kind && (e = {
        configurable: !0,
        writable: !0,
        enumerable: !0
    });
    var i = {
        kind: "field" === t.kind ? "field" : "method",
        key: r,
        placement: t.static ? "static" : "field" === t.kind ? "own" : "prototype",
        descriptor: e
    };
    return t.decorators && (i.decorators = t.decorators), "field" === t.kind && (i.initializer = t.value), i;
}
function _coalesceGetterSetter(t, e) {
    void 0 !== t.descriptor.get ? e.descriptor.get = t.descriptor.get : e.descriptor.set = t.descriptor.set;
}
function _coalesceClassElements(t18) {
    for(var e = [], r = function(t) {
        return "method" === t.kind && t.key === s.key && t.placement === s.placement;
    }, i = 0; i < t18.length; i++){
        var a, s = t18[i];
        if ("method" === s.kind && (a = e.find(r))) {
            if (_isDataDescriptor(s.descriptor) || _isDataDescriptor(a.descriptor)) {
                if (_hasDecorators(s) || _hasDecorators(a)) throw new ReferenceError("Duplicated methods (" + s.key + ") can't be decorated.");
                a.descriptor = s.descriptor;
            } else {
                if (_hasDecorators(s)) {
                    if (_hasDecorators(a)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + s.key + ").");
                    a.decorators = s.decorators;
                }
                _coalesceGetterSetter(s, a);
            }
        } else e.push(s);
    }
    return e;
}
function _hasDecorators(t) {
    return t.decorators && t.decorators.length;
}
function _isDataDescriptor(t) {
    return void 0 !== t && !(void 0 === t.value && void 0 === t.writable);
}
function _optionalCallableProperty(t, e) {
    var r = t[e];
    if (void 0 !== r && "function" != typeof r) throw new TypeError("Expected '" + e + "' to be a function");
    return r;
}
function _classPrivateMethodGet(t, e, r) {
    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
    return r;
}
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
function _wrapRegExp(t19, e13) {
    _wrapRegExp = function(t, e) {
        return new s1(t, void 0, e);
    };
    var r6 = _wrapNativeSuper(RegExp), i3 = RegExp.prototype, a = new WeakMap;
    function s1(t, e, i) {
        var s = r6.call(this, t, e);
        return a.set(s, i || a.get(t)), s;
    }
    function n(t, e14) {
        var r = a.get(e14);
        return Object.keys(r).reduce(function(e, i) {
            return e[i] = t[r[i]], e;
        }, Object.create(null));
    }
    return _inherits(s1, r6), s1.prototype.exec = function(t) {
        var e = i3.exec.call(this, t);
        return e && (e.groups = n(e, this)), e;
    }, s1.prototype[Symbol.replace] = function(t20, e) {
        if ("string" == typeof e) {
            var r = a.get(this);
            return i3[Symbol.replace].call(this, t20, e.replace(/\$<([^>]+)>/g, function(t, e) {
                return "$" + r[e];
            }));
        }
        if ("function" == typeof e) {
            var s = this;
            return i3[Symbol.replace].call(this, t20, function() {
                var t = [];
                return t.push.apply(t, arguments), "object" != typeof t[t.length - 1] && t.push(n(t, s)), e.apply(this, t);
            });
        }
        return i3[Symbol.replace].call(this, t20, e);
    }, _wrapRegExp.apply(this, arguments);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var _extendStatics = function(t21, e15) {
    return (_extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    })(t21, e15);
};
function __extends(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function r() {
        this.constructor = t;
    }
    _extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
}
var _assign = function() {
    return (_assign = Object.assign || function(t) {
        for(var e, r = 1, i = arguments.length; r < i; r++)for(var a in e = arguments[r])Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
        return t;
    }).apply(this, arguments);
};
function __rest(t, e) {
    var r = {
    };
    for(var i in t)Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var a = 0;
        for(i = Object.getOwnPropertySymbols(t); a < i.length; a++)e.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[a]) && (r[i[a]] = t[i[a]]);
    }
    return r;
}
function __decorate(t, e, r, i) {
    var a, s = arguments.length, n = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, i);
    else for(var o = t.length - 1; o >= 0; o--)(a = t[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(e, r, n) : a(e, r)) || n);
    return s > 3 && n && Object.defineProperty(e, r, n), n;
}
function __param(t, e) {
    return function(r, i) {
        e(r, i, t);
    };
}
function __metadata(t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
}
function __awaiter(t22, e16, r, i) {
    return new (r || (r = Promise))(function(a, s) {
        function n(t) {
            try {
                h(i.next(t));
            } catch (t23) {
                s(t23);
            }
        }
        function o(t) {
            try {
                h(i.throw(t));
            } catch (t24) {
                s(t24);
            }
        }
        function h(t25) {
            var e;
            t25.done ? a(t25.value) : (e = t25.value, e instanceof r ? e : new r(function(t) {
                t(e);
            })).then(n, o);
        }
        h((i = i.apply(t22, e16 || [])).next());
    });
}
function __generator(t26, e) {
    var r, i, a, s2, n = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1];
        },
        trys: [],
        ops: []
    };
    function o1(s3) {
        return function(o) {
            return (function(s) {
                if (r) throw new TypeError("Generator is already executing.");
                for(; n;)try {
                    if (r = 1, i && (a = 2 & s[0] ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
                    switch(i = 0, a && (s = [
                        2 & s[0],
                        a.value
                    ]), s[0]){
                        case 0:
                        case 1:
                            a = s;
                            break;
                        case 4:
                            return n.label++, {
                                value: s[1],
                                done: !1
                            };
                        case 5:
                            n.label++, i = s[1], s = [
                                0
                            ];
                            continue;
                        case 7:
                            s = n.ops.pop(), n.trys.pop();
                            continue;
                        default:
                            if (!(a = n.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                n = 0;
                                continue;
                            }
                            if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                n.label = s[1];
                                break;
                            }
                            if (6 === s[0] && n.label < a[1]) {
                                n.label = a[1], a = s;
                                break;
                            }
                            if (a && n.label < a[2]) {
                                n.label = a[2], n.ops.push(s);
                                break;
                            }
                            a[2] && n.ops.pop(), n.trys.pop();
                            continue;
                    }
                    s = e.call(t26, n);
                } catch (t) {
                    s = [
                        6,
                        t
                    ], i = 0;
                } finally{
                    r = a = 0;
                }
                if (5 & s[0]) throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: !0
                };
            })([
                s3,
                o
            ]);
        };
    }
    return s2 = {
        next: o1(0),
        throw: o1(1),
        return: o1(2)
    }, "function" == typeof Symbol && (s2[Symbol.iterator] = function() {
        return this;
    }), s2;
}
var __createBinding = Object.create ? function(t, e, r, i) {
    void 0 === i && (i = r), Object.defineProperty(t, i, {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    });
} : function(t, e, r, i) {
    void 0 === i && (i = r), t[i] = e[r];
};
function __exportStar(t, e) {
    for(var r in t)"default" === r || Object.prototype.hasOwnProperty.call(e, r) || __createBinding(e, t, r);
}
function __values(t) {
    var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], i = 0;
    if (r) return r.call(t);
    if (t && "number" == typeof t.length) return {
        next: function() {
            return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
            };
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(t, e) {
    var r = "function" == typeof Symbol && t[Symbol.iterator];
    if (!r) return t;
    var i, a, s = r.call(t), n = [];
    try {
        for(; (void 0 === e || e-- > 0) && !(i = s.next()).done;)n.push(i.value);
    } catch (t27) {
        a = {
            error: t27
        };
    } finally{
        try {
            i && !i.done && (r = s.return) && r.call(s);
        } finally{
            if (a) throw a.error;
        }
    }
    return n;
}
function __spread() {
    for(var t = [], e = 0; e < arguments.length; e++)t = t.concat(__read(arguments[e]));
    return t;
}
function __spreadArrays() {
    for(var t = 0, e = 0, r = arguments.length; e < r; e++)t += arguments[e].length;
    var i = Array(t), a = 0;
    for(e = 0; e < r; e++)for(var s = arguments[e], n = 0, o = s.length; n < o; n++, a++)i[a] = s[n];
    return i;
}
function __spreadArray(t, e, r) {
    if (r || 2 === arguments.length) for(var i, a = 0, s = e.length; a < s; a++)!i && a in e || (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
    return t.concat(i || Array.prototype.slice.call(e));
}
function __await(t) {
    return this instanceof __await ? (this.v = t, this) : new __await(t);
}
function __asyncGenerator(t28, e17, r7) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i4, a = r7.apply(t28, e17 || []), s = [];
    function n(t) {
        a[t] && (i4[t] = function(e) {
            return new Promise(function(r, i) {
                s.push([
                    t,
                    e,
                    r,
                    i
                ]) > 1 || o(t, e);
            });
        });
    }
    function o(t, e) {
        try {
            (r = a[t](e)).value instanceof __await ? Promise.resolve(r.value.v).then(h, l) : p(s[0][2], r);
        } catch (t29) {
            p(s[0][3], t29);
        }
        var r;
    }
    function h(t) {
        o("next", t);
    }
    function l(t) {
        o("throw", t);
    }
    function p(t, e) {
        t(e), s.shift(), s.length && o(s[0][0], s[0][1]);
    }
    return i4 = {
    }, n("next"), n("throw"), n("return"), i4[Symbol.asyncIterator] = function() {
        return this;
    }, i4;
}
function __asyncDelegator(t30) {
    var e18, r;
    function i5(i, a) {
        e18[i] = t30[i] ? function(e) {
            return (r = !r) ? {
                value: __await(t30[i](e)),
                done: "return" === i
            } : a ? a(e) : e;
        } : a;
    }
    return e18 = {
    }, i5("next"), i5("throw", function(t) {
        throw t;
    }), i5("return"), e18[Symbol.iterator] = function() {
        return this;
    }, e18;
}
function __asyncValues(t31) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e19, r8 = t31[Symbol.asyncIterator];
    function i6(r9) {
        e19[r9] = t31[r9] && function(e20) {
            return new Promise(function(i7, a) {
                (function(t, e21, r, i) {
                    Promise.resolve(i).then(function(e) {
                        t({
                            value: e,
                            done: r
                        });
                    }, e21);
                })(i7, a, (e20 = t31[r9](e20)).done, e20.value);
            });
        };
    }
    return r8 ? r8.call(t31) : (t31 = "function" == typeof __values ? __values(t31) : t31[Symbol.iterator](), e19 = {
    }, i6("next"), i6("throw"), i6("return"), e19[Symbol.asyncIterator] = function() {
        return this;
    }, e19);
}
function __makeTemplateObject(t, e) {
    return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
    }) : t.raw = e, t;
}
var __setModuleDefault = Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    });
} : function(t, e) {
    t.default = e;
};
function __importStar(t) {
    if (t && t.__esModule) return t;
    var e = {
    };
    if (null != t) for(var r in t)"default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
    return __setModuleDefault(e, t), e;
}
function __importDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}
function __classPrivateFieldGet(t, e, r, i) {
    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t);
}
function __classPrivateFieldSet(t, e, r, i, a) {
    if ("m" === i) throw new TypeError("Private method is not writable");
    if ("a" === i && !a) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof e ? t !== e || !a : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === i ? a.call(t, r) : a ? a.value = r : e.set(t, r), r;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ }
var isCEPolyfill = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback, reparentNodes = function(t, e) {
    for(var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; e !== r;){
        var a = e.nextSibling;
        t.insertBefore(e, i), e = a;
    }
}, removeNodes = function(t, e) {
    for(var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; e !== r;){
        var i = e.nextSibling;
        t.removeChild(e), e = i;
    }
}, marker = "{{lit-".concat(String(Math.random()).slice(2), "}}"), nodeMarker = "\x3c!--".concat(marker, "--\x3e"), markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker)), boundAttributeSuffix = "$lit$";
class Template {
    constructor(t, e){
        this.parts = [], this.element = e;
        for(var r = [], i = [], a = document.createTreeWalker(e.content, 133, null, !1), s = 0, n = -1, o = 0, { strings: h , values: { length: l  }  } = t; o < l;){
            var p = a.nextNode();
            if (null !== p) {
                if (n++, 1 === p.nodeType) {
                    if (p.hasAttributes()) {
                        for(var c = p.attributes, { length: f  } = c, d = 0, m = 0; m < f; m++)endsWith(c[m].name, boundAttributeSuffix) && d++;
                        for(; d-- > 0;){
                            var u = h[o], y = lastAttributeNameRegex.exec(u)[2], g = y.toLowerCase() + boundAttributeSuffix, v = p.getAttribute(g);
                            p.removeAttribute(g);
                            var b = v.split(markerRegex);
                            this.parts.push({
                                type: "attribute",
                                index: n,
                                name: y,
                                strings: b
                            }), o += b.length - 1;
                        }
                    }
                    "TEMPLATE" === p.tagName && (i.push(p), a.currentNode = p.content);
                } else if (3 === p.nodeType) {
                    var _ = p.data;
                    if (_.indexOf(marker) >= 0) {
                        for(var P = p.parentNode, S = _.split(markerRegex), E = S.length - 1, x = 0; x < E; x++){
                            var A = void 0, w = S[x];
                            if ("" === w) A = createMarker();
                            else {
                                var C = lastAttributeNameRegex.exec(w);
                                null !== C && endsWith(C[2], boundAttributeSuffix) && (w = w.slice(0, C.index) + C[1] + C[2].slice(0, -boundAttributeSuffix.length) + C[3]), A = document.createTextNode(w);
                            }
                            P.insertBefore(A, p), this.parts.push({
                                type: "node",
                                index: ++n
                            });
                        }
                        "" === S[E] ? (P.insertBefore(createMarker(), p), r.push(p)) : p.data = S[E], o += E;
                    }
                } else if (8 === p.nodeType) {
                    if (p.data === marker) {
                        var T = p.parentNode;
                        null !== p.previousSibling && n !== s || (n++, T.insertBefore(createMarker(), p)), s = n, this.parts.push({
                            type: "node",
                            index: n
                        }), null === p.nextSibling ? p.data = "" : (r.push(p), n--), o++;
                    } else for(var k = -1; -1 !== (k = p.data.indexOf(marker, k + 1));)this.parts.push({
                        type: "node",
                        index: -1
                    }), o++;
                }
            } else a.currentNode = i.pop();
        }
        for (var D of r)D.parentNode.removeChild(D);
    }
}
var endsWith = (t, e)=>{
    var r = t.length - e.length;
    return r >= 0 && t.slice(r) === e;
}, isTemplatePartActive = (t)=>-1 !== t.index
, createMarker = ()=>document.createComment("")
, lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/, walkerNodeFilter = 133;
function removeNodesFromTemplate(t32, e) {
    for(var { element: { content: r  } , parts: i  } = t32, a = document.createTreeWalker(r, walkerNodeFilter, null, !1), s = nextActiveIndexInTemplateParts(i), n = i[s], o = -1, h = 0, l = [], p = null; a.nextNode();){
        o++;
        var c = a.currentNode;
        for(c.previousSibling === p && (p = null), e.has(c) && (l.push(c), null === p && (p = c)), null !== p && h++; void 0 !== n && n.index === o;)n.index = null !== p ? -1 : n.index - h, n = i[s = nextActiveIndexInTemplateParts(i, s)];
    }
    l.forEach((t)=>t.parentNode.removeChild(t)
    );
}
var countNodes = (t)=>{
    for(var e = 11 === t.nodeType ? 0 : 1, r = document.createTreeWalker(t, walkerNodeFilter, null, !1); r.nextNode();)e++;
    return e;
}, nextActiveIndexInTemplateParts = function(t) {
    for(var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, r = e + 1; r < t.length; r++){
        var i = t[r];
        if (isTemplatePartActive(i)) return r;
    }
    return -1;
};
function insertNodeIntoTemplate(t, e) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, { element: { content: i  } , parts: a  } = t;
    if (null != r) for(var s = document.createTreeWalker(i, walkerNodeFilter, null, !1), n = nextActiveIndexInTemplateParts(a), o = 0, h = -1; s.nextNode();){
        h++;
        var l = s.currentNode;
        for(l === r && (o = countNodes(e), r.parentNode.insertBefore(e, r)); -1 !== n && a[n].index === h;){
            if (o > 0) {
                for(; -1 !== n;)a[n].index += o, n = nextActiveIndexInTemplateParts(a, n);
                return;
            }
            n = nextActiveIndexInTemplateParts(a, n);
        }
    }
    else i.appendChild(e);
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var directives = new WeakMap, directive = (t)=>function() {
        var e = t(...arguments);
        return directives.set(e, !0), e;
    }
, isDirective = (t)=>"function" == typeof t && directives.has(t)
, noChange = {
}, nothing = {
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ class TemplateInstance {
    constructor(t, e, r){
        this.__parts = [], this.template = t, this.processor = e, this.options = r;
    }
    update(t) {
        var e = 0;
        for (var r of this.__parts)void 0 !== r && r.setValue(t[e]), e++;
        for (var i of this.__parts)void 0 !== i && i.commit();
    }
    _clone() {
        for(var t, e = isCEPolyfill ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), r = [], i = this.template.parts, a = document.createTreeWalker(e, 133, null, !1), s = 0, n = 0, o = a.nextNode(); s < i.length;)if (t = i[s], isTemplatePartActive(t)) {
            for(; n < t.index;)n++, "TEMPLATE" === o.nodeName && (r.push(o), a.currentNode = o.content), null === (o = a.nextNode()) && (a.currentNode = r.pop(), o = a.nextNode());
            if ("node" === t.type) {
                var h = this.processor.handleTextExpression(this.options);
                h.insertAfterNode(o.previousSibling), this.__parts.push(h);
            } else this.__parts.push(...this.processor.handleAttributeExpressions(o, t.name, t.strings, this.options));
            s++;
        } else this.__parts.push(void 0), s++;
        return isCEPolyfill && (document.adoptNode(e), customElements.upgrade(e)), e;
    }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
    createHTML: (t)=>t
}), commentMarker = " ".concat(marker, " ");
class TemplateResult {
    constructor(t, e, r, i){
        this.strings = t, this.values = e, this.type = r, this.processor = i;
    }
    getHTML() {
        for(var t = this.strings.length - 1, e = "", r = !1, i = 0; i < t; i++){
            var a = this.strings[i], s = a.lastIndexOf("\x3c!--");
            r = (s > -1 || r) && -1 === a.indexOf("--\x3e", s + 1);
            var n = lastAttributeNameRegex.exec(a);
            e += null === n ? a + (r ? commentMarker : nodeMarker) : a.substr(0, n.index) + n[1] + n[2] + boundAttributeSuffix + n[3] + marker;
        }
        return e += this.strings[t];
    }
    getTemplateElement() {
        var t = document.createElement("template"), e = this.getHTML();
        return void 0 !== policy && (e = policy.createHTML(e)), t.innerHTML = e, t;
    }
}
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return "<svg>".concat(super.getHTML(), "</svg>");
    }
    getTemplateElement() {
        var t = super.getTemplateElement(), e = t.content, r = e.firstChild;
        return e.removeChild(r), reparentNodes(e, r.firstChild), t;
    }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var isPrimitive = (t)=>null === t || !("object" == typeof t || "function" == typeof t)
, isIterable = (t)=>Array.isArray(t) || !(!t || !t[Symbol.iterator])
;
class AttributeCommitter {
    constructor(t, e, r){
        this.dirty = !0, this.element = t, this.name = e, this.strings = r, this.parts = [];
        for(var i = 0; i < r.length - 1; i++)this.parts[i] = this._createPart();
    }
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        var t = this.strings, e = t.length - 1, r = this.parts;
        if (1 === e && "" === t[0] && "" === t[1]) {
            var i = r[0].value;
            if ("symbol" == typeof i) return String(i);
            if ("string" == typeof i || !isIterable(i)) return i;
        }
        for(var a = "", s = 0; s < e; s++){
            a += t[s];
            var n = r[s];
            if (void 0 !== n) {
                var o = n.value;
                if (isPrimitive(o) || !isIterable(o)) a += "string" == typeof o ? o : String(o);
                else for (var h of o)a += "string" == typeof h ? h : String(h);
            }
        }
        return a += t[e];
    }
    commit() {
        this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
    }
}
class AttributePart {
    constructor(t){
        this.value = void 0, this.committer = t;
    }
    setValue(t) {
        t === noChange || isPrimitive(t) && t === this.value || (this.value = t, isDirective(t) || (this.committer.dirty = !0));
    }
    commit() {
        for(; isDirective(this.value);){
            var t = this.value;
            this.value = noChange, t(this);
        }
        this.value !== noChange && this.committer.commit();
    }
}
class NodePart {
    constructor(t){
        this.value = void 0, this.__pendingValue = void 0, this.options = t;
    }
    appendInto(t) {
        this.startNode = t.appendChild(createMarker()), this.endNode = t.appendChild(createMarker());
    }
    insertAfterNode(t) {
        this.startNode = t, this.endNode = t.nextSibling;
    }
    appendIntoPart(t) {
        t.__insert(this.startNode = createMarker()), t.__insert(this.endNode = createMarker());
    }
    insertAfterPart(t) {
        t.__insert(this.startNode = createMarker()), this.endNode = t.endNode, t.endNode = this.startNode;
    }
    setValue(t) {
        this.__pendingValue = t;
    }
    commit() {
        if (null !== this.startNode.parentNode) {
            for(; isDirective(this.__pendingValue);){
                var t = this.__pendingValue;
                this.__pendingValue = noChange, t(this);
            }
            var e = this.__pendingValue;
            e !== noChange && (isPrimitive(e) ? e !== this.value && this.__commitText(e) : e instanceof TemplateResult ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : isIterable(e) ? this.__commitIterable(e) : e === nothing ? (this.value = nothing, this.clear()) : this.__commitText(e));
        }
    }
    __insert(t) {
        this.endNode.parentNode.insertBefore(t, this.endNode);
    }
    __commitNode(t) {
        this.value !== t && (this.clear(), this.__insert(t), this.value = t);
    }
    __commitText(t) {
        var e = this.startNode.nextSibling, r = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
        e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = r : this.__commitNode(document.createTextNode(r)), this.value = t;
    }
    __commitTemplateResult(t) {
        var e = this.options.templateFactory(t);
        if (this.value instanceof TemplateInstance && this.value.template === e) this.value.update(t.values);
        else {
            var r = new TemplateInstance(e, t.processor, this.options), i = r._clone();
            r.update(t.values), this.__commitNode(i), this.value = r;
        }
    }
    __commitIterable(t) {
        Array.isArray(this.value) || (this.value = [], this.clear());
        var e, r = this.value, i = 0;
        for (var a of t)void 0 === (e = r[i]) && (e = new NodePart(this.options), r.push(e), 0 === i ? e.appendIntoPart(this) : e.insertAfterPart(r[i - 1])), e.setValue(a), e.commit(), i++;
        i < r.length && (r.length = i, this.clear(e && e.endNode));
    }
    clear() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, t.nextSibling, this.endNode);
    }
}
class BooleanAttributePart {
    constructor(t, e, r){
        if (this.value = void 0, this.__pendingValue = void 0, 2 !== r.length || "" !== r[0] || "" !== r[1]) throw new Error("Boolean attributes can only contain a single expression");
        this.element = t, this.name = e, this.strings = r;
    }
    setValue(t) {
        this.__pendingValue = t;
    }
    commit() {
        for(; isDirective(this.__pendingValue);){
            var t = this.__pendingValue;
            this.__pendingValue = noChange, t(this);
        }
        if (this.__pendingValue !== noChange) {
            var e = !!this.__pendingValue;
            this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = noChange;
        }
    }
}
class PropertyCommitter extends AttributeCommitter {
    constructor(t, e, r){
        super(t, e, r), this.single = 2 === r.length && "" === r[0] && "" === r[1];
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        return this.single ? this.parts[0].value : super._getValue();
    }
    commit() {
        this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
    }
}
class PropertyPart extends AttributePart {
}
var eventOptionsSupported = !1;
(()=>{
    try {
        var t = {
            get capture () {
                return eventOptionsSupported = !0, !1;
            }
        };
        window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
    } catch (t) {
    }
})();
class EventPart {
    constructor(t33, e, r){
        this.value = void 0, this.__pendingValue = void 0, this.element = t33, this.eventName = e, this.eventContext = r, this.__boundHandleEvent = (t)=>this.handleEvent(t)
        ;
    }
    setValue(t) {
        this.__pendingValue = t;
    }
    commit() {
        for(; isDirective(this.__pendingValue);){
            var t = this.__pendingValue;
            this.__pendingValue = noChange, t(this);
        }
        if (this.__pendingValue !== noChange) {
            var e = this.__pendingValue, r = this.value, i = null == e || null != r && (e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive), a = null != e && (null == r || i);
            i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), a && (this.__options = getOptions(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = noChange;
        }
    }
    handleEvent(t) {
        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
    }
}
var getOptions = (t)=>t && (eventOptionsSupported ? {
        capture: t.capture,
        passive: t.passive,
        once: t.once
    } : t.capture)
;
function templateFactory(t) {
    var e = templateCaches.get(t.type);
    void 0 === e && (e = {
        stringsArray: new WeakMap,
        keyString: new Map
    }, templateCaches.set(t.type, e));
    var r = e.stringsArray.get(t.strings);
    if (void 0 !== r) return r;
    var i = t.strings.join(marker);
    return void 0 === (r = e.keyString.get(i)) && (r = new Template(t, t.getTemplateElement()), e.keyString.set(i, r)), e.stringsArray.set(t.strings, r), r;
}
var templateCaches = new Map, parts = new WeakMap, render$1 = (t, e, r)=>{
    var i = parts.get(e);
    void 0 === i && (removeNodes(e, e.firstChild), parts.set(e, i = new NodePart(Object.assign({
        templateFactory: templateFactory
    }, r))), i.appendInto(e)), i.setValue(t), i.commit();
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ class DefaultTemplateProcessor {
    handleAttributeExpressions(t, e, r, i) {
        var a = e[0];
        return "." === a ? new PropertyCommitter(t, e.slice(1), r).parts : "@" === a ? [
            new EventPart(t, e.slice(1), i.eventContext)
        ] : "?" === a ? [
            new BooleanAttributePart(t, e.slice(1), r)
        ] : new AttributeCommitter(t, e, r).parts;
    }
    handleTextExpression(t) {
        return new NodePart(t);
    }
}
var defaultTemplateProcessor = new DefaultTemplateProcessor;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
var html = function(t) {
    for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)r[i - 1] = arguments[i];
    return new TemplateResult(t, r, "html", defaultTemplateProcessor);
}, svg = function(t) {
    for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)r[i - 1] = arguments[i];
    return new SVGTemplateResult(t, r, "svg", defaultTemplateProcessor);
}, getTemplateCacheKey = (t, e)=>"".concat(t, "--").concat(e)
, compatibleShadyCSSVersion = !0;
void 0 === window.ShadyCSS ? compatibleShadyCSSVersion = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), compatibleShadyCSSVersion = !1);
var shadyTemplateFactory = (t)=>(e)=>{
        var r = getTemplateCacheKey(e.type, t), i = templateCaches.get(r);
        void 0 === i && (i = {
            stringsArray: new WeakMap,
            keyString: new Map
        }, templateCaches.set(r, i));
        var a = i.stringsArray.get(e.strings);
        if (void 0 !== a) return a;
        var s = e.strings.join(marker);
        if (void 0 === (a = i.keyString.get(s))) {
            var n = e.getTemplateElement();
            compatibleShadyCSSVersion && window.ShadyCSS.prepareTemplateDom(n, t), a = new Template(e, n), i.keyString.set(s, a);
        }
        return i.stringsArray.set(e.strings, a), a;
    }
, TEMPLATE_TYPES = [
    "html",
    "svg"
], removeStylesFromLitTemplates = (t34)=>{
    TEMPLATE_TYPES.forEach((e22)=>{
        var r10 = templateCaches.get(getTemplateCacheKey(e22, t34));
        void 0 !== r10 && r10.keyString.forEach((t35)=>{
            var { element: { content: e  }  } = t35, r = new Set;
            Array.from(e.querySelectorAll("style")).forEach((t)=>{
                r.add(t);
            }), removeNodesFromTemplate(t35, r);
        });
    });
}, shadyRenderSet = new Set, prepareTemplateStyles = (t, e, r)=>{
    shadyRenderSet.add(t);
    var i = r ? r.element : document.createElement("template"), a = e.querySelectorAll("style"), { length: s  } = a;
    if (0 !== s) {
        for(var n = document.createElement("style"), o = 0; o < s; o++){
            var h = a[o];
            h.parentNode.removeChild(h), n.textContent += h.textContent;
        }
        removeStylesFromLitTemplates(t);
        var l = i.content;
        r ? insertNodeIntoTemplate(r, n, l.firstChild) : l.insertBefore(n, l.firstChild), window.ShadyCSS.prepareTemplateStyles(i, t);
        var p = l.querySelector("style");
        if (window.ShadyCSS.nativeShadow && null !== p) e.insertBefore(p.cloneNode(!0), e.firstChild);
        else if (r) {
            l.insertBefore(n, l.firstChild);
            var c = new Set;
            c.add(n), removeNodesFromTemplate(r, c);
        }
    } else window.ShadyCSS.prepareTemplateStyles(i, t);
}, render = (t, e, r)=>{
    if (!r || "object" != typeof r || !r.scopeName) throw new Error("The `scopeName` option is required.");
    var i = r.scopeName, a = parts.has(e), s = compatibleShadyCSSVersion && 11 === e.nodeType && !!e.host, n = s && !shadyRenderSet.has(i), o = n ? document.createDocumentFragment() : e;
    if (render$1(t, o, Object.assign({
        templateFactory: shadyTemplateFactory(i)
    }, r)), n) {
        var h = parts.get(o);
        parts.delete(o);
        var l = h.value instanceof TemplateInstance ? h.value.template : void 0;
        prepareTemplateStyles(i, o, l), removeNodes(e, e.firstChild), e.appendChild(o), parts.set(e, h);
    }
    !a && s && window.ShadyCSS.styleElement(e.host);
}, _a;
window.JSCompiler_renameProperty = (t, e)=>t
;
var defaultConverter = {
    toAttribute (t, e) {
        switch(e){
            case Boolean:
                return t ? "" : null;
            case Object:
            case Array:
                return null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, e) {
        switch(e){
            case Boolean:
                return null !== t;
            case Number:
                return null === t ? null : Number(t);
            case Object:
            case Array:
                return JSON.parse(t);
        }
        return t;
    }
}, notEqual = (t, e)=>e !== t && (e == e || t == t)
, defaultPropertyDeclaration = {
    attribute: !0,
    type: String,
    converter: defaultConverter,
    reflect: !1,
    hasChanged: notEqual
}, STATE_HAS_UPDATED = 1, STATE_UPDATE_REQUESTED = 4, STATE_IS_REFLECTING_TO_ATTRIBUTE = 8, STATE_IS_REFLECTING_TO_PROPERTY = 16, finalized = "finalized";
class UpdatingElement extends HTMLElement {
    constructor(){
        super(), this.initialize();
    }
    static get observedAttributes() {
        this.finalize();
        var t = [];
        return this._classProperties.forEach((e, r)=>{
            var i = this._attributeNameForProperty(r, e);
            void 0 !== i && (this._attributeToPropertyMap.set(i, r), t.push(i));
        }), t;
    }
    static _ensureClassProperties() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
            this._classProperties = new Map;
            var t36 = Object.getPrototypeOf(this)._classProperties;
            void 0 !== t36 && t36.forEach((t, e)=>this._classProperties.set(e, t)
            );
        }
    }
    static createProperty(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : defaultPropertyDeclaration;
        if (this._ensureClassProperties(), this._classProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
            var r = "symbol" == typeof t ? Symbol() : "__".concat(t), i = this.getPropertyDescriptor(t, r, e);
            void 0 !== i && Object.defineProperty(this.prototype, t, i);
        }
    }
    static getPropertyDescriptor(t, e, r) {
        return {
            get () {
                return this[e];
            },
            set (i) {
                var a = this[t];
                this[e] = i, this.requestUpdateInternal(t, a, r);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this._classProperties && this._classProperties.get(t) || defaultPropertyDeclaration;
    }
    static finalize() {
        var t = Object.getPrototypeOf(this);
        if (t.hasOwnProperty(finalized) || t.finalize(), this[finalized] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
            var e = this.properties, r = [
                ...Object.getOwnPropertyNames(e),
                ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []
            ];
            for (var i of r)this.createProperty(i, e[i]);
        }
    }
    static _attributeNameForProperty(t, e) {
        var r = e.attribute;
        return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    static _valueHasChanged(t, e) {
        return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : notEqual)(t, e);
    }
    static _propertyValueFromAttribute(t, e) {
        var r = e.type, i = e.converter || defaultConverter, a = "function" == typeof i ? i : i.fromAttribute;
        return a ? a(t, r) : t;
    }
    static _propertyValueToAttribute(t, e) {
        if (void 0 !== e.reflect) {
            var r = e.type, i = e.converter;
            return (i && i.toAttribute || defaultConverter.toAttribute)(t, r);
        }
    }
    initialize() {
        this._updateState = 0, this._updatePromise = new Promise((t)=>this._enableUpdatingResolver = t
        ), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal();
    }
    _saveInstanceProperties() {
        this.constructor._classProperties.forEach((t, e)=>{
            if (this.hasOwnProperty(e)) {
                var r = this[e];
                delete this[e], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(e, r);
            }
        });
    }
    _applyInstanceProperties() {
        this._instanceProperties.forEach((t, e)=>this[e] = t
        ), this._instanceProperties = void 0;
    }
    connectedCallback() {
        this.enableUpdating();
    }
    enableUpdating() {
        void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(t, e, r) {
        e !== r && this._attributeToProperty(t, r);
    }
    _propertyToAttribute(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : defaultPropertyDeclaration, i = this.constructor, a = i._attributeNameForProperty(t, r);
        if (void 0 !== a) {
            var s = i._propertyValueToAttribute(e, r);
            if (void 0 === s) return;
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE, null == s ? this.removeAttribute(a) : this.setAttribute(a, s), this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(t, e) {
        if (!(this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE)) {
            var r = this.constructor, i = r._attributeToPropertyMap.get(t);
            if (void 0 !== i) {
                var a = r.getPropertyOptions(i);
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY, this[i] = r._propertyValueFromAttribute(e, a), this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
            }
        }
    }
    requestUpdateInternal(t, e, r) {
        var i = !0;
        if (void 0 !== t) {
            var a = this.constructor;
            r = r || a.getPropertyOptions(t), a._valueHasChanged(this[t], e, r.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e), !0 !== r.reflect || this._updateState & STATE_IS_REFLECTING_TO_PROPERTY || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(t, r))) : i = !1;
        }
        !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate());
    }
    requestUpdate(t, e) {
        return this.requestUpdateInternal(t, e), this.updateComplete;
    }
    _enqueueUpdate() {
        var t = this;
        return _asyncToGenerator(function*() {
            t._updateState = t._updateState | STATE_UPDATE_REQUESTED;
            try {
                yield t._updatePromise;
            } catch (t38) {
            }
            var e = t.performUpdate();
            return null != e && (yield e), !t._hasRequestedUpdate;
        })();
    }
    get _hasRequestedUpdate() {
        return this._updateState & STATE_UPDATE_REQUESTED;
    }
    get hasUpdated() {
        return this._updateState & STATE_HAS_UPDATED;
    }
    performUpdate() {
        if (this._hasRequestedUpdate) {
            this._instanceProperties && this._applyInstanceProperties();
            var t = !1, e = this._changedProperties;
            try {
                (t = this.shouldUpdate(e)) ? this.update(e) : this._markUpdated();
            } catch (e23) {
                throw t = !1, this._markUpdated(), e23;
            }
            t && (this._updateState & STATE_HAS_UPDATED || (this._updateState = this._updateState | STATE_HAS_UPDATED, this.firstUpdated(e)), this.updated(e));
        }
    }
    _markUpdated() {
        this._changedProperties = new Map, this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    get updateComplete() {
        return this._getUpdateComplete();
    }
    _getUpdateComplete() {
        return this._updatePromise;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t39) {
        void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, e)=>this._propertyToAttribute(e, this[e], t)
        ), this._reflectingProperties = void 0), this._markUpdated();
    }
    updated(t) {
    }
    firstUpdated(t) {
    }
}
_a = finalized, UpdatingElement[_a] = !0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var legacyCustomElement = (t, e)=>(window.customElements.define(t, e), e)
, standardCustomElement = (t, e24)=>{
    var { kind: r , elements: i  } = e24;
    return {
        kind: r,
        elements: i,
        finisher (e) {
            window.customElements.define(t, e);
        }
    };
}, customElement = (t)=>(e)=>"function" == typeof e ? legacyCustomElement(t, e) : standardCustomElement(t, e)
, standardProperty = (t, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({
    }, e), {
        finisher (r) {
            r.createProperty(e.key, t);
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {
        },
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (r) {
            r.createProperty(e.key, t);
        }
    }
, legacyProperty = (t, e, r)=>{
    e.constructor.createProperty(r, t);
};
function property(t) {
    return (e, r)=>void 0 !== r ? legacyProperty(t, e, r) : standardProperty(t, e)
    ;
}
function internalProperty(t) {
    return property({
        attribute: !1,
        hasChanged: null == t ? void 0 : t.hasChanged
    });
}
function query(t, e) {
    return (r, i)=>{
        var a = {
            get () {
                return this.renderRoot.querySelector(t);
            },
            enumerable: !0,
            configurable: !0
        };
        if (e) {
            var s = "symbol" == typeof i ? Symbol() : "__".concat(i);
            a.get = function() {
                return void 0 === this[s] && (this[s] = this.renderRoot.querySelector(t)), this[s];
            };
        }
        return void 0 !== i ? legacyQuery(a, r, i) : standardQuery(a, r);
    };
}
function queryAsync(t) {
    return (e25, r)=>{
        var i = {
            get () {
                var e = this;
                return _asyncToGenerator(function*() {
                    return yield e.updateComplete, e.renderRoot.querySelector(t);
                })();
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== r ? legacyQuery(i, e25, r) : standardQuery(i, e25);
    };
}
function queryAll(t) {
    return (e, r)=>{
        var i = {
            get () {
                return this.renderRoot.querySelectorAll(t);
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== r ? legacyQuery(i, e, r) : standardQuery(i, e);
    };
}
var legacyQuery = (t, e, r)=>{
    Object.defineProperty(e, r, t);
}, standardQuery = (t, e)=>({
        kind: "method",
        placement: "prototype",
        key: e.key,
        descriptor: t
    })
, standardEventOptions = (t, e)=>Object.assign(Object.assign({
    }, e), {
        finisher (r) {
            Object.assign(r.prototype[e.key], t);
        }
    })
, legacyEventOptions = (t, e, r)=>{
    Object.assign(e[r], t);
};
function eventOptions(t) {
    return (e, r)=>void 0 !== r ? legacyEventOptions(t, e, r) : standardEventOptions(t, e)
    ;
}
var ElementProto = Element.prototype, legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;
function queryAssignedNodes() {
    var t40 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return (i8, a3)=>{
        var s4 = {
            get () {
                var i = "slot".concat(t40 ? "[name=".concat(t40, "]") : ":not([name])"), a = this.renderRoot.querySelector(i), s = a && a.assignedNodes({
                    flatten: e
                });
                return s && r && (s = s.filter((t)=>t.nodeType === Node.ELEMENT_NODE && t.matches ? t.matches(r) : legacyMatches.call(t, r)
                )), s;
            },
            enumerable: !0,
            configurable: !0
        };
        return void 0 !== a3 ? legacyQuery(s4, i8, a3) : standardQuery(s4, i8);
    };
}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ var supportsAdoptingStyleSheets = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, constructionToken = Symbol();
class CSSResult {
    constructor(t, e){
        if (e !== constructionToken) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t;
    }
    get styleSheet() {
        return void 0 === this._styleSheet && (supportsAdoptingStyleSheets ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
var unsafeCSS = (t)=>new CSSResult(String(t), constructionToken)
, textFromCSSResult = (t)=>{
    if (t instanceof CSSResult) return t.cssText;
    if ("number" == typeof t) return t;
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
}, css = function(t) {
    for(var e26 = arguments.length, r11 = new Array(e26 > 1 ? e26 - 1 : 0), i = 1; i < e26; i++)r11[i - 1] = arguments[i];
    var a = r11.reduce((e, r, i)=>e + textFromCSSResult(r) + t[i + 1]
    , t[0]);
    return new CSSResult(a, constructionToken);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ (window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
var renderNotImplemented = {
};
class LitElement extends UpdatingElement {
    static getStyles() {
        return this.styles;
    }
    static _getUniqueStyles() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) {
            var t41 = this.getStyles();
            if (Array.isArray(t41)) {
                var e = (t43, r15)=>t43.reduceRight((t, r)=>Array.isArray(r) ? e(r, t) : (t.add(r), t)
                    , r15)
                , r12 = e(t41, new Set), i = [];
                r12.forEach((t)=>i.unshift(t)
                ), this._styles = i;
            } else this._styles = void 0 === t41 ? [] : [
                t41
            ];
            this._styles = this._styles.map((t44)=>{
                if (t44 instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                    var e27 = Array.prototype.slice.call(t44.cssRules).reduce((t, e)=>t + e.cssText
                    , "");
                    return unsafeCSS(e27);
                }
                return t44;
            });
        }
    }
    initialize() {
        super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
    }
    createRenderRoot() {
        return this.attachShadow({
            mode: "open"
        });
    }
    adoptStyles() {
        var t45 = this.constructor._styles;
        0 !== t45.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? supportsAdoptingStyleSheets ? this.renderRoot.adoptedStyleSheets = t45.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet
        ) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t45.map((t)=>t.cssText
        ), this.localName));
    }
    connectedCallback() {
        super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
    }
    update(t46) {
        var e29 = this.render();
        super.update(t46), e29 !== renderNotImplemented && this.constructor.render(e29, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
        }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((t)=>{
            var e = document.createElement("style");
            e.textContent = t.cssText, this.renderRoot.appendChild(e);
        }));
    }
    render() {
        return renderNotImplemented;
    }
}
LitElement.finalized = !0, LitElement.render = render;
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
};
function createCommonjsModule(t47, e30, r) {
    return t47(r = {
        path: e30,
        exports: {
        },
        require: function(t, e) {
            return commonjsRequire(t, null == e ? r.path : e);
        }
    }, r.exports), r.exports;
}
function getCjsExportFromNamespace(t) {
    return t && t.default || t;
}
function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var lottie = createCommonjsModule(function(module) {
    "undefined" != typeof navigator && (function(t, e) {
        module.exports ? module.exports = e(t) : (t.lottie = e(t), t.bodymovin = t.lottie);
    })(window || {
    }, function(window) {
        var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, _useWebWorker = !1, subframeEnabled = !0, idPrefix = "", expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {
        }, bmRnd, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {
        };
        function ProjectInterface() {
            return {
            };
        }
        !function() {
            var t, e = [
                "abs",
                "acos",
                "acosh",
                "asin",
                "asinh",
                "atan",
                "atanh",
                "atan2",
                "ceil",
                "cbrt",
                "expm1",
                "clz32",
                "cos",
                "cosh",
                "exp",
                "floor",
                "fround",
                "hypot",
                "imul",
                "log",
                "log1p",
                "log2",
                "log10",
                "max",
                "min",
                "pow",
                "random",
                "round",
                "sign",
                "sin",
                "sinh",
                "sqrt",
                "tan",
                "tanh",
                "trunc",
                "E",
                "LN10",
                "LN2",
                "LOG10E",
                "LOG2E",
                "PI",
                "SQRT1_2",
                "SQRT2"
            ], r = e.length;
            for(t = 0; t < r; t += 1)BMMath[e[t]] = Math[e[t]];
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
            if ("object" === typeof t && t.length) {
                var e, r = createSizedArray(t.length), i = t.length;
                for(e = 0; e < i; e += 1)r[e] = Math.abs(t[e]);
                return r;
            }
            return Math.abs(t);
        };
        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
        function roundValues(t48) {
            bmRnd = t48 ? Math.round : function(t) {
                return t;
            };
        }
        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
        }
        function BMEnterFrameEvent(t, e, r, i) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
        }
        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1;
        }
        function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
        }
        function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r;
        }
        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e;
        }
        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
        }
        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t;
        }
        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e;
        }
        roundValues(!1);
        var createElementID = (_count = 0, function() {
            return idPrefix + "__lottie_element_" + (_count += 1);
        }), _count;
        function HSVtoRGB(t, e, r) {
            var i, a, s, n, o, h, l, p;
            switch(h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6){
                case 0:
                    i = r, a = p, s = h;
                    break;
                case 1:
                    i = l, a = r, s = h;
                    break;
                case 2:
                    i = h, a = r, s = p;
                    break;
                case 3:
                    i = h, a = l, s = r;
                    break;
                case 4:
                    i = p, a = h, s = r;
                    break;
                case 5:
                    i = r, a = h, s = l;
            }
            return [
                i,
                a,
                s
            ];
        }
        function RGBtoHSV(t, e, r) {
            var i, a = Math.max(t, e, r), s = Math.min(t, e, r), n = a - s, o = 0 === a ? 0 : n / a, h = a / 255;
            switch(a){
                case s:
                    i = 0;
                    break;
                case t:
                    i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
                    break;
                case e:
                    i = r - t + 2 * n, i /= 6 * n;
                    break;
                case r:
                    i = t - e + 4 * n, i /= 6 * n;
            }
            return [
                i,
                o,
                h
            ];
        }
        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
        }
        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
        }
        function addHueToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
        }
        var rgbToHex = function() {
            var t49, e31, r = [];
            for(t49 = 0; t49 < 256; t49 += 1)e31 = t49.toString(16), r[t49] = 1 === e31.length ? "0" + e31 : e31;
            return function(t, e, i) {
                return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i];
            };
        }();
        function BaseEvent() {
        }
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t]) for(var r = this._cbs[t], i = 0; i < r.length; i += 1)r[i](e);
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                    this.removeEventListener(t, e);
                }).bind(this);
            },
            removeEventListener: function(t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for(var r = 0, i = this._cbs[t].length; r < i;)this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                        this._cbs[t].length || (this._cbs[t] = null);
                    }
                } else this._cbs[t] = null;
            }
        };
        var createTypedArray = function() {
            function t50(t, e) {
                var r, i = 0, a = [];
                switch(t){
                    case "int16":
                    case "uint8c":
                        r = 1;
                        break;
                    default:
                        r = 1.1;
                }
                for(i = 0; i < e; i += 1)a.push(r);
                return a;
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
                return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t50(e, r);
            } : t50;
        }();
        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            });
        }
        function createNS(t) {
            return document.createElementNS(svgNS, t);
        }
        function createTag(t) {
            return document.createElement(t);
        }
        function DynamicPropertyContainer() {
        }
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
            },
            iterateDynamicProperties: function() {
                var t;
                this._mdf = !1;
                var e = this.dynamicProperties.length;
                for(t = 0; t < e; t += 1)this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function(t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
            }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
        }, function(t) {
            return blendModeEnums[t] || "";
        }), blendModeEnums, lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
        }, lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
        }, Matrix = function() {
            var t51 = Math.cos, e32 = Math.sin, r16 = Math.tan, i9 = Math.round;
            function a4() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function s5(r) {
                if (0 === r) return this;
                var i = t51(r), a = e32(r);
                return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n1(r) {
                if (0 === r) return this;
                var i = t51(r), a = e32(r);
                return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1);
            }
            function o2(r) {
                if (0 === r) return this;
                var i = t51(r), a = e32(r);
                return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1);
            }
            function h1(r) {
                if (0 === r) return this;
                var i = t51(r), a = e32(r);
                return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function l1(t, e) {
                return this._t(1, e, t, 1, 0, 0);
            }
            function p1(t, e) {
                return this.shear(r16(t), r16(e));
            }
            function c1(i, a) {
                var s = t51(a), n = e32(a);
                return this._t(s, n, 0, 0, -n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r16(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f1(t, e, r) {
                return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1);
            }
            function d1(t, e, r, i, a, s, n, o, h, l, p, c, f, d, m, u) {
                return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = a, this.props[5] = s, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = d, this.props[14] = m, this.props[15] = u, this;
            }
            function m1(t, e, r) {
                return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this;
            }
            function u1(t, e, r, i, a, s, n, o, h, l, p, c, f, d, m, u) {
                var y = this.props;
                if (1 === t && 0 === e && 0 === r && 0 === i && 0 === a && 1 === s && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * s + y[15] * d, y[14] = y[14] * p + y[15] * m, y[15] *= u, this._identityCalculated = !1, this;
                var g = y[0], v = y[1], b = y[2], _ = y[3], P = y[4], S = y[5], E = y[6], x = y[7], A = y[8], w = y[9], C = y[10], T = y[11], k = y[12], D = y[13], M = y[14], F = y[15];
                return y[0] = g * t + v * a + b * h + _ * f, y[1] = g * e + v * s + b * l + _ * d, y[2] = g * r + v * n + b * p + _ * m, y[3] = g * i + v * o + b * c + _ * u, y[4] = P * t + S * a + E * h + x * f, y[5] = P * e + S * s + E * l + x * d, y[6] = P * r + S * n + E * p + x * m, y[7] = P * i + S * o + E * c + x * u, y[8] = A * t + w * a + C * h + T * f, y[9] = A * e + w * s + C * l + T * d, y[10] = A * r + w * n + C * p + T * m, y[11] = A * i + w * o + C * c + T * u, y[12] = k * t + D * a + M * h + F * f, y[13] = k * e + D * s + M * l + F * d, y[14] = k * r + D * n + M * p + F * m, y[15] = k * i + D * o + M * c + F * u, this._identityCalculated = !1, this;
            }
            function y1() {
                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity;
            }
            function g1(t) {
                for(var e = 0; e < 16;){
                    if (t.props[e] !== this.props[e]) return !1;
                    e += 1;
                }
                return !0;
            }
            function v1(t) {
                var e;
                for(e = 0; e < 16; e += 1)t.props[e] = this.props[e];
                return t;
            }
            function b1(t) {
                var e;
                for(e = 0; e < 16; e += 1)this.props[e] = t[e];
            }
            function _1(t, e, r) {
                return {
                    x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                    y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                    z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                };
            }
            function P1(t, e, r) {
                return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12];
            }
            function S1(t, e, r) {
                return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13];
            }
            function E1(t, e, r) {
                return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14];
            }
            function x1() {
                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4], e = this.props[5] / t, r = -this.props[1] / t, i = -this.props[4] / t, a = this.props[0] / t, s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t, n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t, o = new Matrix;
                return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = a, o.props[12] = s, o.props[13] = n, o;
            }
            function A1(t) {
                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
            }
            function w1(t) {
                var e, r = t.length, i = [];
                for(e = 0; e < r; e += 1)i[e] = A1(t[e]);
                return i;
            }
            function C1(t, e, r) {
                var i = createTypedArray("float32", 6);
                if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
                else {
                    var a = this.props[0], s = this.props[1], n = this.props[4], o = this.props[5], h = this.props[12], l = this.props[13];
                    i[0] = t[0] * a + t[1] * n + h, i[1] = t[0] * s + t[1] * o + l, i[2] = e[0] * a + e[1] * n + h, i[3] = e[0] * s + e[1] * o + l, i[4] = r[0] * a + r[1] * n + h, i[5] = r[0] * s + r[1] * o + l;
                }
                return i;
            }
            function T1(t, e, r) {
                return this.isIdentity() ? [
                    t,
                    e,
                    r
                ] : [
                    t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                    t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                    t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                ];
            }
            function k1(t, e) {
                if (this.isIdentity()) return t + "," + e;
                var r = this.props;
                return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100;
            }
            function D1() {
                for(var t = 0, e = this.props, r = "matrix3d("; t < 16;)r += i9(10000 * e[t]) / 10000, r += 15 === t ? ")" : ",", t += 1;
                return r;
            }
            function M1(t) {
                return t < 0.000001 && t > 0 || t > -0.000001 && t < 0 ? i9(10000 * t) / 10000 : t;
            }
            function F1() {
                var t = this.props;
                return "matrix(" + M1(t[0]) + "," + M1(t[1]) + "," + M1(t[4]) + "," + M1(t[5]) + "," + M1(t[12]) + "," + M1(t[13]) + ")";
            }
            return function() {
                this.reset = a4, this.rotate = s5, this.rotateX = n1, this.rotateY = o2, this.rotateZ = h1, this.skew = p1, this.skewFromAxis = c1, this.shear = l1, this.scale = f1, this.setTransform = d1, this.translate = m1, this.transform = u1, this.applyToPoint = _1, this.applyToX = P1, this.applyToY = S1, this.applyToZ = E1, this.applyToPointArray = T1, this.applyToTriplePoints = C1, this.applyToPointStringified = k1, this.toCSS = D1, this.to2dCSS = F1, this.clone = v1, this.cloneFromProps = b1, this.equals = g1, this.inversePoints = w1, this.inversePoint = A1, this.getInverseMatrix = x1, this._t = this.transform, this.isIdentity = y1, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
            };
        }();
        !function(t52, e33) {
            var r17 = this, i10 = e33.pow(256, 6), a5 = e33.pow(2, 52), s6 = 2 * a5;
            function n2(t53) {
                var e34, r18 = t53.length, i = this, a6 = 0, s7 = i.i = i.j = 0, n3 = i.S = [];
                for(r18 || (t53 = [
                    r18++
                ]); a6 < 256;)n3[a6] = a6++;
                for(a6 = 0; a6 < 256; a6++)n3[a6] = n3[s7 = 255 & s7 + t53[a6 % r18] + (e34 = n3[a6])], n3[s7] = e34;
                i.g = function(t) {
                    for(var e, r = 0, a = i.i, s = i.j, n = i.S; t--;)e = n[a = 255 & a + 1], r = 256 * r + n[255 & (n[a] = n[s = 255 & s + e]) + (n[s] = e)];
                    return i.i = a, i.j = s, r;
                };
            }
            function o(t, e) {
                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e;
            }
            function h(t, e) {
                for(var r, i = t + "", a = 0; a < i.length;)e[255 & a] = 255 & (r ^= 19 * e[255 & a]) + i.charCodeAt(a++);
                return l(e);
            }
            function l(t) {
                return String.fromCharCode.apply(0, t);
            }
            e33.seedrandom = function(p, c, f) {
                var d = [], m = h(function t(e, r) {
                    var i, a = [], s = typeof e;
                    if (r && "object" == s) for(i in e)try {
                        a.push(t(e[i], r - 1));
                    } catch (t54) {
                    }
                    return a.length ? a : "string" == s ? e : e + "\0";
                }((c = !0 === c ? {
                    entropy: !0
                } : c || {
                }).entropy ? [
                    p,
                    l(t52)
                ] : null === p ? function() {
                    try {
                        var e = new Uint8Array(256);
                        return (r17.crypto || r17.msCrypto).getRandomValues(e), l(e);
                    } catch (e) {
                        var i = r17.navigator, a = i && i.plugins;
                        return [
                            +new Date,
                            r17,
                            a,
                            r17.screen,
                            l(t52)
                        ];
                    }
                }() : p, 3), d), u = new n2(d), y = function() {
                    for(var t = u.g(6), e = i10, r = 0; t < a5;)t = 256 * (t + r), e *= 256, r = u.g(1);
                    for(; t >= s6;)t /= 2, e /= 2, r >>>= 1;
                    return (t + r) / e;
                };
                return y.int32 = function() {
                    return 0 | u.g(4);
                }, y.quick = function() {
                    return u.g(4) / 4294967296;
                }, y.double = y, h(l(u.S), t52), (c.pass || f || function(t, r, i, a) {
                    return a && (a.S && o(a, u), t.state = function() {
                        return o(u, {
                        });
                    }), i ? (e33.random = t, r) : t;
                })(y, m, "global" in c ? c.global : this == e33, c.state);
            }, h(e33.random(), t52);
        }([], BMMath);
        var BezierFactory = function() {
            var t55 = {
                getBezierEasing: function(t, r, i, a, s) {
                    var n = s || ("bez_" + t + "_" + r + "_" + i + "_" + a).replace(/\./g, "p");
                    if (e35[n]) return e35[n];
                    var o = new h2([
                        t,
                        r,
                        i,
                        a
                    ]);
                    return e35[n] = o, o;
                }
            }, e35 = {
            };
            var r19 = "function" == typeof Float32Array;
            function i11(t, e) {
                return 1 - 3 * e + 3 * t;
            }
            function a7(t, e) {
                return 3 * e - 6 * t;
            }
            function s8(t) {
                return 3 * t;
            }
            function n(t, e, r) {
                return ((i11(e, r) * t + a7(e, r)) * t + s8(e)) * t;
            }
            function o3(t, e, r) {
                return 3 * i11(e, r) * t * t + 2 * a7(e, r) * t + s8(e);
            }
            function h2(t) {
                this._p = t, this._mSampleValues = r19 ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return h2.prototype = {
                get: function(t) {
                    var e = this._p[0], r = this._p[1], i = this._p[2], a = this._p[3];
                    return this._precomputed || this._precompute(), e === r && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : n(this._getTForX(t), r, a);
                },
                _precompute: function() {
                    var t = this._p[0], e = this._p[1], r = this._p[2], i = this._p[3];
                    this._precomputed = !0, t === e && r === i || this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r)this._mSampleValues[r] = n(0.1 * r, t, e);
                },
                _getTForX: function(t56) {
                    for(var e36 = this._p[0], r20 = this._p[2], i12 = this._mSampleValues, a8 = 0, s9 = 1; 10 !== s9 && i12[s9] <= t56; ++s9)a8 += 0.1;
                    var h3 = a8 + 0.1 * ((t56 - i12[--s9]) / (i12[s9 + 1] - i12[s9])), l = o3(h3, e36, r20);
                    return l >= 0.001 ? (function(t, e, r, i) {
                        for(var a = 0; a < 4; ++a){
                            var s = o3(e, r, i);
                            if (0 === s) return e;
                            e -= (n(e, r, i) - t) / s;
                        }
                        return e;
                    })(t56, h3, e36, r20) : 0 === l ? h3 : (function(t, e, r, i, a) {
                        var s, o, h = 0;
                        do (s = n(o = e + (r - e) / 2, i, a) - t) > 0 ? r = o : e = o;
                        while (Math.abs(s) > 0.0000001 && ++h < 10)
                        return o;
                    })(t56, a8, a8 + 0.1, e36, r20);
                }
            }, t55;
        }();
        function extendPrototype(t, e) {
            var r, i, a = t.length;
            for(r = 0; r < a; r += 1)for(var s in i = t[r].prototype)Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s]);
        }
        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e);
        }
        function createProxyFunction(t) {
            function e() {
            }
            return e.prototype = t, e;
        }
        function bezFunction() {
            var t57 = Math;
            function e37(t, e, r, i, a, s) {
                var n = t * i + e * a + r * s - a * i - s * t - r * e;
                return n > -0.001 && n < 0.001;
            }
            var r21 = function(t, e, r, i) {
                var a, s, n, o, h, l, p = defaultCurveSegments, c = 0, f = [], d = [], m = bezierLengthPool.newElement();
                for(n = r.length, a = 0; a < p; a += 1){
                    for(h = a / (p - 1), l = 0, s = 0; s < n; s += 1)o = bmPow(1 - h, 3) * t[s] + 3 * bmPow(1 - h, 2) * h * r[s] + 3 * (1 - h) * bmPow(h, 2) * i[s] + bmPow(h, 3) * e[s], f[s] = o, null !== d[s] && (l += bmPow(f[s] - d[s], 2)), d[s] = f[s];
                    l && (c += l = bmSqrt(l)), m.percents[a] = h, m.lengths[a] = c;
                }
                return m.addedLength = c, m;
            };
            function i13(t) {
                this.segmentLength = 0, this.points = new Array(t);
            }
            function a9(t, e) {
                this.partialLength = t, this.point = e;
            }
            var s10, n4 = (s10 = {
            }, function(t, r, n, o) {
                var h = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                if (!s10[h]) {
                    var l, p, c, f, d, m, u, y = defaultCurveSegments, g = 0, v = null;
                    2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e37(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) && e37(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (y = 2);
                    var b = new i13(y);
                    for(c = n.length, l = 0; l < y; l += 1){
                        for(u = createSizedArray(c), d = l / (y - 1), m = 0, p = 0; p < c; p += 1)f = bmPow(1 - d, 3) * t[p] + 3 * bmPow(1 - d, 2) * d * (t[p] + n[p]) + 3 * (1 - d) * bmPow(d, 2) * (r[p] + o[p]) + bmPow(d, 3) * r[p], u[p] = f, null !== v && (m += bmPow(u[p] - v[p], 2));
                        g += m = bmSqrt(m), b.points[l] = new a9(m, u), v = u;
                    }
                    b.segmentLength = g, s10[h] = b;
                }
                return s10[h];
            });
            function o4(t, e) {
                var r = e.percents, i = e.lengths, a = r.length, s = bmFloor((a - 1) * t), n = t * e.addedLength, o = 0;
                if (s === a - 1 || 0 === s || n === i[s]) return r[s];
                for(var h = i[s] > n ? -1 : 1, l = !0; l;)if (i[s] <= n && i[s + 1] > n ? (o = (n - i[s]) / (i[s + 1] - i[s]), l = !1) : s += h, s < 0 || s >= a - 1) {
                    if (s === a - 1) return r[s];
                    l = !1;
                }
                return r[s] + (r[s + 1] - r[s]) * o;
            }
            var h4 = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(t) {
                    var e, i = segmentsLengthPool.newElement(), a = t.c, s = t.v, n = t.o, o = t.i, h = t._length, l = i.lengths, p = 0;
                    for(e = 0; e < h - 1; e += 1)l[e] = r21(s[e], s[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
                    return a && h && (l[e] = r21(s[e], s[0], n[e], o[0]), p += l[e].addedLength), i.totalLength = p, i;
                },
                getNewSegment: function(e, r, i, a, s, n, l) {
                    s < 0 ? s = 0 : s > 1 && (s = 1);
                    var p, c = o4(s, l), f = o4(n = n > 1 ? 1 : n, l), d = e.length, m = 1 - c, u = 1 - f, y = m * m * m, g = c * m * m * 3, v = c * c * m * 3, b = c * c * c, _ = m * m * u, P = c * m * u + m * c * u + m * m * f, S = c * c * u + m * c * f + c * m * f, E = c * c * f, x = m * u * u, A = c * u * u + m * f * u + m * u * f, w = c * f * u + m * f * f + c * u * f, C = c * f * f, T = u * u * u, k = f * u * u + u * f * u + u * u * f, D = f * f * u + u * f * f + f * u * f, M = f * f * f;
                    for(p = 0; p < d; p += 1)h4[4 * p] = t57.round(1000 * (y * e[p] + g * i[p] + v * a[p] + b * r[p])) / 1000, h4[4 * p + 1] = t57.round(1000 * (_ * e[p] + P * i[p] + S * a[p] + E * r[p])) / 1000, h4[4 * p + 2] = t57.round(1000 * (x * e[p] + A * i[p] + w * a[p] + C * r[p])) / 1000, h4[4 * p + 3] = t57.round(1000 * (T * e[p] + k * i[p] + D * a[p] + M * r[p])) / 1000;
                    return h4;
                },
                getPointInSegment: function(e, r, i, a, s, n) {
                    var h = o4(s, n), l = 1 - h;
                    return [
                        t57.round(1000 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * i[0] + (h * h * l + l * h * h + h * l * h) * a[0] + h * h * h * r[0])) / 1000,
                        t57.round(1000 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * i[1] + (h * h * l + l * h * h + h * l * h) * a[1] + h * h * h * r[1])) / 1000
                    ];
                },
                buildBezierData: n4,
                pointOnLine2D: e37,
                pointOnLine3D: function(r, i, a, s, n, o, h, l, p) {
                    if (0 === a && 0 === o && 0 === p) return e37(r, i, s, n, h, l);
                    var c, f = t57.sqrt(t57.pow(s - r, 2) + t57.pow(n - i, 2) + t57.pow(o - a, 2)), d = t57.sqrt(t57.pow(h - r, 2) + t57.pow(l - i, 2) + t57.pow(p - a, 2)), m = t57.sqrt(t57.pow(h - s, 2) + t57.pow(l - n, 2) + t57.pow(p - o, 2));
                    return (c = f > d ? f > m ? f - d - m : m - d - f : m > d ? m - d - f : d - f - m) > -0.0001 && c < 0.0001;
                }
            };
        }
        !function() {
            for(var t58 = 0, e38 = [
                "ms",
                "moz",
                "webkit",
                "o"
            ], r22 = 0; r22 < e38.length && !window.requestAnimationFrame; ++r22)window.requestAnimationFrame = window[e38[r22] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e38[r22] + "CancelAnimationFrame"] || window[e38[r22] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                var r = (new Date).getTime(), i = Math.max(0, 16 - (r - t58)), a = setTimeout(function() {
                    e(r + i);
                }, i);
                return t58 = r + i, a;
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t);
            });
        }();
        var bez = bezFunction(), dataManager = function() {
            var t59, e39, r23 = 1, i14 = [], a10 = {
                onmessage: function() {
                },
                postMessage: function(e) {
                    t59({
                        data: e
                    });
                }
            }, _workerSelf = {
                postMessage: function(t) {
                    a10.onmessage({
                        data: t
                    });
                }
            };
            function s11() {
                e39 || ((e39 = (function(e) {
                    if (window.Worker && window.Blob && _useWebWorker) {
                        var r = new Blob([
                            "var _workerSelf = self; self.onmessage = ",
                            e.toString()
                        ], {
                            type: "text/javascript"
                        }), i = URL.createObjectURL(r);
                        return new Worker(i);
                    }
                    return t59 = e, a10;
                })(function(t60) {
                    if (_workerSelf.dataManager || (_workerSelf.dataManager = (function() {
                        function t61(a, s) {
                            var n, o, h, l, p, f, d = a.length;
                            for(o = 0; o < d; o += 1)if ("ks" in (n = a[o]) && !n.completed) {
                                if (n.completed = !0, n.tt && (a[o - 1].td = n.tt), n.hasMask) {
                                    var m = n.masksProperties;
                                    for(l = m.length, h = 0; h < l; h += 1)if (m[h].pt.k.i) i15(m[h].pt.k);
                                    else for(f = m[h].pt.k.length, p = 0; p < f; p += 1)m[h].pt.k[p].s && i15(m[h].pt.k[p].s[0]), m[h].pt.k[p].e && i15(m[h].pt.k[p].e[0]);
                                }
                                0 === n.ty ? (n.layers = e41(n.refId, s), t61(n.layers, s)) : 4 === n.ty ? r24(n.shapes) : 5 === n.ty && c(n);
                            }
                        }
                        function e41(t, e) {
                            for(var r = 0, i = e.length; r < i;){
                                if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
                                r += 1;
                            }
                            return null;
                        }
                        function r24(t) {
                            var e, a, s;
                            for(e = t.length - 1; e >= 0; e -= 1)if ("sh" === t[e].ty) {
                                if (t[e].ks.k.i) i15(t[e].ks.k);
                                else for(s = t[e].ks.k.length, a = 0; a < s; a += 1)t[e].ks.k[a].s && i15(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && i15(t[e].ks.k[a].e[0]);
                            } else "gr" === t[e].ty && r24(t[e].it);
                        }
                        function i15(t) {
                            var e, r = t.i.length;
                            for(e = 0; e < r; e += 1)t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1];
                        }
                        function a11(t, e) {
                            var r = e ? e.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null));
                        }
                        var s12, n6 = function() {
                            var t62 = [
                                4,
                                4,
                                14
                            ];
                            function e42(t) {
                                var e, r, i, a = t.length;
                                for(e = 0; e < a; e += 1)5 === t[e].ty && (r = t[e], i = void 0, i = r.t.d, r.t.d = {
                                    k: [
                                        {
                                            s: i,
                                            t: 0
                                        }
                                    ]
                                });
                            }
                            return function(r) {
                                if (a11(t62, r.v) && (e42(r.layers), r.assets)) {
                                    var i, s = r.assets.length;
                                    for(i = 0; i < s; i += 1)r.assets[i].layers && e42(r.assets[i].layers);
                                }
                            };
                        }(), o5 = (s12 = [
                            4,
                            7,
                            99
                        ], function(t) {
                            if (t.chars && !a11(s12, t.v)) {
                                var e, r, n, o, h, l = t.chars.length;
                                for(e = 0; e < l; e += 1)if (t.chars[e].data && t.chars[e].data.shapes) for(n = (h = t.chars[e].data.shapes[0].it).length, r = 0; r < n; r += 1)(o = h[r].ks.k).__converted || (i15(h[r].ks.k), o.__converted = !0);
                            }
                        }), h5 = function() {
                            var t63 = [
                                5,
                                7,
                                15
                            ];
                            function e43(t) {
                                var e, r, i, a = t.length;
                                for(e = 0; e < a; e += 1)5 === t[e].ty && (r = t[e], i = void 0, "number" == typeof (i = r.t.p).a && (i.a = {
                                    a: 0,
                                    k: i.a
                                }), "number" == typeof i.p && (i.p = {
                                    a: 0,
                                    k: i.p
                                }), "number" == typeof i.r && (i.r = {
                                    a: 0,
                                    k: i.r
                                }));
                            }
                            return function(r) {
                                if (a11(t63, r.v) && (e43(r.layers), r.assets)) {
                                    var i, s = r.assets.length;
                                    for(i = 0; i < s; i += 1)r.assets[i].layers && e43(r.assets[i].layers);
                                }
                            };
                        }(), l2 = function() {
                            var t64 = [
                                4,
                                1,
                                9
                            ];
                            function e44(t) {
                                var r, i, a, s = t.length;
                                for(r = 0; r < s; r += 1)if ("gr" === t[r].ty) e44(t[r].it);
                                else if ("fl" === t[r].ty || "st" === t[r].ty) {
                                    if (t[r].c.k && t[r].c.k[0].i) for(a = t[r].c.k.length, i = 0; i < a; i += 1)t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                                    else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255;
                                }
                            }
                            function r25(t) {
                                var r, i = t.length;
                                for(r = 0; r < i; r += 1)4 === t[r].ty && e44(t[r].shapes);
                            }
                            return function(e) {
                                if (a11(t64, e.v) && (r25(e.layers), e.assets)) {
                                    var i, s = e.assets.length;
                                    for(i = 0; i < s; i += 1)e.assets[i].layers && r25(e.assets[i].layers);
                                }
                            };
                        }(), p2 = function() {
                            var t65 = [
                                4,
                                4,
                                18
                            ];
                            function e45(t) {
                                var r, i, a;
                                for(r = t.length - 1; r >= 0; r -= 1)if ("sh" === t[r].ty) {
                                    if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                    else for(a = t[r].ks.k.length, i = 0; i < a; i += 1)t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                                } else "gr" === t[r].ty && e45(t[r].it);
                            }
                            function r26(t) {
                                var r, i, a, s, n, o, h = t.length;
                                for(i = 0; i < h; i += 1){
                                    if ((r = t[i]).hasMask) {
                                        var l = r.masksProperties;
                                        for(s = l.length, a = 0; a < s; a += 1)if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                                        else for(o = l[a].pt.k.length, n = 0; n < o; n += 1)l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl);
                                    }
                                    4 === r.ty && e45(r.shapes);
                                }
                            }
                            return function(e) {
                                if (a11(t65, e.v) && (r26(e.layers), e.assets)) {
                                    var i, s = e.assets.length;
                                    for(i = 0; i < s; i += 1)e.assets[i].layers && r26(e.assets[i].layers);
                                }
                            };
                        }();
                        function c(t) {
                            0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0);
                        }
                        var f2 = {
                            completeData: function(e) {
                                e.__complete || (l2(e), n6(e), o5(e), h5(e), p2(e), t61(e.layers, e.assets), e.__complete = !0);
                            }
                        };
                        return f2.checkColors = l2, f2.checkChars = o5, f2.checkPathProperties = h5, f2.checkShapes = p2, f2.completeLayers = t61, f2;
                    })()), _workerSelf.assetLoader || (_workerSelf.assetLoader = (function() {
                        function t66(t) {
                            var e = t.getResponseHeader("content-type");
                            return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null;
                        }
                        return {
                            load: function(e, r, i, a) {
                                var s, n = new XMLHttpRequest;
                                try {
                                    n.responseType = "json";
                                } catch (t67) {
                                }
                                n.onreadystatechange = function() {
                                    if (4 === n.readyState) {
                                        if (200 === n.status) s = t66(n), i(s);
                                        else try {
                                            s = t66(n), i(s);
                                        } catch (t) {
                                            a && a(t);
                                        }
                                    }
                                };
                                try {
                                    n.open("GET", e, !0);
                                } catch (t) {
                                    n.open("GET", r + "/" + e, !0);
                                }
                                n.send();
                            }
                        };
                    })()), "loadAnimation" === t60.data.type) _workerSelf.assetLoader.load(t60.data.path, t60.data.fullPath, function(e) {
                        _workerSelf.dataManager.completeData(e), _workerSelf.postMessage({
                            id: t60.data.id,
                            payload: e,
                            status: "success"
                        });
                    }, function() {
                        _workerSelf.postMessage({
                            id: t60.data.id,
                            status: "error"
                        });
                    });
                    else if ("complete" === t60.data.type) {
                        var e40 = t60.data.animation;
                        _workerSelf.dataManager.completeData(e40), _workerSelf.postMessage({
                            id: t60.data.id,
                            payload: e40,
                            status: "success"
                        });
                    } else "loadData" === t60.data.type && _workerSelf.assetLoader.load(t60.data.path, t60.data.fullPath, function(e) {
                        _workerSelf.postMessage({
                            id: t60.data.id,
                            payload: e,
                            status: "success"
                        });
                    }, function() {
                        _workerSelf.postMessage({
                            id: t60.data.id,
                            status: "error"
                        });
                    });
                })).onmessage = function(t) {
                    var e = t.data, r = e.id, a = i14[r];
                    i14[r] = null, "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError();
                });
            }
            function n5(t, e) {
                var a = "processId_" + (r23 += 1);
                return i14[a] = {
                    onComplete: t,
                    onError: e
                }, a;
            }
            return {
                loadAnimation: function(t, r, i) {
                    s11();
                    var a = n5(r, i);
                    e39.postMessage({
                        type: "loadAnimation",
                        path: t,
                        fullPath: window.location.origin + window.location.pathname,
                        id: a
                    });
                },
                loadData: function(t, r, i) {
                    s11();
                    var a = n5(r, i);
                    e39.postMessage({
                        type: "loadData",
                        path: t,
                        fullPath: window.location.origin + window.location.pathname,
                        id: a
                    });
                },
                completeAnimation: function(t, r, i) {
                    s11();
                    var a = n5(r, i);
                    e39.postMessage({
                        type: "complete",
                        animation: t,
                        id: a
                    });
                }
            };
        }();
        function getFontProperties(t) {
            for(var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", a = e.length, s = 0; s < a; s += 1)switch(e[s].toLowerCase()){
                case "italic":
                    i = "italic";
                    break;
                case "bold":
                    r = "700";
                    break;
                case "black":
                    r = "900";
                    break;
                case "medium":
                    r = "500";
                    break;
                case "regular":
                case "normal":
                    r = "400";
                    break;
                case "light":
                case "thin":
                    r = "200";
            }
            return {
                style: i,
                weight: t.fWeight || r
            };
        }
        var FontManager = function() {
            var t68 = {
                w: 0,
                size: 0,
                shapes: []
            }, e46 = [];
            e46 = e46.concat([
                2304,
                2305,
                2306,
                2307,
                2362,
                2363,
                2364,
                2364,
                2366,
                2367,
                2368,
                2369,
                2370,
                2371,
                2372,
                2373,
                2374,
                2375,
                2376,
                2377,
                2378,
                2379,
                2380,
                2381,
                2382,
                2383,
                2387,
                2388,
                2389,
                2390,
                2391,
                2402,
                2403
            ]);
            var r27 = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ], i16 = [
                65039,
                8205
            ];
            function a12(t69, e47) {
                var r28 = createTag("span");
                r28.setAttribute("aria-hidden", !0), r28.style.fontFamily = e47;
                var i17 = createTag("span");
                i17.innerText = "giItT1WQy@!-/#", r28.style.position = "absolute", r28.style.left = "-10000px", r28.style.top = "-10000px", r28.style.fontSize = "300px", r28.style.fontVariant = "normal", r28.style.fontStyle = "normal", r28.style.fontWeight = "normal", r28.style.letterSpacing = "0", r28.appendChild(i17), document.body.appendChild(r28);
                var a13 = i17.offsetWidth;
                return i17.style.fontFamily = (function(t) {
                    var e, r = t.split(","), i = r.length, a = [];
                    for(e = 0; e < i; e += 1)"sans-serif" !== r[e] && "monospace" !== r[e] && a.push(r[e]);
                    return a.join(",");
                })(t69) + ", " + e47, {
                    node: i17,
                    w: a13,
                    parent: r28
                };
            }
            function s13(t, e) {
                var r = createNS("text");
                r.style.fontSize = "100px";
                var i = getFontProperties(e);
                return r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", i.style), r.setAttribute("font-weight", i.weight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r;
            }
            var n7 = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            return n7.isModifier = function(t, e) {
                var i = t.toString(16) + e.toString(16);
                return -1 !== r27.indexOf(i);
            }, n7.isZeroWidthJoiner = function(t, e) {
                return e ? t === i16[0] && e === i16[1] : t === i16[1];
            }, n7.isCombinedCharacter = function(t) {
                return -1 !== e46.indexOf(t);
            }, n7.prototype = {
                addChars: function(t) {
                    if (t) {
                        var e;
                        this.chars || (this.chars = []);
                        var r, i, a = t.length, s = this.chars.length;
                        for(e = 0; e < a; e += 1){
                            for(r = 0, i = !1; r < s;)this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                            i || (this.chars.push(t[e]), s += 1);
                        }
                    }
                },
                addFonts: function(t, e) {
                    if (t) {
                        if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list);
                        var r, i = t.list, n = i.length, o = n;
                        for(r = 0; r < n; r += 1){
                            var h, l, p = !0;
                            if (i[r].loaded = !1, i[r].monoCase = a12(i[r].fFamily, "monospace"), i[r].sansCase = a12(i[r].fFamily, "sans-serif"), i[r].fPath) {
                                if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                                    if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                                        var c = createTag("style");
                                        c.setAttribute("f-forigin", i[r].fOrigin), c.setAttribute("f-origin", i[r].origin), c.setAttribute("f-family", i[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", e.appendChild(c);
                                    }
                                } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                                    for(h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1)-1 !== h[l].href.indexOf(i[r].fPath) && (p = !1);
                                    if (p) {
                                        var f = createTag("link");
                                        f.setAttribute("f-forigin", i[r].fOrigin), f.setAttribute("f-origin", i[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = i[r].fPath, document.body.appendChild(f);
                                    }
                                } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                                    for(h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1)i[r].fPath === h[l].src && (p = !1);
                                    if (p) {
                                        var d = createTag("link");
                                        d.setAttribute("f-forigin", i[r].fOrigin), d.setAttribute("f-origin", i[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", i[r].fPath), e.appendChild(d);
                                    }
                                }
                            } else i[r].loaded = !0, o -= 1;
                            i[r].helper = s13(e, i[r]), i[r].cache = {
                            }, this.fonts.push(i[r]);
                        }
                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
                    } else this.isLoaded = !0;
                },
                getCharData: function(e, r, i) {
                    for(var a = 0, s = this.chars.length; a < s;){
                        if (this.chars[a].ch === e && this.chars[a].style === r && this.chars[a].fFamily === i) return this.chars[a];
                        a += 1;
                    }
                    return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, i)), t68;
                },
                getFontByName: function(t) {
                    for(var e = 0, r = this.fonts.length; e < r;){
                        if (this.fonts[e].fName === t) return this.fonts[e];
                        e += 1;
                    }
                    return this.fonts[0];
                },
                measureText: function(t, e, r) {
                    var i = this.getFontByName(e), a = t.charCodeAt(0);
                    if (!i.cache[a + 1]) {
                        var s = i.helper;
                        if (" " === t) {
                            s.textContent = "|" + t + "|";
                            var n = s.getComputedTextLength();
                            s.textContent = "||";
                            var o = s.getComputedTextLength();
                            i.cache[a + 1] = (n - o) / 100;
                        } else s.textContent = t, i.cache[a + 1] = s.getComputedTextLength() / 100;
                    }
                    return i.cache[a + 1] * r;
                },
                checkLoadedFonts: function() {
                    var t, e, r, i = this.fonts.length, a = i;
                    for(t = 0; t < i; t += 1)this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                    0 !== a && Date.now() - this.initTime < 5000 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
                },
                setIsLoaded: function() {
                    this.isLoaded = !0;
                }
            }, n7;
        }(), PropertyFactory = function() {
            var t70 = initialDefaultFrame, e48 = Math.abs;
            function r29(t71, e49) {
                var r30, a15 = this.offsetTime;
                "multidimensional" === this.propType && (r30 = createTypedArray("float32", this.pv.length));
                for(var s15, n9, o7, h7, l4, p4, c3, f3, d2, m2 = e49.lastIndex, u2 = m2, y2 = this.keyframes.length - 1, g = !0; g;){
                    if (s15 = this.keyframes[u2], n9 = this.keyframes[u2 + 1], u2 === y2 - 1 && t71 >= n9.t - a15) {
                        s15.h && (s15 = n9), m2 = 0;
                        break;
                    }
                    if (n9.t - a15 > t71) {
                        m2 = u2;
                        break;
                    }
                    u2 < y2 - 1 ? u2 += 1 : (m2 = 0, g = !1);
                }
                o7 = this.keyframesMetadata[u2] || {
                };
                var v, b = n9.t - a15, _ = s15.t - a15;
                if (s15.to) {
                    o7.bezierData || (o7.bezierData = bez.buildBezierData(s15.s, n9.s || s15.e, s15.to, s15.ti));
                    var P = o7.bezierData;
                    if (t71 >= b || t71 < _) {
                        var S = t71 >= b ? P.points.length - 1 : 0;
                        for(l4 = P.points[S].point.length, h7 = 0; h7 < l4; h7 += 1)r30[h7] = P.points[S].point[h7];
                    } else {
                        o7.__fnct ? d2 = o7.__fnct : (d2 = BezierFactory.getBezierEasing(s15.o.x, s15.o.y, s15.i.x, s15.i.y, s15.n).get, o7.__fnct = d2), p4 = d2((t71 - _) / (b - _));
                        var E, x = P.segmentLength * p4, A = e49.lastFrame < t71 && e49._lastKeyframeIndex === u2 ? e49._lastAddedLength : 0;
                        for(f3 = e49.lastFrame < t71 && e49._lastKeyframeIndex === u2 ? e49._lastPoint : 0, g = !0, c3 = P.points.length; g;){
                            if (A += P.points[f3].partialLength, 0 === x || 0 === p4 || f3 === P.points.length - 1) {
                                for(l4 = P.points[f3].point.length, h7 = 0; h7 < l4; h7 += 1)r30[h7] = P.points[f3].point[h7];
                                break;
                            }
                            if (x >= A && x < A + P.points[f3 + 1].partialLength) {
                                for(E = (x - A) / P.points[f3 + 1].partialLength, l4 = P.points[f3].point.length, h7 = 0; h7 < l4; h7 += 1)r30[h7] = P.points[f3].point[h7] + (P.points[f3 + 1].point[h7] - P.points[f3].point[h7]) * E;
                                break;
                            }
                            f3 < c3 - 1 ? f3 += 1 : g = !1;
                        }
                        e49._lastPoint = f3, e49._lastAddedLength = A - P.points[f3].partialLength, e49._lastKeyframeIndex = u2;
                    }
                } else {
                    var w, C, T, k, D;
                    if (y2 = s15.s.length, v = n9.s || s15.e, this.sh && 1 !== s15.h) {
                        if (t71 >= b) r30[0] = v[0], r30[1] = v[1], r30[2] = v[2];
                        else if (t71 <= _) r30[0] = s15.s[0], r30[1] = s15.s[1], r30[2] = s15.s[2];
                        else !function(t, e) {
                            var r = e[0], i = e[1], a = e[2], s = e[3], n = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a), o = Math.asin(2 * r * i + 2 * a * s), h = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a);
                            t[0] = n / degToRads, t[1] = o / degToRads, t[2] = h / degToRads;
                        }(r30, function(t, e, r) {
                            var i, a, s, n, o, h = [], l = t[0], p = t[1], c = t[2], f = t[3], d = e[0], m = e[1], u = e[2], y = e[3];
                            (a = l * d + p * m + c * u + f * y) < 0 && (a = -a, d = -d, m = -m, u = -u, y = -y);
                            1 - a > 0.000001 ? (i = Math.acos(a), s = Math.sin(i), n = Math.sin((1 - r) * i) / s, o = Math.sin(r * i) / s) : (n = 1 - r, o = r);
                            return h[0] = n * l + o * d, h[1] = n * p + o * m, h[2] = n * c + o * u, h[3] = n * f + o * y, h;
                        }(i18(s15.s), i18(v), (t71 - _) / (b - _)));
                    } else for(u2 = 0; u2 < y2; u2 += 1)1 !== s15.h && (t71 >= b ? p4 = 1 : t71 < _ ? p4 = 0 : (s15.o.x.constructor === Array ? (o7.__fnct || (o7.__fnct = []), o7.__fnct[u2] ? d2 = o7.__fnct[u2] : (w = void 0 === s15.o.x[u2] ? s15.o.x[0] : s15.o.x[u2], C = void 0 === s15.o.y[u2] ? s15.o.y[0] : s15.o.y[u2], T = void 0 === s15.i.x[u2] ? s15.i.x[0] : s15.i.x[u2], k = void 0 === s15.i.y[u2] ? s15.i.y[0] : s15.i.y[u2], d2 = BezierFactory.getBezierEasing(w, C, T, k).get, o7.__fnct[u2] = d2)) : o7.__fnct ? d2 = o7.__fnct : (w = s15.o.x, C = s15.o.y, T = s15.i.x, k = s15.i.y, d2 = BezierFactory.getBezierEasing(w, C, T, k).get, s15.keyframeMetadata = d2), p4 = d2((t71 - _) / (b - _)))), v = n9.s || s15.e, D = 1 === s15.h ? s15.s[u2] : s15.s[u2] + (v[u2] - s15.s[u2]) * p4, "multidimensional" === this.propType ? r30[u2] = D : r30 = D;
                }
                return e49.lastIndex = m2, r30;
            }
            function i18(t) {
                var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, a = Math.cos(e / 2), s = Math.cos(r / 2), n = Math.cos(i / 2), o = Math.sin(e / 2), h = Math.sin(r / 2), l = Math.sin(i / 2);
                return [
                    o * h * n + a * s * l,
                    o * s * n + a * h * l,
                    a * h * n - o * s * l,
                    a * s * n - o * h * l
                ];
            }
            function a14() {
                var e = this.comp.renderedFrame - this.offsetTime, r = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t70 && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
                    this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                    var a = this.interpolateValue(e, this._caching);
                    this.pv = a;
                }
                return this._caching.lastFrame = e, this.pv;
            }
            function s14(t) {
                var r;
                if ("unidimensional" === this.propType) r = t * this.mult, e48(this.v - r) > 0.00001 && (this.v = r, this._mdf = !0);
                else for(var i = 0, a = this.v.length; i < a;)r = t[i] * this.mult, e48(this.v[i] - r) > 0.00001 && (this.v[i] = r, this._mdf = !0), i += 1;
            }
            function n8() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                    if (this.lock) this.setVValue(this.pv);
                    else {
                        var t;
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
                        for(t = 0; t < e; t += 1)r = this.effectsSequence[t](r);
                        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                    }
                }
            }
            function o6(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this);
            }
            function h6(t, e, r, i) {
                this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n8, this.setVValue = s14, this.addEffect = o6;
            }
            function l3(t, e, r, i) {
                var a;
                this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                var h = e.k.length;
                for(this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), a = 0; a < h; a += 1)this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n8, this.setVValue = s14, this.addEffect = o6;
            }
            function p3(e, i, h, l) {
                this.propType = "unidimensional", this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                    lastFrame: t70,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                }, this.k = !0, this.kf = !0, this.data = i, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t70, this.pv = t70, this._isFirstFrame = !0, this.getValue = n8, this.setVValue = s14, this.interpolateValue = r29, this.effectsSequence = [
                    a14.bind(this)
                ], this.addEffect = o6;
            }
            function c2(e, i, h, l) {
                var p;
                this.propType = "multidimensional";
                var c, f, d, m, u = i.k.length;
                for(p = 0; p < u - 1; p += 1)i.k[p].to && i.k[p].s && i.k[p + 1] && i.k[p + 1].s && (c = i.k[p].s, f = i.k[p + 1].s, d = i.k[p].to, m = i.k[p].ti, (2 === c.length && (c[0] !== f[0] || c[1] !== f[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], c[0] + d[0], c[1] + d[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], f[0] + m[0], f[1] + m[1]) || 3 === c.length && (c[0] !== f[0] || c[1] !== f[1] || c[2] !== f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], c[0] + d[0], c[1] + d[1], c[2] + d[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], f[0] + m[0], f[1] + m[1], f[2] + m[2])) && (i.k[p].to = null, i.k[p].ti = null), c[0] === f[0] && c[1] === f[1] && 0 === d[0] && 0 === d[1] && 0 === m[0] && 0 === m[1] && (2 === c.length || c[2] === f[2] && 0 === d[2] && 0 === m[2]) && (i.k[p].to = null, i.k[p].ti = null));
                this.effectsSequence = [
                    a14.bind(this)
                ], this.data = i, this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = n8, this.setVValue = s14, this.interpolateValue = r29, this.frameId = -1;
                var y = i.k[0].s.length;
                for(this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p = 0; p < y; p += 1)this.v[p] = t70, this.pv[p] = t70;
                this._caching = {
                    lastFrame: t70,
                    lastIndex: 0,
                    value: createTypedArray("float32", y)
                }, this.addEffect = o6;
            }
            return {
                getProp: function(t, e, r, i, a) {
                    var s;
                    if (e.k.length) {
                        if ("number" == typeof e.k[0]) s = new l3(t, e, i, a);
                        else switch(r){
                            case 0:
                                s = new p3(t, e, i, a);
                                break;
                            case 1:
                                s = new c2(t, e, i, a);
                        }
                    } else s = new h6(t, e, i, a);
                    return s.effectsSequence.length && a.addDynamicProperty(s), s;
                }
            };
        }(), TransformPropertyFactory = function() {
            var t72 = [
                0,
                0
            ];
            function e50(t, e, r) {
                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), e.rx) {
                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                        var i, a = e.or.k.length;
                        for(i = 0; i < a; i += 1)e.or.k[i].to = null, e.or.k[i].ti = null;
                    }
                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0;
                } else this.r = PropertyFactory.getProp(t, e.r || {
                    k: 0
                }, 0, degToRads, this);
                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, 0.01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            return e50.prototype = {
                applyToMatrix: function(t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                },
                getValue: function(e) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                            var r;
                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                var i, a;
                                if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / r, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / r, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / r, this.p.offsetTime));
                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                    i = [], a = [];
                                    var s = this.px, n = this.py;
                                    s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + 0.01) / r, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / r, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / r, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - 0.01) / r, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / r, 0)) : (i = [
                                        s.pv,
                                        n.pv
                                    ], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - 0.01) / r, s.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / r, n.offsetTime));
                                } else i = a = t72;
                                this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]));
                            }
                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                        }
                        this.frameId = this.elem.globalData.frameId;
                    }
                },
                precalculateMatrix: function() {
                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                        }
                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
                    }
                },
                autoOrient: function() {
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], e50), e50.prototype.addDynamicProperty = function(t) {
                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0;
            }, e50.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                getTransformProperty: function(t, r, i) {
                    return new e50(t, r, i);
                }
            };
        }();
        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for(var r = 0; r < e;)this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
        }, ShapePath.prototype.setLength = function(t) {
            for(; this._maxLength < t;)this.doubleArrayLength();
            this._length = t;
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
        }, ShapePath.prototype.setXYAt = function(t, e, r, i, a) {
            var s;
            switch(this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r){
                case "v":
                    s = this.v;
                    break;
                case "i":
                    s = this.i;
                    break;
                case "o":
                    s = this.o;
                    break;
                default:
                    s = [];
            }
            (!s[i] || s[i] && !a) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e;
        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, a, s, n, o) {
            this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(a, s, "i", n, o);
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v, r = this.o, i = this.i, a = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), a = 1);
            var s, n = this._length - 1, o = this._length;
            for(s = a; s < o; s += 1)t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], s, !1), n -= 1;
            return t;
        };
        var ShapePropertyFactory = function() {
            function t73(t, e, r) {
                var i, a, s, n, o, h, l, p, c, f = r.lastIndex, d = this.keyframes;
                if (t < d[0].t - this.offsetTime) i = d[0].s[0], s = !0, f = 0;
                else if (t >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], s = !0;
                else {
                    for(var m, u, y, g = f, v = d.length - 1, b = !0; b && (m = d[g], !((u = d[g + 1]).t - this.offsetTime > t));)g < v - 1 ? g += 1 : b = !1;
                    if (y = this.keyframesMetadata[g] || {
                    }, f = g, !(s = 1 === m.h)) {
                        if (t >= u.t - this.offsetTime) p = 1;
                        else if (t < m.t - this.offsetTime) p = 0;
                        else {
                            var _;
                            y.__fnct ? _ = y.__fnct : (_ = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, y.__fnct = _), p = _((t - (m.t - this.offsetTime)) / (u.t - this.offsetTime - (m.t - this.offsetTime)));
                        }
                        a = u.s ? u.s[0] : m.e[0];
                    }
                    i = m.s[0];
                }
                for(h = e._length, l = i.i[0].length, r.lastIndex = f, n = 0; n < h; n += 1)for(o = 0; o < l; o += 1)c = s ? i.i[n][o] : i.i[n][o] + (a.i[n][o] - i.i[n][o]) * p, e.i[n][o] = c, c = s ? i.o[n][o] : i.o[n][o] + (a.o[n][o] - i.o[n][o]) * p, e.o[n][o] = c, c = s ? i.v[n][o] : i.v[n][o] + (a.v[n][o] - i.v[n][o]) * p, e.v[n][o] = c;
            }
            function e51() {
                var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, i = this._caching.lastFrame;
                return -999999 !== i && (i < e && t < e || i > r && t > r) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv;
            }
            function r31() {
                this.paths = this.localShapeCollection;
            }
            function i19(t74) {
                (function(t, e) {
                    if (t._length !== e._length || t.c !== e.c) return !1;
                    var r, i = t._length;
                    for(r = 0; r < i; r += 1)if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                    return !0;
                })(this.v, t74) || (this.v = shapePool.clone(t74), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
            }
            function a16() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this.effectsSequence.length) {
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t, e;
                            this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                            var r = this.effectsSequence.length;
                            for(e = 0; e < r; e += 1)t = this.effectsSequence[e](t);
                            this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                        }
                    } else this._mdf = !1;
                }
            }
            function s16(t, e, i) {
                this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                var a = 3 === i ? e.pt.k : e.ks.k;
                this.v = shapePool.clone(a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r31, this.effectsSequence = [];
            }
            function n10(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this);
            }
            function o8(t, i, a) {
                this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var s = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = r31, this._caching = {
                    lastFrame: -999999,
                    lastIndex: 0
                }, this.effectsSequence = [
                    e51.bind(this)
                ];
            }
            s16.prototype.interpolateShape = t73, s16.prototype.getValue = a16, s16.prototype.setVValue = i19, s16.prototype.addEffect = n10, o8.prototype.getValue = a16, o8.prototype.interpolateShape = t73, o8.prototype.setVValue = i19, o8.prototype.addEffect = n10;
            var h8 = function() {
                var t75 = roundCorner;
                function e52(t, e) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return e52.prototype = {
                    reset: r31,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var e = this.p.v[0], r = this.p.v[1], i = this.s.v[0] / 2, a = this.s.v[1] / 2, s = 3 !== this.d, n = this.v;
                        n.v[0][0] = e, n.v[0][1] = r - a, n.v[1][0] = s ? e + i : e - i, n.v[1][1] = r, n.v[2][0] = e, n.v[2][1] = r + a, n.v[3][0] = s ? e - i : e + i, n.v[3][1] = r, n.i[0][0] = s ? e - i * t75 : e + i * t75, n.i[0][1] = r - a, n.i[1][0] = s ? e + i : e - i, n.i[1][1] = r - a * t75, n.i[2][0] = s ? e + i * t75 : e - i * t75, n.i[2][1] = r + a, n.i[3][0] = s ? e - i : e + i, n.i[3][1] = r + a * t75, n.o[0][0] = s ? e + i * t75 : e - i * t75, n.o[0][1] = r - a, n.o[1][0] = s ? e + i : e - i, n.o[1][1] = r + a * t75, n.o[2][0] = s ? e - i * t75 : e + i * t75, n.o[2][1] = r + a, n.o[3][0] = s ? e - i : e + i, n.o[3][1] = r - a * t75;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], e52), e52;
            }(), l5 = function() {
                function t76(t, e) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return t76.prototype = {
                    reset: r31,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var t, e, r, i, a = 2 * Math.floor(this.pt.v), s = 2 * Math.PI / a, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, c = 2 * Math.PI * o / (2 * a), f = 2 * Math.PI * h / (2 * a), d = -Math.PI / 2;
                        d += this.r.v;
                        var m = 3 === this.data.d ? -1 : 1;
                        for(this.v._length = 0, t = 0; t < a; t += 1){
                            r = n ? l : p, i = n ? c : f;
                            var u = (e = n ? o : h) * Math.cos(d), y = e * Math.sin(d), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                            u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i * r * m, y - v * i * r * m, u + g * i * r * m, y + v * i * r * m, t, !0), n = !n, d += s * m;
                        }
                    },
                    convertPolygonToPath: function() {
                        var t, e = Math.floor(this.pt.v), r = 2 * Math.PI / e, i = this.or.v, a = this.os.v, s = 2 * Math.PI * i / (4 * e), n = 0.5 * -Math.PI, o = 3 === this.data.d ? -1 : 1;
                        for(n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1){
                            var h = i * Math.cos(n), l = i * Math.sin(n), p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l), c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                            h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * s * a * o, l - c * s * a * o, h + p * s * a * o, l + c * s * a * o, t, !0), n += r * o;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], t76), t76;
            }(), p5 = function() {
                function t77(t, e) {
                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return t77.prototype = {
                    convertRectToPath: function() {
                        var t = this.p.v[0], e = this.p.v[1], r = this.s.v[0] / 2, i = this.s.v[1] / 2, a = bmMin(r, i, this.r.v), s = a * (1 - roundCorner);
                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + a, t + r, e - i + s, 0, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - s, t + r, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e + i, t + r - a, e + i, t + r - s, e + i, 2, !0), this.v.setTripleAt(t - r + a, e + i, t - r + s, e + i, t - r + a, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + s, t - r, e - i + a, 5, !0), this.v.setTripleAt(t - r + a, e - i, t - r + a, e - i, t - r + s, e - i, 6, !0), this.v.setTripleAt(t + r - a, e - i, t + r - s, e - i, t + r - a, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + s, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + s, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + s, t + r, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e - i, t + r - a, e - i, t + r - s, e - i, 1, !0), this.v.setTripleAt(t - r + a, e - i, t - r + s, e - i, t - r + a, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + a, t - r, e - i + s, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r + a, e + i, t - r + a, e + i, t - r + s, e + i, 5, !0), this.v.setTripleAt(t + r - a, e + i, t + r - s, e + i, t + r - a, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - a, t + r, e + i - s, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + s, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - s, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - s, e + i, t + r, e + i, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: r31
                }, extendPrototype([
                    DynamicPropertyContainer
                ], t77), t77;
            }();
            var c4 = {
                getShapeProp: function(t, e, r) {
                    var i;
                    return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new o8(t, e, r) : new s16(t, e, r) : 5 === r ? i = new p5(t, e) : 6 === r ? i = new h8(t, e) : 7 === r && (i = new l5(t, e)), i.k && t.addDynamicProperty(i), i;
                },
                getConstructorFunction: function() {
                    return s16;
                },
                getKeyframedConstructorFunction: function() {
                    return o8;
                }
            };
            return c4;
        }(), ShapeModifiers = (ob1 = {
        }, modifiers = {
        }, ob1.registerModifier = function(t, e) {
            modifiers[t] || (modifiers[t] = e);
        }, ob1.getModifier = function(t, e, r) {
            return new modifiers[t](e, r);
        }, ob1), ob1, modifiers;
        function ShapeModifier() {
        }
        function TrimModifier() {
        }
        function RoundCornersModifier() {
        }
        function PuckerAndBloatModifier() {
        }
        function RepeaterModifier() {
        }
        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
        }
        function DashProperty(t, e, r, i) {
            var a;
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
            var s, n = e.length || 0;
            for(a = 0; a < n; a += 1)s = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[a] = {
                n: e[a].n,
                p: s
            };
            this.k || this.getValue(!0), this._isAnimated = this.k;
        }
        function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
        }
        ShapeModifier.prototype.initModifierProperties = function() {
        }, ShapeModifier.prototype.addShapeToModifier = function() {
        }, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
            }
        }, ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
        }, extendPrototype([
            DynamicPropertyContainer
        ], ShapeModifier), extendPrototype([
            ShapeModifier
        ], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = [];
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, a) {
            var s = [];
            e <= 1 ? s.push({
                s: t,
                e: e
            }) : t >= 1 ? s.push({
                s: t - 1,
                e: e - 1
            }) : (s.push({
                s: t,
                e: 1
            }), s.push({
                s: 0,
                e: e - 1
            }));
            var n, o, h = [], l = s.length;
            for(n = 0; n < l; n += 1){
                var p, c;
                if (!((o = s[n]).e * a < i || o.s * a > i + r)) p = o.s * a <= i ? 0 : (o.s * a - i) / r, c = o.e * a >= i + r ? 1 : (o.e * a - i) / r, h.push([
                    p,
                    c
                ]);
            }
            return h.length || h.push([
                0,
                0
            ]), h;
        }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)segmentsLengthPool.release(t[e]);
            return t.length = 0, t;
        }, TrimModifier.prototype.processShapes = function(t) {
            var e, r, i, a;
            if (this._mdf || t) {
                var s = this.o.v % 360 / 360;
                if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (r = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                    var n = e;
                    e = r, r = n;
                }
                e = 0.0001 * Math.round(10000 * e), r = 0.0001 * Math.round(10000 * r), this.sValue = e, this.eValue = r;
            } else e = this.sValue, r = this.eValue;
            var o, h, l, p, c, f = this.shapes.length, d = 0;
            if (r === e) for(a = 0; a < f; a += 1)this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
            else if (1 === r && 0 === e || 0 === r && 1 === e) {
                if (this._mdf) for(a = 0; a < f; a += 1)this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0;
            } else {
                var m, u, y = [];
                for(a = 0; a < f; a += 1)if ((m = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                    if (h = (i = m.shape.paths)._length, c = 0, !m.shape._mdf && m.pathsData.length) c = m.totalShapeLength;
                    else {
                        for(l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1)p = bez.getSegmentsLength(i.shapes[o]), l.push(p), c += p.totalLength;
                        m.totalShapeLength = c, m.pathsData = l;
                    }
                    d += c, m.shape._mdf = !0;
                } else m.shape.paths = m.localShapeCollection;
                var g, v = e, b = r, _ = 0;
                for(a = f - 1; a >= 0; a -= 1)if ((m = this.shapes[a]).shape._mdf) {
                    for((u = m.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, r, m.totalShapeLength, _, d), _ += m.totalShapeLength) : g = [
                        [
                            v,
                            b
                        ]
                    ], h = g.length, o = 0; o < h; o += 1){
                        v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                            s: m.totalShapeLength * v,
                            e: m.totalShapeLength * b
                        }) : v >= 1 ? y.push({
                            s: m.totalShapeLength * (v - 1),
                            e: m.totalShapeLength * (b - 1)
                        }) : (y.push({
                            s: m.totalShapeLength * v,
                            e: m.totalShapeLength
                        }), y.push({
                            s: 0,
                            e: m.totalShapeLength * (b - 1)
                        }));
                        var P = this.addShapes(m, y[0]);
                        if (y[0].s !== y[0].e) {
                            if (y.length > 1) {
                                if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                    var S = P.pop();
                                    this.addPaths(P, u), P = this.addShapes(m, y[1], S);
                                } else this.addPaths(P, u), P = this.addShapes(m, y[1]);
                            }
                            this.addPaths(P, u);
                        }
                    }
                    m.shape.paths = u;
                }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var r, i = t.length;
            for(r = 0; r < i; r += 1)e.addShape(t[r]);
        }, TrimModifier.prototype.addSegment = function(t, e, r, i, a, s, n) {
            a.setXYAt(e[0], e[1], "o", s), a.setXYAt(r[0], r[1], "i", s + 1), n && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(i[0], i[1], "v", s + 1);
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
            var i, a, s, n, o, h, l, p, c = t.pathsData, f = t.shape.paths.shapes, d = t.shape.paths._length, m = 0, u = [], y = !0;
            for(r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), u.push(r), i = 0; i < d; i += 1){
                for(h = c[i].lengths, r.c = f[i].c, s = f[i].c ? h.length : h.length + 1, a = 1; a < s; a += 1)if (m + (n = h[a - 1]).addedLength < e.s) m += n.addedLength, r.c = !1;
                else {
                    if (m > e.e) {
                        r.c = !1;
                        break;
                    }
                    e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(f[i].v[a - 1], f[i].o[a - 1], f[i].i[a], f[i].v[a], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[a - 1], f[i].v[a], f[i].o[a - 1], f[i].i[a], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1), m += n.addedLength, o += 1;
                }
                if (f[i].c && h.length) {
                    if (n = h[a - 1], m <= e.e) {
                        var g = h[a - 1].addedLength;
                        e.s <= m && e.e >= m + g ? (this.addSegment(f[i].v[a - 1], f[i].o[a - 1], f[i].i[0], f[i].v[0], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[a - 1], f[i].v[0], f[i].o[a - 1], f[i].i[0], (e.s - m) / g, (e.e - m) / g, h[a - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1);
                    } else r.c = !1;
                    m += n.addedLength, o += 1;
                }
                if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), m > e.e) break;
                i < d - 1 && (r = shapePool.newElement(), y = !0, u.push(r), o = 0);
            }
            return u;
        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([
            ShapeModifier
        ], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var r, i = shapePool.newElement();
            i.c = t.c;
            var a, s, n, o, h, l, p, c, f, d, m, u, y = t._length, g = 0;
            for(r = 0; r < y; r += 1)a = t.v[r], n = t.o[r], s = t.i[r], a[0] === n[0] && a[1] === n[1] && a[0] === s[0] && a[1] === s[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = a[0] + (o[0] - a[0]) * l, c = u = a[1] - (a[1] - o[1]) * l, f = p - (p - a[0]) * roundCorner, d = c - (c - a[1]) * roundCorner, i.setTripleAt(p, c, f, d, m, u, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = a[0] + (o[0] - a[0]) * l, c = d = a[1] + (o[1] - a[1]) * l, m = p - (p - a[0]) * roundCorner, u = c - (c - a[1]) * roundCorner, i.setTripleAt(p, c, f, d, m, u, g), g += 1) : (i.setTripleAt(a[0], a[1], n[0], n[1], s[0], s[1], g), g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
            return i;
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, i, a, s, n, o = this.shapes.length, h = this.rd.v;
            if (0 !== h) for(r = 0; r < o; r += 1){
                if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t) for(n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1)n.addShape(this.processPath(e[i], h));
                s.shape.paths = s.localShapeCollection;
            }
            this.dynamicProperties.length || (this._mdf = !1);
        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([
            ShapeModifier
        ], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var r = e / 100, i = [
                0,
                0
            ], a = t._length, s = 0;
            for(s = 0; s < a; s += 1)i[0] += t.v[s][0], i[1] += t.v[s][1];
            i[0] /= a, i[1] /= a;
            var n, o, h, l, p, c, f = shapePool.newElement();
            for(f.c = t.c, s = 0; s < a; s += 1)n = t.v[s][0] + (i[0] - t.v[s][0]) * r, o = t.v[s][1] + (i[1] - t.v[s][1]) * r, h = t.o[s][0] + (i[0] - t.o[s][0]) * -r, l = t.o[s][1] + (i[1] - t.o[s][1]) * -r, p = t.i[s][0] + (i[0] - t.i[s][0]) * -r, c = t.i[s][1] + (i[1] - t.i[s][1]) * -r, f.setTripleAt(n, o, h, l, p, c, s);
            return f;
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, i, a, s, n, o = this.shapes.length, h = this.amount.v;
            if (0 !== h) for(r = 0; r < o; r += 1){
                if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t) for(n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1)n.addShape(this.processPath(e[i], h));
                s.shape.paths = s.localShapeCollection;
            }
            this.dynamicProperties.length || (this._mdf = !1);
        }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([
            ShapeModifier
        ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, a, s) {
            var n = s ? -1 : 1, o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
            t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
            for(this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;)r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it);
        }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var r, i = t.length;
            for(r = 0; r < i; r += 1)t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
        }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, r, i, a, s, n = !1;
            if (this._mdf || t) {
                var o, h = Math.ceil(this.c.v);
                if (this._groups.length < h) {
                    for(; this._groups.length < h;){
                        var l = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        l.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [
                                    0,
                                    0
                                ]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [
                                    0,
                                    0
                                ]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [
                                    {
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    },
                                    {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }
                                ]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [
                                    100,
                                    100
                                ]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1;
                    }
                    this.elem.reloadShapes(), n = !0;
                }
                for(s = 0, i = 0; i <= this._groups.length - 1; i += 1){
                    if (o = s < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                        var p = this.elemsData[i].it, c = p[p.length - 1];
                        0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1;
                    }
                    s += 1;
                }
                this._currentCopies = h;
                var f = this.o.v, d = f % 1, m = f > 0 ? Math.floor(f) : Math.ceil(f), u = this.pMatrix.props, y = this.rMatrix.props, g = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var v, b, _ = 0;
                if (f > 0) {
                    for(; _ < m;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                    d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), _ += d);
                } else if (f < 0) {
                    for(; _ > m;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                    d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), _ -= d);
                }
                for(i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;){
                    if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== _) {
                        for((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1)r[v] = this.matrix.props[v];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), v = 0; v < b; v += 1)r[v] = this.matrix.props[v];
                    _ += 1, s -= 1, i += a;
                }
            } else for(s = this._currentCopies, i = 0, a = 1; s;)r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += a;
            return n;
        }, RepeaterModifier.prototype.addShape = function() {
        }, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
        }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for(t = 0; t < this._length; t += 1)shapePool.release(this.shapes[t]);
            this._length = 0;
        }, DashProperty.prototype.getValue = function(t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, r = this.dataProps.length;
                for("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1)"o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
            for(var r = 0, i = this.o.length / 2; r < i;){
                if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
                r += 1;
            }
            return !0;
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s) for(var t = 0, e = this.data.k.k.length; t < e;){
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1;
            }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
        }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, r, i, a = 4 * this.data.p;
                for(e = 0; e < a; e += 1)r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                if (this.o.length) for(a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1)r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                this._mdf = !t;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], GradientProperty);
        var buildShapeString = function(t, e, r, i) {
            if (0 === e) return "";
            var a, s = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for(a = 1; a < e; a += 1)h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
            return r && e && (h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
        }, audioControllerFactory = function() {
            function t78(t) {
                this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1;
            }
            return t78.prototype = {
                addAudio: function(t) {
                    this.audios.push(t);
                },
                pause: function() {
                    var t, e = this.audios.length;
                    for(t = 0; t < e; t += 1)this.audios[t].pause();
                },
                resume: function() {
                    var t, e = this.audios.length;
                    for(t = 0; t < e; t += 1)this.audios[t].resume();
                },
                setRate: function(t) {
                    var e, r = this.audios.length;
                    for(e = 0; e < r; e += 1)this.audios[e].setRate(t);
                },
                createAudio: function(t) {
                    return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                        src: [
                            t
                        ]
                    }) : {
                        isPlaying: !1,
                        play: function() {
                            this.isPlaying = !0;
                        },
                        seek: function() {
                            this.isPlaying = !1;
                        },
                        playing: function() {
                        },
                        rate: function() {
                        },
                        setVolume: function() {
                        }
                    };
                },
                setAudioFactory: function(t) {
                    this.audioFactory = t;
                },
                setVolume: function(t) {
                    this._volume = t, this._updateVolume();
                },
                mute: function() {
                    this._isMuted = !0, this._updateVolume();
                },
                unmute: function() {
                    this._isMuted = !1, this._updateVolume();
                },
                getVolume: function() {
                    return this._volume;
                },
                _updateVolume: function() {
                    var t, e = this.audios.length;
                    for(t = 0; t < e; t += 1)this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
                }
            }, function() {
                return new t78;
            };
        }(), ImagePreloader = function() {
            var t79 = function() {
                var t = createTag("canvas");
                t.width = 1, t.height = 1;
                var e = t.getContext("2d");
                return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t;
            }();
            function e53() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function r32() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i20(t, e, r) {
                var i = "";
                if (t.e) i = t.p;
                else if (e) {
                    var a = t.p;
                    -1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a;
                } else i = r, i += t.u ? t.u : "", i += t.p;
                return i;
            }
            function a17(t) {
                var e = 0, r = setInterval((function() {
                    (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1;
                }).bind(this), 50);
            }
            function s17(t80) {
                var e = {
                    assetData: t80
                }, r = i20(t80, this.assetsPath, this.path);
                return dataManager.loadData(r, (function(t) {
                    e.img = t, this._footageLoaded();
                }).bind(this), (function() {
                    e.img = {
                    }, this._footageLoaded();
                }).bind(this)), e;
            }
            function n() {
                this._imageLoaded = e53.bind(this), this._footageLoaded = r32.bind(this), this.testImageLoaded = a17.bind(this), this.createFootageData = s17.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return n.prototype = {
                loadAssets: function(t, e) {
                    var r;
                    this.imagesLoadedCb = e;
                    var i = t.length;
                    for(r = 0; r < i; r += 1)t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))));
                },
                setAssetsPath: function(t) {
                    this.assetsPath = t || "";
                },
                setPath: function(t) {
                    this.path = t || "";
                },
                loadedImages: function() {
                    return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function() {
                    return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function() {
                    this.imagesLoadedCb = null, this.images.length = 0;
                },
                getAsset: function(t) {
                    for(var e = 0, r = this.images.length; e < r;){
                        if (this.images[e].assetData === t) return this.images[e].img;
                        e += 1;
                    }
                    return null;
                },
                createImgData: function(e) {
                    var r = i20(e, this.assetsPath, this.path), a = createTag("img");
                    a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", (function() {
                        s.img = t79, this._imageLoaded();
                    }).bind(this), !1), a.src = r;
                    var s = {
                        img: a,
                        assetData: e
                    };
                    return s;
                },
                createImageData: function(e) {
                    var r = i20(e, this.assetsPath, this.path), a = createNS("image");
                    isSafari ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", (function() {
                        s.img = t79, this._imageLoaded();
                    }).bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                    var s = {
                        img: a,
                        assetData: e
                    };
                    return s;
                },
                imageLoaded: e53,
                footageLoaded: r32,
                setCacheType: function(t, e) {
                    "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
                }
            }, n;
        }(), featureSupport = function() {
            var t = {
                maskType: !0
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t;
        }(), filtersFactory = function() {
            var t81 = {
            };
            return t81.createFilter = function(t, e) {
                var r = createNS("filter");
                r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"));
                return r;
            }, t81.createAlphaToLuminanceFilter = function() {
                var t = createNS("feColorMatrix");
                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
            }, t81;
        }();
        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {
            }, this._moreOptions = {
                alignment: {
                }
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r);
        }
        function TextAnimatorDataProperty(t, e, r) {
            var i = {
                propType: !1
            }, a = PropertyFactory.getProp, s = e.a;
            this.a = {
                r: s.r ? a(t, s.r, 0, degToRads, r) : i,
                rx: s.rx ? a(t, s.rx, 0, degToRads, r) : i,
                ry: s.ry ? a(t, s.ry, 0, degToRads, r) : i,
                sk: s.sk ? a(t, s.sk, 0, degToRads, r) : i,
                sa: s.sa ? a(t, s.sa, 0, degToRads, r) : i,
                s: s.s ? a(t, s.s, 1, 0.01, r) : i,
                a: s.a ? a(t, s.a, 1, 0, r) : i,
                o: s.o ? a(t, s.o, 0, 0.01, r) : i,
                p: s.p ? a(t, s.p, 1, 0, r) : i,
                sw: s.sw ? a(t, s.sw, 0, 0, r) : i,
                sc: s.sc ? a(t, s.sc, 1, 0, r) : i,
                fc: s.fc ? a(t, s.fc, 1, 0, r) : i,
                fh: s.fh ? a(t, s.fh, 0, 0, r) : i,
                fs: s.fs ? a(t, s.fs, 0, 0.01, r) : i,
                fb: s.fb ? a(t, s.fb, 0, 0.01, r) : i,
                t: s.t ? a(t, s.t, 0, 0, r) : i
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
        }
        function LetterProps(t, e, r, i, a, s) {
            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = a, this.p = s, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!i,
                m: !0,
                p: !0
            };
        }
        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e, r = this._textData.a.length, i = PropertyFactory.getProp;
            for(t = 0; t < r; t += 1)e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var r, i, a, s, n, o, h, l, p, c, f, d, m, u, y, g, v, b, _, P = this._moreOptions.alignment.v, S = this._animatorsData, E = this._textData, x = this.mHelper, A = this._renderType, w = this.renderedLetters.length, C = t.l;
                if (this._hasMaskedPath) {
                    if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var T, k = _.v;
                        for(this._pathData.r.v && (k = k.reverse()), n = {
                            tLength: 0,
                            segments: []
                        }, s = k._length - 1, g = 0, a = 0; a < s; a += 1)T = bez.buildBezierData(k.v[a], k.v[a + 1], [
                            k.o[a][0] - k.v[a][0],
                            k.o[a][1] - k.v[a][1]
                        ], [
                            k.i[a + 1][0] - k.v[a + 1][0],
                            k.i[a + 1][1] - k.v[a + 1][1]
                        ]), n.tLength += T.segmentLength, n.segments.push(T), g += T.segmentLength;
                        a = s, _.v.c && (T = bez.buildBezierData(k.v[a], k.v[0], [
                            k.o[a][0] - k.v[a][0],
                            k.o[a][1] - k.v[a][1]
                        ], [
                            k.i[0][0] - k.v[0][0],
                            k.i[0][1] - k.v[0][1]
                        ]), n.tLength += T.segmentLength, n.segments.push(T), g += T.segmentLength), this._pathData.pi = n;
                    }
                    if (n = this._pathData.pi, o = this._pathData.f.v, f = 0, c = 1, l = 0, p = !0, u = n.segments, o < 0 && _.v.c) for(n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), c = (m = u[f = u.length - 1].points).length - 1; o < 0;)o += m[c].partialLength, (c -= 1) < 0 && (c = (m = u[f -= 1].points).length - 1);
                    d = (m = u[f].points)[c - 1], y = (h = m[c]).partialLength;
                }
                s = C.length, r = 0, i = 0;
                var D, M, F, I, R, V = 1.2 * t.finalSize * 0.714, O = !0;
                F = S.length;
                var L, B, N, G, z, j, H, q, W, U, Y, X, $ = -1, K = o, J = f, Q = c, Z = -1, tt = "", et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var rt = 0, it = 0, at = 2 === t.j ? -0.5 : -1, st = 0, nt = !0;
                    for(a = 0; a < s; a += 1)if (C[a].n) {
                        for(rt && (rt += it); st < a;)C[st].animatorJustifyOffset = rt, st += 1;
                        rt = 0, nt = !0;
                    } else {
                        for(M = 0; M < F; M += 1)(D = S[M].a).t.propType && (nt && 2 === t.j && (it += D.t.v * at), (R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars)).length ? rt += D.t.v * R[0] * at : rt += D.t.v * R * at);
                        nt = !1;
                    }
                    for(rt && (rt += it); st < a;)C[st].animatorJustifyOffset = rt, st += 1;
                }
                for(a = 0; a < s; a += 1){
                    if (x.reset(), G = 1, C[a].n) r = 0, i += t.yOffset, i += O ? 1 : 0, o = K, O = !1, this._hasMaskedPath && (c = Q, d = (m = u[f = J].points)[c - 1], y = (h = m[c]).partialLength, l = 0), tt = "", Y = "", W = "", X = "", et = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Z !== C[a].line) {
                                switch(t.j){
                                    case 1:
                                        o += g - t.lineWidths[C[a].line];
                                        break;
                                    case 2:
                                        o += (g - t.lineWidths[C[a].line]) / 2;
                                }
                                Z = C[a].line;
                            }
                            $ !== C[a].ind && (C[$] && (o += C[$].extra), o += C[a].an / 2, $ = C[a].ind), o += P[0] * C[a].an * 0.005;
                            var ot = 0;
                            for(M = 0; M < F; M += 1)(D = S[M].a).p.propType && ((R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars)).length ? ot += D.p.v[0] * R[0] : ot += D.p.v[0] * R), D.a.propType && ((R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars)).length ? ot += D.a.v[0] * R[0] : ot += D.a.v[0] * R);
                            for(p = !0, this._pathData.a.v && (o = 0.5 * C[0].an + (g - this._pathData.f.v - 0.5 * C[0].an - 0.5 * C[C.length - 1].an) * $ / (s - 1), o += this._pathData.f.v); p;)l + y >= o + ot || !m ? (v = (o + ot - l) / h.partialLength, B = d.point[0] + (h.point[0] - d.point[0]) * v, N = d.point[1] + (h.point[1] - d.point[1]) * v, x.translate(-P[0] * C[a].an * 0.005, -P[1] * V * 0.01), p = !1) : m && (l += h.partialLength, (c += 1) >= m.length && (c = 0, u[f += 1] ? m = u[f].points : _.v.c ? (c = 0, m = u[f = 0].points) : (l -= h.partialLength, m = null)), m && (d = h, y = (h = m[c]).partialLength));
                            L = C[a].an / 2 - C[a].add, x.translate(-L, 0, 0);
                        } else L = C[a].an / 2 - C[a].add, x.translate(-L, 0, 0), x.translate(-P[0] * C[a].an * 0.005, -P[1] * V * 0.01, 0);
                        for(M = 0; M < F; M += 1)(D = S[M].a).t.propType && (R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? R.length ? o += D.t.v * R[0] : o += D.t.v * R : R.length ? r += D.t.v * R[0] : r += D.t.v * R));
                        for(t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [
                            t.sc[0],
                            t.sc[1],
                            t.sc[2]
                        ] : [
                            0,
                            0,
                            0
                        ]), t.fillColorAnim && t.fc && (H = [
                            t.fc[0],
                            t.fc[1],
                            t.fc[2]
                        ]), M = 0; M < F; M += 1)(D = S[M].a).a.propType && ((R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars)).length ? x.translate(-D.a.v[0] * R[0], -D.a.v[1] * R[1], D.a.v[2] * R[2]) : x.translate(-D.a.v[0] * R, -D.a.v[1] * R, D.a.v[2] * R));
                        for(M = 0; M < F; M += 1)(D = S[M].a).s.propType && ((R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars)).length ? x.scale(1 + (D.s.v[0] - 1) * R[0], 1 + (D.s.v[1] - 1) * R[1], 1) : x.scale(1 + (D.s.v[0] - 1) * R, 1 + (D.s.v[1] - 1) * R, 1));
                        for(M = 0; M < F; M += 1){
                            if (D = S[M].a, R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars), D.sk.propType && (R.length ? x.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1]) : x.skewFromAxis(-D.sk.v * R, D.sa.v * R)), D.r.propType && (R.length ? x.rotateZ(-D.r.v * R[2]) : x.rotateZ(-D.r.v * R)), D.ry.propType && (R.length ? x.rotateY(D.ry.v * R[1]) : x.rotateY(D.ry.v * R)), D.rx.propType && (R.length ? x.rotateX(D.rx.v * R[0]) : x.rotateX(D.rx.v * R)), D.o.propType && (R.length ? G += (D.o.v * R[0] - G) * R[0] : G += (D.o.v * R - G) * R), t.strokeWidthAnim && D.sw.propType && (R.length ? j += D.sw.v * R[0] : j += D.sw.v * R), t.strokeColorAnim && D.sc.propType) for(q = 0; q < 3; q += 1)R.length ? z[q] += (D.sc.v[q] - z[q]) * R[0] : z[q] += (D.sc.v[q] - z[q]) * R;
                            if (t.fillColorAnim && t.fc) {
                                if (D.fc.propType) for(q = 0; q < 3; q += 1)R.length ? H[q] += (D.fc.v[q] - H[q]) * R[0] : H[q] += (D.fc.v[q] - H[q]) * R;
                                D.fh.propType && (H = R.length ? addHueToRGB(H, D.fh.v * R[0]) : addHueToRGB(H, D.fh.v * R)), D.fs.propType && (H = R.length ? addSaturationToRGB(H, D.fs.v * R[0]) : addSaturationToRGB(H, D.fs.v * R)), D.fb.propType && (H = R.length ? addBrightnessToRGB(H, D.fb.v * R[0]) : addBrightnessToRGB(H, D.fb.v * R));
                            }
                        }
                        for(M = 0; M < F; M += 1)(D = S[M].a).p.propType && (R = S[M].s.getMult(C[a].anIndexes[M], E.a[M].s.totalChars), this._hasMaskedPath ? R.length ? x.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1]) : x.translate(0, D.p.v[1] * R, -D.p.v[2] * R) : R.length ? x.translate(D.p.v[0] * R[0], D.p.v[1] * R[1], -D.p.v[2] * R[2]) : x.translate(D.p.v[0] * R, D.p.v[1] * R, -D.p.v[2] * R));
                        if (t.strokeWidthAnim && (W = j < 0 ? 0 : j), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                            if (x.translate(0, -t.ls), x.translate(0, P[1] * V * 0.01 + i, 0), this._pathData.p.v) {
                                b = (h.point[1] - d.point[1]) / (h.point[0] - d.point[0]);
                                var ht = 180 * Math.atan(b) / Math.PI;
                                h.point[0] < d.point[0] && (ht += 180), x.rotate(-ht * Math.PI / 180);
                            }
                            x.translate(B, N, 0), o -= P[0] * C[a].an * 0.005, C[a + 1] && $ !== C[a + 1].ind && (o += C[a].an / 2, o += 0.001 * t.tr * t.finalSize);
                        } else {
                            switch(x.translate(r, i, 0), t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                case 1:
                                    x.translate(C[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[a].line]), 0, 0);
                                    break;
                                case 2:
                                    x.translate(C[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[a].line]) / 2, 0, 0);
                            }
                            x.translate(0, -t.ls), x.translate(L, 0, 0), x.translate(P[0] * C[a].an * 0.005, P[1] * V * 0.01, 0), r += C[a].l + 0.001 * t.tr * t.finalSize;
                        }
                        "html" === A ? tt = x.toCSS() : "svg" === A ? tt = x.to2dCSS() : et = [
                            x.props[0],
                            x.props[1],
                            x.props[2],
                            x.props[3],
                            x.props[4],
                            x.props[5],
                            x.props[6],
                            x.props[7],
                            x.props[8],
                            x.props[9],
                            x.props[10],
                            x.props[11],
                            x.props[12],
                            x.props[13],
                            x.props[14],
                            x.props[15]
                        ], X = G;
                    }
                    w <= a ? (I = new LetterProps(X, W, U, Y, tt, et), this.renderedLetters.push(I), w += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(X, W, U, Y, tt, et) || this.lettersChangedFlag);
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([
            DynamicPropertyContainer
        ], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, i, a, s) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, n = !0), n;
        }, TextProperty.prototype.defaultBoxWidth = [
            0,
            0
        ], TextProperty.prototype.copyData = function(t, e) {
            for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
        }, TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes();
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
        }, TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.getValue = function(t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData, r = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    var i;
                    this.lock = !0, this._mdf = !1;
                    var a = this.effectsSequence.length, s = t || this.data.d.k[this.keysIndex].s;
                    for(i = 0; i < a; i += 1)s = r !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
                    e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);)r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
        }, TextProperty.prototype.buildFinalText = function(t) {
            for(var e, r, i = [], a = 0, s = t.length, n = !1; a < s;)e = t.charCodeAt(a), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(a) : e >= 55296 && e <= 56319 ? (r = t.charCodeAt(a + 1)) >= 56320 && r <= 57343 ? (n || FontManager.isModifier(e, r) ? (i[i.length - 1] += t.substr(a, 2), n = !1) : i.push(t.substr(a, 2)), a += 1) : i.push(t.charAt(a)) : e > 56319 ? (r = t.charCodeAt(a + 1), FontManager.isZeroWidthJoiner(e, r) ? (n = !0, i[i.length - 1] += t.substr(a, 2), a += 1) : i.push(t.charAt(a))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(a), n = !0) : i.push(t.charAt(a)), a += 1;
            return i;
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e, r, i, a, s, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], c = 0, f = l.m.g, d = 0, m = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), _ = 0, P = getFontProperties(b);
            t.fWeight = P.weight, t.fStyle = P.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
            var S, E = t.tr / 1000 * t.finalSize;
            if (t.sz) for(var x, A, w = !0, C = t.sz[0], T = t.sz[1]; w;){
                x = 0, g = 0, r = (A = this.buildFinalText(t.t)).length, E = t.tr / 1000 * t.finalSize;
                var k = -1;
                for(e = 0; e < r; e += 1)S = A[e].charCodeAt(0), i = !1, " " === A[e] ? k = e : 13 !== S && 3 !== S || (g = 0, i = !0, x += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(A[e], b.fStyle, b.fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(A[e], t.f, t.finalSize), g + _ > C && " " !== A[e] ? (-1 === k ? r += 1 : e = k, x += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, k === e ? 1 : 0, "\r"), k = -1, g = 0) : (g += _, g += E);
                x += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < x ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, r = t.finalText.length, w = !1);
            }
            g = -E, _ = 0;
            var D, M = 0;
            for(e = 0; e < r; e += 1)if (i = !1, 13 === (S = (D = t.finalText[e]).charCodeAt(0)) || 3 === S ? (M = 0, y.push(g), v = g > v ? g : v, g = -2 * E, a = "", i = !0, u += 1) : a = D, h.chars ? (o = h.getCharData(D, b.fStyle, h.getFontByName(t.f).fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(a, t.f, t.finalSize), " " === D ? M += _ + E : (g += _ + E + M, M = 0), p.push({
                l: _,
                an: _,
                add: d,
                n: i,
                anIndexes: [],
                val: a,
                line: u,
                animatorJustifyOffset: 0
            }), 2 == f) {
                if (d += _, "" === a || " " === a || e === r - 1) {
                    for("" !== a && " " !== a || (d -= _); m <= e;)p[m].an = d, p[m].ind = c, p[m].extra = _, m += 1;
                    c += 1, d = 0;
                }
            } else if (3 == f) {
                if (d += _, "" === a || e === r - 1) {
                    for("" === a && (d -= _); m <= e;)p[m].an = d, p[m].ind = c, p[m].extra = _, m += 1;
                    d = 0, c += 1;
                }
            } else p[c].ind = c, p[c].extra = 0, c += 1;
            if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch(t.boxWidth = v, t.j){
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0;
            }
            t.lineWidths = y;
            var F, I, R, V, O = l.a;
            n = O.length;
            var L = [];
            for(s = 0; s < n; s += 1){
                for((F = O[s]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), V = 0, R = F.s.b, e = 0; e < r; e += 1)(I = p[e]).anIndexes[s] = V, (1 == R && "" !== I.val || 2 == R && "" !== I.val && " " !== I.val || 3 == R && (I.n || " " == I.val || e == r - 1) || 4 == R && (I.n || e == r - 1)) && (1 === F.s.rn && L.push(V), V += 1);
                l.a[s].s.totalChars = V;
                var B, N = -1;
                if (1 === F.s.rn) for(e = 0; e < r; e += 1)N != (I = p[e]).anIndexes[s] && (N = I.anIndexes[s], B = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[s] = B;
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({
            }, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
        }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        };
        var TextSelectorProp = function() {
            var t82 = Math.max, e54 = Math.min, r33 = Math.floor;
            function i21(t, e) {
                this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                    k: 0
                }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                    v: 100
                }, this.o = PropertyFactory.getProp(t, e.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
            }
            return i21.prototype = {
                getMult: function(i) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var a = 0, s = 0, n = 1, o = 1;
                    this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                    var h = BezierFactory.getBezierEasing(a, s, n, o).get, l = 0, p = this.finalS, c = this.finalE, f = this.data.sh;
                    if (2 === f) l = h(l = c === p ? i >= c ? 1 : 0 : t82(0, e54(0.5 / (c - p) + (i - p) / (c - p), 1)));
                    else if (3 === f) l = h(l = c === p ? i >= c ? 0 : 1 : 1 - t82(0, e54(0.5 / (c - p) + (i - p) / (c - p), 1)));
                    else if (4 === f) c === p ? l = 0 : (l = t82(0, e54(0.5 / (c - p) + (i - p) / (c - p), 1))) < 0.5 ? l *= 2 : l = 1 - 2 * (l - 0.5), l = h(l);
                    else if (5 === f) {
                        if (c === p) l = 0;
                        else {
                            var d = c - p, m = -d / 2 + (i = e54(t82(0, i + 0.5 - p), c - p)), u = d / 2;
                            l = Math.sqrt(1 - m * m / (u * u));
                        }
                        l = h(l);
                    } else 6 === f ? (c === p ? l = 0 : (i = e54(t82(0, i + 0.5 - p), c - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (c - p))) / 2), l = h(l)) : (i >= r33(p) && (l = t82(0, e54(i - p < 0 ? e54(c, 1) - (p - i) : c - i, 1))), l = h(l));
                    if (100 !== this.sm.v) {
                        var y = 0.01 * this.sm.v;
                        0 === y && (y = 0.00000001);
                        var g = 0.5 - 0.5 * y;
                        l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1);
                    }
                    return l * this.a.v;
                },
                getValue: function(t) {
                    this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r = this.o.v / e, i = this.s.v / e + r, a = this.e.v / e + r;
                    if (i > a) {
                        var s = i;
                        i = a, a = s;
                    }
                    this.finalS = i, this.finalE = a;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], i21), {
                getTextSelectorProp: function(t, e, r) {
                    return new i21(t, e, r);
                }
            };
        }(), poolFactory = function(t83, e, r) {
            var i = 0, a = t83, s = createSizedArray(a);
            return {
                newElement: function() {
                    return i ? s[i -= 1] : e();
                },
                release: function(t) {
                    i === a && (s = pooling.double(s), a *= 2), r && r(t), s[i] = t, i += 1;
                }
            };
        }, pooling = {
            double: function(t) {
                return t.concat(createSizedArray(t.length));
            }
        }, pointPool = poolFactory(8, function() {
            return createTypedArray("float32", 2);
        }), shapePool = (factory = poolFactory(4, function() {
            return new ShapePath;
        }, function(t) {
            var e, r = t._length;
            for(e = 0; e < r; e += 1)pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1;
        }), factory.clone = function(t) {
            var e, r = factory.newElement(), i = void 0 === t._length ? t.v.length : t._length;
            for(r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return r;
        }, factory), factory, shapeCollectionPool = function() {
            var t84 = {
                newShapeCollection: function() {
                    var t;
                    t = e ? i[e -= 1] : new ShapeCollection;
                    return t;
                },
                release: function(t) {
                    var a, s = t._length;
                    for(a = 0; a < s; a += 1)shapePool.release(t.shapes[a]);
                    t._length = 0, e === r && (i = pooling.double(i), r *= 2);
                    i[e] = t, e += 1;
                }
            }, e = 0, r = 4, i = createSizedArray(r);
            return t84;
        }(), segmentsLengthPool = poolFactory(8, function() {
            return {
                lengths: [],
                totalLength: 0
            };
        }, function(t) {
            var e, r = t.lengths.length;
            for(e = 0; e < r; e += 1)bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0;
        }), bezierLengthPool = poolFactory(8, function() {
            return {
                addedLength: 0,
                percents: createTypedArray("float32", defaultCurveSegments),
                lengths: createTypedArray("float32", defaultCurveSegments)
            };
        }), markerParser = function() {
            function t85(t) {
                for(var e, r = t.split("\r\n"), i = {
                }, a = 0, s = 0; s < r.length; s += 1)2 === (e = r[s].split(":")).length && (i[e[0]] = e[1].trim(), a += 1);
                if (0 === a) throw new Error;
                return i;
            }
            return function(e) {
                for(var r = [], i = 0; i < e.length; i += 1){
                    var a = e[i], s = {
                        time: a.tm,
                        duration: a.dr
                    };
                    try {
                        s.payload = JSON.parse(e[i].cm);
                    } catch (r34) {
                        try {
                            s.payload = t85(e[i].cm);
                        } catch (t) {
                            s.payload = {
                                name: e[i]
                            };
                        }
                    }
                    r.push(s);
                }
                return r;
            };
        }();
        function BaseRenderer() {
        }
        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
                var i = createNS("title"), a = createElementID();
                i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), r += a;
            }
            if (e && e.description) {
                var s = createNS("desc"), n = createElementID();
                s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + n;
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var h = createNS("g");
            this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || ""
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas";
        }
        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
        }
        function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i, a, s = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(n), this.solidPath = "";
            var o, h, l, p, c, f, d = this.masksProperties, m = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
            for(i = 0; i < n; i += 1)if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (g = "mask", v = "mask"), "s" !== d[i].mode && "i" !== d[i].mode || 0 !== m ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), a = createNS("path"), "n" === d[i].mode) this.viewData[i] = {
                op: PropertyFactory.getProp(this.element, d[i].o, 0, 0.01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                elem: a,
                lastPath: ""
            }, s.appendChild(a);
            else {
                var b;
                if (m += 1, a.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (g = "mask", v = "mask", f = PropertyFactory.getProp(this.element, d[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), s.appendChild(p), a.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : (c = null, f = null), this.storedData[i] = {
                    elem: a,
                    x: f,
                    expan: c,
                    lastPath: "",
                    lastOperator: "",
                    filterId: b,
                    lastRadius: 0
                }, "i" === d[i].mode) {
                    h = u.length;
                    var _ = createNS("g");
                    for(o = 0; o < h; o += 1)_.appendChild(u[o]);
                    var P = createNS("mask");
                    P.setAttribute("mask-type", "alpha"), P.setAttribute("id", y + "_" + m), P.appendChild(a), s.appendChild(P), _.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + m + ")"), u.length = 0, u.push(_);
                } else u.push(a);
                d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                    elem: a,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, d[i].o, 0, 0.01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                    invRect: l
                }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i]);
            }
            for(this.maskElement = createNS(g), n = u.length, i = 0; i < n; i += 1)this.maskElement.appendChild(u[i]);
            m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        function HierarchyElement() {
        }
        function FrameElement() {
        }
        function TransformElement() {
        }
        function RenderableElement() {
        }
        function RenderableDOMElement() {
        }
        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e;
        }
        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null;
        }
        function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for(var i = 0, a = t.length; i < a;){
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i += 1;
            }
        }
        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {
            }, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
        }
        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
        }
        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
        }
        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {
            }, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
        }
        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g");
        }
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, r, i = this.layers.length;
            for(this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements();
        }, BaseRenderer.prototype.createItem = function(t) {
            switch(t.ty){
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t);
            }
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.");
        }, BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t, this.globalData, this);
        }, BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t, this.globalData, this);
        }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.buildItem(t);
            this.checkPendingElements();
        }, BaseRenderer.prototype.includeLayers = function(t) {
            var e;
            this.completeLayers = !1;
            var r, i = t.length, a = this.layers.length;
            for(e = 0; e < i; e += 1)for(r = 0; r < a;){
                if (this.layers[r].id === t[e].id) {
                    this.layers[r] = t[e];
                    break;
                }
                r += 1;
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t;
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
            for(var i = this.elements, a = this.layers, s = 0, n = a.length; s < n;)a[s].ind == e && (i[s] && !0 !== i[s] ? (r.push(i[s]), i[s].setAsParent(), void 0 !== a[s].parent ? this.buildElementParenting(t, a[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1;
        }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t);
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
            }
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            };
        }, extendPrototype([
            BaseRenderer
        ], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
            return new NullElement(t, this.globalData, this);
        }, SVGRenderer.prototype.createShape = function(t) {
            return new SVGShapeElement(t, this.globalData, this);
        }, SVGRenderer.prototype.createText = function(t) {
            return new SVGTextLottieElement(t, this.globalData, this);
        }, SVGRenderer.prototype.createImage = function(t) {
            return new IImageElement(t, this.globalData, this);
        }, SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this);
        }, SVGRenderer.prototype.createSolid = function(t) {
            return new ISolidElement(t, this.globalData, this);
        }, SVGRenderer.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var r = createNS("clipPath"), i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var a = createElementID();
            r.setAttribute("id", a), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + a + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
        }, SVGRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, SVGRenderer.prototype.updateContainerSize = function() {
        }, SVGRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)));
            }
        }, SVGRenderer.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for(var e = 0, r = this.elements.length; e < r;){
                    if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break;
                    }
                    e += 1;
                }
            }
        }, SVGRenderer.prototype.renderFrame = function(t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var r = this.layers.length;
                for(this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for(e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
        }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                for(var i, a = 0; a < e;)this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
                i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r);
            }
        }, SVGRenderer.prototype.hide = function() {
            this.layerElement.style.display = "none";
        }, SVGRenderer.prototype.show = function() {
            this.layerElement.style.display = "block";
        }, extendPrototype([
            BaseRenderer
        ], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
            return new CVShapeElement(t, this.globalData, this);
        }, CanvasRenderer.prototype.createText = function(t) {
            return new CVTextElement(t, this.globalData, this);
        }, CanvasRenderer.prototype.createImage = function(t) {
            return new CVImageElement(t, this.globalData, this);
        }, CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this);
        }, CanvasRenderer.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this.globalData, this);
        }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var r = this.contextData.cTr.props;
                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
            }
        }, CanvasRenderer.prototype.ctxOpacity = function(t) {
            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO);
        }, CanvasRenderer.prototype.reset = function() {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
        }, CanvasRenderer.prototype.save = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e, r = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var i = this.contextData.saved[this.contextData.cArrPos];
                for(e = 0; e < 16; e += 1)i[e] = r[e];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
            } else this.canvasContext.save();
        }, CanvasRenderer.prototype.restore = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                var e, r = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props;
                for(e = 0; e < 16; e += 1)i[e] = r[e];
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r);
            } else this.canvasContext.restore();
        }, CanvasRenderer.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var r = "0px 0px 0px";
                e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
            } else this.canvasContext = this.renderConfig.context;
            this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
        }, CanvasRenderer.prototype.updateContainerSize = function() {
            var t, e, r, i;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var a = this.renderConfig.preserveAspectRatio.split(" "), s = a[1] || "meet", n = a[0] || "xMidYMid", o = n.substr(0, 4), h = n.substr(4);
                r = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === s || i < r && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === s || i > r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === s || i > r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (i > r && "meet" === s || i < r && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i > r && "meet" === s || i < r && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
            } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [
                this.transformCanvas.sx,
                0,
                0,
                0,
                0,
                this.transformCanvas.sy,
                0,
                0,
                0,
                0,
                1,
                0,
                this.transformCanvas.tx,
                this.transformCanvas.ty,
                0,
                1
            ], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
        }, CanvasRenderer.prototype.destroy = function() {
            var t;
            for(this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
        }, CanvasRenderer.prototype.renderFrame = function(t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var r;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var i = this.layers.length;
                for(this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                    for(!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore();
                }
            }
        }, CanvasRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                e[t] = r, r.initExpressions();
            }
        }, CanvasRenderer.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;)this.pendingElements.pop().checkParenting();
        }, CanvasRenderer.prototype.hide = function() {
            this.animationItem.container.style.display = "none";
        }, CanvasRenderer.prototype.show = function() {
            this.animationItem.container.style.display = "block";
        }, extendPrototype([
            BaseRenderer
        ], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;)this.pendingElements.pop().checkParenting();
        }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                var i = this.layers[e];
                if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                else if (this.threeDElements) this.addTo3dContainer(r, e);
                else {
                    for(var a, s, n = 0; n < e;)this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n], a = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : s.getBaseElement()) || a), n += 1;
                    a ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, a) : i.ddd && this.supports3d || this.layerElement.appendChild(r);
                }
            }
        }, HybridRenderer.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
        }, HybridRenderer.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
        }, HybridRenderer.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
        }, HybridRenderer.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
        }, HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
        }, HybridRenderer.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
        }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
            for(var e = 0, r = this.threeDElements.length; e < r;){
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1;
            }
            return null;
        }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
            var r, i, a = createTag("div");
            styleDiv(a);
            var s = createTag("div");
            if (styleDiv(s), "3d" === e) {
                (r = a.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                r.webkitTransformOrigin = "50% 50%", r.mozTransformOrigin = "50% 50%", r.transformOrigin = "50% 50%";
                var n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (i = s.style).transform = n, i.webkitTransform = n;
            }
            a.appendChild(s);
            var o = {
                container: s,
                perspectiveElem: a,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(o), o;
        }, HybridRenderer.prototype.build3dContainers = function() {
            var t, e, r = this.layers.length, i = "";
            for(t = 0; t < r; t += 1)this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
            for(t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
        }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
            for(var r = 0, i = this.threeDElements.length; r < i;){
                if (e <= this.threeDElements[r].endPos) {
                    for(var a, s = this.threeDElements[r].startPos; s < e;)this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                    a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
                    break;
                }
                r += 1;
            }
        }, HybridRenderer.prototype.configAnimation = function(t) {
            var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
            i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
            var a = createNS("svg");
            a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
            var s = createNS("defs");
            a.appendChild(s), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
        }, HybridRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, HybridRenderer.prototype.updateContainerSize = function() {
            var t, e, r, i, a = this.animationItem.wrapper.offsetWidth, s = this.animationItem.wrapper.offsetHeight, n = a / s;
            this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform;
        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
            this.resizerElem.style.display = "none";
        }, HybridRenderer.prototype.show = function() {
            this.resizerElem.style.display = "block";
        }, HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length;
                for(t = 0; t < i; t += 1){
                    var a = this.threeDElements[t].perspectiveElem.style;
                    a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", a.perspective = a.webkitPerspective;
                }
            }
        }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length, i = createTag("div");
            for(e = 0; e < r; e += 1)if (t[e].xt) {
                var a = this.createComp(t[e], i, this.globalData.comp, null);
                a.initExpressions(), this.globalData.projectInterface.registerComposition(a);
            }
        }, MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop;
        }, MaskElement.prototype.renderFrame = function(t) {
            var e, r = this.element.finalTransform.mat, i = this.masksProperties.length;
            for(e = 0; e < i; e += 1)if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                var a = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
            }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement;
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
        }, MaskElement.prototype.drawPath = function(t, e, r) {
            var i, a, s = " M" + e.v[0][0] + "," + e.v[0][1];
            for(a = e._length, i = 1; i < a; i += 1)s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
            if (e.c && a > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
                var n = "";
                r.elem && (e.c && (n = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", n)), r.lastPath = s;
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        }, HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting();
            },
            setHierarchy: function(t) {
                this.hierarchy = t;
            },
            setAsParent: function() {
                this._isParent = !0;
            },
            checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
            }
        }, FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
            },
            prepareProperties: function(t, e) {
                var r, i = this.dynamicProperties.length;
                for(r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
            },
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
            }
        }, TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for(; r < i;){
                        if (this.hierarchy[r].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                        }
                        r += 1;
                    }
                    if (this.finalTransform._matMdf) for(t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1)t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for(var r, i = !0, a = this.comp; i;)a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = !1;
                var s, n = e.length;
                for(r = 0; r < n; r += 1)s = e[r].mat.applyToPointArray(0, 0, 0), t = [
                    t[0] - s[0],
                    t[1] - s[1],
                    0
                ];
                return t;
            },
            mHelper: new Matrix
        }, RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
            },
            addRenderableComponent: function(t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
            },
            removeRenderableComponent: function(t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
            },
            prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t);
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
            },
            checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
            },
            renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for(t = 0; t < e; t += 1)this.renderableComponents[t].renderFrame(this._isFirstFrame);
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                };
            },
            getLayerSize: function() {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                };
            }
        }, extendPrototype([
            RenderableElement,
            createProxyFunction({
                initElement: function(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                },
                renderInnerContent: function() {
                },
                prepareFrame: function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement();
                }
            })
        ], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1;
        }, SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0;
        }, extendPrototype([
            DynamicPropertyContainer
        ], SVGStrokeStyleData), extendPrototype([
            DynamicPropertyContainer
        ], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var r = createElementID(), i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var a, s, n, o = [];
            for(n = 4 * e.g.p, s = 0; s < n; s += 4)a = createNS("stop"), i.appendChild(a), o.push(a);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o;
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, a, s = createNS("mask"), n = createNS("path");
                s.appendChild(n);
                var o = createElementID(), h = createElementID();
                s.setAttribute("id", h);
                var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var p = this.stops;
                for(i = 4 * t.g.p; i < a; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
                n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = s, this.ost = p, this.maskId = h, e.msElem = n;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], SVGGradientFillStyleData), extendPrototype([
            SVGGradientFillStyleData,
            DynamicPropertyContainer
        ], SVGGradientStrokeStyleData);
        var SVGElementsRenderer = function() {
            var t86 = new Matrix, e55 = new Matrix;
            function r35(t, e, r) {
                (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
            }
            function i22(r, i, a) {
                var s, n, o, h, l, p, c, f, d, m, u, y = i.styles.length, g = i.lvl;
                for(p = 0; p < y; p += 1){
                    if (h = i.sh._mdf || a, i.styles[p].lvl < g) {
                        for(f = e55.reset(), m = g - i.styles[p].lvl, u = i.transformers.length - 1; !h && m > 0;)h = i.transformers[u].mProps._mdf || h, m -= 1, u -= 1;
                        if (h) for(m = g - i.styles[p].lvl, u = i.transformers.length - 1; m > 0;)d = i.transformers[u].mProps.v.props, f.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), m -= 1, u -= 1;
                    } else f = t86;
                    if (n = (c = i.sh.paths)._length, h) {
                        for(o = "", s = 0; s < n; s += 1)(l = c.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                        i.caches[p] = o;
                    } else o = i.caches[p];
                    i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = h || i.styles[p]._mdf;
                }
            }
            function a18(t, e, r) {
                var i = e.style;
                (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v);
            }
            function s18(t, e, r) {
                n11(t, e, r), o9(t, e, r);
            }
            function n11(t, e, r) {
                var i, a, s, n, o, h = e.gf, l = e.g._hasOpacity, p = e.s.v, c = e.e.v;
                if (e.o._mdf || r) {
                    var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(f, e.o.v);
                }
                if (e.s._mdf || r) {
                    var d = 1 === t.t ? "x1" : "cx", m = "x1" === d ? "y1" : "cy";
                    h.setAttribute(d, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(m, p[1]));
                }
                if (e.g._cmdf || r) {
                    i = e.cst;
                    var u = e.g.c;
                    for(s = i.length, a = 0; a < s; a += 1)(n = i[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")");
                }
                if (l && (e.g._omdf || r)) {
                    var y = e.g.o;
                    for(s = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < s; a += 1)n = i[a], e.g._collapsable || n.setAttribute("offset", y[2 * a] + "%"), n.setAttribute("stop-opacity", y[2 * a + 1]);
                }
                if (1 === t.t) (e.e._mdf || r) && (h.setAttribute("x2", c[0]), h.setAttribute("y2", c[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                    o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                    var g = Math.atan2(c[1] - p[1], c[0] - p[0]), v = e.h.v;
                    v >= 1 ? v = 0.99 : v <= -1 && (v = -0.99);
                    var b = o * v, _ = Math.cos(g + e.a.v) * b + p[0], P = Math.sin(g + e.a.v) * b + p[1];
                    h.setAttribute("fx", _), h.setAttribute("fy", P), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", P));
                }
            }
            function o9(t, e, r) {
                var i = e.style, a = e.d;
                a && (a._mdf || r) && a.dashStr && (i.pElem.setAttribute("stroke-dasharray", a.dashStr), i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v));
            }
            return {
                createRenderFunction: function(t) {
                    switch(t.ty){
                        case "fl":
                            return a18;
                        case "gf":
                            return n11;
                        case "gs":
                            return s18;
                        case "st":
                            return o9;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return i22;
                        case "tr":
                            return r35;
                        default:
                            return null;
                    }
                }
            };
        }();
        function ShapeTransformManager() {
            this.sequences = {
            }, this.sequenceList = [], this.transform_key_count = 0;
        }
        function CVShapeData(t, e, r, i) {
            this.styledShapes = [], this.tr = [
                0,
                0,
                0,
                0,
                0,
                0
            ];
            var a, s = 4;
            "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var n, o = r.length;
            for(a = 0; a < o; a += 1)r[a].closed || (n = {
                transforms: i.addTransformSequence(r[a].transforms),
                trNodes: []
            }, this.styledShapes.push(n), r[a].elements.push(n));
        }
        function BaseElement() {
        }
        function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
        }
        function SVGBaseElement() {
        }
        function IShapeElement() {
        }
        function ITextElement() {
        }
        function ICompElement() {
        }
        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            };
        }
        function ISolidElement(t, e, r) {
            this.initElement(t, e, r);
        }
        function AudioElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        function FootageElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
        }
        function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        function SVGTextLottieElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
        }
        function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
        }
        function SVGTintFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                var i, a = createNS("feMerge");
                t.appendChild(a), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), a.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), a.appendChild(i);
            }
        }
        function SVGFillFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r;
        }
        function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var r = createNS("feGaussianBlur");
            t.appendChild(r), this.feGaussianBlur = r;
        }
        function SVGStrokeEffect(t, e) {
            this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [];
        }
        function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
            var i = createNS("feComponentTransfer");
            i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
            var a = createNS("feFuncR");
            a.setAttribute("type", "table"), i.appendChild(a), this.feFuncR = a;
            var s = createNS("feFuncG");
            s.setAttribute("type", "table"), i.appendChild(s), this.feFuncG = s;
            var n = createNS("feFuncB");
            n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n;
        }
        function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var r = this.filterManager.effectElements, i = createNS("feComponentTransfer");
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i));
        }
        function SVGDropShadowEffect(t, e) {
            var r = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", r.x), t.setAttribute("y", r.y), t.setAttribute("width", r.width), t.setAttribute("height", r.height), this.filterManager = e;
            var i = createNS("feGaussianBlur");
            i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
            var a = createNS("feOffset");
            a.setAttribute("dx", "25"), a.setAttribute("dy", "0"), a.setAttribute("in", "drop_shadow_1"), a.setAttribute("result", "drop_shadow_2"), this.feOffset = a, t.appendChild(a);
            var s = createNS("feFlood");
            s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
            var n = createNS("feComposite");
            n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
            var o, h = createNS("feMerge");
            t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o);
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(t) {
                var e, r = t.length, i = "_";
                for(e = 0; e < r; e += 1)i += t[e].transform.key + "_";
                var a = this.sequences[i];
                return a || (a = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[i] = a, this.sequenceList.push(a)), a;
            },
            processSequence: function(t, e) {
                for(var r, i = 0, a = t.transforms.length, s = e; i < a && !e;){
                    if (t.transforms[i].transform.mProps._mdf) {
                        s = !0;
                        break;
                    }
                    i += 1;
                }
                if (s) for(t.finalTransform.reset(), i = a - 1; i >= 0; i -= 1)r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                t._mdf = s;
            },
            processSequences: function(t) {
                var e, r = this.sequenceList.length;
                for(e = 0; e < r; e += 1)this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function() {
                return this.transform_key_count += 1, "_" + this.transform_key_count;
            }
        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for(var t = 0, e = this.data.masksProperties.length; t < e;){
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1;
                }
                return !1;
            },
            initExpressions: function() {
                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
            },
            initBaseData: function(t, e, r) {
                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
            },
            getType: function() {
                return this.type;
            },
            sourceRectAtTime: function() {
            }
        }, NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0);
        }, NullElement.prototype.renderFrame = function() {
        }, NullElement.prototype.getBaseElement = function() {
            return null;
        }, NullElement.prototype.destroy = function() {
        }, NullElement.prototype.sourceRectAtTime = function() {
        }, NullElement.prototype.hide = function() {
        }, extendPrototype([
            BaseElement,
            TransformElement,
            HierarchyElement,
            FrameElement
        ], NullElement), SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g");
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t, e, r, i = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var a = createNS("mask");
                        a.setAttribute("id", this.layerId), a.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), a.appendChild(this.layerElement), i = a, this.globalData.defs.appendChild(a), featureSupport.maskType || 1 != this.data.td || (a.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, a.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"));
                    } else if (2 == this.data.td) {
                        var s = createNS("mask");
                        s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                        var n = createNS("g");
                        s.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
                        var o = createNS("feComponentTransfer");
                        o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                        var h = createNS("feFuncA");
                        h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                        var l = createNS("rect");
                        l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), i = n, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), n.appendChild(l), r.appendChild(this.layerElement), i = r, n.appendChild(r)), this.globalData.defs.appendChild(s);
                    }
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var p = createNS("clipPath"), c = createNS("path");
                    c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var f = createElementID();
                    if (p.setAttribute("id", f), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) {
                        var d = createNS("g");
                        d.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), d.appendChild(this.layerElement), this.transformedElement = d, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")");
                }
                0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")");
            }
        }, IShapeElement.prototype = {
            addShapeToModifiers: function(t) {
                var e, r = this.shapeModifiers.length;
                for(e = 0; e < r; e += 1)this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function(t) {
                for(var e = this.shapeModifiers.length; 0 < e;)if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1;
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for(t = 0; t < e; t += 1)this.shapes[t].sh.reset();
                    for(t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                }
            },
            searchProcessedElement: function(t) {
                for(var e = this.processedElements, r = 0, i = e.length; r < i;){
                    if (e[r].elem === t) return e[r].pos;
                    r += 1;
                }
                return 0;
            },
            addProcessedElement: function(t, e) {
                for(var r = this.processedElements, i = r.length; i;)if (r[i -= 1].elem === t) return void (r[i].pos = e);
                r.push(new ProcessedElement(t, e));
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
            }
        }, ITextElement.prototype.initElement = function(t, e, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
        }, ITextElement.prototype.createPathShape = function(t, e) {
            var r, i, a = e.length, s = "";
            for(r = 0; r < a; r += 1)i = e[r].ks.k, s += buildShapeString(i, i.i.length, !0, t);
            return s;
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e);
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t);
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t);
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, a) {
            switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
            }
            e.translate(i, a, 0);
        }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {
        }, extendPrototype([
            BaseElement,
            TransformElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
        }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                }
                var r, i = this.elements.length;
                for(this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0));
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }, ICompElement.prototype.setElements = function(t) {
            this.elements = t;
        }, ICompElement.prototype.getElements = function() {
            return this.elements;
        }, ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement();
        }, extendPrototype([
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect;
        }, extendPrototype([
            IImageElement
        ], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
        }, AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e;
            }
        }, extendPrototype([
            RenderableElement,
            BaseElement,
            FrameElement
        ], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
        }, AudioElement.prototype.show = function() {
        }, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1;
        }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
        }, AudioElement.prototype.resume = function() {
            this._canPlay = !0;
        }, AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t);
        }, AudioElement.prototype.volume = function(t) {
            this.audio.volume(t);
        }, AudioElement.prototype.getBaseElement = function() {
            return null;
        }, AudioElement.prototype.destroy = function() {
        }, AudioElement.prototype.sourceRectAtTime = function() {
        }, AudioElement.prototype.initExpressions = function() {
        }, FootageElement.prototype.prepareFrame = function() {
        }, extendPrototype([
            RenderableElement,
            BaseElement,
            FrameElement
        ], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null;
        }, FootageElement.prototype.renderFrame = function() {
        }, FootageElement.prototype.destroy = function() {
        }, FootageElement.prototype.initExpressions = function() {
            this.layerInterface = FootageInterface(this);
        }, FootageElement.prototype.getFootageData = function() {
            return this.footageData;
        }, extendPrototype([
            SVGRenderer,
            ICompElement,
            SVGBaseElement
        ], SVGCompElement), extendPrototype([
            BaseElement,
            TransformElement,
            SVGBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement
        ], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for(var e = 0, r = t.length, i = [], a = ""; e < r;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
            return i.push(a), i;
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var a = r.fWeight, s = r.fStyle;
                this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a);
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n, o = r.l || [], h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l, p = this.mHelper, c = "", f = this.data.singleShape, d = 0, m = 0, u = !0, y = 0.001 * r.tr * r.finalSize;
            if (!f || h || r.sz) {
                var g, v, b = this.textSpans.length;
                for(t = 0; t < e; t += 1)h && f && 0 !== t || (n = b > t ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (d = -y, m += r.yOffset, m += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, d, m), d += o[t].l || 0, d += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {
                }).shapes ? g.shapes[0].it : [], f ? c += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                f && n && n.setAttribute("d", c);
            } else {
                var _ = this.textContainer, P = "start";
                switch(r.j){
                    case 1:
                        P = "end";
                        break;
                    case 2:
                        P = "middle";
                        break;
                    default:
                        P = "start";
                }
                _.setAttribute("text-anchor", P), _.setAttribute("letter-spacing", y);
                var S = this.buildTextContents(r.finalText);
                for(e = S.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = S[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", _.appendChild(n), this.textSpans[t] = n, m += r.finalLineHeight;
                this.layerElement.appendChild(_);
            }
            for(; t < this.textSpans.length;)this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = !0;
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                };
            }
            return this.bbox;
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var r, i, a = this.textAnimator.renderedLetters, s = this.textProperty.currentData.l;
                for(e = s.length, t = 0; t < e; t += 1)s[t].n || (r = a[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc));
            }
        }, extendPrototype([
            BaseElement,
            TransformElement,
            SVGBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
        }, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {
        }, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e, r, i, a = this.shapes.length, s = this.stylesList.length, n = [], o = !1;
            for(r = 0; r < s; r += 1){
                for(i = this.stylesList[r], o = !1, n.length = 0, t = 0; t < a; t += 1)-1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
                n.length > 1 && o && this.setShapesAsAnimated(n);
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)t[e].setAsAnimated();
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var r, i = new SVGStyleData(t, e), a = i.pElem;
            if ("st" === t.ty) r = new SVGStrokeStyleData(this, t, i);
            else if ("fl" === t.ty) r = new SVGFillStyleData(this, t, i);
            else if ("gf" === t.ty || "gs" === t.ty) r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"));
            return "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i;
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
            var i = 4;
            "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
            var a = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for(var r = 0, i = this.animatedContents.length; r < i;){
                if (this.animatedContents[r].element === e) return;
                r += 1;
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            });
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e, r = t.styles, i = this.stylesList.length;
            for(e = 0; e < i; e += 1)this.stylesList[e].closed || r.push(this.stylesList[e]);
        }, SVGShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
            this.renderModifiers();
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, a, s, n) {
            var o, h, l, p, c, f, d = [].concat(s), m = t.length - 1, u = [], y = [];
            for(o = m; o >= 0; o -= 1){
                if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), u.push(e[o].style);
                else if ("gr" === t[o].ty) {
                    if (f) for(l = e[o].it.length, h = 0; h < l; h += 1)e[o].prevViewData[h] = e[o].it[h];
                    else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, d, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
                } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, d.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], d, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (f ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === t[o].ty && (f ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), n = !1), y.push(c));
                this.addProcessedElement(t[o], o + 1);
            }
            for(m = u.length, o = 0; o < m; o += 1)u[o].closed = !0;
            for(m = y.length, o = 0; o < m; o += 1)y[o].closed = !0;
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for(t = 0; t < e; t += 1)this.stylesList[t].reset();
            for(this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
        }, SVGShapeElement.prototype.renderShape = function() {
            var t, e, r = this.animatedContents.length;
            for(t = 0; t < r; t += 1)e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        }, SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
            }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
            }
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = 0.3 * this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = 3 == r ? 0 : e, a = 2 == r ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
                var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", s);
            }
        }, SVGStrokeEffect.prototype.initialize = function() {
            var t, e, r, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for(1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1)t = createNS("path"), e.appendChild(t), this.paths.push({
                p: t,
                m: r
            });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS("mask"), n = createElementID();
                s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                var o = createNS("g");
                for(o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); a[0];)o.appendChild(a[0]);
                this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff");
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v) for(a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;)this.elem.layerElement.removeChild(a[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
            }
            this.initialized = !0, this.pathMasker = e;
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            var e;
            this.initialized || this.initialize();
            var r, i, a = this.paths.length;
            for(e = 0; e < a; e += 1)if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                var s;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var n = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), o = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), h = i.getTotalLength();
                    s = "0 0 0 " + h * n + " ";
                    var l, p = h * (o - n), c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, f = Math.floor(p / c);
                    for(l = 0; l < f; l += 1)s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                    s += "0 " + 10 * h + " 0 0";
                } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
                i.setAttribute("stroke-dasharray", s);
            }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var d = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")");
            }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, a = i[0] + " " + r[0] + " " + e[0], s = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n);
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r;
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, a) {
            for(var s, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                length: 256
            }), c = 0, f = a - i, d = e - t; o <= 256;)n = (s = o / 256) <= h ? d < 0 ? a : i : s >= l ? d < 0 ? i : a : i + f * Math.pow((s - t) / d, 1 / r), p[c] = n, c += 1, o += 256 / 255;
            return p.join(" ");
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
            }
        }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, a = r * Math.cos(i), s = r * Math.sin(i);
                    this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s);
                }
            }
        };
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
        }
        function SVGEffects(t) {
            var e, r, i = t.data.ef ? t.data.ef.length : 0, a = createElementID(), s = filtersFactory.createFilter(a, !0), n = 0;
            for(this.filters = [], e = 0; e < i; e += 1)r = null, 20 === t.data.ef[e].ty ? (n += 1, r = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, r = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, r = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, r = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, r = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, r = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), r && this.filters.push(r);
            n && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
        }
        function CVContextData() {
            var t;
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
            for(this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1)this.saved[t] = createTypedArray("float32", 16);
            this._length = 15;
        }
        function CVBaseElement() {
        }
        function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
        }
        function CVCompElement(t, e, r) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        function CVMaskElement(t, e) {
            var r;
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var i = this.masksProperties.length, a = !1;
            for(r = 0; r < i; r += 1)"n" !== this.masksProperties[r].mode && (a = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            this.hasMasks = a, a && this.element.addRenderableComponent(this);
        }
        function CVShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r);
        }
        function CVSolidElement(t, e, r) {
            this.initElement(t, e, r);
        }
        function CVTextElement(t, e, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, r);
        }
        function CVEffects() {
        }
        function HBaseElement() {
        }
        function HSolidElement(t, e, r) {
            this.initElement(t, e, r);
        }
        function HCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        function HShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            };
        }
        function HTextElement(t, e, r) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r);
        }
        function HImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
        }
        function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var a, s = t.ks.or.k.length;
                for(a = 0; a < s; a += 1)t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null;
            }
            this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            };
        }
        function HEffects() {
        }
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for(var e = 0, r = _svgMatteSymbols.length; e < r;){
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1;
            }
            return null;
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for(var i, a = r.children, s = 0, n = a.length; s < n && a[s] !== t.layerElement;)s += 1;
                s <= n - 2 && (i = a[s + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o);
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID(), i = createNS("mask");
                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var a = t.globalData.defs;
                a.appendChild(i);
                var s = createNS("symbol");
                s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), a.appendChild(s);
                var n = createNS("use");
                n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show();
            }
            t.setMatte(e.layerId);
        }, SVGMatte3Effect.prototype.initialize = function() {
            for(var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;)e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0;
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize();
        }, SVGEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for(e = 0; e < r; e += 1)this.filters[e].renderFrame(t);
        }, CVContextData.prototype.duplicate = function() {
            var t = 2 * this._length, e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var r = 0;
            for(r = this._length; r < t; r += 1)this.saved[r] = createTypedArray("float32", 16);
            this._length = t;
        }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
        }, CVBaseElement.prototype = {
            createElements: function() {
            },
            initRendererElement: function() {
            },
            createContainerElements: function() {
                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
            },
            createContent: function() {
            },
            setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e;
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this);
            },
            hideElement: function() {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
            },
            renderFrame: function() {
                if (!this.hidden && !this.data.hd) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
                }
            },
            destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement
        ], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, r, i = t.getContext("2d"), a = this.img.width, s = this.img.height, n = a / s, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = s) * o : r = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
            }
        }, CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0);
        }, CVImageElement.prototype.destroy = function() {
            this.img = null;
        }, extendPrototype([
            CanvasRenderer,
            ICompElement,
            CVBaseElement
        ], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var t, e = this.canvasContext;
            for(e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }, CVCompElement.prototype.destroy = function() {
            var t;
            for(t = this.layers.length - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null;
        }, CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t, e, r, i, a = this.element.finalTransform.mat, s = this.element.canvasContext, n = this.masksProperties.length;
                for(s.beginPath(), t = 0; t < n; t += 1)if ("n" !== this.masksProperties[t].mode) {
                    var o;
                    this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
                    var h = i._length;
                    for(o = 1; o < h; o += 1)r = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                    r = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                }
                this.element.globalData.renderer.save(!0), s.clip();
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null;
        }, extendPrototype([
            BaseElement,
            TransformElement,
            CVBaseElement,
            IShapeElement,
            HierarchyElement,
            FrameElement,
            RenderableElement
        ], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd
            }, i = {
            };
            if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                k: 0
            }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || {
                k: 0
            }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), "st" === t.ty || "gs" === t.ty) {
                if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                    var a = new DashProperty(this, t.d, "canvas", this);
                    i.d = a, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
                }
            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(r), i.style = r, i;
        }, CVShapeElement.prototype.createGroupElement = function() {
            return {
                it: [],
                prevViewData: []
            };
        }, CVShapeElement.prototype.createTransformElement = function(t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            };
        }, CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e;
        }, CVShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, r = this.stylesList.length;
            for(e = 0; e < r; e += 1)this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for(t = 0; t < e; t += 1)this.stylesList[t].closed || this.stylesList[t].transforms.pop();
        }, CVShapeElement.prototype.closeStyles = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)t[e].closed = !0;
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, a) {
            var s, n, o, h, l, p, c = t.length - 1, f = [], d = [], m = [].concat(a);
            for(s = c; s >= 0; s -= 1){
                if ((h = this.searchProcessedElement(t[s])) ? e[s] = r[h - 1] : t[s]._shouldRender = i, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) h ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], m), f.push(e[s].style);
                else if ("gr" === t[s].ty) {
                    if (h) for(o = e[s].it.length, n = 0; n < o; n += 1)e[s].prevViewData[n] = e[s].it[n];
                    else e[s] = this.createGroupElement(t[s]);
                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, m);
                } else "tr" === t[s].ty ? (h || (p = this.createTransformElement(t[s]), e[s] = p), m.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty ? (h ? (l = e[s]).closed = !1 : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), d.push(l)) : "rp" === t[s].ty && (h ? (l = e[s]).closed = !0 : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), i = !1), d.push(l));
                this.addProcessedElement(t[s], s + 1);
            }
            for(this.removeTransformFromStyleList(), this.closeStyles(f), c = d.length, s = 0; s < c; s += 1)d[s].closed = !0;
        }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
        }, CVShapeElement.prototype.drawLayer = function() {
            var t, e, r, i, a, s, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, c = this.globalData.canvasContext;
            for(t = 0; t < l; t += 1)if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                for(p.save(), s = h.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? h.co : h.grd, c.lineWidth = h.wi, c.lineCap = h.lc, c.lineJoin = h.lj, c.miterLimit = h.ml || 0) : c.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1){
                    for("st" !== o && "gs" !== o || (c.beginPath(), h.da && (c.setLineDash(h.da), c.lineDashOffset = h.do)), a = (n = s[e].trNodes).length, i = 0; i < a; i += 1)"m" === n[i].t ? c.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? c.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : c.closePath();
                    "st" !== o && "gs" !== o || (c.stroke(), h.da && c.setLineDash(this.dashResetter));
                }
                "st" !== o && "gs" !== o && c.fill(h.r), p.restore();
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
            var a, s;
            for(s = t, a = e.length - 1; a >= 0; a -= 1)"tr" === e[a].ty ? (s = r[a].transform, this.renderShapeTransform(t, s)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], r[a]) : "fl" === e[a].ty ? this.renderFill(e[a], r[a], s) : "st" === e[a].ty ? this.renderStroke(e[a], r[a], s) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], r[a], s) : "gr" === e[a].ty ? this.renderShape(s, e[a].it, r[a].it) : e[a].ty;
            i && this.drawLayer();
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r, i, a, s = t.trNodes, n = e.paths, o = n._length;
                s.length = 0;
                var h = t.transforms.finalTransform;
                for(a = 0; a < o; a += 1){
                    var l = n.shapes[a];
                    if (l && l.v) {
                        for(i = l._length, r = 1; r < i; r += 1)1 === r && s.push({
                            t: "m",
                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                        }), s.push({
                            t: "c",
                            pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                        });
                        1 === i && s.push({
                            t: "m",
                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                        }), l.c && i && (s.push({
                            t: "c",
                            pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                        }), s.push({
                            t: "z"
                        }));
                    }
                }
                t.trNodes = s;
            }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
            if (!0 !== t.hd && t._shouldRender) {
                var r, i = e.styledShapes.length;
                for(r = 0; r < i; r += 1)this.renderStyledShape(e.styledShapes[r], e.sh);
            }
        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
            var i, a = e.style;
            if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var s, n = this.globalData.canvasContext, o = e.s.v, h = e.e.v;
                if (1 === t.t) i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
                else {
                    var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)), p = Math.atan2(h[1] - o[1], h[0] - o[0]), c = e.h.v;
                    c >= 1 ? c = 0.99 : c <= -1 && (c = -0.99);
                    var f = l * c, d = Math.cos(p + e.a.v) * f + o[0], m = Math.sin(p + e.a.v) * f + o[1];
                    i = n.createRadialGradient(d, m, 0, o[0], o[1], l);
                }
                var u = t.g.p, y = e.g.c, g = 1;
                for(s = 0; s < u; s += 1)e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * s + 1]), i.addColorStop(y[4 * s] / 100, "rgba(" + y[4 * s + 1] + "," + y[4 * s + 2] + "," + y[4 * s + 3] + "," + g + ")");
                a.grd = i;
            }
            a.coOp = e.o.v * r.opacity;
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
            var i = e.style, a = e.d;
            a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
        }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
        }, extendPrototype([
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement
        ], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
        }, extendPrototype([
            BaseElement,
            TransformElement,
            CVBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement,
            ITextElement
        ], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var r = !1;
            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var i, a, s, n, o, h, l, p, c, f, d, m, u = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
            var v = this.data.singleShape, b = 0.001 * t.tr * t.finalSize, _ = 0, P = 0, S = !0, E = 0;
            for(i = 0; i < a; i += 1){
                for(n = (s = this.globalData.fontManager.getCharData(t.finalText[i], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {
                }, g.reset(), v && y[i].n && (_ = -b, P += t.yOffset, P += S ? 1 : 0, S = !1), c = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, _, P), d = createSizedArray(c), p = 0; p < c; p += 1){
                    for(h = l[p].ks.k.i.length, f = l[p].ks.k, m = [], o = 1; o < h; o += 1)1 === o && m.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), m.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[o][0], f.i[o][1], 0), g.applyToY(f.i[o][0], f.i[o][1], 0), g.applyToX(f.v[o][0], f.v[o][1], 0), g.applyToY(f.v[o][0], f.v[o][1], 0));
                    m.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), d[p] = m;
                }
                v && (_ += y[i].l, _ += b), this.textSpans[E] ? this.textSpans[E].elem = d : this.textSpans[E] = {
                    elem: d
                }, E += 1;
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            var t, e, r, i, a, s, n = this.canvasContext;
            n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
            e = l.length;
            var p, c, f = null, d = null, m = null;
            for(t = 0; t < e; t += 1)if (!l[t].n) {
                if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                    for(o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)for(s = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), a = 2; a < s; a += 6)this.globalData.canvasContext.bezierCurveTo(c[a], c[a + 1], c[a + 2], c[a + 3], c[a + 4], c[a + 5]);
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                }
                if (this.stroke) {
                    for(o && o.sw ? m !== o.sw && (m = o.sw, n.lineWidth = o.sw) : m !== this.values.sWidth && (m = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? d !== o.sc && (d = o.sc, n.strokeStyle = o.sc) : d !== this.values.stroke && (d = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)for(s = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), a = 2; a < s; a += 6)this.globalData.canvasContext.bezierCurveTo(c[a], c[a + 1], c[a + 2], c[a + 3], c[a + 4], c[a + 5]);
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                }
                o && this.globalData.renderer.restore();
            }
        }, CVEffects.prototype.renderFrame = function() {
        }, HBaseElement.prototype = {
            checkBlendMode: function() {
            },
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function() {
                var t = this.transformedElement ? this.transformedElement.style : {
                };
                if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    t.transform = e, t.webkitTransform = e;
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData);
            },
            addEffects: function() {
            },
            setMatte: function() {
            }
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement
        ], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
        }, extendPrototype([
            HybridRenderer,
            ICompElement,
            HBaseElement
        ], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
            for(var r, i = 0; i < e;)this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
        }, extendPrototype([
            BaseElement,
            TransformElement,
            HSolidElement,
            SVGShapeElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableElement
        ], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var r, i = t.length;
            for(r = 0; r < i; r += 1)e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var r, i, a, s, n, o = t.sh.v, h = t.transformers, l = o._length;
            if (!(l <= 1)) {
                for(r = 0; r < l - 1; r += 1)i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, a, s, n, e);
                o.c && (i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, a, s, n, e));
            }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, i, a) {
            this.getBoundsOfCurve(t, e, r, i);
            var s = this.shapeBoundingBox;
            a.x = bmMin(s.left, a.x), a.xMax = bmMax(s.right, a.xMax), a.y = bmMin(s.top, a.y), a.yMax = bmMax(s.bottom, a.yMax);
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
            for(var a, s, n, o, h, l, p, c = [
                [
                    t[0],
                    i[0]
                ],
                [
                    t[1],
                    i[1]
                ]
            ], f = 0; f < 2; ++f)s = 6 * t[f] - 12 * e[f] + 6 * r[f], a = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], s |= 0, n |= 0, 0 === (a |= 0) && 0 === s || (0 === a ? (o = -n / s) > 0 && o < 1 && c[f].push(this.calculateF(o, t, e, r, i, f)) : (h = s * s - 4 * n * a) >= 0 && ((l = (-s + bmSqrt(h)) / (2 * a)) > 0 && l < 1 && c[f].push(this.calculateF(l, t, e, r, i, f)), (p = (-s - bmSqrt(h)) / (2 * a)) > 0 && p < 1 && c[f].push(this.calculateF(p, t, e, r, i, f))));
            this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1]);
        }, HShapeElement.prototype.calculateF = function(t, e, r, i, a, s) {
            return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bmPow(t, 2) * i[s] + bmPow(t, 3) * a[s];
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var r, i = t.length;
            for(r = 0; r < i; r += 1)t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e);
        }, HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
        }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox, e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var r = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var i = this.shapeCont.style, a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    i.transform = a, i.webkitTransform = a;
                }
            }
        }, extendPrototype([
            BaseElement,
            TransformElement,
            HBaseElement,
            HierarchyElement,
            FrameElement,
            RenderableDOMElement,
            ITextElement
        ], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t;
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting();
        }, HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var i, a, s = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars) {
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                else {
                    e.fontFamily = s.fFamily;
                    var n = t.fWeight, o = t.fStyle;
                    e.fontStyle = o, e.fontWeight = n;
                }
            }
            var h, l, p, c = t.l;
            a = c.length;
            var f, d = this.mHelper, m = "", u = 0;
            for(i = 0; i < a; i += 1){
                if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                    var y, g = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (y = g ? g.data : null, d.reset(), y && y.shapes && (f = y.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(d, f), h.setAttribute("d", m)), this.isMasked) this.innerElem.appendChild(h);
                    else {
                        if (this.innerElem.appendChild(l), y && y.shapes) {
                            document.body.appendChild(p);
                            var v = p.getBBox();
                            p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                            var b = p.style, _ = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                            b.transform = _, b.webkitTransform = _, c[i].yOffset = v.y - 1;
                        } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                        l.appendChild(p);
                    }
                } else if (h.textContent = c[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                else {
                    this.innerElem.appendChild(l);
                    var P = h.style, S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    P.transform = S, P.webkitTransform = S;
                }
                this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l, this.textSpans[u].style.display = "block", this.textPaths[u] = h, u += 1;
            }
            for(; u < this.textSpans.length;)this.textSpans[u].style.display = "none", u += 1;
        }, HTextElement.prototype.renderInnerContent = function() {
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e;
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var r, i, a, s, n, o = 0, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
                for(i = l.length, r = 0; r < i; r += 1)l[r].n ? o += 1 : (s = this.textSpans[r], n = this.textPaths[r], a = h[o], o += 1, a._mdf.m && (this.isMasked ? s.setAttribute("transform", a.m) : (s.style.webkitTransform = a.m, s.style.transform = a.m)), s.style.opacity = a.o, a.sw && a._mdf.sw && n.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && n.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (n.setAttribute("fill", a.fc), n.style.color = a.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var p = this.innerElem.getBBox();
                    this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height));
                    if (this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                        this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = c, t.webkitTransform = c;
                    }
                }
            }
        }, extendPrototype([
            BaseElement,
            TransformElement,
            HBaseElement,
            HSolidElement,
            HierarchyElement,
            FrameElement,
            RenderableElement
        ], HImageElement), HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData), e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
        }, extendPrototype([
            BaseElement,
            FrameElement,
            HierarchyElement
        ], HCameraElement), HCameraElement.prototype.setup = function() {
            var t, e, r, i, a = this.comp.threeDElements.length;
            for(t = 0; t < a; t += 1)if ("3d" === (e = this.comp.threeDElements[t]).type) {
                r = e.perspectiveElem.style, i = e.container.style;
                var s = this.pe.v + "px", n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                r.perspective = s, r.webkitPerspective = s, i.transformOrigin = "0px 0px 0px", i.mozTransformOrigin = "0px 0px 0px", i.webkitTransformOrigin = "0px 0px 0px", r.transform = n, r.webkitTransform = n;
            }
        }, HCameraElement.prototype.createElements = function() {
        }, HCameraElement.prototype.hide = function() {
        }, HCameraElement.prototype.renderFrame = function() {
            var t, e, r = this._isFirstFrame;
            if (this.hierarchy) for(e = this.hierarchy.length, t = 0; t < e; t += 1)r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy) for(t = e = this.hierarchy.length - 1; t >= 0; t -= 1){
                    var i = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var a;
                    a = this.p ? [
                        this.p.v[0] - this.a.v[0],
                        this.p.v[1] - this.a.v[1],
                        this.p.v[2] - this.a.v[2]
                    ] : [
                        this.px.v - this.a.v[0],
                        this.py.v - this.a.v[1],
                        this.pz.v - this.a.v[2]
                    ];
                    var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)), n = [
                        a[0] / s,
                        a[1] / s,
                        a[2] / s
                    ], o = Math.sqrt(n[2] * n[2] + n[0] * n[0]), h = Math.atan2(n[1], o), l = Math.atan2(n[0], -n[2]);
                    this.mat.rotateY(l).rotateX(-h);
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var p = !this._prevMat.equals(this.mat);
                if ((p || this.pe._mdf) && this.comp.threeDElements) {
                    var c, f, d;
                    for(e = this.comp.threeDElements.length, t = 0; t < e; t += 1)if ("3d" === (c = this.comp.threeDElements[t]).type) {
                        if (p) {
                            var m = this.mat.toCSS();
                            (d = c.container.style).transform = m, d.webkitTransform = m;
                        }
                        this.pe._mdf && ((f = c.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px");
                    }
                    this.mat.clone(this._prevMat);
                }
            }
            this._isFirstFrame = !1;
        }, HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0);
        }, HCameraElement.prototype.destroy = function() {
        }, HCameraElement.prototype.getBaseElement = function() {
            return null;
        }, HEffects.prototype.renderFrame = function() {
        };
        var animationManager = function() {
            var t87 = {
            }, e56 = [], r36 = 0, i23 = 0, a19 = 0, s19 = !0, n12 = !1;
            function o10(t) {
                for(var r = 0, a = t.target; r < i23;)e56[r].animation === a && (e56.splice(r, 1), r -= 1, i23 -= 1, a.isPaused || p()), r += 1;
            }
            function h9(t, r) {
                if (!t) return null;
                for(var a = 0; a < i23;){
                    if (e56[a].elem === t && null !== e56[a].elem) return e56[a].animation;
                    a += 1;
                }
                var s = new AnimationItem;
                return c(s, t), s.setData(t, r), s;
            }
            function l() {
                a19 += 1, m();
            }
            function p() {
                a19 -= 1;
            }
            function c(t, r) {
                t.addEventListener("destroy", o10), t.addEventListener("_active", l), t.addEventListener("_idle", p), e56.push({
                    elem: r,
                    animation: t
                }), i23 += 1;
            }
            function f(t) {
                var o, h = t - r36;
                for(o = 0; o < i23; o += 1)e56[o].animation.advanceTime(h);
                r36 = t, a19 && !n12 ? window.requestAnimationFrame(f) : s19 = !0;
            }
            function d(t) {
                r36 = t, window.requestAnimationFrame(f);
            }
            function m() {
                !n12 && a19 && s19 && (window.requestAnimationFrame(d), s19 = !1);
            }
            return t87.registerAnimation = h9, t87.loadAnimation = function(t) {
                var e = new AnimationItem;
                return c(e, null), e.setParams(t), e;
            }, t87.setSpeed = function(t, r) {
                var a;
                for(a = 0; a < i23; a += 1)e56[a].animation.setSpeed(t, r);
            }, t87.setDirection = function(t, r) {
                var a;
                for(a = 0; a < i23; a += 1)e56[a].animation.setDirection(t, r);
            }, t87.play = function(t) {
                var r;
                for(r = 0; r < i23; r += 1)e56[r].animation.play(t);
            }, t87.pause = function(t) {
                var r;
                for(r = 0; r < i23; r += 1)e56[r].animation.pause(t);
            }, t87.stop = function(t) {
                var r;
                for(r = 0; r < i23; r += 1)e56[r].animation.stop(t);
            }, t87.togglePause = function(t) {
                var r;
                for(r = 0; r < i23; r += 1)e56[r].animation.togglePause(t);
            }, t87.searchAnimations = function(t, e, r) {
                var i, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), s = a.length;
                for(i = 0; i < s; i += 1)r && a[i].setAttribute("data-bm-type", r), h9(a[i], t);
                if (e && 0 === s) {
                    r || (r = "svg");
                    var n = document.getElementsByTagName("body")[0];
                    n.innerText = "";
                    var o = createTag("div");
                    o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), h9(o, t);
                }
            }, t87.resize = function() {
                var t;
                for(t = 0; t < i23; t += 1)e56[t].animation.resize();
            }, t87.goToAndStop = function(t, r, a) {
                var s;
                for(s = 0; s < i23; s += 1)e56[s].animation.goToAndStop(t, r, a);
            }, t87.destroy = function(t) {
                var r;
                for(r = i23 - 1; r >= 0; r -= 1)e56[r].animation.destroy(t);
            }, t87.freeze = function() {
                n12 = !0;
            }, t87.unfreeze = function() {
                n12 = !1, m();
            }, t87.setVolume = function(t, r) {
                var a;
                for(a = 0; a < i23; a += 1)e56[a].animation.setVolume(t, r);
            }, t87.mute = function(t) {
                var r;
                for(r = 0; r < i23; r += 1)e56[r].animation.mute(t);
            }, t87.unmute = function(t) {
                var r;
                for(r = 0; r < i23; r += 1)e56[r].animation.unmute(t);
            }, t87.getRegisteredAnimations = function() {
                var t, r = e56.length, i = [];
                for(t = 0; t < r; t += 1)i.push(e56[t].animation);
                return i;
            }, t87;
        }(), AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {
            }, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this);
        };
        extendPrototype([
            BaseEvent
        ], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            switch(t.animType ? e = t.animType : t.renderer && (e = t.renderer), e){
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings);
            }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
        }, AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed");
        }, AnimationItem.prototype.setupAnimation = function(t) {
            dataManager.completeAnimation(t, this.configAnimation);
        }, AnimationItem.prototype.setData = function(t, e) {
            e && "object" != typeof e && (e = JSON.parse(e));
            var r = {
                wrapper: t,
                animationData: e
            }, i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
            var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            "false" === a ? r.loop = !1 : "true" === a ? r.loop = !0 : "" !== a && (r.loop = parseInt(a, 10));
            var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
            r.autoplay = "false" !== s, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r);
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, r, i = this.animationData.layers, a = i.length, s = t.layers, n = s.length;
            for(r = 0; r < n; r += 1)for(e = 0; e < a;){
                if (i[e].id === s[r].id) {
                    i[e] = s[r];
                    break;
                }
                e += 1;
            }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for(a = t.assets.length, e = 0; e < a; e += 1)this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
            this.animationData = t, expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment();
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
                this.trigger("data_failed");
            }).bind(this));
        }, AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded();
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        }, AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1000, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
            } catch (t88) {
                this.triggerConfigError(t88);
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }, AnimationItem.prototype.checkLoaded = function() {
            !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                this.trigger("DOMLoaded");
            }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
        }, AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize();
        }, AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t;
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
        }, AnimationItem.prototype.renderFrame = function() {
            if (!1 !== this.isLoaded && this.renderer) try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
                this.triggerRenderFrameError(t);
            }
        }, AnimationItem.prototype.play = function(t) {
            t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
        }, AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause());
        }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause());
        }, AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
        }, AnimationItem.prototype.getMarkerData = function(t) {
            for(var e, r = 0; r < this.markers.length; r += 1)if ((e = this.markers[r]).payload && e.payload.name === t) return e;
            return null;
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
            if (!r || this.name === r) {
                var i = Number(t);
                if (isNaN(i)) {
                    var a = this.getMarkerData(t);
                    a && this.goToAndStop(a.time, !0);
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause();
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
            if (!r || this.name === r) {
                var i = Number(t);
                if (isNaN(i)) {
                    var a = this.getMarkerData(t);
                    a && (a.duration ? this.playSegments([
                        a.time,
                        a.time + a.duration
                    ], !0) : this.goToAndStop(a.time, !0));
                } else this.goToAndStop(i, e, r);
                this.play();
            }
        }, AnimationItem.prototype.advanceTime = function(t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier, r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(0.001 + e)), this.trigger("segmentStart");
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0);
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                var r, i = t.length;
                for(r = 0; r < i; r += 1)this.segments.push(t[r]);
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
        }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([
                this.animationData.ip,
                this.animationData.op
            ]), t && this.checkSegments(0);
        }, AnimationItem.prototype.checkSegments = function(t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
        }, AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null);
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame();
        }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier();
        }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
        }, AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t);
        }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume();
        }, AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute();
        }, AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute();
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
        }, AnimationItem.prototype.getPath = function() {
            return this.path;
        }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var r = t.p;
                -1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r;
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e;
        }, AnimationItem.prototype.getAssetData = function(t) {
            for(var e = 0, r = this.assets.length; e < r;){
                if (t === this.assets[e].id) return this.assets[e];
                e += 1;
            }
            return null;
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide();
        }, AnimationItem.prototype.show = function() {
            this.renderer.show();
        }, AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch(t){
                case "enterFrame":
                case "drawnFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t);
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        }, AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        };
        var Expressions = function() {
            var t89 = {
            };
            return t89.initExpressions = function(t90) {
                var e57 = 0, r = [];
                t90.renderer.compInterface = CompExpressionInterface(t90.renderer), t90.renderer.globalData.projectInterface.registerComposition(t90.renderer), t90.renderer.globalData.pushExpression = function() {
                    e57 += 1;
                }, t90.renderer.globalData.popExpression = function() {
                    0 === (e57 -= 1) && (function() {
                        var t, e = r.length;
                        for(t = 0; t < e; t += 1)r[t].release();
                        r.length = 0;
                    })();
                }, t90.renderer.globalData.registerExpressionProperty = function(t) {
                    -1 === r.indexOf(t) && r.push(t);
                };
            }, t89;
        }();
        expressionsPlugin = Expressions;
        var ExpressionManager = function() {
            var ob = {
            }, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null;
            function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array;
            }
            function isNumerable(t, e) {
                return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
            }
            function $bm_neg(t) {
                var e = typeof t;
                if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                if ($bm_isInstanceOfArray(t)) {
                    var r, i = t.length, a = [];
                    for(r = 0; r < i; r += 1)a[r] = -t[r];
                    return a;
                }
                return t.propType ? t.v : -t;
            }
            var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
            function sum(t, e) {
                var r = typeof t, i = typeof e;
                if ("string" === r || "string" === i) return t + e;
                if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for(var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
                    return o;
                }
                return 0;
            }
            var add = sum;
            function sub(t, e) {
                var r = typeof t, i = typeof e;
                if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for(var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
                    return o;
                }
                return 0;
            }
            function mul(t, e) {
                var r, i, a, s = typeof t, n = typeof e;
                if (isNumerable(s, t) && isNumerable(n, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                    for(a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)r[i] = t[i] * e;
                    return r;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                    for(a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)r[i] = t * e[i];
                    return r;
                }
                return 0;
            }
            function div(t, e) {
                var r, i, a, s = typeof t, n = typeof e;
                if (isNumerable(s, t) && isNumerable(n, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                    for(a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)r[i] = t[i] / e;
                    return r;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                    for(a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)r[i] = t / e[i];
                    return r;
                }
                return 0;
            }
            function mod(t, e) {
                return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e;
            }
            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
            function clamp(t, e, r) {
                if (e > r) {
                    var i = r;
                    r = e, e = i;
                }
                return Math.min(Math.max(t, e), r);
            }
            function radiansToDegrees(t) {
                return t / degToRads;
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
                return t * degToRads;
            }
            var degrees_to_radians = radiansToDegrees, helperLengthArray = [
                0,
                0,
                0,
                0,
                0,
                0
            ];
            function length(t, e) {
                if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                var r;
                e || (e = helperLengthArray);
                var i = Math.min(t.length, e.length), a = 0;
                for(r = 0; r < i; r += 1)a += Math.pow(e[r] - t[r], 2);
                return Math.sqrt(a);
            }
            function normalize(t) {
                return div(t, length(t));
            }
            function rgbToHsl(t) {
                var e, r, i = t[0], a = t[1], s = t[2], n = Math.max(i, a, s), o = Math.min(i, a, s), h = (n + o) / 2;
                if (n === o) e = 0, r = 0;
                else {
                    var l = n - o;
                    switch(r = h > 0.5 ? l / (2 - n - o) : l / (n + o), n){
                        case i:
                            e = (a - s) / l + (a < s ? 6 : 0);
                            break;
                        case a:
                            e = (s - i) / l + 2;
                            break;
                        case s:
                            e = (i - a) / l + 4;
                    }
                    e /= 6;
                }
                return [
                    e,
                    r,
                    h,
                    t[3]
                ];
            }
            function hue2rgb(t, e, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
            }
            function hslToRgb(t) {
                var e, r, i, a = t[0], s = t[1], n = t[2];
                if (0 === s) e = n, i = n, r = n;
                else {
                    var o = n < 0.5 ? n * (1 + s) : n + s - n * s, h = 2 * n - o;
                    e = hue2rgb(h, o, a + 1 / 3), r = hue2rgb(h, o, a), i = hue2rgb(h, o, a - 1 / 3);
                }
                return [
                    e,
                    r,
                    i,
                    t[3]
                ];
            }
            function linear(t, e, r, i, a) {
                if (void 0 !== i && void 0 !== a || (i = e, a = r, e = 0, r = 1), r < e) {
                    var s = r;
                    r = e, e = s;
                }
                if (t <= e) return i;
                if (t >= r) return a;
                var n, o = r === e ? 0 : (t - e) / (r - e);
                if (!i.length) return i + (a - i) * o;
                var h = i.length, l = createTypedArray("float32", h);
                for(n = 0; n < h; n += 1)l[n] = i[n] + (a[n] - i[n]) * o;
                return l;
            }
            function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var r, i = e.length;
                    t || (t = createTypedArray("float32", i));
                    var a = createTypedArray("float32", i), s = BMMath.random();
                    for(r = 0; r < i; r += 1)a[r] = t[r] + s * (e[r] - t[r]);
                    return a;
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
            }
            function createPath(t, e, r, i) {
                var a, s = t.length, n = shapePool.newElement();
                n.setPathData(!!i, s);
                var o, h, l = [
                    0,
                    0
                ];
                for(a = 0; a < s; a += 1)o = e && e[a] ? e[a] : l, h = r && r[a] ? r[a] : l, n.setTripleAt(t[a][0], t[a][1], h[0] + t[a][0], h[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
                return n;
            }
            function initiateExpression(elem, data, property1) {
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property1;
                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                    get: function() {
                        return thisProperty.v;
                    }
                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property1.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = (function(t, e) {
                    var r, i, a = this.pv.length ? this.pv.length : 1, s = createTypedArray("float32", a);
                    var n = Math.floor(5 * time);
                    for(r = 0, i = 0; r < n;){
                        for(i = 0; i < a; i += 1)s[i] += -e + 2 * e * BMMath.random();
                        r += 1;
                    }
                    var o = 5 * time, h = o - Math.floor(o), l = createTypedArray("float32", a);
                    if (a > 1) {
                        for(i = 0; i < a; i += 1)l[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * h;
                        return l;
                    }
                    return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h;
                }).bind(this);
                function loopInDuration(t, e) {
                    return loopIn(t, e, !0);
                }
                function loopOutDuration(t, e) {
                    return loopOut(t, e, !0);
                }
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                function lookAt(t, e) {
                    var r = [
                        e[0] - t[0],
                        e[1] - t[1],
                        e[2] - t[2]
                    ], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                    return [
                        -Math.atan2(r[1], r[2]) / degToRads,
                        i,
                        0
                    ];
                }
                function easeOut(t, e, r, i, a) {
                    return applyEase(easeOutBez, t, e, r, i, a);
                }
                function easeIn(t, e, r, i, a) {
                    return applyEase(easeInBez, t, e, r, i, a);
                }
                function ease(t, e, r, i, a) {
                    return applyEase(easeInOutBez, t, e, r, i, a);
                }
                function applyEase(t, e, r, i, a, s) {
                    void 0 === a ? (a = r, s = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                    var n = t(e);
                    if ($bm_isInstanceOfArray(a)) {
                        var o, h = a.length, l = createTypedArray("float32", h);
                        for(o = 0; o < h; o += 1)l[o] = (s[o] - a[o]) * n + a[o];
                        return l;
                    }
                    return (s - a) * n + a;
                }
                function nearestKey(t) {
                    var e, r, i, a = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0]) {
                        if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                        else {
                            for(e = 0; e < a - 1; e += 1){
                                if (t === data.k[e].t) {
                                    r = e + 1, i = data.k[e].t;
                                    break;
                                }
                                if (t > data.k[e].t && t < data.k[e + 1].t) {
                                    t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                                    break;
                                }
                            }
                            -1 === r && (r = e + 1, i = data.k[e].t);
                        }
                    } else r = 0, i = 0;
                    var s = {
                    };
                    return s.index = r, s.time = i / elem.comp.globalData.frameRate, s;
                }
                function key(t) {
                    var e, r, i;
                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                    for(i = a.length, r = 0; r < i; r += 1)e[r] = a[r], e.value[r] = a[r];
                    return e;
                }
                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e;
                }
                function timeToFrames(t, e) {
                    return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
                }
                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t);
                }
                function sourceRectAtTime() {
                    return elem.sourceRectAtTime();
                }
                function substring(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
                }
                function substr(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
                }
                function posterizeTime(t) {
                    time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
                }
                var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1000000 * Math.random()), globalData = elem.globalData;
                function executeExpression(t) {
                    return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt);
                }
                return executeExpression;
            }
            return ob.initiateExpression = initiateExpression, ob;
        }(), expressionHelpers = {
            searchExpressions: function(t, e, r) {
                e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
            },
            getSpeedAtTime: function(t) {
                var e = this.getValueAtTime(t), r = this.getValueAtTime(t + -0.01), i = 0;
                if (e.length) {
                    var a;
                    for(a = 0; a < e.length; a += 1)i += Math.pow(r[a] - e[a], 2);
                    i = 100 * Math.sqrt(i);
                } else i = 0;
                return i;
            },
            getVelocityAtTime: function(t) {
                if (void 0 !== this.vel) return this.vel;
                var e, r, i = this.getValueAtTime(t), a = this.getValueAtTime(t + -0.001);
                if (i.length) for(e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1)e[r] = (a[r] - i[r]) / -0.001;
                else e = (a - i) / -0.001;
                return e;
            },
            getValueAtTime: function(t) {
                return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
            },
            getStaticValueAtTime: function() {
                return this.pv;
            },
            setGroupProperty: function(t) {
                this.propertyGroup = t;
            }
        };
        !function() {
            function t91(t, e, r) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : "";
                var i, a, s, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t;
                if (h <= p) return this.pv;
                if (r ? a = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (a = l[l.length - 1 - e].t)), "pingpong" === t) {
                    if (Math.floor((h - a) / i) % 2 != 0) return this.getValueAtTime((i - (h - a) % i + a) / this.comp.globalData.frameRate, 0);
                } else {
                    if ("offset" === t) {
                        var c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), d = this.getValueAtTime(((h - a) % i + a) / this.comp.globalData.frameRate, 0), m = Math.floor((h - a) / i);
                        if (this.pv.length) {
                            for(n = (o = new Array(c.length)).length, s = 0; s < n; s += 1)o[s] = (f[s] - c[s]) * m + d[s];
                            return o;
                        }
                        return (f - c) * m + d;
                    }
                    if ("continue" === t) {
                        var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p - 0.001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for(n = (o = new Array(u.length)).length, s = 0; s < n; s += 1)o[s] = u[s] + (u[s] - y[s]) * ((h - p) / this.comp.globalData.frameRate) / 0.0005;
                            return o;
                        }
                        return u + (h - p) / 0.001 * (u - y);
                    }
                }
                return this.getValueAtTime(((h - a) % i + a) / this.comp.globalData.frameRate, 0);
            }
            function e58(t, e, r) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : "";
                var i, a, s, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t;
                if (h >= p) return this.pv;
                if (r ? a = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (a = l[e].t) - p), "pingpong" === t) {
                    if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0);
                } else {
                    if ("offset" === t) {
                        var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), d = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0), m = Math.floor((p - h) / i) + 1;
                        if (this.pv.length) {
                            for(n = (o = new Array(c.length)).length, s = 0; s < n; s += 1)o[s] = d[s] - (f[s] - c[s]) * m;
                            return o;
                        }
                        return d - (f - c) * m;
                    }
                    if ("continue" === t) {
                        var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p + 0.001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for(n = (o = new Array(u.length)).length, s = 0; s < n; s += 1)o[s] = u[s] + (u[s] - y[s]) * (p - h) / 0.001;
                            return o;
                        }
                        return u + (u - y) * (p - h) / 0.001;
                    }
                }
                return this.getValueAtTime((i - ((p - h) % i + p)) / this.comp.globalData.frameRate, 0);
            }
            function r37(t, e) {
                if (!this.k) return this.pv;
                if (t = 0.5 * (t || 0.4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                var r, i, a = this.comp.renderedFrame / this.comp.globalData.frameRate, s = a - t, n = e > 1 ? (a + t - s) / (e - 1) : 1, o = 0, h = 0;
                for(r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;){
                    if (i = this.getValueAtTime(s + o * n), this.pv.length) for(h = 0; h < this.pv.length; h += 1)r[h] += i[h];
                    else r += i;
                    o += 1;
                }
                if (this.pv.length) for(h = 0; h < this.pv.length; h += 1)r[h] /= e;
                else r /= e;
                return r;
            }
            function i24(t) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var e = this._transformCachingAtTime.v;
                if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var r = this.a.getValueAtTime(t);
                    e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var i = this.s.getValueAtTime(t);
                    e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var a = this.sk.getValueAtTime(t), s = this.sa.getValueAtTime(t);
                    e.skewFromAxis(-a * this.sk.mult, s * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var n = this.r.getValueAtTime(t);
                    e.rotate(-n * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var o = this.rz.getValueAtTime(t), h = this.ry.getValueAtTime(t), l = this.rx.getValueAtTime(t), p = this.or.getValueAtTime(t);
                    e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var c = this.px.getValueAtTime(t), f = this.py.getValueAtTime(t);
                    if (this.data.p.z) {
                        var d = this.pz.getValueAtTime(t);
                        e.translate(c * this.px.mult, f * this.py.mult, -d * this.pz.mult);
                    } else e.translate(c * this.px.mult, f * this.py.mult, 0);
                } else {
                    var m = this.p.getValueAtTime(t);
                    e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult);
                }
                return e;
            }
            function a20() {
                return this.v.clone(new Matrix);
            }
            var s20 = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, r) {
                var n = s20(t, e, r);
                return n.dynamicProperties.length ? n.getValueAtTime = i24.bind(n) : n.getValueAtTime = a20.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n;
            };
            var n13 = PropertyFactory.getProp;
            PropertyFactory.getProp = function(i, a, s, o, h) {
                var l = n13(i, a, s, o, h);
                l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t91, l.loopIn = e58, l.smooth = r37, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === a.a ? a.k.length : 0, l.propertyIndex = a.ix;
                var p = 0;
                return 0 !== s && (p = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), l._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: p
                }, expressionHelpers.searchExpressions(i, a, l), l.k && h.addDynamicProperty(l), l;
            };
            var o11 = ShapePropertyFactory.getConstructorFunction(), h10 = ShapePropertyFactory.getKeyframedConstructorFunction();
            function l6() {
            }
            l6.prototype = {
                vertices: function(t, e) {
                    this.k && this.getValue();
                    var r, i = this.v;
                    void 0 !== e && (i = this.getValueAtTime(e, 0));
                    var a = i._length, s = i[t], n = i.v, o = createSizedArray(a);
                    for(r = 0; r < a; r += 1)o[r] = "i" === t || "o" === t ? [
                        s[r][0] - n[r][0],
                        s[r][1] - n[r][1]
                    ] : [
                        s[r][0],
                        s[r][1]
                    ];
                    return o;
                },
                points: function(t) {
                    return this.vertices("v", t);
                },
                inTangents: function(t) {
                    return this.vertices("i", t);
                },
                outTangents: function(t) {
                    return this.vertices("o", t);
                },
                isClosed: function() {
                    return this.v.c;
                },
                pointOnPath: function(t, e) {
                    var r = this.v;
                    void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                    for(var i, a = this._segmentsLength, s = a.lengths, n = a.totalLength * t, o = 0, h = s.length, l = 0; o < h;){
                        if (l + s[o].addedLength > n) {
                            var p = o, c = r.c && o === h - 1 ? 0 : o + 1, f = (n - l) / s[o].addedLength;
                            i = bez.getPointInSegment(r.v[p], r.v[c], r.o[p], r.i[c], f, s[o]);
                            break;
                        }
                        l += s[o].addedLength, o += 1;
                    }
                    return i || (i = r.c ? [
                        r.v[0][0],
                        r.v[0][1]
                    ] : [
                        r.v[r._length - 1][0],
                        r.v[r._length - 1][1]
                    ]), i;
                },
                vectorOnPath: function(t, e, r) {
                    1 == t ? t = this.v.c : 0 == t && (t = 0.999);
                    var i = this.pointOnPath(t, e), a = this.pointOnPath(t + 0.001, e), s = a[0] - i[0], n = a[1] - i[1], o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2));
                    return 0 === o ? [
                        0,
                        0
                    ] : "tangent" === r ? [
                        s / o,
                        n / o
                    ] : [
                        -n / o,
                        s / o
                    ];
                },
                tangentOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "tangent");
                },
                normalOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "normal");
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([
                l6
            ], o11), extendPrototype([
                l6
            ], h10), h10.prototype.getValueAtTime = function(t) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }, h10.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var p6 = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, r, i, a) {
                var s = p6(t, e, r, i, a);
                return s.propertyIndex = e.ix, s.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s;
            };
        }(), TextProperty.prototype.getExpressionValue = function(t, e) {
            var r = this.calculateExpression(e);
            if (t.t !== r) {
                var i = {
                };
                return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i;
            }
            return t;
        }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(), e = this.searchExpressions();
            return this.kf = t || e, this.kf;
        }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
        };
        var ShapePathInterface = function(t92, e, r) {
            var i = e.sh;
            function a(t) {
                return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? a.path : null;
            }
            var s = propertyGroupFactory(a, r);
            return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
                path: {
                    get: function() {
                        return i.k && i.getValue(), i;
                    }
                },
                shape: {
                    get: function() {
                        return i.k && i.getValue(), i;
                    }
                },
                _name: {
                    value: t92.nm
                },
                ix: {
                    value: t92.ix
                },
                propertyIndex: {
                    value: t92.ix
                },
                mn: {
                    value: t92.mn
                },
                propertyGroup: {
                    value: r
                }
            }), a;
        }, propertyGroupFactory = function(t, e) {
            return function(r) {
                return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
            };
        }, PropertyInterface = function(t93, e) {
            var r = {
                _name: t93
            };
            return function(t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
            };
        }, ShapeExpressionInterface = function() {
            function t94(t, o, d) {
                var m, u = [], y = t ? t.length : 0;
                for(m = 0; m < y; m += 1)"gr" === t[m].ty ? u.push(e59(t[m], o[m], d)) : "fl" === t[m].ty ? u.push(r38(t[m], o[m], d)) : "st" === t[m].ty ? u.push(s21(t[m], o[m], d)) : "tm" === t[m].ty ? u.push(n14(t[m], o[m], d)) : "tr" === t[m].ty || ("el" === t[m].ty ? u.push(h11(t[m], o[m], d)) : "sr" === t[m].ty ? u.push(l7(t[m], o[m], d)) : "sh" === t[m].ty ? u.push(ShapePathInterface(t[m], o[m], d)) : "rc" === t[m].ty ? u.push(p(t[m], o[m], d)) : "rd" === t[m].ty ? u.push(c(t[m], o[m], d)) : "rp" === t[m].ty ? u.push(f(t[m], o[m], d)) : "gf" === t[m].ty ? u.push(i25(t[m], o[m], d)) : u.push(a21(t[m], o[m])));
                return u;
            }
            function e59(e60, r39, i26) {
                var a22 = function(t) {
                    switch(t){
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return a22.content;
                        default:
                            return a22.transform;
                    }
                };
                a22.propertyGroup = propertyGroupFactory(a22, i26);
                var s22 = function(e61, r40, i) {
                    var a, s = function(t) {
                        for(var e = 0, r = a.length; e < r;){
                            if (a[e]._name === t || a[e].mn === t || a[e].propertyIndex === t || a[e].ix === t || a[e].ind === t) return a[e];
                            e += 1;
                        }
                        return "number" == typeof t ? a[t - 1] : null;
                    };
                    s.propertyGroup = propertyGroupFactory(s, i), a = t94(e61.it, r40.it, s.propertyGroup), s.numProperties = a.length;
                    var n = o12(e61.it[e61.it.length - 1], r40.it[r40.it.length - 1], s.propertyGroup);
                    return s.transform = n, s.propertyIndex = e61.cix, s._name = e61.nm, s;
                }(e60, r39, a22.propertyGroup), n15 = o12(e60.it[e60.it.length - 1], r39.it[r39.it.length - 1], a22.propertyGroup);
                return a22.content = s22, a22.transform = n15, Object.defineProperty(a22, "_name", {
                    get: function() {
                        return e60.nm;
                    }
                }), a22.numProperties = e60.np, a22.propertyIndex = e60.ix, a22.nm = e60.nm, a22.mn = e60.mn, a22;
            }
            function r38(t95, e, r) {
                function i(t) {
                    return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null;
                }
                return Object.defineProperties(i, {
                    color: {
                        get: ExpressionPropertyInterface(e.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    _name: {
                        value: t95.nm
                    },
                    mn: {
                        value: t95.mn
                    }
                }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i;
            }
            function i25(t96, e, r) {
                function i(t) {
                    return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null;
                }
                return Object.defineProperties(i, {
                    startPoint: {
                        get: ExpressionPropertyInterface(e.s)
                    },
                    endPoint: {
                        get: ExpressionPropertyInterface(e.e)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    type: {
                        get: function() {
                            return "a";
                        }
                    },
                    _name: {
                        value: t96.nm
                    },
                    mn: {
                        value: t96.mn
                    }
                }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i;
            }
            function a21() {
                return function() {
                    return null;
                };
            }
            function s21(t97, e, r) {
                var i, a = propertyGroupFactory(l, r), s = propertyGroupFactory(h, a);
                function n(r) {
                    Object.defineProperty(h, t97.d[r].nm, {
                        get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                    });
                }
                var o = t97.d ? t97.d.length : 0, h = {
                };
                for(i = 0; i < o; i += 1)n(i), e.d.dataProps[i].p.setGroupProperty(s);
                function l(t) {
                    return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null;
                }
                return Object.defineProperties(l, {
                    color: {
                        get: ExpressionPropertyInterface(e.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(e.w)
                    },
                    dash: {
                        get: function() {
                            return h;
                        }
                    },
                    _name: {
                        value: t97.nm
                    },
                    mn: {
                        value: t97.mn
                    }
                }), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), l;
            }
            function n14(t, e62, r) {
                function i(e) {
                    return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null;
                }
                var a = propertyGroupFactory(i, r);
                return i.propertyIndex = t.ix, e62.s.setGroupProperty(PropertyInterface("Start", a)), e62.e.setGroupProperty(PropertyInterface("End", a)), e62.o.setGroupProperty(PropertyInterface("Offset", a)), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
                    start: {
                        get: ExpressionPropertyInterface(e62.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(e62.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(e62.o)
                    },
                    _name: {
                        value: t.nm
                    }
                }), i.mn = t.mn, i;
            }
            function o12(t, e63, r) {
                function i(e) {
                    return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null;
                }
                var a = propertyGroupFactory(i, r);
                return e63.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", a)), e63.transform.mProps.p.setGroupProperty(PropertyInterface("Position", a)), e63.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", a)), e63.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", a)), e63.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", a)), e63.transform.mProps.sk && (e63.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", a)), e63.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", a))), e63.transform.op.setGroupProperty(PropertyInterface("Opacity", a)), Object.defineProperties(i, {
                    opacity: {
                        get: ExpressionPropertyInterface(e63.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(e63.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(e63.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(e63.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(e63.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(e63.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(e63.transform.mProps.sa)
                    },
                    _name: {
                        value: t.nm
                    }
                }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i;
            }
            function h11(t, e64, r) {
                function i(e) {
                    return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null;
                }
                var a = propertyGroupFactory(i, r);
                i.propertyIndex = t.ix;
                var s = "tm" === e64.sh.ty ? e64.sh.prop : e64.sh;
                return s.s.setGroupProperty(PropertyInterface("Size", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), Object.defineProperties(i, {
                    size: {
                        get: ExpressionPropertyInterface(s.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(s.p)
                    },
                    _name: {
                        value: t.nm
                    }
                }), i.mn = t.mn, i;
            }
            function l7(t, e65, r) {
                function i(e) {
                    return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius;
                }
                var a = propertyGroupFactory(i, r), s = "tm" === e65.sh.ty ? e65.sh.prop : e65.sh;
                return i.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", a)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", a)), s.pt.setGroupProperty(PropertyInterface("Points", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", a)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", a))), Object.defineProperties(i, {
                    position: {
                        get: ExpressionPropertyInterface(s.p)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(s.r)
                    },
                    points: {
                        get: ExpressionPropertyInterface(s.pt)
                    },
                    outerRadius: {
                        get: ExpressionPropertyInterface(s.or)
                    },
                    outerRoundness: {
                        get: ExpressionPropertyInterface(s.os)
                    },
                    innerRadius: {
                        get: ExpressionPropertyInterface(s.ir)
                    },
                    innerRoundness: {
                        get: ExpressionPropertyInterface(s.is)
                    },
                    _name: {
                        value: t.nm
                    }
                }), i.mn = t.mn, i;
            }
            function p(t, e66, r) {
                function i(e) {
                    return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null;
                }
                var a = propertyGroupFactory(i, r), s = "tm" === e66.sh.ty ? e66.sh.prop : e66.sh;
                return i.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", a)), s.s.setGroupProperty(PropertyInterface("Size", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), Object.defineProperties(i, {
                    position: {
                        get: ExpressionPropertyInterface(s.p)
                    },
                    roundness: {
                        get: ExpressionPropertyInterface(s.r)
                    },
                    size: {
                        get: ExpressionPropertyInterface(s.s)
                    },
                    _name: {
                        value: t.nm
                    }
                }), i.mn = t.mn, i;
            }
            function c(t, e67, r) {
                function i(e) {
                    return t.r.ix === e || "Round Corners 1" === e ? i.radius : null;
                }
                var a = propertyGroupFactory(i, r), s = e67;
                return i.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", a)), Object.defineProperties(i, {
                    radius: {
                        get: ExpressionPropertyInterface(s.rd)
                    },
                    _name: {
                        value: t.nm
                    }
                }), i.mn = t.mn, i;
            }
            function f(t, e68, r) {
                function i(e) {
                    return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null;
                }
                var a = propertyGroupFactory(i, r), s = e68;
                return i.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", a)), s.o.setGroupProperty(PropertyInterface("Offset", a)), Object.defineProperties(i, {
                    copies: {
                        get: ExpressionPropertyInterface(s.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(s.o)
                    },
                    _name: {
                        value: t.nm
                    }
                }), i.mn = t.mn, i;
            }
            return function(e69, r41, i) {
                var a;
                function s(t) {
                    if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : a[t - 1];
                    for(var e = 0, r = a.length; e < r;){
                        if (a[e]._name === t) return a[e];
                        e += 1;
                    }
                    return null;
                }
                return s.propertyGroup = propertyGroupFactory(s, function() {
                    return i;
                }), a = t94(e69, r41, s.propertyGroup), s.numProperties = a.length, s._name = "Contents", s;
            };
        }(), TextExpressionInterface = function(t98) {
            var e;
            function r42(t) {
                switch(t){
                    case "ADBE Text Document":
                        return r42.sourceText;
                    default:
                        return null;
                }
            }
            return Object.defineProperty(r42, "sourceText", {
                get: function() {
                    t98.textProperty.getValue();
                    var r = t98.textProperty.currentData.t;
                    return void 0 !== r && (t98.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)), e;
                }
            }), r42;
        }, LayerExpressionInterface = function() {
            function t99(t) {
                var e = new Matrix;
                void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                return e;
            }
            function e70(t, e) {
                var r = this.getMatrix(e);
                return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t);
            }
            function r43(t, e) {
                var r = this.getMatrix(e);
                return this.applyPoint(r, t);
            }
            function i27(t, e) {
                var r = this.getMatrix(e);
                return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t);
            }
            function a(t, e) {
                var r = this.getMatrix(e);
                return this.invertPoint(r, t);
            }
            function s(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var r, i = this._elem.hierarchy.length;
                    for(r = 0; r < i; r += 1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
                }
                return t.applyToPointArray(e[0], e[1], e[2] || 0);
            }
            function n(t, e) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var r, i = this._elem.hierarchy.length;
                    for(r = 0; r < i; r += 1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
                }
                return t.inversePoint(e);
            }
            function o(t) {
                var e = new Matrix;
                if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var r, i = this._elem.hierarchy.length;
                    for(r = 0; r < i; r += 1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                    return e.inversePoint(t);
                }
                return e.inversePoint(t);
            }
            function h() {
                return [
                    1,
                    1,
                    1,
                    1
                ];
            }
            return function(l) {
                var p;
                function c(t) {
                    switch(t){
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return c.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return p;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return c.effect;
                        case "ADBE Text Properties":
                            return c.textInterface;
                        default:
                            return null;
                    }
                }
                c.getMatrix = t99, c.invertPoint = n, c.applyPoint = s, c.toWorld = r43, c.toWorldVec = e70, c.fromWorld = a, c.fromWorldVec = i27, c.toComp = r43, c.fromComp = o, c.sampleImage = h, c.sourceRectAtTime = l.sourceRectAtTime.bind(l), c._elem = l;
                var f = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                return Object.defineProperties(c, {
                    hasParent: {
                        get: function() {
                            return l.hierarchy.length;
                        }
                    },
                    parent: {
                        get: function() {
                            return l.hierarchy[0].layerInterface;
                        }
                    },
                    rotation: getDescriptor(p, "rotation"),
                    scale: getDescriptor(p, "scale"),
                    position: getDescriptor(p, "position"),
                    opacity: getDescriptor(p, "opacity"),
                    anchorPoint: f,
                    anchor_point: f,
                    transform: {
                        get: function() {
                            return p;
                        }
                    },
                    active: {
                        get: function() {
                            return l.isInRange;
                        }
                    }
                }), c.startTime = l.data.st, c.index = l.data.ind, c.source = l.data.refId, c.height = 0 === l.data.ty ? l.data.h : 100, c.width = 0 === l.data.ty ? l.data.w : 100, c.inPoint = l.data.ip / l.comp.globalData.frameRate, c.outPoint = l.data.op / l.comp.globalData.frameRate, c._name = l.data.nm, c.registerMaskInterface = function(t) {
                    c.mask = new MaskManagerInterface(t, l);
                }, c.registerEffectsInterface = function(t) {
                    c.effect = t;
                }, c;
            };
        }(), FootageInterface = (dataInterfaceFactory = function(t100) {
            function e71(t) {
                return "Outline" === t ? e71.outlineInterface() : null;
            }
            return e71._name = "Outline", e71.outlineInterface = (function(t101) {
                var e = "", r = t101.getFootageData();
                function i(t) {
                    if (r[t]) return e = t, "object" == typeof (r = r[t]) ? i : r;
                    var a = t.indexOf(e);
                    if (-1 !== a) {
                        var s = parseInt(t.substr(a + e.length), 10);
                        return "object" == typeof (r = r[s]) ? i : r;
                    }
                    return "";
                }
                return function() {
                    return e = "", r = t101.getFootageData(), i;
                };
            })(t100), e71;
        }, function(t102) {
            function e(t) {
                return "Data" === t ? e.dataInterface : null;
            }
            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t102), e;
        }), dataInterfaceFactory, CompExpressionInterface = function(t) {
            function e72(e) {
                for(var r = 0, i = t.layers.length; r < i;){
                    if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                    r += 1;
                }
                return null;
            }
            return Object.defineProperty(e72, "_name", {
                value: t.data.nm
            }), e72.layer = e72, e72.pixelAspect = 1, e72.height = t.data.h || t.globalData.compSize.h, e72.width = t.data.w || t.globalData.compSize.w, e72.pixelAspect = 1, e72.frameDuration = 1 / t.globalData.frameRate, e72.displayStartTime = 0, e72.numLayers = t.layers.length, e72;
        }, TransformExpressionInterface = function(t103) {
            function e(t) {
                switch(t){
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return e.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return e.rotation;
                    case "ADBE Rotate X":
                        return e.xRotation;
                    case "ADBE Rotate Y":
                        return e.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return e.position;
                    case "ADBE Position_0":
                        return e.xPosition;
                    case "ADBE Position_1":
                        return e.yPosition;
                    case "ADBE Position_2":
                        return e.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return e.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return e.opacity;
                    default:
                        return null;
                }
            }
            var r, i, a, s;
            return Object.defineProperty(e, "rotation", {
                get: ExpressionPropertyInterface(t103.r || t103.rz)
            }), Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t103.rz || t103.r)
            }), Object.defineProperty(e, "xRotation", {
                get: ExpressionPropertyInterface(t103.rx)
            }), Object.defineProperty(e, "yRotation", {
                get: ExpressionPropertyInterface(t103.ry)
            }), Object.defineProperty(e, "scale", {
                get: ExpressionPropertyInterface(t103.s)
            }), t103.p ? s = ExpressionPropertyInterface(t103.p) : (r = ExpressionPropertyInterface(t103.px), i = ExpressionPropertyInterface(t103.py), t103.pz && (a = ExpressionPropertyInterface(t103.pz))), Object.defineProperty(e, "position", {
                get: function() {
                    return t103.p ? s() : [
                        r(),
                        i(),
                        a ? a() : 0
                    ];
                }
            }), Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t103.px)
            }), Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t103.py)
            }), Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t103.pz)
            }), Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t103.a)
            }), Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t103.o)
            }), Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t103.sk)
            }), Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t103.sa)
            }), Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t103.or)
            }), e;
        }, ProjectInterface = function() {
            function t104(t) {
                this.compositions.push(t);
            }
            return function() {
                function e73(t) {
                    for(var e = 0, r = this.compositions.length; e < r;){
                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                        e += 1;
                    }
                    return null;
                }
                return e73.compositions = [], e73.currentFrame = 0, e73.registerComposition = t104, e73;
            };
        }(), EffectsExpressionInterface = function() {
            function t105(r, i28, a23, s) {
                function n(t) {
                    for(var e = r.ef, i = 0, a = e.length; i < a;){
                        if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? l[i] : l[i]();
                        i += 1;
                    }
                    throw new Error;
                }
                var o, h = propertyGroupFactory(n, a23), l = [], p = r.ef.length;
                for(o = 0; o < p; o += 1)5 === r.ef[o].ty ? l.push(t105(r.ef[o], i28.effectElements[o], i28.effectElements[o].propertyGroup, s)) : l.push(e74(i28.effectElements[o], r.ef[o].ty, s, h));
                return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", {
                    get: function() {
                        return l[0]();
                    }
                }), Object.defineProperties(n, {
                    numProperties: {
                        get: function() {
                            return r.np;
                        }
                    },
                    _name: {
                        value: r.nm
                    },
                    propertyGroup: {
                        value: h
                    }
                }), n.enabled = 0 !== r.en, n.active = n.enabled, n;
            }
            function e74(t, e, r, i) {
                var a = ExpressionPropertyInterface(t.p);
                return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)), function() {
                    return 10 === e ? r.comp.compInterface(t.p.v) : a();
                };
            }
            return {
                createEffectsInterface: function(e, r) {
                    if (e.effectsManager) {
                        var i, a = [], s = e.data.ef, n = e.effectsManager.effectElements.length;
                        for(i = 0; i < n; i += 1)a.push(t105(s[i], e.effectsManager.effectElements[i], r, e));
                        var o = e.data.ef || [], h = function(t) {
                            for(i = 0, n = o.length; i < n;){
                                if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return a[i];
                                i += 1;
                            }
                            return null;
                        };
                        return Object.defineProperty(h, "numProperties", {
                            get: function() {
                                return o.length;
                            }
                        }), h;
                    }
                    return null;
                }
            };
        }(), MaskManagerInterface = function() {
            function t106(t, e) {
                this._mask = t, this._data = e;
            }
            Object.defineProperty(t106.prototype, "maskPath", {
                get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                }
            }), Object.defineProperty(t106.prototype, "maskOpacity", {
                get: function() {
                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                }
            });
            return function(e) {
                var r, i = createSizedArray(e.viewData.length), a = e.viewData.length;
                for(r = 0; r < a; r += 1)i[r] = new t106(e.viewData[r], e.masksProperties[r]);
                return function(t) {
                    for(r = 0; r < a;){
                        if (e.masksProperties[r].nm === t) return i[r];
                        r += 1;
                    }
                    return null;
                };
            };
        }(), ExpressionPropertyInterface = function() {
            var t107 = {
                pv: 0,
                v: 0,
                mult: 1
            }, e75 = {
                pv: [
                    0,
                    0,
                    0
                ],
                v: [
                    0,
                    0,
                    0
                ],
                mult: 1
            };
            function r44(t, e, r) {
                Object.defineProperty(t, "velocity", {
                    get: function() {
                        return e.getVelocityAtTime(e.comp.currentFrame);
                    }
                }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                    if (!t.numKeys) return 0;
                    var a = "";
                    a = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                    var s = "unidimensional" === r ? new Number(a) : Object.assign({
                    }, a);
                    return s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === r ? a[0] : a, s;
                }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup;
            }
            function i29() {
                return t107;
            }
            return function(a24) {
                return a24 ? "unidimensional" === a24.propType ? (function(e) {
                    e && "pv" in e || (e = t107);
                    var i = 1 / e.mult, a = e.pv * i, s = new Number(a);
                    return s.value = a, r44(s, e, "unidimensional"), function() {
                        return e.k && e.getValue(), a = e.v * i, s.value !== a && ((s = new Number(a)).value = a, r44(s, e, "unidimensional")), s;
                    };
                })(a24) : (function(t) {
                    t && "pv" in t || (t = e75);
                    var i = 1 / t.mult, a = t.data && t.data.l || t.pv.length, s = createTypedArray("float32", a), n = createTypedArray("float32", a);
                    return s.value = n, r44(s, t, "multidimensional"), function() {
                        t.k && t.getValue();
                        for(var e = 0; e < a; e += 1)n[e] = t.v[e] * i, s[e] = n[e];
                        return s;
                    };
                })(a24) : i29;
            };
        }(), TextExpressionSelectorPropFactory = function() {
            function t108(t, e) {
                return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v;
            }
            return function(e, r) {
                this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = 0.01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [
                    1,
                    1,
                    1
                ], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), this.getMult = t108, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty;
            };
        }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function NoValueEffect() {
            this.p = {
            };
        }
        function EffectsManager(t, e) {
            var r, i = t.ef || [];
            this.effectElements = [];
            var a, s = i.length;
            for(r = 0; r < s; r += 1)a = new GroupEffect(i[r], e), this.effectElements.push(a);
        }
        function GroupEffect(t, e) {
            this.init(t, e);
        }
        TextSelectorProp.getTextSelectorProp = function(t, e, r) {
            return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, r) : propertyGetTextProp(t, e, r);
        }, extendPrototype([
            DynamicPropertyContainer
        ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            var r;
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var i, a = this.data.ef.length, s = this.data.ef;
            for(r = 0; r < a; r += 1){
                switch(i = null, s[r].ty){
                    case 0:
                        i = new SliderEffect(s[r], e, this);
                        break;
                    case 1:
                        i = new AngleEffect(s[r], e, this);
                        break;
                    case 2:
                        i = new ColorEffect(s[r], e, this);
                        break;
                    case 3:
                        i = new PointEffect(s[r], e, this);
                        break;
                    case 4:
                    case 7:
                        i = new CheckboxEffect(s[r], e, this);
                        break;
                    case 10:
                        i = new LayerIndexEffect(s[r], e, this);
                        break;
                    case 11:
                        i = new MaskIndexEffect(s[r], e, this);
                        break;
                    case 5:
                        i = new EffectsManager(s[r], e, this);
                        break;
                    default:
                        i = new NoValueEffect(s[r], e, this);
                }
                i && this.effectElements.push(i);
            }
        };
        var lottie1 = {
        };
        function setLocationHref(t) {
            locationHref = t;
        }
        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
        }
        function setSubframeRendering(t) {
            subframeEnabled = t;
        }
        function setIDPrefix(t) {
            idPrefix = t;
        }
        function loadAnimation(t) {
            return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
        }
        function setQuality(t) {
            if ("string" == typeof t) switch(t){
                case "high":
                    defaultCurveSegments = 200;
                    break;
                default:
                case "medium":
                    defaultCurveSegments = 50;
                    break;
                case "low":
                    defaultCurveSegments = 10;
            }
            else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
            roundValues(!(defaultCurveSegments >= 50));
        }
        function inBrowser() {
            return "undefined" != typeof navigator;
        }
        function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e);
        }
        function getFactory(t) {
            switch(t){
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null;
            }
        }
        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t) {
            for(var e = queryString.split("&"), r = 0; r < e.length; r += 1){
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
            }
            return null;
        }
        lottie1.play = animationManager.play, lottie1.pause = animationManager.pause, lottie1.setLocationHref = setLocationHref, lottie1.togglePause = animationManager.togglePause, lottie1.setSpeed = animationManager.setSpeed, lottie1.setDirection = animationManager.setDirection, lottie1.stop = animationManager.stop, lottie1.searchAnimations = searchAnimations, lottie1.registerAnimation = animationManager.registerAnimation, lottie1.loadAnimation = loadAnimation, lottie1.setSubframeRendering = setSubframeRendering, lottie1.resize = animationManager.resize, lottie1.goToAndStop = animationManager.goToAndStop, lottie1.destroy = animationManager.destroy, lottie1.setQuality = setQuality, lottie1.inBrowser = inBrowser, lottie1.installPlugin = installPlugin, lottie1.freeze = animationManager.freeze, lottie1.unfreeze = animationManager.unfreeze, lottie1.setVolume = animationManager.setVolume, lottie1.mute = animationManager.mute, lottie1.unmute = animationManager.unmute, lottie1.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie1.useWebWorker = function(t) {
            _useWebWorker = t;
        }, lottie1.setIDPrefix = setIDPrefix, lottie1.__getFactory = getFactory, lottie1.version = "5.8.1";
        var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "", queryString;
        if (standalone) {
            var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
                src: ""
            };
            queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer");
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottie1;
    });
}), _templateObject$1, styles = css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral([
    "\n  * {\n    box-sizing: border-box;\n  }\n\n  :host {\n    --lottie-player-toolbar-height: 35px;\n    --lottie-player-toolbar-background-color: transparent;\n    --lottie-player-toolbar-icon-color: #999;\n    --lottie-player-toolbar-icon-hover-color: #222;\n    --lottie-player-toolbar-icon-active-color: #555;\n    --lottie-player-seeker-track-color: #ccc;\n    --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n    --lottie-player-seeker-display: block;\n\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .animation {\n    width: 100%;\n    height: 100%;\n    display: flex;\n  }\n  .animation.controls {\n    height: calc(100% - 35px);\n  }\n\n  .toolbar {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n    background-color: var(--lottie-player-toolbar-background-color);\n    margin: 0 5px;\n    height: 35px;\n  }\n\n  .toolbar button {\n    cursor: pointer;\n    fill: var(--lottie-player-toolbar-icon-color);\n    display: flex;\n    background: none;\n    border: 0;\n    padding: 0;\n    outline: none;\n    height: 100%;\n  }\n\n  .toolbar button:hover {\n    fill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n  .toolbar button.active {\n    fill: var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button.active:hover {\n\tfill: var(--lottie-player-toolbar-icon-hover-color);\n  }\n\n\n  .toolbar button:focus{\n\toutline: 1px dotted var(--lottie-player-toolbar-icon-active-color);\n  }\n\n  .toolbar button svg {\n  }\n\n  .toolbar button.disabled svg {\n    display: none;\n  }\n\n  .seeker {\n    -webkit-appearance: none;\n    width: 95%;\n    outline: none;\n    background-color: var(--lottie-player-toolbar-background-color);\n    display: var(--lottie-player-seeker-display);\n  }\n\n  .seeker::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-webkit-slider-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5px;\n  }\n  .seeker:focus::-webkit-slider-runnable-track {\n    background: #999;\n  }\n  .seeker::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-moz-range-thumb {\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker::-ms-track {\n    width: 100%;\n    height: 5px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  .seeker::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n    border-radius: 3px;\n  }\n  .seeker::-ms-thumb {\n    border: 0;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: var(--lottie-player-seeker-thumb-color);\n    cursor: pointer;\n  }\n  .seeker:focus::-ms-fill-lower {\n    background: var(--lottie-player-seeker-track-color);\n  }\n  .seeker:focus::-ms-fill-upper {\n    background: var(--lottie-player-seeker-track-color);\n  }\n\n  .error {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    align-items: center;\n  }\n"
]))), _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, PlayerState, PlayMode, PlayerEvents;
function parseSrc(t) {
    if ("object" == typeof t) return t;
    try {
        return JSON.parse(t);
    } catch (e) {
        return new URL(t, window.location.href).toString();
    }
}
function isLottie(t) {
    return [
        "v",
        "ip",
        "op",
        "layers",
        "fr",
        "w",
        "h"
    ].every((e)=>Object.prototype.hasOwnProperty.call(t, e)
    );
}
function fromURL(t) {
    return _fromURL.apply(this, arguments);
}
function _fromURL() {
    return (_fromURL = _asyncToGenerator(function*(t) {
        if ("string" != typeof t) throw new Error("The url value must be a string");
        var e;
        try {
            var r = new URL(t), i = yield fetch(r.toString());
            e = yield i.json();
        } catch (t109) {
            throw new Error("An error occurred while trying to load the Lottie file from URL");
        }
        return e;
    })).apply(this, arguments);
}
!function(t) {
    t.Destroyed = "destroyed", t.Error = "error", t.Frozen = "frozen", t.Loading = "loading", t.Paused = "paused", t.Playing = "playing", t.Stopped = "stopped";
}(PlayerState || (PlayerState = {
})), (function(t) {
    t.Bounce = "bounce", t.Normal = "normal";
})(PlayMode || (PlayMode = {
})), (function(t) {
    t.Complete = "complete", t.Destroyed = "destroyed", t.Error = "error", t.Frame = "frame", t.Freeze = "freeze", t.Load = "load", t.Loop = "loop", t.Pause = "pause", t.Play = "play", t.Ready = "ready", t.Rendered = "rendered", t.Stop = "stop";
})(PlayerEvents || (PlayerEvents = {
}));
var LottiePlayer = class extends LitElement {
    constructor(){
        super(...arguments), this.autoplay = !1, this.background = "transparent", this.controls = !1, this.currentState = PlayerState.Loading, this.description = "Lottie animation", this.direction = 1, this.hover = !1, this.intermission = 1, this.loop = !1, this.mode = PlayMode.Normal, this.preserveAspectRatio = "xMidYMid meet", this.renderer = "svg", this.speed = 1, this._io = void 0, this._counter = 1;
    }
    load(t) {
        var e = this;
        return _asyncToGenerator(function*() {
            if (e.shadowRoot) {
                var r = {
                    container: e.container,
                    loop: !1,
                    autoplay: !1,
                    renderer: e.renderer,
                    rendererSettings: {
                        preserveAspectRatio: e.preserveAspectRatio,
                        clearCanvas: !1,
                        progressiveLoad: !0,
                        hideOnTransparent: !0
                    }
                };
                try {
                    var i = parseSrc(t), a = {
                    }, s = "string" == typeof i ? "path" : "animationData";
                    e._lottie && e._lottie.destroy(), e.webworkers && lottie.useWebWorker(!0), e._lottie = lottie.loadAnimation(Object.assign(Object.assign({
                    }, r), {
                        [s]: i
                    })), e._attachEventListeners(), "path" === s ? (a = yield fromURL(i), s = "animationData") : a = i, isLottie(a) || (e.currentState = PlayerState.Error, e.dispatchEvent(new CustomEvent(PlayerEvents.Error)));
                } catch (t) {
                    e.currentState = PlayerState.Error, e.dispatchEvent(new CustomEvent(PlayerEvents.Error));
                }
            }
        })();
    }
    getLottie() {
        return this._lottie;
    }
    play() {
        this._lottie && (this._lottie.play(), this.currentState = PlayerState.Playing, this.dispatchEvent(new CustomEvent(PlayerEvents.Play)));
    }
    pause() {
        this._lottie && (this._lottie.pause(), this.currentState = PlayerState.Paused, this.dispatchEvent(new CustomEvent(PlayerEvents.Pause)));
    }
    stop() {
        this._lottie && (this._counter = 1, this._lottie.stop(), this.currentState = PlayerState.Stopped, this.dispatchEvent(new CustomEvent(PlayerEvents.Stop)));
    }
    destroy() {
        this._lottie && (this._lottie.destroy(), this.currentState = PlayerState.Destroyed, this.dispatchEvent(new CustomEvent(PlayerEvents.Destroyed)), this.remove());
    }
    seek(t) {
        if (this._lottie) {
            var e = /^(\d+)(%?)$/.exec(t.toString());
            if (e) {
                var r = "%" === e[2] ? this._lottie.totalFrames * Number(e[1]) / 100 : Number(e[1]);
                this.seeker = r, this.currentState === PlayerState.Playing ? this._lottie.goToAndPlay(r, !0) : (this._lottie.goToAndStop(r, !0), this._lottie.pause());
            }
        }
    }
    snapshot() {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.shadowRoot) {
            var e = this.shadowRoot.querySelector(".animation svg"), r = (new XMLSerializer).serializeToString(e);
            if (t) {
                var i = document.createElement("a");
                i.href = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(r)), i.download = "download_".concat(this.seeker, ".svg"), document.body.appendChild(i), i.click(), document.body.removeChild(i);
            }
            return r;
        }
    }
    setSpeed() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._lottie && this._lottie.setSpeed(t);
    }
    setDirection(t) {
        this._lottie && this._lottie.setDirection(t);
    }
    setLooping(t) {
        this._lottie && (this.loop = t, this._lottie.loop = t);
    }
    togglePlay() {
        return this.currentState === PlayerState.Playing ? this.pause() : this.play();
    }
    toggleLooping() {
        this.setLooping(!this.loop);
    }
    resize() {
        this._lottie && this._lottie.resize();
    }
    static get styles() {
        return styles;
    }
    disconnectedCallback() {
        this._io && (this._io.disconnect(), this._io = void 0), document.removeEventListener("visibilitychange", ()=>this._onVisibilityChange()
        ), this.destroy();
    }
    render() {
        var t = this.controls ? "main controls" : "main", e = this.controls ? "animation controls" : "animation";
        return html(_templateObject || (_templateObject = _taggedTemplateLiteral([
            ' <div\n      id="animation-container"\n      class=',
            '\n      lang="en"\n      aria-label=',
            '\n      role="img"\n    >\n      <div\n        id="animation"\n        class=',
            '\n        style="background:',
            ';"\n      >\n        ',
            "\n      </div>\n      ",
            "\n    </div>"
        ])), t, this.description, e, this.background, this.currentState === PlayerState.Error ? html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([
            '<div class="error">⚠️</div>'
        ]))) : void 0, this.controls ? this.renderControls() : void 0);
    }
    firstUpdated() {
        "IntersectionObserver" in window && (this._io = new IntersectionObserver((t)=>{
            t[0].isIntersecting ? this.currentState === PlayerState.Frozen && this.play() : this.currentState === PlayerState.Playing && this.freeze();
        }), this._io.observe(this.container)), void 0 !== document.hidden && document.addEventListener("visibilitychange", ()=>this._onVisibilityChange()
        ), this.src && this.load(this.src), this.dispatchEvent(new CustomEvent(PlayerEvents.Rendered));
    }
    renderControls() {
        var t = this.currentState === PlayerState.Playing, e = this.currentState === PlayerState.Paused, r = this.currentState === PlayerState.Stopped;
        return html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([
            '\n      <div\n        id="lottie-controls"\n        aria-label="lottie-animation-controls"\n        class="toolbar"\n      >\n        <button\n          id="lottie-play-button"\n          @click=',
            "\n          class=",
            '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="play-pause"\n        >\n          ',
            '\n        </button>\n        <button\n          id="lottie-stop-button"\n          @click=',
            "\n          class=",
            '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="stop"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false"><path d="M6 6h12v12H6V6z" /></svg>\n        </button>\n        <input\n          id="lottie-seeker-input"\n          class="seeker"\n          type="range"\n          min="0"\n          step="1"\n          max="100"\n          .value=',
            "\n          @input=",
            "\n          @mousedown=",
            "\n          @mouseup=",
            '\n          aria-valuemin="1"\n          aria-valuemax="100"\n          role="slider"\n          aria-valuenow=',
            '\n          tabindex="0"\n          aria-label="lottie-seek-input"\n        />\n        <button\n          id="lottie-loop-toggle"\n          @click=',
            "\n          class=",
            '\n          style="align-items:center;"\n          tabindex="0"\n          aria-label="loop-toggle"\n        >\n          <svg width="24" height="24" aria-hidden="true" focusable="false">\n            <path\n              d="M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031H5.015v-6h12v-3l3.984 3.984-3.984 3.984v-3H6.984z"\n            />\n          </svg>\n        </button>\n      </div>\n    '
        ])), this.togglePlay, t || e ? "active" : "", html(t ? _templateObject4 || (_templateObject4 = _taggedTemplateLiteral([
            '<svg width="24" height="24" aria-hidden="true" focusable="false">\n                <path\n                  d="M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z"\n                />\n              </svg>'
        ])) : _templateObject5 || (_templateObject5 = _taggedTemplateLiteral([
            '<svg width="24" height="24" aria-hidden="true" focusable="false">\n                <path d="M8.016 5.016L18.985 12 8.016 18.984V5.015z" />\n              </svg>'
        ]))), this.stop, r ? "active" : "", this.seeker, this._handleSeekChange, ()=>{
            this._prevState = this.currentState, this.freeze();
        }, ()=>{
            this._prevState === PlayerState.Playing && this.play();
        }, this.seeker, this.toggleLooping, this.loop ? "active" : "");
    }
    _onVisibilityChange() {
        !0 === document.hidden && this.currentState === PlayerState.Playing ? this.freeze() : this.currentState === PlayerState.Frozen && this.play();
    }
    _handleSeekChange(t) {
        if (this._lottie && !isNaN(t.target.value)) {
            var e = t.target.value / 100 * this._lottie.totalFrames;
            this.seek(e);
        }
    }
    _attachEventListeners() {
        this._lottie.addEventListener("enterFrame", ()=>{
            this.seeker = this._lottie.currentFrame / this._lottie.totalFrames * 100, this.dispatchEvent(new CustomEvent(PlayerEvents.Frame, {
                detail: {
                    frame: this._lottie.currentFrame,
                    seeker: this.seeker
                }
            }));
        }), this._lottie.addEventListener("complete", ()=>{
            this.currentState === PlayerState.Playing ? !this.loop || this.count && this._counter >= this.count ? this.dispatchEvent(new CustomEvent(PlayerEvents.Complete)) : this.mode === PlayMode.Bounce ? (this.count && (this._counter += 0.5), setTimeout(()=>{
                this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)), this.currentState === PlayerState.Playing && (this._lottie.setDirection(-1 * this._lottie.playDirection), this._lottie.play());
            }, this.intermission)) : (this.count && (this._counter += 1), window.setTimeout(()=>{
                this.dispatchEvent(new CustomEvent(PlayerEvents.Loop)), this.currentState === PlayerState.Playing && (this._lottie.stop(), this._lottie.play());
            }, this.intermission)) : this.dispatchEvent(new CustomEvent(PlayerEvents.Complete));
        }), this._lottie.addEventListener("DOMLoaded", ()=>{
            this.setSpeed(this.speed), this.setDirection(this.direction), this.autoplay && this.play(), this.dispatchEvent(new CustomEvent(PlayerEvents.Ready));
        }), this._lottie.addEventListener("data_ready", ()=>{
            this.dispatchEvent(new CustomEvent(PlayerEvents.Load));
        }), this._lottie.addEventListener("data_failed", ()=>{
            this.currentState = PlayerState.Error, this.dispatchEvent(new CustomEvent(PlayerEvents.Error));
        }), this.container.addEventListener("mouseenter", ()=>{
            this.hover && this.currentState !== PlayerState.Playing && this.play();
        }), this.container.addEventListener("mouseleave", ()=>{
            this.hover && this.currentState === PlayerState.Playing && this.stop();
        });
    }
    freeze() {
        this._lottie && (this._lottie.pause(), this.currentState = PlayerState.Frozen, this.dispatchEvent(new CustomEvent(PlayerEvents.Freeze)));
    }
};
__decorate([
    property({
        type: Boolean
    })
], LottiePlayer.prototype, "autoplay", void 0), __decorate([
    property({
        type: String,
        reflect: !0
    })
], LottiePlayer.prototype, "background", void 0), __decorate([
    property({
        type: Boolean
    })
], LottiePlayer.prototype, "controls", void 0), __decorate([
    property({
        type: Number
    })
], LottiePlayer.prototype, "count", void 0), __decorate([
    property({
        type: String
    })
], LottiePlayer.prototype, "currentState", void 0), __decorate([
    property({
        type: String
    })
], LottiePlayer.prototype, "description", void 0), __decorate([
    property({
        type: Number
    })
], LottiePlayer.prototype, "direction", void 0), __decorate([
    property({
        type: Boolean
    })
], LottiePlayer.prototype, "hover", void 0), __decorate([
    property()
], LottiePlayer.prototype, "intermission", void 0), __decorate([
    property({
        type: Boolean,
        reflect: !0
    })
], LottiePlayer.prototype, "loop", void 0), __decorate([
    property()
], LottiePlayer.prototype, "mode", void 0), __decorate([
    property({
        type: String
    })
], LottiePlayer.prototype, "preserveAspectRatio", void 0), __decorate([
    property({
        type: String
    })
], LottiePlayer.prototype, "renderer", void 0), __decorate([
    property()
], LottiePlayer.prototype, "seeker", void 0), __decorate([
    property({
        type: Number
    })
], LottiePlayer.prototype, "speed", void 0), __decorate([
    property({
        type: String
    })
], LottiePlayer.prototype, "src", void 0), __decorate([
    property({
        type: Boolean
    })
], LottiePlayer.prototype, "webworkers", void 0), __decorate([
    query(".animation")
], LottiePlayer.prototype, "container", void 0), LottiePlayer = __decorate([
    customElement("lottie-player")
], LottiePlayer);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"l9f7Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LottieInteractivity", ()=>s
);
parcelHelpers.export(exports, "create", ()=>S
);
function e(t1) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e1) {
        return typeof e1;
    } : function(e2) {
        return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    })(t1);
}
function t(e3, t2) {
    if (!(e3 instanceof t2)) throw new TypeError("Cannot call a class as a function");
}
function n(e4, t3) {
    for(var n1 = 0; n1 < t3.length; n1++){
        var i1 = t3[n1];
        i1.enumerable = i1.enumerable || !1, i1.configurable = !0, "value" in i1 && (i1.writable = !0), Object.defineProperty(e4, i1.key, i1);
    }
}
function i(e5, t4) {
    if (null == e5) return {
    };
    var n2, i2, a1 = function(e6, t5) {
        if (null == e6) return {
        };
        var n3, i3, a2 = {
        }, r2 = Object.keys(e6);
        for(i3 = 0; i3 < r2.length; i3++)n3 = r2[i3], t5.indexOf(n3) >= 0 || (a2[n3] = e6[n3]);
        return a2;
    }(e5, t4);
    if (Object.getOwnPropertySymbols) {
        var r1 = Object.getOwnPropertySymbols(e5);
        for(i2 = 0; i2 < r1.length; i2++)n2 = r1[i2], t4.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e5, n2) && (a1[n2] = e5[n2]);
    }
    return a1;
}
function a(e7, t6) {
    var n4 = t6.get(e7);
    if (!n4) throw new TypeError("attempted to get private field on non-instance");
    return n4.get ? n4.get.call(e7) : n4.value;
}
var r = {
    player: "lottie-player"
}, o = "[lottieInteractivity]:", s = function() {
    function s1() {
        var n5 = this, S2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r, C = S2.actions, A = S2.container, T = S2.mode, H = S2.player, O = i(S2, [
            "actions",
            "container",
            "mode",
            "player"
        ]);
        if (t(this, s1), l.set(this, {
            writable: !0,
            value: function() {
                if (n5.player) {
                    var e8 = function() {
                        n5.player.addEventListener("enterFrame", a(n5, L)), n5.container.addEventListener("mouseenter", a(n5, g)), n5.container.addEventListener("mouseleave", a(n5, E)), n5.container.addEventListener("touchstart", a(n5, g), {
                            passive: !0
                        }), n5.container.addEventListener("touchend", a(n5, E), {
                            passive: !0
                        });
                    };
                    n5.stateHandler.set("loop", function() {
                        n5.actions[n5.interactionIdx].loop ? n5.player.loop = parseInt(n5.actions[n5.interactionIdx].loop) - 1 : n5.player.loop = !0, n5.player.autoplay = !0;
                    }), n5.stateHandler.set("autoplay", function() {
                        n5.player.loop = !1, n5.player.autoplay = !0;
                    }), n5.stateHandler.set("click", function() {
                        n5.player.loop = !1, n5.player.autoplay = !1, n5.container.addEventListener("click", a(n5, c));
                    }), n5.stateHandler.set("hover", function() {
                        n5.player.loop = !1, n5.player.autoplay = !1, n5.container.addEventListener("mouseenter", a(n5, c)), n5.container.addEventListener("touchstart", a(n5, c), {
                            passive: !0
                        });
                    }), n5.transitionHandler.set("click", function() {
                        n5.container.addEventListener("click", a(n5, d));
                    }), n5.transitionHandler.set("hover", function() {
                        n5.container.addEventListener("mouseenter", a(n5, d)), n5.container.addEventListener("touchstart", a(n5, d), {
                            passive: !0
                        });
                    }), n5.transitionHandler.set("hold", e8), n5.transitionHandler.set("pauseHold", e8), n5.transitionHandler.set("repeat", function() {
                        n5.player.loop = !0, n5.player.autoplay = !0;
                        n5.player.addEventListener("loopComplete", function e9() {
                            a(n5, m).call(n5, {
                                handler: e9
                            });
                        });
                    }), n5.transitionHandler.set("onComplete", function() {
                        "loop" === n5.actions[n5.interactionIdx].state ? n5.player.addEventListener("loopComplete", a(n5, v)) : n5.player.addEventListener("complete", a(n5, v));
                    }), n5.transitionHandler.set("seek", function() {
                        n5.player.stop(), n5.player.addEventListener("enterFrame", a(n5, f)), n5.container.addEventListener("mousemove", a(n5, h)), n5.container.addEventListener("touchmove", a(n5, y), {
                            passive: !1
                        }), n5.container.addEventListener("mouseout", a(n5, u));
                    });
                }
            }
        }), c.set(this, {
            writable: !0,
            value: function() {
                var e10 = n5.actions[n5.interactionIdx].forceFlag;
                e10 || !0 !== n5.player.isPaused ? e10 && a(n5, k).call(n5, !0) : a(n5, k).call(n5, !0);
            }
        }), p.set(this, {
            writable: !0,
            value: function() {
                0 === n5.clickCounter ? (n5.player.play(), n5.clickCounter++) : (n5.clickCounter++, n5.player.setDirection(-1 * n5.player.playDirection), n5.player.play());
            }
        }), d.set(this, {
            writable: !0,
            value: function() {
                var e11 = n5.actions[n5.interactionIdx].forceFlag;
                if ("chain" === n5.mode) {
                    if (n5.actions[n5.interactionIdx].count) {
                        var t7 = parseInt(n5.actions[n5.interactionIdx].count);
                        if (n5.clickCounter < t7 - 1) return void (n5.clickCounter += 1);
                    }
                    return n5.clickCounter = 0, n5.container.removeEventListener("click", a(n5, d)), n5.container.removeEventListener("mouseenter", a(n5, d)), void a(n5, b).call(n5);
                }
                e11 || !0 !== n5.player.isPaused ? e11 && n5.player.goToAndPlay(0, !0) : n5.player.goToAndPlay(0, !0);
            }
        }), h.set(this, {
            writable: !0,
            value: function(e12) {
                a(n5, P).call(n5, e12.clientX, e12.clientY);
            }
        }), y.set(this, {
            writable: !0,
            value: function(e13) {
                e13.cancelable && e13.preventDefault(), a(n5, P).call(n5, e13.touches[0].clientX, e13.touches[0].clientY);
            }
        }), u.set(this, {
            writable: !0,
            value: function() {
                a(n5, P).call(n5, -1, -1);
            }
        }), v.set(this, {
            writable: !0,
            value: function() {
                "loop" === n5.actions[n5.interactionIdx].state ? n5.player.removeEventListener("loopComplete", a(n5, v)) : n5.player.removeEventListener("complete", a(n5, v)), a(n5, b).call(n5);
            }
        }), m.set(this, {
            writable: !0,
            value: function(e14) {
                var t8 = e14.handler, i4 = 1;
                n5.actions[n5.interactionIdx].repeat && (i4 = n5.actions[n5.interactionIdx].repeat), n5.playCounter >= i4 - 1 ? (n5.playCounter = 0, n5.player.removeEventListener("loopComplete", t8), n5.player.loop = !1, n5.player.autoplay = !1, a(n5, b).call(n5)) : n5.playCounter += 1;
            }
        }), f.set(this, {
            writable: !0,
            value: function() {
                var e15 = n5.actions[n5.interactionIdx].frames;
                e15 && n5.player.currentFrame >= parseInt(e15[1]) - 1 && (n5.player.removeEventListener("enterFrame", a(n5, f)), n5.container.removeEventListener("mousemove", a(n5, h)), n5.container.removeEventListener("mouseout", a(n5, u)), setTimeout(a(n5, b), 0));
            }
        }), L.set(this, {
            writable: !0,
            value: function() {
                var e16 = n5.actions[n5.interactionIdx].frames;
                (e16 && n5.player.currentFrame >= e16[1] || n5.player.currentFrame >= n5.player.totalFrames - 1) && (n5.player.removeEventListener("enterFrame", a(n5, L)), n5.container.removeEventListener("mouseenter", a(n5, g)), n5.container.removeEventListener("mouseleave", a(n5, E)), n5.player.pause(), a(n5, b).call(n5));
            }
        }), g.set(this, {
            writable: !0,
            value: function() {
                -1 !== n5.player.playDirection && 0 !== n5.player.currentFrame && "pauseHold" !== n5.actions[n5.interactionIdx].transition && "pauseHold" !== n5.actions[0].type || (n5.player.setDirection(1), n5.player.play());
            }
        }), E.set(this, {
            writable: !0,
            value: function() {
                "hold" === n5.actions[n5.interactionIdx].transition || "hold" === n5.actions[0].type ? (n5.player.setDirection(-1), n5.player.play()) : "pauseHold" !== n5.actions[n5.interactionIdx].transition && "pauseHold" !== n5.actions[0].type || n5.player.pause();
            }
        }), w.set(this, {
            writable: !0,
            value: function() {
                var e17 = n5.actions[n5.interactionIdx].state;
                "hover" !== e17 && "click" !== e17 || (n5.container.removeEventListener("click", a(n5, c)), n5.container.removeEventListener("mouseenter", a(n5, c)));
            }
        }), b.set(this, {
            writable: !0,
            value: function() {
                var e18 = n5.interactionIdx;
                a(n5, w).call(n5);
                var t9 = n5.actions[n5.interactionIdx].jumpTo;
                t9 ? t9 >= 0 && t9 < n5.actions.length ? (n5.interactionIdx = t9, a(n5, I).call(n5, {
                    ignorePath: !1
                })) : (n5.interactionIdx = 0, n5.player.goToAndStop(0, !0), a(n5, I).call(n5, {
                    ignorePath: !1
                })) : (n5.interactionIdx++, n5.interactionIdx >= n5.actions.length ? n5.actions[n5.actions.length - 1].reset ? (n5.interactionIdx = 0, n5.player.goToAndStop(0, !0), a(n5, I).call(n5, {
                    ignorePath: !1
                })) : (n5.interactionIdx = n5.actions.length - 1, a(n5, I).call(n5, {
                    ignorePath: !1
                })) : a(n5, I).call(n5, {
                    ignorePath: !1
                })), n5.container.dispatchEvent(new CustomEvent("transition", {
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        oldIndex: e18,
                        newIndex: n5.interactionIdx
                    }
                }));
            }
        }), k.set(this, {
            writable: !0,
            value: function(e19) {
                var t10 = n5.actions[n5.interactionIdx].frames;
                if (!t10) return n5.player.resetSegments(!0), void n5.player.goToAndPlay(0, !0);
                "string" == typeof t10 ? n5.player.goToAndPlay(t10, e19) : n5.player.playSegments(t10, e19);
            }
        }), x.set(this, {
            writable: !0,
            value: function() {
                var t11 = n5.actions[n5.interactionIdx].path;
                if (!t11) {
                    if ("object" === e(n5.enteredPlayer) && "AnimationItem" === n5.enteredPlayer.constructor.name) {
                        if (t11 = n5.enteredPlayer, n5.player === t11) return void a(n5, I).call(n5, {
                            ignorePath: !0
                        });
                    } else {
                        var i5 = (t11 = n5.loadedAnimation).substr(t11.lastIndexOf("/") + 1);
                        if (i5 = i5.substr(0, i5.lastIndexOf(".json")), n5.player.fileName === i5) return void a(n5, I).call(n5, {
                            ignorePath: !0
                        });
                    }
                }
                var r3 = n5.container.getBoundingClientRect(), s2 = "width: " + r3.width + "px !important; height: " + r3.height + "px !important; background: " + n5.container.style.background;
                if (n5.container.setAttribute("style", s2), "object" !== e(n5.enteredPlayer) || "AnimationItem" !== n5.enteredPlayer.constructor.name) {
                    if ("string" == typeof n5.enteredPlayer) {
                        var l1 = document.querySelector(n5.enteredPlayer);
                        l1 && "LOTTIE-PLAYER" === l1.nodeName && (n5.attachedListeners || (l1.addEventListener("ready", function() {
                            n5.container.style.width = "", n5.container.style.height = "";
                        }), l1.addEventListener("load", function() {
                            n5.player = l1.getLottie(), a(n5, I).call(n5, {
                                ignorePath: !0
                            });
                        }), n5.attachedListeners = !0), l1.load(t11));
                    } else n5.enteredPlayer instanceof HTMLElement && "LOTTIE-PLAYER" === n5.enteredPlayer.nodeName && (n5.attachedListeners || (n5.enteredPlayer.addEventListener("ready", function() {
                        n5.container.style.width = "", n5.container.style.height = "";
                    }), n5.enteredPlayer.addEventListener("load", function() {
                        n5.player = n5.enteredPlayer.getLottie(), a(n5, I).call(n5, {
                            ignorePath: !0
                        });
                    }), n5.attachedListeners = !0), n5.enteredPlayer.load(t11));
                    if (!n5.player) throw new Error("".concat(o, " Specified player is invalid."), n5.enteredPlayer);
                } else {
                    if (!window.lottie) throw new Error("".concat(o, " A Lottie player is required."));
                    n5.stop(), n5.player.destroy(), n5.container.innerHTML = "", "object" === e(t11) && "AnimationItem" === t11.constructor.name ? n5.player = window.lottie.loadAnimation({
                        loop: !1,
                        autoplay: !1,
                        animationData: t11.animationData,
                        container: n5.container
                    }) : n5.player = window.lottie.loadAnimation({
                        loop: !1,
                        autoplay: !1,
                        path: t11,
                        container: n5.container
                    }), n5.player.addEventListener("DOMLoaded", function() {
                        n5.container.style.width = "", n5.container.style.height = "", a(n5, I).call(n5, {
                            ignorePath: !0
                        });
                    });
                }
                n5.clickCounter = 0, n5.playCounter = 0;
            }
        }), I.set(this, {
            writable: !0,
            value: function(e20) {
                var t12 = e20.ignorePath, i6 = n5.actions[n5.interactionIdx].state, r4 = n5.actions[n5.interactionIdx].transition, o1 = n5.actions[n5.interactionIdx].path, s3 = n5.stateHandler.get(i6), l2 = n5.transitionHandler.get(r4), c1 = n5.actions[n5.interactionIdx].speed ? n5.actions[n5.interactionIdx].speed : 1, p1 = n5.actions[n5.interactionIdx].delay ? n5.actions[n5.interactionIdx].delay : 0;
                t12 || !(o1 || n5.actions[n5.actions.length - 1].reset && 0 === n5.interactionIdx) ? setTimeout(function() {
                    s3 ? s3.call() : "none" === i6 && (n5.player.loop = !1, n5.player.autoplay = !1), l2 && l2.call(), n5.player.autoplay && (n5.player.resetSegments(!0), a(n5, k).call(n5, !0)), n5.player.setSpeed(c1);
                }, p1) : a(n5, x).call(n5);
            }
        }), P.set(this, {
            writable: !0,
            value: function(e21, t13) {
                if (-1 !== e21 && -1 !== t13) {
                    var i7 = n5.getContainerCursorPosition(e21, t13);
                    e21 = i7.x, t13 = i7.y;
                }
                var a3 = n5.actions.find(function(n6) {
                    var i8 = n6.position;
                    if (i8) {
                        if (Array.isArray(i8.x) && Array.isArray(i8.y)) return e21 >= i8.x[0] && e21 <= i8.x[1] && t13 >= i8.y[0] && t13 <= i8.y[1];
                        if (!Number.isNaN(i8.x) && !Number.isNaN(i8.y)) return e21 === i8.x && t13 === i8.y;
                    }
                    return !1;
                });
                if (a3) {
                    if ("seek" === a3.type || "seek" === a3.transition) {
                        var r5 = (e21 - a3.position.x[0]) / (a3.position.x[1] - a3.position.x[0]), o2 = (t13 - a3.position.y[0]) / (a3.position.y[1] - a3.position.y[0]);
                        n5.player.playSegments(a3.frames, !0), a3.position.y[0] < 0 && a3.position.y[1] > 1 ? n5.player.goToAndStop(Math.floor(r5 * n5.player.totalFrames), !0) : n5.player.goToAndStop(Math.ceil((r5 + o2) / 2 * n5.player.totalFrames), !0);
                    } else "loop" === a3.type ? n5.player.playSegments(a3.frames, !0) : "play" === a3.type ? (!0 === n5.player.isPaused && n5.player.resetSegments(), n5.player.playSegments(a3.frames)) : "stop" === a3.type && (n5.player.resetSegments(!0), n5.player.goToAndStop(a3.frames[0], !0));
                }
            }
        }), M.set(this, {
            writable: !0,
            value: function() {
                var e22 = n5.getContainerVisibility(), t14 = n5.actions.find(function(t15) {
                    var n7 = t15.visibility;
                    return e22 >= n7[0] && e22 <= n7[1];
                });
                if (t14) {
                    if ("seek" === t14.type) {
                        var i9 = t14.frames[0], a4 = 2 == t14.frames.length ? t14.frames[1] : n5.player.totalFrames - 1;
                        null !== n5.assignedSegment && (n5.player.resetSegments(!0), n5.assignedSegment = null), n5.player.goToAndStop(i9 + Math.round((e22 - t14.visibility[0]) / (t14.visibility[1] - t14.visibility[0]) * (a4 - i9)), !0);
                    } else "loop" === t14.type ? (n5.player.loop = !0, (null === n5.assignedSegment || n5.assignedSegment !== t14.frames || !0 === n5.player.isPaused) && (n5.player.playSegments(t14.frames, !0), n5.assignedSegment = t14.frames)) : "play" === t14.type ? n5.scrolledAndPlayed || (n5.scrolledAndPlayed = !0, n5.player.resetSegments(!0), n5.player.play()) : "stop" === t14.type && n5.player.goToAndStop(t14.frames[0], !0);
                }
            }
        }), this.enteredPlayer = H, "object" !== e(H) || "AnimationItem" !== H.constructor.name) {
            if ("string" == typeof H) {
                var W = document.querySelector(H);
                W && "LOTTIE-PLAYER" === W.nodeName && (H = W.getLottie());
            } else H instanceof HTMLElement && "LOTTIE-PLAYER" === H.nodeName && (H = H.getLottie());
            if (!H) {
                var F = o + "Specified player:" + H + " is invalid.";
                throw new Error(F);
            }
        }
        "string" == typeof A && (A = document.querySelector(A)), A || (A = H.wrapper), this.player = H, this.loadedAnimation = this.player.path + this.player.fileName + ".json", this.attachedListeners = !1, this.container = A, this.mode = T, this.actions = C, this.options = O, this.assignedSegment = null, this.scrolledAndPlayed = !1, this.interactionIdx = 0, this.clickCounter = 0, this.playCounter = 0, this.stateHandler = new Map, this.transitionHandler = new Map;
    }
    var S1, C1, A1;
    return S1 = s1, C1 = [
        {
            key: "getContainerVisibility",
            value: function() {
                var e23 = this.container.getBoundingClientRect(), t16 = e23.top, n8 = e23.height;
                return (window.innerHeight - t16) / (window.innerHeight + n8);
            }
        },
        {
            key: "getContainerCursorPosition",
            value: function(e24, t17) {
                var n9 = this.container.getBoundingClientRect(), i10 = n9.top;
                return {
                    x: (e24 - n9.left) / n9.width,
                    y: (t17 - i10) / n9.height
                };
            }
        },
        {
            key: "initScrollMode",
            value: function() {
                this.player.stop(), window.addEventListener("scroll", a(this, M));
            }
        },
        {
            key: "initCursorMode",
            value: function() {
                this.actions && 1 === this.actions.length ? "click" === this.actions[0].type ? (this.player.loop = !1, this.player.stop(), this.container.addEventListener("click", a(this, d))) : "hover" === this.actions[0].type ? (this.player.loop = !1, this.player.stop(), this.container.addEventListener("mouseenter", a(this, d)), this.container.addEventListener("touchstart", a(this, d), {
                    passive: !0
                })) : "toggle" === this.actions[0].type ? (this.player.loop = !1, this.player.stop(), this.container.addEventListener("click", a(this, p))) : "hold" === this.actions[0].type || "pauseHold" === this.actions[0].type ? (this.container.addEventListener("mouseenter", a(this, g)), this.container.addEventListener("mouseleave", a(this, E)), this.container.addEventListener("touchstart", a(this, g), {
                    passive: !0
                }), this.container.addEventListener("touchend", a(this, E), {
                    passive: !0
                })) : "seek" === this.actions[0].type && (this.player.loop = !0, this.player.stop(), this.container.addEventListener("mousemove", a(this, h)), this.container.addEventListener("touchmove", a(this, y), {
                    passive: !1
                }), this.container.addEventListener("mouseout", a(this, u))) : (this.player.loop = !0, this.player.stop(), this.container.addEventListener("mousemove", a(this, h)), this.container.addEventListener("mouseleave", a(this, u)), a(this, P).call(this, -1, -1));
            }
        },
        {
            key: "initChainMode",
            value: function() {
                a(this, l).call(this), this.player.loop = !1, this.player.stop(), a(this, I).call(this, {
                    ignorePath: !1
                });
            }
        },
        {
            key: "start",
            value: function() {
                var e25 = this;
                "scroll" === this.mode ? this.player.isLoaded ? this.initScrollMode() : this.player.addEventListener("DOMLoaded", function() {
                    e25.initScrollMode();
                }) : "cursor" === this.mode ? this.player.isLoaded ? this.initCursorMode() : this.player.addEventListener("DOMLoaded", function() {
                    e25.initCursorMode();
                }) : "chain" === this.mode && (this.player.isLoaded ? this.initChainMode() : this.player.addEventListener("DOMLoaded", function() {
                    e25.initChainMode();
                }));
            }
        },
        {
            key: "redefineOptions",
            value: function(t18) {
                var n10 = t18.actions, a5 = t18.container, r6 = t18.mode, s4 = t18.player, l3 = i(t18, [
                    "actions",
                    "container",
                    "mode",
                    "player"
                ]);
                if (this.stop(), this.player.stop(), this.enteredPlayer = s4, "object" !== e(s4) || "AnimationItem" !== s4.constructor.name) {
                    if ("string" == typeof s4) {
                        var c2 = document.querySelector(s4);
                        c2 && "LOTTIE-PLAYER" === c2.nodeName && (s4 = c2.getLottie());
                    } else s4 instanceof HTMLElement && "LOTTIE-PLAYER" === s4.nodeName && (s4 = s4.getLottie());
                    if (!s4) throw new Error(o + "Specified player:" + s4 + " is invalid.", s4);
                }
                "string" == typeof a5 && (a5 = document.querySelector(a5)), a5 || (a5 = s4.wrapper), this.player = s4, this.loadedAnimation = this.player.path + this.player.fileName + ".json", this.attachedListeners = !1, this.container = a5, this.mode = r6, this.actions = n10, this.options = l3, this.assignedSegment = null, this.scrolledAndPlayed = !1, this.interactionIdx = 0, this.clickCounter = 0, this.playCounter = 0, this.stateHandler = new Map, this.transitionHandler = new Map, this.start();
            }
        },
        {
            key: "stop",
            value: function() {
                "scroll" === this.mode && window.removeEventListener("scroll", a(this, M)), "cursor" === this.mode && (this.container.removeEventListener("click", a(this, d)), this.container.removeEventListener("click", a(this, p)), this.container.removeEventListener("mouseenter", a(this, d)), this.container.removeEventListener("touchstart", a(this, d)), this.container.removeEventListener("touchmove", a(this, y)), this.container.removeEventListener("mousemove", a(this, h)), this.container.removeEventListener("mouseleave", a(this, u)), this.container.removeEventListener("touchstart", a(this, g)), this.container.removeEventListener("touchend", a(this, E))), "chain" === this.mode && (this.container.removeEventListener("click", a(this, d)), this.container.removeEventListener("click", a(this, c)), this.container.removeEventListener("mouseenter", a(this, d)), this.container.removeEventListener("touchstart", a(this, d)), this.container.removeEventListener("touchmove", a(this, y)), this.container.removeEventListener("mouseenter", a(this, c)), this.container.removeEventListener("touchstart", a(this, c)), this.container.removeEventListener("mouseenter", a(this, g)), this.container.removeEventListener("touchstart", a(this, g)), this.container.removeEventListener("mouseleave", a(this, E)), this.container.removeEventListener("mousemove", a(this, h)), this.container.removeEventListener("mouseout", a(this, u)), this.container.removeEventListener("touchend", a(this, E)), this.player.removeEventListener("loopComplete", a(this, v)), this.player.removeEventListener("complete", a(this, v)), this.player.removeEventListener("enterFrame", a(this, f)), this.player.removeEventListener("enterFrame", a(this, L)));
            }
        }
    ], n(S1.prototype, C1), A1 && n(S1, A1), s1;
}(), l = new WeakMap, c = new WeakMap, p = new WeakMap, d = new WeakMap, h = new WeakMap, y = new WeakMap, u = new WeakMap, v = new WeakMap, m = new WeakMap, f = new WeakMap, L = new WeakMap, g = new WeakMap, E = new WeakMap, w = new WeakMap, b = new WeakMap, k = new WeakMap, x = new WeakMap, I = new WeakMap, P = new WeakMap, M = new WeakMap, S = function(e26) {
    var t19 = new s(e26);
    return t19.start(), t19;
};
exports.default = S;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gp8pR","8ZNvh"], "8ZNvh", "parcelRequire94c2")

//# sourceMappingURL=index.f5c48570.js.map
