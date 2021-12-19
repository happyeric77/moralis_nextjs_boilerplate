
import Class from "./Layout.module.sass"
import Head from 'next/head'
import Footer from "./Footer"
import {useEffect, useRef, useState} from "react"
import Header from "./Header"
import Web3Context from "../../src/Web3Context"
import { useChain, useMoralis } from "react-moralis";

import { supportedChains } from "../../src/networkProvider"


function Layout({...props}): JSX.Element {
    
    const [currentChain, setChain] = useState<string|null>()

    // Moralis chainId retreiving
    const { switchNetwork, chainId} = useChain();


    // Moralis web3 retreiving
    const { web3,  enableWeb3, isWeb3Enabled } = useMoralis()
    
    // Login & logout
    const { authenticate, isAuthenticated, user } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();
    

    useEffect(()=>{
        if (chainId && !supportedChains[chainId]) {
            alert("Not supported chain")
            return
        }
        web3 && web3.setProvider(chainId && supportedChains[chainId].rpcUrl) 
        enableWeb3()
        fetchData()
    }, [user, chainId])
    const fetchData = async () =>{
        setChain(chainId && supportedChains[chainId].chainName)
    }

    async function login() {
        enableWeb3()
        if(isAuthenticated){
            alert("Already logged in")
            return
        }
        await authenticate()
        setChain(chainId && supportedChains[chainId].chainName)        
    }
    

    async function signout() {
        try {
            await logout()
        } catch (e){
            console.log(`Logout fail ${e}`)
        }
    }

    return <>
    
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* fontawesome */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"/>
            
            <title>Nextjs Boilerplate</title>
        </Head>

        <div className={Class.layout} >

            <Header 
                userAddr={user && user.get("ethAddress")} 
                chain={currentChain} 
                login={login} 
                logout={signout} 
                isAuthenticated={isAuthenticated}
                supportedChains={supportedChains}
                switchNetwork={switchNetwork}
            />
            <Web3Context.Provider value={{addr: user && user.get("ethAddress"),chain: currentChain, web3: web3, chainId: chainId, user: user}}>
                <main className={Class.content} >{props.children}</main>
            </Web3Context.Provider>

            <Footer data={{
                pages: [
                    // {pageName: "Contact us", url: ""}
                ],
                // github: "",
                twitter: "",
                telegram: "",
                medium: "",
                copyright: "Copyright © ColorfulLife. All Rights Reserved",
            }}/>
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