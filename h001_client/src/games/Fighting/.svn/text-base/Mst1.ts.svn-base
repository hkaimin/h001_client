//AI组件
class Mst1 {

	public aiObj = null;//AI对象
	public iCmd = 0;//0无命令 1找地方 2追他
	private grid;
	private op;
	private finder;
	private matrix;
	private curPathPointIndex = 0;
	private curPath ;
	private boxMap = {};//可以炸的箱子
	private curBoxMapIdex = 0;
	private initRow;
	private initColumn;
	private workMap = {};//可以到达的格子
	private isVirtualOpen = false;//虚拟开放
	private iOpenState = false;
	private delayFunc = null;
	private delayTimer = null;
	private noTarget =  false;
	private bornRow;
	private bornColumn;
	private isStopByBullet = false;
	private isFirstMove = true;
	private releaseAiCnt = 0;

	public constructor(playerObj,testMap,initRow,initColumn,appMode) {
		this.aiObj = playerObj;
		this.bornRow = this.aiObj.getRow();
		this.bornColumn = this.aiObj.getColumn();
		this.aiObj.aiRobot = true;
		this.initRow = initRow;
		this.initColumn = initColumn;

		if(appMode == 1){
			this.matrix = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
		}else if(appMode == 2){
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
        this.grid = new PF.Grid(initColumn,initRow,this.matrix);
        this.op = new PF.Option();
        this.op.allowDiagonal = false;//对角线
        this.finder = new PF.AStarFinder(this.op);
		let count = 0;
		
		for(let i=0;i<initRow;i++){
			for(let j=0;j<initColumn;j++){
				if(testMap[count] > 0 && testMap[count] < 100){
					// CommonTools.logDebug("-setWalkableAt--------false-----------x, y"+j+","+i)
					this.grid.setWalkableAt(j, i, false);

					let mapType = ConstValue.P_CONFIG["MapBase"][testMap[count].toString()]["Type"];
					if(mapType == 3){
						let xDis = Math.abs(this.aiObj.getColumn() - j);
						if(this.boxMap[xDis.toString()] == null){
							this.boxMap[xDis.toString()] = {}
						}
						this.boxMap[xDis.toString()][j+"_"+i] = [j,i];
					}

				}
				count ++;
			}
		}

		for(let i=0;i<initRow;i++){
			for(let j=0;j<initColumn;j++){
				let tPath = this.getPath(j,i);
				if(tPath.length > 0){
					// CommonTools.logDebug("workmap-------------------x:"+j+" y:"+i)
					this.workMap[j+"_"+i] = [j,i];
				}
			}
		}
		// CommonTools.printMap(this.workMap);
		
	}

	private runToHim(){
		let tEnemyPath = this.getPath(this.getOtherPlayer().getColumn(),this.getOtherPlayer().getRow());
		if(tEnemyPath.length > 0){
			CommonTools.logAI("----------------***杀啊。。。")
			this.iCmd = 2;
			this.resetMove(tEnemyPath);
		}
	}

	private walkNoTarget(){
		this.resetStop();
		CommonTools.logAI("----------------***无目的走")
		let safePath = this.getSafePath();
		let tPath = this.getPath(safePath[0],safePath[1]);
		if(tPath.length > 0){
			this.iCmd = 1;
			this.resetMove(tPath);
		}
	}

	public moveNext(){
		if(!this.iOpenState)return;
		if(this.aiObj.getColumn() == ConstValue.P_FIGHT_OBJ.getMainPlayer().getColumn() && 
			this.aiObj.getRow() == ConstValue.P_FIGHT_OBJ.getMainPlayer().getRow()){
			this.stopAI();
			let sData = CommonTools.getDataJsonStr("kill_player_by_monster",1,{attacker_pid:this.aiObj.roleId,beattacker_pid:ConstValue.P_FIGHT_OBJ.getMainPlayer().roleId});
            ConstValue.P_NET_OBJ.sendData2(sData);
			return;
		}
		if(this.isConnectEnemy() && !this.isStopByBullet){//1.先判断是否与敌人相连
			CommonTools.logAI("----------------***发现敌人")
			//追他
			if(this.iCmd == 0)this.runToHim();

		}else{//1'.不相连
			if(this.isStopByBullet){
				CommonTools.logAI("----------------***发现子弹，躲开")
			}else{
				CommonTools.logAI("----------------***没有发现敌人")
			}
			//无目的走
			if(this.iCmd == 0)this.walkNoTarget();
		}
		if(this.iCmd == 0){
			CommonTools.logAI("----------------***没有命令，主人")
			CommonTools.logAI("move------6666666666666666666666666666666666")
			this.moveNext();//执行下个命令
			return;
		}

		this.curPathPointIndex++;
		CommonTools.logAI("this.iCmd------------aaaaaaaaaaaa----------"+this.iCmd+" this.curPathPointIndex:"+this.curPathPointIndex+" this.curPath:"+this.curPath)
		let iMax = this.curPath.length;
		if(this.curPathPointIndex >= iMax){
			this.curPathPointIndex = 0;
			this.iCmd = 0;
			CommonTools.logAI("----------------***到达终点，找下一件事情做")
			CommonTools.logAI("move------999999999999999999999999999999999999")
			if(this.isFirstMove){
				this.delayFunc = this.moveNext;
				this.Delay(1000);//怪物1开始就卡住，3秒后检查
				if(this.releaseAiCnt == 0){
					this.releaseAiCnt += 1
				}
			}else{
				this.moveNext();//执行下个命令
			}
			return;
		}
		this.isFirstMove = false;
		if(this.releaseAiCnt == 1){
			this.releaseAiCnt += 1;
			let sData = CommonTools.getDataJsonStr("rescue_monster",1,{monsterId:this.aiObj.roleId});
            ConstValue.P_NET_OBJ.sendData2(sData);
		}
		this.move(this.curPath[this.curPathPointIndex][0],this.curPath[this.curPathPointIndex][1]);
	}

	private resetMove(tPath){
		this.curPathPointIndex = 0;
		this.curPath = tPath;
	}

	public beNotifyHasFood(x,y){
		
	}

	public openBlock(x,y){
		this.setWalkAble(x,y,true);
		let key = x+"_"+y;
		this.workMap[key] = [x,y];
		CommonTools.printMap(this.workMap);
		let diskey = "";
		for(let i in this.boxMap){
			let obj = this.boxMap[i];
			for(let j in obj){
				let subobj = obj[j];
				if(subobj[0] == x && subobj[1] == y){
					diskey = i;
					break;
				}
			}
			if(diskey != ""){
				break;
			}
		}

		if(diskey != ""){
			this.boxMap[diskey][x+"_"+y] = null;
			delete this.boxMap[diskey][x+"_"+y];
		}

		for(let i=0;i<this.initRow;i++){
			for(let j=0;j<this.initColumn;j++){
				let tPath = this.getPath(j,i);
				if(tPath.length > 0){
					if(this.workMap[j+"_"+i] == null){
						this.workMap[j+"_"+i] = [j,i];
					}
				}
			}
		}

	}

	/**
     * 延时执行操作
     */
    private Delay(time:number){
        this.delayTimer = new egret.Timer(time,1);
        this.delayTimer.addEventListener(egret.TimerEvent.TIMER, this.delayFunc, this);
        this.delayTimer.start();
    }

	private removeDelay(){
		if(this.delayTimer != null){
			this.delayTimer.stop();
			this.delayTimer.removeEventListener(egret.TimerEvent.TIMER, this.delayFunc, this);
			this.delayTimer = null;
			this.delayFunc = null;
		}
	}

	private getSafePath(){
		try {
			CommonTools.logAI("getSafePath----xxxxx-----------------")
			let miniLenChoose = null;
			let pathLen = 100;
			CommonTools.printMap(this.workMap);
			if(this.isStopByBullet){
				for(let i in this.workMap){
					// CommonTools.logAI("getSafePath--------------------i-"+i)
					let obj = this.workMap[i];
					let isSafe = true;
					for(let bul in FightingModule.bulletLayerSubObj){
						let bulobj = FightingModule.bulletLayerSubObj[bul];
						if(bulobj.getColumn() == obj[0] || bulobj.getRow() == obj[1]){
							isSafe = false;
							break;
						}
					}
					if(isSafe){
						let tempPath = this.getPath(obj[0],obj[1]);
						if(tempPath.length > 0 && tempPath.length <pathLen){
							pathLen = tempPath.length;
							miniLenChoose = obj;
							CommonTools.logAI("getSafePath----miniLenChoose--------a---------"+miniLenChoose)
							break;
						}
					}
				}
			}else{
				pathLen = 0;
				let ran = CommonTools.getRandomFloor(10,false);
				let sum = 0;
				for(let i in this.workMap){
					// CommonTools.logAI("getSafePath--------------------i-"+i)
					if(sum>=ran)break;
					let obj = this.workMap[i];
					if((Math.abs(obj[0] - this.aiObj.getColumn()) >= 1 && Math.abs(obj[0] - this.aiObj.getColumn()) <= this.aiObj.getLWalkAreaColumn() && Math.abs(obj[0] - this.bornColumn) <= this.aiObj.getLWalkAreaColumn()) || 
						(Math.abs(obj[1] - this.aiObj.getRow()) >= 1 && Math.abs(obj[1] - this.aiObj.getRow()) <= this.aiObj.getLWalkAreaRow() && Math.abs(obj[1] - this.bornRow) <= this.aiObj.getLWalkAreaRow())){
						let tempPath = this.getPath(obj[0],obj[1]);
						if(tempPath.length > 0 && tempPath.length > pathLen){
							pathLen = tempPath.length;
							miniLenChoose = obj;
							CommonTools.logAI("getSafePath----miniLenChoose--------b---------"+miniLenChoose+" this.aiObj.roleId"+this.aiObj.roleId)
							sum ++;
						}
					}
					
				}
			}
			

			if(miniLenChoose != null){
				return miniLenChoose;
			}else{
				pathLen = 0;
				for(let i in this.workMap){
					let obj = this.workMap[i];
					let tempPath = this.getPath(obj[0],obj[1]);
					if(tempPath.length>pathLen){
						pathLen = tempPath.length;
						miniLenChoose = obj;
						CommonTools.logAI("getSafePath--22--miniLenChoose-----------------"+miniLenChoose)
					}
				}
			}

			if(miniLenChoose != null){
				return miniLenChoose;
			}
		} catch (error) {
			CommonTools.logError("getSafePath========mst==========error "+ error)
		}
		return null;
	}


	public getPath(xEnd,yEnd){
		//[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
		let tGrid = this.grid.clone();
		return this.finder.findPath(this.aiObj.getColumn(),this.aiObj.getRow(),xEnd,yEnd,tGrid);
	}

	public startAI(){
		this.iOpenState = true;
		if(this.isConnectEnemy()){//1.先判断是否与敌人相连

		}else{//1'.不相连就找箱子炸
				//开局来一炮
				CommonTools.logAI("----------------***开局")
				this.moveNext();
				// let sData = CommonTools.getDataJsonStr("syncPut",1,{x:this.aiObj.x,y:this.aiObj.y,idx:parseInt(this.aiObj.curMapIdx),playerID:this.aiObj.roleId});
            	// ConstValue.P_NET_OBJ.sendData2(sData);
		}
	}

	public stopAI(){
		this.iOpenState = false;
	}

	public setStop(){
		this.isStopByBullet = true;
		this.iCmd = 0;
	}

	public resetStop(){
		if(this.isStopByBullet){
			this.isStopByBullet = false;
		}
	}

	//目前是1v1
	private isConnectEnemy(){
		let pathForEnemy = this.getPath(this.getOtherPlayer().getColumn(),this.getOtherPlayer().getRow());
		if(pathForEnemy.length == 0)return false;
		//首先要相通，然后距离小于3感知范围
		if(Math.abs(this.getOtherPlayer().getColumn() - this.aiObj.getColumn()) <= 3 && Math.abs(this.getOtherPlayer().getRow() - this.aiObj.getRow()) <= 3)return true;
		return false;
	}

	public setWalkAble(x,y,canWork){
		this.grid.setWalkableAt(x, y, canWork);
	}

	private getOtherPlayer(){
		for(let i in FightingModule.playerLayerSubObj){
            let pObj = FightingModule.playerLayerSubObj[i];
			// CommonTools.log("---xxxxxxx00000---11---"+pObj.roleId+"  "+ this.aiObj.roleId + " "+ pObj.isAI)
            if(pObj.roleId != this.aiObj.roleId && pObj.isAI == 0){
				// CommonTools.log("---xxxxxxx00000---222---"+pObj.roleId)
                return pObj;
            }
        }
		return null;
	}

	private move(endX,endY){
		let mainPl = this.aiObj;
        if(this.aiObj.func == null){
            this.aiObj.func = function(e:egret.Event) {
                mainPl.setMoving(true);
                mainPl.move(-1,true);
				CommonTools.log("-------------xxx11  ");
            }
            this.aiObj.addEventListener(egret.Event.ENTER_FRAME, this.aiObj.func, this.aiObj);
        }
		this.aiObj.setMoving(true);
        // this.aiObj.move(2,false);
		this.aiObj.moveDetail(endX,endY);
    }

	public clear(){
		this.aiObj = null;
		this.grid = null;
		this.op = null;
		this.finder = null;
		this.matrix = null;
		this.curPath = null;
		this.boxMap = {};
		this.workMap = {};
		this.removeDelay();
	}

}