var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EBitUtil = (function () {
    function EBitUtil() {
    }
    //是否设置指定位
    EBitUtil.isSetBit = function (value, bit) {
        if (bit > 31) {
            return false;
        }
        return (value & (1 << bit)) > 0;
    };
    //设置位
    EBitUtil.SetBit = function (value, bit) {
        if (bit > 31) {
            return value;
        }
        return value | (1 << bit);
    };
    //清空位
    EBitUtil.ClearBit = function (value, bit) {
        if (bit > 31) {
            return value;
        }
        return value & ~(1 << bit);
    };
    EBitUtil.getArr = function (value) {
        var arr = [];
        value.position = 0;
        while (value.bytesAvailable > 0) {
            arr.push(value.readByte());
        }
        // console.log("getArr bit==================="+arr)
        return arr;
    };
    return EBitUtil;
}());
__reflect(EBitUtil.prototype, "EBitUtil");
//# sourceMappingURL=EBitUtil.js.map