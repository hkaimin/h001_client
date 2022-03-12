/**
 * 路径工具
 * @author Exin
 */
class PathUtils {

	public static CND_URL_49YOU: string = "";// "http://img.dzs.c49you.com/";//ip:  139.199.154.144
	public static CDN_URL: string = "https://www.iogood.cn:442/pptcdn/";//118.89.55.39
	// public static CDN_URL: string = "";
	private static RESOURC_URL: string = "resource/";
	private static NOTICE_URL: string = "notice/";
	private static RESOURC_SUB1_URL: string = "stage1/resource/";
	private static RESOURC_SUB2_URL: string = "stage2/resource/";
	public static Version_Default_Res:string = "default.res.json";
	public static Version_Default_Thm:string = "default.thm.json";
	public static Version_SUBPACK1_Res:string = "subpack1.res.json";
	public static Version_SUBPACK2_Res:string = "subpack2.res.json";

	/**
	 * 获取资源路径
	 */
	public static get RESOURC(): string {
		if(ConstValue.p_LOGIN_MODEL == 1){
			PathUtils.CDN_URL = "";
		}
		PathUtils.CDN_URL = "";
		return PathUtils.CDN_URL + PathUtils.RESOURC_URL;
	}

	public static get RESOURCSUB1(): string {
		if(ConstValue.p_LOGIN_MODEL == 1){
			PathUtils.CDN_URL = "";
		}
		PathUtils.CDN_URL = "";
		return PathUtils.CDN_URL + PathUtils.RESOURC_SUB1_URL;
	}

	public static get RESOURCSUB2(): string {
		if(ConstValue.p_LOGIN_MODEL == 1){
			PathUtils.CDN_URL = "";
		}
		PathUtils.CDN_URL = "";
		return PathUtils.CDN_URL + PathUtils.RESOURC_SUB2_URL;
	}

	/**
	 * 获取资源路径
	 */
	public static get NOTICE(): string {
		if(ConstValue.p_LOGIN_MODEL == 1){
			PathUtils.CDN_URL = "";
		}
		return PathUtils.CDN_URL + PathUtils.RESOURC_URL + PathUtils.NOTICE_URL;
	}

}