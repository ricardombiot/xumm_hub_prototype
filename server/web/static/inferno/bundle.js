/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Action\": () => (/* binding */ Action),\n/* harmony export */   \"createBrowserHistory\": () => (/* binding */ createBrowserHistory),\n/* harmony export */   \"createHashHistory\": () => (/* binding */ createHashHistory),\n/* harmony export */   \"createMemoryHistory\": () => (/* binding */ createMemoryHistory),\n/* harmony export */   \"createPath\": () => (/* binding */ createPath),\n/* harmony export */   \"parsePath\": () => (/* binding */ parsePath)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n\n\n/**\r\n * Actions represent the type of change to a location value.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action\r\n */\nvar Action;\n(function (Action) {\n  /**\r\n   * A POP indicates a change to an arbitrary index in the history stack, such\r\n   * as a back or forward navigation. It does not describe the direction of the\r\n   * navigation, only that the current index changed.\r\n   *\r\n   * Note: This is the default action for newly created history objects.\r\n   */\n  Action[\"Pop\"] = \"POP\";\n  /**\r\n   * A PUSH indicates a new entry being added to the history stack, such as when\r\n   * a link is clicked and a new page loads. When this happens, all subsequent\r\n   * entries in the stack are lost.\r\n   */\n\n  Action[\"Push\"] = \"PUSH\";\n  /**\r\n   * A REPLACE indicates the entry at the current index in the history stack\r\n   * being replaced by a new one.\r\n   */\n\n  Action[\"Replace\"] = \"REPLACE\";\n})(Action || (Action = {}));\nvar readOnly =  true ? function (obj) {\n  return Object.freeze(obj);\n} : 0;\nfunction warning(cond, message) {\n  if (!cond) {\n    // eslint-disable-next-line no-console\n    if (typeof console !== 'undefined') console.warn(message);\n    try {\n      // Welcome to debugging history!\n      //\n      // This error is thrown as a convenience so you can more easily\n      // find the source for a warning that appears in the console by\n      // enabling \"pause on exceptions\" in your JavaScript debugger.\n      throw new Error(message); // eslint-disable-next-line no-empty\n    } catch (e) {}\n  }\n}\nvar BeforeUnloadEventType = 'beforeunload';\nvar HashChangeEventType = 'hashchange';\nvar PopStateEventType = 'popstate';\n/**\r\n * Browser history stores the location in regular URLs. This is the standard for\r\n * most web apps, but it requires some configuration on the server to ensure you\r\n * serve the same app at multiple URLs.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory\r\n */\n\nfunction createBrowserHistory(options) {\n  if (options === void 0) {\n    options = {};\n  }\n  var _options = options,\n    _options$window = _options.window,\n    window = _options$window === void 0 ? document.defaultView : _options$window;\n  var globalHistory = window.history;\n  function getIndexAndLocation() {\n    var _window$location = window.location,\n      pathname = _window$location.pathname,\n      search = _window$location.search,\n      hash = _window$location.hash;\n    var state = globalHistory.state || {};\n    return [state.idx, readOnly({\n      pathname: pathname,\n      search: search,\n      hash: hash,\n      state: state.usr || null,\n      key: state.key || 'default'\n    })];\n  }\n  var blockedPopTx = null;\n  function handlePop() {\n    if (blockedPopTx) {\n      blockers.call(blockedPopTx);\n      blockedPopTx = null;\n    } else {\n      var nextAction = Action.Pop;\n      var _getIndexAndLocation = getIndexAndLocation(),\n        nextIndex = _getIndexAndLocation[0],\n        nextLocation = _getIndexAndLocation[1];\n      if (blockers.length) {\n        if (nextIndex != null) {\n          var delta = index - nextIndex;\n          if (delta) {\n            // Revert the POP\n            blockedPopTx = {\n              action: nextAction,\n              location: nextLocation,\n              retry: function retry() {\n                go(delta * -1);\n              }\n            };\n            go(delta);\n          }\n        } else {\n          // Trying to POP to a location with no index. We did not create\n          // this location, so we can't effectively block the navigation.\n           true ? warning(false,\n          // TODO: Write up a doc that explains our blocking strategy in\n          // detail and link to it here so people can understand better what\n          // is going on and how to avoid it.\n          \"You are trying to block a POP navigation to a location that was not \" + \"created by the history library. The block will fail silently in \" + \"production, but in general you should do all navigation with the \" + \"history library (instead of using window.history.pushState directly) \" + \"to avoid this situation.\") : 0;\n        }\n      } else {\n        applyTx(nextAction);\n      }\n    }\n  }\n  window.addEventListener(PopStateEventType, handlePop);\n  var action = Action.Pop;\n  var _getIndexAndLocation2 = getIndexAndLocation(),\n    index = _getIndexAndLocation2[0],\n    location = _getIndexAndLocation2[1];\n  var listeners = createEvents();\n  var blockers = createEvents();\n  if (index == null) {\n    index = 0;\n    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, globalHistory.state, {\n      idx: index\n    }), '');\n  }\n  function createHref(to) {\n    return typeof to === 'string' ? to : createPath(to);\n  } // state defaults to `null` because `window.history.state` does\n\n  function getNextLocation(to, state) {\n    if (state === void 0) {\n      state = null;\n    }\n    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: location.pathname,\n      hash: '',\n      search: ''\n    }, typeof to === 'string' ? parsePath(to) : to, {\n      state: state,\n      key: createKey()\n    }));\n  }\n  function getHistoryStateAndUrl(nextLocation, index) {\n    return [{\n      usr: nextLocation.state,\n      key: nextLocation.key,\n      idx: index\n    }, createHref(nextLocation)];\n  }\n  function allowTx(action, location, retry) {\n    return !blockers.length || (blockers.call({\n      action: action,\n      location: location,\n      retry: retry\n    }), false);\n  }\n  function applyTx(nextAction) {\n    action = nextAction;\n    var _getIndexAndLocation3 = getIndexAndLocation();\n    index = _getIndexAndLocation3[0];\n    location = _getIndexAndLocation3[1];\n    listeners.call({\n      action: action,\n      location: location\n    });\n  }\n  function push(to, state) {\n    var nextAction = Action.Push;\n    var nextLocation = getNextLocation(to, state);\n    function retry() {\n      push(to, state);\n    }\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),\n        historyState = _getHistoryStateAndUr[0],\n        url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading\n      // try...catch because iOS limits us to 100 pushState calls :/\n\n      try {\n        globalHistory.pushState(historyState, '', url);\n      } catch (error) {\n        // They are going to lose state here, but there is no real\n        // way to warn them about it since the page will refresh...\n        window.location.assign(url);\n      }\n      applyTx(nextAction);\n    }\n  }\n  function replace(to, state) {\n    var nextAction = Action.Replace;\n    var nextLocation = getNextLocation(to, state);\n    function retry() {\n      replace(to, state);\n    }\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),\n        historyState = _getHistoryStateAndUr2[0],\n        url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading\n\n      globalHistory.replaceState(historyState, '', url);\n      applyTx(nextAction);\n    }\n  }\n  function go(delta) {\n    globalHistory.go(delta);\n  }\n  var history = {\n    get action() {\n      return action;\n    },\n    get location() {\n      return location;\n    },\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    back: function back() {\n      go(-1);\n    },\n    forward: function forward() {\n      go(1);\n    },\n    listen: function listen(listener) {\n      return listeners.push(listener);\n    },\n    block: function block(blocker) {\n      var unblock = blockers.push(blocker);\n      if (blockers.length === 1) {\n        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);\n      }\n      return function () {\n        unblock(); // Remove the beforeunload listener so the document may\n        // still be salvageable in the pagehide event.\n        // See https://html.spec.whatwg.org/#unloading-documents\n\n        if (!blockers.length) {\n          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);\n        }\n      };\n    }\n  };\n  return history;\n}\n/**\r\n * Hash history stores the location in window.location.hash. This makes it ideal\r\n * for situations where you don't want to send the location to the server for\r\n * some reason, either because you do cannot configure it or the URL space is\r\n * reserved for something else.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory\r\n */\n\nfunction createHashHistory(options) {\n  if (options === void 0) {\n    options = {};\n  }\n  var _options2 = options,\n    _options2$window = _options2.window,\n    window = _options2$window === void 0 ? document.defaultView : _options2$window;\n  var globalHistory = window.history;\n  function getIndexAndLocation() {\n    var _parsePath = parsePath(window.location.hash.substr(1)),\n      _parsePath$pathname = _parsePath.pathname,\n      pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,\n      _parsePath$search = _parsePath.search,\n      search = _parsePath$search === void 0 ? '' : _parsePath$search,\n      _parsePath$hash = _parsePath.hash,\n      hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;\n    var state = globalHistory.state || {};\n    return [state.idx, readOnly({\n      pathname: pathname,\n      search: search,\n      hash: hash,\n      state: state.usr || null,\n      key: state.key || 'default'\n    })];\n  }\n  var blockedPopTx = null;\n  function handlePop() {\n    if (blockedPopTx) {\n      blockers.call(blockedPopTx);\n      blockedPopTx = null;\n    } else {\n      var nextAction = Action.Pop;\n      var _getIndexAndLocation4 = getIndexAndLocation(),\n        nextIndex = _getIndexAndLocation4[0],\n        nextLocation = _getIndexAndLocation4[1];\n      if (blockers.length) {\n        if (nextIndex != null) {\n          var delta = index - nextIndex;\n          if (delta) {\n            // Revert the POP\n            blockedPopTx = {\n              action: nextAction,\n              location: nextLocation,\n              retry: function retry() {\n                go(delta * -1);\n              }\n            };\n            go(delta);\n          }\n        } else {\n          // Trying to POP to a location with no index. We did not create\n          // this location, so we can't effectively block the navigation.\n           true ? warning(false,\n          // TODO: Write up a doc that explains our blocking strategy in\n          // detail and link to it here so people can understand better\n          // what is going on and how to avoid it.\n          \"You are trying to block a POP navigation to a location that was not \" + \"created by the history library. The block will fail silently in \" + \"production, but in general you should do all navigation with the \" + \"history library (instead of using window.history.pushState directly) \" + \"to avoid this situation.\") : 0;\n        }\n      } else {\n        applyTx(nextAction);\n      }\n    }\n  }\n  window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge\n  // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event\n\n  window.addEventListener(HashChangeEventType, function () {\n    var _getIndexAndLocation5 = getIndexAndLocation(),\n      nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.\n\n    if (createPath(nextLocation) !== createPath(location)) {\n      handlePop();\n    }\n  });\n  var action = Action.Pop;\n  var _getIndexAndLocation6 = getIndexAndLocation(),\n    index = _getIndexAndLocation6[0],\n    location = _getIndexAndLocation6[1];\n  var listeners = createEvents();\n  var blockers = createEvents();\n  if (index == null) {\n    index = 0;\n    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, globalHistory.state, {\n      idx: index\n    }), '');\n  }\n  function getBaseHref() {\n    var base = document.querySelector('base');\n    var href = '';\n    if (base && base.getAttribute('href')) {\n      var url = window.location.href;\n      var hashIndex = url.indexOf('#');\n      href = hashIndex === -1 ? url : url.slice(0, hashIndex);\n    }\n    return href;\n  }\n  function createHref(to) {\n    return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));\n  }\n  function getNextLocation(to, state) {\n    if (state === void 0) {\n      state = null;\n    }\n    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: location.pathname,\n      hash: '',\n      search: ''\n    }, typeof to === 'string' ? parsePath(to) : to, {\n      state: state,\n      key: createKey()\n    }));\n  }\n  function getHistoryStateAndUrl(nextLocation, index) {\n    return [{\n      usr: nextLocation.state,\n      key: nextLocation.key,\n      idx: index\n    }, createHref(nextLocation)];\n  }\n  function allowTx(action, location, retry) {\n    return !blockers.length || (blockers.call({\n      action: action,\n      location: location,\n      retry: retry\n    }), false);\n  }\n  function applyTx(nextAction) {\n    action = nextAction;\n    var _getIndexAndLocation7 = getIndexAndLocation();\n    index = _getIndexAndLocation7[0];\n    location = _getIndexAndLocation7[1];\n    listeners.call({\n      action: action,\n      location: location\n    });\n  }\n  function push(to, state) {\n    var nextAction = Action.Push;\n    var nextLocation = getNextLocation(to, state);\n    function retry() {\n      push(to, state);\n    }\n     true ? warning(nextLocation.pathname.charAt(0) === '/', \"Relative pathnames are not supported in hash history.push(\" + JSON.stringify(to) + \")\") : 0;\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),\n        historyState = _getHistoryStateAndUr3[0],\n        url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading\n      // try...catch because iOS limits us to 100 pushState calls :/\n\n      try {\n        globalHistory.pushState(historyState, '', url);\n      } catch (error) {\n        // They are going to lose state here, but there is no real\n        // way to warn them about it since the page will refresh...\n        window.location.assign(url);\n      }\n      applyTx(nextAction);\n    }\n  }\n  function replace(to, state) {\n    var nextAction = Action.Replace;\n    var nextLocation = getNextLocation(to, state);\n    function retry() {\n      replace(to, state);\n    }\n     true ? warning(nextLocation.pathname.charAt(0) === '/', \"Relative pathnames are not supported in hash history.replace(\" + JSON.stringify(to) + \")\") : 0;\n    if (allowTx(nextAction, nextLocation, retry)) {\n      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),\n        historyState = _getHistoryStateAndUr4[0],\n        url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading\n\n      globalHistory.replaceState(historyState, '', url);\n      applyTx(nextAction);\n    }\n  }\n  function go(delta) {\n    globalHistory.go(delta);\n  }\n  var history = {\n    get action() {\n      return action;\n    },\n    get location() {\n      return location;\n    },\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    back: function back() {\n      go(-1);\n    },\n    forward: function forward() {\n      go(1);\n    },\n    listen: function listen(listener) {\n      return listeners.push(listener);\n    },\n    block: function block(blocker) {\n      var unblock = blockers.push(blocker);\n      if (blockers.length === 1) {\n        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);\n      }\n      return function () {\n        unblock(); // Remove the beforeunload listener so the document may\n        // still be salvageable in the pagehide event.\n        // See https://html.spec.whatwg.org/#unloading-documents\n\n        if (!blockers.length) {\n          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);\n        }\n      };\n    }\n  };\n  return history;\n}\n/**\r\n * Memory history stores the current location in memory. It is designed for use\r\n * in stateful non-browser environments like tests and React Native.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory\r\n */\n\nfunction createMemoryHistory(options) {\n  if (options === void 0) {\n    options = {};\n  }\n  var _options3 = options,\n    _options3$initialEntr = _options3.initialEntries,\n    initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,\n    initialIndex = _options3.initialIndex;\n  var entries = initialEntries.map(function (entry) {\n    var location = readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: '/',\n      search: '',\n      hash: '',\n      state: null,\n      key: createKey()\n    }, typeof entry === 'string' ? parsePath(entry) : entry));\n     true ? warning(location.pathname.charAt(0) === '/', \"Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: \" + JSON.stringify(entry) + \")\") : 0;\n    return location;\n  });\n  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);\n  var action = Action.Pop;\n  var location = entries[index];\n  var listeners = createEvents();\n  var blockers = createEvents();\n  function createHref(to) {\n    return typeof to === 'string' ? to : createPath(to);\n  }\n  function getNextLocation(to, state) {\n    if (state === void 0) {\n      state = null;\n    }\n    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      pathname: location.pathname,\n      search: '',\n      hash: ''\n    }, typeof to === 'string' ? parsePath(to) : to, {\n      state: state,\n      key: createKey()\n    }));\n  }\n  function allowTx(action, location, retry) {\n    return !blockers.length || (blockers.call({\n      action: action,\n      location: location,\n      retry: retry\n    }), false);\n  }\n  function applyTx(nextAction, nextLocation) {\n    action = nextAction;\n    location = nextLocation;\n    listeners.call({\n      action: action,\n      location: location\n    });\n  }\n  function push(to, state) {\n    var nextAction = Action.Push;\n    var nextLocation = getNextLocation(to, state);\n    function retry() {\n      push(to, state);\n    }\n     true ? warning(location.pathname.charAt(0) === '/', \"Relative pathnames are not supported in memory history.push(\" + JSON.stringify(to) + \")\") : 0;\n    if (allowTx(nextAction, nextLocation, retry)) {\n      index += 1;\n      entries.splice(index, entries.length, nextLocation);\n      applyTx(nextAction, nextLocation);\n    }\n  }\n  function replace(to, state) {\n    var nextAction = Action.Replace;\n    var nextLocation = getNextLocation(to, state);\n    function retry() {\n      replace(to, state);\n    }\n     true ? warning(location.pathname.charAt(0) === '/', \"Relative pathnames are not supported in memory history.replace(\" + JSON.stringify(to) + \")\") : 0;\n    if (allowTx(nextAction, nextLocation, retry)) {\n      entries[index] = nextLocation;\n      applyTx(nextAction, nextLocation);\n    }\n  }\n  function go(delta) {\n    var nextIndex = clamp(index + delta, 0, entries.length - 1);\n    var nextAction = Action.Pop;\n    var nextLocation = entries[nextIndex];\n    function retry() {\n      go(delta);\n    }\n    if (allowTx(nextAction, nextLocation, retry)) {\n      index = nextIndex;\n      applyTx(nextAction, nextLocation);\n    }\n  }\n  var history = {\n    get index() {\n      return index;\n    },\n    get action() {\n      return action;\n    },\n    get location() {\n      return location;\n    },\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    back: function back() {\n      go(-1);\n    },\n    forward: function forward() {\n      go(1);\n    },\n    listen: function listen(listener) {\n      return listeners.push(listener);\n    },\n    block: function block(blocker) {\n      return blockers.push(blocker);\n    }\n  };\n  return history;\n} ////////////////////////////////////////////////////////////////////////////////\n// UTILS\n////////////////////////////////////////////////////////////////////////////////\n\nfunction clamp(n, lowerBound, upperBound) {\n  return Math.min(Math.max(n, lowerBound), upperBound);\n}\nfunction promptBeforeUnload(event) {\n  // Cancel the event.\n  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.\n\n  event.returnValue = '';\n}\nfunction createEvents() {\n  var handlers = [];\n  return {\n    get length() {\n      return handlers.length;\n    },\n    push: function push(fn) {\n      handlers.push(fn);\n      return function () {\n        handlers = handlers.filter(function (handler) {\n          return handler !== fn;\n        });\n      };\n    },\n    call: function call(arg) {\n      handlers.forEach(function (fn) {\n        return fn && fn(arg);\n      });\n    }\n  };\n}\nfunction createKey() {\n  return Math.random().toString(36).substr(2, 8);\n}\n/**\r\n * Creates a string URL path from the given pathname, search, and hash components.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath\r\n */\n\nfunction createPath(_ref) {\n  var _ref$pathname = _ref.pathname,\n    pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,\n    _ref$search = _ref.search,\n    search = _ref$search === void 0 ? '' : _ref$search,\n    _ref$hash = _ref.hash,\n    hash = _ref$hash === void 0 ? '' : _ref$hash;\n  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;\n  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;\n  return pathname;\n}\n/**\r\n * Parses a string URL path into its separate pathname, search, and hash components.\r\n *\r\n * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath\r\n */\n\nfunction parsePath(path) {\n  var parsedPath = {};\n  if (path) {\n    var hashIndex = path.indexOf('#');\n    if (hashIndex >= 0) {\n      parsedPath.hash = path.substr(hashIndex);\n      path = path.substr(0, hashIndex);\n    }\n    var searchIndex = path.indexOf('?');\n    if (searchIndex >= 0) {\n      parsedPath.search = path.substr(searchIndex);\n      path = path.substr(0, searchIndex);\n    }\n    if (path) {\n      parsedPath.pathname = path;\n    }\n  }\n  return parsedPath;\n}\n\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/history/index.js?");

/***/ }),

/***/ "./node_modules/hoist-non-inferno-statics/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/hoist-non-inferno-statics/index.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar INFERNO_STATICS = {\n  childContextTypes: true,\n  contextTypes: true,\n  defaultProps: true,\n  displayName: true,\n  getDefaultProps: true,\n  propTypes: true,\n  type: true\n};\nvar KNOWN_STATICS = {\n  name: true,\n  length: true,\n  prototype: true,\n  caller: true,\n  arguments: true,\n  arity: true\n};\nvar isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';\nfunction hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {\n  if (typeof sourceComponent !== 'string') {\n    // don't hoist over string (html) components\n    var keys = Object.getOwnPropertyNames(sourceComponent);\n\n    /* istanbul ignore else */\n    if (isGetOwnPropertySymbolsAvailable) {\n      keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));\n    }\n    for (var i = 0; i < keys.length; ++i) {\n      if (!INFERNO_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {\n        try {\n          targetComponent[keys[i]] = sourceComponent[keys[i]];\n        } catch (error) {}\n      }\n    }\n  }\n  return targetComponent;\n}\n;\nmodule.exports = hoistNonReactStatics;\nmodule.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/hoist-non-inferno-statics/index.js?");

