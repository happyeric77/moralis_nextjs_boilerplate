import Class from "./Dropdown.module.sass"
export default function Dropdown({data}) {
    const toggleDropdown = (evt) =>{
        evt.target.parentElement.classList.toggle(`${Class.active}`)
        console.log(evt.target.parentElement)
        console.log(evt.target)
    }
    return <>
        <div className={Class.dropdown}>
            <div className={Class.dropdownIcon} onClick={toggleDropdown}>{data.icon}</div>
            <div className={Class.dropdownList}>
                {data.items.map((item, index)=>{
                    return <div key={index} className={Class.dropdownItem} >{item.text}</div>
                })}
            </div>
        </div>
    </>
}

// data = {icon: "", items: [{text: "", value: ""}, {text: "", value: ""}]}