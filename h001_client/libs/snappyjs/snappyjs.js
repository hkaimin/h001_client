(function e(t, n, r) { function s(o, u) { if (!n[o]) {
    if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a)
            return a(o, !0);
        if (i)
            return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
    }
    var l = n[o] = { exports: {} };
    t[o][0].call(l.exports, function (e) { var n = t[o][1][e]; return s(n ? n : e); }, l, l.exports, e, t, n, r);
} return n[o].exports; } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++)
    s(r[o]); return s; })({ 1: [function (require, module, exports) {
            var SnappyJS = window.SnappyJS || {};
            SnappyJS.uncompress = require("./index").uncompress, SnappyJS.compress = require("./index").compress, window.SnappyJS = SnappyJS;
        }, { "./index": 2 }], 2: [function (require, module, exports) {
            "use strict";
            function isNode() { return "object" == typeof process && "object" == typeof process.versions && "undefined" != typeof process.versions.node ? !0 : !1; }
            function isUint8Array(r) { return r instanceof Uint8Array && (!is_node || !Buffer.isBuffer(r)); }
            function isArrayBuffer(r) { return r instanceof ArrayBuffer; }
            function isBuffer(r) { return is_node ? Buffer.isBuffer(r) : !1; }
            function uncompress(r) { if (!isUint8Array(r) && !isArrayBuffer(r) && !isBuffer(r))
                throw new TypeError(TYPE_ERROR_MSG); var e = !1, s = !1; isUint8Array(r) ? e = !0 : isArrayBuffer(r) && (s = !0, r = new Uint8Array(r)); var n = new SnappyDecompressor(r), o = n.readUncompressedLength(); if (-1 === o)
                throw new Error("Invalid Snappy bitstream"); var f, i; if (e) {
                if (f = new Uint8Array(o), !n.uncompressToBuffer(f))
                    throw new Error("Invalid Snappy bitstream");
            }
            else if (s) {
                if (f = new ArrayBuffer(o), i = new Uint8Array(f), !n.uncompressToBuffer(i))
                    throw new Error("Invalid Snappy bitstream");
            }
            else if (f = new Buffer(o), !n.uncompressToBuffer(f))
                throw new Error("Invalid Snappy bitstream"); return f; }
            function compress(r) { if (!isUint8Array(r) && !isArrayBuffer(r) && !isBuffer(r))
                throw new TypeError(TYPE_ERROR_MSG); var e = !1, s = !1; isUint8Array(n) ? e = !0 : isArrayBuffer(r) && (s = !0, r = new Uint8Array(r)); var n, o, f, i = new SnappyCompressor(r), p = i.maxCompressedLength(); return e ? (n = new Uint8Array(p), f = i.compressToBuffer(n)) : s ? (n = new ArrayBuffer(p), o = new Uint8Array(n), f = i.compressToBuffer(o)) : (n = new Buffer(p), f = i.compressToBuffer(n)), n.slice(0, f); }
            var is_node = isNode(), SnappyDecompressor = require("./snappy_decompressor").SnappyDecompressor, SnappyCompressor = require("./snappy_compressor").SnappyCompressor, TYPE_ERROR_MSG = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
            exports.uncompress = uncompress, exports.compress = compress;
        }, { "./snappy_compressor": 3, "./snappy_decompressor": 4 }], 3: [function (require, module, exports) {
            "use strict";
            function hashFunc(r, e) { return 506832829 * r >>> e; }
            function load32(r, e) { return r[e] + (r[e + 1] << 8) + (r[e + 2] << 16) + (r[e + 3] << 24); }
            function equals32(r, e, a) { return r[e] === r[a] && r[e + 1] === r[a + 1] && r[e + 2] === r[a + 2] && r[e + 3] === r[a + 3]; }
            function copyBytes(r, e, a, t, n) { var o; for (o = 0; n > o; o++)
                a[t + o] = r[e + o]; }
            function emitLiteral(r, e, a, t, n) { return 60 >= a ? (t[n] = a - 1 << 2, n += 1) : 256 > a ? (t[n] = 240, t[n + 1] = a - 1, n += 2) : (t[n] = 244, t[n + 1] = a - 1 & 255, t[n + 2] = a - 1 >>> 8, n += 3), copyBytes(r, e, t, n, a), n + a; }
            function emitCopyLessThan64(r, e, a, t) { return 12 > t && 2048 > a ? (r[e] = 1 + (t - 4 << 2) + (a >>> 8 << 5), r[e + 1] = 255 & a, e + 2) : (r[e] = 2 + (t - 1 << 2), r[e + 1] = 255 & a, r[e + 2] = a >>> 8, e + 3); }
            function emitCopy(r, e, a, t) { for (; t >= 68;)
                e = emitCopyLessThan64(r, e, a, 64), t -= 64; return t > 64 && (e = emitCopyLessThan64(r, e, a, 60), t -= 60), emitCopyLessThan64(r, e, a, t); }
            function compressFragment(r, e, a, t, n) { for (var o = 1; a >= 1 << o && MAX_HASH_TABLE_BITS >= o;)
                o += 1; o -= 1; var s = 32 - o; "undefined" == typeof global_hash_tables[o] && (global_hash_tables[o] = new Uint16Array(1 << o)); var i, h = global_hash_tables[o]; for (i = 0; i < h.length; i++)
                h[i] = 0; var u, p, l, f, c, y, m, _, L, C, B, S, b = e + a, d = e, A = e, T = !0, g = 15; if (a >= g)
                for (u = b - g, e += 1, l = hashFunc(load32(r, e), s); T;) {
                    y = 32, f = e;
                    do {
                        if (e = f, p = l, m = y >>> 5, y += 1, f = e + m, e > u) {
                            T = !1;
                            break;
                        }
                        l = hashFunc(load32(r, f), s), c = d + h[p], h[p] = e - d;
                    } while (!equals32(r, e, c));
                    if (!T)
                        break;
                    n = emitLiteral(r, A, e - A, t, n);
                    do {
                        for (_ = e, L = 4; b > e + L && r[e + L] === r[c + L];)
                            L += 1;
                        if (e += L, C = _ - c, n = emitCopy(t, n, C, L), A = e, e >= u) {
                            T = !1;
                            break;
                        }
                        B = hashFunc(load32(r, e - 1), s), h[B] = e - 1 - d, S = hashFunc(load32(r, e), s), c = d + h[S], h[S] = e - d;
                    } while (equals32(r, e, c));
                    if (!T)
                        break;
                    e += 1, l = hashFunc(load32(r, e), s);
                } return b > A && (n = emitLiteral(r, A, b - A, t, n)), n; }
            function putVarint(r, e, a) { do
                e[a] = 127 & r, r >>>= 7, r > 0 && (e[a] += 128), a += 1;
            while (r > 0); return a; }
            function SnappyCompressor(r) { this.array = r; }
            var BLOCK_LOG = 16, BLOCK_SIZE = 1 << BLOCK_LOG, MAX_HASH_TABLE_BITS = 14, global_hash_tables = new Array(MAX_HASH_TABLE_BITS + 1);
            SnappyCompressor.prototype.maxCompressedLength = function () { var r = this.array.length; return 32 + r + Math.floor(r / 6); }, SnappyCompressor.prototype.compressToBuffer = function (r) { var e, a = this.array, t = a.length, n = 0, o = 0; for (o = putVarint(t, r, o); t > n;)
                e = Math.min(t - n, BLOCK_SIZE), o = compressFragment(a, n, e, r, o), n += e; return o; }, exports.SnappyCompressor = SnappyCompressor;
        }, {}], 4: [function (require, module, exports) {
            "use strict";
            function copyBytes(r, e, s, t, o) { var p; for (p = 0; o > p; p++)
                s[t + p] = r[e + p]; }
            function selfCopyBytes(r, e, s, t) { var o; for (o = 0; t > o; o++)
                r[e + o] = r[e - s + o]; }
            function SnappyDecompressor(r) { this.array = r, this.pos = 0; }
            var WORD_MASK = [0, 255, 65535, 16777215, 4294967295];
            SnappyDecompressor.prototype.readUncompressedLength = function () { for (var r, e, s = 0, t = 0; 32 > t && this.pos < this.array.length;) {
                if (r = this.array[this.pos], this.pos += 1, e = 127 & r, e << t >>> t !== e)
                    return -1;
                if (s |= e << t, 128 > r)
                    return s;
                t += 7;
            } return -1; }, SnappyDecompressor.prototype.uncompressToBuffer = function (r) { for (var e, s, t, o, p = this.array, n = p.length, i = this.pos, a = 0; i < p.length;)
                if (e = p[i], i += 1, 0 === (3 & e)) {
                    if (s = (e >>> 2) + 1, s > 60) {
                        if (i + 3 >= n)
                            return !1;
                        t = s - 60, s = p[i] + (p[i + 1] << 8) + (p[i + 2] << 16) + (p[i + 3] << 24), s = (s & WORD_MASK[t]) + 1, i += t;
                    }
                    if (i + s > n)
                        return !1;
                    copyBytes(p, i, r, a, s), i += s, a += s;
                }
                else {
                    switch (3 & e) {
                        case 1:
                            s = (e >>> 2 & 7) + 4, o = p[i] + (e >>> 5 << 8), i += 1;
                            break;
                        case 2:
                            if (i + 1 >= n)
                                return !1;
                            s = (e >>> 2) + 1, o = p[i] + (p[i + 1] << 8), i += 2;
                            break;
                        case 3:
                            if (i + 3 >= n)
                                return !1;
                            s = (e >>> 2) + 1, o = p[i] + (p[i + 1] << 8) + (p[i + 2] << 16) + (p[i + 3] << 24), i += 4;
                    }
                    if (0 === o || o > a)
                        return !1;
                    selfCopyBytes(r, a, o, s), a += s;
                } return !0; }, exports.SnappyDecompressor = SnappyDecompressor;
        }, {}] }, {}, [1]);