/***/ }),

/***/ "./node_modules/inferno-router/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/inferno-router/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrowserRouter\": () => (/* binding */ BrowserRouter),\n/* harmony export */   \"HashRouter\": () => (/* binding */ HashRouter),\n/* harmony export */   \"Link\": () => (/* binding */ Link),\n/* harmony export */   \"MemoryRouter\": () => (/* binding */ MemoryRouter),\n/* harmony export */   \"NavLink\": () => (/* binding */ NavLink),\n/* harmony export */   \"Prompt\": () => (/* binding */ Prompt),\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect),\n/* harmony export */   \"Route\": () => (/* binding */ Route),\n/* harmony export */   \"Router\": () => (/* binding */ Router),\n/* harmony export */   \"StaticRouter\": () => (/* binding */ StaticRouter),\n/* harmony export */   \"Switch\": () => (/* binding */ Switch),\n/* harmony export */   \"createClientSideURL\": () => (/* binding */ createClientSideURL),\n/* harmony export */   \"matchPath\": () => (/* binding */ matchPath),\n/* harmony export */   \"resolveLoaders\": () => (/* binding */ resolveLoaders),\n/* harmony export */   \"traverseLoaders\": () => (/* binding */ traverseLoaders),\n/* harmony export */   \"useLoaderData\": () => (/* binding */ useLoaderData),\n/* harmony export */   \"useLoaderError\": () => (/* binding */ useLoaderError),\n/* harmony export */   \"withRouter\": () => (/* binding */ withRouter)\n/* harmony export */ });\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ \"./node_modules/history/index.js\");\n/* harmony import */ var path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-to-regexp-es6 */ \"./node_modules/path-to-regexp-es6/index.js\");\n/* harmony import */ var path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-inferno-statics */ \"./node_modules/hoist-non-inferno-statics/index.js\");\n/* harmony import */ var hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar isArray = Array.isArray;\nfunction isNullOrUndef(o) {\n  return o === void 0 || o === null;\n}\nfunction isInvalid(o) {\n  return o === null || o === false || o === true || o === void 0;\n}\nfunction isString(o) {\n  return typeof o === 'string';\n}\nfunction isUndefined(o) {\n  return o === void 0;\n}\nfunction combineFrom(first, second) {\n  var out = {};\n  if (first) {\n    for (var key in first) {\n      out[key] = first[key];\n    }\n  }\n  if (second) {\n    for (var _key in second) {\n      out[_key] = second[_key];\n    }\n  }\n  return out;\n}\nfunction combinePath(_ref) {\n  var _ref$pathname = _ref.pathname,\n    pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,\n    _ref$search = _ref.search,\n    search = _ref$search === void 0 ? '' : _ref$search,\n    _ref$hash = _ref.hash,\n    hash = _ref$hash === void 0 ? '' : _ref$hash;\n  return pathname + search + hash;\n}\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\nvar patternCache = {};\nvar cacheLimit = 10000;\nvar cacheCount = 0;\nvar compilePath = function compilePath(pattern, options) {\n  var cacheKey = \"\" + options.end + options.strict + options.sensitive;\n  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});\n  if (cache[pattern]) {\n    return cache[pattern];\n  }\n  var keys = [];\n  var re = path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1___default()(pattern, keys, options);\n  var compiledPattern = {\n    re: re,\n    keys: keys\n  };\n  if (cacheCount < cacheLimit) {\n    cache[pattern] = compiledPattern;\n    cacheCount++;\n  }\n  return compiledPattern;\n};\n/**\n * Public API for matching a URL pathname to a path pattern.\n */\nfunction matchPath(pathname, options) {\n  if (typeof options === 'string') {\n    options = {\n      path: options\n    };\n  }\n  var _options = options,\n    _options$path = _options.path,\n    path = _options$path === void 0 ? '/' : _options$path,\n    _options$exact = _options.exact,\n    exact = _options$exact === void 0 ? false : _options$exact,\n    _options$strict = _options.strict,\n    strict = _options$strict === void 0 ? false : _options$strict,\n    _options$sensitive = _options.sensitive,\n    sensitive = _options$sensitive === void 0 ? false : _options$sensitive,\n    loader = _options.loader,\n    _options$initialData = _options.initialData,\n    initialData = _options$initialData === void 0 ? {} : _options$initialData;\n  var _compilePath = compilePath(path, {\n      end: exact,\n      strict: strict,\n      sensitive: sensitive\n    }),\n    re = _compilePath.re,\n    keys = _compilePath.keys;\n  var match = re.exec(pathname);\n  if (!match) {\n    return null;\n  }\n  var loaderData = initialData[path];\n  var url = match[0],\n    values = match.slice(1);\n  var isExact = pathname === url;\n  if (exact && !isExact) {\n    return null;\n  }\n  return {\n    isExact: isExact,\n    loader: loader,\n    loaderData: loaderData,\n    params: keys.reduce(function (memo, key, index) {\n      memo[key.name] = values[index];\n      return memo;\n    }, {}),\n    path: path,\n    url: path === '/' && url === '' ? '/' : url // the matched portion of the URL\n  };\n}\n\nfunction _inheritsLoose$8(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$8(subClass, superClass);\n}\nfunction _setPrototypeOf$8(o, p) {\n  _setPrototypeOf$8 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$8(o, p);\n}\nfunction getMatch(pathname, _ref, router) {\n  var _path;\n  var path = _ref.path,\n    exact = _ref.exact,\n    strict = _ref.strict,\n    sensitive = _ref.sensitive,\n    loader = _ref.loader,\n    from = _ref.from;\n  (_path = path) != null ? _path : path = from;\n  var initialData = router.initialData,\n    route = router.route; // This is the parent route\n  return path ? matchPath(pathname, {\n    path: path,\n    exact: exact,\n    strict: strict,\n    sensitive: sensitive,\n    loader: loader,\n    initialData: initialData\n  }) : route.match;\n}\nfunction extractFirstMatchFromChildren(pathname, children, router) {\n  if (isArray(children)) {\n    for (var i = 0; i < children.length; ++i) {\n      var nestedMatch = extractFirstMatchFromChildren(pathname, children[i], router);\n      if (nestedMatch.match) return nestedMatch;\n    }\n    return {};\n  }\n  return {\n    _child: children,\n    match: getMatch(pathname, children.props, router)\n  };\n}\nvar Switch = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$8(Switch, _Component);\n  function Switch(props, context) {\n    var _this;\n    _this = _Component.call(this, props, context) || this;\n    var router = context.router;\n    var location = props.location,\n      children = props.children;\n    var pathname = (location || router.route.location).pathname;\n    var _extractFirstMatchFro = extractFirstMatchFromChildren(pathname, children, router),\n      match = _extractFirstMatchFro.match,\n      _child = _extractFirstMatchFro._child;\n    _this.state = {\n      _child: _child,\n      match: match\n    };\n    return _this;\n  }\n  var _proto = Switch.prototype;\n  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {\n    var router = nextContext.router;\n    var location = nextProps.location,\n      children = nextProps.children;\n    var pathname = (location || router.route.location).pathname;\n    var _extractFirstMatchFro2 = extractFirstMatchFromChildren(pathname, children, router),\n      match = _extractFirstMatchFro2.match,\n      _child = _extractFirstMatchFro2._child;\n    this.setState({\n      match: match,\n      _child: _child\n    });\n  };\n  _proto.render = function render(_ref2, _ref3, context) {\n    var children = _ref2.children,\n      location = _ref2.location;\n    var match = _ref3.match,\n      _child = _ref3._child;\n    if (isInvalid(children)) {\n      return null;\n    }\n    if (match) {\n      var _location;\n      (_location = location) != null ? _location : location = context.router.route.location;\n      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(_child.flags, _child.type, combineFrom(_child.props, {\n        location: location,\n        computedMatch: match\n      }));\n    }\n    return null;\n  };\n  return Switch;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nfunction resolveLoaders(loaderEntries) {\n  var promises = loaderEntries.map(function (_ref) {\n    var path = _ref.path,\n      params = _ref.params,\n      request = _ref.request,\n      loader = _ref.loader;\n    return resolveEntry(path, params, request, loader);\n  });\n  return Promise.all(promises).then(function (result) {\n    return Object.fromEntries(result);\n  });\n}\nfunction traverseLoaders(location, tree, base) {\n  return _traverseLoaders(location, tree, base, false);\n}\n// Optionally pass base param during SSR to get fully qualified request URI passed to loader in request param\nfunction _traverseLoaders(location, tree, base, parentIsSwitch) {\n  var _tree$props4, _tree$type;\n  if (parentIsSwitch === void 0) {\n    parentIsSwitch = false;\n  }\n  // Make sure tree isn't null\n  if (isNullOrUndef(tree)) return [];\n  if (Array.isArray(tree)) {\n    var hasMatch = false;\n    var entriesOfArr = tree.reduce(function (res, node) {\n      var _node$type;\n      if (parentIsSwitch && hasMatch) return res;\n      var outpArr = _traverseLoaders(location, node, base, (node == null ? void 0 : (_node$type = node.type) == null ? void 0 : _node$type.prototype) instanceof Switch);\n      if (parentIsSwitch && outpArr.length > 0) {\n        hasMatch = true;\n      }\n      return [].concat(res, outpArr);\n    }, []);\n    return entriesOfArr;\n  }\n  var outp = [];\n  var isRouteButNotMatch = false;\n  if (tree.props) {\n    var _tree$props2, _tree$props3;\n    // TODO: If we traverse a switch, only the first match should be returned\n    // TODO: Should we check if we are in Router? It is defensive and could save a bit of time, but is it worth it?\n    var _tree$props = tree.props,\n      path = _tree$props.path,\n      _tree$props$exact = _tree$props.exact,\n      exact = _tree$props$exact === void 0 ? false : _tree$props$exact,\n      _tree$props$strict = _tree$props.strict,\n      strict = _tree$props$strict === void 0 ? false : _tree$props$strict,\n      _tree$props$sensitive = _tree$props.sensitive,\n      sensitive = _tree$props$sensitive === void 0 ? false : _tree$props$sensitive;\n    var match = matchPath(location, {\n      exact: exact,\n      path: path,\n      sensitive: sensitive,\n      strict: strict\n    });\n    // So we can bail out of recursion it this was a Route which didn't match\n    isRouteButNotMatch = !match;\n    // Add any loader on this node (but only on the VNode)\n    if (match && !tree.context && (_tree$props2 = tree.props) != null && _tree$props2.loader && (_tree$props3 = tree.props) != null && _tree$props3.path) {\n      var params = match.params;\n      var controller = new AbortController();\n      var request = createClientSideRequest(location, controller.signal, base);\n      outp.push({\n        controller: controller,\n        loader: tree.props.loader,\n        params: params,\n        path: path,\n        request: request\n      });\n    }\n  }\n  // Traverse ends here\n  if (isRouteButNotMatch) return outp;\n  // Traverse children\n  var entries = _traverseLoaders(location, tree.children || ((_tree$props4 = tree.props) == null ? void 0 : _tree$props4.children), base, ((_tree$type = tree.type) == null ? void 0 : _tree$type.prototype) instanceof Switch);\n  return [].concat(outp, entries);\n}\nfunction resolveEntry(path, params, request, loader) {\n  return loader({\n    params: params,\n    request: request\n  }).then(function (res) {\n    // This implementation is based on:\n    // https://github.com/remix-run/react-router/blob/4f3ad7b96e6e0228cc952cd7eafe2c265c7393c7/packages/router/router.ts#L2787-L2879\n    // Check if regular data object (from tests or initialData)\n    if (typeof res.json !== 'function') {\n      return [path, {\n        res: res\n      }];\n    }\n    var contentType = res.headers.get('Content-Type');\n    var dataPromise;\n    // Check between word boundaries instead of startsWith() due to the last\n    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type\n    if (contentType && /\\bapplication\\/json\\b/.test(contentType)) {\n      dataPromise = res.json();\n    } else {\n      dataPromise = res.text();\n    }\n    return dataPromise.then(function (body) {\n      // We got a JSON error\n      if (!res.ok) {\n        return [path, {\n          err: body\n        }];\n      }\n      // We got JSON response\n      return [path, {\n        res: body\n      }];\n    })\n    // Could not parse JSON\n    [\"catch\"](function (err) {\n      return [path, {\n        err: err\n      }];\n    });\n  })\n  // Could not fetch data\n  [\"catch\"](function (err) {\n    return [path, {\n      err: err\n    }];\n  });\n}\nvar inBrowser = typeof window === 'undefined';\nfunction createClientSideRequest(location, signal,\n// submission?: Submission\nbase) {\n  var url = inBrowser || !isUndefined(base) ? createClientSideURL(location, base) : location.toString();\n  var init = {\n    signal: signal\n  };\n  // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)\n  return new Request(url, init);\n}\n/**\n * Parses a string URL path into its separate pathname, search, and hash components.\n */\nfunction createClientSideURL(location, base) {\n  if (base === undefined && typeof window !== 'undefined') {\n    var _window, _window$location;\n    // window.location.origin is \"null\" (the literal string value) in Firefox\n    // under certain conditions, notably when serving from a local HTML file\n    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297\n    base = ((_window = window) == null ? void 0 : (_window$location = _window.location) == null ? void 0 : _window$location.origin) !== 'null' ? window.location.origin : window.location.href;\n  }\n  var url = new URL(location.toString(), base);\n  url.hash = '';\n  return url;\n}\n// TODO: react-router supports submitting forms with loaders, this is related to that\n// function isMutationMethod(method?: string): method is MutationFormMethod {\n//   return validMutationMethods.has(method as MutationFormMethod);\n// }\n// function convertFormDataToSearchParams(formData: FormData): URLSearchParams {\n//   let searchParams = new URLSearchParams();\n//   for (let [key, value] of formData.entries()) {\n//     // invariant(\n//     //   typeof value === \"string\",\n//     //   'File inputs are not supported with encType \"application/x-www-form-urlencoded\", ' +\n//     //     'please use \"multipart/form-data\" instead.'\n//     // );\n//     if (typeof value === \"string\") {\n//       searchParams.append(key, value);\n//     }\n//   }\n//   return searchParams;\n// }\n\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) {\n  var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"];\n  if (it) return (it = it.call(o)).next.bind(it);\n  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {\n    if (it) o = it;\n    var i = 0;\n    return function () {\n      if (i >= o.length) return {\n        done: true\n      };\n      return {\n        done: false,\n        value: o[i++]\n      };\n    };\n  }\n  throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\nfunction _inheritsLoose$7(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$7(subClass, superClass);\n}\nfunction _setPrototypeOf$7(o, p) {\n  _setPrototypeOf$7 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$7(o, p);\n}\n/**\n * The public API for putting history on context.\n */\nvar Router = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$7(Router, _Component);\n  function Router(props, context) {\n    var _this;\n    _this = _Component.call(this, props, context) || this;\n    _this.unlisten = void 0;\n    _this._loaderFetchControllers = [];\n    _this._loaderIteration = 0;\n    var match = _this.computeMatch(props.history.location.pathname);\n    _this.state = {\n      initialData: _this.props.initialData,\n      match: match\n    };\n    return _this;\n  }\n  var _proto = Router.prototype;\n  _proto.getChildContext = function getChildContext() {\n    var _this$state, _this$state2;\n    var parentRouter = this.context.router;\n    var router = combineFrom(parentRouter, null);\n    router.history = this.props.history;\n    router.route = {\n      location: router.history.location,\n      match: (_this$state = this.state) == null ? void 0 : _this$state.match // Why are we sending this? it appears useless.\n    };\n\n    router.initialData = (_this$state2 = this.state) == null ? void 0 : _this$state2.initialData; // this is a dictionary of all data available\n    return {\n      router: router\n    };\n  };\n  _proto.computeMatch = function computeMatch(pathname) {\n    return {\n      isExact: pathname === '/',\n      loader: undefined,\n      params: {},\n      path: '/',\n      url: '/'\n    };\n  };\n  _proto.componentWillMount = function componentWillMount() {\n    var _this2 = this;\n    var history = this.props.history;\n    // Do this here so we can setState when a <Redirect> changes the\n    // location in componentWillMount. This happens e.g. when doing\n    // server rendering using a <StaticRouter>.\n    this.unlisten = history.listen(function () {\n      var match = _this2.computeMatch(history.location.pathname);\n      _this2._matchAndResolveLoaders(match);\n    });\n    // First execution of loaders\n    if (isUndefined(this.props.initialData)) {\n      var _this$state3;\n      this._matchAndResolveLoaders((_this$state3 = this.state) == null ? void 0 : _this$state3.match);\n    }\n  };\n  _proto._matchAndResolveLoaders = function _matchAndResolveLoaders(match) {\n    var _this3 = this;\n    // Keep track of invokation order\n    // Bumping the counter needs to be done first because calling abort\n    // triggers promise to resolve with \"aborted\"\n    this._loaderIteration = (this._loaderIteration + 1) % 10000;\n    var currentIteration = this._loaderIteration;\n    for (var _iterator = _createForOfIteratorHelperLoose(this._loaderFetchControllers), _step; !(_step = _iterator()).done;) {\n      var controller = _step.value;\n      controller.abort();\n    }\n    this._loaderFetchControllers = [];\n    var _this$props = this.props,\n      history = _this$props.history,\n      children = _this$props.children;\n    var loaderEntries = traverseLoaders(history.location.pathname, children);\n    if (loaderEntries.length === 0) {\n      this.setState({\n        match: match\n      });\n      return;\n    }\n    // Store AbortController instances for each matched loader\n    this._loaderFetchControllers = loaderEntries.map(function (e) {\n      return e.controller;\n    });\n    resolveLoaders(loaderEntries).then(function (initialData) {\n      // On multiple pending navigations, only update interface with last\n      // in case they resolve out of order\n      if (currentIteration === _this3._loaderIteration) {\n        _this3.setState({\n          initialData: initialData,\n          match: match\n        });\n      }\n    });\n  };\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    this.unlisten();\n  };\n  _proto.render = function render(props) {\n    return props.children;\n  };\n  return Router;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nvar _excluded$5 = [\"basename\", \"context\", \"location\"];\nfunction _objectWithoutPropertiesLoose$5(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\nfunction _inheritsLoose$6(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$6(subClass, superClass);\n}\nfunction _setPrototypeOf$6(o, p) {\n  _setPrototypeOf$6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$6(o, p);\n}\nfunction addLeadingSlash(path) {\n  return path.charAt(0) === '/' ? path : '/' + path;\n}\n// tslint:disable-next-line:no-empty\nvar noop = function noop() {};\nvar StaticRouter = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$6(StaticRouter, _Component);\n  function StaticRouter() {\n    var _this;\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _Component.call.apply(_Component, [this].concat(args)) || this;\n    _this.createHref = function (path) {\n      return addLeadingSlash((_this.props.basename || '') + createURL(path));\n    };\n    _this.handlePush = function (location) {\n      var _this$props = _this.props,\n        basename = _this$props.basename,\n        context = _this$props.context;\n      context.action = 'PUSH';\n      context.location = addBasename(basename, isString(location) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(location) : location);\n      context.url = createURL(context.location);\n    };\n    _this.handleReplace = function (location) {\n      var _this$props2 = _this.props,\n        basename = _this$props2.basename,\n        context = _this$props2.context;\n      context.action = 'REPLACE';\n      context.location = addBasename(basename, isString(location) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(location) : location);\n      context.url = createURL(context.location);\n    };\n    // tslint:disable-next-line:no-empty\n    _this.handleListen = function () {\n      return noop;\n    };\n    // tslint:disable-next-line:no-empty\n    _this.handleBlock = function () {\n      return noop;\n    };\n    return _this;\n  }\n  var _proto = StaticRouter.prototype;\n  _proto.getChildContext = function getChildContext() {\n    return {\n      router: {\n        initialData: this.props.initialData,\n        staticContext: this.props.context\n      }\n    };\n  };\n  _proto.render = function render(_ref) {\n    var basename = _ref.basename;\n    _ref.context;\n    var location = _ref.location,\n      props = _objectWithoutPropertiesLoose$5(_ref, _excluded$5);\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, combineFrom(props, {\n      history: {\n        action: 'POP',\n        block: this.handleBlock,\n        createHref: this.createHref,\n        go: staticHandler('go'),\n        goBack: staticHandler('goBack'),\n        goForward: staticHandler('goForward'),\n        listen: this.handleListen,\n        location: stripBasename(basename, createLocation(location)),\n        push: this.handlePush,\n        replace: this.handleReplace\n      }\n    }));\n  };\n  return StaticRouter;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nStaticRouter.defaultProps = {\n  basename: '',\n  location: '/'\n};\nfunction normalizeLocation(_ref2) {\n  var _ref2$pathname = _ref2.pathname,\n    pathname = _ref2$pathname === void 0 ? '/' : _ref2$pathname,\n    search = _ref2.search,\n    hash = _ref2.hash;\n  return {\n    hash: (hash || '') === '#' ? '' : hash,\n    pathname: pathname,\n    search: (search || '') === '?' ? '' : search\n  };\n}\nfunction addBasename(basename, location) {\n  if (!basename) {\n    return location;\n  }\n  return combineFrom(location, {\n    pathname: addLeadingSlash(basename) + location.pathname\n  });\n}\nfunction stripBasename(basename, location) {\n  if (!basename) {\n    return location;\n  }\n  var base = addLeadingSlash(basename);\n  if (location.pathname.indexOf(base) !== 0) {\n    return location;\n  }\n  return combineFrom(location, {\n    pathname: location.pathname.substring(base.length)\n  });\n}\nfunction createLocation(location) {\n  return typeof location === 'string' ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(location) : normalizeLocation(location);\n}\nfunction createURL(location) {\n  return typeof location === 'string' ? location : combinePath(location);\n}\nfunction staticHandler(methodName) {\n  return function () {\n    invariant(false, 'You cannot %s with <StaticRouter>', methodName);\n  };\n}\nfunction _inheritsLoose$5(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$5(subClass, superClass);\n}\nfunction _setPrototypeOf$5(o, p) {\n  _setPrototypeOf$5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$5(o, p);\n}\nvar BrowserRouter = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$5(BrowserRouter, _Component);\n  function BrowserRouter(props, context) {\n    var _this;\n    _this = _Component.call(this, props, context) || this;\n    _this.history = void 0;\n    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__.createBrowserHistory)();\n    return _this;\n  }\n  var _proto = BrowserRouter.prototype;\n  _proto.render = function render() {\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, {\n      children: this.props.children,\n      history: this.history,\n      initialData: this.props.initialData\n    });\n  };\n  return BrowserRouter;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nfunction _inheritsLoose$4(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$4(subClass, superClass);\n}\nfunction _setPrototypeOf$4(o, p) {\n  _setPrototypeOf$4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$4(o, p);\n}\nvar HashRouter = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$4(HashRouter, _Component);\n  function HashRouter(props, context) {\n    var _this;\n    _this = _Component.call(this, props, context) || this;\n    _this.history = void 0;\n    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__.createHashHistory)();\n    return _this;\n  }\n  var _proto = HashRouter.prototype;\n  _proto.render = function render() {\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, {\n      children: this.props.children,\n      history: this.history\n    });\n  };\n  return HashRouter;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nfunction _inheritsLoose$3(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$3(subClass, superClass);\n}\nfunction _setPrototypeOf$3(o, p) {\n  _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$3(o, p);\n}\nvar MemoryRouter = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$3(MemoryRouter, _Component);\n  function MemoryRouter(props, context) {\n    var _this;\n    _this = _Component.call(this, props, context) || this;\n    _this.history = void 0;\n    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__.createMemoryHistory)(props);\n    return _this;\n  }\n  var _proto = MemoryRouter.prototype;\n  _proto.render = function render() {\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, {\n      children: this.props.children,\n      history: this.history,\n      initialData: this.props.initialData\n    });\n  };\n  return MemoryRouter;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nvar _excluded$4 = [\"computedMatch\"];\nfunction _objectWithoutPropertiesLoose$4(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\nfunction _inheritsLoose$2(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$2(subClass, superClass);\n}\nfunction _setPrototypeOf$2(o, p) {\n  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$2(o, p);\n}\nvar Route = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$2(Route, _Component);\n  function Route(props, context) {\n    var _this;\n    _this = _Component.call(this, props, context) || this;\n    var match = _this.computeMatch(props, context.router);\n    _this.state = {\n      __loaderData__: match == null ? void 0 : match.loaderData,\n      match: match\n    };\n    return _this;\n  }\n  var _proto = Route.prototype;\n  _proto.getChildContext = function getChildContext() {\n    var parentRouter = this.context.router;\n    var router = combineFrom(parentRouter, null);\n    router.route = {\n      location: this.props.location || parentRouter.route.location,\n      match: this.state.match\n    };\n    return {\n      router: router\n    };\n  };\n  _proto.computeMatch = function computeMatch(_ref, router) {\n    var computedMatch = _ref.computedMatch,\n      props = _objectWithoutPropertiesLoose$4(_ref, _excluded$4);\n    if (!isNullOrUndef(computedMatch)) {\n      // <Switch> already computed the match for us\n      return computedMatch;\n    }\n    var path = props.path,\n      strict = props.strict,\n      exact = props.exact,\n      sensitive = props.sensitive,\n      loader = props.loader;\n    var route = router.route,\n      initialData = router.initialData; // This is the parent route\n    var pathname = (props.location || route.location).pathname;\n    return path ? matchPath(pathname, {\n      path: path,\n      strict: strict,\n      exact: exact,\n      sensitive: sensitive,\n      loader: loader,\n      initialData: initialData\n    }) : route.match;\n  };\n  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {\n    var match = this.computeMatch(nextProps, nextContext.router);\n    this.setState({\n      __loaderData__: match == null ? void 0 : match.loaderData,\n      match: match\n    });\n  };\n  _proto.render = function render(props, state, context) {\n    var match = state.match,\n      __loaderData__ = state.__loaderData__;\n    var children = props.children,\n      component = props.component,\n      render = props.render,\n      loader = props.loader;\n    var _context$router = context.router,\n      history = _context$router.history,\n      route = _context$router.route,\n      staticContext = _context$router.staticContext;\n    var location = props.location || route.location;\n    var renderProps = {\n      match: match,\n      location: location,\n      history: history,\n      staticContext: staticContext,\n      component: component,\n      render: render,\n      loader: loader,\n      __loaderData__: __loaderData__\n    };\n    // If we have a loader we don't render until it has been resolved\n    if (!isUndefined(loader) && isUndefined(__loaderData__)) {\n      return null;\n    }\n    if (component) {\n      return match ? (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2 /* VNodeFlags.ComponentUnknown */, component, renderProps) : null;\n    }\n    if (render) {\n      // @ts-ignore\n      return match ? render(renderProps, this.context) : null;\n    }\n    if (typeof children === 'function') {\n      return children(renderProps);\n    }\n    return children;\n  };\n  return Route;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nvar _excluded$3 = [\"key\", \"state\"];\nfunction _objectWithoutPropertiesLoose$3(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\nvar normalizeToLocation = function normalizeToLocation(to) {\n  return isString(to) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(to) : to;\n};\nvar splitLocation = function splitLocation(location) {\n  location.key;\n  var state = location.state,\n    to = _objectWithoutPropertiesLoose$3(location, _excluded$3);\n  return {\n    to: to,\n    state: state\n  };\n};\nvar _excluded$2 = [\"replace\", \"children\", \"className\", \"to\", \"innerRef\"];\nfunction _objectWithoutPropertiesLoose$2(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\nvar isModifiedEvent = function isModifiedEvent(event) {\n  return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);\n};\nfunction handleClick(_ref, event) {\n  var props = _ref.props,\n    context = _ref.context;\n  if (props.onClick) {\n    props.onClick(event);\n  }\n  if (!event.defaultPrevented &&\n  // onClick prevented default\n  event.button === 0 &&\n  // ignore everything but left clicks\n  !props.target &&\n  // let browser handle \"target=_blank\" etc.\n  !isModifiedEvent(event) // ignore clicks with modifier keys\n  ) {\n    event.preventDefault();\n    var history = context.router.history;\n    var _props$replace = props.replace,\n      replace = _props$replace === void 0 ? false : _props$replace,\n      toPropIn = props.to;\n    var _splitLocation = splitLocation(normalizeToLocation(toPropIn)),\n      to = _splitLocation.to,\n      state = _splitLocation.state;\n    if (replace) {\n      history.replace(to, state);\n    } else {\n      history.push(to, state);\n    }\n  }\n}\n/**\n * The public API for rendering a history-aware <a>.\n */\nfunction Link(props, context) {\n  props.replace;\n  var children = props.children,\n    className = props.className,\n    _props$to = props.to,\n    to = _props$to === void 0 ? '' : _props$to,\n    innerRef = props.innerRef,\n    rest = _objectWithoutPropertiesLoose$2(props, _excluded$2);\n  invariant(context.router, 'You should not use <Link> outside a <Router>');\n  var href = context.router.history.createHref(isString(to) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(to) : to);\n  var newProps = combineFrom(rest, null);\n  newProps.href = href;\n  newProps.onClick = (0,inferno__WEBPACK_IMPORTED_MODULE_0__.linkEvent)({\n    context: context,\n    props: props\n  }, handleClick);\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1 /* VNodeFlags.HtmlElement */, 'a', className, children, 0 /* ChildFlags.UnknownChildren */, newProps, null, innerRef);\n}\nvar _excluded$1 = [\"to\", \"exact\", \"strict\", \"onClick\", \"location\", \"activeClassName\", \"className\", \"activeStyle\", \"style\", \"isActive\", \"ariaCurrent\"];\nfunction _objectWithoutPropertiesLoose$1(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\nfunction filter(i) {\n  return i;\n}\n/**\n * A <Link> wrapper that knows if it's \"active\" or not.\n */\nfunction NavLink(_ref) {\n  var to = _ref.to,\n    exact = _ref.exact,\n    strict = _ref.strict,\n    onClick = _ref.onClick,\n    linkLocation = _ref.location,\n    _ref$activeClassName = _ref.activeClassName,\n    activeClassName = _ref$activeClassName === void 0 ? 'active' : _ref$activeClassName,\n    classNameProp = _ref.className,\n    activeStyle = _ref.activeStyle,\n    styleProp = _ref.style,\n    getIsActive = _ref.isActive,\n    _ref$ariaCurrent = _ref.ariaCurrent,\n    ariaCurrent = _ref$ariaCurrent === void 0 ? 'true' : _ref$ariaCurrent,\n    rest = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);\n  function linkComponent(_ref2) {\n    var location = _ref2.location,\n      match = _ref2.match;\n    var isActive = Boolean(getIsActive ? getIsActive(match, location) : match);\n    var className = typeof classNameProp === 'function' ? classNameProp(isActive) : classNameProp;\n    var style = typeof styleProp === 'function' ? styleProp(isActive) : styleProp;\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(8 /* VNodeFlags.ComponentFunction */, Link, combineFrom({\n      'aria-current': isActive && ariaCurrent || null,\n      className: isActive ? [className, activeClassName].filter(filter).join(' ') : className,\n      onClick: onClick,\n      style: isActive ? combineFrom(style, activeStyle) : style,\n      to: to\n    }, rest));\n  }\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Route, {\n    children: linkComponent,\n    exact: exact,\n    location: linkLocation,\n    path: typeof to === 'object' ? to.pathname : to,\n    strict: strict\n  });\n}\nfunction _inheritsLoose$1(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf$1(subClass, superClass);\n}\nfunction _setPrototypeOf$1(o, p) {\n  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf$1(o, p);\n}\n/**\n * The public API for matching a single path and rendering.\n */\nvar Prompt = /*#__PURE__*/function (_Component) {\n  _inheritsLoose$1(Prompt, _Component);\n  function Prompt() {\n    var _this;\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _Component.call.apply(_Component, [this].concat(args)) || this;\n    _this.unblock = void 0;\n    return _this;\n  }\n  var _proto = Prompt.prototype;\n  _proto.enable = function enable(message) {\n    var _this2 = this;\n    if (this.unblock) {\n      this.unblock();\n    }\n    this.unblock = this.context.router.history.block(function (tx) {\n      if (message && window.confirm(message)) {\n        _this2.unblock();\n        tx.retry();\n      }\n    });\n  };\n  _proto.disable = function disable() {\n    if (this.unblock) {\n      this.unblock();\n      this.unblock = null;\n    }\n  };\n  _proto.componentWillMount = function componentWillMount() {\n    invariant(this.context.router, 'You should not use <Prompt> outside a <Router>');\n    if (this.props.when) {\n      this.enable(this.props.message);\n    }\n  };\n  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\n    if (nextProps.when) {\n      if (!this.props.when || this.props.message !== nextProps.message) {\n        this.enable(nextProps.message);\n      }\n    } else {\n      this.disable();\n    }\n  };\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    this.disable();\n  };\n  _proto.render = function render() {\n    return null;\n  };\n  return Prompt;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  _setPrototypeOf(subClass, superClass);\n}\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf(o, p);\n}\nfunction getLocationTarget(to) {\n  if (!isString(to)) {\n    to = combinePath(to);\n  }\n  return (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(to);\n}\nvar Redirect = /*#__PURE__*/function (_Component) {\n  _inheritsLoose(Redirect, _Component);\n  function Redirect() {\n    return _Component.apply(this, arguments) || this;\n  }\n  var _proto = Redirect.prototype;\n  _proto.isStatic = function isStatic() {\n    return this.context.router && this.context.router.staticContext;\n  };\n  _proto.componentWillMount = function componentWillMount() {\n    invariant(this.context.router, 'You should not use <Redirect> outside a <Router>');\n    if (this.isStatic()) {\n      this.perform();\n    }\n  };\n  _proto.componentDidMount = function componentDidMount() {\n    if (!this.isStatic()) {\n      this.perform();\n    }\n  };\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {\n    var prevTo = getLocationTarget(prevProps.to);\n    var nextTo = getLocationTarget(this.props.to);\n    if (prevTo.pathname === nextTo.pathname && prevTo.search === nextTo.search) {\n      // tslint:disable-next-line:no-console\n      console.error(\"You tried to redirect to the same route you're currently on: \\\"\" + nextTo.pathname + nextTo.search + \"\\\"\");\n      return;\n    }\n    this.perform();\n  };\n  _proto.perform = function perform() {\n    var history = this.context.router.history;\n    var _this$props = this.props,\n      _this$props$push = _this$props.push,\n      push = _this$props$push === void 0 ? false : _this$props$push,\n      to = _this$props.to;\n    if (push) {\n      history.push(to);\n    } else {\n      history.replace(to);\n    }\n  };\n  _proto.render = function render() {\n    return null;\n  };\n  return Redirect;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\nvar _excluded = [\"wrappedComponentRef\"];\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\n/**\n * A public higher-order component to access the imperative API\n */\nfunction withRouter(Com) {\n  var C = function C(props) {\n    var wrappedComponentRef = props.wrappedComponentRef,\n      remainingProps = _objectWithoutPropertiesLoose(props, _excluded);\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Route, {\n      render: function render(routeComponentProps) {\n        return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2 /* VNodeFlags.ComponentUnknown */, Com, combineFrom(remainingProps, routeComponentProps), null, wrappedComponentRef);\n      }\n    });\n  };\n  C.displayName = \"withRouter(\" + (Com.displayName || Com.name) + \")\";\n  C.WrappedComponent = Com;\n  return hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2___default()(C, Com);\n}\nfunction useLoaderData(props) {\n  var _props$__loaderData__;\n  return (_props$__loaderData__ = props.__loaderData__) == null ? void 0 : _props$__loaderData__.res;\n}\nfunction useLoaderError(props) {\n  var _props$__loaderData__2;\n  return (_props$__loaderData__2 = props.__loaderData__) == null ? void 0 : _props$__loaderData__2.err;\n}\n\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/inferno-router/dist/index.esm.js?");

/***/ }),

