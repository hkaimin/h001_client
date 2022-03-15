/**
 * 创建新 WebSocket 对象，然后与服务器通讯。
 */
class WebSocketUtil extends egret.DisplayObjectContainer {

    private zipAndAes:boolean = true;//压缩加密开关
    private ip:string = "119.91.155.74";//134.175.171.37
    private ipUrl:string = "wss://login2.joyfulh.com:441";//"wss://www.iogood.cn:441"
    private zipPort:number = 18024;
    private freePort:number = 8011;
    private sCurData:string = "";//当前的命令，断线从连后需要传的数据

    public static reloginCnt = 0;
    public static closeFlag = false;
    private timer:egret.Timer;

    /**
     * iCmd是指令
     * sCmdData是需要发的数据
     */
    public constructor(sCmdData:string) {
        super();
        this.sCurData = sCmdData;
        // this.initStateText();
        this.initWebSocket();
        //创建一个计时器对象
        this.timer = new egret.Timer(30000,0);
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        this.timer.start();
    }

    public socketConnect(){
        //连接服务器
        if (this.zipAndAes){
            if(ConstValue.p_LOGIN_MODEL == 1){
                this.socket.connect(this.ip, this.zipPort);//加密压缩的网关
            }else if(ConstValue.p_LOGIN_MODEL == 2){
                this.socket.connectByUrl(this.ipUrl);
            }
        }else{
            this.socket.connect(this.ip, this.freePort);//没有加密压缩的网关
        }
    }

    private timerFunc()
    {
        CommonTools.log("计时");
        if(this.socket.connected){//发送心跳
            let byte:egret.ByteArray = new egret.ByteArray();
            byte.writeByte(0);//单字节标识位 0=路由 1=连接
            byte.writeByte(0);//单字节路由id
            byte.position = 0;
            this.socket.writeBytes(byte, 0, byte.bytesAvailable);
            CommonTools.log("======heart beat==========sendData... " +byte.bytesAvailable + " byte.toString:"+this.Bytes2Str(byte.bytes));
        }else{
            //连接服务器
            WebSocketUtil.reloginCnt ++;
            this.socketConnect();
        }
    }
    private timerComFunc()
    {
        CommonTools.log("计时结束");
    }

    private stateText:egret.TextField;
    private text:string = "TestWebSocket";
    private protoId:number = 1;

    private initStateText():void {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    }

    public socket:egret.WebSocket;

    private initWebSocket():void {
        CommonTools.log("==============initWebSocket")
        //创建 WebSocket 对象
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socketConnect();
    }

    //去左右空格;
    private trim(s){
        return s.replace(/(^\s*)|(\s*$)/g, "");
    }

    private makeJsonObj(sData:string){
        let outLeftRight = sData.replace(/{/g,"").replace(/}/g,"");
        let arrKeysValues = outLeftRight.split(",");
        let obj = {}
        for(let i in arrKeysValues){
            let arr = arrKeysValues[i].split(":");
            obj[arr[0]] = arr[1];
        }
    }

