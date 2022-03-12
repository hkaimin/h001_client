/**
 * 战斗模块
 */
module Fight {
	/**玩家 */
    export class Player extends egret.DisplayObjectContainer{
        public roleId;
        private bodyAni;
        private bodyAniUp;
        private bodyAniDown;
        private bodyAniLeft;
        private bodyAniRight;

        private bodyAniUpStatic;
        private bodyAniDownStatic;
        private bodyAniLeftStatic;
        private bodyAniRightStatic;

        private bodyName;
        private moveTw;
        private xDis = 3;
        private yDis = 3;
        private uTime = 100;
        public whichSide = 0;
        private sideDes = "";

        public bulletLen = 4;
        private life = 1;
        public speed = 1;
        public isMainPlayer = false;

        private isMoving = false;
        public curDirect = -1;
        public func;

        public curMapIdx;//当前属于第几个格子
        private bulletX;//放炸弹的坐标
        private bulletY;
        private groundObj;
        private row = -1;
        private column = -1;

        public keyDir = -1;
        public keyBoom = -1;

        public aiRobot = false;
        private endX = -1;
        private endY = -1;
        private fixAIX = 0;
        private fixAIY = 0;

        public isAI = 0;
        private markLeft = 0;
        private markRight = 0;
        private death = false;
        private iClass = 1;
        private isStatic = false;
        private boundRec;//触碰框
        private preStop = "0";
        private buffAnim;
        private buffPlaying = false;
        private isFirstMove = true;

        private panelT;
        private aiLevel = 0;
        private lWalkArea = [3,3];
        
        //1正右方:可以行走的方向 2右下方 3正下方 4左下方 5正左 6左上 7正上 8右上
        private freeWalk = {"1":[0,2,3],"2":[0,3],"3":[0,1,3],"4":[0,1],"5":[0,1,2],"6":[1,2],"7":[1,2,3],"8":[2,3]} 

		/**玩家对象 */
		public constructor(para) {
			super();
            let pObj = para["pObj"];
            this.roleId = pObj.uid;
            this.aiLevel = pObj.aiLevel;
            this.lWalkArea = pObj.lWalkArea;
            if(this.roleId == ConstValue.cacheUserInfo.id){
                this.isMainPlayer = true;
            }
            this.life = pObj.life;
            this.speed = pObj.speed;
            // this.speed = 4;
            this.bulletLen = pObj.power;
            this.iClass = pObj.iClass;
            this.whichSide = para["side"];
            this.bodyName = new eui.Label(pObj.name);
            this.isAI = para["isAI"];
            if(this.whichSide == 1){
                this.sideDes = "p" + this.iClass;
                this.bodyName.textColor = 0xFEFCFE;
                this.bodyName.stroke = 4;
                this.bodyName.strokeColor = 0x1875F4;
            }else{
                this.sideDes = "p" + this.iClass;
                this.bodyName.textColor = 0xFEFCFE;
                this.bodyName.stroke = 4;
                this.bodyName.strokeColor = 0xF24618;
            }

            if(this.aiLevel >= 50){
                this.sideDes = "pai" + this.iClass;
            }
            
            this.bodyName.texAlign = "center";
            this.bodyAniUp = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_03_json"), RES.getRes(this.sideDes+"_03_png"), "0");
            this.bodyAniDown = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_01_json"), RES.getRes(this.sideDes+"_01_png"), "0");
            this.bodyAniLeft = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_02_json"), RES.getRes(this.sideDes+"_02_png"), "0");
            this.bodyAniRight = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_04_json"), RES.getRes(this.sideDes+"_04_png"), "0");
            
            if(this.aiLevel < 50){
                this.bodyAniDownStatic = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_static_json"), RES.getRes(this.sideDes+"_static_png"), "0");
                this.bodyAniUpStatic = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_static_03_json"), RES.getRes(this.sideDes+"_static_03_png"), "0");
                this.bodyAniLeftStatic = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_static_02_json"), RES.getRes(this.sideDes+"_static_02_png"), "0");
                this.bodyAniRightStatic = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_static_04_json"), RES.getRes(this.sideDes+"_static_04_png"), "0");
            }else{
                this.bodyAniDownStatic = this.bodyAniDown;
                this.bodyAniUpStatic = this.bodyAniUp;
                this.bodyAniLeftStatic = this.bodyAniLeft;
                this.bodyAniRightStatic = this.bodyAniRight;
            }  

            this.bodyAni = this.bodyAniDownStatic;
            // this.addChild(this.bodyAni);
            this.addChildAt(this.bodyAni,0);
            this.bodyName.x -= this.bodyName.width/2;//55
            this.bodyName.y -= 128;
            
            if(this.aiLevel < 50)this.addChild(this.bodyName);
            this.x = para["x"];
            this.y = para["y"];

            this.name = para["name"];
			this.bodyAni.play(-1);

            if(ConstValue.P_FIGHT_OBJ.APP_MODE == 2){
                this.xDis = 1.5;
                this.yDis = 1.5;
            }
            if(this.aiLevel >= 50){
                this.xDis = 0.8;
                this.yDis = 0.8;
            }
            // var rect1: egret.Rectangle = this.getBounds();

        }

