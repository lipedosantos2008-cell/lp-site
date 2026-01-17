(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        r(a);
    new MutationObserver(a => {
        for (const s of a)
            if (s.type === "childList")
                for (const l of s.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(a) {
        const s = {};
        return a.integrity && (s.integrity = a.integrity),
        a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? s.credentials = "include" : a.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const s = n(a);
        fetch(a.href, s)
    }
}
)();
function Ru(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var oo = {
    exports: {}
}
  , fa = {}
  , co = {
    exports: {}
}
  , b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = Symbol.for("react.element")
  , Tu = Symbol.for("react.portal")
  , _u = Symbol.for("react.fragment")
  , Lu = Symbol.for("react.strict_mode")
  , zu = Symbol.for("react.profiler")
  , Mu = Symbol.for("react.provider")
  , Du = Symbol.for("react.context")
  , bu = Symbol.for("react.forward_ref")
  , Iu = Symbol.for("react.suspense")
  , Ou = Symbol.for("react.memo")
  , Fu = Symbol.for("react.lazy")
  , Xi = Symbol.iterator;
function $u(e) {
    return e === null || typeof e != "object" ? null : (e = Xi && e[Xi] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var uo = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , po = Object.assign
  , fo = {};
function pn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = fo,
    this.updater = n || uo
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
pn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function mo() {}
mo.prototype = pn.prototype;
function ei(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = fo,
    this.updater = n || uo
}
var ti = ei.prototype = new mo;
ti.constructor = ei;
po(ti, pn.prototype);
ti.isPureReactComponent = !0;
var Yi = Array.isArray
  , ho = Object.prototype.hasOwnProperty
  , ni = {
    current: null
}
  , xo = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function go(e, t, n) {
    var r, a = {}, s = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            ho.call(t, r) && !xo.hasOwnProperty(r) && (a[r] = t[r]);
    var o = arguments.length - 2;
    if (o === 1)
        a.children = n;
    else if (1 < o) {
        for (var c = Array(o), p = 0; p < o; p++)
            c[p] = arguments[p + 2];
        a.children = c
    }
    if (e && e.defaultProps)
        for (r in o = e.defaultProps,
        o)
            a[r] === void 0 && (a[r] = o[r]);
    return {
        $$typeof: sr,
        type: e,
        key: s,
        ref: l,
        props: a,
        _owner: ni.current
    }
}
function Au(e, t) {
    return {
        $$typeof: sr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ri(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sr
}
function Uu(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Zi = /\/+/g;
function La(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Uu("" + e.key) : t.toString(36)
}
function Lr(e, t, n, r, a) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (s) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case sr:
            case Tu:
                l = !0
            }
        }
    if (l)
        return l = e,
        a = a(l),
        e = r === "" ? "." + La(l, 0) : r,
        Yi(a) ? (n = "",
        e != null && (n = e.replace(Zi, "$&/") + "/"),
        Lr(a, t, n, "", function(p) {
            return p
        })) : a != null && (ri(a) && (a = Au(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(Zi, "$&/") + "/") + e)),
        t.push(a)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Yi(e))
        for (var o = 0; o < e.length; o++) {
            s = e[o];
            var c = r + La(s, o);
            l += Lr(s, t, n, c, a)
        }
    else if (c = $u(e),
    typeof c == "function")
        for (e = c.call(e),
        o = 0; !(s = e.next()).done; )
            s = s.value,
            c = r + La(s, o++),
            l += Lr(s, t, n, c, a);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function fr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , a = 0;
    return Lr(e, r, "", "", function(s) {
        return t.call(n, s, a++)
    }),
    r
}
function Hu(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var de = {
    current: null
}
  , zr = {
    transition: null
}
  , Vu = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: zr,
    ReactCurrentOwner: ni
};
function vo() {
    throw Error("act(...) is not supported in production builds of React.")
}
b.Children = {
    map: fr,
    forEach: function(e, t, n) {
        fr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return fr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return fr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ri(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
b.Component = pn;
b.Fragment = _u;
b.Profiler = zu;
b.PureComponent = ei;
b.StrictMode = Lu;
b.Suspense = Iu;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vu;
b.act = vo;
b.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = po({}, e.props)
      , a = e.key
      , s = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        l = ni.current),
        t.key !== void 0 && (a = "" + t.key),
        e.type && e.type.defaultProps)
            var o = e.type.defaultProps;
        for (c in t)
            ho.call(t, c) && !xo.hasOwnProperty(c) && (r[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1)
        r.children = n;
    else if (1 < c) {
        o = Array(c);
        for (var p = 0; p < c; p++)
            o[p] = arguments[p + 2];
        r.children = o
    }
    return {
        $$typeof: sr,
        type: e.type,
        key: a,
        ref: s,
        props: r,
        _owner: l
    }
}
;
b.createContext = function(e) {
    return e = {
        $$typeof: Du,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Mu,
        _context: e
    },
    e.Consumer = e
}
;
b.createElement = go;
b.createFactory = function(e) {
    var t = go.bind(null, e);
    return t.type = e,
    t
}
;
b.createRef = function() {
    return {
        current: null
    }
}
;
b.forwardRef = function(e) {
    return {
        $$typeof: bu,
        render: e
    }
}
;
b.isValidElement = ri;
b.lazy = function(e) {
    return {
        $$typeof: Fu,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Hu
    }
}
;
b.memo = function(e, t) {
    return {
        $$typeof: Ou,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
b.startTransition = function(e) {
    var t = zr.transition;
    zr.transition = {};
    try {
        e()
    } finally {
        zr.transition = t
    }
}
;
b.unstable_act = vo;
b.useCallback = function(e, t) {
    return de.current.useCallback(e, t)
}
;
b.useContext = function(e) {
    return de.current.useContext(e)
}
;
b.useDebugValue = function() {}
;
b.useDeferredValue = function(e) {
    return de.current.useDeferredValue(e)
}
;
b.useEffect = function(e, t) {
    return de.current.useEffect(e, t)
}
;
b.useId = function() {
    return de.current.useId()
}
;
b.useImperativeHandle = function(e, t, n) {
    return de.current.useImperativeHandle(e, t, n)
}
;
b.useInsertionEffect = function(e, t) {
    return de.current.useInsertionEffect(e, t)
}
;
b.useLayoutEffect = function(e, t) {
    return de.current.useLayoutEffect(e, t)
}
;
b.useMemo = function(e, t) {
    return de.current.useMemo(e, t)
}
;
b.useReducer = function(e, t, n) {
    return de.current.useReducer(e, t, n)
}
;
b.useRef = function(e) {
    return de.current.useRef(e)
}
;
b.useState = function(e) {
    return de.current.useState(e)
}
;
b.useSyncExternalStore = function(e, t, n) {
    return de.current.useSyncExternalStore(e, t, n)
}
;
b.useTransition = function() {
    return de.current.useTransition()
}
;
b.version = "18.3.1";
co.exports = b;
var T = co.exports;
const Bu = Ru(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wu = T
  , Qu = Symbol.for("react.element")
  , Ku = Symbol.for("react.fragment")
  , Gu = Object.prototype.hasOwnProperty
  , Xu = Wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Yu = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function yo(e, t, n) {
    var r, a = {}, s = null, l = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        Gu.call(t, r) && !Yu.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            a[r] === void 0 && (a[r] = t[r]);
    return {
        $$typeof: Qu,
        type: e,
        key: s,
        ref: l,
        props: a,
        _owner: Xu.current
    }
}
fa.Fragment = Ku;
fa.jsx = yo;
fa.jsxs = yo;
oo.exports = fa;
var i = oo.exports
  , rs = {}
  , wo = {
    exports: {}
}
  , Ne = {}
  , ko = {
    exports: {}
}
  , No = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, _) {
        var z = C.length;
        C.push(_);
        e: for (; 0 < z; ) {
            var G = z - 1 >>> 1
              , q = C[G];
            if (0 < a(q, _))
                C[G] = _,
                C[z] = q,
                z = G;
            else
                break e
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0]
    }
    function r(C) {
        if (C.length === 0)
            return null;
        var _ = C[0]
          , z = C.pop();
        if (z !== _) {
            C[0] = z;
            e: for (var G = 0, q = C.length, dr = q >>> 1; G < dr; ) {
                var kt = 2 * (G + 1) - 1
                  , _a = C[kt]
                  , Nt = kt + 1
                  , pr = C[Nt];
                if (0 > a(_a, z))
                    Nt < q && 0 > a(pr, _a) ? (C[G] = pr,
                    C[Nt] = z,
                    G = Nt) : (C[G] = _a,
                    C[kt] = z,
                    G = kt);
                else if (Nt < q && 0 > a(pr, z))
                    C[G] = pr,
                    C[Nt] = z,
                    G = Nt;
                else
                    break e
            }
        }
        return _
    }
    function a(C, _) {
        var z = C.sortIndex - _.sortIndex;
        return z !== 0 ? z : C.id - _.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var l = Date
          , o = l.now();
        e.unstable_now = function() {
            return l.now() - o
        }
    }
    var c = []
      , p = []
      , h = 1
      , x = null
      , m = 3
      , v = !1
      , w = !1
      , y = !1
      , L = typeof setTimeout == "function" ? setTimeout : null
      , d = typeof clearTimeout == "function" ? clearTimeout : null
      , u = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function f(C) {
        for (var _ = n(p); _ !== null; ) {
            if (_.callback === null)
                r(p);
            else if (_.startTime <= C)
                r(p),
                _.sortIndex = _.expirationTime,
                t(c, _);
            else
                break;
            _ = n(p)
        }
    }
    function g(C) {
        if (y = !1,
        f(C),
        !w)
            if (n(c) !== null)
                w = !0,
                hn(N);
            else {
                var _ = n(p);
                _ !== null && M(g, _.startTime - C)
            }
    }
    function N(C, _) {
        w = !1,
        y && (y = !1,
        d(P),
        P = -1),
        v = !0;
        var z = m;
        try {
            for (f(_),
            x = n(c); x !== null && (!(x.expirationTime > _) || C && !K()); ) {
                var G = x.callback;
                if (typeof G == "function") {
                    x.callback = null,
                    m = x.priorityLevel;
                    var q = G(x.expirationTime <= _);
                    _ = e.unstable_now(),
                    typeof q == "function" ? x.callback = q : x === n(c) && r(c),
                    f(_)
                } else
                    r(c);
                x = n(c)
            }
            if (x !== null)
                var dr = !0;
            else {
                var kt = n(p);
                kt !== null && M(g, kt.startTime - _),
                dr = !1
            }
            return dr
        } finally {
            x = null,
            m = z,
            v = !1
        }
    }
    var j = !1
      , S = null
      , P = -1
      , D = 5
      , R = -1;
    function K() {
        return !(e.unstable_now() - R < D)
    }
    function Se() {
        if (S !== null) {
            var C = e.unstable_now();
            R = C;
            var _ = !0;
            try {
                _ = S(!0, C)
            } finally {
                _ ? wt() : (j = !1,
                S = null)
            }
        } else
            j = !1
    }
    var wt;
    if (typeof u == "function")
        wt = function() {
            u(Se)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ur = new MessageChannel
          , Ta = ur.port2;
        ur.port1.onmessage = Se,
        wt = function() {
            Ta.postMessage(null)
        }
    } else
        wt = function() {
            L(Se, 0)
        }
        ;
    function hn(C) {
        S = C,
        j || (j = !0,
        wt())
    }
    function M(C, _) {
        P = L(function() {
            C(e.unstable_now())
        }, _)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(C) {
        C.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || v || (w = !0,
        hn(N))
    }
    ,
    e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < C ? Math.floor(1e3 / C) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(c)
    }
    ,
    e.unstable_next = function(C) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var _ = 3;
            break;
        default:
            _ = m
        }
        var z = m;
        m = _;
        try {
            return C()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(C, _) {
        switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            C = 3
        }
        var z = m;
        m = C;
        try {
            return _()
        } finally {
            m = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(C, _, z) {
        var G = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? G + z : G) : z = G,
        C) {
        case 1:
            var q = -1;
            break;
        case 2:
            q = 250;
            break;
        case 5:
            q = 1073741823;
            break;
        case 4:
            q = 1e4;
            break;
        default:
            q = 5e3
        }
        return q = z + q,
        C = {
            id: h++,
            callback: _,
            priorityLevel: C,
            startTime: z,
            expirationTime: q,
            sortIndex: -1
        },
        z > G ? (C.sortIndex = z,
        t(p, C),
        n(c) === null && C === n(p) && (y ? (d(P),
        P = -1) : y = !0,
        M(g, z - G))) : (C.sortIndex = q,
        t(c, C),
        w || v || (w = !0,
        hn(N))),
        C
    }
    ,
    e.unstable_shouldYield = K,
    e.unstable_wrapCallback = function(C) {
        var _ = m;
        return function() {
            var z = m;
            m = _;
            try {
                return C.apply(this, arguments)
            } finally {
                m = z
            }
        }
    }
}
)(No);
ko.exports = No;
var Zu = ko.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ju = T
  , ke = Zu;
function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var jo = new Set
  , $n = {};
function bt(e, t) {
    an(e, t),
    an(e + "Capture", t)
}
function an(e, t) {
    for ($n[e] = t,
    e = 0; e < t.length; e++)
        jo.add(t[e])
}
var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , as = Object.prototype.hasOwnProperty
  , qu = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ji = {}
  , qi = {};
function ed(e) {
    return as.call(qi, e) ? !0 : as.call(Ji, e) ? !1 : qu.test(e) ? qi[e] = !0 : (Ji[e] = !0,
    !1)
}
function td(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function nd(e, t, n, r) {
    if (t === null || typeof t > "u" || td(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function pe(e, t, n, r, a, s, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = a,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = l
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ae[e] = new pe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ae[t] = new pe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ae[e] = new pe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ae[e] = new pe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ae[e] = new pe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ae[e] = new pe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ae[e] = new pe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ae[e] = new pe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ae[e] = new pe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ai = /[\-:]([a-z])/g;
function si(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ai, si);
    ae[t] = new pe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ai, si);
    ae[t] = new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ai, si);
    ae[t] = new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ae[e] = new pe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ae.xlinkHref = new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ae[e] = new pe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ii(e, t, n, r) {
    var a = ae.hasOwnProperty(t) ? ae[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nd(t, n, a, r) && (n = null),
    r || a === null ? ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName,
    r = a.attributeNamespace,
    n === null ? e.removeAttribute(t) : (a = a.type,
    n = a === 3 || a === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Je = Ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , mr = Symbol.for("react.element")
  , Ft = Symbol.for("react.portal")
  , $t = Symbol.for("react.fragment")
  , li = Symbol.for("react.strict_mode")
  , ss = Symbol.for("react.profiler")
  , So = Symbol.for("react.provider")
  , Po = Symbol.for("react.context")
  , oi = Symbol.for("react.forward_ref")
  , is = Symbol.for("react.suspense")
  , ls = Symbol.for("react.suspense_list")
  , ci = Symbol.for("react.memo")
  , tt = Symbol.for("react.lazy")
  , Co = Symbol.for("react.offscreen")
  , el = Symbol.iterator;
function xn(e) {
    return e === null || typeof e != "object" ? null : (e = el && e[el] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var W = Object.assign, za;
function Pn(e) {
    if (za === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            za = t && t[1] || ""
        }
    return `
` + za + e
}
var Ma = !1;
function Da(e, t) {
    if (!e || Ma)
        return "";
    Ma = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (p) {
                    var r = p
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (p) {
                    r = p
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (p) {
                r = p
            }
            e()
        }
    } catch (p) {
        if (p && r && typeof p.stack == "string") {
            for (var a = p.stack.split(`
`), s = r.stack.split(`
`), l = a.length - 1, o = s.length - 1; 1 <= l && 0 <= o && a[l] !== s[o]; )
                o--;
            for (; 1 <= l && 0 <= o; l--,
            o--)
                if (a[l] !== s[o]) {
                    if (l !== 1 || o !== 1)
                        do
                            if (l--,
                            o--,
                            0 > o || a[l] !== s[o]) {
                                var c = `
` + a[l].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                c
                            }
                        while (1 <= l && 0 <= o);
                    break
                }
        }
    } finally {
        Ma = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Pn(e) : ""
}
function rd(e) {
    switch (e.tag) {
    case 5:
        return Pn(e.type);
    case 16:
        return Pn("Lazy");
    case 13:
        return Pn("Suspense");
    case 19:
        return Pn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Da(e.type, !1),
        e;
    case 11:
        return e = Da(e.type.render, !1),
        e;
    case 1:
        return e = Da(e.type, !0),
        e;
    default:
        return ""
    }
}
function os(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case $t:
        return "Fragment";
    case Ft:
        return "Portal";
    case ss:
        return "Profiler";
    case li:
        return "StrictMode";
    case is:
        return "Suspense";
    case ls:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Po:
            return (e.displayName || "Context") + ".Consumer";
        case So:
            return (e._context.displayName || "Context") + ".Provider";
        case oi:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ci:
            return t = e.displayName || null,
            t !== null ? t : os(e.type) || "Memo";
        case tt:
            t = e._payload,
            e = e._init;
            try {
                return os(e(t))
            } catch {}
        }
    return null
}
function ad(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return os(t);
    case 8:
        return t === li ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function ht(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Eo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function sd(e) {
    var t = Eo(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var a = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return a.call(this)
            },
            set: function(l) {
                r = "" + l,
                s.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function hr(e) {
    e._valueTracker || (e._valueTracker = sd(e))
}
function Ro(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Eo(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Vr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function cs(e, t) {
    var n = t.checked;
    return W({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function tl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = ht(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function To(e, t) {
    t = t.checked,
    t != null && ii(e, "checked", t, !1)
}
function us(e, t) {
    To(e, t);
    var n = ht(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ds(e, t.type, n) : t.hasOwnProperty("defaultValue") && ds(e, t.type, ht(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function nl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ds(e, t, n) {
    (t !== "number" || Vr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Cn = Array.isArray;
function Zt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var a = 0; a < n.length; a++)
            t["$" + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            a = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ht(n),
        t = null,
        a = 0; a < e.length; a++) {
            if (e[a].value === n) {
                e[a].selected = !0,
                r && (e[a].defaultSelected = !0);
                return
            }
            t !== null || e[a].disabled || (t = e[a])
        }
        t !== null && (t.selected = !0)
    }
}
function ps(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(k(91));
    return W({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function rl(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(k(92));
            if (Cn(n)) {
                if (1 < n.length)
                    throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: ht(n)
    }
}
function _o(e, t) {
    var n = ht(t.value)
      , r = ht(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function al(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Lo(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function fs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Lo(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var xr, zo = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, a)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (xr = xr || document.createElement("div"),
        xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = xr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function An(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , id = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function(e) {
    id.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Tn[t] = Tn[e]
    })
});
function Mo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px"
}
function Do(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , a = Mo(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, a) : e[n] = a
        }
}
var ld = W({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ms(e, t) {
    if (t) {
        if (ld[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(k(62))
    }
}
function hs(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var xs = null;
function ui(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var gs = null
  , Jt = null
  , qt = null;
function sl(e) {
    if (e = or(e)) {
        if (typeof gs != "function")
            throw Error(k(280));
        var t = e.stateNode;
        t && (t = va(t),
        gs(e.stateNode, e.type, t))
    }
}
function bo(e) {
    Jt ? qt ? qt.push(e) : qt = [e] : Jt = e
}
function Io() {
    if (Jt) {
        var e = Jt
          , t = qt;
        if (qt = Jt = null,
        sl(e),
        t)
            for (e = 0; e < t.length; e++)
                sl(t[e])
    }
}
function Oo(e, t) {
    return e(t)
}
function Fo() {}
var ba = !1;
function $o(e, t, n) {
    if (ba)
        return e(t, n);
    ba = !0;
    try {
        return Oo(e, t, n)
    } finally {
        ba = !1,
        (Jt !== null || qt !== null) && (Fo(),
        Io())
    }
}
function Un(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = va(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(k(231, t, typeof n));
    return n
}
var vs = !1;
if (Ge)
    try {
        var gn = {};
        Object.defineProperty(gn, "passive", {
            get: function() {
                vs = !0
            }
        }),
        window.addEventListener("test", gn, gn),
        window.removeEventListener("test", gn, gn)
    } catch {
        vs = !1
    }
function od(e, t, n, r, a, s, l, o, c) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, p)
    } catch (h) {
        this.onError(h)
    }
}
var _n = !1
  , Br = null
  , Wr = !1
  , ys = null
  , cd = {
    onError: function(e) {
        _n = !0,
        Br = e
    }
};
function ud(e, t, n, r, a, s, l, o, c) {
    _n = !1,
    Br = null,
    od.apply(cd, arguments)
}
function dd(e, t, n, r, a, s, l, o, c) {
    if (ud.apply(this, arguments),
    _n) {
        if (_n) {
            var p = Br;
            _n = !1,
            Br = null
        } else
            throw Error(k(198));
        Wr || (Wr = !0,
        ys = p)
    }
}
function It(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ao(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function il(e) {
    if (It(e) !== e)
        throw Error(k(188))
}
function pd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = It(e),
        t === null)
            throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null)
            break;
        var s = a.alternate;
        if (s === null) {
            if (r = a.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (a.child === s.child) {
            for (s = a.child; s; ) {
                if (s === n)
                    return il(a),
                    e;
                if (s === r)
                    return il(a),
                    t;
                s = s.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return)
            n = a,
            r = s;
        else {
            for (var l = !1, o = a.child; o; ) {
                if (o === n) {
                    l = !0,
                    n = a,
                    r = s;
                    break
                }
                if (o === r) {
                    l = !0,
                    r = a,
                    n = s;
                    break
                }
                o = o.sibling
            }
            if (!l) {
                for (o = s.child; o; ) {
                    if (o === n) {
                        l = !0,
                        n = s,
                        r = a;
                        break
                    }
                    if (o === r) {
                        l = !0,
                        r = s,
                        n = a;
                        break
                    }
                    o = o.sibling
                }
                if (!l)
                    throw Error(k(189))
            }
        }
        if (n.alternate !== r)
            throw Error(k(190))
    }
    if (n.tag !== 3)
        throw Error(k(188));
    return n.stateNode.current === n ? e : t
}
function Uo(e) {
    return e = pd(e),
    e !== null ? Ho(e) : null
}
function Ho(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ho(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Vo = ke.unstable_scheduleCallback
  , ll = ke.unstable_cancelCallback
  , fd = ke.unstable_shouldYield
  , md = ke.unstable_requestPaint
  , X = ke.unstable_now
  , hd = ke.unstable_getCurrentPriorityLevel
  , di = ke.unstable_ImmediatePriority
  , Bo = ke.unstable_UserBlockingPriority
  , Qr = ke.unstable_NormalPriority
  , xd = ke.unstable_LowPriority
  , Wo = ke.unstable_IdlePriority
  , ma = null
  , Ue = null;
function gd(e) {
    if (Ue && typeof Ue.onCommitFiberRoot == "function")
        try {
            Ue.onCommitFiberRoot(ma, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var be = Math.clz32 ? Math.clz32 : wd
  , vd = Math.log
  , yd = Math.LN2;
function wd(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (vd(e) / yd | 0) | 0
}
var gr = 64
  , vr = 4194304;
function En(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Kr(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , a = e.suspendedLanes
      , s = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var o = l & ~a;
        o !== 0 ? r = En(o) : (s &= l,
        s !== 0 && (r = En(s)))
    } else
        l = n & ~a,
        l !== 0 ? r = En(l) : s !== 0 && (r = En(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & a) && (a = r & -r,
    s = t & -t,
    a >= s || a === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - be(t),
            a = 1 << n,
            r |= e[n],
            t &= ~a;
    return r
}
function kd(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Nd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var l = 31 - be(s)
          , o = 1 << l
          , c = a[l];
        c === -1 ? (!(o & n) || o & r) && (a[l] = kd(o, t)) : c <= t && (e.expiredLanes |= o),
        s &= ~o
    }
}
function ws(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Qo() {
    var e = gr;
    return gr <<= 1,
    !(gr & 4194240) && (gr = 64),
    e
}
function Ia(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ir(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - be(t),
    e[t] = n
}
function jd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var a = 31 - be(n)
          , s = 1 << a;
        t[a] = 0,
        r[a] = -1,
        e[a] = -1,
        n &= ~s
    }
}
function pi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - be(n)
          , a = 1 << r;
        a & t | e[r] & t && (e[r] |= t),
        n &= ~a
    }
}
var F = 0;
function Ko(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Go, fi, Xo, Yo, Zo, ks = !1, yr = [], lt = null, ot = null, ct = null, Hn = new Map, Vn = new Map, rt = [], Sd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ol(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        lt = null;
        break;
    case "dragenter":
    case "dragleave":
        ot = null;
        break;
    case "mouseover":
    case "mouseout":
        ct = null;
        break;
    case "pointerover":
    case "pointerout":
        Hn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Vn.delete(t.pointerId)
    }
}
function vn(e, t, n, r, a, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [a]
    },
    t !== null && (t = or(t),
    t !== null && fi(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    a !== null && t.indexOf(a) === -1 && t.push(a),
    e)
}
function Pd(e, t, n, r, a) {
    switch (t) {
    case "focusin":
        return lt = vn(lt, e, t, n, r, a),
        !0;
    case "dragenter":
        return ot = vn(ot, e, t, n, r, a),
        !0;
    case "mouseover":
        return ct = vn(ct, e, t, n, r, a),
        !0;
    case "pointerover":
        var s = a.pointerId;
        return Hn.set(s, vn(Hn.get(s) || null, e, t, n, r, a)),
        !0;
    case "gotpointercapture":
        return s = a.pointerId,
        Vn.set(s, vn(Vn.get(s) || null, e, t, n, r, a)),
        !0
    }
    return !1
}
function Jo(e) {
    var t = Pt(e.target);
    if (t !== null) {
        var n = It(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ao(n),
                t !== null) {
                    e.blockedOn = t,
                    Zo(e.priority, function() {
                        Xo(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Mr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ns(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            xs = r,
            n.target.dispatchEvent(r),
            xs = null
        } else
            return t = or(n),
            t !== null && fi(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function cl(e, t, n) {
    Mr(e) && n.delete(t)
}
function Cd() {
    ks = !1,
    lt !== null && Mr(lt) && (lt = null),
    ot !== null && Mr(ot) && (ot = null),
    ct !== null && Mr(ct) && (ct = null),
    Hn.forEach(cl),
    Vn.forEach(cl)
}
function yn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ks || (ks = !0,
    ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Cd)))
}
function Bn(e) {
    function t(a) {
        return yn(a, e)
    }
    if (0 < yr.length) {
        yn(yr[0], e);
        for (var n = 1; n < yr.length; n++) {
            var r = yr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && yn(lt, e),
    ot !== null && yn(ot, e),
    ct !== null && yn(ct, e),
    Hn.forEach(t),
    Vn.forEach(t),
    n = 0; n < rt.length; n++)
        r = rt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < rt.length && (n = rt[0],
    n.blockedOn === null); )
        Jo(n),
        n.blockedOn === null && rt.shift()
}
var en = Je.ReactCurrentBatchConfig
  , Gr = !0;
function Ed(e, t, n, r) {
    var a = F
      , s = en.transition;
    en.transition = null;
    try {
        F = 1,
        mi(e, t, n, r)
    } finally {
        F = a,
        en.transition = s
    }
}
function Rd(e, t, n, r) {
    var a = F
      , s = en.transition;
    en.transition = null;
    try {
        F = 4,
        mi(e, t, n, r)
    } finally {
        F = a,
        en.transition = s
    }
}
function mi(e, t, n, r) {
    if (Gr) {
        var a = Ns(e, t, n, r);
        if (a === null)
            Qa(e, t, r, Xr, n),
            ol(e, r);
        else if (Pd(a, e, t, n, r))
            r.stopPropagation();
        else if (ol(e, r),
        t & 4 && -1 < Sd.indexOf(e)) {
            for (; a !== null; ) {
                var s = or(a);
                if (s !== null && Go(s),
                s = Ns(e, t, n, r),
                s === null && Qa(e, t, r, Xr, n),
                s === a)
                    break;
                a = s
            }
            a !== null && r.stopPropagation()
        } else
            Qa(e, t, r, null, n)
    }
}
var Xr = null;
function Ns(e, t, n, r) {
    if (Xr = null,
    e = ui(r),
    e = Pt(e),
    e !== null)
        if (t = It(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ao(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Xr = e,
    null
}
function qo(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (hd()) {
        case di:
            return 1;
        case Bo:
            return 4;
        case Qr:
        case xd:
            return 16;
        case Wo:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var st = null
  , hi = null
  , Dr = null;
function ec() {
    if (Dr)
        return Dr;
    var e, t = hi, n = t.length, r, a = "value"in st ? st.value : st.textContent, s = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === a[s - r]; r++)
        ;
    return Dr = a.slice(e, 1 < r ? 1 - r : void 0)
}
function br(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function wr() {
    return !0
}
function ul() {
    return !1
}
function je(e) {
    function t(n, r, a, s, l) {
        this._reactName = n,
        this._targetInst = a,
        this.type = r,
        this.nativeEvent = s,
        this.target = l,
        this.currentTarget = null;
        for (var o in e)
            e.hasOwnProperty(o) && (n = e[o],
            this[o] = n ? n(s) : s[o]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wr : ul,
        this.isPropagationStopped = ul,
        this
    }
    return W(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = wr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = wr)
        },
        persist: function() {},
        isPersistent: wr
    }),
    t
}
var fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, xi = je(fn), lr = W({}, fn, {
    view: 0,
    detail: 0
}), Td = je(lr), Oa, Fa, wn, ha = W({}, lr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Oa = e.screenX - wn.screenX,
        Fa = e.screenY - wn.screenY) : Fa = Oa = 0,
        wn = e),
        Oa)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Fa
    }
}), dl = je(ha), _d = W({}, ha, {
    dataTransfer: 0
}), Ld = je(_d), zd = W({}, lr, {
    relatedTarget: 0
}), $a = je(zd), Md = W({}, fn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Dd = je(Md), bd = W({}, fn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Id = je(bd), Od = W({}, fn, {
    data: 0
}), pl = je(Od), Fd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, $d = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Ad = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Ud(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ad[e]) ? !!t[e] : !1
}
function gi() {
    return Ud
}
var Hd = W({}, lr, {
    key: function(e) {
        if (e.key) {
            var t = Fd[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = br(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $d[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gi,
    charCode: function(e) {
        return e.type === "keypress" ? br(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Vd = je(Hd)
  , Bd = W({}, ha, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , fl = je(Bd)
  , Wd = W({}, lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gi
})
  , Qd = je(Wd)
  , Kd = W({}, fn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Gd = je(Kd)
  , Xd = W({}, ha, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Yd = je(Xd)
  , Zd = [9, 13, 27, 32]
  , vi = Ge && "CompositionEvent"in window
  , Ln = null;
Ge && "documentMode"in document && (Ln = document.documentMode);
var Jd = Ge && "TextEvent"in window && !Ln
  , tc = Ge && (!vi || Ln && 8 < Ln && 11 >= Ln)
  , ml = " "
  , hl = !1;
function nc(e, t) {
    switch (e) {
    case "keyup":
        return Zd.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function rc(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var At = !1;
function qd(e, t) {
    switch (e) {
    case "compositionend":
        return rc(t);
    case "keypress":
        return t.which !== 32 ? null : (hl = !0,
        ml);
    case "textInput":
        return e = t.data,
        e === ml && hl ? null : e;
    default:
        return null
    }
}
function ep(e, t) {
    if (At)
        return e === "compositionend" || !vi && nc(e, t) ? (e = ec(),
        Dr = hi = st = null,
        At = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return tc && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var tp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function xl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tp[e.type] : t === "textarea"
}
function ac(e, t, n, r) {
    bo(r),
    t = Yr(t, "onChange"),
    0 < t.length && (n = new xi("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var zn = null
  , Wn = null;
function np(e) {
    hc(e, 0)
}
function xa(e) {
    var t = Vt(e);
    if (Ro(t))
        return e
}
function rp(e, t) {
    if (e === "change")
        return t
}
var sc = !1;
if (Ge) {
    var Aa;
    if (Ge) {
        var Ua = "oninput"in document;
        if (!Ua) {
            var gl = document.createElement("div");
            gl.setAttribute("oninput", "return;"),
            Ua = typeof gl.oninput == "function"
        }
        Aa = Ua
    } else
        Aa = !1;
    sc = Aa && (!document.documentMode || 9 < document.documentMode)
}
function vl() {
    zn && (zn.detachEvent("onpropertychange", ic),
    Wn = zn = null)
}
function ic(e) {
    if (e.propertyName === "value" && xa(Wn)) {
        var t = [];
        ac(t, Wn, e, ui(e)),
        $o(np, t)
    }
}
function ap(e, t, n) {
    e === "focusin" ? (vl(),
    zn = t,
    Wn = n,
    zn.attachEvent("onpropertychange", ic)) : e === "focusout" && vl()
}
function sp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return xa(Wn)
}
function ip(e, t) {
    if (e === "click")
        return xa(t)
}
function lp(e, t) {
    if (e === "input" || e === "change")
        return xa(t)
}
function op(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : op;
function Qn(e, t) {
    if (Oe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!as.call(t, a) || !Oe(e[a], t[a]))
            return !1
    }
    return !0
}
function yl(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function wl(e, t) {
    var n = yl(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = yl(n)
    }
}
function lc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function oc() {
    for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Vr(e.document)
    }
    return t
}
function yi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function cp(e) {
    var t = oc()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && lc(n.ownerDocument.documentElement, n)) {
        if (r !== null && yi(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var a = n.textContent.length
                  , s = Math.min(r.start, a);
                r = r.end === void 0 ? s : Math.min(r.end, a),
                !e.extend && s > r && (a = r,
                r = s,
                s = a),
                a = wl(n, s);
                var l = wl(n, r);
                a && l && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(a.node, a.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var up = Ge && "documentMode"in document && 11 >= document.documentMode
  , Ut = null
  , js = null
  , Mn = null
  , Ss = !1;
function kl(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ss || Ut == null || Ut !== Vr(r) || (r = Ut,
    "selectionStart"in r && yi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Mn && Qn(Mn, r) || (Mn = r,
    r = Yr(js, "onSelect"),
    0 < r.length && (t = new xi("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ut)))
}
function kr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ht = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd")
}
  , Ha = {}
  , cc = {};
Ge && (cc = document.createElement("div").style,
"AnimationEvent"in window || (delete Ht.animationend.animation,
delete Ht.animationiteration.animation,
delete Ht.animationstart.animation),
"TransitionEvent"in window || delete Ht.transitionend.transition);
function ga(e) {
    if (Ha[e])
        return Ha[e];
    if (!Ht[e])
        return e;
    var t = Ht[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in cc)
            return Ha[e] = t[n];
    return e
}
var uc = ga("animationend")
  , dc = ga("animationiteration")
  , pc = ga("animationstart")
  , fc = ga("transitionend")
  , mc = new Map
  , Nl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gt(e, t) {
    mc.set(e, t),
    bt(t, [e])
}
for (var Va = 0; Va < Nl.length; Va++) {
    var Ba = Nl[Va]
      , dp = Ba.toLowerCase()
      , pp = Ba[0].toUpperCase() + Ba.slice(1);
    gt(dp, "on" + pp)
}
gt(uc, "onAnimationEnd");
gt(dc, "onAnimationIteration");
gt(pc, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(fc, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , fp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function jl(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    dd(r, t, void 0, e),
    e.currentTarget = null
}
function hc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , a = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var o = r[l]
                      , c = o.instance
                      , p = o.currentTarget;
                    if (o = o.listener,
                    c !== s && a.isPropagationStopped())
                        break e;
                    jl(a, o, p),
                    s = c
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (o = r[l],
                    c = o.instance,
                    p = o.currentTarget,
                    o = o.listener,
                    c !== s && a.isPropagationStopped())
                        break e;
                    jl(a, o, p),
                    s = c
                }
        }
    }
    if (Wr)
        throw e = ys,
        Wr = !1,
        ys = null,
        e
}
function A(e, t) {
    var n = t[Ts];
    n === void 0 && (n = t[Ts] = new Set);
    var r = e + "__bubble";
    n.has(r) || (xc(t, e, 2, !1),
    n.add(r))
}
function Wa(e, t, n) {
    var r = 0;
    t && (r |= 4),
    xc(n, e, r, t)
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
    if (!e[Nr]) {
        e[Nr] = !0,
        jo.forEach(function(n) {
            n !== "selectionchange" && (fp.has(n) || Wa(n, !1, e),
            Wa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Nr] || (t[Nr] = !0,
        Wa("selectionchange", !1, t))
    }
}
function xc(e, t, n, r) {
    switch (qo(t)) {
    case 1:
        var a = Ed;
        break;
    case 4:
        a = Rd;
        break;
    default:
        a = mi
    }
    n = a.bind(null, t, n, e),
    a = void 0,
    !vs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0),
    r ? a !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
        passive: a
    }) : e.addEventListener(t, n, !1)
}
function Qa(e, t, n, r, a) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var o = r.stateNode.containerInfo;
                if (o === a || o.nodeType === 8 && o.parentNode === a)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var c = l.tag;
                        if ((c === 3 || c === 4) && (c = l.stateNode.containerInfo,
                        c === a || c.nodeType === 8 && c.parentNode === a))
                            return;
                        l = l.return
                    }
                for (; o !== null; ) {
                    if (l = Pt(o),
                    l === null)
                        return;
                    if (c = l.tag,
                    c === 5 || c === 6) {
                        r = s = l;
                        continue e
                    }
                    o = o.parentNode
                }
            }
            r = r.return
        }
    $o(function() {
        var p = s
          , h = ui(n)
          , x = [];
        e: {
            var m = mc.get(e);
            if (m !== void 0) {
                var v = xi
                  , w = e;
                switch (e) {
                case "keypress":
                    if (br(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Vd;
                    break;
                case "focusin":
                    w = "focus",
                    v = $a;
                    break;
                case "focusout":
                    w = "blur",
                    v = $a;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = $a;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = dl;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Ld;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Qd;
                    break;
                case uc:
                case dc:
                case pc:
                    v = Dd;
                    break;
                case fc:
                    v = Gd;
                    break;
                case "scroll":
                    v = Td;
                    break;
                case "wheel":
                    v = Yd;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Id;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = fl
                }
                var y = (t & 4) !== 0
                  , L = !y && e === "scroll"
                  , d = y ? m !== null ? m + "Capture" : null : m;
                y = [];
                for (var u = p, f; u !== null; ) {
                    f = u;
                    var g = f.stateNode;
                    if (f.tag === 5 && g !== null && (f = g,
                    d !== null && (g = Un(u, d),
                    g != null && y.push(Gn(u, g, f)))),
                    L)
                        break;
                    u = u.return
                }
                0 < y.length && (m = new v(m,w,null,n,h),
                x.push({
                    event: m,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                m && n !== xs && (w = n.relatedTarget || n.fromElement) && (Pt(w) || w[Xe]))
                    break e;
                if ((v || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window,
                v ? (w = n.relatedTarget || n.toElement,
                v = p,
                w = w ? Pt(w) : null,
                w !== null && (L = It(w),
                w !== L || w.tag !== 5 && w.tag !== 6) && (w = null)) : (v = null,
                w = p),
                v !== w)) {
                    if (y = dl,
                    g = "onMouseLeave",
                    d = "onMouseEnter",
                    u = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = fl,
                    g = "onPointerLeave",
                    d = "onPointerEnter",
                    u = "pointer"),
                    L = v == null ? m : Vt(v),
                    f = w == null ? m : Vt(w),
                    m = new y(g,u + "leave",v,n,h),
                    m.target = L,
                    m.relatedTarget = f,
                    g = null,
                    Pt(h) === p && (y = new y(d,u + "enter",w,n,h),
                    y.target = f,
                    y.relatedTarget = L,
                    g = y),
                    L = g,
                    v && w)
                        t: {
                            for (y = v,
                            d = w,
                            u = 0,
                            f = y; f; f = Ot(f))
                                u++;
                            for (f = 0,
                            g = d; g; g = Ot(g))
                                f++;
                            for (; 0 < u - f; )
                                y = Ot(y),
                                u--;
                            for (; 0 < f - u; )
                                d = Ot(d),
                                f--;
                            for (; u--; ) {
                                if (y === d || d !== null && y === d.alternate)
                                    break t;
                                y = Ot(y),
                                d = Ot(d)
                            }
                            y = null
                        }
                    else
                        y = null;
                    v !== null && Sl(x, m, v, y, !1),
                    w !== null && L !== null && Sl(x, L, w, y, !0)
                }
            }
            e: {
                if (m = p ? Vt(p) : window,
                v = m.nodeName && m.nodeName.toLowerCase(),
                v === "select" || v === "input" && m.type === "file")
                    var N = rp;
                else if (xl(m))
                    if (sc)
                        N = lp;
                    else {
                        N = sp;
                        var j = ap
                    }
                else
                    (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = ip);
                if (N && (N = N(e, p))) {
                    ac(x, N, n, h);
                    break e
                }
                j && j(e, m, p),
                e === "focusout" && (j = m._wrapperState) && j.controlled && m.type === "number" && ds(m, "number", m.value)
            }
            switch (j = p ? Vt(p) : window,
            e) {
            case "focusin":
                (xl(j) || j.contentEditable === "true") && (Ut = j,
                js = p,
                Mn = null);
                break;
            case "focusout":
                Mn = js = Ut = null;
                break;
            case "mousedown":
                Ss = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ss = !1,
                kl(x, n, h);
                break;
            case "selectionchange":
                if (up)
                    break;
            case "keydown":
            case "keyup":
                kl(x, n, h)
            }
            var S;
            if (vi)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                At ? nc(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (tc && n.locale !== "ko" && (At || P !== "onCompositionStart" ? P === "onCompositionEnd" && At && (S = ec()) : (st = h,
            hi = "value"in st ? st.value : st.textContent,
            At = !0)),
            j = Yr(p, P),
            0 < j.length && (P = new pl(P,e,null,n,h),
            x.push({
                event: P,
                listeners: j
            }),
            S ? P.data = S : (S = rc(n),
            S !== null && (P.data = S)))),
            (S = Jd ? qd(e, n) : ep(e, n)) && (p = Yr(p, "onBeforeInput"),
            0 < p.length && (h = new pl("onBeforeInput","beforeinput",null,n,h),
            x.push({
                event: h,
                listeners: p
            }),
            h.data = S))
        }
        hc(x, t)
    })
}
function Gn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Yr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var a = e
          , s = a.stateNode;
        a.tag === 5 && s !== null && (a = s,
        s = Un(e, n),
        s != null && r.unshift(Gn(e, s, a)),
        s = Un(e, t),
        s != null && r.push(Gn(e, s, a))),
        e = e.return
    }
    return r
}
function Ot(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Sl(e, t, n, r, a) {
    for (var s = t._reactName, l = []; n !== null && n !== r; ) {
        var o = n
          , c = o.alternate
          , p = o.stateNode;
        if (c !== null && c === r)
            break;
        o.tag === 5 && p !== null && (o = p,
        a ? (c = Un(n, s),
        c != null && l.unshift(Gn(n, c, o))) : a || (c = Un(n, s),
        c != null && l.push(Gn(n, c, o)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var mp = /\r\n?/g
  , hp = /\u0000|\uFFFD/g;
function Pl(e) {
    return (typeof e == "string" ? e : "" + e).replace(mp, `
`).replace(hp, "")
}
function jr(e, t, n) {
    if (t = Pl(t),
    Pl(e) !== t && n)
        throw Error(k(425))
}
function Zr() {}
var Ps = null
  , Cs = null;
function Es(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Rs = typeof setTimeout == "function" ? setTimeout : void 0
  , xp = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Cl = typeof Promise == "function" ? Promise : void 0
  , gp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cl < "u" ? function(e) {
    return Cl.resolve(null).then(e).catch(vp)
}
: Rs;
function vp(e) {
    setTimeout(function() {
        throw e
    })
}
function Ka(e, t) {
    var n = t
      , r = 0;
    do {
        var a = n.nextSibling;
        if (e.removeChild(n),
        a && a.nodeType === 8)
            if (n = a.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(a),
                    Bn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = a
    } while (n);
    Bn(t)
}
function ut(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function El(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var mn = Math.random().toString(36).slice(2)
  , Ae = "__reactFiber$" + mn
  , Xn = "__reactProps$" + mn
  , Xe = "__reactContainer$" + mn
  , Ts = "__reactEvents$" + mn
  , yp = "__reactListeners$" + mn
  , wp = "__reactHandles$" + mn;
function Pt(e) {
    var t = e[Ae];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Xe] || n[Ae]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = El(e); e !== null; ) {
                    if (n = e[Ae])
                        return n;
                    e = El(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function or(e) {
    return e = e[Ae] || e[Xe],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Vt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(k(33))
}
function va(e) {
    return e[Xn] || null
}
var _s = []
  , Bt = -1;
function vt(e) {
    return {
        current: e
    }
}
function U(e) {
    0 > Bt || (e.current = _s[Bt],
    _s[Bt] = null,
    Bt--)
}
function $(e, t) {
    Bt++,
    _s[Bt] = e.current,
    e.current = t
}
var xt = {}
  , oe = vt(xt)
  , he = vt(!1)
  , _t = xt;
function sn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, s;
    for (s in n)
        a[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = a),
    a
}
function xe(e) {
    return e = e.childContextTypes,
    e != null
}
function Jr() {
    U(he),
    U(oe)
}
function Rl(e, t, n) {
    if (oe.current !== xt)
        throw Error(k(168));
    $(oe, t),
    $(he, n)
}
function gc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var a in r)
        if (!(a in t))
            throw Error(k(108, ad(e) || "Unknown", a));
    return W({}, n, r)
}
function qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt,
    _t = oe.current,
    $(oe, e),
    $(he, he.current),
    !0
}
function Tl(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(k(169));
    n ? (e = gc(e, t, _t),
    r.__reactInternalMemoizedMergedChildContext = e,
    U(he),
    U(oe),
    $(oe, e)) : U(he),
    $(he, n)
}
var Be = null
  , ya = !1
  , Ga = !1;
function vc(e) {
    Be === null ? Be = [e] : Be.push(e)
}
function kp(e) {
    ya = !0,
    vc(e)
}
function yt() {
    if (!Ga && Be !== null) {
        Ga = !0;
        var e = 0
          , t = F;
        try {
            var n = Be;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Be = null,
            ya = !1
        } catch (a) {
            throw Be !== null && (Be = Be.slice(e + 1)),
            Vo(di, yt),
            a
        } finally {
            F = t,
            Ga = !1
        }
    }
    return null
}
var Wt = []
  , Qt = 0
  , ea = null
  , ta = 0
  , Pe = []
  , Ce = 0
  , Lt = null
  , We = 1
  , Qe = "";
function jt(e, t) {
    Wt[Qt++] = ta,
    Wt[Qt++] = ea,
    ea = e,
    ta = t
}
function yc(e, t, n) {
    Pe[Ce++] = We,
    Pe[Ce++] = Qe,
    Pe[Ce++] = Lt,
    Lt = e;
    var r = We;
    e = Qe;
    var a = 32 - be(r) - 1;
    r &= ~(1 << a),
    n += 1;
    var s = 32 - be(t) + a;
    if (30 < s) {
        var l = a - a % 5;
        s = (r & (1 << l) - 1).toString(32),
        r >>= l,
        a -= l,
        We = 1 << 32 - be(t) + a | n << a | r,
        Qe = s + e
    } else
        We = 1 << s | n << a | r,
        Qe = e
}
function wi(e) {
    e.return !== null && (jt(e, 1),
    yc(e, 1, 0))
}
function ki(e) {
    for (; e === ea; )
        ea = Wt[--Qt],
        Wt[Qt] = null,
        ta = Wt[--Qt],
        Wt[Qt] = null;
    for (; e === Lt; )
        Lt = Pe[--Ce],
        Pe[Ce] = null,
        Qe = Pe[--Ce],
        Pe[Ce] = null,
        We = Pe[--Ce],
        Pe[Ce] = null
}
var we = null
  , ye = null
  , H = !1
  , De = null;
function wc(e, t) {
    var n = Ee(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function _l(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        we = e,
        ye = ut(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        we = e,
        ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Lt !== null ? {
            id: We,
            overflow: Qe
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ee(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        we = e,
        ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ls(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function zs(e) {
    if (H) {
        var t = ye;
        if (t) {
            var n = t;
            if (!_l(e, t)) {
                if (Ls(e))
                    throw Error(k(418));
                t = ut(n.nextSibling);
                var r = we;
                t && _l(e, t) ? wc(r, n) : (e.flags = e.flags & -4097 | 2,
                H = !1,
                we = e)
            }
        } else {
            if (Ls(e))
                throw Error(k(418));
            e.flags = e.flags & -4097 | 2,
            H = !1,
            we = e
        }
    }
}
function Ll(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    we = e
}
function Sr(e) {
    if (e !== we)
        return !1;
    if (!H)
        return Ll(e),
        H = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Es(e.type, e.memoizedProps)),
    t && (t = ye)) {
        if (Ls(e))
            throw kc(),
            Error(k(418));
        for (; t; )
            wc(e, t),
            t = ut(t.nextSibling)
    }
    if (Ll(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(k(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ye = ut(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ye = null
        }
    } else
        ye = we ? ut(e.stateNode.nextSibling) : null;
    return !0
}
function kc() {
    for (var e = ye; e; )
        e = ut(e.nextSibling)
}
function ln() {
    ye = we = null,
    H = !1
}
function Ni(e) {
    De === null ? De = [e] : De.push(e)
}
var Np = Je.ReactCurrentBatchConfig;
function kn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(k(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(k(147, e));
            var a = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(l) {
                var o = a.refs;
                l === null ? delete o[s] : o[s] = l
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(k(284));
        if (!n._owner)
            throw Error(k(290, e))
    }
    return e
}
function Pr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function zl(e) {
    var t = e._init;
    return t(e._payload)
}
function Nc(e) {
    function t(d, u) {
        if (e) {
            var f = d.deletions;
            f === null ? (d.deletions = [u],
            d.flags |= 16) : f.push(u)
        }
    }
    function n(d, u) {
        if (!e)
            return null;
        for (; u !== null; )
            t(d, u),
            u = u.sibling;
        return null
    }
    function r(d, u) {
        for (d = new Map; u !== null; )
            u.key !== null ? d.set(u.key, u) : d.set(u.index, u),
            u = u.sibling;
        return d
    }
    function a(d, u) {
        return d = mt(d, u),
        d.index = 0,
        d.sibling = null,
        d
    }
    function s(d, u, f) {
        return d.index = f,
        e ? (f = d.alternate,
        f !== null ? (f = f.index,
        f < u ? (d.flags |= 2,
        u) : f) : (d.flags |= 2,
        u)) : (d.flags |= 1048576,
        u)
    }
    function l(d) {
        return e && d.alternate === null && (d.flags |= 2),
        d
    }
    function o(d, u, f, g) {
        return u === null || u.tag !== 6 ? (u = ts(f, d.mode, g),
        u.return = d,
        u) : (u = a(u, f),
        u.return = d,
        u)
    }
    function c(d, u, f, g) {
        var N = f.type;
        return N === $t ? h(d, u, f.props.children, g, f.key) : u !== null && (u.elementType === N || typeof N == "object" && N !== null && N.$$typeof === tt && zl(N) === u.type) ? (g = a(u, f.props),
        g.ref = kn(d, u, f),
        g.return = d,
        g) : (g = Hr(f.type, f.key, f.props, null, d.mode, g),
        g.ref = kn(d, u, f),
        g.return = d,
        g)
    }
    function p(d, u, f, g) {
        return u === null || u.tag !== 4 || u.stateNode.containerInfo !== f.containerInfo || u.stateNode.implementation !== f.implementation ? (u = ns(f, d.mode, g),
        u.return = d,
        u) : (u = a(u, f.children || []),
        u.return = d,
        u)
    }
    function h(d, u, f, g, N) {
        return u === null || u.tag !== 7 ? (u = Tt(f, d.mode, g, N),
        u.return = d,
        u) : (u = a(u, f),
        u.return = d,
        u)
    }
    function x(d, u, f) {
        if (typeof u == "string" && u !== "" || typeof u == "number")
            return u = ts("" + u, d.mode, f),
            u.return = d,
            u;
        if (typeof u == "object" && u !== null) {
            switch (u.$$typeof) {
            case mr:
                return f = Hr(u.type, u.key, u.props, null, d.mode, f),
                f.ref = kn(d, null, u),
                f.return = d,
                f;
            case Ft:
                return u = ns(u, d.mode, f),
                u.return = d,
                u;
            case tt:
                var g = u._init;
                return x(d, g(u._payload), f)
            }
            if (Cn(u) || xn(u))
                return u = Tt(u, d.mode, f, null),
                u.return = d,
                u;
            Pr(d, u)
        }
        return null
    }
    function m(d, u, f, g) {
        var N = u !== null ? u.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return N !== null ? null : o(d, u, "" + f, g);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case mr:
                return f.key === N ? c(d, u, f, g) : null;
            case Ft:
                return f.key === N ? p(d, u, f, g) : null;
            case tt:
                return N = f._init,
                m(d, u, N(f._payload), g)
            }
            if (Cn(f) || xn(f))
                return N !== null ? null : h(d, u, f, g, null);
            Pr(d, f)
        }
        return null
    }
    function v(d, u, f, g, N) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return d = d.get(f) || null,
            o(u, d, "" + g, N);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case mr:
                return d = d.get(g.key === null ? f : g.key) || null,
                c(u, d, g, N);
            case Ft:
                return d = d.get(g.key === null ? f : g.key) || null,
                p(u, d, g, N);
            case tt:
                var j = g._init;
                return v(d, u, f, j(g._payload), N)
            }
            if (Cn(g) || xn(g))
                return d = d.get(f) || null,
                h(u, d, g, N, null);
            Pr(u, g)
        }
        return null
    }
    function w(d, u, f, g) {
        for (var N = null, j = null, S = u, P = u = 0, D = null; S !== null && P < f.length; P++) {
            S.index > P ? (D = S,
            S = null) : D = S.sibling;
            var R = m(d, S, f[P], g);
            if (R === null) {
                S === null && (S = D);
                break
            }
            e && S && R.alternate === null && t(d, S),
            u = s(R, u, P),
            j === null ? N = R : j.sibling = R,
            j = R,
            S = D
        }
        if (P === f.length)
            return n(d, S),
            H && jt(d, P),
            N;
        if (S === null) {
            for (; P < f.length; P++)
                S = x(d, f[P], g),
                S !== null && (u = s(S, u, P),
                j === null ? N = S : j.sibling = S,
                j = S);
            return H && jt(d, P),
            N
        }
        for (S = r(d, S); P < f.length; P++)
            D = v(S, d, P, f[P], g),
            D !== null && (e && D.alternate !== null && S.delete(D.key === null ? P : D.key),
            u = s(D, u, P),
            j === null ? N = D : j.sibling = D,
            j = D);
        return e && S.forEach(function(K) {
            return t(d, K)
        }),
        H && jt(d, P),
        N
    }
    function y(d, u, f, g) {
        var N = xn(f);
        if (typeof N != "function")
            throw Error(k(150));
        if (f = N.call(f),
        f == null)
            throw Error(k(151));
        for (var j = N = null, S = u, P = u = 0, D = null, R = f.next(); S !== null && !R.done; P++,
        R = f.next()) {
            S.index > P ? (D = S,
            S = null) : D = S.sibling;
            var K = m(d, S, R.value, g);
            if (K === null) {
                S === null && (S = D);
                break
            }
            e && S && K.alternate === null && t(d, S),
            u = s(K, u, P),
            j === null ? N = K : j.sibling = K,
            j = K,
            S = D
        }
        if (R.done)
            return n(d, S),
            H && jt(d, P),
            N;
        if (S === null) {
            for (; !R.done; P++,
            R = f.next())
                R = x(d, R.value, g),
                R !== null && (u = s(R, u, P),
                j === null ? N = R : j.sibling = R,
                j = R);
            return H && jt(d, P),
            N
        }
        for (S = r(d, S); !R.done; P++,
        R = f.next())
            R = v(S, d, P, R.value, g),
            R !== null && (e && R.alternate !== null && S.delete(R.key === null ? P : R.key),
            u = s(R, u, P),
            j === null ? N = R : j.sibling = R,
            j = R);
        return e && S.forEach(function(Se) {
            return t(d, Se)
        }),
        H && jt(d, P),
        N
    }
    function L(d, u, f, g) {
        if (typeof f == "object" && f !== null && f.type === $t && f.key === null && (f = f.props.children),
        typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case mr:
                e: {
                    for (var N = f.key, j = u; j !== null; ) {
                        if (j.key === N) {
                            if (N = f.type,
                            N === $t) {
                                if (j.tag === 7) {
                                    n(d, j.sibling),
                                    u = a(j, f.props.children),
                                    u.return = d,
                                    d = u;
                                    break e
                                }
                            } else if (j.elementType === N || typeof N == "object" && N !== null && N.$$typeof === tt && zl(N) === j.type) {
                                n(d, j.sibling),
                                u = a(j, f.props),
                                u.ref = kn(d, j, f),
                                u.return = d,
                                d = u;
                                break e
                            }
                            n(d, j);
                            break
                        } else
                            t(d, j);
                        j = j.sibling
                    }
                    f.type === $t ? (u = Tt(f.props.children, d.mode, g, f.key),
                    u.return = d,
                    d = u) : (g = Hr(f.type, f.key, f.props, null, d.mode, g),
                    g.ref = kn(d, u, f),
                    g.return = d,
                    d = g)
                }
                return l(d);
            case Ft:
                e: {
                    for (j = f.key; u !== null; ) {
                        if (u.key === j)
                            if (u.tag === 4 && u.stateNode.containerInfo === f.containerInfo && u.stateNode.implementation === f.implementation) {
                                n(d, u.sibling),
                                u = a(u, f.children || []),
                                u.return = d,
                                d = u;
                                break e
                            } else {
                                n(d, u);
                                break
                            }
                        else
                            t(d, u);
                        u = u.sibling
                    }
                    u = ns(f, d.mode, g),
                    u.return = d,
                    d = u
                }
                return l(d);
            case tt:
                return j = f._init,
                L(d, u, j(f._payload), g)
            }
            if (Cn(f))
                return w(d, u, f, g);
            if (xn(f))
                return y(d, u, f, g);
            Pr(d, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f,
        u !== null && u.tag === 6 ? (n(d, u.sibling),
        u = a(u, f),
        u.return = d,
        d = u) : (n(d, u),
        u = ts(f, d.mode, g),
        u.return = d,
        d = u),
        l(d)) : n(d, u)
    }
    return L
}
var on = Nc(!0)
  , jc = Nc(!1)
  , na = vt(null)
  , ra = null
  , Kt = null
  , ji = null;
function Si() {
    ji = Kt = ra = null
}
function Pi(e) {
    var t = na.current;
    U(na),
    e._currentValue = t
}
function Ms(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function tn(e, t) {
    ra = e,
    ji = Kt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (me = !0),
    e.firstContext = null)
}
function Te(e) {
    var t = e._currentValue;
    if (ji !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Kt === null) {
            if (ra === null)
                throw Error(k(308));
            Kt = e,
            ra.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Kt = Kt.next = e;
    return t
}
var Ct = null;
function Ci(e) {
    Ct === null ? Ct = [e] : Ct.push(e)
}
function Sc(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n,
    Ci(t)) : (n.next = a.next,
    a.next = n),
    t.interleaved = n,
    Ye(e, r)
}
function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var nt = !1;
function Ei(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Pc(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ke(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function dt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    O & 2) {
        var a = r.pending;
        return a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        r.pending = t,
        Ye(e, n)
    }
    return a = r.interleaved,
    a === null ? (t.next = t,
    Ci(r)) : (t.next = a.next,
    a.next = t),
    r.interleaved = t,
    Ye(e, n)
}
function Ir(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pi(e, n)
    }
}
function Ml(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var a = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? a = s = l : s = s.next = l,
                n = n.next
            } while (n !== null);
            s === null ? a = s = t : s = s.next = t
        } else
            a = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function aa(e, t, n, r) {
    var a = e.updateQueue;
    nt = !1;
    var s = a.firstBaseUpdate
      , l = a.lastBaseUpdate
      , o = a.shared.pending;
    if (o !== null) {
        a.shared.pending = null;
        var c = o
          , p = c.next;
        c.next = null,
        l === null ? s = p : l.next = p,
        l = c;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        o = h.lastBaseUpdate,
        o !== l && (o === null ? h.firstBaseUpdate = p : o.next = p,
        h.lastBaseUpdate = c))
    }
    if (s !== null) {
        var x = a.baseState;
        l = 0,
        h = p = c = null,
        o = s;
        do {
            var m = o.lane
              , v = o.eventTime;
            if ((r & m) === m) {
                h !== null && (h = h.next = {
                    eventTime: v,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                e: {
                    var w = e
                      , y = o;
                    switch (m = t,
                    v = n,
                    y.tag) {
                    case 1:
                        if (w = y.payload,
                        typeof w == "function") {
                            x = w.call(v, x, m);
                            break e
                        }
                        x = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = y.payload,
                        m = typeof w == "function" ? w.call(v, x, m) : w,
                        m == null)
                            break e;
                        x = W({}, x, m);
                        break e;
                    case 2:
                        nt = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (e.flags |= 64,
                m = a.effects,
                m === null ? a.effects = [o] : m.push(o))
            } else
                v = {
                    eventTime: v,
                    lane: m,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                },
                h === null ? (p = h = v,
                c = x) : h = h.next = v,
                l |= m;
            if (o = o.next,
            o === null) {
                if (o = a.shared.pending,
                o === null)
                    break;
                m = o,
                o = m.next,
                m.next = null,
                a.lastBaseUpdate = m,
                a.shared.pending = null
            }
        } while (!0);
        if (h === null && (c = x),
        a.baseState = c,
        a.firstBaseUpdate = p,
        a.lastBaseUpdate = h,
        t = a.shared.interleaved,
        t !== null) {
            a = t;
            do
                l |= a.lane,
                a = a.next;
            while (a !== t)
        } else
            s === null && (a.shared.lanes = 0);
        Mt |= l,
        e.lanes = l,
        e.memoizedState = x
    }
}
function Dl(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , a = r.callback;
            if (a !== null) {
                if (r.callback = null,
                r = n,
                typeof a != "function")
                    throw Error(k(191, a));
                a.call(r)
            }
        }
}
var cr = {}
  , He = vt(cr)
  , Yn = vt(cr)
  , Zn = vt(cr);
function Et(e) {
    if (e === cr)
        throw Error(k(174));
    return e
}
function Ri(e, t) {
    switch ($(Zn, t),
    $(Yn, e),
    $(He, cr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : fs(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = fs(t, e)
    }
    U(He),
    $(He, t)
}
function cn() {
    U(He),
    U(Yn),
    U(Zn)
}
function Cc(e) {
    Et(Zn.current);
    var t = Et(He.current)
      , n = fs(t, e.type);
    t !== n && ($(Yn, e),
    $(He, n))
}
function Ti(e) {
    Yn.current === e && (U(He),
    U(Yn))
}
var V = vt(0);
function sa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Xa = [];
function _i() {
    for (var e = 0; e < Xa.length; e++)
        Xa[e]._workInProgressVersionPrimary = null;
    Xa.length = 0
}
var Or = Je.ReactCurrentDispatcher
  , Ya = Je.ReactCurrentBatchConfig
  , zt = 0
  , B = null
  , Z = null
  , ee = null
  , ia = !1
  , Dn = !1
  , Jn = 0
  , jp = 0;
function se() {
    throw Error(k(321))
}
function Li(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n]))
            return !1;
    return !0
}
function zi(e, t, n, r, a, s) {
    if (zt = s,
    B = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Or.current = e === null || e.memoizedState === null ? Ep : Rp,
    e = n(r, a),
    Dn) {
        s = 0;
        do {
            if (Dn = !1,
            Jn = 0,
            25 <= s)
                throw Error(k(301));
            s += 1,
            ee = Z = null,
            t.updateQueue = null,
            Or.current = Tp,
            e = n(r, a)
        } while (Dn)
    }
    if (Or.current = la,
    t = Z !== null && Z.next !== null,
    zt = 0,
    ee = Z = B = null,
    ia = !1,
    t)
        throw Error(k(300));
    return e
}
function Mi() {
    var e = Jn !== 0;
    return Jn = 0,
    e
}
function $e() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ee === null ? B.memoizedState = ee = e : ee = ee.next = e,
    ee
}
function _e() {
    if (Z === null) {
        var e = B.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Z.next;
    var t = ee === null ? B.memoizedState : ee.next;
    if (t !== null)
        ee = t,
        Z = e;
    else {
        if (e === null)
            throw Error(k(310));
        Z = e,
        e = {
            memoizedState: Z.memoizedState,
            baseState: Z.baseState,
            baseQueue: Z.baseQueue,
            queue: Z.queue,
            next: null
        },
        ee === null ? B.memoizedState = ee = e : ee = ee.next = e
    }
    return ee
}
function qn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Za(e) {
    var t = _e()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = Z
      , a = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (a !== null) {
            var l = a.next;
            a.next = s.next,
            s.next = l
        }
        r.baseQueue = a = s,
        n.pending = null
    }
    if (a !== null) {
        s = a.next,
        r = r.baseState;
        var o = l = null
          , c = null
          , p = s;
        do {
            var h = p.lane;
            if ((zt & h) === h)
                c !== null && (c = c.next = {
                    lane: 0,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null
                }),
                r = p.hasEagerState ? p.eagerState : e(r, p.action);
            else {
                var x = {
                    lane: h,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null
                };
                c === null ? (o = c = x,
                l = r) : c = c.next = x,
                B.lanes |= h,
                Mt |= h
            }
            p = p.next
        } while (p !== null && p !== s);
        c === null ? l = r : c.next = o,
        Oe(r, t.memoizedState) || (me = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = c,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        a = e;
        do
            s = a.lane,
            B.lanes |= s,
            Mt |= s,
            a = a.next;
        while (a !== e)
    } else
        a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ja(e) {
    var t = _e()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , a = n.pending
      , s = t.memoizedState;
    if (a !== null) {
        n.pending = null;
        var l = a = a.next;
        do
            s = e(s, l.action),
            l = l.next;
        while (l !== a);
        Oe(s, t.memoizedState) || (me = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Ec() {}
function Rc(e, t) {
    var n = B
      , r = _e()
      , a = t()
      , s = !Oe(r.memoizedState, a);
    if (s && (r.memoizedState = a,
    me = !0),
    r = r.queue,
    Di(Lc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || ee !== null && ee.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        er(9, _c.bind(null, n, r, a, t), void 0, null),
        te === null)
            throw Error(k(349));
        zt & 30 || Tc(n, t, a)
    }
    return a
}
function Tc(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = B.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    B.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function _c(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    zc(t) && Mc(e)
}
function Lc(e, t, n) {
    return n(function() {
        zc(t) && Mc(e)
    })
}
function zc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}
function Mc(e) {
    var t = Ye(e, 1);
    t !== null && Ie(t, e, 1, -1)
}
function bl(e) {
    var t = $e();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Cp.bind(null, B, e),
    [t.memoizedState, e]
}
function er(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = B.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    B.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Dc() {
    return _e().memoizedState
}
function Fr(e, t, n, r) {
    var a = $e();
    B.flags |= e,
    a.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r)
}
function wa(e, t, n, r) {
    var a = _e();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Z !== null) {
        var l = Z.memoizedState;
        if (s = l.destroy,
        r !== null && Li(r, l.deps)) {
            a.memoizedState = er(t, n, s, r);
            return
        }
    }
    B.flags |= e,
    a.memoizedState = er(1 | t, n, s, r)
}
function Il(e, t) {
    return Fr(8390656, 8, e, t)
}
function Di(e, t) {
    return wa(2048, 8, e, t)
}
function bc(e, t) {
    return wa(4, 2, e, t)
}
function Ic(e, t) {
    return wa(4, 4, e, t)
}
function Oc(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Fc(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    wa(4, 4, Oc.bind(null, t, e), n)
}
function bi() {}
function $c(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Li(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Ac(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Li(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Uc(e, t, n) {
    return zt & 21 ? (Oe(n, t) || (n = Qo(),
    B.lanes |= n,
    Mt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    me = !0),
    e.memoizedState = n)
}
function Sp(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ya.transition;
    Ya.transition = {};
    try {
        e(!1),
        t()
    } finally {
        F = n,
        Ya.transition = r
    }
}
function Hc() {
    return _e().memoizedState
}
function Pp(e, t, n) {
    var r = ft(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Vc(e))
        Bc(t, n);
    else if (n = Sc(e, t, n, r),
    n !== null) {
        var a = ue();
        Ie(n, e, r, a),
        Wc(n, t, r)
    }
}
function Cp(e, t, n) {
    var r = ft(e)
      , a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Vc(e))
        Bc(t, a);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var l = t.lastRenderedState
                  , o = s(l, n);
                if (a.hasEagerState = !0,
                a.eagerState = o,
                Oe(o, l)) {
                    var c = t.interleaved;
                    c === null ? (a.next = a,
                    Ci(t)) : (a.next = c.next,
                    c.next = a),
                    t.interleaved = a;
                    return
                }
            } catch {} finally {}
        n = Sc(e, t, a, r),
        n !== null && (a = ue(),
        Ie(n, e, r, a),
        Wc(n, t, r))
    }
}
function Vc(e) {
    var t = e.alternate;
    return e === B || t !== null && t === B
}
function Bc(e, t) {
    Dn = ia = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Wc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        pi(e, n)
    }
}
var la = {
    readContext: Te,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1
}
  , Ep = {
    readContext: Te,
    useCallback: function(e, t) {
        return $e().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Te,
    useEffect: Il,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Fr(4194308, 4, Oc.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Fr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Fr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = $e();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = $e();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Pp.bind(null, B, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = $e();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: bl,
    useDebugValue: bi,
    useDeferredValue: function(e) {
        return $e().memoizedState = e
    },
    useTransition: function() {
        var e = bl(!1)
          , t = e[0];
        return e = Sp.bind(null, e[1]),
        $e().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = B
          , a = $e();
        if (H) {
            if (n === void 0)
                throw Error(k(407));
            n = n()
        } else {
            if (n = t(),
            te === null)
                throw Error(k(349));
            zt & 30 || Tc(r, t, n)
        }
        a.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return a.queue = s,
        Il(Lc.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        er(9, _c.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = $e()
          , t = te.identifierPrefix;
        if (H) {
            var n = Qe
              , r = We;
            n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Jn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = jp++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Rp = {
    readContext: Te,
    useCallback: $c,
    useContext: Te,
    useEffect: Di,
    useImperativeHandle: Fc,
    useInsertionEffect: bc,
    useLayoutEffect: Ic,
    useMemo: Ac,
    useReducer: Za,
    useRef: Dc,
    useState: function() {
        return Za(qn)
    },
    useDebugValue: bi,
    useDeferredValue: function(e) {
        var t = _e();
        return Uc(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = Za(qn)[0]
          , t = _e().memoizedState;
        return [e, t]
    },
    useMutableSource: Ec,
    useSyncExternalStore: Rc,
    useId: Hc,
    unstable_isNewReconciler: !1
}
  , Tp = {
    readContext: Te,
    useCallback: $c,
    useContext: Te,
    useEffect: Di,
    useImperativeHandle: Fc,
    useInsertionEffect: bc,
    useLayoutEffect: Ic,
    useMemo: Ac,
    useReducer: Ja,
    useRef: Dc,
    useState: function() {
        return Ja(qn)
    },
    useDebugValue: bi,
    useDeferredValue: function(e) {
        var t = _e();
        return Z === null ? t.memoizedState = e : Uc(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = Ja(qn)[0]
          , t = _e().memoizedState;
        return [e, t]
    },
    useMutableSource: Ec,
    useSyncExternalStore: Rc,
    useId: Hc,
    unstable_isNewReconciler: !1
};
function ze(e, t) {
    if (e && e.defaultProps) {
        t = W({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ds(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : W({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ka = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? It(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , a = ft(e)
          , s = Ke(r, a);
        s.payload = t,
        n != null && (s.callback = n),
        t = dt(e, s, a),
        t !== null && (Ie(t, e, a, r),
        Ir(t, e, a))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue()
          , a = ft(e)
          , s = Ke(r, a);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = dt(e, s, a),
        t !== null && (Ie(t, e, a, r),
        Ir(t, e, a))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue()
          , r = ft(e)
          , a = Ke(n, r);
        a.tag = 2,
        t != null && (a.callback = t),
        t = dt(e, a, r),
        t !== null && (Ie(t, e, r, n),
        Ir(t, e, r))
    }
};
function Ol(e, t, n, r, a, s, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, l) : t.prototype && t.prototype.isPureReactComponent ? !Qn(n, r) || !Qn(a, s) : !0
}
function Qc(e, t, n) {
    var r = !1
      , a = xt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Te(s) : (a = xe(t) ? _t : oe.current,
    r = t.contextTypes,
    s = (r = r != null) ? sn(e, a) : xt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ka,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = a,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Fl(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ka.enqueueReplaceState(t, t.state, null)
}
function bs(e, t, n, r) {
    var a = e.stateNode;
    a.props = n,
    a.state = e.memoizedState,
    a.refs = {},
    Ei(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? a.context = Te(s) : (s = xe(t) ? _t : oe.current,
    a.context = sn(e, s)),
    a.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Ds(e, t, s, n),
    a.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state,
    typeof a.componentWillMount == "function" && a.componentWillMount(),
    typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
    t !== a.state && ka.enqueueReplaceState(a, a.state, null),
    aa(e, n, a, r),
    a.state = e.memoizedState),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308)
}
function un(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += rd(r),
            r = r.return;
        while (r);
        var a = n
    } catch (s) {
        a = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: a,
        digest: null
    }
}
function qa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Is(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var _p = typeof WeakMap == "function" ? WeakMap : Map;
function Kc(e, t, n) {
    n = Ke(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ca || (ca = !0,
        Qs = r),
        Is(e, t)
    }
    ,
    n
}
function Gc(e, t, n) {
    n = Ke(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var a = t.value;
        n.payload = function() {
            return r(a)
        }
        ,
        n.callback = function() {
            Is(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Is(e, t),
        typeof r != "function" && (pt === null ? pt = new Set([this]) : pt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function $l(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new _p;
        var a = new Set;
        r.set(t, a)
    } else
        a = r.get(t),
        a === void 0 && (a = new Set,
        r.set(t, a));
    a.has(n) || (a.add(n),
    e = Bp.bind(null, e, t, n),
    t.then(e, e))
}
function Al(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ul(e, t, n, r, a) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = a,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1),
    t.tag = 2,
    dt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Lp = Je.ReactCurrentOwner
  , me = !1;
function ce(e, t, n, r) {
    t.child = e === null ? jc(t, null, n, r) : on(t, e.child, n, r)
}
function Hl(e, t, n, r, a) {
    n = n.render;
    var s = t.ref;
    return tn(t, a),
    r = zi(e, t, n, r, s, a),
    n = Mi(),
    e !== null && !me ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~a,
    Ze(e, t, a)) : (H && n && wi(t),
    t.flags |= 1,
    ce(e, t, r, a),
    t.child)
}
function Vl(e, t, n, r, a) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Vi(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Xc(e, t, s, r, a)) : (e = Hr(n.type, null, r, t, t.mode, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & a)) {
        var l = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Qn,
        n(l, r) && e.ref === t.ref)
            return Ze(e, t, a)
    }
    return t.flags |= 1,
    e = mt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Xc(e, t, n, r, a) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Qn(s, r) && e.ref === t.ref)
            if (me = !1,
            t.pendingProps = r = s,
            (e.lanes & a) !== 0)
                e.flags & 131072 && (me = !0);
            else
                return t.lanes = e.lanes,
                Ze(e, t, a)
    }
    return Os(e, t, n, r, a)
}
function Yc(e, t, n) {
    var r = t.pendingProps
      , a = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            $(Xt, ve),
            ve |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                $(Xt, ve),
                ve |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            $(Xt, ve),
            ve |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        $(Xt, ve),
        ve |= r;
    return ce(e, t, a, n),
    t.child
}
function Zc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Os(e, t, n, r, a) {
    var s = xe(n) ? _t : oe.current;
    return s = sn(t, s),
    tn(t, a),
    n = zi(e, t, n, r, s, a),
    r = Mi(),
    e !== null && !me ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~a,
    Ze(e, t, a)) : (H && r && wi(t),
    t.flags |= 1,
    ce(e, t, n, a),
    t.child)
}
function Bl(e, t, n, r, a) {
    if (xe(n)) {
        var s = !0;
        qr(t)
    } else
        s = !1;
    if (tn(t, a),
    t.stateNode === null)
        $r(e, t),
        Qc(t, n, r),
        bs(t, n, r, a),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , o = t.memoizedProps;
        l.props = o;
        var c = l.context
          , p = n.contextType;
        typeof p == "object" && p !== null ? p = Te(p) : (p = xe(n) ? _t : oe.current,
        p = sn(t, p));
        var h = n.getDerivedStateFromProps
          , x = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        x || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== r || c !== p) && Fl(t, l, r, p),
        nt = !1;
        var m = t.memoizedState;
        l.state = m,
        aa(t, r, l, a),
        c = t.memoizedState,
        o !== r || m !== c || he.current || nt ? (typeof h == "function" && (Ds(t, n, h, r),
        c = t.memoizedState),
        (o = nt || Ol(t, n, o, r, m, c, p)) ? (x || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = c),
        l.props = r,
        l.state = c,
        l.context = p,
        r = o) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Pc(e, t),
        o = t.memoizedProps,
        p = t.type === t.elementType ? o : ze(t.type, o),
        l.props = p,
        x = t.pendingProps,
        m = l.context,
        c = n.contextType,
        typeof c == "object" && c !== null ? c = Te(c) : (c = xe(n) ? _t : oe.current,
        c = sn(t, c));
        var v = n.getDerivedStateFromProps;
        (h = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== x || m !== c) && Fl(t, l, r, c),
        nt = !1,
        m = t.memoizedState,
        l.state = m,
        aa(t, r, l, a);
        var w = t.memoizedState;
        o !== x || m !== w || he.current || nt ? (typeof v == "function" && (Ds(t, n, v, r),
        w = t.memoizedState),
        (p = nt || Ol(t, n, p, r, m, w, c) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, c),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, c)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        l.props = r,
        l.state = w,
        l.context = c,
        r = p) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Fs(e, t, n, r, s, a)
}
function Fs(e, t, n, r, a, s) {
    Zc(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return a && Tl(t, n, !1),
        Ze(e, t, s);
    r = t.stateNode,
    Lp.current = t;
    var o = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = on(t, e.child, null, s),
    t.child = on(t, null, o, s)) : ce(e, t, o, s),
    t.memoizedState = r.state,
    a && Tl(t, n, !0),
    t.child
}
function Jc(e) {
    var t = e.stateNode;
    t.pendingContext ? Rl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rl(e, t.context, !1),
    Ri(e, t.containerInfo)
}
function Wl(e, t, n, r, a) {
    return ln(),
    Ni(a),
    t.flags |= 256,
    ce(e, t, n, r),
    t.child
}
var $s = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function As(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function qc(e, t, n) {
    var r = t.pendingProps, a = V.current, s = !1, l = (t.flags & 128) !== 0, o;
    if ((o = l) || (o = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    o ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1),
    $(V, a & 1),
    e === null)
        return zs(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = l) : s = Sa(l, r, 0, null),
        e = Tt(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = As(n),
        t.memoizedState = $s,
        e) : Ii(t, l));
    if (a = e.memoizedState,
    a !== null && (o = a.dehydrated,
    o !== null))
        return zp(e, t, l, r, o, a, n);
    if (s) {
        s = r.fallback,
        l = t.mode,
        a = e.child,
        o = a.sibling;
        var c = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== a ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = c,
        t.deletions = null) : (r = mt(a, c),
        r.subtreeFlags = a.subtreeFlags & 14680064),
        o !== null ? s = mt(o, s) : (s = Tt(s, l, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        l = e.child.memoizedState,
        l = l === null ? As(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        s.memoizedState = l,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = $s,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = mt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ii(e, t) {
    return t = Sa({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Cr(e, t, n, r) {
    return r !== null && Ni(r),
    on(t, e.child, null, n),
    e = Ii(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function zp(e, t, n, r, a, s, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = qa(Error(k(422))),
        Cr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        a = t.mode,
        r = Sa({
            mode: "visible",
            children: r.children
        }, a, 0, null),
        s = Tt(s, a, l, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && on(t, e.child, null, l),
        t.child.memoizedState = As(l),
        t.memoizedState = $s,
        s);
    if (!(t.mode & 1))
        return Cr(e, t, l, null);
    if (a.data === "$!") {
        if (r = a.nextSibling && a.nextSibling.dataset,
        r)
            var o = r.dgst;
        return r = o,
        s = Error(k(419)),
        r = qa(s, r, void 0),
        Cr(e, t, l, r)
    }
    if (o = (l & e.childLanes) !== 0,
    me || o) {
        if (r = te,
        r !== null) {
            switch (l & -l) {
            case 4:
                a = 2;
                break;
            case 16:
                a = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                a = 32;
                break;
            case 536870912:
                a = 268435456;
                break;
            default:
                a = 0
            }
            a = a & (r.suspendedLanes | l) ? 0 : a,
            a !== 0 && a !== s.retryLane && (s.retryLane = a,
            Ye(e, a),
            Ie(r, e, a, -1))
        }
        return Hi(),
        r = qa(Error(k(421))),
        Cr(e, t, l, r)
    }
    return a.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Wp.bind(null, e),
    a._reactRetry = t,
    null) : (e = s.treeContext,
    ye = ut(a.nextSibling),
    we = t,
    H = !0,
    De = null,
    e !== null && (Pe[Ce++] = We,
    Pe[Ce++] = Qe,
    Pe[Ce++] = Lt,
    We = e.id,
    Qe = e.overflow,
    Lt = t),
    t = Ii(t, r.children),
    t.flags |= 4096,
    t)
}
function Ql(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ms(e.return, t, n)
}
function es(e, t, n, r, a) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = a)
}
function eu(e, t, n) {
    var r = t.pendingProps
      , a = r.revealOrder
      , s = r.tail;
    if (ce(e, t, r.children, n),
    r = V.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ql(e, n, t);
                else if (e.tag === 19)
                    Ql(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if ($(V, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (a) {
        case "forwards":
            for (n = t.child,
            a = null; n !== null; )
                e = n.alternate,
                e !== null && sa(e) === null && (a = n),
                n = n.sibling;
            n = a,
            n === null ? (a = t.child,
            t.child = null) : (a = n.sibling,
            n.sibling = null),
            es(t, !1, a, n, s);
            break;
        case "backwards":
            for (n = null,
            a = t.child,
            t.child = null; a !== null; ) {
                if (e = a.alternate,
                e !== null && sa(e) === null) {
                    t.child = a;
                    break
                }
                e = a.sibling,
                a.sibling = n,
                n = a,
                a = e
            }
            es(t, !0, n, null, s);
            break;
        case "together":
            es(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function $r(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ze(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Mt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child,
        n = mt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = mt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Mp(e, t, n) {
    switch (t.tag) {
    case 3:
        Jc(t),
        ln();
        break;
    case 5:
        Cc(t);
        break;
    case 1:
        xe(t.type) && qr(t);
        break;
    case 4:
        Ri(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , a = t.memoizedProps.value;
        $(na, r._currentValue),
        r._currentValue = a;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? ($(V, V.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? qc(e, t, n) : ($(V, V.current & 1),
            e = Ze(e, t, n),
            e !== null ? e.sibling : null);
        $(V, V.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return eu(e, t, n);
            t.flags |= 128
        }
        if (a = t.memoizedState,
        a !== null && (a.rendering = null,
        a.tail = null,
        a.lastEffect = null),
        $(V, V.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Yc(e, t, n)
    }
    return Ze(e, t, n)
}
var tu, Us, nu, ru;
tu = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Us = function() {}
;
nu = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
        e = t.stateNode,
        Et(He.current);
        var s = null;
        switch (n) {
        case "input":
            a = cs(e, a),
            r = cs(e, r),
            s = [];
            break;
        case "select":
            a = W({}, a, {
                value: void 0
            }),
            r = W({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            a = ps(e, a),
            r = ps(e, r),
            s = [];
            break;
        default:
            typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zr)
        }
        ms(n, r);
        var l;
        n = null;
        for (p in a)
            if (!r.hasOwnProperty(p) && a.hasOwnProperty(p) && a[p] != null)
                if (p === "style") {
                    var o = a[p];
                    for (l in o)
                        o.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && ($n.hasOwnProperty(p) ? s || (s = []) : (s = s || []).push(p, null));
        for (p in r) {
            var c = r[p];
            if (o = a != null ? a[p] : void 0,
            r.hasOwnProperty(p) && c !== o && (c != null || o != null))
                if (p === "style")
                    if (o) {
                        for (l in o)
                            !o.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in c)
                            c.hasOwnProperty(l) && o[l] !== c[l] && (n || (n = {}),
                            n[l] = c[l])
                    } else
                        n || (s || (s = []),
                        s.push(p, n)),
                        n = c;
                else
                    p === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                    o = o ? o.__html : void 0,
                    c != null && o !== c && (s = s || []).push(p, c)) : p === "children" ? typeof c != "string" && typeof c != "number" || (s = s || []).push(p, "" + c) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && ($n.hasOwnProperty(p) ? (c != null && p === "onScroll" && A("scroll", e),
                    s || o === c || (s = [])) : (s = s || []).push(p, c))
        }
        n && (s = s || []).push("style", n);
        var p = s;
        (t.updateQueue = p) && (t.flags |= 4)
    }
}
;
ru = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Nn(e, t) {
    if (!H)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var a = e.child; a !== null; )
            n |= a.lanes | a.childLanes,
            r |= a.subtreeFlags & 14680064,
            r |= a.flags & 14680064,
            a.return = e,
            a = a.sibling;
    else
        for (a = e.child; a !== null; )
            n |= a.lanes | a.childLanes,
            r |= a.subtreeFlags,
            r |= a.flags,
            a.return = e,
            a = a.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Dp(e, t, n) {
    var r = t.pendingProps;
    switch (ki(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ie(t),
        null;
    case 1:
        return xe(t.type) && Jr(),
        ie(t),
        null;
    case 3:
        return r = t.stateNode,
        cn(),
        U(he),
        U(oe),
        _i(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Sr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        De !== null && (Xs(De),
        De = null))),
        Us(e, t),
        ie(t),
        null;
    case 5:
        Ti(t);
        var a = Et(Zn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            nu(e, t, n, r, a),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(k(166));
                return ie(t),
                null
            }
            if (e = Et(He.current),
            Sr(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Ae] = t,
                r[Xn] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    A("cancel", r),
                    A("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    A("load", r);
                    break;
                case "video":
                case "audio":
                    for (a = 0; a < Rn.length; a++)
                        A(Rn[a], r);
                    break;
                case "source":
                    A("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    A("error", r),
                    A("load", r);
                    break;
                case "details":
                    A("toggle", r);
                    break;
                case "input":
                    tl(r, s),
                    A("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    A("invalid", r);
                    break;
                case "textarea":
                    rl(r, s),
                    A("invalid", r)
                }
                ms(n, s),
                a = null;
                for (var l in s)
                    if (s.hasOwnProperty(l)) {
                        var o = s[l];
                        l === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && jr(r.textContent, o, e),
                        a = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && jr(r.textContent, o, e),
                        a = ["children", "" + o]) : $n.hasOwnProperty(l) && o != null && l === "onScroll" && A("scroll", r)
                    }
                switch (n) {
                case "input":
                    hr(r),
                    nl(r, s, !0);
                    break;
                case "textarea":
                    hr(r),
                    al(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Zr)
                }
                r = a,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = a.nodeType === 9 ? a : a.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Lo(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[Ae] = t,
                e[Xn] = r,
                tu(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = hs(n, r),
                    n) {
                    case "dialog":
                        A("cancel", e),
                        A("close", e),
                        a = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        A("load", e),
                        a = r;
                        break;
                    case "video":
                    case "audio":
                        for (a = 0; a < Rn.length; a++)
                            A(Rn[a], e);
                        a = r;
                        break;
                    case "source":
                        A("error", e),
                        a = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        A("error", e),
                        A("load", e),
                        a = r;
                        break;
                    case "details":
                        A("toggle", e),
                        a = r;
                        break;
                    case "input":
                        tl(e, r),
                        a = cs(e, r),
                        A("invalid", e);
                        break;
                    case "option":
                        a = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        a = W({}, r, {
                            value: void 0
                        }),
                        A("invalid", e);
                        break;
                    case "textarea":
                        rl(e, r),
                        a = ps(e, r),
                        A("invalid", e);
                        break;
                    default:
                        a = r
                    }
                    ms(n, a),
                    o = a;
                    for (s in o)
                        if (o.hasOwnProperty(s)) {
                            var c = o[s];
                            s === "style" ? Do(e, c) : s === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                            c != null && zo(e, c)) : s === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && An(e, c) : typeof c == "number" && An(e, "" + c) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && ($n.hasOwnProperty(s) ? c != null && s === "onScroll" && A("scroll", e) : c != null && ii(e, s, c, l))
                        }
                    switch (n) {
                    case "input":
                        hr(e),
                        nl(e, r, !1);
                        break;
                    case "textarea":
                        hr(e),
                        al(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + ht(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Zt(e, !!r.multiple, s, !1) : r.defaultValue != null && Zt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof a.onClick == "function" && (e.onclick = Zr)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ie(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ru(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(k(166));
            if (n = Et(Zn.current),
            Et(He.current),
            Sr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ae] = t,
                (s = r.nodeValue !== n) && (e = we,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        jr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ae] = t,
                t.stateNode = r
        }
        return ie(t),
        null;
    case 13:
        if (U(V),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (H && ye !== null && t.mode & 1 && !(t.flags & 128))
                kc(),
                ln(),
                t.flags |= 98560,
                s = !1;
            else if (s = Sr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(k(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(k(317));
                    s[Ae] = t
                } else
                    ln(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ie(t),
                s = !1
            } else
                De !== null && (Xs(De),
                De = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || V.current & 1 ? J === 0 && (J = 3) : Hi())),
        t.updateQueue !== null && (t.flags |= 4),
        ie(t),
        null);
    case 4:
        return cn(),
        Us(e, t),
        e === null && Kn(t.stateNode.containerInfo),
        ie(t),
        null;
    case 10:
        return Pi(t.type._context),
        ie(t),
        null;
    case 17:
        return xe(t.type) && Jr(),
        ie(t),
        null;
    case 19:
        if (U(V),
        s = t.memoizedState,
        s === null)
            return ie(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = s.rendering,
        l === null)
            if (r)
                Nn(s, !1);
            else {
                if (J !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = sa(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Nn(s, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                l = s.alternate,
                                l === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = l.childLanes,
                                s.lanes = l.lanes,
                                s.child = l.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = l.memoizedProps,
                                s.memoizedState = l.memoizedState,
                                s.updateQueue = l.updateQueue,
                                s.type = l.type,
                                e = l.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return $(V, V.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && X() > dn && (t.flags |= 128,
                r = !0,
                Nn(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = sa(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Nn(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !l.alternate && !H)
                        return ie(t),
                        null
                } else
                    2 * X() - s.renderingStartTime > dn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Nn(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = s.last,
            n !== null ? n.sibling = l : t.child = l,
            s.last = l)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = X(),
        t.sibling = null,
        n = V.current,
        $(V, r ? n & 1 | 2 : n & 1),
        t) : (ie(t),
        null);
    case 22:
    case 23:
        return Ui(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ve & 1073741824 && (ie(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(k(156, t.tag))
}
function bp(e, t) {
    switch (ki(t),
    t.tag) {
    case 1:
        return xe(t.type) && Jr(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return cn(),
        U(he),
        U(oe),
        _i(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ti(t),
        null;
    case 13:
        if (U(V),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(k(340));
            ln()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return U(V),
        null;
    case 4:
        return cn(),
        null;
    case 10:
        return Pi(t.type._context),
        null;
    case 22:
    case 23:
        return Ui(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Er = !1
  , le = !1
  , Ip = typeof WeakSet == "function" ? WeakSet : Set
  , E = null;
function Gt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Q(e, t, r)
            }
        else
            n.current = null
}
function Hs(e, t, n) {
    try {
        n()
    } catch (r) {
        Q(e, t, r)
    }
}
var Kl = !1;
function Op(e, t) {
    if (Ps = Gr,
    e = oc(),
    yi(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var a = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , o = -1
                      , c = -1
                      , p = 0
                      , h = 0
                      , x = e
                      , m = null;
                    t: for (; ; ) {
                        for (var v; x !== n || a !== 0 && x.nodeType !== 3 || (o = l + a),
                        x !== s || r !== 0 && x.nodeType !== 3 || (c = l + r),
                        x.nodeType === 3 && (l += x.nodeValue.length),
                        (v = x.firstChild) !== null; )
                            m = x,
                            x = v;
                        for (; ; ) {
                            if (x === e)
                                break t;
                            if (m === n && ++p === a && (o = l),
                            m === s && ++h === r && (c = l),
                            (v = x.nextSibling) !== null)
                                break;
                            x = m,
                            m = x.parentNode
                        }
                        x = v
                    }
                    n = o === -1 || c === -1 ? null : {
                        start: o,
                        end: c
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Cs = {
        focusedElem: e,
        selectionRange: n
    },
    Gr = !1,
    E = t; E !== null; )
        if (t = E,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            E = e;
        else
            for (; E !== null; ) {
                t = E;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var y = w.memoizedProps
                                  , L = w.memoizedState
                                  , d = t.stateNode
                                  , u = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ze(t.type, y), L);
                                d.__reactInternalSnapshotBeforeUpdate = u
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                        }
                } catch (g) {
                    Q(t, t.return, g)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    E = e;
                    break
                }
                E = t.return
            }
    return w = Kl,
    Kl = !1,
    w
}
function bn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var a = r = r.next;
        do {
            if ((a.tag & e) === e) {
                var s = a.destroy;
                a.destroy = void 0,
                s !== void 0 && Hs(t, n, s)
            }
            a = a.next
        } while (a !== r)
    }
}
function Na(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Vs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function au(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    au(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ae],
    delete t[Xn],
    delete t[Ts],
    delete t[yp],
    delete t[wp])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function su(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Gl(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || su(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Zr));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bs(e, t, n),
        e = e.sibling; e !== null; )
            Bs(e, t, n),
            e = e.sibling
}
function Ws(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ws(e, t, n),
        e = e.sibling; e !== null; )
            Ws(e, t, n),
            e = e.sibling
}
var ne = null
  , Me = !1;
function qe(e, t, n) {
    for (n = n.child; n !== null; )
        iu(e, t, n),
        n = n.sibling
}
function iu(e, t, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
        try {
            Ue.onCommitFiberUnmount(ma, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Gt(n, t);
    case 6:
        var r = ne
          , a = Me;
        ne = null,
        qe(e, t, n),
        ne = r,
        Me = a,
        ne !== null && (Me ? (e = ne,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
        break;
    case 18:
        ne !== null && (Me ? (e = ne,
        n = n.stateNode,
        e.nodeType === 8 ? Ka(e.parentNode, n) : e.nodeType === 1 && Ka(e, n),
        Bn(e)) : Ka(ne, n.stateNode));
        break;
    case 4:
        r = ne,
        a = Me,
        ne = n.stateNode.containerInfo,
        Me = !0,
        qe(e, t, n),
        ne = r,
        Me = a;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            a = r = r.next;
            do {
                var s = a
                  , l = s.destroy;
                s = s.tag,
                l !== void 0 && (s & 2 || s & 4) && Hs(n, t, l),
                a = a.next
            } while (a !== r)
        }
        qe(e, t, n);
        break;
    case 1:
        if (!le && (Gt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (o) {
                Q(n, t, o)
            }
        qe(e, t, n);
        break;
    case 21:
        qe(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        qe(e, t, n),
        le = r) : qe(e, t, n);
        break;
    default:
        qe(e, t, n)
    }
}
function Xl(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ip),
        t.forEach(function(r) {
            var a = Qp.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(a, a))
        })
    }
}
function Le(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
                var s = e
                  , l = t
                  , o = l;
                e: for (; o !== null; ) {
                    switch (o.tag) {
                    case 5:
                        ne = o.stateNode,
                        Me = !1;
                        break e;
                    case 3:
                        ne = o.stateNode.containerInfo,
                        Me = !0;
                        break e;
                    case 4:
                        ne = o.stateNode.containerInfo,
                        Me = !0;
                        break e
                    }
                    o = o.return
                }
                if (ne === null)
                    throw Error(k(160));
                iu(s, l, a),
                ne = null,
                Me = !1;
                var c = a.alternate;
                c !== null && (c.return = null),
                a.return = null
            } catch (p) {
                Q(a, t, p)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            lu(t, e),
            t = t.sibling
}
function lu(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Le(t, e),
        Fe(e),
        r & 4) {
            try {
                bn(3, e, e.return),
                Na(3, e)
            } catch (y) {
                Q(e, e.return, y)
            }
            try {
                bn(5, e, e.return)
            } catch (y) {
                Q(e, e.return, y)
            }
        }
        break;
    case 1:
        Le(t, e),
        Fe(e),
        r & 512 && n !== null && Gt(n, n.return);
        break;
    case 5:
        if (Le(t, e),
        Fe(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32) {
            var a = e.stateNode;
            try {
                An(a, "")
            } catch (y) {
                Q(e, e.return, y)
            }
        }
        if (r & 4 && (a = e.stateNode,
        a != null)) {
            var s = e.memoizedProps
              , l = n !== null ? n.memoizedProps : s
              , o = e.type
              , c = e.updateQueue;
            if (e.updateQueue = null,
            c !== null)
                try {
                    o === "input" && s.type === "radio" && s.name != null && To(a, s),
                    hs(o, l);
                    var p = hs(o, s);
                    for (l = 0; l < c.length; l += 2) {
                        var h = c[l]
                          , x = c[l + 1];
                        h === "style" ? Do(a, x) : h === "dangerouslySetInnerHTML" ? zo(a, x) : h === "children" ? An(a, x) : ii(a, h, x, p)
                    }
                    switch (o) {
                    case "input":
                        us(a, s);
                        break;
                    case "textarea":
                        _o(a, s);
                        break;
                    case "select":
                        var m = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!s.multiple;
                        var v = s.value;
                        v != null ? Zt(a, !!s.multiple, v, !1) : m !== !!s.multiple && (s.defaultValue != null ? Zt(a, !!s.multiple, s.defaultValue, !0) : Zt(a, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    a[Xn] = s
                } catch (y) {
                    Q(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Le(t, e),
        Fe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(k(162));
            a = e.stateNode,
            s = e.memoizedProps;
            try {
                a.nodeValue = s
            } catch (y) {
                Q(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Le(t, e),
        Fe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Bn(t.containerInfo)
            } catch (y) {
                Q(e, e.return, y)
            }
        break;
    case 4:
        Le(t, e),
        Fe(e);
        break;
    case 13:
        Le(t, e),
        Fe(e),
        a = e.child,
        a.flags & 8192 && (s = a.memoizedState !== null,
        a.stateNode.isHidden = s,
        !s || a.alternate !== null && a.alternate.memoizedState !== null || ($i = X())),
        r & 4 && Xl(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (p = le) || h,
        Le(t, e),
        le = p) : Le(t, e),
        Fe(e),
        r & 8192) {
            if (p = e.memoizedState !== null,
            (e.stateNode.isHidden = p) && !h && e.mode & 1)
                for (E = e,
                h = e.child; h !== null; ) {
                    for (x = E = h; E !== null; ) {
                        switch (m = E,
                        v = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            bn(4, m, m.return);
                            break;
                        case 1:
                            Gt(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (y) {
                                    Q(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Gt(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                Zl(x);
                                continue
                            }
                        }
                        v !== null ? (v.return = m,
                        E = v) : Zl(x)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            x = e; ; ) {
                if (x.tag === 5) {
                    if (h === null) {
                        h = x;
                        try {
                            a = x.stateNode,
                            p ? (s = a.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = x.stateNode,
                            c = x.memoizedProps.style,
                            l = c != null && c.hasOwnProperty("display") ? c.display : null,
                            o.style.display = Mo("display", l))
                        } catch (y) {
                            Q(e, e.return, y)
                        }
                    }
                } else if (x.tag === 6) {
                    if (h === null)
                        try {
                            x.stateNode.nodeValue = p ? "" : x.memoizedProps
                        } catch (y) {
                            Q(e, e.return, y)
                        }
                } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
                    x.child.return = x,
                    x = x.child;
                    continue
                }
                if (x === e)
                    break e;
                for (; x.sibling === null; ) {
                    if (x.return === null || x.return === e)
                        break e;
                    h === x && (h = null),
                    x = x.return
                }
                h === x && (h = null),
                x.sibling.return = x.return,
                x = x.sibling
            }
        }
        break;
    case 19:
        Le(t, e),
        Fe(e),
        r & 4 && Xl(e);
        break;
    case 21:
        break;
    default:
        Le(t, e),
        Fe(e)
    }
}
function Fe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (su(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
            case 5:
                var a = r.stateNode;
                r.flags & 32 && (An(a, ""),
                r.flags &= -33);
                var s = Gl(e);
                Ws(e, s, a);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , o = Gl(e);
                Bs(e, o, l);
                break;
            default:
                throw Error(k(161))
            }
        } catch (c) {
            Q(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Fp(e, t, n) {
    E = e,
    ou(e)
}
function ou(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
        var a = E
          , s = a.child;
        if (a.tag === 22 && r) {
            var l = a.memoizedState !== null || Er;
            if (!l) {
                var o = a.alternate
                  , c = o !== null && o.memoizedState !== null || le;
                o = Er;
                var p = le;
                if (Er = l,
                (le = c) && !p)
                    for (E = a; E !== null; )
                        l = E,
                        c = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Jl(a) : c !== null ? (c.return = l,
                        E = c) : Jl(a);
                for (; s !== null; )
                    E = s,
                    ou(s),
                    s = s.sibling;
                E = a,
                Er = o,
                le = p
            }
            Yl(e)
        } else
            a.subtreeFlags & 8772 && s !== null ? (s.return = a,
            E = s) : Yl(e)
    }
}
function Yl(e) {
    for (; E !== null; ) {
        var t = E;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || Na(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var a = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Dl(t, s, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Dl(t, l, n)
                        }
                        break;
                    case 5:
                        var o = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = o;
                            var c = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                c.autoFocus && n.focus();
                                break;
                            case "img":
                                c.src && (n.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var p = t.alternate;
                            if (p !== null) {
                                var h = p.memoizedState;
                                if (h !== null) {
                                    var x = h.dehydrated;
                                    x !== null && Bn(x)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                    }
                le || t.flags & 512 && Vs(t)
            } catch (m) {
                Q(t, t.return, m)
            }
        }
        if (t === e) {
            E = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            E = n;
            break
        }
        E = t.return
    }
}
function Zl(e) {
    for (; E !== null; ) {
        var t = E;
        if (t === e) {
            E = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            E = n;
            break
        }
        E = t.return
    }
}
function Jl(e) {
    for (; E !== null; ) {
        var t = E;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Na(4, t)
                } catch (c) {
                    Q(t, n, c)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var a = t.return;
                    try {
                        r.componentDidMount()
                    } catch (c) {
                        Q(t, a, c)
                    }
                }
                var s = t.return;
                try {
                    Vs(t)
                } catch (c) {
                    Q(t, s, c)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Vs(t)
                } catch (c) {
                    Q(t, l, c)
                }
            }
        } catch (c) {
            Q(t, t.return, c)
        }
        if (t === e) {
            E = null;
            break
        }
        var o = t.sibling;
        if (o !== null) {
            o.return = t.return,
            E = o;
            break
        }
        E = t.return
    }
}
var $p = Math.ceil
  , oa = Je.ReactCurrentDispatcher
  , Oi = Je.ReactCurrentOwner
  , Re = Je.ReactCurrentBatchConfig
  , O = 0
  , te = null
  , Y = null
  , re = 0
  , ve = 0
  , Xt = vt(0)
  , J = 0
  , tr = null
  , Mt = 0
  , ja = 0
  , Fi = 0
  , In = null
  , fe = null
  , $i = 0
  , dn = 1 / 0
  , Ve = null
  , ca = !1
  , Qs = null
  , pt = null
  , Rr = !1
  , it = null
  , ua = 0
  , On = 0
  , Ks = null
  , Ar = -1
  , Ur = 0;
function ue() {
    return O & 6 ? X() : Ar !== -1 ? Ar : Ar = X()
}
function ft(e) {
    return e.mode & 1 ? O & 2 && re !== 0 ? re & -re : Np.transition !== null ? (Ur === 0 && (Ur = Qo()),
    Ur) : (e = F,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : qo(e.type)),
    e) : 1
}
function Ie(e, t, n, r) {
    if (50 < On)
        throw On = 0,
        Ks = null,
        Error(k(185));
    ir(e, n, r),
    (!(O & 2) || e !== te) && (e === te && (!(O & 2) && (ja |= n),
    J === 4 && at(e, re)),
    ge(e, r),
    n === 1 && O === 0 && !(t.mode & 1) && (dn = X() + 500,
    ya && yt()))
}
function ge(e, t) {
    var n = e.callbackNode;
    Nd(e, t);
    var r = Kr(e, e === te ? re : 0);
    if (r === 0)
        n !== null && ll(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ll(n),
        t === 1)
            e.tag === 0 ? kp(ql.bind(null, e)) : vc(ql.bind(null, e)),
            gp(function() {
                !(O & 6) && yt()
            }),
            n = null;
        else {
            switch (Ko(r)) {
            case 1:
                n = di;
                break;
            case 4:
                n = Bo;
                break;
            case 16:
                n = Qr;
                break;
            case 536870912:
                n = Wo;
                break;
            default:
                n = Qr
            }
            n = xu(n, cu.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function cu(e, t) {
    if (Ar = -1,
    Ur = 0,
    O & 6)
        throw Error(k(327));
    var n = e.callbackNode;
    if (nn() && e.callbackNode !== n)
        return null;
    var r = Kr(e, e === te ? re : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = da(e, r);
    else {
        t = r;
        var a = O;
        O |= 2;
        var s = du();
        (te !== e || re !== t) && (Ve = null,
        dn = X() + 500,
        Rt(e, t));
        do
            try {
                Hp();
                break
            } catch (o) {
                uu(e, o)
            }
        while (!0);
        Si(),
        oa.current = s,
        O = a,
        Y !== null ? t = 0 : (te = null,
        re = 0,
        t = J)
    }
    if (t !== 0) {
        if (t === 2 && (a = ws(e),
        a !== 0 && (r = a,
        t = Gs(e, a))),
        t === 1)
            throw n = tr,
            Rt(e, 0),
            at(e, r),
            ge(e, X()),
            n;
        if (t === 6)
            at(e, r);
        else {
            if (a = e.current.alternate,
            !(r & 30) && !Ap(a) && (t = da(e, r),
            t === 2 && (s = ws(e),
            s !== 0 && (r = s,
            t = Gs(e, s))),
            t === 1))
                throw n = tr,
                Rt(e, 0),
                at(e, r),
                ge(e, X()),
                n;
            switch (e.finishedWork = a,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(k(345));
            case 2:
                St(e, fe, Ve);
                break;
            case 3:
                if (at(e, r),
                (r & 130023424) === r && (t = $i + 500 - X(),
                10 < t)) {
                    if (Kr(e, 0) !== 0)
                        break;
                    if (a = e.suspendedLanes,
                    (a & r) !== r) {
                        ue(),
                        e.pingedLanes |= e.suspendedLanes & a;
                        break
                    }
                    e.timeoutHandle = Rs(St.bind(null, e, fe, Ve), t);
                    break
                }
                St(e, fe, Ve);
                break;
            case 4:
                if (at(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                a = -1; 0 < r; ) {
                    var l = 31 - be(r);
                    s = 1 << l,
                    l = t[l],
                    l > a && (a = l),
                    r &= ~s
                }
                if (r = a,
                r = X() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $p(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Rs(St.bind(null, e, fe, Ve), r);
                    break
                }
                St(e, fe, Ve);
                break;
            case 5:
                St(e, fe, Ve);
                break;
            default:
                throw Error(k(329))
            }
        }
    }
    return ge(e, X()),
    e.callbackNode === n ? cu.bind(null, e) : null
}
function Gs(e, t) {
    var n = In;
    return e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    e = da(e, t),
    e !== 2 && (t = fe,
    fe = n,
    t !== null && Xs(t)),
    e
}
function Xs(e) {
    fe === null ? fe = e : fe.push.apply(fe, e)
}
function Ap(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var a = n[r]
                      , s = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!Oe(s(), a))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function at(e, t) {
    for (t &= ~Fi,
    t &= ~ja,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - be(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ql(e) {
    if (O & 6)
        throw Error(k(327));
    nn();
    var t = Kr(e, 0);
    if (!(t & 1))
        return ge(e, X()),
        null;
    var n = da(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ws(e);
        r !== 0 && (t = r,
        n = Gs(e, r))
    }
    if (n === 1)
        throw n = tr,
        Rt(e, 0),
        at(e, t),
        ge(e, X()),
        n;
    if (n === 6)
        throw Error(k(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    St(e, fe, Ve),
    ge(e, X()),
    null
}
function Ai(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n,
        O === 0 && (dn = X() + 500,
        ya && yt())
    }
}
function Dt(e) {
    it !== null && it.tag === 0 && !(O & 6) && nn();
    var t = O;
    O |= 1;
    var n = Re.transition
      , r = F;
    try {
        if (Re.transition = null,
        F = 1,
        e)
            return e()
    } finally {
        F = r,
        Re.transition = n,
        O = t,
        !(O & 6) && yt()
    }
}
function Ui() {
    ve = Xt.current,
    U(Xt)
}
function Rt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    xp(n)),
    Y !== null)
        for (n = Y.return; n !== null; ) {
            var r = n;
            switch (ki(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Jr();
                break;
            case 3:
                cn(),
                U(he),
                U(oe),
                _i();
                break;
            case 5:
                Ti(r);
                break;
            case 4:
                cn();
                break;
            case 13:
                U(V);
                break;
            case 19:
                U(V);
                break;
            case 10:
                Pi(r.type._context);
                break;
            case 22:
            case 23:
                Ui()
            }
            n = n.return
        }
    if (te = e,
    Y = e = mt(e.current, null),
    re = ve = t,
    J = 0,
    tr = null,
    Fi = ja = Mt = 0,
    fe = In = null,
    Ct !== null) {
        for (t = 0; t < Ct.length; t++)
            if (n = Ct[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var a = r.next
                  , s = n.pending;
                if (s !== null) {
                    var l = s.next;
                    s.next = a,
                    r.next = l
                }
                n.pending = r
            }
        Ct = null
    }
    return e
}
function uu(e, t) {
    do {
        var n = Y;
        try {
            if (Si(),
            Or.current = la,
            ia) {
                for (var r = B.memoizedState; r !== null; ) {
                    var a = r.queue;
                    a !== null && (a.pending = null),
                    r = r.next
                }
                ia = !1
            }
            if (zt = 0,
            ee = Z = B = null,
            Dn = !1,
            Jn = 0,
            Oi.current = null,
            n === null || n.return === null) {
                J = 1,
                tr = t,
                Y = null;
                break
            }
            e: {
                var s = e
                  , l = n.return
                  , o = n
                  , c = t;
                if (t = re,
                o.flags |= 32768,
                c !== null && typeof c == "object" && typeof c.then == "function") {
                    var p = c
                      , h = o
                      , x = h.tag;
                    if (!(h.mode & 1) && (x === 0 || x === 11 || x === 15)) {
                        var m = h.alternate;
                        m ? (h.updateQueue = m.updateQueue,
                        h.memoizedState = m.memoizedState,
                        h.lanes = m.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var v = Al(l);
                    if (v !== null) {
                        v.flags &= -257,
                        Ul(v, l, o, s, t),
                        v.mode & 1 && $l(s, p, t),
                        t = v,
                        c = p;
                        var w = t.updateQueue;
                        if (w === null) {
                            var y = new Set;
                            y.add(c),
                            t.updateQueue = y
                        } else
                            w.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            $l(s, p, t),
                            Hi();
                            break e
                        }
                        c = Error(k(426))
                    }
                } else if (H && o.mode & 1) {
                    var L = Al(l);
                    if (L !== null) {
                        !(L.flags & 65536) && (L.flags |= 256),
                        Ul(L, l, o, s, t),
                        Ni(un(c, o));
                        break e
                    }
                }
                s = c = un(c, o),
                J !== 4 && (J = 2),
                In === null ? In = [s] : In.push(s),
                s = l;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var d = Kc(s, c, t);
                        Ml(s, d);
                        break e;
                    case 1:
                        o = c;
                        var u = s.type
                          , f = s.stateNode;
                        if (!(s.flags & 128) && (typeof u.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (pt === null || !pt.has(f)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var g = Gc(s, o, t);
                            Ml(s, g);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            fu(n)
        } catch (N) {
            t = N,
            Y === n && n !== null && (Y = n = n.return);
            continue
        }
        break
    } while (!0)
}
function du() {
    var e = oa.current;
    return oa.current = la,
    e === null ? la : e
}
function Hi() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
    te === null || !(Mt & 268435455) && !(ja & 268435455) || at(te, re)
}
function da(e, t) {
    var n = O;
    O |= 2;
    var r = du();
    (te !== e || re !== t) && (Ve = null,
    Rt(e, t));
    do
        try {
            Up();
            break
        } catch (a) {
            uu(e, a)
        }
    while (!0);
    if (Si(),
    O = n,
    oa.current = r,
    Y !== null)
        throw Error(k(261));
    return te = null,
    re = 0,
    J
}
function Up() {
    for (; Y !== null; )
        pu(Y)
}
function Hp() {
    for (; Y !== null && !fd(); )
        pu(Y)
}
function pu(e) {
    var t = hu(e.alternate, e, ve);
    e.memoizedProps = e.pendingProps,
    t === null ? fu(e) : Y = t,
    Oi.current = null
}
function fu(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = bp(n, t),
            n !== null) {
                n.flags &= 32767,
                Y = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                J = 6,
                Y = null;
                return
            }
        } else if (n = Dp(n, t, ve),
        n !== null) {
            Y = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Y = t;
            return
        }
        Y = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}
function St(e, t, n) {
    var r = F
      , a = Re.transition;
    try {
        Re.transition = null,
        F = 1,
        Vp(e, t, n, r)
    } finally {
        Re.transition = a,
        F = r
    }
    return null
}
function Vp(e, t, n, r) {
    do
        nn();
    while (it !== null);
    if (O & 6)
        throw Error(k(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(k(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (jd(e, s),
    e === te && (Y = te = null,
    re = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Rr || (Rr = !0,
    xu(Qr, function() {
        return nn(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Re.transition,
        Re.transition = null;
        var l = F;
        F = 1;
        var o = O;
        O |= 4,
        Oi.current = null,
        Op(e, n),
        lu(n, e),
        cp(Cs),
        Gr = !!Ps,
        Cs = Ps = null,
        e.current = n,
        Fp(n),
        md(),
        O = o,
        F = l,
        Re.transition = s
    } else
        e.current = n;
    if (Rr && (Rr = !1,
    it = e,
    ua = a),
    s = e.pendingLanes,
    s === 0 && (pt = null),
    gd(n.stateNode),
    ge(e, X()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            a = t[n],
            r(a.value, {
                componentStack: a.stack,
                digest: a.digest
            });
    if (ca)
        throw ca = !1,
        e = Qs,
        Qs = null,
        e;
    return ua & 1 && e.tag !== 0 && nn(),
    s = e.pendingLanes,
    s & 1 ? e === Ks ? On++ : (On = 0,
    Ks = e) : On = 0,
    yt(),
    null
}
function nn() {
    if (it !== null) {
        var e = Ko(ua)
          , t = Re.transition
          , n = F;
        try {
            if (Re.transition = null,
            F = 16 > e ? 16 : e,
            it === null)
                var r = !1;
            else {
                if (e = it,
                it = null,
                ua = 0,
                O & 6)
                    throw Error(k(331));
                var a = O;
                for (O |= 4,
                E = e.current; E !== null; ) {
                    var s = E
                      , l = s.child;
                    if (E.flags & 16) {
                        var o = s.deletions;
                        if (o !== null) {
                            for (var c = 0; c < o.length; c++) {
                                var p = o[c];
                                for (E = p; E !== null; ) {
                                    var h = E;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        bn(8, h, s)
                                    }
                                    var x = h.child;
                                    if (x !== null)
                                        x.return = h,
                                        E = x;
                                    else
                                        for (; E !== null; ) {
                                            h = E;
                                            var m = h.sibling
                                              , v = h.return;
                                            if (au(h),
                                            h === p) {
                                                E = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = v,
                                                E = m;
                                                break
                                            }
                                            E = v
                                        }
                                }
                            }
                            var w = s.alternate;
                            if (w !== null) {
                                var y = w.child;
                                if (y !== null) {
                                    w.child = null;
                                    do {
                                        var L = y.sibling;
                                        y.sibling = null,
                                        y = L
                                    } while (y !== null)
                                }
                            }
                            E = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && l !== null)
                        l.return = s,
                        E = l;
                    else
                        e: for (; E !== null; ) {
                            if (s = E,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    bn(9, s, s.return)
                                }
                            var d = s.sibling;
                            if (d !== null) {
                                d.return = s.return,
                                E = d;
                                break e
                            }
                            E = s.return
                        }
                }
                var u = e.current;
                for (E = u; E !== null; ) {
                    l = E;
                    var f = l.child;
                    if (l.subtreeFlags & 2064 && f !== null)
                        f.return = l,
                        E = f;
                    else
                        e: for (l = u; E !== null; ) {
                            if (o = E,
                            o.flags & 2048)
                                try {
                                    switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Na(9, o)
                                    }
                                } catch (N) {
                                    Q(o, o.return, N)
                                }
                            if (o === l) {
                                E = null;
                                break e
                            }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                E = g;
                                break e
                            }
                            E = o.return
                        }
                }
                if (O = a,
                yt(),
                Ue && typeof Ue.onPostCommitFiberRoot == "function")
                    try {
                        Ue.onPostCommitFiberRoot(ma, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            F = n,
            Re.transition = t
        }
    }
    return !1
}
function eo(e, t, n) {
    t = un(n, t),
    t = Kc(e, t, 1),
    e = dt(e, t, 1),
    t = ue(),
    e !== null && (ir(e, 1, t),
    ge(e, t))
}
function Q(e, t, n) {
    if (e.tag === 3)
        eo(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                eo(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pt === null || !pt.has(r))) {
                    e = un(n, e),
                    e = Gc(t, e, 1),
                    t = dt(t, e, 1),
                    e = ue(),
                    t !== null && (ir(t, 1, e),
                    ge(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Bp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ue(),
    e.pingedLanes |= e.suspendedLanes & n,
    te === e && (re & n) === n && (J === 4 || J === 3 && (re & 130023424) === re && 500 > X() - $i ? Rt(e, 0) : Fi |= n),
    ge(e, t)
}
function mu(e, t) {
    t === 0 && (e.mode & 1 ? (t = vr,
    vr <<= 1,
    !(vr & 130023424) && (vr = 4194304)) : t = 1);
    var n = ue();
    e = Ye(e, t),
    e !== null && (ir(e, t, n),
    ge(e, n))
}
function Wp(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    mu(e, n)
}
function Qp(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(k(314))
    }
    r !== null && r.delete(t),
    mu(e, n)
}
var hu;
hu = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || he.current)
            me = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return me = !1,
                Mp(e, t, n);
            me = !!(e.flags & 131072)
        }
    else
        me = !1,
        H && t.flags & 1048576 && yc(t, ta, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        $r(e, t),
        e = t.pendingProps;
        var a = sn(t, oe.current);
        tn(t, n),
        a = zi(null, t, r, e, a, n);
        var s = Mi();
        return t.flags |= 1,
        typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        xe(r) ? (s = !0,
        qr(t)) : s = !1,
        t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
        Ei(t),
        a.updater = ka,
        t.stateNode = a,
        a._reactInternals = t,
        bs(t, r, e, n),
        t = Fs(null, t, r, !0, s, n)) : (t.tag = 0,
        H && s && wi(t),
        ce(null, t, a, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch ($r(e, t),
            e = t.pendingProps,
            a = r._init,
            r = a(r._payload),
            t.type = r,
            a = t.tag = Gp(r),
            e = ze(r, e),
            a) {
            case 0:
                t = Os(null, t, r, e, n);
                break e;
            case 1:
                t = Bl(null, t, r, e, n);
                break e;
            case 11:
                t = Hl(null, t, r, e, n);
                break e;
            case 14:
                t = Vl(null, t, r, ze(r.type, e), n);
                break e
            }
            throw Error(k(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : ze(r, a),
        Os(e, t, r, a, n);
    case 1:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : ze(r, a),
        Bl(e, t, r, a, n);
    case 3:
        e: {
            if (Jc(t),
            e === null)
                throw Error(k(387));
            r = t.pendingProps,
            s = t.memoizedState,
            a = s.element,
            Pc(e, t),
            aa(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    a = un(Error(k(423)), t),
                    t = Wl(e, t, r, n, a);
                    break e
                } else if (r !== a) {
                    a = un(Error(k(424)), t),
                    t = Wl(e, t, r, n, a);
                    break e
                } else
                    for (ye = ut(t.stateNode.containerInfo.firstChild),
                    we = t,
                    H = !0,
                    De = null,
                    n = jc(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ln(),
                r === a) {
                    t = Ze(e, t, n);
                    break e
                }
                ce(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Cc(t),
        e === null && zs(t),
        r = t.type,
        a = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        l = a.children,
        Es(r, a) ? l = null : s !== null && Es(r, s) && (t.flags |= 32),
        Zc(e, t),
        ce(e, t, l, n),
        t.child;
    case 6:
        return e === null && zs(t),
        null;
    case 13:
        return qc(e, t, n);
    case 4:
        return Ri(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = on(t, null, r, n) : ce(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : ze(r, a),
        Hl(e, t, r, a, n);
    case 7:
        return ce(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ce(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ce(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            a = t.pendingProps,
            s = t.memoizedProps,
            l = a.value,
            $(na, r._currentValue),
            r._currentValue = l,
            s !== null)
                if (Oe(s.value, l)) {
                    if (s.children === a.children && !he.current) {
                        t = Ze(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var o = s.dependencies;
                        if (o !== null) {
                            l = s.child;
                            for (var c = o.firstContext; c !== null; ) {
                                if (c.context === r) {
                                    if (s.tag === 1) {
                                        c = Ke(-1, n & -n),
                                        c.tag = 2;
                                        var p = s.updateQueue;
                                        if (p !== null) {
                                            p = p.shared;
                                            var h = p.pending;
                                            h === null ? c.next = c : (c.next = h.next,
                                            h.next = c),
                                            p.pending = c
                                        }
                                    }
                                    s.lanes |= n,
                                    c = s.alternate,
                                    c !== null && (c.lanes |= n),
                                    Ms(s.return, n, t),
                                    o.lanes |= n;
                                    break
                                }
                                c = c.next
                            }
                        } else if (s.tag === 10)
                            l = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (l = s.return,
                            l === null)
                                throw Error(k(341));
                            l.lanes |= n,
                            o = l.alternate,
                            o !== null && (o.lanes |= n),
                            Ms(l, n, t),
                            l = s.sibling
                        } else
                            l = s.child;
                        if (l !== null)
                            l.return = s;
                        else
                            for (l = s; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (s = l.sibling,
                                s !== null) {
                                    s.return = l.return,
                                    l = s;
                                    break
                                }
                                l = l.return
                            }
                        s = l
                    }
            ce(e, t, a.children, n),
            t = t.child
        }
        return t;
    case 9:
        return a = t.type,
        r = t.pendingProps.children,
        tn(t, n),
        a = Te(a),
        r = r(a),
        t.flags |= 1,
        ce(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        a = ze(r, t.pendingProps),
        a = ze(r.type, a),
        Vl(e, t, r, a, n);
    case 15:
        return Xc(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : ze(r, a),
        $r(e, t),
        t.tag = 1,
        xe(r) ? (e = !0,
        qr(t)) : e = !1,
        tn(t, n),
        Qc(t, r, a),
        bs(t, r, a, n),
        Fs(null, t, r, !0, e, n);
    case 19:
        return eu(e, t, n);
    case 22:
        return Yc(e, t, n)
    }
    throw Error(k(156, t.tag))
}
;
function xu(e, t) {
    return Vo(e, t)
}
function Kp(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ee(e, t, n, r) {
    return new Kp(e,t,n,r)
}
function Vi(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Gp(e) {
    if (typeof e == "function")
        return Vi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === oi)
            return 11;
        if (e === ci)
            return 14
    }
    return 2
}
function mt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ee(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Hr(e, t, n, r, a, s) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        Vi(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case $t:
            return Tt(n.children, a, s, t);
        case li:
            l = 8,
            a |= 8;
            break;
        case ss:
            return e = Ee(12, n, t, a | 2),
            e.elementType = ss,
            e.lanes = s,
            e;
        case is:
            return e = Ee(13, n, t, a),
            e.elementType = is,
            e.lanes = s,
            e;
        case ls:
            return e = Ee(19, n, t, a),
            e.elementType = ls,
            e.lanes = s,
            e;
        case Co:
            return Sa(n, a, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case So:
                    l = 10;
                    break e;
                case Po:
                    l = 9;
                    break e;
                case oi:
                    l = 11;
                    break e;
                case ci:
                    l = 14;
                    break e;
                case tt:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(k(130, e == null ? e : typeof e, ""))
        }
    return t = Ee(l, n, t, a),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Tt(e, t, n, r) {
    return e = Ee(7, e, r, t),
    e.lanes = n,
    e
}
function Sa(e, t, n, r) {
    return e = Ee(22, e, r, t),
    e.elementType = Co,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ts(e, t, n) {
    return e = Ee(6, e, null, t),
    e.lanes = n,
    e
}
function ns(e, t, n) {
    return t = Ee(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Xp(e, t, n, r, a) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ia(0),
    this.expirationTimes = Ia(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ia(0),
    this.identifierPrefix = r,
    this.onRecoverableError = a,
    this.mutableSourceEagerHydrationData = null
}
function Bi(e, t, n, r, a, s, l, o, c) {
    return e = new Xp(e,t,n,o,c),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Ee(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ei(s),
    e
}
function Yp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ft,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function gu(e) {
    if (!e)
        return xt;
    e = e._reactInternals;
    e: {
        if (It(e) !== e || e.tag !== 1)
            throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (xe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (xe(n))
            return gc(e, n, t)
    }
    return t
}
function vu(e, t, n, r, a, s, l, o, c) {
    return e = Bi(n, r, !0, e, a, s, l, o, c),
    e.context = gu(null),
    n = e.current,
    r = ue(),
    a = ft(n),
    s = Ke(r, a),
    s.callback = t ?? null,
    dt(n, s, a),
    e.current.lanes = a,
    ir(e, a, r),
    ge(e, r),
    e
}
function Pa(e, t, n, r) {
    var a = t.current
      , s = ue()
      , l = ft(a);
    return n = gu(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ke(s, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = dt(a, t, l),
    e !== null && (Ie(e, a, l, s),
    Ir(e, a, l)),
    l
}
function pa(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function to(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Wi(e, t) {
    to(e, t),
    (e = e.alternate) && to(e, t)
}
function Zp() {
    return null
}
var yu = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Qi(e) {
    this._internalRoot = e
}
Ca.prototype.render = Qi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(k(409));
    Pa(e, t, null, null)
}
;
Ca.prototype.unmount = Qi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dt(function() {
            Pa(null, e, null, null)
        }),
        t[Xe] = null
    }
}
;
function Ca(e) {
    this._internalRoot = e
}
Ca.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Yo();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++)
            ;
        rt.splice(n, 0, e),
        n === 0 && Jo(e)
    }
}
;
function Ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ea(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function no() {}
function Jp(e, t, n, r, a) {
    if (a) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var p = pa(l);
                s.call(p)
            }
        }
        var l = vu(t, r, e, 0, null, !1, !1, "", no);
        return e._reactRootContainer = l,
        e[Xe] = l.current,
        Kn(e.nodeType === 8 ? e.parentNode : e),
        Dt(),
        l
    }
    for (; a = e.lastChild; )
        e.removeChild(a);
    if (typeof r == "function") {
        var o = r;
        r = function() {
            var p = pa(c);
            o.call(p)
        }
    }
    var c = Bi(e, 0, !1, null, null, !1, !1, "", no);
    return e._reactRootContainer = c,
    e[Xe] = c.current,
    Kn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function() {
        Pa(t, c, n, r)
    }),
    c
}
function Ra(e, t, n, r, a) {
    var s = n._reactRootContainer;
    if (s) {
        var l = s;
        if (typeof a == "function") {
            var o = a;
            a = function() {
                var c = pa(l);
                o.call(c)
            }
        }
        Pa(t, l, e, a)
    } else
        l = Jp(n, t, e, a, r);
    return pa(l)
}
Go = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = En(t.pendingLanes);
            n !== 0 && (pi(t, n | 1),
            ge(t, X()),
            !(O & 6) && (dn = X() + 500,
            yt()))
        }
        break;
    case 13:
        Dt(function() {
            var r = Ye(e, 1);
            if (r !== null) {
                var a = ue();
                Ie(r, e, 1, a)
            }
        }),
        Wi(e, 1)
    }
}
;
fi = function(e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = ue();
            Ie(t, e, 134217728, n)
        }
        Wi(e, 134217728)
    }
}
;
Xo = function(e) {
    if (e.tag === 13) {
        var t = ft(e)
          , n = Ye(e, t);
        if (n !== null) {
            var r = ue();
            Ie(n, e, t, r)
        }
        Wi(e, t)
    }
}
;
Yo = function() {
    return F
}
;
Zo = function(e, t) {
    var n = F;
    try {
        return F = e,
        t()
    } finally {
        F = n
    }
}
;
gs = function(e, t, n) {
    switch (t) {
    case "input":
        if (us(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var a = va(r);
                    if (!a)
                        throw Error(k(90));
                    Ro(r),
                    us(r, a)
                }
            }
        }
        break;
    case "textarea":
        _o(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Zt(e, !!n.multiple, t, !1)
    }
}
;
Oo = Ai;
Fo = Dt;
var qp = {
    usingClientEntryPoint: !1,
    Events: [or, Vt, va, bo, Io, Ai]
}
  , jn = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , ef = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Uo(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: jn.findFiberByHostInstance || Zp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tr.isDisabled && Tr.supportsFiber)
        try {
            ma = Tr.inject(ef),
            Ue = Tr
        } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qp;
Ne.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ki(t))
        throw Error(k(200));
    return Yp(e, t, null, n)
}
;
Ne.createRoot = function(e, t) {
    if (!Ki(e))
        throw Error(k(299));
    var n = !1
      , r = ""
      , a = yu;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    t = Bi(e, 1, !1, null, null, n, !1, r, a),
    e[Xe] = t.current,
    Kn(e.nodeType === 8 ? e.parentNode : e),
    new Qi(t)
}
;
Ne.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
        Error(k(268, e)));
    return e = Uo(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ne.flushSync = function(e) {
    return Dt(e)
}
;
Ne.hydrate = function(e, t, n) {
    if (!Ea(t))
        throw Error(k(200));
    return Ra(null, e, t, !0, n)
}
;
Ne.hydrateRoot = function(e, t, n) {
    if (!Ki(e))
        throw Error(k(405));
    var r = n != null && n.hydratedSources || null
      , a = !1
      , s = ""
      , l = yu;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = vu(t, null, e, 1, n ?? null, a, !1, s, l),
    e[Xe] = t.current,
    Kn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            a = n._getVersion,
            a = a(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
    return new Ca(t)
}
;
Ne.render = function(e, t, n) {
    if (!Ea(t))
        throw Error(k(200));
    return Ra(null, e, t, !1, n)
}
;
Ne.unmountComponentAtNode = function(e) {
    if (!Ea(e))
        throw Error(k(40));
    return e._reactRootContainer ? (Dt(function() {
        Ra(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Xe] = null
        })
    }),
    !0) : !1
}
;
Ne.unstable_batchedUpdates = Ai;
Ne.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ea(n))
        throw Error(k(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(k(38));
    return Ra(e, t, n, !1, r)
}
;
Ne.version = "18.3.1-next-f1338f8080-20240426";
function wu() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wu)
        } catch (e) {
            console.error(e)
        }
}
wu(),
wo.exports = Ne;
var tf = wo.exports
  , ro = tf;
rs.createRoot = ro.createRoot,
rs.hydrateRoot = ro.hydrateRoot;
const _r = "monety_state"
  , et = "monety_users"
  , nf = () => "MN" + Math.random().toString(36).substring(2, 8).toUpperCase()
  , Sn = () => Math.random().toString(36).substring(2, 15)
  , rf = () => "ID" + Math.floor(1e5 + Math.random() * 9e5).toString();
function af() {
    const [e,t] = T.useState(null)
      , [n,r] = T.useState(!0);
    T.useEffect( () => {
        const d = localStorage.getItem(_r);
        if (d)
            try {
                const u = JSON.parse(d)
                  , f = a(u);
                t(f),
                f !== u && s(f)
            } catch {
                localStorage.removeItem(_r)
            }
        r(!1)
    }
    , []);
    const a = d => {
        if (!d.investments || d.investments.length === 0)
            return d;
        const u = new Date;
        let f = 0
          , g = !1;
        const N = d.investments.map(j => {
            if (j.status !== "active")
                return j;
            const S = new Date(j.lastClaimDate || j.startDate)
              , P = (u.getTime() - S.getTime()) / (1e3 * 60 * 60);
            if (P >= 24) {
                const D = Math.floor(P / 24)
                  , R = Math.min(D, j.remainingDays);
                if (R > 0) {
                    const K = R * j.dailyReturn;
                    f += K,
                    g = !0;
                    const Se = j.remainingDays - R;
                    return {
                        ...j,
                        remainingDays: Se,
                        lastClaimDate: u.toISOString(),
                        status: Se <= 0 ? "completed" : "active"
                    }
                }
            }
            return j
        }
        );
        return g ? {
            ...d,
            balance: d.balance + f,
            totalEarnings: d.totalEarnings + f,
            todayEarnings: d.todayEarnings + f,
            investments: N
        } : d
    }
      , s = d => {
        localStorage.setItem(_r, JSON.stringify(d));
        const u = JSON.parse(localStorage.getItem(et) || "[]")
          , f = u.findIndex(g => g.id === d.id);
        f >= 0 && (u[f] = {
            ...u[f],
            ...d
        }),
        localStorage.setItem(et, JSON.stringify(u))
    }
      , l = d => {
        s(d),
        t(d)
    }
      , o = (d, u, f, g) => {
        const N = JSON.parse(localStorage.getItem(et) || "[]");
        if (N.find(P => P.email === u))
            return {
                success: !1,
                error: "Este e-mail já está cadastrado"
            };
        let j = null;
        if (g) {
            const P = N.find(D => D.inviteCode === g);
            P && (j = P.id)
        }
        const S = {
            id: Sn(),
            displayId: rf(),
            name: d,
            email: u,
            password: f,
            balance: 0,
            totalEarnings: 0,
            todayEarnings: 0,
            inviteCode: nf(),
            invitedBy: j,
            referrals: [],
            checkinDays: [],
            lastCheckin: null,
            rouletteSpins: 0,
            investments: [],
            withdrawals: [],
            deposits: [],
            createdAt: new Date().toISOString()
        };
        if (N.push(S),
        localStorage.setItem(et, JSON.stringify(N)),
        j) {
            const P = N.findIndex(D => D.id === j);
            P >= 0 && (N[P].referrals.push({
                id: S.id,
                displayId: S.displayId,
                name: S.name,
                email: S.email,
                level: 1,
                earnings: 0,
                hasPurchased: !1,
                joinedAt: new Date().toISOString()
            }),
            localStorage.setItem(et, JSON.stringify(N)))
        }
        return {
            success: !0
        }
    }
      , c = (d, u) => {
        const g = JSON.parse(localStorage.getItem(et) || "[]").find(P => P.email === d && P.password === u);
        if (!g)
            return {
                success: !1,
                error: "E-mail ou senha incorretos"
            };
        const {password: N, ...j} = g
          , S = a(j);
        return l(S),
        {
            success: !0
        }
    }
      , p = () => {
        localStorage.removeItem(_r),
        t(null)
    }
      , h = d => {
        if (!e || e.balance < d.price)
            return !1;
        const u = new Date().toISOString()
          , f = {
            id: Sn(),
            productId: d.id,
            productName: d.name,
            amount: d.price,
            dailyReturn: d.dailyReturn,
            totalDays: d.duration,
            remainingDays: d.duration,
            startDate: u,
            lastClaimDate: u,
            pendingReturn: 0,
            status: "active"
        }
          , g = JSON.parse(localStorage.getItem(et) || "[]");
        if (e.invitedBy) {
            const j = g.findIndex(S => S.id === e.invitedBy);
            if (j >= 0) {
                const S = g[j]
                  , P = S.referrals.findIndex(D => D.id === e.id);
                P >= 0 && !S.referrals[P].hasPurchased && (S.referrals[P].hasPurchased = !0,
                S.rouletteSpins += 1,
                localStorage.setItem(et, JSON.stringify(g)))
            }
        }
        const N = {
            ...e,
            balance: e.balance - d.price,
            investments: [...e.investments, f]
        };
        return l(N),
        !0
    }
      , x = d => {
        if (!e)
            return !1;
        const u = new Date().toDateString();
        if (e.lastCheckin === u || e.checkinDays.includes(d))
            return !1;
        const g = [1, 2, 3, 4, 5, 7, 10][d - 1] || 0
          , N = {
            ...e,
            balance: e.balance + g,
            todayEarnings: e.todayEarnings + g,
            totalEarnings: e.totalEarnings + g,
            checkinDays: [...e.checkinDays, d],
            lastCheckin: u
        };
        return l(N),
        !0
    }
      , m = () => {
        if (!e || e.rouletteSpins <= 0)
            return null;
        const d = [1, 5, 10, 15, 20, 35, 50, 100]
          , u = [35, 30, 20, 10, 5, 0, 0, 0]
          , f = u.reduce( (P, D) => P + D, 0);
        let g = Math.random() * f
          , N = 0;
        for (let P = 0; P < u.length; P++)
            if (g -= u[P],
            g <= 0) {
                N = P;
                break
            }
        const j = d[N]
          , S = {
            ...e,
            rouletteSpins: e.rouletteSpins - 1,
            balance: e.balance + j,
            todayEarnings: e.todayEarnings + j,
            totalEarnings: e.totalEarnings + j
        };
        return l(S),
        j
    }
      , v = () => {
        const u = new Date().getHours();
        return u < 9 || u >= 17 ? {
            allowed: !1,
            message: "Saques permitidos apenas das 09:00 às 17:00"
        } : {
            allowed: !0
        }
    }
    ;
    return {
        user: e,
        isLoading: n,
        register: o,
        login: c,
        logout: p,
        addInvestment: h,
        doCheckin: x,
        spinRoulette: m,
        requestWithdraw: (d, u, f) => {
            if (!e)
                return {
                    success: !1,
                    error: "Usuário não encontrado"
                };
            const g = v();
            if (!g.allowed)
                return {
                    success: !1,
                    error: g.message
                };
            if (d < 35)
                return {
                    success: !1,
                    error: "Valor mínimo de saque: R$ 35,00"
                };
            if (e.balance < d)
                return {
                    success: !1,
                    error: "Saldo insuficiente"
                };
            const N = d * .1
              , j = d - N
              , S = {
                id: Sn(),
                amount: d,
                fee: N,
                netAmount: j,
                pixKey: u,
                pixType: f || "cpf",
                status: "pending",
                createdAt: new Date().toISOString()
            }
              , P = {
                ...e,
                balance: e.balance - d,
                withdrawals: [...e.withdrawals, S]
            };
            return l(P),
            {
                success: !0
            }
        }
        ,
        canWithdrawNow: v,
        createDeposit: d => {
            if (d < 30)
                return null;
            const u = {
                id: Sn(),
                amount: d,
                status: "pending",
                pixCode: `00020126580014BR.GOV.BCB.PIX0136${Sn()}520400005303986540${d.toFixed(2)}5802BR`,
                createdAt: new Date().toISOString()
            };
            if (e) {
                const f = {
                    ...e,
                    deposits: [...e.deposits, u]
                };
                l(f)
            }
            return u
        }
        ,
        confirmDeposit: d => {
            if (!e)
                return;
            const u = e.deposits.find(g => g.id === d);
            if (!u || u.status === "confirmed")
                return;
            const f = {
                ...e,
                balance: e.balance + u.amount,
                rouletteSpins: e.rouletteSpins + 1,
                deposits: e.deposits.map(g => g.id === d ? {
                    ...g,
                    status: "confirmed"
                } : g)
            };
            l(f)
        }
        ,
        saveUser: l
    }
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sf = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lf = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , I = (e, t) => {
    const n = T.forwardRef( ({color: r="currentColor", size: a=24, strokeWidth: s=2, absoluteStrokeWidth: l, className: o="", children: c, ...p}, h) => T.createElement("svg", {
        ref: h,
        ...sf,
        width: a,
        height: a,
        stroke: r,
        strokeWidth: l ? Number(s) * 24 / Number(a) : s,
        className: ["lucide", `lucide-${lf(e)}`, o].join(" "),
        ...p
    }, [...t.map( ([x,m]) => T.createElement(x, m)), ...Array.isArray(c) ? c : [c]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = I("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = I("ArrowDownCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 8v8",
    key: "napkw2"
}], ["path", {
    d: "m8 12 4 4 4-4",
    key: "k98ssh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = I("ArrowUpCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m16 12-4-4-4 4",
    key: "177agl"
}], ["path", {
    d: "M12 16V8",
    key: "1sbj14"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ku = I("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = I("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = I("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = I("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = I("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = I("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = I("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = I("Crown", [["path", {
    d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
    key: "zkxr6b"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = I("EyeOff", [["path", {
    d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
    key: "1jxqfv"
}], ["path", {
    d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
    key: "9wicm4"
}], ["path", {
    d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
    key: "1jreej"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "2",
    y2: "22",
    key: "a6p6uj"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = I("Eye", [["path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    key: "rwhkz3"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pf = I("Gem", [["path", {
    d: "M6 3h12l4 6-10 13L2 9Z",
    key: "1pcd5k"
}], ["path", {
    d: "M11 3 8 9l4 13 4-13-3-6",
    key: "1fcu3u"
}], ["path", {
    d: "M2 9h20",
    key: "16fsjt"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ju = I("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = I("Hash", [["line", {
    x1: "4",
    x2: "20",
    y1: "9",
    y2: "9",
    key: "4lhtct"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "15",
    y2: "15",
    key: "vyu0kd"
}], ["line", {
    x1: "10",
    x2: "8",
    y1: "3",
    y2: "21",
    key: "1ggp8o"
}], ["line", {
    x1: "16",
    x2: "14",
    y1: "3",
    y2: "21",
    key: "weycgp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = I("History", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M12 7v5l4 2",
    key: "1fdv2h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = I("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = I("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = I("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xf = I("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = I("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = I("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = I("Package", [["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}], ["path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
    key: "hh9hay"
}], ["path", {
    d: "m3.3 7 8.7 5 8.7-5",
    key: "g66t2b"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = I("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = I("Pickaxe", [["path", {
    d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",
    key: "we99rg"
}], ["path", {
    d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",
    key: "1w6hck"
}], ["path", {
    d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",
    key: "15hgfx"
}], ["path", {
    d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",
    key: "452b4h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = I("RotateCw", [["path", {
    d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
    key: "1p45f6"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = I("Share2", [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kf = I("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nf = I("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jf = I("Timer", [["line", {
    x1: "10",
    x2: "14",
    y1: "2",
    y2: "2",
    key: "14vaq8"
}], ["line", {
    x1: "12",
    x2: "15",
    y1: "14",
    y2: "11",
    key: "17fdiu"
}], ["circle", {
    cx: "12",
    cy: "14",
    r: "8",
    key: "1e1u0o"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = I("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Su = I("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = I("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = I("Wallet", [["path", {
    d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
    key: "195gfw"
}], ["path", {
    d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
    key: "195n9w"
}], ["path", {
    d: "M18 12a2 2 0 0 0 0 4h4v-4Z",
    key: "vllfpd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = I("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sf = I("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]]);
function Pf({activeTab: e, onTabChange: t}) {
    const n = [{
        id: "home",
        label: "Início",
        icon: mf
    }, {
        id: "products",
        label: "Produtos",
        icon: gf
    }, {
        id: "team",
        label: "Equipe",
        icon: rr
    }, {
        id: "profile",
        label: "Perfil",
        icon: Su
    }];
    return i.jsx("nav", {
        "data-inspector-line": "18",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/components/BottomNav.tsx",
        className: "fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-dark-600 z-50",
        children: i.jsx("div", {
            "data-inspector-line": "19",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/BottomNav.tsx",
            className: "flex justify-around items-center h-16 max-w-lg mx-auto",
            children: n.map(r => {
                const a = r.icon
                  , s = e === r.id;
                return i.jsxs("button", {
                    "data-inspector-line": "24",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/components/BottomNav.tsx",
                    onClick: () => t(r.id),
                    className: `flex flex-col items-center justify-center flex-1 h-full transition-colors ${s ? "text-primary-500" : "text-gray-500"}`,
                    children: [i.jsx(a, {
                        "data-inspector-line": "31",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/components/BottomNav.tsx",
                        className: `w-5 h-5 mb-1 ${s ? "stroke-[2.5]" : ""}`
                    }), i.jsx("span", {
                        "data-inspector-line": "32",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/components/BottomNav.tsx",
                        className: "text-xs font-medium",
                        children: r.label
                    })]
                }, r.id)
            }
            )
        })
    })
}
function ar({message: e, subMessage: t, isVisible: n, onClose: r, duration: a=3e3}) {
    return T.useEffect( () => {
        if (n) {
            const s = setTimeout(r, a);
            return () => clearTimeout(s)
        }
    }
    , [n, r, a]),
    n ? i.jsx("div", {
        "data-inspector-line": "23",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/components/Toast.tsx",
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
        children: i.jsxs("div", {
            "data-inspector-line": "24",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/Toast.tsx",
            className: "bg-dark-800 border border-primary-500/30 rounded-2xl p-6 shadow-2xl shadow-primary-500/20 pointer-events-auto animate-toast-in max-w-sm w-full",
            children: [i.jsx("button", {
                "data-inspector-line": "27",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Toast.tsx",
                onClick: r,
                className: "absolute top-3 right-3 text-gray-500 hover:text-white transition-colors",
                children: i.jsx(Cu, {
                    "data-inspector-line": "31",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Toast.tsx",
                    className: "w-5 h-5"
                })
            }), i.jsxs("div", {
                "data-inspector-line": "34",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Toast.tsx",
                className: "flex flex-col items-center text-center",
                children: [i.jsx("div", {
                    "data-inspector-line": "35",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Toast.tsx",
                    className: "w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mb-4 animate-bounce-in",
                    children: i.jsx(rn, {
                        "data-inspector-line": "36",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/components/Toast.tsx",
                        className: "w-10 h-10 text-primary-500"
                    })
                }), i.jsx("h3", {
                    "data-inspector-line": "38",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Toast.tsx",
                    className: "text-xl font-bold text-white mb-2",
                    children: e
                }), t && i.jsx("p", {
                    "data-inspector-line": "40",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/components/Toast.tsx",
                    className: "text-gray-400 text-sm",
                    children: t
                })]
            })]
        })
    }) : null
}
function Eu({size: e="md", className: t=""}) {
    const n = {
        sm: "w-12 h-12",
        md: "w-20 h-20",
        lg: "w-24 h-24"
    }
      , r = {
        sm: "text-2xl",
        md: "text-4xl",
        lg: "text-5xl"
    };
    return i.jsx("div", {
        "data-inspector-line": "22",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/components/Logo.tsx",
        className: `${n[e]} rounded-2xl flex items-center justify-center shadow-lg ${t}`,
        style: {
            background: "linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)",
            boxShadow: "0 10px 40px rgba(34, 197, 94, 0.3)"
        },
        children: i.jsx("span", {
            "data-inspector-line": "29",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/Logo.tsx",
            className: `${r[e]} font-extrabold text-white`,
            style: {
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                fontFamily: "Plus Jakarta Sans, sans-serif"
            },
            children: "M"
        })
    })
}
function Cf({onLogin: e, onGoToRegister: t}) {
    const [n,r] = T.useState("")
      , [a,s] = T.useState("")
      , [l,o] = T.useState(!1)
      , [c,p] = T.useState("")
      , [h,x] = T.useState(!1)
      , [m,v] = T.useState(!1)
      , w = async y => {
        y.preventDefault(),
        p(""),
        x(!0);
        const L = e(n, a);
        L.success ? (v(!0),
        setTimeout( () => {
            x(!1)
        }
        , 1500)) : (p(L.error || "Erro ao fazer login"),
        x(!1))
    }
    ;
    return i.jsxs("div", {
        "data-inspector-line": "38",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Login.tsx",
        className: "min-h-screen flex flex-col items-center justify-center p-6",
        children: [i.jsx(ar, {
            "data-inspector-line": "39",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Login.tsx",
            message: "Login realizado!",
            subMessage: "Bem-vindo de volta ao Monety",
            isVisible: m,
            onClose: () => v(!1)
        }), i.jsxs("div", {
            "data-inspector-line": "46",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Login.tsx",
            className: "w-full max-w-md animate-fade-in",
            children: [i.jsxs("div", {
                "data-inspector-line": "47",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Login.tsx",
                className: "text-center mb-8",
                children: [i.jsx("div", {
                    "data-inspector-line": "48",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    className: "flex justify-center mb-4",
                    children: i.jsx(Eu, {
                        "data-inspector-line": "49",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        size: "md"
                    })
                }), i.jsx("h1", {
                    "data-inspector-line": "51",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    className: "text-3xl font-extrabold text-white",
                    children: "Monety"
                }), i.jsx("p", {
                    "data-inspector-line": "52",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    className: "text-gray-400 mt-2",
                    children: "Investimentos Inteligentes"
                })]
            }), i.jsxs("form", {
                "data-inspector-line": "55",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Login.tsx",
                onSubmit: w,
                className: "space-y-4",
                children: [c && i.jsxs("div", {
                    "data-inspector-line": "57",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 animate-slide-down",
                    children: [i.jsx(nr, {
                        "data-inspector-line": "58",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    }), i.jsx("p", {
                        "data-inspector-line": "59",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        className: "text-red-400 text-sm",
                        children: c
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "63",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    className: "relative",
                    children: [i.jsx(Gi, {
                        "data-inspector-line": "64",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                    }), i.jsx("input", {
                        "data-inspector-line": "65",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        type: "email",
                        value: n,
                        onChange: y => r(y.target.value),
                        placeholder: "Seu e-mail",
                        className: "w-full bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "75",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    className: "relative",
                    children: [i.jsx(qs, {
                        "data-inspector-line": "76",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                    }), i.jsx("input", {
                        "data-inspector-line": "77",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        type: l ? "text" : "password",
                        value: a,
                        onChange: y => s(y.target.value),
                        placeholder: "Sua senha",
                        className: "w-full bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl py-4 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all",
                        required: !0
                    }), i.jsx("button", {
                        "data-inspector-line": "85",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        type: "button",
                        onClick: () => o(!l),
                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors",
                        children: l ? i.jsx(Zs, {
                            "data-inspector-line": "90",
                            "data-inspector-column": "30",
                            "data-inspector-relative-path": "src/pages/Login.tsx",
                            className: "w-5 h-5"
                        }) : i.jsx(Js, {
                            "data-inspector-line": "90",
                            "data-inspector-column": "63",
                            "data-inspector-relative-path": "src/pages/Login.tsx",
                            className: "w-5 h-5"
                        })
                    })]
                }), i.jsx("button", {
                    "data-inspector-line": "94",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    type: "submit",
                    disabled: h,
                    className: "w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 shadow-lg shadow-primary-500/30",
                    children: h ? "Entrando..." : "ENTRAR"
                })]
            }), i.jsx("div", {
                "data-inspector-line": "103",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Login.tsx",
                className: "mt-6 text-center",
                children: i.jsxs("p", {
                    "data-inspector-line": "104",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Login.tsx",
                    className: "text-gray-400",
                    children: ["Não tem uma conta?", " ", i.jsx("button", {
                        "data-inspector-line": "106",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Login.tsx",
                        onClick: t,
                        className: "text-primary-500 font-semibold hover:text-primary-400 transition-colors",
                        children: "Cadastre-se"
                    })]
                })
            })]
        })]
    })
}
function Ef({onRegister: e, onGoToLogin: t, initialInviteCode: n=""}) {
    const [r,a] = T.useState("")
      , [s,l] = T.useState("")
      , [o,c] = T.useState("")
      , [p,h] = T.useState("")
      , [x,m] = T.useState(n)
      , [v,w] = T.useState(!1)
      , [y,L] = T.useState(!1)
      , [d,u] = T.useState("")
      , [f,g] = T.useState(!1)
      , [N,j] = T.useState(!1)
      , S = o === p
      , P = p.length > 0 && !S
      , D = async R => {
        if (R.preventDefault(),
        u(""),
        !r.trim()) {
            u("Digite seu nome");
            return
        }
        if (!S) {
            u("As senhas não coincidem");
            return
        }
        if (o.length < 6) {
            u("A senha deve ter pelo menos 6 caracteres");
            return
        }
        g(!0);
        const K = e(r, s, o, x || void 0);
        K.success ? (j(!0),
        setTimeout( () => {
            g(!1),
            t()
        }
        , 2e3)) : (u(K.error || "Erro ao criar conta"),
        g(!1))
    }
    ;
    return i.jsxs("div", {
        "data-inspector-line": "63",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Register.tsx",
        className: "min-h-screen flex flex-col items-center justify-center p-6",
        children: [i.jsx(ar, {
            "data-inspector-line": "64",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Register.tsx",
            message: "Conta criada!",
            subMessage: "Parabéns! Seu cadastro foi realizado com sucesso",
            isVisible: N,
            onClose: () => j(!1)
        }), i.jsxs("div", {
            "data-inspector-line": "71",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Register.tsx",
            className: "w-full max-w-md animate-fade-in",
            children: [i.jsxs("div", {
                "data-inspector-line": "72",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Register.tsx",
                className: "text-center mb-8",
                children: [i.jsx("div", {
                    "data-inspector-line": "73",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "flex justify-center mb-4",
                    children: i.jsx(Eu, {
                        "data-inspector-line": "74",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        size: "md"
                    })
                }), i.jsx("h1", {
                    "data-inspector-line": "76",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "text-3xl font-extrabold text-white",
                    children: "Monety"
                }), i.jsx("p", {
                    "data-inspector-line": "77",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "text-gray-400 mt-2",
                    children: "Crie sua conta gratuita"
                })]
            }), i.jsxs("form", {
                "data-inspector-line": "80",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Register.tsx",
                onSubmit: D,
                className: "space-y-4",
                children: [d && i.jsxs("div", {
                    "data-inspector-line": "82",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 animate-slide-down",
                    children: [i.jsx(nr, {
                        "data-inspector-line": "83",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    }), i.jsx("p", {
                        "data-inspector-line": "84",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "text-red-400 text-sm",
                        children: d
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "88",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "relative",
                    children: [i.jsx(Su, {
                        "data-inspector-line": "89",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                    }), i.jsx("input", {
                        "data-inspector-line": "90",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        type: "text",
                        value: r,
                        onChange: R => a(R.target.value),
                        placeholder: "Seu nome completo",
                        className: "w-full bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "100",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "relative",
                    children: [i.jsx(Gi, {
                        "data-inspector-line": "101",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                    }), i.jsx("input", {
                        "data-inspector-line": "102",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        type: "email",
                        value: s,
                        onChange: R => l(R.target.value),
                        placeholder: "Seu e-mail",
                        className: "w-full bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "112",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "relative",
                    children: [i.jsx(qs, {
                        "data-inspector-line": "113",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                    }), i.jsx("input", {
                        "data-inspector-line": "114",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        type: v ? "text" : "password",
                        value: o,
                        onChange: R => c(R.target.value),
                        placeholder: "Criar senha",
                        className: "w-full bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl py-4 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all",
                        required: !0
                    }), i.jsx("button", {
                        "data-inspector-line": "122",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        type: "button",
                        onClick: () => w(!v),
                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors",
                        children: v ? i.jsx(Zs, {
                            "data-inspector-line": "127",
                            "data-inspector-column": "30",
                            "data-inspector-relative-path": "src/pages/Register.tsx",
                            className: "w-5 h-5"
                        }) : i.jsx(Js, {
                            "data-inspector-line": "127",
                            "data-inspector-column": "63",
                            "data-inspector-relative-path": "src/pages/Register.tsx",
                            className: "w-5 h-5"
                        })
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "131",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "relative",
                    children: [i.jsx(qs, {
                        "data-inspector-line": "132",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                    }), i.jsx("input", {
                        "data-inspector-line": "133",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        type: y ? "text" : "password",
                        value: p,
                        onChange: R => h(R.target.value),
                        placeholder: "Confirmar senha",
                        className: `w-full bg-dark-700/80 backdrop-blur-sm border rounded-xl py-4 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none transition-all ${P ? "border-red-500" : p && S ? "border-primary-500" : "border-dark-600 focus:border-primary-500"}`,
                        required: !0
                    }), i.jsx("button", {
                        "data-inspector-line": "143",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        type: "button",
                        onClick: () => L(!y),
                        className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors",
                        children: y ? i.jsx(Zs, {
                            "data-inspector-line": "148",
                            "data-inspector-column": "37",
                            "data-inspector-relative-path": "src/pages/Register.tsx",
                            className: "w-5 h-5"
                        }) : i.jsx(Js, {
                            "data-inspector-line": "148",
                            "data-inspector-column": "70",
                            "data-inspector-relative-path": "src/pages/Register.tsx",
                            className: "w-5 h-5"
                        })
                    })]
                }), P && i.jsxs("div", {
                    "data-inspector-line": "153",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "flex items-center gap-2 text-red-400 text-sm animate-slide-down",
                    children: [i.jsx(nr, {
                        "data-inspector-line": "154",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "w-4 h-4"
                    }), i.jsx("span", {
                        "data-inspector-line": "155",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        children: "As senhas não coincidem"
                    })]
                }), p && S && i.jsxs("div", {
                    "data-inspector-line": "160",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "flex items-center gap-2 text-primary-400 text-sm animate-slide-down",
                    children: [i.jsx(rn, {
                        "data-inspector-line": "161",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "w-4 h-4"
                    }), i.jsx("span", {
                        "data-inspector-line": "162",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        children: "Senhas coincidem"
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "166",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "relative",
                    children: [i.jsx(rr, {
                        "data-inspector-line": "167",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                    }), i.jsx("input", {
                        "data-inspector-line": "168",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        type: "text",
                        value: x,
                        onChange: R => m(R.target.value.toUpperCase()),
                        placeholder: "Código de convite (opcional)",
                        className: "w-full bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all"
                    })]
                }), i.jsx("button", {
                    "data-inspector-line": "177",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    type: "submit",
                    disabled: f || P,
                    className: "w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 shadow-lg shadow-primary-500/30",
                    children: f ? "Criando conta..." : "CRIAR CONTA"
                })]
            }), i.jsx("div", {
                "data-inspector-line": "186",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Register.tsx",
                className: "mt-6 text-center",
                children: i.jsxs("p", {
                    "data-inspector-line": "187",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Register.tsx",
                    className: "text-gray-400",
                    children: ["Já tem uma conta?", " ", i.jsx("button", {
                        "data-inspector-line": "189",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Register.tsx",
                        onClick: t,
                        className: "text-primary-500 font-semibold hover:text-primary-400 transition-colors",
                        children: "Entrar"
                    })]
                })
            })]
        })]
    })
}
function Rf({spins: e, onSpin: t}) {
    const [n,r] = T.useState(!1)
      , [a,s] = T.useState(null)
      , [l,o] = T.useState(0)
      , [c,p] = T.useState(!1)
      , h = [{
        value: 1,
        label: "R$ 1",
        color: "#22c55e"
    }, {
        value: 5,
        label: "R$ 5",
        color: "#15803d"
    }, {
        value: 10,
        label: "R$ 10",
        color: "#16a34a"
    }, {
        value: 15,
        label: "R$ 15",
        color: "#166534"
    }, {
        value: 20,
        label: "R$ 20",
        color: "#22c55e"
    }, {
        value: 35,
        label: "R$ 35",
        color: "#15803d"
    }, {
        value: 50,
        label: "R$ 50",
        color: "#16a34a"
    }, {
        value: 100,
        label: "R$ 100",
        color: "#166534"
    }]
      , x = 360 / h.length
      , m = () => {
        if (e <= 0 || n)
            return;
        r(!0),
        p(!1);
        const v = t();
        if (v === null) {
            r(!1);
            return
        }
        const L = 360 - (h.findIndex(g => g.value === v) * x + x / 2)
          , d = (5 + Math.floor(Math.random() * 3)) * 360
          , u = (Math.random() - .5) * (x * .4)
          , f = l + d + L + u;
        o(f),
        setTimeout( () => {
            r(!1),
            s(v),
            p(!0)
        }
        , 4e3)
    }
    ;
    return i.jsxs("div", {
        "data-inspector-line": "59",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/components/Roulette.tsx",
        className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-4 animate-fade-in",
        children: [i.jsxs("div", {
            "data-inspector-line": "60",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/Roulette.tsx",
            className: "flex items-center justify-between mb-4",
            children: [i.jsxs("div", {
                "data-inspector-line": "61",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                className: "flex items-center gap-2",
                children: [i.jsx(ju, {
                    "data-inspector-line": "62",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "w-5 h-5 text-primary-500"
                }), i.jsx("h3", {
                    "data-inspector-line": "63",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "font-bold text-lg text-white",
                    children: "Roleta Premiada"
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "65",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                className: "bg-dark-600 px-3 py-1 rounded-full",
                children: [i.jsx("span", {
                    "data-inspector-line": "66",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "text-sm text-gray-400",
                    children: "Giros: "
                }), i.jsx("span", {
                    "data-inspector-line": "67",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "font-bold text-primary-500",
                    children: e
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "71",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/Roulette.tsx",
            className: "bg-dark-600/50 border border-dark-500 rounded-xl p-3 mb-4 flex items-start gap-2",
            children: [i.jsx(hf, {
                "data-inspector-line": "72",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                className: "w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
            }), i.jsxs("div", {
                "data-inspector-line": "73",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                children: [i.jsx("p", {
                    "data-inspector-line": "74",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "text-primary-500 font-semibold text-sm",
                    children: "Como ganhar giros?"
                }), i.jsxs("p", {
                    "data-inspector-line": "75",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "text-gray-400 text-xs",
                    children: ["Ganhe giros ao fazer um ", i.jsx("span", {
                        "data-inspector-line": "76",
                        "data-inspector-column": "36",
                        "data-inspector-relative-path": "src/components/Roulette.tsx",
                        className: "text-primary-500",
                        children: "depósito"
                    }), " ou quando um ", i.jsx("span", {
                        "data-inspector-line": "76",
                        "data-inspector-column": "100",
                        "data-inspector-relative-path": "src/components/Roulette.tsx",
                        className: "text-primary-500",
                        children: "convidado nível 1"
                    }), " comprar um produto."]
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "81",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/Roulette.tsx",
            className: "relative flex justify-center items-center py-6",
            children: [i.jsx("div", {
                "data-inspector-line": "83",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                className: "absolute top-2 z-20",
                children: i.jsx("div", {
                    "data-inspector-line": "84",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "w-0 h-0 border-l-[14px] border-r-[14px] border-t-[24px] border-l-transparent border-r-transparent border-t-primary-500 drop-shadow-lg"
                })
            }), i.jsxs("div", {
                "data-inspector-line": "87",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                className: "relative",
                children: [i.jsx("div", {
                    "data-inspector-line": "89",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "absolute inset-[-8px] rounded-full bg-gradient-to-b from-primary-400 to-primary-700 opacity-50"
                }), i.jsxs("div", {
                    "data-inspector-line": "92",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                    className: "relative w-64 h-64 rounded-full shadow-2xl overflow-hidden",
                    style: {
                        transform: `rotate(${l}deg)`,
                        transition: n ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
                        boxShadow: "0 0 40px rgba(34, 197, 94, 0.3)"
                    },
                    children: [i.jsx("svg", {
                        "data-inspector-line": "100",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/components/Roulette.tsx",
                        viewBox: "0 0 200 200",
                        className: "w-full h-full",
                        children: h.map( (v, w) => {
                            const y = w * x - 90
                              , L = (w + 1) * x - 90
                              , d = y * Math.PI / 180
                              , u = L * Math.PI / 180
                              , f = 100 + 100 * Math.cos(d)
                              , g = 100 + 100 * Math.sin(d)
                              , N = 100 + 100 * Math.cos(u)
                              , j = 100 + 100 * Math.sin(u)
                              , S = x > 180 ? 1 : 0
                              , P = `M 100 100 L ${f} ${g} A 100 100 0 ${S} 1 ${N} ${j} Z`
                              , D = (y + L) / 2 * Math.PI / 180
                              , R = 100 + 62 * Math.cos(D)
                              , K = 100 + 62 * Math.sin(D)
                              , Se = (y + L) / 2 + 90;
                            return i.jsxs("g", {
                                "data-inspector-line": "121",
                                "data-inspector-column": "18",
                                "data-inspector-relative-path": "src/components/Roulette.tsx",
                                children: [i.jsx("path", {
                                    "data-inspector-line": "122",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                                    d: P,
                                    fill: v.color,
                                    stroke: "#0a0a0a",
                                    strokeWidth: "2"
                                }), i.jsx("text", {
                                    "data-inspector-line": "128",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/components/Roulette.tsx",
                                    x: R,
                                    y: K,
                                    fill: "white",
                                    fontSize: "11",
                                    fontWeight: "bold",
                                    textAnchor: "middle",
                                    dominantBaseline: "middle",
                                    transform: `rotate(${Se}, ${R}, ${K})`,
                                    style: {
                                        textShadow: "1px 1px 3px rgba(0,0,0,0.8)"
                                    },
                                    children: v.label
                                })]
                            }, w)
                        }
                        )
                    }), i.jsx("div", {
                        "data-inspector-line": "147",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/components/Roulette.tsx",
                        className: "absolute inset-0 flex items-center justify-center",
                        children: i.jsx("div", {
                            "data-inspector-line": "148",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/components/Roulette.tsx",
                            className: "w-16 h-16 bg-dark-800 rounded-full border-4 border-primary-500 flex items-center justify-center shadow-lg",
                            children: i.jsx(yf, {
                                "data-inspector-line": "149",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/components/Roulette.tsx",
                                className: `w-6 h-6 text-primary-500 ${n ? "animate-spin" : ""}`
                            })
                        })
                    })]
                })]
            })]
        }), c && a !== null && i.jsxs("div", {
            "data-inspector-line": "157",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/components/Roulette.tsx",
            className: "text-center p-4 rounded-xl mb-4 bg-primary-500/20 border border-primary-500/30 animate-slide-up",
            children: [i.jsx("p", {
                "data-inspector-line": "158",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                className: "text-primary-400 font-medium",
                children: "Parabéns! Você ganhou"
            }), i.jsxs("p", {
                "data-inspector-line": "159",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/components/Roulette.tsx",
                className: "text-3xl font-bold text-white",
                children: ["R$ ", a.toFixed(2)]
            })]
        }), i.jsx("button", {
            "data-inspector-line": "163",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/Roulette.tsx",
            onClick: m,
            disabled: e <= 0 || n,
            className: `w-full py-4 rounded-xl font-bold text-lg transition-all ${e > 0 && !n ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/30" : "bg-dark-600 text-gray-500 cursor-not-allowed"}`,
            children: n ? "Girando..." : "GIRAR ROLETA"
        })]
    })
}
function Tf({checkinDays: e, lastCheckin: t, onCheckin: n}) {
    const r = new Date().toDateString()
      , a = t !== r
      , s = e.length + 1
      , l = [1, 2, 3, 4, 5, 7, 10]
      , o = () => {
        a && s <= 7 && n(s)
    }
    ;
    return i.jsxs("div", {
        "data-inspector-line": "23",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
        className: "bg-dark-700 border border-dark-600 rounded-2xl p-4",
        children: [i.jsxs("div", {
            "data-inspector-line": "24",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
            className: "flex items-center gap-2 mb-4",
            children: [i.jsx(of, {
                "data-inspector-line": "25",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
                className: "w-5 h-5 text-primary-500"
            }), i.jsx("h3", {
                "data-inspector-line": "26",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
                className: "font-bold text-lg text-white",
                children: "Login Diário"
            })]
        }), i.jsx("div", {
            "data-inspector-line": "29",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
            className: "grid grid-cols-7 gap-2 mb-4",
            children: [1, 2, 3, 4, 5, 6, 7].map(c => {
                const p = e.includes(c)
                  , h = c === s && a
                  , x = l[c - 1];
                return i.jsxs("div", {
                    "data-inspector-line": "36",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
                    className: `relative flex flex-col items-center justify-center p-2 rounded-xl transition-all ${p ? "bg-primary-500/20 border border-primary-500/50" : h ? "bg-primary-500/10 border border-primary-500 animate-pulse" : "bg-dark-600 border border-dark-500"}`,
                    children: [i.jsxs("span", {
                        "data-inspector-line": "46",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
                        className: "text-xs text-gray-400 mb-1",
                        children: ["Dia ", c]
                    }), p ? i.jsx(cf, {
                        "data-inspector-line": "48",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
                        className: "w-5 h-5 text-primary-500"
                    }) : i.jsx(ju, {
                        "data-inspector-line": "50",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
                        className: `w-5 h-5 ${h ? "text-primary-500" : "text-gray-500"}`
                    }), i.jsxs("span", {
                        "data-inspector-line": "52",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
                        className: `text-xs font-bold mt-1 ${p || h ? "text-primary-400" : "text-gray-500"}`,
                        children: ["R$", x]
                    })]
                }, c)
            }
            )
        }), i.jsx("button", {
            "data-inspector-line": "60",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/components/DailyCheckin.tsx",
            onClick: o,
            disabled: !a || s > 7,
            className: `w-full py-3 rounded-xl font-bold transition-all ${a && s <= 7 ? "bg-primary-500 text-white hover:bg-primary-600" : "bg-dark-600 text-gray-500 cursor-not-allowed"}`,
            children: s > 7 ? "Ciclo Completo!" : a ? `Resgatar R$ ${l[s - 1] || 0}` : "Já fez check-in hoje"
        })]
    })
}
function _f({user: e, onCheckin: t, onSpinRoulette: n}) {
    const [r,a] = T.useState(!1)
      , [s,l] = T.useState(0)
      , o = c => {
        const h = [1, 2, 3, 4, 5, 7, 10][c - 1] || 0
          , x = t(c);
        return x && (l(h),
        a(!0)),
        x
    }
    ;
    return i.jsxs("div", {
        "data-inspector-line": "30",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Home.tsx",
        className: "pb-20 px-4 pt-4",
        children: [i.jsx(ar, {
            "data-inspector-line": "31",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Home.tsx",
            message: "Parabéns!",
            subMessage: `Você ganhou R$ ${s.toFixed(2)} no login diário`,
            isVisible: r,
            onClose: () => a(!1)
        }), i.jsxs("div", {
            "data-inspector-line": "38",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Home.tsx",
            className: "flex items-center justify-between mb-6 animate-slide-down",
            children: [i.jsxs("div", {
                "data-inspector-line": "39",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                children: [i.jsx("p", {
                    "data-inspector-line": "40",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "text-gray-400 text-sm",
                    children: "Bem-vindo de volta"
                }), i.jsx("h1", {
                    "data-inspector-line": "41",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "text-xl font-bold text-white",
                    children: e.name || e.email.split("@")[0]
                })]
            }), i.jsx("div", {
                "data-inspector-line": "43",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                className: "w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30",
                children: i.jsx("span", {
                    "data-inspector-line": "44",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "text-xl font-bold text-white",
                    children: e.name ? e.name[0].toUpperCase() : e.email[0].toUpperCase()
                })
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "48",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Home.tsx",
            className: "grid grid-cols-2 gap-3 mb-6",
            children: [i.jsxs("div", {
                "data-inspector-line": "49",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm rounded-2xl p-4 border border-dark-600 animate-fade-in",
                children: [i.jsxs("div", {
                    "data-inspector-line": "50",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "flex items-center gap-2 mb-2",
                    children: [i.jsx("div", {
                        "data-inspector-line": "51",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Home.tsx",
                        className: "w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center",
                        children: i.jsx(Yt, {
                            "data-inspector-line": "52",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Home.tsx",
                            className: "w-4 h-4 text-primary-500"
                        })
                    }), i.jsx("span", {
                        "data-inspector-line": "54",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Home.tsx",
                        className: "text-gray-400 text-sm",
                        children: "Ganhos Hoje"
                    })]
                }), i.jsxs("p", {
                    "data-inspector-line": "56",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "text-2xl font-bold text-primary-500",
                    children: ["R$ ", e.todayEarnings.toFixed(2)]
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "59",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm rounded-2xl p-4 border border-dark-600 animate-fade-in",
                children: [i.jsxs("div", {
                    "data-inspector-line": "60",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "flex items-center gap-2 mb-2",
                    children: [i.jsx("div", {
                        "data-inspector-line": "61",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Home.tsx",
                        className: "w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center",
                        children: i.jsx(rr, {
                            "data-inspector-line": "62",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Home.tsx",
                            className: "w-4 h-4 text-primary-500"
                        })
                    }), i.jsx("span", {
                        "data-inspector-line": "64",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Home.tsx",
                        className: "text-gray-400 text-sm",
                        children: "Convidados"
                    })]
                }), i.jsx("p", {
                    "data-inspector-line": "66",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "text-2xl font-bold text-primary-500",
                    children: e.referrals.length
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "70",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Home.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-5 mb-6 animate-fade-in",
            children: [i.jsxs("div", {
                "data-inspector-line": "71",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                className: "flex items-center gap-2 mb-2",
                children: [i.jsx(Pu, {
                    "data-inspector-line": "72",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "w-5 h-5 text-primary-500"
                }), i.jsx("span", {
                    "data-inspector-line": "73",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "text-gray-400 text-sm",
                    children: "Saldo Disponível"
                })]
            }), i.jsxs("p", {
                "data-inspector-line": "75",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                className: "text-3xl font-extrabold text-white",
                children: ["R$ ", e.balance.toFixed(2)]
            }), i.jsx("div", {
                "data-inspector-line": "76",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                className: "mt-3 pt-3 border-t border-dark-600",
                children: i.jsxs("div", {
                    "data-inspector-line": "77",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Home.tsx",
                    className: "flex justify-between text-sm",
                    children: [i.jsx("span", {
                        "data-inspector-line": "78",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Home.tsx",
                        className: "text-gray-500",
                        children: "Total Ganhos"
                    }), i.jsxs("span", {
                        "data-inspector-line": "79",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Home.tsx",
                        className: "text-primary-500 font-semibold",
                        children: ["R$ ", e.totalEarnings.toFixed(2)]
                    })]
                })
            })]
        }), i.jsx("div", {
            "data-inspector-line": "84",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Home.tsx",
            className: "mb-6",
            children: i.jsx(Tf, {
                "data-inspector-line": "85",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Home.tsx",
                checkinDays: e.checkinDays,
                lastCheckin: e.lastCheckin,
                onCheckin: o
            })
        }), i.jsx(Rf, {
            "data-inspector-line": "92",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Home.tsx",
            spins: e.rouletteSpins,
            onSpin: n
        })]
    })
}
const Lf = [{
    id: 1,
    name: "Minerador Bronze",
    price: 30,
    dailyReturn: 6,
    duration: 60,
    icon: "pickaxe",
    tier: "bronze"
}, {
    id: 2,
    name: "Minerador Prata",
    price: 50,
    dailyReturn: 10,
    duration: 60,
    icon: "pickaxe",
    tier: "silver"
}, {
    id: 3,
    name: "Minerador Ouro",
    price: 100,
    dailyReturn: 20,
    duration: 60,
    icon: "gem",
    tier: "gold"
}, {
    id: 4,
    name: "Minerador Platina",
    price: 250,
    dailyReturn: 50,
    duration: 60,
    icon: "sparkles",
    tier: "platinum"
}, {
    id: 5,
    name: "Minerador Diamante",
    price: 500,
    dailyReturn: 100,
    duration: 60,
    icon: "gem",
    tier: "diamond"
}, {
    id: 6,
    name: "Minerador Esmeralda",
    price: 1e3,
    dailyReturn: 200,
    duration: 60,
    icon: "star",
    tier: "emerald"
}, {
    id: 7,
    name: "Minerador Elite",
    price: 2500,
    dailyReturn: 500,
    duration: 60,
    icon: "crown",
    tier: "elite"
}]
  , zf = {
    bronze: {
        bg: "bg-amber-900/20",
        border: "border-amber-700/30",
        icon: "text-amber-500"
    },
    silver: {
        bg: "bg-gray-500/20",
        border: "border-gray-500/30",
        icon: "text-gray-400"
    },
    gold: {
        bg: "bg-yellow-600/20",
        border: "border-yellow-600/30",
        icon: "text-yellow-500"
    },
    platinum: {
        bg: "bg-cyan-600/20",
        border: "border-cyan-600/30",
        icon: "text-cyan-400"
    },
    diamond: {
        bg: "bg-blue-600/20",
        border: "border-blue-600/30",
        icon: "text-blue-400"
    },
    emerald: {
        bg: "bg-emerald-600/20",
        border: "border-emerald-600/30",
        icon: "text-emerald-400"
    },
    elite: {
        bg: "bg-primary-600/20",
        border: "border-primary-600/30",
        icon: "text-primary-400"
    }
}
  , Mf = (e, t) => ({
    pickaxe: i.jsx(lo, {
        "data-inspector-line": "33",
        "data-inspector-column": "13",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: t
    }),
    gem: i.jsx(pf, {
        "data-inspector-line": "34",
        "data-inspector-column": "9",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: t
    }),
    crown: i.jsx(df, {
        "data-inspector-line": "35",
        "data-inspector-column": "11",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: t
    }),
    sparkles: i.jsx(kf, {
        "data-inspector-line": "36",
        "data-inspector-column": "14",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: t
    }),
    zap: i.jsx(Sf, {
        "data-inspector-line": "37",
        "data-inspector-column": "9",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: t
    }),
    star: i.jsx(Nf, {
        "data-inspector-line": "38",
        "data-inspector-column": "10",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: t
    }),
    award: i.jsx(ku, {
        "data-inspector-line": "39",
        "data-inspector-column": "11",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: t
    })
})[e] || i.jsx(lo, {
    "data-inspector-line": "41",
    "data-inspector-column": "28",
    "data-inspector-relative-path": "src/pages/Products.tsx",
    className: t
});
function Df(e, t) {
    const n = new Date(e)
      , a = new Date().getTime() - n.getTime()
      , s = Math.floor(a / (1e3 * 60 * 60 * 24));
    return Math.max(0, t - s)
}
function bf({user: e, onInvest: t}) {
    const [n,r] = T.useState(!1)
      , [a,s] = T.useState(!1)
      , [l,o] = T.useState("")
      , [c,p] = T.useState(!1)
      , h = m => {
        if (e.balance < m.price) {
            s(!0);
            return
        }
        t(m) && (o(m.name),
        r(!0))
    }
      , x = e.investments.filter(m => m.status === "active");
    return i.jsxs("div", {
        "data-inspector-line": "74",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Products.tsx",
        className: "pb-20 px-4 pt-4",
        children: [i.jsx(ar, {
            "data-inspector-line": "75",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Products.tsx",
            message: "Compra realizada!",
            subMessage: `Você adquiriu o ${l} com sucesso`,
            isVisible: n,
            onClose: () => r(!1)
        }), i.jsx(ar, {
            "data-inspector-line": "82",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Products.tsx",
            message: "Saldo insuficiente",
            subMessage: "Faça um depósito para continuar",
            isVisible: a,
            onClose: () => s(!1)
        }), i.jsxs("div", {
            "data-inspector-line": "89",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Products.tsx",
            className: "flex items-center justify-between mb-4 animate-slide-down",
            children: [i.jsxs("div", {
                "data-inspector-line": "90",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Products.tsx",
                children: [i.jsx("h1", {
                    "data-inspector-line": "91",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "text-2xl font-bold text-white",
                    children: "Produtos"
                }), i.jsx("p", {
                    "data-inspector-line": "92",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "text-gray-400 text-sm",
                    children: "Invista e receba 20% de retorno diário"
                })]
            }), i.jsxs("button", {
                "data-inspector-line": "94",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Products.tsx",
                onClick: () => p(!0),
                className: "flex items-center gap-2 bg-dark-700/80 backdrop-blur-sm border border-dark-600 px-4 py-2 rounded-xl hover:bg-dark-600 transition-all",
                children: [i.jsx(Fn, {
                    "data-inspector-line": "98",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "w-4 h-4 text-primary-500"
                }), i.jsx("span", {
                    "data-inspector-line": "99",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "text-sm text-white",
                    children: "Histórico"
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "103",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Products.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-primary-500/20 rounded-xl p-3 mb-6 flex items-center gap-3 animate-fade-in",
            children: [i.jsx(Yt, {
                "data-inspector-line": "104",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Products.tsx",
                className: "w-5 h-5 text-primary-500 flex-shrink-0"
            }), i.jsxs("p", {
                "data-inspector-line": "105",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Products.tsx",
                className: "text-sm text-gray-300",
                children: ["Todos os mineradores rendem ", i.jsx("span", {
                    "data-inspector-line": "106",
                    "data-inspector-column": "38",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "text-primary-500 font-bold",
                    children: "20% ao dia"
                }), " sobre o valor investido"]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "110",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Products.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 mb-6 flex items-center justify-between animate-fade-in",
            children: [i.jsxs("div", {
                "data-inspector-line": "111",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Products.tsx",
                children: [i.jsx("p", {
                    "data-inspector-line": "112",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "text-gray-400 text-sm",
                    children: "Seu saldo"
                }), i.jsxs("p", {
                    "data-inspector-line": "113",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "text-xl font-bold text-white",
                    children: ["R$ ", e.balance.toFixed(2)]
                })]
            }), i.jsx("div", {
                "data-inspector-line": "115",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Products.tsx",
                className: "w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center",
                children: i.jsx(Yt, {
                    "data-inspector-line": "116",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "w-5 h-5 text-primary-500"
                })
            })]
        }), i.jsx("div", {
            "data-inspector-line": "120",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Products.tsx",
            className: "space-y-3",
            children: Lf.map( (m, v) => {
                const w = zf[m.tier];
                return i.jsx("div", {
                    "data-inspector-line": "124",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: `${w.bg} border ${w.border} rounded-xl overflow-hidden animate-fade-in`,
                    style: {
                        animationDelay: `${v * 50}ms`
                    },
                    children: i.jsxs("div", {
                        "data-inspector-line": "129",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Products.tsx",
                        className: "p-4",
                        children: [i.jsx("div", {
                            "data-inspector-line": "130",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Products.tsx",
                            className: "flex items-center justify-between mb-3",
                            children: i.jsxs("div", {
                                "data-inspector-line": "131",
                                "data-inspector-column": "18",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "flex items-center gap-3",
                                children: [i.jsx("div", {
                                    "data-inspector-line": "132",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: `w-10 h-10 ${w.bg} rounded-lg flex items-center justify-center`,
                                    children: Mf(m.icon, `w-5 h-5 ${w.icon}`)
                                }), i.jsxs("div", {
                                    "data-inspector-line": "135",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    children: [i.jsx("h3", {
                                        "data-inspector-line": "136",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "font-bold text-white",
                                        children: m.name
                                    }), i.jsxs("p", {
                                        "data-inspector-line": "137",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "text-primary-500 font-bold",
                                        children: ["R$ ", m.price.toFixed(2)]
                                    })]
                                })]
                            })
                        }), i.jsxs("div", {
                            "data-inspector-line": "142",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Products.tsx",
                            className: "grid grid-cols-3 gap-2 mb-3",
                            children: [i.jsxs("div", {
                                "data-inspector-line": "143",
                                "data-inspector-column": "18",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "bg-dark-800/50 rounded-lg p-2 text-center",
                                children: [i.jsxs("div", {
                                    "data-inspector-line": "144",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "flex items-center justify-center gap-1 mb-1",
                                    children: [i.jsx(Yt, {
                                        "data-inspector-line": "145",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "w-3 h-3 text-primary-500"
                                    }), i.jsx("span", {
                                        "data-inspector-line": "146",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "text-gray-500 text-xs",
                                        children: "Diário"
                                    })]
                                }), i.jsxs("p", {
                                    "data-inspector-line": "148",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "text-sm font-bold text-primary-500",
                                    children: ["R$ ", m.dailyReturn.toFixed(2)]
                                })]
                            }), i.jsxs("div", {
                                "data-inspector-line": "150",
                                "data-inspector-column": "18",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "bg-dark-800/50 rounded-lg p-2 text-center",
                                children: [i.jsxs("div", {
                                    "data-inspector-line": "151",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "flex items-center justify-center gap-1 mb-1",
                                    children: [i.jsx(Ys, {
                                        "data-inspector-line": "152",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "w-3 h-3 text-gray-400"
                                    }), i.jsx("span", {
                                        "data-inspector-line": "153",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "text-gray-500 text-xs",
                                        children: "Duração"
                                    })]
                                }), i.jsxs("p", {
                                    "data-inspector-line": "155",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "text-sm font-bold text-white",
                                    children: [m.duration, " dias"]
                                })]
                            }), i.jsxs("div", {
                                "data-inspector-line": "157",
                                "data-inspector-column": "18",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "bg-dark-800/50 rounded-lg p-2 text-center",
                                children: [i.jsxs("div", {
                                    "data-inspector-line": "158",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "flex items-center justify-center gap-1 mb-1",
                                    children: [i.jsx(Yt, {
                                        "data-inspector-line": "159",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "w-3 h-3 text-primary-500"
                                    }), i.jsx("span", {
                                        "data-inspector-line": "160",
                                        "data-inspector-column": "22",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "text-gray-500 text-xs",
                                        children: "ROI"
                                    })]
                                }), i.jsxs("p", {
                                    "data-inspector-line": "162",
                                    "data-inspector-column": "20",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "text-sm font-bold text-primary-500",
                                    children: [(m.dailyReturn * m.duration / m.price * 100).toFixed(0), "%"]
                                })]
                            })]
                        }), i.jsxs("div", {
                            "data-inspector-line": "168",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Products.tsx",
                            className: "bg-dark-800/50 rounded-lg p-2 mb-3 text-center",
                            children: [i.jsxs("span", {
                                "data-inspector-line": "169",
                                "data-inspector-column": "18",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "text-gray-500 text-xs",
                                children: ["Retorno total em ", m.duration, " dias"]
                            }), i.jsxs("p", {
                                "data-inspector-line": "170",
                                "data-inspector-column": "18",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "text-lg font-bold text-primary-500",
                                children: ["R$ ", (m.dailyReturn * m.duration).toFixed(2)]
                            })]
                        }), i.jsx("button", {
                            "data-inspector-line": "175",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Products.tsx",
                            onClick: () => h(m),
                            disabled: e.balance < m.price,
                            className: `w-full py-3 rounded-xl font-bold text-sm transition-all ${e.balance >= m.price ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/20" : "bg-dark-600 text-gray-500 cursor-not-allowed"}`,
                            children: e.balance >= m.price ? "COMPRAR AGORA" : "SALDO INSUFICIENTE"
                        })]
                    })
                }, m.id)
            }
            )
        }), c && i.jsx("div", {
            "data-inspector-line": "193",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Products.tsx",
            className: "fixed inset-0 bg-black/80 z-50 flex items-end justify-center",
            children: i.jsxs("div", {
                "data-inspector-line": "194",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Products.tsx",
                className: "bg-dark-800 w-full max-w-lg rounded-t-3xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto",
                children: [i.jsxs("div", {
                    "data-inspector-line": "195",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "flex items-center justify-between mb-6",
                    children: [i.jsx("h2", {
                        "data-inspector-line": "196",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Products.tsx",
                        className: "text-xl font-bold text-white",
                        children: "Histórico de Compras"
                    }), i.jsx("button", {
                        "data-inspector-line": "197",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Products.tsx",
                        onClick: () => p(!1),
                        className: "w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center hover:bg-dark-600 transition-colors",
                        children: i.jsx(Cu, {
                            "data-inspector-line": "201",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Products.tsx",
                            className: "w-5 h-5 text-gray-400"
                        })
                    })]
                }), x.length === 0 ? i.jsxs("div", {
                    "data-inspector-line": "206",
                    "data-inspector-column": "14",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "text-center py-8",
                    children: [i.jsx(Fn, {
                        "data-inspector-line": "207",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Products.tsx",
                        className: "w-12 h-12 text-gray-600 mx-auto mb-3"
                    }), i.jsx("p", {
                        "data-inspector-line": "208",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Products.tsx",
                        className: "text-gray-400",
                        children: "Nenhum investimento ativo"
                    }), i.jsx("p", {
                        "data-inspector-line": "209",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Products.tsx",
                        className: "text-gray-500 text-sm",
                        children: "Compre um produto para começar a ganhar"
                    })]
                }) : i.jsx("div", {
                    "data-inspector-line": "212",
                    "data-inspector-column": "14",
                    "data-inspector-relative-path": "src/pages/Products.tsx",
                    className: "space-y-3",
                    children: x.map(m => {
                        const v = Df(m.startDate, m.totalDays);
                        return i.jsxs("div", {
                            "data-inspector-line": "216",
                            "data-inspector-column": "20",
                            "data-inspector-relative-path": "src/pages/Products.tsx",
                            className: "bg-dark-700 border border-dark-600 rounded-xl p-4",
                            children: [i.jsxs("div", {
                                "data-inspector-line": "217",
                                "data-inspector-column": "22",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "flex items-center justify-between mb-3",
                                children: [i.jsx("h3", {
                                    "data-inspector-line": "218",
                                    "data-inspector-column": "24",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "font-semibold text-white",
                                    children: m.productName
                                }), i.jsxs("span", {
                                    "data-inspector-line": "219",
                                    "data-inspector-column": "24",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "text-primary-500 font-bold",
                                    children: ["R$ ", m.amount.toFixed(2)]
                                })]
                            }), i.jsxs("div", {
                                "data-inspector-line": "221",
                                "data-inspector-column": "22",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "flex items-center justify-between",
                                children: [i.jsxs("div", {
                                    "data-inspector-line": "222",
                                    "data-inspector-column": "24",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "flex items-center gap-2 text-gray-400 text-sm",
                                    children: [i.jsx(jf, {
                                        "data-inspector-line": "223",
                                        "data-inspector-column": "26",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "w-4 h-4"
                                    }), i.jsx("span", {
                                        "data-inspector-line": "224",
                                        "data-inspector-column": "26",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        children: "Tempo restante"
                                    })]
                                }), i.jsx("div", {
                                    "data-inspector-line": "226",
                                    "data-inspector-column": "24",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "flex items-center gap-2",
                                    children: i.jsx("div", {
                                        "data-inspector-line": "227",
                                        "data-inspector-column": "26",
                                        "data-inspector-relative-path": "src/pages/Products.tsx",
                                        className: "bg-primary-500/20 px-3 py-1 rounded-full",
                                        children: i.jsxs("span", {
                                            "data-inspector-line": "228",
                                            "data-inspector-column": "28",
                                            "data-inspector-relative-path": "src/pages/Products.tsx",
                                            className: "text-primary-500 font-bold text-sm",
                                            children: [v, " dias"]
                                        })
                                    })
                                })]
                            }), i.jsx("div", {
                                "data-inspector-line": "232",
                                "data-inspector-column": "22",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "mt-2 bg-dark-600 rounded-full h-2 overflow-hidden",
                                children: i.jsx("div", {
                                    "data-inspector-line": "233",
                                    "data-inspector-column": "24",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "bg-gradient-to-r from-primary-500 to-primary-400 h-full transition-all",
                                    style: {
                                        width: `${(m.totalDays - v) / m.totalDays * 100}%`
                                    }
                                })
                            }), i.jsxs("p", {
                                "data-inspector-line": "238",
                                "data-inspector-column": "22",
                                "data-inspector-relative-path": "src/pages/Products.tsx",
                                className: "text-xs text-gray-500 mt-2",
                                children: ["Rendimento diário: ", i.jsxs("span", {
                                    "data-inspector-line": "239",
                                    "data-inspector-column": "43",
                                    "data-inspector-relative-path": "src/pages/Products.tsx",
                                    className: "text-primary-500",
                                    children: ["+R$ ", m.dailyReturn.toFixed(2)]
                                })]
                            })]
                        }, m.id)
                    }
                    )
                })]
            })
        })]
    })
}
function If({user: e}) {
    const [t,n] = T.useState(!1)
      , [r,a] = T.useState(1)
      , s = `https://monety.app/reg?code=${e.inviteCode}`
      , l = () => {
        navigator.clipboard.writeText(s),
        n(!0),
        setTimeout( () => n(!1), 2e3)
    }
      , o = () => {
        navigator.share ? navigator.share({
            title: "Monety - Investimentos Inteligentes",
            text: "Junte-se a mim na Monety e comece a ganhar 20% de retorno diário!",
            url: s
        }) : l()
    }
      , c = h => e.referrals.filter(x => x.level === h)
      , p = e.referrals.reduce( (h, x) => h + x.earnings, 0);
    return i.jsxs("div", {
        "data-inspector-line": "39",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Team.tsx",
        className: "pb-20 px-4 pt-4",
        children: [i.jsxs("div", {
            "data-inspector-line": "40",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Team.tsx",
            className: "mb-6 animate-slide-down",
            children: [i.jsx("h1", {
                "data-inspector-line": "41",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "text-2xl font-bold text-white",
                children: "Minha Equipe"
            }), i.jsx("p", {
                "data-inspector-line": "42",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "text-gray-400 text-sm",
                children: "Convide amigos e ganhe comissões"
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "45",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Team.tsx",
            className: "grid grid-cols-2 gap-3 mb-6",
            children: [i.jsxs("div", {
                "data-inspector-line": "46",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-4 animate-fade-in",
                children: [i.jsxs("div", {
                    "data-inspector-line": "47",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "flex items-center gap-2 mb-2",
                    children: [i.jsx("div", {
                        "data-inspector-line": "48",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center",
                        children: i.jsx(rr, {
                            "data-inspector-line": "49",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "w-4 h-4 text-primary-500"
                        })
                    }), i.jsx("span", {
                        "data-inspector-line": "51",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "text-gray-400 text-sm",
                        children: "Convidados"
                    })]
                }), i.jsx("p", {
                    "data-inspector-line": "53",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "text-2xl font-bold text-white",
                    children: e.referrals.length
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "56",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-4 animate-fade-in",
                children: [i.jsxs("div", {
                    "data-inspector-line": "57",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "flex items-center gap-2 mb-2",
                    children: [i.jsx("div", {
                        "data-inspector-line": "58",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center",
                        children: i.jsx(Yt, {
                            "data-inspector-line": "59",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "w-4 h-4 text-primary-500"
                        })
                    }), i.jsx("span", {
                        "data-inspector-line": "61",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "text-gray-400 text-sm",
                        children: "Comissões"
                    })]
                }), i.jsxs("p", {
                    "data-inspector-line": "63",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "text-2xl font-bold text-primary-500",
                    children: ["R$ ", p.toFixed(2)]
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "67",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Team.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-4 mb-6 animate-fade-in",
            children: [i.jsxs("div", {
                "data-inspector-line": "68",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "flex items-center gap-2 mb-4",
                children: [i.jsx(ku, {
                    "data-inspector-line": "69",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "w-5 h-5 text-primary-500"
                }), i.jsx("h3", {
                    "data-inspector-line": "70",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "font-bold text-white",
                    children: "Níveis de Comissão"
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "73",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "space-y-3",
                children: [i.jsxs("div", {
                    "data-inspector-line": "74",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "flex items-center justify-between bg-dark-600/50 rounded-xl p-3",
                    children: [i.jsxs("div", {
                        "data-inspector-line": "75",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "flex items-center gap-3",
                        children: [i.jsx("div", {
                            "data-inspector-line": "76",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center",
                            children: i.jsx("span", {
                                "data-inspector-line": "77",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-primary-500 font-bold",
                                children: "1"
                            })
                        }), i.jsxs("div", {
                            "data-inspector-line": "79",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            children: [i.jsx("p", {
                                "data-inspector-line": "80",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-white font-semibold",
                                children: "Nível 1"
                            }), i.jsx("p", {
                                "data-inspector-line": "81",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-gray-500 text-xs",
                                children: "Convites diretos"
                            })]
                        })]
                    }), i.jsx("span", {
                        "data-inspector-line": "84",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "text-xl font-bold text-primary-500",
                        children: "20%"
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "87",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "flex items-center justify-between bg-dark-600/50 rounded-xl p-3",
                    children: [i.jsxs("div", {
                        "data-inspector-line": "88",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "flex items-center gap-3",
                        children: [i.jsx("div", {
                            "data-inspector-line": "89",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center",
                            children: i.jsx("span", {
                                "data-inspector-line": "90",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-gray-400 font-bold",
                                children: "2"
                            })
                        }), i.jsxs("div", {
                            "data-inspector-line": "92",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            children: [i.jsx("p", {
                                "data-inspector-line": "93",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-white font-semibold",
                                children: "Nível 2"
                            }), i.jsx("p", {
                                "data-inspector-line": "94",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-gray-500 text-xs",
                                children: "Convites dos seus convidados"
                            })]
                        })]
                    }), i.jsx("span", {
                        "data-inspector-line": "97",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "text-xl font-bold text-gray-400",
                        children: "5%"
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "100",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "flex items-center justify-between bg-dark-600/50 rounded-xl p-3",
                    children: [i.jsxs("div", {
                        "data-inspector-line": "101",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "flex items-center gap-3",
                        children: [i.jsx("div", {
                            "data-inspector-line": "102",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "w-10 h-10 bg-gray-600/20 rounded-full flex items-center justify-center",
                            children: i.jsx("span", {
                                "data-inspector-line": "103",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-gray-500 font-bold",
                                children: "3"
                            })
                        }), i.jsxs("div", {
                            "data-inspector-line": "105",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            children: [i.jsx("p", {
                                "data-inspector-line": "106",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-white font-semibold",
                                children: "Nível 3"
                            }), i.jsx("p", {
                                "data-inspector-line": "107",
                                "data-inspector-column": "16",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-gray-500 text-xs",
                                children: "Terceiro nível"
                            })]
                        })]
                    }), i.jsx("span", {
                        "data-inspector-line": "110",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "text-xl font-bold text-gray-500",
                        children: "1%"
                    })]
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "115",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Team.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-4 mb-6 animate-fade-in",
            children: [i.jsx("h3", {
                "data-inspector-line": "116",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "font-bold text-white mb-3",
                children: "Seu Link de Convite"
            }), i.jsxs("div", {
                "data-inspector-line": "118",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "bg-dark-600/50 rounded-xl p-3 mb-4",
                children: [i.jsx("p", {
                    "data-inspector-line": "119",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "text-sm text-gray-400 mb-1",
                    children: "Código:"
                }), i.jsx("p", {
                    "data-inspector-line": "120",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "text-primary-500 font-bold text-lg",
                    children: e.inviteCode
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "123",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "bg-dark-600/50 rounded-xl p-3 mb-4",
                children: [i.jsx("p", {
                    "data-inspector-line": "124",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "text-sm text-gray-400 mb-1",
                    children: "Link:"
                }), i.jsx("p", {
                    "data-inspector-line": "125",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "text-gray-300 text-sm break-all",
                    children: s
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "128",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "grid grid-cols-2 gap-3",
                children: [i.jsxs("button", {
                    "data-inspector-line": "129",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    onClick: l,
                    className: `flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${t ? "bg-primary-500 text-white" : "bg-dark-600 text-white hover:bg-dark-500"}`,
                    children: [t ? i.jsx(rn, {
                        "data-inspector-line": "137",
                        "data-inspector-column": "22",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "w-5 h-5"
                    }) : i.jsx(Nu, {
                        "data-inspector-line": "137",
                        "data-inspector-column": "60",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "w-5 h-5"
                    }), t ? "Copiado!" : "Copiar"]
                }), i.jsxs("button", {
                    "data-inspector-line": "141",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    onClick: o,
                    className: "flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/20",
                    children: [i.jsx(wf, {
                        "data-inspector-line": "145",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "w-5 h-5"
                    }), "Compartilhar"]
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "151",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Team.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-4 animate-fade-in",
            children: [i.jsx("h3", {
                "data-inspector-line": "152",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "font-bold text-white mb-4",
                children: "Meus Convidados"
            }), i.jsx("div", {
                "data-inspector-line": "154",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "grid grid-cols-3 gap-2 mb-4",
                children: [1, 2, 3].map(h => i.jsxs("button", {
                    "data-inspector-line": "156",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    onClick: () => a(h),
                    className: `py-3 rounded-xl font-semibold text-sm transition-all ${r === h ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/20" : "bg-dark-600/50 text-gray-400 hover:bg-dark-500"}`,
                    children: ["Nível ", h, i.jsxs("span", {
                        "data-inspector-line": "166",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "ml-1 text-xs opacity-70",
                        children: ["(", c(h).length, ")"]
                    })]
                }, h))
            }), i.jsx("div", {
                "data-inspector-line": "173",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Team.tsx",
                className: "overflow-hidden",
                children: i.jsx("div", {
                    "data-inspector-line": "174",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Team.tsx",
                    className: "transition-all duration-300 ease-out",
                    children: c(r).length === 0 ? i.jsxs("div", {
                        "data-inspector-line": "179",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "text-center py-8 animate-fade-in",
                        children: [i.jsx(rr, {
                            "data-inspector-line": "180",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "w-12 h-12 text-gray-600 mx-auto mb-3"
                        }), i.jsxs("p", {
                            "data-inspector-line": "181",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "text-gray-400",
                            children: ["Nenhum convidado no nível ", r]
                        }), r === 1 && i.jsx("p", {
                            "data-inspector-line": "183",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "text-gray-500 text-sm",
                            children: "Compartilhe seu link e comece a ganhar!"
                        })]
                    }) : i.jsx("div", {
                        "data-inspector-line": "187",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Team.tsx",
                        className: "space-y-2 max-h-64 overflow-y-auto",
                        children: c(r).map( (h, x) => i.jsxs("div", {
                            "data-inspector-line": "189",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Team.tsx",
                            className: "flex items-center justify-between bg-dark-600/50 rounded-xl p-3 animate-slide-up",
                            style: {
                                animationDelay: `${x * 50}ms`
                            },
                            children: [i.jsxs("div", {
                                "data-inspector-line": "194",
                                "data-inspector-column": "20",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "flex items-center gap-3",
                                children: [i.jsx("div", {
                                    "data-inspector-line": "195",
                                    "data-inspector-column": "22",
                                    "data-inspector-relative-path": "src/pages/Team.tsx",
                                    className: "w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center",
                                    children: i.jsx("span", {
                                        "data-inspector-line": "196",
                                        "data-inspector-column": "24",
                                        "data-inspector-relative-path": "src/pages/Team.tsx",
                                        className: "text-primary-500 font-bold text-sm",
                                        children: h.name ? h.name[0].toUpperCase() : h.email[0].toUpperCase()
                                    })
                                }), i.jsxs("div", {
                                    "data-inspector-line": "200",
                                    "data-inspector-column": "22",
                                    "data-inspector-relative-path": "src/pages/Team.tsx",
                                    children: [i.jsx("p", {
                                        "data-inspector-line": "201",
                                        "data-inspector-column": "24",
                                        "data-inspector-relative-path": "src/pages/Team.tsx",
                                        className: "text-white font-medium text-sm",
                                        children: h.name || h.email
                                    }), i.jsx("p", {
                                        "data-inspector-line": "202",
                                        "data-inspector-column": "24",
                                        "data-inspector-relative-path": "src/pages/Team.tsx",
                                        className: "text-gray-500 text-xs",
                                        children: h.displayId
                                    })]
                                })]
                            }), i.jsxs("div", {
                                "data-inspector-line": "205",
                                "data-inspector-column": "20",
                                "data-inspector-relative-path": "src/pages/Team.tsx",
                                className: "text-right",
                                children: [i.jsxs("p", {
                                    "data-inspector-line": "206",
                                    "data-inspector-column": "22",
                                    "data-inspector-relative-path": "src/pages/Team.tsx",
                                    className: "text-primary-500 font-bold text-sm",
                                    children: ["+R$ ", h.earnings.toFixed(2)]
                                }), i.jsx("p", {
                                    "data-inspector-line": "207",
                                    "data-inspector-column": "22",
                                    "data-inspector-relative-path": "src/pages/Team.tsx",
                                    className: "text-gray-500 text-xs",
                                    children: new Date(h.joinedAt).toLocaleDateString("pt-BR")
                                })]
                            })]
                        }, h.id))
                    })
                }, r)
            })]
        })]
    })
}
function Of({user: e, onLogout: t, onDeposit: n, onConfirmDeposit: r, onWithdraw: a}) {
    const [s,l] = T.useState("main")
      , [o,c] = T.useState("")
      , [p,h] = T.useState("")
      , [x,m] = T.useState("")
      , [v,w] = T.useState("cpf")
      , [y,L] = T.useState(null)
      , [d,u] = T.useState(!1)
      , [f,g] = T.useState("")
      , [N,j] = T.useState(!1)
      , S = () => {
        const C = new Date().getHours();
        return C < 9 || C >= 17 ? {
            allowed: !1,
            message: "Saques permitidos apenas das 09:00 às 17:00"
        } : {
            allowed: !0
        }
    }
      , P = () => {
        const M = parseFloat(o);
        if (isNaN(M) || M < 30) {
            g("Valor mínimo de depósito: R$ 30,00"),
            setTimeout( () => g(""), 3e3);
            return
        }
        const C = n(M);
        C && L(C)
    }
      , D = () => {
        y && (r(y.id),
        u(!0),
        setTimeout( () => {
            u(!1),
            L(null),
            c(""),
            l("main")
        }
        , 2e3))
    }
      , R = () => {
        const M = S();
        if (!M.allowed) {
            g(M.message || "Saque não permitido no momento"),
            setTimeout( () => g(""), 3e3);
            return
        }
        const C = parseFloat(p);
        if (isNaN(C) || C < 35) {
            g("Valor mínimo de saque: R$ 35,00"),
            setTimeout( () => g(""), 3e3);
            return
        }
        if (C > e.balance) {
            g(`Saldo insuficiente. Seu saldo: R$ ${e.balance.toFixed(2)}`),
            setTimeout( () => g(""), 3e3);
            return
        }
        if (!x.trim()) {
            g("Digite sua chave PIX"),
            setTimeout( () => g(""), 3e3);
            return
        }
        const _ = a(C, x, v);
        _.success ? (u(!0),
        setTimeout( () => {
            u(!1),
            h(""),
            m(""),
            l("main")
        }
        , 2e3)) : (g(_.error || "Erro ao processar saque"),
        setTimeout( () => g(""), 3e3))
    }
      , K = () => {
        y != null && y.pixCode && (navigator.clipboard.writeText(y.pixCode),
        j(!0),
        setTimeout( () => j(!1), 2e3))
    }
      , Se = () => i.jsxs("div", {
        "data-inspector-line": "115",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Profile.tsx",
        className: "animate-fade-in",
        children: [i.jsxs("div", {
            "data-inspector-line": "117",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-6 mb-4",
            children: [i.jsxs("div", {
                "data-inspector-line": "118",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "flex items-center gap-4 mb-4",
                children: [i.jsx("div", {
                    "data-inspector-line": "119",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30",
                    children: i.jsx("span", {
                        "data-inspector-line": "120",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-2xl font-bold text-white",
                        children: e.name ? e.name[0].toUpperCase() : e.email[0].toUpperCase()
                    })
                }), i.jsxs("div", {
                    "data-inspector-line": "124",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    children: [i.jsx("h2", {
                        "data-inspector-line": "125",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-xl font-bold text-white",
                        children: e.name || e.email.split("@")[0]
                    }), i.jsx("p", {
                        "data-inspector-line": "126",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-400 text-sm",
                        children: e.email
                    }), i.jsxs("div", {
                        "data-inspector-line": "127",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "flex items-center gap-1 mt-1",
                        children: [i.jsx(ff, {
                            "data-inspector-line": "128",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "w-3 h-3 text-primary-500"
                        }), i.jsx("span", {
                            "data-inspector-line": "129",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-primary-500 text-xs font-mono",
                            children: e.displayId
                        })]
                    })]
                })]
            }), i.jsx("div", {
                "data-inspector-line": "134",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-600/50 rounded-xl p-4",
                children: i.jsxs("div", {
                    "data-inspector-line": "135",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex items-center justify-between",
                    children: [i.jsxs("div", {
                        "data-inspector-line": "136",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        children: [i.jsx("p", {
                            "data-inspector-line": "137",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-gray-400 text-sm",
                            children: "Saldo Disponível"
                        }), i.jsxs("p", {
                            "data-inspector-line": "138",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-2xl font-bold text-white",
                            children: ["R$ ", e.balance.toFixed(2)]
                        })]
                    }), i.jsx(Pu, {
                        "data-inspector-line": "140",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "w-8 h-8 text-primary-500"
                    })]
                })
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "146",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "grid grid-cols-2 gap-3 mb-4",
            children: [i.jsxs("button", {
                "data-inspector-line": "147",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                onClick: () => l("deposit"),
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-dark-600 transition-all",
                children: [i.jsx("div", {
                    "data-inspector-line": "151",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center",
                    children: i.jsx(ao, {
                        "data-inspector-line": "152",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "w-6 h-6 text-primary-500"
                    })
                }), i.jsx("span", {
                    "data-inspector-line": "154",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-white font-semibold",
                    children: "Depositar"
                })]
            }), i.jsxs("button", {
                "data-inspector-line": "157",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                onClick: () => l("withdraw"),
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-dark-600 transition-all",
                children: [i.jsx("div", {
                    "data-inspector-line": "161",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center",
                    children: i.jsx(so, {
                        "data-inspector-line": "162",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "w-6 h-6 text-primary-500"
                    })
                }), i.jsx("span", {
                    "data-inspector-line": "164",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-white font-semibold",
                    children: "Sacar"
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "169",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "grid grid-cols-2 gap-3 mb-4",
            children: [i.jsxs("a", {
                "data-inspector-line": "170",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                href: "https://t.me/+qasEE92ROa5iOTYx",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-dark-600 transition-all",
                children: [i.jsx(io, {
                    "data-inspector-line": "176",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-5 h-5 text-primary-500"
                }), i.jsx("span", {
                    "data-inspector-line": "177",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-white text-sm font-medium",
                    children: "Grupo Oficial"
                })]
            }), i.jsxs("a", {
                "data-inspector-line": "180",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                href: "https://t.me/+5598981275486",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-dark-600 transition-all",
                children: [i.jsx(io, {
                    "data-inspector-line": "186",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-5 h-5 text-primary-500"
                }), i.jsx("span", {
                    "data-inspector-line": "187",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-white text-sm font-medium",
                    children: "Suporte"
                })]
            })]
        }), i.jsxs("div", {
            "data-inspector-line": "192",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-2xl p-4 mb-4",
            children: [i.jsxs("h3", {
                "data-inspector-line": "193",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "font-bold text-white mb-4 flex items-center gap-2",
                children: [i.jsx(Fn, {
                    "data-inspector-line": "194",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-5 h-5 text-primary-500"
                }), "Histórico Financeiro"]
            }), i.jsxs("div", {
                "data-inspector-line": "198",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "grid grid-cols-2 gap-3",
                children: [i.jsxs("button", {
                    "data-inspector-line": "199",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    onClick: () => l("deposits-history"),
                    className: "bg-dark-600/50 hover:bg-dark-500 rounded-xl p-4 text-center transition-all",
                    children: [i.jsx(ao, {
                        "data-inspector-line": "203",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "w-6 h-6 text-primary-500 mx-auto mb-2"
                    }), i.jsx("p", {
                        "data-inspector-line": "204",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-white font-medium text-sm",
                        children: "Depósitos"
                    }), i.jsxs("p", {
                        "data-inspector-line": "205",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-500 text-xs",
                        children: [e.deposits.length, " registros"]
                    })]
                }), i.jsxs("button", {
                    "data-inspector-line": "208",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    onClick: () => l("withdrawals-history"),
                    className: "bg-dark-600/50 hover:bg-dark-500 rounded-xl p-4 text-center transition-all",
                    children: [i.jsx(so, {
                        "data-inspector-line": "212",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "w-6 h-6 text-primary-500 mx-auto mb-2"
                    }), i.jsx("p", {
                        "data-inspector-line": "213",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-white font-medium text-sm",
                        children: "Saques"
                    }), i.jsxs("p", {
                        "data-inspector-line": "214",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-500 text-xs",
                        children: [e.withdrawals.length, " registros"]
                    })]
                })]
            })]
        }), i.jsxs("button", {
            "data-inspector-line": "220",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            onClick: t,
            className: "w-full bg-dark-700/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-red-500/10 transition-all",
            children: [i.jsx(xf, {
                "data-inspector-line": "224",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "w-5 h-5 text-red-500"
            }), i.jsx("span", {
                "data-inspector-line": "225",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "text-red-500 font-semibold",
                children: "Sair da Conta"
            })]
        })]
    })
      , wt = () => i.jsxs("div", {
        "data-inspector-line": "231",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Profile.tsx",
        className: "animate-slide-up",
        children: [i.jsx("button", {
            "data-inspector-line": "232",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            onClick: () => {
                l("main"),
                L(null),
                c("")
            }
            ,
            className: "text-gray-400 mb-4 hover:text-white transition-colors",
            children: "← Voltar"
        }), i.jsx("h2", {
            "data-inspector-line": "243",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "text-xl font-bold text-white mb-6",
            children: "Depositar via PIX"
        }), f && i.jsxs("div", {
            "data-inspector-line": "246",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4 flex items-center gap-3 animate-slide-down",
            children: [i.jsx(nr, {
                "data-inspector-line": "247",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "w-5 h-5 text-red-500"
            }), i.jsx("p", {
                "data-inspector-line": "248",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "text-red-400 text-sm",
                children: f
            })]
        }), d && i.jsxs("div", {
            "data-inspector-line": "253",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "bg-primary-500/10 border border-primary-500/30 rounded-xl p-4 mb-4 flex items-center gap-3 animate-slide-down",
            children: [i.jsx(rn, {
                "data-inspector-line": "254",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "w-5 h-5 text-primary-500"
            }), i.jsx("p", {
                "data-inspector-line": "255",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "text-primary-400 text-sm",
                children: "Depósito confirmado com sucesso!"
            })]
        }), y ? i.jsxs("div", {
            "data-inspector-line": "296",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-6",
            children: [i.jsxs("div", {
                "data-inspector-line": "297",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "text-center mb-6",
                children: [i.jsx("p", {
                    "data-inspector-line": "298",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-400 mb-2",
                    children: "Valor do depósito"
                }), i.jsxs("p", {
                    "data-inspector-line": "299",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-3xl font-bold text-primary-500",
                    children: ["R$ ", y.amount.toFixed(2)]
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "302",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-600 rounded-xl p-4 mb-4",
                children: [i.jsx("p", {
                    "data-inspector-line": "303",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-400 text-sm mb-2",
                    children: "Código PIX Copia e Cola"
                }), i.jsxs("div", {
                    "data-inspector-line": "304",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex items-center gap-2",
                    children: [i.jsx("input", {
                        "data-inspector-line": "305",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        type: "text",
                        value: y.pixCode,
                        readOnly: !0,
                        className: "flex-1 bg-dark-700 border border-dark-500 rounded-lg p-3 text-white text-xs font-mono"
                    }), i.jsx("button", {
                        "data-inspector-line": "311",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        onClick: K,
                        className: `p-3 rounded-lg transition-all ${N ? "bg-primary-500 text-white" : "bg-dark-700 text-gray-400 hover:bg-dark-600"}`,
                        children: N ? i.jsx(rn, {
                            "data-inspector-line": "315",
                            "data-inspector-column": "26",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "w-5 h-5"
                        }) : i.jsx(Nu, {
                            "data-inspector-line": "315",
                            "data-inspector-column": "64",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "w-5 h-5"
                        })
                    })]
                })]
            }), i.jsx("div", {
                "data-inspector-line": "320",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-primary-500/10 border border-primary-500/30 rounded-xl p-4 mb-6",
                children: i.jsxs("div", {
                    "data-inspector-line": "321",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex items-start gap-3",
                    children: [i.jsx(Ys, {
                        "data-inspector-line": "322",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                    }), i.jsxs("div", {
                        "data-inspector-line": "323",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        children: [i.jsx("p", {
                            "data-inspector-line": "324",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-primary-400 font-semibold text-sm",
                            children: "Aguardando pagamento"
                        }), i.jsx("p", {
                            "data-inspector-line": "325",
                            "data-inspector-column": "16",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-gray-400 text-xs",
                            children: "Após o pagamento, clique no botão abaixo para confirmar"
                        })]
                    })]
                })
            }), i.jsx("button", {
                "data-inspector-line": "330",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                onClick: D,
                className: "w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/30",
                children: "JÁ FIZ O PAGAMENTO"
            })]
        }) : i.jsxs(i.Fragment, {
            children: [i.jsxs("div", {
                "data-inspector-line": "261",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 mb-4",
                children: [i.jsx("label", {
                    "data-inspector-line": "262",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-400 text-sm mb-2 block",
                    children: "Valor do depósito"
                }), i.jsxs("div", {
                    "data-inspector-line": "263",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "relative",
                    children: [i.jsx("span", {
                        "data-inspector-line": "264",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",
                        children: "R$"
                    }), i.jsx("input", {
                        "data-inspector-line": "265",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        type: "number",
                        value: o,
                        onChange: M => c(M.target.value),
                        placeholder: "0,00",
                        className: "w-full bg-dark-600 border border-dark-500 rounded-xl py-4 pl-12 pr-4 text-white text-lg font-bold placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-all"
                    })]
                }), i.jsx("p", {
                    "data-inspector-line": "273",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-500 text-xs mt-2",
                    children: "Mínimo: R$ 30,00"
                })]
            }), i.jsx("div", {
                "data-inspector-line": "276",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "grid grid-cols-4 gap-2 mb-6",
                children: [30, 50, 100, 200].map(M => i.jsxs("button", {
                    "data-inspector-line": "278",
                    "data-inspector-column": "14",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    onClick: () => c(M.toString()),
                    className: "bg-dark-600/50 hover:bg-dark-500 text-white py-3 rounded-xl font-semibold transition-all",
                    children: ["R$ ", M]
                }, M))
            }), i.jsx("button", {
                "data-inspector-line": "288",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                onClick: P,
                className: "w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/30",
                children: "GERAR PIX"
            })]
        })]
    })
      , ur = () => {
        const M = S()
          , C = parseFloat(p) * .1 || 0
          , _ = (parseFloat(p) || 0) - C;
        return i.jsxs("div", {
            "data-inspector-line": "347",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "animate-slide-up",
            children: [i.jsx("button", {
                "data-inspector-line": "348",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                onClick: () => {
                    l("main"),
                    h(""),
                    m("")
                }
                ,
                className: "text-gray-400 mb-4 hover:text-white transition-colors",
                children: "← Voltar"
            }), i.jsx("h2", {
                "data-inspector-line": "359",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "text-xl font-bold text-white mb-6",
                children: "Sacar via PIX"
            }), !M.allowed && i.jsxs("div", {
                "data-inspector-line": "362",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-4 flex items-start gap-3 animate-slide-down",
                children: [i.jsx(Ys, {
                    "data-inspector-line": "363",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                }), i.jsxs("div", {
                    "data-inspector-line": "364",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    children: [i.jsx("p", {
                        "data-inspector-line": "365",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-yellow-400 font-semibold text-sm",
                        children: "Fora do horário de saque"
                    }), i.jsx("p", {
                        "data-inspector-line": "366",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-400 text-xs",
                        children: M.message
                    })]
                })]
            }), f && i.jsxs("div", {
                "data-inspector-line": "372",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4 flex items-center gap-3 animate-slide-down",
                children: [i.jsx(nr, {
                    "data-inspector-line": "373",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-5 h-5 text-red-500"
                }), i.jsx("p", {
                    "data-inspector-line": "374",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-red-400 text-sm",
                    children: f
                })]
            }), d && i.jsxs("div", {
                "data-inspector-line": "379",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-primary-500/10 border border-primary-500/30 rounded-xl p-4 mb-4 flex items-center gap-3 animate-slide-down",
                children: [i.jsx(rn, {
                    "data-inspector-line": "380",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "w-5 h-5 text-primary-500"
                }), i.jsx("p", {
                    "data-inspector-line": "381",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-primary-400 text-sm",
                    children: "Saque solicitado com sucesso!"
                })]
            }), i.jsx("div", {
                "data-inspector-line": "385",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 mb-4",
                children: i.jsxs("div", {
                    "data-inspector-line": "386",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex justify-between items-center mb-2",
                    children: [i.jsx("span", {
                        "data-inspector-line": "387",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-400 text-sm",
                        children: "Saldo disponível"
                    }), i.jsxs("span", {
                        "data-inspector-line": "388",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-white font-bold",
                        children: ["R$ ", e.balance.toFixed(2)]
                    })]
                })
            }), i.jsxs("div", {
                "data-inspector-line": "392",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 mb-4",
                children: [i.jsx("label", {
                    "data-inspector-line": "393",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-400 text-sm mb-2 block",
                    children: "Valor do saque"
                }), i.jsxs("div", {
                    "data-inspector-line": "394",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "relative",
                    children: [i.jsx("span", {
                        "data-inspector-line": "395",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",
                        children: "R$"
                    }), i.jsx("input", {
                        "data-inspector-line": "396",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        type: "number",
                        value: p,
                        onChange: z => h(z.target.value),
                        placeholder: "0,00",
                        className: "w-full bg-dark-600 border border-dark-500 rounded-xl py-4 pl-12 pr-4 text-white text-lg font-bold placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-all"
                    })]
                }), i.jsx("p", {
                    "data-inspector-line": "404",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-500 text-xs mt-2",
                    children: "Mínimo: R$ 35,00 | Taxa: 10%"
                })]
            }), parseFloat(p) >= 35 && i.jsxs("div", {
                "data-inspector-line": "408",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-600/50 rounded-xl p-3 mb-4 animate-fade-in",
                children: [i.jsxs("div", {
                    "data-inspector-line": "409",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex justify-between text-sm mb-1",
                    children: [i.jsx("span", {
                        "data-inspector-line": "410",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-400",
                        children: "Valor solicitado:"
                    }), i.jsxs("span", {
                        "data-inspector-line": "411",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-white",
                        children: ["R$ ", parseFloat(p).toFixed(2)]
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "413",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex justify-between text-sm mb-1",
                    children: [i.jsx("span", {
                        "data-inspector-line": "414",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-400",
                        children: "Taxa (10%):"
                    }), i.jsxs("span", {
                        "data-inspector-line": "415",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-red-400",
                        children: ["- R$ ", C.toFixed(2)]
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "417",
                    "data-inspector-column": "12",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex justify-between text-sm font-bold border-t border-dark-500 pt-2 mt-2",
                    children: [i.jsx("span", {
                        "data-inspector-line": "418",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-300",
                        children: "Você receberá:"
                    }), i.jsxs("span", {
                        "data-inspector-line": "419",
                        "data-inspector-column": "14",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-primary-500",
                        children: ["R$ ", _.toFixed(2)]
                    })]
                })]
            }), i.jsxs("div", {
                "data-inspector-line": "424",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 mb-4",
                children: [i.jsx("label", {
                    "data-inspector-line": "425",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-400 text-sm mb-3 block",
                    children: "Tipo de chave PIX"
                }), i.jsxs("div", {
                    "data-inspector-line": "426",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "grid grid-cols-3 gap-2 mb-4",
                    children: [i.jsxs("button", {
                        "data-inspector-line": "427",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        onClick: () => w("cpf"),
                        className: `p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${v === "cpf" ? "bg-primary-500/20 border border-primary-500" : "bg-dark-600 border border-dark-500"}`,
                        children: [i.jsx(uf, {
                            "data-inspector-line": "433",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: `w-5 h-5 ${v === "cpf" ? "text-primary-500" : "text-gray-400"}`
                        }), i.jsx("span", {
                            "data-inspector-line": "434",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: `text-xs ${v === "cpf" ? "text-primary-400" : "text-gray-400"}`,
                            children: "CPF"
                        })]
                    }), i.jsxs("button", {
                        "data-inspector-line": "436",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        onClick: () => w("email"),
                        className: `p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${v === "email" ? "bg-primary-500/20 border border-primary-500" : "bg-dark-600 border border-dark-500"}`,
                        children: [i.jsx(Gi, {
                            "data-inspector-line": "442",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: `w-5 h-5 ${v === "email" ? "text-primary-500" : "text-gray-400"}`
                        }), i.jsx("span", {
                            "data-inspector-line": "443",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: `text-xs ${v === "email" ? "text-primary-400" : "text-gray-400"}`,
                            children: "Email"
                        })]
                    }), i.jsxs("button", {
                        "data-inspector-line": "445",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        onClick: () => w("phone"),
                        className: `p-3 rounded-xl flex flex-col items-center gap-1 transition-all ${v === "phone" ? "bg-primary-500/20 border border-primary-500" : "bg-dark-600 border border-dark-500"}`,
                        children: [i.jsx(vf, {
                            "data-inspector-line": "451",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: `w-5 h-5 ${v === "phone" ? "text-primary-500" : "text-gray-400"}`
                        }), i.jsx("span", {
                            "data-inspector-line": "452",
                            "data-inspector-column": "14",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: `text-xs ${v === "phone" ? "text-primary-400" : "text-gray-400"}`,
                            children: "Telefone"
                        })]
                    })]
                }), i.jsxs("label", {
                    "data-inspector-line": "456",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-gray-400 text-sm mb-2 block",
                    children: ["Chave PIX (", v.toUpperCase(), ")"]
                }), i.jsx("input", {
                    "data-inspector-line": "457",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    type: "text",
                    value: x,
                    onChange: z => m(z.target.value),
                    placeholder: v === "cpf" ? "000.000.000-00" : v === "email" ? "seu@email.com" : "(00) 00000-0000",
                    className: "w-full bg-dark-600 border border-dark-500 rounded-xl py-4 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-all"
                })]
            }), i.jsx("button", {
                "data-inspector-line": "470",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                onClick: R,
                disabled: !M.allowed,
                className: `w-full font-bold py-4 rounded-xl transition-all ${M.allowed ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/30" : "bg-dark-600 text-gray-500 cursor-not-allowed"}`,
                children: "SOLICITAR SAQUE"
            })]
        })
    }
      , Ta = () => i.jsxs("div", {
        "data-inspector-line": "486",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Profile.tsx",
        className: "animate-slide-up",
        children: [i.jsx("button", {
            "data-inspector-line": "487",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            onClick: () => l("main"),
            className: "text-gray-400 mb-4 hover:text-white transition-colors",
            children: "← Voltar"
        }), i.jsx("h2", {
            "data-inspector-line": "494",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "text-xl font-bold text-white mb-6",
            children: "Histórico de Depósitos"
        }), e.deposits.length === 0 ? i.jsxs("div", {
            "data-inspector-line": "497",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "text-center py-8 bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl",
            children: [i.jsx(Fn, {
                "data-inspector-line": "498",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "w-12 h-12 text-gray-600 mx-auto mb-3"
            }), i.jsx("p", {
                "data-inspector-line": "499",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "text-gray-400",
                children: "Nenhum depósito realizado"
            })]
        }) : i.jsx("div", {
            "data-inspector-line": "502",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "space-y-2",
            children: e.deposits.map( (M, C) => i.jsxs("div", {
                "data-inspector-line": "504",
                "data-inspector-column": "12",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 flex justify-between items-center animate-fade-in",
                style: {
                    animationDelay: `${C * 50}ms`
                },
                children: [i.jsxs("div", {
                    "data-inspector-line": "509",
                    "data-inspector-column": "14",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    children: [i.jsxs("p", {
                        "data-inspector-line": "510",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-white font-medium",
                        children: ["R$ ", M.amount.toFixed(2)]
                    }), i.jsx("p", {
                        "data-inspector-line": "511",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "text-gray-500 text-xs",
                        children: new Date(M.createdAt).toLocaleString("pt-BR")
                    })]
                }), i.jsx("span", {
                    "data-inspector-line": "513",
                    "data-inspector-column": "14",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: `text-xs px-3 py-1 rounded-full ${M.status === "confirmed" ? "bg-primary-500/20 text-primary-400" : "bg-yellow-500/20 text-yellow-400"}`,
                    children: M.status === "confirmed" ? "Confirmado" : "Pendente"
                })]
            }, M.id))
        })]
    })
      , hn = () => i.jsxs("div", {
        "data-inspector-line": "526",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Profile.tsx",
        className: "animate-slide-up",
        children: [i.jsx("button", {
            "data-inspector-line": "527",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            onClick: () => l("main"),
            className: "text-gray-400 mb-4 hover:text-white transition-colors",
            children: "← Voltar"
        }), i.jsx("h2", {
            "data-inspector-line": "534",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "text-xl font-bold text-white mb-6",
            children: "Histórico de Saques"
        }), e.withdrawals.length === 0 ? i.jsxs("div", {
            "data-inspector-line": "537",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "text-center py-8 bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl",
            children: [i.jsx(Fn, {
                "data-inspector-line": "538",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "w-12 h-12 text-gray-600 mx-auto mb-3"
            }), i.jsx("p", {
                "data-inspector-line": "539",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "text-gray-400",
                children: "Nenhum saque realizado"
            })]
        }) : i.jsx("div", {
            "data-inspector-line": "542",
            "data-inspector-column": "8",
            "data-inspector-relative-path": "src/pages/Profile.tsx",
            className: "space-y-2",
            children: e.withdrawals.map( (M, C) => i.jsxs("div", {
                "data-inspector-line": "544",
                "data-inspector-column": "12",
                "data-inspector-relative-path": "src/pages/Profile.tsx",
                className: "bg-dark-700/80 backdrop-blur-sm border border-dark-600 rounded-xl p-4 animate-fade-in",
                style: {
                    animationDelay: `${C * 50}ms`
                },
                children: [i.jsxs("div", {
                    "data-inspector-line": "549",
                    "data-inspector-column": "14",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "flex justify-between items-start mb-2",
                    children: [i.jsxs("div", {
                        "data-inspector-line": "550",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        children: [i.jsxs("p", {
                            "data-inspector-line": "551",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-white font-medium",
                            children: ["R$ ", M.amount.toFixed(2)]
                        }), i.jsx("p", {
                            "data-inspector-line": "552",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-gray-500 text-xs",
                            children: new Date(M.createdAt).toLocaleString("pt-BR")
                        })]
                    }), i.jsx("span", {
                        "data-inspector-line": "554",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: `text-xs px-3 py-1 rounded-full ${M.status === "completed" ? "bg-primary-500/20 text-primary-400" : M.status === "processing" ? "bg-blue-500/20 text-blue-400" : M.status === "rejected" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`,
                        children: M.status === "completed" ? "Concluído" : M.status === "processing" ? "Processando" : M.status === "rejected" ? "Rejeitado" : "Pendente"
                    })]
                }), i.jsxs("div", {
                    "data-inspector-line": "565",
                    "data-inspector-column": "14",
                    "data-inspector-relative-path": "src/pages/Profile.tsx",
                    className: "text-xs text-gray-500 border-t border-dark-600 pt-2 mt-2",
                    children: [i.jsxs("div", {
                        "data-inspector-line": "566",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "flex justify-between",
                        children: [i.jsx("span", {
                            "data-inspector-line": "567",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            children: "Taxa:"
                        }), i.jsxs("span", {
                            "data-inspector-line": "568",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-red-400",
                            children: ["- R$ ", M.fee.toFixed(2)]
                        })]
                    }), i.jsxs("div", {
                        "data-inspector-line": "570",
                        "data-inspector-column": "16",
                        "data-inspector-relative-path": "src/pages/Profile.tsx",
                        className: "flex justify-between",
                        children: [i.jsx("span", {
                            "data-inspector-line": "571",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            children: "Valor líquido:"
                        }), i.jsxs("span", {
                            "data-inspector-line": "572",
                            "data-inspector-column": "18",
                            "data-inspector-relative-path": "src/pages/Profile.tsx",
                            className: "text-primary-400",
                            children: ["R$ ", M.netAmount.toFixed(2)]
                        })]
                    })]
                })]
            }, M.id))
        })]
    });
    return i.jsxs("div", {
        "data-inspector-line": "583",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/pages/Profile.tsx",
        className: "pb-20 px-4 pt-4",
        children: [s === "main" && Se(), s === "deposit" && wt(), s === "withdraw" && ur(), s === "deposits-history" && Ta(), s === "withdrawals-history" && hn()]
    })
}
function Ff() {
    const {user: e, isLoading: t, register: n, login: r, logout: a, addInvestment: s, doCheckin: l, spinRoulette: o, requestWithdraw: c, createDeposit: p, confirmDeposit: h} = af()
      , [x,m] = T.useState("login")
      , [v,w] = T.useState("home")
      , [y,L] = T.useState("");
    if (T.useEffect( () => {
        const f = new URLSearchParams(window.location.search).get("code");
        f && (L(f),
        m("register"))
    }
    , []),
    T.useEffect( () => {
        e && v === "" && w("home")
    }
    , [e, v]),
    t)
        return i.jsx("div", {
            "data-inspector-line": "38",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/App.tsx",
            className: "min-h-screen bg-dark-900 flex items-center justify-center",
            children: i.jsxs("div", {
                "data-inspector-line": "39",
                "data-inspector-column": "8",
                "data-inspector-relative-path": "src/App.tsx",
                className: "text-center",
                children: [i.jsx("div", {
                    "data-inspector-line": "40",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/App.tsx",
                    className: "w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-pulse",
                    children: i.jsx("span", {
                        "data-inspector-line": "41",
                        "data-inspector-column": "12",
                        "data-inspector-relative-path": "src/App.tsx",
                        className: "text-2xl font-bold text-white",
                        children: "M"
                    })
                }), i.jsx("p", {
                    "data-inspector-line": "43",
                    "data-inspector-column": "10",
                    "data-inspector-relative-path": "src/App.tsx",
                    className: "text-gray-400",
                    children: "Carregando..."
                })]
            })
        });
    if (!e)
        return x === "login" ? i.jsx(Cf, {
            "data-inspector-line": "51",
            "data-inspector-column": "13",
            "data-inspector-relative-path": "src/App.tsx",
            onLogin: r,
            onGoToRegister: () => m("register")
        }) : i.jsx(Ef, {
            "data-inspector-line": "54",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/App.tsx",
            onRegister: n,
            onGoToLogin: () => m("login"),
            initialInviteCode: y
        });
    const d = u => s(u);
    return i.jsxs("div", {
        "data-inspector-line": "67",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/App.tsx",
        className: "min-h-screen bg-dark-900",
        children: [i.jsxs("div", {
            "data-inspector-line": "68",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/App.tsx",
            className: "max-w-lg mx-auto",
            children: [v === "home" && i.jsx(_f, {
                "data-inspector-line": "70",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/App.tsx",
                user: e,
                onCheckin: l,
                onSpinRoulette: o
            }), v === "products" && i.jsx(bf, {
                "data-inspector-line": "73",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/App.tsx",
                user: e,
                onInvest: d
            }), v === "team" && i.jsx(If, {
                "data-inspector-line": "75",
                "data-inspector-column": "33",
                "data-inspector-relative-path": "src/App.tsx",
                user: e
            }), v === "profile" && i.jsx(Of, {
                "data-inspector-line": "77",
                "data-inspector-column": "10",
                "data-inspector-relative-path": "src/App.tsx",
                user: e,
                onLogout: a,
                onDeposit: p,
                onConfirmDeposit: h,
                onWithdraw: c
            })]
        }), i.jsx(Pf, {
            "data-inspector-line": "86",
            "data-inspector-column": "6",
            "data-inspector-relative-path": "src/App.tsx",
            activeTab: v,
            onTabChange: w
        })]
    })
}
rs.createRoot(document.getElementById("root")).render(i.jsx(Bu.StrictMode, {
    "data-inspector-line": "7",
    "data-inspector-column": "2",
    "data-inspector-relative-path": "src/main.tsx",
    children: i.jsx(Ff, {
        "data-inspector-line": "8",
        "data-inspector-column": "4",
        "data-inspector-relative-path": "src/main.tsx"
    })
}));
