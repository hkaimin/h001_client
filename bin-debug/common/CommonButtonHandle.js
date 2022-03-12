var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 按钮公共处理
 */
var CommonButtonHandle = (function () {
    function CommonButtonHandle() {
    }
    CommonButtonHandle.beginTouch = function (targetT, context) {
        targetT.addEventListener(egret.TouchEvent.TOUCH_BEGIN, CommonButtonHandle.onButtonClickBegin, context);
        targetT.addEventListener(egret.TouchEvent.TOUCH_END, CommonButtonHandle.onButtonClickEnd, context);
        targetT.addEventListener(egret.TouchEvent.TOUCH_MOVE, CommonButtonHandle.onButtonClickEnd, context);
    };
    CommonButtonHandle.onButtonClickBegin = function (e) {
        // console.log("onButtonClickBegin==========");
        CommonButtonHandle.scaleXOld = e.target.scaleX;
        CommonButtonHandle.scaleYOld = e.target.scaleY;
        e.target.scaleX *= 1.1;
        e.target.scaleY *= 1.1;
        if (ConstValue.P_LOGIN_OBJ == null)
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
    };
    CommonButtonHandle.onButtonClickEnd = function (e) {
        // console.log("onButtonClickEnd==========");
        e.target.scaleX = CommonButtonHandle.scaleXOld;
        e.target.scaleY = CommonButtonHandle.scaleYOld;
    };
    CommonButtonHandle.scaleXOld = 0;
    CommonButtonHandle.scaleYOld = 0;
    return CommonButtonHandle;
}());
__reflect(CommonButtonHandle.prototype, "CommonButtonHandle");
//# sourceMappingURL=CommonButtonHandle.js.map