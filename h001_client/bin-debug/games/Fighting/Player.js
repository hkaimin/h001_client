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
    /**玩家 */
    var Player = (function (_super) {
        __extends(Player, _super);
        /**玩家对象 */
        function Player(para) {
            var _this = _super.call(this) || this;
            _this.xDis = 3;
            _this.yDis = 3;
            _this.uTime = 100;
            _this.whichSide = 0;
            _this.sideDes = "";
            _this.bulletLen = 4;
            _this.life = 1;
            _this.speed = 1;
            _this.isMainPlayer = false;
            _this.isMoving = false;
            _this.curDirect = -1;
            _this.row = -1;
            _this.column = -1;
            _this.keyDir = -1;
            _this.keyBoom = -1;
            _this.aiRobot = false;
            _this.endX = -1;
            _this.endY = -1;
            _this.fixAIX = 0;
            _this.fixAIY = 0;
            _this.isAI = 0;
            _this.markLeft = 0;
            _this.markRight = 0;
            _this.death = false;
            _this.iClass = 1;
            _this.isStatic = false;
            _this.preStop = "0";
            _this.buffPlaying = false;
            _this.isFirstMove = true;
            _this.aiLevel = 0;
            _this.lWalkArea = [3, 3];
            //1正右方:可以行走的方向 2右下方 3正下方 4左下方 5正左 6左上 7正上 8右上
            _this.freeWalk = { "1": [0, 2, 3], "2": [0, 3], "3": [0, 1, 3], "4": [0, 1], "5": [0, 1, 2], "6": [1, 2], "7": [1, 2, 3], "8": [2, 3] };
            var pObj = para["pObj"];
            _this.roleId = pObj.uid;
            _this.aiLevel = pObj.aiLevel;
            _this.lWalkArea = pObj.lWalkArea;
            if (_this.roleId == ConstValue.cacheUserInfo.id) {
                _this.isMainPlayer = true;
            }
            _this.life = pObj.life;
            _this.speed = pObj.speed;
            // this.speed = 4;
            _this.bulletLen = pObj.power;
            _this.iClass = pObj.iClass;
            _this.whichSide = para["side"];
            _this.bodyName = new eui.Label(pObj.name);
            _this.isAI = para["isAI"];
            if (_this.whichSide == 1) {
                _this.sideDes = "p" + _this.iClass;
                _this.bodyName.textColor = 0xFEFCFE;
                _this.bodyName.stroke = 4;
                _this.bodyName.strokeColor = 0x1875F4;
            }
            else {
                _this.sideDes = "p" + _this.iClass;
                _this.bodyName.textColor = 0xFEFCFE;
                _this.bodyName.stroke = 4;
                _this.bodyName.strokeColor = 0xF24618;
            }
            if (_this.aiLevel >= 50) {
                _this.sideDes = "pai" + _this.iClass;
            }
            _this.bodyName.texAlign = "center";
            _this.bodyAniUp = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_03_json"), RES.getRes(_this.sideDes + "_03_png"), "0");
            _this.bodyAniDown = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_01_json"), RES.getRes(_this.sideDes + "_01_png"), "0");
            _this.bodyAniLeft = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_02_json"), RES.getRes(_this.sideDes + "_02_png"), "0");
            _this.bodyAniRight = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_04_json"), RES.getRes(_this.sideDes + "_04_png"), "0");
            if (_this.aiLevel < 50) {
                _this.bodyAniDownStatic = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_static_json"), RES.getRes(_this.sideDes + "_static_png"), "0");
                _this.bodyAniUpStatic = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_static_03_json"), RES.getRes(_this.sideDes + "_static_03_png"), "0");
                _this.bodyAniLeftStatic = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_static_02_json"), RES.getRes(_this.sideDes + "_static_02_png"), "0");
                _this.bodyAniRightStatic = CommonTools.getAnimDraw(RES.getRes(_this.sideDes + "_static_04_json"), RES.getRes(_this.sideDes + "_static_04_png"), "0");
            }
            else {
                _this.bodyAniDownStatic = _this.bodyAniDown;
                _this.bodyAniUpStatic = _this.bodyAniUp;
                _this.bodyAniLeftStatic = _this.bodyAniLeft;
                _this.bodyAniRightStatic = _this.bodyAniRight;
            }
            _this.bodyAni = _this.bodyAniDownStatic;
            // this.addChild(this.bodyAni);
            _this.addChildAt(_this.bodyAni, 0);
            _this.bodyName.x -= _this.bodyName.width / 2; //55
            _this.bodyName.y -= 128;
            if (_this.aiLevel < 50)
                _this.addChild(_this.bodyName);
            _this.x = para["x"];
            _this.y = para["y"];
            _this.name = para["name"];
            _this.bodyAni.play(-1);
            if (ConstValue.P_FIGHT_OBJ.APP_MODE == 2) {
                _this.xDis = 1.5;
                _this.yDis = 1.5;
            }
            if (_this.aiLevel >= 50) {
                _this.xDis = 0.8;
                _this.yDis = 0.8;
            }
            return _this;
            // var rect1: egret.Rectangle = this.getBounds();
        }
        Player.prototype.setBoundRec = function (bound) {
            this.boundRec = bound;
        };
        Player.prototype.getBoundRec = function () {
            return this.boundRec;
        };
        Player.prototype.getLWalkAreaRow = function () {
            return this.lWalkArea[0];
        };
        Player.prototype.getLWalkAreaColumn = function () {
            return this.lWalkArea[1];
        };
        Player.prototype.setMoving = function (flag) {
            this.isMoving = flag;
            if (!this.isMoving) {
                this.isStatic = true;
                if (this.bodyAni != null) {
                    this.removeChild(this.bodyAni);
                    this.bodyAni = null;
                }
                switch (this.curDirect) {
                    case 0:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniUpStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    case 1:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniRightStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    case 2:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniDownStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    case 3:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniLeftStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    default: break;
                }
                // this.addChild(this.bodyAni);
                this.addChildAt(this.bodyAni, 0);
            }
        };
        Player.prototype.moveDetail = function (endX, endY) {
            this.endX = endX;
            this.endY = endY;
            if (this.column == endX) {
                if (endY >= this.row) {
                    this.move(2, false);
                    return;
                }
                else {
                    this.move(0, false);
                    return;
                }
            }
            if (this.row == endY) {
                if (endX >= this.column) {
                    this.move(1, false);
                    return;
                }
                else {
                    this.move(3, false);
                    return;
                }
            }
        };
        Player.prototype.findOwnAi = function () {
            for (var i in FightingModule.aiSubObj) {
                var obj = FightingModule.aiSubObj[i];
                if (obj.aiObj.roleId == this.roleId) {
                    return obj;
                }
            }
            return null;
        };
        Player.prototype.addBuff = function (type) {
            if (this.buffPlaying)
                return;
            this.buffPlaying = true;
            if (type == 2) {
                this.buffAnim = CommonTools.getAnimDraw(RES.getRes("take_chicken_json"), RES.getRes("take_chicken_png"), "0");
                this.buffAnim.x -= 55;
                this.buffAnim.y -= 110;
                this.buffAnim.scaleX = 1.2;
                this.buffAnim.scaleY = 1.2;
            }
            else if (type == 1) {
                this.buffAnim = CommonTools.getAnimDraw(RES.getRes("take_dog_json"), RES.getRes("take_dog_png"), "0");
                this.buffAnim.x -= 87;
                this.buffAnim.y -= 85;
                this.buffAnim.scaleX = 1.8;
                this.buffAnim.scaleY = 1.8;
            }
            this.buffAnim.play(1);
            this.buffAnim.once(egret.Event.COMPLETE, function (e) {
                this.buffPlaying = false;
                try {
                    this.removeChild(this.buffAnim);
                }
                catch (error) {
                    CommonTools.logError("Destroy addBuff====error=====");
                }
            }, this);
            this.addChild(this.buffAnim);
        };
        Player.prototype.addGuideTips = function (type) {
            this.panelT = new eui.Panel();
            this.panelT.skinName = "resource/eui_skins/UserUI/GuideTipsGroup.exml";
            this.panelT.name = "p_" + type;
            var group = this.panelT.getChildByName("group_1");
            var tip = group.getChildByName("tip");
            tip.text = ConstValue.guide_tips[type].tip;
            this.panelT.x -= 160;
            this.panelT.y -= 200;
            this.addChild(this.panelT);
            if (type == "5") {
                FightingModule.Delay(3000, function () {
                    this.removeTips();
                }, this);
            }
        };
        Player.prototype.removeTips = function () {
            if (this.panelT != null) {
                this.removeChild(this.panelT);
                this.panelT = null;
            }
        };
        Player.prototype.removeGuideTips = function (type) {
            if (this.isMainPlayer && this.panelT != null) {
                var key = ConstValue.guide_tips[type].saveKey;
                if (egret.localStorage.getItem(key) != "1") {
                    egret.localStorage.setItem(key, "1");
                    this.removeTips();
                    ConstValue.P_FIGHT_OBJ.removeJump();
                    //下一引导
                    if (type == "1") {
                        ConstValue.P_FIGHT_OBJ.showGuide(true);
                    }
                    else if (parseInt(type) >= 2) {
                        ConstValue.P_FIGHT_OBJ.showGuide(false);
                    }
                }
            }
        };
        Player.prototype.changeIndex = function (itemObj, iType) {
            if (iType == 1) {
                FightingModule.mapLayer.setChildIndex(this, FightingModule.mapLayer.getChildIndex(itemObj) + 1);
            }
            else if (iType == 2) {
                // FightingModule.mapLayer.setChildIndex(itemObj,FightingModule.mapLayer.getChildIndex(this) + 1);
                FightingModule.mapLayer.setChildIndex(this, FightingModule.mapLayer.getChildIndex(itemObj) - 1);
            }
        };
        /**
         * direct 0上 1右 2下 3左
         * isAuto true是方向自己走 false是手动走
         */
        Player.prototype.move = function (direct, isAuto) {
            try {
                this.removeGuideTips("1");
                if (!this.isMoving)
                    return;
                if (this.speed > 6)
                    this.speed = 6; //速度太快有问题
                if (this.speed == 1)
                    this.speed = 2.1; //2
                if (this.speed == 2)
                    this.speed = 2.8; //2.5
                if (this.speed == 3)
                    this.speed = 3.4; //3
                if (this.speed == 5)
                    this.speed = 4.7; //3
                if (this.speed == 6)
                    this.speed = 5.4; //3
                var tXDis = this.xDis + this.speed * 1.6; //1.2
                var tYDis = this.yDis + this.speed * 1.6; //1.2
                if (direct == -1) {
                    if (this.curDirect == -1) {
                        direct = 1;
                    }
                    else {
                        direct = this.curDirect;
                    }
                }
                if (this.isMainPlayer) {
                    for (var i in FightingModule.aiSubObj) {
                        var obj = FightingModule.aiSubObj[i];
                        if (obj.aiObj.getColumn() == this.column && obj.aiObj.getRow() == this.row && obj.visible && obj.aiObj.aiLevel >= 50) {
                            obj.stopAI();
                            var sData = CommonTools.getDataJsonStr("kill_player_by_monster", 1, { attacker_pid: obj.aiObj.roleId, beattacker_pid: this.roleId });
                            ConstValue.P_NET_OBJ.sendData2(sData);
                            return;
                        }
                    }
                }
                if (this.aiRobot) {
                    // CommonTools.logAI("move------this.column:"+this.column+" this.row:"+this.row+" this.endX:"+this.endX+" this.endY:"+this.endY+" direct:"+direct)
                    if (this.column == this.endX && this.row == this.endY) {
                        if (this.aiLevel >= 50) {
                            this.findOwnAi().resetStop();
                        }
                        if (direct == 0 || direct == 2) {
                            if (this.fixAIY <= 50) {
                                this.fixAIY += tYDis;
                            }
                            else {
                                this.setMoving(false);
                                this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                                this.func = null;
                                this.keyDir = -1;
                                this.fixAIY = 0;
                                this.findOwnAi().moveNext();
                                return;
                            }
                        }
                        else if (direct == 1 || direct == 3) {
                            if (this.fixAIX <= 50) {
                                this.fixAIX += tXDis;
                            }
                            else {
                                this.setMoving(false);
                                this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                                this.func = null;
                                this.keyDir = -1;
                                this.fixAIX = 0;
                                this.findOwnAi().moveNext();
                                return;
                            }
                        }
                    }
                }
                if (direct != this.curDirect || this.isStatic || this.isFirstMove) {
                    this.isFirstMove = false;
                    this.isStatic = false;
                    if (this.bodyAni != null) {
                        this.removeChild(this.bodyAni);
                        this.bodyAni = null;
                    }
                    this.curDirect = direct;
                    switch (direct) {
                        case 0:
                            if (this.bodyAni == null) {
                                this.bodyAni = this.bodyAniUp;
                                this.bodyAni.play(-1);
                            }
                            break;
                        case 1:
                            if (this.bodyAni == null) {
                                this.bodyAni = this.bodyAniRight;
                                this.bodyAni.play(-1);
                            }
                            break;
                        case 2:
                            if (this.bodyAni == null) {
                                this.bodyAni = this.bodyAniDown;
                                this.bodyAni.play(-1);
                            }
                            break;
                        case 3:
                            if (this.bodyAni == null) {
                                this.bodyAni = this.bodyAniLeft;
                                this.bodyAni.play(-1);
                            }
                            break;
                        default: break;
                    }
                    // this.addChild(this.bodyAni);
                    this.addChildAt(this.bodyAni, 0);
                }
                var checkStop = false;
                if (direct == 3) {
                    if (this.x <= FightingModule.mapLeftLimit) {
                        this.aiNext();
                        return;
                    }
                    for (var i in FightingModule.mapLayerSubObj) {
                        var obj = FightingModule.mapLayerSubObj[i];
                        if (obj.getRow() == this.row && obj.getColumn() + 1 == this.column && this.x - 18 <= obj.x + obj.width) {
                            tXDis = 0;
                            break;
                        }
                    }
                    for (var i in FightingModule.bulletLayerSubObj) {
                        var obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if (obj.getRow() == this.row && obj.getColumn() + 1 == this.column && this.x - 10 <= obj.x + obj.width) {
                            tXDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }
                else if (direct == 0) {
                    if (this.y <= FightingModule.mapUpLimit) {
                        this.aiNext();
                        return;
                    }
                    for (var i in FightingModule.mapLayerSubObj) {
                        var obj = FightingModule.mapLayerSubObj[i];
                        if (obj.getColumn() == this.column && obj.getRow() + 1 == this.row && this.y <= obj.y + obj.height) {
                            tYDis = 0;
                            break;
                        }
                        else if (obj.getColumn() - 1 == this.column && obj.getRow() + 1 == this.row
                            && Math.abs(obj.x - this.x) < 15.5 && Math.abs(obj.y - this.y) < 111.1 && !this.aiRobot) {
                            tYDis = 0;
                            break;
                        }
                        else if (obj.getColumn() + 1 == this.column && obj.getRow() + 1 == this.row
                            && Math.abs(obj.x - this.x) < 80.6 && Math.abs(obj.y - this.y) < 111.1 && !this.aiRobot) {
                            tYDis = 0;
                            break;
                        }
                    }
                    for (var i in FightingModule.bulletLayerSubObj) {
                        var obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if (obj.getColumn() == this.column && obj.getRow() + 1 == this.row && this.y - 20 <= obj.y + obj.height) {
                            tYDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }
                else if (direct == 2) {
                    if (this.y >= FightingModule.mapDownLimit) {
                        this.aiNext();
                        return;
                    }
                    for (var i in FightingModule.mapLayerSubObj) {
                        var obj = FightingModule.mapLayerSubObj[i];
                        if (this.y >= 630)
                            tYDis = 0;
                        if (obj.getColumn() == this.column && obj.getRow() - 1 == this.row && this.y + 20 >= obj.y) {
                            tYDis = 0;
                            break;
                        }
                        else if (obj.getColumn() + 1 == this.column && obj.getRow() - 1 == this.row
                            && Math.abs(this.x - obj.x) < 80 && Math.abs(this.y - obj.y) < 5.3 && !this.aiRobot) {
                            tYDis = 0;
                            break;
                        }
                        else if (obj.getColumn() - 1 == this.column && obj.getRow() - 1 == this.row
                            && Math.abs(this.x - obj.x) < 11.5 && Math.abs(this.y - obj.y) < 5.3 && !this.aiRobot) {
                            tYDis = 0;
                            break;
                        }
                    }
                    for (var i in FightingModule.bulletLayerSubObj) {
                        var obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if (obj.getColumn() == this.column && obj.getRow() - 1 == this.row && this.y + 50 >= obj.y) {
                            tYDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }
                else if (direct == 1) {
                    if (this.x >= FightingModule.mapRightLimit) {
                        this.aiNext();
                        return;
                    }
                    for (var i in FightingModule.mapLayerSubObj) {
                        var obj = FightingModule.mapLayerSubObj[i];
                        if (obj.getRow() == this.row && obj.getColumn() - 1 == this.column && this.x + 38 >= obj.x) {
                            tXDis = 0;
                            break;
                        }
                    }
                    for (var i in FightingModule.bulletLayerSubObj) {
                        var obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if (obj.getRow() == this.row && obj.getColumn() - 1 == this.column && this.x + 38 >= obj.x) {
                            tXDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }
                if (this.aiRobot && !checkStop) {
                    if ((direct == 0 || direct == 2) && tYDis == 0) {
                        this.setMoving(false);
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                        this.func = null;
                        this.keyDir = -1;
                        this.fixAIY = 0;
                        this.findOwnAi().moveNext();
                        return;
                    }
                    else if ((direct == 1 || direct == 3) && tXDis == 0) {
                        this.setMoving(false);
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                        this.func = null;
                        this.keyDir = -1;
                        this.fixAIX = 0;
                        this.findOwnAi().moveNext();
                        return;
                    }
                }
                if (this.aiLevel >= 50 && checkStop) {
                    this.setMoving(false);
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                    this.func = null;
                    this.keyDir = -1;
                    if (this.aiLevel >= 50)
                        this.findOwnAi().setStop();
                    this.findOwnAi().moveNext();
                    return;
                }
                else if (this.aiLevel < 50 && checkStop) {
                    this.setMoving(false);
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                    this.func = null;
                    this.keyDir = -1;
                    this.findOwnAi().moveNext();
                }
                if (direct == this.curDirect) {
                    //手动移动，相同方向不加成
                    if (!isAuto) {
                        return;
                    }
                }
                switch (direct) {
                    case 0:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniUp;
                            this.bodyAni.play(-1);
                        }
                        this.y = this.y - tYDis;
                        // if(tYDis == 0){
                        //     this.move(1,false);
                        //     return;
                        // }
                        break;
                    case 1:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniRight;
                            this.bodyAni.play(-1);
                        }
                        this.x = this.x + tXDis;
                        // if(tXDis == 0){
                        //     this.move(2,false);
                        //     return;
                        // }
                        break;
                    case 2:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniDown;
                            this.bodyAni.play(-1);
                        }
                        this.y = this.y + tYDis;
                        // if(tYDis == 0){
                        //     this.move(3,false);
                        //     return;
                        // }
                        break;
                    case 3:
                        if (this.bodyAni == null) {
                            this.bodyAni = this.bodyAniLeft;
                            this.bodyAni.play(-1);
                        }
                        this.x = this.x - tXDis;
                        // if(tXDis == 0){
                        //     this.move(0,false);
                        //     return;
                        // }
                        break;
                    default: break;
                }
                // this.addChild(this.bodyAni);
                this.addChildAt(this.bodyAni, 0);
                // this.boundRec.x = this.x;
                // this.boundRec.y = this.y;
                this.markPosition(direct);
                //发送移动包
                if (this.isMainPlayer && !FightingModule.aiPVE) {
                    var sData = CommonTools.getDataJsonStr("syncPos", 1, { x: this.x, y: this.y, direction: this.curDirect, speed: this.speed, idx: parseInt(this.curMapIdx), playerID: 0 });
                    ConstValue.P_NET_OBJ.sendData2(sData);
                }
                var topY = 0;
                var top1Role = null;
                var top2Role = null;
                for (var i in FightingModule.playerLayerSubObj) {
                    var obj = FightingModule.playerLayerSubObj[i];
                    if (top1Role == null) {
                        topY = obj.y;
                        top1Role = obj;
                    }
                    else {
                        if (obj.y > topY) {
                            top2Role = top1Role;
                            top1Role = obj;
                        }
                        else {
                            top2Role = obj;
                        }
                    }
                }
                var top1Idex = FightingModule.mapLayer.getChildIndex(top1Role);
                var top2Idex = FightingModule.mapLayer.getChildIndex(top2Role);
                if (top2Idex > top1Idex && Math.abs(top1Role.getRow() - top2Role.getRow()) <= 1 &&
                    Math.abs(top1Role.getColumn() - top2Role.getColumn()) <= 1) {
                    FightingModule.mapLayer.swapChildren(top1Role, top2Role);
                }
            }
            catch (error) {
                CommonTools.logError("move=====================error====" + error);
            }
        };
        Player.prototype.aiNext = function () {
            if (this.aiRobot) {
                this.setMoving(false);
                this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                this.func = null;
                this.keyDir = -1;
                this.fixAIY = 0;
                this.findOwnAi().moveNext();
            }
        };
        Player.prototype.fire = function (bulletId, curPutIdx) {
            this.removeGuideTips("2");
            CommonAudioHandle.playEffect("playBomb_mp3", 1);
            if (this.aiRobot) {
                if (this.findOwnAi().iCmd == 2) {
                    this.findOwnAi().iCmd = 0;
                }
            }
            this.markPosition(-1);
            var gObj = FightingModule.groundLayerSubObj[curPutIdx];
            this.bulletX = gObj.x + 41;
            this.bulletY = gObj.y + 41 - 10;
            var pFightObj = ConstValue.P_FIGHT_OBJ.getPlayerDataByRid(this.roleId + "");
            var bData = { "side": 1, "x": this.bulletX, "y": this.bulletY, "name": bulletId, "curIdx": curPutIdx, "PPSkinID": pFightObj.PPSkinID }; //this.groundObj.getCurIdx()
            var bt = new Fight.Bullet(bData);
            bt.setOwner(this);
            bt.setRow(gObj.getRow());
            bt.setColumn(gObj.getColumn());
            for (var i in FightingModule.aiSubObj) {
                var obj = FightingModule.aiSubObj[i];
                obj.setWalkAble(gObj.getColumn(), gObj.getRow(), false);
            }
            FightingModule.mapLayer.addChild(bt);
            FightingModule.bulletLayerSubObj[bt.name] = bt;
            bt.setRightLimit(this.bulletLen + 1);
            bt.setLeftLimit(this.bulletLen + 1);
            bt.setDownLimit(this.bulletLen + 1);
            bt.setUpLimit(this.bulletLen + 1);
            bt.setRightLimit2(this.bulletLen + 1);
            bt.setLeftLimit2(this.bulletLen + 1);
            bt.setDownLimit2(this.bulletLen + 1);
            bt.setUpLimit2(this.bulletLen + 1);
            FightingModule.mapLayer.swapChildren(bt, this);
            this.markPosition(-1);
            //设置4个方向到障碍物是否有遮挡
            for (var i in FightingModule.mapLayerSubObj) {
                var mapObj = FightingModule.mapLayerSubObj[i.toString()];
                if (mapObj.getType() == 1)
                    continue;
                if (mapObj.getRow() == bt.getRow()) {
                    if (mapObj.getColumn() < bt.getColumn()) {
                        var disLeft = bt.getColumn() - mapObj.getColumn();
                        if (this.bulletLen >= disLeft) {
                            if (bt.getLeftLimit2() > disLeft) {
                                bt.setLeftLimit2(disLeft);
                            }
                        }
                    }
                    if (mapObj.getColumn() > bt.getColumn()) {
                        var disRight = mapObj.getColumn() - bt.getColumn();
                        if (this.bulletLen >= disRight) {
                            if (bt.getRightLimit2() > disRight) {
                                bt.setRightLimit2(disRight);
                            }
                        }
                    }
                }
                if (mapObj.getColumn() == bt.getColumn()) {
                    if (mapObj.getRow() < bt.getRow()) {
                        var disUp = bt.getRow() - mapObj.getRow();
                        if (this.bulletLen >= disUp) {
                            if (bt.getUpLimit2() > disUp) {
                                bt.setUpLimit2(disUp);
                            }
                        }
                    }
                    if (mapObj.getRow() > bt.getRow()) {
                        var disDown = mapObj.getRow() - bt.getRow();
                        if (this.bulletLen >= disDown) {
                            if (bt.getDownLimit2() > disDown) {
                                bt.setDownLimit2(disDown);
                            }
                        }
                    }
                }
            }
            //设置4个方向到边界遮挡
            var disLimitLeft = bt.getColumn() + 1; //左边界
            if (this.bulletLen >= disLimitLeft) {
                if (bt.getLeftLimit2() > disLimitLeft) {
                    bt.setLeftLimit2(disLimitLeft);
                }
            }
            var disLimitRight = ConstValue.P_FIGHT_OBJ.getInitColumn() - bt.getColumn(); //右边界
            if (this.bulletLen >= disLimitRight) {
                if (bt.getRightLimit2() > disLimitRight) {
                    bt.setRightLimit2(disLimitRight);
                }
            }
            var disLimitUp = bt.getRow() + 1; //上边界
            if (this.bulletLen >= disLimitUp) {
                if (bt.getUpLimit2() > disLimitUp) {
                    bt.setUpLimit2(disLimitUp);
                }
            }
            var disLimitDown = ConstValue.P_FIGHT_OBJ.getInitRow() - bt.getRow(); //下边界
            if (this.bulletLen >= disLimitDown) {
                if (bt.getDownLimit2() > disLimitDown) {
                    bt.setDownLimit2(disLimitDown);
                }
            }
            var selfBobo = true;
            for (var i in FightingModule.bulletLayerSubObj) {
                if (i != bt.name) {
                    var obj = FightingModule.bulletLayerSubObj[i];
                    if (bt.getRow() == obj.getRow() && bt.getColumn() == obj.getColumn()) {
                        selfBobo = false;
                        if (obj.getPreBobo() != null) {
                            for (var j in obj.getPreBobo()) {
                                var objPre = FightingModule.bulletLayerSubObj[j];
                                bt.setPreBobo(objPre.name);
                            }
                        }
                        else {
                            bt.setPreBobo(obj.name);
                        }
                    }
                    else if (bt.getRow() == obj.getRow()) {
                        if (bt.getColumn() > obj.getColumn()) {
                            if (obj.getRightLimit2() >= (bt.getColumn() - obj.getColumn())) {
                                selfBobo = false;
                                if (obj.getPreBobo() != null) {
                                    for (var j in obj.getPreBobo()) {
                                        var objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }
                                else {
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }
                        else {
                            if (obj.getLeftLimit2() >= (obj.getColumn() - bt.getColumn())) {
                                selfBobo = false;
                                if (obj.getPreBobo() != null) {
                                    for (var j in obj.getPreBobo()) {
                                        var objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }
                                else {
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }
                    }
                    else if (bt.getColumn() == obj.getColumn()) {
                        if (obj.getRow() > bt.getRow()) {
                            if (obj.getUpLimit2() >= (obj.getRow() - bt.getRow())) {
                                if (obj.getPreBobo() != null) {
                                    for (var j in obj.getPreBobo()) {
                                        var objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }
                                else {
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }
                        else {
                            if (obj.getDownLimit2() >= (bt.getRow() - obj.getRow())) {
                                if (obj.getPreBobo() != null) {
                                    for (var j in obj.getPreBobo()) {
                                        var objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }
                                else {
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }
                    }
                }
            }
            if (selfBobo)
                bt.baozha();
            if (this.aiRobot) {
                this.findOwnAi().moveNext();
            }
        };
        //定位
        Player.prototype.markPosition = function (direct) {
            var curIdx;
            var dis = 10000;
            var bulX = 0;
            var bulY = 0;
            var ggObj = null;
            var fixX = 5;
            var fixY = 41;
            var door = null;
            for (var i in FightingModule.groundLayerSubObj) {
                var gObj = FightingModule.groundLayerSubObj[i];
                var pa = new egret.Point(this.x + fixX, this.y + fixY);
                var tX = gObj.x + 41;
                var tY = gObj.y + 41;
                var pb = new egret.Point(tX, tY);
                var tDis = egret.Point.distance(pa, pb);
                if (tDis <= dis) {
                    curIdx = i;
                    dis = tDis;
                    bulX = tX;
                    bulY = tY;
                    ggObj = gObj;
                }
                if (gObj.getSubType() == 7 || gObj.getSubType() == -1) {
                    door = gObj;
                }
            }
            //最后得到最近的值
            this.curMapIdx = curIdx;
            this.bulletX = bulX;
            this.bulletY = bulY - 10;
            this.groundObj = ggObj;
            this.row = this.groundObj.getRow();
            this.column = this.groundObj.getColumn();
            for (var i in FightingModule.mapLayerSubObj) {
                var obj = FightingModule.mapLayerSubObj[i];
                if (obj.getRow() <= this.row &&
                    FightingModule.mapLayer.getChildIndex(obj) >= FightingModule.mapLayer.getChildIndex(this)) {
                    this.changeIndex(obj, 1);
                }
                if (obj.getRow() - 1 == this.row && obj.getColumn() == this.column &&
                    FightingModule.mapLayer.getChildIndex(obj) <= FightingModule.mapLayer.getChildIndex(this)) {
                    this.changeIndex(obj, 2);
                    break;
                }
            }
            if (this.groundObj.getSubType() > 0) {
                CommonTools.log("吃东西啦》。。。。。。");
                var playerID = 0;
                if (this.isAI == 1) {
                    playerID = this.roleId;
                }
                if (this.isMainPlayer || this.isAI == 1) {
                    CommonAudioHandle.playEffect("eatProp_mp3", 1);
                    var sData = CommonTools.getDataJsonStr("pickItem", 1, { itype: this.groundObj.getSubType(), idx: parseInt(this.curMapIdx), playerID: playerID });
                    ConstValue.P_NET_OBJ.sendData2(sData);
                }
                this.groundObj.clearSub();
                if (this.aiRobot) {
                    if (this.findOwnAi().iCmd == 3) {
                        this.findOwnAi().iCmd = 0;
                        this.findOwnAi().moveNext();
                    }
                }
            }
            // CommonTools.logAI("markPosition=============this.curMapIdx："+this.curMapIdx+" this.row："+this.row+" this.column："+this.column);
            var danger = FightingModule.groundLayerSubObjDanger[this.groundObj.getColumn() + "_" + this.groundObj.getRow()];
            if (danger.dangerCount > 0 && !this.death) {
                this.death = true;
                var playerID = 0;
                if (this.isAI == 1) {
                    playerID = this.roleId;
                }
                var sData = CommonTools.getDataJsonStr("syncBoomPlayer", 1, { paopaoID: this.groundObj.dangerPaoPaoObj.name, x: this.groundObj.dangerPaoPaoObj.x, y: this.groundObj.dangerPaoPaoObj.y, idx: this.groundObj.dangerPaoPaoObj.curIdx, killrid: this.roleId, killidx: parseInt(this.curMapIdx), playerID: playerID });
                ConstValue.P_NET_OBJ.sendData2(sData);
            }
            if (this.isMainPlayer) {
                for (var i in FightingModule.aiSubObj) {
                    var obj = FightingModule.aiSubObj[i];
                    if (obj.aiObj.getColumn() == this.column && obj.aiObj.getRow() == this.row && obj.visible && obj.aiObj.aiLevel >= 50) {
                        obj.stopAI();
                        var sData = CommonTools.getDataJsonStr("kill_player_by_monster", 1, { attacker_pid: obj.aiObj.roleId, beattacker_pid: this.roleId });
                        ConstValue.P_NET_OBJ.sendData2(sData);
                        return;
                    }
                }
            }
        };
        Player.prototype.getRow = function () {
            return this.row;
        };
        Player.prototype.getColumn = function () {
            return this.column;
        };
        Player.prototype.clear = function () {
            if (this.func != null) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.func, this);
                this.func = null;
            }
            this.bodyAniUp = null;
            this.bodyAniDown = null;
            this.bodyAniLeft = null;
            this.bodyAniRight = null;
            this.bodyAniUpStatic = null;
            this.bodyAniDownStatic = null;
            this.bodyAniLeftStatic = null;
            this.bodyAniRightStatic = null;
            this.bodyAni = null;
            this.buffAnim = null;
        };
        return Player;
    }(egret.DisplayObjectContainer));
    Fight.Player = Player;
    __reflect(Player.prototype, "Fight.Player");
})(Fight || (Fight = {}));
//# sourceMappingURL=Player.js.map