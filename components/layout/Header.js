
import Button from "../ui/Button"
import Class from "./Header.module.sass"
import router from 'next/router'


function Header({userAddr, chain, login, logout}) {


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

            <div className={Class.buttons}>
                {!userAddr && <Button data={loginButtonData} />}
                {userAddr && <Button data={logoutButtonData} />}
            </div>
            
        </div>
    </>
}
export default Header