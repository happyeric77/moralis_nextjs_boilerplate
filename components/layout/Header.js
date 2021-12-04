
import Button from "../ui/Button"
import Class from "./Header.module.sass"
import router from 'next/router'
import Dropdown from "../ui/Dropdown2"


function Header({userAddr, chain, login, logout, isAuthenticated, supportedChains, switchNetwork}) {

    const loginButtonData = {
        components: [<div key="1" className="connect">Connect</div>],
        width: "150px",
        callback: login
    }

    const logoutButtonData = {
        components: [<div key="1" className="disconnect">Disconnect</div> ],
        width: "150px",
        callback: logout
    }    

    return <>
        <div className={Class.header}>

            <div className={Class.imgs} onClick={()=>{router.push("/")}} >
            </div>

            
            <div className={Class.userInfo}>                
                <div className="addr">{userAddr && userAddr.slice(0,6)+ "...."+userAddr.slice(-4)}</div>
                <div className="chain">{userAddr && chain}</div>
            </div>

            <div className={Class.selectChain}>
                <Dropdown data={{icon: <i className="far fa-list-alt fa-2x">　Networks </i>, items: 
                        Object.keys(supportedChains).map((chain)=>{
                            return {text: <button onClick={()=>{switchNetwork(chain)}}>{supportedChains[chain][0]}</button>}
                        })
                    }}/>
            </div>
            

            <div className={Class.buttons}>
                {!isAuthenticated ? 
                <Button data={loginButtonData} /> :
                <Button data={logoutButtonData} />
                }
            </div>
            
        </div>
    </>
}
export default Header