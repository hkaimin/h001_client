/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    login(): Promise<any>;

    connectWallet(): Promise<any>;

    initSOL();

    updateInfo(data);

    shareAppMessage(roomkey): Promise<any>;

    shareWinAppMessage(starNum): Promise<any>;

    showShareMenu(): Promise<any>;

    onWxShow(): Promise<any>;
}

class DebugPlatform implements Platform {
    async getUserInfo() {
        return { nickName: "username" }
    }


    async login() {
        let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        let account = accounts[0];
        return account;
    }

    async connectWallet() {
        let installed = false;
        if (typeof window.ethereum !== 'undefined') {
            installed = true;
        }
        return installed;
    }

    initSOL(){
        ContractSol.hweb3 = new Web3(window.ethereum);
    }

    updateInfo(data){
        
    }

    async shareAppMessage(roomkey) {
        CommonTools.log("-------DebugPlatform------shareAppMessage");
    }

    async shareWinAppMessage(starNum) {
        CommonTools.log("-------DebugPlatform------shareWinAppMessage");
    }

    async showShareMenu() {
        CommonTools.log("-------DebugPlatform------showShareMenu");
    }

    async onWxShow() {
        CommonTools.log("-------DebugPlatform------onWxShow");
    }
}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {
    platform: Platform,
    ethereum
}





