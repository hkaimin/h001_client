var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 创建新 WebSocket 对象，然后与服务器通讯。
 */
var WebSocketUtil = (function (_super) {
    __extends(WebSocketUtil, _super);
    /**
     * iCmd是指令
     * sCmdData是需要发的数据
     */
    function WebSocketUtil(sCmdData) {
        var _this = _super.call(this) || this;
        _this.zipAndAes = true; //压缩加密开关
        _this.ip = "119.91.155.74"; //134.175.171.37
        _this.ipUrl = "wss://login2.joyfulh.com:441"; //"wss://www.iogood.cn:441"
        _this.zipPort = 18024;
        _this.freePort = 8011;
        _this.sCurData = ""; //当前的命令，断线从连后需要传的数据
        _this.text = "TestWebSocket";
        _this.protoId = 1;
        _this.sCurData = sCmdData;
        // this.initStateText();
        _this.initWebSocket();
        //创建一个计时器对象
        _this.timer = new egret.Timer(30000, 0);
        //注册事件侦听器
        _this.timer.addEventListener(egret.TimerEvent.TIMER, _this.timerFunc, _this);
        _this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.timerComFunc, _this);
        //开始计时
        _this.timer.start();
        return _this;
    }
    WebSocketUtil.prototype.socketConnect = function () {
        //连接服务器
        if (this.zipAndAes) {
            if (ConstValue.p_LOGIN_MODEL == 1) {
                this.socket.connect(this.ip, this.zipPort); //加密压缩的网关
            }
            else if (ConstValue.p_LOGIN_MODEL == 2) {
                this.socket.connectByUrl(this.ipUrl);
            }
        }
        else {
            this.socket.connect(this.ip, this.freePort); //没有加密压缩的网关
        }
    };
    WebSocketUtil.prototype.timerFunc = function () {
        CommonTools.log("计时");
        if (this.socket.connected) {
            var byte = new egret.ByteArray();
            byte.writeByte(0); //单字节标识位 0=路由 1=连接
            byte.writeByte(0); //单字节路由id
            byte.position = 0;
            this.socket.writeBytes(byte, 0, byte.bytesAvailable);
            CommonTools.log("======heart beat==========sendData... " + byte.bytesAvailable + " byte.toString:" + this.Bytes2Str(byte.bytes));
        }
        else {
            //连接服务器
            WebSocketUtil.reloginCnt++;
            this.socketConnect();
        }
    };
    WebSocketUtil.prototype.timerComFunc = function () {
        CommonTools.log("计时结束");
    };
    WebSocketUtil.prototype.initStateText = function () {
        this.stateText = new egret.TextField();
        this.stateText.size = 22;
        this.stateText.text = this.text;
        this.stateText.width = 480;
        this.addChild(this.stateText);
    };
    WebSocketUtil.prototype.initWebSocket = function () {
        CommonTools.log("==============initWebSocket");
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
    };
    //去左右空格;
    WebSocketUtil.prototype.trim = function (s) {
        return s.replace(/(^\s*)|(\s*$)/g, "");
    };
    WebSocketUtil.prototype.makeJsonObj = function (sData) {
        var outLeftRight = sData.replace(/{/g, "").replace(/}/g, "");
        var arrKeysValues = outLeftRight.split(",");
        var obj = {};
        for (var i in arrKeysValues) {
            var arr = arrKeysValues[i].split(":");
            obj[arr[0]] = arr[1];
        }
    };
    WebSocketUtil.prototype.handleRecJsonStr = function (sData) {
        try {
            var obj_1 = JSON.parse(sData);
            switch (obj_1.f) {
                case "scrollNotice":
                    ConstValue.sysTips = obj_1.d.lInfo;
                    break;
                case "rf_scrollNotice":
                    ConstValue.oneTipsCnt++;
                    ConstValue.oneTips[ConstValue.oneTipsCnt] = obj_1.d.sInfo;
                    break;
                case "reflashsimple":
                    ConstValue.cacheUserInfo.curexp = obj_1.d.curexp;
                    ConstValue.cacheUserInfo.lv = obj_1.d.lv;
                    ConstValue.cacheUserInfo.coin = obj_1.d.coin;
                    ConstValue.cacheUserInfo.diamond = obj_1.d.diamond;
                    ConstValue.cacheUserInfo.maxExp = obj_1.d.exp;
                    if (ConstValue.P_HALL_OBJ != null)
                        ConstValue.P_HALL_OBJ.updateCoin();
                    break;
                case "register":
                case "login":
                case "entergame":
                case "loginWX":
                    ConstValue.P_LOGIN_OBJ.handlePacket(obj_1);
                    break;
                case "WaitingInfo":
                case "syncMapData":
                    if (ConstValue.P_HALL_OBJ != null) {
                        ConstValue.P_HALL_OBJ.handlePacket(obj_1);
                    }
                    else {
                        if (ConstValue.P_FIGHT_OBJ == null) {
                            ConstValue.P_FIGHT_OBJ = new FightingModule(ConstValue.P_CONTEXT);
                        }
                        ConstValue.P_FIGHT_OBJ.handlePacket(obj_1);
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
                    if (obj_1.f == "SeventDayReward")
                        if (!HallModule.isSafeArea)
                            return;
                    if (ConstValue.P_HALL_OBJ != null) {
                        ConstValue.P_HALL_OBJ.handlePacket(obj_1);
                    }
                    else {
                        //连接服务器
                        FightingModule.Delay(2000, function () {
                            try {
                                ConstValue.P_HALL_OBJ.handlePacket(obj_1);
                            }
                            catch (error) {
                                CommonTools.log("handleRecJsonStr====error=====" + error);
                            }
                        }, this);
                    }
                    break;
                case "GuildInfo":
                    HallModule.curGuide = obj_1.d.id;
                    if (ConstValue.P_FIGHT_OBJ != null) {
                        if (obj_1.d.id == 3)
                            ConstValue.P_FIGHT_OBJ.handlePacket(obj_1);
                    }
                    else if (ConstValue.P_HALL_OBJ != null) {
                        if (obj_1.d.id != 3)
                            ConstValue.P_HALL_OBJ.handlePacket(obj_1);
                    }
                    else if (ConstValue.P_HALL_OBJ == null) {
                        FightingModule.Delay(2000, function () {
                            try {
                                if (obj_1.d.id != 3)
                                    ConstValue.P_HALL_OBJ.handlePacket(obj_1);
                            }
                            catch (error) {
                                CommonTools.log("handleRecJsonStr====error=====" + error);
                            }
                        }, this);
                    }
                    break;
                case "pushBtnData":
                    HallModule.pushBtnData = obj_1.d;
                    break;
                case "refreshInfo":
                    if (ConstValue.cacheUserInfo != null) {
                        ConstValue.cacheUserInfo = obj_1.d;
                    }
                    break;
                case "notify":
                    if (ConstValue.P_LOGIN_OBJ != null)
                        ConstValue.P_LOGIN_OBJ.addCommonTips(obj_1.d.tips);
                    if (ConstValue.P_HALL_OBJ != null)
                        ConstValue.P_HALL_OBJ.addCommonTips(obj_1.d.tips);
                    if (ConstValue.P_FIGHT_OBJ != null)
                        ConstValue.P_FIGHT_OBJ.addCommonTips(obj_1.d.tips);
                    if (ConstValue.P_MAP_OBJ != null)
                        ConstValue.P_MAP_OBJ.addCommonTips(obj_1.d.tips);
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
                    ConstValue.P_FIGHT_OBJ.handlePacket(obj_1);
                    break;
                case "getMyMaps":
                    if (ConstValue.P_MAP_OBJ == null) {
                        ConstValue.P_HALL_OBJ.handlePacket(obj_1);
                    }
                    else {
                        ConstValue.P_MAP_OBJ.handlePacket(obj_1);
                    }
                    break;
                case "saveMap":
                case "getNewRank":
                case "getHopRank":
                    ConstValue.P_MAP_OBJ.handlePacket(obj_1);
                    break;
                case "relogin":
                    WebSocketUtil.closeFlag = false;
                    break;
                default:
                    break;
            }
            // CommonTools.log("handleRecJsonStr================"+sData+"  m:"+obj.m);
        }
        catch (error) {
            CommonTools.log("handleRecJsonStr====error=====" + sData);
            CommonTools.log("handleRecJsonStr====error=====" + error);
        }
    };
    WebSocketUtil.prototype.out_relogin = function () {
        if (WebSocketUtil.reloginCnt >= 5 && !this.socket.connected) {
            this.outLogin();
            return;
        }
        if (WebSocketUtil.reloginCnt >= 5 && this.socket.connected && WebSocketUtil.closeFlag) {
            this.outLogin();
            return;
        }
        if (ConstValue.P_HALL_OBJ) {
            ConstValue.P_NET_OBJ.relogin();
        }
        else {
            ConstValue.P_NET_OBJ.relogin2();
        }
        var tips = "网络重试:" + WebSocketUtil.reloginCnt + "/5";
        if (ConstValue.P_LOGIN_OBJ != null)
            ConstValue.P_LOGIN_OBJ.addCommonTips(tips);
        if (ConstValue.P_HALL_OBJ != null)
            ConstValue.P_HALL_OBJ.addCommonTips(tips);
        if (ConstValue.P_FIGHT_OBJ != null)
            ConstValue.P_FIGHT_OBJ.addCommonTips(tips);
        if (ConstValue.P_MAP_OBJ != null)
            ConstValue.P_MAP_OBJ.addCommonTips(tips);
        // CommonTools.addCommonTips(ConstValue.P_CONTEXT,"网络重试:"+WebSocketUtil.reloginCnt+"/5");
    };
    WebSocketUtil.prototype.sendData = function (sData) {
        this.sCurData = sData;
        if (!this.socket.connected) {
            //连接服务器
            FightingModule.Delay(2000, function () {
                CommonTools.log("----sendData--------reloginCnt-----" + WebSocketUtil.reloginCnt);
                this.socketConnect();
                this.out_relogin();
            }, this);
            return;
        }
        else {
            if (WebSocketUtil.closeFlag) {
                FightingModule.Delay(2000, function () {
                    CommonTools.log("----sendData--------reloginCnt-----" + WebSocketUtil.reloginCnt);
                    this.out_relogin();
                }, this);
                this.sCurData = CommonTools.getDataJsonStr("relogin", 1, { pid: ConstValue.cacheUserInfo.id, token: ConstValue.cacheUserInfo.token });
            }
        }
        var byteSize = function (str) { return new Blob([str]).size; };
        // CommonTools.log(sData+" ==== "+byteSize(sData));
        // CommonTools.log(" ====11111 "+this.Bytes2Str(this.stringToByte(sData)));
        CommonTools.log(" ====11111 " + this.bToString(this.stringToByte(sData)));
        //发送数据
        if (this.zipAndAes) {
            //创建 ByteArray 对象
            var byte = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            // byte.writeUnsignedShort(byteSize(sData)+5);
            byte.writeByte(0); //单字节标识位 0=路由 1=连接
            byte.writeByte(0); //单字节路由id
            byte.writeByte(1); //单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId); //双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            var bStrByte = this.stringToByte(sData);
            for (var i = 0; i < bStrByte.length; i++) {
                byte.writeByte(bStrByte[i]);
            }
            // byte.writeUTFBytes(sData);
            byte.position = 0;
            // CommonTools.log("===========原码流================="+this.Bytes2Str(byte.bytes)+ " len===" + byte.bytesAvailable);
            var afterZipByte = JSZip.compressions.DEFLATE.compressgzip(byte.bytes, { level: 6 });
            var bytePre = new egret.ByteArray();
            bytePre._writeUint8Array(afterZipByte);
            bytePre.position = 0;
            var byteTemp = new egret.ByteArray();
            byteTemp.endian = egret.Endian.LITTLE_ENDIAN;
            byteTemp.writeUnsignedShort(bytePre.bytesAvailable);
            byte.endian = egret.Endian.BIG_ENDIAN;
            byteTemp.writeBytes(bytePre);
            byteTemp.position = 0;
            // CommonTools.log("======after zip result==========sendData... " +byteTemp.bytesAvailable + " byte.toString:"+this.Bytes2Str(byteTemp.bytes));
            this.socket.writeBytes(byteTemp, 0, byteTemp.bytesAvailable);
        }
        else {
            //创建 ByteArray 对象
            var byte = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            byte.writeUnsignedShort(byteSize(sData) + 5);
            byte.writeByte(0); //单字节标识位 0=路由 1=连接
            byte.writeByte(0); //单字节路由id
            byte.writeByte(1); //单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId); //双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            byte.writeUTFBytes(sData);
            byte.position = 0;
            this.socket.writeBytes(byte, 0, byte.bytesAvailable);
            // CommonTools.log("======no zip aes==========sendData... " +byte.bytesAvailable + " byte.toString:"+this.Bytes2Str(byte.bytes));
        }
        this.sCurData = "";
    };
    WebSocketUtil.prototype.sendData2 = function (sData) {
        this.sCurData = sData;
        if (!this.socket.connected) {
            //连接服务器
            FightingModule.Delay(1000, function () {
                this.socketConnect();
                this.out_relogin();
            }, this);
            return;
        }
        else {
            if (WebSocketUtil.closeFlag) {
                FightingModule.Delay(1000, function () {
                    CommonTools.log("----sendData--------reloginCnt-----" + WebSocketUtil.reloginCnt);
                    this.out_relogin();
                }, this);
                this.sCurData = CommonTools.getDataJsonStr("relogin", 1, { pid: ConstValue.cacheUserInfo.id, token: ConstValue.cacheUserInfo.token });
            }
        }
        var byteSize = function (str) { return new Blob([str]).size; };
        // CommonTools.log(sData+" ==== "+byteSize(sData));
        // CommonTools.log(" ====11111 "+this.Bytes2Str(this.stringToByte(sData)));
        CommonTools.log(" ====11111 " + this.bToString(this.stringToByte(sData)));
        //发送数据
        if (this.zipAndAes) {
            //创建 ByteArray 对象
            var byte = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            // byte.writeUnsignedShort(byteSize(sData)+5);
            byte.writeByte(0); //单字节标识位 0=路由 1=连接
            byte.writeByte(1); //单字节路由id
            byte.writeByte(1); //单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId); //双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            var bStrByte = this.stringToByte(sData);
            for (var i = 0; i < bStrByte.length; i++) {
                byte.writeByte(bStrByte[i]);
            }
            // byte.writeUTFBytes(sData);
            byte.position = 0;
            // CommonTools.log("===========原码流================="+this.Bytes2Str(byte.bytes)+ " len===" + byte.bytesAvailable);
            var afterZipByte = JSZip.compressions.DEFLATE.compressgzip(byte.bytes, { level: 6 });
            var bytePre = new egret.ByteArray();
            bytePre._writeUint8Array(afterZipByte);
            bytePre.position = 0;
            var byteTemp = new egret.ByteArray();
            byteTemp.endian = egret.Endian.LITTLE_ENDIAN;
            byteTemp.writeUnsignedShort(bytePre.bytesAvailable);
            byte.endian = egret.Endian.BIG_ENDIAN;
            byteTemp.writeBytes(bytePre);
            byteTemp.position = 0;
            // CommonTools.log("======after zip result==========sendData... " +byteTemp.bytesAvailable + " byte.toString:"+this.Bytes2Str(byteTemp.bytes));
            this.socket.writeBytes(byteTemp, 0, byteTemp.bytesAvailable);
        }
        else {
            //创建 ByteArray 对象
            var byte = new egret.ByteArray();
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            byte.writeUnsignedShort(byteSize(sData) + 5);
            byte.writeByte(0); //单字节标识位 0=路由 1=连接
            byte.writeByte(1); //单字节路由id
            byte.writeByte(1); //单字节包类型 1=请求 2=响应
            this.protoId += 1;
            byte.writeUnsignedShort(this.protoId); //双字节流水号 递增循环
            byte.endian = egret.Endian.BIG_ENDIAN;
            byte.writeUTFBytes(sData);
            byte.position = 0;
            this.socket.writeBytes(byte, 0, byte.bytesAvailable);
            // CommonTools.log("======no zip aes==========sendData... " +byte.bytesAvailable + " byte.toString:"+this.Bytes2Str(byte.bytes));
        }
        this.sCurData = "";
    };
    //字节数组转十六进制字符串  
    WebSocketUtil.prototype.Bytes2Str = function (arr) {
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var tmp = arr[i].toString(16);
            if (tmp.length == 1) {
                tmp = "0" + tmp;
            }
            if (i == (arr.length - 1)) {
                str += tmp;
            }
            else {
                str += tmp + "-";
            }
        }
        return str;
    };
    WebSocketUtil.prototype.Bytes2Str2 = function (arr) {
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            if (i == (arr.length - 1)) {
                str += arr[i] + "";
            }
            else {
                str += arr[i] + "-";
            }
        }
        return str;
    };
    WebSocketUtil.prototype.Bytes2StrNoFix = function (arr) {
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            var tmp = arr[i].toString(16);
            if (tmp.length == 1) {
                tmp = "0" + tmp;
            }
            str += tmp;
        }
        return str;
    };
    WebSocketUtil.prototype.stringToByte = function (str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            }
            else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    };
    WebSocketUtil.prototype.bToString = function (arr) {
        if (typeof arr === 'string') {
            return arr;
        }
        var str = '', _arr = arr;
        for (var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2), v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[i].toString(2).slice(7 - bytesLength);
                for (var st = 1; st < bytesLength; st++) {
                    store += _arr[st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            }
            else {
                str += String.fromCharCode(_arr[i]);
            }
        }
        return str;
    };
    WebSocketUtil.prototype.outLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        WebSocketUtil.closeFlag = false;
                        WebSocketUtil.reloginCnt = 0;
                        this.timer.stop();
                        if (this.socket != null) {
                            this.socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
                            //添加链接打开侦听，连接成功会调用此方法
                            this.socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
                            //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
                            this.socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
                            //添加异常侦听，出现异常会调用此方法
                            this.socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
                            this.socket = null;
                        }
                        if (ConstValue.P_HALL_OBJ != null) {
                            ConstValue.P_HALL_OBJ.clear();
                            ConstValue.P_HALL_OBJ = null;
                        }
                        if (ConstValue.P_FIGHT_OBJ != null) {
                            ConstValue.P_FIGHT_OBJ.clear2();
                        }
                        ConstValue.P_NET_OBJ = null;
                        ConstValue.cacheHasLoginSuccess = false;
                        ConstValue.cacheUserInfo = null;
                        return [4 /*yield*/, ConstValue.P_CONTEXT.loadResource("pre_preload", 1)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        CommonTools.log('outLogin-----------back console');
                        CommonTools.logError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebSocketUtil.prototype.relogin = function () {
        WebSocketUtil.reloginCnt++;
        var sData = CommonTools.getDataJsonStr("relogin", 1, { pid: ConstValue.cacheUserInfo.id, token: ConstValue.cacheUserInfo.token });
        this.sendData(sData);
    };
    WebSocketUtil.prototype.relogin2 = function () {
        WebSocketUtil.reloginCnt++;
        var sData = CommonTools.getDataJsonStr("relogin", 1, { pid: ConstValue.cacheUserInfo.id, token: ConstValue.cacheUserInfo.token });
        this.sendData2(sData);
    };
    WebSocketUtil.prototype.onSocketOpen = function () {
        // this.trace("WebSocketOpen");
        WebSocketUtil.reloginCnt = 0;
        CommonTools.log("================onSocketOpen...");
        if (this.sCurData == "") {
            return;
        }
        this.sendData(this.sCurData);
    };
    WebSocketUtil.prototype.onSocketClose = function () {
        WebSocketUtil.closeFlag = true;
        // this.trace("WebSocketClose");
        CommonTools.log("------onSocketClose ");
        this.socketConnect();
        this.out_relogin();
    };
    WebSocketUtil.prototype.onSocketError = function () {
        // this.trace("WebSocketError");
        CommonTools.log("------onSocketError");
    };
    WebSocketUtil.prototype.onReceiveMessage = function (e) {
        // CommonTools.log("------onReceiveMessage");
        //创建 ByteArray 对象
        var byte = new egret.ByteArray();
        this.socket.readBytes(byte);
        // CommonTools.log("----1111----onReceiveMessage byte.toString:"+this.Bytes2Str(byte.bytes));
        if (byte.length > 2) {
            //读取数据
            byte.endian = egret.Endian.LITTLE_ENDIAN;
            var iLen = byte.readShort();
            if (this.zipAndAes) {
                var bUngzip = new egret.ByteArray();
                for (var i = 2; i < byte.bytes.length; i++) {
                    bUngzip.writeByte(byte.bytes[i]);
                }
                bUngzip.position = 0;
                // CommonTools.log("----22222----onReceiveMessage bUngzip:"+this.Bytes2Str(bUngzip.bytes));
                //解压
                // let unzip:Uint8Array = JSZip.compressions.DEFLATE.uncompressgzip(bUngzip.bytes);
                var unzip = SnappyJS.uncompress(bUngzip.bytes);
                // CommonTools.log("==============解压后的字节 " + this.Bytes2Str(unzip) + " len======" + unzip.length);
                var bytePre = new egret.ByteArray(unzip);
                bytePre.endian = egret.Endian.LITTLE_ENDIAN;
                var t1 = bytePre.readByte();
                var t2 = bytePre.readByte();
                var packetType = bytePre.readByte();
                var proidRes = bytePre.readShort();
                bytePre.endian = egret.Endian.BIG_ENDIAN;
                var msg = bytePre.readUTFBytes(bytePre.bytesAvailable);
                // this.trace("收到数据:");
                // this.trace("readUTF : "+msg);
                CommonTools.log("------onReceiveMessage 收到数据:" + msg);
                // CommonTools.log("------onReceiveMessage 收到数据: iLen "+iLen);
                this.handleRecJsonStr(msg);
            }
            else {
                var t1 = byte.readByte();
                var packetType = byte.readByte();
                var proidRes = byte.readShort();
                byte.endian = egret.Endian.BIG_ENDIAN;
                var msg = byte.readUTFBytes(byte.bytesAvailable);
                // this.trace("收到数据:");
                // this.trace("readUTF : "+msg);
                CommonTools.log("------onReceiveMessage 收到数据:" + msg);
                CommonTools.log("------onReceiveMessage 收到数据: iLen " + iLen);
            }
        }
        else {
            CommonTools.log("------onReceiveMessage length<=2---");
            // this.socket.close();
        }
    };
    WebSocketUtil.prototype.trace = function (msg) {
        this.text = this.text + "\n" + msg;
        this.stateText.text = this.text;
        egret.log(msg);
    };
    WebSocketUtil.reloginCnt = 0;
    WebSocketUtil.closeFlag = false;
    return WebSocketUtil;
}(egret.DisplayObjectContainer));
__reflect(WebSocketUtil.prototype, "WebSocketUtil");
//# sourceMappingURL=WebSocketUtil.js.map