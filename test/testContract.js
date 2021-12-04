
const ERC20 = artifacts.require("ERC20")
const path = require("path");
const expect = require("./setupTest")
const {time} = require("@openzeppelin/test-helpers")
const dotenv = require('dotenv');
const { web3 } = require("@openzeppelin/test-helpers/src/setup");
result = dotenv.config({ path: "./.env" });

if (result.error) {
    console.log("Fail to load .env varilable: test.MyToken.test.js")
    throw result.error
}

contract ("My contract test", ([alice, bob, care, dev, eric, frank, gary, harry, iris, jerry, kevin, lora, money, noah, olivia])=>{
    beforeEach(async ()=>{
        this.startLine = (content)=>{
            console.log(`------------ ${content} ------------`)
        }
        this.finishLine = (content) => {
            console.log(`============ ${content} ============`)
        }
        this.printTestContent = async (content) => {
            console.log(`  * ${content}`) 
        }
        this.beforeAndAfter = (title ,before, after) =>{
            this.printTestContent(`${title}: ${before} --> ${after} dif: (${after - before})`)
        }
    })

    it("Should deploy and set contracts parameters", async () => {
        this.token = await ERC20.new("Multitoken", "MULTI")   
        this.startLine("Deploy contracts")
        this.printTestContent(`Mock token addr: ${this.token.address}`)
        this.finishLine("")
    })


})