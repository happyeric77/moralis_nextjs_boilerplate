import Class from "./DropdownSection.module.css"
import { useState } from "react"
function DropdownSection({data}) {
    const [selected, setSelected] = useState(data.list[0])
    function select(evt) {
        data.list.forEach(el=>{
            if (el.label == evt.target.innerHTML){
                setSelected(el)
            }
        })
    }
    return <>
        <div className={Class.dropdownSection}>
            <div className={Class.dropdown}>
                <button className={Class.dropbtn}>{data.title}</button>
                <div className={Class.dropdownContent}>
                    {data.list.map((el, key)=>{
                        return <div className={Class.dropdownItem} key={key} onClick={select}>{el.label}</div>
                    })}
                </div>
                <div className={Class.dropdownDetail}>
                    {selected.content}
                </div>
            </div>
            
        </div>
    </>
}
export default DropdownSection