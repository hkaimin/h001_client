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
	private btnPveAnimInitX = 580;//440
	private btnPveAnimInitY = 350;//240
	private btnPveAnimX = 580;
	private btnPveAnimY = 350;
	private btnPveAnim2D = null;
	private btnPveAnim3D = null;

	private horseCurrent = 1;

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
	private subCurPage = 1;
	private subSubCurPage = 1;

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
	private btnBackImgTemp;
	private horseSelectPanel;
	private horseSelectLeftPanel;
	private horseSelectRightPanel;
	private horseSelectMiddlePanel;
	private horsePanelUp = true;
	private horseMergeResult;
	private horseFunc;

	private horseMarketData = null;
	private horseOwnData = null;
	private horseIndexS = 0;
	private horseItemS = 0;

	private L_select_indx = -1;
	private R_select_indx = -1;
	private mergeConf;
	private mergeType=0;
	private mergeOutOfHorse = 0;
	private createNFTTempID = 0;

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
		if(this.btnPveAnim == null)return;
		if(ConstValue.deviveNormalScale < 2){
			this.btnPveAnim.x = this.btnPveAnimX;
			this.btnPveAnim.y = this.btnPveAnimY;
		}else{
			this.btnPveAnim.x = this.btnPveAnimX;
			this.btnPveAnim.y = this.btnPveAnimY - 180;
		}
	}

	private setTHorseXY(){
		if(this.btnPveAnim == null)return;
		if(ConstValue.deviveNormalScale < 2){
			this.btnPveAnim.x = this.btnPveAnimX;
			this.btnPveAnim.y = this.btnPveAnimY;
		}else{
			this.btnPveAnim.x = this.btnPveAnimX;
			this.btnPveAnim.y = this.btnPveAnimY + 10;
		}
	}

	private drawHorse(){
		let hObj = this.getOwnHorseInfoById(this.horseItemS);
		if(this.btnPveAnim != null){
			this.btnPveAnim.removeEventListener(egret.Event.COMPLETE);
			if(this.horseFunc != null){
				this.btnPveAnim.removeEventListener(egret.Event.ENTER_FRAME,this.horseFunc,this);
				this.horseFunc = null;
			}
			this.context.removeChild(this.btnPveAnim);
			this.btnPveAnim = null;
		}
		let animName = ""
		if(this.horseCurrent < 10){
			animName =  "horse"+hObj.res_key+"_wait_0"+this.horseCurrent
		}else{
			animName =  "horse"+hObj.res_key+"_wait_"+this.horseCurrent
		}
		this.btnPveAnim = CommonTools.getAnimDraw(RES.getRes(animName+"_json"), RES.getRes(animName+"_png"), "0");
		this.btnPveAnim.play(1);
		this.btnPveAnim.name = "btn_noend_pve_anim";
		this.context.addChild(this.btnPveAnim);
		this.setHorseXY();
		// if(this.curPage == 2 && this.subCurPage > 1 || this.curPage == 4 && this.subCurPage == 1 || this.curPage == 5)this.btnPveAnim2D.visible = false;
		this.btnPveAnim.addEventListener(egret.Event.COMPLETE,function(){
			CommonTools.logWallet("---COMPLETE------"+this.horseCurrent)
			this.horseCurrent ++;
			let maxHorse = 17
			if(hObj.res_key == "04")maxHorse = 16
			if(this.horseCurrent > maxHorse){
				this.horseCurrent = 1;
			}
			this.drawHorse();
		},this);
		// CommonTools.fixFix(this.context,this.btnPveAnim,4,40,100);//40,20
	}

	private drawTraining(index){
		if(this.btnPveAnim != null){
			if(this.horseFunc != null){
				this.btnPveAnim.removeEventListener(egret.Event.ENTER_FRAME,this.horseFunc,this);
				this.horseFunc = null;
			}
			this.btnPveAnim.removeEventListener(egret.Event.COMPLETE);
			this.panel.removeChild(this.btnPveAnim);
			this.btnPveAnim = null;
		}
		if(index  == 4){
			this.btnPveAnim = CommonTools.getAnimDraw(RES.getRes("horse01_run01_json"), RES.getRes("horse01_run01_png"), "0");
		}
		this.btnPveAnim.play(-1);
		this.btnPveAnim.name = "btn_noend_pve_anim";
		this.panel.addChild(this.btnPveAnim);
		this.setTHorseXY();
		this.horseFunc  = function(e:egret.Event) {
            this.btnPveAnimX += 16;
			this.btnPveAnimY = this.btnPveAnimInitY - 50;
			this.setTHorseXY();
			if(this.btnPveAnimX >= (this.context.getStageWidth() - 200)){
				this.stopTraining();
			}
			if(this.btnPveAnimX > 0 && this.btnPveAnimX % 50 == 0)CommonAudioHandle.playEffect("horse_step_on_grass_3_wav",1);
        }
		CommonAudioHandle.playEffect("horse_sfx_after_eat_wav",1);
		this.btnPveAnim.addEventListener(egret.Event.ENTER_FRAME,this.horseFunc,this);
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

		// this.drawHorse();

		this.panel.getChildByName("btn_map_diy").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("img_info").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("btn_training_pve").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("btn_2v2").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("up_item_group").getChildByName("img_coin1_add").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("up_item_group").getChildByName("img_coin2_add").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("sell_group").getChildByName("sell_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("sell_group").getChildByName("up_img").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.panel.getChildByName("sell_group").getChildByName("down_img").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		CommonTools.fixFix(this.context,this.panel.getChildByName("sell_group"),2,0,0);
		this.panel.getChildByName("buynft_group").getChildByName("buynft_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		CommonTools.fixFix(this.context,this.panel.getChildByName("buynft_group"),2,0,0);

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

		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_map_diy"),2,30,20);
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_training_pve"),2,30,20);
		CommonTools.fixFix(this.context,this.panel.getChildByName("btn_2v2"),2,30,20);
		CommonTools.fixFix(this.context,this.panel.getChildByName("info_grp"),1,44,10);
		CommonTools.fixFix(this.context,this.panel.getChildByName("img_head_bg"),1,34,10);
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
		CommonTools.fixFix(this.context,this.panel.getChildByName("up_item_group"),1,0,10);

		let imgHead = this.panel.getChildByName("img_info") as eui.Image;
		if(ConstValue.cacheUserInfo.headPic != "")imgHead.source = ConstValue.cacheUserInfo.headPic;

		let lbName = this.panel.getChildByName("hall_id_lb") as eui.Label;
		lbName.text = ConstValue.cacheUserInfo.name;

		let lbLv = this.panel.getChildByName("img_lv_lb") as eui.Label;
		lbLv.text = ConstValue.cacheUserInfo.lv;

		let lbExp = this.panel.getChildByName("img_exp_value") as eui.Image;
		lbExp.width = ConstValue.cacheUserInfo.curexp * 1.0 / ConstValue.cacheUserInfo.maxExp * lbExp.width;

		if(ConstValue.cacheUserInfo != null && ConstValue.cacheUserInfo.gm == 1){//gm
			// CommonButtonHandle.beginTouch(this.panel.getChildByName("btn_gm"),this);
			this.panel.getChildByName("scroll_notify").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				this.showEditUI("scroll_notify");
			}, this);
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
			// ContractSol.maincoin_transfer(ContractSol.createAddress, 1);
			// ContractSol.maincoin_transferFrom(ContractSol.createAddress, ContractSol.sender , 2);
			// ContractSol.maincoin_increaseApproval(ContractSol.sender , 2);
			platform.initSOL();
			ContractSol.initSOL();
			ContractSol.maincoin_balanceOf(ContractSol.sender);
			ContractSol.subcoin_balanceOf(ContractSol.sender);
			ContractSol.nft_tokensOfOwner(ContractSol.sender);
			this.changePage("rank_head_05");
			this.updateUI();
		}
	}

	private clearHorseSelect(){
		if(this.curPage == 1){
			
		}else if(this.curPage == 2 || this.curPage == 3){
			let downY = 570;
			if(ConstValue.deviveNormalScale >= 2){
				downY -= 80;
			}
			egret.Tween.get(this.horseSelectPanel).to({y:downY}, 1000);
			this.maskBg2.visible = false;
			this.horsePanelUp = true;
			this.resetHorse();
		}
	}

	private resetHorse(){
		// let scrollShop = this.horseSelectPanel.getChildByName("horse_panel_group").getChildByName("res_scroller") as eui.Scroller;
		// scrollShop.viewport.scrollV = 0;
		// let groupShop = scrollShop.getChildByName("res_group") as eui.Group;
		// let count = 20;
		// for(let iCnt=0;iCnt<count;iCnt++){
		// 	let tempPanel = groupShop.getChildByName("p_"+iCnt) as eui.Panel;
		// 	let tempGroup = tempPanel.getChildByName("group_1") as eui.Group;
		// 	tempGroup.scaleX = 1;
		// 	tempGroup.scaleY = 1;
		// 	tempGroup.getChildByName("select_2_img").visible = false;
		// }
		// let showCnt = 0;
		// if(count >= 5)showCnt = 2;
		// let groupItem = groupShop.getChildByName("p_"+showCnt) as eui.Panel;
		// let groupHorse = groupItem.getChildByName("group_1") as eui.Group;
		// groupHorse.scaleX = 1.2;
		// groupHorse.scaleY = 1.2;
		// groupHorse.getChildByName("select_2_img").visible = true;
	}

	private showHorseHelp(index){
		let helpPanel= new eui.Panel();
		helpPanel.skinName = "resource/eui_skins/UserUI/HorseHelpUI.exml";
		helpPanel.title = "Title";
		helpPanel.horizontalCenter = 0;
		helpPanel.verticalCenter = 0;
		
		let maskBgT = new eui.Image("mask_layer_png");
		maskBgT.width = this.context.getStageWidth();
		maskBgT.height = this.context.getStageHeight();
		maskBgT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1)
			this.context.removeChild(maskBgT);
			this.context.removeChild(helpPanel);
		}, this);
		this.context.addChild(maskBgT);
		this.context.addChild(helpPanel);
		CommonTools.fixFix(this.context,helpPanel,2,0,0);

	}

	private changeHorseRight(index){
		if(this.curPage != 2 && this.curPage != 5)return;
		this.subSubCurPage = index;
		if(this.horseSelectRightPanel != null){
			this.context.removeChild(this.horseSelectRightPanel);
			this.horseSelectRightPanel = null;
		}
		let selectIdx = 0;
		if(this.curPage == 5){
			selectIdx = this.horseIndexS;
		}else{
			selectIdx = this.horseItemS;
		}
		let horseObj = this.getOwnHorseInfoById(selectIdx);
		if(horseObj==null)return;
		let leftX2 = 900;
		let downY2 = 100;
		if(ConstValue.deviveNormalScale >= 2){
			leftX2 -= 0;
			downY2 -= 80;
		}
		if(this.curPage == 2 || this.curPage == 5){
			this.horseSelectRightPanel = new eui.Panel();
			if(index == 1){
				this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/StablesStatUI.exml";
				this.horseSelectRightPanel.getChildByName("horse_sex").source = horseObj.iSex == 1 ? "icon_Male_png" : "icon_female_png";
				this.horseSelectRightPanel.getChildByName("horse_score").text = horseObj.score;
				let energy_length = this.horseSelectRightPanel.getChildByName("energy_length") as eui.Image;
				let strength_w = energy_length.width * (horseObj.strength*1.0/horseObj.MaxStrength);
				this.horseSelectRightPanel.getChildByName("strength_value").width = strength_w;
				this.horseSelectRightPanel.getChildByName("strength_text").text = horseObj.strength+"/"+horseObj.MaxStrength;

				let energy_w = energy_length.width * (horseObj.energy*1.0/horseObj.energyMax);
				this.horseSelectRightPanel.getChildByName("energy_value").width = energy_w;
				this.horseSelectRightPanel.getChildByName("energy_text").text = horseObj.energy+"/"+horseObj.energyMax;

				for(let iBreed=1;iBreed<=horseObj.breedMax;iBreed++){
					if(horseObj.breed >= iBreed){
						this.horseSelectRightPanel.getChildByName("breed_0"+iBreed).source = "icon_heart_png"
					}else{
						this.horseSelectRightPanel.getChildByName("breed_0"+iBreed).source = "icon_heart_1_png"
					}
				}
				for(let iBreed=1;iBreed<=6;iBreed++){
					if(horseObj.breedMax < iBreed)this.horseSelectRightPanel.getChildByName("breed_0"+iBreed).visible = false
				}
				this.horseSelectRightPanel.getChildByName("breed_limit_lb").text = horseObj.breed+"/"+horseObj.breedMax

				let speed_w = energy_length.width * (horseObj.speed*1.0/horseObj.MaxSpeed);
				this.horseSelectRightPanel.getChildByName("speed_value").width = speed_w;
				this.horseSelectRightPanel.getChildByName("speed_text").text = horseObj.speed+"/"+horseObj.MaxSpeed;

				let dexterity_w = energy_length.width * (horseObj.dexterity*1.0/horseObj.MaxDexterity);
				this.horseSelectRightPanel.getChildByName("dexterity_value").width = dexterity_w;
				this.horseSelectRightPanel.getChildByName("dexterity_text").text = horseObj.dexterity+"/"+horseObj.MaxDexterity;

				let burse_w = energy_length.width * (horseObj.burse*1.0/horseObj.MaxBurse);
				this.horseSelectRightPanel.getChildByName("burst_value").width = burse_w;
				this.horseSelectRightPanel.getChildByName("burst_text").text = horseObj.burse+"/"+horseObj.MaxBurse;

				this.horseSelectRightPanel.getChildByName("stamina_value").text = horseObj.stamina
				this.horseSelectRightPanel.getChildByName("start_value").text = horseObj.start
				this.horseSelectRightPanel.getChildByName("wisdom_value").text = horseObj.wisdom
				this.horseSelectRightPanel.getChildByName("constitution_value").text = horseObj.constitution
				this.horseSelectRightPanel.getChildByName("life_time").text = horseObj.days + " days"

			}else if(index == 2){
				this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/StablesSkillUI.exml";
				let grassLand_length = this.horseSelectRightPanel.getChildByName("grassLand_length") as eui.Image;
				
				let iPerGrass = horseObj.grassland*1.0/horseObj.landMax
				let grassLand_w = grassLand_length.width * iPerGrass;
				this.horseSelectRightPanel.getChildByName("grassLand_value").width = grassLand_w;
				if(iPerGrass > 0.9){
					this.horseSelectRightPanel.getChildByName("grassLand_lv").source = "icon_level_s_png";
				}else if(iPerGrass > 0.8){
					this.horseSelectRightPanel.getChildByName("grassLand_lv").source = "icon_level_a_png";
				}else if(iPerGrass > 0.7){
					this.horseSelectRightPanel.getChildByName("grassLand_lv").source = "icon_level_b_png";
				}else if(iPerGrass > 0.6){
					this.horseSelectRightPanel.getChildByName("grassLand_lv").source = "icon_level_c_png";
				}else{
					this.horseSelectRightPanel.getChildByName("grassLand_lv").source = "icon_level_d_png";
				}

				let iPerSand = horseObj.sand*1.0/horseObj.landMax
				let sand_w = grassLand_length.width * iPerSand;
				this.horseSelectRightPanel.getChildByName("sand_value").width = sand_w;
				if(iPerSand > 0.9){
					this.horseSelectRightPanel.getChildByName("sand_lv").source = "icon_level_s_png";
				}else if(iPerSand > 0.8){
					this.horseSelectRightPanel.getChildByName("sand_lv").source = "icon_level_a_png";
				}else if(iPerSand > 0.7){
					this.horseSelectRightPanel.getChildByName("sand_lv").source = "icon_level_b_png";
				}else if(iPerSand > 0.6){
					this.horseSelectRightPanel.getChildByName("sand_lv").source = "icon_level_c_png";
				}else{
					this.horseSelectRightPanel.getChildByName("sand_lv").source = "icon_level_d_png";
				}

				let iPerMud = horseObj.mud*1.0/horseObj.landMax
				let mud_w = grassLand_length.width * iPerMud;
				this.horseSelectRightPanel.getChildByName("mud_value").width = mud_w;
				if(iPerMud > 0.9){
					this.horseSelectRightPanel.getChildByName("mud_lv").source = "icon_level_s_png";
				}else if(iPerMud > 0.8){
					this.horseSelectRightPanel.getChildByName("mud_lv").source = "icon_level_a_png";
				}else if(iPerMud > 0.7){
					this.horseSelectRightPanel.getChildByName("mud_lv").source = "icon_level_b_png";
				}else if(iPerMud > 0.6){
					this.horseSelectRightPanel.getChildByName("mud_lv").source = "icon_level_c_png";
				}else{
					this.horseSelectRightPanel.getChildByName("mud_lv").source = "icon_level_d_png";
				}

			}else{
				this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/StablesPedigreeUI.exml";
				let pe_scroller = this.horseSelectRightPanel.getChildByName("pe_scroller") as eui.Scroller;
				let pe_group = pe_scroller.getChildByName("pe_group") as eui.Group;
				pe_group.removeChildren();

				let pe_start = new eui.Panel();
				pe_start.skinName = "resource/eui_skins/UserUI/Pedigree_start.exml";
				pe_group.addChild(pe_start);

				let pe_middle = new eui.Panel();
				pe_middle.skinName = "resource/eui_skins/UserUI/Pedigree_middle.exml";
				pe_middle.y += 160;
				pe_group.addChild(pe_middle);

				let pe_single = new eui.Panel();
				pe_single.skinName = "resource/eui_skins/UserUI/Pedigree_single.exml";
				pe_single.x += 120;
				pe_single.y += 340;
				pe_group.addChild(pe_single);
			}
			this.horseSelectRightPanel.getChildByName("question").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.showHorseHelp(index)
			}, this);

			this.horseSelectRightPanel.getChildByName("horse_head").source = "horse"+horseObj.res_key+"_head01_png";
			this.horseSelectRightPanel.getChildByName("horse_name").text = horseObj.name;
			this.horseSelectRightPanel.getChildByName("lv_img").source = "icon_level_"+horseObj.iType+"_png";
			for(let starNum = 1;starNum<=5 ;starNum++){
				if(starNum > horseObj.star)this.horseSelectRightPanel.getChildByName("star_"+starNum).source = "icon_stars_0_png";
			}

			this.horseSelectRightPanel.title = "Title";
			this.horseSelectRightPanel.x = leftX2;
			this.horseSelectRightPanel.y = downY2;
			this.context.addChild(this.horseSelectRightPanel);
			CommonTools.fixFix(this.context,this.horseSelectRightPanel,2,0,0);

			if(this.curPage == 5){
				
				if(ConstValue.deviveNormalScale >= 2){
					this.horseSelectRightPanel.scaleX = 0.7;
					this.horseSelectRightPanel.scaleY = 0.7;
				}else{
					this.horseSelectRightPanel.scaleX = 0.8;
					this.horseSelectRightPanel.scaleY = 0.8;
				}
			}

			this.horseSelectRightPanel.getChildByName("horse_stat_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.subSubCurPage = 1;
				this.changeHorseRight(1);
			}, this);

			this.horseSelectRightPanel.getChildByName("horse_skill_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.subSubCurPage = 2;
				this.changeHorseRight(2);
			}, this);

			this.horseSelectRightPanel.getChildByName("horse_pedigree_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.subSubCurPage = 3;
				this.changeHorseRight(3);
			}, this);

		}
	}

	private getOwnHorseInfoById(id){
		let hData = this.horseOwnData;
		if(this.subCurPage == 2)hData = this.horseMarketData;
		for(let index in hData){
			let obj = hData[index];
			if(obj.id == id)return obj; 
		}
		return null;
	}

	private getPOwnHorseInfoById(id){
		let hData = this.horseOwnData;
		for(let index in hData){
			let obj = hData[index];
			if(obj.id == id)return obj; 
		}
		return null;
	}

	private updateHorseItemMiddle(obj){
		if(this.horseSelectMiddlePanel != null){
			this.horseSelectMiddlePanel.getChildByName("name").text = obj.name;
			this.horseSelectMiddlePanel.getChildByName("horse_lv_img").source = "icon_level_"+obj.iType+"_png";
			let sex = obj.iSex == 1 ? "icon_Male_png" : "icon_female_png";
			this.horseSelectMiddlePanel.getChildByName("sex").source = sex;
			for(let starNum = 1;starNum<=5 ;starNum++){
				if(starNum > obj.star)this.horseSelectMiddlePanel.getChildByName("star_"+starNum).source = "icon_stars_0_png";
			}
			let energy_length = this.horseSelectMiddlePanel.getChildByName("energy_length") as eui.Image;
			let strength_w = energy_length.width * (obj.strength*1.0/obj.MaxStrength);
			this.horseSelectMiddlePanel.getChildByName("strength_value").width = strength_w;
			this.horseSelectMiddlePanel.getChildByName("strength_text").text = obj.strength+"/"+obj.MaxStrength;

			let energy_w = energy_length.width * (obj.energy*1.0/obj.energyMax);
			this.horseSelectMiddlePanel.getChildByName("energy_value").width = energy_w;
			this.horseSelectMiddlePanel.getChildByName("energy_text").text = obj.energy+"/"+obj.energyMax;

			let speed_w = energy_length.width * (obj.speed*1.0/obj.MaxSpeed);
			this.horseSelectMiddlePanel.getChildByName("speed_value").width = speed_w;
			this.horseSelectMiddlePanel.getChildByName("speed_text").text = obj.speed+"/"+obj.MaxSpeed;

			let dexterity_w = energy_length.width * (obj.dexterity*1.0/obj.MaxDexterity);
			this.horseSelectMiddlePanel.getChildByName("dexterity_value").width = dexterity_w;
			this.horseSelectMiddlePanel.getChildByName("dexterity_text").text = obj.dexterity+"/"+obj.MaxDexterity;

			let burse_w = energy_length.width * (obj.burse*1.0/obj.MaxBurse);
			this.horseSelectMiddlePanel.getChildByName("burst_value").width = burse_w;
			this.horseSelectMiddlePanel.getChildByName("burst_text").text = obj.burse+"/"+obj.MaxBurse;
			
			this.horseSelectMiddlePanel.getChildByName("score").text = obj.score;
		}
		if(this.curPage == 4 && this.subCurPage == 2){
			let sData = CommonTools.getDataJsonStr("getCargoInfo",1,{iType:this.mergeType,iStar:obj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}
		if(this.curPage == 4 && this.subCurPage == 3){
			let sData = CommonTools.getDataJsonStr("getPeddInfo",1,{iStar:obj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}
		if(this.curPage == 3){
			let obj = this.getPOwnHorseInfoById(this.horseItemS);
			let energy_length = this.horseSelectRightPanel.getChildByName("energy_bg") as eui.Image;
			let strength_w = energy_length.width * (obj.strength*1.0/obj.MaxStrength);
			let energy_w = energy_length.width * (obj.energy*1.0/obj.energyMax);
			this.horseSelectRightPanel.getChildByName("energy_value").width = energy_w;
		}
	}

	private createHorseItem(){
		if(this.horseSelectPanel != null){
			this.context.removeChild(this.maskBg2);
			this.context.removeChild(this.horseSelectPanel);
			this.maskBg2 = null;
			this.horseSelectPanel = null;
			this.horsePanelUp = true;
		}
		let upY = 305;
		let downY = 570;
		let leftX = 215;
		if(ConstValue.deviveNormalScale >= 2){
			upY -= 30;
			downY -= 80;
		}
		this.maskBg2 = new eui.Image("mask_layer_png");
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.maskBg2.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.clearHorseSelect();
		}, this);
		this.maskBg2.visible = false;
		this.context.addChild(this.maskBg2);

		this.horseSelectPanel = new eui.Panel();
		this.horseSelectPanel.skinName = "resource/eui_skins/UserUI/StablesPageUI.exml";
		this.horseSelectPanel.title = "Title";
		// this.horseSelectPanel.horizontalCenter = 0;
		// this.horseSelectPanel.verticalCenter = 0;
		this.horseSelectPanel.x = leftX;
		this.horseSelectPanel.y = downY;
		this.context.addChild(this.horseSelectPanel);
		// CommonTools.fixFix(this.context,this.horseSelectPanel,1,0,0);
		CommonTools.fixFix(this.context,this.horseSelectPanel,2,0,0);

		let scrollShop = this.horseSelectPanel.getChildByName("horse_panel_group").getChildByName("res_scroller") as eui.Scroller;
		scrollShop.viewport.scrollV = 0;
		let groupShop = scrollShop.getChildByName("res_group") as eui.Group;
		groupShop.removeChildren();

		this.horseSelectPanel.getChildByName("horse_panel_group").getChildByName("horse_up_point_click").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			if(this.horsePanelUp){
				this.horsePanelUp = false;
				egret.Tween.get(this.horseSelectPanel).to({y:upY}, 1000);
				if(this.maskBg2!=null)this.maskBg2.visible = true;
			}else{
				this.horsePanelUp = true;
				egret.Tween.get(this.horseSelectPanel).to({y:downY}, 1000);
				if(this.maskBg2!=null)this.maskBg2.visible = false;
			}
			this.resetHorse();
		}, this);
		let i = 0;
		for(let hIndex in this.horseOwnData){
			let obj = this.horseOwnData[hIndex]
			if(this.horseItemS == 0)this.horseItemS = obj.id;
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/horseItemGroup.exml";
			panelT.name = "p_"+obj.id;
			let xOff = 0;
			let yOff = 0;
			panelT.x = 11+ 120*(i%5);
			panelT.y = 15+ 120*(Math.floor(i/5));
			groupShop.addChild(panelT);

			let tGroup = panelT.getChildByName("group_1") as eui.Group;
			(tGroup.getChildByName("horse_lv_img") as eui.Image).source = "icon_level_"+obj.iType+"_png";
			(tGroup.getChildByName("horse_head") as eui.Image).source = "horse"+obj.res_key+"_head01_png";
			for(let star = 1;star <= 5;star ++){
				if(star > obj.star)(tGroup.getChildByName("start_"+star) as eui.Image).source = "icon_stars_0_png";
			}

			panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				for(let thIndex in this.horseOwnData){
					let tobj = this.horseOwnData[thIndex]
					let tempPanel = groupShop.getChildByName("p_"+tobj.id) as eui.Panel;
					let tempGroup = tempPanel.getChildByName("group_1") as eui.Group;
					tempGroup.scaleX = 1;
					tempGroup.scaleY = 1;
					tempGroup.getChildByName("select_2_img").visible = false;
					
				}
				let groupHorse = panelT.getChildByName("group_1") as eui.Group;
				groupHorse.scaleX = 1.2;
				groupHorse.scaleY = 1.2;
				groupHorse.getChildByName("select_2_img").visible = true;
				this.horseItemS = obj.id;
				this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").source = "icon_level_"+obj.iType+"_png";
				this.btnPveAnim2D.source = "horse"+obj.res_key+"_body_png";

				this.updateHorseItemMiddle(obj);

				this.changeHorseRight(this.subSubCurPage);
			}, this);
			i ++;
		}

		// let showCnt = 0;
		// if(count >= 5)showCnt = 2;
		let groupItem = groupShop.getChildByName("p_"+this.horseItemS) as eui.Panel;
		let groupHorse = groupItem.getChildByName("group_1") as eui.Group;
		groupHorse.scaleX = 1.2;
		groupHorse.scaleY = 1.2;
		groupHorse.getChildByName("select_2_img").visible = true;

		if(this.curPage==2)this.changeHorseRight(1);
	}

	private initMergeClick(){
		this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").source = "icon_stats_s_png";
			this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").source = "icon_skill_n_png";
			this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").source = "icon_pedigree_n_png";
			this.horseSelectRightPanel.getChildByName("left_group_stat").visible = true;
			this.horseSelectRightPanel.getChildByName("left_skill_group").visible = false;
			this.horseSelectRightPanel.getChildByName("left_pedigree_group").visible = false;
		}, this);

		this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").source = "icon_stats_n_png";
			this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").source = "icon_skill_s_png";
			this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").source = "icon_pedigree_n_png";
			this.horseSelectRightPanel.getChildByName("left_group_stat").visible = false;
			this.horseSelectRightPanel.getChildByName("left_skill_group").visible = true;
			this.horseSelectRightPanel.getChildByName("left_pedigree_group").visible = false;
		}, this);

		this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("left_horse_stat_lb").source = "icon_stats_n_png";
			this.horseSelectRightPanel.getChildByName("left_horse_skill_lb").source = "icon_skill_n_png";
			this.horseSelectRightPanel.getChildByName("left_horse_pedigree_lb").source = "icon_pedigree_s_png";
			this.horseSelectRightPanel.getChildByName("left_group_stat").visible = false;
			this.horseSelectRightPanel.getChildByName("left_skill_group").visible = false;
			this.horseSelectRightPanel.getChildByName("left_pedigree_group").visible = true;
		}, this);

		this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").source = "icon_stats_s_png";
			this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").source = "icon_skill_n_png";
			this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").source = "icon_pedigree_n_png";
			this.horseSelectRightPanel.getChildByName("right_group_stat").visible = true;
			this.horseSelectRightPanel.getChildByName("right_skill_group").visible = false;
			this.horseSelectRightPanel.getChildByName("right_pedigree_group").visible = false;
		}, this);

		this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").source = "icon_stats_n_png";
			this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").source = "icon_skill_s_png";
			this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").source = "icon_pedigree_n_png";
			this.horseSelectRightPanel.getChildByName("right_group_stat").visible = false;
			this.horseSelectRightPanel.getChildByName("right_skill_group").visible = true;
			this.horseSelectRightPanel.getChildByName("right_pedigree_group").visible = false;
		}, this);

		this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("right_horse_stat_lb").source = "icon_stats_n_png";
			this.horseSelectRightPanel.getChildByName("right_horse_skill_lb").source = "icon_skill_n_png";
			this.horseSelectRightPanel.getChildByName("right_horse_pedigree_lb").source = "icon_pedigree_s_png";
			this.horseSelectRightPanel.getChildByName("right_group_stat").visible = false;
			this.horseSelectRightPanel.getChildByName("right_skill_group").visible = false;
			this.horseSelectRightPanel.getChildByName("right_pedigree_group").visible = true;
		}, this);

		this.horseSelectRightPanel.getChildByName("left_pre_horse_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			if(this.L_select_indx <= 0)return;
			this.L_select_indx --;
			this.mergeUpdate();
		}, this);

		this.horseSelectRightPanel.getChildByName("left_next_horse_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			if(this.L_select_indx >= ConstValue.cacheContract["nftLen"] - 1)return;
			this.L_select_indx ++;
			this.mergeUpdate();
		}, this);

		this.horseSelectRightPanel.getChildByName("right_pre_horse_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			if(this.R_select_indx <= 0)return;
			this.R_select_indx --;
			this.mergeUpdate();
		}, this);

		this.horseSelectRightPanel.getChildByName("right_next_horse_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			if(this.R_select_indx >= ConstValue.cacheContract["nftLen"] - 1)return;
			this.R_select_indx ++;
			this.mergeUpdate();
		}, this);
	}

	private mergeSelect(){
		this.L_select_indx = 0;
		this.R_select_indx = ConstValue.cacheContract["nftLen"] - 1;
	}

	private updateMergeConf(dData){
		this.mergeConf = dData;
		this.horseSelectRightPanel.getChildByName("low_merge_low_per").text = dData.low_success/10+"%";
		this.horseSelectRightPanel.getChildByName("low_merge_high_per").text = dData.low_fail/10+"%";
		this.horseSelectRightPanel.getChildByName("low_merge_high_lost_per").text = dData.low_fail_lost/10+"%";
		this.horseSelectRightPanel.getChildByName("high_merge_low_per").text = dData.high_success/10+"%";
		this.horseSelectRightPanel.getChildByName("high_merge_high_per").text = dData.high_fail/10+"%";
		this.horseSelectRightPanel.getChildByName("high_merge_high_lost_per").text = dData.high_fail_lost/10+"%";

		this.horseSelectRightPanel.getChildByName("low_merge_main").text = dData.low_cost_main;
		this.horseSelectRightPanel.getChildByName("low_merge_sub").text = dData.low_cost_sub;
		this.horseSelectRightPanel.getChildByName("high_merge_main").text = dData.high_cost_main;
		this.horseSelectRightPanel.getChildByName("high_merge_sub").text = dData.high_cost_sub;
	}

	private updateBreedConf(dData){
		this.mergeConf = dData;
		this.horseSelectRightPanel.getChildByName("low_merge_low_per").text = dData.low_success/10+"%";
		this.horseSelectRightPanel.getChildByName("low_merge_high_per").visible = false;
		this.horseSelectRightPanel.getChildByName("low_merge_high_lost_per").visible = false;
		this.horseSelectRightPanel.getChildByName("low_merge_high2_per").text = dData.low_fail/10+"%";
		this.horseSelectRightPanel.getChildByName("low_merge_high2_per").visible = true;

		this.horseSelectRightPanel.getChildByName("high_merge_low_per").text = dData.high_success/10+"%";
		this.horseSelectRightPanel.getChildByName("high_merge_high_per").visible = false;
		this.horseSelectRightPanel.getChildByName("high_merge_high_lost_per").visible = false;
		this.horseSelectRightPanel.getChildByName("high_merge_high2_per").text = dData.high_fail/10+"%";
		this.horseSelectRightPanel.getChildByName("high_merge_high2_per").visible = true;

		this.horseSelectRightPanel.getChildByName("low_merge_main").text = dData.low_cost_main;
		this.horseSelectRightPanel.getChildByName("low_merge_sub").text = dData.low_cost_sub;
		this.horseSelectRightPanel.getChildByName("high_merge_main").text = dData.high_cost_main;
		this.horseSelectRightPanel.getChildByName("high_merge_sub").text = dData.high_cost_sub;

		this.horseSelectRightPanel.getChildByName("low_merge_low_star").visible = false;
		this.horseSelectRightPanel.getChildByName("low_merge_high_star").visible = false;
		this.horseSelectRightPanel.getChildByName("high_merge_low_star").visible = false;
		this.horseSelectRightPanel.getChildByName("high_merge_high_star").visible = false;

		this.horseSelectRightPanel.getChildByName("star_bg_1").source = "tx_UNK_3_png";
		this.horseSelectRightPanel.getChildByName("star_bg_2").source = "icon_heart2_png";
		this.horseSelectRightPanel.getChildByName("star_bg_3").source = "tx_UNK_3_png";
		this.horseSelectRightPanel.getChildByName("star_bg_4").source = "icon_heart2_png";
	}

	private mergeUpdate(){
		this.horseSelectRightPanel.getChildByName("left_stallion_lb").text = "select "+(this.L_select_indx+1) +"/"+ConstValue.cacheContract["nftLen"];
		let L_group = this.horseSelectRightPanel.getChildByName("left_group_stat") as eui.Group;
		let obj = this.horseOwnData[this.L_select_indx.toString()];
		let sType1 = obj.iType;
		this.horseItemS = obj.id;
		this.horseSelectRightPanel.getChildByName("L_body").visible = true;
		this.horseSelectRightPanel.getChildByName("L_body").source = "horse"+obj.res_key+"_body_png";
		this.horseSelectRightPanel.getChildByName("L_name").text = obj.name;
		this.horseSelectRightPanel.getChildByName("L_head_bg").visible = true;
		this.horseSelectRightPanel.getChildByName("L_lv_img").visible = true;
		this.horseSelectRightPanel.getChildByName("L_lv_img").source = "icon_level_"+obj.iType+"_png";
		this.horseSelectRightPanel.getChildByName("L_star_own").visible = true;
		this.horseSelectRightPanel.getChildByName("L_star_own").text = obj.star;
		let sex = obj.iSex == 1 ? "icon_Male_png" : "icon_female_png";
		this.horseSelectRightPanel.getChildByName("L_sex").source = sex;

		this.horseSelectRightPanel.getChildByName("low_merge_low_star").text = obj.star + 1;
		this.horseSelectRightPanel.getChildByName("low_merge_high_star").text = obj.star;
		this.horseSelectRightPanel.getChildByName("high_merge_low_star").text = obj.star + 1;
		this.horseSelectRightPanel.getChildByName("high_merge_high_star").text = obj.star;

		(L_group.getChildByName("stamina_value") as eui.Label).visible = true;
		(L_group.getChildByName("stamina_value") as eui.Label).text = obj.stamina;
		(L_group.getChildByName("start_value") as eui.Label).visible = true;
		(L_group.getChildByName("start_value") as eui.Label).text = obj.start;
		(L_group.getChildByName("wisdom_value") as eui.Label).visible = true;
		(L_group.getChildByName("wisdom_value") as eui.Label).text = obj.wisdom;
		(L_group.getChildByName("constitution_value") as eui.Label).visible = true;
		(L_group.getChildByName("constitution_value") as eui.Label).text = obj.constitution;

		let energy_length = L_group.getChildByName("energy_length") as eui.Image;
		let strength_w = energy_length.width * (obj.strength*1.0/obj.MaxStrength);
		(L_group.getChildByName("strength_value") as eui.Image).visible = true;
		(L_group.getChildByName("strength_value") as eui.Image).width = strength_w;

		let speed_w = energy_length.width * (obj.speed*1.0/obj.MaxSpeed);
		(L_group.getChildByName("speed_value") as eui.Image).visible = true;
		(L_group.getChildByName("speed_value") as eui.Image).width = speed_w;

		let dexterity_w = energy_length.width * (obj.dexterity*1.0/obj.MaxDexterity);
		(L_group.getChildByName("dexterity_value") as eui.Image).visible = true;
		(L_group.getChildByName("dexterity_value") as eui.Image).width = dexterity_w;
		
		let burse_w = energy_length.width * (obj.burse*1.0/obj.MaxBurse);
		(L_group.getChildByName("burst_value") as eui.Image).visible = true;
		(L_group.getChildByName("burst_value") as eui.Image).width = burse_w;
		
		if(this.curPage == 2 && this.subCurPage == 2){
			let sData = CommonTools.getDataJsonStr("getMergeInfo",1,{iStar:obj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}

		this.horseSelectRightPanel.getChildByName("right_mare_lb").text = "match "+(this.R_select_indx+1) +"/"+ConstValue.cacheContract["nftLen"];
		L_group = this.horseSelectRightPanel.getChildByName("right_group_stat") as eui.Group;
		obj = this.horseOwnData[this.R_select_indx.toString()];
		let sType2 = obj.iType;

		this.horseSelectRightPanel.getChildByName("R_body").visible = true;
		this.horseSelectRightPanel.getChildByName("R_body").source = "horse"+obj.res_key+"_body_png";
		this.horseSelectRightPanel.getChildByName("R_name").text = obj.name;
		this.horseSelectRightPanel.getChildByName("R_head_bg").visible = true;
		this.horseSelectRightPanel.getChildByName("R_lv_img").visible = true;
		this.horseSelectRightPanel.getChildByName("R_lv_img").source = "icon_level_"+obj.iType+"_png";
		this.horseSelectRightPanel.getChildByName("R_star_own").visible = true;
		this.horseSelectRightPanel.getChildByName("R_star_own").text = obj.star;
		sex = obj.iSex == 1 ? "icon_Male_png" : "icon_female_png";
		this.horseSelectRightPanel.getChildByName("R_sex").source = sex;

		(L_group.getChildByName("R_stamina_value") as eui.Label).visible = true;
		(L_group.getChildByName("R_stamina_value") as eui.Label).text = obj.stamina;
		(L_group.getChildByName("R_start_value") as eui.Label).visible = true;
		(L_group.getChildByName("R_start_value") as eui.Label).text = obj.start;
		(L_group.getChildByName("R_wisdom_value") as eui.Label).visible = true;
		(L_group.getChildByName("R_wisdom_value") as eui.Label).text = obj.wisdom;
		(L_group.getChildByName("R_constitution_value") as eui.Label).visible = true;
		(L_group.getChildByName("R_constitution_value") as eui.Label).text = obj.constitution;

		strength_w = energy_length.width * (obj.strength*1.0/obj.MaxStrength);
		(L_group.getChildByName("R_strength_value") as eui.Image).visible = true;
		(L_group.getChildByName("R_strength_value") as eui.Image).width = strength_w;

		speed_w = energy_length.width * (obj.speed*1.0/obj.MaxSpeed);
		(L_group.getChildByName("R_speed_value") as eui.Image).visible = true;
		(L_group.getChildByName("R_speed_value") as eui.Image).width = speed_w;

		dexterity_w = energy_length.width * (obj.dexterity*1.0/obj.MaxDexterity);
		(L_group.getChildByName("R_dexterity_value") as eui.Image).visible = true;
		(L_group.getChildByName("R_dexterity_value") as eui.Image).width = dexterity_w;
		
		burse_w = energy_length.width * (obj.burse*1.0/obj.MaxBurse);
		(L_group.getChildByName("R_burst_value") as eui.Image).visible = true;
		(L_group.getChildByName("R_burst_value") as eui.Image).width = burse_w;

		if(this.curPage == 2 && this.subCurPage == 3){
			let sData = CommonTools.getDataJsonStr("getBreedInfo",1,{sType1:sType1,sType2:sType2});
			ConstValue.P_NET_OBJ.sendData(sData);
		}

	}

	private IsCanMerge(){
		if(this.L_select_indx == this.R_select_indx){
			this.addCommonTips(ConstValue.P_SAME_HORSE);
			return false;
		}
		let L_obj = this.horseOwnData[this.L_select_indx.toString()];
		let R_obj = this.horseOwnData[this.R_select_indx.toString()];
		if(L_obj.star != R_obj.star || L_obj.iType != R_obj.iType){
			this.addCommonTips(ConstValue.P_NOTMATCH_HORSE);
			return false;
		}
		if(L_obj.sellStatus == 1 || R_obj.sellStatus == 1){
			this.addCommonTips(ConstValue.P_ON_SALE);
			return false;
		}
		if(L_obj.exhibition == 1 || R_obj.exhibition == 1){
			this.addCommonTips(ConstValue.P_ON_EXHIBITION);
			return false;
		}
		if(L_obj.star == 5){
			this.addCommonTips(ConstValue.P_MERGEMAX_HORSE);
			return false;
		}
		if(this.mergeType == 1){
			if(ConstValue.cacheUserInfo.coin/ContractSol.EXCHANGE_RATE < this.mergeConf.low_cost_main || 
			   ConstValue.cacheUserInfo.diamond/ContractSol.EXCHANGE_RATE < this.mergeConf.low_cost_sub){
				this.addCommonTips(ConstValue.P_NOT_ENOUGH);
				return false;
			}
		}
		if(this.mergeType == 2){
			if(ConstValue.cacheUserInfo.coin/ContractSol.EXCHANGE_RATE < this.mergeConf.high_cost_main || 
			   ConstValue.cacheUserInfo.diamond/ContractSol.EXCHANGE_RATE < this.mergeConf.high_cost_sub){
				this.addCommonTips(ConstValue.P_NOT_ENOUGH);
				return false;
			}
		}
		return true;
	}

	private IsCanBreed(){
		if(this.L_select_indx == this.R_select_indx){
			this.addCommonTips(ConstValue.P_SAME_HORSE);
			return false;
		}
		let L_obj = this.horseOwnData[this.L_select_indx.toString()];
		let R_obj = this.horseOwnData[this.R_select_indx.toString()];
		if(L_obj.iSex == R_obj.iSex){
			this.addCommonTips(ConstValue.P_NOTMATCH_HORSE);
			return false;
		}
		if(L_obj.breed >= L_obj.breedMax || R_obj.breed >= R_obj.breedMax){
			this.addCommonTips(ConstValue.P_NO_BREED);
			return false;
		}
		if(L_obj.sellStatus == 1 || R_obj.sellStatus == 1){
			this.addCommonTips(ConstValue.P_ON_SALE);
			return false;
		}
		if(L_obj.exhibition == 1 || R_obj.exhibition == 1){
			this.addCommonTips(ConstValue.P_ON_EXHIBITION);
			return false;
		}
		if(this.mergeType == 1){
			if(ConstValue.cacheUserInfo.coin/ContractSol.EXCHANGE_RATE < this.mergeConf.low_cost_main || 
			   ConstValue.cacheUserInfo.diamond/ContractSol.EXCHANGE_RATE < this.mergeConf.low_cost_sub){
				this.addCommonTips(ConstValue.P_NOT_ENOUGH);
				return false;
			}
		}
		if(this.mergeType == 2){
			if(ConstValue.cacheUserInfo.coin/ContractSol.EXCHANGE_RATE < this.mergeConf.high_cost_main || 
			   ConstValue.cacheUserInfo.diamond/ContractSol.EXCHANGE_RATE < this.mergeConf.high_cost_sub){
				this.addCommonTips(ConstValue.P_NOT_ENOUGH);
				return false;
			}
		}
		return true;
	}

	public mergeNFTTransMain(){
		let iCost = this.mergeType == 1 ? this.mergeConf.low_cost_main : this.mergeConf.high_cost_main;
		ContractSol.maincoin_transfer(ContractSol.createAddress,parseInt(iCost)*ContractSol.EXCHANGE_RATE,ContractSol.MERGE_COST_MAIN_NFT);
	}

	public mergeNFTTransSub(){
		let iCost = this.mergeType == 1 ? this.mergeConf.low_cost_sub : this.mergeConf.high_cost_sub;
		ContractSol.subcoin_transfer(ContractSol.createAddress,parseInt(iCost)*ContractSol.EXCHANGE_RATE,ContractSol.MERGE_COST_SUB_NFT);
	}

	public breedNFTTransSub(){
		let iCost = this.mergeType == 1 ? this.mergeConf.low_cost_sub : this.mergeConf.high_cost_sub;
		ContractSol.subcoin_transfer(ContractSol.createAddress,parseInt(iCost)*ContractSol.EXCHANGE_RATE,ContractSol.BREED_COST_SUB_NFT);
	}

	public doMerge(){
		let L_obj = this.horseOwnData[this.L_select_indx.toString()];
		let R_obj = this.horseOwnData[this.R_select_indx.toString()];
		let sData = CommonTools.getDataJsonStr("doMergeNft",1,{iStar:R_obj.star,iMergeType:this.mergeType,iNft:R_obj.id,sOwner:ContractSol.sender,iSelectNft:L_obj.id});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	public doBreed(){
		let L_obj = this.horseOwnData[this.L_select_indx.toString()];
		let R_obj = this.horseOwnData[this.R_select_indx.toString()];
		let sData = CommonTools.getDataJsonStr("doBreedNft",1,{iMergeType:this.mergeType,iLeftNft:L_obj.id,sLeftType:L_obj.iType,iRightNft:R_obj.id,sRigthType:R_obj.iType});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	private createHorseMerge(){
		if(this.horseSelectRightPanel != null){
			this.context.removeChild(this.horseSelectRightPanel);
			this.horseSelectRightPanel = null;
		}

		this.mergeSelect();

		let leftX2 = 210;
		let downY2 = 0;
		if(ConstValue.deviveNormalScale >= 2){
			leftX2 -= 0;
			downY2 -= 0;
		}
		this.horseSelectRightPanel = new eui.Panel();
		this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/Merge_Right.exml";
		this.horseSelectRightPanel.title = "Title";
		this.horseSelectRightPanel.x = leftX2;
		this.horseSelectRightPanel.y = downY2;
		this.context.addChild(this.horseSelectRightPanel);
		CommonTools.fixFix(this.context,this.horseSelectRightPanel,2,0,-40);

		this.initMergeClick();

		this.horseSelectRightPanel.getChildByName("merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.mergeType = 1;
			if(!this.IsCanMerge())return;
			let R_obj = this.horseOwnData[this.R_select_indx.toString()];
			ContractSol.nft_approve(R_obj.id,ContractSol.MERGE_NFT);
		}, this);

		this.horseSelectRightPanel.getChildByName("advanced_merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.mergeType = 2;
			if(!this.IsCanMerge())return;
			let R_obj = this.horseOwnData[this.R_select_indx.toString()];
			ContractSol.nft_approve(R_obj.id,ContractSol.MERGE_NFT);
		}, this);

		this.mergeUpdate();

	}

	private closeMergeFail(){
		if(this.maskBg2 != null){
			this.context.removeChild(this.maskBg2);
			this.maskBg2 = null;
		}
		if(this.horseMergeResult != null){
			this.context.removeChild(this.horseMergeResult);
			this.horseMergeResult = null;
		}
	}

	private createMergeFail(index){
		CommonAudioHandle.playEffect("failure_mp3",1);
		this.maskBg2 = new eui.Image("black_mask_png");
		this.maskBg2.alpha = 0.9;
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

		this.horseMergeResult = new eui.Panel();
		this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Merge_fail.exml";
		this.horseMergeResult.title = "Title";
		this.horseMergeResult.horizontalCenter = 0;
		this.context.addChild(this.horseMergeResult);
		CommonTools.fixFix(this.context,this.horseMergeResult,2,0,-40);

		this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.closeMergeFail();
			ContractSol.nft_tokensOfOwner(ContractSol.sender);
		}, this);

		if(index == 2){
			this.horseMergeResult.getChildByName("merge_fail_icon").source = "icon_heart2_png";
		}

	}

	private createMergeSuccess(index,horseData){
		CommonAudioHandle.playEffect("success_mp3",1);
		this.maskBg2 = new eui.Image("black_mask_png");
		this.maskBg2.alpha = 0.9;
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

		this.horseMergeResult = new eui.Panel();
		this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Merge_success.exml";
		this.horseMergeResult.title = "Title";
		this.horseMergeResult.horizontalCenter = 0;
		this.context.addChild(this.horseMergeResult);
		CommonTools.fixFix(this.context,this.horseMergeResult,2,0,-40);

		this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.closeMergeFail();
			ContractSol.nft_tokensOfOwner(ContractSol.sender);
		}, this);

		if(index == 2){
			this.horseMergeResult.getChildByName("merge_success_title_img").source = "pic_breed_png";
		}

		this.horseMergeResult.getChildByName("merge_lv_img").source = "icon_level_"+horseData.iType+"_png";
		this.horseMergeResult.getChildByName("merge_fail_icon").source = "horse"+horseData.res_key+"_body_png";
		for(let starNum = 1;starNum<=5 ;starNum++){
			if(starNum > horseData.star)this.horseMergeResult.getChildByName("star"+starNum+"_img").source = "icon_stars_0_png";
		}
		this.horseMergeResult.getChildByName("horse_name_lb").text = horseData.name;
	}

	private createMergeSuccessT(horseData){
		CommonAudioHandle.playEffect("success_mp3",1);
		let tmaskBg2 = new eui.Image("black_mask_png");
		tmaskBg2.alpha = 0.9;
		tmaskBg2.width = this.context.getStageWidth();
		tmaskBg2.height = this.context.getStageHeight();
		this.context.addChild(tmaskBg2);

		let thorseMergeResult = new eui.Panel();
		thorseMergeResult.skinName = "resource/eui_skins/UserUI/Merge_success.exml";
		thorseMergeResult.title = "Title";
		thorseMergeResult.name = "p_"+horseData.name;
		thorseMergeResult.horizontalCenter = 0;
		this.context.addChild(thorseMergeResult);
		CommonTools.fixFix(this.context,thorseMergeResult,2,0,-40);

		thorseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.context.removeChild(tmaskBg2);
			this.context.removeChild(thorseMergeResult);
		}, this);

		let merge_fail_title_img = thorseMergeResult.getChildByName("merge_fail_title_img") as eui.Image;
		merge_fail_title_img.source = "pic_congratulation_png";
		thorseMergeResult.getChildByName("merge_success_title_img").visible = false;
		let horse_name_lb = thorseMergeResult.getChildByName("horse_name_lb") as eui.Label; 
		horse_name_lb.text = horseData.name;
		let merge_lv_img = thorseMergeResult.getChildByName("merge_lv_img") as eui.Image;
		merge_lv_img.source = "icon_level_"+horseData.iType+"_png";
		let merge_fail_icon = thorseMergeResult.getChildByName("merge_fail_icon") as eui.Image;
		merge_fail_icon.source = "horse"+horseData.res_key+"_body_png"
		for(let starNum = 1;starNum<=5 ;starNum++){
			if(starNum > horseData.star)(thorseMergeResult.getChildByName("star"+starNum+"_img") as eui.Image).source = "icon_stars_0_png";
		}
	}

	private createHorseBreeding(){
		if(this.horseSelectRightPanel != null){
			this.context.removeChild(this.horseSelectRightPanel);
			this.horseSelectRightPanel = null;
		}
		this.mergeSelect();

		let leftX2 = 210;
		let downY2 = 0;
		if(ConstValue.deviveNormalScale >= 2){
			leftX2 -= 0;
			downY2 -= 0;
		}
		this.horseSelectRightPanel = new eui.Panel();
		this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/Merge_Right.exml";
		this.horseSelectRightPanel.title = "Title";
		this.horseSelectRightPanel.x = leftX2;
		this.horseSelectRightPanel.y = downY2;
		this.context.addChild(this.horseSelectRightPanel);
		CommonTools.fixFix(this.context,this.horseSelectRightPanel,2,0,-40);

		this.initMergeClick();

		this.horseSelectRightPanel.getChildByName("L_sex").visible = true;
		this.horseSelectRightPanel.getChildByName("R_sex").visible = true;
		this.horseSelectRightPanel.getChildByName("merge_title_img").source = "BREEDING_png";
		this.horseSelectRightPanel.getChildByName("merge_btn_lb").text = "Breeding";
		this.horseSelectRightPanel.getChildByName("advanced_merge_btn_lb").text = "Advanced\nBreeding";

		this.horseSelectRightPanel.getChildByName("merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.mergeType = 1;
			if(!this.IsCanBreed())return;
			ContractSol.maincoin_transfer(ContractSol.createAddress,this.mergeConf.low_cost_main*ContractSol.EXCHANGE_RATE,ContractSol.BREED_COST_MAIN_NFT);	
		}, this);

		this.horseSelectRightPanel.getChildByName("advanced_merge_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.mergeType = 2;
			if(!this.IsCanBreed())return;
			ContractSol.maincoin_transfer(ContractSol.createAddress,this.mergeConf.high_cost_main*ContractSol.EXCHANGE_RATE,ContractSol.BREED_COST_MAIN_NFT);
		}, this);

		this.mergeUpdate();
	}

	private horseSelectUI(){
		if(this.subCurPage == 1){
			this.maskNew.source = "horse_home_page2_jpg";
			this.createHorseItem();
			if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = true;
			if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = true;
			this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = true;
			this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = true;
		}else if(this.subCurPage == 2){
			this.maskNew.source = "horse_merge_page2_jpg";
			this.clearPage2HorseHome();
			this.createHorseMerge();
		}else if(this.subCurPage == 3){
			this.maskNew.source = "horse_merge_page2_jpg";
			this.clearPage2HorseHome();
			this.createHorseBreeding();
		}
	}

	private royalClubUI(){
		let leftX2 = 240;
		let downY2 = 68;
		if(ConstValue.deviveNormalScale >= 2){
			leftX2 += 70;
			downY2 -= 0;
		}

		this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
		this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;

		this.horseSelectMiddlePanel = new eui.Panel();
		this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/RoyalClub.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.x = leftX2;
		this.horseSelectMiddlePanel.y = downY2;
        this.context.addChild(this.horseSelectMiddlePanel);
		CommonTools.fixFix(this.context,this.horseSelectMiddlePanel,2,0,-40);
		this.horseSelectMiddlePanel.getChildByName("ticket_price_lb").text = ConstValue.cacheUserInfo.ticketPrice;

		this.horseSelectMiddlePanel.getChildByName("pay_main_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			let pay_main = parseInt(this.horseSelectMiddlePanel.getChildByName("pay_main").text);
			if(ConstValue.cacheUserInfo.coin/ContractSol.EXCHANGE_RATE < pay_main){
				CommonTools.addCommonTips(this.context,ConstValue.P_NOT_ENOUGH);
				return;
			}
			ContractSol.maincoin_transfer(ContractSol.createAddress,pay_main*ContractSol.EXCHANGE_RATE,ContractSol.BUY_TICKET);
		}, this);

		this.horseSelectMiddlePanel.getChildByName("up_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			let total_lb = parseInt(this.horseSelectMiddlePanel.getChildByName("total_lb").text);
			if(total_lb>=3)return;
			total_lb += 1
			this.horseSelectMiddlePanel.getChildByName("total_lb").text = total_lb;
			this.horseSelectMiddlePanel.getChildByName("pay_main").text = total_lb*ConstValue.cacheUserInfo.ticketPrice;
		}, this);

		this.horseSelectMiddlePanel.getChildByName("down_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			let total_lb = parseInt(this.horseSelectMiddlePanel.getChildByName("total_lb").text);
			if(total_lb<=1)return;
			total_lb -= 1
			this.horseSelectMiddlePanel.getChildByName("total_lb").text = total_lb;
			this.horseSelectMiddlePanel.getChildByName("pay_main").text = total_lb*ConstValue.cacheUserInfo.ticketPrice;
		}, this);
	}

	private CreateMarketItems(opType){
		let leftX2 = 240;
		let downY2 = 68;
		if(ConstValue.deviveNormalScale >= 2){
			leftX2 += 70;
			downY2 -= 0;
		}

		this.horseSelectMiddlePanel = new eui.Panel();
		this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Market_horses.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.x = leftX2;
		this.horseSelectMiddlePanel.y = downY2;
        this.context.addChild(this.horseSelectMiddlePanel);
		CommonTools.fixFix(this.context,this.horseSelectMiddlePanel,2,0,-40);

		let scroll = this.horseSelectMiddlePanel.getChildByName("scroll") as eui.Scroller;
		let group = scroll.getChildByName("scroll_group")as eui.Group;
		group.removeChildren();

		let hData = null;
		if(opType == 1){
			hData = this.horseMarketData;
		}else{
			hData = this.horseOwnData;
		}
		let i = 1;
		for(let index in hData){
			let obj = hData[index];
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/horseItemGroup_market.exml";
			panelT.name = "p_"+obj.id;
			let column = i%3 == 0? 3 : i%3;
			let row = 0;
			if(i%3==0){
				row = i/3.0;
			}else{
				row = i/3.0 + 1;
			}
			panelT.x = (column - 1)*212;
			panelT.y = 278*(Math.floor(row - 1));
			group.addChild(panelT);

			let group_1 = panelT.getChildByName("group_1") as eui.Group;
			
			if(opType == 1){
				let pay_money = group_1.getChildByName("pay_money") as eui.Label;
				pay_money.text = obj.money;
			}else if(opType == 2){
				group_1.getChildByName("btn_shop").visible = false;
				if(obj.sellStatus == 1){
					let pay_money = group_1.getChildByName("pay_money") as eui.Label;
					pay_money.text = "selling";
				}else{
					group_1.getChildByName("pay_money").visible = false;
				}
			}

			let horse_name = group_1.getChildByName("horse_name") as eui.Label;
			horse_name.text = obj.name;
			let horse_index = group_1.getChildByName("horse_index") as eui.Label;
			horse_index.text = "#"+obj.id;
			let horse_lv_img = group_1.getChildByName("horse_lv_img") as eui.Image;
			horse_lv_img.source = "icon_level_"+obj.iType+"_png";
			let horse_score = group_1.getChildByName("horse_score") as eui.Label;
			horse_score.text = obj.score;
			let horse_body = group_1.getChildByName("horse_body") as eui.Image;
			horse_body.source = "horse"+obj.res_key+"_body_png"
			let horse_sex = group_1.getChildByName("horse_sex") as eui.Image;
			horse_sex.source = obj.iSex == 1 ? "icon_Male_png" : "icon_female_png";
			for(let starNum = 1;starNum<=5 ;starNum++){
				if(starNum > obj.star){
					let horse_star = group_1.getChildByName("start_"+starNum) as eui.Image;
					horse_star.source = "icon_stars_0_png";
				}
			}

			if(this.horseIndexS == 0){
				this.horseIndexS = obj.id;
				group_1.getChildByName("select_2_img").visible = true;
				this.panel.getChildByName("buynft_group").getChildByName("buy_nft_main").text = obj.money
				this.changeHorseRight(1);
			}
			panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				let ttp = group.getChildByName("p_"+this.horseIndexS) as eui.Panel;
				let groupT = ttp.getChildByName("group_1") as eui.Group;
				groupT.getChildByName("select_2_img").visible = false;
				this.horseIndexS = obj.id;
				group_1.getChildByName("select_2_img").visible = true;
				this.panel.getChildByName("buynft_group").getChildByName("buy_nft_main").text = obj.money
				this.changeHorseRight(this.subSubCurPage);
			}, this);

			i ++;
		}
	}

	private MarketUI(){
		if(this.horseMarketData == null)return;
		// this.changeHorseRight(1);
		this.CreateMarketItems(1);
	}

	private MyInventoryUI(){
		if(ConstValue.cacheContract["nftLen"]==0)
		{
			CommonTools.addCommonTips(this.context,ConstValue.P_NO_HORSE);
			return;
		}
		if(this.horseOwnData != null){
			// this.changeHorseRight(1);
			this.CreateMarketItems(2);
		}
	}

	private horseMarketUI(){
		this.maskNew.source = "horse_market_page5_jpg";
		if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = false;
		if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = false;
		if(this.subCurPage == 1){
			this.royalClubUI();
		}else if(this.subCurPage == 2){
			this.MarketUI();
		}else if(this.subCurPage == 3){
			this.MyInventoryUI();
		}
	}

	private showTrainingSelect(index){
		this.horseSelectLeftPanel.getChildByName("training_img_01").source = "btn_TNGP_png";
		this.horseSelectLeftPanel.getChildByName("training_img_01").alpha = 0.5;
		this.horseSelectLeftPanel.getChildByName("training_img_02").source = "btn_TNGFR_png";
		this.horseSelectLeftPanel.getChildByName("training_img_02").alpha = 0.7;
		this.horseSelectLeftPanel.getChildByName("training_img_03").source = "btn_TNGOBS_png";
		this.horseSelectLeftPanel.getChildByName("training_img_03").alpha = 0.7;
		this.horseSelectLeftPanel.getChildByName("training_img_04").source = "btn_TNGtrot_png";
		this.horseSelectLeftPanel.getChildByName("training_img_04").alpha = 0.7;
		this.horseSelectLeftPanel.getChildByName("training_img_05").source = "btn_TNGC_png";
		this.horseSelectLeftPanel.getChildByName("training_img_05").alpha = 0.5;
		let resName = "";
		if(index == 1){
			resName = "btn_TNGP_S_png";
		}else if(index == 2){
			resName = "btn_TNGFR_S_png";
		}else if(index == 3){
			resName = "btn_TNGOBS_S_png";
		}else if(index == 4){
			resName = "btn_TNGtrot_S_png";
		}else if(index == 5){
			resName = "btn_TNGC_S_png";
		}
		this.horseSelectLeftPanel.getChildByName("training_img_0"+index).source = resName;
		this.horseSelectLeftPanel.getChildByName("training_img_0"+index).alpha = 1;
	}
	
	private closeWaitingAnim(){
		if(this.maskBg2 != null){
			if(this.btnPveAnim != null){
				this.btnPveAnim.removeEventListener(egret.Event.COMPLETE);
				if(this.horseFunc != null){
					this.btnPveAnim.removeEventListener(egret.Event.ENTER_FRAME,this.horseFunc,this);
					this.horseFunc = null;
				}
				this.context.removeChild(this.btnPveAnim);
				this.btnPveAnim = null;
			}
			this.context.removeChild(this.maskBg2)
			this.maskBg2 = null
		}
	}

	public showWaitingAnim(){
		this.maskBg2 = new eui.Image("horse_playToEarn_page4_jpg");
		this.maskBg2.alpha = 1;
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.maskBg2.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			this.closeWaitingAnim()
		}, this);
		this.context.addChild(this.maskBg2);
		this.drawHorse()
	}

	public startTraining(index){
		if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = false;
		if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = false;
		this.horseSelectLeftPanel.visible = false;
		this.horseSelectMiddlePanel.visible = false;
		this.horseSelectRightPanel.visible = false;
		this.horseSelectPanel.visible = false;
		this.btnPveAnimX = -200;
		this.setTHorseXY();
		this.drawTraining(index);
	}

	private createTrainingSuccess(dData){
		CommonAudioHandle.playEffect("success_mp3",1);
		this.maskBg2 = new eui.Image("black_mask_png");
		this.maskBg2.alpha = 0.9;
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

		this.horseMergeResult = new eui.Panel();
		this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Training_success.exml";
		this.horseMergeResult.title = "Title";
		this.horseMergeResult.horizontalCenter = 0;
		this.context.addChild(this.horseMergeResult);
		CommonTools.fixFix(this.context,this.horseMergeResult,2,0,-40);

		this.horseMergeResult.getChildByName("score").text = dData.score;
		this.horseMergeResult.getChildByName("score_add").text = dData.addSum;
		this.horseMergeResult.getChildByName("strength_add").text = dData.iAddstrength;
		this.horseMergeResult.getChildByName("speed_add").text = dData.iAddspeed;
		this.horseMergeResult.getChildByName("dexterity_add").text = dData.iAdddexterity;
		this.horseMergeResult.getChildByName("burst_add").text = dData.iAddburse;
		let energy_length = this.horseMergeResult.getChildByName("energy_length") as eui.Image;

		let strength_w = energy_length.width * (dData.strength*1.0/dData.MaxStrength);
		this.horseMergeResult.getChildByName("strength_value").width = strength_w;
		this.horseMergeResult.getChildByName("strength_text").text = dData.strength+"/"+dData.MaxStrength;

		let speed_w = energy_length.width * (dData.speed*1.0/dData.MaxSpeed);
		this.horseMergeResult.getChildByName("speed_value").width = speed_w;
		this.horseMergeResult.getChildByName("speed_text").text = dData.speed+"/"+dData.MaxSpeed;

		let dexterity_w = energy_length.width * (dData.dexterity*1.0/dData.MaxDexterity);
		this.horseMergeResult.getChildByName("dexterity_value").width = dexterity_w;
		this.horseMergeResult.getChildByName("dexterity_text").text = dData.dexterity+"/"+dData.MaxDexterity;

		let burse_w = energy_length.width * (dData.burse*1.0/dData.MaxBurse);
		this.horseMergeResult.getChildByName("burst_value").width = burse_w;
		this.horseMergeResult.getChildByName("burst_text").text = dData.burse+"/"+dData.MaxBurse;

		this.horseMergeResult.getChildByName("merge_lv_img").source = "icon_level_"+dData.iType+"_png";
		this.horseMergeResult.getChildByName("merge_fail_icon").source = "horse"+dData.res_key+"_body_png";
		for(let starNum = 1;starNum<=5 ;starNum++){
			if(starNum > dData.star)this.horseMergeResult.getChildByName("star_"+starNum).source = "icon_stars_0_png";
		}
		this.horseMergeResult.getChildByName("name").text = dData.name;

		this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.closeMergeFail();
			ContractSol.nft_tokensOfOwner(ContractSol.sender);
		}, this);
	}

	private stopTraining(){
		if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = true;
		if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = true;
		this.horseSelectLeftPanel.visible = true;
		this.horseSelectMiddlePanel.visible = true;
		this.horseSelectRightPanel.visible = true;
		this.horseSelectPanel.visible = true;
		if(this.btnPveAnim != null){
			this.btnPveAnim.removeEventListener(egret.Event.COMPLETE);
			if(this.horseFunc != null){
				this.btnPveAnim.removeEventListener(egret.Event.ENTER_FRAME,this.horseFunc,this);
				this.horseFunc = null;
			}
			this.panel.removeChild(this.btnPveAnim);
			this.btnPveAnim = null;
		}
		let hObj = this.getOwnHorseInfoById(this.horseItemS);
		let sData = CommonTools.getDataJsonStr("doTrainNft",1,{nftIndex:hObj.id,iType:this.mergeType});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	private updateTrainConf(){
		for(let i=1;i<=4;i++){
			this.horseSelectRightPanel.getChildByName("s_"+i).visible = false;
			this.horseSelectRightPanel.getChildByName("sp_"+i).visible = false;
			this.horseSelectRightPanel.getChildByName("d_"+i).visible = false;
			this.horseSelectRightPanel.getChildByName("b_"+i).visible = false;
		}
		for(let i=1;i<=4;i++){
			if(this.mergeConf.addList[0] >= i)this.horseSelectRightPanel.getChildByName("s_"+i).visible = true;
			if(this.mergeConf.addList[1] >= i)this.horseSelectRightPanel.getChildByName("sp_"+i).visible = true;
			if(this.mergeConf.addList[2] >= i)this.horseSelectRightPanel.getChildByName("d_"+i).visible = true;
			if(this.mergeConf.addList[3] >= i)this.horseSelectRightPanel.getChildByName("b_"+i).visible = true;
		}
		this.horseSelectRightPanel.getChildByName("energy_cost").text = -this.mergeConf.costEnergy;
		this.horseSelectRightPanel.getChildByName("train_cost_sub").text = this.mergeConf.costSubCoin;
		
	}

	private updateTraining(){
		if(this.horseSelectRightPanel == null){
			let leftX = 900;
			let downY = 100;
			let leftX2 = 420;
			let downY2 = 180;
			let leftX3 = 0;
			let downY3 = 0;
			if(ConstValue.deviveNormalScale >= 2){
				leftX -= 0;
				downY -= 0;
				leftX2 -= 80;
				downY2 -= 200;
				leftX3 -= 0;
				downY3 -= 0;
			}

			this.horseSelectRightPanel = new eui.Panel();
			this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/Training_right.exml";
			this.horseSelectRightPanel.title = "Title";
			this.horseSelectRightPanel.x = leftX;
			this.horseSelectRightPanel.y = downY;
			this.context.addChild(this.horseSelectRightPanel);
			CommonTools.fixFix(this.context,this.horseSelectRightPanel,2,0,-40);

			this.horseSelectMiddlePanel = new eui.Panel();
			this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Training_middle.exml";
			this.horseSelectMiddlePanel.title = "Title2";
			this.horseSelectMiddlePanel.x = leftX2;
			this.horseSelectMiddlePanel.y = downY2;
			this.horseSelectMiddlePanel.scaleX = 0.7;
			this.horseSelectMiddlePanel.scaleY = 0.7;
			this.context.addChild(this.horseSelectMiddlePanel);
			CommonTools.fixFix(this.context,this.horseSelectMiddlePanel,2,0,-40);

			this.horseSelectLeftPanel = new eui.Panel();
			this.horseSelectLeftPanel.skinName = "resource/eui_skins/UserUI/Training_left.exml";
			this.horseSelectLeftPanel.title = "Title3";
			this.horseSelectLeftPanel.x = leftX3;
			this.horseSelectLeftPanel.y = downY3;
			this.context.addChild(this.horseSelectLeftPanel);
			CommonTools.fixFix(this.context,this.horseSelectLeftPanel,2,0,-40);

			let obj = this.getPOwnHorseInfoById(this.horseItemS);
			this.updateHorseItemMiddle(obj);
			let energy_length = this.horseSelectRightPanel.getChildByName("energy_bg") as eui.Image;
			let strength_w = energy_length.width * (obj.strength*1.0/obj.MaxStrength);
			let energy_w = energy_length.width * (obj.energy*1.0/obj.energyMax);
			this.horseSelectRightPanel.getChildByName("energy_value").width = energy_w;

			this.horseSelectLeftPanel.getChildByName("btn_back_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.changePage("rank_head_01");
			}, this);

			this.horseSelectRightPanel.getChildByName("train_btn_img").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				let iCost = parseInt(this.horseSelectRightPanel.getChildByName("train_cost_sub").text);
				let energyCost = parseInt(this.horseSelectRightPanel.getChildByName("energy_cost").text);
				if(ConstValue.cacheUserInfo.diamond < iCost*ContractSol.EXCHANGE_RATE){
					this.addCommonTips(ConstValue.P_NOT_ENOUGH);
					return false;
				}
				if(obj.energy < energyCost*-1){
					this.addCommonTips(ConstValue.P_NOT_ENOUGH);
					return false;
				}
				ContractSol.subcoin_transfer(ContractSol.createAddress,iCost*ContractSol.EXCHANGE_RATE,ContractSol.TRAIN_COST_SUB_NFT);
			}, this);

			this.horseSelectRightPanel.getChildByName("select_1").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.horseSelectRightPanel.getChildByName("select_1_bg").visible = true;
				this.horseSelectRightPanel.getChildByName("select_2_bg").visible = false;
				this.horseSelectRightPanel.getChildByName("select_3_bg").visible = false;
			}, this);

			this.horseSelectRightPanel.getChildByName("select_2").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.horseSelectRightPanel.getChildByName("select_1_bg").visible = false;
				this.horseSelectRightPanel.getChildByName("select_2_bg").visible = true;
				this.horseSelectRightPanel.getChildByName("select_3_bg").visible = false;
			}, this);

			this.horseSelectRightPanel.getChildByName("select_3").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				this.horseSelectRightPanel.getChildByName("select_1_bg").visible = false;
				this.horseSelectRightPanel.getChildByName("select_2_bg").visible = false;
				this.horseSelectRightPanel.getChildByName("select_3_bg").visible = true;
			}, this);

			for(let i=1;i<=4;i++){
				this.horseSelectRightPanel.getChildByName("s_"+i).visible = false;
				this.horseSelectRightPanel.getChildByName("sp_"+i).visible = false;
				this.horseSelectRightPanel.getChildByName("d_"+i).visible = false;
				this.horseSelectRightPanel.getChildByName("b_"+i).visible = false;
			}

			let sData = CommonTools.getDataJsonStr("getTrainInfo",1,{iType:3});
			ConstValue.P_NET_OBJ.sendData(sData);
			this.mergeType = 3;

			for(let tIndex = 1;tIndex <= 5;tIndex ++){
				this.horseSelectLeftPanel.getChildByName("training_img_0"+tIndex).addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
					CommonAudioHandle.playEffect("playBomb_mp3",1);
					this.showTrainingSelect(tIndex);
					this.mergeType = tIndex;
					let sData = CommonTools.getDataJsonStr("getTrainInfo",1,{iType:tIndex});
					ConstValue.P_NET_OBJ.sendData(sData);
				}, this);
			}
		}
	}

	private clearTraining(){
		if(this.horseSelectRightPanel != null){
			this.context.removeChild(this.horseSelectRightPanel);
			this.horseSelectRightPanel = null;
		}
		if(this.horseSelectMiddlePanel != null){
			this.context.removeChild(this.horseSelectMiddlePanel);
			this.horseSelectMiddlePanel = null;
		}
		if(this.horseSelectLeftPanel != null){
			this.context.removeChild(this.horseSelectLeftPanel);
			this.horseSelectLeftPanel = null;
		}
	}

	private hideForAll(){
		this.panel.getChildByName("rank_grounp_main").visible = false;
		this.panel.getChildByName("up_item_group").visible = false;
		this.panel.getChildByName("horse_name_group").visible = false;
		if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = false;
		if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = false;
	}	

	private createCargoSuccess(index,dData,isPedd){
		if(index == 1){
			CommonAudioHandle.playEffect("success_mp3",1);
		}else{
			CommonAudioHandle.playEffect("failure_mp3",1);
		}
		this.maskBg2 = new eui.Image("black_mask_png");
		this.maskBg2.alpha = 0.9;
		this.maskBg2.width = this.context.getStageWidth();
		this.maskBg2.height = this.context.getStageHeight();
		this.context.addChild(this.maskBg2);

		this.horseMergeResult = new eui.Panel();
		this.horseMergeResult.skinName = "resource/eui_skins/UserUI/Cargo_success.exml";
		this.horseMergeResult.title = "Title";
		this.horseMergeResult.horizontalCenter = 0;
		this.horseMergeResult.verticalCenter = 0;
		this.context.addChild(this.horseMergeResult);
		CommonTools.fixFix(this.context,this.horseMergeResult,2,0,-40);

		if(index == 2){
			this.horseMergeResult.getChildByName("title_img").source = "pic_lose_png";
			this.horseMergeResult.getChildByName("add_coin").text = "+ 0";
		}else{
			this.horseMergeResult.getChildByName("add_coin").text = "+ " + dData.iCacl;
		}
		if(isPedd == 1){
			this.horseMergeResult.getChildByName("coin_icon_t").source = "icon_coin1_png";
		}

		this.horseMergeResult.getChildByName("merge_fail_confirm").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.closeMergeFail();
			FightingModule.Delay(10000, function(){
				ContractSol.maincoin_balanceOf(ContractSol.sender);
				ContractSol.subcoin_balanceOf(ContractSol.sender);
			}, this);
		}, this);

	}

	private task01UI(){
		this.panel.getChildByName("up_item_group").visible = true;
		this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
		this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;

		this.horseSelectMiddlePanel = new eui.Panel();
		this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select_01.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.horizontalCenter = 0;
        this.horseSelectMiddlePanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectMiddlePanel);
		CommonTools.fixFix(this.context,this.horseSelectMiddlePanel,2,0,-40);

		this.horseSelectMiddlePanel.getChildByName("clain_rewards_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			if(parseInt(this.horseSelectMiddlePanel.getChildByName("my_reward_tip").text) <=0 )return;
			this.addCommonTips(ConstValue.P_PUSHING_TR);
			let sData = CommonTools.getDataJsonStr("claimExhi",1,{lNft:ConstValue.cacheContract["nftIndex"]});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		this.tipsPanel = this.horseSelectMiddlePanel;

		let L_select_group = this.horseSelectMiddlePanel.getChildByName("L_select_group") as eui.Group;
		let scroll = L_select_group.getChildByName("L_scoller") as eui.Scroller;
		let group = scroll.getChildByName("L_s_group")as eui.Group;
		group.removeChildren();

		let i = 1;
		let tL_score = 0;
		let tL_horse = 0;
		let L_select_cnt = L_select_group.getChildByName("L_select_cnt") as eui.Label;
		let L_select_score = L_select_group.getChildByName("L_select_score") as eui.Label;

		for(let index in this.horseOwnData){
			let obj = this.horseOwnData[index];
			if(obj.sellStatus != 1){
				tL_score += obj.score;
				tL_horse += 1;
			}
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/horseItemGroup_ranch.exml";
			panelT.name = "p_"+obj.id;
			let column = i%3 == 0? 3 : i%3;
			let row = 0;
			if(i%3==0){
				row = i/3.0;
			}else{
				row = i/3.0 + 1;
			}
			panelT.x = 20+(column - 1)*120;
			panelT.y = 10+145*(Math.floor(row - 1));
			group.addChild(panelT);

			let group_1 = panelT.getChildByName("group_1") as eui.Group;

			(group_1.getChildByName("horse_body") as eui.Image).source = "horse"+obj.res_key+"_body_png";
			(group_1.getChildByName("horse_lv_img") as eui.Image).source = "icon_level_"+obj.iType+"_png";
			(group_1.getChildByName("name") as eui.Label).text = obj.name;
			(group_1.getChildByName("score") as eui.Label).text = obj.score;
			for(let star = 1;star <= 5;star ++){
				if(star > obj.star)(group_1.getChildByName("start_"+star) as eui.Image).source = "icon_stars_0_png";
			}

			panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				if(obj.sellStatus==1){
					this.addCommonTips(ConstValue.P_ON_SALE);
					return;
				}
				let tCheck = group_1.getChildByName("L_select_checked").visible;
				group_1.getChildByName("L_select_checked").visible = !tCheck;
				let tScore = 0;
				let tHorseMax = 0;
				let tHorse = 0;
				for(let index1 in this.horseOwnData){
					tHorseMax+=1;
				}
				for(let index2 in this.horseOwnData){
					let tobj = this.horseOwnData[index2];
					if(((group.getChildByName("p_"+tobj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible){
						tScore += tobj.score;
						tHorse += 1;
					}
				}
				L_select_cnt.text = tHorse+"/"+tHorseMax;
				L_select_score.text = tScore.toString();
			}, this);

			i ++;
		}
		i -= 1;
		L_select_cnt.text = "0/"+i;
		L_select_score.text = "0";

		L_select_group.getChildByName("L_join_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			let sArr = new Array();
			for(let index in this.horseOwnData){
				let obj = this.horseOwnData[index];
				if(((group.getChildByName("p_"+obj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible)sArr.push(obj.id);
			}
			let sData = CommonTools.getDataJsonStr("joinExhi",1,{lSelectNft:sArr,lNft:ConstValue.cacheContract["nftIndex"]});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		let lChecked = L_select_group.getChildByName("L_select_checked") as eui.Image;
		lChecked.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			lChecked.visible = false;
			L_select_cnt.text = 0+"/"+i;
			L_select_score.text = "0";
			for(let index in this.horseOwnData){
				let obj = this.horseOwnData[index];
				((group.getChildByName("p_"+obj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible=false;
			}
		}, this);
		let lCheckedBG = L_select_group.getChildByName("lCheckedBG") as eui.Image;
		lCheckedBG.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			lChecked.visible = true;
			L_select_cnt.text = tL_horse+"/"+i;
			L_select_score.text = tL_score.toString();
			for(let index in this.horseOwnData){
				let obj = this.horseOwnData[index];
				if(obj.sellStatus!=1)
				((group.getChildByName("p_"+obj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible=true;
			}
		}, this);

		let M_select_group = this.horseSelectMiddlePanel.getChildByName("M_select_groupp") as eui.Group;
		let M_scoller = M_select_group.getChildByName("M_scrolle") as eui.Scroller;
		let M_s_group = M_scoller.getChildByName("M_s_group")as eui.Group;
		M_s_group.removeChildren();

		let ii = 1;
		let tM_score = 0;
		let tM_horse = 0;
		let M_select_cnt = M_select_group.getChildByName("M_select_cnt") as eui.Label;
		let M_select_score = M_select_group.getChildByName("M_select_score") as eui.Label;

		for(let index in this.horseOwnData){	
			let obj = this.horseOwnData[index];
			if(obj.exhibition != null && obj.exhibition == 1){
				tM_score += obj.score;
				tM_horse += 1;
			}else{
				continue;
			}
			let panelT = new eui.Panel();
			panelT.skinName = "resource/eui_skins/UserUI/horseItemGroup_ranch.exml";
			panelT.name = "p2_"+obj.id;
			let column = ii%3 == 0? 3 : ii%3;
			let row = 0;
			if(ii%3==0){
				row = ii/3.0;
			}else{
				row = ii/3.0 + 1;
			}
			panelT.x = 20+(column - 1)*120;
			panelT.y = 10+145*(Math.floor(row - 1));
			M_s_group.addChild(panelT);

			let group_1 = panelT.getChildByName("group_1") as eui.Group;

			(group_1.getChildByName("horse_body") as eui.Image).source = "horse"+obj.res_key+"_body_png";
			(group_1.getChildByName("horse_lv_img") as eui.Image).source = "icon_level_"+obj.iType+"_png";
			(group_1.getChildByName("name") as eui.Label).text = obj.name;
			(group_1.getChildByName("score") as eui.Label).text = obj.score;
			for(let star = 1;star <= 5;star ++){
				if(star > obj.star)(group_1.getChildByName("start_"+star) as eui.Image).source = "icon_stars_0_png";
			}

			panelT.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
				CommonAudioHandle.playEffect("playBomb_mp3",1);
				let tCheck = group_1.getChildByName("L_select_checked").visible;
				group_1.getChildByName("L_select_checked").visible = !tCheck;
				let tScore = 0;
				let tHorseMax = 0;
				let tHorse = 0;
				for(let index1 in this.horseOwnData){
					let tobj = this.horseOwnData[index1];
					let p2Obj = M_s_group.getChildByName("p2_"+tobj.id) as eui.Group;
					if(p2Obj)tHorseMax+=1;
				}
				for(let index2 in this.horseOwnData){
					let tobj = this.horseOwnData[index2];
					let p2Obj = M_s_group.getChildByName("p2_"+tobj.id) as eui.Group;
					if(p2Obj){
						if(((M_s_group.getChildByName("p2_"+tobj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible){
							tScore += tobj.score;
							tHorse += 1;
						}
					}
				}
				M_select_cnt.text = tHorse+"/"+tHorseMax;
				M_select_score.text = tScore.toString();
			}, this);

			if(obj.exhibition != null && obj.exhibition == 1)ii += 1;
		}
		ii -= 1;
		M_select_cnt.text = "0/"+ii;
		M_select_score.text = "0";

		this.horseSelectMiddlePanel.getChildByName("my_horse_num").text = tM_horse;
		this.horseSelectMiddlePanel.getChildByName("my_reward_round").text = tM_score;

		M_select_group.getChildByName("M_rest_btn").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			let sArr = new Array();
			for(let index in this.horseOwnData){
				let obj = this.horseOwnData[index];
				let p2Obj = M_s_group.getChildByName("p2_"+obj.id) as eui.Group;
				if(p2Obj){
					if(((M_s_group.getChildByName("p2_"+obj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible)sArr.push(obj.id);
				}
			}
			let sData = CommonTools.getDataJsonStr("gorestExhi",1,{lSelectNft:sArr,lNft:ConstValue.cacheContract["nftIndex"]});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		let MChecked = M_select_group.getChildByName("M_select_checked") as eui.Image;
		MChecked.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			MChecked.visible = false;
			M_select_cnt.text = 0+"/"+ii;
			M_select_score.text = "0";
			for(let index in this.horseOwnData){
				let obj = this.horseOwnData[index];
				let p2Obj = M_s_group.getChildByName("p2_"+obj.id) as eui.Group;
				if (p2Obj)((M_s_group.getChildByName("p2_"+obj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible=false;
			}
		}, this);
		let MCheckedBG = M_select_group.getChildByName("mCheckedBG") as eui.Image;
		MCheckedBG.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			MChecked.visible = true; 
			M_select_cnt.text = tM_horse+"/"+ii;
			M_select_score.text = tM_score.toString();
			for(let index in this.horseOwnData){
				let obj = this.horseOwnData[index];
				let p2Obj = M_s_group.getChildByName("p2_"+obj.id) as eui.Group;
				if (p2Obj)((M_s_group.getChildByName("p2_"+obj.id) as eui.Group).getChildByName("group_1") as eui.Group).getChildByName("L_select_checked").visible=true;
			}
		}, this);

	}

	private updateTask02(dData){
		this.horseSelectRightPanel.getChildByName("success_rate").text = dData.success/10 + "%";
		this.horseSelectRightPanel.getChildByName("reward").text = dData.min/1000.0 + " ~ " + dData.max/1000.0;
	}

	private task02UI(){
		this.panel.getChildByName("up_item_group").visible = false;
		let leftX2 = 280;
		let downY2 = 180;
		this.btnPveAnimX = 280;
		this.setHorseXY();
		if(ConstValue.deviveNormalScale >= 2){
			leftX2 -= 80;
			downY2 -= 200;
			this.btnPveAnimX += 0;
		}

		this.horseSelectMiddlePanel = new eui.Panel();
		this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Training_middle.exml";
		this.horseSelectMiddlePanel.title = "Title2";
		this.horseSelectMiddlePanel.x = leftX2;
		this.horseSelectMiddlePanel.y = downY2;
		this.horseSelectMiddlePanel.scaleX = 0.7;
		this.horseSelectMiddlePanel.scaleY = 0.7;
		this.context.addChild(this.horseSelectMiddlePanel);
		CommonTools.fixFix(this.context,this.horseSelectMiddlePanel,2,0,-40);

		this.horseSelectRightPanel = new eui.Panel();
		this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select_02.exml";
        this.horseSelectRightPanel.title = "Title";
        this.horseSelectRightPanel.horizontalCenter = 0;
        this.horseSelectRightPanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectRightPanel);
		CommonTools.fixFix(this.context,this.horseSelectRightPanel,2,0,-40);

		let obj = null;
		if(this.horseItemS > 0){
			obj = this.getPOwnHorseInfoById(this.horseItemS);
			this.updateHorseItemMiddle(obj);
		}

		this.horseSelectRightPanel.getChildByName("s_1").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("s_1_bg").visible = true;
			this.horseSelectRightPanel.getChildByName("s_2_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_3_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_4_bg").visible = false;
			this.mergeType = 1;
			let tobj = this.getPOwnHorseInfoById(this.horseItemS);
			let sData = CommonTools.getDataJsonStr("getCargoInfo",1,{iType:1,iStar:tobj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		this.horseSelectRightPanel.getChildByName("s_2").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("s_1_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_2_bg").visible = true;
			this.horseSelectRightPanel.getChildByName("s_3_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_4_bg").visible = false;
			this.mergeType = 2;
			let tobj = this.getPOwnHorseInfoById(this.horseItemS);
			let sData = CommonTools.getDataJsonStr("getCargoInfo",1,{iType:2,iStar:tobj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		this.horseSelectRightPanel.getChildByName("s_3").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("s_1_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_2_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_3_bg").visible = true;
			this.horseSelectRightPanel.getChildByName("s_4_bg").visible = false;
			this.mergeType = 3;
			let tobj = this.getPOwnHorseInfoById(this.horseItemS);
			let sData = CommonTools.getDataJsonStr("getCargoInfo",1,{iType:3,iStar:tobj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		this.horseSelectRightPanel.getChildByName("s_4").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("s_1_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_2_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_3_bg").visible = false;
			this.horseSelectRightPanel.getChildByName("s_4_bg").visible = true;
			this.mergeType = 4;
			let tobj = this.getPOwnHorseInfoById(this.horseItemS);
			let sData = CommonTools.getDataJsonStr("getCargoInfo",1,{iType:4,iStar:tobj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		this.horseSelectRightPanel.getChildByName("Process_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_PUSHING_TR);
			let tobj = this.getPOwnHorseInfoById(this.horseItemS);
			let sData = CommonTools.getDataJsonStr("doCargoNft",1,{iType:this.mergeType,nftIndex:tobj.id,iScore:tobj.score,iStar:tobj.star});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);

		this.mergeType = 1;
		let sData = CommonTools.getDataJsonStr("getCargoInfo",1,{iType:1,iStar:obj.star});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	private updateTask03(dData){
		this.mergeConf = dData.cost;
		this.horseSelectRightPanel.getChildByName("coin_1").text = dData.max1/1000.0 ;
		this.horseSelectRightPanel.getChildByName("coin_2").text = dData.max2/1000.0 ;
		this.horseSelectRightPanel.getChildByName("coin_3").text = dData.max3/1000.0 ;
		this.horseSelectRightPanel.getChildByName("cost_coin").text = dData.cost/100.0 ;
	}

	public sendDoPedd(){
		let tobj = this.getPOwnHorseInfoById(this.horseItemS);
		let sData = CommonTools.getDataJsonStr("doPeddNft",1,{iType:this.mergeType,nftIndex:tobj.id,iScore:tobj.score,iStar:tobj.star});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	private task03UI(){
		this.panel.getChildByName("up_item_group").visible = false;
		let leftX2 = 280;
		let downY2 = 180;
		this.btnPveAnimX = 280;
		this.setHorseXY();
		if(ConstValue.deviveNormalScale >= 2){
			leftX2 -= 80;
			downY2 -= 200;
			this.btnPveAnimX += 0;
		}

		this.horseSelectMiddlePanel = new eui.Panel();
		this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/Training_middle.exml";
		this.horseSelectMiddlePanel.title = "Title2";
		this.horseSelectMiddlePanel.x = leftX2;
		this.horseSelectMiddlePanel.y = downY2;
		this.horseSelectMiddlePanel.scaleX = 0.7;
		this.horseSelectMiddlePanel.scaleY = 0.7;
		this.context.addChild(this.horseSelectMiddlePanel);
		CommonTools.fixFix(this.context,this.horseSelectMiddlePanel,2,0,-40);

		this.horseSelectRightPanel = new eui.Panel();
		this.horseSelectRightPanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select_03.exml";
        this.horseSelectRightPanel.title = "Title";
        this.horseSelectRightPanel.horizontalCenter = 0;
        this.horseSelectRightPanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectRightPanel);
		CommonTools.fixFix(this.context,this.horseSelectRightPanel,2,0,-40);
	
		this.horseSelectRightPanel.getChildByName("Process_btn_lb").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			ContractSol.maincoin_transfer(ContractSol.createAddress,this.mergeConf,ContractSol.PEDD_COST_MAIN_NFT);
		}, this);

		this.horseSelectRightPanel.getChildByName("bg_1").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("check_1").visible = true;
			this.horseSelectRightPanel.getChildByName("check_2").visible = false;
			this.horseSelectRightPanel.getChildByName("check_3").visible = false;
			this.mergeType = 1;
		}, this);

		this.horseSelectRightPanel.getChildByName("bg_2").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("check_1").visible = false;
			this.horseSelectRightPanel.getChildByName("check_2").visible = true;
			this.horseSelectRightPanel.getChildByName("check_3").visible = false;
			this.mergeType = 2;
		}, this);

		this.horseSelectRightPanel.getChildByName("bg_3").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.horseSelectRightPanel.getChildByName("check_1").visible = false;
			this.horseSelectRightPanel.getChildByName("check_2").visible = false;
			this.horseSelectRightPanel.getChildByName("check_3").visible = true;
			this.mergeType = 3;
		}, this);
		let obj = null;
		if(this.horseItemS > 0){
			obj = this.getPOwnHorseInfoById(this.horseItemS);
			this.updateHorseItemMiddle(obj);
		}

		this.mergeType = 1;
		let sData = CommonTools.getDataJsonStr("getPeddInfo",1,{iStar:obj.star});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	private clearTask(){
		if(this.btnBackImgTemp != null){
			this.context.removeChild(this.btnBackImgTemp);
			this.btnBackImgTemp = null;
		}
		if(this.horseSelectMiddlePanel != null){
			this.context.removeChild(this.horseSelectMiddlePanel);
			this.horseSelectMiddlePanel = null;
		}
		if(this.horseSelectRightPanel != null){
			this.context.removeChild(this.horseSelectRightPanel);
			this.horseSelectRightPanel = null;
		}
		if(this.horseSelectPanel != null){
			this.context.removeChild(this.horseSelectPanel);
			this.horseSelectPanel = null;
		}
	}

	private timeGetTotalExhi(){
		FightingModule.Delay(60000, function(){
			let sData = CommonTools.getDataJsonStr("getTotalExhi",1,{lNft:ConstValue.cacheContract["nftIndex"]});
			ConstValue.P_NET_OBJ.sendData(sData);
		}, this);
	}

	private taskUpdate(index){
		this.subCurPage = index;
		this.clearTask();
		if(index==1){
			this.task01UI();
			let sData = CommonTools.getDataJsonStr("getTotalExhi",1,{lNft:ConstValue.cacheContract["nftIndex"]});
			ConstValue.P_NET_OBJ.sendData(sData);
		}
		if(index==2){
			if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = true;
			if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = true;
			this.createHorseItem();
			this.task02UI();
		}
		if(index==3){
			if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = true;
			if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = true;
			this.createHorseItem();
			this.task03UI();
		}
		this.btnBackImgTemp = new eui.Image();
		this.btnBackImgTemp.name = "btnTempBack";
		this.btnBackImgTemp.source = "btn_back_png";
		this.btnBackImgTemp.width = 102;this.btnBackImgTemp.height = 67;
		this.btnBackImgTemp.x = 0;
		this.btnBackImgTemp.y = 660;
		this.context.addChild(this.btnBackImgTemp);
		CommonTools.fixFix(this.context,this.btnBackImgTemp,1,0,-50);

		this.btnBackImgTemp.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.panel.getChildByName("up_item_group").visible = false;
			this.btnPveAnimX = -500;
			this.setHorseXY();
			this.updatePlayToEarn();
		}, this);
	}

	private updatePlayToEarn(){
		this.clearTask();
		if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = false;
		if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = false;
		this.horseSelectMiddlePanel = new eui.Panel();
		this.horseSelectMiddlePanel.skinName = "resource/eui_skins/UserUI/PlayToEarn_select.exml";
        this.horseSelectMiddlePanel.title = "Title";
        this.horseSelectMiddlePanel.horizontalCenter = 0;
        this.horseSelectMiddlePanel.verticalCenter = 0;
        this.context.addChild(this.horseSelectMiddlePanel);
		CommonTools.fixFix(this.context,this.horseSelectMiddlePanel,2,0,-40);
		
		this.btnBackImgTemp = new eui.Image();
		this.btnBackImgTemp.name = "btnTempBack";
		this.btnBackImgTemp.source = "btn_back_png";
		this.btnBackImgTemp.width = 102;this.btnBackImgTemp.height = 67;
		this.btnBackImgTemp.x = 0;
		this.btnBackImgTemp.y = 660;
		this.context.addChild(this.btnBackImgTemp);
		CommonTools.fixFix(this.context,this.btnBackImgTemp,1,0,-50);

		this.btnBackImgTemp.addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.changePage("rank_head_01");
		}, this);

		this.horseSelectMiddlePanel.getChildByName("task_0"+this.subCurPage+"_select_di").visible = true;

		this.horseSelectMiddlePanel.getChildByName("task_01_select").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.taskUpdate(1);
		}, this);

		this.horseSelectMiddlePanel.getChildByName("task_02_select").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.taskUpdate(2);
		}, this);

		this.horseSelectMiddlePanel.getChildByName("task_03_select").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
			CommonAudioHandle.playEffect("playBomb_mp3",1);
			this.taskUpdate(3);
		}, this);
	}

	private updateUI(){
		if(this.curPage == 1){
			let horse_lv_img = this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img") as eui.Image;
			horse_lv_img.source = ConstValue.horseLv[ConstValue.cacheUserInfo.lv.toString()].lv_icon;
			this.panel.getChildByName("horse_name_group").getChildByName("horse_name_lb").text = ConstValue.cacheUserInfo.name;
			this.panel.getChildByName("up_item_group").getChildByName("main_coin_num_lb").text = parseInt(ConstValue.cacheUserInfo.coin)/ContractSol.EXCHANGE_RATE;
			this.panel.getChildByName("up_item_group").getChildByName("sub_coin_num_lb").text = parseInt(ConstValue.cacheUserInfo.diamond)/ContractSol.EXCHANGE_RATE;
		}else if(this.curPage == 2){
			this.horseSelectUI();
		}else if(this.curPage == 3){
			this.panel.getChildByName("horse_name_group").visible = false;
			this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
			this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;
			this.createHorseItem();
			this.updateTraining();
		}else if(this.curPage == 4){
			this.hideForAll();
			this.updatePlayToEarn();
		}else if(this.curPage == 5){
			if(this.horseSelectMiddlePanel != null){
				this.context.removeChild(this.horseSelectMiddlePanel);
				this.horseSelectMiddlePanel = null;
			}
			if(this.horseSelectRightPanel != null){
				this.context.removeChild(this.horseSelectRightPanel);
				this.horseSelectRightPanel = null;
			}
			this.horseMarketUI();
		}
	}

	public updateMaincoin(coin,save){
		ConstValue.cacheUserInfo.coin = coin
		this.panel.getChildByName("up_item_group").getChildByName("main_coin_num_lb").text = parseInt(coin)/ContractSol.EXCHANGE_RATE;
		if(save){
			let sData = CommonTools.getDataJsonStr("saveCoinInfo",1,{mainCoin:coin,subCoin:0});
			ConstValue.P_NET_OBJ.sendData(sData);
		}
	}

	public updateSubcoin(coin,save){
		ConstValue.cacheUserInfo.diamond = coin
		this.panel.getChildByName("up_item_group").getChildByName("sub_coin_num_lb").text = parseInt(coin)/ContractSol.EXCHANGE_RATE;
		if(save){
			let sData = CommonTools.getDataJsonStr("saveCoinInfo",1,{mainCoin:0,subCoin:coin});
			ConstValue.P_NET_OBJ.sendData(sData);
		}
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
        CommonTools.addCommonTips(this.context,tips);
    }

	private clearPage2HorseHome(){
		if(this.horseSelectPanel != null){
			this.context.removeChild(this.horseSelectPanel);
			this.horseSelectPanel = null;
		}
		if(this.horseSelectRightPanel != null){
			this.context.removeChild(this.horseSelectRightPanel);
			this.horseSelectRightPanel = null;
		}
		if(this.maskBg2 != null){
			this.context.removeChild(this.maskBg2);
			this.maskBg2 = null;
		}
		if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = false;
		if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = false;
		this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = false;
		this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = false;
	}

	public autoChangeFirst(){
		this.curPage = 6;
		this.changePage("rank_head_01");
	}

	private clearChangeData(){
		this.horseIndexS = 0;
		this.L_select_indx = -1;
		this.R_select_indx = -1;
		this.mergeConf = null;
		this.mergeType=0;
	}

	private changePage(clickName){
		this.clearChangeData();
		if(clickName == "rank_head_01"){
			if(this.curPage == 5){
				this.subCurPage = 1;
				this.rankHead01_mask.visible = true;
				this.rankHead02_mask.visible = false;
				this.rankHead03_mask.visible = false;

				this.rankHead01.source = "icon_Royal-Club_s_png";
				this.rankHead02.source = "icon_Horse-Market_n_png";
				this.rankHead03.source = "icon_My-Inventory_n_png";

				this.updateUI();
			}else{
				if(this.curPage != 1)this.maskNew.source = "new_ui_01_jpg";
				this.curPage = 1;
				this.subCurPage = 1;
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
				this.panel.getChildByName("horse_name_group").visible = true;

				this.btnBackImg.visible = false;
				this.rankHead01.visible = true;
				this.rankHead04.visible = true;
				this.rankHead05.visible = true;			
				this.clearPage2HorseHome();
				this.clearTraining();
				if(this.btnPveAnim2D != null)this.btnPveAnim2D.visible = true;
				if(this.btnPveAnim3D != null)this.btnPveAnim3D.visible = true;
				this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").visible = true;
				this.panel.getChildByName("up_item_group").getChildByName("horse_lv_bg_mg").visible = true;
				this.panel.getChildByName("rank_grounp_main").visible = true;
				if(this.btnBackImgTemp != null){
					this.context.removeChild(this.btnBackImgTemp);
					this.btnBackImgTemp = null;
				}
				// this.btnPveAnimX = this.btnPveAnimInitX;
				// this.btnPveAnim.x = this.btnPveAnimX;
				// this.drawHorse();
				this.panel.getChildByName("up_item_group").visible = true;
				this.tipsPanel = this.panel;
				if(this.horseItemS == 0){
					let obj = this.horseOwnData[0];
					this.horseItemS = obj.id;
				}
				let hObj = this.getOwnHorseInfoById(this.horseItemS);
				this.panel.getChildByName("up_item_group").getChildByName("horse_lv_img").source = "icon_level_"+hObj.iType+"_png";
				this.panel.getChildByName("horse_name_group").getChildByName("horse_name_lb").text = hObj.name;
				
				if(this.btnPveAnim2D == null){
					this.btnPveAnim2D = new eui.Image("horse"+hObj.res_key+"_body_png");
					this.btnPveAnim2D.width = 500;
					this.btnPveAnim2D.height = 500;
					this.btnPveAnim2D.horizontalCenter = 0;
					this.btnPveAnim2D.verticalCenter = 0;
					this.context.addChild(this.btnPveAnim2D);

					/*
					this.btnPveAnim3D = new eui.Image("sign_1_png");
					this.btnPveAnim3D.width = 30;
					this.btnPveAnim3D.height = 30;
					this.btnPveAnim3D.name = "btnPveAnim3D"
					if(ConstValue.deviveNormalScale >= 2){
						this.btnPveAnim3D.x = this.context.getStageWidth() * 0.56
						this.btnPveAnim3D.y = this.context.getStageHeight() * 0.11
					}else{
						this.btnPveAnim3D.x = this.context.getStageWidth() * 0.58
						this.btnPveAnim3D.y = this.context.getStageHeight() * 0.18
					}
					
					this.context.addChild(this.btnPveAnim3D);
					this.context.getChildByName("btnPveAnim3D").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
					*/
				}else{
					this.btnPveAnim2D.source = "horse"+hObj.res_key+"_body_png";
				}
			}
		}else if(clickName == "rank_head_02"){
			if(this.curPage == 5){
				if(this.subCurPage != 2){
					let sData = CommonTools.getDataJsonStr("getNftMarket",1,{});
					ConstValue.P_NET_OBJ.sendData(sData);
				}
				this.subCurPage = 2;
				this.rankHead01_mask.visible = false;
				this.rankHead02_mask.visible = true;
				this.rankHead03_mask.visible = false;

				this.rankHead01.source = "icon_Royal-Club_n_png";
				this.rankHead02.source = "icon_Horse-Market_s_png";
				this.rankHead03.source = "icon_My-Inventory_n_png";

			}else{
				this.panel.getChildByName("horse_name_group").visible = false;
				this.curPage = 2;
				this.subCurPage = 1;
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
			}
			
			this.updateUI();
		}else if(clickName == "rank_head_03"){
			if(this.curPage == 2){
				this.subCurPage = 2;
				this.rankHead02_mask.visible = false;
				this.rankHead03_mask.visible = true;
				this.rankHead04_mask.visible = false;

				this.rankHead02.source = "icon_horse_n_png";
				this.rankHead03.source = "icon_merge_s_png";
				this.rankHead04.source = "icon_breeding_n_png";
			}else if(this.curPage == 5){
				if(this.subCurPage != 3){
					ContractSol.nft_tokensOfOwner(ContractSol.sender);
				}
				this.subCurPage = 3;
				this.rankHead01_mask.visible = false;
				this.rankHead02_mask.visible = false;
				this.rankHead03_mask.visible = true;

				this.rankHead01.source = "icon_Royal-Club_n_png";
				this.rankHead02.source = "icon_Horse-Market_n_png";
				this.rankHead03.source = "icon_My-Inventory_s_png";
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

				this.panel.getChildByName("rank_grounp_main").visible = false;
			}
			this.updateUI();
		}else if(clickName == "rank_head_04"){
			if(this.curPage == 2){
				this.subCurPage = 3;
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

				this.maskNew.source = "horse_playToEarn_page4_jpg";
			}
			this.updateUI();
		}else if(clickName == "rank_head_05"){
			this.panel.getChildByName("horse_name_group").visible = false;
			this.curPage = 5;
			this.rankHead01_mask.visible = true;
			this.rankHead02_mask.visible = false;
			this.rankHead03_mask.visible = false;
			this.rankHead04_mask.visible = false;
			this.rankHead05_mask.visible = false;

			this.rankHead01.source = "icon_Royal-Club_s_png";
			this.rankHead02.source = "icon_Horse-Market_n_png";
			this.rankHead03.source = "icon_My-Inventory_n_png";

			this.rankHead04.visible = false;
			this.rankHead05.visible = false;

			this.btnBackImg.visible = true;
			this.updateUI();
		}
		// this.setHorseXY();
		if(this.curPage != 5 || (this.curPage == 5 && this.subCurPage != 2)){
			this.horseMarketData = null;
		}
		if(this.curPage == 5 && this.subCurPage == 3){
			this.panel.getChildByName("sell_group").visible = true;
		}else{
			this.panel.getChildByName("sell_group").visible = false;
		}
		if(this.curPage == 5 && this.subCurPage == 2){
			this.panel.getChildByName("buynft_group").visible = true;
		}else{
			this.panel.getChildByName("buynft_group").visible = false;
		}
	}

	private testAddMain(){
		CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_PUSHING_TR);
		let sData = CommonTools.getDataJsonStr("AddMainCoin",1,{iAdd:50000,iOpType:0});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	private testAddSub(){
		CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_PUSHING_TR);
		let sData = CommonTools.getDataJsonStr("AddSubCoin",1,{iAdd:50000,iOpType:0});
		ConstValue.P_NET_OBJ.sendData(sData);
	}

	public sellNft(){
		let money_text = this.panel.getChildByName("sell_group").getChildByName("sell_num_lb") as eui.Label;
		let sDataSell = CommonTools.getDataJsonStr("SellNft",1,{nftIndex:this.horseIndexS,money:parseInt(money_text.text)});
		ConstValue.P_NET_OBJ.sendData(sDataSell);
	}

	public pBuyNft(){
		let sDataBuybtn = CommonTools.getDataJsonStr("PBuyNft",1,{nftIndex:this.horseIndexS,sAddress:ContractSol.sender});
		ConstValue.P_NET_OBJ.sendData(sDataBuybtn);
	}

	private async onClick(e: egret.TouchEvent){
		if(this.context.loadingView!=null && !ConstValue.P_IS_DEBUG){
			CommonTools.log("还在加载中......return ");
			return;
		}
		CommonAudioHandle.playEffect("playBomb_mp3",1);
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
			case "img_coin1_add":
				this.testAddMain();
				break;

			case "img_coin2_add":
				this.testAddSub();
				break;

			case "sell_btn_lb":
				let sellobj = this.getOwnHorseInfoById(this.horseIndexS)
				if(sellobj == null)return
				if(sellobj.sellStatus == 1){
					this.addCommonTips(ConstValue.P_ON_SALE)
					return
				}
				if(sellobj.exhibition == 1){
					this.addCommonTips(ConstValue.P_ON_EXHIBITION)
					return
				}
				ContractSol.nft_approve(this.horseIndexS,ContractSol.SELL_NFT);
				break;

			case "up_img":
				let up_text = this.panel.getChildByName("sell_group").getChildByName("sell_num_lb") as eui.Label;
				if(parseInt(up_text.text)>=9999)return;
				up_text.text = parseInt(up_text.text) + 10 + ""
				break;

			case "down_img":
				let down_text = this.panel.getChildByName("sell_group").getChildByName("sell_num_lb") as eui.Label;
				if(parseInt(down_text.text)<=10)return;
				down_text.text = parseInt(down_text.text) - 10 + ""
				break;

			case "buynft_btn_lb":
				let checkOwn = this.getPOwnHorseInfoById(this.horseIndexS)
				if(checkOwn != null){
					this.addCommonTips(ConstValue.P_OWN_NFT)
					return
				}
				let buyMain = parseInt(this.panel.getChildByName("buynft_group").getChildByName("buy_nft_main").text)
				ContractSol.maincoin_transfer(ContractSol.createAddress,buyMain*ContractSol.EXCHANGE_RATE,ContractSol.BUY_MARKET_NFT)
				break;
			
			case "btn_back_img":
				if(this.curPage == 5 && ConstValue.cacheContract["nftLen"]==0){//没有nft
					CommonTools.addCommonTips(this.tipsPanel,ConstValue.P_NO_HORSE);
					return;
				}
				this.curPage = 6;
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
			
			case "btnPveAnim3D":
				let hObj = this.getOwnHorseInfoById(this.horseItemS);
				await this.context.loadResource("horse_"+hObj.res_key+"_wait",8)
				break

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
		}else if (jsonObj.f == "contract"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				ContractSol.maincoin_increaseApproval(jsonObj.d.to,jsonObj.d.num);
			}
		}else if (jsonObj.f == "createNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				let lnftInfo = jsonObj.d.nftInfo;
				let count = 1
				for(let i in lnftInfo){
					let obj = lnftInfo[i]
					if(this.createNFTTempID == 0){
						this.createNFTTempID = obj.id;
					}
					FightingModule.Delay(count*500, function(){
						this.createMergeSuccessT(obj);
					}, this);
					count += 1
				}
				// ConstValue.cacheContract["nftLen"] = count;
				for(let i = 1;i<=5;i++){
					FightingModule.Delay(10000*i, function(){
						for(let hIndex in this.horseOwnData){
							let obj = this.horseOwnData[hIndex];
							if(obj.id == this.createNFTTempID){
								this.createNFTTempID = 0;
								break;
							}
						}
						if(this.createNFTTempID == 0)return;
						ContractSol.nft_tokensOfOwner(ContractSol.sender);
					}, this);
				}
			}
		}else if (jsonObj.f == "getNftMarket" || jsonObj.f == "BuyNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				let lMarketData = jsonObj.d.lMarketData;
				let count = 0
				for(let i in lMarketData){
					count += 1;
				}
				if(count>0){
					this.horseMarketData = lMarketData;
				}else{
					this.horseMarketData = null;
				}
				if(this.curPage == 5 && this.subCurPage == 2)this.changePage("rank_head_02");
				if(jsonObj.f == "BuyNft"){
					FightingModule.Delay(10000, function(){
						ContractSol.nft_tokensOfOwner(ContractSol.sender);
					}, this);
					FightingModule.Delay(15000, function(){
						ContractSol.nft_tokensOfOwner(ContractSol.sender);
					}, this);
				}
			}
		}else if (jsonObj.f == "PBuyNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(jsonObj.d.nftIndex > 0){
					this.addCommonTips(ConstValue.P_GET_NFT)
					ContractSol.nft_transferFrom(jsonObj.d.nftIndex)
				}else{
					this.addCommonTips(ConstValue.P_TR_FAIL)
				}
			}
		}else if (jsonObj.f == "SellNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				ContractSol.nft_tokensOfOwner(ContractSol.sender);
			}
		}else if (jsonObj.f == "getOwnNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				let lOwnNftData = jsonObj.d.lOwnNftData;
				let lNewNftData = [];
				for(let i in lOwnNftData){
					let obj = lOwnNftData[i.toString()];
					if(obj.id != this.mergeOutOfHorse){
						lNewNftData.push(obj);
					}
				}
				lOwnNftData = lNewNftData;
				let count = 0
				for(let i in lOwnNftData){
					count += 1;
				}
				if(count>0){
					ConstValue.cacheContract["nftLen"]=count;
					this.horseOwnData = lOwnNftData;
				}else{
					this.horseOwnData = null;
				}
				if(this.curPage == 5 && this.subCurPage == 3)this.changePage("rank_head_03");
				if(this.curPage == 2 && this.subCurPage == 2){
					if(this.createNFTTempID == 0){
						this.changePage("rank_head_03");
					}
				}
				if(this.curPage == 2 && this.subCurPage == 3)
				{
					if(this.createNFTTempID == 0){
						this.changePage("rank_head_04");
					}
				}
				if(this.curPage == 3)
				{
					this.changePage("rank_head_01");
					this.changePage("rank_head_03");
				}
			}
		}else if (jsonObj.f == "getTotalExhi"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(this.curPage==4 && this.subCurPage==1){
					this.horseSelectMiddlePanel.getChildByName("R_score_total").text = jsonObj.d.iTotalScore;
					this.horseSelectMiddlePanel.getChildByName("R_horse_total").text = jsonObj.d.iTotalHorse;
					this.horseSelectMiddlePanel.getChildByName("R_Reward_total").text = jsonObj.d.iCurTotalRewards/100.0;
					this.horseSelectMiddlePanel.getChildByName("my_reward_tip").text = jsonObj.d.iOwnRewards/100.0;
					this.timeGetTotalExhi();//60秒回调一次
				}
			}
		}else if (jsonObj.f == "joinExhi" || jsonObj.f == "gorestExhi"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(this.curPage==4 && this.subCurPage==1){
					this.horseOwnData = jsonObj.d.lOwnNftData;
					this.taskUpdate(1);
				}
			}
		}else if (jsonObj.f == "AddMainCoin" || jsonObj.f == "claimExhi"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.updateMaincoin(jsonObj.d.mainCoin,false);
				FightingModule.Delay(60000, function(){
					ContractSol.maincoin_balanceOf(ContractSol.sender);
				}, this);
				if(this.curPage==4 && this.subCurPage==1){
					this.horseOwnData = jsonObj.d.lOwnNftData;
					this.taskUpdate(1);
				}
			}
		}else if (jsonObj.f == "getMergeInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(this.curPage == 2 && this.subCurPage == 2){
					this.updateMergeConf(jsonObj.d);
				}
			}
		}else if (jsonObj.f == "getBreedInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(this.curPage == 2 && this.subCurPage == 3){
					this.updateBreedConf(jsonObj.d);
				}
			}
		}else if (jsonObj.f == "doMergeNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(jsonObj.d.outofHorseId > 0){
					this.mergeOutOfHorse = jsonObj.d.outofHorseId;
				}
				if(jsonObj.d.result == 2)this.createMergeFail(1);
				if(jsonObj.d.result == 1){
					this.createMergeSuccess(1,jsonObj.d.showData);
				}
			}
		}else if (jsonObj.f == "getTrainInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.mergeConf = jsonObj.d;
				this.updateTrainConf();
			}
		}else if (jsonObj.f == "getCargoInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.updateTask02(jsonObj.d);
			}
		}else if (jsonObj.f == "getPeddInfo"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.updateTask03(jsonObj.d);
			}
		}else if (jsonObj.f == "doCargoNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(jsonObj.d.result == 1){
					this.createCargoSuccess(1,jsonObj.d,null);
				}else{
					this.createCargoSuccess(2,jsonObj.d,null);
				}
			}
		}else if (jsonObj.f == "doPeddNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(jsonObj.d.result == 1){
					this.createCargoSuccess(1,jsonObj.d,1);
				}else{
					this.createCargoSuccess(2,jsonObj.d,1);
				}
			}
		}else if (jsonObj.f == "doTrainNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.createTrainingSuccess(jsonObj.d);
			}
		}else if (jsonObj.f == "doBreedNft"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				if(jsonObj.d.result == 2)this.createMergeFail(2);
				if(jsonObj.d.result == 1){
					let lnftInfo = jsonObj.d.nftInfo;
					let count = 1
					for(let i in lnftInfo){
						let obj = lnftInfo[i]
						if(this.createNFTTempID == 0){
							this.createNFTTempID = obj.id;
						}
						FightingModule.Delay(count*500, function(){
							this.createMergeSuccessT(obj);
						}, this);
						count += 1
					}
					// ConstValue.cacheContract["nftLen"] = count;
					for(let i = 1;i<=5;i++){
						FightingModule.Delay(10000*i, function(){
							for(let hIndex in this.horseOwnData){
								let obj = this.horseOwnData[hIndex];
								if(obj.id == this.createNFTTempID){
									this.createNFTTempID = 0;
									break;
								}
							}
							if(this.createNFTTempID == 0)return;
							ContractSol.nft_tokensOfOwner(ContractSol.sender);
						}, this);
					}
				}
			}
		}else if (jsonObj.f == "AddSubCoin"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				
			}else{
				this.updateSubcoin(jsonObj.d.subCoin,false);
				FightingModule.Delay(60000, function(){
					ContractSol.subcoin_balanceOf(ContractSol.sender);
				}, this);
			}
		}else if (jsonObj.f == "getPvpRankThree"){
			if(jsonObj.m != "" || jsonObj.s != 1){

			}else{

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