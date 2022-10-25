// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var zl = "137", wy = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}, by = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
}, Vu = 0, Jl = 1, ku = 2, cu = 1, Gu = 2, Rs = 3, Oi = 0, lt = 1, Ui = 2, hu = 1, Rn = 0, Ls = 1, Yl = 2, Zl = 3, $l = 4, Wu = 5, Ci = 100, qu = 101, Xu = 102, jl = 103, Kl = 104, Ju = 200, Yu = 201, Zu = 202, $u = 203, uu = 204, du = 205, ju = 206, Ku = 207, Qu = 208, ed = 209, td = 210, nd = 0, id = 1, sd = 2, za = 3, rd = 4, od = 5, ad = 6, ld = 7, Jo = 0, cd = 1, hd = 2, Cn = 0, ud = 1, dd = 2, fd = 3, pd = 4, md = 5, Ol = 300, fs = 301, ps = 302, ro = 303, oo = 304, fr = 306, Yo = 307, ao = 1e3, Mt = 1001, lo = 1002, ct = 1003, Oa = 1004, Ua = 1005, nt = 1006, fu = 1007, ms = 1008, Ln = 1009, gd = 1010, xd = 1011, Ns = 1012, yd = 1013, so = 1014, Tn = 1015, Fi = 1016, _d = 1017, vd = 1018, Ni = 1020, Md = 1021, wt = 1023, wd = 1024, bd = 1025, Qn = 1026, Hi = 1027, Sd = 1028, Ed = 1029, Td = 1030, Ad = 1031, Rd = 1033, Ko = 33776, Qo = 33777, ea = 33778, ta = 33779, Ql = 35840, ec = 35841, tc = 35842, nc = 35843, Cd = 36196, ic = 37492, sc = 37496, rc = 37808, oc = 37809, ac = 37810, lc = 37811, cc = 37812, hc = 37813, uc = 37814, dc = 37815, fc = 37816, pc = 37817, mc = 37818, gc = 37819, xc = 37820, yc = 37821, _c = 36492, Ld = 2200, Pd = 2201, Dd = 2202, co = 2300, ho = 2301, na = 2302, Li = 2400, Pi = 2401, uo = 2402, Ul = 2500, pu = 2501, Id = 0, Py = 1, Dy = 2, Fn = 3e3, Ze = 3001, Fd = 3200, Nd = 3201, gs = 0, Bd = 1, ia = 7680, zd = 519, Bs = 35044, zs = 35048, vc = "300 es", Ha = 1035, dn = class {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        let n = this._listeners;
        n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0) return !1;
        let n = this._listeners;
        return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0) return;
        let i = this._listeners[e];
        if (i !== void 0) {
            let s = i.indexOf(t);
            s !== -1 && i.splice(s, 1);
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0) return;
        let n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            let i = n.slice(0);
            for(let s = 0, o = i.length; s < o; s++)i[s].call(this, e);
            e.target = null;
        }
    }
}, xt = [];
for(let r = 0; r < 256; r++)xt[r] = (r < 16 ? "0" : "") + r.toString(16);
var gr = 1234567, ei = Math.PI / 180, Os = 180 / Math.PI;
function It() {
    let r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
    return (xt[r & 255] + xt[r >> 8 & 255] + xt[r >> 16 & 255] + xt[r >> 24 & 255] + "-" + xt[e & 255] + xt[e >> 8 & 255] + "-" + xt[e >> 16 & 15 | 64] + xt[e >> 24 & 255] + "-" + xt[t & 63 | 128] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 255] + xt[t >> 24 & 255] + xt[n & 255] + xt[n >> 8 & 255] + xt[n >> 16 & 255] + xt[n >> 24 & 255]).toUpperCase();
}
function yt(r, e, t) {
    return Math.max(e, Math.min(t, r));
}
function Hl(r, e) {
    return (r % e + e) % e;
}
function Od(r, e, t, n, i) {
    return n + (r - e) * (i - n) / (t - e);
}
function Ud(r, e, t) {
    return r !== e ? (t - r) / (e - r) : 0;
}
function Ps(r, e, t) {
    return (1 - t) * r + t * e;
}
function Hd(r, e, t, n) {
    return Ps(r, e, 1 - Math.exp(-t * n));
}
function Vd(r, e = 1) {
    return e - Math.abs(Hl(r, e * 2) - e);
}
function kd(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function Gd(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Wd(r, e) {
    return r + Math.floor(Math.random() * (e - r + 1));
}
function qd(r, e) {
    return r + Math.random() * (e - r);
}
function Xd(r) {
    return r * (.5 - Math.random());
}
function Jd(r) {
    return r !== void 0 && (gr = r % 2147483647), gr = gr * 16807 % 2147483647, (gr - 1) / 2147483646;
}
function Yd(r) {
    return r * ei;
}
function Zd(r) {
    return r * Os;
}
function Va(r) {
    return (r & r - 1) === 0 && r !== 0;
}
function mu(r) {
    return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function gu(r) {
    return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function $d(r, e, t, n, i) {
    let s = Math.cos, o = Math.sin, a = s(t / 2), l = o(t / 2), c = s((e + n) / 2), u = o((e + n) / 2), h = s((e - n) / 2), d = o((e - n) / 2), f = s((n - e) / 2), m = o((n - e) / 2);
    switch(i){
        case "XYX":
            r.set(a * u, l * h, l * d, a * c);
            break;
        case "YZY":
            r.set(l * d, a * u, l * h, a * c);
            break;
        case "ZXZ":
            r.set(l * h, l * d, a * u, a * c);
            break;
        case "XZX":
            r.set(a * u, l * m, l * f, a * c);
            break;
        case "YXY":
            r.set(l * f, a * u, l * m, a * c);
            break;
        case "ZYZ":
            r.set(l * m, l * f, a * u, a * c);
            break;
        default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
}
var t0 = Object.freeze({
    __proto__: null,
    DEG2RAD: ei,
    RAD2DEG: Os,
    generateUUID: It,
    clamp: yt,
    euclideanModulo: Hl,
    mapLinear: Od,
    inverseLerp: Ud,
    lerp: Ps,
    damp: Hd,
    pingpong: Vd,
    smoothstep: kd,
    smootherstep: Gd,
    randInt: Wd,
    randFloat: qd,
    randFloatSpread: Xd,
    seededRandom: Jd,
    degToRad: Yd,
    radToDeg: Zd,
    isPowerOfTwo: Va,
    ceilPowerOfTwo: mu,
    floorPowerOfTwo: gu,
    setQuaternionFromProperEuler: $d
}), Z = class {
    constructor(e = 0, t = 0){
        this.x = e, this.y = t;
    }
    get width() {
        return this.x;
    }
    set width(e) {
        this.x = e;
    }
    get height() {
        return this.y;
    }
    set height(e) {
        this.y = e;
    }
    set(e, t) {
        return this.x = e, this.y = t, this;
    }
    setScalar(e) {
        return this.x = e, this.y = e, this;
    }
    setX(e) {
        return this.x = e, this;
    }
    setY(e) {
        return this.y = e, this;
    }
    setComponent(e, t) {
        switch(e){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e);
        }
        return this;
    }
    getComponent(e) {
        switch(e){
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y);
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this;
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
    }
    addScalar(e) {
        return this.x += e, this.y += e, this;
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this;
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this;
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this;
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this;
    }
    multiply(e) {
        return this.x *= e.x, this.y *= e.y, this;
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this;
    }
    divide(e) {
        return this.x /= e.x, this.y /= e.y, this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
        let t = this.x, n = this.y, i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y;
    }
    cross(e) {
        return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
        let t = this.x - e.x, n = this.y - e.y;
        return t * t + n * n;
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this;
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e;
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this;
    }
    rotateAround(e, t) {
        let n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
        return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y;
    }
};
Z.prototype.isVector2 = !0;
var ht = class {
    constructor(){
        this.elements = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }
    set(e, t, n, i, s, o, a, l, c) {
        let u = this.elements;
        return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
        let t = this.elements, n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e) {
        let t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
    }
    multiply(e) {
        return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
        let n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], f = n[5], m = n[8], x = i[0], _ = i[3], g = i[6], p = i[1], M = i[4], y = i[7], b = i[2], T = i[5], R = i[8];
        return s[0] = o * x + a * p + l * b, s[3] = o * _ + a * M + l * T, s[6] = o * g + a * y + l * R, s[1] = c * x + u * p + h * b, s[4] = c * _ + u * M + h * T, s[7] = c * g + u * y + h * R, s[2] = d * x + f * p + m * b, s[5] = d * _ + f * M + m * T, s[8] = d * g + f * y + m * R, this;
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
    }
    determinant() {
        let e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
        return t * o * u - t * a * c - n * s * u + n * a * l + i * s * c - i * o * l;
    }
    invert() {
        let e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * o - a * c, d = a * l - u * s, f = c * s - o * l, m = t * h + n * d + i * f;
        if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        let x = 1 / m;
        return e[0] = h * x, e[1] = (i * c - u * n) * x, e[2] = (a * n - i * o) * x, e[3] = d * x, e[4] = (u * t - i * l) * x, e[5] = (i * s - a * t) * x, e[6] = f * x, e[7] = (n * l - c * t) * x, e[8] = (o * t - n * s) * x, this;
    }
    transpose() {
        let e, t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
        let t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
    }
    setUvTransform(e, t, n, i, s, o, a) {
        let l = Math.cos(s), c = Math.sin(s);
        return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this;
    }
    scale(e, t) {
        let n = this.elements;
        return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
    }
    rotate(e) {
        let t = Math.cos(e), n = Math.sin(e), i = this.elements, s = i[0], o = i[3], a = i[6], l = i[1], c = i[4], u = i[7];
        return i[0] = t * s + n * l, i[3] = t * o + n * c, i[6] = t * a + n * u, i[1] = -n * s + t * l, i[4] = -n * o + t * c, i[7] = -n * a + t * u, this;
    }
    translate(e, t) {
        let n = this.elements;
        return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
    }
    equals(e) {
        let t = this.elements, n = e.elements;
        for(let i = 0; i < 9; i++)if (t[i] !== n[i]) return !1;
        return !0;
    }
    fromArray(e, t = 0) {
        for(let n = 0; n < 9; n++)this.elements[n] = e[n + t];
        return this;
    }
    toArray(e = [], t = 0) {
        let n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
    }
    clone() {
        return new this.constructor().fromArray(this.elements);
    }
};
ht.prototype.isMatrix3 = !0;
function xu(r) {
    for(let e = r.length - 1; e >= 0; --e)if (r[e] > 65535) return !0;
    return !1;
}
function Us(r) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
var yu = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}, Ot = {
    h: 0,
    s: 0,
    l: 0
}, xr = {
    h: 0,
    s: 0,
    l: 0
};
function sa(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
function Bi(r) {
    return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4);
}
function ra(r) {
    return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055;
}
var ne = class {
    constructor(e, t, n){
        return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
    }
    set(e) {
        return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
    }
    setScalar(e) {
        return this.r = e, this.g = e, this.b = e, this;
    }
    setHex(e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this;
    }
    setRGB(e, t, n) {
        return this.r = e, this.g = t, this.b = n, this;
    }
    setHSL(e, t, n) {
        if (e = Hl(e, 1), t = yt(t, 0, 1), n = yt(n, 0, 1), t === 0) this.r = this.g = this.b = n;
        else {
            let i = n <= .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
            this.r = sa(s, i, e + 1 / 3), this.g = sa(s, i, e), this.b = sa(s, i, e - 1 / 3);
        }
        return this;
    }
    setStyle(e) {
        function t(i) {
            i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
        }
        let n;
        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let i, s = n[1], o = n[2];
            switch(s){
                case "rgb":
                case "rgba":
                    if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this;
                    if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
                        let a = parseFloat(i[1]) / 360, l = parseInt(i[2], 10) / 100, c = parseInt(i[3], 10) / 100;
                        return t(i[4]), this.setHSL(a, l, c);
                    }
                    break;
            }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            let i1 = n[1], s1 = i1.length;
            if (s1 === 3) return this.r = parseInt(i1.charAt(0) + i1.charAt(0), 16) / 255, this.g = parseInt(i1.charAt(1) + i1.charAt(1), 16) / 255, this.b = parseInt(i1.charAt(2) + i1.charAt(2), 16) / 255, this;
            if (s1 === 6) return this.r = parseInt(i1.charAt(0) + i1.charAt(1), 16) / 255, this.g = parseInt(i1.charAt(2) + i1.charAt(3), 16) / 255, this.b = parseInt(i1.charAt(4) + i1.charAt(5), 16) / 255, this;
        }
        return e && e.length > 0 ? this.setColorName(e) : this;
    }
    setColorName(e) {
        let t = yu[e.toLowerCase()];
        return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this;
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this;
    }
    copySRGBToLinear(e) {
        return this.r = Bi(e.r), this.g = Bi(e.g), this.b = Bi(e.b), this;
    }
    copyLinearToSRGB(e) {
        return this.r = ra(e.r), this.g = ra(e.g), this.b = ra(e.b), this;
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this;
    }
    getHex() {
        return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
    }
    getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6);
    }
    getHSL(e) {
        let t = this.r, n = this.g, i = this.b, s = Math.max(t, n, i), o = Math.min(t, n, i), a, l, c = (o + s) / 2;
        if (o === s) a = 0, l = 0;
        else {
            let u = s - o;
            switch(l = c <= .5 ? u / (s + o) : u / (2 - s - o), s){
                case t:
                    a = (n - i) / u + (n < i ? 6 : 0);
                    break;
                case n:
                    a = (i - t) / u + 2;
                    break;
                case i:
                    a = (t - n) / u + 4;
                    break;
            }
            a /= 6;
        }
        return e.h = a, e.s = l, e.l = c, e;
    }
    getStyle() {
        return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
    }
    offsetHSL(e, t, n) {
        return this.getHSL(Ot), Ot.h += e, Ot.s += t, Ot.l += n, this.setHSL(Ot.h, Ot.s, Ot.l), this;
    }
    add(e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this;
    }
    addColors(e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
    }
    addScalar(e) {
        return this.r += e, this.g += e, this.b += e, this;
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
    }
    multiply(e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
    }
    multiplyScalar(e) {
        return this.r *= e, this.g *= e, this.b *= e, this;
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
    }
    lerpHSL(e, t) {
        this.getHSL(Ot), e.getHSL(xr);
        let n = Ps(Ot.h, xr.h, t), i = Ps(Ot.s, xr.s, t), s = Ps(Ot.l, xr.l, t);
        return this.setHSL(n, i, s), this;
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
        return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
        return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this;
    }
    toJSON() {
        return this.getHex();
    }
};
ne.NAMES = yu;
ne.prototype.isColor = !0;
ne.prototype.r = 1;
ne.prototype.g = 1;
ne.prototype.b = 1;
var hi, fn = class {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
        let t;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
            hi === void 0 && (hi = Us("canvas")), hi.width = e.width, hi.height = e.height;
            let n = hi.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = hi;
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            let t = Us("canvas");
            t.width = e.width, t.height = e.height;
            let n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            let i = n.getImageData(0, 0, e.width, e.height), s = i.data;
            for(let o = 0; o < s.length; o++)s[o] = Bi(s[o] / 255) * 255;
            return n.putImageData(i, 0, 0), t;
        } else if (e.data) {
            let t1 = e.data.slice(0);
            for(let n1 = 0; n1 < t1.length; n1++)t1 instanceof Uint8Array || t1 instanceof Uint8ClampedArray ? t1[n1] = Math.floor(Bi(t1[n1] / 255) * 255) : t1[n1] = Bi(t1[n1]);
            return {
                data: t1,
                width: e.width,
                height: e.height
            };
        } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
    }
}, Kd = 0, at = class extends dn {
    constructor(e = at.DEFAULT_IMAGE, t = at.DEFAULT_MAPPING, n = Mt, i = Mt, s = nt, o = ms, a = wt, l = Ln, c = 1, u = Fn){
        super(), Object.defineProperty(this, "id", {
            value: Kd++
        }), this.uuid = It(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Z(0, 0), this.repeat = new Z(1, 1), this.center = new Z(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ht, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
        let n = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [
                this.repeat.x,
                this.repeat.y
            ],
            offset: [
                this.offset.x,
                this.offset.y
            ],
            center: [
                this.center.x,
                this.center.y
            ],
            rotation: this.rotation,
            wrap: [
                this.wrapS,
                this.wrapT
            ],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        if (this.image !== void 0) {
            let i = this.image;
            if (i.uuid === void 0 && (i.uuid = It()), !t && e.images[i.uuid] === void 0) {
                let s;
                if (Array.isArray(i)) {
                    s = [];
                    for(let o = 0, a = i.length; o < a; o++)i[o].isDataTexture ? s.push(oa(i[o].image)) : s.push(oa(i[o]));
                } else s = oa(i);
                e.images[i.uuid] = {
                    uuid: i.uuid,
                    url: s
                };
            }
            n.image = i.uuid;
        }
        return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
    transformUv(e) {
        if (this.mapping !== Ol) return e;
        if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch(this.wrapS){
            case ao:
                e.x = e.x - Math.floor(e.x);
                break;
            case Mt:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case lo:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break;
        }
        if (e.y < 0 || e.y > 1) switch(this.wrapT){
            case ao:
                e.y = e.y - Math.floor(e.y);
                break;
            case Mt:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case lo:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break;
        }
        return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
};
at.DEFAULT_IMAGE = void 0;
at.DEFAULT_MAPPING = Ol;
at.prototype.isTexture = !0;
function oa(r) {
    return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? fn.getDataURL(r) : r.data ? {
        data: Array.prototype.slice.call(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var Ge = class {
    constructor(e = 0, t = 0, n = 0, i = 1){
        this.x = e, this.y = t, this.z = n, this.w = i;
    }
    get width() {
        return this.z;
    }
    set width(e) {
        this.z = e;
    }
    get height() {
        return this.w;
    }
    set height(e) {
        this.w = e;
    }
    set(e, t, n, i) {
        return this.x = e, this.y = t, this.z = n, this.w = i, this;
    }
    setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this.w = e, this;
    }
    setX(e) {
        return this.x = e, this;
    }
    setY(e) {
        return this.y = e, this;
    }
    setZ(e) {
        return this.z = e, this;
    }
    setW(e) {
        return this.w = e, this;
    }
    setComponent(e, t) {
        switch(e){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e);
        }
        return this;
    }
    getComponent(e) {
        switch(e){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
    }
    addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this;
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
    }
    multiply(e) {
        return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
    }
    applyMatrix4(e) {
        let t = this.x, n = this.y, i = this.z, s = this.w, o = e.elements;
        return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        let t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, s, l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], f = l[5], m = l[9], x = l[2], _ = l[6], g = l[10];
        if (Math.abs(u - d) < .01 && Math.abs(h - x) < .01 && Math.abs(m - _) < .01) {
            if (Math.abs(u + d) < .1 && Math.abs(h + x) < .1 && Math.abs(m + _) < .1 && Math.abs(c + f + g - 3) < .1) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            let M = (c + 1) / 2, y = (f + 1) / 2, b = (g + 1) / 2, T = (u + d) / 4, R = (h + x) / 4, P = (m + _) / 4;
            return M > y && M > b ? M < .01 ? (n = 0, i = .707106781, s = .707106781) : (n = Math.sqrt(M), i = T / n, s = R / n) : y > b ? y < .01 ? (n = .707106781, i = 0, s = .707106781) : (i = Math.sqrt(y), n = T / i, s = P / i) : b < .01 ? (n = .707106781, i = .707106781, s = 0) : (s = Math.sqrt(b), n = R / s, i = P / s), this.set(n, i, s, t), this;
        }
        let p = Math.sqrt((_ - m) * (_ - m) + (h - x) * (h - x) + (d - u) * (d - u));
        return Math.abs(p) < .001 && (p = 1), this.x = (_ - m) / p, this.y = (h - x) / p, this.z = (d - u) / p, this.w = Math.acos((c + f + g - 1) / 2), this;
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z, yield this.w;
    }
};
Ge.prototype.isVector4 = !0;
var At = class extends dn {
    constructor(e, t, n = {}){
        super(), this.width = e, this.height = t, this.depth = 1, this.scissor = new Ge(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ge(0, 0, e, t), this.texture = new at(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = {
            width: e,
            height: t,
            depth: 1
        }, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : nt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null;
    }
    setTexture(e) {
        e.image = {
            width: this.width,
            height: this.height,
            depth: this.depth
        }, this.texture = e;
    }
    setSize(e, t, n = 1) {
        (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.image = Object.assign({}, e.texture.image), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
};
At.prototype.isWebGLRenderTarget = !0;
var ka = class extends At {
    constructor(e, t, n){
        super(e, t);
        let i = this.texture;
        this.texture = [];
        for(let s = 0; s < n; s++)this.texture[s] = i.clone();
    }
    setSize(e, t, n = 1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e, this.height = t, this.depth = n;
            for(let i = 0, s = this.texture.length; i < s; i++)this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
            this.dispose();
        }
        return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this;
    }
    copy(e) {
        this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0;
        for(let t = 0, n = e.texture.length; t < n; t++)this.texture[t] = e.texture[t].clone();
        return this;
    }
};
ka.prototype.isWebGLMultipleRenderTargets = !0;
var Hs = class extends At {
    constructor(e, t, n = {}){
        super(e, t, n), this.samples = 4, this.ignoreDepthForMultisampleCopy = n.ignoreDepth !== void 0 ? n.ignoreDepth : !0, this.useRenderToTexture = n.useRenderToTexture !== void 0 ? n.useRenderToTexture : !1, this.useRenderbuffer = this.useRenderToTexture === !1;
    }
    copy(e) {
        return super.copy.call(this, e), this.samples = e.samples, this.useRenderToTexture = e.useRenderToTexture, this.useRenderbuffer = e.useRenderbuffer, this;
    }
};
Hs.prototype.isWebGLMultisampleRenderTarget = !0;
var gt = class {
    constructor(e = 0, t = 0, n = 0, i = 1){
        this._x = e, this._y = t, this._z = n, this._w = i;
    }
    static slerp(e, t, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i);
    }
    static slerpFlat(e, t, n, i, s, o, a) {
        let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3], d = s[o + 0], f = s[o + 1], m = s[o + 2], x = s[o + 3];
        if (a === 0) {
            e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
            return;
        }
        if (a === 1) {
            e[t + 0] = d, e[t + 1] = f, e[t + 2] = m, e[t + 3] = x;
            return;
        }
        if (h !== x || l !== d || c !== f || u !== m) {
            let _ = 1 - a, g = l * d + c * f + u * m + h * x, p = g >= 0 ? 1 : -1, M = 1 - g * g;
            if (M > Number.EPSILON) {
                let b = Math.sqrt(M), T = Math.atan2(b, g * p);
                _ = Math.sin(_ * T) / b, a = Math.sin(a * T) / b;
            }
            let y = a * p;
            if (l = l * _ + d * y, c = c * _ + f * y, u = u * _ + m * y, h = h * _ + x * y, _ === 1 - a) {
                let b1 = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
                l *= b1, c *= b1, u *= b1, h *= b1;
            }
        }
        e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, o) {
        let a = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = s[o], d = s[o + 1], f = s[o + 2], m = s[o + 3];
        return e[t] = a * m + u * h + l * f - c * d, e[t + 1] = l * m + u * d + c * h - a * f, e[t + 2] = c * m + u * f + a * d - l * h, e[t + 3] = u * m - a * h - l * d - c * f, e;
    }
    get x() {
        return this._x;
    }
    set x(e) {
        this._x = e, this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e) {
        this._y = e, this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e) {
        this._z = e, this._onChangeCallback();
    }
    get w() {
        return this._w;
    }
    set w(e) {
        this._w = e, this._onChangeCallback();
    }
    set(e, t, n, i) {
        return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
        return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
    }
    setFromEuler(e, t) {
        if (!(e && e.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        let n = e._x, i = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(i / 2), h = a(s / 2), d = l(n / 2), f = l(i / 2), m = l(s / 2);
        switch(o){
            case "XYZ":
                this._x = d * u * h + c * f * m, this._y = c * f * h - d * u * m, this._z = c * u * m + d * f * h, this._w = c * u * h - d * f * m;
                break;
            case "YXZ":
                this._x = d * u * h + c * f * m, this._y = c * f * h - d * u * m, this._z = c * u * m - d * f * h, this._w = c * u * h + d * f * m;
                break;
            case "ZXY":
                this._x = d * u * h - c * f * m, this._y = c * f * h + d * u * m, this._z = c * u * m + d * f * h, this._w = c * u * h - d * f * m;
                break;
            case "ZYX":
                this._x = d * u * h - c * f * m, this._y = c * f * h + d * u * m, this._z = c * u * m - d * f * h, this._w = c * u * h + d * f * m;
                break;
            case "YZX":
                this._x = d * u * h + c * f * m, this._y = c * f * h + d * u * m, this._z = c * u * m - d * f * h, this._w = c * u * h - d * f * m;
                break;
            case "XZY":
                this._x = d * u * h - c * f * m, this._y = c * f * h - d * u * m, this._z = c * u * m + d * f * h, this._w = c * u * h + d * f * m;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
        }
        return t !== !1 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
        let n = t / 2, i = Math.sin(n);
        return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e) {
        let t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + a + h;
        if (d > 0) {
            let f = .5 / Math.sqrt(d + 1);
            this._w = .25 / f, this._x = (u - l) * f, this._y = (s - c) * f, this._z = (o - i) * f;
        } else if (n > a && n > h) {
            let f1 = 2 * Math.sqrt(1 + n - a - h);
            this._w = (u - l) / f1, this._x = .25 * f1, this._y = (i + o) / f1, this._z = (s + c) / f1;
        } else if (a > h) {
            let f2 = 2 * Math.sqrt(1 + a - n - h);
            this._w = (s - c) / f2, this._x = (i + o) / f2, this._y = .25 * f2, this._z = (l + u) / f2;
        } else {
            let f3 = 2 * Math.sqrt(1 + h - n - a);
            this._w = (o - i) / f3, this._x = (s + c) / f3, this._y = (l + u) / f3, this._z = .25 * f3;
        }
        return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(yt(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
        let n = this.angleTo(e);
        if (n === 0) return this;
        let i = Math.min(1, t / n);
        return this.slerp(e, i), this;
    }
    identity() {
        return this.set(0, 0, 0, 1);
    }
    invert() {
        return this.conjugate();
    }
    conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
        let n = e._x, i = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
        return this._x = n * u + o * a + i * c - s * l, this._y = i * u + o * l + s * a - n * c, this._z = s * u + o * c + n * l - i * a, this._w = o * u - n * a - i * l - s * c, this._onChangeCallback(), this;
    }
    slerp(e, t) {
        if (t === 0) return this;
        if (t === 1) return this.copy(e);
        let n = this._x, i = this._y, s = this._z, o = this._w, a = o * e._w + n * e._x + i * e._y + s * e._z;
        if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = s, this;
        let l = 1 - a * a;
        if (l <= Number.EPSILON) {
            let f = 1 - t;
            return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
        }
        let c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
        return this._w = o * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this;
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n);
    }
    random() {
        let e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
        return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i));
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
        return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
    }
    _onChange(e) {
        return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {}
};
gt.prototype.isQuaternion = !0;
var w = class {
    constructor(e = 0, t = 0, n = 0){
        this.x = e, this.y = t, this.z = n;
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
    }
    setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this;
    }
    setX(e) {
        return this.x = e, this;
    }
    setY(e) {
        return this.y = e, this;
    }
    setZ(e) {
        return this.z = e, this;
    }
    setComponent(e, t) {
        switch(e){
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e);
        }
        return this;
    }
    getComponent(e) {
        switch(e){
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this;
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this);
    }
    addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this;
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this;
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this;
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
    }
    applyEuler(e) {
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Mc.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(Mc.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
        let t = this.x, n = this.y, i = this.z, s = e.elements;
        return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
        let t = this.x, n = this.y, i = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
        return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this;
    }
    applyQuaternion(e) {
        let t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = l * t + o * i - a * n, u = l * n + a * t - s * i, h = l * i + s * n - o * t, d = -s * t - o * n - a * i;
        return this.x = c * l + d * -s + u * -a - h * -o, this.y = u * l + d * -o + h * -s - c * -a, this.z = h * l + d * -a + c * -o - u * -s, this;
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
        let t = this.x, n = this.y, i = this.z, s = e.elements;
        return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
    }
    divide(e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
    }
    cross(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e);
    }
    crossVectors(e, t) {
        let n = e.x, i = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
        return this.x = i * l - s * a, this.y = s * o - n * l, this.z = n * a - i * o, this;
    }
    projectOnVector(e) {
        let t = e.lengthSq();
        if (t === 0) return this.set(0, 0, 0);
        let n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
        return aa.copy(this).projectOnVector(e), this.sub(aa);
    }
    reflect(e) {
        return this.sub(aa.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) return Math.PI / 2;
        let n = this.dot(e) / t;
        return Math.acos(yt(n, -1, 1));
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
        let t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
        return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
        let i = Math.sin(t) * e;
        return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
    }
    setFromMatrixPosition(e) {
        let t = e.elements;
        return this.x = t[12], this.y = t[13], this.z = t[14], this;
    }
    setFromMatrixScale(e) {
        let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3);
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
        let e = (Math.random() - .5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
        return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z;
    }
};
w.prototype.isVector3 = !0;
var aa = new w, Mc = new gt, Rt = class {
    constructor(e = new w(1 / 0, 1 / 0, 1 / 0), t = new w(-1 / 0, -1 / 0, -1 / 0)){
        this.min = e, this.max = t;
    }
    set(e, t) {
        return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
        let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, a = -1 / 0;
        for(let l = 0, c = e.length; l < c; l += 3){
            let u = e[l], h = e[l + 1], d = e[l + 2];
            u < t && (t = u), h < n && (n = h), d < i && (i = d), u > s && (s = u), h > o && (o = h), d > a && (a = d);
        }
        return this.min.set(t, n, i), this.max.set(s, o, a), this;
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, a = -1 / 0;
        for(let l = 0, c = e.count; l < c; l++){
            let u = e.getX(l), h = e.getY(l), d = e.getZ(l);
            u < t && (t = u), h < n && (n = h), d < i && (i = d), u > s && (s = u), h > o && (o = h), d > a && (a = d);
        }
        return this.min.set(t, n, i), this.max.set(s, o, a), this;
    }
    setFromPoints(e) {
        this.makeEmpty();
        for(let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]);
        return this;
    }
    setFromCenterAndSize(e, t) {
        let n = Wn.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = !1) {
        return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
        return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
        return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = !1) {
        e.updateWorldMatrix(!1, !1);
        let n = e.geometry;
        if (n !== void 0) if (t && n.attributes != null && n.attributes.position !== void 0) {
            let s = n.attributes.position;
            for(let o = 0, a = s.count; o < a; o++)Wn.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(Wn);
        } else n.boundingBox === null && n.computeBoundingBox(), la.copy(n.boundingBox), la.applyMatrix4(e.matrixWorld), this.union(la);
        let i = e.children;
        for(let s1 = 0, o1 = i.length; s1 < o1; s1++)this.expandByObject(i[s1], t);
        return this;
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Wn), Wn.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
        if (this.isEmpty()) return !1;
        this.getCenter(_s), yr.subVectors(this.max, _s), ui.subVectors(e.a, _s), di.subVectors(e.b, _s), fi.subVectors(e.c, _s), yn.subVectors(di, ui), _n.subVectors(fi, di), qn.subVectors(ui, fi);
        let t = [
            0,
            -yn.z,
            yn.y,
            0,
            -_n.z,
            _n.y,
            0,
            -qn.z,
            qn.y,
            yn.z,
            0,
            -yn.x,
            _n.z,
            0,
            -_n.x,
            qn.z,
            0,
            -qn.x,
            -yn.y,
            yn.x,
            0,
            -_n.y,
            _n.x,
            0,
            -qn.y,
            qn.x,
            0
        ];
        return !ca(t, ui, di, fi, yr) || (t = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ], !ca(t, ui, di, fi, yr)) ? !1 : (_r.crossVectors(yn, _n), t = [
            _r.x,
            _r.y,
            _r.z
        ], ca(t, ui, di, fi, yr));
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
        return Wn.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    getBoundingSphere(e) {
        return this.getCenter(e.center), e.radius = this.getSize(Wn).length() * .5, e;
    }
    intersect(e) {
        return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
        return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (on[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), on[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), on[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), on[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), on[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), on[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), on[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), on[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(on), this);
    }
    translate(e) {
        return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max);
    }
};
Rt.prototype.isBox3 = !0;
var on = [
    new w,
    new w,
    new w,
    new w,
    new w,
    new w,
    new w,
    new w
], Wn = new w, la = new Rt, ui = new w, di = new w, fi = new w, yn = new w, _n = new w, qn = new w, _s = new w, yr = new w, _r = new w, Xn = new w;
function ca(r, e, t, n, i) {
    for(let s = 0, o = r.length - 3; s <= o; s += 3){
        Xn.fromArray(r, s);
        let a = i.x * Math.abs(Xn.x) + i.y * Math.abs(Xn.y) + i.z * Math.abs(Xn.z), l = e.dot(Xn), c = t.dot(Xn), u = n.dot(Xn);
        if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
    }
    return !0;
}
var Qd = new Rt, wc = new w, vr = new w, ha = new w, pn = class {
    constructor(e = new w, t = -1){
        this.center = e, this.radius = t;
    }
    set(e, t) {
        return this.center.copy(e), this.radius = t, this;
    }
    setFromPoints(e, t) {
        let n = this.center;
        t !== void 0 ? n.copy(t) : Qd.setFromPoints(e).getCenter(n);
        let i = 0;
        for(let s = 0, o = e.length; s < o; s++)i = Math.max(i, n.distanceToSquared(e[s]));
        return this.radius = Math.sqrt(i), this;
    }
    copy(e) {
        return this.center.copy(e.center), this.radius = e.radius, this;
    }
    isEmpty() {
        return this.radius < 0;
    }
    makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
        let t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
        return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
        let n = this.center.distanceToSquared(e);
        return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
    }
    translate(e) {
        return this.center.add(e), this;
    }
    expandByPoint(e) {
        ha.subVectors(e, this.center);
        let t = ha.lengthSq();
        if (t > this.radius * this.radius) {
            let n = Math.sqrt(t), i = (n - this.radius) * .5;
            this.center.add(ha.multiplyScalar(i / n)), this.radius += i;
        }
        return this;
    }
    union(e) {
        return this.center.equals(e.center) === !0 ? vr.set(0, 0, 1).multiplyScalar(e.radius) : vr.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(wc.copy(e.center).add(vr)), this.expandByPoint(wc.copy(e.center).sub(vr)), this;
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}, an = new w, ua = new w, Mr = new w, vn = new w, da = new w, wr = new w, fa = new w, mn = class {
    constructor(e = new w, t = new w(0, 0, -1)){
        this.origin = e, this.direction = t;
    }
    set(e, t) {
        return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
        return t.copy(this.direction).multiplyScalar(e).add(this.origin);
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
        return this.origin.copy(this.at(e, an)), this;
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        let n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
        let t = an.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (an.copy(this.direction).multiplyScalar(t).add(this.origin), an.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
        ua.copy(e).add(t).multiplyScalar(.5), Mr.copy(t).sub(e).normalize(), vn.copy(this.origin).sub(ua);
        let s = e.distanceTo(t) * .5, o = -this.direction.dot(Mr), a = vn.dot(this.direction), l = -vn.dot(Mr), c = vn.lengthSq(), u = Math.abs(1 - o * o), h, d, f, m;
        if (u > 0) if (h = o * l - a, d = o * a - l, m = s * u, h >= 0) if (d >= -m) if (d <= m) {
            let x = 1 / u;
            h *= x, d *= x, f = h * (h + o * d + 2 * a) + d * (o * h + d + 2 * l) + c;
        } else d = s, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
        else d = -s, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
        else d <= -m ? (h = Math.max(0, -(-o * s + a)), d = h > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -h * h + d * (d + 2 * l) + c) : d <= m ? (h = 0, d = Math.min(Math.max(-s, -l), s), f = d * (d + 2 * l) + c) : (h = Math.max(0, -(o * s + a)), d = h > 0 ? s : Math.min(Math.max(-s, -l), s), f = -h * h + d * (d + 2 * l) + c);
        else d = o > 0 ? -s : s, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Mr).multiplyScalar(d).add(ua), f;
    }
    intersectSphere(e, t) {
        an.subVectors(e.center, this.origin);
        let n = an.dot(this.direction), i = an.dot(an) - n * n, s = e.radius * e.radius;
        if (i > s) return null;
        let o = Math.sqrt(s - i), a = n - o, l = n + o;
        return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
        let t = e.normal.dot(this.direction);
        if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        let n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
        let n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
        let t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
        let n, i, s, o, a, l, c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
        return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, o = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, o = (e.min.y - d.y) * u), n > o || s > i || ((s > n || n !== n) && (n = s), (o < i || i !== i) && (i = o), h >= 0 ? (a = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (a = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
    }
    intersectsBox(e) {
        return this.intersectBox(e, an) !== null;
    }
    intersectTriangle(e, t, n, i, s) {
        da.subVectors(t, e), wr.subVectors(n, e), fa.crossVectors(da, wr);
        let o = this.direction.dot(fa), a;
        if (o > 0) {
            if (i) return null;
            a = 1;
        } else if (o < 0) a = -1, o = -o;
        else return null;
        vn.subVectors(this.origin, e);
        let l = a * this.direction.dot(wr.crossVectors(vn, wr));
        if (l < 0) return null;
        let c = a * this.direction.dot(da.cross(vn));
        if (c < 0 || l + c > o) return null;
        let u = -a * vn.dot(fa);
        return u < 0 ? null : this.at(u / o, s);
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
        return new this.constructor().copy(this);
    }
}, de = class {
    constructor(){
        this.elements = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }
    set(e, t, n, i, s, o, a, l, c, u, h, d, f, m, x, _) {
        let g = this.elements;
        return g[0] = e, g[4] = t, g[8] = n, g[12] = i, g[1] = s, g[5] = o, g[9] = a, g[13] = l, g[2] = c, g[6] = u, g[10] = h, g[14] = d, g[3] = f, g[7] = m, g[11] = x, g[15] = _, this;
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
        return new de().fromArray(this.elements);
    }
    copy(e) {
        let t = this.elements, n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
    }
    copyPosition(e) {
        let t = this.elements, n = e.elements;
        return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
    }
    setFromMatrix3(e) {
        let t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(e) {
        let t = this.elements, n = e.elements, i = 1 / pi.setFromMatrixColumn(e, 0).length(), s = 1 / pi.setFromMatrixColumn(e, 1).length(), o = 1 / pi.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        let t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
        if (e.order === "XYZ") {
            let d = o * u, f = o * h, m = a * u, x = a * h;
            t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = f + m * c, t[5] = d - x * c, t[9] = -a * l, t[2] = x - d * c, t[6] = m + f * c, t[10] = o * l;
        } else if (e.order === "YXZ") {
            let d1 = l * u, f1 = l * h, m1 = c * u, x1 = c * h;
            t[0] = d1 + x1 * a, t[4] = m1 * a - f1, t[8] = o * c, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = f1 * a - m1, t[6] = x1 + d1 * a, t[10] = o * l;
        } else if (e.order === "ZXY") {
            let d2 = l * u, f2 = l * h, m2 = c * u, x2 = c * h;
            t[0] = d2 - x2 * a, t[4] = -o * h, t[8] = m2 + f2 * a, t[1] = f2 + m2 * a, t[5] = o * u, t[9] = x2 - d2 * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
        } else if (e.order === "ZYX") {
            let d3 = o * u, f3 = o * h, m3 = a * u, x3 = a * h;
            t[0] = l * u, t[4] = m3 * c - f3, t[8] = d3 * c + x3, t[1] = l * h, t[5] = x3 * c + d3, t[9] = f3 * c - m3, t[2] = -c, t[6] = a * l, t[10] = o * l;
        } else if (e.order === "YZX") {
            let d4 = o * l, f4 = o * c, m4 = a * l, x4 = a * c;
            t[0] = l * u, t[4] = x4 - d4 * h, t[8] = m4 * h + f4, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = f4 * h + m4, t[10] = d4 - x4 * h;
        } else if (e.order === "XZY") {
            let d5 = o * l, f5 = o * c, m5 = a * l, x5 = a * c;
            t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d5 * h + x5, t[5] = o * u, t[9] = f5 * h - m5, t[2] = m5 * h - f5, t[6] = a * u, t[10] = x5 * h + d5;
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e) {
        return this.compose(ef, e, tf);
    }
    lookAt(e, t, n) {
        let i = this.elements;
        return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), Mn.crossVectors(n, Pt), Mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), Mn.crossVectors(n, Pt)), Mn.normalize(), br.crossVectors(Pt, Mn), i[0] = Mn.x, i[4] = br.x, i[8] = Pt.x, i[1] = Mn.y, i[5] = br.y, i[9] = Pt.y, i[2] = Mn.z, i[6] = br.z, i[10] = Pt.z, this;
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
        let n = e.elements, i = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], f = n[13], m = n[2], x = n[6], _ = n[10], g = n[14], p = n[3], M = n[7], y = n[11], b = n[15], T = i[0], R = i[4], P = i[8], H = i[12], B = i[1], v = i[5], C = i[9], D = i[13], N = i[2], z = i[6], F = i[10], W = i[14], j = i[3], ue = i[7], k = i[11], $ = i[15];
        return s[0] = o * T + a * B + l * N + c * j, s[4] = o * R + a * v + l * z + c * ue, s[8] = o * P + a * C + l * F + c * k, s[12] = o * H + a * D + l * W + c * $, s[1] = u * T + h * B + d * N + f * j, s[5] = u * R + h * v + d * z + f * ue, s[9] = u * P + h * C + d * F + f * k, s[13] = u * H + h * D + d * W + f * $, s[2] = m * T + x * B + _ * N + g * j, s[6] = m * R + x * v + _ * z + g * ue, s[10] = m * P + x * C + _ * F + g * k, s[14] = m * H + x * D + _ * W + g * $, s[3] = p * T + M * B + y * N + b * j, s[7] = p * R + M * v + y * z + b * ue, s[11] = p * P + M * C + y * F + b * k, s[15] = p * H + M * D + y * W + b * $, this;
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
    }
    determinant() {
        let e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], f = e[14], m = e[3], x = e[7], _ = e[11], g = e[15];
        return m * (+s * l * h - i * c * h - s * a * d + n * c * d + i * a * f - n * l * f) + x * (+t * l * f - t * c * d + s * o * d - i * o * f + i * c * u - s * l * u) + _ * (+t * c * h - t * a * f - s * o * h + n * o * f + s * a * u - n * c * u) + g * (-i * a * u - t * l * h + t * a * d + i * o * h - n * o * d + n * l * u);
    }
    transpose() {
        let e = this.elements, t;
        return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
    }
    setPosition(e, t, n) {
        let i = this.elements;
        return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
    }
    invert() {
        let e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], f = e[11], m = e[12], x = e[13], _ = e[14], g = e[15], p = h * _ * c - x * d * c + x * l * f - a * _ * f - h * l * g + a * d * g, M = m * d * c - u * _ * c - m * l * f + o * _ * f + u * l * g - o * d * g, y = u * x * c - m * h * c + m * a * f - o * x * f - u * a * g + o * h * g, b = m * h * l - u * x * l - m * a * d + o * x * d + u * a * _ - o * h * _, T = t * p + n * M + i * y + s * b;
        if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        let R = 1 / T;
        return e[0] = p * R, e[1] = (x * d * s - h * _ * s - x * i * f + n * _ * f + h * i * g - n * d * g) * R, e[2] = (a * _ * s - x * l * s + x * i * c - n * _ * c - a * i * g + n * l * g) * R, e[3] = (h * l * s - a * d * s - h * i * c + n * d * c + a * i * f - n * l * f) * R, e[4] = M * R, e[5] = (u * _ * s - m * d * s + m * i * f - t * _ * f - u * i * g + t * d * g) * R, e[6] = (m * l * s - o * _ * s - m * i * c + t * _ * c + o * i * g - t * l * g) * R, e[7] = (o * d * s - u * l * s + u * i * c - t * d * c - o * i * f + t * l * f) * R, e[8] = y * R, e[9] = (m * h * s - u * x * s - m * n * f + t * x * f + u * n * g - t * h * g) * R, e[10] = (o * x * s - m * a * s + m * n * c - t * x * c - o * n * g + t * a * g) * R, e[11] = (u * a * s - o * h * s - u * n * c + t * h * c + o * n * f - t * a * f) * R, e[12] = b * R, e[13] = (u * x * i - m * h * i + m * n * d - t * x * d - u * n * _ + t * h * _) * R, e[14] = (m * a * i - o * x * i - m * n * l + t * x * l + o * n * _ - t * a * _) * R, e[15] = (o * h * i - u * a * i + u * n * l - t * h * l - o * n * d + t * a * d) * R, this;
    }
    scale(e) {
        let t = this.elements, n = e.x, i = e.y, s = e.z;
        return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
    }
    getMaxScaleOnAxis() {
        let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(e) {
        let t = Math.cos(e), n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(e) {
        let t = Math.cos(e), n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(e) {
        let t = Math.cos(e), n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(e, t) {
        let n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, u = s * a;
        return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, u * a + n, u * l - i * o, 0, c * l - i * a, u * l + i * o, s * l * l + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, s, o) {
        return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
        let i = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, u = o + o, h = a + a, d = s * c, f = s * u, m = s * h, x = o * u, _ = o * h, g = a * h, p = l * c, M = l * u, y = l * h, b = n.x, T = n.y, R = n.z;
        return i[0] = (1 - (x + g)) * b, i[1] = (f + y) * b, i[2] = (m - M) * b, i[3] = 0, i[4] = (f - y) * T, i[5] = (1 - (d + g)) * T, i[6] = (_ + p) * T, i[7] = 0, i[8] = (m + M) * R, i[9] = (_ - p) * R, i[10] = (1 - (d + x)) * R, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
    }
    decompose(e, t, n) {
        let i = this.elements, s = pi.set(i[0], i[1], i[2]).length(), o = pi.set(i[4], i[5], i[6]).length(), a = pi.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Ut.copy(this);
        let c = 1 / s, u = 1 / o, h = 1 / a;
        return Ut.elements[0] *= c, Ut.elements[1] *= c, Ut.elements[2] *= c, Ut.elements[4] *= u, Ut.elements[5] *= u, Ut.elements[6] *= u, Ut.elements[8] *= h, Ut.elements[9] *= h, Ut.elements[10] *= h, t.setFromRotationMatrix(Ut), n.x = s, n.y = o, n.z = a, this;
    }
    makePerspective(e, t, n, i, s, o) {
        o === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        let a = this.elements, l = 2 * s / (t - e), c = 2 * s / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i), d = -(o + s) / (o - s), f = -2 * o * s / (o - s);
        return a[0] = l, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = c, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = f, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
    }
    makeOrthographic(e, t, n, i, s, o) {
        let a = this.elements, l = 1 / (t - e), c = 1 / (n - i), u = 1 / (o - s), h = (t + e) * l, d = (n + i) * c, f = (o + s) * u;
        return a[0] = 2 * l, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -f, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
    }
    equals(e) {
        let t = this.elements, n = e.elements;
        for(let i = 0; i < 16; i++)if (t[i] !== n[i]) return !1;
        return !0;
    }
    fromArray(e, t = 0) {
        for(let n = 0; n < 16; n++)this.elements[n] = e[n + t];
        return this;
    }
    toArray(e = [], t = 0) {
        let n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
    }
};
de.prototype.isMatrix4 = !0;
var pi = new w, Ut = new de, ef = new w(0, 0, 0), tf = new w(1, 1, 1), Mn = new w, br = new w, Pt = new w, bc = new de, Sc = new gt, Nn = class {
    constructor(e = 0, t = 0, n = 0, i = Nn.DefaultOrder){
        this._x = e, this._y = t, this._z = n, this._order = i;
    }
    get x() {
        return this._x;
    }
    set x(e) {
        this._x = e, this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(e) {
        this._y = e, this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(e) {
        this._z = e, this._onChangeCallback();
    }
    get order() {
        return this._order;
    }
    set order(e) {
        this._order = e, this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
        return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
        let i = e.elements, s = i[0], o = i[4], a = i[8], l = i[1], c = i[5], u = i[9], h = i[2], d = i[6], f = i[10];
        switch(t){
            case "XYZ":
                this._y = Math.asin(yt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, c), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-yt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(yt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-h, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
                break;
            case "ZYX":
                this._y = Math.asin(-yt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
                break;
            case "YZX":
                this._z = Math.asin(yt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(a, f));
                break;
            case "XZY":
                this._z = Math.asin(-yt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, f), this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
        }
        return this._order = t, n === !0 && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
        return bc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(bc, t, n);
    }
    setFromVector3(e, t = this._order) {
        return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
        return Sc.setFromEuler(this), this.setFromQuaternion(Sc, e);
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
    }
    toVector3(e) {
        return e ? e.set(this._x, this._y, this._z) : new w(this._x, this._y, this._z);
    }
    _onChange(e) {
        return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {}
};
Nn.prototype.isEuler = !0;
Nn.DefaultOrder = "XYZ";
Nn.RotationOrders = [
    "XYZ",
    "YZX",
    "ZXY",
    "XZY",
    "YXZ",
    "ZYX"
];
var Vs = class {
    constructor(){
        this.mask = 1;
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0;
    }
    enable(e) {
        this.mask |= 1 << e | 0;
    }
    enableAll() {
        this.mask = -1;
    }
    toggle(e) {
        this.mask ^= 1 << e | 0;
    }
    disable(e) {
        this.mask &= ~(1 << e | 0);
    }
    disableAll() {
        this.mask = 0;
    }
    test(e) {
        return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0;
    }
}, nf = 0, Ec = new w, mi = new gt, ln = new de, Sr = new w, vs = new w, sf = new w, rf = new gt, Tc = new w(1, 0, 0), Ac = new w(0, 1, 0), Rc = new w(0, 0, 1), of = {
    type: "added"
}, Cc = {
    type: "removed"
}, Ie = class extends dn {
    constructor(){
        super(), Object.defineProperty(this, "id", {
            value: nf++
        }), this.uuid = It(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ie.DefaultUp.clone();
        let e = new w, t = new Nn, n = new gt, i = new w(1, 1, 1);
        function s() {
            n.setFromEuler(t, !1);
        }
        function o() {
            t.setFromQuaternion(n, void 0, !1);
        }
        t._onChange(s), n._onChange(o), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new de
            },
            normalMatrix: {
                value: new ht
            }
        }), this.matrix = new de, this.matrixWorld = new de, this.matrixAutoUpdate = Ie.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Vs, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
        return mi.setFromAxisAngle(e, t), this.quaternion.multiply(mi), this;
    }
    rotateOnWorldAxis(e, t) {
        return mi.setFromAxisAngle(e, t), this.quaternion.premultiply(mi), this;
    }
    rotateX(e) {
        return this.rotateOnAxis(Tc, e);
    }
    rotateY(e) {
        return this.rotateOnAxis(Ac, e);
    }
    rotateZ(e) {
        return this.rotateOnAxis(Rc, e);
    }
    translateOnAxis(e, t) {
        return Ec.copy(e).applyQuaternion(this.quaternion), this.position.add(Ec.multiplyScalar(t)), this;
    }
    translateX(e) {
        return this.translateOnAxis(Tc, e);
    }
    translateY(e) {
        return this.translateOnAxis(Ac, e);
    }
    translateZ(e) {
        return this.translateOnAxis(Rc, e);
    }
    localToWorld(e) {
        return e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
        return e.applyMatrix4(ln.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
        e.isVector3 ? Sr.copy(e) : Sr.set(e, t, n);
        let i = this.parent;
        this.updateWorldMatrix(!0, !1), vs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ln.lookAt(vs, Sr, this.up) : ln.lookAt(Sr, vs, this.up), this.quaternion.setFromRotationMatrix(ln), i && (ln.extractRotation(i.matrixWorld), mi.setFromRotationMatrix(ln), this.quaternion.premultiply(mi.invert()));
    }
    add(e) {
        if (arguments.length > 1) {
            for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
            return this;
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(of)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    }
    remove(e) {
        if (arguments.length > 1) {
            for(let n = 0; n < arguments.length; n++)this.remove(arguments[n]);
            return this;
        }
        let t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Cc)), this;
    }
    removeFromParent() {
        let e = this.parent;
        return e !== null && e.remove(this), this;
    }
    clear() {
        for(let e = 0; e < this.children.length; e++){
            let t = this.children[e];
            t.parent = null, t.dispatchEvent(Cc);
        }
        return this.children.length = 0, this;
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1), ln.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), ln.multiply(e.parent.matrixWorld)), e.applyMatrix4(ln), this.add(e), e.updateWorldMatrix(!1, !0), this;
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
        if (this[e] === t) return this;
        for(let n = 0, i = this.children.length; n < i; n++){
            let o = this.children[n].getObjectByProperty(e, t);
            if (o !== void 0) return o;
        }
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vs, e, sf), e;
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(vs, rf, e), e;
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        let t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {}
    traverse(e) {
        e(this);
        let t = this.children;
        for(let n = 0, i = t.length; n < i; n++)t[n].traverse(e);
    }
    traverseVisible(e) {
        if (this.visible === !1) return;
        e(this);
        let t = this.children;
        for(let n = 0, i = t.length; n < i; n++)t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
        let t = this.parent;
        t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        let t = this.children;
        for(let n = 0, i = t.length; n < i; n++)t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t) {
        let n = this.parent;
        if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
            let i = this.children;
            for(let s = 0, o = i.length; s < o; s++)i[s].updateWorldMatrix(!1, !0);
        }
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == "string", n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {}
        }, n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        let i = {};
        i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
        function s(a, l) {
            return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
        }
        if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = s(e.geometries, this.geometry);
            let a = this.geometry.parameters;
            if (a !== void 0 && a.shapes !== void 0) {
                let l = a.shapes;
                if (Array.isArray(l)) for(let c = 0, u = l.length; c < u; c++){
                    let h = l[c];
                    s(e.shapes, h);
                }
                else s(e.shapes, l);
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
            let a1 = [];
            for(let l1 = 0, c1 = this.material.length; l1 < c1; l1++)a1.push(s(e.materials, this.material[l1]));
            i.material = a1;
        } else i.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for(let a2 = 0; a2 < this.children.length; a2++)i.children.push(this.children[a2].toJSON(e).object);
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for(let a3 = 0; a3 < this.animations.length; a3++){
                let l2 = this.animations[a3];
                i.animations.push(s(e.animations, l2));
            }
        }
        if (t) {
            let a4 = o(e.geometries), l3 = o(e.materials), c2 = o(e.textures), u1 = o(e.images), h1 = o(e.shapes), d = o(e.skeletons), f = o(e.animations);
            a4.length > 0 && (n.geometries = a4), l3.length > 0 && (n.materials = l3), c2.length > 0 && (n.textures = c2), u1.length > 0 && (n.images = u1), h1.length > 0 && (n.shapes = h1), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f);
        }
        return n.object = i, n;
        function o(a) {
            let l = [];
            for(let c in a){
                let u = a[c];
                delete u.metadata, l.push(u);
            }
            return l;
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
        if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for(let n = 0; n < e.children.length; n++){
            let i = e.children[n];
            this.add(i.clone());
        }
        return this;
    }
};
Ie.DefaultUp = new w(0, 1, 0);
Ie.DefaultMatrixAutoUpdate = !0;
Ie.prototype.isObject3D = !0;
var Ht = new w, cn = new w, pa = new w, hn = new w, gi = new w, xi = new w, Lc = new w, ma = new w, ga = new w, xa = new w, it = class {
    constructor(e = new w, t = new w, n = new w){
        this.a = e, this.b = t, this.c = n;
    }
    static getNormal(e, t, n, i) {
        i.subVectors(n, t), Ht.subVectors(e, t), i.cross(Ht);
        let s = i.lengthSq();
        return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, s) {
        Ht.subVectors(i, t), cn.subVectors(n, t), pa.subVectors(e, t);
        let o = Ht.dot(Ht), a = Ht.dot(cn), l = Ht.dot(pa), c = cn.dot(cn), u = cn.dot(pa), h = o * c - a * a;
        if (h === 0) return s.set(-2, -1, -1);
        let d = 1 / h, f = (c * l - a * u) * d, m = (o * u - a * l) * d;
        return s.set(1 - f - m, m, f);
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, hn), hn.x >= 0 && hn.y >= 0 && hn.x + hn.y <= 1;
    }
    static getUV(e, t, n, i, s, o, a, l) {
        return this.getBarycoord(e, t, n, i, hn), l.set(0, 0), l.addScaledVector(s, hn.x), l.addScaledVector(o, hn.y), l.addScaledVector(a, hn.z), l;
    }
    static isFrontFacing(e, t, n, i) {
        return Ht.subVectors(n, t), cn.subVectors(e, t), Ht.cross(cn).dot(i) < 0;
    }
    set(e, t, n) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
        return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
        return Ht.subVectors(this.c, this.b), cn.subVectors(this.a, this.b), Ht.cross(cn).length() * .5;
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e) {
        return it.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
        return it.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getUV(e, t, n, i, s) {
        return it.getUV(e, this.a, this.b, this.c, t, n, i, s);
    }
    containsPoint(e) {
        return it.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
        return it.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
        let n = this.a, i = this.b, s = this.c, o, a;
        gi.subVectors(i, n), xi.subVectors(s, n), ma.subVectors(e, n);
        let l = gi.dot(ma), c = xi.dot(ma);
        if (l <= 0 && c <= 0) return t.copy(n);
        ga.subVectors(e, i);
        let u = gi.dot(ga), h = xi.dot(ga);
        if (u >= 0 && h <= u) return t.copy(i);
        let d = l * h - u * c;
        if (d <= 0 && l >= 0 && u <= 0) return o = l / (l - u), t.copy(n).addScaledVector(gi, o);
        xa.subVectors(e, s);
        let f = gi.dot(xa), m = xi.dot(xa);
        if (m >= 0 && f <= m) return t.copy(s);
        let x = f * c - l * m;
        if (x <= 0 && c >= 0 && m <= 0) return a = c / (c - m), t.copy(n).addScaledVector(xi, a);
        let _ = u * m - f * h;
        if (_ <= 0 && h - u >= 0 && f - m >= 0) return Lc.subVectors(s, i), a = (h - u) / (h - u + (f - m)), t.copy(i).addScaledVector(Lc, a);
        let g = 1 / (_ + x + d);
        return o = x * g, a = d * g, t.copy(n).addScaledVector(gi, o).addScaledVector(xi, a);
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
}, af = 0, ft = class extends dn {
    constructor(){
        super(), Object.defineProperty(this, "id", {
            value: af++
        }), this.uuid = It(), this.name = "", this.type = "Material", this.fog = !0, this.blending = Ls, this.side = Oi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = uu, this.blendDst = du, this.blendEquation = Ci, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = za, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = zd, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ia, this.stencilZFail = ia, this.stencilZPass = ia, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.alphaWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
        return this._alphaTest;
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString();
    }
    setValues(e) {
        if (e !== void 0) for(let t in e){
            let n = e[t];
            if (n === void 0) {
                console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                continue;
            }
            if (t === "shading") {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === hu;
                continue;
            }
            let i = this[t];
            if (i === void 0) {
                console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                continue;
            }
            i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
        }
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        let n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ls && (n.blending = this.blending), this.side !== Oi && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.alphaWrite = this.alphaWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
        function i(s) {
            let o = [];
            for(let a in s){
                let l = s[a];
                delete l.metadata, o.push(l);
            }
            return o;
        }
        if (t) {
            let s = i(e.textures), o = i(e.images);
            s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
        }
        return n;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
        let t = e.clippingPlanes, n = null;
        if (t !== null) {
            let i = t.length;
            n = new Array(i);
            for(let s = 0; s !== i; ++s)n[s] = t[s].clone();
        }
        return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.alphaWrite = e.alphaWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
};
ft.prototype.isMaterial = !0;
var jt = class extends ft {
    constructor(e){
        super(), this.type = "MeshBasicMaterial", this.color = new ne(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Jo, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this;
    }
};
jt.prototype.isMeshBasicMaterial = !0;
var Ye = new w, Er = new Z, Be = class {
    constructor(e, t, n){
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Bs, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0;
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
    setUsage(e) {
        return this.usage = e, this;
    }
    copy(e) {
        return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
    }
    copyAt(e, t, n) {
        e *= this.itemSize, n *= t.itemSize;
        for(let i = 0, s = this.itemSize; i < s; i++)this.array[e + i] = t.array[n + i];
        return this;
    }
    copyArray(e) {
        return this.array.set(e), this;
    }
    copyColorsArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, s = e.length; i < s; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new ne), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b;
        }
        return this;
    }
    copyVector2sArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, s = e.length; i < s; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new Z), t[n++] = o.x, t[n++] = o.y;
        }
        return this;
    }
    copyVector3sArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, s = e.length; i < s; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new w), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z;
        }
        return this;
    }
    copyVector4sArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, s = e.length; i < s; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new Ge), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w;
        }
        return this;
    }
    applyMatrix3(e) {
        if (this.itemSize === 2) for(let t = 0, n = this.count; t < n; t++)Er.fromBufferAttribute(this, t), Er.applyMatrix3(e), this.setXY(t, Er.x, Er.y);
        else if (this.itemSize === 3) for(let t1 = 0, n1 = this.count; t1 < n1; t1++)Ye.fromBufferAttribute(this, t1), Ye.applyMatrix3(e), this.setXYZ(t1, Ye.x, Ye.y, Ye.z);
        return this;
    }
    applyMatrix4(e) {
        for(let t = 0, n = this.count; t < n; t++)Ye.x = this.getX(t), Ye.y = this.getY(t), Ye.z = this.getZ(t), Ye.applyMatrix4(e), this.setXYZ(t, Ye.x, Ye.y, Ye.z);
        return this;
    }
    applyNormalMatrix(e) {
        for(let t = 0, n = this.count; t < n; t++)Ye.x = this.getX(t), Ye.y = this.getY(t), Ye.z = this.getZ(t), Ye.applyNormalMatrix(e), this.setXYZ(t, Ye.x, Ye.y, Ye.z);
        return this;
    }
    transformDirection(e) {
        for(let t = 0, n = this.count; t < n; t++)Ye.x = this.getX(t), Ye.y = this.getY(t), Ye.z = this.getZ(t), Ye.transformDirection(e), this.setXYZ(t, Ye.x, Ye.y, Ye.z);
        return this;
    }
    set(e, t = 0) {
        return this.array.set(e, t), this;
    }
    getX(e) {
        return this.array[e * this.itemSize];
    }
    setX(e, t) {
        return this.array[e * this.itemSize] = t, this;
    }
    getY(e) {
        return this.array[e * this.itemSize + 1];
    }
    setY(e, t) {
        return this.array[e * this.itemSize + 1] = t, this;
    }
    getZ(e) {
        return this.array[e * this.itemSize + 2];
    }
    setZ(e, t) {
        return this.array[e * this.itemSize + 2] = t, this;
    }
    getW(e) {
        return this.array[e * this.itemSize + 3];
    }
    setW(e, t) {
        return this.array[e * this.itemSize + 3] = t, this;
    }
    setXY(e, t, n) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, s) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
    }
    onUpload(e) {
        return this.onUploadCallback = e, this;
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
        let e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name), this.usage !== Bs && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
    }
};
Be.prototype.isBufferAttribute = !0;
var ks = class extends Be {
    constructor(e, t, n){
        super(new Uint16Array(e), t, n);
    }
}, Gs = class extends Be {
    constructor(e, t, n){
        super(new Uint32Array(e), t, n);
    }
}, Ya = class extends Be {
    constructor(e, t, n){
        super(new Uint16Array(e), t, n);
    }
};
Ya.prototype.isFloat16BufferAttribute = !0;
var he = class extends Be {
    constructor(e, t, n){
        super(new Float32Array(e), t, n);
    }
}, lf = 0, Ft = new de, ya = new Ie, yi = new w, Dt = new Rt, Ms = new Rt, mt = new w, ve = class extends dn {
    constructor(){
        super(), Object.defineProperty(this, "id", {
            value: lf++
        }), this.uuid = It(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {};
    }
    getIndex() {
        return this.index;
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (xu(e) ? Gs : ks)(e, 1) : this.index = e, this;
    }
    getAttribute(e) {
        return this.attributes[e];
    }
    setAttribute(e, t) {
        return this.attributes[e] = t, this;
    }
    deleteAttribute(e) {
        return delete this.attributes[e], this;
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        });
    }
    clearGroups() {
        this.groups = [];
    }
    setDrawRange(e, t) {
        this.drawRange.start = e, this.drawRange.count = t;
    }
    applyMatrix4(e) {
        let t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
        let n = this.attributes.normal;
        if (n !== void 0) {
            let s = new ht().getNormalMatrix(e);
            n.applyNormalMatrix(s), n.needsUpdate = !0;
        }
        let i = this.attributes.tangent;
        return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
    }
    applyQuaternion(e) {
        return Ft.makeRotationFromQuaternion(e), this.applyMatrix4(Ft), this;
    }
    rotateX(e) {
        return Ft.makeRotationX(e), this.applyMatrix4(Ft), this;
    }
    rotateY(e) {
        return Ft.makeRotationY(e), this.applyMatrix4(Ft), this;
    }
    rotateZ(e) {
        return Ft.makeRotationZ(e), this.applyMatrix4(Ft), this;
    }
    translate(e, t, n) {
        return Ft.makeTranslation(e, t, n), this.applyMatrix4(Ft), this;
    }
    scale(e, t, n) {
        return Ft.makeScale(e, t, n), this.applyMatrix4(Ft), this;
    }
    lookAt(e) {
        return ya.lookAt(e), ya.updateMatrix(), this.applyMatrix4(ya.matrix), this;
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(yi).negate(), this.translate(yi.x, yi.y, yi.z), this;
    }
    setFromPoints(e) {
        let t = [];
        for(let n = 0, i = e.length; n < i; n++){
            let s = e[n];
            t.push(s.x, s.y, s.z || 0);
        }
        return this.setAttribute("position", new he(t, 3)), this;
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Rt);
        let e = this.attributes.position, t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new w(-1 / 0, -1 / 0, -1 / 0), new w(1 / 0, 1 / 0, 1 / 0));
            return;
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e), t) for(let n = 0, i = t.length; n < i; n++){
                let s = t[n];
                Dt.setFromBufferAttribute(s), this.morphTargetsRelative ? (mt.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(mt), mt.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(mt)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new pn);
        let e = this.attributes.position, t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new w, 1 / 0);
            return;
        }
        if (e) {
            let n = this.boundingSphere.center;
            if (Dt.setFromBufferAttribute(e), t) for(let s = 0, o = t.length; s < o; s++){
                let a = t[s];
                Ms.setFromBufferAttribute(a), this.morphTargetsRelative ? (mt.addVectors(Dt.min, Ms.min), Dt.expandByPoint(mt), mt.addVectors(Dt.max, Ms.max), Dt.expandByPoint(mt)) : (Dt.expandByPoint(Ms.min), Dt.expandByPoint(Ms.max));
            }
            Dt.getCenter(n);
            let i = 0;
            for(let s1 = 0, o1 = e.count; s1 < o1; s1++)mt.fromBufferAttribute(e, s1), i = Math.max(i, n.distanceToSquared(mt));
            if (t) for(let s2 = 0, o2 = t.length; s2 < o2; s2++){
                let a1 = t[s2], l = this.morphTargetsRelative;
                for(let c = 0, u = a1.count; c < u; c++)mt.fromBufferAttribute(a1, c), l && (yi.fromBufferAttribute(e, c), mt.add(yi)), i = Math.max(i, n.distanceToSquared(mt));
            }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
    }
    computeTangents() {
        let e = this.index, t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return;
        }
        let n = e.array, i = t.position.array, s = t.normal.array, o = t.uv.array, a = i.length / 3;
        t.tangent === void 0 && this.setAttribute("tangent", new Be(new Float32Array(4 * a), 4));
        let l = t.tangent.array, c = [], u = [];
        for(let B = 0; B < a; B++)c[B] = new w, u[B] = new w;
        let h = new w, d = new w, f = new w, m = new Z, x = new Z, _ = new Z, g = new w, p = new w;
        function M(B, v, C) {
            h.fromArray(i, B * 3), d.fromArray(i, v * 3), f.fromArray(i, C * 3), m.fromArray(o, B * 2), x.fromArray(o, v * 2), _.fromArray(o, C * 2), d.sub(h), f.sub(h), x.sub(m), _.sub(m);
            let D = 1 / (x.x * _.y - _.x * x.y);
            !isFinite(D) || (g.copy(d).multiplyScalar(_.y).addScaledVector(f, -x.y).multiplyScalar(D), p.copy(f).multiplyScalar(x.x).addScaledVector(d, -_.x).multiplyScalar(D), c[B].add(g), c[v].add(g), c[C].add(g), u[B].add(p), u[v].add(p), u[C].add(p));
        }
        let y = this.groups;
        y.length === 0 && (y = [
            {
                start: 0,
                count: n.length
            }
        ]);
        for(let B1 = 0, v = y.length; B1 < v; ++B1){
            let C = y[B1], D = C.start, N = C.count;
            for(let z = D, F = D + N; z < F; z += 3)M(n[z + 0], n[z + 1], n[z + 2]);
        }
        let b = new w, T = new w, R = new w, P = new w;
        function H(B) {
            R.fromArray(s, B * 3), P.copy(R);
            let v = c[B];
            b.copy(v), b.sub(R.multiplyScalar(R.dot(v))).normalize(), T.crossVectors(P, v);
            let D = T.dot(u[B]) < 0 ? -1 : 1;
            l[B * 4] = b.x, l[B * 4 + 1] = b.y, l[B * 4 + 2] = b.z, l[B * 4 + 3] = D;
        }
        for(let B2 = 0, v1 = y.length; B2 < v1; ++B2){
            let C1 = y[B2], D1 = C1.start, N1 = C1.count;
            for(let z1 = D1, F1 = D1 + N1; z1 < F1; z1 += 3)H(n[z1 + 0]), H(n[z1 + 1]), H(n[z1 + 2]);
        }
    }
    computeVertexNormals() {
        let e = this.index, t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0) n = new Be(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
            else for(let d = 0, f = n.count; d < f; d++)n.setXYZ(d, 0, 0, 0);
            let i = new w, s = new w, o = new w, a = new w, l = new w, c = new w, u = new w, h = new w;
            if (e) for(let d1 = 0, f1 = e.count; d1 < f1; d1 += 3){
                let m = e.getX(d1 + 0), x = e.getX(d1 + 1), _ = e.getX(d1 + 2);
                i.fromBufferAttribute(t, m), s.fromBufferAttribute(t, x), o.fromBufferAttribute(t, _), u.subVectors(o, s), h.subVectors(i, s), u.cross(h), a.fromBufferAttribute(n, m), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, _), a.add(u), l.add(u), c.add(u), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(_, c.x, c.y, c.z);
            }
            else for(let d2 = 0, f2 = t.count; d2 < f2; d2 += 3)i.fromBufferAttribute(t, d2 + 0), s.fromBufferAttribute(t, d2 + 1), o.fromBufferAttribute(t, d2 + 2), u.subVectors(o, s), h.subVectors(i, s), u.cross(h), n.setXYZ(d2 + 0, u.x, u.y, u.z), n.setXYZ(d2 + 1, u.x, u.y, u.z), n.setXYZ(d2 + 2, u.x, u.y, u.z);
            this.normalizeNormals(), n.needsUpdate = !0;
        }
    }
    merge(e, t) {
        if (!(e && e.isBufferGeometry)) {
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
            return;
        }
        t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        let n = this.attributes;
        for(let i in n){
            if (e.attributes[i] === void 0) continue;
            let o = n[i].array, a = e.attributes[i], l = a.array, c = a.itemSize * t, u = Math.min(l.length, o.length - c);
            for(let h = 0, d = c; h < u; h++, d++)o[d] = l[h];
        }
        return this;
    }
    normalizeNormals() {
        let e = this.attributes.normal;
        for(let t = 0, n = e.count; t < n; t++)mt.fromBufferAttribute(e, t), mt.normalize(), e.setXYZ(t, mt.x, mt.y, mt.z);
    }
    toNonIndexed() {
        function e(a, l) {
            let c = a.array, u = a.itemSize, h = a.normalized, d = new c.constructor(l.length * u), f = 0, m = 0;
            for(let x = 0, _ = l.length; x < _; x++){
                a.isInterleavedBufferAttribute ? f = l[x] * a.data.stride + a.offset : f = l[x] * u;
                for(let g = 0; g < u; g++)d[m++] = c[f++];
            }
            return new Be(d, u, h);
        }
        if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
        let t = new ve, n = this.index.array, i = this.attributes;
        for(let a in i){
            let l = i[a], c = e(l, n);
            t.setAttribute(a, c);
        }
        let s = this.morphAttributes;
        for(let a1 in s){
            let l1 = [], c1 = s[a1];
            for(let u = 0, h = c1.length; u < h; u++){
                let d = c1[u], f = e(d, n);
                l1.push(f);
            }
            t.morphAttributes[a1] = l1;
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        let o = this.groups;
        for(let a2 = 0, l2 = o.length; a2 < l2; a2++){
            let c2 = o[a2];
            t.addGroup(c2.start, c2.count, c2.materialIndex);
        }
        return t;
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
            let l = this.parameters;
            for(let c in l)l[c] !== void 0 && (e[c] = l[c]);
            return e;
        }
        e.data = {
            attributes: {}
        };
        let t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        let n = this.attributes;
        for(let l1 in n){
            let c1 = n[l1];
            e.data.attributes[l1] = c1.toJSON(e.data);
        }
        let i = {}, s = !1;
        for(let l2 in this.morphAttributes){
            let c2 = this.morphAttributes[l2], u = [];
            for(let h = 0, d = c2.length; h < d; h++){
                let f = c2[h];
                u.push(f.toJSON(e.data));
            }
            u.length > 0 && (i[l2] = u, s = !0);
        }
        s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
        let o = this.groups;
        o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
        let a = this.boundingSphere;
        return a !== null && (e.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }), e;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
        let t = {};
        this.name = e.name;
        let n = e.index;
        n !== null && this.setIndex(n.clone(t));
        let i = e.attributes;
        for(let c in i){
            let u = i[c];
            this.setAttribute(c, u.clone(t));
        }
        let s = e.morphAttributes;
        for(let c1 in s){
            let u1 = [], h = s[c1];
            for(let d = 0, f = h.length; d < f; d++)u1.push(h[d].clone(t));
            this.morphAttributes[c1] = u1;
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        let o = e.groups;
        for(let c2 = 0, u2 = o.length; c2 < u2; c2++){
            let h1 = o[c2];
            this.addGroup(h1.start, h1.count, h1.materialIndex);
        }
        let a = e.boundingBox;
        a !== null && (this.boundingBox = a.clone());
        let l = e.boundingSphere;
        return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
};
ve.prototype.isBufferGeometry = !0;
var Pc = new de, _i = new mn, _a = new pn, wn = new w, bn = new w, Sn = new w, va = new w, Ma = new w, wa = new w, Tr = new w, Ar = new w, Rr = new w, Cr = new Z, Lr = new Z, Pr = new Z, ba = new w, Dr = new w, ot = class extends Ie {
    constructor(e = new ve, t = new jt){
        super(), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e) {
        return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
    }
    updateMorphTargets() {
        let e = this.geometry;
        if (e.isBufferGeometry) {
            let t = e.morphAttributes, n = Object.keys(t);
            if (n.length > 0) {
                let i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, o = i.length; s < o; s++){
                        let a = i[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
                    }
                }
            }
        } else {
            let t1 = e.morphTargets;
            t1 !== void 0 && t1.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
    raycast(e, t) {
        let n = this.geometry, i = this.material, s = this.matrixWorld;
        if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), _a.copy(n.boundingSphere), _a.applyMatrix4(s), e.ray.intersectsSphere(_a) === !1) || (Pc.copy(s).invert(), _i.copy(e.ray).applyMatrix4(Pc), n.boundingBox !== null && _i.intersectsBox(n.boundingBox) === !1)) return;
        let o;
        if (n.isBufferGeometry) {
            let a = n.index, l = n.attributes.position, c = n.morphAttributes.position, u = n.morphTargetsRelative, h = n.attributes.uv, d = n.attributes.uv2, f = n.groups, m = n.drawRange;
            if (a !== null) if (Array.isArray(i)) for(let x = 0, _ = f.length; x < _; x++){
                let g = f[x], p = i[g.materialIndex], M = Math.max(g.start, m.start), y = Math.min(a.count, Math.min(g.start + g.count, m.start + m.count));
                for(let b = M, T = y; b < T; b += 3){
                    let R = a.getX(b), P = a.getX(b + 1), H = a.getX(b + 2);
                    o = Ir(this, p, e, _i, l, c, u, h, d, R, P, H), o && (o.faceIndex = Math.floor(b / 3), o.face.materialIndex = g.materialIndex, t.push(o));
                }
            }
            else {
                let x1 = Math.max(0, m.start), _1 = Math.min(a.count, m.start + m.count);
                for(let g1 = x1, p1 = _1; g1 < p1; g1 += 3){
                    let M1 = a.getX(g1), y1 = a.getX(g1 + 1), b1 = a.getX(g1 + 2);
                    o = Ir(this, i, e, _i, l, c, u, h, d, M1, y1, b1), o && (o.faceIndex = Math.floor(g1 / 3), t.push(o));
                }
            }
            else if (l !== void 0) if (Array.isArray(i)) for(let x2 = 0, _2 = f.length; x2 < _2; x2++){
                let g2 = f[x2], p2 = i[g2.materialIndex], M2 = Math.max(g2.start, m.start), y2 = Math.min(l.count, Math.min(g2.start + g2.count, m.start + m.count));
                for(let b2 = M2, T1 = y2; b2 < T1; b2 += 3){
                    let R1 = b2, P1 = b2 + 1, H1 = b2 + 2;
                    o = Ir(this, p2, e, _i, l, c, u, h, d, R1, P1, H1), o && (o.faceIndex = Math.floor(b2 / 3), o.face.materialIndex = g2.materialIndex, t.push(o));
                }
            }
            else {
                let x3 = Math.max(0, m.start), _3 = Math.min(l.count, m.start + m.count);
                for(let g3 = x3, p3 = _3; g3 < p3; g3 += 3){
                    let M3 = g3, y3 = g3 + 1, b3 = g3 + 2;
                    o = Ir(this, i, e, _i, l, c, u, h, d, M3, y3, b3), o && (o.faceIndex = Math.floor(g3 / 3), t.push(o));
                }
            }
        } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
};
ot.prototype.isMesh = !0;
function cf(r, e, t, n, i, s, o, a) {
    let l;
    if (e.side === lt ? l = n.intersectTriangle(o, s, i, !0, a) : l = n.intersectTriangle(i, s, o, e.side !== Ui, a), l === null) return null;
    Dr.copy(a), Dr.applyMatrix4(r.matrixWorld);
    let c = t.ray.origin.distanceTo(Dr);
    return c < t.near || c > t.far ? null : {
        distance: c,
        point: Dr.clone(),
        object: r
    };
}
function Ir(r, e, t, n, i, s, o, a, l, c, u, h) {
    wn.fromBufferAttribute(i, c), bn.fromBufferAttribute(i, u), Sn.fromBufferAttribute(i, h);
    let d = r.morphTargetInfluences;
    if (s && d) {
        Tr.set(0, 0, 0), Ar.set(0, 0, 0), Rr.set(0, 0, 0);
        for(let m = 0, x = s.length; m < x; m++){
            let _ = d[m], g = s[m];
            _ !== 0 && (va.fromBufferAttribute(g, c), Ma.fromBufferAttribute(g, u), wa.fromBufferAttribute(g, h), o ? (Tr.addScaledVector(va, _), Ar.addScaledVector(Ma, _), Rr.addScaledVector(wa, _)) : (Tr.addScaledVector(va.sub(wn), _), Ar.addScaledVector(Ma.sub(bn), _), Rr.addScaledVector(wa.sub(Sn), _)));
        }
        wn.add(Tr), bn.add(Ar), Sn.add(Rr);
    }
    r.isSkinnedMesh && (r.boneTransform(c, wn), r.boneTransform(u, bn), r.boneTransform(h, Sn));
    let f = cf(r, e, t, n, wn, bn, Sn, ba);
    if (f) {
        a && (Cr.fromBufferAttribute(a, c), Lr.fromBufferAttribute(a, u), Pr.fromBufferAttribute(a, h), f.uv = it.getUV(ba, wn, bn, Sn, Cr, Lr, Pr, new Z)), l && (Cr.fromBufferAttribute(l, c), Lr.fromBufferAttribute(l, u), Pr.fromBufferAttribute(l, h), f.uv2 = it.getUV(ba, wn, bn, Sn, Cr, Lr, Pr, new Z));
        let m1 = {
            a: c,
            b: u,
            c: h,
            normal: new w,
            materialIndex: 0
        };
        it.getNormal(wn, bn, Sn, m1.normal), f.face = m1;
    }
    return f;
}
var gn = class extends ve {
    constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1){
        super(), this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: s,
            depthSegments: o
        };
        let a = this;
        i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
        let l = [], c = [], u = [], h = [], d = 0, f = 0;
        m("z", "y", "x", -1, -1, n, t, e, o, s, 0), m("z", "y", "x", 1, -1, n, t, -e, o, s, 1), m("x", "z", "y", 1, 1, e, n, t, i, o, 2), m("x", "z", "y", 1, -1, e, n, -t, i, o, 3), m("x", "y", "z", 1, -1, e, t, n, i, s, 4), m("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new he(c, 3)), this.setAttribute("normal", new he(u, 3)), this.setAttribute("uv", new he(h, 2));
        function m(x, _, g, p, M, y, b, T, R, P, H) {
            let B = y / R, v = b / P, C = y / 2, D = b / 2, N = T / 2, z = R + 1, F = P + 1, W = 0, j = 0, ue = new w;
            for(let k = 0; k < F; k++){
                let $ = k * v - D;
                for(let se = 0; se < z; se++){
                    let pe = se * B - C;
                    ue[x] = pe * p, ue[_] = $ * M, ue[g] = N, c.push(ue.x, ue.y, ue.z), ue[x] = 0, ue[_] = 0, ue[g] = T > 0 ? 1 : -1, u.push(ue.x, ue.y, ue.z), h.push(se / R), h.push(1 - k / P), W += 1;
                }
            }
            for(let k1 = 0; k1 < P; k1++)for(let $1 = 0; $1 < R; $1++){
                let se1 = d + $1 + z * k1, pe1 = d + $1 + z * (k1 + 1), ye = d + ($1 + 1) + z * (k1 + 1), V = d + ($1 + 1) + z * k1;
                l.push(se1, pe1, V), l.push(pe1, ye, V), j += 6;
            }
            a.addGroup(f, j, H), f += j, d += W;
        }
    }
    static fromJSON(e) {
        return new gn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
    }
};
function Vi(r) {
    let e = {};
    for(let t in r){
        e[t] = {};
        for(let n in r[t]){
            let i = r[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
        }
    }
    return e;
}
function vt(r) {
    let e = {};
    for(let t = 0; t < r.length; t++){
        let n = Vi(r[t]);
        for(let i in n)e[i] = n[i];
    }
    return e;
}
var hf = {
    clone: Vi,
    merge: vt
}, uf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, df = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, Kt = class extends ft {
    constructor(e){
        super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = uf, this.fragmentShader = df, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [
                1,
                1,
                1
            ],
            uv: [
                0,
                0
            ],
            uv2: [
                0,
                0
            ]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e));
    }
    copy(e) {
        return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Vi(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.glslVersion = this.glslVersion, t.uniforms = {};
        for(let i in this.uniforms){
            let o = this.uniforms[i].value;
            o && o.isTexture ? t.uniforms[i] = {
                type: "t",
                value: o.toJSON(e).uuid
            } : o && o.isColor ? t.uniforms[i] = {
                type: "c",
                value: o.getHex()
            } : o && o.isVector2 ? t.uniforms[i] = {
                type: "v2",
                value: o.toArray()
            } : o && o.isVector3 ? t.uniforms[i] = {
                type: "v3",
                value: o.toArray()
            } : o && o.isVector4 ? t.uniforms[i] = {
                type: "v4",
                value: o.toArray()
            } : o && o.isMatrix3 ? t.uniforms[i] = {
                type: "m3",
                value: o.toArray()
            } : o && o.isMatrix4 ? t.uniforms[i] = {
                type: "m4",
                value: o.toArray()
            } : t.uniforms[i] = {
                value: o
            };
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
        let n = {};
        for(let i1 in this.extensions)this.extensions[i1] === !0 && (n[i1] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n), t;
    }
};
Kt.prototype.isShaderMaterial = !0;
var ki = class extends Ie {
    constructor(){
        super(), this.type = "Camera", this.matrixWorldInverse = new de, this.projectionMatrix = new de, this.projectionMatrixInverse = new de;
    }
    copy(e, t) {
        return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        let t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize();
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
        return new this.constructor().copy(this);
    }
};
ki.prototype.isCamera = !0;
var dt = class extends ki {
    constructor(e = 50, t = 1, n = .1, i = 2e3){
        super(), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e, t) {
        return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
    }
    setFocalLength(e) {
        let t = .5 * this.getFilmHeight() / e;
        this.fov = Os * 2 * Math.atan(t), this.updateProjectionMatrix();
    }
    getFocalLength() {
        let e = Math.tan(ei * .5 * this.fov);
        return .5 * this.getFilmHeight() / e;
    }
    getEffectiveFOV() {
        return Os * 2 * Math.atan(Math.tan(ei * .5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e, t, n, i, s, o) {
        this.aspect = e / t, this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        let e = this.near, t = e * Math.tan(ei * .5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -.5 * i, o = this.view;
        if (this.view !== null && this.view.enabled) {
            let l = o.fullWidth, c = o.fullHeight;
            s += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
        }
        let a = this.filmOffset;
        a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
    }
};
dt.prototype.isPerspectiveCamera = !0;
var vi = 90, Mi = 1, Ws = class extends Ie {
    constructor(e, t, n){
        if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
            console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            return;
        }
        this.renderTarget = n;
        let i = new dt(vi, Mi, e, t);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new w(1, 0, 0)), this.add(i);
        let s = new dt(vi, Mi, e, t);
        s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new w(-1, 0, 0)), this.add(s);
        let o = new dt(vi, Mi, e, t);
        o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new w(0, 1, 0)), this.add(o);
        let a = new dt(vi, Mi, e, t);
        a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new w(0, -1, 0)), this.add(a);
        let l = new dt(vi, Mi, e, t);
        l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new w(0, 0, 1)), this.add(l);
        let c = new dt(vi, Mi, e, t);
        c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new w(0, 0, -1)), this.add(c);
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        let n = this.renderTarget, [i, s, o, a, l, c] = this.children, u = e.xr.enabled, h = e.getRenderTarget();
        e.xr.enabled = !1;
        let d = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(h), e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
    }
}, ti = class extends at {
    constructor(e, t, n, i, s, o, a, l, c, u){
        e = e !== void 0 ? e : [], t = t !== void 0 ? t : fs, super(e, t, n, i, s, o, a, l, c, u), this.flipY = !1;
    }
    get images() {
        return this.image;
    }
    set images(e) {
        this.image = e;
    }
};
ti.prototype.isCubeTexture = !0;
var qs = class extends At {
    constructor(e, t, n){
        Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), super(e, e, t), t = t || {}, this.texture = new ti(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : nt;
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type, this.texture.format = wt, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
        let n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }, i = new gn(5, 5, 5), s = new Kt({
            name: "CubemapFromEquirect",
            uniforms: Vi(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: lt,
            blending: Rn
        });
        s.uniforms.tEquirect.value = t;
        let o = new ot(i, s), a = t.minFilter;
        return t.minFilter === ms && (t.minFilter = nt), new Ws(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
    }
    clear(e, t, n, i) {
        let s = e.getRenderTarget();
        for(let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(t, n, i);
        e.setRenderTarget(s);
    }
};
qs.prototype.isWebGLCubeRenderTarget = !0;
var Sa = new w, ff = new w, pf = new ht, Vt = class {
    constructor(e = new w(1, 0, 0), t = 0){
        this.normal = e, this.constant = t;
    }
    set(e, t) {
        return this.normal.copy(e), this.constant = t, this;
    }
    setComponents(e, t, n, i) {
        return this.normal.set(e, t, n), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
    }
    setFromCoplanarPoints(e, t, n) {
        let i = Sa.subVectors(n, t).cross(ff.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e), this;
    }
    copy(e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this;
    }
    normalize() {
        let e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this;
    }
    negate() {
        return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant;
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius;
    }
    projectPoint(e, t) {
        return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
    }
    intersectLine(e, t) {
        let n = e.delta(Sa), i = this.normal.dot(n);
        if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        let s = -(e.start.dot(this.normal) + this.constant) / i;
        return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
    }
    intersectsLine(e) {
        let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0;
    }
    intersectsBox(e) {
        return e.intersectsPlane(this);
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this);
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(e, t) {
        let n = t || pf.getNormalMatrix(e), i = this.coplanarPoint(Sa).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(s), this;
    }
    translate(e) {
        return this.constant -= e.dot(this.normal), this;
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant;
    }
    clone() {
        return new this.constructor().copy(this);
    }
};
Vt.prototype.isPlane = !0;
var wi = new pn, Fr = new w, Gi = class {
    constructor(e = new Vt, t = new Vt, n = new Vt, i = new Vt, s = new Vt, o = new Vt){
        this.planes = [
            e,
            t,
            n,
            i,
            s,
            o
        ];
    }
    set(e, t, n, i, s, o) {
        let a = this.planes;
        return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
    }
    copy(e) {
        let t = this.planes;
        for(let n = 0; n < 6; n++)t[n].copy(e.planes[n]);
        return this;
    }
    setFromProjectionMatrix(e) {
        let t = this.planes, n = e.elements, i = n[0], s = n[1], o = n[2], a = n[3], l = n[4], c = n[5], u = n[6], h = n[7], d = n[8], f = n[9], m = n[10], x = n[11], _ = n[12], g = n[13], p = n[14], M = n[15];
        return t[0].setComponents(a - i, h - l, x - d, M - _).normalize(), t[1].setComponents(a + i, h + l, x + d, M + _).normalize(), t[2].setComponents(a + s, h + c, x + f, M + g).normalize(), t[3].setComponents(a - s, h - c, x - f, M - g).normalize(), t[4].setComponents(a - o, h - u, x - m, M - p).normalize(), t[5].setComponents(a + o, h + u, x + m, M + p).normalize(), this;
    }
    intersectsObject(e) {
        let t = e.geometry;
        return t.boundingSphere === null && t.computeBoundingSphere(), wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(wi);
    }
    intersectsSprite(e) {
        return wi.center.set(0, 0, 0), wi.radius = .7071067811865476, wi.applyMatrix4(e.matrixWorld), this.intersectsSphere(wi);
    }
    intersectsSphere(e) {
        let t = this.planes, n = e.center, i = -e.radius;
        for(let s = 0; s < 6; s++)if (t[s].distanceToPoint(n) < i) return !1;
        return !0;
    }
    intersectsBox(e) {
        let t = this.planes;
        for(let n = 0; n < 6; n++){
            let i = t[n];
            if (Fr.x = i.normal.x > 0 ? e.max.x : e.min.x, Fr.y = i.normal.y > 0 ? e.max.y : e.min.y, Fr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Fr) < 0) return !1;
        }
        return !0;
    }
    containsPoint(e) {
        let t = this.planes;
        for(let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1;
        return !0;
    }
    clone() {
        return new this.constructor().copy(this);
    }
};
function _u() {
    let r = null, e = !1, t = null, n = null;
    function i(s, o) {
        t(s, o), n = r.requestAnimationFrame(i);
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
        },
        stop: function() {
            r.cancelAnimationFrame(n), e = !1;
        },
        setAnimationLoop: function(s) {
            t = s;
        },
        setContext: function(s) {
            r = s;
        }
    };
}
function mf(r, e) {
    let t = e.isWebGL2, n = new WeakMap;
    function i(c, u) {
        let h = c.array, d = c.usage, f = r.createBuffer();
        r.bindBuffer(u, f), r.bufferData(u, h, d), c.onUploadCallback();
        let m = 5126;
        return h instanceof Float32Array ? m = 5126 : h instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : h instanceof Uint16Array ? c.isFloat16BufferAttribute ? t ? m = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : m = 5123 : h instanceof Int16Array ? m = 5122 : h instanceof Uint32Array ? m = 5125 : h instanceof Int32Array ? m = 5124 : h instanceof Int8Array ? m = 5120 : (h instanceof Uint8Array || h instanceof Uint8ClampedArray) && (m = 5121), {
            buffer: f,
            type: m,
            bytesPerElement: h.BYTES_PER_ELEMENT,
            version: c.version
        };
    }
    function s(c, u, h) {
        let d = u.array, f = u.updateRange;
        r.bindBuffer(h, c), f.count === -1 ? r.bufferSubData(h, 0, d) : (t ? r.bufferSubData(h, f.offset * d.BYTES_PER_ELEMENT, d, f.offset, f.count) : r.bufferSubData(h, f.offset * d.BYTES_PER_ELEMENT, d.subarray(f.offset, f.offset + f.count)), f.count = -1);
    }
    function o(c) {
        return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
    }
    function a(c) {
        c.isInterleavedBufferAttribute && (c = c.data);
        let u = n.get(c);
        u && (r.deleteBuffer(u.buffer), n.delete(c));
    }
    function l(c, u) {
        if (c.isGLBufferAttribute) {
            let d = n.get(c);
            (!d || d.version < c.version) && n.set(c, {
                buffer: c.buffer,
                type: c.type,
                bytesPerElement: c.elementSize,
                version: c.version
            });
            return;
        }
        c.isInterleavedBufferAttribute && (c = c.data);
        let h = n.get(c);
        h === void 0 ? n.set(c, i(c, u)) : h.version < c.version && (s(h.buffer, c, u), h.version = c.version);
    }
    return {
        get: o,
        remove: a,
        update: l
    };
}
var ni = class extends ve {
    constructor(e = 1, t = 1, n = 1, i = 1){
        super(), this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        };
        let s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, d = t / l, f = [], m = [], x = [], _ = [];
        for(let g = 0; g < u; g++){
            let p = g * d - o;
            for(let M = 0; M < c; M++){
                let y = M * h - s;
                m.push(y, -p, 0), x.push(0, 0, 1), _.push(M / a), _.push(1 - g / l);
            }
        }
        for(let g1 = 0; g1 < l; g1++)for(let p1 = 0; p1 < a; p1++){
            let M1 = p1 + c * g1, y1 = p1 + c * (g1 + 1), b = p1 + 1 + c * (g1 + 1), T = p1 + 1 + c * g1;
            f.push(M1, y1, T), f.push(y1, b, T);
        }
        this.setIndex(f), this.setAttribute("position", new he(m, 3)), this.setAttribute("normal", new he(x, 3)), this.setAttribute("uv", new he(_, 2));
    }
    static fromJSON(e) {
        return new ni(e.width, e.height, e.widthSegments, e.heightSegments);
    }
}, gf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, xf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yf = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, _f = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Mf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, wf = "vec3 transformed = vec3( position );", bf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Sf = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Ef = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Tf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Af = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Rf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Cf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Lf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Pf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Df = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, If = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Ff = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Nf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Bf = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, zf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Of = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Uf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Hf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Vf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", kf = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Gf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Wf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, qf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Xf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Jf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Yf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Zf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, $f = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, jf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Kf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, Qf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, ep = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, tp = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`, np = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, ip = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, sp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, rp = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, op = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, ap = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, lp = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, cp = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, hp = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, up = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, dp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, fp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, pp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, mp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, gp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, xp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, yp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, _p = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, vp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Mp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, wp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, bp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Sp = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Ep = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Tp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Ap = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Rp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Cp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Pp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Dp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Ip = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Fp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Np = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Bp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, zp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Op = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Up = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Hp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Vp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, kp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Gp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Wp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, qp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, Xp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Jp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Yp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`, Zp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, $p = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, jp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Kp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Qp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, em = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, tm = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`, nm = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, im = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, sm = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, rm = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, om = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, am = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, lm = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, cm = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, hm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, um = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, dm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fm = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, pm = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, mm = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, gm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, xm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, ym = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, _m = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, vm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Mm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, wm = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, bm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Sm = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Em = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Am = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Rm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Cm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`, Lm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Dm = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Im = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, zm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Om = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Um = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Hm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Vm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Fe = {
    alphamap_fragment: gf,
    alphamap_pars_fragment: xf,
    alphatest_fragment: yf,
    alphatest_pars_fragment: _f,
    aomap_fragment: vf,
    aomap_pars_fragment: Mf,
    begin_vertex: wf,
    beginnormal_vertex: bf,
    bsdfs: Sf,
    bumpmap_pars_fragment: Ef,
    clipping_planes_fragment: Tf,
    clipping_planes_pars_fragment: Af,
    clipping_planes_pars_vertex: Rf,
    clipping_planes_vertex: Cf,
    color_fragment: Lf,
    color_pars_fragment: Pf,
    color_pars_vertex: Df,
    color_vertex: If,
    common: Ff,
    cube_uv_reflection_fragment: Nf,
    defaultnormal_vertex: Bf,
    displacementmap_pars_vertex: zf,
    displacementmap_vertex: Of,
    emissivemap_fragment: Uf,
    emissivemap_pars_fragment: Hf,
    encodings_fragment: Vf,
    encodings_pars_fragment: kf,
    envmap_fragment: Gf,
    envmap_common_pars_fragment: Wf,
    envmap_pars_fragment: qf,
    envmap_pars_vertex: Xf,
    envmap_physical_pars_fragment: ip,
    envmap_vertex: Jf,
    fog_vertex: Yf,
    fog_pars_vertex: Zf,
    fog_fragment: $f,
    fog_pars_fragment: jf,
    gradientmap_pars_fragment: Kf,
    lightmap_fragment: Qf,
    lightmap_pars_fragment: ep,
    lights_lambert_vertex: tp,
    lights_pars_begin: np,
    lights_toon_fragment: sp,
    lights_toon_pars_fragment: rp,
    lights_phong_fragment: op,
    lights_phong_pars_fragment: ap,
    lights_physical_fragment: lp,
    lights_physical_pars_fragment: cp,
    lights_fragment_begin: hp,
    lights_fragment_maps: up,
    lights_fragment_end: dp,
    logdepthbuf_fragment: fp,
    logdepthbuf_pars_fragment: pp,
    logdepthbuf_pars_vertex: mp,
    logdepthbuf_vertex: gp,
    map_fragment: xp,
    map_pars_fragment: yp,
    map_particle_fragment: _p,
    map_particle_pars_fragment: vp,
    metalnessmap_fragment: Mp,
    metalnessmap_pars_fragment: wp,
    morphnormal_vertex: bp,
    morphtarget_pars_vertex: Sp,
    morphtarget_vertex: Ep,
    normal_fragment_begin: Tp,
    normal_fragment_maps: Ap,
    normal_pars_fragment: Rp,
    normal_pars_vertex: Cp,
    normal_vertex: Lp,
    normalmap_pars_fragment: Pp,
    clearcoat_normal_fragment_begin: Dp,
    clearcoat_normal_fragment_maps: Ip,
    clearcoat_pars_fragment: Fp,
    output_fragment: Np,
    packing: Bp,
    premultiplied_alpha_fragment: zp,
    project_vertex: Op,
    dithering_fragment: Up,
    dithering_pars_fragment: Hp,
    roughnessmap_fragment: Vp,
    roughnessmap_pars_fragment: kp,
    shadowmap_pars_fragment: Gp,
    shadowmap_pars_vertex: Wp,
    shadowmap_vertex: qp,
    shadowmask_pars_fragment: Xp,
    skinbase_vertex: Jp,
    skinning_pars_vertex: Yp,
    skinning_vertex: Zp,
    skinnormal_vertex: $p,
    specularmap_fragment: jp,
    specularmap_pars_fragment: Kp,
    tonemapping_fragment: Qp,
    tonemapping_pars_fragment: em,
    transmission_fragment: tm,
    transmission_pars_fragment: nm,
    uv_pars_fragment: im,
    uv_pars_vertex: sm,
    uv_vertex: rm,
    uv2_pars_fragment: om,
    uv2_pars_vertex: am,
    uv2_vertex: lm,
    worldpos_vertex: cm,
    background_vert: hm,
    background_frag: um,
    cube_vert: dm,
    cube_frag: fm,
    depth_vert: pm,
    depth_frag: mm,
    distanceRGBA_vert: gm,
    distanceRGBA_frag: xm,
    equirect_vert: ym,
    equirect_frag: _m,
    linedashed_vert: vm,
    linedashed_frag: Mm,
    meshbasic_vert: wm,
    meshbasic_frag: bm,
    meshlambert_vert: Sm,
    meshlambert_frag: Em,
    meshmatcap_vert: Tm,
    meshmatcap_frag: Am,
    meshnormal_vert: Rm,
    meshnormal_frag: Cm,
    meshphong_vert: Lm,
    meshphong_frag: Pm,
    meshphysical_vert: Dm,
    meshphysical_frag: Im,
    meshtoon_vert: Fm,
    meshtoon_frag: Nm,
    points_vert: Bm,
    points_frag: zm,
    shadow_vert: Om,
    shadow_frag: Um,
    sprite_vert: Hm,
    sprite_frag: Vm
}, te = {
    common: {
        diffuse: {
            value: new ne(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        uvTransform: {
            value: new ht
        },
        uv2Transform: {
            value: new ht
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalScale: {
            value: new Z(1, 1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new ne(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotShadowMap: {
            value: []
        },
        spotShadowMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new ne(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new ht
        }
    },
    sprite: {
        diffuse: {
            value: new ne(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Z(.5, .5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new ht
        }
    }
}, $t = {
    basic: {
        uniforms: vt([
            te.common,
            te.specularmap,
            te.envmap,
            te.aomap,
            te.lightmap,
            te.fog
        ]),
        vertexShader: Fe.meshbasic_vert,
        fragmentShader: Fe.meshbasic_frag
    },
    lambert: {
        uniforms: vt([
            te.common,
            te.specularmap,
            te.envmap,
            te.aomap,
            te.lightmap,
            te.emissivemap,
            te.fog,
            te.lights,
            {
                emissive: {
                    value: new ne(0)
                }
            }
        ]),
        vertexShader: Fe.meshlambert_vert,
        fragmentShader: Fe.meshlambert_frag
    },
    phong: {
        uniforms: vt([
            te.common,
            te.specularmap,
            te.envmap,
            te.aomap,
            te.lightmap,
            te.emissivemap,
            te.bumpmap,
            te.normalmap,
            te.displacementmap,
            te.fog,
            te.lights,
            {
                emissive: {
                    value: new ne(0)
                },
                specular: {
                    value: new ne(1118481)
                },
                shininess: {
                    value: 30
                }
            }
        ]),
        vertexShader: Fe.meshphong_vert,
        fragmentShader: Fe.meshphong_frag
    },
    standard: {
        uniforms: vt([
            te.common,
            te.envmap,
            te.aomap,
            te.lightmap,
            te.emissivemap,
            te.bumpmap,
            te.normalmap,
            te.displacementmap,
            te.roughnessmap,
            te.metalnessmap,
            te.fog,
            te.lights,
            {
                emissive: {
                    value: new ne(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Fe.meshphysical_vert,
        fragmentShader: Fe.meshphysical_frag
    },
    toon: {
        uniforms: vt([
            te.common,
            te.aomap,
            te.lightmap,
            te.emissivemap,
            te.bumpmap,
            te.normalmap,
            te.displacementmap,
            te.gradientmap,
            te.fog,
            te.lights,
            {
                emissive: {
                    value: new ne(0)
                }
            }
        ]),
        vertexShader: Fe.meshtoon_vert,
        fragmentShader: Fe.meshtoon_frag
    },
    matcap: {
        uniforms: vt([
            te.common,
            te.bumpmap,
            te.normalmap,
            te.displacementmap,
            te.fog,
            {
                matcap: {
                    value: null
                }
            }
        ]),
        vertexShader: Fe.meshmatcap_vert,
        fragmentShader: Fe.meshmatcap_frag
    },
    points: {
        uniforms: vt([
            te.points,
            te.fog
        ]),
        vertexShader: Fe.points_vert,
        fragmentShader: Fe.points_frag
    },
    dashed: {
        uniforms: vt([
            te.common,
            te.fog,
            {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }
        ]),
        vertexShader: Fe.linedashed_vert,
        fragmentShader: Fe.linedashed_frag
    },
    depth: {
        uniforms: vt([
            te.common,
            te.displacementmap
        ]),
        vertexShader: Fe.depth_vert,
        fragmentShader: Fe.depth_frag
    },
    normal: {
        uniforms: vt([
            te.common,
            te.bumpmap,
            te.normalmap,
            te.displacementmap,
            {
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Fe.meshnormal_vert,
        fragmentShader: Fe.meshnormal_frag
    },
    sprite: {
        uniforms: vt([
            te.sprite,
            te.fog
        ]),
        vertexShader: Fe.sprite_vert,
        fragmentShader: Fe.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new ht
            },
            t2D: {
                value: null
            }
        },
        vertexShader: Fe.background_vert,
        fragmentShader: Fe.background_frag
    },
    cube: {
        uniforms: vt([
            te.envmap,
            {
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Fe.cube_vert,
        fragmentShader: Fe.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Fe.equirect_vert,
        fragmentShader: Fe.equirect_frag
    },
    distanceRGBA: {
        uniforms: vt([
            te.common,
            te.displacementmap,
            {
                referencePosition: {
                    value: new w
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }
        ]),
        vertexShader: Fe.distanceRGBA_vert,
        fragmentShader: Fe.distanceRGBA_frag
    },
    shadow: {
        uniforms: vt([
            te.lights,
            te.fog,
            {
                color: {
                    value: new ne(0)
                },
                opacity: {
                    value: 1
                }
            }
        ]),
        vertexShader: Fe.shadow_vert,
        fragmentShader: Fe.shadow_frag
    }
};
$t.physical = {
    uniforms: vt([
        $t.standard.uniforms,
        {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new Z(1, 1)
            },
            clearcoatNormalMap: {
                value: null
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: new ne(0)
            },
            sheenColorMap: {
                value: null
            },
            sheenRoughness: {
                value: 1
            },
            sheenRoughnessMap: {
                value: null
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionSamplerSize: {
                value: new Z
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: new ne(0)
            },
            specularIntensity: {
                value: 1
            },
            specularIntensityMap: {
                value: null
            },
            specularColor: {
                value: new ne(1, 1, 1)
            },
            specularColorMap: {
                value: null
            }
        }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
};
function km(r, e, t, n, i, s) {
    let o = new ne(0), a = i === !0 ? 0 : 1, l, c, u = null, h = 0, d = null;
    function f(x, _) {
        let g = !1, p = _.isScene === !0 ? _.background : null;
        p && p.isTexture && (p = e.get(p));
        let M = r.xr, y = M.getSession && M.getSession();
        y && y.environmentBlendMode === "additive" && (p = null), p === null ? m(o, a) : p && p.isColor && (m(p, 1), g = !0), (r.autoClear || g) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), p && (p.isCubeTexture || p.mapping === fr) ? (c === void 0 && (c = new ot(new gn(1, 1, 1), new Kt({
            name: "BackgroundCubeMaterial",
            uniforms: Vi($t.cube.uniforms),
            vertexShader: $t.cube.vertexShader,
            fragmentShader: $t.cube.fragmentShader,
            side: lt,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(b, T, R) {
            this.matrixWorld.copyPosition(R.matrixWorld);
        }, Object.defineProperty(c.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value;
            }
        }), n.update(c)), c.material.uniforms.envMap.value = p, c.material.uniforms.flipEnvMap.value = p.isCubeTexture && p.isRenderTargetTexture === !1 ? -1 : 1, (u !== p || h !== p.version || d !== r.toneMapping) && (c.material.needsUpdate = !0, u = p, h = p.version, d = r.toneMapping), x.unshift(c, c.geometry, c.material, 0, 0, null)) : p && p.isTexture && (l === void 0 && (l = new ot(new ni(2, 2), new Kt({
            name: "BackgroundMaterial",
            uniforms: Vi($t.background.uniforms),
            vertexShader: $t.background.vertexShader,
            fragmentShader: $t.background.fragmentShader,
            side: Oi,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
            get: function() {
                return this.uniforms.t2D.value;
            }
        }), n.update(l)), l.material.uniforms.t2D.value = p, p.matrixAutoUpdate === !0 && p.updateMatrix(), l.material.uniforms.uvTransform.value.copy(p.matrix), (u !== p || h !== p.version || d !== r.toneMapping) && (l.material.needsUpdate = !0, u = p, h = p.version, d = r.toneMapping), x.unshift(l, l.geometry, l.material, 0, 0, null));
    }
    function m(x, _) {
        t.buffers.color.setClear(x.r, x.g, x.b, _, s);
    }
    return {
        getClearColor: function() {
            return o;
        },
        setClearColor: function(x, _ = 1) {
            o.set(x), a = _, m(o, a);
        },
        getClearAlpha: function() {
            return a;
        },
        setClearAlpha: function(x) {
            a = x, m(o, a);
        },
        render: f
    };
}
function Gm(r, e, t, n) {
    let i = r.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, l = x(null), c = l;
    function u(D, N, z, F, W) {
        let j = !1;
        if (o) {
            let ue = m(F, z, N);
            c !== ue && (c = ue, d(c.object)), j = _(F, W), j && g(F, W);
        } else {
            let ue1 = N.wireframe === !0;
            (c.geometry !== F.id || c.program !== z.id || c.wireframe !== ue1) && (c.geometry = F.id, c.program = z.id, c.wireframe = ue1, j = !0);
        }
        D.isInstancedMesh === !0 && (j = !0), W !== null && t.update(W, 34963), j && (R(D, N, z, F), W !== null && r.bindBuffer(34963, t.get(W).buffer));
    }
    function h() {
        return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
    }
    function d(D) {
        return n.isWebGL2 ? r.bindVertexArray(D) : s.bindVertexArrayOES(D);
    }
    function f(D) {
        return n.isWebGL2 ? r.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
    }
    function m(D, N, z) {
        let F = z.wireframe === !0, W = a[D.id];
        W === void 0 && (W = {}, a[D.id] = W);
        let j = W[N.id];
        j === void 0 && (j = {}, W[N.id] = j);
        let ue = j[F];
        return ue === void 0 && (ue = x(h()), j[F] = ue), ue;
    }
    function x(D) {
        let N = [], z = [], F = [];
        for(let W = 0; W < i; W++)N[W] = 0, z[W] = 0, F[W] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: N,
            enabledAttributes: z,
            attributeDivisors: F,
            object: D,
            attributes: {},
            index: null
        };
    }
    function _(D, N) {
        let z = c.attributes, F = D.attributes, W = 0;
        for(let j in F){
            let ue = z[j], k = F[j];
            if (ue === void 0 || ue.attribute !== k || ue.data !== k.data) return !0;
            W++;
        }
        return c.attributesNum !== W || c.index !== N;
    }
    function g(D, N) {
        let z = {}, F = D.attributes, W = 0;
        for(let j in F){
            let ue = F[j], k = {};
            k.attribute = ue, ue.data && (k.data = ue.data), z[j] = k, W++;
        }
        c.attributes = z, c.attributesNum = W, c.index = N;
    }
    function p() {
        let D = c.newAttributes;
        for(let N = 0, z = D.length; N < z; N++)D[N] = 0;
    }
    function M(D) {
        y(D, 0);
    }
    function y(D, N) {
        let z = c.newAttributes, F = c.enabledAttributes, W = c.attributeDivisors;
        z[D] = 1, F[D] === 0 && (r.enableVertexAttribArray(D), F[D] = 1), W[D] !== N && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, N), W[D] = N);
    }
    function b() {
        let D = c.newAttributes, N = c.enabledAttributes;
        for(let z = 0, F = N.length; z < F; z++)N[z] !== D[z] && (r.disableVertexAttribArray(z), N[z] = 0);
    }
    function T(D, N, z, F, W, j) {
        n.isWebGL2 === !0 && (z === 5124 || z === 5125) ? r.vertexAttribIPointer(D, N, z, W, j) : r.vertexAttribPointer(D, N, z, F, W, j);
    }
    function R(D, N, z, F) {
        if (n.isWebGL2 === !1 && (D.isInstancedMesh || F.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
        p();
        let W = F.attributes, j = z.getAttributes(), ue = N.defaultAttributeValues;
        for(let k in j){
            let $ = j[k];
            if ($.location >= 0) {
                let se = W[k];
                if (se === void 0 && (k === "instanceMatrix" && D.instanceMatrix && (se = D.instanceMatrix), k === "instanceColor" && D.instanceColor && (se = D.instanceColor)), se !== void 0) {
                    let pe = se.normalized, ye = se.itemSize, V = t.get(se);
                    if (V === void 0) continue;
                    let Ve = V.buffer, ge = V.type, Se = V.bytesPerElement;
                    if (se.isInterleavedBufferAttribute) {
                        let le = se.data, Le = le.stride, Ee = se.offset;
                        if (le && le.isInstancedInterleavedBuffer) {
                            for(let X = 0; X < $.locationSize; X++)y($.location + X, le.meshPerAttribute);
                            D.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = le.meshPerAttribute * le.count);
                        } else for(let X1 = 0; X1 < $.locationSize; X1++)M($.location + X1);
                        r.bindBuffer(34962, Ve);
                        for(let X2 = 0; X2 < $.locationSize; X2++)T($.location + X2, ye / $.locationSize, ge, pe, Le * Se, (Ee + ye / $.locationSize * X2) * Se);
                    } else {
                        if (se.isInstancedBufferAttribute) {
                            for(let le1 = 0; le1 < $.locationSize; le1++)y($.location + le1, se.meshPerAttribute);
                            D.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = se.meshPerAttribute * se.count);
                        } else for(let le2 = 0; le2 < $.locationSize; le2++)M($.location + le2);
                        r.bindBuffer(34962, Ve);
                        for(let le3 = 0; le3 < $.locationSize; le3++)T($.location + le3, ye / $.locationSize, ge, pe, ye * Se, ye / $.locationSize * le3 * Se);
                    }
                } else if (ue !== void 0) {
                    let pe1 = ue[k];
                    if (pe1 !== void 0) switch(pe1.length){
                        case 2:
                            r.vertexAttrib2fv($.location, pe1);
                            break;
                        case 3:
                            r.vertexAttrib3fv($.location, pe1);
                            break;
                        case 4:
                            r.vertexAttrib4fv($.location, pe1);
                            break;
                        default:
                            r.vertexAttrib1fv($.location, pe1);
                    }
                }
            }
        }
        b();
    }
    function P() {
        v();
        for(let D in a){
            let N = a[D];
            for(let z in N){
                let F = N[z];
                for(let W in F)f(F[W].object), delete F[W];
                delete N[z];
            }
            delete a[D];
        }
    }
    function H(D) {
        if (a[D.id] === void 0) return;
        let N = a[D.id];
        for(let z in N){
            let F = N[z];
            for(let W in F)f(F[W].object), delete F[W];
            delete N[z];
        }
        delete a[D.id];
    }
    function B(D) {
        for(let N in a){
            let z = a[N];
            if (z[D.id] === void 0) continue;
            let F = z[D.id];
            for(let W in F)f(F[W].object), delete F[W];
            delete z[D.id];
        }
    }
    function v() {
        C(), c !== l && (c = l, d(c.object));
    }
    function C() {
        l.geometry = null, l.program = null, l.wireframe = !1;
    }
    return {
        setup: u,
        reset: v,
        resetDefaultState: C,
        dispose: P,
        releaseStatesOfGeometry: H,
        releaseStatesOfProgram: B,
        initAttributes: p,
        enableAttribute: M,
        disableUnusedAttributes: b
    };
}
function Wm(r, e, t, n) {
    let i = n.isWebGL2, s;
    function o(c) {
        s = c;
    }
    function a(c, u) {
        r.drawArrays(s, c, u), t.update(u, s, 1);
    }
    function l(c, u, h) {
        if (h === 0) return;
        let d, f;
        if (i) d = r, f = "drawArraysInstanced";
        else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) {
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return;
        }
        d[f](s, c, u, h), t.update(u, s, h);
    }
    this.setMode = o, this.render = a, this.renderInstances = l;
}
function qm(r, e, t) {
    let n;
    function i() {
        if (n !== void 0) return n;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            let R = e.get("EXT_texture_filter_anisotropic");
            n = r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else n = 0;
        return n;
    }
    function s(R) {
        if (R === "highp") {
            if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            R = "mediump";
        }
        return R === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }
    let o = typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && r instanceof WebGL2ComputeRenderingContext, a = t.precision !== void 0 ? t.precision : "highp", l = s(a);
    l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
    let c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = r.getParameter(34930), d = r.getParameter(35660), f = r.getParameter(3379), m = r.getParameter(34076), x = r.getParameter(34921), _ = r.getParameter(36347), g = r.getParameter(36348), p = r.getParameter(36349), M = d > 0, y = o || e.has("OES_texture_float"), b = M && y, T = o ? r.getParameter(36183) : 0;
    return {
        isWebGL2: o,
        drawBuffers: c,
        getMaxAnisotropy: i,
        getMaxPrecision: s,
        precision: a,
        logarithmicDepthBuffer: u,
        maxTextures: h,
        maxVertexTextures: d,
        maxTextureSize: f,
        maxCubemapSize: m,
        maxAttributes: x,
        maxVertexUniforms: _,
        maxVaryings: g,
        maxFragmentUniforms: p,
        vertexTextures: M,
        floatFragmentTextures: y,
        floatVertexTextures: b,
        maxSamples: T
    };
}
function Xm(r) {
    let e = this, t = null, n = 0, i = !1, s = !1, o = new Vt, a = new ht, l = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d, f) {
        let m = h.length !== 0 || d || n !== 0 || i;
        return i = d, t = u(h, f, 0), n = h.length, m;
    }, this.beginShadows = function() {
        s = !0, u(null);
    }, this.endShadows = function() {
        s = !1, c();
    }, this.setState = function(h, d, f) {
        let m = h.clippingPlanes, x = h.clipIntersection, _ = h.clipShadows, g = r.get(h);
        if (!i || m === null || m.length === 0 || s && !_) s ? u(null) : c();
        else {
            let p = s ? 0 : n, M = p * 4, y = g.clippingState || null;
            l.value = y, y = u(m, d, M, f);
            for(let b = 0; b !== M; ++b)y[b] = t[b];
            g.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += p;
        }
    };
    function c() {
        l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
    }
    function u(h, d, f, m) {
        let x = h !== null ? h.length : 0, _ = null;
        if (x !== 0) {
            if (_ = l.value, m !== !0 || _ === null) {
                let g = f + x * 4, p = d.matrixWorldInverse;
                a.getNormalMatrix(p), (_ === null || _.length < g) && (_ = new Float32Array(g));
                for(let M = 0, y = f; M !== x; ++M, y += 4)o.copy(h[M]).applyMatrix4(p, a), o.normal.toArray(_, y), _[y + 3] = o.constant;
            }
            l.value = _, l.needsUpdate = !0;
        }
        return e.numPlanes = x, e.numIntersection = 0, _;
    }
}
function Jm(r) {
    let e = new WeakMap;
    function t(o, a) {
        return a === ro ? o.mapping = fs : a === oo && (o.mapping = ps), o;
    }
    function n(o) {
        if (o && o.isTexture && o.isRenderTargetTexture === !1) {
            let a = o.mapping;
            if (a === ro || a === oo) if (e.has(o)) {
                let l = e.get(o).texture;
                return t(l, o.mapping);
            } else {
                let l1 = o.image;
                if (l1 && l1.height > 0) {
                    let c = new qs(l1.height / 2);
                    return c.fromEquirectangularTexture(r, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
                } else return null;
            }
        }
        return o;
    }
    function i(o) {
        let a = o.target;
        a.removeEventListener("dispose", i);
        let l = e.get(a);
        l !== void 0 && (e.delete(a), l.dispose());
    }
    function s() {
        e = new WeakMap;
    }
    return {
        get: n,
        dispose: s
    };
}
var Wi = class extends ki {
    constructor(e = -1, t = 1, n = 1, i = -1, s = .1, o = 2e3){
        super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
    }
    copy(e, t) {
        return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
    }
    setViewOffset(e, t, n, i, s, o) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2, s = n - e, o = n + e, a = i + t, l = i - t;
        if (this.view !== null && this.view.enabled) {
            let c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += c * this.view.offsetX, o = s + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
        }
        this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
    }
};
Wi.prototype.isOrthographicCamera = !0;
var ii = class extends Kt {
    constructor(e){
        super(e), this.type = "RawShaderMaterial";
    }
};
ii.prototype.isRawShaderMaterial = !0;
var zi = 4, Pn = 8, Zt = Math.pow(2, Pn), vu = [
    .125,
    .215,
    .35,
    .446,
    .526,
    .582
], Mu = Pn - zi + 1 + vu.length, bi = 20, Ea = new Wi, { _lodPlanes: ws , _sizeLods: Dc , _sigmas: Nr  } = Ym(), Ic = new ne, Ta = null, Kn = (1 + Math.sqrt(5)) / 2, Si = 1 / Kn, Fc = [
    new w(1, 1, 1),
    new w(-1, 1, 1),
    new w(1, 1, -1),
    new w(-1, 1, -1),
    new w(0, Kn, Si),
    new w(0, Kn, -Si),
    new w(Si, 0, Kn),
    new w(-Si, 0, Kn),
    new w(Kn, Si, 0),
    new w(-Kn, Si, 0)
], fo = class {
    constructor(e){
        this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = Zm(bi), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = .1, i = 100) {
        Ta = this._renderer.getRenderTarget();
        let s = this._allocateTargets();
        return this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
    }
    fromEquirectangular(e, t = null) {
        return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
        return this._fromTexture(e, t);
    }
    compileCubemapShader() {
        this._cubemapShader === null && (this._cubemapShader = zc(), this._compileMaterial(this._cubemapShader));
    }
    compileEquirectangularShader() {
        this._equirectShader === null && (this._equirectShader = Bc(), this._compileMaterial(this._equirectShader));
    }
    dispose() {
        this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
        for(let e = 0; e < ws.length; e++)ws[e].dispose();
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Ta), e.scissorTest = !1, Br(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
        Ta = this._renderer.getRenderTarget();
        let n = t || this._allocateTargets(e);
        return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets(e) {
        let t = {
            magFilter: nt,
            minFilter: nt,
            generateMipmaps: !1,
            type: Fi,
            format: wt,
            encoding: Fn,
            depthBuffer: !1
        }, n = Nc(t);
        return n.depthBuffer = !e, this._pingPongRenderTarget === null && (this._pingPongRenderTarget = Nc(t)), n;
    }
    _compileMaterial(e) {
        let t = new ot(ws[0], e);
        this._renderer.compile(t, Ea);
    }
    _sceneToCubeUV(e, t, n, i) {
        let a = new dt(90, 1, t, n), l = [
            1,
            -1,
            1,
            1,
            1,
            1
        ], c = [
            1,
            1,
            1,
            -1,
            -1,
            -1
        ], u = this._renderer, h = u.autoClear, d = u.toneMapping;
        u.getClearColor(Ic), u.toneMapping = Cn, u.autoClear = !1;
        let f = new jt({
            name: "PMREM.Background",
            side: lt,
            depthWrite: !1,
            depthTest: !1
        }), m = new ot(new gn, f), x = !1, _ = e.background;
        _ ? _.isColor && (f.color.copy(_), e.background = null, x = !0) : (f.color.copy(Ic), x = !0);
        for(let g = 0; g < 6; g++){
            let p = g % 3;
            p === 0 ? (a.up.set(0, l[g], 0), a.lookAt(c[g], 0, 0)) : p === 1 ? (a.up.set(0, 0, l[g]), a.lookAt(0, c[g], 0)) : (a.up.set(0, l[g], 0), a.lookAt(0, 0, c[g])), Br(i, p * Zt, g > 2 ? Zt : 0, Zt, Zt), u.setRenderTarget(i), x && u.render(m, a), u.render(e, a);
        }
        m.geometry.dispose(), m.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = _;
    }
    _textureToCubeUV(e, t) {
        let n = this._renderer, i = e.mapping === fs || e.mapping === ps;
        i ? (this._cubemapShader === null && (this._cubemapShader = zc()), this._cubemapShader.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectShader === null && (this._equirectShader = Bc());
        let s = i ? this._cubemapShader : this._equirectShader, o = new ot(ws[0], s), a = s.uniforms;
        a.envMap.value = e, i || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), Br(t, 0, 0, 3 * Zt, 2 * Zt), n.setRenderTarget(t), n.render(o, Ea);
    }
    _applyPMREM(e) {
        let t = this._renderer, n = t.autoClear;
        t.autoClear = !1;
        for(let i = 1; i < Mu; i++){
            let s = Math.sqrt(Nr[i] * Nr[i] - Nr[i - 1] * Nr[i - 1]), o = Fc[(i - 1) % Fc.length];
            this._blur(e, i - 1, i, s, o);
        }
        t.autoClear = n;
    }
    _blur(e, t, n, i, s) {
        let o = this._pingPongRenderTarget;
        this._halfBlur(e, o, t, n, i, "latitudinal", s), this._halfBlur(o, e, n, n, i, "longitudinal", s);
    }
    _halfBlur(e, t, n, i, s, o, a) {
        let l = this._renderer, c = this._blurMaterial;
        o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        let u = 3, h = new ot(ws[i], c), d = c.uniforms, f = Dc[n] - 1, m = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * bi - 1), x = s / m, _ = isFinite(s) ? 1 + Math.floor(u * x) : bi;
        _ > bi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${bi}`);
        let g = [], p = 0;
        for(let T = 0; T < bi; ++T){
            let R = T / x, P = Math.exp(-R * R / 2);
            g.push(P), T === 0 ? p += P : T < _ && (p += 2 * P);
        }
        for(let T1 = 0; T1 < g.length; T1++)g[T1] = g[T1] / p;
        d.envMap.value = e.texture, d.samples.value = _, d.weights.value = g, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a), d.dTheta.value = m, d.mipInt.value = Pn - n;
        let M = Dc[i], y = 3 * Math.max(0, Zt - 2 * M), b = (i === 0 ? 0 : 2 * Zt) + 2 * M * (i > Pn - zi ? i - Pn + zi : 0);
        Br(t, y, b, 3 * M, 2 * M), l.setRenderTarget(t), l.render(h, Ea);
    }
};
function Ym() {
    let r = [], e = [], t = [], n = Pn;
    for(let i = 0; i < Mu; i++){
        let s = Math.pow(2, n);
        e.push(s);
        let o = 1 / s;
        i > Pn - zi ? o = vu[i - Pn + zi - 1] : i === 0 && (o = 0), t.push(o);
        let a = 1 / (s - 1), l = -a / 2, c = 1 + a / 2, u = [
            l,
            l,
            c,
            l,
            c,
            c,
            l,
            l,
            c,
            c,
            l,
            c
        ], h = 6, d = 6, f = 3, m = 2, x = 1, _ = new Float32Array(f * d * h), g = new Float32Array(m * d * h), p = new Float32Array(x * d * h);
        for(let y = 0; y < h; y++){
            let b = y % 3 * 2 / 3 - 1, T = y > 2 ? 0 : -1, R = [
                b,
                T,
                0,
                b + 2 / 3,
                T,
                0,
                b + 2 / 3,
                T + 1,
                0,
                b,
                T,
                0,
                b + 2 / 3,
                T + 1,
                0,
                b,
                T + 1,
                0
            ];
            _.set(R, f * d * y), g.set(u, m * d * y);
            let P = [
                y,
                y,
                y,
                y,
                y,
                y
            ];
            p.set(P, x * d * y);
        }
        let M = new ve;
        M.setAttribute("position", new Be(_, f)), M.setAttribute("uv", new Be(g, m)), M.setAttribute("faceIndex", new Be(p, x)), r.push(M), n > zi && n--;
    }
    return {
        _lodPlanes: r,
        _sizeLods: e,
        _sigmas: t
    };
}
function Nc(r) {
    let e = new At(3 * Zt, 3 * Zt, r);
    return e.texture.mapping = fr, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e;
}
function Br(r, e, t, n, i) {
    r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Zm(r) {
    let e = new Float32Array(r), t = new w(0, 1, 0);
    return new ii({
        name: "SphericalGaussianBlur",
        defines: {
            n: r
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: e
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: t
            }
        },
        vertexShader: Vl(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: Rn,
        depthTest: !1,
        depthWrite: !1
    });
}
function Bc() {
    let r = new Z(1, 1);
    return new ii({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            texelSize: {
                value: r
            }
        },
        vertexShader: Vl(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,
        blending: Rn,
        depthTest: !1,
        depthWrite: !1
    });
}
function zc() {
    return new ii({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Vl(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: Rn,
        depthTest: !1,
        depthWrite: !1
    });
}
function Vl() {
    return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function $m(r) {
    let e = new WeakMap, t = null;
    function n(a) {
        if (a && a.isTexture) {
            let l = a.mapping, c = l === ro || l === oo, u = l === fs || l === ps;
            if (c || u) if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
                a.needsPMREMUpdate = !1;
                let h = e.get(a);
                return t === null && (t = new fo(r)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), e.set(a, h), h.texture;
            } else {
                if (e.has(a)) return e.get(a).texture;
                {
                    let h1 = a.image;
                    if (c && h1 && h1.height > 0 || u && h1 && i(h1)) {
                        t === null && (t = new fo(r));
                        let d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
                        return e.set(a, d), a.addEventListener("dispose", s), d.texture;
                    } else return null;
                }
            }
        }
        return a;
    }
    function i(a) {
        let l = 0, c = 6;
        for(let u = 0; u < c; u++)a[u] !== void 0 && l++;
        return l === c;
    }
    function s(a) {
        let l = a.target;
        l.removeEventListener("dispose", s);
        let c = e.get(l);
        c !== void 0 && (e.delete(l), c.dispose());
    }
    function o() {
        e = new WeakMap, t !== null && (t.dispose(), t = null);
    }
    return {
        get: n,
        dispose: o
    };
}
function jm(r) {
    let e = {};
    function t(n) {
        if (e[n] !== void 0) return e[n];
        let i;
        switch(n){
            case "WEBGL_depth_texture":
                i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = r.getExtension(n);
        }
        return e[n] = i, i;
    }
    return {
        has: function(n) {
            return t(n) !== null;
        },
        init: function(n) {
            n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
        },
        get: function(n) {
            let i = t(n);
            return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
        }
    };
}
function Km(r, e, t, n) {
    let i = {}, s = new WeakMap;
    function o(h) {
        let d = h.target;
        d.index !== null && e.remove(d.index);
        for(let m in d.attributes)e.remove(d.attributes[m]);
        d.removeEventListener("dispose", o), delete i[d.id];
        let f = s.get(d);
        f && (e.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
    }
    function a(h, d) {
        return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d;
    }
    function l(h) {
        let d = h.attributes;
        for(let m in d)e.update(d[m], 34962);
        let f = h.morphAttributes;
        for(let m1 in f){
            let x = f[m1];
            for(let _ = 0, g = x.length; _ < g; _++)e.update(x[_], 34962);
        }
    }
    function c(h) {
        let d = [], f = h.index, m = h.attributes.position, x = 0;
        if (f !== null) {
            let p = f.array;
            x = f.version;
            for(let M = 0, y = p.length; M < y; M += 3){
                let b = p[M + 0], T = p[M + 1], R = p[M + 2];
                d.push(b, T, T, R, R, b);
            }
        } else {
            let p1 = m.array;
            x = m.version;
            for(let M1 = 0, y1 = p1.length / 3 - 1; M1 < y1; M1 += 3){
                let b1 = M1 + 0, T1 = M1 + 1, R1 = M1 + 2;
                d.push(b1, T1, T1, R1, R1, b1);
            }
        }
        let _ = new (xu(d) ? Gs : ks)(d, 1);
        _.version = x;
        let g = s.get(h);
        g && e.remove(g), s.set(h, _);
    }
    function u(h) {
        let d = s.get(h);
        if (d) {
            let f = h.index;
            f !== null && d.version < f.version && c(h);
        } else c(h);
        return s.get(h);
    }
    return {
        get: a,
        update: l,
        getWireframeAttribute: u
    };
}
function Qm(r, e, t, n) {
    let i = n.isWebGL2, s;
    function o(d) {
        s = d;
    }
    let a, l;
    function c(d) {
        a = d.type, l = d.bytesPerElement;
    }
    function u(d, f) {
        r.drawElements(s, f, a, d * l), t.update(f, s, 1);
    }
    function h(d, f, m) {
        if (m === 0) return;
        let x, _;
        if (i) x = r, _ = "drawElementsInstanced";
        else if (x = e.get("ANGLE_instanced_arrays"), _ = "drawElementsInstancedANGLE", x === null) {
            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return;
        }
        x[_](s, f, a, d * l, m), t.update(f, s, m);
    }
    this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function eg(r) {
    let e = {
        geometries: 0,
        textures: 0
    }, t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(s, o, a) {
        switch(t.calls++, o){
            case 4:
                t.triangles += a * (s / 3);
                break;
            case 1:
                t.lines += a * (s / 2);
                break;
            case 3:
                t.lines += a * (s - 1);
                break;
            case 2:
                t.lines += a * s;
                break;
            case 0:
                t.points += a * s;
                break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", o);
                break;
        }
    }
    function i() {
        t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: i,
        update: n
    };
}
var Xs = class extends at {
    constructor(e = null, t = 1, n = 1, i = 1){
        super(null), this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = ct, this.minFilter = ct, this.wrapR = Mt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
    }
};
Xs.prototype.isDataTexture2DArray = !0;
function tg(r, e) {
    return r[0] - e[0];
}
function ng(r, e) {
    return Math.abs(e[1]) - Math.abs(r[1]);
}
function Oc(r, e) {
    let t = 1, n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
    n instanceof Int8Array ? t = 127 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), r.divideScalar(t);
}
function ig(r, e, t) {
    let n = {}, i = new Float32Array(8), s = new WeakMap, o = new w, a = [];
    for(let c = 0; c < 8; c++)a[c] = [
        c,
        0
    ];
    function l(c, u, h, d) {
        let f = c.morphTargetInfluences;
        if (e.isWebGL2 === !0) {
            let m = u.morphAttributes.position.length, x = s.get(u);
            if (x === void 0 || x.count !== m) {
                let C = function() {
                    B.dispose(), s.delete(u), u.removeEventListener("dispose", C);
                };
                x !== void 0 && x.texture.dispose();
                let p = u.morphAttributes.normal !== void 0, M = u.morphAttributes.position, y = u.morphAttributes.normal || [], b = u.attributes.position.count, T = p === !0 ? 2 : 1, R = b * T, P = 1;
                R > e.maxTextureSize && (P = Math.ceil(R / e.maxTextureSize), R = e.maxTextureSize);
                let H = new Float32Array(R * P * 4 * m), B = new Xs(H, R, P, m);
                B.format = wt, B.type = Tn, B.needsUpdate = !0;
                let v = T * 4;
                for(let D = 0; D < m; D++){
                    let N = M[D], z = y[D], F = R * P * 4 * D;
                    for(let W = 0; W < N.count; W++){
                        o.fromBufferAttribute(N, W), N.normalized === !0 && Oc(o, N);
                        let j = W * v;
                        H[F + j + 0] = o.x, H[F + j + 1] = o.y, H[F + j + 2] = o.z, H[F + j + 3] = 0, p === !0 && (o.fromBufferAttribute(z, W), z.normalized === !0 && Oc(o, z), H[F + j + 4] = o.x, H[F + j + 5] = o.y, H[F + j + 6] = o.z, H[F + j + 7] = 0);
                    }
                }
                x = {
                    count: m,
                    texture: B,
                    size: new Z(R, P)
                }, s.set(u, x), u.addEventListener("dispose", C);
            }
            let _ = 0;
            for(let p1 = 0; p1 < f.length; p1++)_ += f[p1];
            let g = u.morphTargetsRelative ? 1 : 1 - _;
            d.getUniforms().setValue(r, "morphTargetBaseInfluence", g), d.getUniforms().setValue(r, "morphTargetInfluences", f), d.getUniforms().setValue(r, "morphTargetsTexture", x.texture, t), d.getUniforms().setValue(r, "morphTargetsTextureSize", x.size);
        } else {
            let m1 = f === void 0 ? 0 : f.length, x1 = n[u.id];
            if (x1 === void 0 || x1.length !== m1) {
                x1 = [];
                for(let y1 = 0; y1 < m1; y1++)x1[y1] = [
                    y1,
                    0
                ];
                n[u.id] = x1;
            }
            for(let y2 = 0; y2 < m1; y2++){
                let b1 = x1[y2];
                b1[0] = y2, b1[1] = f[y2];
            }
            x1.sort(ng);
            for(let y3 = 0; y3 < 8; y3++)y3 < m1 && x1[y3][1] ? (a[y3][0] = x1[y3][0], a[y3][1] = x1[y3][1]) : (a[y3][0] = Number.MAX_SAFE_INTEGER, a[y3][1] = 0);
            a.sort(tg);
            let _1 = u.morphAttributes.position, g1 = u.morphAttributes.normal, p2 = 0;
            for(let y4 = 0; y4 < 8; y4++){
                let b2 = a[y4], T1 = b2[0], R1 = b2[1];
                T1 !== Number.MAX_SAFE_INTEGER && R1 ? (_1 && u.getAttribute("morphTarget" + y4) !== _1[T1] && u.setAttribute("morphTarget" + y4, _1[T1]), g1 && u.getAttribute("morphNormal" + y4) !== g1[T1] && u.setAttribute("morphNormal" + y4, g1[T1]), i[y4] = R1, p2 += R1) : (_1 && u.hasAttribute("morphTarget" + y4) === !0 && u.deleteAttribute("morphTarget" + y4), g1 && u.hasAttribute("morphNormal" + y4) === !0 && u.deleteAttribute("morphNormal" + y4), i[y4] = 0);
            }
            let M1 = u.morphTargetsRelative ? 1 : 1 - p2;
            d.getUniforms().setValue(r, "morphTargetBaseInfluence", M1), d.getUniforms().setValue(r, "morphTargetInfluences", i);
        }
    }
    return {
        update: l
    };
}
function sg(r, e, t, n) {
    let i = new WeakMap;
    function s(l) {
        let c = n.render.frame, u = l.geometry, h = e.get(l, u);
        return i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), h;
    }
    function o() {
        i = new WeakMap;
    }
    function a(l) {
        let c = l.target;
        c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
    }
    return {
        update: s,
        dispose: o
    };
}
var po = class extends at {
    constructor(e = null, t = 1, n = 1, i = 1){
        super(null), this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = ct, this.minFilter = ct, this.wrapR = Mt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
    }
};
po.prototype.isDataTexture3D = !0;
var wu = new at, bu = new Xs, Su = new po, Eu = new ti, Uc = [], Hc = [], Vc = new Float32Array(16), kc = new Float32Array(9), Gc = new Float32Array(4);
function xs(r, e, t) {
    let n = r[0];
    if (n <= 0 || n > 0) return r;
    let i = e * t, s = Uc[i];
    if (s === void 0 && (s = new Float32Array(i), Uc[i] = s), e !== 0) {
        n.toArray(s, 0);
        for(let o = 1, a = 0; o !== e; ++o)a += t, r[o].toArray(s, a);
    }
    return s;
}
function Et(r, e) {
    if (r.length !== e.length) return !1;
    for(let t = 0, n = r.length; t < n; t++)if (r[t] !== e[t]) return !1;
    return !0;
}
function bt(r, e) {
    for(let t = 0, n = e.length; t < n; t++)r[t] = e[t];
}
function Zo(r, e) {
    let t = Hc[e];
    t === void 0 && (t = new Int32Array(e), Hc[e] = t);
    for(let n = 0; n !== e; ++n)t[n] = r.allocateTextureUnit();
    return t;
}
function rg(r, e) {
    let t = this.cache;
    t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function og(r, e) {
    let t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
        if (Et(t, e)) return;
        r.uniform2fv(this.addr, e), bt(t, e);
    }
}
function ag(r, e) {
    let t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
        if (Et(t, e)) return;
        r.uniform3fv(this.addr, e), bt(t, e);
    }
}
function lg(r, e) {
    let t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
        if (Et(t, e)) return;
        r.uniform4fv(this.addr, e), bt(t, e);
    }
}
function cg(r, e) {
    let t = this.cache, n = e.elements;
    if (n === void 0) {
        if (Et(t, e)) return;
        r.uniformMatrix2fv(this.addr, !1, e), bt(t, e);
    } else {
        if (Et(t, n)) return;
        Gc.set(n), r.uniformMatrix2fv(this.addr, !1, Gc), bt(t, n);
    }
}
function hg(r, e) {
    let t = this.cache, n = e.elements;
    if (n === void 0) {
        if (Et(t, e)) return;
        r.uniformMatrix3fv(this.addr, !1, e), bt(t, e);
    } else {
        if (Et(t, n)) return;
        kc.set(n), r.uniformMatrix3fv(this.addr, !1, kc), bt(t, n);
    }
}
function ug(r, e) {
    let t = this.cache, n = e.elements;
    if (n === void 0) {
        if (Et(t, e)) return;
        r.uniformMatrix4fv(this.addr, !1, e), bt(t, e);
    } else {
        if (Et(t, n)) return;
        Vc.set(n), r.uniformMatrix4fv(this.addr, !1, Vc), bt(t, n);
    }
}
function dg(r, e) {
    let t = this.cache;
    t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function fg(r, e) {
    let t = this.cache;
    Et(t, e) || (r.uniform2iv(this.addr, e), bt(t, e));
}
function pg(r, e) {
    let t = this.cache;
    Et(t, e) || (r.uniform3iv(this.addr, e), bt(t, e));
}
function mg(r, e) {
    let t = this.cache;
    Et(t, e) || (r.uniform4iv(this.addr, e), bt(t, e));
}
function gg(r, e) {
    let t = this.cache;
    t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function xg(r, e) {
    let t = this.cache;
    Et(t, e) || (r.uniform2uiv(this.addr, e), bt(t, e));
}
function yg(r, e) {
    let t = this.cache;
    Et(t, e) || (r.uniform3uiv(this.addr, e), bt(t, e));
}
function _g(r, e) {
    let t = this.cache;
    Et(t, e) || (r.uniform4uiv(this.addr, e), bt(t, e));
}
function vg(r, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || wu, i);
}
function Mg(r, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Su, i);
}
function wg(r, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || Eu, i);
}
function bg(r, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || bu, i);
}
function Sg(r) {
    switch(r){
        case 5126:
            return rg;
        case 35664:
            return og;
        case 35665:
            return ag;
        case 35666:
            return lg;
        case 35674:
            return cg;
        case 35675:
            return hg;
        case 35676:
            return ug;
        case 5124:
        case 35670:
            return dg;
        case 35667:
        case 35671:
            return fg;
        case 35668:
        case 35672:
            return pg;
        case 35669:
        case 35673:
            return mg;
        case 5125:
            return gg;
        case 36294:
            return xg;
        case 36295:
            return yg;
        case 36296:
            return _g;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return vg;
        case 35679:
        case 36299:
        case 36307:
            return Mg;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return wg;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return bg;
    }
}
function Eg(r, e) {
    r.uniform1fv(this.addr, e);
}
function Tg(r, e) {
    let t = xs(e, this.size, 2);
    r.uniform2fv(this.addr, t);
}
function Ag(r, e) {
    let t = xs(e, this.size, 3);
    r.uniform3fv(this.addr, t);
}
function Rg(r, e) {
    let t = xs(e, this.size, 4);
    r.uniform4fv(this.addr, t);
}
function Cg(r, e) {
    let t = xs(e, this.size, 4);
    r.uniformMatrix2fv(this.addr, !1, t);
}
function Lg(r, e) {
    let t = xs(e, this.size, 9);
    r.uniformMatrix3fv(this.addr, !1, t);
}
function Pg(r, e) {
    let t = xs(e, this.size, 16);
    r.uniformMatrix4fv(this.addr, !1, t);
}
function Dg(r, e) {
    r.uniform1iv(this.addr, e);
}
function Ig(r, e) {
    r.uniform2iv(this.addr, e);
}
function Fg(r, e) {
    r.uniform3iv(this.addr, e);
}
function Ng(r, e) {
    r.uniform4iv(this.addr, e);
}
function Bg(r, e) {
    r.uniform1uiv(this.addr, e);
}
function zg(r, e) {
    r.uniform2uiv(this.addr, e);
}
function Og(r, e) {
    r.uniform3uiv(this.addr, e);
}
function Ug(r, e) {
    r.uniform4uiv(this.addr, e);
}
function Hg(r, e, t) {
    let n = e.length, i = Zo(t, n);
    r.uniform1iv(this.addr, i);
    for(let s = 0; s !== n; ++s)t.safeSetTexture2D(e[s] || wu, i[s]);
}
function Vg(r, e, t) {
    let n = e.length, i = Zo(t, n);
    r.uniform1iv(this.addr, i);
    for(let s = 0; s !== n; ++s)t.setTexture3D(e[s] || Su, i[s]);
}
function kg(r, e, t) {
    let n = e.length, i = Zo(t, n);
    r.uniform1iv(this.addr, i);
    for(let s = 0; s !== n; ++s)t.safeSetTextureCube(e[s] || Eu, i[s]);
}
function Gg(r, e, t) {
    let n = e.length, i = Zo(t, n);
    r.uniform1iv(this.addr, i);
    for(let s = 0; s !== n; ++s)t.setTexture2DArray(e[s] || bu, i[s]);
}
function Wg(r) {
    switch(r){
        case 5126:
            return Eg;
        case 35664:
            return Tg;
        case 35665:
            return Ag;
        case 35666:
            return Rg;
        case 35674:
            return Cg;
        case 35675:
            return Lg;
        case 35676:
            return Pg;
        case 5124:
        case 35670:
            return Dg;
        case 35667:
        case 35671:
            return Ig;
        case 35668:
        case 35672:
            return Fg;
        case 35669:
        case 35673:
            return Ng;
        case 5125:
            return Bg;
        case 36294:
            return zg;
        case 36295:
            return Og;
        case 36296:
            return Ug;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return Hg;
        case 35679:
        case 36299:
        case 36307:
            return Vg;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return kg;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return Gg;
    }
}
function qg(r, e, t) {
    this.id = r, this.addr = t, this.cache = [], this.setValue = Sg(e.type);
}
function Tu(r, e, t) {
    this.id = r, this.addr = t, this.cache = [], this.size = e.size, this.setValue = Wg(e.type);
}
Tu.prototype.updateCache = function(r) {
    let e = this.cache;
    r instanceof Float32Array && e.length !== r.length && (this.cache = new Float32Array(r.length)), bt(e, r);
};
function Au(r) {
    this.id = r, this.seq = [], this.map = {};
}
Au.prototype.setValue = function(r, e, t) {
    let n = this.seq;
    for(let i = 0, s = n.length; i !== s; ++i){
        let o = n[i];
        o.setValue(r, e[o.id], t);
    }
};
var Aa = /(\w+)(\])?(\[|\.)?/g;
function Wc(r, e) {
    r.seq.push(e), r.map[e.id] = e;
}
function Xg(r, e, t) {
    let n = r.name, i = n.length;
    for(Aa.lastIndex = 0;;){
        let s = Aa.exec(n), o = Aa.lastIndex, a = s[1], l = s[2] === "]", c = s[3];
        if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
            Wc(t, c === void 0 ? new qg(a, r, e) : new Tu(a, r, e));
            break;
        } else {
            let h = t.map[a];
            h === void 0 && (h = new Au(a), Wc(t, h)), t = h;
        }
    }
}
function Dn(r, e) {
    this.seq = [], this.map = {};
    let t = r.getProgramParameter(e, 35718);
    for(let n = 0; n < t; ++n){
        let i = r.getActiveUniform(e, n), s = r.getUniformLocation(e, i.name);
        Xg(i, s, this);
    }
}
Dn.prototype.setValue = function(r, e, t, n) {
    let i = this.map[e];
    i !== void 0 && i.setValue(r, t, n);
};
Dn.prototype.setOptional = function(r, e, t) {
    let n = e[t];
    n !== void 0 && this.setValue(r, t, n);
};
Dn.upload = function(r, e, t, n) {
    for(let i = 0, s = e.length; i !== s; ++i){
        let o = e[i], a = t[o.id];
        a.needsUpdate !== !1 && o.setValue(r, a.value, n);
    }
};
Dn.seqWithValue = function(r, e) {
    let t = [];
    for(let n = 0, i = r.length; n !== i; ++n){
        let s = r[n];
        s.id in e && t.push(s);
    }
    return t;
};
function qc(r, e, t) {
    let n = r.createShader(e);
    return r.shaderSource(n, t), r.compileShader(n), n;
}
var Jg = 0;
function Yg(r) {
    let e = r.split(`
`);
    for(let t = 0; t < e.length; t++)e[t] = t + 1 + ": " + e[t];
    return e.join(`
`);
}
function Zg(r) {
    switch(r){
        case Fn:
            return [
                "Linear",
                "( value )"
            ];
        case Ze:
            return [
                "sRGB",
                "( value )"
            ];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", r), [
                "Linear",
                "( value )"
            ];
    }
}
function Xc(r, e, t) {
    let n = r.getShaderParameter(e, 35713), i = r.getShaderInfoLog(e).trim();
    return n && i === "" ? "" : t.toUpperCase() + `

` + i + `

` + Yg(r.getShaderSource(e));
}
function $g(r, e) {
    let t = Zg(e);
    return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function jg(r, e) {
    let t;
    switch(e){
        case ud:
            t = "Linear";
            break;
        case dd:
            t = "Reinhard";
            break;
        case fd:
            t = "OptimizedCineon";
            break;
        case pd:
            t = "ACESFilmic";
            break;
        case md:
            t = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
    }
    return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Kg(r) {
    return [
        r.extensionDerivatives || r.envMapCubeUV || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
        (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
        r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
        (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
    ].filter(Cs).join(`
`);
}
function Qg(r) {
    let e = [];
    for(let t in r){
        let n = r[t];
        n !== !1 && e.push("#define " + t + " " + n);
    }
    return e.join(`
`);
}
function ex(r, e) {
    let t = {}, n = r.getProgramParameter(e, 35721);
    for(let i = 0; i < n; i++){
        let s = r.getActiveAttrib(e, i), o = s.name, a = 1;
        s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), t[o] = {
            type: s.type,
            location: r.getAttribLocation(e, o),
            locationSize: a
        };
    }
    return t;
}
function Cs(r) {
    return r !== "";
}
function Jc(r, e) {
    return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Yc(r, e) {
    return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
var tx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function $a(r) {
    return r.replace(tx, nx);
}
function nx(r, e) {
    let t = Fe[e];
    if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
    return $a(t);
}
var ix = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, sx = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Zc(r) {
    return r.replace(sx, Ru).replace(ix, rx);
}
function rx(r, e, t, n) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Ru(r, e, t, n);
}
function Ru(r, e, t, n) {
    let i = "";
    for(let s = parseInt(e); s < parseInt(t); s++)i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return i;
}
function $c(r) {
    let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
    return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ox(r) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return r.shadowMapType === cu ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Gu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === Rs && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function ax(r) {
    let e = "ENVMAP_TYPE_CUBE";
    if (r.envMap) switch(r.envMapMode){
        case fs:
        case ps:
            e = "ENVMAP_TYPE_CUBE";
            break;
        case fr:
        case Yo:
            e = "ENVMAP_TYPE_CUBE_UV";
            break;
    }
    return e;
}
function lx(r) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (r.envMap) switch(r.envMapMode){
        case ps:
        case Yo:
            e = "ENVMAP_MODE_REFRACTION";
            break;
    }
    return e;
}
function cx(r) {
    let e = "ENVMAP_BLENDING_NONE";
    if (r.envMap) switch(r.combine){
        case Jo:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case cd:
            e = "ENVMAP_BLENDING_MIX";
            break;
        case hd:
            e = "ENVMAP_BLENDING_ADD";
            break;
    }
    return e;
}
function hx(r, e, t, n) {
    let i = r.getContext(), s = t.defines, o = t.vertexShader, a = t.fragmentShader, l = ox(t), c = ax(t), u = lx(t), h = cx(t), d = t.isWebGL2 ? "" : Kg(t), f = Qg(s), m = i.createProgram(), x, _, g = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (x = [
        f
    ].filter(Cs).join(`
`), x.length > 0 && (x += `
`), _ = [
        d,
        f
    ].filter(Cs).join(`
`), _.length > 0 && (_ += `
`)) : (x = [
        $c(t),
        "#define SHADER_NAME " + t.shaderName,
        f,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        "#define MAX_BONES " + t.maxBones,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
        t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.useVertexTexture ? "#define BONE_TEXTURE" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
        t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
        t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`
    ].filter(Cs).join(`
`), _ = [
        d,
        $c(t),
        "#define SHADER_NAME " + t.shaderName,
        f,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
        t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Cn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Cn ? Fe.tonemapping_pars_fragment : "",
        t.toneMapping !== Cn ? jg("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.alphaWrite ? "" : "#define OPAQUE",
        Fe.encodings_pars_fragment,
        $g("linearToOutputTexel", t.outputEncoding),
        t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`
    ].filter(Cs).join(`
`)), o = $a(o), o = Jc(o, t), o = Yc(o, t), a = $a(a), a = Jc(a, t), a = Yc(a, t), o = Zc(o), a = Zc(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (g = `#version 300 es
`, x = [
        "precision mediump sampler2DArray;",
        "#define attribute in",
        "#define varying out",
        "#define texture2D texture"
    ].join(`
`) + `
` + x, _ = [
        "#define varying in",
        t.glslVersion === vc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
        t.glslVersion === vc ? "" : "#define gl_FragColor pc_fragColor",
        "#define gl_FragDepthEXT gl_FragDepth",
        "#define texture2D texture",
        "#define textureCube texture",
        "#define texture2DProj textureProj",
        "#define texture2DLodEXT textureLod",
        "#define texture2DProjLodEXT textureProjLod",
        "#define textureCubeLodEXT textureLod",
        "#define texture2DGradEXT textureGrad",
        "#define texture2DProjGradEXT textureProjGrad",
        "#define textureCubeGradEXT textureGrad"
    ].join(`
`) + `
` + _);
    let p = g + x + o, M = g + _ + a, y = qc(i, 35633, p), b = qc(i, 35632, M);
    if (i.attachShader(m, y), i.attachShader(m, b), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m), r.debug.checkShaderErrors) {
        let P = i.getProgramInfoLog(m).trim(), H = i.getShaderInfoLog(y).trim(), B = i.getShaderInfoLog(b).trim(), v = !0, C = !0;
        if (i.getProgramParameter(m, 35714) === !1) {
            v = !1;
            let D = Xc(i, y, "vertex"), N = Xc(i, b, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, 35715) + `

Program Info Log: ` + P + `
` + D + `
` + N);
        } else P !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", P) : (H === "" || B === "") && (C = !1);
        C && (this.diagnostics = {
            runnable: v,
            programLog: P,
            vertexShader: {
                log: H,
                prefix: x
            },
            fragmentShader: {
                log: B,
                prefix: _
            }
        });
    }
    i.deleteShader(y), i.deleteShader(b);
    let T;
    this.getUniforms = function() {
        return T === void 0 && (T = new Dn(i, m)), T;
    };
    let R;
    return this.getAttributes = function() {
        return R === void 0 && (R = ex(i, m)), R;
    }, this.destroy = function() {
        n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
    }, this.name = t.shaderName, this.id = Jg++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = y, this.fragmentShader = b, this;
}
var ux = 0, ja = class {
    constructor(){
        this.shaderCache = new Map, this.materialCache = new Map;
    }
    update(e) {
        let t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
        return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
    }
    remove(e) {
        let t = this.materialCache.get(e);
        for (let n of t)n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n);
        return this.materialCache.delete(e), this;
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id;
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id;
    }
    dispose() {
        this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e) {
        let t = this.materialCache;
        return t.has(e) === !1 && t.set(e, new Set), t.get(e);
    }
    _getShaderStage(e) {
        let t = this.shaderCache;
        if (t.has(e) === !1) {
            let n = new Ka;
            t.set(e, n);
        }
        return t.get(e);
    }
}, Ka = class {
    constructor(){
        this.id = ux++, this.usedTimes = 0;
    }
};
function dx(r, e, t, n, i, s, o) {
    let a = new Vs, l = new ja, c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, d = i.floatVertexTextures, f = i.maxVertexUniforms, m = i.vertexTextures, x = i.precision, _ = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function g(v) {
        let D = v.skeleton.bones;
        if (d) return 1024;
        {
            let z = Math.floor((f - 20) / 4), F = Math.min(z, D.length);
            return F < D.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + D.length + " bones. This GPU supports " + F + "."), 0) : F;
        }
    }
    function p(v, C, D, N, z) {
        let F = N.fog, W = v.isMeshStandardMaterial ? N.environment : null, j = (v.isMeshStandardMaterial ? t : e).get(v.envMap || W), ue = _[v.type], k = z.isSkinnedMesh ? g(z) : 0;
        v.precision !== null && (x = i.getMaxPrecision(v.precision), x !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", x, "instead."));
        let $, se, pe, ye;
        if (ue) {
            let le = $t[ue];
            $ = le.vertexShader, se = le.fragmentShader;
        } else $ = v.vertexShader, se = v.fragmentShader, l.update(v), pe = l.getVertexShaderID(v), ye = l.getFragmentShaderID(v);
        let V = r.getRenderTarget(), Ve = v.alphaTest > 0, ge = v.clearcoat > 0;
        return {
            isWebGL2: u,
            shaderID: ue,
            shaderName: v.type,
            vertexShader: $,
            fragmentShader: se,
            defines: v.defines,
            customVertexShaderID: pe,
            customFragmentShaderID: ye,
            isRawShaderMaterial: v.isRawShaderMaterial === !0,
            glslVersion: v.glslVersion,
            precision: x,
            instancing: z.isInstancedMesh === !0,
            instancingColor: z.isInstancedMesh === !0 && z.instanceColor !== null,
            supportsVertexTextures: m,
            outputEncoding: V === null ? r.outputEncoding : V.isXRRenderTarget === !0 ? V.texture.encoding : Fn,
            map: !!v.map,
            matcap: !!v.matcap,
            envMap: !!j,
            envMapMode: j && j.mapping,
            envMapCubeUV: !!j && (j.mapping === fr || j.mapping === Yo),
            lightMap: !!v.lightMap,
            aoMap: !!v.aoMap,
            emissiveMap: !!v.emissiveMap,
            bumpMap: !!v.bumpMap,
            normalMap: !!v.normalMap,
            objectSpaceNormalMap: v.normalMapType === Bd,
            tangentSpaceNormalMap: v.normalMapType === gs,
            decodeVideoTexture: !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === Ze,
            clearcoat: ge,
            clearcoatMap: ge && !!v.clearcoatMap,
            clearcoatRoughnessMap: ge && !!v.clearcoatRoughnessMap,
            clearcoatNormalMap: ge && !!v.clearcoatNormalMap,
            displacementMap: !!v.displacementMap,
            roughnessMap: !!v.roughnessMap,
            metalnessMap: !!v.metalnessMap,
            specularMap: !!v.specularMap,
            specularIntensityMap: !!v.specularIntensityMap,
            specularColorMap: !!v.specularColorMap,
            alphaMap: !!v.alphaMap,
            alphaTest: Ve,
            alphaWrite: v.alphaWrite || v.transparent,
            gradientMap: !!v.gradientMap,
            sheen: v.sheen > 0,
            sheenColorMap: !!v.sheenColorMap,
            sheenRoughnessMap: !!v.sheenRoughnessMap,
            transmission: v.transmission > 0,
            transmissionMap: !!v.transmissionMap,
            thicknessMap: !!v.thicknessMap,
            combine: v.combine,
            vertexTangents: !!v.normalMap && !!z.geometry && !!z.geometry.attributes.tangent,
            vertexColors: v.vertexColors,
            vertexAlphas: v.vertexColors === !0 && !!z.geometry && !!z.geometry.attributes.color && z.geometry.attributes.color.itemSize === 4,
            vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.displacementMap || !!v.transmissionMap || !!v.thicknessMap || !!v.specularIntensityMap || !!v.specularColorMap || !!v.sheenColorMap || !!v.sheenRoughnessMap,
            uvsVertexOnly: !(!!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatNormalMap || v.transmission > 0 || !!v.transmissionMap || !!v.thicknessMap || !!v.specularIntensityMap || !!v.specularColorMap || v.sheen > 0 || !!v.sheenColorMap || !!v.sheenRoughnessMap) && !!v.displacementMap,
            fog: !!F,
            useFog: v.fog,
            fogExp2: F && F.isFogExp2,
            flatShading: !!v.flatShading,
            sizeAttenuation: v.sizeAttenuation,
            logarithmicDepthBuffer: h,
            skinning: z.isSkinnedMesh === !0 && k > 0,
            maxBones: k,
            useVertexTexture: d,
            morphTargets: !!z.geometry && !!z.geometry.morphAttributes.position,
            morphNormals: !!z.geometry && !!z.geometry.morphAttributes.normal,
            morphTargetsCount: !!z.geometry && !!z.geometry.morphAttributes.position ? z.geometry.morphAttributes.position.length : 0,
            numDirLights: C.directional.length,
            numPointLights: C.point.length,
            numSpotLights: C.spot.length,
            numRectAreaLights: C.rectArea.length,
            numHemiLights: C.hemi.length,
            numDirLightShadows: C.directionalShadowMap.length,
            numPointLightShadows: C.pointShadowMap.length,
            numSpotLightShadows: C.spotShadowMap.length,
            numClippingPlanes: o.numPlanes,
            numClipIntersection: o.numIntersection,
            dithering: v.dithering,
            shadowMapEnabled: r.shadowMap.enabled && D.length > 0,
            shadowMapType: r.shadowMap.type,
            toneMapping: v.toneMapped ? r.toneMapping : Cn,
            physicallyCorrectLights: r.physicallyCorrectLights,
            premultipliedAlpha: v.premultipliedAlpha,
            doubleSided: v.side === Ui,
            flipSided: v.side === lt,
            depthPacking: v.depthPacking !== void 0 ? v.depthPacking : !1,
            index0AttributeName: v.index0AttributeName,
            extensionDerivatives: v.extensions && v.extensions.derivatives,
            extensionFragDepth: v.extensions && v.extensions.fragDepth,
            extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
            extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
            rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
            rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
            rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
            customProgramCacheKey: v.customProgramCacheKey()
        };
    }
    function M(v) {
        let C = [];
        if (v.shaderID ? C.push(v.shaderID) : (C.push(v.customVertexShaderID), C.push(v.customFragmentShaderID)), v.defines !== void 0) for(let D in v.defines)C.push(D), C.push(v.defines[D]);
        return v.isRawShaderMaterial === !1 && (y(C, v), b(C, v), C.push(r.outputEncoding)), C.push(v.customProgramCacheKey), C.join();
    }
    function y(v, C) {
        v.push(C.precision), v.push(C.outputEncoding), v.push(C.envMapMode), v.push(C.combine), v.push(C.vertexUvs), v.push(C.fogExp2), v.push(C.sizeAttenuation), v.push(C.maxBones), v.push(C.morphTargetsCount), v.push(C.numDirLights), v.push(C.numPointLights), v.push(C.numSpotLights), v.push(C.numHemiLights), v.push(C.numRectAreaLights), v.push(C.numDirLightShadows), v.push(C.numPointLightShadows), v.push(C.numSpotLightShadows), v.push(C.shadowMapType), v.push(C.toneMapping), v.push(C.numClippingPlanes), v.push(C.numClipIntersection), v.push(C.alphaWrite);
    }
    function b(v, C) {
        a.disableAll(), C.isWebGL2 && a.enable(0), C.supportsVertexTextures && a.enable(1), C.instancing && a.enable(2), C.instancingColor && a.enable(3), C.map && a.enable(4), C.matcap && a.enable(5), C.envMap && a.enable(6), C.envMapCubeUV && a.enable(7), C.lightMap && a.enable(8), C.aoMap && a.enable(9), C.emissiveMap && a.enable(10), C.bumpMap && a.enable(11), C.normalMap && a.enable(12), C.objectSpaceNormalMap && a.enable(13), C.tangentSpaceNormalMap && a.enable(14), C.clearcoat && a.enable(15), C.clearcoatMap && a.enable(16), C.clearcoatRoughnessMap && a.enable(17), C.clearcoatNormalMap && a.enable(18), C.displacementMap && a.enable(19), C.specularMap && a.enable(20), C.roughnessMap && a.enable(21), C.metalnessMap && a.enable(22), C.gradientMap && a.enable(23), C.alphaMap && a.enable(24), C.alphaTest && a.enable(25), C.vertexColors && a.enable(26), C.vertexAlphas && a.enable(27), C.vertexUvs && a.enable(28), C.vertexTangents && a.enable(29), C.uvsVertexOnly && a.enable(30), C.fog && a.enable(31), v.push(a.mask), a.disableAll(), C.useFog && a.enable(0), C.flatShading && a.enable(1), C.logarithmicDepthBuffer && a.enable(2), C.skinning && a.enable(3), C.useVertexTexture && a.enable(4), C.morphTargets && a.enable(5), C.morphNormals && a.enable(6), C.premultipliedAlpha && a.enable(7), C.shadowMapEnabled && a.enable(8), C.physicallyCorrectLights && a.enable(9), C.doubleSided && a.enable(10), C.flipSided && a.enable(11), C.depthPacking && a.enable(12), C.dithering && a.enable(13), C.specularIntensityMap && a.enable(14), C.specularColorMap && a.enable(15), C.transmission && a.enable(16), C.transmissionMap && a.enable(17), C.thicknessMap && a.enable(18), C.sheen && a.enable(19), C.sheenColorMap && a.enable(20), C.sheenRoughnessMap && a.enable(21), C.decodeVideoTexture && a.enable(22), v.push(a.mask);
    }
    function T(v) {
        let C = _[v.type], D;
        if (C) {
            let N = $t[C];
            D = hf.clone(N.uniforms);
        } else D = v.uniforms;
        return D;
    }
    function R(v, C) {
        let D;
        for(let N = 0, z = c.length; N < z; N++){
            let F = c[N];
            if (F.cacheKey === C) {
                D = F, ++D.usedTimes;
                break;
            }
        }
        return D === void 0 && (D = new hx(r, C, v, s), c.push(D)), D;
    }
    function P(v) {
        if (--v.usedTimes === 0) {
            let C = c.indexOf(v);
            c[C] = c[c.length - 1], c.pop(), v.destroy();
        }
    }
    function H(v) {
        l.remove(v);
    }
    function B() {
        l.dispose();
    }
    return {
        getParameters: p,
        getProgramCacheKey: M,
        getUniforms: T,
        acquireProgram: R,
        releaseProgram: P,
        releaseShaderCache: H,
        programs: c,
        dispose: B
    };
}
function fx() {
    let r = new WeakMap;
    function e(s) {
        let o = r.get(s);
        return o === void 0 && (o = {}, r.set(s, o)), o;
    }
    function t(s) {
        r.delete(s);
    }
    function n(s, o, a) {
        r.get(s)[o] = a;
    }
    function i() {
        r = new WeakMap;
    }
    return {
        get: e,
        remove: t,
        update: n,
        dispose: i
    };
}
function px(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function jc(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function Kc() {
    let r = [], e = 0, t = [], n = [], i = [];
    function s() {
        e = 0, t.length = 0, n.length = 0, i.length = 0;
    }
    function o(h, d, f, m, x, _) {
        let g = r[e];
        return g === void 0 ? (g = {
            id: h.id,
            object: h,
            geometry: d,
            material: f,
            groupOrder: m,
            renderOrder: h.renderOrder,
            z: x,
            group: _
        }, r[e] = g) : (g.id = h.id, g.object = h, g.geometry = d, g.material = f, g.groupOrder = m, g.renderOrder = h.renderOrder, g.z = x, g.group = _), e++, g;
    }
    function a(h, d, f, m, x, _) {
        let g = o(h, d, f, m, x, _);
        f.transmission > 0 ? n.push(g) : f.transparent === !0 ? i.push(g) : t.push(g);
    }
    function l(h, d, f, m, x, _) {
        let g = o(h, d, f, m, x, _);
        f.transmission > 0 ? n.unshift(g) : f.transparent === !0 ? i.unshift(g) : t.unshift(g);
    }
    function c(h, d) {
        t.length > 1 && t.sort(h || px), n.length > 1 && n.sort(d || jc), i.length > 1 && i.sort(d || jc);
    }
    function u() {
        for(let h = e, d = r.length; h < d; h++){
            let f = r[h];
            if (f.id === null) break;
            f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: i,
        init: s,
        push: a,
        unshift: l,
        finish: u,
        sort: c
    };
}
function mx() {
    let r = new WeakMap;
    function e(n, i) {
        let s;
        return r.has(n) === !1 ? (s = new Kc, r.set(n, [
            s
        ])) : i >= r.get(n).length ? (s = new Kc, r.get(n).push(s)) : s = r.get(n)[i], s;
    }
    function t() {
        r = new WeakMap;
    }
    return {
        get: e,
        dispose: t
    };
}
function gx() {
    let r = {};
    return {
        get: function(e) {
            if (r[e.id] !== void 0) return r[e.id];
            let t;
            switch(e.type){
                case "DirectionalLight":
                    t = {
                        direction: new w,
                        color: new ne
                    };
                    break;
                case "SpotLight":
                    t = {
                        position: new w,
                        direction: new w,
                        color: new ne,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    t = {
                        position: new w,
                        color: new ne,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    t = {
                        direction: new w,
                        skyColor: new ne,
                        groundColor: new ne
                    };
                    break;
                case "RectAreaLight":
                    t = {
                        color: new ne,
                        position: new w,
                        halfWidth: new w,
                        halfHeight: new w
                    };
                    break;
            }
            return r[e.id] = t, t;
        }
    };
}
function xx() {
    let r = {};
    return {
        get: function(e) {
            if (r[e.id] !== void 0) return r[e.id];
            let t;
            switch(e.type){
                case "DirectionalLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Z
                    };
                    break;
                case "SpotLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Z
                    };
                    break;
                case "PointLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Z,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break;
            }
            return r[e.id] = t, t;
        }
    };
}
var yx = 0;
function _x(r, e) {
    return (e.castShadow ? 1 : 0) - (r.castShadow ? 1 : 0);
}
function vx(r, e) {
    let t = new gx, n = xx(), i = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1
        },
        ambient: [
            0,
            0,
            0
        ],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadow: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
    };
    for(let u = 0; u < 9; u++)i.probe.push(new w);
    let s = new w, o = new de, a = new de;
    function l(u, h) {
        let d = 0, f = 0, m = 0;
        for(let H = 0; H < 9; H++)i.probe[H].set(0, 0, 0);
        let x = 0, _ = 0, g = 0, p = 0, M = 0, y = 0, b = 0, T = 0;
        u.sort(_x);
        let R = h !== !0 ? Math.PI : 1;
        for(let H1 = 0, B = u.length; H1 < B; H1++){
            let v = u[H1], C = v.color, D = v.intensity, N = v.distance, z = v.shadow && v.shadow.map ? v.shadow.map.texture : null;
            if (v.isAmbientLight) d += C.r * D * R, f += C.g * D * R, m += C.b * D * R;
            else if (v.isLightProbe) for(let F = 0; F < 9; F++)i.probe[F].addScaledVector(v.sh.coefficients[F], D);
            else if (v.isDirectionalLight) {
                let F1 = t.get(v);
                if (F1.color.copy(v.color).multiplyScalar(v.intensity * R), v.castShadow) {
                    let W = v.shadow, j = n.get(v);
                    j.shadowBias = W.bias, j.shadowNormalBias = W.normalBias, j.shadowRadius = W.radius, j.shadowMapSize = W.mapSize, i.directionalShadow[x] = j, i.directionalShadowMap[x] = z, i.directionalShadowMatrix[x] = v.shadow.matrix, y++;
                }
                i.directional[x] = F1, x++;
            } else if (v.isSpotLight) {
                let F2 = t.get(v);
                if (F2.position.setFromMatrixPosition(v.matrixWorld), F2.color.copy(C).multiplyScalar(D * R), F2.distance = N, F2.coneCos = Math.cos(v.angle), F2.penumbraCos = Math.cos(v.angle * (1 - v.penumbra)), F2.decay = v.decay, v.castShadow) {
                    let W1 = v.shadow, j1 = n.get(v);
                    j1.shadowBias = W1.bias, j1.shadowNormalBias = W1.normalBias, j1.shadowRadius = W1.radius, j1.shadowMapSize = W1.mapSize, i.spotShadow[g] = j1, i.spotShadowMap[g] = z, i.spotShadowMatrix[g] = v.shadow.matrix, T++;
                }
                i.spot[g] = F2, g++;
            } else if (v.isRectAreaLight) {
                let F3 = t.get(v);
                F3.color.copy(C).multiplyScalar(D), F3.halfWidth.set(v.width * .5, 0, 0), F3.halfHeight.set(0, v.height * .5, 0), i.rectArea[p] = F3, p++;
            } else if (v.isPointLight) {
                let F4 = t.get(v);
                if (F4.color.copy(v.color).multiplyScalar(v.intensity * R), F4.distance = v.distance, F4.decay = v.decay, v.castShadow) {
                    let W2 = v.shadow, j2 = n.get(v);
                    j2.shadowBias = W2.bias, j2.shadowNormalBias = W2.normalBias, j2.shadowRadius = W2.radius, j2.shadowMapSize = W2.mapSize, j2.shadowCameraNear = W2.camera.near, j2.shadowCameraFar = W2.camera.far, i.pointShadow[_] = j2, i.pointShadowMap[_] = z, i.pointShadowMatrix[_] = v.shadow.matrix, b++;
                }
                i.point[_] = F4, _++;
            } else if (v.isHemisphereLight) {
                let F5 = t.get(v);
                F5.skyColor.copy(v.color).multiplyScalar(D * R), F5.groundColor.copy(v.groundColor).multiplyScalar(D * R), i.hemi[M] = F5, M++;
            }
        }
        p > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_FLOAT_1, i.rectAreaLTC2 = te.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_HALF_1, i.rectAreaLTC2 = te.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = m;
        let P = i.hash;
        (P.directionalLength !== x || P.pointLength !== _ || P.spotLength !== g || P.rectAreaLength !== p || P.hemiLength !== M || P.numDirectionalShadows !== y || P.numPointShadows !== b || P.numSpotShadows !== T) && (i.directional.length = x, i.spot.length = g, i.rectArea.length = p, i.point.length = _, i.hemi.length = M, i.directionalShadow.length = y, i.directionalShadowMap.length = y, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = T, i.spotShadowMap.length = T, i.directionalShadowMatrix.length = y, i.pointShadowMatrix.length = b, i.spotShadowMatrix.length = T, P.directionalLength = x, P.pointLength = _, P.spotLength = g, P.rectAreaLength = p, P.hemiLength = M, P.numDirectionalShadows = y, P.numPointShadows = b, P.numSpotShadows = T, i.version = yx++);
    }
    function c(u, h) {
        let d = 0, f = 0, m = 0, x = 0, _ = 0, g = h.matrixWorldInverse;
        for(let p = 0, M = u.length; p < M; p++){
            let y = u[p];
            if (y.isDirectionalLight) {
                let b = i.directional[d];
                b.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(g), d++;
            } else if (y.isSpotLight) {
                let b1 = i.spot[m];
                b1.position.setFromMatrixPosition(y.matrixWorld), b1.position.applyMatrix4(g), b1.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), b1.direction.sub(s), b1.direction.transformDirection(g), m++;
            } else if (y.isRectAreaLight) {
                let b2 = i.rectArea[x];
                b2.position.setFromMatrixPosition(y.matrixWorld), b2.position.applyMatrix4(g), a.identity(), o.copy(y.matrixWorld), o.premultiply(g), a.extractRotation(o), b2.halfWidth.set(y.width * .5, 0, 0), b2.halfHeight.set(0, y.height * .5, 0), b2.halfWidth.applyMatrix4(a), b2.halfHeight.applyMatrix4(a), x++;
            } else if (y.isPointLight) {
                let b3 = i.point[f];
                b3.position.setFromMatrixPosition(y.matrixWorld), b3.position.applyMatrix4(g), f++;
            } else if (y.isHemisphereLight) {
                let b4 = i.hemi[_];
                b4.direction.setFromMatrixPosition(y.matrixWorld), b4.direction.transformDirection(g), b4.direction.normalize(), _++;
            }
        }
    }
    return {
        setup: l,
        setupView: c,
        state: i
    };
}
function Qc(r, e) {
    let t = new vx(r, e), n = [], i = [];
    function s() {
        n.length = 0, i.length = 0;
    }
    function o(h) {
        n.push(h);
    }
    function a(h) {
        i.push(h);
    }
    function l(h) {
        t.setup(n, h);
    }
    function c(h) {
        t.setupView(n, h);
    }
    return {
        init: s,
        state: {
            lightsArray: n,
            shadowsArray: i,
            lights: t
        },
        setupLights: l,
        setupLightsView: c,
        pushLight: o,
        pushShadow: a
    };
}
function Mx(r, e) {
    let t = new WeakMap;
    function n(s, o = 0) {
        let a;
        return t.has(s) === !1 ? (a = new Qc(r, e), t.set(s, [
            a
        ])) : o >= t.get(s).length ? (a = new Qc(r, e), t.get(s).push(a)) : a = t.get(s)[o], a;
    }
    function i() {
        t = new WeakMap;
    }
    return {
        get: n,
        dispose: i
    };
}
var Js = class extends ft {
    constructor(e){
        super(), this.type = "MeshDepthMaterial", this.depthPacking = Fd, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
    }
};
Js.prototype.isMeshDepthMaterial = !0;
var Ys = class extends ft {
    constructor(e){
        super(), this.type = "MeshDistanceMaterial", this.referencePosition = new w, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
    }
};
Ys.prototype.isMeshDistanceMaterial = !0;
var wx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, bx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Cu(r, e, t) {
    let n = new Gi, i = new Z, s = new Z, o = new Ge, a = new Js({
        depthPacking: Nd
    }), l = new Ys, c = {}, u = t.maxTextureSize, h = {
        0: lt,
        1: Oi,
        2: Ui
    }, d = new Kt({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Z
            },
            radius: {
                value: 4
            }
        },
        vertexShader: wx,
        fragmentShader: bx
    }), f = d.clone();
    f.defines.HORIZONTAL_PASS = 1;
    let m = new ve;
    m.setAttribute("position", new Be(new Float32Array([
        -1,
        -1,
        .5,
        3,
        -1,
        .5,
        -1,
        3,
        .5
    ]), 3));
    let x = new ot(m, d), _ = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = cu, this.render = function(y, b, T) {
        if (_.enabled === !1 || _.autoUpdate === !1 && _.needsUpdate === !1 || y.length === 0) return;
        let R = r.getRenderTarget(), P = r.getActiveCubeFace(), H = r.getActiveMipmapLevel(), B = r.state;
        B.setBlending(Rn), B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
        for(let v = 0, C = y.length; v < C; v++){
            let D = y[v], N = D.shadow;
            if (N === void 0) {
                console.warn("THREE.WebGLShadowMap:", D, "has no shadow.");
                continue;
            }
            if (N.autoUpdate === !1 && N.needsUpdate === !1) continue;
            i.copy(N.mapSize);
            let z = N.getFrameExtents();
            if (i.multiply(z), s.copy(N.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / z.x), i.x = s.x * z.x, N.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / z.y), i.y = s.y * z.y, N.mapSize.y = s.y)), N.map === null && !N.isPointLightShadow && this.type === Rs) {
                let W = {
                    minFilter: nt,
                    magFilter: nt,
                    format: wt
                };
                N.map = new At(i.x, i.y, W), N.map.texture.name = D.name + ".shadowMap", N.mapPass = new At(i.x, i.y, W), N.camera.updateProjectionMatrix();
            }
            if (N.map === null) {
                let W1 = {
                    minFilter: ct,
                    magFilter: ct,
                    format: wt
                };
                N.map = new At(i.x, i.y, W1), N.map.texture.name = D.name + ".shadowMap", N.camera.updateProjectionMatrix();
            }
            r.setRenderTarget(N.map), r.clear();
            let F = N.getViewportCount();
            for(let W2 = 0; W2 < F; W2++){
                let j = N.getViewport(W2);
                o.set(s.x * j.x, s.y * j.y, s.x * j.z, s.y * j.w), B.viewport(o), N.updateMatrices(D, W2), n = N.getFrustum(), M(b, T, N.camera, D, this.type);
            }
            !N.isPointLightShadow && this.type === Rs && g(N, T), N.needsUpdate = !1;
        }
        _.needsUpdate = !1, r.setRenderTarget(R, P, H);
    };
    function g(y, b) {
        let T = e.update(x);
        d.defines.VSM_SAMPLES !== y.blurSamples && (d.defines.VSM_SAMPLES = y.blurSamples, f.defines.VSM_SAMPLES = y.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), d.uniforms.shadow_pass.value = y.map.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, r.setRenderTarget(y.mapPass), r.clear(), r.renderBufferDirect(b, null, T, d, x, null), f.uniforms.shadow_pass.value = y.mapPass.texture, f.uniforms.resolution.value = y.mapSize, f.uniforms.radius.value = y.radius, r.setRenderTarget(y.map), r.clear(), r.renderBufferDirect(b, null, T, f, x, null);
    }
    function p(y, b, T, R, P, H, B) {
        let v = null, C = R.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
        if (C !== void 0 ? v = C : v = R.isPointLight === !0 ? l : a, r.localClippingEnabled && T.clipShadows === !0 && T.clippingPlanes.length !== 0 || T.displacementMap && T.displacementScale !== 0 || T.alphaMap && T.alphaTest > 0) {
            let D = v.uuid, N = T.uuid, z = c[D];
            z === void 0 && (z = {}, c[D] = z);
            let F = z[N];
            F === void 0 && (F = v.clone(), z[N] = F), v = F;
        }
        return v.visible = T.visible, v.wireframe = T.wireframe, B === Rs ? v.side = T.shadowSide !== null ? T.shadowSide : T.side : v.side = T.shadowSide !== null ? T.shadowSide : h[T.side], v.alphaMap = T.alphaMap, v.alphaTest = T.alphaTest, v.clipShadows = T.clipShadows, v.clippingPlanes = T.clippingPlanes, v.clipIntersection = T.clipIntersection, v.displacementMap = T.displacementMap, v.displacementScale = T.displacementScale, v.displacementBias = T.displacementBias, v.wireframeLinewidth = T.wireframeLinewidth, v.linewidth = T.linewidth, R.isPointLight === !0 && v.isMeshDistanceMaterial === !0 && (v.referencePosition.setFromMatrixPosition(R.matrixWorld), v.nearDistance = P, v.farDistance = H), v;
    }
    function M(y, b, T, R, P) {
        if (y.visible === !1) return;
        if (y.layers.test(b.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && P === Rs) && (!y.frustumCulled || n.intersectsObject(y))) {
            y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, y.matrixWorld);
            let v = e.update(y), C = y.material;
            if (Array.isArray(C)) {
                let D = v.groups;
                for(let N = 0, z = D.length; N < z; N++){
                    let F = D[N], W = C[F.materialIndex];
                    if (W && W.visible) {
                        let j = p(y, v, W, R, T.near, T.far, P);
                        r.renderBufferDirect(T, null, v, j, y, F);
                    }
                }
            } else if (C.visible) {
                let D1 = p(y, v, C, R, T.near, T.far, P);
                r.renderBufferDirect(T, null, v, D1, y, null);
            }
        }
        let B = y.children;
        for(let v1 = 0, C1 = B.length; v1 < C1; v1++)M(B[v1], b, T, R, P);
    }
}
function Sx(r, e, t) {
    let n = t.isWebGL2;
    function i() {
        let L = !1, fe = new Ge, ae = null, be = new Ge(0, 0, 0, 0);
        return {
            setMask: function(J) {
                ae !== J && !L && (r.colorMask(J, J, J, J), ae = J);
            },
            setLocked: function(J) {
                L = J;
            },
            setClear: function(J, Me, Ne, je, Lt) {
                Lt === !0 && (J *= je, Me *= je, Ne *= je), fe.set(J, Me, Ne, je), be.equals(fe) === !1 && (r.clearColor(J, Me, Ne, je), be.copy(fe));
            },
            reset: function() {
                L = !1, ae = null, be.set(-1, 0, 0, 0);
            }
        };
    }
    function s() {
        let L = !1, fe = null, ae = null, be = null;
        return {
            setTest: function(J) {
                J ? V(2929) : Ve(2929);
            },
            setMask: function(J) {
                fe !== J && !L && (r.depthMask(J), fe = J);
            },
            setFunc: function(J) {
                if (ae !== J) {
                    if (J) switch(J){
                        case nd:
                            r.depthFunc(512);
                            break;
                        case id:
                            r.depthFunc(519);
                            break;
                        case sd:
                            r.depthFunc(513);
                            break;
                        case za:
                            r.depthFunc(515);
                            break;
                        case rd:
                            r.depthFunc(514);
                            break;
                        case od:
                            r.depthFunc(518);
                            break;
                        case ad:
                            r.depthFunc(516);
                            break;
                        case ld:
                            r.depthFunc(517);
                            break;
                        default:
                            r.depthFunc(515);
                    }
                    else r.depthFunc(515);
                    ae = J;
                }
            },
            setLocked: function(J) {
                L = J;
            },
            setClear: function(J) {
                be !== J && (r.clearDepth(J), be = J);
            },
            reset: function() {
                L = !1, fe = null, ae = null, be = null;
            }
        };
    }
    function o() {
        let L = !1, fe = null, ae = null, be = null, J = null, Me = null, Ne = null, je = null, Lt = null;
        return {
            setTest: function(Qe) {
                L || (Qe ? V(2960) : Ve(2960));
            },
            setMask: function(Qe) {
                fe !== Qe && !L && (r.stencilMask(Qe), fe = Qe);
            },
            setFunc: function(Qe, qt, sn) {
                (ae !== Qe || be !== qt || J !== sn) && (r.stencilFunc(Qe, qt, sn), ae = Qe, be = qt, J = sn);
            },
            setOp: function(Qe, qt, sn) {
                (Me !== Qe || Ne !== qt || je !== sn) && (r.stencilOp(Qe, qt, sn), Me = Qe, Ne = qt, je = sn);
            },
            setLocked: function(Qe) {
                L = Qe;
            },
            setClear: function(Qe) {
                Lt !== Qe && (r.clearStencil(Qe), Lt = Qe);
            },
            reset: function() {
                L = !1, fe = null, ae = null, be = null, J = null, Me = null, Ne = null, je = null, Lt = null;
            }
        };
    }
    let a = new i, l = new s, c = new o, u = {}, h = {}, d = new WeakMap, f = [], m = null, x = !1, _ = null, g = null, p = null, M = null, y = null, b = null, T = null, R = !1, P = null, H = null, B = null, v = null, C = null, D = r.getParameter(35661), N = !1, z = 0, F = r.getParameter(7938);
    F.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(F)[1]), N = z >= 1) : F.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), N = z >= 2);
    let W = null, j = {}, ue = r.getParameter(3088), k = r.getParameter(2978), $ = new Ge().fromArray(ue), se = new Ge().fromArray(k);
    function pe(L, fe, ae) {
        let be = new Uint8Array(4), J = r.createTexture();
        r.bindTexture(L, J), r.texParameteri(L, 10241, 9728), r.texParameteri(L, 10240, 9728);
        for(let Me = 0; Me < ae; Me++)r.texImage2D(fe + Me, 0, 6408, 1, 1, 0, 6408, 5121, be);
        return J;
    }
    let ye = {};
    ye[3553] = pe(3553, 3553, 1), ye[34067] = pe(34067, 34069, 6), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), V(2929), l.setFunc(za), K(!1), ce(Jl), V(2884), X(Rn);
    function V(L) {
        u[L] !== !0 && (r.enable(L), u[L] = !0);
    }
    function Ve(L) {
        u[L] !== !1 && (r.disable(L), u[L] = !1);
    }
    function ge(L, fe) {
        return h[L] !== fe ? (r.bindFramebuffer(L, fe), h[L] = fe, n && (L === 36009 && (h[36160] = fe), L === 36160 && (h[36009] = fe)), !0) : !1;
    }
    function Se(L, fe) {
        let ae = f, be = !1;
        if (L) if (ae = d.get(fe), ae === void 0 && (ae = [], d.set(fe, ae)), L.isWebGLMultipleRenderTargets) {
            let J = L.texture;
            if (ae.length !== J.length || ae[0] !== 36064) {
                for(let Me = 0, Ne = J.length; Me < Ne; Me++)ae[Me] = 36064 + Me;
                ae.length = J.length, be = !0;
            }
        } else ae[0] !== 36064 && (ae[0] = 36064, be = !0);
        else ae[0] !== 1029 && (ae[0] = 1029, be = !0);
        be && (t.isWebGL2 ? r.drawBuffers(ae) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae));
    }
    function le(L) {
        return m !== L ? (r.useProgram(L), m = L, !0) : !1;
    }
    let Le = {
        [Ci]: 32774,
        [qu]: 32778,
        [Xu]: 32779
    };
    if (n) Le[jl] = 32775, Le[Kl] = 32776;
    else {
        let L = e.get("EXT_blend_minmax");
        L !== null && (Le[jl] = L.MIN_EXT, Le[Kl] = L.MAX_EXT);
    }
    let Ee = {
        [Ju]: 0,
        [Yu]: 1,
        [Zu]: 768,
        [uu]: 770,
        [td]: 776,
        [Qu]: 774,
        [ju]: 772,
        [$u]: 769,
        [du]: 771,
        [ed]: 775,
        [Ku]: 773
    };
    function X(L, fe, ae, be, J, Me, Ne, je) {
        if (L === Rn) {
            x === !0 && (Ve(3042), x = !1);
            return;
        }
        if (x === !1 && (V(3042), x = !0), L !== Wu) {
            if (L !== _ || je !== R) {
                if ((g !== Ci || y !== Ci) && (r.blendEquation(32774), g = Ci, y = Ci), je) switch(L){
                    case Ls:
                        r.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case Yl:
                        r.blendFunc(1, 1);
                        break;
                    case Zl:
                        r.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case $l:
                        r.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", L);
                        break;
                }
                else switch(L){
                    case Ls:
                        r.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case Yl:
                        r.blendFunc(770, 1);
                        break;
                    case Zl:
                        r.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case $l:
                        r.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", L);
                        break;
                }
                p = null, M = null, b = null, T = null, _ = L, R = je;
            }
            return;
        }
        J = J || fe, Me = Me || ae, Ne = Ne || be, (fe !== g || J !== y) && (r.blendEquationSeparate(Le[fe], Le[J]), g = fe, y = J), (ae !== p || be !== M || Me !== b || Ne !== T) && (r.blendFuncSeparate(Ee[ae], Ee[be], Ee[Me], Ee[Ne]), p = ae, M = be, b = Me, T = Ne), _ = L, R = null;
    }
    function ee(L, fe) {
        L.side === Ui ? Ve(2884) : V(2884);
        let ae = L.side === lt;
        fe && (ae = !ae), K(ae), L.blending === Ls && L.transparent === !1 ? X(Rn) : X(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), l.setFunc(L.depthFunc), l.setTest(L.depthTest), l.setMask(L.depthWrite), a.setMask(L.colorWrite);
        let be = L.stencilWrite;
        c.setTest(be), be && (c.setMask(L.stencilWriteMask), c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), we(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? V(32926) : Ve(32926);
    }
    function K(L) {
        P !== L && (L ? r.frontFace(2304) : r.frontFace(2305), P = L);
    }
    function ce(L) {
        L !== Vu ? (V(2884), L !== H && (L === Jl ? r.cullFace(1029) : L === ku ? r.cullFace(1028) : r.cullFace(1032))) : Ve(2884), H = L;
    }
    function oe(L) {
        L !== B && (N && r.lineWidth(L), B = L);
    }
    function we(L, fe, ae) {
        L ? (V(32823), (v !== fe || C !== ae) && (r.polygonOffset(fe, ae), v = fe, C = ae)) : Ve(32823);
    }
    function Te(L) {
        L ? V(3089) : Ve(3089);
    }
    function ze(L) {
        L === void 0 && (L = 33984 + D - 1), W !== L && (r.activeTexture(L), W = L);
    }
    function Je(L, fe) {
        W === null && ze();
        let ae = j[W];
        ae === void 0 && (ae = {
            type: void 0,
            texture: void 0
        }, j[W] = ae), (ae.type !== L || ae.texture !== fe) && (r.bindTexture(L, fe || ye[L]), ae.type = L, ae.texture = fe);
    }
    function qe() {
        let L = j[W];
        L !== void 0 && L.type !== void 0 && (r.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
    }
    function A() {
        try {
            r.compressedTexImage2D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function S() {
        try {
            r.texSubImage2D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function q() {
        try {
            r.texSubImage3D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function Q() {
        try {
            r.compressedTexSubImage2D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function me() {
        try {
            r.texStorage2D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function G() {
        try {
            r.texStorage3D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function _e() {
        try {
            r.texImage2D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function xe() {
        try {
            r.texImage3D.apply(r, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function re(L) {
        $.equals(L) === !1 && (r.scissor(L.x, L.y, L.z, L.w), $.copy(L));
    }
    function ie(L) {
        se.equals(L) === !1 && (r.viewport(L.x, L.y, L.z, L.w), se.copy(L));
    }
    function Re() {
        r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), u = {}, W = null, j = {}, h = {}, d = new WeakMap, f = [], m = null, x = !1, _ = null, g = null, p = null, M = null, y = null, b = null, T = null, R = !1, P = null, H = null, B = null, v = null, C = null, $.set(0, 0, r.canvas.width, r.canvas.height), se.set(0, 0, r.canvas.width, r.canvas.height), a.reset(), l.reset(), c.reset();
    }
    return {
        buffers: {
            color: a,
            depth: l,
            stencil: c
        },
        enable: V,
        disable: Ve,
        bindFramebuffer: ge,
        drawBuffers: Se,
        useProgram: le,
        setBlending: X,
        setMaterial: ee,
        setFlipSided: K,
        setCullFace: ce,
        setLineWidth: oe,
        setPolygonOffset: we,
        setScissorTest: Te,
        activeTexture: ze,
        bindTexture: Je,
        unbindTexture: qe,
        compressedTexImage2D: A,
        texImage2D: _e,
        texImage3D: xe,
        texStorage2D: me,
        texStorage3D: G,
        texSubImage2D: S,
        texSubImage3D: q,
        compressedTexSubImage2D: Q,
        scissor: re,
        viewport: ie,
        reset: Re
    };
}
function Ex(r, e, t, n, i, s, o) {
    let a = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : void 0, m = new WeakMap, x, _ = !1;
    try {
        _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch  {}
    function g(A, S) {
        return _ ? new OffscreenCanvas(A, S) : Us("canvas");
    }
    function p(A, S, q, Q) {
        let me = 1;
        if ((A.width > Q || A.height > Q) && (me = Q / Math.max(A.width, A.height)), me < 1 || S === !0) if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap) {
            let G = S ? gu : Math.floor, _e = G(me * A.width), xe = G(me * A.height);
            x === void 0 && (x = g(_e, xe));
            let re = q ? g(_e, xe) : x;
            return re.width = _e, re.height = xe, re.getContext("2d").drawImage(A, 0, 0, _e, xe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + A.width + "x" + A.height + ") to (" + _e + "x" + xe + ")."), re;
        } else return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + A.width + "x" + A.height + ")."), A;
        return A;
    }
    function M(A) {
        return Va(A.width) && Va(A.height);
    }
    function y(A) {
        return a ? !1 : A.wrapS !== Mt || A.wrapT !== Mt || A.minFilter !== ct && A.minFilter !== nt;
    }
    function b(A, S) {
        return A.generateMipmaps && S && A.minFilter !== ct && A.minFilter !== nt;
    }
    function T(A) {
        r.generateMipmap(A);
    }
    function R(A, S, q, Q, me = !1) {
        if (a === !1) return S;
        if (A !== null) {
            if (r[A] !== void 0) return r[A];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
        }
        let G = S;
        return S === 6403 && (q === 5126 && (G = 33326), q === 5131 && (G = 33325), q === 5121 && (G = 33321)), S === 33319 && (q === 5126 && (G = 33328), q === 5131 && (G = 33327), q === 5121 && (G = 33323)), S === 6408 && (q === 5126 && (G = 34836), q === 5131 && (G = 34842), q === 5121 && (G = Q === Ze && me === !1 ? 35907 : 32856), q === 32819 && (G = 32854), q === 32820 && (G = 32855)), (G === 33325 || G === 33326 || G === 33327 || G === 33328 || G === 34842 || G === 34836) && e.get("EXT_color_buffer_float"), G;
    }
    function P(A, S, q) {
        return b(A, q) === !0 || A.isFramebufferTexture && A.minFilter !== ct && A.minFilter !== nt ? Math.log2(Math.max(S.width, S.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? S.mipmaps.length : 1;
    }
    function H(A) {
        return A === ct || A === Oa || A === Ua ? 9728 : 9729;
    }
    function B(A) {
        let S = A.target;
        S.removeEventListener("dispose", B), C(S), S.isVideoTexture && m.delete(S), o.memory.textures--;
    }
    function v(A) {
        let S = A.target;
        S.removeEventListener("dispose", v), D(S);
    }
    function C(A) {
        let S = n.get(A);
        S.__webglInit !== void 0 && (r.deleteTexture(S.__webglTexture), n.remove(A));
    }
    function D(A) {
        let S = A.texture, q = n.get(A), Q = n.get(S);
        if (!!A) {
            if (Q.__webglTexture !== void 0 && (r.deleteTexture(Q.__webglTexture), o.memory.textures--), A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget) for(let me = 0; me < 6; me++)r.deleteFramebuffer(q.__webglFramebuffer[me]), q.__webglDepthbuffer && r.deleteRenderbuffer(q.__webglDepthbuffer[me]);
            else r.deleteFramebuffer(q.__webglFramebuffer), q.__webglDepthbuffer && r.deleteRenderbuffer(q.__webglDepthbuffer), q.__webglMultisampledFramebuffer && r.deleteFramebuffer(q.__webglMultisampledFramebuffer), q.__webglColorRenderbuffer && r.deleteRenderbuffer(q.__webglColorRenderbuffer), q.__webglDepthRenderbuffer && r.deleteRenderbuffer(q.__webglDepthRenderbuffer);
            if (A.isWebGLMultipleRenderTargets) for(let me1 = 0, G = S.length; me1 < G; me1++){
                let _e = n.get(S[me1]);
                _e.__webglTexture && (r.deleteTexture(_e.__webglTexture), o.memory.textures--), n.remove(S[me1]);
            }
            n.remove(S), n.remove(A);
        }
    }
    let N = 0;
    function z() {
        N = 0;
    }
    function F() {
        let A = N;
        return A >= l && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + l), N += 1, A;
    }
    function W(A, S) {
        let q = n.get(A);
        if (A.isVideoTexture && oe(A), A.version > 0 && q.__version !== A.version) {
            let Q = A.image;
            if (Q === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else if (Q.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                V(q, A, S);
                return;
            }
        }
        t.activeTexture(33984 + S), t.bindTexture(3553, q.__webglTexture);
    }
    function j(A, S) {
        let q = n.get(A);
        if (A.version > 0 && q.__version !== A.version) {
            V(q, A, S);
            return;
        }
        t.activeTexture(33984 + S), t.bindTexture(35866, q.__webglTexture);
    }
    function ue(A, S) {
        let q = n.get(A);
        if (A.version > 0 && q.__version !== A.version) {
            V(q, A, S);
            return;
        }
        t.activeTexture(33984 + S), t.bindTexture(32879, q.__webglTexture);
    }
    function k(A, S) {
        let q = n.get(A);
        if (A.version > 0 && q.__version !== A.version) {
            Ve(q, A, S);
            return;
        }
        t.activeTexture(33984 + S), t.bindTexture(34067, q.__webglTexture);
    }
    let $ = {
        [ao]: 10497,
        [Mt]: 33071,
        [lo]: 33648
    }, se = {
        [ct]: 9728,
        [Oa]: 9984,
        [Ua]: 9986,
        [nt]: 9729,
        [fu]: 9985,
        [ms]: 9987
    };
    function pe(A, S, q) {
        if (q ? (r.texParameteri(A, 10242, $[S.wrapS]), r.texParameteri(A, 10243, $[S.wrapT]), (A === 32879 || A === 35866) && r.texParameteri(A, 32882, $[S.wrapR]), r.texParameteri(A, 10240, se[S.magFilter]), r.texParameteri(A, 10241, se[S.minFilter])) : (r.texParameteri(A, 10242, 33071), r.texParameteri(A, 10243, 33071), (A === 32879 || A === 35866) && r.texParameteri(A, 32882, 33071), (S.wrapS !== Mt || S.wrapT !== Mt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(A, 10240, H(S.magFilter)), r.texParameteri(A, 10241, H(S.minFilter)), S.minFilter !== ct && S.minFilter !== nt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
            let Q = e.get("EXT_texture_filter_anisotropic");
            if (S.type === Tn && e.has("OES_texture_float_linear") === !1 || a === !1 && S.type === Fi && e.has("OES_texture_half_float_linear") === !1) return;
            (S.anisotropy > 1 || n.get(S).__currentAnisotropy) && (r.texParameterf(A, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, i.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy);
        }
    }
    function ye(A, S) {
        A.__webglInit === void 0 && (A.__webglInit = !0, S.addEventListener("dispose", B), A.__webglTexture = r.createTexture(), o.memory.textures++);
    }
    function V(A, S, q) {
        let Q = 3553;
        S.isDataTexture2DArray && (Q = 35866), S.isDataTexture3D && (Q = 32879), ye(A, S), t.activeTexture(33984 + q), t.bindTexture(Q, A.__webglTexture), r.pixelStorei(37440, S.flipY), r.pixelStorei(37441, S.premultiplyAlpha), r.pixelStorei(3317, S.unpackAlignment), r.pixelStorei(37443, 0);
        let me = y(S) && M(S.image) === !1, G = p(S.image, me, !1, u);
        G = we(S, G);
        let _e = M(G) || a, xe = s.convert(S.format, S.encoding), re = s.convert(S.type), ie = R(S.internalFormat, xe, re, S.encoding, S.isVideoTexture);
        pe(Q, S, _e);
        let Re, L = S.mipmaps, fe = a && S.isVideoTexture !== !0, ae = A.__version === void 0, be = P(S, G, _e);
        if (S.isDepthTexture) ie = 6402, a ? S.type === Tn ? ie = 36012 : S.type === so ? ie = 33190 : S.type === Ni ? ie = 35056 : ie = 33189 : S.type === Tn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), S.format === Qn && ie === 6402 && S.type !== Ns && S.type !== so && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), S.type = Ns, re = s.convert(S.type)), S.format === Hi && ie === 6402 && (ie = 34041, S.type !== Ni && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), S.type = Ni, re = s.convert(S.type))), fe && ae ? t.texStorage2D(3553, 1, ie, G.width, G.height) : t.texImage2D(3553, 0, ie, G.width, G.height, 0, xe, re, null);
        else if (S.isDataTexture) if (L.length > 0 && _e) {
            fe && ae && t.texStorage2D(3553, be, ie, L[0].width, L[0].height);
            for(let J = 0, Me = L.length; J < Me; J++)Re = L[J], fe ? t.texSubImage2D(3553, 0, 0, 0, Re.width, Re.height, xe, re, Re.data) : t.texImage2D(3553, J, ie, Re.width, Re.height, 0, xe, re, Re.data);
            S.generateMipmaps = !1;
        } else fe ? (ae && t.texStorage2D(3553, be, ie, G.width, G.height), t.texSubImage2D(3553, 0, 0, 0, G.width, G.height, xe, re, G.data)) : t.texImage2D(3553, 0, ie, G.width, G.height, 0, xe, re, G.data);
        else if (S.isCompressedTexture) {
            fe && ae && t.texStorage2D(3553, be, ie, L[0].width, L[0].height);
            for(let J1 = 0, Me1 = L.length; J1 < Me1; J1++)Re = L[J1], S.format !== wt ? xe !== null ? fe ? t.compressedTexSubImage2D(3553, J1, 0, 0, Re.width, Re.height, xe, Re.data) : t.compressedTexImage2D(3553, J1, ie, Re.width, Re.height, 0, Re.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : fe ? t.texSubImage2D(3553, J1, 0, 0, Re.width, Re.height, xe, re, Re.data) : t.texImage2D(3553, J1, ie, Re.width, Re.height, 0, xe, re, Re.data);
        } else if (S.isDataTexture2DArray) fe ? (ae && t.texStorage3D(35866, be, ie, G.width, G.height, G.depth), t.texSubImage3D(35866, 0, 0, 0, 0, G.width, G.height, G.depth, xe, re, G.data)) : t.texImage3D(35866, 0, ie, G.width, G.height, G.depth, 0, xe, re, G.data);
        else if (S.isDataTexture3D) fe ? (ae && t.texStorage3D(32879, be, ie, G.width, G.height, G.depth), t.texSubImage3D(32879, 0, 0, 0, 0, G.width, G.height, G.depth, xe, re, G.data)) : t.texImage3D(32879, 0, ie, G.width, G.height, G.depth, 0, xe, re, G.data);
        else if (S.isFramebufferTexture) fe && ae ? t.texStorage2D(3553, be, ie, G.width, G.height) : t.texImage2D(3553, 0, ie, G.width, G.height, 0, xe, re, null);
        else if (L.length > 0 && _e) {
            fe && ae && t.texStorage2D(3553, be, ie, L[0].width, L[0].height);
            for(let J2 = 0, Me2 = L.length; J2 < Me2; J2++)Re = L[J2], fe ? t.texSubImage2D(3553, J2, 0, 0, xe, re, Re) : t.texImage2D(3553, J2, ie, xe, re, Re);
            S.generateMipmaps = !1;
        } else fe ? (ae && t.texStorage2D(3553, be, ie, G.width, G.height), t.texSubImage2D(3553, 0, 0, 0, xe, re, G)) : t.texImage2D(3553, 0, ie, xe, re, G);
        b(S, _e) && T(Q), A.__version = S.version, S.onUpdate && S.onUpdate(S);
    }
    function Ve(A, S, q) {
        if (S.image.length !== 6) return;
        ye(A, S), t.activeTexture(33984 + q), t.bindTexture(34067, A.__webglTexture), r.pixelStorei(37440, S.flipY), r.pixelStorei(37441, S.premultiplyAlpha), r.pixelStorei(3317, S.unpackAlignment), r.pixelStorei(37443, 0);
        let Q = S && (S.isCompressedTexture || S.image[0].isCompressedTexture), me = S.image[0] && S.image[0].isDataTexture, G = [];
        for(let J = 0; J < 6; J++)!Q && !me ? G[J] = p(S.image[J], !1, !0, c) : G[J] = me ? S.image[J].image : S.image[J], G[J] = we(S, G[J]);
        let _e = G[0], xe = M(_e) || a, re = s.convert(S.format, S.encoding), ie = s.convert(S.type), Re = R(S.internalFormat, re, ie, S.encoding), L = a && S.isVideoTexture !== !0, fe = A.__version === void 0, ae = P(S, _e, xe);
        pe(34067, S, xe);
        let be;
        if (Q) {
            L && fe && t.texStorage2D(34067, ae, Re, _e.width, _e.height);
            for(let J1 = 0; J1 < 6; J1++){
                be = G[J1].mipmaps;
                for(let Me = 0; Me < be.length; Me++){
                    let Ne = be[Me];
                    S.format !== wt ? re !== null ? L ? t.compressedTexSubImage2D(34069 + J1, Me, 0, 0, Ne.width, Ne.height, re, Ne.data) : t.compressedTexImage2D(34069 + J1, Me, Re, Ne.width, Ne.height, 0, Ne.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : L ? t.texSubImage2D(34069 + J1, Me, 0, 0, Ne.width, Ne.height, re, ie, Ne.data) : t.texImage2D(34069 + J1, Me, Re, Ne.width, Ne.height, 0, re, ie, Ne.data);
                }
            }
        } else {
            be = S.mipmaps, L && fe && (be.length > 0 && ae++, t.texStorage2D(34067, ae, Re, G[0].width, G[0].height));
            for(let J2 = 0; J2 < 6; J2++)if (me) {
                L ? t.texSubImage2D(34069 + J2, 0, 0, 0, G[J2].width, G[J2].height, re, ie, G[J2].data) : t.texImage2D(34069 + J2, 0, Re, G[J2].width, G[J2].height, 0, re, ie, G[J2].data);
                for(let Me1 = 0; Me1 < be.length; Me1++){
                    let je = be[Me1].image[J2].image;
                    L ? t.texSubImage2D(34069 + J2, Me1 + 1, 0, 0, je.width, je.height, re, ie, je.data) : t.texImage2D(34069 + J2, Me1 + 1, Re, je.width, je.height, 0, re, ie, je.data);
                }
            } else {
                L ? t.texSubImage2D(34069 + J2, 0, 0, 0, re, ie, G[J2]) : t.texImage2D(34069 + J2, 0, Re, re, ie, G[J2]);
                for(let Me2 = 0; Me2 < be.length; Me2++){
                    let Ne1 = be[Me2];
                    L ? t.texSubImage2D(34069 + J2, Me2 + 1, 0, 0, re, ie, Ne1.image[J2]) : t.texImage2D(34069 + J2, Me2 + 1, Re, re, ie, Ne1.image[J2]);
                }
            }
        }
        b(S, xe) && T(34067), A.__version = S.version, S.onUpdate && S.onUpdate(S);
    }
    function ge(A, S, q, Q, me) {
        let G = s.convert(q.format, q.encoding), _e = s.convert(q.type), xe = R(q.internalFormat, G, _e, q.encoding);
        n.get(S).__hasExternalTextures || (me === 32879 || me === 35866 ? t.texImage3D(me, 0, xe, S.width, S.height, S.depth, 0, G, _e, null) : t.texImage2D(me, 0, xe, S.width, S.height, 0, G, _e, null)), t.bindFramebuffer(36160, A), S.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, Q, me, n.get(q).__webglTexture, 0, ce(S)) : r.framebufferTexture2D(36160, Q, me, n.get(q).__webglTexture, 0), t.bindFramebuffer(36160, null);
    }
    function Se(A, S, q) {
        if (r.bindRenderbuffer(36161, A), S.depthBuffer && !S.stencilBuffer) {
            let Q = 33189;
            if (q || S.useRenderToTexture) {
                let me = S.depthTexture;
                me && me.isDepthTexture && (me.type === Tn ? Q = 36012 : me.type === so && (Q = 33190));
                let G = ce(S);
                S.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, G, Q, S.width, S.height) : r.renderbufferStorageMultisample(36161, G, Q, S.width, S.height);
            } else r.renderbufferStorage(36161, Q, S.width, S.height);
            r.framebufferRenderbuffer(36160, 36096, 36161, A);
        } else if (S.depthBuffer && S.stencilBuffer) {
            let Q1 = ce(S);
            q && S.useRenderbuffer ? r.renderbufferStorageMultisample(36161, Q1, 35056, S.width, S.height) : S.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, Q1, 35056, S.width, S.height) : r.renderbufferStorage(36161, 34041, S.width, S.height), r.framebufferRenderbuffer(36160, 33306, 36161, A);
        } else {
            let Q2 = S.isWebGLMultipleRenderTargets === !0 ? S.texture[0] : S.texture, me1 = s.convert(Q2.format, Q2.encoding), G1 = s.convert(Q2.type), _e = R(Q2.internalFormat, me1, G1, Q2.encoding), xe = ce(S);
            q && S.useRenderbuffer ? r.renderbufferStorageMultisample(36161, xe, _e, S.width, S.height) : S.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, xe, _e, S.width, S.height) : r.renderbufferStorage(36161, _e, S.width, S.height);
        }
        r.bindRenderbuffer(36161, null);
    }
    function le(A, S) {
        if (S && S.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(36160, A), !(S.depthTexture && S.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), W(S.depthTexture, 0);
        let Q = n.get(S.depthTexture).__webglTexture, me = ce(S);
        if (S.depthTexture.format === Qn) S.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, me) : r.framebufferTexture2D(36160, 36096, 3553, Q, 0);
        else if (S.depthTexture.format === Hi) S.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, me) : r.framebufferTexture2D(36160, 33306, 3553, Q, 0);
        else throw new Error("Unknown depthTexture format");
    }
    function Le(A) {
        let S = n.get(A), q = A.isWebGLCubeRenderTarget === !0;
        if (A.depthTexture && !S.__autoAllocateDepthBuffer) {
            if (q) throw new Error("target.depthTexture not supported in Cube render targets");
            le(S.__webglFramebuffer, A);
        } else if (q) {
            S.__webglDepthbuffer = [];
            for(let Q = 0; Q < 6; Q++)t.bindFramebuffer(36160, S.__webglFramebuffer[Q]), S.__webglDepthbuffer[Q] = r.createRenderbuffer(), Se(S.__webglDepthbuffer[Q], A, !1);
        } else t.bindFramebuffer(36160, S.__webglFramebuffer), S.__webglDepthbuffer = r.createRenderbuffer(), Se(S.__webglDepthbuffer, A, !1);
        t.bindFramebuffer(36160, null);
    }
    function Ee(A, S, q) {
        let Q = n.get(A);
        S !== void 0 && ge(Q.__webglFramebuffer, A, A.texture, 36064, 3553), q !== void 0 && Le(A);
    }
    function X(A) {
        let S = A.texture, q = n.get(A), Q = n.get(S);
        A.addEventListener("dispose", v), A.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = r.createTexture()), Q.__version = S.version, o.memory.textures++);
        let me = A.isWebGLCubeRenderTarget === !0, G = A.isWebGLMultipleRenderTargets === !0, _e = S.isDataTexture3D || S.isDataTexture2DArray, xe = M(A) || a;
        if (me) {
            q.__webglFramebuffer = [];
            for(let re = 0; re < 6; re++)q.__webglFramebuffer[re] = r.createFramebuffer();
        } else if (q.__webglFramebuffer = r.createFramebuffer(), G) if (i.drawBuffers) {
            let re1 = A.texture;
            for(let ie = 0, Re = re1.length; ie < Re; ie++){
                let L = n.get(re1[ie]);
                L.__webglTexture === void 0 && (L.__webglTexture = r.createTexture(), o.memory.textures++);
            }
        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        else if (A.useRenderbuffer) if (a) {
            q.__webglMultisampledFramebuffer = r.createFramebuffer(), q.__webglColorRenderbuffer = r.createRenderbuffer(), r.bindRenderbuffer(36161, q.__webglColorRenderbuffer);
            let re2 = s.convert(S.format, S.encoding), ie1 = s.convert(S.type), Re1 = R(S.internalFormat, re2, ie1, S.encoding), L1 = ce(A);
            r.renderbufferStorageMultisample(36161, L1, Re1, A.width, A.height), t.bindFramebuffer(36160, q.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064, 36161, q.__webglColorRenderbuffer), r.bindRenderbuffer(36161, null), A.depthBuffer && (q.__webglDepthRenderbuffer = r.createRenderbuffer(), Se(q.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(36160, null);
        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (me) {
            t.bindTexture(34067, Q.__webglTexture), pe(34067, S, xe);
            for(let re3 = 0; re3 < 6; re3++)ge(q.__webglFramebuffer[re3], A, S, 36064, 34069 + re3);
            b(S, xe) && T(34067), t.unbindTexture();
        } else if (G) {
            let re4 = A.texture;
            for(let ie2 = 0, Re2 = re4.length; ie2 < Re2; ie2++){
                let L2 = re4[ie2], fe = n.get(L2);
                t.bindTexture(3553, fe.__webglTexture), pe(3553, L2, xe), ge(q.__webglFramebuffer, A, L2, 36064 + ie2, 3553), b(L2, xe) && T(3553);
            }
            t.unbindTexture();
        } else {
            let re5 = 3553;
            _e && (a ? re5 = S.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(re5, Q.__webglTexture), pe(re5, S, xe), ge(q.__webglFramebuffer, A, S, 36064, re5), b(S, xe) && T(re5), t.unbindTexture();
        }
        A.depthBuffer && Le(A);
    }
    function ee(A) {
        let S = M(A) || a, q = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [
            A.texture
        ];
        for(let Q = 0, me = q.length; Q < me; Q++){
            let G = q[Q];
            if (b(G, S)) {
                let _e = A.isWebGLCubeRenderTarget ? 34067 : 3553, xe = n.get(G).__webglTexture;
                t.bindTexture(_e, xe), T(_e), t.unbindTexture();
            }
        }
    }
    function K(A) {
        if (A.useRenderbuffer) if (a) {
            let S = A.width, q = A.height, Q = 16384, me = [
                36064
            ], G = A.stencilBuffer ? 33306 : 36096;
            A.depthBuffer && me.push(G), A.ignoreDepthForMultisampleCopy || (A.depthBuffer && (Q |= 256), A.stencilBuffer && (Q |= 1024));
            let _e = n.get(A);
            t.bindFramebuffer(36008, _e.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, _e.__webglFramebuffer), A.ignoreDepthForMultisampleCopy && (r.invalidateFramebuffer(36008, [
                G
            ]), r.invalidateFramebuffer(36009, [
                G
            ])), r.blitFramebuffer(0, 0, S, q, 0, 0, S, q, Q, 9728), r.invalidateFramebuffer(36008, me), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, _e.__webglMultisampledFramebuffer);
        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    }
    function ce(A) {
        return a && (A.useRenderbuffer || A.useRenderToTexture) ? Math.min(h, A.samples) : 0;
    }
    function oe(A) {
        let S = o.render.frame;
        m.get(A) !== S && (m.set(A, S), A.update());
    }
    function we(A, S) {
        let q = A.encoding, Q = A.format, me = A.type;
        return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || A.format === Ha || q !== Fn && (q === Ze ? a === !1 ? e.has("EXT_sRGB") === !0 && Q === wt ? (A.format = Ha, A.minFilter = nt, A.generateMipmaps = !1) : S = fn.sRGBToLinear(S) : (Q !== wt || me !== Ln) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", q)), S;
    }
    let Te = !1, ze = !1;
    function Je(A, S) {
        A && A.isWebGLRenderTarget && (Te === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Te = !0), A = A.texture), W(A, S);
    }
    function qe(A, S) {
        A && A.isWebGLCubeRenderTarget && (ze === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), ze = !0), A = A.texture), k(A, S);
    }
    this.allocateTextureUnit = F, this.resetTextureUnits = z, this.setTexture2D = W, this.setTexture2DArray = j, this.setTexture3D = ue, this.setTextureCube = k, this.rebindTextures = Ee, this.setupRenderTarget = X, this.updateRenderTargetMipmap = ee, this.updateMultisampleRenderTarget = K, this.setupDepthRenderbuffer = Le, this.setupFrameBufferTexture = ge, this.safeSetTexture2D = Je, this.safeSetTextureCube = qe;
}
function Tx(r, e, t) {
    let n = t.isWebGL2;
    function i(s, o = null) {
        let a;
        if (s === Ln) return 5121;
        if (s === _d) return 32819;
        if (s === vd) return 32820;
        if (s === gd) return 5120;
        if (s === xd) return 5122;
        if (s === Ns) return 5123;
        if (s === yd) return 5124;
        if (s === so) return 5125;
        if (s === Tn) return 5126;
        if (s === Fi) return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
        if (s === Md) return 6406;
        if (s === wt) return 6408;
        if (s === wd) return 6409;
        if (s === bd) return 6410;
        if (s === Qn) return 6402;
        if (s === Hi) return 34041;
        if (s === Sd) return 6403;
        if (s === Ha) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
        if (s === Ed) return 36244;
        if (s === Td) return 33319;
        if (s === Ad) return 33320;
        if (s === Rd) return 36249;
        if (s === Ko || s === Qo || s === ea || s === ta) if (o === Ze) if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
            if (s === Ko) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (s === Qo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (s === ea) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (s === ta) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
        else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
            if (s === Ko) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (s === Qo) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (s === ea) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (s === ta) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else return null;
        if (s === Ql || s === ec || s === tc || s === nc) if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
            if (s === Ql) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (s === ec) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (s === tc) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (s === nc) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        } else return null;
        if (s === Cd) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (s === ic || s === sc) if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
            if (s === ic) return o === Ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
            if (s === sc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
        } else return null;
        if (s === rc || s === oc || s === ac || s === lc || s === cc || s === hc || s === uc || s === dc || s === fc || s === pc || s === mc || s === gc || s === xc || s === yc) if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
            if (s === rc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
            if (s === oc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
            if (s === ac) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
            if (s === lc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
            if (s === cc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
            if (s === hc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
            if (s === uc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
            if (s === dc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
            if (s === fc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
            if (s === pc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
            if (s === mc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
            if (s === gc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
            if (s === xc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
            if (s === yc) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
        } else return null;
        if (s === _c) if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
            if (s === _c) return o === Ze ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        } else return null;
        if (s === Ni) return n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null);
    }
    return {
        convert: i
    };
}
var mo = class extends dt {
    constructor(e = []){
        super(), this.cameras = e;
    }
};
mo.prototype.isArrayCamera = !0;
var An = class extends Ie {
    constructor(){
        super(), this.type = "Group";
    }
};
An.prototype.isGroup = !0;
var Ax = {
    type: "move"
}, Ds = class {
    constructor(){
        this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new An, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
        }), this._hand;
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new An, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new w, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new w), this._targetRay;
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new An, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new w, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new w), this._grip;
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
    }
    update(e, t, n) {
        let i = null, s = null, o = null, a = this._targetRay, l = this._grip, c = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred") if (a !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ax))), c && e.hand) {
            o = !0;
            for (let x of e.hand.values()){
                let _ = t.getJointPose(x, n);
                if (c.joints[x.jointName] === void 0) {
                    let p = new An;
                    p.matrixAutoUpdate = !1, p.visible = !1, c.joints[x.jointName] = p, c.add(p);
                }
                let g = c.joints[x.jointName];
                _ !== null && (g.matrix.fromArray(_.transform.matrix), g.matrix.decompose(g.position, g.rotation, g.scale), g.jointRadius = _.radius), g.visible = _ !== null;
            }
            let u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), f = .02, m = .005;
            c.inputState.pinching && d > f + m ? (c.inputState.pinching = !1, this.dispatchEvent({
                type: "pinchend",
                handedness: e.handedness,
                target: this
            })) : !c.inputState.pinching && d <= f - m && (c.inputState.pinching = !0, this.dispatchEvent({
                type: "pinchstart",
                handedness: e.handedness,
                target: this
            }));
        } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
        return a !== null && (a.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
    }
}, Zs = class extends at {
    constructor(e, t, n, i, s, o, a, l, c, u){
        if (u = u !== void 0 ? u : Qn, u !== Qn && u !== Hi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && u === Qn && (n = Ns), n === void 0 && u === Hi && (n = Ni), super(null, i, s, o, a, l, u, n, c), this.image = {
            width: e,
            height: t
        }, this.magFilter = a !== void 0 ? a : ct, this.minFilter = l !== void 0 ? l : ct, this.flipY = !1, this.generateMipmaps = !1;
    }
};
Zs.prototype.isDepthTexture = !0;
var Qa = class extends dn {
    constructor(e, t){
        super();
        let n = this, i = null, s = 1, o = null, a = "local-floor", l = e.extensions.has("WEBGL_multisampled_render_to_texture"), c = null, u = null, h = null, d = null, f = !1, m = null, x = t.getContextAttributes(), _ = null, g = null, p = [], M = new Map, y = new dt;
        y.layers.enable(1), y.viewport = new Ge;
        let b = new dt;
        b.layers.enable(2), b.viewport = new Ge;
        let T = [
            y,
            b
        ], R = new mo;
        R.layers.enable(1), R.layers.enable(2);
        let P = null, H = null;
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(k) {
            let $ = p[k];
            return $ === void 0 && ($ = new Ds, p[k] = $), $.getTargetRaySpace();
        }, this.getControllerGrip = function(k) {
            let $ = p[k];
            return $ === void 0 && ($ = new Ds, p[k] = $), $.getGripSpace();
        }, this.getHand = function(k) {
            let $ = p[k];
            return $ === void 0 && ($ = new Ds, p[k] = $), $.getHandSpace();
        };
        function B(k) {
            let $ = M.get(k.inputSource);
            $ && $.dispatchEvent({
                type: k.type,
                data: k.inputSource
            });
        }
        function v() {
            M.forEach(function(k, $) {
                k.disconnect($);
            }), M.clear(), P = null, H = null, e.setRenderTarget(_), d = null, h = null, u = null, i = null, g = null, ue.stop(), n.isPresenting = !1, n.dispatchEvent({
                type: "sessionend"
            });
        }
        this.setFramebufferScaleFactor = function(k) {
            s = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
        }, this.setReferenceSpaceType = function(k) {
            a = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
        }, this.getReferenceSpace = function() {
            return o;
        }, this.getBaseLayer = function() {
            return h !== null ? h : d;
        }, this.getBinding = function() {
            return u;
        }, this.getFrame = function() {
            return m;
        }, this.getSession = function() {
            return i;
        }, this.setSession = async function(k) {
            if (i = k, i !== null) {
                if (_ = e.getRenderTarget(), i.addEventListener("select", B), i.addEventListener("selectstart", B), i.addEventListener("selectend", B), i.addEventListener("squeeze", B), i.addEventListener("squeezestart", B), i.addEventListener("squeezeend", B), i.addEventListener("end", v), i.addEventListener("inputsourceschange", C), x.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
                    let $ = {
                        antialias: i.renderState.layers === void 0 ? x.antialias : !0,
                        alpha: x.alpha,
                        depth: x.depth,
                        stencil: x.stencil,
                        framebufferScaleFactor: s
                    };
                    d = new XRWebGLLayer(i, t, $), i.updateRenderState({
                        baseLayer: d
                    }), g = new At(d.framebufferWidth, d.framebufferHeight, {
                        format: wt,
                        type: Ln,
                        encoding: e.outputEncoding
                    });
                } else {
                    f = x.antialias;
                    let $1 = null, se = null, pe = null;
                    x.depth && (pe = x.stencil ? 35056 : 33190, $1 = x.stencil ? Hi : Qn, se = x.stencil ? Ni : Ns);
                    let ye = {
                        colorFormat: e.outputEncoding === Ze ? 35907 : 32856,
                        depthFormat: pe,
                        scaleFactor: s
                    };
                    u = new XRWebGLBinding(i, t), h = u.createProjectionLayer(ye), i.updateRenderState({
                        layers: [
                            h
                        ]
                    }), f ? g = new Hs(h.textureWidth, h.textureHeight, {
                        format: wt,
                        type: Ln,
                        depthTexture: new Zs(h.textureWidth, h.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, $1),
                        stencilBuffer: x.stencil,
                        ignoreDepth: h.ignoreDepthValues,
                        useRenderToTexture: l,
                        encoding: e.outputEncoding
                    }) : g = new At(h.textureWidth, h.textureHeight, {
                        format: wt,
                        type: Ln,
                        depthTexture: new Zs(h.textureWidth, h.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, $1),
                        stencilBuffer: x.stencil,
                        ignoreDepth: h.ignoreDepthValues,
                        encoding: e.outputEncoding
                    });
                }
                g.isXRRenderTarget = !0, this.setFoveation(1), o = await i.requestReferenceSpace(a), ue.setContext(i), ue.start(), n.isPresenting = !0, n.dispatchEvent({
                    type: "sessionstart"
                });
            }
        };
        function C(k) {
            let $ = i.inputSources;
            for(let se = 0; se < p.length; se++)M.set($[se], p[se]);
            for(let se1 = 0; se1 < k.removed.length; se1++){
                let pe = k.removed[se1], ye = M.get(pe);
                ye && (ye.dispatchEvent({
                    type: "disconnected",
                    data: pe
                }), M.delete(pe));
            }
            for(let se2 = 0; se2 < k.added.length; se2++){
                let pe1 = k.added[se2], ye1 = M.get(pe1);
                ye1 && ye1.dispatchEvent({
                    type: "connected",
                    data: pe1
                });
            }
        }
        let D = new w, N = new w;
        function z(k, $, se) {
            D.setFromMatrixPosition($.matrixWorld), N.setFromMatrixPosition(se.matrixWorld);
            let pe = D.distanceTo(N), ye = $.projectionMatrix.elements, V = se.projectionMatrix.elements, Ve = ye[14] / (ye[10] - 1), ge = ye[14] / (ye[10] + 1), Se = (ye[9] + 1) / ye[5], le = (ye[9] - 1) / ye[5], Le = (ye[8] - 1) / ye[0], Ee = (V[8] + 1) / V[0], X = Ve * Le, ee = Ve * Ee, K = pe / (-Le + Ee), ce = K * -Le;
            $.matrixWorld.decompose(k.position, k.quaternion, k.scale), k.translateX(ce), k.translateZ(K), k.matrixWorld.compose(k.position, k.quaternion, k.scale), k.matrixWorldInverse.copy(k.matrixWorld).invert();
            let oe = Ve + K, we = ge + K, Te = X - ce, ze = ee + (pe - ce), Je = Se * ge / we * oe, qe = le * ge / we * oe;
            k.projectionMatrix.makePerspective(Te, ze, Je, qe, oe, we);
        }
        function F(k, $) {
            $ === null ? k.matrixWorld.copy(k.matrix) : k.matrixWorld.multiplyMatrices($.matrixWorld, k.matrix), k.matrixWorldInverse.copy(k.matrixWorld).invert();
        }
        this.updateCamera = function(k) {
            if (i === null) return;
            R.near = b.near = y.near = k.near, R.far = b.far = y.far = k.far, (P !== R.near || H !== R.far) && (i.updateRenderState({
                depthNear: R.near,
                depthFar: R.far
            }), P = R.near, H = R.far);
            let $ = k.parent, se = R.cameras;
            F(R, $);
            for(let ye = 0; ye < se.length; ye++)F(se[ye], $);
            R.matrixWorld.decompose(R.position, R.quaternion, R.scale), k.position.copy(R.position), k.quaternion.copy(R.quaternion), k.scale.copy(R.scale), k.matrix.copy(R.matrix), k.matrixWorld.copy(R.matrixWorld);
            let pe = k.children;
            for(let ye1 = 0, V = pe.length; ye1 < V; ye1++)pe[ye1].updateMatrixWorld(!0);
            se.length === 2 ? z(R, y, b) : R.projectionMatrix.copy(y.projectionMatrix);
        }, this.getCamera = function() {
            return R;
        }, this.getFoveation = function() {
            if (h !== null) return h.fixedFoveation;
            if (d !== null) return d.fixedFoveation;
        }, this.setFoveation = function(k) {
            h !== null && (h.fixedFoveation = k), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = k);
        };
        let W = null;
        function j(k, $) {
            if (c = $.getViewerPose(o), m = $, c !== null) {
                let pe = c.views;
                d !== null && (e.setRenderTargetFramebuffer(g, d.framebuffer), e.setRenderTarget(g));
                let ye = !1;
                pe.length !== R.cameras.length && (R.cameras.length = 0, ye = !0);
                for(let V = 0; V < pe.length; V++){
                    let Ve = pe[V], ge = null;
                    if (d !== null) ge = d.getViewport(Ve);
                    else {
                        let le = u.getViewSubImage(h, Ve);
                        ge = le.viewport, V === 0 && (e.setRenderTargetTextures(g, le.colorTexture, h.ignoreDepthValues ? void 0 : le.depthStencilTexture), e.setRenderTarget(g));
                    }
                    let Se = T[V];
                    Se.matrix.fromArray(Ve.transform.matrix), Se.projectionMatrix.fromArray(Ve.projectionMatrix), Se.viewport.set(ge.x, ge.y, ge.width, ge.height), V === 0 && R.matrix.copy(Se.matrix), ye === !0 && R.cameras.push(Se);
                }
            }
            let se = i.inputSources;
            for(let pe1 = 0; pe1 < p.length; pe1++){
                let ye1 = p[pe1], V1 = se[pe1];
                ye1.update(V1, $, o);
            }
            W && W(k, $), m = null;
        }
        let ue = new _u;
        ue.setAnimationLoop(j), this.setAnimationLoop = function(k) {
            W = k;
        }, this.dispose = function() {};
    }
};
function Rx(r) {
    function e(g, p) {
        g.fogColor.value.copy(p.color), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
    }
    function t(g, p, M, y, b) {
        p.isMeshBasicMaterial ? n(g, p) : p.isMeshLambertMaterial ? (n(g, p), l(g, p)) : p.isMeshToonMaterial ? (n(g, p), u(g, p)) : p.isMeshPhongMaterial ? (n(g, p), c(g, p)) : p.isMeshStandardMaterial ? (n(g, p), p.isMeshPhysicalMaterial ? d(g, p, b) : h(g, p)) : p.isMeshMatcapMaterial ? (n(g, p), f(g, p)) : p.isMeshDepthMaterial ? (n(g, p), m(g, p)) : p.isMeshDistanceMaterial ? (n(g, p), x(g, p)) : p.isMeshNormalMaterial ? (n(g, p), _(g, p)) : p.isLineBasicMaterial ? (i(g, p), p.isLineDashedMaterial && s(g, p)) : p.isPointsMaterial ? o(g, p, M, y) : p.isSpriteMaterial ? a(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
    }
    function n(g, p) {
        g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap), p.specularMap && (g.specularMap.value = p.specularMap), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
        let M = r.get(p).envMap;
        M && (g.envMap.value = M, g.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity);
        let y;
        p.map ? y = p.map : p.specularMap ? y = p.specularMap : p.displacementMap ? y = p.displacementMap : p.normalMap ? y = p.normalMap : p.bumpMap ? y = p.bumpMap : p.roughnessMap ? y = p.roughnessMap : p.metalnessMap ? y = p.metalnessMap : p.alphaMap ? y = p.alphaMap : p.emissiveMap ? y = p.emissiveMap : p.clearcoatMap ? y = p.clearcoatMap : p.clearcoatNormalMap ? y = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? y = p.clearcoatRoughnessMap : p.specularIntensityMap ? y = p.specularIntensityMap : p.specularColorMap ? y = p.specularColorMap : p.transmissionMap ? y = p.transmissionMap : p.thicknessMap ? y = p.thicknessMap : p.sheenColorMap ? y = p.sheenColorMap : p.sheenRoughnessMap && (y = p.sheenRoughnessMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), g.uvTransform.value.copy(y.matrix));
        let b;
        p.aoMap ? b = p.aoMap : p.lightMap && (b = p.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), g.uv2Transform.value.copy(b.matrix));
    }
    function i(g, p) {
        g.diffuse.value.copy(p.color), g.opacity.value = p.opacity;
    }
    function s(g, p) {
        g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
    }
    function o(g, p, M, y) {
        g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * M, g.scale.value = y * .5, p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
        let b;
        p.map ? b = p.map : p.alphaMap && (b = p.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), g.uvTransform.value.copy(b.matrix));
    }
    function a(g, p) {
        g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map), p.alphaMap && (g.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
        let M;
        p.map ? M = p.map : p.alphaMap && (M = p.alphaMap), M !== void 0 && (M.matrixAutoUpdate === !0 && M.updateMatrix(), g.uvTransform.value.copy(M.matrix));
    }
    function l(g, p) {
        p.emissiveMap && (g.emissiveMap.value = p.emissiveMap);
    }
    function c(g, p) {
        g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === lt && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === lt && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
    }
    function u(g, p) {
        p.gradientMap && (g.gradientMap.value = p.gradientMap), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === lt && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === lt && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
    }
    function h(g, p) {
        g.roughness.value = p.roughness, g.metalness.value = p.metalness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap), p.metalnessMap && (g.metalnessMap.value = p.metalnessMap), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === lt && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === lt && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), r.get(p).envMap && (g.envMapIntensity.value = p.envMapIntensity);
    }
    function d(g, p, M) {
        h(g, p), g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), g.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === lt && g.clearcoatNormalScale.value.negate())), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = M.texture, g.transmissionSamplerSize.value.set(M.width, M.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap);
    }
    function f(g, p) {
        p.matcap && (g.matcap.value = p.matcap), p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === lt && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === lt && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
    }
    function m(g, p) {
        p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
    }
    function x(g, p) {
        p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), g.referencePosition.value.copy(p.referencePosition), g.nearDistance.value = p.nearDistance, g.farDistance.value = p.farDistance;
    }
    function _(g, p) {
        p.bumpMap && (g.bumpMap.value = p.bumpMap, g.bumpScale.value = p.bumpScale, p.side === lt && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, g.normalScale.value.copy(p.normalScale), p.side === lt && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias);
    }
    return {
        refreshFogUniforms: e,
        refreshMaterialUniforms: t
    };
}
function Cx() {
    let r = Us("canvas");
    return r.style.display = "block", r;
}
function Xe(r = {}) {
    let e = r.canvas !== void 0 ? r.canvas : Cx(), t = r.context !== void 0 ? r.context : null, n = r.alpha !== void 0 ? r.alpha : !1, i = r.depth !== void 0 ? r.depth : !0, s = r.stencil !== void 0 ? r.stencil : !0, o = r.antialias !== void 0 ? r.antialias : !1, a = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0, l = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1, c = r.powerPreference !== void 0 ? r.powerPreference : "default", u = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1, h = null, d = null, f = [], m = [];
    this.domElement = e, this.debug = {
        checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Fn, this.physicallyCorrectLights = !1, this.toneMapping = Cn, this.toneMappingExposure = 1;
    let x = this, _ = !1, g = 0, p = 0, M = null, y = -1, b = null, T = new Ge, R = new Ge, P = null, H = e.width, B = e.height, v = 1, C = null, D = null, N = new Ge(0, 0, H, B), z = new Ge(0, 0, H, B), F = !1, W = new Gi, j = !1, ue = !1, k = null, $ = new de, se = new w, pe = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
    };
    function ye() {
        return M === null ? v : 1;
    }
    let V = t;
    function Ve(E, I) {
        for(let U = 0; U < E.length; U++){
            let O = E[U], Y = e.getContext(O, I);
            if (Y !== null) return Y;
        }
        return null;
    }
    try {
        let E = {
            alpha: !0,
            depth: i,
            stencil: s,
            antialias: o,
            premultipliedAlpha: a,
            preserveDrawingBuffer: l,
            powerPreference: c,
            failIfMajorPerformanceCaveat: u
        };
        if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${zl}`), e.addEventListener("webglcontextlost", Re, !1), e.addEventListener("webglcontextrestored", L, !1), V === null) {
            let I = [
                "webgl2",
                "webgl",
                "experimental-webgl"
            ];
            if (x.isWebGL1Renderer === !0 && I.shift(), V = Ve(I, E), V === null) throw Ve(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        V.getShaderPrecisionFormat === void 0 && (V.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            };
        });
    } catch (E1) {
        throw console.error("THREE.WebGLRenderer: " + E1.message), E1;
    }
    let ge, Se, le, Le, Ee, X, ee, K, ce, oe, we, Te, ze, Je, qe, A, S, q, Q, me, G, _e, xe;
    function re() {
        ge = new jm(V), Se = new qm(V, ge, r), ge.init(Se), _e = new Tx(V, ge, Se), le = new Sx(V, ge, Se), Le = new eg(V), Ee = new fx, X = new Ex(V, ge, le, Ee, Se, _e, Le), ee = new Jm(x), K = new $m(x), ce = new mf(V, Se), xe = new Gm(V, ge, ce, Se), oe = new Km(V, ce, Le, xe), we = new sg(V, oe, ce, Le), Q = new ig(V, Se, X), A = new Xm(Ee), Te = new dx(x, ee, K, ge, Se, xe, A), ze = new Rx(Ee), Je = new mx, qe = new Mx(ge, Se), q = new km(x, ee, le, we, n, a), S = new Cu(x, we, Se), me = new Wm(V, ge, Le, Se), G = new Qm(V, ge, Le, Se), Le.programs = Te.programs, x.capabilities = Se, x.extensions = ge, x.properties = Ee, x.renderLists = Je, x.shadowMap = S, x.state = le, x.info = Le;
    }
    re();
    let ie = new Qa(x, V);
    this.xr = ie, this.getContext = function() {
        return V;
    }, this.getContextAttributes = function() {
        return V.getContextAttributes();
    }, this.forceContextLoss = function() {
        let E = ge.get("WEBGL_lose_context");
        E && E.loseContext();
    }, this.forceContextRestore = function() {
        let E = ge.get("WEBGL_lose_context");
        E && E.restoreContext();
    }, this.getPixelRatio = function() {
        return v;
    }, this.setPixelRatio = function(E) {
        E !== void 0 && (v = E, this.setSize(H, B, !1));
    }, this.getSize = function(E) {
        return E.set(H, B);
    }, this.setSize = function(E, I, U) {
        if (ie.isPresenting) {
            console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
            return;
        }
        H = E, B = I, e.width = Math.floor(E * v), e.height = Math.floor(I * v), U !== !1 && (e.style.width = E + "px", e.style.height = I + "px"), this.setViewport(0, 0, E, I);
    }, this.getDrawingBufferSize = function(E) {
        return E.set(H * v, B * v).floor();
    }, this.setDrawingBufferSize = function(E, I, U) {
        H = E, B = I, v = U, e.width = Math.floor(E * U), e.height = Math.floor(I * U), this.setViewport(0, 0, E, I);
    }, this.getCurrentViewport = function(E) {
        return E.copy(T);
    }, this.getViewport = function(E) {
        return E.copy(N);
    }, this.setViewport = function(E, I, U, O) {
        E.isVector4 ? N.set(E.x, E.y, E.z, E.w) : N.set(E, I, U, O), le.viewport(T.copy(N).multiplyScalar(v).floor());
    }, this.getScissor = function(E) {
        return E.copy(z);
    }, this.setScissor = function(E, I, U, O) {
        E.isVector4 ? z.set(E.x, E.y, E.z, E.w) : z.set(E, I, U, O), le.scissor(R.copy(z).multiplyScalar(v).floor());
    }, this.getScissorTest = function() {
        return F;
    }, this.setScissorTest = function(E) {
        le.setScissorTest(F = E);
    }, this.setOpaqueSort = function(E) {
        C = E;
    }, this.setTransparentSort = function(E) {
        D = E;
    }, this.getClearColor = function(E) {
        return E.copy(q.getClearColor());
    }, this.setClearColor = function() {
        q.setClearColor.apply(q, arguments);
    }, this.getClearAlpha = function() {
        return q.getClearAlpha();
    }, this.setClearAlpha = function() {
        q.setClearAlpha.apply(q, arguments);
    }, this.clear = function(E, I, U) {
        let O = 0;
        (E === void 0 || E) && (O |= 16384), (I === void 0 || I) && (O |= 256), (U === void 0 || U) && (O |= 1024), V.clear(O);
    }, this.clearColor = function() {
        this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
        this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
        this.clear(!1, !1, !0);
    }, this.dispose = function() {
        e.removeEventListener("webglcontextlost", Re, !1), e.removeEventListener("webglcontextrestored", L, !1), Je.dispose(), qe.dispose(), Ee.dispose(), ee.dispose(), K.dispose(), we.dispose(), xe.dispose(), Te.dispose(), ie.dispose(), ie.removeEventListener("sessionstart", Ne), ie.removeEventListener("sessionend", je), k && (k.dispose(), k = null), Lt.stop();
    };
    function Re(E) {
        E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0;
    }
    function L() {
        console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
        let E = Le.autoReset, I = S.enabled, U = S.autoUpdate, O = S.needsUpdate, Y = S.type;
        re(), Le.autoReset = E, S.enabled = I, S.autoUpdate = U, S.needsUpdate = O, S.type = Y;
    }
    function fe(E) {
        let I = E.target;
        I.removeEventListener("dispose", fe), ae(I);
    }
    function ae(E) {
        be(E), Ee.remove(E);
    }
    function be(E) {
        let I = Ee.get(E).programs;
        I !== void 0 && (I.forEach(function(U) {
            Te.releaseProgram(U);
        }), E.isShaderMaterial && Te.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, I, U, O, Y, Ae) {
        I === null && (I = pe);
        let Ce = Y.isMesh && Y.matrixWorld.determinant() < 0, De = Ou(E, I, U, O, Y);
        le.setMaterial(O, Ce);
        let Pe = U.index, We = U.attributes.position;
        if (Pe === null) {
            if (We === void 0 || We.count === 0) return;
        } else if (Pe.count === 0) return;
        let Ue = 1;
        O.wireframe === !0 && (Pe = oe.getWireframeAttribute(U), Ue = 2), xe.setup(Y, O, De, U, Pe);
        let He, et = me;
        Pe !== null && (He = ce.get(Pe), et = G, et.setIndex(He));
        let Gn = Pe !== null ? Pe.count : We.count, ci = U.drawRange.start * Ue, ke = U.drawRange.count * Ue, Xt = Ae !== null ? Ae.start * Ue : 0, ut = Ae !== null ? Ae.count * Ue : 1 / 0, Jt = Math.max(ci, Xt), mr = Math.min(Gn, ci + ke, Xt + ut) - 1, Yt = Math.max(0, mr - Jt + 1);
        if (Yt !== 0) {
            if (Y.isMesh) O.wireframe === !0 ? (le.setLineWidth(O.wireframeLinewidth * ye()), et.setMode(1)) : et.setMode(4);
            else if (Y.isLine) {
                let rn = O.linewidth;
                rn === void 0 && (rn = 1), le.setLineWidth(rn * ye()), Y.isLineSegments ? et.setMode(1) : Y.isLineLoop ? et.setMode(2) : et.setMode(3);
            } else Y.isPoints ? et.setMode(0) : Y.isSprite && et.setMode(4);
            if (Y.isInstancedMesh) et.renderInstances(Jt, Yt, Y.count);
            else if (U.isInstancedBufferGeometry) {
                let rn1 = Math.min(U.instanceCount, U._maxInstanceCount);
                et.renderInstances(Jt, Yt, rn1);
            } else et.render(Jt, Yt);
        }
    }, this.compile = function(E, I) {
        d = qe.get(E), d.init(), m.push(d), E.traverseVisible(function(U) {
            U.isLight && U.layers.test(I.layers) && (d.pushLight(U), U.castShadow && d.pushShadow(U));
        }), d.setupLights(x.physicallyCorrectLights), E.traverse(function(U) {
            let O = U.material;
            if (O) if (Array.isArray(O)) for(let Y = 0; Y < O.length; Y++){
                let Ae = O[Y];
                jo(Ae, E, U);
            }
            else jo(O, E, U);
        }), m.pop(), d = null;
    };
    let J = null;
    function Me(E) {
        J && J(E);
    }
    function Ne() {
        Lt.stop();
    }
    function je() {
        Lt.start();
    }
    let Lt = new _u;
    Lt.setAnimationLoop(Me), typeof document < "u" && Lt.setContext(window), this.setAnimationLoop = function(E) {
        J = E, ie.setAnimationLoop(E), E === null ? Lt.stop() : Lt.start();
    }, ie.addEventListener("sessionstart", Ne), ie.addEventListener("sessionend", je), this.render = function(E, I) {
        if (I !== void 0 && I.isCamera !== !0) {
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            return;
        }
        if (_ === !0) return;
        E.autoUpdate === !0 && E.updateMatrixWorld(), I.parent === null && I.updateMatrixWorld(), ie.enabled === !0 && ie.isPresenting === !0 && (ie.cameraAutoUpdate === !0 && ie.updateCamera(I), I = ie.getCamera()), E.isScene === !0 && E.onBeforeRender(x, E, I, M), d = qe.get(E, m.length), d.init(), m.push(d), $.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), W.setFromProjectionMatrix($), ue = this.localClippingEnabled, j = A.init(this.clippingPlanes, ue, I), h = Je.get(E, f.length), h.init(), f.push(h), Qe(E, I, 0, x.sortObjects), h.finish(), x.sortObjects === !0 && h.sort(C, D), j === !0 && A.beginShadows();
        let U = d.state.shadowsArray;
        if (S.render(U, E, I), j === !0 && A.endShadows(), this.info.autoReset === !0 && this.info.reset(), q.render(h, E), d.setupLights(x.physicallyCorrectLights), I.isArrayCamera) {
            let O = I.cameras;
            for(let Y = 0, Ae = O.length; Y < Ae; Y++){
                let Ce = O[Y];
                qt(h, E, Ce, Ce.viewport);
            }
        } else qt(h, E, I);
        M !== null && (X.updateMultisampleRenderTarget(M), X.updateRenderTargetMipmap(M)), E.isScene === !0 && E.onAfterRender(x, E, I), le.buffers.depth.setTest(!0), le.buffers.depth.setMask(!0), le.buffers.color.setMask(!0), le.setPolygonOffset(!1), xe.resetDefaultState(), y = -1, b = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null, f.pop(), f.length > 0 ? h = f[f.length - 1] : h = null;
    };
    function Qe(E, I, U, O) {
        if (E.visible === !1) return;
        if (E.layers.test(I.layers)) {
            if (E.isGroup) U = E.renderOrder;
            else if (E.isLOD) E.autoUpdate === !0 && E.update(I);
            else if (E.isLight) d.pushLight(E), E.castShadow && d.pushShadow(E);
            else if (E.isSprite) {
                if (!E.frustumCulled || W.intersectsSprite(E)) {
                    O && se.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);
                    let Ce = we.update(E), De = E.material;
                    De.visible && h.push(E, Ce, De, U, se.z, null);
                }
            } else if ((E.isMesh || E.isLine || E.isPoints) && (E.isSkinnedMesh && E.skeleton.frame !== Le.render.frame && (E.skeleton.update(), E.skeleton.frame = Le.render.frame), !E.frustumCulled || W.intersectsObject(E))) {
                O && se.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);
                let Ce1 = we.update(E), De1 = E.material;
                if (Array.isArray(De1)) {
                    let Pe = Ce1.groups;
                    for(let We = 0, Ue = Pe.length; We < Ue; We++){
                        let He = Pe[We], et = De1[He.materialIndex];
                        et && et.visible && h.push(E, Ce1, et, U, se.z, He);
                    }
                } else De1.visible && h.push(E, Ce1, De1, U, se.z, null);
            }
        }
        let Ae = E.children;
        for(let Ce2 = 0, De2 = Ae.length; Ce2 < De2; Ce2++)Qe(Ae[Ce2], I, U, O);
    }
    function qt(E, I, U, O) {
        let Y = E.opaque, Ae = E.transmissive, Ce = E.transparent;
        d.setupLightsView(U), Ae.length > 0 && sn(Y, I, U), O && le.viewport(T.copy(O)), Y.length > 0 && pr(Y, I, U), Ae.length > 0 && pr(Ae, I, U), Ce.length > 0 && pr(Ce, I, U);
    }
    function sn(E, I, U) {
        if (k === null) {
            let Ce = o === !0 && Se.isWebGL2 === !0 ? Hs : At;
            k = new Ce(1024, 1024, {
                generateMipmaps: !0,
                type: _e.convert(Fi) !== null ? Fi : Ln,
                minFilter: ms,
                magFilter: ct,
                wrapS: Mt,
                wrapT: Mt,
                useRenderToTexture: ge.has("WEBGL_multisampled_render_to_texture")
            });
        }
        let O = x.getRenderTarget();
        x.setRenderTarget(k), x.clear();
        let Y = x.toneMapping;
        x.toneMapping = Cn, pr(E, I, U), x.toneMapping = Y, X.updateMultisampleRenderTarget(k), X.updateRenderTargetMipmap(k), x.setRenderTarget(O);
    }
    function pr(E, I, U) {
        let O = I.isScene === !0 ? I.overrideMaterial : null;
        for(let Y = 0, Ae = E.length; Y < Ae; Y++){
            let Ce = E[Y], De = Ce.object, Pe = Ce.geometry, We = O === null ? Ce.material : O, Ue = Ce.group;
            De.layers.test(U.layers) && zu(De, I, U, Pe, We, Ue);
        }
    }
    function zu(E, I, U, O, Y, Ae) {
        E.onBeforeRender(x, I, U, O, Y, Ae), E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), Y.onBeforeRender(x, I, U, O, E, Ae), Y.transparent === !0 && Y.side === Ui ? (Y.side = lt, Y.needsUpdate = !0, x.renderBufferDirect(U, I, O, Y, E, Ae), Y.side = Oi, Y.needsUpdate = !0, x.renderBufferDirect(U, I, O, Y, E, Ae), Y.side = Ui) : x.renderBufferDirect(U, I, O, Y, E, Ae), E.onAfterRender(x, I, U, O, Y, Ae);
    }
    function jo(E, I, U) {
        I.isScene !== !0 && (I = pe);
        let O = Ee.get(E), Y = d.state.lights, Ae = d.state.shadowsArray, Ce = Y.state.version, De = Te.getParameters(E, Y.state, Ae, I, U), Pe = Te.getProgramCacheKey(De), We = O.programs;
        O.environment = E.isMeshStandardMaterial ? I.environment : null, O.fog = I.fog, O.envMap = (E.isMeshStandardMaterial ? K : ee).get(E.envMap || O.environment), We === void 0 && (E.addEventListener("dispose", fe), We = new Map, O.programs = We);
        let Ue = We.get(Pe);
        if (Ue !== void 0) {
            if (O.currentProgram === Ue && O.lightsStateVersion === Ce) return Xl(E, De), Ue;
        } else De.uniforms = Te.getUniforms(E), E.onBuild(U, De, x), E.onBeforeCompile(De, x), Ue = Te.acquireProgram(De, Pe), We.set(Pe, Ue), O.uniforms = De.uniforms;
        let He = O.uniforms;
        (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (He.clippingPlanes = A.uniform), Xl(E, De), O.needsLights = Hu(E), O.lightsStateVersion = Ce, O.needsLights && (He.ambientLightColor.value = Y.state.ambient, He.lightProbe.value = Y.state.probe, He.directionalLights.value = Y.state.directional, He.directionalLightShadows.value = Y.state.directionalShadow, He.spotLights.value = Y.state.spot, He.spotLightShadows.value = Y.state.spotShadow, He.rectAreaLights.value = Y.state.rectArea, He.ltc_1.value = Y.state.rectAreaLTC1, He.ltc_2.value = Y.state.rectAreaLTC2, He.pointLights.value = Y.state.point, He.pointLightShadows.value = Y.state.pointShadow, He.hemisphereLights.value = Y.state.hemi, He.directionalShadowMap.value = Y.state.directionalShadowMap, He.directionalShadowMatrix.value = Y.state.directionalShadowMatrix, He.spotShadowMap.value = Y.state.spotShadowMap, He.spotShadowMatrix.value = Y.state.spotShadowMatrix, He.pointShadowMap.value = Y.state.pointShadowMap, He.pointShadowMatrix.value = Y.state.pointShadowMatrix);
        let et = Ue.getUniforms(), Gn = Dn.seqWithValue(et.seq, He);
        return O.currentProgram = Ue, O.uniformsList = Gn, Ue;
    }
    function Xl(E, I) {
        let U = Ee.get(E);
        U.outputEncoding = I.outputEncoding, U.instancing = I.instancing, U.skinning = I.skinning, U.morphTargets = I.morphTargets, U.morphNormals = I.morphNormals, U.morphTargetsCount = I.morphTargetsCount, U.numClippingPlanes = I.numClippingPlanes, U.numIntersection = I.numClipIntersection, U.vertexAlphas = I.vertexAlphas, U.vertexTangents = I.vertexTangents, U.toneMapping = I.toneMapping;
    }
    function Ou(E, I, U, O, Y) {
        I.isScene !== !0 && (I = pe), X.resetTextureUnits();
        let Ae = I.fog, Ce = O.isMeshStandardMaterial ? I.environment : null, De = M === null ? x.outputEncoding : M.isXRRenderTarget === !0 ? M.texture.encoding : Fn, Pe = (O.isMeshStandardMaterial ? K : ee).get(O.envMap || Ce), We = O.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4, Ue = !!O.normalMap && !!U.attributes.tangent, He = !!U.morphAttributes.position, et = !!U.morphAttributes.normal, Gn = U.morphAttributes.position ? U.morphAttributes.position.length : 0, ci = O.toneMapped ? x.toneMapping : Cn, ke = Ee.get(O), Xt = d.state.lights;
        if (j === !0 && (ue === !0 || E !== b)) {
            let zt = E === b && O.id === y;
            A.setState(O, E, zt);
        }
        let ut = !1;
        O.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== Xt.state.version || ke.outputEncoding !== De || Y.isInstancedMesh && ke.instancing === !1 || !Y.isInstancedMesh && ke.instancing === !0 || Y.isSkinnedMesh && ke.skinning === !1 || !Y.isSkinnedMesh && ke.skinning === !0 || ke.envMap !== Pe || O.fog && ke.fog !== Ae || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== A.numPlanes || ke.numIntersection !== A.numIntersection) || ke.vertexAlphas !== We || ke.vertexTangents !== Ue || ke.morphTargets !== He || ke.morphNormals !== et || ke.toneMapping !== ci || Se.isWebGL2 === !0 && ke.morphTargetsCount !== Gn) && (ut = !0) : (ut = !0, ke.__version = O.version);
        let Jt = ke.currentProgram;
        ut === !0 && (Jt = jo(O, I, Y));
        let mr = !1, Yt = !1, rn = !1, _t = Jt.getUniforms(), ys = ke.uniforms;
        if (le.useProgram(Jt.program) && (mr = !0, Yt = !0, rn = !0), O.id !== y && (y = O.id, Yt = !0), mr || b !== E) {
            if (_t.setValue(V, "projectionMatrix", E.projectionMatrix), Se.logarithmicDepthBuffer && _t.setValue(V, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), b !== E && (b = E, Yt = !0, rn = !0), O.isShaderMaterial || O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshStandardMaterial || O.envMap) {
                let zt1 = _t.map.cameraPosition;
                zt1 !== void 0 && zt1.setValue(V, se.setFromMatrixPosition(E.matrixWorld));
            }
            (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && _t.setValue(V, "isOrthographic", E.isOrthographicCamera === !0), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial || O.isShadowMaterial || Y.isSkinnedMesh) && _t.setValue(V, "viewMatrix", E.matrixWorldInverse);
        }
        if (Y.isSkinnedMesh) {
            _t.setOptional(V, Y, "bindMatrix"), _t.setOptional(V, Y, "bindMatrixInverse");
            let zt2 = Y.skeleton;
            zt2 && (Se.floatVertexTextures ? (zt2.boneTexture === null && zt2.computeBoneTexture(), _t.setValue(V, "boneTexture", zt2.boneTexture, X), _t.setValue(V, "boneTextureSize", zt2.boneTextureSize)) : _t.setOptional(V, zt2, "boneMatrices"));
        }
        return !!U && (U.morphAttributes.position !== void 0 || U.morphAttributes.normal !== void 0) && Q.update(Y, U, O, Jt), (Yt || ke.receiveShadow !== Y.receiveShadow) && (ke.receiveShadow = Y.receiveShadow, _t.setValue(V, "receiveShadow", Y.receiveShadow)), Yt && (_t.setValue(V, "toneMappingExposure", x.toneMappingExposure), ke.needsLights && Uu(ys, rn), Ae && O.fog && ze.refreshFogUniforms(ys, Ae), ze.refreshMaterialUniforms(ys, O, v, B, k), Dn.upload(V, ke.uniformsList, ys, X)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (Dn.upload(V, ke.uniformsList, ys, X), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && _t.setValue(V, "center", Y.center), _t.setValue(V, "modelViewMatrix", Y.modelViewMatrix), _t.setValue(V, "normalMatrix", Y.normalMatrix), _t.setValue(V, "modelMatrix", Y.matrixWorld), Jt;
    }
    function Uu(E, I) {
        E.ambientLightColor.needsUpdate = I, E.lightProbe.needsUpdate = I, E.directionalLights.needsUpdate = I, E.directionalLightShadows.needsUpdate = I, E.pointLights.needsUpdate = I, E.pointLightShadows.needsUpdate = I, E.spotLights.needsUpdate = I, E.spotLightShadows.needsUpdate = I, E.rectAreaLights.needsUpdate = I, E.hemisphereLights.needsUpdate = I;
    }
    function Hu(E) {
        return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
        return g;
    }, this.getActiveMipmapLevel = function() {
        return p;
    }, this.getRenderTarget = function() {
        return M;
    }, this.setRenderTargetTextures = function(E, I, U) {
        Ee.get(E.texture).__webglTexture = I, Ee.get(E.depthTexture).__webglTexture = U;
        let O = Ee.get(E);
        O.__hasExternalTextures = !0, O.__hasExternalTextures && (O.__autoAllocateDepthBuffer = U === void 0, O.__autoAllocateDepthBuffer || E.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"), E.useRenderToTexture = !1, E.useRenderbuffer = !0));
    }, this.setRenderTargetFramebuffer = function(E, I) {
        let U = Ee.get(E);
        U.__webglFramebuffer = I, U.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(E, I = 0, U = 0) {
        M = E, g = I, p = U;
        let O = !0;
        if (E) {
            let Pe = Ee.get(E);
            Pe.__useDefaultFramebuffer !== void 0 ? (le.bindFramebuffer(36160, null), O = !1) : Pe.__webglFramebuffer === void 0 ? X.setupRenderTarget(E) : Pe.__hasExternalTextures && X.rebindTextures(E, Ee.get(E.texture).__webglTexture, Ee.get(E.depthTexture).__webglTexture);
        }
        let Y = null, Ae = !1, Ce = !1;
        if (E) {
            let Pe1 = E.texture;
            (Pe1.isDataTexture3D || Pe1.isDataTexture2DArray) && (Ce = !0);
            let We = Ee.get(E).__webglFramebuffer;
            E.isWebGLCubeRenderTarget ? (Y = We[I], Ae = !0) : E.useRenderbuffer ? Y = Ee.get(E).__webglMultisampledFramebuffer : Y = We, T.copy(E.viewport), R.copy(E.scissor), P = E.scissorTest;
        } else T.copy(N).multiplyScalar(v).floor(), R.copy(z).multiplyScalar(v).floor(), P = F;
        if (le.bindFramebuffer(36160, Y) && Se.drawBuffers && O && le.drawBuffers(E, Y), le.viewport(T), le.scissor(R), le.setScissorTest(P), Ae) {
            let Pe2 = Ee.get(E.texture);
            V.framebufferTexture2D(36160, 36064, 34069 + I, Pe2.__webglTexture, U);
        } else if (Ce) {
            let Pe3 = Ee.get(E.texture), We1 = I || 0;
            V.framebufferTextureLayer(36160, 36064, Pe3.__webglTexture, U || 0, We1);
        }
        y = -1;
    }, this.readRenderTargetPixels = function(E, I, U, O, Y, Ae, Ce) {
        if (!(E && E.isWebGLRenderTarget)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            return;
        }
        let De = Ee.get(E).__webglFramebuffer;
        if (E.isWebGLCubeRenderTarget && Ce !== void 0 && (De = De[Ce]), De) {
            le.bindFramebuffer(36160, De);
            try {
                let Pe = E.texture, We = Pe.format, Ue = Pe.type;
                if (We !== wt && _e.convert(We) !== V.getParameter(35739)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    return;
                }
                let He = Ue === Fi && (ge.has("EXT_color_buffer_half_float") || Se.isWebGL2 && ge.has("EXT_color_buffer_float"));
                if (Ue !== Ln && _e.convert(Ue) !== V.getParameter(35738) && !(Ue === Tn && (Se.isWebGL2 || ge.has("OES_texture_float") || ge.has("WEBGL_color_buffer_float"))) && !He) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    return;
                }
                V.checkFramebufferStatus(36160) === 36053 ? I >= 0 && I <= E.width - O && U >= 0 && U <= E.height - Y && V.readPixels(I, U, O, Y, _e.convert(We), _e.convert(Ue), Ae) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
            } finally{
                let Pe1 = M !== null ? Ee.get(M).__webglFramebuffer : null;
                le.bindFramebuffer(36160, Pe1);
            }
        }
    }, this.copyFramebufferToTexture = function(E, I, U = 0) {
        if (I.isFramebufferTexture !== !0) {
            console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
            return;
        }
        let O = Math.pow(2, -U), Y = Math.floor(I.image.width * O), Ae = Math.floor(I.image.height * O);
        X.setTexture2D(I, 0), V.copyTexSubImage2D(3553, U, 0, 0, E.x, E.y, Y, Ae), le.unbindTexture();
    }, this.copyTextureToTexture = function(E, I, U, O = 0) {
        let Y = I.image.width, Ae = I.image.height, Ce = _e.convert(U.format), De = _e.convert(U.type);
        X.setTexture2D(U, 0), V.pixelStorei(37440, U.flipY), V.pixelStorei(37441, U.premultiplyAlpha), V.pixelStorei(3317, U.unpackAlignment), I.isDataTexture ? V.texSubImage2D(3553, O, E.x, E.y, Y, Ae, Ce, De, I.image.data) : I.isCompressedTexture ? V.compressedTexSubImage2D(3553, O, E.x, E.y, I.mipmaps[0].width, I.mipmaps[0].height, Ce, I.mipmaps[0].data) : V.texSubImage2D(3553, O, E.x, E.y, Ce, De, I.image), O === 0 && U.generateMipmaps && V.generateMipmap(3553), le.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, I, U, O, Y = 0) {
        if (x.isWebGL1Renderer) {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            return;
        }
        let Ae = E.max.x - E.min.x + 1, Ce = E.max.y - E.min.y + 1, De = E.max.z - E.min.z + 1, Pe = _e.convert(O.format), We = _e.convert(O.type), Ue;
        if (O.isDataTexture3D) X.setTexture3D(O, 0), Ue = 32879;
        else if (O.isDataTexture2DArray) X.setTexture2DArray(O, 0), Ue = 35866;
        else {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            return;
        }
        V.pixelStorei(37440, O.flipY), V.pixelStorei(37441, O.premultiplyAlpha), V.pixelStorei(3317, O.unpackAlignment);
        let He = V.getParameter(3314), et = V.getParameter(32878), Gn = V.getParameter(3316), ci = V.getParameter(3315), ke = V.getParameter(32877), Xt = U.isCompressedTexture ? U.mipmaps[0] : U.image;
        V.pixelStorei(3314, Xt.width), V.pixelStorei(32878, Xt.height), V.pixelStorei(3316, E.min.x), V.pixelStorei(3315, E.min.y), V.pixelStorei(32877, E.min.z), U.isDataTexture || U.isDataTexture3D ? V.texSubImage3D(Ue, Y, I.x, I.y, I.z, Ae, Ce, De, Pe, We, Xt.data) : U.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), V.compressedTexSubImage3D(Ue, Y, I.x, I.y, I.z, Ae, Ce, De, Pe, Xt.data)) : V.texSubImage3D(Ue, Y, I.x, I.y, I.z, Ae, Ce, De, Pe, We, Xt), V.pixelStorei(3314, He), V.pixelStorei(32878, et), V.pixelStorei(3316, Gn), V.pixelStorei(3315, ci), V.pixelStorei(32877, ke), Y === 0 && O.generateMipmaps && V.generateMipmap(Ue), le.unbindTexture();
    }, this.initTexture = function(E) {
        X.setTexture2D(E, 0), le.unbindTexture();
    }, this.resetState = function() {
        g = 0, p = 0, M = null, le.reset(), xe.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }));
}
Xe.prototype.isWebGLRenderer = !0;
var el = class extends Xe {
};
el.prototype.isWebGL1Renderer = !0;
var qi = class {
    constructor(e, t = 25e-5){
        this.name = "", this.color = new ne(e), this.density = t;
    }
    clone() {
        return new qi(this.color, this.density);
    }
    toJSON() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        };
    }
};
qi.prototype.isFogExp2 = !0;
var Xi = class {
    constructor(e, t = 1, n = 1e3){
        this.name = "", this.color = new ne(e), this.near = t, this.far = n;
    }
    clone() {
        return new Xi(this.color, this.near, this.far);
    }
    toJSON() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        };
    }
};
Xi.prototype.isFog = !0;
var $s = class extends Ie {
    constructor(){
        super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    copy(e, t) {
        return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
    }
};
$s.prototype.isScene = !0;
var Bn = class {
    constructor(e, t){
        this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Bs, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.uuid = It();
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
    setUsage(e) {
        return this.usage = e, this;
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
    }
    copyAt(e, t, n) {
        e *= this.stride, n *= t.stride;
        for(let i = 0, s = this.stride; i < s; i++)this.array[e + i] = t.array[n + i];
        return this;
    }
    set(e, t = 0) {
        return this.array.set(e, t), this;
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = It()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
        return n.setUsage(this.usage), n;
    }
    onUpload(e) {
        return this.onUploadCallback = e, this;
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = It()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        };
    }
};
Bn.prototype.isInterleavedBuffer = !0;
var st = new w, xn = class {
    constructor(e, t, n, i = !1){
        this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0;
    }
    get count() {
        return this.data.count;
    }
    get array() {
        return this.data.array;
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e;
    }
    applyMatrix4(e) {
        for(let t = 0, n = this.data.count; t < n; t++)st.x = this.getX(t), st.y = this.getY(t), st.z = this.getZ(t), st.applyMatrix4(e), this.setXYZ(t, st.x, st.y, st.z);
        return this;
    }
    applyNormalMatrix(e) {
        for(let t = 0, n = this.count; t < n; t++)st.x = this.getX(t), st.y = this.getY(t), st.z = this.getZ(t), st.applyNormalMatrix(e), this.setXYZ(t, st.x, st.y, st.z);
        return this;
    }
    transformDirection(e) {
        for(let t = 0, n = this.count; t < n; t++)st.x = this.getX(t), st.y = this.getY(t), st.z = this.getZ(t), st.transformDirection(e), this.setXYZ(t, st.x, st.y, st.z);
        return this;
    }
    setX(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t, this;
    }
    setY(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t, this;
    }
    setZ(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t, this;
    }
    setW(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t, this;
    }
    getX(e) {
        return this.data.array[e * this.data.stride + this.offset];
    }
    getY(e) {
        return this.data.array[e * this.data.stride + this.offset + 1];
    }
    getZ(e) {
        return this.data.array[e * this.data.stride + this.offset + 2];
    }
    getW(e) {
        return this.data.array[e * this.data.stride + this.offset + 3];
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, s) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
    }
    clone(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            let t = [];
            for(let n = 0; n < this.count; n++){
                let i = n * this.data.stride + this.offset;
                for(let s = 0; s < this.itemSize; s++)t.push(this.data.array[i + s]);
            }
            return new Be(new this.array.constructor(t), this.itemSize, this.normalized);
        } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new xn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            let t = [];
            for(let n = 0; n < this.count; n++){
                let i = n * this.data.stride + this.offset;
                for(let s = 0; s < this.itemSize; s++)t.push(this.data.array[i + s]);
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            };
        } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        };
    }
};
xn.prototype.isInterleavedBufferAttribute = !0;
var js = class extends ft {
    constructor(e){
        super(), this.type = "SpriteMaterial", this.color = new ne(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this;
    }
};
js.prototype.isSpriteMaterial = !0;
var Ei, bs = new w, Ti = new w, Ai = new w, Ri = new Z, Ss = new Z, Lu = new de, zr = new w, Es = new w, Or = new w, eh = new Z, Ra = new Z, th = new Z, Ks = class extends Ie {
    constructor(e){
        if (super(), this.type = "Sprite", Ei === void 0) {
            Ei = new ve;
            let t = new Float32Array([
                -.5,
                -.5,
                0,
                0,
                0,
                .5,
                -.5,
                0,
                1,
                0,
                .5,
                .5,
                0,
                1,
                1,
                -.5,
                .5,
                0,
                0,
                1
            ]), n = new Bn(t, 5);
            Ei.setIndex([
                0,
                1,
                2,
                0,
                2,
                3
            ]), Ei.setAttribute("position", new xn(n, 3, 0, !1)), Ei.setAttribute("uv", new xn(n, 2, 3, !1));
        }
        this.geometry = Ei, this.material = e !== void 0 ? e : new js, this.center = new Z(.5, .5);
    }
    raycast(e, t) {
        e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ti.setFromMatrixScale(this.matrixWorld), Lu.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ai.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Ti.multiplyScalar(-Ai.z);
        let n = this.material.rotation, i, s;
        n !== 0 && (s = Math.cos(n), i = Math.sin(n));
        let o = this.center;
        Ur(zr.set(-.5, -.5, 0), Ai, o, Ti, i, s), Ur(Es.set(.5, -.5, 0), Ai, o, Ti, i, s), Ur(Or.set(.5, .5, 0), Ai, o, Ti, i, s), eh.set(0, 0), Ra.set(1, 0), th.set(1, 1);
        let a = e.ray.intersectTriangle(zr, Es, Or, !1, bs);
        if (a === null && (Ur(Es.set(-.5, .5, 0), Ai, o, Ti, i, s), Ra.set(0, 1), a = e.ray.intersectTriangle(zr, Or, Es, !1, bs), a === null)) return;
        let l = e.ray.origin.distanceTo(bs);
        l < e.near || l > e.far || t.push({
            distance: l,
            point: bs.clone(),
            uv: it.getUV(bs, zr, Es, Or, eh, Ra, th, new Z),
            face: null,
            object: this
        });
    }
    copy(e) {
        return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
    }
};
Ks.prototype.isSprite = !0;
function Ur(r, e, t, n, i, s) {
    Ri.subVectors(r, t).addScalar(.5).multiply(n), i !== void 0 ? (Ss.x = s * Ri.x - i * Ri.y, Ss.y = i * Ri.x + s * Ri.y) : Ss.copy(Ri), r.copy(e), r.x += Ss.x, r.y += Ss.y, r.applyMatrix4(Lu);
}
var Hr = new w, nh = new w, ih = new w, sh = new Ge, rh = new Ge, Lx = new w, oh = new de, Qs = class extends ot {
    constructor(e, t){
        super(e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new de, this.bindMatrixInverse = new de;
    }
    copy(e) {
        return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
    }
    bind(e, t) {
        this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
    }
    pose() {
        this.skeleton.pose();
    }
    normalizeSkinWeights() {
        let e = new Ge, t = this.geometry.attributes.skinWeight;
        for(let n = 0, i = t.count; n < i; n++){
            e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
            let s = 1 / e.manhattanLength();
            s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    boneTransform(e, t) {
        let n = this.skeleton, i = this.geometry;
        sh.fromBufferAttribute(i.attributes.skinIndex, e), rh.fromBufferAttribute(i.attributes.skinWeight, e), ih.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
        for(let s = 0; s < 4; s++){
            let o = rh.getComponent(s);
            if (o !== 0) {
                let a = sh.getComponent(s);
                oh.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Lx.copy(ih).applyMatrix4(oh), o);
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse);
    }
};
Qs.prototype.isSkinnedMesh = !0;
var er = class extends Ie {
    constructor(){
        super(), this.type = "Bone";
    }
};
er.prototype.isBone = !0;
var In = class extends at {
    constructor(e = null, t = 1, n = 1, i, s, o, a, l, c = ct, u = ct, h, d){
        super(null, o, a, l, c, u, i, s, h, d), this.image = {
            data: e,
            width: t,
            height: n
        }, this.magFilter = c, this.minFilter = u, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
    }
};
In.prototype.isDataTexture = !0;
var ah = new de, Px = new de, tr = class {
    constructor(e = [], t = []){
        this.uuid = It(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
    }
    init() {
        let e = this.bones, t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for(let n = 0, i = this.bones.length; n < i; n++)this.boneInverses.push(new de);
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for(let e = 0, t = this.bones.length; e < t; e++){
            let n = new de;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
        }
    }
    pose() {
        for(let e = 0, t = this.bones.length; e < t; e++){
            let n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert();
        }
        for(let e1 = 0, t1 = this.bones.length; e1 < t1; e1++){
            let n1 = this.bones[e1];
            n1 && (n1.parent && n1.parent.isBone ? (n1.matrix.copy(n1.parent.matrixWorld).invert(), n1.matrix.multiply(n1.matrixWorld)) : n1.matrix.copy(n1.matrixWorld), n1.matrix.decompose(n1.position, n1.quaternion, n1.scale));
        }
    }
    update() {
        let e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
        for(let s = 0, o = e.length; s < o; s++){
            let a = e[s] ? e[s].matrixWorld : Px;
            ah.multiplyMatrices(a, t[s]), ah.toArray(n, s * 16);
        }
        i !== null && (i.needsUpdate = !0);
    }
    clone() {
        return new tr(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = mu(e), e = Math.max(e, 4);
        let t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        let n = new In(t, e, e, wt, Tn);
        return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
    }
    getBoneByName(e) {
        for(let t = 0, n = this.bones.length; t < n; t++){
            let i = this.bones[t];
            if (i.name === e) return i;
        }
    }
    dispose() {
        this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for(let n = 0, i = e.bones.length; n < i; n++){
            let s = e.bones[n], o = t[s];
            o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), o = new er), this.bones.push(o), this.boneInverses.push(new de().fromArray(e.boneInverses[n]));
        }
        return this.init(), this;
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        let t = this.bones, n = this.boneInverses;
        for(let i = 0, s = t.length; i < s; i++){
            let o = t[i];
            e.bones.push(o.uuid);
            let a = n[i];
            e.boneInverses.push(a.toArray());
        }
        return e;
    }
}, zn = class extends Be {
    constructor(e, t, n, i = 1){
        typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(e, t, n), this.meshPerAttribute = i;
    }
    copy(e) {
        return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
    }
};
zn.prototype.isInstancedBufferAttribute = !0;
var lh = new de, ch = new de, Vr = [], Ts = new ot, go = class extends ot {
    constructor(e, t, n){
        super(e, t), this.instanceMatrix = new zn(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
    }
    copy(e) {
        return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, e * 3);
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, e * 16);
    }
    raycast(e, t) {
        let n = this.matrixWorld, i = this.count;
        if (Ts.geometry = this.geometry, Ts.material = this.material, Ts.material !== void 0) for(let s = 0; s < i; s++){
            this.getMatrixAt(s, lh), ch.multiplyMatrices(n, lh), Ts.matrixWorld = ch, Ts.raycast(e, Vr);
            for(let o = 0, a = Vr.length; o < a; o++){
                let l = Vr[o];
                l.instanceId = s, l.object = this, t.push(l);
            }
            Vr.length = 0;
        }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new zn(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16);
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
};
go.prototype.isInstancedMesh = !0;
var pt = class extends ft {
    constructor(e){
        super(), this.type = "LineBasicMaterial", this.color = new ne(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this;
    }
};
pt.prototype.isLineBasicMaterial = !0;
var hh = new w, uh = new w, dh = new de, Ca = new mn, kr = new pn, Qt = class extends Ie {
    constructor(e = new ve, t = new pt){
        super(), this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e) {
        return super.copy(e), this.material = e.material, this.geometry = e.geometry, this;
    }
    computeLineDistances() {
        let e = this.geometry;
        if (e.isBufferGeometry) if (e.index === null) {
            let t = e.attributes.position, n = [
                0
            ];
            for(let i = 1, s = t.count; i < s; i++)hh.fromBufferAttribute(t, i - 1), uh.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += hh.distanceTo(uh);
            e.setAttribute("lineDistance", new he(n, 1));
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
    }
    raycast(e, t) {
        let n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), kr.copy(n.boundingSphere), kr.applyMatrix4(i), kr.radius += s, e.ray.intersectsSphere(kr) === !1) return;
        dh.copy(i).invert(), Ca.copy(e.ray).applyMatrix4(dh);
        let a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new w, u = new w, h = new w, d = new w, f = this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
            let m = n.index, _ = n.attributes.position;
            if (m !== null) {
                let g = Math.max(0, o.start), p = Math.min(m.count, o.start + o.count);
                for(let M = g, y = p - 1; M < y; M += f){
                    let b = m.getX(M), T = m.getX(M + 1);
                    if (c.fromBufferAttribute(_, b), u.fromBufferAttribute(_, T), Ca.distanceSqToSegment(c, u, d, h) > l) continue;
                    d.applyMatrix4(this.matrixWorld);
                    let P = e.ray.origin.distanceTo(d);
                    P < e.near || P > e.far || t.push({
                        distance: P,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: M,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
            } else {
                let g1 = Math.max(0, o.start), p1 = Math.min(_.count, o.start + o.count);
                for(let M1 = g1, y1 = p1 - 1; M1 < y1; M1 += f){
                    if (c.fromBufferAttribute(_, M1), u.fromBufferAttribute(_, M1 + 1), Ca.distanceSqToSegment(c, u, d, h) > l) continue;
                    d.applyMatrix4(this.matrixWorld);
                    let T1 = e.ray.origin.distanceTo(d);
                    T1 < e.near || T1 > e.far || t.push({
                        distance: T1,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: M1,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
            }
        } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
    updateMorphTargets() {
        let e = this.geometry;
        if (e.isBufferGeometry) {
            let t = e.morphAttributes, n = Object.keys(t);
            if (n.length > 0) {
                let i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, o = i.length; s < o; s++){
                        let a = i[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
                    }
                }
            }
        } else {
            let t1 = e.morphTargets;
            t1 !== void 0 && t1.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
};
Qt.prototype.isLine = !0;
var fh = new w, ph = new w, Tt = class extends Qt {
    constructor(e, t){
        super(e, t), this.type = "LineSegments";
    }
    computeLineDistances() {
        let e = this.geometry;
        if (e.isBufferGeometry) if (e.index === null) {
            let t = e.attributes.position, n = [];
            for(let i = 0, s = t.count; i < s; i += 2)fh.fromBufferAttribute(t, i), ph.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + fh.distanceTo(ph);
            e.setAttribute("lineDistance", new he(n, 1));
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
    }
};
Tt.prototype.isLineSegments = !0;
var xo = class extends Qt {
    constructor(e, t){
        super(e, t), this.type = "LineLoop";
    }
};
xo.prototype.isLineLoop = !0;
var On = class extends ft {
    constructor(e){
        super(), this.type = "PointsMaterial", this.color = new ne(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this;
    }
};
On.prototype.isPointsMaterial = !0;
var mh = new de, nl = new mn, Gr = new pn, Wr = new w, Ji = class extends Ie {
    constructor(e = new ve, t = new On){
        super(), this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e) {
        return super.copy(e), this.material = e.material, this.geometry = e.geometry, this;
    }
    raycast(e, t) {
        let n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), Gr.copy(n.boundingSphere), Gr.applyMatrix4(i), Gr.radius += s, e.ray.intersectsSphere(Gr) === !1) return;
        mh.copy(i).invert(), nl.copy(e.ray).applyMatrix4(mh);
        let a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a;
        if (n.isBufferGeometry) {
            let c = n.index, h = n.attributes.position;
            if (c !== null) {
                let d = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
                for(let m = d, x = f; m < x; m++){
                    let _ = c.getX(m);
                    Wr.fromBufferAttribute(h, _), gh(Wr, _, l, i, e, t, this);
                }
            } else {
                let d1 = Math.max(0, o.start), f1 = Math.min(h.count, o.start + o.count);
                for(let m1 = d1, x1 = f1; m1 < x1; m1++)Wr.fromBufferAttribute(h, m1), gh(Wr, m1, l, i, e, t, this);
            }
        } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
    updateMorphTargets() {
        let e = this.geometry;
        if (e.isBufferGeometry) {
            let t = e.morphAttributes, n = Object.keys(t);
            if (n.length > 0) {
                let i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, o = i.length; s < o; s++){
                        let a = i[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
                    }
                }
            }
        } else {
            let t1 = e.morphTargets;
            t1 !== void 0 && t1.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
};
Ji.prototype.isPoints = !0;
function gh(r, e, t, n, i, s, o) {
    let a = nl.distanceSqToPoint(r);
    if (a < t) {
        let l = new w;
        nl.closestPointToPoint(r, l), l.applyMatrix4(n);
        let c = i.ray.origin.distanceTo(l);
        if (c < i.near || c > i.far) return;
        s.push({
            distance: c,
            distanceToRay: Math.sqrt(a),
            point: l,
            index: e,
            face: null,
            object: o
        });
    }
}
var il = class extends at {
    constructor(e, t, n, i, s, o, a, l, c){
        super(e, t, n, i, s, o, a, l, c), this.minFilter = o !== void 0 ? o : nt, this.magFilter = s !== void 0 ? s : nt, this.generateMipmaps = !1;
        let u = this;
        function h() {
            u.needsUpdate = !0, e.requestVideoFrameCallback(h);
        }
        "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(h);
    }
    clone() {
        return new this.constructor(this.image).copy(this);
    }
    update() {
        let e = this.image;
        "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
    }
};
il.prototype.isVideoTexture = !0;
var sl = class extends at {
    constructor(e, t, n){
        super({
            width: e,
            height: t
        }), this.format = n, this.magFilter = ct, this.minFilter = ct, this.generateMipmaps = !1, this.needsUpdate = !0;
    }
};
sl.prototype.isFramebufferTexture = !0;
var yo = class extends at {
    constructor(e, t, n, i, s, o, a, l, c, u, h, d){
        super(null, o, a, l, c, u, i, s, h, d), this.image = {
            width: t,
            height: n
        }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
    }
};
yo.prototype.isCompressedTexture = !0;
var rl = class extends at {
    constructor(e, t, n, i, s, o, a, l, c){
        super(e, t, n, i, s, o, a, l, c), this.needsUpdate = !0;
    }
};
rl.prototype.isCanvasTexture = !0;
var Yi = class extends ve {
    constructor(e = 1, t = 8, n = 0, i = Math.PI * 2){
        super(), this.type = "CircleGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: n,
            thetaLength: i
        }, t = Math.max(3, t);
        let s = [], o = [], a = [], l = [], c = new w, u = new Z;
        o.push(0, 0, 0), a.push(0, 0, 1), l.push(.5, .5);
        for(let h = 0, d = 3; h <= t; h++, d += 3){
            let f = n + h / t * i;
            c.x = e * Math.cos(f), c.y = e * Math.sin(f), o.push(c.x, c.y, c.z), a.push(0, 0, 1), u.x = (o[d] / e + 1) / 2, u.y = (o[d + 1] / e + 1) / 2, l.push(u.x, u.y);
        }
        for(let h1 = 1; h1 <= t; h1++)s.push(h1, h1 + 1, 0);
        this.setIndex(s), this.setAttribute("position", new he(o, 3)), this.setAttribute("normal", new he(a, 3)), this.setAttribute("uv", new he(l, 2));
    }
    static fromJSON(e) {
        return new Yi(e.radius, e.segments, e.thetaStart, e.thetaLength);
    }
}, Un = class extends ve {
    constructor(e = 1, t = 1, n = 1, i = 8, s = 1, o = !1, a = 0, l = Math.PI * 2){
        super(), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: i,
            heightSegments: s,
            openEnded: o,
            thetaStart: a,
            thetaLength: l
        };
        let c = this;
        i = Math.floor(i), s = Math.floor(s);
        let u = [], h = [], d = [], f = [], m = 0, x = [], _ = n / 2, g = 0;
        p(), o === !1 && (e > 0 && M(!0), t > 0 && M(!1)), this.setIndex(u), this.setAttribute("position", new he(h, 3)), this.setAttribute("normal", new he(d, 3)), this.setAttribute("uv", new he(f, 2));
        function p() {
            let y = new w, b = new w, T = 0, R = (t - e) / n;
            for(let P = 0; P <= s; P++){
                let H = [], B = P / s, v = B * (t - e) + e;
                for(let C = 0; C <= i; C++){
                    let D = C / i, N = D * l + a, z = Math.sin(N), F = Math.cos(N);
                    b.x = v * z, b.y = -B * n + _, b.z = v * F, h.push(b.x, b.y, b.z), y.set(z, R, F).normalize(), d.push(y.x, y.y, y.z), f.push(D, 1 - B), H.push(m++);
                }
                x.push(H);
            }
            for(let P1 = 0; P1 < i; P1++)for(let H1 = 0; H1 < s; H1++){
                let B1 = x[H1][P1], v1 = x[H1 + 1][P1], C1 = x[H1 + 1][P1 + 1], D1 = x[H1][P1 + 1];
                u.push(B1, v1, D1), u.push(v1, C1, D1), T += 6;
            }
            c.addGroup(g, T, 0), g += T;
        }
        function M(y) {
            let b = m, T = new Z, R = new w, P = 0, H = y === !0 ? e : t, B = y === !0 ? 1 : -1;
            for(let C = 1; C <= i; C++)h.push(0, _ * B, 0), d.push(0, B, 0), f.push(.5, .5), m++;
            let v = m;
            for(let C1 = 0; C1 <= i; C1++){
                let N = C1 / i * l + a, z = Math.cos(N), F = Math.sin(N);
                R.x = H * F, R.y = _ * B, R.z = H * z, h.push(R.x, R.y, R.z), d.push(0, B, 0), T.x = z * .5 + .5, T.y = F * .5 * B + .5, f.push(T.x, T.y), m++;
            }
            for(let C2 = 0; C2 < i; C2++){
                let D = b + C2, N1 = v + C2;
                y === !0 ? u.push(N1, N1 + 1, D) : u.push(N1 + 1, N1, D), P += 3;
            }
            c.addGroup(g, P, y === !0 ? 1 : 2), g += P;
        }
    }
    static fromJSON(e) {
        return new Un(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
    }
}, Zi = class extends Un {
    constructor(e = 1, t = 1, n = 8, i = 1, s = !1, o = 0, a = Math.PI * 2){
        super(0, e, t, n, i, s, o, a), this.type = "ConeGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: n,
            heightSegments: i,
            openEnded: s,
            thetaStart: o,
            thetaLength: a
        };
    }
    static fromJSON(e) {
        return new Zi(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
    }
}, en = class extends ve {
    constructor(e = [], t = [], n = 1, i = 0){
        super(), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: n,
            detail: i
        };
        let s = [], o = [];
        a(i), c(n), u(), this.setAttribute("position", new he(s, 3)), this.setAttribute("normal", new he(s.slice(), 3)), this.setAttribute("uv", new he(o, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
        function a(p) {
            let M = new w, y = new w, b = new w;
            for(let T = 0; T < t.length; T += 3)f(t[T + 0], M), f(t[T + 1], y), f(t[T + 2], b), l(M, y, b, p);
        }
        function l(p, M, y, b) {
            let T = b + 1, R = [];
            for(let P = 0; P <= T; P++){
                R[P] = [];
                let H = p.clone().lerp(y, P / T), B = M.clone().lerp(y, P / T), v = T - P;
                for(let C = 0; C <= v; C++)C === 0 && P === T ? R[P][C] = H : R[P][C] = H.clone().lerp(B, C / v);
            }
            for(let P1 = 0; P1 < T; P1++)for(let H1 = 0; H1 < 2 * (T - P1) - 1; H1++){
                let B1 = Math.floor(H1 / 2);
                H1 % 2 === 0 ? (d(R[P1][B1 + 1]), d(R[P1 + 1][B1]), d(R[P1][B1])) : (d(R[P1][B1 + 1]), d(R[P1 + 1][B1 + 1]), d(R[P1 + 1][B1]));
            }
        }
        function c(p) {
            let M = new w;
            for(let y = 0; y < s.length; y += 3)M.x = s[y + 0], M.y = s[y + 1], M.z = s[y + 2], M.normalize().multiplyScalar(p), s[y + 0] = M.x, s[y + 1] = M.y, s[y + 2] = M.z;
        }
        function u() {
            let p = new w;
            for(let M = 0; M < s.length; M += 3){
                p.x = s[M + 0], p.y = s[M + 1], p.z = s[M + 2];
                let y = _(p) / 2 / Math.PI + .5, b = g(p) / Math.PI + .5;
                o.push(y, 1 - b);
            }
            m(), h();
        }
        function h() {
            for(let p = 0; p < o.length; p += 6){
                let M = o[p + 0], y = o[p + 2], b = o[p + 4], T = Math.max(M, y, b), R = Math.min(M, y, b);
                T > .9 && R < .1 && (M < .2 && (o[p + 0] += 1), y < .2 && (o[p + 2] += 1), b < .2 && (o[p + 4] += 1));
            }
        }
        function d(p) {
            s.push(p.x, p.y, p.z);
        }
        function f(p, M) {
            let y = p * 3;
            M.x = e[y + 0], M.y = e[y + 1], M.z = e[y + 2];
        }
        function m() {
            let p = new w, M = new w, y = new w, b = new w, T = new Z, R = new Z, P = new Z;
            for(let H = 0, B = 0; H < s.length; H += 9, B += 6){
                p.set(s[H + 0], s[H + 1], s[H + 2]), M.set(s[H + 3], s[H + 4], s[H + 5]), y.set(s[H + 6], s[H + 7], s[H + 8]), T.set(o[B + 0], o[B + 1]), R.set(o[B + 2], o[B + 3]), P.set(o[B + 4], o[B + 5]), b.copy(p).add(M).add(y).divideScalar(3);
                let v = _(b);
                x(T, B + 0, p, v), x(R, B + 2, M, v), x(P, B + 4, y, v);
            }
        }
        function x(p, M, y, b) {
            b < 0 && p.x === 1 && (o[M] = p.x - 1), y.x === 0 && y.z === 0 && (o[M] = b / 2 / Math.PI + .5);
        }
        function _(p) {
            return Math.atan2(p.z, -p.x);
        }
        function g(p) {
            return Math.atan2(-p.y, Math.sqrt(p.x * p.x + p.z * p.z));
        }
    }
    static fromJSON(e) {
        return new en(e.vertices, e.indices, e.radius, e.details);
    }
}, $i = class extends en {
    constructor(e = 1, t = 0){
        let n = (1 + Math.sqrt(5)) / 2, i = 1 / n, s = [
            -1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            1,
            1,
            1,
            0,
            -i,
            -n,
            0,
            -i,
            n,
            0,
            i,
            -n,
            0,
            i,
            n,
            -i,
            -n,
            0,
            -i,
            n,
            0,
            i,
            -n,
            0,
            i,
            n,
            0,
            -n,
            0,
            -i,
            n,
            0,
            -i,
            -n,
            0,
            i,
            n,
            0,
            i
        ], o = [
            3,
            11,
            7,
            3,
            7,
            15,
            3,
            15,
            13,
            7,
            19,
            17,
            7,
            17,
            6,
            7,
            6,
            15,
            17,
            4,
            8,
            17,
            8,
            10,
            17,
            10,
            6,
            8,
            0,
            16,
            8,
            16,
            2,
            8,
            2,
            10,
            0,
            12,
            1,
            0,
            1,
            18,
            0,
            18,
            16,
            6,
            10,
            2,
            6,
            2,
            13,
            6,
            13,
            15,
            2,
            16,
            18,
            2,
            18,
            3,
            2,
            3,
            13,
            18,
            1,
            9,
            18,
            9,
            11,
            18,
            11,
            3,
            4,
            14,
            12,
            4,
            12,
            0,
            4,
            0,
            8,
            11,
            9,
            5,
            11,
            5,
            19,
            11,
            19,
            7,
            19,
            5,
            14,
            19,
            14,
            4,
            19,
            4,
            17,
            1,
            12,
            14,
            1,
            14,
            5,
            1,
            5,
            9
        ];
        super(s, o, e, t), this.type = "DodecahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new $i(e.radius, e.detail);
    }
}, qr = new w, Xr = new w, La = new w, Jr = new it, _o = class extends ve {
    constructor(e = null, t = 1){
        if (super(), this.type = "EdgesGeometry", this.parameters = {
            geometry: e,
            thresholdAngle: t
        }, e !== null) {
            let i = Math.pow(10, 4), s = Math.cos(ei * t), o = e.getIndex(), a = e.getAttribute("position"), l = o ? o.count : a.count, c = [
                0,
                0,
                0
            ], u = [
                "a",
                "b",
                "c"
            ], h = new Array(3), d = {}, f = [];
            for(let m = 0; m < l; m += 3){
                o ? (c[0] = o.getX(m), c[1] = o.getX(m + 1), c[2] = o.getX(m + 2)) : (c[0] = m, c[1] = m + 1, c[2] = m + 2);
                let { a: x , b: _ , c: g  } = Jr;
                if (x.fromBufferAttribute(a, c[0]), _.fromBufferAttribute(a, c[1]), g.fromBufferAttribute(a, c[2]), Jr.getNormal(La), h[0] = `${Math.round(x.x * i)},${Math.round(x.y * i)},${Math.round(x.z * i)}`, h[1] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, h[2] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, !(h[0] === h[1] || h[1] === h[2] || h[2] === h[0])) for(let p = 0; p < 3; p++){
                    let M = (p + 1) % 3, y = h[p], b = h[M], T = Jr[u[p]], R = Jr[u[M]], P = `${y}_${b}`, H = `${b}_${y}`;
                    H in d && d[H] ? (La.dot(d[H].normal) <= s && (f.push(T.x, T.y, T.z), f.push(R.x, R.y, R.z)), d[H] = null) : P in d || (d[P] = {
                        index0: c[p],
                        index1: c[M],
                        normal: La.clone()
                    });
                }
            }
            for(let m1 in d)if (d[m1]) {
                let { index0: x1 , index1: _1  } = d[m1];
                qr.fromBufferAttribute(a, x1), Xr.fromBufferAttribute(a, _1), f.push(qr.x, qr.y, qr.z), f.push(Xr.x, Xr.y, Xr.z);
            }
            this.setAttribute("position", new he(f, 3));
        }
    }
}, Ct = class {
    constructor(){
        this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getPoint(n, t);
    }
    getPoints(e = 5) {
        let t = [];
        for(let n = 0; n <= e; n++)t.push(this.getPoint(n / e));
        return t;
    }
    getSpacedPoints(e = 5) {
        let t = [];
        for(let n = 0; n <= e; n++)t.push(this.getPointAt(n / e));
        return t;
    }
    getLength() {
        let e = this.getLengths();
        return e[e.length - 1];
    }
    getLengths(e = this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        let t = [], n, i = this.getPoint(0), s = 0;
        t.push(0);
        for(let o = 1; o <= e; o++)n = this.getPoint(o / e), s += n.distanceTo(i), t.push(s), i = n;
        return this.cacheArcLengths = t, t;
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.getLengths();
    }
    getUtoTmapping(e, t) {
        let n = this.getLengths(), i = 0, s = n.length, o;
        t ? o = t : o = e * n[s - 1];
        let a = 0, l = s - 1, c;
        for(; a <= l;)if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0) a = i + 1;
        else if (c > 0) l = i - 1;
        else {
            l = i;
            break;
        }
        if (i = l, n[i] === o) return i / (s - 1);
        let u = n[i], d = n[i + 1] - u, f = (o - u) / d;
        return (i + f) / (s - 1);
    }
    getTangent(e, t) {
        let i = e - 1e-4, s = e + 1e-4;
        i < 0 && (i = 0), s > 1 && (s = 1);
        let o = this.getPoint(i), a = this.getPoint(s), l = t || (o.isVector2 ? new Z : new w);
        return l.copy(a).sub(o).normalize(), l;
    }
    getTangentAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getTangent(n, t);
    }
    computeFrenetFrames(e, t) {
        let n = new w, i = [], s = [], o = [], a = new w, l = new de;
        for(let f = 0; f <= e; f++){
            let m = f / e;
            i[f] = this.getTangentAt(m, new w);
        }
        s[0] = new w, o[0] = new w;
        let c = Number.MAX_VALUE, u = Math.abs(i[0].x), h = Math.abs(i[0].y), d = Math.abs(i[0].z);
        u <= c && (c = u, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), o[0].crossVectors(i[0], s[0]);
        for(let f1 = 1; f1 <= e; f1++){
            if (s[f1] = s[f1 - 1].clone(), o[f1] = o[f1 - 1].clone(), a.crossVectors(i[f1 - 1], i[f1]), a.length() > Number.EPSILON) {
                a.normalize();
                let m1 = Math.acos(yt(i[f1 - 1].dot(i[f1]), -1, 1));
                s[f1].applyMatrix4(l.makeRotationAxis(a, m1));
            }
            o[f1].crossVectors(i[f1], s[f1]);
        }
        if (t === !0) {
            let f2 = Math.acos(yt(s[0].dot(s[e]), -1, 1));
            f2 /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (f2 = -f2);
            for(let m2 = 1; m2 <= e; m2++)s[m2].applyMatrix4(l.makeRotationAxis(i[m2], f2 * m2)), o[m2].crossVectors(i[m2], s[m2]);
        }
        return {
            tangents: i,
            normals: s,
            binormals: o
        };
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this;
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this;
    }
}, ji = class extends Ct {
    constructor(e = 0, t = 0, n = 1, i = 1, s = 0, o = Math.PI * 2, a = !1, l = 0){
        super(), this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
    }
    getPoint(e, t) {
        let n = t || new Z, i = Math.PI * 2, s = this.aEndAngle - this.aStartAngle, o = Math.abs(s) < Number.EPSILON;
        for(; s < 0;)s += i;
        for(; s > i;)s -= i;
        s < Number.EPSILON && (o ? s = 0 : s = i), this.aClockwise === !0 && !o && (s === i ? s = -i : s = s - i);
        let a = this.aStartAngle + e * s, l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
        if (this.aRotation !== 0) {
            let u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
            l = d * u - f * h + this.aX, c = d * h + f * u + this.aY;
        }
        return n.set(l, c);
    }
    copy(e) {
        return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
    }
};
ji.prototype.isEllipseCurve = !0;
var vo = class extends ji {
    constructor(e, t, n, i, s, o){
        super(e, t, n, n, i, s, o), this.type = "ArcCurve";
    }
};
vo.prototype.isArcCurve = !0;
function kl() {
    let r = 0, e = 0, t = 0, n = 0;
    function i(s, o, a, l) {
        r = s, e = a, t = -3 * s + 3 * o - 2 * a - l, n = 2 * s - 2 * o + a + l;
    }
    return {
        initCatmullRom: function(s, o, a, l, c) {
            i(o, a, c * (a - s), c * (l - o));
        },
        initNonuniformCatmullRom: function(s, o, a, l, c, u, h) {
            let d = (o - s) / c - (a - s) / (c + u) + (a - o) / u, f = (a - o) / u - (l - o) / (u + h) + (l - a) / h;
            d *= u, f *= u, i(o, a, d, f);
        },
        calc: function(s) {
            let o = s * s, a = o * s;
            return r + e * s + t * o + n * a;
        }
    };
}
var Yr = new w, Pa = new kl, Da = new kl, Ia = new kl, Mo = class extends Ct {
    constructor(e = [], t = !1, n = "centripetal", i = .5){
        super(), this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
    }
    getPoint(e, t = new w) {
        let n = t, i = this.points, s = i.length, o = (s - (this.closed ? 0 : 1)) * e, a = Math.floor(o), l = o - a;
        this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : l === 0 && a === s - 1 && (a = s - 2, l = 1);
        let c, u;
        this.closed || a > 0 ? c = i[(a - 1) % s] : (Yr.subVectors(i[0], i[1]).add(i[0]), c = Yr);
        let h = i[a % s], d = i[(a + 1) % s];
        if (this.closed || a + 2 < s ? u = i[(a + 2) % s] : (Yr.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), u = Yr), this.curveType === "centripetal" || this.curveType === "chordal") {
            let f = this.curveType === "chordal" ? .5 : .25, m = Math.pow(c.distanceToSquared(h), f), x = Math.pow(h.distanceToSquared(d), f), _ = Math.pow(d.distanceToSquared(u), f);
            x < 1e-4 && (x = 1), m < 1e-4 && (m = x), _ < 1e-4 && (_ = x), Pa.initNonuniformCatmullRom(c.x, h.x, d.x, u.x, m, x, _), Da.initNonuniformCatmullRom(c.y, h.y, d.y, u.y, m, x, _), Ia.initNonuniformCatmullRom(c.z, h.z, d.z, u.z, m, x, _);
        } else this.curveType === "catmullrom" && (Pa.initCatmullRom(c.x, h.x, d.x, u.x, this.tension), Da.initCatmullRom(c.y, h.y, d.y, u.y, this.tension), Ia.initCatmullRom(c.z, h.z, d.z, u.z, this.tension));
        return n.set(Pa.calc(l), Da.calc(l), Ia.calc(l)), n;
    }
    copy(e) {
        super.copy(e), this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let i = e.points[t];
            this.points.push(i.clone());
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for(let t = 0, n = this.points.length; t < n; t++){
            let i = this.points[t];
            e.points.push(i.toArray());
        }
        return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
    }
    fromJSON(e) {
        super.fromJSON(e), this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let i = e.points[t];
            this.points.push(new w().fromArray(i));
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
    }
};
Mo.prototype.isCatmullRomCurve3 = !0;
function xh(r, e, t, n, i) {
    let s = (n - e) * .5, o = (i - t) * .5, a = r * r, l = r * a;
    return (2 * t - 2 * n + s + o) * l + (-3 * t + 3 * n - 2 * s - o) * a + s * r + t;
}
function Dx(r, e) {
    let t = 1 - r;
    return t * t * e;
}
function Ix(r, e) {
    return 2 * (1 - r) * r * e;
}
function Fx(r, e) {
    return r * r * e;
}
function Is(r, e, t, n) {
    return Dx(r, e) + Ix(r, t) + Fx(r, n);
}
function Nx(r, e) {
    let t = 1 - r;
    return t * t * t * e;
}
function Bx(r, e) {
    let t = 1 - r;
    return 3 * t * t * r * e;
}
function zx(r, e) {
    return 3 * (1 - r) * r * r * e;
}
function Ox(r, e) {
    return r * r * r * e;
}
function Fs(r, e, t, n, i) {
    return Nx(r, e) + Bx(r, t) + zx(r, n) + Ox(r, i);
}
var nr = class extends Ct {
    constructor(e = new Z, t = new Z, n = new Z, i = new Z){
        super(), this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new Z) {
        let n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
        return n.set(Fs(e, i.x, s.x, o.x, a.x), Fs(e, i.y, s.y, o.y, a.y)), n;
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
    }
};
nr.prototype.isCubicBezierCurve = !0;
var wo = class extends Ct {
    constructor(e = new w, t = new w, n = new w, i = new w){
        super(), this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new w) {
        let n = t, i = this.v0, s = this.v1, o = this.v2, a = this.v3;
        return n.set(Fs(e, i.x, s.x, o.x, a.x), Fs(e, i.y, s.y, o.y, a.y), Fs(e, i.z, s.z, o.z, a.z)), n;
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
    }
};
wo.prototype.isCubicBezierCurve3 = !0;
var Ki = class extends Ct {
    constructor(e = new Z, t = new Z){
        super(), this.type = "LineCurve", this.v1 = e, this.v2 = t;
    }
    getPoint(e, t = new Z) {
        let n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
    }
    getPointAt(e, t) {
        return this.getPoint(e, t);
    }
    getTangent(e, t) {
        let n = t || new Z;
        return n.copy(this.v2).sub(this.v1).normalize(), n;
    }
    copy(e) {
        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
};
Ki.prototype.isLineCurve = !0;
var ol = class extends Ct {
    constructor(e = new w, t = new w){
        super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t;
    }
    getPoint(e, t = new w) {
        let n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
    }
    getPointAt(e, t) {
        return this.getPoint(e, t);
    }
    copy(e) {
        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
}, ir = class extends Ct {
    constructor(e = new Z, t = new Z, n = new Z){
        super(), this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new Z) {
        let n = t, i = this.v0, s = this.v1, o = this.v2;
        return n.set(Is(e, i.x, s.x, o.x), Is(e, i.y, s.y, o.y)), n;
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
};
ir.prototype.isQuadraticBezierCurve = !0;
var sr = class extends Ct {
    constructor(e = new w, t = new w, n = new w){
        super(), this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new w) {
        let n = t, i = this.v0, s = this.v1, o = this.v2;
        return n.set(Is(e, i.x, s.x, o.x), Is(e, i.y, s.y, o.y), Is(e, i.z, s.z, o.z)), n;
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
    }
};
sr.prototype.isQuadraticBezierCurve3 = !0;
var rr = class extends Ct {
    constructor(e = []){
        super(), this.type = "SplineCurve", this.points = e;
    }
    getPoint(e, t = new Z) {
        let n = t, i = this.points, s = (i.length - 1) * e, o = Math.floor(s), a = s - o, l = i[o === 0 ? o : o - 1], c = i[o], u = i[o > i.length - 2 ? i.length - 1 : o + 1], h = i[o > i.length - 3 ? i.length - 1 : o + 2];
        return n.set(xh(a, l.x, c.x, u.x, h.x), xh(a, l.y, c.y, u.y, h.y)), n;
    }
    copy(e) {
        super.copy(e), this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let i = e.points[t];
            this.points.push(i.clone());
        }
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for(let t = 0, n = this.points.length; t < n; t++){
            let i = this.points[t];
            e.points.push(i.toArray());
        }
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e), this.points = [];
        for(let t = 0, n = e.points.length; t < n; t++){
            let i = e.points[t];
            this.points.push(new Z().fromArray(i));
        }
        return this;
    }
};
rr.prototype.isSplineCurve = !0;
var Gl = Object.freeze({
    __proto__: null,
    ArcCurve: vo,
    CatmullRomCurve3: Mo,
    CubicBezierCurve: nr,
    CubicBezierCurve3: wo,
    EllipseCurve: ji,
    LineCurve: Ki,
    LineCurve3: ol,
    QuadraticBezierCurve: ir,
    QuadraticBezierCurve3: sr,
    SplineCurve: rr
}), al = class extends Ct {
    constructor(){
        super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
    }
    add(e) {
        this.curves.push(e);
    }
    closePath() {
        let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new Ki(t, e));
    }
    getPoint(e, t) {
        let n = e * this.getLength(), i = this.getCurveLengths(), s = 0;
        for(; s < i.length;){
            if (i[s] >= n) {
                let o = i[s] - n, a = this.curves[s], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
                return a.getPointAt(c, t);
            }
            s++;
        }
        return null;
    }
    getLength() {
        let e = this.getCurveLengths();
        return e[e.length - 1];
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        let e = [], t = 0;
        for(let n = 0, i = this.curves.length; n < i; n++)t += this.curves[n].getLength(), e.push(t);
        return this.cacheLengths = e, e;
    }
    getSpacedPoints(e = 40) {
        let t = [];
        for(let n = 0; n <= e; n++)t.push(this.getPoint(n / e));
        return this.autoClose && t.push(t[0]), t;
    }
    getPoints(e = 12) {
        let t = [], n;
        for(let i = 0, s = this.curves; i < s.length; i++){
            let o = s[i], a = o && o.isEllipseCurve ? e * 2 : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
            for(let c = 0; c < l.length; c++){
                let u = l[c];
                n && n.equals(u) || (t.push(u), n = u);
            }
        }
        return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
    }
    copy(e) {
        super.copy(e), this.curves = [];
        for(let t = 0, n = e.curves.length; t < n; t++){
            let i = e.curves[t];
            this.curves.push(i.clone());
        }
        return this.autoClose = e.autoClose, this;
    }
    toJSON() {
        let e = super.toJSON();
        e.autoClose = this.autoClose, e.curves = [];
        for(let t = 0, n = this.curves.length; t < n; t++){
            let i = this.curves[t];
            e.curves.push(i.toJSON());
        }
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
        for(let t = 0, n = e.curves.length; t < n; t++){
            let i = e.curves[t];
            this.curves.push(new Gl[i.type]().fromJSON(i));
        }
        return this;
    }
}, Qi = class extends al {
    constructor(e){
        super(), this.type = "Path", this.currentPoint = new Z, e && this.setFromPoints(e);
    }
    setFromPoints(e) {
        this.moveTo(e[0].x, e[0].y);
        for(let t = 1, n = e.length; t < n; t++)this.lineTo(e[t].x, e[t].y);
        return this;
    }
    moveTo(e, t) {
        return this.currentPoint.set(e, t), this;
    }
    lineTo(e, t) {
        let n = new Ki(this.currentPoint.clone(), new Z(e, t));
        return this.curves.push(n), this.currentPoint.set(e, t), this;
    }
    quadraticCurveTo(e, t, n, i) {
        let s = new ir(this.currentPoint.clone(), new Z(e, t), new Z(n, i));
        return this.curves.push(s), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(e, t, n, i, s, o) {
        let a = new nr(this.currentPoint.clone(), new Z(e, t), new Z(n, i), new Z(s, o));
        return this.curves.push(a), this.currentPoint.set(s, o), this;
    }
    splineThru(e) {
        let t = [
            this.currentPoint.clone()
        ].concat(e), n = new rr(t);
        return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
    }
    arc(e, t, n, i, s, o) {
        let a = this.currentPoint.x, l = this.currentPoint.y;
        return this.absarc(e + a, t + l, n, i, s, o), this;
    }
    absarc(e, t, n, i, s, o) {
        return this.absellipse(e, t, n, n, i, s, o), this;
    }
    ellipse(e, t, n, i, s, o, a, l) {
        let c = this.currentPoint.x, u = this.currentPoint.y;
        return this.absellipse(e + c, t + u, n, i, s, o, a, l), this;
    }
    absellipse(e, t, n, i, s, o, a, l) {
        let c = new ji(e, t, n, i, s, o, a, l);
        if (this.curves.length > 0) {
            let h = c.getPoint(0);
            h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
        }
        this.curves.push(c);
        let u = c.getPoint(1);
        return this.currentPoint.copy(u), this;
    }
    copy(e) {
        return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.currentPoint = this.currentPoint.toArray(), e;
    }
    fromJSON(e) {
        return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
    }
}, kt = class extends Qi {
    constructor(e){
        super(e), this.uuid = It(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(e) {
        let t = [];
        for(let n = 0, i = this.holes.length; n < i; n++)t[n] = this.holes[n].getPoints(e);
        return t;
    }
    extractPoints(e) {
        return {
            shape: this.getPoints(e),
            holes: this.getPointsHoles(e)
        };
    }
    copy(e) {
        super.copy(e), this.holes = [];
        for(let t = 0, n = e.holes.length; t < n; t++){
            let i = e.holes[t];
            this.holes.push(i.clone());
        }
        return this;
    }
    toJSON() {
        let e = super.toJSON();
        e.uuid = this.uuid, e.holes = [];
        for(let t = 0, n = this.holes.length; t < n; t++){
            let i = this.holes[t];
            e.holes.push(i.toJSON());
        }
        return e;
    }
    fromJSON(e) {
        super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
        for(let t = 0, n = e.holes.length; t < n; t++){
            let i = e.holes[t];
            this.holes.push(new Qi().fromJSON(i));
        }
        return this;
    }
}, Ux = {
    triangulate: function(r, e, t = 2) {
        let n = e && e.length, i = n ? e[0] * t : r.length, s = Pu(r, 0, i, t, !0), o = [];
        if (!s || s.next === s.prev) return o;
        let a, l, c, u, h, d, f;
        if (n && (s = Wx(r, e, s, t)), r.length > 80 * t) {
            a = c = r[0], l = u = r[1];
            for(let m = t; m < i; m += t)h = r[m], d = r[m + 1], h < a && (a = h), d < l && (l = d), h > c && (c = h), d > u && (u = d);
            f = Math.max(c - a, u - l), f = f !== 0 ? 1 / f : 0;
        }
        return or(s, o, t, a, l, f), o;
    }
};
function Pu(r, e, t, n, i) {
    let s, o;
    if (i === ty(r, e, t, n) > 0) for(s = e; s < t; s += n)o = yh(s, r[s], r[s + 1], o);
    else for(s = t - n; s >= e; s -= n)o = yh(s, r[s], r[s + 1], o);
    return o && $o(o, o.next) && (lr(o), o = o.next), o;
}
function Hn(r, e) {
    if (!r) return r;
    e || (e = r);
    let t = r, n;
    do if (n = !1, !t.steiner && ($o(t, t.next) || Ke(t.prev, t, t.next) === 0)) {
        if (lr(t), t = e = t.prev, t === t.next) break;
        n = !0;
    } else t = t.next;
    while (n || t !== e)
    return e;
}
function or(r, e, t, n, i, s, o) {
    if (!r) return;
    !o && s && Zx(r, n, i, s);
    let a = r, l, c;
    for(; r.prev !== r.next;){
        if (l = r.prev, c = r.next, s ? Vx(r, n, i, s) : Hx(r)) {
            e.push(l.i / t), e.push(r.i / t), e.push(c.i / t), lr(r), r = c.next, a = c.next;
            continue;
        }
        if (r = c, r === a) {
            o ? o === 1 ? (r = kx(Hn(r), e, t), or(r, e, t, n, i, s, 2)) : o === 2 && Gx(r, e, t, n, i, s) : or(Hn(r), e, t, n, i, s, 1);
            break;
        }
    }
}
function Hx(r) {
    let e = r.prev, t = r, n = r.next;
    if (Ke(e, t, n) >= 0) return !1;
    let i = r.next.next;
    for(; i !== r.prev;){
        if (Ii(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && Ke(i.prev, i, i.next) >= 0) return !1;
        i = i.next;
    }
    return !0;
}
function Vx(r, e, t, n) {
    let i = r.prev, s = r, o = r.next;
    if (Ke(i, s, o) >= 0) return !1;
    let a = i.x < s.x ? i.x < o.x ? i.x : o.x : s.x < o.x ? s.x : o.x, l = i.y < s.y ? i.y < o.y ? i.y : o.y : s.y < o.y ? s.y : o.y, c = i.x > s.x ? i.x > o.x ? i.x : o.x : s.x > o.x ? s.x : o.x, u = i.y > s.y ? i.y > o.y ? i.y : o.y : s.y > o.y ? s.y : o.y, h = ll(a, l, e, t, n), d = ll(c, u, e, t, n), f = r.prevZ, m = r.nextZ;
    for(; f && f.z >= h && m && m.z <= d;){
        if (f !== r.prev && f !== r.next && Ii(i.x, i.y, s.x, s.y, o.x, o.y, f.x, f.y) && Ke(f.prev, f, f.next) >= 0 || (f = f.prevZ, m !== r.prev && m !== r.next && Ii(i.x, i.y, s.x, s.y, o.x, o.y, m.x, m.y) && Ke(m.prev, m, m.next) >= 0)) return !1;
        m = m.nextZ;
    }
    for(; f && f.z >= h;){
        if (f !== r.prev && f !== r.next && Ii(i.x, i.y, s.x, s.y, o.x, o.y, f.x, f.y) && Ke(f.prev, f, f.next) >= 0) return !1;
        f = f.prevZ;
    }
    for(; m && m.z <= d;){
        if (m !== r.prev && m !== r.next && Ii(i.x, i.y, s.x, s.y, o.x, o.y, m.x, m.y) && Ke(m.prev, m, m.next) >= 0) return !1;
        m = m.nextZ;
    }
    return !0;
}
function kx(r, e, t) {
    let n = r;
    do {
        let i = n.prev, s = n.next.next;
        !$o(i, s) && Du(i, n, n.next, s) && ar(i, s) && ar(s, i) && (e.push(i.i / t), e.push(n.i / t), e.push(s.i / t), lr(n), lr(n.next), n = r = s), n = n.next;
    }while (n !== r)
    return Hn(n);
}
function Gx(r, e, t, n, i, s) {
    let o = r;
    do {
        let a = o.next.next;
        for(; a !== o.prev;){
            if (o.i !== a.i && Kx(o, a)) {
                let l = Iu(o, a);
                o = Hn(o, o.next), l = Hn(l, l.next), or(o, e, t, n, i, s), or(l, e, t, n, i, s);
                return;
            }
            a = a.next;
        }
        o = o.next;
    }while (o !== r)
}
function Wx(r, e, t, n) {
    let i = [], s, o, a, l, c;
    for(s = 0, o = e.length; s < o; s++)a = e[s] * n, l = s < o - 1 ? e[s + 1] * n : r.length, c = Pu(r, a, l, n, !1), c === c.next && (c.steiner = !0), i.push(jx(c));
    for(i.sort(qx), s = 0; s < i.length; s++)Xx(i[s], t), t = Hn(t, t.next);
    return t;
}
function qx(r, e) {
    return r.x - e.x;
}
function Xx(r, e) {
    if (e = Jx(r, e), e) {
        let t = Iu(e, r);
        Hn(e, e.next), Hn(t, t.next);
    }
}
function Jx(r, e) {
    let t = e, n = r.x, i = r.y, s = -1 / 0, o;
    do {
        if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
            let d = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
            if (d <= n && d > s) {
                if (s = d, d === n) {
                    if (i === t.y) return t;
                    if (i === t.next.y) return t.next;
                }
                o = t.x < t.next.x ? t : t.next;
            }
        }
        t = t.next;
    }while (t !== e)
    if (!o) return null;
    if (n === s) return o;
    let a = o, l = o.x, c = o.y, u = 1 / 0, h;
    t = o;
    do n >= t.x && t.x >= l && n !== t.x && Ii(i < c ? n : s, i, l, c, i < c ? s : n, i, t.x, t.y) && (h = Math.abs(i - t.y) / (n - t.x), ar(t, r) && (h < u || h === u && (t.x > o.x || t.x === o.x && Yx(o, t))) && (o = t, u = h)), t = t.next;
    while (t !== a)
    return o;
}
function Yx(r, e) {
    return Ke(r.prev, r, e.prev) < 0 && Ke(e.next, r, r.next) < 0;
}
function Zx(r, e, t, n) {
    let i = r;
    do i.z === null && (i.z = ll(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
    while (i !== r)
    i.prevZ.nextZ = null, i.prevZ = null, $x(i);
}
function $x(r) {
    let e, t, n, i, s, o, a, l, c = 1;
    do {
        for(t = r, r = null, s = null, o = 0; t;){
            for(o++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++);
            for(l = c; a > 0 || l > 0 && n;)a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
            t = n;
        }
        s.nextZ = null, c *= 2;
    }while (o > 1)
    return r;
}
function ll(r, e, t, n, i) {
    return r = 32767 * (r - t) * i, e = 32767 * (e - n) * i, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function jx(r) {
    let e = r, t = r;
    do (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
    while (e !== r)
    return t;
}
function Ii(r, e, t, n, i, s, o, a) {
    return (i - o) * (e - a) - (r - o) * (s - a) >= 0 && (r - o) * (n - a) - (t - o) * (e - a) >= 0 && (t - o) * (s - a) - (i - o) * (n - a) >= 0;
}
function Kx(r, e) {
    return r.next.i !== e.i && r.prev.i !== e.i && !Qx(r, e) && (ar(r, e) && ar(e, r) && ey(r, e) && (Ke(r.prev, r, e.prev) || Ke(r, e.prev, e)) || $o(r, e) && Ke(r.prev, r, r.next) > 0 && Ke(e.prev, e, e.next) > 0);
}
function Ke(r, e, t) {
    return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function $o(r, e) {
    return r.x === e.x && r.y === e.y;
}
function Du(r, e, t, n) {
    let i = $r(Ke(r, e, t)), s = $r(Ke(r, e, n)), o = $r(Ke(t, n, r)), a = $r(Ke(t, n, e));
    return !!(i !== s && o !== a || i === 0 && Zr(r, t, e) || s === 0 && Zr(r, n, e) || o === 0 && Zr(t, r, n) || a === 0 && Zr(t, e, n));
}
function Zr(r, e, t) {
    return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function $r(r) {
    return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Qx(r, e) {
    let t = r;
    do {
        if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Du(t, t.next, r, e)) return !0;
        t = t.next;
    }while (t !== r)
    return !1;
}
function ar(r, e) {
    return Ke(r.prev, r, r.next) < 0 ? Ke(r, e, r.next) >= 0 && Ke(r, r.prev, e) >= 0 : Ke(r, e, r.prev) < 0 || Ke(r, r.next, e) < 0;
}
function ey(r, e) {
    let t = r, n = !1, i = (r.x + e.x) / 2, s = (r.y + e.y) / 2;
    do t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
    while (t !== r)
    return n;
}
function Iu(r, e) {
    let t = new cl(r.i, r.x, r.y), n = new cl(e.i, e.x, e.y), i = r.next, s = e.prev;
    return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function yh(r, e, t, n) {
    let i = new cl(r, e, t);
    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function lr(r) {
    r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function cl(r, e, t) {
    this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function ty(r, e, t, n) {
    let i = 0;
    for(let s = e, o = t - n; s < t; s += n)i += (r[o] - r[s]) * (r[s + 1] + r[o + 1]), o = s;
    return i;
}
var Gt = class {
    static area(e) {
        let t = e.length, n = 0;
        for(let i = t - 1, s = 0; s < t; i = s++)n += e[i].x * e[s].y - e[s].x * e[i].y;
        return n * .5;
    }
    static isClockWise(e) {
        return Gt.area(e) < 0;
    }
    static triangulateShape(e, t) {
        let n = [], i = [], s = [];
        _h(e), vh(n, e);
        let o = e.length;
        t.forEach(_h);
        for(let l = 0; l < t.length; l++)i.push(o), o += t[l].length, vh(n, t[l]);
        let a = Ux.triangulate(n, i);
        for(let l1 = 0; l1 < a.length; l1 += 3)s.push(a.slice(l1, l1 + 3));
        return s;
    }
};
function _h(r) {
    let e = r.length;
    e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function vh(r, e) {
    for(let t = 0; t < e.length; t++)r.push(e[t].x), r.push(e[t].y);
}
var tn = class extends ve {
    constructor(e = new kt([
        new Z(.5, .5),
        new Z(-.5, .5),
        new Z(-.5, -.5),
        new Z(.5, -.5)
    ]), t = {}){
        super(), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: e,
            options: t
        }, e = Array.isArray(e) ? e : [
            e
        ];
        let n = this, i = [], s = [];
        for(let a = 0, l = e.length; a < l; a++){
            let c = e[a];
            o(c);
        }
        this.setAttribute("position", new he(i, 3)), this.setAttribute("uv", new he(s, 2)), this.computeVertexNormals();
        function o(a) {
            let l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1, d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : .2, m = t.bevelSize !== void 0 ? t.bevelSize : f - .1, x = t.bevelOffset !== void 0 ? t.bevelOffset : 0, _ = t.bevelSegments !== void 0 ? t.bevelSegments : 3, g = t.extrudePath, p = t.UVGenerator !== void 0 ? t.UVGenerator : ny;
            t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), h = t.amount);
            let M, y = !1, b, T, R, P;
            g && (M = g.getSpacedPoints(u), y = !0, d = !1, b = g.computeFrenetFrames(u, !1), T = new w, R = new w, P = new w), d || (_ = 0, f = 0, m = 0, x = 0);
            let H = a.extractPoints(c), B = H.shape, v = H.holes;
            if (!Gt.isClockWise(B)) {
                B = B.reverse();
                for(let X = 0, ee = v.length; X < ee; X++){
                    let K = v[X];
                    Gt.isClockWise(K) && (v[X] = K.reverse());
                }
            }
            let D = Gt.triangulateShape(B, v), N = B;
            for(let X1 = 0, ee1 = v.length; X1 < ee1; X1++){
                let K1 = v[X1];
                B = B.concat(K1);
            }
            function z(X, ee, K) {
                return ee || console.error("THREE.ExtrudeGeometry: vec does not exist"), ee.clone().multiplyScalar(K).add(X);
            }
            let F = B.length, W = D.length;
            function j(X, ee, K) {
                let ce, oe, we, Te = X.x - ee.x, ze = X.y - ee.y, Je = K.x - X.x, qe = K.y - X.y, A = Te * Te + ze * ze, S = Te * qe - ze * Je;
                if (Math.abs(S) > Number.EPSILON) {
                    let q = Math.sqrt(A), Q = Math.sqrt(Je * Je + qe * qe), me = ee.x - ze / q, G = ee.y + Te / q, _e = K.x - qe / Q, xe = K.y + Je / Q, re = ((_e - me) * qe - (xe - G) * Je) / (Te * qe - ze * Je);
                    ce = me + Te * re - X.x, oe = G + ze * re - X.y;
                    let ie = ce * ce + oe * oe;
                    if (ie <= 2) return new Z(ce, oe);
                    we = Math.sqrt(ie / 2);
                } else {
                    let q1 = !1;
                    Te > Number.EPSILON ? Je > Number.EPSILON && (q1 = !0) : Te < -Number.EPSILON ? Je < -Number.EPSILON && (q1 = !0) : Math.sign(ze) === Math.sign(qe) && (q1 = !0), q1 ? (ce = -ze, oe = Te, we = Math.sqrt(A)) : (ce = Te, oe = ze, we = Math.sqrt(A / 2));
                }
                return new Z(ce / we, oe / we);
            }
            let ue = [];
            for(let X2 = 0, ee2 = N.length, K2 = ee2 - 1, ce = X2 + 1; X2 < ee2; X2++, K2++, ce++)K2 === ee2 && (K2 = 0), ce === ee2 && (ce = 0), ue[X2] = j(N[X2], N[K2], N[ce]);
            let k = [], $, se = ue.concat();
            for(let X3 = 0, ee3 = v.length; X3 < ee3; X3++){
                let K3 = v[X3];
                $ = [];
                for(let ce1 = 0, oe = K3.length, we = oe - 1, Te = ce1 + 1; ce1 < oe; ce1++, we++, Te++)we === oe && (we = 0), Te === oe && (Te = 0), $[ce1] = j(K3[ce1], K3[we], K3[Te]);
                k.push($), se = se.concat($);
            }
            for(let X4 = 0; X4 < _; X4++){
                let ee4 = X4 / _, K4 = f * Math.cos(ee4 * Math.PI / 2), ce2 = m * Math.sin(ee4 * Math.PI / 2) + x;
                for(let oe1 = 0, we1 = N.length; oe1 < we1; oe1++){
                    let Te1 = z(N[oe1], ue[oe1], ce2);
                    ge(Te1.x, Te1.y, -K4);
                }
                for(let oe2 = 0, we2 = v.length; oe2 < we2; oe2++){
                    let Te2 = v[oe2];
                    $ = k[oe2];
                    for(let ze = 0, Je = Te2.length; ze < Je; ze++){
                        let qe = z(Te2[ze], $[ze], ce2);
                        ge(qe.x, qe.y, -K4);
                    }
                }
            }
            let pe = m + x;
            for(let X5 = 0; X5 < F; X5++){
                let ee5 = d ? z(B[X5], se[X5], pe) : B[X5];
                y ? (R.copy(b.normals[0]).multiplyScalar(ee5.x), T.copy(b.binormals[0]).multiplyScalar(ee5.y), P.copy(M[0]).add(R).add(T), ge(P.x, P.y, P.z)) : ge(ee5.x, ee5.y, 0);
            }
            for(let X6 = 1; X6 <= u; X6++)for(let ee6 = 0; ee6 < F; ee6++){
                let K5 = d ? z(B[ee6], se[ee6], pe) : B[ee6];
                y ? (R.copy(b.normals[X6]).multiplyScalar(K5.x), T.copy(b.binormals[X6]).multiplyScalar(K5.y), P.copy(M[X6]).add(R).add(T), ge(P.x, P.y, P.z)) : ge(K5.x, K5.y, h / u * X6);
            }
            for(let X7 = _ - 1; X7 >= 0; X7--){
                let ee7 = X7 / _, K6 = f * Math.cos(ee7 * Math.PI / 2), ce3 = m * Math.sin(ee7 * Math.PI / 2) + x;
                for(let oe3 = 0, we3 = N.length; oe3 < we3; oe3++){
                    let Te3 = z(N[oe3], ue[oe3], ce3);
                    ge(Te3.x, Te3.y, h + K6);
                }
                for(let oe4 = 0, we4 = v.length; oe4 < we4; oe4++){
                    let Te4 = v[oe4];
                    $ = k[oe4];
                    for(let ze1 = 0, Je1 = Te4.length; ze1 < Je1; ze1++){
                        let qe1 = z(Te4[ze1], $[ze1], ce3);
                        y ? ge(qe1.x, qe1.y + M[u - 1].y, M[u - 1].x + K6) : ge(qe1.x, qe1.y, h + K6);
                    }
                }
            }
            ye(), V();
            function ye() {
                let X = i.length / 3;
                if (d) {
                    let ee = 0, K = F * ee;
                    for(let ce = 0; ce < W; ce++){
                        let oe = D[ce];
                        Se(oe[2] + K, oe[1] + K, oe[0] + K);
                    }
                    ee = u + _ * 2, K = F * ee;
                    for(let ce1 = 0; ce1 < W; ce1++){
                        let oe1 = D[ce1];
                        Se(oe1[0] + K, oe1[1] + K, oe1[2] + K);
                    }
                } else {
                    for(let ee1 = 0; ee1 < W; ee1++){
                        let K1 = D[ee1];
                        Se(K1[2], K1[1], K1[0]);
                    }
                    for(let ee2 = 0; ee2 < W; ee2++){
                        let K2 = D[ee2];
                        Se(K2[0] + F * u, K2[1] + F * u, K2[2] + F * u);
                    }
                }
                n.addGroup(X, i.length / 3 - X, 0);
            }
            function V() {
                let X = i.length / 3, ee = 0;
                Ve(N, ee), ee += N.length;
                for(let K = 0, ce = v.length; K < ce; K++){
                    let oe = v[K];
                    Ve(oe, ee), ee += oe.length;
                }
                n.addGroup(X, i.length / 3 - X, 1);
            }
            function Ve(X, ee) {
                let K = X.length;
                for(; --K >= 0;){
                    let ce = K, oe = K - 1;
                    oe < 0 && (oe = X.length - 1);
                    for(let we = 0, Te = u + _ * 2; we < Te; we++){
                        let ze = F * we, Je = F * (we + 1), qe = ee + ce + ze, A = ee + oe + ze, S = ee + oe + Je, q = ee + ce + Je;
                        le(qe, A, S, q);
                    }
                }
            }
            function ge(X, ee, K) {
                l.push(X), l.push(ee), l.push(K);
            }
            function Se(X, ee, K) {
                Le(X), Le(ee), Le(K);
                let ce = i.length / 3, oe = p.generateTopUV(n, i, ce - 3, ce - 2, ce - 1);
                Ee(oe[0]), Ee(oe[1]), Ee(oe[2]);
            }
            function le(X, ee, K, ce) {
                Le(X), Le(ee), Le(ce), Le(ee), Le(K), Le(ce);
                let oe = i.length / 3, we = p.generateSideWallUV(n, i, oe - 6, oe - 3, oe - 2, oe - 1);
                Ee(we[0]), Ee(we[1]), Ee(we[3]), Ee(we[1]), Ee(we[2]), Ee(we[3]);
            }
            function Le(X) {
                i.push(l[X * 3 + 0]), i.push(l[X * 3 + 1]), i.push(l[X * 3 + 2]);
            }
            function Ee(X) {
                s.push(X.x), s.push(X.y);
            }
        }
    }
    toJSON() {
        let e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
        return iy(t, n, e);
    }
    static fromJSON(e, t) {
        let n = [];
        for(let s = 0, o = e.shapes.length; s < o; s++){
            let a = t[e.shapes[s]];
            n.push(a);
        }
        let i = e.options.extrudePath;
        return i !== void 0 && (e.options.extrudePath = new Gl[i.type]().fromJSON(i)), new tn(n, e.options);
    }
}, ny = {
    generateTopUV: function(r, e, t, n, i) {
        let s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], u = e[i * 3 + 1];
        return [
            new Z(s, o),
            new Z(a, l),
            new Z(c, u)
        ];
    },
    generateSideWallUV: function(r, e, t, n, i, s) {
        let o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], u = e[n * 3 + 1], h = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], m = e[i * 3 + 2], x = e[s * 3], _ = e[s * 3 + 1], g = e[s * 3 + 2];
        return Math.abs(a - u) < Math.abs(o - c) ? [
            new Z(o, 1 - l),
            new Z(c, 1 - h),
            new Z(d, 1 - m),
            new Z(x, 1 - g)
        ] : [
            new Z(a, 1 - l),
            new Z(u, 1 - h),
            new Z(f, 1 - m),
            new Z(_, 1 - g)
        ];
    }
};
function iy(r, e, t) {
    if (t.shapes = [], Array.isArray(r)) for(let n = 0, i = r.length; n < i; n++){
        let s = r[n];
        t.shapes.push(s.uuid);
    }
    else t.shapes.push(r.uuid);
    return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
var es = class extends en {
    constructor(e = 1, t = 0){
        let n = (1 + Math.sqrt(5)) / 2, i = [
            -1,
            n,
            0,
            1,
            n,
            0,
            -1,
            -n,
            0,
            1,
            -n,
            0,
            0,
            -1,
            n,
            0,
            1,
            n,
            0,
            -1,
            -n,
            0,
            1,
            -n,
            n,
            0,
            -1,
            n,
            0,
            1,
            -n,
            0,
            -1,
            -n,
            0,
            1
        ], s = [
            0,
            11,
            5,
            0,
            5,
            1,
            0,
            1,
            7,
            0,
            7,
            10,
            0,
            10,
            11,
            1,
            5,
            9,
            5,
            11,
            4,
            11,
            10,
            2,
            10,
            7,
            6,
            7,
            1,
            8,
            3,
            9,
            4,
            3,
            4,
            2,
            3,
            2,
            6,
            3,
            6,
            8,
            3,
            8,
            9,
            4,
            9,
            5,
            2,
            4,
            11,
            6,
            2,
            10,
            8,
            6,
            7,
            9,
            8,
            1
        ];
        super(i, s, e, t), this.type = "IcosahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new es(e.radius, e.detail);
    }
}, ts = class extends ve {
    constructor(e = [
        new Z(0, .5),
        new Z(.5, 0),
        new Z(0, -.5)
    ], t = 12, n = 0, i = Math.PI * 2){
        super(), this.type = "LatheGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: n,
            phiLength: i
        }, t = Math.floor(t), i = yt(i, 0, Math.PI * 2);
        let s = [], o = [], a = [], l = [], c = [], u = 1 / t, h = new w, d = new Z, f = new w, m = new w, x = new w, _ = 0, g = 0;
        for(let p = 0; p <= e.length - 1; p++)switch(p){
            case 0:
                _ = e[p + 1].x - e[p].x, g = e[p + 1].y - e[p].y, f.x = g * 1, f.y = -_, f.z = g * 0, x.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
                break;
            case e.length - 1:
                l.push(x.x, x.y, x.z);
                break;
            default:
                _ = e[p + 1].x - e[p].x, g = e[p + 1].y - e[p].y, f.x = g * 1, f.y = -_, f.z = g * 0, m.copy(f), f.x += x.x, f.y += x.y, f.z += x.z, f.normalize(), l.push(f.x, f.y, f.z), x.copy(m);
        }
        for(let p1 = 0; p1 <= t; p1++){
            let M = n + p1 * u * i, y = Math.sin(M), b = Math.cos(M);
            for(let T = 0; T <= e.length - 1; T++){
                h.x = e[T].x * y, h.y = e[T].y, h.z = e[T].x * b, o.push(h.x, h.y, h.z), d.x = p1 / t, d.y = T / (e.length - 1), a.push(d.x, d.y);
                let R = l[3 * T + 0] * y, P = l[3 * T + 1], H = l[3 * T + 0] * b;
                c.push(R, P, H);
            }
        }
        for(let p2 = 0; p2 < t; p2++)for(let M1 = 0; M1 < e.length - 1; M1++){
            let y1 = M1 + p2 * e.length, b1 = y1, T1 = y1 + e.length, R1 = y1 + e.length + 1, P1 = y1 + 1;
            s.push(b1, T1, P1), s.push(R1, P1, T1);
        }
        this.setIndex(s), this.setAttribute("position", new he(o, 3)), this.setAttribute("uv", new he(a, 2)), this.setAttribute("normal", new he(c, 3));
    }
    static fromJSON(e) {
        return new ts(e.points, e.segments, e.phiStart, e.phiLength);
    }
}, si = class extends en {
    constructor(e = 1, t = 0){
        let n = [
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1,
            0,
            0,
            0,
            1,
            0,
            0,
            -1
        ], i = [
            0,
            2,
            4,
            0,
            4,
            3,
            0,
            3,
            5,
            0,
            5,
            2,
            1,
            2,
            5,
            1,
            5,
            3,
            1,
            3,
            4,
            1,
            4,
            2
        ];
        super(n, i, e, t), this.type = "OctahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new si(e.radius, e.detail);
    }
}, ns = class extends ve {
    constructor(e = .5, t = 1, n = 8, i = 1, s = 0, o = Math.PI * 2){
        super(), this.type = "RingGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: s,
            thetaLength: o
        }, n = Math.max(3, n), i = Math.max(1, i);
        let a = [], l = [], c = [], u = [], h = e, d = (t - e) / i, f = new w, m = new Z;
        for(let x = 0; x <= i; x++){
            for(let _ = 0; _ <= n; _++){
                let g = s + _ / n * o;
                f.x = h * Math.cos(g), f.y = h * Math.sin(g), l.push(f.x, f.y, f.z), c.push(0, 0, 1), m.x = (f.x / t + 1) / 2, m.y = (f.y / t + 1) / 2, u.push(m.x, m.y);
            }
            h += d;
        }
        for(let x1 = 0; x1 < i; x1++){
            let _1 = x1 * (n + 1);
            for(let g1 = 0; g1 < n; g1++){
                let p = g1 + _1, M = p, y = p + n + 1, b = p + n + 2, T = p + 1;
                a.push(M, y, T), a.push(y, b, T);
            }
        }
        this.setIndex(a), this.setAttribute("position", new he(l, 3)), this.setAttribute("normal", new he(c, 3)), this.setAttribute("uv", new he(u, 2));
    }
    static fromJSON(e) {
        return new ns(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
    }
}, ri = class extends ve {
    constructor(e = new kt([
        new Z(0, .5),
        new Z(-.5, -.5),
        new Z(.5, -.5)
    ]), t = 12){
        super(), this.type = "ShapeGeometry", this.parameters = {
            shapes: e,
            curveSegments: t
        };
        let n = [], i = [], s = [], o = [], a = 0, l = 0;
        if (Array.isArray(e) === !1) c(e);
        else for(let u = 0; u < e.length; u++)c(e[u]), this.addGroup(a, l, u), a += l, l = 0;
        this.setIndex(n), this.setAttribute("position", new he(i, 3)), this.setAttribute("normal", new he(s, 3)), this.setAttribute("uv", new he(o, 2));
        function c(u) {
            let h = i.length / 3, d = u.extractPoints(t), f = d.shape, m = d.holes;
            Gt.isClockWise(f) === !1 && (f = f.reverse());
            for(let _ = 0, g = m.length; _ < g; _++){
                let p = m[_];
                Gt.isClockWise(p) === !0 && (m[_] = p.reverse());
            }
            let x = Gt.triangulateShape(f, m);
            for(let _1 = 0, g1 = m.length; _1 < g1; _1++){
                let p1 = m[_1];
                f = f.concat(p1);
            }
            for(let _2 = 0, g2 = f.length; _2 < g2; _2++){
                let p2 = f[_2];
                i.push(p2.x, p2.y, 0), s.push(0, 0, 1), o.push(p2.x, p2.y);
            }
            for(let _3 = 0, g3 = x.length; _3 < g3; _3++){
                let p3 = x[_3], M = p3[0] + h, y = p3[1] + h, b = p3[2] + h;
                n.push(M, y, b), l += 3;
            }
        }
    }
    toJSON() {
        let e = super.toJSON(), t = this.parameters.shapes;
        return sy(t, e);
    }
    static fromJSON(e, t) {
        let n = [];
        for(let i = 0, s = e.shapes.length; i < s; i++){
            let o = t[e.shapes[i]];
            n.push(o);
        }
        return new ri(n, e.curveSegments);
    }
};
function sy(r, e) {
    if (e.shapes = [], Array.isArray(r)) for(let t = 0, n = r.length; t < n; t++){
        let i = r[t];
        e.shapes.push(i.uuid);
    }
    else e.shapes.push(r.uuid);
    return e;
}
var oi = class extends ve {
    constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, o = 0, a = Math.PI){
        super(), this.type = "SphereGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: i,
            phiLength: s,
            thetaStart: o,
            thetaLength: a
        }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
        let l = Math.min(o + a, Math.PI), c = 0, u = [], h = new w, d = new w, f = [], m = [], x = [], _ = [];
        for(let g = 0; g <= n; g++){
            let p = [], M = g / n, y = 0;
            g == 0 && o == 0 ? y = .5 / t : g == n && l == Math.PI && (y = -.5 / t);
            for(let b = 0; b <= t; b++){
                let T = b / t;
                h.x = -e * Math.cos(i + T * s) * Math.sin(o + M * a), h.y = e * Math.cos(o + M * a), h.z = e * Math.sin(i + T * s) * Math.sin(o + M * a), m.push(h.x, h.y, h.z), d.copy(h).normalize(), x.push(d.x, d.y, d.z), _.push(T + y, 1 - M), p.push(c++);
            }
            u.push(p);
        }
        for(let g1 = 0; g1 < n; g1++)for(let p1 = 0; p1 < t; p1++){
            let M1 = u[g1][p1 + 1], y1 = u[g1][p1], b1 = u[g1 + 1][p1], T1 = u[g1 + 1][p1 + 1];
            (g1 !== 0 || o > 0) && f.push(M1, y1, T1), (g1 !== n - 1 || l < Math.PI) && f.push(y1, b1, T1);
        }
        this.setIndex(f), this.setAttribute("position", new he(m, 3)), this.setAttribute("normal", new he(x, 3)), this.setAttribute("uv", new he(_, 2));
    }
    static fromJSON(e) {
        return new oi(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
    }
}, is = class extends en {
    constructor(e = 1, t = 0){
        let n = [
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            1,
            -1,
            -1
        ], i = [
            2,
            1,
            0,
            0,
            3,
            2,
            1,
            3,
            0,
            2,
            3,
            1
        ];
        super(n, i, e, t), this.type = "TetrahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new is(e.radius, e.detail);
    }
}, ss = class extends ve {
    constructor(e = 1, t = .4, n = 8, i = 6, s = Math.PI * 2){
        super(), this.type = "TorusGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: i,
            arc: s
        }, n = Math.floor(n), i = Math.floor(i);
        let o = [], a = [], l = [], c = [], u = new w, h = new w, d = new w;
        for(let f = 0; f <= n; f++)for(let m = 0; m <= i; m++){
            let x = m / i * s, _ = f / n * Math.PI * 2;
            h.x = (e + t * Math.cos(_)) * Math.cos(x), h.y = (e + t * Math.cos(_)) * Math.sin(x), h.z = t * Math.sin(_), a.push(h.x, h.y, h.z), u.x = e * Math.cos(x), u.y = e * Math.sin(x), d.subVectors(h, u).normalize(), l.push(d.x, d.y, d.z), c.push(m / i), c.push(f / n);
        }
        for(let f1 = 1; f1 <= n; f1++)for(let m1 = 1; m1 <= i; m1++){
            let x1 = (i + 1) * f1 + m1 - 1, _1 = (i + 1) * (f1 - 1) + m1 - 1, g = (i + 1) * (f1 - 1) + m1, p = (i + 1) * f1 + m1;
            o.push(x1, _1, p), o.push(_1, g, p);
        }
        this.setIndex(o), this.setAttribute("position", new he(a, 3)), this.setAttribute("normal", new he(l, 3)), this.setAttribute("uv", new he(c, 2));
    }
    static fromJSON(e) {
        return new ss(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
    }
}, rs = class extends ve {
    constructor(e = 1, t = .4, n = 64, i = 8, s = 2, o = 3){
        super(), this.type = "TorusKnotGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: n,
            radialSegments: i,
            p: s,
            q: o
        }, n = Math.floor(n), i = Math.floor(i);
        let a = [], l = [], c = [], u = [], h = new w, d = new w, f = new w, m = new w, x = new w, _ = new w, g = new w;
        for(let M = 0; M <= n; ++M){
            let y = M / n * s * Math.PI * 2;
            p(y, s, o, e, f), p(y + .01, s, o, e, m), _.subVectors(m, f), g.addVectors(m, f), x.crossVectors(_, g), g.crossVectors(x, _), x.normalize(), g.normalize();
            for(let b = 0; b <= i; ++b){
                let T = b / i * Math.PI * 2, R = -t * Math.cos(T), P = t * Math.sin(T);
                h.x = f.x + (R * g.x + P * x.x), h.y = f.y + (R * g.y + P * x.y), h.z = f.z + (R * g.z + P * x.z), l.push(h.x, h.y, h.z), d.subVectors(h, f).normalize(), c.push(d.x, d.y, d.z), u.push(M / n), u.push(b / i);
            }
        }
        for(let M1 = 1; M1 <= n; M1++)for(let y1 = 1; y1 <= i; y1++){
            let b1 = (i + 1) * (M1 - 1) + (y1 - 1), T1 = (i + 1) * M1 + (y1 - 1), R1 = (i + 1) * M1 + y1, P1 = (i + 1) * (M1 - 1) + y1;
            a.push(b1, T1, P1), a.push(T1, R1, P1);
        }
        this.setIndex(a), this.setAttribute("position", new he(l, 3)), this.setAttribute("normal", new he(c, 3)), this.setAttribute("uv", new he(u, 2));
        function p(M, y, b, T, R) {
            let P = Math.cos(M), H = Math.sin(M), B = b / y * M, v = Math.cos(B);
            R.x = T * (2 + v) * .5 * P, R.y = T * (2 + v) * H * .5, R.z = T * Math.sin(B) * .5;
        }
    }
    static fromJSON(e) {
        return new rs(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
    }
}, os = class extends ve {
    constructor(e = new sr(new w(-1, -1, 0), new w(-1, 1, 0), new w(1, 1, 0)), t = 64, n = 1, i = 8, s = !1){
        super(), this.type = "TubeGeometry", this.parameters = {
            path: e,
            tubularSegments: t,
            radius: n,
            radialSegments: i,
            closed: s
        };
        let o = e.computeFrenetFrames(t, s);
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
        let a = new w, l = new w, c = new Z, u = new w, h = [], d = [], f = [], m = [];
        x(), this.setIndex(m), this.setAttribute("position", new he(h, 3)), this.setAttribute("normal", new he(d, 3)), this.setAttribute("uv", new he(f, 2));
        function x() {
            for(let M = 0; M < t; M++)_(M);
            _(s === !1 ? t : 0), p(), g();
        }
        function _(M) {
            u = e.getPointAt(M / t, u);
            let y = o.normals[M], b = o.binormals[M];
            for(let T = 0; T <= i; T++){
                let R = T / i * Math.PI * 2, P = Math.sin(R), H = -Math.cos(R);
                l.x = H * y.x + P * b.x, l.y = H * y.y + P * b.y, l.z = H * y.z + P * b.z, l.normalize(), d.push(l.x, l.y, l.z), a.x = u.x + n * l.x, a.y = u.y + n * l.y, a.z = u.z + n * l.z, h.push(a.x, a.y, a.z);
            }
        }
        function g() {
            for(let M = 1; M <= t; M++)for(let y = 1; y <= i; y++){
                let b = (i + 1) * (M - 1) + (y - 1), T = (i + 1) * M + (y - 1), R = (i + 1) * M + y, P = (i + 1) * (M - 1) + y;
                m.push(b, T, P), m.push(T, R, P);
            }
        }
        function p() {
            for(let M = 0; M <= t; M++)for(let y = 0; y <= i; y++)c.x = M / t, c.y = y / i, f.push(c.x, c.y);
        }
    }
    toJSON() {
        let e = super.toJSON();
        return e.path = this.parameters.path.toJSON(), e;
    }
    static fromJSON(e) {
        return new os(new Gl[e.path.type]().fromJSON(e.path), e.tubularSegments, e.radius, e.radialSegments, e.closed);
    }
}, bo = class extends ve {
    constructor(e = null){
        if (super(), this.type = "WireframeGeometry", this.parameters = {
            geometry: e
        }, e !== null) {
            let t = [], n = new Set, i = new w, s = new w;
            if (e.index !== null) {
                let o = e.attributes.position, a = e.index, l = e.groups;
                l.length === 0 && (l = [
                    {
                        start: 0,
                        count: a.count,
                        materialIndex: 0
                    }
                ]);
                for(let c = 0, u = l.length; c < u; ++c){
                    let h = l[c], d = h.start, f = h.count;
                    for(let m = d, x = d + f; m < x; m += 3)for(let _ = 0; _ < 3; _++){
                        let g = a.getX(m + _), p = a.getX(m + (_ + 1) % 3);
                        i.fromBufferAttribute(o, g), s.fromBufferAttribute(o, p), Mh(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
                    }
                }
            } else {
                let o1 = e.attributes.position;
                for(let a1 = 0, l1 = o1.count / 3; a1 < l1; a1++)for(let c1 = 0; c1 < 3; c1++){
                    let u1 = 3 * a1 + c1, h1 = 3 * a1 + (c1 + 1) % 3;
                    i.fromBufferAttribute(o1, u1), s.fromBufferAttribute(o1, h1), Mh(i, s, n) === !0 && (t.push(i.x, i.y, i.z), t.push(s.x, s.y, s.z));
                }
            }
            this.setAttribute("position", new he(t, 3));
        }
    }
};
function Mh(r, e, t) {
    let n = `${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;
    return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n, i), !0);
}
var wh = Object.freeze({
    __proto__: null,
    BoxGeometry: gn,
    BoxBufferGeometry: gn,
    CircleGeometry: Yi,
    CircleBufferGeometry: Yi,
    ConeGeometry: Zi,
    ConeBufferGeometry: Zi,
    CylinderGeometry: Un,
    CylinderBufferGeometry: Un,
    DodecahedronGeometry: $i,
    DodecahedronBufferGeometry: $i,
    EdgesGeometry: _o,
    ExtrudeGeometry: tn,
    ExtrudeBufferGeometry: tn,
    IcosahedronGeometry: es,
    IcosahedronBufferGeometry: es,
    LatheGeometry: ts,
    LatheBufferGeometry: ts,
    OctahedronGeometry: si,
    OctahedronBufferGeometry: si,
    PlaneGeometry: ni,
    PlaneBufferGeometry: ni,
    PolyhedronGeometry: en,
    PolyhedronBufferGeometry: en,
    RingGeometry: ns,
    RingBufferGeometry: ns,
    ShapeGeometry: ri,
    ShapeBufferGeometry: ri,
    SphereGeometry: oi,
    SphereBufferGeometry: oi,
    TetrahedronGeometry: is,
    TetrahedronBufferGeometry: is,
    TorusGeometry: ss,
    TorusBufferGeometry: ss,
    TorusKnotGeometry: rs,
    TorusKnotBufferGeometry: rs,
    TubeGeometry: os,
    TubeBufferGeometry: os,
    WireframeGeometry: bo
}), So = class extends ft {
    constructor(e){
        super(), this.type = "ShadowMaterial", this.color = new ne(0), this.transparent = !0, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this;
    }
};
So.prototype.isShadowMaterial = !0;
var cr = class extends ft {
    constructor(e){
        super(), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new ne(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = gs, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.defines = {
            STANDARD: ""
        }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this;
    }
};
cr.prototype.isMeshStandardMaterial = !0;
var Eo = class extends cr {
    constructor(e){
        super(), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Z(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
                return yt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t);
            }
        }), this.sheenColor = new ne(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new ne(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ne(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(e);
    }
    get sheen() {
        return this._sheen;
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
    }
    get clearcoat() {
        return this._clearcoat;
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
    }
    get transmission() {
        return this._transmission;
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
    }
    copy(e) {
        return super.copy(e), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
    }
};
Eo.prototype.isMeshPhysicalMaterial = !0;
var To = class extends ft {
    constructor(e){
        super(), this.type = "MeshPhongMaterial", this.color = new ne(16777215), this.specular = new ne(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = gs, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Jo, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this;
    }
};
To.prototype.isMeshPhongMaterial = !0;
var Ao = class extends ft {
    constructor(e){
        super(), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.color = new ne(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = gs, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this;
    }
};
Ao.prototype.isMeshToonMaterial = !0;
var Ro = class extends ft {
    constructor(e){
        super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = gs, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
    }
};
Ro.prototype.isMeshNormalMaterial = !0;
var Co = class extends ft {
    constructor(e){
        super(), this.type = "MeshLambertMaterial", this.color = new ne(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Jo, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this;
    }
};
Co.prototype.isMeshLambertMaterial = !0;
var Lo = class extends ft {
    constructor(e){
        super(), this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new ne(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = gs, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.defines = {
            MATCAP: ""
        }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this;
    }
};
Lo.prototype.isMeshMatcapMaterial = !0;
var Po = class extends pt {
    constructor(e){
        super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
    }
};
Po.prototype.isLineDashedMaterial = !0;
var ry = Object.freeze({
    __proto__: null,
    ShadowMaterial: So,
    SpriteMaterial: js,
    RawShaderMaterial: ii,
    ShaderMaterial: Kt,
    PointsMaterial: On,
    MeshPhysicalMaterial: Eo,
    MeshStandardMaterial: cr,
    MeshPhongMaterial: To,
    MeshToonMaterial: Ao,
    MeshNormalMaterial: Ro,
    MeshLambertMaterial: Co,
    MeshDepthMaterial: Js,
    MeshDistanceMaterial: Ys,
    MeshBasicMaterial: jt,
    MeshMatcapMaterial: Lo,
    LineDashedMaterial: Po,
    LineBasicMaterial: pt,
    Material: ft
}), $e = {
    arraySlice: function(r, e, t) {
        return $e.isTypedArray(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t);
    },
    convertArray: function(r, e, t) {
        return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
    },
    isTypedArray: function(r) {
        return ArrayBuffer.isView(r) && !(r instanceof DataView);
    },
    getKeyframeOrder: function(r) {
        function e(i, s) {
            return r[i] - r[s];
        }
        let t = r.length, n = new Array(t);
        for(let i = 0; i !== t; ++i)n[i] = i;
        return n.sort(e), n;
    },
    sortedArray: function(r, e, t) {
        let n = r.length, i = new r.constructor(n);
        for(let s = 0, o = 0; o !== n; ++s){
            let a = t[s] * e;
            for(let l = 0; l !== e; ++l)i[o++] = r[a + l];
        }
        return i;
    },
    flattenJSON: function(r, e, t, n) {
        let i = 1, s = r[0];
        for(; s !== void 0 && s[n] === void 0;)s = r[i++];
        if (s === void 0) return;
        let o = s[n];
        if (o !== void 0) if (Array.isArray(o)) do o = s[n], o !== void 0 && (e.push(s.time), t.push.apply(t, o)), s = r[i++];
        while (s !== void 0)
        else if (o.toArray !== void 0) do o = s[n], o !== void 0 && (e.push(s.time), o.toArray(t, t.length)), s = r[i++];
        while (s !== void 0)
        else do o = s[n], o !== void 0 && (e.push(s.time), t.push(o)), s = r[i++];
        while (s !== void 0)
    },
    subclip: function(r, e, t, n, i = 30) {
        let s = r.clone();
        s.name = e;
        let o = [];
        for(let l = 0; l < s.tracks.length; ++l){
            let c = s.tracks[l], u = c.getValueSize(), h = [], d = [];
            for(let f = 0; f < c.times.length; ++f){
                let m = c.times[f] * i;
                if (!(m < t || m >= n)) {
                    h.push(c.times[f]);
                    for(let x = 0; x < u; ++x)d.push(c.values[f * u + x]);
                }
            }
            h.length !== 0 && (c.times = $e.convertArray(h, c.times.constructor), c.values = $e.convertArray(d, c.values.constructor), o.push(c));
        }
        s.tracks = o;
        let a = 1 / 0;
        for(let l1 = 0; l1 < s.tracks.length; ++l1)a > s.tracks[l1].times[0] && (a = s.tracks[l1].times[0]);
        for(let l2 = 0; l2 < s.tracks.length; ++l2)s.tracks[l2].shift(-1 * a);
        return s.resetDuration(), s;
    },
    makeClipAdditive: function(r, e = 0, t = r, n = 30) {
        n <= 0 && (n = 30);
        let i = t.tracks.length, s = e / n;
        for(let o = 0; o < i; ++o){
            let a = t.tracks[o], l = a.ValueTypeName;
            if (l === "bool" || l === "string") continue;
            let c = r.tracks.find(function(g) {
                return g.name === a.name && g.ValueTypeName === l;
            });
            if (c === void 0) continue;
            let u = 0, h = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = h / 3);
            let d = 0, f = c.getValueSize();
            c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
            let m = a.times.length - 1, x;
            if (s <= a.times[0]) {
                let g = u, p = h - u;
                x = $e.arraySlice(a.values, g, p);
            } else if (s >= a.times[m]) {
                let g1 = m * h + u, p1 = g1 + h - u;
                x = $e.arraySlice(a.values, g1, p1);
            } else {
                let g2 = a.createInterpolant(), p2 = u, M = h - u;
                g2.evaluate(s), x = $e.arraySlice(g2.resultBuffer, p2, M);
            }
            l === "quaternion" && new gt().fromArray(x).normalize().conjugate().toArray(x);
            let _ = c.times.length;
            for(let g3 = 0; g3 < _; ++g3){
                let p3 = g3 * f + d;
                if (l === "quaternion") gt.multiplyQuaternionsFlat(c.values, p3, x, 0, c.values, p3);
                else {
                    let M1 = f - d * 2;
                    for(let y = 0; y < M1; ++y)c.values[p3 + y] -= x[y];
                }
            }
        }
        return r.blendMode = pu, r;
    }
}, nn = class {
    constructor(e, t, n, i){
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(e) {
        let t = this.parameterPositions, n = this._cachedIndex, i = t[n], s = t[n - 1];
        e: {
            t: {
                let o;
                n: {
                    i: if (!(e < i)) {
                        for(let a = n + 2;;){
                            if (i === void 0) {
                                if (e < s) break i;
                                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, s);
                            }
                            if (n === a) break;
                            if (s = i, i = t[++n], e < i) break t;
                        }
                        o = t.length;
                        break n;
                    }
                    if (!(e >= s)) {
                        let a1 = t[1];
                        e < a1 && (n = 2, s = a1);
                        for(let l = n - 2;;){
                            if (s === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                            if (n === l) break;
                            if (i = s, s = t[--n - 1], e >= s) break t;
                        }
                        o = n, n = 0;
                        break n;
                    }
                    break e;
                }
                for(; n < o;){
                    let a2 = n + o >>> 1;
                    e < t[a2] ? o = a2 : n = a2 + 1;
                }
                if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                if (i === void 0) return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, s, e);
            }
            this._cachedIndex = n, this.intervalChanged_(n, s, i);
        }
        return this.interpolate_(n, s, e, i);
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
        let t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
        for(let o = 0; o !== i; ++o)t[o] = n[s + o];
        return t;
    }
    interpolate_() {
        throw new Error("call to abstract method");
    }
    intervalChanged_() {}
};
nn.prototype.beforeStart_ = nn.prototype.copySampleValue_;
nn.prototype.afterEnd_ = nn.prototype.copySampleValue_;
var hl = class extends nn {
    constructor(e, t, n, i){
        super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: Li,
            endingEnd: Li
        };
    }
    intervalChanged_(e, t, n) {
        let i = this.parameterPositions, s = e - 2, o = e + 1, a = i[s], l = i[o];
        if (a === void 0) switch(this.getSettings_().endingStart){
            case Pi:
                s = e, a = 2 * t - n;
                break;
            case uo:
                s = i.length - 2, a = t + i[s] - i[s + 1];
                break;
            default:
                s = e, a = n;
        }
        if (l === void 0) switch(this.getSettings_().endingEnd){
            case Pi:
                o = e, l = 2 * n - t;
                break;
            case uo:
                o = 1, l = n + i[1] - i[0];
                break;
            default:
                o = e - 1, l = t;
        }
        let c = (n - t) * .5, u = this.valueSize;
        this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = s * u, this._offsetNext = o * u;
    }
    interpolate_(e, t, n, i) {
        let s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - t) / (i - t), x = m * m, _ = x * m, g = -d * _ + 2 * d * x - d * m, p = (1 + d) * _ + (-1.5 - 2 * d) * x + (-.5 + d) * m + 1, M = (-1 - f) * _ + (1.5 + f) * x + .5 * m, y = f * _ - f * x;
        for(let b = 0; b !== a; ++b)s[b] = g * o[u + b] + p * o[c + b] + M * o[l + b] + y * o[h + b];
        return s;
    }
}, Do = class extends nn {
    constructor(e, t, n, i){
        super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
        let s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (i - t), h = 1 - u;
        for(let d = 0; d !== a; ++d)s[d] = o[c + d] * h + o[l + d] * u;
        return s;
    }
}, ul = class extends nn {
    constructor(e, t, n, i){
        super(e, t, n, i);
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1);
    }
}, Nt = class {
    constructor(e, t, n, i){
        if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e, this.times = $e.convertArray(t, this.TimeBufferType), this.values = $e.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(e) {
        let t = e.constructor, n;
        if (t.toJSON !== this.toJSON) n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: $e.convertArray(e.times, Array),
                values: $e.convertArray(e.values, Array)
            };
            let i = e.getInterpolation();
            i !== e.DefaultInterpolation && (n.interpolation = i);
        }
        return n.type = e.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new ul(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
        return new Do(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
        return new hl(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
        let t;
        switch(e){
            case co:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case ho:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case na:
                t = this.InterpolantFactoryMethodSmooth;
                break;
        }
        if (t === void 0) {
            let n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
            else throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n), this;
        }
        return this.createInterpolant = t, this;
    }
    getInterpolation() {
        switch(this.createInterpolant){
            case this.InterpolantFactoryMethodDiscrete:
                return co;
            case this.InterpolantFactoryMethodLinear:
                return ho;
            case this.InterpolantFactoryMethodSmooth:
                return na;
        }
    }
    getValueSize() {
        return this.values.length / this.times.length;
    }
    shift(e) {
        if (e !== 0) {
            let t = this.times;
            for(let n = 0, i = t.length; n !== i; ++n)t[n] += e;
        }
        return this;
    }
    scale(e) {
        if (e !== 1) {
            let t = this.times;
            for(let n = 0, i = t.length; n !== i; ++n)t[n] *= e;
        }
        return this;
    }
    trim(e, t) {
        let n = this.times, i = n.length, s = 0, o = i - 1;
        for(; s !== i && n[s] < e;)++s;
        for(; o !== -1 && n[o] > t;)--o;
        if (++o, s !== 0 || o !== i) {
            s >= o && (o = Math.max(o, 1), s = o - 1);
            let a = this.getValueSize();
            this.times = $e.arraySlice(n, s, o), this.values = $e.arraySlice(this.values, s * a, o * a);
        }
        return this;
    }
    validate() {
        let e = !0, t = this.getValueSize();
        t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
        let n = this.times, i = this.values, s = n.length;
        s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
        let o = null;
        for(let a = 0; a !== s; a++){
            let l = n[a];
            if (typeof l == "number" && isNaN(l)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1;
                break;
            }
            if (o !== null && o > l) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = !1;
                break;
            }
            o = l;
        }
        if (i !== void 0 && $e.isTypedArray(i)) for(let a1 = 0, l1 = i.length; a1 !== l1; ++a1){
            let c = i[a1];
            if (isNaN(c)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a1, c), e = !1;
                break;
            }
        }
        return e;
    }
    optimize() {
        let e = $e.arraySlice(this.times), t = $e.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === na, s = e.length - 1, o = 1;
        for(let a = 1; a < s; ++a){
            let l = !1, c = e[a], u = e[a + 1];
            if (c !== u && (a !== 1 || c !== e[0])) if (i) l = !0;
            else {
                let h = a * n, d = h - n, f = h + n;
                for(let m = 0; m !== n; ++m){
                    let x = t[h + m];
                    if (x !== t[d + m] || x !== t[f + m]) {
                        l = !0;
                        break;
                    }
                }
            }
            if (l) {
                if (a !== o) {
                    e[o] = e[a];
                    let h1 = a * n, d1 = o * n;
                    for(let f1 = 0; f1 !== n; ++f1)t[d1 + f1] = t[h1 + f1];
                }
                ++o;
            }
        }
        if (s > 0) {
            e[o] = e[s];
            for(let a1 = s * n, l1 = o * n, c1 = 0; c1 !== n; ++c1)t[l1 + c1] = t[a1 + c1];
            ++o;
        }
        return o !== e.length ? (this.times = $e.arraySlice(e, 0, o), this.values = $e.arraySlice(t, 0, o * n)) : (this.times = e, this.values = t), this;
    }
    clone() {
        let e = $e.arraySlice(this.times, 0), t = $e.arraySlice(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
        return i.createInterpolant = this.createInterpolant, i;
    }
};
Nt.prototype.TimeBufferType = Float32Array;
Nt.prototype.ValueBufferType = Float32Array;
Nt.prototype.DefaultInterpolation = ho;
var Vn = class extends Nt {
};
Vn.prototype.ValueTypeName = "bool";
Vn.prototype.ValueBufferType = Array;
Vn.prototype.DefaultInterpolation = co;
Vn.prototype.InterpolantFactoryMethodLinear = void 0;
Vn.prototype.InterpolantFactoryMethodSmooth = void 0;
var Io = class extends Nt {
};
Io.prototype.ValueTypeName = "color";
var as = class extends Nt {
};
as.prototype.ValueTypeName = "number";
var dl = class extends nn {
    constructor(e, t, n, i){
        super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
        let s = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t), c = e * a;
        for(let u = c + a; c !== u; c += 4)gt.slerpFlat(s, 0, o, c - a, o, c, l);
        return s;
    }
}, ai = class extends Nt {
    InterpolantFactoryMethodLinear(e) {
        return new dl(this.times, this.values, this.getValueSize(), e);
    }
};
ai.prototype.ValueTypeName = "quaternion";
ai.prototype.DefaultInterpolation = ho;
ai.prototype.InterpolantFactoryMethodSmooth = void 0;
var kn = class extends Nt {
};
kn.prototype.ValueTypeName = "string";
kn.prototype.ValueBufferType = Array;
kn.prototype.DefaultInterpolation = co;
kn.prototype.InterpolantFactoryMethodLinear = void 0;
kn.prototype.InterpolantFactoryMethodSmooth = void 0;
var ls = class extends Nt {
};
ls.prototype.ValueTypeName = "vector";
var cs = class {
    constructor(e, t = -1, n, i = Ul){
        this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = It(), this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
        let t = [], n = e.tracks, i = 1 / (e.fps || 1);
        for(let o = 0, a = n.length; o !== a; ++o)t.push(ay(n[o]).scale(i));
        let s = new this(e.name, e.duration, t, e.blendMode);
        return s.uuid = e.uuid, s;
    }
    static toJSON(e) {
        let t = [], n = e.tracks, i = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid,
            blendMode: e.blendMode
        };
        for(let s = 0, o = n.length; s !== o; ++s)t.push(Nt.toJSON(n[s]));
        return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
        let s = t.length, o = [];
        for(let a = 0; a < s; a++){
            let l = [], c = [];
            l.push((a + s - 1) % s, a, (a + 1) % s), c.push(0, 1, 0);
            let u = $e.getKeyframeOrder(l);
            l = $e.sortedArray(l, 1, u), c = $e.sortedArray(c, 1, u), !i && l[0] === 0 && (l.push(s), c.push(c[0])), o.push(new as(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n));
        }
        return new this(e, -1, o);
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            let i = e;
            n = i.geometry && i.geometry.animations || i.animations;
        }
        for(let i1 = 0; i1 < n.length; i1++)if (n[i1].name === t) return n[i1];
        return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        let i = {}, s = /^([\w-]*?)([\d]+)$/;
        for(let a = 0, l = e.length; a < l; a++){
            let c = e[a], u = c.name.match(s);
            if (u && u.length > 1) {
                let h = u[1], d = i[h];
                d || (i[h] = d = []), d.push(c);
            }
        }
        let o = [];
        for(let a1 in i)o.push(this.CreateFromMorphTargetSequence(a1, i[a1], t, n));
        return o;
    }
    static parseAnimation(e, t) {
        if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
        let n = function(h, d, f, m, x) {
            if (f.length !== 0) {
                let _ = [], g = [];
                $e.flattenJSON(f, _, g, m), _.length !== 0 && x.push(new h(d, _, g));
            }
        }, i = [], s = e.name || "default", o = e.fps || 30, a = e.blendMode, l = e.length || -1, c = e.hierarchy || [];
        for(let h = 0; h < c.length; h++){
            let d = c[h].keys;
            if (!(!d || d.length === 0)) if (d[0].morphTargets) {
                let f = {}, m;
                for(m = 0; m < d.length; m++)if (d[m].morphTargets) for(let x = 0; x < d[m].morphTargets.length; x++)f[d[m].morphTargets[x]] = -1;
                for(let x1 in f){
                    let _ = [], g = [];
                    for(let p = 0; p !== d[m].morphTargets.length; ++p){
                        let M = d[m];
                        _.push(M.time), g.push(M.morphTarget === x1 ? 1 : 0);
                    }
                    i.push(new as(".morphTargetInfluence[" + x1 + "]", _, g));
                }
                l = f.length * (o || 1);
            } else {
                let f1 = ".bones[" + t[h].name + "]";
                n(ls, f1 + ".position", d, "pos", i), n(ai, f1 + ".quaternion", d, "rot", i), n(ls, f1 + ".scale", d, "scl", i);
            }
        }
        return i.length === 0 ? null : new this(s, l, i, a);
    }
    resetDuration() {
        let e = this.tracks, t = 0;
        for(let n = 0, i = e.length; n !== i; ++n){
            let s = this.tracks[n];
            t = Math.max(t, s.times[s.times.length - 1]);
        }
        return this.duration = t, this;
    }
    trim() {
        for(let e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration);
        return this;
    }
    validate() {
        let e = !0;
        for(let t = 0; t < this.tracks.length; t++)e = e && this.tracks[t].validate();
        return e;
    }
    optimize() {
        for(let e = 0; e < this.tracks.length; e++)this.tracks[e].optimize();
        return this;
    }
    clone() {
        let e = [];
        for(let t = 0; t < this.tracks.length; t++)e.push(this.tracks[t].clone());
        return new this.constructor(this.name, this.duration, e, this.blendMode);
    }
    toJSON() {
        return this.constructor.toJSON(this);
    }
};
function oy(r) {
    switch(r.toLowerCase()){
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return as;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return ls;
        case "color":
            return Io;
        case "quaternion":
            return ai;
        case "bool":
        case "boolean":
            return Vn;
        case "string":
            return kn;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function ay(r) {
    if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    let e = oy(r.type);
    if (r.times === void 0) {
        let t = [], n = [];
        $e.flattenJSON(r.keys, t, n, "value"), r.times = t, r.values = n;
    }
    return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
var hs = {
    enabled: !1,
    files: {},
    add: function(r, e) {
        this.enabled !== !1 && (this.files[r] = e);
    },
    get: function(r) {
        if (this.enabled !== !1) return this.files[r];
    },
    remove: function(r) {
        delete this.files[r];
    },
    clear: function() {
        this.files = {};
    }
}, Fo = class {
    constructor(e, t, n){
        let i = this, s = !1, o = 0, a = 0, l, c = [];
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
            a++, s === !1 && i.onStart !== void 0 && i.onStart(u, o, a), s = !0;
        }, this.itemEnd = function(u) {
            o++, i.onProgress !== void 0 && i.onProgress(u, o, a), o === a && (s = !1, i.onLoad !== void 0 && i.onLoad());
        }, this.itemError = function(u) {
            i.onError !== void 0 && i.onError(u);
        }, this.resolveURL = function(u) {
            return l ? l(u) : u;
        }, this.setURLModifier = function(u) {
            return l = u, this;
        }, this.addHandler = function(u, h) {
            return c.push(u, h), this;
        }, this.removeHandler = function(u) {
            let h = c.indexOf(u);
            return h !== -1 && c.splice(h, 2), this;
        }, this.getHandler = function(u) {
            for(let h = 0, d = c.length; h < d; h += 2){
                let f = c[h], m = c[h + 1];
                if (f.global && (f.lastIndex = 0), f.test(u)) return m;
            }
            return null;
        };
    }
}, ly = new Fo, St = class {
    constructor(e){
        this.manager = e !== void 0 ? e : ly, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {}
    loadAsync(e, t) {
        let n = this;
        return new Promise(function(i, s) {
            n.load(e, i, t, s);
        });
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e, this;
    }
    setWithCredentials(e) {
        return this.withCredentials = e, this;
    }
    setPath(e) {
        return this.path = e, this;
    }
    setResourcePath(e) {
        return this.resourcePath = e, this;
    }
    setRequestHeader(e) {
        return this.requestHeader = e, this;
    }
}, un = {}, Wt = class extends St {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        let s = hs.get(e);
        if (s !== void 0) return this.manager.itemStart(e), setTimeout(()=>{
            t && t(s), this.manager.itemEnd(e);
        }, 0), s;
        if (un[e] !== void 0) {
            un[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            });
            return;
        }
        un[e] = [], un[e].push({
            onLoad: t,
            onProgress: n,
            onError: i
        });
        let o = new Request(e, {
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        }), a = this.mimeType, l = this.responseType;
        fetch(o).then((c)=>{
            if (c.status === 200 || c.status === 0) {
                if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body.getReader === void 0) return c;
                let u = un[e], h = c.body.getReader(), d = c.headers.get("Content-Length"), f = d ? parseInt(d) : 0, m = f !== 0, x = 0, _ = new ReadableStream({
                    start (g) {
                        p();
                        function p() {
                            h.read().then(({ done: M , value: y  })=>{
                                if (M) g.close();
                                else {
                                    x += y.byteLength;
                                    let b = new ProgressEvent("progress", {
                                        lengthComputable: m,
                                        loaded: x,
                                        total: f
                                    });
                                    for(let T = 0, R = u.length; T < R; T++){
                                        let P = u[T];
                                        P.onProgress && P.onProgress(b);
                                    }
                                    g.enqueue(y), p();
                                }
                            });
                        }
                    }
                });
                return new Response(_);
            } else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`);
        }).then((c)=>{
            switch(l){
                case "arraybuffer":
                    return c.arrayBuffer();
                case "blob":
                    return c.blob();
                case "document":
                    return c.text().then((u)=>new DOMParser().parseFromString(u, a));
                case "json":
                    return c.json();
                default:
                    if (a === void 0) return c.text();
                    {
                        let h = /charset="?([^;"\s]*)"?/i.exec(a), d = h && h[1] ? h[1].toLowerCase() : void 0, f = new TextDecoder(d);
                        return c.arrayBuffer().then((m)=>f.decode(m));
                    }
            }
        }).then((c)=>{
            hs.add(e, c);
            let u = un[e];
            delete un[e];
            for(let h = 0, d = u.length; h < d; h++){
                let f = u[h];
                f.onLoad && f.onLoad(c);
            }
        }).catch((c)=>{
            let u = un[e];
            if (u === void 0) throw this.manager.itemError(e), c;
            delete un[e];
            for(let h = 0, d = u.length; h < d; h++){
                let f = u[h];
                f.onError && f.onError(c);
            }
            this.manager.itemError(e);
        }).finally(()=>{
            this.manager.itemEnd(e);
        }), this.manager.itemStart(e);
    }
    setResponseType(e) {
        return this.responseType = e, this;
    }
    setMimeType(e) {
        return this.mimeType = e, this;
    }
}, us = class extends St {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        let s = this, o = hs.get(e);
        if (o !== void 0) return s.manager.itemStart(e), setTimeout(function() {
            t && t(o), s.manager.itemEnd(e);
        }, 0), o;
        let a = Us("img");
        function l() {
            u(), hs.add(e, this), t && t(this), s.manager.itemEnd(e);
        }
        function c(h) {
            u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
        }
        function u() {
            a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
        }
        return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
    }
}, fl = class extends St {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let s = new ti, o = new us(this.manager);
        o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
        let a = 0;
        function l(c) {
            o.load(e[c], function(u) {
                s.images[c] = u, a++, a === 6 && (s.needsUpdate = !0, t && t(s));
            }, void 0, i);
        }
        for(let c = 0; c < e.length; ++c)l(c);
        return s;
    }
}, ml = class extends St {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let s = new at, o = new us(this.manager);
        return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
            s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
        }, n, i), s;
    }
}, Bt = class extends Ie {
    constructor(e, t = 1){
        super(), this.type = "Light", this.color = new ne(e), this.intensity = t;
    }
    dispose() {}
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
    }
};
Bt.prototype.isLight = !0;
var No = class extends Bt {
    constructor(e, t, n){
        super(e, n), this.type = "HemisphereLight", this.position.copy(Ie.DefaultUp), this.updateMatrix(), this.groundColor = new ne(t);
    }
    copy(e) {
        return Bt.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this;
    }
};
No.prototype.isHemisphereLight = !0;
var Eh = new de, Th = new w, Ah = new w, hr = class {
    constructor(e){
        this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Z(512, 512), this.map = null, this.mapPass = null, this.matrix = new de, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Gi, this._frameExtents = new Z(1, 1), this._viewportCount = 1, this._viewports = [
            new Ge(0, 0, 1, 1)
        ];
    }
    getViewportCount() {
        return this._viewportCount;
    }
    getFrustum() {
        return this._frustum;
    }
    updateMatrices(e) {
        let t = this.camera, n = this.matrix;
        Th.setFromMatrixPosition(e.matrixWorld), t.position.copy(Th), Ah.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ah), t.updateMatrixWorld(), Eh.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Eh), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
    }
    getViewport(e) {
        return this._viewports[e];
    }
    getFrameExtents() {
        return this._frameExtents;
    }
    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(e) {
        return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    toJSON() {
        let e = {};
        return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
    }
}, Bo = class extends hr {
    constructor(){
        super(new dt(50, 1, .5, 500)), this.focus = 1;
    }
    updateMatrices(e) {
        let t = this.camera, n = Os * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
        (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
    }
    copy(e) {
        return super.copy(e), this.focus = e.focus, this;
    }
};
Bo.prototype.isSpotLightShadow = !0;
var zo = class extends Bt {
    constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 1){
        super(e, t), this.type = "SpotLight", this.position.copy(Ie.DefaultUp), this.updateMatrix(), this.target = new Ie, this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.shadow = new Bo;
    }
    get power() {
        return this.intensity * Math.PI;
    }
    set power(e) {
        this.intensity = e / Math.PI;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e) {
        return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
};
zo.prototype.isSpotLight = !0;
var Rh = new de, As = new w, Fa = new w, Oo = class extends hr {
    constructor(){
        super(new dt(90, 1, .5, 500)), this._frameExtents = new Z(4, 2), this._viewportCount = 6, this._viewports = [
            new Ge(2, 1, 1, 1),
            new Ge(0, 1, 1, 1),
            new Ge(3, 1, 1, 1),
            new Ge(1, 1, 1, 1),
            new Ge(3, 0, 1, 1),
            new Ge(1, 0, 1, 1)
        ], this._cubeDirections = [
            new w(1, 0, 0),
            new w(-1, 0, 0),
            new w(0, 0, 1),
            new w(0, 0, -1),
            new w(0, 1, 0),
            new w(0, -1, 0)
        ], this._cubeUps = [
            new w(0, 1, 0),
            new w(0, 1, 0),
            new w(0, 1, 0),
            new w(0, 1, 0),
            new w(0, 0, 1),
            new w(0, 0, -1)
        ];
    }
    updateMatrices(e, t = 0) {
        let n = this.camera, i = this.matrix, s = e.distance || n.far;
        s !== n.far && (n.far = s, n.updateProjectionMatrix()), As.setFromMatrixPosition(e.matrixWorld), n.position.copy(As), Fa.copy(n.position), Fa.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Fa), n.updateMatrixWorld(), i.makeTranslation(-As.x, -As.y, -As.z), Rh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Rh);
    }
};
Oo.prototype.isPointLightShadow = !0;
var Uo = class extends Bt {
    constructor(e, t, n = 0, i = 1){
        super(e, t), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Oo;
    }
    get power() {
        return this.intensity * 4 * Math.PI;
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI);
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e) {
        return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
    }
};
Uo.prototype.isPointLight = !0;
var Ho = class extends hr {
    constructor(){
        super(new Wi(-5, 5, 5, -5, .5, 500));
    }
};
Ho.prototype.isDirectionalLightShadow = !0;
var Vo = class extends Bt {
    constructor(e, t){
        super(e, t), this.type = "DirectionalLight", this.position.copy(Ie.DefaultUp), this.updateMatrix(), this.target = new Ie, this.shadow = new Ho;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e) {
        return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
};
Vo.prototype.isDirectionalLight = !0;
var ko = class extends Bt {
    constructor(e, t){
        super(e, t), this.type = "AmbientLight";
    }
};
ko.prototype.isAmbientLight = !0;
var Go = class extends Bt {
    constructor(e, t, n = 10, i = 10){
        super(e, t), this.type = "RectAreaLight", this.width = n, this.height = i;
    }
    get power() {
        return this.intensity * this.width * this.height * Math.PI;
    }
    set power(e) {
        this.intensity = e / (this.width * this.height * Math.PI);
    }
    copy(e) {
        return super.copy(e), this.width = e.width, this.height = e.height, this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.width = this.width, t.object.height = this.height, t;
    }
};
Go.prototype.isRectAreaLight = !0;
var Wo = class {
    constructor(){
        this.coefficients = [];
        for(let e = 0; e < 9; e++)this.coefficients.push(new w);
    }
    set(e) {
        for(let t = 0; t < 9; t++)this.coefficients[t].copy(e[t]);
        return this;
    }
    zero() {
        for(let e = 0; e < 9; e++)this.coefficients[e].set(0, 0, 0);
        return this;
    }
    getAt(e, t) {
        let n = e.x, i = e.y, s = e.z, o = this.coefficients;
        return t.copy(o[0]).multiplyScalar(.282095), t.addScaledVector(o[1], .488603 * i), t.addScaledVector(o[2], .488603 * s), t.addScaledVector(o[3], .488603 * n), t.addScaledVector(o[4], 1.092548 * (n * i)), t.addScaledVector(o[5], 1.092548 * (i * s)), t.addScaledVector(o[6], .315392 * (3 * s * s - 1)), t.addScaledVector(o[7], 1.092548 * (n * s)), t.addScaledVector(o[8], .546274 * (n * n - i * i)), t;
    }
    getIrradianceAt(e, t) {
        let n = e.x, i = e.y, s = e.z, o = this.coefficients;
        return t.copy(o[0]).multiplyScalar(.886227), t.addScaledVector(o[1], 2 * .511664 * i), t.addScaledVector(o[2], 2 * .511664 * s), t.addScaledVector(o[3], 2 * .511664 * n), t.addScaledVector(o[4], 2 * .429043 * n * i), t.addScaledVector(o[5], 2 * .429043 * i * s), t.addScaledVector(o[6], .743125 * s * s - .247708), t.addScaledVector(o[7], 2 * .429043 * n * s), t.addScaledVector(o[8], .429043 * (n * n - i * i)), t;
    }
    add(e) {
        for(let t = 0; t < 9; t++)this.coefficients[t].add(e.coefficients[t]);
        return this;
    }
    addScaledSH(e, t) {
        for(let n = 0; n < 9; n++)this.coefficients[n].addScaledVector(e.coefficients[n], t);
        return this;
    }
    scale(e) {
        for(let t = 0; t < 9; t++)this.coefficients[t].multiplyScalar(e);
        return this;
    }
    lerp(e, t) {
        for(let n = 0; n < 9; n++)this.coefficients[n].lerp(e.coefficients[n], t);
        return this;
    }
    equals(e) {
        for(let t = 0; t < 9; t++)if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
        return !0;
    }
    copy(e) {
        return this.set(e.coefficients);
    }
    clone() {
        return new this.constructor().copy(this);
    }
    fromArray(e, t = 0) {
        let n = this.coefficients;
        for(let i = 0; i < 9; i++)n[i].fromArray(e, t + i * 3);
        return this;
    }
    toArray(e = [], t = 0) {
        let n = this.coefficients;
        for(let i = 0; i < 9; i++)n[i].toArray(e, t + i * 3);
        return e;
    }
    static getBasisAt(e, t) {
        let n = e.x, i = e.y, s = e.z;
        t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * s, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = .315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = .546274 * (n * n - i * i);
    }
};
Wo.prototype.isSphericalHarmonics3 = !0;
var ds = class extends Bt {
    constructor(e = new Wo, t = 1){
        super(void 0, t), this.sh = e;
    }
    copy(e) {
        return super.copy(e), this.sh.copy(e.sh), this;
    }
    fromJSON(e) {
        return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.sh = this.sh.toArray(), t;
    }
};
ds.prototype.isLightProbe = !0;
var ur = class {
    static decodeText(e) {
        if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
        let t = "";
        for(let n = 0, i = e.length; n < i; n++)t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t));
        } catch  {
            return t;
        }
    }
    static extractUrlBase(e) {
        let t = e.lastIndexOf("/");
        return t === -1 ? "./" : e.substr(0, t + 1);
    }
    static resolveURL(e, t) {
        return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
    }
}, qo = class extends ve {
    constructor(){
        super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
    }
    copy(e) {
        return super.copy(e), this.instanceCount = e.instanceCount, this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    toJSON() {
        let e = super.toJSON(this);
        return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
    }
};
qo.prototype.isInstancedBufferGeometry = !0;
var yl = class extends St {
    constructor(e){
        super(e), typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
            premultiplyAlpha: "none"
        };
    }
    setOptions(e) {
        return this.options = e, this;
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        let s = this, o = hs.get(e);
        if (o !== void 0) return s.manager.itemStart(e), setTimeout(function() {
            t && t(o), s.manager.itemEnd(e);
        }, 0), o;
        let a = {};
        a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) {
            return l.blob();
        }).then(function(l) {
            return createImageBitmap(l, Object.assign(s.options, {
                colorSpaceConversion: "none"
            }));
        }).then(function(l) {
            hs.add(e, l), t && t(l), s.manager.itemEnd(e);
        }).catch(function(l) {
            i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
        }), s.manager.itemStart(e);
    }
};
yl.prototype.isImageBitmapLoader = !0;
var jr, Fu = {
    getContext: function() {
        return jr === void 0 && (jr = new (window.AudioContext || window.webkitAudioContext)), jr;
    },
    setContext: function(r) {
        jr = r;
    }
}, _l = class extends St {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let s = this, o = new Wt(this.manager);
        o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
            try {
                let l = a.slice(0);
                Fu.getContext().decodeAudioData(l, function(u) {
                    t(u);
                });
            } catch (l1) {
                i ? i(l1) : console.error(l1), s.manager.itemError(e);
            }
        }, n, i);
    }
}, vl = class extends ds {
    constructor(e, t, n = 1){
        super(void 0, n);
        let i = new ne().set(e), s = new ne().set(t), o = new w(i.r, i.g, i.b), a = new w(s.r, s.g, s.b), l = Math.sqrt(Math.PI), c = l * Math.sqrt(.75);
        this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c);
    }
};
vl.prototype.isHemisphereLightProbe = !0;
var Ml = class extends ds {
    constructor(e, t = 1){
        super(void 0, t);
        let n = new ne().set(e);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
    }
};
Ml.prototype.isAmbientLightProbe = !0;
var Dh = new de, Ih = new de, Jn = new de, wl = class {
    constructor(e = !0){
        this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
    }
    start() {
        this.startTime = Nh(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
    }
    stop() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1;
    }
    getElapsedTime() {
        return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
        let e = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
            let t = Nh();
            e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
        }
        return e;
    }
};
function Nh() {
    return (typeof performance > "u" ? Date : performance).now();
}
var Yn = new w, Bh = new gt, hy = new w, Zn = new w, Xo = class extends Ie {
    constructor(e){
        super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
    }
    getOutput() {
        return this.gain;
    }
    setNodeSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
    }
    setMediaElementSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
    }
    setMediaStreamSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
    }
    setBuffer(e) {
        return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
    }
    play(e = 0) {
        if (this.isPlaying === !0) {
            console.warn("THREE.Audio: Audio is already playing.");
            return;
        }
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return;
        }
        this._startedAt = this.context.currentTime + e;
        let t = this.context.createBufferSource();
        return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
    }
    pause() {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return;
        }
        return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
    }
    stop() {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return;
        }
        return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
    }
    connect() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for(let e = 1, t = this.filters.length; e < t; e++)this.filters[e - 1].connect(this.filters[e]);
            this.filters[this.filters.length - 1].connect(this.getOutput());
        } else this.source.connect(this.getOutput());
        return this._connected = !0, this;
    }
    disconnect() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for(let e = 1, t = this.filters.length; e < t; e++)this.filters[e - 1].disconnect(this.filters[e]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput());
        return this._connected = !1, this;
    }
    getFilters() {
        return this.filters;
    }
    setFilters(e) {
        return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
    }
    setDetune(e) {
        if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
    }
    getDetune() {
        return this.detune;
    }
    getFilter() {
        return this.getFilters()[0];
    }
    setFilter(e) {
        return this.setFilters(e ? [
            e
        ] : []);
    }
    setPlaybackRate(e) {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return;
        }
        return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
    }
    getPlaybackRate() {
        return this.playbackRate;
    }
    onEnded() {
        this.isPlaying = !1;
    }
    getLoop() {
        return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
    }
    setLoop(e) {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return;
        }
        return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
    }
    setLoopStart(e) {
        return this.loopStart = e, this;
    }
    setLoopEnd(e) {
        return this.loopEnd = e, this;
    }
    getVolume() {
        return this.gain.gain.value;
    }
    setVolume(e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this;
    }
}, $n = new w, Oh = new gt, uy = new w, jn = new w, bl = class {
    constructor(e, t = 2048){
        this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
    }
    getFrequencyData() {
        return this.analyser.getByteFrequencyData(this.data), this.data;
    }
    getAverageFrequency() {
        let e = 0, t = this.getFrequencyData();
        for(let n = 0; n < t.length; n++)e += t[n];
        return e / t.length;
    }
}, Sl = class {
    constructor(e, t, n){
        this.binding = e, this.valueSize = n;
        let i, s, o;
        switch(t){
            case "quaternion":
                i = this._slerp, s = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
                break;
            case "string":
            case "bool":
                i = this._select, s = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
                break;
            default:
                i = this._lerp, s = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
        }
        this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
    }
    accumulate(e, t) {
        let n = this.buffer, i = this.valueSize, s = e * i + i, o = this.cumulativeWeight;
        if (o === 0) {
            for(let a = 0; a !== i; ++a)n[s + a] = n[a];
            o = t;
        } else {
            o += t;
            let a1 = t / o;
            this._mixBufferRegion(n, s, 0, a1, i);
        }
        this.cumulativeWeight = o;
    }
    accumulateAdditive(e) {
        let t = this.buffer, n = this.valueSize, i = n * this._addIndex;
        this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
    }
    apply(e) {
        let t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
            let l = t * this._origIndex;
            this._mixBufferRegion(n, i, l, 1 - s, t);
        }
        o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
        for(let l1 = t, c = t + t; l1 !== c; ++l1)if (n[l1] !== n[l1 + t]) {
            a.setValue(n, i);
            break;
        }
    }
    saveOriginalState() {
        let e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
        e.getValue(t, i);
        for(let s = n, o = i; s !== o; ++s)t[s] = t[i + s % n];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
    }
    restoreOriginalState() {
        let e = this.valueSize * 3;
        this.binding.setValue(this.buffer, e);
    }
    _setAdditiveIdentityNumeric() {
        let e = this._addIndex * this.valueSize, t = e + this.valueSize;
        for(let n = e; n < t; n++)this.buffer[n] = 0;
    }
    _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
    }
    _setAdditiveIdentityOther() {
        let e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
        for(let n = 0; n < this.valueSize; n++)this.buffer[t + n] = this.buffer[e + n];
    }
    _select(e, t, n, i, s) {
        if (i >= .5) for(let o = 0; o !== s; ++o)e[t + o] = e[n + o];
    }
    _slerp(e, t, n, i) {
        gt.slerpFlat(e, t, e, t, e, n, i);
    }
    _slerpAdditive(e, t, n, i, s) {
        let o = this._workIndex * s;
        gt.multiplyQuaternionsFlat(e, o, e, t, e, n), gt.slerpFlat(e, t, e, t, e, o, i);
    }
    _lerp(e, t, n, i, s) {
        let o = 1 - i;
        for(let a = 0; a !== s; ++a){
            let l = t + a;
            e[l] = e[l] * o + e[n + a] * i;
        }
    }
    _lerpAdditive(e, t, n, i, s) {
        for(let o = 0; o !== s; ++o){
            let a = t + o;
            e[a] = e[a] + e[n + o] * i;
        }
    }
}, Wl = "\\[\\]\\.:\\/", dy = new RegExp("[" + Wl + "]", "g"), ql = "[^" + Wl + "]", fy = "[^" + Wl.replace("\\.", "") + "]", py = /((?:WC+[\/:])*)/.source.replace("WC", ql), my = /(WCOD+)?/.source.replace("WCOD", fy), gy = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ql), xy = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ql), yy = new RegExp("^" + py + my + gy + xy + "$"), _y = [
    "material",
    "materials",
    "bones"
], El = class {
    constructor(e, t, n){
        let i = n || Oe.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, i);
    }
    getValue(e, t) {
        this.bind();
        let n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
        i !== void 0 && i.getValue(e, t);
    }
    setValue(e, t) {
        let n = this._bindings;
        for(let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)n[i].setValue(e, t);
    }
    bind() {
        let e = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind();
    }
    unbind() {
        let e = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind();
    }
}, Oe = class {
    constructor(e, t, n){
        this.path = t, this.parsedPath = n || Oe.parseTrackName(t), this.node = Oe.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Oe.Composite(e, t, n) : new Oe(e, t, n);
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(dy, "");
    }
    static parseTrackName(e) {
        let t = yy.exec(e);
        if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        let n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }, i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (i !== void 0 && i !== -1) {
            let s = n.nodeName.substring(i + 1);
            _y.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
        }
        if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n;
    }
    static findNode(e, t) {
        if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
        if (e.skeleton) {
            let n = e.skeleton.getBoneByName(t);
            if (n !== void 0) return n;
        }
        if (e.children) {
            let n1 = function(s) {
                for(let o = 0; o < s.length; o++){
                    let a = s[o];
                    if (a.name === t || a.uuid === t) return a;
                    let l = n1(a.children);
                    if (l) return l;
                }
                return null;
            }, i = n1(e.children);
            if (i) return i;
        }
        return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName];
    }
    _getValue_array(e, t) {
        let n = this.resolvedProperty;
        for(let i = 0, s = n.length; i !== s; ++i)e[t++] = n[i];
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t);
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t];
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_array(e, t) {
        let n = this.resolvedProperty;
        for(let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for(let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++];
        this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for(let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t];
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t);
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _getValue_unbound(e, t) {
        this.bind(), this.getValue(e, t);
    }
    _setValue_unbound(e, t) {
        this.bind(), this.setValue(e, t);
    }
    bind() {
        let e = this.node, t = this.parsedPath, n = t.objectName, i = t.propertyName, s = t.propertyIndex;
        if (e || (e = Oe.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
            console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            return;
        }
        if (n) {
            let c = t.objectIndex;
            switch(n){
                case "materials":
                    if (!e.material) {
                        console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        return;
                    }
                    if (!e.material.materials) {
                        console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        return;
                    }
                    e = e.material.materials;
                    break;
                case "bones":
                    if (!e.skeleton) {
                        console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        return;
                    }
                    e = e.skeleton.bones;
                    for(let u = 0; u < e.length; u++)if (e[u].name === c) {
                        c = u;
                        break;
                    }
                    break;
                default:
                    if (e[n] === void 0) {
                        console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        return;
                    }
                    e = e[n];
            }
            if (c !== void 0) {
                if (e[c] === void 0) {
                    console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    return;
                }
                e = e[c];
            }
        }
        let o = e[i];
        if (o === void 0) {
            let c1 = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + c1 + "." + i + " but it wasn't found.", e);
            return;
        }
        let a = this.Versioning.None;
        this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
        let l = this.BindingType.Direct;
        if (s !== void 0) {
            if (i === "morphTargetInfluences") {
                if (!e.geometry) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    return;
                }
                if (e.geometry.isBufferGeometry) {
                    if (!e.geometry.morphAttributes) {
                        console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                        return;
                    }
                    e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
                } else {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    return;
                }
            }
            l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = s;
        } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
    }
    unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
};
Oe.Composite = El;
Oe.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
Oe.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
Oe.prototype.GetterByBindingType = [
    Oe.prototype._getValue_direct,
    Oe.prototype._getValue_array,
    Oe.prototype._getValue_arrayElement,
    Oe.prototype._getValue_toArray
];
Oe.prototype.SetterByBindingTypeAndVersioning = [
    [
        Oe.prototype._setValue_direct,
        Oe.prototype._setValue_direct_setNeedsUpdate,
        Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
        Oe.prototype._setValue_array,
        Oe.prototype._setValue_array_setNeedsUpdate,
        Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
        Oe.prototype._setValue_arrayElement,
        Oe.prototype._setValue_arrayElement_setNeedsUpdate,
        Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
        Oe.prototype._setValue_fromArray,
        Oe.prototype._setValue_fromArray_setNeedsUpdate,
        Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
];
var Tl = class {
    constructor(){
        this.uuid = It(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        let e = {};
        this._indicesByUUID = e;
        for(let n = 0, i = arguments.length; n !== i; ++n)e[arguments[n].uuid] = n;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        let t = this;
        this.stats = {
            objects: {
                get total () {
                    return t._objects.length;
                },
                get inUse () {
                    return this.total - t.nCachedObjects_;
                }
            },
            get bindingsPerObject () {
                return t._bindings.length;
            }
        };
    }
    add() {
        let e = this._objects, t = this._indicesByUUID, n = this._paths, i = this._parsedPaths, s = this._bindings, o = s.length, a, l = e.length, c = this.nCachedObjects_;
        for(let u = 0, h = arguments.length; u !== h; ++u){
            let d = arguments[u], f = d.uuid, m = t[f];
            if (m === void 0) {
                m = l++, t[f] = m, e.push(d);
                for(let x = 0, _ = o; x !== _; ++x)s[x].push(new Oe(d, n[x], i[x]));
            } else if (m < c) {
                a = e[m];
                let x1 = --c, _1 = e[x1];
                t[_1.uuid] = m, e[m] = _1, t[f] = x1, e[x1] = d;
                for(let g = 0, p = o; g !== p; ++g){
                    let M = s[g], y = M[x1], b = M[m];
                    M[m] = y, b === void 0 && (b = new Oe(d, n[g], i[g])), M[x1] = b;
                }
            } else e[m] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
        }
        this.nCachedObjects_ = c;
    }
    remove() {
        let e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length, s = this.nCachedObjects_;
        for(let o = 0, a = arguments.length; o !== a; ++o){
            let l = arguments[o], c = l.uuid, u = t[c];
            if (u !== void 0 && u >= s) {
                let h = s++, d = e[h];
                t[d.uuid] = u, e[u] = d, t[c] = h, e[h] = l;
                for(let f = 0, m = i; f !== m; ++f){
                    let x = n[f], _ = x[h], g = x[u];
                    x[u] = _, x[h] = g;
                }
            }
        }
        this.nCachedObjects_ = s;
    }
    uncache() {
        let e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length, s = this.nCachedObjects_, o = e.length;
        for(let a = 0, l = arguments.length; a !== l; ++a){
            let c = arguments[a], u = c.uuid, h = t[u];
            if (h !== void 0) if (delete t[u], h < s) {
                let d = --s, f = e[d], m = --o, x = e[m];
                t[f.uuid] = h, e[h] = f, t[x.uuid] = d, e[d] = x, e.pop();
                for(let _ = 0, g = i; _ !== g; ++_){
                    let p = n[_], M = p[d], y = p[m];
                    p[h] = M, p[d] = y, p.pop();
                }
            } else {
                let d1 = --o, f1 = e[d1];
                d1 > 0 && (t[f1.uuid] = h), e[h] = f1, e.pop();
                for(let m1 = 0, x1 = i; m1 !== x1; ++m1){
                    let _1 = n[m1];
                    _1[h] = _1[d1], _1.pop();
                }
            }
        }
        this.nCachedObjects_ = s;
    }
    subscribe_(e, t) {
        let n = this._bindingsIndicesByPath, i = n[e], s = this._bindings;
        if (i !== void 0) return s[i];
        let o = this._paths, a = this._parsedPaths, l = this._objects, c = l.length, u = this.nCachedObjects_, h = new Array(c);
        i = s.length, n[e] = i, o.push(e), a.push(t), s.push(h);
        for(let d = u, f = l.length; d !== f; ++d){
            let m = l[d];
            h[d] = new Oe(m, e, t);
        }
        return h;
    }
    unsubscribe_(e) {
        let t = this._bindingsIndicesByPath, n = t[e];
        if (n !== void 0) {
            let i = this._paths, s = this._parsedPaths, o = this._bindings, a = o.length - 1, l = o[a], c = e[a];
            t[c] = n, o[n] = l, o.pop(), s[n] = s[a], s.pop(), i[n] = i[a], i.pop();
        }
    }
};
Tl.prototype.isAnimationObjectGroup = !0;
var Al = class {
    constructor(e, t, n = null, i = t.blendMode){
        this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
        let s = t.tracks, o = s.length, a = new Array(o), l = {
            endingStart: Li,
            endingEnd: Li
        };
        for(let c = 0; c !== o; ++c){
            let u = s[c].createInterpolant(null);
            a[c] = u, u.settings = l;
        }
        this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Pd, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
    }
    play() {
        return this._mixer._activateAction(this), this;
    }
    stop() {
        return this._mixer._deactivateAction(this), this.reset();
    }
    reset() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
    }
    isRunning() {
        return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
    }
    isScheduled() {
        return this._mixer._isActiveAction(this);
    }
    startAt(e) {
        return this._startTime = e, this;
    }
    setLoop(e, t) {
        return this.loop = e, this.repetitions = t, this;
    }
    setEffectiveWeight(e) {
        return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
    }
    getEffectiveWeight() {
        return this._effectiveWeight;
    }
    fadeIn(e) {
        return this._scheduleFading(e, 0, 1);
    }
    fadeOut(e) {
        return this._scheduleFading(e, 1, 0);
    }
    crossFadeFrom(e, t, n) {
        if (e.fadeOut(t), this.fadeIn(t), n) {
            let i = this._clip.duration, s = e._clip.duration, o = s / i, a = i / s;
            e.warp(1, o, t), this.warp(a, 1, t);
        }
        return this;
    }
    crossFadeTo(e, t, n) {
        return e.crossFadeFrom(this, t, n);
    }
    stopFading() {
        let e = this._weightInterpolant;
        return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
    }
    setEffectiveTimeScale(e) {
        return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
    }
    getEffectiveTimeScale() {
        return this._effectiveTimeScale;
    }
    setDuration(e) {
        return this.timeScale = this._clip.duration / e, this.stopWarping();
    }
    syncWith(e) {
        return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
    }
    halt(e) {
        return this.warp(this._effectiveTimeScale, 0, e);
    }
    warp(e, t, n) {
        let i = this._mixer, s = i.time, o = this.timeScale, a = this._timeScaleInterpolant;
        a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
        let l = a.parameterPositions, c = a.sampleValues;
        return l[0] = s, l[1] = s + n, c[0] = e / o, c[1] = t / o, this;
    }
    stopWarping() {
        let e = this._timeScaleInterpolant;
        return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
    }
    getMixer() {
        return this._mixer;
    }
    getClip() {
        return this._clip;
    }
    getRoot() {
        return this._localRoot || this._mixer._root;
    }
    _update(e, t, n, i) {
        if (!this.enabled) {
            this._updateWeight(e);
            return;
        }
        let s = this._startTime;
        if (s !== null) {
            let l = (e - s) * n;
            if (l < 0 || n === 0) return;
            this._startTime = null, t = n * l;
        }
        t *= this._updateTimeScale(e);
        let o = this._updateTime(t), a = this._updateWeight(e);
        if (a > 0) {
            let l1 = this._interpolants, c = this._propertyBindings;
            switch(this.blendMode){
                case pu:
                    for(let u = 0, h = l1.length; u !== h; ++u)l1[u].evaluate(o), c[u].accumulateAdditive(a);
                    break;
                case Ul:
                default:
                    for(let u1 = 0, h1 = l1.length; u1 !== h1; ++u1)l1[u1].evaluate(o), c[u1].accumulate(i, a);
            }
        }
    }
    _updateWeight(e) {
        let t = 0;
        if (this.enabled) {
            t = this.weight;
            let n = this._weightInterpolant;
            if (n !== null) {
                let i = n.evaluate(e)[0];
                t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
            }
        }
        return this._effectiveWeight = t, t;
    }
    _updateTimeScale(e) {
        let t = 0;
        if (!this.paused) {
            t = this.timeScale;
            let n = this._timeScaleInterpolant;
            n !== null && (t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t));
        }
        return this._effectiveTimeScale = t, t;
    }
    _updateTime(e) {
        let t = this._clip.duration, n = this.loop, i = this.time + e, s = this._loopCount, o = n === Dd;
        if (e === 0) return s === -1 ? i : o && (s & 1) === 1 ? t - i : i;
        if (n === Ld) {
            s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: {
                if (i >= t) i = t;
                else if (i < 0) i = 0;
                else {
                    this.time = i;
                    break e;
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e < 0 ? -1 : 1
                });
            }
        } else {
            if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= t || i < 0) {
                let a = Math.floor(i / t);
                i -= t * a, s += Math.abs(a);
                let l = this.repetitions - s;
                if (l <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e > 0 ? 1 : -1
                });
                else {
                    if (l === 1) {
                        let c = e < 0;
                        this._setEndings(c, !c, o);
                    } else this._setEndings(!1, !1, o);
                    this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: a
                    });
                }
            } else this.time = i;
            if (o && (s & 1) === 1) return t - i;
        }
        return i;
    }
    _setEndings(e, t, n) {
        let i = this._interpolantSettings;
        n ? (i.endingStart = Pi, i.endingEnd = Pi) : (e ? i.endingStart = this.zeroSlopeAtStart ? Pi : Li : i.endingStart = uo, t ? i.endingEnd = this.zeroSlopeAtEnd ? Pi : Li : i.endingEnd = uo);
    }
    _scheduleFading(e, t, n) {
        let i = this._mixer, s = i.time, o = this._weightInterpolant;
        o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
        let a = o.parameterPositions, l = o.sampleValues;
        return a[0] = s, l[0] = t, a[1] = s + e, l[1] = n, this;
    }
}, Rl = class extends dn {
    constructor(e){
        super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
    }
    _bindAction(e, t) {
        let n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, o = e._propertyBindings, a = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName, u = c[l];
        u === void 0 && (u = {}, c[l] = u);
        for(let h = 0; h !== s; ++h){
            let d = i[h], f = d.name, m = u[f];
            if (m !== void 0) ++m.referenceCount, o[h] = m;
            else {
                if (m = o[h], m !== void 0) {
                    m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, f));
                    continue;
                }
                let x = t && t._propertyBindings[h].binding.parsedPath;
                m = new Sl(Oe.create(n, f, x), d.ValueTypeName, d.getValueSize()), ++m.referenceCount, this._addInactiveBinding(m, l, f), o[h] = m;
            }
            a[h].resultBuffer = m.buffer;
        }
    }
    _activateAction(e) {
        if (!this._isActiveAction(e)) {
            if (e._cacheIndex === null) {
                let n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
                this._bindAction(e, s && s.knownActions[0]), this._addInactiveAction(e, i, n);
            }
            let t = e._propertyBindings;
            for(let n1 = 0, i1 = t.length; n1 !== i1; ++n1){
                let s1 = t[n1];
                s1.useCount++ === 0 && (this._lendBinding(s1), s1.saveOriginalState());
            }
            this._lendAction(e);
        }
    }
    _deactivateAction(e) {
        if (this._isActiveAction(e)) {
            let t = e._propertyBindings;
            for(let n = 0, i = t.length; n !== i; ++n){
                let s = t[n];
                --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
            }
            this._takeBackAction(e);
        }
    }
    _initMemoryManager() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        let e = this;
        this.stats = {
            actions: {
                get total () {
                    return e._actions.length;
                },
                get inUse () {
                    return e._nActiveActions;
                }
            },
            bindings: {
                get total () {
                    return e._bindings.length;
                },
                get inUse () {
                    return e._nActiveBindings;
                }
            },
            controlInterpolants: {
                get total () {
                    return e._controlInterpolants.length;
                },
                get inUse () {
                    return e._nActiveControlInterpolants;
                }
            }
        };
    }
    _isActiveAction(e) {
        let t = e._cacheIndex;
        return t !== null && t < this._nActiveActions;
    }
    _addInactiveAction(e, t, n) {
        let i = this._actions, s = this._actionsByClip, o = s[t];
        if (o === void 0) o = {
            knownActions: [
                e
            ],
            actionByRoot: {}
        }, e._byClipCacheIndex = 0, s[t] = o;
        else {
            let a = o.knownActions;
            e._byClipCacheIndex = a.length, a.push(e);
        }
        e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e;
    }
    _removeInactiveAction(e) {
        let t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
        n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
        let s = e._clip.uuid, o = this._actionsByClip, a = o[s], l = a.knownActions, c = l[l.length - 1], u = e._byClipCacheIndex;
        c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
        let h = a.actionByRoot, d = (e._localRoot || this._root).uuid;
        delete h[d], l.length === 0 && delete o[s], this._removeInactiveBindingsForAction(e);
    }
    _removeInactiveBindingsForAction(e) {
        let t = e._propertyBindings;
        for(let n = 0, i = t.length; n !== i; ++n){
            let s = t[n];
            --s.referenceCount === 0 && this._removeInactiveBinding(s);
        }
    }
    _lendAction(e) {
        let t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
    }
    _takeBackAction(e) {
        let t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
    }
    _addInactiveBinding(e, t, n) {
        let i = this._bindingsByRootAndName, s = this._bindings, o = i[t];
        o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = s.length, s.push(e);
    }
    _removeInactiveBinding(e) {
        let t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, o = this._bindingsByRootAndName, a = o[i], l = t[t.length - 1], c = e._cacheIndex;
        l._cacheIndex = c, t[c] = l, t.pop(), delete a[s], Object.keys(a).length === 0 && delete o[i];
    }
    _lendBinding(e) {
        let t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
    }
    _takeBackBinding(e) {
        let t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
    }
    _lendControlInterpolant() {
        let e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t];
        return n === void 0 && (n = new Do(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n;
    }
    _takeBackControlInterpolant(e) {
        let t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
        e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
    }
    clipAction(e, t, n) {
        let i = t || this._root, s = i.uuid, o = typeof e == "string" ? cs.findByName(i, e) : e, a = o !== null ? o.uuid : e, l = this._actionsByClip[a], c = null;
        if (n === void 0 && (o !== null ? n = o.blendMode : n = Ul), l !== void 0) {
            let h = l.actionByRoot[s];
            if (h !== void 0 && h.blendMode === n) return h;
            c = l.knownActions[0], o === null && (o = c._clip);
        }
        if (o === null) return null;
        let u = new Al(this, o, t, n);
        return this._bindAction(u, c), this._addInactiveAction(u, a, s), u;
    }
    existingAction(e, t) {
        let n = t || this._root, i = n.uuid, s = typeof e == "string" ? cs.findByName(n, e) : e, o = s ? s.uuid : e, a = this._actionsByClip[o];
        return a !== void 0 && a.actionByRoot[i] || null;
    }
    stopAllAction() {
        let e = this._actions, t = this._nActiveActions;
        for(let n = t - 1; n >= 0; --n)e[n].stop();
        return this;
    }
    update(e) {
        e *= this.timeScale;
        let t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), o = this._accuIndex ^= 1;
        for(let c = 0; c !== n; ++c)t[c]._update(i, e, s, o);
        let a = this._bindings, l = this._nActiveBindings;
        for(let c1 = 0; c1 !== l; ++c1)a[c1].apply(o);
        return this;
    }
    setTime(e) {
        this.time = 0;
        for(let t = 0; t < this._actions.length; t++)this._actions[t].time = 0;
        return this.update(e);
    }
    getRoot() {
        return this._root;
    }
    uncacheClip(e) {
        let t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
        if (s !== void 0) {
            let o = s.knownActions;
            for(let a = 0, l = o.length; a !== l; ++a){
                let c = o[a];
                this._deactivateAction(c);
                let u = c._cacheIndex, h = t[t.length - 1];
                c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = u, t[u] = h, t.pop(), this._removeInactiveBindingsForAction(c);
            }
            delete i[n];
        }
    }
    uncacheRoot(e) {
        let t = e.uuid, n = this._actionsByClip;
        for(let o in n){
            let a = n[o].actionByRoot, l = a[t];
            l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
        }
        let i = this._bindingsByRootAndName, s = i[t];
        if (s !== void 0) for(let o1 in s){
            let a1 = s[o1];
            a1.restoreOriginalState(), this._removeInactiveBinding(a1);
        }
    }
    uncacheAction(e, t) {
        let n = this.existingAction(e, t);
        n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
};
Rl.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
var dr = class {
    constructor(e){
        typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e;
    }
    clone() {
        return new dr(this.value.clone === void 0 ? this.value : this.value.clone());
    }
}, Cl = class extends Bn {
    constructor(e, t, n = 1){
        super(e, t), this.meshPerAttribute = n;
    }
    copy(e) {
        return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
    }
    clone(e) {
        let t = super.clone(e);
        return t.meshPerAttribute = this.meshPerAttribute, t;
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
    }
};
Cl.prototype.isInstancedInterleavedBuffer = !0;
var Ll = class {
    constructor(e, t, n, i, s){
        this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = i, this.count = s, this.version = 0;
    }
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
    setBuffer(e) {
        return this.buffer = e, this;
    }
    setType(e, t) {
        return this.type = e, this.elementSize = t, this;
    }
    setItemSize(e) {
        return this.itemSize = e, this;
    }
    setCount(e) {
        return this.count = e, this;
    }
};
Ll.prototype.isGLBufferAttribute = !0;
var Hh = class {
    constructor(e, t, n = 0, i = 1 / 0){
        this.ray = new mn(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Vs, this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
    }
    set(e, t) {
        this.ray.set(e, t);
    }
    setFromCamera(e, t) {
        t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
    }
    intersectObject(e, t = !0, n = []) {
        return Pl(e, this, n, t), n.sort(Vh), n;
    }
    intersectObjects(e, t = !0, n = []) {
        for(let i = 0, s = e.length; i < s; i++)Pl(e[i], this, n, t);
        return n.sort(Vh), n;
    }
};
function Vh(r, e) {
    return r.distance - e.distance;
}
function Pl(r, e, t, n) {
    if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
        let i = r.children;
        for(let s = 0, o = i.length; s < o; s++)Pl(i[s], e, t, !0);
    }
}
var kh = class {
    constructor(e = 1, t = 0, n = 0){
        return this.radius = e, this.phi = t, this.theta = n, this;
    }
    set(e, t, n) {
        return this.radius = e, this.phi = t, this.theta = n, this;
    }
    copy(e) {
        return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
    }
    makeSafe() {
        return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(yt(t / this.radius, -1, 1))), this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}, Wh = new Z, li = class {
    constructor(e = new Z(1 / 0, 1 / 0), t = new Z(-1 / 0, -1 / 0)){
        this.min = e, this.max = t;
    }
    set(e, t) {
        return this.min.copy(e), this.max.copy(t), this;
    }
    setFromPoints(e) {
        this.makeEmpty();
        for(let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]);
        return this;
    }
    setFromCenterAndSize(e, t) {
        let n = Wh.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
    copy(e) {
        return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y;
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
        return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
        return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
        return Wh.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    intersect(e) {
        return this.min.max(e.min), this.max.min(e.max), this;
    }
    union(e) {
        return this.min.min(e.min), this.max.max(e.max), this;
    }
    translate(e) {
        return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max);
    }
};
li.prototype.isBox2 = !0;
var qh = new w, Kr = new w, Dl = class {
    constructor(e = new w, t = new w){
        this.start = e, this.end = t;
    }
    set(e, t) {
        return this.start.copy(e), this.end.copy(t), this;
    }
    copy(e) {
        return this.start.copy(e.start), this.end.copy(e.end), this;
    }
    getCenter(e) {
        return e.addVectors(this.start, this.end).multiplyScalar(.5);
    }
    delta(e) {
        return e.subVectors(this.end, this.start);
    }
    distanceSq() {
        return this.start.distanceToSquared(this.end);
    }
    distance() {
        return this.start.distanceTo(this.end);
    }
    at(e, t) {
        return this.delta(t).multiplyScalar(e).add(this.start);
    }
    closestPointToPointParameter(e, t) {
        qh.subVectors(e, this.start), Kr.subVectors(this.end, this.start);
        let n = Kr.dot(Kr), s = Kr.dot(qh) / n;
        return t && (s = yt(s, 0, 1)), s;
    }
    closestPointToPoint(e, t, n) {
        let i = this.closestPointToPointParameter(e, t);
        return this.delta(n).multiplyScalar(i).add(this.start);
    }
    applyMatrix4(e) {
        return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
    }
    equals(e) {
        return e.start.equals(this.start) && e.end.equals(this.end);
    }
    clone() {
        return new this.constructor().copy(this);
    }
}, Xh = new w, En = new w, Qr = new de, Na = new de, Il = class extends Tt {
    constructor(e){
        let t = Nu(e), n = new ve, i = [], s = [], o = new ne(0, 0, 1), a = new ne(0, 1, 0);
        for(let c = 0; c < t.length; c++){
            let u = t[c];
            u.parent && u.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(o.r, o.g, o.b), s.push(a.r, a.g, a.b));
        }
        n.setAttribute("position", new he(i, 3)), n.setAttribute("color", new he(s, 3));
        let l = new pt({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        });
        super(n, l), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
    }
    updateMatrixWorld(e) {
        let t = this.bones, n = this.geometry, i = n.getAttribute("position");
        Na.copy(this.root.matrixWorld).invert();
        for(let s = 0, o = 0; s < t.length; s++){
            let a = t[s];
            a.parent && a.parent.isBone && (Qr.multiplyMatrices(Na, a.matrixWorld), En.setFromMatrixPosition(Qr), i.setXYZ(o, En.x, En.y, En.z), Qr.multiplyMatrices(Na, a.parent.matrixWorld), En.setFromMatrixPosition(Qr), i.setXYZ(o + 1, En.x, En.y, En.z), o += 2);
        }
        n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
    }
};
function Nu(r) {
    let e = [];
    r && r.isBone && e.push(r);
    for(let t = 0; t < r.children.length; t++)e.push.apply(e, Nu(r.children[t]));
    return e;
}
var vy = new w, Zh = new ne, $h = new ne, Fl = class extends Tt {
    constructor(e = 10, t = 10, n = 4473924, i = 8947848){
        n = new ne(n), i = new ne(i);
        let s = t / 2, o = e / t, a = e / 2, l = [], c = [];
        for(let d = 0, f = 0, m = -a; d <= t; d++, m += o){
            l.push(-a, 0, m, a, 0, m), l.push(m, 0, -a, m, 0, a);
            let x = d === s ? n : i;
            x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3;
        }
        let u = new ve;
        u.setAttribute("position", new he(l, 3)), u.setAttribute("color", new he(c, 3));
        let h = new pt({
            vertexColors: !0,
            toneMapped: !1
        });
        super(u, h), this.type = "GridHelper";
    }
}, Qh = new w, eo = new w, eu = new w, to = new w, tt = new ki;
var no = new Rt, ru = new w, Bl = class extends Tt {
    constructor(e = 1){
        let t = [
            0,
            0,
            0,
            e,
            0,
            0,
            0,
            0,
            0,
            0,
            e,
            0,
            0,
            0,
            0,
            0,
            0,
            e
        ], n = [
            1,
            0,
            0,
            1,
            .6,
            0,
            0,
            1,
            0,
            .6,
            1,
            0,
            0,
            0,
            1,
            0,
            .6,
            1
        ], i = new ve;
        i.setAttribute("position", new he(t, 3)), i.setAttribute("color", new he(n, 3));
        let s = new pt({
            vertexColors: !0,
            toneMapped: !1
        });
        super(i, s), this.type = "AxesHelper";
    }
    setColors(e, t, n) {
        let i = new ne, s = this.geometry.attributes.color.array;
        return i.set(e), i.toArray(s, 0), i.toArray(s, 3), i.set(t), i.toArray(s, 6), i.toArray(s, 9), i.set(n), i.toArray(s, 12), i.toArray(s, 15), this.geometry.attributes.color.needsUpdate = !0, this;
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose();
    }
}, Bu = new Float32Array(1), My = new Int32Array(Bu.buffer);
Ct.create = function(r, e) {
    return console.log("THREE.Curve.create() has been deprecated"), r.prototype = Object.create(Ct.prototype), r.prototype.constructor = r, r.prototype.getPoint = e, r;
};
Qi.prototype.fromPoints = function(r) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(r);
};
Fl.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
Il.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
St.prototype.extractUrlBase = function(r) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), ur.extractUrlBase(r);
};
St.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
};
li.prototype.center = function(r) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(r);
};
li.prototype.empty = function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
li.prototype.isIntersectionBox = function(r) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r);
};
li.prototype.size = function(r) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(r);
};
Rt.prototype.center = function(r) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(r);
};
Rt.prototype.empty = function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
Rt.prototype.isIntersectionBox = function(r) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r);
};
Rt.prototype.isIntersectionSphere = function(r) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r);
};
Rt.prototype.size = function(r) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(r);
};
pn.prototype.empty = function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
Gi.prototype.setFromMatrix = function(r) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(r);
};
Dl.prototype.center = function(r) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(r);
};
ht.prototype.flattenToArrayOffset = function(r, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e);
};
ht.prototype.multiplyVector3 = function(r) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), r.applyMatrix3(this);
};
ht.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
ht.prototype.applyToBufferAttribute = function(r) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), r.applyMatrix3(this);
};
ht.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
ht.prototype.getInverse = function(r) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert();
};
de.prototype.extractPosition = function(r) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(r);
};
de.prototype.flattenToArrayOffset = function(r, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e);
};
de.prototype.getPosition = function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new w().setFromMatrixColumn(this, 3);
};
de.prototype.setRotationFromQuaternion = function(r) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(r);
};
de.prototype.multiplyToArray = function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
de.prototype.multiplyVector3 = function(r) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
de.prototype.multiplyVector4 = function(r) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
de.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
de.prototype.rotateAxis = function(r) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), r.transformDirection(this);
};
de.prototype.crossVector = function(r) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
de.prototype.translate = function() {
    console.error("THREE.Matrix4: .translate() has been removed.");
};
de.prototype.rotateX = function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
};
de.prototype.rotateY = function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
};
de.prototype.rotateZ = function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
de.prototype.rotateByAxis = function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
de.prototype.applyToBufferAttribute = function(r) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), r.applyMatrix4(this);
};
de.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
de.prototype.makeFrustum = function(r, e, t, n, i, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(r, e, n, t, i, s);
};
de.prototype.getInverse = function(r) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert();
};
Vt.prototype.isIntersectionLine = function(r) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(r);
};
gt.prototype.multiplyVector3 = function(r) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), r.applyQuaternion(this);
};
gt.prototype.inverse = function() {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
};
mn.prototype.isIntersectionBox = function(r) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r);
};
mn.prototype.isIntersectionPlane = function(r) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(r);
};
mn.prototype.isIntersectionSphere = function(r) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r);
};
it.prototype.area = function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
};
it.prototype.barycoordFromPoint = function(r, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(r, e);
};
it.prototype.midpoint = function(r) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(r);
};
it.prototypenormal = function(r) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(r);
};
it.prototype.plane = function(r) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(r);
};
it.barycoordFromPoint = function(r, e, t, n, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), it.getBarycoord(r, e, t, n, i);
};
it.normal = function(r, e, t, n) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), it.getNormal(r, e, t, n);
};
kt.prototype.extractAllPoints = function(r) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(r);
};
kt.prototype.extrude = function(r) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new tn(this, r);
};
kt.prototype.makeGeometry = function(r) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new ri(this, r);
};
Z.prototype.fromAttribute = function(r, e, t) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t);
};
Z.prototype.distanceToManhattan = function(r) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r);
};
Z.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
w.prototype.setEulerFromRotationMatrix = function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
};
w.prototype.setEulerFromQuaternion = function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
};
w.prototype.getPositionFromMatrix = function(r) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(r);
};
w.prototype.getScaleFromMatrix = function(r) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(r);
};
w.prototype.getColumnFromMatrix = function(r, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, r);
};
w.prototype.applyProjection = function(r) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(r);
};
w.prototype.fromAttribute = function(r, e, t) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t);
};
w.prototype.distanceToManhattan = function(r) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r);
};
w.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
Ge.prototype.fromAttribute = function(r, e, t) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t);
};
Ge.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
Ie.prototype.getChildByName = function(r) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(r);
};
Ie.prototype.renderDepth = function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
};
Ie.prototype.translate = function(r, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, r);
};
Ie.prototype.getWorldRotation = function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
};
Ie.prototype.applyMatrix = function(r) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r);
};
Object.defineProperties(Ie.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
        },
        set: function(r) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = r;
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
        },
        set: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
        }
    }
});
ot.prototype.setDrawMode = function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
};
Object.defineProperties(ot.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), Id;
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
        }
    }
});
Qs.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
dt.prototype.setLens = function(r, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(r);
};
Object.defineProperties(Bt.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.");
        }
    },
    shadowCameraFov: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = r;
        }
    },
    shadowCameraLeft: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = r;
        }
    },
    shadowCameraRight: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = r;
        }
    },
    shadowCameraTop: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = r;
        }
    },
    shadowCameraBottom: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = r;
        }
    },
    shadowCameraNear: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = r;
        }
    },
    shadowCameraFar: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = r;
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
        }
    },
    shadowBias: {
        set: function(r) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = r;
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.");
        }
    },
    shadowMapWidth: {
        set: function(r) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = r;
        }
    },
    shadowMapHeight: {
        set: function(r) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = r;
        }
    }
});
Object.defineProperties(Be.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === zs;
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(zs);
        }
    }
});
Be.prototype.setDynamic = function(r) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? zs : Bs), this;
};
Be.prototype.copyIndicesArray = function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}, Be.prototype.setArray = function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
ve.prototype.addIndex = function(r) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(r);
};
ve.prototype.addAttribute = function(r, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(r, new Be(arguments[1], arguments[2]))) : r === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(r, e);
};
ve.prototype.addDrawCall = function(r, e, t) {
    t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(r, e);
};
ve.prototype.clearDrawCalls = function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
};
ve.prototype.computeOffsets = function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
ve.prototype.removeAttribute = function(r) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(r);
};
ve.prototype.applyMatrix = function(r) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r);
};
Object.defineProperties(ve.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
        }
    }
});
Bn.prototype.setDynamic = function(r) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? zs : Bs), this;
};
Bn.prototype.setArray = function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
tn.prototype.getArrays = function() {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
tn.prototype.addShapeList = function() {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
tn.prototype.addShape = function() {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
$s.prototype.dispose = function() {
    console.error("THREE.Scene: .dispose() has been removed.");
};
dr.prototype.onUpdate = function() {
    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
};
Object.defineProperties(ft.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE.Material: .wrapAround has been removed.");
        },
        set: function() {
            console.warn("THREE.Material: .wrapAround has been removed.");
        }
    },
    overdraw: {
        get: function() {
            console.warn("THREE.Material: .overdraw has been removed.");
        },
        set: function() {
            console.warn("THREE.Material: .overdraw has been removed.");
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE.Material: .wrapRGB has been removed."), new ne;
        }
    },
    shading: {
        get: function() {
            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
        },
        set: function(r) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = r === hu;
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
        },
        set: function(r) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = r;
        }
    },
    vertexTangents: {
        get: function() {
            console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
        },
        set: function() {
            console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
        }
    }
});
Object.defineProperties(Kt.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
        },
        set: function(r) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = r;
        }
    }
});
Xe.prototype.clearTarget = function(r, e, t, n) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(r), this.clear(e, t, n);
};
Xe.prototype.animate = function(r) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(r);
};
Xe.prototype.getCurrentRenderTarget = function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
};
Xe.prototype.getMaxAnisotropy = function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
};
Xe.prototype.getPrecision = function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
};
Xe.prototype.resetGLState = function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
};
Xe.prototype.supportsFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
};
Xe.prototype.supportsHalfFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
};
Xe.prototype.supportsStandardDerivatives = function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
};
Xe.prototype.supportsCompressedTextureS3TC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
};
Xe.prototype.supportsCompressedTexturePVRTC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
};
Xe.prototype.supportsBlendMinMax = function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
};
Xe.prototype.supportsVertexTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
};
Xe.prototype.supportsInstancedArrays = function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
};
Xe.prototype.enableScissorTest = function(r) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(r);
};
Xe.prototype.initMaterial = function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
Xe.prototype.addPrePlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
Xe.prototype.addPostPlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
Xe.prototype.updateShadowMap = function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
Xe.prototype.setFaceCulling = function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
Xe.prototype.allocTextureUnit = function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
Xe.prototype.setTexture = function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
Xe.prototype.setTexture2D = function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
Xe.prototype.setTextureCube = function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
Xe.prototype.getActiveMipMapLevel = function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
};
Object.defineProperties(Xe.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = r;
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = r;
        }
    },
    shadowMapCullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
        }
    },
    context: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
        }
    },
    vr: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
        }
    },
    gammaInput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
        }
    },
    gammaOutput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = r === !0 ? Ze : Fn;
        }
    },
    toneMappingWhitePoint: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
        }
    },
    gammaFactor: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        }
    }
});
Object.defineProperties(Cu.prototype, {
    cullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
        }
    },
    renderReverseSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
        }
    },
    renderSingleSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
        }
    }
});
Object.defineProperties(At.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = r;
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = r;
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = r;
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = r;
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = r;
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = r;
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = r;
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = r;
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = r;
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = r;
        }
    }
});
Xo.prototype.load = function(r) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    let e = this;
    return new _l().load(r, function(n) {
        e.setBuffer(n);
    }), this;
};
bl.prototype.getData = function() {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
};
Ws.prototype.updateCubeMap = function(r, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(r, e);
};
Ws.prototype.clear = function(r, e, t, n) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(r, e, t, n);
};
fn.crossOrigin = void 0;
fn.loadTexture = function(r, e, t, n) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    let i = new ml;
    i.setCrossOrigin(this.crossOrigin);
    let s = i.load(r, t, void 0, n);
    return e && (s.mapping = e), s;
};
fn.loadTextureCube = function(r, e, t, n) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    let i = new fl;
    i.setCrossOrigin(this.crossOrigin);
    let s = i.load(r, t, void 0, n);
    return e && (s.mapping = e), s;
};
fn.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
fn.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: zl
    }
}));
typeof document < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = zl);
var he1 = {
    type: "change"
}, Z1 = {
    type: "start"
}, me = {
    type: "end"
}, v = class extends dn {
    constructor(j, N){
        super(), N === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), N === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = j, this.domElement = N, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new w, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        }, this.mouseButtons = {
            LEFT: wy.ROTATE,
            MIDDLE: wy.DOLLY,
            RIGHT: wy.PAN
        }, this.touches = {
            ONE: by.ROTATE,
            TWO: by.DOLLY_PAN
        }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
            return s.phi;
        }, this.getAzimuthalAngle = function() {
            return s.theta;
        }, this.getDistance = function() {
            return this.object.position.distanceTo(this.target);
        }, this.listenToKeyEvents = function(t) {
            t.addEventListener("keydown", ie), this._domElementKeyEvents = t;
        }, this.saveState = function() {
            e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
        }, this.reset = function() {
            e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(he1), e.update(), i = a.NONE;
        }, this.update = function() {
            let t = new w, n = new gt().setFromUnitVectors(j.up, new w(0, 1, 0)), r = n.clone().invert(), c = new w, l = new gt, D = 2 * Math.PI;
            return function() {
                let le = e.object.position;
                t.copy(le).sub(e.target), t.applyQuaternion(n), s.setFromVector3(t), e.autoRotate && i === a.NONE && C(be()), e.enableDamping ? (s.theta += p.theta * e.dampingFactor, s.phi += p.phi * e.dampingFactor) : (s.theta += p.theta, s.phi += p.phi);
                let h = e.minAzimuthAngle, m = e.maxAzimuthAngle;
                return isFinite(h) && isFinite(m) && (h < -Math.PI ? h += D : h > Math.PI && (h -= D), m < -Math.PI ? m += D : m > Math.PI && (m -= D), h <= m ? s.theta = Math.max(h, Math.min(m, s.theta)) : s.theta = s.theta > (h + m) / 2 ? Math.max(h, s.theta) : Math.min(m, s.theta)), s.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, s.phi)), s.makeSafe(), s.radius *= x, s.radius = Math.max(e.minDistance, Math.min(e.maxDistance, s.radius)), e.enableDamping === !0 ? e.target.addScaledVector(P, e.dampingFactor) : e.target.add(P), t.setFromSpherical(s), t.applyQuaternion(r), le.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (p.theta *= 1 - e.dampingFactor, p.phi *= 1 - e.dampingFactor, P.multiplyScalar(1 - e.dampingFactor)) : (p.set(0, 0, 0), P.set(0, 0, 0)), x = 1, S || c.distanceToSquared(e.object.position) > F || 8 * (1 - l.dot(e.object.quaternion)) > F ? (e.dispatchEvent(he1), c.copy(e.object.position), l.copy(e.object.quaternion), S = !1, !0) : !1;
            };
        }(), this.dispose = function() {
            e.domElement.removeEventListener("contextmenu", se), e.domElement.removeEventListener("pointerdown", ne), e.domElement.removeEventListener("pointercancel", oe), e.domElement.removeEventListener("wheel", ae), e.domElement.removeEventListener("pointermove", H), e.domElement.removeEventListener("pointerup", z), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", ie);
        };
        let e = this, a = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        }, i = a.NONE, F = 1e-6, s = new kh, p = new kh, x = 1, P = new w, S = !1, E = new Z, g = new Z, O = new Z, y = new Z, T = new Z, A = new Z, M = new Z, w1 = new Z, R = new Z, o = [], k = {};
        function be() {
            return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
        }
        function I() {
            return Math.pow(.95, e.zoomSpeed);
        }
        function C(t) {
            p.theta -= t;
        }
        function X(t) {
            p.phi -= t;
        }
        let K = function() {
            let t = new w;
            return function(r, c) {
                t.setFromMatrixColumn(c, 0), t.multiplyScalar(-r), P.add(t);
            };
        }(), V = function() {
            let t = new w;
            return function(r, c) {
                e.screenSpacePanning === !0 ? t.setFromMatrixColumn(c, 1) : (t.setFromMatrixColumn(c, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(r), P.add(t);
            };
        }(), L = function() {
            let t = new w;
            return function(r, c) {
                let l = e.domElement;
                if (e.object.isPerspectiveCamera) {
                    let D = e.object.position;
                    t.copy(D).sub(e.target);
                    let Y = t.length();
                    Y *= Math.tan(e.object.fov / 2 * Math.PI / 180), K(2 * r * Y / l.clientHeight, e.object.matrix), V(2 * c * Y / l.clientHeight, e.object.matrix);
                } else e.object.isOrthographicCamera ? (K(r * (e.object.right - e.object.left) / e.object.zoom / l.clientWidth, e.object.matrix), V(c * (e.object.top - e.object.bottom) / e.object.zoom / l.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
            };
        }();
        function _(t) {
            e.object.isPerspectiveCamera ? x /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
        }
        function W(t) {
            e.object.isPerspectiveCamera ? x *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
        }
        function B(t) {
            E.set(t.clientX, t.clientY);
        }
        function Ee(t) {
            M.set(t.clientX, t.clientY);
        }
        function G(t) {
            y.set(t.clientX, t.clientY);
        }
        function ge(t) {
            g.set(t.clientX, t.clientY), O.subVectors(g, E).multiplyScalar(e.rotateSpeed);
            let n = e.domElement;
            C(2 * Math.PI * O.x / n.clientHeight), X(2 * Math.PI * O.y / n.clientHeight), E.copy(g), e.update();
        }
        function ye(t) {
            w1.set(t.clientX, t.clientY), R.subVectors(w1, M), R.y > 0 ? _(I()) : R.y < 0 && W(I()), M.copy(w1), e.update();
        }
        function Te(t) {
            T.set(t.clientX, t.clientY), A.subVectors(T, y).multiplyScalar(e.panSpeed), L(A.x, A.y), y.copy(T), e.update();
        }
        function Pe(t) {
            t.deltaY < 0 ? W(I()) : t.deltaY > 0 && _(I()), e.update();
        }
        function Oe(t) {
            let n = !1;
            switch(t.code){
                case e.keys.UP:
                    L(0, e.keyPanSpeed), n = !0;
                    break;
                case e.keys.BOTTOM:
                    L(0, -e.keyPanSpeed), n = !0;
                    break;
                case e.keys.LEFT:
                    L(e.keyPanSpeed, 0), n = !0;
                    break;
                case e.keys.RIGHT:
                    L(-e.keyPanSpeed, 0), n = !0;
                    break;
            }
            n && (t.preventDefault(), e.update());
        }
        function q() {
            if (o.length === 1) E.set(o[0].pageX, o[0].pageY);
            else {
                let t = .5 * (o[0].pageX + o[1].pageX), n = .5 * (o[0].pageY + o[1].pageY);
                E.set(t, n);
            }
        }
        function Q() {
            if (o.length === 1) y.set(o[0].pageX, o[0].pageY);
            else {
                let t = .5 * (o[0].pageX + o[1].pageX), n = .5 * (o[0].pageY + o[1].pageY);
                y.set(t, n);
            }
        }
        function J() {
            let t = o[0].pageX - o[1].pageX, n = o[0].pageY - o[1].pageY, r = Math.sqrt(t * t + n * n);
            M.set(0, r);
        }
        function Ae() {
            e.enableZoom && J(), e.enablePan && Q();
        }
        function Me() {
            e.enableZoom && J(), e.enableRotate && q();
        }
        function $(t) {
            if (o.length == 1) g.set(t.pageX, t.pageY);
            else {
                let r = U(t), c = .5 * (t.pageX + r.x), l = .5 * (t.pageY + r.y);
                g.set(c, l);
            }
            O.subVectors(g, E).multiplyScalar(e.rotateSpeed);
            let n = e.domElement;
            C(2 * Math.PI * O.x / n.clientHeight), X(2 * Math.PI * O.y / n.clientHeight), E.copy(g);
        }
        function ee(t) {
            if (o.length === 1) T.set(t.pageX, t.pageY);
            else {
                let n = U(t), r = .5 * (t.pageX + n.x), c = .5 * (t.pageY + n.y);
                T.set(r, c);
            }
            A.subVectors(T, y).multiplyScalar(e.panSpeed), L(A.x, A.y), y.copy(T);
        }
        function te(t) {
            let n = U(t), r = t.pageX - n.x, c = t.pageY - n.y, l = Math.sqrt(r * r + c * c);
            w1.set(0, l), R.set(0, Math.pow(w1.y / M.y, e.zoomSpeed)), _(R.y), M.copy(w1);
        }
        function we(t) {
            e.enableZoom && te(t), e.enablePan && ee(t);
        }
        function Le(t) {
            e.enableZoom && te(t), e.enableRotate && $(t);
        }
        function ne(t) {
            e.enabled !== !1 && (o.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", H), e.domElement.addEventListener("pointerup", z)), xe(t), t.pointerType === "touch" ? Re(t) : De(t));
        }
        function H(t) {
            e.enabled !== !1 && (t.pointerType === "touch" ? je(t) : Ne(t));
        }
        function z(t) {
            re(t), o.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", H), e.domElement.removeEventListener("pointerup", z)), e.dispatchEvent(me), i = a.NONE;
        }
        function oe(t) {
            re(t);
        }
        function De(t) {
            let n;
            switch(t.button){
                case 0:
                    n = e.mouseButtons.LEFT;
                    break;
                case 1:
                    n = e.mouseButtons.MIDDLE;
                    break;
                case 2:
                    n = e.mouseButtons.RIGHT;
                    break;
                default:
                    n = -1;
            }
            switch(n){
                case wy.DOLLY:
                    if (e.enableZoom === !1) return;
                    Ee(t), i = a.DOLLY;
                    break;
                case wy.ROTATE:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (e.enablePan === !1) return;
                        G(t), i = a.PAN;
                    } else {
                        if (e.enableRotate === !1) return;
                        B(t), i = a.ROTATE;
                    }
                    break;
                case wy.PAN:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (e.enableRotate === !1) return;
                        B(t), i = a.ROTATE;
                    } else {
                        if (e.enablePan === !1) return;
                        G(t), i = a.PAN;
                    }
                    break;
                default:
                    i = a.NONE;
            }
            i !== a.NONE && e.dispatchEvent(Z1);
        }
        function Ne(t) {
            if (e.enabled !== !1) switch(i){
                case a.ROTATE:
                    if (e.enableRotate === !1) return;
                    ge(t);
                    break;
                case a.DOLLY:
                    if (e.enableZoom === !1) return;
                    ye(t);
                    break;
                case a.PAN:
                    if (e.enablePan === !1) return;
                    Te(t);
                    break;
            }
        }
        function ae(t) {
            e.enabled === !1 || e.enableZoom === !1 || i !== a.NONE || (t.preventDefault(), e.dispatchEvent(Z1), Pe(t), e.dispatchEvent(me));
        }
        function ie(t) {
            e.enabled === !1 || e.enablePan === !1 || Oe(t);
        }
        function Re(t) {
            switch(ce(t), o.length){
                case 1:
                    switch(e.touches.ONE){
                        case by.ROTATE:
                            if (e.enableRotate === !1) return;
                            q(), i = a.TOUCH_ROTATE;
                            break;
                        case by.PAN:
                            if (e.enablePan === !1) return;
                            Q(), i = a.TOUCH_PAN;
                            break;
                        default:
                            i = a.NONE;
                    }
                    break;
                case 2:
                    switch(e.touches.TWO){
                        case by.DOLLY_PAN:
                            if (e.enableZoom === !1 && e.enablePan === !1) return;
                            Ae(), i = a.TOUCH_DOLLY_PAN;
                            break;
                        case by.DOLLY_ROTATE:
                            if (e.enableZoom === !1 && e.enableRotate === !1) return;
                            Me(), i = a.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            i = a.NONE;
                    }
                    break;
                default:
                    i = a.NONE;
            }
            i !== a.NONE && e.dispatchEvent(Z1);
        }
        function je(t) {
            switch(ce(t), i){
                case a.TOUCH_ROTATE:
                    if (e.enableRotate === !1) return;
                    $(t), e.update();
                    break;
                case a.TOUCH_PAN:
                    if (e.enablePan === !1) return;
                    ee(t), e.update();
                    break;
                case a.TOUCH_DOLLY_PAN:
                    if (e.enableZoom === !1 && e.enablePan === !1) return;
                    we(t), e.update();
                    break;
                case a.TOUCH_DOLLY_ROTATE:
                    if (e.enableZoom === !1 && e.enableRotate === !1) return;
                    Le(t), e.update();
                    break;
                default:
                    i = a.NONE;
            }
        }
        function se(t) {
            e.enabled !== !1 && t.preventDefault();
        }
        function xe(t) {
            o.push(t);
        }
        function re(t) {
            delete k[t.pointerId];
            for(let n = 0; n < o.length; n++)if (o[n].pointerId == t.pointerId) {
                o.splice(n, 1);
                return;
            }
        }
        function ce(t) {
            let n = k[t.pointerId];
            n === void 0 && (n = new Z, k[t.pointerId] = n), n.set(t.pageX, t.pageY);
        }
        function U(t) {
            let n = t.pointerId === o[0].pointerId ? o[1] : o[0];
            return k[n.pointerId];
        }
        e.domElement.addEventListener("contextmenu", se), e.domElement.addEventListener("pointerdown", ne), e.domElement.addEventListener("pointercancel", oe), e.domElement.addEventListener("wheel", ae, {
            passive: !1
        }), this.update();
    }
};
var Se = class extends St {
    constructor(t){
        super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
            return new Z2(e);
        }), this.register(function(e) {
            return new re(e);
        }), this.register(function(e) {
            return new ie(e);
        }), this.register(function(e) {
            return new $(e);
        }), this.register(function(e) {
            return new ee(e);
        }), this.register(function(e) {
            return new te1(e);
        }), this.register(function(e) {
            return new se(e);
        }), this.register(function(e) {
            return new ne1(e);
        }), this.register(function(e) {
            return new J(e);
        }), this.register(function(e) {
            return new oe(e);
        });
    }
    load(t, e, n, s) {
        let r = this, i;
        this.resourcePath !== "" ? i = this.resourcePath : this.path !== "" ? i = this.path : i = ur.extractUrlBase(t), this.manager.itemStart(t);
        let a = function(c) {
            s ? s(c) : console.error(c), r.manager.itemError(t), r.manager.itemEnd(t);
        }, o = new Wt(this.manager);
        o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(c) {
            try {
                r.parse(c, i, function(l) {
                    e(l), r.manager.itemEnd(t);
                }, a);
            } catch (l) {
                a(l);
            }
        }, n, a);
    }
    setDRACOLoader(t) {
        return this.dracoLoader = t, this;
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(t) {
        return this.ktx2Loader = t, this;
    }
    setMeshoptDecoder(t) {
        return this.meshoptDecoder = t, this;
    }
    register(t) {
        return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this;
    }
    unregister(t) {
        return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this;
    }
    parse(t, e, n, s) {
        let r, i = {}, a = {};
        if (typeof t == "string") r = t;
        else if (ur.decodeText(new Uint8Array(t, 0, 4)) === Ue) {
            try {
                i[g.KHR_BINARY_GLTF] = new ae(t);
            } catch (u) {
                s && s(u);
                return;
            }
            r = i[g.KHR_BINARY_GLTF].content;
        } else r = ur.decodeText(new Uint8Array(t));
        let o = JSON.parse(r);
        if (o.asset === void 0 || o.asset.version[0] < 2) {
            s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return;
        }
        let c = new me1(o, {
            path: e || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        c.fileLoader.setRequestHeader(this.requestHeader);
        for(let l = 0; l < this.pluginCallbacks.length; l++){
            let u1 = this.pluginCallbacks[l](c);
            a[u1.name] = u1, i[u1.name] = !0;
        }
        if (o.extensionsUsed) for(let l1 = 0; l1 < o.extensionsUsed.length; ++l1){
            let u2 = o.extensionsUsed[l1], h = o.extensionsRequired || [];
            switch(u2){
                case g.KHR_MATERIALS_UNLIT:
                    i[u2] = new Q;
                    break;
                case g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                    i[u2] = new le;
                    break;
                case g.KHR_DRACO_MESH_COMPRESSION:
                    i[u2] = new ce(o, this.dracoLoader);
                    break;
                case g.KHR_TEXTURE_TRANSFORM:
                    i[u2] = new ue;
                    break;
                case g.KHR_MESH_QUANTIZATION:
                    i[u2] = new fe;
                    break;
                default:
                    h.indexOf(u2) >= 0 && a[u2] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u2 + '".');
            }
        }
        c.setExtensions(i), c.setPlugins(a), c.parse(n, s);
    }
    parseAsync(t, e) {
        let n = this;
        return new Promise(function(s, r) {
            n.parse(t, e, s, r);
        });
    }
};
function Nt1() {
    let f = {};
    return {
        get: function(t) {
            return f[t];
        },
        add: function(t, e) {
            f[t] = e;
        },
        remove: function(t) {
            delete f[t];
        },
        removeAll: function() {
            f = {};
        }
    };
}
var g = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
}, J = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
        };
    }
    _markDefs() {
        let t = this.parser, e = this.parser.json.nodes || [];
        for(let n = 0, s = e.length; n < s; n++){
            let r = e[n];
            r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, r.extensions[this.name].light);
        }
    }
    _loadLight(t) {
        let e = this.parser, n = "light:" + t, s = e.cache.get(n);
        if (s) return s;
        let r = e.json, o = ((r.extensions && r.extensions[this.name] || {}).lights || [])[t], c, l = new ne(16777215);
        o.color !== void 0 && l.fromArray(o.color);
        let u = o.range !== void 0 ? o.range : 0;
        switch(o.type){
            case "directional":
                c = new Vo(l), c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            case "point":
                c = new Uo(l), c.distance = u;
                break;
            case "spot":
                c = new zo(l), c.distance = u, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, c.angle = o.spot.outerConeAngle, c.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
        }
        return c.position.set(0, 0, 0), c.decay = 2, o.intensity !== void 0 && (c.intensity = o.intensity), c.name = e.createUniqueName(o.name || "light_" + t), s = Promise.resolve(c), e.cache.add(n, s), s;
    }
    createNodeAttachment(t) {
        let e = this, n = this.parser, r = n.json.nodes[t], a = (r.extensions && r.extensions[this.name] || {}).light;
        return a === void 0 ? null : this._loadLight(a).then(function(o) {
            return n._getNodeRef(e.cache, a, o);
        });
    }
}, Q = class {
    constructor(){
        this.name = g.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return jt;
    }
    extendParams(t, e, n) {
        let s = [];
        t.color = new ne(1, 1, 1), t.opacity = 1;
        let r = e.pbrMetallicRoughness;
        if (r) {
            if (Array.isArray(r.baseColorFactor)) {
                let i = r.baseColorFactor;
                t.color.fromArray(i), t.opacity = i[3];
            }
            r.baseColorTexture !== void 0 && s.push(n.assignTexture(t, "map", r.baseColorTexture));
        }
        return Promise.all(s);
    }
}, Z2 = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Eo;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s = n.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        let r = [], i = s.extensions[this.name];
        if (i.clearcoatFactor !== void 0 && (e.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && r.push(n.assignTexture(e, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(e, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(e, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
            let a = i.clearcoatNormalTexture.scale;
            e.clearcoatNormalScale = new Z(a, a);
        }
        return Promise.all(r);
    }
}, $ = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Eo;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s = n.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        let r = [];
        e.sheenColor = new ne(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
        let i = s.extensions[this.name];
        return i.sheenColorFactor !== void 0 && e.sheenColor.fromArray(i.sheenColorFactor), i.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && r.push(n.assignTexture(e, "sheenColorMap", i.sheenColorTexture)), i.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(e, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(r);
    }
}, ee = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Eo;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s = n.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        let r = [], i = s.extensions[this.name];
        return i.transmissionFactor !== void 0 && (e.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && r.push(n.assignTexture(e, "transmissionMap", i.transmissionTexture)), Promise.all(r);
    }
}, te1 = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Eo;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s = n.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        let r = [], i = s.extensions[this.name];
        e.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && r.push(n.assignTexture(e, "thicknessMap", i.thicknessTexture)), e.attenuationDistance = i.attenuationDistance || 0;
        let a = i.attenuationColor || [
            1,
            1,
            1
        ];
        return e.attenuationColor = new ne(a[0], a[1], a[2]), Promise.all(r);
    }
}, se = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_IOR;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Eo;
    }
    extendMaterialParams(t, e) {
        let s = this.parser.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        let r = s.extensions[this.name];
        return e.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
    }
}, ne1 = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Eo;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s = n.json.materials[t];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        let r = [], i = s.extensions[this.name];
        e.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && r.push(n.assignTexture(e, "specularIntensityMap", i.specularTexture));
        let a = i.specularColorFactor || [
            1,
            1,
            1
        ];
        return e.specularColor = new ne(a[0], a[1], a[2]), i.specularColorTexture !== void 0 && r.push(n.assignTexture(e, "specularColorMap", i.specularColorTexture).then(function(o) {
            o.encoding = Ze;
        })), Promise.all(r);
    }
}, re = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_TEXTURE_BASISU;
    }
    loadTexture(t) {
        let e = this.parser, n = e.json, s = n.textures[t];
        if (!s.extensions || !s.extensions[this.name]) return null;
        let r = s.extensions[this.name], i = n.images[r.source], a = e.options.ktx2Loader;
        if (!a) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null;
        }
        return e.loadTextureImage(t, i, a);
    }
}, ie = class {
    constructor(t){
        this.parser = t, this.name = g.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(t) {
        let e = this.name, n = this.parser, s = n.json, r = s.textures[t];
        if (!r.extensions || !r.extensions[e]) return null;
        let i = r.extensions[e], a = s.images[i.source], o = n.textureLoader;
        if (a.uri) {
            let c = n.options.manager.getHandler(a.uri);
            c !== null && (o = c);
        }
        return this.detectSupport().then(function(c) {
            if (c) return n.loadTextureImage(t, a, o);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return n.loadTexture(t);
        });
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(t) {
            let e = new Image;
            e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
                t(e.height === 1);
            };
        })), this.isSupported;
    }
}, oe = class {
    constructor(t){
        this.name = g.EXT_MESHOPT_COMPRESSION, this.parser = t;
    }
    loadBufferView(t) {
        let e = this.parser.json, n = e.bufferViews[t];
        if (n.extensions && n.extensions[this.name]) {
            let s = n.extensions[this.name], r = this.parser.getDependency("buffer", s.buffer), i = this.parser.options.meshoptDecoder;
            if (!i || !i.supported) {
                if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null;
            }
            return Promise.all([
                r,
                i.ready
            ]).then(function(a) {
                let o = s.byteOffset || 0, c = s.byteLength || 0, l = s.count, u = s.byteStride, h = new ArrayBuffer(l * u), d = new Uint8Array(a[0], o, c);
                return i.decodeGltfBuffer(new Uint8Array(h), l, u, d, s.mode, s.filter), h;
            });
        } else return null;
    }
}, Ue = "glTF", F = 12, xe = {
    JSON: 1313821514,
    BIN: 5130562
}, ae = class {
    constructor(t){
        this.name = g.KHR_BINARY_GLTF, this.content = null, this.body = null;
        let e = new DataView(t, 0, F);
        if (this.header = {
            magic: ur.decodeText(new Uint8Array(t.slice(0, 4))),
            version: e.getUint32(4, !0),
            length: e.getUint32(8, !0)
        }, this.header.magic !== Ue) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        let n = this.header.length - F, s = new DataView(t, F), r = 0;
        for(; r < n;){
            let i = s.getUint32(r, !0);
            r += 4;
            let a = s.getUint32(r, !0);
            if (r += 4, a === xe.JSON) {
                let o = new Uint8Array(t, F + r, i);
                this.content = ur.decodeText(o);
            } else if (a === xe.BIN) {
                let o1 = F + r;
                this.body = t.slice(o1, o1 + i);
            }
            r += i;
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
}, ce = class {
    constructor(t, e){
        if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = g.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload();
    }
    decodePrimitive(t, e) {
        let n = this.json, s = this.dracoLoader, r = t.extensions[this.name].bufferView, i = t.extensions[this.name].attributes, a = {}, o = {}, c = {};
        for(let l in i){
            let u = he2[l] || l.toLowerCase();
            a[u] = i[l];
        }
        for(let l1 in t.attributes){
            let u1 = he2[l1] || l1.toLowerCase();
            if (i[l1] !== void 0) {
                let h = n.accessors[t.attributes[l1]], d = B[h.componentType];
                c[u1] = d, o[u1] = h.normalized === !0;
            }
        }
        return e.getDependency("bufferView", r).then(function(l) {
            return new Promise(function(u) {
                s.decodeDracoFile(l, function(h) {
                    for(let d in h.attributes){
                        let A = h.attributes[d], T = o[d];
                        T !== void 0 && (A.normalized = T);
                    }
                    u(h);
                }, a, c);
            });
        });
    }
}, ue = class {
    constructor(){
        this.name = g.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(t, e) {
        return e.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (t = t.clone(), e.offset !== void 0 && t.offset.fromArray(e.offset), e.rotation !== void 0 && (t.rotation = e.rotation), e.scale !== void 0 && t.repeat.fromArray(e.scale), t.needsUpdate = !0), t;
    }
}, K = class extends cr {
    constructor(t){
        super(), this.isGLTFSpecularGlossinessMaterial = !0;
        let e = [
            "#ifdef USE_SPECULARMAP",
            "	uniform sampler2D specularMap;",
            "#endif"
        ].join(`
`), n = [
            "#ifdef USE_GLOSSINESSMAP",
            "	uniform sampler2D glossinessMap;",
            "#endif"
        ].join(`
`), s = [
            "vec3 specularFactor = specular;",
            "#ifdef USE_SPECULARMAP",
            "	vec4 texelSpecular = texture2D( specularMap, vUv );",
            "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
            "	specularFactor *= texelSpecular.rgb;",
            "#endif"
        ].join(`
`), r = [
            "float glossinessFactor = glossiness;",
            "#ifdef USE_GLOSSINESSMAP",
            "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
            "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
            "	glossinessFactor *= texelGlossiness.a;",
            "#endif"
        ].join(`
`), i = [
            "PhysicalMaterial material;",
            "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
            "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
            "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
            "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
            "material.roughness += geometryRoughness;",
            "material.roughness = min( material.roughness, 1.0 );",
            "material.specularColor = specularFactor;"
        ].join(`
`), a = {
            specular: {
                value: new ne().setHex(16777215)
            },
            glossiness: {
                value: 1
            },
            specularMap: {
                value: null
            },
            glossinessMap: {
                value: null
            }
        };
        this._extraUniforms = a, this.onBeforeCompile = function(o) {
            for(let c in a)o.uniforms[c] = a[c];
            o.fragmentShader = o.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", e).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", s).replace("#include <metalnessmap_fragment>", r).replace("#include <lights_physical_fragment>", i);
        }, Object.defineProperties(this, {
            specular: {
                get: function() {
                    return a.specular.value;
                },
                set: function(o) {
                    a.specular.value = o;
                }
            },
            specularMap: {
                get: function() {
                    return a.specularMap.value;
                },
                set: function(o) {
                    a.specularMap.value = o, o ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
                }
            },
            glossiness: {
                get: function() {
                    return a.glossiness.value;
                },
                set: function(o) {
                    a.glossiness.value = o;
                }
            },
            glossinessMap: {
                get: function() {
                    return a.glossinessMap.value;
                },
                set: function(o) {
                    a.glossinessMap.value = o, o ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
                }
            }
        }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.specularMap = t.specularMap, this.specular.copy(t.specular), this.glossinessMap = t.glossinessMap, this.glossiness = t.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
    }
}, le = class {
    constructor(){
        this.name = g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
            "color",
            "map",
            "lightMap",
            "lightMapIntensity",
            "aoMap",
            "aoMapIntensity",
            "emissive",
            "emissiveIntensity",
            "emissiveMap",
            "bumpMap",
            "bumpScale",
            "normalMap",
            "normalMapType",
            "displacementMap",
            "displacementScale",
            "displacementBias",
            "specularMap",
            "specular",
            "glossinessMap",
            "glossiness",
            "alphaMap",
            "envMap",
            "envMapIntensity",
            "refractionRatio"
        ];
    }
    getMaterialType() {
        return K;
    }
    extendParams(t, e, n) {
        let s = e.extensions[this.name];
        t.color = new ne(1, 1, 1), t.opacity = 1;
        let r = [];
        if (Array.isArray(s.diffuseFactor)) {
            let i = s.diffuseFactor;
            t.color.fromArray(i), t.opacity = i[3];
        }
        if (s.diffuseTexture !== void 0 && r.push(n.assignTexture(t, "map", s.diffuseTexture)), t.emissive = new ne(0, 0, 0), t.glossiness = s.glossinessFactor !== void 0 ? s.glossinessFactor : 1, t.specular = new ne(1, 1, 1), Array.isArray(s.specularFactor) && t.specular.fromArray(s.specularFactor), s.specularGlossinessTexture !== void 0) {
            let i1 = s.specularGlossinessTexture;
            r.push(n.assignTexture(t, "glossinessMap", i1)), r.push(n.assignTexture(t, "specularMap", i1));
        }
        return Promise.all(r);
    }
    createMaterial(t) {
        let e = new K(t);
        return e.fog = !0, e.color = t.color, e.map = t.map === void 0 ? null : t.map, e.lightMap = null, e.lightMapIntensity = 1, e.aoMap = t.aoMap === void 0 ? null : t.aoMap, e.aoMapIntensity = 1, e.emissive = t.emissive, e.emissiveIntensity = 1, e.emissiveMap = t.emissiveMap === void 0 ? null : t.emissiveMap, e.bumpMap = t.bumpMap === void 0 ? null : t.bumpMap, e.bumpScale = 1, e.normalMap = t.normalMap === void 0 ? null : t.normalMap, e.normalMapType = gs, t.normalScale && (e.normalScale = t.normalScale), e.displacementMap = null, e.displacementScale = 1, e.displacementBias = 0, e.specularMap = t.specularMap === void 0 ? null : t.specularMap, e.specular = t.specular, e.glossinessMap = t.glossinessMap === void 0 ? null : t.glossinessMap, e.glossiness = t.glossiness, e.alphaMap = null, e.envMap = t.envMap === void 0 ? null : t.envMap, e.envMapIntensity = 1, e.refractionRatio = .98, e;
    }
}, fe = class {
    constructor(){
        this.name = g.KHR_MESH_QUANTIZATION;
    }
}, L = class extends nn {
    constructor(t, e, n, s){
        super(t, e, n, s);
    }
    copySampleValue_(t) {
        let e = this.resultBuffer, n = this.sampleValues, s = this.valueSize, r = t * s * 3 + s;
        for(let i = 0; i !== s; i++)e[i] = n[r + i];
        return e;
    }
};
L.prototype.beforeStart_ = L.prototype.copySampleValue_;
L.prototype.afterEnd_ = L.prototype.copySampleValue_;
L.prototype.interpolate_ = function(f, t, e, n) {
    let s = this.resultBuffer, r = this.sampleValues, i = this.valueSize, a = i * 2, o = i * 3, c = n - t, l = (e - t) / c, u = l * l, h = u * l, d = f * o, A = d - o, T = -2 * h + 3 * u, m = h - u, p = 1 - T, M = m - u + l;
    for(let R = 0; R !== i; R++){
        let U = r[A + R + i], N = r[A + R + a] * c, E = r[d + R + i], S = r[d + R] * c;
        s[R] = p * U + M * N + T * E + m * S;
    }
    return s;
};
var It1 = new gt, de1 = class extends L {
    interpolate_(t, e, n, s) {
        let r = super.interpolate_(t, e, n, s);
        return It1.fromArray(r).normalize().toArray(r), r;
    }
}, y = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
}, B = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}, Ee = {
    9728: ct,
    9729: nt,
    9984: Oa,
    9985: fu,
    9986: Ua,
    9987: ms
}, _e = {
    33071: Mt,
    33648: lo,
    10497: ao
}, ye = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
}, he2 = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
}, b = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
}, Ot1 = {
    CUBICSPLINE: void 0,
    LINEAR: ho,
    STEP: co
}, q = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
function Ct1(f) {
    return f.DefaultMaterial === void 0 && (f.DefaultMaterial = new cr({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Oi
    })), f.DefaultMaterial;
}
function D(f, t, e) {
    for(let n in e.extensions)f[n] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[n] = e.extensions[n]);
}
function I(f, t) {
    t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(f.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Ht1(f, t, e) {
    let n = !1, s = !1;
    for(let a = 0, o = t.length; a < o; a++){
        let c = t[a];
        if (c.POSITION !== void 0 && (n = !0), c.NORMAL !== void 0 && (s = !0), n && s) break;
    }
    if (!n && !s) return Promise.resolve(f);
    let r = [], i = [];
    for(let a1 = 0, o1 = t.length; a1 < o1; a1++){
        let c1 = t[a1];
        if (n) {
            let l = c1.POSITION !== void 0 ? e.getDependency("accessor", c1.POSITION) : f.attributes.position;
            r.push(l);
        }
        if (s) {
            let l1 = c1.NORMAL !== void 0 ? e.getDependency("accessor", c1.NORMAL) : f.attributes.normal;
            i.push(l1);
        }
    }
    return Promise.all([
        Promise.all(r),
        Promise.all(i)
    ]).then(function(a) {
        let o = a[0], c = a[1];
        return n && (f.morphAttributes.position = o), s && (f.morphAttributes.normal = c), f.morphTargetsRelative = !0, f;
    });
}
function vt1(f, t) {
    if (f.updateMorphTargets(), t.weights !== void 0) for(let e = 0, n = t.weights.length; e < n; e++)f.morphTargetInfluences[e] = t.weights[e];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
        let e1 = t.extras.targetNames;
        if (f.morphTargetInfluences.length === e1.length) {
            f.morphTargetDictionary = {};
            for(let n1 = 0, s = e1.length; n1 < s; n1++)f.morphTargetDictionary[e1[n1]] = n1;
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
}
function Pt1(f) {
    let t = f.extensions && f.extensions[g.KHR_DRACO_MESH_COMPRESSION], e;
    return t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Le(t.attributes) : e = f.indices + ":" + Le(f.attributes) + ":" + f.mode, e;
}
function Le(f) {
    let t = "", e = Object.keys(f).sort();
    for(let n = 0, s = e.length; n < s; n++)t += e[n] + ":" + f[e[n]] + ";";
    return t;
}
function pe(f) {
    switch(f){
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
}
var me1 = class {
    constructor(t = {}, e = {}){
        this.json = t, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new Nt1, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
            refs: {},
            uses: {}
        }, this.cameraCache = {
            refs: {},
            uses: {}
        }, this.lightCache = {
            refs: {},
            uses: {}
        }, this.textureCache = {}, this.nodeNamesUsed = {}, typeof createImageBitmap < "u" && /Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !1 ? this.textureLoader = new yl(this.options.manager) : this.textureLoader = new ml(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Wt(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
    }
    setExtensions(t) {
        this.extensions = t;
    }
    setPlugins(t) {
        this.plugins = t;
    }
    parse(t, e) {
        let n = this, s = this.json, r = this.extensions;
        this.cache.removeAll(), this._invokeAll(function(i) {
            return i._markDefs && i._markDefs();
        }), Promise.all(this._invokeAll(function(i) {
            return i.beforeRoot && i.beforeRoot();
        })).then(function() {
            return Promise.all([
                n.getDependencies("scene"),
                n.getDependencies("animation"),
                n.getDependencies("camera")
            ]);
        }).then(function(i) {
            let a = {
                scene: i[0][s.scene || 0],
                scenes: i[0],
                animations: i[1],
                cameras: i[2],
                asset: s.asset,
                parser: n,
                userData: {}
            };
            D(r, a, s), I(a, s), Promise.all(n._invokeAll(function(o) {
                return o.afterRoot && o.afterRoot(a);
            })).then(function() {
                t(a);
            });
        }).catch(e);
    }
    _markDefs() {
        let t = this.json.nodes || [], e = this.json.skins || [], n = this.json.meshes || [];
        for(let s = 0, r = e.length; s < r; s++){
            let i = e[s].joints;
            for(let a = 0, o = i.length; a < o; a++)t[i[a]].isBone = !0;
        }
        for(let s1 = 0, r1 = t.length; s1 < r1; s1++){
            let i1 = t[s1];
            i1.mesh !== void 0 && (this._addNodeRef(this.meshCache, i1.mesh), i1.skin !== void 0 && (n[i1.mesh].isSkinnedMesh = !0)), i1.camera !== void 0 && this._addNodeRef(this.cameraCache, i1.camera);
        }
    }
    _addNodeRef(t, e) {
        e !== void 0 && (t.refs[e] === void 0 && (t.refs[e] = t.uses[e] = 0), t.refs[e]++);
    }
    _getNodeRef(t, e, n) {
        if (t.refs[e] <= 1) return n;
        let s = n.clone(), r = (i, a)=>{
            let o = this.associations.get(i);
            o != null && this.associations.set(a, o);
            for (let [c, l] of i.children.entries())r(l, a.children[c]);
        };
        return r(n, s), s.name += "_instance_" + t.uses[e]++, s;
    }
    _invokeOne(t) {
        let e = Object.values(this.plugins);
        e.push(this);
        for(let n = 0; n < e.length; n++){
            let s = t(e[n]);
            if (s) return s;
        }
        return null;
    }
    _invokeAll(t) {
        let e = Object.values(this.plugins);
        e.unshift(this);
        let n = [];
        for(let s = 0; s < e.length; s++){
            let r = t(e[s]);
            r && n.push(r);
        }
        return n;
    }
    getDependency(t, e) {
        let n = t + ":" + e, s = this.cache.get(n);
        if (!s) {
            switch(t){
                case "scene":
                    s = this.loadScene(e);
                    break;
                case "node":
                    s = this.loadNode(e);
                    break;
                case "mesh":
                    s = this._invokeOne(function(r) {
                        return r.loadMesh && r.loadMesh(e);
                    });
                    break;
                case "accessor":
                    s = this.loadAccessor(e);
                    break;
                case "bufferView":
                    s = this._invokeOne(function(r) {
                        return r.loadBufferView && r.loadBufferView(e);
                    });
                    break;
                case "buffer":
                    s = this.loadBuffer(e);
                    break;
                case "material":
                    s = this._invokeOne(function(r) {
                        return r.loadMaterial && r.loadMaterial(e);
                    });
                    break;
                case "texture":
                    s = this._invokeOne(function(r) {
                        return r.loadTexture && r.loadTexture(e);
                    });
                    break;
                case "skin":
                    s = this.loadSkin(e);
                    break;
                case "animation":
                    s = this.loadAnimation(e);
                    break;
                case "camera":
                    s = this.loadCamera(e);
                    break;
                default:
                    throw new Error("Unknown type: " + t);
            }
            this.cache.add(n, s);
        }
        return s;
    }
    getDependencies(t) {
        let e = this.cache.get(t);
        if (!e) {
            let n = this, s = this.json[t + (t === "mesh" ? "es" : "s")] || [];
            e = Promise.all(s.map(function(r, i) {
                return n.getDependency(t, i);
            })), this.cache.add(t, e);
        }
        return e;
    }
    loadBuffer(t) {
        let e = this.json.buffers[t], n = this.fileLoader;
        if (e.type && e.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
        if (e.uri === void 0 && t === 0) return Promise.resolve(this.extensions[g.KHR_BINARY_GLTF].body);
        let s = this.options;
        return new Promise(function(r, i) {
            n.load(ur.resolveURL(e.uri, s.path), r, void 0, function() {
                i(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
            });
        });
    }
    loadBufferView(t) {
        let e = this.json.bufferViews[t];
        return this.getDependency("buffer", e.buffer).then(function(n) {
            let s = e.byteLength || 0, r = e.byteOffset || 0;
            return n.slice(r, r + s);
        });
    }
    loadAccessor(t) {
        let e = this, n = this.json, s = this.json.accessors[t];
        if (s.bufferView === void 0 && s.sparse === void 0) return Promise.resolve(null);
        let r = [];
        return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null), s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(r).then(function(i) {
            let a = i[0], o = ye[s.type], c = B[s.componentType], l = c.BYTES_PER_ELEMENT, u = l * o, h = s.byteOffset || 0, d = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, A = s.normalized === !0, T, m;
            if (d && d !== u) {
                let p = Math.floor(h / d), M = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + p + ":" + s.count, R = e.cache.get(M);
                R || (T = new c(a, p * d, s.count * d / l), R = new Bn(T, d / l), e.cache.add(M, R)), m = new xn(R, o, h % d / l, A);
            } else a === null ? T = new c(s.count * o) : T = new c(a, h, s.count * o), m = new Be(T, o, A);
            if (s.sparse !== void 0) {
                let p1 = ye.SCALAR, M1 = B[s.sparse.indices.componentType], R1 = s.sparse.indices.byteOffset || 0, U = s.sparse.values.byteOffset || 0, N = new M1(i[1], R1, s.sparse.count * p1), E = new c(i[2], U, s.sparse.count * o);
                a !== null && (m = new Be(m.array.slice(), m.itemSize, m.normalized));
                for(let S = 0, C = N.length; S < C; S++){
                    let H = N[S];
                    if (m.setX(H, E[S * o]), o >= 2 && m.setY(H, E[S * o + 1]), o >= 3 && m.setZ(H, E[S * o + 2]), o >= 4 && m.setW(H, E[S * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                }
            }
            return m;
        });
    }
    loadTexture(t) {
        let e = this.json, n = this.options, s = e.textures[t], r = e.images[s.source], i = this.textureLoader;
        if (r.uri) {
            let a = n.manager.getHandler(r.uri);
            a !== null && (i = a);
        }
        return this.loadTextureImage(t, r, i);
    }
    loadTextureImage(t, e, n) {
        let s = this, r = this.json, i = this.options, a = r.textures[t], o = (e.uri || e.bufferView) + ":" + a.sampler;
        if (this.textureCache[o]) return this.textureCache[o];
        let c = self.URL || self.webkitURL, l = e.uri || "", u = !1;
        if (e.bufferView !== void 0) l = s.getDependency("bufferView", e.bufferView).then(function(d) {
            u = !0;
            let A = new Blob([
                d
            ], {
                type: e.mimeType
            });
            return l = c.createObjectURL(A), l;
        });
        else if (e.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
        let h = Promise.resolve(l).then(function(d) {
            return new Promise(function(A, T) {
                let m = A;
                n.isImageBitmapLoader === !0 && (m = function(p) {
                    let M = new at(p);
                    M.needsUpdate = !0, A(M);
                }), n.load(ur.resolveURL(d, i.path), m, void 0, T);
            });
        }).then(function(d) {
            u === !0 && c.revokeObjectURL(l), d.flipY = !1, a.name && (d.name = a.name);
            let T = (r.samplers || {})[a.sampler] || {};
            return d.magFilter = Ee[T.magFilter] || nt, d.minFilter = Ee[T.minFilter] || ms, d.wrapS = _e[T.wrapS] || ao, d.wrapT = _e[T.wrapT] || ao, s.associations.set(d, {
                textures: t
            }), d;
        }).catch(function() {
            return console.error("THREE.GLTFLoader: Couldn't load texture", l), null;
        });
        return this.textureCache[o] = h, h;
    }
    assignTexture(t, e, n) {
        let s = this;
        return this.getDependency("texture", n.index).then(function(r) {
            if (n.texCoord !== void 0 && n.texCoord != 0 && !(e === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + e + " not yet supported."), s.extensions[g.KHR_TEXTURE_TRANSFORM]) {
                let i = n.extensions !== void 0 ? n.extensions[g.KHR_TEXTURE_TRANSFORM] : void 0;
                if (i) {
                    let a = s.associations.get(r);
                    r = s.extensions[g.KHR_TEXTURE_TRANSFORM].extendTexture(r, i), s.associations.set(r, a);
                }
            }
            return t[e] = r, r;
        });
    }
    assignFinalMaterial(t) {
        let e = t.geometry, n = t.material, s = e.attributes.tangent === void 0, r = e.attributes.color !== void 0, i = e.attributes.normal === void 0;
        if (t.isPoints) {
            let a = "PointsMaterial:" + n.uuid, o = this.cache.get(a);
            o || (o = new On, ft.prototype.copy.call(o, n), o.color.copy(n.color), o.map = n.map, o.sizeAttenuation = !1, this.cache.add(a, o)), n = o;
        } else if (t.isLine) {
            let a1 = "LineBasicMaterial:" + n.uuid, o1 = this.cache.get(a1);
            o1 || (o1 = new pt, ft.prototype.copy.call(o1, n), o1.color.copy(n.color), this.cache.add(a1, o1)), n = o1;
        }
        if (s || r || i) {
            let a2 = "ClonedMaterial:" + n.uuid + ":";
            n.isGLTFSpecularGlossinessMaterial && (a2 += "specular-glossiness:"), s && (a2 += "derivative-tangents:"), r && (a2 += "vertex-colors:"), i && (a2 += "flat-shading:");
            let o2 = this.cache.get(a2);
            o2 || (o2 = n.clone(), r && (o2.vertexColors = !0), i && (o2.flatShading = !0), s && (o2.normalScale && (o2.normalScale.y *= -1), o2.clearcoatNormalScale && (o2.clearcoatNormalScale.y *= -1)), this.cache.add(a2, o2), this.associations.set(o2, this.associations.get(n))), n = o2;
        }
        n.aoMap && e.attributes.uv2 === void 0 && e.attributes.uv !== void 0 && e.setAttribute("uv2", e.attributes.uv), t.material = n;
    }
    getMaterialType() {
        return cr;
    }
    loadMaterial(t) {
        let e = this, n = this.json, s = this.extensions, r = n.materials[t], i, a = {}, o = r.extensions || {}, c = [];
        if (o[g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            let u = s[g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            i = u.getMaterialType(), c.push(u.extendParams(a, r, e));
        } else if (o[g.KHR_MATERIALS_UNLIT]) {
            let u1 = s[g.KHR_MATERIALS_UNLIT];
            i = u1.getMaterialType(), c.push(u1.extendParams(a, r, e));
        } else {
            let u2 = r.pbrMetallicRoughness || {};
            if (a.color = new ne(1, 1, 1), a.opacity = 1, Array.isArray(u2.baseColorFactor)) {
                let h = u2.baseColorFactor;
                a.color.fromArray(h), a.opacity = h[3];
            }
            u2.baseColorTexture !== void 0 && c.push(e.assignTexture(a, "map", u2.baseColorTexture)), a.metalness = u2.metallicFactor !== void 0 ? u2.metallicFactor : 1, a.roughness = u2.roughnessFactor !== void 0 ? u2.roughnessFactor : 1, u2.metallicRoughnessTexture !== void 0 && (c.push(e.assignTexture(a, "metalnessMap", u2.metallicRoughnessTexture)), c.push(e.assignTexture(a, "roughnessMap", u2.metallicRoughnessTexture))), i = this._invokeOne(function(h) {
                return h.getMaterialType && h.getMaterialType(t);
            }), c.push(Promise.all(this._invokeAll(function(h) {
                return h.extendMaterialParams && h.extendMaterialParams(t, a);
            })));
        }
        r.doubleSided === !0 && (a.side = Ui);
        let l = r.alphaMode || q.OPAQUE;
        if (l === q.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, a.alphaWrite = !1, l === q.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : .5)), r.normalTexture !== void 0 && i !== jt && (c.push(e.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Z(1, 1), r.normalTexture.scale !== void 0)) {
            let u3 = r.normalTexture.scale;
            a.normalScale.set(u3, u3);
        }
        return r.occlusionTexture !== void 0 && i !== jt && (c.push(e.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && i !== jt && (a.emissive = new ne().fromArray(r.emissiveFactor)), r.emissiveTexture !== void 0 && i !== jt && c.push(e.assignTexture(a, "emissiveMap", r.emissiveTexture)), Promise.all(c).then(function() {
            let u;
            return i === K ? u = s[g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : u = new i(a), r.name && (u.name = r.name), u.map && (u.map.encoding = Ze), u.emissiveMap && (u.emissiveMap.encoding = Ze), I(u, r), e.associations.set(u, {
                materials: t
            }), r.extensions && D(s, u, r), u;
        });
    }
    createUniqueName(t) {
        let e = Oe.sanitizeNodeName(t || ""), n = e;
        for(let s = 1; this.nodeNamesUsed[n]; ++s)n = e + "_" + s;
        return this.nodeNamesUsed[n] = !0, n;
    }
    loadGeometries(t) {
        let e = this, n = this.extensions, s = this.primitiveCache;
        function r(a) {
            return n[g.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, e).then(function(o) {
                return we(o, a, e);
            });
        }
        let i = [];
        for(let a = 0, o = t.length; a < o; a++){
            let c = t[a], l = Pt1(c), u = s[l];
            if (u) i.push(u.promise);
            else {
                let h;
                c.extensions && c.extensions[g.KHR_DRACO_MESH_COMPRESSION] ? h = r(c) : h = we(new ve, c, e), s[l] = {
                    primitive: c,
                    promise: h
                }, i.push(h);
            }
        }
        return Promise.all(i);
    }
    loadMesh(t) {
        let e = this, n = this.json, s = this.extensions, r = n.meshes[t], i = r.primitives, a = [];
        for(let o = 0, c = i.length; o < c; o++){
            let l = i[o].material === void 0 ? Ct1(this.cache) : this.getDependency("material", i[o].material);
            a.push(l);
        }
        return a.push(e.loadGeometries(i)), Promise.all(a).then(function(o) {
            let c = o.slice(0, o.length - 1), l = o[o.length - 1], u = [];
            for(let d = 0, A = l.length; d < A; d++){
                let T = l[d], m = i[d], p, M = c[d];
                if (m.mode === y.TRIANGLES || m.mode === y.TRIANGLE_STRIP || m.mode === y.TRIANGLE_FAN || m.mode === void 0) p = r.isSkinnedMesh === !0 ? new Qs(T, M) : new ot(T, M), p.isSkinnedMesh === !0 && !p.geometry.attributes.skinWeight.normalized && p.normalizeSkinWeights(), m.mode === y.TRIANGLE_STRIP ? p.geometry = be(p.geometry, Py) : m.mode === y.TRIANGLE_FAN && (p.geometry = be(p.geometry, Dy));
                else if (m.mode === y.LINES) p = new Tt(T, M);
                else if (m.mode === y.LINE_STRIP) p = new Qt(T, M);
                else if (m.mode === y.LINE_LOOP) p = new xo(T, M);
                else if (m.mode === y.POINTS) p = new Ji(T, M);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
                Object.keys(p.geometry.morphAttributes).length > 0 && vt1(p, r), p.name = e.createUniqueName(r.name || "mesh_" + t), I(p, r), m.extensions && D(s, p, m), e.assignFinalMaterial(p), u.push(p);
            }
            for(let d1 = 0, A1 = u.length; d1 < A1; d1++)e.associations.set(u[d1], {
                meshes: t,
                primitives: d1
            });
            if (u.length === 1) return u[0];
            let h = new An;
            e.associations.set(h, {
                meshes: t
            });
            for(let d2 = 0, A2 = u.length; d2 < A2; d2++)h.add(u[d2]);
            return h;
        });
    }
    loadCamera(t) {
        let e, n = this.json.cameras[t], s = n[n.type];
        if (!s) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
        }
        return n.type === "perspective" ? e = new dt(t0.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (e = new Wi(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (e.name = this.createUniqueName(n.name)), I(e, n), Promise.resolve(e);
    }
    loadSkin(t) {
        let e = this.json.skins[t], n = {
            joints: e.joints
        };
        return e.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", e.inverseBindMatrices).then(function(s) {
            return n.inverseBindMatrices = s, n;
        });
    }
    loadAnimation(t) {
        let n = this.json.animations[t], s = [], r = [], i = [], a = [], o = [];
        for(let c = 0, l = n.channels.length; c < l; c++){
            let u = n.channels[c], h = n.samplers[u.sampler], d = u.target, A = d.node !== void 0 ? d.node : d.id, T = n.parameters !== void 0 ? n.parameters[h.input] : h.input, m = n.parameters !== void 0 ? n.parameters[h.output] : h.output;
            s.push(this.getDependency("node", A)), r.push(this.getDependency("accessor", T)), i.push(this.getDependency("accessor", m)), a.push(h), o.push(d);
        }
        return Promise.all([
            Promise.all(s),
            Promise.all(r),
            Promise.all(i),
            Promise.all(a),
            Promise.all(o)
        ]).then(function(c) {
            let l = c[0], u = c[1], h = c[2], d = c[3], A = c[4], T = [];
            for(let p = 0, M = l.length; p < M; p++){
                let R = l[p], U = u[p], N = h[p], E = d[p], S = A[p];
                if (R === void 0) continue;
                R.updateMatrix(), R.matrixAutoUpdate = !0;
                let C;
                switch(b[S.path]){
                    case b.weights:
                        C = as;
                        break;
                    case b.rotation:
                        C = ai;
                        break;
                    case b.position:
                    case b.scale:
                    default:
                        C = ls;
                        break;
                }
                let H = R.name ? R.name : R.uuid, De = E.interpolation !== void 0 ? Ot1[E.interpolation] : ho, j = [];
                b[S.path] === b.weights ? R.traverse(function(_) {
                    _.morphTargetInfluences && j.push(_.name ? _.name : _.uuid);
                }) : j.push(H);
                let v = N.array;
                if (N.normalized) {
                    let _ = pe(v.constructor), G = new Float32Array(v.length);
                    for(let w = 0, Te = v.length; w < Te; w++)G[w] = v[w] * _;
                    v = G;
                }
                for(let _1 = 0, G1 = j.length; _1 < G1; _1++){
                    let w1 = new C(j[_1] + "." + b[S.path], U.array, v, De);
                    E.interpolation === "CUBICSPLINE" && (w1.createInterpolant = function(ke) {
                        let Ke = this instanceof ai ? de1 : L;
                        return new Ke(this.times, this.values, this.getValueSize() / 3, ke);
                    }, w1.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), T.push(w1);
                }
            }
            let m = n.name ? n.name : "animation_" + t;
            return new cs(m, void 0, T);
        });
    }
    createNodeMesh(t) {
        let e = this.json, n = this, s = e.nodes[t];
        return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(r) {
            let i = n._getNodeRef(n.meshCache, s.mesh, r);
            return s.weights !== void 0 && i.traverse(function(a) {
                if (!!a.isMesh) for(let o = 0, c = s.weights.length; o < c; o++)a.morphTargetInfluences[o] = s.weights[o];
            }), i;
        });
    }
    loadNode(t) {
        let e = this.json, n = this.extensions, s = this, r = e.nodes[t], i = r.name ? s.createUniqueName(r.name) : "";
        return (function() {
            let a = [], o = s._invokeOne(function(c) {
                return c.createNodeMesh && c.createNodeMesh(t);
            });
            return o && a.push(o), r.camera !== void 0 && a.push(s.getDependency("camera", r.camera).then(function(c) {
                return s._getNodeRef(s.cameraCache, r.camera, c);
            })), s._invokeAll(function(c) {
                return c.createNodeAttachment && c.createNodeAttachment(t);
            }).forEach(function(c) {
                a.push(c);
            }), Promise.all(a);
        })().then(function(a) {
            let o;
            if (r.isBone === !0 ? o = new er : a.length > 1 ? o = new An : a.length === 1 ? o = a[0] : o = new Ie, o !== a[0]) for(let c = 0, l = a.length; c < l; c++)o.add(a[c]);
            if (r.name && (o.userData.name = r.name, o.name = i), I(o, r), r.extensions && D(n, o, r), r.matrix !== void 0) {
                let c1 = new de;
                c1.fromArray(r.matrix), o.applyMatrix4(c1);
            } else r.translation !== void 0 && o.position.fromArray(r.translation), r.rotation !== void 0 && o.quaternion.fromArray(r.rotation), r.scale !== void 0 && o.scale.fromArray(r.scale);
            return s.associations.has(o) || s.associations.set(o, {}), s.associations.get(o).nodes = t, o;
        });
    }
    loadScene(t) {
        let e = this.json, n = this.extensions, s = this.json.scenes[t], r = this, i = new An;
        s.name && (i.name = r.createUniqueName(s.name)), I(i, s), s.extensions && D(n, i, s);
        let a = s.nodes || [], o = [];
        for(let c = 0, l = a.length; c < l; c++)o.push(Fe1(a[c], i, e, r));
        return Promise.all(o).then(function() {
            let c = (l)=>{
                let u = new Map;
                for (let [h, d] of r.associations)(h instanceof ft || h instanceof at) && u.set(h, d);
                return l.traverse((h)=>{
                    let d = r.associations.get(h);
                    d != null && u.set(h, d);
                }), u;
            };
            return r.associations = c(i), i;
        });
    }
};
function Fe1(f, t, e, n) {
    let s = e.nodes[f];
    return n.getDependency("node", f).then(function(r) {
        if (s.skin === void 0) return r;
        let i;
        return n.getDependency("skin", s.skin).then(function(a) {
            i = a;
            let o = [];
            for(let c = 0, l = i.joints.length; c < l; c++)o.push(n.getDependency("node", i.joints[c]));
            return Promise.all(o);
        }).then(function(a) {
            return r.traverse(function(o) {
                if (!o.isMesh) return;
                let c = [], l = [];
                for(let u = 0, h = a.length; u < h; u++){
                    let d = a[u];
                    if (d) {
                        c.push(d);
                        let A = new de;
                        i.inverseBindMatrices !== void 0 && A.fromArray(i.inverseBindMatrices.array, u * 16), l.push(A);
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', i.joints[u]);
                }
                o.bind(new tr(c, l), o.matrixWorld);
            }), r;
        });
    }).then(function(r) {
        t.add(r);
        let i = [];
        if (s.children) {
            let a = s.children;
            for(let o = 0, c = a.length; o < c; o++){
                let l = a[o];
                i.push(Fe1(l, r, e, n));
            }
        }
        return Promise.all(i);
    });
}
function Ut1(f, t, e) {
    let n = t.attributes, s = new Rt;
    if (n.POSITION !== void 0) {
        let a = e.json.accessors[n.POSITION], o = a.min, c = a.max;
        if (o !== void 0 && c !== void 0) {
            if (s.set(new w(o[0], o[1], o[2]), new w(c[0], c[1], c[2])), a.normalized) {
                let l = pe(B[a.componentType]);
                s.min.multiplyScalar(l), s.max.multiplyScalar(l);
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return;
        }
    } else return;
    let r = t.targets;
    if (r !== void 0) {
        let a1 = new w, o1 = new w;
        for(let c1 = 0, l1 = r.length; c1 < l1; c1++){
            let u = r[c1];
            if (u.POSITION !== void 0) {
                let h = e.json.accessors[u.POSITION], d = h.min, A = h.max;
                if (d !== void 0 && A !== void 0) {
                    if (o1.setX(Math.max(Math.abs(d[0]), Math.abs(A[0]))), o1.setY(Math.max(Math.abs(d[1]), Math.abs(A[1]))), o1.setZ(Math.max(Math.abs(d[2]), Math.abs(A[2]))), h.normalized) {
                        let T = pe(B[h.componentType]);
                        o1.multiplyScalar(T);
                    }
                    a1.max(o1);
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            }
        }
        s.expandByVector(a1);
    }
    f.boundingBox = s;
    let i = new pn;
    s.getCenter(i.center), i.radius = s.min.distanceTo(s.max) / 2, f.boundingSphere = i;
}
function we(f, t, e) {
    let n = t.attributes, s = [];
    function r(i, a) {
        return e.getDependency("accessor", i).then(function(o) {
            f.setAttribute(a, o);
        });
    }
    for(let i in n){
        let a = he2[i] || i.toLowerCase();
        a in f.attributes || s.push(r(n[i], a));
    }
    if (t.indices !== void 0 && !f.index) {
        let i1 = e.getDependency("accessor", t.indices).then(function(a) {
            f.setIndex(a);
        });
        s.push(i1);
    }
    return I(f, t), Ut1(f, t, e), Promise.all(s).then(function() {
        return t.targets !== void 0 ? Ht1(f, t.targets, e) : f;
    });
}
function be(f, t) {
    let e = f.getIndex();
    if (e === null) {
        let i = [], a = f.getAttribute("position");
        if (a !== void 0) {
            for(let o = 0; o < a.count; o++)i.push(o);
            f.setIndex(i), e = f.getIndex();
        } else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), f;
    }
    let n = e.count - 2, s = [];
    if (t === Dy) for(let i1 = 1; i1 <= n; i1++)s.push(e.getX(0)), s.push(e.getX(i1)), s.push(e.getX(i1 + 1));
    else for(let i2 = 0; i2 < n; i2++)i2 % 2 === 0 ? (s.push(e.getX(i2)), s.push(e.getX(i2 + 1)), s.push(e.getX(i2 + 2))) : (s.push(e.getX(i2 + 2)), s.push(e.getX(i2 + 1)), s.push(e.getX(i2)));
    s.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    let r = f.clone();
    return r.setIndex(s), r;
}
class Event {
    callbacks = [];
    name;
    constructor(debugName){
        this.name = debugName;
    }
    on(callback) {
        if (typeof callback !== 'function') {
            throw new Error(`Expected callback of Event(${this.name ? `'${this.name}'` : ''})#on to be a function, received ${callback}`);
        }
        const cancel = ()=>{
            const index = this.callbacks.indexOf(callback);
            if (index === -1) {
                return;
            }
            this.callbacks.splice(index, 1);
        };
        this.callbacks.push(callback);
        return cancel;
    }
    once(callback) {
        if (typeof callback !== 'function') {
            throw new Error(`Expected callback of Event(${this.name ? `'${this.name}'` : ''})#once to be a function, received ${callback}`);
        }
        const run = (...args)=>{
            callback(...args);
            cancel();
        };
        this.callbacks.push(run);
        const cancel = ()=>{
            const index = this.callbacks.indexOf(run);
            if (index === -1) {
                return;
            }
            this.callbacks.splice(index, 1);
        };
        return cancel;
    }
    emit(...args) {
        this.callbacks.slice().forEach((cb, i)=>{
            cb(...args);
        });
    }
    static onAny(callback, events) {
        const destroyers = events.map((event)=>event.on(callback));
        const destroy = ()=>{
            destroyers.forEach((destroy)=>destroy());
        };
        return destroy;
    }
    static onceFirst(callback, events) {
        const destroyers = [];
        const destroy = ()=>{
            destroyers.forEach((destroy)=>destroy());
        };
        const cb = ()=>{
            callback();
            destroyers.forEach((destroy)=>destroy());
        };
        events.forEach((event)=>{
            destroyers.push(event.once(cb));
        });
        return destroy;
    }
    clear() {
        this.callbacks = [];
    }
}
var w1 = new WeakMap, A = class extends St {
    constructor(e){
        super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
        }, this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
        };
    }
    setDecoderPath(e) {
        return this.decoderPath = e, this;
    }
    setDecoderConfig(e) {
        return this.decoderConfig = e, this;
    }
    setWorkerLimit(e) {
        return this.workerLimit = e, this;
    }
    load(e, s, i, r) {
        let n = new Wt(this.manager);
        n.setPath(this.path), n.setResponseType("arraybuffer"), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials), n.load(e, (t)=>{
            let o = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: !1
            };
            this.decodeGeometry(t, o).then(s).catch(r);
        }, i, r);
    }
    decodeDracoFile(e, s, i, r) {
        let n = {
            attributeIDs: i || this.defaultAttributeIDs,
            attributeTypes: r || this.defaultAttributeTypes,
            useUniqueIDs: !!i
        };
        this.decodeGeometry(e, n).then(s);
    }
    decodeGeometry(e, s) {
        for(let a in s.attributeTypes){
            let h = s.attributeTypes[a];
            h.BYTES_PER_ELEMENT !== void 0 && (s.attributeTypes[a] = h.name);
        }
        let i = JSON.stringify(s);
        if (w1.has(e)) {
            let a1 = w1.get(e);
            if (a1.key === i) return a1.promise;
            if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
        }
        let r, n = this.workerNextTaskID++, t = e.byteLength, o = this._getWorker(n, t).then((a)=>(r = a, new Promise((h, d)=>{
                r._callbacks[n] = {
                    resolve: h,
                    reject: d
                }, r.postMessage({
                    type: "decode",
                    id: n,
                    taskConfig: s,
                    buffer: e
                }, [
                    e
                ]);
            }))).then((a)=>this._createGeometry(a.geometry));
        return o.catch(()=>!0).then(()=>{
            r && n && this._releaseTask(r, n);
        }), w1.set(e, {
            key: i,
            promise: o
        }), o;
    }
    _createGeometry(e) {
        let s = new ve;
        e.index && s.setIndex(new Be(e.index.array, 1));
        for(let i = 0; i < e.attributes.length; i++){
            let r = e.attributes[i], n = r.name, t = r.array, o = r.itemSize;
            s.setAttribute(n, new Be(t, o));
        }
        return s;
    }
    _loadLibrary(e, s) {
        let i = new Wt(this.manager);
        return i.setPath(this.decoderPath), i.setResponseType(s), i.setWithCredentials(this.withCredentials), new Promise((r, n)=>{
            i.load(e, r, void 0, n);
        });
    }
    preload() {
        return this._initDecoder(), this;
    }
    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        let e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", s = [];
        return e ? s.push(this._loadLibrary("draco_decoder.js", "text")) : (s.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), s.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(s).then((i)=>{
            let r = i[0];
            e || (this.decoderConfig.wasmBinary = i[1]);
            let n = D1.toString(), t = [
                "/* draco decoder */",
                r,
                "",
                "/* worker */",
                n.substring(n.indexOf("{") + 1, n.lastIndexOf("}"))
            ].join(`
`);
            this.workerSourceURL = URL.createObjectURL(new Blob([
                t
            ]));
        }), this.decoderPending;
    }
    _getWorker(e, s) {
        return this._initDecoder().then(()=>{
            if (this.workerPool.length < this.workerLimit) {
                let r = new Worker(this.workerSourceURL);
                r._callbacks = {}, r._taskCosts = {}, r._taskLoad = 0, r.postMessage({
                    type: "init",
                    decoderConfig: this.decoderConfig
                }), r.onmessage = function(n) {
                    let t = n.data;
                    switch(t.type){
                        case "decode":
                            r._callbacks[t.id].resolve(t);
                            break;
                        case "error":
                            r._callbacks[t.id].reject(t);
                            break;
                        default:
                            console.error('THREE.DRACOLoader: Unexpected message, "' + t.type + '"');
                    }
                }, this.workerPool.push(r);
            } else this.workerPool.sort(function(r, n) {
                return r._taskLoad > n._taskLoad ? -1 : 1;
            });
            let i = this.workerPool[this.workerPool.length - 1];
            return i._taskCosts[e] = s, i._taskLoad += s, i;
        });
    }
    _releaseTask(e, s) {
        e._taskLoad -= e._taskCosts[s], delete e._callbacks[s], delete e._taskCosts[s];
    }
    debug() {
        console.log("Task load: ", this.workerPool.map((e)=>e._taskLoad));
    }
    dispose() {
        for(let e = 0; e < this.workerPool.length; ++e)this.workerPool[e].terminate();
        return this.workerPool.length = 0, this;
    }
};
function D1() {
    let g, e;
    onmessage = function(t) {
        let o = t.data;
        switch(o.type){
            case "init":
                g = o.decoderConfig, e = new Promise(function(d) {
                    g.onModuleLoaded = function(u) {
                        d({
                            draco: u
                        });
                    }, DracoDecoderModule(g);
                });
                break;
            case "decode":
                let a = o.buffer, h = o.taskConfig;
                e.then((d)=>{
                    let u = d.draco, c = new u.Decoder, y = new u.DecoderBuffer;
                    y.Init(new Int8Array(a), a.byteLength);
                    try {
                        let l = s(u, c, y, h), f = l.attributes.map((m)=>m.array.buffer);
                        l.index && f.push(l.index.array.buffer), self.postMessage({
                            type: "decode",
                            id: o.id,
                            geometry: l
                        }, f);
                    } catch (l1) {
                        console.error(l1), self.postMessage({
                            type: "error",
                            id: o.id,
                            error: l1.message
                        });
                    } finally{
                        u.destroy(y), u.destroy(c);
                    }
                });
                break;
        }
    };
    function s(t, o, a, h) {
        let d = h.attributeIDs, u = h.attributeTypes, c, y, l = o.GetEncodedGeometryType(a);
        if (l === t.TRIANGULAR_MESH) c = new t.Mesh, y = o.DecodeBufferToMesh(a, c);
        else if (l === t.POINT_CLOUD) c = new t.PointCloud, y = o.DecodeBufferToPointCloud(a, c);
        else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
        if (!y.ok() || c.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + y.error_msg());
        let f = {
            index: null,
            attributes: []
        };
        for(let m in d){
            let b = self[u[m]], p, _;
            if (h.useUniqueIDs) _ = d[m], p = o.GetAttributeByUniqueId(c, _);
            else {
                if (_ = o.GetAttributeId(c, t[d[m]]), _ === -1) continue;
                p = o.GetAttribute(c, _);
            }
            f.attributes.push(r(t, o, c, m, b, p));
        }
        return l === t.TRIANGULAR_MESH && (f.index = i(t, o, c)), t.destroy(c), f;
    }
    function i(t, o, a) {
        let d = a.num_faces() * 3, u = d * 4, c = t._malloc(u);
        o.GetTrianglesUInt32Array(a, u, c);
        let y = new Uint32Array(t.HEAPF32.buffer, c, d).slice();
        return t._free(c), {
            array: y,
            itemSize: 1
        };
    }
    function r(t, o, a, h, d, u) {
        let c = u.num_components(), l = a.num_points() * c, f = l * d.BYTES_PER_ELEMENT, m = n(t, d), b = t._malloc(f);
        o.GetAttributeDataArrayForAllPoints(a, u, m, f, b);
        let p = new d(t.HEAPF32.buffer, b, l).slice();
        return t._free(b), {
            name: h,
            array: p,
            itemSize: c
        };
    }
    function n(t, o) {
        switch(o){
            case Float32Array:
                return t.DT_FLOAT32;
            case Int8Array:
                return t.DT_INT8;
            case Int16Array:
                return t.DT_INT16;
            case Int32Array:
                return t.DT_INT32;
            case Uint8Array:
                return t.DT_UINT8;
            case Uint16Array:
                return t.DT_UINT16;
            case Uint32Array:
                return t.DT_UINT32;
        }
    }
}
const RENDERER_BY_ELEMENT = new WeakMap();
const DRACO_LOADER = new A(new Fo()).setDecoderPath(`https://unpkg.com/three@0.${zl}.x/examples/js/libs/draco/gltf/`);
class Controller {
    animating = false;
    scene;
    renderer;
    camera;
    controls;
    raycaster;
    clock;
    root;
    $start = new Event('ThreeController#start');
    $detach = new Event('ThreeController#$detach');
    $destruct = new Event('ThreeController#$destruct');
    $update = new Event();
    $resize = new Event();
    $click = new Event('ThreeController#$click');
    $camera = new Event();
    constructor(root, options){
        this.$destruct.once(()=>{
            if (this.animating) {
                this.stopAnimationLoop();
            }
        });
        this.$detach.once(()=>{
            this.$camera.clear();
            this.$click.clear();
        });
        this.root = root;
        this.clock = new wl();
        this.scene = new $s();
        this.renderer = RENDERER_BY_ELEMENT.get(root) || new Xe({
            antialias: true,
            alpha: true
        });
        RENDERER_BY_ELEMENT.set(root, this.renderer);
        this.$destruct.once(()=>this.renderer.dispose.bind(this.renderer));
        const { aspect  } = this.getViewportSize();
        this.camera = new dt(options.fieldOfView, aspect, 0.1, 1000);
        this.$destruct.once(this.$resize.on(()=>{
            const { aspect , width , height  } = this.getViewportSize();
            const camera = this.camera;
            camera.aspect = aspect;
            camera.updateProjectionMatrix();
            this.renderer.setSize(width * options.pixelRatio, height * options.pixelRatio, false);
        }));
        this.$resize.emit();
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.controls = new v(this.camera, this.renderer.domElement);
        if (options.restrictCameraAngle) {
            this.controls.maxPolarAngle = 0.45 * Math.PI;
        }
        this.controls.screenSpacePanning = false;
        this.controls.enableZoom = options.enableZoom;
        this.controls.enableDamping = true;
        this.controls.enablePan = options.enablePan;
        this.controls.dampingFactor = 0.1;
        this.controls.autoRotate = options.enableAutoRotate;
        this.$destruct.once(this.controls.dispose.bind(this.controls));
        this.raycaster = new Hh();
        root.appendChild(this.renderer.domElement);
        this.$destruct.once(()=>root.removeChild(this.renderer.domElement));
        const handleResize = this.$resize.emit.bind(this.$resize);
        globalThis.addEventListener('resize', handleResize);
        this.$destruct.once(()=>globalThis.removeEventListener('resize', handleResize));
        const handleCameraChange = this.$camera.emit.bind(this.$camera);
        this.controls.addEventListener('change', handleCameraChange);
        this.$destruct.once(()=>this.controls.removeEventListener('change', handleCameraChange));
        const handleClick = this.$click.emit.bind(this.$click);
        this.root.addEventListener('click', handleClick);
        this.$destruct.once(()=>this.root.removeEventListener('click', handleClick));
    }
    destructor() {
        this.$destruct.emit();
    }
    addAxisHelper(v = new w(0, 0, 0), size = 1) {
        const axesHelper = new Bl(size);
        axesHelper.position.set(v.x, v.y, v.z);
        this.scene.add(axesHelper);
    }
    setCameraPosition(position) {
        this.camera.position.copy(position);
    }
    setCameraFocusOnVector3(vector) {
        this.camera.lookAt(vector);
        this.controls.target = vector;
    }
    setCameraFocusMesh(mesh) {
        const geometry = mesh.geometry;
        const center = new w();
        geometry.computeBoundingBox();
        geometry.boundingBox?.getCenter(center);
        mesh.localToWorld(center);
        this.setCameraFocusOnVector3(center);
    }
    getViewportSize() {
        const boundingClientRect = this.root.getBoundingClientRect();
        return {
            width: boundingClientRect.width,
            height: boundingClientRect.height,
            aspect: boundingClientRect.width / boundingClientRect.height
        };
    }
    startAnimationLoop() {
        if (this.animating) {
            throw new Error('Animation already started');
        }
        const animate = ()=>{
            if (!this.animating) {
                return;
            }
            globalThis.requestAnimationFrame(animate);
            this.renderAnimationFrame();
        };
        this.animating = true;
        animate();
    }
    addGltf(path) {
        const loader = new Se().setDRACOLoader(DRACO_LOADER);
        return new Promise((resolve, reject)=>loader.load(path, (gltf)=>{
                this.scene.add(gltf.scene);
                gltf.scene.scale.set(2, 2, 2);
                gltf.scene.position.x = 0;
                gltf.scene.position.y = 0;
                gltf.scene.position.z = 0;
                resolve(gltf);
            }, (xhr)=>{
                console.log(xhr.loaded / xhr.total * 100 + '% loaded');
            }, reject));
    }
    renderAnimationFrame() {
        this.$update.emit();
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
    stopAnimationLoop() {
        if (!this.animating) {
            throw new Error('Animation not started');
        }
        this.animating = false;
    }
}
const PREFER_DARK_MODE = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
class Scenario extends Controller {
    start(useHighRes) {
        console.group('Setup scenario');
        this.setCameraPosition(new w(0, 0, -6));
        this.setCameraFocusOnVector3(new w(0, 0, 0));
        this.setLightMode(this.darkMode);
        useHighRes ? this.startHighRes() : this.startLowRes();
        this.startAnimationLoop();
        console.groupEnd();
    }
    darkMode = PREFER_DARK_MODE;
    $light = new Event();
    setLightMode(nightlight) {
        this.darkMode = nightlight;
        globalThis.document.body.setAttribute('class', this.darkMode ? 'nightlight' : 'daylight');
        this.$light.emit();
    }
    toggleLightMode() {
        this.setLightMode(!this.darkMode);
    }
    async startLowRes() {
        const ambient = new ko(0xffffff, 0.3);
        this.scene.add(ambient);
        const directional1 = new Vo(0xffffff, 0.8);
        directional1.position.set(1, 1, 1).normalize();
        this.scene.add(directional1);
        const directional2 = new Vo(0xffffff, 0.7);
        directional2.position.set(-1, 1, -1).normalize();
        this.scene.add(directional2);
        const gltf = await this.addGltf('gltf/pizza-low-res.gltf');
        const applyMaterialToMesh = ()=>{
            const material = new To({
                color: this.darkMode ? 0xcccccc : 0x333333,
                wireframe: false
            });
            gltf.scene.traverse((o)=>{
                if (o instanceof ot) {
                    o.material = material;
                }
            });
        };
        applyMaterialToMesh();
        this.$detach.on(this.$light.on(applyMaterialToMesh));
    }
    startHighRes() {
        const ambient = new ko(0xffffff, 1);
        this.scene.add(ambient);
        const directional1 = new Vo(0xffffff, 1.4);
        directional1.position.set(0.3, 0, -1).normalize();
        this.scene.add(directional1);
        const directional2 = new Vo(0xffffff, 1.4);
        directional2.position.set(-0.3, 0, -1).normalize();
        this.scene.add(directional2);
        this.addGltf('gltf/pizza-hi-res.gltf');
    }
}
export { Scenario as Scenario };