/***/ "./node_modules/inferno/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/inferno/dist/index.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimationQueues\": () => (/* binding */ AnimationQueues),\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"EMPTY_OBJ\": () => (/* binding */ EMPTY_OBJ),\n/* harmony export */   \"Fragment\": () => (/* binding */ Fragment),\n/* harmony export */   \"_CI\": () => (/* binding */ createClassComponentInstance),\n/* harmony export */   \"_HI\": () => (/* binding */ normalizeRoot),\n/* harmony export */   \"_M\": () => (/* binding */ mount),\n/* harmony export */   \"_MCCC\": () => (/* binding */ mountClassComponentCallbacks),\n/* harmony export */   \"_ME\": () => (/* binding */ mountElement),\n/* harmony export */   \"_MFCC\": () => (/* binding */ mountFunctionalComponentCallbacks),\n/* harmony export */   \"_MP\": () => (/* binding */ mountProps),\n/* harmony export */   \"_MR\": () => (/* binding */ mountRef),\n/* harmony export */   \"_RFC\": () => (/* binding */ renderFunctionalComponent),\n/* harmony export */   \"__render\": () => (/* binding */ __render),\n/* harmony export */   \"createComponentVNode\": () => (/* binding */ createComponentVNode),\n/* harmony export */   \"createFragment\": () => (/* binding */ createFragment),\n/* harmony export */   \"createPortal\": () => (/* binding */ createPortal),\n/* harmony export */   \"createRef\": () => (/* binding */ createRef),\n/* harmony export */   \"createRenderer\": () => (/* binding */ createRenderer),\n/* harmony export */   \"createTextVNode\": () => (/* binding */ createTextVNode),\n/* harmony export */   \"createVNode\": () => (/* binding */ createVNode),\n/* harmony export */   \"directClone\": () => (/* binding */ directClone),\n/* harmony export */   \"findDOMFromVNode\": () => (/* binding */ findDOMFromVNode),\n/* harmony export */   \"forwardRef\": () => (/* binding */ forwardRef),\n/* harmony export */   \"getFlagsForElementVnode\": () => (/* binding */ getFlagsForElementVnode),\n/* harmony export */   \"linkEvent\": () => (/* binding */ linkEvent),\n/* harmony export */   \"normalizeProps\": () => (/* binding */ normalizeProps),\n/* harmony export */   \"options\": () => (/* binding */ options),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"rerender\": () => (/* binding */ rerender),\n/* harmony export */   \"version\": () => (/* binding */ version)\n/* harmony export */ });\nvar isArray = Array.isArray;\nfunction isStringOrNumber(o) {\n  var type = typeof o;\n  return type === 'string' || type === 'number';\n}\nfunction isNullOrUndef(o) {\n  return o === void 0 || o === null;\n}\nfunction isInvalid(o) {\n  return o === null || o === false || o === true || o === void 0;\n}\nfunction isFunction(o) {\n  return typeof o === 'function';\n}\nfunction isString(o) {\n  return typeof o === 'string';\n}\nfunction isNumber(o) {\n  return typeof o === 'number';\n}\nfunction isNull(o) {\n  return o === null;\n}\nfunction isUndefined(o) {\n  return o === void 0;\n}\nfunction combineFrom(first, second) {\n  var out = {};\n  if (first) {\n    for (var key in first) {\n      out[key] = first[key];\n    }\n  }\n  if (second) {\n    for (var _key in second) {\n      out[_key] = second[_key];\n    }\n  }\n  return out;\n}\n\n/**\n * Links given data to event as first parameter\n * @param {*} data data to be linked, it will be available in function as first parameter\n * @param {Function} event Function to be called when event occurs\n * @returns {{data: *, event: Function}}\n */\nfunction linkEvent(data, event) {\n  if (isFunction(event)) {\n    return {\n      data: data,\n      event: event\n    };\n  }\n  return null; // Return null when event is invalid, to avoid creating unnecessary event handlers\n}\n// object.event should always be function, otherwise its badly created object.\nfunction isLinkEventObject(o) {\n  return !isNull(o) && typeof o === 'object';\n}\n\n// We need EMPTY_OBJ defined in one place.\n// It's used for comparison, so we can't inline it into shared\nvar EMPTY_OBJ = {};\n// @ts-ignore\nvar Fragment = '$F';\nvar AnimationQueues = function AnimationQueues() {\n  this.componentDidAppear = [];\n  this.componentWillDisappear = [];\n  this.componentWillMove = [];\n};\nfunction normalizeEventName(name) {\n  return name.substring(2).toLowerCase();\n}\nfunction appendChild(parentDOM, dom) {\n  parentDOM.appendChild(dom);\n}\nfunction insertOrAppend(parentDOM, newNode, nextNode) {\n  if (isNull(nextNode)) {\n    appendChild(parentDOM, newNode);\n  } else {\n    parentDOM.insertBefore(newNode, nextNode);\n  }\n}\nfunction documentCreateElement(tag, isSVG) {\n  if (isSVG) {\n    return document.createElementNS('http://www.w3.org/2000/svg', tag);\n  }\n  return document.createElement(tag);\n}\nfunction replaceChild(parentDOM, newDom, lastDom) {\n  parentDOM.replaceChild(newDom, lastDom);\n}\nfunction removeChild(parentDOM, childNode) {\n  parentDOM.removeChild(childNode);\n}\nfunction callAll(arrayFn) {\n  for (var i = 0; i < arrayFn.length; i++) {\n    arrayFn[i]();\n  }\n}\nfunction findChildVNode(vNode, startEdge, flags) {\n  var children = vNode.children;\n  if (flags & 4 /* VNodeFlags.ComponentClass */) {\n    return children.$LI;\n  }\n  if (flags & 8192 /* VNodeFlags.Fragment */) {\n    return vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */ ? children : children[startEdge ? 0 : children.length - 1];\n  }\n  return children;\n}\nfunction findDOMFromVNode(vNode, startEdge) {\n  var flags;\n  while (vNode) {\n    flags = vNode.flags;\n    if (flags & 1521 /* VNodeFlags.DOMRef */) {\n      return vNode.dom;\n    }\n    vNode = findChildVNode(vNode, startEdge, flags);\n  }\n  return null;\n}\nfunction callAllAnimationHooks(animationQueue, callback) {\n  var animationsLeft = animationQueue.length;\n  // Picking from the top because it is faster, invocation order should be irrelevant\n  // since all animations are to be run and we can't predict the order in which they complete.\n  var fn;\n  while ((fn = animationQueue.pop()) !== undefined) {\n    fn(function () {\n      if (--animationsLeft <= 0 && isFunction(callback)) {\n        callback();\n      }\n    });\n  }\n}\nfunction callAllMoveAnimationHooks(animationQueue) {\n  // Start the animations.\n  for (var i = 0; i < animationQueue.length; i++) {\n    animationQueue[i].fn();\n  }\n  // Perform the actual DOM moves when all measurements of initial\n  // position have been performed. The rest of the animations are done\n  // async.\n  for (var _i = 0; _i < animationQueue.length; _i++) {\n    var tmp = animationQueue[_i];\n    insertOrAppend(tmp.parent, tmp.dom, tmp.next);\n  }\n  animationQueue.splice(0, animationQueue.length);\n}\nfunction clearVNodeDOM(vNode, parentDOM, deferredRemoval) {\n  do {\n    var flags = vNode.flags;\n    if (flags & 1521 /* VNodeFlags.DOMRef */) {\n      // On deferred removals the node might disappear because of later operations\n      if (!deferredRemoval || vNode.dom.parentNode === parentDOM) {\n        removeChild(parentDOM, vNode.dom);\n      }\n      return;\n    }\n    var children = vNode.children;\n    if (flags & 4 /* VNodeFlags.ComponentClass */) {\n      vNode = children.$LI;\n    }\n    if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n      vNode = children;\n    }\n    if (flags & 8192 /* VNodeFlags.Fragment */) {\n      if (vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {\n        vNode = children;\n      } else {\n        for (var i = 0, len = children.length; i < len; ++i) {\n          clearVNodeDOM(children[i], parentDOM, false);\n        }\n        return;\n      }\n    }\n  } while (vNode);\n}\nfunction createDeferComponentClassRemovalCallback(vNode, parentDOM) {\n  return function () {\n    // Mark removal as deferred to trigger check that node still exists\n    clearVNodeDOM(vNode, parentDOM, true);\n  };\n}\nfunction removeVNodeDOM(vNode, parentDOM, animations) {\n  if (animations.componentWillDisappear.length > 0) {\n    // Wait until animations are finished before removing actual dom nodes\n    callAllAnimationHooks(animations.componentWillDisappear, createDeferComponentClassRemovalCallback(vNode, parentDOM));\n  } else {\n    clearVNodeDOM(vNode, parentDOM, false);\n  }\n}\nfunction addMoveAnimationHook(animations, parentVNode, refOrInstance, dom, parentDOM, nextNode, flags, props) {\n  animations.componentWillMove.push({\n    dom: dom,\n    fn: function fn() {\n      if (flags & 4 /* VNodeFlags.ComponentClass */) {\n        refOrInstance.componentWillMove(parentVNode, parentDOM, dom);\n      } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n        refOrInstance.onComponentWillMove(parentVNode, parentDOM, dom, props);\n      }\n    },\n    next: nextNode,\n    parent: parentDOM\n  });\n}\nfunction moveVNodeDOM(parentVNode, vNode, parentDOM, nextNode, animations) {\n  var refOrInstance;\n  var instanceProps;\n  var instanceFlags = vNode.flags;\n  do {\n    var flags = vNode.flags;\n    if (flags & 1521 /* VNodeFlags.DOMRef */) {\n      if (!isNullOrUndef(refOrInstance) && (isFunction(refOrInstance.componentWillMove) || isFunction(refOrInstance.onComponentWillMove))) {\n        addMoveAnimationHook(animations, parentVNode, refOrInstance, vNode.dom, parentDOM, nextNode, instanceFlags, instanceProps);\n      } else {\n        // TODO: Should we delay this too to support mixing animated moves with regular?\n        insertOrAppend(parentDOM, vNode.dom, nextNode);\n      }\n      return;\n    }\n    var children = vNode.children;\n    if (flags & 4 /* VNodeFlags.ComponentClass */) {\n      refOrInstance = vNode.children;\n      // TODO: We should probably deprecate this in V9 since it is inconsitent with other class component hooks\n      instanceProps = vNode.props;\n      vNode = children.$LI;\n    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n      refOrInstance = vNode.ref;\n      instanceProps = vNode.props;\n      vNode = children;\n    } else if (flags & 8192 /* VNodeFlags.Fragment */) {\n      if (vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {\n        vNode = children;\n      } else {\n        for (var i = 0, len = children.length; i < len; ++i) {\n          moveVNodeDOM(parentVNode, children[i], parentDOM, nextNode, animations);\n        }\n        return;\n      }\n    }\n  } while (vNode);\n}\nfunction createDerivedState(instance, nextProps, state) {\n  if (instance.constructor.getDerivedStateFromProps) {\n    return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));\n  }\n  return state;\n}\nvar renderCheck = {\n  v: false\n};\nvar options = {\n  componentComparator: null,\n  createVNode: null,\n  renderComplete: null\n};\nfunction setTextContent(dom, children) {\n  dom.textContent = children;\n}\n// Calling this function assumes, nextValue is linkEvent\nfunction isLastValueSameLinkEvent(lastValue, nextValue) {\n  return isLinkEventObject(lastValue) && lastValue.event === nextValue.event && lastValue.data === nextValue.data;\n}\nfunction mergeUnsetProperties(to, from) {\n  for (var propName in from) {\n    if (isUndefined(to[propName])) {\n      to[propName] = from[propName];\n    }\n  }\n  return to;\n}\nfunction safeCall1(method, arg1) {\n  return !!isFunction(method) && (method(arg1), true);\n}\nvar keyPrefix = '$';\nfunction V(childFlags, children, className, flags, key, props, ref, type) {\n  this.childFlags = childFlags;\n  this.children = children;\n  this.className = className;\n  this.dom = null;\n  this.flags = flags;\n  this.key = key === void 0 ? null : key;\n  this.props = props === void 0 ? null : props;\n  this.ref = ref === void 0 ? null : ref;\n  this.type = type;\n}\nfunction createVNode(flags, type, className, children, childFlags, props, key, ref) {\n  var childFlag = childFlags === void 0 ? 1 /* ChildFlags.HasInvalidChildren */ : childFlags;\n  var vNode = new V(childFlag, children, className, flags, key, props, ref, type);\n  if (options.createVNode) {\n    options.createVNode(vNode);\n  }\n  if (childFlag === 0 /* ChildFlags.UnknownChildren */) {\n    normalizeChildren(vNode, vNode.children);\n  }\n  return vNode;\n}\nfunction mergeDefaultHooks(flags, type, ref) {\n  if (flags & 4 /* VNodeFlags.ComponentClass */) {\n    return ref;\n  }\n  var defaultHooks = (flags & 32768 /* VNodeFlags.ForwardRef */ ? type.render : type).defaultHooks;\n  if (isNullOrUndef(defaultHooks)) {\n    return ref;\n  }\n  if (isNullOrUndef(ref)) {\n    return defaultHooks;\n  }\n  return mergeUnsetProperties(ref, defaultHooks);\n}\nfunction mergeDefaultProps(flags, type, props) {\n  // set default props\n  var defaultProps = (flags & 32768 /* VNodeFlags.ForwardRef */ ? type.render : type).defaultProps;\n  if (isNullOrUndef(defaultProps)) {\n    return props;\n  }\n  if (isNullOrUndef(props)) {\n    return combineFrom(defaultProps, null);\n  }\n  return mergeUnsetProperties(props, defaultProps);\n}\nfunction resolveComponentFlags(flags, type) {\n  if (flags & 12 /* VNodeFlags.ComponentKnown */) {\n    return flags;\n  }\n  if (type.prototype && type.prototype.render) {\n    return 4 /* VNodeFlags.ComponentClass */;\n  }\n\n  if (type.render) {\n    return 32776 /* VNodeFlags.ForwardRefComponent */;\n  }\n\n  return 8 /* VNodeFlags.ComponentFunction */;\n}\n\nfunction createComponentVNode(flags, type, props, key, ref) {\n  flags = resolveComponentFlags(flags, type);\n  var vNode = new V(1 /* ChildFlags.HasInvalidChildren */, null, null, flags, key, mergeDefaultProps(flags, type, props), mergeDefaultHooks(flags, type, ref), type);\n  if (options.createVNode) {\n    options.createVNode(vNode);\n  }\n  return vNode;\n}\nfunction createTextVNode(text, key) {\n  return new V(1 /* ChildFlags.HasInvalidChildren */, isNullOrUndef(text) || text === true || text === false ? '' : text, null, 16 /* VNodeFlags.Text */, key, null, null, null);\n}\nfunction createFragment(children, childFlags, key) {\n  var fragment = createVNode(8192 /* VNodeFlags.Fragment */, 8192 /* VNodeFlags.Fragment */, null, children, childFlags, null, key, null);\n  switch (fragment.childFlags) {\n    case 1 /* ChildFlags.HasInvalidChildren */:\n      fragment.children = createVoidVNode();\n      fragment.childFlags = 2 /* ChildFlags.HasVNodeChildren */;\n      break;\n    case 16 /* ChildFlags.HasTextChildren */:\n      fragment.children = [createTextVNode(children)];\n      fragment.childFlags = 4 /* ChildFlags.HasNonKeyedChildren */;\n      break;\n  }\n  return fragment;\n}\nfunction normalizeProps(vNode) {\n  var props = vNode.props;\n  if (props) {\n    var flags = vNode.flags;\n    if (flags & 481 /* VNodeFlags.Element */) {\n      if (props.children !== void 0 && isNullOrUndef(vNode.children)) {\n        normalizeChildren(vNode, props.children);\n      }\n      if (props.className !== void 0) {\n        if (isNullOrUndef(vNode.className)) {\n          vNode.className = props.className || null;\n        }\n        props.className = undefined;\n      }\n    }\n    if (props.key !== void 0) {\n      vNode.key = props.key;\n      props.key = undefined;\n    }\n    if (props.ref !== void 0) {\n      if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n        vNode.ref = combineFrom(vNode.ref, props.ref);\n      } else {\n        vNode.ref = props.ref;\n      }\n      props.ref = undefined;\n    }\n  }\n  return vNode;\n}\n/*\n * Fragment is different from normal vNode,\n * because when it needs to be cloned we need to clone its children too\n * But not normalize, because otherwise those possibly get KEY and re-mount\n */\nfunction cloneFragment(vNodeToClone) {\n  var oldChildren = vNodeToClone.children;\n  var childFlags = vNodeToClone.childFlags;\n  return createFragment(childFlags === 2 /* ChildFlags.HasVNodeChildren */ ? directClone(oldChildren) : oldChildren.map(directClone), childFlags, vNodeToClone.key);\n}\nfunction directClone(vNodeToClone) {\n  var flags = vNodeToClone.flags & -16385 /* VNodeFlags.ClearInUse */;\n  var props = vNodeToClone.props;\n  if (flags & 14 /* VNodeFlags.Component */) {\n    if (!isNull(props)) {\n      var propsToClone = props;\n      props = {};\n      for (var key in propsToClone) {\n        props[key] = propsToClone[key];\n      }\n    }\n  }\n  if ((flags & 8192 /* VNodeFlags.Fragment */) === 0) {\n    return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);\n  }\n  return cloneFragment(vNodeToClone);\n}\nfunction createVoidVNode() {\n  return createTextVNode('', null);\n}\nfunction createPortal(children, container) {\n  var normalizedRoot = normalizeRoot(children);\n  return createVNode(1024 /* VNodeFlags.Portal */, 1024 /* VNodeFlags.Portal */, null, normalizedRoot, 0 /* ChildFlags.UnknownChildren */, null, normalizedRoot.key, container);\n}\nfunction _normalizeVNodes(nodes, result, index, currentKey) {\n  for (var len = nodes.length; index < len; index++) {\n    var n = nodes[index];\n    if (!isInvalid(n)) {\n      var newKey = currentKey + keyPrefix + index;\n      if (isArray(n)) {\n        _normalizeVNodes(n, result, 0, newKey);\n      } else {\n        if (isStringOrNumber(n)) {\n          n = createTextVNode(n, newKey);\n        } else {\n          var oldKey = n.key;\n          var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;\n          if (n.flags & 81920 /* VNodeFlags.InUseOrNormalized */ || isPrefixedKey) {\n            n = directClone(n);\n          }\n          n.flags |= 65536 /* VNodeFlags.Normalized */;\n          if (!isPrefixedKey) {\n            if (isNull(oldKey)) {\n              n.key = newKey;\n            } else {\n              n.key = currentKey + oldKey;\n            }\n          } else if (oldKey.substring(0, currentKey.length) !== currentKey) {\n            n.key = currentKey + oldKey;\n          }\n        }\n        result.push(n);\n      }\n    }\n  }\n}\nfunction getFlagsForElementVnode(type) {\n  switch (type) {\n    case 'svg':\n      return 32 /* VNodeFlags.SvgElement */;\n    case 'input':\n      return 64 /* VNodeFlags.InputElement */;\n    case 'select':\n      return 256 /* VNodeFlags.SelectElement */;\n    case 'textarea':\n      return 128 /* VNodeFlags.TextareaElement */;\n    // @ts-ignore\n    case Fragment:\n      return 8192 /* VNodeFlags.Fragment */;\n    default:\n      return 1 /* VNodeFlags.HtmlElement */;\n  }\n}\n\nfunction normalizeChildren(vNode, children) {\n  var newChildren;\n  var newChildFlags = 1 /* ChildFlags.HasInvalidChildren */;\n  // Don't change children to match strict equal (===) true in patching\n  if (isInvalid(children)) {\n    newChildren = children;\n  } else if (isStringOrNumber(children)) {\n    newChildFlags = 16 /* ChildFlags.HasTextChildren */;\n    newChildren = children;\n  } else if (isArray(children)) {\n    var len = children.length;\n    for (var i = 0; i < len; ++i) {\n      var n = children[i];\n      if (isInvalid(n) || isArray(n)) {\n        newChildren = newChildren || children.slice(0, i);\n        _normalizeVNodes(children, newChildren, i, '');\n        break;\n      } else if (isStringOrNumber(n)) {\n        newChildren = newChildren || children.slice(0, i);\n        newChildren.push(createTextVNode(n, keyPrefix + i));\n      } else {\n        var key = n.key;\n        var needsCloning = (n.flags & 81920 /* VNodeFlags.InUseOrNormalized */) > 0;\n        var isNullKey = isNull(key);\n        var isPrefixed = isString(key) && key[0] === keyPrefix;\n        if (needsCloning || isNullKey || isPrefixed) {\n          newChildren = newChildren || children.slice(0, i);\n          if (needsCloning || isPrefixed) {\n            n = directClone(n);\n          }\n          if (isNullKey || isPrefixed) {\n            n.key = keyPrefix + i;\n          }\n          newChildren.push(n);\n        } else if (newChildren) {\n          newChildren.push(n);\n        }\n        n.flags |= 65536 /* VNodeFlags.Normalized */;\n      }\n    }\n\n    newChildren = newChildren || children;\n    if (newChildren.length === 0) {\n      newChildFlags = 1 /* ChildFlags.HasInvalidChildren */;\n    } else {\n      newChildFlags = 8 /* ChildFlags.HasKeyedChildren */;\n    }\n  } else {\n    newChildren = children;\n    newChildren.flags |= 65536 /* VNodeFlags.Normalized */;\n    if (children.flags & 81920 /* VNodeFlags.InUseOrNormalized */) {\n      newChildren = directClone(children);\n    }\n    newChildFlags = 2 /* ChildFlags.HasVNodeChildren */;\n  }\n\n  vNode.children = newChildren;\n  vNode.childFlags = newChildFlags;\n  return vNode;\n}\nfunction normalizeRoot(input) {\n  if (isInvalid(input) || isStringOrNumber(input)) {\n    return createTextVNode(input, null);\n  }\n  if (isArray(input)) {\n    return createFragment(input, 0 /* ChildFlags.UnknownChildren */, null);\n  }\n  return input.flags & 16384 /* VNodeFlags.InUse */ ? directClone(input) : input;\n}\nvar xlinkNS = 'http://www.w3.org/1999/xlink';\nvar xmlNS = 'http://www.w3.org/XML/1998/namespace';\nvar namespaces = {\n  'xlink:actuate': xlinkNS,\n  'xlink:arcrole': xlinkNS,\n  'xlink:href': xlinkNS,\n  'xlink:role': xlinkNS,\n  'xlink:show': xlinkNS,\n  'xlink:title': xlinkNS,\n  'xlink:type': xlinkNS,\n  'xml:base': xmlNS,\n  'xml:lang': xmlNS,\n  'xml:space': xmlNS\n};\nfunction getDelegatedEventObject(v) {\n  return {\n    onClick: v,\n    onDblClick: v,\n    onFocusIn: v,\n    onFocusOut: v,\n    onKeyDown: v,\n    onKeyPress: v,\n    onKeyUp: v,\n    onMouseDown: v,\n    onMouseMove: v,\n    onMouseUp: v,\n    onTouchEnd: v,\n    onTouchMove: v,\n    onTouchStart: v\n  };\n}\nvar attachedEventCounts = getDelegatedEventObject(0);\nvar attachedEvents = getDelegatedEventObject(null);\nvar syntheticEvents = getDelegatedEventObject(true);\nfunction updateOrAddSyntheticEvent(name, dom) {\n  var eventsObject = dom.$EV;\n  if (!eventsObject) {\n    eventsObject = dom.$EV = getDelegatedEventObject(null);\n  }\n  if (!eventsObject[name]) {\n    if (++attachedEventCounts[name] === 1) {\n      attachedEvents[name] = attachEventToDocument(name);\n    }\n  }\n  return eventsObject;\n}\nfunction unmountSyntheticEvent(name, dom) {\n  var eventsObject = dom.$EV;\n  if (eventsObject && eventsObject[name]) {\n    if (--attachedEventCounts[name] === 0) {\n      document.removeEventListener(normalizeEventName(name), attachedEvents[name]);\n      attachedEvents[name] = null;\n    }\n    eventsObject[name] = null;\n  }\n}\nfunction handleSyntheticEvent(name, lastEvent, nextEvent, dom) {\n  if (isFunction(nextEvent)) {\n    updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;\n  } else if (isLinkEventObject(nextEvent)) {\n    if (isLastValueSameLinkEvent(lastEvent, nextEvent)) {\n      return;\n    }\n    updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;\n  } else {\n    unmountSyntheticEvent(name, dom);\n  }\n}\n// When browsers fully support event.composedPath we could loop it through instead of using parentNode property\nfunction getTargetNode(event) {\n  return isFunction(event.composedPath) ? event.composedPath()[0] : event.target;\n}\nfunction dispatchEvents(event, isClick, name, eventData) {\n  var dom = getTargetNode(event);\n  do {\n    // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,\n    // because the event listener is on document.body\n    // Don't process clicks on disabled elements\n    if (isClick && dom.disabled) {\n      return;\n    }\n    var eventsObject = dom.$EV;\n    if (eventsObject) {\n      var currentEvent = eventsObject[name];\n      if (currentEvent) {\n        // linkEvent object\n        eventData.dom = dom;\n        currentEvent.event ? currentEvent.event(currentEvent.data, event) : currentEvent(event);\n        if (event.cancelBubble) {\n          return;\n        }\n      }\n    }\n    dom = dom.parentNode;\n  } while (!isNull(dom));\n}\nfunction stopPropagation() {\n  this.cancelBubble = true;\n  if (!this.immediatePropagationStopped) {\n    this.stopImmediatePropagation();\n  }\n}\nfunction isDefaultPrevented() {\n  return this.defaultPrevented;\n}\nfunction isPropagationStopped() {\n  return this.cancelBubble;\n}\nfunction extendEventProperties(event) {\n  // Event data needs to be object to save reference to currentTarget getter\n  var eventData = {\n    dom: document\n  };\n  event.isDefaultPrevented = isDefaultPrevented;\n  event.isPropagationStopped = isPropagationStopped;\n  event.stopPropagation = stopPropagation;\n  Object.defineProperty(event, 'currentTarget', {\n    configurable: true,\n    get: function get() {\n      return eventData.dom;\n    }\n  });\n  return eventData;\n}\nfunction rootClickEvent(name) {\n  return function (event) {\n    if (event.button !== 0) {\n      // Firefox incorrectly triggers click event for mid/right mouse buttons.\n      // This bug has been active for 17 years.\n      // https://bugzilla.mozilla.org/show_bug.cgi?id=184051\n      event.stopPropagation();\n      return;\n    }\n    dispatchEvents(event, true, name, extendEventProperties(event));\n  };\n}\nfunction rootEvent(name) {\n  return function (event) {\n    dispatchEvents(event, false, name, extendEventProperties(event));\n  };\n}\nfunction attachEventToDocument(name) {\n  var attachedEvent = name === 'onClick' || name === 'onDblClick' ? rootClickEvent(name) : rootEvent(name);\n  document.addEventListener(normalizeEventName(name), attachedEvent);\n  return attachedEvent;\n}\nfunction isSameInnerHTML(dom, innerHTML) {\n  var tempdom = document.createElement('i');\n  tempdom.innerHTML = innerHTML;\n  return tempdom.innerHTML === dom.innerHTML;\n}\nfunction triggerEventListener(props, methodName, e) {\n  if (props[methodName]) {\n    var listener = props[methodName];\n    if (listener.event) {\n      listener.event(listener.data, e);\n    } else {\n      listener(e);\n    }\n  } else {\n    var nativeListenerName = methodName.toLowerCase();\n    if (props[nativeListenerName]) {\n      props[nativeListenerName](e);\n    }\n  }\n}\nfunction createWrappedFunction(methodName, applyValue) {\n  var fnMethod = function fnMethod(e) {\n    var vNode = this.$V;\n    // If vNode is gone by the time event fires, no-op\n    if (!vNode) {\n      return;\n    }\n    var props = vNode.props || EMPTY_OBJ;\n    var dom = vNode.dom;\n    if (isString(methodName)) {\n      triggerEventListener(props, methodName, e);\n    } else {\n      for (var i = 0; i < methodName.length; ++i) {\n        triggerEventListener(props, methodName[i], e);\n      }\n    }\n    if (isFunction(applyValue)) {\n      var newVNode = this.$V;\n      var newProps = newVNode.props || EMPTY_OBJ;\n      applyValue(newProps, dom, false, newVNode);\n    }\n  };\n  Object.defineProperty(fnMethod, 'wrapped', {\n    configurable: false,\n    enumerable: false,\n    value: true,\n    writable: false\n  });\n  return fnMethod;\n}\nfunction attachEvent(dom, eventName, handler) {\n  var previousKey = \"$\" + eventName;\n  var previousArgs = dom[previousKey];\n  if (previousArgs) {\n    if (previousArgs[1].wrapped) {\n      return;\n    }\n    dom.removeEventListener(previousArgs[0], previousArgs[1]);\n    dom[previousKey] = null;\n  }\n  if (isFunction(handler)) {\n    dom.addEventListener(eventName, handler);\n    dom[previousKey] = [eventName, handler];\n  }\n}\nfunction isCheckedType(type) {\n  return type === 'checkbox' || type === 'radio';\n}\nvar onTextInputChange = createWrappedFunction('onInput', applyValueInput);\nvar wrappedOnChange$1 = createWrappedFunction(['onClick', 'onChange'], applyValueInput);\n/* tslint:disable-next-line:no-empty */\nfunction emptywrapper(event) {\n  event.stopPropagation();\n}\nemptywrapper.wrapped = true;\nfunction inputEvents(dom, nextPropsOrEmpty) {\n  if (isCheckedType(nextPropsOrEmpty.type)) {\n    attachEvent(dom, 'change', wrappedOnChange$1);\n    attachEvent(dom, 'click', emptywrapper);\n  } else {\n    attachEvent(dom, 'input', onTextInputChange);\n  }\n}\nfunction applyValueInput(nextPropsOrEmpty, dom) {\n  var type = nextPropsOrEmpty.type;\n  var value = nextPropsOrEmpty.value;\n  var checked = nextPropsOrEmpty.checked;\n  var multiple = nextPropsOrEmpty.multiple;\n  var defaultValue = nextPropsOrEmpty.defaultValue;\n  var hasValue = !isNullOrUndef(value);\n  if (type && type !== dom.type) {\n    dom.setAttribute('type', type);\n  }\n  if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {\n    dom.multiple = multiple;\n  }\n  if (!isNullOrUndef(defaultValue) && !hasValue) {\n    dom.defaultValue = defaultValue + '';\n  }\n  if (isCheckedType(type)) {\n    if (hasValue) {\n      dom.value = value;\n    }\n    if (!isNullOrUndef(checked)) {\n      dom.checked = checked;\n    }\n  } else {\n    if (hasValue && dom.value !== value) {\n      dom.defaultValue = value;\n      dom.value = value;\n    } else if (!isNullOrUndef(checked)) {\n      dom.checked = checked;\n    }\n  }\n}\nfunction updateChildOptions(vNode, value) {\n  if (vNode.type === 'option') {\n    updateChildOption(vNode, value);\n  } else {\n    var children = vNode.children;\n    var flags = vNode.flags;\n    if (flags & 4 /* VNodeFlags.ComponentClass */) {\n      updateChildOptions(children.$LI, value);\n    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n      updateChildOptions(children, value);\n    } else if (vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {\n      updateChildOptions(children, value);\n    } else if (vNode.childFlags & 12 /* ChildFlags.MultipleChildren */) {\n      for (var i = 0, len = children.length; i < len; ++i) {\n        updateChildOptions(children[i], value);\n      }\n    }\n  }\n}\nfunction updateChildOption(vNode, value) {\n  var props = vNode.props || EMPTY_OBJ;\n  var dom = vNode.dom;\n  // we do this as multiple may have changed\n  dom.value = props.value;\n  if (props.value === value || isArray(value) && value.indexOf(props.value) !== -1) {\n    dom.selected = true;\n  } else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {\n    dom.selected = props.selected || false;\n  }\n}\nvar onSelectChange = createWrappedFunction('onChange', applyValueSelect);\nfunction selectEvents(dom) {\n  attachEvent(dom, 'change', onSelectChange);\n}\nfunction applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {\n  var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);\n  if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {\n    dom.multiple = multiplePropInBoolean;\n  }\n  var index = nextPropsOrEmpty.selectedIndex;\n  if (index === -1) {\n    dom.selectedIndex = -1;\n  }\n  var childFlags = vNode.childFlags;\n  if (childFlags !== 1 /* ChildFlags.HasInvalidChildren */) {\n    var value = nextPropsOrEmpty.value;\n    if (isNumber(index) && index > -1 && dom.options[index]) {\n      value = dom.options[index].value;\n    }\n    if (mounting && isNullOrUndef(value)) {\n      value = nextPropsOrEmpty.defaultValue;\n    }\n    updateChildOptions(vNode, value);\n  }\n}\nvar onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);\nvar wrappedOnChange = createWrappedFunction('onChange');\nfunction textAreaEvents(dom, nextPropsOrEmpty) {\n  attachEvent(dom, 'input', onTextareaInputChange);\n  if (nextPropsOrEmpty.onChange) {\n    attachEvent(dom, 'change', wrappedOnChange);\n  }\n}\nfunction applyValueTextArea(nextPropsOrEmpty, dom, mounting) {\n  var value = nextPropsOrEmpty.value;\n  var domValue = dom.value;\n  if (isNullOrUndef(value)) {\n    if (mounting) {\n      var defaultValue = nextPropsOrEmpty.defaultValue;\n      if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {\n        dom.defaultValue = defaultValue;\n        dom.value = defaultValue;\n      }\n    }\n  } else if (domValue !== value) {\n    /* There is value so keep it controlled */\n    dom.defaultValue = value;\n    dom.value = value;\n  }\n}\nfunction processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {\n  if (flags & 64 /* VNodeFlags.InputElement */) {\n    applyValueInput(nextPropsOrEmpty, dom);\n  } else if (flags & 256 /* VNodeFlags.SelectElement */) {\n    applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);\n  } else if (flags & 128 /* VNodeFlags.TextareaElement */) {\n    applyValueTextArea(nextPropsOrEmpty, dom, mounting);\n  }\n  if (isControlled) {\n    dom.$V = vNode;\n  }\n}\nfunction addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {\n  if (flags & 64 /* VNodeFlags.InputElement */) {\n    inputEvents(dom, nextPropsOrEmpty);\n  } else if (flags & 256 /* VNodeFlags.SelectElement */) {\n    selectEvents(dom);\n  } else if (flags & 128 /* VNodeFlags.TextareaElement */) {\n    textAreaEvents(dom, nextPropsOrEmpty);\n  }\n}\nfunction isControlledFormElement(nextPropsOrEmpty) {\n  return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);\n}\nfunction createRef() {\n  return {\n    current: null\n  };\n}\n// TODO: Make this return value typed\nfunction forwardRef(render) {\n  var ref = {\n    render: render\n  };\n  // @ts-ignore\n  return ref;\n}\nfunction unmountRef(ref) {\n  if (ref) {\n    if (!safeCall1(ref, null) && ref.current) {\n      ref.current = null;\n    }\n  }\n}\nfunction mountRef(ref, value, lifecycle) {\n  if (ref && (isFunction(ref) || ref.current !== void 0)) {\n    lifecycle.push(function () {\n      if (!safeCall1(ref, value) && ref.current !== void 0) {\n        ref.current = value;\n      }\n    });\n  }\n}\nfunction remove(vNode, parentDOM, animations) {\n  unmount(vNode, animations);\n  removeVNodeDOM(vNode, parentDOM, animations);\n}\nfunction unmount(vNode, animations) {\n  var flags = vNode.flags;\n  var children = vNode.children;\n  var ref;\n  if (flags & 481 /* VNodeFlags.Element */) {\n    ref = vNode.ref;\n    var props = vNode.props;\n    unmountRef(ref);\n    var childFlags = vNode.childFlags;\n    if (!isNull(props)) {\n      var keys = Object.keys(props);\n      for (var i = 0, len = keys.length; i < len; i++) {\n        var key = keys[i];\n        if (syntheticEvents[key]) {\n          unmountSyntheticEvent(key, vNode.dom);\n        }\n      }\n    }\n    if (childFlags & 12 /* ChildFlags.MultipleChildren */) {\n      unmountAllChildren(children, animations);\n    } else if (childFlags === 2 /* ChildFlags.HasVNodeChildren */) {\n      unmount(children, animations);\n    }\n  } else if (children) {\n    if (flags & 4 /* VNodeFlags.ComponentClass */) {\n      if (isFunction(children.componentWillUnmount)) {\n        // TODO: Possible entrypoint\n        children.componentWillUnmount();\n      }\n      // If we have a componentWillDisappear on this component, block children from animating\n      var childAnimations = animations;\n      if (isFunction(children.componentWillDisappear)) {\n        childAnimations = new AnimationQueues();\n        addDisappearAnimationHook(animations, children, children.$LI.dom, flags, undefined);\n      }\n      unmountRef(vNode.ref);\n      children.$UN = true;\n      unmount(children.$LI, childAnimations);\n    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n      // If we have a onComponentWillDisappear on this component, block children from animating\n      var _childAnimations = animations;\n      ref = vNode.ref;\n      if (!isNullOrUndef(ref)) {\n        var domEl = null;\n        if (isFunction(ref.onComponentWillUnmount)) {\n          domEl = findDOMFromVNode(vNode, true);\n          ref.onComponentWillUnmount(domEl, vNode.props || EMPTY_OBJ);\n        }\n        if (isFunction(ref.onComponentWillDisappear)) {\n          _childAnimations = new AnimationQueues();\n          domEl = domEl || findDOMFromVNode(vNode, true);\n          addDisappearAnimationHook(animations, ref, domEl, flags, vNode.props);\n        }\n      }\n      unmount(children, _childAnimations);\n    } else if (flags & 1024 /* VNodeFlags.Portal */) {\n      remove(children, vNode.ref, animations);\n    } else if (flags & 8192 /* VNodeFlags.Fragment */) {\n      if (vNode.childFlags & 12 /* ChildFlags.MultipleChildren */) {\n        unmountAllChildren(children, animations);\n      }\n    }\n  }\n}\nfunction unmountAllChildren(children, animations) {\n  for (var i = 0, len = children.length; i < len; ++i) {\n    unmount(children[i], animations);\n  }\n}\nfunction createClearAllCallback(children, parentDOM) {\n  return function () {\n    // We need to remove children one by one because elements can be added during animation\n    if (parentDOM) {\n      for (var i = 0; i < children.length; i++) {\n        var vNode = children[i];\n        clearVNodeDOM(vNode, parentDOM, false);\n      }\n    }\n  };\n}\nfunction clearDOM(parentDOM, children, animations) {\n  if (animations.componentWillDisappear.length > 0) {\n    // Wait until animations are finished before removing actual dom nodes\n    // Be aware that the element could be removed by a later operation\n    callAllAnimationHooks(animations.componentWillDisappear, createClearAllCallback(children, parentDOM));\n  } else {\n    // Optimization for clearing dom\n    parentDOM.textContent = '';\n  }\n}\nfunction removeAllChildren(dom, vNode, children, animations) {\n  unmountAllChildren(children, animations);\n  if (vNode.flags & 8192 /* VNodeFlags.Fragment */) {\n    removeVNodeDOM(vNode, dom, animations);\n  } else {\n    clearDOM(dom, children, animations);\n  }\n}\n// Only add animations to queue in browser\nfunction addDisappearAnimationHook(animations, instanceOrRef, dom, flags, props) {\n  animations.componentWillDisappear.push(function (callback) {\n    if (flags & 4 /* VNodeFlags.ComponentClass */) {\n      instanceOrRef.componentWillDisappear(dom, callback);\n    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n      instanceOrRef.onComponentWillDisappear(dom, props, callback);\n    }\n  });\n}\nfunction wrapLinkEvent(nextValue) {\n  // This variable makes sure there is no \"this\" context in callback\n  var ev = nextValue.event;\n  return function (e) {\n    ev(nextValue.data, e);\n  };\n}\nfunction patchEvent(name, lastValue, nextValue, dom) {\n  if (isLinkEventObject(nextValue)) {\n    if (isLastValueSameLinkEvent(lastValue, nextValue)) {\n      return;\n    }\n    nextValue = wrapLinkEvent(nextValue);\n  }\n  attachEvent(dom, normalizeEventName(name), nextValue);\n}\n// We are assuming here that we come from patchProp routine\n// -nextAttrValue cannot be null or undefined\nfunction patchStyle(lastAttrValue, nextAttrValue, dom) {\n  if (isNullOrUndef(nextAttrValue)) {\n    dom.removeAttribute('style');\n    return;\n  }\n  var domStyle = dom.style;\n  var style;\n  var value;\n  if (isString(nextAttrValue)) {\n    domStyle.cssText = nextAttrValue;\n    return;\n  }\n  if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {\n    for (style in nextAttrValue) {\n      // do not add a hasOwnProperty check here, it affects performance\n      value = nextAttrValue[style];\n      if (value !== lastAttrValue[style]) {\n        domStyle.setProperty(style, value);\n      }\n    }\n    for (style in lastAttrValue) {\n      if (isNullOrUndef(nextAttrValue[style])) {\n        domStyle.removeProperty(style);\n      }\n    }\n  } else {\n    for (style in nextAttrValue) {\n      value = nextAttrValue[style];\n      domStyle.setProperty(style, value);\n    }\n  }\n}\nfunction patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom, animations) {\n  var lastHtml = lastValue && lastValue.__html || '';\n  var nextHtml = nextValue && nextValue.__html || '';\n  if (lastHtml !== nextHtml) {\n    if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {\n      if (!isNull(lastVNode)) {\n        if (lastVNode.childFlags & 12 /* ChildFlags.MultipleChildren */) {\n          unmountAllChildren(lastVNode.children, animations);\n        } else if (lastVNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {\n          unmount(lastVNode.children, animations);\n        }\n        lastVNode.children = null;\n        lastVNode.childFlags = 1 /* ChildFlags.HasInvalidChildren */;\n      }\n\n      dom.innerHTML = nextHtml;\n    }\n  }\n}\nfunction patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode, animations) {\n  switch (prop) {\n    case 'children':\n    case 'childrenType':\n    case 'className':\n    case 'defaultValue':\n    case 'key':\n    case 'multiple':\n    case 'ref':\n    case 'selectedIndex':\n      break;\n    case 'autoFocus':\n      dom.autofocus = !!nextValue;\n      break;\n    case 'allowfullscreen':\n    case 'autoplay':\n    case 'capture':\n    case 'checked':\n    case 'controls':\n    case 'default':\n    case 'disabled':\n    case 'hidden':\n    case 'indeterminate':\n    case 'loop':\n    case 'muted':\n    case 'novalidate':\n    case 'open':\n    case 'readOnly':\n    case 'required':\n    case 'reversed':\n    case 'scoped':\n    case 'seamless':\n    case 'selected':\n      dom[prop] = !!nextValue;\n      break;\n    case 'defaultChecked':\n    case 'value':\n    case 'volume':\n      if (hasControlledValue && prop === 'value') {\n        break;\n      }\n      var value = isNullOrUndef(nextValue) ? '' : nextValue;\n      if (dom[prop] !== value) {\n        dom[prop] = value;\n      }\n      break;\n    case 'style':\n      patchStyle(lastValue, nextValue, dom);\n      break;\n    case 'dangerouslySetInnerHTML':\n      patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom, animations);\n      break;\n    default:\n      if (syntheticEvents[prop]) {\n        handleSyntheticEvent(prop, lastValue, nextValue, dom);\n      } else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {\n        patchEvent(prop, lastValue, nextValue, dom);\n      } else if (isNullOrUndef(nextValue)) {\n        dom.removeAttribute(prop);\n      } else if (isSVG && namespaces[prop]) {\n        // We optimize for isSVG being false\n        // If we end up in this path we can read property again\n        dom.setAttributeNS(namespaces[prop], prop, nextValue);\n      } else {\n        dom.setAttribute(prop, nextValue);\n      }\n      break;\n  }\n}\nfunction mountProps(vNode, flags, props, dom, isSVG, animations) {\n  var hasControlledValue = false;\n  var isFormElement = (flags & 448 /* VNodeFlags.FormElement */) > 0;\n  if (isFormElement) {\n    hasControlledValue = isControlledFormElement(props);\n    if (hasControlledValue) {\n      addFormElementEventHandlers(flags, dom, props);\n    }\n  }\n  for (var prop in props) {\n    // do not add a hasOwnProperty check here, it affects performance\n    patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null, animations);\n  }\n  if (isFormElement) {\n    processElement(flags, vNode, dom, props, true, hasControlledValue);\n  }\n}\nfunction renderNewInput(instance, props, context) {\n  var nextInput = normalizeRoot(instance.render(props, instance.state, context));\n  var childContext = context;\n  if (isFunction(instance.getChildContext)) {\n    childContext = combineFrom(context, instance.getChildContext());\n  }\n  instance.$CX = childContext;\n  return nextInput;\n}\nfunction createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {\n  var instance = new Component(props, context);\n  var usesNewAPI = instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate);\n  instance.$SVG = isSVG;\n  instance.$L = lifecycle;\n  vNode.children = instance;\n  instance.$BS = false;\n  instance.context = context;\n  if (instance.props === EMPTY_OBJ) {\n    instance.props = props;\n  }\n  if (!usesNewAPI) {\n    if (isFunction(instance.componentWillMount)) {\n      instance.$BR = true;\n      instance.componentWillMount();\n      var pending = instance.$PS;\n      if (!isNull(pending)) {\n        var state = instance.state;\n        if (isNull(state)) {\n          instance.state = pending;\n        } else {\n          for (var key in pending) {\n            state[key] = pending[key];\n          }\n        }\n        instance.$PS = null;\n      }\n      instance.$BR = false;\n    }\n  } else {\n    instance.state = createDerivedState(instance, props, instance.state);\n  }\n  instance.$LI = renderNewInput(instance, props, context);\n  return instance;\n}\nfunction renderFunctionalComponent(vNode, context) {\n  var props = vNode.props || EMPTY_OBJ;\n  return vNode.flags & 32768 /* VNodeFlags.ForwardRef */ ? vNode.type.render(props, vNode.ref, context) : vNode.type(props, context);\n}\nfunction mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {\n  var flags = vNode.flags |= 16384 /* VNodeFlags.InUse */;\n  if (flags & 481 /* VNodeFlags.Element */) {\n    mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n  } else if (flags & 4 /* VNodeFlags.ComponentClass */) {\n    mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n  } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n    mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n  } else if (flags & 16 /* VNodeFlags.Text */) {\n    mountText(vNode, parentDOM, nextNode);\n  } else if (flags & 8192 /* VNodeFlags.Fragment */) {\n    mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle, animations);\n  } else if (flags & 1024 /* VNodeFlags.Portal */) {\n    mountPortal(vNode, context, parentDOM, nextNode, lifecycle, animations);\n  } else ;\n}\nfunction mountPortal(vNode, context, parentDOM, nextNode, lifecycle, animations) {\n  mount(vNode.children, vNode.ref, context, false, null, lifecycle, animations);\n  var placeHolderVNode = createVoidVNode();\n  mountText(placeHolderVNode, parentDOM, nextNode);\n  vNode.dom = placeHolderVNode.dom;\n}\nfunction mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle, animations) {\n  var children = vNode.children;\n  var childFlags = vNode.childFlags;\n  // When fragment is optimized for multiple children, check if there is no children and change flag to invalid\n  // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements\n  if (childFlags & 12 /* ChildFlags.MultipleChildren */ && children.length === 0) {\n    childFlags = vNode.childFlags = 2 /* ChildFlags.HasVNodeChildren */;\n    children = vNode.children = createVoidVNode();\n  }\n  if (childFlags === 2 /* ChildFlags.HasVNodeChildren */) {\n    mount(children, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n  } else {\n    mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n  }\n}\nfunction mountText(vNode, parentDOM, nextNode) {\n  var dom = vNode.dom = document.createTextNode(vNode.children);\n  if (!isNull(parentDOM)) {\n    insertOrAppend(parentDOM, dom, nextNode);\n  }\n}\nfunction mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {\n  var flags = vNode.flags;\n  var props = vNode.props;\n  var className = vNode.className;\n  var childFlags = vNode.childFlags;\n  var dom = vNode.dom = documentCreateElement(vNode.type, isSVG = isSVG || (flags & 32 /* VNodeFlags.SvgElement */) > 0);\n  var children = vNode.children;\n  if (!isNullOrUndef(className) && className !== '') {\n    if (isSVG) {\n      dom.setAttribute('class', className);\n    } else {\n      dom.className = className;\n    }\n  }\n  if (childFlags === 16 /* ChildFlags.HasTextChildren */) {\n    setTextContent(dom, children);\n  } else if (childFlags !== 1 /* ChildFlags.HasInvalidChildren */) {\n    var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';\n    if (childFlags === 2 /* ChildFlags.HasVNodeChildren */) {\n      if (children.flags & 16384 /* VNodeFlags.InUse */) {\n        vNode.children = children = directClone(children);\n      }\n      mount(children, dom, context, childrenIsSVG, null, lifecycle, animations);\n    } else if (childFlags === 8 /* ChildFlags.HasKeyedChildren */ || childFlags === 4 /* ChildFlags.HasNonKeyedChildren */) {\n      mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle, animations);\n    }\n  }\n  if (!isNull(parentDOM)) {\n    insertOrAppend(parentDOM, dom, nextNode);\n  }\n  if (!isNull(props)) {\n    mountProps(vNode, flags, props, dom, isSVG, animations);\n  }\n  mountRef(vNode.ref, dom, lifecycle);\n}\nfunction mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle, animations) {\n  for (var i = 0; i < children.length; ++i) {\n    var child = children[i];\n    if (child.flags & 16384 /* VNodeFlags.InUse */) {\n      children[i] = child = directClone(child);\n    }\n    mount(child, dom, context, isSVG, nextNode, lifecycle, animations);\n  }\n}\nfunction mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {\n  var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);\n  // If we have a componentDidAppear on this component, we shouldn't allow children to animate so we're passing an dummy animations queue\n  var childAnimations = animations;\n  if (isFunction(instance.componentDidAppear)) {\n    childAnimations = new AnimationQueues();\n  }\n  mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle, childAnimations);\n  mountClassComponentCallbacks(vNode.ref, instance, lifecycle, animations);\n}\nfunction mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {\n  var ref = vNode.ref;\n  // If we have a componentDidAppear on this component, we shouldn't allow children to animate so we're passing an dummy animations queue\n  var childAnimations = animations;\n  if (!isNullOrUndef(ref) && isFunction(ref.onComponentDidAppear)) {\n    childAnimations = new AnimationQueues();\n  }\n  mount(vNode.children = normalizeRoot(renderFunctionalComponent(vNode, context)), parentDOM, context, isSVG, nextNode, lifecycle, childAnimations);\n  mountFunctionalComponentCallbacks(vNode, lifecycle, animations);\n}\nfunction createClassMountCallback(instance) {\n  return function () {\n    instance.componentDidMount();\n  };\n}\nfunction addAppearAnimationHook(animations, instanceOrRef, dom, flags, props) {\n  animations.componentDidAppear.push(function () {\n    if (flags & 4 /* VNodeFlags.ComponentClass */) {\n      instanceOrRef.componentDidAppear(dom);\n    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {\n      instanceOrRef.onComponentDidAppear(dom, props);\n    }\n  });\n}\nfunction mountClassComponentCallbacks(ref, instance, lifecycle, animations) {\n  mountRef(ref, instance, lifecycle);\n  if (isFunction(instance.componentDidMount)) {\n    lifecycle.push(createClassMountCallback(instance));\n  }\n  if (isFunction(instance.componentDidAppear)) {\n    addAppearAnimationHook(animations, instance, instance.$LI.dom, 4 /* VNodeFlags.ComponentClass */, undefined);\n  }\n}\nfunction createOnMountCallback(ref, vNode) {\n  return function () {\n    ref.onComponentDidMount(findDOMFromVNode(vNode, true), vNode.props || EMPTY_OBJ);\n  };\n}\nfunction mountFunctionalComponentCallbacks(vNode, lifecycle, animations) {\n  var ref = vNode.ref;\n  if (!isNullOrUndef(ref)) {\n    safeCall1(ref.onComponentWillMount, vNode.props || EMPTY_OBJ);\n    if (isFunction(ref.onComponentDidMount)) {\n      lifecycle.push(createOnMountCallback(ref, vNode));\n    }\n    if (isFunction(ref.onComponentDidAppear)) {\n      addAppearAnimationHook(animations, ref, findDOMFromVNode(vNode, true), 8 /* VNodeFlags.ComponentFunction */, vNode.props);\n    }\n  }\n}\nfunction replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations) {\n  unmount(lastVNode, animations);\n  if ((nextVNode.flags & lastVNode.flags & 1521 /* VNodeFlags.DOMRef */) !== 0) {\n    mount(nextVNode, null, context, isSVG, null, lifecycle, animations);\n    // Single DOM operation, when we have dom references available\n    replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);\n  } else {\n    mount(nextVNode, parentDOM, context, isSVG, findDOMFromVNode(lastVNode, true), lifecycle, animations);\n    removeVNodeDOM(lastVNode, parentDOM, animations);\n  }\n}\nfunction patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {\n  var nextFlags = nextVNode.flags |= 16384 /* VNodeFlags.InUse */;\n  if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || nextFlags & 2048 /* VNodeFlags.ReCreate */) {\n    if (lastVNode.flags & 16384 /* VNodeFlags.InUse */) {\n      replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations);\n    } else {\n      // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one\n      mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n    }\n  } else if (nextFlags & 481 /* VNodeFlags.Element */) {\n    patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle, animations);\n  } else if (nextFlags & 4 /* VNodeFlags.ComponentClass */) {\n    patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n  } else if (nextFlags & 8 /* VNodeFlags.ComponentFunction */) {\n    patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n  } else if (nextFlags & 16 /* VNodeFlags.Text */) {\n    patchText(lastVNode, nextVNode);\n  } else if (nextFlags & 8192 /* VNodeFlags.Fragment */) {\n    patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations);\n  } else {\n    patchPortal(lastVNode, nextVNode, context, lifecycle, animations);\n  }\n}\nfunction patchSingleTextChild(lastChildren, nextChildren, parentDOM) {\n  if (lastChildren !== nextChildren) {\n    if (lastChildren !== '') {\n      parentDOM.firstChild.nodeValue = nextChildren;\n    } else {\n      setTextContent(parentDOM, nextChildren);\n    }\n  }\n}\nfunction patchContentEditableChildren(dom, nextChildren) {\n  if (dom.textContent !== nextChildren) {\n    dom.textContent = nextChildren;\n  }\n}\nfunction patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations) {\n  var lastChildren = lastVNode.children;\n  var nextChildren = nextVNode.children;\n  var lastChildFlags = lastVNode.childFlags;\n  var nextChildFlags = nextVNode.childFlags;\n  var nextNode = null;\n  // When fragment is optimized for multiple children, check if there is no children and change flag to invalid\n  // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements\n  if (nextChildFlags & 12 /* ChildFlags.MultipleChildren */ && nextChildren.length === 0) {\n    nextChildFlags = nextVNode.childFlags = 2 /* ChildFlags.HasVNodeChildren */;\n    nextChildren = nextVNode.children = createVoidVNode();\n  }\n  var nextIsSingle = (nextChildFlags & 2 /* ChildFlags.HasVNodeChildren */) !== 0;\n  if (lastChildFlags & 12 /* ChildFlags.MultipleChildren */) {\n    var lastLen = lastChildren.length;\n    // We need to know Fragment's edge node when\n    if (\n    // It uses keyed algorithm\n    lastChildFlags & 8 /* ChildFlags.HasKeyedChildren */ && nextChildFlags & 8 /* ChildFlags.HasKeyedChildren */ ||\n    // It transforms from many to single\n    nextIsSingle ||\n    // It will append more nodes\n    !nextIsSingle && nextChildren.length > lastLen) {\n      // When fragment has multiple children there is always at least one vNode\n      nextNode = findDOMFromVNode(lastChildren[lastLen - 1], false).nextSibling;\n    }\n  }\n  patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle, animations);\n}\nfunction patchPortal(lastVNode, nextVNode, context, lifecycle, animations) {\n  var lastContainer = lastVNode.ref;\n  var nextContainer = nextVNode.ref;\n  var nextChildren = nextVNode.children;\n  patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle, animations);\n  nextVNode.dom = lastVNode.dom;\n  if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {\n    var node = nextChildren.dom;\n    removeChild(lastContainer, node);\n    appendChild(nextContainer, node);\n  }\n}\nfunction patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle, animations) {\n  var dom = nextVNode.dom = lastVNode.dom;\n  var lastProps = lastVNode.props;\n  var nextProps = nextVNode.props;\n  var isFormElement = false;\n  var hasControlledValue = false;\n  var nextPropsOrEmpty;\n  isSVG = isSVG || (nextFlags & 32 /* VNodeFlags.SvgElement */) > 0;\n  // inlined patchProps  -- starts --\n  if (lastProps !== nextProps) {\n    var lastPropsOrEmpty = lastProps || EMPTY_OBJ;\n    nextPropsOrEmpty = nextProps || EMPTY_OBJ;\n    if (nextPropsOrEmpty !== EMPTY_OBJ) {\n      isFormElement = (nextFlags & 448 /* VNodeFlags.FormElement */) > 0;\n      if (isFormElement) {\n        hasControlledValue = isControlledFormElement(nextPropsOrEmpty);\n      }\n      for (var prop in nextPropsOrEmpty) {\n        var lastValue = lastPropsOrEmpty[prop];\n        var nextValue = nextPropsOrEmpty[prop];\n        if (lastValue !== nextValue) {\n          patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode, animations);\n        }\n      }\n    }\n    if (lastPropsOrEmpty !== EMPTY_OBJ) {\n      for (var _prop in lastPropsOrEmpty) {\n        if (isNullOrUndef(nextPropsOrEmpty[_prop]) && !isNullOrUndef(lastPropsOrEmpty[_prop])) {\n          patchProp(_prop, lastPropsOrEmpty[_prop], null, dom, isSVG, hasControlledValue, lastVNode, animations);\n        }\n      }\n    }\n  }\n  var nextChildren = nextVNode.children;\n  var nextClassName = nextVNode.className;\n  // inlined patchProps  -- ends --\n  if (lastVNode.className !== nextClassName) {\n    if (isNullOrUndef(nextClassName)) {\n      dom.removeAttribute('class');\n    } else if (isSVG) {\n      dom.setAttribute('class', nextClassName);\n    } else {\n      dom.className = nextClassName;\n    }\n  }\n  if (nextFlags & 4096 /* VNodeFlags.ContentEditable */) {\n    patchContentEditableChildren(dom, nextChildren);\n  } else {\n    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle, animations);\n  }\n  if (isFormElement) {\n    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);\n  }\n  var nextRef = nextVNode.ref;\n  var lastRef = lastVNode.ref;\n  if (lastRef !== nextRef) {\n    unmountRef(lastRef);\n    mountRef(nextRef, dom, lifecycle);\n  }\n}\nfunction replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle, animations) {\n  unmount(lastChildren, animations);\n  mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMFromVNode(lastChildren, true), lifecycle, animations);\n  removeVNodeDOM(lastChildren, parentDOM, animations);\n}\nfunction patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle, animations) {\n  switch (lastChildFlags) {\n    case 2 /* ChildFlags.HasVNodeChildren */:\n      switch (nextChildFlags) {\n        case 2 /* ChildFlags.HasVNodeChildren */:\n          patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n          break;\n        case 1 /* ChildFlags.HasInvalidChildren */:\n          remove(lastChildren, parentDOM, animations);\n          break;\n        case 16 /* ChildFlags.HasTextChildren */:\n          unmount(lastChildren, animations);\n          setTextContent(parentDOM, nextChildren);\n          break;\n        default:\n          replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle, animations);\n          break;\n      }\n      break;\n    case 1 /* ChildFlags.HasInvalidChildren */:\n      switch (nextChildFlags) {\n        case 2 /* ChildFlags.HasVNodeChildren */:\n          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n          break;\n        case 1 /* ChildFlags.HasInvalidChildren */:\n          break;\n        case 16 /* ChildFlags.HasTextChildren */:\n          setTextContent(parentDOM, nextChildren);\n          break;\n        default:\n          mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n          break;\n      }\n      break;\n    case 16 /* ChildFlags.HasTextChildren */:\n      switch (nextChildFlags) {\n        case 16 /* ChildFlags.HasTextChildren */:\n          patchSingleTextChild(lastChildren, nextChildren, parentDOM);\n          break;\n        case 2 /* ChildFlags.HasVNodeChildren */:\n          clearDOM(parentDOM, lastChildren, animations);\n          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n          break;\n        case 1 /* ChildFlags.HasInvalidChildren */:\n          clearDOM(parentDOM, lastChildren, animations);\n          break;\n        default:\n          clearDOM(parentDOM, lastChildren, animations);\n          mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n          break;\n      }\n      break;\n    default:\n      switch (nextChildFlags) {\n        case 16 /* ChildFlags.HasTextChildren */:\n          unmountAllChildren(lastChildren, animations);\n          setTextContent(parentDOM, nextChildren);\n          break;\n        case 2 /* ChildFlags.HasVNodeChildren */:\n          removeAllChildren(parentDOM, parentVNode, lastChildren, animations);\n          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n          break;\n        case 1 /* ChildFlags.HasInvalidChildren */:\n          removeAllChildren(parentDOM, parentVNode, lastChildren, animations);\n          break;\n        default:\n          var lastLength = lastChildren.length | 0;\n          var nextLength = nextChildren.length | 0;\n          // Fast path's for both algorithms\n          if (lastLength === 0) {\n            if (nextLength > 0) {\n              mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n            }\n          } else if (nextLength === 0) {\n            removeAllChildren(parentDOM, parentVNode, lastChildren, animations);\n          } else if (nextChildFlags === 8 /* ChildFlags.HasKeyedChildren */ && lastChildFlags === 8 /* ChildFlags.HasKeyedChildren */) {\n            patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle, animations);\n          } else {\n            patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle, animations);\n          }\n          break;\n      }\n      break;\n  }\n}\nfunction createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {\n  lifecycle.push(function () {\n    instance.componentDidUpdate(lastProps, lastState, snapshot);\n  });\n}\nfunction updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle, animations) {\n  var lastState = instance.state;\n  var lastProps = instance.props;\n  var usesNewAPI = Boolean(instance.$N);\n  var hasSCU = isFunction(instance.shouldComponentUpdate);\n  if (usesNewAPI) {\n    nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);\n  }\n  if (force || !hasSCU || hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context)) {\n    if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {\n      instance.componentWillUpdate(nextProps, nextState, context);\n    }\n    instance.props = nextProps;\n    instance.state = nextState;\n    instance.context = context;\n    var snapshot = null;\n    var nextInput = renderNewInput(instance, nextProps, context);\n    if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {\n      snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);\n    }\n    patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle, animations);\n    // Don't update Last input, until patch has been successfully executed\n    instance.$LI = nextInput;\n    if (isFunction(instance.componentDidUpdate)) {\n      createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);\n    }\n  } else {\n    instance.props = nextProps;\n    instance.state = nextState;\n    instance.context = context;\n  }\n}\nfunction patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {\n  var instance = nextVNode.children = lastVNode.children;\n  // If Component has crashed, ignore it to stay functional\n  if (isNull(instance)) {\n    return;\n  }\n  instance.$L = lifecycle;\n  var nextProps = nextVNode.props || EMPTY_OBJ;\n  var nextRef = nextVNode.ref;\n  var lastRef = lastVNode.ref;\n  var nextState = instance.state;\n  if (!instance.$N) {\n    if (isFunction(instance.componentWillReceiveProps)) {\n      instance.$BR = true;\n      instance.componentWillReceiveProps(nextProps, context);\n      // If instance component was removed during its own update do nothing.\n      if (instance.$UN) {\n        return;\n      }\n      instance.$BR = false;\n    }\n    if (!isNull(instance.$PS)) {\n      nextState = combineFrom(nextState, instance.$PS);\n      instance.$PS = null;\n    }\n  }\n  updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle, animations);\n  if (lastRef !== nextRef) {\n    unmountRef(lastRef);\n    mountRef(nextRef, instance, lifecycle);\n  }\n}\nfunction patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {\n  var shouldUpdate = true;\n  var nextProps = nextVNode.props || EMPTY_OBJ;\n  var nextRef = nextVNode.ref;\n  var lastProps = lastVNode.props;\n  var nextHooksDefined = !isNullOrUndef(nextRef);\n  var lastInput = lastVNode.children;\n  if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {\n    shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);\n  }\n  if (shouldUpdate !== false) {\n    if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {\n      nextRef.onComponentWillUpdate(lastProps, nextProps);\n    }\n    var nextInput = normalizeRoot(renderFunctionalComponent(nextVNode, context));\n    patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle, animations);\n    nextVNode.children = nextInput;\n    if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {\n      nextRef.onComponentDidUpdate(lastProps, nextProps);\n    }\n  } else {\n    nextVNode.children = lastInput;\n  }\n}\nfunction patchText(lastVNode, nextVNode) {\n  var nextText = nextVNode.children;\n  var dom = nextVNode.dom = lastVNode.dom;\n  if (nextText !== lastVNode.children) {\n    dom.nodeValue = nextText;\n  }\n}\nfunction patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle, animations) {\n  var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;\n  var i = 0;\n  var nextChild;\n  var lastChild;\n  for (; i < commonLength; ++i) {\n    nextChild = nextChildren[i];\n    lastChild = lastChildren[i];\n    if (nextChild.flags & 16384 /* VNodeFlags.InUse */) {\n      nextChild = nextChildren[i] = directClone(nextChild);\n    }\n    patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle, animations);\n    lastChildren[i] = nextChild;\n  }\n  if (lastChildrenLength < nextChildrenLength) {\n    for (i = commonLength; i < nextChildrenLength; ++i) {\n      nextChild = nextChildren[i];\n      if (nextChild.flags & 16384 /* VNodeFlags.InUse */) {\n        nextChild = nextChildren[i] = directClone(nextChild);\n      }\n      mount(nextChild, dom, context, isSVG, nextNode, lifecycle, animations);\n    }\n  } else if (lastChildrenLength > nextChildrenLength) {\n    for (i = commonLength; i < lastChildrenLength; ++i) {\n      remove(lastChildren[i], dom, animations);\n    }\n  }\n}\nfunction patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle, animations) {\n  var aEnd = aLength - 1;\n  var bEnd = bLength - 1;\n  var j = 0;\n  var aNode = a[j];\n  var bNode = b[j];\n  var nextPos;\n  var nextNode;\n  // Step 1\n  // tslint:disable-next-line\n  outer: {\n    // Sync nodes with the same key at the beginning.\n    while (aNode.key === bNode.key) {\n      if (bNode.flags & 16384 /* VNodeFlags.InUse */) {\n        b[j] = bNode = directClone(bNode);\n      }\n      patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);\n      a[j] = bNode;\n      ++j;\n      if (j > aEnd || j > bEnd) {\n        break outer;\n      }\n      aNode = a[j];\n      bNode = b[j];\n    }\n    aNode = a[aEnd];\n    bNode = b[bEnd];\n    // Sync nodes with the same key at the end.\n    while (aNode.key === bNode.key) {\n      if (bNode.flags & 16384 /* VNodeFlags.InUse */) {\n        b[bEnd] = bNode = directClone(bNode);\n      }\n      patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);\n      a[aEnd] = bNode;\n      aEnd--;\n      bEnd--;\n      if (j > aEnd || j > bEnd) {\n        break outer;\n      }\n      aNode = a[aEnd];\n      bNode = b[bEnd];\n    }\n  }\n  if (j > aEnd) {\n    if (j <= bEnd) {\n      nextPos = bEnd + 1;\n      nextNode = nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge;\n      while (j <= bEnd) {\n        bNode = b[j];\n        if (bNode.flags & 16384 /* VNodeFlags.InUse */) {\n          b[j] = bNode = directClone(bNode);\n        }\n        ++j;\n        mount(bNode, dom, context, isSVG, nextNode, lifecycle, animations);\n      }\n    }\n  } else if (j > bEnd) {\n    while (j <= aEnd) {\n      remove(a[j++], dom, animations);\n    }\n  } else {\n    patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle, animations);\n  }\n}\nfunction patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle, animations) {\n  var aNode;\n  var bNode;\n  var nextPos = 0;\n  var i = 0;\n  var aStart = j;\n  var bStart = j;\n  var aLeft = aEnd - j + 1;\n  var bLeft = bEnd - j + 1;\n  var sources = new Int32Array(bLeft + 1);\n  // Keep track if its possible to remove whole DOM using textContent = '';\n  var canRemoveWholeContent = aLeft === aLength;\n  var moved = false;\n  var pos = 0;\n  var patched = 0;\n  // When sizes are small, just loop them through\n  if (bLength < 4 || (aLeft | bLeft) < 32) {\n    for (i = aStart; i <= aEnd; ++i) {\n      aNode = a[i];\n      if (patched < bLeft) {\n        for (j = bStart; j <= bEnd; j++) {\n          bNode = b[j];\n          if (aNode.key === bNode.key) {\n            sources[j - bStart] = i + 1;\n            if (canRemoveWholeContent) {\n              canRemoveWholeContent = false;\n              while (aStart < i) {\n                remove(a[aStart++], dom, animations);\n              }\n            }\n            if (pos > j) {\n              moved = true;\n            } else {\n              pos = j;\n            }\n            if (bNode.flags & 16384 /* VNodeFlags.InUse */) {\n              b[j] = bNode = directClone(bNode);\n            }\n            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);\n            ++patched;\n            break;\n          }\n        }\n        if (!canRemoveWholeContent && j > bEnd) {\n          remove(aNode, dom, animations);\n        }\n      } else if (!canRemoveWholeContent) {\n        remove(aNode, dom, animations);\n      }\n    }\n  } else {\n    var keyIndex = {};\n    // Map keys by their index\n    for (i = bStart; i <= bEnd; ++i) {\n      keyIndex[b[i].key] = i;\n    }\n    // Try to patch same keys\n    for (i = aStart; i <= aEnd; ++i) {\n      aNode = a[i];\n      if (patched < bLeft) {\n        j = keyIndex[aNode.key];\n        if (j !== void 0) {\n          if (canRemoveWholeContent) {\n            canRemoveWholeContent = false;\n            while (i > aStart) {\n              remove(a[aStart++], dom, animations);\n            }\n          }\n          sources[j - bStart] = i + 1;\n          if (pos > j) {\n            moved = true;\n          } else {\n            pos = j;\n          }\n          bNode = b[j];\n          if (bNode.flags & 16384 /* VNodeFlags.InUse */) {\n            b[j] = bNode = directClone(bNode);\n          }\n          patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);\n          ++patched;\n        } else if (!canRemoveWholeContent) {\n          remove(aNode, dom, animations);\n        }\n      } else if (!canRemoveWholeContent) {\n        remove(aNode, dom, animations);\n      }\n    }\n  }\n  // fast-path: if nothing patched remove all old and add all new\n  if (canRemoveWholeContent) {\n    removeAllChildren(dom, parentVNode, a, animations);\n    mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle, animations);\n  } else if (moved) {\n    var seq = lis_algorithm(sources);\n    j = seq.length - 1;\n    for (i = bLeft - 1; i >= 0; i--) {\n      if (sources[i] === 0) {\n        pos = i + bStart;\n        bNode = b[pos];\n        if (bNode.flags & 16384 /* VNodeFlags.InUse */) {\n          b[pos] = bNode = directClone(bNode);\n        }\n        nextPos = pos + 1;\n        mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge, lifecycle, animations);\n      } else if (j < 0 || i !== seq[j]) {\n        pos = i + bStart;\n        bNode = b[pos];\n        nextPos = pos + 1;\n        // --- the DOM-node is moved by a call to insertAppend\n        moveVNodeDOM(parentVNode, bNode, dom, nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge, animations);\n      } else {\n        j--;\n      }\n    }\n    // Invoke move animations when all moves have been calculated\n    if (animations.componentWillMove.length > 0) {\n      callAllMoveAnimationHooks(animations.componentWillMove);\n    }\n  } else if (patched !== bLeft) {\n    // when patched count doesn't match b length we need to insert those new ones\n    // loop backwards so we can use insertBefore\n    for (i = bLeft - 1; i >= 0; i--) {\n      if (sources[i] === 0) {\n        pos = i + bStart;\n        bNode = b[pos];\n        if (bNode.flags & 16384 /* VNodeFlags.InUse */) {\n          b[pos] = bNode = directClone(bNode);\n        }\n        nextPos = pos + 1;\n        mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge, lifecycle, animations);\n      }\n    }\n  }\n}\nvar result;\nvar p;\nvar maxLen = 0;\n// https://en.wikipedia.org/wiki/Longest_increasing_subsequence\nfunction lis_algorithm(arr) {\n  var arrI = 0;\n  var i = 0;\n  var j = 0;\n  var k = 0;\n  var u = 0;\n  var v = 0;\n  var c = 0;\n  var len = arr.length;\n  if (len > maxLen) {\n    maxLen = len;\n    result = new Int32Array(len);\n    p = new Int32Array(len);\n  }\n  for (; i < len; ++i) {\n    arrI = arr[i];\n    if (arrI !== 0) {\n      j = result[k];\n      if (arr[j] < arrI) {\n        p[i] = j;\n        result[++k] = i;\n        continue;\n      }\n      u = 0;\n      v = k;\n      while (u < v) {\n        c = u + v >> 1;\n        if (arr[result[c]] < arrI) {\n          u = c + 1;\n        } else {\n          v = c;\n        }\n      }\n      if (arrI < arr[result[u]]) {\n        if (u > 0) {\n          p[i] = result[u - 1];\n        }\n        result[u] = i;\n      }\n    }\n  }\n  u = k + 1;\n  var seq = new Int32Array(u);\n  v = result[u - 1];\n  while (u-- > 0) {\n    seq[u] = v;\n    v = p[v];\n    result[u] = 0;\n  }\n  return seq;\n}\nvar hasDocumentAvailable = typeof document !== 'undefined';\nif (hasDocumentAvailable) {\n  /*\n   * Defining $EV and $V properties on Node.prototype\n   * fixes v8 \"wrong map\" de-optimization\n   */\n  if (window.Node) {\n    Node.prototype.$EV = null;\n    Node.prototype.$V = null;\n  }\n}\nfunction __render(input, parentDOM, callback, context) {\n  var lifecycle = [];\n  var animations = new AnimationQueues();\n  var rootInput = parentDOM.$V;\n  renderCheck.v = true;\n  if (isNullOrUndef(rootInput)) {\n    if (!isNullOrUndef(input)) {\n      if (input.flags & 16384 /* VNodeFlags.InUse */) {\n        input = directClone(input);\n      }\n      mount(input, parentDOM, context, false, null, lifecycle, animations);\n      parentDOM.$V = input;\n      rootInput = input;\n    }\n  } else {\n    if (isNullOrUndef(input)) {\n      remove(rootInput, parentDOM, animations);\n      parentDOM.$V = null;\n    } else {\n      if (input.flags & 16384 /* VNodeFlags.InUse */) {\n        input = directClone(input);\n      }\n      patch(rootInput, input, parentDOM, context, false, null, lifecycle, animations);\n      rootInput = parentDOM.$V = input;\n    }\n  }\n  callAll(lifecycle);\n  callAllAnimationHooks(animations.componentDidAppear);\n  renderCheck.v = false;\n  if (isFunction(callback)) {\n    callback();\n  }\n  if (isFunction(options.renderComplete)) {\n    options.renderComplete(rootInput, parentDOM);\n  }\n}\nfunction render(input, parentDOM, callback, context) {\n  if (callback === void 0) {\n    callback = null;\n  }\n  if (context === void 0) {\n    context = EMPTY_OBJ;\n  }\n  __render(input, parentDOM, callback, context);\n}\nfunction createRenderer(parentDOM) {\n  return function renderer(lastInput, nextInput, callback, context) {\n    if (!parentDOM) {\n      parentDOM = lastInput;\n    }\n    render(nextInput, parentDOM, callback, context);\n  };\n}\nvar COMPONENTS_QUEUE = [];\nvar nextTick = typeof Promise !== 'undefined' ? Promise.resolve().then.bind(Promise.resolve()) : function (a) {\n  window.setTimeout(a, 0);\n};\nvar microTaskPending = false;\nfunction queueStateChanges(component, newState, callback, force) {\n  var pending = component.$PS;\n  if (isFunction(newState)) {\n    newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);\n  }\n  if (isNullOrUndef(pending)) {\n    component.$PS = newState;\n  } else {\n    for (var stateKey in newState) {\n      pending[stateKey] = newState[stateKey];\n    }\n  }\n  if (!component.$BR) {\n    if (!renderCheck.v) {\n      if (COMPONENTS_QUEUE.length === 0) {\n        applyState(component, force);\n        if (isFunction(callback)) {\n          callback.call(component);\n        }\n        return;\n      }\n    }\n    if (COMPONENTS_QUEUE.indexOf(component) === -1) {\n      COMPONENTS_QUEUE.push(component);\n    }\n    if (force) {\n      component.$F = true;\n    }\n    if (!microTaskPending) {\n      microTaskPending = true;\n      nextTick(rerender);\n    }\n    if (isFunction(callback)) {\n      var QU = component.$QU;\n      if (!QU) {\n        QU = component.$QU = [];\n      }\n      QU.push(callback);\n    }\n  } else if (isFunction(callback)) {\n    component.$L.push(callback.bind(component));\n  }\n}\nfunction callSetStateCallbacks(component) {\n  var queue = component.$QU;\n  for (var i = 0; i < queue.length; ++i) {\n    queue[i].call(component);\n  }\n  component.$QU = null;\n}\nfunction rerender() {\n  var component;\n  microTaskPending = false;\n  while (component = COMPONENTS_QUEUE.shift()) {\n    if (!component.$UN) {\n      var force = component.$F;\n      component.$F = false;\n      applyState(component, force);\n      if (component.$QU) {\n        callSetStateCallbacks(component);\n      }\n    }\n  }\n}\nfunction applyState(component, force) {\n  if (force || !component.$BR) {\n    var pendingState = component.$PS;\n    component.$PS = null;\n    var lifecycle = [];\n    var animations = new AnimationQueues();\n    renderCheck.v = true;\n    updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMFromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle, animations);\n    callAll(lifecycle);\n    callAllAnimationHooks(animations.componentDidAppear);\n    renderCheck.v = false;\n  } else {\n    component.state = component.$PS;\n    component.$PS = null;\n  }\n}\nvar Component = /*#__PURE__*/function () {\n  // Force update flag\n  function Component(props, context) {\n    // Public\n    this.state = null;\n    this.props = void 0;\n    this.context = void 0;\n    this.displayName = void 0;\n    // Internal properties\n    this.$BR = false;\n    // BLOCK RENDER\n    this.$BS = true;\n    // BLOCK STATE\n    this.$PS = null;\n    // PENDING STATE (PARTIAL or FULL)\n    this.$LI = null;\n    // LAST INPUT\n    this.$UN = false;\n    // UNMOUNTED\n    this.$CX = null;\n    // CHILDCONTEXT\n    this.$QU = null;\n    // QUEUE\n    this.$N = false;\n    // Uses new lifecycle API Flag\n    this.$SSR = void 0;\n    // Server side rendering flag, true when rendering on server, non existent on client\n    this.$L = null;\n    // Current lifecycle of this component\n    this.$SVG = false;\n    // Flag to keep track if component is inside SVG tree\n    this.$F = false;\n    this.props = props || EMPTY_OBJ;\n    this.context = context || EMPTY_OBJ; // context should not be mutable\n  }\n\n  var _proto = Component.prototype;\n  _proto.forceUpdate = function forceUpdate(callback) {\n    if (this.$UN) {\n      return;\n    }\n    // Do not allow double render during force update\n    queueStateChanges(this, {}, callback, true);\n  };\n  _proto.setState = function setState(newState, callback) {\n    if (this.$UN) {\n      return;\n    }\n    if (!this.$BS) {\n      queueStateChanges(this, newState, callback, false);\n    }\n  };\n  // @ts-expect-error TS6133\n  _proto.render = function render(props, state, context) {\n    return null;\n  };\n  return Component;\n}();\nComponent.defaultProps = null;\nvar version = \"8.2.2\";\n\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/inferno/dist/index.esm.js?");

