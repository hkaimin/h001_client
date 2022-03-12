/**
 * 战斗模块
 */
class MapDIYModule {
	/**上级容器 */
    private context:Main;
    /** 模块本体*/
    private panel;
    /** 地表层*/
    private static groundLayerSubObj = {};

    private initRow = 9;
    private initColumn = 11;

    //test
    private testMap;
    private testGround;
    private firstItemX = 494.88;
    private firstItemY = 100.84;
    private groundItemW = 58;
    private groundItemH = 55;
    private groundOffX = 0;
    private groundOffY = 0;

    private curFunc = 1;//1是加图 2是橡皮擦 3是1p 4是2p
    private curtype = 1;
    // private curRes = "diy_add_big_item_png";
    private curRes = "";

    private btn;
    private isShow = false;
    private scroller;
    private spMask;
    private posScrollerClose = 0;
    private list;
    private resGroup;
    private resTitle = 4;

    private btnGround;
    private btnBlock;
    private btnDecorate;
    private tDi;
    private tBiao;
    private tZhang;
    private tAi;
    private tZhuang;
    private tShi;
    private selectList = {};
    static ONE_P = "";
    static TWO_P = "";

    private grid;
    private op;
	private finder;
	private matrix;
    private panelSave;
    private txtMapName = "输入地图名字";
    private txtMapSign = "输入地图个性签名";
    public mapKey = 0;
    private maskBg;
    private maskBg2;

    private panelRank;

    private static defaultData = {};
    private iType;
    private backBtn;

