import Moralis from "moralis"

type ChainType = {
    chainName: string,
    rpcUrl: string,
    symbol: string,
    explorer: string
}

type UserType = {
    username: string, addr: string, avatar: any
}

type ContextType = {
    addr: string | null | undefined,
    chain: string | null| undefined, 
    web3: any, 
    chainId: string | null, 
    user: Moralis.User | null,
}

// Props
type HeaderProps = {
    userAddr: string | null,
    chain: string | null | undefined,
    login: ()=>{},
    logout: ()=>{},
    isAuthenticated: boolean, 
    supportedChains: {[key: string]: ChainType}, 
    switchNetwork: (providedChainId: string) => Promise<void>
}

type FooterProps = {
    data: {
        pages: {pageName: string, url: string}[],
        twitter: string,
        telegram: string,
        medium: string,
        copyright: string,
    }
}

export type { ChainType, UserType, ContextType, HeaderProps, FooterProps}