    private handleRecJsonStr(sData:string){
        try {
            let obj = JSON.parse(sData);  
            switch(obj.f){
                
                case "scrollNotice":
                    ConstValue.sysTips = obj.d.lInfo;
                    break;

                case "rf_scrollNotice":
                    ConstValue.oneTipsCnt ++;
                    ConstValue.oneTips[ConstValue.oneTipsCnt] = obj.d.sInfo;
                    break;

                case "reflashsimple":
                    ConstValue.cacheUserInfo.curexp = obj.d.curexp;
                    ConstValue.cacheUserInfo.lv = obj.d.lv;
                    ConstValue.cacheUserInfo.coin = obj.d.coin;
                    ConstValue.cacheUserInfo.diamond = obj.d.diamond;
                    ConstValue.cacheUserInfo.maxExp = obj.d.exp;
                    if(ConstValue.P_HALL_OBJ != null)ConstValue.P_HALL_OBJ.updateCoin();
                    break;

                case "register":
                case "login":
                case "entergame":
                case "loginWX":
                    ConstValue.P_LOGIN_OBJ.handlePacket(obj);
                    break;
                
                case "WaitingInfo":
                case "syncMapData":
                    if(ConstValue.P_HALL_OBJ != null){
                        ConstValue.P_HALL_OBJ.handlePacket(obj);
                    }else{
                        if(ConstValue.P_FIGHT_OBJ == null){
                            ConstValue.P_FIGHT_OBJ = new FightingModule(ConstValue.P_CONTEXT);
                        }
                        ConstValue.P_FIGHT_OBJ.handlePacket(obj);
                    }
                    break;

                case "gmFunc":
                case "contract":
                case "openRnakUI":
                case "getTotalPvpRank":
                case "getTotalLvRank":
                case "getTotalGuankaRank":
                case "openDiyMapUI":
                case "openShopUI":
                case "openBagUI":
                case "Buy":
                case "C2GOpenWujinUI":
                case "SeventDayReward":
                case "open1V1Room":
                case "open1V1RoomByMap":
                case "showMatch1v1RoomUI":
                case "Room1v1Dismiss":
                case "showAllClassList":
                case "reflashClassList":
                case "showUpgradeReward":
                case "getRoleDetail":
                case "getBarrierInfo":
                case "C2G_Open_MainUI":
                case "reflashRoleData":
                case "G2C_getWXInfo":
                case "saveWXInfo":
                case "getHelp":
                case "getGonggao":
                case "getPvpRankThree":
                case "AddMainCoin":
                case "AddSubCoin":
                case "createNft":
                case "getNftMarket":
                case "getOwnNft":
                case "SellNft":
                case "BuyNft":
                case "PBuyNft":
                case "getTotalExhi":
                case "joinExhi":
                case "gorestExhi":
                case "claimExhi":
                case "getMergeInfo":
                    if(obj.f == "SeventDayReward")if(!HallModule.isSafeArea)return;
                    if(ConstValue.P_HALL_OBJ != null){
                        ConstValue.P_HALL_OBJ.handlePacket(obj);
                    }else{
                        //连接服务器
                        FightingModule.Delay(2000,function(){
                            try {
                                ConstValue.P_HALL_OBJ.handlePacket(obj);
                            } catch (error) {
                                CommonTools.log("handleRecJsonStr====error====="+error)
                            }
                        },this);
                    }
                    break;
                
                case "GuildInfo":
                    HallModule.curGuide = obj.d.id;
                    if(ConstValue.P_FIGHT_OBJ != null){
                        if(obj.d.id == 3)ConstValue.P_FIGHT_OBJ.handlePacket(obj);
                    }else if(ConstValue.P_HALL_OBJ != null){
                        if(obj.d.id != 3)ConstValue.P_HALL_OBJ.handlePacket(obj);
                    }else if(ConstValue.P_HALL_OBJ == null){
                        FightingModule.Delay(2000,function(){
                            try {
                                if(obj.d.id != 3)ConstValue.P_HALL_OBJ.handlePacket(obj);
                            } catch (error) {
                                CommonTools.log("handleRecJsonStr====error====="+error)
                            }
                        },this);
                    }
                    break;
                case "pushBtnData":
                    HallModule.pushBtnData = obj.d;
                    break;

                case "refreshInfo":
                    if(ConstValue.cacheUserInfo != null){
                        ConstValue.cacheUserInfo = obj.d;
                    } 
                    break;

                case "notify":
                    if(ConstValue.P_LOGIN_OBJ != null)ConstValue.P_LOGIN_OBJ.addCommonTips(obj.d.tips);
                    if(ConstValue.P_HALL_OBJ != null)ConstValue.P_HALL_OBJ.addCommonTips(obj.d.tips);
                    if(ConstValue.P_FIGHT_OBJ != null)ConstValue.P_FIGHT_OBJ.addCommonTips(obj.d.tips);
                    if(ConstValue.P_MAP_OBJ != null)ConstValue.P_MAP_OBJ.addCommonTips(obj.d.tips);
                    break;

                case "syncPosBroadcase":
                case "syncPut":
                case "syncBoomZhuan":
                case "syncpickItem":
                case "gameResult":
                case "gameGuanKaResult":
                case "useSkillOK":
                case "syncKillMst":
                // case "miniGameInfo":
                // case "showTaskInfo":
                // case "UpdateClick":
                    ConstValue.P_FIGHT_OBJ.handlePacket(obj);
                    break;
                
                case "getMyMaps":
                    if(ConstValue.P_MAP_OBJ == null){
                        ConstValue.P_HALL_OBJ.handlePacket(obj);
                    }else{
                        ConstValue.P_MAP_OBJ.handlePacket(obj);
                    }
                    break;

                case "saveMap":
                case "getNewRank":
                case "getHopRank":
                    ConstValue.P_MAP_OBJ.handlePacket(obj);
                    break;
                
                case "relogin":
                    WebSocketUtil.closeFlag = false;
                    break;

                default:
                    break;
            }
            // CommonTools.log("handleRecJsonStr================"+sData+"  m:"+obj.m);
        } catch (error) {
            CommonTools.log("handleRecJsonStr====error====="+sData)
            CommonTools.log("handleRecJsonStr====error====="+error)
        }
    }

