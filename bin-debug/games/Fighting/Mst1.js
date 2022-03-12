var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//AI组件
var Mst1 = (function () {
    function Mst1(playerObj, testMap, initRow, initColumn, appMode) {
        this.aiObj = null; //AI对象
        this.iCmd = 0; //0无命令 1找地方 2追他
        this.curPathPointIndex = 0;
        this.boxMap = {}; //可以炸的箱子
        this.curBoxMapIdex = 0;
        this.workMap = {}; //可以到达的格子
        this.isVirtualOpen = false; //虚拟开放
        this.iOpenState = false;
        this.delayFunc = null;
        this.delayTimer = null;
        this.noTarget = false;
        this.isStopByBullet = false;
        this.isFirstMove = true;
        this.releaseAiCnt = 0;
        this.aiObj = playerObj;
        this.bornRow = this.aiObj.getRow();
        this.bornColumn = this.aiObj.getColumn();
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
    Mst1.prototype.runToHim = function () {
        var tEnemyPath = this.getPath(this.getOtherPlayer().getColumn(), this.getOtherPlayer().getRow());
        if (tEnemyPath.length > 0) {
            CommonTools.logAI("----------------***杀啊。。。");
            this.iCmd = 2;
            this.resetMove(tEnemyPath);
        }
    };
    Mst1.prototype.walkNoTarget = function () {
        this.resetStop();
        CommonTools.logAI("----------------***无目的走");
        var safePath = this.getSafePath();
        var tPath = this.getPath(safePath[0], safePath[1]);
        if (tPath.length > 0) {
            this.iCmd = 1;
            this.resetMove(tPath);
        }
    };
    Mst1.prototype.moveNext = function () {
        if (!this.iOpenState)
            return;
        if (this.aiObj.getColumn() == ConstValue.P_FIGHT_OBJ.getMainPlayer().getColumn() &&
            this.aiObj.getRow() == ConstValue.P_FIGHT_OBJ.getMainPlayer().getRow()) {
            this.stopAI();
            var sData = CommonTools.getDataJsonStr("kill_player_by_monster", 1, { attacker_pid: this.aiObj.roleId, beattacker_pid: ConstValue.P_FIGHT_OBJ.getMainPlayer().roleId });
            ConstValue.P_NET_OBJ.sendData2(sData);
            return;
        }
        if (this.isConnectEnemy() && !this.isStopByBullet) {
            CommonTools.logAI("----------------***发现敌人");
            //追他
            if (this.iCmd == 0)
                this.runToHim();
        }
        else {
            if (this.isStopByBullet) {
                CommonTools.logAI("----------------***发现子弹，躲开");
            }
            else {
                CommonTools.logAI("----------------***没有发现敌人");
            }
            //无目的走
            if (this.iCmd == 0)
                this.walkNoTarget();
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
        if (this.curPathPointIndex >= iMax) {
            this.curPathPointIndex = 0;
            this.iCmd = 0;
            CommonTools.logAI("----------------***到达终点，找下一件事情做");
            CommonTools.logAI("move------999999999999999999999999999999999999");
            if (this.isFirstMove) {
                this.delayFunc = this.moveNext;
                this.Delay(1000); //怪物1开始就卡住，3秒后检查
                if (this.releaseAiCnt == 0) {
                    this.releaseAiCnt += 1;
                }
            }
            else {
                this.moveNext(); //执行下个命令
            }
            return;
        }
        this.isFirstMove = false;
        if (this.releaseAiCnt == 1) {
            this.releaseAiCnt += 1;
            var sData = CommonTools.getDataJsonStr("rescue_monster", 1, { monsterId: this.aiObj.roleId });
            ConstValue.P_NET_OBJ.sendData2(sData);
        }
        this.move(this.curPath[this.curPathPointIndex][0], this.curPath[this.curPathPointIndex][1]);
    };
    Mst1.prototype.resetMove = function (tPath) {
        this.curPathPointIndex = 0;
        this.curPath = tPath;
    };
    Mst1.prototype.beNotifyHasFood = function (x, y) {
    };
    Mst1.prototype.openBlock = function (x, y) {
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
    Mst1.prototype.Delay = function (time) {
        this.delayTimer = new egret.Timer(time, 1);
        this.delayTimer.addEventListener(egret.TimerEvent.TIMER, this.delayFunc, this);
        this.delayTimer.start();
    };
    Mst1.prototype.removeDelay = function () {
        if (this.delayTimer != null) {
            this.delayTimer.stop();
            this.delayTimer.removeEventListener(egret.TimerEvent.TIMER, this.delayFunc, this);
            this.delayTimer = null;
            this.delayFunc = null;
        }
    };
    Mst1.prototype.getSafePath = function () {
        try {
            CommonTools.logAI("getSafePath----xxxxx-----------------");
            var miniLenChoose = null;
            var pathLen = 100;
            CommonTools.printMap(this.workMap);
            if (this.isStopByBullet) {
                for (var i in this.workMap) {
                    // CommonTools.logAI("getSafePath--------------------i-"+i)
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
                            CommonTools.logAI("getSafePath----miniLenChoose--------a---------" + miniLenChoose);
                            break;
                        }
                    }
                }
            }
            else {
                pathLen = 0;
                var ran = CommonTools.getRandomFloor(10, false);
                var sum = 0;
                for (var i in this.workMap) {
                    // CommonTools.logAI("getSafePath--------------------i-"+i)
                    if (sum >= ran)
                        break;
                    var obj = this.workMap[i];
                    if ((Math.abs(obj[0] - this.aiObj.getColumn()) >= 1 && Math.abs(obj[0] - this.aiObj.getColumn()) <= this.aiObj.getLWalkAreaColumn() && Math.abs(obj[0] - this.bornColumn) <= this.aiObj.getLWalkAreaColumn()) ||
                        (Math.abs(obj[1] - this.aiObj.getRow()) >= 1 && Math.abs(obj[1] - this.aiObj.getRow()) <= this.aiObj.getLWalkAreaRow() && Math.abs(obj[1] - this.bornRow) <= this.aiObj.getLWalkAreaRow())) {
                        var tempPath = this.getPath(obj[0], obj[1]);
                        if (tempPath.length > 0 && tempPath.length > pathLen) {
                            pathLen = tempPath.length;
                            miniLenChoose = obj;
                            CommonTools.logAI("getSafePath----miniLenChoose--------b---------" + miniLenChoose + " this.aiObj.roleId" + this.aiObj.roleId);
                            sum++;
                        }
                    }
                }
            }
            if (miniLenChoose != null) {
                return miniLenChoose;
            }
            else {
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
        }
        catch (error) {
            CommonTools.logError("getSafePath========mst==========error " + error);
        }
        return null;
    };
    Mst1.prototype.getPath = function (xEnd, yEnd) {
        //[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
        var tGrid = this.grid.clone();
        return this.finder.findPath(this.aiObj.getColumn(), this.aiObj.getRow(), xEnd, yEnd, tGrid);
    };
    Mst1.prototype.startAI = function () {
        this.iOpenState = true;
        if (this.isConnectEnemy()) {
        }
        else {
            //开局来一炮
            CommonTools.logAI("----------------***开局");
            this.moveNext();
            // let sData = CommonTools.getDataJsonStr("syncPut",1,{x:this.aiObj.x,y:this.aiObj.y,idx:parseInt(this.aiObj.curMapIdx),playerID:this.aiObj.roleId});
            // ConstValue.P_NET_OBJ.sendData2(sData);
        }
    };
    Mst1.prototype.stopAI = function () {
        this.iOpenState = false;
    };
    Mst1.prototype.setStop = function () {
        this.isStopByBullet = true;
        this.iCmd = 0;
    };
    Mst1.prototype.resetStop = function () {
        if (this.isStopByBullet) {
            this.isStopByBullet = false;
        }
    };
    //目前是1v1
    Mst1.prototype.isConnectEnemy = function () {
        var pathForEnemy = this.getPath(this.getOtherPlayer().getColumn(), this.getOtherPlayer().getRow());
        if (pathForEnemy.length == 0)
            return false;
        //首先要相通，然后距离小于3感知范围
        if (Math.abs(this.getOtherPlayer().getColumn() - this.aiObj.getColumn()) <= 3 && Math.abs(this.getOtherPlayer().getRow() - this.aiObj.getRow()) <= 3)
            return true;
        return false;
    };
    Mst1.prototype.setWalkAble = function (x, y, canWork) {
        this.grid.setWalkableAt(x, y, canWork);
    };
    Mst1.prototype.getOtherPlayer = function () {
        for (var i in FightingModule.playerLayerSubObj) {
            var pObj = FightingModule.playerLayerSubObj[i];
            // CommonTools.log("---xxxxxxx00000---11---"+pObj.roleId+"  "+ this.aiObj.roleId + " "+ pObj.isAI)
            if (pObj.roleId != this.aiObj.roleId && pObj.isAI == 0) {
                // CommonTools.log("---xxxxxxx00000---222---"+pObj.roleId)
                return pObj;
            }
        }
        return null;
    };
    Mst1.prototype.move = function (endX, endY) {
        var mainPl = this.aiObj;
        if (this.aiObj.func == null) {
            this.aiObj.func = function (e) {
                mainPl.setMoving(true);
                mainPl.move(-1, true);
                CommonTools.log("-------------xxx11  ");
            };
            this.aiObj.addEventListener(egret.Event.ENTER_FRAME, this.aiObj.func, this.aiObj);
        }
        this.aiObj.setMoving(true);
        // this.aiObj.move(2,false);
        this.aiObj.moveDetail(endX, endY);
    };
    Mst1.prototype.clear = function () {
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
    return Mst1;
}());
__reflect(Mst1.prototype, "Mst1");
//# sourceMappingURL=Mst1.js.map