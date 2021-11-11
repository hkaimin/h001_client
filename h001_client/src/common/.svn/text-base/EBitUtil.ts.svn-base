class EBitUtil {
	//是否设置指定位
	public static isSetBit(value:number, bit:number):boolean{
		if(bit > 31 ){
			return false;
		}
		return (value & (1<<bit)) > 0;
	}


	//设置位
	public static SetBit(value:number, bit:number):number {
		if(bit > 31) {
			return value;
		}
		return value | (1 << bit)
	}

	//清空位
	public static ClearBit(value :number, bit :number) :number {
		if (bit > 31 ){
			return value;
		}
		return value & ~(1 << bit);
	}

	public static getArr(value:egret.ByteArray):number[]{
		var arr:number[]=[];
		value.position = 0;
        while(value.bytesAvailable>0){
            arr.push(value.readByte());
        }
		// console.log("getArr bit==================="+arr)
		return arr;
	}

}