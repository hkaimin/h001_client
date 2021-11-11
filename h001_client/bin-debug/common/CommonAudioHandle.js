var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 音效公共处理
 */
var CommonAudioHandle = (function () {
    function CommonAudioHandle() {
    }
    /**
     * resName 背景音乐，用这个，只有一个背景音乐
     * loop 播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
     */
    CommonAudioHandle.play = function (resName, loop) {
        if (!ConstValue.musicOpen)
            return;
        if (egret.localStorage.getItem("noVolume") == "1")
            return;
        if (resName == CommonAudioHandle.curPlayName)
            return;
        CommonAudioHandle.curPlayName = resName;
        if (CommonAudioHandle.channel != null)
            CommonAudioHandle.channel.stop();
        var sound = RES.getRes(resName);
        sound.type = egret.Sound.MUSIC;
        CommonAudioHandle.channel = sound.play(0, loop);
    };
    CommonAudioHandle.stopPlay = function () {
        if (CommonAudioHandle.channel != null)
            CommonAudioHandle.channel.stop();
    };
    /**
     * 静音 / 有音切换
     */
    CommonAudioHandle.setVolume = function (iVol) {
        if (CommonAudioHandle.channel != null)
            CommonAudioHandle.channel.volume = iVol;
    };
    /**
     * resName 播放音效，用这个
     * loop 播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
     */
    CommonAudioHandle.playEffect = function (resName, loop) {
        if (!ConstValue.musicOpen)
            return;
        if (egret.localStorage.getItem("noVolume") == "1")
            return;
        var sound = RES.getRes(resName);
        // sound.type = egret.Sound.EFFECT;
        sound.play(0, loop);
    };
    /**
     * 停止背景音乐
     */
    CommonAudioHandle.stop = function () {
        if (CommonAudioHandle.channel != null) {
            CommonAudioHandle.channel.stop();
            CommonAudioHandle.channel = null;
        }
    };
    return CommonAudioHandle;
}());
__reflect(CommonAudioHandle.prototype, "CommonAudioHandle");
//# sourceMappingURL=CommonAudioHandle.js.map