/***/ }),

/***/ "./node_modules/inferno/index.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/inferno/index.esm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimationQueues\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.AnimationQueues),\n/* harmony export */   \"Component\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.Component),\n/* harmony export */   \"EMPTY_OBJ\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ),\n/* harmony export */   \"Fragment\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.Fragment),\n/* harmony export */   \"_CI\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._CI),\n/* harmony export */   \"_HI\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._HI),\n/* harmony export */   \"_M\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._M),\n/* harmony export */   \"_MCCC\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MCCC),\n/* harmony export */   \"_ME\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._ME),\n/* harmony export */   \"_MFCC\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MFCC),\n/* harmony export */   \"_MP\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MP),\n/* harmony export */   \"_MR\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MR),\n/* harmony export */   \"_RFC\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._RFC),\n/* harmony export */   \"__render\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.__render),\n/* harmony export */   \"createComponentVNode\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode),\n/* harmony export */   \"createFragment\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createFragment),\n/* harmony export */   \"createPortal\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createPortal),\n/* harmony export */   \"createRef\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createRef),\n/* harmony export */   \"createRenderer\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createRenderer),\n/* harmony export */   \"createTextVNode\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),\n/* harmony export */   \"createVNode\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createVNode),\n/* harmony export */   \"directClone\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.directClone),\n/* harmony export */   \"findDOMFromVNode\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.findDOMFromVNode),\n/* harmony export */   \"forwardRef\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.forwardRef),\n/* harmony export */   \"getFlagsForElementVnode\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.getFlagsForElementVnode),\n/* harmony export */   \"linkEvent\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.linkEvent),\n/* harmony export */   \"normalizeProps\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),\n/* harmony export */   \"options\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.options),\n/* harmony export */   \"render\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"rerender\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.rerender),\n/* harmony export */   \"version\": () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.version)\n/* harmony export */ });\n/* harmony import */ var _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/index.esm.js */ \"./node_modules/inferno/dist/index.esm.js\");\n\nif (true) {\n  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');\n}\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/inferno/index.esm.js?");

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = Array.isArray || function (arr) {\n  return Object.prototype.toString.call(arr) == '[object Array]';\n};\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/path-to-regexp-es6/index.js":
/*!**************************************************!*\
  !*** ./node_modules/path-to-regexp-es6/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pathToRegExp = __webpack_require__(/*! path-to-regexp */ \"./node_modules/path-to-regexp/index.js\");\n\n/**\r\n * Expose `pathToRegexp` as ES6 module\r\n */\nmodule.exports = pathToRegExp;\nmodule.exports.parse = pathToRegExp.parse;\nmodule.exports.compile = pathToRegExp.compile;\nmodule.exports.tokensToFunction = pathToRegExp.tokensToFunction;\nmodule.exports.tokensToRegExp = pathToRegExp.tokensToRegExp;\nmodule.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/path-to-regexp-es6/index.js?");

