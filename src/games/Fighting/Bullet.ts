/**
 * 战斗模块
 */
module Fight {
	/**子弹 */
    export class Bullet extends egret.DisplayObjectContainer{
		private bodyAni;
		private whichSide = 0;
		private sideDes = "";
        public owner = null;
        private effDic = {}
        private curLen = 1;
        private nextDic = {}

        private leftShowLimit = 100;
        private rightShowLimit = 100;
        private upShowLimit = 100;
        private downShowLimit = 100;

        private leftShowLimit2 = 100;//临时
        private rightShowLimit2 = 100;
        private upShowLimit2 = 100;
        private downShowLimit2 = 100;

        private row;
        private column;
        private curIdx;
        private preBobo = null;
        private bulletLen = 1;//这个用来记录玩家创建这个炸弹的目前长度

        public hitMap = {}

		/**子弹对象 */
		public constructor(para) {
			super();
			this.whichSide = para["side"];
            if(para["PPSkinID"] == 2){
                this.sideDes = "paopao_ice";
            }else if(para["PPSkinID"] == 3){
                this.sideDes = "paopao_mars";
            }else if(para["PPSkinID"] == 4){
                this.sideDes = "paopao_doughnut";
            }else if(para["PPSkinID"] == 5){
                this.sideDes = "paopao_watermelon";
            }else if(para["PPSkinID"] == 6){
                this.sideDes = "paopao_volleyball";
            }else{
                this.sideDes = "paopao";
            }
			this.bodyAni = CommonTools.getAnimDraw(RES.getRes(this.sideDes + "_json"), RES.getRes(this.sideDes+"_png"), "0");
            if(ConstValue.P_FIGHT_OBJ.APP_MODE == 1){
                this.bodyAni.scaleX = 1.4;
                this.bodyAni.scaleY = 1.4;
                this.bodyAni.x += 2;
                this.bodyAni.y -= 5;
            }else{
                this.scaleX = 0.7;
                this.scaleY = 0.7;
                this.bodyAni.scaleX = 1.6;
                this.bodyAni.scaleY = 1.6;
                this.bodyAni.x -= 12;
                this.bodyAni.y -= 15;
            }

            this.addChild(this.bodyAni);
            this.x = para["x"];
            this.y = para["y"];
            this.name = para["name"];
            this.curIdx = para["curIdx"];
			this.bodyAni.play(-1);


        }

        public setOwner(who){
            this.owner = who;
            this.bulletLen = this.owner.bulletLen;
        }


        public baozha(){//自爆
            FightingModule.Delay(3000, function(){
                this.drawBaozha();
                for(let i in this.hitMap){
                    let obj = this.hitMap[i];
                    let playerID = 0
                    if(this.owner.isAI == 1){
                        playerID = this.owner.roleId;
                    }
                    if(this.owner.isMainPlayer || this.owner.isAI == 1){
                        let sData = CommonTools.getDataJsonStr("syncBoomZhuan",1,{paopaoID:this.name,x:this.x,y:this.y,idx:this.curIdx,breakidx:obj.getCurIdx(),playerID:playerID});
                        ConstValue.P_NET_OBJ.sendData2(sData);
                    }
                }

                for(let i in FightingModule.bulletLayerSubObj){
                    let obj = FightingModule.bulletLayerSubObj[i];
                    let tPrebobo = obj.getPreBobo();
                    if(tPrebobo != null){
                        for(let j in tPrebobo){
                            if(j == this.name){
                                obj.beBaozha();//被引爆
                            }
                        }
                    }
                }

            }, this);
        }

        public beBaozha(){//引爆
            this.drawBaozha();
            for(let i in this.hitMap){
                let obj = this.hitMap[i];
                let playerID = 0
                if(this.owner.isAI == 1){
                    playerID = this.owner.roleId;
                }
                if(this.owner.isMainPlayer || this.owner.isAI == 1){
                    let sData = CommonTools.getDataJsonStr("syncBoomZhuan",1,{paopaoID:this.name,x:this.x,y:this.y,idx:this.curIdx,breakidx:obj.getCurIdx(),playerID:playerID});
                    ConstValue.P_NET_OBJ.sendData2(sData);
                }
            }
        }

