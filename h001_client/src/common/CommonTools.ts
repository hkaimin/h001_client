/**
 * 工具类
 */
class CommonTools {

	public static resourceMgr:ResourceUtils = new ResourceUtils();

	/**
	 * 添加遮罩
	 */
	static addShapeBG(iScreenWidth:number,iScreenHeight:number):egret.Shape{
		let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x232020, 0.6);
        topMask.graphics.drawRect(0, 0, iScreenWidth, iScreenHeight);
        topMask.graphics.endFill();
		return topMask;
	}

	static shake(target){
		let twJump = egret.Tween.get(target,{loop:true},egret.Ease.sineInOut);
		twJump.to({rotation:8},80);
		twJump.to({rotation:-8},80);
		twJump.to({rotation:8},80);
		twJump.to({rotation:-8},80);
		twJump.to({rotation:8},80);
		twJump.to({rotation:-8},80);
		twJump.to({rotation:0},40);
		twJump.to({rotation:0},1500);
		
		// twJump.to({rotation:30},200);
		// twJump.to({rotation:-30},200);
		// for(let i=0;i<100;i++){
		// 	twJump.to({rotation:15},90);
		// 	twJump.to({rotation:-15},90);
		// }
	}

	static removeShake(target){
		egret.Tween.removeTweens(target);
	}

	/**
	 * 弹出工具动画
	 */
	static niceTip(target,opt,thisObj){
		if(opt == 1){//打开
			target.scaleX = 0.5;
			target.scaleY = 0.5;
			let normalX = 1;
			let normalY = 1;
			if(ConstValue.deviveNormalScale > 2){
				normalX = ConstValue.deviveScale;
				normalY = ConstValue.deviveScale;
			}
			let twJump = egret.Tween.get(target);
			twJump.to({scaleX:1,scaleY:1},90);//150
			twJump.to({scaleX:1.05,scaleY:1.05},80);
			twJump.to({scaleX:normalX,scaleY:normalX},100);
		}else{
			let twJump = egret.Tween.get(target);
			twJump.to({scaleX:1.05,scaleY:1.05},100);
			twJump.to({scaleX:0.0,scaleY:0.0,visible:false},200);//160
			twJump.call(function(){
				thisObj.closeNice();
			}, this);
		}
	}

	static fixFix(context,target,fixType,offX,offY){
		let designWidth = 1334.0;
		let designHeight = 750.0;
		let stageHeight = context.getStageHeight();
		let scale = stageHeight/designHeight;
		ConstValue.deviveScale = scale;
		let deviceScale = context.getClientWidth()*1.0/context.getClientHeight();
		ConstValue.deviveNormalScale = deviceScale;
		// CommonTools.log("--fixFix deviceScale-------"+deviceScale);
		// CommonTools.log("--fixFix stageHeight-------"+stageHeight);
		// CommonTools.log("--fixFix getClientHeight-------"+context.getClientHeight());
        // CommonTools.log("--fixFix getClientWidth-------"+context.getClientWidth());
		if(deviceScale<2){//小于2的都是16:9，不需要修正
			return;
		}
		// CommonTools.log("--fixFix name-------"+target.name);
		// CommonTools.log("--fixFix before fix scaleX-------"+target.scaleX);
		// CommonTools.log("--fixFix before fix X-------"+target.x);
		// CommonTools.log("--fixFix before fix Y-------"+target.y);
		let up = 0;
		let down = 0;
		if(fixType == 1){//up
			up = target.y;
		}else if(fixType == 2){//down
			down = designHeight - target.y;
		}else if(fixType == 3){//down+left
			down = designHeight - target.y;
		}
		target.scaleX = scale;
		target.scaleY = scale;
		if(fixType == 1){//up
			let halfLeft = (1-scale)/2;
			target.y = up*scale +  stageHeight*halfLeft + offY;
			target.x = target.x + offX;
		}else if(fixType == 2){//down
			let halfLeft = (1-scale)/2;
			target.y = stageHeight - down*scale + stageHeight*halfLeft + offY;
			target.x = target.x + offX;
		}

		// CommonTools.log("--fixFix after fix scaleX-------"+target.scaleX);
		// CommonTools.log("--fixFix after fix X-------"+target.x);
		// CommonTools.log("--fixFix after fix Y-------"+target.y);
	}

	static curTipsLen = 0;
	/**
	 * 公共提示组件
	 */
	static addCommonTips(context:any,txt:string){
		if(CommonTools.curTipsLen>=5)CommonTools.curTipsLen=0;
		let stageW = context.stage.stageWidth;
        let stageH = context.stage.stageHeight;
	    let panel = new eui.Panel();
		panel.name = "tips_panel_"+CommonTools.curTipsLen;
		panel.skinName = "resource/eui_skins/UserUI/CommonTips.exml";
		let x = stageW/2 - panel.width/2;
		let y = stageH/2 - panel.height/2;
		panel.x = x;
		panel.y = y;
		let lb:eui.Label = panel.getChildByName("lb_tips_txt") as eui.Label;
		lb.text = txt;
        context.addChild(panel);

		let change = () => {
			if(panel.name == "tips_panel_0")CommonTools.curTipsLen=0;
			context.removeChild(panel);
		}
		let yMove = y - 200 + 80*CommonTools.curTipsLen;
		let tw = egret.Tween.get(panel);
		tw.to({ y: yMove }, 500);
		tw.wait(1500 - 100*CommonTools.curTipsLen);
		tw.call(change);
		CommonTools.curTipsLen+=1;
	}

	static jumpAnim(targetT:any){
		let oldScale = targetT.scaleX;
		let tw = egret.Tween.get(targetT);
		tw.to({ scaleX: oldScale*2,scaleY: oldScale*2 }, 200);
		tw.to({ scaleX: oldScale,scaleY: oldScale }, 200);
	}

	/**
	 * 公共提示组件
	 */
	static addTipsPanel(context:any,tipTitle:string,tipContent:string){
		let stageW = context.stage.stageWidth;
        let stageH = context.stage.stageHeight;
		let mask = new eui.Image("guide_mask_png");
		mask.width = stageW;
		mask.height = stageH;
		context.addChild(mask);

		let tipPanel = new eui.Panel();
		tipPanel.skinName = "resource/eui_skins/UserUI/TipsPanelUI.exml";
		tipPanel.horizontalCenter = 0;
        tipPanel.verticalCenter = 0;
		context.addChild(tipPanel);
		CommonTools.fixFix(context,tipPanel,1,0,0);

		let parent = tipPanel.getChildByName("fighting_parent") as eui.Group;
		let title = parent.getChildByName("tip_title") as eui.Label;
		title.text = tipTitle;
		let scroll = parent.getChildByName("t_s") as eui.Scroller;
		let group = scroll.getChildByName("t_g") as eui.Group;
		let content = group.getChildByName("tip_content") as eui.Label;
		content.text = tipContent;

		tipPanel.getChildByName("btn_close").addEventListener(egret.TouchEvent.TOUCH_TAP,  function(e:egret.TouchEvent){
            context.removeChild(mask);
			context.removeChild(tipPanel);
        }, this);
	}

	/**
	 * 构建发送数据
	 */
	static getDataJsonStr(f:string,s:number,d:{}):string{
        let dJson = {}
        dJson["f"] = f;
        dJson["s"] = s;
        dJson["d"] = d;
        return JSON.stringify(dJson);
    }

	/**
	 * 获取动画
	 * actionName “” 取默认动作 不为空串，取对应名字动作
	 * 调用实例：CommonTools.getAnimDraw(RES.getRes("RoleWait00_json"), RES.getRes("RoleWait00_png"),"")
	 */
	static getAnimDraw(animJsonRes:any,animPngRes:any,actionName:string){
		let em:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(animJsonRes, animPngRes);
		let emc:egret.MovieClip;
		if(actionName==""){
			emc = new egret.MovieClip(em.generateMovieClipData());
		}else{
			emc = new egret.MovieClip(em.generateMovieClipData(actionName));
		}
		return emc;
	}

	static deepCopyMap(srcMap){
		let tCopy = {}
		for(let i in srcMap){
			let obj = srcMap[i];
			tCopy[i] = obj;
		}
		return tCopy;
	}

	static printMap(srcMap){
		if(!ConstValue.p_is_PRINT_MAP)return;
		console.log("-----startMap------")
		let len = 0;
		for(let i in srcMap){
			let obj = srcMap[i];
			console.log("-----srcMap--key----"+i)
			len++;
		}
		console.log("-----endMap------len:"+len);
	}

	static printObject(obj){
		var description = "";
		for(var i in obj){
		    var property=obj[i];
		    description+=i+" = "+property+"\n";
		}
		console.log("-----printObject------description:"+description);
	}

	/**
	 * 获取一个输入随机范围
	 */
	static getRandomFloor(num:number,zero:boolean){
		if(zero){
			return Math.floor(Math.random()*num);
		}else{
			return Math.floor(Math.random()*num == 0 ? 1 : Math.random()*num);
		}
	}

	static log(logStr:string){
		if(ConstValue.P_IS_INNER){
			console.log(logStr);
		}
	}

	static logError(logStr:string){
		if(ConstValue.p_is_PRINT_ERROR){
			console.log(logStr);
		}
	}

	static logDebug(logStr:string){
		if(ConstValue.p_is_PRINT_DEBUG){
			console.log(logStr);
		}
	}

	static logAI(logStr:string){
		if(ConstValue.p_is_PRINT_AI){
			console.log(logStr);
		}
	}

	static logAIPath(logStr:string){
		if(ConstValue.p_is_PRINT_AI_PATH){
			console.log(logStr);
		}
	}

	static logWallet(logStr:string){
		if(ConstValue.p_is_PRINT_WALLET){
			console.log(logStr);
		}
	}

}