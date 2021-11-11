var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 引导模块
 */
var GuideModule = (function () {
    /**
     * 构造函数
     */
    function GuideModule(ct, iGuideNo, panel, panelNotice) {
        this.iGuideNo = 0;
        this.curIdx = 0;
        this.maxIdx = 0;
        this.guide_tip_1 = {
            "3": { "tip_png": "guide_tip_diy_png", "btn_name": "btn_map_diy", "btn_png": "new_ui_14_png" },
            "5": { "tip_png": "guide_tip_friend_png", "btn_name": "btn_friend_pvp", "btn_png": "new_ui_03_png" },
            "1": { "tip_png": "guide_tip_match_png", "btn_name": "btn_match_pvp", "btn_png": "new_ui_13_png" },
            "2": { "tip_png": "guide_tip_noend_png", "btn_name": "btn_noend_pve", "btn_png": "new_ui_12_png" },
            "6": { "tip_png": "guide_tip_role_png", "btn_name": "btn_select_role", "btn_png": "new_ui_19_01_png" },
            "4": { "tip_png": "guide_tip_train_png", "btn_name": "btn_training_pve", "btn_png": "new_ui_02_png" },
        };
        this.context = ct;
        this.iGuideNo = iGuideNo;
        this.panel = panel;
        this.panelNotice = panelNotice;
        this.createGuide();
    }
    GuideModule.prototype.createGuide = function () {
        switch (this.iGuideNo) {
            case 1:
                this.maxIdx = 6;
                this.showNo1();
                break;
            case 2:
                this.showNo2();
                break;
            case 3:
                this.maxIdx = 4;
                this.showNo3();
                break;
            case 4:
                this.showNo4();
                break;
            case 5:
                this.showNo5();
                break;
            case 6:
                this.showNo6();
                break;
            case 7:
                this.showNo7();
                break;
            case 8:
                this.showNo8();
                break;
            case 9:
                this.showNo9();
                break;
            case 10:
                this.showNo10();
                break;
            case 999:
                this.maxIdx = 2;
                this.maskBgmask = new eui.Image("guide_mask_png");
                this.maskBgmask.width = this.context.getStageWidth();
                this.maskBgmask.height = this.context.getStageHeight();
                this.context.addChild(this.maskBgmask);
                this.showNo999();
                break;
            default:
                break;
        }
    };
    GuideModule.prototype.getTip = function () {
        if (this.iGuideNo == 1) {
            return this.guide_tip_1[this.curIdx + ""]["tip_png"];
        }
        return "";
    };
    GuideModule.prototype.getBtn = function () {
        if (this.iGuideNo == 1) {
            return this.guide_tip_1[this.curIdx + ""]["btn_name"];
        }
        else if (this.iGuideNo == 2) {
            return "btn_training_pve";
        }
        else if (this.iGuideNo == 4) {
            return "btn_noend_pve";
        }
        else if (this.iGuideNo == 5) {
            return "p_1";
        }
        else if (this.iGuideNo == 6) {
            return "btn_match_pvp";
        }
        else if (this.iGuideNo == 7) {
            return "btn_map_diy";
        }
        else if (this.iGuideNo == 8) {
            return "btn_friend_pvp";
        }
        else if (this.iGuideNo == 9) {
            return "btn_select_role";
        }
        else if (this.iGuideNo == 10) {
            return "btn_skill";
        }
        return "";
    };
    GuideModule.prototype.getBtnPng = function () {
        if (this.iGuideNo == 1) {
            return this.guide_tip_1[this.curIdx + ""]["btn_png"];
        }
        else {
            return "guide_point_png";
        }
    };
    GuideModule.prototype.showNo1 = function () {
        CommonTools.log('------xxxx--111111');
        this.curIdx++;
        if (this.curIdx > this.maxIdx) {
            this.context.removeChild(this.maskBg);
            this.maskBg = null;
            this.context.removeChild(this.btn);
            this.btn = null;
            this.context.removeChild(this.tip);
            this.tip = null;
            HallModule.curGuide = 0;
            var sData = CommonTools.getDataJsonStr("getNextGuild", 1, {});
            ConstValue.P_NET_OBJ.sendData(sData);
            return;
        }
        if (this.maskBg == null) {
            this.maskBg = new eui.Image("guide_mask_png");
            this.maskBg.width = this.context.getStageWidth();
            this.maskBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskBg);
            this.maskBg.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                this.showNo1();
            }, this);
        }
        if (this.btn != null) {
            this.context.removeChild(this.btn);
            this.btn = null;
            this.context.removeChild(this.tip);
            this.tip = null;
        }
        this.btn = new eui.Image(this.getBtnPng());
        var x = this.panel.getChildByName(this.getBtn()).x;
        var y = this.panel.getChildByName(this.getBtn()).y;
        var width = this.panel.getChildByName(this.getBtn()).width;
        var height = this.panel.getChildByName(this.getBtn()).height;
        if (ConstValue.deviveNormalScale > 2) {
            x = this.panel.getChildByName(this.getBtn()).x;
            y = this.panel.getChildByName(this.getBtn()).y - 70;
            width = this.panel.getChildByName(this.getBtn()).width * ConstValue.deviveScale;
            height = this.panel.getChildByName(this.getBtn()).height * ConstValue.deviveScale;
        }
        this.btn.x = x;
        this.btn.y = y;
        this.btn.width = width;
        this.btn.height = height;
        this.context.addChild(this.btn);
        var tipOffx = 0;
        var tipOffy = 0;
        this.tip = new eui.Image(this.getTip());
        if (this.curIdx == 5) {
            tipOffx = 0;
            tipOffy = tipOffy - this.btn.height - 164;
        }
        else if (this.curIdx == 1) {
            tipOffx = tipOffx - this.btn.width - 277;
            tipOffy = tipOffy - this.btn.height - 60;
        }
        else if (this.curIdx == 2) {
            tipOffx = tipOffx - this.btn.width - 277;
            tipOffy = tipOffy - this.btn.height - 60;
        }
        else if (this.curIdx == 6) {
            tipOffx = tipOffx - this.btn.width - 340;
            tipOffy = tipOffy - this.btn.height - 129;
        }
        else if (this.curIdx == 4) {
            tipOffx = tipOffx - this.btn.width - 277;
        }
        this.tip.x = this.btn.x + this.btn.width + tipOffx;
        this.tip.y = this.btn.y + this.btn.height + tipOffy;
        this.context.addChild(this.tip);
    };
    GuideModule.prototype.addGuideTips = function (type) {
        this.panelT = new eui.Panel();
        this.panelT.skinName = "resource/eui_skins/UserUI/GuideTipsGroup.exml";
        this.panelT.name = "p_" + type;
        var group = this.panelT.getChildByName("group_1");
        var tip = group.getChildByName("tip");
        tip.text = GuideModule.guide_tip_new[type].tip;
        this.panelT.x = ConstValue.P_HALL_OBJ.getTipXY()[0];
        if (ConstValue.deviveNormalScale > 2) {
            this.panelT.y += 140;
            this.panelT.x += 90;
        }
        else {
            this.panelT.y += 100;
            this.panelT.x += 140;
        }
        this.panel.addChild(this.panelT);
        this.saveKey = GuideModule.guide_tip_new[type].saveKey;
    };
    GuideModule.prototype.removeTips = function () {
        if (this.panelT != null) {
            this.panel.removeChild(this.panelT);
            this.panelT = null;
        }
        if (this.btn != null) {
            egret.Tween.removeTweens(this.btn);
            this.panel.removeChild(this.btn);
            this.twJump = null;
        }
        if (this.iGuideNo == 9) {
            CommonTools.removeShake(this.panel.getChildByName("btn_select_role"));
        }
        if (this.iGuideNo == 10) {
            CommonTools.removeShake(this.panel.getChildByName("btn_skill"));
        }
        egret.localStorage.setItem(this.saveKey, "1");
    };
    GuideModule.prototype.showNo2 = function () {
        HallModule.curGuide = 2;
        this.btn = new eui.Image(this.getBtnPng());
        var x = this.panel.getChildByName(this.getBtn()).x - 30;
        var y = this.panel.getChildByName(this.getBtn()).y + 100;
        if (ConstValue.deviveNormalScale > 2) {
            x = this.panel.getChildByName(this.getBtn()).x - 30;
            y = this.panel.getChildByName(this.getBtn()).y + 100;
        }
        this.btn.x = x;
        this.btn.y = y;
        this.panel.addChild(this.btn);
        this.twJump = egret.Tween.get(this.btn);
        for (var i = 0; i < 100; i++) {
            this.twJump.to({ y: this.btn.y - 50 }, 400);
            this.twJump.to({ y: this.btn.y }, 400);
        }
        this.addGuideTips("2");
    };
    GuideModule.prototype.showNo3 = function () {
        this.curIdx++;
        if (this.curIdx > this.maxIdx) {
            this.context.removeChild(this.maskBg);
            this.maskBg = null;
            HallModule.curGuide = 0;
            var sData = CommonTools.getDataJsonStr("getNextGuild", 1, {});
            ConstValue.P_NET_OBJ.sendData(sData);
            return;
        }
        if (this.maskBg != null) {
            this.context.removeChild(this.maskBg);
            this.maskBg = null;
        }
        this.maskBg = new eui.Image("guide_0" + this.curIdx + "_png");
        this.maskBg.width = this.context.getStageWidth();
        this.maskBg.height = this.context.getStageHeight();
        this.context.addChild(this.maskBg);
        this.maskBg.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            this.showNo3();
        }, this);
    };
    GuideModule.prototype.showNo4 = function () {
        HallModule.curGuide = 4;
        this.btn = new eui.Image(this.getBtnPng());
        var x = this.panel.getChildByName(this.getBtn()).x + 120;
        var y = this.panel.getChildByName(this.getBtn()).y + 480;
        if (ConstValue.deviveNormalScale > 2) {
            x = this.panel.getChildByName(this.getBtn()).x + 120;
            y = this.panel.getChildByName(this.getBtn()).y + 380;
        }
        this.btn.x = x;
        this.btn.y = y;
        this.panel.addChild(this.btn);
        this.twJump = egret.Tween.get(this.btn);
        for (var i = 0; i < 100; i++) {
            this.twJump.to({ y: this.btn.y - 50 }, 400);
            this.twJump.to({ y: this.btn.y }, 400);
        }
        this.addGuideTips("4");
    };
    GuideModule.prototype.showNo5 = function () {
        HallModule.curGuide = 5;
        this.btn = new eui.Image(this.getBtnPng());
        var parent = this.panelNotice.getChildByName("fighting_parent");
        var x = parent.x + parent.getChildByName(this.getBtn()).x + 20;
        var y = parent.y + parent.getChildByName(this.getBtn()).y + 170;
        if (ConstValue.deviveNormalScale > 2) {
            x = parent.x + parent.getChildByName(this.getBtn()).x + 20;
            y = parent.y + parent.getChildByName(this.getBtn()).y + 160;
        }
        this.btn.x = x;
        this.btn.y = y;
        this.panelNotice.addChild(this.btn);
        this.twJump = egret.Tween.get(this.btn);
        for (var i = 0; i < 100; i++) {
            this.twJump.to({ y: this.btn.y - 50 }, 400);
            this.twJump.to({ y: this.btn.y }, 400);
        }
    };
    GuideModule.prototype.showNo6 = function () {
        HallModule.curGuide = 6;
        this.btn = new eui.Image(this.getBtnPng());
        var x = this.panel.getChildByName(this.getBtn()).x + 80;
        var y = this.panel.getChildByName(this.getBtn()).y + 350;
        if (ConstValue.deviveNormalScale > 2) {
            x = this.panel.getChildByName(this.getBtn()).x + 80;
            y = this.panel.getChildByName(this.getBtn()).y + 300;
        }
        this.btn.x = x;
        this.btn.y = y;
        this.panel.addChild(this.btn);
        this.twJump = egret.Tween.get(this.btn);
        for (var i = 0; i < 100; i++) {
            this.twJump.to({ y: this.btn.y - 50 }, 400);
            this.twJump.to({ y: this.btn.y }, 400);
        }
        this.addGuideTips("6");
    };
    GuideModule.prototype.showNo7 = function () {
        HallModule.curGuide = 7;
        this.btn = new eui.Image(this.getBtnPng());
        var x = this.panel.getChildByName(this.getBtn()).x;
        var y = this.panel.getChildByName(this.getBtn()).y + 150;
        if (ConstValue.deviveNormalScale > 2) {
            x = this.panel.getChildByName(this.getBtn()).x;
            y = this.panel.getChildByName(this.getBtn()).y + 120;
        }
        this.btn.x = x;
        this.btn.y = y;
        this.panel.addChild(this.btn);
        this.twJump = egret.Tween.get(this.btn);
        for (var i = 0; i < 100; i++) {
            this.twJump.to({ y: this.btn.y - 50 }, 400);
            this.twJump.to({ y: this.btn.y }, 400);
        }
        this.addGuideTips("7");
    };
    GuideModule.prototype.showNo8 = function () {
        HallModule.curGuide = 8;
        this.btn = new eui.Image(this.getBtnPng());
        var x = this.panel.getChildByName(this.getBtn()).x + 80;
        var y = this.panel.getChildByName(this.getBtn()).y + 180;
        if (ConstValue.deviveNormalScale > 2) {
            x = this.panel.getChildByName(this.getBtn()).x + 80;
            y = this.panel.getChildByName(this.getBtn()).y + 180;
        }
        this.btn.x = x;
        this.btn.y = y;
        this.panel.addChild(this.btn);
        this.twJump = egret.Tween.get(this.btn);
        for (var i = 0; i < 100; i++) {
            this.twJump.to({ y: this.btn.y - 50 }, 400);
            this.twJump.to({ y: this.btn.y }, 400);
        }
        this.addGuideTips("8");
    };
    GuideModule.prototype.showNo9 = function () {
        HallModule.curGuide = 9;
        CommonTools.shake(this.panel.getChildByName("btn_select_role"));
        this.addGuideTips("9");
    };
    GuideModule.prototype.showNo10 = function () {
        HallModule.curGuide = 10;
        CommonTools.shake(this.panel.getChildByName("btn_skill"));
        this.addGuideTips("10");
    };
    GuideModule.prototype.showNo999 = function () {
        this.curIdx++;
        if (this.curIdx > this.maxIdx) {
            this.context.removeChild(this.maskBg);
            this.maskBg = null;
            this.context.removeChild(this.maskBgmask);
            this.maskBgmask = null;
            egret.localStorage.setItem("mapdiy0", "1");
            return;
        }
        if (this.maskBg != null) {
            this.context.removeChild(this.maskBg);
            this.maskBg = null;
        }
        this.maskBg = new eui.Image("guild_map_0" + this.curIdx + "_png");
        // this.maskBg.width = this.context.getStageWidth()*0.7;
        // this.maskBg.height = this.context.getStageHeight()*0.7;
        this.maskBg.horizontalCenter = 0;
        this.maskBg.verticalCenter = 0;
        this.context.addChild(this.maskBg);
        this.maskBg.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            this.showNo999();
        }, this);
    };
    GuideModule.guide_tip_new = {
        "2": { "tip": "强化训练，可以练习熟悉战斗中的操作哒！～", "saveKey": "trainTip" },
        "4": { "tip": "过关斩将，可以获得资源和冲榜哦！～", "saveKey": "pveTip" },
        "6": { "tip": "进入PVP随机匹配，和不同地方的玩家一决高下吧！～", "saveKey": "pvpTip" },
        "8": { "tip": "可以邀请手机上的好友一起对战哦！～", "saveKey": "wxpvpTip" },
        "9": { "tip": "这里还有很多角色等着你来召唤呢！～", "saveKey": "roleTip" },
        "10": { "tip": "升级技能，在战斗中拥有更好的优势！～", "saveKey": "skillTip" },
        "7": { "tip": "进入地图标记其，创造属于自己的作战地图吧！～", "saveKey": "diymapTip" },
    };
    return GuideModule;
}());
__reflect(GuideModule.prototype, "GuideModule");
//# sourceMappingURL=GuideModule.js.map