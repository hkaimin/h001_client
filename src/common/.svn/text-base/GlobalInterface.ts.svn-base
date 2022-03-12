/** 全局接口定义 */

/** Function排序字段接口 */
interface ISortField {
	/** 排序用 */
	sortValue: number;
}

/** 属性列表数据接口 */
interface IAttrListCell extends ISortField {
	/** 文本 */
	label: string;
	/** html文本 */
	labelHtml: string;
	/** 属性key */
	key: string;
	/** 属性值 */
	value: number;
	valueString: string;
	/** 属性名 */
	name: string;
	/** 颜色 */
	color: number;
	/** 是否隐藏图标 */
	hidePoint: boolean;
	/** 是否百分比 */
	percent: boolean;
}


/** 双列属性列表数据接口 */
interface IAttrList2Cell {
	curCell: IAttrListCell;
	nextCell: IAttrListCell;
	/** next的属性是否比cur的属性有所提升 */
	isUp: boolean;
	sortValue: number;
}

/** 缓存超时，移除处理 */
interface ICLEAR {
	/** 缓存超时，移除处理函数 */
	cacheTimeOutClear: Function;
}

/** pool */
interface IPool {
	/** 重置 */
	reset(): void;
	/** 移除 */
	dispose(): void;
}

/** 界面参数 */
interface IPanelParam {
	/** 需要打开的标签 */
	tabIndex: number;
	/** 数据 */
	data: any;
}

/** 购买次数VO */
interface IBuyNumVO {
	/** 描述 */
	info: string;
	/** 标题 */
	title: string;
	/** 默认购买次数 */
	num: number;
	/** 最大购买次数 */
	max: number;
	/** 购买一次的花费 */
	price: number;
	/** 回调 */
	cb: (num: number) => void;
	cbThis: any;
	/*图标*/
	icon: string;
	/*道具图标(道具id_数量;道具id_数量)*/
	itemList: string;
}

/** 字典 */
interface MapDic<T> {
	[key: string]: T;
	[key: number]: T;
}


interface ISdk {
	pay(amount: number, itemname: string, jsonId: number);
	hasFollow(): boolean;
	onFollow(value: any): void;
	setFollowCallBack(callback: Function, callThis: any): void;
	hasShare(): number;
	onShare(value: any): void;
	setShareCallBack(callback: Function, callThis: any): void;

	hasShortcut(): boolean;
	onShortcut(value: any): void;

	hasInvite(): boolean;
	onInvite(value: any): void;

	gmData(): any;

	enterGame(value: any): void;
	createRole(value: any): void;
	ready(value: any): void;
	getDeviceInfo():IDeviceInfo;
}

interface IDragDrop {
	isEmpty: boolean;
	groupName: string;
	id: number;
	canDrop: boolean;
	canDrag: boolean;
	data: any;
	setData(value: any);

	getDragCopyDisplay(): egret.DisplayObject;
	cancelDrag();
	globalToLocal(stageX?: number, stageY?: number, resultPoint?: egret.Point): egret.Point;
	removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean);
	addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number);
}


interface IDeviceInfo {
	imei:string;
	imsi:string;
	height:number;
	width:number;
	phonemodel:string;
	systemver:string;
	screendensity:string;
	dpi:string;
}

interface ILabelInfo{
	text?:string;
	size?:number;
	color?:number;
}

/**帮会上香记录 */
interface SxRecord{
	/** 时间戳 */
	time:number;
	/**	玩家名 */
	name:string;
	/**	上香id */
	id:number;
}
/**	任务 */
interface ITaskData{
	/** 任务id */
	id:number;
	/**	是否已完成 */
	isFinish:boolean;
	/**	当前次数 */
	num:number;
}

/**	解锁抓捕通用界面数据 */
interface IUnLockData{
	/** 是否解锁通用模块 皮肤 */
	isUnlockSkin:boolean,
	/** 解锁通用模块类型 */
	modeType:number,
	/** 解锁通用模块 皮肤id */
	skinId:number,

	/** 是否抓捕 */
	isZhuabu:boolean,
	/** 是否抓捕成功 */
	isZhuabuSucc:boolean,
	/** 抓捕的道具id */
	//itemId:number,
	/** 抓捕的宠物id */
	petId:number;
}