        public setLeftLimit(limit){
            this.leftShowLimit = limit;
        }

        public setRightLimit(limit){
            this.rightShowLimit = limit;
        }

        public setDownLimit(limit){
            this.downShowLimit = limit;
        }

        public setUpLimit(limit){
            this.upShowLimit = limit;
        }

        public getLeftLimit(){
            return this.leftShowLimit;
        }

        public getRightLimit(){
            return this.rightShowLimit;
        }

        public getDownLimit(){
            return this.downShowLimit;
        }

        public getUpLimit(){
            return this.upShowLimit;
        }

        //-----------临时的
        public setLeftLimit2(limit){
            this.leftShowLimit2 = limit;
        }

        public setRightLimit2(limit){
            this.rightShowLimit2 = limit;
        }

        public setDownLimit2(limit){
            this.downShowLimit2 = limit;
        }

        public setUpLimit2(limit){
            this.upShowLimit2 = limit;
        }

        public getLeftLimit2(){
            return this.leftShowLimit2;
        }

        public getRightLimit2(){
            return this.rightShowLimit2;
        }

        public getDownLimit2(){
            return this.downShowLimit2;
        }

        public getUpLimit2(){
            return this.upShowLimit2;
        }

        public getCurIdx(){
            return this.curIdx;
        }

