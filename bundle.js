// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var pa = "137", wy = {
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
}, Mu = 0, il = 1, wu = 2, Qc = 1, bu = 2, rr = 3, Li = 0, ot = 1, Pi = 2, eh = 1, Mn = 0, or = 1, rl = 2, sl = 3, ol = 4, Su = 5, Mi = 100, Eu = 101, Tu = 102, al = 103, ll = 104, Au = 200, Ru = 201, Cu = 202, Lu = 203, th = 204, nh = 205, Pu = 206, Du = 207, Iu = 208, Fu = 209, Bu = 210, Nu = 0, zu = 1, Ou = 2, ia = 3, Uu = 4, Hu = 5, Gu = 6, ku = 7, Ws = 0, Vu = 1, Wu = 2, wn = 0, qu = 1, Xu = 2, Ju = 3, Yu = 4, Zu = 5, ma = 300, Ui = 301, Hi = 302, Bs = 303, Ns = 304, Ir = 306, qs = 307, zs = 1000, Mt = 1001, Os = 1002, at = 1003, ra = 1004, sa = 1005, nt = 1006, ih = 1007, Gi = 1008, bn = 1009, $u = 1010, ju = 1011, hr = 1012, Ku = 1013, Is = 1014, vn = 1015, Ti = 1016, Qu = 1017, ed = 1018, Ai = 1020, td = 1021, wt = 1023, nd = 1024, id = 1025, qn = 1026, Di = 1027, rd = 1028, sd = 1029, od = 1030, ad = 1031, ld = 1033, yo = 33776, _o = 33777, vo = 33778, Mo = 33779, cl = 35840, hl = 35841, ul = 35842, dl = 35843, cd = 36196, fl = 37492, pl = 37496, ml = 37808, gl = 37809, xl = 37810, yl = 37811, _l = 37812, vl = 37813, Ml = 37814, wl = 37815, bl = 37816, Sl = 37817, El = 37818, Tl = 37819, Al = 37820, Rl = 37821, Cl = 36492, hd = 2200, ud = 2201, dd = 2202, Us = 2300, Hs = 2301, wo = 2302, wi = 2400, bi = 2401, Gs = 2402, ga = 2500, rh = 2501, fd = 0, Py = 1, Dy = 2, Tn = 3000, Ze = 3001, pd = 3200, md = 3201, ki = 0, gd = 1, bo = 7680, xd = 519, ur = 35044, dr = 35048, Ll = "300 es", oa = 1035, Ln = class {
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
            let r = i.indexOf(t);
            r !== -1 && i.splice(r, 1);
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0) return;
        let n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            let i = n.slice(0);
            for(let r = 0, o = i.length; r < o; r++)i[r].call(this, e);
            e.target = null;
        }
    }
}, gt = [];
for(let s = 0; s < 256; s++)gt[s] = (s < 16 ? "0" : "") + s.toString(16);
var qr = 1234567, Xn = Math.PI / 180, fr = 180 / Math.PI;
function Lt() {
    let s1 = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
    return (gt[s1 & 255] + gt[s1 >> 8 & 255] + gt[s1 >> 16 & 255] + gt[s1 >> 24 & 255] + "-" + gt[e & 255] + gt[e >> 8 & 255] + "-" + gt[e >> 16 & 15 | 64] + gt[e >> 24 & 255] + "-" + gt[t & 63 | 128] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 255] + gt[t >> 24 & 255] + gt[n & 255] + gt[n >> 8 & 255] + gt[n >> 16 & 255] + gt[n >> 24 & 255]).toUpperCase();
}
function xt(s2, e, t) {
    return Math.max(e, Math.min(t, s2));
}
function xa(s3, e) {
    return (s3 % e + e) % e;
}
function yd(s4, e, t, n, i) {
    return n + (s4 - e) * (i - n) / (t - e);
}
function _d(s5, e, t) {
    return s5 !== e ? (t - s5) / (e - s5) : 0;
}
function ar(s6, e, t) {
    return (1 - t) * s6 + t * e;
}
function vd(s7, e, t, n) {
    return ar(s7, e, 1 - Math.exp(-t * n));
}
function Md(s8, e = 1) {
    return e - Math.abs(xa(s8, e * 2) - e);
}
function wd(s9, e, t) {
    return s9 <= e ? 0 : s9 >= t ? 1 : (s9 = (s9 - e) / (t - e), s9 * s9 * (3 - 2 * s9));
}
function bd(s10, e, t) {
    return s10 <= e ? 0 : s10 >= t ? 1 : (s10 = (s10 - e) / (t - e), s10 * s10 * s10 * (s10 * (s10 * 6 - 15) + 10));
}
function Sd(s11, e) {
    return s11 + Math.floor(Math.random() * (e - s11 + 1));
}
function Ed(s12, e) {
    return s12 + Math.random() * (e - s12);
}
function Td(s13) {
    return s13 * (0.5 - Math.random());
}
function Ad(s14) {
    return s14 !== void 0 && (qr = s14 % 2147483647), qr = qr * 16807 % 2147483647, (qr - 1) / 2147483646;
}
function Rd(s15) {
    return s15 * Xn;
}
function Cd(s16) {
    return s16 * fr;
}
function aa(s17) {
    return (s17 & s17 - 1) === 0 && s17 !== 0;
}
function sh(s18) {
    return Math.pow(2, Math.ceil(Math.log(s18) / Math.LN2));
}
function oh(s19) {
    return Math.pow(2, Math.floor(Math.log(s19) / Math.LN2));
}
function Ld(s20, e, t, n, i) {
    let r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), u = o((e + n) / 2), h = r((e - n) / 2), d = o((e - n) / 2), f = r((n - e) / 2), m = o((n - e) / 2);
    switch(i){
        case "XYX":
            s20.set(a * u, l * h, l * d, a * c);
            break;
        case "YZY":
            s20.set(l * d, a * u, l * h, a * c);
            break;
        case "ZXZ":
            s20.set(l * h, l * d, a * u, a * c);
            break;
        case "XZX":
            s20.set(a * u, l * m, l * f, a * c);
            break;
        case "YXY":
            s20.set(l * f, a * u, l * m, a * c);
            break;
        case "ZYZ":
            s20.set(l * m, l * f, a * u, a * c);
            break;
        default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
}
var t0 = Object.freeze({
    __proto__: null,
    DEG2RAD: Xn,
    RAD2DEG: fr,
    generateUUID: Lt,
    clamp: xt,
    euclideanModulo: xa,
    mapLinear: yd,
    inverseLerp: _d,
    lerp: ar,
    damp: vd,
    pingpong: Md,
    smoothstep: wd,
    smootherstep: bd,
    randInt: Sd,
    randFloat: Ed,
    randFloatSpread: Td,
    seededRandom: Ad,
    degToRad: Rd,
    radToDeg: Cd,
    isPowerOfTwo: aa,
    ceilPowerOfTwo: sh,
    floorPowerOfTwo: oh,
    setQuaternionFromProperEuler: Ld
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
        let n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
        return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y;
    }
};
Z.prototype.isVector2 = !0;
var ut = class {
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
    set(e, t, n, i, r, o, a, l, c) {
        let u = this.elements;
        return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = o, u[8] = c, this;
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
        let n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], f = n[5], m = n[8], x = i[0], _ = i[3], g1 = i[6], p = i[1], M = i[4], y1 = i[7], b1 = i[2], T = i[5], R = i[8];
        return r[0] = o * x + a * p + l * b1, r[3] = o * _ + a * M + l * T, r[6] = o * g1 + a * y1 + l * R, r[1] = c * x + u * p + h * b1, r[4] = c * _ + u * M + h * T, r[7] = c * g1 + u * y1 + h * R, r[2] = d * x + f * p + m * b1, r[5] = d * _ + f * M + m * T, r[8] = d * g1 + f * y1 + m * R, this;
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
    }
    determinant() {
        let e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
        return t * o * u - t * a * c - n * r * u + n * a * l + i * r * c - i * o * l;
    }
    invert() {
        let e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * o - a * c, d = a * l - u * r, f = c * r - o * l, m = t * h + n * d + i * f;
        if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        let x = 1 / m;
        return e[0] = h * x, e[1] = (i * c - u * n) * x, e[2] = (a * n - i * o) * x, e[3] = d * x, e[4] = (u * t - i * l) * x, e[5] = (i * r - a * t) * x, e[6] = f * x, e[7] = (n * l - c * t) * x, e[8] = (o * t - n * r) * x, this;
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
    setUvTransform(e, t, n, i, r, o, a) {
        let l = Math.cos(r), c = Math.sin(r);
        return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this;
    }
    scale(e, t) {
        let n = this.elements;
        return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
    }
    rotate(e) {
        let t = Math.cos(e), n = Math.sin(e), i = this.elements, r = i[0], o = i[3], a = i[6], l = i[1], c = i[4], u = i[7];
        return i[0] = t * r + n * l, i[3] = t * o + n * c, i[6] = t * a + n * u, i[1] = -n * r + t * l, i[4] = -n * o + t * c, i[7] = -n * a + t * u, this;
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
ut.prototype.isMatrix3 = !0;
function ah(s21) {
    for(let e = s21.length - 1; e >= 0; --e)if (s21[e] > 65535) return !0;
    return !1;
}
var Pd = {
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
};
function Si(s22, e) {
    return new Pd[s22](e);
}
function pr(s23) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", s23);
}
var lh = {
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
}, Nt = {
    h: 0,
    s: 0,
    l: 0
}, Xr = {
    h: 0,
    s: 0,
    l: 0
};
function So(s24, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s24 + (e - s24) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s24 + (e - s24) * 6 * (2 / 3 - t) : s24;
}
function Ri(s25) {
    return s25 < 0.04045 ? s25 * 0.0773993808 : Math.pow(s25 * 0.9478672986 + 0.0521327014, 2.4);
}
function Eo(s26) {
    return s26 < 0.0031308 ? s26 * 12.92 : 1.055 * Math.pow(s26, 0.41666) - 0.055;
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
        if (e = xa(e, 1), t = xt(t, 0, 1), n = xt(n, 0, 1), t === 0) this.r = this.g = this.b = n;
        else {
            let i = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - i;
            this.r = So(r, i, e + 1 / 3), this.g = So(r, i, e), this.b = So(r, i, e - 1 / 3);
        }
        return this;
    }
    setStyle(e) {
        function t(i) {
            i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
        }
        let n;
        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let i, r = n[1], o = n[2];
            switch(r){
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
            let i = n[1], r = i.length;
            if (r === 3) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
            if (r === 6) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this;
        }
        return e && e.length > 0 ? this.setColorName(e) : this;
    }
    setColorName(e) {
        let t = lh[e.toLowerCase()];
        return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this;
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this;
    }
    copySRGBToLinear(e) {
        return this.r = Ri(e.r), this.g = Ri(e.g), this.b = Ri(e.b), this;
    }
    copyLinearToSRGB(e) {
        return this.r = Eo(e.r), this.g = Eo(e.g), this.b = Eo(e.b), this;
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
        let t = this.r, n = this.g, i = this.b, r = Math.max(t, n, i), o = Math.min(t, n, i), a, l, c = (o + r) / 2;
        if (o === r) a = 0, l = 0;
        else {
            let u = r - o;
            switch(l = c <= 0.5 ? u / (r + o) : u / (2 - r - o), r){
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
        return this.getHSL(Nt), Nt.h += e, Nt.s += t, Nt.l += n, this.setHSL(Nt.h, Nt.s, Nt.l), this;
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
        this.getHSL(Nt), e.getHSL(Xr);
        let n = ar(Nt.h, Xr.h, t), i = ar(Nt.s, Xr.s, t), r = ar(Nt.l, Xr.l, t);
        return this.setHSL(n, i, r), this;
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
ne.NAMES = lh;
ne.prototype.isColor = !0;
ne.prototype.r = 1;
ne.prototype.g = 1;
ne.prototype.b = 1;
var ni, Pn = class {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
        let t;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
            ni === void 0 && (ni = pr("canvas")), ni.width = e.width, ni.height = e.height;
            let n = ni.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ni;
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            let t = pr("canvas");
            t.width = e.width, t.height = e.height;
            let n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            let i = n.getImageData(0, 0, e.width, e.height), r = i.data;
            for(let o = 0; o < r.length; o++)r[o] = Ri(r[o] / 255) * 255;
            return n.putImageData(i, 0, 0), t;
        } else if (e.data) {
            let t = e.data.slice(0);
            for(let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ri(t[n] / 255) * 255) : t[n] = Ri(t[n]);
            return {
                data: t,
                width: e.width,
                height: e.height
            };
        } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
    }
}, Dd = 0, ct = class extends Ln {
    constructor(e = ct.DEFAULT_IMAGE, t = ct.DEFAULT_MAPPING, n = Mt, i = Mt, r = nt, o = Gi, a = wt, l = bn, c = 1, u = Tn){
        super();
        Object.defineProperty(this, "id", {
            value: Dd++
        }), this.uuid = Lt(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Z(0, 0), this.repeat = new Z(1, 1), this.center = new Z(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ut, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
            if (i.uuid === void 0 && (i.uuid = Lt()), !t && e.images[i.uuid] === void 0) {
                let r;
                if (Array.isArray(i)) {
                    r = [];
                    for(let o = 0, a = i.length; o < a; o++)i[o].isDataTexture ? r.push(To(i[o].image)) : r.push(To(i[o]));
                } else r = To(i);
                e.images[i.uuid] = {
                    uuid: i.uuid,
                    url: r
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
        if (this.mapping !== ma) return e;
        if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch(this.wrapS){
            case zs:
                e.x = e.x - Math.floor(e.x);
                break;
            case Mt:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case Os:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break;
        }
        if (e.y < 0 || e.y > 1) switch(this.wrapT){
            case zs:
                e.y = e.y - Math.floor(e.y);
                break;
            case Mt:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case Os:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break;
        }
        return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
        e === !0 && this.version++;
    }
};
ct.DEFAULT_IMAGE = void 0;
ct.DEFAULT_MAPPING = ma;
ct.prototype.isTexture = !0;
function To(s27) {
    return typeof HTMLImageElement < "u" && s27 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s27 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s27 instanceof ImageBitmap ? Pn.getDataURL(s27) : s27.data ? {
        data: Array.prototype.slice.call(s27.data),
        width: s27.width,
        height: s27.height,
        type: s27.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var We = class {
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
        let t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements;
        return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this;
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e);
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        let t = Math.sqrt(1 - e.w * e.w);
        return t < 0.0001 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, r, l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], f = l[5], m = l[9], x = l[2], _ = l[6], g2 = l[10];
        if (Math.abs(u - d) < 0.01 && Math.abs(h - x) < 0.01 && Math.abs(m - _) < 0.01) {
            if (Math.abs(u + d) < 0.1 && Math.abs(h + x) < 0.1 && Math.abs(m + _) < 0.1 && Math.abs(c + f + g2 - 3) < 0.1) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            let M = (c + 1) / 2, y2 = (f + 1) / 2, b2 = (g2 + 1) / 2, T = (u + d) / 4, R = (h + x) / 4, P1 = (m + _) / 4;
            return M > y2 && M > b2 ? M < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(M), i = T / n, r = R / n) : y2 > b2 ? y2 < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(y2), n = T / i, r = P1 / i) : b2 < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(b2), n = R / r, i = P1 / r), this.set(n, i, r, t), this;
        }
        let p = Math.sqrt((_ - m) * (_ - m) + (h - x) * (h - x) + (d - u) * (d - u));
        return Math.abs(p) < 0.001 && (p = 1), this.x = (_ - m) / p, this.y = (h - x) / p, this.z = (d - u) / p, this.w = Math.acos((c + f + g2 - 1) / 2), this;
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
We.prototype.isVector4 = !0;
var Pt = class extends Ln {
    constructor(e, t, n = {}){
        super();
        this.width = e, this.height = t, this.depth = 1, this.scissor = new We(0, 0, e, t), this.scissorTest = !1, this.viewport = new We(0, 0, e, t), this.texture = new ct(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = {
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
Pt.prototype.isWebGLRenderTarget = !0;
var ch = class extends Pt {
    constructor(e, t, n){
        super(e, t);
        let i = this.texture;
        this.texture = [];
        for(let r = 0; r < n; r++)this.texture[r] = i.clone();
    }
    setSize(e, t, n = 1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e, this.height = t, this.depth = n;
            for(let i = 0, r = this.texture.length; i < r; i++)this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
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
ch.prototype.isWebGLMultipleRenderTargets = !0;
var Xs = class extends Pt {
    constructor(e, t, n = {}){
        super(e, t, n);
        this.samples = 4, this.ignoreDepthForMultisampleCopy = n.ignoreDepth !== void 0 ? n.ignoreDepth : !0, this.useRenderToTexture = n.useRenderToTexture !== void 0 ? n.useRenderToTexture : !1, this.useRenderbuffer = this.useRenderToTexture === !1;
    }
    copy(e) {
        return super.copy.call(this, e), this.samples = e.samples, this.useRenderToTexture = e.useRenderToTexture, this.useRenderbuffer = e.useRenderbuffer, this;
    }
};
Xs.prototype.isWebGLMultisampleRenderTarget = !0;
var yt = class {
    constructor(e = 0, t = 0, n = 0, i = 1){
        this._x = e, this._y = t, this._z = n, this._w = i;
    }
    static slerp(e, t, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i);
    }
    static slerpFlat(e, t, n, i, r, o, a) {
        let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3], d = r[o + 0], f = r[o + 1], m = r[o + 2], x = r[o + 3];
        if (a === 0) {
            e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
            return;
        }
        if (a === 1) {
            e[t + 0] = d, e[t + 1] = f, e[t + 2] = m, e[t + 3] = x;
            return;
        }
        if (h !== x || l !== d || c !== f || u !== m) {
            let _ = 1 - a, g3 = l * d + c * f + u * m + h * x, p = g3 >= 0 ? 1 : -1, M = 1 - g3 * g3;
            if (M > Number.EPSILON) {
                let b3 = Math.sqrt(M), T = Math.atan2(b3, g3 * p);
                _ = Math.sin(_ * T) / b3, a = Math.sin(a * T) / b3;
            }
            let y3 = a * p;
            if (l = l * _ + d * y3, c = c * _ + f * y3, u = u * _ + m * y3, h = h * _ + x * y3, _ === 1 - a) {
                let b4 = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
                l *= b4, c *= b4, u *= b4, h *= b4;
            }
        }
        e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
    }
    static multiplyQuaternionsFlat(e, t, n, i, r, o) {
        let a = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = r[o], d = r[o + 1], f = r[o + 2], m = r[o + 3];
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
        let n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(i / 2), h = a(r / 2), d = l(n / 2), f = l(i / 2), m = l(r / 2);
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
        let t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + a + h;
        if (d > 0) {
            let f = 0.5 / Math.sqrt(d + 1);
            this._w = 0.25 / f, this._x = (u - l) * f, this._y = (r - c) * f, this._z = (o - i) * f;
        } else if (n > a && n > h) {
            let f = 2 * Math.sqrt(1 + n - a - h);
            this._w = (u - l) / f, this._x = 0.25 * f, this._y = (i + o) / f, this._z = (r + c) / f;
        } else if (a > h) {
            let f = 2 * Math.sqrt(1 + a - n - h);
            this._w = (r - c) / f, this._x = (i + o) / f, this._y = 0.25 * f, this._z = (l + u) / f;
        } else {
            let f = 2 * Math.sqrt(1 + h - n - a);
            this._w = (o - i) / f, this._x = (r + c) / f, this._y = (l + u) / f, this._z = 0.25 * f;
        }
        return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(xt(this.dot(e), -1, 1)));
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
        let n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
        return this._x = n * u + o * a + i * c - r * l, this._y = i * u + o * l + r * a - n * c, this._z = r * u + o * c + n * l - i * a, this._w = o * u - n * a - i * l - r * c, this._onChangeCallback(), this;
    }
    slerp(e, t) {
        if (t === 0) return this;
        if (t === 1) return this.copy(e);
        let n = this._x, i = this._y, r = this._z, o = this._w, a = o * e._w + n * e._x + i * e._y + r * e._z;
        if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
        let l = 1 - a * a;
        if (l <= Number.EPSILON) {
            let f = 1 - t;
            return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
        }
        let c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
        return this._w = o * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = r * h + this._z * d, this._onChangeCallback(), this;
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n);
    }
    random() {
        let e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
        return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i));
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
yt.prototype.isQuaternion = !0;
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
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Pl.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(Pl.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
        let t = this.x, n = this.y, i = this.z, r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
        let t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this;
    }
    applyQuaternion(e) {
        let t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = l * t + o * i - a * n, u = l * n + a * t - r * i, h = l * i + r * n - o * t, d = -r * t - o * n - a * i;
        return this.x = c * l + d * -r + u * -a - h * -o, this.y = u * l + d * -o + h * -r - c * -a, this.z = h * l + d * -a + c * -o - u * -r, this;
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
        let t = this.x, n = this.y, i = this.z, r = e.elements;
        return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
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
        let n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
        return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this;
    }
    projectOnVector(e) {
        let t = e.lengthSq();
        if (t === 0) return this.set(0, 0, 0);
        let n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
        return Ao.copy(this).projectOnVector(e), this.sub(Ao);
    }
    reflect(e) {
        return this.sub(Ao.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) return Math.PI / 2;
        let n = this.dot(e) / t;
        return Math.acos(xt(n, -1, 1));
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
        let e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
        return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
    }
    *[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z;
    }
};
w.prototype.isVector3 = !0;
var Ao = new w, Pl = new yt, It = class {
    constructor(e = new w(1 / 0, 1 / 0, 1 / 0), t = new w(-1 / 0, -1 / 0, -1 / 0)){
        this.min = e, this.max = t;
    }
    set(e, t) {
        return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
        let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
        for(let l = 0, c = e.length; l < c; l += 3){
            let u = e[l], h = e[l + 1], d = e[l + 2];
            u < t && (t = u), h < n && (n = h), d < i && (i = d), u > r && (r = u), h > o && (o = h), d > a && (a = d);
        }
        return this.min.set(t, n, i), this.max.set(r, o, a), this;
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
        for(let l = 0, c = e.count; l < c; l++){
            let u = e.getX(l), h = e.getY(l), d = e.getZ(l);
            u < t && (t = u), h < n && (n = h), d < i && (i = d), u > r && (r = u), h > o && (o = h), d > a && (a = d);
        }
        return this.min.set(t, n, i), this.max.set(r, o, a), this;
    }
    setFromPoints(e) {
        this.makeEmpty();
        for(let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]);
        return this;
    }
    setFromCenterAndSize(e, t) {
        let n = Bn.copy(t).multiplyScalar(0.5);
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
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
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
            let r = n.attributes.position;
            for(let o = 0, a = r.count; o < a; o++)Bn.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(Bn);
        } else n.boundingBox === null && n.computeBoundingBox(), Ro.copy(n.boundingBox), Ro.applyMatrix4(e.matrixWorld), this.union(Ro);
        let i = e.children;
        for(let r = 0, o = i.length; r < o; r++)this.expandByObject(i[r], t);
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
        return this.clampPoint(e.center, Bn), Bn.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
        if (this.isEmpty()) return !1;
        this.getCenter(Zi), Jr.subVectors(this.max, Zi), ii.subVectors(e.a, Zi), ri.subVectors(e.b, Zi), si.subVectors(e.c, Zi), dn.subVectors(ri, ii), fn.subVectors(si, ri), Nn.subVectors(ii, si);
        let t = [
            0,
            -dn.z,
            dn.y,
            0,
            -fn.z,
            fn.y,
            0,
            -Nn.z,
            Nn.y,
            dn.z,
            0,
            -dn.x,
            fn.z,
            0,
            -fn.x,
            Nn.z,
            0,
            -Nn.x,
            -dn.y,
            dn.x,
            0,
            -fn.y,
            fn.x,
            0,
            -Nn.y,
            Nn.x,
            0
        ];
        return !Co(t, ii, ri, si, Jr) || (t = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
        ], !Co(t, ii, ri, si, Jr)) ? !1 : (Yr.crossVectors(dn, fn), t = [
            Yr.x,
            Yr.y,
            Yr.z
        ], Co(t, ii, ri, si, Jr));
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
        return Bn.copy(e).clamp(this.min, this.max).sub(e).length();
    }
    getBoundingSphere(e) {
        return this.getCenter(e.center), e.radius = this.getSize(Bn).length() * 0.5, e;
    }
    intersect(e) {
        return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
        return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (Qt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Qt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Qt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Qt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Qt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Qt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Qt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Qt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Qt), this);
    }
    translate(e) {
        return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max);
    }
};
It.prototype.isBox3 = !0;
var Qt = [
    new w,
    new w,
    new w,
    new w,
    new w,
    new w,
    new w,
    new w
], Bn = new w, Ro = new It, ii = new w, ri = new w, si = new w, dn = new w, fn = new w, Nn = new w, Zi = new w, Jr = new w, Yr = new w, zn = new w;
function Co(s28, e, t, n, i) {
    for(let r = 0, o = s28.length - 3; r <= o; r += 3){
        zn.fromArray(s28, r);
        let a = i.x * Math.abs(zn.x) + i.y * Math.abs(zn.y) + i.z * Math.abs(zn.z), l = e.dot(zn), c = t.dot(zn), u = n.dot(zn);
        if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
    }
    return !0;
}
var Id = new It, Dl = new w, Zr = new w, Lo = new w, Dn = class {
    constructor(e = new w, t = -1){
        this.center = e, this.radius = t;
    }
    set(e, t) {
        return this.center.copy(e), this.radius = t, this;
    }
    setFromPoints(e, t) {
        let n = this.center;
        t !== void 0 ? n.copy(t) : Id.setFromPoints(e).getCenter(n);
        let i = 0;
        for(let r = 0, o = e.length; r < o; r++)i = Math.max(i, n.distanceToSquared(e[r]));
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
        Lo.subVectors(e, this.center);
        let t = Lo.lengthSq();
        if (t > this.radius * this.radius) {
            let n = Math.sqrt(t), i = (n - this.radius) * 0.5;
            this.center.add(Lo.multiplyScalar(i / n)), this.radius += i;
        }
        return this;
    }
    union(e) {
        return this.center.equals(e.center) === !0 ? Zr.set(0, 0, 1).multiplyScalar(e.radius) : Zr.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(Dl.copy(e.center).add(Zr)), this.expandByPoint(Dl.copy(e.center).sub(Zr)), this;
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}, en = new w, Po = new w, $r = new w, pn = new w, Do = new w, jr = new w, Io = new w, In = class {
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
        return this.origin.copy(this.at(e, en)), this;
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
        let t = en.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (en.copy(this.direction).multiplyScalar(t).add(this.origin), en.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
        Po.copy(e).add(t).multiplyScalar(0.5), $r.copy(t).sub(e).normalize(), pn.copy(this.origin).sub(Po);
        let r = e.distanceTo(t) * 0.5, o = -this.direction.dot($r), a = pn.dot(this.direction), l = -pn.dot($r), c = pn.lengthSq(), u = Math.abs(1 - o * o), h, d, f, m;
        if (u > 0) if (h = o * l - a, d = o * a - l, m = r * u, h >= 0) if (d >= -m) if (d <= m) {
            let x = 1 / u;
            h *= x, d *= x, f = h * (h + o * d + 2 * a) + d * (o * h + d + 2 * l) + c;
        } else d = r, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
        else d = -r, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
        else d <= -m ? (h = Math.max(0, -(-o * r + a)), d = h > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -h * h + d * (d + 2 * l) + c) : d <= m ? (h = 0, d = Math.min(Math.max(-r, -l), r), f = d * (d + 2 * l) + c) : (h = Math.max(0, -(o * r + a)), d = h > 0 ? r : Math.min(Math.max(-r, -l), r), f = -h * h + d * (d + 2 * l) + c);
        else d = o > 0 ? -r : r, h = Math.max(0, -(o * d + a)), f = -h * h + d * (d + 2 * l) + c;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy($r).multiplyScalar(d).add(Po), f;
    }
    intersectSphere(e, t) {
        en.subVectors(e.center, this.origin);
        let n = en.dot(this.direction), i = en.dot(en) - n * n, r = e.radius * e.radius;
        if (i > r) return null;
        let o = Math.sqrt(r - i), a = n - o, l = n + o;
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
        let n, i, r, o, a, l, c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
        return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), u >= 0 ? (r = (e.min.y - d.y) * u, o = (e.max.y - d.y) * u) : (r = (e.max.y - d.y) * u, o = (e.min.y - d.y) * u), n > o || r > i || ((r > n || n !== n) && (n = r), (o < i || i !== i) && (i = o), h >= 0 ? (a = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (a = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
    }
    intersectsBox(e) {
        return this.intersectBox(e, en) !== null;
    }
    intersectTriangle(e, t, n, i, r) {
        Do.subVectors(t, e), jr.subVectors(n, e), Io.crossVectors(Do, jr);
        let o = this.direction.dot(Io), a;
        if (o > 0) {
            if (i) return null;
            a = 1;
        } else if (o < 0) a = -1, o = -o;
        else return null;
        pn.subVectors(this.origin, e);
        let l = a * this.direction.dot(jr.crossVectors(pn, jr));
        if (l < 0) return null;
        let c = a * this.direction.dot(Do.cross(pn));
        if (c < 0 || l + c > o) return null;
        let u = -a * pn.dot(Io);
        return u < 0 ? null : this.at(u / o, r);
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
    set(e, t, n, i, r, o, a, l, c, u, h, d, f, m, x, _) {
        let g4 = this.elements;
        return g4[0] = e, g4[4] = t, g4[8] = n, g4[12] = i, g4[1] = r, g4[5] = o, g4[9] = a, g4[13] = l, g4[2] = c, g4[6] = u, g4[10] = h, g4[14] = d, g4[3] = f, g4[7] = m, g4[11] = x, g4[15] = _, this;
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
        let t = this.elements, n = e.elements, i = 1 / oi.setFromMatrixColumn(e, 0).length(), r = 1 / oi.setFromMatrixColumn(e, 1).length(), o = 1 / oi.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        let t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(r), h = Math.sin(r);
        if (e.order === "XYZ") {
            let d = o * u, f = o * h, m = a * u, x = a * h;
            t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = f + m * c, t[5] = d - x * c, t[9] = -a * l, t[2] = x - d * c, t[6] = m + f * c, t[10] = o * l;
        } else if (e.order === "YXZ") {
            let d = l * u, f = l * h, m = c * u, x = c * h;
            t[0] = d + x * a, t[4] = m * a - f, t[8] = o * c, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = f * a - m, t[6] = x + d * a, t[10] = o * l;
        } else if (e.order === "ZXY") {
            let d = l * u, f = l * h, m = c * u, x = c * h;
            t[0] = d - x * a, t[4] = -o * h, t[8] = m + f * a, t[1] = f + m * a, t[5] = o * u, t[9] = x - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
        } else if (e.order === "ZYX") {
            let d = o * u, f = o * h, m = a * u, x = a * h;
            t[0] = l * u, t[4] = m * c - f, t[8] = d * c + x, t[1] = l * h, t[5] = x * c + d, t[9] = f * c - m, t[2] = -c, t[6] = a * l, t[10] = o * l;
        } else if (e.order === "YZX") {
            let d = o * l, f = o * c, m = a * l, x = a * c;
            t[0] = l * u, t[4] = x - d * h, t[8] = m * h + f, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -c * u, t[6] = f * h + m, t[10] = d - x * h;
        } else if (e.order === "XZY") {
            let d = o * l, f = o * c, m = a * l, x = a * c;
            t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d * h + x, t[5] = o * u, t[9] = f * h - m, t[2] = m * h - f, t[6] = a * u, t[10] = x * h + d;
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Fd, e, Bd);
    }
    lookAt(e, t, n) {
        let i = this.elements;
        return Rt.subVectors(e, t), Rt.lengthSq() === 0 && (Rt.z = 1), Rt.normalize(), mn.crossVectors(n, Rt), mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Rt.x += 0.0001 : Rt.z += 0.0001, Rt.normalize(), mn.crossVectors(n, Rt)), mn.normalize(), Kr.crossVectors(Rt, mn), i[0] = mn.x, i[4] = Kr.x, i[8] = Rt.x, i[1] = mn.y, i[5] = Kr.y, i[9] = Rt.y, i[2] = mn.z, i[6] = Kr.z, i[10] = Rt.z, this;
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
        let n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], f = n[13], m = n[2], x = n[6], _ = n[10], g5 = n[14], p = n[3], M = n[7], y4 = n[11], b5 = n[15], T = i[0], R = i[4], P2 = i[8], H = i[12], N = i[1], v = i[5], C = i[9], D2 = i[13], B = i[2], z = i[6], F = i[10], W = i[14], j = i[3], ue = i[7], k = i[11], $ = i[15];
        return r[0] = o * T + a * N + l * B + c * j, r[4] = o * R + a * v + l * z + c * ue, r[8] = o * P2 + a * C + l * F + c * k, r[12] = o * H + a * D2 + l * W + c * $, r[1] = u * T + h * N + d * B + f * j, r[5] = u * R + h * v + d * z + f * ue, r[9] = u * P2 + h * C + d * F + f * k, r[13] = u * H + h * D2 + d * W + f * $, r[2] = m * T + x * N + _ * B + g5 * j, r[6] = m * R + x * v + _ * z + g5 * ue, r[10] = m * P2 + x * C + _ * F + g5 * k, r[14] = m * H + x * D2 + _ * W + g5 * $, r[3] = p * T + M * N + y4 * B + b5 * j, r[7] = p * R + M * v + y4 * z + b5 * ue, r[11] = p * P2 + M * C + y4 * F + b5 * k, r[15] = p * H + M * D2 + y4 * W + b5 * $, this;
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
    }
    determinant() {
        let e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], f = e[14], m = e[3], x = e[7], _ = e[11], g6 = e[15];
        return m * (+r * l * h - i * c * h - r * a * d + n * c * d + i * a * f - n * l * f) + x * (+t * l * f - t * c * d + r * o * d - i * o * f + i * c * u - r * l * u) + _ * (+t * c * h - t * a * f - r * o * h + n * o * f + r * a * u - n * c * u) + g6 * (-i * a * u - t * l * h + t * a * d + i * o * h - n * o * d + n * l * u);
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
        let e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], f = e[11], m = e[12], x = e[13], _ = e[14], g7 = e[15], p = h * _ * c - x * d * c + x * l * f - a * _ * f - h * l * g7 + a * d * g7, M = m * d * c - u * _ * c - m * l * f + o * _ * f + u * l * g7 - o * d * g7, y5 = u * x * c - m * h * c + m * a * f - o * x * f - u * a * g7 + o * h * g7, b6 = m * h * l - u * x * l - m * a * d + o * x * d + u * a * _ - o * h * _, T = t * p + n * M + i * y5 + r * b6;
        if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        let R = 1 / T;
        return e[0] = p * R, e[1] = (x * d * r - h * _ * r - x * i * f + n * _ * f + h * i * g7 - n * d * g7) * R, e[2] = (a * _ * r - x * l * r + x * i * c - n * _ * c - a * i * g7 + n * l * g7) * R, e[3] = (h * l * r - a * d * r - h * i * c + n * d * c + a * i * f - n * l * f) * R, e[4] = M * R, e[5] = (u * _ * r - m * d * r + m * i * f - t * _ * f - u * i * g7 + t * d * g7) * R, e[6] = (m * l * r - o * _ * r - m * i * c + t * _ * c + o * i * g7 - t * l * g7) * R, e[7] = (o * d * r - u * l * r + u * i * c - t * d * c - o * i * f + t * l * f) * R, e[8] = y5 * R, e[9] = (m * h * r - u * x * r - m * n * f + t * x * f + u * n * g7 - t * h * g7) * R, e[10] = (o * x * r - m * a * r + m * n * c - t * x * c - o * n * g7 + t * a * g7) * R, e[11] = (u * a * r - o * h * r - u * n * c + t * h * c + o * n * f - t * a * f) * R, e[12] = b6 * R, e[13] = (u * x * i - m * h * i + m * n * d - t * x * d - u * n * _ + t * h * _) * R, e[14] = (m * a * i - o * x * i - m * n * l + t * x * l + o * n * _ - t * a * _) * R, e[15] = (o * h * i - u * a * i + u * n * l - t * h * l - o * n * d + t * a * d) * R, this;
    }
    scale(e) {
        let t = this.elements, n = e.x, i = e.y, r = e.z;
        return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
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
        let n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, u = r * a;
        return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, u * a + n, u * l - i * o, 0, c * l - i * a, u * l + i * o, r * l * l + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(e, t, n, i, r, o) {
        return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(e, t, n) {
        let i = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, u = o + o, h = a + a, d = r * c, f = r * u, m = r * h, x = o * u, _ = o * h, g8 = a * h, p = l * c, M = l * u, y6 = l * h, b7 = n.x, T = n.y, R = n.z;
        return i[0] = (1 - (x + g8)) * b7, i[1] = (f + y6) * b7, i[2] = (m - M) * b7, i[3] = 0, i[4] = (f - y6) * T, i[5] = (1 - (d + g8)) * T, i[6] = (_ + p) * T, i[7] = 0, i[8] = (m + M) * R, i[9] = (_ - p) * R, i[10] = (1 - (d + x)) * R, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
    }
    decompose(e, t, n) {
        let i = this.elements, r = oi.set(i[0], i[1], i[2]).length(), o = oi.set(i[4], i[5], i[6]).length(), a = oi.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], zt.copy(this);
        let c = 1 / r, u = 1 / o, h = 1 / a;
        return zt.elements[0] *= c, zt.elements[1] *= c, zt.elements[2] *= c, zt.elements[4] *= u, zt.elements[5] *= u, zt.elements[6] *= u, zt.elements[8] *= h, zt.elements[9] *= h, zt.elements[10] *= h, t.setFromRotationMatrix(zt), n.x = r, n.y = o, n.z = a, this;
    }
    makePerspective(e, t, n, i, r, o) {
        o === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        let a = this.elements, l = 2 * r / (t - e), c = 2 * r / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i), d = -(o + r) / (o - r), f = -2 * o * r / (o - r);
        return a[0] = l, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = c, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = f, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
    }
    makeOrthographic(e, t, n, i, r, o) {
        let a = this.elements, l = 1 / (t - e), c = 1 / (n - i), u = 1 / (o - r), h = (t + e) * l, d = (n + i) * c, f = (o + r) * u;
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
var oi = new w, zt = new de, Fd = new w(0, 0, 0), Bd = new w(1, 1, 1), mn = new w, Kr = new w, Rt = new w, Il = new de, Fl = new yt, $n = class {
    constructor(e = 0, t = 0, n = 0, i = $n.DefaultOrder){
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
        let i = e.elements, r = i[0], o = i[4], a = i[8], l = i[1], c = i[5], u = i[9], h = i[2], d = i[6], f = i[10];
        switch(t){
            case "XYZ":
                this._y = Math.asin(xt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-xt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(xt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
                break;
            case "ZYX":
                this._y = Math.asin(-xt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
                break;
            case "YZX":
                this._z = Math.asin(xt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, f));
                break;
            case "XZY":
                this._z = Math.asin(-xt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, f), this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
        }
        return this._order = t, n === !0 && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
        return Il.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Il, t, n);
    }
    setFromVector3(e, t = this._order) {
        return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
        return Fl.setFromEuler(this), this.setFromQuaternion(Fl, e);
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
$n.prototype.isEuler = !0;
$n.DefaultOrder = "XYZ";
$n.RotationOrders = [
    "XYZ",
    "YZX",
    "ZXY",
    "XZY",
    "YXZ",
    "ZYX"
];
var Js = class {
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
}, Nd = 0, Bl = new w, ai = new yt, tn = new de, Qr = new w, $i = new w, zd = new w, Od = new yt, Nl = new w(1, 0, 0), zl = new w(0, 1, 0), Ol = new w(0, 0, 1), Ud = {
    type: "added"
}, Ul = {
    type: "removed"
}, Fe = class extends Ln {
    constructor(){
        super();
        Object.defineProperty(this, "id", {
            value: Nd++
        }), this.uuid = Lt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Fe.DefaultUp.clone();
        let e = new w, t = new $n, n = new yt, i = new w(1, 1, 1);
        function r() {
            n.setFromEuler(t, !1);
        }
        function o() {
            t.setFromQuaternion(n, void 0, !1);
        }
        t._onChange(r), n._onChange(o), Object.defineProperties(this, {
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
                value: new ut
            }
        }), this.matrix = new de, this.matrixWorld = new de, this.matrixAutoUpdate = Fe.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Js, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
        return ai.setFromAxisAngle(e, t), this.quaternion.multiply(ai), this;
    }
    rotateOnWorldAxis(e, t) {
        return ai.setFromAxisAngle(e, t), this.quaternion.premultiply(ai), this;
    }
    rotateX(e) {
        return this.rotateOnAxis(Nl, e);
    }
    rotateY(e) {
        return this.rotateOnAxis(zl, e);
    }
    rotateZ(e) {
        return this.rotateOnAxis(Ol, e);
    }
    translateOnAxis(e, t) {
        return Bl.copy(e).applyQuaternion(this.quaternion), this.position.add(Bl.multiplyScalar(t)), this;
    }
    translateX(e) {
        return this.translateOnAxis(Nl, e);
    }
    translateY(e) {
        return this.translateOnAxis(zl, e);
    }
    translateZ(e) {
        return this.translateOnAxis(Ol, e);
    }
    localToWorld(e) {
        return e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
        return e.applyMatrix4(tn.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
        e.isVector3 ? Qr.copy(e) : Qr.set(e, t, n);
        let i = this.parent;
        this.updateWorldMatrix(!0, !1), $i.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? tn.lookAt($i, Qr, this.up) : tn.lookAt(Qr, $i, this.up), this.quaternion.setFromRotationMatrix(tn), i && (tn.extractRotation(i.matrixWorld), ai.setFromRotationMatrix(tn), this.quaternion.premultiply(ai.invert()));
    }
    add(e) {
        if (arguments.length > 1) {
            for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
            return this;
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Ud)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    }
    remove(e) {
        if (arguments.length > 1) {
            for(let n = 0; n < arguments.length; n++)this.remove(arguments[n]);
            return this;
        }
        let t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ul)), this;
    }
    removeFromParent() {
        let e = this.parent;
        return e !== null && e.remove(this), this;
    }
    clear() {
        for(let e = 0; e < this.children.length; e++){
            let t = this.children[e];
            t.parent = null, t.dispatchEvent(Ul);
        }
        return this.children.length = 0, this;
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1), tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(tn), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($i, e, zd), e;
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose($i, Od, e), e;
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
            for(let r = 0, o = i.length; r < o; r++)i[r].updateWorldMatrix(!1, !0);
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
        function r(a, l) {
            return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
        }
        if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(e.geometries, this.geometry);
            let a = this.geometry.parameters;
            if (a !== void 0 && a.shapes !== void 0) {
                let l = a.shapes;
                if (Array.isArray(l)) for(let c = 0, u = l.length; c < u; c++){
                    let h = l[c];
                    r(e.shapes, h);
                }
                else r(e.shapes, l);
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
            let a = [];
            for(let l = 0, c = this.material.length; l < c; l++)a.push(r(e.materials, this.material[l]));
            i.material = a;
        } else i.material = r(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for(let a = 0; a < this.children.length; a++)i.children.push(this.children[a].toJSON(e).object);
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for(let a = 0; a < this.animations.length; a++){
                let l = this.animations[a];
                i.animations.push(r(e.animations, l));
            }
        }
        if (t) {
            let a = o(e.geometries), l = o(e.materials), c = o(e.textures), u = o(e.images), h = o(e.shapes), d = o(e.skeletons), f = o(e.animations);
            a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f);
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
Fe.DefaultUp = new w(0, 1, 0);
Fe.DefaultMatrixAutoUpdate = !0;
Fe.prototype.isObject3D = !0;
var Ot = new w, nn = new w, Fo = new w, rn = new w, li = new w, ci = new w, Hl = new w, Bo = new w, No = new w, zo = new w, st = class {
    constructor(e = new w, t = new w, n = new w){
        this.a = e, this.b = t, this.c = n;
    }
    static getNormal(e, t, n, i) {
        i.subVectors(n, t), Ot.subVectors(e, t), i.cross(Ot);
        let r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(e, t, n, i, r) {
        Ot.subVectors(i, t), nn.subVectors(n, t), Fo.subVectors(e, t);
        let o = Ot.dot(Ot), a = Ot.dot(nn), l = Ot.dot(Fo), c = nn.dot(nn), u = nn.dot(Fo), h = o * c - a * a;
        if (h === 0) return r.set(-2, -1, -1);
        let d = 1 / h, f = (c * l - a * u) * d, m = (o * u - a * l) * d;
        return r.set(1 - f - m, m, f);
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, rn), rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
    }
    static getUV(e, t, n, i, r, o, a, l) {
        return this.getBarycoord(e, t, n, i, rn), l.set(0, 0), l.addScaledVector(r, rn.x), l.addScaledVector(o, rn.y), l.addScaledVector(a, rn.z), l;
    }
    static isFrontFacing(e, t, n, i) {
        return Ot.subVectors(n, t), nn.subVectors(e, t), Ot.cross(nn).dot(i) < 0;
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
        return Ot.subVectors(this.c, this.b), nn.subVectors(this.a, this.b), Ot.cross(nn).length() * 0.5;
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e) {
        return st.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
        return st.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getUV(e, t, n, i, r) {
        return st.getUV(e, this.a, this.b, this.c, t, n, i, r);
    }
    containsPoint(e) {
        return st.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
        return st.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
        let n = this.a, i = this.b, r = this.c, o, a;
        li.subVectors(i, n), ci.subVectors(r, n), Bo.subVectors(e, n);
        let l = li.dot(Bo), c = ci.dot(Bo);
        if (l <= 0 && c <= 0) return t.copy(n);
        No.subVectors(e, i);
        let u = li.dot(No), h = ci.dot(No);
        if (u >= 0 && h <= u) return t.copy(i);
        let d = l * h - u * c;
        if (d <= 0 && l >= 0 && u <= 0) return o = l / (l - u), t.copy(n).addScaledVector(li, o);
        zo.subVectors(e, r);
        let f = li.dot(zo), m = ci.dot(zo);
        if (m >= 0 && f <= m) return t.copy(r);
        let x = f * c - l * m;
        if (x <= 0 && c >= 0 && m <= 0) return a = c / (c - m), t.copy(n).addScaledVector(ci, a);
        let _ = u * m - f * h;
        if (_ <= 0 && h - u >= 0 && f - m >= 0) return Hl.subVectors(r, i), a = (h - u) / (h - u + (f - m)), t.copy(i).addScaledVector(Hl, a);
        let g9 = 1 / (_ + x + d);
        return o = x * g9, a = d * g9, t.copy(n).addScaledVector(li, o).addScaledVector(ci, a);
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
}, Hd = 0, pt = class extends Ln {
    constructor(){
        super();
        Object.defineProperty(this, "id", {
            value: Hd++
        }), this.uuid = Lt(), this.name = "", this.type = "Material", this.fog = !0, this.blending = or, this.side = Li, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = th, this.blendDst = nh, this.blendEquation = Mi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = ia, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = xd, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = bo, this.stencilZFail = bo, this.stencilZPass = bo, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.alphaWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === eh;
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
        n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== or && (n.blending = this.blending), this.side !== Li && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.alphaWrite = this.alphaWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
        function i(r) {
            let o = [];
            for(let a in r){
                let l = r[a];
                delete l.metadata, o.push(l);
            }
            return o;
        }
        if (t) {
            let r = i(e.textures), o = i(e.images);
            r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
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
            for(let r = 0; r !== i; ++r)n[r] = t[r].clone();
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
pt.prototype.isMaterial = !0;
var un = class extends pt {
    constructor(e){
        super();
        this.type = "MeshBasicMaterial", this.color = new ne(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ws, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this;
    }
};
un.prototype.isMeshBasicMaterial = !0;
var Ye = new w, es = new Z, ze = class {
    constructor(e, t, n){
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = ur, this.updateRange = {
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
        for(let i = 0, r = this.itemSize; i < r; i++)this.array[e + i] = t.array[n + i];
        return this;
    }
    copyArray(e) {
        return this.array.set(e), this;
    }
    copyColorsArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, r = e.length; i < r; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new ne), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b;
        }
        return this;
    }
    copyVector2sArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, r = e.length; i < r; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new Z), t[n++] = o.x, t[n++] = o.y;
        }
        return this;
    }
    copyVector3sArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, r = e.length; i < r; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new w), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z;
        }
        return this;
    }
    copyVector4sArray(e) {
        let t = this.array, n = 0;
        for(let i = 0, r = e.length; i < r; i++){
            let o = e[i];
            o === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new We), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w;
        }
        return this;
    }
    applyMatrix3(e) {
        if (this.itemSize === 2) for(let t = 0, n = this.count; t < n; t++)es.fromBufferAttribute(this, t), es.applyMatrix3(e), this.setXY(t, es.x, es.y);
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
    setXYZW(e, t, n, i, r) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
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
        return this.name !== "" && (e.name = this.name), this.usage !== ur && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
    }
};
ze.prototype.isBufferAttribute = !0;
var hh = class extends ze {
    constructor(e, t, n){
        super(new Int8Array(e), t, n);
    }
}, uh = class extends ze {
    constructor(e, t, n){
        super(new Uint8Array(e), t, n);
    }
}, dh = class extends ze {
    constructor(e, t, n){
        super(new Uint8ClampedArray(e), t, n);
    }
}, fh = class extends ze {
    constructor(e, t, n){
        super(new Int16Array(e), t, n);
    }
}, Ys = class extends ze {
    constructor(e, t, n){
        super(new Uint16Array(e), t, n);
    }
}, ph = class extends ze {
    constructor(e, t, n){
        super(new Int32Array(e), t, n);
    }
}, Zs = class extends ze {
    constructor(e, t, n){
        super(new Uint32Array(e), t, n);
    }
}, mh = class extends ze {
    constructor(e, t, n){
        super(new Uint16Array(e), t, n);
    }
};
mh.prototype.isFloat16BufferAttribute = !0;
var he = class extends ze {
    constructor(e, t, n){
        super(new Float32Array(e), t, n);
    }
}, gh = class extends ze {
    constructor(e, t, n){
        super(new Float64Array(e), t, n);
    }
}, Gd = 0, Ft = new de, Oo = new Fe, hi = new w, Ct = new It, ji = new It, dt = new w, Me = class extends Ln {
    constructor(){
        super();
        Object.defineProperty(this, "id", {
            value: Gd++
        }), this.uuid = Lt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {};
    }
    getIndex() {
        return this.index;
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (ah(e) ? Zs : Ys)(e, 1) : this.index = e, this;
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
            let r = new ut().getNormalMatrix(e);
            n.applyNormalMatrix(r), n.needsUpdate = !0;
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
        return Oo.lookAt(e), Oo.updateMatrix(), this.applyMatrix4(Oo.matrix), this;
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(hi).negate(), this.translate(hi.x, hi.y, hi.z), this;
    }
    setFromPoints(e) {
        let t = [];
        for(let n = 0, i = e.length; n < i; n++){
            let r = e[n];
            t.push(r.x, r.y, r.z || 0);
        }
        return this.setAttribute("position", new he(t, 3)), this;
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new It);
        let e = this.attributes.position, t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new w(-1 / 0, -1 / 0, -1 / 0), new w(1 / 0, 1 / 0, 1 / 0));
            return;
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e), t) for(let n = 0, i = t.length; n < i; n++){
                let r = t[n];
                Ct.setFromBufferAttribute(r), this.morphTargetsRelative ? (dt.addVectors(this.boundingBox.min, Ct.min), this.boundingBox.expandByPoint(dt), dt.addVectors(this.boundingBox.max, Ct.max), this.boundingBox.expandByPoint(dt)) : (this.boundingBox.expandByPoint(Ct.min), this.boundingBox.expandByPoint(Ct.max));
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new Dn);
        let e = this.attributes.position, t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new w, 1 / 0);
            return;
        }
        if (e) {
            let n = this.boundingSphere.center;
            if (Ct.setFromBufferAttribute(e), t) for(let r = 0, o = t.length; r < o; r++){
                let a = t[r];
                ji.setFromBufferAttribute(a), this.morphTargetsRelative ? (dt.addVectors(Ct.min, ji.min), Ct.expandByPoint(dt), dt.addVectors(Ct.max, ji.max), Ct.expandByPoint(dt)) : (Ct.expandByPoint(ji.min), Ct.expandByPoint(ji.max));
            }
            Ct.getCenter(n);
            let i = 0;
            for(let r1 = 0, o1 = e.count; r1 < o1; r1++)dt.fromBufferAttribute(e, r1), i = Math.max(i, n.distanceToSquared(dt));
            if (t) for(let r2 = 0, o2 = t.length; r2 < o2; r2++){
                let a = t[r2], l = this.morphTargetsRelative;
                for(let c = 0, u = a.count; c < u; c++)dt.fromBufferAttribute(a, c), l && (hi.fromBufferAttribute(e, c), dt.add(hi)), i = Math.max(i, n.distanceToSquared(dt));
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
        let n = e.array, i = t.position.array, r = t.normal.array, o = t.uv.array, a = i.length / 3;
        t.tangent === void 0 && this.setAttribute("tangent", new ze(new Float32Array(4 * a), 4));
        let l = t.tangent.array, c = [], u = [];
        for(let N3 = 0; N3 < a; N3++)c[N3] = new w, u[N3] = new w;
        let h = new w, d = new w, f = new w, m = new Z, x = new Z, _ = new Z, g10 = new w, p = new w;
        function M(N, v, C) {
            h.fromArray(i, N * 3), d.fromArray(i, v * 3), f.fromArray(i, C * 3), m.fromArray(o, N * 2), x.fromArray(o, v * 2), _.fromArray(o, C * 2), d.sub(h), f.sub(h), x.sub(m), _.sub(m);
            let D3 = 1 / (x.x * _.y - _.x * x.y);
            !isFinite(D3) || (g10.copy(d).multiplyScalar(_.y).addScaledVector(f, -x.y).multiplyScalar(D3), p.copy(f).multiplyScalar(x.x).addScaledVector(d, -_.x).multiplyScalar(D3), c[N].add(g10), c[v].add(g10), c[C].add(g10), u[N].add(p), u[v].add(p), u[C].add(p));
        }
        let y7 = this.groups;
        y7.length === 0 && (y7 = [
            {
                start: 0,
                count: n.length
            }
        ]);
        for(let N1 = 0, v2 = y7.length; N1 < v2; ++N1){
            let C = y7[N1], D4 = C.start, B = C.count;
            for(let z = D4, F = D4 + B; z < F; z += 3)M(n[z + 0], n[z + 1], n[z + 2]);
        }
        let b8 = new w, T = new w, R = new w, P3 = new w;
        function H(N) {
            R.fromArray(r, N * 3), P3.copy(R);
            let v = c[N];
            b8.copy(v), b8.sub(R.multiplyScalar(R.dot(v))).normalize(), T.crossVectors(P3, v);
            let D5 = T.dot(u[N]) < 0 ? -1 : 1;
            l[N * 4] = b8.x, l[N * 4 + 1] = b8.y, l[N * 4 + 2] = b8.z, l[N * 4 + 3] = D5;
        }
        for(let N2 = 0, v1 = y7.length; N2 < v1; ++N2){
            let C = y7[N2], D6 = C.start, B = C.count;
            for(let z = D6, F = D6 + B; z < F; z += 3)H(n[z + 0]), H(n[z + 1]), H(n[z + 2]);
        }
    }
    computeVertexNormals() {
        let e = this.index, t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0) n = new ze(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
            else for(let d = 0, f = n.count; d < f; d++)n.setXYZ(d, 0, 0, 0);
            let i = new w, r = new w, o = new w, a = new w, l = new w, c = new w, u = new w, h = new w;
            if (e) for(let d1 = 0, f1 = e.count; d1 < f1; d1 += 3){
                let m = e.getX(d1 + 0), x = e.getX(d1 + 1), _ = e.getX(d1 + 2);
                i.fromBufferAttribute(t, m), r.fromBufferAttribute(t, x), o.fromBufferAttribute(t, _), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), a.fromBufferAttribute(n, m), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, _), a.add(u), l.add(u), c.add(u), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(_, c.x, c.y, c.z);
            }
            else for(let d2 = 0, f2 = t.count; d2 < f2; d2 += 3)i.fromBufferAttribute(t, d2 + 0), r.fromBufferAttribute(t, d2 + 1), o.fromBufferAttribute(t, d2 + 2), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), n.setXYZ(d2 + 0, u.x, u.y, u.z), n.setXYZ(d2 + 1, u.x, u.y, u.z), n.setXYZ(d2 + 2, u.x, u.y, u.z);
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
        for(let t = 0, n = e.count; t < n; t++)dt.fromBufferAttribute(e, t), dt.normalize(), e.setXYZ(t, dt.x, dt.y, dt.z);
    }
    toNonIndexed() {
        function e(a, l) {
            let c = a.array, u = a.itemSize, h = a.normalized, d = new c.constructor(l.length * u), f = 0, m = 0;
            for(let x = 0, _ = l.length; x < _; x++){
                a.isInterleavedBufferAttribute ? f = l[x] * a.data.stride + a.offset : f = l[x] * u;
                for(let g11 = 0; g11 < u; g11++)d[m++] = c[f++];
            }
            return new ze(d, u, h);
        }
        if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
        let t = new Me, n = this.index.array, i = this.attributes;
        for(let a3 in i){
            let l = i[a3], c = e(l, n);
            t.setAttribute(a3, c);
        }
        let r = this.morphAttributes;
        for(let a1 in r){
            let l = [], c = r[a1];
            for(let u = 0, h = c.length; u < h; u++){
                let d = c[u], f = e(d, n);
                l.push(f);
            }
            t.morphAttributes[a1] = l;
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        let o = this.groups;
        for(let a2 = 0, l1 = o.length; a2 < l1; a2++){
            let c = o[a2];
            t.addGroup(c.start, c.count, c.materialIndex);
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
        for(let l in n){
            let c = n[l];
            e.data.attributes[l] = c.toJSON(e.data);
        }
        let i = {}, r = !1;
        for(let l2 in this.morphAttributes){
            let c = this.morphAttributes[l2], u = [];
            for(let h = 0, d = c.length; h < d; h++){
                let f = c[h];
                u.push(f.toJSON(e.data));
            }
            u.length > 0 && (i[l2] = u, r = !0);
        }
        r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
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
        let r = e.morphAttributes;
        for(let c1 in r){
            let u = [], h = r[c1];
            for(let d = 0, f = h.length; d < f; d++)u.push(h[d].clone(t));
            this.morphAttributes[c1] = u;
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        let o = e.groups;
        for(let c2 = 0, u = o.length; c2 < u; c2++){
            let h = o[c2];
            this.addGroup(h.start, h.count, h.materialIndex);
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
Me.prototype.isBufferGeometry = !0;
var Gl = new de, ui = new In, Uo = new Dn, gn = new w, xn = new w, yn = new w, Ho = new w, Go = new w, ko = new w, ts = new w, ns = new w, is = new w, rs = new Z, ss = new Z, os = new Z, Vo = new w, as = new w, lt = class extends Fe {
    constructor(e = new Me, t = new un){
        super();
        this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
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
                    for(let r = 0, o = i.length; r < o; r++){
                        let a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
                    }
                }
            }
        } else {
            let t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
    raycast(e, t) {
        let n = this.geometry, i = this.material, r = this.matrixWorld;
        if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Uo.copy(n.boundingSphere), Uo.applyMatrix4(r), e.ray.intersectsSphere(Uo) === !1) || (Gl.copy(r).invert(), ui.copy(e.ray).applyMatrix4(Gl), n.boundingBox !== null && ui.intersectsBox(n.boundingBox) === !1)) return;
        let o;
        if (n.isBufferGeometry) {
            let a = n.index, l = n.attributes.position, c = n.morphAttributes.position, u = n.morphTargetsRelative, h = n.attributes.uv, d = n.attributes.uv2, f = n.groups, m = n.drawRange;
            if (a !== null) if (Array.isArray(i)) for(let x = 0, _ = f.length; x < _; x++){
                let g12 = f[x], p = i[g12.materialIndex], M = Math.max(g12.start, m.start), y8 = Math.min(a.count, Math.min(g12.start + g12.count, m.start + m.count));
                for(let b9 = M, T = y8; b9 < T; b9 += 3){
                    let R = a.getX(b9), P4 = a.getX(b9 + 1), H = a.getX(b9 + 2);
                    o = ls(this, p, e, ui, l, c, u, h, d, R, P4, H), o && (o.faceIndex = Math.floor(b9 / 3), o.face.materialIndex = g12.materialIndex, t.push(o));
                }
            }
            else {
                let x = Math.max(0, m.start), _ = Math.min(a.count, m.start + m.count);
                for(let g13 = x, p = _; g13 < p; g13 += 3){
                    let M = a.getX(g13), y9 = a.getX(g13 + 1), b10 = a.getX(g13 + 2);
                    o = ls(this, i, e, ui, l, c, u, h, d, M, y9, b10), o && (o.faceIndex = Math.floor(g13 / 3), t.push(o));
                }
            }
            else if (l !== void 0) if (Array.isArray(i)) for(let x1 = 0, _1 = f.length; x1 < _1; x1++){
                let g14 = f[x1], p = i[g14.materialIndex], M = Math.max(g14.start, m.start), y10 = Math.min(l.count, Math.min(g14.start + g14.count, m.start + m.count));
                for(let b11 = M, T = y10; b11 < T; b11 += 3){
                    let R = b11, P5 = b11 + 1, H = b11 + 2;
                    o = ls(this, p, e, ui, l, c, u, h, d, R, P5, H), o && (o.faceIndex = Math.floor(b11 / 3), o.face.materialIndex = g14.materialIndex, t.push(o));
                }
            }
            else {
                let x = Math.max(0, m.start), _ = Math.min(l.count, m.start + m.count);
                for(let g15 = x, p = _; g15 < p; g15 += 3){
                    let M = g15, y11 = g15 + 1, b12 = g15 + 2;
                    o = ls(this, i, e, ui, l, c, u, h, d, M, y11, b12), o && (o.faceIndex = Math.floor(g15 / 3), t.push(o));
                }
            }
        } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
};
lt.prototype.isMesh = !0;
function kd(s29, e, t, n, i, r, o, a) {
    let l;
    if (e.side === ot ? l = n.intersectTriangle(o, r, i, !0, a) : l = n.intersectTriangle(i, r, o, e.side !== Pi, a), l === null) return null;
    as.copy(a), as.applyMatrix4(s29.matrixWorld);
    let c = t.ray.origin.distanceTo(as);
    return c < t.near || c > t.far ? null : {
        distance: c,
        point: as.clone(),
        object: s29
    };
}
function ls(s30, e, t, n, i, r, o, a, l, c, u, h) {
    gn.fromBufferAttribute(i, c), xn.fromBufferAttribute(i, u), yn.fromBufferAttribute(i, h);
    let d = s30.morphTargetInfluences;
    if (r && d) {
        ts.set(0, 0, 0), ns.set(0, 0, 0), is.set(0, 0, 0);
        for(let m = 0, x = r.length; m < x; m++){
            let _ = d[m], g16 = r[m];
            _ !== 0 && (Ho.fromBufferAttribute(g16, c), Go.fromBufferAttribute(g16, u), ko.fromBufferAttribute(g16, h), o ? (ts.addScaledVector(Ho, _), ns.addScaledVector(Go, _), is.addScaledVector(ko, _)) : (ts.addScaledVector(Ho.sub(gn), _), ns.addScaledVector(Go.sub(xn), _), is.addScaledVector(ko.sub(yn), _)));
        }
        gn.add(ts), xn.add(ns), yn.add(is);
    }
    s30.isSkinnedMesh && (s30.boneTransform(c, gn), s30.boneTransform(u, xn), s30.boneTransform(h, yn));
    let f = kd(s30, e, t, n, gn, xn, yn, Vo);
    if (f) {
        a && (rs.fromBufferAttribute(a, c), ss.fromBufferAttribute(a, u), os.fromBufferAttribute(a, h), f.uv = st.getUV(Vo, gn, xn, yn, rs, ss, os, new Z)), l && (rs.fromBufferAttribute(l, c), ss.fromBufferAttribute(l, u), os.fromBufferAttribute(l, h), f.uv2 = st.getUV(Vo, gn, xn, yn, rs, ss, os, new Z));
        let m = {
            a: c,
            b: u,
            c: h,
            normal: new w,
            materialIndex: 0
        };
        st.getNormal(gn, xn, yn, m.normal), f.face = m;
    }
    return f;
}
var An = class extends Me {
    constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1){
        super();
        this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: o
        };
        let a = this;
        i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
        let l = [], c = [], u = [], h = [], d = 0, f = 0;
        m("z", "y", "x", -1, -1, n, t, e, o, r, 0), m("z", "y", "x", 1, -1, n, t, -e, o, r, 1), m("x", "z", "y", 1, 1, e, n, t, i, o, 2), m("x", "z", "y", 1, -1, e, n, -t, i, o, 3), m("x", "y", "z", 1, -1, e, t, n, i, r, 4), m("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new he(c, 3)), this.setAttribute("normal", new he(u, 3)), this.setAttribute("uv", new he(h, 2));
        function m(x, _, g17, p, M, y12, b13, T, R, P6, H) {
            let N = y12 / R, v = b13 / P6, C = y12 / 2, D7 = b13 / 2, B = T / 2, z = R + 1, F = P6 + 1, W = 0, j = 0, ue = new w;
            for(let k = 0; k < F; k++){
                let $ = k * v - D7;
                for(let re1 = 0; re1 < z; re1++){
                    let pe1 = re1 * N - C;
                    ue[x] = pe1 * p, ue[_] = $ * M, ue[g17] = B, c.push(ue.x, ue.y, ue.z), ue[x] = 0, ue[_] = 0, ue[g17] = T > 0 ? 1 : -1, u.push(ue.x, ue.y, ue.z), h.push(re1 / R), h.push(1 - k / P6), W += 1;
                }
            }
            for(let k1 = 0; k1 < P6; k1++)for(let $ = 0; $ < R; $++){
                let re2 = d + $ + z * k1, pe2 = d + $ + z * (k1 + 1), ye1 = d + ($ + 1) + z * (k1 + 1), G1 = d + ($ + 1) + z * k1;
                l.push(re2, pe2, G1), l.push(pe2, ye1, G1), j += 6;
            }
            a.addGroup(f, j, H), f += j, d += W;
        }
    }
    static fromJSON(e) {
        return new An(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
    }
};
function Ii(s31) {
    let e = {};
    for(let t in s31){
        e[t] = {};
        for(let n in s31[t]){
            let i = s31[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
        }
    }
    return e;
}
function vt(s32) {
    let e = {};
    for(let t = 0; t < s32.length; t++){
        let n = Ii(s32[t]);
        for(let i in n)e[i] = n[i];
    }
    return e;
}
var Vd = {
    clone: Ii,
    merge: vt
}, Wd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, qd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, on = class extends pt {
    constructor(e){
        super();
        this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = Wd, this.fragmentShader = qd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
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
        return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ii(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
on.prototype.isShaderMaterial = !0;
var Fr = class extends Fe {
    constructor(){
        super();
        this.type = "Camera", this.matrixWorldInverse = new de, this.projectionMatrix = new de, this.projectionMatrixInverse = new de;
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
Fr.prototype.isCamera = !0;
var ft = class extends Fr {
    constructor(e = 50, t = 1, n = 0.1, i = 2000){
        super();
        this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(e, t) {
        return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
    }
    setFocalLength(e) {
        let t = 0.5 * this.getFilmHeight() / e;
        this.fov = fr * 2 * Math.atan(t), this.updateProjectionMatrix();
    }
    getFocalLength() {
        let e = Math.tan(Xn * 0.5 * this.fov);
        return 0.5 * this.getFilmHeight() / e;
    }
    getEffectiveFOV() {
        return fr * 2 * Math.atan(Math.tan(Xn * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(e, t, n, i, r, o) {
        this.aspect = e / t, this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        let e = this.near, t = e * Math.tan(Xn * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i, o = this.view;
        if (this.view !== null && this.view.enabled) {
            let l = o.fullWidth, c = o.fullHeight;
            r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
        }
        let a = this.filmOffset;
        a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
    }
};
ft.prototype.isPerspectiveCamera = !0;
var di = 90, fi = 1, $s = class extends Fe {
    constructor(e, t, n){
        super();
        if (this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
            console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            return;
        }
        this.renderTarget = n;
        let i = new ft(di, fi, e, t);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new w(1, 0, 0)), this.add(i);
        let r = new ft(di, fi, e, t);
        r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new w(-1, 0, 0)), this.add(r);
        let o = new ft(di, fi, e, t);
        o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new w(0, 1, 0)), this.add(o);
        let a = new ft(di, fi, e, t);
        a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new w(0, -1, 0)), this.add(a);
        let l = new ft(di, fi, e, t);
        l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new w(0, 0, 1)), this.add(l);
        let c = new ft(di, fi, e, t);
        c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new w(0, 0, -1)), this.add(c);
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        let n = this.renderTarget, [i, r, o, a, l, c] = this.children, u = e.xr.enabled, h = e.getRenderTarget();
        e.xr.enabled = !1;
        let d = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(h), e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
    }
}, Vi = class extends ct {
    constructor(e, t, n, i, r, o, a, l, c, u){
        e = e !== void 0 ? e : [], t = t !== void 0 ? t : Ui;
        super(e, t, n, i, r, o, a, l, c, u);
        this.flipY = !1;
    }
    get images() {
        return this.image;
    }
    set images(e) {
        this.image = e;
    }
};
Vi.prototype.isCubeTexture = !0;
var js = class extends Pt {
    constructor(e, t, n){
        Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n);
        super(e, e, t);
        t = t || {}, this.texture = new Vi(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : nt;
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
        }, i = new An(5, 5, 5), r = new on({
            name: "CubemapFromEquirect",
            uniforms: Ii(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: ot,
            blending: Mn
        });
        r.uniforms.tEquirect.value = t;
        let o = new lt(i, r), a = t.minFilter;
        return t.minFilter === Gi && (t.minFilter = nt), new $s(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
    }
    clear(e, t, n, i) {
        let r = e.getRenderTarget();
        for(let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(t, n, i);
        e.setRenderTarget(r);
    }
};
js.prototype.isWebGLCubeRenderTarget = !0;
var Wo = new w, Xd = new w, Jd = new ut, Xt = class {
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
        let i = Wo.subVectors(n, t).cross(Xd.subVectors(e, t)).normalize();
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
        let n = e.delta(Wo), i = this.normal.dot(n);
        if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        let r = -(e.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
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
        let n = t || Jd.getNormalMatrix(e), i = this.coplanarPoint(Wo).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r), this;
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
Xt.prototype.isPlane = !0;
var pi = new Dn, cs = new w, Br = class {
    constructor(e = new Xt, t = new Xt, n = new Xt, i = new Xt, r = new Xt, o = new Xt){
        this.planes = [
            e,
            t,
            n,
            i,
            r,
            o
        ];
    }
    set(e, t, n, i, r, o) {
        let a = this.planes;
        return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
    }
    copy(e) {
        let t = this.planes;
        for(let n = 0; n < 6; n++)t[n].copy(e.planes[n]);
        return this;
    }
    setFromProjectionMatrix(e) {
        let t = this.planes, n = e.elements, i = n[0], r = n[1], o = n[2], a = n[3], l = n[4], c = n[5], u = n[6], h = n[7], d = n[8], f = n[9], m = n[10], x = n[11], _ = n[12], g18 = n[13], p = n[14], M = n[15];
        return t[0].setComponents(a - i, h - l, x - d, M - _).normalize(), t[1].setComponents(a + i, h + l, x + d, M + _).normalize(), t[2].setComponents(a + r, h + c, x + f, M + g18).normalize(), t[3].setComponents(a - r, h - c, x - f, M - g18).normalize(), t[4].setComponents(a - o, h - u, x - m, M - p).normalize(), t[5].setComponents(a + o, h + u, x + m, M + p).normalize(), this;
    }
    intersectsObject(e) {
        let t = e.geometry;
        return t.boundingSphere === null && t.computeBoundingSphere(), pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(pi);
    }
    intersectsSprite(e) {
        return pi.center.set(0, 0, 0), pi.radius = 0.7071067811865476, pi.applyMatrix4(e.matrixWorld), this.intersectsSphere(pi);
    }
    intersectsSphere(e) {
        let t = this.planes, n = e.center, i = -e.radius;
        for(let r = 0; r < 6; r++)if (t[r].distanceToPoint(n) < i) return !1;
        return !0;
    }
    intersectsBox(e) {
        let t = this.planes;
        for(let n = 0; n < 6; n++){
            let i = t[n];
            if (cs.x = i.normal.x > 0 ? e.max.x : e.min.x, cs.y = i.normal.y > 0 ? e.max.y : e.min.y, cs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(cs) < 0) return !1;
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
function xh() {
    let s33 = null, e = !1, t = null, n = null;
    function i(r, o) {
        t(r, o), n = s33.requestAnimationFrame(i);
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = s33.requestAnimationFrame(i), e = !0);
        },
        stop: function() {
            s33.cancelAnimationFrame(n), e = !1;
        },
        setAnimationLoop: function(r) {
            t = r;
        },
        setContext: function(r) {
            s33 = r;
        }
    };
}
function Yd(s34, e) {
    let t = e.isWebGL2, n = new WeakMap;
    function i(c, u) {
        let h = c.array, d = c.usage, f = s34.createBuffer();
        s34.bindBuffer(u, f), s34.bufferData(u, h, d), c.onUploadCallback();
        let m = 5126;
        return h instanceof Float32Array ? m = 5126 : h instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : h instanceof Uint16Array ? c.isFloat16BufferAttribute ? t ? m = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : m = 5123 : h instanceof Int16Array ? m = 5122 : h instanceof Uint32Array ? m = 5125 : h instanceof Int32Array ? m = 5124 : h instanceof Int8Array ? m = 5120 : (h instanceof Uint8Array || h instanceof Uint8ClampedArray) && (m = 5121), {
            buffer: f,
            type: m,
            bytesPerElement: h.BYTES_PER_ELEMENT,
            version: c.version
        };
    }
    function r(c, u, h) {
        let d = u.array, f = u.updateRange;
        s34.bindBuffer(h, c), f.count === -1 ? s34.bufferSubData(h, 0, d) : (t ? s34.bufferSubData(h, f.offset * d.BYTES_PER_ELEMENT, d, f.offset, f.count) : s34.bufferSubData(h, f.offset * d.BYTES_PER_ELEMENT, d.subarray(f.offset, f.offset + f.count)), f.count = -1);
    }
    function o(c) {
        return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
    }
    function a(c) {
        c.isInterleavedBufferAttribute && (c = c.data);
        let u = n.get(c);
        u && (s34.deleteBuffer(u.buffer), n.delete(c));
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
        h === void 0 ? n.set(c, i(c, u)) : h.version < c.version && (r(h.buffer, c, u), h.version = c.version);
    }
    return {
        get: o,
        remove: a,
        update: l
    };
}
var Fi = class extends Me {
    constructor(e = 1, t = 1, n = 1, i = 1){
        super();
        this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        };
        let r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, d = t / l, f = [], m = [], x = [], _ = [];
        for(let g19 = 0; g19 < u; g19++){
            let p = g19 * d - o;
            for(let M = 0; M < c; M++){
                let y13 = M * h - r;
                m.push(y13, -p, 0), x.push(0, 0, 1), _.push(M / a), _.push(1 - g19 / l);
            }
        }
        for(let g1 = 0; g1 < l; g1++)for(let p = 0; p < a; p++){
            let M = p + c * g1, y14 = p + c * (g1 + 1), b14 = p + 1 + c * (g1 + 1), T = p + 1 + c * g1;
            f.push(M, y14, T), f.push(y14, b14, T);
        }
        this.setIndex(f), this.setAttribute("position", new he(m, 3)), this.setAttribute("normal", new he(x, 3)), this.setAttribute("uv", new he(_, 2));
    }
    static fromJSON(e) {
        return new Fi(e.width, e.height, e.widthSegments, e.heightSegments);
    }
}, Zd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, $d = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, jd = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Kd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Qd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ef = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, tf = "vec3 transformed = vec3( position );", nf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, rf = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`, sf = `#ifdef USE_BUMPMAP
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
#endif`, of = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, af = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, lf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, cf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, hf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, uf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, df = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, ff = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, pf = `#define PI 3.141592653589793
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
}`, mf = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, gf = `vec3 transformedNormal = objectNormal;
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
#endif`, xf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, yf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, _f = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, vf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Mf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", wf = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, bf = `#ifdef USE_ENVMAP
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
#endif`, Sf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Ef = `#ifdef USE_ENVMAP
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
#endif`, Tf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Af = `#ifdef USE_ENVMAP
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
#endif`, Rf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Cf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Lf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Pf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Df = `#ifdef USE_GRADIENTMAP
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
}`, If = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Ff = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Bf = `vec3 diffuse = vec3( 1.0 );
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
#endif`, Nf = `uniform bool receiveShadow;
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
#endif`, zf = `#if defined( USE_ENVMAP )
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
#endif`, Of = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Uf = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, Hf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Gf = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, kf = `PhysicalMaterial material;
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
#endif`, Vf = `struct PhysicalMaterial {
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
}`, Wf = `
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
#endif`, qf = `#if defined( RE_IndirectDiffuse )
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
#endif`, Xf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Jf = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Yf = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Zf = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, $f = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, jf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Kf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Qf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, ep = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, tp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, np = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ip = `#ifdef USE_MORPHNORMALS
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
#endif`, rp = `#ifdef USE_MORPHTARGETS
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
#endif`, sp = `#ifdef USE_MORPHTARGETS
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
#endif`, op = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, ap = `#ifdef OBJECTSPACE_NORMALMAP
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
#endif`, lp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, cp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, hp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, up = `#ifdef USE_NORMALMAP
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
#endif`, dp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, fp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, pp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, mp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, gp = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, xp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, yp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, _p = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, vp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Mp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, wp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, bp = `#ifdef USE_SHADOWMAP
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
#endif`, Sp = `#ifdef USE_SHADOWMAP
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
#endif`, Ep = `#ifdef USE_SHADOWMAP
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
#endif`, Tp = `float getShadowMask() {
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
}`, Ap = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Rp = `#ifdef USE_SKINNING
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
#endif`, Cp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Lp = `#ifdef USE_SKINNING
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
#endif`, Pp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Dp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ip = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Fp = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Bp = `#ifdef USE_TRANSMISSION
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
#endif`, Np = `#ifdef USE_TRANSMISSION
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
#endif`, zp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Op = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Up = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Hp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Gp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, kp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Vp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, Wp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, qp = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Xp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Jp = `#include <envmap_common_pars_fragment>
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
}`, Yp = `#include <common>
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
}`, Zp = `#if DEPTH_PACKING == 3200
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
}`, $p = `#define DISTANCE
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
}`, jp = `#define DISTANCE
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
}`, Kp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Qp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, em = `uniform float scale;
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
}`, tm = `uniform vec3 diffuse;
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
}`, nm = `#include <common>
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
}`, im = `uniform vec3 diffuse;
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
}`, rm = `#define LAMBERT
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
}`, sm = `uniform vec3 diffuse;
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
}`, om = `#define MATCAP
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
}`, am = `#define MATCAP
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
}`, lm = `#define NORMAL
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
}`, cm = `#define NORMAL
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
}`, hm = `#define PHONG
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
}`, um = `#define PHONG
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
}`, dm = `#define STANDARD
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
}`, fm = `#define STANDARD
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
}`, pm = `#define TOON
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
}`, mm = `#define TOON
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
}`, gm = `uniform float size;
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
}`, xm = `uniform vec3 diffuse;
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
}`, ym = `#include <common>
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
}`, _m = `uniform vec3 color;
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
}`, vm = `uniform float rotation;
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
}`, Mm = `uniform vec3 diffuse;
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
}`, Ie = {
    alphamap_fragment: Zd,
    alphamap_pars_fragment: $d,
    alphatest_fragment: jd,
    alphatest_pars_fragment: Kd,
    aomap_fragment: Qd,
    aomap_pars_fragment: ef,
    begin_vertex: tf,
    beginnormal_vertex: nf,
    bsdfs: rf,
    bumpmap_pars_fragment: sf,
    clipping_planes_fragment: of,
    clipping_planes_pars_fragment: af,
    clipping_planes_pars_vertex: lf,
    clipping_planes_vertex: cf,
    color_fragment: hf,
    color_pars_fragment: uf,
    color_pars_vertex: df,
    color_vertex: ff,
    common: pf,
    cube_uv_reflection_fragment: mf,
    defaultnormal_vertex: gf,
    displacementmap_pars_vertex: xf,
    displacementmap_vertex: yf,
    emissivemap_fragment: _f,
    emissivemap_pars_fragment: vf,
    encodings_fragment: Mf,
    encodings_pars_fragment: wf,
    envmap_fragment: bf,
    envmap_common_pars_fragment: Sf,
    envmap_pars_fragment: Ef,
    envmap_pars_vertex: Tf,
    envmap_physical_pars_fragment: zf,
    envmap_vertex: Af,
    fog_vertex: Rf,
    fog_pars_vertex: Cf,
    fog_fragment: Lf,
    fog_pars_fragment: Pf,
    gradientmap_pars_fragment: Df,
    lightmap_fragment: If,
    lightmap_pars_fragment: Ff,
    lights_lambert_vertex: Bf,
    lights_pars_begin: Nf,
    lights_toon_fragment: Of,
    lights_toon_pars_fragment: Uf,
    lights_phong_fragment: Hf,
    lights_phong_pars_fragment: Gf,
    lights_physical_fragment: kf,
    lights_physical_pars_fragment: Vf,
    lights_fragment_begin: Wf,
    lights_fragment_maps: qf,
    lights_fragment_end: Xf,
    logdepthbuf_fragment: Jf,
    logdepthbuf_pars_fragment: Yf,
    logdepthbuf_pars_vertex: Zf,
    logdepthbuf_vertex: $f,
    map_fragment: jf,
    map_pars_fragment: Kf,
    map_particle_fragment: Qf,
    map_particle_pars_fragment: ep,
    metalnessmap_fragment: tp,
    metalnessmap_pars_fragment: np,
    morphnormal_vertex: ip,
    morphtarget_pars_vertex: rp,
    morphtarget_vertex: sp,
    normal_fragment_begin: op,
    normal_fragment_maps: ap,
    normal_pars_fragment: lp,
    normal_pars_vertex: cp,
    normal_vertex: hp,
    normalmap_pars_fragment: up,
    clearcoat_normal_fragment_begin: dp,
    clearcoat_normal_fragment_maps: fp,
    clearcoat_pars_fragment: pp,
    output_fragment: mp,
    packing: gp,
    premultiplied_alpha_fragment: xp,
    project_vertex: yp,
    dithering_fragment: _p,
    dithering_pars_fragment: vp,
    roughnessmap_fragment: Mp,
    roughnessmap_pars_fragment: wp,
    shadowmap_pars_fragment: bp,
    shadowmap_pars_vertex: Sp,
    shadowmap_vertex: Ep,
    shadowmask_pars_fragment: Tp,
    skinbase_vertex: Ap,
    skinning_pars_vertex: Rp,
    skinning_vertex: Cp,
    skinnormal_vertex: Lp,
    specularmap_fragment: Pp,
    specularmap_pars_fragment: Dp,
    tonemapping_fragment: Ip,
    tonemapping_pars_fragment: Fp,
    transmission_fragment: Bp,
    transmission_pars_fragment: Np,
    uv_pars_fragment: zp,
    uv_pars_vertex: Op,
    uv_vertex: Up,
    uv2_pars_fragment: Hp,
    uv2_pars_vertex: Gp,
    uv2_vertex: kp,
    worldpos_vertex: Vp,
    background_vert: Wp,
    background_frag: qp,
    cube_vert: Xp,
    cube_frag: Jp,
    depth_vert: Yp,
    depth_frag: Zp,
    distanceRGBA_vert: $p,
    distanceRGBA_frag: jp,
    equirect_vert: Kp,
    equirect_frag: Qp,
    linedashed_vert: em,
    linedashed_frag: tm,
    meshbasic_vert: nm,
    meshbasic_frag: im,
    meshlambert_vert: rm,
    meshlambert_frag: sm,
    meshmatcap_vert: om,
    meshmatcap_frag: am,
    meshnormal_vert: lm,
    meshnormal_frag: cm,
    meshphong_vert: hm,
    meshphong_frag: um,
    meshphysical_vert: dm,
    meshphysical_frag: fm,
    meshtoon_vert: pm,
    meshtoon_frag: mm,
    points_vert: gm,
    points_frag: xm,
    shadow_vert: ym,
    shadow_frag: _m,
    sprite_vert: vm,
    sprite_frag: Mm
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
            value: new ut
        },
        uv2Transform: {
            value: new ut
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
            value: 0.98
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
            value: 0.00025
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2000
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
            value: new ut
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
            value: new Z(0.5, 0.5)
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
            value: new ut
        }
    }
}, Jt = {
    basic: {
        uniforms: vt([
            te.common,
            te.specularmap,
            te.envmap,
            te.aomap,
            te.lightmap,
            te.fog
        ]),
        vertexShader: Ie.meshbasic_vert,
        fragmentShader: Ie.meshbasic_frag
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
        vertexShader: Ie.meshlambert_vert,
        fragmentShader: Ie.meshlambert_frag
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
        vertexShader: Ie.meshphong_vert,
        fragmentShader: Ie.meshphong_frag
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
        vertexShader: Ie.meshphysical_vert,
        fragmentShader: Ie.meshphysical_frag
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
        vertexShader: Ie.meshtoon_vert,
        fragmentShader: Ie.meshtoon_frag
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
        vertexShader: Ie.meshmatcap_vert,
        fragmentShader: Ie.meshmatcap_frag
    },
    points: {
        uniforms: vt([
            te.points,
            te.fog
        ]),
        vertexShader: Ie.points_vert,
        fragmentShader: Ie.points_frag
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
        vertexShader: Ie.linedashed_vert,
        fragmentShader: Ie.linedashed_frag
    },
    depth: {
        uniforms: vt([
            te.common,
            te.displacementmap
        ]),
        vertexShader: Ie.depth_vert,
        fragmentShader: Ie.depth_frag
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
        vertexShader: Ie.meshnormal_vert,
        fragmentShader: Ie.meshnormal_frag
    },
    sprite: {
        uniforms: vt([
            te.sprite,
            te.fog
        ]),
        vertexShader: Ie.sprite_vert,
        fragmentShader: Ie.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new ut
            },
            t2D: {
                value: null
            }
        },
        vertexShader: Ie.background_vert,
        fragmentShader: Ie.background_frag
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
        vertexShader: Ie.cube_vert,
        fragmentShader: Ie.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Ie.equirect_vert,
        fragmentShader: Ie.equirect_frag
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
                    value: 1000
                }
            }
        ]),
        vertexShader: Ie.distanceRGBA_vert,
        fragmentShader: Ie.distanceRGBA_frag
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
        vertexShader: Ie.shadow_vert,
        fragmentShader: Ie.shadow_frag
    }
};
Jt.physical = {
    uniforms: vt([
        Jt.standard.uniforms,
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
    vertexShader: Ie.meshphysical_vert,
    fragmentShader: Ie.meshphysical_frag
};
function wm(s35, e, t, n, i, r) {
    let o = new ne(0), a = i === !0 ? 0 : 1, l, c, u = null, h = 0, d = null;
    function f(x, _) {
        let g20 = !1, p = _.isScene === !0 ? _.background : null;
        p && p.isTexture && (p = e.get(p));
        let M = s35.xr, y15 = M.getSession && M.getSession();
        y15 && y15.environmentBlendMode === "additive" && (p = null), p === null ? m(o, a) : p && p.isColor && (m(p, 1), g20 = !0), (s35.autoClear || g20) && s35.clear(s35.autoClearColor, s35.autoClearDepth, s35.autoClearStencil), p && (p.isCubeTexture || p.mapping === Ir) ? (c === void 0 && (c = new lt(new An(1, 1, 1), new on({
            name: "BackgroundCubeMaterial",
            uniforms: Ii(Jt.cube.uniforms),
            vertexShader: Jt.cube.vertexShader,
            fragmentShader: Jt.cube.fragmentShader,
            side: ot,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(b, T, R) {
            this.matrixWorld.copyPosition(R.matrixWorld);
        }, Object.defineProperty(c.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value;
            }
        }), n.update(c)), c.material.uniforms.envMap.value = p, c.material.uniforms.flipEnvMap.value = p.isCubeTexture && p.isRenderTargetTexture === !1 ? -1 : 1, (u !== p || h !== p.version || d !== s35.toneMapping) && (c.material.needsUpdate = !0, u = p, h = p.version, d = s35.toneMapping), x.unshift(c, c.geometry, c.material, 0, 0, null)) : p && p.isTexture && (l === void 0 && (l = new lt(new Fi(2, 2), new on({
            name: "BackgroundMaterial",
            uniforms: Ii(Jt.background.uniforms),
            vertexShader: Jt.background.vertexShader,
            fragmentShader: Jt.background.fragmentShader,
            side: Li,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
            get: function() {
                return this.uniforms.t2D.value;
            }
        }), n.update(l)), l.material.uniforms.t2D.value = p, p.matrixAutoUpdate === !0 && p.updateMatrix(), l.material.uniforms.uvTransform.value.copy(p.matrix), (u !== p || h !== p.version || d !== s35.toneMapping) && (l.material.needsUpdate = !0, u = p, h = p.version, d = s35.toneMapping), x.unshift(l, l.geometry, l.material, 0, 0, null));
    }
    function m(x, _) {
        t.buffers.color.setClear(x.r, x.g, x.b, _, r);
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
function bm(s36, e, t, n) {
    let i = s36.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, l = x(null), c = l;
    function u(D8, B, z, F, W) {
        let j = !1;
        if (o) {
            let ue = m(F, z, B);
            c !== ue && (c = ue, d(c.object)), j = _(F, W), j && g21(F, W);
        } else {
            let ue = B.wireframe === !0;
            (c.geometry !== F.id || c.program !== z.id || c.wireframe !== ue) && (c.geometry = F.id, c.program = z.id, c.wireframe = ue, j = !0);
        }
        D8.isInstancedMesh === !0 && (j = !0), W !== null && t.update(W, 34963), j && (R(D8, B, z, F), W !== null && s36.bindBuffer(34963, t.get(W).buffer));
    }
    function h() {
        return n.isWebGL2 ? s36.createVertexArray() : r.createVertexArrayOES();
    }
    function d(D9) {
        return n.isWebGL2 ? s36.bindVertexArray(D9) : r.bindVertexArrayOES(D9);
    }
    function f(D10) {
        return n.isWebGL2 ? s36.deleteVertexArray(D10) : r.deleteVertexArrayOES(D10);
    }
    function m(D11, B, z) {
        let F = z.wireframe === !0, W = a[D11.id];
        W === void 0 && (W = {}, a[D11.id] = W);
        let j = W[B.id];
        j === void 0 && (j = {}, W[B.id] = j);
        let ue = j[F];
        return ue === void 0 && (ue = x(h()), j[F] = ue), ue;
    }
    function x(D12) {
        let B = [], z = [], F = [];
        for(let W = 0; W < i; W++)B[W] = 0, z[W] = 0, F[W] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: B,
            enabledAttributes: z,
            attributeDivisors: F,
            object: D12,
            attributes: {},
            index: null
        };
    }
    function _(D13, B) {
        let z = c.attributes, F = D13.attributes, W = 0;
        for(let j in F){
            let ue = z[j], k = F[j];
            if (ue === void 0 || ue.attribute !== k || ue.data !== k.data) return !0;
            W++;
        }
        return c.attributesNum !== W || c.index !== B;
    }
    function g21(D14, B) {
        let z = {}, F = D14.attributes, W = 0;
        for(let j in F){
            let ue = F[j], k = {};
            k.attribute = ue, ue.data && (k.data = ue.data), z[j] = k, W++;
        }
        c.attributes = z, c.attributesNum = W, c.index = B;
    }
    function p() {
        let D15 = c.newAttributes;
        for(let B = 0, z = D15.length; B < z; B++)D15[B] = 0;
    }
    function M(D16) {
        y16(D16, 0);
    }
    function y16(D17, B) {
        let z = c.newAttributes, F = c.enabledAttributes, W = c.attributeDivisors;
        z[D17] = 1, F[D17] === 0 && (s36.enableVertexAttribArray(D17), F[D17] = 1), W[D17] !== B && ((n.isWebGL2 ? s36 : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D17, B), W[D17] = B);
    }
    function b15() {
        let D18 = c.newAttributes, B = c.enabledAttributes;
        for(let z = 0, F = B.length; z < F; z++)B[z] !== D18[z] && (s36.disableVertexAttribArray(z), B[z] = 0);
    }
    function T(D19, B, z, F, W, j) {
        n.isWebGL2 === !0 && (z === 5124 || z === 5125) ? s36.vertexAttribIPointer(D19, B, z, W, j) : s36.vertexAttribPointer(D19, B, z, F, W, j);
    }
    function R(D20, B, z, F) {
        if (n.isWebGL2 === !1 && (D20.isInstancedMesh || F.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
        p();
        let W = F.attributes, j = z.getAttributes(), ue = B.defaultAttributeValues;
        for(let k in j){
            let $ = j[k];
            if ($.location >= 0) {
                let re3 = W[k];
                if (re3 === void 0 && (k === "instanceMatrix" && D20.instanceMatrix && (re3 = D20.instanceMatrix), k === "instanceColor" && D20.instanceColor && (re3 = D20.instanceColor)), re3 !== void 0) {
                    let pe3 = re3.normalized, ye2 = re3.itemSize, G2 = t.get(re3);
                    if (G2 === void 0) continue;
                    let Ge = G2.buffer, ge = G2.type, Se2 = G2.bytesPerElement;
                    if (re3.isInterleavedBufferAttribute) {
                        let le1 = re3.data, Le1 = le1.stride, Ee1 = re3.offset;
                        if (le1 && le1.isInstancedInterleavedBuffer) {
                            for(let X = 0; X < $.locationSize; X++)y16($.location + X, le1.meshPerAttribute);
                            D20.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = le1.meshPerAttribute * le1.count);
                        } else for(let X = 0; X < $.locationSize; X++)M($.location + X);
                        s36.bindBuffer(34962, Ge);
                        for(let X1 = 0; X1 < $.locationSize; X1++)T($.location + X1, ye2 / $.locationSize, ge, pe3, Le1 * Se2, (Ee1 + ye2 / $.locationSize * X1) * Se2);
                    } else {
                        if (re3.isInstancedBufferAttribute) {
                            for(let le2 = 0; le2 < $.locationSize; le2++)y16($.location + le2, re3.meshPerAttribute);
                            D20.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = re3.meshPerAttribute * re3.count);
                        } else for(let le3 = 0; le3 < $.locationSize; le3++)M($.location + le3);
                        s36.bindBuffer(34962, Ge);
                        for(let le1 = 0; le1 < $.locationSize; le1++)T($.location + le1, ye2 / $.locationSize, ge, pe3, ye2 * Se2, ye2 / $.locationSize * le1 * Se2);
                    }
                } else if (ue !== void 0) {
                    let pe4 = ue[k];
                    if (pe4 !== void 0) switch(pe4.length){
                        case 2:
                            s36.vertexAttrib2fv($.location, pe4);
                            break;
                        case 3:
                            s36.vertexAttrib3fv($.location, pe4);
                            break;
                        case 4:
                            s36.vertexAttrib4fv($.location, pe4);
                            break;
                        default:
                            s36.vertexAttrib1fv($.location, pe4);
                    }
                }
            }
        }
        b15();
    }
    function P7() {
        v();
        for(let D21 in a){
            let B = a[D21];
            for(let z in B){
                let F = B[z];
                for(let W in F)f(F[W].object), delete F[W];
                delete B[z];
            }
            delete a[D21];
        }
    }
    function H(D22) {
        if (a[D22.id] === void 0) return;
        let B = a[D22.id];
        for(let z in B){
            let F = B[z];
            for(let W in F)f(F[W].object), delete F[W];
            delete B[z];
        }
        delete a[D22.id];
    }
    function N(D23) {
        for(let B in a){
            let z = a[B];
            if (z[D23.id] === void 0) continue;
            let F = z[D23.id];
            for(let W in F)f(F[W].object), delete F[W];
            delete z[D23.id];
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
        dispose: P7,
        releaseStatesOfGeometry: H,
        releaseStatesOfProgram: N,
        initAttributes: p,
        enableAttribute: M,
        disableUnusedAttributes: b15
    };
}
function Sm(s37, e, t, n) {
    let i = n.isWebGL2, r;
    function o(c) {
        r = c;
    }
    function a(c, u) {
        s37.drawArrays(r, c, u), t.update(u, r, 1);
    }
    function l(c, u, h) {
        if (h === 0) return;
        let d, f;
        if (i) d = s37, f = "drawArraysInstanced";
        else if (d = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", d === null) {
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return;
        }
        d[f](r, c, u, h), t.update(u, r, h);
    }
    this.setMode = o, this.render = a, this.renderInstances = l;
}
function Em(s38, e, t) {
    let n;
    function i() {
        if (n !== void 0) return n;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            let R = e.get("EXT_texture_filter_anisotropic");
            n = s38.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        } else n = 0;
        return n;
    }
    function r(R) {
        if (R === "highp") {
            if (s38.getShaderPrecisionFormat(35633, 36338).precision > 0 && s38.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            R = "mediump";
        }
        return R === "mediump" && s38.getShaderPrecisionFormat(35633, 36337).precision > 0 && s38.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }
    let o = typeof WebGL2RenderingContext < "u" && s38 instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && s38 instanceof WebGL2ComputeRenderingContext, a = t.precision !== void 0 ? t.precision : "highp", l = r(a);
    l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
    let c = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = s38.getParameter(34930), d = s38.getParameter(35660), f = s38.getParameter(3379), m = s38.getParameter(34076), x = s38.getParameter(34921), _ = s38.getParameter(36347), g22 = s38.getParameter(36348), p = s38.getParameter(36349), M = d > 0, y17 = o || e.has("OES_texture_float"), b16 = M && y17, T = o ? s38.getParameter(36183) : 0;
    return {
        isWebGL2: o,
        drawBuffers: c,
        getMaxAnisotropy: i,
        getMaxPrecision: r,
        precision: a,
        logarithmicDepthBuffer: u,
        maxTextures: h,
        maxVertexTextures: d,
        maxTextureSize: f,
        maxCubemapSize: m,
        maxAttributes: x,
        maxVertexUniforms: _,
        maxVaryings: g22,
        maxFragmentUniforms: p,
        vertexTextures: M,
        floatFragmentTextures: y17,
        floatVertexTextures: b16,
        maxSamples: T
    };
}
function Tm(s39) {
    let e = this, t = null, n = 0, i = !1, r = !1, o = new Xt, a = new ut, l = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d, f) {
        let m = h.length !== 0 || d || n !== 0 || i;
        return i = d, t = u(h, f, 0), n = h.length, m;
    }, this.beginShadows = function() {
        r = !0, u(null);
    }, this.endShadows = function() {
        r = !1, c();
    }, this.setState = function(h, d, f) {
        let m = h.clippingPlanes, x = h.clipIntersection, _ = h.clipShadows, g23 = s39.get(h);
        if (!i || m === null || m.length === 0 || r && !_) r ? u(null) : c();
        else {
            let p = r ? 0 : n, M = p * 4, y18 = g23.clippingState || null;
            l.value = y18, y18 = u(m, d, M, f);
            for(let b17 = 0; b17 !== M; ++b17)y18[b17] = t[b17];
            g23.clippingState = y18, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += p;
        }
    };
    function c() {
        l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
    }
    function u(h, d, f, m) {
        let x = h !== null ? h.length : 0, _ = null;
        if (x !== 0) {
            if (_ = l.value, m !== !0 || _ === null) {
                let g24 = f + x * 4, p = d.matrixWorldInverse;
                a.getNormalMatrix(p), (_ === null || _.length < g24) && (_ = new Float32Array(g24));
                for(let M = 0, y19 = f; M !== x; ++M, y19 += 4)o.copy(h[M]).applyMatrix4(p, a), o.normal.toArray(_, y19), _[y19 + 3] = o.constant;
            }
            l.value = _, l.needsUpdate = !0;
        }
        return e.numPlanes = x, e.numIntersection = 0, _;
    }
}
function Am(s40) {
    let e = new WeakMap;
    function t(o, a) {
        return a === Bs ? o.mapping = Ui : a === Ns && (o.mapping = Hi), o;
    }
    function n(o) {
        if (o && o.isTexture && o.isRenderTargetTexture === !1) {
            let a = o.mapping;
            if (a === Bs || a === Ns) if (e.has(o)) {
                let l = e.get(o).texture;
                return t(l, o.mapping);
            } else {
                let l = o.image;
                if (l && l.height > 0) {
                    let c = new js(l.height / 2);
                    return c.fromEquirectangularTexture(s40, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
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
    function r() {
        e = new WeakMap;
    }
    return {
        get: n,
        dispose: r
    };
}
var Nr = class extends Fr {
    constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2000){
        super();
        this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
    }
    copy(e, t) {
        return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
    }
    setViewOffset(e, t, n, i, r, o) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2, r = n - e, o = n + e, a = i + t, l = i - t;
        if (this.view !== null && this.view.enabled) {
            let c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += c * this.view.offsetX, o = r + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
        }
        this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
    }
};
Nr.prototype.isOrthographicCamera = !0;
var Wi = class extends on {
    constructor(e){
        super(e);
        this.type = "RawShaderMaterial";
    }
};
Wi.prototype.isRawShaderMaterial = !0;
var Ci = 4, Sn = 8, qt = Math.pow(2, Sn), yh = [
    0.125,
    0.215,
    0.35,
    0.446,
    0.526,
    0.582
], _h = Sn - Ci + 1 + yh.length, mi = 20, qo = new Nr, { _lodPlanes: Ki , _sizeLods: kl , _sigmas: hs  } = Rm(), Vl = new ne, Xo = null, Vn = (1 + Math.sqrt(5)) / 2, gi = 1 / Vn, Wl = [
    new w(1, 1, 1),
    new w(-1, 1, 1),
    new w(1, 1, -1),
    new w(-1, 1, -1),
    new w(0, Vn, gi),
    new w(0, Vn, -gi),
    new w(gi, 0, Vn),
    new w(-gi, 0, Vn),
    new w(Vn, gi, 0),
    new w(-Vn, gi, 0)
], la = class {
    constructor(e){
        this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = Cm(mi), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e, t = 0, n = 0.1, i = 100) {
        Xo = this._renderer.getRenderTarget();
        let r = this._allocateTargets();
        return this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(e, t = null) {
        return this._fromTexture(e, t);
    }
    fromCubemap(e, t = null) {
        return this._fromTexture(e, t);
    }
    compileCubemapShader() {
        this._cubemapShader === null && (this._cubemapShader = Jl(), this._compileMaterial(this._cubemapShader));
    }
    compileEquirectangularShader() {
        this._equirectShader === null && (this._equirectShader = Xl(), this._compileMaterial(this._equirectShader));
    }
    dispose() {
        this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
        for(let e = 0; e < Ki.length; e++)Ki[e].dispose();
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Xo), e.scissorTest = !1, us(e, 0, 0, e.width, e.height);
    }
    _fromTexture(e, t) {
        Xo = this._renderer.getRenderTarget();
        let n = t || this._allocateTargets(e);
        return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets(e) {
        let t = {
            magFilter: nt,
            minFilter: nt,
            generateMipmaps: !1,
            type: Ti,
            format: wt,
            encoding: Tn,
            depthBuffer: !1
        }, n = ql(t);
        return n.depthBuffer = !e, this._pingPongRenderTarget === null && (this._pingPongRenderTarget = ql(t)), n;
    }
    _compileMaterial(e) {
        let t = new lt(Ki[0], e);
        this._renderer.compile(t, qo);
    }
    _sceneToCubeUV(e, t, n, i) {
        let a = new ft(90, 1, t, n), l = [
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
        u.getClearColor(Vl), u.toneMapping = wn, u.autoClear = !1;
        let f = new un({
            name: "PMREM.Background",
            side: ot,
            depthWrite: !1,
            depthTest: !1
        }), m = new lt(new An, f), x = !1, _ = e.background;
        _ ? _.isColor && (f.color.copy(_), e.background = null, x = !0) : (f.color.copy(Vl), x = !0);
        for(let g25 = 0; g25 < 6; g25++){
            let p = g25 % 3;
            p === 0 ? (a.up.set(0, l[g25], 0), a.lookAt(c[g25], 0, 0)) : p === 1 ? (a.up.set(0, 0, l[g25]), a.lookAt(0, c[g25], 0)) : (a.up.set(0, l[g25], 0), a.lookAt(0, 0, c[g25])), us(i, p * qt, g25 > 2 ? qt : 0, qt, qt), u.setRenderTarget(i), x && u.render(m, a), u.render(e, a);
        }
        m.geometry.dispose(), m.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = _;
    }
    _textureToCubeUV(e, t) {
        let n = this._renderer, i = e.mapping === Ui || e.mapping === Hi;
        i ? (this._cubemapShader === null && (this._cubemapShader = Jl()), this._cubemapShader.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectShader === null && (this._equirectShader = Xl());
        let r = i ? this._cubemapShader : this._equirectShader, o = new lt(Ki[0], r), a = r.uniforms;
        a.envMap.value = e, i || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), us(t, 0, 0, 3 * qt, 2 * qt), n.setRenderTarget(t), n.render(o, qo);
    }
    _applyPMREM(e) {
        let t = this._renderer, n = t.autoClear;
        t.autoClear = !1;
        for(let i = 1; i < _h; i++){
            let r = Math.sqrt(hs[i] * hs[i] - hs[i - 1] * hs[i - 1]), o = Wl[(i - 1) % Wl.length];
            this._blur(e, i - 1, i, r, o);
        }
        t.autoClear = n;
    }
    _blur(e, t, n, i, r) {
        let o = this._pingPongRenderTarget;
        this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r);
    }
    _halfBlur(e, t, n, i, r, o, a) {
        let l = this._renderer, c = this._blurMaterial;
        o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        let u = 3, h = new lt(Ki[i], c), d = c.uniforms, f = kl[n] - 1, m = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * mi - 1), x = r / m, _ = isFinite(r) ? 1 + Math.floor(u * x) : mi;
        _ > mi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${mi}`);
        let g26 = [], p = 0;
        for(let T = 0; T < mi; ++T){
            let R = T / x, P8 = Math.exp(-R * R / 2);
            g26.push(P8), T === 0 ? p += P8 : T < _ && (p += 2 * P8);
        }
        for(let T1 = 0; T1 < g26.length; T1++)g26[T1] = g26[T1] / p;
        d.envMap.value = e.texture, d.samples.value = _, d.weights.value = g26, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a), d.dTheta.value = m, d.mipInt.value = Sn - n;
        let M = kl[i], y20 = 3 * Math.max(0, qt - 2 * M), b18 = (i === 0 ? 0 : 2 * qt) + 2 * M * (i > Sn - Ci ? i - Sn + Ci : 0);
        us(t, y20, b18, 3 * M, 2 * M), l.setRenderTarget(t), l.render(h, qo);
    }
};
function Rm() {
    let s41 = [], e = [], t = [], n = Sn;
    for(let i = 0; i < _h; i++){
        let r = Math.pow(2, n);
        e.push(r);
        let o = 1 / r;
        i > Sn - Ci ? o = yh[i - Sn + Ci - 1] : i === 0 && (o = 0), t.push(o);
        let a = 1 / (r - 1), l = -a / 2, c = 1 + a / 2, u = [
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
        ], h = 6, d = 6, f = 3, m = 2, x = 1, _ = new Float32Array(f * d * h), g27 = new Float32Array(m * d * h), p = new Float32Array(x * d * h);
        for(let y21 = 0; y21 < h; y21++){
            let b19 = y21 % 3 * 2 / 3 - 1, T = y21 > 2 ? 0 : -1, R = [
                b19,
                T,
                0,
                b19 + 2 / 3,
                T,
                0,
                b19 + 2 / 3,
                T + 1,
                0,
                b19,
                T,
                0,
                b19 + 2 / 3,
                T + 1,
                0,
                b19,
                T + 1,
                0
            ];
            _.set(R, f * d * y21), g27.set(u, m * d * y21);
            let P9 = [
                y21,
                y21,
                y21,
                y21,
                y21,
                y21
            ];
            p.set(P9, x * d * y21);
        }
        let M = new Me;
        M.setAttribute("position", new ze(_, f)), M.setAttribute("uv", new ze(g27, m)), M.setAttribute("faceIndex", new ze(p, x)), s41.push(M), n > Ci && n--;
    }
    return {
        _lodPlanes: s41,
        _sizeLods: e,
        _sigmas: t
    };
}
function ql(s42) {
    let e = new Pt(3 * qt, 3 * qt, s42);
    return e.texture.mapping = Ir, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e;
}
function us(s43, e, t, n, i) {
    s43.viewport.set(e, t, n, i), s43.scissor.set(e, t, n, i);
}
function Cm(s44) {
    let e = new Float32Array(s44), t = new w(0, 1, 0);
    return new Wi({
        name: "SphericalGaussianBlur",
        defines: {
            n: s44
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
        vertexShader: ya(),
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
        blending: Mn,
        depthTest: !1,
        depthWrite: !1
    });
}
function Xl() {
    let s45 = new Z(1, 1);
    return new Wi({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            texelSize: {
                value: s45
            }
        },
        vertexShader: ya(),
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
        blending: Mn,
        depthTest: !1,
        depthWrite: !1
    });
}
function Jl() {
    return new Wi({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: ya(),
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
        blending: Mn,
        depthTest: !1,
        depthWrite: !1
    });
}
function ya() {
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
function Lm(s46) {
    let e = new WeakMap, t = null;
    function n(a) {
        if (a && a.isTexture) {
            let l = a.mapping, c = l === Bs || l === Ns, u = l === Ui || l === Hi;
            if (c || u) if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
                a.needsPMREMUpdate = !1;
                let h = e.get(a);
                return t === null && (t = new la(s46)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), e.set(a, h), h.texture;
            } else {
                if (e.has(a)) return e.get(a).texture;
                {
                    let h = a.image;
                    if (c && h && h.height > 0 || u && h && i(h)) {
                        t === null && (t = new la(s46));
                        let d = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
                        return e.set(a, d), a.addEventListener("dispose", r), d.texture;
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
    function r(a) {
        let l = a.target;
        l.removeEventListener("dispose", r);
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
function Pm(s47) {
    let e = {};
    function t(n) {
        if (e[n] !== void 0) return e[n];
        let i;
        switch(n){
            case "WEBGL_depth_texture":
                i = s47.getExtension("WEBGL_depth_texture") || s47.getExtension("MOZ_WEBGL_depth_texture") || s47.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = s47.getExtension("EXT_texture_filter_anisotropic") || s47.getExtension("MOZ_EXT_texture_filter_anisotropic") || s47.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = s47.getExtension("WEBGL_compressed_texture_s3tc") || s47.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s47.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = s47.getExtension("WEBGL_compressed_texture_pvrtc") || s47.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = s47.getExtension(n);
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
function Dm(s, e, t, n) {
    let i = {}, r = new WeakMap;
    function o(h) {
        let d = h.target;
        d.index !== null && e.remove(d.index);
        for(let m in d.attributes)e.remove(d.attributes[m]);
        d.removeEventListener("dispose", o), delete i[d.id];
        let f = r.get(d);
        f && (e.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
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
            for(let _ = 0, g28 = x.length; _ < g28; _++)e.update(x[_], 34962);
        }
    }
    function c(h) {
        let d = [], f = h.index, m = h.attributes.position, x = 0;
        if (f !== null) {
            let p = f.array;
            x = f.version;
            for(let M = 0, y22 = p.length; M < y22; M += 3){
                let b20 = p[M + 0], T = p[M + 1], R = p[M + 2];
                d.push(b20, T, T, R, R, b20);
            }
        } else {
            let p = m.array;
            x = m.version;
            for(let M = 0, y23 = p.length / 3 - 1; M < y23; M += 3){
                let b21 = M + 0, T = M + 1, R = M + 2;
                d.push(b21, T, T, R, R, b21);
            }
        }
        let _ = new (ah(d) ? Zs : Ys)(d, 1);
        _.version = x;
        let g29 = r.get(h);
        g29 && e.remove(g29), r.set(h, _);
    }
    function u(h) {
        let d = r.get(h);
        if (d) {
            let f = h.index;
            f !== null && d.version < f.version && c(h);
        } else c(h);
        return r.get(h);
    }
    return {
        get: a,
        update: l,
        getWireframeAttribute: u
    };
}
function Im(s48, e, t, n) {
    let i = n.isWebGL2, r;
    function o(d) {
        r = d;
    }
    let a, l;
    function c(d) {
        a = d.type, l = d.bytesPerElement;
    }
    function u(d, f) {
        s48.drawElements(r, f, a, d * l), t.update(f, r, 1);
    }
    function h(d, f, m) {
        if (m === 0) return;
        let x, _;
        if (i) x = s48, _ = "drawElementsInstanced";
        else if (x = e.get("ANGLE_instanced_arrays"), _ = "drawElementsInstancedANGLE", x === null) {
            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return;
        }
        x[_](r, f, a, d * l, m), t.update(f, r, m);
    }
    this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function Fm(s) {
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
    function n(r, o, a) {
        switch(t.calls++, o){
            case 4:
                t.triangles += a * (r / 3);
                break;
            case 1:
                t.lines += a * (r / 2);
                break;
            case 3:
                t.lines += a * (r - 1);
                break;
            case 2:
                t.lines += a * r;
                break;
            case 0:
                t.points += a * r;
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
var Ks = class extends ct {
    constructor(e = null, t = 1, n = 1, i = 1){
        super(null);
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = at, this.minFilter = at, this.wrapR = Mt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
    }
};
Ks.prototype.isDataTexture2DArray = !0;
function Bm(s49, e) {
    return s49[0] - e[0];
}
function Nm(s50, e) {
    return Math.abs(e[1]) - Math.abs(s50[1]);
}
function Yl(s51, e) {
    let t = 1, n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
    n instanceof Int8Array ? t = 127 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), s51.divideScalar(t);
}
function zm(s52, e, t) {
    let n = {}, i = new Float32Array(8), r = new WeakMap, o = new w, a = [];
    for(let c3 = 0; c3 < 8; c3++)a[c3] = [
        c3,
        0
    ];
    function l(c, u, h, d) {
        let f = c.morphTargetInfluences;
        if (e.isWebGL2 === !0) {
            let m = u.morphAttributes.position.length, x = r.get(u);
            if (x === void 0 || x.count !== m) {
                let C = function() {
                    N.dispose(), r.delete(u), u.removeEventListener("dispose", C);
                };
                x !== void 0 && x.texture.dispose();
                let p = u.morphAttributes.normal !== void 0, M = u.morphAttributes.position, y24 = u.morphAttributes.normal || [], b22 = u.attributes.position.count, T = p === !0 ? 2 : 1, R = b22 * T, P10 = 1;
                R > e.maxTextureSize && (P10 = Math.ceil(R / e.maxTextureSize), R = e.maxTextureSize);
                let H = new Float32Array(R * P10 * 4 * m), N = new Ks(H, R, P10, m);
                N.format = wt, N.type = vn, N.needsUpdate = !0;
                let v = T * 4;
                for(let D24 = 0; D24 < m; D24++){
                    let B = M[D24], z = y24[D24], F = R * P10 * 4 * D24;
                    for(let W = 0; W < B.count; W++){
                        o.fromBufferAttribute(B, W), B.normalized === !0 && Yl(o, B);
                        let j = W * v;
                        H[F + j + 0] = o.x, H[F + j + 1] = o.y, H[F + j + 2] = o.z, H[F + j + 3] = 0, p === !0 && (o.fromBufferAttribute(z, W), z.normalized === !0 && Yl(o, z), H[F + j + 4] = o.x, H[F + j + 5] = o.y, H[F + j + 6] = o.z, H[F + j + 7] = 0);
                    }
                }
                x = {
                    count: m,
                    texture: N,
                    size: new Z(R, P10)
                }, r.set(u, x), u.addEventListener("dispose", C);
            }
            let _ = 0;
            for(let p = 0; p < f.length; p++)_ += f[p];
            let g30 = u.morphTargetsRelative ? 1 : 1 - _;
            d.getUniforms().setValue(s52, "morphTargetBaseInfluence", g30), d.getUniforms().setValue(s52, "morphTargetInfluences", f), d.getUniforms().setValue(s52, "morphTargetsTexture", x.texture, t), d.getUniforms().setValue(s52, "morphTargetsTextureSize", x.size);
        } else {
            let m = f === void 0 ? 0 : f.length, x = n[u.id];
            if (x === void 0 || x.length !== m) {
                x = [];
                for(let y25 = 0; y25 < m; y25++)x[y25] = [
                    y25,
                    0
                ];
                n[u.id] = x;
            }
            for(let y26 = 0; y26 < m; y26++){
                let b23 = x[y26];
                b23[0] = y26, b23[1] = f[y26];
            }
            x.sort(Nm);
            for(let y1 = 0; y1 < 8; y1++)y1 < m && x[y1][1] ? (a[y1][0] = x[y1][0], a[y1][1] = x[y1][1]) : (a[y1][0] = Number.MAX_SAFE_INTEGER, a[y1][1] = 0);
            a.sort(Bm);
            let _ = u.morphAttributes.position, g31 = u.morphAttributes.normal, p = 0;
            for(let y2 = 0; y2 < 8; y2++){
                let b24 = a[y2], T = b24[0], R = b24[1];
                T !== Number.MAX_SAFE_INTEGER && R ? (_ && u.getAttribute("morphTarget" + y2) !== _[T] && u.setAttribute("morphTarget" + y2, _[T]), g31 && u.getAttribute("morphNormal" + y2) !== g31[T] && u.setAttribute("morphNormal" + y2, g31[T]), i[y2] = R, p += R) : (_ && u.hasAttribute("morphTarget" + y2) === !0 && u.deleteAttribute("morphTarget" + y2), g31 && u.hasAttribute("morphNormal" + y2) === !0 && u.deleteAttribute("morphNormal" + y2), i[y2] = 0);
            }
            let M = u.morphTargetsRelative ? 1 : 1 - p;
            d.getUniforms().setValue(s52, "morphTargetBaseInfluence", M), d.getUniforms().setValue(s52, "morphTargetInfluences", i);
        }
    }
    return {
        update: l
    };
}
function Om(s, e, t, n) {
    let i = new WeakMap;
    function r(l) {
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
        update: r,
        dispose: o
    };
}
var _a = class extends ct {
    constructor(e = null, t = 1, n = 1, i = 1){
        super(null);
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = at, this.minFilter = at, this.wrapR = Mt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
    }
};
_a.prototype.isDataTexture3D = !0;
var vh = new ct, Mh = new Ks, wh = new _a, bh = new Vi, Zl = [], $l = [], jl = new Float32Array(16), Kl = new Float32Array(9), Ql = new Float32Array(4);
function qi(s53, e, t) {
    let n = s53[0];
    if (n <= 0 || n > 0) return s53;
    let i = e * t, r = Zl[i];
    if (r === void 0 && (r = new Float32Array(i), Zl[i] = r), e !== 0) {
        n.toArray(r, 0);
        for(let o = 1, a = 0; o !== e; ++o)a += t, s53[o].toArray(r, a);
    }
    return r;
}
function St(s54, e) {
    if (s54.length !== e.length) return !1;
    for(let t = 0, n = s54.length; t < n; t++)if (s54[t] !== e[t]) return !1;
    return !0;
}
function bt(s55, e) {
    for(let t = 0, n = e.length; t < n; t++)s55[t] = e[t];
}
function Qs(s56, e) {
    let t = $l[e];
    t === void 0 && (t = new Int32Array(e), $l[e] = t);
    for(let n = 0; n !== e; ++n)t[n] = s56.allocateTextureUnit();
    return t;
}
function Um(s57, e) {
    let t = this.cache;
    t[0] !== e && (s57.uniform1f(this.addr, e), t[0] = e);
}
function Hm(s58, e) {
    let t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s58.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
        if (St(t, e)) return;
        s58.uniform2fv(this.addr, e), bt(t, e);
    }
}
function Gm(s59, e) {
    let t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s59.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s59.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
        if (St(t, e)) return;
        s59.uniform3fv(this.addr, e), bt(t, e);
    }
}
function km(s60, e) {
    let t = this.cache;
    if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s60.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
        if (St(t, e)) return;
        s60.uniform4fv(this.addr, e), bt(t, e);
    }
}
function Vm(s61, e) {
    let t = this.cache, n = e.elements;
    if (n === void 0) {
        if (St(t, e)) return;
        s61.uniformMatrix2fv(this.addr, !1, e), bt(t, e);
    } else {
        if (St(t, n)) return;
        Ql.set(n), s61.uniformMatrix2fv(this.addr, !1, Ql), bt(t, n);
    }
}
function Wm(s62, e) {
    let t = this.cache, n = e.elements;
    if (n === void 0) {
        if (St(t, e)) return;
        s62.uniformMatrix3fv(this.addr, !1, e), bt(t, e);
    } else {
        if (St(t, n)) return;
        Kl.set(n), s62.uniformMatrix3fv(this.addr, !1, Kl), bt(t, n);
    }
}
function qm(s63, e) {
    let t = this.cache, n = e.elements;
    if (n === void 0) {
        if (St(t, e)) return;
        s63.uniformMatrix4fv(this.addr, !1, e), bt(t, e);
    } else {
        if (St(t, n)) return;
        jl.set(n), s63.uniformMatrix4fv(this.addr, !1, jl), bt(t, n);
    }
}
function Xm(s64, e) {
    let t = this.cache;
    t[0] !== e && (s64.uniform1i(this.addr, e), t[0] = e);
}
function Jm(s65, e) {
    let t = this.cache;
    St(t, e) || (s65.uniform2iv(this.addr, e), bt(t, e));
}
function Ym(s66, e) {
    let t = this.cache;
    St(t, e) || (s66.uniform3iv(this.addr, e), bt(t, e));
}
function Zm(s67, e) {
    let t = this.cache;
    St(t, e) || (s67.uniform4iv(this.addr, e), bt(t, e));
}
function $m(s68, e) {
    let t = this.cache;
    t[0] !== e && (s68.uniform1ui(this.addr, e), t[0] = e);
}
function jm(s69, e) {
    let t = this.cache;
    St(t, e) || (s69.uniform2uiv(this.addr, e), bt(t, e));
}
function Km(s70, e) {
    let t = this.cache;
    St(t, e) || (s70.uniform3uiv(this.addr, e), bt(t, e));
}
function Qm(s71, e) {
    let t = this.cache;
    St(t, e) || (s71.uniform4uiv(this.addr, e), bt(t, e));
}
function eg(s72, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (s72.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || vh, i);
}
function tg(s73, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (s73.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || wh, i);
}
function ng(s74, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (s74.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || bh, i);
}
function ig(s75, e, t) {
    let n = this.cache, i = t.allocateTextureUnit();
    n[0] !== i && (s75.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Mh, i);
}
function rg(s76) {
    switch(s76){
        case 5126:
            return Um;
        case 35664:
            return Hm;
        case 35665:
            return Gm;
        case 35666:
            return km;
        case 35674:
            return Vm;
        case 35675:
            return Wm;
        case 35676:
            return qm;
        case 5124:
        case 35670:
            return Xm;
        case 35667:
        case 35671:
            return Jm;
        case 35668:
        case 35672:
            return Ym;
        case 35669:
        case 35673:
            return Zm;
        case 5125:
            return $m;
        case 36294:
            return jm;
        case 36295:
            return Km;
        case 36296:
            return Qm;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return eg;
        case 35679:
        case 36299:
        case 36307:
            return tg;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return ng;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return ig;
    }
}
function sg(s77, e) {
    s77.uniform1fv(this.addr, e);
}
function og(s78, e) {
    let t = qi(e, this.size, 2);
    s78.uniform2fv(this.addr, t);
}
function ag(s79, e) {
    let t = qi(e, this.size, 3);
    s79.uniform3fv(this.addr, t);
}
function lg(s80, e) {
    let t = qi(e, this.size, 4);
    s80.uniform4fv(this.addr, t);
}
function cg(s81, e) {
    let t = qi(e, this.size, 4);
    s81.uniformMatrix2fv(this.addr, !1, t);
}
function hg(s82, e) {
    let t = qi(e, this.size, 9);
    s82.uniformMatrix3fv(this.addr, !1, t);
}
function ug(s83, e) {
    let t = qi(e, this.size, 16);
    s83.uniformMatrix4fv(this.addr, !1, t);
}
function dg(s84, e) {
    s84.uniform1iv(this.addr, e);
}
function fg(s85, e) {
    s85.uniform2iv(this.addr, e);
}
function pg(s86, e) {
    s86.uniform3iv(this.addr, e);
}
function mg(s87, e) {
    s87.uniform4iv(this.addr, e);
}
function gg(s88, e) {
    s88.uniform1uiv(this.addr, e);
}
function xg(s89, e) {
    s89.uniform2uiv(this.addr, e);
}
function yg(s90, e) {
    s90.uniform3uiv(this.addr, e);
}
function _g(s91, e) {
    s91.uniform4uiv(this.addr, e);
}
function vg(s92, e, t) {
    let n = e.length, i = Qs(t, n);
    s92.uniform1iv(this.addr, i);
    for(let r = 0; r !== n; ++r)t.safeSetTexture2D(e[r] || vh, i[r]);
}
function Mg(s93, e, t) {
    let n = e.length, i = Qs(t, n);
    s93.uniform1iv(this.addr, i);
    for(let r = 0; r !== n; ++r)t.setTexture3D(e[r] || wh, i[r]);
}
function wg(s94, e, t) {
    let n = e.length, i = Qs(t, n);
    s94.uniform1iv(this.addr, i);
    for(let r = 0; r !== n; ++r)t.safeSetTextureCube(e[r] || bh, i[r]);
}
function bg(s95, e, t) {
    let n = e.length, i = Qs(t, n);
    s95.uniform1iv(this.addr, i);
    for(let r = 0; r !== n; ++r)t.setTexture2DArray(e[r] || Mh, i[r]);
}
function Sg(s96) {
    switch(s96){
        case 5126:
            return sg;
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
function Eg(s97, e, t) {
    this.id = s97, this.addr = t, this.cache = [], this.setValue = rg(e.type);
}
function Sh(s98, e, t) {
    this.id = s98, this.addr = t, this.cache = [], this.size = e.size, this.setValue = Sg(e.type);
}
Sh.prototype.updateCache = function(s99) {
    let e = this.cache;
    s99 instanceof Float32Array && e.length !== s99.length && (this.cache = new Float32Array(s99.length)), bt(e, s99);
};
function Eh(s100) {
    this.id = s100, this.seq = [], this.map = {};
}
Eh.prototype.setValue = function(s101, e, t) {
    let n = this.seq;
    for(let i = 0, r = n.length; i !== r; ++i){
        let o = n[i];
        o.setValue(s101, e[o.id], t);
    }
};
var Jo = /(\w+)(\])?(\[|\.)?/g;
function ec(s102, e) {
    s102.seq.push(e), s102.map[e.id] = e;
}
function Tg(s103, e, t) {
    let n = s103.name, i = n.length;
    for(Jo.lastIndex = 0;;){
        let r = Jo.exec(n), o = Jo.lastIndex, a = r[1], l = r[2] === "]", c = r[3];
        if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
            ec(t, c === void 0 ? new Eg(a, s103, e) : new Sh(a, s103, e));
            break;
        } else {
            let h = t.map[a];
            h === void 0 && (h = new Eh(a), ec(t, h)), t = h;
        }
    }
}
function En(s104, e) {
    this.seq = [], this.map = {};
    let t = s104.getProgramParameter(e, 35718);
    for(let n = 0; n < t; ++n){
        let i = s104.getActiveUniform(e, n), r = s104.getUniformLocation(e, i.name);
        Tg(i, r, this);
    }
}
En.prototype.setValue = function(s105, e, t, n) {
    let i = this.map[e];
    i !== void 0 && i.setValue(s105, t, n);
};
En.prototype.setOptional = function(s106, e, t) {
    let n = e[t];
    n !== void 0 && this.setValue(s106, t, n);
};
En.upload = function(s107, e, t, n) {
    for(let i = 0, r = e.length; i !== r; ++i){
        let o = e[i], a = t[o.id];
        a.needsUpdate !== !1 && o.setValue(s107, a.value, n);
    }
};
En.seqWithValue = function(s108, e) {
    let t = [];
    for(let n = 0, i = s108.length; n !== i; ++n){
        let r = s108[n];
        r.id in e && t.push(r);
    }
    return t;
};
function tc(s109, e, t) {
    let n = s109.createShader(e);
    return s109.shaderSource(n, t), s109.compileShader(n), n;
}
var Ag = 0;
function Rg(s110) {
    let e = s110.split(`
`);
    for(let t = 0; t < e.length; t++)e[t] = t + 1 + ": " + e[t];
    return e.join(`
`);
}
function Cg(s111) {
    switch(s111){
        case Tn:
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
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", s111), [
                "Linear",
                "( value )"
            ];
    }
}
function nc(s112, e, t) {
    let n = s112.getShaderParameter(e, 35713), i = s112.getShaderInfoLog(e).trim();
    return n && i === "" ? "" : t.toUpperCase() + `

` + i + `

` + Rg(s112.getShaderSource(e));
}
function Lg(s113, e) {
    let t = Cg(e);
    return "vec4 " + s113 + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Pg(s114, e) {
    let t;
    switch(e){
        case qu:
            t = "Linear";
            break;
        case Xu:
            t = "Reinhard";
            break;
        case Ju:
            t = "OptimizedCineon";
            break;
        case Yu:
            t = "ACESFilmic";
            break;
        case Zu:
            t = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
    }
    return "vec3 " + s114 + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Dg(s115) {
    return [
        s115.extensionDerivatives || s115.envMapCubeUV || s115.bumpMap || s115.tangentSpaceNormalMap || s115.clearcoatNormalMap || s115.flatShading || s115.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
        (s115.extensionFragDepth || s115.logarithmicDepthBuffer) && s115.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
        s115.extensionDrawBuffers && s115.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
        (s115.extensionShaderTextureLOD || s115.envMap || s115.transmission) && s115.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
    ].filter(sr).join(`
`);
}
function Ig(s116) {
    let e = [];
    for(let t in s116){
        let n = s116[t];
        n !== !1 && e.push("#define " + t + " " + n);
    }
    return e.join(`
`);
}
function Fg(s117, e) {
    let t = {}, n = s117.getProgramParameter(e, 35721);
    for(let i = 0; i < n; i++){
        let r = s117.getActiveAttrib(e, i), o = r.name, a = 1;
        r.type === 35674 && (a = 2), r.type === 35675 && (a = 3), r.type === 35676 && (a = 4), t[o] = {
            type: r.type,
            location: s117.getAttribLocation(e, o),
            locationSize: a
        };
    }
    return t;
}
function sr(s118) {
    return s118 !== "";
}
function ic(s119, e) {
    return s119.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function rc(s120, e) {
    return s120.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
var Bg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ca(s121) {
    return s121.replace(Bg, Ng);
}
function Ng(s, e) {
    let t = Ie[e];
    if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
    return ca(t);
}
var zg = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, Og = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function sc(s122) {
    return s122.replace(Og, Th).replace(zg, Ug);
}
function Ug(s123, e, t, n) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Th(s123, e, t, n);
}
function Th(s, e, t, n) {
    let i = "";
    for(let r = parseInt(e); r < parseInt(t); r++)i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
    return i;
}
function oc(s124) {
    let e = "precision " + s124.precision + ` float;
precision ` + s124.precision + " int;";
    return s124.precision === "highp" ? e += `
#define HIGH_PRECISION` : s124.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s124.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Hg(s125) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return s125.shadowMapType === Qc ? e = "SHADOWMAP_TYPE_PCF" : s125.shadowMapType === bu ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s125.shadowMapType === rr && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Gg(s126) {
    let e = "ENVMAP_TYPE_CUBE";
    if (s126.envMap) switch(s126.envMapMode){
        case Ui:
        case Hi:
            e = "ENVMAP_TYPE_CUBE";
            break;
        case Ir:
        case qs:
            e = "ENVMAP_TYPE_CUBE_UV";
            break;
    }
    return e;
}
function kg(s127) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (s127.envMap) switch(s127.envMapMode){
        case Hi:
        case qs:
            e = "ENVMAP_MODE_REFRACTION";
            break;
    }
    return e;
}
function Vg(s128) {
    let e = "ENVMAP_BLENDING_NONE";
    if (s128.envMap) switch(s128.combine){
        case Ws:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case Vu:
            e = "ENVMAP_BLENDING_MIX";
            break;
        case Wu:
            e = "ENVMAP_BLENDING_ADD";
            break;
    }
    return e;
}
function Wg(s129, e, t, n) {
    let i = s129.getContext(), r = t.defines, o = t.vertexShader, a = t.fragmentShader, l = Hg(t), c = Gg(t), u = kg(t), h = Vg(t), d = t.isWebGL2 ? "" : Dg(t), f = Ig(r), m = i.createProgram(), x, _, g32 = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (x = [
        f
    ].filter(sr).join(`
`), x.length > 0 && (x += `
`), _ = [
        d,
        f
    ].filter(sr).join(`
`), _.length > 0 && (_ += `
`)) : (x = [
        oc(t),
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
    ].filter(sr).join(`
`), _ = [
        d,
        oc(t),
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
        t.toneMapping !== wn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== wn ? Ie.tonemapping_pars_fragment : "",
        t.toneMapping !== wn ? Pg("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.alphaWrite ? "" : "#define OPAQUE",
        Ie.encodings_pars_fragment,
        Lg("linearToOutputTexel", t.outputEncoding),
        t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`
    ].filter(sr).join(`
`)), o = ca(o), o = ic(o, t), o = rc(o, t), a = ca(a), a = ic(a, t), a = rc(a, t), o = sc(o), a = sc(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (g32 = `#version 300 es
`, x = [
        "precision mediump sampler2DArray;",
        "#define attribute in",
        "#define varying out",
        "#define texture2D texture"
    ].join(`
`) + `
` + x, _ = [
        "#define varying in",
        t.glslVersion === Ll ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
        t.glslVersion === Ll ? "" : "#define gl_FragColor pc_fragColor",
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
    let p = g32 + x + o, M = g32 + _ + a, y27 = tc(i, 35633, p), b25 = tc(i, 35632, M);
    if (i.attachShader(m, y27), i.attachShader(m, b25), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m), s129.debug.checkShaderErrors) {
        let P11 = i.getProgramInfoLog(m).trim(), H = i.getShaderInfoLog(y27).trim(), N = i.getShaderInfoLog(b25).trim(), v = !0, C = !0;
        if (i.getProgramParameter(m, 35714) === !1) {
            v = !1;
            let D25 = nc(i, y27, "vertex"), B = nc(i, b25, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, 35715) + `

Program Info Log: ` + P11 + `
` + D25 + `
` + B);
        } else P11 !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", P11) : (H === "" || N === "") && (C = !1);
        C && (this.diagnostics = {
            runnable: v,
            programLog: P11,
            vertexShader: {
                log: H,
                prefix: x
            },
            fragmentShader: {
                log: N,
                prefix: _
            }
        });
    }
    i.deleteShader(y27), i.deleteShader(b25);
    let T;
    this.getUniforms = function() {
        return T === void 0 && (T = new En(i, m)), T;
    };
    let R;
    return this.getAttributes = function() {
        return R === void 0 && (R = Fg(i, m)), R;
    }, this.destroy = function() {
        n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
    }, this.name = t.shaderName, this.id = Ag++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = y27, this.fragmentShader = b25, this;
}
var qg = 0, Ah = class {
    constructor(){
        this.shaderCache = new Map, this.materialCache = new Map;
    }
    update(e) {
        let t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
        return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
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
            let n = new Rh;
            t.set(e, n);
        }
        return t.get(e);
    }
}, Rh = class {
    constructor(){
        this.id = qg++, this.usedTimes = 0;
    }
};
function Xg(s130, e, t, n, i, r, o) {
    let a = new Js, l = new Ah, c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, d = i.floatVertexTextures, f = i.maxVertexUniforms, m = i.vertexTextures, x = i.precision, _ = {
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
    function g33(v) {
        let D26 = v.skeleton.bones;
        if (d) return 1024;
        {
            let z = Math.floor((f - 20) / 4), F = Math.min(z, D26.length);
            return F < D26.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + D26.length + " bones. This GPU supports " + F + "."), 0) : F;
        }
    }
    function p(v, C, D27, B, z) {
        let F = B.fog, W = v.isMeshStandardMaterial ? B.environment : null, j = (v.isMeshStandardMaterial ? t : e).get(v.envMap || W), ue = _[v.type], k = z.isSkinnedMesh ? g33(z) : 0;
        v.precision !== null && (x = i.getMaxPrecision(v.precision), x !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", x, "instead."));
        let $, re4, pe5, ye3;
        if (ue) {
            let le4 = Jt[ue];
            $ = le4.vertexShader, re4 = le4.fragmentShader;
        } else $ = v.vertexShader, re4 = v.fragmentShader, l.update(v), pe5 = l.getVertexShaderID(v), ye3 = l.getFragmentShaderID(v);
        let G3 = s130.getRenderTarget(), Ge = v.alphaTest > 0, ge = v.clearcoat > 0;
        return {
            isWebGL2: u,
            shaderID: ue,
            shaderName: v.type,
            vertexShader: $,
            fragmentShader: re4,
            defines: v.defines,
            customVertexShaderID: pe5,
            customFragmentShaderID: ye3,
            isRawShaderMaterial: v.isRawShaderMaterial === !0,
            glslVersion: v.glslVersion,
            precision: x,
            instancing: z.isInstancedMesh === !0,
            instancingColor: z.isInstancedMesh === !0 && z.instanceColor !== null,
            supportsVertexTextures: m,
            outputEncoding: G3 === null ? s130.outputEncoding : G3.isXRRenderTarget === !0 ? G3.texture.encoding : Tn,
            map: !!v.map,
            matcap: !!v.matcap,
            envMap: !!j,
            envMapMode: j && j.mapping,
            envMapCubeUV: !!j && (j.mapping === Ir || j.mapping === qs),
            lightMap: !!v.lightMap,
            aoMap: !!v.aoMap,
            emissiveMap: !!v.emissiveMap,
            bumpMap: !!v.bumpMap,
            normalMap: !!v.normalMap,
            objectSpaceNormalMap: v.normalMapType === gd,
            tangentSpaceNormalMap: v.normalMapType === ki,
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
            alphaTest: Ge,
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
            shadowMapEnabled: s130.shadowMap.enabled && D27.length > 0,
            shadowMapType: s130.shadowMap.type,
            toneMapping: v.toneMapped ? s130.toneMapping : wn,
            physicallyCorrectLights: s130.physicallyCorrectLights,
            premultipliedAlpha: v.premultipliedAlpha,
            doubleSided: v.side === Pi,
            flipSided: v.side === ot,
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
        if (v.shaderID ? C.push(v.shaderID) : (C.push(v.customVertexShaderID), C.push(v.customFragmentShaderID)), v.defines !== void 0) for(let D28 in v.defines)C.push(D28), C.push(v.defines[D28]);
        return v.isRawShaderMaterial === !1 && (y28(C, v), b26(C, v), C.push(s130.outputEncoding)), C.push(v.customProgramCacheKey), C.join();
    }
    function y28(v, C) {
        v.push(C.precision), v.push(C.outputEncoding), v.push(C.envMapMode), v.push(C.combine), v.push(C.vertexUvs), v.push(C.fogExp2), v.push(C.sizeAttenuation), v.push(C.maxBones), v.push(C.morphTargetsCount), v.push(C.numDirLights), v.push(C.numPointLights), v.push(C.numSpotLights), v.push(C.numHemiLights), v.push(C.numRectAreaLights), v.push(C.numDirLightShadows), v.push(C.numPointLightShadows), v.push(C.numSpotLightShadows), v.push(C.shadowMapType), v.push(C.toneMapping), v.push(C.numClippingPlanes), v.push(C.numClipIntersection), v.push(C.alphaWrite);
    }
    function b26(v, C) {
        a.disableAll(), C.isWebGL2 && a.enable(0), C.supportsVertexTextures && a.enable(1), C.instancing && a.enable(2), C.instancingColor && a.enable(3), C.map && a.enable(4), C.matcap && a.enable(5), C.envMap && a.enable(6), C.envMapCubeUV && a.enable(7), C.lightMap && a.enable(8), C.aoMap && a.enable(9), C.emissiveMap && a.enable(10), C.bumpMap && a.enable(11), C.normalMap && a.enable(12), C.objectSpaceNormalMap && a.enable(13), C.tangentSpaceNormalMap && a.enable(14), C.clearcoat && a.enable(15), C.clearcoatMap && a.enable(16), C.clearcoatRoughnessMap && a.enable(17), C.clearcoatNormalMap && a.enable(18), C.displacementMap && a.enable(19), C.specularMap && a.enable(20), C.roughnessMap && a.enable(21), C.metalnessMap && a.enable(22), C.gradientMap && a.enable(23), C.alphaMap && a.enable(24), C.alphaTest && a.enable(25), C.vertexColors && a.enable(26), C.vertexAlphas && a.enable(27), C.vertexUvs && a.enable(28), C.vertexTangents && a.enable(29), C.uvsVertexOnly && a.enable(30), C.fog && a.enable(31), v.push(a.mask), a.disableAll(), C.useFog && a.enable(0), C.flatShading && a.enable(1), C.logarithmicDepthBuffer && a.enable(2), C.skinning && a.enable(3), C.useVertexTexture && a.enable(4), C.morphTargets && a.enable(5), C.morphNormals && a.enable(6), C.premultipliedAlpha && a.enable(7), C.shadowMapEnabled && a.enable(8), C.physicallyCorrectLights && a.enable(9), C.doubleSided && a.enable(10), C.flipSided && a.enable(11), C.depthPacking && a.enable(12), C.dithering && a.enable(13), C.specularIntensityMap && a.enable(14), C.specularColorMap && a.enable(15), C.transmission && a.enable(16), C.transmissionMap && a.enable(17), C.thicknessMap && a.enable(18), C.sheen && a.enable(19), C.sheenColorMap && a.enable(20), C.sheenRoughnessMap && a.enable(21), C.decodeVideoTexture && a.enable(22), v.push(a.mask);
    }
    function T(v) {
        let C = _[v.type], D29;
        if (C) {
            let B = Jt[C];
            D29 = Vd.clone(B.uniforms);
        } else D29 = v.uniforms;
        return D29;
    }
    function R(v, C) {
        let D30;
        for(let B = 0, z = c.length; B < z; B++){
            let F = c[B];
            if (F.cacheKey === C) {
                D30 = F, ++D30.usedTimes;
                break;
            }
        }
        return D30 === void 0 && (D30 = new Wg(s130, C, v, r), c.push(D30)), D30;
    }
    function P12(v) {
        if (--v.usedTimes === 0) {
            let C = c.indexOf(v);
            c[C] = c[c.length - 1], c.pop(), v.destroy();
        }
    }
    function H(v) {
        l.remove(v);
    }
    function N() {
        l.dispose();
    }
    return {
        getParameters: p,
        getProgramCacheKey: M,
        getUniforms: T,
        acquireProgram: R,
        releaseProgram: P12,
        releaseShaderCache: H,
        programs: c,
        dispose: N
    };
}
function Jg() {
    let s131 = new WeakMap;
    function e(r) {
        let o = s131.get(r);
        return o === void 0 && (o = {}, s131.set(r, o)), o;
    }
    function t(r) {
        s131.delete(r);
    }
    function n(r, o, a) {
        s131.get(r)[o] = a;
    }
    function i() {
        s131 = new WeakMap;
    }
    return {
        get: e,
        remove: t,
        update: n,
        dispose: i
    };
}
function Yg(s132, e) {
    return s132.groupOrder !== e.groupOrder ? s132.groupOrder - e.groupOrder : s132.renderOrder !== e.renderOrder ? s132.renderOrder - e.renderOrder : s132.material.id !== e.material.id ? s132.material.id - e.material.id : s132.z !== e.z ? s132.z - e.z : s132.id - e.id;
}
function ac(s133, e) {
    return s133.groupOrder !== e.groupOrder ? s133.groupOrder - e.groupOrder : s133.renderOrder !== e.renderOrder ? s133.renderOrder - e.renderOrder : s133.z !== e.z ? e.z - s133.z : s133.id - e.id;
}
function lc() {
    let s134 = [], e = 0, t = [], n = [], i = [];
    function r() {
        e = 0, t.length = 0, n.length = 0, i.length = 0;
    }
    function o(h, d, f, m, x, _) {
        let g34 = s134[e];
        return g34 === void 0 ? (g34 = {
            id: h.id,
            object: h,
            geometry: d,
            material: f,
            groupOrder: m,
            renderOrder: h.renderOrder,
            z: x,
            group: _
        }, s134[e] = g34) : (g34.id = h.id, g34.object = h, g34.geometry = d, g34.material = f, g34.groupOrder = m, g34.renderOrder = h.renderOrder, g34.z = x, g34.group = _), e++, g34;
    }
    function a(h, d, f, m, x, _) {
        let g35 = o(h, d, f, m, x, _);
        f.transmission > 0 ? n.push(g35) : f.transparent === !0 ? i.push(g35) : t.push(g35);
    }
    function l(h, d, f, m, x, _) {
        let g36 = o(h, d, f, m, x, _);
        f.transmission > 0 ? n.unshift(g36) : f.transparent === !0 ? i.unshift(g36) : t.unshift(g36);
    }
    function c(h, d) {
        t.length > 1 && t.sort(h || Yg), n.length > 1 && n.sort(d || ac), i.length > 1 && i.sort(d || ac);
    }
    function u() {
        for(let h = e, d = s134.length; h < d; h++){
            let f = s134[h];
            if (f.id === null) break;
            f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: i,
        init: r,
        push: a,
        unshift: l,
        finish: u,
        sort: c
    };
}
function Zg() {
    let s135 = new WeakMap;
    function e(n, i) {
        let r;
        return s135.has(n) === !1 ? (r = new lc, s135.set(n, [
            r
        ])) : i >= s135.get(n).length ? (r = new lc, s135.get(n).push(r)) : r = s135.get(n)[i], r;
    }
    function t() {
        s135 = new WeakMap;
    }
    return {
        get: e,
        dispose: t
    };
}
function $g() {
    let s136 = {};
    return {
        get: function(e) {
            if (s136[e.id] !== void 0) return s136[e.id];
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
            return s136[e.id] = t, t;
        }
    };
}
function jg() {
    let s137 = {};
    return {
        get: function(e) {
            if (s137[e.id] !== void 0) return s137[e.id];
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
                        shadowCameraFar: 1000
                    };
                    break;
            }
            return s137[e.id] = t, t;
        }
    };
}
var Kg = 0;
function Qg(s138, e) {
    return (e.castShadow ? 1 : 0) - (s138.castShadow ? 1 : 0);
}
function ex(s139, e) {
    let t = new $g, n = jg(), i = {
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
    for(let u1 = 0; u1 < 9; u1++)i.probe.push(new w);
    let r = new w, o = new de, a = new de;
    function l(u, h) {
        let d = 0, f = 0, m = 0;
        for(let H = 0; H < 9; H++)i.probe[H].set(0, 0, 0);
        let x = 0, _ = 0, g37 = 0, p = 0, M = 0, y29 = 0, b27 = 0, T = 0;
        u.sort(Qg);
        let R = h !== !0 ? Math.PI : 1;
        for(let H1 = 0, N = u.length; H1 < N; H1++){
            let v = u[H1], C = v.color, D31 = v.intensity, B = v.distance, z = v.shadow && v.shadow.map ? v.shadow.map.texture : null;
            if (v.isAmbientLight) d += C.r * D31 * R, f += C.g * D31 * R, m += C.b * D31 * R;
            else if (v.isLightProbe) for(let F = 0; F < 9; F++)i.probe[F].addScaledVector(v.sh.coefficients[F], D31);
            else if (v.isDirectionalLight) {
                let F = t.get(v);
                if (F.color.copy(v.color).multiplyScalar(v.intensity * R), v.castShadow) {
                    let W = v.shadow, j = n.get(v);
                    j.shadowBias = W.bias, j.shadowNormalBias = W.normalBias, j.shadowRadius = W.radius, j.shadowMapSize = W.mapSize, i.directionalShadow[x] = j, i.directionalShadowMap[x] = z, i.directionalShadowMatrix[x] = v.shadow.matrix, y29++;
                }
                i.directional[x] = F, x++;
            } else if (v.isSpotLight) {
                let F = t.get(v);
                if (F.position.setFromMatrixPosition(v.matrixWorld), F.color.copy(C).multiplyScalar(D31 * R), F.distance = B, F.coneCos = Math.cos(v.angle), F.penumbraCos = Math.cos(v.angle * (1 - v.penumbra)), F.decay = v.decay, v.castShadow) {
                    let W = v.shadow, j = n.get(v);
                    j.shadowBias = W.bias, j.shadowNormalBias = W.normalBias, j.shadowRadius = W.radius, j.shadowMapSize = W.mapSize, i.spotShadow[g37] = j, i.spotShadowMap[g37] = z, i.spotShadowMatrix[g37] = v.shadow.matrix, T++;
                }
                i.spot[g37] = F, g37++;
            } else if (v.isRectAreaLight) {
                let F = t.get(v);
                F.color.copy(C).multiplyScalar(D31), F.halfWidth.set(v.width * 0.5, 0, 0), F.halfHeight.set(0, v.height * 0.5, 0), i.rectArea[p] = F, p++;
            } else if (v.isPointLight) {
                let F = t.get(v);
                if (F.color.copy(v.color).multiplyScalar(v.intensity * R), F.distance = v.distance, F.decay = v.decay, v.castShadow) {
                    let W = v.shadow, j = n.get(v);
                    j.shadowBias = W.bias, j.shadowNormalBias = W.normalBias, j.shadowRadius = W.radius, j.shadowMapSize = W.mapSize, j.shadowCameraNear = W.camera.near, j.shadowCameraFar = W.camera.far, i.pointShadow[_] = j, i.pointShadowMap[_] = z, i.pointShadowMatrix[_] = v.shadow.matrix, b27++;
                }
                i.point[_] = F, _++;
            } else if (v.isHemisphereLight) {
                let F = t.get(v);
                F.skyColor.copy(v.color).multiplyScalar(D31 * R), F.groundColor.copy(v.groundColor).multiplyScalar(D31 * R), i.hemi[M] = F, M++;
            }
        }
        p > 0 && (e.isWebGL2 || s139.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_FLOAT_1, i.rectAreaLTC2 = te.LTC_FLOAT_2) : s139.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_HALF_1, i.rectAreaLTC2 = te.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = f, i.ambient[2] = m;
        let P13 = i.hash;
        (P13.directionalLength !== x || P13.pointLength !== _ || P13.spotLength !== g37 || P13.rectAreaLength !== p || P13.hemiLength !== M || P13.numDirectionalShadows !== y29 || P13.numPointShadows !== b27 || P13.numSpotShadows !== T) && (i.directional.length = x, i.spot.length = g37, i.rectArea.length = p, i.point.length = _, i.hemi.length = M, i.directionalShadow.length = y29, i.directionalShadowMap.length = y29, i.pointShadow.length = b27, i.pointShadowMap.length = b27, i.spotShadow.length = T, i.spotShadowMap.length = T, i.directionalShadowMatrix.length = y29, i.pointShadowMatrix.length = b27, i.spotShadowMatrix.length = T, P13.directionalLength = x, P13.pointLength = _, P13.spotLength = g37, P13.rectAreaLength = p, P13.hemiLength = M, P13.numDirectionalShadows = y29, P13.numPointShadows = b27, P13.numSpotShadows = T, i.version = Kg++);
    }
    function c(u, h) {
        let d = 0, f = 0, m = 0, x = 0, _ = 0, g38 = h.matrixWorldInverse;
        for(let p = 0, M = u.length; p < M; p++){
            let y30 = u[p];
            if (y30.isDirectionalLight) {
                let b28 = i.directional[d];
                b28.direction.setFromMatrixPosition(y30.matrixWorld), r.setFromMatrixPosition(y30.target.matrixWorld), b28.direction.sub(r), b28.direction.transformDirection(g38), d++;
            } else if (y30.isSpotLight) {
                let b29 = i.spot[m];
                b29.position.setFromMatrixPosition(y30.matrixWorld), b29.position.applyMatrix4(g38), b29.direction.setFromMatrixPosition(y30.matrixWorld), r.setFromMatrixPosition(y30.target.matrixWorld), b29.direction.sub(r), b29.direction.transformDirection(g38), m++;
            } else if (y30.isRectAreaLight) {
                let b30 = i.rectArea[x];
                b30.position.setFromMatrixPosition(y30.matrixWorld), b30.position.applyMatrix4(g38), a.identity(), o.copy(y30.matrixWorld), o.premultiply(g38), a.extractRotation(o), b30.halfWidth.set(y30.width * 0.5, 0, 0), b30.halfHeight.set(0, y30.height * 0.5, 0), b30.halfWidth.applyMatrix4(a), b30.halfHeight.applyMatrix4(a), x++;
            } else if (y30.isPointLight) {
                let b31 = i.point[f];
                b31.position.setFromMatrixPosition(y30.matrixWorld), b31.position.applyMatrix4(g38), f++;
            } else if (y30.isHemisphereLight) {
                let b32 = i.hemi[_];
                b32.direction.setFromMatrixPosition(y30.matrixWorld), b32.direction.transformDirection(g38), b32.direction.normalize(), _++;
            }
        }
    }
    return {
        setup: l,
        setupView: c,
        state: i
    };
}
function cc(s140, e) {
    let t = new ex(s140, e), n = [], i = [];
    function r() {
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
        init: r,
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
function tx(s141, e) {
    let t = new WeakMap;
    function n(r, o = 0) {
        let a;
        return t.has(r) === !1 ? (a = new cc(s141, e), t.set(r, [
            a
        ])) : o >= t.get(r).length ? (a = new cc(s141, e), t.get(r).push(a)) : a = t.get(r)[o], a;
    }
    function i() {
        t = new WeakMap;
    }
    return {
        get: n,
        dispose: i
    };
}
var eo = class extends pt {
    constructor(e){
        super();
        this.type = "MeshDepthMaterial", this.depthPacking = pd, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
    }
};
eo.prototype.isMeshDepthMaterial = !0;
var to = class extends pt {
    constructor(e){
        super();
        this.type = "MeshDistanceMaterial", this.referencePosition = new w, this.nearDistance = 1, this.farDistance = 1000, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
    }
};
to.prototype.isMeshDistanceMaterial = !0;
var nx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ix = `uniform sampler2D shadow_pass;
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
function Ch(s142, e, t) {
    let n = new Br, i = new Z, r = new Z, o = new We, a = new eo({
        depthPacking: md
    }), l = new to, c = {}, u = t.maxTextureSize, h = {
        0: ot,
        1: Li,
        2: Pi
    }, d = new on({
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
        vertexShader: nx,
        fragmentShader: ix
    }), f = d.clone();
    f.defines.HORIZONTAL_PASS = 1;
    let m = new Me;
    m.setAttribute("position", new ze(new Float32Array([
        -1,
        -1,
        0.5,
        3,
        -1,
        0.5,
        -1,
        3,
        0.5
    ]), 3));
    let x = new lt(m, d), _ = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Qc, this.render = function(y31, b33, T) {
        if (_.enabled === !1 || _.autoUpdate === !1 && _.needsUpdate === !1 || y31.length === 0) return;
        let R = s142.getRenderTarget(), P14 = s142.getActiveCubeFace(), H = s142.getActiveMipmapLevel(), N = s142.state;
        N.setBlending(Mn), N.buffers.color.setClear(1, 1, 1, 1), N.buffers.depth.setTest(!0), N.setScissorTest(!1);
        for(let v = 0, C = y31.length; v < C; v++){
            let D32 = y31[v], B = D32.shadow;
            if (B === void 0) {
                console.warn("THREE.WebGLShadowMap:", D32, "has no shadow.");
                continue;
            }
            if (B.autoUpdate === !1 && B.needsUpdate === !1) continue;
            i.copy(B.mapSize);
            let z = B.getFrameExtents();
            if (i.multiply(z), r.copy(B.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / z.x), i.x = r.x * z.x, B.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / z.y), i.y = r.y * z.y, B.mapSize.y = r.y)), B.map === null && !B.isPointLightShadow && this.type === rr) {
                let W = {
                    minFilter: nt,
                    magFilter: nt,
                    format: wt
                };
                B.map = new Pt(i.x, i.y, W), B.map.texture.name = D32.name + ".shadowMap", B.mapPass = new Pt(i.x, i.y, W), B.camera.updateProjectionMatrix();
            }
            if (B.map === null) {
                let W = {
                    minFilter: at,
                    magFilter: at,
                    format: wt
                };
                B.map = new Pt(i.x, i.y, W), B.map.texture.name = D32.name + ".shadowMap", B.camera.updateProjectionMatrix();
            }
            s142.setRenderTarget(B.map), s142.clear();
            let F = B.getViewportCount();
            for(let W = 0; W < F; W++){
                let j = B.getViewport(W);
                o.set(r.x * j.x, r.y * j.y, r.x * j.z, r.y * j.w), N.viewport(o), B.updateMatrices(D32, W), n = B.getFrustum(), M(b33, T, B.camera, D32, this.type);
            }
            !B.isPointLightShadow && this.type === rr && g39(B, T), B.needsUpdate = !1;
        }
        _.needsUpdate = !1, s142.setRenderTarget(R, P14, H);
    };
    function g39(y32, b34) {
        let T = e.update(x);
        d.defines.VSM_SAMPLES !== y32.blurSamples && (d.defines.VSM_SAMPLES = y32.blurSamples, f.defines.VSM_SAMPLES = y32.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), d.uniforms.shadow_pass.value = y32.map.texture, d.uniforms.resolution.value = y32.mapSize, d.uniforms.radius.value = y32.radius, s142.setRenderTarget(y32.mapPass), s142.clear(), s142.renderBufferDirect(b34, null, T, d, x, null), f.uniforms.shadow_pass.value = y32.mapPass.texture, f.uniforms.resolution.value = y32.mapSize, f.uniforms.radius.value = y32.radius, s142.setRenderTarget(y32.map), s142.clear(), s142.renderBufferDirect(b34, null, T, f, x, null);
    }
    function p(y33, b, T, R, P15, H, N) {
        let v = null, C = R.isPointLight === !0 ? y33.customDistanceMaterial : y33.customDepthMaterial;
        if (C !== void 0 ? v = C : v = R.isPointLight === !0 ? l : a, s142.localClippingEnabled && T.clipShadows === !0 && T.clippingPlanes.length !== 0 || T.displacementMap && T.displacementScale !== 0 || T.alphaMap && T.alphaTest > 0) {
            let D33 = v.uuid, B = T.uuid, z = c[D33];
            z === void 0 && (z = {}, c[D33] = z);
            let F = z[B];
            F === void 0 && (F = v.clone(), z[B] = F), v = F;
        }
        return v.visible = T.visible, v.wireframe = T.wireframe, N === rr ? v.side = T.shadowSide !== null ? T.shadowSide : T.side : v.side = T.shadowSide !== null ? T.shadowSide : h[T.side], v.alphaMap = T.alphaMap, v.alphaTest = T.alphaTest, v.clipShadows = T.clipShadows, v.clippingPlanes = T.clippingPlanes, v.clipIntersection = T.clipIntersection, v.displacementMap = T.displacementMap, v.displacementScale = T.displacementScale, v.displacementBias = T.displacementBias, v.wireframeLinewidth = T.wireframeLinewidth, v.linewidth = T.linewidth, R.isPointLight === !0 && v.isMeshDistanceMaterial === !0 && (v.referencePosition.setFromMatrixPosition(R.matrixWorld), v.nearDistance = P15, v.farDistance = H), v;
    }
    function M(y34, b35, T, R, P16) {
        if (y34.visible === !1) return;
        if (y34.layers.test(b35.layers) && (y34.isMesh || y34.isLine || y34.isPoints) && (y34.castShadow || y34.receiveShadow && P16 === rr) && (!y34.frustumCulled || n.intersectsObject(y34))) {
            y34.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, y34.matrixWorld);
            let v = e.update(y34), C = y34.material;
            if (Array.isArray(C)) {
                let D34 = v.groups;
                for(let B = 0, z = D34.length; B < z; B++){
                    let F = D34[B], W = C[F.materialIndex];
                    if (W && W.visible) {
                        let j = p(y34, v, W, R, T.near, T.far, P16);
                        s142.renderBufferDirect(T, null, v, j, y34, F);
                    }
                }
            } else if (C.visible) {
                let D35 = p(y34, v, C, R, T.near, T.far, P16);
                s142.renderBufferDirect(T, null, v, D35, y34, null);
            }
        }
        let N = y34.children;
        for(let v = 0, C = N.length; v < C; v++)M(N[v], b35, T, R, P16);
    }
}
function rx(s143, e, t) {
    let n = t.isWebGL2;
    function i() {
        let L = !1, fe = new We, ae1 = null, be1 = new We(0, 0, 0, 0);
        return {
            setMask: function(J1) {
                ae1 !== J1 && !L && (s143.colorMask(J1, J1, J1, J1), ae1 = J1);
            },
            setLocked: function(J2) {
                L = J2;
            },
            setClear: function(J3, ve1, Be, je, At) {
                At === !0 && (J3 *= je, ve1 *= je, Be *= je), fe.set(J3, ve1, Be, je), be1.equals(fe) === !1 && (s143.clearColor(J3, ve1, Be, je), be1.copy(fe));
            },
            reset: function() {
                L = !1, ae1 = null, be1.set(-1, 0, 0, 0);
            }
        };
    }
    function r() {
        let L = !1, fe = null, ae2 = null, be2 = null;
        return {
            setTest: function(J4) {
                J4 ? G4(2929) : Ge(2929);
            },
            setMask: function(J5) {
                fe !== J5 && !L && (s143.depthMask(J5), fe = J5);
            },
            setFunc: function(J6) {
                if (ae2 !== J6) {
                    if (J6) switch(J6){
                        case Nu:
                            s143.depthFunc(512);
                            break;
                        case zu:
                            s143.depthFunc(519);
                            break;
                        case Ou:
                            s143.depthFunc(513);
                            break;
                        case ia:
                            s143.depthFunc(515);
                            break;
                        case Uu:
                            s143.depthFunc(514);
                            break;
                        case Hu:
                            s143.depthFunc(518);
                            break;
                        case Gu:
                            s143.depthFunc(516);
                            break;
                        case ku:
                            s143.depthFunc(517);
                            break;
                        default:
                            s143.depthFunc(515);
                    }
                    else s143.depthFunc(515);
                    ae2 = J6;
                }
            },
            setLocked: function(J7) {
                L = J7;
            },
            setClear: function(J8) {
                be2 !== J8 && (s143.clearDepth(J8), be2 = J8);
            },
            reset: function() {
                L = !1, fe = null, ae2 = null, be2 = null;
            }
        };
    }
    function o() {
        let L = !1, fe = null, ae3 = null, be3 = null, J9 = null, ve2 = null, Be = null, je = null, At = null;
        return {
            setTest: function(Qe) {
                L || (Qe ? G4(2960) : Ge(2960));
            },
            setMask: function(Qe) {
                fe !== Qe && !L && (s143.stencilMask(Qe), fe = Qe);
            },
            setFunc: function(Qe, Gt, jt) {
                (ae3 !== Qe || be3 !== Gt || J9 !== jt) && (s143.stencilFunc(Qe, Gt, jt), ae3 = Qe, be3 = Gt, J9 = jt);
            },
            setOp: function(Qe, Gt, jt) {
                (ve2 !== Qe || Be !== Gt || je !== jt) && (s143.stencilOp(Qe, Gt, jt), ve2 = Qe, Be = Gt, je = jt);
            },
            setLocked: function(Qe) {
                L = Qe;
            },
            setClear: function(Qe) {
                At !== Qe && (s143.clearStencil(Qe), At = Qe);
            },
            reset: function() {
                L = !1, fe = null, ae3 = null, be3 = null, J9 = null, ve2 = null, Be = null, je = null, At = null;
            }
        };
    }
    let a = new i, l = new r, c = new o, u = {}, h = {}, d = new WeakMap, f = [], m = null, x = !1, _ = null, g40 = null, p = null, M = null, y35 = null, b36 = null, T = null, R = !1, P17 = null, H = null, N = null, v = null, C = null, D36 = s143.getParameter(35661), B = !1, z = 0, F = s143.getParameter(7938);
    F.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(F)[1]), B = z >= 1) : F.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), B = z >= 2);
    let W = null, j = {}, ue = s143.getParameter(3088), k = s143.getParameter(2978), $ = new We().fromArray(ue), re5 = new We().fromArray(k);
    function pe6(L, fe, ae4) {
        let be4 = new Uint8Array(4), J10 = s143.createTexture();
        s143.bindTexture(L, J10), s143.texParameteri(L, 10241, 9728), s143.texParameteri(L, 10240, 9728);
        for(let ve3 = 0; ve3 < ae4; ve3++)s143.texImage2D(fe + ve3, 0, 6408, 1, 1, 0, 6408, 5121, be4);
        return J10;
    }
    let ye4 = {};
    ye4[3553] = pe6(3553, 3553, 1), ye4[34067] = pe6(34067, 34069, 6), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), G4(2929), l.setFunc(ia), K(!1), ce1(il), G4(2884), X(Mn);
    function G4(L) {
        u[L] !== !0 && (s143.enable(L), u[L] = !0);
    }
    function Ge(L) {
        u[L] !== !1 && (s143.disable(L), u[L] = !1);
    }
    function ge(L, fe) {
        return h[L] !== fe ? (s143.bindFramebuffer(L, fe), h[L] = fe, n && (L === 36009 && (h[36160] = fe), L === 36160 && (h[36009] = fe)), !0) : !1;
    }
    function Se3(L, fe) {
        let ae5 = f, be5 = !1;
        if (L) if (ae5 = d.get(fe), ae5 === void 0 && (ae5 = [], d.set(fe, ae5)), L.isWebGLMultipleRenderTargets) {
            let J11 = L.texture;
            if (ae5.length !== J11.length || ae5[0] !== 36064) {
                for(let ve4 = 0, Be = J11.length; ve4 < Be; ve4++)ae5[ve4] = 36064 + ve4;
                ae5.length = J11.length, be5 = !0;
            }
        } else ae5[0] !== 36064 && (ae5[0] = 36064, be5 = !0);
        else ae5[0] !== 1029 && (ae5[0] = 1029, be5 = !0);
        be5 && (t.isWebGL2 ? s143.drawBuffers(ae5) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae5));
    }
    function le5(L) {
        return m !== L ? (s143.useProgram(L), m = L, !0) : !1;
    }
    let Le2 = {
        [Mi]: 32774,
        [Eu]: 32778,
        [Tu]: 32779
    };
    if (n) Le2[al] = 32775, Le2[ll] = 32776;
    else {
        let L = e.get("EXT_blend_minmax");
        L !== null && (Le2[al] = L.MIN_EXT, Le2[ll] = L.MAX_EXT);
    }
    let Ee2 = {
        [Au]: 0,
        [Ru]: 1,
        [Cu]: 768,
        [th]: 770,
        [Bu]: 776,
        [Iu]: 774,
        [Pu]: 772,
        [Lu]: 769,
        [nh]: 771,
        [Fu]: 775,
        [Du]: 773
    };
    function X(L, fe, ae6, be6, J12, ve5, Be, je) {
        if (L === Mn) {
            x === !0 && (Ge(3042), x = !1);
            return;
        }
        if (x === !1 && (G4(3042), x = !0), L !== Su) {
            if (L !== _ || je !== R) {
                if ((g40 !== Mi || y35 !== Mi) && (s143.blendEquation(32774), g40 = Mi, y35 = Mi), je) switch(L){
                    case or:
                        s143.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case rl:
                        s143.blendFunc(1, 1);
                        break;
                    case sl:
                        s143.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case ol:
                        s143.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", L);
                        break;
                }
                else switch(L){
                    case or:
                        s143.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case rl:
                        s143.blendFunc(770, 1);
                        break;
                    case sl:
                        s143.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case ol:
                        s143.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", L);
                        break;
                }
                p = null, M = null, b36 = null, T = null, _ = L, R = je;
            }
            return;
        }
        J12 = J12 || fe, ve5 = ve5 || ae6, Be = Be || be6, (fe !== g40 || J12 !== y35) && (s143.blendEquationSeparate(Le2[fe], Le2[J12]), g40 = fe, y35 = J12), (ae6 !== p || be6 !== M || ve5 !== b36 || Be !== T) && (s143.blendFuncSeparate(Ee2[ae6], Ee2[be6], Ee2[ve5], Ee2[Be]), p = ae6, M = be6, b36 = ve5, T = Be), _ = L, R = null;
    }
    function ee(L, fe) {
        L.side === Pi ? Ge(2884) : G4(2884);
        let ae7 = L.side === ot;
        fe && (ae7 = !ae7), K(ae7), L.blending === or && L.transparent === !1 ? X(Mn) : X(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), l.setFunc(L.depthFunc), l.setTest(L.depthTest), l.setMask(L.depthWrite), a.setMask(L.colorWrite);
        let be7 = L.stencilWrite;
        c.setTest(be7), be7 && (c.setMask(L.stencilWriteMask), c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), we1(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? G4(32926) : Ge(32926);
    }
    function K(L) {
        P17 !== L && (L ? s143.frontFace(2304) : s143.frontFace(2305), P17 = L);
    }
    function ce1(L) {
        L !== Mu ? (G4(2884), L !== H && (L === il ? s143.cullFace(1029) : L === wu ? s143.cullFace(1028) : s143.cullFace(1032))) : Ge(2884), H = L;
    }
    function oe1(L) {
        L !== N && (B && s143.lineWidth(L), N = L);
    }
    function we1(L, fe, ae8) {
        L ? (G4(32823), (v !== fe || C !== ae8) && (s143.polygonOffset(fe, ae8), v = fe, C = ae8)) : Ge(32823);
    }
    function Te1(L) {
        L ? G4(3089) : Ge(3089);
    }
    function Ne1(L) {
        L === void 0 && (L = 33984 + D36 - 1), W !== L && (s143.activeTexture(L), W = L);
    }
    function Je(L, fe) {
        W === null && Ne1();
        let ae9 = j[W];
        ae9 === void 0 && (ae9 = {
            type: void 0,
            texture: void 0
        }, j[W] = ae9), (ae9.type !== L || ae9.texture !== fe) && (s143.bindTexture(L, fe || ye4[L]), ae9.type = L, ae9.texture = fe);
    }
    function qe() {
        let L = j[W];
        L !== void 0 && L.type !== void 0 && (s143.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
    }
    function A() {
        try {
            s143.compressedTexImage2D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function S() {
        try {
            s143.texSubImage2D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function q1() {
        try {
            s143.texSubImage3D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function Q1() {
        try {
            s143.compressedTexSubImage2D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function me1() {
        try {
            s143.texStorage2D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function V1() {
        try {
            s143.texStorage3D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function _e1() {
        try {
            s143.texImage2D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function xe1() {
        try {
            s143.texImage3D.apply(s143, arguments);
        } catch (L) {
            console.error("THREE.WebGLState:", L);
        }
    }
    function se(L) {
        $.equals(L) === !1 && (s143.scissor(L.x, L.y, L.z, L.w), $.copy(L));
    }
    function ie1(L) {
        re5.equals(L) === !1 && (s143.viewport(L.x, L.y, L.z, L.w), re5.copy(L));
    }
    function Re1() {
        s143.disable(3042), s143.disable(2884), s143.disable(2929), s143.disable(32823), s143.disable(3089), s143.disable(2960), s143.disable(32926), s143.blendEquation(32774), s143.blendFunc(1, 0), s143.blendFuncSeparate(1, 0, 1, 0), s143.colorMask(!0, !0, !0, !0), s143.clearColor(0, 0, 0, 0), s143.depthMask(!0), s143.depthFunc(513), s143.clearDepth(1), s143.stencilMask(4294967295), s143.stencilFunc(519, 0, 4294967295), s143.stencilOp(7680, 7680, 7680), s143.clearStencil(0), s143.cullFace(1029), s143.frontFace(2305), s143.polygonOffset(0, 0), s143.activeTexture(33984), s143.bindFramebuffer(36160, null), n === !0 && (s143.bindFramebuffer(36009, null), s143.bindFramebuffer(36008, null)), s143.useProgram(null), s143.lineWidth(1), s143.scissor(0, 0, s143.canvas.width, s143.canvas.height), s143.viewport(0, 0, s143.canvas.width, s143.canvas.height), u = {}, W = null, j = {}, h = {}, d = new WeakMap, f = [], m = null, x = !1, _ = null, g40 = null, p = null, M = null, y35 = null, b36 = null, T = null, R = !1, P17 = null, H = null, N = null, v = null, C = null, $.set(0, 0, s143.canvas.width, s143.canvas.height), re5.set(0, 0, s143.canvas.width, s143.canvas.height), a.reset(), l.reset(), c.reset();
    }
    return {
        buffers: {
            color: a,
            depth: l,
            stencil: c
        },
        enable: G4,
        disable: Ge,
        bindFramebuffer: ge,
        drawBuffers: Se3,
        useProgram: le5,
        setBlending: X,
        setMaterial: ee,
        setFlipSided: K,
        setCullFace: ce1,
        setLineWidth: oe1,
        setPolygonOffset: we1,
        setScissorTest: Te1,
        activeTexture: Ne1,
        bindTexture: Je,
        unbindTexture: qe,
        compressedTexImage2D: A,
        texImage2D: _e1,
        texImage3D: xe1,
        texStorage2D: me1,
        texStorage3D: V1,
        texSubImage2D: S,
        texSubImage3D: q1,
        compressedTexSubImage2D: Q1,
        scissor: se,
        viewport: ie1,
        reset: Re1
    };
}
function sx(s144, e, t, n, i, r, o) {
    let a = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : void 0, m = new WeakMap, x, _ = !1;
    try {
        _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
    } catch  {}
    function g41(A, S) {
        return _ ? new OffscreenCanvas(A, S) : pr("canvas");
    }
    function p(A, S, q2, Q2) {
        let me2 = 1;
        if ((A.width > Q2 || A.height > Q2) && (me2 = Q2 / Math.max(A.width, A.height)), me2 < 1 || S === !0) if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap) {
            let V2 = S ? oh : Math.floor, _e2 = V2(me2 * A.width), xe2 = V2(me2 * A.height);
            x === void 0 && (x = g41(_e2, xe2));
            let se = q2 ? g41(_e2, xe2) : x;
            return se.width = _e2, se.height = xe2, se.getContext("2d").drawImage(A, 0, 0, _e2, xe2), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + A.width + "x" + A.height + ") to (" + _e2 + "x" + xe2 + ")."), se;
        } else return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + A.width + "x" + A.height + ")."), A;
        return A;
    }
    function M(A) {
        return aa(A.width) && aa(A.height);
    }
    function y36(A) {
        return a ? !1 : A.wrapS !== Mt || A.wrapT !== Mt || A.minFilter !== at && A.minFilter !== nt;
    }
    function b37(A, S) {
        return A.generateMipmaps && S && A.minFilter !== at && A.minFilter !== nt;
    }
    function T(A) {
        s144.generateMipmap(A);
    }
    function R(A, S, q3, Q3, me3 = !1) {
        if (a === !1) return S;
        if (A !== null) {
            if (s144[A] !== void 0) return s144[A];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
        }
        let V3 = S;
        return S === 6403 && (q3 === 5126 && (V3 = 33326), q3 === 5131 && (V3 = 33325), q3 === 5121 && (V3 = 33321)), S === 33319 && (q3 === 5126 && (V3 = 33328), q3 === 5131 && (V3 = 33327), q3 === 5121 && (V3 = 33323)), S === 6408 && (q3 === 5126 && (V3 = 34836), q3 === 5131 && (V3 = 34842), q3 === 5121 && (V3 = Q3 === Ze && me3 === !1 ? 35907 : 32856), q3 === 32819 && (V3 = 32854), q3 === 32820 && (V3 = 32855)), (V3 === 33325 || V3 === 33326 || V3 === 33327 || V3 === 33328 || V3 === 34842 || V3 === 34836) && e.get("EXT_color_buffer_float"), V3;
    }
    function P18(A, S, q4) {
        return b37(A, q4) === !0 || A.isFramebufferTexture && A.minFilter !== at && A.minFilter !== nt ? Math.log2(Math.max(S.width, S.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? S.mipmaps.length : 1;
    }
    function H(A) {
        return A === at || A === ra || A === sa ? 9728 : 9729;
    }
    function N(A) {
        let S = A.target;
        S.removeEventListener("dispose", N), C(S), S.isVideoTexture && m.delete(S), o.memory.textures--;
    }
    function v(A) {
        let S = A.target;
        S.removeEventListener("dispose", v), D37(S);
    }
    function C(A) {
        let S = n.get(A);
        S.__webglInit !== void 0 && (s144.deleteTexture(S.__webglTexture), n.remove(A));
    }
    function D37(A) {
        let S = A.texture, q5 = n.get(A), Q4 = n.get(S);
        if (!!A) {
            if (Q4.__webglTexture !== void 0 && (s144.deleteTexture(Q4.__webglTexture), o.memory.textures--), A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget) for(let me4 = 0; me4 < 6; me4++)s144.deleteFramebuffer(q5.__webglFramebuffer[me4]), q5.__webglDepthbuffer && s144.deleteRenderbuffer(q5.__webglDepthbuffer[me4]);
            else s144.deleteFramebuffer(q5.__webglFramebuffer), q5.__webglDepthbuffer && s144.deleteRenderbuffer(q5.__webglDepthbuffer), q5.__webglMultisampledFramebuffer && s144.deleteFramebuffer(q5.__webglMultisampledFramebuffer), q5.__webglColorRenderbuffer && s144.deleteRenderbuffer(q5.__webglColorRenderbuffer), q5.__webglDepthRenderbuffer && s144.deleteRenderbuffer(q5.__webglDepthRenderbuffer);
            if (A.isWebGLMultipleRenderTargets) for(let me1 = 0, V4 = S.length; me1 < V4; me1++){
                let _e3 = n.get(S[me1]);
                _e3.__webglTexture && (s144.deleteTexture(_e3.__webglTexture), o.memory.textures--), n.remove(S[me1]);
            }
            n.remove(S), n.remove(A);
        }
    }
    let B = 0;
    function z() {
        B = 0;
    }
    function F() {
        let A = B;
        return A >= l && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + l), B += 1, A;
    }
    function W(A, S) {
        let q6 = n.get(A);
        if (A.isVideoTexture && oe2(A), A.version > 0 && q6.__version !== A.version) {
            let Q5 = A.image;
            if (Q5 === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else if (Q5.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                G5(q6, A, S);
                return;
            }
        }
        t.activeTexture(33984 + S), t.bindTexture(3553, q6.__webglTexture);
    }
    function j(A, S) {
        let q7 = n.get(A);
        if (A.version > 0 && q7.__version !== A.version) {
            G5(q7, A, S);
            return;
        }
        t.activeTexture(33984 + S), t.bindTexture(35866, q7.__webglTexture);
    }
    function ue(A, S) {
        let q8 = n.get(A);
        if (A.version > 0 && q8.__version !== A.version) {
            G5(q8, A, S);
            return;
        }
        t.activeTexture(33984 + S), t.bindTexture(32879, q8.__webglTexture);
    }
    function k(A, S) {
        let q9 = n.get(A);
        if (A.version > 0 && q9.__version !== A.version) {
            Ge(q9, A, S);
            return;
        }
        t.activeTexture(33984 + S), t.bindTexture(34067, q9.__webglTexture);
    }
    let $ = {
        [zs]: 10497,
        [Mt]: 33071,
        [Os]: 33648
    }, re6 = {
        [at]: 9728,
        [ra]: 9984,
        [sa]: 9986,
        [nt]: 9729,
        [ih]: 9985,
        [Gi]: 9987
    };
    function pe7(A, S, q10) {
        if (q10 ? (s144.texParameteri(A, 10242, $[S.wrapS]), s144.texParameteri(A, 10243, $[S.wrapT]), (A === 32879 || A === 35866) && s144.texParameteri(A, 32882, $[S.wrapR]), s144.texParameteri(A, 10240, re6[S.magFilter]), s144.texParameteri(A, 10241, re6[S.minFilter])) : (s144.texParameteri(A, 10242, 33071), s144.texParameteri(A, 10243, 33071), (A === 32879 || A === 35866) && s144.texParameteri(A, 32882, 33071), (S.wrapS !== Mt || S.wrapT !== Mt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s144.texParameteri(A, 10240, H(S.magFilter)), s144.texParameteri(A, 10241, H(S.minFilter)), S.minFilter !== at && S.minFilter !== nt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
            let Q6 = e.get("EXT_texture_filter_anisotropic");
            if (S.type === vn && e.has("OES_texture_float_linear") === !1 || a === !1 && S.type === Ti && e.has("OES_texture_half_float_linear") === !1) return;
            (S.anisotropy > 1 || n.get(S).__currentAnisotropy) && (s144.texParameterf(A, Q6.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, i.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy);
        }
    }
    function ye5(A, S) {
        A.__webglInit === void 0 && (A.__webglInit = !0, S.addEventListener("dispose", N), A.__webglTexture = s144.createTexture(), o.memory.textures++);
    }
    function G5(A, S, q11) {
        let Q7 = 3553;
        S.isDataTexture2DArray && (Q7 = 35866), S.isDataTexture3D && (Q7 = 32879), ye5(A, S), t.activeTexture(33984 + q11), t.bindTexture(Q7, A.__webglTexture), s144.pixelStorei(37440, S.flipY), s144.pixelStorei(37441, S.premultiplyAlpha), s144.pixelStorei(3317, S.unpackAlignment), s144.pixelStorei(37443, 0);
        let me5 = y36(S) && M(S.image) === !1, V5 = p(S.image, me5, !1, u);
        V5 = we2(S, V5);
        let _e4 = M(V5) || a, xe3 = r.convert(S.format, S.encoding), se = r.convert(S.type), ie2 = R(S.internalFormat, xe3, se, S.encoding, S.isVideoTexture);
        pe7(Q7, S, _e4);
        let Re2, L = S.mipmaps, fe = a && S.isVideoTexture !== !0, ae10 = A.__version === void 0, be8 = P18(S, V5, _e4);
        if (S.isDepthTexture) ie2 = 6402, a ? S.type === vn ? ie2 = 36012 : S.type === Is ? ie2 = 33190 : S.type === Ai ? ie2 = 35056 : ie2 = 33189 : S.type === vn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), S.format === qn && ie2 === 6402 && S.type !== hr && S.type !== Is && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), S.type = hr, se = r.convert(S.type)), S.format === Di && ie2 === 6402 && (ie2 = 34041, S.type !== Ai && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), S.type = Ai, se = r.convert(S.type))), fe && ae10 ? t.texStorage2D(3553, 1, ie2, V5.width, V5.height) : t.texImage2D(3553, 0, ie2, V5.width, V5.height, 0, xe3, se, null);
        else if (S.isDataTexture) if (L.length > 0 && _e4) {
            fe && ae10 && t.texStorage2D(3553, be8, ie2, L[0].width, L[0].height);
            for(let J13 = 0, ve6 = L.length; J13 < ve6; J13++)Re2 = L[J13], fe ? t.texSubImage2D(3553, 0, 0, 0, Re2.width, Re2.height, xe3, se, Re2.data) : t.texImage2D(3553, J13, ie2, Re2.width, Re2.height, 0, xe3, se, Re2.data);
            S.generateMipmaps = !1;
        } else fe ? (ae10 && t.texStorage2D(3553, be8, ie2, V5.width, V5.height), t.texSubImage2D(3553, 0, 0, 0, V5.width, V5.height, xe3, se, V5.data)) : t.texImage2D(3553, 0, ie2, V5.width, V5.height, 0, xe3, se, V5.data);
        else if (S.isCompressedTexture) {
            fe && ae10 && t.texStorage2D(3553, be8, ie2, L[0].width, L[0].height);
            for(let J14 = 0, ve7 = L.length; J14 < ve7; J14++)Re2 = L[J14], S.format !== wt ? xe3 !== null ? fe ? t.compressedTexSubImage2D(3553, J14, 0, 0, Re2.width, Re2.height, xe3, Re2.data) : t.compressedTexImage2D(3553, J14, ie2, Re2.width, Re2.height, 0, Re2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : fe ? t.texSubImage2D(3553, J14, 0, 0, Re2.width, Re2.height, xe3, se, Re2.data) : t.texImage2D(3553, J14, ie2, Re2.width, Re2.height, 0, xe3, se, Re2.data);
        } else if (S.isDataTexture2DArray) fe ? (ae10 && t.texStorage3D(35866, be8, ie2, V5.width, V5.height, V5.depth), t.texSubImage3D(35866, 0, 0, 0, 0, V5.width, V5.height, V5.depth, xe3, se, V5.data)) : t.texImage3D(35866, 0, ie2, V5.width, V5.height, V5.depth, 0, xe3, se, V5.data);
        else if (S.isDataTexture3D) fe ? (ae10 && t.texStorage3D(32879, be8, ie2, V5.width, V5.height, V5.depth), t.texSubImage3D(32879, 0, 0, 0, 0, V5.width, V5.height, V5.depth, xe3, se, V5.data)) : t.texImage3D(32879, 0, ie2, V5.width, V5.height, V5.depth, 0, xe3, se, V5.data);
        else if (S.isFramebufferTexture) fe && ae10 ? t.texStorage2D(3553, be8, ie2, V5.width, V5.height) : t.texImage2D(3553, 0, ie2, V5.width, V5.height, 0, xe3, se, null);
        else if (L.length > 0 && _e4) {
            fe && ae10 && t.texStorage2D(3553, be8, ie2, L[0].width, L[0].height);
            for(let J15 = 0, ve8 = L.length; J15 < ve8; J15++)Re2 = L[J15], fe ? t.texSubImage2D(3553, J15, 0, 0, xe3, se, Re2) : t.texImage2D(3553, J15, ie2, xe3, se, Re2);
            S.generateMipmaps = !1;
        } else fe ? (ae10 && t.texStorage2D(3553, be8, ie2, V5.width, V5.height), t.texSubImage2D(3553, 0, 0, 0, xe3, se, V5)) : t.texImage2D(3553, 0, ie2, xe3, se, V5);
        b37(S, _e4) && T(Q7), A.__version = S.version, S.onUpdate && S.onUpdate(S);
    }
    function Ge(A, S, q12) {
        if (S.image.length !== 6) return;
        ye5(A, S), t.activeTexture(33984 + q12), t.bindTexture(34067, A.__webglTexture), s144.pixelStorei(37440, S.flipY), s144.pixelStorei(37441, S.premultiplyAlpha), s144.pixelStorei(3317, S.unpackAlignment), s144.pixelStorei(37443, 0);
        let Q8 = S && (S.isCompressedTexture || S.image[0].isCompressedTexture), me6 = S.image[0] && S.image[0].isDataTexture, V6 = [];
        for(let J16 = 0; J16 < 6; J16++)!Q8 && !me6 ? V6[J16] = p(S.image[J16], !1, !0, c) : V6[J16] = me6 ? S.image[J16].image : S.image[J16], V6[J16] = we2(S, V6[J16]);
        let _e5 = V6[0], xe4 = M(_e5) || a, se = r.convert(S.format, S.encoding), ie3 = r.convert(S.type), Re3 = R(S.internalFormat, se, ie3, S.encoding), L = a && S.isVideoTexture !== !0, fe = A.__version === void 0, ae11 = P18(S, _e5, xe4);
        pe7(34067, S, xe4);
        let be9;
        if (Q8) {
            L && fe && t.texStorage2D(34067, ae11, Re3, _e5.width, _e5.height);
            for(let J17 = 0; J17 < 6; J17++){
                be9 = V6[J17].mipmaps;
                for(let ve9 = 0; ve9 < be9.length; ve9++){
                    let Be = be9[ve9];
                    S.format !== wt ? se !== null ? L ? t.compressedTexSubImage2D(34069 + J17, ve9, 0, 0, Be.width, Be.height, se, Be.data) : t.compressedTexImage2D(34069 + J17, ve9, Re3, Be.width, Be.height, 0, Be.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : L ? t.texSubImage2D(34069 + J17, ve9, 0, 0, Be.width, Be.height, se, ie3, Be.data) : t.texImage2D(34069 + J17, ve9, Re3, Be.width, Be.height, 0, se, ie3, Be.data);
                }
            }
        } else {
            be9 = S.mipmaps, L && fe && (be9.length > 0 && ae11++, t.texStorage2D(34067, ae11, Re3, V6[0].width, V6[0].height));
            for(let J18 = 0; J18 < 6; J18++)if (me6) {
                L ? t.texSubImage2D(34069 + J18, 0, 0, 0, V6[J18].width, V6[J18].height, se, ie3, V6[J18].data) : t.texImage2D(34069 + J18, 0, Re3, V6[J18].width, V6[J18].height, 0, se, ie3, V6[J18].data);
                for(let ve10 = 0; ve10 < be9.length; ve10++){
                    let je = be9[ve10].image[J18].image;
                    L ? t.texSubImage2D(34069 + J18, ve10 + 1, 0, 0, je.width, je.height, se, ie3, je.data) : t.texImage2D(34069 + J18, ve10 + 1, Re3, je.width, je.height, 0, se, ie3, je.data);
                }
            } else {
                L ? t.texSubImage2D(34069 + J18, 0, 0, 0, se, ie3, V6[J18]) : t.texImage2D(34069 + J18, 0, Re3, se, ie3, V6[J18]);
                for(let ve11 = 0; ve11 < be9.length; ve11++){
                    let Be = be9[ve11];
                    L ? t.texSubImage2D(34069 + J18, ve11 + 1, 0, 0, se, ie3, Be.image[J18]) : t.texImage2D(34069 + J18, ve11 + 1, Re3, se, ie3, Be.image[J18]);
                }
            }
        }
        b37(S, xe4) && T(34067), A.__version = S.version, S.onUpdate && S.onUpdate(S);
    }
    function ge(A, S, q13, Q9, me7) {
        let V7 = r.convert(q13.format, q13.encoding), _e6 = r.convert(q13.type), xe5 = R(q13.internalFormat, V7, _e6, q13.encoding);
        n.get(S).__hasExternalTextures || (me7 === 32879 || me7 === 35866 ? t.texImage3D(me7, 0, xe5, S.width, S.height, S.depth, 0, V7, _e6, null) : t.texImage2D(me7, 0, xe5, S.width, S.height, 0, V7, _e6, null)), t.bindFramebuffer(36160, A), S.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, Q9, me7, n.get(q13).__webglTexture, 0, ce2(S)) : s144.framebufferTexture2D(36160, Q9, me7, n.get(q13).__webglTexture, 0), t.bindFramebuffer(36160, null);
    }
    function Se4(A, S, q14) {
        if (s144.bindRenderbuffer(36161, A), S.depthBuffer && !S.stencilBuffer) {
            let Q10 = 33189;
            if (q14 || S.useRenderToTexture) {
                let me8 = S.depthTexture;
                me8 && me8.isDepthTexture && (me8.type === vn ? Q10 = 36012 : me8.type === Is && (Q10 = 33190));
                let V8 = ce2(S);
                S.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, V8, Q10, S.width, S.height) : s144.renderbufferStorageMultisample(36161, V8, Q10, S.width, S.height);
            } else s144.renderbufferStorage(36161, Q10, S.width, S.height);
            s144.framebufferRenderbuffer(36160, 36096, 36161, A);
        } else if (S.depthBuffer && S.stencilBuffer) {
            let Q11 = ce2(S);
            q14 && S.useRenderbuffer ? s144.renderbufferStorageMultisample(36161, Q11, 35056, S.width, S.height) : S.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, Q11, 35056, S.width, S.height) : s144.renderbufferStorage(36161, 34041, S.width, S.height), s144.framebufferRenderbuffer(36160, 33306, 36161, A);
        } else {
            let Q12 = S.isWebGLMultipleRenderTargets === !0 ? S.texture[0] : S.texture, me9 = r.convert(Q12.format, Q12.encoding), V9 = r.convert(Q12.type), _e7 = R(Q12.internalFormat, me9, V9, Q12.encoding), xe6 = ce2(S);
            q14 && S.useRenderbuffer ? s144.renderbufferStorageMultisample(36161, xe6, _e7, S.width, S.height) : S.useRenderToTexture ? f.renderbufferStorageMultisampleEXT(36161, xe6, _e7, S.width, S.height) : s144.renderbufferStorage(36161, _e7, S.width, S.height);
        }
        s144.bindRenderbuffer(36161, null);
    }
    function le6(A, S) {
        if (S && S.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(36160, A), !(S.depthTexture && S.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), W(S.depthTexture, 0);
        let Q13 = n.get(S.depthTexture).__webglTexture, me10 = ce2(S);
        if (S.depthTexture.format === qn) S.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q13, 0, me10) : s144.framebufferTexture2D(36160, 36096, 3553, Q13, 0);
        else if (S.depthTexture.format === Di) S.useRenderToTexture ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q13, 0, me10) : s144.framebufferTexture2D(36160, 33306, 3553, Q13, 0);
        else throw new Error("Unknown depthTexture format");
    }
    function Le3(A) {
        let S = n.get(A), q15 = A.isWebGLCubeRenderTarget === !0;
        if (A.depthTexture && !S.__autoAllocateDepthBuffer) {
            if (q15) throw new Error("target.depthTexture not supported in Cube render targets");
            le6(S.__webglFramebuffer, A);
        } else if (q15) {
            S.__webglDepthbuffer = [];
            for(let Q14 = 0; Q14 < 6; Q14++)t.bindFramebuffer(36160, S.__webglFramebuffer[Q14]), S.__webglDepthbuffer[Q14] = s144.createRenderbuffer(), Se4(S.__webglDepthbuffer[Q14], A, !1);
        } else t.bindFramebuffer(36160, S.__webglFramebuffer), S.__webglDepthbuffer = s144.createRenderbuffer(), Se4(S.__webglDepthbuffer, A, !1);
        t.bindFramebuffer(36160, null);
    }
    function Ee3(A, S, q16) {
        let Q15 = n.get(A);
        S !== void 0 && ge(Q15.__webglFramebuffer, A, A.texture, 36064, 3553), q16 !== void 0 && Le3(A);
    }
    function X(A) {
        let S = A.texture, q17 = n.get(A), Q16 = n.get(S);
        A.addEventListener("dispose", v), A.isWebGLMultipleRenderTargets !== !0 && (Q16.__webglTexture === void 0 && (Q16.__webglTexture = s144.createTexture()), Q16.__version = S.version, o.memory.textures++);
        let me11 = A.isWebGLCubeRenderTarget === !0, V10 = A.isWebGLMultipleRenderTargets === !0, _e8 = S.isDataTexture3D || S.isDataTexture2DArray, xe7 = M(A) || a;
        if (me11) {
            q17.__webglFramebuffer = [];
            for(let se = 0; se < 6; se++)q17.__webglFramebuffer[se] = s144.createFramebuffer();
        } else if (q17.__webglFramebuffer = s144.createFramebuffer(), V10) if (i.drawBuffers) {
            let se = A.texture;
            for(let ie4 = 0, Re4 = se.length; ie4 < Re4; ie4++){
                let L = n.get(se[ie4]);
                L.__webglTexture === void 0 && (L.__webglTexture = s144.createTexture(), o.memory.textures++);
            }
        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        else if (A.useRenderbuffer) if (a) {
            q17.__webglMultisampledFramebuffer = s144.createFramebuffer(), q17.__webglColorRenderbuffer = s144.createRenderbuffer(), s144.bindRenderbuffer(36161, q17.__webglColorRenderbuffer);
            let se = r.convert(S.format, S.encoding), ie5 = r.convert(S.type), Re5 = R(S.internalFormat, se, ie5, S.encoding), L = ce2(A);
            s144.renderbufferStorageMultisample(36161, L, Re5, A.width, A.height), t.bindFramebuffer(36160, q17.__webglMultisampledFramebuffer), s144.framebufferRenderbuffer(36160, 36064, 36161, q17.__webglColorRenderbuffer), s144.bindRenderbuffer(36161, null), A.depthBuffer && (q17.__webglDepthRenderbuffer = s144.createRenderbuffer(), Se4(q17.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(36160, null);
        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (me11) {
            t.bindTexture(34067, Q16.__webglTexture), pe7(34067, S, xe7);
            for(let se = 0; se < 6; se++)ge(q17.__webglFramebuffer[se], A, S, 36064, 34069 + se);
            b37(S, xe7) && T(34067), t.unbindTexture();
        } else if (V10) {
            let se = A.texture;
            for(let ie6 = 0, Re6 = se.length; ie6 < Re6; ie6++){
                let L = se[ie6], fe = n.get(L);
                t.bindTexture(3553, fe.__webglTexture), pe7(3553, L, xe7), ge(q17.__webglFramebuffer, A, L, 36064 + ie6, 3553), b37(L, xe7) && T(3553);
            }
            t.unbindTexture();
        } else {
            let se = 3553;
            _e8 && (a ? se = S.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(se, Q16.__webglTexture), pe7(se, S, xe7), ge(q17.__webglFramebuffer, A, S, 36064, se), b37(S, xe7) && T(se), t.unbindTexture();
        }
        A.depthBuffer && Le3(A);
    }
    function ee(A) {
        let S = M(A) || a, q18 = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [
            A.texture
        ];
        for(let Q17 = 0, me12 = q18.length; Q17 < me12; Q17++){
            let V11 = q18[Q17];
            if (b37(V11, S)) {
                let _e9 = A.isWebGLCubeRenderTarget ? 34067 : 3553, xe8 = n.get(V11).__webglTexture;
                t.bindTexture(_e9, xe8), T(_e9), t.unbindTexture();
            }
        }
    }
    function K(A) {
        if (A.useRenderbuffer) if (a) {
            let S = A.width, q19 = A.height, Q18 = 16384, me13 = [
                36064
            ], V12 = A.stencilBuffer ? 33306 : 36096;
            A.depthBuffer && me13.push(V12), A.ignoreDepthForMultisampleCopy || (A.depthBuffer && (Q18 |= 256), A.stencilBuffer && (Q18 |= 1024));
            let _e10 = n.get(A);
            t.bindFramebuffer(36008, _e10.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, _e10.__webglFramebuffer), A.ignoreDepthForMultisampleCopy && (s144.invalidateFramebuffer(36008, [
                V12
            ]), s144.invalidateFramebuffer(36009, [
                V12
            ])), s144.blitFramebuffer(0, 0, S, q19, 0, 0, S, q19, Q18, 9728), s144.invalidateFramebuffer(36008, me13), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, _e10.__webglMultisampledFramebuffer);
        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    }
    function ce2(A) {
        return a && (A.useRenderbuffer || A.useRenderToTexture) ? Math.min(h, A.samples) : 0;
    }
    function oe2(A) {
        let S = o.render.frame;
        m.get(A) !== S && (m.set(A, S), A.update());
    }
    function we2(A, S) {
        let q20 = A.encoding, Q19 = A.format, me14 = A.type;
        return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || A.format === oa || q20 !== Tn && (q20 === Ze ? a === !1 ? e.has("EXT_sRGB") === !0 && Q19 === wt ? (A.format = oa, A.minFilter = nt, A.generateMipmaps = !1) : S = Pn.sRGBToLinear(S) : (Q19 !== wt || me14 !== bn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", q20)), S;
    }
    let Te2 = !1, Ne2 = !1;
    function Je(A, S) {
        A && A.isWebGLRenderTarget && (Te2 === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Te2 = !0), A = A.texture), W(A, S);
    }
    function qe(A, S) {
        A && A.isWebGLCubeRenderTarget && (Ne2 === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), Ne2 = !0), A = A.texture), k(A, S);
    }
    this.allocateTextureUnit = F, this.resetTextureUnits = z, this.setTexture2D = W, this.setTexture2DArray = j, this.setTexture3D = ue, this.setTextureCube = k, this.rebindTextures = Ee3, this.setupRenderTarget = X, this.updateRenderTargetMipmap = ee, this.updateMultisampleRenderTarget = K, this.setupDepthRenderbuffer = Le3, this.setupFrameBufferTexture = ge, this.safeSetTexture2D = Je, this.safeSetTextureCube = qe;
}
function ox(s, e, t) {
    let n = t.isWebGL2;
    function i(r, o = null) {
        let a;
        if (r === bn) return 5121;
        if (r === Qu) return 32819;
        if (r === ed) return 32820;
        if (r === $u) return 5120;
        if (r === ju) return 5122;
        if (r === hr) return 5123;
        if (r === Ku) return 5124;
        if (r === Is) return 5125;
        if (r === vn) return 5126;
        if (r === Ti) return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
        if (r === td) return 6406;
        if (r === wt) return 6408;
        if (r === nd) return 6409;
        if (r === id) return 6410;
        if (r === qn) return 6402;
        if (r === Di) return 34041;
        if (r === rd) return 6403;
        if (r === oa) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
        if (r === sd) return 36244;
        if (r === od) return 33319;
        if (r === ad) return 33320;
        if (r === ld) return 36249;
        if (r === yo || r === _o || r === vo || r === Mo) if (o === Ze) if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
            if (r === yo) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (r === _o) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (r === vo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (r === Mo) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
        else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
            if (r === yo) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (r === _o) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (r === vo) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (r === Mo) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else return null;
        if (r === cl || r === hl || r === ul || r === dl) if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
            if (r === cl) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (r === hl) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (r === ul) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (r === dl) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        } else return null;
        if (r === cd) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (r === fl || r === pl) if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
            if (r === fl) return o === Ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
            if (r === pl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
        } else return null;
        if (r === ml || r === gl || r === xl || r === yl || r === _l || r === vl || r === Ml || r === wl || r === bl || r === Sl || r === El || r === Tl || r === Al || r === Rl) if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
            if (r === ml) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
            if (r === gl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
            if (r === xl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
            if (r === yl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
            if (r === _l) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
            if (r === vl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
            if (r === Ml) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
            if (r === wl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
            if (r === bl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
            if (r === Sl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
            if (r === El) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
            if (r === Tl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
            if (r === Al) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
            if (r === Rl) return o === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
        } else return null;
        if (r === Cl) if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
            if (r === Cl) return o === Ze ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        } else return null;
        if (r === Ai) return n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null);
    }
    return {
        convert: i
    };
}
var va = class extends ft {
    constructor(e = []){
        super();
        this.cameras = e;
    }
};
va.prototype.isArrayCamera = !0;
var Wn = class extends Fe {
    constructor(){
        super();
        this.type = "Group";
    }
};
Wn.prototype.isGroup = !0;
var ax = {
    type: "move"
}, Fs = class {
    constructor(){
        this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new Wn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
        }), this._hand;
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new Wn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new w, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new w), this._targetRay;
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new Wn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new w, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new w), this._grip;
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
        let i = null, r = null, o = null, a = this._targetRay, l = this._grip, c = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred") if (a !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ax))), c && e.hand) {
            o = !0;
            for (let x of e.hand.values()){
                let _ = t.getJointPose(x, n);
                if (c.joints[x.jointName] === void 0) {
                    let p = new Wn;
                    p.matrixAutoUpdate = !1, p.visible = !1, c.joints[x.jointName] = p, c.add(p);
                }
                let g42 = c.joints[x.jointName];
                _ !== null && (g42.matrix.fromArray(_.transform.matrix), g42.matrix.decompose(g42.position, g42.rotation, g42.scale), g42.jointRadius = _.radius), g42.visible = _ !== null;
            }
            let u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), f = 0.02, m = 0.005;
            c.inputState.pinching && d > f + m ? (c.inputState.pinching = !1, this.dispatchEvent({
                type: "pinchend",
                handedness: e.handedness,
                target: this
            })) : !c.inputState.pinching && d <= f - m && (c.inputState.pinching = !0, this.dispatchEvent({
                type: "pinchstart",
                handedness: e.handedness,
                target: this
            }));
        } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
        return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
    }
}, ks = class extends ct {
    constructor(e, t, n, i, r, o, a, l, c, u){
        if (u = u !== void 0 ? u : qn, u !== qn && u !== Di) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && u === qn && (n = hr), n === void 0 && u === Di && (n = Ai);
        super(null, i, r, o, a, l, u, n, c);
        this.image = {
            width: e,
            height: t
        }, this.magFilter = a !== void 0 ? a : at, this.minFilter = l !== void 0 ? l : at, this.flipY = !1, this.generateMipmaps = !1;
    }
};
ks.prototype.isDepthTexture = !0;
var Lh = class extends Ln {
    constructor(e, t){
        super();
        let n = this, i = null, r = 1, o = null, a = "local-floor", l = e.extensions.has("WEBGL_multisampled_render_to_texture"), c = null, u = null, h = null, d = null, f = !1, m = null, x = t.getContextAttributes(), _ = null, g43 = null, p = [], M = new Map, y37 = new ft;
        y37.layers.enable(1), y37.viewport = new We;
        let b38 = new ft;
        b38.layers.enable(2), b38.viewport = new We;
        let T = [
            y37,
            b38
        ], R = new va;
        R.layers.enable(1), R.layers.enable(2);
        let P19 = null, H = null;
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(k) {
            let $ = p[k];
            return $ === void 0 && ($ = new Fs, p[k] = $), $.getTargetRaySpace();
        }, this.getControllerGrip = function(k) {
            let $ = p[k];
            return $ === void 0 && ($ = new Fs, p[k] = $), $.getGripSpace();
        }, this.getHand = function(k) {
            let $ = p[k];
            return $ === void 0 && ($ = new Fs, p[k] = $), $.getHandSpace();
        };
        function N(k) {
            let $ = M.get(k.inputSource);
            $ && $.dispatchEvent({
                type: k.type,
                data: k.inputSource
            });
        }
        function v() {
            M.forEach(function(k, $) {
                k.disconnect($);
            }), M.clear(), P19 = null, H = null, e.setRenderTarget(_), d = null, h = null, u = null, i = null, g43 = null, ue.stop(), n.isPresenting = !1, n.dispatchEvent({
                type: "sessionend"
            });
        }
        this.setFramebufferScaleFactor = function(k) {
            r = k, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
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
                if (_ = e.getRenderTarget(), i.addEventListener("select", N), i.addEventListener("selectstart", N), i.addEventListener("selectend", N), i.addEventListener("squeeze", N), i.addEventListener("squeezestart", N), i.addEventListener("squeezeend", N), i.addEventListener("end", v), i.addEventListener("inputsourceschange", C), x.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
                    let $ = {
                        antialias: i.renderState.layers === void 0 ? x.antialias : !0,
                        alpha: x.alpha,
                        depth: x.depth,
                        stencil: x.stencil,
                        framebufferScaleFactor: r
                    };
                    d = new XRWebGLLayer(i, t, $), i.updateRenderState({
                        baseLayer: d
                    }), g43 = new Pt(d.framebufferWidth, d.framebufferHeight, {
                        format: wt,
                        type: bn,
                        encoding: e.outputEncoding
                    });
                } else {
                    f = x.antialias;
                    let $ = null, re7 = null, pe8 = null;
                    x.depth && (pe8 = x.stencil ? 35056 : 33190, $ = x.stencil ? Di : qn, re7 = x.stencil ? Ai : hr);
                    let ye6 = {
                        colorFormat: e.outputEncoding === Ze ? 35907 : 32856,
                        depthFormat: pe8,
                        scaleFactor: r
                    };
                    u = new XRWebGLBinding(i, t), h = u.createProjectionLayer(ye6), i.updateRenderState({
                        layers: [
                            h
                        ]
                    }), f ? g43 = new Xs(h.textureWidth, h.textureHeight, {
                        format: wt,
                        type: bn,
                        depthTexture: new ks(h.textureWidth, h.textureHeight, re7, void 0, void 0, void 0, void 0, void 0, void 0, $),
                        stencilBuffer: x.stencil,
                        ignoreDepth: h.ignoreDepthValues,
                        useRenderToTexture: l,
                        encoding: e.outputEncoding
                    }) : g43 = new Pt(h.textureWidth, h.textureHeight, {
                        format: wt,
                        type: bn,
                        depthTexture: new ks(h.textureWidth, h.textureHeight, re7, void 0, void 0, void 0, void 0, void 0, void 0, $),
                        stencilBuffer: x.stencil,
                        ignoreDepth: h.ignoreDepthValues,
                        encoding: e.outputEncoding
                    });
                }
                g43.isXRRenderTarget = !0, this.setFoveation(1), o = await i.requestReferenceSpace(a), ue.setContext(i), ue.start(), n.isPresenting = !0, n.dispatchEvent({
                    type: "sessionstart"
                });
            }
        };
        function C(k) {
            let $ = i.inputSources;
            for(let re8 = 0; re8 < p.length; re8++)M.set($[re8], p[re8]);
            for(let re1 = 0; re1 < k.removed.length; re1++){
                let pe9 = k.removed[re1], ye7 = M.get(pe9);
                ye7 && (ye7.dispatchEvent({
                    type: "disconnected",
                    data: pe9
                }), M.delete(pe9));
            }
            for(let re2 = 0; re2 < k.added.length; re2++){
                let pe10 = k.added[re2], ye8 = M.get(pe10);
                ye8 && ye8.dispatchEvent({
                    type: "connected",
                    data: pe10
                });
            }
        }
        let D38 = new w, B = new w;
        function z(k, $, re9) {
            D38.setFromMatrixPosition($.matrixWorld), B.setFromMatrixPosition(re9.matrixWorld);
            let pe11 = D38.distanceTo(B), ye9 = $.projectionMatrix.elements, G6 = re9.projectionMatrix.elements, Ge = ye9[14] / (ye9[10] - 1), ge = ye9[14] / (ye9[10] + 1), Se5 = (ye9[9] + 1) / ye9[5], le7 = (ye9[9] - 1) / ye9[5], Le4 = (ye9[8] - 1) / ye9[0], Ee4 = (G6[8] + 1) / G6[0], X = Ge * Le4, ee = Ge * Ee4, K = pe11 / (-Le4 + Ee4), ce3 = K * -Le4;
            $.matrixWorld.decompose(k.position, k.quaternion, k.scale), k.translateX(ce3), k.translateZ(K), k.matrixWorld.compose(k.position, k.quaternion, k.scale), k.matrixWorldInverse.copy(k.matrixWorld).invert();
            let oe3 = Ge + K, we3 = ge + K, Te3 = X - ce3, Ne3 = ee + (pe11 - ce3), Je = Se5 * ge / we3 * oe3, qe = le7 * ge / we3 * oe3;
            k.projectionMatrix.makePerspective(Te3, Ne3, Je, qe, oe3, we3);
        }
        function F(k, $) {
            $ === null ? k.matrixWorld.copy(k.matrix) : k.matrixWorld.multiplyMatrices($.matrixWorld, k.matrix), k.matrixWorldInverse.copy(k.matrixWorld).invert();
        }
        this.updateCamera = function(k) {
            if (i === null) return;
            R.near = b38.near = y37.near = k.near, R.far = b38.far = y37.far = k.far, (P19 !== R.near || H !== R.far) && (i.updateRenderState({
                depthNear: R.near,
                depthFar: R.far
            }), P19 = R.near, H = R.far);
            let $ = k.parent, re10 = R.cameras;
            F(R, $);
            for(let ye10 = 0; ye10 < re10.length; ye10++)F(re10[ye10], $);
            R.matrixWorld.decompose(R.position, R.quaternion, R.scale), k.position.copy(R.position), k.quaternion.copy(R.quaternion), k.scale.copy(R.scale), k.matrix.copy(R.matrix), k.matrixWorld.copy(R.matrixWorld);
            let pe12 = k.children;
            for(let ye1 = 0, G7 = pe12.length; ye1 < G7; ye1++)pe12[ye1].updateMatrixWorld(!0);
            re10.length === 2 ? z(R, y37, b38) : R.projectionMatrix.copy(y37.projectionMatrix);
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
                let pe13 = c.views;
                d !== null && (e.setRenderTargetFramebuffer(g43, d.framebuffer), e.setRenderTarget(g43));
                let ye11 = !1;
                pe13.length !== R.cameras.length && (R.cameras.length = 0, ye11 = !0);
                for(let G8 = 0; G8 < pe13.length; G8++){
                    let Ge = pe13[G8], ge = null;
                    if (d !== null) ge = d.getViewport(Ge);
                    else {
                        let le8 = u.getViewSubImage(h, Ge);
                        ge = le8.viewport, G8 === 0 && (e.setRenderTargetTextures(g43, le8.colorTexture, h.ignoreDepthValues ? void 0 : le8.depthStencilTexture), e.setRenderTarget(g43));
                    }
                    let Se6 = T[G8];
                    Se6.matrix.fromArray(Ge.transform.matrix), Se6.projectionMatrix.fromArray(Ge.projectionMatrix), Se6.viewport.set(ge.x, ge.y, ge.width, ge.height), G8 === 0 && R.matrix.copy(Se6.matrix), ye11 === !0 && R.cameras.push(Se6);
                }
            }
            let re11 = i.inputSources;
            for(let pe14 = 0; pe14 < p.length; pe14++){
                let ye12 = p[pe14], G9 = re11[pe14];
                ye12.update(G9, $, o);
            }
            W && W(k, $), m = null;
        }
        let ue = new xh;
        ue.setAnimationLoop(j), this.setAnimationLoop = function(k) {
            W = k;
        }, this.dispose = function() {};
    }
};
function lx(s145) {
    function e(g44, p) {
        g44.fogColor.value.copy(p.color), p.isFog ? (g44.fogNear.value = p.near, g44.fogFar.value = p.far) : p.isFogExp2 && (g44.fogDensity.value = p.density);
    }
    function t(g45, p, M, y38, b39) {
        p.isMeshBasicMaterial ? n(g45, p) : p.isMeshLambertMaterial ? (n(g45, p), l(g45, p)) : p.isMeshToonMaterial ? (n(g45, p), u(g45, p)) : p.isMeshPhongMaterial ? (n(g45, p), c(g45, p)) : p.isMeshStandardMaterial ? (n(g45, p), p.isMeshPhysicalMaterial ? d(g45, p, b39) : h(g45, p)) : p.isMeshMatcapMaterial ? (n(g45, p), f(g45, p)) : p.isMeshDepthMaterial ? (n(g45, p), m(g45, p)) : p.isMeshDistanceMaterial ? (n(g45, p), x(g45, p)) : p.isMeshNormalMaterial ? (n(g45, p), _(g45, p)) : p.isLineBasicMaterial ? (i(g45, p), p.isLineDashedMaterial && r(g45, p)) : p.isPointsMaterial ? o(g45, p, M, y38) : p.isSpriteMaterial ? a(g45, p) : p.isShadowMaterial ? (g45.color.value.copy(p.color), g45.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
    }
    function n(g46, p) {
        g46.opacity.value = p.opacity, p.color && g46.diffuse.value.copy(p.color), p.emissive && g46.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g46.map.value = p.map), p.alphaMap && (g46.alphaMap.value = p.alphaMap), p.specularMap && (g46.specularMap.value = p.specularMap), p.alphaTest > 0 && (g46.alphaTest.value = p.alphaTest);
        let M = s145.get(p).envMap;
        M && (g46.envMap.value = M, g46.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, g46.reflectivity.value = p.reflectivity, g46.ior.value = p.ior, g46.refractionRatio.value = p.refractionRatio), p.lightMap && (g46.lightMap.value = p.lightMap, g46.lightMapIntensity.value = p.lightMapIntensity), p.aoMap && (g46.aoMap.value = p.aoMap, g46.aoMapIntensity.value = p.aoMapIntensity);
        let y39;
        p.map ? y39 = p.map : p.specularMap ? y39 = p.specularMap : p.displacementMap ? y39 = p.displacementMap : p.normalMap ? y39 = p.normalMap : p.bumpMap ? y39 = p.bumpMap : p.roughnessMap ? y39 = p.roughnessMap : p.metalnessMap ? y39 = p.metalnessMap : p.alphaMap ? y39 = p.alphaMap : p.emissiveMap ? y39 = p.emissiveMap : p.clearcoatMap ? y39 = p.clearcoatMap : p.clearcoatNormalMap ? y39 = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? y39 = p.clearcoatRoughnessMap : p.specularIntensityMap ? y39 = p.specularIntensityMap : p.specularColorMap ? y39 = p.specularColorMap : p.transmissionMap ? y39 = p.transmissionMap : p.thicknessMap ? y39 = p.thicknessMap : p.sheenColorMap ? y39 = p.sheenColorMap : p.sheenRoughnessMap && (y39 = p.sheenRoughnessMap), y39 !== void 0 && (y39.isWebGLRenderTarget && (y39 = y39.texture), y39.matrixAutoUpdate === !0 && y39.updateMatrix(), g46.uvTransform.value.copy(y39.matrix));
        let b40;
        p.aoMap ? b40 = p.aoMap : p.lightMap && (b40 = p.lightMap), b40 !== void 0 && (b40.isWebGLRenderTarget && (b40 = b40.texture), b40.matrixAutoUpdate === !0 && b40.updateMatrix(), g46.uv2Transform.value.copy(b40.matrix));
    }
    function i(g47, p) {
        g47.diffuse.value.copy(p.color), g47.opacity.value = p.opacity;
    }
    function r(g48, p) {
        g48.dashSize.value = p.dashSize, g48.totalSize.value = p.dashSize + p.gapSize, g48.scale.value = p.scale;
    }
    function o(g49, p, M, y40) {
        g49.diffuse.value.copy(p.color), g49.opacity.value = p.opacity, g49.size.value = p.size * M, g49.scale.value = y40 * 0.5, p.map && (g49.map.value = p.map), p.alphaMap && (g49.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (g49.alphaTest.value = p.alphaTest);
        let b41;
        p.map ? b41 = p.map : p.alphaMap && (b41 = p.alphaMap), b41 !== void 0 && (b41.matrixAutoUpdate === !0 && b41.updateMatrix(), g49.uvTransform.value.copy(b41.matrix));
    }
    function a(g50, p) {
        g50.diffuse.value.copy(p.color), g50.opacity.value = p.opacity, g50.rotation.value = p.rotation, p.map && (g50.map.value = p.map), p.alphaMap && (g50.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (g50.alphaTest.value = p.alphaTest);
        let M;
        p.map ? M = p.map : p.alphaMap && (M = p.alphaMap), M !== void 0 && (M.matrixAutoUpdate === !0 && M.updateMatrix(), g50.uvTransform.value.copy(M.matrix));
    }
    function l(g51, p) {
        p.emissiveMap && (g51.emissiveMap.value = p.emissiveMap);
    }
    function c(g52, p) {
        g52.specular.value.copy(p.specular), g52.shininess.value = Math.max(p.shininess, 0.0001), p.emissiveMap && (g52.emissiveMap.value = p.emissiveMap), p.bumpMap && (g52.bumpMap.value = p.bumpMap, g52.bumpScale.value = p.bumpScale, p.side === ot && (g52.bumpScale.value *= -1)), p.normalMap && (g52.normalMap.value = p.normalMap, g52.normalScale.value.copy(p.normalScale), p.side === ot && g52.normalScale.value.negate()), p.displacementMap && (g52.displacementMap.value = p.displacementMap, g52.displacementScale.value = p.displacementScale, g52.displacementBias.value = p.displacementBias);
    }
    function u(g53, p) {
        p.gradientMap && (g53.gradientMap.value = p.gradientMap), p.emissiveMap && (g53.emissiveMap.value = p.emissiveMap), p.bumpMap && (g53.bumpMap.value = p.bumpMap, g53.bumpScale.value = p.bumpScale, p.side === ot && (g53.bumpScale.value *= -1)), p.normalMap && (g53.normalMap.value = p.normalMap, g53.normalScale.value.copy(p.normalScale), p.side === ot && g53.normalScale.value.negate()), p.displacementMap && (g53.displacementMap.value = p.displacementMap, g53.displacementScale.value = p.displacementScale, g53.displacementBias.value = p.displacementBias);
    }
    function h(g54, p) {
        g54.roughness.value = p.roughness, g54.metalness.value = p.metalness, p.roughnessMap && (g54.roughnessMap.value = p.roughnessMap), p.metalnessMap && (g54.metalnessMap.value = p.metalnessMap), p.emissiveMap && (g54.emissiveMap.value = p.emissiveMap), p.bumpMap && (g54.bumpMap.value = p.bumpMap, g54.bumpScale.value = p.bumpScale, p.side === ot && (g54.bumpScale.value *= -1)), p.normalMap && (g54.normalMap.value = p.normalMap, g54.normalScale.value.copy(p.normalScale), p.side === ot && g54.normalScale.value.negate()), p.displacementMap && (g54.displacementMap.value = p.displacementMap, g54.displacementScale.value = p.displacementScale, g54.displacementBias.value = p.displacementBias), s145.get(p).envMap && (g54.envMapIntensity.value = p.envMapIntensity);
    }
    function d(g55, p, M) {
        h(g55, p), g55.ior.value = p.ior, p.sheen > 0 && (g55.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g55.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g55.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (g55.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (g55.clearcoat.value = p.clearcoat, g55.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g55.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (g55.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (g55.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), g55.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === ot && g55.clearcoatNormalScale.value.negate())), p.transmission > 0 && (g55.transmission.value = p.transmission, g55.transmissionSamplerMap.value = M.texture, g55.transmissionSamplerSize.value.set(M.width, M.height), p.transmissionMap && (g55.transmissionMap.value = p.transmissionMap), g55.thickness.value = p.thickness, p.thicknessMap && (g55.thicknessMap.value = p.thicknessMap), g55.attenuationDistance.value = p.attenuationDistance, g55.attenuationColor.value.copy(p.attenuationColor)), g55.specularIntensity.value = p.specularIntensity, g55.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (g55.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (g55.specularColorMap.value = p.specularColorMap);
    }
    function f(g56, p) {
        p.matcap && (g56.matcap.value = p.matcap), p.bumpMap && (g56.bumpMap.value = p.bumpMap, g56.bumpScale.value = p.bumpScale, p.side === ot && (g56.bumpScale.value *= -1)), p.normalMap && (g56.normalMap.value = p.normalMap, g56.normalScale.value.copy(p.normalScale), p.side === ot && g56.normalScale.value.negate()), p.displacementMap && (g56.displacementMap.value = p.displacementMap, g56.displacementScale.value = p.displacementScale, g56.displacementBias.value = p.displacementBias);
    }
    function m(g57, p) {
        p.displacementMap && (g57.displacementMap.value = p.displacementMap, g57.displacementScale.value = p.displacementScale, g57.displacementBias.value = p.displacementBias);
    }
    function x(g58, p) {
        p.displacementMap && (g58.displacementMap.value = p.displacementMap, g58.displacementScale.value = p.displacementScale, g58.displacementBias.value = p.displacementBias), g58.referencePosition.value.copy(p.referencePosition), g58.nearDistance.value = p.nearDistance, g58.farDistance.value = p.farDistance;
    }
    function _(g59, p) {
        p.bumpMap && (g59.bumpMap.value = p.bumpMap, g59.bumpScale.value = p.bumpScale, p.side === ot && (g59.bumpScale.value *= -1)), p.normalMap && (g59.normalMap.value = p.normalMap, g59.normalScale.value.copy(p.normalScale), p.side === ot && g59.normalScale.value.negate()), p.displacementMap && (g59.displacementMap.value = p.displacementMap, g59.displacementScale.value = p.displacementScale, g59.displacementBias.value = p.displacementBias);
    }
    return {
        refreshFogUniforms: e,
        refreshMaterialUniforms: t
    };
}
function cx() {
    let s146 = pr("canvas");
    return s146.style.display = "block", s146;
}
function Xe(s147 = {}) {
    let e = s147.canvas !== void 0 ? s147.canvas : cx(), t = s147.context !== void 0 ? s147.context : null, n = s147.alpha !== void 0 ? s147.alpha : !1, i = s147.depth !== void 0 ? s147.depth : !0, r = s147.stencil !== void 0 ? s147.stencil : !0, o = s147.antialias !== void 0 ? s147.antialias : !1, a = s147.premultipliedAlpha !== void 0 ? s147.premultipliedAlpha : !0, l = s147.preserveDrawingBuffer !== void 0 ? s147.preserveDrawingBuffer : !1, c = s147.powerPreference !== void 0 ? s147.powerPreference : "default", u = s147.failIfMajorPerformanceCaveat !== void 0 ? s147.failIfMajorPerformanceCaveat : !1, h = null, d = null, f = [], m = [];
    this.domElement = e, this.debug = {
        checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Tn, this.physicallyCorrectLights = !1, this.toneMapping = wn, this.toneMappingExposure = 1;
    let x = this, _ = !1, g60 = 0, p = 0, M = null, y41 = -1, b42 = null, T = new We, R = new We, P20 = null, H = e.width, N = e.height, v = 1, C = null, D39 = null, B = new We(0, 0, H, N), z = new We(0, 0, H, N), F = !1, W = new Br, j = !1, ue = !1, k = null, $ = new de, re12 = new w, pe15 = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
    };
    function ye13() {
        return M === null ? v : 1;
    }
    let G10 = t;
    function Ge(E, I1) {
        for(let U1 = 0; U1 < E.length; U1++){
            let O = E[U1], Y = e.getContext(O, I1);
            if (Y !== null) return Y;
        }
        return null;
    }
    try {
        let E = {
            alpha: !0,
            depth: i,
            stencil: r,
            antialias: o,
            premultipliedAlpha: a,
            preserveDrawingBuffer: l,
            powerPreference: c,
            failIfMajorPerformanceCaveat: u
        };
        if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${pa}`), e.addEventListener("webglcontextlost", Re7, !1), e.addEventListener("webglcontextrestored", L, !1), G10 === null) {
            let I2 = [
                "webgl2",
                "webgl",
                "experimental-webgl"
            ];
            if (x.isWebGL1Renderer === !0 && I2.shift(), G10 = Ge(I2, E), G10 === null) throw Ge(I2) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        G10.getShaderPrecisionFormat === void 0 && (G10.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            };
        });
    } catch (E1) {
        throw console.error("THREE.WebGLRenderer: " + E1.message), E1;
    }
    let ge, Se7, le9, Le5, Ee5, X, ee, K, ce4, oe4, we4, Te4, Ne4, Je, qe, A, S, q21, Q20, me15, V13, _e11, xe9;
    function se() {
        ge = new Pm(G10), Se7 = new Em(G10, ge, s147), ge.init(Se7), _e11 = new ox(G10, ge, Se7), le9 = new rx(G10, ge, Se7), Le5 = new Fm(G10), Ee5 = new Jg, X = new sx(G10, ge, le9, Ee5, Se7, _e11, Le5), ee = new Am(x), K = new Lm(x), ce4 = new Yd(G10, Se7), xe9 = new bm(G10, ge, ce4, Se7), oe4 = new Dm(G10, ce4, Le5, xe9), we4 = new Om(G10, oe4, ce4, Le5), Q20 = new zm(G10, Se7, X), A = new Tm(Ee5), Te4 = new Xg(x, ee, K, ge, Se7, xe9, A), Ne4 = new lx(Ee5), Je = new Zg, qe = new tx(ge, Se7), q21 = new wm(x, ee, le9, we4, n, a), S = new Ch(x, we4, Se7), me15 = new Sm(G10, ge, Le5, Se7), V13 = new Im(G10, ge, Le5, Se7), Le5.programs = Te4.programs, x.capabilities = Se7, x.extensions = ge, x.properties = Ee5, x.renderLists = Je, x.shadowMap = S, x.state = le9, x.info = Le5;
    }
    se();
    let ie7 = new Lh(x, G10);
    this.xr = ie7, this.getContext = function() {
        return G10;
    }, this.getContextAttributes = function() {
        return G10.getContextAttributes();
    }, this.forceContextLoss = function() {
        let E = ge.get("WEBGL_lose_context");
        E && E.loseContext();
    }, this.forceContextRestore = function() {
        let E = ge.get("WEBGL_lose_context");
        E && E.restoreContext();
    }, this.getPixelRatio = function() {
        return v;
    }, this.setPixelRatio = function(E) {
        E !== void 0 && (v = E, this.setSize(H, N, !1));
    }, this.getSize = function(E) {
        return E.set(H, N);
    }, this.setSize = function(E, I3, U2) {
        if (ie7.isPresenting) {
            console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
            return;
        }
        H = E, N = I3, e.width = Math.floor(E * v), e.height = Math.floor(I3 * v), U2 !== !1 && (e.style.width = E + "px", e.style.height = I3 + "px"), this.setViewport(0, 0, E, I3);
    }, this.getDrawingBufferSize = function(E) {
        return E.set(H * v, N * v).floor();
    }, this.setDrawingBufferSize = function(E, I4, U3) {
        H = E, N = I4, v = U3, e.width = Math.floor(E * U3), e.height = Math.floor(I4 * U3), this.setViewport(0, 0, E, I4);
    }, this.getCurrentViewport = function(E) {
        return E.copy(T);
    }, this.getViewport = function(E) {
        return E.copy(B);
    }, this.setViewport = function(E, I5, U4, O) {
        E.isVector4 ? B.set(E.x, E.y, E.z, E.w) : B.set(E, I5, U4, O), le9.viewport(T.copy(B).multiplyScalar(v).floor());
    }, this.getScissor = function(E) {
        return E.copy(z);
    }, this.setScissor = function(E, I6, U5, O) {
        E.isVector4 ? z.set(E.x, E.y, E.z, E.w) : z.set(E, I6, U5, O), le9.scissor(R.copy(z).multiplyScalar(v).floor());
    }, this.getScissorTest = function() {
        return F;
    }, this.setScissorTest = function(E) {
        le9.setScissorTest(F = E);
    }, this.setOpaqueSort = function(E) {
        C = E;
    }, this.setTransparentSort = function(E) {
        D39 = E;
    }, this.getClearColor = function(E) {
        return E.copy(q21.getClearColor());
    }, this.setClearColor = function() {
        q21.setClearColor.apply(q21, arguments);
    }, this.getClearAlpha = function() {
        return q21.getClearAlpha();
    }, this.setClearAlpha = function() {
        q21.setClearAlpha.apply(q21, arguments);
    }, this.clear = function(E, I7, U6) {
        let O = 0;
        (E === void 0 || E) && (O |= 16384), (I7 === void 0 || I7) && (O |= 256), (U6 === void 0 || U6) && (O |= 1024), G10.clear(O);
    }, this.clearColor = function() {
        this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
        this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
        this.clear(!1, !1, !0);
    }, this.dispose = function() {
        e.removeEventListener("webglcontextlost", Re7, !1), e.removeEventListener("webglcontextrestored", L, !1), Je.dispose(), qe.dispose(), Ee5.dispose(), ee.dispose(), K.dispose(), we4.dispose(), xe9.dispose(), Te4.dispose(), ie7.dispose(), ie7.removeEventListener("sessionstart", Be), ie7.removeEventListener("sessionend", je), k && (k.dispose(), k = null), At.stop();
    };
    function Re7(E) {
        E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0;
    }
    function L() {
        console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
        let E = Le5.autoReset, I8 = S.enabled, U7 = S.autoUpdate, O = S.needsUpdate, Y = S.type;
        se(), Le5.autoReset = E, S.enabled = I8, S.autoUpdate = U7, S.needsUpdate = O, S.type = Y;
    }
    function fe(E) {
        let I9 = E.target;
        I9.removeEventListener("dispose", fe), ae12(I9);
    }
    function ae12(E) {
        be10(E), Ee5.remove(E);
    }
    function be10(E) {
        let I10 = Ee5.get(E).programs;
        I10 !== void 0 && (I10.forEach(function(U8) {
            Te4.releaseProgram(U8);
        }), E.isShaderMaterial && Te4.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, I11, U9, O, Y, Ae1) {
        I11 === null && (I11 = pe15);
        let Ce1 = Y.isMesh && Y.matrixWorld.determinant() < 0, De = yu(E, I11, U9, O, Y);
        le9.setMaterial(O, Ce1);
        let Pe1 = U9.index, Ve = U9.attributes.position;
        if (Pe1 === null) {
            if (Ve === void 0 || Ve.count === 0) return;
        } else if (Pe1.count === 0) return;
        let Oe1 = 1;
        O.wireframe === !0 && (Pe1 = oe4.getWireframeAttribute(U9), Oe1 = 2), xe9.setup(Y, O, De, U9, Pe1);
        let He1, et = me15;
        Pe1 !== null && (He1 = ce4.get(Pe1), et = V13, et.setIndex(He1));
        let Fn = Pe1 !== null ? Pe1.count : Ve.count, ti = U9.drawRange.start * Oe1, ke = U9.drawRange.count * Oe1, kt = Ae1 !== null ? Ae1.start * Oe1 : 0, ht = Ae1 !== null ? Ae1.count * Oe1 : 1 / 0, Vt = Math.max(ti, kt), Wr = Math.min(Fn, ti + ke, kt + ht) - 1, Wt = Math.max(0, Wr - Vt + 1);
        if (Wt !== 0) {
            if (Y.isMesh) O.wireframe === !0 ? (le9.setLineWidth(O.wireframeLinewidth * ye13()), et.setMode(1)) : et.setMode(4);
            else if (Y.isLine) {
                let Kt = O.linewidth;
                Kt === void 0 && (Kt = 1), le9.setLineWidth(Kt * ye13()), Y.isLineSegments ? et.setMode(1) : Y.isLineLoop ? et.setMode(2) : et.setMode(3);
            } else Y.isPoints ? et.setMode(0) : Y.isSprite && et.setMode(4);
            if (Y.isInstancedMesh) et.renderInstances(Vt, Wt, Y.count);
            else if (U9.isInstancedBufferGeometry) {
                let Kt = Math.min(U9.instanceCount, U9._maxInstanceCount);
                et.renderInstances(Vt, Wt, Kt);
            } else et.render(Vt, Wt);
        }
    }, this.compile = function(E, I12) {
        d = qe.get(E), d.init(), m.push(d), E.traverseVisible(function(U10) {
            U10.isLight && U10.layers.test(I12.layers) && (d.pushLight(U10), U10.castShadow && d.pushShadow(U10));
        }), d.setupLights(x.physicallyCorrectLights), E.traverse(function(U11) {
            let O = U11.material;
            if (O) if (Array.isArray(O)) for(let Y = 0; Y < O.length; Y++){
                let Ae2 = O[Y];
                xo(Ae2, E, U11);
            }
            else xo(O, E, U11);
        }), m.pop(), d = null;
    };
    let J19 = null;
    function ve12(E) {
        J19 && J19(E);
    }
    function Be() {
        At.stop();
    }
    function je() {
        At.start();
    }
    let At = new xh;
    At.setAnimationLoop(ve12), typeof document < "u" && At.setContext(window), this.setAnimationLoop = function(E) {
        J19 = E, ie7.setAnimationLoop(E), E === null ? At.stop() : At.start();
    }, ie7.addEventListener("sessionstart", Be), ie7.addEventListener("sessionend", je), this.render = function(E, I13) {
        if (I13 !== void 0 && I13.isCamera !== !0) {
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            return;
        }
        if (_ === !0) return;
        E.autoUpdate === !0 && E.updateMatrixWorld(), I13.parent === null && I13.updateMatrixWorld(), ie7.enabled === !0 && ie7.isPresenting === !0 && (ie7.cameraAutoUpdate === !0 && ie7.updateCamera(I13), I13 = ie7.getCamera()), E.isScene === !0 && E.onBeforeRender(x, E, I13, M), d = qe.get(E, m.length), d.init(), m.push(d), $.multiplyMatrices(I13.projectionMatrix, I13.matrixWorldInverse), W.setFromProjectionMatrix($), ue = this.localClippingEnabled, j = A.init(this.clippingPlanes, ue, I13), h = Je.get(E, f.length), h.init(), f.push(h), Qe(E, I13, 0, x.sortObjects), h.finish(), x.sortObjects === !0 && h.sort(C, D39), j === !0 && A.beginShadows();
        let U12 = d.state.shadowsArray;
        if (S.render(U12, E, I13), j === !0 && A.endShadows(), this.info.autoReset === !0 && this.info.reset(), q21.render(h, E), d.setupLights(x.physicallyCorrectLights), I13.isArrayCamera) {
            let O = I13.cameras;
            for(let Y = 0, Ae3 = O.length; Y < Ae3; Y++){
                let Ce2 = O[Y];
                Gt(h, E, Ce2, Ce2.viewport);
            }
        } else Gt(h, E, I13);
        M !== null && (X.updateMultisampleRenderTarget(M), X.updateRenderTargetMipmap(M)), E.isScene === !0 && E.onAfterRender(x, E, I13), le9.buffers.depth.setTest(!0), le9.buffers.depth.setMask(!0), le9.buffers.color.setMask(!0), le9.setPolygonOffset(!1), xe9.resetDefaultState(), y41 = -1, b42 = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null, f.pop(), f.length > 0 ? h = f[f.length - 1] : h = null;
    };
    function Qe(E, I14, U13, O) {
        if (E.visible === !1) return;
        if (E.layers.test(I14.layers)) {
            if (E.isGroup) U13 = E.renderOrder;
            else if (E.isLOD) E.autoUpdate === !0 && E.update(I14);
            else if (E.isLight) d.pushLight(E), E.castShadow && d.pushShadow(E);
            else if (E.isSprite) {
                if (!E.frustumCulled || W.intersectsSprite(E)) {
                    O && re12.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);
                    let Ce3 = we4.update(E), De = E.material;
                    De.visible && h.push(E, Ce3, De, U13, re12.z, null);
                }
            } else if ((E.isMesh || E.isLine || E.isPoints) && (E.isSkinnedMesh && E.skeleton.frame !== Le5.render.frame && (E.skeleton.update(), E.skeleton.frame = Le5.render.frame), !E.frustumCulled || W.intersectsObject(E))) {
                O && re12.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);
                let Ce4 = we4.update(E), De = E.material;
                if (Array.isArray(De)) {
                    let Pe2 = Ce4.groups;
                    for(let Ve = 0, Oe2 = Pe2.length; Ve < Oe2; Ve++){
                        let He2 = Pe2[Ve], et = De[He2.materialIndex];
                        et && et.visible && h.push(E, Ce4, et, U13, re12.z, He2);
                    }
                } else De.visible && h.push(E, Ce4, De, U13, re12.z, null);
            }
        }
        let Ae4 = E.children;
        for(let Ce5 = 0, De = Ae4.length; Ce5 < De; Ce5++)Qe(Ae4[Ce5], I14, U13, O);
    }
    function Gt(E, I15, U14, O) {
        let Y = E.opaque, Ae5 = E.transmissive, Ce6 = E.transparent;
        d.setupLightsView(U14), Ae5.length > 0 && jt(Y, I15, U14), O && le9.viewport(T.copy(O)), Y.length > 0 && Vr(Y, I15, U14), Ae5.length > 0 && Vr(Ae5, I15, U14), Ce6.length > 0 && Vr(Ce6, I15, U14);
    }
    function jt(E, I16, U15) {
        if (k === null) {
            let Ce7 = o === !0 && Se7.isWebGL2 === !0 ? Xs : Pt;
            k = new Ce7(1024, 1024, {
                generateMipmaps: !0,
                type: _e11.convert(Ti) !== null ? Ti : bn,
                minFilter: Gi,
                magFilter: at,
                wrapS: Mt,
                wrapT: Mt,
                useRenderToTexture: ge.has("WEBGL_multisampled_render_to_texture")
            });
        }
        let O = x.getRenderTarget();
        x.setRenderTarget(k), x.clear();
        let Y = x.toneMapping;
        x.toneMapping = wn, Vr(E, I16, U15), x.toneMapping = Y, X.updateMultisampleRenderTarget(k), X.updateRenderTargetMipmap(k), x.setRenderTarget(O);
    }
    function Vr(E, I17, U16) {
        let O = I17.isScene === !0 ? I17.overrideMaterial : null;
        for(let Y = 0, Ae6 = E.length; Y < Ae6; Y++){
            let Ce8 = E[Y], De = Ce8.object, Pe3 = Ce8.geometry, Ve = O === null ? Ce8.material : O, Oe3 = Ce8.group;
            De.layers.test(U16.layers) && xu(De, I17, U16, Pe3, Ve, Oe3);
        }
    }
    function xu(E, I18, U17, O, Y, Ae7) {
        E.onBeforeRender(x, I18, U17, O, Y, Ae7), E.modelViewMatrix.multiplyMatrices(U17.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), Y.onBeforeRender(x, I18, U17, O, E, Ae7), Y.transparent === !0 && Y.side === Pi ? (Y.side = ot, Y.needsUpdate = !0, x.renderBufferDirect(U17, I18, O, Y, E, Ae7), Y.side = Li, Y.needsUpdate = !0, x.renderBufferDirect(U17, I18, O, Y, E, Ae7), Y.side = Pi) : x.renderBufferDirect(U17, I18, O, Y, E, Ae7), E.onAfterRender(x, I18, U17, O, Y, Ae7);
    }
    function xo(E, I19, U18) {
        I19.isScene !== !0 && (I19 = pe15);
        let O = Ee5.get(E), Y = d.state.lights, Ae8 = d.state.shadowsArray, Ce9 = Y.state.version, De = Te4.getParameters(E, Y.state, Ae8, I19, U18), Pe4 = Te4.getProgramCacheKey(De), Ve = O.programs;
        O.environment = E.isMeshStandardMaterial ? I19.environment : null, O.fog = I19.fog, O.envMap = (E.isMeshStandardMaterial ? K : ee).get(E.envMap || O.environment), Ve === void 0 && (E.addEventListener("dispose", fe), Ve = new Map, O.programs = Ve);
        let Oe4 = Ve.get(Pe4);
        if (Oe4 !== void 0) {
            if (O.currentProgram === Oe4 && O.lightsStateVersion === Ce9) return nl(E, De), Oe4;
        } else De.uniforms = Te4.getUniforms(E), E.onBuild(U18, De, x), E.onBeforeCompile(De, x), Oe4 = Te4.acquireProgram(De, Pe4), Ve.set(Pe4, Oe4), O.uniforms = De.uniforms;
        let He3 = O.uniforms;
        (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (He3.clippingPlanes = A.uniform), nl(E, De), O.needsLights = vu(E), O.lightsStateVersion = Ce9, O.needsLights && (He3.ambientLightColor.value = Y.state.ambient, He3.lightProbe.value = Y.state.probe, He3.directionalLights.value = Y.state.directional, He3.directionalLightShadows.value = Y.state.directionalShadow, He3.spotLights.value = Y.state.spot, He3.spotLightShadows.value = Y.state.spotShadow, He3.rectAreaLights.value = Y.state.rectArea, He3.ltc_1.value = Y.state.rectAreaLTC1, He3.ltc_2.value = Y.state.rectAreaLTC2, He3.pointLights.value = Y.state.point, He3.pointLightShadows.value = Y.state.pointShadow, He3.hemisphereLights.value = Y.state.hemi, He3.directionalShadowMap.value = Y.state.directionalShadowMap, He3.directionalShadowMatrix.value = Y.state.directionalShadowMatrix, He3.spotShadowMap.value = Y.state.spotShadowMap, He3.spotShadowMatrix.value = Y.state.spotShadowMatrix, He3.pointShadowMap.value = Y.state.pointShadowMap, He3.pointShadowMatrix.value = Y.state.pointShadowMatrix);
        let et = Oe4.getUniforms(), Fn = En.seqWithValue(et.seq, He3);
        return O.currentProgram = Oe4, O.uniformsList = Fn, Oe4;
    }
    function nl(E, I20) {
        let U19 = Ee5.get(E);
        U19.outputEncoding = I20.outputEncoding, U19.instancing = I20.instancing, U19.skinning = I20.skinning, U19.morphTargets = I20.morphTargets, U19.morphNormals = I20.morphNormals, U19.morphTargetsCount = I20.morphTargetsCount, U19.numClippingPlanes = I20.numClippingPlanes, U19.numIntersection = I20.numClipIntersection, U19.vertexAlphas = I20.vertexAlphas, U19.vertexTangents = I20.vertexTangents, U19.toneMapping = I20.toneMapping;
    }
    function yu(E, I21, U20, O, Y) {
        I21.isScene !== !0 && (I21 = pe15), X.resetTextureUnits();
        let Ae9 = I21.fog, Ce10 = O.isMeshStandardMaterial ? I21.environment : null, De = M === null ? x.outputEncoding : M.isXRRenderTarget === !0 ? M.texture.encoding : Tn, Pe5 = (O.isMeshStandardMaterial ? K : ee).get(O.envMap || Ce10), Ve = O.vertexColors === !0 && !!U20.attributes.color && U20.attributes.color.itemSize === 4, Oe5 = !!O.normalMap && !!U20.attributes.tangent, He4 = !!U20.morphAttributes.position, et = !!U20.morphAttributes.normal, Fn = U20.morphAttributes.position ? U20.morphAttributes.position.length : 0, ti = O.toneMapped ? x.toneMapping : wn, ke = Ee5.get(O), kt = d.state.lights;
        if (j === !0 && (ue === !0 || E !== b42)) {
            let Bt = E === b42 && O.id === y41;
            A.setState(O, E, Bt);
        }
        let ht = !1;
        O.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== kt.state.version || ke.outputEncoding !== De || Y.isInstancedMesh && ke.instancing === !1 || !Y.isInstancedMesh && ke.instancing === !0 || Y.isSkinnedMesh && ke.skinning === !1 || !Y.isSkinnedMesh && ke.skinning === !0 || ke.envMap !== Pe5 || O.fog && ke.fog !== Ae9 || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== A.numPlanes || ke.numIntersection !== A.numIntersection) || ke.vertexAlphas !== Ve || ke.vertexTangents !== Oe5 || ke.morphTargets !== He4 || ke.morphNormals !== et || ke.toneMapping !== ti || Se7.isWebGL2 === !0 && ke.morphTargetsCount !== Fn) && (ht = !0) : (ht = !0, ke.__version = O.version);
        let Vt = ke.currentProgram;
        ht === !0 && (Vt = xo(O, I21, Y));
        let Wr = !1, Wt = !1, Kt = !1, _t = Vt.getUniforms(), Yi = ke.uniforms;
        if (le9.useProgram(Vt.program) && (Wr = !0, Wt = !0, Kt = !0), O.id !== y41 && (y41 = O.id, Wt = !0), Wr || b42 !== E) {
            if (_t.setValue(G10, "projectionMatrix", E.projectionMatrix), Se7.logarithmicDepthBuffer && _t.setValue(G10, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), b42 !== E && (b42 = E, Wt = !0, Kt = !0), O.isShaderMaterial || O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshStandardMaterial || O.envMap) {
                let Bt = _t.map.cameraPosition;
                Bt !== void 0 && Bt.setValue(G10, re12.setFromMatrixPosition(E.matrixWorld));
            }
            (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && _t.setValue(G10, "isOrthographic", E.isOrthographicCamera === !0), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial || O.isShadowMaterial || Y.isSkinnedMesh) && _t.setValue(G10, "viewMatrix", E.matrixWorldInverse);
        }
        if (Y.isSkinnedMesh) {
            _t.setOptional(G10, Y, "bindMatrix"), _t.setOptional(G10, Y, "bindMatrixInverse");
            let Bt = Y.skeleton;
            Bt && (Se7.floatVertexTextures ? (Bt.boneTexture === null && Bt.computeBoneTexture(), _t.setValue(G10, "boneTexture", Bt.boneTexture, X), _t.setValue(G10, "boneTextureSize", Bt.boneTextureSize)) : _t.setOptional(G10, Bt, "boneMatrices"));
        }
        return !!U20 && (U20.morphAttributes.position !== void 0 || U20.morphAttributes.normal !== void 0) && Q20.update(Y, U20, O, Vt), (Wt || ke.receiveShadow !== Y.receiveShadow) && (ke.receiveShadow = Y.receiveShadow, _t.setValue(G10, "receiveShadow", Y.receiveShadow)), Wt && (_t.setValue(G10, "toneMappingExposure", x.toneMappingExposure), ke.needsLights && _u(Yi, Kt), Ae9 && O.fog && Ne4.refreshFogUniforms(Yi, Ae9), Ne4.refreshMaterialUniforms(Yi, O, v, N, k), En.upload(G10, ke.uniformsList, Yi, X)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (En.upload(G10, ke.uniformsList, Yi, X), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && _t.setValue(G10, "center", Y.center), _t.setValue(G10, "modelViewMatrix", Y.modelViewMatrix), _t.setValue(G10, "normalMatrix", Y.normalMatrix), _t.setValue(G10, "modelMatrix", Y.matrixWorld), Vt;
    }
    function _u(E, I22) {
        E.ambientLightColor.needsUpdate = I22, E.lightProbe.needsUpdate = I22, E.directionalLights.needsUpdate = I22, E.directionalLightShadows.needsUpdate = I22, E.pointLights.needsUpdate = I22, E.pointLightShadows.needsUpdate = I22, E.spotLights.needsUpdate = I22, E.spotLightShadows.needsUpdate = I22, E.rectAreaLights.needsUpdate = I22, E.hemisphereLights.needsUpdate = I22;
    }
    function vu(E) {
        return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
        return g60;
    }, this.getActiveMipmapLevel = function() {
        return p;
    }, this.getRenderTarget = function() {
        return M;
    }, this.setRenderTargetTextures = function(E, I23, U21) {
        Ee5.get(E.texture).__webglTexture = I23, Ee5.get(E.depthTexture).__webglTexture = U21;
        let O = Ee5.get(E);
        O.__hasExternalTextures = !0, O.__hasExternalTextures && (O.__autoAllocateDepthBuffer = U21 === void 0, O.__autoAllocateDepthBuffer || E.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"), E.useRenderToTexture = !1, E.useRenderbuffer = !0));
    }, this.setRenderTargetFramebuffer = function(E, I24) {
        let U22 = Ee5.get(E);
        U22.__webglFramebuffer = I24, U22.__useDefaultFramebuffer = I24 === void 0;
    }, this.setRenderTarget = function(E, I25 = 0, U23 = 0) {
        M = E, g60 = I25, p = U23;
        let O = !0;
        if (E) {
            let Pe6 = Ee5.get(E);
            Pe6.__useDefaultFramebuffer !== void 0 ? (le9.bindFramebuffer(36160, null), O = !1) : Pe6.__webglFramebuffer === void 0 ? X.setupRenderTarget(E) : Pe6.__hasExternalTextures && X.rebindTextures(E, Ee5.get(E.texture).__webglTexture, Ee5.get(E.depthTexture).__webglTexture);
        }
        let Y = null, Ae10 = !1, Ce11 = !1;
        if (E) {
            let Pe7 = E.texture;
            (Pe7.isDataTexture3D || Pe7.isDataTexture2DArray) && (Ce11 = !0);
            let Ve = Ee5.get(E).__webglFramebuffer;
            E.isWebGLCubeRenderTarget ? (Y = Ve[I25], Ae10 = !0) : E.useRenderbuffer ? Y = Ee5.get(E).__webglMultisampledFramebuffer : Y = Ve, T.copy(E.viewport), R.copy(E.scissor), P20 = E.scissorTest;
        } else T.copy(B).multiplyScalar(v).floor(), R.copy(z).multiplyScalar(v).floor(), P20 = F;
        if (le9.bindFramebuffer(36160, Y) && Se7.drawBuffers && O && le9.drawBuffers(E, Y), le9.viewport(T), le9.scissor(R), le9.setScissorTest(P20), Ae10) {
            let Pe8 = Ee5.get(E.texture);
            G10.framebufferTexture2D(36160, 36064, 34069 + I25, Pe8.__webglTexture, U23);
        } else if (Ce11) {
            let Pe9 = Ee5.get(E.texture), Ve = I25 || 0;
            G10.framebufferTextureLayer(36160, 36064, Pe9.__webglTexture, U23 || 0, Ve);
        }
        y41 = -1;
    }, this.readRenderTargetPixels = function(E, I26, U24, O, Y, Ae11, Ce12) {
        if (!(E && E.isWebGLRenderTarget)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            return;
        }
        let De = Ee5.get(E).__webglFramebuffer;
        if (E.isWebGLCubeRenderTarget && Ce12 !== void 0 && (De = De[Ce12]), De) {
            le9.bindFramebuffer(36160, De);
            try {
                let Pe10 = E.texture, Ve = Pe10.format, Oe6 = Pe10.type;
                if (Ve !== wt && _e11.convert(Ve) !== G10.getParameter(35739)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    return;
                }
                let He5 = Oe6 === Ti && (ge.has("EXT_color_buffer_half_float") || Se7.isWebGL2 && ge.has("EXT_color_buffer_float"));
                if (Oe6 !== bn && _e11.convert(Oe6) !== G10.getParameter(35738) && !(Oe6 === vn && (Se7.isWebGL2 || ge.has("OES_texture_float") || ge.has("WEBGL_color_buffer_float"))) && !He5) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    return;
                }
                G10.checkFramebufferStatus(36160) === 36053 ? I26 >= 0 && I26 <= E.width - O && U24 >= 0 && U24 <= E.height - Y && G10.readPixels(I26, U24, O, Y, _e11.convert(Ve), _e11.convert(Oe6), Ae11) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
            } finally{
                let Pe11 = M !== null ? Ee5.get(M).__webglFramebuffer : null;
                le9.bindFramebuffer(36160, Pe11);
            }
        }
    }, this.copyFramebufferToTexture = function(E, I27, U25 = 0) {
        if (I27.isFramebufferTexture !== !0) {
            console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
            return;
        }
        let O = Math.pow(2, -U25), Y = Math.floor(I27.image.width * O), Ae12 = Math.floor(I27.image.height * O);
        X.setTexture2D(I27, 0), G10.copyTexSubImage2D(3553, U25, 0, 0, E.x, E.y, Y, Ae12), le9.unbindTexture();
    }, this.copyTextureToTexture = function(E, I28, U26, O = 0) {
        let Y = I28.image.width, Ae13 = I28.image.height, Ce13 = _e11.convert(U26.format), De = _e11.convert(U26.type);
        X.setTexture2D(U26, 0), G10.pixelStorei(37440, U26.flipY), G10.pixelStorei(37441, U26.premultiplyAlpha), G10.pixelStorei(3317, U26.unpackAlignment), I28.isDataTexture ? G10.texSubImage2D(3553, O, E.x, E.y, Y, Ae13, Ce13, De, I28.image.data) : I28.isCompressedTexture ? G10.compressedTexSubImage2D(3553, O, E.x, E.y, I28.mipmaps[0].width, I28.mipmaps[0].height, Ce13, I28.mipmaps[0].data) : G10.texSubImage2D(3553, O, E.x, E.y, Ce13, De, I28.image), O === 0 && U26.generateMipmaps && G10.generateMipmap(3553), le9.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, I29, U27, O, Y = 0) {
        if (x.isWebGL1Renderer) {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            return;
        }
        let Ae14 = E.max.x - E.min.x + 1, Ce14 = E.max.y - E.min.y + 1, De = E.max.z - E.min.z + 1, Pe12 = _e11.convert(O.format), Ve = _e11.convert(O.type), Oe7;
        if (O.isDataTexture3D) X.setTexture3D(O, 0), Oe7 = 32879;
        else if (O.isDataTexture2DArray) X.setTexture2DArray(O, 0), Oe7 = 35866;
        else {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            return;
        }
        G10.pixelStorei(37440, O.flipY), G10.pixelStorei(37441, O.premultiplyAlpha), G10.pixelStorei(3317, O.unpackAlignment);
        let He6 = G10.getParameter(3314), et = G10.getParameter(32878), Fn = G10.getParameter(3316), ti = G10.getParameter(3315), ke = G10.getParameter(32877), kt = U27.isCompressedTexture ? U27.mipmaps[0] : U27.image;
        G10.pixelStorei(3314, kt.width), G10.pixelStorei(32878, kt.height), G10.pixelStorei(3316, E.min.x), G10.pixelStorei(3315, E.min.y), G10.pixelStorei(32877, E.min.z), U27.isDataTexture || U27.isDataTexture3D ? G10.texSubImage3D(Oe7, Y, I29.x, I29.y, I29.z, Ae14, Ce14, De, Pe12, Ve, kt.data) : U27.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), G10.compressedTexSubImage3D(Oe7, Y, I29.x, I29.y, I29.z, Ae14, Ce14, De, Pe12, kt.data)) : G10.texSubImage3D(Oe7, Y, I29.x, I29.y, I29.z, Ae14, Ce14, De, Pe12, Ve, kt), G10.pixelStorei(3314, He6), G10.pixelStorei(32878, et), G10.pixelStorei(3316, Fn), G10.pixelStorei(3315, ti), G10.pixelStorei(32877, ke), Y === 0 && O.generateMipmaps && G10.generateMipmap(Oe7), le9.unbindTexture();
    }, this.initTexture = function(E) {
        X.setTexture2D(E, 0), le9.unbindTexture();
    }, this.resetState = function() {
        g60 = 0, p = 0, M = null, le9.reset(), xe9.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }));
}
Xe.prototype.isWebGLRenderer = !0;
var Ph = class extends Xe {
};
Ph.prototype.isWebGL1Renderer = !0;
var zr = class {
    constructor(e, t = 0.00025){
        this.name = "", this.color = new ne(e), this.density = t;
    }
    clone() {
        return new zr(this.color, this.density);
    }
    toJSON() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        };
    }
};
zr.prototype.isFogExp2 = !0;
var Or = class {
    constructor(e, t = 1, n = 1000){
        this.name = "", this.color = new ne(e), this.near = t, this.far = n;
    }
    clone() {
        return new Or(this.color, this.near, this.far);
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
Or.prototype.isFog = !0;
var no = class extends Fe {
    constructor(){
        super();
        this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
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
no.prototype.isScene = !0;
var jn = class {
    constructor(e, t){
        this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = ur, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.uuid = Lt();
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
        for(let i = 0, r = this.stride; i < r; i++)this.array[e + i] = t.array[n + i];
        return this;
    }
    set(e, t = 0) {
        return this.array.set(e, t), this;
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Lt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
        return n.setUsage(this.usage), n;
    }
    onUpload(e) {
        return this.onUploadCallback = e, this;
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Lt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        };
    }
};
jn.prototype.isInterleavedBuffer = !0;
var it = new w, Rn = class {
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
        for(let t = 0, n = this.data.count; t < n; t++)it.x = this.getX(t), it.y = this.getY(t), it.z = this.getZ(t), it.applyMatrix4(e), this.setXYZ(t, it.x, it.y, it.z);
        return this;
    }
    applyNormalMatrix(e) {
        for(let t = 0, n = this.count; t < n; t++)it.x = this.getX(t), it.y = this.getY(t), it.z = this.getZ(t), it.applyNormalMatrix(e), this.setXYZ(t, it.x, it.y, it.z);
        return this;
    }
    transformDirection(e) {
        for(let t = 0, n = this.count; t < n; t++)it.x = this.getX(t), it.y = this.getY(t), it.z = this.getZ(t), it.transformDirection(e), this.setXYZ(t, it.x, it.y, it.z);
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
    setXYZW(e, t, n, i, r) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
    }
    clone(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            let t = [];
            for(let n = 0; n < this.count; n++){
                let i = n * this.data.stride + this.offset;
                for(let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]);
            }
            return new ze(new this.array.constructor(t), this.itemSize, this.normalized);
        } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Rn(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            let t = [];
            for(let n = 0; n < this.count; n++){
                let i = n * this.data.stride + this.offset;
                for(let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]);
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
Rn.prototype.isInterleavedBufferAttribute = !0;
var io = class extends pt {
    constructor(e){
        super();
        this.type = "SpriteMaterial", this.color = new ne(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this;
    }
};
io.prototype.isSpriteMaterial = !0;
var xi, Qi = new w, yi = new w, _i = new w, vi = new Z, er = new Z, Dh = new de, ds = new w, tr = new w, fs = new w, hc = new Z, Yo = new Z, uc = new Z, ro = class extends Fe {
    constructor(e){
        super();
        if (this.type = "Sprite", xi === void 0) {
            xi = new Me;
            let t = new Float32Array([
                -0.5,
                -0.5,
                0,
                0,
                0,
                0.5,
                -0.5,
                0,
                1,
                0,
                0.5,
                0.5,
                0,
                1,
                1,
                -0.5,
                0.5,
                0,
                0,
                1
            ]), n = new jn(t, 5);
            xi.setIndex([
                0,
                1,
                2,
                0,
                2,
                3
            ]), xi.setAttribute("position", new Rn(n, 3, 0, !1)), xi.setAttribute("uv", new Rn(n, 2, 3, !1));
        }
        this.geometry = xi, this.material = e !== void 0 ? e : new io, this.center = new Z(0.5, 0.5);
    }
    raycast(e, t) {
        e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), yi.setFromMatrixScale(this.matrixWorld), Dh.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), _i.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && yi.multiplyScalar(-_i.z);
        let n = this.material.rotation, i, r;
        n !== 0 && (r = Math.cos(n), i = Math.sin(n));
        let o = this.center;
        ps(ds.set(-0.5, -0.5, 0), _i, o, yi, i, r), ps(tr.set(0.5, -0.5, 0), _i, o, yi, i, r), ps(fs.set(0.5, 0.5, 0), _i, o, yi, i, r), hc.set(0, 0), Yo.set(1, 0), uc.set(1, 1);
        let a = e.ray.intersectTriangle(ds, tr, fs, !1, Qi);
        if (a === null && (ps(tr.set(-0.5, 0.5, 0), _i, o, yi, i, r), Yo.set(0, 1), a = e.ray.intersectTriangle(ds, fs, tr, !1, Qi), a === null)) return;
        let l = e.ray.origin.distanceTo(Qi);
        l < e.near || l > e.far || t.push({
            distance: l,
            point: Qi.clone(),
            uv: st.getUV(Qi, ds, tr, fs, hc, Yo, uc, new Z),
            face: null,
            object: this
        });
    }
    copy(e) {
        return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
    }
};
ro.prototype.isSprite = !0;
function ps(s148, e, t, n, i, r) {
    vi.subVectors(s148, t).addScalar(0.5).multiply(n), i !== void 0 ? (er.x = r * vi.x - i * vi.y, er.y = i * vi.x + r * vi.y) : er.copy(vi), s148.copy(e), s148.x += er.x, s148.y += er.y, s148.applyMatrix4(Dh);
}
var ms = new w, dc = new w, Ih = class extends Fe {
    constructor(){
        super();
        this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            },
            isLOD: {
                value: !0
            }
        }), this.autoUpdate = !0;
    }
    copy(e) {
        super.copy(e, !1);
        let t = e.levels;
        for(let n = 0, i = t.length; n < i; n++){
            let r = t[n];
            this.addLevel(r.object.clone(), r.distance);
        }
        return this.autoUpdate = e.autoUpdate, this;
    }
    addLevel(e, t = 0) {
        t = Math.abs(t);
        let n = this.levels, i;
        for(i = 0; i < n.length && !(t < n[i].distance); i++);
        return n.splice(i, 0, {
            distance: t,
            object: e
        }), this.add(e), this;
    }
    getCurrentLevel() {
        return this._currentLevel;
    }
    getObjectForDistance(e) {
        let t = this.levels;
        if (t.length > 0) {
            let n, i;
            for(n = 1, i = t.length; n < i && !(e < t[n].distance); n++);
            return t[n - 1].object;
        }
        return null;
    }
    raycast(e, t) {
        if (this.levels.length > 0) {
            ms.setFromMatrixPosition(this.matrixWorld);
            let i = e.ray.origin.distanceTo(ms);
            this.getObjectForDistance(i).raycast(e, t);
        }
    }
    update(e) {
        let t = this.levels;
        if (t.length > 1) {
            ms.setFromMatrixPosition(e.matrixWorld), dc.setFromMatrixPosition(this.matrixWorld);
            let n = ms.distanceTo(dc) / e.zoom;
            t[0].object.visible = !0;
            let i, r;
            for(i = 1, r = t.length; i < r && n >= t[i].distance; i++)t[i - 1].object.visible = !1, t[i].object.visible = !0;
            for(this._currentLevel = i - 1; i < r; i++)t[i].object.visible = !1;
        }
    }
    toJSON(e) {
        let t = super.toJSON(e);
        this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
        let n = this.levels;
        for(let i = 0, r = n.length; i < r; i++){
            let o = n[i];
            t.object.levels.push({
                object: o.object.uuid,
                distance: o.distance
            });
        }
        return t;
    }
}, fc = new w, pc = new We, mc = new We, hx = new w, gc = new de, so = class extends lt {
    constructor(e, t){
        super(e, t);
        this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new de, this.bindMatrixInverse = new de;
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
        let e = new We, t = this.geometry.attributes.skinWeight;
        for(let n = 0, i = t.count; n < i; n++){
            e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
            let r = 1 / e.manhattanLength();
            r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    boneTransform(e, t) {
        let n = this.skeleton, i = this.geometry;
        pc.fromBufferAttribute(i.attributes.skinIndex, e), mc.fromBufferAttribute(i.attributes.skinWeight, e), fc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
        for(let r = 0; r < 4; r++){
            let o = mc.getComponent(r);
            if (o !== 0) {
                let a = pc.getComponent(r);
                gc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(hx.copy(fc).applyMatrix4(gc), o);
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse);
    }
};
so.prototype.isSkinnedMesh = !0;
var oo = class extends Fe {
    constructor(){
        super();
        this.type = "Bone";
    }
};
oo.prototype.isBone = !0;
var Jn = class extends ct {
    constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = at, u = at, h, d){
        super(null, o, a, l, c, u, i, r, h, d);
        this.image = {
            data: e,
            width: t,
            height: n
        }, this.magFilter = c, this.minFilter = u, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
    }
};
Jn.prototype.isDataTexture = !0;
var xc = new de, ux = new de, ao = class {
    constructor(e = [], t = []){
        this.uuid = Lt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
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
        for(let e1 = 0, t2 = this.bones.length; e1 < t2; e1++){
            let n = this.bones[e1];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
        }
    }
    update() {
        let e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
        for(let r = 0, o = e.length; r < o; r++){
            let a = e[r] ? e[r].matrixWorld : ux;
            xc.multiplyMatrices(a, t[r]), xc.toArray(n, r * 16);
        }
        i !== null && (i.needsUpdate = !0);
    }
    clone() {
        return new ao(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = sh(e), e = Math.max(e, 4);
        let t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        let n = new Jn(t, e, e, wt, vn);
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
            let r = e.bones[n], o = t[r];
            o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new oo), this.bones.push(o), this.boneInverses.push(new de().fromArray(e.boneInverses[n]));
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
        for(let i = 0, r = t.length; i < r; i++){
            let o = t[i];
            e.bones.push(o.uuid);
            let a = n[i];
            e.boneInverses.push(a.toArray());
        }
        return e;
    }
}, Yn = class extends ze {
    constructor(e, t, n, i = 1){
        typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
        super(e, t, n);
        this.meshPerAttribute = i;
    }
    copy(e) {
        return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
    }
    toJSON() {
        let e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
    }
};
Yn.prototype.isInstancedBufferAttribute = !0;
var yc = new de, _c = new de, gs = [], nr = new lt, Ma = class extends lt {
    constructor(e, t, n){
        super(e, t);
        this.instanceMatrix = new Yn(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
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
        if (nr.geometry = this.geometry, nr.material = this.material, nr.material !== void 0) for(let r = 0; r < i; r++){
            this.getMatrixAt(r, yc), _c.multiplyMatrices(n, yc), nr.matrixWorld = _c, nr.raycast(e, gs);
            for(let o = 0, a = gs.length; o < a; o++){
                let l = gs[o];
                l.instanceId = r, l.object = this, t.push(l);
            }
            gs.length = 0;
        }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new Yn(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
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
Ma.prototype.isInstancedMesh = !0;
var mt = class extends pt {
    constructor(e){
        super();
        this.type = "LineBasicMaterial", this.color = new ne(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this;
    }
};
mt.prototype.isLineBasicMaterial = !0;
var vc = new w, Mc = new w, wc = new de, Zo = new In, xs = new Dn, an = class extends Fe {
    constructor(e = new Me, t = new mt){
        super();
        this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
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
            for(let i = 1, r = t.count; i < r; i++)vc.fromBufferAttribute(t, i - 1), Mc.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += vc.distanceTo(Mc);
            e.setAttribute("lineDistance", new he(n, 1));
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
    }
    raycast(e, t) {
        let n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), xs.copy(n.boundingSphere), xs.applyMatrix4(i), xs.radius += r, e.ray.intersectsSphere(xs) === !1) return;
        wc.copy(i).invert(), Zo.copy(e.ray).applyMatrix4(wc);
        let a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new w, u = new w, h = new w, d = new w, f = this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
            let m = n.index, _ = n.attributes.position;
            if (m !== null) {
                let g61 = Math.max(0, o.start), p = Math.min(m.count, o.start + o.count);
                for(let M = g61, y42 = p - 1; M < y42; M += f){
                    let b43 = m.getX(M), T = m.getX(M + 1);
                    if (c.fromBufferAttribute(_, b43), u.fromBufferAttribute(_, T), Zo.distanceSqToSegment(c, u, d, h) > l) continue;
                    d.applyMatrix4(this.matrixWorld);
                    let P21 = e.ray.origin.distanceTo(d);
                    P21 < e.near || P21 > e.far || t.push({
                        distance: P21,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: M,
                        face: null,
                        faceIndex: null,
                        object: this
                    });
                }
            } else {
                let g62 = Math.max(0, o.start), p = Math.min(_.count, o.start + o.count);
                for(let M = g62, y43 = p - 1; M < y43; M += f){
                    if (c.fromBufferAttribute(_, M), u.fromBufferAttribute(_, M + 1), Zo.distanceSqToSegment(c, u, d, h) > l) continue;
                    d.applyMatrix4(this.matrixWorld);
                    let T = e.ray.origin.distanceTo(d);
                    T < e.near || T > e.far || t.push({
                        distance: T,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: M,
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
                    for(let r = 0, o = i.length; r < o; r++){
                        let a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
                    }
                }
            }
        } else {
            let t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
};
an.prototype.isLine = !0;
var bc = new w, Sc = new w, Tt = class extends an {
    constructor(e, t){
        super(e, t);
        this.type = "LineSegments";
    }
    computeLineDistances() {
        let e = this.geometry;
        if (e.isBufferGeometry) if (e.index === null) {
            let t = e.attributes.position, n = [];
            for(let i = 0, r = t.count; i < r; i += 2)bc.fromBufferAttribute(t, i), Sc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + bc.distanceTo(Sc);
            e.setAttribute("lineDistance", new he(n, 1));
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this;
    }
};
Tt.prototype.isLineSegments = !0;
var wa = class extends an {
    constructor(e, t){
        super(e, t);
        this.type = "LineLoop";
    }
};
wa.prototype.isLineLoop = !0;
var Kn = class extends pt {
    constructor(e){
        super();
        this.type = "PointsMaterial", this.color = new ne(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this;
    }
};
Kn.prototype.isPointsMaterial = !0;
var Ec = new de, ha = new In, ys = new Dn, _s = new w, Ur = class extends Fe {
    constructor(e = new Me, t = new Kn){
        super();
        this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e) {
        return super.copy(e), this.material = e.material, this.geometry = e.geometry, this;
    }
    raycast(e, t) {
        let n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), ys.copy(n.boundingSphere), ys.applyMatrix4(i), ys.radius += r, e.ray.intersectsSphere(ys) === !1) return;
        Ec.copy(i).invert(), ha.copy(e.ray).applyMatrix4(Ec);
        let a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a;
        if (n.isBufferGeometry) {
            let c = n.index, h = n.attributes.position;
            if (c !== null) {
                let d = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
                for(let m = d, x = f; m < x; m++){
                    let _ = c.getX(m);
                    _s.fromBufferAttribute(h, _), Tc(_s, _, l, i, e, t, this);
                }
            } else {
                let d = Math.max(0, o.start), f = Math.min(h.count, o.start + o.count);
                for(let m = d, x = f; m < x; m++)_s.fromBufferAttribute(h, m), Tc(_s, m, l, i, e, t, this);
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
                    for(let r = 0, o = i.length; r < o; r++){
                        let a = i[r].name || String(r);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
                    }
                }
            }
        } else {
            let t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
        }
    }
};
Ur.prototype.isPoints = !0;
function Tc(s149, e, t, n, i, r, o) {
    let a = ha.distanceSqToPoint(s149);
    if (a < t) {
        let l = new w;
        ha.closestPointToPoint(s149, l), l.applyMatrix4(n);
        let c = i.ray.origin.distanceTo(l);
        if (c < i.near || c > i.far) return;
        r.push({
            distance: c,
            distanceToRay: Math.sqrt(a),
            point: l,
            index: e,
            face: null,
            object: o
        });
    }
}
var Fh = class extends ct {
    constructor(e, t, n, i, r, o, a, l, c){
        super(e, t, n, i, r, o, a, l, c);
        this.minFilter = o !== void 0 ? o : nt, this.magFilter = r !== void 0 ? r : nt, this.generateMipmaps = !1;
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
Fh.prototype.isVideoTexture = !0;
var Bh = class extends ct {
    constructor(e, t, n){
        super({
            width: e,
            height: t
        });
        this.format = n, this.magFilter = at, this.minFilter = at, this.generateMipmaps = !1, this.needsUpdate = !0;
    }
};
Bh.prototype.isFramebufferTexture = !0;
var ba = class extends ct {
    constructor(e, t, n, i, r, o, a, l, c, u, h, d){
        super(null, o, a, l, c, u, i, r, h, d);
        this.image = {
            width: t,
            height: n
        }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
    }
};
ba.prototype.isCompressedTexture = !0;
var Nh = class extends ct {
    constructor(e, t, n, i, r, o, a, l, c){
        super(e, t, n, i, r, o, a, l, c);
        this.needsUpdate = !0;
    }
};
Nh.prototype.isCanvasTexture = !0;
var mr = class extends Me {
    constructor(e = 1, t = 8, n = 0, i = Math.PI * 2){
        super();
        this.type = "CircleGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: n,
            thetaLength: i
        }, t = Math.max(3, t);
        let r = [], o = [], a = [], l = [], c = new w, u = new Z;
        o.push(0, 0, 0), a.push(0, 0, 1), l.push(0.5, 0.5);
        for(let h = 0, d = 3; h <= t; h++, d += 3){
            let f = n + h / t * i;
            c.x = e * Math.cos(f), c.y = e * Math.sin(f), o.push(c.x, c.y, c.z), a.push(0, 0, 1), u.x = (o[d] / e + 1) / 2, u.y = (o[d + 1] / e + 1) / 2, l.push(u.x, u.y);
        }
        for(let h1 = 1; h1 <= t; h1++)r.push(h1, h1 + 1, 0);
        this.setIndex(r), this.setAttribute("position", new he(o, 3)), this.setAttribute("normal", new he(a, 3)), this.setAttribute("uv", new he(l, 2));
    }
    static fromJSON(e) {
        return new mr(e.radius, e.segments, e.thetaStart, e.thetaLength);
    }
}, Zn = class extends Me {
    constructor(e = 1, t = 1, n = 1, i = 8, r = 1, o = !1, a = 0, l = Math.PI * 2){
        super();
        this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: o,
            thetaStart: a,
            thetaLength: l
        };
        let c = this;
        i = Math.floor(i), r = Math.floor(r);
        let u = [], h = [], d = [], f = [], m = 0, x = [], _ = n / 2, g63 = 0;
        p(), o === !1 && (e > 0 && M(!0), t > 0 && M(!1)), this.setIndex(u), this.setAttribute("position", new he(h, 3)), this.setAttribute("normal", new he(d, 3)), this.setAttribute("uv", new he(f, 2));
        function p() {
            let y44 = new w, b44 = new w, T = 0, R = (t - e) / n;
            for(let P22 = 0; P22 <= r; P22++){
                let H = [], N = P22 / r, v = N * (t - e) + e;
                for(let C = 0; C <= i; C++){
                    let D40 = C / i, B = D40 * l + a, z = Math.sin(B), F = Math.cos(B);
                    b44.x = v * z, b44.y = -N * n + _, b44.z = v * F, h.push(b44.x, b44.y, b44.z), y44.set(z, R, F).normalize(), d.push(y44.x, y44.y, y44.z), f.push(D40, 1 - N), H.push(m++);
                }
                x.push(H);
            }
            for(let P1 = 0; P1 < i; P1++)for(let H = 0; H < r; H++){
                let N = x[H][P1], v = x[H + 1][P1], C = x[H + 1][P1 + 1], D41 = x[H][P1 + 1];
                u.push(N, v, D41), u.push(v, C, D41), T += 6;
            }
            c.addGroup(g63, T, 0), g63 += T;
        }
        function M(y45) {
            let b45 = m, T = new Z, R = new w, P23 = 0, H = y45 === !0 ? e : t, N = y45 === !0 ? 1 : -1;
            for(let C = 1; C <= i; C++)h.push(0, _ * N, 0), d.push(0, N, 0), f.push(0.5, 0.5), m++;
            let v = m;
            for(let C1 = 0; C1 <= i; C1++){
                let B = C1 / i * l + a, z = Math.cos(B), F = Math.sin(B);
                R.x = H * F, R.y = _ * N, R.z = H * z, h.push(R.x, R.y, R.z), d.push(0, N, 0), T.x = z * 0.5 + 0.5, T.y = F * 0.5 * N + 0.5, f.push(T.x, T.y), m++;
            }
            for(let C2 = 0; C2 < i; C2++){
                let D42 = b45 + C2, B = v + C2;
                y45 === !0 ? u.push(B, B + 1, D42) : u.push(B + 1, B, D42), P23 += 3;
            }
            c.addGroup(g63, P23, y45 === !0 ? 1 : 2), g63 += P23;
        }
    }
    static fromJSON(e) {
        return new Zn(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
    }
}, gr = class extends Zn {
    constructor(e = 1, t = 1, n = 8, i = 1, r = !1, o = 0, a = Math.PI * 2){
        super(0, e, t, n, i, r, o, a);
        this.type = "ConeGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: o,
            thetaLength: a
        };
    }
    static fromJSON(e) {
        return new gr(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
    }
}, ln = class extends Me {
    constructor(e = [], t = [], n = 1, i = 0){
        super();
        this.type = "PolyhedronGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: n,
            detail: i
        };
        let r = [], o = [];
        a(i), c(n), u(), this.setAttribute("position", new he(r, 3)), this.setAttribute("normal", new he(r.slice(), 3)), this.setAttribute("uv", new he(o, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
        function a(p) {
            let M = new w, y46 = new w, b46 = new w;
            for(let T = 0; T < t.length; T += 3)f(t[T + 0], M), f(t[T + 1], y46), f(t[T + 2], b46), l(M, y46, b46, p);
        }
        function l(p, M, y47, b47) {
            let T = b47 + 1, R = [];
            for(let P24 = 0; P24 <= T; P24++){
                R[P24] = [];
                let H = p.clone().lerp(y47, P24 / T), N = M.clone().lerp(y47, P24 / T), v = T - P24;
                for(let C = 0; C <= v; C++)C === 0 && P24 === T ? R[P24][C] = H : R[P24][C] = H.clone().lerp(N, C / v);
            }
            for(let P2 = 0; P2 < T; P2++)for(let H = 0; H < 2 * (T - P2) - 1; H++){
                let N = Math.floor(H / 2);
                H % 2 === 0 ? (d(R[P2][N + 1]), d(R[P2 + 1][N]), d(R[P2][N])) : (d(R[P2][N + 1]), d(R[P2 + 1][N + 1]), d(R[P2 + 1][N]));
            }
        }
        function c(p) {
            let M = new w;
            for(let y48 = 0; y48 < r.length; y48 += 3)M.x = r[y48 + 0], M.y = r[y48 + 1], M.z = r[y48 + 2], M.normalize().multiplyScalar(p), r[y48 + 0] = M.x, r[y48 + 1] = M.y, r[y48 + 2] = M.z;
        }
        function u() {
            let p = new w;
            for(let M = 0; M < r.length; M += 3){
                p.x = r[M + 0], p.y = r[M + 1], p.z = r[M + 2];
                let y49 = _(p) / 2 / Math.PI + 0.5, b48 = g64(p) / Math.PI + 0.5;
                o.push(y49, 1 - b48);
            }
            m(), h();
        }
        function h() {
            for(let p = 0; p < o.length; p += 6){
                let M = o[p + 0], y50 = o[p + 2], b49 = o[p + 4], T = Math.max(M, y50, b49), R = Math.min(M, y50, b49);
                T > 0.9 && R < 0.1 && (M < 0.2 && (o[p + 0] += 1), y50 < 0.2 && (o[p + 2] += 1), b49 < 0.2 && (o[p + 4] += 1));
            }
        }
        function d(p) {
            r.push(p.x, p.y, p.z);
        }
        function f(p, M) {
            let y51 = p * 3;
            M.x = e[y51 + 0], M.y = e[y51 + 1], M.z = e[y51 + 2];
        }
        function m() {
            let p = new w, M = new w, y52 = new w, b50 = new w, T = new Z, R = new Z, P25 = new Z;
            for(let H = 0, N = 0; H < r.length; H += 9, N += 6){
                p.set(r[H + 0], r[H + 1], r[H + 2]), M.set(r[H + 3], r[H + 4], r[H + 5]), y52.set(r[H + 6], r[H + 7], r[H + 8]), T.set(o[N + 0], o[N + 1]), R.set(o[N + 2], o[N + 3]), P25.set(o[N + 4], o[N + 5]), b50.copy(p).add(M).add(y52).divideScalar(3);
                let v = _(b50);
                x(T, N + 0, p, v), x(R, N + 2, M, v), x(P25, N + 4, y52, v);
            }
        }
        function x(p, M, y53, b51) {
            b51 < 0 && p.x === 1 && (o[M] = p.x - 1), y53.x === 0 && y53.z === 0 && (o[M] = b51 / 2 / Math.PI + 0.5);
        }
        function _(p) {
            return Math.atan2(p.z, -p.x);
        }
        function g64(p) {
            return Math.atan2(-p.y, Math.sqrt(p.x * p.x + p.z * p.z));
        }
    }
    static fromJSON(e) {
        return new ln(e.vertices, e.indices, e.radius, e.details);
    }
}, xr = class extends ln {
    constructor(e = 1, t = 0){
        let n = (1 + Math.sqrt(5)) / 2, i = 1 / n, r = [
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
        super(r, o, e, t);
        this.type = "DodecahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new xr(e.radius, e.detail);
    }
}, vs = new w, Ms = new w, $o = new w, ws = new st, Sa = class extends Me {
    constructor(e = null, t = 1){
        super();
        if (this.type = "EdgesGeometry", this.parameters = {
            geometry: e,
            thresholdAngle: t
        }, e !== null) {
            let i = Math.pow(10, 4), r = Math.cos(Xn * t), o = e.getIndex(), a = e.getAttribute("position"), l = o ? o.count : a.count, c = [
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
                let { a: x , b: _ , c: g65  } = ws;
                if (x.fromBufferAttribute(a, c[0]), _.fromBufferAttribute(a, c[1]), g65.fromBufferAttribute(a, c[2]), ws.getNormal($o), h[0] = `${Math.round(x.x * i)},${Math.round(x.y * i)},${Math.round(x.z * i)}`, h[1] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, h[2] = `${Math.round(g65.x * i)},${Math.round(g65.y * i)},${Math.round(g65.z * i)}`, !(h[0] === h[1] || h[1] === h[2] || h[2] === h[0])) for(let p = 0; p < 3; p++){
                    let M = (p + 1) % 3, y54 = h[p], b52 = h[M], T = ws[u[p]], R = ws[u[M]], P26 = `${y54}_${b52}`, H = `${b52}_${y54}`;
                    H in d && d[H] ? ($o.dot(d[H].normal) <= r && (f.push(T.x, T.y, T.z), f.push(R.x, R.y, R.z)), d[H] = null) : P26 in d || (d[P26] = {
                        index0: c[p],
                        index1: c[M],
                        normal: $o.clone()
                    });
                }
            }
            for(let m2 in d)if (d[m2]) {
                let { index0: x , index1: _  } = d[m2];
                vs.fromBufferAttribute(a, x), Ms.fromBufferAttribute(a, _), f.push(vs.x, vs.y, vs.z), f.push(Ms.x, Ms.y, Ms.z);
            }
            this.setAttribute("position", new he(f, 3));
        }
    }
}, Dt = class {
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
        let t = [], n, i = this.getPoint(0), r = 0;
        t.push(0);
        for(let o = 1; o <= e; o++)n = this.getPoint(o / e), r += n.distanceTo(i), t.push(r), i = n;
        return this.cacheArcLengths = t, t;
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.getLengths();
    }
    getUtoTmapping(e, t) {
        let n = this.getLengths(), i = 0, r = n.length, o;
        t ? o = t : o = e * n[r - 1];
        let a = 0, l = r - 1, c;
        for(; a <= l;)if (i = Math.floor(a + (l - a) / 2), c = n[i] - o, c < 0) a = i + 1;
        else if (c > 0) l = i - 1;
        else {
            l = i;
            break;
        }
        if (i = l, n[i] === o) return i / (r - 1);
        let u = n[i], d = n[i + 1] - u, f = (o - u) / d;
        return (i + f) / (r - 1);
    }
    getTangent(e, t) {
        let i = e - 0.0001, r = e + 0.0001;
        i < 0 && (i = 0), r > 1 && (r = 1);
        let o = this.getPoint(i), a = this.getPoint(r), l = t || (o.isVector2 ? new Z : new w);
        return l.copy(a).sub(o).normalize(), l;
    }
    getTangentAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getTangent(n, t);
    }
    computeFrenetFrames(e, t) {
        let n = new w, i = [], r = [], o = [], a = new w, l = new de;
        for(let f = 0; f <= e; f++){
            let m = f / e;
            i[f] = this.getTangentAt(m, new w);
        }
        r[0] = new w, o[0] = new w;
        let c = Number.MAX_VALUE, u = Math.abs(i[0].x), h = Math.abs(i[0].y), d = Math.abs(i[0].z);
        u <= c && (c = u, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), o[0].crossVectors(i[0], r[0]);
        for(let f3 = 1; f3 <= e; f3++){
            if (r[f3] = r[f3 - 1].clone(), o[f3] = o[f3 - 1].clone(), a.crossVectors(i[f3 - 1], i[f3]), a.length() > Number.EPSILON) {
                a.normalize();
                let m = Math.acos(xt(i[f3 - 1].dot(i[f3]), -1, 1));
                r[f3].applyMatrix4(l.makeRotationAxis(a, m));
            }
            o[f3].crossVectors(i[f3], r[f3]);
        }
        if (t === !0) {
            let f = Math.acos(xt(r[0].dot(r[e]), -1, 1));
            f /= e, i[0].dot(a.crossVectors(r[0], r[e])) > 0 && (f = -f);
            for(let m = 1; m <= e; m++)r[m].applyMatrix4(l.makeRotationAxis(i[m], f * m)), o[m].crossVectors(i[m], r[m]);
        }
        return {
            tangents: i,
            normals: r,
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
}, Hr = class extends Dt {
    constructor(e = 0, t = 0, n = 1, i = 1, r = 0, o = Math.PI * 2, a = !1, l = 0){
        super();
        this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
    }
    getPoint(e, t) {
        let n = t || new Z, i = Math.PI * 2, r = this.aEndAngle - this.aStartAngle, o = Math.abs(r) < Number.EPSILON;
        for(; r < 0;)r += i;
        for(; r > i;)r -= i;
        r < Number.EPSILON && (o ? r = 0 : r = i), this.aClockwise === !0 && !o && (r === i ? r = -i : r = r - i);
        let a = this.aStartAngle + e * r, l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
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
Hr.prototype.isEllipseCurve = !0;
var Ea = class extends Hr {
    constructor(e, t, n, i, r, o){
        super(e, t, n, n, i, r, o);
        this.type = "ArcCurve";
    }
};
Ea.prototype.isArcCurve = !0;
function Ta() {
    let s150 = 0, e = 0, t = 0, n = 0;
    function i(r, o, a, l) {
        s150 = r, e = a, t = -3 * r + 3 * o - 2 * a - l, n = 2 * r - 2 * o + a + l;
    }
    return {
        initCatmullRom: function(r, o, a, l, c) {
            i(o, a, c * (a - r), c * (l - o));
        },
        initNonuniformCatmullRom: function(r, o, a, l, c, u, h) {
            let d = (o - r) / c - (a - r) / (c + u) + (a - o) / u, f = (a - o) / u - (l - o) / (u + h) + (l - a) / h;
            d *= u, f *= u, i(o, a, d, f);
        },
        calc: function(r) {
            let o = r * r, a = o * r;
            return s150 + e * r + t * o + n * a;
        }
    };
}
var bs = new w, jo = new Ta, Ko = new Ta, Qo = new Ta, Aa = class extends Dt {
    constructor(e = [], t = !1, n = "centripetal", i = 0.5){
        super();
        this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i;
    }
    getPoint(e, t = new w) {
        let n = t, i = this.points, r = i.length, o = (r - (this.closed ? 0 : 1)) * e, a = Math.floor(o), l = o - a;
        this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / r) + 1) * r : l === 0 && a === r - 1 && (a = r - 2, l = 1);
        let c, u;
        this.closed || a > 0 ? c = i[(a - 1) % r] : (bs.subVectors(i[0], i[1]).add(i[0]), c = bs);
        let h = i[a % r], d = i[(a + 1) % r];
        if (this.closed || a + 2 < r ? u = i[(a + 2) % r] : (bs.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), u = bs), this.curveType === "centripetal" || this.curveType === "chordal") {
            let f = this.curveType === "chordal" ? 0.5 : 0.25, m = Math.pow(c.distanceToSquared(h), f), x = Math.pow(h.distanceToSquared(d), f), _ = Math.pow(d.distanceToSquared(u), f);
            x < 0.0001 && (x = 1), m < 0.0001 && (m = x), _ < 0.0001 && (_ = x), jo.initNonuniformCatmullRom(c.x, h.x, d.x, u.x, m, x, _), Ko.initNonuniformCatmullRom(c.y, h.y, d.y, u.y, m, x, _), Qo.initNonuniformCatmullRom(c.z, h.z, d.z, u.z, m, x, _);
        } else this.curveType === "catmullrom" && (jo.initCatmullRom(c.x, h.x, d.x, u.x, this.tension), Ko.initCatmullRom(c.y, h.y, d.y, u.y, this.tension), Qo.initCatmullRom(c.z, h.z, d.z, u.z, this.tension));
        return n.set(jo.calc(l), Ko.calc(l), Qo.calc(l)), n;
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
Aa.prototype.isCatmullRomCurve3 = !0;
function Ac(s151, e, t, n, i) {
    let r = (n - e) * 0.5, o = (i - t) * 0.5, a = s151 * s151, l = s151 * a;
    return (2 * t - 2 * n + r + o) * l + (-3 * t + 3 * n - 2 * r - o) * a + r * s151 + t;
}
function dx(s152, e) {
    let t = 1 - s152;
    return t * t * e;
}
function fx(s153, e) {
    return 2 * (1 - s153) * s153 * e;
}
function px(s154, e) {
    return s154 * s154 * e;
}
function lr(s155, e, t, n) {
    return dx(s155, e) + fx(s155, t) + px(s155, n);
}
function mx(s156, e) {
    let t = 1 - s156;
    return t * t * t * e;
}
function gx(s157, e) {
    let t = 1 - s157;
    return 3 * t * t * s157 * e;
}
function xx(s158, e) {
    return 3 * (1 - s158) * s158 * s158 * e;
}
function yx(s159, e) {
    return s159 * s159 * s159 * e;
}
function cr(s160, e, t, n, i) {
    return mx(s160, e) + gx(s160, t) + xx(s160, n) + yx(s160, i);
}
var lo = class extends Dt {
    constructor(e = new Z, t = new Z, n = new Z, i = new Z){
        super();
        this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new Z) {
        let n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
        return n.set(cr(e, i.x, r.x, o.x, a.x), cr(e, i.y, r.y, o.y, a.y)), n;
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
lo.prototype.isCubicBezierCurve = !0;
var Ra = class extends Dt {
    constructor(e = new w, t = new w, n = new w, i = new w){
        super();
        this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i;
    }
    getPoint(e, t = new w) {
        let n = t, i = this.v0, r = this.v1, o = this.v2, a = this.v3;
        return n.set(cr(e, i.x, r.x, o.x, a.x), cr(e, i.y, r.y, o.y, a.y), cr(e, i.z, r.z, o.z, a.z)), n;
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
Ra.prototype.isCubicBezierCurve3 = !0;
var Gr = class extends Dt {
    constructor(e = new Z, t = new Z){
        super();
        this.type = "LineCurve", this.v1 = e, this.v2 = t;
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
Gr.prototype.isLineCurve = !0;
var zh = class extends Dt {
    constructor(e = new w, t = new w){
        super();
        this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t;
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
}, co = class extends Dt {
    constructor(e = new Z, t = new Z, n = new Z){
        super();
        this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new Z) {
        let n = t, i = this.v0, r = this.v1, o = this.v2;
        return n.set(lr(e, i.x, r.x, o.x), lr(e, i.y, r.y, o.y)), n;
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
co.prototype.isQuadraticBezierCurve = !0;
var ho = class extends Dt {
    constructor(e = new w, t = new w, n = new w){
        super();
        this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
    }
    getPoint(e, t = new w) {
        let n = t, i = this.v0, r = this.v1, o = this.v2;
        return n.set(lr(e, i.x, r.x, o.x), lr(e, i.y, r.y, o.y), lr(e, i.z, r.z, o.z)), n;
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
ho.prototype.isQuadraticBezierCurve3 = !0;
var uo = class extends Dt {
    constructor(e = []){
        super();
        this.type = "SplineCurve", this.points = e;
    }
    getPoint(e, t = new Z) {
        let n = t, i = this.points, r = (i.length - 1) * e, o = Math.floor(r), a = r - o, l = i[o === 0 ? o : o - 1], c = i[o], u = i[o > i.length - 2 ? i.length - 1 : o + 1], h = i[o > i.length - 3 ? i.length - 1 : o + 2];
        return n.set(Ac(a, l.x, c.x, u.x, h.x), Ac(a, l.y, c.y, u.y, h.y)), n;
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
uo.prototype.isSplineCurve = !0;
var Ca = Object.freeze({
    __proto__: null,
    ArcCurve: Ea,
    CatmullRomCurve3: Aa,
    CubicBezierCurve: lo,
    CubicBezierCurve3: Ra,
    EllipseCurve: Hr,
    LineCurve: Gr,
    LineCurve3: zh,
    QuadraticBezierCurve: co,
    QuadraticBezierCurve3: ho,
    SplineCurve: uo
}), Oh = class extends Dt {
    constructor(){
        super();
        this.type = "CurvePath", this.curves = [], this.autoClose = !1;
    }
    add(e) {
        this.curves.push(e);
    }
    closePath() {
        let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new Gr(t, e));
    }
    getPoint(e, t) {
        let n = e * this.getLength(), i = this.getCurveLengths(), r = 0;
        for(; r < i.length;){
            if (i[r] >= n) {
                let o = i[r] - n, a = this.curves[r], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
                return a.getPointAt(c, t);
            }
            r++;
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
        for(let i = 0, r = this.curves; i < r.length; i++){
            let o = r[i], a = o && o.isEllipseCurve ? e * 2 : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? e * o.points.length : e, l = o.getPoints(a);
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
            this.curves.push(new Ca[i.type]().fromJSON(i));
        }
        return this;
    }
}, yr = class extends Oh {
    constructor(e){
        super();
        this.type = "Path", this.currentPoint = new Z, e && this.setFromPoints(e);
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
        let n = new Gr(this.currentPoint.clone(), new Z(e, t));
        return this.curves.push(n), this.currentPoint.set(e, t), this;
    }
    quadraticCurveTo(e, t, n, i) {
        let r = new co(this.currentPoint.clone(), new Z(e, t), new Z(n, i));
        return this.curves.push(r), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(e, t, n, i, r, o) {
        let a = new lo(this.currentPoint.clone(), new Z(e, t), new Z(n, i), new Z(r, o));
        return this.curves.push(a), this.currentPoint.set(r, o), this;
    }
    splineThru(e) {
        let t = [
            this.currentPoint.clone()
        ].concat(e), n = new uo(t);
        return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
    }
    arc(e, t, n, i, r, o) {
        let a = this.currentPoint.x, l = this.currentPoint.y;
        return this.absarc(e + a, t + l, n, i, r, o), this;
    }
    absarc(e, t, n, i, r, o) {
        return this.absellipse(e, t, n, n, i, r, o), this;
    }
    ellipse(e, t, n, i, r, o, a, l) {
        let c = this.currentPoint.x, u = this.currentPoint.y;
        return this.absellipse(e + c, t + u, n, i, r, o, a, l), this;
    }
    absellipse(e, t, n, i, r, o, a, l) {
        let c = new Hr(e, t, n, i, r, o, a, l);
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
}, Yt = class extends yr {
    constructor(e){
        super(e);
        this.uuid = Lt(), this.type = "Shape", this.holes = [];
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
            this.holes.push(new yr().fromJSON(i));
        }
        return this;
    }
}, _x = {
    triangulate: function(s161, e, t = 2) {
        let n = e && e.length, i = n ? e[0] * t : s161.length, r = Uh(s161, 0, i, t, !0), o = [];
        if (!r || r.next === r.prev) return o;
        let a, l, c, u, h, d, f;
        if (n && (r = Sx(s161, e, r, t)), s161.length > 80 * t) {
            a = c = s161[0], l = u = s161[1];
            for(let m = t; m < i; m += t)h = s161[m], d = s161[m + 1], h < a && (a = h), d < l && (l = d), h > c && (c = h), d > u && (u = d);
            f = Math.max(c - a, u - l), f = f !== 0 ? 1 / f : 0;
        }
        return _r(r, o, t, a, l, f), o;
    }
};
function Uh(s162, e, t, n, i) {
    let r, o;
    if (i === Bx(s162, e, t, n) > 0) for(r = e; r < t; r += n)o = Rc(r, s162[r], s162[r + 1], o);
    else for(r = t - n; r >= e; r -= n)o = Rc(r, s162[r], s162[r + 1], o);
    return o && fo(o, o.next) && (Mr(o), o = o.next), o;
}
function Cn(s163, e) {
    if (!s163) return s163;
    e || (e = s163);
    let t = s163, n;
    do if (n = !1, !t.steiner && (fo(t, t.next) || Ke(t.prev, t, t.next) === 0)) {
        if (Mr(t), t = e = t.prev, t === t.next) break;
        n = !0;
    } else t = t.next;
    while (n || t !== e)
    return e;
}
function _r(s164, e, t, n, i, r, o) {
    if (!s164) return;
    !o && r && Cx(s164, n, i, r);
    let a = s164, l, c;
    for(; s164.prev !== s164.next;){
        if (l = s164.prev, c = s164.next, r ? Mx(s164, n, i, r) : vx(s164)) {
            e.push(l.i / t), e.push(s164.i / t), e.push(c.i / t), Mr(s164), s164 = c.next, a = c.next;
            continue;
        }
        if (s164 = c, s164 === a) {
            o ? o === 1 ? (s164 = wx(Cn(s164), e, t), _r(s164, e, t, n, i, r, 2)) : o === 2 && bx(s164, e, t, n, i, r) : _r(Cn(s164), e, t, n, i, r, 1);
            break;
        }
    }
}
function vx(s165) {
    let e = s165.prev, t = s165, n = s165.next;
    if (Ke(e, t, n) >= 0) return !1;
    let i = s165.next.next;
    for(; i !== s165.prev;){
        if (Ei(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && Ke(i.prev, i, i.next) >= 0) return !1;
        i = i.next;
    }
    return !0;
}
function Mx(s166, e, t, n) {
    let i = s166.prev, r = s166, o = s166.next;
    if (Ke(i, r, o) >= 0) return !1;
    let a = i.x < r.x ? i.x < o.x ? i.x : o.x : r.x < o.x ? r.x : o.x, l = i.y < r.y ? i.y < o.y ? i.y : o.y : r.y < o.y ? r.y : o.y, c = i.x > r.x ? i.x > o.x ? i.x : o.x : r.x > o.x ? r.x : o.x, u = i.y > r.y ? i.y > o.y ? i.y : o.y : r.y > o.y ? r.y : o.y, h = ua(a, l, e, t, n), d = ua(c, u, e, t, n), f = s166.prevZ, m = s166.nextZ;
    for(; f && f.z >= h && m && m.z <= d;){
        if (f !== s166.prev && f !== s166.next && Ei(i.x, i.y, r.x, r.y, o.x, o.y, f.x, f.y) && Ke(f.prev, f, f.next) >= 0 || (f = f.prevZ, m !== s166.prev && m !== s166.next && Ei(i.x, i.y, r.x, r.y, o.x, o.y, m.x, m.y) && Ke(m.prev, m, m.next) >= 0)) return !1;
        m = m.nextZ;
    }
    for(; f && f.z >= h;){
        if (f !== s166.prev && f !== s166.next && Ei(i.x, i.y, r.x, r.y, o.x, o.y, f.x, f.y) && Ke(f.prev, f, f.next) >= 0) return !1;
        f = f.prevZ;
    }
    for(; m && m.z <= d;){
        if (m !== s166.prev && m !== s166.next && Ei(i.x, i.y, r.x, r.y, o.x, o.y, m.x, m.y) && Ke(m.prev, m, m.next) >= 0) return !1;
        m = m.nextZ;
    }
    return !0;
}
function wx(s167, e, t) {
    let n = s167;
    do {
        let i = n.prev, r = n.next.next;
        !fo(i, r) && Hh(i, n, n.next, r) && vr(i, r) && vr(r, i) && (e.push(i.i / t), e.push(n.i / t), e.push(r.i / t), Mr(n), Mr(n.next), n = s167 = r), n = n.next;
    }while (n !== s167)
    return Cn(n);
}
function bx(s168, e, t, n, i, r) {
    let o = s168;
    do {
        let a = o.next.next;
        for(; a !== o.prev;){
            if (o.i !== a.i && Dx(o, a)) {
                let l = Gh(o, a);
                o = Cn(o, o.next), l = Cn(l, l.next), _r(o, e, t, n, i, r), _r(l, e, t, n, i, r);
                return;
            }
            a = a.next;
        }
        o = o.next;
    }while (o !== s168)
}
function Sx(s169, e, t, n) {
    let i = [], r, o, a, l, c;
    for(r = 0, o = e.length; r < o; r++)a = e[r] * n, l = r < o - 1 ? e[r + 1] * n : s169.length, c = Uh(s169, a, l, n, !1), c === c.next && (c.steiner = !0), i.push(Px(c));
    for(i.sort(Ex), r = 0; r < i.length; r++)Tx(i[r], t), t = Cn(t, t.next);
    return t;
}
function Ex(s170, e) {
    return s170.x - e.x;
}
function Tx(s171, e) {
    if (e = Ax(s171, e), e) {
        let t = Gh(e, s171);
        Cn(e, e.next), Cn(t, t.next);
    }
}
function Ax(s172, e) {
    let t = e, n = s172.x, i = s172.y, r = -1 / 0, o;
    do {
        if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
            let d = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
            if (d <= n && d > r) {
                if (r = d, d === n) {
                    if (i === t.y) return t;
                    if (i === t.next.y) return t.next;
                }
                o = t.x < t.next.x ? t : t.next;
            }
        }
        t = t.next;
    }while (t !== e)
    if (!o) return null;
    if (n === r) return o;
    let a = o, l = o.x, c = o.y, u = 1 / 0, h;
    t = o;
    do n >= t.x && t.x >= l && n !== t.x && Ei(i < c ? n : r, i, l, c, i < c ? r : n, i, t.x, t.y) && (h = Math.abs(i - t.y) / (n - t.x), vr(t, s172) && (h < u || h === u && (t.x > o.x || t.x === o.x && Rx(o, t))) && (o = t, u = h)), t = t.next;
    while (t !== a)
    return o;
}
function Rx(s173, e) {
    return Ke(s173.prev, s173, e.prev) < 0 && Ke(e.next, s173, s173.next) < 0;
}
function Cx(s174, e, t, n) {
    let i = s174;
    do i.z === null && (i.z = ua(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
    while (i !== s174)
    i.prevZ.nextZ = null, i.prevZ = null, Lx(i);
}
function Lx(s175) {
    let e, t, n, i, r, o, a, l, c = 1;
    do {
        for(t = s175, s175 = null, r = null, o = 0; t;){
            for(o++, n = t, a = 0, e = 0; e < c && (a++, n = n.nextZ, !!n); e++);
            for(l = c; a > 0 || l > 0 && n;)a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), r ? r.nextZ = i : s175 = i, i.prevZ = r, r = i;
            t = n;
        }
        r.nextZ = null, c *= 2;
    }while (o > 1)
    return s175;
}
function ua(s176, e, t, n, i) {
    return s176 = 32767 * (s176 - t) * i, e = 32767 * (e - n) * i, s176 = (s176 | s176 << 8) & 16711935, s176 = (s176 | s176 << 4) & 252645135, s176 = (s176 | s176 << 2) & 858993459, s176 = (s176 | s176 << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, s176 | e << 1;
}
function Px(s177) {
    let e = s177, t = s177;
    do (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
    while (e !== s177)
    return t;
}
function Ei(s178, e, t, n, i, r, o, a) {
    return (i - o) * (e - a) - (s178 - o) * (r - a) >= 0 && (s178 - o) * (n - a) - (t - o) * (e - a) >= 0 && (t - o) * (r - a) - (i - o) * (n - a) >= 0;
}
function Dx(s179, e) {
    return s179.next.i !== e.i && s179.prev.i !== e.i && !Ix(s179, e) && (vr(s179, e) && vr(e, s179) && Fx(s179, e) && (Ke(s179.prev, s179, e.prev) || Ke(s179, e.prev, e)) || fo(s179, e) && Ke(s179.prev, s179, s179.next) > 0 && Ke(e.prev, e, e.next) > 0);
}
function Ke(s180, e, t) {
    return (e.y - s180.y) * (t.x - e.x) - (e.x - s180.x) * (t.y - e.y);
}
function fo(s181, e) {
    return s181.x === e.x && s181.y === e.y;
}
function Hh(s182, e, t, n) {
    let i = Es(Ke(s182, e, t)), r = Es(Ke(s182, e, n)), o = Es(Ke(t, n, s182)), a = Es(Ke(t, n, e));
    return !!(i !== r && o !== a || i === 0 && Ss(s182, t, e) || r === 0 && Ss(s182, n, e) || o === 0 && Ss(t, s182, n) || a === 0 && Ss(t, e, n));
}
function Ss(s183, e, t) {
    return e.x <= Math.max(s183.x, t.x) && e.x >= Math.min(s183.x, t.x) && e.y <= Math.max(s183.y, t.y) && e.y >= Math.min(s183.y, t.y);
}
function Es(s184) {
    return s184 > 0 ? 1 : s184 < 0 ? -1 : 0;
}
function Ix(s185, e) {
    let t = s185;
    do {
        if (t.i !== s185.i && t.next.i !== s185.i && t.i !== e.i && t.next.i !== e.i && Hh(t, t.next, s185, e)) return !0;
        t = t.next;
    }while (t !== s185)
    return !1;
}
function vr(s186, e) {
    return Ke(s186.prev, s186, s186.next) < 0 ? Ke(s186, e, s186.next) >= 0 && Ke(s186, s186.prev, e) >= 0 : Ke(s186, e, s186.prev) < 0 || Ke(s186, s186.next, e) < 0;
}
function Fx(s187, e) {
    let t = s187, n = !1, i = (s187.x + e.x) / 2, r = (s187.y + e.y) / 2;
    do t.y > r != t.next.y > r && t.next.y !== t.y && i < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
    while (t !== s187)
    return n;
}
function Gh(s188, e) {
    let t = new da(s188.i, s188.x, s188.y), n = new da(e.i, e.x, e.y), i = s188.next, r = e.prev;
    return s188.next = e, e.prev = s188, t.next = i, i.prev = t, n.next = t, t.prev = n, r.next = n, n.prev = r, n;
}
function Rc(s189, e, t, n) {
    let i = new da(s189, e, t);
    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Mr(s190) {
    s190.next.prev = s190.prev, s190.prev.next = s190.next, s190.prevZ && (s190.prevZ.nextZ = s190.nextZ), s190.nextZ && (s190.nextZ.prevZ = s190.prevZ);
}
function da(s191, e, t) {
    this.i = s191, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Bx(s192, e, t, n) {
    let i = 0;
    for(let r = e, o = t - n; r < t; r += n)i += (s192[o] - s192[r]) * (s192[r + 1] + s192[o + 1]), o = r;
    return i;
}
var Zt = class {
    static area(e) {
        let t = e.length, n = 0;
        for(let i = t - 1, r = 0; r < t; i = r++)n += e[i].x * e[r].y - e[r].x * e[i].y;
        return n * 0.5;
    }
    static isClockWise(e) {
        return Zt.area(e) < 0;
    }
    static triangulateShape(e, t) {
        let n = [], i = [], r = [];
        Cc(e), Lc(n, e);
        let o = e.length;
        t.forEach(Cc);
        for(let l = 0; l < t.length; l++)i.push(o), o += t[l].length, Lc(n, t[l]);
        let a = _x.triangulate(n, i);
        for(let l3 = 0; l3 < a.length; l3 += 3)r.push(a.slice(l3, l3 + 3));
        return r;
    }
};
function Cc(s193) {
    let e = s193.length;
    e > 2 && s193[e - 1].equals(s193[0]) && s193.pop();
}
function Lc(s194, e) {
    for(let t = 0; t < e.length; t++)s194.push(e[t].x), s194.push(e[t].y);
}
var cn = class extends Me {
    constructor(e = new Yt([
        new Z(0.5, 0.5),
        new Z(-0.5, 0.5),
        new Z(-0.5, -0.5),
        new Z(0.5, -0.5)
    ]), t = {}){
        super();
        this.type = "ExtrudeGeometry", this.parameters = {
            shapes: e,
            options: t
        }, e = Array.isArray(e) ? e : [
            e
        ];
        let n = this, i = [], r = [];
        for(let a4 = 0, l4 = e.length; a4 < l4; a4++){
            let c = e[a4];
            o(c);
        }
        this.setAttribute("position", new he(i, 3)), this.setAttribute("uv", new he(r, 2)), this.computeVertexNormals();
        function o(a) {
            let l = [], c = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, h = t.depth !== void 0 ? t.depth : 1, d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, f = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, m = t.bevelSize !== void 0 ? t.bevelSize : f - 0.1, x = t.bevelOffset !== void 0 ? t.bevelOffset : 0, _ = t.bevelSegments !== void 0 ? t.bevelSegments : 3, g66 = t.extrudePath, p = t.UVGenerator !== void 0 ? t.UVGenerator : Nx;
            t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), h = t.amount);
            let M, y55 = !1, b53, T, R, P27;
            g66 && (M = g66.getSpacedPoints(u), y55 = !0, d = !1, b53 = g66.computeFrenetFrames(u, !1), T = new w, R = new w, P27 = new w), d || (_ = 0, f = 0, m = 0, x = 0);
            let H = a.extractPoints(c), N = H.shape, v = H.holes;
            if (!Zt.isClockWise(N)) {
                N = N.reverse();
                for(let X = 0, ee = v.length; X < ee; X++){
                    let K = v[X];
                    Zt.isClockWise(K) && (v[X] = K.reverse());
                }
            }
            let D43 = Zt.triangulateShape(N, v), B = N;
            for(let X8 = 0, ee4 = v.length; X8 < ee4; X8++){
                let K = v[X8];
                N = N.concat(K);
            }
            function z(X, ee, K) {
                return ee || console.error("THREE.ExtrudeGeometry: vec does not exist"), ee.clone().multiplyScalar(K).add(X);
            }
            let F = N.length, W = D43.length;
            function j(X, ee, K) {
                let ce5, oe5, we5, Te5 = X.x - ee.x, Ne5 = X.y - ee.y, Je = K.x - X.x, qe = K.y - X.y, A = Te5 * Te5 + Ne5 * Ne5, S = Te5 * qe - Ne5 * Je;
                if (Math.abs(S) > Number.EPSILON) {
                    let q22 = Math.sqrt(A), Q21 = Math.sqrt(Je * Je + qe * qe), me16 = ee.x - Ne5 / q22, V14 = ee.y + Te5 / q22, _e12 = K.x - qe / Q21, xe10 = K.y + Je / Q21, se = ((_e12 - me16) * qe - (xe10 - V14) * Je) / (Te5 * qe - Ne5 * Je);
                    ce5 = me16 + Te5 * se - X.x, oe5 = V14 + Ne5 * se - X.y;
                    let ie8 = ce5 * ce5 + oe5 * oe5;
                    if (ie8 <= 2) return new Z(ce5, oe5);
                    we5 = Math.sqrt(ie8 / 2);
                } else {
                    let q23 = !1;
                    Te5 > Number.EPSILON ? Je > Number.EPSILON && (q23 = !0) : Te5 < -Number.EPSILON ? Je < -Number.EPSILON && (q23 = !0) : Math.sign(Ne5) === Math.sign(qe) && (q23 = !0), q23 ? (ce5 = -Ne5, oe5 = Te5, we5 = Math.sqrt(A)) : (ce5 = Te5, oe5 = Ne5, we5 = Math.sqrt(A / 2));
                }
                return new Z(ce5 / we5, oe5 / we5);
            }
            let ue = [];
            for(let X2 = 0, ee1 = B.length, K1 = ee1 - 1, ce1 = X2 + 1; X2 < ee1; X2++, K1++, ce1++)K1 === ee1 && (K1 = 0), ce1 === ee1 && (ce1 = 0), ue[X2] = j(B[X2], B[K1], B[ce1]);
            let k = [], $, re13 = ue.concat();
            for(let X3 = 0, ee2 = v.length; X3 < ee2; X3++){
                let K = v[X3];
                $ = [];
                for(let ce6 = 0, oe6 = K.length, we6 = oe6 - 1, Te6 = ce6 + 1; ce6 < oe6; ce6++, we6++, Te6++)we6 === oe6 && (we6 = 0), Te6 === oe6 && (Te6 = 0), $[ce6] = j(K[ce6], K[we6], K[Te6]);
                k.push($), re13 = re13.concat($);
            }
            for(let X4 = 0; X4 < _; X4++){
                let ee = X4 / _, K = f * Math.cos(ee * Math.PI / 2), ce7 = m * Math.sin(ee * Math.PI / 2) + x;
                for(let oe7 = 0, we7 = B.length; oe7 < we7; oe7++){
                    let Te7 = z(B[oe7], ue[oe7], ce7);
                    ge(Te7.x, Te7.y, -K);
                }
                for(let oe1 = 0, we1 = v.length; oe1 < we1; oe1++){
                    let Te8 = v[oe1];
                    $ = k[oe1];
                    for(let Ne6 = 0, Je = Te8.length; Ne6 < Je; Ne6++){
                        let qe = z(Te8[Ne6], $[Ne6], ce7);
                        ge(qe.x, qe.y, -K);
                    }
                }
            }
            let pe16 = m + x;
            for(let X5 = 0; X5 < F; X5++){
                let ee = d ? z(N[X5], re13[X5], pe16) : N[X5];
                y55 ? (R.copy(b53.normals[0]).multiplyScalar(ee.x), T.copy(b53.binormals[0]).multiplyScalar(ee.y), P27.copy(M[0]).add(R).add(T), ge(P27.x, P27.y, P27.z)) : ge(ee.x, ee.y, 0);
            }
            for(let X6 = 1; X6 <= u; X6++)for(let ee3 = 0; ee3 < F; ee3++){
                let K = d ? z(N[ee3], re13[ee3], pe16) : N[ee3];
                y55 ? (R.copy(b53.normals[X6]).multiplyScalar(K.x), T.copy(b53.binormals[X6]).multiplyScalar(K.y), P27.copy(M[X6]).add(R).add(T), ge(P27.x, P27.y, P27.z)) : ge(K.x, K.y, h / u * X6);
            }
            for(let X7 = _ - 1; X7 >= 0; X7--){
                let ee = X7 / _, K = f * Math.cos(ee * Math.PI / 2), ce8 = m * Math.sin(ee * Math.PI / 2) + x;
                for(let oe8 = 0, we8 = B.length; oe8 < we8; oe8++){
                    let Te9 = z(B[oe8], ue[oe8], ce8);
                    ge(Te9.x, Te9.y, h + K);
                }
                for(let oe2 = 0, we2 = v.length; oe2 < we2; oe2++){
                    let Te10 = v[oe2];
                    $ = k[oe2];
                    for(let Ne7 = 0, Je = Te10.length; Ne7 < Je; Ne7++){
                        let qe = z(Te10[Ne7], $[Ne7], ce8);
                        y55 ? ge(qe.x, qe.y + M[u - 1].y, M[u - 1].x + K) : ge(qe.x, qe.y, h + K);
                    }
                }
            }
            ye14(), G11();
            function ye14() {
                let X = i.length / 3;
                if (d) {
                    let ee = 0, K = F * ee;
                    for(let ce9 = 0; ce9 < W; ce9++){
                        let oe9 = D43[ce9];
                        Se8(oe9[2] + K, oe9[1] + K, oe9[0] + K);
                    }
                    ee = u + _ * 2, K = F * ee;
                    for(let ce2 = 0; ce2 < W; ce2++){
                        let oe10 = D43[ce2];
                        Se8(oe10[0] + K, oe10[1] + K, oe10[2] + K);
                    }
                } else {
                    for(let ee = 0; ee < W; ee++){
                        let K = D43[ee];
                        Se8(K[2], K[1], K[0]);
                    }
                    for(let ee5 = 0; ee5 < W; ee5++){
                        let K = D43[ee5];
                        Se8(K[0] + F * u, K[1] + F * u, K[2] + F * u);
                    }
                }
                n.addGroup(X, i.length / 3 - X, 0);
            }
            function G11() {
                let X = i.length / 3, ee = 0;
                Ge(B, ee), ee += B.length;
                for(let K = 0, ce10 = v.length; K < ce10; K++){
                    let oe11 = v[K];
                    Ge(oe11, ee), ee += oe11.length;
                }
                n.addGroup(X, i.length / 3 - X, 1);
            }
            function Ge(X, ee) {
                let K = X.length;
                for(; --K >= 0;){
                    let ce11 = K, oe12 = K - 1;
                    oe12 < 0 && (oe12 = X.length - 1);
                    for(let we9 = 0, Te11 = u + _ * 2; we9 < Te11; we9++){
                        let Ne8 = F * we9, Je = F * (we9 + 1), qe = ee + ce11 + Ne8, A = ee + oe12 + Ne8, S = ee + oe12 + Je, q24 = ee + ce11 + Je;
                        le10(qe, A, S, q24);
                    }
                }
            }
            function ge(X, ee, K) {
                l.push(X), l.push(ee), l.push(K);
            }
            function Se8(X, ee, K) {
                Le6(X), Le6(ee), Le6(K);
                let ce12 = i.length / 3, oe13 = p.generateTopUV(n, i, ce12 - 3, ce12 - 2, ce12 - 1);
                Ee6(oe13[0]), Ee6(oe13[1]), Ee6(oe13[2]);
            }
            function le10(X, ee, K, ce13) {
                Le6(X), Le6(ee), Le6(ce13), Le6(ee), Le6(K), Le6(ce13);
                let oe14 = i.length / 3, we10 = p.generateSideWallUV(n, i, oe14 - 6, oe14 - 3, oe14 - 2, oe14 - 1);
                Ee6(we10[0]), Ee6(we10[1]), Ee6(we10[3]), Ee6(we10[1]), Ee6(we10[2]), Ee6(we10[3]);
            }
            function Le6(X) {
                i.push(l[X * 3 + 0]), i.push(l[X * 3 + 1]), i.push(l[X * 3 + 2]);
            }
            function Ee6(X) {
                r.push(X.x), r.push(X.y);
            }
        }
    }
    toJSON() {
        let e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
        return zx(t, n, e);
    }
    static fromJSON(e, t) {
        let n = [];
        for(let r = 0, o = e.shapes.length; r < o; r++){
            let a = t[e.shapes[r]];
            n.push(a);
        }
        let i = e.options.extrudePath;
        return i !== void 0 && (e.options.extrudePath = new Ca[i.type]().fromJSON(i)), new cn(n, e.options);
    }
}, Nx = {
    generateTopUV: function(s, e, t, n, i) {
        let r = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], l = e[n * 3 + 1], c = e[i * 3], u = e[i * 3 + 1];
        return [
            new Z(r, o),
            new Z(a, l),
            new Z(c, u)
        ];
    },
    generateSideWallUV: function(s, e, t, n, i, r) {
        let o = e[t * 3], a = e[t * 3 + 1], l = e[t * 3 + 2], c = e[n * 3], u = e[n * 3 + 1], h = e[n * 3 + 2], d = e[i * 3], f = e[i * 3 + 1], m = e[i * 3 + 2], x = e[r * 3], _ = e[r * 3 + 1], g67 = e[r * 3 + 2];
        return Math.abs(a - u) < Math.abs(o - c) ? [
            new Z(o, 1 - l),
            new Z(c, 1 - h),
            new Z(d, 1 - m),
            new Z(x, 1 - g67)
        ] : [
            new Z(a, 1 - l),
            new Z(u, 1 - h),
            new Z(f, 1 - m),
            new Z(_, 1 - g67)
        ];
    }
};
function zx(s195, e, t) {
    if (t.shapes = [], Array.isArray(s195)) for(let n = 0, i = s195.length; n < i; n++){
        let r = s195[n];
        t.shapes.push(r.uuid);
    }
    else t.shapes.push(s195.uuid);
    return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
var wr = class extends ln {
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
        ], r = [
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
        super(i, r, e, t);
        this.type = "IcosahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new wr(e.radius, e.detail);
    }
}, br = class extends Me {
    constructor(e = [
        new Z(0, 0.5),
        new Z(0.5, 0),
        new Z(0, -0.5)
    ], t = 12, n = 0, i = Math.PI * 2){
        super();
        this.type = "LatheGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: n,
            phiLength: i
        }, t = Math.floor(t), i = xt(i, 0, Math.PI * 2);
        let r = [], o = [], a = [], l = [], c = [], u = 1 / t, h = new w, d = new Z, f = new w, m = new w, x = new w, _ = 0, g68 = 0;
        for(let p = 0; p <= e.length - 1; p++)switch(p){
            case 0:
                _ = e[p + 1].x - e[p].x, g68 = e[p + 1].y - e[p].y, f.x = g68 * 1, f.y = -_, f.z = g68 * 0, x.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
                break;
            case e.length - 1:
                l.push(x.x, x.y, x.z);
                break;
            default:
                _ = e[p + 1].x - e[p].x, g68 = e[p + 1].y - e[p].y, f.x = g68 * 1, f.y = -_, f.z = g68 * 0, m.copy(f), f.x += x.x, f.y += x.y, f.z += x.z, f.normalize(), l.push(f.x, f.y, f.z), x.copy(m);
        }
        for(let p1 = 0; p1 <= t; p1++){
            let M = n + p1 * u * i, y56 = Math.sin(M), b54 = Math.cos(M);
            for(let T = 0; T <= e.length - 1; T++){
                h.x = e[T].x * y56, h.y = e[T].y, h.z = e[T].x * b54, o.push(h.x, h.y, h.z), d.x = p1 / t, d.y = T / (e.length - 1), a.push(d.x, d.y);
                let R = l[3 * T + 0] * y56, P28 = l[3 * T + 1], H = l[3 * T + 0] * b54;
                c.push(R, P28, H);
            }
        }
        for(let p2 = 0; p2 < t; p2++)for(let M = 0; M < e.length - 1; M++){
            let y57 = M + p2 * e.length, b55 = y57, T = y57 + e.length, R = y57 + e.length + 1, P29 = y57 + 1;
            r.push(b55, T, P29), r.push(R, P29, T);
        }
        this.setIndex(r), this.setAttribute("position", new he(o, 3)), this.setAttribute("uv", new he(a, 2)), this.setAttribute("normal", new he(c, 3));
    }
    static fromJSON(e) {
        return new br(e.points, e.segments, e.phiStart, e.phiLength);
    }
}, Bi = class extends ln {
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
        super(n, i, e, t);
        this.type = "OctahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new Bi(e.radius, e.detail);
    }
}, Sr = class extends Me {
    constructor(e = 0.5, t = 1, n = 8, i = 1, r = 0, o = Math.PI * 2){
        super();
        this.type = "RingGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: o
        }, n = Math.max(3, n), i = Math.max(1, i);
        let a = [], l = [], c = [], u = [], h = e, d = (t - e) / i, f = new w, m = new Z;
        for(let x = 0; x <= i; x++){
            for(let _ = 0; _ <= n; _++){
                let g69 = r + _ / n * o;
                f.x = h * Math.cos(g69), f.y = h * Math.sin(g69), l.push(f.x, f.y, f.z), c.push(0, 0, 1), m.x = (f.x / t + 1) / 2, m.y = (f.y / t + 1) / 2, u.push(m.x, m.y);
            }
            h += d;
        }
        for(let x2 = 0; x2 < i; x2++){
            let _ = x2 * (n + 1);
            for(let g70 = 0; g70 < n; g70++){
                let p = g70 + _, M = p, y58 = p + n + 1, b56 = p + n + 2, T = p + 1;
                a.push(M, y58, T), a.push(y58, b56, T);
            }
        }
        this.setIndex(a), this.setAttribute("position", new he(l, 3)), this.setAttribute("normal", new he(c, 3)), this.setAttribute("uv", new he(u, 2));
    }
    static fromJSON(e) {
        return new Sr(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
    }
}, Ni = class extends Me {
    constructor(e = new Yt([
        new Z(0, 0.5),
        new Z(-0.5, -0.5),
        new Z(0.5, -0.5)
    ]), t = 12){
        super();
        this.type = "ShapeGeometry", this.parameters = {
            shapes: e,
            curveSegments: t
        };
        let n = [], i = [], r = [], o = [], a = 0, l = 0;
        if (Array.isArray(e) === !1) c(e);
        else for(let u2 = 0; u2 < e.length; u2++)c(e[u2]), this.addGroup(a, l, u2), a += l, l = 0;
        this.setIndex(n), this.setAttribute("position", new he(i, 3)), this.setAttribute("normal", new he(r, 3)), this.setAttribute("uv", new he(o, 2));
        function c(u) {
            let h = i.length / 3, d = u.extractPoints(t), f = d.shape, m = d.holes;
            Zt.isClockWise(f) === !1 && (f = f.reverse());
            for(let _ = 0, g71 = m.length; _ < g71; _++){
                let p = m[_];
                Zt.isClockWise(p) === !0 && (m[_] = p.reverse());
            }
            let x = Zt.triangulateShape(f, m);
            for(let _2 = 0, g2 = m.length; _2 < g2; _2++){
                let p = m[_2];
                f = f.concat(p);
            }
            for(let _3 = 0, g3 = f.length; _3 < g3; _3++){
                let p = f[_3];
                i.push(p.x, p.y, 0), r.push(0, 0, 1), o.push(p.x, p.y);
            }
            for(let _4 = 0, g4 = x.length; _4 < g4; _4++){
                let p = x[_4], M = p[0] + h, y59 = p[1] + h, b57 = p[2] + h;
                n.push(M, y59, b57), l += 3;
            }
        }
    }
    toJSON() {
        let e = super.toJSON(), t = this.parameters.shapes;
        return Ox(t, e);
    }
    static fromJSON(e, t) {
        let n = [];
        for(let i = 0, r = e.shapes.length; i < r; i++){
            let o = t[e.shapes[i]];
            n.push(o);
        }
        return new Ni(n, e.curveSegments);
    }
};
function Ox(s196, e) {
    if (e.shapes = [], Array.isArray(s196)) for(let t = 0, n = s196.length; t < n; t++){
        let i = s196[t];
        e.shapes.push(i.uuid);
    }
    else e.shapes.push(s196.uuid);
    return e;
}
var zi = class extends Me {
    constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, o = 0, a = Math.PI){
        super();
        this.type = "SphereGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: o,
            thetaLength: a
        }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
        let l = Math.min(o + a, Math.PI), c = 0, u = [], h = new w, d = new w, f = [], m = [], x = [], _ = [];
        for(let g72 = 0; g72 <= n; g72++){
            let p = [], M = g72 / n, y60 = 0;
            g72 == 0 && o == 0 ? y60 = 0.5 / t : g72 == n && l == Math.PI && (y60 = -0.5 / t);
            for(let b58 = 0; b58 <= t; b58++){
                let T = b58 / t;
                h.x = -e * Math.cos(i + T * r) * Math.sin(o + M * a), h.y = e * Math.cos(o + M * a), h.z = e * Math.sin(i + T * r) * Math.sin(o + M * a), m.push(h.x, h.y, h.z), d.copy(h).normalize(), x.push(d.x, d.y, d.z), _.push(T + y60, 1 - M), p.push(c++);
            }
            u.push(p);
        }
        for(let g5 = 0; g5 < n; g5++)for(let p = 0; p < t; p++){
            let M = u[g5][p + 1], y61 = u[g5][p], b59 = u[g5 + 1][p], T = u[g5 + 1][p + 1];
            (g5 !== 0 || o > 0) && f.push(M, y61, T), (g5 !== n - 1 || l < Math.PI) && f.push(y61, b59, T);
        }
        this.setIndex(f), this.setAttribute("position", new he(m, 3)), this.setAttribute("normal", new he(x, 3)), this.setAttribute("uv", new he(_, 2));
    }
    static fromJSON(e) {
        return new zi(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
    }
}, Er = class extends ln {
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
        super(n, i, e, t);
        this.type = "TetrahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        };
    }
    static fromJSON(e) {
        return new Er(e.radius, e.detail);
    }
}, Tr = class extends Me {
    constructor(e = 1, t = 0.4, n = 8, i = 6, r = Math.PI * 2){
        super();
        this.type = "TorusGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        }, n = Math.floor(n), i = Math.floor(i);
        let o = [], a = [], l = [], c = [], u = new w, h = new w, d = new w;
        for(let f = 0; f <= n; f++)for(let m = 0; m <= i; m++){
            let x = m / i * r, _ = f / n * Math.PI * 2;
            h.x = (e + t * Math.cos(_)) * Math.cos(x), h.y = (e + t * Math.cos(_)) * Math.sin(x), h.z = t * Math.sin(_), a.push(h.x, h.y, h.z), u.x = e * Math.cos(x), u.y = e * Math.sin(x), d.subVectors(h, u).normalize(), l.push(d.x, d.y, d.z), c.push(m / i), c.push(f / n);
        }
        for(let f4 = 1; f4 <= n; f4++)for(let m3 = 1; m3 <= i; m3++){
            let x = (i + 1) * f4 + m3 - 1, _ = (i + 1) * (f4 - 1) + m3 - 1, g73 = (i + 1) * (f4 - 1) + m3, p = (i + 1) * f4 + m3;
            o.push(x, _, p), o.push(_, g73, p);
        }
        this.setIndex(o), this.setAttribute("position", new he(a, 3)), this.setAttribute("normal", new he(l, 3)), this.setAttribute("uv", new he(c, 2));
    }
    static fromJSON(e) {
        return new Tr(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
    }
}, Ar = class extends Me {
    constructor(e = 1, t = 0.4, n = 64, i = 8, r = 2, o = 3){
        super();
        this.type = "TorusKnotGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: o
        }, n = Math.floor(n), i = Math.floor(i);
        let a = [], l = [], c = [], u = [], h = new w, d = new w, f = new w, m = new w, x = new w, _ = new w, g74 = new w;
        for(let M2 = 0; M2 <= n; ++M2){
            let y62 = M2 / n * r * Math.PI * 2;
            p(y62, r, o, e, f), p(y62 + 0.01, r, o, e, m), _.subVectors(m, f), g74.addVectors(m, f), x.crossVectors(_, g74), g74.crossVectors(x, _), x.normalize(), g74.normalize();
            for(let b60 = 0; b60 <= i; ++b60){
                let T = b60 / i * Math.PI * 2, R = -t * Math.cos(T), P30 = t * Math.sin(T);
                h.x = f.x + (R * g74.x + P30 * x.x), h.y = f.y + (R * g74.y + P30 * x.y), h.z = f.z + (R * g74.z + P30 * x.z), l.push(h.x, h.y, h.z), d.subVectors(h, f).normalize(), c.push(d.x, d.y, d.z), u.push(M2 / n), u.push(b60 / i);
            }
        }
        for(let M1 = 1; M1 <= n; M1++)for(let y3 = 1; y3 <= i; y3++){
            let b61 = (i + 1) * (M1 - 1) + (y3 - 1), T = (i + 1) * M1 + (y3 - 1), R = (i + 1) * M1 + y3, P31 = (i + 1) * (M1 - 1) + y3;
            a.push(b61, T, P31), a.push(T, R, P31);
        }
        this.setIndex(a), this.setAttribute("position", new he(l, 3)), this.setAttribute("normal", new he(c, 3)), this.setAttribute("uv", new he(u, 2));
        function p(M, y63, b62, T, R) {
            let P32 = Math.cos(M), H = Math.sin(M), N = b62 / y63 * M, v = Math.cos(N);
            R.x = T * (2 + v) * 0.5 * P32, R.y = T * (2 + v) * H * 0.5, R.z = T * Math.sin(N) * 0.5;
        }
    }
    static fromJSON(e) {
        return new Ar(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q);
    }
}, Rr = class extends Me {
    constructor(e = new ho(new w(-1, -1, 0), new w(-1, 1, 0), new w(1, 1, 0)), t = 64, n = 1, i = 8, r = !1){
        super();
        this.type = "TubeGeometry", this.parameters = {
            path: e,
            tubularSegments: t,
            radius: n,
            radialSegments: i,
            closed: r
        };
        let o = e.computeFrenetFrames(t, r);
        this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
        let a = new w, l = new w, c = new Z, u = new w, h = [], d = [], f = [], m = [];
        x(), this.setIndex(m), this.setAttribute("position", new he(h, 3)), this.setAttribute("normal", new he(d, 3)), this.setAttribute("uv", new he(f, 2));
        function x() {
            for(let M = 0; M < t; M++)_(M);
            _(r === !1 ? t : 0), p(), g75();
        }
        function _(M) {
            u = e.getPointAt(M / t, u);
            let y64 = o.normals[M], b63 = o.binormals[M];
            for(let T = 0; T <= i; T++){
                let R = T / i * Math.PI * 2, P33 = Math.sin(R), H = -Math.cos(R);
                l.x = H * y64.x + P33 * b63.x, l.y = H * y64.y + P33 * b63.y, l.z = H * y64.z + P33 * b63.z, l.normalize(), d.push(l.x, l.y, l.z), a.x = u.x + n * l.x, a.y = u.y + n * l.y, a.z = u.z + n * l.z, h.push(a.x, a.y, a.z);
            }
        }
        function g75() {
            for(let M = 1; M <= t; M++)for(let y65 = 1; y65 <= i; y65++){
                let b64 = (i + 1) * (M - 1) + (y65 - 1), T = (i + 1) * M + (y65 - 1), R = (i + 1) * M + y65, P34 = (i + 1) * (M - 1) + y65;
                m.push(b64, T, P34), m.push(T, R, P34);
            }
        }
        function p() {
            for(let M = 0; M <= t; M++)for(let y66 = 0; y66 <= i; y66++)c.x = M / t, c.y = y66 / i, f.push(c.x, c.y);
        }
    }
    toJSON() {
        let e = super.toJSON();
        return e.path = this.parameters.path.toJSON(), e;
    }
    static fromJSON(e) {
        return new Rr(new Ca[e.path.type]().fromJSON(e.path), e.tubularSegments, e.radius, e.radialSegments, e.closed);
    }
}, La = class extends Me {
    constructor(e = null){
        super();
        if (this.type = "WireframeGeometry", this.parameters = {
            geometry: e
        }, e !== null) {
            let t = [], n = new Set, i = new w, r = new w;
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
                        let g76 = a.getX(m + _), p = a.getX(m + (_ + 1) % 3);
                        i.fromBufferAttribute(o, g76), r.fromBufferAttribute(o, p), Pc(i, r, n) === !0 && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z));
                    }
                }
            } else {
                let o = e.attributes.position;
                for(let a = 0, l = o.count / 3; a < l; a++)for(let c = 0; c < 3; c++){
                    let u = 3 * a + c, h = 3 * a + (c + 1) % 3;
                    i.fromBufferAttribute(o, u), r.fromBufferAttribute(o, h), Pc(i, r, n) === !0 && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z));
                }
            }
            this.setAttribute("position", new he(t, 3));
        }
    }
};
function Pc(s197, e, t) {
    let n = `${s197.x},${s197.y},${s197.z}-${e.x},${e.y},${e.z}`, i = `${e.x},${e.y},${e.z}-${s197.x},${s197.y},${s197.z}`;
    return t.has(n) === !0 || t.has(i) === !0 ? !1 : (t.add(n, i), !0);
}
var Dc = Object.freeze({
    __proto__: null,
    BoxGeometry: An,
    BoxBufferGeometry: An,
    CircleGeometry: mr,
    CircleBufferGeometry: mr,
    ConeGeometry: gr,
    ConeBufferGeometry: gr,
    CylinderGeometry: Zn,
    CylinderBufferGeometry: Zn,
    DodecahedronGeometry: xr,
    DodecahedronBufferGeometry: xr,
    EdgesGeometry: Sa,
    ExtrudeGeometry: cn,
    ExtrudeBufferGeometry: cn,
    IcosahedronGeometry: wr,
    IcosahedronBufferGeometry: wr,
    LatheGeometry: br,
    LatheBufferGeometry: br,
    OctahedronGeometry: Bi,
    OctahedronBufferGeometry: Bi,
    PlaneGeometry: Fi,
    PlaneBufferGeometry: Fi,
    PolyhedronGeometry: ln,
    PolyhedronBufferGeometry: ln,
    RingGeometry: Sr,
    RingBufferGeometry: Sr,
    ShapeGeometry: Ni,
    ShapeBufferGeometry: Ni,
    SphereGeometry: zi,
    SphereBufferGeometry: zi,
    TetrahedronGeometry: Er,
    TetrahedronBufferGeometry: Er,
    TorusGeometry: Tr,
    TorusBufferGeometry: Tr,
    TorusKnotGeometry: Ar,
    TorusKnotBufferGeometry: Ar,
    TubeGeometry: Rr,
    TubeBufferGeometry: Rr,
    WireframeGeometry: La
}), Pa = class extends pt {
    constructor(e){
        super();
        this.type = "ShadowMaterial", this.color = new ne(0), this.transparent = !0, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this;
    }
};
Pa.prototype.isShadowMaterial = !0;
var po = class extends pt {
    constructor(e){
        super();
        this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new ne(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ki, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.defines = {
            STANDARD: ""
        }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this;
    }
};
po.prototype.isMeshStandardMaterial = !0;
var Da = class extends po {
    constructor(e){
        super();
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Z(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
                return xt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
            },
            set: function(t) {
                this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
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
Da.prototype.isMeshPhysicalMaterial = !0;
var Ia = class extends pt {
    constructor(e){
        super();
        this.type = "MeshPhongMaterial", this.color = new ne(16777215), this.specular = new ne(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ki, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ws, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this;
    }
};
Ia.prototype.isMeshPhongMaterial = !0;
var Fa = class extends pt {
    constructor(e){
        super();
        this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.color = new ne(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ki, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this;
    }
};
Fa.prototype.isMeshToonMaterial = !0;
var Ba = class extends pt {
    constructor(e){
        super();
        this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ki, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
    }
};
Ba.prototype.isMeshNormalMaterial = !0;
var Na = class extends pt {
    constructor(e){
        super();
        this.type = "MeshLambertMaterial", this.color = new ne(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ws, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this;
    }
};
Na.prototype.isMeshLambertMaterial = !0;
var za = class extends pt {
    constructor(e){
        super();
        this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new ne(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ki, this.normalScale = new Z(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.defines = {
            MATCAP: ""
        }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this;
    }
};
za.prototype.isMeshMatcapMaterial = !0;
var Oa = class extends mt {
    constructor(e){
        super();
        this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
    }
    copy(e) {
        return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
    }
};
Oa.prototype.isLineDashedMaterial = !0;
var Ux = Object.freeze({
    __proto__: null,
    ShadowMaterial: Pa,
    SpriteMaterial: io,
    RawShaderMaterial: Wi,
    ShaderMaterial: on,
    PointsMaterial: Kn,
    MeshPhysicalMaterial: Da,
    MeshStandardMaterial: po,
    MeshPhongMaterial: Ia,
    MeshToonMaterial: Fa,
    MeshNormalMaterial: Ba,
    MeshLambertMaterial: Na,
    MeshDepthMaterial: eo,
    MeshDistanceMaterial: to,
    MeshBasicMaterial: un,
    MeshMatcapMaterial: za,
    LineDashedMaterial: Oa,
    LineBasicMaterial: mt,
    Material: pt
}), $e = {
    arraySlice: function(s198, e, t) {
        return $e.isTypedArray(s198) ? new s198.constructor(s198.subarray(e, t !== void 0 ? t : s198.length)) : s198.slice(e, t);
    },
    convertArray: function(s199, e, t) {
        return !s199 || !t && s199.constructor === e ? s199 : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s199) : Array.prototype.slice.call(s199);
    },
    isTypedArray: function(s200) {
        return ArrayBuffer.isView(s200) && !(s200 instanceof DataView);
    },
    getKeyframeOrder: function(s201) {
        function e(i, r) {
            return s201[i] - s201[r];
        }
        let t = s201.length, n = new Array(t);
        for(let i2 = 0; i2 !== t; ++i2)n[i2] = i2;
        return n.sort(e), n;
    },
    sortedArray: function(s202, e, t) {
        let n = s202.length, i = new s202.constructor(n);
        for(let r = 0, o = 0; o !== n; ++r){
            let a = t[r] * e;
            for(let l = 0; l !== e; ++l)i[o++] = s202[a + l];
        }
        return i;
    },
    flattenJSON: function(s203, e, t, n) {
        let i = 1, r = s203[0];
        for(; r !== void 0 && r[n] === void 0;)r = s203[i++];
        if (r === void 0) return;
        let o = r[n];
        if (o !== void 0) if (Array.isArray(o)) do o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s203[i++];
        while (r !== void 0)
        else if (o.toArray !== void 0) do o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s203[i++];
        while (r !== void 0)
        else do o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s203[i++];
        while (r !== void 0)
    },
    subclip: function(s204, e, t, n, i = 30) {
        let r = s204.clone();
        r.name = e;
        let o = [];
        for(let l = 0; l < r.tracks.length; ++l){
            let c = r.tracks[l], u = c.getValueSize(), h = [], d = [];
            for(let f = 0; f < c.times.length; ++f){
                let m = c.times[f] * i;
                if (!(m < t || m >= n)) {
                    h.push(c.times[f]);
                    for(let x = 0; x < u; ++x)d.push(c.values[f * u + x]);
                }
            }
            h.length !== 0 && (c.times = $e.convertArray(h, c.times.constructor), c.values = $e.convertArray(d, c.values.constructor), o.push(c));
        }
        r.tracks = o;
        let a = 1 / 0;
        for(let l5 = 0; l5 < r.tracks.length; ++l5)a > r.tracks[l5].times[0] && (a = r.tracks[l5].times[0]);
        for(let l6 = 0; l6 < r.tracks.length; ++l6)r.tracks[l6].shift(-1 * a);
        return r.resetDuration(), r;
    },
    makeClipAdditive: function(s205, e = 0, t = s205, n = 30) {
        n <= 0 && (n = 30);
        let i = t.tracks.length, r = e / n;
        for(let o = 0; o < i; ++o){
            let a = t.tracks[o], l = a.ValueTypeName;
            if (l === "bool" || l === "string") continue;
            let c = s205.tracks.find(function(g77) {
                return g77.name === a.name && g77.ValueTypeName === l;
            });
            if (c === void 0) continue;
            let u = 0, h = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = h / 3);
            let d = 0, f = c.getValueSize();
            c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
            let m = a.times.length - 1, x;
            if (r <= a.times[0]) {
                let g78 = u, p = h - u;
                x = $e.arraySlice(a.values, g78, p);
            } else if (r >= a.times[m]) {
                let g79 = m * h + u, p = g79 + h - u;
                x = $e.arraySlice(a.values, g79, p);
            } else {
                let g80 = a.createInterpolant(), p = u, M = h - u;
                g80.evaluate(r), x = $e.arraySlice(g80.resultBuffer, p, M);
            }
            l === "quaternion" && new yt().fromArray(x).normalize().conjugate().toArray(x);
            let _ = c.times.length;
            for(let g6 = 0; g6 < _; ++g6){
                let p = g6 * f + d;
                if (l === "quaternion") yt.multiplyQuaternionsFlat(c.values, p, x, 0, c.values, p);
                else {
                    let M = f - d * 2;
                    for(let y67 = 0; y67 < M; ++y67)c.values[p + y67] -= x[y67];
                }
            }
        }
        return s205.blendMode = rh, s205;
    }
}, hn = class {
    constructor(e, t, n, i){
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(e) {
        let t = this.parameterPositions, n = this._cachedIndex, i = t[n], r = t[n - 1];
        e: {
            t: {
                let o;
                n: {
                    i: if (!(e < i)) {
                        for(let a = n + 2;;){
                            if (i === void 0) {
                                if (e < r) break i;
                                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r);
                            }
                            if (n === a) break;
                            if (r = i, i = t[++n], e < i) break t;
                        }
                        o = t.length;
                        break n;
                    }
                    if (!(e >= r)) {
                        let a = t[1];
                        e < a && (n = 2, r = a);
                        for(let l = n - 2;;){
                            if (r === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                            if (n === l) break;
                            if (i = r, r = t[--n - 1], e >= r) break t;
                        }
                        o = n, n = 0;
                        break n;
                    }
                    break e;
                }
                for(; n < o;){
                    let a = n + o >>> 1;
                    e < t[a] ? o = a : n = a + 1;
                }
                if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                if (i === void 0) return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, e);
            }
            this._cachedIndex = n, this.intervalChanged_(n, r, i);
        }
        return this.interpolate_(n, r, e, i);
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(e) {
        let t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
        for(let o = 0; o !== i; ++o)t[o] = n[r + o];
        return t;
    }
    interpolate_() {
        throw new Error("call to abstract method");
    }
    intervalChanged_() {}
};
hn.prototype.beforeStart_ = hn.prototype.copySampleValue_;
hn.prototype.afterEnd_ = hn.prototype.copySampleValue_;
var kh = class extends hn {
    constructor(e, t, n, i){
        super(e, t, n, i);
        this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: wi,
            endingEnd: wi
        };
    }
    intervalChanged_(e, t, n) {
        let i = this.parameterPositions, r = e - 2, o = e + 1, a = i[r], l = i[o];
        if (a === void 0) switch(this.getSettings_().endingStart){
            case bi:
                r = e, a = 2 * t - n;
                break;
            case Gs:
                r = i.length - 2, a = t + i[r] - i[r + 1];
                break;
            default:
                r = e, a = n;
        }
        if (l === void 0) switch(this.getSettings_().endingEnd){
            case bi:
                o = e, l = 2 * n - t;
                break;
            case Gs:
                o = 1, l = n + i[1] - i[0];
                break;
            default:
                o = e - 1, l = t;
        }
        let c = (n - t) * 0.5, u = this.valueSize;
        this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * u, this._offsetNext = o * u;
    }
    interpolate_(e, t, n, i) {
        let r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - t) / (i - t), x = m * m, _ = x * m, g81 = -d * _ + 2 * d * x - d * m, p = (1 + d) * _ + (-1.5 - 2 * d) * x + (-0.5 + d) * m + 1, M = (-1 - f) * _ + (1.5 + f) * x + 0.5 * m, y68 = f * _ - f * x;
        for(let b65 = 0; b65 !== a; ++b65)r[b65] = g81 * o[u + b65] + p * o[c + b65] + M * o[l + b65] + y68 * o[h + b65];
        return r;
    }
}, Ua = class extends hn {
    constructor(e, t, n, i){
        super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
        let r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (i - t), h = 1 - u;
        for(let d = 0; d !== a; ++d)r[d] = o[c + d] * h + o[l + d] * u;
        return r;
    }
}, Vh = class extends hn {
    constructor(e, t, n, i){
        super(e, t, n, i);
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1);
    }
}, Ht = class {
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
        return new Vh(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodLinear(e) {
        return new Ua(this.times, this.values, this.getValueSize(), e);
    }
    InterpolantFactoryMethodSmooth(e) {
        return new kh(this.times, this.values, this.getValueSize(), e);
    }
    setInterpolation(e) {
        let t;
        switch(e){
            case Us:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case Hs:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case wo:
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
                return Us;
            case this.InterpolantFactoryMethodLinear:
                return Hs;
            case this.InterpolantFactoryMethodSmooth:
                return wo;
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
        let n = this.times, i = n.length, r = 0, o = i - 1;
        for(; r !== i && n[r] < e;)++r;
        for(; o !== -1 && n[o] > t;)--o;
        if (++o, r !== 0 || o !== i) {
            r >= o && (o = Math.max(o, 1), r = o - 1);
            let a = this.getValueSize();
            this.times = $e.arraySlice(n, r, o), this.values = $e.arraySlice(this.values, r * a, o * a);
        }
        return this;
    }
    validate() {
        let e = !0, t = this.getValueSize();
        t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
        let n = this.times, i = this.values, r = n.length;
        r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
        let o = null;
        for(let a = 0; a !== r; a++){
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
        if (i !== void 0 && $e.isTypedArray(i)) for(let a5 = 0, l = i.length; a5 !== l; ++a5){
            let c = i[a5];
            if (isNaN(c)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a5, c), e = !1;
                break;
            }
        }
        return e;
    }
    optimize() {
        let e = $e.arraySlice(this.times), t = $e.arraySlice(this.values), n = this.getValueSize(), i = this.getInterpolation() === wo, r = e.length - 1, o = 1;
        for(let a = 1; a < r; ++a){
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
                    let h = a * n, d = o * n;
                    for(let f = 0; f !== n; ++f)t[d + f] = t[h + f];
                }
                ++o;
            }
        }
        if (r > 0) {
            e[o] = e[r];
            for(let a = r * n, l = o * n, c = 0; c !== n; ++c)t[l + c] = t[a + c];
            ++o;
        }
        return o !== e.length ? (this.times = $e.arraySlice(e, 0, o), this.values = $e.arraySlice(t, 0, o * n)) : (this.times = e, this.values = t), this;
    }
    clone() {
        let e = $e.arraySlice(this.times, 0), t = $e.arraySlice(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
        return i.createInterpolant = this.createInterpolant, i;
    }
};
Ht.prototype.TimeBufferType = Float32Array;
Ht.prototype.ValueBufferType = Float32Array;
Ht.prototype.DefaultInterpolation = Hs;
var Qn = class extends Ht {
};
Qn.prototype.ValueTypeName = "bool";
Qn.prototype.ValueBufferType = Array;
Qn.prototype.DefaultInterpolation = Us;
Qn.prototype.InterpolantFactoryMethodLinear = void 0;
Qn.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ha = class extends Ht {
};
Ha.prototype.ValueTypeName = "color";
var Cr = class extends Ht {
};
Cr.prototype.ValueTypeName = "number";
var Wh = class extends hn {
    constructor(e, t, n, i){
        super(e, t, n, i);
    }
    interpolate_(e, t, n, i) {
        let r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t), c = e * a;
        for(let u = c + a; c !== u; c += 4)yt.slerpFlat(r, 0, o, c - a, o, c, l);
        return r;
    }
}, Xi = class extends Ht {
    InterpolantFactoryMethodLinear(e) {
        return new Wh(this.times, this.values, this.getValueSize(), e);
    }
};
Xi.prototype.ValueTypeName = "quaternion";
Xi.prototype.DefaultInterpolation = Hs;
Xi.prototype.InterpolantFactoryMethodSmooth = void 0;
var ei = class extends Ht {
};
ei.prototype.ValueTypeName = "string";
ei.prototype.ValueBufferType = Array;
ei.prototype.DefaultInterpolation = Us;
ei.prototype.InterpolantFactoryMethodLinear = void 0;
ei.prototype.InterpolantFactoryMethodSmooth = void 0;
var Lr = class extends Ht {
};
Lr.prototype.ValueTypeName = "vector";
var Pr = class {
    constructor(e, t = -1, n, i = ga){
        this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Lt(), this.duration < 0 && this.resetDuration();
    }
    static parse(e) {
        let t = [], n = e.tracks, i = 1 / (e.fps || 1);
        for(let o = 0, a = n.length; o !== a; ++o)t.push(Gx(n[o]).scale(i));
        let r = new this(e.name, e.duration, t, e.blendMode);
        return r.uuid = e.uuid, r;
    }
    static toJSON(e) {
        let t = [], n = e.tracks, i = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid,
            blendMode: e.blendMode
        };
        for(let r = 0, o = n.length; r !== o; ++r)t.push(Ht.toJSON(n[r]));
        return i;
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
        let r = t.length, o = [];
        for(let a = 0; a < r; a++){
            let l = [], c = [];
            l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
            let u = $e.getKeyframeOrder(l);
            l = $e.sortedArray(l, 1, u), c = $e.sortedArray(c, 1, u), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new Cr(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n));
        }
        return new this(e, -1, o);
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            let i = e;
            n = i.geometry && i.geometry.animations || i.animations;
        }
        for(let i = 0; i < n.length; i++)if (n[i].name === t) return n[i];
        return null;
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        let i = {}, r = /^([\w-]*?)([\d]+)$/;
        for(let a = 0, l = e.length; a < l; a++){
            let c = e[a], u = c.name.match(r);
            if (u && u.length > 1) {
                let h = u[1], d = i[h];
                d || (i[h] = d = []), d.push(c);
            }
        }
        let o = [];
        for(let a6 in i)o.push(this.CreateFromMorphTargetSequence(a6, i[a6], t, n));
        return o;
    }
    static parseAnimation(e, t) {
        if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
        let n = function(h, d, f, m, x) {
            if (f.length !== 0) {
                let _ = [], g82 = [];
                $e.flattenJSON(f, _, g82, m), _.length !== 0 && x.push(new h(d, _, g82));
            }
        }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode, l = e.length || -1, c = e.hierarchy || [];
        for(let h2 = 0; h2 < c.length; h2++){
            let d = c[h2].keys;
            if (!(!d || d.length === 0)) if (d[0].morphTargets) {
                let f = {}, m;
                for(m = 0; m < d.length; m++)if (d[m].morphTargets) for(let x = 0; x < d[m].morphTargets.length; x++)f[d[m].morphTargets[x]] = -1;
                for(let x3 in f){
                    let _ = [], g83 = [];
                    for(let p = 0; p !== d[m].morphTargets.length; ++p){
                        let M = d[m];
                        _.push(M.time), g83.push(M.morphTarget === x3 ? 1 : 0);
                    }
                    i.push(new Cr(".morphTargetInfluence[" + x3 + "]", _, g83));
                }
                l = f.length * (o || 1);
            } else {
                let f = ".bones[" + t[h2].name + "]";
                n(Lr, f + ".position", d, "pos", i), n(Xi, f + ".quaternion", d, "rot", i), n(Lr, f + ".scale", d, "scl", i);
            }
        }
        return i.length === 0 ? null : new this(r, l, i, a);
    }
    resetDuration() {
        let e = this.tracks, t = 0;
        for(let n = 0, i = e.length; n !== i; ++n){
            let r = this.tracks[n];
            t = Math.max(t, r.times[r.times.length - 1]);
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
function Hx(s206) {
    switch(s206.toLowerCase()){
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return Cr;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return Lr;
        case "color":
            return Ha;
        case "quaternion":
            return Xi;
        case "bool":
        case "boolean":
            return Qn;
        case "string":
            return ei;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s206);
}
function Gx(s207) {
    if (s207.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    let e = Hx(s207.type);
    if (s207.times === void 0) {
        let t = [], n = [];
        $e.flattenJSON(s207.keys, t, n, "value"), s207.times = t, s207.values = n;
    }
    return e.parse !== void 0 ? e.parse(s207) : new e(s207.name, s207.times, s207.values, s207.interpolation);
}
var Oi = {
    enabled: !1,
    files: {},
    add: function(s208, e) {
        this.enabled !== !1 && (this.files[s208] = e);
    },
    get: function(s209) {
        if (this.enabled !== !1) return this.files[s209];
    },
    remove: function(s210) {
        delete this.files[s210];
    },
    clear: function() {
        this.files = {};
    }
}, Ga = class {
    constructor(e, t, n){
        let i = this, r = !1, o = 0, a = 0, l, c = [];
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
            a++, r === !1 && i.onStart !== void 0 && i.onStart(u, o, a), r = !0;
        }, this.itemEnd = function(u) {
            o++, i.onProgress !== void 0 && i.onProgress(u, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
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
}, kx = new Ga, Et = class {
    constructor(e){
        this.manager = e !== void 0 ? e : kx, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {}
    loadAsync(e, t) {
        let n = this;
        return new Promise(function(i, r) {
            n.load(e, i, t, r);
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
}, sn = {}, $t = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        let r = Oi.get(e);
        if (r !== void 0) return this.manager.itemStart(e), setTimeout(()=>{
            t && t(r), this.manager.itemEnd(e);
        }, 0), r;
        if (sn[e] !== void 0) {
            sn[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            });
            return;
        }
        sn[e] = [], sn[e].push({
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
                let u = sn[e], h = c.body.getReader(), d = c.headers.get("Content-Length"), f = d ? parseInt(d) : 0, m = f !== 0, x = 0, _ = new ReadableStream({
                    start (g84) {
                        p();
                        function p() {
                            h.read().then(({ done: M , value: y69  })=>{
                                if (M) g84.close();
                                else {
                                    x += y69.byteLength;
                                    let b66 = new ProgressEvent("progress", {
                                        lengthComputable: m,
                                        loaded: x,
                                        total: f
                                    });
                                    for(let T = 0, R = u.length; T < R; T++){
                                        let P35 = u[T];
                                        P35.onProgress && P35.onProgress(b66);
                                    }
                                    g84.enqueue(y69), p();
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
                    return c.text().then((u)=>new DOMParser().parseFromString(u, a)
                    );
                case "json":
                    return c.json();
                default:
                    if (a === void 0) return c.text();
                    {
                        let h = /charset="?([^;"\s]*)"?/i.exec(a), d = h && h[1] ? h[1].toLowerCase() : void 0, f = new TextDecoder(d);
                        return c.arrayBuffer().then((m)=>f.decode(m)
                        );
                    }
            }
        }).then((c)=>{
            Oi.add(e, c);
            let u = sn[e];
            delete sn[e];
            for(let h = 0, d = u.length; h < d; h++){
                let f = u[h];
                f.onLoad && f.onLoad(c);
            }
        }).catch((c)=>{
            let u = sn[e];
            if (u === void 0) throw this.manager.itemError(e), c;
            delete sn[e];
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
}, Vx = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = this, o = new $t(this.manager);
        o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
            try {
                t(r.parse(JSON.parse(a)));
            } catch (l) {
                i ? i(l) : console.error(l), r.manager.itemError(e);
            }
        }, n, i);
    }
    parse(e) {
        let t = [];
        for(let n = 0; n < e.length; n++){
            let i = Pr.parse(e[n]);
            t.push(i);
        }
        return t;
    }
}, Wx = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = this, o = [], a = new ba, l = new $t(this.manager);
        l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(r.withCredentials);
        let c = 0;
        function u(h) {
            l.load(e[h], function(d) {
                let f = r.parse(d, !0);
                o[h] = {
                    width: f.width,
                    height: f.height,
                    format: f.format,
                    mipmaps: f.mipmaps
                }, c += 1, c === 6 && (f.mipmapCount === 1 && (a.minFilter = nt), a.image = o, a.format = f.format, a.needsUpdate = !0, t && t(a));
            }, n, i);
        }
        if (Array.isArray(e)) for(let h3 = 0, d3 = e.length; h3 < d3; ++h3)u(h3);
        else l.load(e, function(h) {
            let d = r.parse(h, !0);
            if (d.isCubemap) {
                let f = d.mipmaps.length / d.mipmapCount;
                for(let m = 0; m < f; m++){
                    o[m] = {
                        mipmaps: []
                    };
                    for(let x = 0; x < d.mipmapCount; x++)o[m].mipmaps.push(d.mipmaps[m * d.mipmapCount + x]), o[m].format = d.format, o[m].width = d.width, o[m].height = d.height;
                }
                a.image = o;
            } else a.image.width = d.width, a.image.height = d.height, a.mipmaps = d.mipmaps;
            d.mipmapCount === 1 && (a.minFilter = nt), a.format = d.format, a.needsUpdate = !0, t && t(a);
        }, n, i);
        return a;
    }
}, Dr = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        let r = this, o = Oi.get(e);
        if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() {
            t && t(o), r.manager.itemEnd(e);
        }, 0), o;
        let a = pr("img");
        function l() {
            u(), Oi.add(e, this), t && t(this), r.manager.itemEnd(e);
        }
        function c(h) {
            u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
        }
        function u() {
            a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
        }
        return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
    }
}, qh = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = new Vi, o = new Dr(this.manager);
        o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
        let a = 0;
        function l(c) {
            o.load(e[c], function(u) {
                r.images[c] = u, a++, a === 6 && (r.needsUpdate = !0, t && t(r));
            }, void 0, i);
        }
        for(let c4 = 0; c4 < e.length; ++c4)l(c4);
        return r;
    }
}, Xh = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = this, o = new Jn, a = new $t(this.manager);
        return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(e, function(l) {
            let c = r.parse(l);
            !c || (c.image !== void 0 ? o.image = c.image : c.data !== void 0 && (o.image.width = c.width, o.image.height = c.height, o.image.data = c.data), o.wrapS = c.wrapS !== void 0 ? c.wrapS : Mt, o.wrapT = c.wrapT !== void 0 ? c.wrapT : Mt, o.magFilter = c.magFilter !== void 0 ? c.magFilter : nt, o.minFilter = c.minFilter !== void 0 ? c.minFilter : nt, o.anisotropy = c.anisotropy !== void 0 ? c.anisotropy : 1, c.encoding !== void 0 && (o.encoding = c.encoding), c.flipY !== void 0 && (o.flipY = c.flipY), c.format !== void 0 && (o.format = c.format), c.type !== void 0 && (o.type = c.type), c.mipmaps !== void 0 && (o.mipmaps = c.mipmaps, o.minFilter = Gi), c.mipmapCount === 1 && (o.minFilter = nt), c.generateMipmaps !== void 0 && (o.generateMipmaps = c.generateMipmaps), o.needsUpdate = !0, t && t(o, c));
        }, n, i), o;
    }
}, Jh = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = new ct, o = new Dr(this.manager);
        return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
            r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
        }, n, i), r;
    }
}, Ut = class extends Fe {
    constructor(e, t = 1){
        super();
        this.type = "Light", this.color = new ne(e), this.intensity = t;
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
Ut.prototype.isLight = !0;
var ka = class extends Ut {
    constructor(e, t, n){
        super(e, n);
        this.type = "HemisphereLight", this.position.copy(Fe.DefaultUp), this.updateMatrix(), this.groundColor = new ne(t);
    }
    copy(e) {
        return Ut.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this;
    }
};
ka.prototype.isHemisphereLight = !0;
var Ic = new de, Fc = new w, Bc = new w, mo = class {
    constructor(e){
        this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Z(512, 512), this.map = null, this.mapPass = null, this.matrix = new de, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Br, this._frameExtents = new Z(1, 1), this._viewportCount = 1, this._viewports = [
            new We(0, 0, 1, 1)
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
        Fc.setFromMatrixPosition(e.matrixWorld), t.position.copy(Fc), Bc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Bc), t.updateMatrixWorld(), Ic.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ic), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
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
}, Va = class extends mo {
    constructor(){
        super(new ft(50, 1, 0.5, 500));
        this.focus = 1;
    }
    updateMatrices(e) {
        let t = this.camera, n = fr * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
        (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
    }
    copy(e) {
        return super.copy(e), this.focus = e.focus, this;
    }
};
Va.prototype.isSpotLightShadow = !0;
var Wa = class extends Ut {
    constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 1){
        super(e, t);
        this.type = "SpotLight", this.position.copy(Fe.DefaultUp), this.updateMatrix(), this.target = new Fe, this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.shadow = new Va;
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
Wa.prototype.isSpotLight = !0;
var Nc = new de, ir = new w, ea = new w, qa = class extends mo {
    constructor(){
        super(new ft(90, 1, 0.5, 500));
        this._frameExtents = new Z(4, 2), this._viewportCount = 6, this._viewports = [
            new We(2, 1, 1, 1),
            new We(0, 1, 1, 1),
            new We(3, 1, 1, 1),
            new We(1, 1, 1, 1),
            new We(3, 0, 1, 1),
            new We(1, 0, 1, 1)
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
        let n = this.camera, i = this.matrix, r = e.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), ir.setFromMatrixPosition(e.matrixWorld), n.position.copy(ir), ea.copy(n.position), ea.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ea), n.updateMatrixWorld(), i.makeTranslation(-ir.x, -ir.y, -ir.z), Nc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nc);
    }
};
qa.prototype.isPointLightShadow = !0;
var Xa = class extends Ut {
    constructor(e, t, n = 0, i = 1){
        super(e, t);
        this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new qa;
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
Xa.prototype.isPointLight = !0;
var Ja = class extends mo {
    constructor(){
        super(new Nr(-5, 5, 5, -5, 0.5, 500));
    }
};
Ja.prototype.isDirectionalLightShadow = !0;
var Ya = class extends Ut {
    constructor(e, t){
        super(e, t);
        this.type = "DirectionalLight", this.position.copy(Fe.DefaultUp), this.updateMatrix(), this.target = new Fe, this.shadow = new Ja;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(e) {
        return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
    }
};
Ya.prototype.isDirectionalLight = !0;
var Za = class extends Ut {
    constructor(e, t){
        super(e, t);
        this.type = "AmbientLight";
    }
};
Za.prototype.isAmbientLight = !0;
var $a = class extends Ut {
    constructor(e, t, n = 10, i = 10){
        super(e, t);
        this.type = "RectAreaLight", this.width = n, this.height = i;
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
$a.prototype.isRectAreaLight = !0;
var ja = class {
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
        let n = e.x, i = e.y, r = e.z, o = this.coefficients;
        return t.copy(o[0]).multiplyScalar(0.282095), t.addScaledVector(o[1], 0.488603 * i), t.addScaledVector(o[2], 0.488603 * r), t.addScaledVector(o[3], 0.488603 * n), t.addScaledVector(o[4], 1.092548 * (n * i)), t.addScaledVector(o[5], 1.092548 * (i * r)), t.addScaledVector(o[6], 0.315392 * (3 * r * r - 1)), t.addScaledVector(o[7], 1.092548 * (n * r)), t.addScaledVector(o[8], 0.546274 * (n * n - i * i)), t;
    }
    getIrradianceAt(e, t) {
        let n = e.x, i = e.y, r = e.z, o = this.coefficients;
        return t.copy(o[0]).multiplyScalar(0.886227), t.addScaledVector(o[1], 2 * 0.511664 * i), t.addScaledVector(o[2], 2 * 0.511664 * r), t.addScaledVector(o[3], 2 * 0.511664 * n), t.addScaledVector(o[4], 2 * 0.429043 * n * i), t.addScaledVector(o[5], 2 * 0.429043 * i * r), t.addScaledVector(o[6], 0.743125 * r * r - 0.247708), t.addScaledVector(o[7], 2 * 0.429043 * n * r), t.addScaledVector(o[8], 0.429043 * (n * n - i * i)), t;
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
        let n = e.x, i = e.y, r = e.z;
        t[0] = 0.282095, t[1] = 0.488603 * i, t[2] = 0.488603 * r, t[3] = 0.488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * r, t[6] = 0.315392 * (3 * r * r - 1), t[7] = 1.092548 * n * r, t[8] = 0.546274 * (n * n - i * i);
    }
};
ja.prototype.isSphericalHarmonics3 = !0;
var kr = class extends Ut {
    constructor(e = new ja, t = 1){
        super(void 0, t);
        this.sh = e;
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
kr.prototype.isLightProbe = !0;
var Yh = class extends Et {
    constructor(e){
        super(e);
        this.textures = {};
    }
    load(e, t, n, i) {
        let r = this, o = new $t(r.manager);
        o.setPath(r.path), o.setRequestHeader(r.requestHeader), o.setWithCredentials(r.withCredentials), o.load(e, function(a) {
            try {
                t(r.parse(JSON.parse(a)));
            } catch (l) {
                i ? i(l) : console.error(l), r.manager.itemError(e);
            }
        }, n, i);
    }
    parse(e) {
        let t = this.textures;
        function n(r) {
            return t[r] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", r), t[r];
        }
        let i = new Ux[e.type];
        if (e.uuid !== void 0 && (i.uuid = e.uuid), e.name !== void 0 && (i.name = e.name), e.color !== void 0 && i.color !== void 0 && i.color.setHex(e.color), e.roughness !== void 0 && (i.roughness = e.roughness), e.metalness !== void 0 && (i.metalness = e.metalness), e.sheen !== void 0 && (i.sheen = e.sheen), e.sheenColor !== void 0 && (i.sheenColor = new ne().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (i.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(e.emissive), e.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(e.specular), e.specularIntensity !== void 0 && (i.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (i.shininess = e.shininess), e.clearcoat !== void 0 && (i.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = e.clearcoatRoughness), e.transmission !== void 0 && (i.transmission = e.transmission), e.thickness !== void 0 && (i.thickness = e.thickness), e.attenuationDistance !== void 0 && (i.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(e.attenuationColor), e.fog !== void 0 && (i.fog = e.fog), e.flatShading !== void 0 && (i.flatShading = e.flatShading), e.blending !== void 0 && (i.blending = e.blending), e.combine !== void 0 && (i.combine = e.combine), e.side !== void 0 && (i.side = e.side), e.shadowSide !== void 0 && (i.shadowSide = e.shadowSide), e.opacity !== void 0 && (i.opacity = e.opacity), e.transparent !== void 0 && (i.transparent = e.transparent), e.alphaTest !== void 0 && (i.alphaTest = e.alphaTest), e.depthTest !== void 0 && (i.depthTest = e.depthTest), e.depthWrite !== void 0 && (i.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (i.colorWrite = e.colorWrite), e.alphaWrite !== void 0 && (i.alphaWrite = e.alphaWrite), e.stencilWrite !== void 0 && (i.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (i.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (i.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (i.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (i.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (i.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (i.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (i.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (i.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (i.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (i.rotation = e.rotation), e.linewidth !== 1 && (i.linewidth = e.linewidth), e.dashSize !== void 0 && (i.dashSize = e.dashSize), e.gapSize !== void 0 && (i.gapSize = e.gapSize), e.scale !== void 0 && (i.scale = e.scale), e.polygonOffset !== void 0 && (i.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (i.dithering = e.dithering), e.alphaToCoverage !== void 0 && (i.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = e.premultipliedAlpha), e.visible !== void 0 && (i.visible = e.visible), e.toneMapped !== void 0 && (i.toneMapped = e.toneMapped), e.userData !== void 0 && (i.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? i.vertexColors = e.vertexColors > 0 : i.vertexColors = e.vertexColors), e.uniforms !== void 0) for(let r4 in e.uniforms){
            let o = e.uniforms[r4];
            switch(i.uniforms[r4] = {}, o.type){
                case "t":
                    i.uniforms[r4].value = n(o.value);
                    break;
                case "c":
                    i.uniforms[r4].value = new ne().setHex(o.value);
                    break;
                case "v2":
                    i.uniforms[r4].value = new Z().fromArray(o.value);
                    break;
                case "v3":
                    i.uniforms[r4].value = new w().fromArray(o.value);
                    break;
                case "v4":
                    i.uniforms[r4].value = new We().fromArray(o.value);
                    break;
                case "m3":
                    i.uniforms[r4].value = new ut().fromArray(o.value);
                    break;
                case "m4":
                    i.uniforms[r4].value = new de().fromArray(o.value);
                    break;
                default:
                    i.uniforms[r4].value = o.value;
            }
        }
        if (e.defines !== void 0 && (i.defines = e.defines), e.vertexShader !== void 0 && (i.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (i.fragmentShader = e.fragmentShader), e.extensions !== void 0) for(let r3 in e.extensions)i.extensions[r3] = e.extensions[r3];
        if (e.shading !== void 0 && (i.flatShading = e.shading === 1), e.size !== void 0 && (i.size = e.size), e.sizeAttenuation !== void 0 && (i.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (i.map = n(e.map)), e.matcap !== void 0 && (i.matcap = n(e.matcap)), e.alphaMap !== void 0 && (i.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (i.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (i.bumpScale = e.bumpScale), e.normalMap !== void 0 && (i.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (i.normalMapType = e.normalMapType), e.normalScale !== void 0) {
            let r = e.normalScale;
            Array.isArray(r) === !1 && (r = [
                r,
                r
            ]), i.normalScale = new Z().fromArray(r);
        }
        return e.displacementMap !== void 0 && (i.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (i.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (i.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (i.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (i.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (i.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (i.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (i.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (i.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (i.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (i.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (i.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (i.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (i.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (i.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (i.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (i.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (i.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (i.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new Z().fromArray(e.clearcoatNormalScale)), e.transmissionMap !== void 0 && (i.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (i.thicknessMap = n(e.thicknessMap)), e.sheenColorMap !== void 0 && (i.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(e.sheenRoughnessMap)), i;
    }
    setTextures(e) {
        return this.textures = e, this;
    }
}, Vs = class {
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
}, Ka = class extends Me {
    constructor(){
        super();
        this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
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
Ka.prototype.isInstancedBufferGeometry = !0;
var Zh = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = this, o = new $t(r.manager);
        o.setPath(r.path), o.setRequestHeader(r.requestHeader), o.setWithCredentials(r.withCredentials), o.load(e, function(a) {
            try {
                t(r.parse(JSON.parse(a)));
            } catch (l) {
                i ? i(l) : console.error(l), r.manager.itemError(e);
            }
        }, n, i);
    }
    parse(e) {
        let t = {}, n = {};
        function i(f, m) {
            if (t[m] !== void 0) return t[m];
            let _ = f.interleavedBuffers[m], g85 = r(f, _.buffer), p = Si(_.type, g85), M = new jn(p, _.stride);
            return M.uuid = _.uuid, t[m] = M, M;
        }
        function r(f, m) {
            if (n[m] !== void 0) return n[m];
            let _ = f.arrayBuffers[m], g86 = new Uint32Array(_).buffer;
            return n[m] = g86, g86;
        }
        let o = e.isInstancedBufferGeometry ? new Ka : new Me, a = e.data.index;
        if (a !== void 0) {
            let f = Si(a.type, a.array);
            o.setIndex(new ze(f, 1));
        }
        let l = e.data.attributes;
        for(let f7 in l){
            let m = l[f7], x;
            if (m.isInterleavedBufferAttribute) {
                let _ = i(e.data, m.data);
                x = new Rn(_, m.itemSize, m.offset, m.normalized);
            } else {
                let _ = Si(m.type, m.array), g87 = m.isInstancedBufferAttribute ? Yn : ze;
                x = new g87(_, m.itemSize, m.normalized);
            }
            m.name !== void 0 && (x.name = m.name), m.usage !== void 0 && x.setUsage(m.usage), m.updateRange !== void 0 && (x.updateRange.offset = m.updateRange.offset, x.updateRange.count = m.updateRange.count), o.setAttribute(f7, x);
        }
        let c = e.data.morphAttributes;
        if (c) for(let f5 in c){
            let m = c[f5], x = [];
            for(let _ = 0, g88 = m.length; _ < g88; _++){
                let p = m[_], M;
                if (p.isInterleavedBufferAttribute) {
                    let y70 = i(e.data, p.data);
                    M = new Rn(y70, p.itemSize, p.offset, p.normalized);
                } else {
                    let y71 = Si(p.type, p.array);
                    M = new ze(y71, p.itemSize, p.normalized);
                }
                p.name !== void 0 && (M.name = p.name), x.push(M);
            }
            o.morphAttributes[f5] = x;
        }
        e.data.morphTargetsRelative && (o.morphTargetsRelative = !0);
        let h = e.data.groups || e.data.drawcalls || e.data.offsets;
        if (h !== void 0) for(let f6 = 0, m4 = h.length; f6 !== m4; ++f6){
            let x = h[f6];
            o.addGroup(x.start, x.count, x.materialIndex);
        }
        let d = e.data.boundingSphere;
        if (d !== void 0) {
            let f = new w;
            d.center !== void 0 && f.fromArray(d.center), o.boundingSphere = new Dn(f, d.radius);
        }
        return e.name && (o.name = e.name), e.userData && (o.userData = e.userData), o;
    }
}, qx = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = this, o = this.path === "" ? Vs.extractUrlBase(e) : this.path;
        this.resourcePath = this.resourcePath || o;
        let a = new $t(this.manager);
        a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(l) {
            let c = null;
            try {
                c = JSON.parse(l);
            } catch (h) {
                i !== void 0 && i(h), console.error("THREE:ObjectLoader: Can't parse " + e + ".", h.message);
                return;
            }
            let u = c.metadata;
            if (u === void 0 || u.type === void 0 || u.type.toLowerCase() === "geometry") {
                console.error("THREE.ObjectLoader: Can't load " + e);
                return;
            }
            r.parse(c, t);
        }, n, i);
    }
    async loadAsync(e, t) {
        let n = this, i = this.path === "" ? Vs.extractUrlBase(e) : this.path;
        this.resourcePath = this.resourcePath || i;
        let r = new $t(this.manager);
        r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials);
        let o = await r.loadAsync(e, t), a = JSON.parse(o), l = a.metadata;
        if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry") throw new Error("THREE.ObjectLoader: Can't load " + e);
        return await n.parseAsync(a);
    }
    parse(e, t) {
        let n = this.parseAnimations(e.animations), i = this.parseShapes(e.shapes), r = this.parseGeometries(e.geometries, i), o = this.parseImages(e.images, function() {
            t !== void 0 && t(c);
        }), a = this.parseTextures(e.textures, o), l = this.parseMaterials(e.materials, a), c = this.parseObject(e.object, r, l, a, n), u = this.parseSkeletons(e.skeletons, c);
        if (this.bindSkeletons(c, u), t !== void 0) {
            let h = !1;
            for(let d in o)if (o[d] instanceof HTMLImageElement) {
                h = !0;
                break;
            }
            h === !1 && t(c);
        }
        return c;
    }
    async parseAsync(e) {
        let t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, n), r = await this.parseImagesAsync(e.images), o = this.parseTextures(e.textures, r), a = this.parseMaterials(e.materials, o), l = this.parseObject(e.object, i, a, o, t), c = this.parseSkeletons(e.skeletons, l);
        return this.bindSkeletons(l, c), l;
    }
    parseShapes(e) {
        let t = {};
        if (e !== void 0) for(let n = 0, i = e.length; n < i; n++){
            let r = new Yt().fromJSON(e[n]);
            t[r.uuid] = r;
        }
        return t;
    }
    parseSkeletons(e, t) {
        let n = {}, i = {};
        if (t.traverse(function(r) {
            r.isBone && (i[r.uuid] = r);
        }), e !== void 0) for(let r5 = 0, o = e.length; r5 < o; r5++){
            let a = new ao().fromJSON(e[r5], i);
            n[a.uuid] = a;
        }
        return n;
    }
    parseGeometries(e, t) {
        let n = {};
        if (e !== void 0) {
            let i = new Zh;
            for(let r = 0, o = e.length; r < o; r++){
                let a, l = e[r];
                switch(l.type){
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        a = i.parse(l);
                        break;
                    case "Geometry":
                        console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");
                        break;
                    default:
                        l.type in Dc ? a = Dc[l.type].fromJSON(l, t) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`);
                }
                a.uuid = l.uuid, l.name !== void 0 && (a.name = l.name), a.isBufferGeometry === !0 && l.userData !== void 0 && (a.userData = l.userData), n[l.uuid] = a;
            }
        }
        return n;
    }
    parseMaterials(e, t) {
        let n = {}, i = {};
        if (e !== void 0) {
            let r = new Yh;
            r.setTextures(t);
            for(let o = 0, a = e.length; o < a; o++){
                let l = e[o];
                if (l.type === "MultiMaterial") {
                    let c = [];
                    for(let u = 0; u < l.materials.length; u++){
                        let h = l.materials[u];
                        n[h.uuid] === void 0 && (n[h.uuid] = r.parse(h)), c.push(n[h.uuid]);
                    }
                    i[l.uuid] = c;
                } else n[l.uuid] === void 0 && (n[l.uuid] = r.parse(l)), i[l.uuid] = n[l.uuid];
            }
        }
        return i;
    }
    parseAnimations(e) {
        let t = {};
        if (e !== void 0) for(let n = 0; n < e.length; n++){
            let i = e[n], r = Pr.parse(i);
            t[r.uuid] = r;
        }
        return t;
    }
    parseImages(e, t) {
        let n = this, i = {}, r;
        function o(l) {
            return n.manager.itemStart(l), r.load(l, function() {
                n.manager.itemEnd(l);
            }, void 0, function() {
                n.manager.itemError(l), n.manager.itemEnd(l);
            });
        }
        function a(l) {
            if (typeof l == "string") {
                let c = l, u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c) ? c : n.resourcePath + c;
                return o(u);
            } else return l.data ? {
                data: Si(l.type, l.data),
                width: l.width,
                height: l.height
            } : null;
        }
        if (e !== void 0 && e.length > 0) {
            let l = new Ga(t);
            r = new Dr(l), r.setCrossOrigin(this.crossOrigin);
            for(let c = 0, u = e.length; c < u; c++){
                let h = e[c], d = h.url;
                if (Array.isArray(d)) {
                    i[h.uuid] = [];
                    for(let f = 0, m = d.length; f < m; f++){
                        let x = d[f], _ = a(x);
                        _ !== null && (_ instanceof HTMLImageElement ? i[h.uuid].push(_) : i[h.uuid].push(new Jn(_.data, _.width, _.height)));
                    }
                } else {
                    let f = a(h.url);
                    f !== null && (i[h.uuid] = f);
                }
            }
        }
        return i;
    }
    async parseImagesAsync(e) {
        let t = this, n = {}, i;
        async function r(o) {
            if (typeof o == "string") {
                let a = o, l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(a) ? a : t.resourcePath + a;
                return await i.loadAsync(l);
            } else return o.data ? {
                data: Si(o.type, o.data),
                width: o.width,
                height: o.height
            } : null;
        }
        if (e !== void 0 && e.length > 0) {
            i = new Dr(this.manager), i.setCrossOrigin(this.crossOrigin);
            for(let o = 0, a = e.length; o < a; o++){
                let l = e[o], c = l.url;
                if (Array.isArray(c)) {
                    n[l.uuid] = [];
                    for(let u = 0, h = c.length; u < h; u++){
                        let d = c[u], f = await r(d);
                        f !== null && (f instanceof HTMLImageElement ? n[l.uuid].push(f) : n[l.uuid].push(new Jn(f.data, f.width, f.height)));
                    }
                } else {
                    let u = await r(l.url);
                    u !== null && (n[l.uuid] = u);
                }
            }
        }
        return n;
    }
    parseTextures(e, t) {
        function n(r, o) {
            return typeof r == "number" ? r : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", r), o[r]);
        }
        let i = {};
        if (e !== void 0) for(let r6 = 0, o3 = e.length; r6 < o3; r6++){
            let a = e[r6];
            a.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), t[a.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", a.image);
            let l, c = t[a.image];
            Array.isArray(c) ? (l = new Vi(c), c.length === 6 && (l.needsUpdate = !0)) : (c && c.data ? l = new Jn(c.data, c.width, c.height) : l = new ct(c), c && (l.needsUpdate = !0)), l.uuid = a.uuid, a.name !== void 0 && (l.name = a.name), a.mapping !== void 0 && (l.mapping = n(a.mapping, Xx)), a.offset !== void 0 && l.offset.fromArray(a.offset), a.repeat !== void 0 && l.repeat.fromArray(a.repeat), a.center !== void 0 && l.center.fromArray(a.center), a.rotation !== void 0 && (l.rotation = a.rotation), a.wrap !== void 0 && (l.wrapS = n(a.wrap[0], zc), l.wrapT = n(a.wrap[1], zc)), a.format !== void 0 && (l.format = a.format), a.type !== void 0 && (l.type = a.type), a.encoding !== void 0 && (l.encoding = a.encoding), a.minFilter !== void 0 && (l.minFilter = n(a.minFilter, Oc)), a.magFilter !== void 0 && (l.magFilter = n(a.magFilter, Oc)), a.anisotropy !== void 0 && (l.anisotropy = a.anisotropy), a.flipY !== void 0 && (l.flipY = a.flipY), a.premultiplyAlpha !== void 0 && (l.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (l.unpackAlignment = a.unpackAlignment), a.userData !== void 0 && (l.userData = a.userData), i[a.uuid] = l;
        }
        return i;
    }
    parseObject(e, t, n, i, r) {
        let o;
        function a(d) {
            return t[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), t[d];
        }
        function l(d) {
            if (d !== void 0) {
                if (Array.isArray(d)) {
                    let f = [];
                    for(let m = 0, x = d.length; m < x; m++){
                        let _ = d[m];
                        n[_] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", _), f.push(n[_]);
                    }
                    return f;
                }
                return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d];
            }
        }
        function c(d) {
            return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d];
        }
        let u, h;
        switch(e.type){
            case "Scene":
                o = new no, e.background !== void 0 && (Number.isInteger(e.background) ? o.background = new ne(e.background) : o.background = c(e.background)), e.environment !== void 0 && (o.environment = c(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? o.fog = new Or(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (o.fog = new zr(e.fog.color, e.fog.density)));
                break;
            case "PerspectiveCamera":
                o = new ft(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (o.focus = e.focus), e.zoom !== void 0 && (o.zoom = e.zoom), e.filmGauge !== void 0 && (o.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (o.filmOffset = e.filmOffset), e.view !== void 0 && (o.view = Object.assign({}, e.view));
                break;
            case "OrthographicCamera":
                o = new Nr(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (o.zoom = e.zoom), e.view !== void 0 && (o.view = Object.assign({}, e.view));
                break;
            case "AmbientLight":
                o = new Za(e.color, e.intensity);
                break;
            case "DirectionalLight":
                o = new Ya(e.color, e.intensity);
                break;
            case "PointLight":
                o = new Xa(e.color, e.intensity, e.distance, e.decay);
                break;
            case "RectAreaLight":
                o = new $a(e.color, e.intensity, e.width, e.height);
                break;
            case "SpotLight":
                o = new Wa(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                break;
            case "HemisphereLight":
                o = new ka(e.color, e.groundColor, e.intensity);
                break;
            case "LightProbe":
                o = new kr().fromJSON(e);
                break;
            case "SkinnedMesh":
                u = a(e.geometry), h = l(e.material), o = new so(u, h), e.bindMode !== void 0 && (o.bindMode = e.bindMode), e.bindMatrix !== void 0 && o.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (o.skeleton = e.skeleton);
                break;
            case "Mesh":
                u = a(e.geometry), h = l(e.material), o = new lt(u, h);
                break;
            case "InstancedMesh":
                u = a(e.geometry), h = l(e.material);
                let d4 = e.count, f8 = e.instanceMatrix, m5 = e.instanceColor;
                o = new Ma(u, h, d4), o.instanceMatrix = new Yn(new Float32Array(f8.array), 16), m5 !== void 0 && (o.instanceColor = new Yn(new Float32Array(m5.array), m5.itemSize));
                break;
            case "LOD":
                o = new Ih;
                break;
            case "Line":
                o = new an(a(e.geometry), l(e.material));
                break;
            case "LineLoop":
                o = new wa(a(e.geometry), l(e.material));
                break;
            case "LineSegments":
                o = new Tt(a(e.geometry), l(e.material));
                break;
            case "PointCloud":
            case "Points":
                o = new Ur(a(e.geometry), l(e.material));
                break;
            case "Sprite":
                o = new ro(l(e.material));
                break;
            case "Group":
                o = new Wn;
                break;
            case "Bone":
                o = new oo;
                break;
            default:
                o = new Fe;
        }
        if (o.uuid = e.uuid, e.name !== void 0 && (o.name = e.name), e.matrix !== void 0 ? (o.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (o.matrixAutoUpdate = e.matrixAutoUpdate), o.matrixAutoUpdate && o.matrix.decompose(o.position, o.quaternion, o.scale)) : (e.position !== void 0 && o.position.fromArray(e.position), e.rotation !== void 0 && o.rotation.fromArray(e.rotation), e.quaternion !== void 0 && o.quaternion.fromArray(e.quaternion), e.scale !== void 0 && o.scale.fromArray(e.scale)), e.castShadow !== void 0 && (o.castShadow = e.castShadow), e.receiveShadow !== void 0 && (o.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (o.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (o.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (o.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && o.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (o.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (o.visible = e.visible), e.frustumCulled !== void 0 && (o.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (o.renderOrder = e.renderOrder), e.userData !== void 0 && (o.userData = e.userData), e.layers !== void 0 && (o.layers.mask = e.layers), e.children !== void 0) {
            let d = e.children;
            for(let f = 0; f < d.length; f++)o.add(this.parseObject(d[f], t, n, i, r));
        }
        if (e.animations !== void 0) {
            let d = e.animations;
            for(let f = 0; f < d.length; f++){
                let m = d[f];
                o.animations.push(r[m]);
            }
        }
        if (e.type === "LOD") {
            e.autoUpdate !== void 0 && (o.autoUpdate = e.autoUpdate);
            let d = e.levels;
            for(let f = 0; f < d.length; f++){
                let m = d[f], x = o.getObjectByProperty("uuid", m.object);
                x !== void 0 && o.addLevel(x, m.distance);
            }
        }
        return o;
    }
    bindSkeletons(e, t) {
        Object.keys(t).length !== 0 && e.traverse(function(n) {
            if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) {
                let i = t[n.skeleton];
                i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
            }
        });
    }
    setTexturePath(e) {
        return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e);
    }
}, Xx = {
    UVMapping: ma,
    CubeReflectionMapping: Ui,
    CubeRefractionMapping: Hi,
    EquirectangularReflectionMapping: Bs,
    EquirectangularRefractionMapping: Ns,
    CubeUVReflectionMapping: Ir,
    CubeUVRefractionMapping: qs
}, zc = {
    RepeatWrapping: zs,
    ClampToEdgeWrapping: Mt,
    MirroredRepeatWrapping: Os
}, Oc = {
    NearestFilter: at,
    NearestMipmapNearestFilter: ra,
    NearestMipmapLinearFilter: sa,
    LinearFilter: nt,
    LinearMipmapNearestFilter: ih,
    LinearMipmapLinearFilter: Gi
}, $h = class extends Et {
    constructor(e){
        super(e);
        typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
            premultiplyAlpha: "none"
        };
    }
    setOptions(e) {
        return this.options = e, this;
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        let r = this, o = Oi.get(e);
        if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() {
            t && t(o), r.manager.itemEnd(e);
        }, 0), o;
        let a = {};
        a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) {
            return l.blob();
        }).then(function(l) {
            return createImageBitmap(l, Object.assign(r.options, {
                colorSpaceConversion: "none"
            }));
        }).then(function(l) {
            Oi.add(e, l), t && t(l), r.manager.itemEnd(e);
        }).catch(function(l) {
            i && i(l), r.manager.itemError(e), r.manager.itemEnd(e);
        }), r.manager.itemStart(e);
    }
};
$h.prototype.isImageBitmapLoader = !0;
var Ts, jh = {
    getContext: function() {
        return Ts === void 0 && (Ts = new (window.AudioContext || window.webkitAudioContext)), Ts;
    },
    setContext: function(s211) {
        Ts = s211;
    }
}, Kh = class extends Et {
    constructor(e){
        super(e);
    }
    load(e, t, n, i) {
        let r = this, o = new $t(this.manager);
        o.setResponseType("arraybuffer"), o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
            try {
                let l = a.slice(0);
                jh.getContext().decodeAudioData(l, function(u) {
                    t(u);
                });
            } catch (l) {
                i ? i(l) : console.error(l), r.manager.itemError(e);
            }
        }, n, i);
    }
}, Qh = class extends kr {
    constructor(e, t, n = 1){
        super(void 0, n);
        let i = new ne().set(e), r = new ne().set(t), o = new w(i.r, i.g, i.b), a = new w(r.r, r.g, r.b), l = Math.sqrt(Math.PI), c = l * Math.sqrt(0.75);
        this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c);
    }
};
Qh.prototype.isHemisphereLightProbe = !0;
var eu = class extends kr {
    constructor(e, t = 1){
        super(void 0, t);
        let n = new ne().set(e);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
    }
};
eu.prototype.isAmbientLightProbe = !0;
var Uc = new de, Hc = new de, On = new de, Jx = class {
    constructor(){
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new ft, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ft, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
            focus: null,
            fov: null,
            aspect: null,
            near: null,
            far: null,
            zoom: null,
            eyeSep: null
        };
    }
    update(e) {
        let t = this._cache;
        if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
            t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, On.copy(e.projectionMatrix);
            let i = t.eyeSep / 2, r = i * t.near / t.focus, o = t.near * Math.tan(Xn * t.fov * 0.5) / t.zoom, a, l;
            Hc.elements[12] = -i, Uc.elements[12] = i, a = -o * t.aspect + r, l = o * t.aspect + r, On.elements[0] = 2 * t.near / (l - a), On.elements[8] = (l + a) / (l - a), this.cameraL.projectionMatrix.copy(On), a = -o * t.aspect - r, l = o * t.aspect - r, On.elements[0] = 2 * t.near / (l - a), On.elements[8] = (l + a) / (l - a), this.cameraR.projectionMatrix.copy(On);
        }
        this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Hc), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Uc);
    }
}, tu = class {
    constructor(e = !0){
        this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
    }
    start() {
        this.startTime = Gc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
            let t = Gc();
            e = (t - this.oldTime) / 1000, this.oldTime = t, this.elapsedTime += e;
        }
        return e;
    }
};
function Gc() {
    return (typeof performance > "u" ? Date : performance).now();
}
var Un = new w, kc = new yt, Yx = new w, Hn = new w, Zx = class extends Fe {
    constructor(){
        super();
        this.type = "AudioListener", this.context = jh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new tu;
    }
    getInput() {
        return this.gain;
    }
    removeFilter() {
        return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
    }
    getFilter() {
        return this.filter;
    }
    setFilter(e) {
        return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
    }
    getMasterVolume() {
        return this.gain.gain.value;
    }
    setMasterVolume(e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e);
        let t = this.context.listener, n = this.up;
        if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Un, kc, Yx), Hn.set(0, 0, -1).applyQuaternion(kc), t.positionX) {
            let i = this.context.currentTime + this.timeDelta;
            t.positionX.linearRampToValueAtTime(Un.x, i), t.positionY.linearRampToValueAtTime(Un.y, i), t.positionZ.linearRampToValueAtTime(Un.z, i), t.forwardX.linearRampToValueAtTime(Hn.x, i), t.forwardY.linearRampToValueAtTime(Hn.y, i), t.forwardZ.linearRampToValueAtTime(Hn.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
        } else t.setPosition(Un.x, Un.y, Un.z), t.setOrientation(Hn.x, Hn.y, Hn.z, n.x, n.y, n.z);
    }
}, Qa = class extends Fe {
    constructor(e){
        super();
        this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
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
        if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
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
        return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
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
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
    }
}, Gn = new w, Vc = new yt, $x = new w, kn = new w, jx = class extends Qa {
    constructor(e){
        super(e);
        this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
    }
    getOutput() {
        return this.panner;
    }
    getRefDistance() {
        return this.panner.refDistance;
    }
    setRefDistance(e) {
        return this.panner.refDistance = e, this;
    }
    getRolloffFactor() {
        return this.panner.rolloffFactor;
    }
    setRolloffFactor(e) {
        return this.panner.rolloffFactor = e, this;
    }
    getDistanceModel() {
        return this.panner.distanceModel;
    }
    setDistanceModel(e) {
        return this.panner.distanceModel = e, this;
    }
    getMaxDistance() {
        return this.panner.maxDistance;
    }
    setMaxDistance(e) {
        return this.panner.maxDistance = e, this;
    }
    setDirectionalCone(e, t, n) {
        return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
    }
    updateMatrixWorld(e) {
        if (super.updateMatrixWorld(e), this.hasPlaybackControl === !0 && this.isPlaying === !1) return;
        this.matrixWorld.decompose(Gn, Vc, $x), kn.set(0, 0, 1).applyQuaternion(Vc);
        let t = this.panner;
        if (t.positionX) {
            let n = this.context.currentTime + this.listener.timeDelta;
            t.positionX.linearRampToValueAtTime(Gn.x, n), t.positionY.linearRampToValueAtTime(Gn.y, n), t.positionZ.linearRampToValueAtTime(Gn.z, n), t.orientationX.linearRampToValueAtTime(kn.x, n), t.orientationY.linearRampToValueAtTime(kn.y, n), t.orientationZ.linearRampToValueAtTime(kn.z, n);
        } else t.setPosition(Gn.x, Gn.y, Gn.z), t.setOrientation(kn.x, kn.y, kn.z);
    }
}, nu = class {
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
}, iu = class {
    constructor(e, t, n){
        this.binding = e, this.valueSize = n;
        let i, r, o;
        switch(t){
            case "quaternion":
                i = this._slerp, r = this._slerpAdditive, o = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
                break;
            case "string":
            case "bool":
                i = this._select, r = this._select, o = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
                break;
            default:
                i = this._lerp, r = this._lerpAdditive, o = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
        }
        this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = o, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
    }
    accumulate(e, t) {
        let n = this.buffer, i = this.valueSize, r = e * i + i, o = this.cumulativeWeight;
        if (o === 0) {
            for(let a = 0; a !== i; ++a)n[r + a] = n[a];
            o = t;
        } else {
            o += t;
            let a = t / o;
            this._mixBufferRegion(n, r, 0, a, i);
        }
        this.cumulativeWeight = o;
    }
    accumulateAdditive(e) {
        let t = this.buffer, n = this.valueSize, i = n * this._addIndex;
        this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
    }
    apply(e) {
        let t = this.valueSize, n = this.buffer, i = e * t + t, r = this.cumulativeWeight, o = this.cumulativeWeightAdditive, a = this.binding;
        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
            let l = t * this._origIndex;
            this._mixBufferRegion(n, i, l, 1 - r, t);
        }
        o > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
        for(let l = t, c = t + t; l !== c; ++l)if (n[l] !== n[l + t]) {
            a.setValue(n, i);
            break;
        }
    }
    saveOriginalState() {
        let e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
        e.getValue(t, i);
        for(let r = n, o = i; r !== o; ++r)t[r] = t[i + r % n];
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
    _select(e, t, n, i, r) {
        if (i >= 0.5) for(let o = 0; o !== r; ++o)e[t + o] = e[n + o];
    }
    _slerp(e, t, n, i) {
        yt.slerpFlat(e, t, e, t, e, n, i);
    }
    _slerpAdditive(e, t, n, i, r) {
        let o = this._workIndex * r;
        yt.multiplyQuaternionsFlat(e, o, e, t, e, n), yt.slerpFlat(e, t, e, t, e, o, i);
    }
    _lerp(e, t, n, i, r) {
        let o = 1 - i;
        for(let a = 0; a !== r; ++a){
            let l = t + a;
            e[l] = e[l] * o + e[n + a] * i;
        }
    }
    _lerpAdditive(e, t, n, i, r) {
        for(let o = 0; o !== r; ++o){
            let a = t + o;
            e[a] = e[a] + e[n + o] * i;
        }
    }
}, el = "\\[\\]\\.:\\/", Kx = new RegExp("[" + el + "]", "g"), tl = "[^" + el + "]", Qx = "[^" + el.replace("\\.", "") + "]", ey = /((?:WC+[\/:])*)/.source.replace("WC", tl), ty = /(WCOD+)?/.source.replace("WCOD", Qx), ny = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", tl), iy = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", tl), ry = new RegExp("^" + ey + ty + ny + iy + "$"), sy = [
    "material",
    "materials",
    "bones"
], ru = class {
    constructor(e, t, n){
        let i = n || Ue.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, i);
    }
    getValue(e, t) {
        this.bind();
        let n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
        i !== void 0 && i.getValue(e, t);
    }
    setValue(e, t) {
        let n = this._bindings;
        for(let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(e, t);
    }
    bind() {
        let e = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind();
    }
    unbind() {
        let e = this._bindings;
        for(let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind();
    }
}, Ue = class {
    constructor(e, t, n){
        this.path = t, this.parsedPath = n || Ue.parseTrackName(t), this.node = Ue.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Ue.Composite(e, t, n) : new Ue(e, t, n);
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(Kx, "");
    }
    static parseTrackName(e) {
        let t = ry.exec(e);
        if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        let n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }, i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (i !== void 0 && i !== -1) {
            let r = n.nodeName.substring(i + 1);
            sy.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
            let n = function(r) {
                for(let o = 0; o < r.length; o++){
                    let a = r[o];
                    if (a.name === t || a.uuid === t) return a;
                    let l = n(a.children);
                    if (l) return l;
                }
                return null;
            }, i = n(e.children);
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
        for(let i = 0, r = n.length; i !== r; ++i)e[t++] = n[i];
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
        for(let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++];
    }
    _setValue_array_setNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for(let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++];
        this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for(let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++];
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
        let e = this.node, t = this.parsedPath, n = t.objectName, i = t.propertyName, r = t.propertyIndex;
        if (e || (e = Ue.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
            let c = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
            return;
        }
        let a = this.Versioning.None;
        this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
        let l = this.BindingType.Direct;
        if (r !== void 0) {
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
                    e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
                } else {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    return;
                }
            }
            l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
        } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
    }
    unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
};
Ue.Composite = ru;
Ue.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
Ue.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
Ue.prototype.GetterByBindingType = [
    Ue.prototype._getValue_direct,
    Ue.prototype._getValue_array,
    Ue.prototype._getValue_arrayElement,
    Ue.prototype._getValue_toArray
];
Ue.prototype.SetterByBindingTypeAndVersioning = [
    [
        Ue.prototype._setValue_direct,
        Ue.prototype._setValue_direct_setNeedsUpdate,
        Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate
    ],
    [
        Ue.prototype._setValue_array,
        Ue.prototype._setValue_array_setNeedsUpdate,
        Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate
    ],
    [
        Ue.prototype._setValue_arrayElement,
        Ue.prototype._setValue_arrayElement_setNeedsUpdate,
        Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
    ],
    [
        Ue.prototype._setValue_fromArray,
        Ue.prototype._setValue_fromArray_setNeedsUpdate,
        Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
    ]
];
var su = class {
    constructor(){
        this.uuid = Lt(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
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
        let e = this._objects, t = this._indicesByUUID, n = this._paths, i = this._parsedPaths, r = this._bindings, o = r.length, a, l = e.length, c = this.nCachedObjects_;
        for(let u = 0, h = arguments.length; u !== h; ++u){
            let d = arguments[u], f = d.uuid, m = t[f];
            if (m === void 0) {
                m = l++, t[f] = m, e.push(d);
                for(let x = 0, _ = o; x !== _; ++x)r[x].push(new Ue(d, n[x], i[x]));
            } else if (m < c) {
                a = e[m];
                let x = --c, _ = e[x];
                t[_.uuid] = m, e[m] = _, t[f] = x, e[x] = d;
                for(let g89 = 0, p = o; g89 !== p; ++g89){
                    let M = r[g89], y72 = M[x], b67 = M[m];
                    M[m] = y72, b67 === void 0 && (b67 = new Ue(d, n[g89], i[g89])), M[x] = b67;
                }
            } else e[m] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
        }
        this.nCachedObjects_ = c;
    }
    remove() {
        let e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length, r = this.nCachedObjects_;
        for(let o = 0, a = arguments.length; o !== a; ++o){
            let l = arguments[o], c = l.uuid, u = t[c];
            if (u !== void 0 && u >= r) {
                let h = r++, d = e[h];
                t[d.uuid] = u, e[u] = d, t[c] = h, e[h] = l;
                for(let f = 0, m = i; f !== m; ++f){
                    let x = n[f], _ = x[h], g90 = x[u];
                    x[u] = _, x[h] = g90;
                }
            }
        }
        this.nCachedObjects_ = r;
    }
    uncache() {
        let e = this._objects, t = this._indicesByUUID, n = this._bindings, i = n.length, r = this.nCachedObjects_, o = e.length;
        for(let a = 0, l = arguments.length; a !== l; ++a){
            let c = arguments[a], u = c.uuid, h = t[u];
            if (h !== void 0) if (delete t[u], h < r) {
                let d = --r, f = e[d], m = --o, x = e[m];
                t[f.uuid] = h, e[h] = f, t[x.uuid] = d, e[d] = x, e.pop();
                for(let _ = 0, g91 = i; _ !== g91; ++_){
                    let p = n[_], M = p[d], y73 = p[m];
                    p[h] = M, p[d] = y73, p.pop();
                }
            } else {
                let d = --o, f = e[d];
                d > 0 && (t[f.uuid] = h), e[h] = f, e.pop();
                for(let m = 0, x = i; m !== x; ++m){
                    let _ = n[m];
                    _[h] = _[d], _.pop();
                }
            }
        }
        this.nCachedObjects_ = r;
    }
    subscribe_(e, t) {
        let n = this._bindingsIndicesByPath, i = n[e], r = this._bindings;
        if (i !== void 0) return r[i];
        let o = this._paths, a = this._parsedPaths, l = this._objects, c = l.length, u = this.nCachedObjects_, h = new Array(c);
        i = r.length, n[e] = i, o.push(e), a.push(t), r.push(h);
        for(let d = u, f = l.length; d !== f; ++d){
            let m = l[d];
            h[d] = new Ue(m, e, t);
        }
        return h;
    }
    unsubscribe_(e) {
        let t = this._bindingsIndicesByPath, n = t[e];
        if (n !== void 0) {
            let i = this._paths, r = this._parsedPaths, o = this._bindings, a = o.length - 1, l = o[a], c = e[a];
            t[c] = n, o[n] = l, o.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop();
        }
    }
};
su.prototype.isAnimationObjectGroup = !0;
var ou = class {
    constructor(e, t, n = null, i = t.blendMode){
        this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
        let r = t.tracks, o = r.length, a = new Array(o), l = {
            endingStart: wi,
            endingEnd: wi
        };
        for(let c = 0; c !== o; ++c){
            let u = r[c].createInterpolant(null);
            a[c] = u, u.settings = l;
        }
        this._interpolantSettings = l, this._interpolants = a, this._propertyBindings = new Array(o), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = ud, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
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
            let i = this._clip.duration, r = e._clip.duration, o = r / i, a = i / r;
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
        let i = this._mixer, r = i.time, o = this.timeScale, a = this._timeScaleInterpolant;
        a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
        let l = a.parameterPositions, c = a.sampleValues;
        return l[0] = r, l[1] = r + n, c[0] = e / o, c[1] = t / o, this;
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
        let r = this._startTime;
        if (r !== null) {
            let l = (e - r) * n;
            if (l < 0 || n === 0) return;
            this._startTime = null, t = n * l;
        }
        t *= this._updateTimeScale(e);
        let o = this._updateTime(t), a = this._updateWeight(e);
        if (a > 0) {
            let l = this._interpolants, c = this._propertyBindings;
            switch(this.blendMode){
                case rh:
                    for(let u = 0, h = l.length; u !== h; ++u)l[u].evaluate(o), c[u].accumulateAdditive(a);
                    break;
                case ga:
                default:
                    for(let u3 = 0, h4 = l.length; u3 !== h4; ++u3)l[u3].evaluate(o), c[u3].accumulate(i, a);
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
        let t = this._clip.duration, n = this.loop, i = this.time + e, r = this._loopCount, o = n === dd;
        if (e === 0) return r === -1 ? i : o && (r & 1) === 1 ? t - i : i;
        if (n === hd) {
            r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
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
            if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, o)) : this._setEndings(this.repetitions === 0, !0, o)), i >= t || i < 0) {
                let a = Math.floor(i / t);
                i -= t * a, r += Math.abs(a);
                let l = this.repetitions - r;
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
                    this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: a
                    });
                }
            } else this.time = i;
            if (o && (r & 1) === 1) return t - i;
        }
        return i;
    }
    _setEndings(e, t, n) {
        let i = this._interpolantSettings;
        n ? (i.endingStart = bi, i.endingEnd = bi) : (e ? i.endingStart = this.zeroSlopeAtStart ? bi : wi : i.endingStart = Gs, t ? i.endingEnd = this.zeroSlopeAtEnd ? bi : wi : i.endingEnd = Gs);
    }
    _scheduleFading(e, t, n) {
        let i = this._mixer, r = i.time, o = this._weightInterpolant;
        o === null && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
        let a = o.parameterPositions, l = o.sampleValues;
        return a[0] = r, l[0] = t, a[1] = r + e, l[1] = n, this;
    }
}, au = class extends Ln {
    constructor(e){
        super();
        this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
    }
    _bindAction(e, t) {
        let n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, o = e._propertyBindings, a = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName, u = c[l];
        u === void 0 && (u = {}, c[l] = u);
        for(let h = 0; h !== r; ++h){
            let d = i[h], f = d.name, m = u[f];
            if (m !== void 0) ++m.referenceCount, o[h] = m;
            else {
                if (m = o[h], m !== void 0) {
                    m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, l, f));
                    continue;
                }
                let x = t && t._propertyBindings[h].binding.parsedPath;
                m = new iu(Ue.create(n, f, x), d.ValueTypeName, d.getValueSize()), ++m.referenceCount, this._addInactiveBinding(m, l, f), o[h] = m;
            }
            a[h].resultBuffer = m.buffer;
        }
    }
    _activateAction(e) {
        if (!this._isActiveAction(e)) {
            if (e._cacheIndex === null) {
                let n = (e._localRoot || this._root).uuid, i = e._clip.uuid, r = this._actionsByClip[i];
                this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, i, n);
            }
            let t = e._propertyBindings;
            for(let n = 0, i = t.length; n !== i; ++n){
                let r = t[n];
                (r.useCount++) === 0 && (this._lendBinding(r), r.saveOriginalState());
            }
            this._lendAction(e);
        }
    }
    _deactivateAction(e) {
        if (this._isActiveAction(e)) {
            let t = e._propertyBindings;
            for(let n = 0, i = t.length; n !== i; ++n){
                let r = t[n];
                --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
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
        let i = this._actions, r = this._actionsByClip, o = r[t];
        if (o === void 0) o = {
            knownActions: [
                e
            ],
            actionByRoot: {}
        }, e._byClipCacheIndex = 0, r[t] = o;
        else {
            let a = o.knownActions;
            e._byClipCacheIndex = a.length, a.push(e);
        }
        e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e;
    }
    _removeInactiveAction(e) {
        let t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
        n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
        let r = e._clip.uuid, o = this._actionsByClip, a = o[r], l = a.knownActions, c = l[l.length - 1], u = e._byClipCacheIndex;
        c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
        let h = a.actionByRoot, d = (e._localRoot || this._root).uuid;
        delete h[d], l.length === 0 && delete o[r], this._removeInactiveBindingsForAction(e);
    }
    _removeInactiveBindingsForAction(e) {
        let t = e._propertyBindings;
        for(let n = 0, i = t.length; n !== i; ++n){
            let r = t[n];
            --r.referenceCount === 0 && this._removeInactiveBinding(r);
        }
    }
    _lendAction(e) {
        let t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _takeBackAction(e) {
        let t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _addInactiveBinding(e, t, n) {
        let i = this._bindingsByRootAndName, r = this._bindings, o = i[t];
        o === void 0 && (o = {}, i[t] = o), o[n] = e, e._cacheIndex = r.length, r.push(e);
    }
    _removeInactiveBinding(e) {
        let t = this._bindings, n = e.binding, i = n.rootNode.uuid, r = n.path, o = this._bindingsByRootAndName, a = o[i], l = t[t.length - 1], c = e._cacheIndex;
        l._cacheIndex = c, t[c] = l, t.pop(), delete a[r], Object.keys(a).length === 0 && delete o[i];
    }
    _lendBinding(e) {
        let t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _takeBackBinding(e) {
        let t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, r = t[i];
        e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
    }
    _lendControlInterpolant() {
        let e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t];
        return n === void 0 && (n = new Ua(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n;
    }
    _takeBackControlInterpolant(e) {
        let t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, r = t[i];
        e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r;
    }
    clipAction(e, t, n) {
        let i = t || this._root, r = i.uuid, o = typeof e == "string" ? Pr.findByName(i, e) : e, a = o !== null ? o.uuid : e, l = this._actionsByClip[a], c = null;
        if (n === void 0 && (o !== null ? n = o.blendMode : n = ga), l !== void 0) {
            let h = l.actionByRoot[r];
            if (h !== void 0 && h.blendMode === n) return h;
            c = l.knownActions[0], o === null && (o = c._clip);
        }
        if (o === null) return null;
        let u = new ou(this, o, t, n);
        return this._bindAction(u, c), this._addInactiveAction(u, a, r), u;
    }
    existingAction(e, t) {
        let n = t || this._root, i = n.uuid, r = typeof e == "string" ? Pr.findByName(n, e) : e, o = r ? r.uuid : e, a = this._actionsByClip[o];
        return a !== void 0 && a.actionByRoot[i] || null;
    }
    stopAllAction() {
        let e = this._actions, t = this._nActiveActions;
        for(let n = t - 1; n >= 0; --n)e[n].stop();
        return this;
    }
    update(e) {
        e *= this.timeScale;
        let t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1;
        for(let c = 0; c !== n; ++c)t[c]._update(i, e, r, o);
        let a = this._bindings, l = this._nActiveBindings;
        for(let c5 = 0; c5 !== l; ++c5)a[c5].apply(o);
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
        let t = this._actions, n = e.uuid, i = this._actionsByClip, r = i[n];
        if (r !== void 0) {
            let o = r.knownActions;
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
        let i = this._bindingsByRootAndName, r = i[t];
        if (r !== void 0) for(let o4 in r){
            let a = r[o4];
            a.restoreOriginalState(), this._removeInactiveBinding(a);
        }
    }
    uncacheAction(e, t) {
        let n = this.existingAction(e, t);
        n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
    }
};
au.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
var go = class {
    constructor(e){
        typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e;
    }
    clone() {
        return new go(this.value.clone === void 0 ? this.value : this.value.clone());
    }
}, lu = class extends jn {
    constructor(e, t, n = 1){
        super(e, t);
        this.meshPerAttribute = n;
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
lu.prototype.isInstancedInterleavedBuffer = !0;
var cu = class {
    constructor(e, t, n, i, r){
        this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
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
cu.prototype.isGLBufferAttribute = !0;
var oy = class {
    constructor(e, t, n = 0, i = 1 / 0){
        this.ray = new In(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Js, this.params = {
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
        t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
    }
    intersectObject(e, t = !0, n = []) {
        return fa(e, this, n, t), n.sort(Wc), n;
    }
    intersectObjects(e, t = !0, n = []) {
        for(let i = 0, r = e.length; i < r; i++)fa(e[i], this, n, t);
        return n.sort(Wc), n;
    }
};
function Wc(s212, e) {
    return s212.distance - e.distance;
}
function fa(s213, e, t, n) {
    if (s213.layers.test(e.layers) && s213.raycast(e, t), n === !0) {
        let i = s213.children;
        for(let r = 0, o = i.length; r < o; r++)fa(i[r], e, t, !0);
    }
}
var ay = class {
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
        return this.phi = Math.max(0.000001, Math.min(Math.PI - 0.000001, this.phi)), this;
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(xt(t / this.radius, -1, 1))), this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}, ly = class {
    constructor(e = 1, t = 0, n = 0){
        return this.radius = e, this.theta = t, this.y = n, this;
    }
    set(e, t, n) {
        return this.radius = e, this.theta = t, this.y = n, this;
    }
    copy(e) {
        return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z);
    }
    setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
    }
    clone() {
        return new this.constructor().copy(this);
    }
}, qc = new Z, Ji = class {
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
        let n = qc.copy(t).multiplyScalar(0.5);
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
        return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
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
        return qc.copy(e).clamp(this.min, this.max).sub(e).length();
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
Ji.prototype.isBox2 = !0;
var Xc = new w, As = new w, hu = class {
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
        return e.addVectors(this.start, this.end).multiplyScalar(0.5);
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
        Xc.subVectors(e, this.start), As.subVectors(this.end, this.start);
        let n = As.dot(As), r = As.dot(Xc) / n;
        return t && (r = xt(r, 0, 1)), r;
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
}, Jc = new w, cy = class extends Fe {
    constructor(e, t){
        super();
        this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
        let n = new Me, i = [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            -1,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            -1,
            1
        ];
        for(let o = 0, a = 1, l = 32; o < l; o++, a++){
            let c = o / l * Math.PI * 2, u = a / l * Math.PI * 2;
            i.push(Math.cos(c), Math.sin(c), 1, Math.cos(u), Math.sin(u), 1);
        }
        n.setAttribute("position", new he(i, 3));
        let r = new mt({
            fog: !1,
            toneMapped: !1
        });
        this.cone = new Tt(n, r), this.add(this.cone), this.update();
    }
    dispose() {
        this.cone.geometry.dispose(), this.cone.material.dispose();
    }
    update() {
        this.light.updateMatrixWorld();
        let e = this.light.distance ? this.light.distance : 1000, t = e * Math.tan(this.light.angle);
        this.cone.scale.set(t, t, e), Jc.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Jc), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
    }
}, _n = new w, Rs = new de, ta = new de, uu = class extends Tt {
    constructor(e){
        let t = du(e), n = new Me, i = [], r = [], o = new ne(0, 0, 1), a = new ne(0, 1, 0);
        for(let c = 0; c < t.length; c++){
            let u = t[c];
            u.parent && u.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(a.r, a.g, a.b));
        }
        n.setAttribute("position", new he(i, 3)), n.setAttribute("color", new he(r, 3));
        let l = new mt({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        });
        super(n, l);
        this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
    }
    updateMatrixWorld(e) {
        let t = this.bones, n = this.geometry, i = n.getAttribute("position");
        ta.copy(this.root.matrixWorld).invert();
        for(let r = 0, o = 0; r < t.length; r++){
            let a = t[r];
            a.parent && a.parent.isBone && (Rs.multiplyMatrices(ta, a.matrixWorld), _n.setFromMatrixPosition(Rs), i.setXYZ(o, _n.x, _n.y, _n.z), Rs.multiplyMatrices(ta, a.parent.matrixWorld), _n.setFromMatrixPosition(Rs), i.setXYZ(o + 1, _n.x, _n.y, _n.z), o += 2);
        }
        n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
    }
};
function du(s214) {
    let e = [];
    s214 && s214.isBone && e.push(s214);
    for(let t = 0; t < s214.children.length; t++)e.push.apply(e, du(s214.children[t]));
    return e;
}
var hy = class extends lt {
    constructor(e, t, n){
        let i = new zi(t, 4, 2), r = new un({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        });
        super(i, r);
        this.light = e, this.light.updateMatrixWorld(), this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose();
    }
    update() {
        this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
    }
}, uy = new w, Yc = new ne, Zc = new ne, dy = class extends Fe {
    constructor(e, t, n){
        super();
        this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
        let i = new Bi(t);
        i.rotateY(Math.PI * 0.5), this.material = new un({
            wireframe: !0,
            fog: !1,
            toneMapped: !1
        }), this.color === void 0 && (this.material.vertexColors = !0);
        let r = i.getAttribute("position"), o = new Float32Array(r.count * 3);
        i.setAttribute("color", new ze(o, 3)), this.add(new lt(i, this.material)), this.update();
    }
    dispose() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose();
    }
    update() {
        let e = this.children[0];
        if (this.color !== void 0) this.material.color.set(this.color);
        else {
            let t = e.geometry.getAttribute("color");
            Yc.copy(this.light.color), Zc.copy(this.light.groundColor);
            for(let n = 0, i = t.count; n < i; n++){
                let r = n < i / 2 ? Yc : Zc;
                t.setXYZ(n, r.r, r.g, r.b);
            }
            t.needsUpdate = !0;
        }
        e.lookAt(uy.setFromMatrixPosition(this.light.matrixWorld).negate());
    }
}, fu = class extends Tt {
    constructor(e = 10, t = 10, n = 4473924, i = 8947848){
        n = new ne(n), i = new ne(i);
        let r = t / 2, o = e / t, a = e / 2, l = [], c = [];
        for(let d = 0, f = 0, m = -a; d <= t; d++, m += o){
            l.push(-a, 0, m, a, 0, m), l.push(m, 0, -a, m, 0, a);
            let x = d === r ? n : i;
            x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3;
        }
        let u = new Me;
        u.setAttribute("position", new he(l, 3)), u.setAttribute("color", new he(c, 3));
        let h = new mt({
            vertexColors: !0,
            toneMapped: !1
        });
        super(u, h);
        this.type = "GridHelper";
    }
}, fy = class extends Tt {
    constructor(e = 10, t = 16, n = 8, i = 64, r = 4473924, o = 8947848){
        r = new ne(r), o = new ne(o);
        let a = [], l = [];
        for(let h = 0; h <= t; h++){
            let d = h / t * (Math.PI * 2), f = Math.sin(d) * e, m = Math.cos(d) * e;
            a.push(0, 0, 0), a.push(f, 0, m);
            let x = h & 1 ? r : o;
            l.push(x.r, x.g, x.b), l.push(x.r, x.g, x.b);
        }
        for(let h5 = 0; h5 <= n; h5++){
            let d = h5 & 1 ? r : o, f = e - e / n * h5;
            for(let m = 0; m < i; m++){
                let x = m / i * (Math.PI * 2), _ = Math.sin(x) * f, g92 = Math.cos(x) * f;
                a.push(_, 0, g92), l.push(d.r, d.g, d.b), x = (m + 1) / i * (Math.PI * 2), _ = Math.sin(x) * f, g92 = Math.cos(x) * f, a.push(_, 0, g92), l.push(d.r, d.g, d.b);
            }
        }
        let c = new Me;
        c.setAttribute("position", new he(a, 3)), c.setAttribute("color", new he(l, 3));
        let u = new mt({
            vertexColors: !0,
            toneMapped: !1
        });
        super(c, u);
        this.type = "PolarGridHelper";
    }
}, $c = new w, Cs = new w, jc = new w, py = class extends Fe {
    constructor(e, t, n){
        super();
        this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, t === void 0 && (t = 1);
        let i = new Me;
        i.setAttribute("position", new he([
            -t,
            t,
            0,
            t,
            t,
            0,
            t,
            -t,
            0,
            -t,
            -t,
            0,
            -t,
            t,
            0
        ], 3));
        let r = new mt({
            fog: !1,
            toneMapped: !1
        });
        this.lightPlane = new an(i, r), this.add(this.lightPlane), i = new Me, i.setAttribute("position", new he([
            0,
            0,
            0,
            0,
            0,
            1
        ], 3)), this.targetLine = new an(i, r), this.add(this.targetLine), this.update();
    }
    dispose() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
    }
    update() {
        $c.setFromMatrixPosition(this.light.matrixWorld), Cs.setFromMatrixPosition(this.light.target.matrixWorld), jc.subVectors(Cs, $c), this.lightPlane.lookAt(Cs), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Cs), this.targetLine.scale.z = jc.length();
    }
}, Ls = new w, tt = new Fr, my = class extends Tt {
    constructor(e){
        let t = new Me, n = new mt({
            color: 16777215,
            vertexColors: !0,
            toneMapped: !1
        }), i = [], r = [], o = {}, a = new ne(16755200), l = new ne(16711680), c = new ne(43775), u = new ne(16777215), h = new ne(3355443);
        d("n1", "n2", a), d("n2", "n4", a), d("n4", "n3", a), d("n3", "n1", a), d("f1", "f2", a), d("f2", "f4", a), d("f4", "f3", a), d("f3", "f1", a), d("n1", "f1", a), d("n2", "f2", a), d("n3", "f3", a), d("n4", "f4", a), d("p", "n1", l), d("p", "n2", l), d("p", "n3", l), d("p", "n4", l), d("u1", "u2", c), d("u2", "u3", c), d("u3", "u1", c), d("c", "t", u), d("p", "c", h), d("cn1", "cn2", h), d("cn3", "cn4", h), d("cf1", "cf2", h), d("cf3", "cf4", h);
        function d(m, x, _) {
            f(m, _), f(x, _);
        }
        function f(m, x) {
            i.push(0, 0, 0), r.push(x.r, x.g, x.b), o[m] === void 0 && (o[m] = []), o[m].push(i.length / 3 - 1);
        }
        t.setAttribute("position", new he(i, 3)), t.setAttribute("color", new he(r, 3));
        super(t, n);
        this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update();
    }
    update() {
        let e = this.geometry, t = this.pointMap, n = 1, i = 1;
        tt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), rt("c", t, e, tt, 0, 0, -1), rt("t", t, e, tt, 0, 0, 1), rt("n1", t, e, tt, -n, -i, -1), rt("n2", t, e, tt, n, -i, -1), rt("n3", t, e, tt, -n, i, -1), rt("n4", t, e, tt, n, i, -1), rt("f1", t, e, tt, -n, -i, 1), rt("f2", t, e, tt, n, -i, 1), rt("f3", t, e, tt, -n, i, 1), rt("f4", t, e, tt, n, i, 1), rt("u1", t, e, tt, n * 0.7, i * 1.1, -1), rt("u2", t, e, tt, -n * 0.7, i * 1.1, -1), rt("u3", t, e, tt, 0, i * 2, -1), rt("cf1", t, e, tt, -n, 0, 1), rt("cf2", t, e, tt, n, 0, 1), rt("cf3", t, e, tt, 0, -i, 1), rt("cf4", t, e, tt, 0, i, 1), rt("cn1", t, e, tt, -n, 0, -1), rt("cn2", t, e, tt, n, 0, -1), rt("cn3", t, e, tt, 0, -i, -1), rt("cn4", t, e, tt, 0, i, -1), e.getAttribute("position").needsUpdate = !0;
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose();
    }
};
function rt(s215, e, t, n, i, r, o) {
    Ls.set(i, r, o).unproject(n);
    let a = e[s215];
    if (a !== void 0) {
        let l = t.getAttribute("position");
        for(let c = 0, u = a.length; c < u; c++)l.setXYZ(a[c], Ls.x, Ls.y, Ls.z);
    }
}
var Ps = new It, pu = class extends Tt {
    constructor(e, t = 16776960){
        let n = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]), i = new Float32Array(8 * 3), r = new Me;
        r.setIndex(new ze(n, 1)), r.setAttribute("position", new ze(i, 3));
        super(r, new mt({
            color: t,
            toneMapped: !1
        }));
        this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
    }
    update(e) {
        if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Ps.setFromObject(this.object), Ps.isEmpty()) return;
        let t = Ps.min, n = Ps.max, i = this.geometry.attributes.position, r = i.array;
        r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = t.x, r[4] = n.y, r[5] = n.z, r[6] = t.x, r[7] = t.y, r[8] = n.z, r[9] = n.x, r[10] = t.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = t.z, r[15] = t.x, r[16] = n.y, r[17] = t.z, r[18] = t.x, r[19] = t.y, r[20] = t.z, r[21] = n.x, r[22] = t.y, r[23] = t.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
    }
    setFromObject(e) {
        return this.object = e, this.update(), this;
    }
    copy(e) {
        return Tt.prototype.copy.call(this, e), this.object = e.object, this;
    }
}, gy = class extends Tt {
    constructor(e, t = 16776960){
        let n = new Uint16Array([
            0,
            1,
            1,
            2,
            2,
            3,
            3,
            0,
            4,
            5,
            5,
            6,
            6,
            7,
            7,
            4,
            0,
            4,
            1,
            5,
            2,
            6,
            3,
            7
        ]), i = [
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            -1
        ], r = new Me;
        r.setIndex(new ze(n, 1)), r.setAttribute("position", new he(i, 3));
        super(r, new mt({
            color: t,
            toneMapped: !1
        }));
        this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
    }
    updateMatrixWorld(e) {
        let t = this.box;
        t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(e));
    }
}, xy = class extends an {
    constructor(e, t = 1, n = 16776960){
        let i = n, r = [
            1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            1,
            1,
            1,
            0,
            0,
            1,
            0,
            0,
            0
        ], o = new Me;
        o.setAttribute("position", new he(r, 3)), o.computeBoundingSphere();
        super(o, new mt({
            color: i,
            toneMapped: !1
        }));
        this.type = "PlaneHelper", this.plane = e, this.size = t;
        let a = [
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1
        ], l = new Me;
        l.setAttribute("position", new he(a, 3)), l.computeBoundingSphere(), this.add(new lt(l, new un({
            color: i,
            opacity: 0.2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1
        })));
    }
    updateMatrixWorld(e) {
        let t = -this.plane.constant;
        Math.abs(t) < 0.00000001 && (t = 0.00000001), this.scale.set(0.5 * this.size, 0.5 * this.size, t), this.children[0].material.side = t < 0 ? ot : Li, this.lookAt(this.plane.normal), super.updateMatrixWorld(e);
    }
}, Kc = new w, Ds, na, yy = class extends Fe {
    constructor(e = new w(0, 0, 1), t = new w(0, 0, 0), n = 1, i = 16776960, r = n * 0.2, o = r * 0.2){
        super();
        this.type = "ArrowHelper", Ds === void 0 && (Ds = new Me, Ds.setAttribute("position", new he([
            0,
            0,
            0,
            0,
            1,
            0
        ], 3)), na = new Zn(0, 0.5, 1, 5, 1), na.translate(0, -0.5, 0)), this.position.copy(t), this.line = new an(Ds, new mt({
            color: i,
            toneMapped: !1
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new lt(na, new un({
            color: i,
            toneMapped: !1
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, r, o);
    }
    setDirection(e) {
        if (e.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
        else if (e.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
        else {
            Kc.set(e.z, 0, -e.x).normalize();
            let t = Math.acos(e.y);
            this.quaternion.setFromAxisAngle(Kc, t);
        }
    }
    setLength(e, t = e * 0.2, n = t * 0.2) {
        this.line.scale.set(1, Math.max(0.0001, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
    }
    setColor(e) {
        this.line.material.color.set(e), this.cone.material.color.set(e);
    }
    copy(e) {
        return super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
    }
}, mu = class extends Tt {
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
            0.6,
            0,
            0,
            1,
            0,
            0.6,
            1,
            0,
            0,
            0,
            1,
            0,
            0.6,
            1
        ], i = new Me;
        i.setAttribute("position", new he(t, 3)), i.setAttribute("color", new he(n, 3));
        let r = new mt({
            vertexColors: !0,
            toneMapped: !1
        });
        super(i, r);
        this.type = "AxesHelper";
    }
    setColors(e, t, n) {
        let i = new ne, r = this.geometry.attributes.color.array;
        return i.set(e), i.toArray(r, 0), i.toArray(r, 3), i.set(t), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
    }
    dispose() {
        this.geometry.dispose(), this.material.dispose();
    }
}, _y = class {
    constructor(){
        this.type = "ShapePath", this.color = new ne, this.subPaths = [], this.currentPath = null;
    }
    moveTo(e, t) {
        return this.currentPath = new yr, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
    }
    lineTo(e, t) {
        return this.currentPath.lineTo(e, t), this;
    }
    quadraticCurveTo(e, t, n, i) {
        return this.currentPath.quadraticCurveTo(e, t, n, i), this;
    }
    bezierCurveTo(e, t, n, i, r, o) {
        return this.currentPath.bezierCurveTo(e, t, n, i, r, o), this;
    }
    splineThru(e) {
        return this.currentPath.splineThru(e), this;
    }
    toShapes(e, t) {
        function n(p) {
            let M = [];
            for(let y74 = 0, b68 = p.length; y74 < b68; y74++){
                let T = p[y74], R = new Yt;
                R.curves = T.curves, M.push(R);
            }
            return M;
        }
        function i(p, M) {
            let y75 = M.length, b69 = !1;
            for(let T = y75 - 1, R = 0; R < y75; T = R++){
                let P36 = M[T], H = M[R], N = H.x - P36.x, v = H.y - P36.y;
                if (Math.abs(v) > Number.EPSILON) {
                    if (v < 0 && (P36 = M[R], N = -N, H = M[T], v = -v), p.y < P36.y || p.y > H.y) continue;
                    if (p.y === P36.y) {
                        if (p.x === P36.x) return !0;
                    } else {
                        let C = v * (p.x - P36.x) - N * (p.y - P36.y);
                        if (C === 0) return !0;
                        if (C < 0) continue;
                        b69 = !b69;
                    }
                } else {
                    if (p.y !== P36.y) continue;
                    if (H.x <= p.x && p.x <= P36.x || P36.x <= p.x && p.x <= H.x) return !0;
                }
            }
            return b69;
        }
        let r = Zt.isClockWise, o = this.subPaths;
        if (o.length === 0) return [];
        if (t === !0) return n(o);
        let a, l, c, u = [];
        if (o.length === 1) return l = o[0], c = new Yt, c.curves = l.curves, u.push(c), u;
        let h = !r(o[0].getPoints());
        h = e ? !h : h;
        let d = [], f = [], m = [], x = 0, _;
        f[x] = void 0, m[x] = [];
        for(let p4 = 0, M4 = o.length; p4 < M4; p4++)l = o[p4], _ = l.getPoints(), a = r(_), a = e ? !a : a, a ? (!h && f[x] && x++, f[x] = {
            s: new Yt,
            p: _
        }, f[x].s.curves = l.curves, h && x++, m[x] = []) : m[x].push({
            h: l,
            p: _[0]
        });
        if (!f[0]) return n(o);
        if (f.length > 1) {
            let p = !1, M = [];
            for(let y76 = 0, b70 = f.length; y76 < b70; y76++)d[y76] = [];
            for(let y4 = 0, b1 = f.length; y4 < b1; y4++){
                let T = m[y4];
                for(let R = 0; R < T.length; R++){
                    let P37 = T[R], H = !0;
                    for(let N = 0; N < f.length; N++)i(P37.p, f[N].p) && (y4 !== N && M.push({
                        froms: y4,
                        tos: N,
                        hole: R
                    }), H ? (H = !1, d[N].push(P37)) : p = !0);
                    H && d[y4].push(P37);
                }
            }
            M.length > 0 && (p || (m = d));
        }
        let g93;
        for(let p3 = 0, M3 = f.length; p3 < M3; p3++){
            c = f[p3].s, u.push(c), g93 = m[p3];
            for(let y77 = 0, b71 = g93.length; y77 < b71; y77++)c.holes.push(g93[y77].h);
        }
        return u;
    }
}, gu = new Float32Array(1), vy = new Int32Array(gu.buffer), My = class {
    static toHalfFloat(e) {
        e > 65504 && (console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."), e = 65504), gu[0] = e;
        let t = vy[0], n = t >> 16 & 32768, i = t >> 12 & 2047, r = t >> 23 & 255;
        return r < 103 ? n : r > 142 ? (n |= 31744, n |= (r == 255 ? 0 : 1) && t & 8388607, n) : r < 113 ? (i |= 2048, n |= (i >> 114 - r) + (i >> 113 - r & 1), n) : (n |= r - 112 << 10 | i >> 1, n += i & 1, n);
    }
};
Dt.create = function(s235, e) {
    return console.log("THREE.Curve.create() has been deprecated"), s235.prototype = Object.create(Dt.prototype), s235.prototype.constructor = s235, s235.prototype.getPoint = e, s235;
};
yr.prototype.fromPoints = function(s236) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(s236);
};
fu.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
uu.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Et.prototype.extractUrlBase = function(s241) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Vs.extractUrlBase(s241);
};
Et.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
};
Ji.prototype.center = function(s244) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(s244);
};
Ji.prototype.empty = function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
Ji.prototype.isIntersectionBox = function(s245) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s245);
};
Ji.prototype.size = function(s246) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(s246);
};
It.prototype.center = function(s247) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(s247);
};
It.prototype.empty = function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
It.prototype.isIntersectionBox = function(s248) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s248);
};
It.prototype.isIntersectionSphere = function(s249) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s249);
};
It.prototype.size = function(s250) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(s250);
};
Dn.prototype.empty = function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
Br.prototype.setFromMatrix = function(s251) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(s251);
};
hu.prototype.center = function(s252) {
    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(s252);
};
ut.prototype.flattenToArrayOffset = function(s253, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s253, e);
};
ut.prototype.multiplyVector3 = function(s254) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), s254.applyMatrix3(this);
};
ut.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
ut.prototype.applyToBufferAttribute = function(s255) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), s255.applyMatrix3(this);
};
ut.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
ut.prototype.getInverse = function(s256) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s256).invert();
};
de.prototype.extractPosition = function(s257) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(s257);
};
de.prototype.flattenToArrayOffset = function(s258, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(s258, e);
};
de.prototype.getPosition = function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new w().setFromMatrixColumn(this, 3);
};
de.prototype.setRotationFromQuaternion = function(s259) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(s259);
};
de.prototype.multiplyToArray = function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
de.prototype.multiplyVector3 = function(s260) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), s260.applyMatrix4(this);
};
de.prototype.multiplyVector4 = function(s261) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), s261.applyMatrix4(this);
};
de.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
de.prototype.rotateAxis = function(s262) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), s262.transformDirection(this);
};
de.prototype.crossVector = function(s263) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), s263.applyMatrix4(this);
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
de.prototype.applyToBufferAttribute = function(s264) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), s264.applyMatrix4(this);
};
de.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
de.prototype.makeFrustum = function(s265, e, t, n, i, r) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(s265, e, n, t, i, r);
};
de.prototype.getInverse = function(s266) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(s266).invert();
};
Xt.prototype.isIntersectionLine = function(s267) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(s267);
};
yt.prototype.multiplyVector3 = function(s268) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), s268.applyQuaternion(this);
};
yt.prototype.inverse = function() {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
};
In.prototype.isIntersectionBox = function(s269) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(s269);
};
In.prototype.isIntersectionPlane = function(s270) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(s270);
};
In.prototype.isIntersectionSphere = function(s271) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(s271);
};
st.prototype.area = function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
};
st.prototype.barycoordFromPoint = function(s272, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(s272, e);
};
st.prototype.midpoint = function(s273) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(s273);
};
st.prototypenormal = function(s274) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(s274);
};
st.prototype.plane = function(s275) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(s275);
};
st.barycoordFromPoint = function(s276, e, t, n, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), st.getBarycoord(s276, e, t, n, i);
};
st.normal = function(s277, e, t, n) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), st.getNormal(s277, e, t, n);
};
Yt.prototype.extractAllPoints = function(s278) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(s278);
};
Yt.prototype.extrude = function(s279) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new cn(this, s279);
};
Yt.prototype.makeGeometry = function(s280) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Ni(this, s280);
};
Z.prototype.fromAttribute = function(s281, e, t) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s281, e, t);
};
Z.prototype.distanceToManhattan = function(s282) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s282);
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
w.prototype.getPositionFromMatrix = function(s283) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(s283);
};
w.prototype.getScaleFromMatrix = function(s284) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(s284);
};
w.prototype.getColumnFromMatrix = function(s285, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, s285);
};
w.prototype.applyProjection = function(s286) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(s286);
};
w.prototype.fromAttribute = function(s287, e, t) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s287, e, t);
};
w.prototype.distanceToManhattan = function(s288) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(s288);
};
w.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
We.prototype.fromAttribute = function(s289, e, t) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(s289, e, t);
};
We.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
Fe.prototype.getChildByName = function(s290) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(s290);
};
Fe.prototype.renderDepth = function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
};
Fe.prototype.translate = function(s291, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, s291);
};
Fe.prototype.getWorldRotation = function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
};
Fe.prototype.applyMatrix = function(s292) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s292);
};
Object.defineProperties(Fe.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
        },
        set: function(s293) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = s293;
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
lt.prototype.setDrawMode = function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
};
Object.defineProperties(lt.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), fd;
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
        }
    }
});
so.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
ft.prototype.setLens = function(s294, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(s294);
};
Object.defineProperties(Ut.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.");
        }
    },
    shadowCameraFov: {
        set: function(s295) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = s295;
        }
    },
    shadowCameraLeft: {
        set: function(s296) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = s296;
        }
    },
    shadowCameraRight: {
        set: function(s297) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = s297;
        }
    },
    shadowCameraTop: {
        set: function(s298) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = s298;
        }
    },
    shadowCameraBottom: {
        set: function(s299) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = s299;
        }
    },
    shadowCameraNear: {
        set: function(s300) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = s300;
        }
    },
    shadowCameraFar: {
        set: function(s301) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = s301;
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
        }
    },
    shadowBias: {
        set: function(s302) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = s302;
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.");
        }
    },
    shadowMapWidth: {
        set: function(s303) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = s303;
        }
    },
    shadowMapHeight: {
        set: function(s304) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = s304;
        }
    }
});
Object.defineProperties(ze.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === dr;
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(dr);
        }
    }
});
ze.prototype.setDynamic = function(s305) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(s305 === !0 ? dr : ur), this;
};
ze.prototype.copyIndicesArray = function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}, ze.prototype.setArray = function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
Me.prototype.addIndex = function(s306) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(s306);
};
Me.prototype.addAttribute = function(s307, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(s307, new ze(arguments[1], arguments[2]))) : s307 === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(s307, e);
};
Me.prototype.addDrawCall = function(s308, e, t) {
    t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(s308, e);
};
Me.prototype.clearDrawCalls = function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
};
Me.prototype.computeOffsets = function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
Me.prototype.removeAttribute = function(s309) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(s309);
};
Me.prototype.applyMatrix = function(s310) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(s310);
};
Object.defineProperties(Me.prototype, {
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
jn.prototype.setDynamic = function(s311) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(s311 === !0 ? dr : ur), this;
};
jn.prototype.setArray = function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
cn.prototype.getArrays = function() {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
cn.prototype.addShapeList = function() {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
cn.prototype.addShape = function() {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
no.prototype.dispose = function() {
    console.error("THREE.Scene: .dispose() has been removed.");
};
go.prototype.onUpdate = function() {
    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
};
Object.defineProperties(pt.prototype, {
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
        set: function(s312) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = s312 === eh;
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
        },
        set: function(s313) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = s313;
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
Object.defineProperties(on.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
        },
        set: function(s314) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = s314;
        }
    }
});
Xe.prototype.clearTarget = function(s315, e, t, n) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(s315), this.clear(e, t, n);
};
Xe.prototype.animate = function(s316) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(s316);
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
Xe.prototype.enableScissorTest = function(s317) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(s317);
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
        set: function(s318) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = s318;
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type;
        },
        set: function(s319) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = s319;
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
        set: function(s320) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = s320 === !0 ? Ze : Tn;
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
Object.defineProperties(Ch.prototype, {
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
Object.defineProperties(Pt.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
        },
        set: function(s322) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = s322;
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
        },
        set: function(s323) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = s323;
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
        },
        set: function(s324) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = s324;
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
        },
        set: function(s325) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = s325;
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
        },
        set: function(s326) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = s326;
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
        },
        set: function(s327) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = s327;
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
        },
        set: function(s328) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = s328;
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
        },
        set: function(s329) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = s329;
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
        },
        set: function(s330) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = s330;
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
        },
        set: function(s331) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = s331;
        }
    }
});
Qa.prototype.load = function(s332) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    let e = this;
    return new Kh().load(s332, function(n) {
        e.setBuffer(n);
    }), this;
};
nu.prototype.getData = function() {
    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
};
$s.prototype.updateCubeMap = function(s333, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(s333, e);
};
$s.prototype.clear = function(s334, e, t, n) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(s334, e, t, n);
};
Pn.crossOrigin = void 0;
Pn.loadTexture = function(s335, e, t, n) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    let i = new Jh;
    i.setCrossOrigin(this.crossOrigin);
    let r = i.load(s335, t, void 0, n);
    return e && (r.mapping = e), r;
};
Pn.loadTextureCube = function(s336, e, t, n) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    let i = new qh;
    i.setCrossOrigin(this.crossOrigin);
    let r = i.load(s336, t, void 0, n);
    return e && (r.mapping = e), r;
};
Pn.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
Pn.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: pa
    }
}));
typeof document < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = pa);
var pe = {
    type: "change"
}, Z1 = {
    type: "start"
}, he1 = {
    type: "end"
}, me = class extends Ln {
    constructor(j, N){
        super();
        N === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), N === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = j, this.domElement = N, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new w, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
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
            return s216.phi;
        }, this.getAzimuthalAngle = function() {
            return s216.theta;
        }, this.getDistance = function() {
            return this.object.position.distanceTo(this.target);
        }, this.listenToKeyEvents = function(t) {
            t.addEventListener("keydown", ae13), this._domElementKeyEvents = t;
        }, this.saveState = function() {
            e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
        }, this.reset = function() {
            e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(pe), e.update(), i = a.NONE;
        }, this.update = function() {
            let t = new w, n = new yt().setFromUnitVectors(j.up, new w(0, 1, 0)), r = n.clone().invert(), c = new w, l = new yt, D44 = 2 * Math.PI;
            return function() {
                let ce14 = e.object.position;
                t.copy(ce14).sub(e.target), t.applyQuaternion(n), s216.setFromVector3(t), e.autoRotate && i === a.NONE && C(fe()), e.enableDamping ? (s216.theta += p.theta * e.dampingFactor, s216.phi += p.phi * e.dampingFactor) : (s216.theta += p.theta, s216.phi += p.phi);
                let h = e.minAzimuthAngle, m = e.maxAzimuthAngle;
                return isFinite(h) && isFinite(m) && (h < -Math.PI ? h += D44 : h > Math.PI && (h -= D44), m < -Math.PI ? m += D44 : m > Math.PI && (m -= D44), h <= m ? s216.theta = Math.max(h, Math.min(m, s216.theta)) : s216.theta = s216.theta > (h + m) / 2 ? Math.max(h, s216.theta) : Math.min(m, s216.theta)), s216.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, s216.phi)), s216.makeSafe(), s216.radius *= x, s216.radius = Math.max(e.minDistance, Math.min(e.maxDistance, s216.radius)), e.enableDamping === !0 ? e.target.addScaledVector(P38, e.dampingFactor) : e.target.add(P38), t.setFromSpherical(s216), t.applyQuaternion(r), ce14.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (p.theta *= 1 - e.dampingFactor, p.phi *= 1 - e.dampingFactor, P38.multiplyScalar(1 - e.dampingFactor)) : (p.set(0, 0, 0), P38.set(0, 0, 0)), x = 1, S || c.distanceToSquared(e.object.position) > v || 8 * (1 - l.dot(e.object.quaternion)) > v ? (e.dispatchEvent(pe), c.copy(e.object.position), l.copy(e.object.quaternion), S = !1, !0) : !1;
            };
        }(), this.dispose = function() {
            e.domElement.removeEventListener("contextmenu", ie9), e.domElement.removeEventListener("pointerdown", te1), e.domElement.removeEventListener("pointercancel", ne2), e.domElement.removeEventListener("wheel", oe15), e.domElement.removeEventListener("pointermove", H), e.domElement.removeEventListener("pointerup", z), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", ae13);
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
        }, i = a.NONE, v = 0.000001, s216 = new ay, p = new ay, x = 1, P38 = new w, S = !1, E = new Z, g94 = new Z, O = new Z, y78 = new Z, T = new Z, A = new Z, M = new Z, w3 = new Z, R = new Z, o = [], k = {};
        function fe() {
            return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
        }
        function I30() {
            return Math.pow(0.95, e.zoomSpeed);
        }
        function C(t) {
            p.theta -= t;
        }
        function F(t) {
            p.phi -= t;
        }
        let X = function() {
            let t = new w;
            return function(r, c) {
                t.setFromMatrixColumn(c, 0), t.multiplyScalar(-r), P38.add(t);
            };
        }(), K = function() {
            let t = new w;
            return function(r, c) {
                e.screenSpacePanning === !0 ? t.setFromMatrixColumn(c, 1) : (t.setFromMatrixColumn(c, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(r), P38.add(t);
            };
        }(), L = function() {
            let t = new w;
            return function(r, c) {
                let l = e.domElement;
                if (e.object.isPerspectiveCamera) {
                    let D45 = e.object.position;
                    t.copy(D45).sub(e.target);
                    let Y = t.length();
                    Y *= Math.tan(e.object.fov / 2 * Math.PI / 180), X(2 * r * Y / l.clientHeight, e.object.matrix), K(2 * c * Y / l.clientHeight, e.object.matrix);
                } else e.object.isOrthographicCamera ? (X(r * (e.object.right - e.object.left) / e.object.zoom / l.clientWidth, e.object.matrix), K(c * (e.object.top - e.object.bottom) / e.object.zoom / l.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
            };
        }();
        function _(t) {
            e.object.isPerspectiveCamera ? x /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
        }
        function V15(t) {
            e.object.isPerspectiveCamera ? x *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
        }
        function W(t) {
            E.set(t.clientX, t.clientY);
        }
        function be11(t) {
            M.set(t.clientX, t.clientY);
        }
        function B(t) {
            y78.set(t.clientX, t.clientY);
        }
        function Ee7(t) {
            g94.set(t.clientX, t.clientY), O.subVectors(g94, E).multiplyScalar(e.rotateSpeed);
            let n = e.domElement;
            C(2 * Math.PI * O.x / n.clientHeight), F(2 * Math.PI * O.y / n.clientHeight), E.copy(g94), e.update();
        }
        function ge(t) {
            w3.set(t.clientX, t.clientY), R.subVectors(w3, M), R.y > 0 ? _(I30()) : R.y < 0 && V15(I30()), M.copy(w3), e.update();
        }
        function ye15(t) {
            T.set(t.clientX, t.clientY), A.subVectors(T, y78).multiplyScalar(e.panSpeed), L(A.x, A.y), y78.copy(T), e.update();
        }
        function Te12(t) {
            t.deltaY < 0 ? V15(I30()) : t.deltaY > 0 && _(I30()), e.update();
        }
        function Pe13(t) {
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
        function G12() {
            if (o.length === 1) E.set(o[0].pageX, o[0].pageY);
            else {
                let t = 0.5 * (o[0].pageX + o[1].pageX), n = 0.5 * (o[0].pageY + o[1].pageY);
                E.set(t, n);
            }
        }
        function q25() {
            if (o.length === 1) y78.set(o[0].pageX, o[0].pageY);
            else {
                let t = 0.5 * (o[0].pageX + o[1].pageX), n = 0.5 * (o[0].pageY + o[1].pageY);
                y78.set(t, n);
            }
        }
        function Q22() {
            let t = o[0].pageX - o[1].pageX, n = o[0].pageY - o[1].pageY, r = Math.sqrt(t * t + n * n);
            M.set(0, r);
        }
        function Oe8() {
            e.enableZoom && Q22(), e.enablePan && q25();
        }
        function Ae15() {
            e.enableZoom && Q22(), e.enableRotate && G12();
        }
        function J20(t) {
            if (o.length == 1) g94.set(t.pageX, t.pageY);
            else {
                let r = U28(t), c = 0.5 * (t.pageX + r.x), l = 0.5 * (t.pageY + r.y);
                g94.set(c, l);
            }
            O.subVectors(g94, E).multiplyScalar(e.rotateSpeed);
            let n = e.domElement;
            C(2 * Math.PI * O.x / n.clientHeight), F(2 * Math.PI * O.y / n.clientHeight), E.copy(g94);
        }
        function $(t) {
            if (o.length === 1) T.set(t.pageX, t.pageY);
            else {
                let n = U28(t), r = 0.5 * (t.pageX + n.x), c = 0.5 * (t.pageY + n.y);
                T.set(r, c);
            }
            A.subVectors(T, y78).multiplyScalar(e.panSpeed), L(A.x, A.y), y78.copy(T);
        }
        function ee(t) {
            let n = U28(t), r = t.pageX - n.x, c = t.pageY - n.y, l = Math.sqrt(r * r + c * c);
            w3.set(0, l), R.set(0, Math.pow(w3.y / M.y, e.zoomSpeed)), _(R.y), M.copy(w3);
        }
        function Me2(t) {
            e.enableZoom && ee(t), e.enablePan && $(t);
        }
        function we11(t) {
            e.enableZoom && ee(t), e.enableRotate && J20(t);
        }
        function te1(t) {
            e.enabled !== !1 && (o.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", H), e.domElement.addEventListener("pointerup", z)), je(t), t.pointerType === "touch" ? Ne9(t) : Le7(t));
        }
        function H(t) {
            e.enabled !== !1 && (t.pointerType === "touch" ? Re8(t) : De(t));
        }
        function z(t) {
            se(t), o.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", H), e.domElement.removeEventListener("pointerup", z)), e.dispatchEvent(he1), i = a.NONE;
        }
        function ne2(t) {
            se(t);
        }
        function Le7(t) {
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
                    be11(t), i = a.DOLLY;
                    break;
                case wy.ROTATE:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (e.enablePan === !1) return;
                        B(t), i = a.PAN;
                    } else {
                        if (e.enableRotate === !1) return;
                        W(t), i = a.ROTATE;
                    }
                    break;
                case wy.PAN:
                    if (t.ctrlKey || t.metaKey || t.shiftKey) {
                        if (e.enableRotate === !1) return;
                        W(t), i = a.ROTATE;
                    } else {
                        if (e.enablePan === !1) return;
                        B(t), i = a.PAN;
                    }
                    break;
                default:
                    i = a.NONE;
            }
            i !== a.NONE && e.dispatchEvent(Z1);
        }
        function De(t) {
            if (e.enabled !== !1) switch(i){
                case a.ROTATE:
                    if (e.enableRotate === !1) return;
                    Ee7(t);
                    break;
                case a.DOLLY:
                    if (e.enableZoom === !1) return;
                    ge(t);
                    break;
                case a.PAN:
                    if (e.enablePan === !1) return;
                    ye15(t);
                    break;
            }
        }
        function oe15(t) {
            e.enabled === !1 || e.enableZoom === !1 || i !== a.NONE || (t.preventDefault(), e.dispatchEvent(Z1), Te12(t), e.dispatchEvent(he1));
        }
        function ae13(t) {
            e.enabled === !1 || e.enablePan === !1 || Pe13(t);
        }
        function Ne9(t) {
            switch(re14(t), o.length){
                case 1:
                    switch(e.touches.ONE){
                        case by.ROTATE:
                            if (e.enableRotate === !1) return;
                            G12(), i = a.TOUCH_ROTATE;
                            break;
                        case by.PAN:
                            if (e.enablePan === !1) return;
                            q25(), i = a.TOUCH_PAN;
                            break;
                        default:
                            i = a.NONE;
                    }
                    break;
                case 2:
                    switch(e.touches.TWO){
                        case by.DOLLY_PAN:
                            if (e.enableZoom === !1 && e.enablePan === !1) return;
                            Oe8(), i = a.TOUCH_DOLLY_PAN;
                            break;
                        case by.DOLLY_ROTATE:
                            if (e.enableZoom === !1 && e.enableRotate === !1) return;
                            Ae15(), i = a.TOUCH_DOLLY_ROTATE;
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
        function Re8(t) {
            switch(re14(t), i){
                case a.TOUCH_ROTATE:
                    if (e.enableRotate === !1) return;
                    J20(t), e.update();
                    break;
                case a.TOUCH_PAN:
                    if (e.enablePan === !1) return;
                    $(t), e.update();
                    break;
                case a.TOUCH_DOLLY_PAN:
                    if (e.enableZoom === !1 && e.enablePan === !1) return;
                    Me2(t), e.update();
                    break;
                case a.TOUCH_DOLLY_ROTATE:
                    if (e.enableZoom === !1 && e.enableRotate === !1) return;
                    we11(t), e.update();
                    break;
                default:
                    i = a.NONE;
            }
        }
        function ie9(t) {
            e.enabled !== !1 && t.preventDefault();
        }
        function je(t) {
            o.push(t);
        }
        function se(t) {
            delete k[t.pointerId];
            for(let n = 0; n < o.length; n++)if (o[n].pointerId == t.pointerId) {
                o.splice(n, 1);
                return;
            }
        }
        function re14(t) {
            let n = k[t.pointerId];
            n === void 0 && (n = new Z, k[t.pointerId] = n), n.set(t.pageX, t.pageY);
        }
        function U28(t) {
            let n = t.pointerId === o[0].pointerId ? o[1] : o[0];
            return k[n.pointerId];
        }
        e.domElement.addEventListener("contextmenu", ie9), e.domElement.addEventListener("pointerdown", te1), e.domElement.addEventListener("pointercancel", ne2), e.domElement.addEventListener("wheel", oe15, {
            passive: !1
        }), this.update();
    }
}, Se = class extends me {
    constructor(j, N){
        super(j, N);
        this.screenSpacePanning = !1, this.mouseButtons.LEFT = wy.PAN, this.mouseButtons.RIGHT = wy.ROTATE, this.touches.ONE = by.PAN, this.touches.TWO = by.DOLLY_ROTATE;
    }
};
var bt1 = class extends Et {
    constructor(t){
        super(t);
        this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
            return new Re(e);
        }), this.register(function(e) {
            return new ye(e);
        }), this.register(function(e) {
            return new Le(e);
        }), this.register(function(e) {
            return new Me1(e);
        }), this.register(function(e) {
            return new xe(e);
        }), this.register(function(e) {
            return new Ee(e);
        }), this.register(function(e) {
            return new Se1(e);
        }), this.register(function(e) {
            return new _e(e);
        }), this.register(function(e) {
            return new Te(e);
        }), this.register(function(e) {
            return new we(e);
        });
    }
    load(t, e, n, s217) {
        let r = this, i;
        this.resourcePath !== "" ? i = this.resourcePath : this.path !== "" ? i = this.path : i = Vs.extractUrlBase(t), this.manager.itemStart(t);
        let a = function(c) {
            s217 ? s217(c) : console.error(c), r.manager.itemError(t), r.manager.itemEnd(t);
        }, o = new $t(this.manager);
        o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(c) {
            try {
                r.parse(c, i, function(u) {
                    e(u), r.manager.itemEnd(t);
                }, a);
            } catch (u) {
                a(u);
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
    parse(t, e, n, s218) {
        let r, i = {}, a = {};
        if (typeof t == "string") r = t;
        else if (Vs.decodeText(new Uint8Array(t, 0, 4)) === be) {
            try {
                i[g.KHR_BINARY_GLTF] = new Ne(t);
            } catch (l) {
                s218 && s218(l);
                return;
            }
            r = i[g.KHR_BINARY_GLTF].content;
        } else r = Vs.decodeText(new Uint8Array(t));
        let o = JSON.parse(r);
        if (o.asset === void 0 || o.asset.version[0] < 2) {
            s218 && s218(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return;
        }
        let c = new ve(o, {
            path: e || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        c.fileLoader.setRequestHeader(this.requestHeader);
        for(let u = 0; u < this.pluginCallbacks.length; u++){
            let l = this.pluginCallbacks[u](c);
            a[l.name] = l, i[l.name] = !0;
        }
        if (o.extensionsUsed) for(let u1 = 0; u1 < o.extensionsUsed.length; ++u1){
            let l = o.extensionsUsed[u1], h = o.extensionsRequired || [];
            switch(l){
                case g.KHR_MATERIALS_UNLIT:
                    i[l] = new Ae;
                    break;
                case g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                    i[l] = new Ce;
                    break;
                case g.KHR_DRACO_MESH_COMPRESSION:
                    i[l] = new Ie1(o, this.dracoLoader);
                    break;
                case g.KHR_TEXTURE_TRANSFORM:
                    i[l] = new Oe;
                    break;
                case g.KHR_MESH_QUANTIZATION:
                    i[l] = new Fe1;
                    break;
                default:
                    h.indexOf(l) >= 0 && a[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".');
            }
        }
        c.setExtensions(i), c.setPlugins(a), c.parse(n, s218);
    }
    parseAsync(t, e) {
        let n = this;
        return new Promise(function(s219, r) {
            n.parse(t, e, s219, r);
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
}, Te = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
        };
    }
    _markDefs() {
        let t = this.parser, e = this.parser.json.nodes || [];
        for(let n = 0, s220 = e.length; n < s220; n++){
            let r = e[n];
            r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, r.extensions[this.name].light);
        }
    }
    _loadLight(t) {
        let e = this.parser, n = "light:" + t, s221 = e.cache.get(n);
        if (s221) return s221;
        let r = e.json, o = ((r.extensions && r.extensions[this.name] || {}).lights || [])[t], c, u = new ne(16777215);
        o.color !== void 0 && u.fromArray(o.color);
        let l = o.range !== void 0 ? o.range : 0;
        switch(o.type){
            case "directional":
                c = new Ya(u), c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            case "point":
                c = new Xa(u), c.distance = l;
                break;
            case "spot":
                c = new Wa(u), c.distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4, c.angle = o.spot.outerConeAngle, c.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type);
        }
        return c.position.set(0, 0, 0), c.decay = 2, o.intensity !== void 0 && (c.intensity = o.intensity), c.name = e.createUniqueName(o.name || "light_" + t), s221 = Promise.resolve(c), e.cache.add(n, s221), s221;
    }
    createNodeAttachment(t) {
        let e = this, n = this.parser, r = n.json.nodes[t], a = (r.extensions && r.extensions[this.name] || {}).light;
        return a === void 0 ? null : this._loadLight(a).then(function(o) {
            return n._getNodeRef(e.cache, a, o);
        });
    }
}, Ae = class {
    constructor(){
        this.name = g.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return un;
    }
    extendParams(t, e, n) {
        let s222 = [];
        t.color = new ne(1, 1, 1), t.opacity = 1;
        let r = e.pbrMetallicRoughness;
        if (r) {
            if (Array.isArray(r.baseColorFactor)) {
                let i = r.baseColorFactor;
                t.color.fromArray(i), t.opacity = i[3];
            }
            r.baseColorTexture !== void 0 && s222.push(n.assignTexture(t, "map", r.baseColorTexture));
        }
        return Promise.all(s222);
    }
}, Re = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Da;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s223 = n.json.materials[t];
        if (!s223.extensions || !s223.extensions[this.name]) return Promise.resolve();
        let r = [], i = s223.extensions[this.name];
        if (i.clearcoatFactor !== void 0 && (e.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && r.push(n.assignTexture(e, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(e, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(e, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
            let a = i.clearcoatNormalTexture.scale;
            e.clearcoatNormalScale = new Z(a, a);
        }
        return Promise.all(r);
    }
}, Me1 = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Da;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s224 = n.json.materials[t];
        if (!s224.extensions || !s224.extensions[this.name]) return Promise.resolve();
        let r = [];
        e.sheenColor = new ne(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
        let i = s224.extensions[this.name];
        return i.sheenColorFactor !== void 0 && e.sheenColor.fromArray(i.sheenColorFactor), i.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && r.push(n.assignTexture(e, "sheenColorMap", i.sheenColorTexture)), i.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(e, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(r);
    }
}, xe = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Da;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s225 = n.json.materials[t];
        if (!s225.extensions || !s225.extensions[this.name]) return Promise.resolve();
        let r = [], i = s225.extensions[this.name];
        return i.transmissionFactor !== void 0 && (e.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && r.push(n.assignTexture(e, "transmissionMap", i.transmissionTexture)), Promise.all(r);
    }
}, Ee = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Da;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s226 = n.json.materials[t];
        if (!s226.extensions || !s226.extensions[this.name]) return Promise.resolve();
        let r = [], i = s226.extensions[this.name];
        e.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && r.push(n.assignTexture(e, "thicknessMap", i.thicknessTexture)), e.attenuationDistance = i.attenuationDistance || 0;
        let a = i.attenuationColor || [
            1,
            1,
            1
        ];
        return e.attenuationColor = new ne(a[0], a[1], a[2]), Promise.all(r);
    }
}, Se1 = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_IOR;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Da;
    }
    extendMaterialParams(t, e) {
        let s227 = this.parser.json.materials[t];
        if (!s227.extensions || !s227.extensions[this.name]) return Promise.resolve();
        let r = s227.extensions[this.name];
        return e.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
    }
}, _e = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(t) {
        let n = this.parser.json.materials[t];
        return !n.extensions || !n.extensions[this.name] ? null : Da;
    }
    extendMaterialParams(t, e) {
        let n = this.parser, s228 = n.json.materials[t];
        if (!s228.extensions || !s228.extensions[this.name]) return Promise.resolve();
        let r = [], i = s228.extensions[this.name];
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
}, ye = class {
    constructor(t){
        this.parser = t, this.name = g.KHR_TEXTURE_BASISU;
    }
    loadTexture(t) {
        let e = this.parser, n = e.json, s229 = n.textures[t];
        if (!s229.extensions || !s229.extensions[this.name]) return null;
        let r = s229.extensions[this.name], i = n.images[r.source], a = e.options.ktx2Loader;
        if (!a) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null;
        }
        return e.loadTextureImage(t, i, a);
    }
}, Le = class {
    constructor(t){
        this.parser = t, this.name = g.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(t) {
        let e = this.name, n = this.parser, s230 = n.json, r = s230.textures[t];
        if (!r.extensions || !r.extensions[e]) return null;
        let i = r.extensions[e], a = s230.images[i.source], o = n.textureLoader;
        if (a.uri) {
            let c = n.options.manager.getHandler(a.uri);
            c !== null && (o = c);
        }
        return this.detectSupport().then(function(c) {
            if (c) return n.loadTextureImage(t, a, o);
            if (s230.extensionsRequired && s230.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
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
}, we = class {
    constructor(t){
        this.name = g.EXT_MESHOPT_COMPRESSION, this.parser = t;
    }
    loadBufferView(t) {
        let e = this.parser.json, n = e.bufferViews[t];
        if (n.extensions && n.extensions[this.name]) {
            let s231 = n.extensions[this.name], r = this.parser.getDependency("buffer", s231.buffer), i = this.parser.options.meshoptDecoder;
            if (!i || !i.supported) {
                if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null;
            }
            return Promise.all([
                r,
                i.ready
            ]).then(function(a) {
                let o = s231.byteOffset || 0, c = s231.byteLength || 0, u = s231.count, l = s231.byteStride, h = new ArrayBuffer(u * l), d = new Uint8Array(a[0], o, c);
                return i.decodeGltfBuffer(new Uint8Array(h), u, l, d, s231.mode, s231.filter), h;
            });
        } else return null;
    }
}, be = "glTF", U = 12, ne1 = {
    JSON: 1313821514,
    BIN: 5130562
}, Ne = class {
    constructor(t){
        this.name = g.KHR_BINARY_GLTF, this.content = null, this.body = null;
        let e = new DataView(t, 0, U);
        if (this.header = {
            magic: Vs.decodeText(new Uint8Array(t.slice(0, 4))),
            version: e.getUint32(4, !0),
            length: e.getUint32(8, !0)
        }, this.header.magic !== be) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        let n = this.header.length - U, s232 = new DataView(t, U), r = 0;
        for(; r < n;){
            let i = s232.getUint32(r, !0);
            r += 4;
            let a = s232.getUint32(r, !0);
            if (r += 4, a === ne1.JSON) {
                let o = new Uint8Array(t, U + r, i);
                this.content = Vs.decodeText(o);
            } else if (a === ne1.BIN) {
                let o = U + r;
                this.body = t.slice(o, o + i);
            }
            r += i;
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
}, Ie1 = class {
    constructor(t, e){
        if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = g.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload();
    }
    decodePrimitive(t, e) {
        let n = this.json, s233 = this.dracoLoader, r = t.extensions[this.name].bufferView, i = t.extensions[this.name].attributes, a = {}, o = {}, c = {};
        for(let u3 in i){
            let l = Q[u3] || u3.toLowerCase();
            a[l] = i[u3];
        }
        for(let u2 in t.attributes){
            let l = Q[u2] || u2.toLowerCase();
            if (i[u2] !== void 0) {
                let h = n.accessors[t.attributes[u2]], d = G[h.componentType];
                c[l] = d, o[l] = h.normalized === !0;
            }
        }
        return e.getDependency("bufferView", r).then(function(u) {
            return new Promise(function(l) {
                s233.decodeDracoFile(u, function(h) {
                    for(let d in h.attributes){
                        let A = h.attributes[d], T = o[d];
                        T !== void 0 && (A.normalized = T);
                    }
                    l(h);
                }, a, c);
            });
        });
    }
}, Oe = class {
    constructor(){
        this.name = g.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(t, e) {
        return e.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (t = t.clone(), e.offset !== void 0 && t.offset.fromArray(e.offset), e.rotation !== void 0 && (t.rotation = e.rotation), e.scale !== void 0 && t.repeat.fromArray(e.scale), t.needsUpdate = !0), t;
    }
}, V = class extends po {
    constructor(t){
        super();
        this.isGLTFSpecularGlossinessMaterial = !0;
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
`), s234 = [
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
            o.fragmentShader = o.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", e).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", s234).replace("#include <metalnessmap_fragment>", r).replace("#include <lights_physical_fragment>", i);
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
}, Ce = class {
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
        return V;
    }
    extendParams(t, e, n) {
        let s237 = e.extensions[this.name];
        t.color = new ne(1, 1, 1), t.opacity = 1;
        let r = [];
        if (Array.isArray(s237.diffuseFactor)) {
            let i = s237.diffuseFactor;
            t.color.fromArray(i), t.opacity = i[3];
        }
        if (s237.diffuseTexture !== void 0 && r.push(n.assignTexture(t, "map", s237.diffuseTexture)), t.emissive = new ne(0, 0, 0), t.glossiness = s237.glossinessFactor !== void 0 ? s237.glossinessFactor : 1, t.specular = new ne(1, 1, 1), Array.isArray(s237.specularFactor) && t.specular.fromArray(s237.specularFactor), s237.specularGlossinessTexture !== void 0) {
            let i = s237.specularGlossinessTexture;
            r.push(n.assignTexture(t, "glossinessMap", i)), r.push(n.assignTexture(t, "specularMap", i));
        }
        return Promise.all(r);
    }
    createMaterial(t) {
        let e = new V(t);
        return e.fog = !0, e.color = t.color, e.map = t.map === void 0 ? null : t.map, e.lightMap = null, e.lightMapIntensity = 1, e.aoMap = t.aoMap === void 0 ? null : t.aoMap, e.aoMapIntensity = 1, e.emissive = t.emissive, e.emissiveIntensity = 1, e.emissiveMap = t.emissiveMap === void 0 ? null : t.emissiveMap, e.bumpMap = t.bumpMap === void 0 ? null : t.bumpMap, e.bumpScale = 1, e.normalMap = t.normalMap === void 0 ? null : t.normalMap, e.normalMapType = ki, t.normalScale && (e.normalScale = t.normalScale), e.displacementMap = null, e.displacementScale = 1, e.displacementBias = 0, e.specularMap = t.specularMap === void 0 ? null : t.specularMap, e.specular = t.specular, e.glossinessMap = t.glossinessMap === void 0 ? null : t.glossinessMap, e.glossiness = t.glossiness, e.alphaMap = null, e.envMap = t.envMap === void 0 ? null : t.envMap, e.envMapIntensity = 1, e.refractionRatio = 0.98, e;
    }
}, Fe1 = class {
    constructor(){
        this.name = g.KHR_MESH_QUANTIZATION;
    }
}, b = class extends hn {
    constructor(t, e, n, s238){
        super(t, e, n, s238);
    }
    copySampleValue_(t) {
        let e = this.resultBuffer, n = this.sampleValues, s239 = this.valueSize, r = t * s239 * 3 + s239;
        for(let i = 0; i !== s239; i++)e[i] = n[r + i];
        return e;
    }
};
b.prototype.beforeStart_ = b.prototype.copySampleValue_;
b.prototype.afterEnd_ = b.prototype.copySampleValue_;
b.prototype.interpolate_ = function(f, t, e, n) {
    let s240 = this.resultBuffer, r = this.sampleValues, i = this.valueSize, a = i * 2, o = i * 3, c = n - t, u = (e - t) / c, l = u * u, h = l * u, d = f * o, A = d - o, T = -2 * h + 3 * l, m = h - l, p = 1 - T, M = m - l + u;
    for(let R = 0; R !== i; R++){
        let P39 = r[A + R + i], N = r[A + R + a] * c, S = r[d + R + i], x = r[d + R] * c;
        s240[R] = p * P39 + M * N + T * S + m * x;
    }
    return s240;
};
var It1 = new yt, He = class extends b {
    interpolate_(t, e, n, s242) {
        let r = super.interpolate_(t, e, n, s242);
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
}, G = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}, re = {
    9728: at,
    9729: nt,
    9984: ra,
    9985: ih,
    9986: sa,
    9987: Gi
}, ie = {
    33071: Mt,
    33648: Os,
    10497: zs
}, oe = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
}, Q = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
}, w1 = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
}, Ot1 = {
    CUBICSPLINE: void 0,
    LINEAR: Hs,
    STEP: Us
}, q = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
function Ct1(f) {
    return f.DefaultMaterial === void 0 && (f.DefaultMaterial = new po({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Li
    })), f.DefaultMaterial;
}
function D(f, t, e) {
    for(let n in e.extensions)f[n] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[n] = e.extensions[n]);
}
function I(f, t) {
    t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(f.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Ft1(f, t, e) {
    let n = !1, s243 = !1;
    for(let a2 = 0, o2 = t.length; a2 < o2; a2++){
        let c = t[a2];
        if (c.POSITION !== void 0 && (n = !0), c.NORMAL !== void 0 && (s243 = !0), n && s243) break;
    }
    if (!n && !s243) return Promise.resolve(f);
    let r = [], i = [];
    for(let a1 = 0, o1 = t.length; a1 < o1; a1++){
        let c = t[a1];
        if (n) {
            let u = c.POSITION !== void 0 ? e.getDependency("accessor", c.POSITION) : f.attributes.position;
            r.push(u);
        }
        if (s243) {
            let u = c.NORMAL !== void 0 ? e.getDependency("accessor", c.NORMAL) : f.attributes.normal;
            i.push(u);
        }
    }
    return Promise.all([
        Promise.all(r),
        Promise.all(i)
    ]).then(function(a) {
        let o = a[0], c = a[1];
        return n && (f.morphAttributes.position = o), s243 && (f.morphAttributes.normal = c), f.morphTargetsRelative = !0, f;
    });
}
function Ht1(f, t) {
    if (f.updateMorphTargets(), t.weights !== void 0) for(let e = 0, n = t.weights.length; e < n; e++)f.morphTargetInfluences[e] = t.weights[e];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
        let e = t.extras.targetNames;
        if (f.morphTargetInfluences.length === e.length) {
            f.morphTargetDictionary = {};
            for(let n = 0, s321 = e.length; n < s321; n++)f.morphTargetDictionary[e[n]] = n;
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
}
function vt1(f) {
    let t = f.extensions && f.extensions[g.KHR_DRACO_MESH_COMPRESSION], e;
    return t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ae(t.attributes) : e = f.indices + ":" + ae(f.attributes) + ":" + f.mode, e;
}
function ae(f) {
    let t = "", e = Object.keys(f).sort();
    for(let n = 0, s337 = e.length; n < s337; n++)t += e[n] + ":" + f[e[n]] + ";";
    return t;
}
function J(f) {
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
var ve = class {
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
        }, this.textureCache = {}, this.nodeNamesUsed = {}, typeof createImageBitmap < "u" && /Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !1 ? this.textureLoader = new $h(this.options.manager) : this.textureLoader = new Jh(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new $t(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
    }
    setExtensions(t) {
        this.extensions = t;
    }
    setPlugins(t) {
        this.plugins = t;
    }
    parse(t, e) {
        let n = this, s338 = this.json, r = this.extensions;
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
                scene: i[0][s338.scene || 0],
                scenes: i[0],
                animations: i[1],
                cameras: i[2],
                asset: s338.asset,
                parser: n,
                userData: {}
            };
            D(r, a, s338), I(a, s338), Promise.all(n._invokeAll(function(o) {
                return o.afterRoot && o.afterRoot(a);
            })).then(function() {
                t(a);
            });
        }).catch(e);
    }
    _markDefs() {
        let t = this.json.nodes || [], e = this.json.skins || [], n = this.json.meshes || [];
        for(let s339 = 0, r = e.length; s339 < r; s339++){
            let i = e[s339].joints;
            for(let a = 0, o = i.length; a < o; a++)t[i[a]].isBone = !0;
        }
        for(let s1 = 0, r1 = t.length; s1 < r1; s1++){
            let i = t[s1];
            i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (n[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
        }
    }
    _addNodeRef(t, e) {
        e !== void 0 && (t.refs[e] === void 0 && (t.refs[e] = t.uses[e] = 0), t.refs[e]++);
    }
    _getNodeRef(t, e, n) {
        if (t.refs[e] <= 1) return n;
        let s340 = n.clone(), r = (i, a)=>{
            let o = this.associations.get(i);
            o != null && this.associations.set(a, o);
            for (let [c, u] of i.children.entries())r(u, a.children[c]);
        };
        return r(n, s340), s340.name += "_instance_" + t.uses[e]++, s340;
    }
    _invokeOne(t) {
        let e = Object.values(this.plugins);
        e.push(this);
        for(let n = 0; n < e.length; n++){
            let s341 = t(e[n]);
            if (s341) return s341;
        }
        return null;
    }
    _invokeAll(t) {
        let e = Object.values(this.plugins);
        e.unshift(this);
        let n = [];
        for(let s342 = 0; s342 < e.length; s342++){
            let r = t(e[s342]);
            r && n.push(r);
        }
        return n;
    }
    getDependency(t, e) {
        let n = t + ":" + e, s343 = this.cache.get(n);
        if (!s343) {
            switch(t){
                case "scene":
                    s343 = this.loadScene(e);
                    break;
                case "node":
                    s343 = this.loadNode(e);
                    break;
                case "mesh":
                    s343 = this._invokeOne(function(r) {
                        return r.loadMesh && r.loadMesh(e);
                    });
                    break;
                case "accessor":
                    s343 = this.loadAccessor(e);
                    break;
                case "bufferView":
                    s343 = this._invokeOne(function(r) {
                        return r.loadBufferView && r.loadBufferView(e);
                    });
                    break;
                case "buffer":
                    s343 = this.loadBuffer(e);
                    break;
                case "material":
                    s343 = this._invokeOne(function(r) {
                        return r.loadMaterial && r.loadMaterial(e);
                    });
                    break;
                case "texture":
                    s343 = this._invokeOne(function(r) {
                        return r.loadTexture && r.loadTexture(e);
                    });
                    break;
                case "skin":
                    s343 = this.loadSkin(e);
                    break;
                case "animation":
                    s343 = this.loadAnimation(e);
                    break;
                case "camera":
                    s343 = this.loadCamera(e);
                    break;
                default:
                    throw new Error("Unknown type: " + t);
            }
            this.cache.add(n, s343);
        }
        return s343;
    }
    getDependencies(t) {
        let e = this.cache.get(t);
        if (!e) {
            let n = this, s344 = this.json[t + (t === "mesh" ? "es" : "s")] || [];
            e = Promise.all(s344.map(function(r, i) {
                return n.getDependency(t, i);
            })), this.cache.add(t, e);
        }
        return e;
    }
    loadBuffer(t) {
        let e = this.json.buffers[t], n = this.fileLoader;
        if (e.type && e.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
        if (e.uri === void 0 && t === 0) return Promise.resolve(this.extensions[g.KHR_BINARY_GLTF].body);
        let s345 = this.options;
        return new Promise(function(r, i) {
            n.load(Vs.resolveURL(e.uri, s345.path), r, void 0, function() {
                i(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
            });
        });
    }
    loadBufferView(t) {
        let e = this.json.bufferViews[t];
        return this.getDependency("buffer", e.buffer).then(function(n) {
            let s346 = e.byteLength || 0, r = e.byteOffset || 0;
            return n.slice(r, r + s346);
        });
    }
    loadAccessor(t) {
        let e = this, n = this.json, s347 = this.json.accessors[t];
        if (s347.bufferView === void 0 && s347.sparse === void 0) return Promise.resolve(null);
        let r = [];
        return s347.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s347.bufferView)) : r.push(null), s347.sparse !== void 0 && (r.push(this.getDependency("bufferView", s347.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", s347.sparse.values.bufferView))), Promise.all(r).then(function(i) {
            let a = i[0], o = oe[s347.type], c = G[s347.componentType], u = c.BYTES_PER_ELEMENT, l = u * o, h = s347.byteOffset || 0, d = s347.bufferView !== void 0 ? n.bufferViews[s347.bufferView].byteStride : void 0, A = s347.normalized === !0, T, m;
            if (d && d !== l) {
                let p = Math.floor(h / d), M = "InterleavedBuffer:" + s347.bufferView + ":" + s347.componentType + ":" + p + ":" + s347.count, R = e.cache.get(M);
                R || (T = new c(a, p * d, s347.count * d / u), R = new jn(T, d / u), e.cache.add(M, R)), m = new Rn(R, o, h % d / u, A);
            } else a === null ? T = new c(s347.count * o) : T = new c(a, h, s347.count * o), m = new ze(T, o, A);
            if (s347.sparse !== void 0) {
                let p = oe.SCALAR, M = G[s347.sparse.indices.componentType], R = s347.sparse.indices.byteOffset || 0, P40 = s347.sparse.values.byteOffset || 0, N = new M(i[1], R, s347.sparse.count * p), S = new c(i[2], P40, s347.sparse.count * o);
                a !== null && (m = new ze(m.array.slice(), m.itemSize, m.normalized));
                for(let x = 0, C = N.length; x < C; x++){
                    let F = N[x];
                    if (m.setX(F, S[x * o]), o >= 2 && m.setY(F, S[x * o + 1]), o >= 3 && m.setZ(F, S[x * o + 2]), o >= 4 && m.setW(F, S[x * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                }
            }
            return m;
        });
    }
    loadTexture(t) {
        let e = this.json, n = this.options, s348 = e.textures[t], r = e.images[s348.source], i = this.textureLoader;
        if (r.uri) {
            let a = n.manager.getHandler(r.uri);
            a !== null && (i = a);
        }
        return this.loadTextureImage(t, r, i);
    }
    loadTextureImage(t, e, n) {
        let s349 = this, r = this.json, i = this.options, a = r.textures[t], o = (e.uri || e.bufferView) + ":" + a.sampler;
        if (this.textureCache[o]) return this.textureCache[o];
        let c = self.URL || self.webkitURL, u = e.uri || "", l = !1;
        if (e.bufferView !== void 0) u = s349.getDependency("bufferView", e.bufferView).then(function(d) {
            l = !0;
            let A = new Blob([
                d
            ], {
                type: e.mimeType
            });
            return u = c.createObjectURL(A), u;
        });
        else if (e.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
        let h = Promise.resolve(u).then(function(d) {
            return new Promise(function(A, T) {
                let m = A;
                n.isImageBitmapLoader === !0 && (m = function(p) {
                    let M = new ct(p);
                    M.needsUpdate = !0, A(M);
                }), n.load(Vs.resolveURL(d, i.path), m, void 0, T);
            });
        }).then(function(d) {
            l === !0 && c.revokeObjectURL(u), d.flipY = !1, a.name && (d.name = a.name);
            let T = (r.samplers || {})[a.sampler] || {};
            return d.magFilter = re[T.magFilter] || nt, d.minFilter = re[T.minFilter] || Gi, d.wrapS = ie[T.wrapS] || zs, d.wrapT = ie[T.wrapT] || zs, s349.associations.set(d, {
                textures: t
            }), d;
        }).catch(function() {
            return console.error("THREE.GLTFLoader: Couldn't load texture", u), null;
        });
        return this.textureCache[o] = h, h;
    }
    assignTexture(t, e, n) {
        let s350 = this;
        return this.getDependency("texture", n.index).then(function(r) {
            if (n.texCoord !== void 0 && n.texCoord != 0 && !(e === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + e + " not yet supported."), s350.extensions[g.KHR_TEXTURE_TRANSFORM]) {
                let i = n.extensions !== void 0 ? n.extensions[g.KHR_TEXTURE_TRANSFORM] : void 0;
                if (i) {
                    let a = s350.associations.get(r);
                    r = s350.extensions[g.KHR_TEXTURE_TRANSFORM].extendTexture(r, i), s350.associations.set(r, a);
                }
            }
            return t[e] = r, r;
        });
    }
    assignFinalMaterial(t) {
        let e = t.geometry, n = t.material, s351 = e.attributes.tangent === void 0, r = e.attributes.color !== void 0, i = e.attributes.normal === void 0;
        if (t.isPoints) {
            let a = "PointsMaterial:" + n.uuid, o = this.cache.get(a);
            o || (o = new Kn, pt.prototype.copy.call(o, n), o.color.copy(n.color), o.map = n.map, o.sizeAttenuation = !1, this.cache.add(a, o)), n = o;
        } else if (t.isLine) {
            let a = "LineBasicMaterial:" + n.uuid, o = this.cache.get(a);
            o || (o = new mt, pt.prototype.copy.call(o, n), o.color.copy(n.color), this.cache.add(a, o)), n = o;
        }
        if (s351 || r || i) {
            let a = "ClonedMaterial:" + n.uuid + ":";
            n.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), s351 && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), i && (a += "flat-shading:");
            let o = this.cache.get(a);
            o || (o = n.clone(), r && (o.vertexColors = !0), i && (o.flatShading = !0), s351 && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a, o), this.associations.set(o, this.associations.get(n))), n = o;
        }
        n.aoMap && e.attributes.uv2 === void 0 && e.attributes.uv !== void 0 && e.setAttribute("uv2", e.attributes.uv), t.material = n;
    }
    getMaterialType() {
        return po;
    }
    loadMaterial(t) {
        let e = this, n = this.json, s352 = this.extensions, r = n.materials[t], i, a = {}, o = r.extensions || {}, c = [];
        if (o[g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            let l = s352[g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            i = l.getMaterialType(), c.push(l.extendParams(a, r, e));
        } else if (o[g.KHR_MATERIALS_UNLIT]) {
            let l = s352[g.KHR_MATERIALS_UNLIT];
            i = l.getMaterialType(), c.push(l.extendParams(a, r, e));
        } else {
            let l = r.pbrMetallicRoughness || {};
            if (a.color = new ne(1, 1, 1), a.opacity = 1, Array.isArray(l.baseColorFactor)) {
                let h = l.baseColorFactor;
                a.color.fromArray(h), a.opacity = h[3];
            }
            l.baseColorTexture !== void 0 && c.push(e.assignTexture(a, "map", l.baseColorTexture)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (c.push(e.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), c.push(e.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), i = this._invokeOne(function(h) {
                return h.getMaterialType && h.getMaterialType(t);
            }), c.push(Promise.all(this._invokeAll(function(h) {
                return h.extendMaterialParams && h.extendMaterialParams(t, a);
            })));
        }
        r.doubleSided === !0 && (a.side = Pi);
        let u = r.alphaMode || q.OPAQUE;
        if (u === q.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, a.alphaWrite = !1, u === q.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && i !== un && (c.push(e.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Z(1, 1), r.normalTexture.scale !== void 0)) {
            let l = r.normalTexture.scale;
            a.normalScale.set(l, l);
        }
        return r.occlusionTexture !== void 0 && i !== un && (c.push(e.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && i !== un && (a.emissive = new ne().fromArray(r.emissiveFactor)), r.emissiveTexture !== void 0 && i !== un && c.push(e.assignTexture(a, "emissiveMap", r.emissiveTexture)), Promise.all(c).then(function() {
            let l;
            return i === V ? l = s352[g.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : l = new i(a), r.name && (l.name = r.name), l.map && (l.map.encoding = Ze), l.emissiveMap && (l.emissiveMap.encoding = Ze), I(l, r), e.associations.set(l, {
                materials: t
            }), r.extensions && D(s352, l, r), l;
        });
    }
    createUniqueName(t) {
        let e = Ue.sanitizeNodeName(t || ""), n = e;
        for(let s353 = 1; this.nodeNamesUsed[n]; ++s353)n = e + "_" + s353;
        return this.nodeNamesUsed[n] = !0, n;
    }
    loadGeometries(t) {
        let e = this, n = this.extensions, s354 = this.primitiveCache;
        function r(a) {
            return n[g.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, e).then(function(o) {
                return ce(o, a, e);
            });
        }
        let i = [];
        for(let a3 = 0, o3 = t.length; a3 < o3; a3++){
            let c = t[a3], u = vt1(c), l = s354[u];
            if (l) i.push(l.promise);
            else {
                let h;
                c.extensions && c.extensions[g.KHR_DRACO_MESH_COMPRESSION] ? h = r(c) : h = ce(new Me, c, e), s354[u] = {
                    primitive: c,
                    promise: h
                }, i.push(h);
            }
        }
        return Promise.all(i);
    }
    loadMesh(t) {
        let e = this, n = this.json, s355 = this.extensions, r = n.meshes[t], i = r.primitives, a = [];
        for(let o4 = 0, c1 = i.length; o4 < c1; o4++){
            let u = i[o4].material === void 0 ? Ct1(this.cache) : this.getDependency("material", i[o4].material);
            a.push(u);
        }
        return a.push(e.loadGeometries(i)), Promise.all(a).then(function(o) {
            let c = o.slice(0, o.length - 1), u = o[o.length - 1], l = [];
            for(let d = 0, A = u.length; d < A; d++){
                let T = u[d], m = i[d], p, M = c[d];
                if (m.mode === y.TRIANGLES || m.mode === y.TRIANGLE_STRIP || m.mode === y.TRIANGLE_FAN || m.mode === void 0) p = r.isSkinnedMesh === !0 ? new so(T, M) : new lt(T, M), p.isSkinnedMesh === !0 && !p.geometry.attributes.skinWeight.normalized && p.normalizeSkinWeights(), m.mode === y.TRIANGLE_STRIP ? p.geometry = le(p.geometry, Py) : m.mode === y.TRIANGLE_FAN && (p.geometry = le(p.geometry, Dy));
                else if (m.mode === y.LINES) p = new Tt(T, M);
                else if (m.mode === y.LINE_STRIP) p = new an(T, M);
                else if (m.mode === y.LINE_LOOP) p = new wa(T, M);
                else if (m.mode === y.POINTS) p = new Ur(T, M);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
                Object.keys(p.geometry.morphAttributes).length > 0 && Ht1(p, r), p.name = e.createUniqueName(r.name || "mesh_" + t), I(p, r), m.extensions && D(s355, p, m), e.assignFinalMaterial(p), l.push(p);
            }
            for(let d1 = 0, A1 = l.length; d1 < A1; d1++)e.associations.set(l[d1], {
                meshes: t,
                primitives: d1
            });
            if (l.length === 1) return l[0];
            let h = new Wn;
            e.associations.set(h, {
                meshes: t
            });
            for(let d2 = 0, A2 = l.length; d2 < A2; d2++)h.add(l[d2]);
            return h;
        });
    }
    loadCamera(t) {
        let e, n = this.json.cameras[t], s356 = n[n.type];
        if (!s356) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
        }
        return n.type === "perspective" ? e = new ft(t0.radToDeg(s356.yfov), s356.aspectRatio || 1, s356.znear || 1, s356.zfar || 2000000) : n.type === "orthographic" && (e = new Nr(-s356.xmag, s356.xmag, s356.ymag, -s356.ymag, s356.znear, s356.zfar)), n.name && (e.name = this.createUniqueName(n.name)), I(e, n), Promise.resolve(e);
    }
    loadSkin(t) {
        let e = this.json.skins[t], n = {
            joints: e.joints
        };
        return e.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", e.inverseBindMatrices).then(function(s357) {
            return n.inverseBindMatrices = s357, n;
        });
    }
    loadAnimation(t) {
        let n = this.json.animations[t], s358 = [], r = [], i = [], a = [], o = [];
        for(let c2 = 0, u4 = n.channels.length; c2 < u4; c2++){
            let l = n.channels[c2], h = n.samplers[l.sampler], d = l.target, A = d.node !== void 0 ? d.node : d.id, T = n.parameters !== void 0 ? n.parameters[h.input] : h.input, m = n.parameters !== void 0 ? n.parameters[h.output] : h.output;
            s358.push(this.getDependency("node", A)), r.push(this.getDependency("accessor", T)), i.push(this.getDependency("accessor", m)), a.push(h), o.push(d);
        }
        return Promise.all([
            Promise.all(s358),
            Promise.all(r),
            Promise.all(i),
            Promise.all(a),
            Promise.all(o)
        ]).then(function(c) {
            let u = c[0], l = c[1], h = c[2], d = c[3], A = c[4], T = [];
            for(let p = 0, M = u.length; p < M; p++){
                let R = u[p], P41 = l[p], N = h[p], S = d[p], x = A[p];
                if (R === void 0) continue;
                R.updateMatrix(), R.matrixAutoUpdate = !0;
                let C;
                switch(w1[x.path]){
                    case w1.weights:
                        C = Cr;
                        break;
                    case w1.rotation:
                        C = Xi;
                        break;
                    case w1.position:
                    case w1.scale:
                    default:
                        C = Lr;
                        break;
                }
                let F = R.name ? R.name : R.uuid, Ue1 = S.interpolation !== void 0 ? Ot1[S.interpolation] : Hs, K = [];
                w1[x.path] === w1.weights ? R.traverse(function(_) {
                    _.morphTargetInfluences && K.push(_.name ? _.name : _.uuid);
                }) : K.push(F);
                let H = N.array;
                if (N.normalized) {
                    let _ = J(H.constructor), B = new Float32Array(H.length);
                    for(let L = 0, $ = H.length; L < $; L++)B[L] = H[L] * _;
                    H = B;
                }
                for(let _1 = 0, B = K.length; _1 < B; _1++){
                    let L = new C(K[_1] + "." + w1[x.path], P41.array, H, Ue1);
                    S.interpolation === "CUBICSPLINE" && (L.createInterpolant = function(De) {
                        let ke = this instanceof Xi ? He : b;
                        return new ke(this.times, this.values, this.getValueSize() / 3, De);
                    }, L.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), T.push(L);
                }
            }
            let m = n.name ? n.name : "animation_" + t;
            return new Pr(m, void 0, T);
        });
    }
    createNodeMesh(t) {
        let e = this.json, n = this, s359 = e.nodes[t];
        return s359.mesh === void 0 ? null : n.getDependency("mesh", s359.mesh).then(function(r) {
            let i = n._getNodeRef(n.meshCache, s359.mesh, r);
            return s359.weights !== void 0 && i.traverse(function(a) {
                if (!!a.isMesh) for(let o = 0, c = s359.weights.length; o < c; o++)a.morphTargetInfluences[o] = s359.weights[o];
            }), i;
        });
    }
    loadNode(t) {
        let e = this.json, n = this.extensions, s360 = this, r = e.nodes[t], i = r.name ? s360.createUniqueName(r.name) : "";
        return (function() {
            let a = [], o = s360._invokeOne(function(c) {
                return c.createNodeMesh && c.createNodeMesh(t);
            });
            return o && a.push(o), r.camera !== void 0 && a.push(s360.getDependency("camera", r.camera).then(function(c) {
                return s360._getNodeRef(s360.cameraCache, r.camera, c);
            })), s360._invokeAll(function(c) {
                return c.createNodeAttachment && c.createNodeAttachment(t);
            }).forEach(function(c) {
                a.push(c);
            }), Promise.all(a);
        })().then(function(a) {
            let o;
            if (r.isBone === !0 ? o = new oo : a.length > 1 ? o = new Wn : a.length === 1 ? o = a[0] : o = new Fe, o !== a[0]) for(let c = 0, u = a.length; c < u; c++)o.add(a[c]);
            if (r.name && (o.userData.name = r.name, o.name = i), I(o, r), r.extensions && D(n, o, r), r.matrix !== void 0) {
                let c = new de;
                c.fromArray(r.matrix), o.applyMatrix4(c);
            } else r.translation !== void 0 && o.position.fromArray(r.translation), r.rotation !== void 0 && o.quaternion.fromArray(r.rotation), r.scale !== void 0 && o.scale.fromArray(r.scale);
            return s360.associations.has(o) || s360.associations.set(o, {}), s360.associations.get(o).nodes = t, o;
        });
    }
    loadScene(t) {
        let e = this.json, n = this.extensions, s361 = this.json.scenes[t], r = this, i = new Wn;
        s361.name && (i.name = r.createUniqueName(s361.name)), I(i, s361), s361.extensions && D(n, i, s361);
        let a = s361.nodes || [], o = [];
        for(let c3 = 0, u5 = a.length; c3 < u5; c3++)o.push(Pe(a[c3], i, e, r));
        return Promise.all(o).then(function() {
            let c = (u)=>{
                let l = new Map;
                for (let [h1, d3] of r.associations)(h1 instanceof pt || h1 instanceof ct) && l.set(h1, d3);
                return u.traverse((h)=>{
                    let d = r.associations.get(h);
                    d != null && l.set(h, d);
                }), l;
            };
            return r.associations = c(i), i;
        });
    }
};
function Pe(f, t, e, n) {
    let s362 = e.nodes[f];
    return n.getDependency("node", f).then(function(r) {
        if (s362.skin === void 0) return r;
        let i;
        return n.getDependency("skin", s362.skin).then(function(a) {
            i = a;
            let o = [];
            for(let c = 0, u = i.joints.length; c < u; c++)o.push(n.getDependency("node", i.joints[c]));
            return Promise.all(o);
        }).then(function(a) {
            return r.traverse(function(o) {
                if (!o.isMesh) return;
                let c = [], u = [];
                for(let l = 0, h = a.length; l < h; l++){
                    let d = a[l];
                    if (d) {
                        c.push(d);
                        let A = new de;
                        i.inverseBindMatrices !== void 0 && A.fromArray(i.inverseBindMatrices.array, l * 16), u.push(A);
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', i.joints[l]);
                }
                o.bind(new ao(c, u), o.matrixWorld);
            }), r;
        });
    }).then(function(r) {
        t.add(r);
        let i = [];
        if (s362.children) {
            let a = s362.children;
            for(let o = 0, c = a.length; o < c; o++){
                let u = a[o];
                i.push(Pe(u, r, e, n));
            }
        }
        return Promise.all(i);
    });
}
function Pt1(f, t, e) {
    let n = t.attributes, s363 = new It;
    if (n.POSITION !== void 0) {
        let a = e.json.accessors[n.POSITION], o = a.min, c = a.max;
        if (o !== void 0 && c !== void 0) {
            if (s363.set(new w(o[0], o[1], o[2]), new w(c[0], c[1], c[2])), a.normalized) {
                let u = J(G[a.componentType]);
                s363.min.multiplyScalar(u), s363.max.multiplyScalar(u);
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return;
        }
    } else return;
    let r = t.targets;
    if (r !== void 0) {
        let a = new w, o = new w;
        for(let c = 0, u = r.length; c < u; c++){
            let l = r[c];
            if (l.POSITION !== void 0) {
                let h = e.json.accessors[l.POSITION], d = h.min, A = h.max;
                if (d !== void 0 && A !== void 0) {
                    if (o.setX(Math.max(Math.abs(d[0]), Math.abs(A[0]))), o.setY(Math.max(Math.abs(d[1]), Math.abs(A[1]))), o.setZ(Math.max(Math.abs(d[2]), Math.abs(A[2]))), h.normalized) {
                        let T = J(G[h.componentType]);
                        o.multiplyScalar(T);
                    }
                    a.max(o);
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            }
        }
        s363.expandByVector(a);
    }
    f.boundingBox = s363;
    let i = new Dn;
    s363.getCenter(i.center), i.radius = s363.min.distanceTo(s363.max) / 2, f.boundingSphere = i;
}
function ce(f, t, e) {
    let n = t.attributes, s364 = [];
    function r(i, a) {
        return e.getDependency("accessor", i).then(function(o) {
            f.setAttribute(a, o);
        });
    }
    for(let i1 in n){
        let a = Q[i1] || i1.toLowerCase();
        a in f.attributes || s364.push(r(n[i1], a));
    }
    if (t.indices !== void 0 && !f.index) {
        let i = e.getDependency("accessor", t.indices).then(function(a) {
            f.setIndex(a);
        });
        s364.push(i);
    }
    return I(f, t), Pt1(f, t, e), Promise.all(s364).then(function() {
        return t.targets !== void 0 ? Ft1(f, t.targets, e) : f;
    });
}
function le(f, t) {
    let e = f.getIndex();
    if (e === null) {
        let i = [], a = f.getAttribute("position");
        if (a !== void 0) {
            for(let o = 0; o < a.count; o++)i.push(o);
            f.setIndex(i), e = f.getIndex();
        } else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), f;
    }
    let n = e.count - 2, s365 = [];
    if (t === Dy) for(let i = 1; i <= n; i++)s365.push(e.getX(0)), s365.push(e.getX(i)), s365.push(e.getX(i + 1));
    else for(let i2 = 0; i2 < n; i2++)i2 % 2 === 0 ? (s365.push(e.getX(i2)), s365.push(e.getX(i2 + 1)), s365.push(e.getX(i2 + 2))) : (s365.push(e.getX(i2 + 2)), s365.push(e.getX(i2 + 1)), s365.push(e.getX(i2)));
    s365.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    let r = f.clone();
    return r.setIndex(s365), r;
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
        const destroyers = events.map((event)=>event.on(callback)
        );
        const destroy1 = ()=>{
            destroyers.forEach((destroy)=>destroy()
            );
        };
        return destroy1;
    }
    static onceFirst(callback, events) {
        const destroyers = [];
        const destroy2 = ()=>{
            destroyers.forEach((destroy)=>destroy()
            );
        };
        const cb = ()=>{
            callback();
            destroyers.forEach((destroy)=>destroy()
            );
        };
        events.forEach((event)=>{
            destroyers.push(event.once(cb));
        });
        return destroy2;
    }
    clear() {
        this.callbacks = [];
    }
}
var w2 = new WeakMap, P = class extends Et {
    constructor(e){
        super(e);
        this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
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
    load(e, s366, i, r) {
        let n = new $t(this.manager);
        n.setPath(this.path), n.setResponseType("arraybuffer"), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials), n.load(e, (t)=>{
            let o = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: !1
            };
            this.decodeGeometry(t, o).then(s366).catch(r);
        }, i, r);
    }
    decodeDracoFile(e, s367, i, r) {
        let n = {
            attributeIDs: i || this.defaultAttributeIDs,
            attributeTypes: r || this.defaultAttributeTypes,
            useUniqueIDs: !!i
        };
        this.decodeGeometry(e, n).then(s367);
    }
    decodeGeometry(e, s368) {
        for(let a1 in s368.attributeTypes){
            let h = s368.attributeTypes[a1];
            h.BYTES_PER_ELEMENT !== void 0 && (s368.attributeTypes[a1] = h.name);
        }
        let i = JSON.stringify(s368);
        if (w2.has(e)) {
            let a = w2.get(e);
            if (a.key === i) return a.promise;
            if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
        }
        let r, n = this.workerNextTaskID++, t = e.byteLength, o = this._getWorker(n, t).then((a)=>(r = a, new Promise((h, d)=>{
                r._callbacks[n] = {
                    resolve: h,
                    reject: d
                }, r.postMessage({
                    type: "decode",
                    id: n,
                    taskConfig: s368,
                    buffer: e
                }, [
                    e
                ]);
            }))
        ).then((a)=>this._createGeometry(a.geometry)
        );
        return o.catch(()=>!0
        ).then(()=>{
            r && n && this._releaseTask(r, n);
        }), w2.set(e, {
            key: i,
            promise: o
        }), o;
    }
    _createGeometry(e) {
        let s369 = new Me;
        e.index && s369.setIndex(new ze(e.index.array, 1));
        for(let i = 0; i < e.attributes.length; i++){
            let r = e.attributes[i], n = r.name, t = r.array, o = r.itemSize;
            s369.setAttribute(n, new ze(t, o));
        }
        return s369;
    }
    _loadLibrary(e, s370) {
        let i = new $t(this.manager);
        return i.setPath(this.decoderPath), i.setResponseType(s370), i.setWithCredentials(this.withCredentials), new Promise((r, n)=>{
            i.load(e, r, void 0, n);
        });
    }
    preload() {
        return this._initDecoder(), this;
    }
    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        let e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", s371 = [];
        return e ? s371.push(this._loadLibrary("draco_decoder.js", "text")) : (s371.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), s371.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(s371).then((i)=>{
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
    _getWorker(e, s372) {
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
            return i._taskCosts[e] = s372, i._taskLoad += s372, i;
        });
    }
    _releaseTask(e, s373) {
        e._taskLoad -= e._taskCosts[s373], delete e._callbacks[s373], delete e._taskCosts[s373];
    }
    debug() {
        console.log("Task load: ", this.workerPool.map((e)=>e._taskLoad
        ));
    }
    dispose() {
        for(let e = 0; e < this.workerPool.length; ++e)this.workerPool[e].terminate();
        return this.workerPool.length = 0, this;
    }
};
function D1() {
    let g95, e;
    onmessage = function(t) {
        let o = t.data;
        switch(o.type){
            case "init":
                g95 = o.decoderConfig, e = new Promise(function(d) {
                    g95.onModuleLoaded = function(u) {
                        d({
                            draco: u
                        });
                    }, DracoDecoderModule(g95);
                });
                break;
            case "decode":
                let a = o.buffer, h = o.taskConfig;
                e.then((d)=>{
                    let u = d.draco, c = new u.Decoder, y79 = new u.DecoderBuffer;
                    y79.Init(new Int8Array(a), a.byteLength);
                    try {
                        let l = s374(u, c, y79, h), f = l.attributes.map((m)=>m.array.buffer
                        );
                        l.index && f.push(l.index.array.buffer), self.postMessage({
                            type: "decode",
                            id: o.id,
                            geometry: l
                        }, f);
                    } catch (l) {
                        console.error(l), self.postMessage({
                            type: "error",
                            id: o.id,
                            error: l.message
                        });
                    } finally{
                        u.destroy(y79), u.destroy(c);
                    }
                });
                break;
        }
    };
    function s374(t, o, a, h) {
        let d = h.attributeIDs, u = h.attributeTypes, c, y80, l = o.GetEncodedGeometryType(a);
        if (l === t.TRIANGULAR_MESH) c = new t.Mesh, y80 = o.DecodeBufferToMesh(a, c);
        else if (l === t.POINT_CLOUD) c = new t.PointCloud, y80 = o.DecodeBufferToPointCloud(a, c);
        else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
        if (!y80.ok() || c.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + y80.error_msg());
        let f = {
            index: null,
            attributes: []
        };
        for(let m in d){
            let b72 = self[u[m]], p, _;
            if (h.useUniqueIDs) _ = d[m], p = o.GetAttributeByUniqueId(c, _);
            else {
                if (_ = o.GetAttributeId(c, t[d[m]]), _ === -1) continue;
                p = o.GetAttribute(c, _);
            }
            f.attributes.push(r(t, o, c, m, b72, p));
        }
        return l === t.TRIANGULAR_MESH && (f.index = i(t, o, c)), t.destroy(c), f;
    }
    function i(t, o, a) {
        let d = a.num_faces() * 3, u = d * 4, c = t._malloc(u);
        o.GetTrianglesUInt32Array(a, u, c);
        let y81 = new Uint32Array(t.HEAPF32.buffer, c, d).slice();
        return t._free(c), {
            array: y81,
            itemSize: 1
        };
    }
    function r(t, o, a, h, d, u) {
        let c = u.num_components(), l = a.num_points() * c, f = l * d.BYTES_PER_ELEMENT, m = n(t, d), b73 = t._malloc(f);
        o.GetAttributeDataArrayForAllPoints(a, u, m, f, b73);
        let p = new d(t.HEAPF32.buffer, b73, l).slice();
        return t._free(b73), {
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
const DRACO_LOADER = new P(new Ga()).setDecoderPath(`https://unpkg.com/three@0.${pa}.x/examples/js/libs/draco/gltf/`);
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
        this.clock = new tu();
        this.scene = new no();
        this.renderer = RENDERER_BY_ELEMENT.get(root) || new Xe({
            antialias: true,
            alpha: true
        });
        RENDERER_BY_ELEMENT.set(root, this.renderer);
        this.$destruct.once(()=>this.renderer.dispose.bind(this.renderer)
        );
        const { aspect: aspect1  } = this.getViewportSize();
        this.camera = new ft(options.fieldOfView, aspect1, 0.1, 1000);
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
        this.controls = new me(this.camera, this.renderer.domElement);
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
        this.raycaster = new oy();
        root.appendChild(this.renderer.domElement);
        this.$destruct.once(()=>root.removeChild(this.renderer.domElement)
        );
        const handleResize = this.$resize.emit.bind(this.$resize);
        globalThis.addEventListener('resize', handleResize);
        this.$destruct.once(()=>globalThis.removeEventListener('resize', handleResize)
        );
        const handleCameraChange = this.$camera.emit.bind(this.$camera);
        this.controls.addEventListener('change', handleCameraChange);
        this.$destruct.once(()=>this.controls.removeEventListener('change', handleCameraChange)
        );
        const handleClick = this._handleClick.bind(this);
        this.root.addEventListener('click', handleClick);
        this.$destruct.once(()=>this.root.removeEventListener('click', handleClick)
        );
    }
    destructor() {
        this.$destruct.emit();
    }
    addAxisHelper(v = new w(0, 0, 0), size = 1) {
        const axesHelper = new mu(size);
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
    _handleClick(event) {
        this.$click.emit(event);
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
        const loader = new bt1().setDRACOLoader(DRACO_LOADER);
        return new Promise((resolve, reject)=>loader.load(path, (gltf)=>{
                this.scene.add(gltf.scene);
                gltf.scene.scale.set(2, 2, 2);
                gltf.scene.position.x = 0;
                gltf.scene.position.y = 0;
                gltf.scene.position.z = 0;
                resolve(gltf);
            }, (xhr)=>{
                console.log(xhr.loaded / xhr.total * 100 + '% loaded');
            }, reject)
        );
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
    start() {
        console.group('Setup scenario');
        this.setCameraPosition(new w(0, 0, -6));
        this.setCameraFocusOnVector3(new w(0, 0, 0));
        this.setLightMode(this.darkMode);
        this.startLowRes();
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
        const ambient = new Za(16777215, 0.3);
        this.scene.add(ambient);
        const directional1 = new Ya(16777215, 0.8);
        directional1.position.set(1, 1, 1).normalize();
        this.scene.add(directional1);
        const directional2 = new Ya(16777215, 0.7);
        directional2.position.set(-1, 1, -1).normalize();
        this.scene.add(directional2);
        const gltf = await this.addGltf('gltf/pizza-low-res.gltf');
        const applyMaterialToMesh = ()=>{
            const material = new Ia({
                color: this.darkMode ? 13421772 : 3355443
            });
            gltf.scene.traverse((o)=>{
                if (o instanceof lt) {
                    o.material = material;
                }
            });
        };
        applyMaterialToMesh();
        this.$detach.on(this.$light.on(applyMaterialToMesh));
    }
    startHighRes() {
        const ambient = new Za(16777215, 0.8);
        this.scene.add(ambient);
        const directional1 = new Ya(16777215, 1.4);
        directional1.position.set(0.3, 0, -1).normalize();
        this.scene.add(directional1);
        const directional2 = new Ya(16777215, 1.4);
        directional2.position.set(-0.3, 0, -1).normalize();
        this.scene.add(directional2);
        this.addGltf('gltf/pizza-hi-res.gltf');
    }
}
export { Scenario as Scenario };
