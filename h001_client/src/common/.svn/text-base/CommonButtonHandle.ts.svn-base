/**
 * 按钮公共处理
 */
class CommonButtonHandle {
	private static scaleXOld = 0;
	private static scaleYOld = 0;

	static beginTouch(targetT:any,context:any):void{
		targetT.addEventListener(egret.TouchEvent.TOUCH_BEGIN, CommonButtonHandle.onButtonClickBegin, context);
		targetT.addEventListener(egret.TouchEvent.TOUCH_END, CommonButtonHandle.onButtonClickEnd, context);
		targetT.addEventListener(egret.TouchEvent.TOUCH_MOVE, CommonButtonHandle.onButtonClickEnd, context);
	}

	static onButtonClickBegin(e: egret.TouchEvent){
		// console.log("onButtonClickBegin==========");
		CommonButtonHandle.scaleXOld = e.target.scaleX;
		CommonButtonHandle.scaleYOld = e.target.scaleY;
		e.target.scaleX *= 1.1;
		e.target.scaleY *= 1.1;
		if(ConstValue.P_LOGIN_OBJ==null)CommonAudioHandle.playEffect("playBomb_mp3",1);
	}

	static onButtonClickEnd(e: egret.TouchEvent){
		// console.log("onButtonClickEnd==========");
		e.target.scaleX = CommonButtonHandle.scaleXOld;
		e.target.scaleY = CommonButtonHandle.scaleYOld;
	}

}