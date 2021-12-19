import { createContext } from "react"
import {ContextType} from "./types"

let defaultContext: ContextType = {
    addr: null,
    chain: null,
    web3: null,
    user: null,
    chainId: null,
}

const Web3Context = createContext<ContextType>(defaultContext)

export default Web3Context
