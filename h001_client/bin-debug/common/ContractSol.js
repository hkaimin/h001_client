var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 合约操作类
 */
var ContractSol = (function () {
    function ContractSol() {
    }
    ContractSol.initSOL = function () {
        ContractSol.res_nft_tokensOfOwner = RES.getRes("nft_tokensOfOwner_json");
        ContractSol.method_nft_tokensOfOwner = ContractSol.res_nft_tokensOfOwner;
        ContractSol.abiDef_tokensOfOwner = ContractSol.method_nft_tokensOfOwner;
        ContractSol.metaNFT_tokensOfOwner = ContractSol.hweb3.eth.contract([ContractSol.method_nft_tokensOfOwner, ContractSol.abiDef_tokensOfOwner]).at(ContractSol.NFTAddress);
    };
    /**
     * 玩家nft
     */
    ContractSol.nft_tokensOfOwner = function (address) {
        var xx = ContractSol.metaNFT_tokensOfOwner.tokensOfOwner(address);
        console.log(xx.length);
        console.log(xx[1].c[0]);
    };
    ContractSol.netURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
    ContractSol.NFTAddress = "0x14c75969e8aeb8ff68c4450ebc3090b48425f4bb";
    //web3
    ContractSol.hweb3 = new Web3(new Web3.providers.HttpProvider(ContractSol.netURL));
    ContractSol.sender = "";
    return ContractSol;
}());
__reflect(ContractSol.prototype, "ContractSol");
//# sourceMappingURL=ContractSol.js.map