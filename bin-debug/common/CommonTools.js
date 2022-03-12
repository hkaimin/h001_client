var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 工具类
 */
var CommonTools = (function () {
    function CommonTools() {
    }
    /**
     * 添加遮罩
     */
    CommonTools.addShapeBG = function (iScreenWidth, iScreenHeight) {
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x232020, 0.6);
        topMask.graphics.drawRect(0, 0, iScreenWidth, iScreenHeight);
        topMask.graphics.endFill();
        return topMask;
    };
    CommonTools.shake = function (target) {
        var twJump = egret.Tween.get(target, { loop: true }, egret.Ease.sineInOut);
        twJump.to({ rotation: 8 }, 80);
        twJump.to({ rotation: -8 }, 80);
        twJump.to({ rotation: 8 }, 80);
        twJump.to({ rotation: -8 }, 80);
        twJump.to({ rotation: 8 }, 80);
        twJump.to({ rotation: -8 }, 80);
        twJump.to({ rotation: 0 }, 40);
        twJump.to({ rotation: 0 }, 1500);
        // twJump.to({rotation:30},200);
        // twJump.to({rotation:-30},200);
        // for(let i=0;i<100;i++){
        // 	twJump.to({rotation:15},90);
        // 	twJump.to({rotation:-15},90);
        // }
    };
    CommonTools.removeShake = function (target) {
        egret.Tween.removeTweens(target);
    };
    /**
     * 弹出工具动画
     */
    CommonTools.niceTip = function (target, opt, thisObj) {
        if (opt == 1) {
            target.scaleX = 0.5;
            target.scaleY = 0.5;
            var normalX = 1;
            var normalY = 1;
            if (ConstValue.deviveNormalScale > 2) {
                normalX = ConstValue.deviveScale;
                normalY = ConstValue.deviveScale;
            }
            var twJump = egret.Tween.get(target);
            twJump.to({ scaleX: 1, scaleY: 1 }, 90); //150
            twJump.to({ scaleX: 1.05, scaleY: 1.05 }, 80);
            twJump.to({ scaleX: normalX, scaleY: normalX }, 100);
        }
        else {
            var twJump = egret.Tween.get(target);
            twJump.to({ scaleX: 1.05, scaleY: 1.05 }, 100);
            twJump.to({ scaleX: 0.0, scaleY: 0.0, visible: false }, 200); //160
            twJump.call(function () {
                thisObj.closeNice();
            }, this);
        }
    };
    CommonTools.fixFix = function (context, target, fixType, offX, offY) {
        var designWidth = 1334.0;
        var designHeight = 750.0;
        var stageHeight = context.getStageHeight();
        var scale = stageHeight / designHeight;
        ConstValue.deviveScale = scale;
        var deviceScale = context.getClientWidth() * 1.0 / context.getClientHeight();
        ConstValue.deviveNormalScale = deviceScale;
        // CommonTools.logWallet("--fixFix deviceScale-------"+deviceScale);
        // CommonTools.logWallet("--fixFix stageHeight-------"+stageHeight);
        // CommonTools.logWallet("--fixFix getClientHeight-------"+context.getClientHeight());
        // CommonTools.logWallet("--fixFix getClientWidth-------"+context.getClientWidth());
        if (deviceScale < 2) {
            return;
        }
        // CommonTools.logWallet("--fixFix name-------"+target.name);
        // CommonTools.logWallet("--fixFix before fix scaleX-------"+target.scaleX);
        // CommonTools.logWallet("--fixFix before fix X-------"+target.x);
        // CommonTools.logWallet("--fixFix before fix Y-------"+target.y);
        var up = 0;
        var down = 0;
        if (fixType == 1) {
            up = target.y;
        }
        else if (fixType == 2) {
            down = designHeight - target.y;
        }
        else if (fixType == 3) {
            down = designHeight - target.y;
        }
        target.scaleX = scale;
        target.scaleY = scale;
        if (fixType == 1) {
            var halfLeft = (1 - scale) / 2;
            target.y = up * scale + stageHeight * halfLeft + offY;
            target.x = target.x + offX;
        }
        else if (fixType == 2) {
            var halfLeft = (1 - scale) / 2;
            target.y = stageHeight - down * scale + stageHeight * halfLeft + offY;
            target.x = target.x + offX;
        }
        // CommonTools.logWallet("--fixFix after fix scaleX-------"+target.scaleX);
        // CommonTools.logWallet("--fixFix after fix X-------"+target.x);
        // CommonTools.logWallet("--fixFix after fix Y-------"+target.y);
    };
    /**
     * 公共提示组件
     */
    CommonTools.addCommonTips = function (context, txt) {
        if (CommonTools.curTipsLen >= 5)
            CommonTools.curTipsLen = 0;
        var stageW = context.stage.stageWidth;
        var stageH = context.stage.stageHeight;
        var panel = new eui.Panel();
        panel.name = "tips_panel_" + CommonTools.curTipsLen;
        panel.skinName = "resource/eui_skins/UserUI/CommonTips.exml";
        var x = stageW / 2 - panel.width / 2;
        var y = stageH / 2 - panel.height / 2;
        panel.x = x;
        panel.y = y;
        var lb = panel.getChildByName("lb_tips_txt");
        lb.text = txt;
        context.addChild(panel);
        var change = function () {
            if (panel.name == "tips_panel_0")
                CommonTools.curTipsLen = 0;
            context.removeChild(panel);
        };
        var yMove = y - 200 + 80 * CommonTools.curTipsLen;
        var tw = egret.Tween.get(panel);
        tw.to({ y: yMove }, 500);
        tw.wait(1500 - 100 * CommonTools.curTipsLen);
        tw.call(change);
        CommonTools.curTipsLen += 1;
    };
    CommonTools.jumpAnim = function (targetT) {
        var oldScale = targetT.scaleX;
        var tw = egret.Tween.get(targetT);
        tw.to({ scaleX: oldScale * 2, scaleY: oldScale * 2 }, 200);
        tw.to({ scaleX: oldScale, scaleY: oldScale }, 200);
    };
    /**
     * 公共提示组件
     */
    CommonTools.addTipsPanel = function (context, tipTitle, tipContent) {
        var stageW = context.stage.stageWidth;
        var stageH = context.stage.stageHeight;
        var mask = new eui.Image("guide_mask_png");
        mask.width = stageW;
        mask.height = stageH;
        context.addChild(mask);
        var tipPanel = new eui.Panel();
        tipPanel.skinName = "resource/eui_skins/UserUI/TipsPanelUI.exml";
        tipPanel.horizontalCenter = 0;
        tipPanel.verticalCenter = 0;
        context.addChild(tipPanel);
        CommonTools.fixFix(context, tipPanel, 1, 0, 0);
        var parent = tipPanel.getChildByName("fighting_parent");
        var title = parent.getChildByName("tip_title");
        title.text = tipTitle;
        var scroll = parent.getChildByName("t_s");
        var group = scroll.getChildByName("t_g");
        var content = group.getChildByName("tip_content");
        content.text = tipContent;
        tipPanel.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            context.removeChild(mask);
            context.removeChild(tipPanel);
        }, this);
    };
    /**
     * 构建发送数据
     */
    CommonTools.getDataJsonStr = function (f, s, d) {
        var dJson = {};
        dJson["f"] = f;
        dJson["s"] = s;
        dJson["d"] = d;
        return JSON.stringify(dJson);
    };
    /**
     * 获取动画
     * actionName “” 取默认动作 不为空串，取对应名字动作
     * 调用实例：CommonTools.getAnimDraw(RES.getRes("RoleWait00_json"), RES.getRes("RoleWait00_png"),"")
     */
    CommonTools.getAnimDraw = function (animJsonRes, animPngRes, actionName) {
        var em = new egret.MovieClipDataFactory(animJsonRes, animPngRes);
        var emc;
        if (actionName == "") {
            emc = new egret.MovieClip(em.generateMovieClipData());
        }
        else {
            emc = new egret.MovieClip(em.generateMovieClipData(actionName));
        }
        return emc;
    };
    CommonTools.deepCopyMap = function (srcMap) {
        var tCopy = {};
        for (var i in srcMap) {
            var obj = srcMap[i];
            tCopy[i] = obj;
        }
        return tCopy;
    };
    CommonTools.printMap = function (srcMap) {
        if (!ConstValue.p_is_PRINT_MAP)
            return;
        console.log("-----startMap------");
        var len = 0;
        for (var i in srcMap) {
            var obj = srcMap[i];
            console.log("-----srcMap--key----" + i);
            len++;
        }
        console.log("-----endMap------len:" + len);
    };
    CommonTools.printObject = function (obj) {
        var description = "";
        for (var i in obj) {
            var property = obj[i];
            description += i + " = " + property + "\n";
        }
        console.log("-----printObject------description:" + description);
    };
    /**
     * 获取一个输入随机范围
     */
    CommonTools.getRandomFloor = function (num, zero) {
        if (zero) {
            return Math.floor(Math.random() * num);
        }
        else {
            return Math.floor(Math.random() * num == 0 ? 1 : Math.random() * num);
        }
    };
    CommonTools.log = function (logStr) {
        if (ConstValue.P_IS_INNER) {
            console.log(logStr);
        }
    };
    CommonTools.logError = function (logStr) {
        if (ConstValue.p_is_PRINT_ERROR) {
            console.log(logStr);
        }
    };
    CommonTools.logDebug = function (logStr) {
        if (ConstValue.p_is_PRINT_DEBUG) {
            console.log(logStr);
        }
    };
    CommonTools.logAI = function (logStr) {
        if (ConstValue.p_is_PRINT_AI) {
            console.log(logStr);
        }
    };
    CommonTools.logAIPath = function (logStr) {
        if (ConstValue.p_is_PRINT_AI_PATH) {
            console.log(logStr);
        }
    };
    CommonTools.logWallet = function (logStr) {
        if (ConstValue.p_is_PRINT_WALLET_DEBUG) {
            console.log(logStr);
        }
    };
    CommonTools.resourceMgr = new ResourceUtils();
    CommonTools.curTipsLen = 0;
    return CommonTools;
}());
__reflect(CommonTools.prototype, "CommonTools");
//# sourceMappingURL=CommonTools.js.map