/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isarray = __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\");\n\n/**\n * Expose `pathToRegexp`.\n */\nmodule.exports = pathToRegexp;\nmodule.exports.parse = parse;\nmodule.exports.compile = compile;\nmodule.exports.tokensToFunction = tokensToFunction;\nmodule.exports.tokensToRegExp = tokensToRegExp;\n\n/**\n * The main path matching regexp utility.\n *\n * @type {RegExp}\n */\nvar PATH_REGEXP = new RegExp([\n// Match escaped characters that would otherwise appear in future matches.\n// This allows the user to escape special characters that won't transform.\n'(\\\\\\\\.)',\n// Match Express-style parameters and un-named parameters with a prefix\n// and optional suffixes. Matches appear as:\n//\n// \"/:test(\\\\d+)?\" => [\"/\", \"test\", \"\\d+\", undefined, \"?\", undefined]\n// \"/route(\\\\d+)\"  => [undefined, undefined, undefined, \"\\d+\", undefined, undefined]\n// \"/*\"            => [\"/\", undefined, undefined, undefined, undefined, \"*\"]\n'([\\\\/.])?(?:(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?|(\\\\*))'].join('|'), 'g');\n\n/**\n * Parse a string for the raw tokens.\n *\n * @param  {string}  str\n * @param  {Object=} options\n * @return {!Array}\n */\nfunction parse(str, options) {\n  var tokens = [];\n  var key = 0;\n  var index = 0;\n  var path = '';\n  var defaultDelimiter = options && options.delimiter || '/';\n  var res;\n  while ((res = PATH_REGEXP.exec(str)) != null) {\n    var m = res[0];\n    var escaped = res[1];\n    var offset = res.index;\n    path += str.slice(index, offset);\n    index = offset + m.length;\n\n    // Ignore already escaped sequences.\n    if (escaped) {\n      path += escaped[1];\n      continue;\n    }\n    var next = str[index];\n    var prefix = res[2];\n    var name = res[3];\n    var capture = res[4];\n    var group = res[5];\n    var modifier = res[6];\n    var asterisk = res[7];\n\n    // Push the current path onto the tokens.\n    if (path) {\n      tokens.push(path);\n      path = '';\n    }\n    var partial = prefix != null && next != null && next !== prefix;\n    var repeat = modifier === '+' || modifier === '*';\n    var optional = modifier === '?' || modifier === '*';\n    var delimiter = res[2] || defaultDelimiter;\n    var pattern = capture || group;\n    tokens.push({\n      name: name || key++,\n      prefix: prefix || '',\n      delimiter: delimiter,\n      optional: optional,\n      repeat: repeat,\n      partial: partial,\n      asterisk: !!asterisk,\n      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'\n    });\n  }\n\n  // Match any characters still remaining.\n  if (index < str.length) {\n    path += str.substr(index);\n  }\n\n  // If the path exists, push it onto the end.\n  if (path) {\n    tokens.push(path);\n  }\n  return tokens;\n}\n\n/**\n * Compile a string to a template function for the path.\n *\n * @param  {string}             str\n * @param  {Object=}            options\n * @return {!function(Object=, Object=)}\n */\nfunction compile(str, options) {\n  return tokensToFunction(parse(str, options));\n}\n\n/**\n * Prettier encoding of URI path segments.\n *\n * @param  {string}\n * @return {string}\n */\nfunction encodeURIComponentPretty(str) {\n  return encodeURI(str).replace(/[\\/?#]/g, function (c) {\n    return '%' + c.charCodeAt(0).toString(16).toUpperCase();\n  });\n}\n\n/**\n * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.\n *\n * @param  {string}\n * @return {string}\n */\nfunction encodeAsterisk(str) {\n  return encodeURI(str).replace(/[?#]/g, function (c) {\n    return '%' + c.charCodeAt(0).toString(16).toUpperCase();\n  });\n}\n\n/**\n * Expose a method for transforming tokens into the path function.\n */\nfunction tokensToFunction(tokens) {\n  // Compile all the tokens into regexps.\n  var matches = new Array(tokens.length);\n\n  // Compile all the patterns before compilation.\n  for (var i = 0; i < tokens.length; i++) {\n    if (typeof tokens[i] === 'object') {\n      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');\n    }\n  }\n  return function (obj, opts) {\n    var path = '';\n    var data = obj || {};\n    var options = opts || {};\n    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;\n    for (var i = 0; i < tokens.length; i++) {\n      var token = tokens[i];\n      if (typeof token === 'string') {\n        path += token;\n        continue;\n      }\n      var value = data[token.name];\n      var segment;\n      if (value == null) {\n        if (token.optional) {\n          // Prepend partial segment prefixes.\n          if (token.partial) {\n            path += token.prefix;\n          }\n          continue;\n        } else {\n          throw new TypeError('Expected \"' + token.name + '\" to be defined');\n        }\n      }\n      if (isarray(value)) {\n        if (!token.repeat) {\n          throw new TypeError('Expected \"' + token.name + '\" to not repeat, but received `' + JSON.stringify(value) + '`');\n        }\n        if (value.length === 0) {\n          if (token.optional) {\n            continue;\n          } else {\n            throw new TypeError('Expected \"' + token.name + '\" to not be empty');\n          }\n        }\n        for (var j = 0; j < value.length; j++) {\n          segment = encode(value[j]);\n          if (!matches[i].test(segment)) {\n            throw new TypeError('Expected all \"' + token.name + '\" to match \"' + token.pattern + '\", but received `' + JSON.stringify(segment) + '`');\n          }\n          path += (j === 0 ? token.prefix : token.delimiter) + segment;\n        }\n        continue;\n      }\n      segment = token.asterisk ? encodeAsterisk(value) : encode(value);\n      if (!matches[i].test(segment)) {\n        throw new TypeError('Expected \"' + token.name + '\" to match \"' + token.pattern + '\", but received \"' + segment + '\"');\n      }\n      path += token.prefix + segment;\n    }\n    return path;\n  };\n}\n\n/**\n * Escape a regular expression string.\n *\n * @param  {string} str\n * @return {string}\n */\nfunction escapeString(str) {\n  return str.replace(/([.+*?=^!:${}()[\\]|\\/\\\\])/g, '\\\\$1');\n}\n\n/**\n * Escape the capturing group by escaping special characters and meaning.\n *\n * @param  {string} group\n * @return {string}\n */\nfunction escapeGroup(group) {\n  return group.replace(/([=!:$\\/()])/g, '\\\\$1');\n}\n\n/**\n * Attach the keys as a property of the regexp.\n *\n * @param  {!RegExp} re\n * @param  {Array}   keys\n * @return {!RegExp}\n */\nfunction attachKeys(re, keys) {\n  re.keys = keys;\n  return re;\n}\n\n/**\n * Get the flags for a regexp from the options.\n *\n * @param  {Object} options\n * @return {string}\n */\nfunction flags(options) {\n  return options.sensitive ? '' : 'i';\n}\n\n/**\n * Pull out keys from a regexp.\n *\n * @param  {!RegExp} path\n * @param  {!Array}  keys\n * @return {!RegExp}\n */\nfunction regexpToRegexp(path, keys) {\n  // Use a negative lookahead to match only capturing groups.\n  var groups = path.source.match(/\\((?!\\?)/g);\n  if (groups) {\n    for (var i = 0; i < groups.length; i++) {\n      keys.push({\n        name: i,\n        prefix: null,\n        delimiter: null,\n        optional: false,\n        repeat: false,\n        partial: false,\n        asterisk: false,\n        pattern: null\n      });\n    }\n  }\n  return attachKeys(path, keys);\n}\n\n/**\n * Transform an array into a regexp.\n *\n * @param  {!Array}  path\n * @param  {Array}   keys\n * @param  {!Object} options\n * @return {!RegExp}\n */\nfunction arrayToRegexp(path, keys, options) {\n  var parts = [];\n  for (var i = 0; i < path.length; i++) {\n    parts.push(pathToRegexp(path[i], keys, options).source);\n  }\n  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));\n  return attachKeys(regexp, keys);\n}\n\n/**\n * Create a path regexp from string input.\n *\n * @param  {string}  path\n * @param  {!Array}  keys\n * @param  {!Object} options\n * @return {!RegExp}\n */\nfunction stringToRegexp(path, keys, options) {\n  return tokensToRegExp(parse(path, options), keys, options);\n}\n\n/**\n * Expose a function for taking tokens and returning a RegExp.\n *\n * @param  {!Array}          tokens\n * @param  {(Array|Object)=} keys\n * @param  {Object=}         options\n * @return {!RegExp}\n */\nfunction tokensToRegExp(tokens, keys, options) {\n  if (!isarray(keys)) {\n    options = /** @type {!Object} */keys || options;\n    keys = [];\n  }\n  options = options || {};\n  var strict = options.strict;\n  var end = options.end !== false;\n  var route = '';\n\n  // Iterate over the tokens and create our regexp string.\n  for (var i = 0; i < tokens.length; i++) {\n    var token = tokens[i];\n    if (typeof token === 'string') {\n      route += escapeString(token);\n    } else {\n      var prefix = escapeString(token.prefix);\n      var capture = '(?:' + token.pattern + ')';\n      keys.push(token);\n      if (token.repeat) {\n        capture += '(?:' + prefix + capture + ')*';\n      }\n      if (token.optional) {\n        if (!token.partial) {\n          capture = '(?:' + prefix + '(' + capture + '))?';\n        } else {\n          capture = prefix + '(' + capture + ')?';\n        }\n      } else {\n        capture = prefix + '(' + capture + ')';\n      }\n      route += capture;\n    }\n  }\n  var delimiter = escapeString(options.delimiter || '/');\n  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;\n\n  // In non-strict mode we allow a slash at the end of match. If the path to\n  // match already ends with a slash, we remove it for consistency. The slash\n  // is valid at the end of a path match, not in the middle. This is important\n  // in non-ending mode, where \"/test/\" shouldn't match \"/test//route\".\n  if (!strict) {\n    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';\n  }\n  if (end) {\n    route += '$';\n  } else {\n    // In non-ending mode, we need the capturing groups to match as much as\n    // possible by using a positive lookahead to the end or next path segment.\n    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';\n  }\n  return attachKeys(new RegExp('^' + route, flags(options)), keys);\n}\n\n/**\n * Normalize the given path string, returning a regular expression.\n *\n * An empty array can be passed in for the keys, which will hold the\n * placeholder key descriptions. For example, using `/user/:id`, `keys` will\n * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.\n *\n * @param  {(string|RegExp|Array)} path\n * @param  {(Array|Object)=}       keys\n * @param  {Object=}               options\n * @return {!RegExp}\n */\nfunction pathToRegexp(path, keys, options) {\n  if (!isarray(keys)) {\n    options = /** @type {!Object} */keys || options;\n    keys = [];\n  }\n  options = options || {};\n  if (path instanceof RegExp) {\n    return regexpToRegexp(path, /** @type {!Array} */keys);\n  }\n  if (isarray(path)) {\n    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);\n  }\n  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);\n}\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/path-to-regexp/index.js?");

