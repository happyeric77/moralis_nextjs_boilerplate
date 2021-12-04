
import Class from "./Layout.module.css"
import Head from 'next/head'
import Footer from "./Footer"
import {useEffect, useRef, useState} from "react"
import Header from "./Header"
import getWeb3, {supportedChain, defaultWeb3} from "../../src/getWeb3"
import Web3Context from "../../src/Web3Context"


function Layout(props) {
    const web3 = useRef(defaultWeb3)
    const [userAddr, setUserAddr] = useState()
    const [currentChain, setChain] = useState()

    useEffect(()=>{
        fetchData()
    }, [web3])
    const fetchData = async () =>{
        setChain(supportedChain[await defaultWeb3.eth.getChainId()])
    }

    const footerData = {
        pages: [
            // {pageName: "Contact us", url: ""}
        ],
        // github: "",
        twitter: "",
        telegram: "",
        medium: "",
        copyright: "Copyright © MultiFarm. All Rights Reserved",
    }

    function clearUserInfo() {
        setUserAddr(null)
    }

    async function login() {
        web3.current = await getWeb3(321)
        const chainId = await web3.current.eth.getChainId()
        if (!supportedChain[chainId]) {alert("Only support BSC network, make sure you are in correct network")}
        setChain(supportedChain[chainId])
        const userAddrs = await web3.current.eth.getAccounts()
        setUserAddr(userAddrs[0])
    }

    async function logout() {
        try {
            // for walletconnect
            web3.current && await web3.current._provider.disconnect()
            
        } catch (e){
            // Injected web3
            web3.current && web3.current.eth.accounts.wallet.clear()
        }
        clearUserInfo()
        setUserAddr(null)
        setChain(supportedChain[await defaultWeb3.eth.getChainId()])
        web3.current = defaultWeb3
    }

    return <>
    
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* fontawesome */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"/>
            
            <title>Multitoken</title>
        </Head>

        <div className={Class.layout} >

            <Header userAddr={userAddr} chain={currentChain} login={login} logout={logout}/>
            {process.env.NEXT_PUBLIC_APPLICATION_ID}
            <Web3Context.Provider value={{addr: userAddr,chain: currentChain, web3: web3.current}}>
                <main className={Class.content} >{props.children}</main>
            </Web3Context.Provider>
  
            

            <Footer data={footerData}/>
        </div>
    
    </>
}


export default Layout

/************************
 * Data format example **
 ***********************/

//  const layoutData = {
//     pages: [
//         {pageName: "Blockchain Dev", url: "blockchain_dev"},
//         {pageName: "Web Dev", url: "web_dev"},
//         {pageName: "About Me", url: "about_me"},
//         {pageName: "Contact ME", url: "contact_me"}
//     ],
//     github: "",
//     twitter: "",
// }