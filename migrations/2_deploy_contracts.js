
const ERC20 = artifacts.require("ERC20")

const Web3 = require("web3")
const path = require("path");
const dotenv = require('dotenv');
result = dotenv.config({ path: path.resolve("../.env") });
if (result.error) {
    console.log("Fail to load .env varilable: migrations.2_deploy_contracts")
    throw result.error
}

module.exports = async function (deployer, network, accounts) {
    console.log(`Deployer accounts: ${accounts[0]}`)
    await deployer.deploy(ERC20, "MOCK", "MOCK")
    const token = await ERC20.deployed()
    console.log(`token addr: ${token.address}`)
};