/***/ }),

/***/ "./src/JobForm.js":
/*!************************!*\
  !*** ./src/JobForm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JobForm)\n/* harmony export */ });\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar InmmutableModel = /*#__PURE__*/function () {\n  function InmmutableModel() {}\n  var _proto = InmmutableModel.prototype;\n  _proto.clone = function clone() {\n    JSON.parse(JSON.stringify(this));\n  };\n  _proto.update = function update(prop, value) {\n    var copy = this.clone();\n    copy[prop] = value;\n    return copy;\n  };\n  return InmmutableModel;\n}();\nvar Job = /*#__PURE__*/function (_InmmutableModel) {\n  _inheritsLoose(Job, _InmmutableModel);\n  function Job() {\n    var _this;\n    _this.title = \"\";\n    _this.budget = \"\";\n    _this.description = \"\";\n    return _assertThisInitialized(_this);\n  }\n  var _proto2 = Job.prototype;\n  _proto2.setTitle = function setTitle(title) {\n    this.title = title;\n  };\n  _proto2.setBudget = function setBudget(budget) {\n    this.budget = budget;\n  };\n  _proto2.setDescription = function setDescription(description) {\n    this.description = description;\n  };\n  return Job;\n}(InmmutableModel);\nvar JobForm = /*#__PURE__*/function (_Component) {\n  _inheritsLoose(JobForm, _Component);\n  function JobForm(props) {\n    var _this2;\n    _this2 = _Component.call(this, props) || this;\n    _this2.state = {\n      was_send: false,\n      job: new Job()\n    };\n    console.log(_this2.state);\n    _this2.handleChangeTitle = _this2.handleChangeTitle.bind(_assertThisInitialized(_this2));\n    _this2.handleChangeBudget = _this2.handleChangeBudget.bind(_assertThisInitialized(_this2));\n    _this2.handleChangeDescription = _this2.handleChangeDescription.bind(_assertThisInitialized(_this2));\n    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n  var _proto3 = JobForm.prototype;\n  _proto3.handleChangeTitle = function handleChangeTitle(event) {\n    console.log(event);\n    console.log(event.target.value);\n    console.log(this.state);\n    var new_job = this.state.job.clone();\n    new_job.setTitle(event.target.value);\n    this.setState({\n      job: new_job\n    });\n  };\n  _proto3.handleChangeBudget = function handleChangeBudget(event) {\n    var new_data = this.state.data.budget = event.target.value;\n    this.setState({\n      job: new_job\n    });\n  };\n  _proto3.handleChangeDescription = function handleChangeDescription(event) {\n    var new_data = this.state.data.description = event.target.description;\n    this.setState({\n      job: new_job\n    });\n  };\n  _proto3.handleSubmit = function handleSubmit(event) {\n    this.setState({\n      was_send: true\n    });\n    console.log(this.state.data);\n    event.preventDefault();\n  };\n  _proto3.render = function render() {\n    if (this.state.was_send) {\n      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"spinner-border text-primary\", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"span\", \"sr-only\", \"Loading...\", 16), 2, {\n        \"role\": \"status\"\n      });\n    } else {\n      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"form\", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"m-5\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"h1\", null, \"New Job\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"form-group\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"label\", null, \"Title\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, \"input\", \"form-control\", null, 1, {\n        \"type\": \"text\",\n        \"id\": \"job_title\",\n        \"placeholder\": \"\",\n        \"value\": this.state.job.title,\n        \"onInput\": this.handleChangeTitle\n      })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"form-group\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"label\", null, \"Budget\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(256, \"select\", \"form-control\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"option\", null, \"less 1000 XRP\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"option\", null, \"1000 - 3000 XRP\", 16, {\n        \"selected\": \"true\"\n      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"option\", null, \"3000 - 6000 XRP\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"option\", null, \"+ 10000 XRP\", 16)], 4, {\n        \"id\": \"job_bugdet_range\",\n        \"onInput\": this.handleChangeBudget\n      })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"form-group\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"label\", null, \"Categories\", 16, {\n        \"for\": \"exampleFormControlSelect2\"\n      }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"p\", null, \"# Selector categories...\", 16)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"form-group\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"label\", null, \"Description\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(128, \"textarea\", \"form-control\", null, 1, {\n        \"id\": \"job_description\",\n        \"rows\": \"5\",\n        \"value\": this.state.job.description,\n        \"onInput\": this.handleChangeDescription\n      })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, \"input\", null, null, 1, {\n        \"type\": \"submit\",\n        \"value\": \"Submit\"\n      })], 4), 2, {\n        \"onSubmit\": this.handleSubmit\n      });\n    }\n  };\n  return JobForm;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n//# sourceURL=webpack://inferno-boilerplate/./src/JobForm.js?");

/***/ }),

