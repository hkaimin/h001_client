/**
 * 大厅模块
 */
class HallModule {
	private context:Main;
	private panel;
	private panelNotice;
	private panelSub;
	private sCurModifyBtn:string = "";
	private sCurModifyValue:string = "";
	private sCurModifyValue2:string = "";
	private choicePanel;
	private lRank;
	private lMyRank;
	private sMyRankDesc;
	private shopUIType = 1;
	private dShopOrBagData;
	private shopPageType = 0;
	private shopItemNo = 0;
	private shopItemItemID = 0;
	private shopItemName = "";
	private shopPayType = 0;
	private maskNew;
	private maskBg;
	private maskBg2;
	private barrData;
	private barrLayer = 1;
	private seventData;
	private seventCur = 0;
	private seventGetState = false;
	private shopItemClickName = "";
	private bodyAniDown;
	private bodyAniDown2;
	private showWxVsPanel = null;
	private isMainRoomer = false;
	private selectMapData;
	private selectKey;
	private roleClassData;
	private roleSelectIdx = "0";
	private fixGuide5 = false;
	private lvRewardData;
	private roleDetailData;
	private notify_lb;
	private curButton = null;
	private moveLvGet = true;
	private btnMatchAnim;
	private btnMatchAnimLb;
	private btnWxPvpAnim;
	private btnWxPvpAnimLb;
	private btnPveAnim;
	private btnPveAnimLb;
	private btnPveAnimX = 440;
	private btnPveAnimY = 240;

	private horseCurrent = 0;

	private isCanShowSeventDay = true;//默认情况可以打开7天签到
	private skillData;

	public static isNoEnd = false;
	public static isTrainBrr = false;
	public static pushBtnData = null;
	public static curGuide = 0;
	public static isInitLogin = true;
	public static isSafeArea = true;
	private tipsPanel;
	private guideModule;
	private buyClass = 0;

	private curPage = 1;
	private rankHead01;
	private rankHead02;
	private rankHead03;
	private rankHead04;
	private rankHead05;
	private rankHead01_mask;
	private rankHead02_mask;
	private rankHead03_mask;
	private rankHead04_mask;
	private rankHead05_mask;

	private btnBackImg;

	public constructor(ct:Main) {
		this.context = ct;
		HallModule.isNoEnd = false;
		HallModule.isTrainBrr = false;
		HallModule.isSafeArea = true;
		ConstValue.P_CONFIG = JSON.parse(JSON.stringify(RES.getRes("res_json")));
		this.init();
	}

	/**
	 * 初始化配置
	 */
	private initConfig(){
		LZMA.decompress(EBitUtil.getArr(new egret.ByteArray(RES.getRes("config_json"))), (d) => {
			// CommonTools.log("initXYConfig=========dddd======"+d);
            ConstValue.P_CONFIG = <ConfigInterface> JSON.parse(d);
			// this.initScene();//初始化地图
			this.init();
        }, (t) => {
            //ELog.info("conf:",t);
        });
	}

	private setHorseXY(){
		if(ConstValue.deviveNormalScale < 2){
			CommonTools.logWallet("---COMPLETE---deviveNormalScale--<2-")
			if(this.curPage == 2){
				this.btnPveAnim.x = this.btnPveAnimX - 180;
				this.btnPveAnim.y = this.btnPveAnimY;
			}else{
				this.btnPveAnim.x = this.btnPveAnimX;
				this.btnPveAnim.y = this.btnPveAnimY;
			}
		}else{
			CommonTools.logWallet("---COMPLETE---deviveNormalScale-->2-")
			if(this.curPage == 2){
				this.btnPveAnim.x = this.btnPveAnimX - 220;
				this.btnPveAnim.y = this.btnPveAnimY + 40;
			}else{
				this.btnPveAnim.x = this.btnPveAnimX;
				this.btnPveAnim.y = this.btnPveAnimY;
			}
		}
	}

	private drawHorse(){
		if(this.btnPveAnim != null){
			this.btnPveAnim.removeEventListener(egret.Event.COMPLETE);
			this.panel.removeChild(this.btnPveAnim);
			this.btnPveAnim = null;
		}
		this.btnPveAnim = CommonTools.getAnimDraw(RES.getRes("wait_01_"+this.horseCurrent+"_json"), RES.getRes("wait_01_"+this.horseCurrent+"_png"), "0");
		this.btnPveAnim.play(1);
		this.btnPveAnim.name = "btn_noend_pve_anim";
		this.panel.addChild(this.btnPveAnim);
		this.setHorseXY();
		this.btnPveAnim.addEventListener(egret.Event.COMPLETE,function(){
			CommonTools.logWallet("---COMPLETE------"+this.horseCurrent)
			this.horseCurrent ++;
			if(this.horseCurrent > 9){
				this.horseCurrent = 0;
			}
			this.drawHorse();
		},this);
		// CommonTools.fixFix(this.context,this.btnPveAnim,4,40,100);//40,20
	}