    public out_relogin(){
        if(WebSocketUtil.reloginCnt >= 5 && !this.socket.connected){
            this.outLogin();
            return;
        }

        if(WebSocketUtil.reloginCnt >= 5 && this.socket.connected && WebSocketUtil.closeFlag){
            this.outLogin();
            return;
        }

        if(ConstValue.P_HALL_OBJ){
            ConstValue.P_NET_OBJ.relogin();
        }else{
            ConstValue.P_NET_OBJ.relogin2();
        }
        let tips = "网络重试:"+WebSocketUtil.reloginCnt+"/5";
        if(ConstValue.P_LOGIN_OBJ != null)ConstValue.P_LOGIN_OBJ.addCommonTips(tips);
        if(ConstValue.P_HALL_OBJ != null)ConstValue.P_HALL_OBJ.addCommonTips(tips);
        if(ConstValue.P_FIGHT_OBJ != null)ConstValue.P_FIGHT_OBJ.addCommonTips(tips);
        if(ConstValue.P_MAP_OBJ != null)ConstValue.P_MAP_OBJ.addCommonTips(tips);
        // CommonTools.addCommonTips(ConstValue.P_CONTEXT,"网络重试:"+WebSocketUtil.reloginCnt+"/5");
    }

    public sendData(sData:string):void {
        
        this.sCurData = sData;
        if(!this.socket.connected){//连接断开了
            //连接服务器
            FightingModule.Delay(2000,function(){
                CommonTools.log("----sendData--------reloginCnt-----"+WebSocketUtil.reloginCnt)
                this.socketConnect();
                this.out_relogin();
            },this);
            return;
        }else{
            
            if(WebSocketUtil.closeFlag){
                FightingModule.Delay(2000,function(){
                    CommonTools.log("----sendData--------reloginCnt-----"+WebSocketUtil.reloginCnt)
                    this.out_relogin();
                },this);
                this.sCurData = CommonTools.getDataJsonStr("relogin",1,{pid:ConstValue.cacheUserInfo.id,token:ConstValue.cacheUserInfo.token});
            }
        }




        let byteSize = str => new Blob([str]).size;
        // CommonTools.log(sData+" ==== "+byteSize(sData));
        // CommonTools.log(" ====11111 "+this.Bytes2Str(this.stringToByte(sData)));
        CommonTools.log(" ====11111 "+this.bToString(this.stringToByte(sData)));
        //发送数据
        if (this.zipAndAes){
            //创建 ByteArray 对象
            let byte:egret.ByteArray = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            // byte.writeUnsignedShort(byteSize(sData)+5);
            byte.writeByte(0);//单字节标识位 0=路由 1=连接
            byte.writeByte(0);//单字节路由id
            byte.writeByte(1);//单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId);//双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            let bStrByte = this.stringToByte(sData);
            for (let i = 0;i < bStrByte.length;i++){
                byte.writeByte(bStrByte[i]);
            }
            // byte.writeUTFBytes(sData);
            byte.position = 0;            
            // CommonTools.log("===========原码流================="+this.Bytes2Str(byte.bytes)+ " len===" + byte.bytesAvailable);
            let afterZipByte:Uint8Array = JSZip.compressions.DEFLATE.compressgzip(byte.bytes,{level:6});
            
            let bytePre:egret.ByteArray = new egret.ByteArray();
            bytePre._writeUint8Array(afterZipByte);
            bytePre.position = 0;

            let byteTemp:egret.ByteArray = new egret.ByteArray();
            byteTemp.endian = egret.Endian.LITTLE_ENDIAN;
            byteTemp.writeUnsignedShort(bytePre.bytesAvailable);
            byte.endian = egret.Endian.BIG_ENDIAN;
            byteTemp.writeBytes(bytePre);
            byteTemp.position = 0;
            // CommonTools.log("======after zip result==========sendData... " +byteTemp.bytesAvailable + " byte.toString:"+this.Bytes2Str(byteTemp.bytes));
            this.socket.writeBytes(byteTemp, 0, byteTemp.bytesAvailable);
        }else{
            //创建 ByteArray 对象
            let byte:egret.ByteArray = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            byte.writeUnsignedShort(byteSize(sData)+5);
            byte.writeByte(0);//单字节标识位 0=路由 1=连接
            byte.writeByte(0);//单字节路由id
            byte.writeByte(1);//单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId);//双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            byte.writeUTFBytes(sData);
            byte.position = 0;
            this.socket.writeBytes(byte, 0, byte.bytesAvailable);
            // CommonTools.log("======no zip aes==========sendData... " +byte.bytesAvailable + " byte.toString:"+this.Bytes2Str(byte.bytes));
        }
        this.sCurData = "";
    }

