import Class from "./Dropdown3.module.sass"
export default function Dropdown({data}) {
    
    return <>
        <div className={Class.dropdown} onChange={data.onChange}>
            <div className={Class.dropdownIcon}  >{data.icon}</div>

            <select className={Class.dropdownList} ref={data.ref}>
                {data.items.map((item, index)=>{
                    return <option key={index} className={Class.dropdownItem} value={item.address}>{item.name}</option>
                })}
            </select>
        </div>
    </>
}

// data = {icon: "", ref: null, onChange: null, items:[{text: "", value: ""}]}

