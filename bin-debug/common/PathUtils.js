var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 路径工具
 * @author Exin
 */
var PathUtils = (function () {
    function PathUtils() {
    }
    Object.defineProperty(PathUtils, "RESOURC", {
        /**
         * 获取资源路径
         */
        get: function () {
            if (ConstValue.p_LOGIN_MODEL == 1) {
                PathUtils.CDN_URL = "";
            }
            PathUtils.CDN_URL = "";
            return PathUtils.CDN_URL + PathUtils.RESOURC_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathUtils, "RESOURCSUB1", {
        get: function () {
            if (ConstValue.p_LOGIN_MODEL == 1) {
                PathUtils.CDN_URL = "";
            }
            PathUtils.CDN_URL = "";
            return PathUtils.CDN_URL + PathUtils.RESOURC_SUB1_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathUtils, "RESOURCSUB2", {
        get: function () {
            if (ConstValue.p_LOGIN_MODEL == 1) {
                PathUtils.CDN_URL = "";
            }
            PathUtils.CDN_URL = "";
            return PathUtils.CDN_URL + PathUtils.RESOURC_SUB2_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathUtils, "NOTICE", {
        /**
         * 获取资源路径
         */
        get: function () {
            if (ConstValue.p_LOGIN_MODEL == 1) {
                PathUtils.CDN_URL = "";
            }
            return PathUtils.CDN_URL + PathUtils.RESOURC_URL + PathUtils.NOTICE_URL;
        },
        enumerable: true,
        configurable: true
    });
    PathUtils.CND_URL_49YOU = ""; // "http://img.dzs.c49you.com/";//ip:  139.199.154.144
    PathUtils.CDN_URL = "https://www.iogood.cn:442/pptcdn/"; //118.89.55.39
    // public static CDN_URL: string = "";
    PathUtils.RESOURC_URL = "resource/";
    PathUtils.NOTICE_URL = "notice/";
    PathUtils.RESOURC_SUB1_URL = "stage1/resource/";
    PathUtils.RESOURC_SUB2_URL = "stage2/resource/";
    PathUtils.Version_Default_Res = "default.res.json";
    PathUtils.Version_Default_Thm = "default.thm.json";
    PathUtils.Version_SUBPACK1_Res = "subpack1.res.json";
    PathUtils.Version_SUBPACK2_Res = "subpack2.res.json";
    return PathUtils;
}());
__reflect(PathUtils.prototype, "PathUtils");
//# sourceMappingURL=PathUtils.js.map