    private tipsPanel;

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
        0,5,0,0,0,0,0,6,5,6,0,
        0,0,0,0,0,0,0,6,5,6,0,
        0,0,0,0,0,5,0,6,5,6,0,
        0,0,13,0,0,0,0,6,5,6,0,
        0,9,6,0,0,0,0,0,0,0,0,
        0,9,6,0,0,0,0,6,5,6,0,
        0,9,6,0,0,0,0,6,5,6,0,
        0,12,11,0,0,0,0,6,5,6,0
    ];
    //test

    static guide_tip_new = {
        "mapdiy1":{"tip":"地表层是人物的行走区域哦！～"},
        "mapdiy2":{"tip":"障碍层是不可以被炸开哒！～"},
        "mapdiy3":{"tip":"炸开装饰有机会获得道具哦！～"},
        "mapdiy4":{"tip":"摆放自己的出生位置！～"},
        "mapdiy5":{"tip":"摆放敌人的出生位置！～"},
        "mapdiy6":{"tip":"可以抹掉你想抹掉的地方！～"},
    }
    
	/**
     * 构造函数
     */
    public constructor(ct:Main,jsonData,iType) {
        this.iType = iType;
		this.context = ct;
        if(this.iType > 0){
            this.maskBg = new eui.Image("bg_ppt_1_png");
            this.maskBg.width = this.context.getStageWidth();
            let scaleDevice = 1334.0/this.context.getStageWidth();
            this.maskBg.height = 750.0/scaleDevice;
            this.context.addChild(this.maskBg);

            this.panel = new eui.Panel();
            this.panel.skinName = "resource/eui_skins/UserUI/mapDIYUI.exml";
            this.panel.title = "Title";
            this.panel.horizontalCenter = 0;
            this.panel.verticalCenter = 0;
            this.context.addChild(this.panel);
            this.tipsPanel = this.panel;
            if(iType == 1){
                this.testGround = jsonData.DefaultBg;
                MapDIYModule.defaultData = jsonData.DefaultBg;
                if(ConstValue.P_HALL_OBJ != null){
                    ConstValue.P_HALL_OBJ.clear();
                    ConstValue.P_HALL_OBJ = null;
                }
            }else if(iType == 2){
                this.testGround = MapDIYModule.defaultData;
            }else{
                this.testGround = jsonData.bgconf;
                this.testMap = jsonData.layerconf;
            }
            
            CommonTools.fixFix(this.context,this.panel,1,0,0);

            this.backBtn = new eui.Image("btn_back_png");
            this.backBtn.width = 60;
            this.backBtn.height = 60;
            this.backBtn.x = 44;
            this.backBtn.y = 10;
            this.backBtn.name = "goback_btn";
            this.context.addChild(this.backBtn);
            this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

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

            this.grid = new PF.Grid(11,9,this.matrix);
            this.op = new PF.Option();
            this.op.allowDiagonal = false;//对角线
            this.finder = new PF.AStarFinder(this.op);

            // this.initConfig();
            this.initScene();//初始化地图
            if(egret.localStorage.getItem("mapdiy0") != "1"){
                new GuideModule(this.context,999,null,null);
            }
        }else{
            let sData = CommonTools.getDataJsonStr("getNewRank",1,{});
            ConstValue.P_NET_OBJ.sendData(sData);
        }
	}

    /**
	 * 初始化配置
	 */
	private initConfig(){
		LZMA.decompress(EBitUtil.getArr(new egret.ByteArray(RES.getRes("config_json"))), (d) => {
			// CommonTools.log("initXYConfig=========dddd======"+d);
            ConstValue.P_CONFIG = <ConfigInterface> JSON.parse(d);
			this.initScene();//初始化地图
        }, (t) => {
            //ELog.info("conf:",t);
        });
	}

    public initMapData(jsonObj){

    }

    public addCommonTips(tips){
        CommonTools.addCommonTips(this.tipsPanel,tips);
    }

    private addGuideTips(type){
        // egret.localStorage.setItem(type,"0");
        if(MapDIYModule.guide_tip_new[type] == null)return;
        if(egret.localStorage.getItem(type) == "1")return;
        egret.localStorage.setItem(type,"1");
        let panelT = new eui.Panel();
        panelT.skinName = "resource/eui_skins/UserUI/GuideTipsGroup.exml";
        panelT.name = "p_"+type;
        let group = panelT.getChildByName("group_1") as eui.Group;
        let tip = group.getChildByName("tip") as eui.Label;
        tip.text = MapDIYModule.guide_tip_new[type].tip;
        if(ConstValue.deviveNormalScale > 2){
            panelT.x = 1060;
            panelT.y = 380;
        }else{
            panelT.x = 1060;
            panelT.y = 380;
        }
        
        this.panel.addChild(panelT);
        FightingModule.Delay(5000,function(){
            this.panel.removeChild(panelT);
            panelT = null;
        },this);
    }

    private initScene(){
        this.panel.getChildByName("btn_ground_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_block_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_decorate_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("STYLE_BTN").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_1p").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_2p").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_eraser").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("lb_save").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_rank").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panel.getChildByName("btn_mymap").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.btn = this.panel.getChildByName("STYLE_BTN") as eui.Button;
        this.btnGround = this.panel.getChildByName("btn_ground") as eui.Image;
        this.btnBlock = this.panel.getChildByName("btn_block") as eui.Image;
        this.btnDecorate = this.panel.getChildByName("btn_decorate") as eui.Image;
        this.tDi = this.panel.getChildByName("t_di") as eui.Label;
        this.tBiao = this.panel.getChildByName("t_biao") as eui.Label;
        this.tZhang = this.panel.getChildByName("t_zhang") as eui.Label;
        this.tAi = this.panel.getChildByName("t_ai") as eui.Label;
        this.tZhuang = this.panel.getChildByName("t_zhuang") as eui.Label;
        this.tShi = this.panel.getChildByName("t_shi") as eui.Label;
        
        let lbCoin = this.panel.getChildByName("coin_num_lb") as eui.Label;
		lbCoin.text = ConstValue.cacheUserInfo.coin;

		let lbZuan = this.panel.getChildByName("zuan_num_lb") as eui.Label;
		lbZuan.text = ConstValue.cacheUserInfo.diamond;

        MapDIYModule.ONE_P = "";
        MapDIYModule.TWO_P = "";

        //地表层
        let count = 0;
        for(let i=0;i<this.initRow;i++){
            for(let j=0;j<this.initColumn;j++){
                let wItem = this.groundItemW;
                let hItem = this.groundItemH;
                let xOff = this.groundOffX;
                let yOff = this.groundOffY;
                if(i > 0){
                    yOff = 7;
                }
                if(j > 0){
                    xOff = 4;
                }

                let x = this.firstItemX + wItem*j + xOff*j;
                let y = this.firstItemY + hItem*i + yOff*i;
                let para = {"img":"res_"+this.testGround[count]+"_png","x":x,"y":y,"name":"ground_"+count,"curIdx":count};
                // CommonTools.log("para========================"+JSON.stringify(para))
                let mapItemObj = new Fight.MapItem(para);
                mapItemObj.setRow(i);
                mapItemObj.setColumn(j);
                mapItemObj.setType(ConstValue.P_CONFIG["MapBase"][this.testGround[count].toString()]["Type"]);
                this.panel.addChild(mapItemObj);
                mapItemObj.scaleX = 0.7;
                mapItemObj.scaleY = 0.7;
                MapDIYModule.groundLayerSubObj[count.toString()] = mapItemObj;
                mapItemObj.itemRange[0] = 497 + 55*j + 6*j;//x1
                mapItemObj.itemRange[1] = mapItemObj.itemRange[0] + 55;//x2
                mapItemObj.itemRange[2] = 103 + 55*i + 7*i;//y1
                mapItemObj.itemRange[3] = mapItemObj.itemRange[2] + 55;//y2
                // CommonTools.log("----------mapItemObj.itemRange---"+mapItemObj.itemRange)
                mapItemObj.setRes(this.testGround[count]);
                
                mapItemObj.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
                    // CommonTools.log("=mapItemObj========mapItemObj name:::="+mapItemObj.name);
                    if(this.curRes == "" && this.curFunc == 1){
                        CommonTools.addCommonTips(this.panel,"请选择左侧资源");
                        return;
                    }
                    this.addGuideTips("mapdiy1");
                    mapItemObj.checkRange2(this.curRes,this.curtype,this.curFunc);
                },this);

                mapItemObj.addEventListener(egret.TouchEvent.TOUCH_MOVE, function(){
                    // CommonTools.log("=mapItemObj========mapItemObj name:::="+mapItemObj.name);
                    if(this.curRes == "" && this.curFunc == 1){
                        CommonTools.addCommonTips(this.panel,"请选择左侧资源");
                        return;
                    }
                    this.addGuideTips("mapdiy1");
                    mapItemObj.checkRange2(this.curRes,this.curtype,this.curFunc);
                },this);

                if(this.iType == 3){
                    if(this.testMap[count] > 0 && this.testMap[count] < 100){
                        let res = "res_"+this.testMap[count]+"_png"
                        let obj = ConstValue.P_CONFIG["MapBase"][this.testMap[count].toString()];
                        mapItemObj.checkRange2(res,obj.Type,1);
                    }else if(this.testMap[count] > 100){
                        if(this.testMap[count] == 119){
                            mapItemObj.checkRange2(null,2,3);
                        }else{
                            mapItemObj.checkRange2(null,2,4);
                        }
                    }
                }

                count ++;
            }
        }   

        this.drawDownList();    
        this.resGroup = this.panel.getChildByName("res_scroller").getChildByName("res_group") as eui.Group;
        this.initResList(4,1);
        if(this.iType == 3){
            this.clickBolck();
        }
    }

    private initResList(title,type){
        let scroller = this.panel.getChildByName("res_scroller") as eui.Scroller;
        scroller.viewport.scrollV = 0;
        this.resGroup.removeChildren();
        this.selectList = {};
        let count = 0;
        for(let i in ConstValue.P_CONFIG["MapBase"]){
            let obj = ConstValue.P_CONFIG["MapBase"][i]
            if(obj.mapType == title && obj.Type == type){
                let resImg = new eui.Image(obj.res+"_png");
                let resBg = new eui.Image("diy_item_bg_png");
                this.resGroup.addChild(resBg);
                this.resGroup.addChild(resImg);
                let resHeight = 100;
                let resOffy = 30;
                let resOffy2 = 10;
                let resOffy3 = 0;
                if(type==1){
                    resHeight = 82;
                    resOffy = 0;
                    resOffy2 = 0;
                }else if(type==2){
                    resOffy = 28;
                    resOffy2 = 0;
                    if(count<3){
                        resOffy3 = 5;
                    }
                }
                resImg.x = count%3*82+10+count%3*10;
                resImg.y = parseInt(count/3+"")*resHeight+10+parseInt(count/3+"")*10-resOffy-parseInt(count/3+"")*resOffy2+resOffy3;
                if(type == 1){
                    resBg.x = resImg.x - 2.25;
                    resBg.y = resImg.y - 2.5;
                }else{
                    resBg.x = resImg.x - 2;
                    resBg.y = resImg.y + 24;
                    resBg.scaleY = 1.15;
                }

                if(count == 0){
                    this.curFunc = 1;
                    this.curRes = obj.res+"_png";
                    for(let i in this.selectList){
                        let obj = this.selectList[i];
                        obj.source = "diy_item_bg_png";
                    }
                    resBg.source = "diy_select_kuan_png";
                }

                count ++;
                this.selectList[count.toString()] = resBg;

                resImg.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
                    this.curFunc = 1;
                    this.curRes = obj.res+"_png";
                    for(let i in this.selectList){
                        let obj = this.selectList[i];
                        obj.source = "diy_item_bg_png";
                    }
                    resBg.source = "diy_select_kuan_png";
                },this);

            }
        }
    }

    private viewMapSubLayer(flag){
        for(let i in MapDIYModule.groundLayerSubObj){
            let obj = MapDIYModule.groundLayerSubObj[i];
            obj.viewSub(flag);
        }
    }

    private clickGround(){
        this.initResList(this.resTitle,1);
        this.viewMapSubLayer(false);
        this.curFunc = 1;
        this.curtype = 1;
        this.btnGround.source = "diy_page_yes_png";
        this.btnBlock.source = "diy_page_not_png";
        this.btnDecorate.source = "diy_page_not_png";
        this.tDi.textColor = 0xf7d69d;
        this.tBiao.textColor = 0xf7d69d;
        this.tZhang.textColor = 0xd5b6a0;
        this.tAi.textColor = 0xd5b6a0;
        this.tZhuang.textColor = 0xd5b6a0;
        this.tShi.textColor = 0xd5b6a0;
    }

    public closeNice(){
        this.tipsPanel = this.panel;
        if (this.panelSave != null)this.context.removeChild(this.panelSave);
        this.panelSave = null;

        if (this.panelRank != null)this.context.removeChild(this.panelRank);
        this.panelRank = null;

        if(this.maskBg2 != null)this.context.removeChild(this.maskBg2);
        if(this.iType == 0)this.clear();
    }

    private clickBolck(){
        this.initResList(this.resTitle,2);
        this.viewMapSubLayer(true);
        this.curFunc = 1;
        this.curtype = 2;
        this.btnGround.source = "diy_page_not_png";
        this.btnBlock.source = "diy_page_yes_png";
        this.btnDecorate.source = "diy_page_not_png";
        this.tDi.textColor = 0xd5b6a0;
        this.tBiao.textColor = 0xd5b6a0;
        this.tZhang.textColor = 0xf7d69d;
        this.tAi.textColor = 0xf7d69d;
        this.tZhuang.textColor = 0xd5b6a0;
        this.tShi.textColor = 0xd5b6a0;
    }

    private async onClick(e: egret.TouchEvent){
        let name = e.target.name;
		CommonTools.log("==========name::::"+name);
        switch(name){
			case "STYLE_BTN":
                this.changeListType();
				break;
            case "btn_rank":
                let sData = CommonTools.getDataJsonStr("getNewRank",1,{});
                ConstValue.P_NET_OBJ.sendData(sData);
                // egret.localStorage.setItem("mapdiy0","0");
                // egret.localStorage.setItem("mapdiy1","0");
                // egret.localStorage.setItem("mapdiy2","0");
                // egret.localStorage.setItem("mapdiy3","0");
                // egret.localStorage.setItem("mapdiy4","0");
                // egret.localStorage.setItem("mapdiy5","0");
                // egret.localStorage.setItem("mapdiy6","0");
                // egret.localStorage.setItem("mapdiy7","0");
				break;
            case "btn_mymap":
                let sDataMymap = CommonTools.getDataJsonStr("getMyMaps",1,{});
                ConstValue.P_NET_OBJ.sendData(sDataMymap);
				break;
            case "btn_close":
                CommonTools.niceTip(this.panelRank,2,this);
				break;
            case "btn_ground_lb":
                this.addGuideTips("mapdiy1");
                this.clickGround();
                break;
            case "btn_block_lb":
                this.addGuideTips("mapdiy2");
                this.clickBolck();
                break;
            case "btn_decorate_lb":
                this.addGuideTips("mapdiy3");
                this.initResList(this.resTitle,3);
                this.viewMapSubLayer(true);
                this.curFunc = 1;
                this.curtype = 3;
                this.btnGround.source = "diy_page_not_png";
                this.btnBlock.source = "diy_page_not_png";
                this.btnDecorate.source = "diy_page_yes_png";
                this.tDi.textColor = 0xd5b6a0;
                this.tBiao.textColor = 0xd5b6a0;
                this.tZhang.textColor = 0xd5b6a0;
                this.tAi.textColor = 0xd5b6a0;
                this.tZhuang.textColor = 0xf7d69d;
                this.tShi.textColor = 0xf7d69d;
                break;
            case "goback_btn":
                this.clear();
                break;
            case "lb_1p":
                this.addGuideTips("mapdiy4");
                if(this.curtype == 1){
                    CommonTools.addCommonTips(this.panel,"当前在地表层，请选择障碍层或者装饰层");
                    return;
                }
                this.curFunc = 3;
                break;
            case "lb_2p":
                this.addGuideTips("mapdiy5");
                if(this.curtype == 1){
                    CommonTools.addCommonTips(this.panel,"当前在地表层，请选择障碍层或者装饰层");
                    return;
                }
                this.curFunc = 4;
                break;
            case "lb_eraser":
                this.addGuideTips("mapdiy6");
                this.curFunc = 2;
                break;
            case "btn_close_edit":
                CommonTools.niceTip(this.panelSave,2,this);
                break;
            case "btn_confirm_modify":
                this.saveMap();
                break;
            case "lb_save":
                if(!this.checkGroundValidate()){
                    CommonTools.addCommonTips(this.panel,"地表层不能有空块");
                    return;
                }
                if(!this.checkPlayers()){
                    CommonTools.addCommonTips(this.panel,"需要完整p1和p2,请设置位置");
                    return;
                }
                if(!this.checkPathValidate()){
                    CommonTools.addCommonTips(this.panel,"玩家间不联通，请合理设计");
                    return;
                }
                // this.openSaveUI();
                this.saveMap();
                break;

            case "lb_new":
                let img1 = this.panelRank.getChildByName("match_rank_bg") as eui.Image;
                let img2 = this.panelRank.getChildByName("lv_rank_bg") as eui.Image;
                img1.source = "map_rank_normal_png";
                img2.source = "map_rank_select_png";
                let sDataNew = CommonTools.getDataJsonStr("getNewRank",1,{});
                ConstValue.P_NET_OBJ.sendData(sDataNew);
                break;

            case "lb_hot":
                let img1_ = this.panelRank.getChildByName("match_rank_bg") as eui.Image;
                let img2_ = this.panelRank.getChildByName("lv_rank_bg") as eui.Image;
                img1_.source = "map_rank_select_png";
                img2_.source = "map_rank_normal_png";
                let sDataHot = CommonTools.getDataJsonStr("getHopRank",1,{});
                ConstValue.P_NET_OBJ.sendData(sDataHot);
                break;

            default:
				CommonTools.log("11111111 default");
				break;
        }
    }

    private changeListType(): void {
        if (!this.isShow) {
            this.isShow = true;
            this.scroller.visible = true;
        } else {
            this.isShow = false;
            this.scroller.visible = false;
        }
    }

    private drawDownList(){
        //创建滚动区域和列表
        var arr = ["基础主题","吃货主题","暗黑主题","春节主题"];
        // for (var i = 0; i < 16; i++) {
        //     arr.push("项目：" + i);
        // }
        this.list = new eui.List();
        this.list.width = 308;
        this.list.dataProvider = new eui.ArrayCollection(arr);
        this.list.selectedIndex = 3;//设置默认选中项
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);

        var scroller = new eui.Scroller();
        scroller.height = 200;
        scroller.viewport = this.list;
        scroller.x = 161;
        scroller.y = 161;
        scroller.visible = false;
        this.panel.addChild(scroller);
        this.scroller = scroller;
    }

    private onChange(e:eui.PropertyEvent):void{
        //获取点击消息
        // console.log(this.list.selectedItem,this.list.selectedIndex)
        // this.btn.label = this.list.selectedItem;
        this.resTitle = this.list.selectedIndex+1;
        this.initResList(this.resTitle,1);
        this.viewMapSubLayer(false);
        this.curtype = 1;
        this.changeListType();
        this.clickGround();
    }

    private async clear(){
        if(this.iType > 0){
            this.context.removeChild(this.backBtn);
            this.context.removeChild(this.panel);
            this.panel = null;
            MapDIYModule.groundLayerSubObj = {};
        }
        await this.context.loadResource("preloadHall",2);
        this.context = null;
        ConstValue.P_MAP_OBJ = null;
    }

    private updateByClickAdd(){
        this.context.removeChild(this.panel);
        MapDIYModule.groundLayerSubObj = {};
        ConstValue.P_MAP_OBJ = null;
        ConstValue.P_MAP_OBJ = new MapDIYModule(this.context,null,2);
    }

    private updateByClickModify(jsonData){
        this.context.removeChild(this.panel);
        MapDIYModule.groundLayerSubObj = {};
        ConstValue.P_MAP_OBJ = null;
        ConstValue.P_MAP_OBJ = new MapDIYModule(this.context,jsonData,3);
        ConstValue.P_MAP_OBJ.mapKey = jsonData.id;
    }

    private checkGroundValidate(){
        for(let i in MapDIYModule.groundLayerSubObj){
            let obj = MapDIYModule.groundLayerSubObj[i];
            if(obj.groundEmpty)return false;
        }
        return true;
    }

    private checkPlayers(){
        let p1 = false;
        let p2 = false;
        for(let i in MapDIYModule.groundLayerSubObj){
            let obj = MapDIYModule.groundLayerSubObj[i];
            if(obj.isPlayer == 119){
                p1 = true;
            }else if(obj.isPlayer == 120){
                p2 = true;
            }
        }
        if(p1 && p2){
            return true;
        }
        return false;
    }

    private getPath(xStart,yStart,xEnd,yEnd){
		//[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
		let tGrid = this.grid.clone();
		return this.finder.findPath(xStart,yStart,xEnd,yEnd,tGrid);
	}

    private checkPathValidate(){
        let xStart = -1;
        let yStart = -1;
        let xEnd = -1;
        let yEnd = -1;
        let check = false;
        for(let i in MapDIYModule.groundLayerSubObj){
            let obj = MapDIYModule.groundLayerSubObj[i];
            if(obj.subType == 2 && obj.isPlayer == 0){
                this.grid.setWalkableAt(obj.getColumn(),obj.getRow(),false);
            }
            if(obj.isPlayer == 119){
                xStart = obj.getColumn();
                yStart = obj.getRow();
            }else if(obj.isPlayer == 120){
                xEnd = obj.getColumn();
                yEnd = obj.getRow();
            }
        }
        let path = this.getPath(xStart,yStart,xEnd,yEnd);
        if(path.length > 0)check = true;
        for(let i in MapDIYModule.groundLayerSubObj){
            let obj = MapDIYModule.groundLayerSubObj[i];
            if(obj.subType == 2 && obj.isPlayer == 0){
                this.grid.setWalkableAt(obj.getColumn(),obj.getRow(),true);
            }
        }
        return check;
    }

    private saveMap(){
        // let map_name_tx = this.panelSave.getChildByName("map_name_tx") as eui.Label;
        // if(map_name_tx.text == ""){
        //     CommonTools.addCommonTips(this.panel,"名字不能为空");
        //     return;
        // }
        // if(map_name_tx.text.length > 10){
        //     CommonTools.addCommonTips(this.panel,"名字在10个长度内");
        //     return;
        // }
        // let map_sign_tx = this.panelSave.getChildByName("map_sign_tx") as eui.Label;
        // if(map_sign_tx.text == ""){
        //     CommonTools.addCommonTips(this.panel,"签名不能为空");
        //     return;
        // }
        // if(map_sign_tx.text.length > 50){
        //     CommonTools.addCommonTips(this.panel,"名字在50个长度内");
        //     return;
        // }
        // this.txtMapName = map_name_tx.text;
        // this.txtMapSign = map_sign_tx.text;
        for(let i in this.testMap2){
            this.testMap2[i] = 0;
        }
        for(let i in MapDIYModule.groundLayerSubObj){
            let obj = MapDIYModule.groundLayerSubObj[i];
            this.testGround2[parseInt(i)] = obj.res;
            if(obj.subType > 0){
                this.testMap2[parseInt(i)] = obj.resSub;
            }
        }
        let sData = CommonTools.getDataJsonStr("saveMap",1,{lBgConf:this.testGround2,lLayerConf:this.testMap2
            ,mapName:"",mapSign:"",mapkey:this.mapKey});
        ConstValue.P_NET_OBJ.sendData(sData);
    }

    private openSaveUI(){
        this.maskBg2 = new eui.Image("mask_layer_png");
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

        this.panelSave = new eui.Panel();
		this.panelSave.skinName = "resource/eui_skins/UserUI/SaveMapTipUI.exml";
        this.panelSave.title = "Title";
        this.panelSave.horizontalCenter = 0;
        this.panelSave.verticalCenter = 0;
        this.context.addChild(this.panelSave);

        CommonTools.niceTip(this.panelSave,1,this);

        let map_name_tx = this.panelSave.getChildByName("map_name_tx") as eui.Label;
        map_name_tx.text = this.txtMapName;
        let map_sign_tx = this.panelSave.getChildByName("map_sign_tx") as eui.Label;
        map_sign_tx.text = this.txtMapSign;

		CommonButtonHandle.beginTouch(this.panelSave.getChildByName("btn_close_edit"),this);
		this.panelSave.getChildByName("btn_close_edit").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

        CommonButtonHandle.beginTouch(this.panelSave.getChildByName("btn_confirm_modify"),this);
		this.panelSave.getChildByName("btn_confirm_modify").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    private openRankUI(jsonData){
        if(this.iType > 0){
            this.maskBg2 = new eui.Image("mask_layer_png");
        }else{
            this.maskBg2 = new eui.Image("bg_ppt_1_png");
        }
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

        this.panelRank = new eui.Panel();
		this.panelRank.skinName = "resource/eui_skins/UserUI/MapRankUI.exml";
        this.panelRank.title = "Title";
        this.panelRank.horizontalCenter = 0;
        this.panelRank.verticalCenter = 0;
        this.context.addChild(this.panelRank);
        CommonTools.fixFix(this.context,this.panelRank,1,0,0);
        CommonTools.niceTip(this.panelRank,1,this);

        this.updateRankUI(jsonData,1);

		CommonButtonHandle.beginTouch(this.panelRank.getChildByName("btn_close"),this);
		this.panelRank.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panelRank.getChildByName("lb_new").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.panelRank.getChildByName("lb_hot").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }

    private openViewUI(jsonData){

        this.maskBg2 = new eui.Image("mask_layer_png");
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

        this.panelRank = new eui.Panel();
		this.panelRank.skinName = "resource/eui_skins/UserUI/MapViewUI.exml";
        this.panelRank.title = "Title";
        this.panelRank.horizontalCenter = 0;
        this.panelRank.verticalCenter = 0;
        this.context.addChild(this.panelRank);
        CommonTools.fixFix(this.context,this.panelRank,1,0,0);
        CommonTools.niceTip(this.panelRank,1,this);

        let group = this.panelRank.getChildByName("fighting_parent")
            .getChildByName("scroll").getChildByName("scroll_group") as eui.Group;

        let i = 0;
        for(let key in jsonData){
            let obj = jsonData[key];
            
            let panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/MapViewGroup.exml";
            panelT.name = "p_"+i;
            panelT.x += 8;
            panelT.y += 15+1*i+290*i; 
            group.addChild(panelT);

            panelT.getChildByName("view_add").visible = false;
            panelT.getChildByName("view_add_btn").visible = false;

            let panelGroup = panelT.getChildByName("group_1") as eui.Group;
            let lb_title = panelGroup.getChildByName("lb_title") as eui.Label;
            lb_title.text = obj.mapName;
            let lb_author = panelGroup.getChildByName("lb_author") as eui.Label;
            lb_author.text = ConstValue.cacheUserInfo.name;
            let lb_sign = panelGroup.getChildByName("lb_sign") as eui.Label;
            lb_sign.text = obj.mapSign;

            panelT.getChildByName("view_fight_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                let sData = CommonTools.getDataJsonStr("setFightMap",1,{mapId:obj.id});
                ConstValue.P_NET_OBJ.sendData(sData);

                let iChilds = group.numChildren;
                for(let i=0;i<iChilds;i++){
                    let childObj = group.getChildByName("p_"+i) as eui.Panel;
                    let imgObj =  childObj.getChildByName("fighting_lb_png");
                    if(imgObj != null)childObj.removeChild(imgObj);
                }

                let imgFight = new eui.Image("fighting_lb_png");
                imgFight.name = "fighting_lb_png";
                panelT.addChild(imgFight);
                imgFight.x = 6;
                imgFight.y = 6;

            }, this);

            panelT.getChildByName("view_change_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                CommonTools.niceTip(this.panelRank,2,this);
                this.updateByClickModify(obj);
            }, this);  

            new MapMiniDIYModule(panelT,obj.bgconf,obj.layerconf,2);
            if(obj.isFight == 1){
                let imgFight = new eui.Image("fighting_lb_png");
                imgFight.name = "fighting_lb_png";
                panelT.addChild(imgFight);
                imgFight.x = 6;
                imgFight.y = 6;
            }
            i++;
        }

        //添加-----
        let panelT = new eui.Panel();
        panelT.skinName = "resource/eui_skins/UserUI/MapViewGroup.exml";
        panelT.name = "p_" + i;
        panelT.x += 8;
        panelT.y += 15+1*i+290*i; 
        group.addChild(panelT);

        let panelGroup = panelT.getChildByName("group_1") as eui.Group;
        panelGroup.visible = false;

        panelT.getChildByName("view_fight_btn").visible = false;
        panelT.getChildByName("view_change_btn").visible = false;

        panelT.getChildByName("view_add_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            CommonTools.niceTip(this.panelRank,2,this);
            this.updateByClickAdd();
        }, this);   
        //添加-----         

		CommonButtonHandle.beginTouch(this.panelRank.getChildByName("btn_close"),this);
		this.panelRank.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

    }

    private updateRankUI(jsonData,iType){
        this.tipsPanel = this.panelRank;
        let scroller = this.panelRank.getChildByName("fighting_parent")
            .getChildByName("scroll") as eui.Scroller;
        scroller.viewport.scrollV = 0;
        let group = this.panelRank.getChildByName("fighting_parent")
            .getChildByName("scroll").getChildByName("scroll_group") as eui.Group;

        group.removeChildren();
        for(let i in jsonData){
            let obj = jsonData[i];

            let panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/MapRankGroup.exml";
            panelT.name = "p_"+i;
            panelT.x += 8;
            panelT.y += 15+3*parseInt(i)+255*parseInt(i); 
            group.addChild(panelT);

            let panelGroup = panelT.getChildByName("group_1") as eui.Group;
            let lb_title = panelGroup.getChildByName("lb_title") as eui.Label;
            lb_title.text = obj.mapName;
            let lb_author = panelGroup.getChildByName("lb_author") as eui.Label;
            lb_author.text = obj.name;
            let lb_sign = panelGroup.getChildByName("lb_sign") as eui.Label;
            lb_sign.text = obj.mapSign;
            let like_num = panelGroup.getChildByName("like_num") as eui.Label;
            like_num.text = obj.like;

            let like_heart = panelGroup.getChildByName("like_heart") as eui.Label;
            CommonButtonHandle.beginTouch(like_heart,this);
            like_heart.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                let sData = CommonTools.getDataJsonStr("addLike",1,{rid:obj.rid, mapKey:obj.mapkey, iType:iType});
                ConstValue.P_NET_OBJ.sendData(sData);
            }, this);
            new MapMiniDIYModule(panelT,obj.lBgconf,obj.lLayerconf,1);
        }
    }

    /**
	 * 回包处理
	 */
	public handlePacket(jsonObj:any){
        if (jsonObj.f == "saveMap"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                // CommonTools.niceTip(this.panelSave,2,this);
                this.mapKey = jsonObj.d.mapkey;
			}
		}else if (jsonObj.f == "getNewRank"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                if(this.panelRank != null){
                    this.updateRankUI(jsonObj.d.lnewRank,1);
                }else{
                    this.openRankUI(jsonObj.d.lnewRank);
                }
			}
		}else if (jsonObj.f == "getHopRank"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                this.updateRankUI(jsonObj.d.lhotRank,2);
			}
		}else if (jsonObj.f == "getMyMaps"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
                this.openViewUI(jsonObj.d);
			}
		}
    }

}