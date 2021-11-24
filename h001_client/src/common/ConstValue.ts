/**
 * 创建常量，以后多语言也是改这个文件
 */
class ConstValue {
	//翻译-对应
	static P_BAR_LABEL:string = "资源加载中";
	static P_BAR_LABEL2:string = "^_^.每个场景部分地图较大，首次加载可能需要几分钟  喝杯茶吧，以后再次加载将会秒速进入";
	static P_BAR_LABEL3:string = "资源加载中";
	static P_NULL_ACCOUNT:string = "请输入账号";
	static P_NULL_PASSWORD:string = "请输入密码";
	static P_NULL_INVITE:string = "请输入推广号";
	static P_NULL_VERIFY:string = "请输入验证码";
	static P_SEND_VERIFY:string = "验证码发送成功";
	static P_SEND_MODIFY_SUCCESS:string = "修改成功";
	static P_SEND_REGISTE_SUCCESS:string = "注册成功";
	static P_SEND_REGISTE_FAIL:string = "用户名已存在";
	static P_SEND_LOGIN_FAIL:string = "用户名或密码错误";
	static P_SEND_LOGIN_SUCCESS:string = "登录成功";
	static P_SEND_WAITING:string = "敬请期待";
	static P_SEND_HALLBACK_FAIL:string = "网络异常，进入大厅失败";
	static P_COPY_SUCCESS:string = "复制成功";
	static P_MODIFY_NULL_FAIL:string = "修改内容不能为空";
	static P_MODIFY_TITLE:string = "信息";
	static P_MODIFY_NICHENG:string = "修改昵称：";
	static P_MODIFY_OLD_PWD:string = "旧密码：";
	static P_MODIFY_NEW_PWD:string = "新密码：";
	static P_MODIFY_REALNAME:string = "修改名字：";
	static P_MODIFY_WX:string = "修改微信：";
	static P_MODIFY_BEGET:string = "修改比例：";
	static P_MODIFY_FAIL:string = "修改失败，请稍后再试";
	static P_MODIFY_PWD_FAIL:string = "新密码2次输入有误";
	static P_ENTER_ROOM_FAIL:string = "进入房间失败";
	static P_WAIT_NEXT:string = "请等待下轮开始";

	//dapp
	static P_NO_USER_ADDRESS:string = "请登录钱包！";

	//config公共配置
	static P_IS_DEBUG:boolean = false;//false正式模式 true演示模式，不联网的
	static P_IS_INNER:boolean = false;//false线上模式 true内网模式 有些提示只在内网提示
	static p_is_PRINT_ERROR:boolean = true;//是否打印error
	static p_is_PRINT_DEBUG:boolean = false;//是否打印debug
	static p_is_PRINT_AI:boolean = false;//是否打印ai
	static p_is_PRINT_AI_PATH:boolean = false;//是否打印ai path
	static p_is_PRINT_MAP:boolean = false;
	static p_LOGIN_MODEL = 1;//普通的账号密码登陆 2微信登陆
	static p_USE_WALLET = 0;//是否使用钱包登陆

	//common obj公共对象
	static P_NET_OBJ:WebSocketUtil = null;//网络对象
	static P_LOGIN_OBJ:LoginModule = null;//登录模块对象
	static P_HALL_OBJ:HallModule = null;//大厅模块对象
	static P_FIGHT_OBJ:FightingModule = null;//战斗模块对象
	static P_MAP_OBJ:MapDIYModule = null;//战斗模块对象
	static P_CONTEXT = null;

	static P_CONFIG:ConfigInterface = null;

	//登录后的信息缓存
	static cacheUserAccount:string = "";
	static cacheUserPwd:string = "";
	static cacheHasLoginSuccess:boolean = false;
	static cacheUserInfo = null;//json

	static cacheKeyGroup = {};
	static gatewayType = 0;//0主服 1战斗服
	static deviveScale = 1;//设备缩放因子
	static deviveNormalScale = 1.7;//设备宽高比

	static musicOpen = true;

	static role_select_img = {"0":"role_select_p1_png","1":"role_select_p2_png","2":"role_select_p3_png","3":"role_select_p4_png"}
	static PUSH_BUTTON = {"1":{"btn_name":"btn_map_bag","btn_res_01":"new_ui_10_01_png","btn_res_02":"new_ui_10_02_png"}
						 ,"2":{"btn_name":"btn_friend","btn_res_01":"new_ui_09_01_png","btn_res_02":"new_ui_09_02_png"}
						 ,"3":{"btn_name":"btn_setting","btn_res_01":"new_ui_04_01_png","btn_res_02":"new_ui_04_02_png"}
					     ,"4":{"btn_name":"btn_ranking","btn_res_01":"new_ui_06_01_png","btn_res_02":"new_ui_06_02_png"}
						 ,"5":{"btn_name":"btn_map_shop","btn_res_01":"new_ui_05_png","btn_res_02":"new_ui_05_png"}
						 ,"6":{"btn_name":"btn_vip","btn_res_01":"new_ui_08_png","btn_res_02":"new_ui_08_png"}
						 ,"7":{"btn_name":"btn_activity","btn_res_01":"new_ui_07_png","btn_res_02":"new_ui_07_png"}
						 ,"8":{"btn_name":"btn_select_role","btn_res_01":"new_ui_19_01_png","btn_res_02":"new_ui_19_02_png"}
						 ,"9":{"btn_name":"btn_uplv_task","btn_res_01":"new_ui_get_reward_png","btn_res_02":"new_ui_get_reward_png"}
						 ,"10":{"btn_name":"btn_skill","btn_res_01":"new_ui_20_01_png","btn_res_02":"new_ui_20_02_png"}
						 ,"11":{"btn_name":"btn_maprank","btn_res_01":"new_ui_21_png","btn_res_02":"new_ui_21_png"}
						 ,"12":{"btn_name":"btn_redtv","btn_res_01":"red_tv_png","btn_res_02":"red_tv_png"}}
	static role_select_bg = {"0":"role_select_bg_png","1":"role_select_bg2_png","2":"role_select_bg3_png","3":"role_select_bg4_png"}
	static skill_conf = {"1":{"icon":"skill_dog_png","cdicon":"skill_dog_nn_png"},"2":{"icon":"skill_chicken_png","cdicon":"skill_chicken_nn_png"}}
	static guide_tips = {
		"1":{"tip":"主人，让我动起来吧～","saveKey":"moveTip","jumpPoint":"controler_parent","jumpoffx":100,"jumpoffy":80},//移动摇杆事件
		"2":{"tip":"很好，找个安全地方放泡泡吧～","saveKey":"boomTip","jumpPoint":"boom_btn","jumpoffx":65,"jumpoffy":-80},//放置炸弹事件
		"3":{"tip":"注意躲避爆炸区域，持续3秒～","saveKey":"goawayTip"},//躲避事件
		"4":{"tip":"有东西在闪，我们捡起来吧～","saveKey":"itemTip"},//道具拣取事件
		"5":{"tip":"来吧，干掉对面呆瓜～","saveKey":"killTip"},//去炸对方事件
	}

	static sysTips = [];
	static oneTipsCnt = 0;
	static oneTipsCur = 0;
	static oneTips = {};

	//广告
	static videoAd = null;
	static videoAdOBJ = null;
	static videoIndx = 0;//1是等级奖励广告 2签到 3商城 4角色 5红包
}