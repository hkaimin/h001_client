var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 创建常量，以后多语言也是改这个文件
 */
var ConstValue = (function () {
    function ConstValue() {
    }
    //翻译-对应
    ConstValue.P_BAR_LABEL = "资源加载中";
    ConstValue.P_BAR_LABEL2 = "^_^.每个场景部分地图较大，首次加载可能需要几分钟  喝杯茶吧，以后再次加载将会秒速进入";
    ConstValue.P_BAR_LABEL3 = "资源加载中";
    ConstValue.P_NULL_ACCOUNT = "请输入账号";
    ConstValue.P_NULL_PASSWORD = "请输入密码";
    ConstValue.P_NULL_INVITE = "请输入推广号";
    ConstValue.P_NULL_VERIFY = "请输入验证码";
    ConstValue.P_SEND_VERIFY = "验证码发送成功";
    ConstValue.P_SEND_MODIFY_SUCCESS = "修改成功";
    ConstValue.P_SEND_REGISTE_SUCCESS = "注册成功";
    ConstValue.P_SEND_REGISTE_FAIL = "用户名已存在";
    ConstValue.P_SEND_LOGIN_FAIL = "用户名或密码错误";
    ConstValue.P_SEND_LOGIN_SUCCESS = "登录成功";
    ConstValue.P_SEND_WAITING = "敬请期待";
    ConstValue.P_SEND_HALLBACK_FAIL = "网络异常，进入大厅失败";
    ConstValue.P_COPY_SUCCESS = "复制成功";
    ConstValue.P_MODIFY_NULL_FAIL = "修改内容不能为空";
    ConstValue.P_MODIFY_TITLE = "信息";
    ConstValue.P_MODIFY_NICHENG = "修改昵称：";
    ConstValue.P_MODIFY_OLD_PWD = "旧密码：";
    ConstValue.P_MODIFY_NEW_PWD = "新密码：";
    ConstValue.P_MODIFY_REALNAME = "修改名字：";
    ConstValue.P_MODIFY_WX = "修改微信：";
    ConstValue.P_MODIFY_BEGET = "修改比例：";
    ConstValue.P_MODIFY_FAIL = "修改失败，请稍后再试";
    ConstValue.P_MODIFY_PWD_FAIL = "新密码2次输入有误";
    ConstValue.P_ENTER_ROOM_FAIL = "进入房间失败";
    ConstValue.P_WAIT_NEXT = "请等待下轮开始";
    //dapp
    ConstValue.P_NO_USER_ADDRESS = "Please login wallet！";
    //config公共配置
    ConstValue.P_IS_DEBUG = false; //false正式模式 true演示模式，不联网的
    ConstValue.P_IS_INNER = false; //false线上模式 true内网模式 有些提示只在内网提示
    ConstValue.p_is_PRINT_ERROR = true; //是否打印error
    ConstValue.p_is_PRINT_DEBUG = false; //是否打印debug
    ConstValue.p_is_PRINT_AI = false; //是否打印ai
    ConstValue.p_is_PRINT_AI_PATH = false; //是否打印ai path
    ConstValue.p_is_PRINT_MAP = false;
    ConstValue.p_LOGIN_MODEL = 1; //普通的账号密码登陆 2微信登陆
    ConstValue.p_USE_WALLET = 1; //是否使用钱包登陆
    //common obj公共对象
    ConstValue.P_NET_OBJ = null; //网络对象
    ConstValue.P_LOGIN_OBJ = null; //登录模块对象
    ConstValue.P_HALL_OBJ = null; //大厅模块对象
    ConstValue.P_FIGHT_OBJ = null; //战斗模块对象
    ConstValue.P_MAP_OBJ = null; //战斗模块对象
    ConstValue.P_CONTEXT = null;
    ConstValue.P_CONFIG = null;
    //登录后的信息缓存
    ConstValue.cacheUserAccount = "";
    ConstValue.cacheUserPwd = "";
    ConstValue.cacheHasLoginSuccess = false;
    ConstValue.cacheUserInfo = null; //json
    ConstValue.cacheKeyGroup = {};
    ConstValue.gatewayType = 0; //0主服 1战斗服
    ConstValue.deviveScale = 1; //设备缩放因子
    ConstValue.deviveNormalScale = 1.7; //设备宽高比
    ConstValue.musicOpen = true;
    ConstValue.role_select_img = { "0": "role_select_p1_png", "1": "role_select_p2_png", "2": "role_select_p3_png", "3": "role_select_p4_png" };
    ConstValue.PUSH_BUTTON = { "1": { "btn_name": "btn_map_bag", "btn_res_01": "new_ui_10_01_png", "btn_res_02": "new_ui_10_02_png" },
        "2": { "btn_name": "btn_friend", "btn_res_01": "new_ui_09_01_png", "btn_res_02": "new_ui_09_02_png" },
        "3": { "btn_name": "btn_setting", "btn_res_01": "new_ui_04_01_png", "btn_res_02": "new_ui_04_02_png" },
        "4": { "btn_name": "btn_ranking", "btn_res_01": "new_ui_06_01_png", "btn_res_02": "new_ui_06_02_png" },
        "5": { "btn_name": "btn_map_shop", "btn_res_01": "new_ui_05_png", "btn_res_02": "new_ui_05_png" },
        "6": { "btn_name": "btn_vip", "btn_res_01": "new_ui_08_png", "btn_res_02": "new_ui_08_png" },
        "7": { "btn_name": "btn_activity", "btn_res_01": "new_ui_07_png", "btn_res_02": "new_ui_07_png" },
        "8": { "btn_name": "btn_select_role", "btn_res_01": "new_ui_19_01_png", "btn_res_02": "new_ui_19_02_png" },
        "9": { "btn_name": "btn_uplv_task", "btn_res_01": "new_ui_get_reward_png", "btn_res_02": "new_ui_get_reward_png" },
        "10": { "btn_name": "btn_skill", "btn_res_01": "new_ui_20_01_png", "btn_res_02": "new_ui_20_02_png" },
        "11": { "btn_name": "btn_maprank", "btn_res_01": "new_ui_21_png", "btn_res_02": "new_ui_21_png" },
        "12": { "btn_name": "btn_redtv", "btn_res_01": "red_tv_png", "btn_res_02": "red_tv_png" } };
    ConstValue.role_select_bg = { "0": "role_select_bg_png", "1": "role_select_bg2_png", "2": "role_select_bg3_png", "3": "role_select_bg4_png" };
    ConstValue.skill_conf = { "1": { "icon": "skill_dog_png", "cdicon": "skill_dog_nn_png" }, "2": { "icon": "skill_chicken_png", "cdicon": "skill_chicken_nn_png" } };
    ConstValue.guide_tips = {
        "1": { "tip": "主人，让我动起来吧～", "saveKey": "moveTip", "jumpPoint": "controler_parent", "jumpoffx": 100, "jumpoffy": 80 },
        "2": { "tip": "很好，找个安全地方放泡泡吧～", "saveKey": "boomTip", "jumpPoint": "boom_btn", "jumpoffx": 65, "jumpoffy": -80 },
        "3": { "tip": "注意躲避爆炸区域，持续3秒～", "saveKey": "goawayTip" },
        "4": { "tip": "有东西在闪，我们捡起来吧～", "saveKey": "itemTip" },
        "5": { "tip": "来吧，干掉对面呆瓜～", "saveKey": "killTip" },
    };
    ConstValue.sysTips = [];
    ConstValue.oneTipsCnt = 0;
    ConstValue.oneTipsCur = 0;
    ConstValue.oneTips = {};
    //广告
    ConstValue.videoAd = null;
    ConstValue.videoAdOBJ = null;
    ConstValue.videoIndx = 0; //1是等级奖励广告 2签到 3商城 4角色 5红包
    return ConstValue;
}());
__reflect(ConstValue.prototype, "ConstValue");
//# sourceMappingURL=ConstValue.js.map