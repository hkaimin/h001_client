/**
 * 登录注册相关模块
 */
class LoginModule {
	private context:Main;
	private panel;
	private panelNotice;
	private topMask;
	private objChild;
	private bClick:boolean;

	public constructor(ct:Main) {
		this.context = ct;
		this.init();
	}

	
	private async init(){
		this.objChild = this.context.addBackGround("login_bg_ppt_png");
		this.context.addChild(this.objChild);

		this.panel = new eui.Panel();
		this.panel.skinName = "resource/eui_skins/UserUI/LoginUI.exml";
        this.panel.title = "Title";
        this.panel.horizontalCenter = 0;
        this.panel.verticalCenter = 0;
        this.context.addChild(this.panel);		
		if(ConstValue.p_LOGIN_MODEL == 2){
			this.panel.getChildByName("account_lb_txt").visible = false;
			this.panel.getChildByName("password_lb_txt").visible = false;
			this.panel.getChildByName("account_lb_title").visible = false;
			this.panel.getChildByName("password_lb_title").visible = false;
			this.panel.getChildByName("btn_registe").visible = false;
			this.panel.getChildByName("btn_login").visible = false;
			this.panel.getChildByName("btn_login_wx").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			CommonButtonHandle.beginTouch(this.panel.getChildByName("btn_login_wx"),this);
			CommonTools.fixFix(this.context,this.panel.getChildByName("btn_login_wx"),2,-15,20);
		}else{
			this.panel.getChildByName("btn_login").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			this.panel.getChildByName("btn_registe").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			this.panel.getChildByName("account_lb_txt").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			this.panel.getChildByName("password_lb_txt").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			this.panel.getChildByName("btn_login_wx").visible = false;
			CommonTools.fixFix(this.context,this.panel.getChildByName("btn_login"),2,-60,10);
			CommonTools.fixFix(this.context,this.panel.getChildByName("btn_registe"),2,-60,10);
			CommonTools.fixFix(this.context,this.panel.getChildByName("account_lb_txt"),2,0,20);
			CommonTools.fixFix(this.context,this.panel.getChildByName("password_lb_txt"),2,0,10);
			CommonTools.fixFix(this.context,this.panel.getChildByName("account_lb_title"),2,0,20);
			CommonTools.fixFix(this.context,this.panel.getChildByName("password_lb_title"),2,0,10);
		}
		ConstValue.videoAd = null;
		ConstValue.videoAdOBJ = null;
		ConstValue.videoIndx = 0;
	}

	public addCommonTips(tips){
        CommonTools.addCommonTips(this.panel,tips);
    }

	private async onClick(e: egret.TouchEvent){
		if(this.context.loadingView!=null && !ConstValue.P_IS_DEBUG){
			CommonTools.log("还在加载中......return ");
			return;
		}

		if(!this.bClick){
			// CommonAudioHandle.play("mainmenu_mp3",0);
			this.bClick = true;
		}
		let name = e.target.name;
		switch(name){
			case "btn_notice":
				this.showNotice("resource/eui_skins/UserUI/ShengminUI.exml",name);
				break;

			case "btn_close":
				this.closeNotice();
				break;

			case "btn_forgetpas":
				this.showNotice("resource/eui_skins/UserUI/GetPassword.exml",name);
				break;

			case "btn_registe":
				this.showNotice("resource/eui_skins/UserUI/RegisteUI.exml",name);
				break;

			case "btn_login":			
				this.btnClickLogin();
				break;

			case "btn_login_wx":
				ConstValue.sysTips = [];
				ConstValue.oneTipsCnt = 0;
				ConstValue.oneTipsCur = 0;
				ConstValue.oneTips = {};
				this.btnClickWxLogin();
				break;

			case "btn_nologinman":
				break;

			case "btn_verify_forget":
				CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_VERIFY);
				break;

			case "btn_confirm_forget":
				this.btnClickConfirmForget();
				break;

			case "btn_verify_registe":
				CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_VERIFY);
				break;

			case "btn_confirm_registe":
				this.btnClickConfirmRegiste();
				break;

