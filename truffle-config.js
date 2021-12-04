const HDWalletProvider = require("@truffle/hdwallet-provider");
path = require("path")
const dotenv = require('dotenv');
result = dotenv.config({ path: "./.env" });
if (result.error) {
    console.log("Fail to load .env varilable: truffle-config.js")
    throw result.error
}

module.exports = {
  contracts_build_directory: path.join(__dirname, "src/contracts"),
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: '*' // Match any network id
    },

    /* Offical BSC doc & tools:
    ** truffle: https://docs.binance.org/smart-chain/developer/deploy/truffle.html
    ** developer: https://docs.binance.org/smart-chain/developer/rpc.html
    ** testnet faucet: https://testnet.binance.org/faucet-smart
    */ 
    bsctestnet: {
      provider: () => new HDWalletProvider( process.env.PRIVATE_KEY, `https://data-seed-prebsc-2-s3.binance.org:8545`, 0),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    kcctestnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://rpc-testnet.kcc.network`, 0),
      network_id: 322,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscmainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://bsc-dataseed1.binance.org`, 0),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {
    // reporter: 'eth-gas-reporter',
  },
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}