/***/ "./src/JobRow.js":
/*!***********************!*\
  !*** ./src/JobRow.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JobRow)\n/* harmony export */ });\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar JobRow = /*#__PURE__*/function (_Component) {\n  _inheritsLoose(JobRow, _Component);\n  function JobRow(props) {\n    return _Component.call(this, props) || this;\n  }\n  var _proto = JobRow.prototype;\n  _proto.render = function render() {\n    var data = this.props.data; // Recibimos el objeto Job como prop\n\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"card text-center\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"card-header custom-background\", data.title, 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"card-body\", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"p\", \"card-text\", data.description, 0), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"card-footer text-muted custom-background\", \"2 days ago\", 16)], 4);\n  };\n  return JobRow;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n//# sourceURL=webpack://inferno-boilerplate/./src/JobRow.js?");

/***/ }),

/***/ "./src/JobsList.js":
/*!*************************!*\
  !*** ./src/JobsList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JobsList)\n/* harmony export */ });\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n/* harmony import */ var _api_api_jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/api_jobs */ \"./src/api/api_jobs.js\");\n/* harmony import */ var _JobRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobRow */ \"./src/JobRow.js\");\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar JobsList = /*#__PURE__*/function (_Component) {\n  _inheritsLoose(JobsList, _Component);\n  function JobsList(props) {\n    var _this;\n    console.log(\"Construct ... jobs_list\");\n    console.log(props);\n    _this = _Component.call(this, props) || this;\n    _this.state = {\n      data: []\n    };\n    return _this;\n  }\n  var _proto = JobsList.prototype;\n  _proto.componentDidMount = function componentDidMount() {\n    var _this2 = this;\n    (0,_api_api_jobs__WEBPACK_IMPORTED_MODULE_1__.get_list_jobs)().then(function (list_jobs) {\n      _this2.setState({\n        data: list_jobs\n      });\n    })[\"catch\"](function (error) {\n      console.error('Error fetching data:', error);\n    });\n  };\n  _proto._render_jobs = function _render_jobs() {\n    var jobs = this.state.data;\n    var jobElements = [];\n    for (var index = 0; index < jobs.length; index++) {\n      var job = jobs[index];\n      jobElements.push((0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _JobRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        \"data\": job\n      }, job.id));\n    }\n    return jobElements;\n  };\n  _proto.render = function render() {\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", \"m-5\", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"h1\", null, \"Jobs list\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, this._render_jobs(), 0, {\n      \"id\": \"list\"\n    })], 4);\n  };\n  return JobsList;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n//# sourceURL=webpack://inferno-boilerplate/./src/JobsList.js?");

