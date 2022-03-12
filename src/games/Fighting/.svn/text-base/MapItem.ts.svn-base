/**
 * 战斗模块
 */
module Fight {
	/**地图物件 */
    export class MapItem extends egret.DisplayObjectContainer{
        private showImg;
        private row;
        private column;
        private type;//1.地表 2.障碍物 3.装饰 7.通关门
        private curIdx;
        private sub;
        public subType = 0;
        public itemRange = [0,0,0,0]//x1,x2,y1,y2
        public res;
        public resSub;
        public isPlayer = 0;
        public groundEmpty = false;

        public dangerCount = 0;
        public dangerPaoPaoObj = null;
        private boundRec;//触碰框
        private showAnim;//闪烁动画

		/**地图物件对象 */
		public constructor(para) {
			super();
            this.showImg = new eui.Image(para["img"]);
            this.x = para["x"];
            this.y = para["y"];
            this.name = para["name"];
            this.curIdx = para["curIdx"];
            this.addChild(this.showImg);
        }

        public setBoundRec(bound){
            this.boundRec = bound;
        }

        public getBoundRec(){
            return this.boundRec;
        }

        public checkRange(x,y,res,type,funcType){
            if(x>=this.itemRange[0] && x<this.itemRange[1] && y>=this.itemRange[2] && y<this.itemRange[3]){
                if(type == 1){
                    this.removeChild(this.showImg);
                    let tempRes = res;
                    if(funcType == 2){
                        tempRes = "diy_add_big_item_png";
                        this.groundEmpty = true;
                    }else{
                        this.groundEmpty = false;
                        let resStr = tempRes.split("_");
                        this.res = parseInt(resStr[1]);
                    }
                    this.showImg = new eui.Image(tempRes);
                    this.addChild(this.showImg);
                }else{
                    if(this.sub){
                        this.removeChild(this.sub);
                        this.sub = null;
                        this.subType = 0;
                        if(this.isPlayer > 0){
                            if(this.isPlayer == 119){
                                MapDIYModule.ONE_P = "";
                            }else{
                                MapDIYModule.TWO_P = "";
                            }
                            this.isPlayer = 0
                        }
                    }
                    if(funcType == 2)return;
                    let tempRes = res;
                    if(funcType == 3 && MapDIYModule.ONE_P != "")return;
                    if(funcType == 4 && MapDIYModule.TWO_P != "")return;
                    if(funcType == 3){
                        MapDIYModule.ONE_P = this.name;
                        this.isPlayer = 119;
                        tempRes = "diy_1p_png";
                    }
                    if(funcType == 4){
                        MapDIYModule.TWO_P = this.name;
                        this.isPlayer = 120;
                        tempRes = "diy_2p_png";
                    }
                    if(this.isPlayer > 0){
                        this.resSub = this.isPlayer;
                    }else{
                        let resStr = tempRes.split("_");
                        this.resSub = parseInt(resStr[1]);
                    }
                    this.sub = new eui.Image(tempRes);
                    this.subType = type;
                    this.addChild(this.sub);
                    // this.sub.x += 8;
                    this.sub.y -= 38;
                    if(this.isPlayer>0){
                        this.sub.y -= 38;
                    }
                }
            }
        }

