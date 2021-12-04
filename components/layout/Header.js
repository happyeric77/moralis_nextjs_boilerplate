
import Button from "../ui/Button"
import Class from "./Header.module.sass"
import router from 'next/router'
import 'antd/dist/antd.css'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


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
    
    const chainMenu = (
        <Menu>
            {Object.keys(supportedChains).map((chain, id)=>{
                return <Menu.Item key={id}><a onClick={()=>{switchNetwork(chain)}}>{supportedChains[chain][0]}</a></Menu.Item>
            })}
        </Menu>
    );

    return <>
        <div className={Class.header}>

            <div className={Class.imgs} onClick={()=>{router.push("/")}} >
            </div>

            
            <div className={Class.userInfo}>                
                <div className="addr">{userAddr && userAddr.slice(0,6)+ "...."+userAddr.slice(-4)}</div>
                <div className="chain">{userAddr && chain}</div>
            </div>

            <div className={Class.selectChain} style={{cursor: "pointer"}}>
                <Dropdown overlay={chainMenu} trigger={['click']} >
                    <div className="ant-dropdown-link">
                        Select Network <DownOutlined />
                    </div>
                </Dropdown>
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