        public setBoundRec(bound){
            this.boundRec = bound;
        }

        public getBoundRec(){
            return this.boundRec;
        }

        public getLWalkAreaRow(){
            return this.lWalkArea[0];
        }

        public getLWalkAreaColumn(){
            return this.lWalkArea[1];
        }

        public setMoving(flag){
            this.isMoving = flag;
            if(!this.isMoving)
            {   
                this.isStatic = true;
                if(this.bodyAni != null){
                    this.removeChild(this.bodyAni);
                    this.bodyAni = null;
                }
                switch(this.curDirect){
                case 0:
                        if(this.bodyAni == null){
                            this.bodyAni = this.bodyAniUpStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    case 1:
                        if(this.bodyAni == null){
                            this.bodyAni = this.bodyAniRightStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    case 2:
                        if(this.bodyAni == null){
                            this.bodyAni = this.bodyAniDownStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    case 3:
                        if(this.bodyAni == null){
                            this.bodyAni = this.bodyAniLeftStatic;
                            this.bodyAni.play(-1);
                        }
                        break;
                    default:break;
                }
                // this.addChild(this.bodyAni);
                this.addChildAt(this.bodyAni,0);
            }
        }

        public moveDetail(endX,endY){
            this.endX = endX;
            this.endY = endY;
            if(this.column == endX){
                if(endY >= this.row){
                    this.move(2,false);
                    return;
                }else{
                    this.move(0,false);
                    return;
                }
            }
            if(this.row ==  endY){
                if(endX >= this.column){
                    this.move(1,false);
                    return;
                }else{
                    this.move(3,false);
                    return;
                }
            }
        }

        public findOwnAi(){
            for(let i in FightingModule.aiSubObj){
                let obj = FightingModule.aiSubObj[i];
                if(obj.aiObj.roleId == this.roleId){
                    return obj;
                }
            }
            return null;
        }

        public addBuff(type){
            if(this.buffPlaying)return;
            this.buffPlaying = true;
            if(type == 2){
                this.buffAnim = CommonTools.getAnimDraw(RES.getRes("take_chicken_json"), RES.getRes("take_chicken_png"), "0");
                this.buffAnim.x -= 55;
                this.buffAnim.y -= 110;
                this.buffAnim.scaleX = 1.2;
                this.buffAnim.scaleY = 1.2;
            }else if(type == 1){
                this.buffAnim = CommonTools.getAnimDraw(RES.getRes("take_dog_json"), RES.getRes("take_dog_png"), "0");
                this.buffAnim.x -= 87;
                this.buffAnim.y -= 85;
                this.buffAnim.scaleX = 1.8;
                this.buffAnim.scaleY = 1.8;
            }

            this.buffAnim.play(1);
            
            this.buffAnim.once(egret.Event.COMPLETE, function(e:egret.Event){
                this.buffPlaying = false;
                try{
                    this.removeChild(this.buffAnim);
                } catch (error) {
                    CommonTools.logError("Destroy addBuff====error=====")
                }
            }, this);
            this.addChild(this.buffAnim);
        }

        public addGuideTips(type){
            this.panelT = new eui.Panel();
			this.panelT.skinName = "resource/eui_skins/UserUI/GuideTipsGroup.exml";
			this.panelT.name = "p_"+type;
            let group = this.panelT.getChildByName("group_1") as eui.Group;
            let tip = group.getChildByName("tip") as eui.Label;
            tip.text = ConstValue.guide_tips[type].tip;
			this.panelT.x -= 160;
			this.panelT.y -= 200;
			this.addChild(this.panelT);
            if(type == "5"){
                FightingModule.Delay(3000,function(){
                    this.removeTips();
                },this);
            }
        }

        private removeTips(){
            if(this.panelT != null){
                this.removeChild(this.panelT);
                this.panelT = null;
            }
        }

        public removeGuideTips(type){
            if(this.isMainPlayer && this.panelT != null){
                let key = ConstValue.guide_tips[type].saveKey;
                if(egret.localStorage.getItem(key) != "1"){
                    egret.localStorage.setItem(key,"1");
                    this.removeTips();
                    ConstValue.P_FIGHT_OBJ.removeJump();
                    //下一引导
                    if(type == "1"){
                        ConstValue.P_FIGHT_OBJ.showGuide(true);
                    }else if(parseInt(type) >= 2){
                        ConstValue.P_FIGHT_OBJ.showGuide(false);
                    }
                }
            }
        }

        private changeIndex(itemObj,iType){//iType 1给player顶层
            if(iType == 1){
                FightingModule.mapLayer.setChildIndex(this,FightingModule.mapLayer.getChildIndex(itemObj) + 1);
            }else if(iType == 2){
                // FightingModule.mapLayer.setChildIndex(itemObj,FightingModule.mapLayer.getChildIndex(this) + 1);
                 FightingModule.mapLayer.setChildIndex(this,FightingModule.mapLayer.getChildIndex(itemObj) - 1);
            }
            
        }

        /**
         * direct 0上 1右 2下 3左
         * isAuto true是方向自己走 false是手动走
         */
        public move(direct,isAuto){
            try {
                this.removeGuideTips("1");
                if(!this.isMoving)return;
                if(this.speed > 6)this.speed=6;//速度太快有问题
                if(this.speed == 1)this.speed = 2.1;//2
                if(this.speed == 2)this.speed = 2.8;//2.5
                if(this.speed == 3)this.speed = 3.4;//3
                if(this.speed == 5)this.speed = 4.7;//3
                if(this.speed == 6)this.speed = 5.4;//3
                let tXDis = this.xDis+this.speed*1.6;//1.2
                let tYDis = this.yDis+this.speed*1.6;//1.2
                if(direct == -1){
                    if(this.curDirect == -1){
                        direct = 1;
                    }else{
                        direct = this.curDirect;
                    }
                }

                if(this.isMainPlayer){
                    for(let i in FightingModule.aiSubObj){
                        let obj = FightingModule.aiSubObj[i];
                        if(obj.aiObj.getColumn() == this.column && obj.aiObj.getRow() == this.row && obj.visible && obj.aiObj.aiLevel >= 50){
                            obj.stopAI();
                            let sData = CommonTools.getDataJsonStr("kill_player_by_monster",1,{attacker_pid:obj.aiObj.roleId,beattacker_pid:this.roleId});
                            ConstValue.P_NET_OBJ.sendData2(sData);
                            return;
                        }
                    }
                }

                if(this.aiRobot){
                    // CommonTools.logAI("move------this.column:"+this.column+" this.row:"+this.row+" this.endX:"+this.endX+" this.endY:"+this.endY+" direct:"+direct)
                    if(this.column == this.endX && this.row == this.endY){
                        if(this.aiLevel >= 50){
                            this.findOwnAi().resetStop();
                        }
                        if(direct == 0 || direct == 2){
                            if(this.fixAIY <= 50){
                                this.fixAIY += tYDis;
                            }else{
                                this.setMoving(false);
                                this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
                                this.func = null;
                                this.keyDir = -1;

                                this.fixAIY = 0;
                                this.findOwnAi().moveNext();
                                return;
                            }
                        }else if(direct == 1 || direct == 3){
                            if(this.fixAIX <= 50){
                                this.fixAIX += tXDis;
                            }else{
                                this.setMoving(false);
                                this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
                                this.func = null;
                                this.keyDir = -1;

                                this.fixAIX = 0;
                                this.findOwnAi().moveNext();
                                return;
                            }
                        }
                    }
                }

                if(direct != this.curDirect || this.isStatic || this.isFirstMove){
                    this.isFirstMove = false;
                    this.isStatic = false;
                    if(this.bodyAni != null){
                        this.removeChild(this.bodyAni);
                        this.bodyAni = null;
                    }
                    this.curDirect = direct;
                    switch(direct){
                        case 0:
                            if(this.bodyAni == null){
                                this.bodyAni = this.bodyAniUp;
                                this.bodyAni.play(-1);
                            }
                            break;
                        case 1:
                            if(this.bodyAni == null){
                                this.bodyAni = this.bodyAniRight;
                                this.bodyAni.play(-1);
                            }
                            break;
                        case 2:
                            if(this.bodyAni == null){
                                this.bodyAni = this.bodyAniDown;
                                this.bodyAni.play(-1);
                            }
                            break;
                        case 3:
                            if(this.bodyAni == null){
                                this.bodyAni = this.bodyAniLeft;
                                this.bodyAni.play(-1);
                            }
                            break;
                        default:break;
                    }
                    // this.addChild(this.bodyAni);
                    this.addChildAt(this.bodyAni,0);
                }

                let checkStop = false;
                if(direct == 3){
                    if(this.x <= FightingModule.mapLeftLimit){
                        this.aiNext();
                        return;    
                    }
                    for(let i in FightingModule.mapLayerSubObj){
                        let obj = FightingModule.mapLayerSubObj[i];
                        if(obj.getRow() == this.row && obj.getColumn() + 1 == this.column && this.x - 18 <= obj.x + obj.width){
                            tXDis = 0;
                            break;
                        }
                    }
                    for(let i in FightingModule.bulletLayerSubObj){
                        let obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if(obj.getRow() == this.row && obj.getColumn() + 1 == this.column && this.x - 10 <= obj.x + obj.width){
                            tXDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }else if(direct == 0){
                    if(this.y <= FightingModule.mapUpLimit){
                        this.aiNext();
                        return;    
                    }
                    for(let i in FightingModule.mapLayerSubObj){
                        let obj = FightingModule.mapLayerSubObj[i];
                        if(obj.getColumn() == this.column && obj.getRow() + 1 == this.row && this.y <= obj.y + obj.height){
                            tYDis = 0;
                            break;
                        }else if(obj.getColumn() - 1 == this.column && obj.getRow() + 1 == this.row 
                            && Math.abs(obj.x - this.x) < 15.5 && Math.abs(obj.y - this.y) < 111.1 && !this.aiRobot){//x21.5
                            tYDis = 0;
                            break;
                        }else if(obj.getColumn() + 1 == this.column && obj.getRow() + 1 == this.row 
                            && Math.abs(obj.x - this.x) < 80.6 && Math.abs(obj.y - this.y) < 111.1 && !this.aiRobot){//86.6
                            tYDis = 0;
                            break;
                        }
                    }
                    for(let i in FightingModule.bulletLayerSubObj){
                        let obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if(obj.getColumn() == this.column && obj.getRow() + 1 == this.row && this.y - 20 <= obj.y + obj.height){
                            tYDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }else if(direct == 2){
                    if(this.y >= FightingModule.mapDownLimit){
                        this.aiNext();
                        return;    
                    }
                    for(let i in FightingModule.mapLayerSubObj){
                        let obj = FightingModule.mapLayerSubObj[i];
                        if(this.y >= 630)tYDis = 0;
                        if(obj.getColumn() == this.column && obj.getRow() - 1 == this.row && this.y + 20 >= obj.y){
                            tYDis = 0;
                            break;
                        }else if(obj.getColumn() + 1 == this.column && obj.getRow() - 1 == this.row 
                            &&  Math.abs(this.x - obj.x) < 80 &&  Math.abs(this.y - obj.y) < 5.3 && !this.aiRobot){//88
                            tYDis = 0;
                            break;
                        }else if(obj.getColumn() - 1 == this.column && obj.getRow() - 1 == this.row 
                            &&  Math.abs(this.x - obj.x) < 11.5 &&  Math.abs(this.y - obj.y) < 5.3 && !this.aiRobot){//11.5
                            tYDis = 0;
                            break;
                        }
                    }
                    for(let i in FightingModule.bulletLayerSubObj){
                        let obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if(obj.getColumn() == this.column && obj.getRow() - 1 == this.row && this.y + 50 >= obj.y){
                            tYDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }else if(direct == 1){
                    if(this.x >= FightingModule.mapRightLimit){
                        this.aiNext();
                        return;    
                    }
                    for(let i in FightingModule.mapLayerSubObj){
                        let obj = FightingModule.mapLayerSubObj[i];
                        if(obj.getRow() == this.row && obj.getColumn() - 1 == this.column && this.x + 38 >= obj.x){
                            tXDis = 0;
                            break;
                        }
                    }
                    for(let i in FightingModule.bulletLayerSubObj){
                        let obj = FightingModule.groundLayerSubObj[FightingModule.bulletLayerSubObj[i].getCurIdx()];
                        if(obj.getRow() == this.row && obj.getColumn() - 1 == this.column && this.x + 38 >= obj.x){
                            tXDis = 0;
                            checkStop = true;
                            break;
                        }
                    }
                }

                if(this.aiRobot && !checkStop){//修复Ai不动的情况 
                    if((direct == 0 || direct == 2) && tYDis == 0){
                        this.setMoving(false);
                        this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
                        this.func = null;
                        this.keyDir = -1;

                        this.fixAIY = 0;
                        this.findOwnAi().moveNext();
                        return;
                    }else if((direct == 1 || direct == 3) && tXDis == 0){
                        this.setMoving(false);
                        this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
                        this.func = null;
                        this.keyDir = -1;

                        this.fixAIX = 0;
                        this.findOwnAi().moveNext();
                        return;
                    }
                }

                if(this.aiLevel >= 50 && checkStop){
                    this.setMoving(false);
                    this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
                    this.func = null;
                    this.keyDir = -1;

                    if(this.aiLevel >= 50)this.findOwnAi().setStop();
                    this.findOwnAi().moveNext();
                    return;
                }else if(this.aiLevel < 50 && checkStop){
                    this.setMoving(false);
                    this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
                    this.func = null;
                    this.keyDir = -1;
                    this.findOwnAi().moveNext();
                }

                if(direct == this.curDirect){
                    //手动移动，相同方向不加成
                    if(!isAuto){
                        return;
                    }
                }

                switch(direct){
                    case 0:
                        if(this.bodyAni == null){
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
                        if(this.bodyAni == null){
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
                        if(this.bodyAni == null){
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
                        if(this.bodyAni == null){
                            this.bodyAni = this.bodyAniLeft;
                            this.bodyAni.play(-1);
                        }
                        this.x = this.x - tXDis;
                        // if(tXDis == 0){
                        //     this.move(0,false);
                        //     return;
                        // }
                        break;
                    default:break;
                }
                // this.addChild(this.bodyAni);
                this.addChildAt(this.bodyAni,0);
                // this.boundRec.x = this.x;
                // this.boundRec.y = this.y;
                this.markPosition(direct);
                //发送移动包
                if(this.isMainPlayer && !FightingModule.aiPVE){
                    let sData = CommonTools.getDataJsonStr("syncPos",1,{x:this.x,y:this.y,direction:this.curDirect,speed:this.speed,idx:parseInt(this.curMapIdx),playerID:0});
                    ConstValue.P_NET_OBJ.sendData2(sData);
                }

                let topY = 0
                let top1Role = null;
                let top2Role = null;
                for(let i in FightingModule.playerLayerSubObj){
                    let obj = FightingModule.playerLayerSubObj[i];
                    if(top1Role == null){
                        topY = obj.y;
                        top1Role = obj;
                    }else{
                        if(obj.y > topY){
                            top2Role = top1Role;
                            top1Role = obj;
                        }else{
                            top2Role = obj;
                        }
                    }
                }
                let top1Idex = FightingModule.mapLayer.getChildIndex(top1Role);
                let top2Idex = FightingModule.mapLayer.getChildIndex(top2Role);
                if(top2Idex > top1Idex && Math.abs(top1Role.getRow() - top2Role.getRow()) <= 1 && 
                    Math.abs(top1Role.getColumn() - top2Role.getColumn()) <= 1){
                    FightingModule.mapLayer.swapChildren(top1Role,top2Role)
                }

            } catch (error) {
                CommonTools.logError("move=====================error===="+error)
            }
        }

        private aiNext(){
            if(this.aiRobot){//修复Ai不动的情况
                this.setMoving(false);
                this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
                this.func = null;
                this.keyDir = -1;

                this.fixAIY = 0;
                this.findOwnAi().moveNext();
            }
        }

        public fire(bulletId,curPutIdx){
            this.removeGuideTips("2");
            CommonAudioHandle.playEffect("playBomb_mp3",1);
            if(this.aiRobot){
                if(this.findOwnAi().iCmd == 2){
                    this.findOwnAi().iCmd = 0;
                }
            }

            this.markPosition(-1);
            let gObj = FightingModule.groundLayerSubObj[curPutIdx];
            this.bulletX = gObj.x+41;
            this.bulletY = gObj.y+41-10;
            let pFightObj = ConstValue.P_FIGHT_OBJ.getPlayerDataByRid(this.roleId+"");
            let bData = {"side":1,"x":this.bulletX,"y":this.bulletY,"name":bulletId,"curIdx":curPutIdx,"PPSkinID":pFightObj.PPSkinID};//this.groundObj.getCurIdx()
            let bt = new Bullet(bData);
            bt.setOwner(this);
            bt.setRow(gObj.getRow());
            bt.setColumn(gObj.getColumn());

            for(let i in FightingModule.aiSubObj){
                let obj = FightingModule.aiSubObj[i];
                obj.setWalkAble(gObj.getColumn(),gObj.getRow(),false);
            }

            FightingModule.mapLayer.addChild(bt);
            FightingModule.bulletLayerSubObj[bt.name] = bt;
            bt.setRightLimit(this.bulletLen+1);
            bt.setLeftLimit(this.bulletLen+1);
            bt.setDownLimit(this.bulletLen+1);
            bt.setUpLimit(this.bulletLen+1);

            bt.setRightLimit2(this.bulletLen+1);
            bt.setLeftLimit2(this.bulletLen+1);
            bt.setDownLimit2(this.bulletLen+1);
            bt.setUpLimit2(this.bulletLen+1);
            FightingModule.mapLayer.swapChildren(bt,this);
            this.markPosition(-1);
            
            //设置4个方向到障碍物是否有遮挡
            for(let i in FightingModule.mapLayerSubObj){
                let mapObj = FightingModule.mapLayerSubObj[i.toString()];
                if(mapObj.getType()==1)continue;
                if(mapObj.getRow() == bt.getRow()){//行相等情况
                    if(mapObj.getColumn() < bt.getColumn()){//障碍物在左边
                        let disLeft = bt.getColumn() - mapObj.getColumn();
                        if(this.bulletLen >= disLeft){
                            if(bt.getLeftLimit2() > disLeft){
                                bt.setLeftLimit2(disLeft);
                            }
                        }
                    }
                    if(mapObj.getColumn() > bt.getColumn()){//障碍物在右边
                        let disRight = mapObj.getColumn() - bt.getColumn();
                        if(this.bulletLen >= disRight){
                            if(bt.getRightLimit2() > disRight){
                                bt.setRightLimit2(disRight);
                            }
                        }
                    }
                }

                if(mapObj.getColumn() == bt.getColumn()){//列相等情况
                    if(mapObj.getRow() < bt.getRow()){//障碍物在上边
                        let disUp = bt.getRow() - mapObj.getRow();
                        if(this.bulletLen >= disUp){
                            if(bt.getUpLimit2() > disUp){
                                bt.setUpLimit2(disUp);
                            }
                        }
                    }
                    if(mapObj.getRow() > bt.getRow()){//障碍物在下边
                        let disDown = mapObj.getRow() - bt.getRow();
                        if(this.bulletLen >= disDown){
                            if(bt.getDownLimit2() > disDown){
                                bt.setDownLimit2(disDown);
                            }
                        }
                    }
                }
            }

            //设置4个方向到边界遮挡
            let disLimitLeft = bt.getColumn() + 1;//左边界
            if(this.bulletLen >= disLimitLeft){
                if(bt.getLeftLimit2() > disLimitLeft){
                    bt.setLeftLimit2(disLimitLeft);
                }
            }

            let disLimitRight = ConstValue.P_FIGHT_OBJ.getInitColumn() - bt.getColumn();//右边界
            if(this.bulletLen >= disLimitRight){
                if(bt.getRightLimit2() > disLimitRight){
                    bt.setRightLimit2(disLimitRight);
                }
            }

            let disLimitUp = bt.getRow() + 1;//上边界
            if(this.bulletLen >= disLimitUp){
                if(bt.getUpLimit2() > disLimitUp){
                    bt.setUpLimit2(disLimitUp);
                }
            }

            let disLimitDown = ConstValue.P_FIGHT_OBJ.getInitRow() - bt.getRow();//下边界
            if(this.bulletLen >= disLimitDown){
                if(bt.getDownLimit2() > disLimitDown){
                    bt.setDownLimit2(disLimitDown);
                }
            }

            let selfBobo = true;
            for(let i in FightingModule.bulletLayerSubObj){
                if(i != bt.name){
                    let obj = FightingModule.bulletLayerSubObj[i];
                    if(bt.getRow() == obj.getRow() && bt.getColumn() == obj.getColumn()){//同个位置，那就被引爆
                        selfBobo = false;
                        if(obj.getPreBobo() != null){
                            for(let j in obj.getPreBobo()){
                                let objPre = FightingModule.bulletLayerSubObj[j];
                                bt.setPreBobo(objPre.name);
                            }
                        }else{
                            bt.setPreBobo(obj.name);
                        }
                    }else if(bt.getRow() == obj.getRow()){//同行
                        if(bt.getColumn() > obj.getColumn()){//在右边
                            if(obj.getRightLimit2() >= (bt.getColumn() - obj.getColumn())){
                                selfBobo = false;
                                if(obj.getPreBobo() != null){
                                    for(let j in obj.getPreBobo()){
                                        let objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }else{
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }else{//在左边
                            if(obj.getLeftLimit2() >= (obj.getColumn() - bt.getColumn())){
                                selfBobo = false;
                                if(obj.getPreBobo() != null){
                                    for(let j in obj.getPreBobo()){
                                        let objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }else{
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }
                    }else if(bt.getColumn() == obj.getColumn()){//同列
                        if(obj.getRow() > bt.getRow()){//在上边
                            if(obj.getUpLimit2() >= (obj.getRow() - bt.getRow())){
                                if(obj.getPreBobo() != null){
                                    for(let j in obj.getPreBobo()){
                                        let objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }else{
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }else{//在下边
                            if(obj.getDownLimit2() >= (bt.getRow() - obj.getRow())){
                                if(obj.getPreBobo() != null){
                                    for(let j in obj.getPreBobo()){
                                        let objPre = FightingModule.bulletLayerSubObj[j];
                                        bt.setPreBobo(objPre.name);
                                    }
                                }else{
                                    bt.setPreBobo(obj.name);
                                }
                            }
                        }
                    }
                }
            }

            if(selfBobo)bt.baozha();
            if(this.aiRobot){
                this.findOwnAi().moveNext();
            }
        }

        //定位
        public markPosition(direct){
            let curIdx;
            let dis = 10000;
            let bulX = 0;
            let bulY = 0;
            let ggObj = null;
            let fixX = 5;
            let fixY = 41;
            let door = null;
            for(let i in FightingModule.groundLayerSubObj){
                let gObj = FightingModule.groundLayerSubObj[i];
                let pa = new egret.Point(this.x+fixX,this.y+fixY);
                let tX = gObj.x+41;
                let tY = gObj.y+41;                
                let pb = new egret.Point(tX,tY);
                let tDis = egret.Point.distance(pa,pb);
                if(tDis <= dis){
                    curIdx = i;
                    dis = tDis;
                    bulX = tX;
                    bulY = tY;
                    ggObj = gObj;
                }
                if(gObj.getSubType() == 7 || gObj.getSubType() == -1){
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

            for(let i in FightingModule.mapLayerSubObj){
                let obj = FightingModule.mapLayerSubObj[i];
                if(obj.getRow() <= this.row && 
                FightingModule.mapLayer.getChildIndex(obj) >= FightingModule.mapLayer.getChildIndex(this)){
                    this.changeIndex(obj,1);
                }
                
                if(obj.getRow() - 1 == this.row && obj.getColumn() == this.column &&
                FightingModule.mapLayer.getChildIndex(obj) <= FightingModule.mapLayer.getChildIndex(this)){
                    this.changeIndex(obj,2);
                    break;
                }
            }

            if(this.groundObj.getSubType() > 0){
                CommonTools.log("吃东西啦》。。。。。。");
                let playerID = 0;
                if (this.isAI == 1){
                    playerID = this.roleId;
                }
                if(this.isMainPlayer || this.isAI == 1){
                    CommonAudioHandle.playEffect("eatProp_mp3",1);
                    let sData = CommonTools.getDataJsonStr("pickItem",1,{itype:this.groundObj.getSubType(),idx:parseInt(this.curMapIdx),playerID:playerID});
                    ConstValue.P_NET_OBJ.sendData2(sData);
                }
                this.groundObj.clearSub();
                if(this.aiRobot){
                    if(this.findOwnAi().iCmd == 3){
                        this.findOwnAi().iCmd = 0;
                        this.findOwnAi().moveNext();
                    }
                }
            }

            // CommonTools.logAI("markPosition=============this.curMapIdx："+this.curMapIdx+" this.row："+this.row+" this.column："+this.column);
            let danger = FightingModule.groundLayerSubObjDanger[this.groundObj.getColumn()+"_"+this.groundObj.getRow()];
            if(danger.dangerCount > 0 && !this.death){
                this.death = true;
                let playerID = 0
                if(this.isAI == 1){
                    playerID = this.roleId;
                }
                let sData = CommonTools.getDataJsonStr("syncBoomPlayer",1,{paopaoID:this.groundObj.dangerPaoPaoObj.name,x:this.groundObj.dangerPaoPaoObj.x,y:this.groundObj.dangerPaoPaoObj.y,idx:this.groundObj.dangerPaoPaoObj.curIdx,killrid:this.roleId,killidx:parseInt(this.curMapIdx),playerID:playerID});
                ConstValue.P_NET_OBJ.sendData2(sData);
            }

            if(this.isMainPlayer){
                for(let i in FightingModule.aiSubObj){
                    let obj = FightingModule.aiSubObj[i];
                    if(obj.aiObj.getColumn() == this.column && obj.aiObj.getRow() == this.row && obj.visible && obj.aiObj.aiLevel >= 50){
                        obj.stopAI();
                        let sData = CommonTools.getDataJsonStr("kill_player_by_monster",1,{attacker_pid:obj.aiObj.roleId,beattacker_pid:this.roleId});
                        ConstValue.P_NET_OBJ.sendData2(sData);
                        return;
                    }
                }
            }

        }

        public getRow(){
            return this.row;
        }

        public getColumn(){
            return this.column;
        }

        public clear(){
            if(this.func != null){
                this.removeEventListener(egret.Event.ENTER_FRAME,this.func, this);
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
        }
        
    }

}