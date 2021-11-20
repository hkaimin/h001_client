var LZMA = function () {
    "use strict";
    function e(e, r) { postMessage({ action: It, cbn: r, result: e }); }
    function r(e) { var r = []; return r[e - 1] = void 0, r; }
    function t(e, r) { return s(e[0] + r[0], e[1] + r[1]); }
    function o(e, r) { return c(~~Math.max(Math.min(e[1] / Nt, 2147483647), -2147483648) & ~~Math.max(Math.min(r[1] / Nt, 2147483647), -2147483648), a(e) & a(r)); }
    function n(e, r) { var t, o; return e[0] == r[0] && e[1] == r[1] ? 0 : (t = e[1] < 0, o = r[1] < 0, t && !o ? -1 : !t && o ? 1 : p(e, r)[1] < 0 ? -1 : 1); }
    function s(e, r) {
        var t, o;
        for (r %= 0x10000000000000000, e %= 0x10000000000000000, t = r % Nt, o = Math.floor(e / Nt) * Nt, r = r - t + o, e = e - o + t; 0 > e;)
            e += Nt, r -= Nt;
        for (; e > 4294967295;)
            e -= Nt, r += Nt;
        for (r %= 0x10000000000000000; r > 0x7fffffff00000000;)
            r -= 0x10000000000000000;
        for (; -0x8000000000000000 > r;)
            r += 0x10000000000000000;
        return [e, r];
    }
    function i(e, r) { return e[0] == r[0] && e[1] == r[1]; }
    function _(e) { return e >= 0 ? [e, 0] : [e + Nt, -Nt]; }
    function a(e) { return e[0] >= 2147483648 ? ~~Math.max(Math.min(e[0] - Nt, 2147483647), -2147483648) : ~~Math.max(Math.min(e[0], 2147483647), -2147483648); }
    function c(e, r) { var t, o; return t = e * Nt, o = r, 0 > r && (o += Nt), [o, t]; }
    function u(e) { return 30 >= e ? 1 << e : u(30) * u(e - 30); }
    function f(e, r) {
        var t, o, n, s;
        if (r &= 63, i(e, At))
            return r ? Ht : e;
        if (e[1] < 0)
            throw new Error("Neg");
        return s = u(r), o = e[1] * s % 0x10000000000000000, n = e[0] * s, t = n - n % Nt, o += t, n -= t, o >= 0x8000000000000000 && (o -= 0x10000000000000000), [n, o];
    }
    function m(e, r) { var t; return r &= 63, t = u(r), s(Math.floor(e[0] / t), e[1] / t); }
    function d(e, r) { var o; return r &= 63, o = m(e, r), e[1] < 0 && (o = t(o, f([2, 0], 63 - r))), o; }
    function p(e, r) { return s(e[0] - r[0], e[1] - r[1]); }
    function h(e, r) { return e.buf = r, e.pos = 0, e.count = r.length, e; }
    function P(e) { return e.pos >= e.count ? -1 : 255 & e.buf[e.pos++]; }
    function l(e, r, t, o) { return e.pos >= e.count ? -1 : (o = Math.min(o, e.count - e.pos), R(e.buf, e.pos, r, t, o), e.pos += o, o); }
    function v(e) { return e.buf = r(32), e.count = 0, e; }
    function B(e) { var r = e.buf; return r.length = e.count, r; }
    function S(e, r) { e.buf[e.count++] = r << 24 >> 24; }
    function g(e, r, t, o) { R(r, t, e.buf, e.count, o), e.count += o; }
    function k(e, r, t, o, n) {
        var s;
        for (s = r; t > s; ++s)
            o[n++] = e.charCodeAt(s);
    }
    function R(e, r, t, o, n) {
        for (var s = 0; n > s; ++s)
            t[o + s] = e[r + s];
    }
    function M(e, r) { Or(r, 1 << e.s), r._numFastBytes = e.f, Ar(r, e.m), r._numLiteralPosStateBits = 0, r._numLiteralContextBits = 3, r._posStateBits = 2, r._posStateMask = 3; }
    function D(e, r, t, o, s) {
        var i, _;
        if (n(o, Ot) < 0)
            throw new Error("invalid length " + o);
        for (e.length_0 = o, i = Mr({}), M(s, i), i._writeEndMark = 1, Hr(i, t), _ = 0; 64 > _; _ += 8)
            S(t, 255 & a(m(o, _)));
        e.chunker = (i._needReleaseMFStream = 0, i._inStream = r, i._finished = 0, Rr(i), i._rangeEncoder.Stream = t, zr(i), br(i), Dr(i), i._lenEncoder._tableSize = i._numFastBytes + 1 - 2, Jr(i._lenEncoder, 1 << i._posStateBits), i._repMatchLenEncoder._tableSize = i._numFastBytes + 1 - 2, Jr(i._repMatchLenEncoder, 1 << i._posStateBits), void (i.nowPos64 = Ht), U({}, i));
    }
    function b(e, r, t) { return e.output = v({}), D(e, h({}, r), e.output, _(r.length), t), e; }
    function w(e, r, t) {
        var o, n, s, i, a = "", c = [];
        for (n = 0; 5 > n; ++n) {
            if (s = P(r), -1 == s)
                throw new Error("truncated input");
            c[n] = s << 24 >> 24;
        }
        if (o = sr({}), !_r(o, c))
            throw new Error("corrupted input");
        for (n = 0; 64 > n; n += 8) {
            if (s = P(r), -1 == s)
                throw new Error("truncated input");
            s = s.toString(16), 1 == s.length && (s = "0" + s), a = s + "" + a;
        }
        /^0+$|^f+$/i.test(a) ? e.length_0 = Ot : (i = parseInt(a, 16), i > 4294967295 ? e.length_0 = Ot : e.length_0 = _(i)), e.chunker = or(o, r, t, e.length_0);
    }
    function y(e, r) { return e.output = v({}), w(e, h({}, r), e.output), e; }
    function E(e, t, o, n) { var s; e._keepSizeBefore = t, e._keepSizeAfter = o, s = t + o + n, (null == e._bufferBase || e._blockSize != s) && (e._bufferBase = null, e._blockSize = s, e._bufferBase = r(e._blockSize)), e._pointerToLastSafePosition = e._blockSize - o; }
    function C(e, r) { return e._bufferBase[e._bufferOffset + e._pos + r]; }
    function L(e, r, t, o) {
        var n, s;
        for (e._streamEndWasReached && e._pos + r + o > e._streamPos && (o = e._streamPos - (e._pos + r)), ++t, s = e._bufferOffset + e._pos + r, n = 0; o > n && e._bufferBase[s + n] == e._bufferBase[s + n - t]; ++n)
            ;
        return n;
    }
    function z(e) { return e._streamPos - e._pos; }
    function F(e) {
        var r, t, o;
        for (o = e._bufferOffset + e._pos - e._keepSizeBefore, o > 0 && --o, t = e._bufferOffset + e._streamPos - o, r = 0; t > r; ++r)
            e._bufferBase[r] = e._bufferBase[o + r];
        e._bufferOffset -= o;
    }
    function I(e) { var r; ++e._pos, e._pos > e._posLimit && (r = e._bufferOffset + e._pos, r > e._pointerToLastSafePosition && F(e), x(e)); }
    function x(e) {
        var r, t, o;
        if (!e._streamEndWasReached)
            for (;;) {
                if (o = -e._bufferOffset + e._blockSize - e._streamPos, !o)
                    return;
                if (r = l(e._stream, e._bufferBase, e._bufferOffset + e._streamPos, o), -1 == r)
                    return e._posLimit = e._streamPos, t = e._bufferOffset + e._posLimit, t > e._pointerToLastSafePosition && (e._posLimit = e._pointerToLastSafePosition - e._bufferOffset), void (e._streamEndWasReached = 1);
                e._streamPos += r, e._streamPos >= e._pos + e._keepSizeAfter && (e._posLimit = e._streamPos - e._keepSizeAfter);
            }
    }
    function N(e, r) { e._bufferOffset += r, e._posLimit -= r, e._pos -= r, e._streamPos -= r; }
    function O(e, t, o, n, s) { var i, _, a; 1073741567 > t && (e._cutValue = 16 + (n >> 1), a = ~~((t + o + n + s) / 2) + 256, E(e, t + o, n + s, a), e._matchMaxLen = n, i = t + 1, e._cyclicBufferSize != i && (e._son = r(2 * (e._cyclicBufferSize = i))), _ = 65536, e.HASH_ARRAY && (_ = t - 1, _ |= _ >> 1, _ |= _ >> 2, _ |= _ >> 4, _ |= _ >> 8, _ >>= 1, _ |= 65535, _ > 16777216 && (_ >>= 1), e._hashMask = _, ++_, _ += e.kFixHashSize), _ != e._hashSizeSum && (e._hash = r(e._hashSizeSum = _))); }
    function A(e, r) {
        var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k;
        if (e._pos + e._matchMaxLen <= e._streamPos)
            h = e._matchMaxLen;
        else if (h = e._streamPos - e._pos, h < e.kMinMatchCheck)
            return G(e), 0;
        for (v = 0, P = e._pos > e._cyclicBufferSize ? e._pos - e._cyclicBufferSize : 0, o = e._bufferOffset + e._pos, l = 1, c = 0, u = 0, e.HASH_ARRAY ? (k = Wt[255 & e._bufferBase[o]] ^ 255 & e._bufferBase[o + 1], c = 1023 & k, k ^= (255 & e._bufferBase[o + 2]) << 8, u = 65535 & k, f = (k ^ Wt[255 & e._bufferBase[o + 3]] << 5) & e._hashMask) : f = 255 & e._bufferBase[o] ^ (255 & e._bufferBase[o + 1]) << 8, n = e._hash[e.kFixHashSize + f] || 0, e.HASH_ARRAY && (s = e._hash[c] || 0, i = e._hash[1024 + u] || 0, e._hash[c] = e._pos, e._hash[1024 + u] = e._pos, s > P && e._bufferBase[e._bufferOffset + s] == e._bufferBase[o] && (r[v++] = l = 2, r[v++] = e._pos - s - 1), i > P && e._bufferBase[e._bufferOffset + i] == e._bufferBase[o] && (i == s && (v -= 2), r[v++] = l = 3, r[v++] = e._pos - i - 1, s = i), 0 != v && s == n && (v -= 2, l = 1)), e._hash[e.kFixHashSize + f] = e._pos, S = (e._cyclicBufferPos << 1) + 1, g = e._cyclicBufferPos << 1, d = p = e.kNumHashDirectBytes, 0 != e.kNumHashDirectBytes && n > P && e._bufferBase[e._bufferOffset + n + e.kNumHashDirectBytes] != e._bufferBase[o + e.kNumHashDirectBytes] && (r[v++] = l = e.kNumHashDirectBytes, r[v++] = e._pos - n - 1), t = e._cutValue;;) {
            if (P >= n || 0 == t--) {
                e._son[S] = e._son[g] = 0;
                break;
            }
            if (a = e._pos - n, _ = (a <= e._cyclicBufferPos ? e._cyclicBufferPos - a : e._cyclicBufferPos - a + e._cyclicBufferSize) << 1, B = e._bufferOffset + n, m = p > d ? d : p, e._bufferBase[B + m] == e._bufferBase[o + m]) {
                for (; ++m != h && e._bufferBase[B + m] == e._bufferBase[o + m];)
                    ;
                if (m > l && (r[v++] = l = m, r[v++] = a - 1, m == h)) {
                    e._son[g] = e._son[_], e._son[S] = e._son[_ + 1];
                    break;
                }
            }
            (255 & e._bufferBase[B + m]) < (255 & e._bufferBase[o + m]) ? (e._son[g] = n, g = _ + 1, n = e._son[g], p = m) : (e._son[S] = n, S = _, n = e._son[S], d = m);
        }
        return G(e), v;
    }
    function H(e) { e._bufferOffset = 0, e._pos = 0, e._streamPos = 0, e._streamEndWasReached = 0, x(e), e._cyclicBufferPos = 0, N(e, -1); }
    function G(e) { var r; ++e._cyclicBufferPos >= e._cyclicBufferSize && (e._cyclicBufferPos = 0), I(e), 1073741823 == e._pos && (r = e._pos - e._cyclicBufferSize, W(e._son, 2 * e._cyclicBufferSize, r), W(e._hash, e._hashSizeSum, r), N(e, r)); }
    function W(e, r, t) {
        var o, n;
        for (o = 0; r > o; ++o)
            n = e[o] || 0, t >= n ? n = 0 : n -= t, e[o] = n;
    }
    function T(e, r) { e.HASH_ARRAY = r > 2, e.HASH_ARRAY ? (e.kNumHashDirectBytes = 0, e.kMinMatchCheck = 4, e.kFixHashSize = 66560) : (e.kNumHashDirectBytes = 2, e.kMinMatchCheck = 3, e.kFixHashSize = 0); }
    function Y(e, r) {
        var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v;
        do {
            if (e._pos + e._matchMaxLen <= e._streamPos)
                d = e._matchMaxLen;
            else if (d = e._streamPos - e._pos, d < e.kMinMatchCheck) {
                G(e);
                continue;
            }
            for (p = e._pos > e._cyclicBufferSize ? e._pos - e._cyclicBufferSize : 0, o = e._bufferOffset + e._pos, e.HASH_ARRAY ? (v = Wt[255 & e._bufferBase[o]] ^ 255 & e._bufferBase[o + 1], _ = 1023 & v, e._hash[_] = e._pos, v ^= (255 & e._bufferBase[o + 2]) << 8, a = 65535 & v, e._hash[1024 + a] = e._pos, c = (v ^ Wt[255 & e._bufferBase[o + 3]] << 5) & e._hashMask) : c = 255 & e._bufferBase[o] ^ (255 & e._bufferBase[o + 1]) << 8, n = e._hash[e.kFixHashSize + c], e._hash[e.kFixHashSize + c] = e._pos, P = (e._cyclicBufferPos << 1) + 1, l = e._cyclicBufferPos << 1, f = m = e.kNumHashDirectBytes, t = e._cutValue;;) {
                if (p >= n || 0 == t--) {
                    e._son[P] = e._son[l] = 0;
                    break;
                }
                if (i = e._pos - n, s = (i <= e._cyclicBufferPos ? e._cyclicBufferPos - i : e._cyclicBufferPos - i + e._cyclicBufferSize) << 1, h = e._bufferOffset + n, u = m > f ? f : m, e._bufferBase[h + u] == e._bufferBase[o + u]) {
                    for (; ++u != d && e._bufferBase[h + u] == e._bufferBase[o + u];)
                        ;
                    if (u == d) {
                        e._son[l] = e._son[s], e._son[P] = e._son[s + 1];
                        break;
                    }
                }
                (255 & e._bufferBase[h + u]) < (255 & e._bufferBase[o + u]) ? (e._son[l] = n, l = s + 1, n = e._son[l], m = u) : (e._son[P] = n, P = s, n = e._son[P], f = u);
            }
            G(e);
        } while (0 != --r);
    }
    function Z(e, r, t) {
        var o = e._pos - r - 1;
        for (0 > o && (o += e._windowSize); 0 != t; --t)
            o >= e._windowSize && (o = 0), e._buffer[e._pos++] = e._buffer[o++], e._pos >= e._windowSize && j(e);
    }
    function V(e, t) { (null == e._buffer || e._windowSize != t) && (e._buffer = r(t)), e._windowSize = t, e._pos = 0, e._streamPos = 0; }
    function j(e) { var r = e._pos - e._streamPos; r && (g(e._stream, e._buffer, e._streamPos, r), e._pos >= e._windowSize && (e._pos = 0), e._streamPos = e._pos); }
    function $(e, r) { var t = e._pos - r - 1; return 0 > t && (t += e._windowSize), e._buffer[t]; }
    function K(e, r) { e._buffer[e._pos++] = r, e._pos >= e._windowSize && j(e); }
    function q(e) { j(e), e._stream = null; }
    function J(e) { return e -= 2, 4 > e ? e : 3; }
    function Q(e) { return 4 > e ? 0 : 10 > e ? e - 3 : e - 6; }
    function U(e, r) { return e.encoder = r, e.decoder = null, e.alive = 1, e; }
    function X(e, r) { return e.decoder = r, e.encoder = null, e.alive = 1, e; }
    function er(e) {
        if (!e.alive)
            throw new Error("bad state");
        return e.encoder ? tr(e) : rr(e), e.alive;
    }
    function rr(e) {
        var r = nr(e.decoder);
        if (-1 == r)
            throw new Error("corrupted input");
        e.inBytesProcessed = Ot, e.outBytesProcessed = e.decoder.nowPos64, (r || n(e.decoder.outSize, Ht) >= 0 && n(e.decoder.nowPos64, e.decoder.outSize) >= 0) && (j(e.decoder.m_OutWindow), q(e.decoder.m_OutWindow), e.decoder.m_RangeDecoder.Stream = null, e.alive = 0);
    }
    function tr(e) { kr(e.encoder, e.encoder.processedInSize, e.encoder.processedOutSize, e.encoder.finished), e.inBytesProcessed = e.encoder.processedInSize[0], e.encoder.finished[0] && (Nr(e.encoder), e.alive = 0); }
    function or(e, r, t, o) { return e.m_RangeDecoder.Stream = r, q(e.m_OutWindow), e.m_OutWindow._stream = t, ir(e), e.state = 0, e.rep0 = 0, e.rep1 = 0, e.rep2 = 0, e.rep3 = 0, e.outSize = o, e.nowPos64 = Ht, e.prevByte = 0, X({}, e); }
    function nr(e) {
        var r, o, s, i, c, u;
        if (u = a(e.nowPos64) & e.m_PosStateMask, lt(e.m_RangeDecoder, e.m_IsMatchDecoders, (e.state << 4) + u)) {
            if (lt(e.m_RangeDecoder, e.m_IsRepDecoders, e.state))
                s = 0, lt(e.m_RangeDecoder, e.m_IsRepG0Decoders, e.state) ? (lt(e.m_RangeDecoder, e.m_IsRepG1Decoders, e.state) ? (lt(e.m_RangeDecoder, e.m_IsRepG2Decoders, e.state) ? (o = e.rep3, e.rep3 = e.rep2) : o = e.rep2, e.rep2 = e.rep1) : o = e.rep1, e.rep1 = e.rep0, e.rep0 = o) : lt(e.m_RangeDecoder, e.m_IsRep0LongDecoders, (e.state << 4) + u) || (e.state = e.state < 7 ? 9 : 11, s = 1), s || (s = fr(e.m_RepLenDecoder, e.m_RangeDecoder, u) + 2, e.state = e.state < 7 ? 8 : 11);
            else if (e.rep3 = e.rep2, e.rep2 = e.rep1, e.rep1 = e.rep0, s = 2 + fr(e.m_LenDecoder, e.m_RangeDecoder, u), e.state = e.state < 7 ? 7 : 10, c = _t(e.m_PosSlotDecoder[J(s)], e.m_RangeDecoder), c >= 4) {
                if (i = (c >> 1) - 1, e.rep0 = (2 | 1 & c) << i, 14 > c)
                    e.rep0 += ct(e.m_PosDecoders, e.rep0 - c - 1, e.m_RangeDecoder, i);
                else if (e.rep0 += vt(e.m_RangeDecoder, i - 4) << 4, e.rep0 += at(e.m_PosAlignDecoder, e.m_RangeDecoder), e.rep0 < 0)
                    return -1 == e.rep0 ? 1 : -1;
            }
            else
                e.rep0 = c;
            if (n(_(e.rep0), e.nowPos64) >= 0 || e.rep0 >= e.m_DictionarySizeCheck)
                return -1;
            Z(e.m_OutWindow, e.rep0, s), e.nowPos64 = t(e.nowPos64, _(s)), e.prevByte = $(e.m_OutWindow, 0);
        }
        else
            r = hr(e.m_LiteralDecoder, a(e.nowPos64), e.prevByte), e.state < 7 ? e.prevByte = lr(r, e.m_RangeDecoder) : e.prevByte = vr(r, e.m_RangeDecoder, $(e.m_OutWindow, e.rep0)), K(e.m_OutWindow, e.prevByte), e.state = Q(e.state), e.nowPos64 = t(e.nowPos64, Gt);
        return 0;
    }
    function sr(e) {
        e.m_OutWindow = {}, e.m_RangeDecoder = {}, e.m_IsMatchDecoders = r(192), e.m_IsRepDecoders = r(12), e.m_IsRepG0Decoders = r(12), e.m_IsRepG1Decoders = r(12), e.m_IsRepG2Decoders = r(12), e.m_IsRep0LongDecoders = r(192), e.m_PosSlotDecoder = r(4), e.m_PosDecoders = r(114), e.m_PosAlignDecoder = it({}, 4), e.m_LenDecoder = mr({}), e.m_RepLenDecoder = mr({}), e.m_LiteralDecoder = {};
        for (var t = 0; 4 > t; ++t)
            e.m_PosSlotDecoder[t] = it({}, 6);
        return e;
    }
    function ir(e) {
        e.m_OutWindow._streamPos = 0, e.m_OutWindow._pos = 0, St(e.m_IsMatchDecoders), St(e.m_IsRep0LongDecoders), St(e.m_IsRepDecoders), St(e.m_IsRepG0Decoders), St(e.m_IsRepG1Decoders), St(e.m_IsRepG2Decoders), St(e.m_PosDecoders), Pr(e.m_LiteralDecoder);
        for (var r = 0; 4 > r; ++r)
            St(e.m_PosSlotDecoder[r].Models);
        dr(e.m_LenDecoder), dr(e.m_RepLenDecoder), St(e.m_PosAlignDecoder.Models), Bt(e.m_RangeDecoder);
    }
    function _r(e, r) {
        var t, o, n, s, i, _, a;
        if (r.length < 5)
            return 0;
        for (a = 255 & r[0], n = a % 9, _ = ~~(a / 9), s = _ % 5, i = ~~(_ / 5), t = 0, o = 0; 4 > o; ++o)
            t += (255 & r[1 + o]) << 8 * o;
        return t > 99999999 || !cr(e, n, s, i) ? 0 : ar(e, t);
    }
    function ar(e, r) { return 0 > r ? 0 : (e.m_DictionarySize != r && (e.m_DictionarySize = r, e.m_DictionarySizeCheck = Math.max(e.m_DictionarySize, 1), V(e.m_OutWindow, Math.max(e.m_DictionarySizeCheck, 4096))), 1); }
    function cr(e, r, t, o) {
        if (r > 8 || t > 4 || o > 4)
            return 0;
        pr(e.m_LiteralDecoder, t, r);
        var n = 1 << o;
        return ur(e.m_LenDecoder, n), ur(e.m_RepLenDecoder, n), e.m_PosStateMask = n - 1, 1;
    }
    function ur(e, r) {
        for (; e.m_NumPosStates < r; ++e.m_NumPosStates)
            e.m_LowCoder[e.m_NumPosStates] = it({}, 3), e.m_MidCoder[e.m_NumPosStates] = it({}, 3);
    }
    function fr(e, r, t) {
        if (!lt(r, e.m_Choice, 0))
            return _t(e.m_LowCoder[t], r);
        var o = 8;
        return o += lt(r, e.m_Choice, 1) ? 8 + _t(e.m_HighCoder, r) : _t(e.m_MidCoder[t], r);
    }
    function mr(e) { return e.m_Choice = r(2), e.m_LowCoder = r(16), e.m_MidCoder = r(16), e.m_HighCoder = it({}, 8), e.m_NumPosStates = 0, e; }
    function dr(e) {
        St(e.m_Choice);
        for (var r = 0; r < e.m_NumPosStates; ++r)
            St(e.m_LowCoder[r].Models), St(e.m_MidCoder[r].Models);
        St(e.m_HighCoder.Models);
    }
    function pr(e, t, o) {
        var n, s;
        if (null == e.m_Coders || e.m_NumPrevBits != o || e.m_NumPosBits != t)
            for (e.m_NumPosBits = t, e.m_PosMask = (1 << t) - 1, e.m_NumPrevBits = o, s = 1 << e.m_NumPrevBits + e.m_NumPosBits, e.m_Coders = r(s), n = 0; s > n; ++n)
                e.m_Coders[n] = Br({});
    }
    function hr(e, r, t) { return e.m_Coders[((r & e.m_PosMask) << e.m_NumPrevBits) + ((255 & t) >>> 8 - e.m_NumPrevBits)]; }
    function Pr(e) {
        var r, t;
        for (t = 1 << e.m_NumPrevBits + e.m_NumPosBits, r = 0; t > r; ++r)
            St(e.m_Coders[r].m_Decoders);
    }
    function lr(e, r) {
        var t = 1;
        do
            t = t << 1 | lt(r, e.m_Decoders, t);
        while (256 > t);
        return t << 24 >> 24;
    }
    function vr(e, r, t) {
        var o, n, s = 1;
        do
            if (n = t >> 7 & 1, t <<= 1, o = lt(r, e.m_Decoders, (1 + n << 8) + s), s = s << 1 | o, n != o) {
                for (; 256 > s;)
                    s = s << 1 | lt(r, e.m_Decoders, s);
                break;
            }
        while (256 > s);
        return s << 24 >> 24;
    }
    function Br(e) { return e.m_Decoders = r(768), e; }
    function Sr(e, r) {
        var t, o, n, s;
        e._optimumEndIndex = r, n = e._optimum[r].PosPrev, o = e._optimum[r].BackPrev;
        do
            e._optimum[r].Prev1IsChar && (nt(e._optimum[n]), e._optimum[n].PosPrev = n - 1, e._optimum[r].Prev2 && (e._optimum[n - 1].Prev1IsChar = 0, e._optimum[n - 1].PosPrev = e._optimum[r].PosPrev2, e._optimum[n - 1].BackPrev = e._optimum[r].BackPrev2)), s = n, t = o, o = e._optimum[s].BackPrev, n = e._optimum[s].PosPrev, e._optimum[s].BackPrev = t, e._optimum[s].PosPrev = r, r = s;
        while (r > 0);
        return e.backRes = e._optimum[0].BackPrev, e._optimumCurrentIndex = e._optimum[0].PosPrev, e._optimumCurrentIndex;
    }
    function gr(e) {
        e._state = 0, e._previousByte = 0;
        for (var r = 0; 4 > r; ++r)
            e._repDistances[r] = 0;
    }
    function kr(e, r, o, s) {
        var c, u, f, m, d, h, P, l, v, B, S, g, k, R, M;
        if (r[0] = Ht, o[0] = Ht, s[0] = 1, e._inStream && (e._matchFinder._stream = e._inStream, H(e._matchFinder), e._needReleaseMFStream = 1, e._inStream = null), !e._finished) {
            if (e._finished = 1, R = e.nowPos64, i(e.nowPos64, Ht)) {
                if (!z(e._matchFinder))
                    return void wr(e, a(e.nowPos64));
                Ir(e), k = a(e.nowPos64) & e._posStateMask, gt(e._rangeEncoder, e._isMatch, (e._state << 4) + k, 0), e._state = Q(e._state), f = C(e._matchFinder, -e._additionalOffset), et(Ur(e._literalEncoder, a(e.nowPos64), e._previousByte), e._rangeEncoder, f), e._previousByte = f, --e._additionalOffset, e.nowPos64 = t(e.nowPos64, Gt);
            }
            if (!z(e._matchFinder))
                return void wr(e, a(e.nowPos64));
            for (;;) {
                if (P = yr(e, a(e.nowPos64)), B = e.backRes, k = a(e.nowPos64) & e._posStateMask, u = (e._state << 4) + k, 1 == P && -1 == B)
                    gt(e._rangeEncoder, e._isMatch, u, 0), f = C(e._matchFinder, -e._additionalOffset), M = Ur(e._literalEncoder, a(e.nowPos64), e._previousByte), e._state < 7 ? et(M, e._rangeEncoder, f) : (v = C(e._matchFinder, -e._repDistances[0] - 1 - e._additionalOffset), rt(M, e._rangeEncoder, v, f)), e._previousByte = f, e._state = Q(e._state);
                else {
                    if (gt(e._rangeEncoder, e._isMatch, u, 1), 4 > B) {
                        if (gt(e._rangeEncoder, e._isRep, e._state, 1), B ? (gt(e._rangeEncoder, e._isRepG0, e._state, 1), 1 == B ? gt(e._rangeEncoder, e._isRepG1, e._state, 0) : (gt(e._rangeEncoder, e._isRepG1, e._state, 1), gt(e._rangeEncoder, e._isRepG2, e._state, B - 2))) : (gt(e._rangeEncoder, e._isRepG0, e._state, 0), 1 == P ? gt(e._rangeEncoder, e._isRep0Long, u, 0) : gt(e._rangeEncoder, e._isRep0Long, u, 1)), 1 == P ? e._state = e._state < 7 ? 9 : 11 : ($r(e._repMatchLenEncoder, e._rangeEncoder, P - 2, k), e._state = e._state < 7 ? 8 : 11), m = e._repDistances[B], 0 != B) {
                            for (h = B; h >= 1; --h)
                                e._repDistances[h] = e._repDistances[h - 1];
                            e._repDistances[0] = m;
                        }
                    }
                    else {
                        for (gt(e._rangeEncoder, e._isRep, e._state, 0), e._state = e._state < 7 ? 7 : 10, $r(e._lenEncoder, e._rangeEncoder, P - 2, k), B -= 4, g = Wr(B), l = J(P), ft(e._posSlotEncoder[l], e._rangeEncoder, g), g >= 4 && (d = (g >> 1) - 1, c = (2 | 1 & g) << d, S = B - c, 14 > g ? ht(e._posEncoders, c - g - 1, e._rangeEncoder, d, S) : (kt(e._rangeEncoder, S >> 4, d - 4), dt(e._posAlignEncoder, e._rangeEncoder, 15 & S), ++e._alignPriceCount)), m = B, h = 3; h >= 1; --h)
                            e._repDistances[h] = e._repDistances[h - 1];
                        e._repDistances[0] = m, ++e._matchPriceCount;
                    }
                    e._previousByte = C(e._matchFinder, P - 1 - e._additionalOffset);
                }
                if (e._additionalOffset -= P, e.nowPos64 = t(e.nowPos64, _(P)), !e._additionalOffset) {
                    if (e._matchPriceCount >= 128 && br(e), e._alignPriceCount >= 16 && Dr(e), r[0] = e.nowPos64, o[0] = Rt(e._rangeEncoder), !z(e._matchFinder))
                        return void wr(e, a(e.nowPos64));
                    if (n(p(e.nowPos64, R), [4096, 0]) >= 0)
                        return e._finished = 0, void (s[0] = 0);
                }
            }
        }
    }
    function Rr(e) { var r, t; e._matchFinder || (r = {}, t = 4, e._matchFinderType || (t = 2), T(r, t), e._matchFinder = r), Qr(e._literalEncoder, e._numLiteralPosStateBits, e._numLiteralContextBits), (e._dictionarySize != e._dictionarySizePrev || e._numFastBytesPrev != e._numFastBytes) && (O(e._matchFinder, e._dictionarySize, 4096, e._numFastBytes, 274), e._dictionarySizePrev = e._dictionarySize, e._numFastBytesPrev = e._numFastBytes); }
    function Mr(e) {
        var t;
        for (e._repDistances = r(4), e._optimum = [], e._rangeEncoder = {}, e._isMatch = r(192), e._isRep = r(12), e._isRepG0 = r(12), e._isRepG1 = r(12), e._isRepG2 = r(12), e._isRep0Long = r(192), e._posSlotEncoder = [], e._posEncoders = r(114), e._posAlignEncoder = ut({}, 4), e._lenEncoder = Kr({}), e._repMatchLenEncoder = Kr({}), e._literalEncoder = {}, e._matchDistances = [], e._posSlotPrices = [], e._distancesPrices = [], e._alignPrices = r(16), e.reps = r(4), e.repLens = r(4), e.processedInSize = [Ht], e.processedOutSize = [Ht], e.finished = [0], e.properties = r(5), e.tempPrices = r(128), e._longestMatchLength = 0, e._matchFinderType = 1, e._numDistancePairs = 0, e._numFastBytesPrev = -1, e.backRes = 0, t = 0; 4096 > t; ++t)
            e._optimum[t] = {};
        for (t = 0; 4 > t; ++t)
            e._posSlotEncoder[t] = ut({}, 6);
        return e;
    }
    function Dr(e) {
        for (var r = 0; 16 > r; ++r)
            e._alignPrices[r] = pt(e._posAlignEncoder, r);
        e._alignPriceCount = 0;
    }
    function br(e) {
        var r, t, o, n, s, i, _, a;
        for (n = 4; 128 > n; ++n)
            i = Wr(n), o = (i >> 1) - 1, r = (2 | 1 & i) << o, e.tempPrices[n] = Pt(e._posEncoders, r - i - 1, o, n - r);
        for (s = 0; 4 > s; ++s) {
            for (t = e._posSlotEncoder[s], _ = s << 6, i = 0; i < e._distTableSize; ++i)
                e._posSlotPrices[_ + i] = mt(t, i);
            for (i = 14; i < e._distTableSize; ++i)
                e._posSlotPrices[_ + i] += (i >> 1) - 1 - 4 << 6;
            for (a = 128 * s, n = 0; 4 > n; ++n)
                e._distancesPrices[a + n] = e._posSlotPrices[_ + n];
            for (; 128 > n; ++n)
                e._distancesPrices[a + n] = e._posSlotPrices[_ + Wr(n)] + e.tempPrices[n];
        }
        e._matchPriceCount = 0;
    }
    function wr(e, r) {
        xr(e), Gr(e, r & e._posStateMask);
        for (var t = 0; 5 > t; ++t)
            Dt(e._rangeEncoder);
    }
    function yr(e, r) {
        var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k, R, M, D, b, w, y, E, F, I, x, N, O, A, H, G, W, T, Y, Z, V, j, $, K, q, J, U, X, er, rr;
        if (e._optimumEndIndex != e._optimumCurrentIndex)
            return p = e._optimum[e._optimumCurrentIndex].PosPrev - e._optimumCurrentIndex, e.backRes = e._optimum[e._optimumCurrentIndex].BackPrev, e._optimumCurrentIndex = e._optimum[e._optimumCurrentIndex].PosPrev, p;
        if (e._optimumCurrentIndex = e._optimumEndIndex = 0, e._longestMatchWasFound ? (d = e._longestMatchLength, e._longestMatchWasFound = 0) : d = Ir(e), y = e._numDistancePairs, b = z(e._matchFinder) + 1, 2 > b)
            return e.backRes = -1, 1;
        for (b > 273 && (b = 273), Z = 0, u = 0; 4 > u; ++u)
            e.reps[u] = e._repDistances[u], e.repLens[u] = L(e._matchFinder, -1, e.reps[u], 273), e.repLens[u] > e.repLens[Z] && (Z = u);
        if (e.repLens[Z] >= e._numFastBytes)
            return e.backRes = Z, p = e.repLens[Z], Fr(e, p - 1), p;
        if (d >= e._numFastBytes)
            return e.backRes = e._matchDistances[y - 1] + 4, Fr(e, d - 1), d;
        if (a = C(e._matchFinder, -1), v = C(e._matchFinder, -e._repDistances[0] - 1 - 1), 2 > d && a != v && e.repLens[Z] < 2)
            return e.backRes = -1, 1;
        if (e._optimum[0].State = e._state, A = r & e._posStateMask, e._optimum[1].Price = Yt[e._isMatch[(e._state << 4) + A] >>> 2] + ot(Ur(e._literalEncoder, r, e._previousByte), e._state >= 7, v, a), nt(e._optimum[1]), B = Yt[2048 - e._isMatch[(e._state << 4) + A] >>> 2], Y = B + Yt[2048 - e._isRep[e._state] >>> 2], v == a && (V = Y + Lr(e, e._state, A), V < e._optimum[1].Price && (e._optimum[1].Price = V, st(e._optimum[1]))), m = d >= e.repLens[Z] ? d : e.repLens[Z], 2 > m)
            return e.backRes = e._optimum[1].BackPrev, 1;
        e._optimum[1].PosPrev = 0, e._optimum[0].Backs0 = e.reps[0], e._optimum[0].Backs1 = e.reps[1], e._optimum[0].Backs2 = e.reps[2], e._optimum[0].Backs3 = e.reps[3], f = m;
        do
            e._optimum[f--].Price = 268435455;
        while (f >= 2);
        for (u = 0; 4 > u; ++u)
            if (T = e.repLens[u], !(2 > T)) {
                G = Y + Cr(e, u, e._state, A);
                do
                    s = G + qr(e._repMatchLenEncoder, T - 2, A), x = e._optimum[T], s < x.Price && (x.Price = s, x.PosPrev = 0, x.BackPrev = u, x.Prev1IsChar = 0);
                while (--T >= 2);
            }
        if (D = B + Yt[e._isRep[e._state] >>> 2], f = e.repLens[0] >= 2 ? e.repLens[0] + 1 : 2, d >= f) {
            for (E = 0; f > e._matchDistances[E];)
                E += 2;
            for (; c = e._matchDistances[E + 1], s = D + Er(e, c, f, A), x = e._optimum[f], s < x.Price && (x.Price = s, x.PosPrev = 0, x.BackPrev = c + 4, x.Prev1IsChar = 0), f != e._matchDistances[E] || (E += 2, E != y); ++f)
                ;
        }
        for (t = 0;;) {
            if (++t, t == m)
                return Sr(e, t);
            if (S = Ir(e), y = e._numDistancePairs, S >= e._numFastBytes)
                return e._longestMatchLength = S, e._longestMatchWasFound = 1, Sr(e, t);
            if (++r, O = e._optimum[t].PosPrev, e._optimum[t].Prev1IsChar ? (--O, e._optimum[t].Prev2 ? ($ = e._optimum[e._optimum[t].PosPrev2].State, $ = e._optimum[t].BackPrev2 < 4 ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10) : $ = e._optimum[O].State, $ = Q($)) : $ = e._optimum[O].State, O == t - 1 ? $ = e._optimum[t].BackPrev ? Q($) : 7 > $ ? 9 : 11 : (e._optimum[t].Prev1IsChar && e._optimum[t].Prev2 ? (O = e._optimum[t].PosPrev2, N = e._optimum[t].BackPrev2, $ = 7 > $ ? 8 : 11) : (N = e._optimum[t].BackPrev, $ = 4 > N ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10), I = e._optimum[O], 4 > N ? N ? 1 == N ? (e.reps[0] = I.Backs1, e.reps[1] = I.Backs0, e.reps[2] = I.Backs2, e.reps[3] = I.Backs3) : 2 == N ? (e.reps[0] = I.Backs2, e.reps[1] = I.Backs0, e.reps[2] = I.Backs1, e.reps[3] = I.Backs3) : (e.reps[0] = I.Backs3, e.reps[1] = I.Backs0, e.reps[2] = I.Backs1, e.reps[3] = I.Backs2) : (e.reps[0] = I.Backs0, e.reps[1] = I.Backs1, e.reps[2] = I.Backs2, e.reps[3] = I.Backs3) : (e.reps[0] = N - 4, e.reps[1] = I.Backs0, e.reps[2] = I.Backs1, e.reps[3] = I.Backs2)), e._optimum[t].State = $, e._optimum[t].Backs0 = e.reps[0], e._optimum[t].Backs1 = e.reps[1], e._optimum[t].Backs2 = e.reps[2], e._optimum[t].Backs3 = e.reps[3], _ = e._optimum[t].Price, a = C(e._matchFinder, -1), v = C(e._matchFinder, -e.reps[0] - 1 - 1), A = r & e._posStateMask, o = _ + Yt[e._isMatch[($ << 4) + A] >>> 2] + ot(Ur(e._literalEncoder, r, C(e._matchFinder, -2)), $ >= 7, v, a), R = e._optimum[t + 1], g = 0, o < R.Price && (R.Price = o, R.PosPrev = t, R.BackPrev = -1, R.Prev1IsChar = 0, g = 1), B = _ + Yt[2048 - e._isMatch[($ << 4) + A] >>> 2], Y = B + Yt[2048 - e._isRep[$] >>> 2], v != a || R.PosPrev < t && !R.BackPrev || (V = Y + (Yt[e._isRepG0[$] >>> 2] + Yt[e._isRep0Long[($ << 4) + A] >>> 2]), V <= R.Price && (R.Price = V, R.PosPrev = t, R.BackPrev = 0, R.Prev1IsChar = 0, g = 1)), w = z(e._matchFinder) + 1, w = w > 4095 - t ? 4095 - t : w, b = w, !(2 > b)) {
                if (b > e._numFastBytes && (b = e._numFastBytes), !g && v != a && (q = Math.min(w - 1, e._numFastBytes), P = L(e._matchFinder, 0, e.reps[0], q), P >= 2)) {
                    for (K = Q($), H = r + 1 & e._posStateMask, M = o + Yt[2048 - e._isMatch[(K << 4) + H] >>> 2] + Yt[2048 - e._isRep[K] >>> 2], F = t + 1 + P; F > m;)
                        e._optimum[++m].Price = 268435455;
                    s = M + (J = qr(e._repMatchLenEncoder, P - 2, H), J + Cr(e, 0, K, H)), x = e._optimum[F], s < x.Price && (x.Price = s, x.PosPrev = t + 1, x.BackPrev = 0, x.Prev1IsChar = 1, x.Prev2 = 0);
                }
                for (j = 2, W = 0; 4 > W; ++W)
                    if (h = L(e._matchFinder, -1, e.reps[W], b), !(2 > h)) {
                        l = h;
                        do {
                            for (; t + h > m;)
                                e._optimum[++m].Price = 268435455;
                            s = Y + (U = qr(e._repMatchLenEncoder, h - 2, A), U + Cr(e, W, $, A)), x = e._optimum[t + h], s < x.Price && (x.Price = s, x.PosPrev = t, x.BackPrev = W, x.Prev1IsChar = 0);
                        } while (--h >= 2);
                        if (h = l, W || (j = h + 1), w > h && (q = Math.min(w - 1 - h, e._numFastBytes), P = L(e._matchFinder, h, e.reps[W], q), P >= 2)) {
                            for (K = 7 > $ ? 8 : 11, H = r + h & e._posStateMask, n = Y + (X = qr(e._repMatchLenEncoder, h - 2, A), X + Cr(e, W, $, A)) + Yt[e._isMatch[(K << 4) + H] >>> 2] + ot(Ur(e._literalEncoder, r + h, C(e._matchFinder, h - 1 - 1)), 1, C(e._matchFinder, h - 1 - (e.reps[W] + 1)), C(e._matchFinder, h - 1)), K = Q(K), H = r + h + 1 & e._posStateMask, k = n + Yt[2048 - e._isMatch[(K << 4) + H] >>> 2], M = k + Yt[2048 - e._isRep[K] >>> 2], F = h + 1 + P; t + F > m;)
                                e._optimum[++m].Price = 268435455;
                            s = M + (er = qr(e._repMatchLenEncoder, P - 2, H), er + Cr(e, 0, K, H)), x = e._optimum[t + F], s < x.Price && (x.Price = s, x.PosPrev = t + h + 1, x.BackPrev = 0, x.Prev1IsChar = 1, x.Prev2 = 1, x.PosPrev2 = t, x.BackPrev2 = W);
                        }
                    }
                if (S > b) {
                    for (S = b, y = 0; S > e._matchDistances[y]; y += 2)
                        ;
                    e._matchDistances[y] = S, y += 2;
                }
                if (S >= j) {
                    for (D = B + Yt[e._isRep[$] >>> 2]; t + S > m;)
                        e._optimum[++m].Price = 268435455;
                    for (E = 0; j > e._matchDistances[E];)
                        E += 2;
                    for (h = j;; ++h)
                        if (i = e._matchDistances[E + 1], s = D + Er(e, i, h, A), x = e._optimum[t + h], s < x.Price && (x.Price = s, x.PosPrev = t, x.BackPrev = i + 4, x.Prev1IsChar = 0), h == e._matchDistances[E]) {
                            if (w > h && (q = Math.min(w - 1 - h, e._numFastBytes), P = L(e._matchFinder, h, i, q), P >= 2)) {
                                for (K = 7 > $ ? 7 : 10, H = r + h & e._posStateMask, n = s + Yt[e._isMatch[(K << 4) + H] >>> 2] + ot(Ur(e._literalEncoder, r + h, C(e._matchFinder, h - 1 - 1)), 1, C(e._matchFinder, h - (i + 1) - 1), C(e._matchFinder, h - 1)), K = Q(K), H = r + h + 1 & e._posStateMask, k = n + Yt[2048 - e._isMatch[(K << 4) + H] >>> 2], M = k + Yt[2048 - e._isRep[K] >>> 2], F = h + 1 + P; t + F > m;)
                                    e._optimum[++m].Price = 268435455;
                                s = M + (rr = qr(e._repMatchLenEncoder, P - 2, H), rr + Cr(e, 0, K, H)), x = e._optimum[t + F], s < x.Price && (x.Price = s, x.PosPrev = t + h + 1, x.BackPrev = 0, x.Prev1IsChar = 1, x.Prev2 = 1, x.PosPrev2 = t, x.BackPrev2 = i + 4);
                            }
                            if (E += 2, E == y)
                                break;
                        }
                }
            }
        }
    }
    function Er(e, r, t, o) { var n, s = J(t); return n = 128 > r ? e._distancesPrices[128 * s + r] : e._posSlotPrices[(s << 6) + Tr(r)] + e._alignPrices[15 & r], n + qr(e._lenEncoder, t - 2, o); }
    function Cr(e, r, t, o) { var n; return r ? (n = Yt[2048 - e._isRepG0[t] >>> 2], 1 == r ? n += Yt[e._isRepG1[t] >>> 2] : (n += Yt[2048 - e._isRepG1[t] >>> 2], n += bt(e._isRepG2[t], r - 2))) : (n = Yt[e._isRepG0[t] >>> 2], n += Yt[2048 - e._isRep0Long[(t << 4) + o] >>> 2]), n; }
    function Lr(e, r, t) { return Yt[e._isRepG0[r] >>> 2] + Yt[e._isRep0Long[(r << 4) + t] >>> 2]; }
    function zr(e) {
        gr(e), Mt(e._rangeEncoder), St(e._isMatch), St(e._isRep0Long), St(e._isRep), St(e._isRepG0), St(e._isRepG1), St(e._isRepG2), St(e._posEncoders), Xr(e._literalEncoder);
        for (var r = 0; 4 > r; ++r)
            St(e._posSlotEncoder[r].Models);
        Vr(e._lenEncoder, 1 << e._posStateBits), Vr(e._repMatchLenEncoder, 1 << e._posStateBits), St(e._posAlignEncoder.Models), e._longestMatchWasFound = 0, e._optimumEndIndex = 0, e._optimumCurrentIndex = 0, e._additionalOffset = 0;
    }
    function Fr(e, r) { r > 0 && (Y(e._matchFinder, r), e._additionalOffset += r); }
    function Ir(e) { var r = 0; return e._numDistancePairs = A(e._matchFinder, e._matchDistances), e._numDistancePairs > 0 && (r = e._matchDistances[e._numDistancePairs - 2], r == e._numFastBytes && (r += L(e._matchFinder, r - 1, e._matchDistances[e._numDistancePairs - 1], 273 - r))), ++e._additionalOffset, r; }
    function xr(e) { e._matchFinder && e._needReleaseMFStream && (e._matchFinder._stream = null, e._needReleaseMFStream = 0); }
    function Nr(e) { xr(e), e._rangeEncoder.Stream = null; }
    function Or(e, r) {
        e._dictionarySize = r;
        for (var t = 0; r > 1 << t; ++t)
            ;
        e._distTableSize = 2 * t;
    }
    function Ar(e, r) { var t = e._matchFinderType; e._matchFinderType = r, e._matchFinder && t != e._matchFinderType && (e._dictionarySizePrev = -1, e._matchFinder = null); }
    function Hr(e, r) {
        e.properties[0] = 9 * (5 * e._posStateBits + e._numLiteralPosStateBits) + e._numLiteralContextBits << 24 >> 24;
        for (var t = 0; 4 > t; ++t)
            e.properties[1 + t] = e._dictionarySize >> 8 * t << 24 >> 24;
        g(r, e.properties, 0, 5);
    }
    function Gr(e, r) {
        if (e._writeEndMark) {
            gt(e._rangeEncoder, e._isMatch, (e._state << 4) + r, 1), gt(e._rangeEncoder, e._isRep, e._state, 0), e._state = e._state < 7 ? 7 : 10, $r(e._lenEncoder, e._rangeEncoder, 0, r);
            var t = J(2);
            ft(e._posSlotEncoder[t], e._rangeEncoder, 63), kt(e._rangeEncoder, 67108863, 26), dt(e._posAlignEncoder, e._rangeEncoder, 15);
        }
    }
    function Wr(e) { return 2048 > e ? Tt[e] : 2097152 > e ? Tt[e >> 10] + 20 : Tt[e >> 20] + 40; }
    function Tr(e) { return 131072 > e ? Tt[e >> 6] + 12 : 134217728 > e ? Tt[e >> 16] + 32 : Tt[e >> 26] + 52; }
    function Yr(e, r, t, o) { 8 > t ? (gt(r, e._choice, 0, 0), ft(e._lowCoder[o], r, t)) : (t -= 8, gt(r, e._choice, 0, 1), 8 > t ? (gt(r, e._choice, 1, 0), ft(e._midCoder[o], r, t)) : (gt(r, e._choice, 1, 1), ft(e._highCoder, r, t - 8))); }
    function Zr(e) {
        e._choice = r(2), e._lowCoder = r(16), e._midCoder = r(16), e._highCoder = ut({}, 8);
        for (var t = 0; 16 > t; ++t)
            e._lowCoder[t] = ut({}, 3), e._midCoder[t] = ut({}, 3);
        return e;
    }
    function Vr(e, r) {
        St(e._choice);
        for (var t = 0; r > t; ++t)
            St(e._lowCoder[t].Models), St(e._midCoder[t].Models);
        St(e._highCoder.Models);
    }
    function jr(e, r, t, o, n) {
        var s, i, _, a, c;
        for (s = Yt[e._choice[0] >>> 2], i = Yt[2048 - e._choice[0] >>> 2], _ = i + Yt[e._choice[1] >>> 2], a = i + Yt[2048 - e._choice[1] >>> 2], c = 0, c = 0; 8 > c; ++c) {
            if (c >= t)
                return;
            o[n + c] = s + mt(e._lowCoder[r], c);
        }
        for (; 16 > c; ++c) {
            if (c >= t)
                return;
            o[n + c] = _ + mt(e._midCoder[r], c - 8);
        }
        for (; t > c; ++c)
            o[n + c] = a + mt(e._highCoder, c - 8 - 8);
    }
    function $r(e, r, t, o) { Yr(e, r, t, o), 0 == --e._counters[o] && (jr(e, o, e._tableSize, e._prices, 272 * o), e._counters[o] = e._tableSize); }
    function Kr(e) { return Zr(e), e._prices = [], e._counters = [], e; }
    function qr(e, r, t) { return e._prices[272 * t + r]; }
    function Jr(e, r) {
        for (var t = 0; r > t; ++t)
            jr(e, t, e._tableSize, e._prices, 272 * t), e._counters[t] = e._tableSize;
    }
    function Qr(e, t, o) {
        var n, s;
        if (null == e.m_Coders || e.m_NumPrevBits != o || e.m_NumPosBits != t)
            for (e.m_NumPosBits = t, e.m_PosMask = (1 << t) - 1, e.m_NumPrevBits = o, s = 1 << e.m_NumPrevBits + e.m_NumPosBits, e.m_Coders = r(s), n = 0; s > n; ++n)
                e.m_Coders[n] = tt({});
    }
    function Ur(e, r, t) { return e.m_Coders[((r & e.m_PosMask) << e.m_NumPrevBits) + ((255 & t) >>> 8 - e.m_NumPrevBits)]; }
    function Xr(e) {
        var r, t = 1 << e.m_NumPrevBits + e.m_NumPosBits;
        for (r = 0; t > r; ++r)
            St(e.m_Coders[r].m_Encoders);
    }
    function et(e, r, t) {
        var o, n, s = 1;
        for (n = 7; n >= 0; --n)
            o = t >> n & 1, gt(r, e.m_Encoders, s, o), s = s << 1 | o;
    }
    function rt(e, r, t, o) {
        var n, s, i, _, a = 1, c = 1;
        for (s = 7; s >= 0; --s)
            n = o >> s & 1, _ = c, a && (i = t >> s & 1, _ += 1 + i << 8, a = i == n), gt(r, e.m_Encoders, _, n), c = c << 1 | n;
    }
    function tt(e) { return e.m_Encoders = r(768), e; }
    function ot(e, r, t, o) {
        var n, s, i = 1, _ = 7, a = 0;
        if (r)
            for (; _ >= 0; --_)
                if (s = t >> _ & 1, n = o >> _ & 1, a += bt(e.m_Encoders[(1 + s << 8) + i], n), i = i << 1 | n, s != n) {
                    --_;
                    break;
                }
        for (; _ >= 0; --_)
            n = o >> _ & 1, a += bt(e.m_Encoders[i], n), i = i << 1 | n;
        return a;
    }
    function nt(e) { e.BackPrev = -1, e.Prev1IsChar = 0; }
    function st(e) { e.BackPrev = 0, e.Prev1IsChar = 0; }
    function it(e, t) { return e.NumBitLevels = t, e.Models = r(1 << t), e; }
    function _t(e, r) {
        var t, o = 1;
        for (t = e.NumBitLevels; 0 != t; --t)
            o = (o << 1) + lt(r, e.Models, o);
        return o - (1 << e.NumBitLevels);
    }
    function at(e, r) {
        var t, o, n = 1, s = 0;
        for (o = 0; o < e.NumBitLevels; ++o)
            t = lt(r, e.Models, n), n <<= 1, n += t, s |= t << o;
        return s;
    }
    function ct(e, r, t, o) {
        var n, s, i = 1, _ = 0;
        for (s = 0; o > s; ++s)
            n = lt(t, e, r + i), i <<= 1, i += n, _ |= n << s;
        return _;
    }
    function ut(e, t) { return e.NumBitLevels = t, e.Models = r(1 << t), e; }
    function ft(e, r, t) {
        var o, n, s = 1;
        for (n = e.NumBitLevels; 0 != n;)
            --n, o = t >>> n & 1, gt(r, e.Models, s, o), s = s << 1 | o;
    }
    function mt(e, r) {
        var t, o, n = 1, s = 0;
        for (o = e.NumBitLevels; 0 != o;)
            --o, t = r >>> o & 1, s += bt(e.Models[n], t), n = (n << 1) + t;
        return s;
    }
    function dt(e, r, t) {
        var o, n, s = 1;
        for (n = 0; n < e.NumBitLevels; ++n)
            o = 1 & t, gt(r, e.Models, s, o), s = s << 1 | o, t >>= 1;
    }
    function pt(e, r) {
        var t, o, n = 1, s = 0;
        for (o = e.NumBitLevels; 0 != o; --o)
            t = 1 & r, r >>>= 1, s += bt(e.Models[n], t), n = n << 1 | t;
        return s;
    }
    function ht(e, r, t, o, n) {
        var s, i, _ = 1;
        for (i = 0; o > i; ++i)
            s = 1 & n, gt(t, e, r + _, s), _ = _ << 1 | s, n >>= 1;
    }
    function Pt(e, r, t, o) {
        var n, s, i = 1, _ = 0;
        for (s = t; 0 != s; --s)
            n = 1 & o, o >>>= 1, _ += Yt[(2047 & (e[r + i] - n ^ -n)) >>> 2], i = i << 1 | n;
        return _;
    }
    function lt(e, r, t) { var o, n = r[t]; return o = (e.Range >>> 11) * n, (-2147483648 ^ e.Code) < (-2147483648 ^ o) ? (e.Range = o, r[t] = n + (2048 - n >>> 5) << 16 >> 16, -16777216 & e.Range || (e.Code = e.Code << 8 | P(e.Stream), e.Range <<= 8), 0) : (e.Range -= o, e.Code -= o, r[t] = n - (n >>> 5) << 16 >> 16, -16777216 & e.Range || (e.Code = e.Code << 8 | P(e.Stream), e.Range <<= 8), 1); }
    function vt(e, r) {
        var t, o, n = 0;
        for (t = r; 0 != t; --t)
            e.Range >>>= 1, o = e.Code - e.Range >>> 31, e.Code -= e.Range & o - 1, n = n << 1 | 1 - o, -16777216 & e.Range || (e.Code = e.Code << 8 | P(e.Stream), e.Range <<= 8);
        return n;
    }
    function Bt(e) {
        e.Code = 0, e.Range = -1;
        for (var r = 0; 5 > r; ++r)
            e.Code = e.Code << 8 | P(e.Stream);
    }
    function St(e) {
        for (var r = e.length - 1; r >= 0; --r)
            e[r] = 1024;
    }
    function gt(e, r, n, s) { var i, a = r[n]; i = (e.Range >>> 11) * a, s ? (e.Low = t(e.Low, o(_(i), [4294967295, 0])), e.Range -= i, r[n] = a - (a >>> 5) << 16 >> 16) : (e.Range = i, r[n] = a + (2048 - a >>> 5) << 16 >> 16), -16777216 & e.Range || (e.Range <<= 8, Dt(e)); }
    function kt(e, r, o) {
        for (var n = o - 1; n >= 0; --n)
            e.Range >>>= 1, 1 == (r >>> n & 1) && (e.Low = t(e.Low, _(e.Range))), -16777216 & e.Range || (e.Range <<= 8, Dt(e));
    }
    function Rt(e) { return t(t(_(e._cacheSize), e._position), [4, 0]); }
    function Mt(e) { e._position = Ht, e.Low = Ht, e.Range = -1, e._cacheSize = 1, e._cache = 0; }
    function Dt(e) {
        var r, s = a(d(e.Low, 32));
        if (0 != s || n(e.Low, [4278190080, 0]) < 0) {
            e._position = t(e._position, _(e._cacheSize)), r = e._cache;
            do
                S(e.Stream, r + s), r = 255;
            while (0 != --e._cacheSize);
            e._cache = a(e.Low) >>> 24;
        }
        ++e._cacheSize, e.Low = f(o(e.Low, [16777215, 0]), 8);
    }
    function bt(e, r) { return Yt[(2047 & (e - r ^ -r)) >>> 2]; }
    function wt(e) {
        for (var r, t, o, n = 0, s = 0, i = e.length, _ = [], a = []; i > n; ++n, ++s) {
            if (r = 255 & e[n], 128 & r)
                if (192 == (224 & r)) {
                    if (n + 1 >= i)
                        return e;
                    if (t = 255 & e[++n], 128 != (192 & t))
                        return e;
                    a[s] = (31 & r) << 6 | 63 & t;
                }
                else {
                    if (224 != (240 & r))
                        return e;
                    if (n + 2 >= i)
                        return e;
                    if (t = 255 & e[++n], 128 != (192 & t))
                        return e;
                    if (o = 255 & e[++n], 128 != (192 & o))
                        return e;
                    a[s] = (15 & r) << 12 | (63 & t) << 6 | 63 & o;
                }
            else {
                if (!r)
                    return e;
                a[s] = r;
            }
            16383 == s && (_.push(String.fromCharCode.apply(String, a)), s = -1);
        }
        return s > 0 && (a.length = s, _.push(String.fromCharCode.apply(String, a))), _.join("");
    }
    function yt(e) {
        var r, t, o, n = [], s = 0, i = e.length;
        if ("object" == typeof e)
            return e;
        for (k(e, 0, i, n, 0), o = 0; i > o; ++o)
            r = n[o], r >= 1 && 127 >= r ? ++s : s += !r || r >= 128 && 2047 >= r ? 2 : 3;
        for (t = [], s = 0, o = 0; i > o; ++o)
            r = n[o], r >= 1 && 127 >= r ? t[s++] = r << 24 >> 24 : !r || r >= 128 && 2047 >= r ? (t[s++] = (192 | r >> 6 & 31) << 24 >> 24, t[s++] = (128 | 63 & r) << 24 >> 24) : (t[s++] = (224 | r >> 12 & 15) << 24 >> 24, t[s++] = (128 | r >> 6 & 63) << 24 >> 24, t[s++] = (128 | 63 & r) << 24 >> 24);
        return t;
    }
    function Et(e) { return e[1] + e[0]; }
    function Ct(r, t, o, n) {
        function s() {
            try {
                for (var e, r = (new Date).getTime(); er(a.c.chunker);)
                    if (i = Et(a.c.chunker.inBytesProcessed) / Et(a.c.length_0), (new Date).getTime() - r > 200)
                        return n(i), xt(s, 0), 0;
                n(1), e = B(a.c.output), xt(o.bind(null, e), 0);
            }
            catch (t) {
                o(null, t);
            }
        }
        var i, _, a = {};
        "function" != typeof o && (_ = o, o = n = 0), n = n || function (r) { return "undefined" != typeof _ ? e(r, _) : void 0; }, o = o || function (e, r) { return "undefined" != typeof _ ? postMessage({ action: zt, cbn: _, result: e, error: r }) : void 0; };
        try {
            a.c = b({}, yt(r), Zt(t)), n(0);
        }
        catch (c) {
            return o(null, c);
        }
        xt(s, 0);
    }
    function Lt(r, t, o) {
        function n() {
            try {
                for (var e, r = 0, i = (new Date).getTime(); er(c.d.chunker);)
                    if (++r % 1e3 == 0 && (new Date).getTime() - i > 200)
                        return _ && (s = Et(c.d.chunker.decoder.nowPos64) / a, o(s)), xt(n, 0), 0;
                o(1), e = wt(B(c.d.output)), xt(t.bind(null, e), 0);
            }
            catch (u) {
                t(null, u);
            }
        }
        var s, i, _, a, c = {};
        "function" != typeof t && (i = t, t = o = 0), o = o || function (r) { return "undefined" != typeof i ? e(_ ? r : -1, i) : void 0; }, t = t || function (e, r) { return "undefined" != typeof i ? postMessage({ action: Ft, cbn: i, result: e, error: r }) : void 0; };
        try {
            c.d = y({}, r), a = Et(c.d.length_0), _ = a > -1, o(0);
        }
        catch (u) {
            return t(null, u);
        }
        xt(n, 0);
    }
    var zt = 1, Ft = 2, It = 3, xt = "function" == typeof setImmediate ? setImmediate : setTimeout, Nt = 4294967296, Ot = [4294967295, -Nt], At = [0, -0x8000000000000000], Ht = [0, 0], Gt = [1, 0], Wt = function () {
        var e, r, t, o = [];
        for (e = 0; 256 > e; ++e) {
            for (t = e, r = 0; 8 > r; ++r)
                0 != (1 & t) ? t = t >>> 1 ^ -306674912 : t >>>= 1;
            o[e] = t;
        }
        return o;
    }(), Tt = function () {
        var e, r, t, o = 2, n = [0, 1];
        for (t = 2; 22 > t; ++t)
            for (r = 1 << (t >> 1) - 1, e = 0; r > e; ++e, ++o)
                n[o] = t << 24 >> 24;
        return n;
    }(), Yt = function () {
        var e, r, t, o, n = [];
        for (r = 8; r >= 0; --r)
            for (o = 1 << 9 - r - 1, e = 1 << 9 - r, t = o; e > t; ++t)
                n[t] = (r << 6) + (e - t << 6 >>> 9 - r - 1);
        return n;
    }(), Zt = function () { var e = [{ s: 16, f: 64, m: 0 }, { s: 20, f: 64, m: 0 }, { s: 19, f: 64, m: 1 }, { s: 20, f: 64, m: 1 }, { s: 21, f: 128, m: 1 }, { s: 22, f: 128, m: 1 }, { s: 23, f: 128, m: 1 }, { s: 24, f: 255, m: 1 }, { s: 25, f: 255, m: 1 }]; return function (r) { return e[r - 1] || e[6]; }; }();
    return "undefined" == typeof onmessage || "undefined" != typeof window && "undefined" != typeof window.document || !function () { onmessage = function (e) { e && e.data && (e.data.action == Ft ? LZMA.decompress(e.data.data, e.data.cbn) : e.data.action == zt && LZMA.compress(e.data.data, e.data.mode, e.data.cbn)); }; }(), { compress: Ct, decompress: Lt };
}();
// this.LZMA = this.LZMA_WORKER = LZMA;
var LZMA = function () {
    "use strict";
    function e(e, r) { postMessage({ action: It, cbn: r, result: e }); }
    function r(e) { var r = []; return r[e - 1] = void 0, r; }
    function t(e, r) { return s(e[0] + r[0], e[1] + r[1]); }
    function o(e, r) { return c(~~Math.max(Math.min(e[1] / Nt, 2147483647), -2147483648) & ~~Math.max(Math.min(r[1] / Nt, 2147483647), -2147483648), a(e) & a(r)); }
    function n(e, r) { var t, o; return e[0] == r[0] && e[1] == r[1] ? 0 : (t = e[1] < 0, o = r[1] < 0, t && !o ? -1 : !t && o ? 1 : p(e, r)[1] < 0 ? -1 : 1); }
    function s(e, r) { var t, o; for (r %= 0x10000000000000000, e %= 0x10000000000000000, t = r % Nt, o = Math.floor(e / Nt) * Nt, r = r - t + o, e = e - o + t; 0 > e;)
        e += Nt, r -= Nt; for (; e > 4294967295;)
        e -= Nt, r += Nt; for (r %= 0x10000000000000000; r > 0x7fffffff00000000;)
        r -= 0x10000000000000000; for (; -0x8000000000000000 > r;)
        r += 0x10000000000000000; return [e, r]; }
    function i(e, r) { return e[0] == r[0] && e[1] == r[1]; }
    function _(e) { return e >= 0 ? [e, 0] : [e + Nt, -Nt]; }
    function a(e) { return e[0] >= 2147483648 ? ~~Math.max(Math.min(e[0] - Nt, 2147483647), -2147483648) : ~~Math.max(Math.min(e[0], 2147483647), -2147483648); }
    function c(e, r) { var t, o; return t = e * Nt, o = r, 0 > r && (o += Nt), [o, t]; }
    function u(e) { return 30 >= e ? 1 << e : u(30) * u(e - 30); }
    function f(e, r) { var t, o, n, s; if (r &= 63, i(e, At))
        return r ? Ht : e; if (e[1] < 0)
        throw new Error("Neg"); return s = u(r), o = e[1] * s % 0x10000000000000000, n = e[0] * s, t = n - n % Nt, o += t, n -= t, o >= 0x8000000000000000 && (o -= 0x10000000000000000), [n, o]; }
    function m(e, r) { var t; return r &= 63, t = u(r), s(Math.floor(e[0] / t), e[1] / t); }
    function d(e, r) { var o; return r &= 63, o = m(e, r), e[1] < 0 && (o = t(o, f([2, 0], 63 - r))), o; }
    function p(e, r) { return s(e[0] - r[0], e[1] - r[1]); }
    function h(e, r) { return e.buf = r, e.pos = 0, e.count = r.length, e; }
    function P(e) { return e.pos >= e.count ? -1 : 255 & e.buf[e.pos++]; }
    function l(e, r, t, o) { return e.pos >= e.count ? -1 : (o = Math.min(o, e.count - e.pos), R(e.buf, e.pos, r, t, o), e.pos += o, o); }
    function v(e) { return e.buf = r(32), e.count = 0, e; }
    function B(e) { var r = e.buf; return r.length = e.count, r; }
    function S(e, r) { e.buf[e.count++] = r << 24 >> 24; }
    function g(e, r, t, o) { R(r, t, e.buf, e.count, o), e.count += o; }
    function k(e, r, t, o, n) { var s; for (s = r; t > s; ++s)
        o[n++] = e.charCodeAt(s); }
    function R(e, r, t, o, n) { for (var s = 0; n > s; ++s)
        t[o + s] = e[r + s]; }
    function M(e, r) { Or(r, 1 << e.s), r._numFastBytes = e.f, Ar(r, e.m), r._numLiteralPosStateBits = 0, r._numLiteralContextBits = 3, r._posStateBits = 2, r._posStateMask = 3; }
    function D(e, r, t, o, s) { var i, _; if (n(o, Ot) < 0)
        throw new Error("invalid length " + o); for (e.length_0 = o, i = Mr({}), M(s, i), i._writeEndMark = 1, Hr(i, t), _ = 0; 64 > _; _ += 8)
        S(t, 255 & a(m(o, _))); e.chunker = (i._needReleaseMFStream = 0, i._inStream = r, i._finished = 0, Rr(i), i._rangeEncoder.Stream = t, zr(i), br(i), Dr(i), i._lenEncoder._tableSize = i._numFastBytes + 1 - 2, Jr(i._lenEncoder, 1 << i._posStateBits), i._repMatchLenEncoder._tableSize = i._numFastBytes + 1 - 2, Jr(i._repMatchLenEncoder, 1 << i._posStateBits), void (i.nowPos64 = Ht), U({}, i)); }
    function b(e, r, t) { return e.output = v({}), D(e, h({}, r), e.output, _(r.length), t), e; }
    function w(e, r, t) { var o, n, s, i, a = "", c = []; for (n = 0; 5 > n; ++n) {
        if (s = P(r), -1 == s)
            throw new Error("truncated input");
        c[n] = s << 24 >> 24;
    } if (o = sr({}), !_r(o, c))
        throw new Error("corrupted input"); for (n = 0; 64 > n; n += 8) {
        if (s = P(r), -1 == s)
            throw new Error("truncated input");
        s = s.toString(16), 1 == s.length && (s = "0" + s), a = s + "" + a;
    } /^0+$|^f+$/i.test(a) ? e.length_0 = Ot : (i = parseInt(a, 16), i > 4294967295 ? e.length_0 = Ot : e.length_0 = _(i)), e.chunker = or(o, r, t, e.length_0); }
    function y(e, r) { return e.output = v({}), w(e, h({}, r), e.output), e; }
    function E(e, t, o, n) { var s; e._keepSizeBefore = t, e._keepSizeAfter = o, s = t + o + n, (null == e._bufferBase || e._blockSize != s) && (e._bufferBase = null, e._blockSize = s, e._bufferBase = r(e._blockSize)), e._pointerToLastSafePosition = e._blockSize - o; }
    function C(e, r) { return e._bufferBase[e._bufferOffset + e._pos + r]; }
    function L(e, r, t, o) { var n, s; for (e._streamEndWasReached && e._pos + r + o > e._streamPos && (o = e._streamPos - (e._pos + r)), ++t, s = e._bufferOffset + e._pos + r, n = 0; o > n && e._bufferBase[s + n] == e._bufferBase[s + n - t]; ++n)
        ; return n; }
    function z(e) { return e._streamPos - e._pos; }
    function F(e) { var r, t, o; for (o = e._bufferOffset + e._pos - e._keepSizeBefore, o > 0 && --o, t = e._bufferOffset + e._streamPos - o, r = 0; t > r; ++r)
        e._bufferBase[r] = e._bufferBase[o + r]; e._bufferOffset -= o; }
    function I(e) { var r; ++e._pos, e._pos > e._posLimit && (r = e._bufferOffset + e._pos, r > e._pointerToLastSafePosition && F(e), x(e)); }
    function x(e) { var r, t, o; if (!e._streamEndWasReached)
        for (;;) {
            if (o = -e._bufferOffset + e._blockSize - e._streamPos, !o)
                return;
            if (r = l(e._stream, e._bufferBase, e._bufferOffset + e._streamPos, o), -1 == r)
                return e._posLimit = e._streamPos, t = e._bufferOffset + e._posLimit, t > e._pointerToLastSafePosition && (e._posLimit = e._pointerToLastSafePosition - e._bufferOffset), void (e._streamEndWasReached = 1);
            e._streamPos += r, e._streamPos >= e._pos + e._keepSizeAfter && (e._posLimit = e._streamPos - e._keepSizeAfter);
        } }
    function N(e, r) { e._bufferOffset += r, e._posLimit -= r, e._pos -= r, e._streamPos -= r; }
    function O(e, t, o, n, s) { var i, _, a; 1073741567 > t && (e._cutValue = 16 + (n >> 1), a = ~~((t + o + n + s) / 2) + 256, E(e, t + o, n + s, a), e._matchMaxLen = n, i = t + 1, e._cyclicBufferSize != i && (e._son = r(2 * (e._cyclicBufferSize = i))), _ = 65536, e.HASH_ARRAY && (_ = t - 1, _ |= _ >> 1, _ |= _ >> 2, _ |= _ >> 4, _ |= _ >> 8, _ >>= 1, _ |= 65535, _ > 16777216 && (_ >>= 1), e._hashMask = _, ++_, _ += e.kFixHashSize), _ != e._hashSizeSum && (e._hash = r(e._hashSizeSum = _))); }
    function A(e, r) { var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k; if (e._pos + e._matchMaxLen <= e._streamPos)
        h = e._matchMaxLen;
    else if (h = e._streamPos - e._pos, h < e.kMinMatchCheck)
        return G(e), 0; for (v = 0, P = e._pos > e._cyclicBufferSize ? e._pos - e._cyclicBufferSize : 0, o = e._bufferOffset + e._pos, l = 1, c = 0, u = 0, e.HASH_ARRAY ? (k = Wt[255 & e._bufferBase[o]] ^ 255 & e._bufferBase[o + 1], c = 1023 & k, k ^= (255 & e._bufferBase[o + 2]) << 8, u = 65535 & k, f = (k ^ Wt[255 & e._bufferBase[o + 3]] << 5) & e._hashMask) : f = 255 & e._bufferBase[o] ^ (255 & e._bufferBase[o + 1]) << 8, n = e._hash[e.kFixHashSize + f] || 0, e.HASH_ARRAY && (s = e._hash[c] || 0, i = e._hash[1024 + u] || 0, e._hash[c] = e._pos, e._hash[1024 + u] = e._pos, s > P && e._bufferBase[e._bufferOffset + s] == e._bufferBase[o] && (r[v++] = l = 2, r[v++] = e._pos - s - 1), i > P && e._bufferBase[e._bufferOffset + i] == e._bufferBase[o] && (i == s && (v -= 2), r[v++] = l = 3, r[v++] = e._pos - i - 1, s = i), 0 != v && s == n && (v -= 2, l = 1)), e._hash[e.kFixHashSize + f] = e._pos, S = (e._cyclicBufferPos << 1) + 1, g = e._cyclicBufferPos << 1, d = p = e.kNumHashDirectBytes, 0 != e.kNumHashDirectBytes && n > P && e._bufferBase[e._bufferOffset + n + e.kNumHashDirectBytes] != e._bufferBase[o + e.kNumHashDirectBytes] && (r[v++] = l = e.kNumHashDirectBytes, r[v++] = e._pos - n - 1), t = e._cutValue;;) {
        if (P >= n || 0 == t--) {
            e._son[S] = e._son[g] = 0;
            break;
        }
        if (a = e._pos - n, _ = (a <= e._cyclicBufferPos ? e._cyclicBufferPos - a : e._cyclicBufferPos - a + e._cyclicBufferSize) << 1, B = e._bufferOffset + n, m = p > d ? d : p, e._bufferBase[B + m] == e._bufferBase[o + m]) {
            for (; ++m != h && e._bufferBase[B + m] == e._bufferBase[o + m];)
                ;
            if (m > l && (r[v++] = l = m, r[v++] = a - 1, m == h)) {
                e._son[g] = e._son[_], e._son[S] = e._son[_ + 1];
                break;
            }
        }
        (255 & e._bufferBase[B + m]) < (255 & e._bufferBase[o + m]) ? (e._son[g] = n, g = _ + 1, n = e._son[g], p = m) : (e._son[S] = n, S = _, n = e._son[S], d = m);
    } return G(e), v; }
    function H(e) { e._bufferOffset = 0, e._pos = 0, e._streamPos = 0, e._streamEndWasReached = 0, x(e), e._cyclicBufferPos = 0, N(e, -1); }
    function G(e) { var r; ++e._cyclicBufferPos >= e._cyclicBufferSize && (e._cyclicBufferPos = 0), I(e), 1073741823 == e._pos && (r = e._pos - e._cyclicBufferSize, W(e._son, 2 * e._cyclicBufferSize, r), W(e._hash, e._hashSizeSum, r), N(e, r)); }
    function W(e, r, t) { var o, n; for (o = 0; r > o; ++o)
        n = e[o] || 0, t >= n ? n = 0 : n -= t, e[o] = n; }
    function T(e, r) { e.HASH_ARRAY = r > 2, e.HASH_ARRAY ? (e.kNumHashDirectBytes = 0, e.kMinMatchCheck = 4, e.kFixHashSize = 66560) : (e.kNumHashDirectBytes = 2, e.kMinMatchCheck = 3, e.kFixHashSize = 0); }
    function Y(e, r) { var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v; do {
        if (e._pos + e._matchMaxLen <= e._streamPos)
            d = e._matchMaxLen;
        else if (d = e._streamPos - e._pos, d < e.kMinMatchCheck) {
            G(e);
            continue;
        }
        for (p = e._pos > e._cyclicBufferSize ? e._pos - e._cyclicBufferSize : 0, o = e._bufferOffset + e._pos, e.HASH_ARRAY ? (v = Wt[255 & e._bufferBase[o]] ^ 255 & e._bufferBase[o + 1], _ = 1023 & v, e._hash[_] = e._pos, v ^= (255 & e._bufferBase[o + 2]) << 8, a = 65535 & v, e._hash[1024 + a] = e._pos, c = (v ^ Wt[255 & e._bufferBase[o + 3]] << 5) & e._hashMask) : c = 255 & e._bufferBase[o] ^ (255 & e._bufferBase[o + 1]) << 8, n = e._hash[e.kFixHashSize + c], e._hash[e.kFixHashSize + c] = e._pos, P = (e._cyclicBufferPos << 1) + 1, l = e._cyclicBufferPos << 1, f = m = e.kNumHashDirectBytes, t = e._cutValue;;) {
            if (p >= n || 0 == t--) {
                e._son[P] = e._son[l] = 0;
                break;
            }
            if (i = e._pos - n, s = (i <= e._cyclicBufferPos ? e._cyclicBufferPos - i : e._cyclicBufferPos - i + e._cyclicBufferSize) << 1, h = e._bufferOffset + n, u = m > f ? f : m, e._bufferBase[h + u] == e._bufferBase[o + u]) {
                for (; ++u != d && e._bufferBase[h + u] == e._bufferBase[o + u];)
                    ;
                if (u == d) {
                    e._son[l] = e._son[s], e._son[P] = e._son[s + 1];
                    break;
                }
            }
            (255 & e._bufferBase[h + u]) < (255 & e._bufferBase[o + u]) ? (e._son[l] = n, l = s + 1, n = e._son[l], m = u) : (e._son[P] = n, P = s, n = e._son[P], f = u);
        }
        G(e);
    } while (0 != --r); }
    function Z(e, r, t) { var o = e._pos - r - 1; for (0 > o && (o += e._windowSize); 0 != t; --t)
        o >= e._windowSize && (o = 0), e._buffer[e._pos++] = e._buffer[o++], e._pos >= e._windowSize && j(e); }
    function V(e, t) { (null == e._buffer || e._windowSize != t) && (e._buffer = r(t)), e._windowSize = t, e._pos = 0, e._streamPos = 0; }
    function j(e) { var r = e._pos - e._streamPos; r && (g(e._stream, e._buffer, e._streamPos, r), e._pos >= e._windowSize && (e._pos = 0), e._streamPos = e._pos); }
    function $(e, r) { var t = e._pos - r - 1; return 0 > t && (t += e._windowSize), e._buffer[t]; }
    function K(e, r) { e._buffer[e._pos++] = r, e._pos >= e._windowSize && j(e); }
    function q(e) { j(e), e._stream = null; }
    function J(e) { return e -= 2, 4 > e ? e : 3; }
    function Q(e) { return 4 > e ? 0 : 10 > e ? e - 3 : e - 6; }
    function U(e, r) { return e.encoder = r, e.decoder = null, e.alive = 1, e; }
    function X(e, r) { return e.decoder = r, e.encoder = null, e.alive = 1, e; }
    function er(e) { if (!e.alive)
        throw new Error("bad state"); return e.encoder ? tr(e) : rr(e), e.alive; }
    function rr(e) { var r = nr(e.decoder); if (-1 == r)
        throw new Error("corrupted input"); e.inBytesProcessed = Ot, e.outBytesProcessed = e.decoder.nowPos64, (r || n(e.decoder.outSize, Ht) >= 0 && n(e.decoder.nowPos64, e.decoder.outSize) >= 0) && (j(e.decoder.m_OutWindow), q(e.decoder.m_OutWindow), e.decoder.m_RangeDecoder.Stream = null, e.alive = 0); }
    function tr(e) { kr(e.encoder, e.encoder.processedInSize, e.encoder.processedOutSize, e.encoder.finished), e.inBytesProcessed = e.encoder.processedInSize[0], e.encoder.finished[0] && (Nr(e.encoder), e.alive = 0); }
    function or(e, r, t, o) { return e.m_RangeDecoder.Stream = r, q(e.m_OutWindow), e.m_OutWindow._stream = t, ir(e), e.state = 0, e.rep0 = 0, e.rep1 = 0, e.rep2 = 0, e.rep3 = 0, e.outSize = o, e.nowPos64 = Ht, e.prevByte = 0, X({}, e); }
    function nr(e) { var r, o, s, i, c, u; if (u = a(e.nowPos64) & e.m_PosStateMask, lt(e.m_RangeDecoder, e.m_IsMatchDecoders, (e.state << 4) + u)) {
        if (lt(e.m_RangeDecoder, e.m_IsRepDecoders, e.state))
            s = 0, lt(e.m_RangeDecoder, e.m_IsRepG0Decoders, e.state) ? (lt(e.m_RangeDecoder, e.m_IsRepG1Decoders, e.state) ? (lt(e.m_RangeDecoder, e.m_IsRepG2Decoders, e.state) ? (o = e.rep3, e.rep3 = e.rep2) : o = e.rep2, e.rep2 = e.rep1) : o = e.rep1, e.rep1 = e.rep0, e.rep0 = o) : lt(e.m_RangeDecoder, e.m_IsRep0LongDecoders, (e.state << 4) + u) || (e.state = e.state < 7 ? 9 : 11, s = 1), s || (s = fr(e.m_RepLenDecoder, e.m_RangeDecoder, u) + 2, e.state = e.state < 7 ? 8 : 11);
        else if (e.rep3 = e.rep2, e.rep2 = e.rep1, e.rep1 = e.rep0, s = 2 + fr(e.m_LenDecoder, e.m_RangeDecoder, u), e.state = e.state < 7 ? 7 : 10, c = _t(e.m_PosSlotDecoder[J(s)], e.m_RangeDecoder), c >= 4) {
            if (i = (c >> 1) - 1, e.rep0 = (2 | 1 & c) << i, 14 > c)
                e.rep0 += ct(e.m_PosDecoders, e.rep0 - c - 1, e.m_RangeDecoder, i);
            else if (e.rep0 += vt(e.m_RangeDecoder, i - 4) << 4, e.rep0 += at(e.m_PosAlignDecoder, e.m_RangeDecoder), e.rep0 < 0)
                return -1 == e.rep0 ? 1 : -1;
        }
        else
            e.rep0 = c;
        if (n(_(e.rep0), e.nowPos64) >= 0 || e.rep0 >= e.m_DictionarySizeCheck)
            return -1;
        Z(e.m_OutWindow, e.rep0, s), e.nowPos64 = t(e.nowPos64, _(s)), e.prevByte = $(e.m_OutWindow, 0);
    }
    else
        r = hr(e.m_LiteralDecoder, a(e.nowPos64), e.prevByte), e.state < 7 ? e.prevByte = lr(r, e.m_RangeDecoder) : e.prevByte = vr(r, e.m_RangeDecoder, $(e.m_OutWindow, e.rep0)), K(e.m_OutWindow, e.prevByte), e.state = Q(e.state), e.nowPos64 = t(e.nowPos64, Gt); return 0; }
    function sr(e) { e.m_OutWindow = {}, e.m_RangeDecoder = {}, e.m_IsMatchDecoders = r(192), e.m_IsRepDecoders = r(12), e.m_IsRepG0Decoders = r(12), e.m_IsRepG1Decoders = r(12), e.m_IsRepG2Decoders = r(12), e.m_IsRep0LongDecoders = r(192), e.m_PosSlotDecoder = r(4), e.m_PosDecoders = r(114), e.m_PosAlignDecoder = it({}, 4), e.m_LenDecoder = mr({}), e.m_RepLenDecoder = mr({}), e.m_LiteralDecoder = {}; for (var t = 0; 4 > t; ++t)
        e.m_PosSlotDecoder[t] = it({}, 6); return e; }
    function ir(e) { e.m_OutWindow._streamPos = 0, e.m_OutWindow._pos = 0, St(e.m_IsMatchDecoders), St(e.m_IsRep0LongDecoders), St(e.m_IsRepDecoders), St(e.m_IsRepG0Decoders), St(e.m_IsRepG1Decoders), St(e.m_IsRepG2Decoders), St(e.m_PosDecoders), Pr(e.m_LiteralDecoder); for (var r = 0; 4 > r; ++r)
        St(e.m_PosSlotDecoder[r].Models); dr(e.m_LenDecoder), dr(e.m_RepLenDecoder), St(e.m_PosAlignDecoder.Models), Bt(e.m_RangeDecoder); }
    function _r(e, r) { var t, o, n, s, i, _, a; if (r.length < 5)
        return 0; for (a = 255 & r[0], n = a % 9, _ = ~~(a / 9), s = _ % 5, i = ~~(_ / 5), t = 0, o = 0; 4 > o; ++o)
        t += (255 & r[1 + o]) << 8 * o; return t > 99999999 || !cr(e, n, s, i) ? 0 : ar(e, t); }
    function ar(e, r) { return 0 > r ? 0 : (e.m_DictionarySize != r && (e.m_DictionarySize = r, e.m_DictionarySizeCheck = Math.max(e.m_DictionarySize, 1), V(e.m_OutWindow, Math.max(e.m_DictionarySizeCheck, 4096))), 1); }
    function cr(e, r, t, o) { if (r > 8 || t > 4 || o > 4)
        return 0; pr(e.m_LiteralDecoder, t, r); var n = 1 << o; return ur(e.m_LenDecoder, n), ur(e.m_RepLenDecoder, n), e.m_PosStateMask = n - 1, 1; }
    function ur(e, r) { for (; e.m_NumPosStates < r; ++e.m_NumPosStates)
        e.m_LowCoder[e.m_NumPosStates] = it({}, 3), e.m_MidCoder[e.m_NumPosStates] = it({}, 3); }
    function fr(e, r, t) { if (!lt(r, e.m_Choice, 0))
        return _t(e.m_LowCoder[t], r); var o = 8; return o += lt(r, e.m_Choice, 1) ? 8 + _t(e.m_HighCoder, r) : _t(e.m_MidCoder[t], r); }
    function mr(e) { return e.m_Choice = r(2), e.m_LowCoder = r(16), e.m_MidCoder = r(16), e.m_HighCoder = it({}, 8), e.m_NumPosStates = 0, e; }
    function dr(e) { St(e.m_Choice); for (var r = 0; r < e.m_NumPosStates; ++r)
        St(e.m_LowCoder[r].Models), St(e.m_MidCoder[r].Models); St(e.m_HighCoder.Models); }
    function pr(e, t, o) { var n, s; if (null == e.m_Coders || e.m_NumPrevBits != o || e.m_NumPosBits != t)
        for (e.m_NumPosBits = t, e.m_PosMask = (1 << t) - 1, e.m_NumPrevBits = o, s = 1 << e.m_NumPrevBits + e.m_NumPosBits, e.m_Coders = r(s), n = 0; s > n; ++n)
            e.m_Coders[n] = Br({}); }
    function hr(e, r, t) { return e.m_Coders[((r & e.m_PosMask) << e.m_NumPrevBits) + ((255 & t) >>> 8 - e.m_NumPrevBits)]; }
    function Pr(e) { var r, t; for (t = 1 << e.m_NumPrevBits + e.m_NumPosBits, r = 0; t > r; ++r)
        St(e.m_Coders[r].m_Decoders); }
    function lr(e, r) { var t = 1; do
        t = t << 1 | lt(r, e.m_Decoders, t);
    while (256 > t); return t << 24 >> 24; }
    function vr(e, r, t) { var o, n, s = 1; do
        if (n = t >> 7 & 1, t <<= 1, o = lt(r, e.m_Decoders, (1 + n << 8) + s), s = s << 1 | o, n != o) {
            for (; 256 > s;)
                s = s << 1 | lt(r, e.m_Decoders, s);
            break;
        }
    while (256 > s); return s << 24 >> 24; }
    function Br(e) { return e.m_Decoders = r(768), e; }
    function Sr(e, r) { var t, o, n, s; e._optimumEndIndex = r, n = e._optimum[r].PosPrev, o = e._optimum[r].BackPrev; do
        e._optimum[r].Prev1IsChar && (nt(e._optimum[n]), e._optimum[n].PosPrev = n - 1, e._optimum[r].Prev2 && (e._optimum[n - 1].Prev1IsChar = 0, e._optimum[n - 1].PosPrev = e._optimum[r].PosPrev2, e._optimum[n - 1].BackPrev = e._optimum[r].BackPrev2)), s = n, t = o, o = e._optimum[s].BackPrev, n = e._optimum[s].PosPrev, e._optimum[s].BackPrev = t, e._optimum[s].PosPrev = r, r = s;
    while (r > 0); return e.backRes = e._optimum[0].BackPrev, e._optimumCurrentIndex = e._optimum[0].PosPrev, e._optimumCurrentIndex; }
    function gr(e) { e._state = 0, e._previousByte = 0; for (var r = 0; 4 > r; ++r)
        e._repDistances[r] = 0; }
    function kr(e, r, o, s) { var c, u, f, m, d, h, P, l, v, B, S, g, k, R, M; if (r[0] = Ht, o[0] = Ht, s[0] = 1, e._inStream && (e._matchFinder._stream = e._inStream, H(e._matchFinder), e._needReleaseMFStream = 1, e._inStream = null), !e._finished) {
        if (e._finished = 1, R = e.nowPos64, i(e.nowPos64, Ht)) {
            if (!z(e._matchFinder))
                return void wr(e, a(e.nowPos64));
            Ir(e), k = a(e.nowPos64) & e._posStateMask, gt(e._rangeEncoder, e._isMatch, (e._state << 4) + k, 0), e._state = Q(e._state), f = C(e._matchFinder, -e._additionalOffset), et(Ur(e._literalEncoder, a(e.nowPos64), e._previousByte), e._rangeEncoder, f), e._previousByte = f, --e._additionalOffset, e.nowPos64 = t(e.nowPos64, Gt);
        }
        if (!z(e._matchFinder))
            return void wr(e, a(e.nowPos64));
        for (;;) {
            if (P = yr(e, a(e.nowPos64)), B = e.backRes, k = a(e.nowPos64) & e._posStateMask, u = (e._state << 4) + k, 1 == P && -1 == B)
                gt(e._rangeEncoder, e._isMatch, u, 0), f = C(e._matchFinder, -e._additionalOffset), M = Ur(e._literalEncoder, a(e.nowPos64), e._previousByte), e._state < 7 ? et(M, e._rangeEncoder, f) : (v = C(e._matchFinder, -e._repDistances[0] - 1 - e._additionalOffset), rt(M, e._rangeEncoder, v, f)), e._previousByte = f, e._state = Q(e._state);
            else {
                if (gt(e._rangeEncoder, e._isMatch, u, 1), 4 > B) {
                    if (gt(e._rangeEncoder, e._isRep, e._state, 1), B ? (gt(e._rangeEncoder, e._isRepG0, e._state, 1), 1 == B ? gt(e._rangeEncoder, e._isRepG1, e._state, 0) : (gt(e._rangeEncoder, e._isRepG1, e._state, 1), gt(e._rangeEncoder, e._isRepG2, e._state, B - 2))) : (gt(e._rangeEncoder, e._isRepG0, e._state, 0), 1 == P ? gt(e._rangeEncoder, e._isRep0Long, u, 0) : gt(e._rangeEncoder, e._isRep0Long, u, 1)), 1 == P ? e._state = e._state < 7 ? 9 : 11 : ($r(e._repMatchLenEncoder, e._rangeEncoder, P - 2, k), e._state = e._state < 7 ? 8 : 11), m = e._repDistances[B], 0 != B) {
                        for (h = B; h >= 1; --h)
                            e._repDistances[h] = e._repDistances[h - 1];
                        e._repDistances[0] = m;
                    }
                }
                else {
                    for (gt(e._rangeEncoder, e._isRep, e._state, 0), e._state = e._state < 7 ? 7 : 10, $r(e._lenEncoder, e._rangeEncoder, P - 2, k), B -= 4, g = Wr(B), l = J(P), ft(e._posSlotEncoder[l], e._rangeEncoder, g), g >= 4 && (d = (g >> 1) - 1, c = (2 | 1 & g) << d, S = B - c, 14 > g ? ht(e._posEncoders, c - g - 1, e._rangeEncoder, d, S) : (kt(e._rangeEncoder, S >> 4, d - 4), dt(e._posAlignEncoder, e._rangeEncoder, 15 & S), ++e._alignPriceCount)), m = B, h = 3; h >= 1; --h)
                        e._repDistances[h] = e._repDistances[h - 1];
                    e._repDistances[0] = m, ++e._matchPriceCount;
                }
                e._previousByte = C(e._matchFinder, P - 1 - e._additionalOffset);
            }
            if (e._additionalOffset -= P, e.nowPos64 = t(e.nowPos64, _(P)), !e._additionalOffset) {
                if (e._matchPriceCount >= 128 && br(e), e._alignPriceCount >= 16 && Dr(e), r[0] = e.nowPos64, o[0] = Rt(e._rangeEncoder), !z(e._matchFinder))
                    return void wr(e, a(e.nowPos64));
                if (n(p(e.nowPos64, R), [4096, 0]) >= 0)
                    return e._finished = 0, void (s[0] = 0);
            }
        }
    } }
    function Rr(e) { var r, t; e._matchFinder || (r = {}, t = 4, e._matchFinderType || (t = 2), T(r, t), e._matchFinder = r), Qr(e._literalEncoder, e._numLiteralPosStateBits, e._numLiteralContextBits), (e._dictionarySize != e._dictionarySizePrev || e._numFastBytesPrev != e._numFastBytes) && (O(e._matchFinder, e._dictionarySize, 4096, e._numFastBytes, 274), e._dictionarySizePrev = e._dictionarySize, e._numFastBytesPrev = e._numFastBytes); }
    function Mr(e) { var t; for (e._repDistances = r(4), e._optimum = [], e._rangeEncoder = {}, e._isMatch = r(192), e._isRep = r(12), e._isRepG0 = r(12), e._isRepG1 = r(12), e._isRepG2 = r(12), e._isRep0Long = r(192), e._posSlotEncoder = [], e._posEncoders = r(114), e._posAlignEncoder = ut({}, 4), e._lenEncoder = Kr({}), e._repMatchLenEncoder = Kr({}), e._literalEncoder = {}, e._matchDistances = [], e._posSlotPrices = [], e._distancesPrices = [], e._alignPrices = r(16), e.reps = r(4), e.repLens = r(4), e.processedInSize = [Ht], e.processedOutSize = [Ht], e.finished = [0], e.properties = r(5), e.tempPrices = r(128), e._longestMatchLength = 0, e._matchFinderType = 1, e._numDistancePairs = 0, e._numFastBytesPrev = -1, e.backRes = 0, t = 0; 4096 > t; ++t)
        e._optimum[t] = {}; for (t = 0; 4 > t; ++t)
        e._posSlotEncoder[t] = ut({}, 6); return e; }
    function Dr(e) { for (var r = 0; 16 > r; ++r)
        e._alignPrices[r] = pt(e._posAlignEncoder, r); e._alignPriceCount = 0; }
    function br(e) { var r, t, o, n, s, i, _, a; for (n = 4; 128 > n; ++n)
        i = Wr(n), o = (i >> 1) - 1, r = (2 | 1 & i) << o, e.tempPrices[n] = Pt(e._posEncoders, r - i - 1, o, n - r); for (s = 0; 4 > s; ++s) {
        for (t = e._posSlotEncoder[s], _ = s << 6, i = 0; i < e._distTableSize; ++i)
            e._posSlotPrices[_ + i] = mt(t, i);
        for (i = 14; i < e._distTableSize; ++i)
            e._posSlotPrices[_ + i] += (i >> 1) - 1 - 4 << 6;
        for (a = 128 * s, n = 0; 4 > n; ++n)
            e._distancesPrices[a + n] = e._posSlotPrices[_ + n];
        for (; 128 > n; ++n)
            e._distancesPrices[a + n] = e._posSlotPrices[_ + Wr(n)] + e.tempPrices[n];
    } e._matchPriceCount = 0; }
    function wr(e, r) { xr(e), Gr(e, r & e._posStateMask); for (var t = 0; 5 > t; ++t)
        Dt(e._rangeEncoder); }
    function yr(e, r) { var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k, R, M, D, b, w, y, E, F, I, x, N, O, A, H, G, W, T, Y, Z, V, j, $, K, q, J, U, X, er, rr; if (e._optimumEndIndex != e._optimumCurrentIndex)
        return p = e._optimum[e._optimumCurrentIndex].PosPrev - e._optimumCurrentIndex, e.backRes = e._optimum[e._optimumCurrentIndex].BackPrev, e._optimumCurrentIndex = e._optimum[e._optimumCurrentIndex].PosPrev, p; if (e._optimumCurrentIndex = e._optimumEndIndex = 0, e._longestMatchWasFound ? (d = e._longestMatchLength, e._longestMatchWasFound = 0) : d = Ir(e), y = e._numDistancePairs, b = z(e._matchFinder) + 1, 2 > b)
        return e.backRes = -1, 1; for (b > 273 && (b = 273), Z = 0, u = 0; 4 > u; ++u)
        e.reps[u] = e._repDistances[u], e.repLens[u] = L(e._matchFinder, -1, e.reps[u], 273), e.repLens[u] > e.repLens[Z] && (Z = u); if (e.repLens[Z] >= e._numFastBytes)
        return e.backRes = Z, p = e.repLens[Z], Fr(e, p - 1), p; if (d >= e._numFastBytes)
        return e.backRes = e._matchDistances[y - 1] + 4, Fr(e, d - 1), d; if (a = C(e._matchFinder, -1), v = C(e._matchFinder, -e._repDistances[0] - 1 - 1), 2 > d && a != v && e.repLens[Z] < 2)
        return e.backRes = -1, 1; if (e._optimum[0].State = e._state, A = r & e._posStateMask, e._optimum[1].Price = Yt[e._isMatch[(e._state << 4) + A] >>> 2] + ot(Ur(e._literalEncoder, r, e._previousByte), e._state >= 7, v, a), nt(e._optimum[1]), B = Yt[2048 - e._isMatch[(e._state << 4) + A] >>> 2], Y = B + Yt[2048 - e._isRep[e._state] >>> 2], v == a && (V = Y + Lr(e, e._state, A), V < e._optimum[1].Price && (e._optimum[1].Price = V, st(e._optimum[1]))), m = d >= e.repLens[Z] ? d : e.repLens[Z], 2 > m)
        return e.backRes = e._optimum[1].BackPrev, 1; e._optimum[1].PosPrev = 0, e._optimum[0].Backs0 = e.reps[0], e._optimum[0].Backs1 = e.reps[1], e._optimum[0].Backs2 = e.reps[2], e._optimum[0].Backs3 = e.reps[3], f = m; do
        e._optimum[f--].Price = 268435455;
    while (f >= 2); for (u = 0; 4 > u; ++u)
        if (T = e.repLens[u], !(2 > T)) {
            G = Y + Cr(e, u, e._state, A);
            do
                s = G + qr(e._repMatchLenEncoder, T - 2, A), x = e._optimum[T], s < x.Price && (x.Price = s, x.PosPrev = 0, x.BackPrev = u, x.Prev1IsChar = 0);
            while (--T >= 2);
        } if (D = B + Yt[e._isRep[e._state] >>> 2], f = e.repLens[0] >= 2 ? e.repLens[0] + 1 : 2, d >= f) {
        for (E = 0; f > e._matchDistances[E];)
            E += 2;
        for (; c = e._matchDistances[E + 1], s = D + Er(e, c, f, A), x = e._optimum[f], s < x.Price && (x.Price = s, x.PosPrev = 0, x.BackPrev = c + 4, x.Prev1IsChar = 0), f != e._matchDistances[E] || (E += 2, E != y); ++f)
            ;
    } for (t = 0;;) {
        if (++t, t == m)
            return Sr(e, t);
        if (S = Ir(e), y = e._numDistancePairs, S >= e._numFastBytes)
            return e._longestMatchLength = S, e._longestMatchWasFound = 1, Sr(e, t);
        if (++r, O = e._optimum[t].PosPrev, e._optimum[t].Prev1IsChar ? (--O, e._optimum[t].Prev2 ? ($ = e._optimum[e._optimum[t].PosPrev2].State, $ = e._optimum[t].BackPrev2 < 4 ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10) : $ = e._optimum[O].State, $ = Q($)) : $ = e._optimum[O].State, O == t - 1 ? $ = e._optimum[t].BackPrev ? Q($) : 7 > $ ? 9 : 11 : (e._optimum[t].Prev1IsChar && e._optimum[t].Prev2 ? (O = e._optimum[t].PosPrev2, N = e._optimum[t].BackPrev2, $ = 7 > $ ? 8 : 11) : (N = e._optimum[t].BackPrev, $ = 4 > N ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10), I = e._optimum[O], 4 > N ? N ? 1 == N ? (e.reps[0] = I.Backs1, e.reps[1] = I.Backs0, e.reps[2] = I.Backs2, e.reps[3] = I.Backs3) : 2 == N ? (e.reps[0] = I.Backs2, e.reps[1] = I.Backs0, e.reps[2] = I.Backs1, e.reps[3] = I.Backs3) : (e.reps[0] = I.Backs3, e.reps[1] = I.Backs0, e.reps[2] = I.Backs1, e.reps[3] = I.Backs2) : (e.reps[0] = I.Backs0, e.reps[1] = I.Backs1, e.reps[2] = I.Backs2, e.reps[3] = I.Backs3) : (e.reps[0] = N - 4, e.reps[1] = I.Backs0, e.reps[2] = I.Backs1, e.reps[3] = I.Backs2)), e._optimum[t].State = $, e._optimum[t].Backs0 = e.reps[0], e._optimum[t].Backs1 = e.reps[1], e._optimum[t].Backs2 = e.reps[2], e._optimum[t].Backs3 = e.reps[3], _ = e._optimum[t].Price, a = C(e._matchFinder, -1), v = C(e._matchFinder, -e.reps[0] - 1 - 1), A = r & e._posStateMask, o = _ + Yt[e._isMatch[($ << 4) + A] >>> 2] + ot(Ur(e._literalEncoder, r, C(e._matchFinder, -2)), $ >= 7, v, a), R = e._optimum[t + 1], g = 0, o < R.Price && (R.Price = o, R.PosPrev = t, R.BackPrev = -1, R.Prev1IsChar = 0, g = 1), B = _ + Yt[2048 - e._isMatch[($ << 4) + A] >>> 2], Y = B + Yt[2048 - e._isRep[$] >>> 2], v != a || R.PosPrev < t && !R.BackPrev || (V = Y + (Yt[e._isRepG0[$] >>> 2] + Yt[e._isRep0Long[($ << 4) + A] >>> 2]), V <= R.Price && (R.Price = V, R.PosPrev = t, R.BackPrev = 0, R.Prev1IsChar = 0, g = 1)), w = z(e._matchFinder) + 1, w = w > 4095 - t ? 4095 - t : w, b = w, !(2 > b)) {
            if (b > e._numFastBytes && (b = e._numFastBytes), !g && v != a && (q = Math.min(w - 1, e._numFastBytes), P = L(e._matchFinder, 0, e.reps[0], q), P >= 2)) {
                for (K = Q($), H = r + 1 & e._posStateMask, M = o + Yt[2048 - e._isMatch[(K << 4) + H] >>> 2] + Yt[2048 - e._isRep[K] >>> 2], F = t + 1 + P; F > m;)
                    e._optimum[++m].Price = 268435455;
                s = M + (J = qr(e._repMatchLenEncoder, P - 2, H), J + Cr(e, 0, K, H)), x = e._optimum[F], s < x.Price && (x.Price = s, x.PosPrev = t + 1, x.BackPrev = 0, x.Prev1IsChar = 1, x.Prev2 = 0);
            }
            for (j = 2, W = 0; 4 > W; ++W)
                if (h = L(e._matchFinder, -1, e.reps[W], b), !(2 > h)) {
                    l = h;
                    do {
                        for (; t + h > m;)
                            e._optimum[++m].Price = 268435455;
                        s = Y + (U = qr(e._repMatchLenEncoder, h - 2, A), U + Cr(e, W, $, A)), x = e._optimum[t + h], s < x.Price && (x.Price = s, x.PosPrev = t, x.BackPrev = W, x.Prev1IsChar = 0);
                    } while (--h >= 2);
                    if (h = l, W || (j = h + 1), w > h && (q = Math.min(w - 1 - h, e._numFastBytes), P = L(e._matchFinder, h, e.reps[W], q), P >= 2)) {
                        for (K = 7 > $ ? 8 : 11, H = r + h & e._posStateMask, n = Y + (X = qr(e._repMatchLenEncoder, h - 2, A), X + Cr(e, W, $, A)) + Yt[e._isMatch[(K << 4) + H] >>> 2] + ot(Ur(e._literalEncoder, r + h, C(e._matchFinder, h - 1 - 1)), 1, C(e._matchFinder, h - 1 - (e.reps[W] + 1)), C(e._matchFinder, h - 1)), K = Q(K), H = r + h + 1 & e._posStateMask, k = n + Yt[2048 - e._isMatch[(K << 4) + H] >>> 2], M = k + Yt[2048 - e._isRep[K] >>> 2], F = h + 1 + P; t + F > m;)
                            e._optimum[++m].Price = 268435455;
                        s = M + (er = qr(e._repMatchLenEncoder, P - 2, H), er + Cr(e, 0, K, H)), x = e._optimum[t + F], s < x.Price && (x.Price = s, x.PosPrev = t + h + 1, x.BackPrev = 0, x.Prev1IsChar = 1, x.Prev2 = 1, x.PosPrev2 = t, x.BackPrev2 = W);
                    }
                }
            if (S > b) {
                for (S = b, y = 0; S > e._matchDistances[y]; y += 2)
                    ;
                e._matchDistances[y] = S, y += 2;
            }
            if (S >= j) {
                for (D = B + Yt[e._isRep[$] >>> 2]; t + S > m;)
                    e._optimum[++m].Price = 268435455;
                for (E = 0; j > e._matchDistances[E];)
                    E += 2;
                for (h = j;; ++h)
                    if (i = e._matchDistances[E + 1], s = D + Er(e, i, h, A), x = e._optimum[t + h], s < x.Price && (x.Price = s, x.PosPrev = t, x.BackPrev = i + 4, x.Prev1IsChar = 0), h == e._matchDistances[E]) {
                        if (w > h && (q = Math.min(w - 1 - h, e._numFastBytes), P = L(e._matchFinder, h, i, q), P >= 2)) {
                            for (K = 7 > $ ? 7 : 10, H = r + h & e._posStateMask, n = s + Yt[e._isMatch[(K << 4) + H] >>> 2] + ot(Ur(e._literalEncoder, r + h, C(e._matchFinder, h - 1 - 1)), 1, C(e._matchFinder, h - (i + 1) - 1), C(e._matchFinder, h - 1)), K = Q(K), H = r + h + 1 & e._posStateMask, k = n + Yt[2048 - e._isMatch[(K << 4) + H] >>> 2], M = k + Yt[2048 - e._isRep[K] >>> 2], F = h + 1 + P; t + F > m;)
                                e._optimum[++m].Price = 268435455;
                            s = M + (rr = qr(e._repMatchLenEncoder, P - 2, H), rr + Cr(e, 0, K, H)), x = e._optimum[t + F], s < x.Price && (x.Price = s, x.PosPrev = t + h + 1, x.BackPrev = 0, x.Prev1IsChar = 1, x.Prev2 = 1, x.PosPrev2 = t, x.BackPrev2 = i + 4);
                        }
                        if (E += 2, E == y)
                            break;
                    }
            }
        }
    } }
    function Er(e, r, t, o) { var n, s = J(t); return n = 128 > r ? e._distancesPrices[128 * s + r] : e._posSlotPrices[(s << 6) + Tr(r)] + e._alignPrices[15 & r], n + qr(e._lenEncoder, t - 2, o); }
    function Cr(e, r, t, o) { var n; return r ? (n = Yt[2048 - e._isRepG0[t] >>> 2], 1 == r ? n += Yt[e._isRepG1[t] >>> 2] : (n += Yt[2048 - e._isRepG1[t] >>> 2], n += bt(e._isRepG2[t], r - 2))) : (n = Yt[e._isRepG0[t] >>> 2], n += Yt[2048 - e._isRep0Long[(t << 4) + o] >>> 2]), n; }
    function Lr(e, r, t) { return Yt[e._isRepG0[r] >>> 2] + Yt[e._isRep0Long[(r << 4) + t] >>> 2]; }
    function zr(e) { gr(e), Mt(e._rangeEncoder), St(e._isMatch), St(e._isRep0Long), St(e._isRep), St(e._isRepG0), St(e._isRepG1), St(e._isRepG2), St(e._posEncoders), Xr(e._literalEncoder); for (var r = 0; 4 > r; ++r)
        St(e._posSlotEncoder[r].Models); Vr(e._lenEncoder, 1 << e._posStateBits), Vr(e._repMatchLenEncoder, 1 << e._posStateBits), St(e._posAlignEncoder.Models), e._longestMatchWasFound = 0, e._optimumEndIndex = 0, e._optimumCurrentIndex = 0, e._additionalOffset = 0; }
    function Fr(e, r) { r > 0 && (Y(e._matchFinder, r), e._additionalOffset += r); }
    function Ir(e) { var r = 0; return e._numDistancePairs = A(e._matchFinder, e._matchDistances), e._numDistancePairs > 0 && (r = e._matchDistances[e._numDistancePairs - 2], r == e._numFastBytes && (r += L(e._matchFinder, r - 1, e._matchDistances[e._numDistancePairs - 1], 273 - r))), ++e._additionalOffset, r; }
    function xr(e) { e._matchFinder && e._needReleaseMFStream && (e._matchFinder._stream = null, e._needReleaseMFStream = 0); }
    function Nr(e) { xr(e), e._rangeEncoder.Stream = null; }
    function Or(e, r) { e._dictionarySize = r; for (var t = 0; r > 1 << t; ++t)
        ; e._distTableSize = 2 * t; }
    function Ar(e, r) { var t = e._matchFinderType; e._matchFinderType = r, e._matchFinder && t != e._matchFinderType && (e._dictionarySizePrev = -1, e._matchFinder = null); }
    function Hr(e, r) { e.properties[0] = 9 * (5 * e._posStateBits + e._numLiteralPosStateBits) + e._numLiteralContextBits << 24 >> 24; for (var t = 0; 4 > t; ++t)
        e.properties[1 + t] = e._dictionarySize >> 8 * t << 24 >> 24; g(r, e.properties, 0, 5); }
    function Gr(e, r) { if (e._writeEndMark) {
        gt(e._rangeEncoder, e._isMatch, (e._state << 4) + r, 1), gt(e._rangeEncoder, e._isRep, e._state, 0), e._state = e._state < 7 ? 7 : 10, $r(e._lenEncoder, e._rangeEncoder, 0, r);
        var t = J(2);
        ft(e._posSlotEncoder[t], e._rangeEncoder, 63), kt(e._rangeEncoder, 67108863, 26), dt(e._posAlignEncoder, e._rangeEncoder, 15);
    } }
    function Wr(e) { return 2048 > e ? Tt[e] : 2097152 > e ? Tt[e >> 10] + 20 : Tt[e >> 20] + 40; }
    function Tr(e) { return 131072 > e ? Tt[e >> 6] + 12 : 134217728 > e ? Tt[e >> 16] + 32 : Tt[e >> 26] + 52; }
    function Yr(e, r, t, o) { 8 > t ? (gt(r, e._choice, 0, 0), ft(e._lowCoder[o], r, t)) : (t -= 8, gt(r, e._choice, 0, 1), 8 > t ? (gt(r, e._choice, 1, 0), ft(e._midCoder[o], r, t)) : (gt(r, e._choice, 1, 1), ft(e._highCoder, r, t - 8))); }
    function Zr(e) { e._choice = r(2), e._lowCoder = r(16), e._midCoder = r(16), e._highCoder = ut({}, 8); for (var t = 0; 16 > t; ++t)
        e._lowCoder[t] = ut({}, 3), e._midCoder[t] = ut({}, 3); return e; }
    function Vr(e, r) { St(e._choice); for (var t = 0; r > t; ++t)
        St(e._lowCoder[t].Models), St(e._midCoder[t].Models); St(e._highCoder.Models); }
    function jr(e, r, t, o, n) { var s, i, _, a, c; for (s = Yt[e._choice[0] >>> 2], i = Yt[2048 - e._choice[0] >>> 2], _ = i + Yt[e._choice[1] >>> 2], a = i + Yt[2048 - e._choice[1] >>> 2], c = 0, c = 0; 8 > c; ++c) {
        if (c >= t)
            return;
        o[n + c] = s + mt(e._lowCoder[r], c);
    } for (; 16 > c; ++c) {
        if (c >= t)
            return;
        o[n + c] = _ + mt(e._midCoder[r], c - 8);
    } for (; t > c; ++c)
        o[n + c] = a + mt(e._highCoder, c - 8 - 8); }
    function $r(e, r, t, o) { Yr(e, r, t, o), 0 == --e._counters[o] && (jr(e, o, e._tableSize, e._prices, 272 * o), e._counters[o] = e._tableSize); }
    function Kr(e) { return Zr(e), e._prices = [], e._counters = [], e; }
    function qr(e, r, t) { return e._prices[272 * t + r]; }
    function Jr(e, r) { for (var t = 0; r > t; ++t)
        jr(e, t, e._tableSize, e._prices, 272 * t), e._counters[t] = e._tableSize; }
    function Qr(e, t, o) { var n, s; if (null == e.m_Coders || e.m_NumPrevBits != o || e.m_NumPosBits != t)
        for (e.m_NumPosBits = t, e.m_PosMask = (1 << t) - 1, e.m_NumPrevBits = o, s = 1 << e.m_NumPrevBits + e.m_NumPosBits, e.m_Coders = r(s), n = 0; s > n; ++n)
            e.m_Coders[n] = tt({}); }
    function Ur(e, r, t) { return e.m_Coders[((r & e.m_PosMask) << e.m_NumPrevBits) + ((255 & t) >>> 8 - e.m_NumPrevBits)]; }
    function Xr(e) { var r, t = 1 << e.m_NumPrevBits + e.m_NumPosBits; for (r = 0; t > r; ++r)
        St(e.m_Coders[r].m_Encoders); }
    function et(e, r, t) { var o, n, s = 1; for (n = 7; n >= 0; --n)
        o = t >> n & 1, gt(r, e.m_Encoders, s, o), s = s << 1 | o; }
    function rt(e, r, t, o) { var n, s, i, _, a = 1, c = 1; for (s = 7; s >= 0; --s)
        n = o >> s & 1, _ = c, a && (i = t >> s & 1, _ += 1 + i << 8, a = i == n), gt(r, e.m_Encoders, _, n), c = c << 1 | n; }
    function tt(e) { return e.m_Encoders = r(768), e; }
    function ot(e, r, t, o) { var n, s, i = 1, _ = 7, a = 0; if (r)
        for (; _ >= 0; --_)
            if (s = t >> _ & 1, n = o >> _ & 1, a += bt(e.m_Encoders[(1 + s << 8) + i], n), i = i << 1 | n, s != n) {
                --_;
                break;
            } for (; _ >= 0; --_)
        n = o >> _ & 1, a += bt(e.m_Encoders[i], n), i = i << 1 | n; return a; }
    function nt(e) { e.BackPrev = -1, e.Prev1IsChar = 0; }
    function st(e) { e.BackPrev = 0, e.Prev1IsChar = 0; }
    function it(e, t) { return e.NumBitLevels = t, e.Models = r(1 << t), e; }
    function _t(e, r) { var t, o = 1; for (t = e.NumBitLevels; 0 != t; --t)
        o = (o << 1) + lt(r, e.Models, o); return o - (1 << e.NumBitLevels); }
    function at(e, r) { var t, o, n = 1, s = 0; for (o = 0; o < e.NumBitLevels; ++o)
        t = lt(r, e.Models, n), n <<= 1, n += t, s |= t << o; return s; }
    function ct(e, r, t, o) { var n, s, i = 1, _ = 0; for (s = 0; o > s; ++s)
        n = lt(t, e, r + i), i <<= 1, i += n, _ |= n << s; return _; }
    function ut(e, t) { return e.NumBitLevels = t, e.Models = r(1 << t), e; }
    function ft(e, r, t) { var o, n, s = 1; for (n = e.NumBitLevels; 0 != n;)
        --n, o = t >>> n & 1, gt(r, e.Models, s, o), s = s << 1 | o; }
    function mt(e, r) { var t, o, n = 1, s = 0; for (o = e.NumBitLevels; 0 != o;)
        --o, t = r >>> o & 1, s += bt(e.Models[n], t), n = (n << 1) + t; return s; }
    function dt(e, r, t) { var o, n, s = 1; for (n = 0; n < e.NumBitLevels; ++n)
        o = 1 & t, gt(r, e.Models, s, o), s = s << 1 | o, t >>= 1; }
    function pt(e, r) { var t, o, n = 1, s = 0; for (o = e.NumBitLevels; 0 != o; --o)
        t = 1 & r, r >>>= 1, s += bt(e.Models[n], t), n = n << 1 | t; return s; }
    function ht(e, r, t, o, n) { var s, i, _ = 1; for (i = 0; o > i; ++i)
        s = 1 & n, gt(t, e, r + _, s), _ = _ << 1 | s, n >>= 1; }
    function Pt(e, r, t, o) { var n, s, i = 1, _ = 0; for (s = t; 0 != s; --s)
        n = 1 & o, o >>>= 1, _ += Yt[(2047 & (e[r + i] - n ^ -n)) >>> 2], i = i << 1 | n; return _; }
    function lt(e, r, t) { var o, n = r[t]; return o = (e.Range >>> 11) * n, (-2147483648 ^ e.Code) < (-2147483648 ^ o) ? (e.Range = o, r[t] = n + (2048 - n >>> 5) << 16 >> 16, -16777216 & e.Range || (e.Code = e.Code << 8 | P(e.Stream), e.Range <<= 8), 0) : (e.Range -= o, e.Code -= o, r[t] = n - (n >>> 5) << 16 >> 16, -16777216 & e.Range || (e.Code = e.Code << 8 | P(e.Stream), e.Range <<= 8), 1); }
    function vt(e, r) { var t, o, n = 0; for (t = r; 0 != t; --t)
        e.Range >>>= 1, o = e.Code - e.Range >>> 31, e.Code -= e.Range & o - 1, n = n << 1 | 1 - o, -16777216 & e.Range || (e.Code = e.Code << 8 | P(e.Stream), e.Range <<= 8); return n; }
    function Bt(e) { e.Code = 0, e.Range = -1; for (var r = 0; 5 > r; ++r)
        e.Code = e.Code << 8 | P(e.Stream); }
    function St(e) { for (var r = e.length - 1; r >= 0; --r)
        e[r] = 1024; }
    function gt(e, r, n, s) { var i, a = r[n]; i = (e.Range >>> 11) * a, s ? (e.Low = t(e.Low, o(_(i), [4294967295, 0])), e.Range -= i, r[n] = a - (a >>> 5) << 16 >> 16) : (e.Range = i, r[n] = a + (2048 - a >>> 5) << 16 >> 16), -16777216 & e.Range || (e.Range <<= 8, Dt(e)); }
    function kt(e, r, o) { for (var n = o - 1; n >= 0; --n)
        e.Range >>>= 1, 1 == (r >>> n & 1) && (e.Low = t(e.Low, _(e.Range))), -16777216 & e.Range || (e.Range <<= 8, Dt(e)); }
    function Rt(e) { return t(t(_(e._cacheSize), e._position), [4, 0]); }
    function Mt(e) { e._position = Ht, e.Low = Ht, e.Range = -1, e._cacheSize = 1, e._cache = 0; }
    function Dt(e) { var r, s = a(d(e.Low, 32)); if (0 != s || n(e.Low, [4278190080, 0]) < 0) {
        e._position = t(e._position, _(e._cacheSize)), r = e._cache;
        do
            S(e.Stream, r + s), r = 255;
        while (0 != --e._cacheSize);
        e._cache = a(e.Low) >>> 24;
    } ++e._cacheSize, e.Low = f(o(e.Low, [16777215, 0]), 8); }
    function bt(e, r) { return Yt[(2047 & (e - r ^ -r)) >>> 2]; }
    function wt(e) {
        for (var r, t, o, n = 0, s = 0, i = e.length, _ = [], a = []; i > n; ++n, ++s) {
            if (r = 255 & e[n], 128 & r)
                if (192 == (224 & r)) {
                    if (n + 1 >= i)
                        return e;
                    if (t = 255 & e[++n], 128 != (192 & t))
                        return e;
                    a[s] = (31 & r) << 6 | 63 & t;
                }
                else {
                    if (224 != (240 & r))
                        return e;
                    if (n + 2 >= i)
                        return e;
                    if (t = 255 & e[++n], 128 != (192 & t))
                        return e;
                    if (o = 255 & e[++n], 128 != (192 & o))
                        return e;
                    a[s] = (15 & r) << 12 | (63 & t) << 6 | 63 & o;
                }
            else {
                if (!r)
                    return e;
                a[s] = r;
            }
            16383 == s && (_.push(String.fromCharCode.apply(String, a)), s = -1);
        }
        return s > 0 && (a.length = s, _.push(String.fromCharCode.apply(String, a))), _.join("");
    }
    function yt(e) { var r, t, o, n = [], s = 0, i = e.length; if ("object" == typeof e)
        return e; for (k(e, 0, i, n, 0), o = 0; i > o; ++o)
        r = n[o], r >= 1 && 127 >= r ? ++s : s += !r || r >= 128 && 2047 >= r ? 2 : 3; for (t = [], s = 0, o = 0; i > o; ++o)
        r = n[o], r >= 1 && 127 >= r ? t[s++] = r << 24 >> 24 : !r || r >= 128 && 2047 >= r ? (t[s++] = (192 | r >> 6 & 31) << 24 >> 24, t[s++] = (128 | 63 & r) << 24 >> 24) : (t[s++] = (224 | r >> 12 & 15) << 24 >> 24, t[s++] = (128 | r >> 6 & 63) << 24 >> 24, t[s++] = (128 | 63 & r) << 24 >> 24); return t; }
    function Et(e) { return e[1] + e[0]; }
    function Ct(r, t, o, n) { function s() { try {
        for (var e, r = (new Date).getTime(); er(a.c.chunker);)
            if (i = Et(a.c.chunker.inBytesProcessed) / Et(a.c.length_0), (new Date).getTime() - r > 200)
                return n(i), xt(s, 0), 0;
        n(1), e = B(a.c.output), xt(o.bind(null, e), 0);
    }
    catch (t) {
        o(null, t);
    } } var i, _, a = {}; "function" != typeof o && (_ = o, o = n = 0), n = n || function (r) { return "undefined" != typeof _ ? e(r, _) : void 0; }, o = o || function (e, r) { return "undefined" != typeof _ ? postMessage({ action: zt, cbn: _, result: e, error: r }) : void 0; }; try {
        a.c = b({}, yt(r), Zt(t)), n(0);
    }
    catch (c) {
        return o(null, c);
    } xt(s, 0); }
    function Lt(r, t, o) { function n() { try {
        for (var e, r = 0, i = (new Date).getTime(); er(c.d.chunker);)
            if (++r % 1e3 == 0 && (new Date).getTime() - i > 200)
                return _ && (s = Et(c.d.chunker.decoder.nowPos64) / a, o(s)), xt(n, 0), 0;
        o(1), e = wt(B(c.d.output)), xt(t.bind(null, e), 0);
    }
    catch (u) {
        t(null, u);
    } } var s, i, _, a, c = {}; "function" != typeof t && (i = t, t = o = 0), o = o || function (r) { return "undefined" != typeof i ? e(_ ? r : -1, i) : void 0; }, t = t || function (e, r) { return "undefined" != typeof i ? postMessage({ action: Ft, cbn: i, result: e, error: r }) : void 0; }; try {
        c.d = y({}, r), a = Et(c.d.length_0), _ = a > -1, o(0);
    }
    catch (u) {
        return t(null, u);
    } xt(n, 0); }
    var zt = 1, Ft = 2, It = 3, xt = "function" == typeof setImmediate ? setImmediate : setTimeout, Nt = 4294967296, Ot = [4294967295, -Nt], At = [0, -0x8000000000000000], Ht = [0, 0], Gt = [1, 0], Wt = function () { var e, r, t, o = []; for (e = 0; 256 > e; ++e) {
        for (t = e, r = 0; 8 > r; ++r)
            0 != (1 & t) ? t = t >>> 1 ^ -306674912 : t >>>= 1;
        o[e] = t;
    } return o; }(), Tt = function () { var e, r, t, o = 2, n = [0, 1]; for (t = 2; 22 > t; ++t)
        for (r = 1 << (t >> 1) - 1, e = 0; r > e; ++e, ++o)
            n[o] = t << 24 >> 24; return n; }(), Yt = function () { var e, r, t, o, n = []; for (r = 8; r >= 0; --r)
        for (o = 1 << 9 - r - 1, e = 1 << 9 - r, t = o; e > t; ++t)
            n[t] = (r << 6) + (e - t << 6 >>> 9 - r - 1); return n; }(), Zt = function () { var e = [{ s: 16, f: 64, m: 0 }, { s: 20, f: 64, m: 0 }, { s: 19, f: 64, m: 1 }, { s: 20, f: 64, m: 1 }, { s: 21, f: 128, m: 1 }, { s: 22, f: 128, m: 1 }, { s: 23, f: 128, m: 1 }, { s: 24, f: 255, m: 1 }, { s: 25, f: 255, m: 1 }]; return function (r) { return e[r - 1] || e[6]; }; }();
    return "undefined" == typeof onmessage || "undefined" != typeof window && "undefined" != typeof window.document || !function () { onmessage = function (e) { e && e.data && (e.data.action == Ft ? LZMA.decompress(e.data.data, e.data.cbn) : e.data.action == zt && LZMA.compress(e.data.data, e.data.mode, e.data.cbn)); }; }(), { compress: Ct, decompress: Lt };
}();
// this.LZMA = this.LZMA_WORKER = LZMA;
if (typeof module !== "undefined")
    window.LZMA = LZMA;
    //module.exports = LZMA;