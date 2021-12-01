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
        // console.log("-web3----"+(typeof web3 !== undefined))
        if (typeof web3 !== undefined) {
            ContractSol.hweb3 = new Web3(web3.currentProvider);
        }
        else {
            ContractSol.hweb3 = new Web3(new Web3.providers.HttpProvider(ContractSol.netURL));
        }
        ContractSol.res_nft_tokensOfOwner = RES.getRes("nft_tokensOfOwner_json");
        ContractSol.method_nft_tokensOfOwner = ContractSol.res_nft_tokensOfOwner;
        ContractSol.abiDef_nft_tokensOfOwner = ContractSol.method_nft_tokensOfOwner;
        ContractSol.metaNFT_nft_tokensOfOwner = ContractSol.hweb3.eth.contract([ContractSol.abiDef_nft_tokensOfOwner]).at(ContractSol.NFTAddress);
        ContractSol.res_maincoin_transfer = RES.getRes("maincoin_transfer_json");
        ContractSol.method_maincoin_transfer = ContractSol.res_maincoin_transfer;
        ContractSol.abiDef_maincoin_transfer = ContractSol.method_maincoin_transfer;
        ContractSol.res_maincoin_balanceOf = RES.getRes("maincoin_balanceOf_json");
        ContractSol.method_maincoin_balanceOf = ContractSol.res_maincoin_balanceOf;
        ContractSol.abiDef_maincoin_balanceOf = ContractSol.method_maincoin_balanceOf;
        ContractSol.res_maincoin_transferFrom = RES.getRes("maincoin_transferFrom_json");
        ContractSol.method_maincoin_transferFrom = ContractSol.res_maincoin_transferFrom;
        ContractSol.abiDef_maincoin_transferFrom = ContractSol.method_maincoin_transferFrom;
        ContractSol.res_maincoin_increaseApproval = RES.getRes("maincoin_increaseApproval_json");
        ContractSol.method_maincoin_increaseApproval = ContractSol.res_maincoin_increaseApproval;
        ContractSol.abiDef_maincoin_increaseApproval = ContractSol.method_maincoin_increaseApproval;
        ContractSol.metaNFT_maincoin = ContractSol.hweb3.eth.contract([
            ContractSol.abiDef_maincoin_transfer,
            ContractSol.abiDef_maincoin_balanceOf,
            ContractSol.abiDef_maincoin_transferFrom,
            ContractSol.abiDef_maincoin_increaseApproval
        ]).at(ContractSol.BEP20_Main_Address);
    };
    /**
     * 玩家nft
     */
    ContractSol.nft_tokensOfOwner = function (address) {
        ContractSol.metaNFT_nft_tokensOfOwner.tokensOfOwner(address, { from: ContractSol.sender }, function (err, token_result) {
            console.log('--nft_tokensOfOwner-err--' + (err == null) + " " + (err == "null"));
            console.log('--nft_tokensOfOwner-token_result--' + token_result);
        });
        // console.log(xx.length);
        // console.log(xx[1].c[0]);
    };
    /**
     * 主币transfer
     */
    ContractSol.maincoin_transfer = function (_to, _value) {
        // ContractSol.hweb3.eth.sendTransaction({
        // 	from:ContractSol.sender,
        // 	to:ContractSol.createAddress,
        // 	value:ContractSol.hweb3.toWei(0.01,"ether"),
        // 	gas:100000,
        // 	gasPrice:ContractSol.hweb3.eth.gasPrice,
        // },(err,address)=>{
        // 	console.log("-hweb3.eth.sendTransac---err--"+err)
        // 	console.log("-hweb3.eth.sendTransac---address--"+address)
        // }); 
        ContractSol.metaNFT_maincoin.transfer(_to, _value, { from: ContractSol.sender, gas: 100000, gasPrice: ContractSol.hweb3.eth.gasPrice }, function (error, txnHash) {
            if (error) {
                CommonTools.logError('--maincoin-transfer error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--maincoin-transfer txnHash--' + txnHash);
            }
        });
    };
    /**
     * 主币balanceOf
     */
    ContractSol.maincoin_balanceOf = function (address) {
        ContractSol.metaNFT_maincoin.balanceOf(address, { from: ContractSol.sender }, function (error, token_result) {
            if (error) {
                CommonTools.logError('--maincoin-balanceOf error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--maincoin_balanceOf-token_result--' + token_result);
            }
        });
    };
    /**
     * 主币transferFrom
     */
    ContractSol.maincoin_transferFrom = function (_from, _to, _value) {
        ContractSol.metaNFT_maincoin.transferFrom(_from, _to, _value, { from: ContractSol.sender, gas: 100000, gasPrice: ContractSol.hweb3.eth.gasPrice }, function (error, txnHash) {
            if (error) {
                CommonTools.logError('--maincoin_transferFrom error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--maincoin_transferFrom txnHash--' + txnHash);
            }
        });
    };
    /**
     * 主币increaseApproval
     */
    ContractSol.maincoin_increaseApproval = function (_spender, _value) {
        ContractSol.metaNFT_maincoin.increaseApproval(_spender, _value, { from: ContractSol.sender, gas: 100000, gasPrice: ContractSol.hweb3.eth.gasPrice }, function (error, txnHash) {
            if (error) {
                CommonTools.logError('--maincoin_increaseApproval error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--maincoin_increaseApproval txnHash--' + txnHash);
            }
        });
    };
    ContractSol.netURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
    ContractSol.BEP20_Main_Address = "0xa9e75f8838c7173412f229a7cd13a6b6e0fe6e39";
    ContractSol.BEP20_Sub_Address = "0x6A3587d791946E2C567a279886ACc10Fa962a4cc";
    ContractSol.NFTAddress = "0x14c75969e8aeb8ff68c4450ebc3090b48425f4bb";
    ContractSol.createAddress = "0x20855172ca82e9acc36b20933ec5b00d5c92919e";
    ContractSol.sender = "";
    return ContractSol;
}());
__reflect(ContractSol.prototype, "ContractSol");
//# sourceMappingURL=ContractSol.js.map