	private init(){
		// this.initConfig();
		CommonAudioHandle.play("mainmenu_mp3",0);
		if(egret.localStorage.getItem("noVolume") == "1")CommonAudioHandle.setVolume(0);
		this.maskNew = new eui.Image("new_ui_01_jpg");
		this.maskNew.width = this.context.getStageWidth();
		let scaleDevice = 1334.0/this.context.getStageWidth();
        this.maskNew.height = 750.0/scaleDevice;
		this.context.addChild(this.maskNew);

		this.panel = new eui.Panel();
		this.panel.skinName = "resource/eui_skins/UserUI/HallUI.exml";
        this.panel.title = "Title";
        this.panel.horizontalCenter = 0;
        this.panel.verticalCenter = 0;
        this.context.addChild(this.panel);
		this.tipsPanel = this.panel;

		this.drawHorse();

		this.panel.getChildByName("btn_map_diy").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("img_info").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("btn_training_pve").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("btn_2v2").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		this.rankHead01 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_01") as eui.Image;
		this.rankHead02 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_02") as eui.Image;
		this.rankHead03 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_03") as eui.Image;
		this.rankHead04 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_04") as eui.Image;
		this.rankHead05 = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_05") as eui.Image;
		
		this.rankHead01_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_01_mask") as eui.Image;
		this.rankHead02_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_02_mask") as eui.Image;
		this.rankHead03_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_03_mask") as eui.Image;
		this.rankHead04_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_04_mask") as eui.Image;
		this.rankHead05_mask = this.panel.getChildByName("rank_grounp_main").getChildByName("rank_head_05_mask") as eui.Image;

		this.rankHead01.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.rankHead02.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.rankHead03.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.rankHead04.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.rankHead05.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		this.btnBackImg = this.panel.getChildByName("rank_grounp_main").getChildByName("btn_back_img");
		this.btnBackImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		// CommonTools.fixFix(this.context,this.panel.getChildByName("btn_shop"),1,0,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_map_diy"),2,30,20);
		// CommonTools.fixFix(this.context,this.panel.getChildByName("btn_match_pvp"),2,-20,20);
		// CommonTools.fixFix(this.context,this.panel.getChildByName("btn_match_pvp_anim"),2,-20,20);
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_training_pve"),2,30,20);
		// CommonTools.fixFix(this.context,this.panel.getChildByName("btn_noend_pve"),2,40,20);
		// CommonTools.fixFix(this.context,this.panel.getChildByName("btn_friend_pvp"),2,30,20);
		// CommonTools.fixFix(this.context,this.panel.getChildByName("btn_friend_pvp_anim"),2,30,20);
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_2v2"),2,30,20);
		CommonTools.fixFix(this.context,this.panel.getChildByName("info_grp"),1,44,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_head_bg"),1,34,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("up_item_group"),1,34,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_info"),1,0,0);//44,10
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_exp_bg"),1,27,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_exp_value"),1,27,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_coin_bg"),1,-10,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_zuan_bg"),1,-40,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_noticetip"),1,0,10);//-40,10
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_shop3"),1,0,10);//-40,10
		CommonTools.fixFix(this.context,this.panel.getChildByName("hall_id_lb"),1,34,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("coin_num_lb"),1,-10,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("zuan_num_lb"),1,-50,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_lv_lb"),1,30,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("rank_grounp_main"),1,0,0);//4,10
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_gonggao"),1,44,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("up_item_group"),2,0,-20);

		let imgHead = this.panel.getChildByName("img_info") as eui.Image;
		if(ConstValue.cacheUserInfo.headPic != "")imgHead.source = ConstValue.cacheUserInfo.headPic;

		let lbName = this.panel.getChildByName("hall_id_lb") as eui.Label;
		lbName.text = ConstValue.cacheUserInfo.name;

		let lbLv = this.panel.getChildByName("img_lv_lb") as eui.Label;
		lbLv.text = ConstValue.cacheUserInfo.lv;

		let lbExp = this.panel.getChildByName("img_exp_value") as eui.Image;
		lbExp.width = ConstValue.cacheUserInfo.curexp * 1.0 / ConstValue.cacheUserInfo.maxExp * lbExp.width;

		let lbCoin = this.panel.getChildByName("coin_num_lb") as eui.Label;
		lbCoin.text = ConstValue.cacheUserInfo.coin;

		let lbZuan = this.panel.getChildByName("zuan_num_lb") as eui.Label;
		lbZuan.text = ConstValue.cacheUserInfo.diamond;

		if(ConstValue.cacheUserInfo != null && ConstValue.cacheUserInfo.gm == 1){//gm
			// CommonButtonHandle.beginTouch(this.panel.getChildByName("btn_gm"),this);
			this.panel.getChildByName("scroll_notify").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		}
		// CommonTools.fixFix(this.context,this.panel.getChildByName("btn_gm"),2,0,0);
		CommonTools.fixFix(this.context,this.panel.getChildByName("scroll_notify"),2,0,20);
		this.notify_lb = this.panel.getChildByName("scroll_notify")
		.getChildByName("group_notify").getChildByName("notity_all_lb") as eui.Label;
		
		egret.Tween.get(this.notify_lb).to({x:-426}, 8000).call(function(){
			this.moveNotify();
		}, this);

		ConstValue.gatewayType = 0;
		//加载资源
        // const platform:any = window.platform;
        // platform.openDataContext.postMessage({
        //     command:'loadRes'
        // });
		if(ConstValue.p_USE_WALLET == 0)this.initPushBtn();
		if(!HallModule.isInitLogin){
			if(HallModule.curGuide > 0 && HallModule.curGuide != 3){
				// new GuideModule(this.context,HallModule.curGuide,this.panel,this.panelNotice);								
			}else{
				// let sData = CommonTools.getDataJsonStr("getNowGuild",1,{});
				// ConstValue.P_NET_OBJ.sendData(sData);
			}
		}
		HallModule.isInitLogin = false;
		
		FightingModule.Delay(500, function(){
			this.showGuide();
			let sData = CommonTools.getDataJsonStr("getPvpRankThree",1,{});
			ConstValue.P_NET_OBJ.sendData(sData);
			this.openWXPVP();
		}, this);
		

		this.initAD();
		this.panel.getChildByName("btn_gonggao").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		if(ConstValue.p_USE_WALLET == 1){
			// ContractSol.initSOL();
			// var fromaddr = ConstValue.hweb3.eth.accounts[0];
			// ContractSol.hweb3.eth.getBalance(ContractSol.sender,(err,result) =>{
			// 	console.log("--地址ETH-getBalance----"+result);
			// });
			// ContractSol.nft_tokensOfOwner(ContractSol.sender);
			// ContractSol.maincoin_transfer(ContractSol.createAddress, 1);
			// ContractSol.maincoin_transferFrom(ContractSol.createAddress, ContractSol.sender , 2);
			// ContractSol.maincoin_increaseApproval(ContractSol.sender , 2);
			platform.initSOL();
			ContractSol.initSOL();
			ContractSol.maincoin_balanceOf(ContractSol.sender);
			ContractSol.subcoin_balanceOf(ContractSol.sender);
			this.changePage("rank_head_01");
		}
	}

	public updateMaincoin(coin){
		this.panel.getChildByName("up_item_group").getChildByName("main_coin_num_lb").text = coin;
	}

	public updateSubcoin(coin){
		this.panel.getChildByName("up_item_group").getChildByName("sub_coin_num_lb").text = coin;
	}

	private initAD(){
		if(ConstValue.videoAd == null){
			ConstValue.videoAd = 1;
		}
	}

	private showGuide(){
		if(ConstValue.p_USE_WALLET == 1)return;
		let arr = ["2","4","6","8","9","10","7"];
		for(let i=0;i<arr.length;i++){
			if(arr[i]=="7" && ConstValue.cacheUserInfo.lv <5)continue;
			if(egret.localStorage.getItem(GuideModule.guide_tip_new[arr[i]].saveKey) != "1"){
				this.guideModule = new GuideModule(null,parseInt(arr[i]),this.panel,null);
				break;
			}
		}
	}

	private removeGuide(){
		if(this.guideModule != null){
			this.guideModule.removeTips();
			this.guideModule = null;
		}
	}

	private moveNotify(){
		this.notify_lb.x = 430;
		let oneTip = "喜迎新春，新春开服，福利多多，大家快来体验吧~";
		if(ConstValue.oneTipsCnt > ConstValue.oneTipsCur){
			if(ConstValue.oneTipsCur == 0){
				ConstValue.oneTipsCur ++;
				if(ConstValue.oneTips[ConstValue.oneTipsCur] != null)oneTip = ConstValue.oneTips[ConstValue.oneTipsCur];
			}else{
				if(ConstValue.oneTips[ConstValue.oneTipsCur] != null)delete ConstValue.oneTips[ConstValue.oneTipsCur];
				ConstValue.oneTipsCur ++;
				if(ConstValue.oneTips[ConstValue.oneTipsCur] != null)oneTip = ConstValue.oneTips[ConstValue.oneTipsCur];
			}
		}else{
			let ran = CommonTools.getRandomFloor(3,true);
			if(ConstValue.sysTips[ran] != null)oneTip = ConstValue.sysTips[ran];
		}
		this.notify_lb.text = oneTip;
		egret.Tween.get(this.notify_lb).to({x:-426}, 8000).call(function(){
			this.moveNotify();
		}, this);
	}

	public getTipXY(){
		return [this.btnPveAnim.x,this.btnPveAnim.y];
	}

	private initPushBtn(){
		let xleft = 750;let yleft = 26;let xdis = 5;
		let xright = 1222.48;let yright = 100;let ydis = 28;
		let leftCnt = 0;
		let rightCnt = 0;
		let leftBtnList = new Array();
		let rightBtnList = new Array();
		for(let i in HallModule.pushBtnData){
			let obj = HallModule.pushBtnData[i];
			if(obj.isOpen == 0)continue;
			if(obj.id > 12)continue;
			if(obj.pos == 1){//右边的按钮
				rightBtnList.push(obj);
			}else{//左边的按钮
				leftBtnList.push(obj);
			}
		}
		rightBtnList.sort(function(a,b){
			return a.weight - b.weight;
		});
		leftBtnList.sort(function(a,b){
			return a.weight - b.weight;
		});

		for(let i in rightBtnList){
			let obj = rightBtnList[i];
			let btnInfo = ConstValue.PUSH_BUTTON[obj.id+""];
			let btnTemp = new eui.Image();
			btnTemp.name = btnInfo.btn_name;
			btnTemp.source = btnInfo.btn_res_01;
			//右边的按钮
			btnTemp.width = 84;btnTemp.height = 84;
			btnTemp.x = xright + 42;
			btnTemp.y = yright + ydis*rightCnt + btnTemp.height*rightCnt + 42;
			rightCnt ++;
			CommonTools.fixFix(this.context,btnTemp,2,0,0);
			btnTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			this.panel.addChild(btnTemp);
			btnTemp.anchorOffsetX = 42;
			btnTemp.anchorOffsetY = 42;
			CommonButtonHandle.beginTouch(btnTemp,this);
		}

		for(let i in leftBtnList){
			let obj = leftBtnList[i];
			let btnInfo = ConstValue.PUSH_BUTTON[obj.id+""];
			let btnTemp = new eui.Image();
			btnTemp.name = btnInfo.btn_name;
			btnTemp.source = btnInfo.btn_res_01;
			//左边的按钮
			btnTemp.width = 94;btnTemp.height = 94;
			btnTemp.x = xleft + xdis*leftCnt + btnTemp.width*leftCnt + 47;
			btnTemp.y = yleft + 47;
			leftCnt ++;
			CommonTools.fixFix(this.context,btnTemp,2,-50,10);
			btnTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			this.panel.addChild(btnTemp);
			btnTemp.scaleX = 0.8;
			btnTemp.scaleY = 0.8;
			btnTemp.anchorOffsetX = 47;
			btnTemp.anchorOffsetY = 47;
			CommonButtonHandle.beginTouch(btnTemp,this);
		}
	}

	public openWXPVP(){
		CommonTools.log('--Main.roomkey--------'+Main.roomkey)
		// if(Main.roomkey != null || (ConstValue.p_LOGIN_MODEL == 2 && egret.lifecycle.egretRoomkey != undefined)){
		if(Main.roomkey != null){
			// if(Main.roomkey == null)Main.roomkey = egret.lifecycle.egretRoomkey;
			let sData = CommonTools.getDataJsonStr("enter1V1Room",1,{fightRoomKey:Main.roomkey});
			ConstValue.P_NET_OBJ.sendData(sData);
		}
	}

	private clickNotice(name:string){
		let scroll = this.panelNotice.getChildByName("left_scroller");
		let group = scroll.getChildByName("left_group");
		let lb_title = this.panelNotice.getChildByName("lb_title") as eui.Label;
		let lb_mail_info = this.panelNotice.getChildByName("lb_mail_info") as eui.Label;

		let iChilds = group.numChildren;
		let idx = parseInt(name.replace("lb_notice_click",""));
		for(let i=0;i<iChilds;i++){
			let childObj = group.getChildByName("p_"+i);
			let groupT = childObj.getChildByName("group_1") as eui.Group;
			if(i==idx){
				groupT.getChildByName("img_yellow").visible = true;
				groupT.getChildByName("img_red").visible = false;
				let img_letter = groupT.getChildByName("img_letter") as eui.Image;
				img_letter.source = RES.getRes("mail_open2_png");
				lb_title.text = "标题：" + "喜报！！" + (i+1);
				lb_mail_info.text = "恭喜用户1000"+i+"喜获超级大奖xxxxxxxxxxxxxx";
			}else{
				groupT.getChildByName("img_yellow").visible = false;
			}
		}
	}

	private clickShopItem(name:string){
		this.shopItemClickName = name;
		let scroll = this.panelNotice.getChildByName("res_scroller");
		let group = scroll.getChildByName("res_group");
		let img_show_icon = this.panelNotice.getChildByName("shop_show_icon") as eui.Image;
		let lb_show_info = this.panelNotice.getChildByName("shop_show_info") as eui.Label;

		let lbCoin = this.panelNotice.getChildByName("coin_num_lb") as eui.Label;
		lbCoin.text = ConstValue.cacheUserInfo.coin;

		let lbZuan = this.panelNotice.getChildByName("zuan_num_lb") as eui.Label;
		lbZuan.text = ConstValue.cacheUserInfo.diamond;

		let iChilds = group.numChildren;
		let idx = parseInt(name.replace("shop_item_click",""));
		if(this.shopUIType == 1){
			// lb_show_info.text = this.dShopOrBagData.lShopInfo[idx].sDes;
			this.shopItemNo = this.dShopOrBagData.lShopInfo[idx].iNo;
			this.shopPayType = this.dShopOrBagData.lShopInfo[idx].payType;
			CommonTools.log('----this.shopItemNo-------'+this.shopItemNo)
			// this.shopItemName = this.dShopOrBagData.lShopInfo[idx].sName;
			lb_show_info.text = this.getConf("shopData",this.dShopOrBagData.lShopInfo[idx].iNo.toString(),"desc");
			this.shopItemName = this.getConf("shopData",this.dShopOrBagData.lShopInfo[idx].iNo.toString(),"name");
		}else{
			// lb_show_info.text = this.dShopOrBagData.lItmeInfo[idx].sDes;
			this.shopItemNo = this.dShopOrBagData.lItmeInfo[idx].iNo;
			this.shopItemItemID = this.dShopOrBagData.lItmeInfo[idx].iItemID;
			// this.shopItemName = this.dShopOrBagData.lItmeInfo[idx].sName;
			lb_show_info.text = this.getConf("ItemData",this.dShopOrBagData.lItmeInfo[idx].iNo.toString(),"desc");
			this.shopItemName = this.getConf("ItemData",this.dShopOrBagData.lItmeInfo[idx].iNo.toString(),"name");
		}
		for(let i=0;i<iChilds;i++){
			let childObj = group.getChildByName("p_"+i);
			let groupT = childObj.getChildByName("group_1") as eui.Group;
			let img_item = groupT.getChildByName("shop_item_icon") as eui.Image;
			let img_bg = groupT.getChildByName("shop_item_bg") as eui.Image;
			let source_bg_not = "shop_item_not_png";
			let source_bg_yes = "shop_item_yes_png";
			if(this.shopUIType == 2){
				source_bg_not = "bag_item_not_png";
				source_bg_yes = "bag_item_yes_png";
			}
			if(i==idx){
				img_show_icon.source = img_item.source;
				img_bg.source = source_bg_yes;
			}else{
				img_bg.source = source_bg_not;
			}
		}
	}

	private clickShopPage(name:string){
		let btn_fashion = this.panelNotice.getChildByName("btn_fashion") as eui.Image;
		let btn_paopao = this.panelNotice.getChildByName("btn_paopao") as eui.Image;
		let btn_texiao = this.panelNotice.getChildByName("btn_texiao") as eui.Image;
		let btn_daoju = this.panelNotice.getChildByName("btn_daoju") as eui.Image;
		let t_shi = this.panelNotice.getChildByName("t_shi") as eui.Label;
		let t_zhuang = this.panelNotice.getChildByName("t_zhuang") as eui.Label;
		let t_pao1 = this.panelNotice.getChildByName("t_pao1") as eui.Label;
		let t_pao2 = this.panelNotice.getChildByName("t_pao2") as eui.Label;
		let t_te = this.panelNotice.getChildByName("t_te") as eui.Label;
		let t_xiao = this.panelNotice.getChildByName("t_xiao") as eui.Label;
		let t_dao = this.panelNotice.getChildByName("t_dao") as eui.Label;
		let t_ju = this.panelNotice.getChildByName("t_ju") as eui.Label;

		t_shi.stroke = 3;
		t_zhuang.stroke = 3;
		t_pao1.stroke = 3;
		t_pao2.stroke = 3;
		t_te.stroke = 3;
		t_xiao.stroke = 3;
		t_dao.stroke = 3;
		t_ju.stroke = 3;

		let source_not = "shop_page_not_png";
		let source_yes = "shop_page_yes_png";
		let color_not = 0xfff1cf;
		let color_yes = 0xea8c31;
		let strokeColor_not = 0xE5AF8E;
		let strokeColor_yes = 0xFCEFDF;
		if(this.shopUIType == 2){
			source_not = "rank_select_01_png";
			source_yes = "rank_select_02_png";
			color_not = 0xa0b3dc;
			color_yes = 0x7479db;
			strokeColor_not = 0x7B86BB;
			strokeColor_yes = 0xCAE9FF;
		}
		let iType = 1;
		switch(name){
			case "btn_one_lb":
				btn_fashion.source = source_yes;
				btn_paopao.source = source_not;
				btn_texiao.source = source_not;
				btn_daoju.source = source_not;
				t_shi.textColor = color_yes;
				t_zhuang.textColor = color_yes;
				t_pao1.textColor = color_not;
				t_pao2.textColor = color_not;
				t_te.textColor = color_not;
				t_xiao.textColor = color_not;
				t_dao.textColor = color_not;
				t_ju.textColor = color_not;
				t_shi.strokeColor = strokeColor_yes;
				t_zhuang.strokeColor = strokeColor_yes;
				t_pao1.strokeColor = strokeColor_not;
				t_pao2.strokeColor = strokeColor_not;
				t_te.strokeColor = strokeColor_not;
				t_xiao.strokeColor = strokeColor_not;
				t_dao.strokeColor = strokeColor_not;
				t_ju.strokeColor = strokeColor_not;

				iType = 1;
				break;
			case "btn_two_lb":
				btn_fashion.source = source_not;
				btn_paopao.source = source_yes;
				btn_texiao.source = source_not;
				btn_daoju.source = source_not;
				t_shi.textColor = color_not;
				t_zhuang.textColor = color_not;
				t_pao1.textColor = color_yes;
				t_pao2.textColor = color_yes;
				t_te.textColor = color_not;
				t_xiao.textColor = color_not;
				t_dao.textColor = color_not;
				t_ju.textColor = color_not;
				t_shi.strokeColor = strokeColor_not;
				t_zhuang.strokeColor = strokeColor_not;
				t_pao1.strokeColor = strokeColor_yes;
				t_pao2.strokeColor = strokeColor_yes;
				t_te.strokeColor = strokeColor_not;
				t_xiao.strokeColor = strokeColor_not;
				t_dao.strokeColor = strokeColor_not;
				t_ju.strokeColor = strokeColor_not;
				
				iType = 2;
				break;
			case "btn_three_lb":
				btn_fashion.source = source_not;
				btn_paopao.source = source_not;
				btn_texiao.source = source_yes;
				btn_daoju.source = source_not;
				t_shi.textColor = color_not;
				t_zhuang.textColor = color_not;
				t_pao1.textColor = color_not;
				t_pao2.textColor = color_not;
				t_te.textColor = color_yes;
				t_xiao.textColor = color_yes;
				t_dao.textColor = color_not;
				t_ju.textColor = color_not;
				t_shi.strokeColor = strokeColor_not;
				t_zhuang.strokeColor = strokeColor_not;
				t_pao1.strokeColor = strokeColor_not;
				t_pao2.strokeColor = strokeColor_not;
				t_te.strokeColor = strokeColor_yes;
				t_xiao.strokeColor = strokeColor_yes;
				t_dao.strokeColor = strokeColor_not;
				t_ju.strokeColor = strokeColor_not;

				
				iType = 3;
				break;
			case "btn_four_lb":
				btn_fashion.source = source_not;
				btn_paopao.source = source_not;
				btn_texiao.source = source_not;
				btn_daoju.source = source_yes;
				t_shi.textColor = color_not;
				t_zhuang.textColor = color_not;
				t_pao1.textColor = color_not;
				t_pao2.textColor = color_not;
				t_te.textColor = color_not;
				t_xiao.textColor = color_not;
				t_dao.textColor = color_yes;
				t_ju.textColor = color_yes;
				t_shi.strokeColor = strokeColor_not;
				t_zhuang.strokeColor = strokeColor_not;
				t_pao1.strokeColor = strokeColor_not;
				t_pao2.strokeColor = strokeColor_not;
				t_te.strokeColor = strokeColor_not;
				t_xiao.strokeColor = strokeColor_not;
				t_dao.strokeColor = strokeColor_yes;
				t_ju.strokeColor = strokeColor_yes;

				iType = 4;
				break;
			default:
				break;
		}
		if(this.shopUIType == 1){
			this.shopPageType = iType - 1;
			let sData_shop = CommonTools.getDataJsonStr("openShopUI",1,{iType:this.shopPageType});
			ConstValue.P_NET_OBJ.sendData(sData_shop);
		}else{
			this.shopPageType = iType - 1;
			let sData_shop = CommonTools.getDataJsonStr("openBagUI",1,{iType:this.shopPageType});
			ConstValue.P_NET_OBJ.sendData(sData_shop);
		}
	}

	public addCommonTips(tips){
        CommonTools.addCommonTips(this.tipsPanel,tips);
    }

	private changePage(clickName){
		if(clickName == "rank_head_01"){
			if(this.curPage != 1)this.maskNew.source = "new_ui_01_jpg";
			this.curPage = 1;
			this.rankHead01_mask.visible = true;
			this.rankHead02_mask.visible = false;
			this.rankHead03_mask.visible = false;
			this.rankHead04_mask.visible = false;
			this.rankHead05_mask.visible = false;
			
			this.rankHead01.source = "icon_homestead_s_png";
			this.rankHead02.source = "icon_stables_n_png";
			this.rankHead03.source = "icon_training_n_png";
			this.rankHead04.source = "icon_task_n_png";
			this.rankHead05.source = "icon_marketpalec_n_png";

			this.btnBackImg.visible = false;
			this.rankHead01.visible = true;
			this.rankHead05.visible = true;
			this.panel.getChildByName("horse_name_group").visible = true;
		}else if(clickName == "rank_head_02"){
			this.curPage = 2;
			this.maskNew.source = "horse_home_page2_jpg";
			this.rankHead01_mask.visible = false;
			this.rankHead02_mask.visible = true;
			this.rankHead03_mask.visible = false;
			this.rankHead04_mask.visible = false;
			this.rankHead05_mask.visible = false;

			this.rankHead01.visible = false;
			this.rankHead05.visible = false;

			this.rankHead02.source = "icon_horse_s_png";
			this.rankHead03.source = "icon_merge_n_png";
			this.rankHead04.source = "icon_breeding_n_png";

			this.btnBackImg.visible = true;
			this.panel.getChildByName("horse_name_group").visible = false;
		}else if(clickName == "rank_head_03"){
			if(this.curPage == 2){
				this.rankHead02_mask.visible = false;
				this.rankHead03_mask.visible = true;
				this.rankHead04_mask.visible = false;

				this.rankHead02.source = "icon_horse_n_png";
				this.rankHead03.source = "icon_merge_s_png";
				this.rankHead04.source = "icon_breeding_n_png";
			}else{
				this.curPage = 3;
				this.rankHead01_mask.visible = false;
				this.rankHead02_mask.visible = false;
				this.rankHead03_mask.visible = true;
				this.rankHead04_mask.visible = false;
				this.rankHead05_mask.visible = false;

				this.rankHead01.source = "icon_homestead_n_png";
				this.rankHead02.source = "icon_stables_n_png";
				this.rankHead03.source = "icon_training_s_png";
				this.rankHead04.source = "icon_task_n_png";
				this.rankHead05.source = "icon_marketpalec_n_png";
			}
		}else if(clickName == "rank_head_04"){
			if(this.curPage == 2){
				this.rankHead02_mask.visible = false;
				this.rankHead03_mask.visible = false;
				this.rankHead04_mask.visible = true;

				this.rankHead02.source = "icon_horse_n_png";
				this.rankHead03.source = "icon_merge_n_png";
				this.rankHead04.source = "icon_breeding_s_png";
			}else{
				this.curPage = 4;
				this.rankHead01_mask.visible = false;
				this.rankHead02_mask.visible = false;
				this.rankHead03_mask.visible = false;
				this.rankHead04_mask.visible = true;
				this.rankHead05_mask.visible = false;

				this.rankHead01.source = "icon_homestead_n_png";
				this.rankHead02.source = "icon_stables_n_png";
				this.rankHead03.source = "icon_training_n_png";
				this.rankHead04.source = "icon_task_s_png";
				this.rankHead05.source = "icon_marketpalec_n_png";
			}
		}else if(clickName == "rank_head_05"){
			this.curPage = 5;
			this.rankHead01_mask.visible = false;
			this.rankHead02_mask.visible = false;
			this.rankHead03_mask.visible = false;
			this.rankHead04_mask.visible = false;
			this.rankHead05_mask.visible = true;

			this.rankHead01.source = "icon_homestead_n_png";
			this.rankHead02.source = "icon_stables_n_png";
			this.rankHead03.source = "icon_training_n_png";
			this.rankHead04.source = "icon_task_n_png";
			this.rankHead05.source = "icon_marketpalec_s_png";

			this.showEditUI("scroll_notify");
		}
		this.setHorseXY();
	}

	private async onClick(e: egret.TouchEvent){
		if(this.context.loadingView!=null && !ConstValue.P_IS_DEBUG){
			CommonTools.log("还在加载中......return ");
			return;
		}
		if(ConstValue.P_LOGIN_OBJ==null)CommonAudioHandle.playEffect("playBomb_mp3",1);
		let name = e.target.name;
		if(name != "btn_close" && name != "btn_close_edit"){
			this.removeGuide();
		}
		if(name == "btn_close" && this.seventData == null){
			this.showGuide();
		}
		CommonTools.log("==========name::::"+name);

		if(name.indexOf("lb_notice_click")>=0){
			this.clickNotice(name);
			return;
		}else if(name.indexOf("shop_item_click")>=0){
			this.clickShopItem(name);
			return;
		}

		if(name.indexOf("rank_head_")>=0){
			this.changePage(name);
			return;
		}

		switch(name){
			case "btn_back_img":
				this.changePage("rank_head_01");
				break;

			case "noend_tip":
				let sDataNoendHelp = CommonTools.getDataJsonStr("getHelp",1,{helpID:"1"});
				ConstValue.P_NET_OBJ.sendData(sDataNoendHelp);
				break;

			case "btn_tip":
				let sDataSkillHelp = CommonTools.getDataJsonStr("getHelp",1,{helpID:"2"});
				ConstValue.P_NET_OBJ.sendData(sDataSkillHelp);
				break;

			case "friend_rank_lb":
				CommonTools.addCommonTips(this.tipsPanel,"暂未开放");
				break;
			
			case "btn_2v2":
				CommonTools.addCommonTips(this.tipsPanel,"敬请期待");
				break;

			case "btn_close":
				this.closeNotice();
				break;

			case "btn_close_wx_vs":
				this.closeWxVsUI();
				break;

			case "btn_start":
				if(this.isMainRoomer){
					let sDataReady = CommonTools.getDataJsonStr("startGame1V1",1,{fightRoomKey:Main.roomkey});
					ConstValue.P_NET_OBJ.sendData(sDataReady);
				}else{
					let sDataReady = CommonTools.getDataJsonStr("setReady1V1",1,{fightRoomKey:Main.roomkey});
					ConstValue.P_NET_OBJ.sendData(sDataReady);
				}
				break;

			case "btn_shop":
				CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_SEND_WAITING);
				break;
			
			case "btn_training_pve":
				if(HallModule.curGuide == 2){
					HallModule.curGuide = 0;
					let sData = CommonTools.getDataJsonStr("getNextGuild",1,{});
					ConstValue.P_NET_OBJ.sendData(sData);
				}
				HallModule.isTrainBrr = true;
				let sData_gobarr = CommonTools.getDataJsonStr("C2GEnterTrain",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_gobarr);
				break;

			case "btn_ranking":
				let sData = CommonTools.getDataJsonStr("openRnakUI",1,{});
				ConstValue.P_NET_OBJ.sendData(sData);
				break;

			case "btn_gonggao":
				let sDataGG = CommonTools.getDataJsonStr("getGonggao",1,{});
				ConstValue.P_NET_OBJ.sendData(sDataGG);
				break;

			case "all_rank_lb":
			case "barrier_rank_lb":
				let sData_rank_3 = CommonTools.getDataJsonStr("getTotalGuankaRank",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_rank_3);
				break;

			case "match_rank_lb":
				let sData_rank_1 = CommonTools.getDataJsonStr("getTotalPvpRank",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_rank_1);
				break;

			case "lv_rank_lb":
				let sData_rank_2 = CommonTools.getDataJsonStr("getTotalLvRank",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_rank_2);
				break;

			

			case "btn_noticetip":
				this.showNotice("resource/eui_skins/UserUI/NoticeUI.exml",name);
				break

			case "btn_match_pvp":
				if(HallModule.curGuide == 6){
					HallModule.curGuide = 0;
					let sData = CommonTools.getDataJsonStr("getNextGuild",1,{});
					ConstValue.P_NET_OBJ.sendData(sData);
				}
				await this.context.loadResource("fighting",3);
				break;

			case "img_info":
				let sData_role_detail = CommonTools.getDataJsonStr("getRoleDetail",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_role_detail);
				break;

			case "btn_friend_pvp":
				this.showNotice("resource/eui_skins/UserUI/SelectShareVsMapUI.exml",name);
				break;

			case "btn_noend_pve":
				let sData_noend = CommonTools.getDataJsonStr("C2GOpenWujinUI",1,{diffLevel:1});
				ConstValue.P_NET_OBJ.sendData(sData_noend);
				break;
			
			case "btn_map_diy":
				if(HallModule.curGuide == 7){
					HallModule.curGuide = 0;
					let sData = CommonTools.getDataJsonStr("getNextGuild",1,{});
					ConstValue.P_NET_OBJ.sendData(sData);
				}
				if(ConstValue.cacheUserInfo.btnCtrlData["5"].openLv > ConstValue.cacheUserInfo.lv){
					CommonTools.addCommonTips(this.tipsPanel,"等级"+ConstValue.cacheUserInfo.btnCtrlData["5"].openLv+"级后开放");
					break;
				}
				await this.context.loadResource("diymap",4);
				break;

			case "btn_map_shop":
				let sData_shop = CommonTools.getDataJsonStr("openShopUI",1,{iType:0});
				ConstValue.P_NET_OBJ.sendData(sData_shop);
				break

			case "btn_redtv":
				this.showAD(5);
				break

			case "btn_map_bag":
				let sData_bag = CommonTools.getDataJsonStr("openBagUI",1,{iType:0});
				ConstValue.P_NET_OBJ.sendData(sData_bag);
				break

			case "btn_select_role":
				let sData_RoleList = CommonTools.getDataJsonStr("showAllClassList",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_RoleList);
				// this.showNotice("resource/eui_skins/UserUI/RoleInfoUI.exml","btn_img_info");
				break

			case "btn_close_edit":
				this.closeSub();
				break;

			case "btn_uplv_task":
				let sData_Reward = CommonTools.getDataJsonStr("showUpgradeReward",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_Reward);
				break;
			
			case "btn_skill":
				let sData_skill = CommonTools.getDataJsonStr("C2G_Open_MainUI",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_skill);
				break;

			case "btn_maprank":
				if(ConstValue.P_MAP_OBJ == null){
					ConstValue.P_MAP_OBJ = new MapDIYModule(this.context,null,0);
				}
				break;

			case "btn_setting":
				this.showNotice("resource/eui_skins/UserUI/MainSetting.exml","btn_setting");
				break;

			case "scroll_notify":
				// let arr = ["2","4","6","8","9","10","7"];
				// for(let i=0;i<arr.length;i++){
				// 	egret.localStorage.setItem(GuideModule.guide_tip_new[arr[i]].saveKey,"0");
				// }
				FightingModule.curBarrNo = 29;
				// this.showGuide();
				this.showEditUI(name);
				break;

			case "btn_one_lb":			
			case "btn_two_lb":
			case "btn_three_lb":
			case "btn_four_lb":
				this.clickShopPage(name);
				break;
			
			case "btn_buy":
				if(this.shopUIType == 1){
					if(this.shopPayType != 3){
						let sDataBuy = CommonTools.getDataJsonStr("Buy",1,{iNo:this.shopItemNo,iType:this.shopPageType,num:1});
						ConstValue.P_NET_OBJ.sendData(sDataBuy);
					}else{
						let sDataBuy = CommonTools.getDataJsonStr("playVidioBefore",1,{iNo:this.shopItemNo,iType:1,pageType:this.shopPageType});
						ConstValue.P_NET_OBJ.sendData(sDataBuy);
						this.showAD(3);
					}
				}else{
					let sDataUse = CommonTools.getDataJsonStr("useItem",1,{iNo:this.shopItemNo,iType:this.shopPageType,iItemID:this.shopItemItemID});
					ConstValue.P_NET_OBJ.sendData(sDataUse);
				}
				break;

			case "btn_confirm_modify":
				let account_lb_txt = this.panelSub.getChildByName("account_lb_txt") as eui.Label;
				if(account_lb_txt.text == ""){
					CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_MODIFY_NULL_FAIL);
					return;
				}
				if(ConstValue.P_IS_DEBUG){
					CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_SEND_MODIFY_SUCCESS);
					this.closeSub();
				}else{
					this.sCurModifyValue = account_lb_txt.text;
					let sData = "";
					if(this.sCurModifyBtn == "scroll_notify"){
						sData = CommonTools.getDataJsonStr("gmFunc",1,{gmCmd:this.sCurModifyValue});
					}
					if(sData == ""){
						if(ConstValue.P_IS_INNER){
							CommonTools.addCommonTips(this.tipsPanel,"btn_confirm_modify sData 为空");
						}
						return;
					}
					ConstValue.P_NET_OBJ.sendData(sData);
				}
				break;

			default:
				CommonTools.log("11111111 default");
				break;
		}
	}

	/**
     * 排行榜关闭按钮
     */
    private btnClose: eui.Button;

	private bitmap: egret.Bitmap;

    private isdisplay = false;

    /**
     * 排行榜遮罩，为了避免点击开放数据域影响到主域，在主域中建立一个遮罩层级来屏蔽点击事件.</br>
     * 根据自己的需求来设置遮罩的 alpha 值 0~1.</br>
     * 
     */
    private rankingListMask: egret.Shape;

	private getConf(tablename,index,key){
		try {
			return ConstValue.P_CONFIG[tablename][index][key];
		} catch (error) {
			return "";
		}
		
	}

    /**
     * 点击按钮
     * Click the button
     */
    private async onButtonClick(e: egret.TouchEvent) {
        // let openDataContext = wx.getOpenDataContext();
		CommonTools.log("shareAppMessage-------1")
		let sData = CommonTools.getDataJsonStr("gmFunc",1,{gmCmd:"test1v1"});
		ConstValue.P_NET_OBJ.sendData(sData);
        let platform: any = window.platform;
		await platform.shareAppMessage(ConstValue.cacheUserInfo.id+"");
		CommonTools.log("shareAppMessage-------2")

        // if (this.isdisplay) {
        //     this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
        //     this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
        //     this.isdisplay = false;
        //     platform.openDataContext.postMessage({
        //         isDisplay: this.isdisplay,
        //         text: 'hello',
        //         year: (new Date()).getFullYear(),
        //         command: "close"
        //     });
        // } else {
        //     //处理遮罩，避免开放数据域事件影响主域。
        //     this.rankingListMask = new egret.Shape();
        //     this.rankingListMask.graphics.beginFill(0x000000, 1);
        //     this.rankingListMask.graphics.drawRect(0, 0, this.context.stage.width, this.context.stage.height);
        //     this.rankingListMask.graphics.endFill();
        //     this.rankingListMask.alpha = 0.5;
        //     this.rankingListMask.touchEnabled = true;
        //     this.context.addChild(this.rankingListMask);

        //     //简单实现，打开这关闭使用一个按钮。
        //     this.context.addChild(this.btnClose);
        //     //主要示例代码开始
        //     this.bitmap = platform.openDataContext.createDisplayObject(null, this.context.stage.stageWidth, this.context.stage.stageHeight);
        //     this.context.addChild(this.bitmap);
		// 	platform.openDataContext.postMessage({
        //         command: "loadRes"
        //     });
        //     //主域向子域发送自定义消息
        //     platform.openDataContext.postMessage({
        //         isDisplay: this.isdisplay,
        //         text: 'hello',
        //         year: (new Date()).getFullYear(),
        //         command: "open"
        //     });
        //     //主要示例代码结束            
        //     this.isdisplay = true;
        // }
 
    }

	private showNotice(exmlName:string,btnName:string){
		this.curButton = btnName;
		this.maskBg = new eui.Image("bg_ppt_1_png");
		this.maskBg.width = this.context.getStageWidth();
		let scaleDevice = 1334.0/this.context.getStageWidth();
        this.maskBg.height = 750.0/scaleDevice;
		this.context.addChild(this.maskBg);

		this.panelNotice = new eui.Panel();
		this.panelNotice.skinName = exmlName;
        this.panelNotice.title = "Title";
        this.panelNotice.horizontalCenter = 0;
        this.panelNotice.verticalCenter = 0;
        this.context.addChild(this.panelNotice);
		CommonTools.fixFix(this.context,this.panelNotice,1,0,0);
		this.tipsPanel = this.panelNotice;

		CommonButtonHandle.beginTouch(this.panelNotice.getChildByName("btn_close"),this);
		this.panelNotice.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		
		this.handlePanel(this.panelNotice,btnName);
		CommonTools.niceTip(this.panelNotice,1,this);
	}

	private showRoleInfoUI(){
		this.maskBg2 = new eui.Image("mask_layer_png");
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

		this.panelSub = new eui.Panel();
		this.panelSub.skinName = "resource/eui_skins/UserUI/RoleInfoUI.exml";
        this.panelSub.title = "Title";
        this.panelSub.horizontalCenter = 0;
        this.panelSub.verticalCenter = 0;
        this.context.addChild(this.panelSub);
		CommonTools.fixFix(this.context,this.panelSub,1,0,0);
		this.tipsPanel = this.panelSub;

		let lb_life = this.panelSub.getChildByName("lb_life") as eui.Label;
		let lb_boom = this.panelSub.getChildByName("lb_boom") as eui.Label;
		let lb_speed = this.panelSub.getChildByName("lb_speed") as eui.Label;
		let lb_power = this.panelSub.getChildByName("lb_power") as eui.Label;
		let lb_lv = this.panelSub.getChildByName("lb_lv") as eui.Label;
		let lb_exp = this.panelSub.getChildByName("lb_exp") as eui.Label;
		let info_name = this.panelSub.getChildByName("info_name") as eui.Label;
		lb_life.text = this.roleDetailData.life;
		lb_boom.text = this.roleDetailData.cnt;
		lb_speed.text = this.roleDetailData.speed;
		lb_power.text = this.roleDetailData.power;
		lb_lv.text = ConstValue.cacheUserInfo.lv;
		lb_exp.text = ConstValue.cacheUserInfo.curexp;
		info_name.text = ConstValue.cacheUserInfo.name;

		CommonButtonHandle.beginTouch(this.panelSub.getChildByName("btn_close"),this);
		this.panelSub.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonTools.niceTip(this.panelSub,2,this);
		}, this);

		this.bodyAniDown2 = CommonTools.getAnimDraw(RES.getRes("p"+ConstValue.cacheUserInfo.iClass+"_special_json"), RES.getRes("p"+ConstValue.cacheUserInfo.iClass+"_special_png"), "0");
		this.bodyAniDown2.play(-1);
		this.panelSub.addChild(this.bodyAniDown2);
		this.bodyAniDown2.x = 580;
		this.bodyAniDown2.y = 370;
	}

	private showBarrinfoUI(dBarrData){
		this.maskBg2 = new eui.Image("mask_layer_png");
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

		this.panelSub = new eui.Panel();
		this.panelSub.skinName = "resource/eui_skins/UserUI/ViewHistoryPass.exml";
        this.panelSub.title = "Title";
        this.panelSub.horizontalCenter = 0;
        this.panelSub.verticalCenter = 0;
        this.context.addChild(this.panelSub);
		CommonTools.fixFix(this.context,this.panelSub,1,0,0);

		this.panelSub.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonTools.niceTip(this.panelSub,2,this);
		}, this);

		this.panelSub.getChildByName("start_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			HallModule.isNoEnd = true;
			FightingModule.curBarrNo =  parseInt(dBarrData.iBarrierNo);
			let sData_gobarr = CommonTools.getDataJsonStr("C2GGotoBarrier",1,{barrierNo:parseInt(dBarrData.iBarrierNo)});
			ConstValue.P_NET_OBJ.sendData(sData_gobarr);
		}, this);

		let view_barr_title = this.panelSub.getChildByName("view_barr_title") as eui.Label;
		if(parseInt(dBarrData.iBarrierNo) < 10){
			view_barr_title.text = "第 0"+dBarrData.iBarrierNo+" 关";
		}else{
			view_barr_title.text = "第 "+dBarrData.iBarrierNo+" 关";
		}
		let info_1 = this.panelSub.getChildByName("info_1") as eui.Label;
		info_1.text = dBarrData.winRate+"%";
		let info_2 = this.panelSub.getChildByName("info_2") as eui.Label;
		info_2.text = dBarrData.myTime+"s";
		let info_3 = this.panelSub.getChildByName("info_3") as eui.Label;
		info_3.text = dBarrData.serverBestname+" "+ dBarrData.serverBsetTime +" s";
		for(let i=0;i<dBarrData.iStar;i++){
			let star_img = this.panelSub.getChildByName("star_0"+(i+1)) as eui.Image;
			star_img.source = "start_01_png";
		}
	}

	private showWxVsUI(dData){

		this.maskBg2 = new eui.Image("vs_bg_1v1_png");
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

		this.showWxVsPanel = new eui.Panel();
		this.showWxVsPanel.skinName = "resource/eui_skins/UserUI/WxVsWaitUI.exml";
        this.showWxVsPanel.title = "Title";
        this.showWxVsPanel.horizontalCenter = 0;
        this.showWxVsPanel.verticalCenter = 0;
        this.context.addChild(this.showWxVsPanel);
		this.tipsPanel = this.showWxVsPanel;
		CommonTools.fixFix(this.context,this.showWxVsPanel,1,0,0);

		CommonButtonHandle.beginTouch(this.showWxVsPanel.getChildByName("btn_close_wx_vs"),this);
		this.showWxVsPanel.getChildByName("btn_close_wx_vs").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		
		CommonButtonHandle.beginTouch(this.showWxVsPanel.getChildByName("btn_start"),this);
		this.showWxVsPanel.getChildByName("btn_start").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		this.updateWxVsUI(dData);
	}

	private updateWxVsUI(dData){
		let left_online = this.showWxVsPanel.getChildByName("left_online") as eui.Label;
		let left_name = this.showWxVsPanel.getChildByName("left_name") as eui.Label;
		let left_ready = this.showWxVsPanel.getChildByName("left_ready") as eui.Label;
		let left_lv = this.showWxVsPanel.getChildByName("left_lv") as eui.Label;

		let right_online = this.showWxVsPanel.getChildByName("right_online") as eui.Label;
		let right_name = this.showWxVsPanel.getChildByName("right_name") as eui.Label;
		let right_ready = this.showWxVsPanel.getChildByName("right_ready") as eui.Label;
		let right_lv = this.showWxVsPanel.getChildByName("right_lv") as eui.Label;
		
		let btn_start = this.showWxVsPanel.getChildByName("btn_start") as eui.Button;
		let colorMatrix: Array<any> = [
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0.3, 0.6, 0, 0, 0,
                0, 0, 0, 1, 0
            ];
        let filters = new egret.ColorMatrixFilter(colorMatrix);//灰化

		if(dData.lWaitInfo.length == 1){
			left_online.text = dData.lWaitInfo[0].isOnline == 1?"在线" : "等待";
			left_name.text = dData.lWaitInfo[0].name;
			left_ready.text = dData.lWaitInfo[0].isReady == 1?"已准备" : "等待";
			left_lv.text = "Lv."+dData.lWaitInfo[0].iLv;

			if(dData.lWaitInfo[0].rid == ConstValue.cacheUserInfo.id){
				this.isMainRoomer = true;
			}
			btn_start.filters = [filters];
			btn_start.enabled = false;
		}else{
			left_online.text = dData.lWaitInfo[0].isOnline == 1?"在线" : "等待";
			left_name.text = dData.lWaitInfo[0].name;
			left_ready.text = dData.lWaitInfo[0].isReady == 1?"已准备" : "等待";
			left_lv.text = "Lv."+dData.lWaitInfo[0].iLv;

			right_online.text = dData.lWaitInfo[1].isOnline == 1?"在线" : "等待";
			right_name.text = dData.lWaitInfo[1].name;
			right_ready.text = dData.lWaitInfo[1].isReady == 1?"已准备" : "等待";
			right_lv.text = "Lv."+dData.lWaitInfo[1].iLv;

			if(this.isMainRoomer){
				if(dData.lWaitInfo[1].isOnline == 1 && dData.lWaitInfo[1].isReady == 1){
					btn_start.filters = [];
					btn_start.enabled = true;
				}else{
					btn_start.filters = [filters];
					btn_start.enabled = false;
				}
			}else{
				if(dData.lWaitInfo[1].isReady == 1){
					btn_start.filters = [filters];
					btn_start.enabled = false;
					btn_start.label = "就  绪";
				}else{
					btn_start.filters = [];
					btn_start.enabled = true;
					btn_start.label = "准  备";
				}
			}
		}

		if(dData.MapInfo["roleId"] != null){
			this.showWxVsPanel.getChildByName("img_wx_wenhao").visible = false;
			new MapMiniDIYModule(this.showWxVsPanel,dData.MapInfo.bgconf,dData.MapInfo.layerconf,3);
		}
		if(dData.lWaitInfo.length == 1){
			let img_lefthead = this.showWxVsPanel.getChildByName("img_lefthead") as eui.Image;
			if(dData.lWaitInfo[0].head != "")img_lefthead.source = dData.lWaitInfo[0].head;
		}
		if(dData.lWaitInfo.length == 2){
			let img_lefthead = this.showWxVsPanel.getChildByName("img_lefthead") as eui.Image;
			if(dData.lWaitInfo[0].head != "")img_lefthead.source = dData.lWaitInfo[0].head;
			let img_righthead = this.showWxVsPanel.getChildByName("img_righthead") as eui.Image;
			if(dData.lWaitInfo[1].head != "")img_righthead.source = dData.lWaitInfo[1].head;
		}
		
	}

	private showEditUI(btnName:string){
		this.panelSub = new eui.Panel();
		this.panelSub.skinName = "resource/eui_skins/UserUI/EditUI.exml";
        this.panelSub.title = "Title";
        this.panelSub.horizontalCenter = 0;
        this.panelSub.verticalCenter = 0;
        this.context.addChild(this.panelSub);
		this.tipsPanel = this.panelSub;

		CommonButtonHandle.beginTouch(this.panelSub.getChildByName("btn_close_edit"),this);
		this.panelSub.getChildByName("btn_close_edit").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		CommonButtonHandle.beginTouch(this.panelSub.getChildByName("btn_confirm_modify"),this);
		this.panelSub.getChildByName("btn_confirm_modify").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

		this.panelSub.getChildByName("lb_edit_title").text = ConstValue.P_MODIFY_TITLE;
		this.sCurModifyBtn = btnName;
		if (btnName == "modify_nichen_btn"){
			this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_NICHENG;
		}else if (btnName == "modify_pwd_btn"){

			this.panelSub.getChildByName("lb_old_pwd").text = ConstValue.P_MODIFY_OLD_PWD;
			this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_NEW_PWD;
			this.panelSub.getChildByName("lb_new_pwd").text = ConstValue.P_MODIFY_NEW_PWD;

			this.panelSub.getChildByName("lb_old_pwd").visible = true;
			this.panelSub.getChildByName("bg_old").visible = true;
			this.panelSub.getChildByName("account_lb_old").visible = true;
			this.panelSub.getChildByName("account_lb_old").displayAsPassword = true;

			this.panelSub.getChildByName("account_lb_txt").displayAsPassword = true;

			this.panelSub.getChildByName("lb_new_pwd").visible = true;
			this.panelSub.getChildByName("bg_new").visible = true;
			this.panelSub.getChildByName("account_lb_new").visible = true;
			this.panelSub.getChildByName("account_lb_new").displayAsPassword = true;

		}else if (btnName == "modify_realname_btn"){
			this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_REALNAME;
		}else if (btnName == "modify_wx_btn"){
			this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_WX;
		}else if (btnName == "modify_beget_btn"){
			this.panelSub.getChildByName("lb_desc").text = ConstValue.P_MODIFY_BEGET;
		}else if (btnName == "scroll_notify"){
			this.panelSub.getChildByName("lb_edit_title").text = "gm";
			this.panelSub.getChildByName("lb_desc").text = "输入命令：";
		}else if (btnName == "hall_question_btn"){
			this.panelSub.getChildByName("lb_edit_title").text = "反馈";
			this.panelSub.getChildByName("lb_desc").text = "问题描述：";
		}

	}

	private showChoiceUI(){
		if(this.choicePanel == null){
			this.choicePanel = new eui.Panel();
			this.choicePanel.skinName = "resource/eui_skins/UserUI/OptionUI.exml";
			this.choicePanel.title = "Title";
			this.context.addChild(this.choicePanel);

			let x = this.panel.getChildByName("btn_choice").x ;
			let y = this.panel.getChildByName("btn_choice").y ;
			this.choicePanel.x = x - 50;
			this.choicePanel.y = y + 50;
		}else{
			this.context.removeChild(this.choicePanel);
			this.choicePanel = null;
		}
	}

	private handleSkill(group,parG){
		let cnt = 0;
		for(let i in this.skillData){
			let obj = this.skillData[i];
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/SkillGroup.exml";
			panelT.name = "p_"+i;
			panelT.x = 10;
			panelT.y = 10 + cnt*panelT.height;
			group.addChild(panelT);
			let groupT = panelT.getChildByName("group_1") as eui.Group;

			let skill_icon = groupT.getChildByName("skill_icon") as eui.Image;
			skill_icon.source = ConstValue.skill_conf[i].icon;
			let skill_name = groupT.getChildByName("skill_name") as eui.Label;
			skill_name.text = obj.name;
			let skill_lv = groupT.getChildByName("skill_lv") as eui.Label;
			skill_lv.text = "Lv."+obj.curLv+"/"+obj.maxLv;
			let skill_desc = groupT.getChildByName("skill_desc") as eui.Label;
			skill_desc.text = obj.desc;
			let skill_desc2 = groupT.getChildByName("skill_desc2") as eui.Label;
			skill_desc2.text = "下一级 "+ obj.nextdesc;
			let skill_tip = groupT.getChildByName("skill_tip") as eui.Label;
			let skill_pay = groupT.getChildByName("skill_pay") as eui.Image;
			let skill_cost = groupT.getChildByName("skill_cost") as eui.Label;
			let skill_learn = groupT.getChildByName("skill_learn") as eui.Label;
			let skill_btn = groupT.getChildByName("skill_btn") as eui.Image;
			if(obj.isOpen == 1){
				skill_tip.visible = false;
				if(obj.costType == 1){
				}else if(obj.costType == 2){
					skill_pay.source = "mini_zuanshi";
				}else if(obj.costType == 3){
					skill_pay.source = "mini_tv_png";
				}
				skill_cost.text = obj.cost;
				CommonButtonHandle.beginTouch(skill_learn,this);
				if(obj.curLv>0){
					skill_learn.text = "升级";
					skill_learn.strokeColor = 0xE76C47;
				}
				skill_learn.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
					let sData_skill = CommonTools.getDataJsonStr("C2G_Upgrade",1,{SkillID:parseInt(i)});
					ConstValue.P_NET_OBJ.sendData(sData_skill);
				}, this);
			}else{
				skill_pay.visible = false;
				skill_cost.visible = false;
				skill_learn.visible = false;
				skill_btn.visible = false;
			}
			cnt ++;
		}
	}

	private handleRank(group,parG,type){
		let bgMap = {1:{"matchbg":"rank_select_02_png","lvbg":"rank_select_01_png","barrbg":"rank_select_01_png"}
		,2:{"matchbg":"rank_select_01_png","lvbg":"rank_select_02_png","barrbg":"rank_select_01_png"}
		,3:{"matchbg":"rank_select_01_png","lvbg":"rank_select_01_png","barrbg":"rank_select_02_png"}}

		let strokeMap = {1:{"matchsc":0xCAE9FF,"matchtc":0x7479DB,"lvsc":0x7B86BB,"lvtc":0xA0B3DC,"barrsc":0x7B86BB,"barrtc":0xA0B3DC}
		,2:{"matchsc":0x7B86BB,"matchtc":0xA0B3DC,"lvsc":0xCAE9FF,"lvtc":0x7479DB,"barrsc":0x7B86BB,"barrtc":0xA0B3DC}
		,3:{"matchsc":0x7B86BB,"matchtc":0xA0B3DC,"lvsc":0x7B86BB,"lvtc":0xA0B3DC,"barrsc":0xCAE9FF,"barrtc":0x7479DB}}

		let img = parG.getChildByName("match_rank_bg") as eui.Image;
		img.source = RES.getRes(bgMap[type].matchbg);

		let img2 = parG.getChildByName("lv_rank_bg") as eui.Image;
		img2.source = RES.getRes(bgMap[type].lvbg);

		let img3 = parG.getChildByName("barrier_rank_bg") as eui.Image;
		img3.source = RES.getRes(bgMap[type].barrbg);

		let lbx = parG.getChildByName("match_rank_lb") as eui.Label;
		lbx.stroke = 3;
		lbx.strokeColor = strokeMap[type].matchsc;
		lbx.textColor = strokeMap[type].matchtc;

		let lbx2 = parG.getChildByName("lv_rank_lb") as eui.Label;
		lbx2.stroke = 3;
		lbx2.strokeColor = strokeMap[type].lvsc;
		lbx2.textColor = strokeMap[type].lvtc;

		let lbx3 = parG.getChildByName("barrier_rank_lb") as eui.Label;
		lbx3.stroke = 3;
		lbx3.strokeColor = strokeMap[type].barrsc;
		lbx3.textColor = strokeMap[type].barrtc;

		for(let i in this.lRank){
			let arr = this.lRank[i];
			let ii = parseInt(i);
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/RankGroup.exml";
			panelT.name = "p_"+i;
			panelT.y = ii*panelT.height ;
			group.addChild(panelT);
			let groupT = panelT.getChildByName("group_1") as eui.Group;
			let rank = groupT.getChildByName("rank") as eui.Label;
			rank.text = (ii+1)+"";
			let name = groupT.getChildByName("name") as eui.Label;
			name.text = arr[1];
			let head = groupT.getChildByName("head") as eui.Image;
			if(arr[2] != "")head.source = arr[2];
			let desc = groupT.getChildByName("desc") as eui.Label;
			let desc2 = groupT.getChildByName("desc2") as eui.Label;
			let lb = groupT.getChildByName("lb") as eui.Label;
			let lb2 = groupT.getChildByName("lb2") as eui.Label;
			if(type == 1){//匹配
				desc.text = arr[3];
				desc2.text = arr[4]+"%";
			}else if(type == 2){//等级
				lb2.visible = false;
				desc2.visible = false;
				desc.text = arr[3];
				lb.text = "等级 ：";
			}else if(type == 3){//通关
				lb2.visible = false;
				desc2.visible = false;
				desc.text = arr[3];
				lb.text = "关卡 ：";
			}
			
		}

		let rankG = parG.getChildByName("myrankG") as eui.Group;
		let rank = rankG.getChildByName("myrank") as eui.Label;
		rank.text = this.sMyRankDesc;
		let name = rankG.getChildByName("name") as eui.Label;
		name.text = this.lMyRank[1];
		let head = rankG.getChildByName("head") as eui.Image;
		if(ConstValue.cacheUserInfo.headPic != "")head.source = ConstValue.cacheUserInfo.headPic;
		let desc = rankG.getChildByName("desc") as eui.Label;
		let desc2 = rankG.getChildByName("desc2") as eui.Label;
		let lb = rankG.getChildByName("lb") as eui.Label;
		let lb2 = rankG.getChildByName("lb2") as eui.Label;
		if(type == 1){
			lb2.visible = true;
			desc2.visible = true;
			desc.text = this.lMyRank[3];
			desc2.text = this.lMyRank[4]+"%";
			lb.text = "胜场 ：";
		}else if(type == 2){
			lb2.visible = false;
			desc2.visible = false;
			desc.text = this.lMyRank[3];
			lb.text = "等级 ：";
		}else if(type == 3){
			lb2.visible = false;
			desc2.visible = false;
			desc.text = this.lMyRank[3];
			lb.text = "关卡 ：";
		}
		
	}

	private showAD(videoIndx){
		/*
		ConstValue.videoIndx = videoIndx;
		// 用户触发广告后，显示激励视频广告
		ConstValue.videoAdOBJ.show().catch(() => {
			// 失败重试
			ConstValue.videoAdOBJ.load()
				.then(() => ConstValue.videoAdOBJ.show())
				.catch(err => {
					console.log('激励视频 广告显示失败')
				})
		})
		*/
	}

	private handleLvReward(){
		let parG = this.panelNotice.getChildByName("fighting_parent") as eui.Group;
		let videoG = this.panelNotice.getChildByName("video_g") as eui.Group;
		if(ConstValue.videoIndx != 1){
			CommonButtonHandle.beginTouch(videoG,this);
			videoG.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				this.moveLvGet = false;
				this.showAD(1);
			}, this);
		}
		let scroll = parG.getChildByName("scroll") as eui.Scroller;
		let group = scroll.getChildByName("scroll_group")as eui.Group;
		group.removeChildren();
		let cnt = 0;
		for(let i in this.lvRewardData){
			cnt ++;
		}
		let panelT = new eui.Panel();
		panelT.skinName = "resource/eui_skins/UserUI/LvGetProGroup.exml";
		panelT.name = "p_pro";
		panelT.x = 1.89;
		panelT.y = 198.4;
		panelT.width = 130 + 190*(cnt - 1);
		group.addChild(panelT);

		let groupT = panelT.getChildByName("group_1") as eui.Group;
		let img_slot = groupT.getChildByName("img_slot") as eui.Image;
		img_slot.width = 130 + 190*(cnt - 1);

		let img_pro = groupT.getChildByName("img_pro") as eui.Image;
		img_pro.width = 130 + 190*(ConstValue.cacheUserInfo.lv - 1);

		cnt = 0;
		let scrollX = 0;
		let idx = 1;
		for(let i in this.lvRewardData){
			// CommonTools.log("lvRewardData-------1 "+ i)
			let obj = this.lvRewardData[i];
			let ii = idx;
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/LvGetPointGroup.exml";
			panelT.name = "p_"+i;
			panelT.x = 34.5 + (ii-1)*(180+5);
			if(ConstValue.cacheUserInfo.lv == ii)scrollX = panelT.x;
			panelT.y = -6.44;
			group.addChild(panelT);
			cnt ++;
			let groupT = panelT.getChildByName("group_1") as eui.Group;
			let lb_lv = groupT.getChildByName("lb_lv") as eui.Label;
			lb_lv.text = "Lv."+obj.iLv;
			let img_role = groupT.getChildByName("img_role") as eui.Image;
			let img_item = groupT.getChildByName("img_item") as eui.Image;
			let rw_num = groupT.getChildByName("rw_num") as eui.Label;
			let img_select = groupT.getChildByName("img_select") as eui.Image;
			if(obj.iStatus == 0){
				img_select.visible = false;
			}else if(obj.iStatus == 1){
				img_select.source = "sevent_get_png";
			}
			rw_num.text = this.getConf("ItemData",obj.id,"name")+"x" + obj.rewardNun;
			img_item.source = this.getConf("ItemData",obj.id,"res") + "_png";
			// panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            //     if(obj.iStatus != 1)return;
			// 	this.moveLvGet = false;
			// 	let sData = CommonTools.getDataJsonStr("getUpgradeReward",1,{iLv:obj.iLv});
			// 	ConstValue.P_NET_OBJ.sendData(sData);
            // }, this);
			idx ++;

		}
		if(this.moveLvGet)scroll.viewport.scrollH = scrollX;
	}

	private updateRoleClass(iSelect){
		let lb_life = this.panelNotice.getChildByName("lb_life") as eui.Label;
		let lb_boom = this.panelNotice.getChildByName("lb_boom") as eui.Label;
		let lb_speed = this.panelNotice.getChildByName("lb_speed") as eui.Label;
		let lb_power = this.panelNotice.getChildByName("lb_power") as eui.Label;
		let lb_name = this.panelNotice.getChildByName("lb_name") as eui.Label;
		let img_buy_bg = this.panelNotice.getChildByName("img_buy_bg") as eui.Image;
		let btn_gold = this.panelNotice.getChildByName("btn_gold") as eui.Button;
		let lb_gold = this.panelNotice.getChildByName("lb_gold") as eui.Label;
		let btn_fight = this.panelNotice.getChildByName("btn_fight") as eui.Button;
		let btn_buy = this.panelNotice.getChildByName("btn_buy") as eui.Button;
		let btn_buy_lb = this.panelNotice.getChildByName("btn_buy_lb") as eui.Label;
		let lb_attr = this.panelNotice.getChildByName("lb_attr") as eui.Label;
		let role_bg = this.panelNotice.getChildByName("select_role_bg") as eui.Image;
		role_bg.source = ConstValue.role_select_bg[iSelect];

		let Obj = this.roleClassData[iSelect];
		lb_life.text = Obj.life;
		lb_boom.text = Obj.cnt;
		lb_speed.text = Obj.speed;
		lb_power.text = Obj.power;
		lb_attr.text = Obj.desc;
		lb_name.text = Obj.name;

		if(Obj.isOwn == 1){
			img_buy_bg.visible = false;
			btn_gold.visible = false;
			// lb_gold.visible = false;
			btn_buy.visible = false;
			btn_buy_lb.visible = false;
			btn_fight.visible = true;
			if(Obj.isUse == 1){
				btn_fight.label = "出战中";
			}else{
				btn_fight.label = "出 战";
			}
		}else{
			btn_fight.visible = false;
			img_buy_bg.visible = true;
			btn_gold.visible = true;
			// lb_gold.visible = true;
			btn_buy.visible = true;
			btn_buy_lb.visible = true;
			// lb_gold.text = Obj.price;
		}
		if(this.bodyAniDown != null){
			this.panelNotice.removeChild(this.bodyAniDown);
			this.bodyAniDown = null;
		}
		this.bodyAniDown = CommonTools.getAnimDraw(RES.getRes("p"+Obj.iClass+"_special_json"), RES.getRes("p"+Obj.iClass+"_special_png"), "0");
		this.bodyAniDown.play(-1);
		this.panelNotice.addChild(this.bodyAniDown);
		this.bodyAniDown.x = 570;
		this.bodyAniDown.y = 295;
		// this.bodyAniDown.x = 660;
		// this.bodyAniDown.y = 520;

		let lbCoin = this.panelNotice.getChildByName("coin_num_lb") as eui.Label;
		lbCoin.text = ConstValue.cacheUserInfo.coin;

		let lbZuan = this.panelNotice.getChildByName("zuan_num_lb") as eui.Label;
		lbZuan.text = ConstValue.cacheUserInfo.diamond;

	}

	private handleRoleClass(group,parG){
		for(let i in this.roleClassData){
			let classObj = this.roleClassData[i];
			let ii = parseInt(i);
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/RoleSelectUIGroup.exml";
			panelT.name = "p_"+i;
			panelT.y = ii*108;//125
			group.addChild(panelT);
			let groupT = panelT.getChildByName("group_1") as eui.Group;
			let role_name = groupT.getChildByName("role_name") as eui.Label;
			role_name.text = classObj.name;
			let img_selected = groupT.getChildByName("img_selected") as eui.Image;
			if(ii > 0)img_selected.visible = false;
			let role_head = groupT.getChildByName("role_head") as eui.Image;
			role_head.source = ConstValue.role_select_img[i];

			panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
                let iChilds = group.numChildren;
                for(let i=0;i<iChilds;i++){
                    let childObj = group.getChildByName("p_"+i) as eui.Panel;
					let groupObj = childObj.getChildByName("group_1") as eui.Group;
                    let imgObj =  groupObj.getChildByName("img_selected") as eui.Image;
                    imgObj.visible = false;
                }
				img_selected.visible = true;
				this.roleSelectIdx = i;
				this.updateRoleClass(i);
            }, this);
		}	
		this.updateRoleClass("0");
		

		let btn_fight = this.panelNotice.getChildByName("btn_fight") as eui.Button;
		let btn_buy_lb = this.panelNotice.getChildByName("btn_buy_lb") as eui.Label;
		btn_fight.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			let Obj = this.roleClassData[this.roleSelectIdx];
			let sData = CommonTools.getDataJsonStr("useClass",1,{iClass:Obj.iClass});
			ConstValue.P_NET_OBJ.sendData(sData);
			ConstValue.cacheUserInfo.iClass = Obj.iClass;
		}, this);

		btn_buy_lb.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			
			let Obj = this.roleClassData[this.roleSelectIdx];
			this.buyClass = Obj.iClass;
			let sDataBuy = CommonTools.getDataJsonStr("playVidioBefore",1,{iNo:Obj.iClass,iType:2,pageType:0});
			ConstValue.P_NET_OBJ.sendData(sDataBuy);
			this.showAD(4);

			// let sData = CommonTools.getDataJsonStr("buyClass",1,{iClass:Obj.iClass});
			// ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

	}

	private handleSeventDay(){
		this.initAD();
		if(ConstValue.videoIndx != 2){
			let videoG = this.panelNotice.getChildByName("video_g") as eui.Group;
			CommonButtonHandle.beginTouch(videoG,this);
			videoG.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				this.showAD(2);
			}, this);
		}
		for(let i=1;i<=7;i++){
			if(this.seventCur == 0 && this.seventData[i.toString()].bGet == 0){
				this.seventCur = i;
			}
			if(this.seventCur == i && this.seventData[i.toString()].bGet == 1){
				this.seventGetState = true;
			}

			let iconImg = this.panelNotice.getChildByName("item_icon_"+i) as eui.Image;
			iconImg.source = this.getConf("ItemData",this.seventData[i.toString()].itemNo,"res") + "_png";

			let itemName = this.panelNotice.getChildByName("lb_name_"+i) as eui.Label;
			itemName.text = this.getConf("ItemData",this.seventData[i.toString()].itemNo,"name");

			let stateImg = this.panelNotice.getChildByName("item_state_"+i) as eui.Image;
			if(this.seventData[i.toString()].bGet == 0){
				stateImg.source = "sevent_get_png";
			}else{
				stateImg.source = "sevent_got_png";
			}

			// this.panelNotice.getChildByName("item_lb_"+i).addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			// 	let name = e.target.name;
			// 	let idx = parseInt(name.replace("item_lb_",""));
			// 	if(idx > this.seventCur){
			// 		CommonTools.addCommonTips(this.tipsPanel,"请领取第"+this.seventCur+"天奖励！");
			// 	}else{
			// 		if(!this.seventGetState){
			// 			let sData = CommonTools.getDataJsonStr("getSeventDayReward",1,{});
			// 			ConstValue.P_NET_OBJ.sendData(sData);
			// 		}else{
			// 			CommonTools.addCommonTips(this.tipsPanel,"已领取当天奖励");
			// 		}
			// 	}
			// }, this);
		}
	}

	private handleGetMyMaps(){
        let group = this.panelNotice.getChildByName("fighting_parent")
            .getChildByName("scroll").getChildByName("scroll_group") as eui.Group;

        let i = 0;
        for(let key in this.selectMapData){
            let obj = this.selectMapData[key];
            
            let panelT = new eui.Panel();
            panelT.skinName = "resource/eui_skins/UserUI/MapViewGroup.exml";
            panelT.name = "p_"+i;
            panelT.x += 40;
            panelT.y += 50+10*i+255*i; 
            group.addChild(panelT);

            panelT.getChildByName("view_fight_btn").visible = false;
            panelT.getChildByName("view_change_btn").visible = false;

            let panelGroup = panelT.getChildByName("group_1") as eui.Group;
            let lb_title = panelGroup.getChildByName("lb_title") as eui.Label;
            lb_title.text = obj.mapName;
            let lb_author = panelGroup.getChildByName("lb_author") as eui.Label;
            lb_author.text = ConstValue.cacheUserInfo.name;
            let lb_sign = panelGroup.getChildByName("lb_sign") as eui.Label;
            lb_sign.text = obj.mapSign;

			let btn_add = panelT.getChildByName("view_add_btn") as eui.Button;
			btn_add.label = "邀 请";
            btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				this.closeNice();
                this.selectKey = key;
				let sData_friend_pvp = CommonTools.getDataJsonStr("open1V1RoomByMap",1,{mapID:parseInt(this.selectKey)});
				ConstValue.P_NET_OBJ.sendData(sData_friend_pvp);
            }, this);  

            new MapMiniDIYModule(panelT,obj.bgconf,obj.layerconf,2);
            i++;
        } 

	}

	private handleSelectMap(){
		this.panelNotice.getChildByName("btn_random").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			this.panelNotice.getChildByName("img_left").visible = true;
			this.panelNotice.getChildByName("img_right").visible = false;
		}, this);

		this.panelNotice.getChildByName("btn_mymap").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			this.panelNotice.getChildByName("img_left").visible = false;
			this.panelNotice.getChildByName("img_right").visible = true;
		}, this);

		this.panelNotice.getChildByName("btn_certain_map").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			if(this.panelNotice.getChildByName("img_left").visible){
				let sData_friend_pvp = CommonTools.getDataJsonStr("open1V1Room",1,{});
				ConstValue.P_NET_OBJ.sendData(sData_friend_pvp);
			}else{
				let sDataMymap = CommonTools.getDataJsonStr("getMyMaps",1,{});
                ConstValue.P_NET_OBJ.sendData(sDataMymap);
			}
		}, this);
	}

	private handleNoEnd(group,parG){
		let firstX = 25;
		let firstY = 128;
		let i = 1;
		let starDesc = parG.getChildByName("lb_star_total") as eui.Label;
		let starBg = parG.getChildByName("lb_bg_total") as eui.Image;
		let starKuang = parG.getChildByName("lb_bg_kuang") as eui.Image;
		starDesc.text = "获得"+this.barrData.nowstar+"/"+this.barrData.totalstar+"颗星";
		let pro = this.barrData.nowstar / this.barrData.totalstar*1.0;
		starBg.width = starKuang.width*pro;
		let guankaLayer = parG.getChildByName("guanka_layer") as eui.Label;
		guankaLayer.text = "第"+this.barrLayer+"层";

		for(let idx in this.barrData.barrierList){
			let obj = this.barrData.barrierList[idx];
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/noEndBarrStartGroup.exml";
			panelT.name = "p_"+i;
			let column = i%6 == 0? 6 : i%6;
			let row = 0;
			if(i%6==0){
				row = i/6.0;
			}else{
				row = i/6.0 + 1;
			}
			panelT.x = firstX + 165*(column - 1);
			panelT.y = firstY + 120*(Math.floor(row - 1));
			// panelT.y = firstY;
			group.addChild(panelT);
			let groupT = panelT.getChildByName("group_1") as eui.Group;
			let num_lb = groupT.getChildByName("num_lb") as eui.Label;
			num_lb.text = obj.barrierNo + "";
			if(obj.isLock == 1){
				num_lb.visible = false;
			}else{
				let barr_lock = groupT.getChildByName("barr_lock") as eui.Image;
				barr_lock.visible = false;
			}
			for(let iStar=1;iStar<=obj.star;iStar++){
				if(iStar>3)break;
				let imgStar = groupT.getChildByName("star_0"+iStar) as eui.Image;
				imgStar.source = "barr_pass_start_png";
			}

			panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				if(obj.isLock == 1){
					CommonTools.addCommonTips(this.tipsPanel,"暂未解锁！");
					return;
				}
				if(HallModule.curGuide == 5){
					if(obj.barrierNo != 1){
						CommonTools.addCommonTips(this.tipsPanel,"请按引导指示！");
						return;
					}
					HallModule.curGuide = 0;
					let sData = CommonTools.getDataJsonStr("getNextGuild",1,{});
					ConstValue.P_NET_OBJ.sendData(sData);
				}
				let sData_gobarr = CommonTools.getDataJsonStr("getBarrierInfo",1,{barrierNo:obj.barrierNo});
				ConstValue.P_NET_OBJ.sendData(sData_gobarr);
            }, this);

			i++;
		}

		if(this.fixGuide5){
			this.fixGuide5 = false;
			// new GuideModule(this.context,5,this.panel,this.panelNotice);
		}

	}

	private updateShopUI(clickFlag){
		let scrollShop = this.panelNotice.getChildByName("res_scroller") as eui.Scroller;
		scrollShop.viewport.scrollV = 0;
		let groupShop = scrollShop.getChildByName("res_group") as eui.Group;
		groupShop.removeChildren();
		let iCount = 0;
		let t_shi = this.panelNotice.getChildByName("t_shi") as eui.Label;
		let t_zhuang = this.panelNotice.getChildByName("t_zhuang") as eui.Label;
		let t_pao1 = this.panelNotice.getChildByName("t_pao1") as eui.Label;
		let t_pao2 = this.panelNotice.getChildByName("t_pao2") as eui.Label;
		let t_te = this.panelNotice.getChildByName("t_te") as eui.Label;
		let t_xiao = this.panelNotice.getChildByName("t_xiao") as eui.Label;
		let t_dao = this.panelNotice.getChildByName("t_dao") as eui.Label;
		let t_ju = this.panelNotice.getChildByName("t_ju") as eui.Label;

		if(this.shopUIType == 1){
			iCount = this.dShopOrBagData.lShopInfo.length;
		}else{
			iCount = this.dShopOrBagData.lItmeInfo.length;
			if(this.shopItemClickName != ""){
				let idx = parseInt(this.shopItemClickName.replace("shop_item_click",""));
				if(idx >= iCount){
					clickFlag = true;
					this.shopItemClickName = "";
				}
			}
		}
		for(let i=0;i<iCount;i++){
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/ShopItemGroup.exml";
			panelT.name = "p_"+i;
			let xOff = 5;
			if(this.shopUIType == 2)xOff = 20;
			panelT.x = xOff+ 180*(i%3) + 5*(i%3);
			panelT.y = 20+ 230*(Math.floor(i/3)) + 20*(Math.floor(i/3));
			groupShop.addChild(panelT);
			let groupT = panelT.getChildByName("group_1") as eui.Group;
			let ttt = groupT.getChildByName("shop_item_bg") as eui.Image;
			let payLogo = groupT.getChildByName("shop_item_pay") as eui.Image;
			let img_item = groupT.getChildByName("shop_item_icon") as eui.Image;
			let labelClick = groupT.getChildByName("shop_item_click") as eui.Label;
			labelClick.name = "shop_item_click" + i;
			labelClick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

			let labelName = groupT.getChildByName("shop_item_name") as eui.Label;
			let labelMoney = groupT.getChildByName("shop_item_money") as eui.Label;
			let shop_item_pay = groupT.getChildByName("shop_item_pay") as eui.Image;
			if(this.shopUIType == 1){
				// img_item.source = this.dShopOrBagData.lShopInfo[i].sRes + "_png";
				// labelName.text = this.dShopOrBagData.lShopInfo[i].sName;
				img_item.source = this.getConf("shopData",this.dShopOrBagData.lShopInfo[i].iNo.toString(),"res") + "_png";
				labelName.text = this.getConf("shopData",this.dShopOrBagData.lShopInfo[i].iNo.toString(),"name");
				let moneyText = "";
				if(this.dShopOrBagData.lShopInfo[i].payType == 1){
					moneyText = this.dShopOrBagData.lShopInfo[i].NeedCoin;
				}else if(this.dShopOrBagData.lShopInfo[i].payType == 2){
					moneyText = this.dShopOrBagData.lShopInfo[i].NeedDiamond;
					shop_item_pay.source = "mini_zuanshi";
				}else if(this.dShopOrBagData.lShopInfo[i].payType == 3){
					moneyText = this.dShopOrBagData.lShopInfo[i].NeedADTime;
					shop_item_pay.source = "mini_tv_png";
				}
				labelMoney.text = moneyText;
				if(i == 0){
					ttt.source = "shop_item_yes_png";
					if(clickFlag)this.clickShopItem(labelClick.name);
				}
			}else{
				payLogo.visible = false;
				// img_item.source = this.dShopOrBagData.lItmeInfo[i].sRes + "_png";
				// labelName.text = this.dShopOrBagData.lItmeInfo[i].sName;
				img_item.source = this.getConf("ItemData",this.dShopOrBagData.lItmeInfo[i].iNo.toString(),"res") + "_png";
				labelName.text = this.getConf("ItemData",this.dShopOrBagData.lItmeInfo[i].iNo.toString(),"name");
				labelMoney.text = "x " +this.dShopOrBagData.lItmeInfo[i].iNum;
				let ttt = groupT.getChildByName("shop_item_bg") as eui.Image;
				let tttName = groupT.getChildByName("shop_item_name") as eui.Label;
				tttName.y -= 5;
				if(i == 0){
					ttt.source = "bag_item_yes_png";
					if(clickFlag)this.clickShopItem(labelClick.name);
				}else{
					ttt.source = "bag_item_not_png";
				}
			}
		}
	}

	private handlePanel(panelCtx:eui.Panel,btnName:string){
		switch(btnName){

			case "btn_skill":
				let parentskill = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scrollskill = parentskill.getChildByName("scroll") as eui.Scroller;
				scrollskill.viewport.scrollV = 0;
				let groupskill = scrollskill.getChildByName("scroll_group")as eui.Group;
				groupskill.removeChildren();
				parentskill.getChildByName("btn_tip").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(parentskill.getChildByName("btn_tip"),this);
				this.handleSkill(groupskill,parentskill);
				break;

			case "btn_rank":
				let parent = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scroll = parent.getChildByName("scroll") as eui.Scroller;
				scroll.viewport.scrollV = 0;
				let group = scroll.getChildByName("scroll_group")as eui.Group;
				group.removeChildren();

				parent.getChildByName("all_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(parent.getChildByName("all_rank_lb"),this);

				parent.getChildByName("friend_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(parent.getChildByName("friend_rank_lb"),this);

				parent.getChildByName("match_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(parent.getChildByName("match_rank_lb"),this);

				parent.getChildByName("lv_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(parent.getChildByName("lv_rank_lb"),this);

				parent.getChildByName("barrier_rank_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(parent.getChildByName("barrier_rank_lb"),this);

				this.handleRank(group,parent,3);
				break;

			case "all_rank_lb":
				let parent_all = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scroll_all = parent_all.getChildByName("scroll") as eui.Scroller;
				scroll_all.viewport.scrollV = 0;
				let group_all = scroll_all.getChildByName("scroll_group")as eui.Group;
				group_all.removeChildren();

				parent_all.getChildByName("all_rank_bg").visible = true;
				parent_all.getChildByName("friend_rank_bg").visible = false;

				this.handleRank(group_all,parent_all,3);
				break;

			case "friend_rank_lb":
				let parent_friend = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scroll_friend = parent_friend.getChildByName("scroll") as eui.Scroller;
				scroll_friend.viewport.scrollV = 0;
				let group_friend = scroll_friend.getChildByName("scroll_group")as eui.Group;
				group_friend.removeChildren();

				parent_friend.getChildByName("all_rank_bg").visible = false;
				parent_friend.getChildByName("friend_rank_bg").visible = true;
				break;
			
			case "match_rank_lb":
			case "getTotalPvpRank":
				let parent_match = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scroll_match = parent_match.getChildByName("scroll") as eui.Scroller;
				scroll_match.viewport.scrollV = 0;
				let group_match = scroll_match.getChildByName("scroll_group")as eui.Group;
				group_match.removeChildren();

				this.handleRank(group_match,parent_match,1);
				break;

			case "lv_rank_lb":
			case "getTotalLvRank":
				let parent_lv = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scroll_lv = parent_lv.getChildByName("scroll") as eui.Scroller;
				scroll_lv.viewport.scrollV = 0;
				let group_lv = scroll_lv.getChildByName("scroll_group")as eui.Group;
				group_lv.removeChildren();

				this.handleRank(group_lv,parent_lv,2);
				break;

			case "barrier_rank_lb":
			case "getTotalGuankaRank":
				let parent_barr = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scroll_barr = parent_barr.getChildByName("scroll") as eui.Scroller;
				scroll_barr.viewport.scrollV = 0;
				let group_barr = scroll_barr.getChildByName("scroll_group")as eui.Group;
				group_barr.removeChildren();

				this.handleRank(group_barr,parent_barr,3);
				break;

			case "btn_map_shop":
			case "btn_map_bag":
				this.panelNotice.getChildByName("btn_one_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				this.panelNotice.getChildByName("btn_two_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				this.panelNotice.getChildByName("btn_three_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				this.panelNotice.getChildByName("btn_four_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(this.panelNotice.getChildByName("btn_buy"),this);
				this.panelNotice.getChildByName("btn_buy").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				this.updateShopUI(true);
				break;

			case "btn_noend_pve":
				let groupNoEnd = panelCtx.getChildByName("fighting_parent") as eui.Group;
				groupNoEnd.removeChildren();
				panelCtx.getChildByName("noend_tip").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(panelCtx.getChildByName("noend_tip"),this);
				panelCtx.getChildByName("btn_left").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
					if(this.barrLayer == 1){
						CommonTools.addCommonTips(this.tipsPanel,"当前为首页关卡");
						return;
					}
					this.barrLayer--;
					let sData_noend = CommonTools.getDataJsonStr("C2GOpenWujinUI",1,{diffLevel:this.barrLayer});
					ConstValue.P_NET_OBJ.sendData(sData_noend);
				}, this);

				panelCtx.getChildByName("btn_right").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
					if(this.barrLayer + 1 > this.barrData.totallayer){
						CommonTools.addCommonTips(this.tipsPanel,"当前为尾页关卡");
						return;
					}
					this.barrLayer++;
					let sData_noend = CommonTools.getDataJsonStr("C2GOpenWujinUI",1,{diffLevel:this.barrLayer});
					ConstValue.P_NET_OBJ.sendData(sData_noend);
				}, this);
				this.handleNoEnd(groupNoEnd,panelCtx);
			 	break;

			case "btn_setting":
				if(egret.localStorage.getItem("noVolume") == "1"){
					this.panelNotice.getChildByName("img_left").visible = false;
					this.panelNotice.getChildByName("img_right").visible = true;
				}else{
					if(ConstValue.musicOpen){
						this.panelNotice.getChildByName("img_left").visible = true;
						this.panelNotice.getChildByName("img_right").visible = false;
					}else{
						this.panelNotice.getChildByName("img_left").visible = false;
						this.panelNotice.getChildByName("img_right").visible = true;
					}
				}
				
				this.panelNotice.getChildByName("btn_open_ms").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
					this.panelNotice.getChildByName("img_left").visible = true;
					this.panelNotice.getChildByName("img_right").visible = false;
					ConstValue.musicOpen = true;
					egret.localStorage.setItem("noVolume","0");
					// CommonAudioHandle.setVolume(0.6);
					CommonAudioHandle.play("mainmenu_mp3",0);
					
            	}, this);
				this.panelNotice.getChildByName("btn_close_ms").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
					this.panelNotice.getChildByName("img_left").visible = false;
					this.panelNotice.getChildByName("img_right").visible = true;
					ConstValue.musicOpen = false;
					egret.localStorage.setItem("noVolume","1");
					// CommonAudioHandle.setVolume(0);
					CommonAudioHandle.stopPlay();
					CommonAudioHandle.curPlayName = "";
            	}, this);
				this.panelNotice.getChildByName("login_out").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
					CommonAudioHandle.stopPlay();
					CommonAudioHandle.curPlayName = "";
					ConstValue.P_NET_OBJ.outLogin();
            	}, this);
			 	break;

			case "SeventDayReward":
				this.handleSeventDay();
			 	break;

			case "showUpgradeReward":
				this.handleLvReward();
			 	break;

			case "getMyMaps":
				this.handleGetMyMaps();
			 	break;

			case "btn_friend_pvp":
				this.handleSelectMap();
			 	break;

			case "btn_img_info":
				let parent_class = panelCtx.getChildByName("fighting_parent") as eui.Group;
				let scroll_class = parent_class.getChildByName("scroll") as eui.Scroller;
				let group_class = scroll_class.getChildByName("scroll_group")as eui.Group;
				group_class.removeChildren();

				this.handleRoleClass(group_class,parent_class);
				break;

			case "btn_noticetip":
				let clearGroup = panelCtx.getChildByName("group_clear") as eui.Group;
				clearGroup.getChildByName("lb_clear_click").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				CommonButtonHandle.beginTouch(clearGroup.getChildByName("lb_clear_click"),this);
				if (ConstValue.P_IS_DEBUG || 1<2){
					let iCount = 10;
					let iOffY = 72;
					let scroll = this.panelNotice.getChildByName("left_scroller");
					let group = scroll.getChildByName("left_group");
					let lb_title = this.panelNotice.getChildByName("lb_title") as eui.Label;
					lb_title.text = "标题：";
					let lb_mail_info = this.panelNotice.getChildByName("lb_mail_info") as eui.Label;
					lb_mail_info.text = "";

					for(let i=0;i<iCount;i++){
						let panelT = new eui.Panel();
						panelT.skinName = "resource/eui_skins/UserUI/NoticeGroup.exml";
						panelT.name = "p_"+i;
						panelT.y = i*72;
						group.addChild(panelT);
						let groupT = panelT.getChildByName("group_1") as eui.Group;
						groupT.getChildByName("img_yellow").visible = false;
						let labelTitle = groupT.getChildByName("lb_title") as eui.Label;
						labelTitle.text = "喜报！！"+(i+1);
						let labelClick = groupT.getChildByName("lb_notice_click") as eui.Label;
						labelClick.name = "lb_notice_click" + i;
						labelClick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
						CommonButtonHandle.beginTouch(labelClick,this);
					}
				}else{
					let sData = CommonTools.getDataJsonStr("getAllMail",1,{roleId:ConstValue.cacheUserInfo.id});
					ConstValue.P_NET_OBJ.sendData(sData);
				}
				break;

			default:
				CommonTools.log("22222222 default");
				break;
		}
	}

	public updateCoin(){
		let lbCoin = this.panel.getChildByName("coin_num_lb") as eui.Label;
		lbCoin.text = ConstValue.cacheUserInfo.coin;
		let lbZuan = this.panel.getChildByName("zuan_num_lb") as eui.Label;
		lbZuan.text = ConstValue.cacheUserInfo.diamond;
	}

	/**
	 * 回包处理
	 */
	public async handlePacket(jsonObj:any){
		if (jsonObj.f == "setName"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_MODIFY_FAIL);
			}else{
				CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_SEND_MODIFY_SUCCESS);
				this.panelNotice.getChildByName("nickName_lb").text = jsonObj.d.name;
				ConstValue.cacheUserInfo.name = jsonObj.d.name;
				this.closeSub();
			}
		}else if (jsonObj.f == "gmFunc"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				CommonTools.addCommonTips(this.tipsPanel,"执行失败");
			}else{
				CommonTools.addCommonTips(this.tipsPanel,"执行成功");
			}
		}else if (jsonObj.f == "getPvpRankThree"){
			if(jsonObj.m != "" || jsonObj.s != 1){

			}else{
				// let rank_grounp_main = this.panel.getChildByName("rank_grounp_main") as eui.Group;
				// let rank_head_01 = rank_grounp_main.getChildByName("rank_head_01") as eui.Image;
				// let rank_head_02 = rank_grounp_main.getChildByName("rank_head_02") as eui.Image;
				// let rank_head_03 = rank_grounp_main.getChildByName("rank_head_03") as eui.Image;
				// if(jsonObj.d.lrank.length >=3){
				// 	if(jsonObj.d.lrank[0][2]!="")rank_head_01.source = jsonObj.d.lrank[0][2];
				// 	if(jsonObj.d.lrank[1][2]!="")rank_head_02.source = jsonObj.d.lrank[1][2];
				// 	if(jsonObj.d.lrank[2][2]!="")rank_head_03.source = jsonObj.d.lrank[2][2];
				// }
			}
		}else if (jsonObj.f == "getHelp" || jsonObj.f == "getGonggao"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(ConstValue.p_USE_WALLET == 1)return;
				CommonTools.addTipsPanel(this.context,jsonObj.d.name,jsonObj.d.content);
			}
		}else if (jsonObj.f == "Room1v1Dismiss"){
			if(jsonObj.m != "" || jsonObj.s != 1){
			}else{
				CommonTools.addCommonTips(this.tipsPanel,"房间解散");
				Main.roomkey = null;
				if(this.showWxVsPanel != null)CommonTools.niceTip(this.showWxVsPanel,2,this);
			}
		}else if (jsonObj.f == "WaitingInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_ENTER_ROOM_FAIL);
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
		}else if (jsonObj.f == "openDiyMapUI"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(ConstValue.P_MAP_OBJ == null){
					ConstValue.P_MAP_OBJ = new MapDIYModule(this.context,jsonObj.d,1);
					// new MapMiniDIYModule(this.context,jsonObj.d);
				}
			}
		}else if (jsonObj.f == "showAllClassList" || jsonObj.f == "reflashClassList"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.roleClassData = jsonObj.d.allRoleList ;
				if(this.panelNotice == null){
					this.showNotice("resource/eui_skins/UserUI/RoleSelectUI.exml","btn_img_info");
				}else{
					this.updateRoleClass(this.roleSelectIdx);
				}
			}
		}else if (jsonObj.f == "openShopUI"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.dShopOrBagData = jsonObj.d;
				this.shopUIType = 1;
				if(this.panelNotice == null){
					this.showNotice("resource/eui_skins/UserUI/PayShopUI.exml","btn_map_shop");
				}else{
					this.updateShopUI(false);
					let iCount = this.dShopOrBagData.lShopInfo.length;
					if(iCount>0)this.clickShopItem(this.shopItemClickName);
				}
			}
		}else if (jsonObj.f == "openBagUI"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				// if(jsonObj.d.lItmeInfo[0] == null){
				// 	CommonTools.addCommonTips(this.tipsPanel,"暂无数据");
				// 	return
				// }
				this.dShopOrBagData = jsonObj.d;
				this.shopUIType = 2;
				if(this.panelNotice == null){
					this.showNotice("resource/eui_skins/UserUI/BagUI.exml","btn_map_bag");
				}else{
					this.updateShopUI(false);
					this.clickShopItem(this.shopItemClickName);
				}
			}
		}else if (jsonObj.f == "Buy"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(jsonObj.d.err == 0){
					ConstValue.cacheUserInfo.coin = jsonObj.d.after_buy_data.coin;
					ConstValue.cacheUserInfo.diamond = jsonObj.d.after_buy_data.diamond;
					this.updateCoin();
				}
			}
		}else if (jsonObj.f == "getMyMaps"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				FightingModule.Delay(500, function(){
					if(this.maskBg != null)this.context.removeChild(this.maskBg);
					this.maskBg = null;
					if (this.panelNotice != null)this.context.removeChild(this.panelNotice);
					this.panelNotice = null;
					this.selectMapData = jsonObj.d;
					this.showNotice("resource/eui_skins/UserUI/MapViewUI.exml","getMyMaps");
				}, this);
			}
		}else if (jsonObj.f == "C2GOpenWujinUI"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.barrData = jsonObj.d;
				if(this.panelNotice != null){
					let groupNoEnd = this.panelNotice.getChildByName("fighting_parent") as eui.Group;
					groupNoEnd.removeChildren();
					this.handleNoEnd(groupNoEnd,this.panelNotice);
				}else{
					this.showNotice("resource/eui_skins/UserUI/noEndBarrUI.exml","btn_noend_pve");
					if(HallModule.curGuide == 4){
						HallModule.curGuide = 0;
						if(!this.fixGuide5){
							let sData = CommonTools.getDataJsonStr("getNextGuild",1,{});
							ConstValue.P_NET_OBJ.sendData(sData);
						}
					}
				}
			}
		}else if (jsonObj.f == "SeventDayReward"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(ConstValue.p_USE_WALLET == 1)return;
				if(!HallModule.isSafeArea)return;
				this.seventData = jsonObj.d;
				if(this.curButton != null && this.curButton != "SeventDayReward")return;
				if(this.panelNotice == null){
					this.showNotice("resource/eui_skins/UserUI/SeventDayGet.exml",jsonObj.f);
				}else{
					this.handleSeventDay();
				}
			}
		}else if (jsonObj.f == "G2C_getWXInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(ConstValue.p_LOGIN_MODEL != 2)return;//微信渠道才有
				let userInfo = await platform.getUserInfo();
				let sData = CommonTools.getDataJsonStr("saveWXInfo",1,{head:userInfo.avatarUrl,name:userInfo.nickName,gender:userInfo.gender});
				ConstValue.P_NET_OBJ.sendData(sData);
			}
		}else if (jsonObj.f == "saveWXInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				let imgHead = this.panel.getChildByName("img_info") as eui.Image;
				if(jsonObj.d.head != ""){
					imgHead.source = jsonObj.d.head;
					ConstValue.cacheUserInfo.headPic = jsonObj.d.head;
				}
				let lbName = this.panel.getChildByName("hall_id_lb") as eui.Label;
				lbName.text = jsonObj.d.name;
				ConstValue.cacheUserInfo.name = jsonObj.d.name;
			}
		}else if (jsonObj.f == "showUpgradeReward"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.lvRewardData = jsonObj.d.LvInfo;
				if(this.panelNotice == null){
					this.showNotice("resource/eui_skins/UserUI/RewardGet.exml",jsonObj.f);
				}else{
					this.handleLvReward();
				}
			}
		}else if (jsonObj.f == "GuildInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(this.seventData != null){
					HallModule.curGuide = jsonObj.d.id;
				}else{
					if(jsonObj.d.id == 5 && this.panelNotice == null){
						this.fixGuide5 = true;
						// new GuideModule(this.context,4,this.panel,this.panelNotice);
						return;
					}
					// if(jsonObj.d.id != 3)new GuideModule(this.context,jsonObj.d.id,this.panel,this.panelNotice);
				}
			}
		}else if (jsonObj.f == "open1V1Room" || jsonObj.f == "open1V1RoomByMap"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				CommonTools.log("shareAppMessage-------1")
				Main.roomkey = jsonObj.d.roomkey;
				let platform: any = window.platform;
				await platform.shareAppMessage(jsonObj.d.roomkey);
			}
		}else if (jsonObj.f == "showMatch1v1RoomUI"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(this.panelNotice != null){
					if(this.maskBg != null)this.context.removeChild(this.maskBg);
					this.maskBg = null;
					this.context.removeChild(this.panelNotice);
					this.panelNotice = null;
				}
				if(jsonObj.d.roomID != null){
					Main.roomkey = jsonObj.d.roomID;
				}
				if(this.showWxVsPanel == null){
					this.showWxVsUI(jsonObj.d);
				}else{
					this.updateWxVsUI(jsonObj.d);
				}
			}
		}else if (jsonObj.f == "getRoleDetail"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.roleDetailData = jsonObj.d;
				this.showRoleInfoUI();
			}
		}else if (jsonObj.f == "getBarrierInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.showBarrinfoUI(jsonObj.d)
			}
		}else if (jsonObj.f == "C2G_Open_MainUI"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.skillData = jsonObj.d;
				if(this.panelNotice == null){
					this.showNotice("resource/eui_skins/UserUI/SkillUI.exml","btn_skill");
				}else{
					this.handlePanel(this.panelNotice,"btn_skill");
				}
			}
		}else if (jsonObj.f == "reflashRoleData"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				ConstValue.cacheUserInfo.curexp = jsonObj.d.curexp;
				ConstValue.cacheUserInfo.lv = jsonObj.d.lv;
				ConstValue.cacheUserInfo.coin = jsonObj.d.coin;
				ConstValue.cacheUserInfo.diamond = jsonObj.d.diamond;
				ConstValue.cacheUserInfo.maxExp = jsonObj.d.exp;
				let lbLv = this.panel.getChildByName("img_lv_lb") as eui.Label;
				lbLv.text = ConstValue.cacheUserInfo.lv;

				let lbExp = this.panel.getChildByName("img_exp_value") as eui.Image;
				lbExp.width = ConstValue.cacheUserInfo.curexp * 1.0 / ConstValue.cacheUserInfo.maxExp * lbExp.width;

				let lbCoin = this.panel.getChildByName("coin_num_lb") as eui.Label;
				lbCoin.text = ConstValue.cacheUserInfo.coin;

				let lbZuan = this.panel.getChildByName("zuan_num_lb") as eui.Label;
				lbZuan.text = ConstValue.cacheUserInfo.diamond;
			}
		}else if (jsonObj.f == "openRnakUI" || jsonObj.f == "getTotalPvpRank" || jsonObj.f == "getTotalLvRank" || jsonObj.f == "getTotalGuankaRank"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.lRank = jsonObj.d.lRank;
				this.lMyRank = jsonObj.d.myRank;
				this.sMyRankDesc = jsonObj.d.myRankDesc;
				if(jsonObj.f == "openRnakUI"){
					this.showNotice("resource/eui_skins/UserUI/NewRankUI.exml","btn_rank");
				}else{
					this.handlePanel(this.panelNotice,jsonObj.f);
				}
				CommonTools.log("this.lRank-------------"+this.lRank)
			}
		}
	}

	public closeNotice(){
		this.tipsPanel = this.panel;
		CommonTools.niceTip(this.panelNotice,2,this);
	}

	public closeWxVsUI(){
		this.tipsPanel = this.panel;
		if(this.isMainRoomer){
			let sData = CommonTools.getDataJsonStr("remove1V1Room",1,{});
			ConstValue.P_NET_OBJ.sendData(sData);
			this.isMainRoomer = false;
		}else{
			Main.roomkey = null;
			if(this.showWxVsPanel != null)CommonTools.niceTip(this.showWxVsPanel,2,this);
			let sData = CommonTools.getDataJsonStr("leaveGame1v1",1,{fightRoomKey:Main.roomkey});
			ConstValue.P_NET_OBJ.sendData(sData);
		}
	}

	public closeNice(){
		this.moveLvGet = true;
		ConstValue.videoIndx = 0;
		if(this.showWxVsPanel != null && this.panelNotice == null){
			if(this.maskBg2 != null)this.context.removeChild(this.maskBg2);
			this.maskBg2 = null;
			this.context.removeChild(this.showWxVsPanel);
			this.showWxVsPanel = null;
		}else if(this.panelSub != null){
			if(this.bodyAniDown2 != null){
				this.panelSub.removeChild(this.bodyAniDown2);
				this.bodyAniDown2 = null;
			}
			if(this.maskBg2 != null)this.context.removeChild(this.maskBg2);
			this.maskBg2 = null;
			this.context.removeChild(this.panelSub);
			this.panelSub = null;
		}else{
			if(this.curButton == "btn_setting"){
				this.panelNotice.getChildByName("btn_open_ms").removeEventListener(egret.TouchEvent.TOUCH_TAP);
				this.panelNotice.getChildByName("btn_close_ms").removeEventListener(egret.TouchEvent.TOUCH_TAP);
			}else if(this.curButton == "getMyMaps"){
				let group = this.panelNotice.getChildByName("fighting_parent")
				.getChildByName("scroll").getChildByName("scroll_group") as eui.Group;
				let iChilds = group.numChildren;
				for(let i=0;i<iChilds;i++){
					let obj = group.getChildAt(i) as eui.Panel;
					obj.removeChildren();
				}
				group.removeChildren();
			}else if(this.curButton == "SeventDayReward"){
				this.seventData = null;
			}
			this.curButton = null;
			if(this.bodyAniDown != null){
				this.panelNotice.removeChild(this.bodyAniDown);
				this.bodyAniDown = null;
			}
			if (this.panelNotice != null)this.context.removeChild(this.panelNotice);
			if(this.maskBg != null)this.context.removeChild(this.maskBg);
			this.maskBg = null;
			this.panelNotice = null;
			this.dShopOrBagData = null;
			this.shopPageType = 0;
			this.shopItemNo = 0;
			this.shopPayType = 0;
			this.shopItemItemID = 0;
			this.shopItemName = "";
			this.shopItemClickName = "";
			if(this.seventData != null)this.showNotice("resource/eui_skins/UserUI/SeventDayGet.exml","SeventDayReward");
		}
		if(HallModule.curGuide > 0){
			if(HallModule.curGuide == 5){
				this.fixGuide5 = true;
				HallModule.curGuide = 4;
			}
			// new GuideModule(this.context,HallModule.curGuide,this.panel,this.panelNotice);
		}

	}

	private closeSub(){
		this.tipsPanel = this.panel;
		if(this.maskBg2 != null)this.context.removeChild(this.maskBg2);
		this.maskBg2 = null;
		if (this.panelSub != null)this.context.removeChild(this.panelSub);
		this.panelSub = null;
	}

	public clear(){
		this.removeGuide();
		this.panel.removeChild(this.btnMatchAnim);
		this.btnMatchAnim = null;
		this.panel.removeChild(this.btnWxPvpAnim);
		this.btnWxPvpAnim = null;
		this.panel.removeChild(this.btnPveAnim);
		this.btnPveAnim = null;
		egret.Tween.removeTweens(this.notify_lb);
		if(this.maskNew != null)this.context.removeChild(this.maskNew);
		this.maskNew = null;
		this.closeSub();
		if(this.showWxVsPanel != null){
			this.context.removeChild(this.showWxVsPanel);
			this.showWxVsPanel = null;
		}
		if(this.panelNotice){
			let groupNoEnd = this.panelNotice.getChildByName("fighting_parent") as eui.Group;
			if(groupNoEnd != null){
				groupNoEnd.removeChildren();
			}
			this.context.removeChild(this.panelNotice);
			this.panelNotice = null
		}
		if(this.panel!=null){
			this.context.removeChild(this.panel);
			this.panel = null;
		}
	}
}