			default:
				CommonTools.log("11111111 default");
				break;
		}
	}

	private async btnClickLogin(){
		let account = this.panel.getChildByName("account_lb_txt") as eui.Label;
		if (account.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_ACCOUNT);
			return;
		}
		let pwd = this.panel.getChildByName("password_lb_txt") as eui.Label;
		if(pwd.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_PASSWORD);
			return;
		}
		if(ConstValue.P_IS_DEBUG){
			this.clear();
			await this.context.loadResource("preloadHall",2);
		}else{
			let sData = CommonTools.getDataJsonStr("login",1,{account:account.text,password:pwd.text});
			if(ConstValue.P_NET_OBJ==null){//还未建立连接
				ConstValue.P_NET_OBJ = new WebSocketUtil(sData);//建立连接
			}else{
				ConstValue.P_NET_OBJ.sendData(sData);
			}
			ConstValue.cacheUserAccount = account.text;//缓存账号
			ConstValue.cacheUserPwd = pwd.text;//缓存密码
		}
		
	}

	private async btnClickWxLogin(){
		let code = await platform.login();
		let obj = JSON.parse(code);
		// let userInfo = await platform.getUserInfo();
		// CommonTools.printObject(userInfo);

		let sData = CommonTools.getDataJsonStr("loginWX",1,{openID:obj.openid,sHead:"",sName:"",iGender:0});
		if(ConstValue.P_NET_OBJ==null){//还未建立连接
			ConstValue.P_NET_OBJ = new WebSocketUtil(sData);//建立连接
		}else{
			ConstValue.P_NET_OBJ.sendData(sData);
		}
		// await platform.updateInfo("xx");
	}

	private clear(){
		this.context.removeChild(this.objChild);
		this.context.removeChild(this.panel);
		ConstValue.P_LOGIN_OBJ = null;
	}

	private btnClickConfirmForget(){
		let pwd = this.panelNotice.getChildByName("password_lb_txt") as eui.Label;
		if(pwd.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_PASSWORD);
			return;
		}
		let verify = this.panelNotice.getChildByName("verify_lb_txt") as eui.Label;
		if (verify.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_VERIFY);
			return;
		}
		CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_MODIFY_SUCCESS);
		this.closeNotice();
	}

	private btnClickConfirmRegiste(){//注册
		let invite = this.panelNotice.getChildByName("invite_lb_txt") as eui.Label;
		if (invite.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_INVITE);
			return;
		}
		let account = this.panelNotice.getChildByName("account_lb_txt") as eui.Label;
		if (account.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_ACCOUNT);
			return;
		}
		let pwd = this.panelNotice.getChildByName("password_lb_txt") as eui.Label;
		if(pwd.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_PASSWORD);
			return;
		}
		let verify = this.panelNotice.getChildByName("verify_lb_txt") as eui.Label;
		if (verify.text == ""){
			CommonTools.addCommonTips(this.panel,ConstValue.P_NULL_VERIFY);
			return;
		}
		if (ConstValue.P_IS_DEBUG){
			CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_REGISTE_SUCCESS);
			this.closeNotice();
		}else{
			let sData = CommonTools.getDataJsonStr("register",1,{account:account.text,password:pwd.text,pcode:invite.text});
			if(ConstValue.P_NET_OBJ==null){//还未建立连接
				ConstValue.P_NET_OBJ = new WebSocketUtil(sData);//建立连接
			}else{
				ConstValue.P_NET_OBJ.sendData(sData);
			}
		}
	}

	private showNotice(exmlName:string,btnName:string){
		// this.topMask = CommonTools.addShapeBG(this.context.getStageWidth(),this.context.getStageHeight());
		// this.context.addChild(this.topMask);

		this.panelNotice = new eui.Panel();
		this.panelNotice.skinName = exmlName;
        this.panelNotice.title = "Title";
        this.panelNotice.horizontalCenter = 0;
        this.panelNotice.verticalCenter = 0;
        this.context.addChild(this.panelNotice);

		// CommonButtonHandle.beginTouch(this.panelNotice.getChildByName("btn_close"),this);
		this.panelNotice.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	
		this.handlePanel(this.panelNotice,btnName);
	}

	/**
	 * 回包处理
	 */
	public async handlePacket(jsonObj:any){
		if (jsonObj.f == "register"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_REGISTE_FAIL);
				return;
			}else{
				CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_REGISTE_SUCCESS);
				this.closeNotice()
			}
		}else if(jsonObj.f == "login" || jsonObj.f == "loginWX"){
			CommonTools.log("11111111 -----------------------------22");
			if(jsonObj.m != "" || jsonObj.s != 1){
				CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_LOGIN_FAIL);
				CommonTools.log("11111111 --------------------------------piercj default 1");
				return;
			}else{
				// CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_LOGIN_SUCCESS);
				if(!ConstValue.cacheHasLoginSuccess){//已登录的标志位，false就需要发进入大厅
					CommonTools.log("11111111 --------------------------------piercj default 1");
					let sData = CommonTools.getDataJsonStr("entergame",1,{});
					ConstValue.P_NET_OBJ.sendData(sData);
					ConstValue.cacheHasLoginSuccess = true;
				}
			}
		}else if(jsonObj.f == "entergame"){
			if(jsonObj.m != "" || jsonObj.s != 1){
				CommonTools.addCommonTips(this.panel,ConstValue.P_SEND_HALLBACK_FAIL);
				return;
			}else{
				// CommonTools.addCommonTips(this.panel,"xxxxxx");
				ConstValue.cacheUserInfo = jsonObj.d;
				// ConstValue.cacheUserInfo.headPic = "https://wx.qlogo.cn/mmopen/vi_32/6siawicCkenuXrIBTMP7JoaBGZ1u3O7LibUjiacyfAZquMaAvFLJHsVht7hhFy3SGSL2znKHRUb1F8k2y5UTycw7kQ/132";
				for(let i=0;i < this.panel.numChildren;i++){
					let obj = this.panel.getChildAt(i);
					obj.visible = false;
				}
				await this.context.loadResource("preloadHall",2);
				this.clear();
			}
		}
	}

	private handlePanel(panelCtx:eui.Panel,btnName:string){
		switch(btnName){

			case "btn_forgetpas":
				panelCtx.getChildByName("btn_verify_forget").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				panelCtx.getChildByName("btn_confirm_forget").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				// CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_verify_forget"),this);
				// CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_confirm_forget"),this);
				break;

			case "btn_registe":
				panelCtx.getChildByName("btn_verify_registe").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				panelCtx.getChildByName("btn_confirm_registe").addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				// CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_verify_registe"),this);
				// CommonButtonHandle.beginTouch(panelCtx.getChildByName("btn_confirm_registe"),this);
				break;

			default:
				CommonTools.log("22222222 default");
				break;
		}
	}

	private closeNotice(){
		if (this.panelNotice != null)this.context.removeChild(this.panelNotice);
		this.panelNotice = null;
	}

}