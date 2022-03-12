/**
 * 音效公共处理
 */
class CommonAudioHandle {
	//当前背景音效
	static channel:egret.SoundChannel ;
	static curPlayName;

	/**
	 * resName 背景音乐，用这个，只有一个背景音乐
	 * loop 播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
	 */
	static play(resName:string,loop:number){
		if(!ConstValue.musicOpen)return;
		if(egret.localStorage.getItem("noVolume") == "1")return;
		if(resName == CommonAudioHandle.curPlayName)return;
		CommonAudioHandle.curPlayName = resName;
		if (CommonAudioHandle.channel != null)CommonAudioHandle.channel.stop();
		let sound:egret.Sound = RES.getRes(resName);
		sound.type = egret.Sound.MUSIC;
		CommonAudioHandle.channel = sound.play(0,loop);
	}

	static stopPlay(){
		if (CommonAudioHandle.channel != null)CommonAudioHandle.channel.stop();
	}

	/**
	 * 静音 / 有音切换
	 */
	static setVolume(iVol:number){
		if (CommonAudioHandle.channel != null)CommonAudioHandle.channel.volume = iVol;
	}

	/**
	 * resName 播放音效，用这个
	 * loop 播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
	 */
	static playEffect(resName:string,loop:number){
		if(!ConstValue.musicOpen)return;
		if(egret.localStorage.getItem("noVolume") == "1")return;
		let sound:egret.Sound = RES.getRes(resName);
		// sound.type = egret.Sound.EFFECT;
		sound.play(0,loop);
	}

	/**
	 * 停止背景音乐
	 */
	static stop(){
		if(CommonAudioHandle.channel != null){
			CommonAudioHandle.channel.stop();
			CommonAudioHandle.channel = null;
		}
	}

}