    public sendData2(sData:string):void {
        
        this.sCurData = sData;
        if(!this.socket.connected){//连接断开了
            //连接服务器
            FightingModule.Delay(1000,function(){
                
                this.socketConnect();
                this.out_relogin();
            },this);
            return;
        }else{
            if(WebSocketUtil.closeFlag){
                FightingModule.Delay(1000,function(){
                    CommonTools.log("----sendData--------reloginCnt-----"+WebSocketUtil.reloginCnt)

                    this.out_relogin();
                },this);
                this.sCurData = CommonTools.getDataJsonStr("relogin",1,{pid:ConstValue.cacheUserInfo.id,token:ConstValue.cacheUserInfo.token});
            }
        }


        let byteSize = str => new Blob([str]).size;
        // CommonTools.log(sData+" ==== "+byteSize(sData));
        // CommonTools.log(" ====11111 "+this.Bytes2Str(this.stringToByte(sData)));
        CommonTools.log(" ====11111 "+this.bToString(this.stringToByte(sData)));
        //发送数据
        if (this.zipAndAes){
            //创建 ByteArray 对象
            let byte:egret.ByteArray = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            // byte.writeUnsignedShort(byteSize(sData)+5);
            byte.writeByte(0);//单字节标识位 0=路由 1=连接
            byte.writeByte(1);//单字节路由id
            byte.writeByte(1);//单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId);//双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            let bStrByte = this.stringToByte(sData);
            for (let i = 0;i < bStrByte.length;i++){
                byte.writeByte(bStrByte[i]);
            }
            // byte.writeUTFBytes(sData);
            byte.position = 0;            
            // CommonTools.log("===========原码流================="+this.Bytes2Str(byte.bytes)+ " len===" + byte.bytesAvailable);
            let afterZipByte:Uint8Array = JSZip.compressions.DEFLATE.compressgzip(byte.bytes,{level:6});
            
            let bytePre:egret.ByteArray = new egret.ByteArray();
            bytePre._writeUint8Array(afterZipByte);
            bytePre.position = 0;

            let byteTemp:egret.ByteArray = new egret.ByteArray();
            byteTemp.endian = egret.Endian.LITTLE_ENDIAN;
            byteTemp.writeUnsignedShort(bytePre.bytesAvailable);
            byte.endian = egret.Endian.BIG_ENDIAN;
            byteTemp.writeBytes(bytePre);
            byteTemp.position = 0;
            // CommonTools.log("======after zip result==========sendData... " +byteTemp.bytesAvailable + " byte.toString:"+this.Bytes2Str(byteTemp.bytes));
            this.socket.writeBytes(byteTemp, 0, byteTemp.bytesAvailable);
        }else{
            //创建 ByteArray 对象
            let byte:egret.ByteArray = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            byte.writeUnsignedShort(byteSize(sData)+5);
            byte.writeByte(0);//单字节标识位 0=路由 1=连接
            byte.writeByte(1);//单字节路由id
            byte.writeByte(1);//单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId);//双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            byte.writeUTFBytes(sData);
            byte.position = 0;
            this.socket.writeBytes(byte, 0, byte.bytesAvailable);
            // CommonTools.log("======no zip aes==========sendData... " +byte.bytesAvailable + " byte.toString:"+this.Bytes2Str(byte.bytes));
        }
        this.sCurData = "";
    }