        private checkHit(scrTarge,director,len){
            try {
                let playerID = 0
                if(this.owner.isAI == 1){
                    playerID = this.owner.roleId;
                }
                for(let i in FightingModule.playerLayerSubObj){
                    let obj = FightingModule.playerLayerSubObj[i];
                    if(director == "zhong"){
                        FightingModule.groundLayerSubObjDanger[this.column+"_"+this.row].dangerCount ++;
                        FightingModule.groundLayerSubObjDanger[this.column+"_"+this.row].dangerPaoPaoObj = this;
                        if(obj.getRow() == this.row && obj.getColumn() == this.column){//同个位置
                            let sData = CommonTools.getDataJsonStr("syncBoomPlayer",1,{paopaoID:this.name,x:this.x,y:this.y,idx:this.curIdx,killrid:obj.roleId,killidx:parseInt(obj.curMapIdx),playerID:playerID});
                            ConstValue.P_NET_OBJ.sendData2(sData);
                            return true;
                        }
                    }
                    else if(director == "up"){
                        if(this.bulletLen != this.curLen){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row - len)].dangerCount ++;
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row - len)].dangerPaoPaoObj = this;
                        }
                        if(obj.getColumn() == this.column){
                            if(this.row - len == obj.getRow()){
                                let sData = CommonTools.getDataJsonStr("syncBoomPlayer",1,{paopaoID:this.name,x:this.x,y:this.y,idx:this.curIdx,killrid:obj.roleId,killidx:parseInt(obj.curMapIdx),playerID:playerID});
                                ConstValue.P_NET_OBJ.sendData2(sData);
                                return true;
                            }
                        }
                    }  
                    else if(director == "down"){
                        if(this.bulletLen != this.curLen){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row + len)].dangerCount ++;
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row + len)].dangerPaoPaoObj = this;
                        }
                        if(obj.getColumn() == this.column){
                            if(this.row + len == obj.getRow()){
                                let sData = CommonTools.getDataJsonStr("syncBoomPlayer",1,{paopaoID:this.name,x:this.x,y:this.y,idx:this.curIdx,killrid:obj.roleId,killidx:parseInt(obj.curMapIdx),playerID:playerID});
                                ConstValue.P_NET_OBJ.sendData2(sData);
                                return true;
                            }
                        }
                    }
                    else if(director == "left"){
                        if(this.bulletLen != this.curLen){
                            FightingModule.groundLayerSubObjDanger[(this.column-len)+"_"+this.row].dangerCount ++;
                            FightingModule.groundLayerSubObjDanger[(this.column-len)+"_"+this.row].dangerPaoPaoObj = this;
                        }
                        if(obj.getRow() == this.row){
                            if(this.column - len == obj.getColumn()){
                                let sData = CommonTools.getDataJsonStr("syncBoomPlayer",1,{paopaoID:this.name,x:this.x,y:this.y,idx:this.curIdx,killrid:obj.roleId,killidx:parseInt(obj.curMapIdx),playerID:playerID});
                                ConstValue.P_NET_OBJ.sendData2(sData);
                                return true;
                            }
                        }
                    }
                    else if(director == "right"){
                        if(this.bulletLen != this.curLen){
                            FightingModule.groundLayerSubObjDanger[(this.column+len)+"_"+this.row].dangerCount ++;
                            FightingModule.groundLayerSubObjDanger[(this.column+len)+"_"+this.row].dangerPaoPaoObj = this;
                        }
                        if(obj.getRow() == this.row){
                            if(this.column + len == obj.getColumn()){
                                let sData = CommonTools.getDataJsonStr("syncBoomPlayer",1,{paopaoID:this.name,x:this.x,y:this.y,idx:this.curIdx,killrid:obj.roleId,killidx:parseInt(obj.curMapIdx),playerID:playerID});
                                ConstValue.P_NET_OBJ.sendData2(sData);
                                return true;
                            }
                        }
                    }    
                }                
            } catch (error) {
                CommonTools.logError("checkHit==================error "+ error)
            }
            return false;
        }

        private markLimit(){
            //设置4个方向到障碍物是否有遮挡
            for(let i in FightingModule.mapLayerSubObj){
                let mapObj = FightingModule.mapLayerSubObj[i.toString()];
                if(mapObj.getType()==1)continue;
                if(mapObj.getRow() == this.getRow()){//行相等情况
                    if(mapObj.getColumn() < this.getColumn()){//障碍物在左边
                        let disLeft = this.getColumn() - mapObj.getColumn();
                        if(this.bulletLen >= disLeft){
                            if(this.getLeftLimit() > disLeft){
                                this.setLeftLimit(disLeft);
                                this.hitMap["leftHitMap"] = mapObj;
                            }
                        }
                    }
                    if(mapObj.getColumn() > this.getColumn()){//障碍物在右边
                        let disRight = mapObj.getColumn() - this.getColumn();
                        if(this.bulletLen >= disRight){
                            if(this.getRightLimit() > disRight){
                                this.setRightLimit(disRight);
                                this.hitMap["rightHitMap"] = mapObj;
                            }
                        }
                    }
                }

                if(mapObj.getColumn() == this.getColumn()){//列相等情况
                    if(mapObj.getRow() < this.getRow()){//障碍物在上边
                        let disUp = this.getRow() - mapObj.getRow();
                        if(this.bulletLen >= disUp){
                            if(this.getUpLimit() > disUp){
                                this.setUpLimit(disUp);
                                this.hitMap["upHitMap"] = mapObj;
                            }
                        }
                    }
                    if(mapObj.getRow() > this.getRow()){//障碍物在下边
                        let disDown = mapObj.getRow() - this.getRow();
                        if(this.bulletLen >= disDown){
                            if(this.getDownLimit() > disDown){
                                this.setDownLimit(disDown);
                                this.hitMap["downHitMap"] = mapObj;
                            }
                        }
                        if(disDown == 1){//下放障碍物
                            let iMapobjIndex = FightingModule.mapLayer.getChildIndex(mapObj);
                            if(FightingModule.mapLayer.getChildIndex(this) > FightingModule.mapLayer.getChildIndex(mapObj))
                                FightingModule.mapLayer.setChildIndex(this, iMapobjIndex);
                        }
                    }
                }
            }

            //设置4个方向到边界遮挡
            let disLimitLeft = this.getColumn() + 1;//左边界
            if(this.bulletLen >= disLimitLeft){
                if(this.getLeftLimit() > disLimitLeft){
                    this.setLeftLimit(disLimitLeft);
                }
            }

            let disLimitRight = ConstValue.P_FIGHT_OBJ.getInitColumn() - this.getColumn();//右边界
            if(this.bulletLen >= disLimitRight){
                if(this.getRightLimit() > disLimitRight){
                    this.setRightLimit(disLimitRight);
                }
            }

            let disLimitUp = this.getRow() + 1;//上边界
            if(this.bulletLen >= disLimitUp){
                if(this.getUpLimit() > disLimitUp){
                    this.setUpLimit(disLimitUp);
                }
            }

            let disLimitDown = ConstValue.P_FIGHT_OBJ.getInitRow() - this.getRow();//下边界
            if(this.bulletLen >= disLimitDown){
                if(this.getDownLimit() > disLimitDown){
                    this.setDownLimit(disLimitDown);
                }
            }
        }

        private drawBaozha(){
            try {
                CommonAudioHandle.playEffect("boom_mp3",1);
                for(let i in FightingModule.aiSubObj){
                    let obj = FightingModule.aiSubObj[i];
                    obj.setWalkAble(this.column,this.row,true);
                }
                this.removeChild(this.bodyAni);
                this.bodyAni = null;
                this.markLimit();
                if(this.bulletLen == 1){
            
                    this.effDic["zhong_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_zhong_anim_json"), RES.getRes("baozha_zhong_anim_png"), "0");
                    this.addChild(this.effDic["zhong_1"]);
                    this.effDic["zhong_1"].play(-1);
                    
                    this.checkHit(this.effDic["zhong_1"],"zhong",this.curLen);

                    this.effDic["up_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["up_1"]);
                    this.effDic["up_1"].play(1);

                    if(this.curLen >= this.upShowLimit){
                        this.effDic["up_1"].visible = false;
                    }
                    if(this.effDic["up_1"].visible){
                        this.checkHit(this.effDic["up_1"],"up",this.curLen);
                    }

                    this.effDic["down_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["down_1"]);
                    this.effDic["down_1"].play(1);
                    this.effDic["down_1"].scaleY = "-1";
                    if(this.curLen >= this.downShowLimit){
                        this.effDic["down_1"].visible = false;
                    }
                    if(this.effDic["down_1"].visible){
                        this.checkHit(this.effDic["down_1"],"down",this.curLen);
                    }

                    this.effDic["right_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["right_1"]);
                    this.effDic["right_1"].play(1);
                    this.effDic["right_1"].rotation = 90;
                    if(this.curLen >= this.rightShowLimit){
                        this.effDic["right_1"].visible = false;
                    }  
                    if(this.effDic["right_1"].visible){
                        this.checkHit(this.effDic["right_1"],"right",this.curLen);
                    }

                    this.effDic["left_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["left_1"]);
                    this.effDic["left_1"].play(1);
                    this.effDic["left_1"].rotation = -90;
                    
                    if(this.curLen >= this.leftShowLimit){
                        this.effDic["left_1"].visible = false;
                    }
                    if(this.effDic["left_1"].visible){
                        this.checkHit(this.effDic["left_1"],"left",this.curLen);
                    }

                    if(ConstValue.P_FIGHT_OBJ.APP_MODE == 1){
                        this.effDic["zhong_1"].y += 28;
                        this.effDic["up_1"].y -= 55;
                        this.effDic["left_1"].x -= 70;
                        this.effDic["left_1"].y += 15;
                        this.effDic["right_1"].x += 70;
                        this.effDic["right_1"].y += 15;
                        this.effDic["down_1"].y += 82;
                    }else{
                        this.effDic["zhong_1"].x -= 12;
                        this.effDic["zhong_1"].y += 10;
                        this.effDic["up_1"].x -= 10;
                        this.effDic["up_1"].y -= 45;
                        this.effDic["left_1"].x -= 70;
                        this.effDic["left_1"].y += 0;
                        this.effDic["right_1"].x += 58;
                        this.effDic["right_1"].y += 0;
                        this.effDic["down_1"].x -= 13;
                        this.effDic["down_1"].y += 68;
                    }

                    this.effDic["up_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["up_1"].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row-1)].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["up_1"]);
                        this.effDic["up_1"] = null;
                        delete this.effDic["up_1"];
                    }, this);

                    this.effDic["down_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["down_1"].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row+1)].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["down_1"]);
                        this.effDic["down_1"] = null;
                        delete this.effDic["down_1"];
                    }, this);

                    this.effDic["right_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["right_1"].visible){
                            FightingModule.groundLayerSubObjDanger[(this.column+1)+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["right_1"]);
                        this.effDic["right_1"] = null;
                        delete this.effDic["right_1"];
                    }, this);

                    this.effDic["left_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["left_1"].visible){
                            FightingModule.groundLayerSubObjDanger[(this.column-1)+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["left_1"]);
                        this.effDic["left_1"] = null;
                        delete this.effDic["left_1"];
                        
                        if(this.effDic["zhong_1"].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["zhong_1"]);
                        this.effDic["zhong_1"] = null;
                        delete this.effDic["zhong_1"];

                        if(FightingModule.bulletLayerSubObj[this.name] != null){
                            FightingModule.mapLayer.removeChild(this);
                            FightingModule.bulletLayerSubObj[this.name] = null;
                            delete  FightingModule.bulletLayerSubObj[this.name];
                        }
                    }, this);
                }else{

                    this.effDic["zhong_"+this.bulletLen] = CommonTools.getAnimDraw(RES.getRes("baozha_zhong_anim_json"), RES.getRes("baozha_zhong_anim_png"), "0");
                    this.addChild(this.effDic["zhong_"+this.bulletLen]);
                    this.effDic["zhong_"+this.bulletLen].play(-1);
                    

                    if(ConstValue.P_FIGHT_OBJ.APP_MODE == 1){
                        this.effDic["zhong_"+this.bulletLen].y += 22;
                    }else{
                        this.effDic["zhong_"+this.bulletLen].x -= 15;
                        this.effDic["zhong_"+this.bulletLen].y += 6;
                    }

                    this.checkHit(this.effDic["zhong_"+this.bulletLen],"zhong",this.curLen);

                    this.addNext(this.effDic["zhong_"+this.bulletLen].x,this.effDic["zhong_"+this.bulletLen].y);
                } 
            } catch (error) {
                CommonTools.logError("drawBaozha==================error "+ error)
            }
        }

        private addNext(curx,cury){
            FightingModule.Delay(20, function(){
                try {
                    this.nextDic["up_"+this.curLen] = new eui.Image(RES.getRes("baozha_jie_png"));
                    this.addChild(this.nextDic["up_"+this.curLen]);
                    this.nextDic["up_"+this.curLen].x = curx - 47;
                    this.nextDic["up_"+this.curLen].y = cury - 180 - 80*(this.curLen-1);
                    if(this.curLen >= this.upShowLimit){
                        this.nextDic["up_"+this.curLen].visible = false;
                    }
                    if(this.nextDic["up_"+this.curLen].visible){
                        this.checkHit(this.nextDic["up_"+this.curLen],"up",this.curLen);
                    }

                    this.nextDic["down_"+this.curLen] = new eui.Image(RES.getRes("baozha_jie_png"));
                    this.addChild(this.nextDic["down_"+this.curLen]);
                    this.nextDic["down_"+this.curLen].y = cury + 160 + 80*(this.curLen-1);
                    this.nextDic["down_"+this.curLen].scaleY = "-1";
                    if(this.curLen >= this.downShowLimit){
                        this.nextDic["down_"+this.curLen].visible = false;
                    }
                    if(this.nextDic["down_"+this.curLen].visible){
                        this.checkHit(this.nextDic["down_"+this.curLen],"down",this.curLen);
                    }

                    if(ConstValue.P_FIGHT_OBJ.APP_MODE == 1){
                        this.nextDic["down_"+this.curLen].x = curx - 47;
                    }else{
                        this.nextDic["down_"+this.curLen].x = curx - 44;
                    }

                    this.nextDic["right_"+this.curLen] = new eui.Image(RES.getRes("baozha_jie_png"));
                    this.addChild(this.nextDic["right_"+this.curLen]);
                    this.nextDic["right_"+this.curLen].x = curx + 169 + 80*(this.curLen-1);
                    this.nextDic["right_"+this.curLen].y = cury - 62;
                    this.nextDic["right_"+this.curLen].rotation = 90;
                    if(this.curLen >= this.rightShowLimit){
                        this.nextDic["right_"+this.curLen].visible = false;
                    }  
                    if(this.nextDic["right_"+this.curLen].visible){
                        this.checkHit(this.nextDic["right_"+this.curLen],"right",this.curLen);
                    }

                    this.nextDic["left_"+this.curLen] = new eui.Image(RES.getRes("baozha_jie_png"));
                    this.addChild(this.nextDic["left_"+this.curLen]);
                    this.nextDic["left_"+this.curLen].x = curx - 169 - 80*(this.curLen-1);
                    this.nextDic["left_"+this.curLen].y = cury - 62;
                    this.nextDic["left_"+this.curLen].rotation = 90;
                    this.nextDic["left_"+this.curLen].scaleY = "-1";
                    if(this.curLen >= this.leftShowLimit){
                        this.nextDic["left_"+this.curLen].visible = false;
                    }  
                    if(this.nextDic["left_"+this.curLen].visible){
                        this.checkHit(this.nextDic["left_"+this.curLen],"left",this.curLen);
                    }

                    this.curLen ++;
                    if(this.bulletLen == this.curLen){
                        this.baozhaLastEff(this.nextDic["up_"+(this.curLen-1)].x,this.nextDic["up_"+(this.curLen-1)].y,1);
                        this.baozhaLastEff(this.nextDic["down_"+(this.curLen-1)].x,this.nextDic["down_"+(this.curLen-1)].y,2);
                        this.baozhaLastEff(this.nextDic["right_"+(this.curLen-1)].x,this.nextDic["right_"+(this.curLen-1)].y,3);
                        this.baozhaLastEff(this.nextDic["left_"+(this.curLen-1)].x,this.nextDic["left_"+(this.curLen-1)].y,4);
                    }else{
                        this.addNext(curx,cury);
                    }
                } catch (error) {
                    CommonTools.logError("addNext==================error "+ error)
                }
            }, this);
        }

        private removePre(curIndex){
            FightingModule.Delay(20, function(){
                try {
                    if(curIndex == 0){
                        if(this.effDic["zhong_"+this.bulletLen].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["zhong_"+this.bulletLen]);
                        this.effDic["zhong_"+this.bulletLen] = null;
                        delete this.effDic["zhong_"+this.bulletLen];

                        if(FightingModule.bulletLayerSubObj[this.name] != null){
                            FightingModule.mapLayer.removeChild(this);
                            FightingModule.bulletLayerSubObj[this.name] = null;
                            delete  FightingModule.bulletLayerSubObj[this.name];
                        }
                    }else{
                        if(this.nextDic["up_"+curIndex].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row-curIndex)].dangerCount = 0;
                        }
                        this.removeChild(this.nextDic["up_"+curIndex]);
                        this.nextDic["up_"+curIndex] = null;
                        delete this.nextDic["up_"+curIndex];
                        
                        if(this.nextDic["down_"+curIndex].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row+curIndex)].dangerCount = 0;
                        }
                        this.removeChild(this.nextDic["down_"+curIndex]);
                        this.nextDic["down_"+curIndex] = null;
                        delete this.nextDic["down_"+curIndex];

                        if(this.nextDic["right_"+curIndex].visible){
                            FightingModule.groundLayerSubObjDanger[(this.column+curIndex)+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.nextDic["right_"+curIndex]);
                        this.nextDic["right_"+curIndex] = null;
                        delete this.nextDic["right_"+curIndex];

                        if(this.nextDic["left_"+curIndex].visible){
                            FightingModule.groundLayerSubObjDanger[(this.column-curIndex)+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.nextDic["left_"+curIndex]);
                        this.nextDic["left_"+curIndex] = null;
                        delete this.nextDic["left_"+curIndex];

                        this.removePre(curIndex-1);
                    }
                } catch (error) {
                    CommonTools.logError("removePre==================error "+ error)
                }
            }, this);
        }

        private baozhaLastEff(curx,cury,type){
            try {
                if(type == 1){
                    this.effDic["up_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["up_1"]);
                    this.effDic["up_1"].play(1);
                    this.effDic["up_1"].x = curx + 48;
                    this.effDic["up_1"].y = cury + 30;

                    this.effDic["up_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["up_1"].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row-this.curLen)].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["up_1"]);
                        this.effDic["up_1"] = null;
                        delete this.effDic["up_1"];
                    }, this);
                    if(this.curLen >= this.upShowLimit){
                        this.effDic["up_1"].visible = false;
                    }
                    if(this.effDic["up_1"].visible){
                        this.checkHit(this.nextDic["up_1"],"up",this.curLen);
                    }
                }else if(type == 2){
                    this.effDic["down_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["down_1"]);
                    this.effDic["down_1"].play(1);
                    this.effDic["down_1"].x = curx + 48;
                    this.effDic["down_1"].y = cury -30;
                    this.effDic["down_1"].scaleY = "-1";

                    this.effDic["down_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["down_1"].visible){
                            FightingModule.groundLayerSubObjDanger[this.column+"_"+(this.row+this.curLen)].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["down_1"]);
                        this.effDic["down_1"] = null;
                        delete this.effDic["down_1"];
                    }, this);
                    if(this.curLen >= this.downShowLimit){
                        this.effDic["down_1"].visible = false;
                    }
                    if(this.effDic["down_1"].visible){
                        this.checkHit(this.nextDic["down_1"],"down",this.curLen);
                    }
                }else if(type == 3){
                    this.effDic["right_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["right_1"]);
                    this.effDic["right_1"].play(1);
                    this.effDic["right_1"].x = curx - 25;
                    this.effDic["right_1"].y = cury + 47;
                    this.effDic["right_1"].rotation = 90;

                    this.effDic["right_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["right_1"].visible){
                            FightingModule.groundLayerSubObjDanger[(this.column+this.curLen)+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["right_1"]);
                        this.effDic["right_1"] = null;
                        delete this.effDic["right_1"];
                    }, this);

                    if(this.curLen >= this.rightShowLimit){
                        this.effDic["right_1"].visible = false;
                    }
                    if(this.effDic["right_1"].visible){
                        this.checkHit(this.nextDic["right_1"],"right",this.curLen);
                    }
                }else if(type == 4){
                    this.effDic["left_1"] = CommonTools.getAnimDraw(RES.getRes("baozha_last_anim_json"), RES.getRes("baozha_last_anim_png"), "0");
                    this.addChild(this.effDic["left_1"]);
                    this.effDic["left_1"].play(1);
                    this.effDic["left_1"].x = curx + 35;
                    this.effDic["left_1"].y = cury + 47;
                    this.effDic["left_1"].rotation = 90;
                    this.effDic["left_1"].scaleY = "-1";

                    this.effDic["left_1"].once(egret.Event.COMPLETE, function(e:egret.Event){
                        if(this.effDic["left_1"].visible){
                            FightingModule.groundLayerSubObjDanger[(this.column-this.curLen)+"_"+this.row].dangerCount = 0;
                        }
                        this.removeChild(this.effDic["left_1"]);
                        this.effDic["left_1"] = null;
                        delete this.effDic["left_1"];
                        this.removePre(this.bulletLen-1);
                    }, this);
                    if(this.curLen >= this.leftShowLimit){
                        this.effDic["left_1"].visible = false;
                    }
                    if(this.effDic["left_1"].visible){
                        this.checkHit(this.nextDic["left_1"],"left",this.curLen);
                    }
                }
            } catch (error) {
                CommonTools.logError("baozhaLastEff==================error "+ error)
            }
        }

        public setRow(row){
            this.row = row;
        }

        public getRow(){
            return this.row;
        }

        public setColumn(column){
            this.column = column;
        }

        public getColumn(){
            return this.column;
        }

        public setPreBobo(preBobo){
            if(this.preBobo == null){
                this.preBobo = {};
            }
            this.preBobo[preBobo] = 1;
        }

        public getPreBobo(){
            return this.preBobo;
        }
        
    }
}