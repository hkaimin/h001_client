var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 登录注册相关模块
 */
var LoginModule = (function () {
    function LoginModule(ct) {
        this.context = ct;
        this.init();
    }
    LoginModule.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.objChild = this.context.addBackGround("login_bg_ppt_png");
                this.context.addChild(this.objChild);
                this.panel = new eui.Panel();
                this.panel.skinName = "resource/eui_skins/UserUI/LoginUI.exml";
                this.panel.title = "Title";
                this.panel.horizontalCenter = 0;
                this.panel.verticalCenter = 0;
                this.context.addChild(this.panel);
                if (ConstValue.p_LOGIN_MODEL == 2) {
                    this.panel.getChildByName("account_lb_txt").visible = false;
                    this.panel.getChildByName("password_lb_txt").visible = false;
                    this.panel.getChildByName("account_lb_title").visible = false;
                    this.panel.getChildByName("password_lb_title").visible = false;
                    this.panel.getChildByName("btn_registe").visible = false;
                    this.panel.getChildByName("btn_login").visible = false;
                    this.panel.getChildByName("btn_login_wx").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                    CommonButtonHandle.beginTouch(this.panel.getChildByName("btn_login_wx"), this);
                    CommonTools.fixFix(this.context, this.panel.getChildByName("btn_login_wx"), 2, -15, 20);
                }
                else {
                    this.panel.getChildByName("btn_login").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                    this.panel.getChildByName("btn_registe").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                    this.panel.getChildByName("account_lb_txt").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                    this.panel.getChildByName("password_lb_txt").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                    this.panel.getChildByName("btn_login_wx").visible = false;
                    CommonTools.fixFix(this.context, this.panel.getChildByName("btn_login"), 2, -60, 10);
                    CommonTools.fixFix(this.context, this.panel.getChildByName("btn_registe"), 2, -60, 10);
                    CommonTools.fixFix(this.context, this.panel.getChildByName("account_lb_txt"), 2, 0, 20);
                    CommonTools.fixFix(this.context, this.panel.getChildByName("password_lb_txt"), 2, 0, 10);
                    CommonTools.fixFix(this.context, this.panel.getChildByName("account_lb_title"), 2, 0, 20);
                    CommonTools.fixFix(this.context, this.panel.getChildByName("password_lb_title"), 2, 0, 10);
                }
                ConstValue.videoAd = null;
                ConstValue.videoAdOBJ = null;
                ConstValue.videoIndx = 0;
                return [2 /*return*/];
            });
        });
    };
    LoginModule.prototype.addCommonTips = function (tips) {
        CommonTools.addCommonTips(this.panel, tips);
    };
    LoginModule.prototype.onClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                if (this.context.loadingView != null && !ConstValue.P_IS_DEBUG) {
                    CommonTools.log("还在加载中......return ");
                    return [2 /*return*/];
                }
                if (!this.bClick) {
                    // CommonAudioHandle.play("mainmenu_mp3",0);
                    this.bClick = true;
                }
                name = e.target.name;
                switch (name) {
                    case "btn_notice":
                        this.showNotice("resource/eui_skins/UserUI/ShengminUI.exml", name);
                        break;
                    case "btn_close":
                        this.closeNotice();
                        break;
                    case "btn_forgetpas":
                        this.showNotice("resource/eui_skins/UserUI/GetPassword.exml", name);
                        break;
                    case "btn_registe":
                        this.showNotice("resource/eui_skins/UserUI/RegisteUI.exml", name);
                        break;
                    case "btn_login":
                        if (ConstValue.p_USE_WALLET == 1) {
                            try {
                                ContractSol.sender = window["web3"].eth.accounts[0];
                                this.btnClickWalletLogin(ContractSol.sender);
                            }
                            catch (error) {
                                CommonTools.addCommonTips(this.panel, ConstValue.P_NO_USER_ADDRESS);
                                console.log("--btn_login error----" + error);
                                return [2 /*return*/];
                            }
                        }
                        else {
                            this.btnClickLogin();
                        }
                        break;
                    case "btn_login_wx":
                        ConstValue.sysTips = [];
                        ConstValue.oneTipsCnt = 0;
                        ConstValue.oneTipsCur = 0;
                        ConstValue.oneTips = {};
                        this.btnClickWxLogin();
                        break;
                    case "btn_nologinman":
                        break;
                    case "btn_verify_forget":
                        CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_VERIFY);
                        break;
                    case "btn_confirm_forget":
                        this.btnClickConfirmForget();
                        break;
                    case "btn_verify_registe":
                        CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_VERIFY);
                        break;
                    case "btn_confirm_registe":
                        this.btnClickConfirmRegiste();
                        break;
                    default:
                        CommonTools.log("11111111 default");
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    LoginModule.prototype.btnClickLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account, pwd, sData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = this.panel.getChildByName("account_lb_txt");
                        if (account.text == "") {
                            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_ACCOUNT);
                            return [2 /*return*/];
                        }
                        pwd = this.panel.getChildByName("password_lb_txt");
                        if (pwd.text == "") {
                            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_PASSWORD);
                            return [2 /*return*/];
                        }
                        if (!ConstValue.P_IS_DEBUG) return [3 /*break*/, 2];
                        this.clear();
                        return [4 /*yield*/, this.context.loadResource("preloadHall", 2)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        sData = CommonTools.getDataJsonStr("login", 1, { account: account.text, password: pwd.text });
                        if (ConstValue.P_NET_OBJ == null) {
                            ConstValue.P_NET_OBJ = new WebSocketUtil(sData); //建立连接
                        }
                        else {
                            ConstValue.P_NET_OBJ.sendData(sData);
                        }
                        ConstValue.cacheUserAccount = account.text; //缓存账号
                        ConstValue.cacheUserPwd = pwd.text; //缓存密码
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginModule.prototype.btnClickWxLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var code, obj, sData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, platform.login()];
                    case 1:
                        code = _a.sent();
                        obj = JSON.parse(code);
                        sData = CommonTools.getDataJsonStr("loginWX", 1, { openID: obj.openid, sHead: "", sName: "", iGender: 0 });
                        if (ConstValue.P_NET_OBJ == null) {
                            ConstValue.P_NET_OBJ = new WebSocketUtil(sData); //建立连接
                        }
                        else {
                            ConstValue.P_NET_OBJ.sendData(sData);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginModule.prototype.btnClickWalletLogin = function (fromaddr) {
        var sData = CommonTools.getDataJsonStr("loginWX", 1, { openID: fromaddr, sHead: "", sName: "", iGender: 0 });
        if (ConstValue.P_NET_OBJ == null) {
            ConstValue.P_NET_OBJ = new WebSocketUtil(sData); //建立连接
        }
        else {
            ConstValue.P_NET_OBJ.sendData(sData);
        }
    };
    LoginModule.prototype.clear = function () {
        this.context.removeChild(this.objChild);
        this.context.removeChild(this.panel);
        ConstValue.P_LOGIN_OBJ = null;
    };
    LoginModule.prototype.btnClickConfirmForget = function () {
        var pwd = this.panelNotice.getChildByName("password_lb_txt");
        if (pwd.text == "") {
            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_PASSWORD);
            return;
        }
        var verify = this.panelNotice.getChildByName("verify_lb_txt");
        if (verify.text == "") {
            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_VERIFY);
            return;
        }
        CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_MODIFY_SUCCESS);
        this.closeNotice();
    };
    LoginModule.prototype.btnClickConfirmRegiste = function () {
        var invite = this.panelNotice.getChildByName("invite_lb_txt");
        if (invite.text == "") {
            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_INVITE);
            return;
        }
        var account = this.panelNotice.getChildByName("account_lb_txt");
        if (account.text == "") {
            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_ACCOUNT);
            return;
        }
        var pwd = this.panelNotice.getChildByName("password_lb_txt");
        if (pwd.text == "") {
            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_PASSWORD);
            return;
        }
        var verify = this.panelNotice.getChildByName("verify_lb_txt");
        if (verify.text == "") {
            CommonTools.addCommonTips(this.panel, ConstValue.P_NULL_VERIFY);
            return;
        }
        if (ConstValue.P_IS_DEBUG) {
            CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_REGISTE_SUCCESS);
            this.closeNotice();
        }
        else {
            var sData = CommonTools.getDataJsonStr("register", 1, { account: account.text, password: pwd.text, pcode: invite.text });
            if (ConstValue.P_NET_OBJ == null) {
                ConstValue.P_NET_OBJ = new WebSocketUtil(sData); //建立连接
            }
            else {
                ConstValue.P_NET_OBJ.sendData(sData);
            }
        }
    };
    LoginModule.prototype.showNotice = function (exmlName, btnName) {
        // this.topMask = CommonTools.addShapeBG(this.context.getStageWidth(),this.context.getStageHeight());
        // this.context.addChild(this.topMask);
        this.panelNotice = new eui.Panel();
        this.panelNotice.skinName = exmlName;
        this.panelNotice.title = "Title";
        this.panelNotice.horizontalCenter = 0;
        this.panelNotice.verticalCenter = 0;
        this.context.addChild(this.panelNotice);
        // CommonButtonHandle.beginTouch(this.panelNotice.getChildByName("btn_close"),this);
        this.panelNotice.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.handlePanel(this.panelNotice, btnName);
    };
    /**
     * 回包处理
     */
    LoginModule.prototype.handlePacket = function (jsonObj) {
        return __awaiter(this, void 0, void 0, function () {
            var sData, i, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(jsonObj.f == "register")) return [3 /*break*/, 1];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                            CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_REGISTE_FAIL);
                            return [2 /*return*/];
                        }
                        else {
                            CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_REGISTE_SUCCESS);
                            this.closeNotice();
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(jsonObj.f == "login" || jsonObj.f == "loginWX")) return [3 /*break*/, 2];
                        CommonTools.log("11111111 -----------------------------22");
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                            CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_LOGIN_FAIL);
                            CommonTools.log("11111111 --------------------------------piercj default 1");
                            return [2 /*return*/];
                        }
                        else {
                            // CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_LOGIN_SUCCESS);
                            if (!ConstValue.cacheHasLoginSuccess) {
                                CommonTools.log("11111111 --------------------------------piercj default 1");
                                sData = CommonTools.getDataJsonStr("entergame", 1, {});
                                ConstValue.P_NET_OBJ.sendData(sData);
                                ConstValue.cacheHasLoginSuccess = true;
                            }
                        }
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(jsonObj.f == "entergame")) return [3 /*break*/, 5];
                        if (!(jsonObj.m != "" || jsonObj.s != 1)) return [3 /*break*/, 3];
                        CommonTools.addCommonTips(this.panel, ConstValue.P_SEND_HALLBACK_FAIL);
                        return [2 /*return*/];
                    case 3:
                        // CommonTools.addCommonTips(this.panel,"xxxxxx");
                        ConstValue.cacheUserInfo = jsonObj.d;
                        // ConstValue.cacheUserInfo.headPic = "https://wx.qlogo.cn/mmopen/vi_32/6siawicCkenuXrIBTMP7JoaBGZ1u3O7LibUjiacyfAZquMaAvFLJHsVht7hhFy3SGSL2znKHRUb1F8k2y5UTycw7kQ/132";
                        for (i = 0; i < this.panel.numChildren; i++) {
                            obj = this.panel.getChildAt(i);
                            obj.visible = false;
                        }
                        return [4 /*yield*/, this.context.loadResource("preloadHall", 2)];
                    case 4:
                        _a.sent();
                        this.clear();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginModule.prototype.handlePanel = function (panelCtx, btnName) {
        switch (btnName) {
            case "btn_forgetpas":
                panelCtx.getChildByName("btn_verify_forget").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                panelCtx.getChildByName("btn_confirm_forget").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                // CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_verify_forget"),this);
                // CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_confirm_forget"),this);
                break;
            case "btn_registe":
                panelCtx.getChildByName("btn_verify_registe").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                panelCtx.getChildByName("btn_confirm_registe").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                // CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_verify_registe"),this);
                // CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_confirm_registe"),this);
                break;
            default:
                CommonTools.log("22222222 default");
                break;
        }
    };
    LoginModule.prototype.closeNotice = function () {
        if (this.panelNotice != null)
            this.context.removeChild(this.panelNotice);
        this.panelNotice = null;
    };
    return LoginModule;
}());
__reflect(LoginModule.prototype, "LoginModule");
//# sourceMappingURL=LoginModule.js.map