        public checkRange2(res,type,funcType){
            CommonTools.log("------curIdx:"+this.curIdx +" column:"+this.column + " row:"+this.row )
            if(type == 1){
                this.removeChild(this.showImg);
                let tempRes = res;
                if(funcType == 2){
                    tempRes = "diy_add_big_item_png";
                    this.groundEmpty = true;
                }else{
                    this.groundEmpty = false;
                    let resStr = tempRes.split("_");
                    this.res = parseInt(resStr[1]);
                }
                this.showImg = new eui.Image(tempRes);
                this.addChild(this.showImg);
            }else{
                if(this.sub){
                    this.removeChild(this.sub);
                    this.sub = null;
                    this.subType = 0;
                    if(this.isPlayer > 0){
                        if(this.isPlayer == 119){
                            MapDIYModule.ONE_P = "";
                        }else{
                            MapDIYModule.TWO_P = "";
                        }
                        this.isPlayer = 0
                    }
                }
                if(funcType == 2)return;
                let tempRes = res;
                if(funcType == 3 && MapDIYModule.ONE_P != "")return;
                if(funcType == 4 && MapDIYModule.TWO_P != "")return;
                if(funcType == 3){
                    MapDIYModule.ONE_P = this.name;
                    this.isPlayer = 119;
                    tempRes = "diy_1p_png";
                }
                if(funcType == 4){
                    MapDIYModule.TWO_P = this.name;
                    this.isPlayer = 120;
                    tempRes = "diy_2p_png";
                }
                if(this.isPlayer > 0){
                    this.resSub = this.isPlayer;
                }else{
                    let resStr = tempRes.split("_");
                    this.resSub = parseInt(resStr[1]);
                }
                this.sub = new eui.Image(tempRes);
                this.subType = type;
                this.addChild(this.sub);
                // this.sub.x += 8;
                this.sub.y -= 38;
                if(this.isPlayer>0){
                    this.sub.y -= 38;
                }
            }
        }

        public addMiniBlock(res){
            this.sub = new eui.Image(res);
            this.addChild(this.sub);
            this.sub.y -= 38;
        }

        public addMiniPlayer(res){
            let tempRes="";
            if(res == 119){
                tempRes = "diy_1p_png";
            }else{
                tempRes = "diy_2p_png";
            }
            this.sub = new eui.Image(tempRes);
            this.addChild(this.sub);
            this.sub.y -= 76;
        }

        public viewSub(flag){
            if(this.sub){
                if(flag){
                    let subSource = this.sub.source;
                    let xSource = this.sub.x;
                    let ySource = this.sub.y;
                    this.removeChild(this.sub);
                    this.sub = new eui.Image(subSource);
                    this.sub.x = xSource;
                    this.sub.y = ySource;
                    this.addChild(this.sub);
                }else{
                    this.sub.visible = false;
                }
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

        public setType(type){
            this.type = type;

            if(type > 1){
                // var shp: egret.Shape = new egret.Shape();
                // shp.graphics.beginFill(0xff0000);
                // shp.graphics.drawRect(0,41,82,82);
                // shp.graphics.endFill();
                // this.addChild(shp);
            }

        }

        public getType(){
            return this.type;
        }

        public getCurIdx(){
            return this.curIdx;
        }

        public getSubType(){
            return this.subType;
        }

        public setRes(res){
            this.res = res;
        }

        public addSub(item,type){
            this.sub = item;
            this.subType = type;
            this.addChild(this.sub);
            if(type == 7){
                // this.sub.x += 8;
                this.sub.y -= 35;
                this.sub.scaleX = 1;
                this.sub.scaleY = 1;//0.9
            }else{
                this.sub.x += 8;
                this.sub.y += 8;
                this.sub.scaleX = 1.2;
                this.sub.scaleY = 1.2;
            }
            this.notifyToAI();
            ConstValue.P_FIGHT_OBJ.getMainPlayer().removeGuideTips("3");
            if(egret.localStorage.getItem(ConstValue.guide_tips["4"].saveKey) != "1" 
                && this.sub != null){
                this.showAnim = egret.Tween.get(this.sub);
                for(let i=0;i<50;i++){
                    this.showAnim.to({alpha:0.1},400);
                    this.showAnim.to({alpha:1},400);
                }
            }
        }

        private notifyToAI(){
            for(let i in FightingModule.aiSubObj){
                let obj = FightingModule.aiSubObj[i];
                obj.beNotifyHasFood(this.column,this.row);
            }
        }

        public clearSub(){
            if(this.sub != null && this.subType != 7 && this.subType != -1){
                if(this.showAnim != null){
                    egret.Tween.removeTweens(this.sub);
                    this.showAnim = null;
                    ConstValue.P_FIGHT_OBJ.getMainPlayer().removeGuideTips("4");
                }
                this.removeChild(this.sub);
                this.sub = null;
                this.subType = 0;
            }

            if(this.sub != null && this.subType == 7){
                this.subType = -1;
                FightingModule.Delay(3000,function(){
                    this.subType = 7;
                },this);
            }
        }

    }
}