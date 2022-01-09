//钱包注入变量
declare const web3:Web3;
/**
 * 合约操作类
 */
class ContractSol {
	static netURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
	static BEP20_Main_Address = "0xa9e75f8838c7173412f229a7cd13a6b6e0fe6e39";
	static BEP20_Sub_Address = "0x6A3587d791946E2C567a279886ACc10Fa962a4cc";
	static NFTAddress = "0x14c75969e8aeb8ff68c4450ebc3090b48425f4bb";

	//web3
	static hweb3; 
	static sender = "";

	static res_nft_tokensOfOwner;
	static method_nft_tokensOfOwner:Web3.MethodAbi;
	static abiDef_nft_tokensOfOwner:Web3.AbiDefinition;
	static metaNFT_nft_tokensOfOwner;

	static res_maincoin_transfer;
	static method_maincoin_transfer:Web3.MethodAbi;
	static abiDef_maincoin_transfer:Web3.AbiDefinition;
	static metaNFT_maincoin;

	static res_maincoin_balanceOf;
	static method_maincoin_balanceOf:Web3.MethodAbi;
	static abiDef_maincoin_balanceOf:Web3.AbiDefinition;

	static res_maincoin_transferFrom;
	static method_maincoin_transferFrom:Web3.MethodAbi;
	static abiDef_maincoin_transferFrom:Web3.AbiDefinition;

	static res_maincoin_increaseApproval;
	static method_maincoin_increaseApproval:Web3.MethodAbi;
	static abiDef_maincoin_increaseApproval:Web3.AbiDefinition;

	static res_subcoin_transfer;
	static method_subcoin_transfer:Web3.MethodAbi;
	static abiDef_subcoin_transfer:Web3.AbiDefinition;
	static metaNFT_subcoin;

	static res_subcoin_balanceOf;
	static method_subcoin_balanceOf:Web3.MethodAbi;
	static abiDef_subcoin_balanceOf:Web3.AbiDefinition;

	static res_subcoin_transferFrom;
	static method_subcoin_transferFrom:Web3.MethodAbi;
	static abiDef_subcoin_transferFrom:Web3.AbiDefinition;

	static initSOL(){
		// if(typeof web3 !== undefined){
		// 	ContractSol.hweb3 = new Web3(web3.currentProvider);
		// }else{
		// 	ContractSol.hweb3 = new Web3(new Web3.providers.HttpProvider(ContractSol.netURL)); 
		// }
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

	}

	/**
	 * 玩家nft
	 */
	static nft_tokensOfOwner(address){
		ContractSol.metaNFT_nft_tokensOfOwner.tokensOfOwner(address,{from:ContractSol.sender},(error,token_result) => {
			if(error){
				CommonTools.logError('--nft_tokensOfOwner-error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--nft_tokensOfOwner-token_result--'+token_result.length)
				CommonTools.logWallet('--nft_tokensOfOwner-token_result--'+token_result)
				ConstValue.cacheContract["nftLen"] = token_result.length;
				ConstValue.cacheContract["nftIndex"] = token_result;
				if(token_result.length > 0)ConstValue.P_HALL_OBJ.autoChangeFirst();
			}

		});
		// console.log(xx.length);
		// console.log(xx[1].c[0]);
	}

	/**
	 * 主币transfer
	 */
	static maincoin_transfer(_to,_value){
		
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

		ContractSol.metaNFT_maincoin.transfer(_to, _value, {from: ContractSol.sender}, function(error, txnHash) {
			if(error){
				CommonTools.logError('--maincoin-transfer error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--maincoin-transfer txnHash--'+txnHash);
			}
		});

	}

	/**
	 * 主币balanceOf
	 */
	static maincoin_balanceOf(address){
		ContractSol.metaNFT_maincoin.balanceOf(address,{from:ContractSol.sender},(error,token_result) => {
			if(error){
				CommonTools.logError('--maincoin-balanceOf error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--maincoin_balanceOf-token_result--'+token_result)
				ConstValue.P_HALL_OBJ.updateMaincoin(token_result,true);
			}
		});
	}

	/**
	 * 主币transferFrom
	 */
	static maincoin_transferFrom(_from,_to,_value){
		ContractSol.metaNFT_maincoin.transferFrom(_from, _to, _value, {from: ContractSol.sender,gas:100000,gasPrice:ContractSol.hweb3.eth.gasPrice}, function(error, txnHash) {
			if(error){
				CommonTools.logError('--maincoin_transferFrom error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--maincoin_transferFrom txnHash--'+txnHash)
			}
		});
	}

	/**
	 * 主币increaseApproval
	 */
	static async maincoin_increaseApproval(_spender,_value){
		ContractSol.metaNFT_maincoin.increaseApproval(_spender, _value, {from: ContractSol.sender}, function(error, txnHash) {//,gas:100000,gasPrice:ContractSol.hweb3.eth.gasPrice
			if(error){
				CommonTools.logError('--maincoin_increaseApproval error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--maincoin_increaseApproval txnHash--'+txnHash)
			}
		});
	}

	/**
	 * 子币transfer
	 */
	static subcoin_transfer(_to,_value){

		ContractSol.metaNFT_subcoin.transfer(_to, _value, {from: ContractSol.sender,gas:100000,gasPrice:ContractSol.hweb3.eth.gasPrice}, function(error, txnHash) {
			if(error){
				CommonTools.logError('--subcoin-transfer error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--subcoin-transfer txnHash--'+txnHash);
			}
		});

	}

	/**
	 * 子币balanceOf
	 */
	static subcoin_balanceOf(address){
		ContractSol.metaNFT_subcoin.balanceOf(address,{from:ContractSol.sender},(error,token_result) => {
			if(error){
				CommonTools.logError('--subcoin-balanceOf error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--subcoin_balanceOf-token_result--'+token_result)
				ConstValue.P_HALL_OBJ.updateSubcoin(token_result,true);
			}
		});
	}

	/**
	 * 子币transferFrom
	 */
	static subcoin_transferFrom(_from,_to,_value){
		ContractSol.metaNFT_subcoin.transferFrom(_from, _to, _value, {from: ContractSol.sender,gas:100000,gasPrice:ContractSol.hweb3.eth.gasPrice}, function(error, txnHash) {
			if(error){
				CommonTools.logError('--subcoin_transferFrom error--'+error)
				throw error;
			}else{
				CommonTools.logWallet('--subcoin_transferFrom txnHash--'+txnHash)
			}
		});
	}

}