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

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    private iScreenWidth:number;
    private iScreenHeight:number;
    private context;

    public constructor(iWidth:number,iHeight:number,context) {
        super();
        this.iScreenWidth = iWidth;
        this.iScreenHeight = iHeight;
        this.context = context;
        this.createView();
    }

    private textField3: egret.TextField;
    private pBar:eui.ProgressBar

    private  createView(): void {
        let loadName = "";
        if(ConstValue.p_LOGIN_MODEL == 1){
            loadName = "preload";
        }else if(ConstValue.p_LOGIN_MODEL == 2){
            loadName = "sub1preload";
        }
        if(ConstValue.cacheKeyGroup[loadName] == null){
            CommonTools.log("=====================not load preload ,use mask")
            let topMask = new egret.Shape();
            topMask.graphics.beginFill(0x000000, 1);
            topMask.graphics.drawRect(0, 0, this.iScreenWidth, this.iScreenHeight);
            topMask.graphics.endFill();
            this.addChild(topMask);
        }else{
            CommonTools.log("=====================load preload ,use ui")
            if(ConstValue.P_LOGIN_OBJ == null){
                let imgBg = new eui.Image("horse_playToEarn_page4_jpg");
                imgBg.width = this.iScreenWidth;
                let scaleDevice = 1334.0/this.iScreenWidth;
                imgBg.height = 750.0/scaleDevice;
                this.addChild(imgBg);
            }
            
            this.pBar = new eui.ProgressBar();
            this.pBar.maximum = 100;//设置进度条的最大值
            this.pBar.minimum = 0;//设置进度条的最小值
            this.pBar.width = 549;
            this.pBar.height = 78;
            this.addChild(this.pBar);
            this.pBar.value = 0;//设置进度条的初始值
            this.pBar.x = 400;
            this.pBar.y = 570;
            
            this.pBar.labelFunction = this.barLabelFunction;
            CommonTools.fixFix(this.context,this.pBar,2,40,0);
        }
        
    
        // this.textField3 = new egret.TextField();
        // this.addChild(this.textField3);
        // this.textField3.y = 620;
        // this.textField3.x = 420;
        // this.textField3.width = 480;
        // this.textField3.height = 100;
        // this.textField3.size = 20;
        // this.textField3.textAlign = "center";
        // if(ConstValue.cacheKeyGroup["preload"] != null){
        //     this.textField3.textColor = 0x000207;
        // }
        // CommonTools.fixFix(this.context,this.textField3,2,40,0);
    }

    public barLabelFunction(value:number,maximum:number):string{
        return "";
    }

    public onProgress(current: number, total: number): void {
        let iPro = current / (total*1.0) * 100;
        iPro = Math.ceil(iPro);
        if(this.pBar != null){
            this.pBar.value = iPro;
        }
        // this.textField3.text = `${ConstValue.P_BAR_LABEL3}...(${iPro}%)`;
        // console.log("==================current:"+current+ " total:"+total);
    }
}
