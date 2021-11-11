//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoaded = false;
        _this.dDataInfo = null; //这个是地图数据
        _this.dDataInfo2 = null; //这个是更新属性数据
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            CommonTools.log("===========onPause 1");
        });
        egret.lifecycle.onPause = function () {
            //egret.ticker.pause();
            CommonTools.log("===========onPause 2");
        };
        // egret.lifecycle.onShow = (resObj) => {
        //     CommonTools.log("===========resObj=="+resObj);
        //     Main.roomkey = resObj;
        //     if(ConstValue.P_HALL_OBJ!=null)ConstValue.P_HALL_OBJ.openWXPVP();
        // }
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
            if (ConstValue.cacheUserInfo != null && !ConstValue.P_NET_OBJ.socket.connected) {
                ConstValue.P_NET_OBJ.socketConnect();
                ConstValue.P_NET_OBJ.out_relogin();
                CommonTools.log("-----resumeresumeresumeresume1-------------------");
            }
            if (ConstValue.cacheUserInfo != null && ConstValue.P_NET_OBJ.socket.connected && WebSocketUtil.closeFlag) {
                CommonTools.log("-----resumeresumeresumeresume2-------------------");
                ConstValue.P_NET_OBJ.out_relogin();
            }
            CommonTools.log("===========onResume");
            CommonAudioHandle.curPlayName = "";
            if (ConstValue.P_LOGIN_OBJ == null)
                CommonAudioHandle.play("mainmenu_mp3", 0);
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        egret.ImageLoader.crossOrigin = "anonymous";
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            CommonTools.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(ConstValue.p_LOGIN_MODEL == 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadResource("pre_preload", 1)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(ConstValue.p_LOGIN_MODEL == 2)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadResourceStart("pre_preload", 1)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.doNext = function (iSub) {
        return __awaiter(this, void 0, void 0, function () {
            var sData, sData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (ConstValue.P_CONTEXT == null) {
                            ConstValue.P_CONTEXT = this;
                        }
                        this.stage.removeChild(this.loadingView);
                        this.loadingView = null;
                        if (!(iSub == 1)) return [3 /*break*/, 1];
                        ConstValue.P_LOGIN_OBJ = new LoginModule(this);
                        return [3 /*break*/, 8];
                    case 1:
                        if (!(iSub == 2)) return [3 /*break*/, 2];
                        ConstValue.P_HALL_OBJ = new HallModule(this);
                        return [3 /*break*/, 8];
                    case 2:
                        if (!(iSub == 3)) return [3 /*break*/, 3];
                        if (ConstValue.P_IS_DEBUG) {
                            // ConstValue.P_FIGHT_OBJ = new FightingModule(this);
                        }
                        else {
                            sData = CommonTools.getDataJsonStr("enterPPRoom", 1, {});
                            ConstValue.P_NET_OBJ.sendData(sData);
                        }
                        return [3 /*break*/, 8];
                    case 3:
                        if (!(iSub == 4)) return [3 /*break*/, 4];
                        if (ConstValue.P_IS_DEBUG) {
                        }
                        else {
                            sData = CommonTools.getDataJsonStr("openDiyMapUI", 1, { theme: 1 });
                            ConstValue.P_NET_OBJ.sendData(sData);
                        }
                        return [3 /*break*/, 8];
                    case 4:
                        if (!(iSub == 5)) return [3 /*break*/, 5];
                        if (ConstValue.P_IS_DEBUG) {
                        }
                        else {
                        }
                        return [3 /*break*/, 8];
                    case 5:
                        if (!(iSub == 6)) return [3 /*break*/, 6];
                        if (ConstValue.P_IS_DEBUG) {
                        }
                        else {
                            if (ConstValue.P_FIGHT_OBJ == null) {
                                ConstValue.P_FIGHT_OBJ = new FightingModule(this);
                            }
                            ConstValue.P_FIGHT_OBJ.initMapData(this.dDataInfo);
                            if (FightingModule.readyTwo && !FightingModule.readyRes) {
                                ConstValue.P_FIGHT_OBJ.releaseVsPanel();
                                ConstValue.P_FIGHT_OBJ.updateInfo(this.dDataInfo2);
                            }
                        }
                        return [3 /*break*/, 8];
                    case 6:
                        if (!(iSub == 7)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.loadResource("preloadHall", 2)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function (loadName, nextThing) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (loadName == "fighting" || loadName == "diymap")
                            HallModule.isSafeArea = false;
                        this.loadingView = new LoadingUI(this.stage.stageWidth, this.stage.stageHeight, this);
                        this.stage.addChildAt(this.loadingView, 1);
                        if (!!this.isLoaded) return [3 /*break*/, 1];
                        if (ConstValue.p_LOGIN_MODEL == 1) {
                            CommonTools.resourceMgr.addConfig(PathUtils.RESOURC + PathUtils.Version_Default_Res, PathUtils.RESOURC);
                        }
                        else if (ConstValue.p_LOGIN_MODEL == 2) {
                            CommonTools.resourceMgr.addConfig(PathUtils.RESOURCSUB1 + PathUtils.Version_SUBPACK1_Res, PathUtils.RESOURCSUB1);
                            CommonTools.resourceMgr.addConfig(PathUtils.RESOURCSUB2 + PathUtils.Version_SUBPACK2_Res, PathUtils.RESOURCSUB2);
                        }
                        CommonTools.resourceMgr.loadConfig(this.onLoginConfigComplete, this);
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(ConstValue.cacheKeyGroup[loadName] == null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, RES.loadGroup(loadName, 0, this.loadingView)];
                    case 2:
                        _a.sent();
                        ConstValue.cacheKeyGroup[loadName] = 1;
                        _a.label = 3;
                    case 3:
                        if (ConstValue.P_IS_DEBUG) {
                            this.stage.removeChild(this.loadingView);
                        }
                        this.doNext(nextThing);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.onLoginConfigComplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(ConstValue.p_LOGIN_MODEL == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadTheme()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("pre_preload", 0, this.loadingView)];
                    case 2:
                        _a.sent();
                        this.isLoaded = true;
                        ConstValue.cacheKeyGroup["preload"] = 1;
                        this.doNext(1);
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(ConstValue.p_LOGIN_MODEL == 2)) return [3 /*break*/, 5];
                        return [4 /*yield*/, RES.loadGroup("sub1preload", 0, this.loadingView)];
                    case 4:
                        _a.sent();
                        this.isLoaded = true;
                        ConstValue.cacheKeyGroup["sub1preload"] = 1;
                        this.doNext(7);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResourceStart = function (loadName, nextThing) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.loadingView = new LoadingUI(this.stage.stageWidth, this.stage.stageHeight, this);
                    this.stage.addChildAt(this.loadingView, 1);
                    CommonTools.resourceMgr.addConfig(PathUtils.RESOURC + PathUtils.Version_Default_Res, PathUtils.RESOURC);
                    CommonTools.resourceMgr.loadConfig(this.onLoginConfigCompleteStart, this);
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.onLoginConfigCompleteStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTheme()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("pre_preload", 0, this.loadingView)];
                    case 2:
                        _a.sent();
                        ConstValue.cacheKeyGroup["preload"] = 1;
                        this.doNext(1);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 偷偷加载
     *
     */
    Main.prototype.loadResourceBlackground = function (loadName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CommonTools.log("loadBlackGround=================2");
                        return [4 /*yield*/, RES.loadGroup(loadName, 0, null)];
                    case 1:
                        _a.sent();
                        CommonTools.log("loadBlackGround=================2_1");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.addBackGround = function (name) {
        var sky = this.createBitmapByName(name);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        var scaleDevice = 1334.0 / stageW;
        sky.height = 750.0 / scaleDevice;
        return sky;
    };
    Main.prototype.getStageWidth = function () {
        return this.stage.stageWidth;
    };
    Main.prototype.getStageHeight = function () {
        return this.stage.stageHeight;
    };
    Main.prototype.getClientWidth = function () {
        // return wx.getSystemInfoSync().windowWidth
        return document.documentElement.clientWidth;
    };
    Main.prototype.getClientHeight = function () {
        // return wx.getSystemInfoSync().windowHeight
        return document.documentElement.clientHeight;
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            // let theme = new eui.Theme("resource/default.thm.json", this.stage);
            var theme = new eui.Theme(PathUtils.RESOURC + PathUtils.Version_Default_Thm, _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.addChild(this.addBackGround("bg_jpg"));
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);
        var icon = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;
        var line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
        var button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        // new WebSocketUtil();
        CommonTools.log("createGameScene=============done");
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    Main.getResUtil = function (name) {
        return RES.getRes(name);
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    Main.roomkey = null;
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map