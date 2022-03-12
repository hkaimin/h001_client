var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//AI组件
var AIUtil3 = (function () {
    function AIUtil3(playerObj, testMap, initRow, initColumn, appMode) {
        this.aiObj = null; //AI对象
        this.iCmd = 0; //0无命令 1逃生 2放炮 3吃东西
        this.curPathPointIndex = 0;
        this.boxMap = {}; //可以炸的箱子
        this.curBoxMapIdex = 0;
        this.workMap = {}; //可以到达的格子
        this.isVirtualOpen = false; //虚拟开放
        this.iOpenState = false;
        this.delayFunc = null;
        this.delayTimer = null;
        this.isSameCR = false;
        this.aiObj = playerObj;
        this.aiObj.aiRobot = true;
        this.initRow = initRow;
        this.initColumn = initColumn;
        if (appMode == 1) {
            this.matrix = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];
        }
        else if (appMode == 2) {
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
        }
        this.grid = new PF.Grid(initColumn, initRow, this.matrix);
        this.op = new PF.Option();
        this.op.allowDiagonal = false; //对角线
        this.finder = new PF.AStarFinder(this.op);
        var count = 0;
        for (var i = 0; i < initRow; i++) {
            for (var j = 0; j < initColumn; j++) {
                if (testMap[count] > 0 && testMap[count] < 100) {
                    // CommonTools.logDebug("-setWalkableAt--------false-----------x, y"+j+","+i)
                    this.grid.setWalkableAt(j, i, false);
                    var mapType = ConstValue.P_CONFIG["MapBase"][testMap[count].toString()]["Type"];
                    if (mapType == 3) {
                        var xDis = Math.abs(this.aiObj.getColumn() - j);
                        if (this.boxMap[xDis.toString()] == null) {
                            this.boxMap[xDis.toString()] = {};
                        }
                        this.boxMap[xDis.toString()][j + "_" + i] = [j, i];
                    }
                }
                count++;
            }
        }
        for (var i = 0; i < initRow; i++) {
            for (var j = 0; j < initColumn; j++) {
                var tPath = this.getPath(j, i);
                if (tPath.length > 0) {
                    // CommonTools.logDebug("workmap-------------------x:"+j+" y:"+i)
                    this.workMap[j + "_" + i] = [j, i];
                }
            }
        }
        // CommonTools.printMap(this.workMap);
    }
    AIUtil3.prototype.beNotifyHasFood = function (x, y) {
        CommonTools.logAI("----------------***卧槽有东西吃了,看下能到达吗 " + x + "_" + y);
        var tPath = this.getPath(x, y);
        if (tPath.length > 0) {
            CommonTools.logAI("----------------***就在眼前，去吃");
            this.isVirtualOpen = false;
            this.iCmd = 3;
            this.removeDelay();
            this.resetMove(tPath);
            CommonTools.logAI("move------55555555555555555555555555555555");
            this.moveNext();
        }
        else {
            CommonTools.logAI("----------------***蛋疼无路可以过去吃");
        }
    };
    AIUtil3.prototype.moveNext = function () {
        if (!this.iOpenState)
            return;
        if (this.isConnectEnemy()) {
            CommonTools.logAI("----------------***发现敌人");
            if (this.isHasBoom()) {
                CommonTools.logAI("----------------***发现有炸弹");
                CommonTools.logAI("----------------***赶紧逃跑");
                this.iCmd = 1;
                var safePath = this.getSafePath();
                var tPath = this.getPath(safePath[0], safePath[1]);
                this.resetMove(tPath);
            }
            else {
                var tEnemyPath = this.getPath(this.getOtherPlayer().getColumn(), this.getOtherPlayer().getRow());
                if (tEnemyPath.length > 0) {
                    CommonTools.logAI("----------------***杀啊。。。");
                    this.iCmd = 2;
                    this.resetMove(tEnemyPath);
                }
            }
        }
        else {
            CommonTools.logAI("----------------***没有发现敌人");
            if (this.isHasBoom()) {
                if (!this.isSameCR) {
                    CommonTools.logAI("----------------***发现有炸弹");
                    CommonTools.logAI("----------------***赶紧逃跑");
                    var safePath = this.getSafePath();
                    CommonTools.logAI("----------------***safePath:" + safePath);
                    var tPath = this.getPath(safePath[0], safePath[1]);
                    if (tPath.length > 0) {
                        this.iCmd = 1;
                        this.resetMove(tPath);
                    }
                }
            }
            else {
                CommonTools.logAI("----------------***不危险，找箱子");
                this.isSameCR = false;
                var boxGet = this.getNextBox();
                if (this.iCmd == 1) {
                    this.iCmd = 0;
                }
                if (boxGet != null && this.iCmd == 0) {
                    this.grid.setWalkableAt(boxGet[0], boxGet[1], true);
                    this.isVirtualOpen = true;
                    var tBoxPath = this.getPath(boxGet[0], boxGet[1]);
                    this.grid.setWalkableAt(boxGet[0], boxGet[1], false); //关回去
                    if (tBoxPath.length > 0) {
                        CommonTools.logAI("----------------***找箱子");
                        this.iCmd = 2;
                        this.resetMove(tBoxPath);
                    }
                }
            }
        }
        if (this.iCmd == 0) {
            CommonTools.logAI("----------------***没有命令，主人");
            CommonTools.logAI("move------6666666666666666666666666666666666");
            this.moveNext(); //执行下个命令
            return;
        }
        this.curPathPointIndex++;
        CommonTools.logAI("this.iCmd------------aaaaaaaaaaaa----------" + this.iCmd + " this.curPathPointIndex:" + this.curPathPointIndex + " this.curPath:" + this.curPath);
        var iMax = this.curPath.length;
        if (this.isVirtualOpen)
            iMax = this.curPath.length - 1;
        if (this.curPathPointIndex >= iMax) {
            this.curPathPointIndex = 0;
            if (this.isVirtualOpen) {
                this.isVirtualOpen = false;
                CommonTools.logAI("----------------***找到箱子了，要放炮了");
                var sData = CommonTools.getDataJsonStr("syncPut", 1, { x: this.aiObj.x, y: this.aiObj.y, idx: parseInt(this.aiObj.curMapIdx), playerID: this.aiObj.roleId });
                ConstValue.P_NET_OBJ.sendData2(sData);
            }
            else {
                CommonTools.logAI("----------------***到达终点，找下一件事情做");
                if (this.iCmd == 1) {
                    CommonTools.logAI("----------------***逃生中，躲3秒");
                    if (this.isConnectEnemy()) {
                        this.removeDelay();
                        this.delayFunc = function () {
                            CommonTools.logAI("move------7777777777777777777777777777777777");
                            if (this.iCmd == 1) {
                                CommonTools.log("move------7777777777777777777777777777777777");
                                this.moveNext(); //执行下个命令
                            }
                        };
                        this.Delay(10);
                    }
                    else {
                        this.removeDelay();
                        this.delayFunc = function () {
                            CommonTools.logAI("move------7777777777777777777777777777777777");
                            if (this.iCmd == 1) {
                                this.moveNext(); //执行下个命令
                            }
                        };
                        this.Delay(3800);
                    }
                }
                else if (this.iCmd == 3) {
                    CommonTools.logAI("----------------***吃了东西了");
                    this.iCmd = 0;
                    CommonTools.logAI("move------8888888888888888888888888888888888888888");
                    this.moveNext(); //执行下个命令
                }
                else if (this.iCmd == 2) {
                    CommonTools.logAI("----------------***炸死个扑街");
                    var sData = CommonTools.getDataJsonStr("syncPut", 1, { x: this.aiObj.x, y: this.aiObj.y, idx: parseInt(this.aiObj.curMapIdx), playerID: this.aiObj.roleId });
                    ConstValue.P_NET_OBJ.sendData2(sData);
                }
                else {
                    CommonTools.logAI("move------999999999999999999999999999999999999");
                    this.moveNext(); //执行下个命令
                }
            }
            return;
        }
        else {
            if (this.iCmd == 1 && this.curPathPointIndex >= 4 && this.isConnectEnemy()) {
                CommonTools.logAI("----------------***逃跑也放雷");
                var sData = CommonTools.getDataJsonStr("syncPut", 1, { x: this.aiObj.x, y: this.aiObj.y, idx: parseInt(this.aiObj.curMapIdx), playerID: this.aiObj.roleId });
                ConstValue.P_NET_OBJ.sendData2(sData);
            }
        }
        this.move(this.curPath[this.curPathPointIndex][0], this.curPath[this.curPathPointIndex][1]);
    };
    AIUtil3.prototype.resetMove = function (tPath) {
        this.curPathPointIndex = 0;
        this.curPath = tPath;
    };
    AIUtil3.prototype.openBlock = function (x, y) {
        this.setWalkAble(x, y, true);
        var key = x + "_" + y;
        this.workMap[key] = [x, y];
        CommonTools.printMap(this.workMap);
        var diskey = "";
        for (var i in this.boxMap) {
            var obj = this.boxMap[i];
            for (var j in obj) {
                var subobj = obj[j];
                if (subobj[0] == x && subobj[1] == y) {
                    diskey = i;
                    break;
                }
            }
            if (diskey != "") {
                break;
            }
        }
        if (diskey != "") {
            this.boxMap[diskey][x + "_" + y] = null;
            delete this.boxMap[diskey][x + "_" + y];
        }
        for (var i = 0; i < this.initRow; i++) {
            for (var j = 0; j < this.initColumn; j++) {
                var tPath = this.getPath(j, i);
                if (tPath.length > 0) {
                    if (this.workMap[j + "_" + i] == null) {
                        this.workMap[j + "_" + i] = [j, i];
                    }
                }
            }
        }
    };
    /**
     * 延时执行操作
     */
    AIUtil3.prototype.Delay = function (time) {
        this.delayTimer = new egret.Timer(time, 1);
        this.delayTimer.addEventListener(egret.TimerEvent.TIMER, this.delayFunc, this);
        this.delayTimer.start();
    };
    AIUtil3.prototype.removeDelay = function () {
        if (this.delayTimer != null) {
            this.delayTimer.stop();
            this.delayTimer.removeEventListener(egret.TimerEvent.TIMER, this.delayFunc, this);
            this.delayTimer = null;
            this.delayFunc = null;
        }
    };
    AIUtil3.prototype.getNextBox = function () {
        var tBox = this.boxMap[this.curBoxMapIdex.toString()];
        var iCount = 0;
        for (var i in tBox) {
            iCount++;
        }
        while (iCount == 0) {
            this.curBoxMapIdex++;
            if (this.curBoxMapIdex >= this.initColumn) {
                return null;
            }
            else {
                tBox = this.boxMap[this.curBoxMapIdex.toString()];
                for (var i in tBox) {
                    iCount++;
                }
            }
        }
        for (var i in tBox) {
            CommonTools.logAI("getNextBox************************tBox[i]:" + tBox[i]);
            if ((FightingModule.curBarrNo == 29 || FightingModule.curBarrNo == 30) && (tBox[i][0] == 9 && tBox[i][1] == 0))
                continue;
            this.grid.setWalkableAt(tBox[i][0], tBox[i][1], true);
            var tBoxPath = this.getPath(tBox[i][0], tBox[i][1]);
            this.grid.setWalkableAt(tBox[i][0], tBox[i][1], false); //关回去
            if (tBoxPath.length > 0) {
                return tBox[i];
            }
        }
        CommonTools.logAI("getNextBox************xxxxxx***no box*********");
        this.curBoxMapIdex++;
        return this.getNextBox();
    };
    AIUtil3.prototype.isHasBoom = function () {
        if (this.isConnectEnemy()) {
            for (var bul in FightingModule.bulletLayerSubObj) {
                return true;
            }
        }
        else {
            for (var bul in FightingModule.bulletLayerSubObj) {
                var bulobj = FightingModule.bulletLayerSubObj[bul];
                if (bulobj.owner.roleId == this.aiObj.roleId) {
                    return true;
                }
            }
        }
        return false;
    };
    AIUtil3.prototype.getSafePath = function () {
        var miniLenChoose = null;
        var pathLen = 100;
        CommonTools.printMap(this.workMap);
        if (this.isConnectEnemy()) {
            for (var i in this.workMap) {
                var obj = this.workMap[i];
                var isSafe = true;
                for (var bul in FightingModule.bulletLayerSubObj) {
                    var bulobj = FightingModule.bulletLayerSubObj[bul];
                    if (bulobj.getColumn() == obj[0] || bulobj.getRow() == obj[1]) {
                        isSafe = false;
                        break;
                    }
                }
                if (isSafe) {
                    var tempPath = this.getPath(obj[0], obj[1]);
                    if (tempPath.length > 0 && tempPath.length < pathLen) {
                        pathLen = tempPath.length;
                        miniLenChoose = obj;
                    }
                }
            }
        }
        else {
            for (var i in this.workMap) {
                // CommonTools.logAI("getSafePath--------------------i-"+i)
                var obj = this.workMap[i];
                var isSafe = true;
                for (var bul in FightingModule.bulletLayerSubObj) {
                    // CommonTools.logAI("getSafePath--------------------bul-"+bul)
                    var bulobj = FightingModule.bulletLayerSubObj[bul];
                    if (bulobj.owner.roleId == this.aiObj.roleId) {
                        if (bulobj.getColumn() == obj[0] || bulobj.getRow() == obj[1]) {
                            isSafe = false;
                            break;
                        }
                    }
                }
                if (isSafe) {
                    var tempPath = this.getPath(obj[0], obj[1]);
                    if (tempPath.length > 0 && tempPath.length < pathLen) {
                        pathLen = tempPath.length;
                        miniLenChoose = obj;
                        CommonTools.logAI("getSafePath----miniLenChoose-----------------" + miniLenChoose);
                    }
                }
            }
        }
        if (miniLenChoose != null) {
            return miniLenChoose;
        }
        else {
            this.isSameCR = true;
            pathLen = 0;
            for (var i in this.workMap) {
                var obj = this.workMap[i];
                var tempPath = this.getPath(obj[0], obj[1]);
                if (tempPath.length > pathLen) {
                    pathLen = tempPath.length;
                    miniLenChoose = obj;
                    CommonTools.logAI("getSafePath--22--miniLenChoose-----------------" + miniLenChoose);
                }
            }
        }
        if (miniLenChoose != null) {
            return miniLenChoose;
        }
        return null;
    };
    AIUtil3.prototype.getPath = function (xEnd, yEnd) {
        //[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
        var tGrid = this.grid.clone();
        return this.finder.findPath(this.aiObj.getColumn(), this.aiObj.getRow(), xEnd, yEnd, tGrid);
    };
    AIUtil3.prototype.startAI = function () {
        this.iOpenState = true;
        if (this.isConnectEnemy()) {
            this.moveNext();
        }
        else {
            //开局来一炮
            CommonTools.logAI("----------------***开局");
            this.moveNext();
            // let sData = CommonTools.getDataJsonStr("syncPut",1,{x:this.aiObj.x,y:this.aiObj.y,idx:parseInt(this.aiObj.curMapIdx),playerID:this.aiObj.roleId});
            // ConstValue.P_NET_OBJ.sendData2(sData);
        }
    };
    AIUtil3.prototype.stopAI = function () {
        this.iOpenState = false;
    };
    //目前是1v1
    AIUtil3.prototype.isConnectEnemy = function () {
        var pathForEnemy = this.getPath(this.getOtherPlayer().getColumn(), this.getOtherPlayer().getRow());
        if (pathForEnemy.length == 0)
            return false;
        return true;
    };
    AIUtil3.prototype.setWalkAble = function (x, y, canWork) {
        this.grid.setWalkableAt(x, y, canWork);
    };
    AIUtil3.prototype.getOtherPlayer = function () {
        for (var i in FightingModule.playerLayerSubObj) {
            var pObj = FightingModule.playerLayerSubObj[i];
            if (pObj.roleId != this.aiObj.roleId && pObj.isAI == 0) {
                return pObj;
            }
        }
        return null;
    };
    AIUtil3.prototype.move = function (endX, endY) {
        var mainPl = this.aiObj;
        if (this.aiObj.func == null) {
            this.aiObj.func = function (e) {
                mainPl.setMoving(true);
                mainPl.move(-1, true);
            };
            this.aiObj.addEventListener(egret.Event.ENTER_FRAME, this.aiObj.func, this.aiObj);
        }
        this.aiObj.setMoving(true);
        // this.aiObj.move(2,false);
        this.aiObj.moveDetail(endX, endY);
    };
    AIUtil3.prototype.clear = function () {
        this.aiObj = null;
        this.grid = null;
        this.op = null;
        this.finder = null;
        this.matrix = null;
        this.curPath = null;
        this.boxMap = {};
        this.workMap = {};
        this.removeDelay();
    };
    return AIUtil3;
}());
__reflect(AIUtil3.prototype, "AIUtil3");
//# sourceMappingURL=AIUtil3.js.map