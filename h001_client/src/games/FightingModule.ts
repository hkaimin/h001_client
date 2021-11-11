/**
 * 战斗模块
 */
class FightingModule {
	/**上级容器 */
    private context:Main;
    /** 模块本体*/
    private panel;
    /** 地表层*/
    private static groundLayer;
    public static groundLayerSubObj = {};
    public static groundLayerSubObjDanger = {};
    /** 人物层 */
    private pMainRole = "";//role1左 role2右
    private p1 = 119;//左
    private p2 = 120;//右
    private pAI = 121;//怪物
    private pAISelect = {};//取怪器

    public static playerLayer;
    public static playerLayerSubObj = {};
    /** 子弹层 */
    public static bulletLayer;
    public static bulletLayerSubObj = {};
    /** 地图组件层 */
    public static mapLayer;
    public static mapLayerSubObj = {};
    public static mapLayerLock = false;

    public static mapLeftLimit = 177;
    public static mapUpLimit = 106;
    public static mapRightLimit = 823;
    public static mapDownLimit = 649;

    /**AI */
    public static aiSubObj = {};
    public static aiPVE = false;

    /**摇杆 */
    private controlerParent;
    private controlerHit;
    private controlerHit_x = 28;
    private controlerHit_y = 183;
    private r = 104;

    private controlerHit_x_c = 132;
    private controlerHit_y_c = 287;

    private initRow = 7;
    private initColumn = 9;
    private firstItemX = 167;
    private firstItemY = 134;
    private groundItemW = 82;
    private groundItemH = 82;
    private groundOffX = -25;
    private groundOffY = -28;
    
    public APP_MODE = 1;//1:7*9  2:9*11
    public FIGHT_MODE = 1;//1pvp 2pve
    private scaleX = 1;
    private scaleY = 1;
    public playerData = null;
    private playerLen = 0;
    private curPlayer = null;
    
    private vsPanel = null;
    private resultPanel = null;
    private miniGamePanel = null;
    private maskBg;
    private maskVsBg;
    private maskMiniBg;
    private maskResultBg;

    private otherCount = 0;
    private counterTimer = null;
    private countDown = 3;

    private counterTimerSkill01 = null;
    private countDownSkill01 = 0;
    private counterTimerSkill02 = null;
    private countDownSkill02 = 0;

    private infoPanel;
    public static readyTwo = false;
    public static readyRes = false;

    public backBtn = null;
    private initCnt = 0;

    public static curBarrNo = 1;
    private shareRes = 0;

    private dSkill = null;
    private shortCut01 = "1";
    private shortCut02 = "2";
    private jumpTip;
    private jumpHand;

    //test
    private testGround = [
        1,1,1,1,1,1,2,2,1,
        1,1,1,1,1,1,2,1,2,
        1,1,1,3,1,1,2,2,1,
        3,2,2,1,1,1,2,2,3,
        1,1,3,1,1,1,2,2,1,
        1,2,1,1,1,1,2,3,2,
        1,1,1,1,1,1,2,3,2
    ];

    private testMap = [
        1,1,1,1,1,1,2,6,1,
        1,119,1,1,1,1,2,6,1,
        1,1,1,1,1,1,2,6,1,
        3,2,2,1,1,120,2,6,1,
        1,1,13,1,1,1,2,6,1,
        1,9,6,1,1,1,2,6,1,
        1,12,11,1,1,1,2,6,1
    ];

    private testGround2 = [
        1,1,1,1,1,1,2,2,1,1,1,
        1,1,1,1,1,1,2,1,2,1,1,
        1,1,1,3,1,1,2,2,1,1,1,
        3,2,2,1,1,1,2,2,3,1,1,
        1,1,3,1,1,1,2,2,1,1,1,
        1,2,1,1,1,1,2,3,2,1,1,
        1,1,1,1,1,1,2,3,2,1,1,
        1,1,1,1,1,1,2,3,2,1,1,
        1,1,1,1,1,1,2,3,2,1,1
    ];

    private testMap2 = [
        0,0,0,0,0,0,0,0,5,6,0,
        0,119,0,0,0,0,0,6,5,6,0,
        0,0,0,0,0,0,0,6,5,6,0,
        0,0,0,0,0,120,0,6,5,6,0,
        0,0,13,0,0,0,0,6,5,6,0,
        0,9,6,0,0,0,0,0,0,0,0,
        0,9,6,0,0,0,0,6,5,6,0,
        0,9,6,0,0,0,0,6,5,6,0,
        0,12,11,0,0,0,0,6,5,6,0
    ];
    //test
    
	/**
     * 构造函数
     */
    public constructor(ct:Main) {
        CommonAudioHandle.play("mainmenu_mp3",0);
        CommonTools.log("=init===1==========")
		this.context = ct;

        this.maskBg = new eui.Image("bg_ppt_1_png");
		this.maskBg.width = this.context.getStageWidth();
		let scaleDevice = 1334.0/this.context.getStageWidth();
        this.maskBg.height = 750.0/scaleDevice;
		this.context.addChild(this.maskBg);

        this.infoPanel = new eui.Panel();
		this.infoPanel.skinName = "resource/eui_skins/UserUI/FightInfoGroup.exml";
        this.infoPanel.title = "TitleInfo";
        this.infoPanel.x = -50;
        this.infoPanel.y = 80;
        this.infoPanel.scaleX = 0.8;
        this.infoPanel.scaleY = 0.8;
        this.context.addChild(this.infoPanel);

        this.panel = new eui.Panel();
		this.panel.skinName = "resource/eui_skins/UserUI/fightingUI.exml";
        this.panel.title = "Title";
        this.panel.horizontalCenter = 0;
        this.panel.verticalCenter = 0;
        this.context.addChild(this.panel);

        this.backBtn = new eui.Image("btn_back_png");
		this.backBtn.width = 60;
		this.backBtn.height = 60;
        this.backBtn.x = 44;
        this.backBtn.y = 10;
        this.backBtn.name = "back_btn";
		this.context.addChild(this.backBtn);
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        CommonTools.log("=init===2==========")
        CommonTools.fixFix(this.context,this.panel,1,0,0);
        CommonTools.fixFix(this.context,this.infoPanel,1,70,-100);
        // this.initConfig();
        ConstValue.gatewayType = 1;
        // this.initScene();//初始化地图

        Main.roomkey = null;
	}

    /**
	 * 初始化配置
	 */
	private initConfig(){
		LZMA.decompress(EBitUtil.getArr(new egret.ByteArray(RES.getRes("config_json"))), (d) => {
			// CommonTools.log("initXYConfig=========dddd======"+d);
            ConstValue.P_CONFIG = <ConfigInterface> JSON.parse(d);
			// this.initScene();//初始化地图
        }, (t) => {
            //ELog.info("conf:",t);
        });
	}

    public initMapData(jsonObj){
        this.APP_MODE = jsonObj.map_mode;
        this.FIGHT_MODE = jsonObj.fight_mode;
        this.testGround = jsonObj.bgConf;
        this.testMap = jsonObj.layerConf;
        this.playerData = jsonObj.player;
    }

    private setControl(x,y){
        let angle = Math.atan2((y-this.controlerHit_y_c),(x-this.controlerHit_x_c));//弧度 0.6
        let theta = angle*(180/Math.PI);//角度 60
        let x1 = this.controlerHit_x + this.r * Math.cos(theta * 3.14/180);
        let y1 = this.controlerHit_y + this.r * Math.sin(theta * 3.14/180);
        this.controlerHit.x = x1;
        this.controlerHit.y = y1;
    }

    private myKeyDown(evt:any){
        CommonTools.logDebug("keydown =====code:"+evt.keyCode)
        if(evt.keyCode == 87 || evt.keyCode == 83 || evt.keyCode == 65 || evt.keyCode == 68){
            let mainPl = ConstValue.P_FIGHT_OBJ.getMainPlayer();
            if(mainPl.keyDir != evt.keyCode){
                if(mainPl.func != null){
                    mainPl.setMoving(false);
                    mainPl.removeEventListener(egret.Event.ENTER_FRAME,mainPl.func, mainPl);
                    mainPl.func = null;
                }
                mainPl.func = function(e:egret.Event) {
                    mainPl.setMoving(true);
                    mainPl.move(-1,true);
                }
                mainPl.addEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
                mainPl.keyDir = evt.keyCode;
            }

            if(evt.keyCode == 87){//W
                mainPl.setMoving(true);
                mainPl.move(0,false);
            }
            if(evt.keyCode == 83){//S
                mainPl.setMoving(true);
                mainPl.move(2,false);
            }
            if(evt.keyCode == 65){//A
                mainPl.setMoving(true);
                mainPl.move(3,false);
            }
            if(evt.keyCode == 68){//D
                mainPl.setMoving(true);
                mainPl.move(1,false);
            }

        }
        
        if(evt.keyCode == 74){//J
            let mainPl = ConstValue.P_FIGHT_OBJ.getMainPlayer();
            mainPl.markPosition(-1);
            let sData = CommonTools.getDataJsonStr("syncPut",1,{x:mainPl.x,y:mainPl.y,idx:parseInt(mainPl.curMapIdx),playerID:0});
            ConstValue.P_NET_OBJ.sendData2(sData);
        }
    }

