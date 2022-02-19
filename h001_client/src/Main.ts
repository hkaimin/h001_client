//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    private isLoaded:boolean = false;
    public dDataInfo = null;//这个是地图数据
    public dDataInfo2 = null;//这个是更新属性数据
    public loadingView;
    public static roomkey = null;

    protected createChildren(): void {
        super.createChildren();
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            CommonTools.log("===========onPause 1");
        })

        egret.lifecycle.onPause = () => {
            //egret.ticker.pause();
            CommonTools.log("===========onPause 2");
        }

        // egret.lifecycle.onShow = (resObj) => {
        //     CommonTools.log("===========resObj=="+resObj);
        //     Main.roomkey = resObj;
        //     if(ConstValue.P_HALL_OBJ!=null)ConstValue.P_HALL_OBJ.openWXPVP();
        // }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
            if(ConstValue.cacheUserInfo != null && !ConstValue.P_NET_OBJ.socket.connected){
                ConstValue.P_NET_OBJ.socketConnect();
                ConstValue.P_NET_OBJ.out_relogin();
                CommonTools.log("-----resumeresumeresumeresume1-------------------")
            }  

            if(ConstValue.cacheUserInfo != null && ConstValue.P_NET_OBJ.socket.connected && WebSocketUtil.closeFlag){
                CommonTools.log("-----resumeresumeresumeresume2-------------------")
                ConstValue.P_NET_OBJ.out_relogin();
            }
            CommonTools.log("===========onResume");
            CommonAudioHandle.curPlayName = "";
            if(ConstValue.P_LOGIN_OBJ==null)CommonAudioHandle.play("mainmenu_mp3",0);
        }
        //inject the custom material parser
        //注入自定义的素材解析器
        egret.ImageLoader.crossOrigin = "anonymous";

        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame().catch(e => {
            CommonTools.log(e);
        })
    }


    private async runGame() {
        if(ConstValue.p_LOGIN_MODEL == 1){//普通
            await this.loadResource("pre_preload",1);
        }else if(ConstValue.p_LOGIN_MODEL == 2){//微信
            await this.loadResourceStart("pre_preload",1);
        }
    }

    public async doNext(iSub:number){//跳转
        if(ConstValue.P_CONTEXT == null){
            ConstValue.P_CONTEXT = this;
        }
        this.stage.removeChild(this.loadingView);
        this.loadingView = null;
        if(iSub == 1){//登录模块
            ConstValue.P_LOGIN_OBJ = new LoginModule(this);
        }else if(iSub == 2){//大厅
            ConstValue.P_HALL_OBJ = new HallModule(this);
        }else if(iSub == 3){//战斗
            if(ConstValue.P_IS_DEBUG){
                // ConstValue.P_FIGHT_OBJ = new FightingModule(this);
            }else{
                let sData = CommonTools.getDataJsonStr("enterPPRoom",1,{});
				ConstValue.P_NET_OBJ.sendData(sData);
            }
        }else if(iSub == 4){//diy
            if(ConstValue.P_IS_DEBUG){
                
            }else{
                let sData = CommonTools.getDataJsonStr("openDiyMapUI",1,{theme:1});
				ConstValue.P_NET_OBJ.sendData(sData);
            }
        }else if(iSub == 5){//goto barr
            if(ConstValue.P_IS_DEBUG){
                
            }else{
                
            }
        }else if(iSub == 6){
            if(ConstValue.P_IS_DEBUG){
                
            }else{
                if(ConstValue.P_FIGHT_OBJ == null){
					ConstValue.P_FIGHT_OBJ = new FightingModule(this);
				}
				ConstValue.P_FIGHT_OBJ.initMapData(this.dDataInfo);
                if(FightingModule.readyTwo && !FightingModule.readyRes){
                    ConstValue.P_FIGHT_OBJ.releaseVsPanel();
                    ConstValue.P_FIGHT_OBJ.updateInfo(this.dDataInfo2);
                }
                
            }
        }else if(iSub == 7){
            await this.loadResource("preloadHall",2);
        }else if(iSub == 8){
            ConstValue.P_HALL_OBJ.showWaitingAnim()
        }
    }

    public async loadResource(loadName:string,nextThing:number) {
        try {
            if(loadName=="fighting" || loadName=="diymap")HallModule.isSafeArea=false;
            this.loadingView = new LoadingUI(this.stage.stageWidth,this.stage.stageHeight,this);
            this.stage.addChildAt(this.loadingView,1);
            if(!this.isLoaded){
                if(ConstValue.p_LOGIN_MODEL == 1){
                    CommonTools.resourceMgr.addConfig(PathUtils.RESOURC + PathUtils.Version_Default_Res, PathUtils.RESOURC);
                }else if(ConstValue.p_LOGIN_MODEL == 2){
                    CommonTools.resourceMgr.addConfig(PathUtils.RESOURCSUB1 + PathUtils.Version_SUBPACK1_Res, PathUtils.RESOURCSUB1);
                    CommonTools.resourceMgr.addConfig(PathUtils.RESOURCSUB2 + PathUtils.Version_SUBPACK2_Res, PathUtils.RESOURCSUB2);
                }
                CommonTools.resourceMgr.loadConfig(this.onLoginConfigComplete, this);
            }else{
                if(ConstValue.cacheKeyGroup[loadName] == null){
                    await RES.loadGroup(loadName, 0, this.loadingView);
                    ConstValue.cacheKeyGroup[loadName] = 1;
                }
                
                if(ConstValue.P_IS_DEBUG){
                    this.stage.removeChild(this.loadingView);
                }
                this.doNext(nextThing);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    private async onLoginConfigComplete(){
        if(ConstValue.p_LOGIN_MODEL == 1){
            await this.loadTheme();
            await RES.loadGroup("pre_preload", 0, this.loadingView);
            this.isLoaded = true;
            ConstValue.cacheKeyGroup["preload"] = 1;
            this.doNext(1);
        }else if(ConstValue.p_LOGIN_MODEL == 2){
            await RES.loadGroup("sub1preload", 0, this.loadingView);
            this.isLoaded = true;
            ConstValue.cacheKeyGroup["sub1preload"] = 1;
            this.doNext(7);
        }
    }

    public async loadResourceStart(loadName:string,nextThing:number) {//启动
        try {
            this.loadingView = new LoadingUI(this.stage.stageWidth,this.stage.stageHeight,this);
            this.stage.addChildAt(this.loadingView,1);
            CommonTools.resourceMgr.addConfig(PathUtils.RESOURC + PathUtils.Version_Default_Res, PathUtils.RESOURC);
            CommonTools.resourceMgr.loadConfig(this.onLoginConfigCompleteStart, this);
        }
        catch (e) {
            console.error(e);
        }
    }

    private async onLoginConfigCompleteStart(){
        await this.loadTheme();
        await RES.loadGroup("pre_preload", 0, this.loadingView);
        ConstValue.cacheKeyGroup["preload"] = 1;
        this.doNext(1);
    }

    /**
     * 偷偷加载
     * 
     */
    public async loadResourceBlackground(loadName:string) {
        CommonTools.log("loadBlackGround=================2")
        await RES.loadGroup(loadName, 0, null);
        CommonTools.log("loadBlackGround=================2_1")
    }

    public addBackGround(name:string){
        let sky = this.createBitmapByName(name);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        let scaleDevice = 1334.0/stageW;
        sky.height = 750.0/scaleDevice;
        return sky
    }

    public getStageWidth():number{
        return this.stage.stageWidth
    }

    public getStageHeight():number{
        return this.stage.stageHeight
    }

    public getClientWidth():number{
        // return wx.getSystemInfoSync().windowWidth
        return document.documentElement.clientWidth;
    }

    public getClientHeight():number{
        // return wx.getSystemInfoSync().windowHeight
        return document.documentElement.clientHeight;
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            // let theme = new eui.Theme("resource/default.thm.json", this.stage);
            let theme = new eui.Theme(PathUtils.RESOURC + PathUtils.Version_Default_Thm, this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }
 
    

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        this.addChild(this.addBackGround("bg_jpg"));

        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        let icon: egret.Bitmap = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);


        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);

        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;

        let button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

        // new WebSocketUtil();
        CommonTools.log("createGameScene=============done");

    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    public static getResUtil(name:string){
        return RES.getRes(name);
    }

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }
}
