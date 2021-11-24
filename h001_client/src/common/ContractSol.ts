/**
 * 合约操作类
 */
class ContractSol {

	static netURL = "https://data-seed-prebsc-1-s1.binance.org:8545";
	static NFTAddress = "0x14c75969e8aeb8ff68c4450ebc3090b48425f4bb";

	//web3
	static hweb3 = new Web3(new Web3.providers.HttpProvider(ContractSol.netURL));
	static sender = "";
	static res_nft_tokensOfOwner;
	static method_nft_tokensOfOwner:Web3.MethodAbi;
	static abiDef_tokensOfOwner:Web3.AbiDefinition;
	static metaNFT_tokensOfOwner;

	static initSOL(){
		ContractSol.res_nft_tokensOfOwner = RES.getRes("nft_tokensOfOwner_json");
		ContractSol.method_nft_tokensOfOwner = ContractSol.res_nft_tokensOfOwner;
		ContractSol.abiDef_tokensOfOwner = ContractSol.method_nft_tokensOfOwner;
		ContractSol.metaNFT_tokensOfOwner = ContractSol.hweb3.eth.contract([ContractSol.method_nft_tokensOfOwner,ContractSol.abiDef_tokensOfOwner]).at(ContractSol.NFTAddress);
	}

	/**
	 * 玩家nft
	 */
	static nft_tokensOfOwner(address){
		let xx = ContractSol.metaNFT_tokensOfOwner.tokensOfOwner(address);
		console.log(xx.length);
		console.log(xx[1].c[0]);
	}

}