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
 * 战斗模块
 */
var FightingModule = (function () {
    //test
    /**
     * 构造函数
     */
    function FightingModule(ct) {
        /** 人物层 */
        this.pMainRole = ""; //role1左 role2右
        this.p1 = 119; //左
        this.p2 = 120; //右
        this.pAI = 121; //怪物
        this.pAISelect = {}; //取怪器
        this.controlerHit_x = 28;
        this.controlerHit_y = 183;
        this.r = 104;
        this.controlerHit_x_c = 132;
        this.controlerHit_y_c = 287;
        this.initRow = 7;
        this.initColumn = 9;
        this.firstItemX = 167;
        this.firstItemY = 134;
        this.groundItemW = 82;
        this.groundItemH = 82;
        this.groundOffX = -25;
        this.groundOffY = -28;
        this.APP_MODE = 1; //1:7*9  2:9*11
        this.FIGHT_MODE = 1; //1pvp 2pve
        this.scaleX = 1;
        this.scaleY = 1;
        this.playerData = null;
        this.playerLen = 0;
        this.curPlayer = null;
        this.vsPanel = null;
        this.resultPanel = null;
        this.miniGamePanel = null;
        this.otherCount = 0;
        this.counterTimer = null;
        this.countDown = 3;
        this.counterTimerSkill01 = null;
        this.countDownSkill01 = 0;
        this.counterTimerSkill02 = null;
        this.countDownSkill02 = 0;
        this.backBtn = null;
        this.initCnt = 0;
        this.shareRes = 0;
        this.dSkill = null;
        this.shortCut01 = "1";
        this.shortCut02 = "2";
        //test
        this.testGround = [
            1, 1, 1, 1, 1, 1, 2, 2, 1,
            1, 1, 1, 1, 1, 1, 2, 1, 2,
            1, 1, 1, 3, 1, 1, 2, 2, 1,
            3, 2, 2, 1, 1, 1, 2, 2, 3,
            1, 1, 3, 1, 1, 1, 2, 2, 1,
            1, 2, 1, 1, 1, 1, 2, 3, 2,
            1, 1, 1, 1, 1, 1, 2, 3, 2
        ];
        this.testMap = [
            1, 1, 1, 1, 1, 1, 2, 6, 1,
            1, 119, 1, 1, 1, 1, 2, 6, 1,
            1, 1, 1, 1, 1, 1, 2, 6, 1,
            3, 2, 2, 1, 1, 120, 2, 6, 1,
            1, 1, 13, 1, 1, 1, 2, 6, 1,
            1, 9, 6, 1, 1, 1, 2, 6, 1,
            1, 12, 11, 1, 1, 1, 2, 6, 1
        ];
        this.testGround2 = [
            1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1,
            1, 1, 1, 3, 1, 1, 2, 2, 1, 1, 1,
            3, 2, 2, 1, 1, 1, 2, 2, 3, 1, 1,
            1, 1, 3, 1, 1, 1, 2, 2, 1, 1, 1,
            1, 2, 1, 1, 1, 1, 2, 3, 2, 1, 1,
            1, 1, 1, 1, 1, 1, 2, 3, 2, 1, 1,
            1, 1, 1, 1, 1, 1, 2, 3, 2, 1, 1,
            1, 1, 1, 1, 1, 1, 2, 3, 2, 1, 1
        ];
        this.testMap2 = [
            0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0,
            0, 119, 0, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 0, 0, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 0, 0, 0, 0, 120, 0, 6, 5, 6, 0,
            0, 0, 13, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 9, 6, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 9, 6, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 9, 6, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 12, 11, 0, 0, 0, 0, 6, 5, 6, 0
        ];
        CommonAudioHandle.play("mainmenu_mp3", 0);
        CommonTools.log("=init===1==========");
        this.context = ct;
        this.maskBg = new eui.Image("bg_ppt_1_png");
        this.maskBg.width = this.context.getStageWidth();
        var scaleDevice = 1334.0 / this.context.getStageWidth();
        this.maskBg.height = 750.0 / scaleDevice;
        this.context.addChild(this.maskBg);
        this.infoPanel = new eui.Panel();
        this.infoPanel.skinName = "resource/eui_skins/UserUI/FightInfoGroup.exml";
        this.infoPanel.title = "TitleInfo";
        this.infoPanel.x = -50;
        this.infoPanel.y = 80;
        this.infoPanel.scaleX = 0.8;
        this.infoPanel.scaleY = 0.8;
        this.context.addChild(this.infoPanel);
        this.panel = new eui.Panel();
        this.panel.skinName = "resource/eui_skins/UserUI/fightingUI.exml";
        this.panel.title = "Title";
        this.panel.horizontalCenter = 0;
        this.panel.verticalCenter = 0;
        this.context.addChild(this.panel);
        this.backBtn = new eui.Image("btn_back_png");
        this.backBtn.width = 60;
        this.backBtn.height = 60;
        this.backBtn.x = 44;
        this.backBtn.y = 10;
        this.backBtn.name = "back_btn";
        this.context.addChild(this.backBtn);
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        CommonTools.log("=init===2==========");
        CommonTools.fixFix(this.context, this.panel, 1, 0, 0);
        CommonTools.fixFix(this.context, this.infoPanel, 1, 70, -100);
        // this.initConfig();
        ConstValue.gatewayType = 1;
        // this.initScene();//初始化地图
        Main.roomkey = null;
    }
    /**
     * 初始化配置
     */
    FightingModule.prototype.initConfig = function () {
        LZMA.decompress(EBitUtil.getArr(new egret.ByteArray(RES.getRes("config_json"))), function (d) {
            // CommonTools.log("initXYConfig=========dddd======"+d);
            ConstValue.P_CONFIG = JSON.parse(d);
            // this.initScene();//初始化地图
        }, function (t) {
            //ELog.info("conf:",t);
        });
    };
    FightingModule.prototype.initMapData = function (jsonObj) {
        this.APP_MODE = jsonObj.map_mode;
        this.FIGHT_MODE = jsonObj.fight_mode;
        this.testGround = jsonObj.bgConf;
        this.testMap = jsonObj.layerConf;
        this.playerData = jsonObj.player;
    };
    FightingModule.prototype.setControl = function (x, y) {
        var angle = Math.atan2((y - this.controlerHit_y_c), (x - this.controlerHit_x_c)); //弧度 0.6
        var theta = angle * (180 / Math.PI); //角度 60
        var x1 = this.controlerHit_x + this.r * Math.cos(theta * 3.14 / 180);
        var y1 = this.controlerHit_y + this.r * Math.sin(theta * 3.14 / 180);
        this.controlerHit.x = x1;
        this.controlerHit.y = y1;
    };
    FightingModule.prototype.myKeyDown = function (evt) {
        CommonTools.logDebug("keydown =====code:" + evt.keyCode);
        if (evt.keyCode == 87 || evt.keyCode == 83 || evt.keyCode == 65 || evt.keyCode == 68) {
            var mainPl_1 = ConstValue.P_FIGHT_OBJ.getMainPlayer();
            if (mainPl_1.keyDir != evt.keyCode) {
                if (mainPl_1.func != null) {
                    mainPl_1.setMoving(false);
                    mainPl_1.removeEventListener(egret.Event.ENTER_FRAME, mainPl_1.func, mainPl_1);
                    mainPl_1.func = null;
                }
                mainPl_1.func = function (e) {
                    mainPl_1.setMoving(true);
                    mainPl_1.move(-1, true);
                };
                mainPl_1.addEventListener(egret.Event.ENTER_FRAME, mainPl_1.func, mainPl_1);
                mainPl_1.keyDir = evt.keyCode;
            }
            if (evt.keyCode == 87) {
                mainPl_1.setMoving(true);
                mainPl_1.move(0, false);
            }
            if (evt.keyCode == 83) {
                mainPl_1.setMoving(true);
                mainPl_1.move(2, false);
            }
            if (evt.keyCode == 65) {
                mainPl_1.setMoving(true);
                mainPl_1.move(3, false);
            }
            if (evt.keyCode == 68) {
                mainPl_1.setMoving(true);
                mainPl_1.move(1, false);
            }
        }
        if (evt.keyCode == 74) {
            var mainPl = ConstValue.P_FIGHT_OBJ.getMainPlayer();
            mainPl.markPosition(-1);
            var sData = CommonTools.getDataJsonStr("syncPut", 1, { x: mainPl.x, y: mainPl.y, idx: parseInt(mainPl.curMapIdx), playerID: 0 });
            ConstValue.P_NET_OBJ.sendData2(sData);
        }
    };
    FightingModule.prototype.myKeyUp = function (evt) {
        CommonTools.logDebug("keyup =====code:" + evt.keyCode);
        if (evt.keyCode == 87 || evt.keyCode == 83 || evt.keyCode == 65 || evt.keyCode == 68) {
            ConstValue.P_FIGHT_OBJ.controlerHit.x = ConstValue.P_FIGHT_OBJ.controlerHit_x;
            ConstValue.P_FIGHT_OBJ.controlerHit.y = ConstValue.P_FIGHT_OBJ.controlerHit_y;
            var mainPl = ConstValue.P_FIGHT_OBJ.getMainPlayer();
            mainPl.setMoving(false);
            mainPl.removeEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
            mainPl.func = null;
            mainPl.keyDir = -1;
            if (!FightingModule.aiPVE) {
                var sData = CommonTools.getDataJsonStr("syncPos", 1, { x: mainPl.x, y: mainPl.y, direction: -1, speed: mainPl.speed, idx: parseInt(mainPl.curMapIdx), playerID: 0 });
                ConstValue.P_NET_OBJ.sendData2(sData);
            }
        }
    };
    FightingModule.prototype.initScene = function () {
        if (this.initCnt > 0)
            return;
        this.initCnt++;
        if (this.APP_MODE == 2) {
            this.initRow = 9;
            this.initColumn = 11;
            this.scaleX = 0.8;
            this.scaleY = 0.8;
            //-----test------------------------
            // this.testMap = this.testMap2;
            // this.testGround = this.testGround2;
            //-----test------------------------
        }
        var fighting_parent = this.panel.getChildByName("fighting_parent");
        //地表层
        FightingModule.groundLayer = fighting_parent.getChildByName("ground_layer");
        FightingModule.playerLayer = fighting_parent.getChildByName("player_layer");
        FightingModule.bulletLayer = fighting_parent.getChildByName("bullet_layer");
        FightingModule.mapLayer = fighting_parent.getChildByName("map_layer");
        if (this.APP_MODE == 2) {
            var fighting_platform = fighting_parent.getChildByName("fighting_platform");
            fighting_platform.width = 770;
            fighting_platform.height = 640;
            fighting_platform.x += 16;
            fighting_platform.y += 12;
            fighting_parent.x = 156;
            fighting_parent.y = -50;
        }
        else if (this.APP_MODE == 1) {
            fighting_parent.x = 145;
            fighting_parent.y = -45;
        }
        this.controlerParent = this.panel.getChildByName("controler_parent");
        this.controlerHit = this.panel.getChildByName("controler_parent").getChildByName("controler_hit_btn");
        this.panel.getChildByName("test").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            // let sData = CommonTools.getDataJsonStr("test",1,{v:1});
            // ConstValue.P_NET_OBJ.sendData2(sData);
            egret.localStorage.setItem("fightFirstPNG", "0");
            var arr = ["1", "2", "3", "4", "5"];
            for (var i = 0; i < arr.length; i++) {
                egret.localStorage.setItem(ConstValue.guide_tips[arr[i]].saveKey, "0");
            }
            CommonTools.addCommonTips(this.panel, "清理成功，请重新进入战斗");
        }, this);
        this.panel.getChildByName("boom_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var mainPl = this.getMainPlayer();
            // mainPl.fire();
            mainPl.markPosition(-1);
            var sData = CommonTools.getDataJsonStr("syncPut", 1, { x: mainPl.x, y: mainPl.y, idx: parseInt(mainPl.curMapIdx), playerID: 0 });
            ConstValue.P_NET_OBJ.sendData2(sData);
        }, this);
        var skill_01_cd = this.panel.getChildByName("skill_01_cd");
        var skill_02_cd = this.panel.getChildByName("skill_02_cd");
        var skill_01 = this.panel.getChildByName("skill_01");
        var skill_02 = this.panel.getChildByName("skill_02");
        skill_01.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (this.countDownSkill01 > 0)
                return;
            if (skill_01.source == ConstValue.skill_conf[this.shortCut01].cdicon) {
                CommonTools.addCommonTips(this.panel, "请学习技能系统");
                return;
            }
            var sData_skill = CommonTools.getDataJsonStr("useSkill", 1, { skillID: 1 });
            ConstValue.P_NET_OBJ.sendData2(sData_skill);
            if (this.counterTimerSkill01 != null) {
                this.counterTimerSkill01.stop();
                this.counterTimerSkill01.removeEventListener(egret.TimerEvent.TIMER);
            }
            skill_01_cd.visible = true;
            skill_01.source = ConstValue.skill_conf[this.shortCut01].cdicon;
            skill_01_cd.text = this.dSkill[this.shortCut01].cd;
            this.countDownSkill01 = this.dSkill[this.shortCut01].cd;
            this.counterTimerSkill01 = new egret.Timer(1000, 0);
            this.counterTimerSkill01.addEventListener(egret.TimerEvent.TIMER, function () {
                if (this.countDownSkill01 == 0) {
                    skill_01_cd.visible = false;
                    skill_01.source = ConstValue.skill_conf[this.shortCut01].icon;
                    this.counterTimerSkill01.stop();
                }
                else {
                    this.countDownSkill01--;
                    skill_01_cd.text = this.countDownSkill01;
                }
            }, this);
            this.counterTimerSkill01.start();
        }, this);
        skill_02.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (this.countDownSkill02 > 0)
                return;
            if (skill_02.source == ConstValue.skill_conf[this.shortCut02].cdicon) {
                CommonTools.addCommonTips(this.panel, "请学习技能系统");
                return;
            }
            var sData_skill = CommonTools.getDataJsonStr("useSkill", 1, { skillID: 2 });
            ConstValue.P_NET_OBJ.sendData2(sData_skill);
            if (this.counterTimerSkill02 != null) {
                this.counterTimerSkill02.stop();
                this.counterTimerSkill02.removeEventListener(egret.TimerEvent.TIMER);
            }
            skill_02_cd.visible = true;
            skill_02.source = ConstValue.skill_conf[this.shortCut02].cdicon;
            skill_02_cd.text = this.dSkill[this.shortCut02].cd;
            this.countDownSkill02 = this.dSkill[this.shortCut02].cd;
            this.counterTimerSkill02 = new egret.Timer(1000, 0);
            this.counterTimerSkill02.addEventListener(egret.TimerEvent.TIMER, function () {
                if (this.countDownSkill02 == 0) {
                    skill_02_cd.visible = false;
                    skill_02.source = ConstValue.skill_conf[this.shortCut02].icon;
                    this.counterTimerSkill02.stop();
                }
                else {
                    this.countDownSkill02--;
                    skill_02_cd.text = this.countDownSkill02;
                }
            }, this);
            this.counterTimerSkill02.start();
        }, this);
        this.controlerParent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            var mainPl = this.getMainPlayer();
            if (mainPl.func != null) {
                // this.controlerHit.x = this.controlerHit_x;
                // this.controlerHit.y = this.controlerHit_y;
                mainPl.setMoving(false);
                mainPl.removeEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
                mainPl.func = null;
            }
            if (e.localX >= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c) {
                if ((e.localX - this.controlerHit_x_c) >= (e.localY - this.controlerHit_y_c)) {
                    CommonTools.log("四-------右");
                    mainPl.curDirect = 1;
                }
                else {
                    mainPl.curDirect = 2;
                }
            }
            else if (e.localX >= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c) {
                if ((e.localX - this.controlerHit_x_c) >= (this.controlerHit_y_c - e.localY)) {
                    CommonTools.log("一-------右");
                    mainPl.curDirect = 1;
                }
                else {
                    CommonTools.log("一-------上");
                    mainPl.curDirect = 0;
                }
            }
            else if (e.localX <= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c) {
                if ((this.controlerHit_x_c - e.localX) >= (this.controlerHit_y_c - e.localY)) {
                    CommonTools.log("二-------左");
                    mainPl.curDirect = 3;
                }
                else {
                    CommonTools.log("二-------上");
                    mainPl.curDirect = 0;
                }
            }
            else if (e.localX <= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c) {
                if ((this.controlerHit_x_c - e.localX) >= (e.localY - this.controlerHit_y_c)) {
                    CommonTools.log("三-------左");
                    mainPl.curDirect = 3;
                }
                else {
                    CommonTools.log("三-------下");
                    mainPl.curDirect = 2;
                }
            }
            mainPl.func = function (ee) {
                mainPl.setMoving(true);
                mainPl.move(-1, true);
            };
            mainPl.addEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
        }, this);
        document.addEventListener("keydown", this.myKeyDown);
        document.addEventListener("keyup", this.myKeyUp);
        this.controlerParent.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            this.controlerHit.x = this.controlerHit_x;
            this.controlerHit.y = this.controlerHit_y;
            var mainPl = this.getMainPlayer();
            mainPl.setMoving(false);
            mainPl.removeEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
            mainPl.func = null;
            if (!FightingModule.aiPVE) {
                var sData = CommonTools.getDataJsonStr("syncPos", 1, { x: mainPl.x, y: mainPl.y, direction: -1, speed: mainPl.speed, idx: parseInt(mainPl.curMapIdx), playerID: 0 });
                ConstValue.P_NET_OBJ.sendData2(sData);
            }
        }, this);
        this.controlerParent.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            CommonTools.log("=e.localX, e.localY========x:::=" + e.localX + " y:::" + e.localY);
            var mainPl = this.getMainPlayer();
            if (e.localX >= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c) {
                if ((e.localX - this.controlerHit_x_c) >= (e.localY - this.controlerHit_y_c)) {
                    CommonTools.log("四-------右");
                    // this.controlerHit.x = this.controlerHit_x + this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(1, false);
                }
                else {
                    CommonTools.log("四-------下");
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y + this.r;
                    mainPl.setMoving(true);
                    mainPl.move(2, false);
                }
            }
            else if (e.localX >= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c) {
                if ((e.localX - this.controlerHit_x_c) >= (this.controlerHit_y_c - e.localY)) {
                    CommonTools.log("一-------右");
                    // this.controlerHit.x = this.controlerHit_x + this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(1, false);
                }
                else {
                    CommonTools.log("一-------上");
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y - this.r;
                    mainPl.setMoving(true);
                    mainPl.move(0, false);
                }
            }
            else if (e.localX <= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c) {
                if ((this.controlerHit_x_c - e.localX) >= (this.controlerHit_y_c - e.localY)) {
                    CommonTools.log("二-------左");
                    // this.controlerHit.x = this.controlerHit_x - this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(3, false);
                }
                else {
                    CommonTools.log("二-------上");
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y - this.r;
                    mainPl.setMoving(true);
                    mainPl.move(0, false);
                }
            }
            else if (e.localX <= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c) {
                if ((this.controlerHit_x_c - e.localX) >= (e.localY - this.controlerHit_y_c)) {
                    CommonTools.log("三-------左");
                    // this.controlerHit.x = this.controlerHit_x - this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(3, false);
                }
                else {
                    CommonTools.log("三-------下");
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y + this.r;
                    mainPl.setMoving(true);
                    mainPl.move(2, false);
                }
            }
            this.setControl(e.localX, e.localY);
        }, this);
        var count = 0;
        for (var i = 0; i < this.initRow; i++) {
            for (var j = 0; j < this.initColumn; j++) {
                var wItem = this.groundItemW;
                var hItem = this.groundItemH;
                var xOff = this.groundOffX;
                var yOff = this.groundOffY;
                if (this.APP_MODE == 2 && j > 0) {
                    xOff = -32;
                    wItem = this.groundItemW * this.scaleX;
                }
                if (this.APP_MODE == 2 && i > 0) {
                    yOff = -32;
                    hItem = this.groundItemH * this.scaleY;
                }
                var x = this.firstItemX + wItem * j + xOff;
                var y = this.firstItemY + hItem * i + yOff;
                var para = { "img": "res_" + this.testGround[count] + "_png", "x": x, "y": y, "name": "ground_" + count, "curIdx": count };
                // CommonTools.log("para========================"+JSON.stringify(para))
                var mapItemObj = new Fight.MapItem(para);
                mapItemObj.setRow(i);
                mapItemObj.setColumn(j);
                mapItemObj.setType(ConstValue.P_CONFIG["MapBase"][this.testGround[count].toString()]["Type"]);
                if (this.APP_MODE == 2) {
                    mapItemObj.scaleX = this.scaleX;
                    mapItemObj.scaleY = this.scaleY;
                }
                FightingModule.groundLayer.addChild(mapItemObj);
                FightingModule.groundLayerSubObj[count.toString()] = mapItemObj;
                FightingModule.groundLayerSubObjDanger[mapItemObj.getColumn() + "_" + mapItemObj.getRow()] = mapItemObj;
                var offY = -48;
                if (this.APP_MODE == 2) {
                    offY = -42;
                }
                if (this.testMap[count] <= 3) {
                    offY = -9;
                }
                if (this.testMap[count] > 100 && this.playerLen <= this.getPlayerTotal()) {
                    CommonTools.log("--this.testMap[count]--xxxxx---" + this.testMap[count] + " " + this.playerLen + " " + this.getPlayerTotal());
                    this.playerLen++;
                    var paraPlayer = {};
                    var playerObj = null;
                    var isP1 = false;
                    var pObj = null;
                    if (this.testMap[count] == this.p1) {
                        pObj = this.getPlayerBySize(1);
                        var offX = 40;
                        var offY_1 = 0;
                        if (this.APP_MODE == 2) {
                            offX = 28;
                        }
                        paraPlayer = { "pObj": pObj, "side": 1, "x": x + offX, "y": y + offY_1, "name": "role1",
                            "isAI": pObj.isAI, "iClass": pObj.iClass, "aiLevel": pObj.aiLevel, "lWalkArea": pObj.lWalkArea };
                        isP1 = true;
                    }
                    else if (this.testMap[count] == this.pAI) {
                        pObj = this.getAINotInSelect();
                        var offX = 40;
                        var offY_2 = 0;
                        if (this.APP_MODE == 2) {
                            offX = 28;
                        }
                        paraPlayer = { "pObj": pObj, "side": 2, "x": x + offX, "y": y + offY_2, "name": "role2",
                            "isAI": pObj.isAI, "iClass": pObj.iClass, "aiLevel": pObj.aiLevel, "lWalkArea": pObj.lWalkArea };
                    }
                    else {
                        pObj = this.getPlayerBySize(2);
                        var offX = 40;
                        var offY_3 = 0;
                        if (this.APP_MODE == 2) {
                            offX = 28;
                        }
                        paraPlayer = { "pObj": pObj, "side": 2, "x": x + offX, "y": y + offY_3, "name": "role2",
                            "isAI": pObj.isAI, "iClass": pObj.iClass, "aiLevel": pObj.aiLevel, "lWalkArea": pObj.lWalkArea };
                    }
                    playerObj = new Fight.Player(paraPlayer);
                    if (playerObj.roleId == ConstValue.cacheUserInfo.id) {
                        this.curPlayer = playerObj;
                    }
                    if (this.APP_MODE == 2) {
                        playerObj.scaleX = this.scaleX;
                        playerObj.scaleY = this.scaleY;
                    }
                    FightingModule.mapLayer.addChild(playerObj);
                    /*
                    var shp: egret.Shape = new egret.Shape();
                    shp.graphics.beginFill(0xff0000);
                    shp.graphics.drawRect(0,15,5,5);
                    shp.graphics.endFill();
                    shp.alpha = 0.5;
                    FightingModule.mapLayer.addChild(shp);
                    shp.x = playerObj.x;
                    shp.y = playerObj.y;
                    playerObj.setBoundRec(shp);*/
                    playerObj.markPosition(-1);
                    FightingModule.playerLayerSubObj[count.toString()] = playerObj;
                    if (playerObj.isAI == 1) {
                        var aiObj = null;
                        // pObj.aiLevel = 1;//tttttttttt
                        // pObj.life = 2;
                        if (pObj.aiLevel == 0) {
                            aiObj = new AIUtil0(playerObj, this.testMap, this.initRow, this.initColumn, this.APP_MODE);
                        }
                        else if (pObj.aiLevel == 1) {
                            aiObj = new AIUtil1(playerObj, this.testMap, this.initRow, this.initColumn, this.APP_MODE);
                        }
                        else if (pObj.aiLevel == 2) {
                            aiObj = new AIUtil1(playerObj, this.testMap, this.initRow, this.initColumn, this.APP_MODE);
                        }
                        else if (pObj.aiLevel == 3) {
                            aiObj = new AIUtil1(playerObj, this.testMap, this.initRow, this.initColumn, this.APP_MODE);
                        }
                        else if (pObj.aiLevel > 3) {
                            aiObj = new Mst1(playerObj, this.testMap, this.initRow, this.initColumn, this.APP_MODE);
                        }
                        else {
                            aiObj = new AIUtil1(playerObj, this.testMap, this.initRow, this.initColumn, this.APP_MODE);
                        }
                        FightingModule.aiSubObj[count.toString()] = aiObj;
                        FightingModule.aiPVE = true;
                    }
                    CommonTools.log("init player x,y " + playerObj.x + " " + playerObj.y + " " + playerObj.roleId);
                }
                else if (this.testMap[count] > 0 && this.testMap[count] < 100) {
                    var paraMap = { "img": "res_" + this.testMap[count] + "_png", "x": x, "y": y + offY, "name": "mapitem_" + count, "curIdx": count };
                    var mapItemObj2 = new Fight.MapItem(paraMap);
                    mapItemObj2.setRow(i);
                    mapItemObj2.setColumn(j);
                    mapItemObj2.setType(ConstValue.P_CONFIG["MapBase"][this.testMap[count].toString()]["Type"]);
                    if (this.APP_MODE == 2) {
                        mapItemObj2.scaleX = this.scaleX;
                        mapItemObj2.scaleY = this.scaleY;
                    }
                    FightingModule.mapLayer.addChild(mapItemObj2);
                    FightingModule.mapLayerSubObj[count.toString()] = mapItemObj2;
                    /*
                    var shp: egret.Shape = new egret.Shape();
                    shp.graphics.beginFill(0xff0000);
                    shp.graphics.drawRect(0,20,82*this.scaleX,122*0.65);
                    shp.graphics.endFill();
                    shp.alpha = 0;
                    FightingModule.mapLayer.addChild(shp);
                    let iTx = 0
                    if(j == 0)iTx = -7;
                    shp.x = mapItemObj2.x + iTx;
                    shp.y = mapItemObj2.y;
                    mapItemObj2.setBoundRec(shp)*/
                }
                count++;
            }
        }
        // let sData = CommonTools.getDataJsonStr("getNowGuild",1,{});
        // ConstValue.P_NET_OBJ.sendData(sData);
        this.showGuide(true);
    };
    /**
     * auto true为流程触发 false为通知触发
     */
    FightingModule.prototype.showGuide = function (auto) {
        if (egret.localStorage.getItem("fightFirstPNG") != "1") {
            var maskBgmask_1 = new eui.Image("guide_mask_png");
            maskBgmask_1.width = this.context.getStageWidth();
            maskBgmask_1.height = this.context.getStageHeight();
            this.context.addChild(maskBgmask_1);
            var maskBgt_1 = new eui.Image("guide_01_png");
            maskBgt_1.width = this.context.getStageWidth() * 0.7;
            maskBgt_1.height = this.context.getStageHeight() * 0.7;
            maskBgt_1.horizontalCenter = 0;
            maskBgt_1.verticalCenter = 0;
            this.context.addChild(maskBgt_1);
            maskBgt_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                this.context.removeChild(maskBgmask_1);
                this.context.removeChild(maskBgt_1);
                egret.localStorage.setItem("fightFirstPNG", "1");
                this.showGuide(true);
            }, this);
            return;
        }
        var arr = ["1", "2", "3", "4", "5"];
        for (var i = 0; i < arr.length; i++) {
            if (egret.localStorage.getItem(ConstValue.guide_tips[arr[i]].saveKey) != "1") {
                if (parseInt(arr[i]) > 2 && auto)
                    continue; //流程自动触发的，跳过
                if (arr[i] == "1" || arr[i] == "2")
                    this.jumpPoint(this.panel.getChildByName(ConstValue.guide_tips[arr[i]].jumpPoint), ConstValue.guide_tips[arr[i]].jumpoffx, ConstValue.guide_tips[arr[i]].jumpoffy);
                this.getMainPlayer().addGuideTips(arr[i]);
                break;
            }
        }
    };
    FightingModule.prototype.jumpPoint = function (target, xoff, yoff) {
        this.jumpHand = new eui.Image("guide_point_down_png");
        this.jumpTip = egret.Tween.get(this.jumpHand);
        this.jumpHand.x = target.x + xoff;
        this.jumpHand.y = target.y + yoff;
        for (var i = 0; i < 100; i++) {
            this.jumpTip.to({ y: this.jumpHand.y - 50 }, 400);
            this.jumpTip.to({ y: this.jumpHand.y }, 400);
        }
        this.panel.addChild(this.jumpHand);
    };
    FightingModule.prototype.removeJump = function () {
        if (this.jumpHand != null) {
            egret.Tween.removeTweens(this.jumpHand);
            this.panel.removeChild(this.jumpHand);
            this.jumpTip = null;
            this.jumpHand = null;
        }
    };
    FightingModule.prototype.getPlayerBySize = function (whichSize) {
        for (var i in this.playerData) {
            var pObj = this.playerData[i];
            if (parseInt(pObj.player_side) == whichSize && pObj.isAI == 0) {
                return pObj;
            }
            else if (parseInt(pObj.player_side) == whichSize && whichSize == 2) {
                return pObj;
            }
        }
        return null;
    };
    //取怪器
    FightingModule.prototype.getAINotInSelect = function () {
        for (var i in this.playerData) {
            var pObj = this.playerData[i];
            if (pObj.aiLevel >= 50 && this.pAISelect[pObj.uid] == null) {
                this.pAISelect[pObj.uid] = 1;
                return pObj;
            }
        }
        return null;
    };
    FightingModule.prototype.getPlayerDataByRid = function (rid) {
        for (var i in this.playerData) {
            var pObj = this.playerData[i];
            if (i == (rid + "")) {
                return pObj;
            }
        }
        return null;
    };
    FightingModule.prototype.getPlayerTotal = function () {
        var num = 0;
        for (var i in this.playerData) {
            num++;
        }
        return num;
    };
    FightingModule.prototype.onClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var name, _a, platform_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        name = e.target.name;
                        CommonTools.log("==========name::::" + name);
                        _a = name;
                        switch (_a) {
                            case "replay_btn": return [3 /*break*/, 1];
                            case "replay_fail_btn": return [3 /*break*/, 1];
                            case "replay_btn_guanka": return [3 /*break*/, 2];
                            case "replay_fail_btn_guanka": return [3 /*break*/, 3];
                            case "goback_btn": return [3 /*break*/, 4];
                            case "back_btn": return [3 /*break*/, 4];
                            case "goback_fail_btn": return [3 /*break*/, 4];
                            case "share_btn": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        this.replay();
                        return [3 /*break*/, 8];
                    case 2:
                        this.playNextGuanka();
                        return [3 /*break*/, 8];
                    case 3:
                        this.replayGuanka();
                        return [3 /*break*/, 8];
                    case 4:
                        this.clear();
                        return [3 /*break*/, 8];
                    case 5:
                        platform_1 = window.platform;
                        return [4 /*yield*/, platform_1.shareWinAppMessage(this.shareRes)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        CommonTools.log("11111111 default");
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    FightingModule.prototype.showResultpanel = function (winObj, failObj, mainPlayer) {
        if (this.resultPanel == null) {
            this.maskResultBg = new eui.Image("mask_layer_png");
            this.maskResultBg.width = this.context.getStageWidth();
            this.maskResultBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskResultBg);
            this.resultPanel = new eui.Panel();
            this.resultPanel.horizontalCenter = 0;
            this.resultPanel.verticalCenter = 0;
            this.resultPanel.skinName = "resource/eui_skins/UserUI/FightResultUI.exml";
            this.context.addChild(this.resultPanel);
            CommonTools.fixFix(this.context, this.resultPanel, 1, 0, 0);
            var replay_btn = this.resultPanel.getChildByName("replay_btn");
            CommonButtonHandle.beginTouch(replay_btn, this);
            replay_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var goback_btn = this.resultPanel.getChildByName("goback_btn");
            CommonButtonHandle.beginTouch(goback_btn, this);
            goback_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var share_btn = this.resultPanel.getChildByName("share_btn");
            CommonButtonHandle.beginTouch(share_btn, this);
            share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var goback_fail_btn = this.resultPanel.getChildByName("goback_fail_btn");
            CommonButtonHandle.beginTouch(goback_fail_btn, this);
            goback_fail_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var replay_fail_btn = this.resultPanel.getChildByName("replay_fail_btn");
            CommonButtonHandle.beginTouch(replay_fail_btn, this);
            replay_fail_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.resultPanel.getChildByName("gold_lb").text = "金币"; //mainPlayer.coin
            var coin1 = this.resultPanel.getChildByName("gold_add_img_01");
            var coin2 = this.resultPanel.getChildByName("gold_add_img_02");
            var coin3 = this.resultPanel.getChildByName("gold_add_img_03");
            if (mainPlayer.addcoin < 10) {
                coin2.visible = false;
                coin3.visible = false;
                coin1.source = "digital_1_json." + mainPlayer.addcoin;
            }
            else if (mainPlayer.addcoin < 100) {
                coin3.visible = false;
                var ii = Math.floor(mainPlayer.addcoin / 10); //十位数
                var i = mainPlayer.addcoin % 10; //个位数
                coin1.source = "digital_1_json." + ii;
                coin2.source = "digital_1_json." + i;
            }
            else {
                var iii = Math.floor(mainPlayer.addcoin / 100); //百位数
                var ii_ = mainPlayer.addcoin % 100; //余数
                var ii = Math.floor(ii_ / 10); //十位数
                var i = ii_ % 10; //个位数
                coin1.source = "digital_1_json." + iii;
                coin2.source = "digital_1_json." + ii;
                coin3.source = "digital_1_json." + i;
            }
            var exp1 = this.resultPanel.getChildByName("exp_add_img_01");
            var exp2 = this.resultPanel.getChildByName("exp_add_img_02");
            var exp3 = this.resultPanel.getChildByName("exp_add_img_03");
            if (mainPlayer.addExp < 10) {
                exp2.visible = false;
                exp3.visible = false;
                exp1.source = "digital_2_json." + mainPlayer.addExp;
            }
            else if (mainPlayer.addExp < 100) {
                exp3.visible = false;
                var ii = Math.floor(mainPlayer.addExp / 10); //十位数
                var i = mainPlayer.addExp % 10; //个位数
                exp1.source = "digital_2_json." + ii;
                exp2.source = "digital_2_json." + i;
            }
            else {
                var iii = Math.floor(mainPlayer.addExp / 100); //百位数
                var ii_ = mainPlayer.addExp % 100; //余数
                var ii = Math.floor(ii_ / 10); //十位数
                var i = ii_ % 10; //个位数
                exp1.source = "digital_2_json." + iii;
                exp2.source = "digital_2_json." + ii;
                exp3.source = "digital_2_json." + i;
            }
            var win_title_img = this.resultPanel.getChildByName("win_title_img");
            if (mainPlayer.win == 0) {
                win_title_img.source = RES.getRes("fail_png");
                CommonAudioHandle.playEffect("failure_mp3", 1);
                replay_btn.visible = false;
                share_btn.visible = false;
                goback_btn.visible = false;
            }
            else {
                CommonAudioHandle.playEffect("success_mp3", 1);
                goback_fail_btn.visible = false;
                replay_fail_btn.visible = false;
                this.shareRes = 0;
            }
            var right_name_lb = this.resultPanel.getChildByName("right_name_lb");
            right_name_lb.text = failObj.name;
            var right_head_img = this.resultPanel.getChildByName("right_head_img");
            if (failObj.icon != "")
                right_head_img.source = failObj.icon;
            var left_name_lb = this.resultPanel.getChildByName("left_name_lb");
            left_name_lb.text = winObj.name;
            var left_head_img = this.resultPanel.getChildByName("left_head_img");
            if (winObj.icon != "")
                left_head_img.source = winObj.icon;
            CommonTools.niceTip(this.resultPanel, 1, this);
        }
    };
    FightingModule.prototype.showGuanKaResultpanel = function (winObj, failObj, mainPlayer) {
        if (this.resultPanel == null) {
            this.maskResultBg = new eui.Image("mask_layer_png");
            this.maskResultBg.width = this.context.getStageWidth();
            this.maskResultBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskResultBg);
            this.resultPanel = new eui.Panel();
            this.resultPanel.horizontalCenter = 0;
            this.resultPanel.verticalCenter = 0;
            this.resultPanel.skinName = "resource/eui_skins/UserUI/FightGuanKaResultUI.exml";
            this.context.addChild(this.resultPanel);
            CommonTools.fixFix(this.context, this.resultPanel, 1, 0, 0);
            var replay_btn = this.resultPanel.getChildByName("replay_btn_guanka");
            CommonButtonHandle.beginTouch(replay_btn, this);
            replay_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var goback_btn = this.resultPanel.getChildByName("goback_btn");
            CommonButtonHandle.beginTouch(goback_btn, this);
            goback_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var share_btn = this.resultPanel.getChildByName("share_btn");
            CommonButtonHandle.beginTouch(share_btn, this);
            share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var replay_fail_btn_guanka = this.resultPanel.getChildByName("replay_fail_btn_guanka");
            CommonButtonHandle.beginTouch(replay_fail_btn_guanka, this);
            replay_fail_btn_guanka.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var goback_fail_btn = this.resultPanel.getChildByName("goback_fail_btn");
            CommonButtonHandle.beginTouch(goback_fail_btn, this);
            goback_fail_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.resultPanel.getChildByName("gold_lb").text = "金币"; //mainPlayer.coin
            var coin1 = this.resultPanel.getChildByName("gold_add_img_01");
            var coin2 = this.resultPanel.getChildByName("gold_add_img_02");
            var coin3 = this.resultPanel.getChildByName("gold_add_img_03");
            if (mainPlayer.addcoin < 10) {
                coin2.visible = false;
                coin3.visible = false;
                coin1.source = "digital_1_json." + mainPlayer.addcoin;
            }
            else if (mainPlayer.addcoin < 100) {
                coin3.visible = false;
                var ii = Math.floor(mainPlayer.addcoin / 10); //十位数
                var i = mainPlayer.addcoin % 10; //个位数
                coin1.source = "digital_1_json." + ii;
                coin2.source = "digital_1_json." + i;
            }
            else {
                var iii = Math.floor(mainPlayer.addcoin / 100); //百位数
                var ii_ = mainPlayer.addcoin % 100; //余数
                var ii = Math.floor(ii_ / 10); //十位数
                var i = ii_ % 10; //个位数
                coin1.source = "digital_1_json." + iii;
                coin2.source = "digital_1_json." + ii;
                coin3.source = "digital_1_json." + i;
            }
            var exp1 = this.resultPanel.getChildByName("exp_add_img_01");
            var exp2 = this.resultPanel.getChildByName("exp_add_img_02");
            var exp3 = this.resultPanel.getChildByName("exp_add_img_03");
            if (mainPlayer.addExp < 10) {
                exp2.visible = false;
                exp3.visible = false;
                exp1.source = "digital_2_json." + mainPlayer.addExp;
            }
            else if (mainPlayer.addExp < 100) {
                exp3.visible = false;
                var ii = Math.floor(mainPlayer.addExp / 10); //十位数
                var i = mainPlayer.addExp % 10; //个位数
                exp1.source = "digital_2_json." + ii;
                exp2.source = "digital_2_json." + i;
            }
            else {
                var iii = Math.floor(mainPlayer.addExp / 100); //百位数
                var ii_ = mainPlayer.addExp % 100; //余数
                var ii = Math.floor(ii_ / 10); //十位数
                var i = ii_ % 10; //个位数
                exp1.source = "digital_2_json." + iii;
                exp2.source = "digital_2_json." + ii;
                exp3.source = "digital_2_json." + i;
            }
            var win_title_img = this.resultPanel.getChildByName("win_title_img");
            if (mainPlayer.win == 0) {
                win_title_img.source = RES.getRes("fail_png");
                CommonAudioHandle.playEffect("failure_mp3", 1);
                replay_btn.visible = false;
                share_btn.visible = false;
                goback_btn.visible = false;
            }
            else {
                CommonAudioHandle.playEffect("success_mp3", 1);
                replay_fail_btn_guanka.visible = false;
                goback_fail_btn.visible = false;
                if (mainPlayer.star > 3)
                    mainPlayer.star = 3;
                this.shareRes = mainPlayer.star;
            }
            if (HallModule.isTrainBrr) {
                mainPlayer.star = 3;
                this.resultPanel.getChildByName("name_bg_img").visible = false;
                replay_fail_btn_guanka.visible = false;
                replay_btn.visible = false;
                goback_btn.visible = false;
                goback_fail_btn.visible = true;
                share_btn.x = 422.27;
                share_btn.visible = true;
            }
            for (var iStar = 1; iStar <= mainPlayer.star; iStar++) {
                if (iStar > 3)
                    break;
                var imgStar = this.resultPanel.getChildByName("star_0" + iStar);
                imgStar.source = "start_01_png";
            }
            var guankaDesc = this.resultPanel.getChildByName("lb_guanka");
            guankaDesc.text = mainPlayer.GuanKaDesc;
            CommonTools.niceTip(this.resultPanel, 1, this);
        }
    };
    FightingModule.prototype.closeResultpanel = function () {
        if (this.resultPanel != null) {
            this.context.removeChild(this.resultPanel);
            this.resultPanel = null;
        }
        if (this.maskResultBg != null) {
            this.context.removeChild(this.maskResultBg);
            this.maskResultBg = null;
        }
    };
    FightingModule.prototype.closeNice = function () {
    };
    FightingModule.prototype.isAiVs = function () {
        for (var i in FightingModule.aiSubObj) {
            return true;
        }
        return false;
    };
    FightingModule.prototype.showVsMiniGamepanel = function () {
        if (this.miniGamePanel == null) {
            this.maskMiniBg = new eui.Image("fighting_vs_png");
            this.maskMiniBg.width = this.context.getStageWidth();
            this.maskMiniBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskMiniBg);
            this.miniGamePanel = new eui.Panel();
            this.miniGamePanel.horizontalCenter = 0;
            this.miniGamePanel.verticalCenter = 0;
            this.miniGamePanel.skinName = "resource/eui_skins/UserUI/FightingVsMiniGameUI.exml";
            this.context.addChild(this.miniGamePanel);
            CommonTools.fixFix(this.context, this.miniGamePanel, 1, 0, 0);
            var time_countdown_1 = this.miniGamePanel.getChildByName("time_countdown");
            var my_click_num_lb = this.miniGamePanel.getChildByName("my_click_num_lb");
            var other_click_num_lb_1 = this.miniGamePanel.getChildByName("other_click_num_lb");
            this.miniGamePanel.getChildByName("click_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                if (this.countDown > 0) {
                    CommonTools.addCommonTips(this.panel, "倒计时中...");
                    return;
                }
                var sData = CommonTools.getDataJsonStr("normalClick", 1, {});
                ConstValue.P_NET_OBJ.sendData2(sData);
            }, this);
            this.miniGamePanel.getChildByName("giveup_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            }, this);
            this.miniGamePanel.getChildByName("use_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            }, this);
            this.counterTimer = new egret.Timer(1000, 0);
            this.counterTimer.addEventListener(egret.TimerEvent.TIMER, function () {
                if (this.countDown == 0) {
                    time_countdown_1.visible = false;
                    if (this.otherCount == 0) {
                        CommonTools.addCommonTips(this.panel, "开始抢夺！！GO");
                    }
                    else {
                        CommonTools.addCommonTips(this.panel, "扑街，7头！！加油，加油...冇吃饭啊，丢");
                    }
                    if (this.isAiVs()) {
                        this.otherCount++;
                        other_click_num_lb_1.text = this.otherCount + " 对手";
                    }
                    // this.counterTimer.stop();
                }
                else {
                    this.countDown--;
                    time_countdown_1.text = this.countDown;
                }
            }, this);
            this.counterTimer.start();
        }
    };
    FightingModule.prototype.updateClickData = function (dClickData) {
        var my_click_num_lb = this.miniGamePanel.getChildByName("my_click_num_lb");
        var other_click_num_lb = this.miniGamePanel.getChildByName("other_click_num_lb");
        for (var i in FightingModule.playerLayerSubObj) {
            var obj = FightingModule.playerLayerSubObj[i];
            if (obj.roleId == dClickData.uid) {
                if (obj.whichSide == 1) {
                    my_click_num_lb.text = obj.name + " " + dClickData.click;
                }
                else {
                    other_click_num_lb.text = obj.name + " " + dClickData.click;
                }
            }
        }
    };
    FightingModule.prototype.showVspanel = function () {
        if (this.vsPanel == null) {
            this.maskVsBg = new eui.Image("fighting_vs_png");
            this.maskVsBg.width = this.context.getStageWidth();
            this.maskVsBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskVsBg);
            this.vsPanel = new eui.Panel();
            this.vsPanel.horizontalCenter = 0;
            this.vsPanel.verticalCenter = 0;
            this.vsPanel.skinName = "resource/eui_skins/UserUI/FightingVsUI.exml";
            this.context.addChild(this.vsPanel);
            if (HallModule.isNoEnd || HallModule.isTrainBrr) {
                // this.vsPanel.getChildByName("match_tip").text = "进入中";
            }
            else {
                // this.vsPanel.getChildByName("match_tip").text = "匹配中....";
                this.vsPanel.getChildByName("exit_match").visible = true;
                this.vsPanel.getChildByName("exit_match").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    this.closeVsPanel();
                }, this);
            }
            CommonTools.fixFix(this.context, this.vsPanel, 1, 0, 0);
        }
    };
    FightingModule.prototype.closeVsPanel = function () {
        if (ConstValue.P_HALL_OBJ != null) {
            ConstValue.P_HALL_OBJ.clear();
            ConstValue.P_HALL_OBJ = null;
        }
        if (this.vsPanel != null) {
            this.context.removeChild(this.vsPanel);
            this.vsPanel = null;
        }
        if (this.maskVsBg != null) {
            this.context.removeChild(this.maskVsBg);
            this.maskVsBg = null;
        }
        this.preclear();
    };
    FightingModule.prototype.releaseVsPanel = function () {
        if (ConstValue.P_HALL_OBJ != null) {
            ConstValue.P_HALL_OBJ.clear();
            ConstValue.P_HALL_OBJ = null;
        }
        if (this.vsPanel == null) {
            this.showVspanel();
        }
        this.vsPanel.getChildByName("exit_match").visible = false;
        if (HallModule.isNoEnd || HallModule.isTrainBrr) {
            // this.vsPanel.getChildByName("match_tip").text = "开始战斗";
        }
        else {
            // this.vsPanel.getChildByName("match_tip").text = "匹配成功";
            this.vsPanel.getChildByName("match_tip").visible = true;
            this.vsPanel.getChildByName("match_tip").source = "match_success_png";
        }
        FightingModule.Delay(3000, function () {
            if (this.vsPanel != null) {
                this.context.removeChild(this.vsPanel);
                this.vsPanel = null;
            }
            if (this.maskVsBg != null) {
                this.context.removeChild(this.maskVsBg);
                this.maskVsBg = null;
            }
            this.initScene();
            if (this.miniGamePanel == null) {
                for (var i in FightingModule.aiSubObj) {
                    var obj = FightingModule.aiSubObj[i];
                    obj.startAI();
                }
            }
        }, this);
    };
    FightingModule.prototype.releaseMiniGamePanel = function () {
        if (this.miniGamePanel != null) {
            this.context.removeChild(this.miniGamePanel);
            this.miniGamePanel = null;
        }
        if (this.maskMiniBg != null) {
            this.context.removeChild(this.maskMiniBg);
            this.maskMiniBg = null;
        }
    };
    FightingModule.prototype.updateInfo = function (dData) {
        var dMain = dData[ConstValue.cacheUserInfo.id];
        var group = this.infoPanel.getChildByName("group_1");
        var heart_num_lb = group.getChildByName("heart_num_lb");
        var spead_num_lb = group.getChildByName("spead_num_lb");
        var boom_num_lb = group.getChildByName("boom_num_lb");
        var fire_num_lb = group.getChildByName("fire_num_lb");
        if (parseInt(heart_num_lb.text) != dMain.life)
            CommonTools.jumpAnim(heart_num_lb);
        if (parseInt(spead_num_lb.text) != dMain.speed)
            CommonTools.jumpAnim(spead_num_lb);
        if (parseInt(boom_num_lb.text) != dMain.paopaocount)
            CommonTools.jumpAnim(boom_num_lb);
        if (parseInt(fire_num_lb.text) != dMain.power)
            CommonTools.jumpAnim(fire_num_lb);
        heart_num_lb.text = dMain.life;
        spead_num_lb.text = dMain.speed;
        boom_num_lb.text = dMain.paopaocount;
        fire_num_lb.text = dMain.power;
        if (this.dSkill == null) {
            this.dSkill = dMain.dSkill;
            if (this.dSkill[this.shortCut01] != null)
                this.panel.getChildByName("skill_01").source = ConstValue.skill_conf[this.shortCut01].icon;
            if (this.dSkill[this.shortCut02] != null)
                this.panel.getChildByName("skill_02").source = ConstValue.skill_conf[this.shortCut02].icon;
        }
    };
    FightingModule.prototype.getMainPlayer = function () {
        return this.curPlayer;
    };
    FightingModule.prototype.getPlayerById = function (roleId) {
        for (var i in FightingModule.playerLayerSubObj) {
            var pObj = FightingModule.playerLayerSubObj[i];
            if (pObj.roleId == roleId) {
                return pObj;
            }
        }
        return null;
    };
    /**
     * 延时执行操作
     */
    FightingModule.Delay = function (time, func, target) {
        var ti = new egret.Timer(time, 1);
        ti.addEventListener(egret.TimerEvent.TIMER, func, target);
        ti.start();
    };
    FightingModule.prototype.getInitRow = function () {
        return this.initRow;
    };
    FightingModule.prototype.getInitColumn = function () {
        return this.initColumn;
    };
    FightingModule.prototype.syncMove = function (jsonData) {
        var mainPl = this.getPlayerById(jsonData.rid);
        if (mainPl.isMainPlayer) {
            return;
        }
        /*
        //如果网络延迟收到包，x或者y大于1格82像素的，进行缓动动画移动200ms到达拉扯位置
        if(Math.abs(jsonData.x-mainPl.x) >= 82 || Math.abs(jsonData.y-mainPl.y) >= 82){
            egret.Tween.get(mainPl).to({x:jsonData.x,y:jsonData.y}, 200);
        }else{
            mainPl.x = jsonData.x;
            mainPl.y = jsonData.y;
        }
        */
        mainPl.x = jsonData.x;
        mainPl.y = jsonData.y;
        if (jsonData.direction == -1) {
            if (mainPl.func != null) {
                mainPl.setMoving(false);
                mainPl.removeEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
                mainPl.func = null;
            }
            return;
        }
        // mainPl.x = jsonData.x;//x,y修正一下
        // mainPl.y = jsonData.y;
        if (mainPl.func == null) {
            mainPl.func = function (e) {
                mainPl.setMoving(true);
                mainPl.move(-1, true);
            };
            mainPl.addEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
            mainPl.setMoving(true);
            mainPl.move(jsonData.direction, false);
        }
        else {
            mainPl.setMoving(true);
            mainPl.move(jsonData.direction, false);
        }
    };
    FightingModule.prototype.getMapObjByIdx = function (idx) {
        for (var i in FightingModule.mapLayerSubObj) {
            var obj = FightingModule.mapLayerSubObj[i];
            if (obj.getCurIdx() == idx) {
                return obj;
            }
        }
        return null;
    };
    FightingModule.prototype.syncBoomZhuan = function (data) {
        var obj = this.getMapObjByIdx(data["breakidx"]);
        for (var i in FightingModule.aiSubObj) {
            var tAi = FightingModule.aiSubObj[i];
            tAi.openBlock(obj.getColumn(), obj.getRow());
        }
        var baoEff = CommonTools.getAnimDraw(RES.getRes("SpeedNet_json"), RES.getRes("SpeedNet_png"), "0");
        FightingModule.mapLayer.addChild(baoEff);
        var x = obj.x;
        var y = obj.y;
        baoEff.x = x;
        baoEff.y = y;
        FightingModule.mapLayer.removeChild(obj);
        FightingModule.mapLayerSubObj[data["breakidx"].toString()] = null;
        delete FightingModule.mapLayerSubObj[data["breakidx"].toString()];
        baoEff.scaleX = 1;
        baoEff.scaleY = 1;
        baoEff.x += 30;
        baoEff.y += 60;
        baoEff.play(1);
        baoEff.once(egret.Event.COMPLETE, function (e) {
            if (data.effect["type"] != null) {
                var itemType = null;
                if (data.effect["type"] == 1) {
                    itemType = new eui.Image(RES.getRes("mini_res_json.mini_speed"));
                }
                else if (data.effect["type"] == 3) {
                    itemType = new eui.Image(RES.getRes("mini_res_json.mini_weili"));
                }
                else if (data.effect["type"] == 2) {
                    itemType = new eui.Image(RES.getRes("mini_res_json.mini_boom"));
                }
                else if (data.effect["type"] == 7) {
                    itemType = new eui.Image(RES.getRes("mini_res_json.pass_door"));
                }
                FightingModule.groundLayerSubObj[data["breakidx"].toString()].addSub(itemType, data.effect["type"]);
            }
            FightingModule.mapLayer.removeChild(baoEff);
        }, this);
    };
    FightingModule.prototype.preclear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, obj, i, tPlay, sData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.curPlayer = null;
                        for (i in FightingModule.aiSubObj) {
                            obj = FightingModule.aiSubObj[i];
                            obj.stopAI();
                            obj.clear();
                            FightingModule.aiSubObj[i] = null;
                        }
                        for (i in FightingModule.playerLayerSubObj) {
                            tPlay = FightingModule.playerLayerSubObj[i];
                            tPlay.clear();
                            FightingModule.playerLayerSubObj[i] = null;
                        }
                        this.context.removeChild(this.infoPanel);
                        this.context.removeChild(this.backBtn);
                        this.backBtn = null;
                        sData = CommonTools.getDataJsonStr("exitPPRoom", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData);
                        this.closeResultpanel();
                        this.context.removeChild(this.panel);
                        this.context.dDataInfo = null;
                        this.context.dDataInfo2 = null;
                        FightingModule.readyRes = false;
                        FightingModule.readyTwo = false;
                        FightingModule.aiSubObj = {};
                        FightingModule.aiPVE = false;
                        return [4 /*yield*/, this.context.loadResource("preloadHall", 2)];
                    case 1:
                        _a.sent();
                        this.context = null;
                        ConstValue.P_FIGHT_OBJ = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    FightingModule.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, obj, i, tPlay, sData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.counterTimerSkill01 != null) {
                            this.counterTimerSkill01.stop();
                            this.counterTimerSkill01.removeEventListener(egret.TimerEvent.TIMER);
                            this.counterTimerSkill01 = null;
                        }
                        if (this.counterTimerSkill02 != null) {
                            this.counterTimerSkill02.stop();
                            this.counterTimerSkill02.removeEventListener(egret.TimerEvent.TIMER);
                            this.counterTimerSkill02 = null;
                        }
                        this.curPlayer = null;
                        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_BEGIN);
                        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_END);
                        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_MOVE);
                        this.controlerParent = null;
                        for (i in FightingModule.aiSubObj) {
                            obj = FightingModule.aiSubObj[i];
                            obj.stopAI();
                            obj.clear();
                            FightingModule.aiSubObj[i] = null;
                        }
                        for (i in FightingModule.playerLayerSubObj) {
                            tPlay = FightingModule.playerLayerSubObj[i];
                            tPlay.clear();
                            FightingModule.playerLayerSubObj[i] = null;
                        }
                        this.context.removeChild(this.infoPanel);
                        this.context.removeChild(this.backBtn);
                        this.backBtn = null;
                        sData = CommonTools.getDataJsonStr("exitPPRoom", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData);
                        this.closeResultpanel();
                        this.context.removeChild(this.panel);
                        FightingModule.groundLayer.removeChildren();
                        FightingModule.groundLayer = null;
                        FightingModule.playerLayer.removeChildren();
                        FightingModule.playerLayer = null;
                        FightingModule.bulletLayer.removeChildren();
                        FightingModule.bulletLayer = null;
                        FightingModule.mapLayer.removeChildren();
                        FightingModule.mapLayer = null;
                        FightingModule.groundLayerSubObj = {};
                        FightingModule.playerLayerSubObj = {};
                        FightingModule.bulletLayerSubObj = {};
                        FightingModule.mapLayerSubObj = {};
                        FightingModule.groundLayerSubObjDanger = {};
                        this.context.dDataInfo = null;
                        this.context.dDataInfo2 = null;
                        FightingModule.readyRes = false;
                        FightingModule.readyTwo = false;
                        FightingModule.aiSubObj = {};
                        FightingModule.aiPVE = false;
                        document.removeEventListener("keydown", this.myKeyDown);
                        document.removeEventListener("keyup", this.myKeyUp);
                        return [4 /*yield*/, this.context.loadResource("preloadHall", 2)];
                    case 1:
                        _a.sent();
                        this.context = null;
                        ConstValue.P_FIGHT_OBJ = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    FightingModule.prototype.clear2 = function () {
        if (this.counterTimerSkill01 != null) {
            this.counterTimerSkill01.stop();
            this.counterTimerSkill01.removeEventListener(egret.TimerEvent.TIMER);
            this.counterTimerSkill01 = null;
        }
        if (this.counterTimerSkill02 != null) {
            this.counterTimerSkill02.stop();
            this.counterTimerSkill02.removeEventListener(egret.TimerEvent.TIMER);
            this.counterTimerSkill02 = null;
        }
        this.curPlayer = null;
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_BEGIN);
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_END);
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_MOVE);
        this.controlerParent = null;
        for (var i in FightingModule.aiSubObj) {
            var obj = FightingModule.aiSubObj[i];
            obj.stopAI();
            obj.clear();
            FightingModule.aiSubObj[i] = null;
        }
        for (var i in FightingModule.playerLayerSubObj) {
            var tPlay = FightingModule.playerLayerSubObj[i];
            tPlay.clear();
            FightingModule.playerLayerSubObj[i] = null;
        }
        this.context.removeChild(this.infoPanel);
        this.context.removeChild(this.backBtn);
        this.backBtn = null;
        var sData = CommonTools.getDataJsonStr("exitPPRoom", 1, {});
        ConstValue.P_NET_OBJ.sendData(sData);
        this.closeResultpanel();
        this.context.removeChild(this.panel);
        FightingModule.groundLayer.removeChildren();
        FightingModule.groundLayer = null;
        FightingModule.playerLayer.removeChildren();
        FightingModule.playerLayer = null;
        FightingModule.bulletLayer.removeChildren();
        FightingModule.bulletLayer = null;
        FightingModule.mapLayer.removeChildren();
        FightingModule.mapLayer = null;
        FightingModule.groundLayerSubObj = {};
        FightingModule.playerLayerSubObj = {};
        FightingModule.bulletLayerSubObj = {};
        FightingModule.mapLayerSubObj = {};
        FightingModule.groundLayerSubObjDanger = {};
        this.context.dDataInfo = null;
        this.context.dDataInfo2 = null;
        FightingModule.readyRes = false;
        FightingModule.readyTwo = false;
        FightingModule.aiSubObj = {};
        FightingModule.aiPVE = false;
        document.removeEventListener("keydown", this.myKeyDown);
        document.removeEventListener("keyup", this.myKeyUp);
        this.context = null;
        ConstValue.P_FIGHT_OBJ = null;
    };
    FightingModule.prototype.replay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clear2();
                        return [4 /*yield*/, ConstValue.P_CONTEXT.loadResource("fighting", 3)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FightingModule.prototype.replayGuanka = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sData_gobarr;
            return __generator(this, function (_a) {
                this.clear2();
                sData_gobarr = CommonTools.getDataJsonStr("C2GGotoBarrier", 1, { barrierNo: FightingModule.curBarrNo });
                ConstValue.P_NET_OBJ.sendData(sData_gobarr);
                return [2 /*return*/];
            });
        });
    };
    FightingModule.prototype.playNextGuanka = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sData_gobarr;
            return __generator(this, function (_a) {
                this.clear2();
                FightingModule.curBarrNo += 1;
                sData_gobarr = CommonTools.getDataJsonStr("C2GGotoBarrier", 1, { barrierNo: FightingModule.curBarrNo });
                ConstValue.P_NET_OBJ.sendData(sData_gobarr);
                return [2 /*return*/];
            });
        });
    };
    FightingModule.prototype.addCommonTips = function (tips) {
        CommonTools.addCommonTips(this.panel, tips);
    };
    /**
     * 回包处理
     */
    FightingModule.prototype.handlePacket = function (jsonObj) {
        return __awaiter(this, void 0, void 0, function () {
            var pObj, pObj, pObj, i, obj, playobj, playobj, i, obj, mainObj, winObj, failObj, i, obj, i, obj, mainObj, winObj, failObj, i, obj, i, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(jsonObj.f == "syncPosBroadcase")) return [3 /*break*/, 1];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            this.syncMove(jsonObj.d);
                        }
                        return [3 /*break*/, 17];
                    case 1:
                        if (!(jsonObj.f == "syncPut")) return [3 /*break*/, 2];
                        if (jsonObj.m != "" || jsonObj.s != 1 || (jsonObj.d != "" && jsonObj.d.err == 36)) {
                            pObj = this.getPlayerById(jsonObj.d.rid);
                            if (pObj.isAI == 1)
                                pObj.findOwnAi().moveNext();
                        }
                        else {
                            if (jsonObj.d["rid"] == null) {
                                return [2 /*return*/];
                            }
                            pObj = this.getPlayerById(jsonObj.d.rid);
                            // pObj.x = jsonObj.d.x;
                            // pObj.y = jsonObj.d.y;
                            pObj.fire(jsonObj.d.paopaoID, jsonObj.d.idx);
                        }
                        return [3 /*break*/, 17];
                    case 2:
                        if (!(jsonObj.f == "syncKillMst")) return [3 /*break*/, 3];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            pObj = this.getPlayerById(jsonObj.d.killID);
                            pObj.visible = false;
                            pObj.findOwnAi().stopAI();
                            // for(let i in FightingModule.aiSubObj){
                            //     let obj = FightingModule.aiSubObj[i];
                            //     if(obj.aiObj == pObj)obj.stopAI();
                            //     break;
                            // }
                        }
                        return [3 /*break*/, 17];
                    case 3:
                        if (!(jsonObj.f == "syncBoomZhuan")) return [3 /*break*/, 4];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            if (jsonObj.d["breakidx"] == null) {
                                return [2 /*return*/];
                            }
                            this.syncBoomZhuan(jsonObj.d);
                        }
                        return [3 /*break*/, 17];
                    case 4:
                        if (!(jsonObj.f == "syncpickItem")) return [3 /*break*/, 5];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            for (i in jsonObj.d.player) {
                                obj = jsonObj.d.player[i];
                                playobj = this.getPlayerById(obj.uid);
                                playobj.speed = obj.speed;
                                playobj.bulletLen = obj.power;
                            }
                            this.updateInfo(jsonObj.d.player);
                            this.getMainPlayer().removeGuideTips("4");
                        }
                        return [3 /*break*/, 17];
                    case 5:
                        if (!(jsonObj.f == "useSkillOK")) return [3 /*break*/, 6];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            CommonAudioHandle.playEffect("playBomb_mp3", 1);
                            playobj = this.getPlayerById(jsonObj.d.effectPlayer);
                            playobj.addBuff(jsonObj.d.skillID);
                        }
                        return [3 /*break*/, 17];
                    case 6:
                        if (!(jsonObj.f == "GuildInfo")) return [3 /*break*/, 7];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            // if(jsonObj.d.id == 3)new GuideModule(this.context,jsonObj.d.id,null,null);
                        }
                        return [3 /*break*/, 17];
                    case 7:
                        if (!(jsonObj.f == "gameResult")) return [3 /*break*/, 8];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            for (i in FightingModule.aiSubObj) {
                                obj = FightingModule.aiSubObj[i];
                                obj.stopAI();
                            }
                            mainObj = null;
                            winObj = null;
                            failObj = null;
                            for (i in jsonObj.d.player) {
                                obj = jsonObj.d.player[i];
                                if (obj.win == 0) {
                                    failObj = obj;
                                }
                                else {
                                    winObj = obj;
                                }
                                if (obj.uid == ConstValue.cacheUserInfo.id) {
                                    mainObj = obj;
                                }
                            }
                            this.showResultpanel(winObj, failObj, mainObj);
                        }
                        return [3 /*break*/, 17];
                    case 8:
                        if (!(jsonObj.f == "gameGuanKaResult")) return [3 /*break*/, 9];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            for (i in FightingModule.aiSubObj) {
                                obj = FightingModule.aiSubObj[i];
                                obj.stopAI();
                            }
                            mainObj = null;
                            winObj = null;
                            failObj = null;
                            for (i in jsonObj.d.player) {
                                obj = jsonObj.d.player[i];
                                if (obj.win == 0) {
                                    failObj = obj;
                                }
                                else {
                                    winObj = obj;
                                }
                                if (obj.uid == ConstValue.cacheUserInfo.id) {
                                    mainObj = obj;
                                }
                            }
                            if (this.backBtn != null)
                                this.showGuanKaResultpanel(winObj, failObj, mainObj);
                        }
                        return [3 /*break*/, 17];
                    case 9:
                        if (!(jsonObj.f == "miniGameInfo")) return [3 /*break*/, 10];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            ConstValue.P_FIGHT_OBJ.showVsMiniGamepanel();
                            for (i in FightingModule.aiSubObj) {
                                obj = FightingModule.aiSubObj[i];
                                obj.stopAI();
                            }
                        }
                        return [3 /*break*/, 17];
                    case 10:
                        if (!(jsonObj.f == "WaitingInfo")) return [3 /*break*/, 11];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                            CommonTools.addCommonTips(this.panel, ConstValue.P_ENTER_ROOM_FAIL);
                        }
                        else {
                            if (ConstValue.P_FIGHT_OBJ == null) {
                                ConstValue.P_FIGHT_OBJ = new FightingModule(this.context);
                            }
                            if (jsonObj.d.state < 2) {
                                // ConstValue.P_FIGHT_OBJ.showVsMiniGamepanel();
                                ConstValue.P_FIGHT_OBJ.showVspanel();
                            }
                            else if (jsonObj.d.state == 2) {
                                FightingModule.readyTwo = true;
                                this.context.dDataInfo2 = jsonObj.d.player;
                                if (ConstValue.P_FIGHT_OBJ.playerData != null) {
                                    FightingModule.readyRes = true;
                                    ConstValue.P_FIGHT_OBJ.releaseVsPanel();
                                    ConstValue.P_FIGHT_OBJ.updateInfo(jsonObj.d.player);
                                }
                            }
                        }
                        return [3 /*break*/, 17];
                    case 11:
                        if (!(jsonObj.f == "syncMapData")) return [3 /*break*/, 16];
                        if (!(jsonObj.m != "" || jsonObj.s != 1)) return [3 /*break*/, 12];
                        return [3 /*break*/, 15];
                    case 12:
                        if (!(ConstValue.cacheKeyGroup["fighting"] == null)) return [3 /*break*/, 14];
                        this.context.dDataInfo = jsonObj.d;
                        return [4 /*yield*/, this.context.loadResource("fighting", 6)];
                    case 13:
                        _a.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        if (ConstValue.P_FIGHT_OBJ == null) {
                            ConstValue.P_FIGHT_OBJ = new FightingModule(this.context);
                        }
                        ConstValue.P_FIGHT_OBJ.initMapData(jsonObj.d);
                        if (FightingModule.readyTwo && !FightingModule.readyRes) {
                            ConstValue.P_FIGHT_OBJ.releaseVsPanel();
                            ConstValue.P_FIGHT_OBJ.updateInfo(this.context.dDataInfo2);
                        }
                        _a.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (jsonObj.f == "UpdateClick") {
                            if (jsonObj.m != "" || jsonObj.s != 1) {
                            }
                            else {
                                this.updateClickData(jsonObj.d);
                            }
                        }
                        _a.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    FightingModule.groundLayerSubObj = {};
    FightingModule.groundLayerSubObjDanger = {};
    FightingModule.playerLayerSubObj = {};
    FightingModule.bulletLayerSubObj = {};
    FightingModule.mapLayerSubObj = {};
    FightingModule.mapLayerLock = false;
    FightingModule.mapLeftLimit = 177;
    FightingModule.mapUpLimit = 106;
    FightingModule.mapRightLimit = 823;
    FightingModule.mapDownLimit = 649;
    /**AI */
    FightingModule.aiSubObj = {};
    FightingModule.aiPVE = false;
    FightingModule.readyTwo = false;
    FightingModule.readyRes = false;
    FightingModule.curBarrNo = 1;
    return FightingModule;
}());
__reflect(FightingModule.prototype, "FightingModule");
//# sourceMappingURL=FightingModule.js.map