    //字节数组转十六进制字符串  
  
    private Bytes2Str(arr)  {  
        let str = "";  
        for(let i=0; i<arr.length; i++)  
        {  
            let tmp = arr[i].toString(16);  
            if(tmp.length == 1)  
            {  
                tmp = "0" + tmp;  
            }  
            if (i == (arr.length-1)){
                str += tmp ; 
            }else{
                str += tmp + "-";
            }
        }  
        return str;  
    }

    private Bytes2Str2(arr)  {  
        let str = "";  
        for(let i=0; i<arr.length; i++)  
        {  
            if (i == (arr.length-1)){
                str += arr[i] + "" ; 
            }else{
                str += arr[i] + "-";
            }
        }  
        return str;  
    }

    private Bytes2StrNoFix(arr)  {  
        let str = "";  
        for(let i=0; i<arr.length; i++)  
        {  
        let tmp = arr[i].toString(16);  
        if(tmp.length == 1)  
        {  
            tmp = "0" + tmp;  
        }  
        str += tmp; 
        }  
        return str;  
    }

    private stringToByte(str) {  
        let bytes = new Array();  
        let len, c;  
        len = str.length;  
        for(let i = 0; i < len; i++) {  
            c = str.charCodeAt(i);  
            if(c >= 0x010000 && c <= 0x10FFFF) {  
                bytes.push(((c >> 18) & 0x07) | 0xF0);  
                bytes.push(((c >> 12) & 0x3F) | 0x80);  
                bytes.push(((c >> 6) & 0x3F) | 0x80);  
                bytes.push((c & 0x3F) | 0x80);  
            } else if(c >= 0x000800 && c <= 0x00FFFF) {  
                bytes.push(((c >> 12) & 0x0F) | 0xE0);  
                bytes.push(((c >> 6) & 0x3F) | 0x80);  
                bytes.push((c & 0x3F) | 0x80);  
            } else if(c >= 0x000080 && c <= 0x0007FF) {  
                bytes.push(((c >> 6) & 0x1F) | 0xC0);  
                bytes.push((c & 0x3F) | 0x80);  
            } else {  
                bytes.push(c & 0xFF);  
            }  
        }  
        return bytes;  
    }    


     private bToString(arr) {  
        if(typeof arr === 'string') {  
            return arr;  
        }  
        var str = '',  
            _arr = arr;  
        for(var i = 0; i < _arr.length; i++) {  
            var one = _arr[i].toString(2),  
                v = one.match(/^1+?(?=0)/);  
            if(v && one.length == 8) {  
                var bytesLength = v[0].length;  
                var store = _arr[i].toString(2).slice(7 - bytesLength);  
                for(var st = 1; st < bytesLength; st++) {  
                    store += _arr[st + i].toString(2).slice(2);  
                }  
                str += String.fromCharCode(parseInt(store, 2));  
                i += bytesLength - 1;  
            } else {  
                str += String.fromCharCode(_arr[i]);  
            }  
        }  
        return str;  
    } 

    public async outLogin(){
        
        try {
            WebSocketUtil.closeFlag = false;
            WebSocketUtil.reloginCnt = 0;
            this.timer.stop();
            if(this.socket != null){
                this.socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
                //添加链接打开侦听，连接成功会调用此方法
                this.socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
                //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
                this.socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
                //添加异常侦听，出现异常会调用此方法
                this.socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
                this.socket = null;
            }
            if(ConstValue.P_HALL_OBJ != null){
                ConstValue.P_HALL_OBJ.clear();
                ConstValue.P_HALL_OBJ = null;
            }
            if(ConstValue.P_FIGHT_OBJ != null){
                ConstValue.P_FIGHT_OBJ.clear2();
            }
            ConstValue.P_NET_OBJ = null;
            ConstValue.cacheHasLoginSuccess = false;
            ConstValue.cacheUserInfo = null;
            await ConstValue.P_CONTEXT.loadResource("pre_preload",1);
            
        } catch (error) {
            CommonTools.log('outLogin-----------back console')
            CommonTools.logError(error);
        }
    }

