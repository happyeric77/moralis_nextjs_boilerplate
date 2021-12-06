// const path = require("path")
// const dotenv = require('dotenv');
// try{dotenv.config({ path: "./.env" })}catch(e){
//     console.log(e)
//     process.exit(1)
// }

export const supportedChains = {
    "0x61": {
        chainName: "BSC Test Net", 
        rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        symbol: "BNB",
        explorer: "https://bscscan.com/",
    },
    "0x38": {
        chainName: "Binance Smart Chain Mainnet", 
        rpcUrl: "https://bsc-dataseed1.binance.org",
        symbol: "BNB",
        explorer: "https://testnet.bscscan.com/",
    },
    "0x1": {
        chainName: "Ethereum mainnet",
        symbol: "ETH",
        rpcUrl: process.env.INFURA_ETH,
        explorer: "https://etherscan.io/",
    },
    "0x2a": {
        chainName: "Ethereum Testnet rinkeby",
        symbol: "ETH",
        rpcUrl: process.env.INFURA_RINKEBY,
        explorer: "https://rinkeby.etherscan.io/",
    }    
}  