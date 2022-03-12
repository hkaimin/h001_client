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
var MapDIYModule = (function () {
    /**
     * 构造函数
     */
    function MapDIYModule(ct, jsonData, iType) {
        this.initRow = 9;
        this.initColumn = 11;
        this.firstItemX = 494.88;
        this.firstItemY = 100.84;
        this.groundItemW = 58;
        this.groundItemH = 55;
        this.groundOffX = 0;
        this.groundOffY = 0;
        this.curFunc = 1; //1是加图 2是橡皮擦 3是1p 4是2p
        this.curtype = 1;
        // private curRes = "diy_add_big_item_png";
        this.curRes = "";
        this.isShow = false;
        this.posScrollerClose = 0;
        this.resTitle = 4;
        this.selectList = {};
        this.txtMapName = "输入地图名字";
        this.txtMapSign = "输入地图个性签名";
        this.mapKey = 0;
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
            0, 5, 0, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 0, 0, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 0, 0, 0, 0, 5, 0, 6, 5, 6, 0,
            0, 0, 13, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 9, 6, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 9, 6, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 9, 6, 0, 0, 0, 0, 6, 5, 6, 0,
            0, 12, 11, 0, 0, 0, 0, 6, 5, 6, 0
        ];
        this.iType = iType;
        this.context = ct;
        if (this.iType > 0) {
            this.maskBg = new eui.Image("bg_ppt_1_png");
            this.maskBg.width = this.context.getStageWidth();
            var scaleDevice = 1334.0 / this.context.getStageWidth();
            this.maskBg.height = 750.0 / scaleDevice;
            this.context.addChild(this.maskBg);
            this.panel = new eui.Panel();
            this.panel.skinName = "resource/eui_skins/UserUI/mapDIYUI.exml";
            this.panel.title = "Title";
            this.panel.horizontalCenter = 0;
            this.panel.verticalCenter = 0;
            this.context.addChild(this.panel);
            this.tipsPanel = this.panel;
            if (iType == 1) {
                this.testGround = jsonData.DefaultBg;
                MapDIYModule.defaultData = jsonData.DefaultBg;
                if (ConstValue.P_HALL_OBJ != null) {
                    ConstValue.P_HALL_OBJ.clear();
                    ConstValue.P_HALL_OBJ = null;
                }
            }
            else if (iType == 2) {
                this.testGround = MapDIYModule.defaultData;
            }
            else {
                this.testGround = jsonData.bgconf;
                this.testMap = jsonData.layerconf;
            }
            CommonTools.fixFix(this.context, this.panel, 1, 0, 0);
            this.backBtn = new eui.Image("btn_back_png");
            this.backBtn.width = 60;
            this.backBtn.height = 60;
            this.backBtn.x = 44;
            this.backBtn.y = 10;
            this.backBtn.name = "goback_btn";
            this.context.addChild(this.backBtn);
            this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.matrix = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
            this.grid = new PF.Grid(11, 9, this.matrix);
            this.op = new PF.Option();
            this.op.allowDiagonal = false; //对角线
            this.finder = new PF.AStarFinder(this.op);
            // this.initConfig();
            this.initScene(); //初始化地图
            if (egret.localStorage.getItem("mapdiy0") != "1") {
                new GuideModule(this.context, 999, null, null);
            }
        }
        else {
            var sData = CommonTools.getDataJsonStr("getNewRank", 1, {});
            ConstValue.P_NET_OBJ.sendData(sData);
        }
    }
    /**
     * 初始化配置
     */
    MapDIYModule.prototype.initConfig = function () {
        var _this = this;
        LZMA.decompress(EBitUtil.getArr(new egret.ByteArray(RES.getRes("config_json"))), function (d) {
            // CommonTools.log("initXYConfig=========dddd======"+d);
            ConstValue.P_CONFIG = JSON.parse(d);
            _this.initScene(); //初始化地图
        }, function (t) {
            //ELog.info("conf:",t);
        });
    };
    MapDIYModule.prototype.initMapData = function (jsonObj) {
    };
    MapDIYModule.prototype.addCommonTips = function (tips) {
        CommonTools.addCommonTips(this.tipsPanel, tips);
    };
    MapDIYModule.prototype.addGuideTips = function (type) {
        // egret.localStorage.setItem(type,"0");
        if (MapDIYModule.guide_tip_new[type] == null)
            return;
        if (egret.localStorage.getItem(type) == "1")
            return;
        egret.localStorage.setItem(type, "1");
        var panelT = new eui.Panel();
        panelT.skinName = "resource/eui_skins/UserUI/GuideTipsGroup.exml";
        panelT.name = "p_" + type;
        var group = panelT.getChildByName("group_1");
        var tip = group.getChildByName("tip");
        tip.text = MapDIYModule.guide_tip_new[type].tip;
        if (ConstValue.deviveNormalScale > 2) {
            panelT.x = 1060;
            panelT.y = 380;
        }
        else {
            panelT.x = 1060;
            panelT.y = 380;
        }
        this.panel.addChild(panelT);
        FightingModule.Delay(5000, function () {
            this.panel.removeChild(panelT);
            panelT = null;
        }, this);
    };
    MapDIYModule.prototype.initScene = function () {
        this.panel.getChildByName("btn_ground_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_block_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_decorate_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("STYLE_BTN").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_1p").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_2p").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_eraser").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_save").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_rank").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_mymap").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.btn = this.panel.getChildByName("STYLE_BTN");
        this.btnGround = this.panel.getChildByName("btn_ground");
        this.btnBlock = this.panel.getChildByName("btn_block");
        this.btnDecorate = this.panel.getChildByName("btn_decorate");
        this.tDi = this.panel.getChildByName("t_di");
        this.tBiao = this.panel.getChildByName("t_biao");
        this.tZhang = this.panel.getChildByName("t_zhang");
        this.tAi = this.panel.getChildByName("t_ai");
        this.tZhuang = this.panel.getChildByName("t_zhuang");
        this.tShi = this.panel.getChildByName("t_shi");
        var lbCoin = this.panel.getChildByName("coin_num_lb");
        lbCoin.text = ConstValue.cacheUserInfo.coin;
        var lbZuan = this.panel.getChildByName("zuan_num_lb");
        lbZuan.text = ConstValue.cacheUserInfo.diamond;
        MapDIYModule.ONE_P = "";
        MapDIYModule.TWO_P = "";
        //地表层
        var count = 0;
        for (var i = 0; i < this.initRow; i++) {
            var _loop_1 = function (j) {
                var wItem = this_1.groundItemW;
                var hItem = this_1.groundItemH;
                var xOff = this_1.groundOffX;
                var yOff = this_1.groundOffY;
                if (i > 0) {
                    yOff = 7;
                }
                if (j > 0) {
                    xOff = 4;
                }
                var x = this_1.firstItemX + wItem * j + xOff * j;
                var y = this_1.firstItemY + hItem * i + yOff * i;
                var para = { "img": "res_" + this_1.testGround[count] + "_png", "x": x, "y": y, "name": "ground_" + count, "curIdx": count };
                // CommonTools.log("para========================"+JSON.stringify(para))
                var mapItemObj = new Fight.MapItem(para);
                mapItemObj.setRow(i);
                mapItemObj.setColumn(j);
                mapItemObj.setType(ConstValue.P_CONFIG["MapBase"][this_1.testGround[count].toString()]["Type"]);
                this_1.panel.addChild(mapItemObj);
                mapItemObj.scaleX = 0.7;
                mapItemObj.scaleY = 0.7;
                MapDIYModule.groundLayerSubObj[count.toString()] = mapItemObj;
                mapItemObj.itemRange[0] = 497 + 55 * j + 6 * j; //x1
                mapItemObj.itemRange[1] = mapItemObj.itemRange[0] + 55; //x2
                mapItemObj.itemRange[2] = 103 + 55 * i + 7 * i; //y1
                mapItemObj.itemRange[3] = mapItemObj.itemRange[2] + 55; //y2
                // CommonTools.log("----------mapItemObj.itemRange---"+mapItemObj.itemRange)
                mapItemObj.setRes(this_1.testGround[count]);
                mapItemObj.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    // CommonTools.log("=mapItemObj========mapItemObj name:::="+mapItemObj.name);
                    if (this.curRes == "" && this.curFunc == 1) {
                        CommonTools.addCommonTips(this.panel, "请选择左侧资源");
                        return;
                    }
                    this.addGuideTips("mapdiy1");
                    mapItemObj.checkRange2(this.curRes, this.curtype, this.curFunc);
                }, this_1);
                mapItemObj.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
                    // CommonTools.log("=mapItemObj========mapItemObj name:::="+mapItemObj.name);
                    if (this.curRes == "" && this.curFunc == 1) {
                        CommonTools.addCommonTips(this.panel, "请选择左侧资源");
                        return;
                    }
                    this.addGuideTips("mapdiy1");
                    mapItemObj.checkRange2(this.curRes, this.curtype, this.curFunc);
                }, this_1);
                if (this_1.iType == 3) {
                    if (this_1.testMap[count] > 0 && this_1.testMap[count] < 100) {
                        var res = "res_" + this_1.testMap[count] + "_png";
                        var obj = ConstValue.P_CONFIG["MapBase"][this_1.testMap[count].toString()];
                        mapItemObj.checkRange2(res, obj.Type, 1);
                    }
                    else if (this_1.testMap[count] > 100) {
                        if (this_1.testMap[count] == 119) {
                            mapItemObj.checkRange2(null, 2, 3);
                        }
                        else {
                            mapItemObj.checkRange2(null, 2, 4);
                        }
                    }
                }
                count++;
            };
            var this_1 = this;
            for (var j = 0; j < this.initColumn; j++) {
                _loop_1(j);
            }
        }
        this.drawDownList();
        this.resGroup = this.panel.getChildByName("res_scroller").getChildByName("res_group");
        this.initResList(4, 1);
        if (this.iType == 3) {
            this.clickBolck();
        }
    };
    MapDIYModule.prototype.initResList = function (title, type) {
        var scroller = this.panel.getChildByName("res_scroller");
        scroller.viewport.scrollV = 0;
        this.resGroup.removeChildren();
        this.selectList = {};
        var count = 0;
        var _loop_2 = function (i) {
            var obj = ConstValue.P_CONFIG["MapBase"][i];
            if (obj.mapType == title && obj.Type == type) {
                var resImg = new eui.Image(obj.res + "_png");
                var resBg_1 = new eui.Image("diy_item_bg_png");
                this_2.resGroup.addChild(resBg_1);
                this_2.resGroup.addChild(resImg);
                var resHeight = 100;
                var resOffy = 30;
                var resOffy2 = 10;
                var resOffy3 = 0;
                if (type == 1) {
                    resHeight = 82;
                    resOffy = 0;
                    resOffy2 = 0;
                }
                else if (type == 2) {
                    resOffy = 28;
                    resOffy2 = 0;
                    if (count < 3) {
                        resOffy3 = 5;
                    }
                }
                resImg.x = count % 3 * 82 + 10 + count % 3 * 10;
                resImg.y = parseInt(count / 3 + "") * resHeight + 10 + parseInt(count / 3 + "") * 10 - resOffy - parseInt(count / 3 + "") * resOffy2 + resOffy3;
                if (type == 1) {
                    resBg_1.x = resImg.x - 2.25;
                    resBg_1.y = resImg.y - 2.5;
                }
                else {
                    resBg_1.x = resImg.x - 2;
                    resBg_1.y = resImg.y + 24;
                    resBg_1.scaleY = 1.15;
                }
                if (count == 0) {
                    this_2.curFunc = 1;
                    this_2.curRes = obj.res + "_png";
                    for (var i_1 in this_2.selectList) {
                        var obj_1 = this_2.selectList[i_1];
                        obj_1.source = "diy_item_bg_png";
                    }
                    resBg_1.source = "diy_select_kuan_png";
                }
                count++;
                this_2.selectList[count.toString()] = resBg_1;
                resImg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    this.curFunc = 1;
                    this.curRes = obj.res + "_png";
                    for (var i_2 in this.selectList) {
                        var obj_2 = this.selectList[i_2];
                        obj_2.source = "diy_item_bg_png";
                    }
                    resBg_1.source = "diy_select_kuan_png";
                }, this_2);
            }
        };
        var this_2 = this;
        for (var i in ConstValue.P_CONFIG["MapBase"]) {
            _loop_2(i);
        }
    };
    MapDIYModule.prototype.viewMapSubLayer = function (flag) {
        for (var i in MapDIYModule.groundLayerSubObj) {
            var obj = MapDIYModule.groundLayerSubObj[i];
            obj.viewSub(flag);
        }
    };
    MapDIYModule.prototype.clickGround = function () {
        this.initResList(this.resTitle, 1);
        this.viewMapSubLayer(false);
        this.curFunc = 1;
        this.curtype = 1;
        this.btnGround.source = "diy_page_yes_png";
        this.btnBlock.source = "diy_page_not_png";
        this.btnDecorate.source = "diy_page_not_png";
        this.tDi.textColor = 0xf7d69d;
        this.tBiao.textColor = 0xf7d69d;
        this.tZhang.textColor = 0xd5b6a0;
        this.tAi.textColor = 0xd5b6a0;
        this.tZhuang.textColor = 0xd5b6a0;
        this.tShi.textColor = 0xd5b6a0;
    };
    MapDIYModule.prototype.closeNice = function () {
        this.tipsPanel = this.panel;
        if (this.panelSave != null)
            this.context.removeChild(this.panelSave);
        this.panelSave = null;
        if (this.panelRank != null)
            this.context.removeChild(this.panelRank);
        this.panelRank = null;
        if (this.maskBg2 != null)
            this.context.removeChild(this.maskBg2);
        if (this.iType == 0)
            this.clear();
    };
    MapDIYModule.prototype.clickBolck = function () {
        this.initResList(this.resTitle, 2);
        this.viewMapSubLayer(true);
        this.curFunc = 1;
        this.curtype = 2;
        this.btnGround.source = "diy_page_not_png";
        this.btnBlock.source = "diy_page_yes_png";
        this.btnDecorate.source = "diy_page_not_png";
        this.tDi.textColor = 0xd5b6a0;
        this.tBiao.textColor = 0xd5b6a0;
        this.tZhang.textColor = 0xf7d69d;
        this.tAi.textColor = 0xf7d69d;
        this.tZhuang.textColor = 0xd5b6a0;
        this.tShi.textColor = 0xd5b6a0;
    };
    MapDIYModule.prototype.onClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var name, sData, sDataMymap, img1, img2, sDataNew, img1_, img2_, sDataHot;
            return __generator(this, function (_a) {
                name = e.target.name;
                CommonTools.log("==========name::::" + name);
                switch (name) {
                    case "STYLE_BTN":
                        this.changeListType();
                        break;
                    case "btn_rank":
                        sData = CommonTools.getDataJsonStr("getNewRank", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData);
                        // egret.localStorage.setItem("mapdiy0","0");
                        // egret.localStorage.setItem("mapdiy1","0");
                        // egret.localStorage.setItem("mapdiy2","0");
                        // egret.localStorage.setItem("mapdiy3","0");
                        // egret.localStorage.setItem("mapdiy4","0");
                        // egret.localStorage.setItem("mapdiy5","0");
                        // egret.localStorage.setItem("mapdiy6","0");
                        // egret.localStorage.setItem("mapdiy7","0");
                        break;
                    case "btn_mymap":
                        sDataMymap = CommonTools.getDataJsonStr("getMyMaps", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sDataMymap);
                        break;
                    case "btn_close":
                        CommonTools.niceTip(this.panelRank, 2, this);
                        break;
                    case "btn_ground_lb":
                        this.addGuideTips("mapdiy1");
                        this.clickGround();
                        break;
                    case "btn_block_lb":
                        this.addGuideTips("mapdiy2");
                        this.clickBolck();
                        break;
                    case "btn_decorate_lb":
                        this.addGuideTips("mapdiy3");
                        this.initResList(this.resTitle, 3);
                        this.viewMapSubLayer(true);
                        this.curFunc = 1;
                        this.curtype = 3;
                        this.btnGround.source = "diy_page_not_png";
                        this.btnBlock.source = "diy_page_not_png";
                        this.btnDecorate.source = "diy_page_yes_png";
                        this.tDi.textColor = 0xd5b6a0;
                        this.tBiao.textColor = 0xd5b6a0;
                        this.tZhang.textColor = 0xd5b6a0;
                        this.tAi.textColor = 0xd5b6a0;
                        this.tZhuang.textColor = 0xf7d69d;
                        this.tShi.textColor = 0xf7d69d;
                        break;
                    case "goback_btn":
                        this.clear();
                        break;
                    case "lb_1p":
                        this.addGuideTips("mapdiy4");
                        if (this.curtype == 1) {
                            CommonTools.addCommonTips(this.panel, "当前在地表层，请选择障碍层或者装饰层");
                            return [2 /*return*/];
                        }
                        this.curFunc = 3;
                        break;
                    case "lb_2p":
                        this.addGuideTips("mapdiy5");
                        if (this.curtype == 1) {
                            CommonTools.addCommonTips(this.panel, "当前在地表层，请选择障碍层或者装饰层");
                            return [2 /*return*/];
                        }
                        this.curFunc = 4;
                        break;
                    case "lb_eraser":
                        this.addGuideTips("mapdiy6");
                        this.curFunc = 2;
                        break;
                    case "btn_close_edit":
                        CommonTools.niceTip(this.panelSave, 2, this);
                        break;
                    case "btn_confirm_modify":
                        this.saveMap();
                        break;
                    case "lb_save":
                        if (!this.checkGroundValidate()) {
                            CommonTools.addCommonTips(this.panel, "地表层不能有空块");
                            return [2 /*return*/];
                        }
                        if (!this.checkPlayers()) {
                            CommonTools.addCommonTips(this.panel, "需要完整p1和p2,请设置位置");
                            return [2 /*return*/];
                        }
                        if (!this.checkPathValidate()) {
                            CommonTools.addCommonTips(this.panel, "玩家间不联通，请合理设计");
                            return [2 /*return*/];
                        }
                        // this.openSaveUI();
                        this.saveMap();
                        break;
                    case "lb_new":
                        img1 = this.panelRank.getChildByName("match_rank_bg");
                        img2 = this.panelRank.getChildByName("lv_rank_bg");
                        img1.source = "map_rank_normal_png";
                        img2.source = "map_rank_select_png";
                        sDataNew = CommonTools.getDataJsonStr("getNewRank", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sDataNew);
                        break;
                    case "lb_hot":
                        img1_ = this.panelRank.getChildByName("match_rank_bg");
                        img2_ = this.panelRank.getChildByName("lv_rank_bg");
                        img1_.source = "map_rank_select_png";
                        img2_.source = "map_rank_normal_png";
                        sDataHot = CommonTools.getDataJsonStr("getHopRank", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sDataHot);
                        break;
                    default:
                        CommonTools.log("11111111 default");
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    MapDIYModule.prototype.changeListType = function () {
        if (!this.isShow) {
            this.isShow = true;
            this.scroller.visible = true;
        }
        else {
            this.isShow = false;
            this.scroller.visible = false;
        }
    };
    MapDIYModule.prototype.drawDownList = function () {
        //创建滚动区域和列表
        var arr = ["基础主题", "吃货主题", "暗黑主题", "春节主题"];
        // for (var i = 0; i < 16; i++) {
        //     arr.push("项目：" + i);
        // }
        this.list = new eui.List();
        this.list.width = 308;
        this.list.dataProvider = new eui.ArrayCollection(arr);
        this.list.selectedIndex = 3; //设置默认选中项
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChange, this);
        var scroller = new eui.Scroller();
        scroller.height = 200;
        scroller.viewport = this.list;
        scroller.x = 161;
        scroller.y = 161;
        scroller.visible = false;
        this.panel.addChild(scroller);
        this.scroller = scroller;
    };
    MapDIYModule.prototype.onChange = function (e) {
        //获取点击消息
        // console.log(this.list.selectedItem,this.list.selectedIndex)
        // this.btn.label = this.list.selectedItem;
        this.resTitle = this.list.selectedIndex + 1;
        this.initResList(this.resTitle, 1);
        this.viewMapSubLayer(false);
        this.curtype = 1;
        this.changeListType();
        this.clickGround();
    };
    MapDIYModule.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.iType > 0) {
                            this.context.removeChild(this.backBtn);
                            this.context.removeChild(this.panel);
                            this.panel = null;
                            MapDIYModule.groundLayerSubObj = {};
                        }
                        return [4 /*yield*/, this.context.loadResource("preloadHall", 2)];
                    case 1:
                        _a.sent();
                        this.context = null;
                        ConstValue.P_MAP_OBJ = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    MapDIYModule.prototype.updateByClickAdd = function () {
        this.context.removeChild(this.panel);
        MapDIYModule.groundLayerSubObj = {};
        ConstValue.P_MAP_OBJ = null;
        ConstValue.P_MAP_OBJ = new MapDIYModule(this.context, null, 2);
    };
    MapDIYModule.prototype.updateByClickModify = function (jsonData) {
        this.context.removeChild(this.panel);
        MapDIYModule.groundLayerSubObj = {};
        ConstValue.P_MAP_OBJ = null;
        ConstValue.P_MAP_OBJ = new MapDIYModule(this.context, jsonData, 3);
        ConstValue.P_MAP_OBJ.mapKey = jsonData.id;
    };
    MapDIYModule.prototype.checkGroundValidate = function () {
        for (var i in MapDIYModule.groundLayerSubObj) {
            var obj = MapDIYModule.groundLayerSubObj[i];
            if (obj.groundEmpty)
                return false;
        }
        return true;
    };
    MapDIYModule.prototype.checkPlayers = function () {
        var p1 = false;
        var p2 = false;
        for (var i in MapDIYModule.groundLayerSubObj) {
            var obj = MapDIYModule.groundLayerSubObj[i];
            if (obj.isPlayer == 119) {
                p1 = true;
            }
            else if (obj.isPlayer == 120) {
                p2 = true;
            }
        }
        if (p1 && p2) {
            return true;
        }
        return false;
    };
    MapDIYModule.prototype.getPath = function (xStart, yStart, xEnd, yEnd) {
        //[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
        var tGrid = this.grid.clone();
        return this.finder.findPath(xStart, yStart, xEnd, yEnd, tGrid);
    };
    MapDIYModule.prototype.checkPathValidate = function () {
        var xStart = -1;
        var yStart = -1;
        var xEnd = -1;
        var yEnd = -1;
        var check = false;
        for (var i in MapDIYModule.groundLayerSubObj) {
            var obj = MapDIYModule.groundLayerSubObj[i];
            if (obj.subType == 2 && obj.isPlayer == 0) {
                this.grid.setWalkableAt(obj.getColumn(), obj.getRow(), false);
            }
            if (obj.isPlayer == 119) {
                xStart = obj.getColumn();
                yStart = obj.getRow();
            }
            else if (obj.isPlayer == 120) {
                xEnd = obj.getColumn();
                yEnd = obj.getRow();
            }
        }
        var path = this.getPath(xStart, yStart, xEnd, yEnd);
        if (path.length > 0)
            check = true;
        for (var i in MapDIYModule.groundLayerSubObj) {
            var obj = MapDIYModule.groundLayerSubObj[i];
            if (obj.subType == 2 && obj.isPlayer == 0) {
                this.grid.setWalkableAt(obj.getColumn(), obj.getRow(), true);
            }
        }
        return check;
    };
    MapDIYModule.prototype.saveMap = function () {
        // let map_name_tx = this.panelSave.getChildByName("map_name_tx") as eui.Label;
        // if(map_name_tx.text == ""){
        //     CommonTools.addCommonTips(this.panel,"名字不能为空");
        //     return;
        // }
        // if(map_name_tx.text.length > 10){
        //     CommonTools.addCommonTips(this.panel,"名字在10个长度内");
        //     return;
        // }
        // let map_sign_tx = this.panelSave.getChildByName("map_sign_tx") as eui.Label;
        // if(map_sign_tx.text == ""){
        //     CommonTools.addCommonTips(this.panel,"签名不能为空");
        //     return;
        // }
        // if(map_sign_tx.text.length > 50){
        //     CommonTools.addCommonTips(this.panel,"名字在50个长度内");
        //     return;
        // }
        // this.txtMapName = map_name_tx.text;
        // this.txtMapSign = map_sign_tx.text;
        for (var i in this.testMap2) {
            this.testMap2[i] = 0;
        }
        for (var i in MapDIYModule.groundLayerSubObj) {
            var obj = MapDIYModule.groundLayerSubObj[i];
            this.testGround2[parseInt(i)] = obj.res;
            if (obj.subType > 0) {
                this.testMap2[parseInt(i)] = obj.resSub;
            }
        }
        var sData = CommonTools.getDataJsonStr("saveMap", 1, { lBgConf: this.testGround2, lLayerConf: this.testMap2,
            mapName: "", mapSign: "", mapkey: this.mapKey });
        ConstValue.P_NET_OBJ.sendData(sData);
    };
    MapDIYModule.prototype.openSaveUI = function () {
        this.maskBg2 = new eui.Image("mask_layer_png");
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.panelSave = new eui.Panel();
        this.panelSave.skinName = "resource/eui_skins/UserUI/SaveMapTipUI.exml";
        this.panelSave.title = "Title";
        this.panelSave.horizontalCenter = 0;
        this.panelSave.verticalCenter = 0;
        this.context.addChild(this.panelSave);
        CommonTools.niceTip(this.panelSave, 1, this);
        var map_name_tx = this.panelSave.getChildByName("map_name_tx");
        map_name_tx.text = this.txtMapName;
        var map_sign_tx = this.panelSave.getChildByName("map_sign_tx");
        map_sign_tx.text = this.txtMapSign;
        CommonButtonHandle.beginTouch(this.panelSave.getChildByName("btn_close_edit"), this);
        this.panelSave.getChildByName("btn_close_edit").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        CommonButtonHandle.beginTouch(this.panelSave.getChildByName("btn_confirm_modify"), this);
        this.panelSave.getChildByName("btn_confirm_modify").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    MapDIYModule.prototype.openRankUI = function (jsonData) {
        if (this.iType > 0) {
            this.maskBg2 = new eui.Image("mask_layer_png");
        }
        else {
            this.maskBg2 = new eui.Image("bg_ppt_1_png");
        }
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.panelRank = new eui.Panel();
        this.panelRank.skinName = "resource/eui_skins/UserUI/MapRankUI.exml";
        this.panelRank.title = "Title";
        this.panelRank.horizontalCenter = 0;
        this.panelRank.verticalCenter = 0;
        this.context.addChild(this.panelRank);
        CommonTools.fixFix(this.context, this.panelRank, 1, 0, 0);
        CommonTools.niceTip(this.panelRank, 1, this);
        this.updateRankUI(jsonData, 1);
        CommonButtonHandle.beginTouch(this.panelRank.getChildByName("btn_close"), this);
        this.panelRank.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panelRank.getChildByName("lb_new").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panelRank.getChildByName("lb_hot").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    MapDIYModule.prototype.openViewUI = function (jsonData) {
        this.maskBg2 = new eui.Image("mask_layer_png");
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.panelRank = new eui.Panel();
        this.panelRank.skinName = "resource/eui_skins/UserUI/MapViewUI.exml";
        this.panelRank.title = "Title";
        this.panelRank.horizontalCenter = 0;
        this.panelRank.verticalCenter = 0;
        this.context.addChild(this.panelRank);
        CommonTools.fixFix(this.context, this.panelRank, 1, 0, 0);
        CommonTools.niceTip(this.panelRank, 1, this);
        var group = this.panelRank.getChildByName("fighting_parent")
            .getChildByName("scroll").getChildByName("scroll_group");
        var i = 0;
        var _loop_3 = function (key) {
            var obj = jsonData[key];
            var panelT_1 = new eui.Panel();
            panelT_1.skinName = "resource/eui_skins/UserUI/MapViewGroup.exml";
            panelT_1.name = "p_" + i;
            panelT_1.x += 8;
            panelT_1.y += 15 + 1 * i + 290 * i;
            group.addChild(panelT_1);
            panelT_1.getChildByName("view_add").visible = false;
            panelT_1.getChildByName("view_add_btn").visible = false;
            var panelGroup_1 = panelT_1.getChildByName("group_1");
            var lb_title = panelGroup_1.getChildByName("lb_title");
            lb_title.text = obj.mapName;
            var lb_author = panelGroup_1.getChildByName("lb_author");
            lb_author.text = ConstValue.cacheUserInfo.name;
            var lb_sign = panelGroup_1.getChildByName("lb_sign");
            lb_sign.text = obj.mapSign;
            panelT_1.getChildByName("view_fight_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                var sData = CommonTools.getDataJsonStr("setFightMap", 1, { mapId: obj.id });
                ConstValue.P_NET_OBJ.sendData(sData);
                var iChilds = group.numChildren;
                for (var i_3 = 0; i_3 < iChilds; i_3++) {
                    var childObj = group.getChildByName("p_" + i_3);
                    var imgObj = childObj.getChildByName("fighting_lb_png");
                    if (imgObj != null)
                        childObj.removeChild(imgObj);
                }
                var imgFight = new eui.Image("fighting_lb_png");
                imgFight.name = "fighting_lb_png";
                panelT_1.addChild(imgFight);
                imgFight.x = 6;
                imgFight.y = 6;
            }, this_3);
            panelT_1.getChildByName("view_change_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonTools.niceTip(this.panelRank, 2, this);
                this.updateByClickModify(obj);
            }, this_3);
            new MapMiniDIYModule(panelT_1, obj.bgconf, obj.layerconf, 2);
            if (obj.isFight == 1) {
                var imgFight = new eui.Image("fighting_lb_png");
                imgFight.name = "fighting_lb_png";
                panelT_1.addChild(imgFight);
                imgFight.x = 6;
                imgFight.y = 6;
            }
            i++;
        };
        var this_3 = this;
        for (var key in jsonData) {
            _loop_3(key);
        }
        //添加-----
        var panelT = new eui.Panel();
        panelT.skinName = "resource/eui_skins/UserUI/MapViewGroup.exml";
        panelT.name = "p_" + i;
        panelT.x += 8;
        panelT.y += 15 + 1 * i + 290 * i;
        group.addChild(panelT);
        var panelGroup = panelT.getChildByName("group_1");
        panelGroup.visible = false;
        panelT.getChildByName("view_fight_btn").visible = false;
        panelT.getChildByName("view_change_btn").visible = false;
        panelT.getChildByName("view_add_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonTools.niceTip(this.panelRank, 2, this);
            this.updateByClickAdd();
        }, this);
        //添加-----         
        CommonButtonHandle.beginTouch(this.panelRank.getChildByName("btn_close"), this);
        this.panelRank.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    MapDIYModule.prototype.updateRankUI = function (jsonData, iType) {
        this.tipsPanel = this.panelRank;
        var scroller = this.panelRank.getChildByName("fighting_parent")
            .getChildByName("scroll");
        scroller.viewport.scrollV = 0;
        var group = this.panelRank.getChildByName("fighting_parent")
            .getChildByName("scroll").getChildByName("scroll_group");
        group.removeChildren();
        var _loop_4 = function (i) {
            var obj = jsonData[i];
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/MapRankGroup.exml";
            panelT.name = "p_" + i;
            panelT.x += 8;
            panelT.y += 15 + 3 * parseInt(i) + 255 * parseInt(i);
            group.addChild(panelT);
            var panelGroup = panelT.getChildByName("group_1");
            var lb_title = panelGroup.getChildByName("lb_title");
            lb_title.text = obj.mapName;
            var lb_author = panelGroup.getChildByName("lb_author");
            lb_author.text = obj.name;
            var lb_sign = panelGroup.getChildByName("lb_sign");
            lb_sign.text = obj.mapSign;
            var like_num = panelGroup.getChildByName("like_num");
            like_num.text = obj.like;
            var like_heart = panelGroup.getChildByName("like_heart");
            CommonButtonHandle.beginTouch(like_heart, this_4);
            like_heart.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                var sData = CommonTools.getDataJsonStr("addLike", 1, { rid: obj.rid, mapKey: obj.mapkey, iType: iType });
                ConstValue.P_NET_OBJ.sendData(sData);
            }, this_4);
            new MapMiniDIYModule(panelT, obj.lBgconf, obj.lLayerconf, 1);
        };
        var this_4 = this;
        for (var i in jsonData) {
            _loop_4(i);
        }
    };
    /**
     * 回包处理
     */
    MapDIYModule.prototype.handlePacket = function (jsonObj) {
        if (jsonObj.f == "saveMap") {
            if (jsonObj.m != "" || jsonObj.s != 1) {
            }
            else {
                // CommonTools.niceTip(this.panelSave,2,this);
                this.mapKey = jsonObj.d.mapkey;
            }
        }
        else if (jsonObj.f == "getNewRank") {
            if (jsonObj.m != "" || jsonObj.s != 1) {
            }
            else {
                if (this.panelRank != null) {
                    this.updateRankUI(jsonObj.d.lnewRank, 1);
                }
                else {
                    this.openRankUI(jsonObj.d.lnewRank);
                }
            }
        }
        else if (jsonObj.f == "getHopRank") {
            if (jsonObj.m != "" || jsonObj.s != 1) {
            }
            else {
                this.updateRankUI(jsonObj.d.lhotRank, 2);
            }
        }
        else if (jsonObj.f == "getMyMaps") {
            if (jsonObj.m != "" || jsonObj.s != 1) {
            }
            else {
                this.openViewUI(jsonObj.d);
            }
        }
    };
    /** 地表层*/
    MapDIYModule.groundLayerSubObj = {};
    MapDIYModule.ONE_P = "";
    MapDIYModule.TWO_P = "";
    MapDIYModule.defaultData = {};
    //test
    MapDIYModule.guide_tip_new = {
        "mapdiy1": { "tip": "地表层是人物的行走区域哦！～" },
        "mapdiy2": { "tip": "障碍层是不可以被炸开哒！～" },
        "mapdiy3": { "tip": "炸开装饰有机会获得道具哦！～" },
        "mapdiy4": { "tip": "摆放自己的出生位置！～" },
        "mapdiy5": { "tip": "摆放敌人的出生位置！～" },
        "mapdiy6": { "tip": "可以抹掉你想抹掉的地方！～" },
    };
    return MapDIYModule;
}());
__reflect(MapDIYModule.prototype, "MapDIYModule");
//# sourceMappingURL=MapDIYModule.js.map