    public relogin():void{
        WebSocketUtil.reloginCnt ++;
        let sData = CommonTools.getDataJsonStr("relogin",1,{pid:ConstValue.cacheUserInfo.id,token:ConstValue.cacheUserInfo.token});
        this.sendData(sData);
    }

    public relogin2():void{
        WebSocketUtil.reloginCnt ++;
        let sData = CommonTools.getDataJsonStr("relogin",1,{pid:ConstValue.cacheUserInfo.id,token:ConstValue.cacheUserInfo.token});
        this.sendData2(sData);
    }

    private onSocketOpen():void {
        
        // this.trace("WebSocketOpen");
        WebSocketUtil.reloginCnt = 0;
        CommonTools.log("================onSocketOpen...");
        if(this.sCurData == ""){//没数据需要发送
            return;
        }
        this.sendData(this.sCurData);
    }

    private onSocketClose():void {
        WebSocketUtil.closeFlag = true;
        // this.trace("WebSocketClose");
        CommonTools.log("------onSocketClose ");
        this.socketConnect();
        this.out_relogin();
    }

    private onSocketError():void {
        
        // this.trace("WebSocketError");
        CommonTools.log("------onSocketError");
    }

    private onReceiveMessage(e:egret.Event):void {
        // CommonTools.log("------onReceiveMessage");
        //创建 ByteArray 对象
        let byte:egret.ByteArray = new egret.ByteArray();
        this.socket.readBytes(byte);
        // CommonTools.log("----1111----onReceiveMessage byte.toString:"+this.Bytes2Str(byte.bytes));
        if(byte.length>2){
            //读取数据
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            let iLen:number = byte.readShort();
            if(this.zipAndAes){
                let bUngzip:egret.ByteArray = new egret.ByteArray();
                for(let i =2;i<byte.bytes.length;i++){
                    bUngzip.writeByte(byte.bytes[i]);
                }
                bUngzip.position = 0;
                // CommonTools.log("----22222----onReceiveMessage bUngzip:"+this.Bytes2Str(bUngzip.bytes));
                //解压
                // let unzip:Uint8Array = JSZip.compressions.DEFLATE.uncompressgzip(bUngzip.bytes);
                let unzip = SnappyJS.uncompress(bUngzip.bytes);
                // CommonTools.log("==============解压后的字节 " + this.Bytes2Str(unzip) + " len======" + unzip.length);
                let bytePre:egret.ByteArray = new egret.ByteArray(unzip);
                bytePre.endian = egret.Endian.LITTLE_ENDIAN;
                let t1:number = bytePre.readByte();
                let t2:number = bytePre.readByte();
                let packetType:number = bytePre.readByte();
                let proidRes = bytePre.readShort();
                bytePre.endian = egret.Endian.BIG_ENDIAN;
                let msg:string = bytePre.readUTFBytes(bytePre.bytesAvailable);
                // this.trace("收到数据:");
                // this.trace("readUTF : "+msg);
                CommonTools.log("------onReceiveMessage 收到数据:" + msg);
                // CommonTools.log("------onReceiveMessage 收到数据: iLen "+iLen);
                this.handleRecJsonStr(msg);
            }else{
                let t1:number = byte.readByte();
                let packetType:number = byte.readByte();
                let proidRes = byte.readShort();
                byte.endian = egret.Endian.BIG_ENDIAN;
                let msg:string = byte.readUTFBytes(byte.bytesAvailable);
                // this.trace("收到数据:");
                // this.trace("readUTF : "+msg);
                CommonTools.log("------onReceiveMessage 收到数据:" + msg);
                CommonTools.log("------onReceiveMessage 收到数据: iLen "+iLen);
            }
        }else{
            CommonTools.log("------onReceiveMessage length<=2---");
            // this.socket.close();
        }
    }


    private trace(msg:any):void {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        egret.log(msg);
    }
}