/***/ }),

/***/ "./src/MyApp.js":
/*!**********************!*\
  !*** ./src/MyApp.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n/* harmony import */ var _VersionComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionComponent.js */ \"./src/VersionComponent.js\");\n\n\nfunction MyApp(_ref) {\n  var children = _ref.children;\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"h1\", null, \"Inferno Boilerplate\", 16), children], 0);\n}\n\n//# sourceURL=webpack://inferno-boilerplate/./src/MyApp.js?");

/***/ }),

/***/ "./src/MyHome.js":
/*!***********************!*\
  !*** ./src/MyHome.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n/* harmony import */ var _api_api_jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/api_jobs */ \"./src/api/api_jobs.js\");\n/* harmony import */ var _JobsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobsList */ \"./src/JobsList.js\");\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar MyHome = /*#__PURE__*/function (_Component) {\n  _inheritsLoose(MyHome, _Component);\n  function MyHome(props) {\n    return _Component.call(this, props) || this;\n  }\n  var _proto = MyHome.prototype;\n  _proto.render = function render() {\n    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _JobsList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), 2);\n  };\n  return MyHome;\n}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyHome);\n\n//# sourceURL=webpack://inferno-boilerplate/./src/MyHome.js?");

/***/ }),

/***/ "./src/VersionComponent.js":
/*!*********************************!*\
  !*** ./src/VersionComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VersionComponent)\n/* harmony export */ });\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n\n\nfunction showVersion() {\n  alert(\"The version is: \" + inferno__WEBPACK_IMPORTED_MODULE_0__.version + \"!\");\n}\nfunction VersionComponent() {\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"p\", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"This is an Inferno Boilerplate example using \"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"em\", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Inferno \"), inferno__WEBPACK_IMPORTED_MODULE_0__.version], 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\".\")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"button\", null, \"Show version\", 16, {\n    \"onClick\": showVersion\n  })], 4);\n}\n\n//# sourceURL=webpack://inferno-boilerplate/./src/VersionComponent.js?");

/***/ }),

/***/ "./src/api/api_jobs.js":
/*!*****************************!*\
  !*** ./src/api/api_jobs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get_list_jobs\": () => (/* binding */ get_list_jobs)\n/* harmony export */ });\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == typeof value && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction get_list_jobs() {\n  return _get_list_jobs.apply(this, arguments);\n}\nfunction _get_list_jobs() {\n  _get_list_jobs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    var url, response, data;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          url = \"/api/jobs\";\n          _context.next = 3;\n          return fetch(url);\n        case 3:\n          response = _context.sent;\n          _context.next = 6;\n          return response.json();\n        case 6:\n          data = _context.sent;\n          return _context.abrupt(\"return\", data.result);\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _get_list_jobs.apply(this, arguments);\n}\n\n//# sourceURL=webpack://inferno-boilerplate/./src/api/api_jobs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ \"./node_modules/inferno/index.esm.js\");\n/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inferno-router */ \"./node_modules/inferno-router/dist/index.esm.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ \"./node_modules/history/index.js\");\n/* harmony import */ var _MyApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyApp */ \"./src/MyApp.js\");\n/* harmony import */ var _VersionComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VersionComponent.js */ \"./src/VersionComponent.js\");\n/* harmony import */ var _MyHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyHome */ \"./src/MyHome.js\");\n/* harmony import */ var _JobForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobForm */ \"./src/JobForm.js\");\n\n// inferno module\n\n\n// routing modules\n\n\n\n\n\n\nvar browserHistory = (0,history__WEBPACK_IMPORTED_MODULE_6__.createBrowserHistory)();\nfunction App(_ref) {\n  var children = _ref.children;\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"h1\", null, \"Application\", 16), children], 0);\n}\nfunction NoMatch(_ref2) {\n  var children = _ref2.children,\n    params = _ref2.params;\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, \"no match\", 16);\n}\nfunction Home(_ref3) {\n  var children = _ref3.children;\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, \"home\", 16);\n}\n\n// `children` in this case will be the `User` component\nfunction Users(_ref4) {\n  var match = _ref4.match;\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"h2\", null, \"user list\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    \"path\": match.url + '/user/:username',\n    \"component\": User\n  })], 4);\n}\nfunction User(_ref5) {\n  var match = _ref5.match;\n  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"h1\", null, JSON.stringify(match.params), 0);\n}\nvar routes = (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {\n  \"history\": browserHistory,\n  children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"div\", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, \"h1\", null, \"Application\", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Switch, {\n    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      \"exact\": true,\n      \"path\": \"/\",\n      \"component\": _MyHome__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      \"path\": \"/new_job\",\n      \"component\": _JobForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      \"path\": \"/users\",\n      \"component\": Users\n    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      \"path\": \"/my-app\",\n      \"component\": _MyApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      \"path\": \"*\",\n      \"component\": NoMatch\n    })]\n  })], 4)\n});\n(0,inferno__WEBPACK_IMPORTED_MODULE_0__.render)(routes, document.getElementById('app'));\n\n//# sourceURL=webpack://inferno-boilerplate/./src/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack://inferno-boilerplate/./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("255eb593cfd4e333b2e0")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "inferno-boilerplate:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:8080/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateinferno_boilerplate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;