var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 合约操作类
 */
var ContractSol = (function () {
    function ContractSol() {
    }
    ContractSol.initSOL = function () {
        // if(typeof web3 !== undefined){
        // 	ContractSol.hweb3 = new Web3(web3.currentProvider);
        // }else{
        // 	ContractSol.hweb3 = new Web3(new Web3.providers.HttpProvider(ContractSol.netURL)); 
        // }
        ContractSol.res_nft_tokensOfOwner = RES.getRes("nft_tokensOfOwner_json");
        ContractSol.method_nft_tokensOfOwner = ContractSol.res_nft_tokensOfOwner;
        ContractSol.abiDef_nft_tokensOfOwner = ContractSol.method_nft_tokensOfOwner;
        ContractSol.res_nft_approve = RES.getRes("nft_approve_json");
        ContractSol.method_nft_approve = ContractSol.res_nft_approve;
        ContractSol.abiDef_nft_approve = ContractSol.method_nft_approve;
        ContractSol.res_nft_transferFrom = RES.getRes("nft_transferFrom_json");
        ContractSol.method_nft_transferFrom = ContractSol.res_nft_transferFrom;
        ContractSol.abiDef_nft_transferFrom = ContractSol.method_nft_transferFrom;
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
        ContractSol.res_subcoin_transfer = RES.getRes("maincoin_transfer_json");
        ContractSol.method_subcoin_transfer = ContractSol.res_subcoin_transfer;
        ContractSol.abiDef_subcoin_transfer = ContractSol.method_subcoin_transfer;
        ContractSol.res_subcoin_balanceOf = RES.getRes("maincoin_balanceOf_json");
        ContractSol.method_subcoin_balanceOf = ContractSol.res_subcoin_balanceOf;
        ContractSol.abiDef_subcoin_balanceOf = ContractSol.method_subcoin_balanceOf;
        ContractSol.res_subcoin_transferFrom = RES.getRes("maincoin_transferFrom_json");
        ContractSol.method_subcoin_transferFrom = ContractSol.res_subcoin_transferFrom;
        ContractSol.abiDef_subcoin_transferFrom = ContractSol.method_subcoin_transferFrom;
        ContractSol.metaNFT_maincoin = ContractSol.hweb3.eth.contract([
            ContractSol.abiDef_maincoin_transfer,
            ContractSol.abiDef_maincoin_balanceOf,
            ContractSol.abiDef_maincoin_transferFrom,
            ContractSol.abiDef_maincoin_increaseApproval
        ]).at(ContractSol.BEP20_Main_Address);
        ContractSol.metaNFT_subcoin = ContractSol.hweb3.eth.contract([
            ContractSol.abiDef_subcoin_transfer,
            ContractSol.abiDef_subcoin_balanceOf,
            ContractSol.abiDef_subcoin_transferFrom
        ]).at(ContractSol.BEP20_Sub_Address);
        ContractSol.metaNFT_nft = ContractSol.hweb3.eth.contract([
            ContractSol.abiDef_nft_tokensOfOwner,
            ContractSol.abiDef_nft_approve,
            ContractSol.abiDef_nft_transferFrom
        ]).at(ContractSol.NFTAddress);
    };
    /**
     * 玩家nft
     */
    ContractSol.nft_tokensOfOwner = function (address) {
        ContractSol.metaNFT_nft.tokensOfOwner(address, { from: ContractSol.sender }, function (error, token_result) {
            if (error) {
                CommonTools.logError('--nft_tokensOfOwner-error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--nft_tokensOfOwner-token_result--' + token_result.length);
                CommonTools.logWallet('--nft_tokensOfOwner-token_result--' + token_result);
                ConstValue.cacheContract["nftLen"] = token_result.length;
                ConstValue.cacheContract["nftIndex"] = token_result;
                if (token_result.length > 0) {
                    var sData = CommonTools.getDataJsonStr("getOwnNft", 1, { lNft: token_result });
                    ConstValue.P_NET_OBJ.sendData(sData);
                }
                // if(token_result.length > 0)ConstValue.P_HALL_OBJ.autoChangeFirst();
            }
        });
        // console.log(xx.length);
        // console.log(xx[1].c[0]);
    };
    ContractSol.nft_approve = function (_index) {
        ContractSol.metaNFT_nft.approve(ContractSol.createAddress, _index, { from: ContractSol.sender }, function (error, token_result) {
            if (error) {
                CommonTools.logError('--nft_approve-error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--nft_approve-success');
                ConstValue.P_HALL_OBJ.sellNft();
            }
        });
    };
    ContractSol.nft_transferFrom = function (_index) {
        ContractSol.metaNFT_nft.transferFrom(ContractSol.createAddress, ContractSol.sender, _index, { from: ContractSol.sender }, function (error, token_result) {
            if (error) {
                CommonTools.logError('--nft_transferFrom-error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--nft_transferFrom-success');
                var sDataBuybtn = CommonTools.getDataJsonStr("BuyNft", 1, { nftIndex: _index, sAddress: ContractSol.sender });
                ConstValue.P_NET_OBJ.sendData(sDataBuybtn);
            }
        });
    };
    ContractSol.DelayGetReceipt = function (tHash, iOpType, arg1) {
        CommonTools.logWallet("--DelayGetReceipt------" + tHash + " " + iOpType + " " + arg1);
        FightingModule.Delay(5000, function () {
            ContractSol.hweb3.eth.getTransactionReceipt(tHash, function (error, result) {
                CommonTools.logWallet("--DelayGetReceipt----result--" + result);
                if (result == null) {
                    ContractSol.DelayGetReceipt(tHash, iOpType, arg1);
                }
                else {
                    if (result.status.toString() == "0x1") {
                        if (iOpType == ContractSol.BUY_TICKET) {
                            ConstValue.P_HALL_OBJ.addCommonTips("Waiting NFT response...");
                            ContractSol.maincoin_balanceOf(ContractSol.sender);
                            var sData = CommonTools.getDataJsonStr("createNft", 1, { iTickets: arg1 / 100 });
                            ConstValue.P_NET_OBJ.sendData(sData);
                        }
                        else if (iOpType == ContractSol.BUY_MARKET_NFT) {
                            ConstValue.P_HALL_OBJ.addCommonTips("Waiting Market response...");
                            ContractSol.maincoin_balanceOf(ContractSol.sender);
                            ConstValue.P_HALL_OBJ.pBuyNft();
                        }
                    }
                }
            });
        }, this);
    };
    /**
     * 主币transfer
     */
    ContractSol.maincoin_transfer = function (_to, _value, iOpr) {
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
        ContractSol.metaNFT_maincoin.transfer(_to, _value, { from: ContractSol.sender }, function (error, txnHash) {
            if (error) {
                CommonTools.logError('--maincoin-transfer error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--maincoin-transfer txnHash--' + txnHash);
                ContractSol.DelayGetReceipt(txnHash, iOpr, _value);
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
                ConstValue.P_HALL_OBJ.updateMaincoin(token_result, true);
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ContractSol.metaNFT_maincoin.increaseApproval(_spender, _value, { from: ContractSol.sender }, function (error, txnHash) {
                    if (error) {
                        CommonTools.logError('--maincoin_increaseApproval error--' + error);
                        throw error;
                    }
                    else {
                        CommonTools.logWallet('--maincoin_increaseApproval txnHash--' + txnHash);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * 子币transfer
     */
    ContractSol.subcoin_transfer = function (_to, _value) {
        ContractSol.metaNFT_subcoin.transfer(_to, _value, { from: ContractSol.sender, gas: 100000, gasPrice: ContractSol.hweb3.eth.gasPrice }, function (error, txnHash) {
            if (error) {
                CommonTools.logError('--subcoin-transfer error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--subcoin-transfer txnHash--' + txnHash);
            }
        });
    };
    /**
     * 子币balanceOf
     */
    ContractSol.subcoin_balanceOf = function (address) {
        ContractSol.metaNFT_subcoin.balanceOf(address, { from: ContractSol.sender }, function (error, token_result) {
            if (error) {
                CommonTools.logError('--subcoin-balanceOf error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--subcoin_balanceOf-token_result--' + token_result);
                ConstValue.P_HALL_OBJ.updateSubcoin(token_result, true);
            }
        });
    };
    /**
     * 子币transferFrom
     */
    ContractSol.subcoin_transferFrom = function (_from, _to, _value) {
        ContractSol.metaNFT_subcoin.transferFrom(_from, _to, _value, { from: ContractSol.sender, gas: 100000, gasPrice: ContractSol.hweb3.eth.gasPrice }, function (error, txnHash) {
            if (error) {
                CommonTools.logError('--subcoin_transferFrom error--' + error);
                throw error;
            }
            else {
                CommonTools.logWallet('--subcoin_transferFrom txnHash--' + txnHash);
            }
        });
    };
    ContractSol.netURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
    ContractSol.BEP20_Main_Address = "0xa9e75f8838c7173412f229a7cd13a6b6e0fe6e39";
    ContractSol.BEP20_Sub_Address = "0x6A3587d791946E2C567a279886ACc10Fa962a4cc";
    ContractSol.NFTAddress = "0x14c75969e8aeb8ff68c4450ebc3090b48425f4bb";
    ContractSol.BUY_TICKET = 1;
    ContractSol.BUY_MARKET_NFT = 2;
    ContractSol.EXCHANGE_RATE = 100;
    ContractSol.sender = "";
    ContractSol.createAddress = "0x210729036108b7dd19bba5141e181a47a619a46f";
    return ContractSol;
}());
__reflect(ContractSol.prototype, "ContractSol");
//# sourceMappingURL=ContractSol.js.map