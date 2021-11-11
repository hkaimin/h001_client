/**
 * 战斗模块
 */
class MapMiniDIYModule extends egret.DisplayObjectContainer {
	/**上级容器 */
    private context;
    /** 模块本体*/
    private panel;

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
    private testGround2 = [1,24,24,1,2,2,2,1,1,1,26,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,3,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,25,1,2,1,1,1,1,1,1,1,3,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,3,3,1,1,2,2,2];
    private testMap2 = [119,0,7,7,16,21,16,7,7,0,0,0,4,4,20,21,4,21,20,4,4,0,0,0,9,9,16,4,16,9,9,0,0,6,19,5,5,11,4,11,5,5,16,6,6,19,5,11,0,4,0,11,5,16,6,6,19,5,5,11,4,11,7,5,16,6,0,0,0,4,16,4,16,4,0,0,0,0,4,4,4,12,19,12,4,4,4,0,0,20,20,12,16,19,16,12,20,20,120];
    //test
    
    private type = 1;
	/**
     * 构造函数
     */
    public constructor(ct,bgConf,layerConf,type) {
        super();
		this.context = ct;
        this.type = type;
        this.panel = new eui.Panel();
		this.panel.skinName = "resource/eui_skins/UserUI/mapMiniDIYUI.exml";
        this.panel.title = "Title";
        // this.panel.horizontalCenter = 0;
        // this.panel.verticalCenter = 0;
        this.context.addChild(this.panel);
        // this.testGround = this.testGround2;
        // this.testMap = this.testMap2;
        this.testGround = bgConf;
        this.testMap = layerConf;
        // this.initConfig();
        this.initScene();//初始化地图
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

    private initScene(){
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
                mapItemObj.itemRange[0] = 497 + 55*j + 6*j;//x1
                mapItemObj.itemRange[1] = mapItemObj.itemRange[0] + 55;//x2
                mapItemObj.itemRange[2] = 103 + 55*i + 7*i;//y1
                mapItemObj.itemRange[3] = mapItemObj.itemRange[2] + 55;//y2
                mapItemObj.setRes(this.testGround[count]);

                if(this.testMap[count] > 0 && this.testMap[count] < 100){
                    let res = "res_"+this.testMap[count]+"_png"
                    mapItemObj.addMiniBlock(res);
                }else if(this.testMap[count] > 100){
                    mapItemObj.addMiniPlayer(this.testMap[count]);
                }

                count ++;
            }
        }

        this.panel.scaleX = 0.4;
        this.panel.scaleY = 0.4;  

        if(this.type == 1){
            this.panel.x = 180;
            this.panel.y = -20;
        }else if(this.type == 2){
            this.panel.x = -220;
            this.panel.y = -30;
            this.panel.scaleX = 0.48;
            this.panel.scaleY = 0.48; 
        }else if(this.type == 3){
            this.panel.x = 112;
            this.panel.y = 116;
            this.panel.scaleX = 0.66;
            this.panel.scaleY = 0.66; 
        }

    }

}