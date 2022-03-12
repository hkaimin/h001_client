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
/**
 * 战斗模块
 */
var MapMiniDIYModule = (function (_super) {
    __extends(MapMiniDIYModule, _super);
    /**
     * 构造函数
     */
    function MapMiniDIYModule(ct, bgConf, layerConf, type) {
        var _this = _super.call(this) || this;
        _this.initRow = 9;
        _this.initColumn = 11;
        _this.firstItemX = 494.88;
        _this.firstItemY = 100.84;
        _this.groundItemW = 58;
        _this.groundItemH = 55;
        _this.groundOffX = 0;
        _this.groundOffY = 0;
        _this.testGround2 = [1, 24, 24, 1, 2, 2, 2, 1, 1, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 3, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 25, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 3, 3, 1, 1, 2, 2, 2];
        _this.testMap2 = [119, 0, 7, 7, 16, 21, 16, 7, 7, 0, 0, 0, 4, 4, 20, 21, 4, 21, 20, 4, 4, 0, 0, 0, 9, 9, 16, 4, 16, 9, 9, 0, 0, 6, 19, 5, 5, 11, 4, 11, 5, 5, 16, 6, 6, 19, 5, 11, 0, 4, 0, 11, 5, 16, 6, 6, 19, 5, 5, 11, 4, 11, 7, 5, 16, 6, 0, 0, 0, 4, 16, 4, 16, 4, 0, 0, 0, 0, 4, 4, 4, 12, 19, 12, 4, 4, 4, 0, 0, 20, 20, 12, 16, 19, 16, 12, 20, 20, 120];
        //test
        _this.type = 1;
        _this.context = ct;
        _this.type = type;
        _this.panel = new eui.Panel();
        _this.panel.skinName = "resource/eui_skins/UserUI/mapMiniDIYUI.exml";
        _this.panel.title = "Title";
        // this.panel.horizontalCenter = 0;
        // this.panel.verticalCenter = 0;
        _this.context.addChild(_this.panel);
        // this.testGround = this.testGround2;
        // this.testMap = this.testMap2;
        _this.testGround = bgConf;
        _this.testMap = layerConf;
        // this.initConfig();
        _this.initScene(); //初始化地图
        return _this;
    }
    /**
     * 初始化配置
     */
    MapMiniDIYModule.prototype.initConfig = function () {
        var _this = this;
        LZMA.decompress(EBitUtil.getArr(new egret.ByteArray(RES.getRes("config_json"))), function (d) {
            // CommonTools.log("initXYConfig=========dddd======"+d);
            ConstValue.P_CONFIG = JSON.parse(d);
            _this.initScene(); //初始化地图
        }, function (t) {
            //ELog.info("conf:",t);
        });
    };
    MapMiniDIYModule.prototype.initScene = function () {
        //地表层
        var count = 0;
        for (var i = 0; i < this.initRow; i++) {
            for (var j = 0; j < this.initColumn; j++) {
                var wItem = this.groundItemW;
                var hItem = this.groundItemH;
                var xOff = this.groundOffX;
                var yOff = this.groundOffY;
                if (i > 0) {
                    yOff = 7;
                }
                if (j > 0) {
                    xOff = 4;
                }
                var x = this.firstItemX + wItem * j + xOff * j;
                var y = this.firstItemY + hItem * i + yOff * i;
                var para = { "img": "res_" + this.testGround[count] + "_png", "x": x, "y": y, "name": "ground_" + count, "curIdx": count };
                // CommonTools.log("para========================"+JSON.stringify(para))
                var mapItemObj = new Fight.MapItem(para);
                mapItemObj.setRow(i);
                mapItemObj.setColumn(j);
                mapItemObj.setType(ConstValue.P_CONFIG["MapBase"][this.testGround[count].toString()]["Type"]);
                this.panel.addChild(mapItemObj);
                mapItemObj.scaleX = 0.7;
                mapItemObj.scaleY = 0.7;
                mapItemObj.itemRange[0] = 497 + 55 * j + 6 * j; //x1
                mapItemObj.itemRange[1] = mapItemObj.itemRange[0] + 55; //x2
                mapItemObj.itemRange[2] = 103 + 55 * i + 7 * i; //y1
                mapItemObj.itemRange[3] = mapItemObj.itemRange[2] + 55; //y2
                mapItemObj.setRes(this.testGround[count]);
                if (this.testMap[count] > 0 && this.testMap[count] < 100) {
                    var res = "res_" + this.testMap[count] + "_png";
                    mapItemObj.addMiniBlock(res);
                }
                else if (this.testMap[count] > 100) {
                    mapItemObj.addMiniPlayer(this.testMap[count]);
                }
                count++;
            }
        }
        this.panel.scaleX = 0.4;
        this.panel.scaleY = 0.4;
        if (this.type == 1) {
            this.panel.x = 180;
            this.panel.y = -20;
        }
        else if (this.type == 2) {
            this.panel.x = -220;
            this.panel.y = -30;
            this.panel.scaleX = 0.48;
            this.panel.scaleY = 0.48;
        }
        else if (this.type == 3) {
            this.panel.x = 112;
            this.panel.y = 116;
            this.panel.scaleX = 0.66;
            this.panel.scaleY = 0.66;
        }
    };
    return MapMiniDIYModule;
}(egret.DisplayObjectContainer));
__reflect(MapMiniDIYModule.prototype, "MapMiniDIYModule");
//# sourceMappingURL=MapMiniDIYModule.js.map