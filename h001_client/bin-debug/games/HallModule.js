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
 * 大厅模块
 */
var HallModule = (function () {
    function HallModule(ct) {
        this.sCurModifyBtn = "";
        this.sCurModifyValue = "";
        this.sCurModifyValue2 = "";
        this.shopUIType = 1;
        this.shopPageType = 0;
        this.shopItemNo = 0;
        this.shopItemItemID = 0;
        this.shopItemName = "";
        this.shopPayType = 0;
        this.barrLayer = 1;
        this.seventCur = 0;
        this.seventGetState = false;
        this.shopItemClickName = "";
        this.showWxVsPanel = null;
        this.isMainRoomer = false;
        this.roleSelectIdx = "0";
        this.fixGuide5 = false;
        this.curButton = null;
        this.moveLvGet = true;
        this.btnPveAnimInitX = 580; //440
        this.btnPveAnimInitY = 350; //240
        this.btnPveAnimX = 580;
        this.btnPveAnimY = 350;
        this.horseCurrent = 1;
        this.isCanShowSeventDay = true; //默认情况可以打开7天签到
        this.buyClass = 0;
        this.curPage = 1;
        this.subCurPage = 1;
        this.horsePanelUp = true;
        this.horseMarketData = null;
        this.horseOwnData = null;
        this.horseIndexS = 0;
        this.isdisplay = false;
        this.context = ct;
        HallModule.isNoEnd = false;
        HallModule.isTrainBrr = false;
        HallModule.isSafeArea = true;
        ConstValue.P_CONFIG = JSON.parse(JSON.stringify(RES.getRes("res_json")));
        this.init();
    }
    /**
     * 初始化配置
     */
    HallModule.prototype.initConfig = function () {
        var _this = this;
        LZMA.decompress(EBitUtil.getArr(new egret.ByteArray(RES.getRes("config_json"))), function (d) {
            // CommonTools.log("initXYConfig=========dddd======"+d);
            ConstValue.P_CONFIG = JSON.parse(d);
            // this.initScene();//初始化地图
            _this.init();
        }, function (t) {
            //ELog.info("conf:",t);
        });
    };
    HallModule.prototype.setHorseXY = function () {
        if (ConstValue.deviveNormalScale < 2) {
            // CommonTools.logWallet("---COMPLETE---deviveNormalScale--<2-")
            if (this.curPage == 2) {
                this.btnPveAnim.x = this.btnPveAnimX - 180;
                this.btnPveAnim.y = this.btnPveAnimY;
            }
            else {
                this.btnPveAnim.x = this.btnPveAnimX;
                this.btnPveAnim.y = this.btnPveAnimY;
            }
        }
        else {
            // CommonTools.logWallet("---COMPLETE---deviveNormalScale-->2-")
            if (this.curPage == 2) {
                this.btnPveAnim.x = this.btnPveAnimX - 220;
                this.btnPveAnim.y = this.btnPveAnimY + 40;
            }
            else {
                this.btnPveAnim.x = this.btnPveAnimX;
                this.btnPveAnim.y = this.btnPveAnimY;
            }
        }
    };
    HallModule.prototype.drawHorse = function () {
        if (this.btnPveAnim != null) {
            this.btnPveAnim.removeEventListener(egret.Event.COMPLETE);
            if (this.horseFunc != null) {
                this.btnPveAnim.removeEventListener(egret.Event.ENTER_FRAME, this.horseFunc, this);
                this.horseFunc = null;
            }
            this.panel.removeChild(this.btnPveAnim);
            this.btnPveAnim = null;
        }
        this.btnPveAnim = CommonTools.getAnimDraw(RES.getRes("horse01_idle_0" + this.horseCurrent + "_json"), RES.getRes("horse01_idle_0" + this.horseCurrent + "_png"), "0");
        this.btnPveAnim.play(1);
        this.btnPveAnim.name = "btn_noend_pve_anim";
        this.panel.addChild(this.btnPveAnim);
        this.setHorseXY();
        if (this.curPage == 2 && this.subCurPage > 1 || this.curPage == 4 && this.subCurPage == 1 || this.curPage == 5)
            this.btnPveAnim.visible = false;
        this.btnPveAnim.addEventListener(egret.Event.COMPLETE, function () {
            CommonTools.logWallet("---COMPLETE------" + this.horseCurrent);
            this.horseCurrent++;
            if (this.horseCurrent > 3) {
                this.horseCurrent = 1;
            }
            this.drawHorse();
        }, this);
        // CommonTools.fixFix(this.context,this.btnPveAnim,4,40,100);//40,20
    };
    HallModule.prototype.drawTraining = function (index) {
        if (this.btnPveAnim != null) {
            if (this.horseFunc != null) {
                this.btnPveAnim.removeEventListener(egret.Event.ENTER_FRAME, this.horseFunc, this);
                this.horseFunc = null;
            }
            this.btnPveAnim.removeEventListener(egret.Event.COMPLETE);
            this.panel.removeChild(this.btnPveAnim);
            this.btnPveAnim = null;
        }
        if (index == 4) {
            this.btnPveAnim = CommonTools.getAnimDraw(RES.getRes("run_canter02_json"), RES.getRes("run_canter02_png"), "0");
        }
        this.btnPveAnim.play(-1);
        this.btnPveAnim.name = "btn_noend_pve_anim";
        this.panel.addChild(this.btnPveAnim);
        this.setHorseXY();
        this.horseFunc = function (e) {
            this.btnPveAnimX += 8;
            this.btnPveAnimY = this.btnPveAnimInitY - 50;
            this.setHorseXY();
            if (this.btnPveAnimX >= (this.context.getStageWidth() - 500)) {
                this.stopTraining();
            }
            if (this.btnPveAnimX > 0 && this.btnPveAnimX % 50 == 0)
                CommonAudioHandle.playEffect("horse_step_on_grass_3_wav", 1);
        };
        CommonAudioHandle.playEffect("horse_sfx_after_eat_wav", 1);
        this.btnPveAnim.addEventListener(egret.Event.ENTER_FRAME, this.horseFunc, this);
    };
    HallModule.prototype.init = function () {
        // this.initConfig();
        CommonAudioHandle.play("mainmenu_mp3", 0);
        if (egret.localStorage.getItem("noVolume") == "1")
            CommonAudioHandle.setVolume(0);
        this.maskNew = new eui.Image("new_ui_01_jpg");
        this.maskNew.width = this.context.getStageWidth();
        var scaleDevice = 1334.0 / this.context.getStageWidth();
        this.maskNew.height = 750.0 / scaleDevice;
        this.context.addChild(this.maskNew);
        this.panel = new eui.Panel();
        this.panel.skinName = "resource/eui_skins/UserUI/HallUI.exml";
        this.panel.title = "Title";
        this.panel.horizontalCenter = 0;
        this.panel.verticalCenter = 0;
        this.context.addChild(this.panel);
        this.tipsPanel = this.panel;
        this.drawHorse();
        this.panel.getChildByName("btn_map_diy").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("img_info").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_training_pve").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_2v2").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("up_item_group").getChildByName("img_coin1_add").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("up_item_group").getChildByName("img_coin2_add").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("sell_group").getChildByName("sell_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        CommonTools.fixFix(this.context, this.panel.getChildByName("sell_group"), 2, 0, 0);
        this.panel.getChildByName("buynft_group").getChildByName("buynft_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        CommonTools.fixFix(this.context, this.panel.getChildByName("buynft_group"), 2, 0, 0);
        this.rankHead01 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_01");
        this.rankHead02 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_02");
        this.rankHead03 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_03");
        this.rankHead04 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_04");
        this.rankHead05 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_05");
        this.rankHead01_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_01_mask");
        this.rankHead02_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_02_mask");
        this.rankHead03_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_03_mask");
        this.rankHead04_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_04_mask");
        this.rankHead05_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_05_mask");
        this.rankHead01.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.rankHead02.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.rankHead03.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.rankHead04.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.rankHead05.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.btnBackImg = this.panel.getChildByName("rank_grounp_main").getChildByName("btn_back_img");
        this.btnBackImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        // CommonTools.fixFix(this.context,this.panel.getChildByName("btn_shop"),1,0,10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("btn_map_diy"), 2, 30, 20);
        // CommonTools.fixFix(this.context,this.panel.getChildByName("btn_match_pvp"),2,-20,20);
        // CommonTools.fixFix(this.context,this.panel.getChildByName("btn_match_pvp_anim"),2,-20,20);
        CommonTools.fixFix(this.context, this.panel.getChildByName("btn_training_pve"), 2, 30, 20);
        // CommonTools.fixFix(this.context,this.panel.getChildByName("btn_noend_pve"),2,40,20);
        // CommonTools.fixFix(this.context,this.panel.getChildByName("btn_friend_pvp"),2,30,20);
        // CommonTools.fixFix(this.context,this.panel.getChildByName("btn_friend_pvp_anim"),2,30,20);
        CommonTools.fixFix(this.context, this.panel.getChildByName("btn_2v2"), 2, 30, 20);
        CommonTools.fixFix(this.context, this.panel.getChildByName("info_grp"), 1, 44, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("img_head_bg"), 1, 34, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("img_info"), 1, 0, 0); //44,10
        CommonTools.fixFix(this.context, this.panel.getChildByName("img_exp_bg"), 1, 27, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("img_exp_value"), 1, 27, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("img_coin_bg"), 1, -10, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("img_zuan_bg"), 1, -40, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("btn_noticetip"), 1, 0, 10); //-40,10
        CommonTools.fixFix(this.context, this.panel.getChildByName("btn_shop3"), 1, 0, 10); //-40,10
        CommonTools.fixFix(this.context, this.panel.getChildByName("hall_id_lb"), 1, 34, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("coin_num_lb"), 1, -10, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("zuan_num_lb"), 1, -50, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("img_lv_lb"), 1, 30, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("rank_grounp_main"), 1, 0, 0); //4,10
        CommonTools.fixFix(this.context, this.panel.getChildByName("btn_gonggao"), 1, 44, 10);
        CommonTools.fixFix(this.context, this.panel.getChildByName("up_item_group"), 1, 0, 10);
        var imgHead = this.panel.getChildByName("img_info");
        if (ConstValue.cacheUserInfo.headPic != "")
            imgHead.source = ConstValue.cacheUserInfo.headPic;
        var lbName = this.panel.getChildByName("hall_id_lb");
        lbName.text = ConstValue.cacheUserInfo.name;
        var lbLv = this.panel.getChildByName("img_lv_lb");
        lbLv.text = ConstValue.cacheUserInfo.lv;
        var lbExp = this.panel.getChildByName("img_exp_value");
        lbExp.width = ConstValue.cacheUserInfo.curexp * 1.0 / ConstValue.cacheUserInfo.maxExp * lbExp.width;
        if (ConstValue.cacheUserInfo != null && ConstValue.cacheUserInfo.gm == 1) {
            // CommonButtonHandle.beginTouch(this.panel.getChildByName("btn_gm"),this);
            this.panel.getChildByName("scroll_notify").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                this.showEditUI("scroll_notify");
            }, this);
        }
        // CommonTools.fixFix(this.context,this.panel.getChildByName("btn_gm"),2,0,0);
        CommonTools.fixFix(this.context, this.panel.getChildByName("scroll_notify"), 2, 0, 20);
        this.notify_lb = this.panel.getChildByName("scroll_notify")
            .getChildByName("group_notify").getChildByName("notity_all_lb");
        egret.Tween.get(this.notify_lb).to({ x: -426 }, 8000).call(function () {
            this.moveNotify();
        }, this);
        ConstValue.gatewayType = 0;
        //加载资源
        // const platform:any = window.platform;
        // platform.openDataContext.postMessage({
        //     command:'loadRes'
        // });
        if (ConstValue.p_USE_WALLET == 0)
            this.initPushBtn();
        if (!HallModule.isInitLogin) {
            if (HallModule.curGuide > 0 && HallModule.curGuide != 3) {
                // new GuideModule(this.context,HallModule.curGuide,this.panel,this.panelNotice);								
            }
            else {
                // let sData = CommonTools.getDataJsonStr("getNowGuild",1,{});
                // ConstValue.P_NET_OBJ.sendData(sData);
            }
        }
        HallModule.isInitLogin = false;
        FightingModule.Delay(500, function () {
            this.showGuide();
            var sData = CommonTools.getDataJsonStr("getPvpRankThree", 1, {});
            ConstValue.P_NET_OBJ.sendData(sData);
            this.openWXPVP();
        }, this);
        this.initAD();
        this.panel.getChildByName("btn_gonggao").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        if (ConstValue.p_USE_WALLET == 1) {
            // ContractSol.initSOL();
            // var fromaddr = ConstValue.hweb3.eth.accounts[0];
            // ContractSol.hweb3.eth.getBalance(ContractSol.sender,(err,result) =>{
            // 	console.log("--地址ETH-getBalance----"+result);
            // });
            // ContractSol.maincoin_transfer(ContractSol.createAddress, 1);
            // ContractSol.maincoin_transferFrom(ContractSol.createAddress, ContractSol.sender , 2);
            // ContractSol.maincoin_increaseApproval(ContractSol.sender , 2);
            platform.initSOL();
            ContractSol.initSOL();
            ContractSol.maincoin_balanceOf(ContractSol.sender);
            ContractSol.subcoin_balanceOf(ContractSol.sender);
            ContractSol.nft_tokensOfOwner(ContractSol.sender);
            this.changePage("rank_head_05");
            this.updateUI();
        }
    };
    HallModule.prototype.clearHorseSelect = function () {
        if (this.curPage == 1) {
        }
        else if (this.curPage == 2 || this.curPage == 3) {
            var downY = 570;
            if (ConstValue.deviveNormalScale >= 2) {
                downY -= 80;
            }
            egret.Tween.get(this.horseSelectPanel).to({ y: downY }, 1000);
            this.maskBg2.visible = false;
            this.horsePanelUp = true;
            this.resetHorse();
        }
    };
    HallModule.prototype.resetHorse = function () {
        var scrollShop = this.horseSelectPanel.getChildByName("horse_panel_group").getChildByName("res_scroller");
        scrollShop.viewport.scrollV = 0;
        var groupShop = scrollShop.getChildByName("res_group");
        var count = 20;
        for (var iCnt = 0; iCnt < count; iCnt++) {
            var tempPanel = groupShop.getChildByName("p_" + iCnt);
            var tempGroup = tempPanel.getChildByName("group_1");
            tempGroup.scaleX = 1;
            tempGroup.scaleY = 1;
            tempGroup.getChildByName("select_2_img").visible = false;
        }
        var showCnt = 0;
        if (count >= 5)
            showCnt = 2;
        var groupItem = groupShop.getChildByName("p_" + showCnt);
        var groupHorse = groupItem.getChildByName("group_1");
        groupHorse.scaleX = 1.2;
        groupHorse.scaleY = 1.2;
        groupHorse.getChildByName("select_2_img").visible = true;
    };
    HallModule.prototype.changeHorseRight = function (index) {
        if (this.horseSelectRightPanel != null) {
            this.context.removeChild(this.horseSelectRightPanel);
            this.horseSelectRightPanel = null;
        }
        var leftX2 = 900;
        var downY2 = 100;
        if (ConstValue.deviveNormalScale >= 2) {
            leftX2 -= 0;
            downY2 -= 80;
        }
        if (this.curPage == 2 && this.subCurPage == 1 || this.curPage == 5) {
            this.horseSelectRightPanel = new eui.Panel();
            if (index == 1) {
                this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/StablesStatUI.exml";
            }
            else if (index == 2) {
                this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/StablesSkillUI.exml";
            }
            else {
                this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/StablesPedigreeUI.exml";
            }
            this.horseSelectRightPanel.title = "Title";
            this.horseSelectRightPanel.x = leftX2;
            this.horseSelectRightPanel.y = downY2;
            this.context.addChild(this.horseSelectRightPanel);
            CommonTools.fixFix(this.context, this.horseSelectRightPanel, 2, 0, 0);
            if (this.curPage == 5) {
                if (ConstValue.deviveNormalScale >= 2) {
                    this.horseSelectRightPanel.scaleX = 0.7;
                    this.horseSelectRightPanel.scaleY = 0.7;
                }
                else {
                    this.horseSelectRightPanel.scaleX = 0.8;
                    this.horseSelectRightPanel.scaleY = 0.8;
                }
            }
            this.horseSelectRightPanel.getChildByName("horse_stat_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonAudioHandle.playEffect("playBomb_mp3", 1);
                this.changeHorseRight(1);
            }, this);
            this.horseSelectRightPanel.getChildByName("horse_skill_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonAudioHandle.playEffect("playBomb_mp3", 1);
                this.changeHorseRight(2);
            }, this);
            this.horseSelectRightPanel.getChildByName("horse_pedigree_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonAudioHandle.playEffect("playBomb_mp3", 1);
                this.changeHorseRight(3);
            }, this);
        }
    };
    HallModule.prototype.createHorseItem = function () {
        if (this.horseSelectPanel != null) {
            this.context.removeChild(this.maskBg2);
            this.context.removeChild(this.horseSelectPanel);
            this.maskBg2 = null;
            this.horseSelectPanel = null;
            this.horsePanelUp = true;
        }
        var upY = 305;
        var downY = 570;
        var leftX = 215;
        if (ConstValue.deviveNormalScale >= 2) {
            upY -= 30;
            downY -= 80;
        }
        this.maskBg2 = new eui.Image("mask_layer_png");
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.maskBg2.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.clearHorseSelect();
        }, this);
        this.maskBg2.visible = false;
        this.context.addChild(this.maskBg2);
        this.horseSelectPanel = new eui.Panel();
        this.horseSelectPanel.skinName = "resource/eui_skins/UserUI/StablesPageUI.exml";
        this.horseSelectPanel.title = "Title";
        // this.horseSelectPanel.horizontalCenter = 0;
        // this.horseSelectPanel.verticalCenter = 0;
        this.horseSelectPanel.x = leftX;
        this.horseSelectPanel.y = downY;
        this.context.addChild(this.horseSelectPanel);
        // CommonTools.fixFix(this.context,this.horseSelectPanel,1,0,0);
        CommonTools.fixFix(this.context, this.horseSelectPanel, 2, 0, 0);
        var scrollShop = this.horseSelectPanel.getChildByName("horse_panel_group").getChildByName("res_scroller");
        scrollShop.viewport.scrollV = 0;
        var groupShop = scrollShop.getChildByName("res_group");
        groupShop.removeChildren();
        this.horseSelectPanel.getChildByName("horse_panel_group").getChildByName("horse_up_point_click").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            if (this.horsePanelUp) {
                this.horsePanelUp = false;
                egret.Tween.get(this.horseSelectPanel).to({ y: upY }, 1000);
                this.maskBg2.visible = true;
            }
            else {
                this.horsePanelUp = true;
                egret.Tween.get(this.horseSelectPanel).to({ y: downY }, 1000);
                this.maskBg2.visible = false;
            }
            this.resetHorse();
        }, this);
        var count = 20;
        var _loop_1 = function (i) {
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/horseItemGroup.exml";
            panelT.name = "p_" + i;
            var xOff = 0;
            var yOff = 0;
            panelT.x = 11 + 120 * (i % 5);
            panelT.y = 15 + 120 * (Math.floor(i / 5));
            groupShop.addChild(panelT);
            panelT.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonAudioHandle.playEffect("playBomb_mp3", 1);
                for (var iCnt = 0; iCnt < count; iCnt++) {
                    var tempPanel = groupShop.getChildByName("p_" + iCnt);
                    var tempGroup = tempPanel.getChildByName("group_1");
                    tempGroup.scaleX = 1;
                    tempGroup.scaleY = 1;
                    tempGroup.getChildByName("select_2_img").visible = false;
                }
                var groupHorse = panelT.getChildByName("group_1");
                groupHorse.scaleX = 1.2;
                groupHorse.scaleY = 1.2;
                groupHorse.getChildByName("select_2_img").visible = true;
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < count; i++) {
            _loop_1(i);
        }
        var showCnt = 0;
        if (count >= 5)
            showCnt = 2;
        var groupItem = groupShop.getChildByName("p_" + showCnt);
        var groupHorse = groupItem.getChildByName("group_1");
        groupHorse.scaleX = 1.2;
        groupHorse.scaleY = 1.2;
        groupHorse.getChildByName("select_2_img").visible = true;
        if (this.curPage == 2)
            this.changeHorseRight(1);
    };
    HallModule.prototype.initMergeClick = function () {
        this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").source = "icon_stats_s_png";
            this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").source = "icon_skill_n_png";
            this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").source = "icon_pedigree_n_png";
            this.horseSelectRightPanel.getChildByName("left_group_stat").visible = true;
            this.horseSelectRightPanel.getChildByName("left_skill_group").visible = false;
            this.horseSelectRightPanel.getChildByName("left_pedigree_group").visible = false;
        }, this);
        this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").source = "icon_stats_n_png";
            this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").source = "icon_skill_s_png";
            this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").source = "icon_pedigree_n_png";
            this.horseSelectRightPanel.getChildByName("left_group_stat").visible = false;
            this.horseSelectRightPanel.getChildByName("left_skill_group").visible = true;
            this.horseSelectRightPanel.getChildByName("left_pedigree_group").visible = false;
        }, this);
        this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").source = "icon_stats_n_png";
            this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").source = "icon_skill_n_png";
            this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").source = "icon_pedigree_s_png";
            this.horseSelectRightPanel.getChildByName("left_group_stat").visible = false;
            this.horseSelectRightPanel.getChildByName("left_skill_group").visible = false;
            this.horseSelectRightPanel.getChildByName("left_pedigree_group").visible = true;
        }, this);
        this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").source = "icon_stats_s_png";
            this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").source = "icon_skill_n_png";
            this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").source = "icon_pedigree_n_png";
            this.horseSelectRightPanel.getChildByName("right_group_stat").visible = true;
            this.horseSelectRightPanel.getChildByName("right_skill_group").visible = false;
            this.horseSelectRightPanel.getChildByName("right_pedigree_group").visible = false;
        }, this);
        this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").source = "icon_stats_n_png";
            this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").source = "icon_skill_s_png";
            this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").source = "icon_pedigree_n_png";
            this.horseSelectRightPanel.getChildByName("right_group_stat").visible = false;
            this.horseSelectRightPanel.getChildByName("right_skill_group").visible = true;
            this.horseSelectRightPanel.getChildByName("right_pedigree_group").visible = false;
        }, this);
        this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").source = "icon_stats_n_png";
            this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").source = "icon_skill_n_png";
            this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").source = "icon_pedigree_s_png";
            this.horseSelectRightPanel.getChildByName("right_group_stat").visible = false;
            this.horseSelectRightPanel.getChildByName("right_skill_group").visible = false;
            this.horseSelectRightPanel.getChildByName("right_pedigree_group").visible = true;
        }, this);
    };
    HallModule.prototype.createHorseMerge = function () {
        if (this.horseSelectRightPanel != null) {
            this.context.removeChild(this.horseSelectRightPanel);
            this.horseSelectRightPanel = null;
        }
        var leftX2 = 210;
        var downY2 = 0;
        if (ConstValue.deviveNormalScale >= 2) {
            leftX2 -= 0;
            downY2 -= 0;
        }
        this.horseSelectRightPanel = new eui.Panel();
        this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/Merge_Right.exml";
        this.horseSelectRightPanel.title = "Title";
        this.horseSelectRightPanel.x = leftX2;
        this.horseSelectRightPanel.y = downY2;
        this.context.addChild(this.horseSelectRightPanel);
        CommonTools.fixFix(this.context, this.horseSelectRightPanel, 2, 0, -40);
        this.initMergeClick();
        this.horseSelectRightPanel.getChildByName("left_pre_horse_img").visible = false;
        this.horseSelectRightPanel.getChildByName("left_next_horse_img").visible = false;
        this.horseSelectRightPanel.getChildByName("left_stallion_lb").visible = false;
        this.horseSelectRightPanel.getChildByName("left_stallion_bg_img").visible = false;
        this.horseSelectRightPanel.getChildByName("right_mare_lb").text = "horses 1/3";
        this.horseSelectRightPanel.getChildByName("stallion_flag_img").visible = false;
        this.horseSelectRightPanel.getChildByName("mare_flag_img").visible = false;
        this.horseSelectRightPanel.getChildByName("merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.createMergeFail(1);
        }, this);
        this.horseSelectRightPanel.getChildByName("advanced_merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.createMergeSuccess(1, 0);
        }, this);
    };
    HallModule.prototype.closeMergeFail = function () {
        if (this.maskBg2 != null) {
            this.context.removeChild(this.maskBg2);
            this.maskBg2 = null;
        }
        if (this.horseMergeResult != null) {
            this.context.removeChild(this.horseMergeResult);
            this.horseMergeResult = null;
        }
    };
    HallModule.prototype.createMergeFail = function (index) {
        CommonAudioHandle.playEffect("failure_mp3", 1);
        this.maskBg2 = new eui.Image("black_mask_png");
        this.maskBg2.alpha = 0.9;
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.horseMergeResult = new eui.Panel();
        this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Merge_fail.exml";
        this.horseMergeResult.title = "Title";
        this.horseMergeResult.horizontalCenter = 0;
        this.context.addChild(this.horseMergeResult);
        CommonTools.fixFix(this.context, this.horseMergeResult, 2, 0, -40);
        this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.closeMergeFail();
        }, this);
        if (index == 2) {
            this.horseMergeResult.getChildByName("merge_fail_icon").source = "icon_heart2_png";
        }
    };
    HallModule.prototype.createMergeSuccess = function (index, horseData) {
        CommonAudioHandle.playEffect("success_mp3", 1);
        this.maskBg2 = new eui.Image("black_mask_png");
        this.maskBg2.alpha = 0.9;
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.horseMergeResult = new eui.Panel();
        this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Merge_success.exml";
        this.horseMergeResult.title = "Title";
        this.horseMergeResult.horizontalCenter = 0;
        this.context.addChild(this.horseMergeResult);
        CommonTools.fixFix(this.context, this.horseMergeResult, 2, 0, -40);
        this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.closeMergeFail();
        }, this);
        if (index == 2) {
            this.horseMergeResult.getChildByName("merge_success_title_img").source = "pic_breed_png";
        }
    };
    HallModule.prototype.createMergeSuccessT = function (horseData) {
        CommonAudioHandle.playEffect("success_mp3", 1);
        var tmaskBg2 = new eui.Image("black_mask_png");
        tmaskBg2.alpha = 0.9;
        tmaskBg2.width = this.context.getStageWidth();
        tmaskBg2.height = this.context.getStageHeight();
        this.context.addChild(tmaskBg2);
        var thorseMergeResult = new eui.Panel();
        thorseMergeResult.skinName = "resource/eui_skins/UserUI/Merge_success.exml";
        thorseMergeResult.title = "Title";
        thorseMergeResult.name = "p_" + horseData.name;
        thorseMergeResult.horizontalCenter = 0;
        this.context.addChild(thorseMergeResult);
        CommonTools.fixFix(this.context, thorseMergeResult, 2, 0, -40);
        thorseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.context.removeChild(tmaskBg2);
            this.context.removeChild(thorseMergeResult);
        }, this);
        var merge_fail_title_img = thorseMergeResult.getChildByName("merge_fail_title_img");
        merge_fail_title_img.source = "pic_congratulation_png";
        thorseMergeResult.getChildByName("merge_success_title_img").visible = false;
        var horse_name_lb = thorseMergeResult.getChildByName("horse_name_lb");
        horse_name_lb.text = horseData.name;
        var merge_lv_img = thorseMergeResult.getChildByName("merge_lv_img");
        merge_lv_img.source = "icon_level_" + horseData.iType + "_png";
        var merge_fail_icon = thorseMergeResult.getChildByName("merge_fail_icon");
        merge_fail_icon.source = "horse" + horseData.res_key + "_body_png";
    };
    HallModule.prototype.createHorseBreeding = function () {
        if (this.horseSelectRightPanel != null) {
            this.context.removeChild(this.horseSelectRightPanel);
            this.horseSelectRightPanel = null;
        }
        var leftX2 = 210;
        var downY2 = 0;
        if (ConstValue.deviveNormalScale >= 2) {
            leftX2 -= 0;
            downY2 -= 0;
        }
        this.horseSelectRightPanel = new eui.Panel();
        this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/Merge_Right.exml";
        this.horseSelectRightPanel.title = "Title";
        this.horseSelectRightPanel.x = leftX2;
        this.horseSelectRightPanel.y = downY2;
        this.context.addChild(this.horseSelectRightPanel);
        CommonTools.fixFix(this.context, this.horseSelectRightPanel, 2, 0, -40);
        this.initMergeClick();
        this.horseSelectRightPanel.getChildByName("merge_title_img").source = "BREEDING_png";
        this.horseSelectRightPanel.getChildByName("merge_btn_lb").text = "Breeding";
        this.horseSelectRightPanel.getChildByName("advanced_merge_btn_lb").text = "Advanced\nBreeding";
        this.horseSelectRightPanel.getChildByName("merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.createMergeFail(2);
        }, this);
        this.horseSelectRightPanel.getChildByName("advanced_merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.createMergeSuccess(2, 0);
        }, this);
    };
    HallModule.prototype.horseSelectUI = function () {
        if (this.subCurPage == 1) {
            this.maskNew.source = "horse_home_page2_jpg";
            this.createHorseItem();
            this.btnPveAnim.visible = true;
            this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = true;
            this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = true;
        }
        else if (this.subCurPage == 2) {
            this.maskNew.source = "horse_merge_page2_jpg";
            this.clearPage2HorseHome();
            this.createHorseMerge();
        }
        else if (this.subCurPage == 3) {
            this.maskNew.source = "horse_merge_page2_jpg";
            this.clearPage2HorseHome();
            this.createHorseBreeding();
        }
    };
    HallModule.prototype.royalClubUI = function () {
        var leftX2 = 240;
        var downY2 = 68;
        if (ConstValue.deviveNormalScale >= 2) {
            leftX2 += 70;
            downY2 -= 0;
        }
        this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
        this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;
        this.horseSelectMiddlePanel = new eui.Panel();
        this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/RoyalClub.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.x = leftX2;
        this.horseSelectMiddlePanel.y = downY2;
        this.context.addChild(this.horseSelectMiddlePanel);
        CommonTools.fixFix(this.context, this.horseSelectMiddlePanel, 2, 0, -40);
        this.horseSelectMiddlePanel.getChildByName("ticket_price_lb").text = ConstValue.cacheUserInfo.ticketPrice;
        this.horseSelectMiddlePanel.getChildByName("pay_main_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            var pay_main = parseInt(this.horseSelectMiddlePanel.getChildByName("pay_main").text);
            if (ConstValue.cacheUserInfo.coin < pay_main) {
                CommonTools.addCommonTips(this.context, ConstValue.P_NOT_ENOUGH);
                return;
            }
            ContractSol.maincoin_transfer(ContractSol.createAddress, pay_main);
        }, this);
        this.horseSelectMiddlePanel.getChildByName("up_img").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            var total_lb = parseInt(this.horseSelectMiddlePanel.getChildByName("total_lb").text);
            total_lb += 1;
            this.horseSelectMiddlePanel.getChildByName("total_lb").text = total_lb;
            this.horseSelectMiddlePanel.getChildByName("pay_main").text = total_lb * ConstValue.cacheUserInfo.ticketPrice;
        }, this);
        this.horseSelectMiddlePanel.getChildByName("down_img").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            var total_lb = parseInt(this.horseSelectMiddlePanel.getChildByName("total_lb").text);
            if (total_lb <= 0)
                return;
            total_lb -= 1;
            this.horseSelectMiddlePanel.getChildByName("total_lb").text = total_lb;
            this.horseSelectMiddlePanel.getChildByName("pay_main").text = total_lb * ConstValue.cacheUserInfo.ticketPrice;
        }, this);
    };
    HallModule.prototype.CreateMarketItems = function (opType) {
        var leftX2 = 240;
        var downY2 = 68;
        if (ConstValue.deviveNormalScale >= 2) {
            leftX2 += 70;
            downY2 -= 0;
        }
        this.horseSelectMiddlePanel = new eui.Panel();
        this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Market_horses.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.x = leftX2;
        this.horseSelectMiddlePanel.y = downY2;
        this.context.addChild(this.horseSelectMiddlePanel);
        CommonTools.fixFix(this.context, this.horseSelectMiddlePanel, 2, 0, -40);
        var scroll = this.horseSelectMiddlePanel.getChildByName("scroll");
        var group = scroll.getChildByName("scroll_group");
        group.removeChildren();
        var hData = null;
        if (opType == 1) {
            hData = this.horseMarketData;
        }
        else {
            hData = this.horseOwnData;
        }
        var i = 1;
        var _loop_2 = function (index) {
            var obj = hData[index];
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/horseItemGroup_market.exml";
            panelT.name = "p_" + obj.id;
            var column = i % 3 == 0 ? 3 : i % 3;
            var row = 0;
            if (i % 3 == 0) {
                row = i / 3.0;
            }
            else {
                row = i / 3.0 + 1;
            }
            panelT.x = (column - 1) * 212;
            panelT.y = 278 * (Math.floor(row - 1));
            group.addChild(panelT);
            var group_1 = panelT.getChildByName("group_1");
            if (opType == 1) {
                var pay_money = group_1.getChildByName("pay_money");
                pay_money.text = obj.money;
            }
            else if (opType == 2) {
                group_1.getChildByName("btn_shop").visible = false;
                if (obj.sellStatus == 1) {
                    var pay_money = group_1.getChildByName("pay_money");
                    pay_money.text = "selling";
                }
                else {
                    group_1.getChildByName("pay_money").visible = false;
                }
            }
            var horse_name = group_1.getChildByName("horse_name");
            horse_name.text = obj.name;
            var horse_index = group_1.getChildByName("horse_index");
            horse_index.text = "#" + obj.id;
            var horse_lv_img = group_1.getChildByName("horse_lv_img");
            horse_lv_img.source = "icon_level_" + obj.iType + "_png";
            var horse_score = group_1.getChildByName("horse_score");
            horse_score.text = obj.score;
            var horse_body = group_1.getChildByName("horse_body");
            horse_body.source = "horse" + obj.res_key + "_body_png";
            if (this_2.horseIndexS == 0) {
                this_2.horseIndexS = obj.id;
                group_1.getChildByName("select_2_img").visible = true;
            }
            panelT.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonAudioHandle.playEffect("playBomb_mp3", 1);
                var ttp = group.getChildByName("p_" + this.horseIndexS);
                var groupT = ttp.getChildByName("group_1");
                groupT.getChildByName("select_2_img").visible = false;
                this.horseIndexS = obj.id;
                group_1.getChildByName("select_2_img").visible = true;
            }, this_2);
            i++;
        };
        var this_2 = this;
        for (var index in hData) {
            _loop_2(index);
        }
    };
    HallModule.prototype.MarketUI = function () {
        if (this.horseMarketData == null)
            return;
        this.changeHorseRight(1);
        this.CreateMarketItems(1);
    };
    HallModule.prototype.MyInventoryUI = function () {
        if (ConstValue.cacheContract["nftLen"] == 0) {
            CommonTools.addCommonTips(this.context, ConstValue.P_NO_HORSE);
            return;
        }
        if (this.horseOwnData != null) {
            this.changeHorseRight(1);
            this.CreateMarketItems(2);
        }
    };
    HallModule.prototype.horseMarketUI = function () {
        this.maskNew.source = "horse_market_page5_jpg";
        this.btnPveAnim.visible = false;
        if (this.subCurPage == 1) {
            this.royalClubUI();
        }
        else if (this.subCurPage == 2) {
            this.MarketUI();
        }
        else if (this.subCurPage == 3) {
            this.MyInventoryUI();
        }
    };
    HallModule.prototype.showTrainingSelect = function (index) {
        this.horseSelectLeftPanel.getChildByName("training_img_01").source = "btn_TNGP_png";
        this.horseSelectLeftPanel.getChildByName("training_img_01").alpha = 0.5;
        this.horseSelectLeftPanel.getChildByName("training_img_02").source = "btn_TNGFR_png";
        this.horseSelectLeftPanel.getChildByName("training_img_02").alpha = 0.7;
        this.horseSelectLeftPanel.getChildByName("training_img_03").source = "btn_TNGOBS_png";
        this.horseSelectLeftPanel.getChildByName("training_img_03").alpha = 0.7;
        this.horseSelectLeftPanel.getChildByName("training_img_04").source = "btn_TNGtrot_png";
        this.horseSelectLeftPanel.getChildByName("training_img_04").alpha = 0.7;
        this.horseSelectLeftPanel.getChildByName("training_img_05").source = "btn_TNGC_png";
        this.horseSelectLeftPanel.getChildByName("training_img_05").alpha = 0.5;
        var resName = "";
        if (index == 1) {
            resName = "btn_TNGP_S_png";
        }
        else if (index == 2) {
            resName = "btn_TNGFR_S_png";
        }
        else if (index == 3) {
            resName = "btn_TNGOBS_S_png";
        }
        else if (index == 4) {
            resName = "btn_TNGtrot_S_png";
        }
        else if (index == 5) {
            resName = "btn_TNGC_S_png";
        }
        this.horseSelectLeftPanel.getChildByName("training_img_0" + index).source = resName;
        this.horseSelectLeftPanel.getChildByName("training_img_0" + index).alpha = 1;
    };
    HallModule.prototype.startTraining = function (index) {
        this.horseSelectLeftPanel.visible = false;
        this.horseSelectMiddlePanel.visible = false;
        this.horseSelectRightPanel.visible = false;
        this.horseSelectPanel.visible = false;
        this.btnPveAnimX = -500;
        this.setHorseXY();
        this.drawTraining(index);
    };
    HallModule.prototype.createTrainingSuccess = function () {
        CommonAudioHandle.playEffect("success_mp3", 1);
        this.maskBg2 = new eui.Image("black_mask_png");
        this.maskBg2.alpha = 0.9;
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.horseMergeResult = new eui.Panel();
        this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Training_success.exml";
        this.horseMergeResult.title = "Title";
        this.horseMergeResult.horizontalCenter = 0;
        this.context.addChild(this.horseMergeResult);
        CommonTools.fixFix(this.context, this.horseMergeResult, 2, 0, -40);
        this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.closeMergeFail();
        }, this);
    };
    HallModule.prototype.stopTraining = function () {
        this.horseSelectLeftPanel.visible = true;
        this.horseSelectMiddlePanel.visible = true;
        this.horseSelectRightPanel.visible = true;
        this.horseSelectPanel.visible = true;
        this.btnPveAnimX = this.btnPveAnimInitX;
        this.btnPveAnim.x = this.btnPveAnimX;
        this.drawHorse();
        this.createTrainingSuccess();
    };
    HallModule.prototype.updateTraining = function () {
        if (this.horseSelectRightPanel == null) {
            var leftX = 900;
            var downY = 100;
            var leftX2 = 420;
            var downY2 = 180;
            var leftX3 = 0;
            var downY3 = 0;
            if (ConstValue.deviveNormalScale >= 2) {
                leftX -= 0;
                downY -= 0;
                leftX2 -= 80;
                downY2 -= 200;
                leftX3 -= 0;
                downY3 -= 0;
            }
            this.horseSelectRightPanel = new eui.Panel();
            this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/Training_right.exml";
            this.horseSelectRightPanel.title = "Title";
            this.horseSelectRightPanel.x = leftX;
            this.horseSelectRightPanel.y = downY;
            this.context.addChild(this.horseSelectRightPanel);
            CommonTools.fixFix(this.context, this.horseSelectRightPanel, 2, 0, -40);
            this.horseSelectMiddlePanel = new eui.Panel();
            this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Training_middle.exml";
            this.horseSelectMiddlePanel.title = "Title2";
            this.horseSelectMiddlePanel.x = leftX2;
            this.horseSelectMiddlePanel.y = downY2;
            this.horseSelectMiddlePanel.scaleX = 0.7;
            this.horseSelectMiddlePanel.scaleY = 0.7;
            this.context.addChild(this.horseSelectMiddlePanel);
            CommonTools.fixFix(this.context, this.horseSelectMiddlePanel, 2, 0, -40);
            this.horseSelectLeftPanel = new eui.Panel();
            this.horseSelectLeftPanel.skinName = "resource/eui_skins/UserUI/Training_left.exml";
            this.horseSelectLeftPanel.title = "Title3";
            this.horseSelectLeftPanel.x = leftX3;
            this.horseSelectLeftPanel.y = downY3;
            this.context.addChild(this.horseSelectLeftPanel);
            CommonTools.fixFix(this.context, this.horseSelectLeftPanel, 2, 0, -40);
            this.horseSelectLeftPanel.getChildByName("btn_back_img").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonAudioHandle.playEffect("playBomb_mp3", 1);
                this.changePage("rank_head_01");
            }, this);
            this.horseSelectRightPanel.getChildByName("train_btn_img").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                CommonAudioHandle.playEffect("playBomb_mp3", 1);
                this.startTraining(4);
            }, this);
            var _loop_3 = function (tIndex) {
                this_3.horseSelectLeftPanel.getChildByName("training_img_0" + tIndex).addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    CommonAudioHandle.playEffect("playBomb_mp3", 1);
                    this.showTrainingSelect(tIndex);
                }, this_3);
            };
            var this_3 = this;
            for (var tIndex = 1; tIndex <= 5; tIndex++) {
                _loop_3(tIndex);
            }
        }
    };
    HallModule.prototype.clearTraining = function () {
        if (this.horseSelectRightPanel != null) {
            this.context.removeChild(this.horseSelectRightPanel);
            this.horseSelectRightPanel = null;
        }
        if (this.horseSelectMiddlePanel != null) {
            this.context.removeChild(this.horseSelectMiddlePanel);
            this.horseSelectMiddlePanel = null;
        }
        if (this.horseSelectLeftPanel != null) {
            this.context.removeChild(this.horseSelectLeftPanel);
            this.horseSelectLeftPanel = null;
        }
    };
    HallModule.prototype.hideForAll = function () {
        this.panel.getChildByName("rank_grounp_main").visible = false;
        this.panel.getChildByName("up_item_group").visible = false;
        this.panel.getChildByName("horse_name_group").visible = false;
        this.btnPveAnim.visible = false;
    };
    HallModule.prototype.createCargoSuccess = function (index) {
        CommonAudioHandle.playEffect("success_mp3", 1);
        this.maskBg2 = new eui.Image("black_mask_png");
        this.maskBg2.alpha = 0.9;
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.horseMergeResult = new eui.Panel();
        this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Cargo_success.exml";
        this.horseMergeResult.title = "Title";
        this.horseMergeResult.horizontalCenter = 0;
        this.context.addChild(this.horseMergeResult);
        CommonTools.fixFix(this.context, this.horseMergeResult, 2, 0, -40);
        this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.closeMergeFail();
        }, this);
    };
    HallModule.prototype.task01UI = function () {
        this.panel.getChildByName("up_item_group").visible = true;
        this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
        this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;
        this.horseSelectMiddlePanel = new eui.Panel();
        this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select_01.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.horizontalCenter = 0;
        this.horseSelectMiddlePanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectMiddlePanel);
        CommonTools.fixFix(this.context, this.horseSelectMiddlePanel, 2, 0, -40);
        this.horseSelectMiddlePanel.getChildByName("clain_rewards_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.testAddMain();
        }, this);
        this.tipsPanel = this.horseSelectMiddlePanel;
    };
    HallModule.prototype.task02UI = function () {
        this.panel.getChildByName("up_item_group").visible = false;
        var leftX2 = 280;
        var downY2 = 180;
        this.btnPveAnimX = 280;
        this.setHorseXY();
        if (ConstValue.deviveNormalScale >= 2) {
            leftX2 -= 80;
            downY2 -= 200;
            this.btnPveAnimX += 0;
        }
        this.horseSelectMiddlePanel = new eui.Panel();
        this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Training_middle.exml";
        this.horseSelectMiddlePanel.title = "Title2";
        this.horseSelectMiddlePanel.x = leftX2;
        this.horseSelectMiddlePanel.y = downY2;
        this.horseSelectMiddlePanel.scaleX = 0.7;
        this.horseSelectMiddlePanel.scaleY = 0.7;
        this.context.addChild(this.horseSelectMiddlePanel);
        CommonTools.fixFix(this.context, this.horseSelectMiddlePanel, 2, 0, -40);
        this.horseSelectRightPanel = new eui.Panel();
        this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select_02.exml";
        this.horseSelectRightPanel.title = "Title";
        this.horseSelectRightPanel.horizontalCenter = 0;
        this.horseSelectRightPanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectRightPanel);
        CommonTools.fixFix(this.context, this.horseSelectRightPanel, 2, 0, -40);
        this.horseSelectRightPanel.getChildByName("Process_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.createCargoSuccess();
        }, this);
    };
    HallModule.prototype.task03UI = function () {
        this.panel.getChildByName("up_item_group").visible = false;
        var leftX2 = 280;
        var downY2 = 180;
        this.btnPveAnimX = 280;
        this.setHorseXY();
        if (ConstValue.deviveNormalScale >= 2) {
            leftX2 -= 80;
            downY2 -= 200;
            this.btnPveAnimX += 0;
        }
        this.horseSelectMiddlePanel = new eui.Panel();
        this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Training_middle.exml";
        this.horseSelectMiddlePanel.title = "Title2";
        this.horseSelectMiddlePanel.x = leftX2;
        this.horseSelectMiddlePanel.y = downY2;
        this.horseSelectMiddlePanel.scaleX = 0.7;
        this.horseSelectMiddlePanel.scaleY = 0.7;
        this.context.addChild(this.horseSelectMiddlePanel);
        CommonTools.fixFix(this.context, this.horseSelectMiddlePanel, 2, 0, -40);
        this.horseSelectRightPanel = new eui.Panel();
        this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select_03.exml";
        this.horseSelectRightPanel.title = "Title";
        this.horseSelectRightPanel.horizontalCenter = 0;
        this.horseSelectRightPanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectRightPanel);
        CommonTools.fixFix(this.context, this.horseSelectRightPanel, 2, 0, -40);
        this.horseSelectRightPanel.getChildByName("Process_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.createCargoSuccess();
        }, this);
    };
    HallModule.prototype.clearTask = function () {
        if (this.btnBackImgTemp != null) {
            this.context.removeChild(this.btnBackImgTemp);
            this.btnBackImgTemp = null;
        }
        if (this.horseSelectMiddlePanel != null) {
            this.context.removeChild(this.horseSelectMiddlePanel);
            this.horseSelectMiddlePanel = null;
        }
        if (this.horseSelectRightPanel != null) {
            this.context.removeChild(this.horseSelectRightPanel);
            this.horseSelectRightPanel = null;
        }
        if (this.horseSelectPanel != null) {
            this.context.removeChild(this.horseSelectPanel);
            this.horseSelectPanel = null;
        }
    };
    HallModule.prototype.taskUpdate = function (index) {
        this.subCurPage = index;
        this.clearTask();
        if (index == 1)
            this.task01UI();
        if (index == 2) {
            this.btnPveAnim.visible = true;
            this.createHorseItem();
            this.task02UI();
        }
        if (index == 3) {
            this.btnPveAnim.visible = true;
            this.createHorseItem();
            this.task03UI();
        }
        this.btnBackImgTemp = new eui.Image();
        this.btnBackImgTemp.name = "btnTempBack";
        this.btnBackImgTemp.source = "btn_back_png";
        this.btnBackImgTemp.width = 102;
        this.btnBackImgTemp.height = 67;
        this.btnBackImgTemp.x = 0;
        this.btnBackImgTemp.y = 660;
        this.context.addChild(this.btnBackImgTemp);
        CommonTools.fixFix(this.context, this.btnBackImgTemp, 1, 0, -50);
        this.btnBackImgTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.panel.getChildByName("up_item_group").visible = false;
            this.btnPveAnimX = -500;
            this.setHorseXY();
            this.updatePlayToEarn();
        }, this);
    };
    HallModule.prototype.updatePlayToEarn = function () {
        this.clearTask();
        this.btnPveAnim.visible = false;
        this.horseSelectMiddlePanel = new eui.Panel();
        this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.horizontalCenter = 0;
        this.horseSelectMiddlePanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectMiddlePanel);
        CommonTools.fixFix(this.context, this.horseSelectMiddlePanel, 2, 0, -40);
        this.btnBackImgTemp = new eui.Image();
        this.btnBackImgTemp.name = "btnTempBack";
        this.btnBackImgTemp.source = "btn_back_png";
        this.btnBackImgTemp.width = 102;
        this.btnBackImgTemp.height = 67;
        this.btnBackImgTemp.x = 0;
        this.btnBackImgTemp.y = 660;
        this.context.addChild(this.btnBackImgTemp);
        CommonTools.fixFix(this.context, this.btnBackImgTemp, 1, 0, -50);
        this.btnBackImgTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.changePage("rank_head_01");
        }, this);
        this.horseSelectMiddlePanel.getChildByName("task_0" + this.subCurPage + "_select_di").visible = true;
        this.horseSelectMiddlePanel.getChildByName("task_01_select").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.taskUpdate(1);
        }, this);
        this.horseSelectMiddlePanel.getChildByName("task_02_select").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.taskUpdate(2);
        }, this);
        this.horseSelectMiddlePanel.getChildByName("task_03_select").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            this.taskUpdate(3);
        }, this);
    };
    HallModule.prototype.updateUI = function () {
        if (this.curPage == 1) {
            var horse_lv_img = this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img");
            horse_lv_img.source = ConstValue.horseLv[ConstValue.cacheUserInfo.lv.toString()].lv_icon;
            this.panel.getChildByName("horse_name_group").getChildByName("horse_name_lb").text = ConstValue.cacheUserInfo.name;
            this.panel.getChildByName("up_item_group").getChildByName("main_coin_num_lb").text = ConstValue.cacheUserInfo.coin;
            this.panel.getChildByName("up_item_group").getChildByName("sub_coin_num_lb").text = ConstValue.cacheUserInfo.diamond;
        }
        else if (this.curPage == 2) {
            this.horseSelectUI();
        }
        else if (this.curPage == 3) {
            this.panel.getChildByName("horse_name_group").visible = false;
            this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
            this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;
            this.createHorseItem();
            this.updateTraining();
        }
        else if (this.curPage == 4) {
            this.hideForAll();
            this.updatePlayToEarn();
        }
        else if (this.curPage == 5) {
            if (this.horseSelectMiddlePanel != null) {
                this.context.removeChild(this.horseSelectMiddlePanel);
                this.horseSelectMiddlePanel = null;
            }
            if (this.horseSelectRightPanel != null) {
                this.context.removeChild(this.horseSelectRightPanel);
                this.horseSelectRightPanel = null;
            }
            this.horseMarketUI();
        }
    };
    HallModule.prototype.updateMaincoin = function (coin, save) {
        this.panel.getChildByName("up_item_group").getChildByName("main_coin_num_lb").text = coin;
        if (save) {
            var sData = CommonTools.getDataJsonStr("saveCoinInfo", 1, { mainCoin: coin, subCoin: 0 });
            ConstValue.P_NET_OBJ.sendData(sData);
        }
    };
    HallModule.prototype.updateSubcoin = function (coin, save) {
        this.panel.getChildByName("up_item_group").getChildByName("sub_coin_num_lb").text = coin;
        if (save) {
            var sData = CommonTools.getDataJsonStr("saveCoinInfo", 1, { mainCoin: 0, subCoin: coin });
            ConstValue.P_NET_OBJ.sendData(sData);
        }
    };
    HallModule.prototype.initAD = function () {
        if (ConstValue.videoAd == null) {
            ConstValue.videoAd = 1;
        }
    };
    HallModule.prototype.showGuide = function () {
        if (ConstValue.p_USE_WALLET == 1)
            return;
        var arr = ["2", "4", "6", "8", "9", "10", "7"];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "7" && ConstValue.cacheUserInfo.lv < 5)
                continue;
            if (egret.localStorage.getItem(GuideModule.guide_tip_new[arr[i]].saveKey) != "1") {
                this.guideModule = new GuideModule(null, parseInt(arr[i]), this.panel, null);
                break;
            }
        }
    };
    HallModule.prototype.removeGuide = function () {
        if (this.guideModule != null) {
            this.guideModule.removeTips();
            this.guideModule = null;
        }
    };
    HallModule.prototype.moveNotify = function () {
        this.notify_lb.x = 430;
        var oneTip = "喜迎新春，新春开服，福利多多，大家快来体验吧~";
        if (ConstValue.oneTipsCnt > ConstValue.oneTipsCur) {
            if (ConstValue.oneTipsCur == 0) {
                ConstValue.oneTipsCur++;
                if (ConstValue.oneTips[ConstValue.oneTipsCur] != null)
                    oneTip = ConstValue.oneTips[ConstValue.oneTipsCur];
            }
            else {
                if (ConstValue.oneTips[ConstValue.oneTipsCur] != null)
                    delete ConstValue.oneTips[ConstValue.oneTipsCur];
                ConstValue.oneTipsCur++;
                if (ConstValue.oneTips[ConstValue.oneTipsCur] != null)
                    oneTip = ConstValue.oneTips[ConstValue.oneTipsCur];
            }
        }
        else {
            var ran = CommonTools.getRandomFloor(3, true);
            if (ConstValue.sysTips[ran] != null)
                oneTip = ConstValue.sysTips[ran];
        }
        this.notify_lb.text = oneTip;
        egret.Tween.get(this.notify_lb).to({ x: -426 }, 8000).call(function () {
            this.moveNotify();
        }, this);
    };
    HallModule.prototype.getTipXY = function () {
        return [this.btnPveAnim.x, this.btnPveAnim.y];
    };
    HallModule.prototype.initPushBtn = function () {
        var xleft = 750;
        var yleft = 26;
        var xdis = 5;
        var xright = 1222.48;
        var yright = 100;
        var ydis = 28;
        var leftCnt = 0;
        var rightCnt = 0;
        var leftBtnList = new Array();
        var rightBtnList = new Array();
        for (var i in HallModule.pushBtnData) {
            var obj = HallModule.pushBtnData[i];
            if (obj.isOpen == 0)
                continue;
            if (obj.id > 12)
                continue;
            if (obj.pos == 1) {
                rightBtnList.push(obj);
            }
            else {
                leftBtnList.push(obj);
            }
        }
        rightBtnList.sort(function (a, b) {
            return a.weight - b.weight;
        });
        leftBtnList.sort(function (a, b) {
            return a.weight - b.weight;
        });
        for (var i in rightBtnList) {
            var obj = rightBtnList[i];
            var btnInfo = ConstValue.PUSH_BUTTON[obj.id + ""];
            var btnTemp = new eui.Image();
            btnTemp.name = btnInfo.btn_name;
            btnTemp.source = btnInfo.btn_res_01;
            //右边的按钮
            btnTemp.width = 84;
            btnTemp.height = 84;
            btnTemp.x = xright + 42;
            btnTemp.y = yright + ydis * rightCnt + btnTemp.height * rightCnt + 42;
            rightCnt++;
            CommonTools.fixFix(this.context, btnTemp, 2, 0, 0);
            btnTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.panel.addChild(btnTemp);
            btnTemp.anchorOffsetX = 42;
            btnTemp.anchorOffsetY = 42;
            CommonButtonHandle.beginTouch(btnTemp, this);
        }
        for (var i in leftBtnList) {
            var obj = leftBtnList[i];
            var btnInfo = ConstValue.PUSH_BUTTON[obj.id + ""];
            var btnTemp = new eui.Image();
            btnTemp.name = btnInfo.btn_name;
            btnTemp.source = btnInfo.btn_res_01;
            //左边的按钮
            btnTemp.width = 94;
            btnTemp.height = 94;
            btnTemp.x = xleft + xdis * leftCnt + btnTemp.width * leftCnt + 47;
            btnTemp.y = yleft + 47;
            leftCnt++;
            CommonTools.fixFix(this.context, btnTemp, 2, -50, 10);
            btnTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            this.panel.addChild(btnTemp);
            btnTemp.scaleX = 0.8;
            btnTemp.scaleY = 0.8;
            btnTemp.anchorOffsetX = 47;
            btnTemp.anchorOffsetY = 47;
            CommonButtonHandle.beginTouch(btnTemp, this);
        }
    };
    HallModule.prototype.openWXPVP = function () {
        CommonTools.log('--Main.roomkey--------' + Main.roomkey);
        // if(Main.roomkey != null || (ConstValue.p_LOGIN_MODEL == 2 && egret.lifecycle.egretRoomkey != undefined)){
        if (Main.roomkey != null) {
            // if(Main.roomkey == null)Main.roomkey = egret.lifecycle.egretRoomkey;
            var sData = CommonTools.getDataJsonStr("enter1V1Room", 1, { fightRoomKey: Main.roomkey });
            ConstValue.P_NET_OBJ.sendData(sData);
        }
    };
    HallModule.prototype.clickNotice = function (name) {
        var scroll = this.panelNotice.getChildByName("left_scroller");
        var group = scroll.getChildByName("left_group");
        var lb_title = this.panelNotice.getChildByName("lb_title");
        var lb_mail_info = this.panelNotice.getChildByName("lb_mail_info");
        var iChilds = group.numChildren;
        var idx = parseInt(name.replace("lb_notice_click", ""));
        for (var i = 0; i < iChilds; i++) {
            var childObj = group.getChildByName("p_" + i);
            var groupT = childObj.getChildByName("group_1");
            if (i == idx) {
                groupT.getChildByName("img_yellow").visible = true;
                groupT.getChildByName("img_red").visible = false;
                var img_letter = groupT.getChildByName("img_letter");
                img_letter.source = RES.getRes("mail_open2_png");
                lb_title.text = "标题：" + "喜报！！" + (i + 1);
                lb_mail_info.text = "恭喜用户1000" + i + "喜获超级大奖xxxxxxxxxxxxxx";
            }
            else {
                groupT.getChildByName("img_yellow").visible = false;
            }
        }
    };
    HallModule.prototype.clickShopItem = function (name) {
        this.shopItemClickName = name;
        var scroll = this.panelNotice.getChildByName("res_scroller");
        var group = scroll.getChildByName("res_group");
        var img_show_icon = this.panelNotice.getChildByName("shop_show_icon");
        var lb_show_info = this.panelNotice.getChildByName("shop_show_info");
        var lbCoin = this.panelNotice.getChildByName("coin_num_lb");
        lbCoin.text = ConstValue.cacheUserInfo.coin;
        var lbZuan = this.panelNotice.getChildByName("zuan_num_lb");
        lbZuan.text = ConstValue.cacheUserInfo.diamond;
        var iChilds = group.numChildren;
        var idx = parseInt(name.replace("shop_item_click", ""));
        if (this.shopUIType == 1) {
            // lb_show_info.text = this.dShopOrBagData.lShopInfo[idx].sDes;
            this.shopItemNo = this.dShopOrBagData.lShopInfo[idx].iNo;
            this.shopPayType = this.dShopOrBagData.lShopInfo[idx].payType;
            CommonTools.log('----this.shopItemNo-------' + this.shopItemNo);
            // this.shopItemName = this.dShopOrBagData.lShopInfo[idx].sName;
            lb_show_info.text = this.getConf("shopData", this.dShopOrBagData.lShopInfo[idx].iNo.toString(), "desc");
            this.shopItemName = this.getConf("shopData", this.dShopOrBagData.lShopInfo[idx].iNo.toString(), "name");
        }
        else {
            // lb_show_info.text = this.dShopOrBagData.lItmeInfo[idx].sDes;
            this.shopItemNo = this.dShopOrBagData.lItmeInfo[idx].iNo;
            this.shopItemItemID = this.dShopOrBagData.lItmeInfo[idx].iItemID;
            // this.shopItemName = this.dShopOrBagData.lItmeInfo[idx].sName;
            lb_show_info.text = this.getConf("ItemData", this.dShopOrBagData.lItmeInfo[idx].iNo.toString(), "desc");
            this.shopItemName = this.getConf("ItemData", this.dShopOrBagData.lItmeInfo[idx].iNo.toString(), "name");
        }
        for (var i = 0; i < iChilds; i++) {
            var childObj = group.getChildByName("p_" + i);
            var groupT = childObj.getChildByName("group_1");
            var img_item = groupT.getChildByName("shop_item_icon");
            var img_bg = groupT.getChildByName("shop_item_bg");
            var source_bg_not = "shop_item_not_png";
            var source_bg_yes = "shop_item_yes_png";
            if (this.shopUIType == 2) {
                source_bg_not = "bag_item_not_png";
                source_bg_yes = "bag_item_yes_png";
            }
            if (i == idx) {
                img_show_icon.source = img_item.source;
                img_bg.source = source_bg_yes;
            }
            else {
                img_bg.source = source_bg_not;
            }
        }
    };
    HallModule.prototype.clickShopPage = function (name) {
        var btn_fashion = this.panelNotice.getChildByName("btn_fashion");
        var btn_paopao = this.panelNotice.getChildByName("btn_paopao");
        var btn_texiao = this.panelNotice.getChildByName("btn_texiao");
        var btn_daoju = this.panelNotice.getChildByName("btn_daoju");
        var t_shi = this.panelNotice.getChildByName("t_shi");
        var t_zhuang = this.panelNotice.getChildByName("t_zhuang");
        var t_pao1 = this.panelNotice.getChildByName("t_pao1");
        var t_pao2 = this.panelNotice.getChildByName("t_pao2");
        var t_te = this.panelNotice.getChildByName("t_te");
        var t_xiao = this.panelNotice.getChildByName("t_xiao");
        var t_dao = this.panelNotice.getChildByName("t_dao");
        var t_ju = this.panelNotice.getChildByName("t_ju");
        t_shi.stroke = 3;
        t_zhuang.stroke = 3;
        t_pao1.stroke = 3;
        t_pao2.stroke = 3;
        t_te.stroke = 3;
        t_xiao.stroke = 3;
        t_dao.stroke = 3;
        t_ju.stroke = 3;
        var source_not = "shop_page_not_png";
        var source_yes = "shop_page_yes_png";
        var color_not = 0xfff1cf;
        var color_yes = 0xea8c31;
        var strokeColor_not = 0xE5AF8E;
        var strokeColor_yes = 0xFCEFDF;
        if (this.shopUIType == 2) {
            source_not = "rank_select_01_png";
            source_yes = "rank_select_02_png";
            color_not = 0xa0b3dc;
            color_yes = 0x7479db;
            strokeColor_not = 0x7B86BB;
            strokeColor_yes = 0xCAE9FF;
        }
        var iType = 1;
        switch (name) {
            case "btn_one_lb":
                btn_fashion.source = source_yes;
                btn_paopao.source = source_not;
                btn_texiao.source = source_not;
                btn_daoju.source = source_not;
                t_shi.textColor = color_yes;
                t_zhuang.textColor = color_yes;
                t_pao1.textColor = color_not;
                t_pao2.textColor = color_not;
                t_te.textColor = color_not;
                t_xiao.textColor = color_not;
                t_dao.textColor = color_not;
                t_ju.textColor = color_not;
                t_shi.strokeColor = strokeColor_yes;
                t_zhuang.strokeColor = strokeColor_yes;
                t_pao1.strokeColor = strokeColor_not;
                t_pao2.strokeColor = strokeColor_not;
                t_te.strokeColor = strokeColor_not;
                t_xiao.strokeColor = strokeColor_not;
                t_dao.strokeColor = strokeColor_not;
                t_ju.strokeColor = strokeColor_not;
                iType = 1;
                break;
            case "btn_two_lb":
                btn_fashion.source = source_not;
                btn_paopao.source = source_yes;
                btn_texiao.source = source_not;
                btn_daoju.source = source_not;
                t_shi.textColor = color_not;
                t_zhuang.textColor = color_not;
                t_pao1.textColor = color_yes;
                t_pao2.textColor = color_yes;
                t_te.textColor = color_not;
                t_xiao.textColor = color_not;
                t_dao.textColor = color_not;
                t_ju.textColor = color_not;
                t_shi.strokeColor = strokeColor_not;
                t_zhuang.strokeColor = strokeColor_not;
                t_pao1.strokeColor = strokeColor_yes;
                t_pao2.strokeColor = strokeColor_yes;
                t_te.strokeColor = strokeColor_not;
                t_xiao.strokeColor = strokeColor_not;
                t_dao.strokeColor = strokeColor_not;
                t_ju.strokeColor = strokeColor_not;
                iType = 2;
                break;
            case "btn_three_lb":
                btn_fashion.source = source_not;
                btn_paopao.source = source_not;
                btn_texiao.source = source_yes;
                btn_daoju.source = source_not;
                t_shi.textColor = color_not;
                t_zhuang.textColor = color_not;
                t_pao1.textColor = color_not;
                t_pao2.textColor = color_not;
                t_te.textColor = color_yes;
                t_xiao.textColor = color_yes;
                t_dao.textColor = color_not;
                t_ju.textColor = color_not;
                t_shi.strokeColor = strokeColor_not;
                t_zhuang.strokeColor = strokeColor_not;
                t_pao1.strokeColor = strokeColor_not;
                t_pao2.strokeColor = strokeColor_not;
                t_te.strokeColor = strokeColor_yes;
                t_xiao.strokeColor = strokeColor_yes;
                t_dao.strokeColor = strokeColor_not;
                t_ju.strokeColor = strokeColor_not;
                iType = 3;
                break;
            case "btn_four_lb":
                btn_fashion.source = source_not;
                btn_paopao.source = source_not;
                btn_texiao.source = source_not;
                btn_daoju.source = source_yes;
                t_shi.textColor = color_not;
                t_zhuang.textColor = color_not;
                t_pao1.textColor = color_not;
                t_pao2.textColor = color_not;
                t_te.textColor = color_not;
                t_xiao.textColor = color_not;
                t_dao.textColor = color_yes;
                t_ju.textColor = color_yes;
                t_shi.strokeColor = strokeColor_not;
                t_zhuang.strokeColor = strokeColor_not;
                t_pao1.strokeColor = strokeColor_not;
                t_pao2.strokeColor = strokeColor_not;
                t_te.strokeColor = strokeColor_not;
                t_xiao.strokeColor = strokeColor_not;
                t_dao.strokeColor = strokeColor_yes;
                t_ju.strokeColor = strokeColor_yes;
                iType = 4;
                break;
            default:
                break;
        }
        if (this.shopUIType == 1) {
            this.shopPageType = iType - 1;
            var sData_shop = CommonTools.getDataJsonStr("openShopUI", 1, { iType: this.shopPageType });
            ConstValue.P_NET_OBJ.sendData(sData_shop);
        }
        else {
            this.shopPageType = iType - 1;
            var sData_shop = CommonTools.getDataJsonStr("openBagUI", 1, { iType: this.shopPageType });
            ConstValue.P_NET_OBJ.sendData(sData_shop);
        }
    };
    HallModule.prototype.addCommonTips = function (tips) {
        CommonTools.addCommonTips(this.context, tips);
    };
    HallModule.prototype.clearPage2HorseHome = function () {
        if (this.horseSelectPanel != null) {
            this.context.removeChild(this.horseSelectPanel);
            this.horseSelectPanel = null;
        }
        if (this.horseSelectRightPanel != null) {
            this.context.removeChild(this.horseSelectRightPanel);
            this.horseSelectRightPanel = null;
        }
        if (this.maskBg2 != null) {
            this.context.removeChild(this.maskBg2);
            this.maskBg2 = null;
        }
        this.btnPveAnim.visible = false;
        this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
        this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;
    };
    HallModule.prototype.autoChangeFirst = function () {
        this.curPage = 6;
        this.changePage("rank_head_01");
    };
    HallModule.prototype.changePage = function (clickName) {
        this.horseIndexS = 0;
        if (clickName == "rank_head_01") {
            if (this.curPage == 5) {
                this.subCurPage = 1;
                this.rankHead01_mask.visible = true;
                this.rankHead02_mask.visible = false;
                this.rankHead03_mask.visible = false;
                this.rankHead01.source = "icon_Royal-Club_s_png";
                this.rankHead02.source = "icon_Horse-Market_n_png";
                this.rankHead03.source = "icon_My-Inventory_n_png";
                this.updateUI();
            }
            else {
                if (this.curPage != 1)
                    this.maskNew.source = "new_ui_01_jpg";
                this.curPage = 1;
                this.subCurPage = 1;
                this.rankHead01_mask.visible = true;
                this.rankHead02_mask.visible = false;
                this.rankHead03_mask.visible = false;
                this.rankHead04_mask.visible = false;
                this.rankHead05_mask.visible = false;
                this.rankHead01.source = "icon_homestead_s_png";
                this.rankHead02.source = "icon_stables_n_png";
                this.rankHead03.source = "icon_training_n_png";
                this.rankHead04.source = "icon_task_n_png";
                this.rankHead05.source = "icon_marketpalec_n_png";
                this.panel.getChildByName("horse_name_group").visible = true;
                this.btnBackImg.visible = false;
                this.rankHead01.visible = true;
                this.rankHead04.visible = true;
                this.rankHead05.visible = true;
                this.clearPage2HorseHome();
                this.clearTraining();
                this.btnPveAnim.visible = true;
                this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = true;
                this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = true;
                this.panel.getChildByName("rank_grounp_main").visible = true;
                if (this.btnBackImgTemp != null) {
                    this.context.removeChild(this.btnBackImgTemp);
                    this.btnBackImgTemp = null;
                }
                this.btnPveAnimX = this.btnPveAnimInitX;
                this.btnPveAnim.x = this.btnPveAnimX;
                this.drawHorse();
                this.panel.getChildByName("up_item_group").visible = true;
                this.tipsPanel = this.panel;
            }
        }
        else if (clickName == "rank_head_02") {
            if (this.curPage == 5) {
                if (this.subCurPage != 2) {
                    var sData = CommonTools.getDataJsonStr("getNftMarket", 1, {});
                    ConstValue.P_NET_OBJ.sendData(sData);
                }
                this.subCurPage = 2;
                this.rankHead01_mask.visible = false;
                this.rankHead02_mask.visible = true;
                this.rankHead03_mask.visible = false;
                this.rankHead01.source = "icon_Royal-Club_n_png";
                this.rankHead02.source = "icon_Horse-Market_s_png";
                this.rankHead03.source = "icon_My-Inventory_n_png";
            }
            else {
                this.panel.getChildByName("horse_name_group").visible = false;
                this.curPage = 2;
                this.subCurPage = 1;
                this.rankHead01_mask.visible = false;
                this.rankHead02_mask.visible = true;
                this.rankHead03_mask.visible = false;
                this.rankHead04_mask.visible = false;
                this.rankHead05_mask.visible = false;
                this.rankHead01.visible = false;
                this.rankHead05.visible = false;
                this.rankHead02.source = "icon_horse_s_png";
                this.rankHead03.source = "icon_merge_n_png";
                this.rankHead04.source = "icon_breeding_n_png";
                this.btnBackImg.visible = true;
            }
            this.updateUI();
        }
        else if (clickName == "rank_head_03") {
            if (this.curPage == 2) {
                this.subCurPage = 2;
                this.rankHead02_mask.visible = false;
                this.rankHead03_mask.visible = true;
                this.rankHead04_mask.visible = false;
                this.rankHead02.source = "icon_horse_n_png";
                this.rankHead03.source = "icon_merge_s_png";
                this.rankHead04.source = "icon_breeding_n_png";
            }
            else if (this.curPage == 5) {
                if (this.subCurPage != 3 && ConstValue.cacheContract["nftLen"] > 0) {
                    ContractSol.nft_tokensOfOwner(ContractSol.sender);
                }
                this.subCurPage = 3;
                this.rankHead01_mask.visible = false;
                this.rankHead02_mask.visible = false;
                this.rankHead03_mask.visible = true;
                this.rankHead01.source = "icon_Royal-Club_n_png";
                this.rankHead02.source = "icon_Horse-Market_n_png";
                this.rankHead03.source = "icon_My-Inventory_s_png";
            }
            else {
                this.curPage = 3;
                this.rankHead01_mask.visible = false;
                this.rankHead02_mask.visible = false;
                this.rankHead03_mask.visible = true;
                this.rankHead04_mask.visible = false;
                this.rankHead05_mask.visible = false;
                this.rankHead01.source = "icon_homestead_n_png";
                this.rankHead02.source = "icon_stables_n_png";
                this.rankHead03.source = "icon_training_s_png";
                this.rankHead04.source = "icon_task_n_png";
                this.rankHead05.source = "icon_marketpalec_n_png";
                this.panel.getChildByName("rank_grounp_main").visible = false;
            }
            this.updateUI();
        }
        else if (clickName == "rank_head_04") {
            if (this.curPage == 2) {
                this.subCurPage = 3;
                this.rankHead02_mask.visible = false;
                this.rankHead03_mask.visible = false;
                this.rankHead04_mask.visible = true;
                this.rankHead02.source = "icon_horse_n_png";
                this.rankHead03.source = "icon_merge_n_png";
                this.rankHead04.source = "icon_breeding_s_png";
            }
            else {
                this.curPage = 4;
                this.rankHead01_mask.visible = false;
                this.rankHead02_mask.visible = false;
                this.rankHead03_mask.visible = false;
                this.rankHead04_mask.visible = true;
                this.rankHead05_mask.visible = false;
                this.rankHead01.source = "icon_homestead_n_png";
                this.rankHead02.source = "icon_stables_n_png";
                this.rankHead03.source = "icon_training_n_png";
                this.rankHead04.source = "icon_task_s_png";
                this.rankHead05.source = "icon_marketpalec_n_png";
                this.maskNew.source = "horse_playToEarn_page4_jpg";
            }
            this.updateUI();
        }
        else if (clickName == "rank_head_05") {
            this.panel.getChildByName("horse_name_group").visible = false;
            this.curPage = 5;
            this.rankHead01_mask.visible = true;
            this.rankHead02_mask.visible = false;
            this.rankHead03_mask.visible = false;
            this.rankHead04_mask.visible = false;
            this.rankHead05_mask.visible = false;
            this.rankHead01.source = "icon_Royal-Club_s_png";
            this.rankHead02.source = "icon_Horse-Market_n_png";
            this.rankHead03.source = "icon_My-Inventory_n_png";
            this.rankHead04.visible = false;
            this.rankHead05.visible = false;
            this.btnBackImg.visible = true;
            this.updateUI();
        }
        this.setHorseXY();
        if (this.curPage != 5 || (this.curPage == 5 && this.subCurPage != 2)) {
            this.horseMarketData = null;
        }
        if (this.curPage == 5 && this.subCurPage == 3) {
            this.panel.getChildByName("sell_group").visible = true;
        }
        else {
            this.panel.getChildByName("sell_group").visible = false;
        }
        if (this.curPage == 5 && this.subCurPage == 2) {
            this.panel.getChildByName("buynft_group").visible = true;
        }
        else {
            this.panel.getChildByName("buynft_group").visible = false;
        }
    };
    HallModule.prototype.testAddMain = function () {
        CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_PUSHING_TR);
        var sData = CommonTools.getDataJsonStr("AddMainCoin", 1, { iAdd: 5, iOpType: 0 });
        ConstValue.P_NET_OBJ.sendData(sData);
    };
    HallModule.prototype.testAddSub = function () {
        CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_PUSHING_TR);
        var sData = CommonTools.getDataJsonStr("AddSubCoin", 1, { iAdd: 5, iOpType: 0 });
        ConstValue.P_NET_OBJ.sendData(sData);
    };
    HallModule.prototype.onClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var name, _a, sDataSell, sDataBuybtn, sDataNoendHelp, sDataSkillHelp, sDataReady, sDataReady, sData_1, sData_gobarr, sData, sDataGG, sData_rank_3, sData_rank_1, sData_rank_2, sData_2, sData_role_detail, sData_noend, sData_3, sData_shop, sData_bag, sData_RoleList, sData_Reward, sData_skill, sDataBuy, sDataBuy, sDataUse, account_lb_txt, sData_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.context.loadingView != null && !ConstValue.P_IS_DEBUG) {
                            CommonTools.log("还在加载中......return ");
                            return [2 /*return*/];
                        }
                        CommonAudioHandle.playEffect("playBomb_mp3", 1);
                        name = e.target.name;
                        if (name != "btn_close" && name != "btn_close_edit") {
                            this.removeGuide();
                        }
                        if (name == "btn_close" && this.seventData == null) {
                            this.showGuide();
                        }
                        CommonTools.log("==========name::::" + name);
                        if (name.indexOf("lb_notice_click") >= 0) {
                            this.clickNotice(name);
                            return [2 /*return*/];
                        }
                        else if (name.indexOf("shop_item_click") >= 0) {
                            this.clickShopItem(name);
                            return [2 /*return*/];
                        }
                        if (name.indexOf("rank_head_") >= 0) {
                            this.changePage(name);
                            return [2 /*return*/];
                        }
                        _a = name;
                        switch (_a) {
                            case "img_coin1_add": return [3 /*break*/, 1];
                            case "img_coin2_add": return [3 /*break*/, 2];
                            case "sell_btn_lb": return [3 /*break*/, 3];
                            case "buynft_btn_lb": return [3 /*break*/, 4];
                            case "btn_back_img": return [3 /*break*/, 5];
                            case "noend_tip": return [3 /*break*/, 6];
                            case "btn_tip": return [3 /*break*/, 7];
                            case "friend_rank_lb": return [3 /*break*/, 8];
                            case "btn_2v2": return [3 /*break*/, 9];
                            case "btn_close": return [3 /*break*/, 10];
                            case "btn_close_wx_vs": return [3 /*break*/, 11];
                            case "btn_start": return [3 /*break*/, 12];
                            case "btn_shop": return [3 /*break*/, 13];
                            case "btn_training_pve": return [3 /*break*/, 14];
                            case "btn_ranking": return [3 /*break*/, 15];
                            case "btn_gonggao": return [3 /*break*/, 16];
                            case "all_rank_lb": return [3 /*break*/, 17];
                            case "barrier_rank_lb": return [3 /*break*/, 17];
                            case "match_rank_lb": return [3 /*break*/, 18];
                            case "lv_rank_lb": return [3 /*break*/, 19];
                            case "btn_noticetip": return [3 /*break*/, 20];
                            case "btn_match_pvp": return [3 /*break*/, 21];
                            case "img_info": return [3 /*break*/, 23];
                            case "btn_friend_pvp": return [3 /*break*/, 24];
                            case "btn_noend_pve": return [3 /*break*/, 25];
                            case "btn_map_diy": return [3 /*break*/, 26];
                            case "btn_map_shop": return [3 /*break*/, 28];
                            case "btn_redtv": return [3 /*break*/, 29];
                            case "btn_map_bag": return [3 /*break*/, 30];
                            case "btn_select_role": return [3 /*break*/, 31];
                            case "btn_close_edit": return [3 /*break*/, 32];
                            case "btn_uplv_task": return [3 /*break*/, 33];
                            case "btn_skill": return [3 /*break*/, 34];
                            case "btn_maprank": return [3 /*break*/, 35];
                            case "btn_setting": return [3 /*break*/, 36];
                            case "scroll_notify": return [3 /*break*/, 37];
                            case "btn_one_lb": return [3 /*break*/, 38];
                            case "btn_two_lb": return [3 /*break*/, 38];
                            case "btn_three_lb": return [3 /*break*/, 38];
                            case "btn_four_lb": return [3 /*break*/, 38];
                            case "btn_buy": return [3 /*break*/, 39];
                            case "btn_confirm_modify": return [3 /*break*/, 40];
                        }
                        return [3 /*break*/, 41];
                    case 1:
                        this.testAddMain();
                        return [3 /*break*/, 42];
                    case 2:
                        this.testAddSub();
                        return [3 /*break*/, 42];
                    case 3:
                        sDataSell = CommonTools.getDataJsonStr("SellNft", 1, { nftIndex: this.horseIndexS });
                        ConstValue.P_NET_OBJ.sendData(sDataSell);
                        return [3 /*break*/, 42];
                    case 4:
                        sDataBuybtn = CommonTools.getDataJsonStr("BuyNft", 1, { nftIndex: this.horseIndexS, sAddress: ContractSol.sender });
                        ConstValue.P_NET_OBJ.sendData(sDataBuybtn);
                        return [3 /*break*/, 42];
                    case 5:
                        if (this.curPage == 5 && ConstValue.cacheContract["nftLen"] == 0) {
                            CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_NO_HORSE);
                            return [2 /*return*/];
                        }
                        this.curPage = 6;
                        this.changePage("rank_head_01");
                        return [3 /*break*/, 42];
                    case 6:
                        sDataNoendHelp = CommonTools.getDataJsonStr("getHelp", 1, { helpID: "1" });
                        ConstValue.P_NET_OBJ.sendData(sDataNoendHelp);
                        return [3 /*break*/, 42];
                    case 7:
                        sDataSkillHelp = CommonTools.getDataJsonStr("getHelp", 1, { helpID: "2" });
                        ConstValue.P_NET_OBJ.sendData(sDataSkillHelp);
                        return [3 /*break*/, 42];
                    case 8:
                        CommonTools.addCommonTips(this.tipsPanel, "暂未开放");
                        return [3 /*break*/, 42];
                    case 9:
                        CommonTools.addCommonTips(this.tipsPanel, "敬请期待");
                        return [3 /*break*/, 42];
                    case 10:
                        this.closeNotice();
                        return [3 /*break*/, 42];
                    case 11:
                        this.closeWxVsUI();
                        return [3 /*break*/, 42];
                    case 12:
                        if (this.isMainRoomer) {
                            sDataReady = CommonTools.getDataJsonStr("startGame1V1", 1, { fightRoomKey: Main.roomkey });
                            ConstValue.P_NET_OBJ.sendData(sDataReady);
                        }
                        else {
                            sDataReady = CommonTools.getDataJsonStr("setReady1V1", 1, { fightRoomKey: Main.roomkey });
                            ConstValue.P_NET_OBJ.sendData(sDataReady);
                        }
                        return [3 /*break*/, 42];
                    case 13:
                        CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_SEND_WAITING);
                        return [3 /*break*/, 42];
                    case 14:
                        if (HallModule.curGuide == 2) {
                            HallModule.curGuide = 0;
                            sData_1 = CommonTools.getDataJsonStr("getNextGuild", 1, {});
                            ConstValue.P_NET_OBJ.sendData(sData_1);
                        }
                        HallModule.isTrainBrr = true;
                        sData_gobarr = CommonTools.getDataJsonStr("C2GEnterTrain", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_gobarr);
                        return [3 /*break*/, 42];
                    case 15:
                        sData = CommonTools.getDataJsonStr("openRnakUI", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData);
                        return [3 /*break*/, 42];
                    case 16:
                        sDataGG = CommonTools.getDataJsonStr("getGonggao", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sDataGG);
                        return [3 /*break*/, 42];
                    case 17:
                        sData_rank_3 = CommonTools.getDataJsonStr("getTotalGuankaRank", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_rank_3);
                        return [3 /*break*/, 42];
                    case 18:
                        sData_rank_1 = CommonTools.getDataJsonStr("getTotalPvpRank", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_rank_1);
                        return [3 /*break*/, 42];
                    case 19:
                        sData_rank_2 = CommonTools.getDataJsonStr("getTotalLvRank", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_rank_2);
                        return [3 /*break*/, 42];
                    case 20:
                        this.showNotice("resource/eui_skins/UserUI/NoticeUI.exml", name);
                        return [3 /*break*/, 42];
                    case 21:
                        if (HallModule.curGuide == 6) {
                            HallModule.curGuide = 0;
                            sData_2 = CommonTools.getDataJsonStr("getNextGuild", 1, {});
                            ConstValue.P_NET_OBJ.sendData(sData_2);
                        }
                        return [4 /*yield*/, this.context.loadResource("fighting", 3)];
                    case 22:
                        _b.sent();
                        return [3 /*break*/, 42];
                    case 23:
                        sData_role_detail = CommonTools.getDataJsonStr("getRoleDetail", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_role_detail);
                        return [3 /*break*/, 42];
                    case 24:
                        this.showNotice("resource/eui_skins/UserUI/SelectShareVsMapUI.exml", name);
                        return [3 /*break*/, 42];
                    case 25:
                        sData_noend = CommonTools.getDataJsonStr("C2GOpenWujinUI", 1, { diffLevel: 1 });
                        ConstValue.P_NET_OBJ.sendData(sData_noend);
                        return [3 /*break*/, 42];
                    case 26:
                        if (HallModule.curGuide == 7) {
                            HallModule.curGuide = 0;
                            sData_3 = CommonTools.getDataJsonStr("getNextGuild", 1, {});
                            ConstValue.P_NET_OBJ.sendData(sData_3);
                        }
                        if (ConstValue.cacheUserInfo.btnCtrlData["5"].openLv > ConstValue.cacheUserInfo.lv) {
                            CommonTools.addCommonTips(this.tipsPanel, "等级" + ConstValue.cacheUserInfo.btnCtrlData["5"].openLv + "级后开放");
                            return [3 /*break*/, 42];
                        }
                        return [4 /*yield*/, this.context.loadResource("diymap", 4)];
                    case 27:
                        _b.sent();
                        return [3 /*break*/, 42];
                    case 28:
                        sData_shop = CommonTools.getDataJsonStr("openShopUI", 1, { iType: 0 });
                        ConstValue.P_NET_OBJ.sendData(sData_shop);
                        return [3 /*break*/, 42];
                    case 29:
                        this.showAD(5);
                        return [3 /*break*/, 42];
                    case 30:
                        sData_bag = CommonTools.getDataJsonStr("openBagUI", 1, { iType: 0 });
                        ConstValue.P_NET_OBJ.sendData(sData_bag);
                        return [3 /*break*/, 42];
                    case 31:
                        sData_RoleList = CommonTools.getDataJsonStr("showAllClassList", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_RoleList);
                        // this.showNotice("resource/eui_skins/UserUI/RoleInfoUI.exml","btn_img_info");
                        return [3 /*break*/, 42];
                    case 32:
                        this.closeSub();
                        return [3 /*break*/, 42];
                    case 33:
                        sData_Reward = CommonTools.getDataJsonStr("showUpgradeReward", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_Reward);
                        return [3 /*break*/, 42];
                    case 34:
                        sData_skill = CommonTools.getDataJsonStr("C2G_Open_MainUI", 1, {});
                        ConstValue.P_NET_OBJ.sendData(sData_skill);
                        return [3 /*break*/, 42];
                    case 35:
                        if (ConstValue.P_MAP_OBJ == null) {
                            ConstValue.P_MAP_OBJ = new MapDIYModule(this.context, null, 0);
                        }
                        return [3 /*break*/, 42];
                    case 36:
                        this.showNotice("resource/eui_skins/UserUI/MainSetting.exml", "btn_setting");
                        return [3 /*break*/, 42];
                    case 37:
                        // let arr = ["2","4","6","8","9","10","7"];
                        // for(let i=0;i<arr.length;i++){
                        // 	egret.localStorage.setItem(GuideModule.guide_tip_new[arr[i]].saveKey,"0");
                        // }
                        FightingModule.curBarrNo = 29;
                        // this.showGuide();
                        this.showEditUI(name);
                        return [3 /*break*/, 42];
                    case 38:
                        this.clickShopPage(name);
                        return [3 /*break*/, 42];
                    case 39:
                        if (this.shopUIType == 1) {
                            if (this.shopPayType != 3) {
                                sDataBuy = CommonTools.getDataJsonStr("Buy", 1, { iNo: this.shopItemNo, iType: this.shopPageType, num: 1 });
                                ConstValue.P_NET_OBJ.sendData(sDataBuy);
                            }
                            else {
                                sDataBuy = CommonTools.getDataJsonStr("playVidioBefore", 1, { iNo: this.shopItemNo, iType: 1, pageType: this.shopPageType });
                                ConstValue.P_NET_OBJ.sendData(sDataBuy);
                                this.showAD(3);
                            }
                        }
                        else {
                            sDataUse = CommonTools.getDataJsonStr("useItem", 1, { iNo: this.shopItemNo, iType: this.shopPageType, iItemID: this.shopItemItemID });
                            ConstValue.P_NET_OBJ.sendData(sDataUse);
                        }
                        return [3 /*break*/, 42];
                    case 40:
                        account_lb_txt = this.panelSub.getChildByName("account_lb_txt");
                        if (account_lb_txt.text == "") {
                            CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_MODIFY_NULL_FAIL);
                            return [2 /*return*/];
                        }
                        if (ConstValue.P_IS_DEBUG) {
                            CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_SEND_MODIFY_SUCCESS);
                            this.closeSub();
                        }
                        else {
                            this.sCurModifyValue = account_lb_txt.text;
                            sData_4 = "";
                            if (this.sCurModifyBtn == "scroll_notify") {
                                sData_4 = CommonTools.getDataJsonStr("gmFunc", 1, { gmCmd: this.sCurModifyValue });
                            }
                            if (sData_4 == "") {
                                if (ConstValue.P_IS_INNER) {
                                    CommonTools.addCommonTips(this.tipsPanel, "btn_confirm_modify sData 为空");
                                }
                                return [2 /*return*/];
                            }
                            ConstValue.P_NET_OBJ.sendData(sData_4);
                        }
                        return [3 /*break*/, 42];
                    case 41:
                        CommonTools.log("11111111 default");
                        return [3 /*break*/, 42];
                    case 42: return [2 /*return*/];
                }
            });
        });
    };
    HallModule.prototype.getConf = function (tablename, index, key) {
        try {
            return ConstValue.P_CONFIG[tablename][index][key];
        }
        catch (error) {
            return "";
        }
    };
    /**
     * 点击按钮
     * Click the button
     */
    HallModule.prototype.onButtonClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var sData, platform;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // let openDataContext = wx.getOpenDataContext();
                        CommonTools.log("shareAppMessage-------1");
                        sData = CommonTools.getDataJsonStr("gmFunc", 1, { gmCmd: "test1v1" });
                        ConstValue.P_NET_OBJ.sendData(sData);
                        platform = window.platform;
                        return [4 /*yield*/, platform.shareAppMessage(ConstValue.cacheUserInfo.id + "")];
                    case 1:
                        _a.sent();
                        CommonTools.log("shareAppMessage-------2");
                        return [2 /*return*/];
                }
            });
        });
    };
    HallModule.prototype.showNotice = function (exmlName, btnName) {
        this.curButton = btnName;
        this.maskBg = new eui.Image("bg_ppt_1_png");
        this.maskBg.width = this.context.getStageWidth();
        var scaleDevice = 1334.0 / this.context.getStageWidth();
        this.maskBg.height = 750.0 / scaleDevice;
        this.context.addChild(this.maskBg);
        this.panelNotice = new eui.Panel();
        this.panelNotice.skinName = exmlName;
        this.panelNotice.title = "Title";
        this.panelNotice.horizontalCenter = 0;
        this.panelNotice.verticalCenter = 0;
        this.context.addChild(this.panelNotice);
        CommonTools.fixFix(this.context, this.panelNotice, 1, 0, 0);
        this.tipsPanel = this.panelNotice;
        CommonButtonHandle.beginTouch(this.panelNotice.getChildByName("btn_close"), this);
        this.panelNotice.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.handlePanel(this.panelNotice, btnName);
        CommonTools.niceTip(this.panelNotice, 1, this);
    };
    HallModule.prototype.showRoleInfoUI = function () {
        this.maskBg2 = new eui.Image("mask_layer_png");
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.panelSub = new eui.Panel();
        this.panelSub.skinName = "resource/eui_skins/UserUI/RoleInfoUI.exml";
        this.panelSub.title = "Title";
        this.panelSub.horizontalCenter = 0;
        this.panelSub.verticalCenter = 0;
        this.context.addChild(this.panelSub);
        CommonTools.fixFix(this.context, this.panelSub, 1, 0, 0);
        this.tipsPanel = this.panelSub;
        var lb_life = this.panelSub.getChildByName("lb_life");
        var lb_boom = this.panelSub.getChildByName("lb_boom");
        var lb_speed = this.panelSub.getChildByName("lb_speed");
        var lb_power = this.panelSub.getChildByName("lb_power");
        var lb_lv = this.panelSub.getChildByName("lb_lv");
        var lb_exp = this.panelSub.getChildByName("lb_exp");
        var info_name = this.panelSub.getChildByName("info_name");
        lb_life.text = this.roleDetailData.life;
        lb_boom.text = this.roleDetailData.cnt;
        lb_speed.text = this.roleDetailData.speed;
        lb_power.text = this.roleDetailData.power;
        lb_lv.text = ConstValue.cacheUserInfo.lv;
        lb_exp.text = ConstValue.cacheUserInfo.curexp;
        info_name.text = ConstValue.cacheUserInfo.name;
        CommonButtonHandle.beginTouch(this.panelSub.getChildByName("btn_close"), this);
        this.panelSub.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonTools.niceTip(this.panelSub, 2, this);
        }, this);
        this.bodyAniDown2 = CommonTools.getAnimDraw(RES.getRes("p" + ConstValue.cacheUserInfo.iClass + "_special_json"), RES.getRes("p" + ConstValue.cacheUserInfo.iClass + "_special_png"), "0");
        this.bodyAniDown2.play(-1);
        this.panelSub.addChild(this.bodyAniDown2);
        this.bodyAniDown2.x = 580;
        this.bodyAniDown2.y = 370;
    };
    HallModule.prototype.showBarrinfoUI = function (dBarrData) {
        this.maskBg2 = new eui.Image("mask_layer_png");
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.panelSub = new eui.Panel();
        this.panelSub.skinName = "resource/eui_skins/UserUI/ViewHistoryPass.exml";
        this.panelSub.title = "Title";
        this.panelSub.horizontalCenter = 0;
        this.panelSub.verticalCenter = 0;
        this.context.addChild(this.panelSub);
        CommonTools.fixFix(this.context, this.panelSub, 1, 0, 0);
        this.panelSub.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            CommonTools.niceTip(this.panelSub, 2, this);
        }, this);
        this.panelSub.getChildByName("start_btn").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            HallModule.isNoEnd = true;
            FightingModule.curBarrNo = parseInt(dBarrData.iBarrierNo);
            var sData_gobarr = CommonTools.getDataJsonStr("C2GGotoBarrier", 1, { barrierNo: parseInt(dBarrData.iBarrierNo) });
            ConstValue.P_NET_OBJ.sendData(sData_gobarr);
        }, this);
        var view_barr_title = this.panelSub.getChildByName("view_barr_title");
        if (parseInt(dBarrData.iBarrierNo) < 10) {
            view_barr_title.text = "第 0" + dBarrData.iBarrierNo + " 关";
        }
        else {
            view_barr_title.text = "第 " + dBarrData.iBarrierNo + " 关";
        }
        var info_1 = this.panelSub.getChildByName("info_1");
        info_1.text = dBarrData.winRate + "%";
        var info_2 = this.panelSub.getChildByName("info_2");
        info_2.text = dBarrData.myTime + "s";
        var info_3 = this.panelSub.getChildByName("info_3");
        info_3.text = dBarrData.serverBestname + " " + dBarrData.serverBsetTime + " s";
        for (var i = 0; i < dBarrData.iStar; i++) {
            var star_img = this.panelSub.getChildByName("star_0" + (i + 1));
            star_img.source = "start_01_png";
        }
    };
    HallModule.prototype.showWxVsUI = function (dData) {
        this.maskBg2 = new eui.Image("vs_bg_1v1_png");
        this.maskBg2.width = this.context.getStageWidth();
        this.maskBg2.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg2);
        this.showWxVsPanel = new eui.Panel();
        this.showWxVsPanel.skinName = "resource/eui_skins/UserUI/WxVsWaitUI.exml";
        this.showWxVsPanel.title = "Title";
        this.showWxVsPanel.horizontalCenter = 0;
        this.showWxVsPanel.verticalCenter = 0;
        this.context.addChild(this.showWxVsPanel);
        this.tipsPanel = this.showWxVsPanel;
        CommonTools.fixFix(this.context, this.showWxVsPanel, 1, 0, 0);
        CommonButtonHandle.beginTouch(this.showWxVsPanel.getChildByName("btn_close_wx_vs"), this);
        this.showWxVsPanel.getChildByName("btn_close_wx_vs").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        CommonButtonHandle.beginTouch(this.showWxVsPanel.getChildByName("btn_start"), this);
        this.showWxVsPanel.getChildByName("btn_start").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.updateWxVsUI(dData);
    };
    HallModule.prototype.updateWxVsUI = function (dData) {
        var left_online = this.showWxVsPanel.getChildByName("left_online");
        var left_name = this.showWxVsPanel.getChildByName("left_name");
        var left_ready = this.showWxVsPanel.getChildByName("left_ready");
        var left_lv = this.showWxVsPanel.getChildByName("left_lv");
        var right_online = this.showWxVsPanel.getChildByName("right_online");
        var right_name = this.showWxVsPanel.getChildByName("right_name");
        var right_ready = this.showWxVsPanel.getChildByName("right_ready");
        var right_lv = this.showWxVsPanel.getChildByName("right_lv");
        var btn_start = this.showWxVsPanel.getChildByName("btn_start");
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var filters = new egret.ColorMatrixFilter(colorMatrix); //灰化
        if (dData.lWaitInfo.length == 1) {
            left_online.text = dData.lWaitInfo[0].isOnline == 1 ? "在线" : "等待";
            left_name.text = dData.lWaitInfo[0].name;
            left_ready.text = dData.lWaitInfo[0].isReady == 1 ? "已准备" : "等待";
            left_lv.text = "Lv." + dData.lWaitInfo[0].iLv;
            if (dData.lWaitInfo[0].rid == ConstValue.cacheUserInfo.id) {
                this.isMainRoomer = true;
            }
            btn_start.filters = [filters];
            btn_start.enabled = false;
        }
        else {
            left_online.text = dData.lWaitInfo[0].isOnline == 1 ? "在线" : "等待";
            left_name.text = dData.lWaitInfo[0].name;
            left_ready.text = dData.lWaitInfo[0].isReady == 1 ? "已准备" : "等待";
            left_lv.text = "Lv." + dData.lWaitInfo[0].iLv;
            right_online.text = dData.lWaitInfo[1].isOnline == 1 ? "在线" : "等待";
            right_name.text = dData.lWaitInfo[1].name;
            right_ready.text = dData.lWaitInfo[1].isReady == 1 ? "已准备" : "等待";
            right_lv.text = "Lv." + dData.lWaitInfo[1].iLv;
            if (this.isMainRoomer) {
                if (dData.lWaitInfo[1].isOnline == 1 && dData.lWaitInfo[1].isReady == 1) {
                    btn_start.filters = [];
                    btn_start.enabled = true;
                }
                else {
                    btn_start.filters = [filters];
                    btn_start.enabled = false;
                }
            }
            else {
                if (dData.lWaitInfo[1].isReady == 1) {
                    btn_start.filters = [filters];
                    btn_start.enabled = false;
                    btn_start.label = "就  绪";
                }
                else {
                    btn_start.filters = [];
                    btn_start.enabled = true;
                    btn_start.label = "准  备";
                }
            }
        }
        if (dData.MapInfo["roleId"] != null) {
            this.showWxVsPanel.getChildByName("img_wx_wenhao").visible = false;
            new MapMiniDIYModule(this.showWxVsPanel, dData.MapInfo.bgconf, dData.MapInfo.layerconf, 3);
        }
        if (dData.lWaitInfo.length == 1) {
            var img_lefthead = this.showWxVsPanel.getChildByName("img_lefthead");
            if (dData.lWaitInfo[0].head != "")
                img_lefthead.source = dData.lWaitInfo[0].head;
        }
        if (dData.lWaitInfo.length == 2) {
            var img_lefthead = this.showWxVsPanel.getChildByName("img_lefthead");
            if (dData.lWaitInfo[0].head != "")
                img_lefthead.source = dData.lWaitInfo[0].head;
            var img_righthead = this.showWxVsPanel.getChildByName("img_righthead");
            if (dData.lWaitInfo[1].head != "")
                img_righthead.source = dData.lWaitInfo[1].head;
        }
    };
    HallModule.prototype.showEditUI = function (btnName) {
        this.panelSub = new eui.Panel();
        this.panelSub.skinName = "resource/eui_skins/UserUI/EditUI.exml";
        this.panelSub.title = "Title";
        this.panelSub.horizontalCenter = 0;
        this.panelSub.verticalCenter = 0;
        this.context.addChild(this.panelSub);
        this.tipsPanel = this.panelSub;
        CommonButtonHandle.beginTouch(this.panelSub.getChildByName("btn_close_edit"), this);
        this.panelSub.getChildByName("btn_close_edit").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        CommonButtonHandle.beginTouch(this.panelSub.getChildByName("btn_confirm_modify"), this);
        this.panelSub.getChildByName("btn_confirm_modify").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panelSub.getChildByName("lb_edit_title").text = ConstValue.P_MODIFY_TITLE;
        this.sCurModifyBtn = btnName;
        if (btnName == "modify_nichen_btn") {
            this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_NICHENG;
        }
        else if (btnName == "modify_pwd_btn") {
            this.panelSub.getChildByName("lb_old_pwd").text = ConstValue.P_MODIFY_OLD_PWD;
            this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_NEW_PWD;
            this.panelSub.getChildByName("lb_new_pwd").text = ConstValue.P_MODIFY_NEW_PWD;
            this.panelSub.getChildByName("lb_old_pwd").visible = true;
            this.panelSub.getChildByName("bg_old").visible = true;
            this.panelSub.getChildByName("account_lb_old").visible = true;
            this.panelSub.getChildByName("account_lb_old").displayAsPassword = true;
            this.panelSub.getChildByName("account_lb_txt").displayAsPassword = true;
            this.panelSub.getChildByName("lb_new_pwd").visible = true;
            this.panelSub.getChildByName("bg_new").visible = true;
            this.panelSub.getChildByName("account_lb_new").visible = true;
            this.panelSub.getChildByName("account_lb_new").displayAsPassword = true;
        }
        else if (btnName == "modify_realname_btn") {
            this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_REALNAME;
        }
        else if (btnName == "modify_wx_btn") {
            this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_WX;
        }
        else if (btnName == "modify_beget_btn") {
            this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_BEGET;
        }
        else if (btnName == "scroll_notify") {
            this.panelSub.getChildByName("lb_edit_title").text = "gm";
            this.panelSub.getChildByName("lb_desc").text = "输入命令：";
        }
        else if (btnName == "hall_question_btn") {
            this.panelSub.getChildByName("lb_edit_title").text = "反馈";
            this.panelSub.getChildByName("lb_desc").text = "问题描述：";
        }
    };
    HallModule.prototype.showChoiceUI = function () {
        if (this.choicePanel == null) {
            this.choicePanel = new eui.Panel();
            this.choicePanel.skinName = "resource/eui_skins/UserUI/OptionUI.exml";
            this.choicePanel.title = "Title";
            this.context.addChild(this.choicePanel);
            var x = this.panel.getChildByName("btn_choice").x;
            var y = this.panel.getChildByName("btn_choice").y;
            this.choicePanel.x = x - 50;
            this.choicePanel.y = y + 50;
        }
        else {
            this.context.removeChild(this.choicePanel);
            this.choicePanel = null;
        }
    };
    HallModule.prototype.handleSkill = function (group, parG) {
        var cnt = 0;
        var _loop_4 = function (i) {
            var obj = this_4.skillData[i];
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/SkillGroup.exml";
            panelT.name = "p_" + i;
            panelT.x = 10;
            panelT.y = 10 + cnt * panelT.height;
            group.addChild(panelT);
            var groupT = panelT.getChildByName("group_1");
            var skill_icon = groupT.getChildByName("skill_icon");
            skill_icon.source = ConstValue.skill_conf[i].icon;
            var skill_name = groupT.getChildByName("skill_name");
            skill_name.text = obj.name;
            var skill_lv = groupT.getChildByName("skill_lv");
            skill_lv.text = "Lv." + obj.curLv + "/" + obj.maxLv;
            var skill_desc = groupT.getChildByName("skill_desc");
            skill_desc.text = obj.desc;
            var skill_desc2 = groupT.getChildByName("skill_desc2");
            skill_desc2.text = "下一级 " + obj.nextdesc;
            var skill_tip = groupT.getChildByName("skill_tip");
            var skill_pay = groupT.getChildByName("skill_pay");
            var skill_cost = groupT.getChildByName("skill_cost");
            var skill_learn = groupT.getChildByName("skill_learn");
            var skill_btn = groupT.getChildByName("skill_btn");
            if (obj.isOpen == 1) {
                skill_tip.visible = false;
                if (obj.costType == 1) {
                }
                else if (obj.costType == 2) {
                    skill_pay.source = "mini_zuanshi";
                }
                else if (obj.costType == 3) {
                    skill_pay.source = "mini_tv_png";
                }
                skill_cost.text = obj.cost;
                CommonButtonHandle.beginTouch(skill_learn, this_4);
                if (obj.curLv > 0) {
                    skill_learn.text = "升级";
                    skill_learn.strokeColor = 0xE76C47;
                }
                skill_learn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    var sData_skill = CommonTools.getDataJsonStr("C2G_Upgrade", 1, { SkillID: parseInt(i) });
                    ConstValue.P_NET_OBJ.sendData(sData_skill);
                }, this_4);
            }
            else {
                skill_pay.visible = false;
                skill_cost.visible = false;
                skill_learn.visible = false;
                skill_btn.visible = false;
            }
            cnt++;
        };
        var this_4 = this;
        for (var i in this.skillData) {
            _loop_4(i);
        }
    };
    HallModule.prototype.handleRank = function (group, parG, type) {
        var bgMap = { 1: { "matchbg": "rank_select_02_png", "lvbg": "rank_select_01_png", "barrbg": "rank_select_01_png" },
            2: { "matchbg": "rank_select_01_png", "lvbg": "rank_select_02_png", "barrbg": "rank_select_01_png" },
            3: { "matchbg": "rank_select_01_png", "lvbg": "rank_select_01_png", "barrbg": "rank_select_02_png" } };
        var strokeMap = { 1: { "matchsc": 0xCAE9FF, "matchtc": 0x7479DB, "lvsc": 0x7B86BB, "lvtc": 0xA0B3DC, "barrsc": 0x7B86BB, "barrtc": 0xA0B3DC },
            2: { "matchsc": 0x7B86BB, "matchtc": 0xA0B3DC, "lvsc": 0xCAE9FF, "lvtc": 0x7479DB, "barrsc": 0x7B86BB, "barrtc": 0xA0B3DC },
            3: { "matchsc": 0x7B86BB, "matchtc": 0xA0B3DC, "lvsc": 0x7B86BB, "lvtc": 0xA0B3DC, "barrsc": 0xCAE9FF, "barrtc": 0x7479DB } };
        var img = parG.getChildByName("match_rank_bg");
        img.source = RES.getRes(bgMap[type].matchbg);
        var img2 = parG.getChildByName("lv_rank_bg");
        img2.source = RES.getRes(bgMap[type].lvbg);
        var img3 = parG.getChildByName("barrier_rank_bg");
        img3.source = RES.getRes(bgMap[type].barrbg);
        var lbx = parG.getChildByName("match_rank_lb");
        lbx.stroke = 3;
        lbx.strokeColor = strokeMap[type].matchsc;
        lbx.textColor = strokeMap[type].matchtc;
        var lbx2 = parG.getChildByName("lv_rank_lb");
        lbx2.stroke = 3;
        lbx2.strokeColor = strokeMap[type].lvsc;
        lbx2.textColor = strokeMap[type].lvtc;
        var lbx3 = parG.getChildByName("barrier_rank_lb");
        lbx3.stroke = 3;
        lbx3.strokeColor = strokeMap[type].barrsc;
        lbx3.textColor = strokeMap[type].barrtc;
        for (var i in this.lRank) {
            var arr = this.lRank[i];
            var ii = parseInt(i);
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/RankGroup.exml";
            panelT.name = "p_" + i;
            panelT.y = ii * panelT.height;
            group.addChild(panelT);
            var groupT = panelT.getChildByName("group_1");
            var rank_1 = groupT.getChildByName("rank");
            rank_1.text = (ii + 1) + "";
            var name_1 = groupT.getChildByName("name");
            name_1.text = arr[1];
            var head_1 = groupT.getChildByName("head");
            if (arr[2] != "")
                head_1.source = arr[2];
            var desc_1 = groupT.getChildByName("desc");
            var desc2_1 = groupT.getChildByName("desc2");
            var lb_1 = groupT.getChildByName("lb");
            var lb2_1 = groupT.getChildByName("lb2");
            if (type == 1) {
                desc_1.text = arr[3];
                desc2_1.text = arr[4] + "%";
            }
            else if (type == 2) {
                lb2_1.visible = false;
                desc2_1.visible = false;
                desc_1.text = arr[3];
                lb_1.text = "等级 ：";
            }
            else if (type == 3) {
                lb2_1.visible = false;
                desc2_1.visible = false;
                desc_1.text = arr[3];
                lb_1.text = "关卡 ：";
            }
        }
        var rankG = parG.getChildByName("myrankG");
        var rank = rankG.getChildByName("myrank");
        rank.text = this.sMyRankDesc;
        var name = rankG.getChildByName("name");
        name.text = this.lMyRank[1];
        var head = rankG.getChildByName("head");
        if (ConstValue.cacheUserInfo.headPic != "")
            head.source = ConstValue.cacheUserInfo.headPic;
        var desc = rankG.getChildByName("desc");
        var desc2 = rankG.getChildByName("desc2");
        var lb = rankG.getChildByName("lb");
        var lb2 = rankG.getChildByName("lb2");
        if (type == 1) {
            lb2.visible = true;
            desc2.visible = true;
            desc.text = this.lMyRank[3];
            desc2.text = this.lMyRank[4] + "%";
            lb.text = "胜场 ：";
        }
        else if (type == 2) {
            lb2.visible = false;
            desc2.visible = false;
            desc.text = this.lMyRank[3];
            lb.text = "等级 ：";
        }
        else if (type == 3) {
            lb2.visible = false;
            desc2.visible = false;
            desc.text = this.lMyRank[3];
            lb.text = "关卡 ：";
        }
    };
    HallModule.prototype.showAD = function (videoIndx) {
        /*
        ConstValue.videoIndx = videoIndx;
        // 用户触发广告后，显示激励视频广告
        ConstValue.videoAdOBJ.show().catch(() => {
            // 失败重试
            ConstValue.videoAdOBJ.load()
                .then(() => ConstValue.videoAdOBJ.show())
                .catch(err => {
                    console.log('激励视频 广告显示失败')
                })
        })
        */
    };
    HallModule.prototype.handleLvReward = function () {
        var parG = this.panelNotice.getChildByName("fighting_parent");
        var videoG = this.panelNotice.getChildByName("video_g");
        if (ConstValue.videoIndx != 1) {
            CommonButtonHandle.beginTouch(videoG, this);
            videoG.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                this.moveLvGet = false;
                this.showAD(1);
            }, this);
        }
        var scroll = parG.getChildByName("scroll");
        var group = scroll.getChildByName("scroll_group");
        group.removeChildren();
        var cnt = 0;
        for (var i in this.lvRewardData) {
            cnt++;
        }
        var panelT = new eui.Panel();
        panelT.skinName = "resource/eui_skins/UserUI/LvGetProGroup.exml";
        panelT.name = "p_pro";
        panelT.x = 1.89;
        panelT.y = 198.4;
        panelT.width = 130 + 190 * (cnt - 1);
        group.addChild(panelT);
        var groupT = panelT.getChildByName("group_1");
        var img_slot = groupT.getChildByName("img_slot");
        img_slot.width = 130 + 190 * (cnt - 1);
        var img_pro = groupT.getChildByName("img_pro");
        img_pro.width = 130 + 190 * (ConstValue.cacheUserInfo.lv - 1);
        cnt = 0;
        var scrollX = 0;
        var idx = 1;
        for (var i in this.lvRewardData) {
            // CommonTools.log("lvRewardData-------1 "+ i)
            var obj = this.lvRewardData[i];
            var ii = idx;
            var panelT_1 = new eui.Panel();
            panelT_1.skinName = "resource/eui_skins/UserUI/LvGetPointGroup.exml";
            panelT_1.name = "p_" + i;
            panelT_1.x = 34.5 + (ii - 1) * (180 + 5);
            if (ConstValue.cacheUserInfo.lv == ii)
                scrollX = panelT_1.x;
            panelT_1.y = -6.44;
            group.addChild(panelT_1);
            cnt++;
            var groupT_1 = panelT_1.getChildByName("group_1");
            var lb_lv = groupT_1.getChildByName("lb_lv");
            lb_lv.text = "Lv." + obj.iLv;
            var img_role = groupT_1.getChildByName("img_role");
            var img_item = groupT_1.getChildByName("img_item");
            var rw_num = groupT_1.getChildByName("rw_num");
            var img_select = groupT_1.getChildByName("img_select");
            if (obj.iStatus == 0) {
                img_select.visible = false;
            }
            else if (obj.iStatus == 1) {
                img_select.source = "sevent_get_png";
            }
            rw_num.text = this.getConf("ItemData", obj.id, "name") + "x" + obj.rewardNun;
            img_item.source = this.getConf("ItemData", obj.id, "res") + "_png";
            // panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            //     if(obj.iStatus != 1)return;
            // 	this.moveLvGet = false;
            // 	let sData = CommonTools.getDataJsonStr("getUpgradeReward",1,{iLv:obj.iLv});
            // 	ConstValue.P_NET_OBJ.sendData(sData);
            // }, this);
            idx++;
        }
        if (this.moveLvGet)
            scroll.viewport.scrollH = scrollX;
    };
    HallModule.prototype.updateRoleClass = function (iSelect) {
        var lb_life = this.panelNotice.getChildByName("lb_life");
        var lb_boom = this.panelNotice.getChildByName("lb_boom");
        var lb_speed = this.panelNotice.getChildByName("lb_speed");
        var lb_power = this.panelNotice.getChildByName("lb_power");
        var lb_name = this.panelNotice.getChildByName("lb_name");
        var img_buy_bg = this.panelNotice.getChildByName("img_buy_bg");
        var btn_gold = this.panelNotice.getChildByName("btn_gold");
        var lb_gold = this.panelNotice.getChildByName("lb_gold");
        var btn_fight = this.panelNotice.getChildByName("btn_fight");
        var btn_buy = this.panelNotice.getChildByName("btn_buy");
        var btn_buy_lb = this.panelNotice.getChildByName("btn_buy_lb");
        var lb_attr = this.panelNotice.getChildByName("lb_attr");
        var role_bg = this.panelNotice.getChildByName("select_role_bg");
        role_bg.source = ConstValue.role_select_bg[iSelect];
        var Obj = this.roleClassData[iSelect];
        lb_life.text = Obj.life;
        lb_boom.text = Obj.cnt;
        lb_speed.text = Obj.speed;
        lb_power.text = Obj.power;
        lb_attr.text = Obj.desc;
        lb_name.text = Obj.name;
        if (Obj.isOwn == 1) {
            img_buy_bg.visible = false;
            btn_gold.visible = false;
            // lb_gold.visible = false;
            btn_buy.visible = false;
            btn_buy_lb.visible = false;
            btn_fight.visible = true;
            if (Obj.isUse == 1) {
                btn_fight.label = "出战中";
            }
            else {
                btn_fight.label = "出 战";
            }
        }
        else {
            btn_fight.visible = false;
            img_buy_bg.visible = true;
            btn_gold.visible = true;
            // lb_gold.visible = true;
            btn_buy.visible = true;
            btn_buy_lb.visible = true;
            // lb_gold.text = Obj.price;
        }
        if (this.bodyAniDown != null) {
            this.panelNotice.removeChild(this.bodyAniDown);
            this.bodyAniDown = null;
        }
        this.bodyAniDown = CommonTools.getAnimDraw(RES.getRes("p" + Obj.iClass + "_special_json"), RES.getRes("p" + Obj.iClass + "_special_png"), "0");
        this.bodyAniDown.play(-1);
        this.panelNotice.addChild(this.bodyAniDown);
        this.bodyAniDown.x = 570;
        this.bodyAniDown.y = 295;
        // this.bodyAniDown.x = 660;
        // this.bodyAniDown.y = 520;
        var lbCoin = this.panelNotice.getChildByName("coin_num_lb");
        lbCoin.text = ConstValue.cacheUserInfo.coin;
        var lbZuan = this.panelNotice.getChildByName("zuan_num_lb");
        lbZuan.text = ConstValue.cacheUserInfo.diamond;
    };
    HallModule.prototype.handleRoleClass = function (group, parG) {
        var _loop_5 = function (i) {
            var classObj = this_5.roleClassData[i];
            var ii = parseInt(i);
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/RoleSelectUIGroup.exml";
            panelT.name = "p_" + i;
            panelT.y = ii * 108; //125
            group.addChild(panelT);
            var groupT = panelT.getChildByName("group_1");
            var role_name = groupT.getChildByName("role_name");
            role_name.text = classObj.name;
            var img_selected = groupT.getChildByName("img_selected");
            if (ii > 0)
                img_selected.visible = false;
            var role_head = groupT.getChildByName("role_head");
            role_head.source = ConstValue.role_select_img[i];
            panelT.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                var iChilds = group.numChildren;
                for (var i_1 = 0; i_1 < iChilds; i_1++) {
                    var childObj = group.getChildByName("p_" + i_1);
                    var groupObj = childObj.getChildByName("group_1");
                    var imgObj = groupObj.getChildByName("img_selected");
                    imgObj.visible = false;
                }
                img_selected.visible = true;
                this.roleSelectIdx = i;
                this.updateRoleClass(i);
            }, this_5);
        };
        var this_5 = this;
        for (var i in this.roleClassData) {
            _loop_5(i);
        }
        this.updateRoleClass("0");
        var btn_fight = this.panelNotice.getChildByName("btn_fight");
        var btn_buy_lb = this.panelNotice.getChildByName("btn_buy_lb");
        btn_fight.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var Obj = this.roleClassData[this.roleSelectIdx];
            var sData = CommonTools.getDataJsonStr("useClass", 1, { iClass: Obj.iClass });
            ConstValue.P_NET_OBJ.sendData(sData);
            ConstValue.cacheUserInfo.iClass = Obj.iClass;
        }, this);
        btn_buy_lb.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var Obj = this.roleClassData[this.roleSelectIdx];
            this.buyClass = Obj.iClass;
            var sDataBuy = CommonTools.getDataJsonStr("playVidioBefore", 1, { iNo: Obj.iClass, iType: 2, pageType: 0 });
            ConstValue.P_NET_OBJ.sendData(sDataBuy);
            this.showAD(4);
            // let sData = CommonTools.getDataJsonStr("buyClass",1,{iClass:Obj.iClass});
            // ConstValue.P_NET_OBJ.sendData(sData);
        }, this);
    };
    HallModule.prototype.handleSeventDay = function () {
        this.initAD();
        if (ConstValue.videoIndx != 2) {
            var videoG = this.panelNotice.getChildByName("video_g");
            CommonButtonHandle.beginTouch(videoG, this);
            videoG.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                this.showAD(2);
            }, this);
        }
        for (var i = 1; i <= 7; i++) {
            if (this.seventCur == 0 && this.seventData[i.toString()].bGet == 0) {
                this.seventCur = i;
            }
            if (this.seventCur == i && this.seventData[i.toString()].bGet == 1) {
                this.seventGetState = true;
            }
            var iconImg = this.panelNotice.getChildByName("item_icon_" + i);
            iconImg.source = this.getConf("ItemData", this.seventData[i.toString()].itemNo, "res") + "_png";
            var itemName = this.panelNotice.getChildByName("lb_name_" + i);
            itemName.text = this.getConf("ItemData", this.seventData[i.toString()].itemNo, "name");
            var stateImg = this.panelNotice.getChildByName("item_state_" + i);
            if (this.seventData[i.toString()].bGet == 0) {
                stateImg.source = "sevent_get_png";
            }
            else {
                stateImg.source = "sevent_got_png";
            }
        }
    };
    HallModule.prototype.handleGetMyMaps = function () {
        var group = this.panelNotice.getChildByName("fighting_parent")
            .getChildByName("scroll").getChildByName("scroll_group");
        var i = 0;
        var _loop_6 = function (key) {
            var obj = this_6.selectMapData[key];
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/MapViewGroup.exml";
            panelT.name = "p_" + i;
            panelT.x += 40;
            panelT.y += 50 + 10 * i + 255 * i;
            group.addChild(panelT);
            panelT.getChildByName("view_fight_btn").visible = false;
            panelT.getChildByName("view_change_btn").visible = false;
            var panelGroup = panelT.getChildByName("group_1");
            var lb_title = panelGroup.getChildByName("lb_title");
            lb_title.text = obj.mapName;
            var lb_author = panelGroup.getChildByName("lb_author");
            lb_author.text = ConstValue.cacheUserInfo.name;
            var lb_sign = panelGroup.getChildByName("lb_sign");
            lb_sign.text = obj.mapSign;
            var btn_add = panelT.getChildByName("view_add_btn");
            btn_add.label = "邀 请";
            btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                this.closeNice();
                this.selectKey = key;
                var sData_friend_pvp = CommonTools.getDataJsonStr("open1V1RoomByMap", 1, { mapID: parseInt(this.selectKey) });
                ConstValue.P_NET_OBJ.sendData(sData_friend_pvp);
            }, this_6);
            new MapMiniDIYModule(panelT, obj.bgconf, obj.layerconf, 2);
            i++;
        };
        var this_6 = this;
        for (var key in this.selectMapData) {
            _loop_6(key);
        }
    };
    HallModule.prototype.handleSelectMap = function () {
        this.panelNotice.getChildByName("btn_random").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            this.panelNotice.getChildByName("img_left").visible = true;
            this.panelNotice.getChildByName("img_right").visible = false;
        }, this);
        this.panelNotice.getChildByName("btn_mymap").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            this.panelNotice.getChildByName("img_left").visible = false;
            this.panelNotice.getChildByName("img_right").visible = true;
        }, this);
        this.panelNotice.getChildByName("btn_certain_map").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (this.panelNotice.getChildByName("img_left").visible) {
                var sData_friend_pvp = CommonTools.getDataJsonStr("open1V1Room", 1, {});
                ConstValue.P_NET_OBJ.sendData(sData_friend_pvp);
            }
            else {
                var sDataMymap = CommonTools.getDataJsonStr("getMyMaps", 1, {});
                ConstValue.P_NET_OBJ.sendData(sDataMymap);
            }
        }, this);
    };
    HallModule.prototype.handleNoEnd = function (group, parG) {
        var firstX = 25;
        var firstY = 128;
        var i = 1;
        var starDesc = parG.getChildByName("lb_star_total");
        var starBg = parG.getChildByName("lb_bg_total");
        var starKuang = parG.getChildByName("lb_bg_kuang");
        starDesc.text = "获得" + this.barrData.nowstar + "/" + this.barrData.totalstar + "颗星";
        var pro = this.barrData.nowstar / this.barrData.totalstar * 1.0;
        starBg.width = starKuang.width * pro;
        var guankaLayer = parG.getChildByName("guanka_layer");
        guankaLayer.text = "第" + this.barrLayer + "层";
        var _loop_7 = function (idx) {
            var obj = this_7.barrData.barrierList[idx];
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/noEndBarrStartGroup.exml";
            panelT.name = "p_" + i;
            var column = i % 6 == 0 ? 6 : i % 6;
            var row = 0;
            if (i % 6 == 0) {
                row = i / 6.0;
            }
            else {
                row = i / 6.0 + 1;
            }
            panelT.x = firstX + 165 * (column - 1);
            panelT.y = firstY + 120 * (Math.floor(row - 1));
            // panelT.y = firstY;
            group.addChild(panelT);
            var groupT = panelT.getChildByName("group_1");
            var num_lb = groupT.getChildByName("num_lb");
            num_lb.text = obj.barrierNo + "";
            if (obj.isLock == 1) {
                num_lb.visible = false;
            }
            else {
                var barr_lock = groupT.getChildByName("barr_lock");
                barr_lock.visible = false;
            }
            for (var iStar = 1; iStar <= obj.star; iStar++) {
                if (iStar > 3)
                    break;
                var imgStar = groupT.getChildByName("star_0" + iStar);
                imgStar.source = "barr_pass_start_png";
            }
            panelT.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                if (obj.isLock == 1) {
                    CommonTools.addCommonTips(this.tipsPanel, "暂未解锁！");
                    return;
                }
                if (HallModule.curGuide == 5) {
                    if (obj.barrierNo != 1) {
                        CommonTools.addCommonTips(this.tipsPanel, "请按引导指示！");
                        return;
                    }
                    HallModule.curGuide = 0;
                    var sData = CommonTools.getDataJsonStr("getNextGuild", 1, {});
                    ConstValue.P_NET_OBJ.sendData(sData);
                }
                var sData_gobarr = CommonTools.getDataJsonStr("getBarrierInfo", 1, { barrierNo: obj.barrierNo });
                ConstValue.P_NET_OBJ.sendData(sData_gobarr);
            }, this_7);
            i++;
        };
        var this_7 = this;
        for (var idx in this.barrData.barrierList) {
            _loop_7(idx);
        }
        if (this.fixGuide5) {
            this.fixGuide5 = false;
            // new GuideModule(this.context,5,this.panel,this.panelNotice);
        }
    };
    HallModule.prototype.updateShopUI = function (clickFlag) {
        var scrollShop = this.panelNotice.getChildByName("res_scroller");
        scrollShop.viewport.scrollV = 0;
        var groupShop = scrollShop.getChildByName("res_group");
        groupShop.removeChildren();
        var iCount = 0;
        var t_shi = this.panelNotice.getChildByName("t_shi");
        var t_zhuang = this.panelNotice.getChildByName("t_zhuang");
        var t_pao1 = this.panelNotice.getChildByName("t_pao1");
        var t_pao2 = this.panelNotice.getChildByName("t_pao2");
        var t_te = this.panelNotice.getChildByName("t_te");
        var t_xiao = this.panelNotice.getChildByName("t_xiao");
        var t_dao = this.panelNotice.getChildByName("t_dao");
        var t_ju = this.panelNotice.getChildByName("t_ju");
        if (this.shopUIType == 1) {
            iCount = this.dShopOrBagData.lShopInfo.length;
        }
        else {
            iCount = this.dShopOrBagData.lItmeInfo.length;
            if (this.shopItemClickName != "") {
                var idx = parseInt(this.shopItemClickName.replace("shop_item_click", ""));
                if (idx >= iCount) {
                    clickFlag = true;
                    this.shopItemClickName = "";
                }
            }
        }
        for (var i = 0; i < iCount; i++) {
            var panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/ShopItemGroup.exml";
            panelT.name = "p_" + i;
            var xOff = 5;
            if (this.shopUIType == 2)
                xOff = 20;
            panelT.x = xOff + 180 * (i % 3) + 5 * (i % 3);
            panelT.y = 20 + 230 * (Math.floor(i / 3)) + 20 * (Math.floor(i / 3));
            groupShop.addChild(panelT);
            var groupT = panelT.getChildByName("group_1");
            var ttt = groupT.getChildByName("shop_item_bg");
            var payLogo = groupT.getChildByName("shop_item_pay");
            var img_item = groupT.getChildByName("shop_item_icon");
            var labelClick = groupT.getChildByName("shop_item_click");
            labelClick.name = "shop_item_click" + i;
            labelClick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            var labelName = groupT.getChildByName("shop_item_name");
            var labelMoney = groupT.getChildByName("shop_item_money");
            var shop_item_pay = groupT.getChildByName("shop_item_pay");
            if (this.shopUIType == 1) {
                // img_item.source = this.dShopOrBagData.lShopInfo[i].sRes + "_png";
                // labelName.text = this.dShopOrBagData.lShopInfo[i].sName;
                img_item.source = this.getConf("shopData", this.dShopOrBagData.lShopInfo[i].iNo.toString(), "res") + "_png";
                labelName.text = this.getConf("shopData", this.dShopOrBagData.lShopInfo[i].iNo.toString(), "name");
                var moneyText = "";
                if (this.dShopOrBagData.lShopInfo[i].payType == 1) {
                    moneyText = this.dShopOrBagData.lShopInfo[i].NeedCoin;
                }
                else if (this.dShopOrBagData.lShopInfo[i].payType == 2) {
                    moneyText = this.dShopOrBagData.lShopInfo[i].NeedDiamond;
                    shop_item_pay.source = "mini_zuanshi";
                }
                else if (this.dShopOrBagData.lShopInfo[i].payType == 3) {
                    moneyText = this.dShopOrBagData.lShopInfo[i].NeedADTime;
                    shop_item_pay.source = "mini_tv_png";
                }
                labelMoney.text = moneyText;
                if (i == 0) {
                    ttt.source = "shop_item_yes_png";
                    if (clickFlag)
                        this.clickShopItem(labelClick.name);
                }
            }
            else {
                payLogo.visible = false;
                // img_item.source = this.dShopOrBagData.lItmeInfo[i].sRes + "_png";
                // labelName.text = this.dShopOrBagData.lItmeInfo[i].sName;
                img_item.source = this.getConf("ItemData", this.dShopOrBagData.lItmeInfo[i].iNo.toString(), "res") + "_png";
                labelName.text = this.getConf("ItemData", this.dShopOrBagData.lItmeInfo[i].iNo.toString(), "name");
                labelMoney.text = "x " + this.dShopOrBagData.lItmeInfo[i].iNum;
                var ttt_1 = groupT.getChildByName("shop_item_bg");
                var tttName = groupT.getChildByName("shop_item_name");
                tttName.y -= 5;
                if (i == 0) {
                    ttt_1.source = "bag_item_yes_png";
                    if (clickFlag)
                        this.clickShopItem(labelClick.name);
                }
                else {
                    ttt_1.source = "bag_item_not_png";
                }
            }
        }
    };
    HallModule.prototype.handlePanel = function (panelCtx, btnName) {
        switch (btnName) {
            case "btn_skill":
                var parentskill = panelCtx.getChildByName("fighting_parent");
                var scrollskill = parentskill.getChildByName("scroll");
                scrollskill.viewport.scrollV = 0;
                var groupskill = scrollskill.getChildByName("scroll_group");
                groupskill.removeChildren();
                parentskill.getChildByName("btn_tip").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(parentskill.getChildByName("btn_tip"), this);
                this.handleSkill(groupskill, parentskill);
                break;
            case "btn_rank":
                var parent_1 = panelCtx.getChildByName("fighting_parent");
                var scroll_1 = parent_1.getChildByName("scroll");
                scroll_1.viewport.scrollV = 0;
                var group = scroll_1.getChildByName("scroll_group");
                group.removeChildren();
                parent_1.getChildByName("all_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(parent_1.getChildByName("all_rank_lb"), this);
                parent_1.getChildByName("friend_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(parent_1.getChildByName("friend_rank_lb"), this);
                parent_1.getChildByName("match_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(parent_1.getChildByName("match_rank_lb"), this);
                parent_1.getChildByName("lv_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(parent_1.getChildByName("lv_rank_lb"), this);
                parent_1.getChildByName("barrier_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(parent_1.getChildByName("barrier_rank_lb"), this);
                this.handleRank(group, parent_1, 3);
                break;
            case "all_rank_lb":
                var parent_all = panelCtx.getChildByName("fighting_parent");
                var scroll_all = parent_all.getChildByName("scroll");
                scroll_all.viewport.scrollV = 0;
                var group_all = scroll_all.getChildByName("scroll_group");
                group_all.removeChildren();
                parent_all.getChildByName("all_rank_bg").visible = true;
                parent_all.getChildByName("friend_rank_bg").visible = false;
                this.handleRank(group_all, parent_all, 3);
                break;
            case "friend_rank_lb":
                var parent_friend = panelCtx.getChildByName("fighting_parent");
                var scroll_friend = parent_friend.getChildByName("scroll");
                scroll_friend.viewport.scrollV = 0;
                var group_friend = scroll_friend.getChildByName("scroll_group");
                group_friend.removeChildren();
                parent_friend.getChildByName("all_rank_bg").visible = false;
                parent_friend.getChildByName("friend_rank_bg").visible = true;
                break;
            case "match_rank_lb":
            case "getTotalPvpRank":
                var parent_match = panelCtx.getChildByName("fighting_parent");
                var scroll_match = parent_match.getChildByName("scroll");
                scroll_match.viewport.scrollV = 0;
                var group_match = scroll_match.getChildByName("scroll_group");
                group_match.removeChildren();
                this.handleRank(group_match, parent_match, 1);
                break;
            case "lv_rank_lb":
            case "getTotalLvRank":
                var parent_lv = panelCtx.getChildByName("fighting_parent");
                var scroll_lv = parent_lv.getChildByName("scroll");
                scroll_lv.viewport.scrollV = 0;
                var group_lv = scroll_lv.getChildByName("scroll_group");
                group_lv.removeChildren();
                this.handleRank(group_lv, parent_lv, 2);
                break;
            case "barrier_rank_lb":
            case "getTotalGuankaRank":
                var parent_barr = panelCtx.getChildByName("fighting_parent");
                var scroll_barr = parent_barr.getChildByName("scroll");
                scroll_barr.viewport.scrollV = 0;
                var group_barr = scroll_barr.getChildByName("scroll_group");
                group_barr.removeChildren();
                this.handleRank(group_barr, parent_barr, 3);
                break;
            case "btn_map_shop":
            case "btn_map_bag":
                this.panelNotice.getChildByName("btn_one_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                this.panelNotice.getChildByName("btn_two_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                this.panelNotice.getChildByName("btn_three_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                this.panelNotice.getChildByName("btn_four_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(this.panelNotice.getChildByName("btn_buy"), this);
                this.panelNotice.getChildByName("btn_buy").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                this.updateShopUI(true);
                break;
            case "btn_noend_pve":
                var groupNoEnd = panelCtx.getChildByName("fighting_parent");
                groupNoEnd.removeChildren();
                panelCtx.getChildByName("noend_tip").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(panelCtx.getChildByName("noend_tip"), this);
                panelCtx.getChildByName("btn_left").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    if (this.barrLayer == 1) {
                        CommonTools.addCommonTips(this.tipsPanel, "当前为首页关卡");
                        return;
                    }
                    this.barrLayer--;
                    var sData_noend = CommonTools.getDataJsonStr("C2GOpenWujinUI", 1, { diffLevel: this.barrLayer });
                    ConstValue.P_NET_OBJ.sendData(sData_noend);
                }, this);
                panelCtx.getChildByName("btn_right").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    if (this.barrLayer + 1 > this.barrData.totallayer) {
                        CommonTools.addCommonTips(this.tipsPanel, "当前为尾页关卡");
                        return;
                    }
                    this.barrLayer++;
                    var sData_noend = CommonTools.getDataJsonStr("C2GOpenWujinUI", 1, { diffLevel: this.barrLayer });
                    ConstValue.P_NET_OBJ.sendData(sData_noend);
                }, this);
                this.handleNoEnd(groupNoEnd, panelCtx);
                break;
            case "btn_setting":
                if (egret.localStorage.getItem("noVolume") == "1") {
                    this.panelNotice.getChildByName("img_left").visible = false;
                    this.panelNotice.getChildByName("img_right").visible = true;
                }
                else {
                    if (ConstValue.musicOpen) {
                        this.panelNotice.getChildByName("img_left").visible = true;
                        this.panelNotice.getChildByName("img_right").visible = false;
                    }
                    else {
                        this.panelNotice.getChildByName("img_left").visible = false;
                        this.panelNotice.getChildByName("img_right").visible = true;
                    }
                }
                this.panelNotice.getChildByName("btn_open_ms").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    this.panelNotice.getChildByName("img_left").visible = true;
                    this.panelNotice.getChildByName("img_right").visible = false;
                    ConstValue.musicOpen = true;
                    egret.localStorage.setItem("noVolume", "0");
                    // CommonAudioHandle.setVolume(0.6);
                    CommonAudioHandle.play("mainmenu_mp3", 0);
                }, this);
                this.panelNotice.getChildByName("btn_close_ms").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    this.panelNotice.getChildByName("img_left").visible = false;
                    this.panelNotice.getChildByName("img_right").visible = true;
                    ConstValue.musicOpen = false;
                    egret.localStorage.setItem("noVolume", "1");
                    // CommonAudioHandle.setVolume(0);
                    CommonAudioHandle.stopPlay();
                    CommonAudioHandle.curPlayName = "";
                }, this);
                this.panelNotice.getChildByName("login_out").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    CommonAudioHandle.stopPlay();
                    CommonAudioHandle.curPlayName = "";
                    ConstValue.P_NET_OBJ.outLogin();
                }, this);
                break;
            case "SeventDayReward":
                this.handleSeventDay();
                break;
            case "showUpgradeReward":
                this.handleLvReward();
                break;
            case "getMyMaps":
                this.handleGetMyMaps();
                break;
            case "btn_friend_pvp":
                this.handleSelectMap();
                break;
            case "btn_img_info":
                var parent_class = panelCtx.getChildByName("fighting_parent");
                var scroll_class = parent_class.getChildByName("scroll");
                var group_class = scroll_class.getChildByName("scroll_group");
                group_class.removeChildren();
                this.handleRoleClass(group_class, parent_class);
                break;
            case "btn_noticetip":
                var clearGroup = panelCtx.getChildByName("group_clear");
                clearGroup.getChildByName("lb_clear_click").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                CommonButtonHandle.beginTouch(clearGroup.getChildByName("lb_clear_click"), this);
                if (ConstValue.P_IS_DEBUG || 1 < 2) {
                    var iCount = 10;
                    var iOffY = 72;
                    var scroll_2 = this.panelNotice.getChildByName("left_scroller");
                    var group_2 = scroll_2.getChildByName("left_group");
                    var lb_title = this.panelNotice.getChildByName("lb_title");
                    lb_title.text = "标题：";
                    var lb_mail_info = this.panelNotice.getChildByName("lb_mail_info");
                    lb_mail_info.text = "";
                    for (var i = 0; i < iCount; i++) {
                        var panelT = new eui.Panel();
                        panelT.skinName = "resource/eui_skins/UserUI/NoticeGroup.exml";
                        panelT.name = "p_" + i;
                        panelT.y = i * 72;
                        group_2.addChild(panelT);
                        var groupT = panelT.getChildByName("group_1");
                        groupT.getChildByName("img_yellow").visible = false;
                        var labelTitle = groupT.getChildByName("lb_title");
                        labelTitle.text = "喜报！！" + (i + 1);
                        var labelClick = groupT.getChildByName("lb_notice_click");
                        labelClick.name = "lb_notice_click" + i;
                        labelClick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                        CommonButtonHandle.beginTouch(labelClick, this);
                    }
                }
                else {
                    var sData = CommonTools.getDataJsonStr("getAllMail", 1, { roleId: ConstValue.cacheUserInfo.id });
                    ConstValue.P_NET_OBJ.sendData(sData);
                }
                break;
            default:
                CommonTools.log("22222222 default");
                break;
        }
    };
    HallModule.prototype.updateCoin = function () {
        var lbCoin = this.panel.getChildByName("coin_num_lb");
        lbCoin.text = ConstValue.cacheUserInfo.coin;
        var lbZuan = this.panel.getChildByName("zuan_num_lb");
        lbZuan.text = ConstValue.cacheUserInfo.diamond;
    };
    /**
     * 回包处理
     */
    HallModule.prototype.handlePacket = function (jsonObj) {
        return __awaiter(this, void 0, void 0, function () {
            var lnftInfo, count, _loop_8, this_8, i, lMarketData, count, i, lOwnNftData, count, i, iCount, groupNoEnd, sData, userInfo, sData, imgHead, lbName, platform_1, lbLv, lbExp, lbCoin, lbZuan;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(jsonObj.f == "setName")) return [3 /*break*/, 1];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                            CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_MODIFY_FAIL);
                        }
                        else {
                            CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_SEND_MODIFY_SUCCESS);
                            this.panelNotice.getChildByName("nickName_lb").text = jsonObj.d.name;
                            ConstValue.cacheUserInfo.name = jsonObj.d.name;
                            this.closeSub();
                        }
                        return [3 /*break*/, 37];
                    case 1:
                        if (!(jsonObj.f == "gmFunc")) return [3 /*break*/, 2];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                            CommonTools.addCommonTips(this.tipsPanel, "执行失败");
                        }
                        else {
                            CommonTools.addCommonTips(this.tipsPanel, "执行成功");
                        }
                        return [3 /*break*/, 37];
                    case 2:
                        if (!(jsonObj.f == "contract")) return [3 /*break*/, 3];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            ContractSol.maincoin_increaseApproval(jsonObj.d.to, jsonObj.d.num);
                        }
                        return [3 /*break*/, 37];
                    case 3:
                        if (!(jsonObj.f == "createNft")) return [3 /*break*/, 4];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            lnftInfo = jsonObj.d.nftInfo;
                            count = 1;
                            _loop_8 = function (i) {
                                var obj = lnftInfo[i];
                                FightingModule.Delay(count * 500, function () {
                                    this.createMergeSuccessT(obj);
                                }, this_8);
                                count += 1;
                            };
                            this_8 = this;
                            for (i in lnftInfo) {
                                _loop_8(i);
                            }
                            ConstValue.cacheContract["nftLen"] = count;
                        }
                        return [3 /*break*/, 37];
                    case 4:
                        if (!(jsonObj.f == "getNftMarket" || jsonObj.f == "BuyNft")) return [3 /*break*/, 5];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            lMarketData = jsonObj.d.lMarketData;
                            count = 0;
                            for (i in lMarketData) {
                                count += 1;
                            }
                            if (count > 0) {
                                ConstValue.cacheContract["nftLen"] = count;
                                this.horseMarketData = lMarketData;
                            }
                            else {
                                this.horseMarketData = null;
                            }
                            if (this.curPage == 5 && this.subCurPage == 2)
                                this.changePage("rank_head_02");
                        }
                        return [3 /*break*/, 37];
                    case 5:
                        if (!(jsonObj.f == "getOwnNft")) return [3 /*break*/, 6];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            lOwnNftData = jsonObj.d.lOwnNftData;
                            count = 0;
                            for (i in lOwnNftData) {
                                count += 1;
                            }
                            if (count > 0) {
                                this.horseOwnData = lOwnNftData;
                            }
                            else {
                                this.horseOwnData = null;
                            }
                            if (this.curPage == 5 && this.subCurPage == 3)
                                this.changePage("rank_head_03");
                        }
                        return [3 /*break*/, 37];
                    case 6:
                        if (!(jsonObj.f == "AddMainCoin")) return [3 /*break*/, 7];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            this.updateMaincoin(jsonObj.d.mainCoin, false);
                            FightingModule.Delay(60000, function () {
                                ContractSol.maincoin_balanceOf(ContractSol.sender);
                            }, this);
                        }
                        return [3 /*break*/, 37];
                    case 7:
                        if (!(jsonObj.f == "AddSubCoin")) return [3 /*break*/, 8];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            this.updateSubcoin(jsonObj.d.subCoin, false);
                            FightingModule.Delay(60000, function () {
                                ContractSol.subcoin_balanceOf(ContractSol.sender);
                            }, this);
                        }
                        return [3 /*break*/, 37];
                    case 8:
                        if (!(jsonObj.f == "getPvpRankThree")) return [3 /*break*/, 9];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                        }
                        return [3 /*break*/, 37];
                    case 9:
                        if (!(jsonObj.f == "getHelp" || jsonObj.f == "getGonggao")) return [3 /*break*/, 10];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            if (ConstValue.p_USE_WALLET == 1)
                                return [2 /*return*/];
                            CommonTools.addTipsPanel(this.context, jsonObj.d.name, jsonObj.d.content);
                        }
                        return [3 /*break*/, 37];
                    case 10:
                        if (!(jsonObj.f == "Room1v1Dismiss")) return [3 /*break*/, 11];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            CommonTools.addCommonTips(this.tipsPanel, "房间解散");
                            Main.roomkey = null;
                            if (this.showWxVsPanel != null)
                                CommonTools.niceTip(this.showWxVsPanel, 2, this);
                        }
                        return [3 /*break*/, 37];
                    case 11:
                        if (!(jsonObj.f == "WaitingInfo")) return [3 /*break*/, 12];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                            CommonTools.addCommonTips(this.tipsPanel, ConstValue.P_ENTER_ROOM_FAIL);
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
                        return [3 /*break*/, 37];
                    case 12:
                        if (!(jsonObj.f == "syncMapData")) return [3 /*break*/, 17];
                        if (!(jsonObj.m != "" || jsonObj.s != 1)) return [3 /*break*/, 13];
                        return [3 /*break*/, 16];
                    case 13:
                        if (!(ConstValue.cacheKeyGroup["fighting"] == null)) return [3 /*break*/, 15];
                        this.context.dDataInfo = jsonObj.d;
                        return [4 /*yield*/, this.context.loadResource("fighting", 6)];
                    case 14:
                        _a.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        if (ConstValue.P_FIGHT_OBJ == null) {
                            ConstValue.P_FIGHT_OBJ = new FightingModule(this.context);
                        }
                        ConstValue.P_FIGHT_OBJ.initMapData(jsonObj.d);
                        if (FightingModule.readyTwo && !FightingModule.readyRes) {
                            ConstValue.P_FIGHT_OBJ.releaseVsPanel();
                            ConstValue.P_FIGHT_OBJ.updateInfo(this.context.dDataInfo2);
                        }
                        _a.label = 16;
                    case 16: return [3 /*break*/, 37];
                    case 17:
                        if (!(jsonObj.f == "openDiyMapUI")) return [3 /*break*/, 18];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            if (ConstValue.P_MAP_OBJ == null) {
                                ConstValue.P_MAP_OBJ = new MapDIYModule(this.context, jsonObj.d, 1);
                                // new MapMiniDIYModule(this.context,jsonObj.d);
                            }
                        }
                        return [3 /*break*/, 37];
                    case 18:
                        if (!(jsonObj.f == "showAllClassList" || jsonObj.f == "reflashClassList")) return [3 /*break*/, 19];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            this.roleClassData = jsonObj.d.allRoleList;
                            if (this.panelNotice == null) {
                                this.showNotice("resource/eui_skins/UserUI/RoleSelectUI.exml", "btn_img_info");
                            }
                            else {
                                this.updateRoleClass(this.roleSelectIdx);
                            }
                        }
                        return [3 /*break*/, 37];
                    case 19:
                        if (!(jsonObj.f == "openShopUI")) return [3 /*break*/, 20];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            this.dShopOrBagData = jsonObj.d;
                            this.shopUIType = 1;
                            if (this.panelNotice == null) {
                                this.showNotice("resource/eui_skins/UserUI/PayShopUI.exml", "btn_map_shop");
                            }
                            else {
                                this.updateShopUI(false);
                                iCount = this.dShopOrBagData.lShopInfo.length;
                                if (iCount > 0)
                                    this.clickShopItem(this.shopItemClickName);
                            }
                        }
                        return [3 /*break*/, 37];
                    case 20:
                        if (!(jsonObj.f == "openBagUI")) return [3 /*break*/, 21];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            // if(jsonObj.d.lItmeInfo[0] == null){
                            // 	CommonTools.addCommonTips(this.tipsPanel,"暂无数据");
                            // 	return
                            // }
                            this.dShopOrBagData = jsonObj.d;
                            this.shopUIType = 2;
                            if (this.panelNotice == null) {
                                this.showNotice("resource/eui_skins/UserUI/BagUI.exml", "btn_map_bag");
                            }
                            else {
                                this.updateShopUI(false);
                                this.clickShopItem(this.shopItemClickName);
                            }
                        }
                        return [3 /*break*/, 37];
                    case 21:
                        if (!(jsonObj.f == "Buy")) return [3 /*break*/, 22];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            if (jsonObj.d.err == 0) {
                                ConstValue.cacheUserInfo.coin = jsonObj.d.after_buy_data.coin;
                                ConstValue.cacheUserInfo.diamond = jsonObj.d.after_buy_data.diamond;
                                this.updateCoin();
                            }
                        }
                        return [3 /*break*/, 37];
                    case 22:
                        if (!(jsonObj.f == "getMyMaps")) return [3 /*break*/, 23];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            FightingModule.Delay(500, function () {
                                if (this.maskBg != null)
                                    this.context.removeChild(this.maskBg);
                                this.maskBg = null;
                                if (this.panelNotice != null)
                                    this.context.removeChild(this.panelNotice);
                                this.panelNotice = null;
                                this.selectMapData = jsonObj.d;
                                this.showNotice("resource/eui_skins/UserUI/MapViewUI.exml", "getMyMaps");
                            }, this);
                        }
                        return [3 /*break*/, 37];
                    case 23:
                        if (!(jsonObj.f == "C2GOpenWujinUI")) return [3 /*break*/, 24];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            this.barrData = jsonObj.d;
                            if (this.panelNotice != null) {
                                groupNoEnd = this.panelNotice.getChildByName("fighting_parent");
                                groupNoEnd.removeChildren();
                                this.handleNoEnd(groupNoEnd, this.panelNotice);
                            }
                            else {
                                this.showNotice("resource/eui_skins/UserUI/noEndBarrUI.exml", "btn_noend_pve");
                                if (HallModule.curGuide == 4) {
                                    HallModule.curGuide = 0;
                                    if (!this.fixGuide5) {
                                        sData = CommonTools.getDataJsonStr("getNextGuild", 1, {});
                                        ConstValue.P_NET_OBJ.sendData(sData);
                                    }
                                }
                            }
                        }
                        return [3 /*break*/, 37];
                    case 24:
                        if (!(jsonObj.f == "SeventDayReward")) return [3 /*break*/, 25];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            if (ConstValue.p_USE_WALLET == 1)
                                return [2 /*return*/];
                            if (!HallModule.isSafeArea)
                                return [2 /*return*/];
                            this.seventData = jsonObj.d;
                            if (this.curButton != null && this.curButton != "SeventDayReward")
                                return [2 /*return*/];
                            if (this.panelNotice == null) {
                                this.showNotice("resource/eui_skins/UserUI/SeventDayGet.exml", jsonObj.f);
                            }
                            else {
                                this.handleSeventDay();
                            }
                        }
                        return [3 /*break*/, 37];
                    case 25:
                        if (!(jsonObj.f == "G2C_getWXInfo")) return [3 /*break*/, 29];
                        if (!(jsonObj.m != "" || jsonObj.s != 1)) return [3 /*break*/, 26];
                        return [3 /*break*/, 28];
                    case 26:
                        if (ConstValue.p_LOGIN_MODEL != 2)
                            return [2 /*return*/]; //微信渠道才有
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 27:
                        userInfo = _a.sent();
                        sData = CommonTools.getDataJsonStr("saveWXInfo", 1, { head: userInfo.avatarUrl, name: userInfo.nickName, gender: userInfo.gender });
                        ConstValue.P_NET_OBJ.sendData(sData);
                        _a.label = 28;
                    case 28: return [3 /*break*/, 37];
                    case 29:
                        if (!(jsonObj.f == "saveWXInfo")) return [3 /*break*/, 30];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            imgHead = this.panel.getChildByName("img_info");
                            if (jsonObj.d.head != "") {
                                imgHead.source = jsonObj.d.head;
                                ConstValue.cacheUserInfo.headPic = jsonObj.d.head;
                            }
                            lbName = this.panel.getChildByName("hall_id_lb");
                            lbName.text = jsonObj.d.name;
                            ConstValue.cacheUserInfo.name = jsonObj.d.name;
                        }
                        return [3 /*break*/, 37];
                    case 30:
                        if (!(jsonObj.f == "showUpgradeReward")) return [3 /*break*/, 31];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            this.lvRewardData = jsonObj.d.LvInfo;
                            if (this.panelNotice == null) {
                                this.showNotice("resource/eui_skins/UserUI/RewardGet.exml", jsonObj.f);
                            }
                            else {
                                this.handleLvReward();
                            }
                        }
                        return [3 /*break*/, 37];
                    case 31:
                        if (!(jsonObj.f == "GuildInfo")) return [3 /*break*/, 32];
                        if (jsonObj.m != "" || jsonObj.s != 1) {
                        }
                        else {
                            if (this.seventData != null) {
                                HallModule.curGuide = jsonObj.d.id;
                            }
                            else {
                                if (jsonObj.d.id == 5 && this.panelNotice == null) {
                                    this.fixGuide5 = true;
                                    // new GuideModule(this.context,4,this.panel,this.panelNotice);
                                    return [2 /*return*/];
                                }
                                // if(jsonObj.d.id != 3)new GuideModule(this.context,jsonObj.d.id,this.panel,this.panelNotice);
                            }
                        }
                        return [3 /*break*/, 37];
                    case 32:
                        if (!(jsonObj.f == "open1V1Room" || jsonObj.f == "open1V1RoomByMap")) return [3 /*break*/, 36];
                        if (!(jsonObj.m != "" || jsonObj.s != 1)) return [3 /*break*/, 33];
                        return [3 /*break*/, 35];
                    case 33:
                        CommonTools.log("shareAppMessage-------1");
                        Main.roomkey = jsonObj.d.roomkey;
                        platform_1 = window.platform;
                        return [4 /*yield*/, platform_1.shareAppMessage(jsonObj.d.roomkey)];
                    case 34:
                        _a.sent();
                        _a.label = 35;
                    case 35: return [3 /*break*/, 37];
                    case 36:
                        if (jsonObj.f == "showMatch1v1RoomUI") {
                            if (jsonObj.m != "" || jsonObj.s != 1) {
                            }
                            else {
                                if (this.panelNotice != null) {
                                    if (this.maskBg != null)
                                        this.context.removeChild(this.maskBg);
                                    this.maskBg = null;
                                    this.context.removeChild(this.panelNotice);
                                    this.panelNotice = null;
                                }
                                if (jsonObj.d.roomID != null) {
                                    Main.roomkey = jsonObj.d.roomID;
                                }
                                if (this.showWxVsPanel == null) {
                                    this.showWxVsUI(jsonObj.d);
                                }
                                else {
                                    this.updateWxVsUI(jsonObj.d);
                                }
                            }
                        }
                        else if (jsonObj.f == "getRoleDetail") {
                            if (jsonObj.m != "" || jsonObj.s != 1) {
                            }
                            else {
                                this.roleDetailData = jsonObj.d;
                                this.showRoleInfoUI();
                            }
                        }
                        else if (jsonObj.f == "getBarrierInfo") {
                            if (jsonObj.m != "" || jsonObj.s != 1) {
                            }
                            else {
                                this.showBarrinfoUI(jsonObj.d);
                            }
                        }
                        else if (jsonObj.f == "C2G_Open_MainUI") {
                            if (jsonObj.m != "" || jsonObj.s != 1) {
                            }
                            else {
                                this.skillData = jsonObj.d;
                                if (this.panelNotice == null) {
                                    this.showNotice("resource/eui_skins/UserUI/SkillUI.exml", "btn_skill");
                                }
                                else {
                                    this.handlePanel(this.panelNotice, "btn_skill");
                                }
                            }
                        }
                        else if (jsonObj.f == "reflashRoleData") {
                            if (jsonObj.m != "" || jsonObj.s != 1) {
                            }
                            else {
                                ConstValue.cacheUserInfo.curexp = jsonObj.d.curexp;
                                ConstValue.cacheUserInfo.lv = jsonObj.d.lv;
                                ConstValue.cacheUserInfo.coin = jsonObj.d.coin;
                                ConstValue.cacheUserInfo.diamond = jsonObj.d.diamond;
                                ConstValue.cacheUserInfo.maxExp = jsonObj.d.exp;
                                lbLv = this.panel.getChildByName("img_lv_lb");
                                lbLv.text = ConstValue.cacheUserInfo.lv;
                                lbExp = this.panel.getChildByName("img_exp_value");
                                lbExp.width = ConstValue.cacheUserInfo.curexp * 1.0 / ConstValue.cacheUserInfo.maxExp * lbExp.width;
                                lbCoin = this.panel.getChildByName("coin_num_lb");
                                lbCoin.text = ConstValue.cacheUserInfo.coin;
                                lbZuan = this.panel.getChildByName("zuan_num_lb");
                                lbZuan.text = ConstValue.cacheUserInfo.diamond;
                            }
                        }
                        else if (jsonObj.f == "openRnakUI" || jsonObj.f == "getTotalPvpRank" || jsonObj.f == "getTotalLvRank" || jsonObj.f == "getTotalGuankaRank") {
                            if (jsonObj.m != "" || jsonObj.s != 1) {
                            }
                            else {
                                this.lRank = jsonObj.d.lRank;
                                this.lMyRank = jsonObj.d.myRank;
                                this.sMyRankDesc = jsonObj.d.myRankDesc;
                                if (jsonObj.f == "openRnakUI") {
                                    this.showNotice("resource/eui_skins/UserUI/NewRankUI.exml", "btn_rank");
                                }
                                else {
                                    this.handlePanel(this.panelNotice, jsonObj.f);
                                }
                                CommonTools.log("this.lRank-------------" + this.lRank);
                            }
                        }
                        _a.label = 37;
                    case 37: return [2 /*return*/];
                }
            });
        });
    };
    HallModule.prototype.closeNotice = function () {
        this.tipsPanel = this.panel;
        CommonTools.niceTip(this.panelNotice, 2, this);
    };
    HallModule.prototype.closeWxVsUI = function () {
        this.tipsPanel = this.panel;
        if (this.isMainRoomer) {
            var sData = CommonTools.getDataJsonStr("remove1V1Room", 1, {});
            ConstValue.P_NET_OBJ.sendData(sData);
            this.isMainRoomer = false;
        }
        else {
            Main.roomkey = null;
            if (this.showWxVsPanel != null)
                CommonTools.niceTip(this.showWxVsPanel, 2, this);
            var sData = CommonTools.getDataJsonStr("leaveGame1v1", 1, { fightRoomKey: Main.roomkey });
            ConstValue.P_NET_OBJ.sendData(sData);
        }
    };
    HallModule.prototype.closeNice = function () {
        this.moveLvGet = true;
        ConstValue.videoIndx = 0;
        if (this.showWxVsPanel != null && this.panelNotice == null) {
            if (this.maskBg2 != null)
                this.context.removeChild(this.maskBg2);
            this.maskBg2 = null;
            this.context.removeChild(this.showWxVsPanel);
            this.showWxVsPanel = null;
        }
        else if (this.panelSub != null) {
            if (this.bodyAniDown2 != null) {
                this.panelSub.removeChild(this.bodyAniDown2);
                this.bodyAniDown2 = null;
            }
            if (this.maskBg2 != null)
                this.context.removeChild(this.maskBg2);
            this.maskBg2 = null;
            this.context.removeChild(this.panelSub);
            this.panelSub = null;
        }
        else {
            if (this.curButton == "btn_setting") {
                this.panelNotice.getChildByName("btn_open_ms").removeEventListener(egret.TouchEvent.TOUCH_TAP);
                this.panelNotice.getChildByName("btn_close_ms").removeEventListener(egret.TouchEvent.TOUCH_TAP);
            }
            else if (this.curButton == "getMyMaps") {
                var group = this.panelNotice.getChildByName("fighting_parent")
                    .getChildByName("scroll").getChildByName("scroll_group");
                var iChilds = group.numChildren;
                for (var i = 0; i < iChilds; i++) {
                    var obj = group.getChildAt(i);
                    obj.removeChildren();
                }
                group.removeChildren();
            }
            else if (this.curButton == "SeventDayReward") {
                this.seventData = null;
            }
            this.curButton = null;
            if (this.bodyAniDown != null) {
                this.panelNotice.removeChild(this.bodyAniDown);
                this.bodyAniDown = null;
            }
            if (this.panelNotice != null)
                this.context.removeChild(this.panelNotice);
            if (this.maskBg != null)
                this.context.removeChild(this.maskBg);
            this.maskBg = null;
            this.panelNotice = null;
            this.dShopOrBagData = null;
            this.shopPageType = 0;
            this.shopItemNo = 0;
            this.shopPayType = 0;
            this.shopItemItemID = 0;
            this.shopItemName = "";
            this.shopItemClickName = "";
            if (this.seventData != null)
                this.showNotice("resource/eui_skins/UserUI/SeventDayGet.exml", "SeventDayReward");
        }
        if (HallModule.curGuide > 0) {
            if (HallModule.curGuide == 5) {
                this.fixGuide5 = true;
                HallModule.curGuide = 4;
            }
            // new GuideModule(this.context,HallModule.curGuide,this.panel,this.panelNotice);
        }
    };
    HallModule.prototype.closeSub = function () {
        this.tipsPanel = this.panel;
        if (this.maskBg2 != null)
            this.context.removeChild(this.maskBg2);
        this.maskBg2 = null;
        if (this.panelSub != null)
            this.context.removeChild(this.panelSub);
        this.panelSub = null;
    };
    HallModule.prototype.clear = function () {
        this.removeGuide();
        this.panel.removeChild(this.btnMatchAnim);
        this.btnMatchAnim = null;
        this.panel.removeChild(this.btnWxPvpAnim);
        this.btnWxPvpAnim = null;
        this.panel.removeChild(this.btnPveAnim);
        this.btnPveAnim = null;
        egret.Tween.removeTweens(this.notify_lb);
        if (this.maskNew != null)
            this.context.removeChild(this.maskNew);
        this.maskNew = null;
        this.closeSub();
        if (this.showWxVsPanel != null) {
            this.context.removeChild(this.showWxVsPanel);
            this.showWxVsPanel = null;
        }
        if (this.panelNotice) {
            var groupNoEnd = this.panelNotice.getChildByName("fighting_parent");
            if (groupNoEnd != null) {
                groupNoEnd.removeChildren();
            }
            this.context.removeChild(this.panelNotice);
            this.panelNotice = null;
        }
        if (this.panel != null) {
            this.context.removeChild(this.panel);
            this.panel = null;
        }
    };
    HallModule.isNoEnd = false;
    HallModule.isTrainBrr = false;
    HallModule.pushBtnData = null;
    HallModule.curGuide = 0;
    HallModule.isInitLogin = true;
    HallModule.isSafeArea = true;
    return HallModule;
}());
__reflect(HallModule.prototype, "HallModule");
//# sourceMappingURL=HallModule.js.map