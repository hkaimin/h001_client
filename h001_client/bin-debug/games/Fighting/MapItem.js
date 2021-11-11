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
var Fight;
(function (Fight) {
    /**地图物件 */
    var MapItem = (function (_super) {
        __extends(MapItem, _super);
        /**地图物件对象 */
        function MapItem(para) {
            var _this = _super.call(this) || this;
            _this.subType = 0;
            _this.itemRange = [0, 0, 0, 0]; //x1,x2,y1,y2
            _this.isPlayer = 0;
            _this.groundEmpty = false;
            _this.dangerCount = 0;
            _this.dangerPaoPaoObj = null;
            _this.showImg = new eui.Image(para["img"]);
            _this.x = para["x"];
            _this.y = para["y"];
            _this.name = para["name"];
            _this.curIdx = para["curIdx"];
            _this.addChild(_this.showImg);
            return _this;
        }
        MapItem.prototype.setBoundRec = function (bound) {
            this.boundRec = bound;
        };
        MapItem.prototype.getBoundRec = function () {
            return this.boundRec;
        };
        MapItem.prototype.checkRange = function (x, y, res, type, funcType) {
            if (x >= this.itemRange[0] && x < this.itemRange[1] && y >= this.itemRange[2] && y < this.itemRange[3]) {
                if (type == 1) {
                    this.removeChild(this.showImg);
                    var tempRes = res;
                    if (funcType == 2) {
                        tempRes = "diy_add_big_item_png";
                        this.groundEmpty = true;
                    }
                    else {
                        this.groundEmpty = false;
                        var resStr = tempRes.split("_");
                        this.res = parseInt(resStr[1]);
                    }
                    this.showImg = new eui.Image(tempRes);
                    this.addChild(this.showImg);
                }
                else {
                    if (this.sub) {
                        this.removeChild(this.sub);
                        this.sub = null;
                        this.subType = 0;
                        if (this.isPlayer > 0) {
                            if (this.isPlayer == 119) {
                                MapDIYModule.ONE_P = "";
                            }
                            else {
                                MapDIYModule.TWO_P = "";
                            }
                            this.isPlayer = 0;
                        }
                    }
                    if (funcType == 2)
                        return;
                    var tempRes = res;
                    if (funcType == 3 && MapDIYModule.ONE_P != "")
                        return;
                    if (funcType == 4 && MapDIYModule.TWO_P != "")
                        return;
                    if (funcType == 3) {
                        MapDIYModule.ONE_P = this.name;
                        this.isPlayer = 119;
                        tempRes = "diy_1p_png";
                    }
                    if (funcType == 4) {
                        MapDIYModule.TWO_P = this.name;
                        this.isPlayer = 120;
                        tempRes = "diy_2p_png";
                    }
                    if (this.isPlayer > 0) {
                        this.resSub = this.isPlayer;
                    }
                    else {
                        var resStr = tempRes.split("_");
                        this.resSub = parseInt(resStr[1]);
                    }
                    this.sub = new eui.Image(tempRes);
                    this.subType = type;
                    this.addChild(this.sub);
                    // this.sub.x += 8;
                    this.sub.y -= 38;
                    if (this.isPlayer > 0) {
                        this.sub.y -= 38;
                    }
                }
            }
        };
        MapItem.prototype.checkRange2 = function (res, type, funcType) {
            CommonTools.log("------curIdx:" + this.curIdx + " column:" + this.column + " row:" + this.row);
            if (type == 1) {
                this.removeChild(this.showImg);
                var tempRes = res;
                if (funcType == 2) {
                    tempRes = "diy_add_big_item_png";
                    this.groundEmpty = true;
                }
                else {
                    this.groundEmpty = false;
                    var resStr = tempRes.split("_");
                    this.res = parseInt(resStr[1]);
                }
                this.showImg = new eui.Image(tempRes);
                this.addChild(this.showImg);
            }
            else {
                if (this.sub) {
                    this.removeChild(this.sub);
                    this.sub = null;
                    this.subType = 0;
                    if (this.isPlayer > 0) {
                        if (this.isPlayer == 119) {
                            MapDIYModule.ONE_P = "";
                        }
                        else {
                            MapDIYModule.TWO_P = "";
                        }
                        this.isPlayer = 0;
                    }
                }
                if (funcType == 2)
                    return;
                var tempRes = res;
                if (funcType == 3 && MapDIYModule.ONE_P != "")
                    return;
                if (funcType == 4 && MapDIYModule.TWO_P != "")
                    return;
                if (funcType == 3) {
                    MapDIYModule.ONE_P = this.name;
                    this.isPlayer = 119;
                    tempRes = "diy_1p_png";
                }
                if (funcType == 4) {
                    MapDIYModule.TWO_P = this.name;
                    this.isPlayer = 120;
                    tempRes = "diy_2p_png";
                }
                if (this.isPlayer > 0) {
                    this.resSub = this.isPlayer;
                }
                else {
                    var resStr = tempRes.split("_");
                    this.resSub = parseInt(resStr[1]);
                }
                this.sub = new eui.Image(tempRes);
                this.subType = type;
                this.addChild(this.sub);
                // this.sub.x += 8;
                this.sub.y -= 38;
                if (this.isPlayer > 0) {
                    this.sub.y -= 38;
                }
            }
        };
        MapItem.prototype.addMiniBlock = function (res) {
            this.sub = new eui.Image(res);
            this.addChild(this.sub);
            this.sub.y -= 38;
        };
        MapItem.prototype.addMiniPlayer = function (res) {
            var tempRes = "";
            if (res == 119) {
                tempRes = "diy_1p_png";
            }
            else {
                tempRes = "diy_2p_png";
            }
            this.sub = new eui.Image(tempRes);
            this.addChild(this.sub);
            this.sub.y -= 76;
        };
        MapItem.prototype.viewSub = function (flag) {
            if (this.sub) {
                if (flag) {
                    var subSource = this.sub.source;
                    var xSource = this.sub.x;
                    var ySource = this.sub.y;
                    this.removeChild(this.sub);
                    this.sub = new eui.Image(subSource);
                    this.sub.x = xSource;
                    this.sub.y = ySource;
                    this.addChild(this.sub);
                }
                else {
                    this.sub.visible = false;
                }
            }
        };
        MapItem.prototype.setRow = function (row) {
            this.row = row;
        };
        MapItem.prototype.getRow = function () {
            return this.row;
        };
        MapItem.prototype.setColumn = function (column) {
            this.column = column;
        };
        MapItem.prototype.getColumn = function () {
            return this.column;
        };
        MapItem.prototype.setType = function (type) {
            this.type = type;
            if (type > 1) {
                // var shp: egret.Shape = new egret.Shape();
                // shp.graphics.beginFill(0xff0000);
                // shp.graphics.drawRect(0,41,82,82);
                // shp.graphics.endFill();
                // this.addChild(shp);
            }
        };
        MapItem.prototype.getType = function () {
            return this.type;
        };
        MapItem.prototype.getCurIdx = function () {
            return this.curIdx;
        };
        MapItem.prototype.getSubType = function () {
            return this.subType;
        };
        MapItem.prototype.setRes = function (res) {
            this.res = res;
        };
        MapItem.prototype.addSub = function (item, type) {
            this.sub = item;
            this.subType = type;
            this.addChild(this.sub);
            if (type == 7) {
                // this.sub.x += 8;
                this.sub.y -= 35;
                this.sub.scaleX = 1;
                this.sub.scaleY = 1; //0.9
            }
            else {
                this.sub.x += 8;
                this.sub.y += 8;
                this.sub.scaleX = 1.2;
                this.sub.scaleY = 1.2;
            }
            this.notifyToAI();
            ConstValue.P_FIGHT_OBJ.getMainPlayer().removeGuideTips("3");
            if (egret.localStorage.getItem(ConstValue.guide_tips["4"].saveKey) != "1"
                && this.sub != null) {
                this.showAnim = egret.Tween.get(this.sub);
                for (var i = 0; i < 50; i++) {
                    this.showAnim.to({ alpha: 0.1 }, 400);
                    this.showAnim.to({ alpha: 1 }, 400);
                }
            }
        };
        MapItem.prototype.notifyToAI = function () {
            for (var i in FightingModule.aiSubObj) {
                var obj = FightingModule.aiSubObj[i];
                obj.beNotifyHasFood(this.column, this.row);
            }
        };
        MapItem.prototype.clearSub = function () {
            if (this.sub != null && this.subType != 7 && this.subType != -1) {
                if (this.showAnim != null) {
                    egret.Tween.removeTweens(this.sub);
                    this.showAnim = null;
                    ConstValue.P_FIGHT_OBJ.getMainPlayer().removeGuideTips("4");
                }
                this.removeChild(this.sub);
                this.sub = null;
                this.subType = 0;
            }
            if (this.sub != null && this.subType == 7) {
                this.subType = -1;
                FightingModule.Delay(3000, function () {
                    this.subType = 7;
                }, this);
            }
        };
        return MapItem;
    }(egret.DisplayObjectContainer));
    Fight.MapItem = MapItem;
    __reflect(MapItem.prototype, "Fight.MapItem");
})(Fight || (Fight = {}));
//# sourceMappingURL=MapItem.js.map