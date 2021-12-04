import Class from "./Dropdown2.module.sass"
export default function Dropdown({data}) {
    const toggleDropdown = (evt) =>{
        evt.target.parentElement.classList.toggle(`${Class.active}`)
        console.log(evt.target.parentElement)
    }
    return <>
        <div className={Class.dropdown}>
            <div className={Class.dropdownIcon} onClick={toggleDropdown}>{data.icon}</div>
            <div className={Class.dropdownList}>
                {data.items.map((item, index)=>{
                    return <div key={index} className={Class.dropdownItem}>{item.text}</div>
                })}
            </div>
        </div>
    </>
}

{/* <Dropdown data={{icon: <i className="far fa-list-alt fa-2x"></i>, items: [
                        {text: <div className={Class.setProfile}>
                        
                            <InputTextField data={{ref: usernameRef,callback: null,placeholder: "Input new user name",width: null}} />
                            <InputTextField data={{ref: pwdRef,callback: null,placeholder: "Input new password",width: null}} />
                            <input type="file" accept="image/png, image/gif, image/jpeg" ref={avatarRef}/>
                            <button onClick={setUserInfo}>Set</button>

                        </div>, url: ""}, 
                    ]}} /> */}