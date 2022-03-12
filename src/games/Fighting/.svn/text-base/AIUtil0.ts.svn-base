//AI组件
class AIUtil0 {

	public aiObj = null;//AI对象
	public iCmd = 0;//0无命令 1逃生 2放炮 3吃东西
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
	private isSameCR = false;

	public constructor(playerObj,testMap,initRow,initColumn,appMode) {
		this.aiObj = playerObj;
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

	public beNotifyHasFood(x,y){
		CommonTools.logAI("----------------***卧槽有东西吃了,看下能到达吗 "+x+"_"+y)
		let tPath = this.getPath(x,y);
		if(tPath.length>0){
			CommonTools.logAI("----------------***就在眼前，去吃")
			this.isVirtualOpen = false;
			this.iCmd = 3;
			this.removeDelay();
			this.resetMove(tPath);
			CommonTools.logAI("move------55555555555555555555555555555555")
			this.moveNext();
		}else{
			CommonTools.logAI("----------------***蛋疼无路可以过去吃")
		}
	}

	public moveNext(){
		if(!this.iOpenState)return;

		if(this.isConnectEnemy()){//1.先判断是否与敌人相连

			CommonTools.logAI("----------------***发现敌人")
			if(this.isHasBoom()){//2是否有危险
				CommonTools.logAI("----------------***发现有炸弹")
				CommonTools.logAI("----------------***赶紧逃跑")
				this.iCmd = 1;
				let safePath = this.getSafePath();
				let tPath = this.getPath(safePath[0],safePath[1]);
				this.resetMove(tPath);
			}else{//2'不危险，怼他
				let tEnemyPath = this.getPath(this.getOtherPlayer().getColumn(),this.getOtherPlayer().getRow());
				if(tEnemyPath.length > 0){
					CommonTools.logAI("----------------***杀啊。。。")
					this.iCmd = 2;
					this.resetMove(tEnemyPath);
				}
			}

		}else{//1'.不相连
			CommonTools.logAI("----------------***没有发现敌人")
			if(this.isHasBoom()){//2是否有危险
				if(!this.isSameCR){
					CommonTools.logAI("----------------***发现有炸弹")
					CommonTools.logAI("----------------***赶紧逃跑")
					let safePath = this.getSafePath();
					CommonTools.logAI("----------------***safePath:"+safePath)
					let tPath = this.getPath(safePath[0],safePath[1]);
					if(tPath.length > 0){
						this.iCmd = 1;
						this.resetMove(tPath);
					}
				}
			}else{//2'不危险，找箱子
				CommonTools.logAI("----------------***不危险，找箱子")			
				this.isSameCR = false;
				let boxGet = this.getNextBox();
				if(this.iCmd == 1){
					this.iCmd = 0;
				}
				if(boxGet != null && this.iCmd == 0){
					this.grid.setWalkableAt(boxGet[0],boxGet[1],true);
					this.isVirtualOpen = true;
					let tBoxPath = this.getPath(boxGet[0],boxGet[1]);
					this.grid.setWalkableAt(boxGet[0],boxGet[1],false);//关回去
					if(tBoxPath.length > 0){
						CommonTools.logAI("----------------***找箱子")
						this.iCmd = 2;
						this.resetMove(tBoxPath);
					}
				}
			}

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
		if(this.isVirtualOpen)iMax = this.curPath.length - 1;
		if(this.curPathPointIndex >= iMax){
			this.curPathPointIndex = 0;
			if(this.isVirtualOpen){
				this.isVirtualOpen = false;
				CommonTools.logAI("----------------***找到箱子了，要放炮了")
				let sData = CommonTools.getDataJsonStr("syncPut",1,{x:this.aiObj.x,y:this.aiObj.y,idx:parseInt(this.aiObj.curMapIdx),playerID:this.aiObj.roleId});
            	ConstValue.P_NET_OBJ.sendData2(sData);
			}else{
				CommonTools.logAI("----------------***到达终点，找下一件事情做")
				if(this.iCmd == 1){
					CommonTools.logAI("----------------***逃生中，躲3秒")

					if(this.isConnectEnemy()){
						this.removeDelay();
						this.delayFunc = function(){
							CommonTools.logAI("move------7777777777777777777777777777777777")
							if(this.iCmd == 1){
								CommonTools.log("move------7777777777777777777777777777777777")
								this.moveNext();//执行下个命令
							}
						}
						this.Delay(10);
					}else{//继续跑原来的
						this.removeDelay();
						this.delayFunc = function(){
							CommonTools.logAI("move------7777777777777777777777777777777777")
							if(this.iCmd == 1){
								this.moveNext();//执行下个命令
							}
						}
						this.Delay(3800);
					}
				}else if(this.iCmd == 3){
					CommonTools.logAI("----------------***吃了东西了")
					this.iCmd = 0;
					CommonTools.logAI("move------8888888888888888888888888888888888888888")
					this.moveNext();//执行下个命令
				}else if(this.iCmd == 2){
					CommonTools.logAI("----------------***炸死个扑街")
					let sData = CommonTools.getDataJsonStr("syncPut",1,{x:this.aiObj.x,y:this.aiObj.y,idx:parseInt(this.aiObj.curMapIdx),playerID:this.aiObj.roleId});
					ConstValue.P_NET_OBJ.sendData2(sData);
				}else{
					CommonTools.logAI("move------999999999999999999999999999999999999")
					this.moveNext();//执行下个命令
				}
			}
			return;
		}else{
			if(this.iCmd == 1 && this.curPathPointIndex>=4 && this.isConnectEnemy()){//逃跑过程也放放炮
				CommonTools.logAI("----------------***逃跑也放雷")
				let sData = CommonTools.getDataJsonStr("syncPut",1,{x:this.aiObj.x,y:this.aiObj.y,idx:parseInt(this.aiObj.curMapIdx),playerID:this.aiObj.roleId});
				ConstValue.P_NET_OBJ.sendData2(sData);
			}
		}
		this.move(this.curPath[this.curPathPointIndex][0],this.curPath[this.curPathPointIndex][1]);
	}

	private resetMove(tPath){
		this.curPathPointIndex = 0;
		this.curPath = tPath;
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

	private getNextBox(){
		let tBox = this.boxMap[this.curBoxMapIdex.toString()];
		let iCount = 0
		for(let i in tBox){
			iCount++;
		}
		while(iCount == 0){
			this.curBoxMapIdex++;
			if(this.curBoxMapIdex >= this.initColumn){//没有box了
				return null;
			}else{
				tBox = this.boxMap[this.curBoxMapIdex.toString()];
				for(let i in tBox){
					iCount++;
				}
			}
		}
		for(let i in tBox){
			CommonTools.logAI("getNextBox************************tBox[i]:"+tBox[i])
			this.grid.setWalkableAt(tBox[i][0],tBox[i][1],true);
			let tBoxPath = this.getPath(tBox[i][0],tBox[i][1]);
			this.grid.setWalkableAt(tBox[i][0],tBox[i][1],false);//关回去
			if(tBoxPath.length > 0){
				return tBox[i];
			}
		}
		CommonTools.logAI("getNextBox************xxxxxx***no box*********")
		this.curBoxMapIdex++;
		return this.getNextBox();
	}

	private isHasBoom(){
		if(this.isConnectEnemy()){
			for(let bul in FightingModule.bulletLayerSubObj){
				return true;
			}
		}else{
			for(let bul in FightingModule.bulletLayerSubObj){
				let bulobj = FightingModule.bulletLayerSubObj[bul];
				if(bulobj.owner.roleId == this.aiObj.roleId){
					return true;
				}
			}
		}
		return false;
	}

	private getSafePath(){
		let miniLenChoose = null;
		let pathLen = 100;
		CommonTools.printMap(this.workMap);
		if(this.isConnectEnemy()){			
			for(let i in this.workMap){
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
					if(tempPath.length > 0 && tempPath.length<pathLen){
						pathLen = tempPath.length;
						miniLenChoose = obj;
					}
				}
			}

		}else{
			
			for(let i in this.workMap){
				// CommonTools.logAI("getSafePath--------------------i-"+i)
				let obj = this.workMap[i];
				let isSafe = true;
				for(let bul in FightingModule.bulletLayerSubObj){
					// CommonTools.logAI("getSafePath--------------------bul-"+bul)
					let bulobj = FightingModule.bulletLayerSubObj[bul];
					if(bulobj.owner.roleId == this.aiObj.roleId){
						if(bulobj.getColumn() == obj[0] || bulobj.getRow() == obj[1]){
							isSafe = false;
							break;
						}
					}
				}
				if(isSafe){
					let tempPath = this.getPath(obj[0],obj[1]);
					if(tempPath.length > 0 && tempPath.length <pathLen){
						pathLen = tempPath.length;
						miniLenChoose = obj;
						CommonTools.logAI("getSafePath----miniLenChoose-----------------"+miniLenChoose)
					}
				}
			}
		}

		if(miniLenChoose != null){
			return miniLenChoose;
		}else{
			this.isSameCR = true;
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

		return null;
	}


	public getPath(xEnd,yEnd){
		//[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
		let tGrid = this.grid.clone();
		return this.finder.findPath(this.aiObj.getColumn(),this.aiObj.getRow(),xEnd,yEnd,tGrid);
	}

	public startAI(){
		
	}

	public stopAI(){
		this.iOpenState = false;
	}

	//目前是1v1
	private isConnectEnemy(){
		let pathForEnemy = this.getPath(this.getOtherPlayer().getColumn(),this.getOtherPlayer().getRow());
		if(pathForEnemy.length == 0)return false;
		return true;
	}

	public setWalkAble(x,y,canWork){
		this.grid.setWalkableAt(x, y, canWork);
	}

	private getOtherPlayer(){
		for(let i in FightingModule.playerLayerSubObj){
            let pObj = FightingModule.playerLayerSubObj[i];
            if(pObj.roleId != this.aiObj.roleId && pObj.isAI == 0){
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