    private myKeyUp(evt:any){
        CommonTools.logDebug("keyup =====code:"+evt.keyCode)
        if(evt.keyCode == 87 || evt.keyCode == 83 || evt.keyCode == 65 || evt.keyCode == 68){
            ConstValue.P_FIGHT_OBJ.controlerHit.x = ConstValue.P_FIGHT_OBJ.controlerHit_x;
            ConstValue.P_FIGHT_OBJ.controlerHit.y = ConstValue.P_FIGHT_OBJ.controlerHit_y;
            let mainPl = ConstValue.P_FIGHT_OBJ.getMainPlayer();
            mainPl.setMoving(false);
            mainPl.removeEventListener(egret.Event.ENTER_FRAME,mainPl.func, mainPl);
            mainPl.func = null;
            mainPl.keyDir = -1;
            if(!FightingModule.aiPVE){
                let sData = CommonTools.getDataJsonStr("syncPos",1,{x:mainPl.x,y:mainPl.y,direction:-1,speed:mainPl.speed,idx:parseInt(mainPl.curMapIdx),playerID:0});
                ConstValue.P_NET_OBJ.sendData2(sData);
            }
        }
    }

    private initScene(){
        if(this.initCnt > 0)return;
        this.initCnt ++;
        if(this.APP_MODE == 2){
            this.initRow = 9;
            this.initColumn = 11;
            this.scaleX = 0.8;
            this.scaleY = 0.8;

            //-----test------------------------
            // this.testMap = this.testMap2;
            // this.testGround = this.testGround2;
            //-----test------------------------
        }
        let fighting_parent = this.panel.getChildByName("fighting_parent");
        //地表层
        FightingModule.groundLayer = fighting_parent.getChildByName("ground_layer");
        FightingModule.playerLayer = fighting_parent.getChildByName("player_layer");
        FightingModule.bulletLayer = fighting_parent.getChildByName("bullet_layer");
        FightingModule.mapLayer = fighting_parent.getChildByName("map_layer");
        
        
        if(this.APP_MODE == 2){
            let fighting_platform = fighting_parent.getChildByName("fighting_platform");
            fighting_platform.width = 770;
            fighting_platform.height = 640;
            fighting_platform.x += 16;
            fighting_platform.y += 12;
            fighting_parent.x = 156;
            fighting_parent.y = -50;
        }else if(this.APP_MODE == 1){
            fighting_parent.x = 145;
            fighting_parent.y = -45;
        }
        this.controlerParent = this.panel.getChildByName("controler_parent");
        this.controlerHit = this.panel.getChildByName("controler_parent").getChildByName("controler_hit_btn");

        this.panel.getChildByName("test").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            // let sData = CommonTools.getDataJsonStr("test",1,{v:1});
			// ConstValue.P_NET_OBJ.sendData2(sData);
            egret.localStorage.setItem("fightFirstPNG","0");
            let arr = ["1","2","3","4","5"];
            for(let i=0;i < arr.length;i++){
                egret.localStorage.setItem(ConstValue.guide_tips[arr[i]].saveKey,"0");
            }
            CommonTools.addCommonTips(this.panel,"清理成功，请重新进入战斗");
        }, this);

        this.panel.getChildByName("boom_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            let mainPl = this.getMainPlayer();
            // mainPl.fire();
            mainPl.markPosition(-1);
            let sData = CommonTools.getDataJsonStr("syncPut",1,{x:mainPl.x,y:mainPl.y,idx:parseInt(mainPl.curMapIdx),playerID:0});
			ConstValue.P_NET_OBJ.sendData2(sData);
        }, this);

        let skill_01_cd = this.panel.getChildByName("skill_01_cd") as eui.Label;
        let skill_02_cd = this.panel.getChildByName("skill_02_cd") as eui.Label;
        let skill_01 = this.panel.getChildByName("skill_01") as eui.Image;
        let skill_02 = this.panel.getChildByName("skill_02") as eui.Image;
        skill_01.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            if(this.countDownSkill01 > 0)return;
            if(skill_01.source == ConstValue.skill_conf[this.shortCut01].cdicon){
                CommonTools.addCommonTips(this.panel,"请学习技能系统");
                return;
            }
            let sData_skill = CommonTools.getDataJsonStr("useSkill",1,{skillID:1});
			ConstValue.P_NET_OBJ.sendData2(sData_skill);
            if(this.counterTimerSkill01 != null){
                this.counterTimerSkill01.stop();
                this.counterTimerSkill01.removeEventListener(egret.TimerEvent.TIMER);
            }
            skill_01_cd.visible = true;
            skill_01.source = ConstValue.skill_conf[this.shortCut01].cdicon;
            skill_01_cd.text = this.dSkill[this.shortCut01].cd;
            this.countDownSkill01 = this.dSkill[this.shortCut01].cd;
            this.counterTimerSkill01 = new egret.Timer(1000,0);
            this.counterTimerSkill01.addEventListener(egret.TimerEvent.TIMER,function(){
				if (this.countDownSkill01 == 0){
                    skill_01_cd.visible = false;
                    skill_01.source = ConstValue.skill_conf[this.shortCut01].icon;
                    this.counterTimerSkill01.stop()
				}else{
					this.countDownSkill01--;
                    skill_01_cd.text = this.countDownSkill01;
				}
			},this);
			this.counterTimerSkill01.start();
        }, this);

        skill_02.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            if(this.countDownSkill02 > 0)return;
            if(skill_02.source == ConstValue.skill_conf[this.shortCut02].cdicon){
                CommonTools.addCommonTips(this.panel,"请学习技能系统");
                return;
            }
            let sData_skill = CommonTools.getDataJsonStr("useSkill",1,{skillID:2});
			ConstValue.P_NET_OBJ.sendData2(sData_skill);
            if(this.counterTimerSkill02 != null){
                this.counterTimerSkill02.stop();
                this.counterTimerSkill02.removeEventListener(egret.TimerEvent.TIMER);
            }
            skill_02_cd.visible = true;
            skill_02.source = ConstValue.skill_conf[this.shortCut02].cdicon;
            skill_02_cd.text = this.dSkill[this.shortCut02].cd;
            this.countDownSkill02 = this.dSkill[this.shortCut02].cd;
            this.counterTimerSkill02 = new egret.Timer(1000,0);
            this.counterTimerSkill02.addEventListener(egret.TimerEvent.TIMER,function(){
				if (this.countDownSkill02 == 0){
                    skill_02_cd.visible = false;
                    skill_02.source = ConstValue.skill_conf[this.shortCut02].icon;
                    this.counterTimerSkill02.stop()
				}else{
					this.countDownSkill02--;
                    skill_02_cd.text = this.countDownSkill02;
				}
			},this);
			this.counterTimerSkill02.start();
        }, this);

        this.controlerParent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function(e:egret.TouchEvent){
            let mainPl = this.getMainPlayer();
            if(mainPl.func != null){
                // this.controlerHit.x = this.controlerHit_x;
                // this.controlerHit.y = this.controlerHit_y;
                mainPl.setMoving(false);
                mainPl.removeEventListener(egret.Event.ENTER_FRAME,mainPl.func, mainPl);
                mainPl.func = null;
            }
            if(e.localX >= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c){//第四象限
                if((e.localX - this.controlerHit_x_c) >= (e.localY - this.controlerHit_y_c)){//向右
                    CommonTools.log("四-------右")
                    mainPl.curDirect = 1;
                }else{//向下
                    mainPl.curDirect = 2;
                }
            }else if(e.localX >= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c){//第一象限
                if((e.localX - this.controlerHit_x_c) >= (this.controlerHit_y_c - e.localY)){//向右
                    CommonTools.log("一-------右")
                    mainPl.curDirect = 1;
                }else{//向上
                    CommonTools.log("一-------上")
                    mainPl.curDirect = 0;
                }
            }else if(e.localX <= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c){//第二象限
                if((this.controlerHit_x_c - e.localX) >= (this.controlerHit_y_c - e.localY)){//向左
                    CommonTools.log("二-------左")
                    mainPl.curDirect = 3;
                }else{//向上
                    CommonTools.log("二-------上")
                    mainPl.curDirect = 0;
                }
            }else if(e.localX <= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c){//第三象限
                if((this.controlerHit_x_c - e.localX) >= (e.localY - this.controlerHit_y_c)){//向左
                    CommonTools.log("三-------左")
                    mainPl.curDirect = 3;
                }else{//向下
                    CommonTools.log("三-------下")
                    mainPl.curDirect = 2;
                }
            }
            mainPl.func = function(ee:egret.Event) {
				mainPl.setMoving(true);
                mainPl.move(-1,true);
			}
            mainPl.addEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);
        }, this);

        document.addEventListener("keydown",this.myKeyDown);
        document.addEventListener("keyup",this.myKeyUp);

        this.controlerParent.addEventListener(egret.TouchEvent.TOUCH_END, function(e:egret.TouchEvent){
            this.controlerHit.x = this.controlerHit_x;
            this.controlerHit.y = this.controlerHit_y;
            let mainPl = this.getMainPlayer();
            mainPl.setMoving(false);
            mainPl.removeEventListener(egret.Event.ENTER_FRAME,mainPl.func, mainPl);
            mainPl.func = null;
            if(!FightingModule.aiPVE){
                let sData = CommonTools.getDataJsonStr("syncPos",1,{x:mainPl.x,y:mainPl.y,direction:-1,speed:mainPl.speed,idx:parseInt(mainPl.curMapIdx),playerID:0});
			    ConstValue.P_NET_OBJ.sendData2(sData);
            }
        }, this);

        this.controlerParent.addEventListener(egret.TouchEvent.TOUCH_MOVE, function(e:egret.TouchEvent){
            CommonTools.log("=e.localX, e.localY========x:::="+e.localX+ " y:::" +e.localY);

            let mainPl = this.getMainPlayer();
            if(e.localX >= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c){//第四象限
                if((e.localX - this.controlerHit_x_c) >= (e.localY - this.controlerHit_y_c)){//向右
                    CommonTools.log("四-------右")
                    // this.controlerHit.x = this.controlerHit_x + this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(1,false);
                }else{//向下
                    CommonTools.log("四-------下")
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y + this.r;
                    mainPl.setMoving(true);
                    mainPl.move(2,false);
                }
            }else if(e.localX >= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c){//第一象限
                if((e.localX - this.controlerHit_x_c) >= (this.controlerHit_y_c - e.localY)){//向右
                    CommonTools.log("一-------右")
                    // this.controlerHit.x = this.controlerHit_x + this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(1,false);
                }else{//向上
                    CommonTools.log("一-------上")
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y - this.r;
                    mainPl.setMoving(true);
                    mainPl.move(0,false);
                }
            }else if(e.localX <= this.controlerHit_x_c && e.localY <= this.controlerHit_y_c){//第二象限
                if((this.controlerHit_x_c - e.localX) >= (this.controlerHit_y_c - e.localY)){//向左
                    CommonTools.log("二-------左")
                    // this.controlerHit.x = this.controlerHit_x - this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(3,false);
                }else{//向上
                    CommonTools.log("二-------上")
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y - this.r;
                    mainPl.setMoving(true);
                    mainPl.move(0,false);
                }
            }else if(e.localX <= this.controlerHit_x_c && e.localY >= this.controlerHit_y_c){//第三象限
                if((this.controlerHit_x_c - e.localX) >= (e.localY - this.controlerHit_y_c)){//向左
                    CommonTools.log("三-------左")
                    // this.controlerHit.x = this.controlerHit_x - this.r;
                    // this.controlerHit.y = this.controlerHit_y;
                    mainPl.setMoving(true);
                    mainPl.move(3,false);
                }else{//向下
                    CommonTools.log("三-------下")
                    // this.controlerHit.x = this.controlerHit_x;
                    // this.controlerHit.y = this.controlerHit_y + this.r;
                    mainPl.setMoving(true);
                    mainPl.move(2,false);
                }
            }
            this.setControl(e.localX,e.localY);
        }, this);

        let count = 0;
        for(let i=0;i<this.initRow;i++){
            for(let j=0;j<this.initColumn;j++){
                let wItem = this.groundItemW;
                let hItem = this.groundItemH;
                let xOff = this.groundOffX;
                let yOff = this.groundOffY;
                if(this.APP_MODE == 2 && j > 0){//第二列才改x偏移
                    xOff = -32;
                    wItem = this.groundItemW*this.scaleX;
                }
                if(this.APP_MODE == 2 && i > 0){//第二行才改y偏移
                    yOff = -32;
                    hItem = this.groundItemH*this.scaleY;
                }
                let x = this.firstItemX + wItem*j + xOff;
                let y = this.firstItemY + hItem*i + yOff;
                let para = {"img":"res_"+this.testGround[count]+"_png","x":x,"y":y,"name":"ground_"+count,"curIdx":count};
                // CommonTools.log("para========================"+JSON.stringify(para))
                let mapItemObj = new Fight.MapItem(para);
                mapItemObj.setRow(i);
                mapItemObj.setColumn(j);
                mapItemObj.setType(ConstValue.P_CONFIG["MapBase"][this.testGround[count].toString()]["Type"]);
                if(this.APP_MODE == 2){
                    mapItemObj.scaleX = this.scaleX;
                    mapItemObj.scaleY = this.scaleY;
                }
                FightingModule.groundLayer.addChild(mapItemObj);
                FightingModule.groundLayerSubObj[count.toString()] = mapItemObj;
                FightingModule.groundLayerSubObjDanger[mapItemObj.getColumn()+"_"+mapItemObj.getRow()] = mapItemObj;

                let offY = -48;
                if(this.APP_MODE == 2){
                    offY = -42;
                }

                if(this.testMap[count] <=3){
                    offY = -9;
                }

                if(this.testMap[count] > 100 && this.playerLen <= this.getPlayerTotal()){//大于100的是人物
                    CommonTools.log("--this.testMap[count]--xxxxx---"+this.testMap[count]+" "+ this.playerLen+" "+this.getPlayerTotal())
                    this.playerLen ++;
                    let paraPlayer = {}
                    let playerObj = null;
                    let isP1 = false;
                    let pObj = null;
                    if(this.testMap[count] == this.p1){
                        pObj = this.getPlayerBySize(1);
                        let offX = 40;
                        let offY = 0;
                        if(this.APP_MODE == 2){
                            offX = 28;
                        }
                        paraPlayer = {"pObj":pObj,"side":1,"x":x+offX,"y":y+offY,"name":"role1"
                            ,"isAI":pObj.isAI,"iClass":pObj.iClass,"aiLevel":pObj.aiLevel,"lWalkArea":pObj.lWalkArea};
                        isP1 = true;
                        
                    }else if(this.testMap[count] == this.pAI){
                        pObj = this.getAINotInSelect();
                        let offX = 40;
                        let offY = 0;
                        if(this.APP_MODE == 2){
                            offX = 28;
                        }
                        paraPlayer = {"pObj":pObj,"side":2,"x":x+offX,"y":y+offY,"name":"role2"
                            ,"isAI":pObj.isAI,"iClass":pObj.iClass,"aiLevel":pObj.aiLevel,"lWalkArea":pObj.lWalkArea}
                    }else{
                        pObj = this.getPlayerBySize(2);
                        let offX = 40;
                        let offY = 0;
                        if(this.APP_MODE == 2){
                            offX = 28;
                        }
                        paraPlayer = {"pObj":pObj,"side":2,"x":x+offX,"y":y+offY,"name":"role2"
                            ,"isAI":pObj.isAI,"iClass":pObj.iClass,"aiLevel":pObj.aiLevel,"lWalkArea":pObj.lWalkArea}
                    }
                    playerObj = new Fight.Player(paraPlayer);
                    if(playerObj.roleId == ConstValue.cacheUserInfo.id){
                        this.curPlayer = playerObj;
                    }
                    if(this.APP_MODE == 2){
                        playerObj.scaleX = this.scaleX;
                        playerObj.scaleY =  this.scaleY;
                    }
                    FightingModule.mapLayer.addChild(playerObj);

                    /*
                    var shp: egret.Shape = new egret.Shape();
                    shp.graphics.beginFill(0xff0000);
                    shp.graphics.drawRect(0,15,5,5);
                    shp.graphics.endFill();
                    shp.alpha = 0.5;
                    FightingModule.mapLayer.addChild(shp);
                    shp.x = playerObj.x;
                    shp.y = playerObj.y;
                    playerObj.setBoundRec(shp);*/
                    playerObj.markPosition(-1);

                    FightingModule.playerLayerSubObj[count.toString()] = playerObj;

                    if(playerObj.isAI == 1){
                        let aiObj = null;
                        // pObj.aiLevel = 1;//tttttttttt
                        // pObj.life = 2;
                        if(pObj.aiLevel == 0){
                            aiObj = new AIUtil0(playerObj,this.testMap,this.initRow,this.initColumn,this.APP_MODE);
                        }else if(pObj.aiLevel == 1){
                            aiObj = new AIUtil1(playerObj,this.testMap,this.initRow,this.initColumn,this.APP_MODE);
                        }else if(pObj.aiLevel == 2){
                            aiObj = new AIUtil1(playerObj,this.testMap,this.initRow,this.initColumn,this.APP_MODE);
                        }else if(pObj.aiLevel == 3){
                            aiObj = new AIUtil1(playerObj,this.testMap,this.initRow,this.initColumn,this.APP_MODE);
                        }else if(pObj.aiLevel > 3){
                            aiObj = new Mst1(playerObj,this.testMap,this.initRow,this.initColumn,this.APP_MODE);
                        }else{
                            aiObj = new AIUtil1(playerObj,this.testMap,this.initRow,this.initColumn,this.APP_MODE);
                        }
                        FightingModule.aiSubObj[count.toString()] = aiObj;
                        FightingModule.aiPVE = true;
                    }

                    CommonTools.log("init player x,y "+playerObj.x + " "+playerObj.y +" "+playerObj.roleId)
                }else if(this.testMap[count] > 0 && this.testMap[count] < 100){
                    let paraMap = {"img":"res_"+this.testMap[count]+"_png","x":x,"y":y+offY,"name":"mapitem_"+count,"curIdx":count};
                    let mapItemObj2 = new Fight.MapItem(paraMap);
                    mapItemObj2.setRow(i);
                    mapItemObj2.setColumn(j);
                    mapItemObj2.setType(ConstValue.P_CONFIG["MapBase"][this.testMap[count].toString()]["Type"]);
                    if(this.APP_MODE == 2){
                        mapItemObj2.scaleX = this.scaleX;
                        mapItemObj2.scaleY = this.scaleY;
                    }
                    FightingModule.mapLayer.addChild(mapItemObj2);
                    FightingModule.mapLayerSubObj[count.toString()] = mapItemObj2;
                    
                    /*
                    var shp: egret.Shape = new egret.Shape();
                    shp.graphics.beginFill(0xff0000);
                    shp.graphics.drawRect(0,20,82*this.scaleX,122*0.65);
                    shp.graphics.endFill();
                    shp.alpha = 0;
                    FightingModule.mapLayer.addChild(shp);
                    let iTx = 0
                    if(j == 0)iTx = -7;
                    shp.x = mapItemObj2.x + iTx;
                    shp.y = mapItemObj2.y;
                    mapItemObj2.setBoundRec(shp)*/

                }
                
                count ++;
            }
        }       
        // let sData = CommonTools.getDataJsonStr("getNowGuild",1,{});
		// ConstValue.P_NET_OBJ.sendData(sData);
        this.showGuide(true);
    }

    /**
     * auto true为流程触发 false为通知触发
     */
    public showGuide(auto){
        if(egret.localStorage.getItem("fightFirstPNG") != "1"){
            let maskBgmask = new eui.Image("guide_mask_png");
            maskBgmask.width = this.context.getStageWidth();
            maskBgmask.height = this.context.getStageHeight();
            this.context.addChild(maskBgmask);
            
            let maskBgt = new eui.Image("guide_01_png");
            maskBgt.width = this.context.getStageWidth()*0.7;
            maskBgt.height = this.context.getStageHeight()*0.7;
            maskBgt.horizontalCenter = 0;
            maskBgt.verticalCenter = 0;
            this.context.addChild(maskBgt);
            maskBgt.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                this.context.removeChild(maskBgmask);
                this.context.removeChild(maskBgt);
                egret.localStorage.setItem("fightFirstPNG","1");
                this.showGuide(true);
            }, this);
            return;
        }
        let arr = ["1","2","3","4","5"];
        for(let i=0;i<arr.length;i++){
            if(egret.localStorage.getItem(ConstValue.guide_tips[arr[i]].saveKey) != "1"){
                if(parseInt(arr[i]) >2 && auto)continue;//流程自动触发的，跳过
                if(arr[i] == "1" || arr[i] == "2")this.jumpPoint(this.panel.getChildByName(ConstValue.guide_tips[arr[i]].jumpPoint),ConstValue.guide_tips[arr[i]].jumpoffx,ConstValue.guide_tips[arr[i]].jumpoffy);
                this.getMainPlayer().addGuideTips(arr[i]);
                break;
            }
        }
    }

    private jumpPoint(target,xoff,yoff){
        this.jumpHand = new eui.Image("guide_point_down_png");
        this.jumpTip = egret.Tween.get(this.jumpHand);
        this.jumpHand.x = target.x + xoff;
        this.jumpHand.y = target.y + yoff;
        for(let i=0;i<100;i++){
            this.jumpTip.to({y:this.jumpHand.y -50},400);
            this.jumpTip.to({y:this.jumpHand.y},400);
        }
        this.panel.addChild(this.jumpHand);
    }

    public removeJump(){
        if(this.jumpHand != null){
            egret.Tween.removeTweens(this.jumpHand);
            this.panel.removeChild(this.jumpHand);
            this.jumpTip = null;
            this.jumpHand = null;
        }
    }

    private getPlayerBySize(whichSize){
        for(let i in this.playerData){
            let pObj = this.playerData[i];
            if(parseInt(pObj.player_side) == whichSize && pObj.isAI==0){
                return pObj;
            }else if(parseInt(pObj.player_side) == whichSize && whichSize == 2){
                return pObj;
            }
        }
        return null;
    }

    //取怪器
    private getAINotInSelect(){
        for(let i in this.playerData){
            let pObj = this.playerData[i];
            if(pObj.aiLevel >= 50 && this.pAISelect[pObj.uid] == null){
                this.pAISelect[pObj.uid] = 1
                return pObj
            }
        }
        return null;
    }

    public getPlayerDataByRid(rid){
        for(let i in this.playerData){
            let pObj = this.playerData[i];
            if(i == (rid+"")){
                return pObj;
            }
        }
        return null;
    }

    private getPlayerTotal(){
        let num = 0;
        for(let i in this.playerData){
            num++;
        }
        return num;
    }

    private async onClick(e: egret.TouchEvent){
        let name = e.target.name;
		CommonTools.log("==========name::::"+name);
        switch(name){
			case "replay_btn":
            case "replay_fail_btn":
                this.replay();
				break;
            case "replay_btn_guanka":
                this.playNextGuanka();
				break;
            case "replay_fail_btn_guanka":
                this.replayGuanka();
				break;
            case "goback_btn":
            case "back_btn":
            case "goback_fail_btn":
                this.clear();
                break;
            case "share_btn":
                let platform: any = window.platform;
				await platform.shareWinAppMessage(this.shareRes);
                break;
            default:
				CommonTools.log("11111111 default");
				break;
        }
    }

    private showResultpanel(winObj,failObj,mainPlayer){
        if(this.resultPanel == null){
            this.maskResultBg = new eui.Image("mask_layer_png");
            this.maskResultBg.width = this.context.getStageWidth();
            this.maskResultBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskResultBg);

            this.resultPanel = new eui.Panel();
            this.resultPanel.horizontalCenter = 0;
            this.resultPanel.verticalCenter = 0;
            this.resultPanel.skinName = "resource/eui_skins/UserUI/FightResultUI.exml";
            this.context.addChild(this.resultPanel);
            CommonTools.fixFix(this.context,this.resultPanel,1,0,0);

            let replay_btn = this.resultPanel.getChildByName("replay_btn");
            CommonButtonHandle.beginTouch(replay_btn,this);
            replay_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let goback_btn = this.resultPanel.getChildByName("goback_btn");
            CommonButtonHandle.beginTouch(goback_btn,this);
            goback_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let share_btn = this.resultPanel.getChildByName("share_btn");
            CommonButtonHandle.beginTouch(share_btn,this);
            share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let goback_fail_btn = this.resultPanel.getChildByName("goback_fail_btn");
            CommonButtonHandle.beginTouch(goback_fail_btn,this);
            goback_fail_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let replay_fail_btn = this.resultPanel.getChildByName("replay_fail_btn");
            CommonButtonHandle.beginTouch(replay_fail_btn,this);
            replay_fail_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            this.resultPanel.getChildByName("gold_lb").text = "金币";//mainPlayer.coin
            
            let coin1 = this.resultPanel.getChildByName("gold_add_img_01") as eui.Image;
            let coin2 = this.resultPanel.getChildByName("gold_add_img_02") as eui.Image;
            let coin3 = this.resultPanel.getChildByName("gold_add_img_03") as eui.Image;

            if(mainPlayer.addcoin < 10){
                coin2.visible = false;
                coin3.visible = false;
                coin1.source = "digital_1_json."+mainPlayer.addcoin;
            }else if(mainPlayer.addcoin < 100){
                coin3.visible = false;
                let ii = Math.floor(mainPlayer.addcoin / 10);//十位数
                let i = mainPlayer.addcoin % 10;//个位数
                coin1.source = "digital_1_json."+ii;
                coin2.source = "digital_1_json."+i;
            }else{
                let iii = Math.floor(mainPlayer.addcoin / 100);//百位数
                let ii_ = mainPlayer.addcoin % 100//余数
                let ii = Math.floor(ii_ / 10);//十位数
                let i = ii_ % 10;//个位数
                coin1.source = "digital_1_json."+iii;
                coin2.source = "digital_1_json."+ii;
                coin3.source = "digital_1_json."+i;
            }

            let exp1 = this.resultPanel.getChildByName("exp_add_img_01") as eui.Image;
            let exp2 = this.resultPanel.getChildByName("exp_add_img_02") as eui.Image;
            let exp3 = this.resultPanel.getChildByName("exp_add_img_03") as eui.Image;
            if(mainPlayer.addExp < 10){
                exp2.visible = false;
                exp3.visible = false;
                exp1.source = "digital_2_json."+mainPlayer.addExp;
            }else if(mainPlayer.addExp < 100){
                exp3.visible = false;
                let ii = Math.floor(mainPlayer.addExp / 10);//十位数
                let i = mainPlayer.addExp % 10;//个位数
                exp1.source = "digital_2_json."+ii;
                exp2.source = "digital_2_json."+i;
            }else{
                let iii = Math.floor(mainPlayer.addExp / 100);//百位数
                let ii_ = mainPlayer.addExp % 100//余数
                let ii = Math.floor(ii_ / 10);//十位数
                let i = ii_ % 10;//个位数
                exp1.source = "digital_2_json."+iii;
                exp2.source = "digital_2_json."+ii;
                exp3.source = "digital_2_json."+i;
            }

            let win_title_img = this.resultPanel.getChildByName("win_title_img") as eui.Image;
            if(mainPlayer.win == 0){
                win_title_img.source = RES.getRes("fail_png");
                CommonAudioHandle.playEffect("failure_mp3",1);
                replay_btn.visible = false;
                share_btn.visible = false;
                goback_btn.visible = false;
            }else{
                CommonAudioHandle.playEffect("success_mp3",1);
                goback_fail_btn.visible = false;
                replay_fail_btn.visible = false;
                this.shareRes = 0;
            }
            let right_name_lb = this.resultPanel.getChildByName("right_name_lb");
            right_name_lb.text = failObj.name;
            let right_head_img = this.resultPanel.getChildByName("right_head_img") as eui.Image;
            if(failObj.icon != "")right_head_img.source = failObj.icon;
            let left_name_lb = this.resultPanel.getChildByName("left_name_lb");
            left_name_lb.text = winObj.name;
            let left_head_img = this.resultPanel.getChildByName("left_head_img") as eui.Image;
            if(winObj.icon != "")left_head_img.source = winObj.icon;

            CommonTools.niceTip(this.resultPanel,1,this);
        }
    }

    private showGuanKaResultpanel(winObj,failObj,mainPlayer){
        if(this.resultPanel == null){
            this.maskResultBg = new eui.Image("mask_layer_png");
            this.maskResultBg.width = this.context.getStageWidth();
            this.maskResultBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskResultBg);

            this.resultPanel = new eui.Panel();
            this.resultPanel.horizontalCenter = 0;
            this.resultPanel.verticalCenter = 0;
            this.resultPanel.skinName = "resource/eui_skins/UserUI/FightGuanKaResultUI.exml";
            this.context.addChild(this.resultPanel);
            CommonTools.fixFix(this.context,this.resultPanel,1,0,0);

            let replay_btn = this.resultPanel.getChildByName("replay_btn_guanka");
            CommonButtonHandle.beginTouch(replay_btn,this);
            replay_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let goback_btn = this.resultPanel.getChildByName("goback_btn");
            CommonButtonHandle.beginTouch(goback_btn,this);
            goback_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let share_btn = this.resultPanel.getChildByName("share_btn");
            CommonButtonHandle.beginTouch(share_btn,this);
            share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let replay_fail_btn_guanka = this.resultPanel.getChildByName("replay_fail_btn_guanka");
            CommonButtonHandle.beginTouch(replay_fail_btn_guanka,this);
            replay_fail_btn_guanka.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            let goback_fail_btn = this.resultPanel.getChildByName("goback_fail_btn");
            CommonButtonHandle.beginTouch(goback_fail_btn,this);
            goback_fail_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

            this.resultPanel.getChildByName("gold_lb").text = "金币";//mainPlayer.coin
            
            let coin1 = this.resultPanel.getChildByName("gold_add_img_01") as eui.Image;
            let coin2 = this.resultPanel.getChildByName("gold_add_img_02") as eui.Image;
            let coin3 = this.resultPanel.getChildByName("gold_add_img_03") as eui.Image;

            if(mainPlayer.addcoin < 10){
                coin2.visible = false;
                coin3.visible = false;
                coin1.source = "digital_1_json."+mainPlayer.addcoin;
            }else if(mainPlayer.addcoin < 100){
                coin3.visible = false;
                let ii = Math.floor(mainPlayer.addcoin / 10);//十位数
                let i = mainPlayer.addcoin % 10;//个位数
                coin1.source = "digital_1_json."+ii;
                coin2.source = "digital_1_json."+i;
            }else{
                let iii = Math.floor(mainPlayer.addcoin / 100);//百位数
                let ii_ = mainPlayer.addcoin % 100//余数
                let ii = Math.floor(ii_ / 10);//十位数
                let i = ii_ % 10;//个位数
                coin1.source = "digital_1_json."+iii;
                coin2.source = "digital_1_json."+ii;
                coin3.source = "digital_1_json."+i;
            }

            let exp1 = this.resultPanel.getChildByName("exp_add_img_01") as eui.Image;
            let exp2 = this.resultPanel.getChildByName("exp_add_img_02") as eui.Image;
            let exp3 = this.resultPanel.getChildByName("exp_add_img_03") as eui.Image;
            if(mainPlayer.addExp < 10){
                exp2.visible = false;
                exp3.visible = false;
                exp1.source = "digital_2_json."+mainPlayer.addExp;
            }else if(mainPlayer.addExp < 100){
                exp3.visible = false;
                let ii = Math.floor(mainPlayer.addExp / 10);//十位数
                let i = mainPlayer.addExp % 10;//个位数
                exp1.source = "digital_2_json."+ii;
                exp2.source = "digital_2_json."+i;
            }else{
                let iii = Math.floor(mainPlayer.addExp / 100);//百位数
                let ii_ = mainPlayer.addExp % 100//余数
                let ii = Math.floor(ii_ / 10);//十位数
                let i = ii_ % 10;//个位数
                exp1.source = "digital_2_json."+iii;
                exp2.source = "digital_2_json."+ii;
                exp3.source = "digital_2_json."+i;
            }

            let win_title_img = this.resultPanel.getChildByName("win_title_img") as eui.Image;
            if(mainPlayer.win == 0){
                win_title_img.source = RES.getRes("fail_png");
                CommonAudioHandle.playEffect("failure_mp3",1);
                replay_btn.visible = false;
                share_btn.visible = false;
                goback_btn.visible = false;
            }else{
                CommonAudioHandle.playEffect("success_mp3",1);   
                replay_fail_btn_guanka.visible = false;
                goback_fail_btn.visible = false;
                if(mainPlayer.star>3)mainPlayer.star=3;
                this.shareRes = mainPlayer.star;
            }
            if(HallModule.isTrainBrr){
                mainPlayer.star = 3;
                this.resultPanel.getChildByName("name_bg_img").visible = false;
                replay_fail_btn_guanka.visible = false;
                replay_btn.visible = false;
                goback_btn.visible = false;

                goback_fail_btn.visible = true;
                share_btn.x = 422.27;
                share_btn.visible = true;
            }
            for(let iStar=1;iStar<=mainPlayer.star;iStar++){
                if(iStar>3)break;
				let imgStar = this.resultPanel.getChildByName("star_0"+iStar) as eui.Image;
				imgStar.source = "start_01_png";
			}
            let guankaDesc = this.resultPanel.getChildByName("lb_guanka") as eui.Label;
            guankaDesc.text = mainPlayer.GuanKaDesc;

            CommonTools.niceTip(this.resultPanel,1,this);
        }
    }

    private closeResultpanel(){
        if(this.resultPanel != null){
            this.context.removeChild(this.resultPanel);
            this.resultPanel = null;
        }
        if(this.maskResultBg != null){
            this.context.removeChild(this.maskResultBg);
            this.maskResultBg = null;
        }
    }

    public closeNice(){
        
    }

    private isAiVs(){
        for(let i in FightingModule.aiSubObj){
            return true;
        }
        return false;
    }

    public showVsMiniGamepanel(){
        if(this.miniGamePanel == null){
            this.maskMiniBg = new eui.Image("fighting_vs_png");
            this.maskMiniBg.width = this.context.getStageWidth();
            this.maskMiniBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskMiniBg);

            this.miniGamePanel = new eui.Panel();
            this.miniGamePanel.horizontalCenter = 0;
            this.miniGamePanel.verticalCenter = 0;
            this.miniGamePanel.skinName = "resource/eui_skins/UserUI/FightingVsMiniGameUI.exml";
            this.context.addChild(this.miniGamePanel);
            CommonTools.fixFix(this.context,this.miniGamePanel,1,0,0);
            let time_countdown = this.miniGamePanel.getChildByName("time_countdown") as eui.Label;
            let my_click_num_lb = this.miniGamePanel.getChildByName("my_click_num_lb") as eui.Label;
            let other_click_num_lb = this.miniGamePanel.getChildByName("other_click_num_lb") as eui.Label;
            this.miniGamePanel.getChildByName("click_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                if(this.countDown > 0){
                    CommonTools.addCommonTips(this.panel,"倒计时中...");
                    return;
                }
                let sData = CommonTools.getDataJsonStr("normalClick",1,{});
                ConstValue.P_NET_OBJ.sendData2(sData);
            }, this);

            this.miniGamePanel.getChildByName("giveup_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                
                
            }, this);

            this.miniGamePanel.getChildByName("use_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                
                
            }, this);
            
            this.counterTimer = new egret.Timer(1000,0);
            this.counterTimer.addEventListener(egret.TimerEvent.TIMER,function(){
				if (this.countDown == 0){
                    time_countdown.visible = false;
                    if(this.otherCount == 0){
                        CommonTools.addCommonTips(this.panel,"开始抢夺！！GO");
                    }else{
                        CommonTools.addCommonTips(this.panel,"扑街，7头！！加油，加油...冇吃饭啊，丢");
                    }
                    if(this.isAiVs()){
                        this.otherCount++;
                        other_click_num_lb.text = this.otherCount + " 对手";
                    }
                    // this.counterTimer.stop();
				}else{
					this.countDown--;
                    time_countdown.text = this.countDown;
				}
			},this);
			this.counterTimer.start();
        }
    }

    private updateClickData(dClickData){
        let my_click_num_lb = this.miniGamePanel.getChildByName("my_click_num_lb") as eui.Label;
        let other_click_num_lb = this.miniGamePanel.getChildByName("other_click_num_lb") as eui.Label;
        for(let i in FightingModule.playerLayerSubObj){
            let obj = FightingModule.playerLayerSubObj[i];
            if(obj.roleId == dClickData.uid){
                if(obj.whichSide == 1){
                    my_click_num_lb.text = obj.name + " " + dClickData.click;
                }else{
                    other_click_num_lb.text = obj.name + " " + dClickData.click;
                }
            }
        }
    }

    public showVspanel(){
        if(this.vsPanel == null){
            this.maskVsBg = new eui.Image("fighting_vs_png");
            this.maskVsBg.width = this.context.getStageWidth();
            this.maskVsBg.height = this.context.getStageHeight();
            this.context.addChild(this.maskVsBg);

            this.vsPanel = new eui.Panel();
            this.vsPanel.horizontalCenter = 0;
            this.vsPanel.verticalCenter = 0;
            this.vsPanel.skinName = "resource/eui_skins/UserUI/FightingVsUI.exml";
            this.context.addChild(this.vsPanel);
            if(HallModule.isNoEnd || HallModule.isTrainBrr){
                // this.vsPanel.getChildByName("match_tip").text = "进入中";
            }else{
                // this.vsPanel.getChildByName("match_tip").text = "匹配中....";
                this.vsPanel.getChildByName("exit_match").visible = true;
                this.vsPanel.getChildByName("exit_match").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                    this.closeVsPanel();
                }, this);
            }
            CommonTools.fixFix(this.context,this.vsPanel,1,0,0);
        }
    }

    private closeVsPanel(){
        if(ConstValue.P_HALL_OBJ != null){
            ConstValue.P_HALL_OBJ.clear();
            ConstValue.P_HALL_OBJ = null;
        }
        if(this.vsPanel != null){
            this.context.removeChild(this.vsPanel);
            this.vsPanel = null;
        }
        if(this.maskVsBg != null){
            this.context.removeChild(this.maskVsBg);
            this.maskVsBg = null;
        }
        this.preclear();
    }

    public releaseVsPanel(){
        if(ConstValue.P_HALL_OBJ != null){
            ConstValue.P_HALL_OBJ.clear();
            ConstValue.P_HALL_OBJ = null;
        }
        if(this.vsPanel == null){
            this.showVspanel();
        }
        this.vsPanel.getChildByName("exit_match").visible = false;
        if(HallModule.isNoEnd || HallModule.isTrainBrr){
            // this.vsPanel.getChildByName("match_tip").text = "开始战斗";
        }else{
            // this.vsPanel.getChildByName("match_tip").text = "匹配成功";
            this.vsPanel.getChildByName("match_tip").visible = true;
            this.vsPanel.getChildByName("match_tip").source = "match_success_png";
        }
        
        FightingModule.Delay(3000,function(){
            if(this.vsPanel != null){
                this.context.removeChild(this.vsPanel);
                this.vsPanel = null;
            }
            if(this.maskVsBg != null){
                this.context.removeChild(this.maskVsBg);
                this.maskVsBg = null;
            }
            this.initScene();
            if(this.miniGamePanel == null ){//&& !HallModule.isTrainBrr ttttttttttt
                for(let i in FightingModule.aiSubObj){
                    let obj = FightingModule.aiSubObj[i];
                    obj.startAI();
                }
            }
        },this);
    }

    public releaseMiniGamePanel(){
        if(this.miniGamePanel != null){
            this.context.removeChild(this.miniGamePanel);
            this.miniGamePanel = null;
        }
        if(this.maskMiniBg != null){
            this.context.removeChild(this.maskMiniBg);
            this.maskMiniBg = null;
        }
    }

    public updateInfo(dData){
        let dMain = dData[ConstValue.cacheUserInfo.id];
        let group = this.infoPanel.getChildByName("group_1");
        let heart_num_lb = group.getChildByName("heart_num_lb");
        let spead_num_lb = group.getChildByName("spead_num_lb");
        let boom_num_lb = group.getChildByName("boom_num_lb");
        let fire_num_lb = group.getChildByName("fire_num_lb");
        if(parseInt(heart_num_lb.text) != dMain.life)CommonTools.jumpAnim(heart_num_lb);
        if(parseInt(spead_num_lb.text) != dMain.speed)CommonTools.jumpAnim(spead_num_lb);
        if(parseInt(boom_num_lb.text) != dMain.paopaocount)CommonTools.jumpAnim(boom_num_lb);
        if(parseInt(fire_num_lb.text) != dMain.power)CommonTools.jumpAnim(fire_num_lb);
        heart_num_lb.text = dMain.life;
        spead_num_lb.text = dMain.speed;
        boom_num_lb.text = dMain.paopaocount;
        fire_num_lb.text = dMain.power;
        if(this.dSkill == null){
            this.dSkill = dMain.dSkill;
            if(this.dSkill[this.shortCut01] != null)this.panel.getChildByName("skill_01").source = ConstValue.skill_conf[this.shortCut01].icon;
            if(this.dSkill[this.shortCut02] != null)this.panel.getChildByName("skill_02").source = ConstValue.skill_conf[this.shortCut02].icon;
        }
    }

    public getMainPlayer(){
        return this.curPlayer;
    }

    private getPlayerById(roleId){
        for(let i in FightingModule.playerLayerSubObj){
            let pObj = FightingModule.playerLayerSubObj[i];
            if(pObj.roleId== roleId){
                return pObj;
            }
        }
        return null;
    }

    /**
     * 延时执行操作
     */
    public static Delay(time:number, func:Function, target:any){
        var ti:egret.Timer = new egret.Timer(time,1);
        ti.addEventListener(egret.TimerEvent.TIMER, func, target);
        ti.start();
    }

    public getInitRow(){
        return this.initRow;
    }

    public getInitColumn(){
        return this.initColumn;
    }

    private syncMove(jsonData){
        let mainPl = this.getPlayerById(jsonData.rid);
        if(mainPl.isMainPlayer){
            return;
        }
        /*
        //如果网络延迟收到包，x或者y大于1格82像素的，进行缓动动画移动200ms到达拉扯位置
        if(Math.abs(jsonData.x-mainPl.x) >= 82 || Math.abs(jsonData.y-mainPl.y) >= 82){
            egret.Tween.get(mainPl).to({x:jsonData.x,y:jsonData.y}, 200);
        }else{
            mainPl.x = jsonData.x;
            mainPl.y = jsonData.y;
        }
        */
        mainPl.x = jsonData.x;
        mainPl.y = jsonData.y;
        
        if(jsonData.direction == -1){
            if(mainPl.func != null){
                mainPl.setMoving(false);
                mainPl.removeEventListener(egret.Event.ENTER_FRAME,mainPl.func, mainPl);
                mainPl.func = null;
            }
            return;
        }
        // mainPl.x = jsonData.x;//x,y修正一下
        // mainPl.y = jsonData.y;
        if(mainPl.func == null){
            mainPl.func = function(e:egret.Event) {
                mainPl.setMoving(true);
                mainPl.move(-1,true);
            }
            mainPl.addEventListener(egret.Event.ENTER_FRAME, mainPl.func, mainPl);

            mainPl.setMoving(true);
            mainPl.move(jsonData.direction,false);
        }else{
            mainPl.setMoving(true);
            mainPl.move(jsonData.direction,false);
        }
    }

    private getMapObjByIdx(idx){
        for(let i in FightingModule.mapLayerSubObj){
            let obj = FightingModule.mapLayerSubObj[i];
            if(obj.getCurIdx() == idx){
                return obj;
            }
        }
        return null;
    }

    private syncBoomZhuan(data){
        let obj = this.getMapObjByIdx(data["breakidx"]);

        for(let i in  FightingModule.aiSubObj){
            let tAi = FightingModule.aiSubObj[i];
            tAi.openBlock(obj.getColumn(),obj.getRow())
        }

        let baoEff = CommonTools.getAnimDraw(RES.getRes("SpeedNet_json"), RES.getRes("SpeedNet_png"), "0");
        FightingModule.mapLayer.addChild(baoEff);
        let x = obj.x;
        let y = obj.y;
        baoEff.x = x;
        baoEff.y = y;
        FightingModule.mapLayer.removeChild(obj);

        FightingModule.mapLayerSubObj[data["breakidx"].toString()] = null;
        delete FightingModule.mapLayerSubObj[data["breakidx"].toString()];

        baoEff.scaleX = 1;
        baoEff.scaleY = 1;
        baoEff.x += 30;
        baoEff.y += 60;
        baoEff.play(1);
        baoEff.once(egret.Event.COMPLETE, function(e:egret.Event){
            if(data.effect["type"] != null){
                let itemType = null;
                if(data.effect["type"] == 1){//速度
                    itemType = new eui.Image(RES.getRes("mini_res_json.mini_speed")); 
                }else if(data.effect["type"] == 3){//威力
                    itemType = new eui.Image(RES.getRes("mini_res_json.mini_weili")); 
                }else if(data.effect["type"] == 2){//数量
                    itemType = new eui.Image(RES.getRes("mini_res_json.mini_boom")); 
                }else if(data.effect["type"] == 7){//通关门
                    itemType = new eui.Image(RES.getRes("mini_res_json.pass_door")); 
                }
                FightingModule.groundLayerSubObj[data["breakidx"].toString()].addSub(itemType,data.effect["type"]);
            }
            FightingModule.mapLayer.removeChild(baoEff);
        }, this);
    }

    private async preclear(){
        this.curPlayer = null;
        for(let i in FightingModule.aiSubObj){
            let obj = FightingModule.aiSubObj[i];
            obj.stopAI();
            obj.clear();
            FightingModule.aiSubObj[i] = null;
        }

        for(let i in FightingModule.playerLayerSubObj){
            let tPlay = FightingModule.playerLayerSubObj[i];
            tPlay.clear();
            FightingModule.playerLayerSubObj[i] = null;
        }

        this.context.removeChild(this.infoPanel);
        this.context.removeChild(this.backBtn);
        this.backBtn = null;

        let sData = CommonTools.getDataJsonStr("exitPPRoom",1,{});
        ConstValue.P_NET_OBJ.sendData(sData);
        this.closeResultpanel();
        this.context.removeChild(this.panel);
        this.context.dDataInfo = null;
        this.context.dDataInfo2 = null;

        FightingModule.readyRes = false;
        FightingModule.readyTwo = false;
        FightingModule.aiSubObj = {};
        FightingModule.aiPVE = false;
        await this.context.loadResource("preloadHall",2);
        this.context = null;
        ConstValue.P_FIGHT_OBJ = null;
    }
    
    public async clear(){
        if(this.counterTimerSkill01 != null){
            this.counterTimerSkill01.stop();
            this.counterTimerSkill01.removeEventListener(egret.TimerEvent.TIMER);
            this.counterTimerSkill01 = null;
        }
        if(this.counterTimerSkill02 != null){
            this.counterTimerSkill02.stop();
            this.counterTimerSkill02.removeEventListener(egret.TimerEvent.TIMER);
            this.counterTimerSkill02 = null;
        }
        this.curPlayer = null;
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_BEGIN);
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_END);
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_MOVE);
        this.controlerParent = null;
        for(let i in FightingModule.aiSubObj){
            let obj = FightingModule.aiSubObj[i];
            obj.stopAI();
            obj.clear();
            FightingModule.aiSubObj[i] = null;
        }

        for(let i in FightingModule.playerLayerSubObj){
            let tPlay = FightingModule.playerLayerSubObj[i];
            tPlay.clear();
            FightingModule.playerLayerSubObj[i] = null;
        }

        this.context.removeChild(this.infoPanel);
        this.context.removeChild(this.backBtn);
        this.backBtn = null;

        let sData = CommonTools.getDataJsonStr("exitPPRoom",1,{});
        ConstValue.P_NET_OBJ.sendData(sData);
        this.closeResultpanel();
        this.context.removeChild(this.panel);
        FightingModule.groundLayer.removeChildren();
        FightingModule.groundLayer = null;
        FightingModule.playerLayer.removeChildren();
        FightingModule.playerLayer = null;
        FightingModule.bulletLayer.removeChildren();
        FightingModule.bulletLayer = null;
        FightingModule.mapLayer.removeChildren();
        FightingModule.mapLayer = null;
        FightingModule.groundLayerSubObj = {};
        FightingModule.playerLayerSubObj = {};
        FightingModule.bulletLayerSubObj = {};
        FightingModule.mapLayerSubObj = {};
        FightingModule.groundLayerSubObjDanger = {};
        this.context.dDataInfo = null;
        this.context.dDataInfo2 = null;

        FightingModule.readyRes = false;
        FightingModule.readyTwo = false;
        FightingModule.aiSubObj = {};
        FightingModule.aiPVE = false;
        document.removeEventListener("keydown",this.myKeyDown);
        document.removeEventListener("keyup",this.myKeyUp);
        await this.context.loadResource("preloadHall",2);
        this.context = null;
        ConstValue.P_FIGHT_OBJ = null;
    }

    public clear2(){
        if(this.counterTimerSkill01 != null){
            this.counterTimerSkill01.stop();
            this.counterTimerSkill01.removeEventListener(egret.TimerEvent.TIMER);
            this.counterTimerSkill01 = null;
        }
        if(this.counterTimerSkill02 != null){
            this.counterTimerSkill02.stop();
            this.counterTimerSkill02.removeEventListener(egret.TimerEvent.TIMER);
            this.counterTimerSkill02 = null;
        }
        this.curPlayer = null;
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_BEGIN);
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_END);
        this.controlerParent.removeEventListener(egret.TouchEvent.TOUCH_MOVE);
        this.controlerParent = null;
        for(let i in FightingModule.aiSubObj){
            let obj = FightingModule.aiSubObj[i];
            obj.stopAI();
            obj.clear();
            FightingModule.aiSubObj[i] = null;
        }

        for(let i in FightingModule.playerLayerSubObj){
            let tPlay = FightingModule.playerLayerSubObj[i];
            tPlay.clear();
            FightingModule.playerLayerSubObj[i] = null;
        }
        this.context.removeChild(this.infoPanel);
        this.context.removeChild(this.backBtn);
        this.backBtn = null;

        let sData = CommonTools.getDataJsonStr("exitPPRoom",1,{});
        ConstValue.P_NET_OBJ.sendData(sData);
        this.closeResultpanel();
        this.context.removeChild(this.panel);
        FightingModule.groundLayer.removeChildren();
        FightingModule.groundLayer = null;
        FightingModule.playerLayer.removeChildren();
        FightingModule.playerLayer = null;
        FightingModule.bulletLayer.removeChildren();
        FightingModule.bulletLayer = null;
        FightingModule.mapLayer.removeChildren();
        FightingModule.mapLayer = null;
        FightingModule.groundLayerSubObj = {};
        FightingModule.playerLayerSubObj = {};
        FightingModule.bulletLayerSubObj = {};
        FightingModule.mapLayerSubObj = {};
        FightingModule.groundLayerSubObjDanger = {};
        this.context.dDataInfo = null;
        this.context.dDataInfo2 = null;

        FightingModule.readyRes = false;
        FightingModule.readyTwo = false;
        FightingModule.aiSubObj = {};
        FightingModule.aiPVE = false;
        document.removeEventListener("keydown",this.myKeyDown);
        document.removeEventListener("keyup",this.myKeyUp);
        this.context = null;
        ConstValue.P_FIGHT_OBJ = null;
    }

    private async replay(){
        this.clear2();
        await ConstValue.P_CONTEXT.loadResource("fighting",3);
    }

    private async replayGuanka(){
        this.clear2();
        let sData_gobarr = CommonTools.getDataJsonStr("C2GGotoBarrier",1,{barrierNo:FightingModule.curBarrNo});
        ConstValue.P_NET_OBJ.sendData(sData_gobarr);
    }

    private async playNextGuanka(){
        this.clear2();
        FightingModule.curBarrNo +=1
        let sData_gobarr = CommonTools.getDataJsonStr("C2GGotoBarrier",1,{barrierNo:FightingModule.curBarrNo});
        ConstValue.P_NET_OBJ.sendData(sData_gobarr);
    }

    public addCommonTips(tips){
        CommonTools.addCommonTips(this.panel,tips);
    }
    
    /**
	 * 回包处理
	 */
	public async handlePacket(jsonObj:any){
        if (jsonObj.f == "syncPosBroadcase"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.syncMove(jsonObj.d);
			}
		}else if (jsonObj.f == "syncPut"){
            if(jsonObj.m != "" || jsonObj.s != 1 || (jsonObj.d != "" && jsonObj.d.err == 36)){
                let pObj = this.getPlayerById(jsonObj.d.rid);
                if(pObj.isAI == 1)pObj.findOwnAi().moveNext();
			}else{
                if(jsonObj.d["rid"] == null){
                    return;
                }
				let pObj = this.getPlayerById(jsonObj.d.rid);
                // pObj.x = jsonObj.d.x;
                // pObj.y = jsonObj.d.y;
                pObj.fire(jsonObj.d.paopaoID,jsonObj.d.idx);
			}
		}else if (jsonObj.f == "syncKillMst"){
            if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                let pObj = this.getPlayerById(jsonObj.d.killID);
                pObj.visible = false;
                pObj.findOwnAi().stopAI();
                // for(let i in FightingModule.aiSubObj){
                //     let obj = FightingModule.aiSubObj[i];
                //     if(obj.aiObj == pObj)obj.stopAI();
                //     break;
                // }
			}
		}else if (jsonObj.f == "syncBoomZhuan"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                if(jsonObj.d["breakidx"] == null){
                    return;
                }
				this.syncBoomZhuan(jsonObj.d);
			}
		}else if (jsonObj.f == "syncpickItem"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                for(let i in jsonObj.d.player){
                    let obj = jsonObj.d.player[i];
                    let playobj = this.getPlayerById(obj.uid);
                    playobj.speed = obj.speed;
                    playobj.bulletLen = obj.power;
                }
                this.updateInfo(jsonObj.d.player);
                this.getMainPlayer().removeGuideTips("4");
			}
		}else if (jsonObj.f == "useSkillOK"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                CommonAudioHandle.playEffect("playBomb_mp3",1);
                let playobj = this.getPlayerById(jsonObj.d.effectPlayer);
                playobj.addBuff(jsonObj.d.skillID);
			}
		}else if (jsonObj.f == "GuildInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                // if(jsonObj.d.id == 3)new GuideModule(this.context,jsonObj.d.id,null,null);
			}
		}else if (jsonObj.f == "gameResult"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                for(let i in FightingModule.aiSubObj){
                    let obj = FightingModule.aiSubObj[i];
                    obj.stopAI();
                }
                let mainObj = null;
                let winObj = null;
                let failObj = null;
                for(let i in jsonObj.d.player){
                    let obj = jsonObj.d.player[i];
                    if(obj.win == 0){
                        failObj = obj;
                    }else{
                        winObj = obj;
                    }

                    if(obj.uid == ConstValue.cacheUserInfo.id){
                        mainObj = obj;
                    }
                }
                this.showResultpanel(winObj,failObj,mainObj);
			}
		}else if (jsonObj.f == "gameGuanKaResult"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{

                for(let i in FightingModule.aiSubObj){
                    let obj = FightingModule.aiSubObj[i];
                    obj.stopAI();
                }

                let mainObj = null;
                let winObj = null;
                let failObj = null;
                for(let i in jsonObj.d.player){
                    let obj = jsonObj.d.player[i];
                    if(obj.win == 0){
                        failObj = obj;
                    }else{
                        winObj = obj;
                    }

                    if(obj.uid == ConstValue.cacheUserInfo.id){
                        mainObj = obj;
                    }
                }
                if(this.backBtn != null)this.showGuanKaResultpanel(winObj,failObj,mainObj);
            }
        }
        else if (jsonObj.f == "miniGameInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                ConstValue.P_FIGHT_OBJ.showVsMiniGamepanel();

                for(let i in FightingModule.aiSubObj){
                    let obj = FightingModule.aiSubObj[i];
                    obj.stopAI();
                }
			}
		}else if (jsonObj.f == "WaitingInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				CommonTools.addCommonTips(this.panel,ConstValue.P_ENTER_ROOM_FAIL);
			}else{
				if(ConstValue.P_FIGHT_OBJ == null){
					ConstValue.P_FIGHT_OBJ = new FightingModule(this.context);
				}
				if(jsonObj.d.state < 2){//等待人
					// ConstValue.P_FIGHT_OBJ.showVsMiniGamepanel();
					ConstValue.P_FIGHT_OBJ.showVspanel();
				}else if(jsonObj.d.state == 2){//开始比赛
					FightingModule.readyTwo = true;
					this.context.dDataInfo2 = jsonObj.d.player;
					if(ConstValue.P_FIGHT_OBJ.playerData != null){
						FightingModule.readyRes = true;
						ConstValue.P_FIGHT_OBJ.releaseVsPanel();
						ConstValue.P_FIGHT_OBJ.updateInfo(jsonObj.d.player);
					}
				}
			}
		}else if (jsonObj.f == "syncMapData"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(ConstValue.cacheKeyGroup["fighting"] == null){
					this.context.dDataInfo = jsonObj.d;
					await this.context.loadResource("fighting",6);
				}else{
					if(ConstValue.P_FIGHT_OBJ == null){
						ConstValue.P_FIGHT_OBJ = new FightingModule(this.context);
					}
					ConstValue.P_FIGHT_OBJ.initMapData(jsonObj.d);
					if(FightingModule.readyTwo && !FightingModule.readyRes){
						ConstValue.P_FIGHT_OBJ.releaseVsPanel();
						ConstValue.P_FIGHT_OBJ.updateInfo(this.context.dDataInfo2);
					}
				}
			}
		}else if (jsonObj.f == "UpdateClick"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                this.updateClickData(jsonObj.d);
			}
		}
    }

}