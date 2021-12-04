import Web3Context from "../../src/Web3Context"
import { useContext, useEffect } from "react"
import { useMoralis } from "react-moralis";

export default function AppName() {
    const { authenticate, isAuthenticated, user } = useMoralis();
    const web3Context = useContext(Web3Context)
    useEffect(()=>{
        console.log(web3Context)
    }, [web3Context])
    return <>
        <div>
            <button onClick={() => authenticate()}>Authenticate</button>
        </div>
    </>
}