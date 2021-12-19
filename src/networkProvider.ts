import {ChainType} from "./types"

let bsctestnet: ChainType = {
    chainName: "BSC Test Net", 
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    symbol: "BNB",
    explorer: "https://bscscan.com/",
}

let bscmainnet: ChainType = {
    chainName: "Binance Smart Chain Mainnet", 
    rpcUrl: "https://bsc-dataseed1.binance.org",
    symbol: "BNB",
    explorer: "https://testnet.bscscan.com/",
}

let ethmainnet: ChainType = {
    chainName: "Ethereum mainnet",
    symbol: "ETH",
    rpcUrl: "TBD",
    explorer: "https://etherscan.io/",
}

let ethRineby: ChainType = {
    chainName: "Ethereum Testnet rinkeby",
    symbol: "ETH",
    rpcUrl: "TBD",
    explorer: "https://rinkeby.etherscan.io/",
}

let matic: ChainType = {
    chainName: "Polygon_Mumbai",
    symbol: "MATIC",
    rpcUrl: "https://rpc-mumbai.maticvigil.com/",
    explorer: "https://mumbai.polygonscan.com/",
}

let supportedChains: {[key: string]: ChainType} = {
    "0x61": bsctestnet,
    "0x38": bscmainnet,
    "0x1": ethmainnet,
    "0x4": ethRineby,
    "0x13881": matic, 
}  

export {supportedChains}
export type {ChainType}